import React, { useState } from 'react';

export default function Navbar({ activePage, setActivePage, onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'landing', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'members', label: 'Members' },
  ];

  return (
    <>
      <nav className="bg-surface/80 dark:bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/30 sticky top-0 w-full z-50 transition-all duration-300">
        <div className="flex justify-between items-center w-full px-gutter py-3 max-w-container-max mx-auto">
          {/* Logo & Brand */}
          <button 
            onClick={() => setActivePage('landing')} 
            className="flex items-center gap-3 text-left focus:outline-none group transition-transform duration-200 hover:scale-105 active:scale-108"
          >
            <div className="h-14 w-auto min-w-[44px] rounded-lg overflow-hidden bg-white p-1 border border-primary/20 shadow-sm transition-transform flex items-center justify-center">
              <img src={`${import.meta.env.BASE_URL}pvpsit-logo.png`} alt="PVPSIT Logo" className="h-full w-auto object-contain max-h-12" />
            </div>
            <span className="font-headline-md text-headline-md font-bold text-on-surface">
              PVPSIT Qiskit Fall Fest '26
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 font-label-caps text-label-caps">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`relative py-1 transition-all duration-200 inline-block hover:scale-110 active:scale-115 ${
                  activePage === link.id
                    ? 'text-primary border-b-2 border-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenRegister}
              className="hidden md:inline-flex bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 rounded-md hover:bg-on-primary-fixed-variant transition-all duration-200 shadow-pulse-pink hover:scale-105 active:scale-110"
            >
              Register Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-on-surface p-2 focus:outline-none transition-transform duration-200 hover:scale-110 active:scale-120"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-72 bg-surface dark:bg-surface-container-high z-50 border-r border-outline-variant/30 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col py-6 px-6 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-outline-variant/20">
          <div className="flex items-center gap-3">
            <div className="h-12 w-auto rounded-lg overflow-hidden bg-white p-0.5 border border-primary/20 flex items-center justify-center">
              <img src={`${import.meta.env.BASE_URL}pvpsit-logo.png`} alt="PVPSIT Logo" className="h-full w-auto object-contain" />
            </div>
            <div>
              <span className="font-headline-md text-headline-md text-primary font-bold">PVPSIT Qiskit</span>
              <p className="font-body-md text-sm text-on-surface-variant">Fall Fest 2026</p>
            </div>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface-variant hover:text-primary transition-transform duration-200 hover:scale-110 active:scale-120"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          {navLinks.map((link) => {
            const icons = {
              landing: 'home',
              about: 'info',
              schedule: 'calendar_today',
              members: 'groups',
            };
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-4 px-4 py-3 rounded-full font-body-md text-base transition-all duration-200 hover:scale-105 active:scale-110 ${
                  activePage === link.id
                    ? 'bg-primary/10 text-primary font-bold'
                    : 'text-on-surface-variant hover:bg-surface-variant'
                }`}
              >
                <span className="material-symbols-outlined">{icons[link.id]}</span>
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-outline-variant/20 mt-auto">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister();
            }}
            className="w-full bg-primary text-on-primary font-label-caps text-label-caps py-3 rounded-md shadow-pulse-pink transition-transform duration-200 hover:scale-105 active:scale-110"
          >
            Register Now
          </button>
        </div>
      </div>
    </>
  );
}
