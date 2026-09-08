import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import SpeakersPage from './pages/SpeakersPage';
import SchedulePage from './pages/SchedulePage';
import MembersPage from './pages/MembersPage';

export default function App() {
  const [activePage, setActivePage] = useState('landing');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
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

  useEffect(() => {
    if (activePage === 'journey') {
      const el = document.getElementById('journey');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (activePage === 'speakers-section') {
      const el = document.getElementById('speakers');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'landing':
      case 'journey':
      case 'speakers-section':
        return (
          <LandingPage
            setActivePage={setActivePage}
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            setActivePage={setActivePage}
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        );
      case 'speakers':
        return (
          <SpeakersPage
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        );
      case 'schedule':
        return (
          <SchedulePage
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        );
      case 'members':
        return (
          <MembersPage
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        );
      default:
        return (
          <LandingPage
            setActivePage={setActivePage}
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        );
    }
  };

  return (
    <div className="bg-background dark:bg-dark-bg text-on-background dark:text-dark-text font-body-md min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden transition-colors duration-200">
      {/* Top Sticky Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenRegister={() => setIsRegisterOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Page Content View */}
      <main className="flex-1 w-full flex flex-col">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Registration Modal Dialog */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </div>
  );
}
