import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { workflowsData } from '../data/workflowsData';

export default function Workflows({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState(workflowsData[0]?.id || 'out-patient');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeIndex = workflowsData.findIndex((w) => w.id === activeTab);
  const activeWorkflow = workflowsData[activeIndex] || workflowsData[0];

  // Close lightbox on Escape key
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    if (window.__lenis) window.__lenis.stop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (window.__lenis) window.__lenis.start();
    };
  }, [isLightboxOpen]);

  return (
    <section id="workflows" className="workflows-showcase-section py-4">
      <div className="container">
        {/* Two-Column Interactive Layout matching Reference Image */}
        <div className="row g-4 align-items-stretch">
          {/* Left Column: Interactive Vertical Tab Menu */}
          <div className="col-lg-4 col-md-5">
            <div
              className="workflow-tab-menu-card"
              role="tablist"
              aria-label="HIMS Workflow Categories"
            >
              {workflowsData.map((workflow, idx) => {
                const isActive = activeTab === workflow.id;
                const indexNumber = String(idx + 1).padStart(2, '0');

                return (
                  <button
                    key={workflow.id}
                    type="button"
                    role="tab"
                    id={`workflow-tab-${workflow.id}`}
                    aria-selected={isActive}
                    aria-controls={`workflow-panel-${workflow.id}`}
                    tabIndex={0}
                    className={`workflow-menu-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveTab(workflow.id)}
                  >
                    {/* Active Accent Bar */}
                    <div className="workflow-item-indicator" aria-hidden="true" />

                    {/* Squircle Icon Box */}
                    <div className="workflow-item-icon-box" aria-hidden="true">
                      <i className={`bx ${workflow.icon || 'bx-layer'}`} />
                    </div>

                    {/* Title and Subtitle */}
                    <div className="workflow-item-content">
                      <div className="workflow-item-title">{workflow.title}</div>
                      <div className="workflow-item-subtitle">{workflow.subtitle}</div>
                    </div>

                    {/* Right-aligned Number and Arrow */}
                    <div className="workflow-item-tail" aria-hidden="true">
                      <span className="workflow-item-num">{indexNumber}</span>
                      <i className="bi bi-chevron-right workflow-item-chevron" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Workflow Image Display Container */}
          <div className="col-lg-8 col-md-7">
            <div
              className="workflow-display-card"
              role="tabpanel"
              id={`workflow-panel-${activeWorkflow.id}`}
              aria-labelledby={`workflow-tab-${activeWorkflow.id}`}
            >
              <div
                className="workflow-image-container"
                onClick={() => setIsLightboxOpen(true)}
                title="Click to zoom workflow diagram"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setIsLightboxOpen(true);
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeWorkflow.id}
                    className="workflow-motion-frame"
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img
                      src={activeWorkflow.image}
                      alt={`${activeWorkflow.title} Workflow Architecture Diagram`}
                      className="workflow-diagram-image"
                      loading="eager"
                      onError={(e) => {
                        // Fallback to root placeholder if needed
                        e.target.src = `/workflow/${activeWorkflow.id}.png`;
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Subtle Hover Zoom Pill */}
                <div className="workflow-zoom-hint" aria-hidden="true">
                  <i className="bi bi-arrows-angle-expand me-1" />
                  <span>Click to Expand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Diagram Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="workflow-lightbox-backdrop"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeWorkflow.title} Architecture Diagram`}
        >
          <div className="workflow-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <div className="workflow-lightbox-header">
              <div>
                <h3 className="workflow-lightbox-title">{activeWorkflow.title} Architecture Blueprint</h3>
                <p className="workflow-lightbox-sub">{activeWorkflow.subtitle}</p>
              </div>
              <button
                type="button"
                className="google-modal-close-btn"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close Diagram"
              >
                <i className="bi bi-x-lg" />
              </button>
            </div>

            <div className="workflow-lightbox-body">
              <img
                src={activeWorkflow.image}
                alt={`${activeWorkflow.title} Full Architecture`}
                className="workflow-lightbox-full-img"
              />
            </div>

            <div className="workflow-lightbox-footer">
              <span className="lightbox-flow-info">
                <strong>Flow 0{activeIndex + 1}:</strong> {activeWorkflow.title}
              </span>
              {onOpenModal && (
                <button
                  type="button"
                  className="btn-book-demo"
                  onClick={() => {
                    setIsLightboxOpen(false);
                    onOpenModal();
                  }}
                >
                  <span>Book Live Demonstration</span>
                  <i className="bi bi-arrow-right ms-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
