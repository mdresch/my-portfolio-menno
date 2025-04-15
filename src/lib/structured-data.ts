// filepath: c:\Users\menno\CascadeProjects\personal-website\src\lib\structured-data.ts
export interface BlogPostStructuredData {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  image?: string;
}

export function generateBlogPostStructuredData(post: BlogPostStructuredData, baseUrl: string) {
  const articleUrl = `${baseUrl}/blog/${post.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    image: post.image || `${baseUrl}/images/showcase-dataviz.jpg`,
    url: articleUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Menno Drescher',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };
}

export function generatePersonStructuredData(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Menno Drescher',
    url: baseUrl,
    jobTitle: 'Software Developer',
    sameAs: [
      'https://github.com/mdresch', // Update with actual profiles
      'https://linkedin.com/in/menno.drescher',
      'https://twitter.com/mennodre'
    ],
  };
}

export function generateWebsiteStructuredData(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Menno Drescher',
    url: baseUrl,
    description: 'Personal portfolio showcasing my projects and skills as a software developer.',
  };
}

export interface ProjectStructuredData {
  name: string;
  description: string;
  url?: string;
  image?: string;
  datePublished?: string;
  technologies?: string[];
  category?: string;
}

export function generateProjectStructuredData(project: ProjectStructuredData, baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.name,
    description: project.description,
    codeRepository: project.url,
    datePublished: project.datePublished || new Date().toISOString(),
    image: project.image || `${baseUrl}/images/showcase-dataviz.jpg`,
    programmingLanguage: project.technologies || [],
    applicationCategory: project.category || 'WebApplication',
    author: {
      '@type': 'Person',
      name: 'Menno Drescher',
      url: baseUrl
    }
  };
}

export function generateBreadcrumbStructuredData(items: Array<{name: string, url: string}>, baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${baseUrl}${item.url}`
    }))
  };
}