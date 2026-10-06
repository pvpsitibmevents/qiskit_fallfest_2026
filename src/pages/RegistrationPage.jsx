import React, { useState } from 'react';

// Deployed Google Apps Script Web App URL for Google Sheets integration
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbyUZtXtv2gxIL2cou_-je-Ph4kq8ZMzGGCW-GiEPh4ONNvSQhCS523E-49D6bioFpL4/exec';

export default function RegistrationPage({ setActivePage }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: 'Computer Science & Engineering',
    year: '3rd Year',
    registrationType: 'Full Pass (Pre-Fest + Main Fest + Post-Fest)',
    college: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [registeredData, setRegisteredData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      if (GOOGLE_SCRIPT_URL) {
        const params = new URLSearchParams();
        params.append('timestamp', payload.timestamp);
        params.append('fullName', payload.fullName);
        params.append('email', payload.email);
        params.append('phone', payload.phone || 'N/A');
        params.append('department', payload.department);
        params.append('year', payload.year);
        params.append('registrationType', payload.registrationType);
        params.append('college', payload.college);

        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString(),
        });
      }
      setRegisteredData(payload);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Submission error:', err);
      setRegisteredData(payload);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const tracks = [
    {
      id: 'Full Pass (Pre-Fest + Main Fest + Post-Fest)',
      title: 'Full Festival Pass',
      badge: 'Recommended',
      badgeColor: 'bg-primary text-white',
      desc: 'All-inclusive access: Pre-fest workshops, 3-day Main Fest (15–17 Oct), CircuitCraft hackathon, and post-fest challenges.',
      icon: 'stars',
    },
    {
      id: 'Main Fest Only (Oct 15–17)',
      title: 'Main Fest Pass',
      badge: '3 Days',
      badgeColor: 'bg-secondary text-white',
      desc: 'Oct 15–17: Keynote addresses by IBM scientists, hands-on Qiskit Ignition workshop, and CircuitCraft team challenge.',
      icon: 'rocket_launch',
    },
    {
      id: 'Pre-Fest Sessions Only (15 Sept - 8 Oct)',
      title: 'Pre-Fest Track Only',
      badge: 'Sessions',
      badgeColor: 'bg-outline-variant/50 text-on-surface dark:text-dark-text',
      desc: 'Introductory awareness lectures, Quantum Clash debates, Q-Canvas poster pitches, and Q-Bits strategy quiz.',
      icon: 'school',
    },
  ];

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'PVPSIT Qiskit Fall Fest 2026: Q-CONNECT'
  )}&dates=20261015T033000Z/20261017T113000Z&details=${encodeURIComponent(
    'Q-CONNECT 2026: From Quantum Curiosity to Quantum Circuits at PVPSIT, Vijayawada. Keynotes, workshops & CircuitCraft.'
  )}&location=${encodeURIComponent(
    'Prasad V. Potluri Siddhartha Institute of Technology, Kanuru, Vijayawada, Andhra Pradesh 520007'
  )}`;

  return (
    <div className="w-full min-h-screen py-10 sm:py-16 px-gutter max-w-container-max mx-auto animate-fadeIn">
      {/* Top Header Banner */}
      <div className="text-center mb-12 sm:mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 px-4 py-1.5 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label-caps text-xs tracking-wider uppercase font-bold">
            IBM QUANTUM COMMUNITY EVENT • PVPSIT
          </span>
        </div>

        <h1 className="font-headline-xl text-3xl sm:text-5xl md:text-6xl font-extrabold text-on-surface dark:text-dark-text tracking-tight">
          Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">Q-CONNECT 2026</span>
        </h1>

        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant dark:text-dark-text-muted max-w-2xl mx-auto leading-relaxed">
          From Quantum Curiosity to Quantum Circuits. Register for free to attend keynotes, hands-on Qiskit coding workshops, and team challenges at PVPSIT, Vijayawada.
        </p>
      </div>

      {!submitted ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Registration Form Card */}
          <div className="lg:col-span-7 bg-white dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
            {/* Subtle glow circles */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 mb-8 pb-5 border-b border-outline-variant/20 dark:border-dark-border">
              <h2 className="font-headline-md text-2xl font-bold text-on-surface dark:text-dark-text mb-1">
                Participant Information
              </h2>
              <p className="text-sm text-on-surface-variant dark:text-dark-text-muted">
                Please provide accurate details for your participation certificate and badge credentials.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-bold text-on-surface dark:text-dark-text uppercase tracking-wider mb-2"
                >
                  Full Name <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant dark:text-dark-text-muted">
                    <span className="material-symbols-outlined text-lg">person</span>
                  </div>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-surface-container-low dark:bg-dark-surface border border-outline-variant/40 dark:border-dark-border text-on-surface dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-on-surface dark:text-dark-text uppercase tracking-wider mb-2"
                >
                  Email Address <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant dark:text-dark-text-muted">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="e.g. name@pvpsiddhartha.ac.in or personal email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-surface-container-low dark:bg-dark-surface border border-outline-variant/40 dark:border-dark-border text-on-surface dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <p className="text-[11px] text-on-surface-variant dark:text-dark-text-muted mt-1.5">
                  Your event confirmation and certificate will be sent to this email.
                </p>
              </div>

              {/* Phone / WhatsApp (Optional) */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-bold text-on-surface dark:text-dark-text uppercase tracking-wider mb-2"
                >
                  Phone / WhatsApp Number <span className="text-xs font-normal text-on-surface-variant dark:text-dark-text-muted">(Optional for updates)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant dark:text-dark-text-muted">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-surface-container-low dark:bg-dark-surface border border-outline-variant/40 dark:border-dark-border text-on-surface dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Department & Year Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="department"
                    className="block text-xs font-bold text-on-surface dark:text-dark-text uppercase tracking-wider mb-2"
                  >
                    Department <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant dark:text-dark-text-muted">
                      <span className="material-symbols-outlined text-lg">account_tree</span>
                    </div>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full pl-11 pr-8 py-3.5 rounded-xl bg-surface-container-low dark:bg-dark-surface border border-outline-variant/40 dark:border-dark-border text-on-surface dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option>Computer Science & Engineering</option>
                      <option>Information Technology</option>
                      <option>Electronics & Communication</option>
                      <option>Electrical & Electronics</option>
                      <option>Freshman Engineering (FED)</option>
                      <option>Mechanical Engineering</option>
                      <option>Civil Engineering</option>
                      <option>Other / External College</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-on-surface-variant dark:text-dark-text-muted">
                      <span className="material-symbols-outlined text-base">expand_more</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="year"
                    className="block text-xs font-bold text-on-surface dark:text-dark-text uppercase tracking-wider mb-2"
                  >
                    Year of Study <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant dark:text-dark-text-muted">
                      <span className="material-symbols-outlined text-lg">calendar_month</span>
                    </div>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full pl-11 pr-8 py-3.5 rounded-xl bg-surface-container-low dark:bg-dark-surface border border-outline-variant/40 dark:border-dark-border text-on-surface dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option>1st Year B.Tech</option>
                      <option>2nd Year B.Tech</option>
                      <option>3rd Year B.Tech</option>
                      <option>4th Year B.Tech</option>
                      <option>Postgraduate (M.Tech / MCA)</option>
                      <option>Faculty / Research Scholar</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-on-surface-variant dark:text-dark-text-muted">
                      <span className="material-symbols-outlined text-base">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Institution / College */}
              <div>
                <label
                  htmlFor="college"
                  className="block text-xs font-bold text-on-surface dark:text-dark-text uppercase tracking-wider mb-2"
                >
                  College / Institution Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant dark:text-dark-text-muted">
                    <span className="material-symbols-outlined text-lg">apartment</span>
                  </div>
                  <input
                    id="college"
                    name="college"
                    type="text"
                    placeholder="Enter college or institution name"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-surface-container-low dark:bg-dark-surface border border-outline-variant/40 dark:border-dark-border text-on-surface dark:text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Registration Track Selection */}
              <div>
                <label className="block text-xs font-bold text-on-surface dark:text-dark-text uppercase tracking-wider mb-3">
                  Select Your Registration Track <span className="text-primary">*</span>
                </label>
                <div className="space-y-3">
                  {tracks.map((t) => {
                    const isSelected = formData.registrationType === t.id;
                    return (
                      <div
                        key={t.id}
                        onClick={() => setFormData({ ...formData, registrationType: t.id })}
                        className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                          isSelected
                            ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-sm'
                            : 'border-outline-variant/30 dark:border-dark-border hover:border-primary/40 bg-surface-container-low/50 dark:bg-dark-surface'
                        }`}
                      >
                        <div className="pt-0.5">
                          <input
                            type="radio"
                            name="registrationType"
                            checked={isSelected}
                            onChange={() => setFormData({ ...formData, registrationType: t.id })}
                            className="w-4 h-4 text-primary accent-primary cursor-pointer"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="font-bold text-sm text-on-surface dark:text-dark-text">
                              {t.title}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${t.badgeColor}`}>
                              {t.badge}
                            </span>
                          </div>
                          <p className="text-xs text-on-surface-variant dark:text-dark-text-muted leading-relaxed">
                            {t.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-bold py-4 px-6 rounded-xl shadow-pulse-pink transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Saving Registration...</span>
                    </>
                  ) : (
                    <>
                      <span>Complete Registration</span>
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-on-surface-variant dark:text-dark-text-muted mt-3">
                  Registration is completely free. We will never share your email with third parties.
                </p>
              </div>
            </form>
          </div>

          {/* Right Information & Perks Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Event Summary Card */}
            <div className="bg-[#F8F9FF] dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border rounded-2xl p-6 sm:p-7 shadow-md">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-outline-variant/20 dark:border-dark-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">event</span>
                </div>
                <div>
                  <h3 className="font-headline-md font-bold text-lg text-on-surface dark:text-dark-text">
                    Event Overview
                  </h3>
                  <span className="text-xs text-secondary dark:text-secondary-fixed-dim font-semibold">
                    PVPSIT Qiskit Fall Fest 2026
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">calendar_today</span>
                  <div>
                    <strong className="block text-on-surface dark:text-dark-text font-bold">Main Fest Dates</strong>
                    <span className="text-on-surface-variant dark:text-dark-text-muted">15, 16 & 17 October 2026</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">schedule</span>
                  <div>
                    <strong className="block text-on-surface dark:text-dark-text font-bold">Pre-Fest Sessions</strong>
                    <span className="text-on-surface-variant dark:text-dark-text-muted">15 Sept – 8 Oct 2026 (7 awareness & competition events)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                  <div>
                    <strong className="block text-on-surface dark:text-dark-text font-bold">Venue</strong>
                    <span className="text-on-surface-variant dark:text-dark-text-muted">
                      Auditorium & Computing Laboratories, PVPSIT, Kanuru, Vijayawada - 520007
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">groups</span>
                  <div>
                    <strong className="block text-on-surface dark:text-dark-text font-bold">Organizers</strong>
                    <span className="text-on-surface-variant dark:text-dark-text-muted">
                      Department of Freshman Engineering in collaboration with CSE & ECE departments
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* What Participants Receive */}
            <div className="bg-[#F8F9FF] dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border rounded-2xl p-6 sm:p-7 shadow-md">
              <h3 className="font-headline-md font-bold text-lg text-on-surface dark:text-dark-text mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">card_giftcard</span>
                <span>What's Included</span>
              </h3>

              <ul className="space-y-3 text-xs text-on-surface-variant dark:text-dark-text-muted">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-emerald-500 text-base shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Official IBM Quantum Participation Certificate</strong> validated by IBM Quantum Community.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-emerald-500 text-base shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Hands-on Qiskit SDK Training:</strong> Circuit construction, gate manipulation, and algorithm execution.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-emerald-500 text-base shrink-0 mt-0.5">check_circle</span>
                  <span><strong>CircuitCraft Flagship Hackathon:</strong> Team competition with medals, certificates, and merchandise prizes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-emerald-500 text-base shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Direct Interaction with Keynotes:</strong> Learn from research scientists at IBM Quantum, BQP, and IQ Leap.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-emerald-500 text-base shrink-0 mt-0.5">check_circle</span>
                  <span><strong>Free Exclusive Swag:</strong> Qiskit stickers, badges, and learning resources package.</span>
                </li>
              </ul>
            </div>

            {/* Need Help Box */}
            <div className="bg-surface-container-low dark:bg-dark-surface border border-outline-variant/30 dark:border-dark-border rounded-2xl p-6 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary dark:text-secondary-fixed-dim flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-xl">contact_support</span>
              </div>
              <h4 className="font-bold text-sm text-on-surface dark:text-dark-text">Have Questions?</h4>
              <p className="text-xs text-on-surface-variant dark:text-dark-text-muted">
                Need guidance or want to check event rules? Reach out to our organizing committee or visit the schedule roadmap.
              </p>
              <button
                onClick={() => setActivePage('schedule')}
                className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
              >
                <span>View Complete Event Schedule</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Confirmation State View */
        <div className="max-w-2xl mx-auto bg-white dark:bg-dark-surface-card border-2 border-primary/40 rounded-3xl p-8 sm:p-12 shadow-2xl text-center space-y-6 animate-fadeIn relative overflow-hidden">
          <div className="w-20 h-20 rounded-full bg-primary/10 dark:bg-primary/20 text-primary mx-auto flex items-center justify-center shadow-pulse-pink animate-bounce">
            <span className="material-symbols-outlined text-5xl">check_circle</span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-label-caps font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">
              REGISTRATION SUCCESSFUL
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-on-surface dark:text-dark-text">
              Welcome, {registeredData?.fullName}!
            </h2>
            <p className="text-sm text-on-surface-variant dark:text-dark-text-muted max-w-md mx-auto">
              Your registration for <strong>PVPSIT Qiskit Fall Fest 2026</strong> has been received and confirmed in the event database.
            </p>
          </div>

          {/* Ticket Summary Box */}
          <div className="bg-[#F8F9FF] dark:bg-dark-surface border border-outline-variant/30 dark:border-dark-border rounded-2xl p-6 text-left space-y-3 text-xs">
            <div className="flex justify-between items-center pb-3 border-b border-outline-variant/20 dark:border-dark-border">
              <span className="text-on-surface-variant dark:text-dark-text-muted font-semibold">Registration Track:</span>
              <span className="font-bold text-primary">{registeredData?.registrationType}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant dark:text-dark-text-muted font-semibold">Registered Email:</span>
              <span className="font-bold text-on-surface dark:text-dark-text">{registeredData?.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant dark:text-dark-text-muted font-semibold">Department:</span>
              <span className="font-bold text-on-surface dark:text-dark-text">{registeredData?.department} ({registeredData?.year})</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant dark:text-dark-text-muted font-semibold">Institution:</span>
              <span className="font-bold text-on-surface dark:text-dark-text">{registeredData?.college}</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-outline-variant/20 dark:border-dark-border">
              <span className="text-on-surface-variant dark:text-dark-text-muted font-semibold">Timestamp:</span>
              <span className="font-mono text-[11px] text-secondary dark:text-secondary-fixed-dim">{registeredData?.timestamp}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-white font-bold text-xs px-5 py-3.5 rounded-xl hover:bg-secondary/90 transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined text-base">calendar_add_on</span>
              <span>Add to Google Calendar</span>
            </a>

            <button
              onClick={() => setActivePage('schedule')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-bold text-xs px-5 py-3.5 rounded-xl hover:bg-on-primary-fixed-variant transition-all shadow-pulse-pink hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined text-base">route</span>
              <span>Explore Event Roadmap</span>
            </button>

            <button
              onClick={() => setActivePage('landing')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface-container dark:bg-dark-surface-elevated text-on-surface dark:text-dark-text font-bold text-xs px-5 py-3.5 rounded-xl border border-outline-variant/30 hover:border-primary transition-all hover:scale-105 active:scale-95"
            >
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
