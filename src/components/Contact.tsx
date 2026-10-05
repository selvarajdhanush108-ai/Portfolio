import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <div
          className="bento-card p-8 md:p-14 text-center relative overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          {/* Subtle Ambient Background Mesh */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium mb-6">
              <MessageSquare size={12} />
              <span>Open for Opportunities</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-heading mb-4 leading-tight">
              Let's build something robust.
            </h2>

            <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Looking for an entry-level .NET Developer or Software Engineer? I am ready to contribute to high-performance backend systems, APIs, and relational databases.
            </p>

            {/* Interactive Email Pill */}
            <div className="inline-flex flex-col items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-black/40 border border-white/10 hover:border-sky-500/40 shadow-xl transition-all">
                <Mail size={18} className="text-sky-400" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-sm md:text-base font-bold text-white hover:text-sky-300 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
                <div className="flex items-center gap-1 pl-2 border-l border-white/10">
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Open mail client"
                    aria-label="Send email"
                  >
                    <Send size={14} />
                  </a>
                </div>
              </div>

              {copied && (
                <span className="text-xs font-mono text-emerald-400 animate-fade-in">
                  ✓ Email copied to clipboard
                </span>
              )}
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-400 to-indigo-600 text-white font-semibold text-xs shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
              >
                <Mail size={14} />
                <span>Send Email</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-semibold hover:border-indigo-500/40 transition-all"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} className="text-slate-400" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-semibold hover:border-indigo-500/40 transition-all"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={12} className="text-slate-400" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
