import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import {
  HomePage,
  WhyChoosePage,
  HospitalModulesPage,
  TrustedByPage,
  KeyFeaturesPage,
  WorkflowsPage,
  TestimonialsPage,
  FaqPage,
  ContactPage,
} from './pages/DedicatedPages';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import ModuleDetailPage from './components/ModuleDetailPage';
import TrustedBy from './components/TrustedBy';
import useScrollReveal from './lib/useScrollReveal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useScrollReveal(location.pathname);

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
    const pageMetadata = {
      '/': {
        title: 'TRIO - Hospital Management System',
        description: 'TRIO HIMS brings hospital information and operational workflows together in an integrated healthcare management system.',
      },
      '/why-choose-trio': {
        title: 'Why Choose TRIO | TRIO HIMS',
        description: 'Explore TRIO HIMS benefits, product information, and the content behind its integrated hospital management approach.',
      },
      '/hospital-modules': {
        title: 'Hospital Modules | TRIO HIMS',
        description: 'Explore the hospital modules available in TRIO HIMS and open module previews and details.',
      },
      '/trusted-by': {
        title: 'Trusted By | TRIO HIMS',
        description: 'View the partner and organization showcase featured on the TRIO HIMS website.',
      },
      '/key-features': {
        title: 'Key Features | TRIO HIMS',
        description: 'See how TRIO HIMS connects hospital modules and workflows across departments.',
      },
      '/workflows': {
        title: 'HIMS Work Flows | TRIO HIMS',
        description: 'Explore TRIO HIMS workflow diagrams for outpatient, inpatient, diagnostic, and administrative processes.',
      },
      '/testimonials': {
        title: 'Testimonials | TRIO HIMS',
        description: 'Read the clinician testimonials featured on the TRIO HIMS website.',
      },
      '/faq': {
        title: 'Frequently Asked Questions | TRIO HIMS',
        description: 'Find answers to common questions about TRIO HIMS.',
      },
      '/contact': {
        title: 'Contact TRIO HIMS',
        description: 'Contact TRIO HIMS by phone, email, or enquiry form, or request a product demonstration.',
      },
    };
    const metadata = pageMetadata[location.pathname] || {
      title: 'TRIO HIMS',
      description: 'TRIO hospital information management system.',
    };
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
  }, [location.pathname]);

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
                <HomePage
                  scrolled={scrolled}
                  onOpenModal={() => setIsModalOpen(true)}
                />
              </>
            }
          />

          <Route path="/why-choose-trio" element={<WhyChoosePage />} />
          <Route
            path="/hospital-modules"
            element={<HospitalModulesPage onOpenModal={() => setIsModalOpen(true)} />}
          />
          <Route path="/trusted-by" element={<TrustedByPage />} />
          <Route path="/key-features" element={<KeyFeaturesPage />} />
          <Route
            path="/workflows"
            element={<WorkflowsPage onOpenModal={() => setIsModalOpen(true)} />}
          />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/modules/:moduleId"
            element={<ModuleDetailPage onOpenModal={() => setIsModalOpen(true)} />}
          />
        </Routes>
        {location.pathname !== '/' && location.pathname !== '/trusted-by' ? <TrustedBy /> : null}
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
