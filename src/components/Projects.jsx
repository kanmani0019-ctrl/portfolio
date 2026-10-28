import { useMemo, useState } from 'react'
import Icon from './Icon'
import CodeCard from './CodeCard'
import { projects, sectionCopy } from '../data/portfolio'
import useScrollReveal from '../hooks/useScrollReveal'
import './Projects.css'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filters = useMemo(
    () => ['All', ...new Set(projects.flatMap((p) => p.tags))],
    []
  )

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter]
  )

  // Re-scan for new cards whenever the filter swaps them in.
  useScrollReveal([filter])

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{sectionCopy.projects.eyebrow}</span>
          <h2 className="section-title">
            {sectionCopy.projects.title}
            <span className="gradient-text">{sectionCopy.projects.accent}</span>
          </h2>
          <p className="section-lead">{sectionCopy.projects.lead}</p>
        </div>

        <div className="projects__filters reveal" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`projects__filter ${filter === f ? 'is-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="projects__filterCount">
                {f === 'All'
                  ? projects.length
                  : projects.filter((p) => p.tags.includes(f)).length}
              </span>
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visible.map((p, i) => (
            <article
              className={`card project reveal ${p.featured ? 'project--featured' : ''}`}
              key={p.title}
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              <div className="project__top">
                <span className="project__icon">
                  <Icon name={p.featured ? 'sparkle' : 'code'} size={20} />
                </span>
                <div className="project__links">
                  {p.links.repo && (
                    <a
                      href={p.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} source code`}
                      title="Source code"
                    >
                      <Icon name="github" size={18} />
                    </a>
                  )}
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} live demo`}
                      title="Live demo"
                    >
                      <Icon name="external" size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project__title">{p.title}</h3>
              <p className="project__blurb">{p.blurb}</p>
              {p.featured && p.detail && <p className="project__detail">{p.detail}</p>}

              {p.featured && p.points?.length > 0 && (
                <ul className="project__points">
                  {p.points.map((point) => (
                    <li key={point}>
                      <Icon name="check" size={15} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {p.code && (
                <CodeCard
                  snippet={p.code.snippet}
                  file={p.code.file}
                  className="project__code"
                />
              )}

              {p.metrics?.length > 0 && (
                <div className="project__metrics">
                  {p.metrics.map((m) => (
                    <div className="project__metric" key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="project__stack">
                {p.stack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="projects__empty">No projects tagged “{filter}” yet.</p>
        )}
      </div>
    </section>
  )
}
