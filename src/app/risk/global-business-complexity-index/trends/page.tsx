"use client";

import React from "react";
import Link from "next/link";

export default function TrendsPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Trends & Insights</h1>
        <p className="text-gray-600 text-lg mb-6">
          Analyzing the evolving landscape of global business complexity
        </p>
      </header>

      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Key Trends for 2025</h2>
          <p className="text-gray-700 mb-4">
            The Global Business Complexity Index reveals several significant trends in 2025 that are reshaping the business environment across regions. 
            While some jurisdictions have made progress in simplifying their regulatory landscapes, others have introduced new complexities 
            in response to economic pressures, geopolitical shifts, and evolving international standards.
          </p>
        </div>

        {/* Trend blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Digital Transformation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Digital Transformation of Compliance</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Jurisdictions with advanced digital government services are seeing reductions in complexity scores, particularly in tax administration and corporate filings. Countries that have digitalized regulatory processes have improved by an average of 7 points in their regulatory complexity scores.
            </p>
            <div className="bg-blue-50 rounded-md p-4">
              <h4 className="font-medium mb-2">Impact Areas:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>Estonia and Denmark lead in digital transformation, reducing bureaucratic barriers</li>
                <li>Singapore has simplified 60% of business processes through digital automation</li>
                <li>Brazil has improved by 6 points in tax complexity through digital filing systems</li>
              </ul>
            </div>
          </div>

          {/* Regulatory Fragmentation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-orange-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Increasing Regulatory Fragmentation</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Despite progress in certain areas, we're witnessing increased fragmentation in regulatory landscapes, especially in markets reacting to global economic shifts. Notable increases in complexity are observed in countries establishing new trade relationships or implementing protectionist policies.
            </p>
            <div className="bg-orange-50 rounded-md p-4">
              <h4 className="font-medium mb-2">Impact Areas:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>The UK has seen a 9-point increase in complexity post-Brexit</li>
                <li>ASEAN countries show divergent regulatory approaches despite integration efforts</li>
                <li>China's new data sovereignty rules have increased cross-border compliance burden</li>
              </ul>
            </div>
          </div>

          {/* ESG Requirements */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">ESG Reporting Complexity</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Environmental, Social, and Governance (ESG) reporting requirements are creating new compliance challenges, particularly in the EU, UK, and parts of APAC. Companies now face a patchwork of disclosure standards with varying requirements across jurisdictions.
            </p>
            <div className="bg-green-50 rounded-md p-4">
              <h4 className="font-medium mb-2">Impact Areas:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>EU Corporate Sustainability Reporting Directive impacting complexity in 27 member states</li>
                <li>Singapore's enhanced climate disclosure requirements affecting financial institutions</li>
                <li>Supply chain due diligence laws in Germany, France and Netherlands creating extraterritorial effects</li>
              </ul>
            </div>
          </div>

          {/* Tax Transparency */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-purple-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Global Tax Transparency Initiatives</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Implementation of OECD's global minimum tax and enhanced transparency requirements are reshaping the tax landscape. While these measures aim to create consistency, the transition period has temporarily increased compliance complexity for multinational entities.
            </p>
            <div className="bg-purple-50 rounded-md p-4">
              <h4 className="font-medium mb-2">Impact Areas:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>Implementation of 15% global minimum tax creating new reporting obligations</li>
                <li>Beneficial ownership registries expanding in over 30 jurisdictions</li>
                <li>Transfer pricing documentation requirements becoming more rigorous across G20 nations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Regional Analysis</h2>

          {/* EMEA */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">EMEA Trends</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <p className="text-gray-700 mb-3">
                  The EMEA region displays a widening complexity gap, with Northern European countries continuing to streamline processes while Southern and Eastern European nations face increasing regulatory requirements. The EU's harmonization efforts provide some consistency, but implementation varies significantly at the national level.
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-700">
                  <li>EU member states show an average 3-point reduction in complexity through standardized digital reporting</li>
                  <li>Middle East countries are implementing significant regulatory reforms to attract foreign investment</li>
                  <li>African nations show the highest variance in complexity scores, reflecting diverse development stages</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-2">Key Metrics</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Average Complexity:</span>
                    <span className="font-medium">52/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year-over-Year Change:</span>
                    <span className="font-medium text-green-600">-2.3 pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Most Improved:</span>
                    <span className="font-medium">UAE (-7.4 pts)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Most Complex:</span>
                    <span className="font-medium">France (81/100)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Americas */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">Americas Trends</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <p className="text-gray-700 mb-3">
                  The Americas continue to show stark contrasts between North and South, with Brazil maintaining its position as the most complex jurisdiction globally. However, several Latin American countries have made progress in simplifying tax administration through digital initiatives, even as regulatory requirements expand in other areas.
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-700">
                  <li>Brazil has improved tax filing efficiency but remains highly complex in overall regulatory framework</li>
                  <li>Mexico's tax reform has temporarily increased complexity for international businesses</li>
                  <li>The United States maintains relatively low complexity despite state-level variations</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-2">Key Metrics</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Average Complexity:</span>
                    <span className="font-medium">58/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year-over-Year Change:</span>
                    <span className="font-medium text-red-600">+1.5 pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Most Improved:</span>
                    <span className="font-medium">Colombia (-3.2 pts)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Most Complex:</span>
                    <span className="font-medium">Brazil (84/100)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* APAC */}
          <div>
            <h3 className="text-xl font-medium mb-3">APAC Trends</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <p className="text-gray-700 mb-3">
                  APAC presents the widest range of complexity scores globally, reflecting the diverse economic development stages across the region. While Singapore and Hong Kong maintain their positions as business-friendly jurisdictions, emerging economies are working to balance regulatory oversight with ease of doing business.
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-700">
                  <li>ASEAN nations are showing gradual improvements through coordinated regulatory efforts</li>
                  <li>India's GST implementation has stabilized, reducing earlier transition complexity</li>
                  <li>China's regulatory environment continues to evolve with significant implications for foreign businesses</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium mb-2">Key Metrics</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Average Complexity:</span>
                    <span className="font-medium">48/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year-over-Year Change:</span>
                    <span className="font-medium text-green-600">-0.8 pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Most Improved:</span>
                    <span className="font-medium">Malaysia (-4.5 pts)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Most Complex:</span>
                    <span className="font-medium">Indonesia (79/100)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">What's on the Horizon?</h2>
          <p className="text-gray-700 mb-6">
            Looking ahead, we anticipate several developments that will shape business complexity in the coming years:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-medium text-lg mb-2">Artificial Intelligence in Compliance</h3>
              <p className="text-gray-600 text-sm">
                AI and machine learning adoption in regulatory technology will help businesses navigate complex requirements more efficiently, potentially reducing effective complexity even in highly regulated markets.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-medium text-lg mb-2">Sustainability Regulations</h3>
              <p className="text-gray-600 text-sm">
                The expansion of climate-related disclosure requirements and carbon pricing mechanisms will add new layers of complexity, particularly for multinational entities navigating different jurisdictional approaches.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-medium text-lg mb-2">Digital Asset Regulation</h3>
              <p className="text-gray-600 text-sm">
                As cryptocurrencies and digital assets become mainstream, new regulatory frameworks are emerging across jurisdictions, creating potential compliance challenges for financial institutions and technology companies.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4 py-2">
              <h3 className="font-medium text-lg mb-2">Data Localization Requirements</h3>
              <p className="text-gray-600 text-sm">
                Increasing data sovereignty laws and localization requirements will create additional operational complexity for businesses managing international data flows, particularly in technology, healthcare, and financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Reports Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Key Reports & Analyses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top 10 Most Complex Jurisdictions Card */}
          <Link href="/risk/global-business-complexity-index/trends/top-10-most-complex" className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-red-600 p-3">
                <h3 className="text-xl font-bold text-white">Top 10 Most Complex</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Detailed analysis of the world's most challenging business environments, featuring Greece, France, Colombia, and more.
                </p>
                <div className="flex items-center text-red-600">
                  <span className="font-medium">Explore report</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">Complexity Rankings</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">New for 2024</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Growth Opportunities Card */}
          <Link href="/risk/global-business-complexity-index/trends/growth-opportunities" className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-amber-600 p-3">
                <h3 className="text-xl font-bold text-white">Growth Opportunities</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Emerging markets and sectors showing promising business potential despite regulatory challenges in 2025.
                </p>
                <div className="flex items-center text-amber-600">
                  <span className="font-medium">Explore report</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded">Market Expansion</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">New for 2025</span>
                </div>
              </div>
            </div>
          </Link>

          {/* ESG Compliance Report Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 p-3">
              <h3 className="text-xl font-bold text-white">ESG Compliance Evolution</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                How environmental, social, and governance requirements are reshaping global compliance landscapes.
              </p>
              <div className="flex items-center text-green-600">
                <span className="font-medium">Coming soon</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">ESG</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">Q3 2025</span>
              </div>
            </div>
          </div>

          {/* Digital Transformation Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 p-3">
              <h3 className="text-xl font-bold text-white">Digital Transformation Index</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Measuring the impact of digitalization on reducing administrative burdens across global jurisdictions.
              </p>
              <div className="flex items-center text-blue-600">
                <span className="font-medium">Coming soon</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">Digitalization</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">Q2 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Insights Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Expert Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-medium">Dr. Eleanor Hughes</h3>
                <p className="text-sm text-gray-600">Global Compliance Director, International Business Association</p>
              </div>
            </div>
            <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4 mb-4">
              "The paradox we're seeing is that efforts to simplify and harmonize regulations can actually increase short-term complexity as businesses adapt to new standards. However, the long-term trend suggests that digitalization will ultimately reduce administrative burdens."
            </blockquote>
            <a href="#" className="text-blue-600 text-sm hover:underline">Read full interview →</a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-300 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-medium">Miguel Sanchez</h3>
                <p className="text-sm text-gray-600">Director of Tax Policy, Global Economic Forum</p>
              </div>
            </div>
            <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4 mb-4">
              "The implementation of the global minimum tax represents the most significant shift in international tax policy in decades. While adding complexity initially, it aims to create a more level playing field in the long run by reducing tax arbitrage opportunities."
            </blockquote>
            <a href="#" className="text-blue-600 text-sm hover:underline">Read full interview →</a>
          </div>
        </div>
      </section>

      {/* Request Full Report CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Get the Full Trends Report</h2>
            <p className="text-blue-100">
              Access detailed analysis, industry-specific insights, and long-term forecasts in our comprehensive Global Business Complexity Trends Report.
            </p>
          </div>
          <Link 
            href="/contact"
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg"
          >
            Request Full Report
          </Link>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-12 flex flex-col sm:flex-row justify-between">
        <Link href="/risk/global-business-complexity-index/rankings" className="mb-4 sm:mb-0 text-blue-600 hover:text-blue-800 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Rankings
        </Link>
        <Link href="/risk/global-business-complexity-index" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 justify-end">
          Back to Overview
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}