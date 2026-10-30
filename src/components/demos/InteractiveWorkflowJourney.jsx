import React, { useState } from 'react';
import './interactive-demos.css';

const WORKFLOW_MODES = [
  {
    id: 'opd',
    label: 'Outpatient (OPD) Patient Journey',
    icon: 'bi-person-walking',
    description: 'Walkthrough of an ambulatory patient visit from entry registration to pharmacy checkout and follow-up.',
    steps: [
      {
        step: 1,
        title: 'Registration & UHID',
        dept: 'Front Desk / Kiosk',
        icon: 'bx-user-plus',
        summary: 'Demographic capture, photo identity, government health ID (ABHA) scan, and automated Unique Hospital ID issuance.',
        details: [
          'Instant QR scan & demographic auto-fill',
          'Automated UHID issuance & barcode wristband generation',
          'Token number allocation for doctor OPD queue'
        ]
      },
      {
        step: 2,
        title: 'Vitals & Triage',
        dept: 'OPD Nursing Station',
        icon: 'bx-heart',
        summary: 'Nursing triage recording blood pressure, pulse, SpO2, temperature, and primary patient complaints.',
        details: [
          'Pre-consultation vital signs recording in EMR',
          'High-risk patient flagging (Hypertension, Fever, Low SpO2)',
          'Immediate queue priority updates for the doctor desk'
        ]
      },
      {
        step: 3,
        title: 'Doctor Consultation',
        dept: 'Consultation Room',
        icon: 'bx-pulse',
        summary: 'Clinical examination, digital case notes recording, symptom analysis, and instant electronic investigation orders.',
        details: [
          'Specialty-specific clinical documentation templates',
          'Past medical history & allergy alerts',
          'One-click digital requisition to Laboratory and Radiology'
        ]
      },
      {
        step: 4,
        title: 'Diagnostics & Radiology',
        dept: 'Lab & Imaging Suite',
        icon: 'bx-scan',
        summary: 'Phlebotomy sample collection, sample barcode verification, radiology scan scheduling, and real-time result upload.',
        details: [
          'Barcoded sample tracking with bi-directional analyzer interface',
          'Direct PACS/DICOM image viewer integration',
          'Doctor notification upon report verification & digital signature'
        ]
      },
      {
        step: 5,
        title: 'Pharmacy Dispensing',
        dept: 'Hospital Pharmacy',
        icon: 'bx-capsule',
        summary: 'Digital prescription reception, batch-level stock allocation, dosage instruction labeling, and substitute checks.',
        details: [
          'Prescription auto-routed directly from the doctor desk',
          'Near-expiry & allergy cross-verification alerts',
          'Auto-decrementing stock inventory with itemized invoice tally'
        ]
      },
      {
        step: 6,
        title: 'Billing & Settlement',
        dept: 'Cash Counter / TPA Desk',
        icon: 'bx-receipt',
        summary: 'Consolidated multi-department billing, corporate / insurance cashless deductions, and instant digital receipts.',
        details: [
          'Unified single invoice covering consultation, labs, and medicine',
          'Multi-mode settlement: UPI, Credit Card, NetBanking, Cash',
          'Automated WhatsApp and SMS digital receipt delivery'
        ]
      },
      {
        step: 7,
        title: 'Follow-up & Advice',
        dept: 'Patient Care Team',
        icon: 'bx-calendar-check',
        summary: 'Automated follow-up scheduling, lifestyle precautions, medication schedule reminders, and tele-consultation booking.',
        details: [
          'Automated reminder SMS/WhatsApp 24 hours prior to follow-up',
          'Access to complete encounter summary via Patient Portal',
          'Post-visit satisfaction score capture for NABH quality logs'
        ]
      }
    ]
  },
  {
    id: 'ipd',
    label: 'Inpatient (IPD) Admission & Care Flow',
    icon: 'bi-hospital',
    description: 'End-to-end journey for inpatient care from admission desk and ward allocation through discharge clearance.',
    steps: [
      {
        step: 1,
        title: 'Admission Desk',
        dept: 'Admissions & Emergency',
        icon: 'bx-door-open',
        summary: 'Planned or emergency inpatient intake, initial deposit collection, consent capture, and consultant tagging.',
        details: [
          'Admission record creation linked to patient UHID',
          'Insurance cashless pre-authorization dispatch',
          'Attendant pass issuance and primary consultant tagging'
        ]
      },
      {
        step: 2,
        title: 'Bed & Ward Allocation',
        dept: 'Ward Management',
        icon: 'bx-bed',
        summary: 'Live visual bed occupancy map selection: ICU, General Ward, Deluxe Private Rooms, or Isolation Units.',
        details: [
          'Real-time bed availability status across hospital wings',
          'Specialty-based ward assignments (Surgical, Cardiac, Maternity)',
          'Automated room tariff billing commencement'
        ]
      },
      {
        step: 3,
        title: 'Inpatient Nursing Care',
        dept: 'Floor Nursing Desk',
        icon: 'bx-notepad',
        summary: 'Continuous vital monitoring, doctor rounding notes, medication administration schedules, and handover notes.',
        details: [
          'Timed medication administration schedule (MAR chart)',
          'Shift-by-shift nursing handover logs and vitals charts',
          'Emergency crash cart and diet requisition dispatch'
        ]
      },
      {
        step: 4,
        title: 'Investigation & Surgery',
        dept: 'OT & Diagnostics',
        icon: 'bx-cut',
        summary: 'Bedside diagnostic sampling, Operation Theatre scheduling, surgical notes recording, and implant tracking.',
        details: [
          'OT checklist and anesthesia pre-clearance notes',
          'Implant batch number & high-cost consumable logging',
          'Post-op recovery room telemetry monitoring'
        ]
      },
      {
        step: 5,
        title: 'Inpatient Billing Audit',
        dept: 'Finance & TPA Desk',
        icon: 'bx-calculator',
        summary: 'Daily running bill auditing, bed charges accumulation, interim deposit requests, and cashless TPA claim filing.',
        details: [
          'Running bill transparency for family members',
          'Real-time package vs non-package service categorization',
          'Final insurance claim authorization with digital documentation'
        ]
      },
      {
        step: 6,
        title: 'Discharge Summary',
        dept: 'Consultant & Floor Care',
        icon: 'bx-file',
        summary: 'Comprehensive clinical summary, course in hospital, surgical details, discharge medications, and emergency advice.',
        details: [
          'NABH-compliant discharge summary generation',
          'Bilingual discharge instructions for patient clarity',
          'Bed release notification triggering housekeeping sanitization'
        ]
      }
    ]
  }
];

export default function InteractiveWorkflowJourney() {
  const [activeMode, setActiveMode] = useState('opd');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const activeWorkflow = WORKFLOW_MODES.find((m) => m.id === activeMode) || WORKFLOW_MODES[0];
  const steps = activeWorkflow.steps;
  const currentStep = steps[currentStepIndex] || steps[0];

  const handleModeChange = (modeId) => {
    setActiveMode(modeId);
    setCurrentStepIndex(0);
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="interactive-workflow-shell" aria-label="Interactive Hospital Patient Workflow">
      {/* Demo Disclaimer Badge */}
      <div className="interactive-demo-badge-row">
        <span className="demo-live-indicator">
          <span className="demo-pulse-dot"></span>
          Product Preview / Interactive Demo
        </span>
        <span className="demo-subtitle">Simulated workflow demonstrates how TRIO HIMS carries data across departments</span>
      </div>

      {/* Mode Switcher Pills */}
      <div className="workflow-mode-tabs" role="tablist" aria-label="Workflow Types">
        {WORKFLOW_MODES.map((mode) => (
          <button
            key={mode.id}
            type="button"
            className={`workflow-mode-pill ${activeMode === mode.id ? 'active' : ''}`}
            onClick={() => handleModeChange(mode.id)}
            role="tab"
            aria-selected={activeMode === mode.id}
          >
            <i className={`bi ${mode.icon} me-2`} aria-hidden="true"></i>
            {mode.label}
          </button>
        ))}
      </div>

      <p className="workflow-mode-intro">{activeWorkflow.description}</p>

      {/* Visual Stepper Bar */}
      <div className="workflow-stepper-track" role="list" aria-label="Workflow Stages">
        {steps.map((item, idx) => {
          const isActive = idx === currentStepIndex;
          const isDone = idx < currentStepIndex;
          return (
            <button
              key={item.step}
              type="button"
              className={`workflow-step-node ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
              onClick={() => setCurrentStepIndex(idx)}
              aria-label={`Step ${item.step}: ${item.title}`}
              aria-current={isActive ? 'step' : undefined}
            >
              <div className="step-node-bubble">
                {isDone ? <i className="bi bi-check-lg"></i> : <span>{item.step}</span>}
              </div>
              <span className="step-node-label">{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detail Console */}
      <div className="workflow-stage-detail-console">
        <div className="stage-detail-header">
          <div className="stage-detail-title-group">
            <span className="stage-icon-squircle" aria-hidden="true">
              <i className={`bx ${currentStep.icon}`}></i>
            </span>
            <div>
              <div className="stage-eyebrow">
                <span>Stage 0{currentStep.step} of 0{steps.length}</span>
                <span className="stage-dept-badge">
                  <i className="bi bi-geo-alt-fill me-1" aria-hidden="true"></i>
                  {currentStep.dept}
                </span>
              </div>
              <h3 className="stage-main-title">{currentStep.title}</h3>
            </div>
          </div>

          <div className="stage-nav-buttons">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm stage-nav-btn"
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              aria-label="Previous Stage"
            >
              <i className="bi bi-chevron-left me-1"></i> Prev
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm stage-nav-btn stage-nav-next"
              onClick={handleNext}
              disabled={currentStepIndex === steps.length - 1}
              aria-label="Next Stage"
            >
              Next <i className="bi bi-chevron-right ms-1"></i>
            </button>
          </div>
        </div>

        <p className="stage-summary-text">{currentStep.summary}</p>

        <div className="stage-capabilities-grid">
          {currentStep.details.map((detail, dIdx) => (
            <div className="stage-capability-card" key={dIdx}>
              <i className="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
