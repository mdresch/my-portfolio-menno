import React from 'react';

// Mock data for major currency pairs and strength
const currencyPairs = [
  { pair: 'EUR/USD', rate: 1.08, change: '+0.2%', base: 'EUR', quote: 'USD', strength: 'Neutral' },
  { pair: 'USD/JPY', rate: 154.2, change: '-0.1%', base: 'USD', quote: 'JPY', strength: 'Strong USD' },
  { pair: 'GBP/USD', rate: 1.25, change: '+0.1%', base: 'GBP', quote: 'USD', strength: 'Neutral' },
  { pair: 'USD/CHF', rate: 0.91, change: '+0.3%', base: 'USD', quote: 'CHF', strength: 'Strong USD' },
  { pair: 'AUD/USD', rate: 0.65, change: '-0.2%', base: 'AUD', quote: 'USD', strength: 'Weak AUD' },
  { pair: 'USD/CAD', rate: 1.37, change: '+0.1%', base: 'USD', quote: 'CAD', strength: 'Strong USD' },
  { pair: 'EUR/GBP', rate: 0.86, change: '0.0%', base: 'EUR', quote: 'GBP', strength: 'Neutral' },
  { pair: 'EUR/JPY', rate: 166.5, change: '+0.1%', base: 'EUR', quote: 'JPY', strength: 'Strong EUR' },
  { pair: 'USD/CNY', rate: 7.24, change: '+0.1%', base: 'USD', quote: 'CNY', strength: 'Strong USD' },
  { pair: 'USD/INR', rate: 83.4, change: '+0.1%', base: 'USD', quote: 'INR', strength: 'Strong USD' },
];

export default function CurrenciesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Major Currencies & Exchange Rates</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Major Currency Pairs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2">Pair</th>
                <th className="px-3 py-2">Rate</th>
                <th className="px-3 py-2">Change</th>
                <th className="px-3 py-2">Base</th>
                <th className="px-3 py-2">Quote</th>
                <th className="px-3 py-2">Strength</th>
              </tr>
            </thead>
            <tbody>
              {currencyPairs.map(pair => (
                <tr key={pair.pair} className="border-b">
                  <td className="px-3 py-2 font-medium">{pair.pair}</td>
                  <td className="px-3 py-2">{pair.rate}</td>
                  <td className="px-3 py-2">{pair.change}</td>
                  <td className="px-3 py-2">{pair.base}</td>
                  <td className="px-3 py-2">{pair.quote}</td>
                  <td className="px-3 py-2">{pair.strength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
