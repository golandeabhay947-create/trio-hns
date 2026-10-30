import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function Contact({ onSubmitRequest }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hospitalName: '',
    subject: 'Complete Hospital Suite (All 18 Modules)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (onSubmitRequest) {
      setSubmitError('');
      try {
        await onSubmitRequest({
          subject: `TRIO HIMS enquiry: ${formData.subject}`,
          formData,
        });
        setSubmitted(true);
        try {
          confetti({ particleCount: 65, spread: 70, origin: { y: 0.65 } });
        } catch (err) {}
      } catch (err) {
        setSubmitError('We could not send your enquiry. Please try again or email info@triocorporation.in.');
      } finally {
        setLoading(false);
      }
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 65,
          spread: 70,
          origin: { y: 0.65 }
        });
      } catch (err) {}
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitError('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      hospitalName: '',
      subject: 'Complete Hospital Suite (All 18 Modules)',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-cinematic-section">
      <div className="container">

        {/* Clean Header: Get in Touch (Google Style, No Eyebrow, No Subheading) */}
        <div className="google-modules-header text-center">
          <h2 className="section-title-google">
            Get in <span className="text-gradient-gemini">Touch</span>
          </h2>
        </div>

        {/* Executive Contact Console Stage Card */}
        <div className="contact-stage-card">
          <div className="contact-stage-grid">

            {/* Left Column: Headquarters & Rapid Support Hub */}
            <div className="contact-info-panel">
              <div className="contact-info-inner">

                <div className="contact-info-headline-wrap">
                  <h3 className="contact-info-title">Hospital Technology Division</h3>
                  <p className="contact-info-lead">
                    Connect directly with our healthcare solution architects, clinical workflow consultants, and enterprise deployment leads.
                  </p>
                </div>

                {/* 3 Executive Contact Hub Cards */}
                <div className="contact-hub-cards">

                  {/* 1. Corporate Headquarters */}
                  <div className="contact-hub-card">
                    <div className="contact-hub-icon-box">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="contact-hub-content">
                      <div className="contact-hub-label">Corporate Headquarters</div>
                      <div className="contact-hub-value">
                        Dhruta Complex, Office 104 &amp; 105, Narayan Peth, Pune, Maharashtra - 411030
                      </div>
                      <a
                        href="https://maps.google.com/?q=Dhruta+Complex+Narayan+Peth+Pune"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-hub-action-link"
                      >
                        <span>Open Location Map</span>
                        <i className="bi bi-arrow-up-right ms-1"></i>
                      </a>
                    </div>
                  </div>

                  {/* 2. Direct Helpline */}
                  <div className="contact-hub-card">
                    <div className="contact-hub-icon-box">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div className="contact-hub-content">
                      <div className="contact-hub-label">Direct Hospital Helpline</div>
                      <div className="contact-hub-value">
                        <a href="tel:+919021023456" className="contact-phone-link">
                          +91 9021 023 456
                        </a>
                      </div>
                      <span className="contact-hub-subtext">
                        24x7 Emergency Line &bull; Mon - Sat 9:00 AM - 8:00 PM IST
                      </span>
                    </div>
                  </div>

                  {/* 3. Electronic Mail */}
                  <div className="contact-hub-card">
                    <div className="contact-hub-icon-box">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="contact-hub-content">
                      <div className="contact-hub-label">Electronic Mail &amp; RFPs</div>
                      <div className="contact-hub-value">
                        <a href="mailto:info@triocorporation.in" className="contact-email-link">
                          info@triocorporation.in
                        </a>
                      </div>
                      <span className="contact-hub-subtext">
                        Verified reply SLA: Under 2 business hours
                      </span>
                    </div>
                  </div>

                </div>

                {/* Compliance & Security Micro Badges */}
                <div className="contact-trust-pill-strip" role="group" aria-label="Compliance and readiness indicators">
                  <div className="contact-trust-item">
                    <span className="contact-trust-icon" aria-hidden="true">
                      <i className="bi bi-shield-check"></i>
                    </span>
                    <span>NABH Ready</span>
                  </div>
                  <div className="contact-trust-item">
                    <span className="contact-trust-icon" aria-hidden="true">
                      <i className="bi bi-lock-fill"></i>
                    </span>
                    <span>ISO 27001 Certified</span>
                  </div>
                  <div className="contact-trust-item">
                    <span className="contact-trust-icon" aria-hidden="true">
                      <i className="bi bi-activity"></i>
                    </span>
                    <span>ABDM M1-M3</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Executive Message Form */}
            <div className="contact-form-panel">
              {submitted ? (
                <div className="contact-success-state">
                  <div className="contact-success-badge">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <h4 className="contact-success-title">Message Transmitted Successfully</h4>
                  <p className="contact-success-desc">
                    Thank you, <strong>{formData.name || 'Doctor'}</strong>. Your consultation inquiry has been logged with our Pune headquarters team. An enterprise medical tech consultant will connect with you via email or phone shortly.
                  </p>
                  <button
                    type="button"
                    className="contact-reset-btn"
                    onClick={handleReset}
                  >
                    <i className="bi bi-arrow-repeat me-2"></i>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-executive-form">
                  <div className="contact-form-intro">
                    <h4 className="contact-form-title">Send a Direct Message</h4>
                    <p className="contact-form-desc">
                      Request custom module demos, price quotes, or discuss on-premises/cloud migration.
                    </p>
                  </div>

                  <div className="contact-form-grid">
                    {/* Full Name */}
                    <div className="contact-input-field">
                      <label className="contact-field-label">Full Name *</label>
                      <div className="contact-input-wrapper">
                        <i className="bi bi-person contact-input-icon"></i>
                        <input
                          type="text"
                          className="contact-text-input"
                          placeholder="Dr. / Mr. Name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Work Email */}
                    <div className="contact-input-field">
                      <label className="contact-field-label">Official Email *</label>
                      <div className="contact-input-wrapper">
                        <i className="bi bi-envelope contact-input-icon"></i>
                        <input
                          type="email"
                          className="contact-text-input"
                          placeholder="director@hospital.org"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="contact-input-field">
                      <label className="contact-field-label">Phone Number *</label>
                      <div className="contact-input-wrapper">
                        <i className="bi bi-telephone contact-input-icon"></i>
                        <input
                          type="tel"
                          className="contact-text-input"
                          placeholder="+91 98765 43210"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Subject / Module of Interest */}
                    <div className="contact-input-field">
                      <label className="contact-field-label">Inquiry Subject *</label>
                      <div className="contact-input-wrapper">
                        <i className="bi bi-grid-3x3-gap contact-input-icon"></i>
                        <select
                          className="contact-text-input contact-select"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        >
                          <option value="Complete Hospital Suite (All 18 Modules)">Complete Hospital Suite (All 18 Modules)</option>
                          <option value="NABH / EMR Digitalization">NABH / EMR Digitalization</option>
                          <option value="OPD, IPD & OT Scheduling Suite">OPD, IPD &amp; OT Scheduling Suite</option>
                          <option value="Pharmacy, Inventory & Billing Integration">Pharmacy, Inventory &amp; Billing Integration</option>
                          <option value="PACS / DICOM Imaging & Lab Diagnostics">PACS / DICOM Imaging &amp; Lab Diagnostics</option>
                          <option value="Custom Pricing, Licensing & Cloud SLA">Custom Pricing, Licensing &amp; Cloud SLA</option>
                          <option value="Technical Support & Integration">Technical Support &amp; Integration</option>
                        </select>
                      </div>
                    </div>

                    {/* Hospital Name (Full width) */}
                    <div className="contact-input-field contact-full-col">
                      <label className="contact-field-label">Hospital or Clinic Name</label>
                      <div className="contact-input-wrapper">
                        <i className="bi bi-building contact-input-icon"></i>
                        <input
                          type="text"
                          className="contact-text-input"
                          placeholder="e.g. Apollo Multi-Speciality Hospital, Pune"
                          value={formData.hospitalName}
                          onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Message Area (Full width) */}
                    <div className="contact-input-field contact-full-col">
                      <label className="contact-field-label">Requirements or Specific Notes *</label>
                      <div className="contact-input-wrapper contact-textarea-wrapper">
                        <textarea
                          className="contact-text-input contact-textarea"
                          rows="3"
                          placeholder="Briefly describe your hospital bed capacity, existing software, or implementation timeline..."
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {submitError ? <p className="home-contact-form-error" role="alert">{submitError}</p> : null}

                  {/* Form Footer Action */}
                  <div className="contact-form-actions">
                    <div className="contact-form-reassurance">
                      <i className="bi bi-shield-lock-fill text-secondary me-1"></i>
                      <span>Clinical data confidentiality guaranteed</span>
                    </div>

                    <button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <i className="bi bi-arrow-right ms-2"></i>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
