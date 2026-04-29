import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

export default function Skills({ items }) {
  return (
    <section id="skills" className="px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="Toolkit & Current Strength"
          subtitle="Hands-on tools I use for development, infrastructure, and secure workflows."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="rounded-xl border border-slate-300/60 bg-white/75 p-4 dark:border-white/10 dark:bg-slate-900/65"
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-2 flex items-center justify-between text-sm text-slate-700 dark:text-slate-200">
                <p>{skill.name}</p>
                <p>{skill.level}%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-300 dark:bg-slate-800">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.65 }}
                  transition={{ duration: 0.9 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
