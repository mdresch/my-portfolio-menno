import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import DashboardClient from "../../../components/DashboardClient";
import GlobeWithTradeRoutes from "../../../components/GlobeWithTradeRoutes";

export default function TradeRiskModellerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Trade Risk Modeller: KPMG Tariff Modeler</h1>
        <p className="text-lg text-gray-600">Navigate tariffs and trade risks with confidence using advanced scenario modeling and real-time insights.</p>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The KPMG Tariff Modeler leverages the latest technologies and client-specific data to help organizations navigate global trade disruptions. It provides meaningful data for scenario planning, enabling businesses to identify the impact of tariffs today and prepare for tomorrow.
        </p>
      </section>

      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h2>
        <ul className="text-gray-700 mb-4 space-y-4">
          <li className="flex items-start gap-3">
            {/* Globe icon */}
            <span className="mt-1 text-blue-600"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 0c2.21 0 4 4.03 4 9s-1.79 9-4 9-4-4.03-4-9 1.79-9 4-9z" />
              </svg>
            </span>
            <span><b>Comprehensive Tariff Analysis:</b> Analyze current and potential future tariff measures globally.</span>
          </li>
          <li className="flex items-start gap-3">
            {/* Lightning bolt icon */}
            <span className="mt-1 text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <span><b>Real-Time Insights:</b> Identify total duty liabilities, simulate tariff scenarios, and understand financial impacts instantly.</span>
          </li>
          <li className="flex items-start gap-3">
            {/* Database icon */}
            <span className="mt-1 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <ellipse cx="12" cy="6" rx="8" ry="3" />
                <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
                <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
              </svg>
            </span>
            <span><b>Data Integration:</b> Integrate your historical and import/export data for real analysis and visualization.</span>
          </li>
          <li className="flex items-start gap-3">
            {/* Shield check icon */}
            <span className="mt-1 text-sky-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7.5 4.5v6c0 5.25-7.5 9-7.5 9s-7.5-3.75-7.5-9v-6L12 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
            </span>
            <span><b>Risk Detection & Compliance:</b> Detect risks, manage regulatory compliance, and implement effective tariff and supply chain strategies.</span>
          </li>
          <li className="flex items-start gap-3">
            {/* Document report icon */}
            <span className="mt-1 text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m-6 0v2a2 2 0 002 2h2a2 2 0 002-2v-2m-6 0V7a2 2 0 012-2h2a2 2 0 012 2v10" />
              </svg>
            </span>
            <span><b>Customizable Reports:</b> Generate tailored reports for informed decision-making and stakeholder communication.</span>
          </li>
          <li className="flex items-start gap-3">
            {/* User icon */}
            <span className="mt-1 text-sky-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 21a8.25 8.25 0 1115 0H4.5z" />
              </svg>
            </span>
            <span><b>User-Friendly Interface:</b> Intuitive design for easy use, even for non-experts.</span>
          </li>
          <li className="flex items-start gap-3">
            {/* Clock icon */}
            <span className="mt-1 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
              </svg>
            </span>
            <span><b>24/7 Accessibility:</b> Scalable, global tool accessible anytime, anywhere.</span>
          </li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Automate tariff analysis to save time and resources.</li>
          <li>Minimize risk of non-compliance and unexpected costs with up-to-date information.</li>
          <li>Empower teams with data visualization tools and insights for better communication and decision-making.</li>
          <li>Simulate potential tariff scenarios and visualize impacts on global supply chain operations.</li>
          <li>Maintain supply chain traceability and manage regulatory changes proactively.</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Use Cases</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Assessing the impact of new or changing tariffs on products and markets.</li>
          <li>Scenario planning for supply chain and sourcing strategies.</li>
          <li>Ensuring compliance with evolving trade regulations.</li>
          <li>Communicating tariff impacts to stakeholders with clear, visual reports.</li>
        </ul>
      </section>

      {/* Globe Map Full Width Section */}
      <section className="w-full flex justify-center items-center mb-10">
        <div className="w-full max-w-5xl">
          <GlobeWithTradeRoutes zoomable />
        </div>
      </section>

      {/* KPMG Tariff Modeler 2025 News Integration */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 flex flex-col items-center">
          {/* <GlobeWithTradeRoutes /> removed from here */}
        </div>
        <div className="flex-[2]">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">KPMG Tariff Modeler 2025: AI-Powered Trade Disruption Tool</h2>
          <p className="text-gray-700 mb-3">
            <b>May 1, 2025 – NEW YORK:</b> KPMG LLP has unveiled the next-generation, AI-powered Tariff Modeler on the Digital Gateway platform, powered by Microsoft Azure. More than 100 Fortune 500 and top private equity clients are already using the tool for real-time trade policy scenario planning and to unify data across departments and borders.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
            <li>Transform uncertainty into structured, analyzable scenarios</li>
            <li>Enhance preparedness for announced and potential trade actions</li>
            <li>Enable more strategic supply chain and sourcing decisions</li>
            <li>Identify potential duty mitigation strategies within existing regulations</li>
            <li>Access a platform for ongoing review of supplier tariff costs</li>
            <li>Deliver actionable insights to protect operational continuity and financial outlook</li>
          </ul>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 mb-2">
            “Today's volatile global trade landscape requires companies to fundamentally rethink how they anticipate and respond to policy shifts. By leveraging AI to transform vast streams of global trade data into actionable intelligence, organizations can rapidly model complex scenarios and make more informed decisions.”<br/>
            <span className="font-semibold">– Rema Serafi, Vice Chair – Tax, KPMG LLP</span>
          </blockquote>
          <p className="text-gray-600 text-sm mt-2">
            <b>Bottom line:</b> With the KPMG tariff modeler, companies can enhance preparedness for trade disruption, minimize financial impacts, and maintain strategic focus despite policy uncertainty.
          </p>
        </div>
      </section>

      {/* Tariff Modeler Capabilities Image */}
      <div className="w-full flex justify-center mb-10">
        <Image src="/images/tariff-modeler-capabilities.png" alt="Tariff Modeler Capabilities" width={1600} height={400} className="w-full h-auto rounded shadow mb-4 object-cover" />
      </div>

      {/* Dashboard Section */}
      <DashboardClient />

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Demo Video</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-2RwxAbi2I0"
            title="KPMG Tariff Modeler Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-500">Source: <a href="https://kpmg.com/us/en/capabilities-services/tax-services/international-tax-trade-and-transfer-pricing/trade-customs/kpmg-tariff-modeler.html" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">KPMG Tariff Modeler</a></p>
        <div className="mt-4"></div>
        <a href="/risk" className="text-blue-600 hover:underline">← Back to Risk Overview</a>
      </footer>
    </div>
  );
}
