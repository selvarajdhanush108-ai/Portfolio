import React from 'react';
import { Server, Cpu, GraduationCap, Briefcase, CheckCircle2, Sparkles } from 'lucide-react';
import { EDUCATION, EXPERIENCES } from '../data/portfolioData';

export const BentoGrid: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const coreSkills = [
    { name: 'C#', category: 'Language', desc: 'Type-safe object-oriented programming' },
    { name: 'ASP.NET Core', category: 'Framework', desc: 'High-throughput Web API endpoints' },
    { name: 'Entity Framework Core', category: 'ORM', desc: 'Code-first schema mappings & migrations' },
    { name: 'LINQ', category: 'Query Engine', desc: 'Declarative type-safe dataset queries' },
    { name: 'SQL Server', category: 'Database', desc: 'Relational design, indexing, and ACID' },
    { name: 'RESTful APIs', category: 'Architecture', desc: 'HTTP standards & JSON contracts' },
    { name: 'Postman', category: 'Testing', desc: 'Automated request suites & validations' },
    { name: 'Git & GitHub', category: 'DevOps', desc: 'Version control and collaboration' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={12} />
            <span>Architecture &amp; Credentials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-heading mb-4">
            Engineered for High Reliability
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            High-signal overview of my technical stack, practical externship experience, and academic foundation.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Bento 1: Core Technology Matrix (Span 8) */}
          <div
            className="md:col-span-8 bento-card p-6 md:p-8 flex flex-col justify-between"
            onMouseMove={handleMouseMove}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center">
                    <Cpu size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Backend Technology Stack</h3>
                    <p className="text-xs text-slate-400 font-mono">Specialized in C# and the .NET Ecosystem</p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Core Competencies
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Proficient in translating business requirements into scalable server-side systems, designing robust database relationships, and writing clean, testable C# code following SOLID design patterns.
              </p>

              {/* Skills Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {coreSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/40 hover:bg-white/[0.06] transition-all group"
                  >
                    <div className="text-xs font-mono text-sky-400/90 mb-1">{skill.category}</div>
                    <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Pipeline Preview */}
            <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono flex-wrap gap-2">
              <span className="text-indigo-400">Data Flow:</span>
              <span className="text-slate-300">Client HTTP</span>
              <span>→</span>
              <span className="text-slate-300">ASP.NET Controller</span>
              <span>→</span>
              <span className="text-slate-300">EF Core Context</span>
              <span>→</span>
              <span className="text-emerald-400">SQL Server</span>
            </div>
          </div>

          {/* Bento 2: Academic Qualifications (Span 4) */}
          <div
            className="md:col-span-4 bento-card p-6 md:p-8 flex flex-col justify-between"
            onMouseMove={handleMouseMove}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Education</h3>
                  <p className="text-xs text-slate-400 font-mono">Computer Science Credentials</p>
                </div>
              </div>

              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white leading-snug">{edu.degree}</div>
                    <div className="text-xs text-sky-400 mt-1">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-400 font-mono flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 size={13} />
              <span>Final-Year MCA Candidate</span>
            </div>
          </div>

          {/* Bento 3: Practical Industry Experience (Span 6) */}
          <div
            className="md:col-span-6 bento-card p-6 md:p-8"
            onMouseMove={handleMouseMove}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Professional Experience</h3>
                  <p className="text-xs text-indigo-400 font-mono">Software Engineering Externship</p>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                August 2026
              </span>
            </div>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id}>
                <div className="text-base font-bold text-white">{exp.role}</div>
                <div className="text-xs font-mono text-sky-400 mb-3">{exp.company}</div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>Analyzed application architecture &amp; backend reliability principles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>Examined system design workflows, API maintenance, and fault tolerance</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bento 4: Architecture & Backend Pillars (Span 6) */}
          <div
            className="md:col-span-6 bento-card p-6 md:p-8"
            onMouseMove={handleMouseMove}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                <Server size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Engineering Practices</h3>
                <p className="text-xs text-slate-400 font-mono">Foundations for Production Readiness</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-sm font-bold text-white mb-1">REST API Best Practices</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Proper HTTP verbs, RFC-7807 problem details, and standardized status codes.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-sm font-bold text-white mb-1">Relational Integrity</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Normalized SQL Server schemas, foreign keys, and LINQ query optimization.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-sm font-bold text-white mb-1">Clean Architecture</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Separation of Controller, Service, and Repository layers with dependency injection.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-sm font-bold text-white mb-1">Postman Test Suites</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Contract validation, parameter boundary checks, and regression prevention.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
