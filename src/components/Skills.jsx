import { motion } from 'framer-motion'
import { revealItem, revealViewport, staggerContainer } from '../lib/motion'
import SectionTitle from './SectionTitle'

export default function Skills({ items }) {
  return (
    <section id="skills" className="px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="Tools By Practical Use"
          subtitle="Technologies and working practices used across development, infrastructure, and team projects."
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          {items.map((group) => (
            <motion.article
              key={group.category}
              className="group rounded-xl border border-slate-300/60 bg-white/75 p-5 transition-colors duration-300 hover:border-violet-400/40 dark:border-white/10 dark:bg-slate-900/65"
              variants={revealItem}
            >
              <h3 className="font-heading text-lg text-slate-900 dark:text-white">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1.5 text-xs text-slate-700 transition-colors duration-200 group-hover:border-violet-300/60 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
