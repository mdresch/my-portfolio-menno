'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function GlobalBusinessComplexityIndexPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/risk" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Risk Overview</span>
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Global Business Complexity Index</h1>
        <p className="text-gray-600 text-lg mb-6">
          Understand and navigate the regulatory, compliance, and operational challenges across global markets
        </p>
      </header>

      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">What is the Global Business Complexity Index?</h2>
          <p className="mb-4">
            The Global Business Complexity Index (GBCI) is a comprehensive analysis that ranks countries based on the 
            complexity of doing business in them. It evaluates multiple dimensions including regulatory frameworks, 
            tax policies, compliance requirements, and operational challenges that businesses face when establishing 
            or operating in different jurisdictions.
          </p>
          <p>
            This index serves as a crucial benchmarking tool for multinational corporations, investors, and policymakers 
            to understand the relative complexity of operating in various global markets, and to make more informed decisions 
            about international expansion and investment strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Methodology Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Methodology</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Discover how we analyze and rank countries based on multiple complexity factors including regulatory, fiscal, and operational dimensions.
            </p>
            <Link href="/risk/global-business-complexity-index/methodology" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Learn More →
            </Link>
          </div>

          {/* Rankings Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Country Rankings</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Explore the complete list of countries ranked by business complexity, from the most straightforward to the most challenging jurisdictions.
            </p>
            <Link href="/risk/global-business-complexity-index/rankings" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              View Rankings →
            </Link>
          </div>

          {/* Trends Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Trends & Insights</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Analyze year-over-year changes in business complexity and understand emerging global trends affecting the business environment.
            </p>
            <Link href="/risk/global-business-complexity-index/trends" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Explore Trends →
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Key Findings for 2025</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Top 5 Most Complex Jurisdictions</h3>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li className="text-gray-700">Brazil - Navigating complex tax regulations and bureaucratic processes</li>
                <li className="text-gray-700">France - Rigid labor laws and administrative requirements</li>
                <li className="text-gray-700">Indonesia - Challenging regulatory environment and frequent policy changes</li>
                <li className="text-gray-700">China - Complex market access restrictions and regulatory compliance</li>
                <li className="text-gray-700">Mexico - Intricate tax reporting and accounting standards</li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Top 5 Least Complex Jurisdictions</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li className="text-gray-700">Denmark - Streamlined digital processes and transparent regulations</li>
                <li className="text-gray-700">Hong Kong - Efficient business setup and administration</li>
                <li className="text-gray-700">Singapore - Straightforward compliance requirements and business-friendly policies</li>
                <li className="text-gray-700">United States - Relatively predictable regulatory environment despite state variations</li>
                <li className="text-gray-700">New Zealand - Simple incorporation process and transparent governance</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Regional Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* EMEA Region */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">EMEA</h3>
            <p className="text-gray-600 mb-4">
              European markets show diverse complexity levels with Northern European countries generally ranking as less complex, while France and Italy maintain high complexity positions.
            </p>
            <Link href="/risk/global-business-complexity-index/emea" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View EMEA Analysis →
            </Link>
          </div>

          {/* Americas Region */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Americas</h3>
            <p className="text-gray-600 mb-4">
              Brazil continues to be the most complex jurisdiction globally, while South American countries generally face higher complexity than their North American counterparts.
            </p>
            <Link href="/risk/global-business-complexity-index/americas" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Americas Analysis →
            </Link>
          </div>

          {/* APAC Region */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">APAC</h3>
            <p className="text-gray-600 mb-4">
              APAC presents stark contrasts, with Singapore and Hong Kong ranking among the least complex globally, while Indonesia and China maintain high positions in complexity.
            </p>
            <Link href="/risk/global-business-complexity-index/apac" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View APAC Analysis →
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Business Impact Assessment</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-6">
            Understanding complexity helps businesses anticipate challenges and allocate resources effectively when entering or operating in different markets. Explore how complexity impacts various business functions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Accounting & Tax</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Complex tax jurisdictions require specialized local expertise</li>
                <li>Higher frequency of regulatory changes demands constant vigilance</li>
                <li>Increased risk of non-compliance penalties in high-complexity markets</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Human Resources & Employment</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Rigid labor laws impact hiring flexibility and termination procedures</li>
                <li>Benefits requirements vary significantly across jurisdictions</li>
                <li>Employee data protection requirements increase administrative burden</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-2xl font-semibold mb-4">Need More Information?</h2>
          <p className="mb-4">
            Dive deeper into specific country profiles or request customized complexity assessments tailored to your industry and operational requirements.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Contact for Custom Analysis
          </Link>
        </div>
      </section>

      {/* Optional: Link back to main risk page */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-blue-600 hover:underline mr-4">
          ← Back to Risk Overview
        </Link>
      </div>
    </div>
  );
}