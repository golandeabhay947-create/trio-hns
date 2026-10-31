import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ onOpenModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="footer-refined">
      <div className="container footer-container">
        <div className="row g-4 g-lg-5 mb-5 align-items-start">
          {/* Column 1: Company Info & Social Links */}
          <div className="col-lg-4 col-md-6 col-12 footer-col-company">
            <Link to="/" className="d-inline-block mb-3" aria-label="TRIO HIMS Home">
              <img
                src="/assets/img/trio-logo.png"
                alt="TRIO Corporation Pvt. Ltd."
                className="trio-footer-logo"
              />
            </Link>
            <p className="footer-company-desc">
              TRIO HIMS is a reliable hospital information management system engineered to automate healthcare operations with clinical precision, departmental interoperability, and zero revenue leakage.
            </p>
            <div className="footer-social-row d-flex align-items-center gap-2 mt-4">
              <a
                href="https://twitter.com/CorporationTrio"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-circle"
                title="Twitter"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/trioindia"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-circle"
                title="Facebook"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/triocorporationitservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-circle"
                title="Instagram"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/trio-corporation-pvt-ltd-/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-circle"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/@triocorporation2512"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-circle"
                title="YouTube"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="col-lg-2 col-md-6 col-6 footer-col-nav">
            <h6 className="footer-heading">Navigation</h6>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/why-choose-trio">Why Us</Link></li>
              <li><Link to="/hospital-modules">Hospital Modules</Link></li>
              <li><Link to="/abha">ABHA Suite <span className="badge-superscript-new">NEW</span></Link></li>
              <li><Link to="/trusted-by">Trusted By</Link></li>
              <li><Link to="/key-features">Key Features</Link></li>
              <li><Link to="/workflows">Workflows</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Core Modules */}
          <div className="col-lg-3 col-md-6 col-6 footer-col-modules">
            <h6 className="footer-heading">Core Modules</h6>
            <ul className="footer-links-list">
              <li><Link to="/modules/1">RADT (Patient Intake)</Link></li>
              <li><Link to="/modules/2">Billing &amp; Cash Counter</Link></li>
              <li><Link to="/modules/5">EMR &amp; Doctor Desk</Link></li>
              <li><Link to="/modules/6">LIS Pathology &amp; Lab</Link></li>
              <li><Link to="/modules/4">RIS Radiology &amp; PACS</Link></li>
              <li><Link to="/modules/7">Pharmacy Management</Link></li>
              <li><Link to="/modules/15">OT &amp; Surgery Safety</Link></li>
              <li><Link to="/abha">ABHA / ABDM M1-M3</Link></li>
            </ul>
          </div>

          {/* Column 4: Product Demo */}
          <div className="col-lg-3 col-md-6 col-12 footer-col-demo">
            <h6 className="footer-heading footer-heading-demo">Product Demo</h6>
            <p className="footer-demo-text">
              Request a free tailored consultation and live system walkthrough for your hospital's specific clinical needs.
            </p>
            <button
              type="button"
              className="btn-book-demo w-100 justify-content-center mb-3"
              onClick={onOpenModal}
            >
              <span>Schedule Live Demo</span>
              <i className="bi bi-arrow-right ms-2"></i>
            </button>

            {subscribed ? (
              <span className="text-success fs-8 d-inline-flex align-items-center">
                <i className="bi bi-check-circle-fill me-1"></i> Subscribed successfully!
              </span>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-newsletter-form">
                <input
                  type="email"
                  className="footer-newsletter-input"
                  placeholder="Enter work email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  aria-label="Work email address"
                />
                <button type="submit" className="footer-newsletter-btn">
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar d-flex flex-wrap justify-content-between align-items-center pt-4 border-top">
          <p className="footer-copyright mb-0">
            © {new Date().getFullYear()} <strong>TRIO Corporation Pvt. Ltd.</strong> All Rights Reserved. Simplifying Tomorrow.
          </p>
          <div className="footer-bottom-badges d-flex align-items-center gap-3">
            <span className="footer-iso-badge">ISO 9001:2015 Healthcare IT Certified</span>
            <button
              type="button"
              className="footer-scroll-top-btn"
              onClick={scrollToTop}
              title="Return to top"
              aria-label="Return to top"
            >
              <i className="bi bi-arrow-up" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
