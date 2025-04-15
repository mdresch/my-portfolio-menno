// filepath: c:\Users\menno\CascadeProjects\personal-website\src\components\blog\BlogPostJsonLd.tsx
'use client';

import { BlogPost } from '@/lib/markdown';
import { generateBlogPostStructuredData } from '@/lib/structured-data';

interface BlogPostJsonLdProps {
  post: BlogPost;
}

export default function BlogPostJsonLd({ post }: BlogPostJsonLdProps) {
  // Define base URL - should match the one in layout.tsx
  const baseUrl = 'https://my-portfolio-menno.vercel.app/';

  // Generate structured data
  const postJsonLd = generateBlogPostStructuredData({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    date: post.date,
    author: post.author || 'Menno Drescher',
    image: post.coverImage // This assumes you might add coverImage to your post frontmatter in the future
  }, baseUrl);

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify(postJsonLd) 
      }}
    />
  );
}