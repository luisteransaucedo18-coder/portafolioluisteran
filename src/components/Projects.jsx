import { projects } from '../data/portfolio';
import { Icon } from './Icon';
import { Section } from './Section';

export function Projects() {
  return (
    <Section id="proyectos" label="Portfolio" title="Proyectos">
      <p className="projects-intro">
        Proximamente proyectos reales. Aqui veras los trabajos que estoy desarrollando o ya
        complete.
      </p>

      <div className="projects-grid fade-in">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-header">
              <div className="project-icon">
                <Icon name={project.icon} size={26} />
              </div>
              <span className="project-badge">{project.badge}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-techs">
              {project.techs.map((tech) => (
                <span className="tech-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-actions">
              <a href={project.demoUrl} className="btn-project-primary">
                Ver proyecto
              </a>
              <a href={project.codeUrl} className="btn-project-ghost">
                Ver codigo
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
