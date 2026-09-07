export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  venueType: 'Conference' | 'Journal' | 'Workshop' | 'Preprint';
  year: number;
  abstract?: string;
  thumbnail?: string;
  paperUrl?: string;
  arxivUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  bibtex?: string;
  tags: string[];
  featured?: boolean;
  highlightAuthor?: string;
  status?: 'Accepted' | 'Oral Presentation' | 'Best Paper' | 'Preprint';
}

export interface Project {
  id: string;
  title: string;
  area: string;
  description: string;
  institution?: string;
  collaborators?: string[];
  status: 'Ongoing' | 'Completed' | 'In Progress';
  startDate?: string;
  endDate?: string;
  paperUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  methodology?: string[];
  contributions?: string[];
  technologies?: string[];
  featured?: boolean;
}

export interface ExperienceEntry {
  id: string;
  position: string;
  institution: string;
  duration: string;
  location: string;
  summary: string;
  projects?: string[];
  current?: boolean;
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  location?: string;
  details?: string;
  gpa?: string;
  rank?: string;
  thesis?: string;
  current?: boolean;
}

export interface AwardEntry {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

export interface TalkEntry {
  id: string;
  title: string;
  event: string;
  location: string;
  date: string;
  slidesUrl?: string;
  videoUrl?: string;
  paperUrl?: string;
}

export interface ResearchNote {
  id: string;
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
  content: string;
  featured?: boolean;
}

export interface ResearchInterest {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface RepoEntry {
  id: string;
  name: string;
  description: string;
  area: string;
  language: string;
  url: string;
}
