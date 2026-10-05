import React, { useState } from 'react';
import { Layers, ArrowUpRight, Info } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { BusTrackingVisual } from './BusTrackingVisual';
import { FacultyManagementVisual } from './FacultyManagementVisual';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono font-medium mb-3">
            <Layers size={12} />
            <span>Showcase &amp; Implementations</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-heading mb-4">
            Backend Systems &amp; APIs
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Production-oriented backend applications built with C#, ASP.NET Core Web API, Entity Framework Core, and SQL Server.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bento-card p-6 md:p-10"
              onMouseMove={handleMouseMove}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Summary & Metadata (Span 6) */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-400">
                        {project.year}
                      </span>
                      <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">
                        ASP.NET Core Web API
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-600 text-white font-semibold text-xs shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
                    >
                      <Info size={14} />
                      <span>Case Study &amp; API Specs</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-semibold hover:border-indigo-500/40 transition-all"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon size={14} />
                        <span>GitHub Code</span>
                        <ArrowUpRight size={12} className="text-slate-400" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Interactive Architectural Visualizer (Span 6) */}
                <div className="lg:col-span-6 w-full">
                  {project.visualType === 'bus-tracking' ? (
                    <BusTrackingVisual />
                  ) : (
                    <FacultyManagementVisual />
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
