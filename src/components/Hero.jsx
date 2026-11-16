import { lazy, Suspense, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { profile } from '../data/portfolioData'
import portrait from '../assets/portrait.webp'

const HeroScene = lazy(() => import('./HeroScene'))

export default function Hero() {
  const largeScreen = useMediaQuery('(min-width: 1024px)')
  const reduceMotion = useReducedMotion()
  const [sceneReady, setSceneReady] = useState(false)

  useEffect(() => {
    if (!largeScreen || reduceMotion) return undefined
    const timer = window.setTimeout(() => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: true })
      if (context) {
        context.getExtension('WEBGL_lose_context')?.loseContext()
        setSceneReady(true)
      }
    }, 800)
    return () => window.clearTimeout(timer)
  }, [largeScreen, reduceMotion])

  return (
    <section className="shell hero" id="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <motion.div
        className="hero-copy"
        initial={reduceMotion ? false : { y: 8 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <p className="availability"><span aria-hidden="true" /> {profile.availability}</p>
        <h1 id="hero-title">Kyaw Zin Hein<span aria-hidden="true"></span></h1>
        <p className="hero-role">Software, cloud & distributed systems</p>
        <p className="hero-description">
          I study High Performance Computing at UIT Yangon and build software from the interface to the infrastructure behind it.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View my work <FiArrowDown aria-hidden="true" /></a>
          <a className="button button-secondary" href="#contact">Contact me <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="hero-socials">
          <a className="text-link" href={profile.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /> GitHub</a>
          <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn</a>
        </div>
      </motion.div>
      <figure className="portrait">
        <div className="portrait-grid" aria-hidden="true" />
        {largeScreen && !reduceMotion && sceneReady && (
          <div className="portrait-scene">
            <Suspense fallback={null}><HeroScene /></Suspense>
          </div>
        )}
        <img
          src={portrait}
          alt="Portrait of Kyaw Zin Hein"
          width="353"
          height="466"
          fetchPriority="high"
        />
        <figcaption><FiMapPin aria-hidden="true" /> {profile.location}</figcaption>
      </figure>
    </section>
  )
}
