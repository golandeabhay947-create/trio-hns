import React from 'react';
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

function DedicatedPage({ title, intro, children }) {
  return (
    <div className="dedicated-page">
      <header className="dedicated-page-header">
        <div className="container google-modules-header text-center">
          <h1 className="section-title-google">{title}</h1>
          <p className="dedicated-platform-intro">
            TRIO HIMS is an integrated Hospital Information Management System connecting clinical, administrative, and operational teams.
          </p>
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
      title="Why Choose TRIO"
      intro="TRIO HIMS brings hospital information and operational workflows together in one system, helping teams work with connected information across departments."
    >
      <Counts />
    </DedicatedPage>
  );
}

export function HospitalModulesPage({ onOpenModal }) {
  return (
    <DedicatedPage
      title="Hospital Modules"
      intro="Explore the hospital modules represented in TRIO HIMS and preview the information available for each one."
    >
      <Modules onOpenModal={onOpenModal} />
    </DedicatedPage>
  );
}

export function TrustedByPage() {
  return (
    <DedicatedPage
      title="Trusted By"
      intro="See the organizations and partner names presented in TRIO HIMS’s existing trust showcase."
    >
      <TrustedBy />
    </DedicatedPage>
  );
}

export function KeyFeaturesPage() {
  return (
    <DedicatedPage
      title="Key Features"
      intro="The feature map shows how TRIO HIMS connects hospital modules and workflows across patient intake, clinical care, and operations."
    >
      <KeyFeatures />
    </DedicatedPage>
  );
}

export function WorkflowsPage({ onOpenModal }) {
  return (
    <DedicatedPage
      title="HIMS Work Flows"
      intro="Experience interactive patient journeys and browse detailed architectural workflow diagrams connecting outpatient, inpatient, diagnostic, and administrative teams."
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
      title="Testimonials"
      intro="Read the clinician testimonials already featured in the TRIO HIMS website."
    >
      <Testimonials />
    </DedicatedPage>
  );
}

export function FaqPage() {
  return (
    <DedicatedPage
      title="Frequently Asked Questions"
      intro="Find answers to common questions about TRIO HIMS using the information currently available on the website."
    >
      <Faq />
    </DedicatedPage>
  );
}

export function ContactPage() {
  return (
    <DedicatedPage
      title="Contact TRIO HIMS"
      intro="Contact the TRIO team by phone, email, or enquiry form, or request a product demonstration."
    >
      <Contact />
      <AppointmentSection />
    </DedicatedPage>
  );
}
