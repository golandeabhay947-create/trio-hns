import React, { useState } from 'react';
import { MOCK_PHARMACY_INVENTORY } from '../../data/mockHospitalData';
import './interactive-demos.css';

const CATEGORIES = ['All Categories', 'Analgesics', 'Cardiovascular', 'Antibiotics', 'Antidiabetic', 'Injectables', 'IV Fluids'];

export default function PharmacyInventoryDemo() {
  const [selectedCat, setSelectedCat] = useState('All Categories');
  const [search, setSearch] = useState('');

  const filteredMeds = MOCK_PHARMACY_INVENTORY.filter((m) => {
    const matchesCat = selectedCat === 'All Categories' || m.category === selectedCat;
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.batch.toLowerCase().includes(search.toLowerCase()) ||
      m.category.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pharmacy-demo-shell" aria-label="Pharmacy & Drug Inventory Preview">
      <div className="interactive-demo-badge-row">
        <span className="demo-live-indicator">
          <span className="demo-pulse-dot"></span>
          Product Preview / Interactive Demo
        </span>
        <span className="demo-subtitle">Simulated pharmacy formulary, batch tracking & stock replenishment alerts</span>
      </div>

      {/* Stock Health Summary Chips */}
      <div className="pharmacy-kpi-row">
        <div className="pharmacy-kpi-card">
          <span className="kpi-label">Formulary Items Active</span>
          <div className="kpi-num">1,840</div>
          <span className="kpi-sub">Across OPD & IPD Store</span>
        </div>
        <div className="pharmacy-kpi-card">
          <span className="kpi-label">Near Expiry Alerts</span>
          <div className="kpi-num text-warning">12</div>
          <span className="kpi-sub">&lt; 60 Days Remaining</span>
        </div>
        <div className="pharmacy-kpi-card">
          <span className="kpi-label">Low Stock Reorder</span>
          <div className="kpi-num text-danger">8</div>
          <span className="kpi-sub">Below Reorder Level</span>
        </div>
        <div className="pharmacy-kpi-card">
          <span className="kpi-label">Automated POs</span>
          <div className="kpi-num text-success">5</div>
          <span className="kpi-sub">Sent to Vendors</span>
        </div>
      </div>

      {/* Filters */}
      <div className="queue-filter-row mt-3">
        <div className="queue-status-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`queue-filter-pill ${selectedCat === cat ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="queue-search-input">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search medicine, batch, category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Inventory Table */}
      <div className="table-responsive queue-table-wrap">
        <table className="table queue-table">
          <thead>
            <tr>
              <th>Medicine / Brand Name</th>
              <th>Category</th>
              <th>Batch No.</th>
              <th>Stock Available</th>
              <th>Expiry Date</th>
              <th>Stock Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredMeds.map((med) => {
              const statusClass =
                med.status === 'Low Stock'
                  ? 'status-low-stock'
                  : med.status === 'Near Expiry'
                  ? 'status-near-expiry'
                  : 'status-in-stock';

              return (
                <tr key={med.id}>
                  <td>
                    <strong>{med.name}</strong>
                  </td>
                  <td><span className="dept-tag">{med.category}</span></td>
                  <td className="font-monospace text-muted">{med.batch}</td>
                  <td>
                    <strong>{med.stock}</strong> <span className="fs-8 text-muted">{med.unit}</span>
                  </td>
                  <td>
                    <span className={med.status === 'Near Expiry' ? 'text-danger fw-bold' : ''}>
                      {med.expiry}
                    </span>
                  </td>
                  <td>
                    <span className={`status-pill ${statusClass}`}>
                      {med.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
