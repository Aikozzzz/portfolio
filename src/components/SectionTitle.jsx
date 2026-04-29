import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.header
      className="mx-auto mb-7 max-w-3xl text-center sm:mb-8"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      <p className="text-xs uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300/80">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 sm:text-base">{subtitle}</p> : null}
    </motion.header>
  )
}
