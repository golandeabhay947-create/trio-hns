import React, { useState, useEffect, useRef } from 'react';
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
  const [errors, setErrors] = useState({});
  const companyInputRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Autofocus when modal opens
  useEffect(() => {
    if (isOpen && !submitted) {
      const timer = setTimeout(() => {
        companyInputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen, submitted]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your official email.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. doctor@hospital.org).';
    }

    const phoneClean = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your mobile or phone number.';
    } else if (phoneClean.length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8-10 digits).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      await submitDemoRequest({
        subject: `TRIO HIMS Live Demo Request: ${formData.company || formData.name}`,
        formData: {
          Company: formData.company || 'Not provided',
          'Your Name': formData.name.trim(),
          'Your Email': formData.email.trim(),
          'Your Phone': formData.phone.trim(),
          'Hospital Notes / Requirements': formData.notes.trim() || 'None provided'
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
    setErrors({});
    setLoading(false);
    onClose();
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div
        className="modal-dialog-box demo-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
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
            title="Close dialog (Esc)"
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
          <form onSubmit={handleSubmit} className="modal-form-layout" noValidate>
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
                      Hospital / Clinic / Company
                    </label>
                    <div className="google-input-box">
                      <i className="bi bi-building google-input-icon"></i>
                      <input
                        ref={companyInputRef}
                        id="demo-field-company"
                        type="text"
                        className="google-text-input"
                        placeholder="e.g. Apollo Multi-Speciality Hospital"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
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
                    <div className={`google-input-box ${errors.name ? 'has-error' : ''}`}>
                      <i className="bi bi-person google-input-icon"></i>
                      <input
                        id="demo-field-name"
                        type="text"
                        className={`google-text-input ${errors.name ? 'is-invalid-border' : ''}`}
                        placeholder="Dr. / Mr. / Ms. Full Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                    {errors.name && (
                      <span className="google-inline-field-error text-danger fs-8 mt-1 d-block">
                        <i className="bi bi-exclamation-circle me-1"></i>{errors.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* 3. Your Email* */}
                <div className="col-sm-6 col-12">
                  <div className="google-field-group">
                    <label className="google-field-label" htmlFor="demo-field-email">
                      Your Email <span className="text-danger">*</span>
                    </label>
                    <div className={`google-input-box ${errors.email ? 'has-error' : ''}`}>
                      <i className="bi bi-envelope google-input-icon"></i>
                      <input
                        id="demo-field-email"
                        type="email"
                        className={`google-text-input ${errors.email ? 'is-invalid-border' : ''}`}
                        placeholder="doctor@hospital.org"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                    {errors.email && (
                      <span className="google-inline-field-error text-danger fs-8 mt-1 d-block">
                        <i className="bi bi-exclamation-circle me-1"></i>{errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* 4. Your Phone* */}
                <div className="col-12">
                  <div className="google-field-group">
                    <label className="google-field-label" htmlFor="demo-field-phone">
                      Your Phone / Mobile <span className="text-danger">*</span>
                    </label>
                    <div className={`google-input-box ${errors.phone ? 'has-error' : ''}`}>
                      <i className="bi bi-telephone google-input-icon"></i>
                      <input
                        id="demo-field-phone"
                        type="tel"
                        className={`google-text-input ${errors.phone ? 'is-invalid-border' : ''}`}
                        placeholder="10-digit mobile number (e.g. 98765 43210)"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    {errors.phone && (
                      <span className="google-inline-field-error text-danger fs-8 mt-1 d-block">
                        <i className="bi bi-exclamation-circle me-1"></i>{errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* 5. Hospital Notes / Requirements (Textarea) */}
                <div className="col-12">
                  <div className="google-field-group">
                    <label className="google-field-label" htmlFor="demo-field-notes">
                      Hospital Notes / Specific Requirements
                    </label>
                    <div className="google-input-box">
                      <i className="bi bi-file-earmark-medical google-input-icon" style={{ top: '12px' }}></i>
                      <textarea
                        id="demo-field-notes"
                        className="google-text-input google-textarea-input"
                        rows={3}
                        placeholder="Bed capacity, key modules needed (OPD, IPD, LIS, Pharmacy), or specific workflows..."
                        value={formData.notes}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {error ? (
                <div className="alert alert-danger py-2 px-3 fs-8 mt-2 mb-0" role="alert">
                  <i className="bi bi-exclamation-triangle-fill me-1.5"></i>
                  {error}
                </div>
              ) : null}
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
