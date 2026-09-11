import React from 'react';
import InteractiveQuantumBanner from '../components/InteractiveQuantumBanner';

export default function AboutPage({ setActivePage, onOpenRegister }) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter py-section-gap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              PVPSIT Qiskit Fall Fest 2026
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-on-surface dark:text-dark-text md:font-headline-xl font-headline-lg-mobile text-headline-lg-mobile">
            About PVPSIT Qiskit Fall Fest 2026
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-dark-text-muted max-w-xl">
            Join us for an immersive journey into quantum computing. PVPSIT Qiskit Fall Fest 2026 is a premier event designed to bridge the gap between theoretical physics and practical quantum development. Experience cutting-edge talks, hands-on workshops, and collaborative challenges.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={onOpenRegister}
              className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-primary-fixed-variant transition-all duration-200 shadow-pulse-pink hover:scale-105 active:scale-110"
            >
              Register Now
            </button>
            <button
              onClick={() => setActivePage('schedule')}
              className="border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded hover:bg-secondary/5 transition-all duration-200 hover:scale-105 active:scale-110"
            >
              View Schedule
            </button>
          </div>
        </div>

        {/* Interactive Animated Quantum Banner */}
        <div className="w-full flex items-center justify-center">
          <InteractiveQuantumBanner />
        </div>
      </section>

      {/* Event Overview Cards (4 Pillars) */}
      <section className="max-w-container-max mx-auto px-gutter py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#F8F9FF] dark:bg-dark-surface-card border border-outline-variant/20 dark:border-dark-border p-8 rounded-xl flex flex-col items-start gap-4 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-lg group">
            <div className="w-14 h-14 bg-white dark:bg-dark-surface rounded-xl p-2 border border-outline-variant/30 dark:border-dark-border shadow-xs flex items-center justify-center mb-1 group-hover:scale-110 transition-transform overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}theme/Picture1.png`} alt="Learn with Qiskit" className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface dark:text-dark-text font-bold">Learn</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-text-muted text-sm">
              Master quantum foundations through expert-led sessions designed for all skill levels.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8F9FF] dark:bg-dark-surface-card border border-outline-variant/20 dark:border-dark-border p-8 rounded-xl flex flex-col items-start gap-4 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-lg group">
            <div className="w-14 h-14 bg-white dark:bg-dark-surface rounded-xl p-2 border border-outline-variant/30 dark:border-dark-border shadow-xs flex items-center justify-center mb-1 group-hover:scale-110 transition-transform overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}theme/Picture9.png`} alt="Build with Qiskit" className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface dark:text-dark-text font-bold">Build</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-text-muted text-sm">
              Develop practical quantum circuits and applications using the Qiskit SDK.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8F9FF] dark:bg-dark-surface-card border border-outline-variant/20 dark:border-dark-border p-8 rounded-xl flex flex-col items-start gap-4 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-lg group">
            <div className="w-14 h-14 bg-white dark:bg-dark-surface rounded-xl p-2 border border-outline-variant/30 dark:border-dark-border shadow-xs flex items-center justify-center mb-1 group-hover:scale-110 transition-transform overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}theme/Picture3.png`} alt="Connect with Community" className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface dark:text-dark-text font-bold">Connect</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-text-muted text-sm">
              Network with peers, researchers, and industry professionals in the quantum space.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F8F9FF] dark:bg-dark-surface-card border border-outline-variant/20 dark:border-dark-border p-8 rounded-xl flex flex-col items-start gap-4 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-lg group">
            <div className="w-14 h-14 bg-white dark:bg-dark-surface rounded-xl p-2 border border-outline-variant/30 dark:border-dark-border shadow-xs flex items-center justify-center mb-1 group-hover:scale-110 transition-transform overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}theme/Picture7.png`} alt="Explore Quantum" className="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface dark:text-dark-text font-bold">Explore</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-dark-text-muted text-sm">
              Discover the latest advancements and future trends in quantum technologies.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Experience (6 Cards) */}
      <section className="bg-surface-container-low dark:bg-dark-bg py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-dark-text mb-4 font-bold">What You'll Experience</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-dark-text-muted max-w-2xl mx-auto">
              A comprehensive program designed to accelerate your quantum journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border p-8 rounded-xl">
              <h4 className="font-headline-md text-headline-md text-on-surface dark:text-dark-text mb-2 font-bold">Talks & Sessions</h4>
              <p className="font-body-md text-sm text-on-surface-variant dark:text-dark-text-muted">Insights from quantum researchers and industry leaders.</p>
            </div>
            <div className="bg-surface dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border p-8 rounded-xl">
              <h4 className="font-headline-md text-headline-md text-on-surface dark:text-dark-text mb-2 font-bold">Hands-on Workshops</h4>
              <p className="font-body-md text-sm text-on-surface-variant dark:text-dark-text-muted">Guided tutorials on Qiskit implementation and algorithm design.</p>
            </div>
            <div className="bg-surface dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border p-8 rounded-xl">
              <h4 className="font-headline-md text-headline-md text-on-surface dark:text-dark-text mb-2 font-bold">Quantum Activities</h4>
              <p className="font-body-md text-sm text-on-surface-variant dark:text-dark-text-muted">Interactive demos and conceptual quantum games.</p>
            </div>
            <div className="bg-surface dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border p-8 rounded-xl">
              <h4 className="font-headline-md text-headline-md text-on-surface dark:text-dark-text mb-2 font-bold">Projects & Challenges</h4>
              <p className="font-body-md text-sm text-on-surface-variant dark:text-dark-text-muted">Collaborative problem-solving and mini-hackathons.</p>
            </div>
            <div className="bg-surface dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border p-8 rounded-xl">
              <h4 className="font-headline-md text-headline-md text-on-surface dark:text-dark-text mb-2 font-bold">Community Networking</h4>
              <p className="font-body-md text-sm text-on-surface-variant dark:text-dark-text-muted">Dedicated spaces to meet mentors and potential collaborators.</p>
            </div>
            <div className="bg-surface dark:bg-dark-surface-card border border-outline-variant/30 dark:border-dark-border p-8 rounded-xl">
              <h4 className="font-headline-md text-headline-md text-on-surface dark:text-dark-text mb-2 font-bold">Learning Resources</h4>
              <p className="font-body-md text-sm text-on-surface-variant dark:text-dark-text-muted">Access to exclusive study materials and Qiskit documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-inverse-surface py-section-gap relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg text-surface mb-6">Ready to explore quantum?</h2>
          <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto mb-10">
            Secure your spot at PVPSIT Qiskit Fall Fest 2026 and start building the future today.
          </p>
          <button
            onClick={onOpenRegister}
            className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-5 rounded hover:bg-primary-fixed-variant transition-all duration-200 shadow-pulse-pink text-lg hover:scale-105 active:scale-110"
          >
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
}
