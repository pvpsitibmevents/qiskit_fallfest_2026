import React, { useState } from 'react';
import { GlassPanel } from '@/components/ui/glass';

export default function HomeLeadershipExpertsSection({ setActivePage, onOpenRegister, className = '' }) {
  const [selectedExpert, setSelectedExpert] = useState(null);

  const experts = [
    {
      id: 'sivaji-babu',
      name: 'Dr. K. Sivaji Babu',
      role: 'Chief Patron',
      title: 'Principal, PVPSIT',
      department: 'Institutional Leadership • PVPSIT',
      badgeColor: 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-fixed-dim border-primary/30',
      images: [
        `${import.meta.env.BASE_URL}team/sivaji_babu.jpg`,
        `${import.meta.env.BASE_URL}team/Sivaji Babu.jpg`,
        `${import.meta.env.BASE_URL}team/sivaji.jpg`,
      ],
      shortBio:
        'Principal of PVPSIT, providing visionary institutional leadership and patronage for Q-CONNECT 2026. Officiated the ceremonial release of the official festival poster and champions quantum technology education.',
      fullBio:
        'As the Principal of Prasad V. Potluri Siddhartha Institute of Technology, Dr. K. Sivaji Babu serves as the Chief Patron of Q-CONNECT 2026. He brings strategic foresight and leadership to integrate emerging quantum technologies into the engineering curriculum. Under his patronage, PVPSIT fosters pioneering collaborations with IBM Quantum and state research initiatives, inspiring students and faculty to lead future computational breakthroughs.',
      contributions: [
        'Chief Patron and Official Inaugurator of PVPSIT Qiskit Fall Fest 2026 (Q-CONNECT 2026).',
        'Officiated the ceremonial release of the official festival poster on 10 September 2026.',
        'Spearheading advanced laboratory facilities and multi-disciplinary quantum research opportunities at PVPSIT.',
        'Empowering academic partnerships between PVPSIT, IBM Quantum, and premier institutions.',
      ],
      topics: ['Chief Patron', 'Principal PVPSIT', 'Quantum Vision', 'Poster Release'],
    },
    {
      id: 'srilakshmi',
      name: 'Dr. M. Srilakshmi',
      role: 'Department Head',
      title: 'HOD, Freshman Engineering Department (FED)',
      department: 'Freshman Engineering Department • PVPSIT',
      badgeColor: 'bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-fixed-dim border-secondary/30',
      images: [
        `${import.meta.env.BASE_URL}team/srilakshmi.jpg`,
        `${import.meta.env.BASE_URL}team/Dr. M. Srilakshmi.jpg`,
      ],
      shortBio:
        'Head of Freshman Engineering Department at PVPSIT. Leading academic oversight, foundational sciences integration, and institutional faculty mentorship throughout Q-CONNECT 2026.',
      fullBio:
        'Dr. M. Srilakshmi, Head of the Freshman Engineering Department at PVPSIT, provides departmental leadership and academic steering for Q-CONNECT 2026. She champions the integration of quantum computing principles into foundational science and engineering disciplines, ensuring that freshman and undergraduate engineers develop strong conceptual intuition in linear algebra, quantum physics, and computational logic.',
      contributions: [
        'Departmental leadership and faculty coordination across all tracks of Q-CONNECT 2026.',
        'Bridging fundamental physics and mathematics with modern quantum algorithm development.',
        'Guiding student cohorts through pre-fest orientation, technical poster presentations, and research challenges.',
        'Fostering an inclusive, multi-disciplinary learning environment across all engineering branches.',
      ],
      topics: ['Department Head', 'Freshman Engineering', 'Curricular Mentorship', 'Academic Guidance'],
    },
    {
      id: 'sreedevi-gogula',
      name: 'Dr. Sreedevi Gogula',
      role: 'Lead Organizer',
      title: 'Faculty Lead & Overall Event Coordinator',
      department: 'Department of Freshman Engineering • PVPSIT',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300 border-emerald-500/30',
      images: [
        `${import.meta.env.BASE_URL}team/sreedevi.jpg`,
        `${import.meta.env.BASE_URL}team/Dr. Sreedevi Gogula.jpg`,
      ],
      shortBio:
        'Faculty Lead and Lead Organizer of PVPSIT Qiskit Fall Fest 2026. Lead architect orchestrating the entire 5-day curriculum, IBM expert interactions, workshops, and student competitions.',
      fullBio:
        'Dr. Sreedevi Gogula is the Lead Organizer and Faculty Coordinator of PVPSIT Qiskit Fall Fest 2026. As the driving force behind Q-CONNECT 2026, she has spearheaded the conceptualization, scheduling, and execution of the festival from initial awareness sessions to hands-on Qiskit programming labs and flagship hackathons. She collaborates closely with IBM Quantum Algorithm Engineers and academic partners to deliver a world-class learning experience.',
      contributions: [
        'Lead Architect and Overall Coordinator of Q-CONNECT 2026.',
        'Direct Liaison for IBM Quantum Algorithm Engineers, industry guest keynotes, and academic partners.',
        'Curriculum designer for the event roadmap spanning foundational labs, Qiskit coding, and competitive arenas.',
        'Direct mentor for student organizers, project cohorts, and flagship competition participants.',
      ],
      topics: ['Lead Organizer', 'Faculty Coordinator', 'IBM Liaison', 'Qiskit Lead'],
    },
    {
      id: 'venkata-swamy-tadikonda',
      name: 'Mr. Venkata Swamy Tadikonda',
      role: 'Programme Coordinator & Advisor',
      title: 'Programme Coordinator, QAIC • Advisor, AQV',
      department: 'QAIC • Amaravati Quantum Valley (AQV)',
      badgeColor: 'bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/15 dark:text-cyan-300 border-cyan-500/30',
      images: [
        `${import.meta.env.BASE_URL}team/venkata_swamy.jpg`,
        `${import.meta.env.BASE_URL}speakers/venkata_swamy.jpg`,
        `${import.meta.env.BASE_URL}speakers/Venkata Swamy Tadikonda.jpg`,
        `${import.meta.env.BASE_URL}speakers/venkata_swamy.png`,
      ],
      linkedin: 'https://www.linkedin.com/in/venkata-swamy-tadikonda-a083a216/',
      shortBio:
        'Programme Coordinator at QAIC and Advisor at Amaravati Quantum Valley. Driving Andhra Pradesh’s regional quantum initiatives, MSME adoption, and Telugu quantum literacy.',
      fullBio:
        'Mr. Venkata Swamy Tadikonda serves as Programme Coordinator at Quantum AI Advanced Innovation Centre (QAIC) and Advisor at Amaravati Quantum Valley (AQV). He is a key ecosystem leader driving regional quantum technology initiatives across Andhra Pradesh. Under his leadership and advisory, QAIC & AQV are accelerating quantum computing adoption in academic institutions, developing 100+ industrial use cases, and expanding Telugu-language quantum literacy as co-translator of "Quantum Nation".',
      contributions: [
        'Programme Coordinator at Quantum AI Advanced Innovation Centre (QAIC) and Advisor at Amaravati Quantum Valley (AQV).',
        'Co-Translator of "Quantum Nation" (Telugu edition) to expand quantum awareness.',
        'Developing 100+ quantum application use cases for government and industry.',
        'Fostering state-wide quantum literacy and adoption across MSMEs, startups, and institutions.',
      ],
      topics: ['QAIC Coordinator', 'AQV Advisor', 'Quantum Ecosystem', 'Telugu Edition'],
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
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block bg-primary/10 dark:bg-primary/20 text-primary font-label-caps text-xs px-4 py-1.5 rounded-full mb-3 font-bold border border-primary/20">
          ORGANIZING LEADERSHIP & EXPERTS
        </div>
        <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface dark:text-dark-text font-bold mb-4">
          Our Guiding <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">Experts & Leadership</span>
        </h2>
        <p className="font-body-md text-on-surface-variant dark:text-dark-text-muted max-w-2xl mx-auto text-base">
          Meet the distinguished institutional leadership, advisors, and faculty coordinators guiding PVPSIT Qiskit Fall Fest 2026 from vision to execution.
        </p>
      </div>

      {/* 4 Leadership Expert Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experts.map((expert) => (
          <GlassPanel
            key={expert.id}
            blur={0}
            dome={1.6}
            strength={0.45}
            radius={24}
            className="flex flex-col h-full rounded-2xl shadow-md hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
            contentClassName="p-5 sm:p-6 flex flex-col items-center text-center h-full justify-between"
          >
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/25 transition-all pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-2xl group-hover:bg-secondary/25 transition-all pointer-events-none" />

            {/* Top Category Badge */}
            <div className="w-full flex justify-center mb-5 relative z-10">
              <span className={`text-[11px] font-label-caps font-bold px-3 py-1 rounded-full uppercase tracking-wider border shadow-xs ${expert.badgeColor}`}>
                {expert.role}
              </span>
            </div>

            {/* Avatar Frame with Gradient Border */}
            <div 
              className="relative mb-5 z-10 cursor-pointer"
              onClick={() => setSelectedExpert(expert)}
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-primary via-secondary to-primary-container shadow-md group-hover:shadow-glow-pink transition-all duration-300">
                <div className="w-full h-full rounded-xl overflow-hidden bg-white dark:bg-dark-surface relative">
                  <img
                    src={expert.images[0]}
                    alt={expert.name}
                    loading="lazy"
                    onError={(e) => handleImageError(e, expert.images)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="w-full h-full bg-surface-variant dark:bg-dark-surface-elevated hidden flex-col items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-4xl">person</span>
                  </div>
                </div>
              </div>

              {/* Verified Icon Dot */}
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-md border-2 border-white dark:border-dark-surface">
                <span className="material-symbols-outlined text-[14px]">verified</span>
              </div>
            </div>

            {/* Expert Info */}
            <div className="flex-1 flex flex-col items-center relative z-10 w-full">
              <h3 
                className="font-headline-md text-lg sm:text-xl font-bold text-on-surface dark:text-dark-text mb-1 group-hover:text-primary transition-colors cursor-pointer"
                onClick={() => setSelectedExpert(expert)}
              >
                {expert.name}
              </h3>

              <p className="font-label-caps text-xs text-secondary dark:text-secondary-fixed font-bold mb-3 min-h-[40px] flex items-center justify-center leading-snug">
                {expert.title}
              </p>

              <p className="font-body-md text-xs text-on-surface-variant dark:text-dark-text-muted leading-relaxed mb-5 flex-1 text-center">
                {expert.shortBio}
              </p>

              {/* Topic Tags */}
              <div className="flex flex-wrap gap-1.5 justify-center mb-6 w-full">
                {expert.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-body-md px-2.5 py-0.5 rounded-md bg-surface-container-low dark:bg-dark-surface-elevated text-on-surface-variant dark:text-dark-text-muted border border-outline-variant/20 dark:border-dark-border"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="w-full">
                <button
                  onClick={() => setSelectedExpert(expert)}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-white dark:bg-primary/20 dark:hover:bg-primary dark:text-primary-fixed-dim dark:hover:text-white border border-primary/30 shadow-xs"
                >
                  <span className="material-symbols-outlined text-sm">visibility</span>
                  <span>View Full Details & Vision</span>
                </button>
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>

      {/* Footer Navigation CTA */}
      <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
        {setActivePage && (
          <button
            onClick={() => setActivePage('members')}
            className="w-full sm:w-auto bg-transparent border border-secondary text-secondary dark:text-secondary-fixed-dim font-label-caps text-label-caps px-8 py-3.5 rounded-xl hover:bg-secondary/10 transition-all duration-200 flex items-center justify-center gap-2 font-bold hover:scale-105 active:scale-95"
          >
            <span>View Full Organizing Committee</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        )}
        {onOpenRegister && (
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto bg-primary text-on-primary font-label-caps text-label-caps px-8 py-3.5 rounded-xl shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-all duration-200 flex items-center justify-center gap-2 font-bold hover:scale-105 active:scale-95"
          >
            <span>Register Now (Google Form)</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
        )}
      </div>

      {/* Modal Dialog for Full Details */}
      {selectedExpert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedExpert(null)}
        >
          <GlassPanel
            blur={0}
            dome={1.6}
            strength={0.5}
            radius={24}
            className="max-w-2xl w-full max-h-[90vh] shadow-2xl relative animate-scaleUp overflow-hidden"
            contentClassName="p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedExpert(null)}
              className="absolute top-4 right-4 text-on-surface-variant dark:text-dark-text-muted hover:text-primary p-2 rounded-full hover:bg-surface-variant dark:hover:bg-dark-surface-elevated transition-transform hover:scale-110 active:scale-95"
              aria-label="Close dialog"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6 pb-5 border-b border-outline-variant/20 dark:border-dark-border pr-8">
              <div className="w-20 h-20 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-primary to-secondary shrink-0 shadow-md">
                <img
                  src={selectedExpert.images[0]}
                  alt={selectedExpert.name}
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => handleImageError(e, selectedExpert.images)}
                />
              </div>
              <div>
                <span className={`inline-block text-[10px] font-label-caps font-bold px-3 py-0.5 rounded-full uppercase tracking-wider border mb-1.5 ${selectedExpert.badgeColor}`}>
                  {selectedExpert.role}
                </span>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface dark:text-dark-text leading-tight">
                  {selectedExpert.name}
                </h3>
                <p className="font-label-caps text-xs text-secondary dark:text-secondary-fixed font-semibold mt-0.5">
                  {selectedExpert.title}
                </p>
                <p className="text-xs text-on-surface-variant dark:text-dark-text-muted">
                  {selectedExpert.department}
                </p>
              </div>
            </div>

            {/* Vision & Bio */}
            <div className="space-y-6">
              <div>
                <h4 className="font-label-caps text-xs font-bold text-primary dark:text-primary-fixed-dim uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">psychology</span>
                  Institutional Vision & Overview
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant dark:text-dark-text leading-relaxed bg-surface-container/50 dark:bg-dark-surface/50 p-4 rounded-xl border border-outline-variant/20 dark:border-dark-border">
                  {selectedExpert.fullBio}
                </p>
              </div>

              {/* Key Contributions */}
              <div>
                <h4 className="font-label-caps text-xs font-bold text-secondary dark:text-secondary-fixed-dim uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">verified</span>
                  Key Contributions & Leadership Milestones
                </h4>
                <ul className="space-y-2.5">
                  {selectedExpert.contributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface-variant dark:text-dark-text-muted leading-relaxed">
                      <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Focus Topics */}
              <div className="pt-2">
                <h4 className="font-label-caps text-[11px] font-bold text-on-surface-variant dark:text-dark-text-muted uppercase tracking-wider mb-2">
                  Key Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExpert.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-xs font-body-md px-3 py-1 rounded-lg bg-surface-container dark:bg-dark-surface-elevated text-on-surface dark:text-dark-text border border-outline-variant/30 dark:border-dark-border font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* LinkedIn / External Profile if available */}
              {selectedExpert.linkedin && (
                <div className="pt-3 border-t border-outline-variant/20 dark:border-dark-border flex items-center justify-between">
                  <a
                    href={selectedExpert.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0077B5] dark:text-[#5cb5ff] hover:underline"
                  >
                    <span>Connect on LinkedIn</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              )}
            </div>
          </GlassPanel>
        </div>
      )}
    </section>
  );
}
