import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-wrapper" aria-label="Professional Experience">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Briefcase size={12} />
            <span>Practical Experience</span>
          </span>
          <h2 className="section-title">Software Engineering Experience</h2>
          <p className="section-subtitle">
            Hands-on exposure to enterprise engineering practices, application architectures, and backend design.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" />

          {EXPERIENCES.map((exp) => (
            <div key={exp.id} style={{ position: 'relative', marginBottom: '2rem' }}>
              <div className="timeline-node">
                <div className="timeline-node-inner" />
              </div>

              <div className="spotlight-card experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                      <Building2 size={16} color="var(--accent-blue)" />
                      <span className="experience-company">{exp.company}</span>
                    </div>
                    <div className="experience-period">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <span className="experience-badge">{exp.type}</span>
                </div>

                <p className="experience-desc">{exp.description}</p>

                <ul className="experience-highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      <CheckCircle2 size={16} className="highlight-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="experience-skills">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="experience-skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
