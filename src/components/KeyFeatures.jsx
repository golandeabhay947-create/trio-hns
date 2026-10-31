import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { featuresData } from '../data/featuresData';

export default function KeyFeatures({ preview = false, onOpenModal } = {}) {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const modalRef = useRef(null);

  const displayedFeatures = preview ? featuresData.slice(0, 6) : featuresData;

  useEffect(() => {
    if (!selectedFeature) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedFeature(null);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.__lenis?.stop();
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      if (!document.querySelector('.modal-overlay') && !document.querySelector('dialog[open]')) {
        window.__lenis?.start();
      }
    };
  }, [selectedFeature]);

  return (
    <section
      id="key-features"
      className={preview ? 'key-features-section key-features-preview' : 'key-features-section'}
      aria-labelledby="key-features-title"
    >
      <div className="container">
        {!preview && (
          <div className="google-modules-header text-center mb-5">
            <h2 id="key-features-title" className="section-title-google">
              Platform <span className="text-gradient-gemini">Architectural Features</span>
            </h2>
            <p className="dedicated-page-intro text-muted">
              Explore the core architectural pillars powering seamless hospital automation across clinical desks, diagnostics, and financial operations.
            </p>
          </div>
        )}

        {/* Responsive Grid of Small, Visually Appealing Summary Cards */}
        <div className="row g-4 key-features-grid">
          {displayedFeatures.map((feature) => (
            <div key={feature.id} className="col-lg-4 col-md-6 col-12">
              <div
                className={`key-feature-card ${feature.badge ? 'feature-card-highlight' : ''}`}
                onClick={() => setSelectedFeature(feature)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedFeature(feature);
                  }
                }}
                aria-label={`View details for ${feature.title}`}
              >
                <div className="feature-card-topbar">
                  <div className="feature-card-icon-wrap">
                    <i className={`bi ${feature.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="feature-card-category-pill">{feature.category}</span>
                    {feature.badge && (
                      <span className="badge-superscript-new feature-badge-new">{feature.badge}</span>
                    )}
                  </div>
                </div>

                <div className="feature-card-body">
                  <h3 className="feature-card-title">{feature.title}</h3>
                  <p className="feature-card-summary">{feature.summary}</p>
                </div>

                <div className="feature-card-footer">
                  <button
                    type="button"
                    className="btn-view-details"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFeature(feature);
                    }}
                    aria-label={`View details for ${feature.title}`}
                  >
                    <span>View Details</span>
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* If preview mode on homepage, show link to full dedicated page */}
        {preview && (
          <div className="text-center mt-4">
            <Link to="/key-features" className="btn btn-google-pill">
              <span>View All 12 Key Features</span>
              <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
            </Link>
          </div>
        )}
      </div>

      {/* Feature In-Depth Detail Modal */}
      {selectedFeature && (
        <div
          className="feature-detail-modal-overlay"
          onClick={() => setSelectedFeature(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="feature-modal-title"
        >
          <div
            ref={modalRef}
            className="feature-detail-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="feature-modal-header">
              <div className="d-flex align-items-center gap-3">
                <div className="feature-modal-icon-badge">
                  <i className={`bi ${selectedFeature.icon}`} aria-hidden="true"></i>
                </div>
                <div>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="feature-card-category-pill">{selectedFeature.category}</span>
                    {selectedFeature.badge && (
                      <span className="badge-superscript-new">{selectedFeature.badge}</span>
                    )}
                  </div>
                  <h2 id="feature-modal-title" className="feature-modal-title">
                    {selectedFeature.title}
                  </h2>
                </div>
              </div>
              <button
                type="button"
                className="feature-modal-close-btn"
                onClick={() => setSelectedFeature(null)}
                aria-label="Close feature details"
              >
                <i className="bi bi-x-lg" aria-hidden="true"></i>
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="feature-modal-body">
              {/* Summary Block */}
              <div className="feature-modal-summary-box mb-4">
                <p className="feature-modal-summary-text">{selectedFeature.summary}</p>
              </div>

              {/* Capabilities List */}
              <div className="feature-modal-section mb-4">
                <h4 className="feature-modal-section-title">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Clinical &amp; Operational Capabilities
                </h4>
                <ul className="feature-modal-capabilities-list">
                  {selectedFeature.capabilities.map((item, idx) => (
                    <li key={idx} className="feature-capability-item">
                      <i className="bi bi-arrow-right-circle-fill" aria-hidden="true"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications */}
              {selectedFeature.techSpecs && (
                <div className="feature-modal-section mb-4">
                  <h4 className="feature-modal-section-title">
                    <i className="bi bi-gear-wide-connected text-primary me-2"></i>
                    Architectural &amp; Technical Specifications
                  </h4>
                  <div className="feature-modal-tech-grid">
                    {selectedFeature.techSpecs.map((spec, idx) => (
                      <div key={idx} className="feature-tech-pill">
                        <i className="bi bi-cpu me-2" aria-hidden="true"></i>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Compliance Badges */}
              {selectedFeature.compliance && (
                <div className="feature-modal-compliance-wrap">
                  <span className="compliance-label">Standards &amp; Certifications:</span>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {selectedFeature.compliance.map((comp, idx) => (
                      <span key={idx} className="badge-compliance-chip">
                        <i className="bi bi-patch-check-fill me-1 text-success"></i>
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="feature-modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary btn-modal-close"
                onClick={() => setSelectedFeature(null)}
              >
                Close
              </button>
              {onOpenModal && (
                <button
                  type="button"
                  className="btn-book-demo"
                  onClick={() => {
                    setSelectedFeature(null);
                    onOpenModal();
                  }}
                >
                  <i className="bi bi-calendar-check me-2" aria-hidden="true"></i>
                  Request a Live Demo
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
