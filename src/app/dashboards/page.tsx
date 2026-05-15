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
    imageSrc: "/images/trade-policy-uncertainty-index.jpg",
  },
  {
    title: "Currencies",
    description: "Compare currency strength and recent trends.",
    href: "/dashboards/currencies",
    imageSrc: "/images/showcase-economics.jpg",
  },
  {
    title: "Economic Indicators",
    description: "Key macroeconomic indicators and trends.",
    href: "/dashboards/economic-indicators",
    imageSrc: "/images/showcase-dataviz.jpg",
  },
  {
    title: "Macroeconomic Dashboard",
    description: "Major macro trends: GDP, inflation, employment, and more.",
    href: "/dashboards/macro",
    imageSrc: "/images/showcase-dataviz5.jpg",
  },
  {
    title: "Major Economics",
    description: "Compare headline indicators for the world’s largest economies.",
    href: "/dashboards/major-economics",
    imageSrc: "/images/risk-europe.jpg",
  },
  {
    title: "Market Trends",
    description: "Compare sector and segment performance to the total market, spot over/underperformance, and visualize trends.",
    href: "/dashboards/market-trends",
    imageSrc: "/images/showcase-cloudscale.jpg",
  },
  {
    title: "Policy Impact",
    description: "Analyze the effects of policy changes on economic indicators and market outcomes.",
    href: "/dashboards/policy-impact",
    imageSrc: "/images/riskmanagement2.jpg",
  },
  {
    title: "Overview Dashboard",
    description: "A comprehensive overview of key economic indicators and trends.",
    href: "/dashboards/overview-dashboard",
    imageSrc: "/images/showcase-cloudbackup.jpg",
  },
  {
    title: "Stocks",
    description: "Overview of major stock indices and their performance.",
    href: "/dashboards/stocks",
    imageSrc: "/images/showcase-aiassist.jpg",
  },
  {
    title: "Indicators Trade",
    description: "Comprehensive overview of economic indicators influencing imports, exports, and trade between countries.",
    href: "/dashboards/indicators-trade",
    imageSrc: "/images/tariff-modeler-capabilities.png",
  },
  {
    title: "Policy Impact Dashboard",
    description: "Analyze the effects of policy changes on economic indicators and market outcomes.",
    href: "/dashboards/policyimpact-dashboard",
    imageSrc: "/images/riskmanagement3.jpg",
  },
  {
    title: "OECD Economic Surveys Netherlands 2023",
    description: "Comprehensive analysis of the Dutch economy, key challenges, and OECD recommendations from the 2023 Economic Survey.",
    href: "/dashboards/oecd-netherlands-2023",
    imageSrc: "/images/risk-productivity.jpg",
  },
  {
    title: "Economic Indicators for the Netherlands",
    description: "Current key economic indicators for the Netherlands including GDP, inflation, unemployment, and purchasing power from OECD, IMF, CBS, and CPB.",
    href: "/dashboards/netherlands-economic-indicators",
    imageSrc: "/images/risk-management-1.jpg",
  },
] as const;

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
              className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-neutral-900 dark:hover:border-blue-700 dark:hover:bg-blue-950/40"
            >
              <div className="relative aspect-[2/1] w-full overflow-hidden sm:aspect-[21/9]">
                <Image
                  src={dashboard.imageSrc}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-80 dark:from-black/50"
                  aria-hidden
                />
              </div>
              <div className="p-6 pt-5">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 sm:text-2xl">
                  {dashboard.title}
                </h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{dashboard.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}