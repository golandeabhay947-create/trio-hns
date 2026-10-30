import React, { useState } from 'react';
import { MOCK_INVOICE } from '../../data/mockHospitalData';
import './interactive-demos.css';

export default function BillingInsuranceDemo() {
  const [showPrintModal, setShowPrintModal] = useState(false);

  return (
    <div className="billing-demo-shell" aria-label="Billing and Insurance TPA Preview">
      <div className="interactive-demo-badge-row">
        <span className="demo-live-indicator">
          <span className="demo-pulse-dot"></span>
          Product Preview / Interactive Demo
        </span>
        <span className="demo-subtitle">Simulated transparent hospital invoicing & cashless insurance claim audit</span>
      </div>

      <div className="invoice-preview-card">
        {/* Invoice Top Header */}
        <div className="invoice-card-top">
          <div>
            <span className="badge bg-primary-subtle text-primary mb-1">Tax Invoice Preview</span>
            <h4 className="invoice-title">{MOCK_INVOICE.invoiceNumber}</h4>
            <span className="text-muted fs-7">Generated Date: {MOCK_INVOICE.date} · TRIO Healthcare Super Speciality</span>
          </div>
          <div className="invoice-top-actions">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => setShowPrintModal(true)}
            >
              <i className="bi bi-printer me-1"></i> Print / Export Invoice
            </button>
          </div>
        </div>

        {/* Patient & Insurance Split Grid */}
        <div className="invoice-meta-grid">
          <div className="invoice-meta-block">
            <span className="meta-label">Patient Details</span>
            <strong>{MOCK_INVOICE.patientName} ({MOCK_INVOICE.ageGender})</strong>
            <span className="text-muted fs-8 font-monospace">UHID: {MOCK_INVOICE.uhid}</span>
            <span className="fs-8">Consultant: {MOCK_INVOICE.doctorName} ({MOCK_INVOICE.department})</span>
          </div>
          <div className="invoice-meta-block">
            <span className="meta-label">Admission Details</span>
            <strong>{MOCK_INVOICE.admissionType}</strong>
            <span className="fs-8">Allocated Bed: {MOCK_INVOICE.roomBed}</span>
            <span className="fs-8 text-success"><i className="bi bi-shield-check me-1"></i> NABH Standard Billing Tariff</span>
          </div>
          <div className="invoice-meta-block">
            <span className="meta-label">Insurance / TPA Pre-Authorization</span>
            <strong className="text-primary">{MOCK_INVOICE.tpaProvider}</strong>
            <span className="fs-8 font-monospace text-muted">Claim ID: {MOCK_INVOICE.tpaClaimId}</span>
            <span className="badge bg-success-subtle text-success fs-8 mt-1">{MOCK_INVOICE.tpaStatus}</span>
          </div>
        </div>

        {/* Cashless Claim Progress Bar */}
        <div className="claim-progress-wrap mt-3">
          <div className="d-flex justify-content-between fs-8 mb-1">
            <span className="fw-bold">Insurance Claim Tracking Lifecycle</span>
            <span className="text-success fw-bold">Step 3 of 4: Pre-Auth Approved</span>
          </div>
          <div className="progress" style={{ height: '7px' }}>
            <div className="progress-bar bg-success" style={{ width: '75%' }}></div>
          </div>
          <div className="d-flex justify-content-between fs-8 text-muted mt-1">
            <span>1. Intimation</span>
            <span>2. Query Cleared</span>
            <span className="fw-bold text-success">3. Pre-Auth Granted</span>
            <span>4. Final Discharge Settlement</span>
          </div>
        </div>

        {/* Itemized Charge Breakdown */}
        <div className="table-responsive mt-3">
          <table className="table table-sm invoice-table">
            <thead>
              <tr>
                <th>Service / Charge Description</th>
                <th>Classification</th>
                <th className="text-end">Tariff (₹)</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_INVOICE.items.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.desc}</td>
                  <td><span className="dept-tag">{item.category}</span></td>
                  <td className="text-end font-monospace">₹{item.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="2" className="text-end">Gross Subtotal:</th>
                <th className="text-end font-monospace">₹{MOCK_INVOICE.subtotal.toLocaleString()}</th>
              </tr>
              <tr>
                <th colSpan="2" className="text-end text-success">Approved Subsidy / Hospital Concession:</th>
                <th className="text-end text-success font-monospace">-₹{MOCK_INVOICE.discount.toLocaleString()}</th>
              </tr>
              <tr className="table-active">
                <th colSpan="2" className="text-end fs-6">Net Hospital Bill:</th>
                <th className="text-end font-monospace text-primary fs-6">₹{MOCK_INVOICE.netTotal.toLocaleString()}</th>
              </tr>
              <tr>
                <th colSpan="2" className="text-end text-info">Less: TPA Insurance Approved Cashless Limit:</th>
                <th className="text-end text-info font-monospace">-₹{MOCK_INVOICE.tpaApprovedAmount.toLocaleString()}</th>
              </tr>
              <tr className="table-success">
                <th colSpan="2" className="text-end fw-bold">Patient Co-Pay Settleable at Desk:</th>
                <th className="text-end font-monospace fw-bold fs-6">₹{MOCK_INVOICE.patientCoPay.toLocaleString()}</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Simulated Printable Invoice Modal */}
      {showPrintModal && (
        <div className="printable-invoice-modal-backdrop" onClick={() => setShowPrintModal(false)}>
          <div className="printable-invoice-modal" onClick={(e) => e.stopPropagation()}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Official Hospital Invoice Preview</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowPrintModal(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="border p-3 rounded bg-white font-monospace fs-8">
              <div className="text-center pb-2 border-bottom mb-2">
                <strong>TRIO MULTI-SPECIALITY HOSPITAL & RESEARCH CENTRE</strong><br />
                <span>GSTIN: 27AABCT1234F1Z5 · NABH ACCREDITED</span><br />
                <span>INVOICE #{MOCK_INVOICE.invoiceNumber} · {MOCK_INVOICE.date}</span>
              </div>
              <p>PATIENT: {MOCK_INVOICE.patientName} | UHID: {MOCK_INVOICE.uhid}</p>
              <p>TOTAL AMOUNT: ₹{MOCK_INVOICE.netTotal.toLocaleString()}</p>
              <p>INSURANCE COVER: ₹{MOCK_INVOICE.tpaApprovedAmount.toLocaleString()}</p>
              <p>PATIENT CO-PAY: ₹{MOCK_INVOICE.patientCoPay.toLocaleString()} [PAID VIA UPI]</p>
              <div className="text-center pt-2 border-top text-muted">
                *** THIS IS A COMPUTER GENERATED SIMULATED DEMO INVOICE ***
              </div>
            </div>
            <div className="text-end mt-3">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setShowPrintModal(false)}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
