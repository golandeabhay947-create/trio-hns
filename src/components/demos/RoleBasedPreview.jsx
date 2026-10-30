import React, { useState } from 'react';
import {
  MOCK_PATIENTS,
  MOCK_DOCTORS,
  MOCK_BEDS,
  MOCK_INVOICE,
  MOCK_ANALYTICS
} from '../../data/mockHospitalData';
import './interactive-demos.css';

const ROLES = [
  { id: 'receptionist', label: 'Receptionist', icon: 'bi-person-badge', badge: 'Front Desk' },
  { id: 'doctor', label: 'Doctor', icon: 'bi-heart-pulse', badge: 'Consultant OPD' },
  { id: 'nurse', label: 'Nurse', icon: 'bi-clipboard2-pulse', badge: 'Floor Care' },
  { id: 'administrator', label: 'Hospital Administrator', icon: 'bi-building-gear', badge: 'Executive Console' },
  { id: 'billing', label: 'Billing Executive', icon: 'bi-credit-card-2-front', badge: 'Finance & TPA' }
];

export default function RoleBasedPreview() {
  const [activeRole, setActiveRole] = useState('receptionist');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPatients = MOCK_PATIENTS.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.uhid.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="role-preview-shell" aria-label="Explore TRIO HIMS by Role">
      {/* Demo Disclaimer */}
      <div className="interactive-demo-badge-row">
        <span className="demo-live-indicator">
          <span className="demo-pulse-dot"></span>
          Product Preview / Interactive Demo
        </span>
        <span className="demo-subtitle">Select a hospital persona to preview their customized workspace</span>
      </div>

      {/* Role Switcher Tabs */}
      <div className="role-tabs-bar" role="tablist" aria-label="Hospital Roles">
        {ROLES.map((role) => (
          <button
            key={role.id}
            type="button"
            className={`role-tab-btn ${activeRole === role.id ? 'active' : ''}`}
            onClick={() => setActiveRole(role.id)}
            role="tab"
            aria-selected={activeRole === role.id}
          >
            <i className={`bi ${role.icon} me-2`} aria-hidden="true"></i>
            <span className="role-tab-label">{role.label}</span>
            <span className="role-tab-tag">{role.badge}</span>
          </button>
        ))}
      </div>

      {/* Role Workspace Showcase */}
      <div className="role-workspace-card">
        {/* RECEPTIONIST PREVIEW */}
        {activeRole === 'receptionist' && (
          <div className="role-view receptionist-view">
            <div className="role-view-header">
              <div>
                <h4 className="role-view-title">Front Desk & Patient Intake Dashboard</h4>
                <p className="role-view-desc">Centralized patient registration, fast token allocation, queue status, and UHID search.</p>
              </div>
              <div className="role-stats-pills">
                <span className="role-stat-pill"><strong>18</strong> Registered Today</span>
                <span className="role-stat-pill text-warning"><strong>4</strong> Pending Queue</span>
              </div>
            </div>

            {/* Quick Search Bar */}
            <div className="role-search-box">
              <i className="bi bi-search" aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Search patient by name, UHID, or department (e.g., Sharma, TR-2026, Cardiology)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search patients"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="role-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <i className="bi bi-x"></i>
                </button>
              )}
            </div>

            {/* Registration Table */}
            <div className="table-responsive role-table-wrap">
              <table className="table role-data-table">
                <thead>
                  <tr>
                    <th>Token</th>
                    <th>UHID</th>
                    <th>Patient Name</th>
                    <th>Age / Gender</th>
                    <th>Department</th>
                    <th>Assigned Doctor</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatients.map((p) => (
                    <tr key={p.uhid}>
                      <td><span className="token-badge">{p.token}</span></td>
                      <td className="font-monospace text-muted">{p.uhid}</td>
                      <td><strong>{p.name}</strong></td>
                      <td>{p.age} Y / {p.gender}</td>
                      <td><span className="dept-tag">{p.department}</span></td>
                      <td>{p.doctor}</td>
                      <td>
                        <span className={`status-pill status-${p.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* DOCTOR PREVIEW */}
        {activeRole === 'doctor' && (
          <div className="role-view doctor-view">
            <div className="role-view-header">
              <div>
                <h4 className="role-view-title">Doctor Consultation Desk & E-Prescription</h4>
                <p className="role-view-desc">Manage today’s patient queue, inspect longitudinal clinical history, vitals, and issue instant digital prescriptions.</p>
              </div>
              <div className="role-stats-pills">
                <span className="role-stat-pill"><strong>Dr. Satish K.</strong> (Cardiology)</span>
                <span className="role-stat-pill text-success">Room 101</span>
              </div>
            </div>

            <div className="row g-3">
              {/* Left Column: Active Patient Consultation */}
              <div className="col-lg-7">
                <div className="doctor-active-patient-card">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="active-patient-label">Active Consultation · Token A-101</span>
                    <span className="badge bg-danger-subtle text-danger">High Priority</span>
                  </div>
                  <h5 className="patient-headline">Aarav Sharma · 42 Y, Male (UHID: TR-2026-08421)</h5>
                  <p className="patient-diagnosis-tag"><strong>Primary Diagnosis:</strong> Acute Coronary Syndrome - Post Angioplasty Day 2</p>

                  <div className="vitals-row">
                    <div className="vital-chip"><span>BP</span> <strong>128/82</strong></div>
                    <div className="vital-chip"><span>Pulse</span> <strong>76 bpm</strong></div>
                    <div className="vital-chip"><span>SpO2</span> <strong>99%</strong></div>
                    <div className="vital-chip"><span>Temp</span> <strong>98.4°F</strong></div>
                  </div>

                  <div className="doctor-rx-preview">
                    <h6>Active E-Prescriptions</h6>
                    <ul className="rx-list">
                      <li><strong>Tab. Atorvastatin 40mg</strong> - 1 tab at bedtime (30 Days)</li>
                      <li><strong>Tab. Clopidogrel 75mg</strong> - 1 tab after breakfast (60 Days)</li>
                      <li><strong>Tab. Metoprolol XL 25mg</strong> - 1 tab once daily in morning</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Pending Investigation Orders & Next Queue */}
              <div className="col-lg-5">
                <div className="doctor-side-panel">
                  <h6>Next In Line in Consultation Queue</h6>
                  <ul className="doc-queue-list">
                    {MOCK_PATIENTS.slice(1, 4).map((p) => (
                      <li key={p.uhid} className="doc-queue-item">
                        <span className="queue-token">{p.token}</span>
                        <div className="queue-meta">
                          <strong>{p.name}</strong>
                          <span>{p.department} · {p.diagnosis}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="investigations-box mt-3">
                    <h6>Pending Diagnostic Orders</h6>
                    <span className="badge bg-light text-dark me-1 mb-1">Serum Trop-I</span>
                    <span className="badge bg-light text-dark me-1 mb-1">12-Lead ECG</span>
                    <span className="badge bg-light text-dark me-1 mb-1">Lipid Panel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NURSE PREVIEW */}
        {activeRole === 'nurse' && (
          <div className="role-view nurse-view">
            <div className="role-view-header">
              <div>
                <h4 className="role-view-title">Inpatient Ward Nursing Station</h4>
                <p className="role-view-desc">Monitor floor admissions, vital signs flowsheets, shift handover notes, and timed medication schedules (MAR).</p>
              </div>
              <div className="role-stats-pills">
                <span className="role-stat-pill"><strong>Wing B - 2nd Floor</strong></span>
                <span className="role-stat-pill text-info"><strong>6</strong> Active Inpatients</span>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="nurse-task-card">
                  <h6>Assigned Patients & Vital Entry</h6>
                  <ul className="nurse-patient-list">
                    {MOCK_PATIENTS.slice(0, 3).map((p) => (
                      <li key={p.uhid} className="nurse-patient-item">
                        <div className="d-flex justify-content-between">
                          <strong>{p.name}</strong>
                          <span className="ward-badge">{p.ward}</span>
                        </div>
                        <div className="vitals-mini mt-1">
                          BP: {p.vitals.bp} | Pulse: {p.vitals.pulse} | SpO2: {p.vitals.spo2}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="nurse-task-card">
                  <h6>Hourly Medication Schedule (MAR)</h6>
                  <ul className="mar-list">
                    <li className="mar-item done">
                      <span className="mar-time">10:00 AM</span>
                      <div className="mar-details">
                        <strong>IV Ceftriaxone 1g</strong> · Bed 04 (Aarav S.)
                        <span className="text-success"><i className="bi bi-check-circle-fill me-1"></i> Administered</span>
                      </div>
                    </li>
                    <li className="mar-item pending">
                      <span className="mar-time">12:00 PM</span>
                      <div className="mar-details">
                        <strong>Inj. Pantoprazole 40mg IV</strong> · Room 204 (Rajendra D.)
                        <span className="text-warning"><i className="bi bi-clock me-1"></i> Due in 25 min</span>
                      </div>
                    </li>
                    <li className="mar-item pending">
                      <span className="mar-time">02:00 PM</span>
                      <div className="mar-details">
                        <strong>Tab. Paracetamol 650mg</strong> · Bed 12 (Priyanka P.)
                        <span className="text-muted"><i className="bi bi-clock me-1"></i> Scheduled</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ADMINISTRATOR PREVIEW */}
        {activeRole === 'administrator' && (
          <div className="role-view admin-view">
            <div className="role-view-header">
              <div>
                <h4 className="role-view-title">Executive Hospital Administration Console</h4>
                <p className="role-view-desc">High-level hospital KPI surveillance, departmental performance, live bed occupancy, and revenue leak prevention.</p>
              </div>
              <div className="role-stats-pills">
                <span className="role-stat-pill">Live Operations</span>
                <span className="role-stat-pill text-success">Hospital Network: 99.98%</span>
              </div>
            </div>

            <div className="admin-kpi-grid">
              {MOCK_ANALYTICS.kpis.slice(0, 4).map((kpi) => (
                <div className="admin-kpi-card" key={kpi.title}>
                  <div className="admin-kpi-top">
                    <span className="admin-kpi-title">{kpi.title}</span>
                    <i className={`bi ${kpi.icon}`} style={{ color: kpi.accent }} aria-hidden="true"></i>
                  </div>
                  <div className="admin-kpi-val">{kpi.value}</div>
                  <div className="admin-kpi-foot">
                    <span className="text-success fw-bold">{kpi.change}</span>
                    <span className="text-muted ms-1">{kpi.period}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="admin-department-bars mt-4">
              <h6>Department-wise Inpatient Share</h6>
              <div className="dept-bars-list">
                {MOCK_ANALYTICS.departmentShare.map((dept) => (
                  <div className="dept-bar-item" key={dept.name}>
                    <div className="d-flex justify-content-between mb-1">
                      <span>{dept.name} ({dept.patients} pts)</span>
                      <strong>{dept.share}%</strong>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: `${dept.share}%` }}
                        aria-valuenow={dept.share}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* BILLING EXECUTIVE PREVIEW */}
        {activeRole === 'billing' && (
          <div className="role-view billing-view">
            <div className="role-view-header">
              <div>
                <h4 className="role-view-title">Billing Cash Counter & TPA Insurance Management</h4>
                <p className="role-view-desc">Itemized patient invoicing, cashless insurance pre-auth tracking, co-pay settlements, and zero revenue leakage checks.</p>
              </div>
              <div className="role-stats-pills">
                <span className="role-stat-pill">Invoice: <strong>{MOCK_INVOICE.invoiceNumber}</strong></span>
                <span className="role-stat-pill text-success">Cashless Approved</span>
              </div>
            </div>

            <div className="sample-invoice-card">
              <div className="invoice-header-row">
                <div>
                  <h6 className="mb-0">Patient: {MOCK_INVOICE.patientName} ({MOCK_INVOICE.ageGender})</h6>
                  <span className="text-muted fs-7">UHID: {MOCK_INVOICE.uhid} · Ward: {MOCK_INVOICE.roomBed}</span>
                </div>
                <div className="text-end">
                  <span className="badge bg-success-subtle text-success">{MOCK_INVOICE.paymentStatus}</span>
                  <div className="text-muted fs-7 mt-1">{MOCK_INVOICE.tpaProvider}</div>
                </div>
              </div>

              <div className="table-responsive mt-3">
                <table className="table table-sm invoice-items-table">
                  <thead>
                    <tr>
                      <th>Service / Investigation Description</th>
                      <th>Department</th>
                      <th className="text-end">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_INVOICE.items.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.desc}</td>
                        <td><span className="badge bg-light text-dark">{item.category}</span></td>
                        <td className="text-end font-monospace">₹{item.amount.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan="2" className="text-end">Subtotal:</th>
                      <th className="text-end font-monospace">₹{MOCK_INVOICE.subtotal.toLocaleString()}</th>
                    </tr>
                    <tr>
                      <th colSpan="2" className="text-end text-success">Institutional Subsidy / Discount:</th>
                      <th className="text-end text-success font-monospace">-₹{MOCK_INVOICE.discount.toLocaleString()}</th>
                    </tr>
                    <tr className="table-active">
                      <th colSpan="2" className="text-end">Net Payable Amount:</th>
                      <th className="text-end text-primary font-monospace fs-6">₹{MOCK_INVOICE.netTotal.toLocaleString()}</th>
                    </tr>
                    <tr>
                      <th colSpan="2" className="text-end text-info">TPA Insurance Pre-Auth Coverage:</th>
                      <th className="text-end text-info font-monospace">₹{MOCK_INVOICE.tpaApprovedAmount.toLocaleString()}</th>
                    </tr>
                    <tr>
                      <th colSpan="2" className="text-end fw-bold">Patient Co-Pay Settleable:</th>
                      <th className="text-end fw-bold text-dark font-monospace">₹{MOCK_INVOICE.patientCoPay.toLocaleString()}</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
