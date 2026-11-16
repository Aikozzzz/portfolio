import { useEffect, useRef, useState } from 'react'
import { FiArrowRight, FiArrowUpRight, FiCopy, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()

const statusMessages = {
  sending: 'Sending your message…',
  draft: 'Finish sending the draft in your email app.',
  success: 'Message sent. Thanks for getting in touch.',
  error: 'Your message could not be sent. Try again or open an email draft.',
}

const requiredMessages = {
  name: 'Enter your name.',
  email: 'Enter your email address.',
  message: 'Enter your message.',
}

function validateField(field) {
  if (!field.value.trim()) return requiredMessages[field.name]
  if (field.validity.typeMismatch) return 'Enter an email address in the form name@example.com.'
  return undefined
}

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const [copyStatus, setCopyStatus] = useState('')
  const invalidField = useRef(null)
  const sending = status === 'sending'

  useEffect(() => {
    invalidField.current?.focus()
    invalidField.current = null
  }, [errors])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyStatus('Email address copied.')
    } catch {
      setCopyStatus('Could not copy. Select the email address to copy it manually.')
    }
  }

  function handleChange(event) {
    const field = event.target
    if (errors[field.name]) {
      setErrors({ ...errors, [field.name]: validateField(field) })
    }
    if (status === 'success') setStatus('idle')
    if (status === 'draft') setStatus(formEndpoint ? 'error' : 'idle')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (sending) return

    const form = event.currentTarget
    const nextErrors = {}
    for (const name of Object.keys(requiredMessages)) {
      const field = form.elements.namedItem(name)
      const error = validateField(field)
      if (error) {
        nextErrors[name] = error
        invalidField.current ??= field
      }
    }
    setErrors(nextErrors)
    if (invalidField.current) {
      if (status === 'success') setStatus('idle')
      return
    }

    const formData = new FormData(form)
    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const message = formData.get('message').trim()

    if (!formEndpoint || event.nativeEvent.submitter?.value === 'draft') {
      const subject = encodeURIComponent(`Portfolio message from ${name}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
      setStatus('draft')
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')

    try {
      formData.set('name', name)
      formData.set('email', email)
      formData.set('message', message)
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (!response.ok) throw new Error('Contact form submission failed')

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="shell section contact-section" id="contact" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="contact-panel">
        <div className="contact-copy">
          <SectionTitle id="contact-title" title="Let’s get in touch." />
          <p>Send me a message if you’d like to discuss my projects or research.</p>
          <div className="email-options">
            <a className="text-link email-link" href={`mailto:${profile.email}`}>
              <FiMail aria-hidden="true" /> <span>{profile.email}</span>
            </a>
            <button type="button" className="text-link copy-email" onClick={copyEmail}>
              <FiCopy aria-hidden="true" /> Copy email address
            </button>
          </div>
          <p className="copy-status" role="status">{copyStatus}</p>
          <div className="hero-socials">
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} onChange={handleChange} noValidate>
          {!formEndpoint && <p className="form-note">This form opens a draft in your email app.</p>}
          <div className="form-pair">
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                readOnly={sending}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
              {errors.name && <p className="field-error" id="contact-name-error">{errors.name}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                readOnly={sending}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {errors.email && <p className="field-error" id="contact-email-error">{errors.email}</p>}
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              required
              readOnly={sending}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
            />
            {errors.message && <p className="field-error" id="contact-message-error">{errors.message}</p>}
          </div>
          <div className="form-actions">
            <button type="submit" className="button button-primary" disabled={sending}>
              {sending ? 'Sending…' : formEndpoint ? 'Send message' : 'Open email draft'}
              <FiArrowRight aria-hidden="true" />
            </button>
            {formEndpoint && (status === 'error' || status === 'draft') && (
              <button type="submit" value="draft" className="text-link">
                Open email draft <FiArrowUpRight aria-hidden="true" />
              </button>
            )}
          </div>
          <p className="form-status" role="status">{statusMessages[status]}</p>
        </form>
      </div>
    </section>
  )
}
