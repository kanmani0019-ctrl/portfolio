import { useEffect, useState } from 'react'
import Icon from './Icon'
import Avatar from './Avatar'
import { profile, navLinks } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <Avatar className="footer__mark" />
            <div>
              <strong>{profile.name}</strong>
              <span>{profile.role}</span>
            </div>
          </div>

          <nav className="footer__links" aria-label="Footer">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                aria-label={s.label}
                title={s.label}
                target={s.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <Icon name={s.icon} size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="container footer__bottom">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React and a lot of
            coffee.
          </p>
          <p className="footer__stack">
            <Icon name="code" size={14} />
            React · Vite · plain CSS
          </p>
        </div>
      </footer>

      <button
        className={`toTop ${showTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <Icon name="arrowDown" size={19} style={{ transform: 'rotate(180deg)' }} />
      </button>
    </>
  )
}
