import React, { useState } from 'react';
import './interactive-demos.css';

export default function PatientPortalDemo() {
  const [activePortalTab, setActivePortalTab] = useState('Appointments');

  return (
    <div className="portal-demo-shell" aria-label="Patient Self-Service Portal Preview">
      <div className="interactive-demo-badge-row">
        <span className="demo-live-indicator">
          <span className="demo-pulse-dot"></span>
          Product Preview / Interactive Demo
        </span>
        <span className="demo-subtitle">Simulated patient-facing mobile/web self-service healthcare portal</span>
      </div>

      {/* Patient Welcome Header */}
      <div className="portal-welcome-card">
        <div className="portal-user-badge">
          <i className="bi bi-person-circle"></i>
        </div>
        <div className="portal-welcome-text">
          <span className="fs-8 text-uppercase tracking-wider text-muted">Patient Portal · UHID: TR-2026-08421</span>
          <h4 className="mb-0">Welcome back, Aarav Sharma</h4>
          <span className="fs-7 text-muted">Your next follow-up appointment is in <strong>4 days</strong> with Dr. Satish K.</span>
        </div>
      </div>

      {/* Portal Tabs */}
      <div className="emr-tabs-bar mt-3" role="tablist">
        {['Appointments', 'Prescriptions', 'Diagnostic Reports', 'Invoices & Receipts'].map((tab) => (
          <button
            key={tab}
            type="button"
            className={`emr-tab-btn ${activePortalTab === tab ? 'active' : ''}`}
            onClick={() => setActivePortalTab(tab)}
            role="tab"
            aria-selected={activePortalTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Portal Content Panels */}
      <div className="portal-tab-content">
        {activePortalTab === 'Appointments' && (
          <div className="portal-panel">
            <h6 className="mb-3">Scheduled & Past Appointments</h6>
            <div className="appointment-timeline-item active">
              <div className="appt-date-block">
                <span className="appt-month">NOV</span>
                <strong className="appt-day">03</strong>
              </div>
              <div className="appt-details">
                <span className="badge bg-primary mb-1">Upcoming Follow-Up</span>
                <h6>Dr. Satish K. · Cardiology OPD</h6>
                <span className="fs-8 text-muted">10:30 AM · Room 101, Main Hospital Wing</span>
              </div>
              <button type="button" className="btn btn-outline-primary btn-sm ms-auto">
                <i className="bi bi-calendar-check me-1"></i> Add to Calendar
              </button>
            </div>

            <div className="appointment-timeline-item past mt-2">
              <div className="appt-date-block">
                <span className="appt-month">OCT</span>
                <strong className="appt-day">28</strong>
              </div>
              <div className="appt-details">
                <span className="badge bg-secondary mb-1">Completed</span>
                <h6>Emergency Cardiology Consultation</h6>
                <span className="fs-8 text-muted">Encounter Summary & Discharge Notes Available</span>
              </div>
              <button type="button" className="btn btn-outline-secondary btn-sm ms-auto">
                <i className="bi bi-download me-1"></i> Summary
              </button>
            </div>
          </div>
        )}

        {activePortalTab === 'Prescriptions' && (
          <div className="portal-panel">
            <h6 className="mb-3">Active Digital Prescriptions</h6>
            <div className="portal-rx-card">
              <div className="d-flex justify-content-between">
                <strong>Tab. Atorvastatin 40mg</strong>
                <span className="badge bg-success-subtle text-success">Active</span>
              </div>
              <p className="fs-7 text-muted mb-1">1 tablet at bedtime (Take after meals)</p>
              <div className="fs-8 text-muted">Prescribed by Dr. Satish K. · Refill due in 18 days</div>
            </div>

            <div className="portal-rx-card mt-2">
              <div className="d-flex justify-content-between">
                <strong>Tab. Clopidogrel 75mg</strong>
                <span className="badge bg-success-subtle text-success">Active</span>
              </div>
              <p className="fs-7 text-muted mb-1">1 tablet in the morning after breakfast</p>
              <div className="fs-8 text-muted">Prescribed by Dr. Satish K. · Refill due in 45 days</div>
            </div>
          </div>
        )}

        {activePortalTab === 'Diagnostic Reports' && (
          <div className="portal-panel">
            <h6 className="mb-3">Signed Laboratory & Radiology Reports</h6>
            <div className="portal-report-row">
              <i className="bi bi-file-earmark-pdf-fill text-danger fs-4 me-3"></i>
              <div>
                <strong>High-Sensitivity Cardiac Troponin-I Report</strong>
                <div className="fs-8 text-muted">Verified on 28 Oct 2026 · Specimen: Serum Blood</div>
              </div>
              <button type="button" className="btn btn-sm btn-outline-primary ms-auto">
                <i className="bi bi-download me-1"></i> PDF
              </button>
            </div>

            <div className="portal-report-row mt-2">
              <i className="bi bi-file-earmark-pdf-fill text-danger fs-4 me-3"></i>
              <div>
                <strong>Complete Blood Count (CBC) with Platelet Indices</strong>
                <div className="fs-8 text-muted">Verified on 28 Oct 2026 · Specimen: Whole Blood</div>
              </div>
              <button type="button" className="btn btn-sm btn-outline-primary ms-auto">
                <i className="bi bi-download me-1"></i> PDF
              </button>
            </div>
          </div>
        )}

        {activePortalTab === 'Invoices & Receipts' && (
          <div className="portal-panel">
            <h6 className="mb-3">Payment Receipts & TPA Cashless Statements</h6>
            <div className="portal-report-row">
              <i className="bi bi-receipt text-success fs-4 me-3"></i>
              <div>
                <strong>Invoice #{`INV-TRIO-2026-10492`}</strong>
                <div className="fs-8 text-muted">Net Bill: ₹23,000 · Patient Co-Pay: ₹3,000 [Paid]</div>
              </div>
              <span className="badge bg-success-subtle text-success ms-auto me-2">Paid</span>
              <button type="button" className="btn btn-sm btn-outline-secondary">
                <i className="bi bi-download me-1"></i> Receipt
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
