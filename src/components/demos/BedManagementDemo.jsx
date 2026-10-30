import React, { useState } from 'react';
import { MOCK_BEDS } from '../../data/mockHospitalData';
import './interactive-demos.css';

const WARDS = ['All Wards', 'ICU', 'General Ward', 'Private Ward'];

export default function BedManagementDemo() {
  const [selectedWard, setSelectedWard] = useState('All Wards');
  const [selectedBed, setSelectedBed] = useState(null);

  const filteredBeds = MOCK_BEDS.filter(
    (b) => selectedWard === 'All Wards' || b.ward === selectedWard
  );

  const totalBeds = MOCK_BEDS.length;
  const occupiedCount = MOCK_BEDS.filter((b) => b.status === 'Occupied').length;
  const availableCount = MOCK_BEDS.filter((b) => b.status === 'Available').length;
  const cleaningCount = MOCK_BEDS.filter((b) => b.status === 'Cleaning').length;
  const maintenanceCount = MOCK_BEDS.filter((b) => b.status === 'Maintenance').length;
  const occupancyRate = Math.round((occupiedCount / totalBeds) * 100);

  return (
    <div className="bed-demo-shell" aria-label="Visual Bed and Ward Management Demo">
      <div className="interactive-demo-badge-row">
        <span className="demo-live-indicator">
          <span className="demo-pulse-dot"></span>
          Product Preview / Interactive Demo
        </span>
        <span className="demo-subtitle">Simulated real-time inpatient ward occupancy & census dashboard</span>
      </div>

      {/* Bed Occupancy KPIs */}
      <div className="bed-kpi-row">
        <div className="bed-kpi-card">
          <span className="bed-kpi-label">Total Beds Configured</span>
          <div className="bed-kpi-val">{totalBeds}</div>
          <span className="bed-kpi-sub">Across 3 hospital wings</span>
        </div>
        <div className="bed-kpi-card">
          <span className="bed-kpi-label">Occupied Beds</span>
          <div className="bed-kpi-val text-danger">{occupiedCount}</div>
          <span className="bed-kpi-sub">Admitted Inpatients</span>
        </div>
        <div className="bed-kpi-card">
          <span className="bed-kpi-label">Available for Admission</span>
          <div className="bed-kpi-val text-success">{availableCount}</div>
          <span className="bed-kpi-sub">Ready for intake</span>
        </div>
        <div className="bed-kpi-card">
          <span className="bed-kpi-label">Cleaning & Sanitize</span>
          <div className="bed-kpi-val text-warning">{cleaningCount}</div>
          <span className="bed-kpi-sub">Housekeeping in queue</span>
        </div>
        <div className="bed-kpi-card">
          <span className="bed-kpi-label">Occupancy Rate</span>
          <div className="bed-kpi-val text-primary">{occupancyRate}%</div>
          <span className="bed-kpi-sub">Live Census Index</span>
        </div>
      </div>

      {/* Ward Filter Pills & Color Legend */}
      <div className="bed-controls-row">
        <div className="bed-ward-pills">
          {WARDS.map((ward) => (
            <button
              key={ward}
              type="button"
              className={`bed-ward-pill ${selectedWard === ward ? 'active' : ''}`}
              onClick={() => setSelectedWard(ward)}
            >
              {ward}
            </button>
          ))}
        </div>

        <div className="bed-legend-wrap">
          <span className="legend-item"><span className="legend-dot dot-available"></span> Available</span>
          <span className="legend-item"><span className="legend-dot dot-occupied"></span> Occupied</span>
          <span className="legend-item"><span className="legend-dot dot-cleaning"></span> Cleaning</span>
          <span className="legend-item"><span className="legend-dot dot-maintenance"></span> Maintenance</span>
        </div>
      </div>

      {/* Bed Matrix Grid */}
      <div className="bed-matrix-grid">
        {filteredBeds.map((bed) => {
          const statusClass = `bed-card--${bed.status.toLowerCase()}`;
          const isSelected = selectedBed?.id === bed.id;
          return (
            <div
              key={bed.id}
              className={`bed-card ${statusClass} ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedBed(bed)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedBed(bed);
                }
              }}
              aria-label={`${bed.number} (${bed.ward}): ${bed.status}`}
            >
              <div className="bed-card-top">
                <span className="bed-number">{bed.number}</span>
                <span className={`bed-status-tag tag-${bed.status.toLowerCase()}`}>{bed.status}</span>
              </div>
              <div className="bed-type-label">{bed.type}</div>
              <div className="bed-patient-info">
                {bed.status === 'Occupied' ? (
                  <>
                    <strong className="d-block text-truncate">{bed.patient}</strong>
                    <span className="text-muted fs-8 font-monospace">{bed.uhid}</span>
                  </>
                ) : bed.status === 'Available' ? (
                  <span className="text-success fs-8"><i className="bi bi-check2 me-1"></i> Ready for Admission</span>
                ) : bed.status === 'Cleaning' ? (
                  <span className="text-warning fs-8"><i className="bi bi-hourglass-split me-1"></i> Sanitizing</span>
                ) : (
                  <span className="text-muted fs-8"><i className="bi bi-wrench me-1"></i> Under Repair</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Bed Quick Drawer Panel */}
      {selectedBed && (
        <div className="bed-detail-drawer mt-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">
              <i className="bi bi-info-circle me-2 text-primary"></i>
              Bed Details: <strong>{selectedBed.number}</strong> ({selectedBed.ward})
            </h6>
            <button
              type="button"
              className="btn btn-sm btn-link text-decoration-none"
              onClick={() => setSelectedBed(null)}
            >
              Close
            </button>
          </div>
          <div className="row g-2 fs-7">
            <div className="col-md-3"><strong>Category:</strong> {selectedBed.type}</div>
            <div className="col-md-3"><strong>Status:</strong> <span className={`status-pill status-${selectedBed.status.toLowerCase()}`}>{selectedBed.status}</span></div>
            <div className="col-md-3"><strong>Patient:</strong> {selectedBed.patient || 'None (Unallocated)'}</div>
            <div className="col-md-3"><strong>Consultant:</strong> {selectedBed.doctor || 'N/A'}</div>
          </div>
        </div>
      )}
    </div>
  );
}
