import React from 'react';
import { modulesData } from '../data/modulesData';

function FeaturePill({ module, index, orbit }) {
  const positionIndex = Math.floor(index / 2);
  const startAngle = orbit === 'outer' ? 0 : 25;
  const angle = startAngle + positionIndex * 40;
  const radius = orbit === 'outer' ? 390 : 240;
  const radians = (angle * Math.PI) / 180;
  const x = (Math.cos(radians) * radius / 1050) * 100;
  const y = (Math.sin(radians) * radius / 820) * 100;

  return (
    <article
      className={`key-feature-pill ${index % 3 === 0 ? 'key-feature-pill-accent' : ''}`}
      key={module.id}
      style={{
        '--orbit-x': `${x}%`,
        '--orbit-y': `${y}%`,
        '--feature-index': index
      }}
    >
      <i className={`bx ${module.icon}`} aria-hidden="true"></i>
      <span>{module.shortTitle}</span>
    </article>
  );
}

export default function KeyFeatures() {
  return (
    <section id="key-features" className="key-features-section" aria-labelledby="key-features-title">
      <div className="container">
        <div className="google-modules-header text-center">
          <h2 id="key-features-title" className="section-title-google">
            Key Features <span className="text-gradient-gemini">of TRIO</span>
          </h2>
          <p className="key-features-intro">
            Connected workflows across the hospital, from patient intake to clinical and operational teams.
          </p>
        </div>

        <div className="key-features-hub">
          <div className="key-features-orbit" role="group" aria-label="TRIO HIMS product modules">
            <svg className="key-features-ring-art" viewBox="0 0 360 360" aria-hidden="true">
              <defs>
                <pattern id="feature-tech-grid" width="18" height="18" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#f87820" fillOpacity=".22" />
                  <path d="M2 2h7m-7 0v7" stroke="#f87820" strokeOpacity=".08" strokeWidth=".7" />
                </pattern>
                <radialGradient id="feature-core-glow">
                  <stop offset="0" stopColor="#fff8df" />
                  <stop offset="1" stopColor="#fff" stopOpacity=".15" />
                </radialGradient>
              </defs>
              <circle cx="180" cy="180" r="168" fill="url(#feature-core-glow)" />
              <circle cx="180" cy="180" r="168" fill="none" stroke="#f87820" strokeOpacity=".28" />
              <circle cx="180" cy="180" r="148" fill="none" stroke="#ed1b24" strokeOpacity=".18" strokeDasharray="2 6" />
              <circle cx="180" cy="180" r="126" fill="none" stroke="#ffc53d" strokeOpacity=".65" strokeWidth="1.5" />
              <circle cx="180" cy="180" r="106" fill="none" stroke="#f87820" strokeOpacity=".25" />
              <circle cx="180" cy="180" r="86" fill="url(#feature-tech-grid)" stroke="#f87820" strokeOpacity=".28" />
              <path d="M180 12v26m0 284v26M12 180h26m284 0h26M61 61l18 18m202 202 18 18m0-238-18 18M79 281l-18 18" stroke="#c94d13" strokeOpacity=".34" />
              <circle cx="180" cy="12" r="3" fill="#ed1b24" />
              <circle cx="348" cy="180" r="3" fill="#f87820" />
              <circle cx="180" cy="348" r="3" fill="#ffc53d" />
              <circle cx="12" cy="180" r="3" fill="#f87820" />
            </svg>

            <div className="key-features-center">
              <img src="/assets/img/trio-logo.png" alt="TRIO Corporation" loading="lazy" decoding="async" />
              <strong>TRIO HIMS</strong>
              <span>Hospital information management</span>
            </div>

            {modulesData.map((module, index) => (
              <FeaturePill
                key={module.id}
                module={module}
                index={index}
                orbit={index % 2 === 0 ? 'outer' : 'inner'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
