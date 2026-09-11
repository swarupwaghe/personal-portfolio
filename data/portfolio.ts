import { Activity, Certification, Education, Project, Skill, TimelineItem } from './types';

export const personalInfo = {
  name: 'Swarup Waghe',
  title: 'Software Engineering Student',
  tagline: 'Aspiring Prompt Engineer & Data Analyst',
  location: 'Mumbai, Maharashtra, India',
  introduction: "I'm a first-year Software Engineering student building my foundation in programming, AI, prompting, and data-driven problem solving. I enjoy learning through hands-on projects and exploring how technology can solve real-world problems.",
  about: "I am a first-year Software Engineering student building foundations in programming, AI, prompting, and real-world problem solving. I have a strong interest in Prompt Engineering and Data Analysis, and I believe in learning through projects, hackathons, certifications, and experimentation.",
  email: 'swarupwaghe@gmail.com',
  github: 'https://github.com/swarupwaghe',
  linkedin: 'https://www.linkedin.com/in/swarup-waghe-b366a0305/',
  resumeUrl: '/resume.pdf'
};

export const skills: Skill[] = [
  { name: 'C++', category: 'Programming', reference: 'Learning' },
  { name: 'HTML', category: 'Programming', reference: 'Familiar' },
  { name: 'Git', category: 'Development & Version Control', reference: 'Familiar' },
  { name: 'GitHub', category: 'Development & Version Control', reference: 'Familiar' },
  { name: 'Figma', category: 'Design', reference: 'Learning' },
  { name: 'UI/UX', category: 'Design', reference: 'Exploring' },
  { name: 'Microprocessor 8085', category: 'Computer Fundamentals', reference: 'Familiar' },
  { name: 'Microsoft Visual Studio 6.0', category: 'Computer Fundamentals', reference: 'Familiar' },
  { name: 'Prompt Engineering', category: 'Areas of Interest', reference: 'Exploring' },
  { name: 'Data Analysis', category: 'Areas of Interest', reference: 'Exploring' },
  { name: 'Artificial Intelligence', category: 'Areas of Interest', reference: 'Exploring' },
];

export const projects: Project[] = [
  {
    id: 'spendly',
    title: 'Spendly / AI Smart Transaction Wallet',
    description: 'An AI-driven smart wallet and transaction tracking application designed to help users monitor spending, understand transactions, and make smarter financial decisions.',
    problemAddressed: 'Lack of clear visibility into personal spending and transaction contexts.',
    category: 'Hackathon Project',
    technologies: ['React', 'Next.js', 'AI Integration'], // Assumed stack for now based on context
    liveUrl: 'https://spendly-ashen-ten.vercel.app/',
    featured: true
  },
  {
    id: 'ancient-math',
    title: 'Ancient Indian Mathematics Educational Tool',
    description: 'A team-based educational project focused on creating a digital learning tool around concepts from ancient Indian mathematics.',
    category: 'Team Project (In Development)',
    technologies: ['HTML', 'CSS', 'JavaScript'], // Generic placeholders
    featured: false
  },
  {
    id: 'registration-app',
    title: 'Event-Driven Registration App',
    description: 'A basic registration application created to explore event-driven programming and application logic.',
    category: 'Personal Project',
    technologies: ['C++'], // Generic placeholder
    featured: false
  }
];

export const education: Education[] = [
  {
    institution: 'Vidyalankar Institute for International Education',
    program: "Bachelor's in Software Engineering",
    startYear: '2026',
    endYear: '2029',
    result: 'Currently Pursuing'
  },
  {
    institution: 'D.G. Ruparel College',
    program: 'Higher Secondary Education (PCM)',
    startYear: '2024',
    endYear: '2026',
    result: 'HSC: 72%'
  },
  {
    institution: 'I.E.S. King George High School',
    program: 'Secondary Education',
    startYear: '',
    endYear: '',
    result: 'SSC: 92%'
  }
];

export const certifications: Certification[] = [
  { name: 'Getting Started with Artificial General Intelligence', issuer: 'IBM' },
  { name: 'Programming Fundamentals: Command Line Interface and OS Commands', issuer: 'Infosys' },
  { name: 'A1 German Course', issuer: 'German' },
];

export const activities: Activity[] = [
  { name: 'Nexora Hackathon', role: 'Participant', year: '2026' },
  { name: 'TechStack', role: 'Volunteer', year: '2025' },
  { name: 'Jurassic Biology Workshop', role: 'Volunteer', year: '2025' },
];

export const interests = ['Formula 1', 'Tennis', 'Coding', 'Gaming'];
export const languages = ['English', 'German (A1)', 'Hindi', 'Marathi'];

export const learningJourney: TimelineItem[] = [
  { date: 'Foundation', title: 'Computer Fundamentals', description: 'Building basics in programming and computer architecture.', type: 'Foundation' },
  { date: 'Exploration', title: 'AI & Prompting', description: 'Discovering the possibilities of generative AI and prompt design.', type: 'Exploration' },
  { date: 'Building', title: 'First Projects', description: 'Applying knowledge to build functional applications like Spendly.', type: 'Building' },
  { date: 'Collaboration', title: 'Hackathons & Teamwork', description: 'Participating in events and working on team-based tools.', type: 'Collaboration' },
  { date: 'Future', title: 'Data Analysis Focus', description: 'Deepening skills to extract meaningful insights from raw data.', type: 'Future' },
];
