import React, { useState } from "react";
import confetti from "canvas-confetti";
import { submitDemoRequest } from "../lib/submitDemoRequest";

const PERKS = [
  { icon: "bi-lightning-charge-fill", label: "30-Min Live Walkthrough", desc: "Tailored to your hospital workflow" },
  { icon: "bi-shield-check",          label: "NABH-Ready Compliance",   desc: "Standardized clinical documentation" },
  { icon: "bi-headset",               label: "24x7 Onboarding Support", desc: "Dedicated implementation engineer" },
  { icon: "bi-patch-check-fill",      label: "Zero Hidden Charges",     desc: "Transparent per-bed/cloud pricing" },
];

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "Complete Hospital Suite (All 18 Modules)",
    bedCount: "Medium Hospital (26-50 Beds)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");

    try {
      await submitDemoRequest({
        subject: "TRIO HIMS Demo Appointment Request",
        formData,
        honeyPot: company
      });
      setSubmitted(true);
      try { confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } }); } catch (_) {}
    } catch (err) {
      setError("We could not send this demo request. Please try again or email golandeabhay45@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      department: "Complete Hospital Suite (All 18 Modules)",
      bedCount: "Medium Hospital (26-50 Beds)",
      message: ""
    });
  };

  return (
    <section id="appointment" className="book-demo-section">
      <div className="container">

        {/* Clean Header: No Eyebrow, No Subheading, Same Exact Google Title */}
        <div className="google-modules-header text-center">
          <h2 className="section-title-google">
            Book A <span className="text-gradient-gemini">Free Demo</span>
          </h2>
        </div>

        {/* Single-Page Executive Demo Console Card */}
        <div className="demo-stage-card">
          <div className="demo-stage-grid">

            {/* Left Column: Quick Value Briefing */}
            <div className="demo-brief-panel">
              <div className="demo-brief-inner">
                <div className="demo-brief-badge">
                  <i className="bi bi-person-video3 me-2" />Personalized Session
                </div>
                <h3 className="demo-brief-heading">
                  Experience TRIO HIMS in Real-Time
                </h3>
                <p className="demo-brief-lead">
                  Watch our senior clinical specialists demonstrate how TRIO eliminates paper bottlenecks and unifies all 18 modules.
                </p>

                <div className="demo-perks-list">
                  {PERKS.map((p) => (
                    <div key={p.label} className="demo-perk-card">
                      <div className="demo-perk-icon">
                        <i className={`bi ${p.icon}`} />
                      </div>
                      <div className="demo-perk-info">
                        <div className="demo-perk-title">{p.label}</div>
                        <div className="demo-perk-desc">{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="demo-assurance-pill">
                  <i className="bi bi-shield-check text-success me-1" />
                  <span>NDA Protected · 100% Free Consultation · No Commitment</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Precision Compact Form */}
            <div className="demo-form-panel">
              {submitted ? (
                <div className="demo-success-box">
                  <div className="demo-success-circle">
                    <i className="bi bi-check-lg" />
                  </div>
                  <h3 className="demo-success-title">Appointment Confirmed</h3>
                  <p className="demo-success-text">
                    Thank you, <strong>{formData.name}</strong>. Our hospital solutions team has scheduled your demo request and will reach you at <strong>{formData.phone}</strong>.
                  </p>
                  <button className="demo-reset-btn" onClick={resetForm}>
                    <i className="bi bi-arrow-counterclockwise me-2" />
                    Book Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="demo-modern-form">
                  <div className="demo-honeypot" aria-hidden="true">
                    <label htmlFor="appointment-company">Company</label>
                    <input
                      id="appointment-company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  <div className="demo-form-row">
                    <div className="demo-input-group">
                      <label className="demo-form-label">Full Name *</label>
                      <input
                        className="demo-form-control"
                        type="text"
                        placeholder="Dr. / Mr. Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="demo-input-group">
                      <label className="demo-form-label">Phone Number *</label>
                      <input
                        className="demo-form-control"
                        type="tel"
                        placeholder="10-digit mobile"
                        pattern="[0-9]{10}"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="demo-form-row">
                    <div className="demo-input-group">
                      <label className="demo-form-label">Email Address *</label>
                      <input
                        className="demo-form-control"
                        type="email"
                        placeholder="doctor@hospital.org"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="demo-input-group">
                      <label className="demo-form-label">Preferred Date</label>
                      <input
                        className="demo-form-control"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="demo-form-row">
                    <div className="demo-input-group">
                      <label className="demo-form-label">Module Interest</label>
                      <select
                        className="demo-form-control demo-select"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      >
                        <option>Complete Hospital Suite (All 18 Modules)</option>
                        <option>OPD &amp; Electronic Health Records (EHR)</option>
                        <option>IPD &amp; Nursing Station Care Desk</option>
                        <option>Laboratory (LIMS) &amp; Machine Interfacing</option>
                        <option>Radiology Information System (RIS &amp; PACS)</option>
                        <option>Billing Cash Counter &amp; Tally Sync</option>
                      </select>
                    </div>
                    <div className="demo-input-group">
                      <label className="demo-form-label">Bed Capacity</label>
                      <select
                        className="demo-form-control demo-select"
                        value={formData.bedCount}
                        onChange={(e) => setFormData({ ...formData, bedCount: e.target.value })}
                      >
                        <option>Clinic / Daycare (1-10 Beds)</option>
                        <option>Small Hospital (11-25 Beds)</option>
                        <option>Medium Hospital (26-50 Beds)</option>
                        <option>Large Hospital (51-100 Beds)</option>
                        <option>Multi-Speciality (100+ Beds)</option>
                      </select>
                    </div>
                  </div>

                  <div className="demo-input-group mb-3">
                    <label className="demo-form-label">Specific Needs / Questions</label>
                    <input
                      className="demo-form-control"
                      type="text"
                      placeholder="e.g. NABH audit in 3 months, migrating from legacy desktop app..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {error ? <p className="demo-form-error" role="alert">{error}</p> : null}

                  <button type="submit" className="demo-submit-btn-obsidian" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" />
                        Scheduling Demo...
                      </>
                    ) : (
                      <>
                        <span>Confirm Demo Appointment</span>
                        <i className="bi bi-calendar2-check ms-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}