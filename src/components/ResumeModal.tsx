import React, { useEffect } from 'react';
import { X, Printer, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES, PROJECTS, EDUCATION } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] bg-[var(--bg-card)] border border-[var(--border)] rounded-xl shadow-2xl p-5 sm:p-8 overflow-y-auto text-[var(--ink)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-soft)] transition-colors cursor-pointer"
          onClick={onClose}
          aria-label="Close resume view"
        >
          <X size={18} />
        </button>

        {/* Action Header */}
        <div className="flex flex-wrap justify-between items-center gap-3 mb-6 pb-4 border-b border-[var(--border)]">
          <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider font-semibold">
            Official Resume · Verified Factual Profile
          </span>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded bg-[var(--accent)] text-black font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
            title="Print or Save PDF"
          >
            <Printer size={13} />
            <span>Print / Save PDF</span>
          </button>
        </div>

        {/* Screen Resume Document Structure */}
        <div className="space-y-6 text-xs sm:text-sm">
          {/* Header */}
          <div>
            <h1 id="resume-title" className="text-2xl sm:text-3xl font-extrabold text-[var(--ink)] tracking-tight mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <div className="font-mono text-xs sm:text-sm font-semibold text-[var(--accent)] mb-3">
              {PERSONAL_INFO.role}
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-1">
                <MapPin size={13} />
                {PERSONAL_INFO.location}
              </span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
                <Mail size={13} />
                {PERSONAL_INFO.email}
              </a>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
                <LinkedinIcon size={13} />
                linkedin.com/in/dhanush-s1006
              </a>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[var(--accent)] transition-colors">
                <GithubIcon size={13} />
                github.com/selvarajdhanush108-ai
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="font-mono text-xs font-semibold text-[var(--accent)] uppercase tracking-wider pb-1 mb-2 border-b border-[var(--border)]">
              Professional Summary
            </h2>
            <p className="text-[var(--muted)] leading-relaxed">
              {PERSONAL_INFO.resumeSummary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-mono text-xs font-semibold text-[var(--accent)] uppercase tracking-wider pb-1 mb-2 border-b border-[var(--border)]">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
                  <span className="font-bold text-[var(--ink)] sm:w-44 shrink-0">
                    {cat.title}:
                  </span>
                  <span className="text-[var(--muted)]">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-mono text-xs font-semibold text-[var(--accent)] uppercase tracking-wider pb-1 mb-2 border-b border-[var(--border)]">
              Experience
            </h2>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <span className="font-bold text-[var(--ink)]">
                    {exp.role} <span className="font-normal text-[var(--dim)]">({exp.type})</span>
                  </span>
                  <span className="font-mono text-xs text-[var(--dim)]">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs font-semibold text-[var(--accent)] mb-1">
                  {exp.company}
                </div>
                <p className="text-xs text-[var(--muted)] mb-2">
                  {exp.description}
                </p>
                <ul className="list-disc pl-4 space-y-1 text-xs text-[var(--muted)]">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="font-mono text-xs font-semibold text-[var(--accent)] uppercase tracking-wider pb-1 mb-2 border-b border-[var(--border)]">
              Technical Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="pb-3 border-b border-[var(--border)]/40 last:border-0 last:pb-0">
                  <div className="flex flex-wrap justify-between items-baseline gap-1">
                    <span className="font-bold text-[var(--ink)]">
                      {proj.title}
                    </span>
                    <span className="font-mono text-xs text-[var(--dim)]">
                      {proj.year}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[var(--accent)] mt-0.5 mb-1.5">
                    {proj.technologies.join(' · ')}
                  </div>
                  <p className="text-xs text-[var(--muted)] mb-2 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-[var(--muted)]">
                    {proj.highlights.slice(0, 4).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono text-xs font-semibold text-[var(--accent)] uppercase tracking-wider pb-1 mb-2 border-b border-[var(--border)]">
              Education
            </h2>
            <div className="space-y-2.5">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="flex flex-wrap justify-between items-baseline gap-1 text-xs">
                  <div>
                    <span className="font-bold text-[var(--ink)]">{edu.degree}</span>
                    <span className="text-[var(--muted)]"> — {edu.institution}</span>
                  </div>
                  <div className="font-mono text-xs text-[var(--dim)]">
                    <span className="font-semibold text-[var(--accent)]">CGPA: {edu.cgpa}</span> · {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
