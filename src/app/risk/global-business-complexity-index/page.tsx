'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlobalComplexityMap from '@/components/risk/GlobalComplexityMap';

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
        <h2 className="text-2xl font-semibold mb-6">Global Complexity Map</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-6">
            Explore the interactive map below to visualize business complexity across different regions. 
            Hover over countries to see their complexity score, global ranking, and key highlights.
          </p>
          <div className="h-[500px] w-full border border-gray-100 rounded-lg">
            <GlobalComplexityMap />
          </div>
          <p className="text-sm text-gray-500 italic mt-4">
            Note: Colors indicate complexity levels from very low (green) to very high (red). Countries in light gray have insufficient data.
          </p>
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

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Global Trends & Findings (2025)</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-xl font-medium mb-4">Key Global Insights</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 mb-6">
                <li><strong>Digital transformation acceleration:</strong> Countries that have embraced digital governance systems have seen significant reductions in complexity scores, with a global average improvement of 12% in administrative procedures.</li>
                <li><strong>Regulatory convergence:</strong> Cross-border standardization efforts, particularly in financial reporting and ESG disclosures, are creating more uniform compliance landscapes in developed markets.</li>
                <li><strong>Tax complexity evolution:</strong> While 64% of jurisdictions have simplified tax filing processes, base erosion prevention measures have simultaneously increased reporting requirements for multinational entities.</li>
                <li><strong>Remote work impact:</strong> Employment regulation is showing increased complexity as 78% of jurisdictions update frameworks to address permanent establishment risks and cross-border employment arrangements.</li>
                <li><strong>Sustainability compliance:</strong> New environmental regulations are creating an additional layer of complexity, with 53 countries introducing mandatory sustainability reporting requirements in the past two years.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Global Complexity Indicators</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Global Average Complexity Score</p>
                  <p className="text-2xl font-bold text-gray-800">61.4<span className="text-sm font-normal text-gray-500">/100</span></p>
                  <p className="text-xs text-gray-500">↑ 2.3 from 2024</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Jurisdictions with Declining Complexity</p>
                  <p className="text-2xl font-bold text-gray-800">42%</p>
                  <p className="text-xs text-gray-500">↓ 5% from 2024</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Regulatory Change Frequency</p>
                  <p className="text-2xl font-bold text-gray-800">3.7</p>
                  <p className="text-xs text-gray-500">Major changes per jurisdiction annually</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium mb-4">Emerging Complexity Factors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-medium text-gray-800 mb-2">Data Sovereignty Requirements</h4>
                <p className="text-sm text-gray-700">73% of jurisdictions now have specific data localization requirements, creating complex compliance challenges for global digital operations.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-medium text-gray-800 mb-2">AI Regulatory Frameworks</h4>
                <p className="text-sm text-gray-700">Divergent approaches to AI governance across major economies are creating a fragmented regulatory landscape for technology companies.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-medium text-gray-800 mb-2">ESG Reporting Mandates</h4>
                <p className="text-sm text-gray-700">Inconsistent sustainability reporting standards across regions are adding significant complexity to corporate disclosure obligations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Regulatory & Political Risk Outlook</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-xl font-medium mb-4">Legislative Stability Trending Upward</h3>
              <p className="text-gray-700 mb-4">
                According to TMF Group experts, 58% of jurisdictions express confidence in legislation stability across the next five years, continuing an upward trend observed since 2020. This represents a significant improvement from 2020 when only 35% of jurisdictions predicted no significant legislative changes.
              </p>
              <p className="text-gray-700 mb-4">
                The steady increase in confidence—jumping 17 percentage points to 52% in 2021, then to 57% in 2023, and 58% in 2024—suggests a maturing regulatory environment globally. This stability is largely attributed to well-established compliance processes related to beneficial ownership reporting, know your customer (KYC) protocols, and anti-money laundering (AML) regulations.
              </p>
            </div>
            <div>
              <div className="bg-blue-50 p-6 rounded-lg h-full">
                <h4 className="font-semibold text-gray-800 mb-3">Legislative Stability Trend</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">2020</span>
                    <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">2021</span>
                    <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "52%" }}></div>
                    </div>
                    <span className="text-sm font-medium">52%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">2023</span>
                    <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "57%" }}></div>
                    </div>
                    <span className="text-sm font-medium">57%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">2024</span>
                    <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "58%" }}></div>
                    </div>
                    <span className="text-sm font-medium">58%</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">Percentage of jurisdictions predicting no significant legislative change in the next five years</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-medium mb-4">Regional Regulatory & Political Risk Factors</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">Key Investment Challenges by Region</h4>
              <p className="text-gray-700 mb-4">
                While regulatory risk remains the most challenging factor for investors worldwide, political risk is having a particularly strong impact in the Americas. TMF Group research reveals that political risk affects 60% of South American and 46% of North American jurisdictions, as well as half of the top ten most complex countries globally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Regulatory Risk Components</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Labor regulations</span>
                      <span className="text-sm font-medium text-gray-700">38%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "38%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Tax regulations</span>
                      <span className="text-sm font-medium text-gray-700">26%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "26%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Regulatory compliance</span>
                      <span className="text-sm font-medium text-gray-700">12%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "12%" }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">Percentage of jurisdictions identifying each as a primary complexity factor</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">Political Risk by Region</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">South America</span>
                      <span className="text-sm font-medium text-gray-700">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">North America</span>
                      <span className="text-sm font-medium text-gray-700">46%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "46%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Top 10 Complex Countries</span>
                      <span className="text-sm font-medium text-gray-700">50%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">Percentage of jurisdictions identifying political risk as a significant factor</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400 mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">Key Risk Insight</h4>
              <p className="text-gray-700">
                TMF Group experts highlight that the true challenge of regulatory complexity often lies not in the volume or intricacy of legislation, but in the speed of implementation. Many jurisdictions report minimal but regular regulatory changes requiring action within days of introduction. Meanwhile, political risk—especially in the Americas—is considered particularly difficult for international businesses to mitigate, as political changes can trigger cascading impacts on regulation, taxation, and trading policies with little advance notice.
              </p>
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