// Fallback local type declarations to avoid build errors when "@/types/api"
// does not export the expected members. Replace these with the real imports
// from "@/types/api" when that module provides the types.
export type Project = {
  id?: number;
  [key: string]: any;
};
export type BlogPost = {
  id?: number;
  slug?: string;
  [key: string]: any;
};
export type Skill = {
  id?: number;
  category?: string;
  [key: string]: any;
};
export type ContactMessage = {
  id?: number;
  receivedAt?: string;
  isRead?: boolean;
  [key: string]: any;
};

// Simplified API configuration - use only Next.js API routes
const API_BASE_URL = '/api';

// Removed backend health check - using only Next.js API routes

// Helper function to get auth header (safe for both server and client)
export function getAuthHeader(): Record<string, string> {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  return {};
}

// Simplified HTTP request function for Next.js API routes
async function fetchAPI<T>(endpoint: string, options: Record<string, any> = {}): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...getAuthHeader(),
    ...(options.headers || {}),
  };

  // Add timeout to prevent hanging requests
  const timeoutMs = options.timeout || 10000; // 10 seconds default
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    // Handle server-side requests by creating absolute URLs
    let requestUrl: string;
    if (typeof window === 'undefined') {
      // Server-side: create absolute URL using localhost and port
      const port = process.env.PORT || 3001; // Use 3001 since dev server is on that port
      const host = `http://localhost:${port}`;
      requestUrl = new URL(`${API_BASE_URL}${endpoint}`, host).toString();
    } else {
      // Client-side: use relative URL
      requestUrl = `${API_BASE_URL}${endpoint}`;
    }
    
    const response = await fetch(requestUrl, {
      ...options,
      headers,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || response.statusText || "API request failed");
    }

    // For 204 No Content responses
    if (response.status === 204) {
      return {} as T;
    }

    return response.json() as Promise<T>;
  } catch (error) {
    clearTimeout(timeoutId);
    console.error(`API request failed for ${endpoint}:`, error);
    throw error;
  }
}

// Removed fallback function - using only Next.js API routes

// API Services
export const ProjectService = {
  async getAll(): Promise<Project[]> {
    return fetchAPI<Project[]>("/projects");
  },

  async getById(id: number): Promise<Project> {
    return fetchAPI<Project>(`/projects/${id}`);
  },

  async create(project: Omit<Project, "id">): Promise<Project> {
    return fetchAPI<Project>("/projects", {
      method: "POST",
      body: JSON.stringify(project),
    });
  },

  async update(id: number, project: Partial<Project>): Promise<Project> {
    return fetchAPI<Project>(`/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify(project),
    });
  },

  async delete(id: number): Promise<void> {
    return fetchAPI<void>(`/projects/${id}`, {
      method: "DELETE",
    });
  },
};

export const BlogService = {
  async getAll(): Promise<BlogPost[]> {
    return fetchAPI<BlogPost[]>("/blogposts");
  },

  async getBySlug(slug: string): Promise<BlogPost> {
    return fetchAPI<BlogPost>(`/blogposts/slug/${slug}`);
  },

  async getById(id: number): Promise<BlogPost> {
    return fetchAPI<BlogPost>(`/blogposts/${id}`);
  },

  async create(blogPost: Omit<BlogPost, "id">): Promise<BlogPost> {
    return fetchAPI<BlogPost>("/blogposts", {
      method: "POST",
      body: JSON.stringify(blogPost),
    });
  },

  async update(id: number, blogPost: Partial<BlogPost>): Promise<BlogPost> {
    return fetchAPI<BlogPost>(`/blogposts/${id}`, {
      method: "PUT",
      body: JSON.stringify(blogPost),
    });
  },

  async delete(id: number): Promise<void> {
    return fetchAPI<void>(`/blogposts/${id}`, {
      method: "DELETE",
    });
  },
};

export const SkillService = {
  async getAll(): Promise<Skill[]> {
    return fetchAPI<Skill[]>("/skills");
  },

  async getByCategory(category: string): Promise<Skill[]> {
    return fetchAPI<Skill[]>(`/skills/category/${category}`);
  },

  async getCategories(): Promise<string[]> {
    return fetchAPI<string[]>("/skills/categories");
  },

  async create(skill: Omit<Skill, "id">): Promise<Skill> {
    return fetchAPI<Skill>("/skills", {
      method: "POST",
      body: JSON.stringify(skill),
    });
  },

  async delete(id: number): Promise<void> {
    return fetchAPI<void>(`/skills/${id}`, {
      method: "DELETE",
    });
  },
};

export const ContactService = {
  async submitMessage(message: Omit<ContactMessage, "id" | "receivedAt" | "isRead">): Promise<void> {
    return fetchAPI<void>("/contact", {
      method: "POST",
      body: JSON.stringify(message),
    });
  },
};

export const CrossPostService = {
  async getStatistics(): Promise<any[]> {
    return fetchAPI<any[]>("/blogcrosspost");
  },
  
  async getCrossPostsByBlogId(blogId: number): Promise<any[]> {
    return fetchAPI<any[]>(`/blogcrosspost/blog/${blogId}`);
  },
};

// Add RequestInit type for Node.js and browser compatibility
import type { RequestInit } from "node-fetch";
// If you are running in a browser, RequestInit is available globally.
// For Node.js, install @types/node-fetch if not already present.
