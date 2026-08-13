import { getAllProjects, renderMarkdown } from "../../../lib/markdown";
import { escapeXml } from "../../../lib/rss";

export async function GET() {
  const projects = await getAllProjects();
  const baseUrl = "https://my-portfolio-menno.vercel.app";
  const authorName = "Menno Drescher";
  const authorEmail = "menno.drescher@gmail.com"; // Update with your email

  // Dated projects first (newest first), undated ones after, in their existing order
  const sortedProjects = [...projects].sort((a, b) => {
    const aDate = a.frontmatter.datePublished;
    const bDate = b.frontmatter.datePublished;
    if (aDate && bDate) return new Date(bDate).getTime() - new Date(aDate).getTime();
    if (aDate) return -1;
    if (bDate) return 1;
    return 0;
  });

  const items = await Promise.all(sortedProjects.map(async (project) => {
    const { frontmatter, content, slug } = project;
    const projectUrl = `${baseUrl}/projects/${slug}`;
    const pubDate = frontmatter.datePublished
      ? `\n      <pubDate>${new Date(frontmatter.datePublished).toUTCString()}</pubDate>`
      : "";
    const categories = (frontmatter.technologies || [])
      .map((tech) => `<category>${escapeXml(tech)}</category>`)
      .join("\n      ");
    const bodyHtml = content.trim() ? await renderMarkdown(content) : "";
    const contentEncoded = bodyHtml
      ? `\n      <content:encoded><![CDATA[${bodyHtml}

<hr>
<p>Originally published at <a href="${projectUrl}">${projectUrl}</a></p>]]></content:encoded>`
      : "";

    return `
    <item>
      <title>${escapeXml(frontmatter.title)}</title>
      <link>${projectUrl}</link>
      <description><![CDATA[${frontmatter.description || ""}]]></description>${pubDate}
      <guid isPermaLink="true">${projectUrl}</guid>
      <dc:creator>${escapeXml(authorName)}</dc:creator>${contentEncoded}
      ${categories}
    </item>`;
  }));

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Menno Drescher's Projects</title>
    <link>${baseUrl}/projects</link>
    <description>Portfolio projects by Menno Drescher.</description>
    <language>en</language>
    <managingEditor>${authorEmail} (${authorName})</managingEditor>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/projects/feed.xml" rel="self" type="application/rss+xml"/>
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
