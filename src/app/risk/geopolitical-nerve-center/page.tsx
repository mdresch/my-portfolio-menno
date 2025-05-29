"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GeopoliticalNerveCenterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/risk" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Risk Management</span>
          </Link>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="text-gray-500 text-sm mb-2">GEOPOLITICS PRACTICE</p>
          <h1 className="text-4xl font-bold mb-2">Navigating tariffs with a geopolitical nerve center</h1>
          <p className="text-xl text-gray-700 mb-4">
            A nerve center can help companies chart a course through expanding tariffs and trade controls by orchestrating nine rapid actions, from tariff operations to supplier diversification.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <p>by Cindy Levy, Mihir Mysore, Shubham Singhal, and Varun Marya</p>
            <span className="mx-2">|</span>
            <p>April 2025</p>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg">
          <p>
            Tariffs and trade controls are expanding rapidly around the world. Macroeconomic uncertainty 
            is growing. Second-order effects of government actions are multiplying.
          </p>
          <p className="font-semibold">
            The first global economic shock since the COVID-19 pandemic has arrived.
          </p>
          <p>
            While geopolitical tensions have been rising for several years, the recent wave of trade controls 
            and reciprocal tariffs has come on quickly and intensely. Not since the 1930s has the world seen 
            this level of tariff activity.
          </p>
          <p>
            The impact on businesses is high, unevenly distributed, and likely to remain that way. In the 
            automotive industry, for example, the amount of content that comes from different countries 
            ranges widely by car model, making the impact of tariffs highly variable and creating cascading 
            effects through automakers' supply chains (exhibit). Take the example of one 2025 hybrid 
            electric vehicle: Its gearbox is made in Japan, roughly 30 percent of its parts originate in the 
            United States or Canada, and another quarter are sourced from Mexico; the engine is assembled 
            in the United States and the final vehicle in Mexico. Other car models comprise almost entirely 
            imported parts; a few are largely sourced and assembled in a single country. This complexity is 
            not limited to the automotive industry—many sectors and regions face similar challenges.
          </p>
        </div>

        {/* Exhibit Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Exhibit</h2>
          <p className="text-gray-800 font-medium mb-2">
            The impact of tariffs varies significantly across models, given differences in content strategy and production location.
          </p>
          <div className="my-6 bg-white p-4 rounded-lg shadow-sm">
            <div className="h-[300px] w-full bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">Content by country of origin visualization will be implemented here</p>
            </div>
            <p className="text-sm text-gray-500 mt-3">Top 25 models based on 2024 global sales.</p>
          </div>
        </div>

        <div className="prose prose-lg mt-8">
          <p>
            While business leaders confess to feeling overwhelmed at times, they are addressing day-to-day issues as best they can. 
            Many companies have calculated initial estimates of their exposure to new tariffs and are taking steps to reduce it. 
            Some North American organizations are applying for certifications under the United States–Mexico–Canada Agreement 
            (which has a high burden of proof) rather than relying on most-favored-nation (MFN) status, as they had 
            in the past. Teams are focused on filing for duty drawbacks, obtaining Temporary Importation 
            under Bond (TIB) certifications, and expanding access to free trade zones and bonded 
            warehouses to preserve cash and avoid tariffs where possible.
          </p>
          <p>
            Even as they grapple with immediate challenges, company leaders are unsure about what comes 
            next. With the pandemic crisis still fresh in their minds, they find themselves again facing a highly 
            uncertain environment with few parallels to guide them and no clear sense of when normalcy 
            might return. They hesitate to make strategic moves because they are unsure how long the tariffs 
            may last. They realize that a range of tariff consequences—from a sharp macroeconomic impact 
            to trading-partner responses to national-security reassessments—could cause sudden changes 
            in trade regimes.
          </p>
          <p>
            Given the web of interdependencies that govern global trade, business leaders realize that they 
            can't define and prepare for the path forward using traditional forecasting and planning methods. 
            What they need is a geopolitical nerve center—a central hub that tracks new developments in 
            global trade, plans across several horizons, and guides decision-makers on ways to mitigate the 
            impact of the expanding tariffs and trade controls.
          </p>

          <h2 className="text-2xl font-bold mt-10">Setting up a geopolitical nerve center</h2>
          <p>
            To effectively address today's radical uncertainty, business leaders can lean on a mechanism 
            that many found essential for navigating the COVID-19 crisis. A nerve center can help companies 
            move from a focus on immediate tactical responses to more comprehensive plans balanced 
            across time frames. However, since the situation today is dramatically different from the 
            pandemic, a geopolitical nerve center requires a unique structure.
          </p>
          <p>
            A nerve center needs to accomplish three tasks. First, it should comprise cross-functional 
            initiative teams that tackle the full range of potential tariff impacts on different parts of the 
            company. Second, the teams need to cover multiple time horizons to ensure that the organization 
            can address both urgent issues and longer-term challenges. Finally, a planning team, informed 
            by distinctive analytics, should coordinate the initiative teams and enable fast decision-making.
          </p>

          <h3 className="text-xl font-bold mt-8">Stand up cross-functional initiative teams</h3>
          <p>
            Companies should establish teams focused on tracking the impact of tariffs across their 
            operations. We recommend nine targeted initiatives, although the number and nature of the 
            initiatives may vary based on company context.
          </p>
          <p>
            <span className="font-semibold">Tariff operations.</span> This initiative's goal is to minimize delays at border crossings, reduce exposure 
            to avoidable tariffs, and prevent cash flow from being locked in tariff prepayments (by expanding 
            access to bonded warehouses, for example). It should also focus on ensuring accurate, timely 
            shipments that don't exceed trade control quotas.
          </p>
          <p>
            <span className="font-semibold">Inventory and supplier operations.</span> Given the significant increase in and complexity of criteria 
            that shipments must satisfy at border crossings, ensuring the accuracy of supplier paperwork is 
            imperative. This initiative focuses on strengthening oversight of border crossing filings, ensuring 
            sufficient orders of critical stock with minimal tariff exposure, and establishing a system for 
            sharing data with suppliers.
          </p>
          <p>
            <span className="font-semibold">Stakeholder engagement.</span> This initiative aims to inform government agencies and other 
            stakeholders—where appropriate and with the guidance of counsel—about the operating 
            environment and the impacts that tariffs are having on industries and individual companies.
          </p>
          <p>
            <span className="font-semibold">Product engineering and classification management.</span> A small difference in the US Harmonized 
            Tariff Schedule (HTS) codes can significantly affect tariffs owed. This initiative helps companies 
            optimize product specifications to qualify for lower-rate tariff categories and ensure that parts 
            and SKUs are correctly classified.
          </p>
          <p>
            <span className="font-semibold">Commercial optimization.</span> The focus of this initiative is to manage pricing updates and pass-throughs, 
            optimize the product portfolio (including eliminating some product categories that are 
            likely to have negative margins), boost after-sales as consumer demand for big-ticket items may 
            drop, and optimize commercial levers.
          </p>
          <p>
            <span className="font-semibold">Cost reduction and cash preservation.</span> Many companies realize the need for greater efficiency in 
            the near to medium term in light of potential lower demand due to price increases, the prospect 
            of a macroeconomic downturn, and cost increases on their purchases due to supplier pass-throughs 
            of tariffs. This initiative's focus is to preserve cash and reduce costs so the organization 
            is prepared for multiple scenarios.
          </p>
          <p>
            <span className="font-semibold">Manufacturing and remanufacturing.</span> This initiative's primary focus is defining a plan to ramp up 
            manufacturing and product circularity or remanufacturing in core end markets. It is likely to be a 
            longer-term initiative for many organizations.
          </p>
          <p>
            <span className="font-semibold">Supplier network and supply chain optimization.</span> Another longer-term initiative is examining 
            future supplier networks and supply chain footprints. Part of this team's agenda is establishing 
            criteria under which it may make sense to shift suppliers or supplier footprints to source more 
            from lower-tariff countries.
          </p>
          <p>
            <span className="font-semibold">Business portfolio shifts.</span> This initiative is aimed at shifting the company's portfolio toward core, 
            high-margin businesses through divestments, capital reallocation, and M&A.
          </p>

          <h3 className="text-xl font-bold mt-8">Split team focus among immediate, medium-term, and long-term horizons</h3>
          <p>
            Companies' current responses to evolving tariffs cover multiple planning horizons and timelines. 
            A discussion about accelerating the shipment of specific parts can suddenly shift to a debate 
            about the right time to diversify suppliers. To ensure that nerve center teams stay focused on the 
            right actions, it is important to align on the time horizon that each team should target for impact 
            and the level of rigor required in its analysis (table).
          </p>
        </div>

        {/* Table Section */}
        <div className="my-12 bg-gray-50 p-8 rounded-lg overflow-auto">
          <h2 className="text-xl font-semibold mb-4">Table</h2>
          <p className="text-gray-800 font-medium mb-4">Action teams tracking tariff impact should cover three horizons.</p>

          {/* Horizon One */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 bg-blue-100 p-2 rounded">Horizon one (this week to this month)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Tariff operations</h4>
                <p className="font-medium mb-2">Optimize logistics, warehousing, and transport operations</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Ensure accurate and timely filing of duty drawbacks and Temporary Importation under Bond (TIB) certifications, from filing to refund</li>
                  <li>Ensure complete paperwork to minimize port clearance delays</li>
                  <li>Optimize customs-bonded warehousing and use of free trade zones</li>
                  <li>Optimize shipment timing to manage tariff rate quotas</li>
                  <li>Apply for de minimis exemptions</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Inventory and supplier operations</h4>
                <p className="font-medium mb-2">Work with suppliers to ensure timely shipments</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Update safety stock calculations and inventory plans for critical parts</li>
                  <li>Ensure timely ordering and use of components</li>
                  <li>Conduct preshipment quality checks and contract enforcement to minimize delays and postdelivery quality issues</li>
                  <li>Set up supplier data sharing for real-time transparency</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Horizon Two */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 bg-green-100 p-2 rounded">Horizon two (this quarter to this year)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Stakeholder engagement</h4>
                <p className="font-medium mb-2">Inform governments and other stakeholders about tariffs' impact</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Research alternate supplies, extent of impact, and possible pathways to achieve economic goals</li>
                  <li>Align with industry groups or associations</li>
                  <li>Engage relevant stakeholders</li>
                  <li>Prepare applications for exclusions where appropriate and applicable</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Product engineering and classification management</h4>
                <p className="font-medium mb-2">Optimize product specifications to qualify for lower-rate tariff categories</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Redesign product specifications for lower-rate Harmonized Tariff Schedule (HTS) codes</li>
                  <li>Ensure accurate classification of HTS codes for each part</li>
                  <li>Shift manufacturing processing locations to optimize substantial transformation thresholds</li>
                  <li>Standardize core models and components across platforms</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Commercial optimization</h4>
                <p className="font-medium mb-2">Optimize product portfolio</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Increase cash and financing offers</li>
                  <li>Fine-tune dealer or franchisee performance incentives</li>
                  <li>Optimize loyalty and sales incentives</li>
                  <li>Optimize prices and update value propositions, including passing through costs where possible</li>
                  <li>Disclose tariff surcharges</li>
                  <li>Reduce SKU variation, including exiting loss-making SKUs</li>
                  <li>Bundle upgrades</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Cost reduction and cash preservation</h4>
                <p className="font-medium mb-2">Maintain optionality across multiple scenarios</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Optimize working capital</li>
                  <li>Reduce operating expenses, including procurement costs</li>
                  <li>Implement zero-based budgeting</li>
                  <li>Implement spending transparency and controls</li>
                  <li>Pause low-ROI, noncritical investments</li>
                  <li>Monetize noncore assets</li>
                  <li>Reduce or halt shareholder distributions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Horizon Three */}
          <div>
            <h3 className="text-lg font-semibold mb-3 bg-purple-100 p-2 rounded">Horizon three (the next normal)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Manufacturing and remanufacturing</h4>
                <p className="font-medium mb-2">Ramp up manufacturing and product circularity in core end markets</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Reduce bottlenecks in manufacturing capacity</li>
                  <li>Reshore manufacturing capacity</li>
                  <li>Increase remanufacturing and circularity</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Supplier network and supply chain optimization</h4>
                <p className="font-medium mb-2">Shift suppliers or supplier footprint</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Investigate nearshoring and regionalization of operations</li>
                  <li>Implement a multisourcing strategy</li>
                  <li>Segment suppliers by tariff exposure</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Business portfolio shifts</h4>
                <p className="font-medium mb-2">Shift portfolio toward core, high-margin businesses</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Identify highest-growth and highest-margin businesses in future scenarios</li>
                  <li>Divest low-growth or underperforming businesses</li>
                  <li>Prepare M&A checklist</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">In trade law, substantial transformation threshold determines if a product processed in a country other than its origin is considered to have originated from that processing country, often for preferential tariff treatment.</p>
          </div>
        </div>

        <div className="prose prose-lg mt-8">
          <p>
            <span className="font-semibold">Horizon one (this week to this month).</span> This horizon covers immediate priorities and will usually 
            encompass the tariff operations and supplier operations initiatives. It focuses on identifying and 
            resolving the areas of biggest tariff exposure that the organization faces.
          </p>
          <p>
            <span className="font-semibold">Horizon two (this quarter to this year).</span> Tasks within this horizon typically require rapid analysis 
            and decision prioritization, informed by geopolitical experts, followed by execution within 
            12 months. This horizon usually covers initiatives on cash preservation and cost control, tariff 
            engineering and classification management, commercial actions, and stakeholder engagement.
          </p>
          <p>
            <span className="font-semibold">Horizon three (the next normal).</span> The focus of the furthest-reaching horizon is to figure out 
            the organization's "next normal." The nerve center may need to reimagine the company's 
            manufacturing operations and consider a dramatically reshaped supply chain footprint. It also 
            should consider what assumptions would have to change to make those modifications necessary. 
            It may even reimagine the shape of its entire industry, which may prompt consideration of 
            business divestments or acquisitions needed to thrive in that future scenario.
          </p>

          <h3 className="text-xl font-bold mt-8">Create a central planning team to enable and coordinate initiative teams</h3>
          <p>
            The initiative teams need the support of a planning team that organizes daily coordination 
            meetings and creates situation reports to ensure aligned assumptions. Given the fast-evolving 
            environment, companies should invest in analytics and accurate data to capture signals relevant 
            to their operations in new tariff-related announcements and to assess their positions relative to 
            competitors. Below are six analyses that organizations should consider conducting.
          </p>
          <p>
            <span className="font-semibold">Tariff scenario modeling.</span> Nuances within tariff announcements can have meaningful implications 
            for a company's operations and financials. A trade control team can help business leaders 
            interpret new developments and create tariff scenarios that decision-makers can use as a basis 
            for planning.
          </p>
          <p>
            <span className="font-semibold">Tariff cost modeling.</span> This analysis involves studying the major flows of the company's products, 
            from the customer and back to several supplier tiers, mapping them to their respective HTS 
            codes (or equivalents outside the United States), and using the volumes based on these models 
            to estimate the tariff costs under the likeliest scenarios. The models should be dynamic and 
            capable of accommodating multiple scenarios to keep up with rapid changes. The resulting 
            analysis can help decision-makers set targets for the organization and estimate the full potential 
            impact of tariffs across operations.
          </p>
          <p>
            <span className="font-semibold">Tariff competitive advantage modeling.</span> This analysis models the opportunities and risks relative 
            to competitors by mapping tariff and trade control exposure for the company's peer group. It 
            is central to understanding the actions across commercial levers, product rationalization, and 
            business portfolio rationalization that will produce optimal results.
          </p>
          <p>
            <span className="font-semibold">Trade flow analytics.</span> Understanding how trade corridors may shift, and the flow of specific 
            goods across them, is critical for making medium- to long-term decisions that align the 
            company's commercial focus and operations. This analysis should cover not only tariffs but also 
            free trade agreements, export and investment controls, and industrial policy measures.
          </p>
          <p>
            <span className="font-semibold">Demand modeling and pricing implications.</span> This involves assessing tariffs' impact on demand 
            based on a combination of sector-specific elasticities, macroeconomic impacts across various 
            scenarios, and government incentives and business spending shifts. The analysis can help 
            decision-makers define targets for cost reduction and cash preservation initiatives, as well as 
            provide an early warning on the extent of demand challenges, which in turn can help inform 
            pricing implications and commercial optimization actions.
          </p>
          <p>
            <span className="font-semibold">Risk identification across supplier tiers.</span> A company's suppliers may need to take rapid actions 
            to protect their finances, including shifting allocations, reducing SKUs, and even changing 
            manufacturing locations. Understanding the risks across multiple tiers of the supply chain is 
            essential to defining mitigation actions and reducing exposure to disruptions.
          </p>
          <p>
            Tariffs have emerged as the most urgent topic for many businesses and the world economy and 
            will likely remain so for most of 2025. Setting up a geopolitical nerve center can help business 
            leaders navigate the uncertainty and identify opportunities to gain a competitive edge.
          </p>
        </div>

        {/* Author Information */}
        <div className="mt-10 mb-8 border-t border-gray-200 pt-6 text-gray-600">
          <p className="mb-1">
            Cindy Levy is a senior partner in McKinsey's London office, Mihir Mysore is a partner in the Houston office, 
            Shubham Singhal is a senior partner in the Detroit office, and Varun Marya is a senior partner in the Bay Area office.
          </p>
          <p className="mb-1">This article was edited by Joanna Pachner, an executive editor in the Toronto office.</p>
          <p className="mb-1">Designed by McKinsey Global Publishing</p>
          <p className="text-sm">Copyright © 2025 McKinsey & Company. All rights reserved.</p>
        </div>

        {/* Navigation buttons */}
        <div className="mt-10 flex justify-between">
          <Link href="/risk" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Risk Management
          </Link>
        </div>
      </div>
    </div>
  );
}