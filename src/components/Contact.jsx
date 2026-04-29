import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
  const contactEmail = 'kyaw24295968@gmail.com'

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim() ?? ''
    const email = formData.get('email')?.toString().trim() ?? ''
    const userMessage = formData.get('message')?.toString().trim() ?? ''

    const subject = encodeURIComponent(`Portfolio Contact from ${name || 'Website Visitor'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${userMessage}`)

    if (!formEndpoint) {
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
      event.currentTarget.reset()
      setStatus('success')
      setMessage('Opened your email app with a prefilled draft.')
      return
    }

    setStatus('submitting')
    setMessage('Sending your message...')

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      event.currentTarget.reset()
      setStatus('success')
      setMessage('Thanks, your message has been sent successfully.')
    } catch (error) {
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
      event.currentTarget.reset()
      setStatus('success')
      setMessage('Could not reach the form service, so your email app was opened instead.')
    }
  }

  return (
    <section id="contact" className="px-4 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let Us Build Something Great"
          subtitle="Reach out for collaboration, internship opportunities, or technology-focused conversations."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="glass-card"
            onSubmit={handleSubmit}
          >
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input id="name" name="name" className="form-input" type="text" placeholder="Your name" required />

            <label className="form-label mt-4" htmlFor="email">
              Email
            </label>
            <input id="email" name="email" className="form-input" type="email" placeholder="you@example.com" required />

            <label className="form-label mt-4" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-input min-h-36"
              placeholder="Tell me about your project or opportunity"
              required
            />

            <input type="hidden" name="_subject" value="New portfolio contact message" />

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-5 rounded-xl bg-gradient-to-r from-sky-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            <p
              className={`mt-4 text-sm ${
                status === 'success'
                  ? 'text-emerald-600 dark:text-emerald-300'
                  : status === 'error'
                    ? 'text-rose-600 dark:text-rose-300'
                    : 'text-slate-600 dark:text-slate-300'
              }`}
              role="status"
            >
              {message}
            </p>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="glass-card"
          >
            <h3 className="font-heading text-2xl text-slate-900 dark:text-white">Connect</h3>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">Prefer direct channels? You can find me here.</p>

            <div className="mt-6 space-y-4 text-sm">
              <a
                href="https://github.com/Aikozzzz"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/kyaw-zin-hein-a21abb37b"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a href="mailto:kyaw24295968@gmail.com" className="social-link">
                <FaEnvelope /> kyaw24295968@gmail.com
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
