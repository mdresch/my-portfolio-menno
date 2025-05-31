"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

// Mock data for demonstration (in a real app, fetch from API or DB)
const currencyPairs = [
  { pair: "EUR/USD", rate: 1.08, change: "+0.2%", base: "EUR", quote: "USD", strength: "Neutral", history: [1.07, 1.08, 1.09, 1.08, 1.08] },
  { pair: "USD/JPY", rate: 154.2, change: "-0.1%", base: "USD", quote: "JPY", strength: "Strong USD", history: [153.8, 154.0, 154.5, 154.3, 154.2] },
  { pair: "GBP/USD", rate: 1.25, change: "+0.1%", base: "GBP", quote: "USD", strength: "Neutral", history: [1.24, 1.25, 1.26, 1.25, 1.25] },
  { pair: "USD/CHF", rate: 0.91, change: "+0.3%", base: "USD", quote: "CHF", strength: "Strong USD", history: [0.90, 0.91, 0.92, 0.91, 0.91] },
  { pair: "AUD/USD", rate: 0.65, change: "-0.2%", base: "AUD", quote: "USD", strength: "Weak AUD", history: [0.66, 0.65, 0.65, 0.64, 0.65] },
  { pair: "USD/CAD", rate: 1.37, change: "+0.1%", base: "USD", quote: "CAD", strength: "Strong USD", history: [1.36, 1.37, 1.38, 1.37, 1.37] },
  { pair: "EUR/GBP", rate: 0.86, change: "0.0%", base: "EUR", quote: "GBP", strength: "Neutral", history: [0.85, 0.86, 0.87, 0.86, 0.86] },
  { pair: "EUR/JPY", rate: 166.5, change: "+0.1%", base: "EUR", quote: "JPY", strength: "Strong EUR", history: [166.0, 166.2, 166.7, 166.4, 166.5] },
  { pair: "USD/CNY", rate: 7.24, change: "+0.1%", base: "USD", quote: "CNY", strength: "Strong USD", history: [7.23, 7.24, 7.25, 7.24, 7.24] },
  { pair: "USD/INR", rate: 83.4, change: "+0.1%", base: "USD", quote: "INR", strength: "Strong USD", history: [83.3, 83.4, 83.5, 83.4, 83.4] },
];

export default function CurrencyPairDetailPage() {
  const params = useParams();
  // URL param is like "EUR-USD"
  const pairParam = Array.isArray(params.pair) ? params.pair[0] : params.pair;
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
