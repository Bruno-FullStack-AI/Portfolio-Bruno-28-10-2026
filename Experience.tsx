import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ paddingTop: '20px' }}>
      <div
        className="glow-orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'rgba(255,106,0,.09)',
          top: '60px',
          right: '-200px',
        }}
      />
      <div className="container">
        <div className="sec-head-center reveal visible">
          <p className="eyebrow">Trajetória</p>
          <h2 className="sec-title">
            Experiência &amp; <span className="gradient-text">Formação</span>
          </h2>
          <p>Uma base sólida de trabalho e resultados, agora direcionada ao desenvolvimento de software.</p>
        </div>

        <div className="timeline">
          <article className="t-item reveal visible">
            <span className="t-date">Jan/2022 — Presente · Freelance</span>
            <h3>Técnico em Manutenção de Computadores</h3>
            <p className="t-company">Autônomo — Fortaleza, Ceará, Brasil</p>
            <ul>
              <li>
                Diagnósticos e reparos de <strong>hardware e software</strong>, otimizando o desempenho de sistemas e garantindo a funcionalidade para os clientes.
              </li>
              <li>
                Suporte técnico e atendimento ao cliente, resolvendo problemas de forma eficiente e didática.
              </li>
            </ul>
            <div className="tags">
              <span className="tag">Manutenção de computadores</span>
              <span className="tag">Hardware</span>
              <span className="tag">Suporte técnico</span>
            </div>
          </article>

          <article className="t-item reveal visible">
            <span className="t-date">Jan/2020 — Jul/2026 · Tempo integral</span>
            <h3>Auxiliar de Depósito</h3>
            <p className="t-company">Farmácias Pague Menos — Fortaleza, Ceará, Brasil</p>
            <ul>
              <li>
                Responsável pela <strong>organização e controle de estoque</strong>, colaborando com a equipe para garantir a eficiência das operações e a satisfação do cliente.
              </li>
              <li>
                <strong>"Destaque do Mês" em janeiro:</strong> implementei padronização de fluxos e reorganização do endereçamento com <strong>análise de Curva ABC</strong>, aumentando a velocidade de separação e reduzindo avarias e danos aos produtos.
              </li>
            </ul>
            <div className="tags">
              <span className="tag">Trabalho em equipe</span>
              <span className="tag">Resolução de problemas</span>
              <span className="tag">Curva ABC</span>
              <span className="tag">Eficiência operacional</span>
            </div>
          </article>
        </div>

        <h3 className="subhead reveal visible">
          🎓 Formação <span className="gradient-text">Acadêmica</span>
        </h3>
        <div className="edu-grid">
          <article className="edu-card reveal visible">
            <span className="t-date">Fev/2025 — Dez/2026 · Reta final</span>
            <h3>Universidade Paulista — UNIP</h3>
            <h4>Tecnólogo em Gestão de Tecnologia da Informação</h4>
            <p>
              Último semestre da graduação, com <strong style={{ color: '#ffb347' }}>100% das horas complementares concluídas</strong> (cursos de IA, Transformação Digital, Fundamentos de TI e Desenvolvimento Web). PIM sobre o CD Pague Menos avaliado com <strong style={{ color: '#ffb347' }}>nota 10/10</strong>.
            </p>
          </article>

          <article className="edu-card reveal visible d1">
            <span className="t-date">Dez/2025 — Dez/2027 · Em andamento</span>
            <h3>Dev Club</h3>
            <h4>Computer Software Technology / Technician</h4>
            <p>
              Formação prática e mão na massa em desenvolvimento web, com trilhas de <strong style={{ color: '#ffb347' }}>HTML, CSS, JavaScript, Inteligência Artificial e análise de dados</strong> — onde nasceram projetos como o Projeto GTA.
            </p>
          </article>
        </div>

        <h3 className="subhead reveal visible">
          🏅 Licenças &amp; <span className="gradient-text">Certificados</span>
        </h3>
        <div className="cert-grid">
          <article className="edu-card reveal visible">
            <span className="t-date">Set/2026 · 4h</span>
            <h3>Fluência em Inteligência Artificial</h3>
            <h4>Fundação Bradesco | Escola Virtual — em parceria com a Microsoft</h4>
            <p>
              Competências em Inteligência Artificial e aprendizado de máquina aplicadas ao presente do desenvolvimento de software.
            </p>
          </article>

          <article className="edu-card reveal visible d1">
            <span className="t-date">Set/2026</span>
            <h3>Crie um Site Simples usando HTML, CSS e JavaScript</h3>
            <h4>Fundação Bradesco</h4>
            <p>
              Reforço da base de front-end enquanto aplico na prática, com IA e projetos reais — HTML5, CSS e JavaScript.
            </p>
          </article>

          <article className="edu-card reveal visible d2">
            <span className="t-date">Dev Club</span>
            <h3>Certificado de Conclusão — HTML</h3>
            <h4>Dev Club · Rodolfo Mori</h4>
            <p>
              Domínio da base fundamental da web: semântica, acessibilidade e estruturas sólidas para projetos escaláveis.
            </p>
          </article>
        </div>
        <p className="cert-note reveal visible">
          5 licenças e certificados no LinkedIn, incluindo formações em Inteligência Artificial, Cibersegurança e Desenvolvimento Web.
        </p>

        <h3 className="subhead reveal visible">
          ⭐ Destaques <span className="gradient-text">Recentes</span>
        </h3>
        <div className="highlights-grid">
          <article className="hl-card reveal visible">
            <div className="hl-icon">🏆</div>
            <h3>Destaque do Mês — Pague Menos</h3>
            <p>
              Reconhecimento em janeiro pela aplicação prática de conceitos de tecnologia e dados: padronização de fluxos e Curva ABC gerando mais velocidade de separação e menos avarias.
            </p>
            <span className="hl-meta">Dados · Eficiência operacional</span>
          </article>

          <article className="hl-card reveal visible d1">
            <div className="hl-icon">🎓</div>
            <h3>PIM Nota 10/10 — UNIP</h3>
            <p>
              Projeto Integrado Multidisciplinar sobre o Centro de Distribuição da Pague Menos avaliado com nota máxima, aliando a base de gestão da faculdade à prática.
            </p>
            <span className="hl-meta">Gestão de TI · Excelência acadêmica</span>
          </article>

          <article className="hl-card reveal visible d2">
            <img
              className="hl-photo"
              src="/assets/bruno-lima-siara-robo.jpg"
              alt="Bruno Lima apertando a mão do robô humanoide Fred no Siará Tech Summit, em Fortaleza"
              loading="lazy"
              decoding="async"
            />
            <h3>🤖 Siará Tech Summit — Fortaleza</h3>
            <p>
              Imersão no ecossistema de inovação e IA do Ceará, com interação com o robô humanoide Fred, networking e tendências de automação e IA aplicada na prática.
            </p>
            <span className="hl-meta">Inovação · Networking tech</span>
          </article>
        </div>
      </div>
    </section>
  );
};
