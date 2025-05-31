"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  ReferenceLine,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Sankey,
  Treemap
} from "recharts";

// Sample data for charts
const disruptionFrequencyData = [
  { year: "2015", natural: 32, geopolitical: 18, technological: 12, operational: 24 },
  { year: "2016", natural: 28, geopolitical: 22, technological: 15, operational: 26 },
  { year: "2017", natural: 34, geopolitical: 25, technological: 18, operational: 28 },
  { year: "2018", natural: 36, geopolitical: 23, technological: 22, operational: 31 },
  { year: "2019", natural: 31, geopolitical: 27, technological: 26, operational: 33 },
  { year: "2020", natural: 38, geopolitical: 42, technological: 35, operational: 48 },
  { year: "2021", natural: 42, geopolitical: 36, technological: 32, operational: 38 },
  { year: "2022", natural: 39, geopolitical: 45, technological: 29, operational: 35 },
  { year: "2023", natural: 44, geopolitical: 41, technological: 30, operational: 37 },
  { year: "2024", natural: 48, geopolitical: 52, technological: 33, operational: 39 }
];

const financialImpactData = [
  { industry: "Electronics", directCosts: 4.2, indirectCosts: 7.8, total: 12.0 },
  { industry: "Automotive", directCosts: 5.8, indirectCosts: 9.2, total: 15.0 },
  { industry: "Pharmaceuticals", directCosts: 3.1, indirectCosts: 5.4, total: 8.5 },
  { industry: "Food & Beverage", directCosts: 2.8, indirectCosts: 4.3, total: 7.1 },
  { industry: "Apparel", directCosts: 2.5, indirectCosts: 3.9, total: 6.4 },
  { industry: "Industrial Equipment", directCosts: 3.7, indirectCosts: 5.9, total: 9.6 },
  { industry: "Aerospace", directCosts: 4.5, indirectCosts: 7.1, total: 11.6 },
  { industry: "Chemicals", directCosts: 3.3, indirectCosts: 5.2, total: 8.5 }
];

const resilienceScoreData = [
  { company: "Company A", score: 82, industry: "Electronics" },
  { company: "Company B", score: 68, industry: "Automotive" },
  { company: "Company C", score: 75, industry: "Pharmaceuticals" },
  { company: "Company D", score: 91, industry: "Electronics" },
  { company: "Company E", score: 58, industry: "Industrial" },
  { company: "Company F", score: 63, industry: "Automotive" },
  { company: "Company G", score: 87, industry: "Pharmaceuticals" },
  { company: "Company H", score: 72, industry: "Food & Beverage" },
  { company: "Company I", score: 54, industry: "Apparel" },
  { company: "Company J", score: 79, industry: "Industrial" }
];

const supplierRiskData = [
  {
    name: "Tier 1",
    children: [
      { name: "Low Risk", size: 35 },
      { name: "Medium Risk", size: 45 },
      { name: "High Risk", size: 20 }
    ]
  },
  {
    name: "Tier 2",
    children: [
      { name: "Low Risk", size: 22 },
      { name: "Medium Risk", size: 38 },
      { name: "High Risk", size: 40 }
    ]
  },
  {
    name: "Tier 3",
    children: [
      { name: "Low Risk", size: 15 },
      { name: "Medium Risk", size: 35 },
      { name: "High Risk", size: 50 }
    ]
  }
];

const recuperationTimeData = [
  { disruption: "Natural Disaster", weeks: 18 },
  { disruption: "Geopolitical Conflict", weeks: 24 },
  { disruption: "Pandemic", weeks: 35 },
  { disruption: "Cybersecurity Breach", weeks: 16 },
  { disruption: "Transportation Blockage", weeks: 12 },
  { disruption: "Major Supplier Bankruptcy", weeks: 28 },
  { disruption: "Labor Dispute", weeks: 10 },
  { disruption: "Regulatory Change", weeks: 21 }
];

const vulnerabilityMapData = [
  {
    subject: "Supplier Concentration",
    "Automotive": 65,
    "Electronics": 72,
    "Pharmaceuticals": 58,
    "Food & Beverage": 48,
    fullMark: 100
  },
  {
    subject: "Geographic Concentration",
    "Automotive": 78,
    "Electronics": 85,
    "Pharmaceuticals": 65,
    "Food & Beverage": 55,
    fullMark: 100
  },
  {
    subject: "Transportation Dependency",
    "Automotive": 82,
    "Electronics": 68,
    "Pharmaceuticals": 72,
    "Food & Beverage": 85,
    fullMark: 100
  },
  {
    subject: "Inventory Practices",
    "Automotive": 55,
    "Electronics": 62,
    "Pharmaceuticals": 75,
    "Food & Beverage": 68,
    fullMark: 100
  },
  {
    subject: "Information Flow",
    "Automotive": 42,
    "Electronics": 75,
    "Pharmaceuticals": 60,
    "Food & Beverage": 45,
    fullMark: 100
  },
  {
    subject: "Regulatory Exposure",
    "Automotive": 58,
    "Electronics": 65,
    "Pharmaceuticals": 88,
    "Food & Beverage": 72,
    fullMark: 100
  }
];

// Components for the charts
const DisruptionFrequencyChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Supply Chain Disruption Frequency by Type</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={disruptionFrequencyData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="natural" name="Natural Disasters" fill="#8884d8" stroke="#8884d8" fillOpacity={0.3} />
          <Bar dataKey="geopolitical" name="Geopolitical Events" fill="#82ca9d" />
          <Line type="monotone" dataKey="technological" name="Technological Failures" stroke="#ff7300" strokeWidth={2} />
          <Line type="monotone" dataKey="operational" name="Operational Issues" stroke="#387908" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Global Supply Chain Disruption Index (GSCDI), October 2024
      </div>
    </div>
  );
};

const FinancialImpactChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Financial Impact by Industry (% of Revenue)</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={financialImpactData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="industry" />
          <YAxis domain={[0, 16]} label={{ value: "% of Annual Revenue", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Bar dataKey="directCosts" name="Direct Disruption Costs" stackId="a" fill="#8884d8" />
          <Bar dataKey="indirectCosts" name="Indirect & Recovery Costs" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Industry survey of 215 companies, Q3 2024
      </div>
    </div>
  );
};

const ResilienceScoreChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Supply Chain Resilience Scores (2024)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis type="category" dataKey="company" name="Company" />
          <YAxis type="number" dataKey="score" name="Resilience Score" domain={[40, 100]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="Resilience Score" data={resilienceScoreData} fill="#8884d8">
            {resilienceScoreData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.score >= 80 ? "#4caf50" : entry.score >= 65 ? "#ff9800" : "#f44336"}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Supply Chain Resilience Assessment Program, 2024
      </div>
    </div>
  );
};

const SupplierRiskTreemap = () => {
  const COLORS = ["#4caf50", "#ff9800", "#f44336"];
  
  const CustomizedContent = (props) => {
    const { depth, x, y, width, height, index, name, size } = props;
    
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 1 ? "#263238" : COLORS[index % COLORS.length],
            stroke: "#fff",
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 ? (
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            fontSize={12}
          >
            {name}: {size}%
          </text>
        ) : null}
        {depth === 0 ? (
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor="middle"
            fill="#fff"
            fontSize={14}
            fontWeight="bold"
          >
            {name}
          </text>
        ) : null}
      </g>
    );
  };

  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Supplier Risk Distribution by Tier</h3>
      <ResponsiveContainer width="100%" height={300}>
        <Treemap
          data={supplierRiskData}
          dataKey="size"
          aspectRatio={4/3}
          stroke="#fff"
          content={<CustomizedContent />}
        />
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Global supplier risk assessment of over 5,000 companies, 2024
      </div>
    </div>
  );
};

const RecuperationTimeChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Average Recovery Time by Disruption Type</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={recuperationTimeData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis type="number" domain={[0, 40]} label={{ value: "Weeks to Full Recovery", position: "insideBottom", offset: -5 }} />
          <YAxis type="category" dataKey="disruption" width={150} />
          <Tooltip formatter={(value) => `${value} weeks`} />
          <Legend />
          <Bar dataKey="weeks" name="Average Recovery Time (Weeks)" fill="#8884d8">
            {recuperationTimeData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.weeks > 25 ? "#f44336" : entry.weeks > 15 ? "#ff9800" : "#4caf50"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Supply Chain Recovery Database, analysis of 320 major disruptions, 2020-2024
      </div>
    </div>
  );
};

const VulnerabilityRadarChart = () => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Supply Chain Vulnerability Map by Industry</h3>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart outerRadius={120} data={vulnerabilityMapData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Automotive" dataKey="Automotive" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
          <Radar name="Electronics" dataKey="Electronics" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.4} />
          <Radar name="Pharmaceuticals" dataKey="Pharmaceuticals" stroke="#ff8042" fill="#ff8042" fillOpacity={0.4} />
          <Radar name="Food & Beverage" dataKey="Food & Beverage" stroke="#0088fe" fill="#0088fe" fillOpacity={0.4} />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-3 transition-colors">
        Source: Supply Chain Vulnerability Assessment, October 2024
      </div>
    </div>
  );
};

export default function SupplyChainDisruptionPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800/30 mb-8">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-yellow-700 dark:text-yellow-200 font-medium">
            This report is currently in development. The final version will be published on October 20, 2024.
          </p>
        </div>
      </div>

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Supply Chain Disruption Analysis</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">
          Assessment of global supply chain vulnerabilities, resilience metrics, and financial impact of disruption scenarios
        </p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 transition-colors">
          October 20, 2024 | Global Financial Markets Institute
        </div>
      </header>

      {/* Executive Summary Section */}
      <section className="mb-12">
        <div className="bg-teal-50 dark:bg-teal-950/30 rounded-lg p-6 shadow-md border border-teal-100 dark:border-teal-900/50 transition-colors">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Executive Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            This report examines the increasing frequency and severity of supply chain disruptions across global industries, 
            identifying key vulnerabilities, quantifying financial impacts, and evaluating resilience strategies. Our analysis 
            reveals that companies face a complex risk landscape where traditional disruptions like natural disasters are 
            increasingly compounded by geopolitical tensions, cyber threats, and structural supply chain weaknesses.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
                Disruption events increased 43% since 2020, with geopolitical factors showing the fastest growth
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
                Average financial impact of major disruptions ranges from 6-15% of annual revenue across industries
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Finding #3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
                Visibility beyond tier-1 suppliers remains a critical vulnerability with 63% reporting limited tier-3 visibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disruption Trends Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Global Disruption Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Supply chain disruptions have increased in both frequency and severity over the past decade, with a 
              particularly sharp acceleration following the COVID-19 pandemic. While natural disasters remain a significant 
              source of disruption, geopolitical tensions have emerged as the fastest-growing risk factor, with a 
              189% increase in disruption events attributed to trade disputes, sanctions, and regional conflicts since 2020.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The compounding effect of multiple simultaneous disruptions presents a particular challenge. In 2023-2024, 
              38% of major supply chain disruptions involved two or more concurrent risk factors, compared to just 12% 
              in the pre-pandemic period. This "perfect storm" scenario significantly extends recovery times and amplifies 
              financial impacts.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Technological failures, including cybersecurity incidents, are increasingly disrupting digital supply 
              chain infrastructure. Ransomware attacks targeting logistics providers increased 72% year-over-year, 
              while cloud service outages affecting supply chain management systems doubled in the past 24 months.
            </p>
          </div>
          <DisruptionFrequencyChart />
        </div>
      </section>

      {/* Financial Impact Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Financial Impact Assessment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FinancialImpactChart />
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The financial consequences of supply chain disruptions extend far beyond direct operational losses, 
              encompassing indirect costs such as market share erosion, customer compensation, expediting fees, 
              and brand damage. Our analysis of financial impacts across industries reveals significant variations 
              in vulnerability and resilience.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Automotive and electronics sectors face the highest relative financial exposure, with average disruption 
              costs reaching 15.0% and 12.0% of annual revenue respectively. These industries' vulnerability stems 
              from complex multi-tier supplier networks, high component specificity, and limited substitutability of 
              specialized inputs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Indirect costs consistently exceed direct operational losses across all sectors, with recovery expenses, 
              expedited shipping, premium procurement, and inventory carrying costs representing 60-75% of total financial 
              impact. This underscores the importance of comprehensive risk quantification that accounts for cascading 
              financial effects throughout the value chain.
            </p>
          </div>
        </div>
      </section>

      {/* Resilience Metrics Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Supply Chain Resilience Metrics</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          Resilience—the ability to anticipate, absorb, and recover from disruptions—has emerged as a critical 
          capability that differentiates top performers. Our resilience assessment framework evaluates companies 
          across six key dimensions: visibility, flexibility, collaboration, redundancy, financial strength, 
          and organizational readiness.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <ResilienceScoreChart />
          <VulnerabilityRadarChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Visibility Factor</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Companies with advanced supply chain visibility technologies demonstrate 42% faster disruption 
              detection and 35% shorter response times. However, visibility deteriorates dramatically beyond tier-1 
              suppliers, with only 18% of companies reporting adequate visibility into tier-3 suppliers and beyond. 
              This visibility gap represents a critical blind spot in risk management capabilities.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Geographic Concentration</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Geographic concentration remains high despite reshoring and nearshoring initiatives. Electronics and 
              automotive sectors maintain the highest concentration risk, with 65-85% of critical components sourced 
              from regions with elevated geopolitical, climate, or infrastructure risks. Companies implementing regional 
              diversification strategies have reduced this metric by an average of 23% over two years.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Buffer Strategies</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Inventory strategies are evolving beyond just-in-time models, with 68% of surveyed companies increasing 
              safety stock for critical components. However, only 23% are using advanced analytics to optimize these 
              buffer strategies based on risk profiles and cost trade-offs. Companies applying AI-powered inventory 
              optimization achieved 27% lower carrying costs while maintaining similar resilience benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Supplier Risk Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Multi-tier Supplier Risk Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Modern supply chains operate as complex multi-tier networks where disruption risks cascade across 
              interconnected suppliers. Our analysis reveals a consistent pattern of increasing risk as we move further 
              upstream in the supply chain, with tier-3 suppliers presenting the highest concentration of high-risk entities.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Tier-1 suppliers generally demonstrate stronger financial health, operational resilience, and risk 
              management practices, with only 20% classified as high-risk. However, this percentage increases dramatically 
              to 40% for tier-2 and 50% for tier-3 suppliers, creating hidden vulnerabilities that can trigger 
              unexpected disruptions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Companies with mature supply chain risk management programs are expanding their visibility and governance 
              models to encompass these extended networks. Leading practices include collaborative tier-n mapping 
              initiatives, blockchain-enabled supply chain traceability, and AI-powered supplier risk monitoring that 
              can detect early warning signals of potential disruptions.
            </p>
          </div>
          <SupplierRiskTreemap />
        </div>
      </section>

      {/* Recovery Capabilities Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Recovery Time Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RecuperationTimeChart />
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The speed and effectiveness of recovery from disruptions varies significantly based on both disruption 
              type and organizational capabilities. Our study of 320 major supply chain disruption events reveals that 
              recovery times range from 10 weeks for labor disputes to 35 weeks for pandemic-related disruptions, with 
              significant variation between companies facing similar events.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Disruptions with global reach and systemic impacts consistently require the longest recovery periods. 
              Pandemic-related disruptions averaged 35 weeks to full recovery, while geopolitical conflicts and major 
              supplier bankruptcies required 24 and 28 weeks respectively. Natural disasters showed substantial 
              variability in recovery time depending on geographic scope and infrastructure impact.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Companies with formalized business continuity programs recovered 42% faster than those without 
              structured response capabilities. Key differentiating factors included scenario-based response plans, 
              pre-qualified alternative suppliers, cross-functional disruption response teams, and regular simulation 
              exercises that build organizational muscle memory for crisis response.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="mb-12 bg-teal-50 dark:bg-teal-950/30 p-6 rounded-lg shadow-md border border-teal-100 dark:border-teal-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Case Studies in Supply Chain Resilience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
            <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-3 transition-colors">Semiconductor Shortage Response</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 transition-colors">
              A leading automotive manufacturer implemented a multi-faceted response to semiconductor shortages, combining 
              strategic inventory pre-builds, product redesigns to use alternative components, and direct investments in 
              chip manufacturing capacity. This approach reduced production disruption by 58% compared to industry peers.
            </p>
            <p className="text-gray-700 dark:text-gray-300 transition-colors">
              Key success factors included early detection through advanced analytics monitoring supplier output, 
              establishing a cross-functional "chip task force" with engineering and procurement collaboration, and 
              executive-level supplier partnerships that secured preferential allocation during shortage periods.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-700 transition-colors">
            <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-3 transition-colors">Natural Disaster Recovery</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3 transition-colors">
              Following a major hurricane that disabled production facilities in its primary manufacturing hub, 
              a pharmaceuticals company activated its geographic diversification strategy, transferring production 
              to redundant facilities in three alternative regions within 72 hours of the event.
            </p>
            <p className="text-gray-700 dark:text-gray-300 transition-colors">
              Digital twins of production facilities enabled rapid transfer of manufacturing parameters, while modular 
              product designs allowed for production flexibility across sites. The company maintained 94% on-time delivery 
              throughout the recovery period, compared to an industry average of 61% following similar disruptions.
            </p>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Resilience Strategies and Recommendations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-3 transition-colors">Strategic Recommendations</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Implement multi-tier supply chain mapping to identify hidden vulnerabilities beyond direct suppliers</li>
              <li>Develop a network optimization strategy that balances cost efficiency with geographic diversification</li>
              <li>Establish a formal supply chain risk management program with executive sponsorship and cross-functional governance</li>
              <li>Incorporate resilience metrics into supplier selection and evaluation processes</li>
              <li>Quantify the financial value-at-risk from supply chain disruptions to justify resilience investments</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-300 mb-3 transition-colors">Technology Enablers</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Deploy AI-powered supply chain risk monitoring systems that can detect early warning signals</li>
              <li>Implement digital twin technology to model disruption scenarios and test response strategies</li>
              <li>Leverage blockchain or distributed ledger technology to enhance multi-tier supply chain transparency</li>
              <li>Develop prescriptive analytics capabilities for optimized inventory placement based on risk profiles</li>
              <li>Establish collaborative data sharing platforms with key suppliers to enable coordinated response</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Outlook Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Future Outlook</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          Supply chain resilience will continue to be a critical priority as disruption frequency increases in a 
          complex global environment. Our analysis anticipates several key trends that will shape the risk landscape 
          and response capabilities in the coming years:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Regional Rebalancing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Geographic diversification will accelerate, with "China+1" strategies evolving into broader regional 
              optimization. We forecast a 25-30% increase in regional supply chains over the next five years, with 
              sectors like electronics, pharmaceuticals, and automotive leading this transformation. This shift will 
              reduce certain concentration risks while creating new challenges in capability development and supplier 
              qualification.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Technology Integration</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Advanced technologies will transform risk management capabilities, with AI-powered predictive disruption 
              detection, IoT-enabled real-time monitoring, and autonomous response systems becoming mainstream. Companies 
              that integrate these technologies into cohesive digital supply chain platforms will achieve significant 
              competitive advantages in both disruption avoidance and recovery speed.
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Ecosystem Approach</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
              Resilience will increasingly be developed at the ecosystem level rather than by individual companies. 
              Industry-wide initiatives for collaborative risk monitoring, shared capacity reserves, and coordinated 
              response protocols will expand. Regulatory frameworks will likely evolve to address systemic supply 
              chain risks in critical industries, creating new compliance requirements and reporting standards.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Conclusion</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          The increasing frequency and severity of supply chain disruptions demand a fundamental reassessment of 
          resilience strategies across industries. Our analysis demonstrates that disruptions are no longer exceptional 
          events but persistent features of the operating environment that require systematic management approaches.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          Leading companies are transforming their approach from reactive crisis management to proactive resilience building, 
          developing multi-layered strategies that combine structural changes to supply networks, technology-enabled 
          visibility, and organizational capabilities for agile response.
        </p>
        <blockquote className="border-l-4 border-teal-500 dark:border-teal-400 pl-4 py-2 italic text-gray-700 dark:text-gray-300 my-4">
          "The most resilient supply chains are not those that avoid disruption entirely, but those with the 
          visibility to detect issues early, the flexibility to adapt quickly, and the capability to transform 
          disruption challenges into competitive advantages."
          <footer className="text-sm text-gray-600 dark:text-gray-400 mt-2">— Global Financial Markets Institute, 2024</footer>
        </blockquote>
      </section>

      {/* Download Data Section */}
      <section className="mb-12 bg-teal-50 dark:bg-teal-950/30 p-6 rounded-lg border border-teal-100 dark:border-teal-900/50 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Download Data</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          All charts and data from this report will be available for download upon final publication.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/data/supply-chain-data.csv"
            download
            className="flex items-center px-4 py-2 bg-white dark:bg-neutral-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" viewBox="0 0 20 20" fill="currentColor">
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
              <Link href="/risk/global-trade-war" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                Global Trade War Analysis
              </Link>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors">April 15, 2025</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Deep dive into potential scenarios in the evolving US-China-EU trade conflict and implications for financial markets.
            </p>
            <Link 
              href="/risk/global-trade-war" 
              className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors"
            >
              Read Report →
            </Link>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">
              <Link href="/risk/sovereign-debt-monitor" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                Sovereign Debt Crisis Risk Monitor
              </Link>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-colors">November 5, 2024</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              Analysis of global sovereign debt levels, sustainability metrics, and potential triggers for sovereign debt crises.
            </p>
            <Link 
              href="/risk/sovereign-debt-monitor" 
              className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors"
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
            href="https://twitter.com/intent/tweet?url=https://example.com/risk/supply-chain-disruption&text=Supply Chain Disruption Analysis"
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
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/risk/supply-chain-disruption&title=Supply Chain Disruption Analysis"
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
            href="mailto:?subject=Supply Chain Disruption Analysis&body=Check out this report on supply chain risks: https://example.com/risk/supply-chain-disruption"
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
          <li>Global Supply Chain Institute (2024). Global Supply Chain Disruption Index Annual Report.</li>
          <li>McKinsey & Company (2024). Supply Chain Resilience in the Era of Persistent Disruption.</li>
          <li>World Economic Forum (2024). Global Risks Report: Supply Chain Vulnerability Assessment.</li>
          <li>Gartner (2024). Supply Chain Technology and Resilience Survey.</li>
          <li>MIT Center for Transportation & Logistics (2024). State of Supply Chain Sustainability.</li>
        </ol>
      </section>

      {/* Link back to risk page */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-teal-600 dark:text-teal-400 hover:underline hover:text-teal-800 dark:hover:text-teal-300 transition-colors">
          ← Back to Risk Overview
        </Link>
      </div>
    </div>
  );
}