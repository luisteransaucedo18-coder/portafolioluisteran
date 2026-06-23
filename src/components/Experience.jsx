import { complementaryExperience, experience } from '../data/portfolio';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experiencia" label="Trayectoria" title="Experiencia profesional">
      <div className="timeline fade-in">
        {experience.map((item) => (
          <article className="timeline-item" key={item.company}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-company">{item.company}</h3>
                  <div className="timeline-role">{item.role}</div>
                </div>
                <span className="timeline-period">{item.period}</span>
              </div>
              <ul className="timeline-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="section-subtitle">Experiencia complementaria</div>
      <p className="muted-copy">
        Experiencia adicional que refleja habilidades de comunicacion, organizacion y trabajo
        bajo presion.
      </p>

      <div className="comp-grid fade-in">
        {complementaryExperience.map((item) => (
          <article className="comp-card" key={item.company}>
            <h3 className="comp-card-company">{item.company}</h3>
            <div className="comp-card-role">{item.role}</div>
            <div className="comp-card-period">{item.period}</div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
