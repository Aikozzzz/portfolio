import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

export default function Navbar({ sections, activeSection, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef(null)
  const nav = useRef(null)

  useEffect(() => {
    if (menuOpen) nav.current?.querySelector('a')?.focus()
  }, [menuOpen])

  function closeOnEscape(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false)
      menuButton.current?.focus()
    }
  }

  return (
    <header className="site-header" onKeyDown={closeOnEscape}>
      <div className="shell header-inner">
        <a className="wordmark" href="#hero" aria-label="Kyaw Zin Hein, home" onClick={() => setMenuOpen(false)}>
          <span aria-hidden="true">KZH</span>
        </a>
        <nav ref={nav} id="primary-nav" aria-label="Primary" className={menuOpen ? 'site-nav is-open' : 'site-nav'}>
          <ul>
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <button type="button" className="icon-button" onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <a className="header-contact" href="#contact">Get in touch <FiArrowUpRight aria-hidden="true" /></a>
          <button
            ref={menuButton}
            type="button"
            className="icon-button menu-button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
