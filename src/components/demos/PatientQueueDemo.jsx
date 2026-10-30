import React, { useState } from 'react';
import { MOCK_PATIENTS } from '../../data/mockHospitalData';
import './interactive-demos.css';

export default function PatientQueueDemo() {
  const [filterStatus, setFilterStatus] = useState('All');
  const [search, setSearch] = useState('');

  const filteredList = MOCK_PATIENTS.filter((p) => {
    const matchesStatus = filterStatus === 'All' || p.status === filterStatus;
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.token.toLowerCase().includes(search.toLowerCase()) ||
      p.doctor.toLowerCase().includes(search.toLowerCase()) ||
      p.department.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const waitingCount = MOCK_PATIENTS.filter((p) => p.status === 'Waiting').length;
  const inConsultCount = MOCK_PATIENTS.filter((p) => p.status === 'In Consultation').length;
  const completedCount = MOCK_PATIENTS.filter((p) => p.status === 'Completed').length;

  return (
    <div className="queue-demo-shell" aria-label="Live Patient Queue Management Demo">
      <div className="interactive-demo-badge-row">
        <span className="demo-live-indicator">
          <span className="demo-pulse-dot"></span>
          Product Preview / Interactive Demo
        </span>
        <span className="demo-subtitle">Simulated real-time OPD waiting queue & token display board</span>
      </div>

      {/* Queue KPI Cards */}
      <div className="queue-kpi-row">
        <div className="queue-kpi-card">
          <span className="queue-kpi-label">Waiting in Lounge</span>
          <div className="queue-kpi-num text-warning">{waitingCount}</div>
          <span className="queue-kpi-sub">Est. Turnaround: ~15 mins</span>
        </div>
        <div className="queue-kpi-card">
          <span className="queue-kpi-label">In Consultation</span>
          <div className="queue-kpi-num text-primary">{inConsultCount}</div>
          <span className="queue-kpi-sub">Doctors Active: 4</span>
        </div>
        <div className="queue-kpi-card">
          <span className="queue-kpi-label">Completed Today</span>
          <div className="queue-kpi-num text-success">{completedCount}</div>
          <span className="queue-kpi-sub">Prescriptions Issued</span>
        </div>
        <div className="queue-kpi-card">
          <span className="queue-kpi-label">Average Wait Time</span>
          <div className="queue-kpi-num text-dark">18 <span className="fs-6">min</span></div>
          <span className="queue-kpi-sub text-success"><i className="bi bi-arrow-down-short"></i> 14% vs benchmark</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="queue-filter-row">
        <div className="queue-status-pills">
          {['All', 'Waiting', 'In Consultation', 'Completed'].map((status) => (
            <button
              key={status}
              type="button"
              className={`queue-filter-pill ${filterStatus === status ? 'active' : ''}`}
              onClick={() => setFilterStatus(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="queue-search-input">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search token, patient name, doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Filter queue"
          />
        </div>
      </div>

      {/* Queue Grid Display */}
      <div className="table-responsive queue-table-wrap">
        <table className="table queue-table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Patient Display Name</th>
              <th>UHID</th>
              <th>Assigned Doctor & Dept</th>
              <th>Est. Wait Time</th>
              <th>Queue Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((p, idx) => (
              <tr key={p.uhid} className={p.status === 'In Consultation' ? 'row-active-consult' : ''}>
                <td>
                  <span className="token-pill">{p.token}</span>
                </td>
                <td>
                  <strong>{p.name}</strong>
                  <span className="text-muted d-block fs-8">{p.age} Y / {p.gender}</span>
                </td>
                <td className="font-monospace text-muted">{p.uhid}</td>
                <td>
                  <div>{p.doctor}</div>
                  <span className="dept-tag">{p.department}</span>
                </td>
                <td>
                  {p.status === 'In Consultation' ? (
                    <span className="text-primary fw-bold"><i className="bi bi-broadcast me-1"></i> Inside Clinic</span>
                  ) : p.status === 'Completed' ? (
                    <span className="text-muted">Done</span>
                  ) : (
                    <span className="text-dark">~{10 + idx * 8} mins</span>
                  )}
                </td>
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
  );
}
