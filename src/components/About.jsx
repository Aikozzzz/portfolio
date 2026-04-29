import { motion } from 'framer-motion'
import { FaCode, FaDocker, FaShieldAlt } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const iconMap = {
  DevOps: FaDocker,
  Cybersecurity: FaShieldAlt,
  Programming: FaCode,
}

export default function About({ skillGroups }) {
  return (
    <section id="about" className="px-4 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About Me"
          title="Building Practical Skills, One System At A Time"
          subtitle="I am focused on systems engineering, cloud infrastructure, DevOps, and cybersecurity while continuously improving through projects and hands-on learning."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.category]
            return (
              <motion.article
                key={group.category}
                className="glass-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="mb-4 inline-flex rounded-lg bg-sky-300/20 p-3 text-sky-700 dark:bg-sky-300/15 dark:text-sky-200">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading text-xl text-slate-900 dark:text-white">{group.category}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-slate-300 dark:bg-slate-800">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${group.progress}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{group.progress}% confidence</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
