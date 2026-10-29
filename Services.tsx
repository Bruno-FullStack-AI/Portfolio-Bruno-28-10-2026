import React from 'react';

export const Services: React.FC = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="sec-head-center reveal visible">
          <p className="eyebrow">O Que Eu Faço</p>
          <h2 className="sec-title">
            Meus <span className="gradient-text">Serviços</span>
          </h2>
          <p>Como freelancer, transformo ideias em soluções digitais reais — do site institucional à loja virtual completa.</p>
        </div>

        <div className="services-grid">
          <article className="service-card reveal visible">
            <div className="service-icon">
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
              </svg>
            </div>
            <h3>Desenvolvimento Web</h3>
            <p>
              Criação de sites responsivos e interfaces modernas com HTML, CSS e JavaScript, com foco em semântica, acessibilidade e estruturas sólidas para projetos escaláveis.
            </p>
            <a href="#contact" className="service-link">
              Pedir orçamento →
            </a>
          </article>

          <article className="service-card reveal visible d1">
            <div className="service-icon">
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="20" r="1.6" />
                <circle cx="17" cy="20" r="1.6" />
                <path d="M2 3h3l2.6 12.4a1.5 1.5 0 001.5 1.1h7.9a1.5 1.5 0 001.5-1.2L20.5 7H6" />
              </svg>
            </div>
            <h3>E-commerce &amp; Sistemas Web</h3>
            <p>
              Lojas virtuais completas com painel administrativo, PDV presencial, controle de pedidos e estoque e integrações via APIs/webhooks (WhatsApp e Mercado Pago) — como no projeto Erisfit.
            </p>
            <a href="#contact" className="service-link">
              Pedir orçamento →
            </a>
          </article>

          <article className="service-card reveal visible d2">
            <div className="service-icon">
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a4.5 4.5 0 00-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 006-6L14 13l-3-3 3.7-3.7z" />
              </svg>
            </div>
            <h3>Manutenção &amp; Suporte Técnico</h3>
            <p>
              Diagnóstico e reparo de hardware e software, otimização de desempenho de sistemas e suporte técnico eficiente e didático — atendimento autônomo a clientes desde 2022.
            </p>
            <a href="#contact" className="service-link">
              Pedir orçamento →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};
