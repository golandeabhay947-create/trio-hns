import { useLayoutEffect } from 'react';
import './scroll-reveal.css';

const REVEAL_GROUPS = [
  { selector: '.home-why-heading, .home-why-center' },
  { selector: '.home-why-feature-card', stagger: true },
  { selector: '.home-preview-heading .section-title-google' },
  { selector: '.home-preview-intro', delay: 90 },
  { selector: '.home-preview-actions' },
  { selector: '.home-module-item', stagger: true },
  { selector: '.home-testimonial-card', stagger: true },
  { selector: '.dedicated-page-header .section-title-google' },
  { selector: '.dedicated-page-intro', delay: 90 },
  { selector: '.google-modules-header .section-title-google' },
  { selector: '.key-features-intro', delay: 90 },
  { selector: '.key-features-tree' },
  { selector: '.stats-strip-white .mini-screen-container' },
  { selector: '.google-module-tile-wrap', stagger: true },
  { selector: '.workflow-tab-card', stagger: true },
  { selector: '.workflow-stage-card' },
  { selector: '.testi-spotlight-card' },
  { selector: '.testi-doctor-dock', delay: 90 },
  { selector: '.faq-acc-card', stagger: true },
  { selector: '.contact-info-panel' },
  { selector: '.contact-form-panel', delay: 90 },
  { selector: '.contact-hub-card', stagger: true },
  { selector: '.demo-stage-card' },
  { selector: '.demo-perk-card', stagger: true },
  { selector: '.module-detail-hero' },
  { selector: '.module-detail-card', stagger: true },
  { selector: '.company-intro-section .company-intro-copy' },
];

function clearRevealState(element) {
  delete element.dataset.scrollReveal;
  delete element.dataset.scrollRevealed;
  element.style.removeProperty('--scroll-reveal-delay');
}

export default function useScrollReveal(pathname) {
  useLayoutEffect(() => {
    const main = document.getElementById('main');
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!main || motionPreference.matches || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const revealedTargets = [];
    const pendingTargets = new Set();
    let observer;

    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.dataset.scrollRevealed = 'true';
            observer.unobserve(entry.target);
            pendingTargets.delete(entry.target);
          });
        },
        {
          rootMargin: '0px 0px 10% 0px',
          threshold: 0.08,
        }
      );

      REVEAL_GROUPS.forEach(({ selector, stagger = false, delay = 0 }) => {
        main.querySelectorAll(selector).forEach((element, index) => {
          element.dataset.scrollReveal = 'true';
          const revealDelay = stagger ? Math.min(index, 4) * 85 : delay;
          if (revealDelay) {
            element.style.setProperty('--scroll-reveal-delay', `${revealDelay}ms`);
          }

          revealedTargets.push(element);
          pendingTargets.add(element);
          observer.observe(element);
        });
      });
    } catch {
      observer?.disconnect();
      revealedTargets.forEach(clearRevealState);
      return undefined;
    }

    const revealAllForReducedMotion = (event) => {
      if (!event.matches) return;
      pendingTargets.forEach((element) => {
        element.dataset.scrollRevealed = 'true';
        observer.unobserve(element);
      });
      pendingTargets.clear();
    };

    motionPreference.addEventListener('change', revealAllForReducedMotion);
    document.documentElement.dataset.scrollRevealReady = 'true';

    return () => {
      motionPreference.removeEventListener('change', revealAllForReducedMotion);
      observer.disconnect();
      document.documentElement.removeAttribute('data-scroll-reveal-ready');
      revealedTargets.forEach(clearRevealState);
    };
  }, [pathname]);
}
