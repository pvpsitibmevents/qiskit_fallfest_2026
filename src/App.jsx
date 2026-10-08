import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import SpeakersPage from './pages/SpeakersPage';
import SchedulePage from './pages/SchedulePage';
import MembersPage from './pages/MembersPage';
import GalleryPage from './pages/GalleryPage';
import RegistrationPage from './pages/RegistrationPage';
import QuantumBirdsBackground from './components/QuantumBirdsBackground';

export default function App() {
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['about', 'speakers', 'schedule', 'members', 'gallery', 'register'].includes(hash)) {
        return hash;
      }
    }
    return 'landing';
  });
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlTheme = params.get('theme');
      if (urlTheme === 'light' || urlTheme === 'dark') return urlTheme;
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Keep hash synchronized with active page for bookmarking & browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['about', 'speakers', 'schedule', 'members', 'gallery', 'register'].includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('landing');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (activePage === 'speakers-section') {
      const el = document.getElementById('speakers');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (activePage === 'gallery-section') {
      const el = document.getElementById('gallery');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (['about', 'speakers', 'schedule', 'members', 'gallery', 'register'].includes(activePage)) {
        if (window.location.hash !== `#${activePage}`) {
          window.history.pushState(null, '', `#${activePage}`);
        }
      } else if (activePage === 'landing') {
        if (window.location.hash) {
          window.history.pushState(null, '', window.location.pathname);
        }
      }
    }
  }, [activePage]);

  // Direct all registration actions to the dedicated Registration Page
  const handleOpenRegister = () => {
    setActivePage('register');
  };

  const [targetSpeakerId, setTargetSpeakerId] = useState(null);

  const handleNavigateToSpeaker = (speakerId) => {
    setTargetSpeakerId(speakerId);
    setActivePage('speakers');
    if (window.location.hash !== '#speakers') {
      window.history.pushState(null, '', '#speakers');
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case 'landing':
      case 'speakers-section':
      case 'gallery-section':
        return (
          <LandingPage
            setActivePage={setActivePage}
            onOpenRegister={handleOpenRegister}
          />
        );
      case 'about':
        return (
          <AboutPage
            setActivePage={setActivePage}
            onOpenRegister={handleOpenRegister}
          />
        );
      case 'speakers':
        return (
          <SpeakersPage
            onOpenRegister={handleOpenRegister}
            initialSpeakerId={targetSpeakerId}
          />
        );
      case 'schedule':
        return (
          <SchedulePage
            onOpenRegister={handleOpenRegister}
            onNavigateToSpeaker={handleNavigateToSpeaker}
            setActivePage={setActivePage}
          />
        );
      case 'members':
        return (
          <MembersPage
            onOpenRegister={handleOpenRegister}
          />
        );
      case 'gallery':
        return (
          <GalleryPage
            onOpenRegister={handleOpenRegister}
          />
        );
      case 'register':
        return (
          <RegistrationPage
            setActivePage={setActivePage}
          />
        );
      default:
        return (
          <LandingPage
            setActivePage={setActivePage}
            onOpenRegister={handleOpenRegister}
          />
        );
    }
  };

  return (
    <div className="bg-background dark:bg-dark-bg text-on-background dark:text-dark-text font-body-md min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden transition-colors duration-200 relative">
      {/* Background Flying Quantum Birds (Hidden on Speakers Page as requested) */}
      {activePage !== 'speakers' && <QuantumBirdsBackground />}

      {/* Top Sticky Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenRegister={handleOpenRegister}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Content View */}
      <main className="flex-1 w-full flex flex-col relative z-10">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenRegister={handleOpenRegister}
      />

      {/* Registration Modal Dialog (Fallback) */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </div>
  );
}
