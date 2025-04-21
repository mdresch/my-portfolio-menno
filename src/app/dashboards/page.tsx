// filepath: src/app/dashboards/page.tsx
import Link from 'next/link';

export default function DashboardsLandingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Economics Dashboards</h1>
      <p className="mb-8 text-lg text-gray-700 max-w-2xl">
        Explore key economic dashboards for market trends, macroeconomic indicators, policy impacts, and more. Select an area below to view detailed analytics and visualizations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/dashboards/market-trends" className="block bg-white rounded-lg shadow-md p-6 hover:bg-blue-50 transition">
          <h2 className="text-2xl font-semibold mb-2">Market Trends</h2>
          <p className="text-gray-600">Compare sector and segment performance to the total market, spot over/underperformance, and visualize trends.</p>
        </Link>
        <Link href="/dashboards/macro" className="block bg-white rounded-lg shadow-md p-6 hover:bg-blue-50 transition">
          <h2 className="text-2xl font-semibold mb-2">Macroeconomics</h2>
          <p className="text-gray-600">Track GDP, inflation, interest rates, employment, population growth, R&D, tax, debt, and more macro indicators.</p>
        </Link>
        <Link href="/dashboards/policy-impact" className="block bg-white rounded-lg shadow-md p-6 hover:bg-blue-50 transition">
          <h2 className="text-2xl font-semibold mb-2">Policy Impact</h2>
          <p className="text-gray-600">Analyze the effects of policy changes on economic indicators and market outcomes.</p>
        </Link>
        <Link href="/dashboards/economic-indicators" className="block bg-white rounded-lg shadow-md p-6 hover:bg-blue-50 transition">
          <h2 className="text-2xl font-semibold mb-2">Economic Indicators</h2>
          <p className="text-gray-600">Overview of key economic metrics and trends in a single dashboard.</p>
        </Link>
      </div>
    </div>
  );
}