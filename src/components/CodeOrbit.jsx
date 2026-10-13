import { useEffect, useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export function CodeOrbit() {
  const ref = useRef(null);
  const {
    copy: { ui },
  } = useLanguage();
  useEffect(() => {
    const stage = ref.current;
    let inView = true;
    const update = () => {
      stage.dataset.paused = String(!inView || document.hidden);
    };
    const observer = new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
      update();
    });
    observer.observe(stage);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  function move(event) {
    if (
      event.pointerType === "touch" ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const box = event.currentTarget.getBoundingClientRect();
    ref.current.style.setProperty(
      "--tilt-x",
      `${((event.clientY - box.top) / box.height - 0.5) * -18}deg`,
    );
    ref.current.style.setProperty(
      "--tilt-y",
      `${((event.clientX - box.left) / box.width - 0.5) * 22}deg`,
    );
  }
  function reset() {
    ref.current.style.setProperty("--tilt-x", "0deg");
    ref.current.style.setProperty("--tilt-y", "0deg");
  }
  return (
    <div
      className="orbit-stage"
      ref={ref}
      onPointerMove={move}
      onPointerLeave={reset}
      role="img"
      aria-label={ui.orbit}
    >
      <div className="orbit-grid" aria-hidden="true" />
      <div className="orbit-object" aria-hidden="true">
        <div className="orbit-ring ring-a" />
        <div className="orbit-ring ring-b" />
        <div className="orbit-ring ring-c" />
        <div className="cube-float">
          <div className="code-cube">
            {["front", "back", "left", "right", "top", "bottom"].map(
              (side, i) => (
                <div className={`cube-face ${side}`} key={side}>
                  <span>{["</>", "{ }", "01", "LT", "++", "◎"][i]}</span>
                </div>
              ),
            )}
          </div>
        </div>
        <span className="satellite satellite-a" />
        <span className="satellite satellite-b" />
      </div>
      <div className="orbit-label label-a" aria-hidden="true">
        <i />
        {ui.orbitLabels[0]}
      </div>
      <div className="orbit-label label-b" aria-hidden="true">
        <i />
        {ui.orbitLabels[1]}
      </div>
      <div className="orbit-label label-c" aria-hidden="true">
        <i />
        {ui.orbitLabels[2]}
      </div>
      <div className="orbit-coordinate" aria-hidden="true">
        LT / {ui.system} 01
        <br />
        REACT · NODE · QA
      </div>
      <p className="orbit-hint" aria-hidden="true">
        ↔ {ui.orbitHint}
      </p>
    </div>
  );
}
