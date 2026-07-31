import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { duration, revealItem, revealViewport, staggerContainer } from '../lib/motion'
import SectionTitle from './SectionTitle'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Projects"
          title="Featured Work"
          subtitle="A mix of infrastructure, automation, and secure development practice projects."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={revealItem}
              whileHover={{ y: -2 }}
              transition={{ duration: duration.fast }}
              className="group relative overflow-hidden rounded-2xl border border-slate-300/60 bg-white/75 p-4 shadow-xl shadow-slate-300/35 transition-colors duration-300 hover:border-sky-400/40 focus-within:border-sky-400/50 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-slate-950/35 sm:p-6"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100">
                <div className="h-full w-full bg-gradient-to-tr from-sky-500/25 to-violet-500/20" />
              </div>

              <h3 className="font-heading text-xl text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs text-sky-800 dark:border-white/15 dark:bg-white/5 dark:text-sky-100"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm sm:gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-1 px-1 text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                >
                  <FiGithub /> GitHub
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-1 px-1 text-sky-700 transition hover:text-sky-900 dark:text-sky-200 dark:hover:text-sky-100"
                  >
                    <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> Live Demo
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
