import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { otherProjects, profile, projectItems } from '../data/portfolioData'
import SectionTitle from './SectionTitle'
import conferencePhoto from '../assets/icait-2026-presentation.webp'
import conferenceCertificate from '../assets/icait-2026-certificate.webp'
import certificateThumbnail from '../assets/icait-2026-certificate-thumbnail.webp'

function ConferencePhoto({ event, dateTime, date, location }) {
  return (
    <div className="conference-visual">
      <figure className="conference-photo">
        <div className="conference-photo-image">
          <img
            src={conferencePhoto}
            alt="Kyaw Zin Hein presenting the scheduler-based high-availability research beside the title slide at ICAIT 2026."
            width="1024"
            height="768"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption>
          <span>{event} · <time dateTime={dateTime}>{date}</time></span>
          <span>{location}</span>
        </figcaption>
      </figure>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="shell section work-section" id="projects" aria-labelledby="work-title" tabIndex={-1}>
      <SectionTitle id="work-title" title="Selected work">
        <a className="text-link section-link" href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer">All repositories <FiArrowUpRight aria-hidden="true" /></a>
      </SectionTitle>
      <div className="project-grid">
        {projectItems.map((project) => (
          <article
            className={project.conference ? 'project-card featured-project' : 'project-card'}
            id={project.slug}
            aria-labelledby={project.slug ? `${project.slug}-title` : undefined}
            tabIndex={project.slug ? -1 : undefined}
            key={project.title}
            data-reveal
          >
            <div className="project-intro">
              <h3 id={project.slug ? `${project.slug}-title` : undefined}>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
            </div>
            {project.conference && <ConferencePhoto {...project.conference} />}
            <div className="project-details">
              {project.detail && (
                <p className="project-description">
                  {project.detail}
                  {project.liveRequiresSignIn && ' The live site requires sign-in.'}
                </p>
              )}
              <footer className="project-footer">
                {project.stack && (
                  <ul className="tags" aria-label="Technologies">
                    {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                )}
                <div className="project-links">
                  {project.github && (
                    <a
                      className="text-link project-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View repository for ${project.title}`}
                    >
                      <FiGithub aria-hidden="true" /> View repository
                    </a>
                  )}
                  {project.live && (
                    <a
                      className="text-link project-live-link"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Live site for ${project.title}${project.liveRequiresSignIn ? ' (sign-in required)' : ''}`}
                    >
                      Live site <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                  {project.conference && (
                    <a className="text-link project-link certificate-link" href={conferenceCertificate} target="_blank" rel="noreferrer">
                      <img src={certificateThumbnail} alt="" width="144" height="101" loading="lazy" decoding="async" />
                      <span>View presentation certificate</span>
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                  {project.evidence && (
                    <a className="text-link" href={project.evidence.url} target="_blank" rel="noreferrer">
                      {project.evidence.label} <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </footer>
            </div>
          </article>
        ))}
      </div>
      <div className="other-projects">
        <h3>More projects</h3>
        <ul>
          {otherProjects.map(({ title, github, live }) => (
            <li key={title} data-reveal>
              <a className="text-link project-link" href={github} target="_blank" rel="noreferrer" aria-label={`${title} repository`}>
                {title} <FiGithub aria-hidden="true" />
              </a>
              {live && <a className="text-link project-live-link" href={live} target="_blank" rel="noreferrer" aria-label={`Live site for ${title}`}>Live site <FiArrowUpRight aria-hidden="true" /></a>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
