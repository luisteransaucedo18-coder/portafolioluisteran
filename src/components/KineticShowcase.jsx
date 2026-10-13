import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export function KineticText({ text }) {
  return (
    <span className="kinetic-text" aria-hidden="true">
      {text.split(" ").map((word, w) => (
        <span className="kinetic-word" key={w}>
          {Array.from(word).map((letter, i) => (
            <span
              className="kinetic-letter"
              key={i}
              style={{ "--letter-delay": `${Math.min(w * 4 + i, 16) * 35}ms` }}
            >
              {letter}
            </span>
          ))}
          {w < text.split(" ").length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </span>
  );
}

export function KineticShowcase() {
  const {
    copy: { cinema: c },
  } = useLanguage();
  const [mode, setMode] = useState(0);
  const section = useRef(null);
  useEffect(() => {
    let inView = true;
    const element = section.current;
    const update = () => {
      element.dataset.paused = String(!inView || document.hidden);
    };
    const observer = new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
      update();
    });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <section
      id="enfoque"
      ref={section}
      className="cinema-section"
      aria-label={c.label}
    >
      <div className="cinema-sticky">
        <div className="cinema-top">
          <span className="eyebrow">{c.label}</span>
          <span className="small-label">LT / 01—03</span>
        </div>
        <div className="cinema-scene" data-mode={mode}>
          <div className="cinema-words" aria-hidden="true">
            {c.words.map((word, i) => (
              <span key={i} className={`cinema-word cinema-word-${i}`}>
                {word}
                <span>.</span>
              </span>
            ))}
          </div>
          <div className="cinema-mechanism" aria-hidden="true">
            <div className="mechanism-scroll">
              <div className="mechanism-spin">
                <div className="mechanism-ring mechanism-ring-a" />
                <div className="mechanism-ring mechanism-ring-b" />
                <div className="mechanism-ring mechanism-ring-c" />
                <div className="mechanism-core">
                  <span key={mode}>{["</>", "✓", "LT"][mode]}</span>
                </div>
                {[0, 1, 2, 3].map((i) => (
                  <div className={`mechanism-node mechanism-node-${i}`} key={i}>
                    {["{ }", "01", "↗", "+"][i]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="cinema-bottom">
          <div>
            <p className="cinema-description" key={mode}>
              {c.descriptions[mode]}
            </p>
            <p className="small-label cinema-hint">↓ {c.hint}</p>
          </div>
          <div className="cinema-controls" role="group" aria-label={c.controls}>
            {c.modes.map((label, i) => (
              <button
                key={i}
                aria-pressed={mode === i}
                onClick={() => setMode(i)}
              >
                <span>0{i + 1}</span>
                {label}
                <span>↗</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
