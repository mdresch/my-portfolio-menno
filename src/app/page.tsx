import GitHubActivity from '@/components/GitHubActivity';
import { generatePersonStructuredData, generateWebsiteStructuredData } from '@/lib/structured-data';

export default function Home() {
  // Define base URL - should match the one in layout.tsx
  const baseUrl = 'https://my-portfolio-menno.vercel.app/';
  
  // Generate structured data JSON-LD scripts
  const personJsonLd = generatePersonStructuredData(baseUrl);
  const websiteJsonLd = generateWebsiteStructuredData(baseUrl);
  
  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <main className="container mx-auto px-4 py-16 min-h-screen bg-cyan-50/50 dark:bg-neutral-950 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-cyan-800 dark:text-cyan-200 transition-colors">Welcome to My Portfolio</h1>
            <p className="text-xl text-cyan-600 dark:text-cyan-300 transition-colors">
              Software Developer | Problem Solver | Tech Enthusiast
            </p>
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
                {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS'].map((skill) => (
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
