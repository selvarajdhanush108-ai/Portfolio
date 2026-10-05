import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES, PROJECTS, EDUCATION } from '../data/portfolioData';

export const PrintResumeDocument: React.FC = () => {
  return (
    <div className="print-document">
      {/* Document Header */}
      <header className="print-avoid-break mb-3 pb-2 border-b-2 border-slate-900">
        <div className="flex justify-between items-baseline">
          <h1 className="text-[20pt] font-extrabold tracking-tight text-slate-900 leading-none">
            {PERSONAL_INFO.name}
          </h1>
          <span className="text-[10pt] font-bold text-slate-700 tracking-wide uppercase">
            {PERSONAL_INFO.role}
          </span>
        </div>

        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[8.5pt] text-slate-600">
          <span>{PERSONAL_INFO.location}</span>
          <span>•</span>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-900 underline font-medium">
            {PERSONAL_INFO.email}
          </a>
          <span>•</span>
          <a href={PERSONAL_INFO.linkedinUrl} className="text-slate-900 underline font-medium">
            linkedin.com/in/dhanush-s1006
          </a>
          <span>•</span>
          <a href={PERSONAL_INFO.githubUrl} className="text-slate-900 underline font-medium">
            github.com/selvarajdhanush108-ai
          </a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="print-avoid-break mb-3">
        <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
          Professional Summary
        </h2>
        <p className="text-[9pt] leading-relaxed text-slate-700 text-justify">
          {PERSONAL_INFO.resumeSummary}
        </p>
      </section>

      {/* Technical Skills */}
      <section className="print-avoid-break mb-3">
        <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
          Technical Skills
        </h2>
        <div className="space-y-1 text-[8.8pt]">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.title} className="flex leading-snug">
              <span className="font-bold text-slate-900 w-[160px] shrink-0">
                {cat.title}:
              </span>
              <span className="text-slate-700">
                {cat.skills.map((s) => s.name).join(' · ')}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="print-avoid-break mb-3">
        <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
          Experience
        </h2>
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="print-avoid-break mb-2">
            <div className="flex justify-between items-baseline">
              <div className="font-bold text-[9.2pt] text-slate-900">
                {exp.role} <span className="font-normal text-slate-600">({exp.type})</span> — <span className="font-semibold">{exp.company}</span>
              </div>
              <span className="text-[8.5pt] font-medium text-slate-500">
                {exp.period}
              </span>
            </div>
            <p className="text-[8.8pt] text-slate-700 mt-0.5 mb-1 leading-snug">
              {exp.description}
            </p>
            <ul className="list-disc pl-4 space-y-0.5 text-[8.5pt] text-slate-700">
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Technical Projects */}
      <section className="mb-3">
        <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
          Technical Projects
        </h2>
        {PROJECTS.map((proj) => (
          <div key={proj.id} className="print-avoid-break mb-2.5">
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-[9.2pt] text-slate-900">
                {proj.title}
              </span>
              <span className="text-[8.5pt] font-medium text-slate-500">
                {proj.year}
              </span>
            </div>
            <div className="text-[8.2pt] font-mono text-emerald-800 font-semibold mb-1">
              {proj.technologies.join(' · ')}
            </div>
            <p className="text-[8.8pt] text-slate-700 mb-1 leading-snug">
              {proj.shortDescription}
            </p>
            <ul className="list-disc pl-4 space-y-0.5 text-[8.5pt] text-slate-700">
              {proj.highlights.slice(0, 3).map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="print-avoid-break">
        <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5 mb-1.5">
          Education
        </h2>
        <div className="space-y-1.5">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="flex justify-between items-baseline text-[8.8pt]">
              <div>
                <span className="font-bold text-slate-900">{edu.degree}</span>
                <span className="text-slate-600"> — {edu.institution}</span>
              </div>
              <div className="text-[8.5pt] text-slate-600 shrink-0">
                <span className="font-semibold text-slate-800">CGPA: {edu.cgpa}</span> | {edu.period}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
