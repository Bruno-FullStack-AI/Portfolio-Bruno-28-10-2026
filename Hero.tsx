import React, { useState, useEffect, useRef } from 'react';

function useCounter(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setCount(Math.round(target * eased));
              if (p < 1) {
                requestAnimationFrame(tick);
              }
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, elementRef };
}

export const Hero: React.FC = () => {
  const counter1 = useCounter(33);
  const counter2 = useCounter(5);
  const counter3 = useCounter(500);

  return (
    <section className="hero" id="home">
      <div className="grid-bg" />
      <div
        className="glow-orb"
        style={{
          width: '520px',
          height: '520px',
          background: 'rgba(255,90,0,.20)',
          top: '-160px',
          left: '-140px',
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: '420px',
          height: '420px',
          background: 'rgba(255,149,0,.13)',
          top: '120px',
          right: '-160px',
        }}
      />

      <div className="container hero-grid">
        <div className="hero-copy reveal visible">
          <span className="badge">Olá, eu sou Bruno Lima</span>
          <h1>
            Eu crio <span className="gradient-text">experiências<br />digitais</span> que geram<br />resultados reais
          </h1>
          <p className="lead">
            Desenvolvedor Full Stack &amp; Front-end com foco em Inteligência Artificial. Construo interfaces e aplicações web modernas, rápidas e centradas no usuário.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              Ver projetos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <p className="hero-meta">
            📍 <b>Fortaleza, Ceará — Brasil</b> &nbsp;·&nbsp; Presencial, híbrido ou remoto &nbsp;·&nbsp; Freelancer
          </p>

          <div className="hero-stats">
            <div className="stat" ref={counter1.elementRef}>
              <b>
                <span className="counter">{counter1.count}</span>
              </b>
              <small>Competências no LinkedIn</small>
            </div>
            <div className="stat" ref={counter2.elementRef}>
              <b>
                <span className="counter">{counter2.count}</span>
              </b>
              <small>Certificações conquistadas</small>
            </div>
            <div className="stat" ref={counter3.elementRef}>
              <b>
                <span className="counter">{counter3.count}</span>
                <em>+</em>
              </b>
              <small>Conexões no LinkedIn</small>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal visible d1">
          <span className="hero-orbit orbit-one" aria-hidden="true" />
          <span className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-cutout-wrap">
            <img
              className="hero-cutout"
              src="/assets/bruno-lima-hero-sem-fundo-v3.webp"
              width={960}
              height={1080}
              alt="Bruno Lima — retrato profissional sem moldura, integrado ao fundo preto com brilho laranja e partículas"
            />
          </div>
          <div className="float-chip chip-ui">🤖 IA Aplicada</div>
          <div className="float-chip chip-code">&lt;/&gt; HTML • CSS • JavaScript</div>
        </div>

        <aside className="hero-panel reveal visible d2" aria-labelledby="hero-panel-title">
          <div>
            <h2 id="hero-panel-title">O que eu faço</h2>
            <ul className="hero-services">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                  <path d="m2 17 10 5 10-5" />
                  <path d="m2 12 10 5 10-5" />
                </svg>
                UI/UX &amp; Front-end
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="13" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
                Desenvolvimento Web
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="7" y="7" width="10" height="10" rx="2" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
                </svg>
                IA aplicada
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M10 14a5 5 0 007.07 0l2.83-2.83a5 5 0 00-7.07-7.07L11 5.93" />
                  <path d="M14 10a5 5 0 00-7.07 0L4.1 12.83a5 5 0 007.07 7.07L13 18.07" />
                </svg>
                APIs &amp; E-commerce
              </li>
            </ul>
          </div>

          <div className="hero-mini-stats" aria-label="Destaques">
            <div>
              <b>
                2<em>+</em>
              </b>
              <small>Anos em tecnologia</small>
            </div>
            <div>
              <b>
                10<em>+</em>
              </b>
              <small>Projetos entregues</small>
            </div>
            <div>
              <b>
                5<em>+</em>
              </b>
              <small>Certificações</small>
            </div>
          </div>

          <div className="hero-signature">
            <img src="/favicon.svg" alt="" width={46} height={46} />
            <p>
              <strong>BL</strong>
              <span>
                Código, design<br />e inteligência artificial
              </span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};
