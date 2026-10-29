import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <a href="#home" className="logo">
            <img className="logo-mark" src="/favicon.svg" alt="" width={42} height={42} />
            <span className="logo-text">Bruno Lima</span>
          </a>
          <ul className="footer-links">
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#skills">Competências</a>
            </li>
            <li>
              <a href="#work">Projetos</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#experience">Experiência</a>
            </li>
          </ul>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/bruno-lima-dev-full-stack-ia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Bruno Lima"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.16h4.52V23H.24zM8.34 8.16h4.33v2.03h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.92V23h-4.52v-7.23c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.81V23H8.34z" />
              </svg>
            </a>
            <a
              href="https://lnkd.in/enmNRcHH"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Código de projeto no GitHub (via LinkedIn)"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
        <p className="copyright">© 2026 Bruno Lima. Todos os direitos reservados · Fortaleza, CE</p>
      </div>
    </footer>
  );
};
