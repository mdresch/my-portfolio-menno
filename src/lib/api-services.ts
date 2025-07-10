import { Project, BlogPost, Skill, ContactMessage } from "@/types/api";

// Enhanced API configuration with environment detection
const getApiBaseUrl = (): string => {
  // Production environment - use deployed backend
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_API_BASE_URL) {
    return process.env.NEXT_PUBLIC_API_BASE_URL;
  }

  // Development environment - try local backend first, fallback to deployed
  if (process.env.NODE_ENV === 'development') {
    return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5154/api";
  }

  // Default fallback
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5154/api";
};

const API_BASE_URL = getApiBaseUrl();

// API health check and fallback detection
let isBackendAvailable: boolean | null = null;
let lastHealthCheck = 0;
const HEALTH_CHECK_INTERVAL = 5 * 60 * 1000; // 5 minutes

// Health check function
async function checkBackendHealth(): Promise<boolean> {
  const now = Date.now();

  // Use cached result if recent
  if (isBackendAvailable !== null && (now - lastHealthCheck) < HEALTH_CHECK_INTERVAL) {
    return isBackendAvailable;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });

    isBackendAvailable = response.ok;
    lastHealthCheck = now;
    return isBackendAvailable;
  } catch (error) {
    console.warn('Backend health check failed:', error);
    isBackendAvailable = false;
    lastHealthCheck = now;
    return false;
  }
}

// Helper function to get auth header (safe for both server and client)
export function getAuthHeader(): Record<string, string> {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  return {};
}

// Enhanced HTTP request function with fallback support
async function fetchAPI<T>(endpoint: string, options: Record<string, any> = {}): Promise<T> {
  const baseHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...getAuthHeader(),
  };
  const headers: Record<string, string> = {
    ...baseHeaders,
    ...(options.headers ? options.headers as Record<string, string> : {}),
  };

  // Add timeout to prevent hanging requests
  const timeoutMs = options.timeout || 10000; // 10 seconds default
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
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

    // Log the error for debugging
    console.error(`API request failed for ${endpoint}:`, error);

    // Re-throw the error to be handled by the calling service
    throw error;
  }
}

// Fallback function for Next.js API routes
async function fetchFallbackAPI<T>(endpoint: string, options: Record<string, any> = {}): Promise<T> {
  const response = await fetch(`/api${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || response.statusText || "Fallback API request failed");
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json() as Promise<T>;
}

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
    try {
      // Try the .NET backend first
      return await fetchAPI<Skill[]>("/skills");
    } catch (error) {
      console.warn("Backend API not available, falling back to Next.js API:", error);
      try {
        // Fallback to Next.js API route
        const response = await fetch("/api/skills");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (fallbackError) {
        console.error("Both backend and fallback API failed:", fallbackError);
        throw new Error("Unable to fetch skills from any source");
      }
    }
  },

  async getByCategory(category: string): Promise<Skill[]> {
    try {
      // Try the .NET backend first
      return await fetchAPI<Skill[]>(`/skills/category/${category}`);
    } catch (error) {
      console.warn("Backend API not available, filtering locally:", error);
      try {
        // Fallback: get all skills and filter locally
        const allSkills = await this.getAll();
        return allSkills.filter(skill => skill.category === category);
      } catch (fallbackError) {
        console.error("Failed to get skills by category:", fallbackError);
        throw new Error(`Unable to fetch skills for category: ${category}`);
      }
    }
  },

  async getCategories(): Promise<string[]> {
    try {
      // Try the .NET backend first
      return await fetchAPI<string[]>("/skills/categories");
    } catch (error) {
      console.warn("Backend API not available, falling back to Next.js API:", error);
      try {
        // Fallback to Next.js API route
        const response = await fetch("/api/skills/categories");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (fallbackError) {
        console.error("Both backend and fallback API failed:", fallbackError);
        throw new Error("Unable to fetch skill categories from any source");
      }
    }
  },

  async create(skill: Omit<Skill, "id">): Promise<Skill> {
    // This operation requires the backend as Next.js API is read-only
    return fetchAPI<Skill>("/skills", {
      method: "POST",
      body: JSON.stringify(skill),
    });
  },

  async delete(id: number): Promise<void> {
    // This operation requires the backend as Next.js API is read-only
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
