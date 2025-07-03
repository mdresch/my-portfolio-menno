"use client";

import React from "react";
import Link from "next/link";

// Mock data for major currency pairs and strength
const currencyPairs = [
  { pair: "EUR/USD", rate: 1.133, change: "+0.3%", base: "EUR", quote: "USD", strength: "Strong EUR" },
  { pair: "USD/JPY", rate: 143.0, change: "-0.4%", base: "USD", quote: "JPY", strength: "Neutral" },
  { pair: "GBP/USD", rate: 1.328, change: "+0.2%", base: "GBP", quote: "USD", strength: "Strong GBP" },
  { pair: "USD/CHF", rate: 0.826, change: "-0.1%", base: "USD", quote: "CHF", strength: "Neutral" },
  { pair: "AUD/USD", rate: 0.641, change: "-0.3%", base: "AUD", quote: "USD", strength: "Weak AUD" },
  { pair: "USD/CAD", rate: 1.379, change: "+0.1%", base: "USD", quote: "CAD", strength: "Strong USD" },
  { pair: "EUR/GBP", rate: 0.853, change: "+0.1%", base: "EUR", quote: "GBP", strength: "Neutral" },
  { pair: "EUR/JPY", rate: 162.0, change: "-0.1%", base: "EUR", quote: "JPY", strength: "Strong EUR" },
  { pair: "USD/CNY", rate: 7.294, change: "+0.2%", base: "USD", quote: "CNY", strength: "Strong USD" },
  { pair: "USD/INR", rate: 84.55, change: "+0.1%", base: "USD", quote: "INR", strength: "Strong USD" },
];

export default function CurrenciesPage() {
  const handleRowClick = (pair: string) => {
    window.location.assign(`/dashboards/currencies/${pair.replace("/", "-")}`);
  };

  const handleRowKeyDown = (e: React.KeyboardEvent<HTMLTableRowElement>, pair: string) => {
    if (e.key === "Enter" || e.key === " ") {
      window.location.assign(`/dashboards/currencies/${pair.replace("/", "-")}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Major Currencies & Exchange Rates</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Major Currency Pairs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm bg-white dark:bg-neutral-900 border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-neutral-800">
              <tr>
                <th className="px-3 py-2 text-gray-900 dark:text-gray-100">Pair</th>
                <th className="px-3 py-2 text-gray-900 dark:text-gray-100">Rate</th>
                <th className="px-3 py-2 text-gray-900 dark:text-gray-100">Change</th>
                <th className="px-3 py-2 text-gray-900 dark:text-gray-100">Base</th>
                <th className="px-3 py-2 text-gray-900 dark:text-gray-100">Quote</th>
                <th className="px-3 py-2 text-gray-900 dark:text-gray-100">Strength</th>
              </tr>
            </thead>
            <tbody>
              {currencyPairs.map(pair => (
                <tr
                  key={pair.pair}
                  className="border-b border-gray-200 dark:border-gray-700 even:bg-gray-50 even:dark:bg-neutral-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 cursor-pointer transition-colors"
                  tabIndex={0}
                  onClick={() => handleRowClick(pair.pair)}
                  onKeyDown={e => handleRowKeyDown(e, pair.pair)}
                  aria-label={`View details for ${pair.pair}`}
                >
                  <td className="px-3 py-2 font-medium text-gray-900 dark:text-gray-100 underline">
                    <Link href={`/dashboards/currencies/${pair.pair.replace("/", "-")}`}>{pair.pair}</Link>
                  </td>
                  <td className="px-3 py-2 text-gray-700 dark:text-gray-200">{pair.rate}</td>
                  <td className="px-3 py-2 text-gray-700 dark:text-gray-200">{pair.change}</td>
                  <td className="px-3 py-2 text-gray-700 dark:text-gray-200">{pair.base}</td>
                  <td className="px-3 py-2 text-gray-700 dark:text-gray-200">{pair.quote}</td>
                  <td className="px-3 py-2 text-gray-700 dark:text-gray-200">{pair.strength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
