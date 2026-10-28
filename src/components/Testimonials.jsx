import Icon from './Icon'
import { testimonials, sectionCopy } from '../data/portfolio'
import './Testimonials.css'

export default function Testimonials() {
  if (!testimonials?.length) return null

  return (
    <section className="section section--alt testimonials">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{sectionCopy.testimonials.eyebrow}</span>
          <h2 className="section-title">
            {sectionCopy.testimonials.title}
            <span className="gradient-text">{sectionCopy.testimonials.accent}</span>
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <figure
              className="card testimonial reveal"
              key={t.author}
              style={{ '--reveal-delay': `${i * 110}ms` }}
            >
              <Icon name="quote" size={30} className="testimonial__mark" />
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="testimonial__avatar">
                  {t.author
                    .split(' ')
                    .map((w) => w[0])
                    .join('')}
                </span>
                <div>
                  <strong>{t.author}</strong>
                  <span>{t.title}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
