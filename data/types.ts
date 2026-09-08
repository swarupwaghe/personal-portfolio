export interface Project {
  id: string;
  title: string;
  description: string;
  problemAddressed?: string;
  features?: string[];
  role?: string;
  technologies: string[];
  category: string;
  image?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Development & Version Control' | 'Design' | 'Computer Fundamentals' | 'Areas of Interest';
  reference?: string; // e.g., 'Learning', 'Familiar', 'Exploring'
}

export interface Education {
  institution: string;
  program: string;
  startYear: string;
  endYear: string; // or 'status' like 'Currently Pursuing'
  result?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
}

export interface Activity {
  name: string;
  role: string;
  year: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  type: 'Foundation' | 'Exploration' | 'Building' | 'Collaboration' | 'Future';
}
