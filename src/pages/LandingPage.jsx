import React, { useState, useEffect } from 'react';
import SpeakersSection from '../components/SpeakersSection';
import InauguralGallery from '../components/InauguralGallery';
import { GlassPanel } from '@/components/ui/glass';

const calculateTimeLeft = () => {
  const targetDate = new Date('2026-10-14T09:00:00');
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    return { days, hours, minutes, seconds };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

export default function LandingPage({ setActivePage, onOpenRegister }) {
  // Live Countdown Calculation to Pinnacle Days Start: October 14, 2026 at 09:00 AM
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <header className="relative pt-12 pb-section-gap px-gutter max-w-container-max mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary-container/20 dark:bg-secondary/15 text-on-secondary-container dark:text-secondary-fixed-dim px-4 py-2 rounded-full border border-secondary-container/30 dark:border-secondary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-caps text-label-caps tracking-wider">IBM Quantum Community Event</span>
            </div>

            {/* Main Title & Tagline */}
            <div className="space-y-4 pt-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold font-headline-xl text-on-surface dark:text-dark-text tracking-tight leading-tight">
                PVPSIT <span className="text-primary">x</span> Qiskit Fall Fest 2026
              </h1>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline-lg text-on-surface-variant dark:text-dark-text-muted leading-snug pt-2">
                Q-CONNECT 2026 —{' '}
                <span className="text-primary relative inline-block">
                  Curiosity to Circuits.
                  <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-primary-fixed-dim" fill="none" viewBox="0 0 200 9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 7C49.5 2 110.5 -1.5 198 7" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
                  </svg>
                </span>
              </h2>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-dark-text-muted max-w-2xl">
              A comprehensive quantum computing learning initiative at Prasad V. Potluri Siddhartha Institute of Technology, Vijayawada. Featuring hands-on workshops, IBM expert sessions, and flagship student competitions.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById('pinnacle-days') || document.getElementById('main-fest');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-xl shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-all duration-200 flex items-center justify-center gap-2 group hover:scale-105 active:scale-110 font-bold"
              >
                Explore Pinnacle Days
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button
                onClick={() => setActivePage('schedule')}
                className="w-full sm:w-auto bg-transparent border border-secondary text-secondary font-label-caps text-label-caps px-8 py-4 rounded-xl hover:bg-secondary/5 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 active:scale-110 font-bold"
              >
                View Event Schedule
              </button>
            </div>
          </div>

          {/* Right Side: Main Fest Countdown Card (Clear GlassPanel with 0 blur and increased dome) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center mt-10 lg:mt-0 w-full">
            <GlassPanel
              blur={0}
              dome={1.6}
              strength={0.5}
              radius={24}
              className="w-full max-w-lg shadow-2xl shadow-black/10 dark:shadow-primary/10 relative overflow-hidden transition-all duration-300"
              contentClassName="p-6 sm:p-8"
            >
              {/* Glow background */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

              {/* Countdown Header */}
              <div className="flex items-center justify-between w-full mb-6 pb-4 border-b border-black/10 dark:border-white/10 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 shadow-xs border border-black/20 dark:border-white/10 p-0.5 bg-black/5 dark:bg-white/5">
                    <img src={`${import.meta.env.BASE_URL}theme/Picture12.png`} alt="Qiskit Fall Fest Seal" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="font-label-caps text-xs font-bold text-primary tracking-widest uppercase block leading-none">
                      PINNACLE DAYS COUNTDOWN
                    </span>
                    <span className="text-[10px] text-on-surface-variant dark:text-dark-text-muted font-label-caps">
                      Q-CONNECT 2026
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-label-caps bg-secondary/15 dark:bg-secondary/25 text-secondary dark:text-secondary-fixed-dim px-3 py-1 rounded-full font-bold border border-secondary/20 dark:border-secondary/35 shadow-xs">
                  Oct 14–16, 2026
                </span>
              </div>

              {/* Countdown Title */}
              <p className="text-sm font-bold text-on-surface dark:text-dark-text mb-6 text-center relative z-10">
                Pinnacle Days Begin In
              </p>

              {/* 4-Tile Countdown Grid (Clean translucent boxes with only one visible thin border line and zero excess lines) */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 w-full mb-6 relative z-10">
                {/* Days */}
                <div
                  className="rounded-2xl border border-black/20 dark:border-white/25 bg-white/40 dark:bg-white/5 shadow-xs p-3 sm:p-4 flex flex-col items-center justify-center transition-colors"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight font-headline-xl">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-label-caps text-on-surface-variant dark:text-dark-text-muted uppercase tracking-wider mt-1 font-bold">
                    Days
                  </span>
                </div>

                {/* Hours */}
                <div
                  className="rounded-2xl border border-black/20 dark:border-white/25 bg-white/40 dark:bg-white/5 shadow-xs p-3 sm:p-4 flex flex-col items-center justify-center transition-colors"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight font-headline-xl">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-label-caps text-on-surface-variant dark:text-dark-text-muted uppercase tracking-wider mt-1 font-bold">
                    Hours
                  </span>
                </div>

                {/* Minutes */}
                <div
                  className="rounded-2xl border border-black/20 dark:border-white/25 bg-white/40 dark:bg-white/5 shadow-xs p-3 sm:p-4 flex flex-col items-center justify-center transition-colors"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight font-headline-xl">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-label-caps text-on-surface-variant dark:text-dark-text-muted uppercase tracking-wider mt-1 font-bold">
                    Mins
                  </span>
                </div>

                {/* Seconds */}
                <div
                  className="rounded-2xl border border-black/20 dark:border-white/25 bg-white/40 dark:bg-white/5 shadow-xs p-3 sm:p-4 flex flex-col items-center justify-center transition-colors"
                >
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight font-headline-xl animate-pulse">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-label-caps text-on-surface-variant dark:text-dark-text-muted uppercase tracking-wider mt-1 font-bold">
                    Secs
                  </span>
                </div>
              </div>

              {/* Action Button inside Card */}
              <button
                onClick={onOpenRegister}
                className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-caps text-sm py-3.5 px-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 border border-black/30 dark:border-white/20 hover:scale-[1.02] active:scale-[0.98] font-bold flex items-center justify-center gap-2 relative z-10 transition-all duration-200"
              >
                <span>Register for Fest (14–16 Oct)</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </GlassPanel>
          </div>
        </div>
      </header>



      {/* Pinnacle Days 3-Day Highlight Section */}
      <section className="py-section-gap px-gutter bg-surface-container-lowest dark:bg-dark-bg relative overflow-hidden" id="pinnacle-days">
        <div id="main-fest" className="absolute -top-20" />
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="bg-primary/10 dark:bg-primary/20 text-primary font-label-caps text-xs px-4 py-1.5 rounded-full font-bold inline-block mb-3">
              THE PINNACLE DAYS
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface dark:text-dark-text font-bold mb-2">
              The Pinnacle Days: 14–16 October 2026
            </h2>
            <p className="font-body-lg text-primary max-w-2xl mx-auto font-semibold">
              Three intensive days. From IBM industry connect and grand inauguration to the ultimate quantum showdown.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Day 1: Quantum Connect */}
            <div className="flex flex-col h-full bg-surface-container dark:bg-dark-surface-card rounded-2xl overflow-hidden border border-outline-variant/20 dark:border-dark-border hover:border-primary/50 transition-all group shadow-sm hover:shadow-md">
              <div className="bg-primary/10 dark:bg-primary/15 p-4 border-b border-outline-variant/20 dark:border-dark-border flex justify-between items-center">
                <span className="font-label-caps text-primary font-bold">DAY 1</span>
                <span className="font-body-md text-xs text-primary font-semibold">14 Oct 2026</span>
              </div>
              <div className="p-8 flex flex-col grow">
                <div className="w-16 h-16 bg-white dark:bg-dark-surface rounded-2xl p-2 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md overflow-hidden">
                  <img src={`${import.meta.env.BASE_URL}theme/Picture3.png`} alt="Quantum Connect Theme" className="w-full h-full object-contain filter drop-shadow-sm" />
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface dark:text-dark-text mb-2">Quantum Connect</h3>
                <p className="font-label-caps text-xs text-secondary dark:text-secondary-fixed-dim font-bold mb-4">IBM Expert Dialogue & Industry Pathways</p>
                <p className="font-body-md text-on-surface-variant dark:text-dark-text-muted text-sm mb-6 grow">
                  Connect directly with industry leaders and IBM Quantum Algorithm Engineers. Gain deep insights into enterprise architectures, cutting-edge software tooling, and interactive student dialogues.
                </p>
              </div>
            </div>

            {/* Day 2: Fest Inaugural & Quantum Vision */}
            <div className="flex flex-col h-full bg-surface-container dark:bg-dark-surface-card rounded-2xl overflow-hidden border-2 border-primary transition-all group shadow-lg relative">
              <div className="bg-primary text-on-primary p-4 border-b border-primary/20 flex justify-between items-center">
                <span className="font-label-caps font-bold">DAY 2</span>
                <span className="font-body-md text-xs font-semibold">15 Oct 2026</span>
              </div>
              <div className="p-8 flex flex-col grow">
                <div className="w-16 h-16 bg-white dark:bg-dark-surface rounded-2xl p-2 border border-secondary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md overflow-hidden">
                  <img src={`${import.meta.env.BASE_URL}theme/Picture8.png`} alt="Fest Inaugural & Quantum Vision Theme" className="w-full h-full object-contain filter drop-shadow-sm" />
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface dark:text-dark-text mb-2">Fest Inaugural & Quantum Vision</h3>
                <p className="font-label-caps text-xs text-secondary dark:text-secondary-fixed-dim font-bold mb-4">Ceremonial Launch & Advanced Architecture</p>
                <p className="font-body-md text-on-surface-variant dark:text-dark-text-muted text-sm mb-6 grow">
                  Celebrate the grand ceremonial inauguration of Qiskit Fall Fest 2026 with academic dignitaries, followed by advanced quantum architecture masterclasses, compiler deep-dives, and visionary keynotes.
                </p>
              </div>
            </div>

            {/* Day 3: Quantum Showdown */}
            <div className="flex flex-col h-full bg-surface-container dark:bg-dark-surface-card rounded-2xl overflow-hidden border border-outline-variant/20 dark:border-dark-border hover:border-primary/50 transition-all group shadow-sm hover:shadow-md">
              <div className="bg-primary/10 dark:bg-primary/15 p-4 border-b border-outline-variant/20 dark:border-dark-border flex justify-between items-center">
                <span className="font-label-caps text-primary font-bold">DAY 3</span>
                <span className="font-body-md text-xs text-primary font-semibold">16 Oct 2026</span>
              </div>
              <div className="p-8 flex flex-col grow">
                <div className="w-16 h-16 bg-white dark:bg-dark-surface rounded-2xl p-2 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md overflow-hidden">
                  <img src={`${import.meta.env.BASE_URL}theme/Picture12.png`} alt="Quantum Showdown Theme" className="w-full h-full object-contain filter drop-shadow-sm" />
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface dark:text-dark-text mb-2">Quantum Showdown</h3>
                <p className="font-label-caps text-xs text-secondary dark:text-secondary-fixed-dim font-bold mb-4">Flagship Competitions & Grand Finale</p>
                <p className="font-body-md text-on-surface-variant dark:text-dark-text-muted text-sm mb-6 grow">
                  The ultimate competitive arena! Battle it out in the flagship Quantum Quiz, research presentations, debate & JAM rounds, circuit relays, and a thrilling campus-wide treasure hunt.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenRegister}
              className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-xl shadow-pulse-pink hover:bg-on-primary-fixed-variant transition-all duration-200 inline-flex items-center justify-center gap-2 hover:scale-105 active:scale-110 font-bold text-base"
            >
              Register for Pinnacle Days (14–16 Oct)
            </button>
          </div>
        </div>
      </section>

      {/* Keynote Speakers Section */}
      <SpeakersSection onOpenRegister={onOpenRegister} />

      {/* Inaugural Ceremony & Official Poster Release (10.09.2026) */}
      <div id="gallery" className="border-t border-outline-variant/20 dark:border-dark-border">
        <InauguralGallery />
      </div>
    </div>
  );
}
