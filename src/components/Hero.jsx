import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useTypingText } from '../hooks/useTypingText'
import profileImage from '../assets/image.png'

const HeroScene = lazy(() => import('./HeroScene'))

export default function Hero({ onProjectsClick, onContactClick }) {
  const dynamicText = useTypingText(['Linux & Distributed Systems', 'Cloud & DevOps', 'Scalable Infrastructure'])

  return (
    <section id="hero" className="relative flex min-h-[84svh] items-center px-4 pb-8 pt-16 sm:px-8 sm:pb-10 sm:pt-20 lg:min-h-[90svh]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-sky-700 dark:text-sky-300/90">Personal Portfolio</p>
          <h1 className="mt-4 font-heading text-3xl font-semibold leading-tight text-slate-900 dark:text-white sm:mt-5 sm:text-5xl lg:text-6xl">
            Kyaw Zin Hein
          </h1>
          <p className="mt-3 text-base text-sky-700 dark:text-sky-200 sm:mt-4 sm:text-lg">
            Linux | Distributed Systems | Cloud | DevOps | Infrastructure Engineer
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:mt-5 sm:text-base">
            IT student at University of Information Technology (UIT), Yangon, majoring in High Performance Computing
            (HPC). I am passionate about building scalable and efficient systems through hands-on projects.
          </p>

          <p className="mt-5 text-sm text-violet-700 dark:text-violet-300 sm:text-base">
            Focus now: <span className="font-medium text-violet-600 dark:text-violet-200">{dynamicText}</span>
            <span className="typing-caret" aria-hidden="true" />
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <button
              type="button"
              onClick={onProjectsClick}
              className="w-full rounded-xl bg-gradient-to-r from-sky-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:scale-[1.02] sm:w-auto"
            >
              View Projects
            </button>
            <button
              type="button"
              onClick={onContactClick}
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:bg-slate-100 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="hero-card relative flex flex-col"
        >
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
          <div className="hero-grid" aria-hidden="true" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-5">
              <img
                src={profileImage}
                alt="Kyaw Zin Hein"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border-2 border-sky-400/50 shadow-lg shadow-sky-500/20"
              />
            </div>

            <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">Status</p>
            <h3 className="mt-3 font-heading text-xl sm:text-2xl text-slate-900 dark:text-white text-center">Open To Internship & Collaboration</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300 text-center">
              Open to hybrid or remote internships and collaboration opportunities in cloud, DevOps, systems, and
              infrastructure engineering.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 text-xs sm:mt-8 sm:grid-cols-2 sm:text-sm w-full">
              <div className="rounded-lg border border-slate-300/60 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5">
                <p className="text-slate-500 dark:text-slate-400">Current Path</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">UIT (HPC)</p>
              </div>
              <div className="rounded-lg border border-slate-300/60 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5">
                <p className="text-slate-500 dark:text-slate-400">Location</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">Yangon, Myanmar</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
