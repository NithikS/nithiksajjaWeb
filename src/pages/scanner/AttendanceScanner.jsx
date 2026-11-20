import { useEffect, useRef, useState } from 'react'
import PageHeader from '../../components/PageHeader.jsx'
import UnknownIdForm from './UnknownIdForm.jsx'
import { FACING_MODE_CHOICES, listCameras, startBarcodeCamera } from './barcodeCamera.js'
import {
  buildCsv,
  downloadCsv,
  findCheckIn,
  findRosterMember,
  formatDateTime,
  formatTime,
  normalizeId,
  parseRosterCsv,
  playBeep,
  todayStamp,
  unlockAudio,
} from './attendanceUtils.js'
import './scanner.css'

// Trial attendance scanner. Not linked from the main nav.
// Everything stays in this browser (localStorage). No backend.

const CHECK_INS_STORAGE_KEY = 'attendanceScanner.checkIns'
const ROSTER_STORAGE_KEY = 'attendanceScanner.roster'
const USE_ROSTER_STORAGE_KEY = 'attendanceScanner.useRoster'

// A card held in front of the camera gets read many times per second.
// Ignore repeat reads of the same ID inside this window.
const SAME_CARD_COOLDOWN_MS = 3000

// Two matching Code 39 reads must land within this window to count.
const CODE_39_CONFIRM_WINDOW_MS = 2500

function loadSavedList(storageKey) {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

// The roster switch is on unless it was turned off on this device before.
function loadUseRosterSetting() {
  return localStorage.getItem(USE_ROSTER_STORAGE_KEY) !== 'false'
}

function hasName(person) {
  return Boolean(person.firstName || person.lastName)
}

// Show the name, or the ID if there is no name (roster switched off).
function fullName(person) {
  return hasName(person) ? `${person.firstName} ${person.lastName}`.trim() : `ID ${person.id}`
}

// Mark which check ins are on the roster. Check ins saved without a name
// (while the roster switch was off) get the name from the roster.
function matchCheckInsToRoster(checkIns, roster) {
  return checkIns.map((checkIn) => {
    const rosterMember = findRosterMember(roster, checkIn.id)
    if (!rosterMember) return { ...checkIn, onRoster: false }
    if (hasName(checkIn)) return { ...checkIn, onRoster: true }
    return { ...checkIn, firstName: rosterMember.firstName, lastName: rosterMember.lastName, onRoster: true }
  })
}

// Ask before doing something destructive. Uses SweetAlert2 (loaded in index.html) when available.
async function confirmAction(title, text, confirmLabel) {
  if (window.Swal) {
    const result = await window.Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmLabel,
      cancelButtonText: 'Keep it',
      focusCancel: true,
    })
    return result.isConfirmed
  }
  return window.confirm(`${title}\n\n${text}`)
}

function describeCameraError(error) {
  const errorText = String(error?.name || error?.message || error)
  if (!window.isSecureContext) {
    return 'The camera only works over HTTPS. Open this page with https://.'
  }
  if (errorText.includes('NotAllowed') || errorText.includes('Permission')) {
    return 'Camera permission was denied. Allow camera access in your browser settings, then press Start again.'
  }
  if (errorText.includes('NotFound') || errorText.includes('Overconstrained')) {
    return 'That camera was not found. Try picking a different camera.'
  }
  if (errorText.includes('NotReadable')) {
    return 'The camera is being used by another app or tab. Close it and try again.'
  }
  return `Could not start the camera: ${errorText}`
}

const AttendanceScanner = () => {
  const [roster, setRoster] = useState(() => loadSavedList(ROSTER_STORAGE_KEY))
  const [checkIns, setCheckIns] = useState(() => loadSavedList(CHECK_INS_STORAGE_KEY))
  const [useRoster, setUseRoster] = useState(loadUseRosterSetting)
  const [cameraChoice, setCameraChoice] = useState('environment')
  const [detectedCameras, setDetectedCameras] = useState([])
  const [isScanning, setIsScanning] = useState(false)
  const [isStarting, setIsStarting] = useState(false)
  const [statusMessage, setStatusMessage] = useState(null)
  const [flash, setFlash] = useState(null)
  const [unknownScanId, setUnknownScanId] = useState(null)

  const cameraRef = useRef(null) // controls returned by startBarcodeCamera
  const videoRef = useRef(null)
  const lastScanRef = useRef({ id: '', time: 0 })
  const pendingCode39Ref = useRef({ id: '', time: 0 })
  const rosterInputRef = useRef(null)

  // Save to localStorage on every change so a refresh or closed tab loses nothing.
  useEffect(() => {
    localStorage.setItem(CHECK_INS_STORAGE_KEY, JSON.stringify(checkIns))
  }, [checkIns])

  useEffect(() => {
    localStorage.setItem(ROSTER_STORAGE_KEY, JSON.stringify(roster))
  }, [roster])

  useEffect(() => {
    localStorage.setItem(USE_ROSTER_STORAGE_KEY, String(useRoster))
  }, [useRoster])

  const showStatus = (type, text) => {
    setStatusMessage({ type, text, shownAt: Date.now() })
  }

  const showFlash = (type) => {
    setFlash({ type, shownAt: Date.now() })
  }

  const resumeScanner = () => {
    cameraRef.current?.setPaused(false)
  }

  const addCheckIn = (person, onRoster) => {
    const newCheckIn = {
      id: person.id,
      firstName: person.firstName,
      lastName: person.lastName,
      time: new Date().toISOString(),
      onRoster,
    }
    setCheckIns((previous) => [...previous, newCheckIn])
    return newCheckIn
  }

  // Code 39 has no built-in check digit, so a blurry frame can be misread.
  // Only accept a Code 39 read once two frames agree.
  const isConfirmedCode39Read = (scannedId, now) => {
    const pending = pendingCode39Ref.current
    if (pending.id === scannedId && now - pending.time < CODE_39_CONFIRM_WINDOW_MS) {
      pendingCode39Ref.current = { id: '', time: 0 }
      return true
    }
    pendingCode39Ref.current = { id: scannedId, time: now }
    return false
  }

  // Called by the camera every time it reads a barcode.
  const handleScan = (rawText, isCode39) => {
    const scannedId = normalizeId(rawText)
    if (scannedId === '' || unknownScanId !== null) return

    const now = Date.now()
    const lastScan = lastScanRef.current
    if (lastScan.id === scannedId && now - lastScan.time < SAME_CARD_COOLDOWN_MS) return
    if (isCode39 && !isConfirmedCode39Read(scannedId, now)) return
    lastScanRef.current = { id: scannedId, time: now }

    const existingCheckIn = findCheckIn(checkIns, scannedId)
    if (existingCheckIn) {
      showStatus('warning', `Already checked in: ${fullName(existingCheckIn)}`)
      showFlash('warning')
      playBeep(330, 0.25)
      return
    }

    // Roster switched off: check in right away with just the ID.
    if (!useRoster) {
      addCheckIn({ id: scannedId, firstName: '', lastName: '' }, false)
      showStatus('success', `Checked in: ID ${scannedId}`)
      showFlash('success')
      playBeep(880, 0.15)
      return
    }

    const rosterMember = findRosterMember(roster, scannedId)
    if (rosterMember) {
      addCheckIn(rosterMember, true)
      showStatus('success', `Checked in: ${fullName(rosterMember)}`)
      showFlash('success')
      playBeep(880, 0.15)
      return
    }

    // Unknown ID: pause decoding and ask for a name. The video keeps running.
    cameraRef.current?.setPaused(true)
    playBeep(600, 0.1)
    showFlash('info')
    setUnknownScanId(scannedId)
  }

  // The camera callback is registered once, so point it at the latest handler.
  const handleScanRef = useRef(handleScan)
  handleScanRef.current = handleScan

  const saveUnknownCheckIn = (firstName, lastName) => {
    addCheckIn({ id: unknownScanId, firstName, lastName }, false)
    showStatus('success', `Checked in: ${firstName} ${lastName} (not on roster)`)
    showFlash('success')
    playBeep(880, 0.15)
    lastScanRef.current = { id: unknownScanId, time: Date.now() }
    setUnknownScanId(null)
    resumeScanner()
  }

  const cancelUnknownCheckIn = () => {
    showStatus('info', 'Scan discarded.')
    lastScanRef.current = { id: unknownScanId || '', time: Date.now() }
    setUnknownScanId(null)
    resumeScanner()
  }

  const stopScanner = () => {
    cameraRef.current?.stop()
    cameraRef.current = null
    setIsScanning(false)
  }

  const startScanner = async (choice = cameraChoice) => {
    unlockAudio() // must happen during a tap for iPad Safari
    setIsStarting(true)
    setStatusMessage(null)
    stopScanner()

    try {
      cameraRef.current = await startBarcodeCamera({
        videoElement: videoRef.current,
        cameraChoice: choice,
        onDecode: (text, isCode39) => handleScanRef.current(text, isCode39),
      })
      if (unknownScanId !== null) cameraRef.current.setPaused(true)
      setIsScanning(true)
      // Camera names are only available after permission is granted.
      setDetectedCameras(await listCameras())
    } catch (error) {
      stopScanner()
      showStatus('danger', describeCameraError(error))
    } finally {
      setIsStarting(false)
    }
  }

  const handleCameraChange = (event) => {
    const newChoice = event.target.value
    setCameraChoice(newChoice)
    if (isScanning) startScanner(newChoice)
  }

  // Turn the camera off when leaving the page.
  useEffect(() => {
    return () => cameraRef.current?.stop()
  }, [])

  const handleRosterUpload = (event) => {
    const file = event.target.files?.[0]
    event.target.value = '' // allow re-uploading the same file
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      try {
        const newRoster = parseRosterCsv(String(reader.result))
        setRoster(newRoster)
        // Anyone already checked in who is on the new roster now counts as on roster.
        setCheckIns((previous) => matchCheckInsToRoster(previous, newRoster))
        showStatus('info', `Roster loaded: ${newRoster.length} members from ${file.name}.`)
      } catch (error) {
        showStatus('danger', `Could not read roster: ${error.message}`)
      }
    }
    reader.onerror = () => showStatus('danger', 'Could not read that file.')
    reader.readAsText(file)
  }

  const removeRoster = async () => {
    const confirmed = await confirmAction(
      'Remove the roster?',
      'Check ins are kept. New scans will ask for a name until you upload a roster again.',
      'Remove roster'
    )
    if (!confirmed) return
    setRoster([])
    setCheckIns((previous) => previous.map((checkIn) => ({ ...checkIn, onRoster: false })))
    showStatus('info', 'Roster removed.')
  }

  const handleUseRosterChange = (event) => {
    const turnedOn = event.target.checked
    setUseRoster(turnedOn)
    if (turnedOn) {
      // Fill in names for anyone scanned while the roster was off.
      setCheckIns((previous) => matchCheckInsToRoster(previous, roster))
      showStatus('info', roster.length > 0 ? 'Roster on.' : 'Roster on. Upload a roster CSV, or scans will ask for a name.')
    } else {
      showStatus('info', 'Roster off. Scans check in right away with just the ID.')
    }
  }

  const clearSession = async () => {
    const rosterNote = useRoster && roster.length > 0 ? ' The roster stays loaded.' : ''
    const confirmed = await confirmAction(
      'Clear this session?',
      `This deletes all ${checkIns.length} check ins on this device. Export first if you need them.${rosterNote}`,
      'Clear session'
    )
    if (!confirmed) return
    setCheckIns([])
    lastScanRef.current = { id: '', time: 0 }
    showStatus('info', 'Session cleared.')
  }

  // With the roster off, names are only shown if some check ins already have one.
  const showNameColumns = useRoster || checkIns.some(hasName)

  const exportCheckIns = () => {
    let headers
    let rows
    if (useRoster) {
      headers = ['First Name', 'Last Name', 'ID', 'Time', 'On Roster']
      rows = checkIns.map((checkIn) => [
        checkIn.firstName,
        checkIn.lastName,
        checkIn.id,
        formatDateTime(checkIn.time),
        checkIn.onRoster ? 'Yes' : 'No',
      ])
    } else if (showNameColumns) {
      headers = ['First Name', 'Last Name', 'ID', 'Time']
      rows = checkIns.map((checkIn) => [checkIn.firstName, checkIn.lastName, checkIn.id, formatDateTime(checkIn.time)])
    } else {
      headers = ['ID', 'Time']
      rows = checkIns.map((checkIn) => [checkIn.id, formatDateTime(checkIn.time)])
    }
    downloadCsv(`check-ins-${todayStamp()}.csv`, buildCsv(headers, rows))
  }

  const exportRoster = () => {
    const rosterRows = roster.map((member) => [
      member.firstName,
      member.lastName,
      member.id,
      findCheckIn(checkIns, member.id) ? 'Present' : 'Absent',
    ])
    const walkInRows = checkIns
      .filter((checkIn) => findRosterMember(roster, checkIn.id) === null)
      .map((checkIn) => [checkIn.firstName, checkIn.lastName, checkIn.id, 'Present'])
    const csv = buildCsv(['First Name', 'Last Name', 'ID', 'Status'], [...rosterRows, ...walkInRows])
    downloadCsv(`roster-attendance-${todayStamp()}.csv`, csv)
  }

  const presentRosterCount = roster.filter((member) => findCheckIn(checkIns, member.id)).length
  const walkInCount = checkIns.filter((checkIn) => !checkIn.onRoster).length
  const newestFirst = [...checkIns].reverse()

  return (
    <div className="scanner-page">
      <PageHeader title="Attendance Scanner" subTitle="Trial version. Data stays on this device." />

      <div className="container-fluid scanner-container my-4">
        {!window.isSecureContext && (
          <div className="alert alert-danger" role="alert">
            The camera only works over HTTPS. Open this page with https://.
          </div>
        )}

        <div className="row g-4">
          {/* Left: camera and scan result */}
          <div className="col-lg-7">
            <div className="scanner-panel">
              <div className="d-flex flex-wrap gap-2 align-items-end mb-3">
                <div className="flex-grow-1">
                  <label htmlFor="camera-picker" className="form-label fw-bold mb-1">
                    Camera
                  </label>
                  <select
                    id="camera-picker"
                    className="form-select form-select-lg"
                    value={cameraChoice}
                    onChange={handleCameraChange}
                    disabled={isStarting}
                  >
                    {FACING_MODE_CHOICES.map((camera) => (
                      <option key={camera.value} value={camera.value}>
                        {camera.label}
                      </option>
                    ))}
                    {detectedCameras.map((camera, cameraNumber) => (
                      <option key={camera.id} value={camera.id}>
                        {camera.label || `Camera ${cameraNumber + 1}`}
                      </option>
                    ))}
                  </select>
                </div>

                {isScanning ? (
                  <button type="button" className="btn btn-danger btn-lg scanner-big-button" onClick={stopScanner}>
                    <i className="bi bi-stop-fill me-1" aria-hidden="true"></i>
                    Stop
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-lg scanner-big-button scanner-primary-button"
                    onClick={() => startScanner()}
                    disabled={isStarting}
                  >
                    <i className="bi bi-camera-video-fill me-1" aria-hidden="true"></i>
                    {isStarting ? 'Starting...' : 'Start'}
                  </button>
                )}
              </div>

              <div className="scanner-viewport-wrapper">
                <video
                  ref={videoRef}
                  className={`scanner-video ${cameraChoice === 'user' ? 'scanner-video-mirrored' : ''}`}
                  playsInline
                  muted
                  aria-label="Camera preview for scanning ID barcodes"
                ></video>
                {!isScanning && (
                  <div className="scanner-viewport-placeholder">
                    <i className="bi bi-upc-scan" aria-hidden="true"></i>
                    <span>Press Start to turn on the camera</span>
                  </div>
                )}
                {flash && <div key={flash.shownAt} className={`scanner-flash scanner-flash-${flash.type}`} aria-hidden="true"></div>}
              </div>

              <div role="status" aria-live="polite" className="mt-3">
                {statusMessage && (
                  <div key={statusMessage.shownAt} className={`scanner-status scanner-status-${statusMessage.type}`}>
                    {statusMessage.text}
                  </div>
                )}
              </div>

              <p className="text-muted small mt-2 mb-0">
                Reads Code 39 and Code 128 barcodes. The barcode can be anywhere in view, tilted, sideways, or
                upside down. If it won&apos;t read, move the card a little closer or farther until the bars look sharp.
              </p>
            </div>
          </div>

          {/* Right: roster, counts, exports, and the check in list */}
          <div className="col-lg-5">
            <div className="scanner-panel mb-4">
              <div className="form-check form-switch scanner-switch mb-3">
                <input
                  id="use-roster-switch"
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={useRoster}
                  onChange={handleUseRosterChange}
                  aria-describedby="use-roster-help"
                />
                <label className="form-check-label fw-bold" htmlFor="use-roster-switch">
                  Use roster
                </label>
                <div id="use-roster-help" className="text-muted small">
                  {useRoster
                    ? 'Scans are matched to the roster. Unknown IDs ask for a name.'
                    : 'Scans check in right away with just the ID. No names needed.'}
                </div>
              </div>

              <div className="scanner-count-row">
                <div className="scanner-count">
                  <span className="scanner-count-number">
                    {useRoster && roster.length > 0 ? `${presentRosterCount} / ${roster.length}` : checkIns.length}
                  </span>
                  <span className="scanner-count-label">
                    {useRoster && roster.length > 0 ? 'Roster present' : 'Checked in'}
                  </span>
                </div>
                {useRoster && roster.length > 0 && (
                  <div className="scanner-count">
                    <span className="scanner-count-number">{walkInCount}</span>
                    <span className="scanner-count-label">Not on roster</span>
                  </div>
                )}
              </div>

              {useRoster && (
                <>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <input
                      ref={rosterInputRef}
                      id="roster-upload"
                      type="file"
                      accept=".csv,text/csv"
                      className="d-none"
                      onChange={handleRosterUpload}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-dark scanner-big-button"
                      onClick={() => rosterInputRef.current?.click()}
                      aria-describedby="roster-help"
                    >
                      <i className="bi bi-upload me-1" aria-hidden="true"></i>
                      {roster.length > 0 ? 'Replace roster' : 'Upload roster CSV'}
                    </button>
                    {roster.length > 0 && (
                      <button type="button" className="btn btn-link text-danger" onClick={removeRoster}>
                        Remove roster
                      </button>
                    )}
                  </div>
                  <p id="roster-help" className="text-muted small mt-2 mb-0">
                    CSV columns: ID, First Name, Last Name.
                  </p>
                </>
              )}

              <hr />

              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-outline-dark scanner-big-button"
                  onClick={exportCheckIns}
                  disabled={checkIns.length === 0}
                >
                  <i className="bi bi-download me-1" aria-hidden="true"></i>
                  Check ins CSV
                </button>
                {useRoster && (
                  <button
                    type="button"
                    className="btn btn-outline-dark scanner-big-button"
                    onClick={exportRoster}
                    disabled={roster.length === 0 && checkIns.length === 0}
                  >
                    <i className="bi bi-download me-1" aria-hidden="true"></i>
                    Roster CSV
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-outline-danger scanner-big-button ms-auto"
                  onClick={clearSession}
                  disabled={checkIns.length === 0}
                >
                  <i className="bi bi-trash me-1" aria-hidden="true"></i>
                  Clear session
                </button>
              </div>
            </div>

            <div className="scanner-panel">
              <h2 className="h5 mb-3">Check ins ({checkIns.length})</h2>
              {checkIns.length === 0 ? (
                <p className="text-muted mb-0">No one has checked in yet.</p>
              ) : (
                <div className="table-responsive scanner-list">
                  <table className="table table-sm align-middle mb-0">
                    <thead>
                      <tr>
                        {showNameColumns && <th scope="col">First Name</th>}
                        {showNameColumns && <th scope="col">Last Name</th>}
                        <th scope="col">ID</th>
                        <th scope="col">Time</th>
                        {useRoster && <th scope="col">On Roster</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {newestFirst.map((checkIn) => (
                        <tr key={checkIn.id}>
                          {showNameColumns && <td>{checkIn.firstName}</td>}
                          {showNameColumns && <td>{checkIn.lastName}</td>}
                          <td className="scanner-id-text">{checkIn.id}</td>
                          <td>{formatTime(checkIn.time)}</td>
                          {useRoster && (
                            <td>
                              {checkIn.onRoster ? 'Yes' : <span className="scanner-badge-walk-in">No</span>}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {unknownScanId !== null && (
        <UnknownIdForm
          scannedId={unknownScanId}
          hasRoster={roster.length > 0}
          onSave={saveUnknownCheckIn}
          onCancel={cancelUnknownCheckIn}
        />
      )}
    </div>
  )
}

export default AttendanceScanner
