"use client";
import React from "react";

export default function OECDNetherlandsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        OECD Economic Surveys Netherlands 2023
      </h1>
      
      <div className="space-y-8">
        {/* Executive Summary */}
        <section className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            Executive Summary
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The Dutch economy swiftly returned to its pre-pandemic growth path, but rapidly rising inflation 
            disrupted growth, magnifying existing challenges. The OECD Economic Survey of the Netherlands, 
            published in June 2023, projects GDP growth to slow to 0.9% in 2023 from 4.5% in 2022 before 
            picking up to 1.4% in 2024.
          </p>
        </section>

        {/* Key Economic Indicators */}
        <section className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            Key Economic Indicators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">GDP Growth</h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">0.9%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Projected for 2023</p>
            </div>
            <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Labor Participation</h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">68.7%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Record high in 2023 Q3</p>
            </div>
            <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Inflation Impact</h3>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">High</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Disrupting growth trajectory</p>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            Key Challenges Identified
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Energy Crisis</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Rapidly rising energy prices have significantly impacted the economy, requiring 
                supportive measures to help businesses and households navigate through the crisis.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Inflation Pressures</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Rising inflation has disrupted the economic growth trajectory and poses ongoing 
                challenges for monetary policy and economic stability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Housing Market Stress</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Despite supportive conditions, the housing market faces structural challenges 
                that require policy attention and reform measures.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Labor Market Imbalances</h3>
              <p className="text-gray-700 dark:text-gray-300">
                While participation is at record highs, labor shortages in key sectors pose 
                challenges for sustained economic growth.
              </p>
            </div>
          </div>
        </section>

        {/* Key Recommendations */}
        <section className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            OECD Key Recommendations
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Supporting the Economy Through Energy Crisis</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Implement targeted measures to help businesses and households cope with high energy costs 
                while maintaining fiscal sustainability.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Streamlining the Tax System</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Reform and simplify the tax system to improve efficiency, reduce administrative burden, 
                and enhance economic competitiveness.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Labor Market Reforms</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Implement gradual reforms to address labor market imbalances, boost productivity, 
                and ensure sustainable employment growth.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Boosting Labor Supply and Productivity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Focus on increasing labor supply and productivity as key drivers for sustained economic 
                growth in the medium to long term.
              </p>
            </div>
          </div>
        </section>

        {/* Economic Outlook */}
        <section className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            Economic Outlook
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">2023 Projections</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• GDP growth: 0.9% (down from 4.5% in 2022)</li>
                <li>• Continued inflation pressures</li>
                <li>• Energy transition challenges</li>
                <li>• Labor market adjustments</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">2024 Outlook</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• GDP growth expected to pick up to 1.4%</li>
                <li>• Gradual inflation moderation</li>
                <li>• Policy reforms implementation</li>
                <li>• Structural improvements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Policy Focus Areas */}
        <section className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            Policy Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200">Fiscal Policy</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Maintain supportive measures while ensuring long-term sustainability
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 dark:text-green-200">Energy Transition</h3>
              <p className="text-sm text-green-700 dark:text-green-300">
                Accelerate renewable energy adoption and efficiency improvements
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 dark:text-purple-200">Digital Innovation</h3>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Enhance digital infrastructure and skills for productivity growth
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 dark:text-orange-200">Housing Policy</h3>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                Address housing supply constraints and affordability issues
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 dark:text-red-200">Social Security</h3>
              <p className="text-sm text-red-700 dark:text-red-300">
                Reform pension and benefit systems for long-term sustainability
              </p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-teal-800 dark:text-teal-200">Trade & Investment</h3>
              <p className="text-sm text-teal-700 dark:text-teal-300">
                Maintain openness while addressing supply chain vulnerabilities
              </p>
            </div>
          </div>
        </section>

        {/* Survey Methodology */}
        <section className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            About OECD Economic Surveys
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            The OECD Economic Survey of the Netherlands 2023 was published on 29 June 2023. 
            OECD Economic Surveys provide comprehensive analysis of economic trends, policy challenges, 
            and recommendations for member countries.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This survey examines recent economic developments, analyzes policy challenges, 
            and offers specific recommendations to enhance economic performance and well-being in the Netherlands.
          </p>
        </section>
      </div>
    </div>
  );
}
