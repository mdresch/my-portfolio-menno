import Link from "next/link";
import type { BlogPost } from "@/lib/markdown";

interface PostNavigationProps {
  currentSlug: string;
  allPosts: Omit<BlogPost, "content">[];
}

export default function PostNavigation({ currentSlug, allPosts }: PostNavigationProps) {
  // Find current post index
  const currentIndex = allPosts.findIndex((post) => post.slug === currentSlug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  if (!prevPost && !nextPost) return null;

  return (
    <nav className="border-t border-gray-200 mt-8 pt-8 grid grid-cols-2 gap-4">
      {prevPost && (
        <Link
          href={`/blog/${prevPost.slug}`}
          className="group flex flex-col items-start"
        >
          <span className="text-sm text-gray-500 mb-1">Previous Post</span>
          <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {prevPost.title}
          </span>
        </Link>
      )}
      
      {nextPost && (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="group flex flex-col items-end ml-auto text-right"
        >
          <span className="text-sm text-gray-500 mb-1">Next Post</span>
          <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {nextPost.title}
          </span>
        </Link>
      )}
    </nav>
  );
}
