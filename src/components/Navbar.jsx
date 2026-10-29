import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ onOpenModal, scrolled: externalScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalScrolled, setInternalScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const mobileToggleRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const scrolled = externalScrolled !== undefined ? externalScrolled : internalScrolled;

  useEffect(() => {
    let frameId = 0;
    const updateHeader = () => {
      const intelligenceEl = document.querySelector('.hero-line-intelligence') || document.querySelector('.hero-left-mid-block');
      const whiteSectionEl = document.querySelector('.stats-strip-white') || document.getElementById('counts');

      if (intelligenceEl && whiteSectionEl) {
        const intelRect = intelligenceEl.getBoundingClientRect();
        const whiteRect = whiteSectionEl.getBoundingClientRect();
        setInternalScrolled((prev) => {
          if (prev) {
            return (whiteRect.top <= intelRect.bottom + 45) || (intelRect.bottom <= 85);
          } else {
            return (whiteRect.top <= intelRect.bottom + 25) || (intelRect.bottom <= 72);
          }
        });
      } else {
        setInternalScrolled(window.scrollY >= (window.innerHeight * 0.5 + 30));
      }

      const sections = ['hero', 'counts', 'modules', 'trusted-by', 'key-features', 'workflows', 'testimonials', 'faq', 'contact'];
      const activationLine = Math.min(window.innerHeight * 0.28, 180);
      let currentSection = 'hero';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= activationLine) {
          currentSection = section;
        }
      }

      const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (pageBottom) currentSection = 'contact';
      setActiveSection((current) => current === currentSection ? current : currentSection);
    };

    const handleScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateHeader();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateHeader();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        mobileToggleRef.current?.focus({ preventScroll: true });
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [mobileMenuOpen]);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setActiveSection(id);
      return;
    }
    const element = document.getElementById(id);
    if (!element) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const topOffset = 74;
      const elementPosition = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementPosition + window.pageYOffset - topOffset, behavior: 'auto' });
      setActiveSection(id);
      return;
    }
    if (window.__lenis) {
      window.__lenis.scrollTo(element, { offset: -74, duration: 1.15 });
    } else {
      const topOffset = 74;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(id);
  };

  const handleNavigationClick = () => {
    if (mobileMenuOpen) mobileToggleRef.current?.focus({ preventScroll: true });
    setMobileMenuOpen(false);
  };

  return (
    <header id="header" className={`fixed-top d-flex align-items-center ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* TRIO Logo */}
        <div className="logo">
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
            <img 
              src="/assets/img/trio-logo.png" 
              alt="TRIO Corporation Pvt. Ltd." 
              title="TRIO Corporation Pvt Ltd" 
              className="trio-header-logo"
            />
          </a>
        </div>

        {/* Primary navigation */}
        <nav id="navbar" className={`navbar ${mobileMenuOpen ? 'navbar-mobile' : ''}`} aria-label="Primary navigation">
          <button
            type="button"
            className={`mobile-nav-toggle bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`}
            ref={mobileToggleRef}
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation-links"
          />

          <ul id="primary-navigation-links" onClickCapture={handleNavigationClick}>
            <li>
              <a
                href="#hero" 
                className={activeSection === 'hero' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#counts"
                className={activeSection === 'counts' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('counts'); }}
              >
                Why Choose TRIO
              </a>
            </li>
            <li>
              <a 
                href="#modules"
                className={activeSection === 'modules' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('modules'); }}
              >
                Hospital Modules
              </a>
            </li>
            <li>
              <a
                href="#trusted-by"
                className={activeSection === 'trusted-by' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('trusted-by'); }}
              >
                Trusted By
              </a>
            </li>
            <li>
              <a
                href="#key-features"
                className={activeSection === 'key-features' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('key-features'); }}
              >
                Key Features
              </a>
            </li>
            <li>
              <a 
                href="#workflows" 
                className={activeSection === 'workflows' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('workflows'); }}
              >
                HIMS Work Flows
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className={activeSection === 'testimonials' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('testimonials'); }}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className={activeSection === 'faq' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}
              >
                FAQ
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>

        </nav>

        <div className="google-nav-actions d-flex align-items-center">
          <button 
            type="button"
            className="btn-google-pill"
            onClick={onOpenModal}
            aria-label="Book a demo"
          >
            <span>Book a Demo</span>
            <i className="bi bi-calendar2-check header-demo-icon" aria-hidden="true"></i>
          </button>
        </div>

      </div>
    </header>
  );
}
