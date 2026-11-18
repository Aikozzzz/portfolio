import { FiArrowUpRight } from 'react-icons/fi'
import { credentials, education, experience, volunteering } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

const issueDateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})

function JourneyGroup({ heading, items }) {
  return (
    <section className="journey-group" data-reveal>
      <h3>{heading}</h3>
      <ul className="experience-list">
        {items.map(({ title, organization, period, description }) => (
          <li key={title}>
            {period && <p className="metadata">{period}</p>}
            <div className="experience-item">
              <h4>{title}</h4>
              <p className="organization">{organization}</p>
              {description && <p>{description}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function Journey() {
  return (
    <section className="shell section experience-section" id="journey" aria-labelledby="experience-title" tabIndex={-1}>
      <SectionTitle id="experience-title" title="Experience & education" />
      <div className="experience-grid">
        <div className="journey-groups">
          <JourneyGroup heading="Education" items={education} />
          <JourneyGroup heading="Experience" items={experience} />
          <JourneyGroup heading="Volunteering" items={volunteering} />
        </div>
        <div className="credentials" data-reveal>
          <h3>Licenses &amp; certifications</h3>
          <ul>
            {credentials.map(({ title, issuer, issued, badgeUrl }) => {
              const issuedLabel = issueDateFormatter.format(new Date(`${issued}-01T00:00:00Z`))
              const entry = (
                <>
                  <p>{title}</p>
                  <span>{issuer} · <time dateTime={issued}>{issuedLabel}</time></span>
                </>
              )

              return (
                <li key={title}>
                  {badgeUrl ? (
                    <a className="credential-badge-link" href={badgeUrl} target="_blank" rel="noreferrer">
                      <div>{entry}</div>
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  ) : entry}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
