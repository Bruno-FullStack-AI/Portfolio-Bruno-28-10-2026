import React, { useState, useEffect } from 'react';

export const ScrollTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? (scrolled / max) * 100 : 0;
      setScrollProgress(progress);
      setShowTopBtn(scrolled > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <>
      <div id="progress" style={{ width: `${scrollProgress}%` }} />
      <button
        id="topBtn"
        className={showTopBtn ? 'show' : ''}
        aria-label="Voltar ao topo"
        onClick={scrollToTop}
      >
        ↑
      </button>
    </>
  );
};
