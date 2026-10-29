import React, { useState, useRef, useEffect } from 'react';

const PARALLEL_METRICS = [
  { id: 'doctors', target: 3000, label: 'Doctors' },
  { id: 'hospital', target: 250, label: 'Hospital' },
  { id: 'clients', target: 1000, label: 'Happy Clients' },
  { id: 'clinics', target: 656, label: 'Clinic Installations' }
];

function AnimatedMetricCard({ target, label, suffix = "+", isVisible, delayIndex = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return undefined;
    }

    let startTime = null;
    let animId;
    const duration = 2000; // 2.0s smooth exponential count

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Google-style smooth ease-out exponential deceleration
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isVisible, target]);

  return (
    <div 
      className={`google-stat-card ${isVisible ? 'card-revealed' : ''}`}
      style={{ '--reveal-delay': `${delayIndex * 0.08}s` }}
    >
      <div className="google-stat-card-sheen" aria-hidden="true"></div>
      <div className="google-stat-card-inner">
        <div className="google-stat-num-row">
          <span className="google-stat-number">{count.toLocaleString()}</span>
          <span className="google-stat-suffix">{suffix}</span>
        </div>
        <div className="google-stat-label">{label}</div>
      </div>
    </div>
  );
}



const SLIDES = [
  {
    id: 'why-choose',
    number: '01',
    category: 'Why Choose TRIO',
    highlight: '200+ Hospitals Across India & Abroad',
    desc: '10+ years domain expertise with 27+ hospital modules unified in one simple, sustainable & scalable enterprise cloud architecture.',
    metricNum: '200+',
    metricUnit: 'Hospitals Connected',
    metricSub: 'Active deployments across India & international',
    statusBadge: 'Live Network 99.98%',
    statusDot: 'dot-blue',
    themeColor: '#1a73e8',
    glowClass: 'aura-blue',
    videoSrc: '/assets/video/1.mp4',
    icon: 'bi-shield-check',
    chips: ['10+ Years Trust', '200+ Hospitals', '27+ Modules', '24/7 Dedicated Support'],
    highlights: [
      'Comprehensive multi-specialty coverage in one unified cloud system',
      'Proven 99.98% uptime with seamless hospital chain deployment',
      'Zero maintenance headache with automatic compliance updates'
    ]
  },
  {
    id: 'technology',
    number: '02',
    category: 'Technology',
    highlight: 'Web & Machine Interfacing',
    desc: 'Web/cloud-based multi-level framework with auto-analyzer interfacing, scalable database clustering & bi-directional ASTM/HL7 compliance.',
    metricNum: '< 50ms',
    metricUnit: 'Machine Sync Latency',
    metricSub: 'Bi-directional LIS / HIS connection',
    statusBadge: 'Machine Sync < 50ms',
    statusDot: 'dot-purple',
    themeColor: '#ffc53d',
    glowClass: 'aura-gold',
    videoSrc: '/assets/video/2.mp4',
    icon: 'bi-rocket-takeoff-fill',
    chips: ['Cloud & Web-Based', 'Machine Interfacing', 'Data Security', 'Bi-Directional LIS'],
    highlights: [
      'Auto-analyzer bi-directional interfacing with zero human error',
      'Instant HL7 / ASTM protocol parsing with DICOM PACS integration',
      'Multi-tier encrypted cloud architecture with role-based governance'
    ]
  },
  {
    id: 'management',
    number: '03',
    category: 'Management',
    highlight: 'Zero Revenue Leakage',
    desc: 'Methodical automated reporting, KPI tracking, clinical decision support & strict financial controls to stop revenue leaks before they happen.',
    metricNum: '100%',
    metricUnit: 'Audited & Protected',
    metricSub: 'Zero billing leakage guarantee',
    statusBadge: 'Audit Status Zero-Leak',
    statusDot: 'dot-amber',
    themeColor: '#f87820',
    glowClass: 'aura-orange',
    videoSrc: '/assets/video/3.mp4',
    icon: 'bi-box-seam-fill',
    chips: ['KPI Analytics', 'Stop Revenue Leakage', 'Role-Based Security', 'Executive Dashboard'],
    highlights: [
      'Pre-billing tariff validation stops unbilled services instantly',
      'Real-time executive KPI dashboards with automated revenue alerts',
      'Comprehensive cashier reconciliation and insurance claim scrubbing'
    ]
  },
  {
    id: 'clinical',
    number: '04',
    category: 'Clinical Benefits',
    highlight: 'Automated Operations',
    desc: 'Enhance doctor-patient communication, automate routine clinical tasks, eliminate paper latency & simplify overall hospital operations.',
    metricNum: '10x',
    metricUnit: 'Faster Operations',
    metricSub: 'Accelerated patient care turnaround',
    statusBadge: 'Auto-Pipeline Active',
    statusDot: 'dot-green',
    themeColor: '#ed1b24',
    glowClass: 'aura-red',
    videoSrc: '/assets/video/4.mp4',
    icon: 'bi-plus-circle-fill',
    chips: ['Automate Tasks', 'Care Coordination', 'Data Accuracy', 'Instant EMR Access'],
    highlights: [
      'Automated triage, doctor queue, pharmacy and lab routing',
      'Smart e-prescriptions with drug-interaction warning safety checks',
      'One-click discharge summary generation saving 45+ minutes per patient'
    ]
  }
];

export default function Counts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const slideRefs = useRef([]);

  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(motionPreference.matches);
    motionPreference.addEventListener('change', updatePreference);
    return () => motionPreference.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const slides = slideRefs.current.filter(Boolean);
    if (!slides.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSlide = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSlide) {
          setActiveIndex(Number(visibleSlide.target.dataset.slideIndex));
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-20% 0px -30% 0px' }
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index) => {
    const safeIndex = Math.max(0, Math.min(index, SLIDES.length - 1));
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    slideRefs.current[safeIndex]?.scrollIntoView({ behavior, block: 'center' });
    setActiveIndex(safeIndex);
  };

  return (
    <section id="counts" className="stats-strip-white">
      <div className="container">
        {/* =========================================================
            CINEMATIC MINI-SCREEN CONSOLE (SEPARATE SCROLL)
            Left: 1:1 Aspect Ratio Video Frame
            Right: Premium Liquid-Glass Info Panel
            ========================================================= */}
        <div className="mini-screen-container">

          {/* Minimal Floating Right Dots (Positioned cleanly outside inner box, inside container) */}
          <div id="why-us" className="mini-screen-floating-dots" aria-label="Why Choose TRIO topics">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollToSlide(idx)}
                className={`floating-dot-pill ${activeIndex === idx ? 'pill-active' : ''}`}
                title={s.category}
                aria-label={`Scroll to ${s.category}`}
                aria-pressed={activeIndex === idx}
              >
                <span>{s.category}</span>
              </button>
            ))}
          </div>

          {/* Natural document-flow sequence */}
          <div className="mini-screen-viewport">
            {SLIDES.map((slide, idx) => (
              <div 
                key={slide.id} 
                ref={(element) => { slideRefs.current[idx] = element; }}
                className={`mini-screen-slide ${slide.glowClass}`}
                data-slide-index={idx}
              >
                {/* 2-Column Responsive Layout: Left 1:1 Video, Right Info */}
                <div className="slide-content-grid">
                  
                  {/* =========================================================
                      LEFT COLUMN: 1:1 ASPECT RATIO VIDEO CARD
                      ========================================================= */}
                  <div className="slide-video-col">
                    <div className="slide-video-square-card liquid-glass-strong">
                      <div className="liquid-glass-beam"></div>
                      
                      {/* 1:1 Video Container - Clean Full View */}
                      <div className="square-video-ratio-box">
                        <video
                          className="square-video-element"
                          src={slide.videoSrc}
                          loop
                          muted
                          playsInline
                          autoPlay={!reduceMotion}
                          controls={reduceMotion}
                          preload="auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* =========================================================
                      RIGHT COLUMN: PREMIUM LIQUID-GLASS INFO PANEL
                      ========================================================= */}
                  <div className="slide-info-col">
                    {/* Header upon that box, not inside it, in white like intelligence text */}
                    <h2 className="slide-panel-top-title">
                      {slide.category}
                    </h2>

                    <div className="slide-info-panel liquid-glass">
                      <div className="liquid-glass-beam"></div>

                      {/* Main Headline */}
                      <h3 className="slide-main-heading">
                        {slide.highlight}
                      </h3>

                      {/* Description Text */}
                      <p className="slide-main-desc">
                        {slide.desc}
                      </p>

                      {/* Prominent Metric Strip */}
                      <div className="slide-metric-callout">
                        <div className="metric-large" style={{ color: slide.themeColor }}>
                          {slide.metricNum}
                        </div>
                        <div className="metric-details">
                          <span className="metric-unit-text">{slide.metricUnit}</span>
                          <span className="metric-sub-text">{slide.metricSub}</span>
                        </div>
                      </div>

                      {/* Key Architectural Highlights */}
                      <div className="slide-highlights-list">
                        {slide.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="slide-highlight-item">
                            <i className="bi bi-check-circle-fill me-2" style={{ color: slide.themeColor }}></i>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Scannable Feature Chips */}
                      <div className="slide-chips-row mt-3">
                        {slide.chips.map((chip, cIdx) => (
                          <span key={cIdx} className="slide-chip-item">
                            {chip}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

        {/* =========================================================
            PARALLEL EXECUTIVE SHOWCASE (PARALLEL TO MINI-SCREEN)
            Spans parallel width with generous left/right space and premium styling.
            ========================================================= */}
        {/* =========================================================
            PARALLEL EXECUTIVE SHOWCASE (PARALLEL TO MINI-SCREEN)
            Spans parallel width with generous left/right space and premium styling.
            ========================================================= */}
        <div className="mini-screen-parallel-showcase">
          <div className="quote-glass-stage-wrap">
            <div className="quote-callout-card quote-glass-card">
              <div className="liquid-glass-beam"></div>
              <div className="quote-callout-inner">
                {/* Premium Sculpted Glass Quotation Mark */}
                <div className="quote-premium-glyph" aria-hidden="true">
                  <svg width="38" height="28" viewBox="0 0 38 28" fill="none">
                    <path d="M0 16.8C0 7.5 6.2 1.9 15.4 0L17.2 3.8C10.8 5.3 8 8.4 7.7 12.5H15.4V28H0V16.8ZM20.6 16.8C20.6 7.5 26.8 1.9 36 0L37.8 3.8C31.4 5.3 28.6 8.4 28.3 12.5H36V28H20.6V16.8Z" fill="url(#premiumQuoteGradient)" />
                    <defs>
                      <linearGradient id="premiumQuoteGradient" x1="0" y1="0" x2="38" y2="28" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ffc53d" />
                        <stop offset="0.5" stopColor="#f87820" />
                        <stop offset="1" stopColor="#ed1b24" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <p className="quote-callout-text">
                  Remove paperwork and gather all your hospital’s data digitally with accuracy and precision.
                  <span className="quote-close-glyph" aria-hidden="true">
                    <svg width="26" height="20" viewBox="0 0 38 28" fill="none">
                      <g transform="rotate(180 19 14)">
                        <path d="M0 16.8C0 7.5 6.2 1.9 15.4 0L17.2 3.8C10.8 5.3 8 8.4 7.7 12.5H15.4V28H0V16.8ZM20.6 16.8C20.6 7.5 26.8 1.9 36 0L37.8 3.8C31.4 5.3 28.6 8.4 28.3 12.5H36V28H20.6V16.8Z" fill="url(#premiumQuoteGradient)" />
                      </g>
                    </svg>
                  </span>
                </p>
                <div className="quote-author-tag">
                  — TRIO HIMS
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* =========================================================
          FULL-WIDTH FRAMED STATS STRIP WITH TOP & BOTTOM BLACK LINES
          Black line UPON the cards, and black line BELOW the cards
          Cards placed close/near to the lines
          ========================================================= */}
      <div className="stats-metric-strip-band">
        <div className="container">
          <div ref={statsRef} className="parallel-stats-strip-grid">
            {PARALLEL_METRICS.map((stat, idx) => (
              <AnimatedMetricCard
                key={stat.id}
                target={stat.target}
                label={stat.label}
                suffix="+"
                isVisible={statsVisible}
                delayIndex={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
