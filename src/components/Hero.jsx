import { motion } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { featuredResearch, profile } from '../data/portfolioData'
import portrait from '../assets/portrait-cutout.webp'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { heroContainer, revealItem } from '../lib/motion'

export default function Hero() {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  return (
    <motion.section
      className="shell hero"
      id="hero"
      aria-labelledby="hero-title"
      tabIndex={-1}
      variants={heroContainer}
      initial={reduceMotion ? false : 'hidden'}
      animate={reduceMotion ? 'static' : 'visible'}
    >
      <div className="hero-copy" data-reveal>
        <motion.h1 id="hero-title" variants={revealItem}>{profile.name}</motion.h1>
        <motion.p className="hero-role" variants={revealItem}>
          High Performance Computing student at the University of Information Technology.
        </motion.p>
        <motion.p className="hero-description" variants={revealItem}>
          I build web and mobile apps and test how infrastructure behaves under load.
        </motion.p>
        <motion.div className="hero-actions" variants={revealItem}>
          <a className="button button-primary" href="#projects">View my work <FiArrowDown aria-hidden="true" /></a>
          <a className="button button-secondary" href="#contact">Contact me <FiArrowUpRight aria-hidden="true" /></a>
        </motion.div>
        <motion.div className="hero-socials" variants={revealItem}>
          <a className="text-link" href={profile.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
          <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
          <a className="text-link hero-research-link" href={`#${featuredResearch.slug}`}>
            ICAIT 2026 research <FiArrowDown aria-hidden="true" />
          </a>
        </motion.div>
      </div>
      <motion.figure className="portrait" variants={revealItem} data-reveal>
        <div className="portrait-stage">
          <img className="portrait-image" src={portrait} alt={`Portrait of ${profile.name}`} width="727" height="960" fetchPriority="high" />
        </div>
        <figcaption className="portrait-caption">
          <FiMapPin aria-hidden="true" /> {profile.location}
        </figcaption>
      </motion.figure>
    </motion.section>
  )
}
