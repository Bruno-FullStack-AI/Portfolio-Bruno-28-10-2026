import React, { useState, useEffect } from 'react';
import { ParticleDrift } from './components/ParticleDrift';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollTop } from './components/ScrollTop';
import { Toast } from './components/Toast';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 5200);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  useEffect(() => {
    // Navigation active link scroll spy
    const sections = ['home', 'about', 'skills', 'work', 'services', 'experience', 'contact'];
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) navObserver.observe(el);
    });

    // Reveal animations on scroll
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      navObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <ParticleDrift />
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Features />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Contact onShowToast={showToast} />
      </main>
      <Footer />
      <ScrollTop />
      <Toast message={toastMessage} />
    </>
  );
};

export default App;
