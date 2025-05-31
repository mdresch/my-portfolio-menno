"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import { mockCompanies } from "../../../../data/mockCompanies";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const TABS = [
  "Summary",
  "News",
  "Profile",
  "Earnings",
  "Peers",
  "Financials",
  "Options",
  "Ownership",
];

interface CompanyClientProps {
  ticker: string;
}

export default function CompanyClient({ ticker }: CompanyClientProps) {
  const company = mockCompanies.find(c => c.ticker.toLowerCase() === ticker.toLowerCase());
  const [tab, setTab] = useState("Summary");
  
  if (!company) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{company.name} ({company.ticker})</h1>
      <div className="mb-6">
        <span className="text-lg font-semibold">Sector:</span> {company.sector} | <span className="font-semibold">Index:</span> {company.index}
      </div>
      <div className="mb-8 border-b flex gap-4">
        {TABS.map(t => (
          <button
            key={t}
            className={`py-2 px-4 -mb-px border-b-2 ${tab === t ? "border-blue-600 text-blue-700 font-semibold" : "border-transparent text-gray-500"}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div>
        {tab === "Summary" && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            {company.priceHistory && (
              <div className="mb-4">
                <Line
                  data={{
                    labels: company.priceHistory.map(p => p.date),
                    datasets: [
                      {
                        label: "Price",
                        data: company.priceHistory.map(p => p.price),
                        borderColor: "rgb(37, 99, 235)",
                        backgroundColor: "rgba(37, 99, 235, 0.2)",
                        tension: 0.3,
                        fill: true,
                        pointRadius: 3,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                      tooltip: { enabled: true },
                    },
                    scales: {
                      x: { title: { display: true, text: "Date" } },
                      y: { title: { display: true, text: "Price (USD)" }, beginAtZero: false },
                    },
                  }}
                  height={80}
                />
              </div>
            )}
            <ul className="text-sm">
              <li><b>Price:</b> ${company.price} ({company.change})</li>
              <li><b>Market Cap:</b> {company.summary.marketCap}</li>
              <li><b>P/E:</b> {company.summary.pe}</li>
              <li><b>EPS:</b> {company.summary.eps}</li>
              <li><b>Dividend:</b> {company.summary.dividend} ({company.summary.yield})</li>
              <li><b>Beta:</b> {company.summary.beta}</li>
              <li><b>Volume:</b> {company.summary.volume}</li>
              <li><b>Shares Out:</b> {company.summary.shares}</li>
              <li><b>ROE:</b> {company.summary.roe}</li>
              <li><b>Revenue:</b> {company.summary.revenue}</li>
              <li><b>Gross Margin:</b> {company.summary.grossMargin}</li>
              <li><b>Net Margin:</b> {company.summary.netMargin}</li>
              <li><b>Debt/Equity:</b> {company.summary.debtToEquity}</li>
            </ul>
          </section>
        )}
        {tab === "News" && (
          <section>
            <h2 className="text-xl font-semibold mb-2">News</h2>
            <ul className="text-sm list-disc ml-4">
              {company.news?.map(n => (
                <li key={n.title}>
                  <a href={n.url} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{n.title}</a> <span className="text-gray-400">({n.date})</span>
                </li>
              )) || <li>No news available.</li>}
            </ul>
          </section>
        )}
        {tab === "Profile" && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Profile</h2>
            <p className="mb-2 text-sm">{company.profile.description}</p>
            <div className="mb-2 text-sm">
              <b>Executives:</b>
              <ul className="ml-4 list-disc">
                {company.profile.executives.map(e => (
                  <li key={e.name}>{e.name} – {e.title}</li>
                ))}
              </ul>
            </div>
            <div className="mb-2 text-sm"><b>Address:</b> {company.profile.address}</div>
            <div className="mb-2 text-sm"><b>Website:</b> <a href={company.profile.website} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{company.profile.website}</a></div>
          </section>
        )}
        {tab === "Earnings" && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Earnings</h2>
            <ul className="text-sm">
              <li><b>Next Earnings Date:</b> {company.earnings?.nextEarningsDate}</li>
              <li><b>Last Earnings Date:</b> {company.earnings?.lastEarningsDate}</li>
              <li><b>EPS (Actual/Estimate):</b> {company.earnings?.epsActual} / {company.earnings?.epsEstimate}</li>
              <li><b>Revenue (Actual/Estimate):</b> {company.earnings?.revenueActual} / {company.earnings?.revenueEstimate}</li>
              <li><b>Surprise:</b> {company.earnings?.surprise}</li>
            </ul>
          </section>
        )}
        {tab === "Peers" && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Peers</h2>
            <ul className="text-sm list-disc ml-4">
              {company.peers?.map(p => (
                <li key={p.ticker}>{p.name} ({p.ticker})</li>
              )) || <li>No peers available.</li>}
            </ul>
          </section>
        )}
        {tab === "Financials" && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Financials</h2>
            <div className="mb-4">
              <b>Income Statement:</b>
              <ul className="ml-4 text-sm list-disc">
                {company.financials?.incomeStatement?.map(row => (
                  <li key={row.year}>Year {row.year}: Revenue {row.revenue}, Net Income {row.netIncome}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <b>Balance Sheet:</b>
              <ul className="ml-4 text-sm list-disc">
                {company.financials?.balanceSheet?.map(row => (
                  <li key={row.year}>Year {row.year}: Assets {row.assets}, Liabilities {row.liabilities}, Equity {row.equity}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <b>Cash Flow:</b>
              <ul className="ml-4 text-sm list-disc">
                {company.financials?.cashFlow?.map(row => (
                  <li key={row.year}>Year {row.year}: Operating {row.operating}, Investing {row.investing}, Financing {row.financing}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
        {tab === "Options" && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Options</h2>
            <div className="mb-4">
              <b>Calls:</b>
              <ul className="ml-4 text-sm list-disc">
                {company.options?.calls?.map(opt => (
                  <li key={opt.strike + "-" + opt.expiry}>Strike {opt.strike}, Expiry {opt.expiry}, Price {opt.price}, Volume {opt.volume}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <b>Puts:</b>
              <ul className="ml-4 text-sm list-disc">
                {company.options?.puts?.map(opt => (
                  <li key={opt.strike + "-" + opt.expiry}>Strike {opt.strike}, Expiry {opt.expiry}, Price {opt.price}, Volume {opt.volume}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
        {tab === "Ownership" && (
          <section>
            <h2 className="text-xl font-semibold mb-2">Ownership</h2>
            <ul className="text-sm">
              <li><b>Institutional:</b> {company.ownership?.institutional}</li>
              <li><b>Insider:</b> {company.ownership?.insider}</li>
            </ul>
            <div className="mt-2">
              <b>Top Holders:</b>
              <ul className="ml-4 text-sm list-disc">
                {company.ownership?.topHolders?.map(h => (
                  <li key={h.name}>{h.name} ({h.percent})</li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
      <div className="text-gray-500 text-xs mt-8">(Demo: Data is static. In production, fetch real data by ticker.)</div>
    </div>
  );
}
