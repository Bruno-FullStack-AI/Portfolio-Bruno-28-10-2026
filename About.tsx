import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about">
      <div
        className="glow-orb"
        style={{
          width: '380px',
          height: '380px',
          background: 'rgba(255,90,0,.09)',
          top: '20px',
          left: '-200px',
        }}
      />
      <div className="container">
        <div className="sec-head-split reveal visible">
          <div>
            <p className="eyebrow">Sobre Mim</p>
            <h2 className="sec-title">
              Transição para a <span className="gradient-text">Tecnologia</span>
            </h2>
          </div>
          <p>Inteligência Artificial · Desenvolvedor Full Stack · Front-end · Freelancer · Desenvolvedor Web</p>
        </div>

        <div className="about-grid">
          <div className="about-text reveal visible">
            <p>
              Com uma trajetória profissional sólida e uma{' '}
              <strong>transição de carreira bem-sucedida para o universo tech</strong>, sou{' '}
              <strong>Desenvolvedor Full Stack e Front-end Júnior</strong>, com especial interesse em{' '}
              <strong>Inteligência Artificial</strong>. Minhas certificações em IA, Cibersegurança e Desenvolvimento Web validam minha dedicação como autodidata.
            </p>
            <p>
              Ao longo da minha carreira, desenvolvi soft skills como{' '}
              <strong>proatividade, capacidade de adaptação e trabalho em equipe</strong>, que agora aplico no desenvolvimento de soluções web com{' '}
              <strong>HTML, CSS e JavaScript</strong>.
            </p>
            <p>
              Atualmente estou na{' '}
              <strong>reta final da graduação em Gestão de TI na UNIP</strong> (com 100% das horas complementares concluídas) e sigo em formação prática no{' '}
              <strong>Dev Club</strong>, conectando gestão, desenvolvimento web e IA para gerar impacto real.
            </p>
            <p>
              Busco minha primeira chance em uma empresa que valorize o{' '}
              <strong>aprendizado contínuo e a inovação</strong>, onde possa crescer e contribuir significativamente.{' '}
              <strong>Vamos conversar sobre como posso agregar ao seu time!</strong>
            </p>
          </div>

          <aside className="info-card reveal visible d1">
            <h3>📋 Perfil</h3>
            <div className="info-row">
              <span>Nome</span>
              <b>Bruno Lima</b>
            </div>
            <div className="info-row">
              <span>Localização</span>
              <b>Fortaleza, Ceará, Brasil</b>
            </div>
            <div className="info-row">
              <span>Objetivo</span>
              <b>Dev Full Stack / Front-end Júnior</b>
            </div>
            <div className="info-row">
              <span>Formato</span>
              <b>Presencial · Híbrido · Remoto</b>
            </div>
            <div className="info-row">
              <span>Status</span>
              <b>Autônomo / Freelancer — buscando emprego</b>
            </div>
            <div className="info-row">
              <span>Estudando</span>
              <b>Gestão de TI (UNIP) · Dev Club</b>
            </div>
            <div className="info-row">
              <span>LinkedIn</span>
              <b>1.112 seguidores · 500+ conexões</b>
            </div>
            <a
              className="btn btn-primary"
              href="https://www.linkedin.com/in/bruno-lima-dev-full-stack-ia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver perfil no LinkedIn →
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};
