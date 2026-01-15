// filepath: src/app/dashboards/netherlands-economic-indicators/page.tsx
import React from "react";

import InternationalComparisonTabs from './InternationalComparisonTabs';

export default function NetherlandsEconomicIndicatorsPage() {
  const gdpProjections = [
    {
      year: "2025",
      gdpGrowth: "1.3-1.6%",
      gdpPerCapita: "€52,037",
      keyDrivers: "Private consumption, domestic demand, wage growth"
    },
    {
      year: "2026",
      gdpGrowth: "1.1-1.2%",
      gdpPerCapita: "€53,385",
      keyDrivers: "Continued domestic demand, slowing impact of tariffs"
    },
    {
      year: "2027",
      gdpGrowth: "1.5%",
      gdpPerCapita: "€54,986",
      keyDrivers: "Innovation investments, digital transition"
    },
    {
      year: "2028",
      gdpGrowth: "1.7%",
      gdpPerCapita: "€56,915",
      keyDrivers: "Green energy transition, productivity improvements"
    },
    {
      year: "2029",
      gdpGrowth: "1.8%",
      gdpPerCapita: "€59,081",
      keyDrivers: "AI-driven productivity, infrastructure development"
    },
    {
      year: "2030",
      gdpGrowth: "2.0%",
      gdpPerCapita: "€61,452",
      keyDrivers: "Full impact of Growth Fund investments, sustainable economy"
    }
  ];

  const growthStrategies = [
    {
      initiative: "National Growth Fund",
      description: "€20 billion investment in innovation, research, and infrastructure for structural economic growth",
      impactAreas: "Knowledge development, R&D innovation, Physical & Digital Infrastructure",
      timeframe: "2024-2030"
    },
    {
      initiative: "Green Energy Transition",
      description: "Transition to renewable energy sources and sustainable economy",
      impactAreas: "Energy efficiency, Renewable energy production, Carbon reduction",
      timeframe: "2025-2030"
    },
    {
      initiative: "Digital Economy Strategy",
      description: "Acceleration of digital transition across all economic sectors",
      impactAreas: "SME digitalization, AI adoption, Digital infrastructure, Cybersecurity",
      timeframe: "2025-2028"
    },
    {
      initiative: "Innovation Ecosystem",
      description: "Strengthening R&D capabilities and knowledge transfer between academia and industry",
      impactAreas: "Technology startups, University research, Industry partnerships",
      timeframe: "2024-2029"
    },
    {
      initiative: "Skilled Workforce Development",
      description: "Investment in education and retraining for future skill needs",
      impactAreas: "Technical education, Lifelong learning, International talent attraction",
      timeframe: "2025-2030"
    }
  ];

  const highYieldingCompanies = [
    {
      company: "Adyen",
      sector: "Fintech/Payment Processing",
      revenuePerEmployee: "€502,000",
      keyRoles: "Software Engineers, Data Scientists, Financial Analysts",
      growthRate: "18.5%"
    },
    {
      company: "ASML",
      sector: "Semiconductor Equipment",
      revenuePerEmployee: "€485,300",
      keyRoles: "Mechatronics Engineers, Optical Engineers, Physics Researchers",
      growthRate: "15.2%"
    },
    {
      company: "Stellantis",
      sector: "Automotive Manufacturing",
      revenuePerEmployee: "€450,000",
      keyRoles: "Automation Specialists, Supply Chain Managers, EV Engineers",
      growthRate: "7.3%"
    },
    {
      company: "NXP Semiconductors",
      sector: "Semiconductor Manufacturing",
      revenuePerEmployee: "€437,500",
      keyRoles: "Chip Designers, Embedded Systems Engineers, IoT Specialists",
      growthRate: "9.1%"
    },
    {
      company: "Shell",
      sector: "Energy/Petrochemicals",
      revenuePerEmployee: "€1,250,000",
      keyRoles: "Energy Transition Specialists, Project Engineers, Sustainability Experts",
      growthRate: "6.8%"
    },
    {
      company: "Prosus",
      sector: "Technology Investment",
      revenuePerEmployee: "€410,500",
      keyRoles: "Investment Analysts, Technology Strategists, Portfolio Managers",
      growthRate: "13.4%"
    }
  ];

  const highYieldingSectors = [
    {
      sector: "Semiconductor/High-Tech",
      averageRevenue: "€465,000 per employee",
      growthProjection: "14.7% (2025-2030)",
      description: "The Netherlands' semiconductor industry is a global leader with ASML and NXP as key players. The sector benefits from strong R&D infrastructure and specialized knowledge clusters around Eindhoven's 'Brainport' region."
    },
    {
      sector: "Fintech/Digital Payments",
      averageRevenue: "€490,000 per employee",
      growthProjection: "17.3% (2025-2030)",
      description: "Dutch fintech companies like Adyen leverage advanced technology and efficient operations to process massive transaction volumes with relatively small workforces, yielding exceptional productivity metrics."
    },
    {
      sector: "Energy/Renewable Transition",
      averageRevenue: "€875,000 per employee",
      growthProjection: "11.2% (2025-2030)",
      description: "Traditional energy companies are pivoting to renewables while maintaining high revenue per employee. The sector combines capital-intensive operations with increasingly automated systems."
    },
    {
      sector: "Cloud Computing/IT Services",
      averageRevenue: "€312,000 per employee",
      growthProjection: "22.1% (2025-2030)",
      description: "With spending projected to reach €2,780 per employee across industries in 2025, cloud computing and IT services companies benefit from scalable business models and recurring revenue streams."
    },
    {
      sector: "Specialized Manufacturing",
      averageRevenue: "€380,000 per employee",
      growthProjection: "8.9% (2025-2030)",
      description: "Dutch precision manufacturing companies focus on high-value products requiring specialized knowledge rather than labor-intensive production, resulting in higher revenue per employee."
    }
  ];

  // New data for Ireland and Luxembourg comparative analysis
  const internationalComparison = {
    ireland: {
      sectors: [
        {
          sector: "Pharmaceuticals & Life Sciences",
          revenuePerEmployee: "€850,000+",
          description: "Ireland's pharmaceutical sector is the highest value-added manufacturing sector with 129 businesses generating €70.8bn (2025). Benefit from Ireland's corporate tax structure and skilled workforce."
        },
        {
          sector: "Technology/Digital",
          revenuePerEmployee: "€780,000+",
          description: "Dominated by global tech giants with European headquarters in Ireland. These companies generate exceptionally high revenue per employee through intellectual property management and digital services."
        },
        {
          sector: "Financial Services",
          revenuePerEmployee: "€560,000+",
          description: "Asset management, fintech and specialized financial services leveraging Ireland's favorable regulatory environment and access to EU markets."
        }
      ],
      companies: [
        {
          name: "Apple",
          sector: "Technology",
          revenuePerEmployee: "€2.64M",
          keyRoles: "Software Engineers, IP Specialists, Supply Chain Managers"
        },
        {
          name: "Meta",
          sector: "Technology",
          revenuePerEmployee: "€2.2M",
          keyRoles: "Data Scientists, AI Specialists, Platform Engineers"
        },
        {
          name: "Johnson & Johnson",
          sector: "Pharmaceuticals",
          revenuePerEmployee: "€1.2M",
          keyRoles: "Biochemists, Clinical Researchers, Regulatory Affairs Specialists"
        },
        {
          name: "Accenture",
          sector: "Consulting/Tech",
          revenuePerEmployee: "€750K",
          keyRoles: "Management Consultants, Digital Transformation Specialists"
        }
      ]
    },
    luxembourg: {
      sectors: [
        {
          sector: "Investment Fund Management",
          revenuePerEmployee: "€1.2M+",
          description: "Luxembourg's fund industry manages €5.9 trillion (2025), with exceptionally high value generation per employee through asset management fees and financial services."
        },
        {
          sector: "Banking & Private Banking",
          revenuePerEmployee: "€950K+",
          description: "Specialized in wealth management for high-net-worth individuals and cross-border banking services leveraging Luxembourg's financial expertise."
        },
        {
          sector: "FinTech & Financial Infrastructure",
          revenuePerEmployee: "€830K+",
          description: "Companies providing specialized financial infrastructure and services including post-trade settlements, custody services and financial technology platforms."
        }
      ],
      companies: [
        {
          name: "Clearstream Banking",
          sector: "Financial Infrastructure",
          revenuePerEmployee: "€1.85M",
          keyRoles: "Financial Engineers, Settlement Specialists, Compliance Experts"
        },
        {
          name: "BGL BNP Paribas",
          sector: "Banking",
          revenuePerEmployee: "€1.35M",
          keyRoles: "Private Bankers, Asset Managers, Financial Advisors"
        },
        {
          name: "European Investment Bank",
          sector: "Financial Institution",
          revenuePerEmployee: "€1.7M",
          keyRoles: "Financial Analysts, Project Managers, Investment Specialists"
        },
        {
          name: "Ferrero International",
          sector: "Manufacturing/CPG",
          revenuePerEmployee: "€780K",
          keyRoles: "Supply Chain Experts, Brand Managers, Financial Controllers"
        }
      ]
    }
    ,
    uk: {
      sectors: [
        { sector: "Advanced Manufacturing", revenuePerEmployee: "€1,336m (UKRI)", description: "Drive35 expansion and support for zero-emissions vehicle manufacturing; major private & public projects across automotive supply chain." },
        { sector: "Clean Growth & Energy", revenuePerEmployee: "€1,176m (UKRI)", description: "SMR selection at Wylfa, Great British Energy supply-chain fund and Clean Energy Jobs Plan targeting 400k jobs by 2030." },
        { sector: "Creative Industries", revenuePerEmployee: "€369m (UKRI)", description: "Increased R&D allocations, major studio investments and jobs growth across film, TV and games." },
        { sector: "Digital & Technologies (AI, Quantum)", revenuePerEmployee: "€3,355m (selected sub-allocations)", description: "Significant AI, quantum, engineering biology funding, AI Growth Zones and free compute access to researchers." },
        { sector: "Life Sciences", revenuePerEmployee: "€1,508m (UKRI)", description: "Funding for pharmaceutical R&D, replacing animals in science strategy and mental health research investment." },
        { sector: "Financial & Professional Services", revenuePerEmployee: "€118m (UKRI) + private commitments", description: "New investor services, scale-up units and London market innovations to increase access to growth capital." }
      ],
      companies: [
        { name: "Shell", sector: "Energy/Petrochemicals", revenue_ttm_usd_billion: 269.07, employees: 93000, rpe_usd: 2893000, rpe_gbp: 2148292.62, revenuePerEmployee: "USD 269.07 bn / GBP 199.81 bn", keyRoles: "Energy Transition Specialists, Project Engineers, Sustainability Experts" },
        { name: "BP", sector: "Energy/Petrochemicals", revenue_ttm_usd_billion: 187.70, employees: 100500, rpe_usd: 1868000, rpe_gbp: 1387145.04, revenuePerEmployee: "USD 187.70 bn / GBP 139.38 bn", keyRoles: "Upstream/Downstream Engineers, Energy Traders" },
        { name: "Prudential", sector: "Insurance/Financials", revenue_ttm_usd_billion: 128.74, employees: 15412, rpe_usd: 8353000, rpe_gbp: 6202795.8, revenuePerEmployee: "USD 128.74 bn / GBP 95.60 bn", keyRoles: "Actuaries, Investment Managers, Risk Officers" },
        { name: "Tesco", sector: "Retail", revenue_ttm_usd_billion: 88.08, employees: 341108, rpe_usd: 258000, rpe_gbp: 191586.41, revenuePerEmployee: "USD 88.08 bn / GBP 65.41 bn", keyRoles: "Retail Managers, Supply Chain, Merchandisers" },
        { name: "HSBC", sector: "Banking/Financials", revenue_ttm_usd_billion: 70.04, employees: 220928, rpe_usd: 317000, rpe_gbp: 235398.81, revenuePerEmployee: "USD 70.04 bn / GBP 52.01 bn", keyRoles: "Bankers, Compliance, Corporate Finance" }
      ],
      findings: "Quarterly update (Q4 2025): >£9bn allocated via UKRI to IS-8 sectors; delivery milestones include AI Growth Zones, semiconductor centre in London, £20 Sterling investor partnership to mobilise pension funds, major private investments across regions, and planning/energy reforms to accelerate projects. Key recommendations: maintain targeted UKRI support, accelerate grid connections for priority projects, provide tailored capital instruments for scale-ups, and ensure skills pipelines through Technical Excellence Colleges."
    }
  };

  const economicData = [
    {
      indicator: "GDP Growth Rate",
      value: "1.3%",
      period: "2025 (projected)",
      source: "OECD, IMF, European Commission",
      trend: "Moderate recovery",
      details: "Real GDP growth driven by strengthening private consumption and domestic demand"
    },
    {
      indicator: "GDP Growth Rate",
      value: "1.1%",
      period: "2026 (projected)",
      source: "OECD",
      trend: "Continued growth",
      details: "Sustained by rising disposable household income"
    },
    {
      indicator: "Inflation Rate",
      value: "2.9%",
      period: "2025 (projected)",
      source: "OECD",
      trend: "Gradual decline",
      details: "Service price pressures persist, but slowly declining from higher levels"
    },
    {
      indicator: "Inflation Rate",
      value: "2.8%",
      period: "2025 (projected)",
      source: "IMF",
      trend: "Gradual decline",
      details: "Consumer prices moderating towards target levels"
    },
    {
      indicator: "Unemployment Rate",
      value: "3.8%",
      period: "May 2025 (actual)",
      source: "CBS, Trading Economics",
      trend: "Stable",
      details: "385,000 people unemployed; rate unchanged from previous month"
    },
    {
      indicator: "Population",
      value: "18.05 million",
      period: "2025",
      source: "IMF DataMapper",
      trend: "Steady growth",
      details: "Continued demographic expansion"
    },
    {
      indicator: "Purchasing Power",
      value: "+2.9%",
      period: "2024",
      source: "CPB",
      trend: "Positive growth",
      details: "Wage growth outstrips inflation, increasing average purchasing power"
    },
    {
      indicator: "Purchasing Power",
      value: "+0.6-0.7%",
      period: "2025 (projected)",
      source: "CPB, BNP Paribas",
      trend: "Modest increase",
      details: "Continued but slower growth in real purchasing power"
    },
    {
      indicator: "Current Account Balance",
      value: "10.4% of GDP",
      period: "2025 (projected)",
      source: "CPB",
      trend: "Strong surplus",
      details: "Maintaining substantial current account surplus"
    },
    {
      indicator: "Poverty Rate",
      value: "Declining",
      period: "2025",
      source: "CPB",
      trend: "Improvement",
      details: "Fewer people living in poverty due to wage growth and welfare benefits"
    }
  ];

  const keyHighlights = [
    {
      title: "Economic Recovery",
      description: "The Dutch economy is experiencing a moderate recovery with GDP growth projected at 1.3% in 2025, driven by strengthening domestic demand and private consumption."
    },
    {
      title: "Low Unemployment",
      description: "Unemployment remains very low at 3.8%, reflecting a tight labor market and strong employment conditions."
    },
    {
      title: "Inflation Moderating",
      description: "Inflation is gradually declining toward target levels, though service price pressures continue to persist."
    },
    {
      title: "Strong External Position",
      description: "The Netherlands maintains a robust current account surplus of over 10% of GDP, indicating strong external competitiveness."
    },
    {
      title: "Improving Living Standards",
      description: "Purchasing power is increasing as wage growth outpaces inflation, leading to improved household finances and reduced poverty."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Economic Indicators for the Netherlands
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Comprehensive overview of the Netherlands' key economic indicators for 2025, 
            based on the latest data from authoritative sources including OECD, IMF, 
            CBS (Centraal Bureau voor de Statistiek), and CPB (Centraal Planbureau).
            Includes 5-year GDP projections (2025-2030), strategic economic initiatives,
            and analysis of high-yielding sectors and companies driving productivity growth.
            Features comparative analysis with Ireland and Luxembourg highlighting sectors and companies 
            with exceptional revenue per employee ratios and their distinct economic specialization models.
          </p>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Last updated: July 2025 | Data sources: OECD, IMF, CBS, CPB, European Commission
          </div>
        </header>

        {/* Key Highlights Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Key Economic Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Economic Indicators Table */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Detailed Economic Indicators
          </h2>
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-neutral-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Indicator
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Value
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Period
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Source
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Trend
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {economicData.map((item, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                        {item.indicator}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {item.value}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {item.period}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {item.source}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.trend.includes('growth') || item.trend.includes('Positive') || item.trend.includes('Strong') || item.trend.includes('Improvement')
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : item.trend.includes('decline') || item.trend.includes('Gradual')
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}>
                          {item.trend}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 max-w-xs">
                        {item.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* GDP Projections Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            5-Year GDP Projections (2025-2030)
          </h2>
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-neutral-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Year
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      GDP Growth
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      GDP Per Capita
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                      Key Growth Drivers
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {gdpProjections.map((projection, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                        {projection.year}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {projection.gdpGrowth}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {projection.gdpPerCapita}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                        {projection.keyDrivers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Note:</span> Projections show GDP per capita increasing by approximately €9,415 (18.1%) from 2025 to 2030, reflecting the impact of strategic government investments and economic policies.
              </p>
            </div>
          </div>
        </section>

        {/* Growth Strategies Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Strategic Initiatives for GDP Per Capita Growth
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {growthStrategies.map((strategy, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {strategy.initiative} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">({strategy.timeframe})</span>
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                      {strategy.description}
                    </p>
                    <div className="bg-gray-50 dark:bg-neutral-800 px-4 py-2 rounded-md">
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                        Impact Areas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {strategy.impactAreas.split(', ').map((area, i) => (
                          <span 
                            key={i}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              National Strategy Impact
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              The Netherlands' strategic economic initiatives are projected to substantially increase GDP per capita by creating a more productive, innovative, and sustainable economy. The National Growth Fund's €20 billion investment combined with digital transformation and green transition efforts aims to position the Netherlands as a leader in high-value sectors like renewable energy, advanced technology, and digital services. These coordinated policies target a GDP per capita increase of over 18% by 2030, outpacing many other developed economies.
            </p>
          </div>
        </section>

        {/* High Yielding Jobs & Companies Section */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            High-Yield Employment Sectors & Companies
          </h2
          >
          {/* High-Yielding Sectors */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Top Performing Sectors by Revenue per Employee
            </h3>
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-neutral-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                        Sector
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                        Average Revenue
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                        Growth Projection
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                        Sector Profile
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {highYieldingSectors.map((sector, index) => (
                      <tr 
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                          {sector.sector}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {sector.averageRevenue}
                        </td>
                        <td className="px-6 py-4 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                          {sector.growthProjection}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 max-w-sm">
                          {sector.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* High-Yielding Companies */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Leading Dutch Companies by Revenue per Employee (2025)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highYieldingCompanies.map((company, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {company.company}
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {company.sector}
                    </span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Revenue per Employee</p>
                      <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{company.revenuePerEmployee}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Annual Growth</p>
                      <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{company.growthRate}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">High-Value Job Roles</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{company.keyRoles}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-100 dark:border-blue-800/30">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Economic Impact of High-Yielding Jobs
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                These high-revenue-per-employee companies and sectors represent key drivers of the Dutch economy's productivity growth. The Netherlands has positioned itself as a leader in specialized, knowledge-intensive industries where value creation is decoupled from headcount. This focus on high-productivity roles supports the country's GDP per capita growth strategy and contributes to the projected 18% increase by 2030. To maintain this trajectory, the National Growth Fund's investments target innovation in these sectors while developing the skilled workforce needed to fill these high-value positions.
              </p>
            </div>
          </div>
        </section>

        {/* International Comparison - NEW SECTION */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
            <span>International Comparison: High-Yield Sectors</span>
            <span className="ml-3 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">Netherlands vs. Ireland vs. Luxembourg</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {/* Netherlands Summary Card */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden border border-blue-200 dark:border-blue-800">
              <div className="bg-blue-50 dark:bg-blue-900/30 px-6 py-4 border-b border-blue-200 dark:border-blue-800">
                <div className="flex items-center">
                  <div className="w-8 h-6 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6">
                      <rect fill="#21468B" width="9" height="6"/>
                      <rect fill="#FFF" width="9" height="4"/>
                      <rect fill="#AE1C28" width="9" height="2"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Netherlands</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Focus on high-tech, energy, and fintech</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Top Performing Sector</p>
                    <p className="text-sm font-semibold">Energy/Renewable Transition</p>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">€875,000 per employee</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Leading Company</p>
                    <p className="text-sm font-semibold">Shell</p>
                    <p className="text-base font-bold text-blue-600 dark:text-blue-400">€1,250,000 per employee</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Key Advantage</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Strong focus on specialized, knowledge-intensive industries with high-value creation</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ireland Summary Card */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden border border-green-200 dark:border-green-800">
              <div className="bg-green-50 dark:bg-green-900/30 px-6 py-4 border-b border-green-200 dark:border-green-800">
                <div className="flex items-center">
                  <div className="w-8 h-6 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6">
                      <rect fill="#169b62" width="6" height="12"/>
                      <rect fill="#fff" width="4" height="12"/>
                      <rect fill="#ff883e" width="2" height="12"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Ireland</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Dominated by tech giants and pharma</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Top Performing Sector</p>
                    <p className="text-sm font-semibold">Technology/Digital</p>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">€780,000+ per employee</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Leading Company</p>
                    <p className="text-sm font-semibold">Apple</p>
                    <p className="text-base font-bold text-blue-600 dark:text-blue-400">€2,640,000 per employee</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Key Advantage</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Strategic use of IP management and favorable corporate tax structure for multinational operations</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Luxembourg Summary Card */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden border border-red-200 dark:border-red-800">
              <div className="bg-red-50 dark:bg-red-900/30 px-6 py-4 border-b border-red-200 dark:border-red-800">
                <div className="flex items-center">
                  <div className="w-8 h-6 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3">
                      <rect fill="#ED2939" width="5" height="3"/>
                      <rect fill="#fff" width="5" height="2"/>
                      <rect fill="#00A3E0" width="5" height="1"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Luxembourg</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Specialized in financial services</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Top Performing Sector</p>
                    <p className="text-sm font-semibold">Investment Fund Management</p>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">€1,200,000+ per employee</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Leading Company</p>
                    <p className="text-sm font-semibold">Clearstream Banking</p>
                    <p className="text-base font-bold text-blue-600 dark:text-blue-400">€1,850,000 per employee</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Key Advantage</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Highly specialized financial services industry managing €5.9T in assets with favorable regulatory environment</p>
                  </div>
                </div>
              </div>
            </div>
            {/* UK Summary Card */}
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden border border-yellow-200 dark:border-yellow-800">
              <div className="bg-yellow-50 dark:bg-yellow-900/30 px-6 py-4 border-b border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center">
                  <div className="w-8 h-6 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
                      <rect fill="#00247d" width="10" height="6"/>
                      <rect fill="#cf142b" width="10" height="3"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">United Kingdom</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Industrial Strategy IS-8 quarterly update (Q4 2025)</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Top Programmes</p>
                    <p className="text-sm font-semibold">UKRI IS-8 allocations & regional investments</p>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">£9bn+ directed to IS-8; major sector packages</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Leading Initiatives</p>
                    <p className="text-sm font-semibold">AI Growth Zones, Semiconductor Centre (King's Cross), DRIVE35</p>
                    <p className="text-base font-bold text-blue-600 dark:text-blue-400">Private & public packages across regions</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-1">Key Advantage</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Coordinated UKRI allocations, investor mobilisation and planning/energy reforms to accelerate delivery of large capital projects.</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-2">Top UK Companies (TTM Revenue, close of 2025)</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      {internationalComparison.uk.companies.map((c, i) => (
                        <li key={i} className="flex justify-between">
                          <span className="font-medium">{c.name}</span>
                          <span className="text-right text-sm text-blue-600 dark:text-blue-400">{c.revenuePerEmployee}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
          
          {/* Detailed Comparison Tabs */}
          <InternationalComparisonTabs 
            ireland={internationalComparison.ireland}
            luxembourg={internationalComparison.luxembourg}
            uk={internationalComparison.uk}
          />
          
          <div className="mt-6 bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Comparative Analysis: Netherlands, Ireland, Luxembourg
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              While all three countries demonstrate high productivity and revenue per employee, they follow distinctly different models:
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">•</span>
                <span><strong>Netherlands:</strong> Focuses on balanced, innovation-driven growth across multiple sectors including high-tech manufacturing, energy transition, and digital services with strong emphasis on R&D.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 dark:text-green-400 font-bold mr-2">•</span>
                <span><strong>Ireland:</strong> Leverages its strategic position to attract multinational tech and pharmaceutical giants, with revenue heavily influenced by intellectual property arrangements and favorable corporate tax structure.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 dark:text-red-400 font-bold mr-2">•</span>
                <span><strong>Luxembourg:</strong> Specializes almost exclusively in high-value financial services, particularly investment fund management, with the financial sector managing assets of €5.9 trillion (2025) with a relatively small workforce.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 font-bold mr-2">•</span>
                <span><strong>United Kingdom:</strong> Combines targeted public funding (UKRI IS-8 allocations), investor mobilisation and regional investment zones to scale frontier industries (AI, semiconductors, clean energy). The UK model emphasises rapid commercialisation, large-scale project delivery and market-making interventions.</span>
              </li>
            </ul>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              The Netherlands' approach represents a more diversified model than Ireland (tech/pharma dominated) or Luxembourg (finance dominated). The UK sits alongside these models with a policy-driven scaling approach: substantial public grants and investor mobilisation can produce rapid sectoral scale-up and large flagship projects, though outcomes depend on effective project delivery and market access. Each model has trade-offs between peak revenue-per-employee in specialist sectors and broader economic resilience.
            </p>
          </div>
        </section>

        {/* Strategic Cross-Country GDP Growth Initiatives - NEW SECTION */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Strategic Initiatives: Adopting High-Yield Approaches from Ireland & Luxembourg
          </h2>
          
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-8">
            <div className="px-6 py-4 bg-indigo-50 dark:bg-indigo-900/20 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Cross-Country Learning for GDP Per Capita Growth
              </h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Strategic initiatives to selectively adopt high-revenue-per-employee approaches from Ireland and Luxembourg while maintaining Dutch economic resilience and social values.
              </p>
            </div>
            
            <div className="p-6">
              <div className="space-y-8">
                {/* Strategy 1: Irish IP & Tech Hub Model */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-100 dark:border-green-800/30">
                    <div className="flex items-center mb-3">
                      <div className="w-6 h-4 mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6">
                          <rect fill="#169b62" width="6" height="12"/>
                          <rect fill="#fff" width="4" height="12"/>
                          <rect fill="#ff883e" width="2" height="12"/>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">From Ireland</h4>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Strategic IP management and tech hub development that has enabled companies like Apple (€2.64M per employee) and Meta (€2.2M per employee)
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Dutch Adaptation: Tech IP & Innovation Hub Strategy</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      While maintaining the Netherlands' commitment to fair taxation, selective elements of Ireland's approach will be adopted through targeted investments of €5.8 billion (2026-2030) to create specialized innovation hubs and IP management centers:
                    </p>
                    <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      Sources: <a href="https://www.cpb.nl/en" target="_blank" rel="noopener noreferrer" className="underline">CPB</a> · <a href="https://www.cbs.nl/en-gb" target="_blank" rel="noopener noreferrer" className="underline">CBS</a> · <a href="https://www.oecd.org/economy" target="_blank" rel="noopener noreferrer" className="underline">OECD</a> · <a href="https://www.government.nl/topics/knowledge-and-innovation/national-growth-fund" target="_blank" rel="noopener noreferrer" className="underline">National Growth Fund</a>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <span className="text-green-600 dark:text-green-400 font-bold mr-2">1.</span>
                        <span><strong>Amsterdam-Eindhoven Tech Corridor</strong> - Enhanced IP incentives for R&D in semiconductor, quantum computing, and AI technologies, with projected revenue-per-employee increases of 30-40% by 2030</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-green-600 dark:text-green-400 font-bold mr-2">2.</span>
                        <span><strong>Digital Services Innovation Zone</strong> - Specialized regulatory environment for digital services and fintech with streamlined procedures and targeted incentives for high-value activities</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-green-600 dark:text-green-400 font-bold mr-2">3.</span>
                        <span><strong>Strategic IP Investment Fund</strong> - €1.2 billion dedicated to help Dutch companies develop, acquire, and monetize intellectual property in high-growth sectors</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Strategy 2: Luxembourg Financial Services Model */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border border-red-100 dark:border-red-800/30">
                    <div className="flex items-center mb-3">
                      <div className="w-6 h-4 mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3">
                          <rect fill="#ED2939" width="5" height="3"/>
                          <rect fill="#fff" width="5" height="2"/>
                          <rect fill="#00A3E0" width="5" height="1"/>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">From Luxembourg</h4>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Highly specialized financial services infrastructure enabling exceptional productivity (€1.2M+ per employee in fund management)
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Dutch Adaptation: Financial Services Excellence Program</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Building on Amsterdam's existing financial infrastructure and the Netherlands' strong regulatory reputation, investments of €4.3 billion (2026-2029) will establish specialized financial service centers:
                    </p>
                    <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      Sources: <a href="https://www.ecb.europa.eu/home/html/index.en.html" target="_blank" rel="noopener noreferrer" className="underline">European Central Bank</a> · <a href="https://www.cbs.nl/en-gb" target="_blank" rel="noopener noreferrer" className="underline">CBS</a> · <a href="https://ec.europa.eu/info/index_en" target="_blank" rel="noopener noreferrer" className="underline">European Commission</a>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <span className="text-red-600 dark:text-red-400 font-bold mr-2">1.</span>
                        <span><strong>Sustainable Finance Hub</strong> - Specialized center for green bonds, ESG investments, and climate finance with optimized regulatory frameworks, targeting €950K+ revenue per employee</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-red-600 dark:text-red-400 font-bold mr-2">2.</span>
                        <span><strong>FinTech Regulatory Sandbox</strong> - Dedicated regulatory environment for financial innovation with streamlined compliance requirements for qualified entities</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-red-600 dark:text-red-400 font-bold mr-2">3.</span>
                        <span><strong>Asset Management Excellence Center</strong> - Specialized infrastructure and incentives for high-value asset management activities, targeting a 45% increase in sector revenue per employee by 2029</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Strategy 3: Integration with Dutch Strengths */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-100 dark:border-blue-800/30">
                    <div className="flex items-center mb-3">
                      <div className="w-6 h-4 mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6">
                          <rect fill="#21468B" width="9" height="6"/>
                          <rect fill="#FFF" width="9" height="4"/>
                          <rect fill="#AE1C28" width="9" height="2"/>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">Dutch Integration</h4>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Strategic integration with existing Dutch strengths in energy transition, precision manufacturing, and logistics
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Integration Strategy: Best-of-All-Worlds Approach</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                          These initiatives will be integrated in a pragmatic, Dutch manner: pilot-led, regionally balanced, SME-inclusive, and built through stakeholder consensus (the Dutch "polder" approach). The goal is to capture high-value opportunities while preserving social cohesion, fair taxation and broad-based regional benefits.
                        </p>
                        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                          Sources: <a href="https://www.government.nl/ministries/ministry-of-economic-affairs-and-climate-policy" target="_blank" rel="noopener noreferrer" className="underline">Ministry of Economic Affairs</a> · <a href="https://www.cpb.nl/en" target="_blank" rel="noopener noreferrer" className="underline">CPB</a> · <a href="https://www.oecd.org/competition/" target="_blank" rel="noopener noreferrer" className="underline">OECD</a>
                        </div>
                      <ul className="space-y-2">
                        <li className="flex items-start text-sm">
                          <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">1.</span>
                          <span><strong>Green Energy Financial Complex</strong> - Use pilot financing windows and public–private co-investment structures to mobilise capital for energy-transition projects, prioritising local suppliers, circular value chains and long-term regional job creation while safeguarding fiscal fairness.</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">2.</span>
                          <span><strong>High-Tech Manufacturing IP Platform</strong> - Build IP management capabilities around existing manufacturing clusters with clear SME access rules, shared R&D facilities, and transparent incentives that reward domestic value capture without eroding tax base or public trust.</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">3.</span>
                          <span><strong>Digital Logistics Optimization</strong> - Combine Dutch logistics strengths with modular digital pilots (ports, transport corridors, customs facilitation) that scale nationally when evaluated against productivity, emissions and regional inclusion metrics.</span>
                        </li>
                        <li className="flex items-start text-sm">
                          <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">4.</span>
                          <span><strong>Implementation Principles</strong> - Apply small-scale pilots, independent evaluation, clear SME participation rules, worker reskilling commitments, and sunset clauses for temporary incentives to ensure accountability and adaptability.</span>
                        </li>
                      </ul>
                  </div>
                </div>

                {/* From the United Kingdom */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="md:col-span-1 bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border border-yellow-100 dark:border-yellow-800/30">
                    <div className="flex items-center mb-3">
                      <div className="w-6 h-4 mr-2 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
                          <rect width="60" height="30" fill="#012169" />
                          <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="4" />
                          <path d="M0 0 L60 30 M60 0 L0 30" stroke="#FFFFFF" strokeWidth="2" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">From the United Kingdom</h4>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Coordinated public funding, investor mobilisation and delivery reforms that accelerate frontier industries (AI, semiconductors, clean energy) and regional flagship projects.
                    </p>
                    <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                      <a href="/data/uk-is8-q4-2025.json" target="_blank" rel="noopener noreferrer">Source: IS-8 Q4 2025 data</a>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Dutch Adaptation: UK Lessons</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      The UK provides practical delivery levers that the Netherlands can adopt selectively to complement its diversified growth model:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold mr-2">1.</span>
                        <span><strong>Multi-year commitment:</strong> Use targeted multi-year public allocations to provide certainty for long-term projects and unlock private co-investment.</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold mr-2">2.</span>
                        <span><strong>Delivery acceleration:</strong> Implement planning and grid-connection accelerators to reduce time-to-market for strategic capital projects.</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold mr-2">3.</span>
                        <span><strong>Market-shaping procurement:</strong> Deploy Advance Market Commitments and early-buyer programmes to de-risk early-stage technologies.</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold mr-2">4.</span>
                        <span><strong>Investor mobilisation:</strong> Establish dedicated investor vehicles to channel pension and institutional capital into strategic infrastructure and scale-ups.</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold mr-2">5.</span>
                        <span><strong>Skills & R&D pairing:</strong> Pair Technical Excellence Colleges and research compute access with funding programmes to ensure talent and innovation capacity scale together.</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
                      These measures should be tailored to Dutch governance and social priorities, keeping fair taxation and regional balance as core principles.
                    </p>
                  </div>
                </div>
                
                {/* Timeline and Projections */}
                <div className="mt-2">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Implementation Timeline & GDP Impact</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-50 dark:bg-neutral-800">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Phase</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Timeline</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Focus Areas</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">GDP Per Capita Impact</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-neutral-900 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Phase 1: Foundation</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">2025-2026</td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Regulatory framework, incentives design</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">+1.2% additional</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Phase 2: Implementation</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">2026-2028</td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Hub creation, IP platform development</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">+3.8% additional</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Phase 3: Optimization</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">2028-2030</td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Full integration, scaling successful models</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">+5.3% additional</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Total Impact:</span> The successful implementation of these cross-country adapted strategies is projected to boost GDP per capita growth by an additional 10.3% beyond baseline projections by 2030, increasing the total projected growth from 18.1% to 28.4% (2025-2030).
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Considerations Section */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Balanced Implementation Approach
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                These initiatives are designed to selectively adopt high-yield elements from Ireland and Luxembourg while maintaining the Netherlands' commitment to:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-amber-600 dark:text-amber-400 font-bold mr-2">•</span>
                  <span>Economic resilience through diversification across multiple sectors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 dark:text-amber-400 font-bold mr-2">•</span>
                  <span>Fair taxation principles and international tax cooperation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 dark:text-amber-400 font-bold mr-2">•</span>
                  <span>Balanced economic development across regions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 dark:text-amber-400 font-bold mr-2">•</span>
                  <span>Social inclusion and broad-based prosperity</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Expected Outcomes by 2030
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xl">
                    28%
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Total GDP Per Capita Growth</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">From €52,037 to €66,842 (2025-2030)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xl">
                    40%
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Increase in High-Value Jobs</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">In targeted sectors with {'>'}€500K revenue/employee</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                    €14B
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Total Strategic Investment</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Public-private partnership funding</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
