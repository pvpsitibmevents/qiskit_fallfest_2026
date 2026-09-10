import React from 'react';
import InauguralGallery from '../components/InauguralGallery';

export default function GalleryPage({ onOpenRegister }) {
  return (
    <div className="w-full flex-1">
      {/* Header Banner */}
      <section className="max-w-container-max mx-auto px-gutter pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label-caps text-xs tracking-wider uppercase font-bold">
            EVENT ARCHIVES • 10.09.2026
          </span>
        </div>
        <h1 className="font-headline-xl text-3xl sm:text-5xl md:text-[56px] font-bold text-on-surface dark:text-dark-text mb-6 leading-tight tracking-tight">
          Inaugural Ceremony & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">Poster Release</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-dark-text-muted max-w-3xl mx-auto leading-relaxed">
          Relive the inspiring moments from the official inauguration of <strong>PVPSIT x Qiskit Fall Fest 2026</strong> on <strong>10 September 2026</strong>, 
          featuring the ceremonial release of the official event poster by respected Principal Sir, <strong>Dr. K. Sivaji Babu</strong>, 
          Head of Department <strong>Dr. M. Srilakshmi</strong>, Lead Organizer <strong>Dr. Sreedevi Gogula</strong>, and the organizing team.
        </p>
      </section>

      {/* Decorative Divider */}
      <div className="max-w-container-max mx-auto px-gutter py-2 flex justify-center items-center">
        <div className="w-full max-w-md h-px bg-outline-variant dark:bg-dark-border relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary border border-surface dark:border-dark-bg" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-surface dark:bg-dark-bg border-2 border-primary" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary border border-surface dark:border-dark-bg" />
        </div>
      </div>

      {/* Main Gallery Component */}
      <InauguralGallery showHeader={false} />

      {/* CTA Section */}
      <section className="bg-surface-container-low dark:bg-dark-bg py-16 relative overflow-hidden border-t border-outline-variant/30 dark:border-dark-border">
        <div className="max-w-3xl mx-auto px-gutter text-center relative z-10">
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-on-surface dark:text-dark-text mb-4">
            Join the Quantum Computing Journey
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-dark-text-muted mb-8">
            The poster is officially released, and registrations are open! Be part of the Pre-Fest sessions, keynote lectures, and the 3-Day Main Fest (15–17 Oct 2026).
          </p>
          <button
            onClick={onOpenRegister}
            className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-xl shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-all font-bold text-base hover:scale-105 active:scale-95"
          >
            Register Now for Fest
          </button>
        </div>
      </section>
    </div>
  );
}
