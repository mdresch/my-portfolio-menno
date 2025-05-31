"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TransatlanticTradePartnershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Transatlantic Trade and Investment Partnership (TTIP)</h1>
        <p className="text-lg text-gray-600">A Case Study in Global Trade Agreement Risks and Challenges</p>
      </header>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="prose lg:prose-xl max-w-none">
          <h2>Introduction</h2>
          <p>
            The Transatlantic Trade and Investment Partnership (TTIP) was a proposed trade agreement between the European Union and the United States, with the aim of promoting trade and multilateral economic growth. According to Karel de Gucht, European Commissioner for Trade between 2010 and 2014, the TTIP would have been the largest bilateral trade initiative ever negotiated, not only because it would have involved the two largest economic areas in the world but also "because of its potential global reach in setting an example for future partners and agreements."
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <h3 className="text-lg font-semibold mb-2">Key Risk Insight</h3>
            <p className="text-gray-700 mb-0">
              TTIP demonstrates how trade agreements in the modern era face significant challenges beyond traditional tariff reductions, particularly around regulatory alignment, democratic oversight, and balancing corporate and public interests.
            </p>
          </div>

          <h2>Timeline and Status</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Negotiations were initiated in 2013 following years of preliminary discussions</li>
            <li>15 formal negotiation rounds took place between July 2013 and October 2016</li> 
            <li>Negotiations were halted by United States president Donald Trump in 2017</li>
            <li>A trade conflict between the US and EU followed, with a temporary truce in July 2018</li>
            <li>On April 15, 2019, the European Commission declared TTIP negotiations "obsolete and no longer relevant"</li>
          </ul>

          <h2>Economic Projections and Context</h2>
          <p>
            The EU and US together represented approximately 60% of global GDP, 33% of world trade in goods, and 42% of world trade in services when TTIP was proposed. The European Commission projected that TTIP would boost the EU's economy by €120 billion, the US economy by €90 billion, and the rest of the world by €100 billion.
          </p>
          
          <p>
            However, these projections were contested. Economic expert Dean Baker of the Center for Economic and Policy Research argued that with conventional trade barriers already low between the US and EU, the projected per-household economic benefits were minimal—approximately $50 per year by 2027, or about 15 cents per day.
          </p>

          <div className="bg-gray-50 p-6 my-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Trade Statistics: EU-US Economic Relationship (2018)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Direction</th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Goods (bn €)</th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services (bn €)</th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Investment (bn €)</th>
                    <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total (bn €)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">EU to US</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">351</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">179</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,655</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,181</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">US to EU</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">213</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">196</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,536</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,806</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2>Key Controversies and Risk Areas</h2>
          
          <h3>1. Confidentiality and Democratic Oversight</h3>
          <p>
            One of the most significant criticisms of TTIP concerned the secretive nature of the negotiations. Documents were classified, with limited access even for elected officials. European and US negotiators could only read the texts in secure rooms, with strict prohibitions against copying or sharing information.
          </p>
          <p>
            This lack of transparency raised concerns about democratic oversight and public accountability in trade negotiations that would have wide-ranging impacts on citizens' daily lives.
          </p>

          <h3>2. Investor-State Dispute Settlement (ISDS)</h3>
          <p>
            The proposed ISDS mechanism was perhaps the most controversial element of TTIP. This provision would have allowed corporations to sue governments in special tribunals if they believed government actions threatened their investments.
          </p>
          <p>
            Critics, including over 200 environmental organizations, labor unions, and consumer advocacy groups, argued that ISDS gave corporations a "one-way street" to challenge government policies while neither governments nor individuals were granted comparable rights to hold corporations accountable.
          </p>
          <p>
            The controversy led to the European Commission proposing an alternative Investment Court System (ICS) in September 2015, though this was later declared illegal by the German Association of Magistrates.
          </p>

          <h3>3. Regulatory Standards and Harmonization</h3>
          <p>
            A major aim of TTIP was to reduce non-tariff barriers through regulatory cooperation. However, this raised significant concerns about the potential lowering of standards in areas such as:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Food Safety:</strong> The EU's stricter regulations on GMOs, hormone-treated beef, and pathogen reduction treatments for poultry were points of contention</li>
            <li><strong>Environmental Protection:</strong> Leaked documents showed US pressure on the EU to drop proposed pesticide criteria for endocrine disrupting chemicals</li>
            <li><strong>Consumer Protection:</strong> Different approaches to the precautionary principle in the EU versus the US created fundamental regulatory differences</li>
            <li><strong>Climate Commitments:</strong> Critics like Joseph Stiglitz warned that TTIP could have a "chilling effect" on regulation needed to meet Paris Agreement commitments</li>
          </ul>

          <h3>4. Public Services and Banking Regulation</h3>
          <p>
            Concerns were raised that TTIP could lead to the privatization of public services and weaken financial regulations implemented after the 2008 crisis, particularly the stricter banking rules in the United States.
          </p>

          <h2>Public Opposition and Activism</h2>
          <p>
            TTIP faced unprecedented public mobilization against a trade agreement in Europe:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Over 3.2 million citizens signed a European Citizens' Initiative against TTIP and CETA (the EU-Canada trade deal)</li>
            <li>Major demonstrations took place across Europe, including one in Berlin in October 2015 with approximately 250,000 participants</li>
            <li>Greenpeace and other organizations engaged in direct action, including releasing 248 pages of classified negotiation documents in 2016</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <h3 className="text-lg font-semibold mb-2">Risk Management Lesson</h3>
            <p className="text-gray-700 mb-0">
              The failure of TTIP demonstrates that modern trade agreements require significantly more transparency, stakeholder engagement, and public communication strategies than traditional trade negotiations to achieve political viability.
            </p>
          </div>

          <h2>Key Lessons for Global Trade Risk Management</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Democratic Legitimacy:</strong> Trade negotiations that affect regulatory standards and public policy must incorporate meaningful democratic oversight and transparency to gain legitimacy.
            </li>
            <li>
              <strong>Balancing Interests:</strong> Future trade agreements need to balance corporate interests with public concerns about consumer protection, environmental standards, and labor rights.
            </li>
            <li>
              <strong>Regulatory Cooperation:</strong> While reducing regulatory barriers is economically beneficial, approaches that preserve high standards while reducing duplication are more likely to succeed than those perceived as regulatory races to the bottom.
            </li>
            <li>
              <strong>Public Communication:</strong> The economic benefits of trade agreements must be clearly communicated to the public in tangible, relatable terms rather than aggregate GDP numbers that may not resonate with citizens.
            </li>
            <li>
              <strong>National Sovereignty:</strong> Mechanisms for resolving disputes between investors and states must be transparent and preserve democratic states' right to regulate in the public interest.
            </li>
          </ol>

          <h2>Conclusion</h2>
          <p>
            The TTIP case illustrates the complexity of modern trade negotiations that go beyond tariff reductions to include regulatory harmonization, investment protection, and public service provisions. It demonstrates how public perception and stakeholder engagement are now critical factors in the success or failure of major trade initiatives.
          </p>
          <p>
            For risk managers and business leaders, TTIP offers valuable lessons about the changing nature of geopolitical and regulatory risks in global trade. As companies navigate an increasingly complex global trade environment, understanding the full spectrum of stakeholders and their concerns has become as important as assessing the direct economic impacts of proposed trade agreements.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/risk" className="text-blue-600 hover:underline">
          ← Back to Risk Management
        </Link>
      </div>
    </div>
  );
}