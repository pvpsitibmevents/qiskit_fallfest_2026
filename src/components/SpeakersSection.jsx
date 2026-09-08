import React from 'react';

export default function SpeakersSection({ onOpenRegister, showHeader = true, className = '' }) {
  const speakers = [
    {
      id: 'kunal-garg',
      name: 'Kunal Garg, Ph.D.',
      role: 'Senior Quantum Computing Developer',
      company: 'BQP',
      companyBadge: 'BQP',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300 border-emerald-500/30',
      category: 'Keynote Speaker',
      bio: 'Pioneering quantum algorithm implementation, industrial optimization, and high-performance quantum software architectures.',
      linkedin: 'https://www.linkedin.com/in/kunal-garg-ph-d-114875146/',
      images: [
        `${import.meta.env.BASE_URL}speakers/kunal_garg.jpg`,
        `${import.meta.env.BASE_URL}speakers/Kunal Garg.jpg`,
      ],
      topics: ['Quantum Algorithms', 'Industrial Optimization', 'Qiskit SDK'],
    },
    {
      id: 'janani-a',
      name: 'Janani A',
      role: 'Quantum Algorithm Engineer',
      company: 'IBM',
      companyBadge: 'IBM',
      badgeColor: 'bg-blue-500/10 text-blue-600 dark:bg-blue-400/15 dark:text-blue-300 border-blue-500/30',
      category: 'Workshop Lead',
      bio: 'Architecting cutting-edge quantum algorithms, circuit transpilation, and hands-on Qiskit Runtime workflows at IBM.',
      linkedin: 'https://www.linkedin.com/in/janani-anantha/',
      images: [
        `${import.meta.env.BASE_URL}speakers/janani_a.jpg`,
        `${import.meta.env.BASE_URL}speakers/Janani A.jpg`,
      ],
      topics: ['Circuit Optimization', 'Qiskit Runtime', 'Quantum Coding'],
    },
    {
      id: 'ritajit-majumdar',
      name: 'Dr. Ritajit Majumdar',
      role: 'Quantum Computing Research Scientist',
      company: 'IBM Quantum',
      companyBadge: 'IBM Quantum',
      badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-400/15 dark:text-indigo-300 border-indigo-500/30',
      category: 'Research Scientist',
      bio: 'Advancing research in quantum error mitigation, fault-tolerant compilation, and next-generation quantum computing systems at IBM Quantum.',
      linkedin: 'https://www.linkedin.com/in/ritajit-majumdar-59683442/',
      images: [
        `${import.meta.env.BASE_URL}speakers/ritajit_majumdar.jpg`,
        `${import.meta.env.BASE_URL}speakers/Ritajit Majumdar.jpg`,
      ],
      topics: ['Quantum Error Mitigation', 'Fault-Tolerance', 'Quantum Hardware'],
    },
    {
      id: 'jnan-yalla',
      name: 'Jnan Yalla',
      role: 'Founder & CTO - IQ Leap | Visiting Research Scientist - IBM',
      company: 'IQ Leap / IBM',
      companyBadge: 'IQ Leap • IBM',
      badgeColor: 'bg-purple-500/10 text-purple-600 dark:bg-purple-400/15 dark:text-purple-300 border-purple-500/30',
      category: 'Founder & Scientist',
      bio: 'Visionary quantum entrepreneur and IBM visiting research scientist bridging deep quantum physics with enterprise applications and education.',
      linkedin: 'https://www.linkedin.com/in/jnan-yalla-9940b1314/',
      images: [
        `${import.meta.env.BASE_URL}speakers/jnan_yalla.png`,
        `${import.meta.env.BASE_URL}speakers/Jnan Yalla.png`,
      ],
      topics: ['Hybrid Quantum-Classical', 'Commercial Applications', 'Quantum Innovation'],
    },
  ];

  const handleImageError = (e, memberImages) => {
    const currentSrc = e.target.getAttribute('src');
    const currentIndex = memberImages.indexOf(currentSrc);
    if (currentIndex !== -1 && currentIndex < memberImages.length - 1) {
      e.target.setAttribute('src', memberImages[currentIndex + 1]);
    } else {
      e.target.style.display = 'none';
      if (e.target.nextSibling) {
        e.target.nextSibling.style.display = 'flex';
      }
    }
  };

  return (
    <section className={`py-16 md:py-24 px-gutter max-w-container-max mx-auto w-full ${className}`} id="speakers">
      {showHeader && (
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 px-4 py-1.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-caps text-xs tracking-widest uppercase font-bold">
              INDUSTRY & RESEARCH LEADERS
            </span>
          </div>
          <h2 className="font-headline-xl text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface dark:text-dark-text tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">Keynote Speakers</span>
          </h2>
          <p className="font-body-md text-on-surface-variant dark:text-dark-text-muted max-w-3xl mx-auto text-sm sm:text-base">
            Learn directly from world-class quantum research scientists, algorithm engineers, and innovators from IBM Quantum, BQP, and IQ Leap.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="group relative bg-[#F8F9FF] dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-pink hover:border-primary/50 dark:hover:border-primary/60"
          >
            {/* Ambient Background Accent Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-2xl pointer-events-none" />

            {/* Category / Track Pill */}
            <div className="w-full flex items-center justify-between gap-2 mb-6 relative z-10">
              <span className={`text-[10px] font-label-caps font-bold px-3 py-1 rounded-full border ${speaker.badgeColor}`}>
                {speaker.companyBadge}
              </span>
              <span className="text-[10px] font-label-caps bg-primary/10 dark:bg-primary/20 text-primary font-bold px-2.5 py-1 rounded-full border border-primary/20">
                {speaker.category}
              </span>
            </div>

            {/* Speaker Avatar Frame */}
            <div className="relative mb-6 z-10">
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-primary via-secondary to-primary-container shadow-md group-hover:shadow-glow-pink transition-all duration-300">
                <div className="w-full h-full rounded-xl overflow-hidden bg-white dark:bg-dark-surface relative">
                  <img
                    src={speaker.images[0]}
                    alt={speaker.name}
                    loading="lazy"
                    onError={(e) => handleImageError(e, speaker.images)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="w-full h-full bg-surface-variant dark:bg-dark-surface-elevated hidden flex-col items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-4xl">person</span>
                  </div>
                </div>
              </div>

              {/* Verified Ribbon Dot */}
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-md border-2 border-white dark:border-dark-surface">
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
            </div>

            {/* Speaker Info */}
            <div className="flex-1 flex flex-col items-center relative z-10 w-full">
              <h3 className="font-headline-md text-xl font-bold text-on-surface dark:text-dark-text mb-1 group-hover:text-primary transition-colors">
                {speaker.name}
              </h3>

              <p className="font-label-caps text-xs text-secondary dark:text-secondary-fixed font-bold mb-3 min-h-[36px] flex items-center justify-center">
                {speaker.role}
              </p>

              <p className="font-body-md text-xs text-on-surface-variant dark:text-dark-text-muted leading-relaxed mb-6 flex-1 text-center">
                {speaker.bio}
              </p>

              {/* Topic Tags */}
              <div className="flex flex-wrap gap-1.5 justify-center mb-6 w-full">
                {speaker.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-body-md px-2.5 py-0.5 rounded-md bg-surface-container-low dark:bg-dark-surface-elevated text-on-surface-variant dark:text-dark-text-muted border border-outline-variant/20 dark:border-dark-border"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Official LinkedIn Button with Brand Logo */}
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-label-caps text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2.5 bg-[#0077B5]/10 hover:bg-[#0077B5] text-[#0077B5] hover:text-white dark:bg-[#0077B5]/20 dark:hover:bg-[#0077B5] dark:text-[#5cb5ff] dark:hover:text-white border border-[#0077B5]/30 hover:shadow-md hover:scale-102 active:scale-98"
                aria-label={`View ${speaker.name}'s LinkedIn Profile`}
              >
                {/* Official LinkedIn SVG Vector Logo */}
                <svg
                  className="w-4 h-4 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.65 1.66 1.66 1.66 0 0 0 1.65 1.65 1.65 1.65 0 0 0 1.66-1.65c0-.92-.74-1.66-1.66-1.66Z" />
                </svg>
                <span>Connect on LinkedIn</span>
                <span className="material-symbols-outlined text-[13px] opacity-70">open_in_new</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {onOpenRegister && (
        <div className="mt-14 text-center">
          <button
            onClick={onOpenRegister}
            className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-xl shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-all duration-200 inline-flex items-center justify-center gap-2 hover:scale-105 active:scale-110 font-bold text-sm sm:text-base"
          >
            <span>Register to Attend Keynotes & Workshops</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      )}
    </section>
  );
}
