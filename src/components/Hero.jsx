import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { testimonialsData } from '../data/testimonialsData';
import {
  TRIO_BUSINESS_EMAIL,
  TRIO_MAILTO,
  TRIO_PHONE_DISPLAY,
  TRIO_PHONE_TEL,
  TRIO_WHATSAPP_URL
} from '../data/contactDetails';

const HEADING_LINE_1 = 'Powering Smarter Hospitals.';
const HEADING_LINE_2 = 'Transforming Healthcare.';

export default function Hero({ onOpenModal, scrolled }) {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [activeStep, setActiveStep] = useState(1);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [shortcutsVisible, setShortcutsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cancelled = false;
    const timeouts = [];
    const intervals = [];

    const later = (fn, delay) => {
      const id = setTimeout(fn, delay);
      timeouts.push(id);
      return id;
    };

    const typeLine = (fullText, setter, speed, onDone) => {
      let idx = 0;
      const interval = setInterval(() => {
        if (cancelled) {
          clearInterval(interval);
          return;
        }
        idx += 1;
        setter(fullText.slice(0, idx));
        if (idx >= fullText.length) {
          clearInterval(interval);
          onDone();
        }
      }, speed);
      intervals.push(interval);
    };

    if (prefersReducedMotion) {
      setText1(HEADING_LINE_1);
      setText2(HEADING_LINE_2);
      setActiveStep(3);
      setShortcutsVisible(true);
      setButtonVisible(true);
      return undefined;
    }

    later(() => {
      setActiveStep(1);
      typeLine(HEADING_LINE_1, setText1, 38, () => {
        setActiveStep(2);
        later(() => {
          typeLine(HEADING_LINE_2, setText2, 40, () => {
            setActiveStep(3);
            later(() => {
              setShortcutsVisible(true);
              later(() => setButtonVisible(true), 220);
            }, 160);
          });
        }, 140);
      });
    }, 280);

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <section id="hero" className={`hero-stage ${scrolled ? 'scrolled' : ''}`}>
      <div className="hero-management-visual" aria-hidden="true">
        <img
          src="/assets/images/Futuristic Healthcare Cross in Motion.png"
          alt="TRIO HIMS Modern Healthcare Management"
          className="hero-management-image"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div className="hero-bottom-fade"></div>
      </div>

      <div className="hero-editorial-stage">
        <div className="hero-left-mid-block">
          <p className="hero-eyebrow">
            TRIO HIMS <span aria-hidden="true">·</span> HOSPITAL MANAGEMENT SOFTWARE
          </p>

          <h1 className="hero-main-heading" aria-label={`${HEADING_LINE_1} ${HEADING_LINE_2}`}>
            <span className="hero-typography-line hero-line-intelligence">
              <span>{text1}</span>
              {activeStep === 1 && <span className="type-caret" aria-hidden="true" />}
            </span>
            <span className="hero-typography-line hero-line-modern">
              <span className="hero-line-highlight">{text2}</span>
              {activeStep === 2 && <span className="type-caret" aria-hidden="true" />}
            </span>
          </h1>

          <p className="hero-supporting-copy">
            <strong className="hero-supporting-bold-text">
              Simplify every aspect of hospital management with TRIO HIMS, an integrated healthcare information management system designed to connect departments, streamline workflows, and bring essential operations into one platform.
            </strong>
          </p>

          <div className={`hero-cta-btn-wrap ${buttonVisible ? 'visible' : ''}`}>
            <button
              type="button"
              className="hero-btn-pill hero-btn-premium"
              onClick={onOpenModal}
            >
              <span className="btn-shimmer-sweep"></span>
              <span className="btn-text">Book a Free Demo</span>
              <i className="bi bi-arrow-right btn-arrow" aria-hidden="true"></i>
            </button>
            <Link to="/hospital-modules" className="hero-btn-secondary">
              Explore Modules
              <i className="bi bi-grid-3x3-gap" aria-hidden="true"></i>
            </Link>
            <Link
              to="/testimonials"
              className="hero-social-proof"
              aria-label="Read clinician testimonials; TRIO HIMS is used by more than 200 hospitals"
            >
              <span className="hero-social-proof-avatars" aria-hidden="true">
                {testimonialsData.slice(0, 3).map((testimonial) => (
                  <img
                    key={testimonial.id}
                    src={testimonial.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </span>
              <span className="hero-social-proof-copy">
                <strong>200+ hospitals</strong>
                <span>Clinician stories</span>
              </span>
            </Link>
          </div>

          <div className="hero-trust-indicators" aria-label="TRIO HIMS compliance and readiness">
            <span className="hero-trust-indicator">
              <img
                src="/assets/images/certifications/nabh-logo.png"
                alt="NABH Accredited"
                className="hero-cert-mini-logo"
                loading="eager"
              />
              <span>NABH Ready</span>
            </span>
            <span className="hero-trust-indicator">
              <img
                src="/assets/images/certifications/iso-27001-logo.png"
                alt="ISO 27001 Certified"
                className="hero-cert-mini-logo"
                loading="eager"
              />
              <span>ISO 27001 Certified</span>
            </span>
            <span className="hero-trust-indicator hero-trust-indicator-abha">
              <img
                src="/assets/images/certifications/abha-logo.png"
                alt="ABHA ABDM Certified"
                className="hero-cert-mini-logo"
                loading="eager"
              />
              <span className="position-relative">
                ABHA / ABDM M1-M3
                <span className="badge-superscript-new">NEW</span>
              </span>
            </span>
          </div>

          <div className="hero-certification-badges" aria-label="TRIO HIMS experience and service badges">
            <img
              className="hero-certification-badge"
              src="/assets/images/1-removebg-preview.png"
              alt="10 years expertise"
              loading="eager"
              decoding="async"
            />
            <img
              className="hero-certification-badge"
              src="/assets/images/2-removebg-preview.png"
              alt="Deployed in 200+ hospitals"
              loading="eager"
              decoding="async"
            />
            <img
              className="hero-certification-badge"
              src="/assets/images/3-removebg-preview.png"
              alt="27 hospital modules"
              loading="eager"
              decoding="async"
            />
            <img
              className="hero-certification-badge"
              src="/assets/images/4-removebg-preview(4).png"
              alt="Excellent service and support system"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <aside
          className={`hero-right-mid-block hero-contact-panel ${shortcutsVisible ? 'visible' : ''}`}
          aria-label="Contact shortcuts"
        >
          <p className="hero-contact-kicker">Talk to TRIO HIMS</p>
          <div className="hero-contact-shortcuts">
            <a
              className="hero-contact-card hero-contact-card-whatsapp"
              href={TRIO_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with TRIO HIMS on WhatsApp"
            >
              <span className="hero-contact-icon hero-icon-whatsapp" aria-hidden="true">
                <i className="bi bi-whatsapp"></i>
              </span>
              <span className="hero-contact-copy">
                <span className="hero-contact-label">WhatsApp</span>
                <span className="hero-contact-value">Business chat</span>
              </span>
            </a>

            <a
              className="hero-contact-card hero-contact-card-call"
              href={TRIO_PHONE_TEL}
              aria-label={`Call TRIO HIMS at ${TRIO_PHONE_DISPLAY}`}
            >
              <span className="hero-contact-icon hero-icon-call" aria-hidden="true">
                <i className="bi bi-telephone-fill"></i>
              </span>
              <span className="hero-contact-copy">
                <span className="hero-contact-label">Call</span>
                <span className="hero-contact-value">{TRIO_PHONE_DISPLAY}</span>
              </span>
            </a>

            <a
              className="hero-contact-card hero-contact-card-mail"
              href={TRIO_MAILTO}
              aria-label="Email TRIO HIMS at info@triocorporation.in"
            >
              <span className="hero-contact-icon hero-icon-mail" aria-hidden="true">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <span className="hero-contact-copy">
                <span className="hero-contact-label">Mail</span>
                <span className="hero-contact-value">{TRIO_BUSINESS_EMAIL}</span>
              </span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
