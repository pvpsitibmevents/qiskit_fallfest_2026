import React, { useState } from 'react';
import { GlassPanel } from '@/components/ui/glass';
import { GlassSelect, GlassSelectTrigger, GlassSelectContent, GlassSelectItem } from '@/components/ui/glass-select';

export default function SchedulePage({ onOpenRegister, onNavigateToSpeaker, setActivePage }) {
  const [activeFilter, setActiveFilter] = useState('ALL'); // 'ALL', 'DAY1', 'DAY2', 'DAY3', 'DAY4', 'DAY5', 'COMPETITIONS'

  // 5 Core Activities / Competitions (Themed in secondary #6252a1 purple)
  const competitionActivities = [
    {
      number: 1,
      id: 'debate-jam',
      title: 'Debate and Jam',
      track: 'Turncoat & Just-A-Minute (JAM) Arena',
      scheduleInfo: 'Day 5 (16 Oct) • 1:15 PM – 2:30 PM',
      description: 'Competitive head-to-head Oxford-style debate and Just-A-Minute (JAM) speaking rounds on quantum disruption, classical vs. quantum computing, and technological ethics.',
      icon: 'gavel',
      color: 'from-secondary/20 to-secondary-container/20 border-secondary/40 text-secondary',
      badgeColor: 'bg-secondary/15 text-secondary dark:bg-secondary/25 dark:text-secondary-fixed border-secondary/30',
      tag: 'Activity #1',
    },
    {
      number: 2,
      id: 'poster-ppt',
      title: 'Poster or PPT Presentation',
      track: 'Quantum Vision — Presentation Track',
      scheduleInfo: 'Day 5 (16 Oct) • 11:30 AM – 12:30 PM',
      description: 'Present high-impact technical posters or structured slide decks explaining specific quantum computing domains, algorithms, quantum internet, or hardware architectures.',
      icon: 'palette',
      color: 'from-secondary/20 to-secondary-container/20 border-secondary/40 text-secondary',
      badgeColor: 'bg-secondary/15 text-secondary dark:bg-secondary/25 dark:text-secondary-fixed border-secondary/30',
      tag: 'Activity #2',
    },
    {
      number: 3,
      id: 'circuit-challenge',
      title: 'Circuit Building Challenge with Qiskit',
      track: 'CircuitCraft Hack & Build',
      scheduleInfo: 'Day 2 (13 Oct) • 2:00 PM – 3:30 PM',
      description: 'Hands-on practical circuit building challenge where participant teams solve target circuit puzzles, implement quantum gates, and optimize circuit depth in Qiskit.',
      icon: 'precision_manufacturing',
      color: 'from-secondary/20 to-secondary-container/20 border-secondary/40 text-secondary',
      badgeColor: 'bg-secondary/15 text-secondary dark:bg-secondary/25 dark:text-secondary-fixed border-secondary/30',
      tag: 'Activity #3',
    },
    {
      number: 4,
      id: 'quiz-treasure',
      title: 'Quiz & Treasure Hunt',
      track: 'Quantum Quest & The Qiskit Trail',
      scheduleInfo: 'Day 5 (16 Oct) • Quiz: 9:30 AM | Treasure Hunt: 2:30 PM',
      description: 'Dual excitement: a multi-round competitive quantum quiz in the morning, followed by an action-packed campus-wide clue-solving cryptographic treasure hunt in the afternoon.',
      icon: 'travel_explore',
      color: 'from-secondary/20 to-secondary-container/20 border-secondary/40 text-secondary',
      badgeColor: 'bg-secondary/15 text-secondary dark:bg-secondary/25 dark:text-secondary-fixed border-secondary/30',
      tag: 'Activity #4',
    },
    {
      number: 5,
      id: 'idea-presentation',
      title: 'Idea Presentation',
      track: 'Quantum Innovation & Pitch Track',
      scheduleInfo: 'Day 5 (16 Oct) • 11:30 AM – 12:30 PM',
      description: 'Pitch original quantum application ideas, use-cases for government/industry, and innovative societal solutions addressing healthcare, finance, logistics, and cryptography.',
      icon: 'lightbulb',
      color: 'from-secondary/20 to-secondary-container/20 border-secondary/40 text-secondary',
      badgeColor: 'bg-secondary/15 text-secondary dark:bg-secondary/25 dark:text-secondary-fixed border-secondary/30',
      tag: 'Activity #5',
    },
  ];

  // Complete 5-Day Event Schedule
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
          typeBadge: 'Foundations & Keynote',
          description: 'Introduction to the quantum realm: classical bits vs. qubits, principles of superposition, quantum entanglement, and why quantum computing represents a computational paradigm shift.',
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
          typeBadge: 'Engagement & Networking',
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
          description: 'Step-by-step guided coding: synthesizing Bell states, GHZ quantum entangled states, quantum teleportation circuits, and running statevector simulation on local backends.',
          icon: 'code',
        },
        {
          id: 'd2-s7',
          sessionNumber: 'Session 7',
          time: '2:00 PM – 3:30 PM',
          title: 'Session 7: Exploring Quantum Circuits – Practical Challenge',
          typeBadge: 'Competition Track',
          isCompetition: true,
          competitionTag: 'Activity 3: Circuit Building Challenge with Qiskit',
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
      subtitle: 'Direct Insights from IBM Quantum Engineers',
      summary: 'A day dedicated to industrial perspectives, career pathways, cutting-edge software tooling, and an exclusive interactive dialogue with IBM Quantum Algorithm Engineer Janani A.',
      badgeColor: 'bg-blue-600/10 text-blue-600 dark:bg-blue-400/15 dark:text-blue-300 border-blue-600/30',
      sessions: [
        {
          id: 'd3-s9',
          sessionNumber: 'Session 9',
          time: '10:00 AM – 11:00 AM',
          title: 'Session 9: Quantum Computing at IBM – Opportunities, Careers & Industry Perspectives',
          typeBadge: 'IBM Keynote',
          description: 'Overview of enterprise quantum computing, IBM Quantum System One & Two architectures, real-world industry adoption, and career trajectories in quantum software.',
          icon: 'business_center',
          speaker: {
            name: 'Janani A',
            role: 'Quantum Algorithm Engineer, IBM',
            id: 'janani-a',
            avatar: `${import.meta.env.BASE_URL}speakers/janani_a.jpg`,
            badge: 'IBM Quantum',
          },
        },
        {
          id: 'd3-s10',
          sessionNumber: 'Session 10',
          time: '11:00 AM – 11:15 AM',
          title: 'Session 10: Interactive Student Dialogue with IBM Speaker (A Janani Mam)',
          typeBadge: 'Interactive Dialogue',
          description: 'Direct interactive dialogue and Q&A session with IBM Quantum Algorithm Engineer Janani A, discussing quantum algorithm workflows, Qiskit Runtime, and career guidance.',
          icon: 'forum',
          speaker: {
            name: 'Janani A',
            role: 'Quantum Algorithm Engineer, IBM',
            id: 'janani-a',
            avatar: `${import.meta.env.BASE_URL}speakers/janani_a.jpg`,
            badge: 'IBM Quantum',
          },
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
          description: 'Synthesis of key learnings from Days 1–3, preparation strategy for the Grand Inauguration and Day 5 competitions.',
          icon: 'psychology',
        },
      ],
    },
    {
      dayNumber: 4,
      dayKey: 'DAY4',
      date: '15 October 2026',
      dayOfWeek: 'Thursday',
      title: 'Grand Inauguration & Expert Interaction Day',
      subtitle: 'Ceremonial Launch & Advanced Quantum Developer Session',
      summary: 'The grand ceremonial inauguration of Qiskit Fall Fest 2026 featuring college leadership, followed by an afternoon masterclass by Kunal Garg, Ph.D. (Senior Quantum Developer, BQP).',
      badgeColor: 'bg-amber-500/10 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300 border-amber-500/30',
      sessions: [
        {
          id: 'd4-morning-welcome',
          sessionNumber: 'Morning',
          time: '9:30 AM – 10:00 AM',
          title: 'Welcome & Gathering of Participants',
          typeBadge: 'Welcome',
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
          typeBadge: 'Keynote Address',
          description: 'Inspirational presidential remarks by institutional leadership emphasizing technological innovation, quantum literacy, and student research excellence.',
          icon: 'campaign',
        },
        {
          id: 'd4-s15',
          sessionNumber: 'Session 15',
          time: '10:35 AM – 10:50 AM',
          title: 'Session 15: Qiskit Fall Fest 2026 – Vision, Objectives & Student Opportunities',
          typeBadge: 'Vision & Scope',
          description: 'Presentation outlining the core mission of Q-CONNECT 2026, upcoming hackathons, regional community building, and opportunities for participating students.',
          icon: 'visibility',
        },
        {
          id: 'd4-s16',
          sessionNumber: 'Session 16',
          time: '10:50 AM – 11:00 AM',
          title: 'Session 16: Event Briefing & Logistics Guidelines',
          typeBadge: 'Briefing',
          description: 'Overview of event support channels, logistics, competition rubrics, and briefing for the afternoon sessions.',
          icon: 'badge',
        },
        {
          id: 'd4-afternoon-expert',
          sessionNumber: 'Afternoon Session',
          time: '2:00 PM – 3:00 PM',
          title: 'Expert Session by Kunal Sir (Dr. Kunal Garg)',
          typeBadge: 'Expert Keynote',
          description: 'Specialist keynote session by Dr. Kunal Garg (Senior Quantum Computing Developer, BQP) covering high-performance quantum algorithms, industrial optimization, and Qiskit SDK integration.',
          icon: 'psychology_alt',
          speaker: {
            name: 'Kunal Garg, Ph.D.',
            role: 'Senior Quantum Computing Developer, BQP',
            id: 'kunal-garg',
            avatar: `${import.meta.env.BASE_URL}speakers/kunal_garg.jpg`,
            badge: 'BQP Keynote',
          },
        },
        {
          id: 'd4-afternoon-deepdive',
          sessionNumber: 'Session 17',
          time: '3:00 PM – 4:00 PM',
          title: 'Interactive Quantum Architecture Deep-Dive & Q&A',
          typeBadge: 'Interactive Q&A',
          description: 'Deep-dive discussion into quantum software architectures, compilation challenges, algorithm benchmarking, and live student Q&A.',
          icon: 'record_voice_over',
          speaker: {
            name: 'Kunal Garg, Ph.D.',
            role: 'Senior Quantum Computing Developer, BQP',
            id: 'kunal-garg',
            avatar: `${import.meta.env.BASE_URL}speakers/kunal_garg.jpg`,
            badge: 'BQP Keynote',
          },
        },
        {
          id: 'd4-afternoon-wrapup',
          sessionNumber: 'Session 18',
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
      title: 'Quantum Competitions & Grand Finale Day',
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
          competitionTag: 'Activity 4: Quiz Competition',
          description: 'High-energy multi-round quantum quiz testing fundamentals, circuit recognition, quantum algorithm trivia, and rapid-fire problem solving.',
          icon: 'quiz',
        },
        {
          id: 'd5-e24',
          sessionNumber: 'Event 24',
          time: '11:30 AM – 12:30 PM',
          title: 'Event 24: Quantum Vision – Student Presentation Challenge',
          typeBadge: 'Flagship Competition',
          isCompetition: true,
          competitionTag: 'Activities 2 & 5: Poster / PPT & Idea Presentation',
          description: 'Student presentation challenge featuring technical poster displays, PPT presentations on specific quantum domains, and novel quantum application idea pitches.',
          icon: 'co_present',
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
          competitionTag: 'Activity 1: Debate and JAM',
          description: 'Dynamic competitive arena featuring head-to-head Oxford-style debates and Just-A-Minute (JAM) rounds tackling quantum technology ethics, revolution vs. hype, and the future of computing.',
          icon: 'gavel',
        },
        {
          id: 'd5-e26',
          sessionNumber: 'Event 26',
          time: '2:30 PM – 4:30 PM',
          title: 'Event 26: Quantum Trail – The Qiskit Treasure Hunt',
          typeBadge: 'Flagship Competition',
          isCompetition: true,
          competitionTag: 'Activity 4: Treasure Hunt',
          description: 'Thrilling campus-wide clue-solving race: teams decode quantum circuit puzzles, decipher quantum key cryptography riddles, and race across checkpoints to uncover the final prize.',
          icon: 'travel_explore',
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

  const handleSpeakerClick = (speakerId) => {
    if (onNavigateToSpeaker) {
      onNavigateToSpeaker(speakerId);
    } else if (setActivePage) {
      setActivePage('speakers');
    } else {
      window.location.hash = '#speakers';
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-gutter max-w-container-max mx-auto text-center">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-primary mr-2.5 animate-pulse" />
          <span className="font-label-caps text-xs text-primary uppercase tracking-widest font-bold">
            Q-CONNECT 2026 — Official 5-Day Event Schedule
          </span>
        </div>
        <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-[56px] font-bold text-on-surface dark:text-dark-text mb-6 max-w-4xl mx-auto tracking-tight leading-tight">
          Qiskit Fall Fest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">@ PVPSIT</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-dark-text-muted max-w-3xl mx-auto mb-8 text-sm sm:text-base">
          {activeFilter === 'COMPETITIONS'
            ? 'Explore the 5 Flagship Student Competitions — Debate & JAM, Poster/PPT, Qiskit Circuit Challenge, Quiz & Treasure Hunt, and Idea Presentation.'
            : '12 October – 16 October 2026 • 5 Days of Quantum Foundations, Hands-on Qiskit Labs, IBM Expert Sessions, and Flagship Student Competitions.'}
        </p>

        {/* Mobile Quick Glass Select (0 blur, dome 0.15) */}
        <div className="sm:hidden w-full flex justify-center mb-3">
          <GlassSelect value={activeFilter} onValueChange={setActiveFilter}>
            <GlassSelectTrigger
              className="w-72 bg-white/20 dark:bg-white/5 border-secondary/40 text-on-surface dark:text-dark-text font-bold text-xs"
              placeholder="Select Schedule or Competitions..."
            />
            <GlassSelectContent className="bg-surface/95 dark:bg-dark-surface-card/95 border border-white/20">
              <GlassSelectItem value="ALL">All 5 Days (12–16 Oct)</GlassSelectItem>
              <GlassSelectItem value="DAY1">Day 1 (12 Oct)</GlassSelectItem>
              <GlassSelectItem value="DAY2">Day 2 (13 Oct)</GlassSelectItem>
              <GlassSelectItem value="DAY3">Day 3 (14 Oct)</GlassSelectItem>
              <GlassSelectItem value="DAY4">Day 4 (15 Oct)</GlassSelectItem>
              <GlassSelectItem value="DAY5">Day 5 (16 Oct)</GlassSelectItem>
              <GlassSelectItem value="COMPETITIONS">Competitions (5 Challenges)</GlassSelectItem>
            </GlassSelectContent>
          </GlassSelect>
        </div>

        {/* Schedule & Competitions Filter Bar (GlassPanel: 0 blur, dome 1.6) */}
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

          {/* Visual Divider dividing Event Schedule from Competitions */}
          <div className="h-6 w-px bg-black/40 dark:bg-dark-border mx-1 hidden sm:block" />

          {/* Dedicated Competitions Tab Button - Styled in purple (#6252a1) */}
          <button
            onClick={() => setActiveFilter('COMPETITIONS')}
            className={`px-4 py-2 rounded-xl font-label-caps text-xs transition-all font-bold flex items-center gap-1.5 ${
              activeFilter === 'COMPETITIONS'
                ? 'bg-secondary text-white shadow-lg shadow-secondary/30 scale-105 ring-2 ring-secondary/30'
                : 'bg-secondary/15 text-secondary dark:text-secondary-fixed hover:bg-secondary hover:text-white border border-secondary/30'
            }`}
          >
            <span>Competitions (5)</span>
          </button>
        </GlassPanel>
      </section>

      {/* CONDITIONAL RENDER: COMPETITIONS VIEW vs EVENT SCHEDULE VIEW */}
      {activeFilter === 'COMPETITIONS' ? (
        /* ================= DEDICATED COMPETITIONS VIEW (Themed in #6252a1) ================= */
        <div className="space-y-12 animate-fadeIn mb-16">
          {/* 5 Flagship Competition Activities */}
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
                    <span>Flagship Student Competitions &amp; Hack Challenges</span>
                  </div>
                  <h2 className="font-headline-md text-2xl sm:text-3xl font-bold text-on-surface dark:text-dark-text">
                    5 Featured Activities &amp; Challenges
                  </h2>
                  <p className="text-xs sm:text-sm text-on-surface-variant dark:text-dark-text-muted mt-1 max-w-2xl">
                    Register and compete across circuit building, debates, technical presentations, quizzes, and cryptographic treasure hunts.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/15 text-secondary dark:text-secondary-fixed border border-secondary/30 text-xs font-bold shrink-0">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                  <span>Forms &amp; Submission Sheets Connecting Soon</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {competitionActivities.map((act) => (
                  <GlassPanel
                    key={act.id}
                    blur={0}
                    dome={1.6}
                    strength={0.4}
                    radius={16}
                    className="border border-secondary/30 hover:border-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/15 group"
                    contentClassName="p-5 flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-label-caps font-bold px-3 py-1 rounded-full bg-secondary/15 text-secondary dark:text-secondary-fixed border border-secondary/30">
                          {act.tag}
                        </span>
                        <span className="text-xs font-bold text-secondary">
                          Challenge #{act.number}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary dark:text-secondary-fixed flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all shadow-xs">
                          <span className="material-symbols-outlined text-2xl">{act.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-headline-md text-base sm:text-lg font-bold text-on-surface dark:text-dark-text group-hover:text-secondary transition-colors">
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
                    </div>

                    <div className="pt-3 border-t border-secondary/15 dark:border-secondary/20 flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-on-surface dark:text-dark-text flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
                        <span>{act.scheduleInfo}</span>
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary dark:text-secondary-fixed border border-secondary/20">
                        Official Track
                      </span>
                    </div>
                  </GlassPanel>
                ))}
              </div>
            </GlassPanel>
          </section>

          {/* Competitions Scheduled Arenas & Timeline */}
          <section className="pb-section-gap px-gutter max-w-4xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-secondary/20">
              <div>
                <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-on-surface dark:text-dark-text flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">event_available</span>
                  <span>Competitions Schedule &amp; Timings</span>
                </h3>
                <p className="text-xs text-on-surface-variant dark:text-dark-text-muted mt-1">
                  Timeline of competition challenge sessions during Qiskit Fall Fest
                </p>
              </div>
              <button
                onClick={() => setActiveFilter('ALL')}
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline self-start sm:self-auto"
              >
                <span>View Full 5-Day Schedule</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            <div className="space-y-12">
              {filteredDays.map((day) => (
                <div key={day.dayNumber} className="relative">
                  {/* Day Header Card - Themed in Secondary Purple */}
                  <GlassPanel
                    blur={0}
                    dome={1.6}
                    strength={0.45}
                    radius={20}
                    className="mb-6 shadow-sm border border-secondary/40 dark:border-secondary/30"
                    contentClassName="p-5 sm:p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-label-caps font-bold px-3 py-1 rounded-full bg-secondary/15 text-secondary dark:text-secondary-fixed border border-secondary/30">
                            DAY {day.dayNumber} • {day.dayOfWeek.toUpperCase()}
                          </span>
                          <span className="text-xs font-bold text-secondary">
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
                      <div className="text-right sm:shrink-0">
                        <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-lg border border-secondary/30">
                          {day.sessions.length} {day.sessions.length === 1 ? 'Competition Event' : 'Competition Events'}
                        </span>
                      </div>
                    </div>
                  </GlassPanel>

                  {/* Sessions List */}
                  <div className="relative pl-6 sm:pl-8 border-l-2 border-secondary/40 dark:border-secondary/40 space-y-6">
                    {day.sessions.map((session) => (
                      <div key={session.id} className="relative">
                        {/* Circle Node on Timeline */}
                        <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-white dark:bg-dark-bg border-4 border-secondary shadow-sm z-20" />

                        <GlassPanel
                          blur={0}
                          dome={1.6}
                          strength={0.4}
                          radius={20}
                          className="border border-secondary/40 dark:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 hover:border-secondary"
                          contentClassName="p-5 sm:p-6"
                        >
                          {/* Session Top Meta */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-secondary/15 dark:border-secondary/20">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-xs font-bold text-secondary font-label-caps bg-secondary/15 px-2.5 py-0.5 rounded-md border border-secondary/30">
                                {session.sessionNumber}
                              </span>
                              <span className="text-[11px] font-label-caps font-semibold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-md border border-secondary/20">
                                Competition Event
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5 text-xs font-bold text-on-surface dark:text-dark-text bg-white dark:bg-dark-surface px-3 py-1 rounded-lg border border-secondary/25 shadow-xs">
                              <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
                              <span>{session.time}</span>
                            </div>
                          </div>

                          {/* Title & Description */}
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5 border border-secondary/30">
                              <span className="material-symbols-outlined text-xl">{session.icon}</span>
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

                          <p className="text-xs sm:text-sm text-on-surface-variant dark:text-dark-text-muted leading-relaxed mt-2 pl-13">
                            {session.description}
                          </p>
                        </GlassPanel>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        /* ================= STANDARD EVENT SCHEDULE VIEW (Day-by-Day Chronological Timeline) ================= */
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
                    <div className="text-right sm:shrink-0">
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
                            ? 'border border-secondary/50 dark:border-secondary/40 shadow-glow-cyan/5'
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
                              <button
                                onClick={() => setActiveFilter('COMPETITIONS')}
                                className="text-[10px] font-label-caps font-bold text-secondary bg-secondary/10 hover:bg-secondary hover:text-white transition-all px-2.5 py-0.5 rounded-full border border-secondary/30 inline-flex items-center gap-1 cursor-pointer"
                                title="Click to view Competitions section"
                              >
                                <span>Competition Track</span>
                                <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                              </button>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 text-xs font-bold text-on-surface dark:text-dark-text bg-white/80 dark:bg-dark-surface/80 px-3 py-1 rounded-lg border border-outline-variant/20 shadow-xs">
                            <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                            <span>{session.time}</span>
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

                        {/* Interactive Featured Speaker Card */}
                        {session.speaker && (
                          <div className="mt-4 ml-0 sm:ml-12 p-3.5 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent border border-primary/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/speaker">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-primary to-secondary shrink-0 shadow-md">
                                <img
                                  src={session.speaker.avatar}
                                  alt={session.speaker.name}
                                  className="w-full h-full object-cover rounded-lg group-hover/speaker:scale-105 transition-transform"
                                />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-label-caps font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                                    {session.speaker.badge}
                                  </span>
                                  <span className="text-[11px] text-on-surface-variant dark:text-dark-text-muted">
                                    Featured Speaker
                                  </span>
                                </div>
                                <h4 className="font-bold text-sm text-on-surface dark:text-dark-text">
                                  {session.speaker.name}
                                </h4>
                                <p className="text-xs text-on-surface-variant dark:text-dark-text-muted">
                                  {session.speaker.role}
                                </p>
                              </div>
                            </div>

                            <button
                              onClick={() => handleSpeakerClick(session.speaker.id)}
                              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white hover:bg-on-primary-fixed-variant text-xs font-bold transition-all shadow-sm hover:scale-105 active:scale-95 shrink-0"
                              title={`View ${session.speaker.name}'s profile & poster`}
                            >
                              <span className="material-symbols-outlined text-sm">visibility</span>
                              <span>Meet Speaker &amp; View Profile</span>
                              <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                          </div>
                        )}
                      </GlassPanel>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-inverse-surface py-section-gap px-gutter text-center border-t border-outline/20 relative overflow-hidden mt-auto">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-inverse-on-surface mb-4 font-bold">
            Be Part of Q-CONNECT 2026
          </h2>
          <p className="font-body-lg text-tertiary-fixed-dim/90 mb-8 text-base">
            Register now to attend hands-on workshops, keynotes, and compete in the flagship quantum challenges.
          </p>
          <button
            onClick={onOpenRegister}
            className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-200 ambient-shadow inline-flex items-center gap-2 hover:scale-105 active:scale-110 font-bold text-base"
          >
            <span>Register Now for Fest</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
}
