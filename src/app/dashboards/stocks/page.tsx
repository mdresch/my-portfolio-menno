import React from 'react';
import Link from 'next/link';

// Mock data for global indices
const indices = [
  { name: 'S&P 500', region: 'US', value: 5200, change: '+0.8%', companies: 500, sectors: 11, segments: ['Large Cap', 'Growth', 'Value'] },
  { name: 'Dow Jones', region: 'US', value: 39000, change: '+0.5%', companies: 30, sectors: 9, segments: ['Blue Chip'] },
  { name: 'NASDAQ', region: 'US', value: 16500, change: '+1.2%', companies: 3500, sectors: 11, segments: ['Tech', 'Growth'] },
  { name: 'FTSE 100', region: 'UK', value: 8000, change: '+0.3%', companies: 100, sectors: 10, segments: ['Large Cap'] },
  { name: 'DAX', region: 'Germany', value: 18500, change: '+0.6%', companies: 40, sectors: 10, segments: ['Large Cap'] },
  { name: 'Nikkei 225', region: 'Japan', value: 40000, change: '+1.0%', companies: 225, sectors: 10, segments: ['Large Cap'] },
  { name: 'Hang Seng', region: 'Hong Kong', value: 18000, change: '-0.2%', companies: 50, sectors: 10, segments: ['Large Cap'] },
  { name: 'CAC 40', region: 'France', value: 8200, change: '+0.4%', companies: 40, sectors: 10, segments: ['Large Cap'] },
  { name: 'SSE Composite', region: 'China', value: 3200, change: '+0.1%', companies: 1500, sectors: 11, segments: ['All Cap'] },
];

const sectors = [
  'Information Technology', 'Health Care', 'Financials', 'Consumer Discretionary',
  'Communication Services', 'Industrials', 'Consumer Staples', 'Energy',
  'Utilities', 'Real Estate', 'Materials'
];

const companies = [
  { name: 'Apple', ticker: 'AAPL', sector: 'Information Technology', index: 'S&P 500', price: 190, change: '+1.1%' },
  { name: 'Microsoft', ticker: 'MSFT', sector: 'Information Technology', index: 'S&P 500', price: 420, change: '+0.9%' },
  { name: 'JPMorgan Chase', ticker: 'JPM', sector: 'Financials', index: 'Dow Jones', price: 180, change: '+0.4%' },
  { name: 'Toyota', ticker: '7203.T', sector: 'Consumer Discretionary', index: 'Nikkei 225', price: 2600, change: '+0.7%' },
  { name: 'Nestlé', ticker: 'NESN.SW', sector: 'Consumer Staples', index: 'SSE Composite', price: 110, change: '-0.2%' },
  // ...add more as needed
];

export default function StocksDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Global Stocks & Indices Dashboard</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Major Global Indices</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2">Index</th>
                <th className="px-3 py-2">Region</th>
                <th className="px-3 py-2">Value</th>
                <th className="px-3 py-2">Change</th>
                <th className="px-3 py-2">Companies</th>
                <th className="px-3 py-2">Sectors</th>
                <th className="px-3 py-2">Market Segments</th>
              </tr>
            </thead>
            <tbody>
              {indices.map(idx => (
                <tr key={idx.name} className="border-b">
                  <td className="px-3 py-2 font-medium">{idx.name}</td>
                  <td className="px-3 py-2">{idx.region}</td>
                  <td className="px-3 py-2">{idx.value}</td>
                  <td className="px-3 py-2">{idx.change}</td>
                  <td className="px-3 py-2">{idx.companies}</td>
                  <td className="px-3 py-2">{idx.sectors}</td>
                  <td className="px-3 py-2">{idx.segments.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Sectors</h2>
        <div className="flex flex-wrap gap-3 mb-4">
          {sectors.map(sector => (
            <span key={sector} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">{sector}</span>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Sample Companies</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-2">Company</th>
                <th className="px-3 py-2">Ticker</th>
                <th className="px-3 py-2">Sector</th>
                <th className="px-3 py-2">Index</th>
                <th className="px-3 py-2">Price</th>
                <th className="px-3 py-2">Change</th>
              </tr>
            </thead>
            <tbody>
              {companies.map(c => (
                <tr key={c.ticker} className="border-b">
                  <td className="px-3 py-2 font-medium">
                    <Link href={`/dashboards/stocks/${encodeURIComponent(c.ticker)}`}>{c.name}</Link>
                  </td>
                  <td className="px-3 py-2">
                    <Link href={`/dashboards/stocks/${encodeURIComponent(c.ticker)}`}>{c.ticker}</Link>
                  </td>
                  <td className="px-3 py-2">{c.sector}</td>
                  <td className="px-3 py-2">{c.index}</td>
                  <td className="px-3 py-2">{c.price}</td>
                  <td className="px-3 py-2">{c.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
