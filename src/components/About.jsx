import { motion } from 'framer-motion'
import { FaCode, FaDocker, FaShieldAlt } from 'react-icons/fa'
import { revealItem, revealViewport, staggerContainer } from '../lib/motion'
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

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          {skillGroups.map((group) => {
            const Icon = iconMap[group.category]
            return (
              <motion.article
                key={group.category}
                className="glass-card transition-colors duration-300 hover:border-sky-300/35"
                variants={revealItem}
              >
                <div className="mb-4 inline-flex rounded-lg bg-sky-300/20 p-3 text-sky-700 dark:bg-sky-300/15 dark:text-sky-200">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading text-xl text-slate-900 dark:text-white">{group.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-700 dark:text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-slate-300/70 px-3 py-1.5 dark:border-white/10">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
