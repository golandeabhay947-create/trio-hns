export const featuresData = [
  {
    id: 1,
    title: "Paperless Electronic Medical Records (EMR / EHR)",
    category: "Clinical Excellence",
    icon: "bi-file-earmark-medical",
    badge: null,
    summary: "Longitudinal patient records uniting physician notes, ICD-10 coding, clinical templates, and allergy alerts.",
    capabilities: [
      "Specialty-specific clinical templates customized for Cardiology, Orthopaedics, Paediatrics, OB/GYN, and General Medicine",
      "Interactive E-Prescriptions with integrated dosage calculators, frequencies, duration, and allergy contraindication alerts",
      "Unified medical history timeline aggregating OPD consultations, bedside nursing vitals, lab reports, and radiology scans",
      "Digital signatures for verified consultation notes and multi-faculty peer reviews",
      "Complete patient immunization schedules and allergy warnings highlighted on all clinical screens"
    ],
    techSpecs: [
      "Standard: ICD-10, SNOMED-CT clinical coding",
      "Storage: Encrypted document vault with versioned history",
      "Access: Role-based clinical permissions per department"
    ],
    compliance: ["NABH Ready", "ISO 27001 Certified"]
  },
  {
    id: 2,
    title: "ABHA & ABDM Digital Health Mission",
    category: "Compliance & ABDM",
    icon: "bi-fingerprint",
    badge: "NEW",
    summary: "Native Ayushman Bharat Digital Mission compliance for instant 14-digit ABHA creation, QR OPD token intake, and FHIR R4 records.",
    capabilities: [
      "Milestone 1 (M1): Instant 14-digit ABHA ID creation and verification via Aadhaar OTP or Mobile OTP in seconds",
      "Scan & Share QR-Code Token Registration for zero-queue, paperless OPD reception intake",
      "Milestone 2 (HIP): Health Information Provider linking consultation notes, diagnostic reports, and discharge summaries",
      "Milestone 3 (HIU): Health Information User viewing patient-consented longitudinal external health history",
      "FHIR R4 digital record packaging strictly conforming to Indian National Health Authority (NHA) protocols"
    ],
    techSpecs: [
      "Gateway: Direct NHA ABDM M1-M3 Gateway integration",
      "Format: HL7 FHIR Release 4 standard",
      "Security: SHA-256 digital consent tokens with instant revocation"
    ],
    compliance: ["ABDM M1-M3 Certified", "NHA Approved"]
  },
  {
    id: 3,
    title: "Bi-Directional Lab Auto-Analyzer Interfacing (LIS)",
    category: "Diagnostics & Lab",
    icon: "bi-radioactive",
    badge: null,
    summary: "Automated bi-directional communication with pathology auto-analyzers, barcode tube accessioning, and panic value alerts.",
    capabilities: [
      "Native RS232 and TCP/IP ASTM/HL7 interfaces with major biochemistry, haematology, and immunology auto-analyzers",
      "Automatic barcode label generation at phlebotomy, eliminating patient specimen mix-ups",
      "Instant automated panic/critical value warnings delivered to attending physicians via SMS and console alerts",
      "Multi-stage report verification with digital signatures configured faculty-wise",
      "Cumulative test results and correlation trend graphs for chronic and repeat patients"
    ],
    techSpecs: [
      "Protocol: ASTM 1394 / HL7 bi-directional communication",
      "Hardware: Serial RS232, USB, and LAN TCP/IP socket connections",
      "Barcode: Code 128 / QR-code accession printing"
    ],
    compliance: ["NABL Aligned", "ISO 15189 Ready"]
  },
  {
    id: 4,
    title: "Radiology Information System & PACS Viewer (RIS)",
    category: "Diagnostics & Imaging",
    icon: "bi-aspect-ratio",
    badge: null,
    summary: "Modality appointment scheduling, embedded PACS DICOM web viewers, and structured multi-tier reporting for imaging.",
    capabilities: [
      "Web-based PACS DICOM viewer integrated directly inside the physician consultation desk",
      "Modality Worklist (MWL) management across CT, MRI, Ultrasound, Mammography, and Digital X-Ray",
      "Customizable diagnostic reporting templates with standard anatomical terminology",
      "Contrast media and radiology film/consumable tracking linked directly to patient invoicing",
      "Side-by-side comparative viewing tool for historical vs current radiologic studies"
    ],
    techSpecs: [
      "DICOM: Native DICOM 3.0 streaming and PACS store-and-forward",
      "Viewer: Zero-footprint HTML5 WebGL DICOM viewer",
      "Security: Watermarked image export with audit logs"
    ],
    compliance: ["DICOM 3.0 Standard", "AERB Compliant"]
  },
  {
    id: 5,
    title: "Multi-Tariff Cashless & Insurance Billing",
    category: "Revenue & Finance",
    icon: "bi-cash-coin",
    badge: null,
    summary: "Automated billing across cash, corporate, and private insurance with negotiated tariffs, co-pay rules, and zero revenue leakage.",
    capabilities: [
      "Multi-tariff master supporting independent rate matrices for General Cash, Corporate, Private TPA, CGHS, and State Schemes",
      "Live IPD bill audits tracking ward nursing care, doctor bedside rounds, and consumable consumption in real-time",
      "Cashless insurance pre-authorization, query fulfillment, and final claim settlement tracking",
      "Automated IPD package creation, co-pay calculation, and service-level discount approval workflows",
      "Multi-mode payment collection supporting Cash, UPI, Credit/Debit cards, Net Banking, and Bank Cheque"
    ],
    techSpecs: [
      "Auditing: Real-time unbilled service detection engine",
      "Security: Multi-level financial authorization and refund verification",
      "Integration: Direct payment gateway and POS machine integration"
    ],
    compliance: ["GST Compliant", "TPA Guidelines"]
  },
  {
    id: 6,
    title: "2-Way Real-Time Tally Prime ERP Sync",
    category: "Finance & ERP",
    icon: "bi-arrow-left-right",
    badge: null,
    summary: "Two-way synchronized accounting bridge passing daily collection vouchers, vendor ledgers, and doctor shares into Tally.",
    capabilities: [
      "Real-time automated data push of daily counter receipts and credit collections into Tally Prime / ERP 9",
      "Automatic debtor ledger generation, credit aging analysis, and reminder notices for outstanding balances",
      "Automated doctor consultation and surgery incentive/share calculations pushed directly to accounts payable",
      "Automated Bank Reconciliation Statement (BRS) with cheque clearing and electronic voucher generation",
      "Zero revenue leakage through automated reconciliation between clinical orders and financial entries"
    ],
    techSpecs: [
      "Bridge: Direct XML/ODBC two-way background synchronizer",
      "Compatibility: Tally Prime 1.0–4.0 and Tally.ERP 9",
      "Ledgers: Multi-cost-centre and departmental sub-ledger mapping"
    ],
    compliance: ["Statutory Audit Ready", "ICAI Standards"]
  },
  {
    id: 7,
    title: "Nursing Care Station & Electronic MAR",
    category: "Inpatient Care",
    icon: "bi-heart-pulse",
    badge: null,
    summary: "Ward administration with digital vital signs charting, doctor treatment sheets, medication administration records, and shift handovers.",
    capabilities: [
      "Floor-wise and ward-wise dashboard displaying admitted patients, bed status, diet requirements, and clinical acuity",
      "Time-stamped electronic Medication Administration Record (e-MAR) ensuring on-time drug delivery and dosage tracking",
      "Continuous digital vital signs recording, intake/output fluid balance calculation, and pain score monitoring",
      "Braden pressure ulcer scale and Morse fall risk assessment tracking with automated warnings",
      "Shift handover notes summarizing doctor orders, pending investigations, and patient progress"
    ],
    techSpecs: [
      "Interface: High-contrast tablet and bedside terminal interface",
      "Alerts: Visual color-coded warning for delayed administrations",
      "Sync: Instant push to pharmacy ward-indent queue"
    ],
    compliance: ["NABH Nursing Standards", "WHO Patient Safety"]
  },
  {
    id: 8,
    title: "Operation Theatre Management & Surgical Safety",
    category: "Surgery & Critical Care",
    icon: "bi-scissors",
    badge: null,
    summary: "Dynamic OT scheduler, pre-anesthesia checkups, WHO surgical safety checklists, and implant consumption tracking.",
    capabilities: [
      "Multi-theatre interactive scheduling calendar with conflict avoidance and emergency case prioritization",
      "Digital WHO Surgical Safety Checklists (Sign-In, Time-Out, Sign-Out) enforced prior to surgical incision",
      "Pre-anesthesia checkup (PAC) clearance documentation and intra-operative anesthesia charts",
      "Complete surgical team logging (Lead Surgeon, First Assistant, Anesthetist, Scrub Nurse, Floor Nurse)",
      "Traceable surgical implant and sterile consumable tracking automatically posted to patient IPD bills"
    ],
    techSpecs: [
      "Checklists: Mandatory step validation prior to surgery start",
      "Scoring: Aldrete post-anesthesia recovery scoring",
      "Media: Pre- and post-operative high-resolution photo attachment"
    ],
    compliance: ["WHO Safe Surgery Guidelines", "NABH OT Protocols"]
  },
  {
    id: 9,
    title: "Stores, Inventory & MUSIC-3D Analytics",
    category: "Supply Chain",
    icon: "bi-boxes",
    badge: null,
    summary: "Central warehouse and sub-stores hierarchy with MUSIC-3D inventory classification, automated ROL, and purchase orders.",
    capabilities: [
      "Multi-tier store hierarchy linking central medical warehouse with departmental ward sub-stores",
      "Advanced MUSIC-3D inventory classification balancing consumption value, clinical criticality, and lead time",
      "Automated Reorder Level (ROL) calculation generating automated purchase indents before stockouts occur",
      "Goods Receipt Note (GRN) workflow with mandatory quality inspection and quarantine stages",
      "FIFO, LIFO, and Weighted Average stock valuation compliant with statutory audit standards"
    ],
    techSpecs: [
      "Valuation: FIFO and Weighted Average real-time valuation",
      "Auditing: Barcode batch verification and physical audit variance logs",
      "Workflow: Multi-level PO approval hierarchy"
    ],
    compliance: ["NABH Supply Standards", "GST e-Way Bill Compliant"]
  },
  {
    id: 10,
    title: "Retail & Inpatient Pharmacy Management",
    category: "Pharmacy & Dispensing",
    icon: "bi-capsule",
    badge: null,
    summary: "Direct doctor e-prescription dispensing, automated batch/expiry tracking, Schedule-X narcotics control, and substitute finder.",
    capabilities: [
      "Real-time stock visibility within physician consultation desks preventing out-of-stock prescriptions",
      "Automated batch-wise dispensing with color-coded expiry alerts and shelf-life aging analytics",
      "Schedule-H and Schedule-X narcotics register strictly linked to prescribing doctor's registration number",
      "Intelligent substitute drug recommendation engine suggesting generic equivalents during shortages",
      "Complete GST compliant retail invoice generation with barcode scanner support"
    ],
    techSpecs: [
      "Scanning: High-speed 1D/2D barcode and QR scanner integration",
      "Security: Lock on expired or recalled drug batches",
      "Invoicing: Direct thermal receipt and A4 tax invoice printing"
    ],
    compliance: ["Drugs & Cosmetics Act", "GST Tax Regulations"]
  },
  {
    id: 11,
    title: "NABH Audit Trails & Role-Based Security",
    category: "Security & Governance",
    icon: "bi-shield-lock",
    badge: null,
    summary: "Timestamped immutable logs recording every medical edit, role-based access control, and ISO 27001 data encryption.",
    capabilities: [
      "Immutable audit logs recording exact user ID, timestamp, IP address, and changed values for all clinical entries",
      "Role-Based Access Control (RBAC) preventing unauthorized access between clinical, pharmacy, and billing staff",
      "End-to-end AES-256 database encryption at rest and TLS 1.3 encryption in transit",
      "Automated daily scheduled encrypted database backups with high-availability disaster recovery failovers",
      "Standard operating procedure (SOP) documentation templates ready for NABH and JCI hospital accreditation"
    ],
    techSpecs: [
      "Encryption: AES-256 for data at rest, TLS 1.3 for data in transit",
      "Authentication: Two-Factor Authentication (2FA) and biometric staff sign-in",
      "Backups: Automated geo-redundant snapshots"
    ],
    compliance: ["ISO 27001 Certified", "NABH 5th Edition Ready", "HIPAA Aligned"]
  },
  {
    id: 12,
    title: "Executive MIS Analytics & Business Intelligence",
    category: "Executive Analytics",
    icon: "bi-graph-up-arrow",
    badge: null,
    summary: "Executive dashboards tracking live bed occupancy, revenue KPIs, turnaround times (TAT), and departmental clinical productivity.",
    capabilities: [
      "Real-time C-suite executive dashboard accessible securely on desktop, tablet, and mobile devices",
      "Department-wise revenue vs operational cost breakdown with margin analysis",
      "Outpatient turnaround time (registration to consultation) and inpatient average length of stay (ALOS)",
      "Doctor-wise performance metrics: patient volume, OPD conversions, surgeries performed, and revenue generated",
      "Automated scheduled report generation with scheduled morning email dispatches to hospital leadership"
    ],
    techSpecs: [
      "Dashboards: Interactive charts powered by real-time aggregated data",
      "Export: Instant export to Excel, PDF, and CSV formats",
      "Dispatch: Automated SMTP scheduled report dispatch engine"
    ],
    compliance: ["Board Reporting Standards", "Data Privacy Compliant"]
  }
];
