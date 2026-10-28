import Icon from './Icon'
import Avatar from './Avatar'
import { profile, techMarquee, heroFloats } from '../data/portfolio'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="container hero__inner">
        {/* ── Portrait, left-hand side ───────────────────────── */}
        <div className="hero__visual">
          <div className="hero__photoWrap">
            <span className="hero__dots" aria-hidden="true" />

            <div className="hero__photoRing">
              <Avatar className="hero__photo" />
              {profile.photoCaption && (
                <p className="hero__photoCaption">{profile.photoCaption}</p>
              )}
            </div>

            {heroFloats.map((f, i) => (
              <div className={`hero__float hero__float--${i + 1}`} key={f.value}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Copy ───────────────────────────────────────────── */}
        <div className="hero__copy">
          <span className="hero__badge">
            <span className="hero__dot" />
            {profile.availability}
          </span>

          <h1 className="hero__title">
            {profile.name.split(' ')[0]}{' '}
            <span className="gradient-text">
              {profile.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <p className="hero__role">
            <Icon name="code" size={18} />
            {profile.role}
          </p>

          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__summary">{profile.heroHook}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View my work
              <Icon name="arrowRight" size={18} />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
              <Icon name="mail" size={17} />
            </a>
          </div>

          <div className="hero__socials">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                className="hero__social"
                aria-label={s.label}
                title={s.label}
                target={s.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <Icon name={s.icon} size={19} />
              </a>
            ))}
            <span className="hero__location">
              <Icon name="location" size={15} />
              {profile.location}
            </span>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...techMarquee, ...techMarquee].map((t, i) => (
            <span className="marquee__item" key={i}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <Icon name="arrowDown" size={18} />
      </a>
    </section>
  )
}
