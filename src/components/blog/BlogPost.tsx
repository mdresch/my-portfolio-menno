'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { BlogPost as BlogPostType } from '@/lib/markdown';
import ShareButton from '@/components/ShareButton';
import TableOfContents from '@/components/TableOfContents';
import ReadingProgress from '@/components/ReadingProgress';
import SocialShare from '@/components/SocialShare';
import PostReactions from '@/components/PostReactions';
import WebMentions from '@/components/WebMentions';
import Comments from '@/components/Comments';
import JumpToComments from '@/components/JumpToComments';
import BlogPostJsonLd from './BlogPostJsonLd';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const articleRef = useRef<HTMLElement>(null);

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
              
              <PostReactions postId={post.slug} />
            </div>
            
            <WebMentions postUrl={typeof window !== 'undefined' ? window.location.href : ''} />
          </footer>
          
          <JumpToComments />
          
          {/* Comments Section */}
          <div id="comments" className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Comments</h2>
            <Comments
              repo={process.env.NEXT_PUBLIC_GITHUB_REPO}
              postId={post.slug}
            />
          </div>
        </article>
        
        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
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