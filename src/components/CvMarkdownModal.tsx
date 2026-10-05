import React, { useEffect, useState } from 'react';
import { X, Copy, Check, Terminal } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, EDUCATION } from '../data/portfolioData';

interface CvMarkdownModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvMarkdownModal: React.FC<CvMarkdownModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

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

  const markdownContent = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.role} · ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.githubUrl}
LinkedIn: ${PERSONAL_INFO.linkedinUrl}

---

## About
${PERSONAL_INFO.aboutDetailed}
${PERSONAL_INFO.statusText}

---

## Experience
${EXPERIENCES.map(
  (e) => `### ${e.role} (${e.type}) — ${e.company}
${e.period}
${e.description}
Highlights:
${e.highlights.map((h) => `- ${h}`).join('\n')}
Skills: ${e.skills.join(', ')}`
).join('\n\n')}

---

## Selected Work
${PROJECTS.map(
  (p) => `### ${p.title} (${p.year})
${p.shortDescription}
Stack: ${p.technologies.join(', ')}
${p.highlights.map((h) => `- ${h}`).join('\n')}`
).join('\n\n')}

---

## Education
${EDUCATION.map((edu) => `- ${edu.degree} | ${edu.institution} (${edu.period}) — CGPA: ${edu.cgpa}`).join('\n')}

---

## Technical Stack
- Languages: C#, Java, SQL
- Core Frameworks: .NET, ASP.NET Core Web API, .NET MAUI, Entity Framework Core, LINQ
- Architecture: RESTful APIs, CRUD, Object-Oriented Programming (OOP)
- Databases: SQL Server, Relational Modeling, DBMS
- Tools: Git, GitHub, Visual Studio, VS Code, Postman
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-3xl max-h-[85vh] bg-[var(--bg-card)] border border-[var(--border)] rounded-xl flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-soft)] border-b border-[var(--border)]">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
            <Terminal size={14} className="text-[var(--accent)]" />
            <span className="text-[var(--ink)]">curl dhanushs.dev/cv.md</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded bg-[var(--bg-card)] border border-[var(--border)] text-[var(--ink)] hover:border-[var(--accent)] transition-colors cursor-pointer"
            >
              {copied ? <Check size={12} className="text-[var(--accent)]" /> : <Copy size={12} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Content */}
        <pre className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-[var(--ink)] overflow-y-auto leading-relaxed whitespace-pre-wrap select-text">
          {markdownContent}
        </pre>
      </div>
    </div>
  );
};
