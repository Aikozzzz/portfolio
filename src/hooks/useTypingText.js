import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export function useTypingText(words, typingSpeed = 85, deletingSpeed = 45, pause = 1200, isActive = true) {
  const reduceMotion = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words.length || reduceMotion || !isActive) {
      return undefined
    }

    const currentWord = words[wordIndex % words.length]
    const isWordComplete = text === currentWord
    const isWordDeleted = text === ''

    if (!isDeleting && isWordComplete) {
      const timeout = setTimeout(() => setIsDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && isWordDeleted) {
      const timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => prev + 1)
      }, deletingSpeed)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setText((prev) => {
        if (isDeleting) {
          return currentWord.slice(0, prev.length - 1)
        }
        return currentWord.slice(0, prev.length + 1)
      })
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [words, wordIndex, text, isDeleting, typingSpeed, deletingSpeed, pause, reduceMotion, isActive])

  return reduceMotion ? (words[0] ?? '') : text
}
