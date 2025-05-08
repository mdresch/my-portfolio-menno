'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InteractiveRiskMap from '@/components/risk/InteractiveRiskMap'; // Adjust path

export default function RiskOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Risk Analysis & Reports</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors">
          Interactive visualizations and in-depth analysis of financial, geopolitical, and market risks
        </p>
        <div className="h-1 w-24 bg-blue-600 dark:bg-blue-500"></div>
      </header>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Featured Risk Analysis</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
              Our risk analysis reports provide in-depth assessments of market trends, geopolitical developments, and financial
              stability concerns. Each report includes interactive data visualizations to help you understand complex risk factors.
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Real-time data visualizations
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Expert analysis and commentary
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Scenario-based risk modeling
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Downloadable datasets
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 relative overflow-hidden border border-blue-100 dark:border-blue-900/50">
            <div className="absolute right-0 top-0 w-32 h-32 bg-blue-100 dark:bg-blue-800/20 rounded-full transform translate-x-8 -translate-y-8"></div>
            <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-100 dark:bg-blue-800/20 rounded-full transform -translate-x-8 translate-y-8"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 transition-colors">Latest Update</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors">May 8, 2025</p>
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2 transition-colors">
                Canadian Financial Stability Report—2025: Navigating a Trade War
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                Analysis of how the Canadian financial system is responding to US trade policy uncertainty and market volatility in 2025.
              </p>
              <Link 
                href="/risk/canadian-financial-stability" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                View Interactive Report
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Risk Reports Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Canadian Financial Stability */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <Link href="/risk/canadian-financial-stability">
              <div className="relative h-48">
                <Image
                  src="/images/showcase-dataviz.jpg"
                  alt="Canadian Financial Stability Report"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Financial Risk</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">May 8, 2025</span>
              </div>
              <Link href="/risk/canadian-financial-stability">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Canadian Financial Stability Report—2025</h3>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Analysis of how the Canadian financial system is responding to US trade policy uncertainty and market volatility.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">Trade War</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">Banking</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">Market Volatility</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Global Risks */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-lg text-gray-400 dark:text-gray-500">Coming Soon</div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Global Risk</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Expected June 2025</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Global Risks 2025: A World of Growing Divisions</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Comprehensive analysis of global geopolitical, economic, societal, and technological risks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">Geopolitical</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">Climate</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">Technology</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Legal Payment Risks */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-lg text-gray-400 dark:text-gray-500">Coming Soon</div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Regulatory Risk</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Expected July 2025</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Legal Payment Tender Risks UK 2025</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Analysis of regulatory changes affecting payment systems and legal tender in the UK.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">Regulatory</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">Payments</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">Legal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Risk Assessment Methodology</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          Our risk reports use a comprehensive methodology that combines quantitative data analysis with qualitative expert assessment.
          Each report includes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Data Sources</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Central bank financial stability reports</li>
              <li>Market data from major exchanges and data providers</li>
              <li>Economic indicator reports from statistical agencies</li>
              <li>Industry surveys and expert interviews</li>
              <li>Academic research and policy papers</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Analytical Framework</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              <li>Risk identification through expert consultation</li>
              <li>Likelihood assessment based on statistical models</li>
              <li>Impact evaluation across economic sectors</li>
              <li>Interconnection analysis between risk factors</li>
              <li>Scenario development for future planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-50 dark:bg-neutral-900/50 rounded-lg p-6 border border-gray-200 dark:border-gray-800 transition-colors">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Subscribe to Risk Updates</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            Stay informed about the latest risk reports and analysis. Subscribe to receive notifications when new reports are published.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-grow dark:bg-neutral-800 dark:text-white transition-colors"
            />
            <button
              type="button"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            By subscribing, you agree to receive email communications. You can unsubscribe at any time.
          </p>
        </div>
      </section>

      <section id="interactive-map" className="my-12">
         <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Regional Risk Hotspots</h2>
         <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
           Explore hypothetical top risks based on the Global Risk Management Survey regions by hovering over representative countries on the map. (Data is illustrative).
         </p>
         <InteractiveRiskMap />
      </section>

       {/* Link back to home */}
       <div className="mt-12 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}