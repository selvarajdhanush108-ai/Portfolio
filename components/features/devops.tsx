"use client";

import { motion } from "framer-motion";
import { GitCommit, PlayCircle, Box, Cloud, Monitor, CheckCircle, ArrowRight } from "lucide-react";
import { SiDocker, SiGithubactions, SiLinux, SiTerraform, SiKubernetes, SiNginx, SiJenkins, SiPrometheus, SiGrafana, SiCloudflare } from "react-icons/si";
import { FaAws, FaGithub } from "react-icons/fa";

export function DevOpsSection() {
  const pipelineSteps = [
    { icon: GitCommit, label: "Code", color: "text-[#F05032]" },
    { icon: FaGithub, label: "Version Control", color: "text-white" },
    { icon: SiGithubactions, label: "CI Pipeline", color: "text-[#2088FF]" },
    { icon: SiDocker, label: "Build", color: "text-[#2496ED]" },
    { icon: Box, label: "Registry", color: "text-accent-2" },
    { icon: Cloud, label: "Deploy", color: "text-accent" },
    { icon: CheckCircle, label: "Production", color: "text-success" },
    { icon: Monitor, label: "Monitoring", color: "text-[#E6522C]" }
  ];

  const techIcons = [
    { Icon: SiLinux, color: "text-white", x: "10%", y: "20%", delay: 0 },
    { Icon: FaAws, color: "text-[#FF9900]", x: "85%", y: "15%", delay: 0.5 },
    { Icon: SiTerraform, color: "text-[#844FBA]", x: "15%", y: "75%", delay: 1 },
    { Icon: SiKubernetes, color: "text-[#326CE5]", x: "80%", y: "80%", delay: 1.5 },
    { Icon: SiNginx, color: "text-[#009639]", x: "50%", y: "10%", delay: 2 },
    { Icon: SiJenkins, color: "text-[#D24939]", x: "30%", y: "85%", delay: 0.2 },
    { Icon: SiPrometheus, color: "text-[#E6522C]", x: "70%", y: "25%", delay: 0.7 },
    { Icon: SiGrafana, color: "text-[#F46800]", x: "25%", y: "30%", delay: 1.2 },
    { Icon: SiCloudflare, color: "text-[#F38020]", x: "65%", y: "70%", delay: 1.8 }
  ];

  return (
    <section id="devops" className="py-24 relative z-10 overflow-hidden bg-[#0F172A]/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>
      
      {/* Floating Tech Background */}
      {techIcons.map((tech, i) => (
        <motion.div
          key={i}
          className={`absolute text-5xl opacity-10 ${tech.color} pointer-events-none`}
          style={{ left: tech.x, top: tech.y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: tech.delay,
            ease: "easeInOut"
          }}
        >
          <tech.Icon />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4"
          >
            DevOps <span className="text-gradient">Ecosystem</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Automating the path from code to production with robust, scalable infrastructure.
          </p>
        </div>

        <div className="bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative">
          
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <div className="w-3 h-3 rounded-full bg-success"></div>
            </div>
            <span className="text-xs font-mono text-muted-foreground">pipeline-execution.yml</span>
          </div>

          <div className="overflow-x-auto pb-8">
            <div className="min-w-[800px] flex items-center justify-between relative">
              
              {/* Connecting Line */}
              <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-white/10 rounded-full z-0 overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>

              {pipelineSteps.map((step, index) => (
                <div key={step.label} className="relative z-10 flex flex-col items-center gap-4">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className={`w-12 h-12 rounded-full bg-[#111827] border-2 border-[#1e293b] flex items-center justify-center shadow-lg relative overflow-hidden group`}
                  >
                    <motion.div
                      animate={{
                        boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 15px rgba(59,130,246,0.5)", "0 0 0px rgba(59,130,246,0)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="absolute inset-0 rounded-full"
                    />
                    <step.icon className={`w-5 h-5 ${step.color} relative z-10 group-hover:scale-110 transition-transform`} />
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    className="text-xs font-mono font-medium text-muted-foreground"
                  >
                    {step.label}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-bold mb-2">Infrastructure as Code</h4>
              <p className="text-sm text-muted-foreground">Provisioning and managing cloud resources consistently using Terraform and AWS CloudFormation.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-bold mb-2">Container Orchestration</h4>
              <p className="text-sm text-muted-foreground">Deploying resilient microservices architectures using Docker and Kubernetes clusters.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-white font-bold mb-2">Observability</h4>
              <p className="text-sm text-muted-foreground">Setting up comprehensive monitoring and alerting pipelines with Prometheus, Grafana, and ELK stack.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
