import React, { useState } from 'react';
import { MOCK_LAB_TESTS } from '../../data/mockHospitalData';
import './interactive-demos.css';

export default function LaboratoryDemo() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTests = MOCK_LAB_TESTS.filter((t) => {
    const matchesFilter = selectedFilter === 'All' || t.status === selectedFilter;
    const matchesSearch =
      t.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.sampleId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.patient.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="lab-demo-shell" aria-label="Laboratory Information System (LIS) Workflow Preview">
      <div className="interactive-demo-badge-row">
        <span className="demo-live-indicator">
          <span className="demo-pulse-dot"></span>
          Product Preview / Interactive Demo
        </span>
        <span className="demo-subtitle">Simulated laboratory sample tracker from barcode collection to report dispatch</span>
      </div>

      {/* Visual Pipeline Bar */}
      <div className="lab-pipeline-bar">
        <div className="pipeline-step done">
          <span className="step-circle"><i className="bi bi-droplet-fill"></i></span>
          <span className="step-text">1. Collection</span>
        </div>
        <div className="pipeline-arrow"><i className="bi bi-chevron-right"></i></div>
        <div className="pipeline-step processing">
          <span className="step-circle"><i className="bi bi-gear-wide-connected"></i></span>
          <span className="step-text">2. Processing</span>
        </div>
        <div className="pipeline-arrow"><i className="bi bi-chevron-right"></i></div>
        <div className="pipeline-step verification">
          <span className="step-circle"><i className="bi bi-shield-check"></i></span>
          <span className="step-text">3. Verification</span>
        </div>
        <div className="pipeline-arrow"><i className="bi bi-chevron-right"></i></div>
        <div className="pipeline-step ready">
          <span className="step-circle"><i className="bi bi-file-earmark-pdf-fill"></i></span>
          <span className="step-text">4. Report Ready</span>
        </div>
      </div>

      {/* Controls */}
      <div className="queue-filter-row mt-3">
        <div className="queue-status-pills">
          {['All', 'Collection', 'Processing', 'Verification', 'Report Ready'].map((status) => (
            <button
              key={status}
              type="button"
              className={`queue-filter-pill ${selectedFilter === status ? 'active' : ''}`}
              onClick={() => setSelectedFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="queue-search-input">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search test, sample barcode, patient..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Tests Table */}
      <div className="table-responsive queue-table-wrap">
        <table className="table queue-table">
          <thead>
            <tr>
              <th>Sample ID</th>
              <th>Test Investigation</th>
              <th>Patient</th>
              <th>Department</th>
              <th>Order Time</th>
              <th>Stage / Status</th>
              <th>Sign-off</th>
            </tr>
          </thead>
          <tbody>
            {filteredTests.map((t) => (
              <tr key={t.id}>
                <td className="font-monospace fw-bold text-primary">{t.sampleId}</td>
                <td><strong>{t.testName}</strong></td>
                <td>{t.patient}</td>
                <td><span className="dept-tag">{t.department}</span></td>
                <td>{t.time}</td>
                <td>
                  <span className={`status-pill status-${t.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {t.status}
                  </span>
                </td>
                <td className="fs-8 text-muted">{t.verifiedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
