"use client";

import React from "react";
import Link from "next/link";
import InteractiveRiskMap from "../../components/risk/InteractiveRiskMap"; // Adjust path
import RiskReportCard from "../../components/risk/RiskReportCard";

export default function RiskOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <style jsx global>{`
        .risk-card-hover {
          transition: transform 0.18s cubic-bezier(0.4,0,0.2,1), box-shadow 0.18s cubic-bezier(0.4,0,0.2,1);
        }
        .risk-card-hover:hover {
          transform: translateY(-4px) scale(1.025);
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.08);
          z-index: 2;
        }
      `}</style>
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Risk Analysis & Reports</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors">
          Interactive visualizations and in-depth analysis of financial, geopolitical, and market risks
        </p>
        <div className="h-1 w-24 bg-blue-600 dark:bg-blue-500"></div>
      </header>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Featured Risk Analysis</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
              Our risk analysis reports provide in-depth assessments of market trends, geopolitical developments, and financial
              stability concerns. Each report includes interactive data visualizations to help you understand complex risk factors.
            </p>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Real-time data visualizations
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Expert analysis and commentary
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Scenario-based risk modeling
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Downloadable datasets
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 relative overflow-hidden border border-blue-100 dark:border-blue-900/50">
            <div className="absolute right-0 top-0 w-32 h-32 bg-blue-100 dark:bg-blue-800/20 rounded-full transform translate-x-8 -translate-y-8"></div>
            <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-100 dark:bg-blue-800/20 rounded-full transform -translate-x-8 translate-y-8"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 transition-colors">Latest Update</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors">May 12, 2025</p>
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-2 transition-colors">
                ECB Financial Stability Report—2025: Navigating a Trade War
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                Analysis of how the ECB financial system is responding to US trade policy uncertainty and market volatility in 2025.
              </p>
              <Link 
                href="/risk/ecb-financial-stability" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                View Interactive Report
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Risk Reports Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 0 - ECB Financial Stability */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="ECB Financial Stability Report—2025"
              description="Analysis of how the ECB financial system is responding to US trade policy uncertainty and market volatility in 2025."
              date="May 12, 2025"
              category="Financial Risk"
              tags={["Trade War", "Banking", "Market Volatility"]}
              imageUrl="/images/showcase-dataviz.jpg"
              href="/risk/ecb-financial-stability"
              usePlaceholder={false} // Using placeholder until images are ready
              isComingSoon={false}
              downloadLinks={[
                { format: "CSV", url: "/data/ecb-financial-stability-2025.csv" },
                { format: "JSON", url: "/data/ecb-financial-stability-2025.json" },
                { format: "XML", url: "/data/ecb-financial-stability-2025.xml" }
              ]}
            />
          </div>
          {/* Card 1 - Canadian Financial Stability */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Canadian Financial Stability Report—2025"
              description="Analysis of how the Canadian financial system is responding to US trade policy uncertainty and market volatility in 2025."
              date="May 8, 2025"
              category="Financial Risk"
              tags={["Trade War", "Banking", "Market Volatility"]}
              imageUrl="/images/showcase-dataviz.jpg"
              href="/risk/canadian-financial-stability"
              usePlaceholder={false} // Using placeholder until images are ready
              downloadLinks={[
                { format: "CSV", url: "/data/canadian-financial-stability-2025.csv" },
                { format: "JSON", url: "/data/canadian-financial-stability-2025.json" },
                { format: "XML", url: "/data/canadian-financial-stability-2025.xml" }
              ]}
            />
          </div>
          
          {/* Card 2 - Deep Dive Trade War */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Global Trade War Analysis"
              description="Deep dive into potential scenarios in the evolving US-China-EU trade conflict and implications for financial markets."
              date="April 15, 2025"
              category="Geopolitical Risk"
              tags={["Trade War", "Geopolitics", "Scenario Analysis"]}
              imageUrl="/images/risk-management-1.jpg"
              href="/risk/deep-dive-trade"
              usePlaceholder={false} // Using placeholder until images are ready
              downloadLinks={[
                { format: "CSV", url: "/data/trade-war-scenarios.csv" },
                { format: "JSON", url: "/data/trade-war-scenarios.json" }
              ]}
            />
          </div>
          
          {/* Card 3 - Climate Financial Impact */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Climate Risk Financial Impact"
              description="Analysis of long-term climate risks to financial stability, including transition risks and physical asset exposures."
              date="March 22, 2025"
              category="Environmental Risk"
              tags={["Climate Change", "Transition Risk", "Long-term Analysis"]}
              imageUrl="/images/riskmanagement2.jpg"
              href="/risk/climate-financial-impact"
              usePlaceholder={false} // Using placeholder until images are ready
              downloadLinks={[
                { format: "CSV", url: "/data/climate-risk-data.csv" }
              ]}
            />
          </div>

          {/* Legal Payment Tender Risks UK */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Legal Payment Tender UK Analysis"
              description="Comprehensive assessment of regulatory changes affecting payment systems and digital currency frameworks in the United Kingdom, with focus on CBDC development and private stablecoin regulation."
              date="May 2, 2025"
              category="Regulatory Risk"
              tags={["CBDC", "Digital Payments", "Regulation"]}
              imageUrl="/images/riskmanagement3.jpg"
              href="/risk/legal-payment-tender-uk"
              usePlaceholder={false}
              downloadLinks={[
                { format: "CSV", url: "/data/uk-payment-systems-data.csv" },
                { format: "JSON", url: "/data/uk-payment-systems-data.json" }
              ]}
            />
          </div>

          {/* global business complexity index */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Global Business Complexity Index"
              description="Analysis of the Global Business Complexity Index (GBCI) to assess the regulatory environment and business complexity across different countries."
              date="May 2, 2025"
              category="Regulatory Risk"
              tags={["GBCI", "Global Business Complexity Index", "Regulation"]}
              imageUrl="/images/showcase-dataviz5.jpg"
              href="/risk/global-business-complexity-index"
              usePlaceholder={false}
              downloadLinks={[
                { format: "CSV", url: "/data/global-business-complexity-index.csv" },
                { format: "JSON", url: "/data/global-business-complexity-index.json" }
              ]}
            />
          </div>

          {/* GDP Per Capita Trade War Risk */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="GDP Per Capita & Trade War Risk"
              description="Strategic analysis of how GDP per capita growth can be leveraged to mitigate trade war risks, with focus on Canadian economic indicators and policy recommendations."
              date="July 2, 2025"
              category="Economic Risk"
              tags={["GDP Growth", "Trade War", "Economic Policy"]}
              imageUrl="/images/showcase-dataviz.jpg"
              href="/risk/gdp-per-capita-trade-war"
              usePlaceholder={false}
              downloadLinks={[
                { format: "CSV", url: "/data/gdp-trade-war-data.csv" },
                { format: "JSON", url: "/data/gdp-trade-war-data.json" },
                { format: "XML", url: "/data/gdp-trade-war-data.xml" }
              ]}
            />
          </div>

        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Global Risk Map</h2>
        <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
          <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
            Explore financial stability and risk factors across different regions. Click on regions to view detailed risk assessments and key vulnerabilities.
          </p>          <div className="h-[500px] w-full relative">
            <InteractiveRiskMap className="w-full h-full absolute inset-0" />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 transition-colors">
            Data updated: May 2025. Risk levels are calculated based on economic indicators, market volatility, and geopolitical factors.
          </p>
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6 text-center transition-colors">
          All Risk Analysis Reports
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto transition-colors">
          Browse our complete collection of risk analysis reports covering various financial sectors, geopolitical events, and emerging threats.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Canadian Financial Stability */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Canadian Financial Stability Report—2025"
              description="Analysis of how the Canadian financial system is responding to US trade policy uncertainty and market volatility."
              date="May 8, 2025"
              category="Financial Risk"
              tags={["Trade War", "Banking", "Market Volatility"]}
              imageUrl="/images/showcase-dataviz.jpg"
              href="/risk/canadian-financial-stability"
              usePlaceholder={false}
              downloadLinks={[
                { format: "CSV", url: "/data/canadian-financial-stability-2025.csv" },
                { format: "JSON", url: "/data/canadian-financial-stability-2025.json" },
                { format: "XML", url: "/data/canadian-financial-stability-2025.xml" }
              ]}
            />
          </div>

          {/* GDP Per Capita Trade War Risk */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="GDP Per Capita & Trade War Risk"
              description="Strategic analysis of how GDP per capita growth can be leveraged to mitigate trade war risks, with focus on Canadian economic indicators and policy recommendations."
              date="July 2, 2025"
              category="Economic Risk"
              tags={["GDP Growth", "Trade War", "Economic Policy"]}
              imageUrl="/images/showcase-dataviz.jpg"
              href="/risk/gdp-per-capita-trade-war"
              usePlaceholder={false}
              downloadLinks={[
                { format: "CSV", url: "/data/gdp-trade-war-data.csv" },
                { format: "JSON", url: "/data/gdp-trade-war-data.json" },
                { format: "XML", url: "/data/gdp-trade-war-data.xml" }
              ]}
            />
          </div>
          
          {/* Deep Dive Trade Analysis */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Global Trade War Analysis"
              description="Deep dive into potential scenarios in the evolving US-China-EU trade conflict and implications for financial markets."
              date="April 15, 2025"
              category="Geopolitical Risk"
              tags={["Trade War", "Geopolitics", "Scenario Analysis"]}
              imageUrl="/images/risk-management-1.jpg"
              href="/risk/deep-dive-trade"
              usePlaceholder={false}
              downloadLinks={[
                { format: "CSV", url: "/data/trade-war-scenarios.csv" },
                { format: "JSON", url: "/data/trade-war-scenarios.json" }
              ]}
            />
          </div>
          
          {/* Climate Financial Impact */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Climate Risk Financial Impact"
              description="Analysis of long-term climate risks to financial stability, including transition risks and physical asset exposures."
              date="March 22, 2025"
              category="Environmental Risk"
              tags={["Climate Change", "Transition Risk", "Long-term Analysis"]}
              imageUrl="/images/riskmanagement2.jpg"
              href="/risk/climate-financial-impact"
              usePlaceholder={false}
              downloadLinks={[
                { format: "CSV", url: "/data/climate-risk-data.csv" }
              ]}
            />
          </div>
          
          {/* European Banking System Health */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="European Banking System Health"
              description="Comprehensive assessment of European banking sector vulnerabilities, capital adequacy, and stress test results."
              date="February 28, 2025"
              category="Financial Risk"
              tags={["Banking", "Europe", "Stress Tests"]}
              imageUrl="/images/riskmanagement3.jpg"
              href="/risk/european-banking-health"
              usePlaceholder={false}
              downloadLinks={[
                { format: "CSV", url: "/data/eu-banking-data.csv" }
              ]}
            />
          </div>
          
          {/* Global Liquidity Trends */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Global Liquidity Trends Report"
              description="Analysis of global liquidity conditions, central bank interventions, and implications for financial market stability."
              date="January 15, 2025"
              category="Market Risk"
              tags={["Liquidity", "Central Banks", "Market Stability"]}
              imageUrl="/images/riskmanagement4.jpg"
              href="/risk/global-liquidity-trends"
              usePlaceholder={false}
              downloadLinks={[
                { format: "CSV", url: "/data/global-liquidity-data.csv" },
                { format: "JSON", url: "/data/global-liquidity-data.json" }
              ]}
            />
          </div>
          
          {/* Cryptocurrency Market Stability */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Cryptocurrency Market Stability"
              description="Risk assessment of cryptocurrency markets, regulatory developments, and potential contagion to traditional financial systems."
              date="December 10, 2024"
              category="Emerging Risk"
              tags={["Crypto", "Digital Assets", "Regulation"]}
              imageUrl="/images/riskmanagement5.jpg"
              href="/risk/crypto-market-stability"
              usePlaceholder={false}
              downloadLinks={[
                { format: "CSV", url: "/data/crypto-stability-data.csv" }
              ]}
            />
          </div>
          
          {/* Sovereign Debt Crisis Risks */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Sovereign Debt Crisis Risk Monitor"
              description="Analysis of global sovereign debt levels, sustainability metrics, and potential triggers for sovereign debt crises."
              date="November 5, 2024"
              category="Sovereign Risk"
              tags={["Debt", "Government", "Fiscal Policy"]}
              imageUrl="/images/riskmanagement6.jpg"
              href="/risk/sovereign-debt-monitor"
              usePlaceholder={false}
              isComingSoon={false}
              downloadLinks={[
                { format: "CSV", url: "/data/sovereign-debt-data.csv" },
                { format: "JSON", url: "/data/sovereign-debt-data.json" }
              ]}
            />
          </div>
          
          {/* Supply Chain Disruption Analysis */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Supply Chain Disruption Analysis"
              description="Assessment of global supply chain vulnerabilities, resilience metrics, and financial impact of disruption scenarios."
              date="October 20, 2024"
              category="Operational Risk"
              tags={["Supply Chain", "Logistics", "Business Continuity"]}
              imageUrl="/images/showcase-dataviz3.jpg"
              href="/risk/supply-chain-disruption"
              usePlaceholder={false}
              isComingSoon={false}
              downloadLinks={[
                { format: "CSV", url: "/data/supply-chain-data.csv" }
              ]}
            />
          </div>
            
          {/* Legal Payment Risks (Coming Soon) */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Legal Payment Tender Risks UK 2025"
              description="Analysis of regulatory changes affecting payment systems and legal tender in the UK. This report will examine the implications of new digital currency regulations."
              date="Expected July 2025"
              category="Regulatory Risk"
              tags={["Regulatory", "Payments", "Legal"]}
              imageUrl="/images/showcase-dataviz4.jpg"
              href="/risk/legal-payment-tender-uk"
              usePlaceholder={false}
              isComingSoon={false}
            />
          </div>
          
          {/* Cybersecurity Risk (Coming Soon) */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Financial System Cybersecurity Risk Report"
              description="Analysis of emerging cybersecurity threats to financial institutions and critical financial infrastructure. Includes vulnerability assessments and resilience strategies."
              date="Expected August 2025"
              category="Cybersecurity Risk"
              tags={["Cyber", "Security", "Digital Infrastructure"]}
              imageUrl="/images/showcase-dataviz5.jpg"
              href="/risk/cybersecurity-financial"
              usePlaceholder={false}
              isComingSoon={false}
            />
          </div>
                    
          {/* Energy Transition Political Risk */}
          <div className="risk-card-hover">
            <RiskReportCard
              title="Energy Transition Political Risks"
              description="The energy transition is evolving into a complex interplay between policy, finance, and risk management, incorporating standardized carbon credit markets"
              date="May 01, 2025"
              category="Political Risk"
              tags={["Energy Transition", "Political Risk", "Geopolitical"]}
              imageUrl="/images/risk-management-1.jpg"
              href="/risk/energy-transition-political-risks"
              usePlaceholder={false}
              isComingSoon={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
