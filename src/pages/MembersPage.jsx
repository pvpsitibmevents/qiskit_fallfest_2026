import React, { useEffect } from 'react';
import { GlassPanel } from '@/components/ui/glass';

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

  const studentLeadOrganizer = {
    name: 'Dadi Bhagyavathi',
    role: 'Student Lead Organizer',
    title: 'Final Year, ECE',
    advocateBadge: 'Qiskit Advocate',
    images: [
      `${import.meta.env.BASE_URL}team/bhagyavathi_dadi.jpg`,
      `${import.meta.env.BASE_URL}team/Bhagyavathi Dadi.jpg`,
      `${import.meta.env.BASE_URL}team/bhagyavathi_dadi.png`,
      `${import.meta.env.BASE_URL}team/Bhagyavathi Dadi.png`,
    ],
  };

  const studentCoordinators = [
    {
      name: 'Yashwanth',
      role: 'Student Coordinator',
      branch: 'Third Year, IT',
      images: [
        `${import.meta.env.BASE_URL}team/Yashwanth.jpeg`,
        `${import.meta.env.BASE_URL}team/yashwanth.jpeg`,
      ],
    },
    {
      name: 'Azeem Abdul',
      role: 'Student Coordinator',
      branch: 'Second Year, CSE',
      images: [
        `${import.meta.env.BASE_URL}team/Azeem Abdul.jpeg`,
        `${import.meta.env.BASE_URL}team/azeem_abdul.jpeg`,
      ],
    },
    {
      name: 'Sireesha',
      role: 'Student Coordinator',
      branch: 'Second Year, CSE',
      images: [
        `${import.meta.env.BASE_URL}team/Sireesha.jpeg`,
        `${import.meta.env.BASE_URL}team/sireesha.jpeg`,
      ],
    },
    {
      name: 'Charan Teja',
      role: 'Student Coordinator',
      branch: 'Second Year, IT',
      images: [
        `${import.meta.env.BASE_URL}team/Charan Teja.jpeg`,
        `${import.meta.env.BASE_URL}team/charan_teja.jpeg`,
      ],
    },
    {
      name: 'Ch Vaarshik',
      role: 'Student Coordinator',
      branch: 'Second Year, ECE',
      images: [
        `${import.meta.env.BASE_URL}team/Ch Vaarshik.jpeg`,
        `${import.meta.env.BASE_URL}team/ch_vaarshik.jpeg`,
      ],
    },
    {
      name: 'CH Pranitha',
      role: 'Student Coordinator',
      branch: 'Second Year, ECE',
      images: [
        `${import.meta.env.BASE_URL}team/Ch Pranitha.jpeg`,
        `${import.meta.env.BASE_URL}team/ch_pranitha.jpeg`,
      ],
    },
    {
      name: 'K Ruth Madhuri',
      role: 'Student Coordinator',
      branch: 'Second Year, ECE',
      images: [
        `${import.meta.env.BASE_URL}team/K Ruth Madhuri.jpeg`,
        `${import.meta.env.BASE_URL}team/k_ruth_madhuri.jpeg`,
      ],
    },
    {
      name: 'Pradhyumna',
      role: 'Student Coordinator',
      branch: 'ECE (FED)',
      images: [
        `${import.meta.env.BASE_URL}team/Pradhyumna.jpeg`,
        `${import.meta.env.BASE_URL}team/pradhyumna.jpeg`,
      ],
    },
    {
      name: 'N Jithendra',
      role: 'Student Coordinator',
      branch: 'ECE (FED)',
      images: [
        `${import.meta.env.BASE_URL}team/N Jithendra.jpeg`,
        `${import.meta.env.BASE_URL}team/n_jithendra.jpeg`,
      ],
    },
    {
      name: 'Jai Teja',
      role: 'Student Coordinator',
      branch: 'ECE (FED)',
      images: [
        `${import.meta.env.BASE_URL}team/Jai Teja.jpeg`,
        `${import.meta.env.BASE_URL}team/jai_teja.jpeg`,
      ],
    },
  ];

  // Preload all team member images into browser cache instantly on mount
  useEffect(() => {
    const allImages = [
      ...chiefPatron.images,
      ...deptHead.images,
      ...leadOrganizer.images,
      ...coOrganizers.flatMap((co) => co.images),
      ...studentLeadOrganizer.images,
      ...studentCoordinators.flatMap((sc) => sc.images),
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
          <GlassPanel
            blur={0}
            dome={1.6}
            strength={0.45}
            radius={24}
            className="w-full max-w-lg rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl relative overflow-hidden group"
            contentClassName="p-7 flex flex-col items-center text-center relative"
          >
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
          </GlassPanel>

          {/* Hierarchy Connector Stem 1 */}
          <div className="w-0.5 h-10 bg-gradient-to-b from-primary to-secondary relative flex items-center justify-center my-1">
            <div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-sm animate-pulse" />
          </div>

          {/* Level 2: Department Head (HOD Ma'am) */}
          <GlassPanel
            blur={0}
            dome={1.6}
            strength={0.45}
            radius={24}
            className="w-full max-w-lg rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl relative overflow-hidden group"
            contentClassName="p-7 flex flex-col items-center text-center relative"
          >
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
          </GlassPanel>

          {/* Hierarchy Connector Stem 2 */}
          <div className="w-0.5 h-10 bg-gradient-to-b from-secondary to-primary relative flex items-center justify-center my-1">
            <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-sm animate-pulse" />
          </div>

          {/* Level 3: Lead Organizer (Faculty Lead) */}
          <GlassPanel
            blur={0}
            dome={1.6}
            strength={0.45}
            radius={24}
            className="w-full max-w-lg rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl relative overflow-hidden group"
            contentClassName="p-7 flex flex-col items-center text-center relative"
          >
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
          </GlassPanel>
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
              <GlassPanel
                key={idx}
                blur={0}
                dome={1.6}
                strength={0.45}
                radius={24}
                className="w-full rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl relative overflow-hidden group"
                contentClassName="p-7 flex flex-col items-center text-center relative h-full justify-between"
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
              </GlassPanel>
            ))}
          </div>
        </div>

        {/* Student Organizing Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="bg-primary/10 dark:bg-primary/20 text-primary font-label-caps text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider inline-block mb-2">
              STUDENT INITIATIVE &amp; LEADERSHIP
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-bold text-center text-on-surface dark:text-dark-text">
              Student Organizing Team
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant dark:text-dark-text-muted max-w-2xl mx-auto mt-2">
              Dedicated student organizers and technical coordinators driving workshops, competitions, and participant engagement across engineering branches.
            </p>
          </div>

          {/* Student Lead Organizer Featured Card */}
          <div className="flex justify-center mb-12">
            <GlassPanel
              blur={0}
              dome={1.6}
              strength={0.45}
              radius={24}
              className="w-full max-w-md rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl relative overflow-hidden group border border-primary/30"
              contentClassName="p-7 flex flex-col items-center text-center relative"
            >
              {/* Subtle background glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all pointer-events-none" />

              {/* Badges container */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-5 relative z-10">
                <span className="bg-primary text-on-primary font-label-caps text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm uppercase tracking-wider">
                  {studentLeadOrganizer.role}
                </span>
                <span className="bg-gradient-to-r from-primary to-secondary text-white font-label-caps text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  {studentLeadOrganizer.advocateBadge}
                </span>
              </div>

              <div className="relative z-10">
                {renderPhotoCard(studentLeadOrganizer, 'w-32 h-32')}
              </div>

              <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface dark:text-dark-text mb-1 mt-5 relative z-10 group-hover:text-primary transition-colors">
                {studentLeadOrganizer.name}
              </h3>
              <p className="font-body-md text-sm sm:text-base text-primary font-semibold mb-1.5 relative z-10">
                {studentLeadOrganizer.title}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-label-caps text-on-surface-variant dark:text-dark-text-muted bg-surface-container dark:bg-dark-surface px-3.5 py-1.5 rounded-lg border border-outline-variant/30 dark:border-dark-border relative z-10">
                <span>IBM Quantum Community • Qiskit Advocate</span>
              </div>
            </GlassPanel>
          </div>

          {/* Student Coordinators Grid (10 Members in Floating Glass Panels) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
            {studentCoordinators.map((student, idx) => (
              <GlassPanel
                key={idx}
                blur={0}
                dome={1.6}
                strength={0.4}
                radius={20}
                className="w-full rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group border border-outline-variant/30 dark:border-dark-border hover:border-secondary/50"
                contentClassName="p-5 flex flex-col items-center text-center relative h-full justify-between"
              >
                {/* Floating ambient glow */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-secondary/10 rounded-full blur-xl group-hover:bg-secondary/20 transition-all pointer-events-none" />

                {/* Top Badge */}
                <div className="w-full flex justify-center mb-3 relative z-10">
                  <span className="bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary-fixed-dim border border-secondary/25 font-label-caps text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                    {student.role}
                  </span>
                </div>

                {/* Photo Frame */}
                <div className="relative z-10 my-1">
                  {renderPhotoCard(student, 'w-28 h-28')}
                </div>

                {/* Name & Branch */}
                <div className="mt-3 relative z-10 w-full">
                  <h4 className="font-headline-md text-base font-bold text-on-surface dark:text-dark-text mb-0.5 group-hover:text-secondary transition-colors">
                    {student.name}
                  </h4>
                  <p className="font-body-md text-xs text-primary font-semibold mb-1">
                    {student.branch}
                  </p>
                  <span className="text-[10px] text-on-surface-variant dark:text-dark-text-muted font-label-caps tracking-wider block">
                    PVPSIT Student Team
                  </span>
                </div>
              </GlassPanel>
            ))}
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
