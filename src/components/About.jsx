import { about, stats } from '../data/portfolio';
import { Section } from './Section';

export function About() {
  return (
    <Section id="sobre-mi" label="Perfil" title="Sobre mi">
      <div className="about-grid fade-in">
        <div className="about-text">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about-stats">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
