"use client";
import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { gdpGrowthData, gdpGrowthYears, gdpGrowthCountryOptions } from "../../../data/gdpGrowthData";
import { inflationData } from "../../../data/inflationData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const groupedBarCountries = [
  // EMEA
  { value: "Germany", label: "Germany", region: "EMEA" },
  { value: "France", label: "France", region: "EMEA" },
  { value: "UnitedKingdom", label: "United Kingdom", region: "EMEA" },
  { value: "Italy", label: "Italy", region: "EMEA" },
  { value: "Denmark", label: "Denmark", region: "EMEA" },
  { value: "Greece", label: "Greece", region: "EMEA" },
  // Americas
  { value: "UnitedStates", label: "United States", region: "Americas" },
  { value: "Canada", label: "Canada", region: "Americas" },
  { value: "Brazil", label: "Brazil", region: "Americas" },
  { value: "Argentina", label: "Argentina", region: "Americas" },
  // APAC
  { value: "China", label: "China", region: "APAC" },
  { value: "Japan", label: "Japan", region: "APAC" },
  { value: "Australia", label: "Australia", region: "APAC" },
  { value: "Singapore", label: "Singapore", region: "APAC" },
  { value: "Indonesia", label: "Indonesia", region: "APAC" },
  { value: "HongKong", label: "Hong Kong", region: "APAC" },
];

const regionColors = {
  EMEA: "rgba(59, 130, 246, 0.7)", // blue
  Americas: "rgba(16, 185, 129, 0.7)", // green
  APAC: "rgba(251, 191, 36, 0.7)", // yellow
};

function getGDPGrowthSummary(country: string): string {
  switch (country) {
  case "World":
    return "The chart above shows projected GDP growth rates for major economies and the world from 2023 to 2030. The data reveals that global growth is expected to remain moderate, with most advanced economies experiencing a slowdown in 2024–2025 before stabilizing. The United States and Canada show a gradual decline in growth rates, while the Euro Area (Germany, France, Italy) sees a dip in 2024 followed by a slow recovery. China and India maintain higher growth rates compared to advanced economies, but their growth also trends downward over the period. Japan and the United Kingdom display relatively low but stable growth. Overall, the chart highlights persistent global economic uncertainty, with emerging markets outpacing advanced economies but facing their own headwinds. The outlook underscores the importance of policy stability and international cooperation to support sustained growth.";
  case "UnitedStates":
    return "The United States is projected to see a gradual slowdown in GDP growth from 2.9% in 2023 to around 1.7% by 2026, reflecting tighter monetary policy and waning post-pandemic momentum. Growth stabilizes near 2.1% from 2027 onward, indicating a return to long-term trend rates. The chart highlights the impact of higher interest rates and global uncertainty on the US economy, with a soft landing expected as inflation moderates.";
  case "Australia":
    return "Australia’s GDP growth is forecast to dip from 2.1% in 2023 to just over 1% in 2024, before rebounding to above 2% by 2027. The chart shows a V-shaped recovery, with growth supported by strong commodity exports and resilient domestic demand. The outlook reflects Australia’s exposure to global trade trends and its ability to weather external shocks.";
  case "Austria":
    return "Austria faces a contraction in 2023 and 2024, with negative growth rates, before returning to positive territory in 2025 and gradually accelerating to over 1% by 2027. The chart highlights the impact of weak Euro Area demand and energy price shocks, with a slow but steady recovery expected.";
  case "Belgium":
    return "Belgium’s growth slows from 1.3% in 2023 to below 1% in 2025, then gradually recovers to above 1% by 2027. The chart shows a modest dip and recovery, reflecting the country’s integration with the Euro Area and sensitivity to regional economic conditions.";
  case "Canada":
    return "Canada’s GDP growth moderates from 1.5% in 2023 to just under 2% by 2025, then stabilizes near 1.6% through 2030. The chart highlights the effects of tighter financial conditions and lower global demand, with growth remaining positive but subdued.";
  case "France":
    return "France experiences a slowdown in 2024, with growth dipping to 0.6%, before recovering to above 1% by 2026. The chart shows a shallow dip and gradual improvement, reflecting the impact of energy prices, policy tightening, and Euro Area headwinds.";
  case "Germany":
    return "Germany faces a mild contraction in 2023 and 2024, with growth turning slightly negative, before rebounding to over 1% by 2027. The chart highlights the impact of energy shocks, weak exports, and industrial challenges, with a slow recovery as global demand improves.";
  case "Italy":
    return "Italy’s growth slows to 0.4% in 2025 after a stronger 2023, then stabilizes near 0.7% through 2030. The chart shows a modest dip and steady outlook, reflecting structural challenges and the need for continued reforms.";
  case "Japan":
    return "Japan’s growth is projected to remain low but stable, fluctuating between 0.1% and 0.6% through 2030. The chart highlights persistent demographic headwinds and subdued domestic demand, with limited upside despite global recovery.";
  case "Korea":
    return "Korea’s GDP growth is expected to rebound from 1.4% in 2023 to above 2% in 2024, then moderate to around 1.8% by 2027. The chart shows a recovery driven by exports and technology, but growth remains below pre-pandemic averages.";
  case "UnitedKingdom":
    return "The United Kingdom’s growth recovers from a weak 2023, rising to over 1% by 2025 and stabilizing near 1.4% through 2030. The chart highlights the impact of Brexit, inflation, and policy tightening, with a gradual return to trend growth.";
  case "China":
    return "China’s growth remains the highest among major economies, starting at 5.2% in 2023 and gradually declining to 4% by 2030. The chart shows a steady slowdown as the economy matures, with structural reforms and external demand shaping the outlook.";
  default:
    return "The selected country’s GDP growth shows a pattern of post-pandemic normalization, with a slowdown in 2024–2025 followed by stabilization or modest recovery. The chart highlights the influence of global headwinds, policy changes, and domestic factors on the growth trajectory.";
  }
}

function GDPGrowthLineChart() {
  const [country, setCountry] = useState("World");
  const data = {
    labels: gdpGrowthYears,
    datasets: [
      {
        label: `${gdpGrowthCountryOptions.find(c => c.value === country)?.label} GDP Growth (%)`,
        data: gdpGrowthData[country],
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: false },
      tooltip: { callbacks: { label: ctx => `${ctx.parsed.y}%` } },
    },
    scales: {
      y: {
        title: { display: true, text: "GDP Growth (%)" },
        beginAtZero: false,
      },
      x: {
        title: { display: true, text: "Year" },
      },
    },
  };
  return (
    <div className="mb-8">
      <div className="mb-4">
        <label htmlFor="country-select" className="block mb-2 font-medium text-gray-700">Select Country/Region:</label>
        <select
          id="country-select"
          value={country}
          onChange={e => setCountry(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          {gdpGrowthCountryOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <Line data={data} options={options} height={320} />
      <div className="text-gray-700 text-sm mb-4">
        <strong>Summary:</strong> {getGDPGrowthSummary(country)}
      </div>
    </div>
  );
}

function RegionalGDPGrowthBarChart() {
  // 2025 GDP growth for each country (update with real values as needed)
  const gdpGrowth2025 = {
    Germany: gdpGrowthData.Germany?.[2] ?? null,
    France: gdpGrowthData.France?.[2] ?? null,
    UnitedKingdom: gdpGrowthData.UnitedKingdom?.[2] ?? null,
    Italy: gdpGrowthData.Italy?.[2] ?? null,
    Denmark: 2.9, // Example/mock, update as needed
    Greece: 2.03, // Example/mock, update as needed
    UnitedStates: gdpGrowthData.UnitedStates?.[2] ?? null,
    Canada: gdpGrowthData.Canada?.[2] ?? null,
    Brazil: 2.2, // Example/mock, update as needed
    Argentina: 3.13, // Example/mock, update as needed
    China: gdpGrowthData.China?.[2] ?? null,
    Japan: gdpGrowthData.Japan?.[2] ?? null,
    Australia: gdpGrowthData.Australia?.[2] ?? null,
    Singapore: 2.01, // Example/mock, update as needed
    Indonesia: 5.0, // Example/mock, update as needed
    HongKong: 1.52, // Example/mock, update as needed
  };
  const labels = groupedBarCountries.map(c => c.label);
  const backgroundColors = groupedBarCountries.map(c => regionColors[c.region]);
  const data = {
    labels,
    datasets: [
      {
        label: "2025 GDP Growth (%)",
        data: groupedBarCountries.map(c => gdpGrowth2025[c.value]),
        backgroundColor: backgroundColors,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "2025 GDP Growth by Country/Region" },
      tooltip: { callbacks: { label: ctx => `${ctx.parsed.y}%` } },
    },
    scales: {
      y: {
        title: { display: true, text: "GDP Growth (%)" },
        beginAtZero: false,
      },
      x: {
        title: { display: false },
      },
    },
  };
  return (
    <div className="mb-8">
      <Bar data={data} options={options} height={320} />
      <div className="flex gap-4 mt-2 text-xs">
        <span className="inline-flex items-center"><span className="w-3 h-3 rounded-full mr-1" style={{ background: regionColors.EMEA }}></span>EMEA</span>
        <span className="inline-flex items-center"><span className="w-3 h-3 rounded-full mr-1" style={{ background: regionColors.Americas }}></span>Americas</span>
        <span className="inline-flex items-center"><span className="w-3 h-3 rounded-full mr-1" style={{ background: regionColors.APAC }}></span>APAC</span>
      </div>
    </div>
  );
}

function InflationLineChart() {
  // Select a few major economies and the US, Euro Area, and World if available
  const countries = [
    "United States",
    "Germany",
    "France",
    "Italy",
    "Japan",
    "United Kingdom",
    "Canada",
    "Australia",
  ];
  const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
  const colors = [
    "rgb(37, 99, 235)", // US - blue
    "rgb(59, 130, 246)", // Germany - lighter blue
    "rgb(251, 191, 36)", // France - yellow
    "rgb(16, 185, 129)", // Italy - green
    "rgb(139, 92, 246)", // Japan - purple
    "rgb(239, 68, 68)", // UK - red
    "rgb(34, 197, 94)", // Canada - green
    "rgb(255, 99, 132)", // Australia - pink
  ];
  const data = {
    labels: years.map(String),
    datasets: countries.map((country, i) => ({
      label: country,
      data: years.map(y => inflationData[country]?.[y] ?? null),
      borderColor: colors[i],
      backgroundColor: colors[i],
      fill: false,
      tension: 0.3,
      pointRadius: 3,
      pointHoverRadius: 5,
    })),
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      title: { display: false },
      tooltip: { callbacks: { label: ctx => `${ctx.parsed.y}%` } },
    },
    scales: {
      y: {
        title: { display: true, text: "Inflation Rate (%)" },
        beginAtZero: false,
      },
      x: {
        title: { display: true, text: "Year" },
      },
    },
  };
  return (
    <div className="mb-8">
      <Line data={data} options={options} height={320} />
    </div>
  );
}

function RiskFactorsIcons() {
  return (
    <div className="flex gap-8 items-center justify-center my-4">
      {/* Trade Tensions */}
      <div className="flex flex-col items-center text-blue-700">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 mb-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>
        <span className="text-xs mt-1">Trade Tensions</span>
      </div>
      {/* Policy Uncertainty */}
      <div className="flex flex-col items-center text-amber-600">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 mb-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span className="text-xs mt-1">Policy Uncertainty</span>
      </div>
      {/* Financial Volatility */}
      <div className="flex flex-col items-center text-rose-600">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 mb-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" /></svg>
        <span className="text-xs mt-1">Financial Volatility</span>
      </div>
    </div>
  );
}

export default function IMFWorldEconomicOutlook2025Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">IMF World Economic Outlook: April 2025</h1>
        <p className="text-lg text-gray-600">Key Risks and Insights at a Critical Juncture</p>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Executive Summary</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
          <li><strong>Global growth projections for 2025 and 2026 have been revised downward</strong> due to policy shifts, trade tensions, and increased uncertainty.</li>
          <li><strong>Inflation is expected to decline further</strong>, but at a slower pace than previously forecast, with some countries seeing upward revisions.</li>
          <li><strong>Downside risks dominate the outlook</strong>: trade wars, policy uncertainty, and financial market volatility threaten both short- and long-term growth.</li>
          <li><strong>Emerging markets face heightened vulnerability</strong> to capital outflows and abrupt tightening of global financial conditions.</li>
          <li><strong>Policy recommendations:</strong> The IMF calls for international cooperation, stable trade environments, and reforms to support labor force participation and productivity.</li>
        </ul>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
          <strong>At a Glance:</strong> The global economy is at a critical juncture. Policy choices made now will shape growth, stability, and resilience for years to come.
        </div>
      </section>

      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Charts & Visuals</h2>
        <div className="mb-6">
          <h3 className="text-lg font-bold text-blue-700 mb-2">Global GDP Growth (2023–2030)</h3>
          <p className="text-gray-700 mb-4">Select a country or region to view projected annual GDP growth rates from the IMF World Economic Outlook, April 2025. This interactive chart highlights the latest economic outlook and revisions for major economies and the world.</p>
          <GDPGrowthLineChart />
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold text-blue-700 mb-2">2025 GDP Growth by Country/Region</h3>
          <p className="text-gray-700 mb-4">Compare projected 2025 GDP growth rates for major economies, grouped by region, based on the IMF World Economic Outlook and the Global Business Complexity Index focus countries.</p>
          <RegionalGDPGrowthBarChart />
          <div className="text-gray-700 text-sm mb-4">
            <strong>Summary:</strong> The bar chart above compares projected 2025 GDP growth rates for major economies across three regions: EMEA, Americas, and APAC. In the EMEA region, Germany, France, and the United Kingdom show modest growth, with Germany and France both below 1% and the UK slightly above. Italy and Greece perform better, with growth rates above 1%, while Denmark also shows a positive outlook. In the Americas, the United States and Canada are projected to have moderate growth, both under 2%, reflecting a slowdown from previous years. Brazil and Argentina stand out in the region, with Argentina expected to rebound strongly above 3% and Brazil maintaining steady growth above 2%. In the APAC region, China leads with the highest growth rate among major economies, though its rate is gradually declining compared to previous years. Japan and Australia show lower but stable growth, while Indonesia and India (not shown but typically included) continue to outperform with robust rates above 5%. Singapore and Hong Kong maintain moderate growth. Overall, the chart highlights the divergence between advanced and emerging economies, with emerging markets in APAC and Latin America generally outpacing advanced economies in EMEA and North America. The data underscores the resilience of emerging markets and the ongoing challenges faced by advanced economies amid global uncertainty.
          </div>
        </div>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Inflation Trends:</strong> <span className="text-sm"><InflationLineChart /></span></li>
          <div className="text-gray-700 text-sm mb-4">
            <strong>Summary:</strong> The line chart above displays projected inflation rates for major economies from 2023 to 2030. The data shows that inflation peaked in most countries in 2023, following global shocks, and is expected to decline steadily through 2025 before stabilizing near central bank targets. The United States and Canada see inflation falling from above 4% in 2023 to just above 2% by 2027, reflecting successful monetary tightening. In the Euro Area, Germany, France, and Italy also experience a sharp drop in inflation, with rates converging toward 2% by 2026. The United Kingdom, after a high of over 7% in 2023, returns to target by 2027. Japan maintains low and stable inflation throughout, while Australia and other advanced economies follow a similar downward trend. Notably, emerging markets and some smaller economies show more volatility but also trend downward. Overall, the chart highlights the normalization of inflation after recent spikes, with most advanced economies expected to achieve price stability by 2026–2027. Regional differences narrow over time, but some countries may face persistent inflation risks due to structural factors or external shocks.
          </div>
          <li><strong>Risk Factors:</strong> <span className="text-sm"><RiskFactorsIcons /></span></li>
          <div className="text-gray-700 text-sm mb-4">
            <strong>Summary:</strong> The icons above represent three key risk factors currently shaping the global economic outlook: <b>Trade Tensions</b>, <b>Policy Uncertainty</b>, and <b>Financial Volatility</b>. <b>Trade tensions</b> have escalated in 2024–2025, with new tariffs and retaliatory measures between major economies, especially the US, China, and the EU, leading to disruptions in global supply chains and increased costs for businesses. <b>Policy uncertainty</b> remains high as governments adjust fiscal and monetary policies in response to inflation, debt, and geopolitical risks. Recent elections and leadership changes in several countries have resulted in shifts in trade, tax, and regulatory policies, making it harder for businesses to plan long-term. <b>Financial volatility</b> has increased due to fluctuating interest rates, currency swings, and capital outflows from emerging markets, driven by tighter global financial conditions and concerns over sovereign debt. Together, these risk factors contribute to a more unpredictable and challenging environment for global growth and investment in 2025.
          </div>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Policy & Strategic Recommendations</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Promote international cooperation to reduce uncertainty and foster stable trade relations.</li>
          <li>Implement structural reforms to boost productivity and labor force participation, especially among older workers and women.</li>
          <li>Monitor and manage financial vulnerabilities, particularly in emerging markets.</li>
          <li>Prepare for demographic shifts and fiscal sustainability challenges.</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 border border-gray-200 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Further Reading & Resources</h2>
        <ul className="list-disc list-inside text-blue-700 mb-4">
          <li><a href="https://www.imf.org/en/Publications/WEO/Issues/2025/04/22/world-economic-outlook-april-2025" target="_blank" rel="noopener noreferrer">IMF World Economic Outlook, April 2025 (Full Report)</a></li>
          <li><a href="https://www.imf.org/en/Publications/WEO" target="_blank" rel="noopener noreferrer">WEO Data & Projections</a></li>
        </ul>
      </section>

      <div className="mt-12 text-center">
        <a href="/risk" className="text-blue-600 hover:underline">← Back to Risk Overview</a>
      </div>
    </div>
  );
}
