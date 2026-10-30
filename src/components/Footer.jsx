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
      <div className="container">
        
        <div className="row g-4 mb-5">
          
          {/* Company Bio */}
          <div className="col-lg-4 col-md-6">
            <img 
              src="/assets/img/trio-logo.png" 
              alt="TRIO Corporation Pvt. Ltd." 
              className="trio-header-logo mb-3"
            />
            <p className="text-secondary fs-7 leading-relaxed pe-lg-4">
              TRIO HIMS is a reliable hospital management system engineered to automate healthcare operations with clinical precision and zero revenue leakage.
            </p>
            <div className="d-flex gap-2 mt-4">
              <a href="https://twitter.com/CorporationTrio" target="_blank" rel="noreferrer" className="footer-icon-circle" title="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.facebook.com/trioindia" target="_blank" rel="noreferrer" className="footer-icon-circle" title="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/triocorporationitservices/" target="_blank" rel="noreferrer" className="footer-icon-circle" title="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/trio-corporation-pvt-ltd-/" target="_blank" rel="noreferrer" className="footer-icon-circle" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/@triocorporation2512" target="_blank" rel="noreferrer" className="footer-icon-circle" title="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6>Navigation</h6>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/why-choose-trio">Why Us</Link></li>
              <li><Link to="/hospital-modules">Hospital Modules</Link></li>
              <li><Link to="/trusted-by">Trusted By</Link></li>
              <li><Link to="/key-features">Key Features</Link></li>
              <li><Link to="/workflows">Workflows</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Core Modules */}
          <div className="col-lg-3 col-md-6 col-6">
            <h6>Core Modules</h6>
            <ul>
              <li><Link to="/modules/1">RADT (Patient Intake)</Link></li>
              <li><Link to="/modules/2">Billing Cash Counter</Link></li>
              <li><Link to="/modules/5">EMR & Doctor Desk</Link></li>
              <li><Link to="/modules/6">LIS Pathology & Analyzers</Link></li>
              <li><Link to="/modules/4">RIS Radiology & PACS</Link></li>
              <li><Link to="/modules/15">OT & Surgery Management</Link></li>
            </ul>
          </div>

          {/* Demo Call to Action */}
          <div className="col-lg-3 col-md-6">
            <h6 className="text-primary fw-bold fs-7">Product Demo</h6>
            <p className="text-secondary fs-7 mb-3">
              Request a free tailored consultation for your hospital's specific specialty needs.
            </p>
            <button 
              type="button" 
              className="btn-google-pill w-100 justify-content-center mb-3"
              onClick={onOpenModal}
            >
              <span>Schedule Live Demo</span>
            </button>

            {subscribed ? (
              <span className="text-success fs-8"><i className="bi bi-check-circle me-1"></i> Subscribed!</span>
            ) : (
              <form onSubmit={handleSubscribe} className="d-flex gap-2">
                <input
                  type="email"
                  className="material-input py-1 px-3 fs-8"
                  placeholder="Enter work email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-sm btn-outline-primary rounded-pill px-3 fs-8">
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="d-flex flex-wrap justify-content-between align-items-center pt-4 border-top border-light fs-8 text-secondary">
          <p className="mb-0">
            © {new Date().getFullYear()} <strong>TRIO Corporation Pvt. Ltd.</strong> All Rights Reserved. Built with React & Vite.
          </p>
          <div className="d-flex align-items-center gap-3">
            <span>ISO 9001:2015 Healthcare IT Certified</span>
            <button
              type="button"
              className="footer-icon-circle cursor-pointer"
              onClick={scrollToTop}
              title="Return to top"
            >
              <i className="bi bi-arrow-up"></i>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
