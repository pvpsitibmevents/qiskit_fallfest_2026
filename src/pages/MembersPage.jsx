import React, { useEffect } from 'react';

export default function MembersPage({ onOpenRegister }) {
  // Leadership & Team Structure with fallback aliases
  const chiefPatron = {
    name: 'Dr. K. Sivaji Babu',
    role: 'Chief Patron',
    title: 'Principal, PVPSIT',
    images: [
      `${import.meta.env.BASE_URL}team/sivaji_babu.jpg`,
      `${import.meta.env.BASE_URL}team/Sivaji Babu.jpg`,
      `${import.meta.env.BASE_URL}team/sivaji.jpg`,
    ],
  };

  const deptHead = {
    name: 'Dr. M. Srilakshmi',
    role: 'Department Head',
    title: 'HOD, Freshman Engineering Department',
    images: [
      `${import.meta.env.BASE_URL}team/srilakshmi.jpg`,
      `${import.meta.env.BASE_URL}team/Dr. M. Srilakshmi.jpg`,
    ],
  };

  const leadOrganizer = {
    name: 'Dr. Sreedevi Gogula',
    role: 'Lead Organizer',
    title: 'Faculty Lead',
    images: [
      `${import.meta.env.BASE_URL}team/sreedevi.jpg`,
      `${import.meta.env.BASE_URL}team/Dr. Sreedevi Gogula.jpg`,
    ],
  };

  const coOrganizers = [
    {
      name: 'Prashant A',
      role: 'Assistant Professor (CSE)',
      images: [
        `${import.meta.env.BASE_URL}team/prashant_a.jpg`,
        `${import.meta.env.BASE_URL}team/Prashant A.jpg`,
        `${import.meta.env.BASE_URL}team/prashant.jpg`,
      ],
    },
    {
      name: 'V. Ratnakumari',
      role: 'Assistant Professor (ECE)',
      images: [
        `${import.meta.env.BASE_URL}team/Ratnakumari.jpg`,
        `${import.meta.env.BASE_URL}team/V. Ratnakumari.jpg`,
      ],
    },
    {
      name: 'Dr. Silpa Mandava',
      role: 'Assistant Professor (FED)',
      images: [
        `${import.meta.env.BASE_URL}team/silpa_mandava.jpg`,
        `${import.meta.env.BASE_URL}team/Silpa Mandava.jpg`,
        `${import.meta.env.BASE_URL}team/Dr. Silpa Mandava.jpg`,
      ],
    },
    {
      name: 'M. Prameela',
      role: 'Assistant Professor (FED)',
      images: [
        `${import.meta.env.BASE_URL}team/Prameela.jpg`,
        `${import.meta.env.BASE_URL}team/M. Prameela.jpg`,
      ],
    },
    {
      name: 'Dr. Raghavendra Ganesh',
      role: 'Assistant Professor (FED)',
      images: [
        `${import.meta.env.BASE_URL}team/raghavendra_ganesh.jpg`,
        `${import.meta.env.BASE_URL}team/Raghavendra Ganesh.jpg`,
        `${import.meta.env.BASE_URL}team/Dr. Raghavendra Ganesh.jpg`,
      ],
    },
    {
      name: 'Dr. V. S. N. Malleswari',
      role: 'Assistant Professor (FED)',
      images: [
        `${import.meta.env.BASE_URL}team/Malleswari.jpg`,
        `${import.meta.env.BASE_URL}team/Dr. V. S. N. Malleswari.jpg`,
      ],
    },
  ];

  const studentOrganizer = {
    name: 'Bhagyavathi Dadi',
    role: 'Student Organizer',
    title: 'Final Year ECE',
    advocateBadge: 'Qiskit Advocate',
    images: [
      `${import.meta.env.BASE_URL}team/bhagyavathi_dadi.jpg`,
      `${import.meta.env.BASE_URL}team/Bhagyavathi Dadi.jpg`,
      `${import.meta.env.BASE_URL}team/bhagyavathi_dadi.png`,
      `${import.meta.env.BASE_URL}team/Bhagyavathi Dadi.png`,
    ],
  };

  // Preload all team member images into browser cache instantly on mount
  useEffect(() => {
    const allImages = [
      ...chiefPatron.images,
      ...deptHead.images,
      ...leadOrganizer.images,
      ...coOrganizers.flatMap((co) => co.images),
      ...studentOrganizer.images,
    ];
    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleImageError = (e, memberImages) => {
    const currentSrc = e.target.getAttribute('src');
    const currentIndex = memberImages.indexOf(currentSrc);
    if (currentIndex !== -1 && currentIndex < memberImages.length - 1) {
      // Try next fallback image URL
      e.target.setAttribute('src', memberImages[currentIndex + 1]);
    } else {
      // Hide broken image and show person icon fallback
      e.target.style.display = 'none';
      if (e.target.nextSibling) {
        e.target.nextSibling.style.display = 'flex';
      }
    }
  };

  const renderPhotoCard = (member, sizeClasses) => (
    <div className={`relative overflow-hidden bg-white dark:bg-dark-surface shadow-md border-4 border-surface dark:border-dark-border ${sizeClasses} rounded-xl`}>
      <img
        src={member.images[0]}
        alt={member.name}
        loading="eager"
        fetchpriority="high"
        className="w-full h-full object-cover"
        onError={(e) => handleImageError(e, member.images)}
      />
      <div className="w-full h-full bg-surface-variant dark:bg-dark-surface flex-col items-center justify-center text-on-surface-variant dark:text-dark-text-muted hidden">
        <span className="material-symbols-outlined text-4xl">person</span>
      </div>
    </div>
  );

  return (
    <div className="w-full flex-1">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-secondary-fixed/50 dark:bg-secondary/20 px-4 py-1.5 rounded-full mb-6 border border-secondary/20 dark:border-secondary/30">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-label-caps text-label-caps text-primary tracking-wider">THE TEAM</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl md:text-[64px] font-bold text-on-surface dark:text-dark-text mb-6 leading-tight">
          Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Organizing Team</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-dark-text-muted max-w-2xl mx-auto">
          Meet the faculty and organizers bringing PVPSIT Qiskit Fall Fest 2026 to life.
        </p>
      </section>

      {/* Decorative Divider */}
      <div className="max-w-container-max mx-auto px-gutter py-4 flex justify-center items-center">
        <div className="w-full max-w-md h-px bg-outline-variant dark:bg-dark-border relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary border border-surface dark:border-dark-bg" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-surface dark:bg-dark-bg border-2 border-primary" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary border border-surface dark:border-dark-bg" />
        </div>
      </div>

      {/* Team Content Section */}
      <section className="max-w-container-max mx-auto px-gutter py-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-text-muted">
            PVPSIT Qiskit Fall Fest 2026 is supported by a dedicated team of faculty and organizers committed to creating an engaging quantum computing experience.
          </p>
        </div>

        {/* Leadership Hierarchy (High Official to Lowers: Chief Patron -> Department Head -> Lead Organizer) */}
        <div className="flex flex-col items-center mb-20">
          {/* Level 1: Chief Patron (Principal Sir) */}
          <div className="w-full max-w-lg bg-[#F8F9FF] dark:bg-dark-surface-card border-2 border-primary/30 dark:border-primary/40 rounded-2xl p-7 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2.5 hover:shadow-2xl hover:border-primary shadow-md relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all pointer-events-none" />

            <div className="bg-primary text-on-primary font-label-caps text-xs px-4 py-1.5 rounded-full mb-5 font-bold shadow-sm uppercase tracking-wider relative z-10">
              {chiefPatron.role}
            </div>
            <div className="relative z-10">
              {renderPhotoCard(chiefPatron, 'w-32 h-32')}
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface dark:text-dark-text mb-1 mt-5 relative z-10 group-hover:text-primary transition-colors">
              {chiefPatron.name}
            </h3>
            <p className="font-body-md text-sm sm:text-base text-primary font-semibold mb-1 relative z-10">
              {chiefPatron.title}
            </p>
            <span className="text-xs text-on-surface-variant dark:text-dark-text-muted font-label-caps tracking-wide relative z-10">
              Patron & Institutional Leadership • PVPSIT
            </span>
          </div>

          {/* Hierarchy Connector Stem 1 */}
          <div className="w-0.5 h-10 bg-gradient-to-b from-primary to-secondary relative flex items-center justify-center my-1">
            <div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-sm animate-pulse" />
          </div>

          {/* Level 2: Department Head (HOD Ma'am) */}
          <div className="w-full max-w-lg bg-[#F8F9FF] dark:bg-dark-surface-card border-2 border-secondary/30 dark:border-secondary/40 rounded-2xl p-7 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2.5 hover:shadow-2xl hover:border-secondary shadow-md relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all pointer-events-none" />

            <div className="bg-secondary text-on-secondary font-label-caps text-xs px-4 py-1.5 rounded-full mb-5 font-bold shadow-sm uppercase tracking-wider relative z-10">
              {deptHead.role}
            </div>
            <div className="relative z-10">
              {renderPhotoCard(deptHead, 'w-32 h-32')}
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface dark:text-dark-text mb-1 mt-5 relative z-10 group-hover:text-secondary transition-colors">
              {deptHead.name}
            </h3>
            <p className="font-body-md text-sm sm:text-base text-secondary dark:text-secondary-fixed-dim font-semibold mb-1 relative z-10">
              {deptHead.title}
            </p>
            <span className="text-xs text-on-surface-variant dark:text-dark-text-muted font-label-caps tracking-wide relative z-10">
              Departmental Guidance & Academic Leadership
            </span>
          </div>

          {/* Hierarchy Connector Stem 2 */}
          <div className="w-0.5 h-10 bg-gradient-to-b from-secondary to-primary relative flex items-center justify-center my-1">
            <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm animate-pulse" />
          </div>

          {/* Level 3: Lead Organizer (Faculty Lead) */}
          <div className="w-full max-w-lg bg-[#F8F9FF] dark:bg-dark-surface-card border-2 border-primary/20 dark:border-primary/30 hover:border-primary rounded-2xl p-7 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2.5 hover:shadow-2xl shadow-md relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all pointer-events-none" />

            <div className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-fixed-dim border border-primary/30 font-label-caps text-xs px-4 py-1.5 rounded-full mb-5 font-bold uppercase tracking-wider relative z-10">
              {leadOrganizer.role}
            </div>
            <div className="relative z-10">
              {renderPhotoCard(leadOrganizer, 'w-32 h-32')}
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface dark:text-dark-text mb-1 mt-5 relative z-10 group-hover:text-primary transition-colors">
              {leadOrganizer.name}
            </h3>
            <p className="font-body-md text-sm sm:text-base text-primary font-semibold mb-1 relative z-10">
              {leadOrganizer.title}
            </p>
            <span className="text-xs text-on-surface-variant dark:text-dark-text-muted font-label-caps tracking-wide relative z-10">
              Faculty Lead & Overall Event Coordinator
            </span>
          </div>
        </div>

        {/* Co-Organizers Floating Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary-fixed-dim font-label-caps text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider inline-block mb-2">
              FACULTY COMMITTEE
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-center text-on-surface dark:text-dark-text">
              Co-Organizers
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant dark:text-dark-text-muted max-w-xl mx-auto mt-2">
              Dedicated faculty coordinators driving interdisciplinary student participation across engineering branches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coOrganizers.map((coOrg, idx) => (
              <div
                key={idx}
                className="w-full bg-[#F8F9FF] dark:bg-dark-surface-card border-2 border-outline-variant/30 dark:border-dark-border rounded-2xl p-7 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2.5 hover:shadow-2xl hover:border-primary/50 dark:hover:border-primary/60 shadow-md relative overflow-hidden group"
              >
                {/* Floating ambient glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all pointer-events-none" />

                {/* Top Role Badge */}
                <div className="bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary-fixed-dim border border-secondary/30 font-label-caps text-xs px-4 py-1.5 rounded-full mb-5 font-bold uppercase tracking-wider relative z-10">
                  Co-Organizer
                </div>

                {/* Photo Frame */}
                <div className="relative z-10">
                  {renderPhotoCard(coOrg, 'w-32 h-32')}
                </div>

                {/* Member Name */}
                <h4 className="font-headline-md text-xl font-bold text-on-surface dark:text-dark-text mb-1 mt-5 relative z-10 group-hover:text-primary transition-colors">
                  {coOrg.name}
                </h4>

                {/* Designation */}
                <p className="font-body-md text-sm text-primary font-semibold mb-1 relative z-10">
                  {coOrg.role}
                </p>

                {/* Department Tag */}
                <span className="text-xs text-on-surface-variant dark:text-dark-text-muted font-label-caps tracking-wide relative z-10">
                  PVPSIT Faculty Coordinator
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Student Organizer Section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <span className="bg-primary/10 dark:bg-primary/20 text-primary font-label-caps text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider inline-block mb-2">
              STUDENT INITIATIVE
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-center text-on-surface dark:text-dark-text">
              Student Organizer
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant dark:text-dark-text-muted max-w-xl mx-auto mt-2">
              Empowering peers through student-led quantum computing workshops and community engagement.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md bg-[#F8F9FF] dark:bg-dark-surface-card border-2 border-primary/30 dark:border-primary/40 hover:border-primary rounded-2xl p-7 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2.5 hover:shadow-2xl shadow-md relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all pointer-events-none" />

              {/* Badges container */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-5 relative z-10">
                <span className="bg-primary text-on-primary font-label-caps text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm uppercase tracking-wider">
                  {studentOrganizer.role}
                </span>
                <span className="bg-gradient-to-r from-primary to-secondary text-white font-label-caps text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  ⚛️ {studentOrganizer.advocateBadge}
                </span>
              </div>

              <div className="relative z-10">
                {renderPhotoCard(studentOrganizer, 'w-32 h-32')}
              </div>

              <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface dark:text-dark-text mb-1 mt-5 relative z-10 group-hover:text-primary transition-colors">
                {studentOrganizer.name}
              </h3>
              <p className="font-body-md text-sm sm:text-base text-primary font-semibold mb-1.5 relative z-10">
                {studentOrganizer.title}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-label-caps text-on-surface-variant dark:text-dark-text-muted bg-surface-container dark:bg-dark-surface px-3.5 py-1.5 rounded-lg border border-outline-variant/30 dark:border-dark-border relative z-10">
                <span>IBM Quantum Community • Qiskit Advocate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-container-low dark:bg-dark-bg py-16 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-gutter text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-dark-text mb-4 font-bold">Be Part of the Quantum Journey</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-dark-text-muted mb-8">
            Join us at PVPSIT Qiskit Fall Fest 2026 and explore the world of quantum computing.
          </p>
          <button
            onClick={onOpenRegister}
            className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-lg shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-colors text-lg"
          >
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
}
