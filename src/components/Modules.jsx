import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { modulesData } from '../data/modulesData';

export default function Modules({ onOpenModal }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const previewRef = useRef(null);
  const navigate = useNavigate();

  const categories = useMemo(() => {
    const list = Array.from(new Set(modulesData.map((m) => m.category)));
    return ['All', ...list];
  }, []);

  const filteredModules = useMemo(() => {
    return modulesData.filter((m) => {
      const matchCat = activeCategory === 'All' || m.category === activeCategory;
      const matchSearch =
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

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

  const handleTileClick = (module) => {
    // If the module is ABHA, navigate directly to /abha without opening the generic modal
    if (module.id === 19 || module.path === '/abha' || module.shortTitle.toLowerCase().includes('abha')) {
      navigate('/abha');
      return;
    }
    setSelectedModule(module);
  };

  return (
    <section id="modules" className="google-modules-section">
      <div className="container">
        <div className="google-modules-header text-center">
          <h2 className="section-title-google">
            Hospital <span className="text-gradient-gemini">Modules</span>
          </h2>
          <p className="modules-catalog-subtitle text-muted">
            Explore {modulesData.length} unified hospital information management modules engineered for seamless department interoperability.
          </p>
        </div>

        {/* Category Filters and Search Bar */}
        <div className="modules-directory-controls">
          <div className="modules-search-input-wrap">
            <i className="bi bi-search" aria-hidden="true"></i>
            <input
              type="text"
              className="modules-search-field"
              placeholder="Search modules by name, clinical area, or capability..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search hospital modules"
            />
            {searchQuery && (
              <button
                type="button"
                className="modules-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <i className="bi bi-x"></i>
              </button>
            )}
          </div>

          <div className="modules-category-pills" role="tablist" aria-label="Module categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`modules-cat-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
              >
                {cat}
                {cat === 'All' ? ` (${modulesData.length})` : ''}
              </button>
            ))}
          </div>

          <div className="modules-results-counter">
            Showing <strong>{filteredModules.length}</strong> of {modulesData.length} hospital modules
          </div>
        </div>

        {filteredModules.length === 0 ? (
          <div className="modules-empty-state text-center py-5">
            <i className="bi bi-search fs-1 text-muted d-block mb-3"></i>
            <h5>No hospital modules match your criteria</h5>
            <p className="text-muted">Try clearing your search query or selecting "All" categories.</p>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm mt-2"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="google-modules-grid">
            {filteredModules.map((module) => (
              <article key={module.id} className="google-module-tile-wrap">
                <button
                  type="button"
                  className={`google-module-tile ${module.id === 19 ? 'tile-highlight-abha' : ''}`}
                  onClick={() => handleTileClick(module)}
                  aria-haspopup={module.id === 19 ? 'false' : 'dialog'}
                  aria-label={`${module.id === 19 ? 'Explore' : 'Preview'} ${module.shortTitle}`}
                >
                  <div className="google-tile-visual">
                    {module.iconImage ? (
                      <div className="google-tile-img-container">
                        <img
                          src={module.iconImage}
                          alt={module.shortTitle}
                          className="google-tile-module-img"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="google-tile-icon-circle">
                        <i className={`bx ${module.icon}`} aria-hidden="true"></i>
                      </div>
                    )}
                    <div className="google-tile-index" aria-hidden="true">
                      <span className="tile-idx-num">{String(module.id).padStart(2, '0')}</span>
                      <i className="bi bi-arrow-up-right tile-idx-arrow" aria-hidden="true"></i>
                    </div>
                  </div>

                  <div className="google-tile-content">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <span className="module-grid-cat-pill">{module.category}</span>
                      {module.badge && <span className="badge-abha-new">{module.badge}</span>}
                    </div>
                    <h3 className="google-tile-title">{module.shortTitle}</h3>
                    <p className="google-tile-subtitle">{module.description}</p>
                    <div className="module-tile-action-link">
                      <span>{module.id === 19 ? 'Explore ABHA Suite' : 'Quick Preview'}</span>
                      <i className="bi bi-arrow-right ms-1"></i>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        )}
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
              {selectedModule.iconImage ? (
                <img
                  src={selectedModule.iconImage}
                  alt={selectedModule.shortTitle}
                  className="module-preview-img"
                />
              ) : (
                <i className={`bx ${selectedModule.icon}`}></i>
              )}
            </div>
            <span className="google-modal-cat-badge">{selectedModule.category}</span>
            <h2 id="module-preview-title" className="module-preview-title">
              {selectedModule.title}
            </h2>
            <p className="module-preview-description">{selectedModule.description}</p>
            <ul className="module-preview-features">
              {selectedModule.features.slice(0, 4).map((feature) => (
                <li key={feature}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="module-preview-actions">
              <button
                type="button"
                className="btn-book-demo"
                onClick={() => {
                  closePreview();
                  onOpenModal();
                }}
              >
                Book Demo
              </button>
              <Link
                to={selectedModule.id === 19 ? '/abha' : `/modules/${selectedModule.id}`}
                className="btn-module-know-more"
                onClick={closePreview}
              >
                {selectedModule.id === 19 ? 'Open Full ABHA Suite' : 'View Full Module Spec'}
              </Link>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
