import React, { useState } from 'react';

export default function Navbar({ activePage, setActivePage, onOpenRegister, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'landing', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'members', label: 'Members' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <>
      <nav className="bg-surface/85 dark:bg-dark-bg/85 backdrop-blur-xl border-b border-outline-variant/30 dark:border-dark-border sticky top-0 w-full z-50 transition-all duration-300">
        <div className="flex justify-between items-center w-full px-gutter py-3 max-w-container-max mx-auto">
          {/* Logo & Brand */}
          <button 
            onClick={() => setActivePage('landing')} 
            className="flex items-center gap-3 text-left focus:outline-none group transition-transform duration-200 hover:scale-105 active:scale-108"
          >
            <div className="h-14 w-auto min-w-[44px] rounded-lg overflow-hidden bg-white p-1 border border-primary/20 shadow-sm transition-transform flex items-center justify-center">
              <img src={`${import.meta.env.BASE_URL}pvpsit-logo.png`} alt="PVPSIT Logo" className="h-full w-auto object-contain max-h-12" />
            </div>
            <span className="font-headline-md text-headline-md font-bold text-on-surface dark:text-dark-text transition-colors">
              PVPSIT Qiskit Fall Fest '26
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-7 font-label-caps text-label-caps">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setActivePage(link.id)}
                className={`relative py-1 transition-all duration-200 inline-block hover:scale-105 active:scale-110 ${
                  activePage === link.id ||
                  (link.id === 'landing' && (activePage === 'journey' || activePage === 'speakers-section')) ||
                  (link.id === 'gallery' && activePage === 'gallery-section')
                    ? 'text-primary border-b-2 border-primary font-bold'
                    : 'text-on-surface-variant dark:text-dark-text-muted hover:text-primary dark:hover:text-primary-container'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Action Buttons & Theme Switcher */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-on-surface dark:text-dark-text hover:bg-surface-variant dark:hover:bg-dark-surface-elevated transition-all duration-200 flex items-center justify-center border border-outline-variant/30 dark:border-dark-border hover:border-primary/40 hover:scale-110 active:scale-95"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <span className="material-symbols-outlined text-xl text-primary dark:text-amber-300">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* CTA Button */}
            <button
              onClick={onOpenRegister}
              className="bg-primary text-on-primary font-label-caps text-label-caps px-5 py-2.5 rounded hover:bg-on-primary-fixed-variant transition-all duration-200 shadow-pulse-pink hidden sm:inline-block hover:scale-105 active:scale-110 font-bold"
            >
              Register Now
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-on-surface dark:text-dark-text p-2 rounded-lg hover:bg-surface-variant dark:hover:bg-dark-surface-elevated transition-transform duration-200 hover:scale-105"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-on-surface/50 dark:bg-black/60 z-40 md:hidden backdrop-blur-sm animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-surface dark:bg-dark-surface-card z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out border-l border-outline-variant/30 dark:border-dark-border ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-outline-variant/20 dark:border-dark-border">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-headline-md text-sm font-bold text-on-surface dark:text-dark-text">Navigation</span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface-variant dark:text-dark-text-muted hover:text-primary transition-transform duration-200 hover:scale-110"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          {navLinks.map((link) => {
            const icons = {
              landing: 'home',
              about: 'info',
              speakers: 'record_voice_over',
              schedule: 'calendar_today',
              members: 'groups',
              gallery: 'photo_library',
            };
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActivePage(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-4 px-4 py-3 rounded-full font-body-md text-base transition-all duration-200 hover:scale-105 active:scale-110 ${
                  activePage === link.id ||
                  (link.id === 'landing' && (activePage === 'journey' || activePage === 'speakers-section')) ||
                  (link.id === 'gallery' && activePage === 'gallery-section')
                    ? 'bg-primary/10 text-primary font-bold dark:bg-primary/20'
                    : 'text-on-surface-variant dark:text-dark-text-muted hover:bg-surface-variant dark:hover:bg-dark-surface-elevated'
                }`}
              >
                <span className="material-symbols-outlined">{icons[link.id]}</span>
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-outline-variant/20 dark:border-dark-border mt-auto flex flex-col gap-3">
          <button
            onClick={() => {
              toggleTheme();
            }}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-outline-variant/30 dark:border-dark-border text-on-surface dark:text-dark-text text-sm font-label-caps"
          >
            <span className="material-symbols-outlined text-primary dark:text-amber-300">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
            <span>{theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
          </button>

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
