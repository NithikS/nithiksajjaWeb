// Helper functions for the attendance scanner.
// Everything here runs in the browser. Nothing is uploaded anywhere.

// Invisible marker at the start of CSV files saved by Excel
const BYTE_ORDER_MARK = String.fromCharCode(0xfeff)

// Clean up a scanned or typed ID so the same card always matches.
// Code 39 barcodes sometimes include the * start/stop characters.
export function normalizeId(rawId) {
  return String(rawId ?? '')
    .trim()
    .replace(/^\*+|\*+$/g, '')
    .trim()
    .toUpperCase()
}

// Spreadsheet apps often drop leading zeros ("00123" becomes "123"),
// so we also compare IDs with the leading zeros removed.
function stripLeadingZeros(id) {
  const stripped = id.replace(/^0+/, '')
  return stripped === '' ? '0' : stripped
}

export function idsMatch(idA, idB) {
  if (idA === idB) return true
  return stripLeadingZeros(idA) === stripLeadingZeros(idB)
}

export function findRosterMember(roster, scannedId) {
  return roster.find((member) => idsMatch(member.id, scannedId)) || null
}

export function findCheckIn(checkIns, scannedId) {
  return checkIns.find((checkIn) => idsMatch(checkIn.id, scannedId)) || null
}

// Split CSV text into rows of cells. Handles quoted cells with commas,
// escaped quotes (""), and Windows or Mac line endings.
function parseCsvRows(csvText) {
  const rows = []
  let currentRow = []
  let currentCell = ''
  let insideQuotes = false
  // Remove Excel's byte order mark if the file starts with one
  const text = csvText.startsWith(BYTE_ORDER_MARK) ? csvText.slice(1) : csvText

  for (let index = 0; index < text.length; index++) {
    const character = text[index]

    if (insideQuotes) {
      if (character === '"' && text[index + 1] === '"') {
        currentCell += '"'
        index++
      } else if (character === '"') {
        insideQuotes = false
      } else {
        currentCell += character
      }
    } else if (character === '"') {
      insideQuotes = true
    } else if (character === ',') {
      currentRow.push(currentCell)
      currentCell = ''
    } else if (character === '\n' || character === '\r') {
      if (character === '\r' && text[index + 1] === '\n') index++
      currentRow.push(currentCell)
      rows.push(currentRow)
      currentRow = []
      currentCell = ''
    } else {
      currentCell += character
    }
  }

  currentRow.push(currentCell)
  rows.push(currentRow)

  // Drop blank lines
  return rows.filter((row) => row.some((cell) => cell.trim() !== ''))
}

function simplifyHeader(header) {
  return header.toLowerCase().replace(/[^a-z]/g, '')
}

// Turn roster CSV text into [{ id, firstName, lastName }].
// Expects the columns ID, First Name, Last Name (any order, any case).
export function parseRosterCsv(csvText) {
  const rows = parseCsvRows(csvText)
  if (rows.length === 0) {
    throw new Error('The file is empty.')
  }

  const headers = rows[0].map(simplifyHeader)
  const idColumn = headers.findIndex((header) => ['id', 'studentid', 'idnumber'].includes(header))
  const firstNameColumn = headers.findIndex((header) => ['firstname', 'first'].includes(header))
  const lastNameColumn = headers.findIndex((header) => ['lastname', 'last'].includes(header))

  if (idColumn === -1 || firstNameColumn === -1 || lastNameColumn === -1) {
    throw new Error('The CSV needs these column headers: ID, First Name, Last Name.')
  }

  const roster = []
  const seenIds = new Set()

  rows.slice(1).forEach((row) => {
    const id = normalizeId(row[idColumn])
    if (id === '' || seenIds.has(id)) return
    seenIds.add(id)
    roster.push({
      id,
      firstName: (row[firstNameColumn] || '').trim(),
      lastName: (row[lastNameColumn] || '').trim(),
    })
  })

  if (roster.length === 0) {
    throw new Error('No members with an ID were found in the file.')
  }

  return roster
}

function escapeCsvCell(value) {
  const text = String(value ?? '')
  if (/[",\r\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`
  }
  return text
}

export function buildCsv(headerRow, dataRows) {
  return [headerRow, ...dataRows]
    .map((row) => row.map(escapeCsvCell).join(','))
    .join('\r\n')
}

export function formatTime(isoTime) {
  return new Date(isoTime).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

export function formatDateTime(isoTime) {
  return new Date(isoTime).toLocaleString()
}

// Today's date as YYYY-MM-DD, used in export file names.
export function todayStamp() {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

// Save a CSV to the device. The BOM helps Excel read names with accents.
export function downloadCsv(fileName, csvText) {
  const blob = new Blob([BYTE_ORDER_MARK + csvText], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

// Short confirmation beep using the Web Audio API.
// The audio context must be created after a tap (iPad Safari rule),
// so the page calls unlockAudio() when Start is pressed.
let audioContext = null

export function unlockAudio() {
  try {
    if (!audioContext) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      if (!AudioContextClass) return
      audioContext = new AudioContextClass()
    }
    if (audioContext.state === 'suspended') {
      audioContext.resume()
    }
  } catch {
    audioContext = null
  }
}

export function playBeep(frequency = 880, durationSeconds = 0.15) {
  if (!audioContext) return
  try {
    const oscillator = audioContext.createOscillator()
    const volume = audioContext.createGain()
    oscillator.type = 'sine'
    oscillator.frequency.value = frequency
    volume.gain.setValueAtTime(0.25, audioContext.currentTime)
    volume.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + durationSeconds)
    oscillator.connect(volume)
    volume.connect(audioContext.destination)
    oscillator.start()
    oscillator.stop(audioContext.currentTime + durationSeconds)
  } catch {
    // If sound fails, the visual flash still confirms the scan.
  }
}
