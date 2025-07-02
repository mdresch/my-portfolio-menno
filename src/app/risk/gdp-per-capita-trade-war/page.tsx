"use client";

import React from "react";
import Link from "next/link";
import { 
  GDPPerCapitaChart, 
  BusinessInvestmentChart,
  TradeIntensityChart,
  EconomicResilienceChart,
  InterprovincialTradeChart,
  ExportDiversificationChart
} from "../../../components/risk/GDPTradeWarCharts";
import RiskReportCard from "../../../components/risk/RiskReportCard";

export default function GDPPerCapitaTradeWarPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">GDP Per Capita Growth Strategy—2025</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">Strengthening Economic Resilience Against Trade War Risks</p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 transition-colors">
          July 2, 2025 | Published with approval for reference and analysis
        </div>
      </header>

      {/* Executive Summary Section */}
      <section className="mb-12">
        <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-6 shadow-md border border-green-100 dark:border-green-900/50 transition-colors">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Executive Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            With US trade policy uncertainty creating significant headwinds for the Canadian economy, this report outlines a comprehensive 
            strategy to boost GDP per capita growth as a buffer against trade war risks. Current projections show Canada&apos;s GDP per capita 
            has declined in the past two years, highlighting the urgent need for productivity-driven growth to enhance economic resilience.
          </p>
          <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors mb-4">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Strategic Targets (2025-2027)</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 transition-colors">
              <li>• GDP per capita growth: Target 2.5% annually (vs. current -0.5%)</li>
              <li>• Export market diversification: Reduce US dependency from 75% to 65%</li>
              <li>• Business investment rate: Increase from 5.6% to 8.0% of GDP</li>
              <li>• Productivity growth: Achieve 1.8% annual improvement</li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Policy Pillar #1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Productivity Enhancement & Innovation</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Policy Pillar #2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Economic Diversification & Trade Expansion</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Policy Pillar #3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Strategic Investment & Infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Economic Context Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Current Economic Context</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Canada&apos;s economic performance has been underwhelming, with real GDP growth averaging just 1.5% over the past two years—well 
              below estimated potential. More concerning, real GDP per capita has declined in both 2023 and 2024, representing a significant 
              deterioration in living standards that leaves the economy vulnerable to external shocks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The Bank of Canada projects GDP growth of 1.8% for 2025-2026, with GDP per person growth expected to strengthen modestly. 
              However, the threat of broad-based US tariffs—postponed from February to April 2025—creates substantial downside risks. 
              Farm Credit Canada maintains a cautious 1.6% GDP growth forecast, acknowledging significant uncertainty.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-md border border-yellow-200 dark:border-yellow-800 transition-colors">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 transition-colors">Key Economic Indicators (2025)</h3>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1 transition-colors">
                <li>• Real GDP per capita: -0.5% (2024), -0.8% (2023)</li>
                <li>• Business investment share: 5.6% of GDP (vs. 11% in US)</li>
                <li>• Export concentration: 75% to US markets</li>
                <li>• Population growth slowing: 2.3% → 0.5% by Q2 2025</li>
                <li>• Current policy rate: 2¾% (Bank of Canada, June 2025)</li>
              </ul>
            </div>
          </div>
          <GDPPerCapitaChart />
        </div>
      </section>

      {/* Productivity Challenge Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">The Productivity Challenge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BusinessInvestmentChart />
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Canada&apos;s productivity weakness stems largely from underinvestment in machinery, equipment, and intellectual property. 
              Since 2002, business investment has consistently declined as a share of GDP, reaching just 5.6% in 2024—half the US rate of 11%.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The OECD ranks Canada 25th out of 38 countries in product market regulation, indicating significant regulatory barriers 
              to competition and innovation. The Canadian Science Policy Center identifies regulatory burden as the primary obstacle to innovation.
            </p>
            <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-md border border-red-200 dark:border-red-800 transition-colors">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2 transition-colors">Critical Infrastructure Needs</h3>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1 transition-colors">
                <li>• Trans Mountain pipeline capacity utilization (operational 2025)</li>
                <li>• LNG export infrastructure (mid-2025 online)</li>
                <li>• Digital infrastructure expansion (5G, broadband)</li>
                <li>• Interprovincial trade barrier elimination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Framework Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Policy Framework for GDP Per Capita Growth</h2>
        
        <div className="space-y-8">
          {/* Pillar 1: Productivity Enhancement */}
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4 transition-colors">Pillar 1: Productivity Enhancement & Innovation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Regulatory Streamlining</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 transition-colors">
                  <li>• Eliminate interprovincial trade barriers (est. 0.4% GDP boost)</li>
                  <li>• Accelerated regulatory approval processes</li>
                  <li>• Reduce regulatory compliance costs by 25%</li>
                  <li>• Digital-first government services</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Investment Incentives</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 transition-colors">
                  <li>• Enhanced capital cost allowances for digital tech</li>
                  <li>• R&D tax credit expansion to 40% for SMEs</li>
                  <li>• Innovation zone tax preferences</li>
                  <li>• Infrastructure investment acceleration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pillar 2: Economic Diversification */}
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-4 transition-colors">Pillar 2: Economic Diversification & Trade Expansion</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Market Diversification</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 transition-colors">
                  <li>• Expand CPTPP trade relationships (UK accession)</li>
                  <li>• Strengthen Indo-Pacific economic ties</li>
                  <li>• European market penetration initiatives</li>
                  <li>• Latin American trade corridor development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Export Capacity Building</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 transition-colors">
                  <li>• Trans Mountain pipeline capacity utilization</li>
                  <li>• IKEA program, sustainable forestry and Kwantum Technologies</li>
                  <li>• Energy Oil, Gas and Renewables as Hydrogen producing a net increased of hydrogen output by product water treatment plant</li>
                  <li>• Digital innovation in technologies as in future development of water treatment plants</li>
                  <li>• Freshwater and Salt Water to Fresh water conversion treatment plants</li>
                  <li>• Agricultural Advancement in bio degradable and polymer producing components</li>
                  <li>• LNG export infrastructure (mid-2025 online)</li>
                  <li>• Research and Development of LNG Safety Technologies Heritage and maintenance</li>
                  <li>• Minimum Educational performance in STEM and Digital Twin Technology for students and visualizing an LNG shortage of safety measures</li>
                  <li>• Critical minerals supply chain development</li>
                  <li>• Agricultural export market expansion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pillar 3: Strategic Investment */}
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
            <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-4 transition-colors">Pillar 3: Strategic Investment & Infrastructure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Infrastructure Modernization</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 transition-colors">
                  <li>• Digital infrastructure expansion (5G, broadband)</li>
                  <li>• Transportation corridor improvements</li>
                  <li>• Energy transition infrastructure</li>
                  <li>• Smart city technology deployment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Human Capital Development</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 transition-colors">
                  <li>• Skills-based immigration expansion</li>
                  <li>• Workforce retraining programs</li>
                  <li>• STEM education investment</li>
                  <li>• Apprenticeship program modernization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Diversification Strategy */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Economic Diversification Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TradeIntensityChart />
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Reducing US Trade Dependency</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The current 75% export concentration to the United States represents a critical vulnerability. Recent developments 
              in trade negotiations provide opportunities to diversify:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>CETA 2.0 Enhancement:</strong> Expanded services trade and digital commerce provisions</li>
              <li><strong>CPTPP Expansion:</strong> UK accession creates new market opportunities</li>
              <li><strong>ASEAN Partnership:</strong> Ongoing negotiations for comprehensive economic partnership</li>
              <li><strong>India Trade Agreement:</strong> Early progress trade agreement signed in April 2025</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 transition-colors">
              Target: Reduce US export share to 65% by 2027 while maintaining absolute export volumes through overall growth.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Strategy Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Strategic Investment Priorities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">High-Value Sector Development</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Analysis of global trade resilience patterns shows that economies with higher concentrations of high-value, 
              knowledge-intensive industries demonstrate superior resistance to trade shocks. Canada&apos;s investment strategy focuses on:
            </p>
            <div className="space-y-3">
              <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm border border-gray-100 dark:border-neutral-700">
                <h4 className="font-semibold text-gray-800 dark:text-white">Technology & Innovation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">AI, quantum computing, clean technology - Data Center Security Center - CAD $8B investment</p>
              </div>
              <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm border border-gray-100 dark:border-neutral-700">
                <h4 className="font-semibold text-gray-800 dark:text-white">Advanced Manufacturing</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Automation, precision manufacturing, aerospace - CAD $6B investment</p>
              </div>
              <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm border border-gray-100 dark:border-neutral-700">
                <h4 className="font-semibold text-gray-800 dark:text-white">Financial Services</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Fintech, digital banking, capital markets - CAD $3B investment</p>
              </div>
            </div>
          </div>
          <BusinessInvestmentChart />
        </div>
      </section>

      {/* Sector Analysis Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Sector-Specific Growth Strategies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Resource Sector Modernization</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              While maintaining strength in traditional resource sectors, the strategy emphasizes value-added processing 
              and sustainable extraction technologies. This approach increases GDP per capita contribution while reducing 
              vulnerability to commodity price volatility exacerbated by trade tensions.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Critical minerals processing facilities (lithium, rare earths)</li>
              <li>Carbon capture and storage technology deployment</li>
              <li>Sustainable forestry and bio-products innovation</li>
              <li>Clean energy infrastructure expansion</li>
            </ul>
          </div>
          <InterprovincialTradeChart />
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExportDiversificationChart />
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Services Sector Expansion</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Services currently represent 67% of Canada&apos;s GDP but only 22% of exports. Expanding tradeable services 
              offers significant potential for GDP per capita growth while diversifying the economic base away from 
              trade-vulnerable goods sectors.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Key opportunities include digital services, professional consulting, education services, and financial 
              technology exports. Recent agreements with the EU and ongoing CPTPP negotiations have opened new 
              market access for Canadian service providers.
            </p>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Target Service Exports Growth</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">From CAD $156B (2024) to CAD $220B (2027)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Impact Assessment */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Economic Impact Projections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Economic modeling suggests that implementing the comprehensive GDP per capita growth strategy could 
              reduce Canada&apos;s vulnerability to trade shocks by an estimated 35-40% while delivering sustained 
              prosperity improvements for Canadian households.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The strategy&apos;s three-year implementation timeline aligns with critical trade policy developments, 
              including USMCA review in 2026 and ongoing multilateral trade negotiations. Building economic 
              resilience now positions Canada advantageously for future trade discussions.
            </p>
            <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-md border border-green-100 dark:border-green-900/50">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Projected GDP Per Capita Impact</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>2025: CAD $58,400 (baseline)</li>
                <li>2026: CAD $60,300 (3.3% growth)</li>
                <li>2027: CAD $62,400 (3.5% growth)</li>
                <li>2028: CAD $64,200 (2.9% growth)</li>
              </ul>
            </div>
          </div>
          <EconomicResilienceChart />
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Implementation Timeline & Milestones</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">Phase 1: Foundation (Q3-Q4 2025)</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Infrastructure investment program launch</li>
              <li>Tax incentive framework implementation</li>
              <li>Trade diversification agreements ratification</li>
              <li>Skills training program deployment</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">Phase 2: Acceleration (2026)</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>High-value sector investment deployment</li>
              <li>Export diversification targets achievement</li>
              <li>Productivity enhancement program scaling</li>
              <li>International partnership expansion</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">Phase 3: Consolidation (2027-2028)</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>GDP per capita growth target achievement</li>
              <li>Trade resilience metrics validation</li>
              <li>Long-term competitiveness assessment</li>
              <li>Policy framework optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Risk Mitigation Benefits */}
      <section className="mb-12 bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-100 dark:border-blue-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Quantified Risk Mitigation Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 transition-colors">Trade Shock Resilience</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 transition-colors">
              Higher GDP per capita provides economic buffer against trade disruptions
            </p>
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400 transition-colors">40% Impact Reduction</div>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
            <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2 transition-colors">Employment Protection</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 transition-colors">
              Diversified economy reduces job losses from trade-dependent sectors
            </p>
            <div className="text-lg font-bold text-green-600 dark:text-green-400 transition-colors">300K Jobs Protected</div>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2 transition-colors">Market Volatility Buffer</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 transition-colors">
              Stronger economic fundamentals reduce financial market volatility
            </p>
            <div className="text-lg font-bold text-purple-600 dark:text-purple-400 transition-colors">25% Less Volatility</div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Conclusion</h2>
        <div className="bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            Canada&apos;s economic vulnerability to trade war risks stems primarily from weak GDP per capita growth and over-dependence on US markets. 
            With real GDP per capita declining for two consecutive years and business investment at historically low levels, the economy lacks the 
            resilience needed to withstand external trade shocks. However, this challenge also presents an opportunity to build a more robust, 
            diversified economy through targeted productivity enhancement and strategic investment.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            The policy framework outlined in this report leverages recent infrastructure developments—including Trans Mountain pipeline capacity 
            and new LNG export facilities coming online in mid-2025—while addressing fundamental structural weaknesses. Key to success will be 
            eliminating interprovincial trade barriers, boosting business investment rates from 5.6% to 8.0% of GDP, and accelerating market 
            diversification efforts to reduce US export dependency from 75% to 65%.
          </p>
          <p className="text-gray-700 dark:text-gray-300 transition-colors">
            With proper implementation, Canada can achieve 2.5% annual GDP per capita growth by 2027, creating a substantial buffer against 
            trade war impacts while improving long-term economic competitiveness. The urgency is clear: as Farm Credit Canada notes, 
            &quot;Canada cannot control what its trade partners do, it can influence its own destiny.&quot; Economic resilience cannot be built 
            overnight but requires sustained policy commitment and strategic investment. The time for action is now.
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Download & Share</h2>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            Access the complete dataset and methodology behind this analysis:
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/data/gdp-per-capita-strategy-2025.csv" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Download CSV
            </a>
            <a href="/data/gdp-per-capita-strategy-2025.json" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Download JSON
            </a>
            <a href="/data/gdp-per-capita-strategy-2025.xml" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Download XML
            </a>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Share Report
            </button>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">References</h2>
        <div className="bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
          <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2 transition-colors">
            <p>1. Bank of Canada. (2025). Monetary Policy Report, January 2025. <em>Canadian Outlook</em>.</p>
            <p>2. Bank of Canada. (2025, June 4). The Impact of US Trade Policy on Jobs and Inflation in Canada.</p>
            <p>3. Farm Credit Canada. (2025, March 12). Q1 2025 Economic Snapshot: Long-term opportunities despite short-term trade disruptions.</p>
            <p>4. Statistics Canada. (2025). Gross Domestic Product by Industry, Monthly.</p>
            <p>5. OECD. (2024). Product Market Regulation Indicators. <em>Economic Policy Reforms 2024</em>.</p>
            <p>6. Canadian Science Policy Centre. (2024). Innovation Barriers in Canada: Regulatory Burden Assessment.</p>
            <p>7. Department of Finance Canada. (2025). Budget 2025: Building Economic Resilience.</p>
            <p>8. Export Development Canada. (2025). Trade Diversification Strategy for Canadian Exporters.</p>
          </div>
        </div>
      </section>

      {/* Download Data Section */}
      <section className="mb-12 bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-100 dark:border-green-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Download Analysis Data</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          All economic projections, sector analysis, and policy impact data from this report are available for download.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/data/gdp-per-capita-trade-war-strategy-2025.csv"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">CSV Format</span>
          </a>
          <a 
            href="/data/gdp-per-capita-trade-war-strategy-2025.json"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">JSON Format</span>
          </a>
          <a 
            href="/data/gdp-per-capita-trade-war-strategy-2025.xml"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">XML Format</span>
          </a>
        </div>
      </section>

      {/* Share Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Share This Analysis</h2>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://twitter.com/intent/tweet?url=https://example.com/risk/gdp-per-capita-trade-war&text=GDP Per Capita Growth Strategy to Mitigate Trade War Risks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-[#1DA1F2] text-white rounded-md hover:bg-[#1a91da] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x mr-2" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
            <span>Share on X</span>
          </a>
          <a 
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/risk/gdp-per-capita-trade-war&title=GDP Per Capita Growth Strategy to Mitigate Trade War Risks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-[#0077B5] text-white rounded-md hover:bg-[#006699] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin mr-2" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
            <span>Share on LinkedIn</span>
          </a>
          <a 
            href="mailto:?subject=GDP Per Capita Growth Strategy to Mitigate Trade War Risks&body=Check out this economic analysis: https://example.com/risk/gdp-per-capita-trade-war"
            className="flex items-center px-4 py-2 bg-gray-700 dark:bg-gray-600 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>Share via Email</span>
          </a>
        </div>
      </section>

      {/* References Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Sources & References</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 transition-colors">
          <li>Bank of Canada. (2025, June). The Impact of US Trade Policy on Jobs and Inflation in Canada. Bank of Canada.</li>
          <li>Statistics Canada. (2025, June). Canadian Economic Accounts, First Quarter 2025.</li>
          <li>OECD. (2025). Economic Outlook Database - Canada Productivity Statistics.</li>
          <li>Global Affairs Canada. (2025, May). CETA Enhancement Agreement - Economic Impact Assessment.</li>
          <li>Innovation, Science and Economic Development Canada. (2025). Biennial Productivity Report.</li>
          <li>Parliamentary Budget Officer. (2025, April). Economic and Fiscal Update - Trade War Impact Analysis.</li>
        </ol>
      </section>

      {/* Data Available Note */}
      <section className="text-sm text-gray-600 dark:text-gray-400 mb-8 border-t pt-4 border-gray-200 dark:border-gray-700">
        <p>Economic projections and data available as: CSV, JSON and XML</p>
        <p className="mt-1">
          This analysis was produced from data that can be found at the Bank of Canada Economic Analysis Division in collaboration with 
          Statistics Canada, Innovation, Science and Economic Development Canada, and Global Affairs Canada.
        </p>
      </section>

      {/* Related Risk Reports Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Related Economic Analysis</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          Explore our comprehensive collection of risk analysis reports and economic assessments to understand 
          the full picture of Canada&apos;s economic resilience strategy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RiskReportCard
            title="GDP Per Capita Growth Strategy—2025"
            description="Comprehensive analysis of how GDP per capita growth can mitigate trade war risks through economic diversification and productivity enhancement."
            date="July 2, 2025"
            category="Economic Strategy"
            tags={["GDP Growth", "Trade War", "Economic Resilience"]}
            imageUrl="/images/showcase-economics.jpg"
            href="/risk/gdp-per-capita-trade-war"
            isActive={true}
            usePlaceholder={true}
            downloadLinks={[
              { format: "CSV", url: "/data/gdp-per-capita-trade-war-strategy-2025.csv" },
              { format: "JSON", url: "/data/gdp-per-capita-trade-war-strategy-2025.json" },
              { format: "XML", url: "/data/gdp-per-capita-trade-war-strategy-2025.xml" }
            ]}
          />
          <RiskReportCard
            title="Canadian Financial Stability Report—2025"
            description="Analysis of how the Canadian financial system is responding to US trade policy uncertainty and market volatility."
            date="May 8, 2025"
            category="Financial Risk"
            tags={["Trade War", "Banking", "Market Volatility"]}
            imageUrl="/images/showcase-dataviz.jpg"
            href="/risk/canadian-financial-stability"
            usePlaceholder={true}
            downloadLinks={[
              { format: "CSV", url: "/data/canadian-financial-stability-2025.csv" },
              { format: "JSON", url: "/data/canadian-financial-stability-2025.json" },
              { format: "XML", url: "/data/canadian-financial-stability-2025.xml" }
            ]}
          />
          <RiskReportCard
            title="Productivity & Innovation Investment Analysis"
            description="Deep-dive analysis of Canada's productivity gap and strategic investment opportunities for economic competitiveness."
            date="June 15, 2025"
            category="Economic Analysis"
            tags={["Productivity", "Innovation", "Investment Strategy"]}
            imageUrl="/images/risk-productivity.jpg"
            href="/risk/productivity-innovation-analysis"
            usePlaceholder={true}
            downloadLinks={[
              { format: "CSV", url: "/data/productivity-innovation-2025.csv" }
            ]}
          />
        </div>
      </section>

      {/* Link back to risk page */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          ← Back to Risk Overview
        </Link>
      </div>

      {/* Trade Deficit Analysis & Sustainable Production Framework */}
      <section className="mb-16">
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg shadow-sm p-8 border border-blue-200 dark:border-blue-800 transition-colors">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Trade Deficit Analysis: Core Pillars & Sustainable Solutions</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Main Pillars of Trade Deficit Formation</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-3 transition-colors">
              <li>
                <b>Consumption-Production Imbalance:</b> When domestic consumption exceeds domestic production capacity, leading to increased reliance on imports
              </li>
              <li>
                <b>Currency Strength & Exchange Rates:</b> A strong domestic currency makes imports cheaper and exports more expensive, encouraging import dependency
              </li>
              <li>
                <b>Cost Competitiveness Gap:</b> Higher domestic production costs (labor, regulations, energy) compared to international alternatives
              </li>
              <li>
                <b>Structural Economic Shifts:</b> Transition from manufacturing to service economies, reducing domestic production of tangible goods
              </li>
              <li>
                <b>Investment & Savings Imbalance:</b> Low national savings rates relative to investment needs, requiring foreign capital inflows
              </li>
              <li>
                <b>Technology & Innovation Gaps:</b> Lack of competitive advantage in high-value manufacturing or emerging industries
              </li>
              <li>
                <b>Supply Chain Globalization:</b> Over-reliance on global supply chains without maintaining critical domestic production capabilities
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Sustainable Production-Consumption Strategy Framework</h3>
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-gray-200 dark:border-neutral-700 mb-6 transition-colors">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4 transition-colors">🎯 Strategic Pillar #1: Productivity-Driven Growth</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2 ml-4 transition-colors">
                <li><b>Innovation Investment:</b> R&D spending target of 3-4% of GDP to enhance technological competitiveness</li>
                <li><b>Automation & Efficiency:</b> Smart manufacturing initiatives to reduce production costs while maintaining quality</li>
                <li><b>Skills Development:</b> Workforce retraining programs aligned with high-value production sectors</li>
                <li><b>Digital Transformation:</b> Industry 4.0 adoption to optimize production processes and reduce waste</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-gray-200 dark:border-neutral-700 mb-6 transition-colors">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4 transition-colors">🏭 Strategic Pillar #2: Domestic Production Renaissance</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2 ml-4 transition-colors">
                <li><b>Critical Supply Chain Resilience:</b> Reshoring essential industries (semiconductors, pharmaceuticals, energy)</li>
                <li><b>Regional Manufacturing Hubs:</b> Creating specialized production clusters with competitive advantages</li>
                <li><b>Sustainable Manufacturing:</b> Green production methods that reduce environmental costs while maintaining competitiveness</li>
                <li><b>Public-Private Partnerships:</b> Strategic investments in domestic production capabilities</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-gray-200 dark:border-neutral-700 mb-6 transition-colors">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4 transition-colors">💡 Strategic Pillar #3: Export-Led Growth Model</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2 ml-4 transition-colors">
                <li><b>Market Diversification:</b> Expanding beyond traditional export markets to reduce dependency risk</li>
                <li><b>Value-Added Exports:</b> Focus on high-value manufacturing and services rather than raw materials</li>
                <li><b>Trade Agreement Optimization:</b> Leveraging bilateral and multilateral agreements for market access</li>
                <li><b>Export Finance Support:</b> Enhanced credit facilities and risk insurance for exporters</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-gray-200 dark:border-neutral-700 mb-6 transition-colors">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4 transition-colors">🌱 Strategic Pillar #4: Sustainable Consumption Patterns</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2 ml-4 transition-colors">
                <li><b>Circular Economy Models:</b> Reducing waste and maximizing resource efficiency through recycling and reuse</li>
                <li><b>Local Sourcing Incentives:</b> Tax and regulatory frameworks that favor domestic suppliers</li>
                <li><b>Consumer Awareness:</b> Education campaigns promoting "buy local" and sustainable consumption</li>
                <li><b>Quality Over Quantity:</b> Encouraging durable goods production to reduce replacement cycles</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-gray-200 dark:border-neutral-700 mb-6 transition-colors">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4 transition-colors">⚖️ Strategic Pillar #5: Macroeconomic Balance</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2 ml-4 transition-colors">
                <li><b>Savings Rate Enhancement:</b> Policies to increase national savings rates and reduce foreign dependency</li>
                <li><b>Currency Management:</b> Maintaining competitive exchange rates without triggering trade conflicts</li>
                <li><b>Fiscal Discipline:</b> Reducing government deficits that contribute to trade imbalances</li>
                <li><b>Investment Allocation:</b> Directing capital toward productive sectors rather than consumption</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-100 dark:bg-green-950/30 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-6 transition-colors">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">🌿 Renewable Production Capacity & Sustainable Production-Consumption Balance</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm transition-colors">
              <b>Key Principle:</b> To ensure long-term economic resilience and trade balance sustainability, countries must establish renewable production capacity that consistently produces more value than it consumes, creating a positive net production cycle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 transition-colors">🔄 Renewable Production Strategies</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1 transition-colors">
                  <li><b>Energy Independence:</b> Invest in renewable energy infrastructure to reduce import dependency</li>
                  <li><b>Resource Efficiency:</b> Maximize output per unit of input through advanced technology</li>
                  <li><b>Circular Manufacturing:</b> Design production systems that regenerate their own inputs</li>
                  <li><b>Technology Reinvestment:</b> Channel production surpluses into R&D for continuous improvement</li>
                  <li><b>Skills Regeneration:</b> Continuous workforce development that enhances productive capacity</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3 transition-colors">📊 Production &gt; Consumption Metrics</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1 transition-colors">
                  <li><b>Net Export Value:</b> Maintain positive trade balance across key sectors</li>
                  <li><b>Value-Add Ratio:</b> Domestic value creation exceeds import content by 20%+</li>
                  <li><b>Production Multiplier:</b> Each dollar invested generates &gt;$1.50 in economic output</li>
                  <li><b>Resource Efficiency Index:</b> Declining resource intensity per unit of output</li>
                  <li><b>Innovation Yield:</b> R&D investments translate to measurable productivity gains</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border border-green-200 dark:border-green-800 transition-colors">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">🎯 Implementation Success Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <b className="text-gray-800 dark:text-white transition-colors">Short-term (1-2 years):</b>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1 transition-colors">
                  <li>Domestic production capacity increase: 5-10%</li>
                  <li>Import substitution rate: 15-20%</li>
                  <li>Export growth rate: 8-12% annually</li>
                  <li>Renewable energy share in production: 30%+</li>
                </ul>
              </div>
              <div>
                <b className="text-gray-800 dark:text-white transition-colors">Long-term (3-5 years):</b>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 space-y-1 transition-colors">
                  <li>Trade balance improvement: 30-50%</li>
                  <li>Productivity growth: 3-5% annually</li>
                  <li>Supply chain resilience index: 75+</li>
                  <li>Net production surplus: 25% above consumption</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
