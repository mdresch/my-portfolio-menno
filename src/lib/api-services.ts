import { Project, BlogPost, Skill, ContactMessage } from '@/types/api';
import { useAuthToken } from '@/lib/auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5154/api';

// Helper function to get auth header (safe for both server and client)
export function getAuthHeader(): Record<string, string> {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  return {};
}

// Helper function for HTTP requests
async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const baseHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...getAuthHeader(),
  };
  const headers: Record<string, string> = {
    ...baseHeaders,
    ...(options.headers ? options.headers as Record<string, string> : {}),
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || response.statusText || 'API request failed');
  }

  // For 204 No Content responses
  if (response.status === 204) {
    return {} as T;
  }

  return response.json() as Promise<T>;
}

// API Services
export const ProjectService = {
  async getAll(): Promise<Project[]> {
    return fetchAPI<Project[]>('/projects');
  },

  async getById(id: number): Promise<Project> {
    return fetchAPI<Project>(`/projects/${id}`);
  },

  async create(project: Omit<Project, 'id'>): Promise<Project> {
    return fetchAPI<Project>('/projects', {
      method: 'POST',
      body: JSON.stringify(project),
    });
  },

  async update(id: number, project: Partial<Project>): Promise<Project> {
    return fetchAPI<Project>(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(project),
    });
  },

  async delete(id: number): Promise<void> {
    return fetchAPI<void>(`/projects/${id}`, {
      method: 'DELETE',
    });
  },
};

export const BlogService = {
  async getAll(): Promise<BlogPost[]> {
    return fetchAPI<BlogPost[]>('/blogposts');
  },

  async getBySlug(slug: string): Promise<BlogPost> {
    return fetchAPI<BlogPost>(`/blogposts/slug/${slug}`);
  },

  async getById(id: number): Promise<BlogPost> {
    return fetchAPI<BlogPost>(`/blogposts/${id}`);
  },

  async create(blogPost: Omit<BlogPost, 'id'>): Promise<BlogPost> {
    return fetchAPI<BlogPost>('/blogposts', {
      method: 'POST',
      body: JSON.stringify(blogPost),
    });
  },

  async update(id: number, blogPost: Partial<BlogPost>): Promise<BlogPost> {
    return fetchAPI<BlogPost>(`/blogposts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(blogPost),
    });
  },

  async delete(id: number): Promise<void> {
    return fetchAPI<void>(`/blogposts/${id}`, {
      method: 'DELETE',
    });
  },
};

export const SkillService = {
  async getAll(): Promise<Skill[]> {
    return fetchAPI<Skill[]>('/skills');
  },

  async getByCategory(category: string): Promise<Skill[]> {
    return fetchAPI<Skill[]>(`/skills/category/${category}`);
  },

  async getCategories(): Promise<string[]> {
    return fetchAPI<string[]>('/skills/categories');
  },

  async create(skill: Omit<Skill, 'id'>): Promise<Skill> {
    return fetchAPI<Skill>('/skills', {
      method: 'POST',
      body: JSON.stringify(skill),
    });
  },

  async delete(id: number): Promise<void> {
    return fetchAPI<void>(`/skills/${id}`, {
      method: 'DELETE',
    });
  },
};

export const ContactService = {
  async submitMessage(message: Omit<ContactMessage, 'id' | 'receivedAt' | 'isRead'>): Promise<void> {
    return fetchAPI<void>('/contact', {
      method: 'POST',
      body: JSON.stringify(message),
    });
  },
};

export const CrossPostService = {
  async getStatistics(): Promise<any[]> {
    return fetchAPI<any[]>('/blogcrosspost');
  },
  
  async getCrossPostsByBlogId(blogId: number): Promise<any[]> {
    return fetchAPI<any[]>(`/blogcrosspost/blog/${blogId}`);
  },
};
