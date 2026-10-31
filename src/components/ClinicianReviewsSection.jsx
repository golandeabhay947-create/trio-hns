import React from 'react';

export const CLINICIAN_REVIEWS = [
  {
    id: 'dr-patki',
    name: 'Dr. Satish Patki',
    hospital: 'Patki Hospital & Research Foundation',
    location: 'Kolhapur, Maharashtra',
    avatar: '/assets/img/testimonials/dr.satish.png',
    stars: 5,
    verified: true,
    quote:
      '“TRIO HIMS has drastically simplified our operations and streamlined our patient workflows across departments. The reliability and responsiveness of their technical team is truly commendable.”'
  },
  {
    id: 'dr-kawedia',
    name: 'Dr. Rajesh Kawedia',
    hospital: 'Kawedia Multi-Speciality Hospital',
    location: 'Pune, Maharashtra',
    avatar: '/assets/img/testimonials/dr.Kawedia.jpg',
    stars: 5,
    verified: true,
    quote:
      '“The automated billing and TPA insurance claim settlement has eliminated revenue leakages completely. With zero system downtime and flawless IPD bed management, our clinical team works with complete confidence.”'
  },
  {
    id: 'dr-bhate',
    name: 'Dr. Ravindra Bhate',
    hospital: 'Bhate Surgical & Trauma Hospital',
    location: 'Mumbai, Maharashtra',
    avatar: '/assets/img/testimonials/dr.ravindrabhate.jpeg',
    stars: 5,
    verified: true,
    quote:
      '“Transitioning to TRIO HIMS transformed our OT scheduling and surgical documentation. The EMR is exceptionally intuitive, enabling consultants to retrieve complete lab and PACS investigations in seconds.”'
  },
  {
    id: 'dr-surana',
    name: 'Dr. Dhiraj Surana',
    hospital: 'Surana Eye Institute & Research Centre',
    location: 'Bangalore, Karnataka',
    avatar: '/assets/img/testimonials/drsurana.webp',
    stars: 5,
    verified: true,
    quote:
      '“TRIO HIMS’s seamless ABHA / ABDM M1-M3 integration made digital compliance effortless for our facility. The training turnaround was remarkable—even junior nursing staff mastered the interface within hours.”'
  }
];

export function ClinicianReviewCard({ review }) {
  return (
    <div className="clinician-card-container bg-white rounded-3xl p-6 shadow-md border border-slate-100 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Top Gradient Border from Brand Orange to Brand Blue */}
      <div
        className="clinician-card-gradient-bar absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-blue-600"
        aria-hidden="true"
      />

      <div>
        {/* Top Header: 5 Stars on Left, Verified Clinician Badge on Right */}
        <div className="clinician-card-header flex items-center justify-between mb-4">
          <div className="clinician-stars-row flex items-center gap-1 text-amber-400">
            {[...Array(review.stars || 5)].map((_, i) => (
              <i key={i} className="bi bi-star-fill text-[#f59e0b]" aria-hidden="true"></i>
            ))}
          </div>

          <div className="clinician-verified-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/60 text-blue-700 text-xs font-semibold">
            <i className="bi bi-patch-check-fill text-blue-600" aria-hidden="true"></i>
            <span>Verified Clinician</span>
          </div>
        </div>

        {/* Review Body: Stylistic Peach Quote Mark & Review Text */}
        <div className="clinician-review-body">
          <span className="clinician-quote-mark text-4xl font-serif text-orange-200 leading-none select-none" aria-hidden="true">
            &ldquo;
          </span>
          <p className="clinician-review-text text-slate-700 text-[15px] leading-relaxed font-normal mt-1 mb-4">
            {review.quote.replace(/^“|”$/g, '')}
          </p>
        </div>
      </div>

      <div>
        {/* Subtle Thin Divider */}
        <hr className="clinician-card-divider border-t border-slate-100 my-4" />

        {/* Author Block */}
        <div className="clinician-author-block flex items-center gap-3.5">
          <img
            src={review.avatar}
            alt={review.name}
            className="clinician-avatar-img w-13 h-13 rounded-full object-cover border-2 border-white ring-2 ring-slate-100 shadow-sm shrink-0"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/img/testimonials/dr.satish.png';
            }}
          />
          <div className="clinician-author-info min-w-0">
            <h4 className="clinician-author-name font-bold text-slate-900 text-[15.5px] flex items-center gap-1.5 m-0 leading-snug">
              <span>{review.name}</span>
              <i className="bi bi-check-circle-fill text-green-600 text-sm clinician-check-icon" aria-label="Verified"></i>
            </h4>
            <div className="clinician-hospital-name text-slate-500 text-xs font-medium mt-0.5 truncate">
              {review.hospital}
            </div>
            <div className="clinician-location-row text-slate-400 text-xs flex items-center gap-1 mt-0.5">
              <i className="bi bi-geo-alt-fill text-slate-400 text-[11px]" aria-hidden="true"></i>
              <span>{review.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClinicianReviewsSection({ reviews = CLINICIAN_REVIEWS }) {
  return (
    <div className="clinician-reviews-section mt-5 pt-4">
      <div className="text-center mb-5">
        <div className="home-why-eyebrow d-inline-flex align-items-center gap-2 mb-2">
          <span className="home-why-eyebrow-line" aria-hidden="true"></span>
          <span className="text-uppercase fw-bold text-muted fs-8 letter-spacing-1">
            VERIFIED HEALTHCARE IMPACT
          </span>
          <span className="home-why-eyebrow-line" aria-hidden="true"></span>
        </div>
        <h3 className="section-title-google fs-2 fw-bold text-main">
          Clinician <span className="text-gradient-gemini">Reviews &amp; Testimonials</span>
        </h3>
        <p className="text-secondary fs-7 mx-auto" style={{ maxWidth: '640px' }}>
          Discover how medical directors, surgical leads, and administrators across India achieve operational excellence and zero revenue leakage with TRIO HIMS.
        </p>
      </div>

      {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="clinician-reviews-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {reviews.map((review) => (
          <ClinicianReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
