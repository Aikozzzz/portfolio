import { useEffect, useState } from 'react'
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
import profileImage from '../assets/image.png'

export default function Navbar({ sections, activeSection, onNavigate, theme, onToggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMobileNavigate = (sectionId) => {
    onNavigate(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-2 z-50 mx-auto w-[min(1100px,94%)] sm:top-3">
      <nav className="rounded-2xl border border-slate-300/60 bg-white/80 px-3 py-2 shadow-2xl shadow-slate-300/25 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/65 dark:shadow-slate-950/40">
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
                    className={`rounded-xl px-3 py-2 text-xs font-medium tracking-wide transition ${
                      isActive
                        ? 'bg-sky-500/20 text-sky-700 dark:bg-sky-400/20 dark:text-sky-200'
                        : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-3 py-2 text-xs text-slate-700 transition hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
              <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {isMobileMenuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-nav-menu"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? 'mt-2 max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="grid grid-cols-3 gap-1.5 min-[390px]:grid-cols-4">
            {sections.map((section) => {
              const isActive = activeSection === section.id
              return (
                <li key={`${section.id}-mobile`}>
                  <button
                    type="button"
                    onClick={() => handleMobileNavigate(section.id)}
                    className={`w-full rounded-xl px-2 py-2 text-[11px] font-medium tracking-wide transition ${
                      isActive
                        ? 'bg-sky-500/20 text-sky-700 dark:bg-sky-400/20 dark:text-sky-200'
                        : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
