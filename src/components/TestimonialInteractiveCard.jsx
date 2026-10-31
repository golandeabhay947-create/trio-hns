import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TestimonialInteractiveCard({ testimonial, featured = false }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  // Normalized cursor coordinates (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Exact Dribbble micro-interaction physics: lively spring with quick damping
  const springConfig = { stiffness: 350, damping: 25, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), springConfig);

  const handlePointerMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const normX = mouseX / rect.width - 0.5;
    const normY = mouseY / rect.height - 0.5;
    x.set(normX);
    y.set(normY);

    setGlarePos({
      x: Math.round((mouseX / rect.width) * 100),
      y: Math.round((mouseY / rect.height) * 100)
    });
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="testi-card-perspective-wrap">
      <motion.div
        ref={cardRef}
        className={`testi-interactive-card ${featured ? 'featured' : ''} ${isHovered ? 'hovered' : ''}`}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        whileHover={{
          y: -8,
          scale: 1.025,
          transition: { type: 'spring', stiffness: 350, damping: 25 }
        }}
        whileTap={{
          scale: 0.98,
          transition: { type: 'spring', stiffness: 500, damping: 30 }
        }}
      >
        {/* Dynamic Specular Sheen (Moves with Cursor) */}
        <div
          className="testi-specular-glare"
          aria-hidden="true"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.5) 0%, rgba(53, 94, 204, 0.08) 40%, transparent 70%)`
          }}
        />

        {/* Ambient Brand Accent Gradient Ring */}
        <div className="testi-card-ambient-border" aria-hidden="true" />

        {/* Top Header: Rating & Verified Hospital Tag */}
        <div className="testi-card-header-row" style={{ transform: 'translateZ(18px)' }}>
          <div className="testi-stars-group" aria-label={`${testimonial.rating || 5} out of 5 stars`}>
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <i key={i} className="bi bi-star-fill text-warning testi-star-icon" />
            ))}
          </div>
          <span className="testi-verified-pill">
            <i className="bi bi-patch-check-fill text-primary me-1" />
            <span>Verified Clinician</span>
          </span>
        </div>

        {/* Quote Content */}
        <div className="testi-card-body" style={{ transform: 'translateZ(12px)' }}>
          <div className="testi-quote-icon-wrap" aria-hidden="true">
            <i className="bi bi-quote" />
          </div>
          <p className="testi-quote-text">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>

        {/* Doctor Attribution Footer */}
        <div className="testi-card-footer-row" style={{ transform: 'translateZ(20px)' }}>
          <div className="testi-avatar-ring">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testi-avatar-pic"
              onError={(e) => {
                e.target.src = '/assets/img/testimonials/dr.satish.png';
              }}
            />
          </div>
          <div className="testi-author-info">
            <div className="testi-author-name">
              <span>{testimonial.name}</span>
              <i className="bi bi-check-circle-fill text-success testi-micro-check" title="Active Hospital Partner" />
            </div>
            <div className="testi-author-role">{testimonial.designation}</div>
            <div className="testi-author-location">
              <i className="bi bi-geo-alt-fill me-1" />
              <span>{testimonial.location}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
