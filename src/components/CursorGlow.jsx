import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-0 hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/20 blur-3xl md:block"
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    />
  )
}
