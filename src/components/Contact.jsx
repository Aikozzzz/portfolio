import { useState } from 'react'
import { FiArrowRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [draftUrl, setDraftUrl] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const message = formData.get('message').trim()

    if (!name || !message) {
      setStatus('invalid')
      form.elements.namedItem(!name ? 'name' : 'message').focus()
      return
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    const mailto = `mailto:${profile.email}?subject=${subject}&body=${body}`

    if (!formEndpoint) {
      setStatus('draft')
      setDraftUrl(mailto)
      window.location.href = mailto
      return
    }

    setStatus('submitting')
    setDraftUrl('')

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
      setDraftUrl(mailto)
      setStatus('error')
    }
  }

  const statusMessages = {
    invalid: 'Enter a name and a message.',
    draft: 'Finish sending your draft in your email app.',
    success: 'Message sent. Thanks for getting in touch.',
    error: 'Your message could not be sent. You can retry or open an email draft.',
  }

  return (
    <section className="shell section contact-section" id="contact" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="contact-panel">
        <div className="contact-copy">
          <SectionTitle id="contact-title" title="Let’s get in touch." />
          <p>I’m open to internships in software and infrastructure, and to collaborating on projects.</p>
          <a className="text-link email-link" href={`mailto:${profile.email}`}>
            <FiMail aria-hidden="true" /> {profile.email} <FiArrowUpRight aria-hidden="true" />
          </a>
          <div className="hero-socials">
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} aria-busy={status === 'submitting'}>
          <div className="form-pair">
            <label>
              Name
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <label>
            Message
            <textarea name="message" rows="4" required />
          </label>
          <button type="submit" className="button button-primary" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : formEndpoint ? 'Send message' : 'Open email draft'}
            <FiArrowRight aria-hidden="true" />
          </button>
          <p className="form-status" role="status">{statusMessages[status]}</p>
          {draftUrl && <a className="text-link" href={draftUrl}>Open draft in email <FiArrowUpRight aria-hidden="true" /></a>}
        </form>
      </div>
    </section>
  )
}
