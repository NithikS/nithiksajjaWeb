import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

// Pop-up form shown when a scanned ID is not on the roster.
// Both names are required. Cancel throws the scan away.
const UnknownIdForm = ({ scannedId, hasRoster, onSave, onCancel }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [showErrors, setShowErrors] = useState(false)
  const firstNameInput = useRef(null)
  const onCancelRef = useRef(onCancel)
  onCancelRef.current = onCancel

  // Focus the first box when the form opens, and let Escape cancel.
  useEffect(() => {
    firstNameInput.current?.focus()

    const handleEscape = (event) => {
      if (event.key === 'Escape') onCancelRef.current()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const trimmedFirst = firstName.trim()
  const trimmedLast = lastName.trim()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (trimmedFirst === '' || trimmedLast === '') {
      setShowErrors(true)
      return
    }
    onSave(trimmedFirst, trimmedLast)
  }

  return (
    <div className="scanner-modal-backdrop">
      <div
        className="scanner-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="unknown-id-title"
        aria-describedby="unknown-id-description"
      >
        <h2 id="unknown-id-title" className="h4 mb-2">
          {hasRoster ? 'ID not on roster' : 'New check in'}
        </h2>
        <p id="unknown-id-description" className="mb-3">
          Scanned ID: <strong className="scanner-id-text">{scannedId}</strong>
          <br />
          Enter this person&apos;s name to check them in.
          {hasRoster && ' They will be marked as "Not on roster."'}
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="walk-in-first-name" className="form-label fw-bold">
              First Name
            </label>
            <input
              id="walk-in-first-name"
              ref={firstNameInput}
              type="text"
              className={`form-control form-control-lg ${showErrors && trimmedFirst === '' ? 'is-invalid' : ''}`}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              autoComplete="off"
              autoCapitalize="words"
              required
              aria-required="true"
              aria-invalid={showErrors && trimmedFirst === ''}
            />
            <div className="invalid-feedback">First name is required.</div>
          </div>

          <div className="mb-4">
            <label htmlFor="walk-in-last-name" className="form-label fw-bold">
              Last Name
            </label>
            <input
              id="walk-in-last-name"
              type="text"
              className={`form-control form-control-lg ${showErrors && trimmedLast === '' ? 'is-invalid' : ''}`}
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              autoComplete="off"
              autoCapitalize="words"
              required
              aria-required="true"
              aria-invalid={showErrors && trimmedLast === ''}
            />
            <div className="invalid-feedback">Last name is required.</div>
          </div>

          <div className="d-flex gap-3">
            <button type="button" className="btn btn-outline-secondary btn-lg flex-fill scanner-big-button" onClick={onCancel}>
              Cancel scan
            </button>
            <button type="submit" className="btn btn-lg flex-fill scanner-big-button scanner-primary-button">
              Check in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

UnknownIdForm.propTypes = {
  scannedId: PropTypes.string.isRequired,
  hasRoster: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default UnknownIdForm
