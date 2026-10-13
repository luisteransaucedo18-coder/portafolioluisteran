import { useEffect, useRef } from "react";

/** Decorative feedback only: never cancels clicks, focus, or navigation. */
export function MotionEffects({ language }) {
  const layer = useRef(null);
  const previousLanguage = useRef(language);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const host = layer.current;
    const live = new Set();
    let frame;
    let pointer;
    function create(className, x, y, keyframes, options) {
      const node = document.createElement("span");
      node.className = className;
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      host.append(node);
      const animation = node.animate(keyframes, options);
      live.add(animation);
      const dispose = () => {
        live.delete(animation);
        node.remove();
      };
      animation.onfinish = dispose;
      animation.oncancel = dispose;
    }
    function burst(event) {
      if (media.matches || live.size > 90) return;
      const control = event.target.closest("a,button,summary");
      const box = control?.getBoundingClientRect();
      const x =
        event.detail === 0 && box ? box.left + box.width / 2 : event.clientX;
      const y =
        event.detail === 0 && box ? box.top + box.height / 2 : event.clientY;
      for (let i = 0; i < 2; i++)
        create(
          "click-wave",
          x,
          y,
          [
            { transform: "translate(-50%,-50%) scale(.1)", opacity: 0.8 },
            {
              transform: `translate(-50%,-50%) scale(${i ? 4 : 2.5})`,
              opacity: 0,
            },
          ],
          { duration: 850, delay: i * 90, easing: "cubic-bezier(.16,1,.3,1)" },
        );
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4;
        const distance = 64 + (i % 2) * 32;
        create(
          "click-spark",
          x,
          y,
          [
            { transform: "translate(-50%,-50%) scale(1)", opacity: 1 },
            {
              transform: `translate(${Math.cos(angle) * distance}px,${Math.sin(angle) * distance}px) rotate(160deg) scale(0)`,
              opacity: 0,
            },
          ],
          { duration: 750, easing: "cubic-bezier(.16,1,.3,1)" },
        );
      }
      if (control && !control.classList.contains("menu-toggle"))
        control.animate(
          [
            { scale: "1" },
            { scale: ".94", offset: 0.2 },
            { scale: "1.04", offset: 0.55 },
            { scale: "1" },
          ],
          { duration: 600, easing: "cubic-bezier(.32,.72,0,1)" },
        );
      host.animate(
        [
          { boxShadow: "inset 0 0 0 0 #477cff00" },
          { boxShadow: "inset 0 0 64px 4px #477cff22", offset: 0.3 },
          { boxShadow: "inset 0 0 0 0 #477cff00" },
        ],
        { duration: 900 },
      );
    }
    function move(event) {
      if (media.matches || event.pointerType !== "mouse") return;
      pointer = { x: event.clientX, y: event.clientY };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = undefined;
        host.style.setProperty("--cursor-x", `${pointer.x}px`);
        host.style.setProperty("--cursor-y", `${pointer.y}px`);
        host.classList.add("has-pointer");
      });
    }
    const leave = () => host.classList.remove("has-pointer");
    const reset = () => {
      if (media.matches) {
        live.forEach((a) => a.cancel());
        leave();
      }
    };
    const disclosure = (event) => {
      if (!media.matches && event.target.open)
        event.target
          .querySelector(".details-content, .complementary-grid")
          ?.animate(
            [
              {
                opacity: 0,
                transform: "translateY(-24px) scale(.97)",
                filter: "blur(6px)",
              },
              {
                opacity: 1,
                transform: "translateY(0) scale(1)",
                filter: "blur(0)",
              },
            ],
            { duration: 700, easing: "cubic-bezier(.32,.72,0,1)" },
          );
    };
    document.addEventListener("click", burst);
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    document.addEventListener("toggle", disclosure, true);
    media.addEventListener("change", reset);
    return () => {
      document.removeEventListener("click", burst);
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("toggle", disclosure, true);
      media.removeEventListener("change", reset);
      cancelAnimationFrame(frame);
      live.forEach((a) => a.cancel());
    };
  }, []);
  useEffect(() => {
    if (previousLanguage.current === language) return;
    previousLanguage.current = language;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animation = document.querySelector("main")?.animate(
      [
        { opacity: 0.45, transform: "translateY(16px)", filter: "blur(6px)" },
        { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
      ],
      { duration: 650, easing: "cubic-bezier(.32,.72,0,1)" },
    );
    return () => animation?.cancel();
  }, [language]);
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="motion-effects" ref={layer} aria-hidden="true">
        <span className="cursor-aura" />
        <span className="motion-corner corner-top" />
        <span className="motion-corner corner-bottom" />
      </div>
    </>
  );
}
