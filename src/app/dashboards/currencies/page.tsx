"use client";

import React from "react";
import Link from "next/link";
import { currencyPairs } from "../../../data/currencyPairs";

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
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Rates last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
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
