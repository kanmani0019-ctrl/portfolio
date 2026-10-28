import { useEffect, useState } from 'react'
import Icon from './Icon'
import Avatar from './Avatar'
import { navLinks, profile } from '../data/portfolio'
import useActiveSection from '../hooks/useActiveSection'
import './Navbar.css'

const NAV_IDS = navLinks.map((l) => l.id)

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const active = useActiveSection(NAV_IDS)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const max = document.body.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__progress" style={{ width: `${progress}%` }} />

      <div className="container nav__inner">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          <Avatar className="nav__mark" />
          <span className="nav__brandText">
            {profile.name}
            <small>{profile.role}</small>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link ${active === link.id ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
              aria-current={active === link.id ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--primary nav__cta nav__cta--mobile"
            href={profile.resumeUrl}
            download
            onClick={() => setOpen(false)}
          >
            <Icon name="download" size={17} />
            Resume
          </a>
        </nav>

        <div className="nav__actions">
          <button
            className="nav__iconBtn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title="Toggle theme"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} />
          </button>

          <a className="btn btn--primary nav__cta" href={profile.resumeUrl} download>
            <Icon name="download" size={17} />
            Resume
          </a>

          <button
            className="nav__iconBtn nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} size={21} />
          </button>
        </div>
      </div>

      {open && <div className="nav__scrim" onClick={() => setOpen(false)} />}
    </header>
  )
}
