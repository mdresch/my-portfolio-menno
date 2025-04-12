import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostData, getAllPostIds, getSortedPostsData, getPostDataFromFile } from '@/lib/markdown';
import ShareButton from '@/components/ShareButton';
import TableOfContents from '@/components/TableOfContents';
import RelatedPosts from '@/components/RelatedPosts';
import ReadingProgress from '@/components/ReadingProgress';
import PostNavigation from '@/components/PostNavigation';
import Comments from '@/components/Comments';
import CommentCount from '@/components/CommentCount';
import JumpToComments from '@/components/JumpToComments';
import SocialShare from '@/components/SocialShare';
import PostReactions from '@/components/PostReactions';
import WebMentions from '@/components/WebMentions';
import BlogPostClient from '@/components/BlogPostClient';
import HashnodeCrossPost from '@/components/HashnodeCrossPost';
import BlogPost from '@/components/blog/BlogPost';

// Generate static paths at build time
export async function generateStaticParams() {
  const paths = await getAllPostIds();
  return paths;
}

// Update the metadata function
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Make sure to await the params
  const slug = await params.slug;
  
  const post = await getPostDataFromFile(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found'
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Anonymous'],
      tags: post.categories
    }
  };
}

// Update the page component
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Make sure to await the params
  const slug = await params.slug;
  
  const post = await getPostDataFromFile(slug);
  
  if (!post) {
    notFound();
  }
  
  return <BlogPost post={post} />;
}
