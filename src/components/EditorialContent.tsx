import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, CheckCircle2, Terminal, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, EDUCATION, CODE_SNIPPET } from '../data/portfolioData';

interface EditorialContentProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onOpenCvModal: () => void;
  onOpenResumeModal: () => void;
}

export const EditorialContent: React.FC<EditorialContentProps> = ({
  activeSection,
  onSelectSection,
  onOpenCvModal,
  onOpenResumeModal,
}) => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [isContinuousView, setIsContinuousView] = useState(false);

  const toggleProject = (id: string) => {
    setExpandedProject((prev) => (prev === id ? null : id));
  };

  const stackLayers = [
    {
      layer: '01',
      name: 'Transport & Protocol',
      role: 'the communication layer',
      technologies: ['RESTful APIs', 'HTTP Status Codes', 'JSON Contracts', 'Postman Automated Suites'],
    },
    {
      layer: '02',
      name: 'Runtime & Backend',
      role: 'business logic & controllers',
      technologies: ['C#', '.NET', 'ASP.NET Core Web API', 'Object-Oriented Design', 'Clean Architecture'],
    },
    {
      layer: '03',
      name: 'Data Access & ORM',
      role: 'relational persistence bridge',
      technologies: ['Entity Framework Core', 'LINQ (Language Integrated Query)', 'Code-First Migrations', 'CRUD'],
    },
    {
      layer: '04',
      name: 'Database & Storage',
      role: 'acid compliance & schemas',
      technologies: ['SQL Server', 'DBMS', 'Relational Database Concepts', 'Index Optimization'],
    },
    {
      layer: '05',
      name: 'Tooling & Workflow',
      role: 'developer productivity',
      technologies: ['Visual Studio', 'VS Code', 'Git', 'GitHub', 'CLI'],
    },
  ];

  const sectionsList = [
    { id: 'about', label: '01 — about' },
    { id: 'experience', label: '02 — experience' },
    { id: 'work', label: '03 — selected work' },
    { id: 'stack', label: '04 — stack' },
    { id: 'now', label: '05 — now' },
  ];

  const currentIndex = sectionsList.findIndex((s) => s.id === activeSection);
  const prevSection = currentIndex > 0 ? sectionsList[currentIndex - 1] : null;
  const nextSection = currentIndex < sectionsList.length - 1 ? sectionsList[currentIndex + 1] : null;

  // --- SECTION 01: ABOUT ---
  const renderAbout = () => (
    <section id="about" className="mb-12 sm:mb-16 scroll-mt-20 animate-content-fade">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <p className="section-index m-0">01 — about</p>
        <span className="font-mono text-[11px] text-[var(--dim)]">profile overview</span>
      </div>

      <div className="space-y-4 sm:space-y-5 text-[0.95rem] sm:text-[0.98rem] text-[var(--muted)] leading-relaxed max-w-[68ch]">
        <p className="text-[var(--ink)] font-medium text-base sm:text-lg leading-relaxed">
          I'm Dhanush S, a software developer based in Salem, Tamil Nadu, India, currently in the final year of my Master of Computer Applications (MCA) at K.S.R. College of Engineering.
        </p>

        <p>
          My core focus is backend engineering with C#, ASP.NET Core, and relational database systems with SQL Server. I enjoy building backend applications, designing RESTful APIs, working with relational databases, and strengthening my programming fundamentals through practical engineering projects.
        </p>

        <p>
          I prioritize structured design, good practices, and a systems view over hurried fixes. I focus on translating application requirements into clean RESTful contracts, optimized LINQ queries, and normalized database schemas.
        </p>

        <p className="text-[var(--ink-soft)] font-medium">
          Currently seeking entry-level .NET Developer and Software Engineer opportunities.
        </p>
      </div>

      {/* Snapshot Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-[var(--border)] font-mono text-xs">
        <div className="editorial-card p-3">
          <span className="text-[var(--dim)] block text-[10px] uppercase">Specialty</span>
          <span className="text-[var(--ink)] font-semibold">.NET &amp; C#</span>
        </div>
        <div className="editorial-card p-3">
          <span className="text-[var(--dim)] block text-[10px] uppercase">Degree</span>
          <span className="text-[var(--ink)] font-semibold">MCA (Final Year)</span>
        </div>
        <div className="editorial-card p-3">
          <span className="text-[var(--dim)] block text-[10px] uppercase">Location</span>
          <span className="text-[var(--ink)] font-semibold">Salem, India</span>
        </div>
        <div className="editorial-card p-3">
          <span className="text-[var(--dim)] block text-[10px] uppercase">Status</span>
          <span className="text-[var(--accent)] font-semibold">Open to Work</span>
        </div>
      </div>
    </section>
  );

  // --- SECTION 02: EXPERIENCE ---
  const renderExperience = () => (
    <section id="experience" className="mb-12 sm:mb-16 scroll-mt-20 animate-content-fade">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <p className="section-index m-0">02 — experience</p>
        <span className="font-mono text-[11px] text-[var(--dim)]">professional &amp; academic</span>
      </div>

      <div className="space-y-8 sm:space-y-10">
        {/* Externship Item */}
        {EXPERIENCES.map((exp) => (
          <article key={exp.id} className="relative pl-0 sm:pl-36">
            <span className="sm:absolute sm:left-0 sm:top-1 font-mono text-xs text-[var(--dim)] block mb-1.5 sm:mb-0">
              {exp.period}
            </span>

            <div>
              <h3 className="text-sm sm:text-base font-bold text-[var(--ink)] inline-flex flex-wrap items-center gap-1.5">
                <span>{exp.role}</span>
                <span className="text-[var(--dim)]">·</span>
                <span className="text-[var(--accent)] font-normal">{exp.type}</span>
                <span className="text-[var(--dim)]">@</span>
                <span className="text-[var(--muted)]">{exp.company}</span>
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-[65ch]">
                {exp.description}
              </p>

              <ul className="mt-2.5 space-y-1 text-xs text-[var(--muted)]">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[var(--accent)] mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-3.5 font-mono">
                {exp.skills.map((s) => (
                  <span key={s} className="mono-tag text-[0.7rem]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}

        {/* Education Items */}
        <div className="pt-6 border-t border-[var(--border)] space-y-6 sm:space-y-8">
          <h3 className="font-mono text-xs text-[var(--dim)] uppercase tracking-wider">
            Academic Background
          </h3>

          {EDUCATION.map((edu, idx) => (
            <article key={idx} className="relative pl-0 sm:pl-36">
              <span className="sm:absolute sm:left-0 sm:top-1 font-mono text-xs text-[var(--dim)] block mb-1.5 sm:mb-0">
                {edu.period}
              </span>

              <div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-[var(--ink)]">
                    {edu.degree}
                  </h4>
                  <span className="font-mono text-xs text-[var(--accent)] font-medium">
                    CGPA: {edu.cgpa}
                  </span>
                </div>

                <div className="text-xs text-[var(--muted)] font-mono mt-0.5 mb-2">
                  {edu.institution}
                </div>

                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-[65ch]">
                  {edu.details}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  // --- SECTION 03: SELECTED WORK ---
  const renderWork = () => (
    <section id="work" className="mb-12 sm:mb-16 scroll-mt-20 animate-content-fade">
      <div className="flex items-center justify-between mb-2">
        <p className="section-index m-0">03 — selected work</p>
        <span className="font-mono text-[11px] text-[var(--dim)]">backend engineering</span>
      </div>
      <p className="text-xs sm:text-sm text-[var(--muted)] mb-6 sm:mb-8">
        A selection of backend systems and APIs I designed and built using C# and ASP.NET Core.
      </p>

      <div className="space-y-6 sm:space-y-8">
        {PROJECTS.map((project) => {
          const isExpanded = expandedProject === project.id;

          return (
            <article
              key={project.id}
              className="editorial-card p-5 sm:p-7 relative transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <h3 className="text-base sm:text-lg font-bold text-[var(--ink)]">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-[var(--dim)]">
                  {project.year}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3.5 font-mono">
                {project.technologies.map((tech) => (
                  <span key={tech} className="mono-tag text-[0.7rem]">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-4">
                {project.fullDescription}
              </p>

              {/* Core Highlights */}
              <div className="space-y-1.5 text-xs text-[var(--muted)] mb-5">
                {project.highlights.slice(0, 4).map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Deep Architecture Drawer */}
              {isExpanded && (
                <div className="mt-5 pt-5 border-t border-[var(--border)] space-y-5 animate-content-fade">
                  {/* Endpoints */}
                  {project.endpoints && project.endpoints.length > 0 && (
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--dim)] mb-2.5">
                        Implemented HTTP Endpoints
                      </h4>
                      <div className="space-y-1.5 font-mono text-xs">
                        {project.endpoints.map((ep, i) => (
                          <div
                            key={i}
                            className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 p-2 rounded bg-[var(--bg-soft)] border border-[var(--border)]"
                          >
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 text-center w-14 ${
                                ep.method === 'GET'
                                  ? 'bg-blue-500/20 text-blue-400'
                                  : ep.method === 'POST'
                                  ? 'bg-emerald-500/20 text-emerald-400'
                                  : ep.method === 'PUT'
                                  ? 'bg-amber-500/20 text-amber-400'
                                  : 'bg-rose-500/20 text-rose-400'
                              }`}
                            >
                              {ep.method}
                            </span>
                            <span className="text-[var(--ink)] font-semibold shrink-0">
                              {ep.path}
                            </span>
                            <span className="text-[var(--dim)] sm:ml-auto text-[11px]">
                              {ep.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Architecture & Reliability Notes */}
                  {project.architectureNotes && (
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--dim)] mb-2">
                        System Architecture Decisions
                      </h4>
                      <ul className="space-y-1 text-xs text-[var(--muted)]">
                        {project.architectureNotes.map((note, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[var(--dim)] font-mono">[{i + 1}]</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 mt-2 border-t border-[var(--border)] text-xs font-mono">
                <button
                  onClick={() => toggleProject(project.id)}
                  className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--ink)] transition-colors cursor-pointer"
                >
                  <span>{isExpanded ? 'Collapse technical specs' : 'Inspect architecture & endpoints'}</span>
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--accent)] hover:underline"
                >
                  <span>source code</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );

  // --- SECTION 04: STACK ---
  const renderStack = () => (
    <section id="stack" className="mb-12 sm:mb-16 scroll-mt-20 animate-content-fade">
      <div className="flex items-center justify-between mb-2">
        <p className="section-index m-0">04 — stack</p>
        <span className="font-mono text-[11px] text-[var(--dim)]">architectural layering</span>
      </div>
      <p className="text-xs sm:text-sm text-[var(--muted)] mb-6 sm:mb-8">
        How I structure modern backend architectures — layered from network protocols down to relational storage.
      </p>

      {/* Layered Representation */}
      <div className="space-y-3 mb-10">
        {stackLayers.map((layer) => (
          <div
            key={layer.layer}
            className="editorial-card p-4 sm:p-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-[var(--accent)] font-semibold">
                L{layer.layer}
              </span>
              <div>
                <h4 className="text-sm font-bold text-[var(--ink)]">
                  {layer.name}
                </h4>
                <span className="font-mono text-xs text-[var(--dim)]">
                  {layer.role}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {layer.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-[var(--bg-soft)] border border-[var(--border)] text-[var(--muted)] text-[0.7rem]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* C# Idiomatic Developer Code Box */}
      <div className="editorial-code-box p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3 text-xs font-mono text-[var(--dim)]">
          <span className="text-[var(--accent)]">// DeveloperProfile.cs</span>
          <span>C# 12 · .NET 8/9</span>
        </div>
        <pre className="font-mono text-xs text-[var(--ink)] overflow-x-auto leading-relaxed">
          <code>{CODE_SNIPPET}</code>
        </pre>
      </div>
    </section>
  );

  // --- SECTION 05: NOW ---
  const renderNow = () => (
    <section id="now" className="mb-12 sm:mb-16 scroll-mt-20 animate-content-fade">
      <div className="flex items-center justify-between mb-2">
        <p className="section-index m-0">05 — now</p>
        <span className="font-mono text-[11px] text-[var(--dim)]">current focus &amp; status</span>
      </div>
      <p className="text-xs sm:text-sm text-[var(--muted)] mb-6 sm:mb-8">
        Current status of what I'm operating, building, and exploring.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <article className="editorial-card p-4">
          <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--accent)] block mb-1">
            Building
          </span>
          <div className="text-sm font-bold text-[var(--ink)]">
            CampusConnect Project
          </div>
          <div className="font-mono text-xs text-[var(--dim)] mt-1">
            C# · ASP.NET Core · SQL Server
          </div>
        </article>

        <article className="editorial-card p-4">
          <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--accent)] block mb-1">
            Studying
          </span>
          <div className="text-sm font-bold text-[var(--ink)]">
            MCA · Final Year (8.4 CGPA)
          </div>
          <div className="font-mono text-xs text-[var(--dim)] mt-1">
            K.S.R. College of Engineering
          </div>
        </article>

        <article className="editorial-card p-4">
          <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--accent)] block mb-1">
            Exploring
          </span>
          <div className="text-sm font-bold text-[var(--ink)]">
            .NET MAUI &amp; Microservices
          </div>
          <div className="font-mono text-xs text-[var(--dim)] mt-1">
            Cross-platform and distributed systems
          </div>
        </article>

        <article className="editorial-card p-4">
          <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--accent)] block mb-1">
            Status
          </span>
          <div className="text-sm font-bold text-[var(--ink)]">
            Entry-Level .NET Roles
          </div>
          <div className="font-mono text-xs text-[var(--accent)] mt-1 font-medium">
            Available for full-time opportunities
          </div>
        </article>
      </div>

      {/* Quick Action Prompt */}
      <div className="mt-8 p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="font-bold text-sm text-[var(--ink)]">Interested in collaborating or hiring?</div>
          <div className="text-xs text-[var(--muted)] font-mono mt-0.5">Let's discuss backend engineering roles and projects.</div>
        </div>
        <button
          onClick={onOpenResumeModal}
          className="px-3.5 py-1.5 rounded bg-[var(--accent)] text-black text-xs font-mono font-semibold hover:opacity-90 transition-opacity cursor-pointer shrink-0"
        >
          View Full CV (PDF)
        </button>
      </div>
    </section>
  );

  return (
    <div className="flex-1 py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-12 max-w-4xl">
      {/* Top View Mode Switcher */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[var(--border)] font-mono text-xs">
        <div className="text-[var(--accent)] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span>Section: {sectionsList.find((s) => s.id === activeSection)?.label}</span>
        </div>

        <div className="flex items-center gap-1 bg-[var(--bg-soft)] p-0.5 rounded-lg border border-[var(--border)] text-[11px]">
          <button
            onClick={() => setIsContinuousView(false)}
            className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
              !isContinuousView
                ? 'bg-[var(--bg-card)] text-[var(--ink)] font-semibold shadow-xs'
                : 'text-[var(--dim)] hover:text-[var(--ink)]'
            }`}
          >
            Focused
          </button>
          <button
            onClick={() => setIsContinuousView(true)}
            className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
              isContinuousView
                ? 'bg-[var(--bg-card)] text-[var(--ink)] font-semibold shadow-xs'
                : 'text-[var(--dim)] hover:text-[var(--ink)]'
            }`}
          >
            Show All
          </button>
        </div>
      </div>

      {/* Render Main Content: Either Focused Section (changes onclick) or Continuous Stream */}
      {isContinuousView ? (
        <div className="space-y-12">
          {renderAbout()}
          {renderExperience()}
          {renderWork()}
          {renderStack()}
          {renderNow()}
        </div>
      ) : (
        <div>
          {activeSection === 'about' && renderAbout()}
          {activeSection === 'experience' && renderExperience()}
          {activeSection === 'work' && renderWork()}
          {activeSection === 'stack' && renderStack()}
          {activeSection === 'now' && renderNow()}

          {/* Bottom Inter-Section Navigation */}
          <div className="flex items-center justify-between pt-6 mt-8 border-t border-[var(--border)] font-mono text-xs">
            {prevSection ? (
              <button
                onClick={() => onSelectSection(prevSection.id)}
                className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--accent)] transition-colors cursor-pointer"
              >
                <ArrowLeft size={13} />
                <span>Previous: {prevSection.label}</span>
              </button>
            ) : <div />}

            {nextSection ? (
              <button
                onClick={() => onSelectSection(nextSection.id)}
                className="inline-flex items-center gap-1.5 text-[var(--accent)] hover:underline transition-colors cursor-pointer font-semibold ml-auto"
              >
                <span>Next: {nextSection.label}</span>
                <ArrowRight size={13} />
              </button>
            ) : (
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 text-[var(--accent)] hover:underline transition-colors cursor-pointer font-semibold ml-auto"
              >
                <span>View Full Resume (PDF)</span>
                <ArrowUpRight size={13} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Persistent Footer & Endpoints */}
      <footer id="contact" className="pt-8 sm:pt-10 mt-12 border-t border-[var(--border)] text-[var(--muted)]">
        <div className="pb-6 border-b border-[var(--border)]">
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--dim)] mb-3">
            Endpoints &amp; Contact
          </p>

          <ul className="space-y-2 font-mono text-xs">
            <li className="flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenCvModal}
                className="text-[var(--ink)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
              >
                <Terminal size={13} className="text-[var(--accent)] shrink-0" />
                <span>curl dhanushs.dev/cv.md</span>
              </button>
              <span className="text-[var(--dim)]">→ raw markdown resume</span>
            </li>

            <li className="flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[var(--ink)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5 font-medium"
              >
                <Mail size={13} className="text-[var(--accent)] shrink-0" />
                <span>mailto:{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-[var(--dim)]">→ direct email</span>
            </li>
          </ul>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-baseline justify-between text-xs font-mono text-[var(--dim)] gap-2">
          <span>last updated · 2026 · Salem, Tamil Nadu, India</span>
          <span>Dhanush S · .NET Developer</span>
        </div>
      </footer>
    </div>
  );
};
