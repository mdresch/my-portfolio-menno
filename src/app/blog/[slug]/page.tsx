import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostData, getAllPostIds, getSortedPostsData } from '@/lib/markdown';
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

export async function generateStaticParams() {
  const paths = await getAllPostIds();
  return paths.map(path => ({
    slug: path.params.slug
  }));
}

interface GenerateMetadataProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Base URL for canonical links - should be updated in production
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://my-portfolio-menno.vercel.app/';

export const generateMetadata = async ({ params }: GenerateMetadataProps): Promise<Metadata> => {
  const post = await getPostData(params.slug);
  const canonicalUrl = `${BASE_URL}/blog/${params.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: 'article',
      article: {
        publishedTime: post.date,
        authors: [post.author],
        tags: post.categories
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt
    }
  };
};

export default async function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  if (!params.slug) {
    notFound();
  }

  const post = await getPostData(params.slug);
  const allPosts = await getSortedPostsData();

  return (
    <main className="container mx-auto px-4 py-8">
      <ReadingProgress />

      <div className="flex gap-8 max-w-6xl mx-auto">
        {/* Table of Contents - Desktop */}
        <aside className="hidden lg:block w-64 sticky top-8 h-fit">
          <TableOfContents contentId="post-content" />
        </aside>

        <div className="flex-1 max-w-3xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <Link 
              href="/blog"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-4">
              <PostReactions repo="mdresch/my-portfolio-menno" term={params.slug} />
              <JumpToComments />
              <ShareButton 
                title={post.title}
                url={typeof window !== 'undefined' ? window.location.href : ''}
              />
            </div>
          </div>

          <article className="prose lg:prose-xl mx-auto">
            <h1>{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-500 mb-4 not-prose">
              <time>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
              <span>•</span>
              <CommentCount repo="mdresch/my-portfolio-menno" term={params.slug} />
            </div>
            <div className="flex flex-wrap gap-2 mb-8 not-prose">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Table of Contents - Mobile */}
            <div className="lg:hidden mb-8">
              <TableOfContents contentId="post-content" />
            </div>

            <div id="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          <div className="mt-8 flex justify-between items-center">
            <PostReactions repo="mdresch/my-portfolio-menno" term={params.slug} />
            <SocialShare 
              url={typeof window !== 'undefined' ? window.location.href : ''}
              title={post.title}
            />
          </div>

          <PostNavigation currentSlug={params.slug} allPosts={allPosts} />
          <RelatedPosts currentPost={post} allPosts={allPosts} />
          <WebMentions url={typeof window !== 'undefined' ? window.location.href : ''} />
          
          {/* Client component that handles AI recommendations */}
          <BlogPostClient
            post={post}
            allPosts={allPosts}
          />
          <Comments 
            repo="mdresch/my-portfolio-menno"
            term={params.slug}
            label="Comments"
            theme="light"
          />
        </div>
      </div>
    </main>
  );
}
