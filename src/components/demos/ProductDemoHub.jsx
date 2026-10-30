import React, { useState } from 'react';
import InteractiveWorkflowJourney from './InteractiveWorkflowJourney';
import RoleBasedPreview from './RoleBasedPreview';
import AppointmentDemo from './AppointmentDemo';
import PatientQueueDemo from './PatientQueueDemo';
import BedManagementDemo from './BedManagementDemo';
import EmrPreviewDemo from './EmrPreviewDemo';
import LaboratoryDemo from './LaboratoryDemo';
import PharmacyInventoryDemo from './PharmacyInventoryDemo';
import BillingInsuranceDemo from './BillingInsuranceDemo';
import HospitalAnalyticsDemo from './HospitalAnalyticsDemo';
import PatientPortalDemo from './PatientPortalDemo';
import AbdmEducationDemo from './AbdmEducationDemo';
import './interactive-demos.css';

const DEMO_CATEGORIES = [
  { id: 'workflow', label: 'Patient Journey', icon: 'bi-bezier2', component: InteractiveWorkflowJourney },
  { id: 'role', label: 'Explore by Role', icon: 'bi-people', component: RoleBasedPreview },
  { id: 'appointment', label: 'Appointment Scheduling', icon: 'bi-calendar-check', component: AppointmentDemo },
  { id: 'queue', label: 'Queue Management', icon: 'bi-list-ol', component: PatientQueueDemo },
  { id: 'bed', label: 'Bed & Ward Census', icon: 'bi-grid-3x3', component: BedManagementDemo },
  { id: 'emr', label: 'Unified EMR Chart', icon: 'bi-journal-medical', component: EmrPreviewDemo },
  { id: 'lab', label: 'Lab Tracking (LIS)', icon: 'bi-droplet', component: LaboratoryDemo },
  { id: 'pharmacy', label: 'Pharmacy & Stock', icon: 'bi-capsule', component: PharmacyInventoryDemo },
  { id: 'billing', label: 'Billing & TPA Claims', icon: 'bi-receipt', component: BillingInsuranceDemo },
  { id: 'analytics', label: 'Hospital Analytics', icon: 'bi-graph-up', component: HospitalAnalyticsDemo },
  { id: 'portal', label: 'Patient Portal', icon: 'bi-person-check', component: PatientPortalDemo },
  { id: 'abdm', label: 'ABDM / ABHA Guide', icon: 'bi-shield-lock', component: AbdmEducationDemo }
];

export default function ProductDemoHub() {
  const [activeDemoId, setActiveDemoId] = useState('workflow');

  const activeDemo = DEMO_CATEGORIES.find((d) => d.id === activeDemoId) || DEMO_CATEGORIES[0];
  const ActiveComponent = activeDemo.component;

  return (
    <section id="interactive-demo-hub" className="product-demo-hub-section" aria-labelledby="demo-hub-heading">
      <div className="container">
        <div className="google-modules-header text-center mb-4">
          <div className="demo-hub-eyebrow">
            <span className="demo-hub-eyebrow-line"></span>
            <span>EXPERIENCE THE SYSTEM</span>
            <span className="demo-hub-eyebrow-accent">LIVE PREVIEW</span>
            <span className="demo-hub-eyebrow-line"></span>
          </div>
          <h2 id="demo-hub-heading" className="section-title-google">
            Interactive Product <span className="text-gradient-gemini">Demonstrations</span>
          </h2>
          <p className="demo-hub-intro text-muted">
            Explore simulated frontend workflows showing how TRIO HIMS streamlines everyday hospital operations across departments and roles.
          </p>
        </div>

        {/* Demo Navigation Tabs */}
        <div className="demo-hub-nav-wrap">
          <div className="demo-hub-pills-bar" role="tablist" aria-label="Product Demos">
            {DEMO_CATEGORIES.map((demo) => (
              <button
                key={demo.id}
                type="button"
                className={`demo-hub-pill ${activeDemoId === demo.id ? 'active' : ''}`}
                onClick={() => setActiveDemoId(demo.id)}
                role="tab"
                aria-selected={activeDemoId === demo.id}
              >
                <i className={`bi ${demo.icon} me-1.5`} aria-hidden="true"></i>
                <span>{demo.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Demo Canvas */}
        <div className="demo-hub-active-stage mt-4">
          <ActiveComponent />
        </div>
      </div>
    </section>
  );
}
