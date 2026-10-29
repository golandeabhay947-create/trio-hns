import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { modulesData } from '../data/modulesData';

export default function Modules({ onOpenModal }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const previewRef = useRef(null);

  useEffect(() => {
    if (!selectedModule) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && previewRef.current?.open) {
        event.preventDefault();
        previewRef.current.close();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.__lenis?.stop();
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (!document.querySelector('.modal-overlay')) {
        window.__lenis?.start();
      }
    };
  }, [selectedModule]);

  useEffect(() => {
    const preview = previewRef.current;
    if (selectedModule && preview && !preview.open) preview.showModal();
  }, [selectedModule]);

  const closePreview = () => previewRef.current?.close();

  return (
    <section id="modules" className="google-modules-section">
      <div className="container">
        <div className="google-modules-header text-center">
          <h2 className="section-title-google">
            Hospital <span className="text-gradient-gemini">Modules</span>
          </h2>
        </div>

        <div className="google-modules-grid">
          {modulesData.map((module) => (
            <article key={module.id} className="google-module-tile-wrap">
              <button
                type="button"
                className="google-module-tile"
                onClick={() => setSelectedModule(module)}
                aria-haspopup="dialog"
                aria-label={`Preview ${module.shortTitle}`}
              >
                <div className="google-tile-visual">
                  <i className={`bx ${module.icon}`} aria-hidden="true"></i>
                  <div className="google-tile-index" aria-hidden="true">
                    <span className="tile-idx-num">{String(module.id).padStart(2, '0')}</span>
                  </div>
                </div>

                <div className="google-tile-content">
                  <h3 className="google-tile-title">{module.shortTitle}</h3>
                  <p className="google-tile-subtitle">{module.description}</p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      <dialog
        ref={previewRef}
        className="module-preview-dialog"
        aria-labelledby="module-preview-title"
        onCancel={(event) => {
          event.preventDefault();
          closePreview();
        }}
        onClose={() => setSelectedModule(null)}
        onClick={(event) => {
          if (event.target === previewRef.current) closePreview();
        }}
      >
        {selectedModule && (
          <div className="module-preview-content">
            <button
              type="button"
              className="module-preview-close"
              onClick={closePreview}
              aria-label="Close module preview"
              autoFocus
            >
              <i className="bi bi-x-lg" aria-hidden="true"></i>
            </button>
            <div className="module-preview-visual" aria-hidden="true">
              <i className={`bx ${selectedModule.icon}`}></i>
            </div>
            <span className="google-modal-cat-badge">{selectedModule.category}</span>
            <h2 id="module-preview-title" className="module-preview-title">
              {selectedModule.title}
            </h2>
            <p className="module-preview-description">{selectedModule.description}</p>
            <ul className="module-preview-features">
              {selectedModule.features.slice(0, 3).map((feature) => (
                <li key={feature}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="module-preview-actions">
              <button type="button" className="btn-book-demo" onClick={() => {
                closePreview();
                onOpenModal();
              }}>
                Book Demo
              </button>
              <Link
                to={`/modules/${selectedModule.id}`}
                className="btn-module-know-more"
                onClick={closePreview}
              >
                Know More
              </Link>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
