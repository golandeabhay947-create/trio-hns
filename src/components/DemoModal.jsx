import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { submitDemoRequest } from '../lib/submitDemoRequest';

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [botTrap, setBotTrap] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError('');

    try {
      await submitDemoRequest({
        subject: `TRIO HIMS Live Demo Request: ${formData.company || formData.name}`,
        formData: {
          Company: formData.company || 'Not provided',
          'Your Name': formData.name,
          'Your Email': formData.email,
          'Your Phone': formData.phone,
          'Hospital Notes / Requirements': formData.notes || 'None provided'
        },
        honeyPot: botTrap
      });
      setSubmitted(true);
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.5 }
        });
      } catch (err) {}
    } catch (err) {
      setError('We could not send this demo request. Please try again or reach us at info@triocorporation.in / +91 9021 023 456.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setError('');
    setLoading(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose} role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
      <div className="modal-dialog-box demo-modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Brand Header with New TRIO HIMS Logo */}
        <div className="demo-modal-brand-strip">
          <div className="demo-modal-logo-wrap">
            <img
              src="/assets/img/trio-logo.png"
              alt="TRIO HIMS"
              className="demo-modal-brand-logo"
            />
          </div>
          <button 
            type="button" 
            className="modal-close-btn"
            onClick={handleClose}
            title="Close dialog"
            aria-label="Close dialog"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="demo-modal-header-text text-center">
          <h3 id="demo-modal-title" className="demo-modal-title">Request a Live Demo</h3>
          <p className="demo-modal-subtitle">
            See TRIO HIMS in action with a tailored hospital walkthrough
          </p>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="modal-body-google">
            <div className="text-center py-4 px-2">
              <div className="modal-success-icon-wrap mb-3" aria-hidden="true">
                <i className="bi bi-check-lg"></i>
              </div>
              <h4 className="fs-5 fw-bold text-main mb-2">Demo Request Received!</h4>
              <p className="text-secondary fs-7 mb-3 px-2">
                Thank you, <strong>{formData.name}</strong>. Our hospital solutions specialist will contact you at <strong>{formData.phone}</strong> shortly to confirm your live walkthrough of TRIO HIMS.
              </p>
              <div className="modal-submitted-details mb-4">
                {formData.company && (
                  <span className="demo-chip me-2 mb-1">
                    <i className="bi bi-hospital me-1"></i> {formData.company}
                  </span>
                )}
                <span className="demo-chip mb-1">
                  <i className="bi bi-envelope me-1"></i> {formData.email}
                </span>
              </div>
              <button
                type="button"
                className="btn-modal-submit mx-auto"
                onClick={handleClose}
              >
                <i className="bi bi-check2"></i>
                <span>Done</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form-layout" noValidate={false}>
            <div className="modal-body-google">
              {/* Invisible spam protection bot trap */}
              <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <label htmlFor="demo-bot-trap">Leave this blank</label>
                <input
                  id="demo-bot-trap"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={botTrap}
                  onChange={(e) => setBotTrap(e.target.value)}
                />
              </div>

              {/* Trust Sub-banner */}
              <div className="demo-trust-pill-banner mb-3">
                <span className="demo-trust-item">
                  <i className="bi bi-shield-lock-fill text-primary me-1"></i> 100% Confidential
                </span>
                <span className="demo-trust-divider">•</span>
                <span className="demo-trust-item">
                  <i className="bi bi-clock-history text-primary me-1"></i> 20-Min Guided Walkthrough
                </span>
                <span className="demo-trust-divider">•</span>
                <span className="demo-trust-item">
                  <i className="bi bi-patch-check-fill text-primary me-1"></i> Custom Hospital Fit
                </span>
              </div>

              <div className="row g-2">
                {/* 1. Company */}
                <div className="col-12">
                  <div className="google-field-group">
                    <label className="google-field-label" htmlFor="demo-field-company">
                      Company
                    </label>
                    <div className="google-input-box">
                      <i className="bi bi-building google-input-icon"></i>
                      <input
                        id="demo-field-company"
                        type="text"
                        className="google-text-input"
                        placeholder="Hospital / Healthcare Clinic Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        autoFocus
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Your Name* */}
                <div className="col-sm-6 col-12">
                  <div className="google-field-group">
                    <label className="google-field-label" htmlFor="demo-field-name">
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <div className="google-input-box">
                      <i className="bi bi-person google-input-icon"></i>
                      <input
                        id="demo-field-name"
                        type="text"
                        className="google-text-input"
                        placeholder="Dr. / Mr. / Ms. Full Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Your Email* */}
                <div className="col-sm-6 col-12">
                  <div className="google-field-group">
                    <label className="google-field-label" htmlFor="demo-field-email">
                      Your Email <span className="text-danger">*</span>
                    </label>
                    <div className="google-input-box">
                      <i className="bi bi-envelope google-input-icon"></i>
                      <input
                        id="demo-field-email"
                        type="email"
                        className="google-text-input"
                        placeholder="doctor@hospital.org"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Your Phone* */}
                <div className="col-12">
                  <div className="google-field-group">
                    <label className="google-field-label" htmlFor="demo-field-phone">
                      Your Phone <span className="text-danger">*</span>
                    </label>
                    <div className="google-input-box">
                      <i className="bi bi-telephone google-input-icon"></i>
                      <input
                        id="demo-field-phone"
                        type="tel"
                        className="google-text-input"
                        placeholder="10-digit mobile number (e.g. 98765 43210)"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Hospital Notes / Requirements (Textarea) */}
                <div className="col-12">
                  <div className="google-field-group">
                    <label className="google-field-label" htmlFor="demo-field-notes">
                      Hospital Notes / Requirements
                    </label>
                    <div className="google-input-box">
                      <i className="bi bi-file-earmark-medical google-input-icon" style={{ top: '12px' }}></i>
                      <textarea
                        id="demo-field-notes"
                        className="google-text-input google-textarea-input"
                        rows={3}
                        placeholder="Bed capacity, key modules needed (OPD, IPD, LIS, Pharmacy), or specific workflows..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {error ? <p className="demo-form-error mt-2" role="alert">{error}</p> : null}
            </div>

            {/* Actions Footer */}
            <div className="modal-footer-google">
              <button
                type="button"
                className="btn-modal-cancel"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-modal-submit"
                disabled={loading}
              >
                <span className="btn-shimmer-sweep"></span>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <i className="bi bi-arrow-right"></i>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
