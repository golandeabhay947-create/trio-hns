TRIO HIMS Project Knowledge
=========================

This document captures the architecture, runtime dependencies, and cleanup decisions for the current TRIO HIMS React website project so it can be understood without direct access to the original local VS Code workspace.

Project overview
----------------
- App type: Vite + React single-page application
- Primary purpose: hospital information management system marketing / product showcase website
- Main route: landing page with anchor-based sections
- Secondary route: module detail page at `/modules/:moduleId`
- Build tool: Vite 5
- Package manager: npm
- Build command: `npm run build`

Verified runtime architecture
----------------------------
App bootstrap
- `index.html` contains `<div id="root"></div>` and loads `/src/main.jsx`.
- `src/main.jsx` mounts the app under `<BrowserRouter>` and includes `App` inside `React.StrictMode>`.

Main app shell
- `src/App.jsx` is the root component.
- It manages:
  - modal state for the demo request dialog
  - scroll state for sticky header transitions
  - smooth scrolling via `lenis`
  - route reset logic on path change
  - hash navigation support (`#modules`, `#faq`, etc.)
- Top-level routes:
  - `/` => landing page sections
  - `/modules/:moduleId` => module detail view

Global styling
- `src/index.css` is the global design system.
- It defines the visual language for:
  - colors and brand tokens
  - spacing and radii
  - typography
  - section layout and CTA styling
  - smooth-scroll behavior
  - hero/header styling

Primary sections rendered from the landing page
- `src/components/Navbar.jsx` — sticky top navigation, mobile menu, section highlighting
- `src/components/Hero.jsx` — typed headline, hero image, trust badges, CTAs
- `src/components/Counts.jsx` — key metrics and video/graph style section
- `src/components/CompanyIntro.jsx` — brand narrative / institution overview
- `src/components/Modules.jsx` — module grid and preview dialog
- `src/components/TrustedBy.jsx` — logos / institutions / trust statements
- `src/components/KeyFeatures.jsx` — product feature highlights
- `src/components/Workflows.jsx` — workflow visuals and CTA calls
- `src/components/AppointmentSection.jsx` — scheduling/appointment section
- `src/components/Testimonials.jsx` — clinician testimonials and photo cards
- `src/components/Faq.jsx` — FAQ accordion/content
- `src/components/Contact.jsx` — contact details/inquiry section
- `src/components/Footer.jsx` — footer branding and actions
- `src/components/DemoModal.jsx` — demo request modal
- `src/components/WhatsAppFloat.jsx` — floating WhatsApp contact button

Module data and content sources
------------------------------
- `src/data/modulesData.js` — module catalog, titles, descriptions, icons, categories, feature lists
- `src/data/workflowsData.js` — workflow images and workflow meta data
- `src/data/testimonialsData.js` — testimonials and associated images
- `src/data/faqData.js` — FAQ content
- `src/data/contactDetails.js` — email, phone, WhatsApp data used across the app

Asset strategy
--------------
- The active frontend uses static files under `public/assets`.
- Examples include:
  - `/assets/img/...`
  - `/assets/images/...`
  - `/assets/vendor/...`
  - `/assets/fonts/...`
  - `/assets/video/...`
  - `/assets/icon/...`
- `index.html` references vendor CSS under `/assets/vendor/...` and app font files under `/assets/fonts/...`.
- The project root also had a duplicated `assets/` folder that was a legacy copy and was not required by the current Vite build.

Key technical behavior
----------------------
- Lenis smooth scrolling is enabled for most browsers and disabled when reduced motion is requested.
- Navbar logic tracks the active section based on scroll position and updates header styling.
- `Modules.jsx` includes a native `<dialog>` preview modal for module previews.
- The app uses `Link` and `useNavigate` for internal route navigation and hash-based scroll behavior.
- Demographic and product copy is mostly driven by data files rather than hardcoded one-off page files.

Safe cleanup logic and evidence
-------------------------------
Only files proven not to be runtime or build-critical were removed.

Removed files
- `assets/` — duplicate static asset mirror; the app references `public/assets` instead
- `extracted_assets/` — unused extraction output
- `extracted_gemini/` — extracted tool/export artifact
- `contact_himstrio.html`, `full_himstrio.html`, `privacy_himstrio.html` — legacy standalone HTML pages not referenced by app routes
- `trio_corp_about.html`, `trio_corp_contact.html`, `trio_corp_home.html`, `trio_corp_products.html`, `trio_corp_services.html` — older static corporate pages; no app imports or route references
- `ocr_results.txt`, `parsed_full_sections.txt`, `parsed_modules.txt`, `parsed_trio_corp.txt` — analysis/extraction output files; not part of runtime/build
- `Gemini_–_Your_AI_assistant_from_Google.zip`, `TRIO_-_Hospital_Management_System.zip` — downloaded archives; not needed by the app

Protected files that were kept
- `src/` — active source code
- `public/assets/` — active static assets used by the app
- `index.html` — app entry point
- `vite.config.js` — Vite config for local development
- `package.json` and `package-lock.json` — app dependency metadata and install lockfile
- `.env` and `.env.example` — environment configuration (retained even though not currently used in this build)
- `README.md` — project documentation

Recovery and verification
-------------------------
- A git baseline commit was created before cleanup.
- The app was rebuilt successfully after cleanup with `npm run build`.
- The project remains in a working state post-cleanup.

Best practices for future UI modifications
----------------------------------------
When making UI changes, prioritize these files:
1. `src/App.jsx` for page composition and routes
2. `src/index.css` for all global styles and design tokens
3. `src/components/*` for section-specific behavior
4. `src/data/*` for content and structured product data
5. `public/assets/*` for images and static media

If a new landing-page section is requested, identify the exact component to edit and mirror the existing style conventions from `src/index.css` before making changes.

Summary
-------
The repository is a working React marketing site for TRIO HIMS. The source is organized around a central landing page, reusable section components, and structured content data. Non-runtime legacy files were safely removed after verification, and the production build still succeeds.
