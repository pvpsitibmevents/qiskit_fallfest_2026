import React, { useState } from 'react';
import { GlassPanel } from '@/components/ui/glass';
import { GlassSelect, GlassSelectTrigger, GlassSelectContent, GlassSelectItem } from '@/components/ui/glass-select';

// Official Google Form URLs
const MAIN_REGISTRATION_FORM_URL = 'https://forms.gle/MrYwotpeYyVBaB377';
const QUIZ_FORM_URL = 'https://forms.gle/mo6A4kiYm4tbqUE66';
const DEBATE_FORM_URL = 'https://forms.gle/Na2zif7sXG94K9g17';
const PRESENTATION_FORM_URL = 'https://forms.gle/Koq8ZsLtHo7xtUbx6';
const TREASURE_HUNT_FORM_URL = 'https://forms.gle/idSz2g9a1Vna29888';

export default function SchedulePage({ onOpenRegister, setActivePage }) {
  const [activeFilter, setActiveFilter] = useState('ALL'); // 'ALL', 'DAY1', 'DAY2', 'DAY3', 'DAY4', 'DAY5', 'COMPETITIONS', 'WINNERS'

  // 4 Flagship Day 5 Competitions (Themed in secondary #6252a1 purple)
  const competitionActivities = [
    {
      number: 1,
      id: 'quiz',
      title: 'Quantum Quest – The Ultimate Quantum Quiz',
      shortTitle: 'Quantum Quest (Quiz)',
      track: 'Event 23 • Two-Round Quantum Challenge Arena',
      scheduleInfo: 'Day 5 (16 Oct) • 9:30 AM – 11:30 AM (Tentative)',
      description: 'High-energy two-round quantum quiz testing fundamentals, circuit gates, and quantum technology concepts.',
      icon: 'quiz',
      formUrl: QUIZ_FORM_URL,
      buttonText: 'Register for Quiz',
      tag: 'Competition #1',
      rules: [
        'Round 1: All participants must participate individually in the preliminary quantum screening quiz.',
        'Round 2 (Finals): Qualifying participants will be grouped into teams by the judges and faculty committee.',
        'Team composition, round progression, and final evaluations are strictly decided by the judges.',
        'Top 3 teams will be declared winners and awarded prizes and certificates.',
      ],
    },
    {
      number: 2,
      id: 'presentation',
      title: 'Quantum Vision – Student PPT Presentation Challenge',
      shortTitle: 'Quantum Vision (PPT Presentation)',
      track: 'Event 24 • PPT Presentation & Quantum Idea Arena',
      scheduleInfo: 'Day 5 (16 Oct) • 11:30 AM – 12:30 PM (Tentative)',
      description: 'Present structured PowerPoint slide decks explaining any concept in Quantum Technologies or pitching an innovative Quantum Idea.',
      icon: 'co_present',
      formUrl: PRESENTATION_FORM_URL,
      buttonText: 'Register for PPT Presentation',
      tag: 'Competition #2',
      isPpt: true,
      rules: [
        'Presentation Scope: Explain any concept in Quantum Technologies (algorithms, hardware, cryptography, quantum internet) or present an original Quantum Idea Presentation.',
        'Team Format: Individual participation or a Team of 2 members is permitted.',
        'Official PPT Template: Participants must download and use the official "PVPSIT X QISKIT FALL FEST PPT TEMPLATE".',
        'Top 3 presentations will be awarded based on technical clarity, innovation, and visual presentation.',
      ],
    },
    {
      number: 3,
      id: 'debate',
      title: 'Quantum Minds – Debate, JAM & Group Discussion',
      shortTitle: 'Quantum Minds (1 vs 1 Debate & JAM)',
      track: 'Event 25 • 1 vs 1 Parliamentary Debate & JAM Arena',
      scheduleInfo: 'Day 5 (16 Oct) • 1:15 PM – 2:30 PM (Tentative)',
      description: 'Head-to-head 1 vs 1 Oxford-style debates and Just-A-Minute (JAM) speaking showdowns on quantum disruption, classical vs. quantum supremacy, and tech ethics.',
      icon: 'gavel',
      formUrl: DEBATE_FORM_URL,
      buttonText: 'Register for Debate / JAM',
      tag: 'Competition #3',
      rules: [
        'Format: 1 vs 1 (One-on-One) competitive debate and Just-A-Minute (JAM) speaking rounds.',
        'Topics: Quantum supremacy, quantum ethics, AI vs. Quantum, and future technological frontiers.',
        'Evaluated on technical reasoning, spontaneity, argumentative rebuttal, and delivery.',
        'Top 3 debaters will receive prizes and certificates.',
      ],
    },
    {
      number: 4,
      id: 'treasure-hunt',
      title: 'Quantum Trail – The Qiskit Treasure Hunt',
      shortTitle: 'Quantum Trail (Treasure Hunt)',
      track: 'Event 26 • Two-Round Cryptographic Campus Race',
      scheduleInfo: 'Day 5 (16 Oct) • 2:30 PM – 4:30 PM (Tentative)',
      description: 'Adrenaline-packed campus puzzle race: decipher quantum logic riddles, decode circuit clues, and navigate physical and digital checkpoints.',
      icon: 'travel_explore',
      formUrl: TREASURE_HUNT_FORM_URL,
      buttonText: 'Register for Treasure Hunt',
      tag: 'Competition #4',
      rules: [
        'Round 1: Preliminary Quiz-based screening round testing quantum problem-solving and deduction.',
        'Round 2 (The Real Hunt): Only the Top 6 to 8 teams (consisting of 3 members each) will qualify and advance to the final Round 2 campus hunt.',
        'The real treasure hunt starts in Round 2, with detailed hunt rules and clue paths revealed on the spot.',
        'Top winning squads to reach the final checkpoint and decode the vault will receive prizes and medals.',
      ],
    },
  ];

  // Complete 5-Day Event Schedule (Coordinators & Speaker cards removed per user specification)
  const scheduleDays = [
    {
      dayNumber: 1,
      dayKey: 'DAY1',
      date: '12 October 2026',
      dayOfWeek: 'Monday',
      title: 'Quantum Foundations & Orientation Day',
      subtitle: 'Building Intuition from Zero to Quantum State',
      summary: 'Kickoff day focused on quantum awareness, fundamental physics of qubits, superposition, entanglement, and the week-long event roadmap.',
      badgeColor: 'bg-blue-500/10 text-blue-600 dark:bg-blue-400/15 dark:text-blue-300 border-blue-500/30',
      sessions: [
        {
          id: 'd1-s1',
          sessionNumber: 'Session 1',
          time: '9:30 AM – 11:30 AM',
          title: 'Session 1: Quantum Awareness & Foundations',
          typeBadge: 'Foundations & Lecture',
          description: 'Introduction to the quantum realm: classical bits vs. qubits, principles of superposition, quantum entanglement, and computational paradigm shifts.',
          icon: 'school',
        },
        {
          id: 'd1-s2',
          sessionNumber: 'Session 2',
          time: '11:30 AM – 12:00 PM',
          title: 'Session 2: Introduction to Qiskit Fall Fest 2026 & Event Roadmap',
          typeBadge: 'Orientation & Roadmap',
          description: 'Comprehensive walkthrough of Qiskit Fall Fest 2026 at PVPSIT, academic collaboration with IBM Quantum & RGUKT, schedule milestones, and learning paths.',
          icon: 'map',
        },
        {
          id: 'd1-s3',
          sessionNumber: 'Session 3',
          time: '12:00 PM – 12:15 PM',
          title: 'Session 3: Student Engagement & Team Formation',
          typeBadge: 'Networking & Teams',
          description: 'Community networking, team matching for upcoming festival challenges, project cohort formation, and guidance on competition participation.',
          icon: 'groups',
        },
      ],
    },
    {
      dayNumber: 2,
      dayKey: 'DAY2',
      date: '13 October 2026',
      dayOfWeek: 'Tuesday',
      title: 'Qiskit Hands-on Learning Day',
      subtitle: 'From Theoretical Concepts to Executable Code',
      summary: 'Intensive hands-on programming with Qiskit SDK: setting up local and cloud environments, building quantum circuits, gate operations, and practical circuit challenges.',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-300 border-emerald-500/30',
      sessions: [
        {
          id: 'd2-s4',
          sessionNumber: 'Session 4',
          time: '9:30 AM – 11:00 AM',
          title: 'Session 4: Getting Started with Qiskit – From Concepts to Code',
          typeBadge: 'Coding Workshop',
          description: 'Deconstructing Qiskit primitives: QuantumCircuit classes, single-qubit gates (X, H, Z, S), multi-qubit gates (CNOT, Toffoli), and visual circuit drawing.',
          icon: 'terminal',
        },
        {
          id: 'd2-s5',
          sessionNumber: 'Session 5',
          time: '11:00 AM – 11:15 AM',
          title: 'Session 5: Qiskit Environment Setup & Access Check',
          typeBadge: 'Lab Check',
          description: 'Configuring Python environments, Jupyter Notebook instances, Qiskit library dependencies, and verifying IBM Quantum cloud authentication tokens.',
          icon: 'tune',
        },
        {
          id: 'd2-s6',
          sessionNumber: 'Session 6',
          time: '11:15 AM – 1:00 PM',
          title: 'Session 6: Hands-on Quantum Circuit Programming with Qiskit',
          typeBadge: 'Hands-on Lab',
          description: 'Step-by-step guided coding: synthesizing Bell states, GHZ quantum entangled states, quantum teleportation circuits, and running statevector simulations on local backends.',
          icon: 'code',
        },
        {
          id: 'd2-s7',
          sessionNumber: 'Session 7',
          time: '2:00 PM – 3:30 PM',
          title: 'Session 7: Exploring Quantum Circuits – Practical Challenge',
          typeBadge: 'Practical Lab Challenge',
          description: 'Live practical challenge where participant teams construct custom quantum circuits from target specifications, minimize gate depth, and execute measurements.',
          icon: 'precision_manufacturing',
        },
        {
          id: 'd2-s8',
          sessionNumber: 'Session 8',
          time: '3:30 PM – 4:00 PM',
          title: 'Session 8: Qiskit Practice, Queries & Troubleshooting',
          typeBadge: 'Q&A & Debugging',
          description: 'Interactive troubleshooting desk: debugging circuit errors, analyzing measurement histograms, and Q&A on transpilation and circuit optimization.',
          icon: 'support',
        },
      ],
    },
    {
      dayNumber: 3,
      dayKey: 'DAY3',
      date: '14 October 2026',
      dayOfWeek: 'Wednesday',
      title: 'IBM Interaction & Quantum Technology Perspectives',
      subtitle: 'Direct Insights into Industry & Emerging Quantum Technologies',
      summary: 'A day dedicated to industrial perspectives, career pathways, cutting-edge software tooling, and an exclusive interactive dialogue session.',
      badgeColor: 'bg-blue-600/10 text-blue-600 dark:bg-blue-400/15 dark:text-blue-300 border-blue-600/30',
      sessions: [
        {
          id: 'd3-s9',
          sessionNumber: 'Session 9',
          time: '10:00 AM – 11:00 AM',
          title: 'Session 9: Quantum Computing at IBM – Opportunities, Careers & Industry Perspectives',
          typeBadge: 'Industry Keynote',
          description: 'Overview of enterprise quantum computing, IBM Quantum System One & Two architectures, real-world industry adoption, and career trajectories in quantum software.',
          icon: 'business_center',
        },
        {
          id: 'd3-s10',
          sessionNumber: 'Session 10',
          time: '11:00 AM – 11:15 AM',
          title: 'Session 10: Interactive Student Dialogue with IBM Speaker',
          typeBadge: 'Interactive Dialogue',
          description: 'Direct interactive dialogue and Q&A session discussing quantum algorithm workflows, Qiskit Runtime, research possibilities, and career guidance.',
          icon: 'forum',
        },
        {
          id: 'd3-s11',
          sessionNumber: 'Session 11',
          time: '2:00 PM – 4:00 PM',
          title: 'Session 11: Quantum Resources, Tools & Future Technology Landscape',
          typeBadge: 'Technology Deep-Dive',
          description: 'Comprehensive exploration of open-source quantum toolkits, error suppression techniques, Qiskit Runtime primitives (Sampler & Estimator), and the 10-year quantum roadmap.',
          icon: 'hub',
        },
        {
          id: 'd3-s12',
          sessionNumber: 'Session 12',
          time: '4:00 PM – 4:15 PM',
          title: 'Session 12: Reflection & Preparation for Quantum Challenge Day',
          typeBadge: 'Briefing & Reflection',
          description: 'Synthesis of key learnings from Days 1–3, preparation strategy for the Grand Inauguration and Day 5 flagship competitions.',
          icon: 'psychology',
        },
      ],
    },
    {
      dayNumber: 4,
      dayKey: 'DAY4',
      date: '15 October 2026',
      dayOfWeek: 'Thursday',
      title: 'Qiskit Fall Fest 2026 – Grand Inauguration & Expert Interaction Day',
      subtitle: 'Ceremonial Launch & Advanced Technical Sessions',
      summary: 'The grand ceremonial inauguration of Qiskit Fall Fest 2026 featuring college leadership, followed by an afternoon masterclass and deep-dive technical sessions.',
      badgeColor: 'bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300 border-amber-500/30',
      sessions: [
        {
          id: 'd4-morning-welcome',
          sessionNumber: 'Morning Gathering',
          time: '9:30 AM – 10:00 AM',
          title: 'Welcome & Gathering of Participants',
          typeBadge: 'Reception',
          description: 'Warm reception and gathering of registered students, faculty members, and academic delegates in the college auditorium.',
          icon: 'how_to_reg',
        },
        {
          id: 'd4-s13',
          sessionNumber: 'Session 13',
          time: '10:00 AM – 10:20 AM',
          title: 'Session 13: Formal Inauguration of Qiskit Fall Fest 2026',
          typeBadge: 'Grand Inauguration',
          description: 'Ceremonial lighting of the lamp and formal inauguration of the flagship PVPSIT Qiskit Fall Fest 2026 in collaboration with IBM Quantum & RGUKT.',
          icon: 'celebration',
        },
        {
          id: 'd4-s14',
          sessionNumber: 'Session 14',
          time: '10:20 AM – 10:35 AM',
          title: 'Session 14: Presidential Address / Address by Principal',
          typeBadge: 'Presidential Address',
          description: 'Inspirational presidential remarks by institutional leadership emphasizing technological innovation, quantum literacy, and student research excellence.',
          icon: 'campaign',
        },
        {
          id: 'd4-s15',
          sessionNumber: 'Session 15',
          time: '10:35 AM – 10:50 AM',
          title: 'Session 15: Qiskit Fall Fest 2026 – Vision, Objectives & Student Opportunities',
          typeBadge: 'Vision & Scope',
          description: 'Presentation outlining the core mission of Q-CONNECT 2026, upcoming hack challenges, regional community building, and opportunities for participating students.',
          icon: 'visibility',
        },
        {
          id: 'd4-s16',
          sessionNumber: 'Session 16',
          time: '10:50 AM – 11:00 AM',
          title: 'Session 16: Introduction of Faculty & Student Coordinators',
          typeBadge: 'Coordination Briefing',
          description: 'Official introduction and briefing of event coordination teams and organizing committee for the fest.',
          icon: 'badge',
        },
        {
          id: 'd4-afternoon-expert',
          sessionNumber: 'Afternoon Keynote',
          time: '2:00 PM – 3:00 PM',
          title: 'Expert Keynote Session: Advanced Quantum Computing & Algorithms',
          typeBadge: 'Expert Keynote',
          description: 'High-level technical session covering high-performance quantum algorithms, industrial optimization, and Qiskit SDK integration for cutting-edge computing challenges.',
          icon: 'psychology_alt',
        },
        {
          id: 'd4-afternoon-deepdive',
          sessionNumber: 'Technical Session',
          time: '3:00 PM – 4:00 PM',
          title: 'Technical Session: Quantum Circuit Design & Deep-Dive',
          typeBadge: 'Technical Workshop',
          description: 'Deep-dive exploration into quantum software architectures, compilation challenges, algorithm benchmarking, and interactive technical discussion.',
          icon: 'terminal',
        },
        {
          id: 'd4-afternoon-wrapup',
          sessionNumber: 'Closing Briefing',
          time: '4:00 PM – 4:15 PM',
          title: 'Day 4 Wrap-Up & Competition Day Briefing',
          typeBadge: 'Competition Eve',
          description: 'Rules, formats, judging criteria, and schedule briefing for Day 5 flagship competitions (Quiz, Presentations, Debate/JAM, and Treasure Hunt).',
          icon: 'fact_check',
        },
      ],
    },
    {
      dayNumber: 5,
      dayKey: 'DAY5',
      date: '16 October 2026',
      dayOfWeek: 'Friday',
      title: 'Special Competitions Day',
      subtitle: 'Showcasing Knowledge, Innovation, Debate & Problem-Solving',
      summary: 'The ultimate climax of Qiskit Fall Fest 2026: 4 major competitive arenas spanning Quantum Quiz, Presentations, Debate/JAM, and a campus-wide Treasure Hunt.',
      badgeColor: 'bg-purple-500/10 text-purple-600 dark:bg-purple-400/15 dark:text-purple-300 border-purple-500/30',
      sessions: [
        {
          id: 'd5-e23',
          sessionNumber: 'Event 23',
          time: '9:30 AM – 11:30 AM',
          title: 'Event 23: Quantum Quest – The Ultimate Quantum Quiz',
          typeBadge: 'Flagship Competition',
          isCompetition: true,
          competitionTag: 'Activity 1: Two-Round Quiz Arena',
          formUrl: QUIZ_FORM_URL,
          buttonText: 'Register for Quiz',
          description: 'High-energy two-round quantum quiz testing fundamentals, circuit recognition, quantum algorithm trivia, and rapid-fire problem-solving.',
          icon: 'quiz',
          rules: [
            'Round 1: Individual screening round for all participants.',
            'Round 2 (Finals): Qualifying participants grouped into teams by faculty and judges.',
            'Evaluation and progression are strictly up to the judges. Top 3 teams win prizes!',
          ],
        },
        {
          id: 'd5-e24',
          sessionNumber: 'Event 24',
          time: '11:30 AM – 12:30 PM',
          title: 'Event 24: Quantum Vision – Student PPT Presentation Challenge',
          typeBadge: 'Flagship Competition',
          isCompetition: true,
          competitionTag: 'Activity 2: PPT Presentation & Idea Pitch',
          formUrl: PRESENTATION_FORM_URL,
          buttonText: 'Register for PPT Presentation',
          isPpt: true,
          description: 'Student slide presentation challenge: explain any concept in Quantum Technologies or pitch an innovative Quantum Idea using the official PPT template.',
          icon: 'co_present',
          rules: [
            'Topic: Explain any concept in Quantum Technologies or pitch an original Quantum Idea Presentation.',
            'Team size: Individual or Team of 2 members allowed.',
            'Mandatory Template: Download and use "PVPSIT X QISKIT FALL FEST PPT TEMPLATE". Top 3 win!',
          ],
        },
        {
          id: 'd5-networking',
          sessionNumber: 'Networking',
          time: '12:30 PM – 1:15 PM',
          title: 'Participant Interaction & Networking',
          typeBadge: 'Community Break',
          description: 'Interactive networking lunch for participants, exchange of ideas, student peer discussions, and interaction with event mentors.',
          icon: 'diversity_3',
        },
        {
          id: 'd5-e25',
          sessionNumber: 'Event 25',
          time: '1:15 PM – 2:30 PM',
          title: 'Event 25: Quantum Minds – Debate, JAM & Group Discussion',
          typeBadge: 'Flagship Competition',
          isCompetition: true,
          competitionTag: 'Activity 3: 1 vs 1 Debate & JAM Arena',
          formUrl: DEBATE_FORM_URL,
          buttonText: 'Register for Debate / JAM',
          description: 'Dynamic competitive arena featuring head-to-head 1 vs 1 Oxford-style debates and Just-A-Minute (JAM) rounds tackling quantum technology ethics, revolution vs. hype, and the future of computing.',
          icon: 'gavel',
          rules: [
            'Format: 1 vs 1 (One-on-One) competitive debate and JAM speaking battles.',
            'Judged on technical articulation, spontaneous rebuttal, and reasoning. Top 3 win prizes!',
          ],
        },
        {
          id: 'd5-e26',
          sessionNumber: 'Event 26',
          time: '2:30 PM – 4:30 PM',
          title: 'Event 26: Quantum Trail – The Qiskit Treasure Hunt',
          typeBadge: 'Flagship Competition',
          isCompetition: true,
          competitionTag: 'Activity 4: Two-Round Cryptographic Hunt',
          formUrl: TREASURE_HUNT_FORM_URL,
          buttonText: 'Register for Treasure Hunt',
          description: 'Thrilling campus-wide clue-solving race: teams decode quantum circuit puzzles, decipher quantum key cryptography riddles, and race across checkpoints.',
          icon: 'travel_explore',
          rules: [
            'Round 1: Preliminary Quiz-based screening round testing quantum problem-solving.',
            'Round 2 (The Real Hunt): Only Top 6 to 8 teams (3 members per team) advance to the campus hunt.',
            'Detailed hunt rules announced on the spot. Top finishing teams win!',
          ],
        },
      ],
    },
  ];

  // Filtering logic
  const filteredDays = scheduleDays
    .map((day) => {
      if (activeFilter === 'ALL') return day;
      if (activeFilter === day.dayKey) return day;
      if (activeFilter === 'COMPETITIONS') {
        const compSessions = day.sessions.filter((s) => s.isCompetition);
        if (compSessions.length > 0) {
          return { ...day, sessions: compSessions };
        }
        return null;
      }
      return null;
    })
    .filter(Boolean);

  const handleMainRegisterClick = () => {
    if (onOpenRegister) {
      onOpenRegister();
    } else {
      window.open(MAIN_REGISTRATION_FORM_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-16 pb-8 px-gutter max-w-container-max mx-auto text-center">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-4 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-primary mr-2.5 animate-pulse" />
          <span className="font-label-caps text-xs text-primary uppercase tracking-widest font-bold">
            Q-CONNECT 2026 — Official 5-Day Event Schedule
          </span>
        </div>

        <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-[56px] font-bold text-on-surface dark:text-dark-text mb-4 max-w-4xl mx-auto tracking-tight leading-tight">
          Qiskit Fall Fest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">@ PVPSIT</span>
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-dark-text-muted max-w-3xl mx-auto mb-6 text-sm sm:text-base">
          12 October – 16 October 2026 • 5 Days of Quantum Foundations, Hands-on Qiskit Labs, IBM Perspectives, Grand Inauguration, and Special Competitions Day.
        </p>

        {/* Tentative Timing Notice Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-500/40 bg-amber-500/10 dark:bg-amber-400/15 text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-semibold mb-8 shadow-sm">
          <span className="material-symbols-outlined text-base text-amber-600 dark:text-amber-400">schedule</span>
          <span><strong>Note:</strong> All session timings are tentative and subject to minor adjustments.</span>
        </div>

        {/* Main Fest Registration Hero CTA */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <a
            href={MAIN_REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-bold text-sm hover:bg-on-primary-fixed-variant transition-all shadow-pulse-pink hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined text-base">how_to_reg</span>
            <span>Register Now for Fest (Google Form)</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
          <button
            onClick={() => setActiveFilter('COMPETITIONS')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/15 text-secondary dark:text-secondary-fixed border border-secondary/30 font-bold text-sm hover:bg-secondary hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined text-base">emoji_events</span>
            <span>Day 5 Competition Forms</span>
          </button>
          <button
            onClick={() => setActiveFilter('WINNERS')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-bold text-sm hover:bg-amber-500 hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined text-base">military_tech</span>
            <span>Valedictory &amp; Winners (17 Oct)</span>
          </button>
        </div>

        {/* Mobile Quick Glass Select (0 blur, dome 0.15) */}
        <div className="sm:hidden w-full flex justify-center mb-3">
          <GlassSelect value={activeFilter} onValueChange={setActiveFilter}>
            <GlassSelectTrigger
              className="w-80 bg-white/20 dark:bg-white/5 border-secondary/40 text-on-surface dark:text-dark-text font-bold text-xs"
              placeholder="Select Schedule Filter..."
            />
            <GlassSelectContent className="bg-surface/95 dark:bg-dark-surface-card/95 border border-white/20">
              <GlassSelectItem value="ALL">All 5 Days (12–16 Oct)</GlassSelectItem>
              <GlassSelectItem value="DAY1">Day 1 (12 Oct) — Foundations</GlassSelectItem>
              <GlassSelectItem value="DAY2">Day 2 (13 Oct) — Hands-on Qiskit</GlassSelectItem>
              <GlassSelectItem value="DAY3">Day 3 (14 Oct) — IBM Perspectives</GlassSelectItem>
              <GlassSelectItem value="DAY4">Day 4 (15 Oct) — Inauguration</GlassSelectItem>
              <GlassSelectItem value="DAY5">Day 5 (16 Oct) — Special Competitions</GlassSelectItem>
              <GlassSelectItem value="COMPETITIONS">Day 5 Competitions &amp; Forms</GlassSelectItem>
              <GlassSelectItem value="WINNERS">Valedictory &amp; Winners (17 Oct)</GlassSelectItem>
            </GlassSelectContent>
          </GlassSelect>
        </div>

        {/* Schedule & Competitions Filter Bar */}
        <GlassPanel
          blur={0}
          dome={1.6}
          strength={0.45}
          radius={20}
          className="max-w-4xl mx-auto shadow-sm"
          contentClassName="p-2 flex flex-wrap items-center justify-center gap-2"
        >
          {/* Days 1 to 5 + All */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <button
              onClick={() => setActiveFilter('ALL')}
              className={`px-3.5 py-2 rounded-xl font-label-caps text-xs transition-all font-bold ${
                activeFilter === 'ALL'
                  ? 'bg-primary text-on-primary shadow-md scale-105'
                  : 'text-on-surface-variant dark:text-dark-text-muted hover:text-on-surface dark:hover:text-dark-text hover:bg-surface-container dark:hover:bg-dark-surface'
              }`}
            >
              All 5 Days
            </button>
            <button
              onClick={() => setActiveFilter('DAY1')}
              className={`px-3.5 py-2 rounded-xl font-label-caps text-xs transition-all font-bold ${
                activeFilter === 'DAY1'
                  ? 'bg-primary text-on-primary shadow-md scale-105'
                  : 'text-on-surface-variant dark:text-dark-text-muted hover:text-on-surface dark:hover:text-dark-text hover:bg-surface-container dark:hover:bg-dark-surface'
              }`}
            >
              Day 1 (12 Oct)
            </button>
            <button
              onClick={() => setActiveFilter('DAY2')}
              className={`px-3.5 py-2 rounded-xl font-label-caps text-xs transition-all font-bold ${
                activeFilter === 'DAY2'
                  ? 'bg-primary text-on-primary shadow-md scale-105'
                  : 'text-on-surface-variant dark:text-dark-text-muted hover:text-on-surface dark:hover:text-dark-text hover:bg-surface-container dark:hover:bg-dark-surface'
              }`}
            >
              Day 2 (13 Oct)
            </button>
            <button
              onClick={() => setActiveFilter('DAY3')}
              className={`px-3.5 py-2 rounded-xl font-label-caps text-xs transition-all font-bold ${
                activeFilter === 'DAY3'
                  ? 'bg-primary text-on-primary shadow-md scale-105'
                  : 'text-on-surface-variant dark:text-dark-text-muted hover:text-on-surface dark:hover:text-dark-text hover:bg-surface-container dark:hover:bg-dark-surface'
              }`}
            >
              Day 3 (14 Oct)
            </button>
            <button
              onClick={() => setActiveFilter('DAY4')}
              className={`px-3.5 py-2 rounded-xl font-label-caps text-xs transition-all font-bold ${
                activeFilter === 'DAY4'
                  ? 'bg-primary text-on-primary shadow-md scale-105'
                  : 'text-on-surface-variant dark:text-dark-text-muted hover:text-on-surface dark:hover:text-dark-text hover:bg-surface-container dark:hover:bg-dark-surface'
              }`}
            >
              Day 4 (15 Oct)
            </button>
            <button
              onClick={() => setActiveFilter('DAY5')}
              className={`px-3.5 py-2 rounded-xl font-label-caps text-xs transition-all font-bold ${
                activeFilter === 'DAY5'
                  ? 'bg-primary text-on-primary shadow-md scale-105'
                  : 'text-on-surface-variant dark:text-dark-text-muted hover:text-on-surface dark:hover:text-dark-text hover:bg-surface-container dark:hover:bg-dark-surface'
              }`}
            >
              Day 5 (16 Oct)
            </button>
          </div>

          {/* Visual Divider */}
          <div className="h-6 w-px bg-black/40 dark:bg-dark-border mx-1 hidden sm:block" />

          {/* Dedicated Competitions Tab Button */}
          <button
            onClick={() => setActiveFilter('COMPETITIONS')}
            className={`px-4 py-2 rounded-xl font-label-caps text-xs transition-all font-bold flex items-center gap-1.5 ${
              activeFilter === 'COMPETITIONS'
                ? 'bg-secondary text-white shadow-lg shadow-secondary/30 scale-105 ring-2 ring-secondary/30'
                : 'bg-secondary/15 text-secondary dark:text-secondary-fixed hover:bg-secondary hover:text-white border border-secondary/30'
            }`}
          >
            <span className="material-symbols-outlined text-sm">emoji_events</span>
            <span>Day 5 Competitions</span>
          </button>

          {/* Dedicated Valedictory & Winners Button */}
          <button
            onClick={() => setActiveFilter('WINNERS')}
            className={`px-4 py-2 rounded-xl font-label-caps text-xs transition-all font-bold flex items-center gap-1.5 ${
              activeFilter === 'WINNERS'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30 scale-105 ring-2 ring-amber-500/30'
                : 'bg-amber-500/15 text-amber-700 dark:text-amber-300 hover:bg-amber-500 hover:text-white border border-amber-500/30'
            }`}
          >
            <span className="material-symbols-outlined text-sm">military_tech</span>
            <span>Valedictory &amp; Winners</span>
          </button>
        </GlassPanel>
      </section>

      {/* CONDITIONAL RENDER: COMPETITIONS VIEW vs WINNERS VIEW vs FULL SCHEDULE */}
      {activeFilter === 'COMPETITIONS' ? (
        /* ================= DEDICATED COMPETITIONS VIEW (16 October Competitions + Forms) ================= */
        <div className="space-y-12 animate-fadeIn mb-16">
          <section className="px-gutter max-w-container-max mx-auto w-full">
            <GlassPanel
              blur={0}
              dome={1.6}
              strength={0.45}
              radius={28}
              className="shadow-lg shadow-secondary/5"
              contentClassName="p-6 sm:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b-2 border-secondary/30 dark:border-secondary/20">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-secondary dark:text-secondary-fixed uppercase tracking-wider mb-1.5">
                    <span className="material-symbols-outlined text-base">emoji_events</span>
                    <span>DAY 5 • 16 OCTOBER 2026 • SPECIAL COMPETITIONS ARENA</span>
                  </div>
                  <h2 className="font-headline-md text-2xl sm:text-3xl font-bold text-on-surface dark:text-dark-text">
                    Special Competitions Registration Links
                  </h2>
                  <p className="text-xs sm:text-sm text-on-surface-variant dark:text-dark-text-muted mt-1 max-w-2xl">
                    Register directly using individual Google Forms for each flagship competition on Day 5 (16 October 2026). All timings are tentative.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/15 text-secondary dark:text-secondary-fixed border border-secondary/30 text-xs font-bold shrink-0">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                  <span>Google Forms Active &amp; Accepting Entries</span>
                </div>
              </div>

              {/* 4 Competition Cards with Individual Register Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {competitionActivities.map((act) => (
                  <GlassPanel
                    key={act.id}
                    blur={0}
                    dome={1.6}
                    strength={0.4}
                    radius={20}
                    className="border-2 border-secondary/30 hover:border-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/15 group"
                    contentClassName="p-6 flex flex-col justify-between h-full bg-gradient-to-br from-white/40 via-transparent to-secondary/5 dark:from-white/5 dark:to-secondary/10"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-label-caps font-bold px-3 py-1 rounded-full bg-secondary/15 text-secondary dark:text-secondary-fixed border border-secondary/30">
                          {act.tag}
                        </span>
                        <span className="text-xs font-bold text-secondary flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          <span>Tentative Timing</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary dark:text-secondary-fixed flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                          <span className="material-symbols-outlined text-2xl">{act.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-headline-md text-lg sm:text-xl font-bold text-on-surface dark:text-dark-text group-hover:text-secondary transition-colors">
                            {act.title}
                          </h3>
                          <p className="text-xs text-secondary dark:text-secondary-fixed font-semibold">
                            {act.track}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-on-surface-variant dark:text-dark-text-muted leading-relaxed mb-4">
                        {act.description}
                      </p>

                      <div className="p-3 rounded-xl bg-surface-container/60 dark:bg-dark-surface/60 border border-outline-variant/20 mb-4 flex items-center gap-2 text-xs font-semibold text-on-surface dark:text-dark-text">
                        <span className="material-symbols-outlined text-base text-secondary">event</span>
                        <span>{act.scheduleInfo}</span>
                      </div>

                      {/* Competition Rules & Format */}
                      {act.rules && act.rules.length > 0 && (
                        <div className="mb-4 p-3.5 rounded-xl bg-secondary/10 dark:bg-secondary/15 border border-secondary/25 text-left">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-secondary dark:text-secondary-fixed mb-2 uppercase tracking-wide">
                            <span className="material-symbols-outlined text-sm">checklist</span>
                            <span>Competition Format &amp; Rules</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-on-surface/90 dark:text-dark-text/90">
                            {act.rules.map((rule, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-[13px] text-secondary mt-0.5 shrink-0">check_circle</span>
                                <span className="leading-relaxed">{rule}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Official PPT Template Download Button */}
                      {act.isPpt && (
                        <div className="mb-4 p-3.5 rounded-xl bg-gradient-to-r from-amber-500/15 to-secondary/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-lg">download</span>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-on-surface dark:text-dark-text">Official PPT Presentation Template</p>
                              <p className="text-[11px] text-on-surface-variant dark:text-dark-text-muted">Mandatory slide template for participants</p>
                            </div>
                          </div>
                          <a
                            href={`${import.meta.env.BASE_URL}pvpsit_qiskit_fall_fest_ppt_template.pptx`}
                            download="PVPSIT X QISKIT FALL FEST PPT TEMPLATE.pptx"
                            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 text-white hover:bg-amber-600 text-xs font-bold shadow-sm transition-all shrink-0 hover:scale-105 active:scale-95"
                          >
                            <span className="material-symbols-outlined text-sm">file_download</span>
                            <span>Download Template (.pptx)</span>
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-secondary/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-on-surface-variant dark:text-dark-text-muted">
                        Official Google Form Registration
                      </span>
                      <a
                        href={act.formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-white hover:bg-secondary/90 transition-all font-bold text-xs shadow-md hover:scale-105 active:scale-95 shrink-0"
                      >
                        <span className="material-symbols-outlined text-sm">how_to_reg</span>
                        <span>{act.buttonText}</span>
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </a>
                    </div>
                  </GlassPanel>
                ))}
              </div>
            </GlassPanel>
          </section>
        </div>
      ) : activeFilter === 'WINNERS' ? (
        /* ================= DEDICATED VALEDICTORY & WINNERS VIEW ================= */
        <div className="space-y-12 animate-fadeIn mb-16">
          <section className="px-gutter max-w-container-max mx-auto w-full">
            <GlassPanel
              blur={0}
              dome={1.6}
              strength={0.45}
              radius={28}
              className="shadow-xl shadow-amber-500/5 border border-amber-500/30"
              contentClassName="p-6 sm:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-5 border-b-2 border-amber-500/30 dark:border-amber-500/20">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider mb-1.5">
                    <span className="material-symbols-outlined text-base">military_tech</span>
                    <span>17 OCTOBER 2026 • GRAND VALEDICTORY CEREMONY</span>
                  </div>
                  <h2 className="font-headline-md text-2xl sm:text-3xl font-bold text-on-surface dark:text-dark-text">
                    Valedictory &amp; Winners Announcement
                  </h2>
                  <p className="text-xs sm:text-sm text-on-surface-variant dark:text-dark-text-muted mt-1 max-w-2xl">
                    Official ceremony for prize distribution, felicitation of participants, and announcement of winners across all 4 flagship competitions.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs font-bold shrink-0">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>Announcement Scheduled for 17 Oct (TBD)</span>
                </div>
              </div>

              {/* Ceremony Info Box */}
              <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-primary/5 to-secondary/10 border border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl">celebration</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-on-surface dark:text-dark-text">
                      Grand Valedictory Ceremony &amp; Prize Distribution
                    </h3>
                    <p className="text-xs text-on-surface-variant dark:text-dark-text-muted">
                      17 October 2026 • 10:00 AM – 12:30 PM (Tentative) • College Auditorium
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 shrink-0">
                  Status: Upcoming
                </span>
              </div>

              {/* 4 Competition Winners Cards / TBD */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Quiz Competition */}
                <div className="p-6 rounded-2xl bg-white/60 dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-md border border-secondary/20">
                        Event 23
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                        TBD / Scheduled
                      </span>
                    </div>
                    <h3 className="font-headline-md text-lg font-bold text-on-surface dark:text-dark-text mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">quiz</span>
                      <span>Quantum Quest – The Ultimate Quantum Quiz</span>
                    </h3>
                    <p className="text-xs text-on-surface-variant dark:text-dark-text-muted mb-4">
                      Top performers in quantum mechanics fundamentals, circuit trivia, and speed rounds.
                    </p>

                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5 text-on-surface dark:text-dark-text">
                          <span>🥇</span>
                          <span>1st Place (Winner)</span>
                        </span>
                        <span className="font-bold text-amber-700 dark:text-amber-300 italic">
                          To Be Announced on 17 Oct (TBD)
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5 text-on-surface dark:text-dark-text">
                          <span>🥈</span>
                          <span>2nd Place (Runner-Up)</span>
                        </span>
                        <span className="font-bold text-on-surface-variant dark:text-dark-text-muted italic">
                          To Be Announced on 17 Oct (TBD)
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-amber-700/10 border border-amber-700/20 flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5 text-on-surface dark:text-dark-text">
                          <span>🥉</span>
                          <span>3rd Place</span>
                        </span>
                        <span className="font-bold text-on-surface-variant dark:text-dark-text-muted italic">
                          To Be Announced on 17 Oct (TBD)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Presentation Challenge */}
                <div className="p-6 rounded-2xl bg-white/60 dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-md border border-secondary/20">
                        Event 24
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                        TBD / Scheduled
                      </span>
                    </div>
                    <h3 className="font-headline-md text-lg font-bold text-on-surface dark:text-dark-text mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">co_present</span>
                      <span>Quantum Vision – Student PPT Presentation Challenge</span>
                    </h3>
                    <p className="text-xs text-on-surface-variant dark:text-dark-text-muted mb-4">
                      Best technical presentations and quantum idea pitches judged on clarity, innovation, and scientific depth.
                    </p>

                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5 text-on-surface dark:text-dark-text">
                          <span>🥇</span>
                          <span>1st Place (Winner)</span>
                        </span>
                        <span className="font-bold text-amber-700 dark:text-amber-300 italic">
                          To Be Announced on 17 Oct (TBD)
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5 text-on-surface dark:text-dark-text">
                          <span>🥈</span>
                          <span>2nd Place (Runner-Up)</span>
                        </span>
                        <span className="font-bold text-on-surface-variant dark:text-dark-text-muted italic">
                          To Be Announced on 17 Oct (TBD)
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-amber-700/10 border border-amber-700/20 flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5 text-on-surface dark:text-dark-text">
                          <span>🥉</span>
                          <span>3rd Place</span>
                        </span>
                        <span className="font-bold text-on-surface-variant dark:text-dark-text-muted italic">
                          To Be Announced on 17 Oct (TBD)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Debate and JAM */}
                <div className="p-6 rounded-2xl bg-white/60 dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-md border border-secondary/20">
                        Event 25
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                        TBD / Scheduled
                      </span>
                    </div>
                    <h3 className="font-headline-md text-lg font-bold text-on-surface dark:text-dark-text mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">gavel</span>
                      <span>Quantum Minds – Debate, JAM &amp; Group Discussion</span>
                    </h3>
                    <p className="text-xs text-on-surface-variant dark:text-dark-text-muted mb-4">
                      Top debaters and Just-A-Minute speakers excelling in persuasion, spontaneous speech, and technical articulation.
                    </p>

                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5 text-on-surface dark:text-dark-text">
                          <span>🥇</span>
                          <span>1st Place (Winner)</span>
                        </span>
                        <span className="font-bold text-amber-700 dark:text-amber-300 italic">
                          To Be Announced on 17 Oct (TBD)
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5 text-on-surface dark:text-dark-text">
                          <span>🥈</span>
                          <span>2nd Place (Runner-Up)</span>
                        </span>
                        <span className="font-bold text-on-surface-variant dark:text-dark-text-muted italic">
                          To Be Announced on 17 Oct (TBD)
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-amber-700/10 border border-amber-700/20 flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5 text-on-surface dark:text-dark-text">
                          <span>🥉</span>
                          <span>3rd Place</span>
                        </span>
                        <span className="font-bold text-on-surface-variant dark:text-dark-text-muted italic">
                          To Be Announced on 17 Oct (TBD)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Treasure Hunt */}
                <div className="p-6 rounded-2xl bg-white/60 dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-md border border-secondary/20">
                        Event 26
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                        TBD / Scheduled
                      </span>
                    </div>
                    <h3 className="font-headline-md text-lg font-bold text-on-surface dark:text-dark-text mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">travel_explore</span>
                      <span>Quantum Trail – The Qiskit Treasure Hunt</span>
                    </h3>
                    <p className="text-xs text-on-surface-variant dark:text-dark-text-muted mb-4">
                      Winning teams in the fast-paced campus cryptographic puzzle race and checkpoint clearance.
                    </p>

                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5 text-on-surface dark:text-dark-text">
                          <span>🥇</span>
                          <span>1st Place (Winning Squad)</span>
                        </span>
                        <span className="font-bold text-amber-700 dark:text-amber-300 italic">
                          To Be Announced on 17 Oct (TBD)
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5 text-on-surface dark:text-dark-text">
                          <span>🥈</span>
                          <span>2nd Place (Runner-Up Squad)</span>
                        </span>
                        <span className="font-bold text-on-surface-variant dark:text-dark-text-muted italic">
                          To Be Announced on 17 Oct (TBD)
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-amber-700/10 border border-amber-700/20 flex items-center justify-between">
                        <span className="font-bold flex items-center gap-1.5 text-on-surface dark:text-dark-text">
                          <span>🥉</span>
                          <span>3rd Place</span>
                        </span>
                        <span className="font-bold text-on-surface-variant dark:text-dark-text-muted italic">
                          To Be Announced on 17 Oct (TBD)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </section>
        </div>
      ) : (
        /* ================= STANDARD 5-DAY EVENT SCHEDULE VIEW ================= */
        <section className="pb-section-gap px-gutter max-w-4xl mx-auto w-full animate-fadeIn">
          <div className="space-y-12">
            {filteredDays.map((day) => (
              <div key={day.dayNumber} className="relative">
                {/* Day Header Card */}
                <GlassPanel
                  blur={0}
                  dome={1.6}
                  strength={0.45}
                  radius={20}
                  className="mb-6 shadow-sm border border-primary/25 dark:border-primary/30"
                  contentClassName="p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[11px] font-label-caps font-bold px-3 py-1 rounded-full border ${day.badgeColor}`}>
                          DAY {day.dayNumber} • {day.dayOfWeek.toUpperCase()}
                        </span>
                        <span className="text-xs font-bold text-primary">
                          {day.date}
                        </span>
                      </div>
                      <h2 className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface dark:text-dark-text">
                        {day.title}
                      </h2>
                      <p className="text-xs text-secondary font-semibold mt-0.5">
                        {day.subtitle}
                      </p>
                    </div>
                    <div className="text-right sm:shrink-0 flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/25">
                        Tentative Timings
                      </span>
                      <span className="text-xs text-on-surface-variant dark:text-dark-text-muted bg-surface-container/60 dark:bg-dark-surface/60 px-3 py-1 rounded-lg border border-outline-variant/20">
                        {day.sessions.length} {day.sessions.length === 1 ? 'Session' : 'Sessions'}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant dark:text-dark-text-muted mt-3 pt-3 border-t border-outline-variant/20 dark:border-dark-border leading-relaxed">
                    {day.summary}
                  </p>
                </GlassPanel>

                {/* Sessions List */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/30 dark:border-dark-border space-y-6">
                  {day.sessions.map((session) => (
                    <div key={session.id} className="relative">
                      {/* Circle Node on Timeline */}
                      <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-white dark:bg-dark-bg border-4 border-primary shadow-sm z-20" />

                      <GlassPanel
                        blur={0}
                        dome={1.6}
                        strength={0.4}
                        radius={20}
                        className={`transition-all duration-300 hover:shadow-md ${
                          session.isCompetition
                            ? 'border-2 border-secondary/50 dark:border-secondary/40 shadow-glow-cyan/5 bg-secondary/5'
                            : 'border border-primary/20 dark:border-primary/30 hover:border-primary/40'
                        }`}
                        contentClassName="p-5 sm:p-6"
                      >
                        {/* Session Top Meta */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-outline-variant/20 dark:border-dark-border">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-primary font-label-caps bg-primary/10 dark:bg-primary/20 px-2.5 py-0.5 rounded-md">
                              {session.sessionNumber}
                            </span>
                            <span className="text-[11px] font-label-caps font-semibold text-on-surface-variant dark:text-dark-text-muted bg-surface-container/60 dark:bg-dark-surface/60 px-2.5 py-0.5 rounded-md border border-outline-variant/20">
                              {session.typeBadge}
                            </span>
                            {session.isCompetition && (
                              <span className="text-[10px] font-label-caps font-bold text-secondary bg-secondary/15 px-2.5 py-0.5 rounded-full border border-secondary/30 inline-flex items-center gap-1">
                                <span className="material-symbols-outlined text-[12px]">emoji_events</span>
                                <span>Day 5 Competition</span>
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 text-xs font-bold text-on-surface dark:text-dark-text bg-white/80 dark:bg-dark-surface/80 px-3 py-1 rounded-lg border border-outline-variant/20 shadow-xs">
                            <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                            <span>{session.time} <span className="text-[10px] font-normal text-on-surface-variant dark:text-dark-text-muted">(Tentative)</span></span>
                          </div>
                        </div>

                        {/* Session Title & Description */}
                        <div className="flex items-start gap-3 mb-2">
                          <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                            <span className="material-symbols-outlined text-lg">{session.icon}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-headline-md text-base sm:text-lg font-bold text-on-surface dark:text-dark-text">
                              {session.title}
                            </h3>
                            {session.competitionTag && (
                              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary mt-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                                <span>{session.competitionTag}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-on-surface-variant dark:text-dark-text-muted leading-relaxed mt-2 pl-12">
                          {session.description}
                        </p>

                        {/* Competition Format & Rules */}
                        {session.rules && session.rules.length > 0 && (
                          <div className="mt-3 ml-0 sm:ml-12 p-3.5 rounded-xl bg-secondary/10 dark:bg-secondary/15 border border-secondary/25 text-left">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-secondary dark:text-secondary-fixed mb-2 uppercase tracking-wide">
                              <span className="material-symbols-outlined text-sm">checklist</span>
                              <span>Competition Format &amp; Rules</span>
                            </div>
                            <ul className="space-y-1.5 text-xs text-on-surface/90 dark:text-dark-text/90">
                              {session.rules.map((rule, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="material-symbols-outlined text-[13px] text-secondary mt-0.5 shrink-0">check_circle</span>
                                  <span className="leading-relaxed">{rule}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Official PPT Template Download Button */}
                        {session.isPpt && (
                          <div className="mt-3 ml-0 sm:ml-12 p-3.5 rounded-xl bg-gradient-to-r from-amber-500/15 to-secondary/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-lg">download</span>
                              </div>
                              <div>
                                <p className="text-xs font-bold text-on-surface dark:text-dark-text">Official PPT Presentation Template</p>
                                <p className="text-[11px] text-on-surface-variant dark:text-dark-text-muted">Mandatory slide template for participants</p>
                              </div>
                            </div>
                            <a
                              href={`${import.meta.env.BASE_URL}pvpsit_qiskit_fall_fest_ppt_template.pptx`}
                              download="PVPSIT X QISKIT FALL FEST PPT TEMPLATE.pptx"
                              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 text-white hover:bg-amber-600 text-xs font-bold shadow-sm transition-all shrink-0 hover:scale-105 active:scale-95"
                            >
                              <span className="material-symbols-outlined text-sm">file_download</span>
                              <span>Download Template (.pptx)</span>
                            </a>
                          </div>
                        )}

                        {/* If session is a competition, render dedicated Google Form button */}
                        {session.isCompetition && session.formUrl && (
                          <div className="mt-4 pt-4 ml-0 sm:ml-12 border-t border-secondary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <span className="text-xs text-on-surface-variant dark:text-dark-text-muted font-medium">
                              Dedicated Entry Form:
                            </span>
                            <a
                              href={session.formUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-secondary text-white hover:bg-secondary/90 text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95 shrink-0"
                            >
                              <span className="material-symbols-outlined text-sm">how_to_reg</span>
                              <span>{session.buttonText || 'Register for this Event'}</span>
                              <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </a>
                          </div>
                        )}
                      </GlassPanel>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Bottom Valedictory Section in Full View */}
            <div className="pt-8">
              <GlassPanel
                blur={0}
                dome={1.6}
                strength={0.45}
                radius={24}
                className="border-2 border-amber-500/30 shadow-lg shadow-amber-500/5"
                contentClassName="p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-amber-500/20">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-label-caps font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                        VALEDICTORY • 17 OCTOBER 2026
                      </span>
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        Saturday • Tentative: 10:00 AM – 12:30 PM
                      </span>
                    </div>
                    <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface dark:text-dark-text">
                      Grand Valedictory &amp; Winners Announcement
                    </h3>
                    <p className="text-xs text-on-surface-variant dark:text-dark-text-muted mt-1">
                      Formal concluding ceremony, certificate distribution, and prize presentation for all 4 competitions.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveFilter('WINNERS')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 text-white hover:bg-amber-600 text-xs font-bold transition-all shadow-sm shrink-0"
                  >
                    <span>View Winners (17 Oct)</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-surface-container/60 dark:bg-dark-surface/60 border border-outline-variant/20">
                    <span className="font-bold text-secondary block mb-1">Quiz Competition</span>
                    <span className="text-amber-700 dark:text-amber-300 font-semibold italic">TBD (Winners Announced 17 Oct)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-container/60 dark:bg-dark-surface/60 border border-outline-variant/20">
                    <span className="font-bold text-secondary block mb-1">PPT Presentation Challenge</span>
                    <span className="text-amber-700 dark:text-amber-300 font-semibold italic">TBD (Winners Announced 17 Oct)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-container/60 dark:bg-dark-surface/60 border border-outline-variant/20">
                    <span className="font-bold text-secondary block mb-1">Debate &amp; JAM Arena</span>
                    <span className="text-amber-700 dark:text-amber-300 font-semibold italic">TBD (Winners Announced 17 Oct)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-container/60 dark:bg-dark-surface/60 border border-outline-variant/20">
                    <span className="font-bold text-secondary block mb-1">Treasure Hunt</span>
                    <span className="text-amber-700 dark:text-amber-300 font-semibold italic">TBD (Winners Announced 17 Oct)</span>
                  </div>
                </div>
              </GlassPanel>
            </div>
          </div>
        </section>
      )}

      {/* Main Registration CTA Section */}
      <section className="bg-inverse-surface py-section-gap px-gutter text-center border-t border-outline/20 relative overflow-hidden mt-auto">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-inverse-on-surface mb-3 font-bold">
            Be Part of Q-CONNECT 2026
          </h2>
          <p className="font-body-lg text-tertiary-fixed-dim/90 mb-8 text-sm sm:text-base leading-relaxed">
            Register for free via the official Google Form to attend 5 days of quantum learning, hands-on labs, keynotes, and compete in the flagship quantum challenges.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={MAIN_REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-200 ambient-shadow inline-flex items-center gap-2 hover:scale-105 active:scale-110 font-bold text-base"
            >
              <span>Register via Google Form</span>
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
            <button
              onClick={() => setActiveFilter('COMPETITIONS')}
              className="bg-surface-container/30 text-white font-label-caps px-6 py-4 rounded-xl border border-white/20 hover:bg-surface-container/50 transition-all duration-200 inline-flex items-center gap-2 hover:scale-105 active:scale-95 font-bold text-sm"
            >
              <span>Day 5 Competition Links</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
