'use client';

import React from 'react';
import Link from 'next/link';
import { getCountriesByRegion, getComplexityColor } from '@/lib/riskData';

// Get APAC country data
const apacCountryData = getCountriesByRegion("APAC");

export default function ApacPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">APAC Regional Insights</h1>
        <p className="text-gray-600 text-lg mb-6">
          Business complexity analysis across Asia-Pacific countries
        </p>
      </header>

      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Regional Overview</h2>
          <p className="text-gray-700 mb-4">
            The Asia-Pacific region showcases some of the most significant complexity contrasts globally. While Singapore and Australia rank among the world's least complex business environments with advanced digital services, Indonesia, China, and India present multifaceted regulatory landscapes with considerable complexity layers driven by decentralized governance and frequent regulatory changes.
          </p>

          <div className="bg-green-50 p-4 rounded-md mb-4">
            <h3 className="text-lg font-medium mb-2">Key Regional Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium">Average Complexity Score</p>
                <p className="text-gray-600">56/100</p>
              </div>
              <div>
                <p className="font-medium">Year-over-Year Change</p>
                <p className="text-green-600">-0.8 points</p>
              </div>
              <div>
                <p className="font-medium">Regional Variance</p>
                <p className="text-gray-600">Extreme (51 points)</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700">
            Digital government transformation initiatives are creating varying speeds of complexity reduction across the region. Singapore continues to lead with world-class digital services, while emerging economies like Vietnam and India are making substantial progress in addressing administrative burdens through technology.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">APAC Complexity Visualization</h2>
          <p className="text-gray-600 mb-4">
            This map shows business complexity scores across the Asia-Pacific region. Hover over countries to see their complexity details.
          </p>
          <div className="h-[500px] w-full bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">APAC complexity map visualization will be implemented here</p>
          </div>
        </div>

        {/* Top countries table */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4">APAC Complexity Rankings</h2>
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
              {apacCountryData.map((country) => (
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
              <h3 className="text-lg font-medium mb-3">Decentralized Governance Impact</h3>
              <p className="text-gray-700 mb-3">
                Large economies like China, India, and Indonesia exhibit significant internal complexity variations due to provincial and local governance structures, creating multi-layered compliance requirements.
              </p>
              <p className="text-gray-700">
                Companies operating across multiple provinces or states often need specialized knowledge for each jurisdiction's regulatory requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Digital Government Acceleration</h3>
              <p className="text-gray-700 mb-3">
                The COVID-19 pandemic has accelerated digital government service adoption across the region, with many countries fast-tracking initiatives to reduce in-person administrative requirements.
              </p>
              <p className="text-gray-700">
                Singapore's SingPass and Australia's myGov represent regional benchmarks for integrated digital government services that significantly reduce administrative complexity.
              </p>
            </div>
          </div>

          {/* Report section */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-medium mb-3">Business Impact</h3>
            <p className="text-gray-700 mb-4">
              For organizations operating across the APAC region, complexity variations significantly impact operational strategies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Consider Singapore, Australia, or Hong Kong as initial market entry points or regional headquarters due to their streamlined business environments</li>
              <li>Budget for longer implementation timelines in high-complexity markets like Indonesia and China</li>
              <li>Develop location-specific compliance strategies that account for provincial and local regulatory variations</li>
              <li>Monitor digital government initiatives for emerging opportunities to streamline operations</li>
            </ul>
            <p className="text-gray-700">
              Organizations that develop nuanced, market-specific approaches to the region's complexity variance can gain significant competitive advantages through optimized operations and compliance efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Case study section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Regional Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium mb-3">Indonesia: Provincial Complexity Challenges</h3>
            <div className="mb-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(78)}`}>
                Complexity Score: 78
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              Indonesia's decentralized governance across more than 500 regions creates significant complexity challenges for businesses, with overlapping permits and licenses required at multiple government levels.
            </p>
            <div className="bg-gray-50 p-4 rounded-md text-sm">
              <h4 className="font-medium mb-2">Key Challenges:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Regional regulatory fragmentation requiring local expertise</li>
                <li>Overlapping permit requirements at national, provincial, and local levels</li>
                <li>Frequent regulatory changes requiring continuous monitoring</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium mb-3">Singapore: Global Complexity Leader</h3>
            <div className="mb-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(27)}`}>
                Complexity Score: 27
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              Singapore exemplifies global best practices in minimizing business complexity through comprehensive digital government services, streamlined regulatory frameworks, and transparent compliance requirements.
            </p>
            <div className="bg-gray-50 p-4 rounded-md text-sm">
              <h4 className="font-medium mb-2">Key Advantages:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>World-leading digital government services platform</li>
                <li>Business registration possible in under 24 hours</li>
                <li>Integrated tax filing system with automated calculations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations section with green gradient */}
      <section className="mb-10">
        <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Strategic Recommendations</h2>
          <p className="mb-6 text-white">
            Based on our analysis of business complexity across the Asia-Pacific region, we recommend the following strategies:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-15 p-5 rounded-lg backdrop-filter backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-2 text-black">Hub-and-Spoke Approach</h3>
              <p className="text-black text-sm">
                Establish regional headquarters in low-complexity locations like Singapore or Australia while maintaining local operations in high-complexity markets guided by specialized local teams.
              </p>
            </div>
            <div className="bg-white bg-opacity-15 p-5 rounded-lg backdrop-filter backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-2 text-black">Location-Specific Knowledge</h3>
              <p className="text-black text-sm">
                Invest in developing detailed provincial/state-level regulatory knowledge in large, decentralized markets like Indonesia, India, and China rather than relying solely on national-level expertise.
              </p>
            </div>
            <div className="bg-white bg-opacity-15 p-5 rounded-lg backdrop-filter backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-2 text-black">Digital Transformation Alignment</h3>
              <p className="text-black text-sm">
                Align internal systems with emerging government digital platforms in rapidly developing markets to benefit from complexity reductions as they roll out across the region.
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
          <Link href="/risk/global-business-complexity-index/emea" className="text-blue-600 hover:text-blue-800">
            EMEA Insights
          </Link>
          <Link href="/risk/global-business-complexity-index/americas" className="text-blue-600 hover:text-blue-800">
            Americas Insights
          </Link>
        </div>
      </div>
    </div>
  );
}