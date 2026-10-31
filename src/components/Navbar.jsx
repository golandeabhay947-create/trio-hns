import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Why Us', path: '/why-choose-trio' },
  { label: 'Modules', path: '/hospital-modules' },
  { label: 'ABHA', path: '/abha', badge: 'NEW' },
  { label: 'Partners', path: '/trusted-by' },
  { label: 'Features', path: '/key-features' },
  { label: 'Workflows', path: '/workflows' },
  { label: 'Reviews', path: '/testimonials' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar({ onOpenModal, scrolled: externalScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalScrolled, setInternalScrolled] = useState(false);
  const mobileToggleRef = useRef(null);
  const location = useLocation();

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
          }
          return (whiteRect.top <= intelRect.bottom + 25) || (intelRect.bottom <= 72);
        });
      } else {
        setInternalScrolled(window.scrollY >= (window.innerHeight * 0.5 + 30));
      }
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
    setMobileMenuOpen(false);
  }, [location.pathname]);

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

  const handleNavigationClick = () => {
    if (mobileMenuOpen) mobileToggleRef.current?.focus({ preventScroll: true });
    setMobileMenuOpen(false);
  };

  // Critical routing fix: Keep ABHA and Hospital Modules completely separated
  const isItemActive = (itemPath) => {
    if (itemPath === '/hospital-modules') {
      return (
        location.pathname === '/hospital-modules' ||
        (location.pathname.startsWith('/modules/') && location.pathname !== '/modules/19')
      );
    }
    if (itemPath === '/abha') {
      return location.pathname === '/abha' || location.pathname === '/modules/19';
    }
    return location.pathname === itemPath;
  };

  return (
    <header id="header" className={`fixed-top d-flex align-items-center ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-nav-container d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link to="/" aria-label="TRIO HIMS home" onClick={() => setMobileMenuOpen(false)}>
            <img
              src="/assets/img/trio-logo.png"
              alt="TRIO Corporation Pvt. Ltd."
              title="TRIO Corporation Pvt Ltd"
              className="trio-header-logo"
            />
          </Link>
        </div>

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
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item.path);
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link-item ${active ? 'active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span className="nav-label-wrap">
                      {item.label}
                      {item.badge && (
                        <span className="badge-superscript-new" aria-label="New feature">
                          {item.badge}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="google-nav-actions d-flex align-items-center">
          <button
            type="button"
            className="btn-google-pill btn-header-demo"
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
