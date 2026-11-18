export const duration = {
  instant: 0.12,
  fast: 0.2,
  normal: 0.35,
  slow: 0.6,
  reveal: 0.8,
}

export const easing = {
  standard: [0.22, 1, 0.36, 1],
  enter: [0.16, 1, 0.3, 1],
  exit: [0.7, 0, 0.84, 0],
}

export const revealViewport = { once: true, amount: 0.2 }

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const revealItem = {
  hidden: { opacity: 0.88, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easing.enter },
  },
  static: { opacity: 1, y: 0, transition: { duration: 0 } },
}

export const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}
