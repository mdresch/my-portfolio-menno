import { getSortedPostsData, getPostData } from "../../lib/markdown";

export async function GET() {
  const posts = await getSortedPostsData();
  const baseUrl = "https://my-portfolio-menno.vercel.app/";
  const authorName = "Menno Drescher";
  const authorEmail = "menno.drescher@gmail.com"; // Update with your email

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Menno Drescher's Blog</title>
    <link>${baseUrl}</link>
    <description>Personal blog about software development, tech, and more.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/images/logo.png</url>
      <title>Menno Drescher's Blog</title>
      <link>${baseUrl}</link>
    </image>
    ${await Promise.all(posts.map(async (post) => {
    // Get full post content for the feed
    const fullPost = await getPostData(post.slug);
    return `
    <item>
      <title>${post.title}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <dc:creator>${authorName}</dc:creator>
      <content:encoded><![CDATA[${fullPost.content}

<hr>
<p>Originally published at <a href="${baseUrl}/blog/${post.slug}">${baseUrl}/blog/${post.slug}</a></p>]]></content:encoded>
      ${post.categories
    .map((category) => `<category>${category}</category>`)
    .join("\n      ")}
    </item>`;
  }))}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
