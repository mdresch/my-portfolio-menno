import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostIds, getPostDataFromFile, getSortedPostsData } from "../../../lib/markdown";
import PostNavigation from "../../../components/PostNavigation";
import BlogPost from "../../../components/blog/BlogPost";
import GiscusComments from "../../../components/comments/Giscus";

// Define proper types for App Router
interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths at build time
export async function generateStaticParams() {
  const paths = await getAllPostIds();
  return paths;
}

// Update the metadata function
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostDataFromFile(slug);
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found"
    };
  }
  // Define base URL - should match the one in layout.tsx
  const baseUrl = "https://my-portfolio-menno.vercel.app/";
  const postUrl = `${baseUrl}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.categories,
      url: postUrl,
      images: [post.coverImage || `${baseUrl}/images/showcase-dataviz.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage || `${baseUrl}/images/showcase-dataviz.jpg`],
    },
    alternates: {
      canonical: postUrl,
    },
    keywords: [...post.categories, "blog", "web development", "Menno Drescher"],
  };
}

// Update the page component
export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPostDataFromFile(slug);
  // Fetch all posts for navigation
  const allPosts = await getSortedPostsData();
  if (!post) {
    notFound();
  }
  return (
    <div>
      <PostNavigation currentSlug={slug} allPosts={allPosts} />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <BlogPost post={post} />
        <PostNavigation currentSlug={slug} allPosts={allPosts} />
        <GiscusComments 
          slug={slug} 
          repositoryId="your-repository-id" 
          category="your-category" 
          categoryId="your-category-id" 
        />
      </article>
    </div>
  );
};
