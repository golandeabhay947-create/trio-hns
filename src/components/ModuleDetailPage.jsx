import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { modulesData } from '../data/modulesData';

export default function ModuleDetailPage({ onOpenModal, forceModuleId }) {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const capabilitiesRef = useRef(null);
  const targetId = forceModuleId ? forceModuleId : Number(moduleId);
  const activeIndex = modulesData.findIndex((module) => module.id === targetId);
  const module = activeIndex >= 0 ? modulesData[activeIndex] : null;
  const prevModule = module
    ? modulesData[(activeIndex - 1 + modulesData.length) % modulesData.length]
    : null;
  const nextModule = module
    ? modulesData[(activeIndex + 1) % modulesData.length]
    : null;

  useEffect(() => {
    document.title = module
      ? `${module.shortTitle} | TRIO HIMS`
      : 'Module not found | TRIO HIMS';
    return () => {
      document.title = 'TRIO HIMS | Hospital Information Management System';
    };
  }, [module]);

  const scrollToCapabilities = () => {
    capabilitiesRef.current?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  };

  if (!module) {
    return (
      <section className="module-detail-page">
        <div className="container module-detail-shell">
          <Link to="/hospital-modules" className="btn btn-google-outline module-detail-back-btn">
            <i className="bi bi-arrow-left me-2" aria-hidden="true"></i>
            Back to Hospital Modules
          </Link>
          <div className="module-detail-hero">
            <h1 className="module-detail-title">Module not found</h1>
            <p>The requested hospital module is not part of the current TRIO HIMS catalogue.</p>
          </div>
        </div>
      </section>
    );
  }

  const highlightPoints = module.features.slice(0, 3);

  return (
    <section className="module-detail-page">
      <div className="container module-detail-shell">
        <div className="module-detail-topbar">
          <Link to="/hospital-modules" className="btn btn-google-outline module-detail-back-btn">
            <i className="bi bi-arrow-left me-2" aria-hidden="true"></i>
            Back to Hospital Modules
          </Link>

          <Link to="/" className="module-detail-brand-center" aria-label="TRIO HIMS Home">
            <img src="/assets/img/trio-logo.png" alt="TRIO HIMS" className="module-detail-brand-logo" />
          </Link>

          <div className="module-detail-nav-buttons">
            <button
              type="button"
              className="btn btn-google-nav-btn"
              onClick={() => navigate(`/modules/${prevModule.id}`)}
            >
              <i className="bi bi-chevron-left me-1" aria-hidden="true"></i>
              Prev
            </button>
            <button
              type="button"
              className="btn btn-google-nav-btn"
              onClick={() => navigate(`/modules/${nextModule.id}`)}
            >
              Next
              <i className="bi bi-chevron-right ms-1" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <div className="module-detail-hero">
          <div className="module-detail-hero-badge">
            Module {String(module.id).padStart(2, '0')} of {String(modulesData.length).padStart(2, '0')}
          </div>

          <div className="module-detail-header-row">
            <div className="module-detail-icon-badge" aria-hidden="true">
              {module.iconImage ? (
                <img className="module-detail-image" src={module.iconImage} alt={module.shortTitle} />
              ) : module.image ? (
                <img className="module-detail-image" src={module.image} alt="" />
              ) : (
                <i className={`bx ${module.icon}`}></i>
              )}
            </div>

            <div className="module-detail-header-copy">
              <div className="module-detail-meta-row">
                <span className="google-modal-cat-badge">{module.category}</span>
                <span className="google-modal-idx-pill">{module.subtitle}</span>
                {module.badge && <span className="badge-abha-new ms-1">{module.badge}</span>}
              </div>
              <h1 className="module-detail-title">{module.title}</h1>
            </div>
          </div>

          <div className="module-detail-actions-row">
            <button type="button" className="btn-module-know-more" onClick={scrollToCapabilities}>
              Know More
            </button>
            <button type="button" className="btn-book-demo" onClick={onOpenModal}>
              <i className="bi bi-calendar-check me-2" aria-hidden="true"></i>
              Book Demo
            </button>
          </div>
        </div>

        <div className="module-detail-grid">
          <article className="module-detail-card module-detail-summary">
            <h2>Overview</h2>
            <p>{module.description}</p>
          </article>

          <article className="module-detail-card">
            <h2>Key capabilities</h2>
            <div className="module-detail-points">
              {highlightPoints.map((point) => (
                <div key={point} className="module-point-item">
                  <i className="bi bi-check-circle-fill google-check-icon" aria-hidden="true"></i>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article
          ref={capabilitiesRef}
          id="module-capabilities"
          className="module-detail-card module-detail-feature-card"
        >
          <h2>Core capabilities & workflows</h2>
          <div className="module-feature-list">
            {module.features.map((feature, index) => (
              <div key={`${module.id}-${index}`} className="module-detail-feature-item">
                <i className="bi bi-check-circle-fill google-check-icon" aria-hidden="true"></i>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </article>

        <div className="module-detail-footer-actions">
          <Link to="/hospital-modules" className="btn btn-google-outline">
            <i className="bi bi-grid me-2" aria-hidden="true"></i>
            Back to Hospital Modules
          </Link>
          <button type="button" className="btn-book-demo" onClick={onOpenModal}>
            <i className="bi bi-calendar2-check me-2" aria-hidden="true"></i>
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
}
