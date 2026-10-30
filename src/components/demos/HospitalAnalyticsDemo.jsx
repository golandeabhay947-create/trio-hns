import React, { useState } from 'react';
import { MOCK_ANALYTICS } from '../../data/mockHospitalData';
import './interactive-demos.css';

export default function HospitalAnalyticsDemo() {
  const [dateFilter, setDateFilter] = useState('This Month');

  return (
    <div className="analytics-demo-shell" aria-label="Hospital Analytics Dashboard Preview">
      <div className="interactive-demo-badge-row">
        <span className="demo-live-indicator">
          <span className="demo-pulse-dot"></span>
          Product Preview / Interactive Demo
        </span>
        <span className="demo-subtitle">Simulated administrative analytics, clinical census & revenue surveillance</span>
      </div>

      {/* Date Filter & Toolbar */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
        <div>
          <h5 className="mb-0 fw-bold">Executive Healthcare Intelligence</h5>
          <span className="text-muted fs-8">Real-time aggregated insights across OPD, IPD, Diagnostics & Billing</span>
        </div>
        <div className="btn-group btn-group-sm" role="group" aria-label="Timeframe">
          {['Today', 'This Week', 'This Month', 'Year-to-Date'].map((period) => (
            <button
              key={period}
              type="button"
              className={`btn btn-outline-secondary ${dateFilter === period ? 'active' : ''}`}
              onClick={() => setDateFilter(period)}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="admin-kpi-grid">
        {MOCK_ANALYTICS.kpis.map((kpi) => (
          <div className="admin-kpi-card" key={kpi.title}>
            <div className="admin-kpi-top">
              <span className="admin-kpi-title">{kpi.title}</span>
              <i className={`bi ${kpi.icon}`} style={{ color: kpi.accent }} aria-hidden="true"></i>
            </div>
            <div className="admin-kpi-val">{kpi.value}</div>
            <div className="admin-kpi-foot">
              <span className="text-success fw-bold">{kpi.change}</span>
              <span className="text-muted ms-1">vs previous {dateFilter.toLowerCase()}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts & Breakdown Row */}
      <div className="row g-3 mt-1">
        {/* Weekly OPD/IPD Trend Visualizer */}
        <div className="col-lg-7">
          <div className="analytics-chart-card">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="mb-0">OPD & IPD Daily Volume Trend</h6>
              <div className="d-flex gap-2 fs-8">
                <span className="text-primary"><span className="legend-dot bg-primary"></span> OPD Visits</span>
                <span className="text-danger"><span className="legend-dot bg-danger"></span> IPD Admissions</span>
              </div>
            </div>

            {/* Bar Chart Representation */}
            <div className="trend-bars-container">
              {MOCK_ANALYTICS.weeklyTrends.map((trend) => (
                <div className="trend-day-col" key={trend.day}>
                  <div className="trend-bars-pair">
                    <div
                      className="trend-bar-opd"
                      style={{ height: `${(trend.opd / 200) * 120}px` }}
                      title={`${trend.day} OPD: ${trend.opd}`}
                    >
                      <span className="trend-bar-tooltip">{trend.opd}</span>
                    </div>
                    <div
                      className="trend-bar-ipd"
                      style={{ height: `${(trend.ipd / 50) * 120}px` }}
                      title={`${trend.day} IPD: ${trend.ipd}`}
                    >
                      <span className="trend-bar-tooltip">{trend.ipd}</span>
                    </div>
                  </div>
                  <span className="trend-day-label">{trend.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Department-wise Patient Distribution */}
        <div className="col-lg-5">
          <div className="analytics-chart-card">
            <h6 className="mb-3">Department Inpatient Census Distribution</h6>
            <div className="dept-bars-list">
              {MOCK_ANALYTICS.departmentShare.map((dept) => (
                <div className="dept-bar-item" key={dept.name}>
                  <div className="d-flex justify-content-between fs-8 mb-1">
                    <span className="fw-semibold">{dept.name} ({dept.patients} Patients)</span>
                    <strong className="text-dark">{dept.share}%</strong>
                  </div>
                  <div className="progress" style={{ height: '7px' }}>
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
      </div>
    </div>
  );
}
