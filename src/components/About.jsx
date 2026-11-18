import { FiBookOpen, FiMapPin } from 'react-icons/fi'
import { education, profile } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section className="shell section about-section" id="about" aria-labelledby="about-title" tabIndex={-1}>
      <SectionTitle id="about-title" title="About me" />
      <div className="about-grid">
        <div className="about-copy" data-reveal>
          <p className="about-lead">I make time to learn every day.</p>
          <p>
            I’m a High Performance Computing student at the University of Information Technology in Yangon.
            Building web and mobile apps gives me a way to put what I learn into practice. When I make a mistake,
            I work out why it happened and change my approach so I can avoid repeating it.
          </p>
          <p>I enjoy working in teams, sharing what I learn, and talking through problems together.</p>
        </div>
        <dl className="about-details" data-reveal>
          <div>
            <dt><FiBookOpen aria-hidden="true" /> Education</dt>
            {education.map(({ title, organization }) => (
              <dd key={title}>{organization}<br />{title}</dd>
            ))}
          </div>
          <div>
            <dt><FiMapPin aria-hidden="true" /> Based in</dt>
            <dd>{profile.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
