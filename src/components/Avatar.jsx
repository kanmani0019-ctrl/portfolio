import { useState } from 'react'
import { profile } from '../data/portfolio'

/**
 * Renders `profile.photo`, falling back to the initials monogram when no
 * photo is configured or the file is missing. Used by the navbar, the footer
 * and the About portrait so there is a single fallback rule for all three.
 */
export default function Avatar({ className = '', rounded = false }) {
  const [failed, setFailed] = useState(false)
  const usePhoto = Boolean(profile.photo) && !failed

  return (
    <span className={`avatar ${rounded ? 'avatar--round' : ''} ${className}`}>
      {usePhoto ? (
        <img
          src={profile.photo}
          alt={profile.name}
          onError={() => setFailed(true)}
        />
      ) : (
        profile.initials
      )}
    </span>
  )
}
