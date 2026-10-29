import React from 'react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" style={{ paddingTop: '20px' }}>
      <div
        className="glow-orb"
        style={{
          width: '380px',
          height: '380px',
          background: 'rgba(255,90,0,.10)',
          top: 0,
          right: '-180px',
        }}
      />
      <div className="container">
        <div className="sec-head-split reveal visible">
          <div>
            <p className="eyebrow">Minha Expertise</p>
            <h2 className="sec-title">
              Competências &amp; <span className="gradient-text">Tecnologias</span>
            </h2>
          </div>
          <p>
            33 competências registradas no LinkedIn, com certificações em IA e Desenvolvimento Web e prática comprovada em um projeto real de e-commerce no ar.
          </p>
        </div>

        <div className="skills-grid">
          <article className="skill-card reveal visible">
            <div className="skill-icon">
              <svg width="46" height="52" viewBox="0 0 46 52">
                <path d="M4 2h38l-3.4 42L23 50 7.4 44z" fill="#E34F26" />
                <path d="M23 46.6l12.7-3.5L38.7 5.4H23z" fill="#FF6525" />
                <text x="23" y="36" fontFamily="Poppins,sans-serif" fontSize="24" fontWeight="800" fill="#fff" textAnchor="middle">
                  5
                </text>
              </svg>
            </div>
            <h3>HTML5</h3>
            <p>Estrutura semântica, acessível e sólida</p>
            <span className="skill-tag">Certificado · Dev Club</span>
          </article>

          <article className="skill-card reveal visible d1">
            <div className="skill-icon">
              <svg width="46" height="52" viewBox="0 0 46 52">
                <path d="M4 2h38l-3.4 42L23 50 7.4 44z" fill="#1572B6" />
                <path d="M23 46.6l12.7-3.5L38.7 5.4H23z" fill="#33A9DC" />
                <text x="23" y="36" fontFamily="Poppins,sans-serif" fontSize="24" fontWeight="800" fill="#fff" textAnchor="middle">
                  3
                </text>
              </svg>
            </div>
            <h3>CSS3</h3>
            <p>Layouts modernos, Flexbox, Grid e responsivo</p>
            <span className="skill-tag">Fundação Bradesco</span>
          </article>

          <article className="skill-card reveal visible d2">
            <div className="skill-icon">
              <svg width="50" height="50" viewBox="0 0 50 50">
                <rect width="50" height="50" rx="6" fill="#F7DF1E" />
                <text x="27" y="39" fontFamily="Poppins,sans-serif" fontSize="22" fontWeight="800" fill="#000" textAnchor="middle">
                  JS
                </text>
              </svg>
            </div>
            <h3>JavaScript</h3>
            <p>Interatividade e lógica para a web</p>
            <span className="skill-tag">Fundação Bradesco</span>
          </article>

          <article className="skill-card reveal visible d3">
            <div className="skill-icon">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="16" y="16" width="20" height="20" rx="4" />
                <circle cx="26" cy="26" r="3.6" fill="currentColor" stroke="none" />
                <path d="M26 6v6M26 40v6M6 26h6M40 26h6M12 12l4 4M36 36l4 4M40 12l-4 4M16 36l-4 4" />
              </svg>
            </div>
            <h3>Inteligência Artificial</h3>
            <p>Fluência em IA e aplicação prática em projetos</p>
            <span className="skill-tag">Certificado · c/ Microsoft</span>
          </article>

          <article className="skill-card reveal visible d4">
            <div className="skill-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M10 14a5 5 0 007.07 0l2.83-2.83a5 5 0 00-7.07-7.07L11 5.93" />
                <path d="M14 10a5 5 0 00-7.07 0L4.1 12.83a5 5 0 007.07 7.07L13 18.07" />
              </svg>
            </div>
            <h3>APIs &amp; Webhooks</h3>
            <p>Integrações com WhatsApp e Mercado Pago</p>
            <span className="skill-tag">Projeto Erisfit</span>
          </article>

          <article className="skill-card reveal visible d5">
            <div className="skill-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="9" cy="20" r="1.6" />
                <circle cx="17" cy="20" r="1.6" />
                <path d="M2 3h3l2.6 12.4a1.5 1.5 0 001.5 1.1h7.9a1.5 1.5 0 001.5-1.2L20.5 7H6" />
              </svg>
            </div>
            <h3>E-commerce</h3>
            <p>Loja virtual, painel admin e PDV presencial</p>
            <span className="skill-tag">Projeto Erisfit</span>
          </article>
        </div>

        <div className="tools-row reveal visible">
          <b>Ferramentas que uso:</b>
          <span className="tool-chip">GitHub</span>
          <span className="tool-chip">Replit Agent</span>
          <span className="tool-chip">IntelliJ IDEA</span>
          <span className="tool-chip">Gamma</span>
          <span className="tool-chip">HubSpot</span>
        </div>
      </div>
    </section>
  );
};
