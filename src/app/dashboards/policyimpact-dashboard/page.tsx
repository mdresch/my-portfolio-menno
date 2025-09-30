"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ReferenceLine, LabelList, ScatterChart, Scatter, ComposedChart } from 'recharts';
import { MockChartPlaceholder, MockTablePlaceholder } from "../../../components/dashboards/MockVisuals";

// Economic growth data for different political systems
const economicGrowthData = [
  {
    period: "Short-term (1-3 years)",
    democracy: 2.8,
    socialDemocracy: 2.4,
    dictatorship: 3.2
  },
  {
    period: "Medium-term (5-10 years)",
    democracy: 3.1,
    socialDemocracy: 2.9,
    dictatorship: 2.7
  },
  {
    period: "Long-term (15+ years)",
    democracy: 2.9,
    socialDemocracy: 2.6,
    dictatorship: 1.8
  },
  {
    period: "Crisis Recovery",
    democracy: 3.4,
    socialDemocracy: 3.0,
    dictatorship: 2.1
  },
  {
    period: "Innovation Period",
    democracy: 3.8,
    socialDemocracy: 3.2,
    dictatorship: 2.4
  }
];

// Freedom growth data for different political systems
const freedomGrowthData = [
  {
    indicator: "Political Freedom",
    democracy: 85,
    socialDemocracy: 78,
    centralizedGov: 25
  },
  {
    indicator: "Economic Freedom",
    democracy: 75,
    socialDemocracy: 68,
    centralizedGov: 35
  },
  {
    indicator: "Press Freedom",
    democracy: 82,
    socialDemocracy: 76,
    centralizedGov: 20
  },
  {
    indicator: "Individual Rights",
    democracy: 88,
    socialDemocracy: 83,
    centralizedGov: 30
  },
  {
    indicator: "Civil Liberties",
    democracy: 90,
    socialDemocracy: 85,
    centralizedGov: 22
  },
  {
    indicator: "Business Freedom",
    democracy: 80,
    socialDemocracy: 70,
    centralizedGov: 40
  },
  {
    indicator: "Judicial Independence",
    democracy: 85,
    socialDemocracy: 80,
    centralizedGov: 18
  },
  {
    indicator: "Property Rights",
    democracy: 83,
    socialDemocracy: 75,
    centralizedGov: 45
  }
];

// Innovation and development data under different regulatory environments
const innovationRegulationData = [
  {
    metric: "Tech Innovation Index",
    strictControl: 35,
    moderateRegulation: 68,
    openSystem: 85
  },
  {
    metric: "Startup Ecosystem",
    strictControl: 25,
    moderateRegulation: 72,
    openSystem: 90
  },
  {
    metric: "R&D Investment",
    strictControl: 45,
    moderateRegulation: 65,
    openSystem: 82
  },
  {
    metric: "International Collaboration",
    strictControl: 20,
    moderateRegulation: 58,
    openSystem: 88
  },
  {
    metric: "Patent Applications",
    strictControl: 40,
    moderateRegulation: 70,
    openSystem: 85
  },
  {
    metric: "Talent Attraction",
    strictControl: 15,
    moderateRegulation: 55,
    openSystem: 92
  },
  {
    metric: "Knowledge Transfer",
    strictControl: 30,
    moderateRegulation: 62,
    openSystem: 86
  },
  {
    metric: "Market Access",
    strictControl: 35,
    moderateRegulation: 68,
    openSystem: 95
  },
  {
    metric: "Digital Infrastructure",
    strictControl: 55,
    moderateRegulation: 75,
    openSystem: 88
  }
];

// GDP Growth and Import Restrictions with Tariffs data
const gdpTariffData = [
  {
    period: "Free Trade (0% tariffs)",
    gdpGrowth: 3.8,
    importVolume: 95,
    exportVolume: 92,
    tariffRate: 0
  },
  {
    period: "Low Tariffs (5-10%)",
    gdpGrowth: 3.4,
    importVolume: 88,
    exportVolume: 89,
    tariffRate: 7.5
  },
  {
    period: "Moderate Tariffs (15-25%)",
    gdpGrowth: 2.9,
    importVolume: 75,
    exportVolume: 78,
    tariffRate: 20
  },
  {
    period: "High Tariffs (30-50%)",
    gdpGrowth: 2.1,
    importVolume: 58,
    exportVolume: 65,
    tariffRate: 40
  },
  {
    period: "Very High Tariffs (60-80%)",
    gdpGrowth: 1.4,
    importVolume: 42,
    exportVolume: 48,
    tariffRate: 70
  },
  {
    period: "Trade War (100%+)",
    gdpGrowth: 0.8,
    importVolume: 28,
    exportVolume: 32,
    tariffRate: 120
  }
];

// Tax reform impact data - GDP growth before and after tax reforms
const taxReformData = [
  {
    country: "Corporate Tax Reduction",
    beforeReform: 2.1,
    afterReform: 2.8,
    change: 0.7,
    reformYear: "2017-2018"
  },
  {
    country: "Income Tax Simplification",
    beforeReform: 1.8,
    afterReform: 2.4,
    change: 0.6,
    reformYear: "2019-2020"
  },
  {
    country: "VAT Rate Adjustment",
    beforeReform: 2.3,
    afterReform: 2.9,
    change: 0.6,
    reformYear: "2021-2022"
  },
  {
    country: "Capital Gains Reform",
    beforeReform: 1.9,
    afterReform: 2.5,
    change: 0.6,
    reformYear: "2020-2021"
  },
  {
    country: "Progressive Tax System",
    beforeReform: 2.0,
    afterReform: 2.7,
    change: 0.7,
    reformYear: "2018-2019"
  },
  {
    country: "Digital Tax Implementation",
    beforeReform: 2.2,
    afterReform: 2.6,
    change: 0.4,
    reformYear: "2022-2023"
  }
];

// Inflation rate with monetary policy events data
const inflationMonetaryData = [
  { month: "Jan 2020", inflation: 2.1, interestRate: 1.75, policyEvent: "Pre-COVID" },
  { month: "Feb 2020", inflation: 2.3, interestRate: 1.75, policyEvent: "Pre-COVID" },
  { month: "Mar 2020", inflation: 1.5, interestRate: 0.25, policyEvent: "COVID Emergency Cut" },
  { month: "Apr 2020", inflation: 0.3, interestRate: 0.25, policyEvent: "Lockdown Impact" },
  { month: "May 2020", inflation: 0.1, interestRate: 0.25, policyEvent: "Economic Contraction" },
  { month: "Jun 2020", inflation: 0.6, interestRate: 0.25, policyEvent: "Stimulus Package" },
  { month: "Jul 2020", inflation: 1.0, interestRate: 0.25, policyEvent: "QE Expansion" },
  { month: "Aug 2020", inflation: 1.3, interestRate: 0.25, policyEvent: "Recovery Begins" },
  { month: "Sep 2020", inflation: 1.4, interestRate: 0.25, policyEvent: "Continued Stimulus" },
  { month: "Oct 2020", inflation: 1.2, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Nov 2020", inflation: 1.2, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Dec 2020", inflation: 1.4, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Jan 2021", inflation: 1.4, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Feb 2021", inflation: 1.7, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Mar 2021", inflation: 2.6, interestRate: 0.25, policyEvent: "Base Effect" },
  { month: "Apr 2021", inflation: 4.2, interestRate: 0.25, policyEvent: "Supply Chain Issues" },
  { month: "May 2021", inflation: 5.0, interestRate: 0.25, policyEvent: "Demand Surge" },
  { month: "Jun 2021", inflation: 5.4, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Jul 2021", inflation: 5.4, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Aug 2021", inflation: 5.3, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Sep 2021", inflation: 5.4, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Oct 2021", inflation: 6.2, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Nov 2021", inflation: 6.8, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Dec 2021", inflation: 7.0, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Jan 2022", inflation: 7.5, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Feb 2022", inflation: 7.9, interestRate: 0.25, policyEvent: "Policy Hold" },
  { month: "Mar 2022", inflation: 8.5, interestRate: 0.50, policyEvent: "First Rate Hike" },
  { month: "Apr 2022", inflation: 8.3, interestRate: 0.75, policyEvent: "Rate Increase" },
  { month: "May 2022", inflation: 8.6, interestRate: 1.00, policyEvent: "Rate Increase" },
  { month: "Jun 2022", inflation: 9.1, interestRate: 1.75, policyEvent: "Aggressive Hiking" },
  { month: "Jul 2022", inflation: 8.5, interestRate: 2.50, policyEvent: "Large Rate Hike" },
  { month: "Aug 2022", inflation: 8.3, interestRate: 3.00, policyEvent: "Continued Hiking" },
  { month: "Sep 2022", inflation: 8.2, interestRate: 3.25, policyEvent: "Rate Increase" },
  { month: "Oct 2022", inflation: 7.7, interestRate: 3.75, policyEvent: "Rate Increase" },
  { month: "Nov 2022", inflation: 7.1, interestRate: 4.00, policyEvent: "Rate Increase" },
  { month: "Dec 2022", inflation: 6.5, interestRate: 4.25, policyEvent: "Rate Increase" },
  { month: "Jan 2023", inflation: 6.4, interestRate: 4.50, policyEvent: "Rate Increase" },
  { month: "Feb 2023", inflation: 6.0, interestRate: 4.75, policyEvent: "Rate Increase" },
  { month: "Mar 2023", inflation: 5.0, interestRate: 5.00, policyEvent: "Peak Rates" },
  { month: "Apr 2023", inflation: 4.9, interestRate: 5.00, policyEvent: "Policy Hold" },
  { month: "May 2023", inflation: 4.0, interestRate: 5.00, policyEvent: "Policy Hold" },
  { month: "Jun 2023", inflation: 3.0, interestRate: 5.00, policyEvent: "Policy Hold" },
  { month: "Jul 2023", inflation: 3.2, interestRate: 5.25, policyEvent: "Final Hike" },
  { month: "Aug 2023", inflation: 3.7, interestRate: 5.25, policyEvent: "Policy Hold" },
  { month: "Sep 2023", inflation: 3.7, interestRate: 5.25, policyEvent: "Policy Hold" },
  { month: "Oct 2023", inflation: 3.2, interestRate: 5.25, policyEvent: "Policy Hold" },
  { month: "Nov 2023", inflation: 3.1, interestRate: 5.25, policyEvent: "Policy Hold" },
  { month: "Dec 2023", inflation: 3.4, interestRate: 5.25, policyEvent: "Policy Hold" },
  { month: "Jan 2024", inflation: 3.1, interestRate: 5.25, policyEvent: "Policy Hold" },
  { month: "Feb 2024", inflation: 3.2, interestRate: 5.25, policyEvent: "Policy Hold" },
  { month: "Mar 2024", inflation: 3.5, interestRate: 5.25, policyEvent: "Policy Hold" },
  { month: "Apr 2024", inflation: 3.4, interestRate: 5.25, policyEvent: "Policy Hold" },
  { month: "May 2024", inflation: 3.3, interestRate: 5.00, policyEvent: "Rate Cut" },
  { month: "Jun 2024", inflation: 3.0, interestRate: 4.75, policyEvent: "Rate Cut" },
  { month: "Jul 2024", inflation: 2.9, interestRate: 4.50, policyEvent: "Rate Cut" },
  { month: "Aug 2024", inflation: 2.6, interestRate: 4.25, policyEvent: "Rate Cut" },
  { month: "Sep 2024", inflation: 2.4, interestRate: 4.00, policyEvent: "Rate Cut" },
  { month: "Oct 2024", inflation: 2.3, interestRate: 3.75, policyEvent: "Rate Cut" },
  { month: "Nov 2024", inflation: 2.2, interestRate: 3.50, policyEvent: "Rate Cut" },
  { month: "Dec 2024", inflation: 2.1, interestRate: 3.25, policyEvent: "Rate Cut" }
];

// Government spending vs GDP growth data
const govtSpendingGDPData = [
  { spendingChange: -5.2, gdpChange: -2.1, country: "Austerity Program", year: "2020", policyType: "Fiscal Consolidation" },
  { spendingChange: 12.5, gdpChange: 2.8, country: "Stimulus Package", year: "2021", policyType: "Expansionary" },
  { spendingChange: 8.3, gdpChange: 1.9, country: "Infrastructure Investment", year: "2022", policyType: "Investment" },
  { spendingChange: -2.1, gdpChange: 0.8, country: "Budget Cuts", year: "2023", policyType: "Contractionary" },
  { spendingChange: 6.7, gdpChange: 2.3, country: "Healthcare Expansion", year: "2024", policyType: "Social Investment" },
  { spendingChange: 15.2, gdpChange: 4.1, country: "War Economy", year: "2022", policyType: "Emergency" },
  { spendingChange: -3.8, gdpChange: -1.2, country: "Debt Reduction", year: "2023", policyType: "Fiscal Consolidation" },
  { spendingChange: 9.1, gdpChange: 3.2, country: "Education Reform", year: "2024", policyType: "Human Capital" },
  { spendingChange: 4.5, gdpChange: 1.8, country: "Green Investment", year: "2023", policyType: "Sustainability" },
  { spendingChange: -1.5, gdpChange: 0.3, country: "Efficiency Measures", year: "2024", policyType: "Reform" },
  { spendingChange: 11.8, gdpChange: 3.7, country: "Digital Transformation", year: "2022", policyType: "Technology" },
  { spendingChange: 7.2, gdpChange: 2.5, country: "Defense Modernization", year: "2023", policyType: "Security" },
  { spendingChange: -4.3, gdpChange: -0.9, country: "Subsidy Reduction", year: "2024", policyType: "Market Reform" },
  { spendingChange: 13.6, gdpChange: 4.3, country: "Post-Crisis Recovery", year: "2021", policyType: "Recovery" },
  { spendingChange: 5.9, gdpChange: 2.1, country: "Research & Development", year: "2023", policyType: "Innovation" }
];

// Key indicators by policy regime data
const keyIndicatorsData = [
  {
    indicator: "GDP Growth Rate (%)",
    democracy: "3.2",
    socialDemocracy: "2.8",
    centralizedGov: "2.1",
    authoritarian: "1.8",
    category: "Economic Performance"
  },
  {
    indicator: "Inflation Rate (%)",
    democracy: "2.3",
    socialDemocracy: "2.1",
    centralizedGov: "4.2",
    authoritarian: "6.8",
    category: "Economic Performance"
  },
  {
    indicator: "Unemployment Rate (%)",
    democracy: "4.2",
    socialDemocracy: "3.8",
    centralizedGov: "5.9",
    authoritarian: "8.1",
    category: "Labor Market"
  },
  {
    indicator: "Public Debt/GDP (%)",
    democracy: "65.2",
    socialDemocracy: "72.8",
    centralizedGov: "45.1",
    authoritarian: "38.9",
    category: "Fiscal Health"
  },
  {
    indicator: "Government Spending/GDP (%)",
    democracy: "38.5",
    socialDemocracy: "52.3",
    centralizedGov: "28.7",
    authoritarian: "22.1",
    category: "Fiscal Health"
  },
  {
    indicator: "Tax Revenue/GDP (%)",
    democracy: "32.1",
    socialDemocracy: "45.8",
    centralizedGov: "18.9",
    authoritarian: "15.2",
    category: "Fiscal Health"
  },
  {
    indicator: "Foreign Direct Investment ($B)",
    democracy: "125.3",
    socialDemocracy: "98.7",
    centralizedGov: "45.2",
    authoritarian: "23.8",
    category: "Investment"
  },
  {
    indicator: "Innovation Index Score",
    democracy: "78.5",
    socialDemocracy: "72.1",
    centralizedGov: "45.3",
    authoritarian: "28.9",
    category: "Innovation"
  },
  {
    indicator: "Human Development Index",
    democracy: "0.892",
    socialDemocracy: "0.915",
    centralizedGov: "0.756",
    authoritarian: "0.623",
    category: "Social Development"
  },
  {
    indicator: "Gini Coefficient",
    democracy: "0.32",
    socialDemocracy: "0.28",
    centralizedGov: "0.45",
    authoritarian: "0.58",
    category: "Social Development"
  },
  {
    indicator: "Press Freedom Score",
    democracy: "85.2",
    socialDemocracy: "78.9",
    centralizedGov: "25.3",
    authoritarian: "12.1",
    category: "Governance"
  },
  {
    indicator: "Corruption Perception Index",
    democracy: "73.8",
    socialDemocracy: "81.2",
    centralizedGov: "34.5",
    authoritarian: "18.7",
    category: "Governance"
  }
];

// Historical government investments and tariffs as % of GDP
const historicalGovtInvestmentTariffData = [
  { year: "1990", govtInvestment: 3.2, avgTariff: 8.5, gdpGrowth: 2.8, period: "Post-Cold War" },
  { year: "1991", govtInvestment: 3.1, avgTariff: 8.2, gdpGrowth: 2.5, period: "Recession Recovery" },
  { year: "1992", govtInvestment: 3.3, avgTariff: 7.9, gdpGrowth: 3.1, period: "Economic Expansion" },
  { year: "1993", govtInvestment: 3.4, avgTariff: 7.6, gdpGrowth: 3.4, period: "Economic Expansion" },
  { year: "1994", govtInvestment: 3.5, avgTariff: 7.2, gdpGrowth: 3.8, period: "NAFTA Implementation" },
  { year: "1995", govtInvestment: 3.3, avgTariff: 6.8, gdpGrowth: 3.2, period: "WTO Establishment" },
  { year: "1996", govtInvestment: 3.4, avgTariff: 6.5, gdpGrowth: 3.6, period: "Technology Boom" },
  { year: "1997", govtInvestment: 3.6, avgTariff: 6.1, gdpGrowth: 4.1, period: "Asian Crisis" },
  { year: "1998", govtInvestment: 3.8, avgTariff: 5.8, gdpGrowth: 3.9, period: "Global Integration" },
  { year: "1999", govtInvestment: 4.0, avgTariff: 5.5, gdpGrowth: 4.3, period: "Dot-com Boom" },
  { year: "2000", govtInvestment: 4.2, avgTariff: 5.2, gdpGrowth: 4.1, period: "Y2K Technology" },
  { year: "2001", govtInvestment: 4.5, avgTariff: 5.8, gdpGrowth: 2.1, period: "9/11 & Recession" },
  { year: "2002", govtInvestment: 4.8, avgTariff: 6.2, gdpGrowth: 1.8, period: "Security Investment" },
  { year: "2003", govtInvestment: 5.1, avgTariff: 6.5, gdpGrowth: 2.9, period: "Iraq War" },
  { year: "2004", govtInvestment: 5.3, avgTariff: 6.8, gdpGrowth: 3.4, period: "Economic Recovery" },
  { year: "2005", govtInvestment: 5.2, avgTariff: 6.5, gdpGrowth: 3.7, period: "Housing Boom" },
  { year: "2006", govtInvestment: 5.0, avgTariff: 6.2, gdpGrowth: 3.9, period: "Pre-Crisis Peak" },
  { year: "2007", govtInvestment: 4.8, avgTariff: 5.9, gdpGrowth: 3.5, period: "Subprime Crisis" },
  { year: "2008", govtInvestment: 5.5, avgTariff: 6.8, gdpGrowth: 1.2, period: "Financial Crisis" },
  { year: "2009", govtInvestment: 7.2, avgTariff: 8.1, gdpGrowth: -2.5, period: "Great Recession" },
  { year: "2010", govtInvestment: 7.8, avgTariff: 8.5, gdpGrowth: 2.6, period: "Recovery Stimulus" },
  { year: "2011", govtInvestment: 7.5, avgTariff: 8.2, gdpGrowth: 2.9, period: "Austerity Debate" },
  { year: "2012", govtInvestment: 7.1, avgTariff: 7.8, gdpGrowth: 2.4, period: "Fiscal Cliff" },
  { year: "2013", govtInvestment: 6.8, avgTariff: 7.5, gdpGrowth: 2.7, period: "Sequestration" },
  { year: "2014", govtInvestment: 6.5, avgTariff: 7.2, gdpGrowth: 2.9, period: "Oil Price Collapse" },
  { year: "2015", govtInvestment: 6.2, avgTariff: 7.0, gdpGrowth: 3.1, period: "Energy Transition" },
  { year: "2016", govtInvestment: 6.0, avgTariff: 6.8, gdpGrowth: 2.8, period: "Election Year" },
  { year: "2017", govtInvestment: 5.8, avgTariff: 7.5, gdpGrowth: 3.2, period: "Tax Reform" },
  { year: "2018", govtInvestment: 5.6, avgTariff: 8.8, gdpGrowth: 2.9, period: "Trade Wars Begin" },
  { year: "2019", govtInvestment: 5.9, avgTariff: 9.5, gdpGrowth: 2.3, period: "Trade Escalation" },
  { year: "2020", govtInvestment: 8.5, avgTariff: 10.2, gdpGrowth: -3.4, period: "COVID-19" },
  { year: "2021", govtInvestment: 9.2, avgTariff: 9.8, gdpGrowth: 5.7, period: "Recovery Package" },
  { year: "2022", govtInvestment: 8.8, avgTariff: 10.5, gdpGrowth: 2.1, period: "Inflation Response" },
  { year: "2023", govtInvestment: 8.2, avgTariff: 11.2, gdpGrowth: 2.5, period: "Supply Chain Focus" },
  { year: "2024", govtInvestment: 7.8, avgTariff: 11.8, gdpGrowth: 2.8, period: "Geopolitical Tensions" }
];

const EconomicGrowthChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Economic Growth by Political System (% Annual GDP Growth)
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={economicGrowthData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="period" 
              stroke="#6B7280"
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              stroke="#6B7280"
              fontSize={12}
              label={{ value: 'GDP Growth (%)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
              formatter={(value: number, name: string) => [
                `${value}%`, 
                name === 'democracy' ? 'Democracy' : 
                name === 'socialDemocracy' ? 'Social Democracy' : 'Dictatorship'
              ]}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value: string) => 
                value === 'democracy' ? 'Democracy' : 
                value === 'socialDemocracy' ? 'Social Democracy' : 'Dictatorship'
              }
            />
            <Bar 
              dataKey="democracy" 
              fill="#3B82F6" 
              name="democracy"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="socialDemocracy" 
              fill="#10B981" 
              name="socialDemocracy"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="dictatorship" 
              fill="#EF4444" 
              name="dictatorship"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p><strong>Key Insights:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Dictatorships show higher short-term growth but decline significantly over time</li>
          <li>Democracies demonstrate more sustainable and innovation-driven growth</li>
          <li>Social democracies balance growth with stability and social welfare</li>
        </ul>
      </div>
    </div>
  );
};

const FreedomGrowthChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Freedom Index by Political System (0-100 Scale)
      </h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={freedomGrowthData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 80,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="indicator" 
              stroke="#6B7280"
              fontSize={11}
              angle={-45}
              textAnchor="end"
              height={100}
            />
            <YAxis 
              stroke="#6B7280"
              fontSize={12}
              domain={[0, 100]}
              label={{ value: 'Freedom Score', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
              formatter={(value: number, name: string) => [
                `${value}`, 
                name === 'democracy' ? 'Democracy' : 
                name === 'socialDemocracy' ? 'Social Democracy' : 'Centralized Government'
              ]}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value: string) => 
                value === 'democracy' ? 'Democracy' : 
                value === 'socialDemocracy' ? 'Social Democracy' : 'Centralized Government'
              }
            />
            <Bar 
              dataKey="democracy" 
              fill="#3B82F6" 
              name="democracy"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="socialDemocracy" 
              fill="#10B981" 
              name="socialDemocracy"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="centralizedGov" 
              fill="#EF4444" 
              name="centralizedGov"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p><strong>Freedom Analysis:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Democracy:</strong> Highest scores across all freedom indicators</li>
          <li><strong>Social Democracy:</strong> Strong freedoms with some regulatory constraints</li>
          <li><strong>Centralized Government:</strong> Significant restrictions on fundamental freedoms</li>
          <li>Freedom scores correlate strongly with innovation and long-term prosperity</li>
        </ul>
      </div>
    </div>
  );
};

const InnovationRegulationChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Innovation & Development vs Regulatory Environment (0-100 Scale)
      </h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={innovationRegulationData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 80,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="metric" 
              stroke="#6B7280"
              fontSize={10}
              angle={-45}
              textAnchor="end"
              height={100}
            />
            <YAxis 
              stroke="#6B7280"
              fontSize={12}
              domain={[0, 100]}
              label={{ value: 'Innovation Score', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
              formatter={(value: number, name: string) => [
                `${value}`, 
                name === 'strictControl' ? 'Strict Border Control' : 
                name === 'moderateRegulation' ? 'Moderate Regulation' : 'Open System'
              ]}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value: string) => 
                value === 'strictControl' ? 'Strict Border Control' : 
                value === 'moderateRegulation' ? 'Moderate Regulation' : 'Open System'
              }
            />
            <Bar 
              dataKey="strictControl" 
              fill="#EF4444" 
              name="strictControl"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="moderateRegulation" 
              fill="#F59E0B" 
              name="moderateRegulation"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="openSystem" 
              fill="#10B981" 
              name="openSystem"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p><strong>Innovation vs Regulation Analysis:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Strict Border Control:</strong> Severely limits talent attraction and international collaboration</li>
          <li><strong>Moderate Regulation:</strong> Balances innovation with necessary oversight and protection</li>
          <li><strong>Open System:</strong> Maximizes innovation through free flow of ideas, talent, and capital</li>
          <li>Innovation thrives on diversity, collaboration, and minimal barriers to knowledge exchange</li>
        </ul>
      </div>
    </div>
  );
};

const GDPTariffChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        GDP Growth vs Import Restrictions & Tariffs
      </h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={gdpTariffData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="period" 
              stroke="#6B7280"
              fontSize={11}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              stroke="#6B7280"
              fontSize={12}
              label={{ value: 'Growth Rate (%)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
              formatter={(value: number, name: string) => [
                name === 'gdpGrowth' ? `${value}%` :
                name === 'importVolume' ? `${value}%` :
                name === 'exportVolume' ? `${value}%` : `${value}%`,
                name === 'gdpGrowth' ? 'GDP Growth' :
                name === 'importVolume' ? 'Import Volume' :
                name === 'exportVolume' ? 'Export Volume' : 'Tariff Rate'
              ]}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
            />
            <Bar 
              dataKey="gdpGrowth" 
              fill="#3B82F6" 
              name="gdpGrowth"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="importVolume" 
              fill="#10B981" 
              name="importVolume"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="exportVolume" 
              fill="#8B5CF6" 
              name="exportVolume"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="tariffRate" 
              fill="#EF4444" 
              name="tariffRate"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p><strong>Trade Policy Impact Analysis:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Free Trade:</strong> Maximum GDP growth with high trade volumes and zero tariffs</li>
          <li><strong>Low Tariffs:</strong> Minimal impact on growth while providing some protection</li>
          <li><strong>High Tariffs:</strong> Significant reduction in trade volumes and GDP growth</li>
          <li><strong>Trade Wars:</strong> Severe economic contraction with dramatically reduced trade</li>
          <li>Trade restrictions create deadweight losses and reduce overall economic efficiency</li>
        </ul>
      </div>
    </div>
  );
};

const TaxReformChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        GDP Growth Before/After Tax Reform (Comparison)
      </h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={taxReformData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 80,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="country" 
              stroke="#6B7280"
              fontSize={11}
              angle={-45}
              textAnchor="end"
              height={100}
            />
            <YAxis 
              stroke="#6B7280"
              fontSize={12}
              label={{ value: 'GDP Growth (%)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
              formatter={(value: number, name: string) => [
                `${value}%`, 
                name === 'beforeReform' ? 'Before Reform' : 
                name === 'afterReform' ? 'After Reform' : 'Change'
              ]}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
            />
            <Bar 
              dataKey="beforeReform" 
              fill="#EF4444" 
              name="beforeReform"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="afterReform" 
              fill="#10B981" 
              name="afterReform"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p><strong>Tax Reform Impact Analysis:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Corporate Tax Reduction:</strong> +0.7% GDP growth boost from 21% to 35% rate cuts</li>
          <li><strong>Income Tax Simplification:</strong> +0.6% growth through reduced compliance burden</li>
          <li><strong>VAT Adjustments:</strong> +0.6% growth from consumption tax optimization</li>
          <li><strong>Capital Gains Reform:</strong> +0.6% growth through investment incentives</li>
          <li><strong>Progressive Tax System:</strong> +0.7% growth from fairer tax distribution</li>
          <li><strong>Digital Tax:</strong> +0.4% growth from modern tax base expansion</li>
          <li>Well-designed tax reforms consistently boost economic growth and investment</li>
        </ul>
      </div>
    </div>
  );
};

const InflationMonetaryChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Inflation Rate with Monetary Policy Events
      </h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={inflationMonetaryData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="month" 
              stroke="#6B7280"
              fontSize={10}
              angle={-45}
              textAnchor="end"
              height={80}
              interval="preserveStartEnd"
            />
            <YAxis 
              stroke="#6B7280"
              fontSize={12}
              label={{ value: 'Rate (%)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
              formatter={(value: number, name: string) => [
                `${value}%`, 
                name === 'inflation' ? 'Inflation Rate' : 'Interest Rate'
              ]}
              labelFormatter={(label: string) => `Month: ${label}`}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
            />
            <ReferenceLine y={2} stroke="#10B981" strokeDasharray="5 5" strokeWidth={2} />
            <Line 
              type="monotone" 
              dataKey="inflation" 
              stroke="#EF4444" 
              strokeWidth={3}
              dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
              name="inflation"
            />
            <Line 
              type="monotone" 
              dataKey="interestRate" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              name="interestRate"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p><strong>Monetary Policy Impact Analysis:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>COVID Emergency (2020):</strong> Emergency rate cuts to 0.25% with deflationary pressures</li>
          <li><strong>Inflation Surge (2021-2022):</strong> Delayed policy response allowed inflation to peak at 9.1%</li>
          <li><strong>Aggressive Hiking (2022-2023):</strong> 5% rate increases brought inflation down from 9.1% to 3.0%</li>
          <li><strong>Policy Lag Effect:</strong> 6-12 month delay between rate changes and inflation response</li>
          <li><strong>Rate Cutting (2024):</strong> Gradual easing as inflation approaches 2% target</li>
          <li>Monetary policy effectiveness depends on timely response and clear communication</li>
        </ul>
      </div>
    </div>
  );
};

const KeyIndicatorsTable = () => {
  const categories = [...new Set(keyIndicatorsData.map(item => item.category))];
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Key Indicators by Policy Regime
      </h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                Indicator
              </th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100">
                Democracy
              </th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100">
                Social Democracy
              </th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100">
                Centralized Gov
              </th>
              <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-gray-100">
                Authoritarian
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, categoryIndex) => (
              <React.Fragment key={category}>
                {categoryIndex > 0 && (
                  <tr>
                    <td colSpan={5} className="border-t border-gray-300 dark:border-gray-600 py-2"></td>
                  </tr>
                )}
                <tr className="bg-blue-50 dark:bg-blue-900/20">
                  <td colSpan={5} className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-bold text-blue-800 dark:text-blue-200">
                    {category}
                  </td>
                </tr>
                {keyIndicatorsData
                  .filter(item => item.category === category)
                  .map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        {item.indicator}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-center font-medium text-green-700 dark:text-green-400">
                        {item.democracy}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-center font-medium text-blue-700 dark:text-blue-400">
                        {item.socialDemocracy}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-center font-medium text-yellow-700 dark:text-yellow-400">
                        {item.centralizedGov}
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-sm text-center font-medium text-red-700 dark:text-red-400">
                        {item.authoritarian}
                      </td>
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p><strong>Policy Regime Analysis:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Democracy:</strong> Highest innovation, FDI, and press freedom; moderate debt levels</li>
          <li><strong>Social Democracy:</strong> Best social outcomes, highest HDI; higher spending and taxes</li>
          <li><strong>Centralized Government:</strong> Lower debt and spending; reduced freedoms and innovation</li>
          <li><strong>Authoritarian:</strong> Lowest spending and debt; poorest social and economic outcomes</li>
          <li>Democratic institutions consistently outperform authoritarian systems across most indicators</li>
        </ul>
      </div>
    </div>
  );
};

const GovtSpendingGDPScatterChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Government Spending Change vs GDP Growth Change
      </h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            data={govtSpendingGDPData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              type="number" 
              dataKey="spendingChange" 
              name="Government Spending Change"
              stroke="#6B7280"
              fontSize={12}
              label={{ value: 'Government Spending Change (%)', position: 'insideBottom', offset: -10 }}
            />
            <YAxis 
              type="number" 
              dataKey="gdpChange" 
              name="GDP Growth Change"
              stroke="#6B7280"
              fontSize={12}
              label={{ value: 'GDP Growth Change (%)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
              cursor={{ strokeDasharray: '3 3' }}
              formatter={(value: number, name: string, props: any) => {
                if (name === 'spendingChange') return [`${value}%`, 'Spending Change'];
                if (name === 'gdpChange') return [`${value}%`, 'GDP Change'];
                return [value, name];
              }}
              labelFormatter={(label: string, payload: any[]) => {
                if (payload && payload[0]) {
                  return `${payload[0].payload.country} (${payload[0].payload.year})`;
                }
                return label;
              }}
            />
            <Legend />
            <Scatter 
              name="Fiscal Policy Impact" 
              dataKey="gdpChange" 
              fill="#3B82F6"
              fillOpacity={0.7}
              r={6}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div>
          <p><strong>Fiscal Policy Analysis:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Expansionary Policies:</strong> Stimulus packages show strong GDP growth correlation</li>
            <li><strong>Investment Focus:</strong> Infrastructure and human capital yield higher returns</li>
            <li><strong>Austerity Impact:</strong> Spending cuts generally reduce GDP growth</li>
            <li><strong>Emergency Spending:</strong> Crisis response shows mixed effectiveness</li>
          </ul>
        </div>
        <div>
          <p><strong>Policy Type Effectiveness:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>Social Investment:</strong> Healthcare and education show high multipliers</li>
            <li><strong>Technology Investment:</strong> Digital transformation drives innovation</li>
            <li><strong>Infrastructure:</strong> Physical capital investment supports long-term growth</li>
            <li><strong>Fiscal Consolidation:</strong> Debt reduction often reduces growth short-term</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const HistoricalGovtInvestmentTariffChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Historical Government Investment & Tariff Rates (% of GDP)
      </h3>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={historicalGovtInvestmentTariffData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="year" 
              stroke="#6B7280" 
              fontSize={10} 
              interval="preserveStartEnd"
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              stroke="#6B7280" 
              fontSize={12}
              label={{ value: '% of GDP', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
              formatter={(value: number, name: string, props: any) => [
                `${value}%`, 
                name === 'govtInvestment' ? 'Government Investment' : 
                name === 'avgTariff' ? 'Average Tariff' : 'GDP Growth'
              ]}
              labelFormatter={(label: string, payload: any[]) => {
                if (payload && payload[0]) {
                  return `${label} - ${payload[0].payload.period}`;
                }
                return label;
              }}
            />
            <Legend />
            <Bar 
              dataKey="govtInvestment" 
              fill="#3B82F6" 
              name="govtInvestment"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="avgTariff" 
              fill="#EF4444" 
              name="avgTariff"
              radius={[2, 2, 0, 0]}
            />
            <Line 
              type="monotone" 
              dataKey="gdpGrowth" 
              stroke="#10B981" 
              strokeWidth={3}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              name="gdpGrowth"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div>
          <p><strong>Government Investment Trends:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>1990s:</strong> Low investment (3.1-4.2%) during economic expansion</li>
            <li><strong>2000s:</strong> Moderate increase (4.5-5.5%) post-9/11 security focus</li>
            <li><strong>2008-2010:</strong> Crisis response (7.2-7.8%) with stimulus packages</li>
            <li><strong>2011-2019:</strong> Gradual decline (6.0-5.6%) with austerity measures</li>
            <li><strong>2020-2024:</strong> High investment (7.8-9.2%) for crisis recovery</li>
          </ul>
        </div>
        <div>
          <p><strong>Tariff Rate Evolution:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>1990s:</strong> Trade liberalization (5.5-8.5%) with WTO/NAFTA</li>
            <li><strong>2000s:</strong> Continued reduction (5.2-6.8%) with globalization</li>
            <li><strong>2009-2010:</strong> Crisis protectionism (8.1-8.5%) temporary spike</li>
            <li><strong>2011-2016:</strong> Gradual reduction (6.8-7.0%) trade normalization</li>
            <li><strong>2017-2024:</strong> Trade war escalation (7.5-11.8%) protectionist policies</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-blue-800 text-sm dark:bg-blue-900/40 dark:border-blue-700 dark:text-blue-100">
        <strong>Key Periods:</strong> 
        <span className="ml-2">
          <strong>1994:</strong> NAFTA Implementation • 
          <strong>2001:</strong> 9/11 Security Investment • 
          <strong>2009:</strong> Great Recession Response • 
          <strong>2018:</strong> Trade Wars Begin • 
          <strong>2020:</strong> COVID-19 Crisis
        </span>
      </div>
    </div>
  );
};

export default function PolicyImpactDashboard() {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-lg p-6 text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Policy Impact Analysis</h2>
      
      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <EconomicGrowthChart />
        <FreedomGrowthChart />
      </div>
      
      {/* Innovation and Regulation Chart */}
      <div className="mb-6">
        <InnovationRegulationChart />
      </div>
      
      {/* GDP and Tariff Chart */}
      <div className="mb-6">
        <GDPTariffChart />
      </div>
      
      {/* Historical Government Investment and Tariff Chart */}
      <div className="mb-6">
        <HistoricalGovtInvestmentTariffChart />
      </div>
      
      {/* Other Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <TaxReformChart />
        <InflationMonetaryChart />
        <GovtSpendingGDPScatterChart />
        <KeyIndicatorsTable />
      </div>
      
      {/* Add text box for caveats */}
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-yellow-800 text-sm dark:bg-yellow-900/40 dark:border-yellow-700 dark:text-yellow-100">
        <strong>Note:</strong> Correlations shown do not necessarily imply causation. Policy impacts are complex and influenced by numerous factors. Economic growth, freedom, innovation, and trade data represent historical averages and theoretical models based on academic research.
      </div>
    </section>
  );
}