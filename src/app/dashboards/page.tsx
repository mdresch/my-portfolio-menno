// filepath: src/app/dashboards/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Economics Dashboards | Menno Drescher",
  description: "Interactive economic dashboards featuring trade data, currency trends, market analysis, and macroeconomic indicators. Explore comprehensive economic visualizations and insights.",
  keywords: ["economics dashboards", "trade data", "currency analysis", "market trends", "economic indicators", "data visualization"],
  openGraph: {
    title: "Economics Dashboards | Menno Drescher",
    description: "Interactive economic dashboards featuring trade data, currency trends, market analysis, and macroeconomic indicators.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Economics Dashboards | Menno Drescher",
    description: "Interactive economic dashboards featuring trade data, currency trends, market analysis, and macroeconomic indicators.",
  },
};

const dashboards = [
  {
    title: "Balance of Trade",
    description: "Visualize trade surpluses and deficits for major economies.",
    href: "/dashboards/balance-of-trade",
  },
  {
    title: "Currencies",
    description: "Compare currency strength and recent trends.",
    href: "/dashboards/currencies",
  },
  {
    title: "Economic Indicators",
    description: "Key macroeconomic indicators and trends.",
    href: "/dashboards/economic-indicators",
  },
  {
    title: "Macroeconomic Dashboard",
    description: "Major macro trends: GDP, inflation, employment, and more.",
    href: "/dashboards/macro",
  },
  {
    title: "Major Economics",
    description: "Compare headline indicators for the world’s largest economies.",
    href: "/dashboards/major-economics",
  },
  {
    title: "Market Trends",
    description: "Compare sector and segment performance to the total market, spot over/underperformance, and visualize trends.",
    href: "/dashboards/market-trends",
  },
  {
    title: "Policy Impact",
    description: "Analyze the effects of policy changes on economic indicators and market outcomes.",
    href: "/dashboards/policy-impact",
  },
  {
    title: "Overview Dashboard",
    description: "A comprehensive overview of key economic indicators and trends.",
    href: "/dashboards/overview-dashboard",
  },
  {
    title: "Stocks",
    description: "Overview of major stock indices and their performance.",
    href: "/dashboards/stocks",
  },
  {
    title: "Indicators Trade",
    description: "Comprehensive overview of economic indicators influencing imports, exports, and trade between countries.",
    href: "/dashboards/indicators-trade",
  },
  {
    title: "Policy Impact Dashboard",
    description: "Analyze the effects of policy changes on economic indicators and market outcomes.",
    href: "/dashboards/policyimpact-dashboard",
  },
  {
    title: "OECD Economic Surveys Netherlands 2023",
    description: "Comprehensive analysis of the Dutch economy, key challenges, and OECD recommendations from the 2023 Economic Survey.",
    href: "/dashboards/oecd-netherlands-2023",
  },
  {
    title: "Economic Indicators for the Netherlands",
    description: "Current key economic indicators for the Netherlands including GDP, inflation, unemployment, and purchasing power from OECD, IMF, CBS, and CPB.",
    href: "/dashboards/netherlands-economic-indicators",
  },
];

export default function EconomicsLandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <section className="relative flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/images/trade-policy-uncertainty-index.jpg"
            alt="Economics hero background"
            fill
            className="object-cover object-center opacity-60 dark:opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-transparent dark:from-neutral-950/90 dark:via-neutral-950/70 dark:to-transparent" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 drop-shadow-lg">Economics Dashboards</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 drop-shadow">
          Explore interactive dashboards for global trade, currencies, macroeconomic indicators, and more. Gain insights into the world’s leading economies with clear, accessible data visualizations.
        </p>
      </section>
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dashboards.map((dashboard) => (
            <Link
              key={dashboard.href}
              href={dashboard.href}
              className="block bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 hover:bg-blue-50 dark:hover:bg-blue-900 transition border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{dashboard.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">{dashboard.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}