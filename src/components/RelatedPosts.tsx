import Link from 'next/link';
import type { BlogPost } from '@/lib/markdown';

interface RelatedPostsProps {
  currentPost: Omit<BlogPost, 'content'>;
  allPosts: Omit<BlogPost, 'content'>[];
}

export default function RelatedPosts({ currentPost, allPosts }: RelatedPostsProps) {
  const relatedPosts = allPosts
    .filter((post) => {
      // Don't include the current post
      if (post.slug === currentPost.slug) return false;

      // Check for category overlap
      const commonCategories = post.categories.filter((category) =>
        currentPost.categories.includes(category)
      );

      return commonCategories.length > 0;
    })
    .slice(0, 3); // Get top 3 related posts

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t">
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {relatedPosts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md p-4">
            <Link 
              href={`/blog/${post.slug}`}
              className="block hover:text-blue-600 transition-colors"
            >
              <h3 className="font-semibold mb-2">{post.title}</h3>
            </Link>
            <div className="text-sm text-gray-500 mb-2">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              <span className="mx-2">•</span>
              {post.readingTime}
            </div>
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
