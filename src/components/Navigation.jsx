import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../i18n/LanguageContext";
const anchors = [
  "hero",
  "sobre-mi",
  "proyectos",
  "experiencia",
  "educacion",
  "contacto",
];
export function Navigation() {
  const { language, setLanguage, copy } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const toggle = useRef(null);
  const dialog = useRef(null);
  const closing = useRef(false);
  function closeMenu() {
    if (closing.current) return;
    if (
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !dialog.current
    ) {
      setOpen(false);
      return;
    }
    closing.current = true;
    const animation = dialog.current.animate(
      [
        { clipPath: "inset(0)", opacity: 1 },
        { clipPath: "inset(0 0 100% 0 round 0 0 80px 80px)", opacity: 0.8 },
      ],
      { duration: 450, easing: "cubic-bezier(.32,.72,0,1)", fill: "forwards" },
    );
    animation.onfinish = () => {
      closing.current = false;
      setOpen(false);
    };
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-15% 0px -65% 0px" },
    );
    anchors.forEach((id) => {
      const item = document.getElementById(id);
      if (item) observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = [
      ...document.querySelectorAll("main,footer,.site-header"),
    ];
    const oldInert = background.map((el) => el.inert);
    background.forEach((el) => (el.inert = true));
    dialog.current.querySelector("button")?.focus();
    const keyboard = (e) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key === "Tab") {
        const controls = [...dialog.current.querySelectorAll("button,a[href]")];
        const first = controls[0],
          last = controls.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", keyboard);
    return () => {
      document.body.style.overflow = oldOverflow;
      background.forEach((el, i) => (el.inert = oldInert[i]));
      document.removeEventListener("keydown", keyboard);
      toggle.current?.focus();
    };
  }, [open]);
  const languageSwitch = (
    <div className="language-switch" role="group" aria-label={copy.ui.language}>
      {["en", "es"].map((lang) => (
        <button
          key={lang}
          lang={lang}
          aria-label={lang === "en" ? "English" : "Español"}
          aria-pressed={language === lang}
          onClick={() => setLanguage(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#hero" aria-label="Luis Teran">
            <span className="brand-mark">
              lt<span>.</span>
            </span>
            <span className="brand-name">LUIS TERAN</span>
          </a>
          <nav
            className="nav-links"
            aria-label={
              language === "en" ? "Main navigation" : "Navegación principal"
            }
          >
            {anchors.map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
              >
                {copy.nav[i]}
              </a>
            ))}
          </nav>
          <div className="nav-controls">
            {languageSwitch}
            <button
              className="menu-toggle cinematic-toggle"
              ref={toggle}
              aria-label={copy.ui.menu}
              aria-expanded={open}
              aria-controls={open ? "screen-menu" : undefined}
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      {open &&
        createPortal(
          <div
            className="screen-menu"
            id="screen-menu"
            ref={dialog}
            role="dialog"
            aria-modal="true"
            aria-label={copy.ui.menu}
          >
            <div className="screen-menu-top">
              <span className="brand-mark">
                lt<span>.</span>
              </span>
              <button
                className="screen-menu-close"
                aria-label={copy.ui.close}
                onClick={closeMenu}
              >
                ×
              </button>
            </div>
            <div className="screen-menu-content">
              <nav
                aria-label={
                  language === "en" ? "Main navigation" : "Navegación principal"
                }
              >
                {anchors.map((id, i) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    style={{ "--menu-delay": `${i * 65}ms` }}
                    aria-current={active === id ? "location" : undefined}
                    onClick={closeMenu}
                  >
                    <span className="small-label">0{i + 1}</span>
                    {copy.nav[i]}
                    <span>↗</span>
                  </a>
                ))}
              </nav>
              <div className="screen-menu-aside">
                <p className="eyebrow">{copy.ui.eyebrow}</p>
                <p>
                  {copy.ui.contactTitle[0]}
                  <br />
                  <span>{copy.ui.contactTitle[1]}</span>
                </p>
                <a
                  className="button primary"
                  href="#contacto"
                  onClick={closeMenu}
                >
                  {copy.ui.contact} ↗
                </a>
              </div>
            </div>
            <div className="screen-menu-bottom">
              {languageSwitch}
              <span className="small-label">{copy.ui.location}</span>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
