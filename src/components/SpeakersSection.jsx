import React, { useState } from 'react';

export default function SpeakersSection({ onOpenRegister, showHeader = true, className = '' }) {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [modalTab, setModalTab] = useState('details');

  const speakers = [
    {
      id: 'venkata-swamy-tadikonda',
      name: 'Shri. Venkata Swamy Tadikonda',
      role: 'Programme Coordinator, QAIC • Advisor, AQV',
      company: 'QAIC • Amaravati Quantum Valley',
      companyBadge: 'QAIC • AQV',
      badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/15 dark:text-cyan-300 border-cyan-500/30',
      category: 'Guest Speaker',
      date: '07 October 2026',
      talkTheme: 'Quantum Technologies: Fundamentals, AQV Initiatives & QAIC Opportunities',
      bio: 'Leading Andhra Pradesh’s quantum initiatives at QAIC & Amaravati Quantum Valley, driving regional applications and Telugu quantum literacy.',
      contributions: [
        'Co-Translator of "Quantum Nation" (Telugu edition) to expand quantum awareness.',
        'Developing 100+ quantum application use cases for government and industry.',
        'Fostering quantum adoption across MSMEs, startups, and academic institutions.',
      ],
      linkedin: 'https://www.linkedin.com/in/venkata-swamy-tadikonda-a083a216/',
      images: [
        `${import.meta.env.BASE_URL}speakers/venkata_swamy.png`,
        `${import.meta.env.BASE_URL}speakers/venkata_swamy.jpg`,
        `${import.meta.env.BASE_URL}speakers/Venkata Swamy Tadikonda.jpg`,
      ],
      posterImage: `${import.meta.env.BASE_URL}speakers/venkata_swamy_poster.png`,
      themePosterImage: `${import.meta.env.BASE_URL}speakers/venkata_swamy_website_theme_poster.png`,
      topics: ['Quantum Tech', 'AQV Initiatives', 'Telugu Edition'],
    },
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
            Learn directly from quantum research scientists, algorithm engineers, and ecosystem leaders from IBM Quantum, QAIC, AQV, BQP, and IQ Leap.
          </p>
        </div>
      )}

      {/* Clean 5-Speaker Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div 
              className="relative mb-6 z-10 cursor-pointer"
              onClick={() => {
                setSelectedSpeaker(speaker);
                setPosterMode('theme');
              }}
            >
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
              <h3 
                className="font-headline-md text-xl font-bold text-on-surface dark:text-dark-text mb-1 group-hover:text-primary transition-colors cursor-pointer"
                onClick={() => {
                  setSelectedSpeaker(speaker);
                  setPosterMode('theme');
                }}
              >
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

              {/* Action Buttons */}
              <div className="w-full flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedSpeaker(speaker);
                    setModalTab('details');
                  }}
                  className="flex-1 py-2.5 px-3 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-white dark:bg-primary/20 dark:hover:bg-primary dark:text-primary-fixed-dim dark:hover:text-white border border-primary/30"
                >
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  <span>View Details</span>
                </button>

                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl font-bold transition-all duration-200 flex items-center justify-center bg-[#0077B5]/10 hover:bg-[#0077B5] text-[#0077B5] hover:text-white dark:bg-[#0077B5]/20 dark:hover:bg-[#0077B5] dark:text-[#5cb5ff] dark:hover:text-white border border-[#0077B5]/30 shrink-0"
                    aria-label={`View ${speaker.name}'s LinkedIn`}
                    title="Connect on LinkedIn"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.65 1.66 1.66 1.66 0 0 0 1.65 1.65 1.65 1.65 0 0 0 1.66-1.65c0-.92-.74-1.66-1.66-1.66Z" />
                    </svg>
                  </a>
                )}
              </div>
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

      {/* Clean, Readable Speaker Profile & Poster Modal Dialog */}
      {selectedSpeaker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedSpeaker(null)}
        >
          <div
            className="bg-white dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-7 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-4 right-4 text-on-surface-variant dark:text-dark-text-muted hover:text-primary p-2 rounded-full hover:bg-surface-variant dark:hover:bg-dark-surface-elevated transition-transform hover:scale-110 active:scale-95"
              aria-label="Close dialog"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-outline-variant/20 dark:border-dark-border pr-8">
              <div className="w-16 h-16 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-primary to-secondary shrink-0 shadow-md">
                <img
                  src={selectedSpeaker.images[0]}
                  alt={selectedSpeaker.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface dark:text-dark-text">
                  {selectedSpeaker.name}
                </h3>
                <p className="text-xs text-primary font-semibold">
                  {selectedSpeaker.role}
                </p>
                <p className="text-xs text-on-surface-variant dark:text-dark-text-muted">
                  {selectedSpeaker.company}
                </p>
              </div>
            </div>

            {/* View Switcher (Only if poster is available) */}
            {selectedSpeaker.themePosterImage && (
              <div className="flex items-center gap-2 mb-5 p-1 bg-surface-container-low dark:bg-dark-surface rounded-xl border border-outline-variant/20 dark:border-dark-border">
                <button
                  onClick={() => setModalTab('details')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    modalTab === 'details'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant dark:text-dark-text-muted hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">badge</span>
                  <span>Speaker Info & Theme</span>
                </button>
                <button
                  onClick={() => setModalTab('poster')}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    modalTab === 'poster'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant dark:text-dark-text-muted hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">image</span>
                  <span>Event Poster</span>
                </button>
              </div>
            )}

            {selectedSpeaker.themePosterImage && modalTab === 'poster' ? (
              /* High-Resolution Event Poster View */
              <div className="space-y-4 mb-5">
                <div className="relative rounded-2xl overflow-hidden border border-outline-variant/30 dark:border-dark-border shadow-2xl bg-black/50 flex items-center justify-center group">
                  <img
                    src={selectedSpeaker.themePosterImage}
                    alt={`${selectedSpeaker.name} Keynote Poster`}
                    className="w-full max-h-[500px] object-contain mx-auto rounded-xl"
                  />
                  <a
                    href={selectedSpeaker.themePosterImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 bg-black/80 hover:bg-primary text-white text-xs font-bold px-3.5 py-2 rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-1.5 shadow-lg"
                    title="Open full resolution poster"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    <span>Full Poster</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Speaker Bio & Details View */
              <>
                {/* Bio / Overview */}
                {selectedSpeaker.bio && (
                  <p className="text-xs sm:text-sm text-on-surface-variant dark:text-dark-text-muted leading-relaxed mb-5">
                    {selectedSpeaker.bio}
                  </p>
                )}

                {/* Talk Theme & Info (Clean and Readable) */}
                {selectedSpeaker.talkTheme && (
                  <div className="space-y-4 mb-5">
                    <div className="p-3.5 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/20">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="material-symbols-outlined text-primary text-base">campaign</span>
                        <span className="text-xs font-bold text-primary uppercase tracking-wide">
                          Talk Theme • {selectedSpeaker.date}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-on-surface dark:text-dark-text leading-snug">
                        "{selectedSpeaker.talkTheme}"
                      </h4>
                    </div>

                    {selectedSpeaker.contributions && (
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-on-surface dark:text-dark-text uppercase tracking-wider block">
                          Key Highlights:
                        </span>
                        <ul className="space-y-1.5 text-xs text-on-surface-variant dark:text-dark-text-muted">
                          {selectedSpeaker.contributions.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

              </>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between gap-3 pt-2 border-t border-outline-variant/20 dark:border-dark-border">
              {onOpenRegister && (
                <button
                  onClick={() => {
                    setSelectedSpeaker(null);
                    onOpenRegister();
                  }}
                  className="bg-primary text-on-primary font-bold text-xs py-2.5 px-5 rounded-xl shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-all hover:scale-105 active:scale-95"
                >
                  Register for Event
                </button>
              )}

              {selectedSpeaker.linkedin && (
                <a
                  href={selectedSpeaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0077B5] dark:text-[#5cb5ff] hover:underline"
                >
                  <span>Connect on LinkedIn</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
