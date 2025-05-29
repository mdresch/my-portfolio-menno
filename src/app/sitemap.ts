// filepath: c:\Users\menno\CascadeProjects\personal-website\src\app\sitemap.ts
import { MetadataRoute } from "next";
import path from "path";
import fs from "fs";

// Get all blog post slugs
function getBlogSlugs() {
  const contentDir = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(contentDir);
  return filenames.map(filename => {
    return filename.replace(/\.md$/, "");
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Your site URL - replace with actual domain
  const baseUrl = "https://my-portfolio-menno.vercel.app/";
  
  // Get all blog slugs
  const blogSlugs = getBlogSlugs();

  // Static routes
  const staticRoutes = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 }
  ];

  // Blog routes with dynamic slugs
  const blogRoutes = blogSlugs.map(slug => {
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6
    };
  });

  return [...staticRoutes, ...blogRoutes];
}