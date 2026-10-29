import React from 'react';

export const Projects: React.FC = () => {
  return (
    <section id="work" style={{ paddingTop: '20px' }}>
      <div
        className="glow-orb"
        style={{
          width: '420px',
          height: '420px',
          background: 'rgba(255,106,0,.10)',
          bottom: '-100px',
          left: '-200px',
        }}
      />
      <div className="container">
        <div className="sec-head-split reveal visible">
          <div>
            <p className="eyebrow">Meu Portfólio</p>
            <h2 className="sec-title">
              Projetos em <span className="gradient-text">Destaque</span>
            </h2>
          </div>
          <p>
            Teoria transformada em entrega real: um e-commerce completo no ar, um projeto de estudo com IA a caminho e um trabalho acadêmico nota máxima.
          </p>
        </div>

        <div className="projects-grid">
          <article className="project-card reveal visible">
            <a
              className="project-thumb"
              href="https://eris-fit.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir o site Erisfit"
            >
              <img
                className="top"
                src="/assets/project-erisfit.png"
                alt="Página inicial da loja Erisfit — e-commerce de moda fitness"
                loading="lazy"
                decoding="async"
              />
              <span className="live-badge">🔴 NO AR</span>
              <span className="project-go">↗</span>
            </a>
            <div className="project-body">
              <h3>Erisfit — Loja + Painel Admin</h3>
              <p>
                E-commerce completo de moda fitness: loja virtual com catálogo, busca, filtros, carrinho e cupons; checkout via WhatsApp; painel administrativo com métricas em tempo real e exportação CSV; PDV presencial com troco e descontos; e gestão de pedidos e estoque.
              </p>
              <div className="tags">
                <span className="tag">E-commerce</span>
                <span className="tag">Painel Admin</span>
                <span className="tag">PDV</span>
                <span className="tag">WhatsApp</span>
              </div>
              <a
                className="project-link"
                href="https://eris-fit.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                erisfit.vercel.app →
              </a>
            </div>
          </article>

          <article className="project-card reveal visible d1">
            <div className="project-thumb">
              <img
                src="/assets/project-gta.jpg"
                alt="Arte conceitual de tela de customização de personagem de jogo em neon laranja"
                loading="lazy"
                decoding="async"
              />
              <span className="live-badge">🛠️ EM DESENVOLVIMENTO</span>
              <span className="project-go">↗</span>
            </div>
            <div className="project-body">
              <h3>Projeto GTA</h3>
              <p>
                Projeto prático desenvolvido com HTML, CSS e JavaScript nas aulas do Dev Club (Rodolfo Mori). Próxima etapa em andamento: inserir Inteligência Artificial para fazer a caracterização do usuário e transformá-lo em um personagem do universo GTA.
              </p>
              <div className="tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">IA</span>
              </div>
            </div>
          </article>

          <article className="project-card reveal visible d2">
            <div className="project-thumb">
              <img
                src="/assets/project-business.jpg"
                alt="Notebook exibindo dashboard de gestão em neon laranja"
                loading="lazy"
                decoding="async"
              />
              <span className="live-badge">🎓 ACADÊMICO</span>
              <span className="project-go">↗</span>
            </div>
            <div className="project-body">
              <h3>PIM — CD Pague Menos</h3>
              <p>
                Projeto Integrado Multidisciplinar da graduação em Gestão de TI (UNIP) sobre o Centro de Distribuição da Farmácias Pague Menos —{' '}
                <strong style={{ color: '#ffb347' }}>avaliado com nota 10/10</strong> — unindo gestão, processos, dados e eficiência operacional.
              </p>
              <div className="tags">
                <span className="tag">Gestão de TI</span>
                <span className="tag">UNIP</span>
                <span className="tag">Nota 10/10</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
