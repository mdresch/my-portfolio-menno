import { Metadata } from 'next';
import { notFound } from 'next/navigation';
// Removed unused Link import
import { getAllPostIds, getPostDataFromFile } from '@/lib/markdown';
import PostNavigation from '@/components/PostNavigation';
// import Comments from '@/components/Comments'; // Removed as the module is missing
import BlogPost from '@/components/blog/BlogPost';
import GiscusComments from '@/components/comments/Giscus';

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

  // Fetch all posts to pass to PostNavigation
  const allPosts = await getAllPostIds();
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found'
    };
  }

  // Define base URL - should match the one in layout.tsx
  const baseUrl = 'https://my-portfolio-menno.vercel.app/';
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Menno Drescher'],
      tags: post.categories,
      url: postUrl,
      images: [
        {
          url: post.coverImage || `${baseUrl}/images/showcase-dataviz.jpg`, 
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [(post as any).coverImage || `${baseUrl}/images/showcase-dataviz.jpg`],
    },
    alternates: {
      canonical: postUrl,
    },
    keywords: [...post.categories, 'blog', 'web development', 'Menno Drescher'],
  };
}

// Update the page component
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Make sure to await the params
  const slug = await params.slug;
  
  const post = await getPostDataFromFile(slug);
  const allPosts = await getAllPostIds(); // Fetch all posts
  
  if (!post) {
    notFound();
  }
  
  return (
    <div>
      <PostNavigation currentSlug={params.slug} allPosts={allPosts || []} />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <BlogPost post={post} />
        <PostNavigation currentSlug={params.slug} allPosts={allPosts} />
        <GiscusComments 
          slug={params.slug} 
          repositoryId="your-repository-id" 
          category="your-category" 
          categoryId="your-category-id" 
        />
        {/* Removed Comments component as it is not available */}
      </article>
    </div>
  );
}
