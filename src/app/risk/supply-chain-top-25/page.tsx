'use client';

import React from 'react';
import Link from 'next/link';

export default function SupplyChainTop25Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Gartner Supply Chain Top 25 for 2024</h1>
        <p className="text-lg text-gray-600">Reflecting the very best in supply chain for 20 years and beyond</p>
      </header>

      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Superior supply chains deliver on the business&apos;s purpose</h2>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          They don&apos;t just push products; they understand customer value, invest 
          in demand management and promote innovation against ESG. The 
          Gartner Supply Chain Top 25 is a renowned annual ranking of the world&apos;s 
          superior supply chains. From financial and corporate social responsibility 
          data and community opinion, we identify, celebrate and profile companies 
          demonstrating excellence in supply chain management. Clients use the 
          peer benchmarks to make the business case for supply chain transformation 
          and the best practices to accelerate supply chain performance.
        </p>
        
        {/* Connect links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-4 border-t border-gray-200 text-sm">
          <a href="#" className="text-blue-600 hover:text-blue-800 mb-3 md:mb-0">Sign Up for Our Newsletter</a>
          <a href="#" className="text-blue-600 hover:text-blue-800 mb-3 md:mb-0">Follow Us on LinkedIn</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">Become a Client</a>
        </div>
      </section>

      {/* Macro Trends Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Macro trends among this year&apos;s supply chain leaders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          
          {/* Talent Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Attract and engage talent</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Gartner Supply Chain Top 25 companies differentiate themselves by consistently funding 
              people-centric strategies. Many of them are using AI to redesign and automate processes to 
              reduce work friction and investing in knowledge management and learning and development 
              (L&D) systems. Their CSCOs understand that redefining the skills, roles, relationships and 
              structures within their organization are critical to driving high performance and engagement.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Download our supply chain employee turnover report to learn 3 key talent shifts →
            </a>
          </div>
          
          {/* AI Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">AI-driven advances</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Supply chain organizations are actively assessing the potential of generative AI (GenAI) 
              to improve customer service, planning and manufacturing, but many are struggling to 
              find clear use cases. 
              Gartner Supply Chain Top 25 companies have built solid foundations in data and digital 
              capabilities. They evaluate both traditional nongenerative AI techniques and GenAI to 
              build practical use cases that benefit most from AI-driven advances.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Explore Gartner&apos;s supply chain AI resource center →
            </a>
          </div>
          
          {/* Antifragile Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Antifragile supply chains</h3>
            <p className="text-gray-600 mb-4 flex-grow">
              Today&apos;s volatile, uncertain, complex and ambiguous (VUCA) environment demands 
              that CSCOs embrace uncertainty, learn from it and evolve toward a state called the 
              &quot;antifragile supply chain.&quot; Being in the antifragile state helps a complex global supply chain 
              understand how it can achieve its enterprise objectives despite disruption and uncertainty. 
              Gartner Supply Chain Top 25 companies understand that advancing toward antifragility 
              requires several shifts in decision-making processes, technology, network design and 
              many other elements of strategy.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Play our on-demand webinar featuring research on antifragile supply chains →
            </a>
          </div>
        </div>
      </section>

      {/* Top 10 Rankings Section */}
      <section className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-12 border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Gartner Supply Chain Top 25 for 2024</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-lg font-bold text-gray-600">01</div>
            <div className="font-semibold">Schneider Electric</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-lg font-bold text-gray-600">02</div>
            <div className="font-semibold">Cisco Systems</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-lg font-bold text-gray-600">03</div>
            <div className="font-semibold">Colgate-Palmolive</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-lg font-bold text-gray-600">04</div>
            <div className="font-semibold">Microsoft</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-lg font-bold text-gray-600">05</div>
            <div className="font-semibold">Johnson & Johnson</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-lg font-bold text-gray-600">06</div>
            <div className="font-semibold">Diageo and L&apos;Oréal</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-lg font-bold text-gray-600">07</div>
            <div className="font-semibold">NVIDIA</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-lg font-bold text-gray-600">08</div>
            <div className="font-semibold">The Coca-Cola Company</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-lg font-bold text-gray-600">09</div>
            <div className="font-semibold">Walmart</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-lg font-bold text-gray-600">10</div>
            <div className="font-semibold">Lenovo</div>
          </div>
        </div>
        
        <div className="text-center text-gray-700 italic mb-8">
          Visit gartner.com/en/supply-chain-top-25 to read profiles of the leading companies in the Gartner Supply Chain Top 25 for 2024.
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-6 mx-auto max-w-xl">
          <div>12 AstraZeneca</div>
          <div>18 Inditex</div>
          <div>13 PepsiCo and Nestlé</div>
          <div>19 Dell Technologies</div>
          <div>14 NIKE, Inc.</div>
          <div>20 Pfizer</div>
          <div>15 Intel</div>
          <div>21 HP Inc.</div>
          <div>16 Siemens</div>
          <div>22 Danone</div>
          <div>17 (Not listed)</div>
          <div>23 BMW</div>
          <div></div>
          <div>24 Heineken</div>
          <div></div>
          <div>25 JD.com</div>
        </div>
        
        {/* Supply Chain Masters */}
        <div className="pt-8 border-t border-gray-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Supply Chain Masters</h3>
          <p className="text-gray-600 italic mb-6 text-center">
            Masters have attained top-five composite scores in the Gartner Supply Chain Top 25 for at least 
            seven out of the last 10 years (2014 — 2024).
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="font-semibold">Apple</div>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="font-semibold">Amazon</div>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="font-semibold">P&G</div>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <div className="font-semibold">Unilever</div>
            </div>
          </div>
        </div>
        
        {/* Connect links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-4 border-t border-gray-200 text-sm">
          <a href="#" className="text-blue-600 hover:text-blue-800 mb-3 md:mb-0">Sign Up for Our Newsletter</a>
          <a href="#" className="text-blue-600 hover:text-blue-800 mb-3 md:mb-0">Follow Us on LinkedIn</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">Become a Client</a>
        </div>
      </section>

      {/* Supply Chains Ranked 26-50 Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Supply Chains Ranked 26 – 50</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-2">
            <div className="text-sm font-semibold">26 General Mills</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">35 Novo Nordisk</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">44 Takeda Pharmaceutical</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">27 McDonald&apos;s</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">36 ABB</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">45 Tesla</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">28 GSK</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">37 AbbVie</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">46 British American Tobacco</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">29 STMicroelectronics</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">38 Komatsu</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">47 Volvo Group</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">30 Sanofi</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">39 ASML Holding</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">48 Tata Motors</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">31 Essity</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">40 Dow</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">49 Leonardo</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">32 Airbus</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">41 LVMH Moët Hennessy Louis Vuitton</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">50 LG Electronics</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">33 Hewlett Packard Enterprises</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">42 IBM</div>
          </div>
          <div className="p-2 col-span-1"></div>
          <div className="p-2">
            <div className="text-sm font-semibold">34 AB InBev</div>
          </div>
          <div className="p-2">
            <div className="text-sm font-semibold">43 H&M</div>
          </div>
          <div className="p-2 col-span-1"></div>
        </div>
        
        {/* Connect links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-4 border-t border-gray-200 text-sm">
          <a href="#" className="text-blue-600 hover:text-blue-800 mb-3 md:mb-0">Sign Up for Our Newsletter</a>
          <a href="#" className="text-blue-600 hover:text-blue-800 mb-3 md:mb-0">Follow Us on LinkedIn</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">Become a Client</a>
        </div>
      </section>

      {/* Company Profiles Section */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Top Company Profiles</h2>
        
        {/* Schneider Electric */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-xl font-bold">01</span>
            </div>
            <h3 className="text-xl font-semibold">Schneider Electric</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Schneider recently completed its STRIVE (sustainable, trusted, resilient, intelligent, 
            velocity and efficiency) program, a three-year initiative aimed at transforming the supply 
            chain to provide customers with a strong regional presence, build stronger partnerships 
            with leading suppliers and improve the resilience of supply chain operations.
          </p>
          <p className="text-gray-700">
            The World Economic Forum recognized Schneider as one of only three companies to 
            attain its &quot;Circular Lighthouses in the Built Environment&quot; designation for the company&apos;s 
            E2E circularity solution, which has avoided sending about 513 million tons of CO2e to 
            customers since 2018 and uses 27% green material content across products.
          </p>
        </div>
        
        {/* Cisco Systems */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-xl font-bold">02</span>
            </div>
            <h3 className="text-xl font-semibold">Cisco Systems</h3>
          </div>
          <p className="text-gray-700 mb-4">
            In the area of integrated sustainability, Cisco&apos;s focus on embedding circular design 
            principles and driving circular revenue targets means that 99.8% of materials used 
            can be recycled or repurposed.
          </p>
          <p className="text-gray-700 mb-4">
            Cisco is regionally diversifying its network as it tries to develop an antifragile supply chain 
            with significant investments such as laying down manufacturing capacity in India to 
            support growing local demand.
          </p>
          <p className="text-gray-700">
            The company also: has implemented a digital twin of its service supply chain; is innovative 
            in the use of AI/ML; continues to lead in enterprise security offerings; and is planning 
            a total customer solution that protects clients from network security threats.
          </p>
        </div>
        
        {/* More profiles sections could be added similarly */}
        
        <div className="text-center mt-8">
          <a href="https://gartner.com/en/supply-chain-top-25" className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition duration-200">
            View All Company Profiles
          </a>
        </div>
      </section>

      {/* Supply Chain Masters */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Supply Chain Masters lead the way</h2>
        <p className="text-gray-600 italic mb-6 text-center">
          Masters have attained top-five composite scores in the Gartner Supply Chain Top 25 for at least 
          seven out of the last 10 years (2014 — 2024).
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Apple */}
          <div className="bg-gray-50 rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Apple</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Apple has put in place several important measures to mitigate geopolitical impact, tariffs and single-source risks.</li>
              <li>Apple developed its own chip, and currently all new Mac computers are powered by it.</li>
            </ul>
          </div>
          
          {/* P&G */}
          <div className="bg-gray-50 rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">P&G</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Supply chain is a critical enabler across all five pillars of P&G&apos;s integrated growth strategy.</li>
              <li>P&G leverages an internal AI factory to drive capabilities across the organization, including its own GenAI tool, chatPG.</li>
            </ul>
          </div>
          
          {/* Amazon */}
          <div className="bg-gray-50 rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Amazon</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>A leader in customer centricity, Amazon&apos;s continuous innovation in its facilities includes expanded use of robots.</li>
              <li>Amazon is expanding its same-day delivery service from 55 to more than 90 U.S. metro areas.</li>
            </ul>
          </div>
          
          {/* Unilever */}
          <div className="bg-gray-50 rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Unilever</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Unilever is using AI to help identify alternative ingredients that can strengthen supply chain resilience.</li>
              <li>Unilever&apos;s focus on AI-driven advances also acts as a way of attracting and engaging talent and teams.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-12 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Actionable, objective insight</h2>
        <p className="text-center mb-8">Explore these additional complimentary resources and tools on supply chain management:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="font-semibold mb-2">eBook</h3>
            <p className="text-sm mb-4">Leadership Vision for 2024: Chief Supply Chain Officer</p>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Download eBook</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="font-semibold mb-2">Report</h3>
            <p className="text-sm mb-4">Gartner Power of the Profession™ Supply Chain Awards</p>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Download Report</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="font-semibold mb-2">Methodology</h3>
            <p className="text-sm mb-4">2025 Updates and 2026 Input Invitation</p>
            <Link href="/risk/supply-chain-top-25/methodology" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Learn More</Link>
          </div>
        </div>
        
        {/* Connect links */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-4 border-t border-gray-200 text-sm">
          <a href="#" className="text-blue-600 hover:text-blue-800 mb-3 md:mb-0">Sign Up for Our Newsletter</a>
          <a href="#" className="text-blue-600 hover:text-blue-800 mb-3 md:mb-0">Follow Us on LinkedIn</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">Become a Client</a>
        </div>
      </section>
      
      {/* Link back to main risk page */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-blue-600 hover:underline">
          ← Back to Risk Management
        </Link>
      </div>
    </div>
  );
}