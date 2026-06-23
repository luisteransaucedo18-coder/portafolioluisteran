import { profile } from '../data/portfolio';
import { Icon } from './Icon';

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy fade-in visible">
            <div className="hero-badge">Disponible para oportunidades</div>
            <h1 className="hero-name">
              Hola, soy <span className="gradient-text">{profile.shortName}</span>
            </h1>
            <p className="hero-subtitle">{profile.role}</p>
            <p className="hero-desc">
              Estudiante de Ingenieria de Sistemas e Informatica, enfocado en QA,
              validacion funcional, APIs y desarrollo web con React.
            </p>

            <div className="hero-actions">
              <a className="btn-primary" href="#proyectos">
                <Icon name="ExternalLink" size={18} />
                Ver proyectos
              </a>
              <a className="btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="Github" size={18} />
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-avatar" aria-label={profile.name}>
            <span className="avatar-initials">LT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
