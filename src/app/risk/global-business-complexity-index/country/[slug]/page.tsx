'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allCountryData, getComplexityColor, regionalAverages } from '../../../../../lib/riskData';
import ComplexityRadarChart from '../../../../../components/risk/ComplexityRadarChart';
import RegionalComparisonChart from '../../../../../components/risk/RegionalComparisonChart';

export default function CountryPage({ params }: { params: { slug: string } }) {
  // Convert slug to country name for matching (e.g., "united-states" -> "United States")
  const countryNameFromSlug = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Find the country data that matches the slug
  const countryData = allCountryData.find(
    country => country.country.toLowerCase() === countryNameFromSlug.toLowerCase()
  );
  
  // If country data is not found, return 404
  if (!countryData) {
    notFound();
  }

  // Get regional route based on the country's region
  const regionRoute = `/risk/global-business-complexity-index/${countryData.region.toLowerCase()}`;
  
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
          <span className="text-gray-400 mx-1">/</span>
          <Link href={regionRoute} className="text-blue-600 hover:text-blue-800">
            {countryData.region} Regional Insights
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{countryData.country} Business Complexity Profile</h1>
        <p className="text-gray-600 text-lg mb-6">
          Detailed complexity analysis for business operations in {countryData.country}
        </p>
      </header>

      {/* Summary Section */}
      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Complexity Summary</h2>
              <p className="text-gray-600">{countryData.highlight}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Global Rank:</span>
                <span className="font-bold text-2xl">#{countryData.rank}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-gray-600">Trend:</span>
                {countryData.trend === "up" && (
                  <span className="text-red-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Increasing Complexity
                  </span>
                )}
                {countryData.trend === "down" && (
                  <span className="text-green-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Decreasing Complexity
                  </span>
                )}
                {countryData.trend === "unchanged" && (
                  <span className="text-gray-600 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.707 10.293a1 1 0 11.707.707H16a1 1 0 110 2H8.414l.293.293a1 1 0 01-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M12.293 9.293a1 1 0 111.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414l.293-.293H4a1 1 0 010-2h8.586l-.293-.293z" clipRule="evenodd" />
                    </svg>
                    Stable Complexity
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {/* Complexity Score Breakdown */}
          <div>
            <h3 className="text-lg font-medium mb-4">Complexity Score Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-600 mb-1">Overall</div>
                <div className={`text-2xl font-bold rounded-full h-16 w-16 flex items-center justify-center mx-auto ${getComplexityColor(countryData.overall)}`}>
                  {countryData.overall}
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-600 mb-1">Regulatory</div>
                <div className={`text-2xl font-bold rounded-full h-16 w-16 flex items-center justify-center mx-auto ${getComplexityColor(countryData.regulatory)}`}>
                  {countryData.regulatory}
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-600 mb-1">Tax</div>
                <div className={`text-2xl font-bold rounded-full h-16 w-16 flex items-center justify-center mx-auto ${getComplexityColor(countryData.tax)}`}>
                  {countryData.tax}
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-600 mb-1">Corporate</div>
                <div className={`text-2xl font-bold rounded-full h-16 w-16 flex items-center justify-center mx-auto ${getComplexityColor(countryData.corporate)}`}>
                  {countryData.corporate}
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <div className="text-sm text-gray-600 mb-1">Employment</div>
                <div className={`text-2xl font-bold rounded-full h-16 w-16 flex items-center justify-center mx-auto ${getComplexityColor(countryData.employment)}`}>
                  {countryData.employment}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
      {/* Challenges and Opportunities */}
      <section className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenges */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-red-800">Key Challenges</h2>
            <ul className="space-y-4">
              {countryData.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Opportunities */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Opportunities & Developments</h2>
            <ul className="space-y-4">
              {countryData.opportunities.map((opportunity, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{opportunity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Radar Chart */}
      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Business Complexity Analysis</h2>
          <p className="text-gray-600 mb-6">
            Detailed breakdown of complexity factors affecting business operations in {countryData.country}.
          </p>
          <div className="h-[400px] w-full">
            <ComplexityRadarChart countryData={countryData} />
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Business Impact & Recommendations</h2>
          
          {/* Impact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-medium mb-2">Initial Setup</h3>
              <p className="text-gray-700 text-sm">
                {countryData.overall >= 70 
                  ? "Expect extended timeframes for business registration and licensing due to complex procedures and documentation requirements."
                  : countryData.overall >= 40
                  ? "Moderate setup complexity with some administrative hurdles, but generally predictable timeframes."
                  : "Relatively streamlined setup process with efficient digital procedures for most business types."
                }
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-purple-600">
              <h3 className="font-medium mb-2">Ongoing Compliance</h3>
              <p className="text-gray-700 text-sm">
                {countryData.regulatory >= 70 || countryData.tax >= 70
                  ? "Significant ongoing compliance burden requiring dedicated resources and specialist expertise."
                  : countryData.regulatory >= 40 || countryData.tax >= 40
                  ? "Moderate compliance requirements with periodic reporting obligations and regulatory monitoring needed."
                  : "Relatively manageable compliance environment with straightforward requirements and good support infrastructure."
                }
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-amber-600">
              <h3 className="font-medium mb-2">Resource Requirements</h3>
              <p className="text-gray-700 text-sm">
                {countryData.overall >= 70 
                  ? "Budget for significant local expertise and additional administrative resources compared to lower-complexity markets."
                  : countryData.overall >= 40
                  ? "Moderate resource allocation needed, particularly for tax compliance and regulatory monitoring."
                  : "Standard resource allocation sufficient with minimal additional complexity costs."
                }
              </p>
            </div>
          </div>

          {/* Strategic Recommendations */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Strategic Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-15 p-4 rounded-lg backdrop-filter backdrop-blur-sm border border-white/20">
                <h4 className="font-medium mb-2 text-black">Local Expertise</h4>
                <p className="text-black text-sm">
                  {countryData.overall >= 70 
                    ? "Essential to maintain dedicated in-country expertise for compliance and regulatory navigation."
                    : countryData.overall >= 40
                    ? "Beneficial to have access to local expertise, particularly for specialized areas like tax and employment."
                    : "Standard international business practices are generally effective with minimal need for specialized local knowledge."
                  }
                </p>
              </div>
              
              <div className="bg-white bg-opacity-15 p-4 rounded-lg backdrop-filter backdrop-blur-sm border border-white/20">
                <h4 className="font-medium mb-2 text-black">Process Management</h4>
                <p className="text-black text-sm">
                  {countryData.overall >= 70 
                    ? "Implement robust tracking systems for compliance deadlines and documentation requirements."
                    : countryData.overall >= 40
                    ? "Maintain standard compliance calendars with country-specific adaptations for key deadlines."
                    : "Standard international compliance processes are generally sufficient with minimal adaptation needed."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison with Regional Average */}
      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Regional Context</h2>
          <p className="text-gray-600 mb-6">
            How {countryData.country}'s business complexity compares to regional averages.
          </p>
          <div className="h-[300px] w-full">
            <RegionalComparisonChart 
              countryData={countryData} 
              regionalAverages={regionalAverages[countryData.region]} 
            />
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex flex-wrap justify-between mt-10">
        <Link href={regionRoute} className="mb-4 md:mb-0 text-blue-600 hover:text-blue-800 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to {countryData.region} Regional Insights
        </Link>
        <Link href="/risk/global-business-complexity-index/rankings" className="text-blue-600 hover:text-blue-800">
          View Global Rankings
        </Link>
      </div>
    </div>
  );
}