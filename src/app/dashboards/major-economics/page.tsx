"use client";
import React, { useState } from "react";

const countries = [
  "United States",
  "European Union",
  "China",
  "India",
  "France",
  "Germany",
  "Italy",
  "Spain",
  "Japan",
  "United Kingdom",
  "Canada",
  "Australia",
  "South Korea",
  "Brazil"
];

const indicators = [
  "Unemployment",
  "Gross domestic product",
  "Consumer price Index",
  "Inflation",
  "Interest rate",
  "Trade",
  "Business confidence",
  "Consumer spending",
  "Stock market",
  "Incomes",
  "Balance of payments",
  "Currency",
  "Retail sales",
  "Housing starts",
  "Lending indicators",
  "Manufacturing",
  "Population",
  "Purchasing manager indexes",
  "Economic growth",
  "Labor market data"
];

// Mock data for each country and indicator
const mockData: Record<string, Record<string, string>> = {
  "United States": {
    "Unemployment": "3.8%",
    "Gross domestic product": "$27T",
    "Consumer price Index": "305.5",
    "Inflation": "2.8%",
    "Interest rate": "5.25%",
    "Trade": "$-900B",
    "Business confidence": "102.1",
    "Consumer spending": "$14T",
    "Stock market": "S&P 500: 5,200",
    "Incomes": "$70,000",
    "Balance of payments": "$-900B",
    "Currency": "USD",
    "Retail sales": "$7T",
    "Housing starts": "1.4M",
    "Lending indicators": "Credit growth: 4.2%",
    "Manufacturing": "110.5 (2015=100)",
    "Population": "334M",
    "Purchasing manager indexes": "PMI: 52.3",
    "Economic growth": "2.1%",
    "Labor market data": "Participation: 62.5%"
  },
  "European Union": {
    "Unemployment": "6.5%",
    "Gross domestic product": "$18.5T",
    "Consumer price Index": "120.2",
    "Inflation": "2.1%",
    "Interest rate": "4.00%",
    "Trade": "$+120B",
    "Business confidence": "99.8",
    "Consumer spending": "$9T",
    "Stock market": "Euro Stoxx 50: 4,400",
    "Incomes": "$45,000",
    "Balance of payments": "$+120B",
    "Currency": "EUR",
    "Retail sales": "$4T",
    "Housing starts": "1.2M",
    "Lending indicators": "Credit growth: 2.8%",
    "Manufacturing": "115.0 (2015=100)",
    "Population": "448M",
    "Purchasing manager indexes": "PMI: 50.1",
    "Economic growth": "1.2%",
    "Labor market data": "Participation: 57.5%"
  },
  "China": {
    "Unemployment": "5.2%",
    "Gross domestic product": "$19T",
    "Consumer price Index": "102.3",
    "Inflation": "1.5%",
    "Interest rate": "3.45%",
    "Trade": "$+500B",
    "Business confidence": "105.0",
    "Consumer spending": "$7T",
    "Stock market": "SSE: 3,200",
    "Incomes": "$13,000",
    "Balance of payments": "$+500B",
    "Currency": "CNY",
    "Retail sales": "$6T",
    "Housing starts": "1.8M",
    "Lending indicators": "Credit growth: 10.2%",
    "Manufacturing": "130.0 (2015=100)",
    "Population": "1.41B",
    "Purchasing manager indexes": "PMI: 51.2",
    "Economic growth": "4.8%",
    "Labor market data": "Participation: 68.0%"
  },
  "India": {
    "Unemployment": "7.1%",
    "Gross domestic product": "$4.2T",
    "Consumer price Index": "180.5",
    "Inflation": "4.8%",
    "Interest rate": "6.50%",
    "Trade": "$-250B",
    "Business confidence": "98.2",
    "Consumer spending": "$2.5T",
    "Stock market": "BSE: 75,000",
    "Incomes": "$2,600",
    "Balance of payments": "$-250B",
    "Currency": "INR",
    "Retail sales": "$1.2T",
    "Housing starts": "2.0M",
    "Lending indicators": "Credit growth: 12.5%",
    "Manufacturing": "105.0 (2015=100)",
    "Population": "1.44B",
    "Purchasing manager indexes": "PMI: 54.5",
    "Economic growth": "6.2%",
    "Labor market data": "Participation: 49.8%"
  },
  "France": {
    "Unemployment": "7.5%",
    "Gross domestic product": "$3.2T",
    "Consumer price Index": "110.1",
    "Inflation": "2.0%",
    "Interest rate": "3.25%",
    "Trade": "$-100B",
    "Business confidence": "97.5",
    "Consumer spending": "$1.8T",
    "Stock market": "CAC 40: 7,200",
    "Incomes": "$42,000",
    "Balance of payments": "$-100B",
    "Currency": "EUR",
    "Retail sales": "$900B",
    "Housing starts": "350K",
    "Lending indicators": "Credit growth: 2.1%",
    "Manufacturing": "108.0 (2015=100)",
    "Population": "65M",
    "Purchasing manager indexes": "PMI: 49.8",
    "Economic growth": "1.1%",
    "Labor market data": "Participation: 56.0%"
  },
  "Germany": {
    "Unemployment": "5.0%",
    "Gross domestic product": "$4.5T",
    "Consumer price Index": "115.2",
    "Inflation": "2.2%",
    "Interest rate": "3.25%",
    "Trade": "$+200B",
    "Business confidence": "100.2",
    "Consumer spending": "$2.2T",
    "Stock market": "DAX: 18,000",
    "Incomes": "$50,000",
    "Balance of payments": "$+200B",
    "Currency": "EUR",
    "Retail sales": "$1.1T",
    "Housing starts": "300K",
    "Lending indicators": "Credit growth: 1.8%",
    "Manufacturing": "120.0 (2015=100)",
    "Population": "84M",
    "Purchasing manager indexes": "PMI: 50.5",
    "Economic growth": "0.8%",
    "Labor market data": "Participation: 60.2%"
  },
  "Italy": {
    "Unemployment": "8.0%",
    "Gross domestic product": "$2.2T",
    "Consumer price Index": "108.7",
    "Inflation": "1.8%",
    "Interest rate": "3.00%",
    "Trade": "$+60B",
    "Business confidence": "95.0",
    "Consumer spending": "$1.1T",
    "Stock market": "FTSE MIB: 32,000",
    "Incomes": "$35,000",
    "Balance of payments": "$+60B",
    "Currency": "EUR",
    "Retail sales": "$700B",
    "Housing starts": "200K",
    "Lending indicators": "Credit growth: 1.2%",
    "Manufacturing": "109.0 (2015=100)",
    "Population": "59M",
    "Purchasing manager indexes": "PMI: 48.9",
    "Economic growth": "0.7%",
    "Labor market data": "Participation: 58.0%"
  },
  "Spain": {
    "Unemployment": "12.0%",
    "Gross domestic product": "$1.6T",
    "Consumer price Index": "106.3",
    "Inflation": "2.3%",
    "Interest rate": "3.00%",
    "Trade": "$-40B",
    "Business confidence": "93.2",
    "Consumer spending": "$900B",
    "Stock market": "IBEX 35: 10,200",
    "Incomes": "$32,000",
    "Balance of payments": "$-40B",
    "Currency": "EUR",
    "Retail sales": "$600B",
    "Housing starts": "150K",
    "Lending indicators": "Credit growth: 0.9%",
    "Manufacturing": "107.0 (2015=100)",
    "Population": "48M",
    "Purchasing manager indexes": "PMI: 47.5",
    "Economic growth": "1.5%",
    "Labor market data": "Participation: 58.5%"
  },
  "Japan": {
    "Unemployment": "2.6%",
    "Gross domestic product": "$5.1T",
    "Consumer price Index": "102.8",
    "Inflation": "1.1%",
    "Interest rate": "0.10%",
    "Trade": "$-50B",
    "Business confidence": "101.0",
    "Consumer spending": "$3.0T",
    "Stock market": "Nikkei 225: 40,000",
    "Incomes": "$42,000",
    "Balance of payments": "$-50B",
    "Currency": "JPY",
    "Retail sales": "$1.5T",
    "Housing starts": "900K",
    "Lending indicators": "Credit growth: 0.5%",
    "Manufacturing": "112.0 (2015=100)",
    "Population": "124M",
    "Purchasing manager indexes": "PMI: 50.8",
    "Economic growth": "1.0%",
    "Labor market data": "Participation: 61.0%"
  },
  "United Kingdom": {
    "Unemployment": "4.2%",
    "Gross domestic product": "$3.4T",
    "Consumer price Index": "110.5",
    "Inflation": "2.6%",
    "Interest rate": "4.25%",
    "Trade": "$-200B",
    "Business confidence": "98.0",
    "Consumer spending": "$2.0T",
    "Stock market": "FTSE 100: 8,000",
    "Incomes": "$46,000",
    "Balance of payments": "$-200B",
    "Currency": "GBP",
    "Retail sales": "$900B",
    "Housing starts": "250K",
    "Lending indicators": "Credit growth: 2.0%",
    "Manufacturing": "108.0 (2015=100)",
    "Population": "68M",
    "Purchasing manager indexes": "PMI: 51.0",
    "Economic growth": "0.9%",
    "Labor market data": "Participation: 63.0%"
  },
  "Canada": {
    "Unemployment": "5.7%",
    "Gross domestic product": "$2.1T",
    "Consumer price Index": "112.0",
    "Inflation": "2.4%",
    "Interest rate": "4.50%",
    "Trade": "$+40B",
    "Business confidence": "100.5",
    "Consumer spending": "$1.3T",
    "Stock market": "TSX: 22,000",
    "Incomes": "$48,000",
    "Balance of payments": "$+40B",
    "Currency": "CAD",
    "Retail sales": "$700B",
    "Housing starts": "220K",
    "Lending indicators": "Credit growth: 3.0%",
    "Manufacturing": "110.0 (2015=100)",
    "Population": "40M",
    "Purchasing manager indexes": "PMI: 52.0",
    "Economic growth": "1.7%",
    "Labor market data": "Participation: 65.0%"
  },
  "Australia": {
    "Unemployment": "4.0%",
    "Gross domestic product": "$1.7T",
    "Consumer price Index": "108.0",
    "Inflation": "3.1%",
    "Interest rate": "4.35%",
    "Trade": "$+60B",
    "Business confidence": "99.0",
    "Consumer spending": "$1.1T",
    "Stock market": "ASX 200: 7,800",
    "Incomes": "$55,000",
    "Balance of payments": "$+60B",
    "Currency": "AUD",
    "Retail sales": "$500B",
    "Housing starts": "180K",
    "Lending indicators": "Credit growth: 2.5%",
    "Manufacturing": "107.0 (2015=100)",
    "Population": "27M",
    "Purchasing manager indexes": "PMI: 50.2",
    "Economic growth": "2.3%",
    "Labor market data": "Participation: 66.0%"
  },
  "South Korea": {
    "Unemployment": "3.0%",
    "Gross domestic product": "$1.8T",
    "Consumer price Index": "105.0",
    "Inflation": "2.2%",
    "Interest rate": "3.50%",
    "Trade": "$+30B",
    "Business confidence": "101.5",
    "Consumer spending": "$900B",
    "Stock market": "KOSPI: 2,700",
    "Incomes": "$35,000",
    "Balance of payments": "$+30B",
    "Currency": "KRW",
    "Retail sales": "$400B",
    "Housing starts": "120K",
    "Lending indicators": "Credit growth: 2.2%",
    "Manufacturing": "115.0 (2015=100)",
    "Population": "52M",
    "Purchasing manager indexes": "PMI: 51.5",
    "Economic growth": "2.0%",
    "Labor market data": "Participation: 64.0%"
  },
  "Brazil": {
    "Unemployment": "7.8%",
    "Gross domestic product": "$2.1T",
    "Consumer price Index": "120.0",
    "Inflation": "3.7%",
    "Interest rate": "10.75%",
    "Trade": "$+50B",
    "Business confidence": "97.0",
    "Consumer spending": "$1.2T",
    "Stock market": "Bovespa: 130,000",
    "Incomes": "$10,000",
    "Balance of payments": "$+50B",
    "Currency": "BRL",
    "Retail sales": "$600B",
    "Housing starts": "300K",
    "Lending indicators": "Credit growth: 8.0%",
    "Manufacturing": "105.0 (2015=100)",
    "Population": "216M",
    "Purchasing manager indexes": "PMI: 53.0",
    "Economic growth": "2.5%",
    "Labor market data": "Participation: 62.0%"
  }
};

export default function MajorEconomicsDashboard() {
  const [selectedCountry, setSelectedCountry] = useState<string>(countries[0]);
  const countryData = mockData[selectedCountry];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Major Economics Dashboard</h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300 max-w-2xl">
        Key economic indicators for major global economies (OECD & large economic powers). Select a country to view its latest data.
      </p>
      <div className="mb-6">
        <label htmlFor="country-select" className="mr-2 font-semibold text-gray-800 dark:text-gray-200">Country:</label>
        <select
          id="country-select"
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded px-3 py-2"
          value={selectedCountry}
          onChange={e => setSelectedCountry(e.target.value)}
        >
          {countries.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900">
          <thead>
            <tr className="bg-gray-100 dark:bg-neutral-800">
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">Indicator</th>
              <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">Value</th>
            </tr>
          </thead>
          <tbody>
            {indicators.map(indicator => (
              <tr key={indicator} className="hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors">
                <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 font-semibold text-gray-900 dark:text-gray-100">{indicator}</td>
                <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">{countryData[indicator]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-10 p-6 bg-blue-50 dark:bg-blue-950 rounded">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">About the Economic Indicators</h2>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li><strong>Unemployment:</strong> Percentage of the labor force that is jobless and seeking work. Lower values indicate a stronger labor market.</li>
          <li><strong>Gross domestic product (GDP):</strong> Total value of goods and services produced. Higher GDP reflects a larger, more productive economy.</li>
          <li><strong>Consumer price Index (CPI):</strong> Measures average change in prices paid by consumers. Used to track inflation.</li>
          <li><strong>Inflation:</strong> Rate at which prices for goods and services rise. Moderate inflation is normal; high inflation erodes purchasing power.</li>
          <li><strong>Interest rate:</strong> Central bank rate influencing borrowing costs. Higher rates can slow growth but control inflation.</li>
          <li><strong>Trade:</strong> Net exports (exports minus imports). Surpluses are positive; deficits may signal more imports than exports.</li>
          <li><strong>Business confidence:</strong> Survey-based measure of business outlook. Higher values suggest optimism and likely investment.</li>
          <li><strong>Consumer spending:</strong> Total household expenditure. Drives economic growth; higher values are positive.</li>
          <li><strong>Stock market:</strong> Index value representing equity market performance. Rising markets often reflect economic optimism.</li>
          <li><strong>Incomes:</strong> Average or median earnings. Higher incomes support spending and living standards.</li>
          <li><strong>Balance of payments:</strong> Summary of a country’s transactions with the world. Surpluses are positive; deficits may require financing.</li>
          <li><strong>Currency:</strong> The country’s official currency. Exchange rates affect trade and investment.</li>
          <li><strong>Retail sales:</strong> Total sales in the retail sector. Indicates consumer demand and economic momentum.</li>
          <li><strong>Housing starts:</strong> Number of new residential construction projects. Higher values signal confidence and growth.</li>
          <li><strong>Lending indicators:</strong> Measures of credit growth and lending activity. Strong lending can boost investment and consumption.</li>
          <li><strong>Manufacturing:</strong> Output index for the manufacturing sector. Growth signals industrial strength.</li>
          <li><strong>Population:</strong> Total number of residents. Larger populations can support bigger economies but may also require more jobs.</li>
          <li><strong>Purchasing manager indexes (PMI):</strong> Survey of business conditions in manufacturing/services. Above 50 signals expansion; below 50 contraction.</li>
          <li><strong>Economic growth:</strong> Annual percentage increase in GDP. Higher growth rates are generally positive.</li>
          <li><strong>Labor market data:</strong> Includes participation rate and other employment metrics. Higher participation means more people are working or seeking work.</li>
        </ul>
        <div className="mt-6 text-gray-700 dark:text-gray-300">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">How to Read These Indicators</h3>
          <ul className="list-disc ml-6">
            <li>Compare indicator values across countries to spot strengths and weaknesses.</li>
            <li>Look for trends over time (rising, falling, stable) for context beyond a single value.</li>
            <li>Consider the economic environment: high inflation with low growth may signal stagflation, while low unemployment and rising GDP are positive.</li>
            <li>Use multiple indicators together for a fuller picture—no single metric tells the whole story.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
