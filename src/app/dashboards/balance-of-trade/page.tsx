import React from "react";

const tradeData = [
  {
    country: "United States",
    majorInvestors: ["Japan", "UK", "Canada", "Germany", "China"],
    tradeDeficit: "$-900B"
  },
  {
    country: "China",
    majorInvestors: ["Hong Kong", "Singapore", "Japan", "United States", "Germany"],
    tradeDeficit: "$+500B"
  },
  {
    country: "Japan",
    majorInvestors: ["United States", "China", "Netherlands", "UK", "France"],
    tradeDeficit: "$+150B"
  },
  {
    country: "Germany",
    majorInvestors: ["United States", "UK", "France", "Netherlands", "China"],
    tradeDeficit: "$+200B"
  },
  {
    country: "United Kingdom",
    majorInvestors: ["United States", "Netherlands", "France", "Germany", "Japan"],
    tradeDeficit: "$-200B"
  },
  {
    country: "France",
    majorInvestors: ["United States", "Germany", "UK", "Netherlands", "Italy"],
    tradeDeficit: "$-100B"
  },
  {
    country: "India",
    majorInvestors: ["United States", "Mauritius", "Singapore", "Japan", "UK"],
    tradeDeficit: "$-250B"
  },
  {
    country: "Brazil",
    majorInvestors: ["United States", "Spain", "Netherlands", "Germany", "China"],
    tradeDeficit: "$-50B"
  },
  {
    country: "Canada",
    majorInvestors: ["United States", "Netherlands", "UK", "Japan", "Germany"],
    tradeDeficit: "$-40B"
  },
  {
    country: "Netherlands",
    majorInvestors: ["United States", "UK", "Luxembourg", "Germany", "France"],
    tradeDeficit: "$+70B"
  },
  {
    country: "Luxembourg",
    majorInvestors: ["Germany", "France", "Belgium", "Netherlands", "United States"],
    tradeDeficit: "$+10B"
  },
  // Add more countries as needed
];

export default function BalanceOfTradeDashboard() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Balance of Trade Dashboard</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        Overview of major foreign investors and trade deficits by country.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900">
          <thead>
            <tr className="bg-gray-100 dark:bg-neutral-800">
              <th className="px-4 py-2 border dark:border-gray-700 text-gray-900 dark:text-gray-100">Country</th>
              <th className="px-4 py-2 border dark:border-gray-700 text-gray-900 dark:text-gray-100">Major Foreign Investors</th>
              <th className="px-4 py-2 border dark:border-gray-700 text-gray-900 dark:text-gray-100">Trade Deficit</th>
            </tr>
          </thead>
          <tbody>
            {tradeData.map((row) => (
              <tr key={row.country} className="even:bg-gray-50 even:dark:bg-neutral-800">
                <td className="px-4 py-2 border dark:border-gray-700 font-semibold text-gray-900 dark:text-gray-100">{row.country}</td>
                <td className="px-4 py-2 border dark:border-gray-700 text-gray-700 dark:text-gray-200">{row.majorInvestors.join(", ")}</td>
                <td className="px-4 py-2 border dark:border-gray-700 text-gray-700 dark:text-gray-200">{row.tradeDeficit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section className="my-8 p-6 bg-blue-50 dark:bg-blue-900/40 rounded">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Insights into the Economics of Imports</h2>
        <h3 className="text-xl font-semibold mt-4 mb-1 text-gray-900 dark:text-blue-100">Goods Imports</h3>
        <ul className="list-disc ml-6 mb-4 text-gray-800 dark:text-gray-200">
          <li>Goods imports are physical products purchased from abroad, such as machinery, vehicles, electronics, and raw materials.</li>
          <li>They provide access to products not produced domestically or available at lower prices due to comparative advantage.</li>
          <li>High goods imports can indicate strong domestic demand but may lead to trade deficits if not balanced by exports.</li>
          <li>Over-reliance on imported goods can expose an economy to global supply chain disruptions and currency fluctuations.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-1 text-gray-900 dark:text-blue-100">Services Imports</h3>
        <ul className="list-disc ml-6 mb-4 text-gray-800 dark:text-gray-200">
          <li>Services imports include intangible products such as financial services, tourism, software, consulting, and education.</li>
          <li>They enhance domestic productivity, provide specialized expertise, and support sectors like tourism and IT.</li>
          <li>Service imports are increasingly important in advanced economies and can help offset goods trade deficits.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-1 text-gray-900 dark:text-blue-100">Economic Impacts</h3>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200">
          <li>Imports increase consumer choice, lower costs, and drive innovation through competition.</li>
          <li>Persistent trade deficits may lead to increased foreign debt or currency depreciation, but can also reflect investment inflows and economic openness.</li>
          <li>Balancing imports with competitive exports is key to sustainable economic growth.</li>
        </ul>
      </section>
      <section className="my-8 p-6 bg-green-50 dark:bg-green-900/40 rounded">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Insights into the Economics of Exports</h2>
        <h3 className="text-xl font-semibold mt-4 mb-1 text-gray-900 dark:text-green-100">Goods Exports</h3>
        <ul className="list-disc ml-6 mb-4 text-gray-800 dark:text-gray-200">
          <li>Goods exports are physical products sold to foreign countries, such as machinery, vehicles, agricultural products, and electronics.</li>
          <li>Exporting goods allows domestic producers to access larger markets, achieve economies of scale, and increase revenues.</li>
          <li>Strong goods exports can improve a country&apos;s trade balance, support job creation, and stimulate economic growth.</li>
          <li>Dependence on a narrow range of export goods or markets can expose an economy to global price fluctuations and demand shocks.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-1 text-gray-900 dark:text-green-100">Services Exports</h3>
        <ul className="list-disc ml-6 mb-4 text-gray-800 dark:text-gray-200">
          <li>Services exports include intangible products such as financial services, IT, tourism, education, and consulting provided to foreign clients.</li>
          <li>They are a growing part of global trade, especially for advanced economies with strong knowledge and technology sectors.</li>
          <li>Services exports can help diversify the economy, reduce reliance on goods exports, and generate high-value jobs.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-1 text-gray-900 dark:text-green-100">Economic Impacts</h3>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200">
          <li>Exports drive economic growth, support innovation, and enhance competitiveness in global markets.</li>
          <li>Trade surpluses from strong exports can strengthen a country&apos;s currency and improve its financial position.</li>
          <li>Diversifying export products and markets helps reduce vulnerability to external shocks and global downturns.</li>
        </ul>
      </section>
      <section className="my-8 p-6 bg-yellow-50 dark:bg-yellow-900/40 rounded">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">What do you think is the biggest cause of trade deficits? 🤔</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">You can see how people vote. Learn more</p>
        <ul className="list-disc ml-6 mb-4 text-gray-800 dark:text-gray-200">
          <li><strong>Overconsumption</strong> – When a country consumes more than it produces, it imports the difference, leading to a trade deficit.</li>
          <li><strong>Rising foreign debt</strong> – Borrowing from abroad can finance imports, increasing the trade deficit if not matched by exports.</li>
          <li><strong>Technological disparities</strong> – Countries lacking advanced technology may import more high-tech goods and services.</li>
          <li><strong>Natural disasters</strong> – Disasters can disrupt domestic production, increasing reliance on imports.</li>
          <li><strong>War & Revolutions</strong> – Conflict and instability can damage production and exports, while imports may remain necessary.</li>
        </ul>
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white dark:bg-neutral-900 rounded shadow p-4 border border-gray-200 dark:border-gray-700">
            <div className="mb-2 font-semibold text-gray-900 dark:text-gray-100">Poll results:</div>
            <div className="flex items-center justify-between mb-1 text-gray-700 dark:text-gray-200">
              <span>Overconsumption</span>
              <span className="font-bold">70%</span>
            </div>
            <div className="flex items-center justify-between mb-1 text-gray-700 dark:text-gray-200">
              <span>Rising foreign debt</span>
              <span>20%</span>
            </div>
            <div className="flex items-center justify-between mb-1 text-gray-700 dark:text-gray-200">
              <span>Technological disparities</span>
              <span>0%</span>
            </div>
            <div className="flex items-center justify-between mb-1 text-gray-700 dark:text-gray-200">
              <span>Natural disasters</span>
              <span>10%</span>
            </div>
            <div className="flex items-center justify-between text-gray-700 dark:text-gray-200">
              <span>War - Revolutions</span>
              <span>0%</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}