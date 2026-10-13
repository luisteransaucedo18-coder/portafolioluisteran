import { useEffect } from "react";
export function useRevealOnScroll(language) {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-in, .reveal-word");
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer;
    function update() {
      observer?.disconnect();
      if (media.matches || !("IntersectionObserver" in window)) {
        items.forEach((item) => item.classList.add("visible"));
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
            // Re-arm only once fully outside the screen; avoid flicker at its edges.
            else if (
              entry.boundingClientRect.bottom <= 0 ||
              entry.boundingClientRect.top >= innerHeight
            )
              entry.target.classList.remove("visible");
          });
        },
        { threshold: [0, 0.08], rootMargin: "0px" },
      );
      items.forEach((item) => observer.observe(item));
    }
    update();
    media.addEventListener("change", update);
    return () => {
      observer?.disconnect();
      media.removeEventListener("change", update);
    };
  }, [language]);
}
