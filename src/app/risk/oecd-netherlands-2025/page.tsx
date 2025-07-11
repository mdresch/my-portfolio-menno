"use client";

import React from "react";
import Link from "next/link";

export default function OecdNetherlands2025Page() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">OECD Economic Survey: Netherlands 2025</h1>
        <p className="text-gray-600 text-lg">
          Comprehensive analysis of the Dutch economy, policy recommendations, and economic outlook for 2025
        </p>
      </header>

      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-6">
            <p className="mb-4">
              The OECD Economic Survey of the Netherlands 2025 provides a comprehensive assessment of the Dutch economy's 
              performance, challenges, and opportunities. The report highlights the Netherlands' strong economic fundamentals 
              while identifying key areas for policy attention to ensure sustainable and inclusive growth.
            </p>
            <p>
              Despite global economic uncertainties, the Netherlands has demonstrated remarkable resilience, maintaining 
              its position as one of Europe's most competitive economies with robust institutions, innovation capacity, 
              and international trade networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">Economic Strengths</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Strong fiscal position</li>
                <li>• Competitive business environment</li>
                <li>• High innovation capacity</li>
                <li>• Robust financial sector</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-2">Key Challenges</h3>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Housing market pressures</li>
                <li>• Labor market tightness</li>
                <li>• Climate transition costs</li>
                <li>• Aging population</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Policy Priorities</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Housing supply reforms</li>
                <li>• Skills development</li>
                <li>• Green transition</li>
                <li>• Pension reforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Economic Performance and Outlook</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Macroeconomic Indicators</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-4">Key Economic Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-600">GDP Growth (2025 est.)</span>
                  <span className="font-medium text-green-600">2.1%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-600">Unemployment Rate</span>
                  <span className="font-medium text-blue-600">3.8%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-600">Inflation Rate</span>
                  <span className="font-medium text-amber-600">2.3%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-600">Current Account Balance</span>
                  <span className="font-medium text-green-600">8.2% of GDP</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-600">Government Debt</span>
                  <span className="font-medium text-blue-600">52.1% of GDP</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Economic Outlook 2025-2027</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Growth Trajectory:</strong> The Dutch economy is projected to maintain steady growth, 
                  supported by strong domestic demand, robust exports, and continued investment in innovation 
                  and green transition.
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Risk Factors:</strong> Global trade tensions, energy transition costs, and demographic 
                  pressures pose medium-term challenges to sustained growth.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Opportunities:</strong> Digital transformation, circular economy initiatives, and 
                  strategic positioning in European supply chains offer significant growth potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Key Policy Recommendations</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Housing Market Reforms</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium mb-2">Supply-Side Measures</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Accelerate zoning and permitting processes</li>
                  <li>Increase land availability for residential development</li>
                  <li>Promote innovative construction methods and materials</li>
                  <li>Enhance regional coordination for housing planning</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium mb-2">Market Efficiency</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Reform rent regulation in the social housing sector</li>
                  <li>Address tax distortions favoring homeownership</li>
                  <li>Improve rental market flexibility</li>
                  <li>Strengthen tenant protection while encouraging supply</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-800">Labor Market and Skills</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium mb-2">Skills Development</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Enhance adult learning and reskilling programs</li>
                  <li>Strengthen STEM education at all levels</li>
                  <li>Improve digital literacy across age groups</li>
                  <li>Foster closer industry-education partnerships</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium mb-2">Labor Market Flexibility</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Address dual labor market challenges</li>
                  <li>Improve job matching and mobility</li>
                  <li>Enhance work-life balance policies</li>
                  <li>Attract international talent and skills</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h3 className="text-xl font-semibold mb-4 text-emerald-800">Green Transition and Sustainability</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-medium mb-3 text-emerald-800">Climate Policy</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-emerald-700">
                <li>Accelerate renewable energy deployment</li>
                <li>Enhance carbon pricing mechanisms</li>
                <li>Promote circular economy practices</li>
                <li>Strengthen climate adaptation measures</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-medium mb-3 text-blue-800">Energy Transition</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-blue-700">
                <li>Diversify energy supply sources</li>
                <li>Invest in smart grid infrastructure</li>
                <li>Support green hydrogen development</li>
                <li>Phase out fossil fuel dependencies</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-medium mb-3 text-purple-800">Innovation & Technology</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-purple-700">
                <li>Boost R&D investment in clean tech</li>
                <li>Foster green innovation ecosystems</li>
                <li>Support green startups and scale-ups</li>
                <li>Enhance international cooperation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Sectoral Analysis</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Financial Services</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-700 mb-3">
                  The Dutch financial sector remains robust with strong capital positions and effective regulatory oversight. 
                  However, challenges from low interest rates, digital transformation, and sustainable finance requirements 
                  require continued attention.
                </p>
                <h4 className="font-medium mb-2">Key Recommendations:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Enhance fintech innovation while maintaining stability</li>
                  <li>Strengthen sustainable finance frameworks</li>
                  <li>Address mortgage market concentration</li>
                  <li>Improve cross-border banking supervision</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Trade and Logistics</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-700 mb-3">
                  As a major trade hub, the Netherlands faces opportunities and challenges from changing global trade patterns, 
                  digitalization, and sustainability requirements in logistics and supply chain management.
                </p>
                <h4 className="font-medium mb-2">Strategic Priorities:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  <li>Modernize port and logistics infrastructure</li>
                  <li>Enhance digital trade facilitation</li>
                  <li>Promote sustainable logistics solutions</li>
                  <li>Strengthen supply chain resilience</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Agriculture and Food Security</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 mb-3">
                The Netherlands' agricultural sector faces the dual challenge of maintaining productivity while transitioning 
                to sustainable practices. Policy reforms must balance environmental goals with food security and economic viability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Sustainability Transition:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Reduce nitrogen emissions from agriculture</li>
                    <li>Promote precision farming technologies</li>
                    <li>Support organic and circular farming</li>
                    <li>Enhance biodiversity conservation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Innovation and Competitiveness:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Invest in agricultural research and development</li>
                    <li>Support farm modernization and automation</li>
                    <li>Develop alternative protein sources</li>
                    <li>Strengthen international market access</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Fiscal Policy and Public Finance</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-6">
            <h3 className="text-lg font-medium mb-3 text-blue-800">Fiscal Position Assessment</h3>
            <p className="text-sm text-blue-700 mb-4">
              The Netherlands maintains a strong fiscal position with government debt well below EU averages and 
              sustainable public finances. However, aging demographics and climate transition investments require 
              careful fiscal planning to ensure long-term sustainability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2 text-blue-800">Fiscal Strengths:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-blue-700">
                  <li>Low government debt-to-GDP ratio</li>
                  <li>Strong institutional fiscal frameworks</li>
                  <li>Efficient tax collection systems</li>
                  <li>Prudent debt management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-blue-800">Fiscal Challenges:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Rising age-related expenditures</li>
                  <li>Climate transition investment needs</li>
                  <li>Infrastructure modernization costs</li>
                  <li>Digital transformation requirements</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Tax Policy Recommendations</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium mb-2">Revenue Optimization</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Broaden tax base while maintaining competitiveness</li>
                    <li>Address tax avoidance and international coordination</li>
                    <li>Enhance environmental tax instruments</li>
                    <li>Improve tax system simplicity and transparency</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium mb-2">Structural Reforms</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                    <li>Reform housing-related tax incentives</li>
                    <li>Enhance work incentives for all income groups</li>
                    <li>Strengthen pension tax framework</li>
                    <li>Support green transition through tax policy</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Public Spending Priorities</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Investment Priorities</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li><strong>Education and Skills:</strong> Enhance human capital development and lifelong learning</li>
                    <li><strong>Infrastructure:</strong> Modernize transport, digital, and energy infrastructure</li>
                    <li><strong>Innovation:</strong> Boost R&D spending and support knowledge economy</li>
                    <li><strong>Climate Action:</strong> Accelerate green transition investments</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Efficiency Measures</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li>Enhance public sector productivity and digitalization</li>
                    <li>Improve healthcare system efficiency</li>
                    <li>Optimize social protection system design</li>
                    <li>Strengthen performance-based budgeting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">International Economic Relations</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Trade and Investment Position</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h4 className="font-medium mb-3 text-blue-800">European Integration</h4>
              <p className="text-sm text-blue-700 mb-3">
                As a founding EU member, the Netherlands benefits significantly from European integration while 
                playing a leading role in shaping EU economic policy.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-blue-700">
                <li>Strong intra-EU trade relationships</li>
                <li>Active role in EU policy coordination</li>
                <li>Benefits from single market access</li>
                <li>Participation in eurozone governance</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-medium mb-3 text-green-800">Global Trade Hub</h4>
              <p className="text-sm text-green-700 mb-3">
                The Netherlands leverages its strategic location and infrastructure to serve as a gateway 
                for global trade and investment flows.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-green-700">
                <li>Major port and logistics infrastructure</li>
                <li>Competitive business environment</li>
                <li>Strong international connectivity</li>
                <li>Attractive investment climate</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <h4 className="font-medium mb-3 text-purple-800">Innovation Networks</h4>
              <p className="text-sm text-purple-700 mb-3">
                International collaboration in research and innovation enhances the Netherlands' 
                knowledge economy and technological competitiveness.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-purple-700">
                <li>Participation in global research networks</li>
                <li>Attraction of international talent</li>
                <li>Technology transfer partnerships</li>
                <li>Innovation ecosystem development</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Strategic Recommendations for International Engagement</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Trade Policy</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  <li>Champion multilateral trade system and WTO reform</li>
                  <li>Strengthen EU trade policy coordination</li>
                  <li>Diversify trade relationships and reduce dependencies</li>
                  <li>Promote sustainable and digital trade standards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Investment Strategy</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  <li>Attract sustainable and knowledge-intensive FDI</li>
                  <li>Support Dutch companies' international expansion</li>
                  <li>Enhance investment screening for strategic sectors</li>
                  <li>Promote responsible business conduct globally</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">Resources and Further Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">OECD Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.oecd.org/netherlands/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 010-5.656l4-4a4 4 0 015.656 5.656l-1.1 1.1" />
                    </svg>
                    OECD Netherlands Country Page
                  </a>
                </li>
                <li>
                  <a href="https://www.oecd.org/economic-surveys/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    OECD Economic Surveys
                  </a>
                </li>
                <li>
                  <a href="https://www.oecd.org/economy/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    OECD Economics Department
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Dutch Government Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.government.nl/topics/economy" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    Netherlands Government - Economy
                  </a>
                </li>
                <li>
                  <a href="https://www.cpb.nl/en" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    CPB Netherlands Bureau for Economic Policy Analysis
                  </a>
                </li>
                <li>
                  <a href="https://www.dnb.nl/en/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    De Nederlandsche Bank (Central Bank)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-blue-600 hover:underline">
          ← Back to Risk Overview
        </Link>
      </div>
    </div>
  );
}
