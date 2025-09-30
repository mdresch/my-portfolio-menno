"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { currencyPairs, getPriceStatistics } from "../../../../data/currencyPairs";

export default function CurrencyPairDetailPage() {
  const params = useParams();
  // URL param is like "EUR-USD"
  const pairParam = Array.isArray(params.pair) ? params.pair[0] : params.pair;
  
  if (!pairParam) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">Invalid Currency Pair</h1>
        <Link href="/dashboards/currencies" className="text-blue-600 dark:text-blue-300 underline">Back to Currencies</Link>
      </div>
    );
  }
  
  const pairKey = pairParam.replace("-", "/");
  const pairData = currencyPairs.find((p) => p.pair === pairKey);

  if (!pairData) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">Currency Pair Not Found</h1>
        <Link href="/dashboards/currencies" className="text-blue-600 dark:text-blue-300 underline">Back to Currencies</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/dashboards/currencies" className="text-blue-600 dark:text-blue-300 underline mb-4 inline-block">← Back to Currencies</Link>
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{pairData.pair} Details</h1>
      <div className="mb-6 text-gray-700 dark:text-gray-200">
        <div>Base Currency: <span className="font-semibold">{pairData.base}</span></div>
        <div>Quote Currency: <span className="font-semibold">{pairData.quote}</span></div>
        <div>Current Rate: <span className="font-semibold">{pairData.rate}</span></div>
        <div>Change: <span className={pairData.change.startsWith("+") ? "text-green-600 dark:text-green-400" : pairData.change.startsWith("-") ? "text-red-600 dark:text-red-400" : ""}>{pairData.change}</span></div>
        <div>Strength: <span className="font-semibold">{pairData.strength}</span></div>
      </div>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Recent Rate History</h2>
        <div className="flex gap-2 items-end h-32 mb-2">
          {pairData.history.map((rate, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                className="w-6 rounded-t bg-blue-400 dark:bg-blue-600"
                style={{ height: `${40 + (rate / pairData.history[0]) * 60}px` }}
                title={`Rate: ${rate}`}
              ></div>
              <span className="text-xs text-gray-600 dark:text-gray-300 mt-1">{rate}</span>
            </div>
          ))}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">(Most recent rates, left = oldest, right = newest)</div>
      </section>

      {/* Price Statistics */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">1-Year Price Statistics</h2>
        {(() => {
          const stats = getPriceStatistics(pairData.pair);
          if (!stats) return <p className="text-gray-600 dark:text-gray-400">Statistics not available</p>;
          
          return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.max.toFixed(4)}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">52-Week High</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.min.toFixed(4)}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">52-Week Low</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.avg.toFixed(4)}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Price</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{(stats.volatility * 100).toFixed(2)}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Volatility</div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Recent Daily Rates */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Recent Daily Rates</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-3 py-2 text-gray-900 dark:text-gray-100">Date</th>
                <th className="px-3 py-2 text-gray-900 dark:text-gray-100">Rate</th>
                <th className="px-3 py-2 text-gray-900 dark:text-gray-100">High</th>
                <th className="px-3 py-2 text-gray-900 dark:text-gray-100">Low</th>
              </tr>
            </thead>
            <tbody>
              {pairData.dailyRates.slice(-10).reverse().map((dailyRate, index) => (
                <tr key={index} className="border-b border-gray-200 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-700">
                  <td className="px-3 py-2 text-gray-700 dark:text-gray-200">{dailyRate.date}</td>
                  <td className="px-3 py-2 text-gray-700 dark:text-gray-200 font-medium">{dailyRate.rate}</td>
                  <td className="px-3 py-2 text-green-600 dark:text-green-400">{dailyRate.high}</td>
                  <td className="px-3 py-2 text-red-600 dark:text-red-400">{dailyRate.low}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Showing last 10 trading days</div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">About Currency Strength</h2>
        <p className="text-gray-700 dark:text-gray-200 mb-2">
          <span className="font-semibold">{pairData.strength}</span> means the {pairData.base} is considered {pairData.strength.toLowerCase().replace(pairData.base, "").replace("usd", "US Dollar").replace("eur", "Euro").replace("jpy", "Yen").replace("gbp", "Pound").replace("aud", "Australian Dollar").replace("cad", "Canadian Dollar").replace("chf", "Swiss Franc").replace("cny", "Yuan").replace("inr", "Rupee").trim()} relative to the {pairData.quote} in recent trading.
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          Currency strength is influenced by economic indicators, interest rates, geopolitical events, and market sentiment. A strong base currency typically means it has appreciated against the quote currency.
        </p>
      </section>
    </div>
  );
}
