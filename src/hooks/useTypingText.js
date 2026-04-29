import { useEffect, useState } from 'react'

export function useTypingText(words, typingSpeed = 85, deletingSpeed = 45, pause = 1200) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) {
      return undefined
    }

    const currentWord = words[wordIndex % words.length]
    const isWordComplete = text === currentWord
    const isWordDeleted = text === ''

    let timeoutDelay = isDeleting ? deletingSpeed : typingSpeed

    if (!isDeleting && isWordComplete) {
      timeoutDelay = pause
      setIsDeleting(true)
    } else if (isDeleting && isWordDeleted) {
      setIsDeleting(false)
      setWordIndex((prev) => prev + 1)
    }

    const timeout = setTimeout(() => {
      setText((prev) => {
        if (isDeleting) {
          return currentWord.slice(0, prev.length - 1)
        }
        return currentWord.slice(0, prev.length + 1)
      })
    }, timeoutDelay)

    return () => clearTimeout(timeout)
  }, [words, wordIndex, text, isDeleting, typingSpeed, deletingSpeed, pause])

  return text
}
