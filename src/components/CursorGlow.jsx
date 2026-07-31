import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function CursorGlow() {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(-300)
  const pointerY = useMotionValue(-300)
  const x = useSpring(pointerX, { stiffness: 180, damping: 28 })
  const y = useSpring(pointerY, { stiffness: 180, damping: 28 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')

    if (reduceMotion || !finePointer.matches) {
      return undefined
    }

    const handleMove = (event) => {
      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
    }

    window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [pointerX, pointerY, reduceMotion])

  if (reduceMotion) {
    return null
  }

  return (
    <motion.div
      className="pointer-events-none fixed z-0 hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/20 blur-3xl md:block"
      style={{ left: x, top: y }}
      aria-hidden="true"
    />
  )
}
