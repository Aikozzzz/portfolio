import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
import { duration, easing } from '../lib/motion'
import profileImage from '../assets/image.png'

export default function Navbar({ sections, activeSection, onNavigate, theme, onToggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 16)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
        if (document.activeElement?.closest('#mobile-nav-menu')) {
          requestAnimationFrame(() => menuButtonRef.current?.focus())
        }
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleMobileNavigate = (sectionId) => {
    onNavigate(sectionId)
    setIsMobileMenuOpen(false)
    if (isMobileMenuOpen) {
      requestAnimationFrame(() => menuButtonRef.current?.focus())
    }
  }

  const showSurface = isScrolled || isMobileMenuOpen

  return (
    <header className="sticky top-2 z-50 mx-auto w-[min(1100px,94%)] sm:top-3">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: duration.slow, ease: easing.enter }}
        className={`rounded-2xl border px-3 py-2 transition-[background-color,border-color,box-shadow] duration-300 ${
          showSurface
            ? 'border-slate-300/60 bg-white/80 shadow-2xl shadow-slate-300/25 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/65 dark:shadow-slate-950/40'
            : 'border-transparent bg-transparent shadow-none'
        }`}
      >
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => handleMobileNavigate('hero')}
            className="rounded-full p-1 transition hover:bg-slate-200/80 dark:hover:bg-white/10"
            aria-label="Go to home"
          >
            <img
              src={profileImage}
              alt="Kyaw Zin Hein"
              className="h-9 w-9 rounded-full border border-slate-200 object-cover shadow-sm shadow-slate-300/40 dark:border-white/10 dark:shadow-slate-950/30"
            />
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {sections.map((section) => {
              const isActive = activeSection === section.id
              return (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(section.id)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative isolate rounded-xl px-3 py-2 text-xs font-medium tracking-wide transition-colors duration-200 ${
                      isActive
                        ? 'text-sky-700 dark:text-sky-200'
                        : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="desktop-active-section"
                        className="absolute inset-0 -z-10 rounded-xl bg-sky-500/20 dark:bg-sky-400/20"
                        transition={{ duration: duration.normal, ease: easing.standard }}
                      />
                    ) : null}
                    <span>{section.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-3 py-2 text-xs text-slate-700 transition hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
              <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 md:hidden"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {isMobileMenuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMobileMenuOpen ? (
            <motion.div
              id="mobile-nav-menu"
              className="mt-2 md:hidden"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: duration.fast, ease: easing.standard }}
            >
              <ul className="grid grid-cols-3 gap-1.5 min-[390px]:grid-cols-4">
                {sections.map((section) => {
                  const isActive = activeSection === section.id
                  return (
                    <li key={`${section.id}-mobile`}>
                      <button
                        type="button"
                        onClick={() => handleMobileNavigate(section.id)}
                        aria-current={isActive ? 'location' : undefined}
                        className={`relative isolate min-h-11 w-full rounded-xl px-2 py-2 text-[11px] font-medium tracking-wide transition-colors duration-200 ${
                          isActive
                            ? 'text-sky-700 dark:text-sky-200'
                            : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
                        }`}
                      >
                        {isActive ? (
                          <motion.span
                            layoutId="mobile-active-section"
                            className="absolute inset-0 -z-10 rounded-xl bg-sky-500/20 dark:bg-sky-400/20"
                            transition={{ duration: duration.normal, ease: easing.standard }}
                          />
                        ) : null}
                        <span>{section.label}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
