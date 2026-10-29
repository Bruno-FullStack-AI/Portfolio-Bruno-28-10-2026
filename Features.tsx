import React from 'react';

export const Features: React.FC = () => {
  return (
    <div className="features">
      <div className="container features-grid">
        <div className="feature reveal visible">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="4" width="20" height="13" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </div>
          <h4>
            Desenvolvimento<br />Web Responsivo
          </h4>
        </div>

        <div className="feature reveal visible d1">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="7" y="7" width="10" height="10" rx="2" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
            </svg>
          </div>
          <h4>
            Inteligência Artificial<br />Aplicada
          </h4>
        </div>

        <div className="feature reveal visible d2">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="9" cy="20" r="1.6" />
              <circle cx="17" cy="20" r="1.6" />
              <path d="M2 3h3l2.6 12.4a1.5 1.5 0 001.5 1.1h7.9a1.5 1.5 0 001.5-1.2L20.5 7H6" />
            </svg>
          </div>
          <h4>
            E-commerce<br />&amp; PDV Integrado
          </h4>
        </div>

        <div className="feature reveal visible d3">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M10 14a5 5 0 007.07 0l2.83-2.83a5 5 0 00-7.07-7.07L11 5.93" />
              <path d="M14 10a5 5 0 00-7.07 0L4.1 12.83a5 5 0 007.07 7.07L13 18.07" />
            </svg>
          </div>
          <h4>
            Integração de APIs<br />&amp; Webhooks
          </h4>
        </div>
      </div>
    </div>
  );
};
