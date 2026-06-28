"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlowContainer } from "@/components/ui/glow-container";
import { ExternalLink, Layers, Server, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function ProjectsSection() {
  const projects = [
    {
      title: "Bus Tracking System",
      description: "A real-time fleet monitoring platform for universities and transit authorities. Built with modern backend microservices to handle high-frequency location data updates and serve thousands of concurrent clients.",
      image: "/assets/bus_tracking_system.png",
      tags: ["Java", "Spring Boot", "Kafka", "WebSockets", "MongoDB", "Docker"],
      metrics: ["5000+ Daily Users", "10ms Latency", "99.9% Uptime"],
      github: "https://github.com/selvarajdhanush108-ai/buzzy",
      demo: "https://selvarajdhanush108-ai.github.io/buzzy/"
    },
    {
      title: "Campus Connect",
      description: "An integrated campus ecosystem that bridges the gap between students, faculty, and administration. Features include event management, real-time announcements, and academic resource sharing.",
      image: "/assets/campus_connect.png",
      tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Redis"],
      metrics: ["10k+ Students", "Real-time Sync", "Cloud Native"],
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing scalable backend architectures and full-stack solutions built for real-world impact.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.title} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>

              <motion.div
                initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-3/5"
              >
                <GlowContainer className="group p-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white/5 border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                  </div>
                </GlowContainer>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-2/5"
              >
                <div className="flex items-center gap-2 mb-4 text-accent text-sm font-mono font-medium">
                  <Server size={16} />
                  <span>Architecture & Implementation</span>
                </div>

                <h3 className="text-3xl font-heading font-bold text-white mb-4">{project.title}</h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-white/10">
                  {project.metrics.map(metric => (
                    <div key={metric} className="text-center">
                      <span className="block text-white font-bold text-sm mb-1">{metric.split(" ")[0]}</span>
                      <span className="block text-muted-foreground text-xs">{metric.split(" ").slice(1).join(" ")}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-accent transition-colors font-medium text-sm"
                  >
                    <FaGithub size={18} />
                    Source Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white hover:bg-accent/80 transition-colors font-medium text-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
