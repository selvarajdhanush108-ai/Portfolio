"use client";

import Link from "next/link";
import { Mail, Terminal, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
                <Terminal size={20} />
              </div>
              <span className="text-xl font-heading font-bold text-gradient">
                DHANUSH S
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              DevOps Engineer & Java Developer passionate about Cloud Computing, Automation, and building scalable backend systems.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin size={16} className="text-accent" />
              <span>Salem, Tamil Nadu, India</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'DevOps', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-accent/50 before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              <a href="https://github.com/selvarajdhanush108-ai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-accent/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/dhanush-s1006/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-accent/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:contact@dhanushs.in" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-accent/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Dhanush S. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-success animate-pulse"></span> Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
