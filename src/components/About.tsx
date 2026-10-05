import React from 'react';
import { Database, Server, Code2, Layers, CheckCircle2, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SecuredAvatar } from './SecuredAvatar';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-wrapper" aria-label="About Dhanush S">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <User size={12} />
            <span>Profile &amp; Focus</span>
          </span>
          <h2 className="section-title">Engineering Reliable Backend Systems</h2>
          <p className="section-subtitle">
            Focused on principled C# engineering, structured API design, and high-integrity relational data models.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative & Focus Cards */}
          <div className="about-narrative">
            <p className="about-text-lead">{PERSONAL_INFO.aboutDetailed}</p>

            <p className="about-text-body">
              {PERSONAL_INFO.statusText} Through rigorous academic study in my Master of Computer Applications program and hands-on application development, I have concentrated on translating system requirements into testable, maintainable, and secure backend architectures.
            </p>

            {/* Core Competencies Grid */}
            <div className="about-focus-points">
              <div className="focus-point-card">
                <div className="focus-icon">
                  <Server size={18} />
                </div>
                <h3 className="focus-title">ASP.NET Core Web APIs</h3>
                <p className="focus-desc">
                  Designing RESTful endpoints with status contracts, dependency injection, and middleware error pipelines.
                </p>
              </div>

              <div className="focus-point-card">
                <div className="focus-icon">
                  <Database size={18} />
                </div>
                <h3 className="focus-title">Relational Data &amp; EF Core</h3>
                <p className="focus-desc">
                  Entity Framework Core migrations, LINQ query generation, and normalized SQL Server database schemas.
                </p>
              </div>

              <div className="focus-point-card">
                <div className="focus-icon">
                  <Code2 size={18} />
                </div>
                <h3 className="focus-title">C# &amp; OOP Fundamentals</h3>
                <p className="focus-desc">
                  Strong grasp of object-oriented design, SOLID principles, encapsulation, and type-safe architecture.
                </p>
              </div>

              <div className="focus-point-card">
                <div className="focus-icon">
                  <Layers size={18} />
                </div>
                <h3 className="focus-title">Application Testing &amp; Tools</h3>
                <p className="focus-desc">
                  Rigorous endpoint verification with Postman, version control with Git/GitHub, and Visual Studio workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Identity Card */}
          <div className="about-card-col">
            <div className="technical-id-card">
              <div className="id-card-header">
                <SecuredAvatar size="sm" />
                <div className="id-card-meta">
                  <span className="id-card-name">{PERSONAL_INFO.name}</span>
                  <span className="id-card-title">.NET Developer | Software Engineer</span>
                </div>
              </div>

              <div className="id-card-fields">
                <div className="id-field">
                  <span className="id-field-label">Specialization</span>
                  <span className="id-field-value">Backend &amp; Web APIs</span>
                </div>

                <div className="id-field">
                  <span className="id-field-label">Primary Stack</span>
                  <span className="id-field-value">C# · ASP.NET Core · SQL Server</span>
                </div>

                <div className="id-field">
                  <span className="id-field-label">Data Access</span>
                  <span className="id-field-value">EF Core · LINQ</span>
                </div>

                <div className="id-field">
                  <span className="id-field-label">Education</span>
                  <span className="id-field-value">MCA (Final Year, 8.4 CGPA)</span>
                </div>

                <div className="id-field">
                  <span className="id-field-label">Location</span>
                  <span className="id-field-value">Salem, Tamil Nadu, India</span>
                </div>
              </div>

              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.725rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  Core Technical Badges
                </span>
                <div className="id-card-chips">
                  <span className="id-chip">C#</span>
                  <span className="id-chip">ASP.NET CORE</span>
                  <span className="id-chip">EF CORE</span>
                  <span className="id-chip">LINQ</span>
                  <span className="id-chip">SQL SERVER</span>
                  <span className="id-chip">POSTMAN</span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  fontSize: '0.785rem',
                  color: 'var(--accent-emerald)',
                }}
              >
                <CheckCircle2 size={15} />
                <span>Ready for full-time &amp; entry-level developer roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
