import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { submitDemoRequest as defaultSubmit } from '../lib/submitDemoRequest';
import {
  TRIO_BUSINESS_EMAIL,
  TRIO_MAILTO,
  TRIO_PHONE_DISPLAY,
  TRIO_PHONE_TEL,
  TRIO_WHATSAPP_URL
} from '../data/contactDetails';

const INQUIRY_SUBJECTS = [
  'Complete Hospital Suite (All 18 Modules)',
  'OPD & Patient Registration',
  'IPD, Ward & Bed Management',
  'Radiology (RIS & PACS Modality Sync)',
  'Laboratory (LIS & Machine Interfacing)',
  'Pharmacy & Central Drug Store',
  'ABHA / ABDM Health Record Integration',
  'Hospital Accounting & 2-Way Tally ERP',
  'Custom Enterprise Architecture / Migration'
];

export default function Contact({ onSubmitRequest }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Complete Hospital Suite (All 18 Modules)',
    hospital: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setSubmitError('');

    const submitFn = onSubmitRequest || defaultSubmit;

    try {
      await submitFn({
        subject: `Direct Inquiry from ${formData.name} - ${formData.hospital || 'Hospital'} [${formData.subject}]`,
        formData: {
          'Full Name': formData.name,
          'Official Email': formData.email,
          'Phone Number': formData.phone,
          'Inquiry Subject': formData.subject,
          'Hospital or Clinic Name': formData.hospital || 'Not Specified',
          'Requirements or Specific Notes': formData.notes
        }
      });
      setSubmitted(true);
      try {
        confetti({ particleCount: 80, spread: 75, origin: { y: 0.6 } });
      } catch (_) {}
    } catch (err) {
      setSubmitError(
        'We could not send your message right now. Please call +91 9021 023 456 or email info@triocorporation.in directly.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitError('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Complete Hospital Suite (All 18 Modules)',
      hospital: '',
      notes: ''
    });
  };

  return (
    <section id="contact" className="trio-contact-section py-4">
      <div className="container">
        {/* Recreated Two-Column Contact / Inquiry Card matching image_9923fd.png */}
        <div className="trio-contact-card-container">
          <div className="row g-0">
            {/* Left Column: Hospital Technology Division Info Panel */}
            <div className="col-lg-5 trio-contact-left-col">
              <div className="trio-contact-left-inner">
                <div>
                  <div className="trio-contact-heading mb-4">
                    <h3 className="trio-contact-title">Hospital Technology Division</h3>
                    <p className="trio-contact-subtitle">
                      Connect directly with our healthcare solution architects, clinical workflow consultants, and enterprise deployment leads.
                    </p>
                  </div>

                  {/* 3 Stacked White Contact Detail Cards */}
                  <div className="trio-contact-cards-stack">
                    {/* 1. Corporate Headquarters */}
                    <div className="trio-contact-card">
                      <div className="trio-contact-icon-squircle">
                        <i className="bi bi-geo-alt-fill"></i>
                      </div>
                      <div className="trio-contact-card-body">
                        <span className="trio-contact-card-tag">CORPORATE HEADQUARTERS</span>
                        <p className="trio-contact-card-main">
                          Dhruta Complex, Office 104 &amp; 105, Narayan Peth, Pune, Maharashtra - 411030
                        </p>
                        <a
                          href="https://maps.google.com/?q=Dhruta+Complex,+Narayan+Peth,+Pune"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="trio-contact-map-link"
                        >
                          Open Location Map ↗
                        </a>
                      </div>
                    </div>

                    {/* 2. Direct Hospital Helpline */}
                    <div className="trio-contact-card">
                      <div className="trio-contact-icon-squircle">
                        <i className="bi bi-telephone-fill"></i>
                      </div>
                      <div className="trio-contact-card-body">
                        <span className="trio-contact-card-tag">DIRECT HOSPITAL HELPLINE</span>
                        <a href={TRIO_PHONE_TEL} className="trio-contact-card-main text-decoration-none d-block">
                          {TRIO_PHONE_DISPLAY}
                        </a>
                        <span className="trio-contact-card-sub">
                          24x7 Emergency Line • Mon - Sat 9:00 AM - 8:00 PM IST
                        </span>
                      </div>
                    </div>

                    {/* 3. Electronic Mail & RFPs */}
                    <div className="trio-contact-card">
                      <div className="trio-contact-icon-squircle">
                        <i className="bi bi-envelope-fill"></i>
                      </div>
                      <div className="trio-contact-card-body">
                        <span className="trio-contact-card-tag">ELECTRONIC MAIL &amp; RFPS</span>
                        <a href={TRIO_MAILTO} className="trio-contact-card-main text-decoration-none d-block">
                          {TRIO_BUSINESS_EMAIL}
                        </a>
                        <span className="trio-contact-card-sub">
                          Verified reply SLA: Under 2 business hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CRITICAL UPDATE: Replace text badges with actual certification logos in horizontal flex row */}
                <div className="trio-contact-certs-row">
                  <div className="trio-contact-cert-pill" title="NABH Accredited - Standardized Clinical Documentation">
                    <img
                      src="/assets/images/certifications/nabh-logo.png"
                      alt="NABH Ready"
                      className="trio-cert-logo-img"
                    />
                  </div>
                  <div className="trio-contact-cert-pill" title="ISO 27001 Certified - AES-256 Data Protection & Security">
                    <img
                      src="/assets/images/certifications/iso-27001-logo.png"
                      alt="ISO 27001 Certified"
                      className="trio-cert-logo-img"
                    />
                  </div>
                  <div className="trio-contact-cert-pill" title="ABHA / ABDM M1-M3 - Ayushman Bharat Digital Mission Compliant">
                    <img
                      src="/assets/images/certifications/abha-logo.png"
                      alt="ABHA / ABDM M1-M3"
                      className="trio-cert-logo-img"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Send a Direct Message Form */}
            <div className="col-lg-7 trio-contact-right-col">
              <div className="trio-contact-right-inner">
                <div className="trio-contact-heading mb-4">
                  <h3 className="trio-contact-title">Send a Direct Message</h3>
                  <p className="trio-contact-subtitle">
                    Request custom module demos, price quotes, or discuss on-premises/cloud migration.
                  </p>
                </div>

                {submitted ? (
                  <div className="trio-contact-success text-center py-5 px-3">
                    <div className="trio-success-badge mb-3 mx-auto">
                      <i className="bi bi-check-lg"></i>
                    </div>
                    <h4 className="fw-bold text-main mb-2">Message Delivered!</h4>
                    <p className="text-secondary fs-7 mb-4">
                      Thank you, <strong>{formData.name}</strong>. Our healthcare solutions desk has received your request regarding <strong>{formData.subject}</strong> and will connect with you within 2 business hours.
                    </p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                      <button
                        type="button"
                        className="btn btn-outline-secondary rounded-pill px-4"
                        onClick={handleReset}
                      >
                        Send Another Message
                      </button>
                      <a
                        href={TRIO_WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success rounded-pill px-4 d-inline-flex align-items-center gap-2"
                      >
                        <i className="bi bi-whatsapp"></i> Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="trio-direct-msg-form">
                    {submitError && (
                      <div className="alert alert-danger py-2 px-3 fs-8 mb-3" role="alert">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        {submitError}
                      </div>
                    )}

                    <div className="row g-3">
                      {/* Row 1: Full Name & Official Email */}
                      <div className="col-md-6">
                        <label className="trio-field-label">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <div className="trio-field-wrap">
                          <i className="bi bi-person trio-field-icon"></i>
                          <input
                            type="text"
                            className="trio-field-input"
                            placeholder="Dr. / Mr. Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="trio-field-label">
                          Official Email <span className="text-danger">*</span>
                        </label>
                        <div className="trio-field-wrap">
                          <i className="bi bi-envelope trio-field-icon"></i>
                          <input
                            type="email"
                            className="trio-field-input"
                            placeholder="director@hospital.org"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Row 2: Phone Number & Inquiry Subject */}
                      <div className="col-md-6">
                        <label className="trio-field-label">
                          Phone Number <span className="text-danger">*</span>
                        </label>
                        <div className="trio-field-wrap">
                          <i className="bi bi-telephone trio-field-icon"></i>
                          <input
                            type="tel"
                            className="trio-field-input"
                            placeholder="+91 98765 43210"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="trio-field-label">
                          Inquiry Subject <span className="text-danger">*</span>
                        </label>
                        <div className="trio-field-wrap">
                          <i className="bi bi-grid-3x3-gap trio-field-icon"></i>
                          <select
                            className="trio-field-input trio-field-select"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            required
                          >
                            {INQUIRY_SUBJECTS.map((subj) => (
                              <option key={subj} value={subj}>
                                {subj}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Row 3: Hospital or Clinic Name */}
                      <div className="col-12">
                        <label className="trio-field-label">
                          Hospital or Clinic Name
                        </label>
                        <div className="trio-field-wrap">
                          <i className="bi bi-hospital trio-field-icon"></i>
                          <input
                            type="text"
                            className="trio-field-input"
                            placeholder="e.g. Apollo Multi-Speciality Hospital, Pune"
                            value={formData.hospital}
                            onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Row 4: Requirements or Specific Notes */}
                      <div className="col-12">
                        <label className="trio-field-label">
                          Requirements or Specific Notes <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="trio-field-textarea"
                          rows="4"
                          required
                          placeholder="Briefly describe your hospital bed capacity, existing software, or implementation timeline..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        ></textarea>
                      </div>

                      {/* Form Footer: Confidentiality & Submit Button */}
                      <div className="col-12 mt-4 pt-1">
                        <div className="trio-contact-footer d-flex align-items-center justify-content-between flex-wrap gap-3">
                          <div className="trio-confidentiality-badge d-flex align-items-center gap-2">
                            <i className="bi bi-shield-check"></i>
                            <span>Clinical data confidentiality guaranteed</span>
                          </div>
                          <button
                            type="submit"
                            className="trio-contact-submit-btn"
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span>Sending Message...</span>
                              </>
                            ) : (
                              <>
                                <span>Send Message</span>
                                <i className="bi bi-arrow-right"></i>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
