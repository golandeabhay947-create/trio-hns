/**
 * Realistic fictional mock data for TRIO HIMS interactive product demonstrations.
 * All records are fictional and intended for frontend product demonstration purposes only.
 */

export const MOCK_PATIENTS = [
  {
    uhid: 'TR-2026-08421',
    name: 'Aarav Sharma',
    age: 42,
    gender: 'Male',
    phone: '+91 98201 XXXXX',
    department: 'Cardiology',
    doctor: 'Dr. Satish K.',
    ward: 'ICU - Bed 04',
    bedType: 'ICU',
    admissionDate: '2026-10-28',
    diagnosis: 'Acute Coronary Syndrome - Post Angioplasty',
    status: 'In Consultation',
    token: 'A-101',
    vitals: { bp: '128/82', pulse: '76 bpm', temp: '98.4°F', spo2: '99%', weight: '74 kg' },
    allergies: ['Penicillin', 'Sulfa drugs']
  },
  {
    uhid: 'TR-2026-08422',
    name: 'Priyanka Patel',
    age: 34,
    gender: 'Female',
    phone: '+91 98450 XXXXX',
    department: 'Orthopaedics',
    doctor: 'Dr. Sachin Patil',
    ward: 'General Ward - Bed 12',
    bedType: 'General Ward',
    admissionDate: '2026-10-29',
    diagnosis: 'Left Femur Fracture - Post OP Day 2',
    status: 'Waiting',
    token: 'A-102',
    vitals: { bp: '118/76', pulse: '72 bpm', temp: '98.6°F', spo2: '98%', weight: '58 kg' },
    allergies: ['None Reported']
  },
  {
    uhid: 'TR-2026-08423',
    name: 'Rajendra Deshmukh',
    age: 58,
    gender: 'Male',
    phone: '+91 97631 XXXXX',
    department: 'General Medicine',
    doctor: 'Dr. Suhas Kulkarni',
    ward: 'Private Room 204',
    bedType: 'Private Room',
    admissionDate: '2026-10-30',
    diagnosis: 'Type 2 Diabetes Mellitus with Acute Gastroenteritis',
    status: 'In Consultation',
    token: 'A-103',
    vitals: { bp: '136/88', pulse: '84 bpm', temp: '99.1°F', spo2: '97%', weight: '82 kg' },
    allergies: ['NSAIDs']
  },
  {
    uhid: 'TR-2026-08424',
    name: 'Ananya Iyer',
    age: 27,
    gender: 'Female',
    phone: '+91 99224 XXXXX',
    department: 'Gynaecology & Obstetrics',
    doctor: 'Dr. Sneha Surana',
    ward: 'Daycare Bed 02',
    bedType: 'Daycare',
    admissionDate: '2026-10-30',
    diagnosis: 'Routine Antenatal Checkup (32 Weeks)',
    status: 'Waiting',
    token: 'A-104',
    vitals: { bp: '112/70', pulse: '80 bpm', temp: '98.2°F', spo2: '99%', weight: '64 kg' },
    allergies: ['None Reported']
  },
  {
    uhid: 'TR-2026-08425',
    name: 'Vikramaditya Rao',
    age: 63,
    gender: 'Male',
    phone: '+91 98112 XXXXX',
    department: 'Neurology',
    doctor: 'Dr. Ravindra Bhate',
    ward: 'ICU - Bed 02',
    bedType: 'ICU',
    admissionDate: '2026-10-27',
    diagnosis: 'Ischemic Stroke - Stable',
    status: 'Completed',
    token: 'A-105',
    vitals: { bp: '142/90', pulse: '68 bpm', temp: '98.6°F', spo2: '96%', weight: '70 kg' },
    allergies: ['Aspirin']
  },
  {
    uhid: 'TR-2026-08426',
    name: 'Meera Nair',
    age: 49,
    gender: 'Female',
    phone: '+91 94471 XXXXX',
    department: 'Radiology',
    doctor: 'Dr. Kawedia',
    ward: 'OPD Screening',
    bedType: 'OPD',
    admissionDate: '2026-10-30',
    diagnosis: 'Right Knee Joint Pain - MRI Investigation',
    status: 'Waiting',
    token: 'A-106',
    vitals: { bp: '122/80', pulse: '74 bpm', temp: '98.4°F', spo2: '98%', weight: '66 kg' },
    allergies: ['Iodinated Contrast']
  }
];

export const MOCK_DOCTORS = [
  { id: 'doc-1', name: 'Dr. Satish K.', specialty: 'Cardiology', opdTimings: '09:00 AM - 01:00 PM', room: 'Consultation Room 101', photo: '/assets/img/dr.satish.png' },
  { id: 'doc-2', name: 'Dr. Sachin Patil', specialty: 'Orthopaedics', opdTimings: '10:00 AM - 02:00 PM', room: 'Consultation Room 104', photo: '/assets/img/sachin_patil.webp' },
  { id: 'doc-3', name: 'Dr. Suhas Kulkarni', specialty: 'General Medicine', opdTimings: '09:30 AM - 01:30 PM', room: 'Consultation Room 102', photo: '/assets/img/dr.suhas_kulkarni.webp' },
  { id: 'doc-4', name: 'Dr. Sneha Surana', specialty: 'Gynaecology & Obstetrics', opdTimings: '11:00 AM - 03:00 PM', room: 'Consultation Room 108', photo: '/assets/img/drsurana.webp' },
  { id: 'doc-5', name: 'Dr. Ravindra Bhate', specialty: 'Neurology', opdTimings: '02:00 PM - 06:00 PM', room: 'Consultation Room 201', photo: '/assets/img/dr.ravindrabhate.jpeg' },
  { id: 'doc-6', name: 'Dr. Kawedia', specialty: 'Radiology & Imaging', opdTimings: '08:30 AM - 04:30 PM', room: 'Radiology Suite 1', photo: '/assets/img/dr.Kawedia.jpg' }
];

export const MOCK_DEPARTMENTS = [
  'Cardiology',
  'Orthopaedics',
  'General Medicine',
  'Gynaecology & Obstetrics',
  'Neurology',
  'Pediatrics',
  'Radiology',
  'Pathology & Laboratory',
  'General Surgery'
];

export const MOCK_BEDS = [
  // ICU Beds
  { id: 'ICU-01', ward: 'ICU', number: 'Bed 01', type: 'Intensive Care Unit', status: 'Occupied', patient: 'Vikramaditya Rao', uhid: 'TR-2026-08425', doctor: 'Dr. Ravindra Bhate' },
  { id: 'ICU-02', ward: 'ICU', number: 'Bed 02', type: 'Intensive Care Unit', status: 'Occupied', patient: 'Aarav Sharma', uhid: 'TR-2026-08421', doctor: 'Dr. Satish K.' },
  { id: 'ICU-03', ward: 'ICU', number: 'Bed 03', type: 'Intensive Care Unit', status: 'Available', patient: null, uhid: null, doctor: null },
  { id: 'ICU-04', ward: 'ICU', number: 'Bed 04', type: 'Intensive Care Unit', status: 'Cleaning', patient: null, uhid: null, doctor: null },
  { id: 'ICU-05', ward: 'ICU', number: 'Bed 05', type: 'Intensive Care Unit', status: 'Available', patient: null, uhid: null, doctor: null },
  { id: 'ICU-06', ward: 'ICU', number: 'Bed 06', type: 'Intensive Care Unit', status: 'Maintenance', patient: null, uhid: null, doctor: null },

  // General Ward Beds
  { id: 'GW-01', ward: 'General Ward', number: 'Bed 01', type: 'Male General Ward', status: 'Occupied', patient: 'Kiran Joshi', uhid: 'TR-2026-08419', doctor: 'Dr. Suhas Kulkarni' },
  { id: 'GW-02', ward: 'General Ward', number: 'Bed 02', type: 'Male General Ward', status: 'Available', patient: null, uhid: null, doctor: null },
  { id: 'GW-03', ward: 'General Ward', number: 'Bed 03', type: 'Male General Ward', status: 'Available', patient: null, uhid: null, doctor: null },
  { id: 'GW-04', ward: 'General Ward', number: 'Bed 04', type: 'Female General Ward', status: 'Occupied', patient: 'Priyanka Patel', uhid: 'TR-2026-08422', doctor: 'Dr. Sachin Patil' },
  { id: 'GW-05', ward: 'General Ward', number: 'Bed 05', type: 'Female General Ward', status: 'Cleaning', patient: null, uhid: null, doctor: null },
  { id: 'GW-06', ward: 'General Ward', number: 'Bed 06', type: 'Female General Ward', status: 'Available', patient: null, uhid: null, doctor: null },
  { id: 'GW-07', ward: 'General Ward', number: 'Bed 07', type: 'Female General Ward', status: 'Available', patient: null, uhid: null, doctor: null },
  { id: 'GW-08', ward: 'General Ward', number: 'Bed 08', type: 'Male General Ward', status: 'Occupied', patient: 'Ramesh Verma', uhid: 'TR-2026-08412', doctor: 'Dr. Sachin Patil' },

  // Private Rooms
  { id: 'PR-201', ward: 'Private Ward', number: 'Room 201', type: 'Deluxe Private Suite', status: 'Occupied', patient: 'Rajendra Deshmukh', uhid: 'TR-2026-08423', doctor: 'Dr. Suhas Kulkarni' },
  { id: 'PR-202', ward: 'Private Ward', number: 'Room 202', type: 'Deluxe Private Suite', status: 'Available', patient: null, uhid: null, doctor: null },
  { id: 'PR-203', ward: 'Private Ward', number: 'Room 203', type: 'Semi-Private Room', status: 'Available', patient: null, uhid: null, doctor: null },
  { id: 'PR-204', ward: 'Private Ward', number: 'Room 204', type: 'Semi-Private Room', status: 'Cleaning', patient: null, uhid: null, doctor: null }
];

export const MOCK_LAB_TESTS = [
  { id: 'LAB-901', testName: 'Complete Blood Count (CBC) with ESR', sampleId: 'SMP-26-8812', patient: 'Aarav Sharma', department: 'Hematology', status: 'Report Ready', time: '10:45 AM', verifiedBy: 'Dr. A. Verma' },
  { id: 'LAB-902', testName: 'Lipid Profile & Serum Electrolytes', sampleId: 'SMP-26-8813', patient: 'Aarav Sharma', department: 'Biochemistry', status: 'Verification', time: '11:15 AM', verifiedBy: 'In Review' },
  { id: 'LAB-903', testName: 'HbA1c Glycated Hemoglobin', sampleId: 'SMP-26-8814', patient: 'Rajendra Deshmukh', department: 'Clinical Biochemistry', status: 'Report Ready', time: '09:30 AM', verifiedBy: 'Dr. A. Verma' },
  { id: 'LAB-904', testName: 'Urine Routine & Microscopic', sampleId: 'SMP-26-8815', patient: 'Rajendra Deshmukh', department: 'Clinical Pathology', status: 'Processing', time: '11:40 AM', verifiedBy: 'Lab Technician' },
  { id: 'LAB-905', testName: 'Digital X-Ray Left Knee AP & Lateral', sampleId: 'RAD-26-4401', patient: 'Meera Nair', department: 'Radiology', status: 'Report Ready', time: '10:10 AM', verifiedBy: 'Dr. Kawedia' },
  { id: 'LAB-906', testName: 'MRI Brain with DWI & FLAIR Sequences', sampleId: 'RAD-26-4402', patient: 'Vikramaditya Rao', department: 'MRI Suite', status: 'Collection', time: '12:00 PM', verifiedBy: 'Awaiting Scan' }
];

export const MOCK_PHARMACY_INVENTORY = [
  { id: 'MED-101', name: 'Paracetamol 650mg Tabs', category: 'Analgesics', batch: 'BT-2026-91', stock: 1420, unit: 'Strips', expiry: '2028-06', status: 'In Stock' },
  { id: 'MED-102', name: 'Atorvastatin 20mg Tablets', category: 'Cardiovascular', batch: 'AT-2025-44', stock: 48, unit: 'Strips', expiry: '2026-11', status: 'Near Expiry' },
  { id: 'MED-103', name: 'Amoxicillin + Clavulanic Acid 625mg', category: 'Antibiotics', batch: 'AM-2026-12', stock: 850, unit: 'Strips', expiry: '2027-09', status: 'In Stock' },
  { id: 'MED-104', name: 'Insulin Glargine 100 IU/ml Pen', category: 'Antidiabetic', batch: 'IN-2026-03', stock: 14, unit: 'Vials', expiry: '2027-04', status: 'Low Stock' },
  { id: 'MED-105', name: 'Ceftriaxone 1g IV Injection', category: 'Injectables', batch: 'CF-2025-88', stock: 620, unit: 'Vials', expiry: '2027-12', status: 'In Stock' },
  { id: 'MED-106', name: 'Pantoprazole 40mg IV Injections', category: 'Gastrointestinal', batch: 'PT-2026-50', stock: 540, unit: 'Vials', expiry: '2028-01', status: 'In Stock' },
  { id: 'MED-107', name: 'Normal Saline 0.9% IV 500ml', category: 'IV Fluids', batch: 'NS-2026-77', stock: 320, unit: 'Bottles', expiry: '2028-08', status: 'In Stock' }
];

export const MOCK_INVOICE = {
  invoiceNumber: 'INV-TRIO-2026-10492',
  date: '2026-10-30',
  uhid: 'TR-2026-08421',
  patientName: 'Aarav Sharma',
  ageGender: '42 Y / Male',
  doctorName: 'Dr. Satish K.',
  department: 'Cardiology',
  admissionType: 'Inpatient (IPD)',
  roomBed: 'ICU Bed 04',
  tpaProvider: 'Star Health Allied Insurance (Cashless Pre-Auth Approved)',
  tpaClaimId: 'TPA-SH-99210-2026',
  items: [
    { desc: 'ICU Bed Charges (2 Days @ ₹4,500/day)', category: 'Room & Nursing', amount: 9000 },
    { desc: 'Cardiology Specialist Consultation & Rounding', category: 'Doctor Fees', amount: 3500 },
    { desc: 'Cardiac Monitoring & Oxygen Support Services', category: 'Operational Care', amount: 2800 },
    { desc: 'Complete Blood Count & Cardiac Biomarkers (Trop-I)', category: 'Laboratory', amount: 3200 },
    { desc: 'Post-Op Critical Care Pharmacy & Infusions', category: 'Pharmacy', amount: 4650 },
    { desc: 'Consumables, Syringes & Sanitization Kit', category: 'Consumables', amount: 950 }
  ],
  subtotal: 24100,
  taxGst: 0,
  discount: 1100,
  netTotal: 23000,
  tpaApprovedAmount: 20000,
  patientCoPay: 3000,
  paymentStatus: 'Co-Pay Settled via UPI',
  tpaStatus: 'Claim Dispatched to TPA Desk'
};

export const MOCK_ANALYTICS = {
  kpis: [
    { title: 'Total Patients Registered', value: '1,428', change: '+12.4%', period: 'This Month', icon: 'bi-people-fill', accent: '#1a73e8' },
    { title: 'OPD Consultations', value: '984', change: '+8.1%', period: 'This Month', icon: 'bi-person-check-fill', accent: '#10b981' },
    { title: 'IPD Admissions', value: '196', change: '+5.6%', period: 'This Month', icon: 'bi-hospital-fill', accent: '#f87820' },
    { title: 'Bed Occupancy Rate', value: '82.4%', change: '+3.2%', period: 'Live Status', icon: 'bi-grid-fill', accent: '#ed1b24' },
    { title: 'Total Pharmacy Dispensed', value: '₹14.8L', change: '+9.8%', period: 'This Month', icon: 'bi-capsule', accent: '#ffc53d' },
    { title: 'Average Turnaround Time', value: '28 min', change: '-14.0%', period: 'OPD Wait', icon: 'bi-clock-history', accent: '#10b981' }
  ],
  departmentShare: [
    { name: 'Cardiology', share: 26, patients: 371 },
    { name: 'General Medicine', share: 22, patients: 314 },
    { name: 'Orthopaedics', share: 18, patients: 257 },
    { name: 'Obstetrics & Gynae', share: 15, patients: 214 },
    { name: 'Neurology', share: 11, patients: 157 },
    { name: 'Others', share: 8, patients: 115 }
  ],
  weeklyTrends: [
    { day: 'Mon', opd: 142, ipd: 28 },
    { day: 'Tue', opd: 165, ipd: 32 },
    { day: 'Wed', opd: 158, ipd: 26 },
    { day: 'Thu', opd: 148, ipd: 31 },
    { day: 'Fri', opd: 172, ipd: 35 },
    { day: 'Sat', opd: 130, ipd: 24 },
    { day: 'Sun', opd: 69, ipd: 20 }
  ]
};

export const MOCK_ABDM_STAGES = [
  {
    step: 'M1',
    title: 'ABHA Creation & Verification',
    badge: 'Milestone 1',
    description: 'Patient digital health identity generation via Aadhaar OTP or Mobile. Instant 14-digit ABHA number and QR-code health card issued at the hospital reception.',
    features: ['Instant ABHA Creation', 'Aadhaar / Mobile OTP validation', 'Scan & Share Hospital OPD token registration', 'Zero manual demographic re-entry']
  },
  {
    step: 'M2',
    title: 'Health Information Provider (HIP)',
    badge: 'Milestone 2',
    description: 'Hospital connects and digitizes clinical encounters. Consultation notes, diagnostic reports, and digital discharge summaries are linked to patient ABHA records securely.',
    features: ['FHIR R4 digital record packaging', 'Digitally signed lab reports & prescriptions', 'Automatic document linkage to patient UHID', 'Secure gateway transmission to ABDM network']
  },
  {
    step: 'M3',
    title: 'Health Information User (HIU) & Consent',
    badge: 'Milestone 3',
    description: 'Consent-based sharing. When a patient arrives, doctors can request past health records with explicit patient OTP authorization, unlocking seamless cross-hospital care history.',
    features: ['Explicit patient-driven digital consent', 'Time-bound access window', 'View past hospitalizations & diagnostic records', 'Full audit trail and data encryption at rest & in transit']
  }
];
