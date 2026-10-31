import React, { useState, useMemo } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import TestimonialInteractiveCard from './TestimonialInteractiveCard';

export default function Testimonials() {
  const [activeSpecialty, setActiveSpecialty] = useState('All');
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const specialties = ['All', 'Surgery', 'Paediatrics', 'Ophthalmology', 'OB/GYN', 'Hospital Leadership'];

  const filteredTestimonials = useMemo(() => {
    return testimonialsData.filter((doc) => {
      if (activeSpecialty === 'All') return true;
      if (activeSpecialty === 'Surgery') return doc.designation.toLowerCase().includes('surgeon');
      if (activeSpecialty === 'Paediatrics') return doc.designation.toLowerCase().includes('paediatric');
      if (activeSpecialty === 'Ophthalmology') return doc.designation.toLowerCase().includes('eye');
      if (activeSpecialty === 'OB/GYN') return doc.designation.toLowerCase().includes('gynecologist');
      if (activeSpecialty === 'Hospital Leadership') return doc.designation.toLowerCase().includes('hospital');
      return true;
    });
  }, [activeSpecialty]);

  const featuredDoc = testimonialsData[featuredIndex];

  return (
    <section id="testimonials" className="testi-cinematic-section py-4">
      <div className="container">
        {/* Trust Credibility Banner */}
        <div className="testi-trust-banner mb-5">
          <div className="row g-3 text-center">
            <div className="col-md-3 col-6">
              <div className="trust-stat-box">
                <div className="trust-stat-number">10+ Years</div>
                <div className="trust-stat-label">Healthcare Innovation</div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="trust-stat-box">
                <div className="trust-stat-number">200+</div>
                <div className="trust-stat-label">Hospitals Deployed</div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="trust-stat-box">
                <div className="trust-stat-number">3,000+</div>
                <div className="trust-stat-label">Active Clinicians</div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="trust-stat-box">
                <div className="trust-stat-number">4.9 / 5</div>
                <div className="trust-stat-label">Average Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Clinician Spotlight Card */}
        <div className="testi-spotlight-card mb-5">
          <div className="testi-card-top-bar">
            <div className="testi-meta-left">
              <div className="testi-stars-row">
                {[...Array(featuredDoc.rating)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill text-warning" aria-hidden="true" />
                ))}
              </div>
              <span className="testi-verified-tag">
                <i className="bi bi-patch-check-fill text-primary me-1" aria-hidden="true" />
                Featured Hospital Partner Review
              </span>
            </div>

            <div className="testi-nav-controls">
              <span className="testi-counter-badge">
                <strong>0{featuredIndex + 1}</strong> / 0{testimonialsData.length}
              </span>
            </div>
          </div>

          <div className="testi-quote-body">
            <div className="testi-quote-mark">
              <i className="bi bi-quote" aria-hidden="true" />
            </div>
            <blockquote className="testi-quote-content">
              &ldquo;{featuredDoc.quote}&rdquo;
            </blockquote>
          </div>

          <div className="testi-doctor-bar">
            <div className="testi-avatar-wrapper">
              <img
                src={featuredDoc.image}
                alt={featuredDoc.name}
                className="testi-avatar-img"
                onError={(e) => {
                  e.target.src = '/assets/img/testimonials/dr.satish.png';
                }}
              />
            </div>
            <div className="testi-doctor-details">
              <div className="testi-doctor-name">{featuredDoc.name}</div>
              <div className="testi-doctor-role">{featuredDoc.designation}</div>
              <div className="testi-doctor-location">
                <i className="bi bi-geo-alt-fill text-muted me-1" aria-hidden="true" />
                {featuredDoc.location}
              </div>
            </div>
          </div>

          {/* Quick Doctor Dock Selector */}
          <div className="testi-doctor-dock mt-4">
            {testimonialsData.map((doc, idx) => {
              const isActive = idx === featuredIndex;
              return (
                <button
                  key={doc.id}
                  type="button"
                  className={`testi-dock-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setFeaturedIndex(idx)}
                  title={doc.name}
                  aria-label={`Select ${doc.name}`}
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="testi-dock-avatar"
                    onError={(e) => {
                      e.target.src = '/assets/img/testimonials/dr.satish.png';
                    }}
                  />
                  <span className="testi-dock-name">{doc.name.replace('Hospital', 'Hosp.')}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* All Clinician Reviews Grid with Dribbble-Style 3D Tilt Micro-Interactions */}
        <div className="testi-full-grid-wrap pt-3">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
            <div>
              <h3 className="fs-5 fw-bold text-main mb-1">
                Verified Clinician Reviews &amp; <span className="text-gradient-gemini">Endorsements</span>
              </h3>
              <p className="text-secondary fs-7 mb-0">
                Interactive clinician cards with doctor avatars, star ratings, and smooth 3D tilt micro-interactions
              </p>
            </div>

            {/* Specialty Filter Pills */}
            <div className="modules-category-pills m-0" role="tablist" aria-label="Specialty filter">
              {specialties.map((spec) => (
                <button
                  key={spec}
                  type="button"
                  className={`modules-cat-pill ${activeSpecialty === spec ? 'active' : ''}`}
                  onClick={() => setActiveSpecialty(spec)}
                  role="tab"
                  aria-selected={activeSpecialty === spec}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>

          <div className="home-testimonial-grid">
            {filteredTestimonials.map((doc) => (
              <TestimonialInteractiveCard
                key={doc.id}
                testimonial={doc}
                featured={doc.id === featuredDoc.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
