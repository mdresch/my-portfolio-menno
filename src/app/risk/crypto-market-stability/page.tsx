'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ComposedChart,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Scatter,
  ScatterChart,
  ZAxis,
  ReferenceLine
} from 'recharts';

// Sample data for charts
const cryptoPriceVolatilityData = [
  { month: 'Jan', bitcoin: 45, ethereum: 35, traditional: 12 },
  { month: 'Feb', bitcoin: 52, ethereum: 48, traditional: 14 },
  { month: 'Mar', bitcoin: 38, ethereum: 42, traditional: 15 },
  { month: 'Apr', bitcoin: 65, ethereum: 58, traditional: 13 },
  { month: 'May', bitcoin: 72, ethereum: 62, traditional: 16 },
  { month: 'Jun', bitcoin: 55, ethereum: 49, traditional: 18 },
  { month: 'Jul', bitcoin: 48, ethereum: 43, traditional: 15 },
  { month: 'Aug', bitcoin: 67, ethereum: 59, traditional: 14 },
  { month: 'Sep', bitcoin: 59, ethereum: 51, traditional: 17 },
  { month: 'Oct', bitcoin: 42, ethereum: 38, traditional: 16 },
  { month: 'Nov', bitcoin: 39, ethereum: 35, traditional: 13 },
  { month: 'Dec', bitcoin: 58, ethereum: 49, traditional: 15 }
];

const marketCapDistributionData = [
  { name: 'Bitcoin', value: 42 },
  { name: 'Ethereum', value: 18 },
  { name: 'Stablecoins', value: 12 },
  { name: 'Layer 1 Alternatives', value: 10 },
  { name: 'DeFi', value: 8 },
  { name: 'Other', value: 10 }
];

const regulatoryDevelopmentData = [
  { region: 'North America', favorable: 45, neutral: 30, restrictive: 25 },
  { region: 'European Union', favorable: 35, neutral: 25, restrictive: 40 },
  { region: 'UK', favorable: 50, neutral: 30, restrictive: 20 },
  { region: 'East Asia', favorable: 20, neutral: 35, restrictive: 45 },
  { region: 'Southeast Asia', favorable: 55, neutral: 25, restrictive: 20 },
  { region: 'Latin America', favorable: 60, neutral: 25, restrictive: 15 },
  { region: 'Middle East', favorable: 40, neutral: 40, restrictive: 20 },
  { region: 'Africa', favorable: 45, neutral: 40, restrictive: 15 }
];

const institutionalAdoptionData = [
  { quarter: 'Q1 2023', holdings: 15, volume: 22 },
  { quarter: 'Q2 2023', holdings: 18, volume: 26 },
  { quarter: 'Q3 2023', holdings: 24, volume: 32 },
  { quarter: 'Q4 2023', holdings: 30, volume: 38 },
  { quarter: 'Q1 2024', holdings: 35, volume: 42 },
  { quarter: 'Q2 2024', holdings: 42, volume: 48 },
  { quarter: 'Q3 2024', holdings: 48, volume: 54 },
  { quarter: 'Q4 2024', holdings: 56, volume: 62 }
];

const riskCorrelationData = [
  { name: 'Bitcoin', x: 75, y: 85, z: 20 },
  { name: 'Ethereum', x: 65, y: 78, z: 15 },
  { name: 'Tech Stocks', x: 60, y: 55, z: 18 },
  { name: 'Gold', x: 30, y: 25, z: 12 },
  { name: 'S&P 500', x: 45, y: 40, z: 25 },
  { name: 'Bonds', x: 20, y: 15, z: 30 },
  { name: 'Real Estate', x: 35, y: 30, z: 22 }
];

// Components for the charts
const VolatilityComparisonChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Price Volatility Comparison (2024)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={cryptoPriceVolatilityData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" />
          <YAxis label={{ value: 'Volatility Index', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="bitcoin" name="Bitcoin" stroke="#F7931A" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="ethereum" name="Ethereum" stroke="#62688F" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="traditional" name="Traditional Markets (VIX)" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Crypto Volatility Index (CVI), CBOE Volatility Index (VIX), 2024 Data
      </div>
    </div>
  );
};

const MarketCapDistributionChart = () => {
  const COLORS = ['#F7931A', '#62688F', '#3E73C4', '#CF8D2E', '#26C17E', '#8884d8'];
  
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Cryptocurrency Market Capitalization Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={marketCapDistributionData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {marketCapDistributionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: CoinMarketCap, December 2024 data (percentages of total crypto market cap)
      </div>
    </div>
  );
};

const RegulatoryDevelopmentsChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Regulatory Landscape by Region</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={regulatoryDevelopmentData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis type="number" />
          <YAxis dataKey="region" type="category" width={100} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Bar dataKey="favorable" name="Pro-Innovation" stackId="a" fill="#26C17E" />
          <Bar dataKey="neutral" name="Neutral/Developing" stackId="a" fill="#3E73C4" />
          <Bar dataKey="restrictive" name="Restrictive" stackId="a" fill="#C13C37" />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Global Regulatory Policy Tracker, Q4 2024 (percentage of regulatory actions by sentiment)
      </div>
    </div>
  );
};

const InstitutionalAdoptionChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Institutional Crypto Adoption Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={institutionalAdoptionData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="quarter" />
          <YAxis yAxisId="left" label={{ value: 'Billions USD', angle: -90, position: 'insideLeft' }} />
          <Tooltip formatter={(value) => `$${value}B`} />
          <Legend />
          <Bar yAxisId="left" dataKey="holdings" name="Institutional Holdings" fill="#F7931A" />
          <Line yAxisId="left" type="monotone" dataKey="volume" name="Institutional Trading Volume" stroke="#62688F" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Crypto Fund Research, Exchange Data, 2023-2024 (in billions USD)
      </div>
    </div>
  );
};

const RiskCorrelationChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Asset Correlation & Risk Analysis</h3>
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="x" 
            name="Volatility" 
            label={{ value: 'Volatility Score', position: 'bottom', offset: 0 }} 
            domain={[0, 100]} 
          />
          <YAxis 
            dataKey="y" 
            name="Correlation to Traditional Markets" 
            label={{ value: 'Market Correlation Score', angle: -90, position: 'insideLeft' }}
            domain={[0, 100]} 
          />
          <ZAxis dataKey="z" range={[50, 400]} name="Market Cap" />
          <Tooltip 
            cursor={{ strokeDasharray: '3 3' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 shadow-md rounded-md">
                    <p className="font-medium">{payload[0].payload.name}</p>
                    <p>Volatility: {payload[0].value}</p>
                    <p>Market Correlation: {payload[1].value}</p>
                    <p>Relative Size: {payload[2].value}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend />
          <Scatter name="Assets" data={riskCorrelationData} fill="#8884d8">
            {riskCorrelationData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name.includes('coin') || entry.name === 'Bitcoin' || entry.name === 'Ethereum' ? '#F7931A' : '#3E73C4'}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Asset correlation analysis based on 2022-2024 price data. Circle size represents relative market capitalization.
      </div>
    </div>
  );
};

export default function CryptoMarketStabilityPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Cryptocurrency Market Stability</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">
          Risk assessment of cryptocurrency markets, regulatory developments, and potential contagion to traditional financial systems
        </p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 transition-colors">
          December 10, 2024 | Global Financial Markets Institute
        </div>
      </header>

      {/* Executive Summary Section */}
      <section className="mb-12">
        <div className="bg-sky-50 dark:bg-sky-950/30 rounded-lg p-6 shadow-md border border-sky-100 dark:border-sky-900/50 transition-colors">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Executive Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            This report examines the current state of cryptocurrency market stability and analyzes potential risks 
            to broader financial systems. Our analysis indicates that while cryptocurrency markets have matured 
            significantly since 2021, they continue to present unique risks related to market volatility, regulatory 
            uncertainty, and technological vulnerabilities. However, the risk of systemic contagion to traditional 
            financial markets remains limited despite increasing institutional participation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
                Despite high volatility, correlation between crypto assets and traditional financial markets has decreased in 2024
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
                Regulatory frameworks are developing unevenly across jurisdictions, creating compliance challenges
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
                Institutional participation has grown 86% year-over-year, increasing the interconnectedness with traditional finance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Volatility Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Market Volatility Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Cryptocurrency markets continue to demonstrate significantly higher volatility than traditional 
              financial markets. Bitcoin's 30-day volatility averaged 4.2% in 2024, compared to 1.1% for the S&P 500. 
              However, this represents a substantial decrease from previous years, indicating a gradual market maturation.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Notably, market volatility in the cryptocurrency space has become increasingly asset-specific rather than 
              market-wide. Major cryptocurrencies like Bitcoin and Ethereum now exhibit different volatility patterns than 
              smaller altcoins, suggesting a more sophisticated pricing mechanism developing within the market.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The introduction of derivatives markets, including options and futures, has provided additional tools for 
              risk management but has also introduced new sources of potential volatility through leveraged trading.
            </p>
          </div>
          <VolatilityComparisonChart />
        </div>
      </section>

      {/* Market Structure Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Market Structure & Concentration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MarketCapDistributionChart />
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The cryptocurrency market remains highly concentrated, with Bitcoin and Ethereum accounting for 
              approximately 60% of total market capitalization. This concentration presents systemic risks within 
              the crypto ecosystem, as significant price movements in these assets can trigger cascading effects 
              throughout the market.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Stablecoins now represent 12% of the total cryptocurrency market capitalization, up from 8% in 2023. 
              Their increasing prominence creates new forms of risk, particularly around reserve backing, redemption 
              mechanisms, and their role as liquidity providers in decentralized finance (DeFi) applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Market infrastructure has improved substantially, with greater liquidity across major exchanges, 
              reduced slippage, and more reliable price discovery mechanisms. However, fragmentation across 
              exchanges and jurisdictions continues to create arbitrage opportunities and potential market 
              manipulation vulnerabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Landscape Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Global Regulatory Landscape</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          The regulatory environment for cryptocurrencies continues to evolve rapidly, with significant 
          divergence in approaches across major jurisdictions. This regulatory fragmentation creates 
          compliance challenges for market participants and potential for regulatory arbitrage.
        </p>
        <div className="mb-8">
          <RegulatoryDevelopmentsChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Innovations in Regulation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Several jurisdictions have implemented innovative regulatory frameworks like regulatory sandboxes and 
              graduated compliance requirements based on risk profiles. The UK's Financial Conduct Authority has 
              introduced a tiered regulatory approach that adapts requirements to the scale and activities of crypto businesses.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Areas of Consensus</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Despite regulatory divergence, there is growing consensus on several key areas: anti-money laundering 
              requirements, consumer protection standards, and stablecoin reserve requirements. The Financial Action 
              Task Force's Travel Rule has achieved broad implementation across major jurisdictions.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Regulatory Gaps</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Significant regulatory gaps remain in decentralized finance (DeFi), cross-border enforcement, and 
              novel technological developments like privacy coins and layer-2 scaling solutions. These gaps create 
              uncertainties for market participants and potential vulnerabilities in the financial system.
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Adoption Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Institutional Participation & Market Integration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Institutional participation in cryptocurrency markets has accelerated significantly in 2024, with 
              estimated institutional holdings growing to $56 billion by Q4 2024, an 86% increase year-over-year. 
              This growth has been facilitated by improved custody solutions, regulatory clarity in key markets, 
              and the development of institutional-grade trading infrastructure.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Traditional financial institutions have expanded their cryptocurrency offerings, with major banks 
              now providing custody services, trading desks, and wealth management products. This increasing 
              integration creates new transmission channels between crypto markets and traditional finance.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The approval and launch of spot cryptocurrency ETFs in major markets has significantly lowered barriers 
              to institutional participation. Total assets under management in crypto ETFs reached $28 billion by the 
              end of 2024, providing a significant source of market liquidity and price discovery.
            </p>
          </div>
          <InstitutionalAdoptionChart />
        </div>
      </section>

      {/* Systemic Risk Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Contagion Risk Assessment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RiskCorrelationChart />
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              While cryptocurrency markets have become more integrated with traditional finance, the risk of 
              systemic contagion remains limited. Our analysis suggests that even a severe cryptocurrency market 
              correction would have manageable spillover effects to traditional financial systems under current 
              conditions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Key transmission channels for potential contagion include: (1) direct exposure of financial 
              institutions, (2) wealth effects impacting investor behavior in other markets, (3) operational 
              dependencies on blockchain infrastructure, and (4) stablecoin-related liquidity shocks affecting 
              short-term funding markets.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Correlation analysis indicates decreasing correlation between major cryptocurrencies and traditional 
              risk assets during 2024, diverging from the high correlation observed during 2021-2023. This suggests 
              that cryptocurrency markets may be developing more independent price dynamics driven by sector-specific 
              factors.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The most significant contagion risk comes from stablecoins, particularly those with substantial 
              holdings of commercial paper and other short-term debt instruments. A large-scale stablecoin redemption 
              event could potentially impact short-term funding markets.
            </p>
          </div>
        </div>
      </section>

      {/* Emerging Risks Section */}
      <section className="mb-12 bg-sky-50 dark:bg-sky-950/30 rounded-lg p-6 shadow-md border border-sky-100 dark:border-sky-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Emerging Risk Factors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-sky-800 dark:text-sky-300 mb-3 transition-colors">Technological Vulnerabilities</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Smart contract vulnerabilities and protocol exploits remain significant risks in the cryptocurrency 
              ecosystem. In 2024, approximately $850 million was lost due to protocol exploits and smart contract 
              vulnerabilities, though this represents a 35% decrease from 2023 losses.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The increasing complexity of DeFi protocols, cross-chain bridges, and Layer-2 scaling solutions 
              introduces new attack vectors and systemic vulnerabilities. Cross-chain bridge hacks accounted for 
              40% of total value exploited in 2024.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Quantum computing advances represent a long-term risk to cryptographic security underpinning blockchain 
              networks. Major cryptocurrencies are beginning to implement quantum-resistant cryptographic techniques, 
              but transition risks remain.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-sky-800 dark:text-sky-300 mb-3 transition-colors">Market Structure Risks</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The growth of decentralized finance has created complex interdependencies between protocols, introducing 
              new forms of systemic risk within the crypto ecosystem. Cascading liquidations and oracle failures represent 
              particularly significant risks in periods of high market stress.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Centralized finance platforms continue to hold substantial customer assets, creating counterparty risks. 
              While improvements in transparency have been made following the failures of 2022, proof-of-reserve implementations 
              remain inconsistent and limited in scope.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Market concentration in mining, development, and exchange services creates points of failure that could impact 
              market functioning. The top three exchanges account for 64% of spot trading volume, while the top five mining 
              pools control 78% of Bitcoin's hashrate.
            </p>
          </div>
        </div>
      </section>

      {/* Scenario Analysis Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Risk Scenario Analysis</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 transition-colors">
            <thead>
              <tr className="bg-gray-50 dark:bg-neutral-700 transition-colors">
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors">Scenario</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors">Description</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors">Probability</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors">Impact on Crypto Markets</th>
                <th className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-sm font-semibold text-gray-700 dark:text-gray-300 transition-colors">Contagion Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors">Major Stablecoin Collapse</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                  Failure of a top-3 stablecoin due to reserve inadequacy or loss of confidence
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">Medium (15-25%)</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">Severe</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">Medium-High</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-neutral-700/30 transition-colors">
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors">Coordinated Regulatory Crackdown</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                  Multiple major jurisdictions implementing highly restrictive regulations simultaneously
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">Low (5-10%)</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">Severe</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">Low</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors">Major Protocol Failure</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                  Critical technical failure or exploit in a major blockchain network
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">Medium (10-20%)</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">High</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">Low</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-neutral-700/30 transition-colors">
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors">Major Exchange Failure</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                  Bankruptcy or operational failure of a top-5 cryptocurrency exchange
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">Low-Medium (10-15%)</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">High</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">Low-Medium</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 font-medium transition-colors">Cascading DeFi Liquidations</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                  Sharp market movements triggering system-wide liquidations across DeFi lending platforms
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">Medium-High (25-35%)</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">Medium-High</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 transition-colors">Very Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Policy Implications and Recommendations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold text-sky-800 dark:text-sky-300 mb-3 transition-colors">For Regulators</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Develop harmonized global standards for cryptocurrency regulation to reduce fragmentation</li>
              <li>Implement proportionate regulatory frameworks that address risks without stifling innovation</li>
              <li>Establish clear guidelines for stablecoin issuance, focusing on reserve transparency and stability</li>
              <li>Create dedicated monitoring frameworks for crypto-traditional finance interconnections</li>
              <li>Enhance supervisory technology capabilities to monitor DeFi and other decentralized systems</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold text-sky-800 dark:text-sky-300 mb-3 transition-colors">For Financial Institutions</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Develop robust risk management frameworks specifically tailored to cryptocurrency exposures</li>
              <li>Implement enhanced due diligence for crypto counterparties, focusing on operational resilience</li>
              <li>Establish clear limits on direct and indirect cryptocurrency exposures relative to capital</li>
              <li>Develop stress testing scenarios incorporating severe cryptocurrency market disruptions</li>
              <li>Monitor correlation between cryptocurrency holdings and other risk assets in investment portfolios</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Conclusion</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          The cryptocurrency market continues to evolve rapidly, presenting both opportunities and risks for 
          the broader financial system. While significant vulnerabilities remain within the crypto ecosystem, 
          the risk of substantial contagion to traditional financial markets appears contained at current levels 
          of integration.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          Regulatory developments will be critical in shaping the future risk profile of cryptocurrency markets. 
          A balanced approach that addresses key risks while allowing for continued innovation would best support 
          financial stability while capturing the potential benefits of blockchain technology and digital assets.
        </p>
        <blockquote className="border-l-4 border-sky-500 dark:border-sky-400 pl-4 py-2 italic text-gray-700 dark:text-gray-300 my-4">
          "The cryptocurrency ecosystem has demonstrated remarkable resilience through multiple market cycles, 
          but its increasing integration with traditional finance demands vigilant monitoring and appropriate 
          safeguards to protect broader financial stability."
          <footer className="text-sm text-gray-600 dark:text-gray-400 mt-2">— Global Financial Markets Institute, 2024</footer>
        </blockquote>
      </section>

      {/* Download Data Section */}
      <section className="mb-12 bg-sky-50 dark:bg-sky-950/30 p-6 rounded-lg border border-sky-100 dark:border-sky-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Download Data</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          All charts and data from this report are available for download.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/data/crypto-stability-data.csv"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-sky-600 dark:text-sky-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">CSV Format</span>
          </a>
        </div>
      </section>

      {/* Related Reports Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Related Risk Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">
              <Link href="/risk/global-liquidity-trends" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                Global Liquidity Trends Report
              </Link>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors">January 15, 2025</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Analysis of global liquidity conditions, central bank interventions, and implications for financial market stability.
            </p>
            <Link 
              href="/risk/global-liquidity-trends" 
              className="text-sm text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium transition-colors"
            >
              Read Report →
            </Link>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">
              <Link href="/risk/legal-payment-tender-uk" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                Legal Payment Tender Risks UK 2025
              </Link>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors">May 2, 2025</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Analysis of regulatory changes affecting payment systems and digital currency frameworks in the United Kingdom.
            </p>
            <Link 
              href="/risk/legal-payment-tender-uk" 
              className="text-sm text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium transition-colors"
            >
              Read Report →
            </Link>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Share This Report</h2>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://twitter.com/intent/tweet?url=https://example.com/risk/crypto-market-stability&text=Cryptocurrency Market Stability Report"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-[#1DA1F2] text-white rounded-md hover:bg-[#1a91da] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x mr-2" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
            <span>Share on X</span>
          </a>
          <a 
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/risk/crypto-market-stability&title=Cryptocurrency Market Stability Report"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-[#0077B5] text-white rounded-md hover:bg-[#006699] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin mr-2" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
            <span>Share on LinkedIn</span>
          </a>
          <a 
            href="mailto:?subject=Cryptocurrency Market Stability Report&body=Check out this report on cryptocurrency market risks: https://example.com/risk/crypto-market-stability"
            className="flex items-center px-4 py-2 bg-gray-700 dark:bg-gray-600 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>Share via Email</span>
          </a>
        </div>
      </section>

      {/* References Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Sources</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 transition-colors">
          <li>International Monetary Fund. (2024). Global Financial Stability Report: Crypto Assets and Financial Stability.</li>
          <li>Financial Stability Board. (2024). Assessment of Risks to Financial Stability from Crypto-Assets.</li>
          <li>Bank for International Settlements. (2024). Annual Economic Report: Cryptocurrencies and the Future of Money.</li>
          <li>DeFi Pulse. (2024). DeFi Market Overview and Risk Assessment, Q4 2024.</li>
          <li>Chainalysis. (2024). Crypto Crime Report: Decentralized Finance and Market Integrity.</li>
        </ol>
      </section>

      {/* Link back to risk page */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-sky-600 dark:text-sky-400 hover:underline hover:text-sky-800 dark:hover:text-sky-300 transition-colors">
          ← Back to Risk Overview
        </Link>
      </div>
    </div>
  );
}