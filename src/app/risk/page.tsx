import React from 'react';
import Link from 'next/link'; // Optional: If you link to a full report
import InteractiveRiskMap from '@/components/risk/InteractiveRiskMap'; // Adjust path

export default function RiskPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Navigating Global Risk</h1>
        <p className="text-lg text-gray-600">Adapting Risk Management to Today's Geopolitical Landscape</p>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Is your organization equipped to adapt its risk management strategies in response to today's complex and rapidly evolving geopolitical landscape? Understanding global risk is more critical than ever for maintaining resilience and making sound strategic decisions.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Insights from the 2025 World Risk Review</h2>
          <p className="text-gray-700">
            Drawing on our comprehensive analysis of 197 countries and territories, the World Risk Review provides a succinct summary of the most crucial risk information you need for 2025.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leverage the Report to:</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
          <li>
            <strong>Gain a comprehensive understanding</strong> of risk trends to inform your risk management strategies.
          </li>
          <li>
            <strong>Make informed decisions</strong> about expanding into new regions or markets, protecting existing supply chains, and mitigating uncertainty.
          </li>
          <li>
            <strong>Identify potential risks and opportunities</strong> that may impact your employees, assets, operations, and supply chain.
          </li>
          <li>
            <strong>Learn actionable steps</strong> your organization can take now to build and maintain resilience against geoeconomic and geopolitical uncertainties.
          </li>
        </ul>

        {/* Optional: Add a call to action if there's a report to link to */}
        {/* <div className="text-center mt-8">
          <Link href="/path/to/full-report" className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition duration-200">
            Access the Full 2025 Report
          </Link>
        </div> */}

        <div className="mt-10 text-center text-sm text-gray-500">
          Prepare your organization for the challenges and opportunities of the year ahead.
        </div>
      </section>

      {/* --- Wide-Ranging Trade Issues Section --- */}
      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-12 border border-gray-200">
         <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Wide-Ranging Trade Issues Confront Global Businesses</h2>
         <p className="text-gray-700 mb-4 leading-relaxed">
           Trade is the lifeblood of the global economy, but supply chain challenges are creating concerns for business leaders in 2024 and beyond. The M&A landscape is also facing interconnected risks, with signs of optimism on the horizon in a rebounding market.
         </p>
         <p className="text-gray-700 mb-4 leading-relaxed">
           Global trade patterns are experiencing structural shifts, causing tensions and significant supply chain challenges for businesses — from geopolitical instability, trade restrictions and inflation, to climate risk, currency fluctuations and an evolving labor market.
         </p>
         <p className="text-gray-700 mb-4 leading-relaxed">
           These interconnected risks create a complex global trade environment, unsurprisingly landing as a top concern for business leaders. Meanwhile, on the financial transactions side, optimism is returning to the mergers and acquisitions (M&A) landscape after several years of limited activity.
         </p>
         <p className="text-gray-700 leading-relaxed">
           While the topic of trade is multifaceted and broad, there are opportunities that business leaders can pursue to make better decisions that will help organizations stay ahead of emerging dynamics now and in the future.
         </p>
      </section>

      {/* --- Trade Insights Collection Section --- */}
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Trade Insights Collection</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Our Trade Collection gives you access to the latest insights from Aon's thought leaders on navigating the evolving risks and opportunities for international business.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Reach out to our team to understand how to make better decisions around macro trends and why they matter to businesses.
        </p>
        {/* Optional: Add a contact link/button */}
        <div className="mt-6">
           <Link href="/contact" className="inline-block bg-blue-600 text-white font-semibold py-2 px-5 rounded hover:bg-blue-700 transition duration-200 text-sm">
              Contact Our Team
           </Link>
        </div>
      </section>

      {/* --- NEW: 2025 Financial Stability & IMF Policy Recommendations --- */}
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12 border border-blue-400">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">2025 Financial Stability Risks & IMF Policy Recommendations</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <b>Here is a summary of the key points from Chapter 1 and the policy recommendations outlined:</b>
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Summary of Key Points</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><b>Increased Financial Stability Risks:</b> Global financial stability risks have risen sharply since October 2024, driven by tighter global financial conditions and heightened uncertainty, especially after the surprise US tariff announcements on April 2, 2025, and subsequent retaliation.</li>
          <li><b>Impact of Trade Tariffs:</b> Tariff announcements triggered volatile market reactions: plunging stocks, gyrating bond yields, depreciating emerging market currencies, and wider corporate bond spreads.</li>
          <li><b>Elevated Downside Growth Risk:</b> The IMF's Growth-at-Risk model now forecasts a 5% chance of global growth falling below 0.4% in the year ahead—a notable deterioration.</li>
          <li><b>Three Key Vulnerabilities:</b>
            <ul className="list-disc ml-6 space-y-1">
              <li>Further asset price corrections (especially US tech, corporate bonds, Bitcoin).</li>
              <li>Potential strains on leveraged financial institutions, especially NBFIs and private credit funds.</li>
              <li>Turbulence in sovereign bond markets, especially in high-debt jurisdictions and emerging markets.</li>
            </ul>
          </li>
          <li><b>Challenges for Global Banks:</b> Banks face headwinds from trade shocks, loan loss reversals, margin pressure, trade finance disruption, and US dollar funding risks for non-US banks.</li>
          <li><b>Emerging & Frontier Market Pressures:</b> EM assets face headwinds from trade tensions, high financing needs, and increased capital outflow risks. Frontier and low-income economies face higher yields and refinancing concerns.</li>
          <li><b>China's Bond Market Risks:</b> External (tariffs) and domestic (property, local government debt) challenges weigh on growth and sentiment, raising concentration and volatility risks.</li>
          <li><b>Corporate & Household Vulnerabilities:</b> Corporate bankruptcies are rising, cash buffers are down, and refinancing costs are up. Households are more exposed to stock market declines and higher debt service ratios.</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Policy Recommendations</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><b>Enhance Preparedness:</b> Ensure financial institutions can access central bank liquidity, test this access, and be ready to intervene early in core markets if needed.</li>
          <li><b>Implement Resolution Frameworks:</b> Apply recovery and resolution frameworks for weak or failing financial institutions to avoid systemic risks.</li>
          <li><b>Calibrate Monetary Policy:</b> Ease policy gradually where growth/inflation slow; remain restrictive where inflation is stubborn.</li>
          <li><b>Tailor EM Policy Responses:</b> Use country-specific tools (exchange rate flexibility, FX intervention, capital flow management) and strengthen institutions.</li>
          <li><b>Strengthen Bank Prudential Frameworks:</b> Fully implement Basel III and international standards; enhance supervision.</li>
          <li><b>Stress Test Banks:</b> Continue stress-testing, especially for exposures to challenged sectors and NBFI linkages.</li>
          <li><b>Mitigate NBFI Vulnerabilities:</b> Strengthen policies to address nonbank leverage and improve reporting and monitoring.</li>
          <li><b>Calibrate Macroprudential Tools:</b> Tighten or release buffers as needed to support resilience and credit supply.</li>
          <li><b>Pursue Fiscal Adjustments:</b> Focus on credible, growth-friendly fiscal adjustments to keep debt and financing costs manageable.</li>
          <li><b>Manage Sovereign Debt:</b> Proactively manage refinancing risks and engage early with creditors if needed.</li>
          <li><b>Address Crypto Risks:</b> Safeguard monetary sovereignty, adopt clear tax treatment, and implement international standards for crypto assets.</li>
          <li><b>Enhance International Cooperation:</b> Strengthen multilateral surveillance and the global financial safety net to mitigate systemic risks.</li>
        </ul>
      </section>

      {/* --- Explore Key Risk Areas & Solutions Section --- */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Explore Key Risk Areas, Insights & Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Supply Chain Top 25 Card - NEW */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-red-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-red-100 text-red-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Gartner Supply Chain Top 25 for 2024</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Explore the renowned annual ranking of the world's superior supply chains, featuring companies that deliver beyond products—understanding customer value, investing in demand management, and promoting ESG innovation.
            </p>
            <Link href="/risk/supply-chain-top-25" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              View Rankings →
            </Link>
          </div>

          {/* Gartner Regulatory Risk Survey Card - NEW */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-red-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-red-100 text-red-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Gartner: Unsettled Regulatory Environment Tops Emerging Risks</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Survey of 266 senior enterprise risk executives reveals that regulatory uncertainty has become the top emerging risk concern in Q1 2025, driven by political shifts and divergent AI regulation approaches.
            </p>
            <Link href="/risk/gartner-regulatory-risk-survey" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read Survey Findings →
            </Link>
          </div>

          {/* Geopolitical Nerve Center Card - NEW FEATURE */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-red-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-red-100 text-red-800 px-2 py-0.5 rounded-full">FEATURED</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Navigating Tariffs with a Geopolitical Nerve Center</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Learn how a nerve center can help companies chart a course through expanding tariffs and trade controls by orchestrating nine rapid actions, from tariff operations to supplier diversification.
            </p>
            <Link href="/risk/geopolitical-nerve-center" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read Article →
            </Link>
          </div>

          {/* Global Business Complexity Index Card - NEW FEATURE */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-blue-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Business Complexity Index</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Understand and navigate global regulatory complexity with our comprehensive index ranking 77 jurisdictions based on business complexity across regulatory, tax, corporate, and HR dimensions.
            </p>
            <Link href="/risk/global-business-complexity-index" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Explore the Index →
            </Link>
          </div>
          
          {/* Shifting Trade Flows Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Shifting Trade Flows</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Analyze the evolution towards disruption and protectionism in global trade, the rise of "connector" countries, and the implications for supply chain resilience.
            </p>
            <Link href="/risk/shifting-trade-flows" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Learn More →
            </Link>
          </div>

          {/* Mitigating Geopolitics Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Mitigating Geopolitics on Operations</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Understand how declining systemic constraints, the growing role of individual leaders, record public debt, and countervailing measures exacerbate operational risks.
            </p>
            <Link href="/risk/mitigating-geopolitics" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Learn More →
            </Link>
          </div>

          {/* Energy Transition Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Energy Transition Political Risks</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Examine the political risks associated with carbon credit markets (CCMs), debt-for-nature swaps (DFNSs), and the changing landscape of climate regulations.
            </p>
            <Link href="/risk/energy-transition-political-risks" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Learn More →
            </Link>
          </div>

          {/* Solutions Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Risk Mitigation Solutions</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Discover specialist advice and insurance solutions designed to help organizations measure, manage, and minimize geopolitical risks while seizing opportunities.
            </p>
            <Link href="/risk/solutions" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Explore Solutions →
            </Link>
          </div>

          {/* --- NEW: Global Risk Management Survey Card --- */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Risk Management Survey</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Explore the 2023/2024 report findings on how interconnected risks like trade, technology, weather, and workforce stability are challenging business leaders.
            </p>
            <Link href="/risk/global-risk-management-survey" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              View Survey Insights →
            </Link>
          </div>

          {/* --- NEW: Cargo Theft Mitigation Card --- */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cargo Theft Mitigation</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Learn about the evolving threat of cargo theft and discover 5 key strategies, including technology and vetting, to protect your supply chain.
            </p>
            <Link href="/risk/cargo-theft-mitigation" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read Mitigation Strategies →
            </Link>
          </div>

          {/* --- NEW: Podcast: Trade & Supply Chain Card --- */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Podcast: Trade & Supply Chain</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Listen to Aon experts discuss the impact of global conflicts on supply chains and strategies for proactive risk management in this special edition podcast.
            </p>
            <Link href="/risk/podcast-special-edition-trade" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Listen to Podcast →
            </Link>
          </div>

          {/* --- Deep Dive on Trade Card (Existing, modified slightly) --- */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Deep Dive: Trade Risks</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Explore the complex landscape of global trade risks, including geopolitical instability, economic tensions, supply chain vulnerabilities, and M&A dynamics.
            </p>
            <Link href="/risk/deep-dive-trade" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read the Deep Dive →
            </Link>
          </div>

          {/* Import Global Tariffs   */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">U.S. Global Tariffs & Trade Policy (2025)</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Analyze the impact of the 2025 U.S. tariff policy, its global ripple effects, and how organizations can proactively respond to uncertainty and protect margins.
            </p>
            <Link href="/risk/trump-tariffs" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Explore Tariff Impact →
            </Link>
          </div>

          {/* --- TTIP Case Study Card --- */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-blue-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">CASE STUDY</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Transatlantic Trade and Investment Partnership</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Analyze the rise and fall of TTIP, a proposed EU-US trade agreement that aimed to create the world's largest bilateral trade initiative, its regulatory implications, and lessons for future trade agreements.
            </p>
            <Link href="/risk/transatlantic-trade-partnership" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read Analysis →
            </Link>
          </div>

          {/* IMF World Economic Outlook 2025 Card - NEW */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-blue-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">IMF World Economic Outlook 2025</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Explore the latest global growth projections, risks, and policy recommendations from the April 2025 IMF World Economic Outlook. Includes key charts, tables, and strategic insights for business and policy leaders.
            </p>
            <Link href="/risk/imf-world-economic-outlook-2025" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              View IMF WEO 2025 Insights →
            </Link>
          </div>

          {/* Global Economic Fragmentation 2025 Card - NEW */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-blue-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Economic Fragmentation & Protectionism (2025)</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Discover how economic fragmentation, protectionism, and cyber risk are reshaping the global business landscape in 2025. Explore key trends, supply chain impacts, and five actionable steps for business resilience.
            </p>
            <Link href="/risk/global-economic-fragmentation-2025" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read the 2025 Analysis →
            </Link>
          </div>

          {/* Sentrisk Platform Card - NEW */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-blue-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Sentrisk™ Supply Chain Risk Platform</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Explore Sentrisk™, an AI-powered platform by Marsh McLennan, designed to help organizations uncover, understand, and contextualize supply chain risk. See features, use cases, and a platform overview video.
            </p>
            <Link href="/risk/sentrisk-platform" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Discover Sentrisk →
            </Link>
          </div>

          {/* Pricing Under Tariffs Card - NEW */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-blue-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Pricing Under Tariffs: Risk & Resilience</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Discover key strategies for managing pricing risks under tariffs, including margin protection, customer focus, and commercial readiness. Based on Deloitte Digital insights.
            </p>
            <Link href="/risk/pricing-under-tariffs" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read the Guide →
            </Link>
          </div>

          {/* Global Financial Stability Risks Card - NEW */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-blue-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Financial Stability Risks (2025)</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Explore the combined summary of financial stability risks from trade uncertainty and geopolitical shocks, including key vulnerabilities and policy recommendations from the latest IMF report.
            </p>
            <Link href="/risk/global-financial-stability-risks" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read the 2025 Stability Analysis →
            </Link>
          </div>

          {/* Trade Risk Modeller Card - NEW */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-blue-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Trade Risk Modeller: KPMG Tariff Modeler</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Navigate tariffs and trade risks with confidence using advanced scenario modeling, real-time insights, and robust data visualization. Explore features, benefits, and a demo video of the KPMG Tariff Modeler.
            </p>
            <Link href="/risk/trade-risk-modeller" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Explore the Tariff Modeler →
            </Link>
          </div>

          {/* Substance in Global Trade & Taxation Card - NEW */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-blue-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Substance in Global Trade &amp; Taxation</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Understand the importance of genuine economic activity for tax and trade benefits. Explore substance requirements, compliance strategies, and their impact on M&amp;A and trade agreements.
            </p>
            <Link href="/risk/substance-global-trade-taxation" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Read More →
            </Link>
          </div>

          {/* Mergers and Acquisitions (M&A) Landscape Card - NEW */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-blue-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Mergers and Acquisitions (M&amp;A): Navigating the Evolving Landscape</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Discover how M&amp;A shapes growth, resilience, and innovation in a changing world. Explore key drivers, industry perspectives, tariff impacts, and emerging trends in the global M&amp;A landscape.
            </p>
            <Link href="/risk/mergers-acquisitions-landscape" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              Explore M&amp;A Landscape →
            </Link>
          </div>

          {/* US Tariffs Roundtables Card - NEW */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col border-l-4 border-blue-600">
            <div className="flex items-center mb-2">
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">NEW</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">US Tariffs – Shifts in Global Trade Dynamics &amp; Trade Wars</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Explore the implications of the current US tariff landscape, industry impacts, mitigation strategies, and roundtable event details. Connect with peers and PwC experts to navigate today’s shifting trade environment.
            </p>
            <Link href="/risk/us-tariffs-roundtables" className="text-blue-600 hover:text-blue-800 font-medium text-sm self-start">
              View Roundtables →
            </Link>
          </div>

        </div>
      </section>

      {/* --- Interactive Map Section --- */}
      <section id="interactive-map" className="my-12">
         <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Regional Risk Hotspots</h2>
         <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
           Explore hypothetical top risks based on the Global Risk Management Survey regions by hovering over representative countries on the map. (Data is illustrative).
         </p>
         <InteractiveRiskMap />
      </section>

       {/* Link back to home */}
       <div className="mt-12 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}