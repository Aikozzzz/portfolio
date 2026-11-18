import { useEffect, useLayoutEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { navSections, profile } from './data/portfolioData'
import { useActiveSection } from './hooks/useActiveSection'

const sectionIds = navSections.map(({ id }) => id)

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark')
  const activeSection = useActiveSection(sectionIds)

  useLayoutEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id || window.scrollY !== 0) return

    // let the browser restore the previous position on history navigation
    const navigation = performance.getEntriesByType('navigation')[0]
    if (navigation?.type === 'back_forward') return

    // the section may have mounted after the browser first looked for the fragment
    document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar
        sections={navSections}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
      />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Journey />
        <Skills />
        <Contact />
      </main>
      <footer className="shell footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a className="text-link" href="#hero">Back to top <FiArrowUp aria-hidden="true" /></a>
      </footer>
    </>
  )
}

export default App
