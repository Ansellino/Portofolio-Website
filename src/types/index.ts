export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  description: string;
  avatar: string;
  resumeUrl: string;
  personalLogo: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  type: "Hybrid" | "Remote" | "On-site";
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  gpa: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  year: string;
}
