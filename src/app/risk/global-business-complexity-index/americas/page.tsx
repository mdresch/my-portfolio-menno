'use client';

import React from 'react';
import Link from 'next/link';
import { getCountriesByRegion, getComplexityColor } from '@/lib/riskData';
import AmericasComplexityMap from '@/components/risk/AmericasComplexityMap';

// Get Americas country data
const americasCountryData = getCountriesByRegion("Americas");

export default function AmericasPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Americas Regional Insights</h1>
        <p className="text-gray-600 text-lg mb-6">
          Business complexity analysis across North, Central, and South America
        </p>
      </header>

      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Regional Overview</h2>
          <p className="text-gray-700 mb-4">
            The Americas region features stark contrasts in business complexity. While the United States and Canada maintain relatively streamlined systems with moderate complexity, Latin American countries typically rank among the most complex jurisdictions globally due to bureaucratic processes, frequent regulatory changes, and complex tax structures.
          </p>

          <div className="bg-red-50 p-4 rounded-md mb-4">
            <h3 className="text-lg font-medium mb-2">Key Regional Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium">Average Complexity Score</p>
                <p className="text-gray-600">59/100</p>
              </div>
              <div>
                <p className="font-medium">Year-over-Year Change</p>
                <p className="text-red-600">+1.2 points</p>
              </div>
              <div>
                <p className="font-medium">Regional Variance</p>
                <p className="text-gray-600">Very High (46 points)</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700">
            While North American countries benefit from digital government services and business-friendly regulations, many Latin American jurisdictions still require extensive paperwork, in-person procedures, and face challenges with regulatory consistency. However, digitalization efforts in countries like Chile and Colombia are gradually reducing administrative burdens.
          </p>
        </div>

        {/* Americas Complexity Map Visualization */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Americas Complexity Visualization</h2>
          <p className="text-gray-600 mb-4">
            This map shows business complexity scores across the Americas region. Hover over countries to see their complexity details.
          </p>
          <div className="h-[500px] w-full relative">
            <AmericasComplexityMap />
          </div>
        </div>

        {/* Top countries table */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4">Americas Complexity Rankings</h2>
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
              {americasCountryData.map((country) => (
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
              <h3 className="text-lg font-medium mb-3">Fiscal Reform Initiatives</h3>
              <p className="text-gray-700 mb-3">
                Several Latin American countries are implementing tax reforms aimed at simplifying compliance while enhancing revenue collection, with mixed results for business complexity.
              </p>
              <p className="text-gray-700">
                Brazil's planned tax unification could significantly reduce its complexity score, though implementation faces political challenges.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Digital Transformation</h3>
              <p className="text-gray-700 mb-3">
                The digitalization of government services varies significantly across the region, with the US and Canada leading while many Latin American countries are making progress from a lower base.
              </p>
              <p className="text-gray-700">
                Colombia's digital transformation initiative is showing measurable results in reducing administrative complexity for business operations.
              </p>
            </div>
          </div>

          {/* Additional trends */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Political Instability Impact</h3>
              <p className="text-gray-700 mb-3">
                Several Latin American countries have experienced political transitions, creating regulatory uncertainty and compliance challenges for businesses.
              </p>
              <p className="text-gray-700">
                Argentina has seen increased complexity due to emergency economic measures and currency controls, affecting business planning and compliance.
              </p>
            </div>
          </div>

          {/* Report section */}
          <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-8">
            <h3 className="text-xl font-medium mb-3">Business Impact</h3>
            <p className="text-gray-700 mb-4">
              For organizations operating across the Americas, regional complexity variations create significant operational differences:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Budget 30-40% longer for administrative processes in high-complexity Latin American markets</li>
              <li>Factor varying implementation timelines into business planning, especially in countries with high regulatory volatility</li>
              <li>Monitor tax reform initiatives that could substantially alter compliance requirements</li>
              <li>Consider state/provincial variance when expanding operations in federalized systems like the U.S., Brazil, and Canada</li>
            </ul>
            <p className="text-gray-700">
              Effective navigation of these regional differences can lead to competitive advantages and more accurate business forecasting.
            </p>
          </div>
        </div>
      </section>

      {/* Case study section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Regional Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium mb-3">Brazil: Navigating Tax Complexity</h3>
            <div className="mb-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(84)}`}>
                Complexity Score: 84
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              Brazil maintains the highest complexity score in the global index, primarily due to its tax system. Companies face a multi-layered structure with federal, state, and municipal taxes that often overlap and require specialized compliance expertise.
            </p>
            <div className="bg-gray-50 p-4 rounded-md text-sm">
              <h4 className="font-medium mb-2">Key Challenges:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Multiple tax jurisdictions with overlapping requirements</li>
                <li>Frequent changes to tax regulations requiring constant monitoring</li>
                <li>Electronic reporting systems that demand granular transaction data</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium mb-3">Canada: Interprovincial Variations</h3>
            <div className="mb-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(38)}`}>
                Complexity Score: 38
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              While Canada maintains a relatively low complexity score overall, businesses operating across multiple provinces face distinct regulatory frameworks that add complexity, particularly for tax compliance and corporate registrations.
            </p>
            <div className="bg-gray-50 p-4 rounded-md text-sm">
              <h4 className="font-medium mb-2">Key Factors:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Provincial tax rate and base differences requiring separate calculations</li>
                <li>Quebec's distinct legal system creating additional compliance requirements</li>
                <li>Digital government services reducing administrative burdens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations section with red/burgundy gradient */}
      <section className="mb-10">
        <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Strategic Recommendations</h2>
          <p className="mb-6 text-white">
            Based on our analysis of business complexity across the Americas region, we recommend the following strategies:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-15 p-5 rounded-lg backdrop-filter backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-2 text-black">Localize Tax Expertise</h3>
              <p className="text-black text-sm">
                Invest in specialized tax teams for high-complexity jurisdictions like Brazil and Mexico to navigate frequent regulatory changes and complex reporting requirements.
              </p>
            </div>
            <div className="bg-white bg-opacity-15 p-5 rounded-lg backdrop-filter backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-2 text-black">Strategic Regulatory Monitoring</h3>
              <p className="text-black text-sm">
                Implement systematic tracking of regulatory changes across the region, with particular emphasis on politically volatile markets with frequent policy adjustments.
              </p>
            </div>
            <div className="bg-white bg-opacity-15 p-5 rounded-lg backdrop-filter backdrop-blur-sm border border-white/20">
              <h3 className="font-semibold mb-2 text-black">Phased Market Entry</h3>
              <p className="text-black text-sm">
                Consider staged expansion approaches in Latin America, establishing operations first in lower-complexity markets like Chile before entering more challenging regulatory environments.
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
          <Link href="/risk/global-business-complexity-index/apac" className="text-blue-600 hover:text-blue-800">
            APAC Insights
          </Link>
        </div>
      </div>
    </div>
  );
}