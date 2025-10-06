// API Types that match the Prisma schema

export interface ApiProject {
  id: number;
  title: string;
  description: string | null;
  technologies: string[];
  link: string | null;
  datePublished: string | null;
  category: string | null;
  screenshots: string[];
  outcomes: string[];
  challenges: string[];
  caseStudy: string | null;
  slug: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  author: string | null;
  published: string;
  lastModified: string | null;
  categories: string[];
}

export interface CrossPost {
  id: number;
  blogPostId: number;
  platform: string;
  crossPostedUrl: string | null;
  crossPostedAt: string;
  status: string;
}

export interface CrossPostStatistics {
  id: number;
  platform: string;
  totalCrossPosts: number;
  lastCrossPostedAt: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  receivedAt: string;
  isRead: boolean;
}

export interface Skill {
  id: number;
  name: string;
  category: string | null;
  proficiencyLevel: number;
  iconUrl: string | null;
}

// Authentication Types
export interface AuthToken {
  token: string;
  expiration: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}
