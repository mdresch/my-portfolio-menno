import React from "react";
import Image from "next/image";

export default function SentriskPlatformPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Sentrisk™: Achieve Breakthrough Risk Outcomes</h1>
        <p className="text-lg text-gray-600">Take control of the risks you never knew you always had.</p>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Request a Demo
          </button>
        </div>
      </header>

      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">A Cutting-Edge Platform</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sentrisk™ is an AI-powered platform that integrates best-in-market data capabilities and infuses 150+ years of Marsh McLennan risk expertise to empower companies to take control of their supply chain risk. Honored with the 2024 Innovation Award by Business Insurance, Sentrisk helps organizations uncover, understand, and contextualize risk across their entire supply chain.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-md overflow-hidden w-full aspect-video">
              <Image 
                src="/images/riskmanagement2.jpg"
                alt="Risk Management Dashboard"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Embedded Vimeo Video */}
        <div className="mb-6 aspect-w-16 aspect-h-9">
          <iframe
            src="https://player.vimeo.com/video/980878393"
            title="Sentrisk Platform Overview"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-72 md:h-96 rounded"
          ></iframe>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Smarter decisions, better outcomes</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">UNCOVER YOUR RISK</h4>
            <p className="text-sm text-gray-700">Reveals connections up to tier-n in your supply chain, leveraging AI and shipping manifest data.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">UNDERSTAND YOUR RISK</h4>
            <p className="text-sm text-gray-700">Verifies connections using advanced geospatial intelligence, and overlays risk data for geopolitical and natural hazard risks.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">CONTEXTUALIZE YOUR RISK</h4>
            <p className="text-sm text-gray-700">Identifies your riskiest sites, suppliers, components, and products, comparing them with a proprietary XR score.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">REAL-TIME ALERTS</h4>
            <p className="text-sm text-gray-700">See live alerts on disruptions affecting your ecosystem in real time.</p>
          </div>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
          <strong>Request a demo</strong> to see how Sentrisk can help you build real resilience.
        </div>
      </section>

      {/* New section on Shifting Trade Policies */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Shifting Trade Policies: Managing Uncertainty</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4 leading-relaxed">
              A record number of organizations now cite trade policy uncertainty as a significant factor shaping business results. Recent tariff and trade policy announcements, described by some as &ldquo;the biggest change to global trade in 100 years,&rdquo; exemplify the uncertainty and pressures facing businesses and the global economic outlook.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Research shows that widespread trade policy uncertainty often leads businesses to hold back on spending and strategic investments, fearing that sudden changes could undermine their value.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-md overflow-hidden w-full aspect-video">
              <Image 
                src="/images/trade-policy-uncertainty-index.jpg"
                alt="Trade Policy Uncertainty Index"
                fill
                className="object-contain rounded-md"
              />
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">Trade Policy Uncertainty Index (Source: Iacoviello et al., 2020)</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">Risk Management Framework Approach</h3>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700 mb-4">
            Organizations that develop awareness of their exposures to potential points of disruption, take a structured approach to assess policy impacts, and coherently plan against those risks can distinguish themselves from peers facing greater constraints.
          </p>
          <p className="font-semibold text-gray-800">
            Sentrisk helps businesses navigate complex risk landscapes with a clear framework:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-full">
            <h4 className="font-bold text-gray-900 mb-3">1. Identify the Risk</h4>
            <p className="text-sm text-gray-700">
              Conduct in-depth analysis to pinpoint low-, medium-, and high-risk areas. Sentrisk helps identify your riskiest sites, suppliers, components, and products within your supply chain, allowing risk managers to evaluate how potential trade policy changes might affect these areas.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-full">
            <h4 className="font-bold text-gray-900 mb-3">2. Measure the Risk</h4>
            <p className="text-sm text-gray-700">
              Consider which of three objectives a trade policy may fall under: generating revenue, pursuing trade/non-trade concessions, or protecting/reshoring production. This analysis helps assess the likely duration of policy changes and accurately evaluate potential impacts on your operations.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-full">
            <h4 className="font-bold text-gray-900 mb-3">3. Mitigate the Risk</h4>
            <p className="text-sm text-gray-700">
              Take steps to protect operations by drawing on alternative suppliers or using insurance solutions like trade credit. Create action plans based on your risk assessment that can be implemented if conditions unfold as predicted.
            </p>
          </div>
        </div>
        
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded mb-4">
          <p className="text-gray-700">
            <strong>From uncertainty to understanding:</strong> While trade uncertainty shows we cannot always predict the future, businesses can take proactive steps with Sentrisk to be better prepared for a range of outcomes. By adopting this structured approach, organizations can better protect themselves, identify opportunities created by disruption, and act ahead of their peers.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Platform Benefits</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Build real resilience:</strong> Adopt proactive risk management to minimize business interruption risk.</li>
          <li><strong>Recover faster:</strong> Reduce downtime, poor customer outcomes, and lost revenue.</li>
          <li><strong>Protect what matters:</strong> Optimize risk transfer with better options, prices, and coverage.</li>
          <li><strong>Report with confidence:</strong> Share contextualized risk reports with stakeholders.</li>
          <li><strong>Embed capabilities:</strong> Save manual effort with repeatable and scalable tools and processes.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Sentrisk’s modular and nimble platform delivers powerful intelligence for smarter decisions and better outcomes.
        </p>
      </section>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Powerful Intelligence for Risk Professionals</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Cutting-edge data capabilities:</strong> Supply chain mapping AI enables seamless fusion of data from multiple sources.</li>
          <li><strong>Marsh and Oliver Wyman expertise:</strong> Combines the capabilities and perspectives of 52,000 colleagues from two leading risk organizations.</li>
          <li><strong>Intuitive interfaces:</strong> Transparent and customizable modeling designed for risk professionals.</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Use Cases</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Risk Transfer:</strong> Enhanced property submission and improved coverage for supplier risks.</li>
          <li><strong>Risk and Resilience:</strong> Business continuity planning, network resilience, and enterprise risk management.</li>
          <li><strong>Compliance and ESG:</strong> ESG reporting, regulatory compliance, and reputational risk management.</li>
          <li><strong>Financial Services:</strong> Portfolio risk management, stress-testing, and credit decisioning.</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Industries Served & Client Feedback</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Automotive</li>
          <li>Packaging, Paper, and Recycling</li>
          <li>Food & Beverage</li>
          <li>Retail and Commercial Banking</li>
        </ul>        <div className="bg-gray-100 p-4 rounded mb-4 text-gray-700 text-sm">
          <p>&ldquo;This is showing us things we never thought possible.&rdquo; — Global packaging company</p>
          <p>&ldquo;The other players in the market are very specialized. The ability to bring this together is truly unique.&rdquo; — Global automotive company</p>
          <p>&ldquo;Seeing our data come to life with this platform is honestly amazing.&rdquo; — European fashion retailer</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Meet the Sentrisk Team</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>John Davies – Sentrisk Commercial Director</li>
          <li>Jonathan Lee – Sentrisk Co-Founder</li>
          <li>Amy Barnes – Sentrisk Co-Founder</li>
          <li>Valentin Yanev – Sentrisk Head of Solutions and Operations</li>
          <li>Andre Pereira – Sentrisk Head of Product</li>
          <li>Cathy Cyphus – Sentrisk Risk Advisory Lead</li>
          <li>Ioana Sommerer – Sentrisk Sales Operations Lead</li>
          <li>Mitchell Fry – Head of Technology, Sentrisk</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Insights & Awards</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>2024 Innovation Award by Business Insurance</li>
          <li>Case studies in Automotive, Packaging, Food & Beverage, and Banking</li>
          <li>Articles: Actioning data, analytics, and AI for supply chain resilience; Turning supply chain exposure into business opportunity</li>
          <li>Reports: Key Strategies To Improve Supply Chain Risk And Resilience</li>
        </ul>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-500">Source: Marsh McLennan Sentrisk Platform, 2025</p>
        <div className="mt-4">
          <a href="/risk" className="text-blue-600 hover:underline">← Back to Risk Overview</a>
        </div>
      </footer>
    </div>
  );
}