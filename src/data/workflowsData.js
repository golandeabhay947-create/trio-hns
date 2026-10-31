export const workflowsData = [
  {
    id: "out-patient",
    title: "Out Patient",
    subtitle: "Complete OPD Lifecycle Management",
    tag: "OPD Clinical Flow",
    icon: "bx-user-check",
    image: "/assets/img/workflow/out-patient-flow.png",
    description: "Connects patient registration, queue calling, physician EMR, investigations, and instant billing.",
    metrics: [
      { label: "Patient Turnaround", value: "< 4.5 Mins", icon: "bi-stopwatch" },
      { label: "Prescription Flow", value: "100% Digital", icon: "bi-file-earmark-medical" },
      { label: "Queue Latency", value: "Zero Delay", icon: "bi-lightning-charge" }
    ],
    steps: [
      "Patient Registration & UHID Token",
      "Doctor Desk EMR & Clinical Vitals",
      "E-Prescription & Investigation Orders",
      "Automated Lab & Radiology Routing",
      "Pharmacy Dispensing & POS Billing",
      "Instant Receipt & Follow-up SMS"
    ]
  },
  {
    id: "in-patient",
    title: "In Patient",
    subtitle: "Admission to Discharge Protocol",
    tag: "IPD Ward Operations",
    icon: "bx-bed",
    image: "/assets/img/workflow/in-patient-flow.png",
    description: "Orchestrates ward admission, bed tariffs, treatment charts, nursing care, OT, and discharge billing.",
    metrics: [
      { label: "Admission Protocol", value: "< 90 Seconds", icon: "bi-speedometer2" },
      { label: "TPA Pre-Authorization", value: "Real-time Sync", icon: "bi-shield-check" },
      { label: "Discharge Clearance", value: "Instant Gate Pass", icon: "bi-door-open" }
    ],
    steps: [
      "IPD Desk Bed Allocation & Tariffs",
      "Nursing Station Intake & Vitals Charting",
      "Doctor Clinical Rounds & Medication Orders",
      "OT Booking, Clearance & Surgery Execution",
      "Cashless TPA Insurance Pre-Authorization",
      "Summary Generation & Gate Pass Release"
    ]
  },
  {
    id: "radiology",
    title: "Radiology",
    subtitle: "PACS & DICOM Modality Sync",
    tag: "Imaging & Diagnostics",
    icon: "bx-scan",
    image: "/assets/img/workflow/radiology-flow.png",
    description: "Streamlines radiological requisitions, modality scanning, high-res film reviews, and digital EMR delivery.",
    metrics: [
      { label: "Modality Sync", value: "DICOM 3.0 / PACS", icon: "bi-broadcast" },
      { label: "Film Turnaround", value: "Instant Push", icon: "bi-cloud-arrow-up" },
      { label: "Diagnostic Loss", value: "0% Lossless", icon: "bi-check2-circle" }
    ],
    steps: [
      "Electronic Order from OPD/IPD Desk",
      "Modality Slot Booking (CT, MRI, X-Ray)",
      "Patient Scan Pushed to PACS Server",
      "Radiologist Film Review & Reporting",
      "Digital Signature Verification",
      "Instant Dispatch to Doctor EMR & App"
    ]
  },
  {
    id: "laboratory",
    title: "Laboratory",
    subtitle: "Automated Machine Interfacing",
    tag: "LIS & Analyzers",
    icon: "bx-vial",
    image: "/assets/img/workflow/laboratory-flow.png",
    description: "Automates barcoding, analyzer machine data capture, panic value alerts, and verified report printing.",
    metrics: [
      { label: "LIS Interfacing", value: "Bi-directional", icon: "bi-arrow-left-right" },
      { label: "Panic Value Alert", value: "Instant EMR/SMS", icon: "bi-exclamation-triangle" },
      { label: "Sample Tracking", value: "Barcode UHID", icon: "bi-upc-scan" }
    ],
    steps: [
      "Barcode Specimen Label Generation",
      "Phlebotomy Sample Collection",
      "Auto-Analyzer Bi-directional Testing",
      "Panic Value Alerts to Attending Doctor",
      "Pathologist Historical Delta Review",
      "Report Sign-off & WhatsApp Notification"
    ]
  },
  {
    id: "accounting",
    title: "Accounting System Integration",
    subtitle: "Bi-directional Tally & Financial Governance",
    tag: "Tally & Finance",
    icon: "bx-calculator",
    image: "/assets/img/workflow/accounting-flow.png",
    description: "Seamless financial synchronization between hospital counters and corporate accounting ledgers.",
    metrics: [
      { label: "Ledger Sync", value: "2-Way Tally Prime", icon: "bi-arrow-repeat" },
      { label: "Reconciliation Lag", value: "Zero Day Lag", icon: "bi-clock-history" },
      { label: "Audit Readiness", value: "GST & TDS Ready", icon: "bi-journal-check" }
    ],
    steps: [
      "Real-time Counter Cash Collection Sync",
      "Automated Debtor Ledger for Corporate TPA",
      "Vendor Purchase Vouchers & GRN Mapping",
      "Multi-Account Bank Reconciliation (BRS)",
      "Automated GST Return & Invoicing",
      "Executive P&L and Balance Sheet Visibility"
    ]
  },
  {
    id: "architecture",
    title: "Technical Architecture",
    subtitle: "High-Security Cloud Infrastructure",
    tag: "Cloud Infrastructure",
    icon: "bx-shield-quarter",
    image: "/assets/img/workflow/stores-inventory-flow.png",
    description: "Enterprise-grade multi-tier architecture built for 99.98% availability, encryption, and zero maintenance.",
    metrics: [
      { label: "System Availability", value: "99.98% SLA", icon: "bi-server" },
      { label: "Data Security", value: "AES-256 In-Transit", icon: "bi-lock" },
      { label: "Interoperability", value: "HL7 & FHIR", icon: "bi-link-45deg" }
    ],
    steps: [
      "Multi-tier Cloud & Microservices Core",
      "Zero-Footprint Web Browser Deployment",
      "Role-Based Access Control (RBAC)",
      "End-to-End In-Transit & At-Rest Encryption",
      "Automated Redundant Daily Cloud Backups",
      "HL7 / FHIR Standards for Interoperability"
    ]
  }
];
