import GitHubActivity from '@/components/GitHubActivity';
import { generatePersonStructuredData, generateWebsiteStructuredData } from '@/lib/structured-data';

export default function Home() {
  // Define base URL - should match the one in layout.tsx
  const baseUrl = 'https://my-portfolio-menno.vercel.app/';
  
  // Generate structured data JSON-LD scripts
  // const personJsonLd = generatePersonStructuredData(baseUrl);
  // const websiteJsonLd = generateWebsiteStructuredData(baseUrl);
  
  return (
    <>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      {/**
       * Next.js 13+ does not allow <script> tags directly in the body of a component.
       * Use <Script> from 'next/script' for structured data or move these to _document.js if needed.
       */}
      {/* <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      /> */}
      <main className="container mx-auto px-4 py-16 min-h-screen bg-cyan-50/50 dark:bg-neutral-950 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold mb-2 text-cyan-800 dark:text-cyan-200 transition-colors">Menno Drescher&apos;s Full-Stack Portfolio</h1>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-700 dark:text-cyan-300 transition-colors">Showcasing projects built with C#, .NET, React, and Azure</h2>
            <p className="text-lg text-cyan-600 dark:text-cyan-300 mb-6 transition-colors">
              I'm a Full-Stack Developer passionate about building robust and scalable web applications. This site showcases my work using technologies like <strong>C#/.NET</strong>, <strong>React</strong>, and cloud platforms such as <strong>Azure</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 homepage-links">
              <a href="https://github.com/mdresch" className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition-colors" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                View on GitHub
              </a>
              <a href="https://www.linkedin.com/in/mennodrescher" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-lg shadow transition-colors" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
                Connect on LinkedIn
              </a>
              <a href="https://iq4fun.gitbook.io/my-portfolio-menno" className="inline-flex items-center gap-2 bg-cyan-100 hover:bg-cyan-200 text-cyan-800 font-semibold px-5 py-2 rounded-lg shadow transition-colors" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 2H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H8V4h11v16zM6 6H4v16c0 1.1.9 2 2 2h12v-2H6V6z"/></svg>
                Technical Documentation
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-neutral-900/80 backdrop-blur-md p-6 rounded-lg shadow-md border border-cyan-50 dark:border-cyan-900 transition-colors">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-800 dark:text-cyan-200">What I Do</h2>
              <p className="text-cyan-600 dark:text-cyan-300">
                I specialize in building modern web applications using cutting-edge technologies.
                My focus is on creating clean, efficient, and user-friendly solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-900/80 backdrop-blur-md p-6 rounded-lg shadow-md border border-cyan-50 dark:border-cyan-900 transition-colors">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-800 dark:text-cyan-200">Featured Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'C#', '.NET', 'Azure'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-cyan-50 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200 px-3 py-1 rounded-full text-sm border border-cyan-100 dark:border-cyan-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/projects"
              className="inline-block bg-cyan-500 dark:bg-cyan-700 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 dark:hover:bg-cyan-800 transition-colors shadow-md"
            >
              View My Projects
            </a>
          </div>
        </div>

        <section className="py-12 bg-white dark:bg-neutral-900/80 backdrop-blur-md transition-colors mt-16 rounded-lg shadow-md border border-cyan-50 dark:border-cyan-900">
          <div className="container mx-auto px-4">
            <GitHubActivity />
          </div>
        </section>
      </main>
    </>
  );
}
