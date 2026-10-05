import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { SecuredAvatar } from './SecuredAvatar';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-black/40 py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <SecuredAvatar size="sm" />
            <div>
              <div className="font-bold text-sm text-white">{PERSONAL_INFO.name}</div>
              <div className="text-xs text-slate-500 font-mono">.NET Developer · Salem, Tamil Nadu, India</div>
            </div>
          </div>

          {/* Socials & Actions */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Email Address"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors ml-2 pl-4 border-l border-white/10"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 {PERSONAL_INFO.name}. Built with C# &amp; .NET principles. No backend required.</p>
          <p className="font-mono text-slate-600">contact@dhanushs.dev</p>
        </div>
      </div>
    </footer>
  );
};
