import React, { useState } from 'react';
import { MOCK_DOCTORS, MOCK_DEPARTMENTS } from '../../data/mockHospitalData';
import confetti from 'canvas-confetti';
import './interactive-demos.css';

const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
];

export default function AppointmentDemo() {
  const [department, setDepartment] = useState('Cardiology');
  const [selectedDoctorId, setSelectedDoctorId] = useState('doc-1');
  const [selectedDate, setSelectedDate] = useState('2026-11-02');
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState(null);

  const selectedDoctor = MOCK_DOCTORS.find((d) => d.id === selectedDoctorId) || MOCK_DOCTORS[0];

  const handleBook = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!patientName.trim()) newErrors.name = 'Patient full name is required.';
    if (!patientPhone.trim() || patientPhone.trim().length < 10) newErrors.phone = 'Valid 10-digit mobile number is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const tokenNumber = `APT-${Math.floor(1000 + Math.random() * 9000)}`;
    const confirmData = {
      token: tokenNumber,
      patientName,
      patientPhone,
      doctor: selectedDoctor.name,
      department,
      date: selectedDate,
      time: selectedSlot,
      room: selectedDoctor.room
    };

    setConfirmation(confirmData);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch (_) {}
  };

  const handleReset = () => {
    setConfirmation(null);
    setPatientName('');
    setPatientPhone('');
    setPatientEmail('');
    setSymptoms('');
    setErrors({});
  };

  return (
    <div className="appointment-demo-shell" aria-label="Interactive Appointment Scheduling Demo">
      <div className="interactive-demo-badge-row">
        <span className="demo-live-indicator">
          <span className="demo-pulse-dot"></span>
          Product Preview / Interactive Demo
        </span>
        <span className="demo-subtitle">Simulate how patients and front desk book slots in TRIO HIMS</span>
      </div>

      {confirmation ? (
        <div className="appointment-confirmation-card text-center">
          <div className="confirm-icon-circle">
            <i className="bi bi-check2-circle"></i>
          </div>
          <span className="badge bg-success-subtle text-success fs-7 mb-2">Simulated Appointment Confirmed</span>
          <h3>Token #{confirmation.token}</h3>
          <p className="confirm-patient-name">Patient: <strong>{confirmation.patientName}</strong> ({confirmation.patientPhone})</p>

          <div className="confirm-details-grid">
            <div className="confirm-box">
              <span className="confirm-label">Doctor</span>
              <strong>{confirmation.doctor}</strong>
              <small>{confirmation.department}</small>
            </div>
            <div className="confirm-box">
              <span className="confirm-label">Date & Time</span>
              <strong>{confirmation.date}</strong>
              <small>{confirmation.time}</small>
            </div>
            <div className="confirm-box">
              <span className="confirm-label">Consultation Room</span>
              <strong>{confirmation.room}</strong>
              <small>OPD Block A</small>
            </div>
          </div>

          <div className="alert alert-info mt-3 fs-7 text-start">
            <i className="bi bi-info-circle-fill me-2"></i>
            This is an interactive demonstration. In production, TRIO HIMS automatically sends an SMS & WhatsApp notification with a directions link and barcode token.
          </div>

          <button type="button" className="btn btn-outline-primary btn-sm mt-2" onClick={handleReset}>
            <i className="bi bi-arrow-repeat me-1"></i> Book Another Consultation Demo
          </button>
        </div>
      ) : (
        <form onSubmit={handleBook} className="appointment-form-grid">
          <div className="row g-3">
            {/* Step 1: Department & Doctor */}
            <div className="col-md-6">
              <label className="form-label fw-bold fs-7">Select Department</label>
              <select
                className="form-select form-select-sm"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                {MOCK_DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-bold fs-7">Select Doctor</label>
              <select
                className="form-select form-select-sm"
                value={selectedDoctorId}
                onChange={(e) => setSelectedDoctorId(e.target.value)}
              >
                {MOCK_DOCTORS.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} ({doc.specialty})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Date & Slot */}
            <div className="col-md-6">
              <label className="form-label fw-bold fs-7">Consultation Date</label>
              <input
                type="date"
                className="form-control form-control-sm"
                value={selectedDate}
                min="2026-10-30"
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-bold fs-7">Doctor Room & Hours</label>
              <div className="form-control form-control-sm bg-light text-muted">
                {selectedDoctor.room} · {selectedDoctor.opdTimings}
              </div>
            </div>

            {/* Step 3: Slot Chips */}
            <div className="col-12">
              <label className="form-label fw-bold fs-7">Available Time Slots</label>
              <div className="time-slots-wrap">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`time-slot-btn ${selectedSlot === slot ? 'active' : ''}`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Patient Info */}
            <div className="col-md-4">
              <label className="form-label fw-bold fs-7">Patient Name *</label>
              <input
                type="text"
                className={`form-control form-control-sm ${errors.name ? 'is-invalid' : ''}`}
                placeholder="e.g. Rahul Sharma"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="col-md-4">
              <label className="form-label fw-bold fs-7">Phone Number *</label>
              <input
                type="tel"
                className={`form-control form-control-sm ${errors.phone ? 'is-invalid' : ''}`}
                placeholder="+91 98765 43210"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            <div className="col-md-4">
              <label className="form-label fw-bold fs-7">Email (Optional)</label>
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="patient@example.com"
                value={patientEmail}
                onChange={(e) => setPatientEmail(e.target.value)}
              />
            </div>

            <div className="col-12">
              <label className="form-label fw-bold fs-7">Chief Complaint / Symptoms (Optional)</label>
              <textarea
                className="form-control form-control-sm"
                rows="2"
                placeholder="Briefly describe reasons for visit (e.g. Chest pain on exertion for 2 days)..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />
            </div>

            <div className="col-12 text-end mt-3">
              <button type="submit" className="btn-google-pill">
                <span>Confirm Appointment Preview</span>
                <i className="bi bi-calendar-check ms-2" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
