import Icon from './Icon'
import { experience, sectionCopy } from '../data/portfolio'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{sectionCopy.experience.eyebrow}</span>
          <h2 className="section-title">
            {sectionCopy.experience.title}
            <span className="gradient-text">{sectionCopy.experience.accent}</span>
          </h2>
          <p className="section-lead">{sectionCopy.experience.lead}</p>
        </div>

        <ol className="timeline">
          {experience.map((job, i) => (
            <li
              className="timeline__item reveal"
              key={job.company}
              style={{ '--reveal-delay': `${i * 110}ms` }}
            >
              <span className={`timeline__marker ${job.current ? 'is-current' : ''}`} />

              <article className="card timeline__card">
                <header className="timeline__head">
                  <div>
                    {/* No "Current" badge — the period already reads
                        "2024 — Present". `job.current` still drives the
                        highlighted timeline marker. */}
                    <h3 className="timeline__role">{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <div className="timeline__when">
                    <span className="timeline__period">{job.period}</span>
                    <span className="timeline__location">
                      <Icon name="location" size={13} />
                      {job.location}
                    </span>
                  </div>
                </header>

                <ul className="timeline__points">
                  {job.points.map((point, pi) => (
                    <li key={pi}>
                      <Icon name="check" size={15} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline__stack">
                  {job.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
