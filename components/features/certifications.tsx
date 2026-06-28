"use client";

import { motion } from "framer-motion";
import { GlowContainer } from "@/components/ui/glow-container";
import { Award, Target, CheckCircle2 } from "lucide-react";

export function CertificationsSection() {
  const currentCerts = [
    {
      title: "Oracle Cloud Infrastructure Architect",
      issuer: "Oracle",
      date: "2024",
      status: "Achieved",
      icon: Award,
      color: "text-accent"
    }
  ];

  const futureGoals = [
    { title: "AWS Solutions Architect", issuer: "Amazon Web Services" },
    { title: "Certified Kubernetes Administrator", issuer: "CNCF" },
    { title: "Terraform Associate", issuer: "HashiCorp" },
    { title: "Red Hat Certified Engineer", issuer: "Red Hat" }
  ];

  return (
    <section id="certifications" className="py-24 relative z-10 bg-background/50 backdrop-blur-sm border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4"
          >
            Professional <span className="text-gradient">Credentials</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Validating expertise through industry-recognized certifications and continuous learning.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Current Certifications */}
          <div className="flex-1">
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-accent" />
              Active Certifications
            </h3>
            <div className="space-y-6">
              {currentCerts.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlowContainer className="p-1">
                    <div className="bg-background rounded-lg p-6 border border-white/10 flex items-center gap-6 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 ${cert.color}`}>
                        <cert.icon size={32} />
                      </div>
                      
                      <div className="flex-1 relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                          <CheckCircle2 size={14} className="text-success" />
                          <span className="text-xs font-mono text-success uppercase">{cert.status}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-1">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                  </GlowContainer>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Goals */}
          <div className="flex-1">
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <Target className="text-accent-2" />
              Certification Roadmap
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {futureGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-accent-2/30 transition-colors relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target size={40} className="text-accent-2" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-xs font-mono text-accent-2 mb-2 block">In Progress</span>
                    <h4 className="font-bold text-white mb-1">{goal.title}</h4>
                    <p className="text-xs text-muted-foreground">{goal.issuer}</p>
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
