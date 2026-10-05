import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SecuredAvatar } from './SecuredAvatar';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Architecture & Stack', href: '#about', id: 'about' },
    { label: 'Systems & Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all">
      <nav
        className={`w-full max-w-4xl flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full glass-nav transition-all duration-300 ${
          isScrolled ? 'shadow-2xl border-white/[0.15] bg-black/80' : 'bg-black/40'
        }`}
        aria-label="Primary Navigation"
      >
        {/* Brand Monogram */}
        <a href="#hero" className="flex items-center gap-3 group">
          <SecuredAvatar size="sm" className="group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="font-bold text-sm text-white leading-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider">
              .NET Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-white/10 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-slate-300 border border-white/10 transition-colors"
            title="View Developer Resume"
          >
            <FileText size={13} className="text-sky-400" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-600 text-white text-xs font-semibold shadow-sm hover:opacity-95 transition-opacity"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={12} />
          </a>

          <ThemeToggle />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-slate-900/95 border border-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-2xl flex flex-col gap-3 z-50">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between"
            >
              <span>{item.label}</span>
              <ArrowUpRight size={14} className="text-slate-500" />
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenResume();
            }}
            className="text-sm font-medium text-sky-400 p-2 text-left rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between border-t border-white/10 pt-3"
          >
            <span className="flex items-center gap-2">
              <FileText size={14} />
              View Resume
            </span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      )}
    </header>
  );
};
