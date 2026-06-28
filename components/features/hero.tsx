"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { GlowContainer } from "@/components/ui/glow-container";
import { ArrowDown, Download, Server, Terminal, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      <motion.div 
        className="container mx-auto px-6 max-w-7xl relative z-10"
        style={{ y, opacity }}
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
            <span className="text-sm font-medium text-muted-foreground">Available for new opportunities</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-6">
            <span className="text-white">DHANUSH </span>
            <span className="text-gradient">S</span>
          </h1>

          <div className="h-12 mb-8">
            <AnimatedText 
              text="DevOps Engineer • Java Developer • Cloud Enthusiast" 
              className="text-xl md:text-2xl font-medium text-muted-foreground justify-center"
              delay={0.5}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-muted-foreground max-w-2xl text-lg mb-12"
          >
            I architect scalable backend systems and automate cloud infrastructure. 
            Transforming complex engineering problems into elegant, reliable solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <GlowContainer className="w-full sm:w-auto">
              <a href="#projects" className="relative flex items-center justify-center gap-2 px-8 py-4 bg-accent/10 hover:bg-accent/20 text-white rounded-xl transition-all font-medium border-accent/20 group">
                <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View Projects
              </a>
            </GlowContainer>
            
            <a href="/resume.pdf" target="_blank" className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all font-medium border border-white/10 hover:border-accent/50 w-full sm:w-auto group">
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 flex items-center justify-center gap-6"
          >
            <a href="https://github.com/selvarajdhanush108-ai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors hover:scale-110 transform duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/dhanush-s1006/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform duration-300">
              <FaLinkedin size={24} />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="animate-bounce" />
      </motion.div>

      {/* Floating Elements Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-accent/10 border border-accent/20 rounded-2xl backdrop-blur-md flex items-center justify-center -z-10"
        >
          <Server className="text-accent/50" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-accent-2/10 border border-accent-2/20 rounded-full backdrop-blur-md flex items-center justify-center -z-10"
        >
          <Terminal className="text-accent-2/50" />
        </motion.div>
      </div>
    </section>
  );
}
