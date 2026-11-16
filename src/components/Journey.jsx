import { credentials, milestones } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

export default function Journey() {
  return (
    <section className="shell section experience-section" id="journey" aria-labelledby="experience-title" tabIndex={-1}>
      <SectionTitle id="experience-title" title="Experience & education" />
      <div className="experience-grid">
        <ol className="experience-list">
          {milestones.map((item) => (
            <li key={item.title}>
              <p className="metadata">{item.year}</p>
              <div>
                <h3>{item.title}</h3>
                <p className="organization">{item.organization}</p>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="credentials">
          <h3>Credentials</h3>
          <ul>
            {credentials.map((item) => (
              <li key={item.title}>
                <p>{item.title}</p>
                <span>{item.issuer} · {item.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
