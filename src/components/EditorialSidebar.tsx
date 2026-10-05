import React from 'react';
import { ArrowUpRight, FileText, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { SecuredAvatar } from './SecuredAvatar';

interface EditorialSidebarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onOpenCvModal: () => void;
  onOpenResumeModal: () => void;
}

export const EditorialSidebar: React.FC<EditorialSidebarProps> = ({
  activeSection,
  onSelectSection,
  onOpenCvModal,
  onOpenResumeModal,
}) => {
  const navItems = [
    { id: 'about', label: '01 — about' },
    { id: 'experience', label: '02 — experience' },
    { id: 'work', label: '03 — selected work' },
    { id: 'stack', label: '04 — stack' },
    { id: 'now', label: '05 — now' },
  ];

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[360px] xl:w-[380px] lg:shrink-0 flex flex-col justify-between py-6 lg:py-8 px-5 sm:px-7 border-b lg:border-b-0 lg:border-r border-[var(--border)] bg-[var(--bg)] transition-colors overflow-y-auto custom-scrollbar">
      {/* Top: Identity & Philosophy */}
      <div>
        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--accent)] tracking-wider uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            .NET Engineer
          </span>
          <ThemeToggle />
        </div>

        {/* Featured Big Borderless Blended Portrait */}
        <div className="mb-3.5 -ml-1">
          <SecuredAvatar size="xl" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--ink)] mb-1">
          {PERSONAL_INFO.name}
        </h1>

        <div className="font-mono text-xs text-[var(--accent)] tracking-wide uppercase mb-3 font-semibold">
          Software Developer · .NET Architecture
        </div>

        <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-[34ch] mb-5 font-normal">
          I design and build backend services with C# and ASP.NET Core — focused on relational integrity, high-throughput Web APIs, and clean software architecture.
        </p>

        {/* Section Navigation for Desktop (Changes right content onclick) */}
        <nav className="hidden lg:block space-y-1 font-mono text-xs mb-6" aria-label="Page navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`w-full text-left block py-1.5 transition-all cursor-pointer rounded px-1.5 -mx-1.5 ${
                  isActive
                    ? 'text-[var(--accent)] font-semibold translate-x-1.5 bg-[var(--accent-soft)]'
                    : 'text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-soft)]'
                }`}
              >
                <span className="mr-2 text-[var(--dim)]">{item.label.split(' — ')[0]}</span>
                <span>—</span>
                <span className="ml-2">{item.label.split(' — ')[1]}</span>
              </button>
            );
          })}
        </nav>

        {/* Mobile Horizontal Quick Nav */}
        <nav className="flex lg:hidden items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar font-mono text-xs" aria-label="Mobile navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`whitespace-nowrap px-3 py-1 rounded-full border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[var(--accent-soft)] border-[var(--accent)] text-[var(--accent)] font-semibold'
                    : 'bg-[var(--bg-soft)] border-[var(--border)] text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                {item.label.split(' — ')[1]}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Location, Status & Links */}
      <div className="pt-4 border-t border-[var(--border)] space-y-3 mt-4">
        {/* Availability Badge */}
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-medium">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <span>Available for full-time roles</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[var(--muted)] font-mono">
          <MapPin size={13} className="text-[var(--dim)] shrink-0" />
          <span>Salem, Tamil Nadu, India</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono pt-1">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
            <ArrowUpRight size={11} className="text-[var(--dim)]" />
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          >
            <LinkedinIcon size={14} />
            <span>LinkedIn</span>
            <ArrowUpRight size={11} className="text-[var(--dim)]" />
          </a>

          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[var(--accent)] transition-colors cursor-pointer"
          >
            <FileText size={14} />
            <span>CV (PDF)</span>
            <ArrowUpRight size={11} className="text-[var(--dim)]" />
          </button>

          <button
            onClick={onOpenCvModal}
            className="text-[11px] text-[var(--dim)] hover:text-[var(--accent)] transition-colors cursor-pointer"
            title="View curl markdown representation"
          >
            curl cv.md
          </button>
        </div>
      </div>
    </aside>
  );
};
