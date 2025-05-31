"use client";

import React from "react";
import Link from "next/link";

export default function MethodologyPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">GBCI Methodology</h1>
        <p className="text-gray-600 text-lg mb-6">
          Understanding how we assess and rank business complexity across global jurisdictions
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Research Framework</h2>
            <p className="mb-4">
              The Global Business Complexity Index (GBCI) employs a multidimensional framework to evaluate the complexity of doing business across different countries. Our methodology combines quantitative metrics with qualitative insights from local business experts to provide a comprehensive assessment of business complexity.
            </p>
            <p>
              The analysis is conducted annually to track changes in business environments and incorporate the latest regulatory developments, ensuring that the index remains a relevant tool for businesses and policymakers.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Collection Process</h2>
            <p className="mb-4">
              Our data collection involves three primary sources:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-4">
              <li className="text-gray-700">
                <strong>Expert Surveys:</strong> We survey over 300 in-country business experts, including accounting professionals, legal advisors, and corporate secretaries, collecting their assessments of local business complexity based on their direct experience.
              </li>
              <li className="text-gray-700">
                <strong>Statistical Data:</strong> We gather statistical data from reliable sources such as the World Bank, International Monetary Fund, and national regulatory bodies to complement our survey data with objective metrics.
              </li>
              <li className="text-gray-700">
                <strong>Regulatory Analysis:</strong> Our team of analysts continuously monitors regulatory changes and policy developments in each jurisdiction, incorporating these updates into our complexity assessments.
              </li>
            </ol>
            <p>
              The combination of these sources allows us to capture both the formal aspects of business complexity (laws and regulations) and the practical challenges faced by businesses operating in each country.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Complexity Dimensions</h2>
            <p className="mb-4">
              The GBCI evaluates business complexity across four key dimensions:
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">1. Regulatory Complexity</h3>
              <p className="text-gray-700 mb-3">
                This dimension assesses the complexity of regulatory frameworks, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Frequency of regulatory changes</li>
                <li>Transparency of regulatory processes</li>
                <li>Consistency in regulatory interpretation</li>
                <li>Government digitalization levels</li>
                <li>Requirements for local representation</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">2. Tax Complexity</h3>
              <p className="text-gray-700 mb-3">
                This dimension evaluates the complexity of tax compliance and reporting:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Number of tax payments required</li>
                <li>Time spent on tax compliance</li>
                <li>Complexity of tax legislation</li>
                <li>Frequency of tax reforms</li>
                <li>Digital maturity of tax authorities</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">3. Corporate Compliance</h3>
              <p className="text-gray-700 mb-3">
                This dimension focuses on the complexity of maintaining corporate compliance:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Entity formation procedures</li>
                <li>Corporate governance requirements</li>
                <li>Corporate reporting obligations</li>
                <li>Ultimate beneficial ownership disclosure</li>
                <li>Director residency requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">4. Employment & HR</h3>
              <p className="text-gray-700 mb-3">
                This dimension examines the complexity of employment regulations:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Hiring and termination procedures</li>
                <li>Employment contract requirements</li>
                <li>Work permit and visa complexity</li>
                <li>Benefits and social security obligations</li>
                <li>Labor dispute resolution mechanisms</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Scoring Methodology</h2>
            <p className="mb-4">
              Each country receives scores across the four dimensions based on a 100-point scale:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li><strong>0-20:</strong> Very Low Complexity - Highly streamlined processes with minimal bureaucracy</li>
              <li><strong>21-40:</strong> Low Complexity - Generally straightforward with some administrative requirements</li>
              <li><strong>41-60:</strong> Medium Complexity - Moderate administrative burden with some challenging areas</li>
              <li><strong>61-80:</strong> High Complexity - Significant administrative burden and complex requirements</li>
              <li><strong>81-100:</strong> Very High Complexity - Extremely demanding administrative burden with intricate procedures</li>
            </ul>
            <p className="mb-4">
              The overall complexity score for each country is calculated as a weighted average of the four dimension scores, with weights assigned based on the relative impact of each dimension on overall business operations.
            </p>
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="text-lg font-medium mb-2">Weighting Model</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Regulatory Complexity:</strong> 30%</li>
                <li><strong>Tax Complexity:</strong> 30%</li>
                <li><strong>Corporate Compliance:</strong> 25%</li>
                <li><strong>Employment & HR:</strong> 15%</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Validation Process</h2>
            <p className="mb-4">
              To ensure the accuracy and reliability of our index, we implement a rigorous validation process:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-4">
              <li className="text-gray-700">
                <strong>Cross-Validation:</strong> We compare our findings with other reputable international indices and reports to identify any significant discrepancies that may require further investigation.
              </li>
              <li className="text-gray-700">
                <strong>Expert Panel Review:</strong> A panel of global compliance and regulatory experts reviews our methodology and findings, providing feedback on the accuracy and relevance of our assessments.
              </li>
              <li className="text-gray-700">
                <strong>Consistency Checks:</strong> We employ statistical methods to check for internal consistency and identify any anomalous data points that may indicate measurement errors.
              </li>
              <li className="text-gray-700">
                <strong>Annual Methodology Review:</strong> We conduct an annual review of our methodology to incorporate feedback from users and adapt to evolving business environments.
              </li>
            </ol>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Methodology Summary</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800">Data Sources</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-600 mt-1">
                    <li>Expert surveys from 300+ professionals</li>
                    <li>Statistical data from global institutions</li>
                    <li>Regulatory monitoring and analysis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Countries Covered</h3>
                  <p className="text-sm text-gray-600 mt-1">77 jurisdictions representing over 90% of global GDP</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Update Frequency</h3>
                  <p className="text-sm text-gray-600 mt-1">Annual with quarterly monitoring of significant changes</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Related Resources</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/risk/global-business-complexity-index/rankings" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Country Rankings
                  </Link>
                </li>
                <li>
                  <Link href="/risk/global-business-complexity-index/trends" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Trends & Insights
                  </Link>
                </li>
                <li>
                  <a href="/files/GBCI_2025_Methodology_Paper.pdf" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                    Download Full Methodology Paper (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-12 flex flex-col sm:flex-row justify-between">
        <Link href="/risk/global-business-complexity-index" className="mb-4 sm:mb-0 text-blue-600 hover:text-blue-800 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Overview
        </Link>
        <Link href="/risk/global-business-complexity-index/rankings" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 justify-end">
          Next: Country Rankings
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}