import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 880) setMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Competências' },
    { id: 'work', label: 'Projetos' },
    { id: 'services', label: 'Serviços' },
    { id: 'experience', label: 'Experiência' },
  ];

  return (
    <header>
      <div className="container nav">
        <a href="#home" className="logo" aria-label="Bruno Lima — início" onClick={() => setMenuOpen(false)}>
          <img className="logo-mark" src="/favicon.svg" alt="" width={42} height={42} />
          <span className="logo-text">Bruno Lima</span>
        </a>

        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-contact-mobile">
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary btn-sm">
          Fale Comigo
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
          </svg>
        </a>

        <button
          className="hamburger"
          id="hamburger"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};
