import { useEffect } from 'react';

export function useRevealOnScroll() {
  useEffect(() => {
    const items = document.querySelectorAll('.fade-in');
    const showAllItems = () => items.forEach((item) => item.classList.add('visible'));

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      showAllItems();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
}
