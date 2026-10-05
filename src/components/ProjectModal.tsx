import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, ShieldCheck, Layers, GitBranch, Terminal } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span className="project-year">{project.year}</span>
            <span className="project-badge">Backend Case Study</span>
          </div>
          <h2 id="modal-title" style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            {project.title}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {project.fullDescription}
          </p>
        </div>

        {/* Technologies */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 className="modal-section-title">
            <Layers size={16} color="var(--accent-blue)" />
            <span>Technologies &amp; Libraries</span>
          </h3>
          <div className="project-tech-stack" style={{ marginBottom: 0 }}>
            {project.technologies.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Endpoints Table if available */}
        {project.endpoints && project.endpoints.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 className="modal-section-title">
              <Terminal size={16} color="var(--accent-indigo)" />
              <span>Core RESTful API Endpoints</span>
            </h3>
            <table className="modal-endpoints-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Route Endpoint</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {project.endpoints.map((ep, i) => (
                  <tr key={i}>
                    <td>
                      <span className={`http-method http-${ep.method.toLowerCase()}`}>
                        {ep.method}
                      </span>
                    </td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {ep.path}
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>{ep.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Key Technical Highlights */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 className="modal-section-title">
            <CheckCircle2 size={16} color="var(--accent-emerald)" />
            <span>Key Engineering Highlights</span>
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {project.highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={15} color="var(--accent-emerald)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architectural Principles */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 className="modal-section-title">
            <GitBranch size={16} color="var(--accent-violet)" />
            <span>System Design &amp; Architecture</span>
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {project.architectureNotes.map((note, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent-violet)', fontWeight: 'bold' }}>•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testing & Verification */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 className="modal-section-title">
            <ShieldCheck size={16} color="var(--accent-blue)" />
            <span>Verification &amp; Postman Testing</span>
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {project.testingNotes.map((note, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent-blue)', fontWeight: 'bold' }}>✓</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
          <button onClick={onClose} className="magnetic-btn magnetic-btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
            Close Case Study
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn magnetic-btn-primary"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
            >
              <span>GitHub Repository</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
