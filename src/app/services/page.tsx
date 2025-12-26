import { prisma } from "../../lib/prisma";
import Link from "next/link";
import { CheckCircleIcon, ClockIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

// Helper to normalize service data
function normalizeService(service: any) {
  return {
    id: service.id,
    title: service.title,
    description: service.description,
    category: service.category,
    features: service.features || [],
    duration: service.duration,
    priceRange: service.priceRange,
    isActive: service.isActive,
  };
}

export default async function ServicesPage() {
  let services = [];
  
  try {
    if (process.env.DATABASE_URL) {
      const dbServices = await prisma.service.findMany({
        where: { isActive: true },
        orderBy: { order: "asc" },
      });
      services = dbServices.map(normalizeService);
    }
  } catch (error) {
    console.error("Error fetching services:", error);
  }

  // Fallback services if database is empty
  if (services.length === 0) {
    services = [
      {
        id: 1,
        title: "Full-Stack Development",
        description: "End-to-end web application development using modern technologies like Next.js, React, and Node.js.",
        category: "development",
        features: ["Custom Web Applications", "API Development", "Database Design", "Performance Optimization"],
        duration: "2-6 months",
        priceRange: "€5,000 - €25,000",
        isActive: true,
      },
      {
        id: 2,
        title: "Technical Consulting",
        description: "Strategic technology guidance and architecture planning for your business needs.",
        category: "consulting",
        features: ["Technology Assessment", "Architecture Planning", "Code Review", "Team Mentoring"],
        duration: "1-3 months",
        priceRange: "€100 - €200/hour",
        isActive: true,
      },
      {
        id: 3,
        title: "AI Integration",
        description: "Implement AI and machine learning solutions to enhance your business processes.",
        category: "ai",
        features: ["RAG Chatbots", "Data Analysis", "Process Automation", "AI Strategy"],
        duration: "1-4 months",
        priceRange: "€3,000 - €15,000",
        isActive: true,
      },
    ];
  }

  const categoryColors = {
    development: "bg-blue-100 text-blue-800",
    consulting: "bg-green-100 text-green-800",
    ai: "bg-purple-100 text-purple-800",
    design: "bg-pink-100 text-pink-800",
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Professional Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Helping businesses leverage modern technology to achieve their goals. 
          From full-stack development to AI integration, I provide comprehensive solutions 
          tailored to your specific needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  categoryColors[service.category as keyof typeof categoryColors] || 
                  "bg-gray-100 text-gray-800"
                }`}
              >
                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>

            {/* Features */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">What's Included:</h4>
              <ul className="space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Duration and Price */}
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              {service.duration && (
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {service.duration}
                </div>
              )}
              {service.priceRange && (
                <div className="flex items-center">
                  <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                  {service.priceRange}
                </div>
              )}
            </div>

            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center block"
            >
              Get Quote
            </Link>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss how I can help bring your ideas to life. 
          Get in touch for a free consultation and project estimate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Start a Project
          </Link>
          <Link
            href="/projects"
            className="bg-white text-blue-600 py-3 px-6 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}