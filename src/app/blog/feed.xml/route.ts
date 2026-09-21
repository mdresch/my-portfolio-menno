import { getSortedPostsData, getPostData } from "../../../lib/markdown";
import { escapeXml } from "../../../lib/rss";

export async function GET() {
  const posts = await getSortedPostsData();
  const baseUrl = "https://my-portfolio-menno.vercel.app";
  const authorName = "Menno Drescher";
  const authorEmail = "menno.drescher@gmail.com"; // Update with your email

  const items = await Promise.all(posts.map(async (post) => {
    // Get full post content for the feed
    const fullPost = await getPostData(post.slug);
    const postUrl = `${baseUrl}/blog/${post.slug}`;
    return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${postUrl}</guid>
      <dc:creator>${escapeXml(authorName)}</dc:creator>
      <content:encoded><![CDATA[${fullPost?.content ?? ""}

<hr>
<p>Originally published at <a href="${postUrl}">${postUrl}</a></p>]]></content:encoded>
      ${post.categories
    .map((category) => `<category>${escapeXml(category)}</category>`)
    .join("\n      ")}
    </item>`;
  }));

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
    <managingEditor>${authorEmail} (${authorName})</managingEditor>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/images/logo.png</url>
      <title>Menno Drescher's Blog</title>
      <link>${baseUrl}</link>
    </image>
    ${items.join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
