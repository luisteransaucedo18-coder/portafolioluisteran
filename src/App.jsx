import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { KineticShowcase, KineticText } from "./components/KineticShowcase";
import { MotionEffects } from "./components/MotionEffects";
import { Navigation } from "./components/Navigation";
import { CodeOrbit } from "./components/CodeOrbit";
import { ProjectVisual } from "./components/ProjectVisual";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

function SectionHeading({ label, title, intro }) {
  return (
    <div className="section-heading fade-in">
      <p className="eyebrow">{label}</p>
      <h2 aria-label={title}>
        <KineticText text={title} />
      </h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}
function Tags({ items }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
function Portfolio() {
  const { copy: c, language } = useLanguage();
  const { ui: t, profile: p } = c;
  useRevealOnScroll(language);
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <MotionEffects language={language} />
      <Navigation />
      <main id="main" tabIndex={-1}>
        <section id="hero" className="hero section-wrap">
          <div className="hero-top">
            <span className="availability">
              <i />
              {t.available}
            </span>
            <span className="location">↗ {t.location}</span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow entrance">{t.eyebrow}</p>
              <h1 className="entrance" aria-label={t.headline.join(" ")}>
                {t.headline.map((line, i) => (
                  <span className={i === 0 ? "" : "hero-emphasis"} key={i}>
                    <KineticText text={line} />
                  </span>
                ))}
              </h1>
              <p className="hero-intro entrance">{t.intro}</p>
              <div className="hero-actions entrance">
                <a className="button primary" href="#proyectos">
                  {t.viewWork}
                  <span>↗</span>
                </a>
                <a className="text-link" href="#contacto">
                  {t.contact}
                  <span>↗</span>
                </a>
              </div>
            </div>
            <CodeOrbit />
          </div>
          <div className="hero-bottom">
            <span>↓ {t.scroll}</span>
            <span>{t.theme}</span>
            <span className="hero-index">
              PORTFOLIO / {new Date().getFullYear()}
            </span>
          </div>
        </section>
        <KineticShowcase />
        <section id="sobre-mi" className="section-wrap about-section">
          <SectionHeading
            label={t.profileLabel}
            title={t.profileTitle}
            intro={t.profileIntro}
          />
          <div className="about-layout">
            <div className="about-identity fade-in">
              <div className="monogram">
                LT<span>↗</span>
              </div>
              <h3>{p.name}</h3>
              <p>{t.software}</p>
              <div className="academic">
                <span>{t.semester}</span>
                <span>{t.upper}</span>
              </div>
            </div>
            <div className="about-copy fade-in">
              {c.about.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
          <div className="proof-strip fade-in">
            <div>
              <strong>IX</strong>
              <span>{t.semester}</span>
            </div>
            <div>
              <strong>03</strong>
              <span>{t.counts[0]}</span>
            </div>
            <div>
              <strong>07</strong>
              <span>{t.counts[1]}</span>
            </div>
          </div>
        </section>
        <div className="tagline-section section-wrap">
          <p className="tagline">
            {t.tagline.map((line, i) => (
              <span className="tagline-line" key={i}>
                {line.split(" ").map((word, j) => (
                  <span
                    className="reveal-word"
                    style={{ transitionDelay: `${(i * 3 + j) * 100}ms` }}
                    key={j}
                  >
                    {word}{" "}
                  </span>
                ))}
              </span>
            ))}
          </p>
          <span className="tagline-symbol" aria-hidden="true">
            ✳
          </span>
        </div>
        <section id="proyectos" className="section-wrap work-section">
          <SectionHeading
            label={t.projectLabel}
            title={t.projectTitle}
            intro={t.projectIntro}
          />
          <div className="project-list">
            {c.projects.map((project, index) => (
              <article className="project-row fade-in" key={project.title}>
                <ProjectVisual index={index} />
                <div className="project-content">
                  <div className="project-number">
                    0{index + 1}
                    <span>{project.badge}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-role">
                    {t.role} / {project.role}
                  </p>
                  <p>{project.description}</p>
                  <div className="project-result">
                    <span>{t.result}</span>
                    <p>{project.result}</p>
                  </div>
                  <Tags items={project.techs} />
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="experiencia" className="section-wrap experience-section">
          <SectionHeading label={t.experienceLabel} title={t.experienceTitle} />
          <div className="experience-list">
            {c.experience.map((item, i) => (
              <article className="experience-row fade-in" key={item.company}>
                <div className="experience-heading">
                  <span className="eyebrow">0{i + 1}</span>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <details className="complementary fade-in">
            <summary>
              {t.complementary}
              <span>+</span>
            </summary>
            <div className="complementary-grid">
              {c.complementaryExperience.map((item) => (
                <article key={item.company}>
                  <span className="small-label">{item.period}</span>
                  <h3>{item.company}</h3>
                  <p className="complementary-role">{item.role}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </details>
        </section>
        <section id="habilidades" className="section-wrap skills-section">
          <SectionHeading label={t.skillsLabel} title={t.skillsTitle} />
          <div className="skills-list">
            {c.skillGroups.map((group, i) => (
              <article className="skill-row fade-in" key={i}>
                <h3>
                  <span>0{i + 1}</span>
                  {group.title}
                </h3>
                <Tags items={group.skills} />
              </article>
            ))}
          </div>
        </section>
        <section id="educacion" className="section-wrap education-section">
          <SectionHeading label={t.educationLabel} title={t.educationTitle} />
          <article className="education-card fade-in">
            <div className="education-symbol" aria-hidden="true">
              ↗
            </div>
            <div>
              <h3>{c.education.institution}</h3>
              <p>{c.education.career}</p>
              <span className="small-label">{c.education.detail}</span>
            </div>
            <span className="academic-badge">{c.education.badge}</span>
          </article>
          <h3 className="cert-heading">{t.certificates}</h3>
          <div className="cert-list">
            {c.certifications.map((cert) => (
              <article className="cert-row fade-in" key={cert.name}>
                <div>
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer}</p>
                </div>
                <div className="cert-end">
                  {cert.year && <span>{cert.year}</span>}
                  {cert.documentUrl && (
                    <a
                      href={cert.documentUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t.certificate}: ${cert.name}`}
                    >
                      {t.certificate} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="contacto" className="section-wrap contact-section">
          <p className="eyebrow fade-in">{t.contactLabel}</p>
          <h2 className="fade-in">
            {t.contactTitle[0]}
            <br />
            <span>{t.contactTitle[1]}</span>
          </h2>
          <p className="contact-intro fade-in">{t.contactIntro}</p>
          <a className="contact-email fade-in" href={`mailto:${p.email}`}>
            {p.email}
            <span>↗</span>
          </a>
          <div className="contact-bottom fade-in">
            <div className="social-links">
              <a href={p.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={p.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={p.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp ↗
              </a>
              <a href="tel:+51902327242">{p.phone} ↗</a>
            </div>
            <div className="cv-action">
              <a
                className="button primary"
                href={p.cvUrl}
                download="CV_Luis_Teran_Saucedo.pdf"
              >
                {t.cv}
                <span>↓</span>
              </a>
              <small>{t.cvNote}</small>
            </div>
          </div>
        </section>
      </main>
      <footer className="section-wrap">
        <a className="brand-mark" href="#hero" aria-label={t.back}>
          lt<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {p.shortName}
          <br />
          <span>{t.footer}</span>
        </p>
        <a className="back-top" href="#hero">
          {t.back} ↑
        </a>
      </footer>
    </>
  );
}
export default function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}
