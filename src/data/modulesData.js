export const modulesData = [
  {
    id: 1,
    title: "Registration, Admit, Discharge and Transfer (RADT)",
    shortTitle: "Patient Registration (RADT)",
    subtitle: "Front Desk & Admissions",
    icon: "bx-user-plus",
    image: "/assets/img/workflow/out-patient2.png",
    category: "Clinical & Front Desk",
    description: "Complete patient lifecycle management from entry to discharge with emergency handling.",
    features: [
      "Patient Registration (OPD / IPD / Daycare)",
      "Automated Unique Patient Identification (UHID)",
      "Inpatient Admissions & Bed Allocation",
      "Inter-ward and Bed Transfers",
      "Planned & Emergency Discharge Summaries",
      "Casualty & Emergency Desk Management",
      "Demographic capture, photo capture, and ID verification"
    ]
  },
  {
    id: 2,
    title: "Billing Cash Counter",
    shortTitle: "Billing & Cash Counter",
    subtitle: "Cashless, TPA & Invoicing",
    icon: "bx-receipt",
    category: "Finance & Accounts",
    description: "Multi-mode payment billing, corporate/cashless coverage, packages and audits.",
    features: [
      "IPD Package creation & Health Check-up plans",
      "Health Card & Privilege membership management",
      "Automatic billing calculation with manual overrides",
      "Service-wise discounting and subsidy approval",
      "Patient receipt managed in 3 ways: Cash, Credit, and Settle against Deposit",
      "Corporate and Insurance billing as per negotiated rates",
      "Co-pay facility for corporate and insurance policies",
      "Refund management with multi-level validation of clinical transactions",
      "Separate cash/credit generation for cashless patients with non-applicable services",
      "Pop-up alert display for duplicate services on the same day for a patient",
      "Multi-mode payment collection (Cash, UPI, Card, Net Banking, Cheque)",
      "In-patient live bill monitoring & credit limits",
      "Cashless approval flow for Insurance, Govt Schemes, Corporates, & Charities",
      "Consultation fee rules: 1st consultation, free follow-up, and follow-up fee config"
    ]
  },
  {
    id: 3,
    title: "Patient Consultation – OPD and IPD",
    shortTitle: "Doctor Consultation Desk",
    subtitle: "OPD & E-Prescriptions",
    icon: "bx-pulse",
    image: "/assets/img/workflow/out-patient2.png",
    category: "Clinical & Doctors",
    description: "Electronic health records, doctor consultation desks, and e-prescriptions.",
    features: [
      "Comprehensive Patient EMR with past history and allergies",
      "Interactive E-Prescription with dosage, duration, and instructions",
      "Diagnosis coding (ICD-10) and clinical notes",
      "Investigation order requisition directly sent to Lab & Radiology",
      "Dynamic clinical templates customized per medical specialty",
      "Follow-up scheduling and appointment reminders",
      "Vitals tracking, growth charts, and BMI calculations"
    ]
  },
  {
    id: 4,
    title: "Radiology Information System (RIS)",
    shortTitle: "Radiology (RIS & PACS)",
    subtitle: "Imaging, X-Ray & DICOM",
    icon: "bx-scan",
    image: "/assets/img/workflow/radiology.png",
    category: "Diagnostics",
    description: "Complete radiology workflow, order processing, and PACS imaging integration.",
    features: [
      "Templates stored in customizable format with standard terminology",
      "Strict PDF view-only permissions for non-radiology staff",
      "Seamless integration with PACS & DICOM viewers",
      "Radiology Order Processing from OPD & IPD wards",
      "Result verification, digital signature, and multi-stage reporting",
      "Radiology film & contrast consumption tracking",
      "Modality appointment scheduling (X-Ray, CT, MRI, Ultrasound)",
      "Comparison tool for previous vs current radiologic reports"
    ]
  },
  {
    id: 5,
    title: "Electronic Health Record (EHR / EMR)",
    shortTitle: "Electronic Health Records",
    subtitle: "Unified EMR / EHR History",
    icon: "bx-folder-open",
    category: "Clinical & Doctors",
    description: "Longitudinal health records uniting clinical, diagnostic, and administrative data.",
    features: [
      "Demographics, vital signs, problems list, and allergy warnings",
      "Physician progress notes & clinical documentation",
      "Past medical, surgical, and family history recording",
      "Immunization and vaccination schedule tracking",
      "Unified timeline aggregating Lab, Radiology, and Pharmacy data",
      "Clinical Decision Support (CDS) for drug-drug interactions",
      "Doctor-wise dynamic medical record generation facility",
      "Enables admin analytics, physician outcome tracking, and research reports"
    ]
  },
  {
    id: 6,
    title: "Laboratory Information System (LIS)",
    shortTitle: "Laboratory (LIS)",
    subtitle: "Bi-directional Auto-Analyzers",
    icon: "bx-vial",
    image: "/assets/img/workflow/laboratory.png",
    category: "Diagnostics",
    description: "End-to-end pathology workflow with machine interfacing and barcode tracking.",
    features: [
      "Configurable test catalog across Biochemistry, Hematology, Microbiology, etc.",
      "Sample collection with automatic unique barcode label generation",
      "Specimen tracking from collection to accessioning, testing, and disposal",
      "Direct bi-directional machine interfacing with lab auto-analyzers",
      "Automatic panic/critical value alerts and deviation highlighting",
      "Cumulative test results and patient trend/correlation graphs",
      "Digital signatures configured faculty-wise for verified reports",
      "Formula-based calculations (e.g. CBC absolute count values)",
      "Repeat sample tracking in case of hemolyzed or broken specimens"
    ]
  },
  {
    id: 7,
    title: "Pharmacy Management",
    shortTitle: "Pharmacy Management",
    subtitle: "Retail & IPD Drug Dispensing",
    icon: "bx-capsule",
    category: "Inventory & Pharmacy",
    description: "Retail and IPD pharmacy sales, batch/expiry controls, and GST compliance.",
    features: [
      "Batch-wise stock tracking with online status during sales",
      "Cash, credit, and cashless insurance invoicing",
      "Automated drug expiry alerts & expiry aging analysis",
      "Fast-moving, slow-moving, and non-moving drug classification",
      "Barcode scanning for dispensing and sales processing",
      "Narcotics and Schedule-X drug control linked to doctor prescription",
      "Substitute drug suggestion during out-of-stock situations",
      "Purchase order generation and purchase returns workflow",
      "Complete GST invoicing and export to GST return portals",
      "Profitability reports by date, category, and sales register"
    ]
  },
  {
    id: 8,
    title: "Financial Accounting & Tally Integration",
    shortTitle: "Financial Accounting",
    subtitle: "2-Way Tally ERP Sync",
    icon: "bx-calculator",
    category: "Finance & Accounts",
    description: "Two-way Tally bridge, accounts receivable, payables, and financial reporting.",
    features: [
      "Accounts Receivable: debtor ledger, receipts, and outstanding aging",
      "Reminder letters and notices for bounced or returned cheques",
      "Accounts Payable: vendor bills, payment vouchers, and refund vouchers",
      "Merged payments and automatic cheque printing",
      "Two-way data synchronization with Tally ERP / Tally Prime",
      "Real-time Revenue Leakage detection and financial control",
      "Automated Bank Reconciliation (BRS) and cash book maintenance"
    ]
  },
  {
    id: 9,
    title: "Nursing Care Desk & Station",
    shortTitle: "Nursing Care Station",
    subtitle: "Vitals, MAR & Handover",
    icon: "bx-first-aid",
    image: "/assets/img/workflow/in-patient.png",
    category: "Inpatient Care",
    description: "Ward administration, vitals charting, doctor order execution, and bed control.",
    features: [
      "Unified view of all admitted patients at the specific nursing station",
      "Live vital signs charting and intake/output fluid balance recording",
      "Doctor treatment sheet & medication administration record (MAR)",
      "Fall risk assessment & Braden pressure ulcer scale tracking",
      "Nursing shift handover notes and clinical alerts",
      "Ward sub-store requisition and medication issue",
      "Bed transfer requests and discharge intimation workflow",
      "OT schedule requests and patient dietary orders"
    ]
  },
  {
    id: 10,
    title: "License & Statutory Compliance Management",
    shortTitle: "Statutory Compliance",
    subtitle: "Hospital License Tracking",
    icon: "bx-shield-quarter",
    category: "Administration",
    description: "Centralized tracking and timely automated reminders for hospital statutory licenses.",
    features: [
      "Repository of all hospital licenses (PNDT, Bio-medical, Pharmacy, Fire safety, AERB)",
      "Record issuing authority, license number, validity dates, and department",
      "Automated countdown alerts & reminders before renewal due dates",
      "Document scanning and upload for statutory certificates",
      "Compliance audits and NABH/NABL accreditation documentation"
    ]
  },
  {
    id: 11,
    title: "Interface with External Medical Equipment",
    shortTitle: "Machine Interfacing",
    subtitle: "ASTM & HL7 Protocols",
    icon: "bx-devices",
    category: "Technical & Hardware",
    description: "Direct machine integration with analyzers, biometric devices, and display tokens.",
    features: [
      "Bi-directional interface with auto-analyzers for direct lab result transfer",
      "Credit card swap machine integration for counter receipts",
      "Biometric fingerprint/face recognition attendance systems for staff",
      "Barcode printers and high-speed laser scanners",
      "Digital Token Display Boards for OPD patient queue calling",
      "Nurse calling systems wired to nursing stations",
      "Direct PACS server integration for DICOM image streaming"
    ]
  },
  {
    id: 12,
    title: "Biomedical Asset Maintenance (BAM)",
    shortTitle: "Asset Maintenance (BAM)",
    subtitle: "Equipment AMC & Calibration",
    icon: "bx-wrench",
    category: "Administration",
    description: "Preventive maintenance schedules, breakdown logs, AMC contracts, and depreciation.",
    features: [
      "Exhaustive medical asset registry with serial numbers and warranty",
      "Asset capitalization, depreciation calculation, and lease tracking",
      "AMC / CMC contract management and renewal alerts",
      "Preventive Maintenance (PPM) scheduled calendar",
      "Breakdown ticket logging and job assignment to engineers",
      "Asset transfer, condemnations, and disposal approvals",
      "Uptime and MTBF / MTTR equipment reliability analytics"
    ]
  },
  {
    id: 13,
    title: "Visitor Management System",
    shortTitle: "Visitor Management",
    subtitle: "Digital Passes & Security",
    icon: "bx-id-card",
    category: "Administration",
    description: "Digital visitor passes, security checkpoints, and visitor tracking.",
    features: [
      "Paperless visitor check-in with web camera photo capture",
      "Instant barcode/QR-coded visitor badge pass printing",
      "Time-tracking with entry, exit, and total stay duration recording",
      "Visitor search by visit code, name, phone, or company",
      "Restricted ward access control and maximum visitor limit per patient",
      "SMS notification to patient attendant or hospital host upon arrival",
      "Security audit reports by department, patient, and date range"
    ]
  },
  {
    id: 14,
    title: "Diet & Kitchen Management",
    shortTitle: "Diet & Kitchen Services",
    subtitle: "Clinical Nutrition & 8 Meals",
    icon: "bx-restaurant",
    category: "Hospital Services",
    description: "Personalized patient nutrition planning, 8-meal cycles, and dietitian reviews.",
    features: [
      "Diet categorization: Liquid, Semi-solid, Solid, Diabetic, Renal, Salt-restricted",
      "Menu planning across 8 daily meal heads (Bed Tea, Breakfast, Lunch, Snacks, Dinner, etc.)",
      "Specialized consultation screen for Clinical Dietitian",
      "Patient food allergies, likes, and dislikes tracking",
      "Dietitian reviews patient lab reports, vitals, and medication before prescribing",
      "Kitchen food preparation requisition slips categorized by ward and room",
      "Calorie and nutritional breakdown tracking per meal"
    ]
  },
  {
    id: 15,
    title: "Operation Theatre (OT) Management",
    shortTitle: "Operation Theatre (OT)",
    subtitle: "WHO Checklists & Scheduling",
    icon: "bx-cut",
    category: "Clinical & Surgery",
    description: "OT scheduling, multi-stage clinical checklists, anesthesia notes, and surgical safety.",
    features: [
      "Interactive OT scheduler with conflict detection and rescheduling",
      "Support for multiple surgeries for the same patient in a single OT slot",
      "Pre-surgery clinical clearance and WHO surgical safety checklists",
      "General & regional anesthesia consent documentation",
      "Pre-operative, intra-operative, and post-operative surgical notes",
      "Surgeon, assistant, anesthetist, and scrub nurse staff logging",
      "OT equipment and surgical consumable/implant consumption tracking",
      "Aldrete recovery score card with multi-level approval",
      "Pre and post surgery photo attachment capability"
    ]
  },
  {
    id: 16,
    title: "Staff Roster Management",
    shortTitle: "Staff Duty Roster",
    subtitle: "Shifts & Attendance Swaps",
    icon: "bx-calendar-event",
    category: "HR & Operations",
    description: "Doctor, nurse, and support staff shift planning with Excel upload and swap approvals.",
    features: [
      "Shift scheduling for doctors, nurses, technicians, and non-clinical staff",
      "Dual scheduling method: Bulk Excel upload or system interactive calendar",
      "Shift swap and leave replacement requests with supervisor approval",
      "Duty roster printable charts for ward notice boards",
      "Night shift allowances and emergency on-call duty management",
      "Automated integration with biometric attendance punches"
    ]
  },
  {
    id: 17,
    title: "Stores & Inventory Management",
    shortTitle: "Stores & Inventory",
    subtitle: "MUSIC-3D Analytics & ROL",
    icon: "bx-store-alt",
    category: "Inventory & Supply",
    description: "Central warehouse, sub-stores, purchase indents, PO workflows, and MUSIC-3D analytics.",
    features: [
      "Main central store and unlimited department sub-stores hierarchy",
      "ABC, VED, and MUSIC-3D inventory classification models",
      "Requisition indents, purchase quotations, and purchase order workflow",
      "Goods Receipt Note (GRN) with QC verification and return handling",
      "Stock valuation methods (FIFO, Weighted Average, LIFO)",
      "Inter-store stock transfers with two-stage approval",
      "Department consumption tracking and bedside patient item issues",
      "Automated Reorder Level (ROL) calculation and stock alerts",
      "Full GST reporting and purchase audit documentation"
    ]
  },
  {
    id: 18,
    title: "Human Resource Management (HRMS & Payroll)",
    shortTitle: "HRMS & Staff Payroll",
    subtitle: "Biometric Attendance & Pay",
    icon: "bx-group",
    category: "Administration",
    description: "Staff records, biometric attendance, salary generation, PF/TDS, and appraisals.",
    features: [
      "Complete employee digital profiles with credential and license tracking",
      "Biometric machine interfacing for automatic punch attendance logs",
      "Automated monthly salary calculation with parameterized allowances and deductions",
      "Overtime (OT) management with single/double rate calculation",
      "Online employee leave requests, approvals, and balance ledgers",
      "PF returns (Form 3A, 5, 10, 12A) and ECR CSV generation",
      "TDS calculation and investment declaration forms",
      "Doctor visit incentives and consultant share payout reports",
      "Staff separation and full & final settlement process"
    ]
  }
];
