import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

export default function Journey({ milestones }) {
  return (
    <section id="journey" className="px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Experience"
          title="Learning Journey"
          subtitle="A timeline of my education, certifications, leadership roles, and growth toward infrastructure engineering."
        />

        <div className="relative mx-auto mt-6 max-w-3xl border-l border-sky-500/45 dark:border-sky-300/35 pl-6 sm:pl-8">
          {milestones.map((item, index) => (
            <motion.article
              key={item.title}
              className="relative mb-8 rounded-xl border border-slate-300/60 bg-white/75 p-5 dark:border-white/10 dark:bg-slate-900/60"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="absolute -left-[2.1rem] top-8 h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_22px_rgba(56,189,248,0.75)] sm:-left-[2.55rem]" />
              <p className="text-xs uppercase tracking-[0.25em] text-violet-700 dark:text-violet-200">{item.year}</p>
              <h3 className="mt-2 font-heading text-xl text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
