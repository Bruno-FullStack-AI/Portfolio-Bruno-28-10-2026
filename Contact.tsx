import React, { useState } from 'react';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      setErrors((prev) => ({ ...prev, name: true }));
      onShowToast('⚠ Informe seu nome, por favor.');
      return;
    }
    if (!email) {
      setErrors((prev) => ({ ...prev, email: true }));
      onShowToast('⚠ Informe seu e-mail, por favor.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors((prev) => ({ ...prev, email: true }));
      onShowToast('⚠ Informe um e-mail válido, por favor.');
      return;
    }
    if (!message) {
      setErrors((prev) => ({ ...prev, message: true }));
      onShowToast('⚠ Escreva sua mensagem, por favor.');
      return;
    }

    const firstName = name.split(' ')[0];
    onShowToast(`🔥 Obrigado, ${firstName}! Mensagem validada. Como este formulário é demonstrativo, finalize pelo LinkedIn para eu recebê-la.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" style={{ paddingTop: '20px' }}>
      <div
        className="glow-orb"
        style={{
          width: '440px',
          height: '440px',
          background: 'rgba(255,90,0,.12)',
          bottom: '-140px',
          left: '-160px',
        }}
      />
      <div className="container contact-grid">
        <div className="contact-art reveal visible">
          <img
            src="/assets/contact-art.jpg"
            alt="Arte neon laranja de pôr do sol sobre montanhas"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/assets/bruno-lima-evento-ia.jpg"
            alt="Bruno Lima de braços cruzados em evento de inovação e Inteligência Artificial no Ceará"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="reveal visible d1">
          <p className="eyebrow">Entre em Contato</p>
          <h2 className="sec-title">
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>
          <p className="contact-sub">
            Estou em busca de oportunidades como Desenvolvedor Full Stack / Front-end Júnior e de projetos freelancer. Vamos conversar sobre como posso agregar ao seu time!
          </p>

          <div className="contact-info">
            <span>📍 Fortaleza, Ceará — Brasil (presencial, híbrido ou remoto)</span>
            <span>
              💼{' '}
              <a
                href="https://www.linkedin.com/in/bruno-lima-dev-full-stack-ia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/bruno-lima-dev-full-stack-ia
              </a>
            </span>
            <span>
              🛍️ Projeto no ar:{' '}
              <a href="https://eris-fit.vercel.app/" target="_blank" rel="noopener noreferrer">
                eris-fit.vercel.app
              </a>
            </span>
          </div>

          <form id="contactForm" noValidate onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label className="sr-only" htmlFor="fName">
                  Seu nome
                </label>
                <input
                  type="text"
                  id="fName"
                  name="name"
                  autoComplete="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  aria-invalid={errors.name ? 'true' : undefined}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>
              <div className="field">
                <label className="sr-only" htmlFor="fEmail">
                  Seu e-mail
                </label>
                <input
                  type="email"
                  id="fEmail"
                  name="email"
                  autoComplete="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  aria-invalid={errors.email ? 'true' : undefined}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="sr-only" htmlFor="fSubject">
                Assunto
              </label>
              <input
                type="text"
                id="fSubject"
                name="subject"
                placeholder="Assunto (ex.: vaga Júnior, projeto freelance...)"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
              />
            </div>

            <div className="field">
              <label className="sr-only" htmlFor="fMsg">
                Sua mensagem
              </label>
              <textarea
                id="fMsg"
                name="message"
                rows={4}
                placeholder="Conte-me sobre a oportunidade ou o projeto..."
                value={formData.message}
                aria-invalid={errors.message ? 'true' : undefined}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
            </div>

            <div className="form-foot">
              <button type="submit" className="btn btn-primary">
                Enviar Mensagem
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
              </button>
              <span className="direct-mail">
                ou chame direto no{' '}
                <a
                  href="https://www.linkedin.com/in/bruno-lima-dev-full-stack-ia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
