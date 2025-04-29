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
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl text-gray-600">
              Software Developer | Problem Solver | Tech Enthusiast
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
              <p className="text-gray-600">
                I specialize in building modern web applications using cutting-edge technologies.
                My focus is on creating clean, efficient, and user-friendly solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Featured Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
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
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Projects
            </a>
          </div>
        </div>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <GitHubActivity />
          </div>
        </section>
      </main>
    </>
  );
}
