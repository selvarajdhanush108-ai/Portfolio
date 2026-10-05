import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="education" className="section-wrapper" aria-label="Education Background">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <GraduationCap size={12} />
            <span>Academic Qualifications</span>
          </span>
          <h2 className="section-title">Computer Science Education</h2>
          <p className="section-subtitle">
            Solid foundations in computer application fundamentals, advanced system architectures, and software engineering.
          </p>
        </div>

        <div className="education-grid">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="spotlight-card education-card"
              onMouseMove={handleMouseMove}
            >
              <div>
                <span className="education-period-badge">
                  <Calendar size={12} style={{ display: 'inline', marginRight: '0.35rem' }} />
                  {edu.period}
                </span>

                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>

                <div className="education-cgpa">
                  <Award size={15} />
                  <span>CGPA: {edu.cgpa}</span>
                </div>

                <p className="education-details">{edu.details}</p>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <BookOpen size={13} color="var(--accent-blue)" />
                <span>Verified Academic Credentials</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
