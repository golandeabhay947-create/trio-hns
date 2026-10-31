import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOP_FAQS = [
  {
    id: 1,
    tag: 'Platform Architecture',
    tagColor: 'blue',
    question: 'Why choose TRIO HIMS over traditional software?',
    answer: 'TRIO HIMS is a modern, unified hospital management platform that eliminates expensive proprietary hardware. It connects OPD, IPD, Diagnostics, OT, and Tally-integrated billing under one single intuitive interface, saving staff hours every day while maintaining 100% data integrity.'
  },
  {
    id: 2,
    tag: 'Deployment & Training',
    tagColor: 'orange',
    question: 'How quickly can TRIO HIMS be deployed, and is staff training included?',
    answer: 'Deployment typically takes 3 to 7 business days depending on bed capacity. We provide comprehensive on-site and remote role-based training for doctors, nursing stations, front desk, and billing teams, backed by step-by-step video manuals and dedicated onboarding specialists.'
  },
  {
    id: 3,
    tag: 'NABH & ABDM Compliance',
    tagColor: 'green',
    question: 'Is patient data secure and compliant with NABH and ABDM standards?',
    answer: 'Yes. TRIO HIMS is built NABH-ready with immutable audit logs recording every prescription and invoice alteration. We support ABDM M1, M2, and M3 milestones (ABHA creation, verification, and longitudinal record linking) with AES-256 data encryption and automated offsite backups.'
  },
  {
    id: 4,
    tag: 'Pricing & TCO',
    tagColor: 'purple',
    question: 'How is pricing structured, and are there hidden per-seat license costs?',
    answer: 'We believe in transparent, scalable pricing tailored to your actual bed capacity and module selection. There are no surprise per-seat fees or artificial user caps, significantly reducing your total cost of ownership compared to legacy hospital ERPs.'
  },
  {
    id: 5,
    tag: '24/7 Support',
    tagColor: 'teal',
    question: 'What technical support channels are available when issues arise?',
    answer: 'Hospital operations never sleep, and neither do we. TRIO provides 24/7 live assistance via dedicated phone lines, WhatsApp direct chat, email, and one-click remote desktop troubleshooting directly from your hospital management console.'
  }
];

export default function HomeFaqAccordion() {
  const [openId, setOpenId] = useState(1); // First item open by default

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="home-faq-accordion-wrap" role="region" aria-label="Frequently Asked Questions Accordion">
      <div className="home-faq-list">
        {TOP_FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`home-faq-card ${isOpen ? 'active' : ''}`}
            >
              <button
                type="button"
                className="home-faq-trigger"
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`home-faq-body-${faq.id}`}
                id={`home-faq-header-${faq.id}`}
              >
                <div className="home-faq-meta">
                  <span className={`home-faq-category-tag tag-${faq.tagColor}`}>
                    {faq.tag}
                  </span>
                  <span className="home-faq-question-text">{faq.question}</span>
                </div>
                <div className={`home-faq-icon-bubble ${isOpen ? 'open' : ''}`} aria-hidden="true">
                  <i className={`bi ${isOpen ? 'bi-dash-lg' : 'bi-plus-lg'}`}></i>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`home-faq-body-${faq.id}`}
                    role="region"
                    aria-labelledby={`home-faq-header-${faq.id}`}
                    className="home-faq-collapse"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: { height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.2 } }
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: { height: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.15 } }
                    }}
                  >
                    <div className="home-faq-body-inner">
                      <p className="home-faq-answer-text">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
