import { certifications, education } from '../data/portfolio';
import { Icon } from './Icon';
import { Section } from './Section';

export function Education() {
  return (
    <>
      <Section id="educacion" label="Formacion" title="Educacion">
        <article className="edu-card fade-in">
          <div className="edu-icon">
            <Icon name="GraduationCap" size={28} />
          </div>
          <div>
            <h3 className="edu-uni">{education.institution}</h3>
            <div className="edu-career">{education.career}</div>
            <div className="edu-detail">{education.detail}</div>
            <div className="edu-badge">{education.badge}</div>
          </div>
        </article>
      </Section>

      <Section id="certificaciones" label="Credenciales" title="Certificaciones">
        <div className="cert-grid fade-in">
          {certifications.map((cert) => (
            <article className="cert-card" key={cert.name}>
              <div className="cert-icon">
                <Icon name={cert.icon} size={26} />
              </div>
              <h3 className="cert-name">{cert.name}</h3>
              <div className="cert-issuer">{cert.issuer}</div>
              <div className="cert-year">{cert.year}</div>
              {cert.documentUrl && (
                <a
                  className="cert-link"
                  href={cert.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver certificado: ${cert.name}`}
                >
                  Ver certificado
                  <Icon name="ExternalLink" size={15} />
                </a>
              )}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
