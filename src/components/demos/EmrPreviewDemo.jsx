import React, { useState } from 'react';
import { MOCK_PATIENTS } from '../../data/mockHospitalData';
import './interactive-demos.css';

const TABS = ['Clinical Overview', 'Vitals Flowsheet', 'Prescriptions', 'Lab Investigations', 'Clinical Notes Entry'];

export default function EmrPreviewDemo() {
  const patient = MOCK_PATIENTS[0]; // Aarav Sharma
  const [activeTab, setActiveTab] = useState('Clinical Overview');
  const [complaint, setComplaint] = useState('Recurrent central chest discomfort on exertion, radiating to left shoulder.');
  const [symptoms, setSymptoms] = useState('Shortness of breath (NYHA Class II), diaphoresis, palpitation.');
  const [diagnosis, setDiagnosis] = useState('I20.0 - Unstable Angina / Acute Coronary Syndrome (Post PCI)');
  const [rxNotes, setRxNotes] = useState('Tab. Atorvastatin 40mg HS, Tab. Clopidogrel 75mg OD, Tab. Metoprolol 25mg OD');
  const [docNotes, setDocNotes] = useState('Patient hemodynamically stable. Stent site clear. Advised low-salt cardiac diet.');
  const [formFeedback, setFormFeedback] = useState('');

  const handleSaveDraft = (e) => {
    e.preventDefault();
    setFormFeedback('Draft saved locally in simulated EMR session at ' + new Date().toLocaleTimeString());
    setTimeout(() => setFormFeedback(''), 4500);
  };

  const handleComplete = (e) => {
    e.preventDefault();
    setFormFeedback('Consultation encounter completed and signed with simulated digital verification token.');
    setTimeout(() => setFormFeedback(''), 4500);
  };

  return (
    <div className="emr-demo-shell" aria-label="Electronic Medical Record Preview Demo">
      <div className="interactive-demo-badge-row">
        <span className="demo-live-indicator">
          <span className="demo-pulse-dot"></span>
          Product Preview / Interactive Demo
        </span>
        <span className="demo-subtitle">Simulated patient chart demonstrates TRIO HIMS unified clinical records</span>
      </div>

      {/* Patient Banner */}
      <div className="emr-patient-banner">
        <div className="emr-patient-avatar">
          <i className="bi bi-person-fill"></i>
        </div>
        <div className="emr-patient-main">
          <div className="d-flex flex-wrap align-items-center gap-2 mb-1">
            <h4 className="emr-patient-name mb-0">{patient.name}</h4>
            <span className="badge bg-primary font-monospace">{patient.uhid}</span>
            <span className="badge bg-secondary">{patient.age} Y / {patient.gender}</span>
            <span className="badge bg-info-subtle text-info">{patient.ward}</span>
          </div>
          <div className="emr-patient-meta text-muted fs-7">
            <span>Primary Consultant: <strong>{patient.doctor}</strong></span> ·
            <span>Admission: <strong>{patient.admissionDate}</strong></span> ·
            <span>Phone: <strong>{patient.phone}</strong></span>
          </div>
        </div>
        <div className="emr-allergies-box">
          <span className="allergy-label"><i className="bi bi-exclamation-triangle-fill me-1"></i> Allergies:</span>
          {patient.allergies.map((all) => (
            <span className="badge bg-danger text-white me-1" key={all}>{all}</span>
          ))}
        </div>
      </div>

      {/* EMR Sub-Navigation Tabs */}
      <div className="emr-tabs-bar" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`emr-tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
            role="tab"
            aria-selected={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="emr-tab-content">
        {/* TAB 1: CLINICAL OVERVIEW */}
        {activeTab === 'Clinical Overview' && (
          <div className="emr-panel">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="emr-card">
                  <h6>Current Primary Diagnosis</h6>
                  <p className="fs-7 text-dark fw-bold mb-2">{diagnosis}</p>
                  <p className="fs-7 text-muted">Coronary angiography showed 90% stenosis in mid LAD. Successfully treated with drug-eluting stent. Post-op recovery uneventful.</p>
                </div>

                <div className="emr-card mt-3">
                  <h6>Recorded Vital Signs (Today)</h6>
                  <div className="row g-2 text-center fs-7">
                    <div className="col-3 p-2 bg-light rounded"><span>BP</span><strong className="d-block text-primary">{patient.vitals.bp}</strong></div>
                    <div className="col-3 p-2 bg-light rounded"><span>Pulse</span><strong className="d-block text-success">{patient.vitals.pulse}</strong></div>
                    <div className="col-3 p-2 bg-light rounded"><span>SpO2</span><strong className="d-block text-info">{patient.vitals.spo2}</strong></div>
                    <div className="col-3 p-2 bg-light rounded"><span>Temp</span><strong className="d-block text-dark">{patient.vitals.temp}</strong></div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="emr-card">
                  <h6>Past Medical & Surgical History</h6>
                  <ul className="fs-7 text-muted mb-0">
                    <li>Hypertension diagnosed in 2021 on regular medication.</li>
                    <li>Dyslipidemia under lifestyle modification.</li>
                    <li>No past history of stroke, asthma, or renal dysfunction.</li>
                    <li>Family history of premature CAD in first-degree relatives.</li>
                  </ul>
                </div>

                <div className="emr-card mt-3">
                  <h6>Clinical Warnings & Alerts</h6>
                  <div className="alert alert-warning py-2 px-3 mb-0 fs-8">
                    <i className="bi bi-shield-exclamation me-1"></i> Patient is on dual antiplatelet therapy. Monitor bleeding time prior to invasive procedures.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VITALS FLOWSHEET */}
        {activeTab === 'Vitals Flowsheet' && (
          <div className="emr-panel">
            <h6>Inpatient Nursing Vitals Monitoring (Last 24 Hours)</h6>
            <div className="table-responsive">
              <table className="table table-sm role-data-table">
                <thead>
                  <tr>
                    <th>Timestamp</th>
                    <th>Blood Pressure</th>
                    <th>Pulse</th>
                    <th>SpO2</th>
                    <th>Temp</th>
                    <th>Respiration</th>
                    <th>Logged By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10:00 AM Today</td>
                    <td>128/82 mmHg</td>
                    <td>76 bpm</td>
                    <td>99%</td>
                    <td>98.4°F</td>
                    <td>16 /min</td>
                    <td>Staff Nurse Maya</td>
                  </tr>
                  <tr>
                    <td>06:00 AM Today</td>
                    <td>124/80 mmHg</td>
                    <td>72 bpm</td>
                    <td>98%</td>
                    <td>98.2°F</td>
                    <td>16 /min</td>
                    <td>Staff Nurse Maya</td>
                  </tr>
                  <tr>
                    <td>10:00 PM Yesterday</td>
                    <td>130/84 mmHg</td>
                    <td>78 bpm</td>
                    <td>98%</td>
                    <td>98.6°F</td>
                    <td>18 /min</td>
                    <td>Night Nurse Priya</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: PRESCRIPTIONS */}
        {activeTab === 'Prescriptions' && (
          <div className="emr-panel">
            <h6>Active Electronic Prescriptions (E-Rx)</h6>
            <div className="table-responsive">
              <table className="table table-sm role-data-table">
                <thead>
                  <tr>
                    <th>Medication Name</th>
                    <th>Dosage & Route</th>
                    <th>Frequency</th>
                    <th>Duration</th>
                    <th>Instructions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Tab. Atorvastatin 40mg</strong></td>
                    <td>40 mg (Oral)</td>
                    <td>Once Daily (HS)</td>
                    <td>30 Days</td>
                    <td>Take after dinner with water</td>
                  </tr>
                  <tr>
                    <td><strong>Tab. Clopidogrel 75mg</strong></td>
                    <td>75 mg (Oral)</td>
                    <td>Once Daily (OD)</td>
                    <td>60 Days</td>
                    <td>Take after breakfast</td>
                  </tr>
                  <tr>
                    <td><strong>Tab. Metoprolol Succinate 25mg</strong></td>
                    <td>25 mg (Oral)</td>
                    <td>Once Daily (Morning)</td>
                    <td>30 Days</td>
                    <td>Monitor pulse daily</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: LAB REPORTS */}
        {activeTab === 'Lab Investigations' && (
          <div className="emr-panel">
            <h6>Laboratory & Diagnostic Results</h6>
            <div className="table-responsive">
              <table className="table table-sm role-data-table">
                <thead>
                  <tr>
                    <th>Test Name</th>
                    <th>Sample ID</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Observed Value</th>
                    <th>Reference Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cardiac Troponin-I (High Sensitivity)</td>
                    <td>SMP-26-8812</td>
                    <td>Biochemistry</td>
                    <td><span className="badge bg-success-subtle text-success">Report Verified</span></td>
                    <td><strong>0.012 ng/mL</strong></td>
                    <td>&lt; 0.014 ng/mL</td>
                  </tr>
                  <tr>
                    <td>Hemoglobin (Hb)</td>
                    <td>SMP-26-8812</td>
                    <td>Hematology</td>
                    <td><span className="badge bg-success-subtle text-success">Report Verified</span></td>
                    <td><strong>14.2 g/dL</strong></td>
                    <td>13.0 - 17.0 g/dL</td>
                  </tr>
                  <tr>
                    <td>Serum Creatinine</td>
                    <td>SMP-26-8813</td>
                    <td>Biochemistry</td>
                    <td><span className="badge bg-success-subtle text-success">Report Verified</span></td>
                    <td><strong>0.9 mg/dL</strong></td>
                    <td>0.7 - 1.3 mg/dL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: CLINICAL NOTES ENTRY FORM */}
        {activeTab === 'Clinical Notes Entry' && (
          <div className="emr-panel">
            <h6>Doctor Clinical Consultation Note Form</h6>
            {formFeedback && (
              <div className="alert alert-success py-2 px-3 fs-7 mb-3">
                <i className="bi bi-check-circle-fill me-2"></i> {formFeedback}
              </div>
            )}
            <form>
              <div className="row g-2 fs-7">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Chief Complaints</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={complaint}
                    onChange={(e) => setComplaint(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Associated Symptoms</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-bold">Diagnosis (ICD-10)</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={diagnosis}
                    onChange={(e) => setDiagnosis(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-bold">Prescription Orders</label>
                  <textarea
                    className="form-control form-control-sm"
                    rows="2"
                    value={rxNotes}
                    onChange={(e) => setRxNotes(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-12">
                  <label className="form-label fw-bold">Doctor Advice & Follow-Up Notes</label>
                  <textarea
                    className="form-control form-control-sm"
                    rows="2"
                    value={docNotes}
                    onChange={(e) => setDocNotes(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-12 d-flex justify-content-end gap-2 mt-3">
                  <button type="button" className="btn btn-outline-secondary btn-sm" onClick={handleSaveDraft}>
                    Save Draft
                  </button>
                  <button type="button" className="btn btn-primary btn-sm" onClick={handleComplete}>
                    Complete Preview & Sign
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
