# Home

### **File Overview**

* **Entry Point:** The file defines the default export — a functional component (`Home`) — that renders the main page of your application.
*   **Structured Data Injection:** At the top of the component, it imports helper functions (`generatePersonStructuredData` and `generateWebsiteStructuredData`) from your structured-data library. These functions generate JSON-LD scripts used for SEO and providing search engines detailed information about:

    * The person behind the portfolio.
    * The website itself.

    These JSON objects are then embedded directly into the page via `<script>` tags with `type="application/ld+json"`, using `dangerouslySetInnerHTML` to inject the JSON safely.
* **Base URL Definition:** A constant `baseUrl` is defined to ensure consistency in URLs (set to `https://my-portfolio-menno.vercel.app/`). This is used by the structured data generating functions.

### **Main Content Layout**

* **Header Section:** The component renders a header inside a `<main>` element that is centered and padded:
  * A large, bold heading ("Welcome to My Portfolio") welcomes visitors.
  * A tagline ("Software Developer | Problem Solver | Tech Enthusiast") provides a quick snapshot of your professional identity.
* **Overview Sections in a Grid Layout:** There’s a two-column grid that highlights:
  * **What I Do:** A section describing your specialization in building modern, user-friendly web applications.
  * **Featured Skills:** A dynamically generated list of skills (e.g., React, TypeScript, Next.js, Node.js, Tailwind CSS), each rendered as a styled badge.
* **Call to Action:** A prominent button labeled "View My Projects" directs visitors to another page where they can explore your work in greater detail.

### **Additional Features**

* **GitHub Activity Section:** Below the main content, there is a dedicated section that integrates a `GitHubActivity` component. This component is likely responsible for displaying your recent GitHub contributions or project updates, further showcasing your active involvement in development.

### **Why This Setup is Effective**

* **SEO-Friendly:** By injecting structured data (JSON-LD), you ensure that search engines understand both your personal brand and your website. This improves visibility and may positively influence search rankings.
* **Dynamic and Responsive Design:** The use of utility classes (from Tailwind CSS, for example) ensures a responsive layout that adapts to different screen sizes.
* **Modular and Scalable Architecture:** By separating concerns (using components like `GitHubActivity` and utility functions for structured data), the codebase remains maintainable and scalable.
* **Interactive User Experience:** With clear calls to action (like the "View My Projects" button) and a focus on engaging content, visitors are encouraged to explore further, creating an interactive and dynamic experience.

In summary, this file is the core entry point for your portfolio, setting up both the visual layout and the technical SEO optimizations necessary for a compelling web presence. It seamlessly blends content, style, and functionality to tell your story while showcasing your skills and projects.

<figure><img src="../.gitbook/assets/Screenshot_29-4-2025_111254_localhost.jpeg" alt=""><figcaption></figcaption></figure>

<pre class="language-typescript" data-title="/src/app/page.tsx" data-line-numbers><code class="lang-typescript">import GitHubActivity from '@/components/GitHubActivity';
import { generatePersonStructuredData, generateWebsiteStructuredData } from '@/lib/structured-data';

export default function Home() {
<strong>  // Define base URL - should match the one in layout.tsx
</strong>  const baseUrl = 'https://my-portfolio-menno.vercel.app/';
  
  // Generate structured data JSON-LD scripts
  const personJsonLd = generatePersonStructuredData(baseUrl);
  const websiteJsonLd = generateWebsiteStructuredData(baseUrl);
  
  return (
    &#x3C;>
      &#x3C;script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      &#x3C;script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      &#x3C;main className="container mx-auto px-4 py-16">
        &#x3C;div className="max-w-4xl mx-auto">
          &#x3C;div className="text-center mb-16">
            &#x3C;h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio&#x3C;/h1>
            &#x3C;p className="text-xl text-gray-600">
              Software Developer | Problem Solver | Tech Enthusiast
            &#x3C;/p>
          &#x3C;/div>

          &#x3C;div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            &#x3C;div className="bg-white p-6 rounded-lg shadow-lg">
              &#x3C;h2 className="text-2xl font-semibold mb-4">What I Do&#x3C;/h2>
              &#x3C;p className="text-gray-600">
                I specialize in building modern web applications using cutting-edge technologies.
                My focus is on creating clean, efficient, and user-friendly solutions.
              &#x3C;/p>
            &#x3C;/div>
            &#x3C;div className="bg-white p-6 rounded-lg shadow-lg">
              &#x3C;h2 className="text-2xl font-semibold mb-4">Featured Skills&#x3C;/h2>
              &#x3C;div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS'].map((skill) => (
                  &#x3C;span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  &#x3C;/span>
                ))}
              &#x3C;/div>
            &#x3C;/div>
          &#x3C;/div>

          &#x3C;div className="text-center">
            &#x3C;a
              href="/projects"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Projects
            &#x3C;/a>
          &#x3C;/div>
        &#x3C;/div>

        &#x3C;section className="py-12 bg-white">
          &#x3C;div className="container mx-auto px-4">
            &#x3C;GitHubActivity />
          &#x3C;/div>
        &#x3C;/section>
      &#x3C;/main>
    &#x3C;/>
  );
}
</code></pre>
