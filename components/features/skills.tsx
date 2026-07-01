"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { GlowContainer } from "@/components/ui/glow-container";
import { 
  SiSpringboot, SiMongodb, SiMysql, SiFirebase, SiSupabase, 
  SiDocker, SiGithubactions, SiLinux 
} from "react-icons/si";
import { FaJava, FaGitAlt, FaGithub } from "react-icons/fa";
import { Server, Database, Cloud, Terminal } from "lucide-react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    setRotateX(yPct * 20 * -1);
    setRotateY(xPct * 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`perspective-1000 ${className || ""}`}
    >
      <GlowContainer className="h-full flex flex-col items-center justify-center p-6 text-center">
        {children}
      </GlowContainer>
    </motion.div>
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Backend & Java",
      icon: <Server className="text-accent w-6 h-6" />,
      skills: [
        { name: "Java", icon: <FaJava className="text-[#007396]" />, progress: 90 },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" />, progress: 85 },
        { name: "Microservices", icon: <Cloud className="text-accent" />, progress: 75 },
      ]
    },
    {
      title: "Databases",
      icon: <Database className="text-accent-2 w-6 h-6" />,
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, progress: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, progress: 80 },
        { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" />, progress: 75 },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="text-success w-6 h-6" />,
      skills: [
        { name: "Linux", icon: <SiLinux className="text-white" />, progress: 90 },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" />, progress: 80 },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, progress: 90 },
        { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" />, progress: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10 bg-background/50 backdrop-blur-sm border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, focusing on backend development, databases, and DevOps practices.
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TiltCard className="h-full">
                      <div className="text-4xl mb-4 opacity-90">{skill.icon}</div>
                      <h4 className="font-medium text-white mb-4">{skill.name}</h4>
                      
                      <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden mt-auto">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-accent to-accent-2"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                        />
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
