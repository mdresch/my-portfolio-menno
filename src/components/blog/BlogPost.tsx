'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { BlogPost as BlogPostType } from '@/lib/markdown';
import ShareButton from '@/components/ShareButton';
import TableOfContents from '@/components/TableOfContents';
import ReadingProgress from '@/components/ReadingProgress';
import SocialShare from '@/components/SocialShare';
import BlogPostJsonLd from './BlogPostJsonLd';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';
import Giscus from '@/components/comments/Giscus';
import { formatDate } from '@/lib/utils';

interface BlogPostProps {
  post: BlogPostType;
  allPosts?: BlogPostType[];
}

interface BlogPostsProps {
  posts: BlogPostType[];
}

function MostViewedPosts({ allPosts }: { allPosts: BlogPostType[] }) {
  const [mostViewed, setMostViewed] = useState<{ slug: string; title: string; views: number }[]>([]);

  useEffect(() => {
    // Get view counts from localStorage
    const viewCounts = allPosts.map(post => {
      const key = `blog_views_${post.slug}`;
      const views = parseInt(typeof window !== 'undefined' ? localStorage.getItem(key) || '0' : '0', 10);
      return { slug: post.slug, title: post.title, views: isNaN(views) ? 0 : views };
    });
    // Sort by views descending and take top 5
    setMostViewed(viewCounts.filter(v => v.views > 0).sort((a, b) => b.views - a.views).slice(0, 5));
  }, [allPosts]);

  if (mostViewed.length === 0) return null;
  return (
    <div className="bg-white rounded-lg p-6 mb-8 border">
      <h3 className="text-lg font-medium mb-3">Your Most Viewed Posts</h3>
      <ul className="space-y-2">
        {mostViewed.map(post => (
          <li key={post.slug} className="flex justify-between items-center">
            <Link href={`/blog/${post.slug}`} className="text-blue-700 hover:underline text-sm">
              {post.title}
            </Link>
            <span className="text-xs text-gray-500">{post.views} view{post.views === 1 ? '' : 's'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BlogPost({ post, allPosts }: BlogPostProps & { allPosts?: BlogPostType[] }) {
  if (!post || !post.content) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 my-8">
        <p className="text-red-700 font-semibold">Error: Blog post not found or missing content.</p>
      </div>
    );
  }

  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const articleRef = useRef<HTMLElement>(null);
  const [viewCount, setViewCount] = useState(0);

  // Extract headings for table of contents on component mount
  useEffect(() => {
    if (articleRef.current) {
      const headingElements = articleRef.current.querySelectorAll('h2, h3, h4');
      const extractedHeadings = Array.from(headingElements).map(heading => ({
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      }));
      setHeadings(extractedHeadings);
    }
  }, [post.content]);

  // Track and display local view count
  useEffect(() => {
    if (!post?.slug) return;
    const key = `blog_views_${post.slug}`;
    let count = parseInt(localStorage.getItem(key) || '0', 10);
    count = isNaN(count) ? 1 : count + 1;
    localStorage.setItem(key, count.toString());
    setViewCount(count);
  }, [post?.slug]);

  // Define breadcrumb items
  const breadcrumbItems = [
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Add JSON-LD structured data */}
      <BlogPostJsonLd post={post} />
      
      {/* Reading Progress Bar */}
      <ReadingProgress targetRef={articleRef} />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={breadcrumbItems} className="mb-4" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content */}
        <article 
          ref={articleRef}
          className="lg:col-span-8 prose prose-slate lg:prose-lg max-w-none"
        >
          {/* Post Header */}
          <header className="mb-8">
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium no-underline mb-4 inline-block"
            >
              ← Back to all posts
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-3">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-600 text-sm mb-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
              <span className="mx-2">•</span>
              <span>{post.readingTime}</span>
              <span className="mx-2">•</span>
              <span>{viewCount} view{viewCount === 1 ? '' : 's'}</span>
              {post.categories.length > 0 && (
                <>
                  <span className="mx-2">•</span>
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map(category => (
                      <Link 
                        key={category}
                        href={`/blog/category/${category.toLowerCase()}`}
                        className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full no-underline"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>
          
          {/* Post Content */}
          <div 
            className="blog-content" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          {/* Post Footer */}
          <footer className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <span className="text-gray-600 text-sm">Share this post:</span>
                <SocialShare 
                  url={typeof window !== 'undefined' ? window.location.href : ''}
                  title={post.title}
                  text={post.excerpt}
                />
              </div>
            </div>
            {/* Edit on GitHub link */}
            <div className="mt-6">
              <a
                href={`https://github.com/mdresch/my-portfolio-menno/edit/master/content/blog/${post.slug}.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-gray-500 hover:text-blue-600 underline"
                title="Edit this post on GitHub"
              >
                Edit this post on GitHub
              </a>
            </div>
          </footer>

          {/* Comments Section */}
          {post.slug && (
            <Giscus
              slug={post.slug}
              repositoryId="R_kgDOLUkqzw"
              category="Blog Comments"
              categoryId="DIC_kwDOLUkqz84CdYVt"
            />
          )}
          
        </article>
        
        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <MostViewedPosts allPosts={allPosts || []} />
          <div className="sticky top-8">
            {/* Author Info */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-medium mb-2">About the Author</h3>
              <p className="text-gray-600 text-sm">
                {post.author || 'Anonymous'} is a passionate developer sharing knowledge and insights about web development and technology.
              </p>
            </div>
            
            {/* Table of Contents */}
            {headings.length > 0 && (
              <TableOfContents headings={headings} />
            )}
            
            {/* Share Button */}
            <div className="mt-8">
              <ShareButton 
                url={typeof window !== 'undefined' ? window.location.href : ''} 
                title={post.title}
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {post.coverImage && (
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={post.coverImage}
                alt={post.title}
                className="object-cover w-full h-48"
              />
            </div>
          )}
          <div className="p-6">
            {post.categories && post.categories.length > 0 && (
              <div className="flex gap-2 mb-3">
                {post.categories.map((category) => (
                  <Link
                    key={category}
                    href={`/blog/category/${category.toLowerCase()}`}
                    className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
            <h2 className="text-xl font-semibold mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{formatDate(post.date)}</span>
              {post.author && <span>{post.author}</span>}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}