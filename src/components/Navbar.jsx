import { useEffect, useState } from 'react';
import { navItems } from '../data/portfolio';
import { Icon } from './Icon';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      let current = 'hero';

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <a className="nav-logo" href="#hero" onClick={closeMenu}>
        &lt;LuisTeran /&gt;
      </a>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="nav-links">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              className={activeSection === item.href.slice(1) ? 'active' : ''}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a className="nav-cta" href="#contacto" onClick={closeMenu}>
        Contactame
      </a>

      <button
        className="nav-hamburger"
        type="button"
        aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <Icon name={isOpen ? 'X' : 'Menu'} size={24} />
      </button>
    </nav>
  );
}
