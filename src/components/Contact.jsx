import { profile } from '../data/portfolio';
import { Icon } from './Icon';
import { Section } from './Section';

const contactCards = [
  { icon: 'MapPin', label: 'Ubicacion', value: profile.location },
  { icon: 'Mail', label: 'Correo', value: profile.email },
  { icon: 'Phone', label: 'Telefono', value: profile.phone },
  { icon: 'Github', label: 'GitHub', value: profile.githubUser },
];

export function Contact() {
  return (
    <Section id="contacto" label="Contacto" title="Hablemos" centered>
      <div className="contact-inner">
        <p className="contact-tagline">
          Estoy abierto a oportunidades de practicas, proyectos tecnologicos y colaboracion en
          desarrollo o aseguramiento de calidad de software.
        </p>

        <div className="contact-cards fade-in">
          {contactCards.map((card) => (
            <article className="contact-card" key={card.label}>
              <div className="contact-card-icon">
                <Icon name={card.icon} size={22} />
              </div>
              <div className="contact-card-label">{card.label}</div>
              <div className="contact-card-value">{card.value}</div>
            </article>
          ))}
        </div>

        <div className="contact-actions fade-in">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Icon name="Mail" size={18} />
            Enviar correo
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
            <Icon name="Github" size={18} />
            Ver GitHub
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost">
            <Icon name="MessageCircle" size={18} />
            WhatsApp
          </a>
          <a href={profile.cvUrl} className="btn-ghost" download="CV_Luis_Teran_Saucedo.pdf">
            <Icon name="Download" size={18} />
            Descargar CV
          </a>
        </div>
      </div>
    </Section>
  );
}
