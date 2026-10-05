import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { EditorialSidebar } from './components/EditorialSidebar';
import { EditorialContent } from './components/EditorialContent';
import { CvMarkdownModal } from './components/CvMarkdownModal';
import { ResumeModal } from './components/ResumeModal';
import { PrintResumeDocument } from './components/PrintResumeDocument';

export const App: React.FC = () => {
  const getInitialSection = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      const valid = ['about', 'experience', 'work', 'stack', 'now'];
      if (valid.includes(hash)) return hash;
    }
    return 'about';
  };

  const [activeSection, setActiveSection] = useState(getInitialSection);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [printRootEl, setPrintRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPrintRootEl(document.getElementById('print-root'));
  }, []);

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `#${sectionId}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Support browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      const valid = ['about', 'experience', 'work', 'stack', 'now'];
      if (valid.includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--accent-soft)] selection:text-[var(--accent)] transition-colors">
      {/* Top subtle reading line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent z-50 pointer-events-none" />

      {/* Main Two-Column Editorial Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Sticky Left Sidebar (Fully Scrollable, Changes Content On Click) */}
        <EditorialSidebar
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* Dynamic Right Content Panel */}
        <EditorialContent
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
      </div>

      {/* curl dhanushs.dev/cv.md Terminal Modal */}
      <CvMarkdownModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

      {/* Printable PDF Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Dedicated Print Portal rendered into document.getElementById('print-root') */}
      {printRootEl && createPortal(<PrintResumeDocument />, printRootEl)}
    </div>
  );
};

export default App;
