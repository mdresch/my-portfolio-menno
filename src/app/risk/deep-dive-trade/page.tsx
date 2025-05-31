"use client"; // Assuming potential for client-side interactions later

import React from "react";
import Link from "next/link"; // Optional: If you link back or to other sections

export default function DeepDiveTradePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3 text-center">
          Deep Dive on Trade: Wide-Ranging Issues Confront Global Businesses
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Global business leaders highlight risks linked to trade as some of their top concerns — both physical and financial. While the topic is complex and broad, there are opportunities that business leaders can pursue to stay ahead of emerging trade dynamics.
        </p>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">

        {/* --- Key Takeaways --- */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>Trade remains under attack on a variety of interconnected fronts, with geopolitical concerns still a top focus area for businesses in 2025 — and likely to remain a pressing issue.</li>
            <li>Opportunities, however, exist despite growing uncertainties, including a stronger global M&A outlook.</li>
            <li>Businesses can prepare for future volatility by using a variety of risk transfer solutions to mitigate trade risks.</li>
          </ul>
        </div>

        {/* --- Introduction --- */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          Trade is the lifeblood of the global economy. But due to its breadth and scope, it unsurprisingly faces several significant challenges — often interconnected and mutually reinforcing — including geopolitical instability, increasing economic tensions, inflation, climate change, currency fluctuations and people availability. Together, these create a complex and volatile global trade landscape for business leaders to navigate.
        </p>

        {/* --- Trade Trends: Today and Tomorrow --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Trade Trends: Today and Tomorrow</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            All of the top 10 risks identified by business leaders in Aon’s latest Global Risk Management Survey have implications for global trade, with six directly linked:
          </p>
          <ul className="list-decimal list-inside space-y-2 text-gray-700 mb-6 pl-4 text-sm">
            <li>Business interruption</li>
            <li>Economic slowdown/slow recovery</li>
            <li>Supply chain or distribution failure</li>
            <li>Commodity price risk/scarcity of materials</li>
            <li>Damage to reputation/brand</li>
            <li>Increasing competition</li>
          </ul>
        </div>

        {/* --- Movement of Goods and Commodities --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Movement of Goods and Commodities</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Geopolitical instability remains a top concern for businesses. The increasing threat of fragmented societies and protectionism is of growing concern globally.<sup className="text-xs">1</sup> Trade between geopolitically distant economies accounts for nearly 20 percent of global goods trade, but close to 40 percent of trade in globally concentrated products.<sup className="text-xs">2</sup>
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
            “Geopolitical issues remain the primary issue in our global supply chain. They’re reshaping trade channels, resulting in less availability of certain products and commodities. This causes price increases and is central to significant global tension.”
            <footer className="text-sm text-gray-500 mt-2 not-italic">— Richard Waterer, Global Risk Consulting leader</footer>
          </blockquote>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Uncertainty around the scope and scale of tariffs is high, contributing to added global trade tensions.<sup className="text-xs">3</sup> The potential impact of intensifying global trade wars weighs heavily on business leaders with tensions between the U.S., China and the EU among the top geopolitical challenges in 2025.<sup className="text-xs">4</sup>
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Meanwhile, climate obligations are an increasing focus for businesses moving goods and commodities globally. Maritime regulation introduced in 2020 requires ship owners and operators to decrease sulfur emissions by 85 percent. New cleaner fuel can be over 25 percent more expensive, representing a direct financial impact on businesses’ bottom lines.<sup className="text-xs">5</sup> The combination of new regulations and heightened stakeholder scrutiny has the potential to create new reputational exposures and financial impacts — issues that are expected to deepen as companies look to tackle the climate crisis.
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
            “The intersection of supply chain and reputational risks poses a unique potential threat to both an organization’s profitability and brand equity. Quantifying the financial reputation exposure has been a keystone to better supply chain and business decisions.”
            <footer className="text-sm text-gray-500 mt-2 not-italic">— Ladd Muzzy, Global Reputation Risk practice leader</footer>
          </blockquote>
        </div>

        {/* --- An Outlook on Movement of Goods and Commodities --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">An Outlook on Movement of Goods and Commodities</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Supply chain risk is complex, multi-faceted and costly, with disruptions significantly impacting both business and financial performance.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Looking ahead, organizations need to consider enterprise risks associated with their supplier location strategy, including political risk and terrorism, corruption and bribery, and risks related to weak legal and regulatory controls.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Geopolitical risks will remain a significant concern for international business, especially where they are reliant on supply chains with exposures to volatile regions and sea lanes.
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
            “Geopolitical tensions and an increasingly tense and fragmented geopolitical landscape are top concerns for global businesses because they represent a potential source of vulnerability to supply chain disruption risks. Escalating trade wars, with the potential to lead to trade restrictions, sanctions and counter-sanctions, may complicate supply chains for many clients.”
            <footer className="text-sm text-gray-500 mt-2 not-italic">— John Minor, Structured Credit & Political Risk practice leader, North America</footer>
          </blockquote>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
            Currency exchange fluctuations, inflation, near-shoring, climate issues and the availability of qualified people are all interconnected and impacting trade right now.
            <footer className="text-sm text-gray-500 mt-2 not-italic">— Lee Meyrick, Co-Lead, Global Specialties and CEO of Global Marine Practice</footer>
          </blockquote>
        </div>

        {/* --- M&A Dynamics --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">M&A Dynamics</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In addition to the movement of goods and commodities, the role of mergers and acquisitions (M&A) is significant in shaping the landscape for global trade. Deal flows continue to accelerate as demand increases and capital comes back into play, according to Aon’s 2025 Deal Market View. Following the U.S. elections, expectations are widespread that M&A activity will increase, however, questions remain on how potential tariffs and trade wars will impact the market.<sup className="text-xs">6</sup>
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            According to Aon’s Global Risk Management Survey, dealmakers and risk managers consider the top five financial risks to be:
          </p>
          <ul className="list-decimal list-inside space-y-2 text-gray-700 mb-6 pl-4 text-sm">
            <li>Cash flow or liquidity risk</li>
            <li>Capital availability</li>
            <li>Interest rate fluctuations</li>
            <li>Asset price volatility</li>
            <li>Business interruption</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Each risk intersects, amplifying the threats financiers face.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Macroeconomic volatility and increasingly complex regulatory regimes have affected M&A market dynamics over the past two years. Access to capital has become increasingly challenging, with elevated interest rates making the cost of borrowing more expensive.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            All things considered, M&A momentum is demonstrating remarkable resilience to today’s macro pressures, according to Aon’s The ABCs of Private Equity M&A report. In a survey of senior executives from corporate development teams and private equity firms, most respondents expect deal activity to increase in the next 12 months.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Specifically, more than 60 percent expect a strong or moderate rise, driven by improving market conditions and capital availability. After several years of a challenging regulatory environment for M&A, regulatory agencies are widely expected to be more receptive to combinations that meet the required statutory factors, as well as reducing burdens for new entrants. Reducing burdens and a more predictable review process will likely result in shorter deal timelines, which in turn, can increase deal activity.
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
            “Macro factors were indeed squeezing clients and creating headwinds for M&A. But over the last more than 12 months, we've been seeing the market rebound as the volatility coming from those factors subsides. Moreover, anticipated tax legislation is in the U.S. and trade uncertainties do not yet appear to be insurmountable headwinds.”
            <footer className="text-sm text-gray-500 mt-2 not-italic">— Gary Blitz, CEO for Global M&A and Transaction Solutions</footer>
          </blockquote>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This should bode well for broader trade dynamics. M&A is being further bolstered by sellers having more options to achieve exits through IPOs and corporate sales; however, secondaries continue to provide a vehicle for liquidity. The accelerated M&A activity is supported by significant dry powder at financial sponsors and a backlog of companies ready for sale.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In Aon’s ABCs of Private Equity M&A report, 44 percent of respondents predicted sales to corporates over the next 12 months as the largest volume of company sales.<sup className="text-xs">7</sup> These buyers are seen as reliable and willing to pay a premium for acquisitions. Secondaries closely followed, with 32 percent favoring this increasingly popular method of realizing liquidity. Secondaries offer a reliable alternative in times of market volatility and macroeconomic uncertainty.
          </p>
        </div>

        {/* --- An Outlook on Financial Trade M&A --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">An Outlook on Financial Trade M&A</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Global growth is projected at 3.3 percent in both 2025 and 2026, below the historical average of 3.7 percent, according to the World Economic Outlook.<sup className="text-xs">8</sup> Inflation is also falling faster than expected in most regions — down to 5.8 percent in 2024 and predicted to reach 4.2 percent in 2025 and 3.5 percent in 2026. The likelihood of a hard economic landing is receding, and risks to global growth are broadly balanced.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            As such, the key word in M&A — and trade more broadly — is stability, which the global economy appears to be delivering to dealmakers in 2025.
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
            The world is returning to one where dealmakers are more confident in pursuing deals, knowing that the ground under them will not turn to quicksand the following day.
            <footer className="text-sm text-gray-500 mt-2 not-italic">— Gary Blitz, CEO, Global M&A and Transaction Solutions</footer>
          </blockquote>
          <p className="text-gray-700 mb-4 leading-relaxed">
            To prepare, executives should embrace deeper due diligence efforts across key risk areas, including cyber security and workforce optimization. Where initial reviews can give a broad sense of the risks facing a transaction, in-depth due diligence is necessary to delve into the broad spectrum of potential liabilities facing a deal, which include operational capabilities, compliance, sustainability and inconsistencies in supply chains.<sup className="text-xs">9</sup> They should also develop a robust risk transfer strategy that leverages transaction insurance capital to de-risk transactions.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Despite evolving risks, deals are providing opportunities to invest in digital and sustainability capabilities, which are helping to bolster dealmaking prospects in several sectors, including telecommunications and digital technologies, industrials and chemicals, and renewable energies.
          </p>
        </div>

        {/* --- How Businesses Can Prepare for Change --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Businesses Can Prepare for Change</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            There are three opportunities businesses need to consider when navigating global trade risks.
          </p>

          {/* Opportunity 1 */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              <span className="text-blue-600 font-bold mr-2">1.</span> Build a Singular Supply Chain Strategy
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Building visibility into the supply chain is the cornerstone of mitigating risk. A single strategy for supply chain risk is about a single version of the truth — a taxonomy of supply chain issues that the firm agrees they face consistently and, most importantly, a singular understanding of possible outcomes.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Harnessing data and analytics to build transparency around your most important suppliers, their geographic location and their dependency on third parties will be critical as risks evolve. Awareness of the costs of supply chain failures will help leaders take proactive steps to invest in mitigating existing risks and their potential impact.
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4 text-sm">
              “From a risk strategy point of view, it starts with an understanding of where the risk is in the supply chain and quantifying it. If you have a picture of your top risks and an understanding of your level of exposure, that will frame the decisions that you want to make as an organization, informing an appropriate balance of risk and reward.”
              <footer className="text-xs text-gray-500 mt-1 not-italic">— Richard Waterer</footer>
            </blockquote>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Related Capabilities:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
                <li>Risk Analytics</li>
                <li>Crisis Management</li>
                <li>M&A</li>
                <li>Trade Credit Solutions</li>
              </ul>
            </div>
          </div>

          {/* Opportunity 2 */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              <span className="text-blue-600 font-bold mr-2">2.</span> Leverage Data and Analytics
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              While the economic outlook can impact when and how businesses exercise their capital, whether through internal investments — such as risk management — or external transactions — such as M&A activities — data and analytics will remain the bedrock of better decisions. We have seen this help in three scenarios:
            </p>
            <ul className="list-decimal list-inside space-y-2 text-gray-700 mb-4 pl-4 text-sm">
              <li>The company already has information on its supply chain. It hopes to revisit its insurance program to see what kind of coverage is in place and if it can cover the losses the company may incur due to an interruption from a third-party supplier.</li>
              <li>The company is uncomfortable accepting its current level of risk and wants to enhance risk management. Data and analytics can support the assessment of supplier risk and the auditing of supplier risk management. This includes understanding levels of supplier utilization and determining fallback positions in the event of an interruption. This type of analysis helps companies decide whether they need to adjust their supply chain risk management, like identifying a dual source supplier.</li>
              <li>The company has recognized that the risk exposure is significant. Therefore, they address it in the supply chain strategy by bringing production closer, changing suppliers, assessing deal sourcing, inventory management or holding more stock.</li>
            </ul>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4 text-sm">
              “Supply chain risk management should be truly enterprise-wide, connecting risk and insurance professionals with senior directors in supply chain, procurement, treasury, strategy and operations, around a common set of data and decision making.”
              <footer className="text-xs text-gray-500 mt-1 not-italic">— Derrick Oracki, managing director and actuary in Aon’s Global Risk Consulting practice</footer>
            </blockquote>
          </div>

          {/* Opportunity 3 */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              <span className="text-blue-600 font-bold mr-2">3.</span> Use Insurance Risk Transfer
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Specialist solutions are critical in helping organizations navigate volatility and mitigate the risks inherent in trade through supply chain risk management. They can also help facilitate the pursuit of complex M&A transactions. Data-driven insights allow leaders to make informed decisions about material risks and how to address potential exposures.
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4 text-sm">
              “Our insurance markets are adept at accepting risk transfer of known and unknown risks, including tax and contingent risks and breaches of reps and warranties, which allows a more economically efficient structure to protect a buyer and a cleaner exit for a seller.”
              <footer className="text-xs text-gray-500 mt-1 not-italic">— Gary Blitz</footer>
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              In response, supply chains may shorten as more businesses consider the use of nearshoring as an operational strategy to overcome evolving supply chain risks. Data will be central to decision making. Improved insights around where and how risk impacts the supply chain can help inform business leaders as they prepare for unplanned events and volatile supplier performance.
            </p>
          </div>
        </div>

        {/* Placeholder for Footnotes/References */}
        <div className="border-t border-gray-200 pt-6 mt-6 text-xs text-gray-500">
          <p>References:</p>
          <ol className="list-decimal list-inside space-y-1 pl-4">
            <li>Source reference for fragmented societies/protectionism.</li>
            <li>Source reference for trade percentages.</li>
            <li>Source reference for tariff uncertainty.</li>
            <li>Source reference for US/China/EU tensions.</li>
            <li>Source reference for maritime fuel costs.</li>
            <li>Source reference for M&A outlook post-elections.</li>
            <li>Source reference for Aon's ABCs report (corporate sales %).</li>
            <li>Source reference for World Economic Outlook growth/inflation.</li>
            <li>Source reference for due diligence importance.</li>
          </ol>
          {/* Add actual references here */}
        </div>

      </section>

      {/* Optional: Link back to main risk page or home */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-blue-600 hover:underline mr-4">
          ← Back to Risk Overview
        </Link>
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}