"use client";

import React from "react";
import Link from "next/link";

export default function GrowthOpportunitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/risk/global-business-complexity-index/trends" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Trends</span>
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Growth Opportunities</h1>
        <p className="text-gray-600 text-lg mb-6">
          Regional competition and workforce availability drive business growth in complex markets
        </p>
      </header>

      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Growth Drivers Across Regions</h2>
          <p className="text-gray-700 mb-4">
            Our analysis shows that jurisdictions identify regional competitiveness and workforce availability as major drivers of growth.
            Being competitive regionally allows jurisdictions to stand out and become more attractive to foreign investors through various
            factors including ease of business setup, reduced regulatory complexity, transparent regulations, and access to natural resources.
          </p>
          
          <div className="mt-6 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Regional Growth Drivers Comparison</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="py-3 px-4 text-left">Region</th>
                    <th className="py-3 px-4 text-left">Primary Growth Driver</th>
                    <th className="py-3 px-4 text-left">Secondary Growth Driver</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4">South America</td>
                    <td className="py-3 px-4">Regional Competition</td>
                    <td className="py-3 px-4">Workforce Availability</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">APAC</td>
                    <td className="py-3 px-4">Stable Economic Outlook</td>
                    <td className="py-3 px-4">Technology Advancement</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">North America</td>
                    <td className="py-3 px-4">Regulatory Stability</td>
                    <td className="py-3 px-4">Innovation Ecosystem</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">EMEA</td>
                    <td className="py-3 px-4">Mixed (varies by country)</td>
                    <td className="py-3 px-4">Workforce Skill Level</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-medium mb-3">Complexity Correlation</h3>
            <p className="text-gray-700 mb-4">
              Interestingly, growth drivers vary significantly when analyzed by complexity rankings:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-5 rounded-lg">
                <h4 className="font-semibold">Top 10 Most Complex Jurisdictions</h4>
                <p className="mt-2">Find growth primarily through competitive advantages relative to neighboring jurisdictions</p>
              </div>
              <div className="bg-green-50 p-5 rounded-lg">
                <h4 className="font-semibold">Bottom 10 Least Complex Jurisdictions</h4>
                <p className="mt-2">Find growth primarily through economic and regulatory stability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Technology Driving Growth Across Sectors</h2>
          
          <p className="text-gray-700 mb-6">
            Although jurisdictions identified diverse factors impacting growth, IT and technology consistently topped the rankings as most influential growth drivers.
            Technology offers multiple pathways to growth, from manufacturing expertise to increased productivity and workforce optimization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-indigo-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <h3 className="font-semibold">Manufacturing Technology</h3>
              </div>
              <p className="text-gray-700">
                Countries with technological manufacturing expertise can increase market share through production capabilities
              </p>
            </div>
            
            <div className="bg-purple-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="font-semibold">Productivity Enhancement</h3>
              </div>
              <p className="text-gray-700">
                Using technology to boost efficiency and productivity across operations and supply chains
              </p>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg">
              <div className="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <h3 className="font-semibold">Workforce Optimization</h3>
              </div>
              <p className="text-gray-700">
                Automating back-office, entry-level, and part-time jobs to focus on higher-value tasks
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg mb-6">
            <h3 className="font-semibold mb-3">Regional Variations in Growth Sectors</h3>
            <p className="text-gray-700 mb-4">
              While technology leads overall, different regions show distinct patterns in their growth sectors:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><span className="font-medium">North America:</span> Tourism ranks particularly high (33%) compared to other regions</li>
              <li><span className="font-medium">APAC:</span> Financial services and advanced manufacturing show stronger contributions</li>
              <li><span className="font-medium">EMEA:</span> More diversified across sectors including renewable energy and logistics</li>
              <li><span className="font-medium">South America:</span> Natural resources and agricultural technology remain important alongside digital innovation</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4 py-2 mb-4">
            <blockquote className="italic text-gray-700 mb-2">
              "Multiple jurisdictions, including New Zealand and Hong Kong, SAR, are seeing companies automating back-office, entry level and part-time jobs using generative AI to keep workforce numbers low and focus on higher value tasks."
            </blockquote>
            <p className="text-sm text-gray-600">— GBCI 2024 Report</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Workforce Adaptability: A Key Competitive Factor</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-gray-700 mb-4">
                The ability to quickly adapt staffing levels to meet changing demand is divided across jurisdictions. One-third of jurisdictions report being able to adapt staffing levels quickly (34%), while a similar proportion (32%) indicate slower adaptability.
              </p>
              <p className="text-gray-700 mb-4">
                This adaptability is largely dependent on two key dynamics:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li><span className="font-medium">Local labor laws</span> — jurisdictions with stricter employment regulations face more challenges</li>
                <li><span className="font-medium">Regional talent availability</span> — areas with talent shortages struggle to scale workforces quickly</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-medium mb-4">Regional Workforce Adaptability</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">South America</span>
                    <span className="text-sm font-medium">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">APAC</span>
                    <span className="text-sm font-medium">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">North America</span>
                    <span className="text-sm font-medium">43%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "43%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">EMEA</span>
                    <span className="text-sm font-medium">46% (slow)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "46%" }}></div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Percentage of jurisdictions in each region that can adapt staffing levels quickly (except EMEA, which shows percentage reporting slow adaptability)</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-start mb-3">
                <div className="h-8 w-8 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 flex-shrink-0">!</div>
                <blockquote className="italic text-gray-700">
                  "The Belgian labour market is extraordinarily candidate-driven, and talent is the new gold. So there is currently a war for talent, meaning a very challenging labour market for employers."
                  <footer className="text-sm font-medium mt-2">— TMF Belgium expert</footer>
                </blockquote>
              </div>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex items-start mb-3">
                <div className="h-8 w-8 rounded-full bg-amber-500 text-white flex items-center justify-center mr-3 flex-shrink-0">!</div>
                <blockquote className="italic text-gray-700">
                  "Argentina has high inflation, which generates a rotation in the work teams of all companies. Labour unions are also very involved and generate an increasing labour cost - in some cases even above business performance."
                  <footer className="text-sm font-medium mt-2">— TMF Argentina expert</footer>
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-medium mb-4">Opportunities in Talent Attraction and Retention</h3>
            <p className="text-gray-700 mb-4">
              Despite the barriers in hiring staff, TMF Group experts highlight several areas of opportunity in attracting and retaining talent:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <h4 className="font-medium mb-2">Specialized Expertise</h4>
                <p className="text-sm text-gray-700">
                  Many jurisdictions offer highly skilled and educated workforces with specific expertise in IT, engineering, finance and technology
                </p>
              </div>
              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                <h4 className="font-medium mb-2">Linguistic Capabilities</h4>
                <p className="text-sm text-gray-700">
                  Multilingual skills of local workforces present significant opportunities for global business operations
                </p>
              </div>
              <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                <h4 className="font-medium mb-2">Remote Work Integration</h4>
                <p className="text-sm text-gray-700">
                  Hybrid and remote work policies enable access to talent pools across broader geographic areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">ESG Legislation and Business Preparedness</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-4">
                In the majority of jurisdictions, companies are required to abide by at least one form of ESG legislation. Consumer protection and human rights regulations are the most common, with large proportions of jurisdictions requiring both compliance and reporting.
              </p>
              <p className="text-gray-700 mb-4">
                Only two jurisdictions—Curacao and Venezuela—do not require companies to abide by any ESG legislation or report on related activities. Higher proportions of jurisdictions in EMEA (95%) and North America (93%) require compliance with human rights legislation compared to the global average (88%).
              </p>
              <p className="text-gray-700">
                Environmental legislation is becoming increasingly significant, with over half of all jurisdictions now requiring reporting on greenhouse gas emissions, sustainability practices, and waste reduction initiatives. This continues an upward trend from 2023, as governments worldwide make concerted efforts to hold businesses accountable for their environmental impact.
              </p>
            </div>
            <div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-medium mb-4">ESG Legislation Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Human Rights</span>
                      <span className="text-sm font-medium">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Consumer Protection</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Greenhouse Gas Emissions</span>
                      <span className="text-sm font-medium">56%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "56%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Sustainability</span>
                      <span className="text-sm font-medium">62%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "62%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-medium mb-4">Regional ESG Variations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">EMEA and North America</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Strong consumer protection enforcement</li>
                  <li>High human rights compliance (95% and 93% respectively)</li>
                  <li>Leading in sustainability reporting requirements</li>
                  <li>Progressive greenhouse gas emissions regulation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">South America</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>40% not required to report on sustainability legislation</li>
                  <li>40% not required to comply with human rights regulations</li>
                  <li>Political instability making ESG legislation difficult to sustain</li>
                  <li>Varied enforcement across countries within the region</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-4">Business Preparedness for ESG Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  There is a significant split among jurisdictions regarding preparedness for new or unexpected ESG legislation. While 41% expressed general preparedness, a third still feel pressure around compliance with these requirements.
                </p>
                <p className="text-gray-700">
                  The most challenging aspects of ESG compliance include:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
                  <li>Adhering to global sustainability standards (28% overall, 46% in APAC)</li>
                  <li>Cross-industry ESG reporting (26% overall, 62% in APAC)</li>
                  <li>Gathering and validating ESG data</li>
                  <li>Keeping pace with rapidly evolving regulations</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="font-medium mb-3">Preparation for ESG Legislation</h4>
                <div className="relative pt-1">
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Prepared but feeling pressure: 33%</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Prepared and not concerned: 8%</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm">Generally unprepared: 26%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
                      <span className="text-sm">No new/expected ESG legislation: 33%</span>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "41%" }}>
                      NET: Prepared 41%
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Given that reporting requirements for ESG are likely to increase, companies will continue to feel pressure as the level of reporting becomes more in-depth beyond simple compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Full Report CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Access the Full Growth Opportunities Analysis</h2>
            <p className="text-blue-100">
              Get detailed insights on regional growth drivers, workforce trends, and ESG compliance strategies in our comprehensive report.
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
        <Link href="/risk/global-business-complexity-index/trends" className="mb-4 sm:mb-0 text-blue-600 hover:text-blue-800 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Trends Overview
        </Link>
        <Link href="/risk/global-business-complexity-index" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 justify-end">
          Back to Main Index
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}