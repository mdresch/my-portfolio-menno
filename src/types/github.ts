// Type definitions for GitHub API interactions

export interface GitHubUser {
  login: string;
  name?: string;
  email?: string;
  avatar_url?: string;
  token?: string;
  [key: string]: any; // For other properties that might be returned
}

export interface GitHubFile {
  name: string;
  path: string;
  sha: string;
  content?: string;
  url?: string;
  type?: string;
  size?: number;
  [key: string]: any; // For other properties that might be returned
}

export interface BlogPostFile {
  name: string;
  path: string;
  sha: string;
  title: string;
  date: string;
  content: string;
  excerpt?: string;
  categories: string[];
  [key: string]: any; // For other properties that might be needed
}
