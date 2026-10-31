import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_FAQS = [
  {
    id: 1,
    tag: 'Platform Architecture',
    tagColor: 'blue',
    category: 'Architecture',
    question: 'Why choose TRIO HIMS over traditional software?',
    answer: 'TRIO HIMS is a modern, unified hospital management platform that eliminates expensive proprietary hardware. It connects OPD, IPD, Diagnostics, OT, and Tally-integrated billing under one single intuitive interface, saving staff hours every day while maintaining 100% data integrity.'
  },
  {
    id: 2,
    tag: 'Deployment & Training',
    tagColor: 'orange',
    category: 'Deployment',
    question: 'How quickly can TRIO HIMS be deployed, and is staff training included?',
    answer: 'Deployment typically takes 3 to 7 business days depending on bed capacity. We provide comprehensive on-site and remote role-based training for doctors, nursing stations, front desk, and billing teams, backed by step-by-step video manuals and dedicated onboarding specialists.'
  },
  {
    id: 3,
    tag: 'NABH & ABDM Compliance',
    tagColor: 'green',
    category: 'Compliance',
    question: 'Is patient data secure and compliant with NABH and ABDM standards?',
    answer: 'Yes. TRIO HIMS is built NABH-ready with immutable audit logs recording every prescription and invoice alteration. We support ABDM M1, M2, and M3 milestones (ABHA creation, verification, and longitudinal record linking) with AES-256 data encryption and automated offsite backups.'
  },
  {
    id: 4,
    tag: 'Pricing & TCO',
    tagColor: 'purple',
    category: 'Pricing',
    question: 'How is pricing structured, and are there hidden per-seat license costs?',
    answer: 'We believe in transparent, scalable pricing tailored to your actual bed capacity and module selection. There are no surprise per-seat fees or artificial user caps, significantly reducing your total cost of ownership compared to legacy hospital ERPs.'
  },
  {
    id: 5,
    tag: '24/7 Support',
    tagColor: 'teal',
    category: 'Support',
    question: 'What technical support channels are available when issues arise?',
    answer: 'Hospital operations never sleep, and neither do we. TRIO provides 24/7 live assistance via dedicated phone lines, WhatsApp direct chat, email, and one-click remote desktop troubleshooting directly from your hospital management console.'
  },
  {
    id: 6,
    tag: 'Hardware & Infrastructure',
    tagColor: 'blue',
    category: 'Architecture',
    question: 'What hardware and infrastructure is needed to run TRIO HIMS?',
    answer: 'TRIO runs smoothly on standard computers, laptops, and tablets connected via your local hospital LAN or secure cloud. No expensive dedicated server rooms or proprietary hardware are required.'
  },
  {
    id: 7,
    tag: 'User Roles & Security',
    tagColor: 'orange',
    category: 'Architecture',
    question: 'Can user roles and department access permissions be customized?',
    answer: 'Yes. TRIO features Granular Role-Based Access Control (RBAC). Administrators can define exact read, write, and approval permissions for doctors, nurses, pharmacists, cashiers, and store managers, complete with tamper-proof activity logs.'
  },
  {
    id: 8,
    tag: 'Walkthrough & Live Demo',
    tagColor: 'green',
    category: 'Deployment',
    question: 'How do I book a live software walkthrough for our hospital leadership?',
    answer: 'You can request a tailored live walkthrough by clicking the "Book a Demo" button anywhere on our website, or calling our helpline at +91 902 10 23456. Our clinical IT architects will demonstrate the exact modules required for your hospital setup.'
  },
  {
    id: 9,
    tag: 'Platform Usability',
    tagColor: 'purple',
    category: 'Architecture',
    question: 'Is specialized IT knowledge required to operate TRIO HIMS?',
    answer: 'No. The interface has been designed alongside practicing clinicians and hospital staff with zero learning curve. Most front desk and nursing teams become proficient within their first working shift.'
  },
  {
    id: 10,
    tag: 'NABH & ABDM Compliance',
    tagColor: 'teal',
    category: 'Compliance',
    question: 'How does ABHA QR Scan & Share improve patient reception intake?',
    answer: 'With native ABDM M1 integration, patients scan the hospital NHA QR code via any ABDM-enabled health app. Their verified demographic information auto-fills instantly into TRIO HIMS, generating their OPD token with zero reception queue wait times.'
  }
];

export default function Faq({ isDedicated = true }) {
  const [openId, setOpenId] = useState(1);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Architecture', 'Deployment', 'Compliance', 'Pricing', 'Support'];

  const filteredFaqs = useMemo(() => {
    return ALL_FAQS.filter((faq) => {
      const matchCat = activeCategory === 'All' || faq.category === activeCategory;
      const matchSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="faq-cinematic-section py-4">
      <div className="container">
        {/* Category Filter and Search Toolbar */}
        <div className="modules-directory-controls mb-4">
          <div className="modules-search-input-wrap">
            <i className="bi bi-search" aria-hidden="true"></i>
            <input
              type="text"
              className="modules-search-field"
              placeholder="Search questions by keyword, topic, or compliance..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search questions"
            />
            {searchQuery && (
              <button
                type="button"
                className="modules-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <i className="bi bi-x"></i>
              </button>
            )}
          </div>

          <div className="modules-category-pills" role="tablist" aria-label="FAQ categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`modules-cat-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Exact Homepage Accordion Component Styling & Animations */}
        <div
          className="home-faq-accordion-wrap"
          role="region"
          aria-label="Frequently Asked Questions Accordion"
        >
          {filteredFaqs.length === 0 ? (
            <div className="modules-empty-state text-center py-5">
              <i className="bi bi-question-circle fs-1 text-muted d-block mb-3"></i>
              <h5>No answers match your search</h5>
              <p className="text-muted">Try using different keywords or selecting "All" categories.</p>
              <button
                type="button"
                className="btn btn-outline-primary btn-sm mt-2"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="home-faq-list">
              {filteredFaqs.map((faq) => {
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
                      aria-controls={`faq-body-${faq.id}`}
                      id={`faq-header-${faq.id}`}
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
                          id={`faq-body-${faq.id}`}
                          role="region"
                          aria-labelledby={`faq-header-${faq.id}`}
                          className="home-faq-collapse"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                            transition: {
                              height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.2 }
                            }
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.15 }
                            }
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
          )}
        </div>
      </div>
    </section>
  );
}
