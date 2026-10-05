import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Terminal, MapPin, Copy, Check, Play } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'output'>('code');
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    '.NET Developer',
    'C# Backend Engineer',
    'ASP.NET Core Specialist',
    'Software Engineer',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(`// Dhanush S - .NET Developer
public class DhanushDeveloper : ISoftwareEngineer {
    public string Focus => ".NET Development";
    public string Language => "C#";
    public string Framework => "ASP.NET Core";
    public string Database => "SQL Server";
}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="aurora-glow" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Typography & Direct CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for .NET &amp; Software Engineering Roles</span>
            </div>

            {/* Giant High-Impact Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4">
              <span className="gradient-heading block">{PERSONAL_INFO.name}</span>
              <span className="gradient-accent-text block">
                {roles[roleIndex]}
              </span>
            </h1>

            {/* Crisp 1-Sentence High-Signal Bio */}
            <p className="text-lg md:text-xl text-slate-400 dark:text-slate-400 max-w-xl leading-relaxed mb-8 font-normal">
              Final-year MCA student building robust backend architectures, high-performance REST APIs, and relational data services with <span className="text-white font-medium">C#</span>, <span className="text-white font-medium">ASP.NET Core</span>, and <span className="text-white font-medium">SQL Server</span>.
            </p>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Systems</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-900/80 dark:bg-slate-900/80 text-white font-semibold text-sm border border-white/10 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-200"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Quick Metadata Bar */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-sky-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>

              <span className="inline-flex items-center gap-1.5 text-slate-500">
                <MapPin size={15} />
                <span>Salem, Tamil Nadu, India</span>
              </span>
            </div>
          </div>

          {/* Right Column: Sleek Interactive C# Code Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="bento-card p-0 shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                    <Terminal size={12} className="text-sky-400" />
                    Dhanush.cs
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`text-xs px-2.5 py-1 rounded font-mono transition-colors ${
                      activeTab === 'code' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Code
                  </button>
                  <button
                    onClick={() => setActiveTab('output')}
                    className={`text-xs px-2.5 py-1 rounded font-mono transition-colors flex items-center gap-1 ${
                      activeTab === 'output' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <Play size={10} />
                    Output
                  </button>
                  <button
                    onClick={handleCopy}
                    className="text-xs p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
                    title="Copy snippet"
                  >
                    {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto min-h-[260px] flex flex-col justify-center">
                {activeTab === 'code' ? (
                  <div className="space-y-1 text-slate-300">
                    <p className="text-slate-500">// .NET Developer &amp; Software Engineer</p>
                    <p>
                      <span className="text-pink-400 font-semibold">public class</span>{' '}
                      <span className="text-purple-300 font-semibold">DhanushDeveloper</span> :{' '}
                      <span className="text-sky-300">ISoftwareEngineer</span>
                    </p>
                    <p>{'{'}</p>
                    <p className="pl-4">
                      <span className="text-pink-400">public string</span> <span className="text-amber-300">Language</span> =&gt;{' '}
                      <span className="text-emerald-400">"C#"</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-pink-400">public string</span> <span className="text-amber-300">Framework</span> =&gt;{' '}
                      <span className="text-emerald-400">"ASP.NET Core Web API"</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-pink-400">public string</span> <span className="text-amber-300">ORM</span> =&gt;{' '}
                      <span className="text-emerald-400">"EF Core &amp; LINQ"</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-pink-400">public string</span> <span className="text-amber-300">Database</span> =&gt;{' '}
                      <span className="text-emerald-400">"SQL Server"</span>;
                    </p>
                    <p>{'}'}</p>
                  </div>
                ) : (
                  <div className="space-y-2 text-slate-300">
                    <p className="text-slate-500">$ dotnet run --project DhanushApi</p>
                    <p className="text-emerald-400">✓ Compilation Succeeded [0 Warnings, 0 Errors]</p>
                    <p className="text-slate-400">info: Microsoft.Hosting.Lifetime[14]</p>
                    <p className="text-sky-300">      Now listening on: https://dhanushs.dev</p>
                    <div className="p-2.5 rounded bg-black/40 border border-white/5 text-xs text-slate-300 mt-2">
                      <span className="text-indigo-400 font-semibold">GET /api/v1/profile/status</span>
                      <p className="text-emerald-400 mt-1">HTTP 200 OK (8ms)</p>
                      <p className="text-slate-400 mt-0.5">{"{ \"status\": \"Ready to build high-scale APIs\" }"}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2.5 bg-black/20 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  .NET 8 / 10 Architecture
                </span>
                <span>UTF-8 · C# 12</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
