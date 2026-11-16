import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { featuredResearch, profile } from '../data/portfolioData'
import portrait from '../assets/portrait-cutout.webp'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="shell hero" id="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <motion.div
        className="hero-copy"
        initial={reduceMotion ? false : { y: 8 }}
        animate={{ y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.45, ease: 'easeOut' }}
      >
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">High Performance Computing student at the University of Information Technology.</p>
        <p className="hero-description">
          I build web and mobile apps and test how infrastructure behaves under load.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View my work <FiArrowDown aria-hidden="true" /></a>
          <a className="button button-secondary" href="#contact">Contact me <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="hero-socials">
          <a className="text-link" href={profile.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
          <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
          <a className="text-link hero-research-link" href={`#${featuredResearch.slug}`}>
            ICAIT 2026 research <FiArrowDown aria-hidden="true" />
          </a>
        </div>
      </motion.div>
      <figure className="portrait">
        <div className="portrait-stage">
          <img className="portrait-image" src={portrait} alt={`Portrait of ${profile.name}`} width="727" height="960" fetchPriority="high" />
        </div>
        <figcaption className="portrait-caption">
          <FiMapPin aria-hidden="true" /> {profile.location}
        </figcaption>
      </figure>
    </section>
  )
}
