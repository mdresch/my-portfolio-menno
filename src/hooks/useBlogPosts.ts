import { useState, useEffect } from 'react';
import { BlogService } from '@/lib/api-services';
import { BlogPost } from '@/types/api';

export function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadBlogPosts() {
      try {
        setIsLoading(true);
        const data = await BlogService.getAll();
        setBlogPosts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load blog posts'));
      } finally {
        setIsLoading(false);
      }
    }

    loadBlogPosts();
  }, []);

  return { blogPosts, isLoading, error };
}

export function useBlogPost(slug: string | null) {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      return;
    }

    async function loadBlogPost() {
      try {
        setIsLoading(true);
        const data = await BlogService.getBySlug(slug);
        setBlogPost(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(`Failed to load blog post with slug ${slug}`));
      } finally {
        setIsLoading(false);
      }
    }

    loadBlogPost();
  }, [slug]);

  return { blogPost, isLoading, error };
}
