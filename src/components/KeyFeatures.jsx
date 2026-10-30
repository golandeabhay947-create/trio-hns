import React from 'react';
import { modulesData } from '../data/modulesData';

export default function KeyFeatures({ preview = false } = {}) {
  const displayedModules = preview ? modulesData.slice(0, 6) : modulesData;

  return (
    <section id="key-features" className={preview ? 'key-features-section key-features-preview' : 'key-features-section'} aria-labelledby="key-features-title">
      <div className="container">
        <div className="google-modules-header text-center">
          <h2 id="key-features-title" className="section-title-google">
            Key Features <span className="text-gradient-gemini">of TRIO</span>
          </h2>
          <p className="key-features-intro">
            Connected workflows across the hospital, from patient intake to clinical and operational teams.
          </p>
        </div>

        <div className="key-features-tree" role="group" aria-label={preview ? 'TRIO HIMS key feature preview' : 'TRIO HIMS hospital modules'}>
          <div className="key-features-root">
            <img src="/assets/img/trio-logo.png" alt="TRIO Corporation" loading="lazy" decoding="async" />
            <strong>TRIO HIMS</strong>
            <span>Hospital information management</span>
          </div>

          <ul className="key-features-branches" aria-label={preview ? 'Featured hospital modules' : 'Hospital modules'}>
            {displayedModules.map((module, index) => (
              <li
                className="key-features-node"
                key={module.id}
                style={{ '--feature-index': index }}
              >
                <i className={`bx ${module.icon}`} aria-hidden="true"></i>
                <span>{module.shortTitle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
