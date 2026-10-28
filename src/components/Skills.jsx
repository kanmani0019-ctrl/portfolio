import Icon from './Icon'
import { skillGroups, learning, sectionCopy } from '../data/portfolio'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{sectionCopy.skills.eyebrow}</span>
          <h2 className="section-title">
            {sectionCopy.skills.title}
            <span className="gradient-text">{sectionCopy.skills.accent}</span>
          </h2>
          <p className="section-lead">{sectionCopy.skills.lead}</p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, gi) => (
            <article
              className="card skills__card reveal"
              key={group.category}
              style={{ '--reveal-delay': `${gi * 80}ms` }}
            >
              <header className="skills__cardHead">
                <h3>{group.category}</h3>
                <span className="skills__count">{group.items.length}</span>
              </header>

              <ul className="skills__list">
                {group.items.map((item) => (
                  <li className="skills__item" key={item}>
                    <span className="skills__marker" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {learning?.length > 0 && (
          <div className="card skills__learning reveal">
            <div className="skills__learningHead">
              <span className="skills__learningIcon">
                <Icon name="sparkle" size={20} />
              </span>
              <div>
                <h3>Currently learning</h3>
                <p>Actively upskilling alongside my day-to-day backend work.</p>
              </div>
            </div>
            <div className="skills__learningChips">
              {learning.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
