"use client";
import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

// Adjusted mock data: weekends use Friday's close value
const days = [
  "Apr 1", "Apr 2", "Apr 3", "Apr 4", "Apr 5", "Apr 6", "Apr 7", "Apr 8", "Apr 9", "Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 14", "Apr 15", "Apr 16", "Apr 17", "Apr 18", "Apr 19", "Apr 20", "Apr 21", "Apr 22", "Apr 23", "Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29", "Apr 30"
];
const sp500 = [
  5260, 5220, 5280, 5150, 5150, 5150, 5200, 5100, 5050, 4950, 5000, 5000, 5000, 4850, 4900, 4700, 4800, 4600, 4600, 4600, 4700, 4550, 4650, 4500, 4400, 4400, 4400, 4450, 4300, 4280
];
const nasdaq = [
  19911, 19758, 18675, 17539, 17539, 17539, 17563, 15500, 15300, 14900, 15100, 15100, 15100, 14600, 14800, 14300, 14500, 14000, 14000, 14000, 14200, 13700, 13900, 13400, 13000, 13000, 13000, 13200, 12800, 12700
];

const marketLineData = {
  labels: days,
  datasets: [
    {
      label: "S&P 500",
      data: sp500,
      borderColor: "#FFCE56",
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      tension: 0.3,
      fill: false,
    },
    {
      label: "Nasdaq",
      data: nasdaq,
      borderColor: "#FF6384",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      tension: 0.3,
      fill: false,
    },
  ],
};

const tariffImpactData = {
  labels: ["Tariffs", "Other Costs", "Housing", "Food", "Healthcare", "Transport"],
  datasets: [
    {
      data: [4700, 5300, 9000, 8000, 6000, 4000], // Example breakdown
      backgroundColor: ["#FF3B30", "#3498db", "#2980b9", "#5dade2", "#2471a3", "#85c1e9"], // Red for Tariffs, blue shades for others
      hoverBackgroundColor: ["#FF3B30", "#3498db", "#2980b9", "#5dade2", "#2471a3", "#85c1e9"],
    },
  ],
};

const averageHouseholdBudget = 61334; // Updated value for 2025

export default function TrumpEconomicAgendaRiskPage() {
  return (
    <main className="prose max-w-3xl mx-auto py-8">
      <h1>Risks of Trump’s Economic Agenda: Tariffs, Tax Cuts, and Deregulation</h1>
      <section>
        <h2>Overview</h2>
        <ul>
          <li>U.S. Treasury Secretary Scott Bessent defended President Trump’s economic agenda at the Milken Institute Global Conference (May 5, 2025).</li>
          <li>Policies focus on tariffs, tax cuts, and deregulation as interconnected drivers for long-term U.S. investment.</li>
          <li>Projected U.S. growth: up to 3% by next year, aiming to reduce budget deficits.</li>
          <li>U.S. financial markets described as “anti-fragile.”</li>
        </ul>
      </section>

      <section>
        <h2>Key Policy Components</h2>
        <ul>
          <li>Tariffs to encourage domestic investment and manufacturing.</li>
          <li>Tax credits and deductions for research, innovation, and new factory construction.</li>
          <li>Deregulation to create a favorable business environment.</li>
        </ul>
      </section>

      <section>
        <h2>Supporters’ View</h2>
        <ul>
          <li>More jobs, growth, factories, and innovation.</li>
          <li>Deficit reduction by $300B/year, targeting 3.5% of GDP.</li>
          <li>Financial markets expected to rebound from short-term turbulence.</li>
        </ul>
      </section>

      <section>
        <h2>Critics’ Concerns</h2>
        <ul>
          <li>Tariffs increase costs for businesses and consumers.</li>
          <li>U.S. economy contracted by 0.3% in Q1 2025.</li>
          <li>Tax cuts seen as favoring the wealthy and increasing national debt.</li>
          <li>Market uncertainty and volatility may deter investment.</li>
        </ul>
      </section>

      <section>
        <h2>Infographic: Tariff Burden on Households</h2>
        <div style={{ width: 320, margin: "0 auto", position: "relative" }}>
          <Doughnut data={tariffImpactData} options={{ cutout: "70%" }} />
          <div style={{
            position: "absolute",
            top: "50%",
            left: "85%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 16,
            color: "#333",
            pointerEvents: "none",
            minWidth: 120
          }}>
            ${averageHouseholdBudget.toLocaleString()}<br />
            <span style={{ fontSize: 12, fontWeight: "normal" }}>Avg. Household Budget 2025</span>
          </div>
        </div>
        <p className="text-center text-sm">Estimated average annual household burden from tariffs: <b>$4,700</b></p>
      </section>

      <section>
        <h2>Market Volatility in April 2025</h2>
        <Line data={marketLineData} options={{
          responsive: true,
          plugins: { legend: { display: true } },
          scales: { y: { beginAtZero: false } },
        }} />
        <ul>
          <li>S&P 500 dropped nearly 19% over the month</li>
          <li>Nasdaq entered bear market territory</li>
          <li>Market volatility attributed to uncertainty over Trump’s policies and global economic conditions.</li>
          <li>Acutal market data shows significant volatile markets, this is mock data please replace with actuals.</li>
        </ul>
      </section>

      <section>
        <h2>Other Risks</h2>
        <ul>
          <li>Supply chain vulnerabilities due to global trade disruptions.</li>
          <li>Rising Treasury yields and borrowing costs.</li>
          <li>Potential for recession and inflation uncertainty.</li>
        </ul>
      </section>

      <section>
        <h2>Summary</h2>
        <ul>
          <li>Trump’s economic agenda aims for growth via tariffs, tax cuts, and deregulation.</li>
          <li>Supporters expect more jobs and investment; critics warn of higher costs and volatility.</li>
          <li>April 2025 saw significant market drops and increased household costs.</li>
          <li>Risks include recession, supply chain issues, and fiscal constraints.</li>
        </ul>
      </section>

      <section>
        <h2>Possible New Articles</h2>
        <ul>
          <li><b>The Influence of Government on Economic Supply and Demand:</b> Exploring how government policies, such as tariffs and deregulation, shape market forces and impact both producers and consumers.</li>
          <li><b>Indirect Taxation Preferences Over Direct Taxation:</b> Analyzing why governments may favor indirect taxes (like tariffs and sales taxes) over direct taxes, and the effects on economic behavior and equity.</li>
          <li><b>Government Political Agenda vs. Market Oversight:</b> Examining the tension between political economic agendas and the need for independent market oversight to ensure stability, transparency, and long-term growth.</li>
        </ul>
      </section>
    </main>
  );
}
