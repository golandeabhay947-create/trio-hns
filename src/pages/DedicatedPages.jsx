import React from 'react';
import { Link } from 'react-router-dom';
import './dedicated-pages.css';
import Hero from '../components/Hero';
import HomePagePreviews from './HomePagePreviews';
import Counts from '../components/Counts';
import TrustedBy from '../components/TrustedBy';
import CompanyIntro from '../components/CompanyIntro';
import KeyFeatures from '../components/KeyFeatures';
import Modules from '../components/Modules';
import AppointmentSection from '../components/AppointmentSection';
import Workflows from '../components/Workflows';
import InteractiveWorkflowJourney from '../components/demos/InteractiveWorkflowJourney';
import Faq from '../components/Faq';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

function DedicatedPage({ title, accent, intro, children }) {
  const fullTitle = accent ? `${title} ${accent}` : title;

  return (
    <div className="dedicated-page">
      <header className="dedicated-page-header">
        <div className="container text-center">
          {/* New TRIO HIMS Logo Integration */}
          <div className="dedicated-page-brand-bar">
            <Link to="/" className="dedicated-header-logo-link" aria-label="TRIO HIMS Home">
              <img
                src="/assets/img/trio-logo.png"
                alt="TRIO HIMS - Simplifying Tomorrow"
                className="dedicated-header-logo"
              />
            </Link>
          </div>

          {/* Breadcrumb Navigation */}
          <div className="dedicated-breadcrumb">
            <Link to="/">Home</Link>
            <i className="bi bi-chevron-right" aria-hidden="true"></i>
            <span>{fullTitle}</span>
          </div>

          {/* Dynamic Page Header Title */}
          <h1 className="section-title-google dedicated-dynamic-title">
            {title} {accent ? <span className="text-gradient-gemini">{accent}</span> : null}
          </h1>

          {/* Introduction Copy */}
          <p className="dedicated-page-intro">{intro}</p>
        </div>
      </header>
      {children}
    </div>
  );
}

export function HomePage({ scrolled, onOpenModal }) {
  return (
    <>
      <Hero scrolled={scrolled} onOpenModal={onOpenModal} />
      <HomePagePreviews />
      <section id="company-intro" className="company-intro-section">
        <div className="container">
          <CompanyIntro />
        </div>
      </section>
    </>
  );
}

export function WhyChoosePage() {
  return (
    <DedicatedPage
      title="Why Choose"
      accent="Us"
      intro="Engineered over 10+ years of healthcare IT innovation and deployed in 200+ hospitals, TRIO HIMS connects clinical desks, diagnostics, and finance into one unified platform with zero revenue leakage and 99.98% operational uptime."
    >
      <Counts />
    </DedicatedPage>
  );
}

export function HospitalModulesPage({ onOpenModal }) {
  return (
    <DedicatedPage
      title="Hospital"
      accent="Modules"
      intro="Explore TRIO HIMS’s 20 specialized hospital management modules, purpose-built to unify outpatient, inpatient, laboratory, radiology, pharmacy, and financial operations."
    >
      <Modules onOpenModal={onOpenModal} />
    </DedicatedPage>
  );
}

export function TrustedByPage() {
  return (
    <DedicatedPage
      title="Our Trusted"
      accent="Partners"
      intro="Trusted by premier multi-speciality hospitals, research foundations, and surgical institutes across India and international healthcare markets."
    >
      <TrustedBy />
    </DedicatedPage>
  );
}

export function KeyFeaturesPage({ onOpenModal }) {
  return (
    <DedicatedPage
      title="Key"
      accent="Features"
      intro="Explore TRIO HIMS's architectural pillars and clinical capabilities designed to connect hospital modules and workflows seamlessly across departments."
    >
      <KeyFeatures onOpenModal={onOpenModal} />
    </DedicatedPage>
  );
}

export function WorkflowsPage({ onOpenModal }) {
  return (
    <DedicatedPage
      title="HIMS Work"
      accent="Flows"
      intro="Experience how TRIO HIMS orchestrates continuous patient journeys across outpatient consultations, emergency triage, nursing stations, OT suites, and automated TPA billing."
    >
      <div className="container py-4">
        <InteractiveWorkflowJourney />
      </div>
      <Workflows onOpenModal={onOpenModal} />
    </DedicatedPage>
  );
}

export function TestimonialsPage() {
  return (
    <DedicatedPage
      title="Clinician"
      accent="Testimonials"
      intro="Discover why over 3,000 doctors, surgeons, and healthcare administrators trust TRIO HIMS to manage their daily hospital operations and clinical documentation."
    >
      <Testimonials />
    </DedicatedPage>
  );
}

export function FaqPage() {
  return (
    <DedicatedPage
      title="Frequently Asked"
      accent="Questions"
      intro="Clear, verified answers regarding TRIO HIMS system capabilities, rapid hospital onboarding, ABDM/NABH compliance, and 24/7 technical support."
    >
      <Faq />
    </DedicatedPage>
  );
}

export function ContactPage() {
  return (
    <DedicatedPage
      title="Contact"
      accent="TRIO HIMS"
      intro="Connect directly with TRIO healthcare architects to discuss your hospital's operational requirements, request custom pricing, or schedule a tailored live system walkthrough."
    >
      <Contact />
    </DedicatedPage>
  );
}
