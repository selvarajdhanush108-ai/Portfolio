import { HeroSection } from "@/components/features/hero";
import { AboutSection } from "@/components/features/about";
import { SkillsSection } from "@/components/features/skills";
import { ProjectsSection } from "@/components/features/projects";
import { DevOpsSection } from "@/components/features/devops";
import { JavaSection } from "@/components/features/java-section";
import { CertificationsSection } from "@/components/features/certifications";
import { ContactTerminal } from "@/components/features/contact-terminal";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <DevOpsSection />
      <JavaSection />
      <CertificationsSection />
      <ContactTerminal />
    </div>
  );
}
