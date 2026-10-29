import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Counts from './components/Counts';
import TrustedBy from './components/TrustedBy';
import CompanyIntro from './components/CompanyIntro';
import KeyFeatures from './components/KeyFeatures';
import Modules from './components/Modules';
import AppointmentSection from './components/AppointmentSection';
import Workflows from './components/Workflows';
import Faq from './components/Faq';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import ModuleDetailPage from './components/ModuleDetailPage';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // 1. Initialize Lenis Buttery Smooth Momentum Scrolling
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = prefersReducedMotion ? null : new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.2,
        infinite: false,
      });

    window.__lenis = lenis;

    let animId;
    if (lenis) {
      function raf(time) {
        lenis.raf(time);
        animId = requestAnimationFrame(raf);
      }
      animId = requestAnimationFrame(raf);
    }

    // 2. Adaptive Scroll Transition Handling
    const handleScroll = () => {
      const intelligenceEl = document.querySelector('.hero-line-intelligence') || document.querySelector('.hero-left-mid-block');
      const whiteSectionEl = document.querySelector('.stats-strip-white') || document.getElementById('counts');

      if (intelligenceEl && whiteSectionEl) {
        const intelRect = intelligenceEl.getBoundingClientRect();
        const whiteRect = whiteSectionEl.getBoundingClientRect();

        setScrolled((prev) => {
          if (prev) {
            return (whiteRect.top <= intelRect.bottom + 45) || (intelRect.bottom <= 85);
          } else {
            return (whiteRect.top <= intelRect.bottom + 25) || (intelRect.bottom <= 72);
          }
        });
      } else {
        const threshold = window.innerHeight * 0.5 + 30;
        setScrolled(window.scrollY >= threshold);
      }
    };

    if (lenis) {
      lenis.on('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      lenis?.destroy();
      window.__lenis = null;
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.__lenis) {
      if (isModalOpen) {
        window.__lenis.stop();
      } else {
        window.__lenis.start();
      }
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== '/') return;
    const hash = location.hash.replace('#', '');
    if (!hash) return;

    const scrollToHash = () => {
      const element = document.getElementById(hash);
      if (!element) return false;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (window.__lenis && !prefersReducedMotion) {
        window.__lenis.scrollTo(element, { offset: -74, duration: 1.05 });
      } else {
        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 74;
        window.scrollTo({ top: offsetPosition, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
      return true;
    };

    if (scrollToHash()) return undefined;
    const retry = window.setTimeout(scrollToHash, 80);
    return () => window.clearTimeout(retry);
  }, [location.pathname, location.hash]);

  return (
    <div className="trio-app-root">
      <Navbar scrolled={scrolled} onOpenModal={() => setIsModalOpen(true)} />

      <main id="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero scrolled={scrolled} onOpenModal={() => setIsModalOpen(true)} />
                <Counts />
                <section id="company-intro" className="company-intro-section">
                  <div className="container">
                    <CompanyIntro />
                  </div>
                </section>
                <Modules onOpenModal={() => setIsModalOpen(true)} />
                <TrustedBy />
                <KeyFeatures />
                <Workflows onOpenModal={() => setIsModalOpen(true)} />
                <AppointmentSection />
                <Testimonials />
                <Faq />
                <Contact />
              </>
            }
          />

          <Route
            path="/modules/:moduleId"
            element={<ModuleDetailPage onOpenModal={() => setIsModalOpen(true)} />}
          />
        </Routes>
      </main>

      <Footer onOpenModal={() => setIsModalOpen(true)} />

      <DemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <WhatsAppFloat />
    </div>
  );
}
