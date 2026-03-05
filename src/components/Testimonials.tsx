"use client";

import React, { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  relationship: string;
  text: string;
  avatar: string;
  linkedIn?: string;
  rating: number;
  category: "client" | "colleague" | "manager";
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah van den Berg",
    title: "HR Director",
    company: "TechCorp Netherlands",
    relationship: "Client – HCM Implementation Project",
    text: "Menno guided our entire HCM system migration with exceptional professionalism. His ability to translate complex technical requirements into business solutions saved us months of effort. The new system increased our HR team's efficiency by 40% and Menno's post-launch support was outstanding.",
    avatar: "SB",
    rating: 5,
    category: "client",
  },
  {
    id: 2,
    name: "Mark de Vries",
    title: "CTO",
    company: "FinanceFlow B.V.",
    relationship: "Client – Full-Stack Development",
    text: "Working with Menno on our financial dashboard was a game-changer. He brought both technical depth and strategic clarity to the project. His C#/.NET and React expertise, combined with a clear understanding of our business needs, delivered a product that exceeded our expectations on time and within budget.",
    avatar: "MV",
    rating: 5,
    category: "client",
  },
  {
    id: 3,
    name: "Linda Hofmann",
    title: "Senior Project Manager",
    company: "CBA Consult",
    relationship: "Direct Colleague",
    text: "Menno is the rare professional who excels at both the technical and human sides of consulting. He has an incredible ability to simplify complex systems for stakeholders and consistently delivers high-quality results. A trusted partner on every project we've shared.",
    avatar: "LH",
    rating: 5,
    category: "colleague",
  },
  {
    id: 4,
    name: "Thomas Bakker",
    title: "VP of Operations",
    company: "Retail Solutions Group",
    relationship: "Client – Azure Cloud Migration",
    text: "Menno led our Azure cloud migration from inception to deployment. His methodical approach to change management and thorough documentation meant our team adopted the new infrastructure with minimal disruption. I'd recommend Menno to any organization undertaking a digital transformation.",
    avatar: "TB",
    rating: 5,
    category: "client",
  },
  {
    id: 5,
    name: "Emma Visser",
    title: "Lead Developer",
    company: "InnovateTech",
    relationship: "Peer – Open Source Collaboration",
    text: "Menno consistently contributes thoughtful, well-documented code. His attention to performance and code quality raises the bar for the entire team. Beyond the technical skills, his mentorship approach makes him an invaluable collaborator.",
    avatar: "EV",
    rating: 5,
    category: "colleague",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
    <div className="flex items-start gap-4 mb-6">
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
        {testimonial.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
          {testimonial.name}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
          {testimonial.title}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.company}</p>
        <StarRating rating={testimonial.rating} />
      </div>
    </div>

    <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed italic flex-1 mb-4">
      &ldquo;{testimonial.text}&rdquo;
    </blockquote>

    <div className="mt-auto">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
        {testimonial.relationship}
      </span>
    </div>
  </div>
);

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<"all" | "client" | "colleague">("all");

  const filtered =
    activeFilter === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeFilter);

  return (
    <section
      id="testimonials-section"
      className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6 border border-blue-200/50 dark:border-blue-700/50">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Social Proof
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Trusted by clients and respected by peers — real feedback from the people I&apos;ve had
            the privilege to work with.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(["all", "client", "colleague"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500"
              }`}
            >
              {filter === "all" ? "All Testimonials" : filter === "client" ? "Clients" : "Colleagues"}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            View more recommendations and endorsements on LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/in/mennodrescher/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A66C2] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#004182] transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            View LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
