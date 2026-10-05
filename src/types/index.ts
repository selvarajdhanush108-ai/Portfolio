export interface Project {
  id: string;
  title: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  endpoints?: { method: string; path: string; description: string }[];
  architectureNotes: string[];
  testingNotes: string[];
  visualType: 'bus-tracking' | 'faculty-management';
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  details: string;
}

export interface SkillCategory {
  title: string;
  category: 'languages' | 'dotnet' | 'backend' | 'database' | 'tools';
  skills: {
    name: string;
    description: string;
    level: 'Core' | 'Proficient' | 'Familiar';
    iconName?: string;
  }[];
}
