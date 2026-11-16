import { FiArrowUpRight, FiBox, FiCpu, FiGithub, FiLayers, FiMapPin, FiPackage, FiServer } from 'react-icons/fi'
import { otherProjects, profile, projectItems } from '../data/portfolioData'
import SectionTitle from './SectionTitle'

function ProjectVisual({ type }) {
  if (type === 'scaling') {
    return (
      <div className="project-visual visual-scaling" aria-hidden="true">
        <div className="diagram">
          <div className="diagram-traffic"><FiLayers /> Locust traffic</div>
          <div className="diagram-line" />
          <div className="diagram-cluster">
            <span><FiCpu /> K3s cluster</span>
            <div className="diagram-nodes">
              <div><FiServer /> NGINX</div>
              <div><FiServer /> NGINX</div>
              <div><FiServer /> NGINX</div>
            </div>
          </div>
          <div className="diagram-line" />
          <div className="diagram-metrics"><i /><i /><i /><i /><i /><span>Prometheus metrics</span></div>
        </div>
      </div>
    )
  }

  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      {type === 'map' && <div className="map-preview"><FiMapPin /><i /><i /></div>}
      {type === 'study' && <div className="study-preview"><span>言</span><span>語</span></div>}
      {type === 'supply' && <div className="supply-preview"><FiPackage /><FiBox /><FiPackage /></div>}
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
        {projectItems.map((project, index) => (
          <article className={index === 0 ? 'project-card featured-project' : 'project-card'} key={project.title}>
            <ProjectVisual type={project.visual} />
            <div className="project-copy">
              <p className="metadata">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tags" aria-label="Technologies">
                {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <a className="text-link project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository`}>
                <FiGithub aria-hidden="true" /> View repository <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="other-projects">
        <h3>More projects</h3>
        <ul>
          {otherProjects.map(({ title, github, live }) => (
            <li key={title}>
              <a className="text-link" href={github} target="_blank" rel="noreferrer">{title} <FiArrowUpRight aria-hidden="true" /></a>
              {live && <a className="text-link" href={live} target="_blank" rel="noreferrer" aria-label={`Visit live site for ${title}`}>Live site <FiArrowUpRight aria-hidden="true" /></a>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
