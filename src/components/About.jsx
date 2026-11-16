import { FiBookOpen, FiMapPin } from 'react-icons/fi'
import { education, profile } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section className="shell section about-section" id="about" aria-labelledby="about-title" tabIndex={-1}>
      <SectionTitle id="about-title" title="About me" />
      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lead">I like the work that happens on both sides of an application.</p>
          <p>I’m a High Performance Computing student at the University of Information Technology in Yangon. Building web and mobile apps gets me thinking about the systems that keep them responsive and reliable.</p>
          <p>I’m currently learning how to test those systems under load and make sense of the results. Outside of infrastructure labs, I study Japanese and build tools to make that practice easier.</p>
        </div>
        <dl className="about-details">
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
