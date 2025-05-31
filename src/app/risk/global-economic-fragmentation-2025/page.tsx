import React from "react";

export default function GlobalEconomicFragmentation2025Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Global Economic Fragmentation & Protectionism: Risks for 2025</h1>
        <p className="text-lg text-gray-600">How fragmentation, protectionism, and cyber risk are reshaping the global business landscape</p>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">A New Era of Fragmentation</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The global business landscape in 2025 is being reshaped by economic fragmentation, rising protectionism, and the resulting impacts on both physical and digital supply chains. These trends are not just theoretical—they are realities that businesses must confront today.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The rise of protectionism and trade disputes has led to a surge in tariffs and trade barriers. According to Global Trade Alert, harmful new policy interventions rose from 600 in 2017 to over 3,000 per year in 2022–2024, with similar levels expected in 2025. This has created a more complex and uncertain trading environment, forcing businesses to adapt quickly.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Geoeconomic confrontation—including sanctions, tariffs, and investment screening—now ranks among the top global risks, according to the World Economic Forum’s Global Risks Report 2025. These interventionist trends are profoundly impacting already fragile supply chains.
        </p>
      </section>

      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Supply Chain & Inflation Pressures</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Recent events—such as water shortages in the Panama Canal, regional conflicts, and port strikes—have tested global supply chains. In 2025 and beyond, new tariffs and restrictions may further disrupt supply chains, increasing costs, delays, and lost contracts. Companies relying on just-in-time inventory may face significant delays and higher prices, while those shifting to just-in-case strategies will see increased costs and inflationary pressures.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Uncertainty around trade policies could also stall innovation and investment, as businesses adopt a wait-and-see approach. The UN Conference on Trade and Development reported that fragmented trade and regulatory environments contributed to a 10% slump in global foreign direct investment in 2023.
        </p>
      </section>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Digital Supply Chains & Cyber Risk</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Geoeconomic confrontations also impact digital supply chains and cyber risk resilience. The Global Risks Report 2025 highlights misinformation, cyber espionage, and the adverse consequences of AI as top concerns. As governments tighten regulations and restrict data flows, businesses face higher compliance costs and more complex digital operations.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The focus on national security in trade policies raises the stakes for cyber risk, with increased threats of cyber espionage and attacks targeting foreign companies. Businesses must safeguard digital assets and prepare for both malicious and unintended cyber events, such as global IT outages.
        </p>
      </section>

      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Five Actions for Business Resilience</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
          <li><strong>Enhance supply chain visibility:</strong> Invest in real-time technologies and AI tools to identify disruptions early and make informed decisions.</li>
          <li><strong>Diversify supply sources:</strong> Reduce reliance on single countries or regions to mitigate the impact of tariffs and restrictions.</li>
          <li><strong>Invest in cybersecurity:</strong> Implement robust protocols, conduct regular risk assessments, train employees, and develop holistic cyber risk strategies.</li>
          <li><strong>Engage in scenario planning:</strong> Assess the impact of trade policy changes and develop contingency plans.</li>
          <li><strong>Advocate for trade agreements:</strong> Work with policymakers to promote collaborative trade and reduce fragmentation.</li>
        </ol>
        <p className="text-gray-700 leading-relaxed">
          By taking these steps, businesses can enhance resilience, manage cyber risk, and position themselves for success in a fractured global landscape.
        </p>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-500">Source: Global Risks Report 2025, World Economic Forum & Global Trade Alert</p>
        <div className="mt-4">
          <a href="/risk" className="text-blue-600 hover:underline">← Back to Risk Overview</a>
        </div>
      </footer>
    </div>
  );
}