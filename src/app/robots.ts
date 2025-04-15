// filepath: c:\Users\menno\CascadeProjects\personal-website\src\app\robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: 'https://my-portfolio-menno.vercel.app/sitemap.xml', // Replace with your actual domain
  };
}