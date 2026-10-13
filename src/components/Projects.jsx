import { projects } from '../data/portfolio';
import { Icon } from './Icon';
import { Section } from './Section';

export function Projects() {
  return (
    <Section id="proyectos" label="Portfolio" title="Proyectos">
      <p className="projects-intro">
        Proyectos en los que participé desarrollando funcionalidades, validando software
        y coordinando equipos de trabajo.
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
            <p className="project-desc"><strong>Rol:</strong> {project.role}</p>
            <p className="project-desc">{project.description}</p>
            <p className="project-desc"><strong>Resultado:</strong> {project.result}</p>
            <div className="project-techs">
              {project.techs.map((tech) => (
                <span className="tech-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

          </article>
        ))}
      </div>
    </Section>
  );
}
