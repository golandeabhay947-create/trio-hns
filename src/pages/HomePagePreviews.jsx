import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import KeyFeatures from '../components/KeyFeatures';
import TrustedBy from '../components/TrustedBy';
import ProductDemoHub from '../components/demos/ProductDemoHub';
import { submitDemoRequest } from '../lib/submitDemoRequest';
import { modulesData } from '../data/modulesData';
import { testimonialsData } from '../data/testimonialsData';
import TestimonialInteractiveCard from '../components/TestimonialInteractiveCard';
import HomeFaqAccordion from '../components/HomeFaqAccordion';
import './home-page-previews.css';

const WHY_TRIO_ITEMS = [
  {
    title: 'Hospital-Centric Design',
    icon: 'bi-hospital-fill',
    description: 'TRIO HIMS is tailor-engineered for rapid clinical desks, ICU nursing stations, and high-volume emergency wards.'
  },
  {
    title: '10+ Yrs TRIO Trust',
    icon: 'bi-people-fill',
    description: 'Over a decade of TRIO healthcare technology engineering deployed in 200+ hospitals with 24/7 dedicated implementation support.'
  },
  {
    title: 'Unified Hospital Cloud',
    icon: 'bi-lightbulb-fill',
    description: 'TRIO unifies 19+ hospital departments into a zero-latency platform with automated bi-directional lab interfacing and 2-way Tally sync.'
  },
  {
    title: 'ABHA & ABDM Compliant',
    badge: 'NEW',
    icon: 'bi-shield-check',
    description: 'TRIO provides native Ayushman Bharat Digital Mission (ABDM M1–M3) integration, instant ABHA creation, and NABH-ready audit trails.'
  },
];

function PreviewHeading({ id, title, accent, description }) {
  return (
    <div className="home-preview-heading text-center">
      <h2 id={id} className="section-title-google">
        {title} <span className="text-gradient-gemini">{accent}</span>
      </h2>
      {description ? <p className="home-preview-intro">{description}</p> : null}
    </div>
  );
}

function SectionLink({ to, children, className = '' }) {
  return (
    <Link className={`home-preview-cta ${className}`.trim()} to={to}>
      {children}
      <i className="bi bi-arrow-right" aria-hidden="true"></i>
    </Link>
  );
}

export default function HomePagePreviews() {
  const previewTestimonials = testimonialsData.slice(0, 3);
  const abhaModule = modulesData.find((m) => m.id === 19);
  const previewModules = [
    modulesData[0],
    modulesData[1],
    modulesData[2],
    modulesData[5],
    modulesData[6],
    abhaModule || modulesData[3]
  ];

  return (
    <div className="home-previews">
      <section className="home-preview-section home-preview-why" aria-labelledby="home-preview-why-title">
        <div className="container">
          <div className="home-why-outer-card">
            <div className="home-preview-heading home-why-heading text-center">
              <div className="home-why-eyebrow" aria-label="Why Choose TRIO">
                <span className="home-why-eyebrow-line" aria-hidden="true"></span>
                <span>WHY CHOOSE</span>
                <span className="home-why-eyebrow-accent">TRIO</span>
                <span className="home-why-eyebrow-line" aria-hidden="true"></span>
              </div>
              <h2 id="home-preview-why-title" className="section-title-google">
                Why Choose <span className="text-gradient-gemini">TRIO</span>
              </h2>
              <p className="home-preview-intro">
                Proven healthcare technology connecting clinical excellence, operational efficiency, and financial security.
              </p>
            </div>

            <div className="home-why-subcards-grid">
              {WHY_TRIO_ITEMS.map((item, idx) => (
                <Link to="/why-choose-trio" className="home-why-subcard" key={item.title}>
                  <div className="home-why-subcard-header">
                    <span className="home-why-subcard-icon" aria-hidden="true">
                      <i className={`bi ${item.icon}`}></i>
                    </span>
                    <span className="home-why-subcard-num">0{idx + 1}</span>
                  </div>
                  <h3 className="home-why-subcard-title">
                    {item.title}
                    {item.badge && <span className="badge-abha-new ms-2">{item.badge}</span>}
                  </h3>
                  <p className="home-why-subcard-desc">{item.description}</p>
                  <div className="home-why-subcard-arrow" aria-hidden="true">
                    <span>Learn more</span>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </Link>
              ))}
            </div>

            <div className="home-why-cta-wrap text-center">
              <SectionLink to="/why-choose-trio" className="btn-google-pill home-why-cta">
                See Why Choose Us
              </SectionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="home-preview-section home-preview-modules" aria-labelledby="home-preview-modules-title">
        <div className="container">
          <div className="home-modules-showcase-container">
            <PreviewHeading
              id="home-preview-modules-title"
              title="Hospital"
              accent="Modules"
              description="Explore TRIO HIMS’s core suite of integrated modules spanning clinical, diagnostic, pharmacy, and administrative departments."
            />
            <div className="home-module-grid-wrap">
              <ul className="home-module-subcards-grid">
                {previewModules.map((module) => (
                  <li className="home-module-subcard" key={module.id}>
                    <Link to={`/modules/${module.id}`} className="home-module-subcard-link">
                      <div className="home-module-subcard-top">
                        <span className="home-module-icon-squircle" aria-hidden="true">
                          <i className={`bx ${module.icon}`}></i>
                        </span>
                        <div className="d-flex align-items-center gap-1">
                          <span className="home-module-category-badge">{module.category}</span>
                          {module.badge && <span className="badge-abha-new">{module.badge}</span>}
                        </div>
                      </div>
                      <h3 className="home-module-subcard-title">
                        {module.shortTitle || module.title}
                      </h3>
                      <p className="home-module-subcard-desc">{module.description}</p>
                      <div className="home-module-subcard-footer">
                        <span className="home-module-explore-label">Explore module</span>
                        <i className="bi bi-arrow-right" aria-hidden="true"></i>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="home-preview-actions home-modules-cta-row">
              <SectionLink to="/hospital-modules" className="btn-google-pill">
                See All 19 Modules
              </SectionLink>
            </div>
          </div>
        </div>
      </section>

      <ProductDemoHub />

      <section className="home-preview-section home-preview-trusted" aria-label="Trusted by healthcare partners">
        <div className="container">
          <div className="home-trusted-animation">
            <TrustedBy />
          </div>
          <p className="home-preview-intro home-trusted-intro">
            A selection of healthcare organizations featured in the TRIO HIMS partner showcase.
          </p>
          <div className="home-preview-actions">
            <SectionLink to="/trusted-by">Meet Our Healthcare Partners</SectionLink>
          </div>
        </div>
      </section>

      <section className="home-preview-section home-preview-features" aria-label="Key features preview">
        <div className="container">
          <div className="home-features-animation">
            <KeyFeatures preview />
          </div>
          <div className="home-preview-actions">
            <SectionLink to="/key-features">See All Features</SectionLink>
          </div>
        </div>
      </section>

      <section className="home-preview-section home-preview-workflows" aria-labelledby="home-preview-workflows-title">
        <div className="container">
          <PreviewHeading
            id="home-preview-workflows-title"
            title="HIMS Work"
            accent="Flows"
            description="See how TRIO HIMS orchestrates connected outpatient and inpatient clinical pathways across hospital departments without data silos."
          />
          <div className="home-opd-ipd-container">
            <div className="home-opd-ipd-grid">
              {/* OPD Card */}
              <div className="home-opd-ipd-card">
                <div className="home-opd-ipd-card-header">
                  <div className="home-opd-ipd-badge-strip">
                    <span className="home-opd-ipd-tag opd-tag">OPD Clinical Flow</span>
                    <span className="home-opd-ipd-stat"><i className="bi bi-stopwatch"></i> &lt; 4.5 Mins Turnaround</span>
                  </div>
                </div>
                <h3 className="home-opd-ipd-card-title">
                  <i className="bx bx-user-check"></i>
                  Outpatient (OPD) Lifecycle
                </h3>
                <p className="home-opd-ipd-card-desc">
                  Streamlined walk-in and booked patient journey from token generation to e-prescription and billing.
                </p>
                <ul className="home-opd-ipd-steps-list">
                  <li className="home-opd-ipd-step-item">
                    <span className="home-opd-ipd-step-num">01</span>
                    <span>UHID Token Generation &amp; Counter Registration</span>
                  </li>
                  <li className="home-opd-ipd-step-item">
                    <span className="home-opd-ipd-step-num">02</span>
                    <span>Physician Consultation Desk &amp; Vitals Charting</span>
                  </li>
                  <li className="home-opd-ipd-step-item">
                    <span className="home-opd-ipd-step-num">03</span>
                    <span>Investigation Orders Auto-routed to Lab &amp; PACS</span>
                  </li>
                  <li className="home-opd-ipd-step-item">
                    <span className="home-opd-ipd-step-num">04</span>
                    <span>Pharmacy POS Dispensing &amp; Instant Clearance</span>
                  </li>
                </ul>
                <div className="home-opd-ipd-card-footer">
                  <span className="home-opd-ipd-metric-chip">
                    <i className="bi bi-file-earmark-medical me-1"></i> 100% Digital Prescriptions
                  </span>
                  <Link to="/workflows" className="home-opd-ipd-link">
                    <span>View Architecture</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              {/* IPD Card */}
              <div className="home-opd-ipd-card">
                <div className="home-opd-ipd-card-header">
                  <div className="home-opd-ipd-badge-strip">
                    <span className="home-opd-ipd-tag ipd-tag">IPD Ward Operations</span>
                    <span className="home-opd-ipd-stat"><i className="bi bi-speedometer2"></i> &lt; 90 Sec Admission</span>
                  </div>
                </div>
                <h3 className="home-opd-ipd-card-title">
                  <i className="bx bx-bed"></i>
                  Inpatient (IPD) Protocol
                </h3>
                <p className="home-opd-ipd-card-desc">
                  Complete admission-to-discharge orchestration across nursing stations, OT suites, and insurance claims.
                </p>
                <ul className="home-opd-ipd-steps-list">
                  <li className="home-opd-ipd-step-item">
                    <span className="home-opd-ipd-step-num">01</span>
                    <span>Bed Census Allocation &amp; Admission Tariff Setup</span>
                  </li>
                  <li className="home-opd-ipd-step-item">
                    <span className="home-opd-ipd-step-num">02</span>
                    <span>Ward Nursing Station Intake &amp; Drug Charting</span>
                  </li>
                  <li className="home-opd-ipd-step-item">
                    <span className="home-opd-ipd-step-num">03</span>
                    <span>Clinical Rounds, OT Booking &amp; Surgery Clearance</span>
                  </li>
                  <li className="home-opd-ipd-step-item">
                    <span className="home-opd-ipd-step-num">04</span>
                    <span>Cashless TPA Pre-Auth &amp; Gate Pass Release</span>
                  </li>
                </ul>
                <div className="home-opd-ipd-card-footer">
                  <span className="home-opd-ipd-metric-chip">
                    <i className="bi bi-shield-check me-1"></i> Real-time TPA Insurance Sync
                  </span>
                  <Link to="/workflows" className="home-opd-ipd-link">
                    <span>View Architecture</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="home-preview-actions mt-3">
              <SectionLink to="/workflows" className="btn-google-pill">
                Explore Full Workflows & Architecture
              </SectionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="home-preview-section home-preview-testimonials" aria-labelledby="home-preview-testimonials-title">
        <div className="container">
          <PreviewHeading
            id="home-preview-testimonials-title"
            title="Clinician"
            accent="Testimonials"
            description="Verified perspectives from leading surgeons, hospital directors, and clinical administrators running TRIO HIMS."
          />
          <div className="home-testimonial-grid">
            {previewTestimonials.map((testimonial) => (
              <TestimonialInteractiveCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
          <div className="home-preview-actions mt-4">
            <SectionLink to="/testimonials" className="btn-google-pill">
              Explore All Hospital Reviews &amp; Stories
            </SectionLink>
          </div>
        </div>
      </section>

      <section className="home-preview-section home-preview-faq" aria-labelledby="home-preview-faq-title">
        <div className="container">
          <PreviewHeading
            id="home-preview-faq-title"
            title="Frequently Asked"
            accent="Questions"
            description="Essential answers regarding hospital deployment speed, clinical staff training, ABDM compliance, and 24/7 technical support."
          />
          <HomeFaqAccordion />
          <div className="home-preview-actions mt-4">
            <SectionLink to="/faq" className="btn-google-pill">
              View All Questions &amp; Implementation Details
            </SectionLink>
          </div>
        </div>
      </section>

      <section className="home-preview-section home-preview-contact" aria-labelledby="home-preview-contact-title">
        <div className="container">
          <PreviewHeading
            id="home-preview-contact-title"
            title="Contact"
            accent="TRIO HIMS"
            description="Ready to modernize your hospital operations? Connect directly with the TRIO healthcare engineering team or schedule a live system walkthrough."
          />
          <div className="home-contact-form-preview">
            <Contact onSubmitRequest={submitDemoRequest} />
          </div>
        </div>
      </section>
    </div>
  );
}
