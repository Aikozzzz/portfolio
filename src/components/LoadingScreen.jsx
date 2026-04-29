import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
    >
      <div className="text-center">
        <motion.div
          className="mx-auto h-16 w-16 rounded-full border-2 border-transparent border-t-sky-300 border-r-violet-400"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 1.1 }}
        />
        <p className="mt-4 font-heading text-sm uppercase tracking-[0.3em] text-slate-300">
          Loading Portfolio
        </p>
      </div>
    </motion.div>
  )
}
