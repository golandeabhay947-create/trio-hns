import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import KeyFeatures from '../components/KeyFeatures';
import TrustedBy from '../components/TrustedBy';
import ProductDemoHub from '../components/demos/ProductDemoHub';
import { submitDemoRequest } from '../lib/submitDemoRequest';
import { modulesData } from '../data/modulesData';
import { testimonialsData } from '../data/testimonialsData';
import './home-page-previews.css';

const WHY_TRIO_ITEMS = [
  {
    title: 'Hospital-Centric Design',
    icon: 'bi-hospital-fill',
    description: 'Engineered specifically for clinical, administrative, and multi-speciality operational healthcare workflows.'
  },
  {
    title: 'Quality Personnel & Support',
    icon: 'bi-people-fill',
    description: '10+ years of healthcare IT domain expertise backed by 24/7 dedicated implementation and onboarding engineers.'
  },
  {
    title: 'Innovation & Scalability',
    icon: 'bi-lightbulb-fill',
    description: 'Scalable cloud-ready architecture unifying 18+ comprehensive hospital management modules in real time.'
  },
  {
    title: 'Secure & Compliant',
    icon: 'bi-shield-check',
    description: 'Standardized NABH-ready clinical documentation, ISO 27001 data safeguards, and ABDM ecosystem alignment.'
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
  const previewTestimonials = testimonialsData.slice(0, 2);
  const previewFeatures = modulesData.slice(0, 6);

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
                <article className="home-why-subcard" key={item.title}>
                  <div className="home-why-subcard-header">
                    <span className="home-why-subcard-icon" aria-hidden="true">
                      <i className={`bi ${item.icon}`}></i>
                    </span>
                    <span className="home-why-subcard-num">0{idx + 1}</span>
                  </div>
                  <h3 className="home-why-subcard-title">{item.title}</h3>
                  <p className="home-why-subcard-desc">{item.description}</p>
                </article>
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
              description="Explore TRIO HIMS’s complete suite of 18 integrated hospital management modules spanning clinical, diagnostic, pharmacy, and administrative departments."
            />
            <div className="home-module-grid-wrap">
              <ul className="home-module-subcards-grid">
                {modulesData.map((module) => (
                  <li className="home-module-subcard" key={module.id}>
                    <Link to={`/modules/${module.id}`} className="home-module-subcard-link">
                      <div className="home-module-subcard-top">
                        <span className="home-module-icon-squircle" aria-hidden="true">
                          <i className={`bx ${module.icon}`}></i>
                        </span>
                        <span className="home-module-category-badge">{module.category}</span>
                      </div>
                      <h3 className="home-module-subcard-title">{module.shortTitle || module.title}</h3>
                      <p className="home-module-subcard-desc">{module.description}</p>
                      <div className="home-module-subcard-footer">
                        <span className="home-module-explore-label">Explore Capabilities</span>
                        <i className="bi bi-arrow-right" aria-hidden="true"></i>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="home-preview-actions home-modules-cta-row">
              <SectionLink to="/hospital-modules" className="btn-google-pill">
                See All Modules
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
            description="See how connected steps carry patient information between hospital teams and services without data silos."
          />
          <div className="home-workflows-preview-card">
            <div className="home-workflow-path-row">
              <span className="workflow-path-chip"><i className="bi bi-person-plus-fill me-1"></i> Registration</span>
              <i className="bi bi-arrow-right workflow-path-arrow"></i>
              <span className="workflow-path-chip"><i className="bi bi-heart-pulse-fill me-1"></i> Consultation</span>
              <i className="bi bi-arrow-right workflow-path-arrow"></i>
              <span className="workflow-path-chip"><i className="bi bi-droplet-fill me-1"></i> Diagnostics</span>
              <i className="bi bi-arrow-right workflow-path-arrow"></i>
              <span className="workflow-path-chip"><i className="bi bi-capsule me-1"></i> Pharmacy</span>
              <i className="bi bi-arrow-right workflow-path-arrow"></i>
              <span className="workflow-path-chip"><i className="bi bi-receipt-cutoff me-1"></i> Billing</span>
              <i className="bi bi-arrow-right workflow-path-arrow"></i>
              <span className="workflow-path-chip"><i className="bi bi-check2-circle me-1"></i> Follow-up</span>
            </div>
            <div className="home-preview-actions mt-3">
              <SectionLink to="/workflows">Explore Full Workflows & Architecture</SectionLink>
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
            description="A selection of clinician perspectives already featured on the TRIO HIMS website."
          />
          <div className="home-testimonial-grid">
            {previewTestimonials.map((testimonial) => (
              <blockquote className="home-testimonial-card" key={testimonial.id}>
                <i className="bi bi-quote home-testimonial-mark" aria-hidden="true"></i>
                <p>{testimonial.quote}</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.designation}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="home-preview-actions">
            <SectionLink to="/testimonials">Read More Testimonials</SectionLink>
          </div>
        </div>
      </section>

      <section className="home-preview-section home-preview-faq" aria-labelledby="home-preview-faq-title">
        <div className="container">
          <PreviewHeading
            id="home-preview-faq-title"
            title="Frequently Asked"
            accent="Questions"
            description="Quick answers to a few common questions about TRIO HIMS."
          />
          <div className="home-preview-actions">
            <SectionLink to="/faq">View All FAQs</SectionLink>
          </div>
        </div>
      </section>

      <section className="home-preview-section home-preview-contact" aria-labelledby="home-preview-contact-title">
        <div className="container">
          <PreviewHeading
            id="home-preview-contact-title"
            title="Contact"
            accent="TRIO HIMS"
            description="Have a question or want to see the system? Get in touch with the TRIO team."
          />
          <div className="home-contact-form-preview">
            <Contact onSubmitRequest={submitDemoRequest} />
          </div>
        </div>
      </section>
    </div>
  );
}
