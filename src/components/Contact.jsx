import { useState } from 'react'
import Icon from './Icon'
import { profile, sectionCopy } from '../data/portfolio'
import './Contact.css'

const EMPTY = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell me your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'A valid email, please.'
    if (form.message.trim().length < 10) next.message = 'A little more detail helps (10+ characters).'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  /**
   * Opens the visitor's mail client with the message pre-filled.
   * Swap this for a fetch() to Formspree/EmailJS/your API when you have one.
   */
  const submit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

    setSent(true)
    setForm(EMPTY)
    setTimeout(() => setSent(false), 6000)
  }

  const details = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: 'location', label: 'Location', value: profile.location, href: null },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{sectionCopy.contact.eyebrow}</span>
          <h2 className="section-title">
            {sectionCopy.contact.title}
            <span className="gradient-text">{sectionCopy.contact.accent}</span>
          </h2>
          <p className="section-lead">{sectionCopy.contact.lead}</p>
        </div>

        <div className="contact__grid">
          <aside className="contact__aside reveal">
            <ul className="contact__details">
              {details.map((d) => {
                const Row = (
                  <>
                    <span className="contact__detailIcon">
                      <Icon name={d.icon} size={18} />
                    </span>
                    <div>
                      <span className="contact__detailLabel">{d.label}</span>
                      <strong>{d.value}</strong>
                    </div>
                  </>
                )
                return (
                  <li key={d.label} className="card contact__detail">
                    {d.href ? <a href={d.href}>{Row}</a> : <div>{Row}</div>}
                  </li>
                )
              })}
            </ul>

            <div className="card contact__available">
              <span className="contact__pulse" />
              <div>
                <strong>{profile.availability}</strong>
                <span>Typically responds in 1–2 business days</span>
              </div>
            </div>

            <div className="contact__socials">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </aside>

          <form className="card contact__form reveal" onSubmit={submit} noValidate>
            <div className="contact__row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Jane Doe"
                  className={errors.name ? 'has-error' : ''}
                />
                {errors.name && <small className="field__error">{errors.name}</small>}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  placeholder="jane@company.com"
                  className={errors.email ? 'has-error' : ''}
                />
                {errors.email && <small className="field__error">{errors.email}</small>}
              </div>
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={update}
                placeholder="Senior backend role at …"
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={update}
                placeholder="Tell me about the team, the system and the problem."
                className={errors.message ? 'has-error' : ''}
              />
              {errors.message && <small className="field__error">{errors.message}</small>}
            </div>

            <button type="submit" className="btn btn--primary contact__submit">
              Send message
              <Icon name="arrowRight" size={18} />
            </button>

            {sent && (
              <p className="contact__sent" role="status">
                <Icon name="check" size={16} />
                Your mail client should be open — hit send and it lands in my inbox.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
