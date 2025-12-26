import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Seeker Features | Professional Career Development Tools",
  description: "Discover powerful tools to build your professional profile, expand your network, and stay ahead with industry trends. Perfect for job seekers looking to create a compelling online presence.",
  keywords: ["job seeker tools", "professional profile", "career development", "networking", "industry trends", "resume builder"],
  openGraph: {
    title: "Job Seeker Features | Professional Career Development Tools",
    description: "Discover powerful tools to build your professional profile, expand your network, and stay ahead with industry trends.",
    type: "website",
  },
};

export default function JobSeekerFeaturesPage() {
  const features = [
    {
      icon: "👤",
      title: "Profile Builder",
      description: "Create a comprehensive professional profile with easy-to-use forms and guided completion.",
      benefits: [
        "Step-by-step profile creation",
        "Professional summary guidance",
        "Skills assessment and visualization",
        "Experience and education tracking"
      ],
      href: "/job-seeker?tab=profile"
    },
    {
      icon: "🤝",
      title: "Networking Hub",
      description: "Build meaningful professional connections efficiently with smart networking tools.",
      benefits: [
        "Contact management system",
        "Networking event discovery",
        "Connection tracking and follow-up",
        "Professional networking tips"
      ],
      href: "/job-seeker?tab=networking"
    },
    {
      icon: "📈",
      title: "Industry Trends",
      description: "Stay ahead with the latest industry developments, skill trends, and market insights.",
      benefits: [
        "Real-time industry news",
        "Skill demand analytics",
        "Job market insights",
        "Personalized trend recommendations"
      ],
      href: "/job-seeker?tab=trends"
    },
    {
      icon: "✅",
      title: "Completion Guide",
      description: "Get personalized guidance to optimize your professional presence and increase visibility.",
      benefits: [
        "Profile completion scoring",
        "Priority action recommendations",
        "Professional optimization tips",
        "Achievement tracking"
      ],
      href: "/job-seeker?tab=guide"
    }
  ];

  const testimonials = [
    {
      name: "Alexandra Thompson",
      role: "Software Engineer",
      company: "Tech Corp",
      quote: "The profile builder helped me create a compelling professional presence that landed me my dream job. The industry trends feature kept me ahead of the curve.",
      avatar: "👩‍💻"
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Manager",
      company: "Growth Inc",
      quote: "The networking hub transformed how I connect with industry professionals. I've built meaningful relationships that advanced my career.",
      avatar: "👨‍💼"
    },
    {
      name: "Sarah Chen",
      role: "Data Scientist",
      company: "Analytics Pro",
      quote: "The completion guide gave me clear steps to improve my profile. Within weeks, I was getting more interview requests.",
      avatar: "👩‍🔬"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Accelerate Your Career Journey
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Professional tools designed for job seekers who want to stand out, connect meaningfully, and stay ahead of industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/job-seeker"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
              </Link>
              <Link
                href="#features"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive suite of tools addresses every aspect of your job search journey, from profile creation to industry networking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Try {feature.title}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Job Seekers Choose Our Platform
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of professionals who have accelerated their careers with our comprehensive job seeker tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Fast & Efficient
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Streamlined tools designed for busy professionals. Create a compelling profile in minutes, not hours.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Personalized Guidance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                AI-powered recommendations and personalized tips based on your industry and career goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Data-Driven Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time market data and industry trends to keep you ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hear from professionals who transformed their careers with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our comprehensive job seeker platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/job-seeker"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Building Your Profile
            </Link>
            <Link
              href="/signup"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}