import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import KeyFeatures from '../components/KeyFeatures';
import TrustedBy from '../components/TrustedBy';
import { submitDemoRequest } from '../lib/submitDemoRequest';
import { modulesData } from '../data/modulesData';
import { testimonialsData } from '../data/testimonialsData';
import './home-page-previews.css';

const WHY_TRIO_ITEMS = [
  { title: 'Hospital-Centric Design', icon: 'bi-hospital-fill' },
  { title: 'Quality Personnel', icon: 'bi-people-fill' },
  { title: 'Innovation', icon: 'bi-lightbulb-fill' },
  { title: 'Secure & Compliant', icon: 'bi-shield-check' },
  { title: 'Scalable Solution', icon: 'bi-graph-up-arrow' },
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
          <div className="home-why-card">
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
            </div>

            <div className="home-why-grid">
              {WHY_TRIO_ITEMS.map((item) => (
                <article className="home-why-feature-card" key={item.title}>
                  <span className="home-why-feature-icon" aria-hidden="true">
                    <i className={`bi ${item.icon}`}></i>
                  </span>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>

            <div className="home-why-center">
              <div className="home-why-center-icon" aria-hidden="true">
                <i className="bi bi-hospital-fill"></i>
              </div>
              <SectionLink to="/why-choose-trio" className="btn-google-pill home-why-cta">
                See Why Choose Us
              </SectionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="home-preview-section home-preview-modules" aria-labelledby="home-preview-modules-title">
        <div className="container">
          <PreviewHeading
            id="home-preview-modules-title"
            title="Hospital"
            accent="Modules"
          />
          <div className="home-module-container">
            <ul className="home-module-grid">
              {modulesData.map((module) => (
                <li className="home-module-item" key={module.id}>
                  <div className="home-module-card-heading">
                    <span className="home-module-icon" aria-hidden="true">
                      <i className={`bx ${module.icon}`}></i>
                    </span>
                    <span className="home-module-category">{module.category}</span>
                  </div>
                  <h3 className="home-module-title">{module.title}</h3>
                  <p className="home-module-description">{module.description}</p>
                </li>
              ))}
            </ul>
            <div className="home-preview-actions">
              <SectionLink to="/hospital-modules">See All Modules</SectionLink>
            </div>
          </div>
        </div>
      </section>

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
            description="See how connected steps carry patient information between hospital teams and services."
          />
          <div className="home-preview-actions">
            <SectionLink to="/workflows">Explore Workflows</SectionLink>
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
