'use client';

import React from 'react';
import Link from 'next/link';
import { getCountriesByRegion, getComplexityColor } from '../../../../lib/riskData';
import EmeaComplexityMap from '../../../../components/risk/EmeaComplexityMap';

// Get EMEA country data
const emeaCountryData = getCountriesByRegion("EMEA");

export default function EmeaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/risk/global-business-complexity-index" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Global Business Complexity Index</span>
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">EMEA Regional Insights</h1>
        <p className="text-gray-600 text-lg mb-6">
          Business complexity analysis across Europe, Middle East, and Africa
        </p>
      </header>

      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Regional Overview</h2>
          <p className="text-gray-700 mb-4">
            The EMEA region presents a tale of contrasts in business complexity. Northern European countries consistently rank among the least complex globally, with streamlined digital processes and transparent regulatory frameworks. In contrast, Southern and Eastern European countries tend to have more complex administrative requirements, while Middle Eastern and African nations display significant variance reflecting their diverse economic development stages.
          </p>

          <div className="bg-blue-50 p-4 rounded-md mb-4">
            <h3 className="text-lg font-medium mb-2">Key Regional Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium">Average Complexity Score</p>
                <p className="text-gray-600">52/100</p>
              </div>
              <div>
                <p className="font-medium">Year-over-Year Change</p>
                <p className="text-green-600">-1.5 points</p>
              </div>
              <div>
                <p className="font-medium">Regional Variance</p>
                <p className="text-gray-600">Very High (48 points)</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700">
            Digital government transformation is a significant trend across the region, with Nordic countries leading globally in administrative efficiency, while many Middle Eastern and North African nations are making substantial investments to modernize their regulatory systems and reduce business complexity.
          </p>
        </div>

        {/* Complexity map integration */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">EMEA Complexity Visualization</h2>
          <p className="text-gray-600 mb-4">
            This map shows business complexity scores across the EMEA region. Hover over countries to see their complexity details.
          </p>
          <div className="h-[500px] w-full">
            <EmeaComplexityMap />
          </div>
        </div>

        {/* Top countries table */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4">EMEA Complexity Rankings</h2>
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Global Rank</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall Score</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Key Insight</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {emeaCountryData.map((country) => (
                <tr key={country.country} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">{country.rank}</td>
                  <td className="px-4 py-3 whitespace-nowrap font-medium">
                    <Link href={`/risk/global-business-complexity-index/country/${country.country.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline">
                      {country.country}
                    </Link>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(country.overall)}`}>
                      {country.overall}
                    </span>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell text-sm text-gray-600">{country.highlight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Regional Trends</h2>

          {/* Key trends section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Digital Transformation Gap</h3>
              <p className="text-gray-700 mb-3">
                A clear digital divide exists within the region, with Northern European countries achieving near-full digitalization of business administrative processes while parts of Southern, Eastern Europe, Middle East and Africa are at varying stages of digital transformation.
              </p>
              <p className="text-gray-700">
                Countries like Denmark and Estonia are global leaders in digital government services, creating exceptionally low complexity scores compared to regional averages.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Middle East Reform Initiatives</h3>
              <p className="text-gray-700 mb-3">
                Several Middle Eastern countries are implementing ambitious regulatory reforms to reduce business complexity as part of broader economic diversification strategies.
              </p>
              <p className="text-gray-700">
                The United Arab Emirates has made significant progress in streamlining business processes through digital government services and simplified regulatory frameworks.
              </p>
            </div>
          </div>

          {/* Report section */}
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-medium mb-3">Business Impact</h3>
            <p className="text-gray-700 mb-4">
              For organizations operating across the EMEA region, complexity variations create significant operational differences:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Consider shared service centers in low-complexity countries like Denmark for administrative operations</li>
              <li>Anticipate longer implementation timelines for regulatory changes in high-complexity countries like France and Italy</li>
              <li>Monitor Middle East regulatory reforms for potential expansion opportunities as complexity decreases</li>
              <li>Develop country-specific compliance strategies that account for local complexity factors</li>
            </ul>
            <p className="text-gray-700">
              Organizations that proactively adapt to these regional variations can gain competitive advantages through more efficient operations and reduced compliance risks.
            </p>
          </div>
        </div>
      </section>

      {/* Case study section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Regional Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium mb-3">France: Navigating Employment Complexity</h3>
            <div className="mb-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(81)}`}>
                Complexity Score: 81
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              France maintains one of the highest complexity scores globally, particularly in employment regulations. Companies operating in France face stringent labor laws, extensive administrative requirements, and complex collective bargaining processes.
            </p>
            <div className="bg-gray-50 p-4 rounded-md text-sm">
              <h4 className="font-medium mb-2">Key Challenges:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Extensive labor code with strong employee protections</li>
                <li>Complex dismissal procedures requiring careful documentation</li>
                <li>Multi-layered administrative requirements for business operations</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium mb-3">Denmark: Digital Excellence</h3>
            <div className="mb-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(32)}`}>
                Complexity Score: 32
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              Denmark exemplifies low business complexity through digital excellence, with nearly all government services available online through integrated platforms. Business registration and compliance processes are streamlined and highly efficient.
            </p>
            <div className="bg-gray-50 p-4 rounded-md text-sm">
              <h4 className="font-medium mb-2">Key Advantages:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Integrated digital business portal for virtually all government interactions</li>
                <li>Transparent regulatory framework with clear guidance</li>
                <li>Efficient administration with minimal bureaucratic processes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations section with blue gradient */}
      <section className="mb-10">
        <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Strategic Recommendations</h2>
          <p className="mb-6 text-white">
            Based on our analysis of business complexity across the EMEA region, we recommend the following strategies:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-15 p-5 rounded-lg backdrop-filter backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-2 text-black">Centralize for Efficiency</h3>
              <p className="text-black text-sm">
                Consider establishing shared service centers in low-complexity jurisdictions like Denmark or Estonia to manage administrative functions across the region.
              </p>
            </div>
            <div className="bg-white bg-opacity-15 p-5 rounded-lg backdrop-filter backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-2 text-black">Leverage Local Expertise</h3>
              <p className="text-black text-sm">
                Maintain specialized local teams in high-complexity markets like France and Italy to navigate intricate regulatory environments effectively.
              </p>
            </div>
            <div className="bg-white bg-opacity-15 p-5 rounded-lg backdrop-filter backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-2 text-black">Monitor Reform Progress</h3>
              <p className="text-black text-sm">
                Track simplification initiatives in Middle Eastern countries for potential expansion opportunities as regulatory environments improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation buttons */}
      <div className="flex flex-wrap justify-between mt-10">
        <Link href="/risk/global-business-complexity-index" className="mb-4 md:mb-0 text-blue-600 hover:text-blue-800 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Overview
        </Link>
        <div className="flex gap-4">
          <Link href="/risk/global-business-complexity-index/americas" className="text-blue-600 hover:text-blue-800">
            Americas Insights
          </Link>
          <Link href="/risk/global-business-complexity-index/apac" className="text-blue-600 hover:text-blue-800">
            APAC Insights
          </Link>
        </div>
      </div>
    </div>
  );
}