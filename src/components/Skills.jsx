import { toolSkills } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

export default function Skills() {
  return (
    <section className="shell section skill-section" id="skills" aria-labelledby="skills-title" tabIndex={-1}>
      <SectionTitle id="skills-title" title="Skills & tools" />
      <div className="skill-grid">
        {toolSkills.map((group) => (
          <div key={group.category} data-reveal>
            <h3>{group.category}</h3>
            <ul className="tags">
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
