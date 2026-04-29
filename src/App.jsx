import { AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import About from './components/About'
import BackgroundEffects from './components/BackgroundEffects'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'
import Hero from './components/Hero'
import Journey from './components/Journey'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import {
  aboutSkills,
  milestones,
  navSections,
  projectItems,
  toolSkills,
} from './data/portfolioData'
import { useActiveSection } from './hooks/useActiveSection'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme) {
      return savedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const sectionIds = useMemo(() => navSections.map((section) => section.id), [])
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.title = 'Kyaw Zin Hein | Portfolio'
    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Modern personal portfolio for Kyaw Zin Hein, aspiring DevOps and Cybersecurity engineer.',
      )
      return
    }

    const tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    tag.setAttribute(
      'content',
      'Modern personal portfolio for Kyaw Zin Hein, aspiring DevOps and Cybersecurity engineer.',
    )
    document.head.appendChild(tag)
  }, [])

  const handleNavigate = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <BackgroundEffects />
      <CursorGlow />

      <AnimatePresence>{isLoading ? <LoadingScreen /> : null}</AnimatePresence>

      <div className="relative z-10">
        <Navbar
          sections={navSections}
          activeSection={activeSection}
          onNavigate={handleNavigate}
          theme={theme}
          onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
        />

        <main>
          <Hero onProjectsClick={() => handleNavigate('projects')} onContactClick={() => handleNavigate('contact')} />
          <About skillGroups={aboutSkills} />
          <Projects projects={projectItems} />
          <Skills items={toolSkills} />
          <Journey milestones={milestones} />
          <Contact />
        </main>

        <footer className="px-4 pb-10 text-center text-xs text-slate-600 dark:text-slate-400 sm:px-8">
          <p>© {new Date().getFullYear()} Kyaw Zin Hein. Built with React, Tailwind, and Framer Motion.</p>
        </footer>
      </div>
    </>
  )
}

export default App
