import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import {
  profile,
  stats,
  highlights,
  education,
  certifications,
  sectionCopy,
} from '../data/portfolio'
import './About.css'

/** Counts from 0 to `value` once the element enters the viewport. */
function Counter({ value, suffix = '', decimals = 0 }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const run = () => {
      if (done.current) return
      done.current = true
      const duration = 1500
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setDisplay(value * eased)
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    if (!('IntersectionObserver' in window)) {
      setDisplay(value)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && run(),
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{sectionCopy.about.eyebrow}</span>
          <h2 className="section-title">
            {sectionCopy.about.title}
            <span className="gradient-text">{sectionCopy.about.accent}</span>
          </h2>
          <p className="section-lead">{sectionCopy.about.lead}</p>
        </div>

        <div className="about__grid">
          <div className="about__main reveal">
            <p className="about__text">{profile.summary}</p>
            {profile.aboutExtra && <p className="about__text">{profile.aboutExtra}</p>}

            <div className="about__stats">
              {stats.map((s) => (
                <div className="about__stat" key={s.label}>
                  <div className="about__statValue">
                    <Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                  </div>
                  <div className="about__statLabel">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__cards">
            {highlights.map((h, i) => (
              <article
                className="card about__card reveal"
                key={h.title}
                style={{ '--reveal-delay': `${i * 90}ms` }}
              >
                <span className="about__cardIcon">
                  <Icon name={h.icon} size={21} />
                </span>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about__extra">
          <div className="card about__panel reveal">
            <h3 className="about__panelTitle">
              <Icon name="award" size={18} /> Certifications
            </h3>
            <ul className="about__list">
              {certifications.map((c) => (
                <li key={c.name}>
                  <Icon name="check" size={16} />
                  <div>
                    <strong>{c.name}</strong>
                    <span>{[c.issuer, c.year].filter(Boolean).join(' · ')}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card about__panel reveal" style={{ '--reveal-delay': '110ms' }}>
            <h3 className="about__panelTitle">
              <Icon name="layers" size={18} /> Education
            </h3>
            <ul className="about__list">
              {education.map((e) => (
                <li key={e.school}>
                  <Icon name="check" size={16} />
                  <div>
                    <strong>{e.degree}</strong>
                    <span>{[e.school, e.period].filter(Boolean).join(' · ')}</span>
                    {e.note && <span className="about__note">{e.note}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
