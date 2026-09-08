import React from 'react';
import SpeakersSection from '../components/SpeakersSection';

export default function SpeakersPage({ onOpenRegister }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header Banner */}
      <section className="pt-16 pb-12 px-gutter max-w-container-max mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 px-4 py-1.5 rounded-full shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label-caps text-xs tracking-widest uppercase font-bold">
            DISTINGUISHED GUEST SPEAKERS
          </span>
        </div>

        <h1 className="font-headline-xl text-3xl sm:text-5xl md:text-6xl font-bold text-on-surface dark:text-dark-text tracking-tight mb-6">
          Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">Quantum Experts</span>
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-dark-text-muted max-w-3xl mx-auto mb-8">
          Engage with research scientists, quantum software developers, and industry pioneers from IBM Quantum, BQP, and IQ Leap who are shaping the future of computation.
        </p>
      </section>

      {/* Main Speakers Component */}
      <div className="flex-1">
        <SpeakersSection onOpenRegister={onOpenRegister} showHeader={false} />
      </div>

      {/* Interactive Highlights Callout */}
      <section className="py-16 px-gutter bg-surface-container-low dark:bg-dark-surface border-y border-outline-variant/20 dark:border-dark-border mt-12">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-white dark:bg-dark-surface-card border border-outline-variant/20 dark:border-dark-border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-2xl">campaign</span>
            </div>
            <h3 className="font-headline-md text-lg font-bold text-on-surface dark:text-dark-text mb-2">Keynote Talks</h3>
            <p className="font-body-md text-xs text-on-surface-variant dark:text-dark-text-muted">
              Deep dives into quantum utility, real-world industrial optimization, and cutting-edge hardware architectures.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-dark-surface-card border border-outline-variant/20 dark:border-dark-border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-2xl">terminal</span>
            </div>
            <h3 className="font-headline-md text-lg font-bold text-on-surface dark:text-dark-text mb-2">Interactive Workshops</h3>
            <p className="font-body-md text-xs text-on-surface-variant dark:text-dark-text-muted">
              Hands-on coding with Qiskit SDK, circuit debugging, and transpilation guided directly by IBM engineers.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-dark-surface-card border border-outline-variant/20 dark:border-dark-border shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-2xl">groups</span>
            </div>
            <h3 className="font-headline-md text-lg font-bold text-on-surface dark:text-dark-text mb-2">Direct Mentorship</h3>
            <p className="font-body-md text-xs text-on-surface-variant dark:text-dark-text-muted">
              Opportunity for students, faculty, and scholars to connect directly with researchers on research and career roadmaps.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
