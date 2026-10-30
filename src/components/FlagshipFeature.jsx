import React, { useState } from 'react';

export default function FlagshipFeature({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('opd');

  return (
    <section id="flagship-feature" className="flagship-section">
      <div className="container">
        
        <div className="row align-items-center g-5">
          
          {/* Left Column: Google Headline & Limited Wording (like Frame 06) */}
          <div className="col-lg-5">
            <div className="flagship-copy-wrap">
              <span className="section-pill-badge mb-3">
                <i className="bi bi-cpu-fill"></i>
                <span>Flagship Platform</span>
              </span>

              <h2 className="flagship-title">
                The connected hospital.
              </h2>

              <p className="flagship-desc">
                From digital doctor desks to automated lab auto-analyzers and 2-way Tally sync, TRIO brings your clinical, financial, and diagnostic operations into a single intelligent cloud.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4">
                <span className="badge-chip">Paperless EMR</span>
                <span className="badge-chip">Bi-directional Lab</span>
                <span className="badge-chip">Real-time Tally Sync</span>
              </div>

              <div className="d-flex align-items-center gap-4">
                <button 
                  type="button" 
                  className="btn-google-pill"
                  onClick={onOpenModal}
                >
                  <span>Explore Capabilities</span>
                  <i className="bi bi-arrow-right"></i>
                </button>

                <a 
                  href="/hospital-modules" 
                  className="flagship-link-arrow"
                >
                  <span>View 18 Modules</span>
                  <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Giant Rounded Showcase Card (like Frame 06 & Frame 08) */}
          <div className="col-lg-7">
            <div className="flagship-display-card">
              <div className="display-card-beam"></div>

              {/* Top Navigation Tabs */}
              <div className="display-card-header">
                <div className="d-flex align-items-center gap-2">
                  <span className="mac-dot bg-danger"></span>
                  <span className="mac-dot bg-warning"></span>
                  <span className="mac-dot bg-success"></span>
                  <span className="ms-2 fs-8 text-muted fw-medium">TRIO Cloud Console v4.8</span>
                </div>

                <div className="display-tabs-row">
                  <button 
                    type="button"
                    className={`display-tab-btn ${activeTab === 'opd' ? 'active' : ''}`}
                    onClick={() => setActiveTab('opd')}
                  >
                    OPD Desk
                  </button>
                  <button 
                    type="button"
                    className={`display-tab-btn ${activeTab === 'ipd' ? 'active' : ''}`}
                    onClick={() => setActiveTab('ipd')}
                  >
                    IPD Ward
                  </button>
                  <button 
                    type="button"
                    className={`display-tab-btn ${activeTab === 'lab' ? 'active' : ''}`}
                    onClick={() => setActiveTab('lab')}
                  >
                    Lab Interfacing
                  </button>
                  <button 
                    type="button"
                    className={`display-tab-btn ${activeTab === 'tally' ? 'active' : ''}`}
                    onClick={() => setActiveTab('tally')}
                  >
                    Tally Sync
                  </button>
                </div>
              </div>

              {/* Tab 1: OPD Consultation */}
              {activeTab === 'opd' && (
                <div className="display-screen animate__animated animate__fadeIn">
                  <div className="row g-3">
                    <div className="col-md-7">
                      <div className="screen-inner-card">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fs-8 fw-bold text-primary">PATIENT UHID #94821</span>
                          <span className="badge bg-success-subtle text-success border border-success-subtle">Consultation Active</span>
                        </div>
                        <h5 className="fs-6 fw-bold mb-1">Ramesh Kulkarni • 46 Y / M</h5>
                        <p className="fs-8 text-muted mb-3">Chief Complaint: Acute chest discomfort, hypertension history</p>

                        <div className="d-flex gap-2 flex-wrap mb-3">
                          <span className="vital-pill">BP: <strong>120/80</strong></span>
                          <span className="vital-pill">Pulse: <strong>74 bpm</strong></span>
                          <span className="vital-pill">SpO2: <strong>99%</strong></span>
                          <span className="vital-pill">Temp: <strong>98.6°F</strong></span>
                        </div>

                        <div className="bg-light p-2 rounded-3 fs-8">
                          <span className="fw-semibold text-secondary">E-Prescription:</span>
                          <div className="d-flex justify-content-between text-muted mt-1">
                            <span>Tab. Telmisartan 40mg (1-0-0)</span>
                            <span className="text-primary">Ordered to Pharmacy</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5">
                      <div className="screen-inner-card h-100 d-flex flex-column justify-content-between">
                        <div>
                          <span className="fs-8 fw-bold text-muted text-uppercase">Token Queue</span>
                          <div className="display-token-big">#24</div>
                          <p className="fs-8 text-secondary mb-0">Cardiology Chamber 3 • Dr. Satish</p>
                        </div>
                        <div className="mt-3 pt-2 border-top">
                          <span className="badge bg-primary text-white w-100 py-2 fs-8">Next in Queue: Token #25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: IPD Ward Desk */}
              {activeTab === 'ipd' && (
                <div className="display-screen animate__animated animate__fadeIn">
                  <div className="row g-3">
                    <div className="col-md-8">
                      <div className="screen-inner-card">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fs-8 fw-bold text-primary">BED ALLOCATION • ICU-04</span>
                          <span className="badge bg-warning-subtle text-warning border border-warning-subtle">Post-Op Monitoring</span>
                        </div>
                        <h5 className="fs-6 fw-bold mb-1">Sunita Patil • Bed 402 (Deluxe)</h5>
                        <p className="fs-8 text-muted mb-2">Surgeon: Dr. Kawedia • Admitted: 10 Oct 2026</p>

                        <div className="d-flex justify-content-between align-items-center bg-light p-2 rounded-3 fs-8 mb-2">
                          <span>Cumulative IPD Bill:</span>
                          <span className="fw-bold text-success fs-7">₹ 42,850</span>
                        </div>

                        <div className="d-flex justify-content-between align-items-center bg-light p-2 rounded-3 fs-8">
                          <span>Cashless TPA Insurance:</span>
                          <span className="badge bg-success text-white">Pre-Auth Approved (₹ 1,50,000)</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="screen-inner-card h-100 text-center d-flex flex-column justify-content-center">
                        <span className="fs-8 text-muted text-uppercase">Nurse MAR Sheet</span>
                        <div className="fs-3 fw-bold text-success my-2">100%</div>
                        <span className="fs-8 text-muted">All morning medications verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Lab Interfacing */}
              {activeTab === 'lab' && (
                <div className="display-screen animate__animated animate__fadeIn">
                  <div className="screen-inner-card">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fs-8 fw-bold text-primary">ROCHE COBAS 6000 AUTO-ANALYZER</span>
                      <span className="badge bg-success text-white">Bi-directional Live</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center p-2 rounded-3 bg-light mb-2 fs-8">
                      <span>Barcode #8492019 • Serum Creatinine</span>
                      <span className="fw-bold text-success">1.02 mg/dL (Normal)</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center p-2 rounded-3 bg-light mb-2 fs-8">
                      <span>Barcode #8492020 • HbA1c Glycated Hb</span>
                      <span className="fw-bold text-danger">8.4% (Elevated • Auto Panic Alert)</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top fs-8 text-muted">
                      <span>Direct Analyzer Capture • Zero Typo Errors</span>
                      <span className="text-primary fw-medium">Auto-Synced to Patient EMR</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Tally Sync */}
              {activeTab === 'tally' && (
                <div className="display-screen animate__animated animate__fadeIn">
                  <div className="screen-inner-card">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fs-8 fw-bold text-primary">TALLY PRIME ERP TWO-WAY BRIDGE</span>
                      <span className="badge bg-success text-white">Ledger Synchronized</span>
                    </div>

                    <div className="row g-2 text-center my-2">
                      <div className="col-4">
                        <div className="p-2 bg-light rounded-3">
                          <span className="d-block fs-8 text-muted">OPD Collections</span>
                          <span className="fw-bold text-primary fs-7">₹ 1,84,500</span>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="p-2 bg-light rounded-3">
                          <span className="d-block fs-8 text-muted">Pharmacy POS</span>
                          <span className="fw-bold text-success fs-7">₹ 98,240</span>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="p-2 bg-light rounded-3">
                          <span className="d-block fs-8 text-muted">Revenue Leakage</span>
                          <span className="fw-bold text-success fs-7">₹ 0 (Zero)</span>
                        </div>
                      </div>
                    </div>

                    <p className="fs-8 text-muted mb-0 mt-2">
                      <i className="bi bi-shield-check text-success me-1"></i>
                      All transactions logged with voucher number, GST breakdown, and digital cashier lock.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
