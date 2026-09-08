import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import SchedulePage from './pages/SchedulePage';
import MembersPage from './pages/MembersPage';

export default function App() {
  const [activePage, setActivePage] = useState('landing');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    if (activePage === 'journey') {
      const el = document.getElementById('journey');
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
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      {/* Top Sticky Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenRegister={() => setIsRegisterOpen(true)}
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
