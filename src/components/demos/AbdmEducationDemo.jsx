import React, { useState } from 'react';
import { MOCK_ABDM_STAGES } from '../../data/mockHospitalData';
import './interactive-demos.css';

export default function AbdmEducationDemo() {
  const [selectedMilestone, setSelectedMilestone] = useState('M1');
  const [simAadhaar, setSimAadhaar] = useState('XXXX-XXXX-9102');
  const [simGeneratedAbha, setSimGeneratedAbha] = useState('');
  const [simConsentStatus, setSimConsentStatus] = useState('Pending Request');

  const activeStage = MOCK_ABDM_STAGES.find((s) => s.step === selectedMilestone) || MOCK_ABDM_STAGES[0];

  const handleSimulateAbha = () => {
    setSimGeneratedAbha('91-8402-1940-2026');
  };

  const handleGrantConsent = () => {
    setSimConsentStatus('Consent Granted (Valid for 48 Hours)');
  };

  return (
    <div className="abdm-demo-shell" aria-label="ABHA / ABDM Educational Walkthrough">
      <div className="interactive-demo-badge-row">
        <span className="demo-live-indicator">
          <span className="demo-pulse-dot"></span>
          Educational Walkthrough / Conceptual Preview
        </span>
        <span className="demo-subtitle">Learn how Ayushman Bharat Digital Mission (ABDM) integration connects into TRIO HIMS</span>
      </div>

      <div className="abdm-intro-banner">
        <div className="abdm-emblem">
          <i className="bi bi-shield-lock-fill"></i>
        </div>
        <div>
          <h5 className="mb-1">Ayushman Bharat Digital Mission (ABDM) Ecosystem Overview</h5>
          <p className="fs-7 text-muted mb-0">
            TRIO HIMS is architected to align with India’s National Digital Health Mission standards across M1 (ABHA Creation), M2 (Health Information Provider - HIP), and M3 (Health Information User - HIU).
          </p>
        </div>
      </div>

      {/* Milestone Tabs */}
      <div className="abdm-milestone-tabs" role="tablist">
        {MOCK_ABDM_STAGES.map((stage) => (
          <button
            key={stage.step}
            type="button"
            className={`abdm-milestone-pill ${selectedMilestone === stage.step ? 'active' : ''}`}
            onClick={() => setSelectedMilestone(stage.step)}
            role="tab"
            aria-selected={selectedMilestone === stage.step}
          >
            <span className="milestone-badge-pill">{stage.step}</span>
            <span className="milestone-title-text">{stage.title}</span>
          </button>
        ))}
      </div>

      {/* Stage Detail Card */}
      <div className="abdm-stage-card">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge bg-primary-subtle text-primary fw-bold">{activeStage.badge}</span>
          <span className="fs-8 text-muted">ABDM Compliance Standard: FHIR R4</span>
        </div>
        <h4>{activeStage.title}</h4>
        <p className="text-secondary fs-7">{activeStage.description}</p>

        <div className="abdm-features-grid">
          {activeStage.features.map((feat, idx) => (
            <div className="abdm-feat-item" key={idx}>
              <i className="bi bi-patch-check-fill text-success me-2"></i>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Interactive Simulation Console for each Milestone */}
        <div className="abdm-simulation-box mt-3">
          <h6 className="fs-8 text-uppercase tracking-wider text-muted mb-2">Simulated Interactive Experience ({activeStage.step})</h6>
          
          {selectedMilestone === 'M1' && (
            <div className="sim-m1-box">
              <p className="fs-7 text-muted">Simulate Patient ABHA Verification at Reception Desk:</p>
              <div className="d-flex flex-wrap gap-2 align-items-center">
                <input
                  type="text"
                  className="form-control form-control-sm font-monospace"
                  style={{ maxWidth: '240px' }}
                  value={simAadhaar}
                  onChange={(e) => setSimAadhaar(e.target.value)}
                  placeholder="Enter Aadhaar Number"
                />
                <button type="button" className="btn btn-primary btn-sm" onClick={handleSimulateAbha}>
                  Verify OTP & Generate ABHA
                </button>
              </div>
              {simGeneratedAbha && (
                <div className="alert alert-success py-2 px-3 mt-2 fs-7 mb-0">
                  <i className="bi bi-qr-code me-2"></i>
                  Simulated 14-Digit ABHA Generated: <strong>{simGeneratedAbha}</strong> (@abdm)
                </div>
              )}
            </div>
          )}

          {selectedMilestone === 'M2' && (
            <div className="sim-m2-box fs-7 text-muted">
              <p className="mb-2">How TRIO HIMS acts as a Health Information Provider (HIP):</p>
              <div className="p-2 border rounded bg-light font-monospace fs-8">
                <div>[TRIO HIP Gateway] Event: Consultation Discharge Verified</div>
                <div>[FHIR Bundle Packager] Packaging Encounter, Condition, DiagnosticReport & MedicationRequest</div>
                <div>[Signature Service] Document digitally signed by Dr. Satish K.</div>
                <div className="text-success">[ABDM Bridge] Record linked successfully to ABHA #91-8402-1940-2026</div>
              </div>
            </div>
          )}

          {selectedMilestone === 'M3' && (
            <div className="sim-m3-box">
              <p className="fs-7 text-muted mb-2">Patient Digital Consent Management Simulation:</p>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <button type="button" className="btn btn-outline-primary btn-sm" onClick={handleGrantConsent}>
                  Simulate Patient OTP Consent Grant
                </button>
                <span className="badge bg-info-subtle text-info fs-7">{simConsentStatus}</span>
              </div>
              <p className="fs-8 text-muted mt-2 mb-0">
                In production, patients receive an instant push notification on their ABHA PHR app (such as Aarogya Setu or ABHA App) to approve or deny physician record access.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
