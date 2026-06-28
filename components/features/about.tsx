"use client";

import { motion } from "framer-motion";
import { GlowContainer } from "@/components/ui/glow-container";
import { GraduationCap, Briefcase, Server, Cloud, Code } from "lucide-react";

export function AboutSection() {
  const journey = [
    {
      year: "2024 - Present",
      title: "Master of Computer Applications",
      institution: "Current Institution",
      description: "Specializing in Cloud Computing, DevOps, and Advanced Software Engineering.",
      icon: GraduationCap
    },
    {
      year: "2021 - 2024",
      title: "Bachelor's Degree",
      institution: "Previous Institution",
      description: "Foundation in Computer Science, Database Management, and Programming.",
      icon: GraduationCap
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Story & Passions */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Engineering <span className="text-gradient">Excellence</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I am an MCA student passionate about bridging the gap between development and operations. My journey began with a deep curiosity for how scalable systems are built and deployed, leading me to explore the worlds of Cloud Computing, Linux, and Automation.
                </p>
                <p>
                  My philosophy is simple: write clean code, automate everything, and deploy with confidence. Whether it's crafting robust REST APIs with Java and Spring Boot, or containerizing applications with Docker, I focus on building resilient architectures.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <GlowContainer className="p-6">
                <Server className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">DevOps Mindset</h3>
                <p className="text-muted-foreground text-sm">
                  Passionate about CI/CD, automation, and infrastructure as code. Turning manual processes into streamlined pipelines.
                </p>
              </GlowContainer>
              
              <GlowContainer className="p-6">
                <Code className="w-8 h-8 text-accent-2 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Backend Architecture</h3>
                <p className="text-muted-foreground text-sm">
                  Designing scalable microservices and APIs with Java, Spring Boot, and modern databases.
                </p>
              </GlowContainer>
            </div>
          </div>

          {/* Vertical Timeline */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Briefcase className="text-accent" />
              Journey & Education
            </h3>
            <div className="relative border-l border-white/10 ml-4 space-y-12 pb-8">
              {journey.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-accent">
                    <item.icon size={18} />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-colors">
                    <span className="text-xs font-mono text-accent mb-2 block">{item.year}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground font-medium mb-3">{item.institution}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
