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
    {
      name: 'Bhagyavathi Dadi',
      role: 'Final Year ECE',
      images: [
        `${import.meta.env.BASE_URL}team/bhagyavathi_dadi.jpg`,
        `${import.meta.env.BASE_URL}team/Bhagyavathi Dadi.jpg`,
        `${import.meta.env.BASE_URL}team/bhagyavathi_dadi.png`,
        `${import.meta.env.BASE_URL}team/Bhagyavathi Dadi.png`,
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

        {/* Leadership (Chief Patron & Dept Head) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Chief Patron */}
          <div className="bg-[#F8F9FF] dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border rounded-xl p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors group">
            {renderPhotoCard(chiefPatron, 'w-36 h-36')}
            <div className="bg-primary/10 dark:bg-primary/20 text-primary font-label-caps text-xs px-4 py-1 rounded-full mb-3 mt-6 font-bold">
              {chiefPatron.role}
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface dark:text-dark-text mb-1 font-bold">{chiefPatron.name}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-text-muted text-sm">{chiefPatron.title}</p>
          </div>

          {/* Department Head */}
          <div className="bg-[#F8F9FF] dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border rounded-xl p-8 flex flex-col items-center text-center hover:border-secondary/50 transition-colors group">
            {renderPhotoCard(deptHead, 'w-36 h-36')}
            <div className="bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-secondary-fixed-dim font-label-caps text-xs px-4 py-1 rounded-full mb-3 mt-6 font-bold">
              {deptHead.role}
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface dark:text-dark-text mb-1 font-bold">{deptHead.name}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-text-muted text-sm">{deptHead.title}</p>
          </div>
        </div>

        {/* Lead Organizer */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#F8F9FF] dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border rounded-xl p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors group w-full max-w-md shadow-sm">
            {renderPhotoCard(leadOrganizer, 'w-32 h-32')}
            <div className="bg-primary-container/20 dark:bg-primary/20 text-on-primary-container dark:text-primary-fixed-dim font-label-caps text-xs px-4 py-1 rounded-full mb-3 mt-6 font-bold">
              {leadOrganizer.role}
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface dark:text-dark-text mb-1 font-bold">{leadOrganizer.name}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-text-muted text-sm">{leadOrganizer.title}</p>
          </div>
        </div>

        {/* Co-Organizers Grid */}
        <div className="mb-8">
          <h2 className="font-headline-lg text-headline-lg text-center text-on-surface dark:text-dark-text mb-12 font-bold">Co-Organizers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coOrganizers.map((coOrg, idx) => (
              <div key={idx} className="bg-[#F8F9FF] dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border rounded-xl p-6 flex flex-col items-center text-center hover:border-primary/30 transition-colors group">
                {renderPhotoCard(coOrg, 'w-28 h-28')}
                <h4 className="font-body-lg text-base font-bold text-on-surface dark:text-dark-text mb-1 mt-4">{coOrg.name}</h4>
                <p className="font-label-caps text-xs text-on-surface-variant dark:text-dark-text-muted">{coOrg.role}</p>
              </div>
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
