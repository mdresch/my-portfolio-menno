"use client";

import React from "react";
import Link from "next/link";

export default function WtoPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">World Trade Organization (WTO)</h1>
        <p className="text-gray-600 text-lg">
          Understanding the global trade framework and implications for international business
        </p>
      </header>

      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">About the WTO</h2>
          <p className="mb-4">
            The World Trade Organization (WTO) is the only global international organization dealing with the rules of trade between nations. At its heart are the WTO agreements, negotiated and signed by the bulk of the world's trading nations and ratified in their parliaments. The goal is to ensure that trade flows as smoothly, predictably, and freely as possible.
          </p>
          <p>
            Established on January 1, 1995, the WTO replaced the General Agreement on Tariffs and Trade (GATT), which had been in existence since 1948. The WTO expanded its scope beyond traded goods to include trade in services and intellectual property, and created a more effective dispute settlement mechanism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Core Functions</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Administering WTO trade agreements</li>
              <li>Providing a forum for trade negotiations</li>
              <li>Handling trade disputes between member nations</li>
              <li>Monitoring national trade policies</li>
              <li>Providing technical assistance and training for developing countries</li>
              <li>Cooperating with other international organizations</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">Key Principles</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Non-discrimination:</strong> Most-favored-nation and national treatment principles</li>
              <li><strong>Transparency:</strong> Clear information about policies, practices, and regulations</li>
              <li><strong>Reciprocity:</strong> Balanced exchange of trade concessions</li>
              <li><strong>Binding commitments:</strong> Market opening commitments are enforced</li>
              <li><strong>Safety valves:</strong> Flexibility in certain circumstances</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">WTO Agreements and Frameworks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-lg mb-2">Goods (GATT)</h3>
              <p className="text-sm text-gray-600">
                Framework for trade in goods, including tariff reductions, quotas elimination, and addressing non-tariff barriers.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-lg mb-2">Services (GATS)</h3>
              <p className="text-sm text-gray-600">
                Rules governing trade in services, including banking, insurance, telecommunications, and tourism.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-medium text-lg mb-2">Intellectual Property (TRIPS)</h3>
              <p className="text-sm text-gray-600">
                Protection of intellectual property rights, including patents, copyrights, trademarks, and geographical indications.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-6">
            <h3 className="text-lg font-medium mb-3">Dispute Settlement Mechanism</h3>
            <p className="mb-4">
              The WTO's dispute settlement system is a central element in providing security and predictability to the multilateral trading system. It provides a structured process for resolving conflicts when a member believes another member is violating trade rules.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-1">Process:</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Consultation between parties</li>
                  <li>Panel review</li>
                  <li>Appellate review (if requested)</li>
                  <li>Implementation of rulings</li>
                </ol>
              </div>
              <div>
                <h4 className="font-medium mb-1">Significance:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Enhances rule of law in international trade</li>
                  <li>Provides binding rulings</li>
                  <li>Reduces unilateral actions and retaliation</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700">
            The WTO also includes specialized agreements on agriculture, sanitary and phytosanitary measures, technical barriers to trade, subsidies and countervailing measures, anti-dumping measures, and safeguards, among others.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">United States and the WTO</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="mr-4 w-16 h-12 bg-gray-200 flex items-center justify-center rounded">
              <span className="font-bold text-gray-500">US</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">United States of America and the WTO</h3>
              <p className="text-gray-600 text-sm">
                Member since January 1, 1995 | GATT member since January 1, 1948
              </p>
            </div>
          </div>
          
          <p className="mb-4">
            The United States has been a WTO member since January 1, 1995, and was a member of GATT since January 1, 1948. As one of the founding members and largest economies in the world, the United States plays a crucial role in the WTO system.
          </p>
          
          <h4 className="font-medium text-lg mb-2 mt-6">US Participation Highlights</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium mb-2">Leadership Role</h5>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>Instrumental in the creation and evolution of the GATT/WTO system</li>
                <li>Advocates for liberalized trade and transparent trading practices</li>
                <li>Major contributor to WTO's regular budget</li>
                <li>Active participant in trade negotiations and dispute settlements</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">Dispute Settlement Activity</h5>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>One of the most frequent users of the dispute settlement system</li>
                <li>Has brought numerous cases as a complainant</li>
                <li>Has had to respond to multiple cases as a respondent</li>
                <li>Often participates as a third party in other disputes</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md mt-6">
            <h4 className="font-medium mb-2">Key Trade Policy Interests</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Intellectual property protection</li>
                <li>Market access for services</li>
                <li>Agricultural trade reform</li>
                <li>Digital trade and e-commerce</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Enforcement of trade agreements</li>
                <li>Addressing non-market economy practices</li>
                <li>WTO reform initiatives</li>
                <li>Supply chain resilience</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">US-WTO Relations: Business Impact</h3>
          
          <p className="mb-4">
            For businesses operating in or with the United States, the country's participation in the WTO has several important implications:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-medium mb-2">Opportunities</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>Access to foreign markets through negotiated trade agreements</li>
                <li>Reduced tariffs and non-tariff barriers in many sectors</li>
                <li>More predictable trading environment due to rule-based system</li>
                <li>Access to dispute settlement when facing unfair trade practices</li>
                <li>Improved intellectual property protection worldwide</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-medium mb-2">Challenges</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>Increased competition from foreign producers</li>
                <li>Adjustment costs for some sectors and workers</li>
                <li>Complex regulatory compliance across multiple markets</li>
                <li>Potential vulnerability to trade disputes and retaliatory measures</li>
                <li>Balancing global integration with resilience concerns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">WTO Membership Process: Path to (Re)joining</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-amber-700">
                  <strong>Hypothetical Scenario:</strong> Following trade war escalations and withdrawal from multilateral agreements, 
                  this section outlines the process the United States would need to follow to rejoin the WTO as a member.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Overview of WTO Accession Process</h3>
          <p className="mb-6 text-gray-700">
            The WTO accession process is comprehensive and can take several years to complete. It requires extensive negotiations, 
            policy reforms, and commitments to align domestic trade policies with WTO rules and principles. For a major economy 
            like the United States, the process would involve detailed scrutiny of trade practices across all sectors.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4">Six-Stage Accession Process</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                  <div className="ml-4">
                    <h5 className="font-medium">Application and Working Party Establishment</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Submit formal application to WTO Director-General. Working Party established to examine application.
                    </p>
                    <span className="text-xs text-blue-600 font-medium">Timeline: 2-6 months</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                  <div className="ml-4">
                    <h5 className="font-medium">Fact-Finding Phase</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Submit comprehensive memorandum on trade regime. Working Party reviews all trade policies and laws.
                    </p>
                    <span className="text-xs text-blue-600 font-medium">Timeline: 12-18 months</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
                  <div className="ml-4">
                    <h5 className="font-medium">Bilateral Market Access Negotiations</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Negotiate with interested WTO members on goods and services market access commitments.
                    </p>
                    <span className="text-xs text-blue-600 font-medium">Timeline: 18-36 months</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">4</div>
                  <div className="ml-4">
                    <h5 className="font-medium">Working Party Report Finalization</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Address all concerns raised. Finalize Working Party Report documenting compliance with WTO rules.
                    </p>
                    <span className="text-xs text-blue-600 font-medium">Timeline: 6-12 months</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">5</div>
                  <div className="ml-4">
                    <h5 className="font-medium">Final Package Preparation</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Compile accession package including protocol, commitments schedules, and Working Party Report.
                    </p>
                    <span className="text-xs text-blue-600 font-medium">Timeline: 3-6 months</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">6</div>
                  <div className="ml-4">
                    <h5 className="font-medium">Ministerial Conference Decision</h5>
                    <p className="text-sm text-gray-600 mt-1">
                      Ministerial Conference or General Council adopts accession package by consensus.
                    </p>
                    <span className="text-xs text-green-600 font-medium">Timeline: 2-4 months</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Key Requirements for US Accession</h4>
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h5 className="font-medium mb-3 text-gray-800">Trade Policy Reforms</h5>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  <li>Eliminate discriminatory trade practices</li>
                  <li>Reduce tariffs to WTO-bound levels</li>
                  <li>Remove non-tariff barriers inconsistent with WTO rules</li>
                  <li>Reform agricultural support programs</li>
                  <li>Align intellectual property laws with TRIPS Agreement</li>
                  <li>Open services sectors to foreign competition</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h5 className="font-medium mb-3 text-gray-800">Institutional Changes</h5>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  <li>Establish WTO-compliant customs procedures</li>
                  <li>Create transparent regulatory framework</li>
                  <li>Implement effective dispute resolution mechanisms</li>
                  <li>Ensure federal-state compliance coordination</li>
                  <li>Establish trade policy review processes</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h5 className="font-medium mb-3 text-blue-800">Estimated Timeline</h5>
                <div className="text-sm text-blue-700">
                  <p className="mb-2"><strong>Minimum Duration:</strong> 3-4 years</p>
                  <p className="mb-2"><strong>Realistic Timeline:</strong> 5-7 years</p>
                  <p className="mb-2"><strong>Complex Scenarios:</strong> 8-12 years</p>
                  <p className="text-xs mt-3 italic">
                    *Timeline depends on complexity of trade regime, political will, and cooperation from existing WTO members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Critical Success Factors for US Re-accession</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-medium mb-3 text-green-800">Political and Economic Factors</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li><strong>Bipartisan Congressional Support:</strong> Sustained political commitment across election cycles</li>
                <li><strong>Private Sector Engagement:</strong> Active business community support and lobbying</li>
                <li><strong>Economic Incentives:</strong> Clear demonstration of trade benefits to key constituencies</li>
                <li><strong>Federal-State Coordination:</strong> Ensuring state-level compliance with WTO commitments</li>
                <li><strong>International Relations:</strong> Rebuilding trust with key trading partners</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-medium mb-3 text-blue-800">Technical and Legal Challenges</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li><strong>Legal Framework Alignment:</strong> Comprehensive review of federal and state laws</li>
                <li><strong>Regulatory Harmonization:</strong> Aligning standards with international practices</li>
                <li><strong>Market Access Commitments:</strong> Negotiating acceptable terms for sensitive sectors</li>
                <li><strong>Subsidy Programs:</strong> Reforming domestic support mechanisms</li>
                <li><strong>Dispute Settlement:</strong> Accepting binding international arbitration</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h4 className="font-medium mb-3 text-yellow-800">Potential Obstacles and Mitigation Strategies</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-medium mb-2 text-yellow-800">Key Obstacles:</h5>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Congressional resistance to sovereignty limitations</li>
                  <li>Industry opposition to increased competition</li>
                  <li>State-level non-compliance issues</li>
                  <li>Outstanding trade disputes with existing members</li>
                  <li>National security exemption conflicts</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2 text-yellow-800">Mitigation Approaches:</h5>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Phased implementation with transition periods</li>
                  <li>Sector-specific carve-outs for sensitive industries</li>
                  <li>Enhanced consultation mechanisms with Congress</li>
                  <li>Pre-negotiation of dispute resolution procedures</li>
                  <li>Clear definition of national security exceptions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Current Challenges and Future Directions</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded">
              <h3 className="font-medium mb-3">Reform Agenda</h3>
              <p className="text-sm text-gray-700 mb-3">
                The WTO faces calls for modernization to address new trade realities:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>Dispute settlement system reform</li>
                <li>Rules for digital trade and e-commerce</li>
                <li>Addressing industrial subsidies</li>
                <li>Environmental sustainability integration</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded">
              <h3 className="font-medium mb-3">Geopolitical Tensions</h3>
              <p className="text-sm text-gray-700 mb-3">
                Increasing geopolitical factors affecting the multilateral trading system:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>US-China trade relations</li>
                <li>Regional and bilateral agreements proliferation</li>
                <li>National security exceptions usage</li>
                <li>Supply chain restructuring</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-5 rounded">
              <h3 className="font-medium mb-3">Emerging Issues</h3>
              <p className="text-sm text-gray-700 mb-3">
                New areas requiring attention within the global trading framework:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>Climate change and trade policy</li>
                <li>Digital trade governance</li>
                <li>Healthcare supply chains</li>
                <li>Inclusive trade for SMEs and developing nations</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 p-5 rounded-lg border border-blue-100">
            <h3 className="text-lg font-medium mb-3">Business Strategy Considerations</h3>
            <p className="mb-4">
              Given the evolving WTO landscape, businesses should consider the following strategies:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li><strong>Monitor WTO developments</strong> - Stay informed about ongoing negotiations, disputes, and rule changes that may impact your industry</li>
              <li><strong>Diversify supply chains</strong> - Consider geographic diversification to mitigate risks from trade tensions and policy changes</li>
              <li><strong>Engage in trade policy</strong> - Participate in industry associations that provide input to trade negotiators</li>
              <li><strong>Plan for contingencies</strong> - Develop strategies for different trade policy scenarios, including potential disruptions</li>
              <li><strong>Leverage trade agreements</strong> - Fully understand and utilize the benefits available under existing WTO and other trade agreements</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">Resources and Further Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Key WTO Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.wto.org/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 010-5.656l4-4a4 4 0 015.656 5.656l-1.1 1.1" />
                    </svg>
                    WTO Official Website
                  </a>
                </li>
                <li>
                  <a href="https://www.wto.org/english/res_e/publications_e/publications_e.htm" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    WTO Publications
                  </a>
                </li>
                <li>
                  <a href="https://www.wto.org/english/tratop_e/dispu_e/dispu_e.htm" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    Dispute Settlement Database
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">US-Specific Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://ustr.gov/about-us/policy-offices/press-office/fact-sheets/2022/march/united-states-and-world-trade-organization" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    USTR - US and the WTO
                  </a>
                </li>
                <li>
                  <a href="https://www.usitc.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    US International Trade Commission
                  </a>
                </li>
                <li>
                  <a href="https://www.census.gov/foreign-trade/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    US Census Foreign Trade Data
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