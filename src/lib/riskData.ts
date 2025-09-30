// Placeholder data mapping representative countries to hypothetical top risks
export const regionalRiskData: { [key: string]: string[] } = {
  // North America Representative
  "United States of America": [
    "Cyber Attack/Data Breach",
    "Economic Slowdown",
    "Geopolitical Tensions",
    "Regulatory Changes",
    "Interest Rate Volatility",
    "Political Uncertainty",
    "Supply Chain Disruption",
    "Inflation Pressure"
  ],
  // UK
  "United Kingdom": [
    "Economic Slowdown",
    "Brexit Impact",
    "Energy Crisis",
    "Political Instability",
    "Cyber Attack/Data Breach",
    "Regulatory Changes",
    "Labor Shortages",
    "Inflation Pressure"
  ],
  // Europe Representative (Using Germany as example)
  "Germany": [
    "Energy Crisis",
    "Economic Recession",
    "Supply Chain Disruption",
    "Manufacturing Decline",
    "Cyber Attack/Data Breach",
    "Regulatory Changes",
    "Labor Shortages",
    "Geopolitical Tensions"
  ],
  // Asia Pacific Representative (Using China as example)
  "China": [
    "Geopolitical Tensions",
    "Economic Slowdown",
    "Property Market Crisis",
    "Trade Wars",
    "Supply Chain Disruption",
    "Regulatory Crackdowns",
    "Demographic Challenges",
    "Technology Restrictions"
  ],
  // Latin America Representative (Using Brazil as example)
  "Brazil": [
    "Political Instability",
    "Economic Volatility",
    "Currency Fluctuation",
    "Commodity Price Risk",
    "Regulatory Changes",
    "Social Unrest",
    "Infrastructure Challenges",
    "Environmental Risks"
  ],
  // Middle East & Africa Representative (Using South Africa as example)
  "South Africa": [
    "Infrastructure Failure",
    "Power Crisis",
    "Political Instability",
    "Economic Stagnation",
    "Unemployment",
    "Crime & Security",
    "Currency Volatility",
    "Social Unrest"
  ],
  // Netherlands
  "Netherlands": [
    "Energy Transition Challenges",
    "Housing Crisis",
    "Regulatory Changes",
    "Cyber Attack/Data Breach",
    "Labor Market Shortages",
    "Climate Adaptation",
    "Agricultural Sector Stress",
    "Economic Slowdown"
  ],
  // Luxembourg
  "Luxembourg": [
    "International Tax Regulation",
    "EU Financial Regulations",
    "Cyber Attack/Data Breach",
    "Economic Slowdown",
    "Financial Sector Volatility",
    "Digital Transformation",
    "Sustainable Finance Compliance",
    "Cross-Border Data Flows"
  ],
  // France
  "France": [
    "Social Unrest",
    "Labor Strikes/Disruption",
    "Pension Reform Backlash",
    "Economic Slowdown",
    "Regulatory Changes",
    "Cyber Attack/Data Breach",
    "Energy Transition",
    "Public Debt Concerns"
  ],
  // Singapore
  "Singapore": [
    "Geopolitical Tensions",
    "Regional Instability",
    "Cyber Attack/Data Breach",
    "Economic Slowdown",
    "Talent Shortage",
    "Climate Change Impact",
    "Trade Route Disruption",
    "Real Estate Bubble Risk"
  ],
  // Australia
  "Australia": [
    "Climate Change Impact",
    "Natural Catastrophes",
    "Economic Slowdown",
    "Geopolitical Tensions",
    "Cyber Attack/Data Breach",
    "Housing Affordability Crisis",
    "Regulatory Changes",
    "Mining Sector Volatility"
  ],
  // India
  "India": [
    "Geopolitical Tensions",
    "Economic Inequality",
    "Regulatory Complexity",
    "Climate Change Impact",
    "Cyber Attack/Data Breach",
    "Infrastructure Gaps",
    "Political Instability",
    "Water Scarcity"
  ],
  // Denmark
  "Denmark": [
    "Energy Security",
    "Economic Slowdown",
    "Cyber Attack/Data Breach",
    "Regulatory Changes",
    "Labor Market Shortages",
    "Climate Transition",
    "Supply Chain Disruption",
    "Healthcare System Pressure"
  ],
  // Spain
  "Spain": [
    "Economic Slowdown",
    "High Unemployment",
    "Political Instability",
    "Energy Dependency",
    "Regulatory Changes",
    "Cyber Attack/Data Breach",
    "Tourism Sector Vulnerability",
    "Regional Tensions"
  ],
  // Portugal
  "Portugal": [
    "Economic Slowdown",
    "Labor Market Shortages",
    "Energy Transition",
    "Regulatory Changes",
    "Cyber Attack/Data Breach",
    "Tourism Dependencies",
    "Public Debt",
    "Digital Divide"
  ],
  // Italy
  "Italy": [
    "Political Instability",
    "Economic Slowdown",
    "Public Debt Crisis",
    "Energy Dependency",
    "Regulatory Changes",
    "Cyber Attack/Data Breach",
    "Banking Sector Stress",
    "Migration Pressures"
  ],
  // Switzerland
  "Switzerland": [
    "Banking Sector Volatility",
    "Regulatory Changes",
    "Economic Slowdown",
    "Cyber Attack/Data Breach",
    "Geopolitical Neutrality Challenges",
    "Financial Sector Volatility",
    "Energy Security",
    "Cross-Border Data Flows"
  ],
  // Add more countries or refine as needed
};

// Mapping GeoJSON country names to display names if needed (optional)
export const countryNameMapping: { [key: string]: string } = {
  "United States of America": "United States",
  // Add others if GeoJSON names differ significantly
};

// Regional averages for complexity metrics
export const regionalAverages = {
  "Americas": {
    region: "Americas",
    overall: 64,
    regulatory: 61,
    tax: 69,
    corporate: 61,
    employment: 66
  },
  "APAC": {
    region: "APAC",
    overall: 59,
    regulatory: 60,
    tax: 62,
    corporate: 55,
    employment: 59
  },
  "EMEA": {
    region: "EMEA",
    overall: 58,
    regulatory: 59,
    tax: 61,
    corporate: 54,
    employment: 58
  }
};

// Country data for Global Business Complexity Index
// Updated with 2024 rankings and historical data (April 2025 update)
export const allCountryData = [
  // Updated rankings based on 2024 data
  { 
    rank: 1, 
    country: "Greece", 
    overall: 85, 
    regulatory: 86, 
    tax: 84, 
    corporate: 82, 
    employment: 88,
    trend: "up",
    highlight: "Multi-layered administrative procedures with complex compliance requirements",
    region: "EMEA",
    challenges: [
      "Complex tax reporting requirements with frequent changes",
      "Multi-layered administrative procedures",
      "Strict labor regulations with significant documentation",
      "Regional variations in regulatory implementation"
    ],
    opportunities: [
      "Expanding digital government services",
      "EU harmonization of certain regulatory areas",
      "Ongoing economic reforms improving business climate",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 6,
      "2023": 2,
      "2024": 1
    }
  },
  { 
    rank: 2, 
    country: "France", 
    overall: 83, 
    regulatory: 82, 
    tax: 81, 
    corporate: 80, 
    employment: 85,
    trend: "down",
    highlight: "Complex labor regulations with strong employee protections",
    region: "EMEA",
    challenges: [
      "Extensive labor code with strong employee protections",
      "Multi-layered administrative procedures requiring specialist knowledge",
      "Complex tax reporting requirements with frequent changes",
      "Significant documentation requirements for business operations"
    ],
    opportunities: [
      "Digital government services reducing administrative burdens",
      "Streamlined incorporation process through online platforms",
      "Government initiatives to simplify business regulations"
    ],
    historicalRanks: {
      "2022": 2,
      "2023": 1,
      "2024": 2
    }
  },
  { 
    rank: 3, 
    country: "Colombia", 
    overall: 81, 
    regulatory: 79, 
    tax: 83, 
    corporate: 78, 
    employment: 82,
    trend: "up",
    highlight: "Complex and frequently changing tax regulations",
    region: "Americas",
    challenges: [
      "Complex tax reporting requirements with frequent modifications",
      "Regional variations in regulatory implementation",
      "Strict labor regulations with significant formality requirements",
      "Bureaucratic procedures for certain business activities"
    ],
    opportunities: [
      "Expanded digital government services reducing administrative burden",
      "Ongoing tax simplification initiatives",
      "Streamlined business registration process through integrated portal",
      "Simplified corporate compliance for smaller entities"
    ],
    historicalRanks: {
      "2022": 5,
      "2023": 5,
      "2024": 3
    }
  },
  { 
    rank: 4, 
    country: "Mexico", 
    overall: 79, 
    regulatory: 78, 
    tax: 80, 
    corporate: 76, 
    employment: 81,
    trend: "unchanged",
    highlight: "Challenging regulatory environment with frequent policy changes",
    region: "Americas",
    challenges: [
      "Frequent changes to tax regulations and reporting requirements",
      "Complex federal, state, and local permit processes",
      "Stringent labor regulations with significant employee protections",
      "Regional variations in enforcement and implementation"
    ],
    opportunities: [
      "Digital tax platform improving filing efficiency",
      "Streamlined incorporation process for certain business types",
      "Growing business service provider ecosystem"
    ],
    historicalRanks: {
      "2022": 4,
      "2023": 4,
      "2024": 4
    }
  },
  { 
    rank: 5, 
    country: "Bolivia", 
    overall: 78, 
    regulatory: 76, 
    tax: 79, 
    corporate: 75, 
    employment: 80,
    trend: "up",
    highlight: "Multi-layered bureaucratic procedures with regional variations",
    region: "Americas",
    challenges: [
      "Complex administrative procedures requiring physical presence",
      "Documentation requirements in Spanish language",
      "Multiple permits and approvals for business operations",
      "Regional variations in regulatory implementation"
    ],
    opportunities: [
      "Gradual digitalization of government services",
      "Emerging professional services ecosystem",
      "Strategic location for regional operations"
    ],
    historicalRanks: {
      "2022": 9,
      "2023": 9,
      "2024": 5
    }
  },
  { 
    rank: 6, 
    country: "Turkey", 
    overall: 77, 
    regulatory: 75, 
    tax: 78, 
    corporate: 74, 
    employment: 79,
    trend: "unchanged",
    highlight: "Evolving regulatory framework with bureaucratic processes",
    region: "EMEA",
    challenges: [
      "Frequent regulatory changes requiring continuous monitoring",
      "Complex tax reporting requirements with detailed documentation",
      "Administrative procedures requiring Turkish language documentation",
      "Regional variations in regulatory implementation"
    ],
    opportunities: [
      "Expanding digital government services reducing paperwork burden",
      "Streamlined business registration processes in major cities",
      "Government initiatives to attract foreign investment",
      "Growing professional services ecosystem supporting compliance"
    ],
    historicalRanks: {
      "2022": 7,
      "2023": 6,
      "2024": 6
    }
  },
  { 
    rank: 7, 
    country: "Brazil", 
    overall: 76, 
    regulatory: 74, 
    tax: 77, 
    corporate: 73, 
    employment: 78,
    trend: "down",
    highlight: "Complex tax system with multiple layers of federal, state, and municipal taxation",
    region: "Americas",
    challenges: [
      "Multi-layered tax system with federal, state, and municipal requirements",
      "Frequent regulatory changes and complex compliance procedures",
      "Extensive documentation requirements for business operations",
      "Strict labor laws with significant employee protections"
    ],
    opportunities: [
      "Ongoing tax simplification initiatives in development",
      "Digital government services gradually expanding",
      "Increasing standardization of corporate requirements across states"
    ],
    historicalRanks: {
      "2022": 1,
      "2023": 3,
      "2024": 7
    }
  },
  { 
    rank: 8, 
    country: "Italy", 
    overall: 75, 
    regulatory: 74, 
    tax: 76, 
    corporate: 72, 
    employment: 77,
    trend: "unchanged",
    highlight: "Multi-layered regulatory framework with regional variations",
    region: "EMEA",
    challenges: [
      "Complex tax system with multiple reporting requirements",
      "Regional regulatory variations adding compliance complexity",
      "Lengthy administrative processes for permits and approvals",
      "Strict labor regulations with significant documentation requirements"
    ],
    opportunities: [
      "Ongoing digitalization of government services",
      "Simplification initiatives for business regulations",
      "Incentives for digital transformation and innovation"
    ],
    historicalRanks: {
      "2022": 8,
      "2023": 8,
      "2024": 8
    }
  },
  { 
    rank: 9, 
    country: "Peru", 
    overall: 74, 
    regulatory: 72, 
    tax: 75, 
    corporate: 71, 
    employment: 76,
    trend: "down",
    highlight: "Complex compliance procedures with regional variations",
    region: "Americas",
    challenges: [
      "Administrative procedures requiring physical presence",
      "Documentation requirements in Spanish language",
      "Multiple permits and approvals for business operations",
      "Regional variations in regulatory implementation"
    ],
    opportunities: [
      "Expanding digital government services",
      "Streamlined business registration in major cities",
      "Growing professional services ecosystem",
      "Strategic location for regional operations"
    ],
    historicalRanks: {
      "2022": 3,
      "2023": 7,
      "2024": 9
    }
  },
  { 
    rank: 10, 
    country: "Kazakhstan", 
    overall: 73, 
    regulatory: 71, 
    tax: 74, 
    corporate: 70, 
    employment: 75,
    trend: "up",
    highlight: "Evolving regulatory framework with bureaucratic procedures",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Kazakh and Russian languages",
      "Frequent regulatory changes requiring continuous monitoring",
      "Multiple permits and approvals for business operations",
      "Regional variations in regulatory implementation"
    ],
    opportunities: [
      "Expanding digital government services",
      "Strategic location connecting Asia and Europe",
      "Growing professional services ecosystem",
      "Economic modernization initiatives"
    ],
    historicalRanks: {
      "2022": 24,
      "2023": 23,
      "2024": 10
    }
  },
  { 
    rank: 11, 
    country: "China's Mainland", 
    overall: 72, 
    regulatory: 75, 
    tax: 70, 
    corporate: 69, 
    employment: 73,
    trend: "up",
    highlight: "Evolving regulatory environment with regional implementation differences",
    region: "APAC",
    challenges: [
      "Regional variations in regulatory implementation and enforcement",
      "Extensive documentation requirements often in Chinese language",
      "Frequent regulatory changes requiring continuous monitoring",
      "Complex approval processes for certain business activities"
    ],
    opportunities: [
      "Digitalization of government services reducing administrative burden",
      "Business registry reforms streamlining certain processes",
      "Special economic zones with simplified regulatory frameworks"
    ],
    historicalRanks: {
      "2022": 14,
      "2023": 15,
      "2024": 11
    }
  },
  { 
    rank: 12, 
    country: "Argentina", 
    overall: 71, 
    regulatory: 70, 
    tax: 73, 
    corporate: 68, 
    employment: 72,
    trend: "up",
    highlight: "Volatile regulatory environment with economic policy uncertainty",
    region: "Americas",
    challenges: [
      "Frequent changes in tax regulations and foreign exchange rules",
      "Complex provincial tax systems with overlapping requirements",
      "Bureaucratic administrative procedures requiring extensive documentation",
      "Currency controls impacting business operations"
    ],
    opportunities: [
      "Digital government services gradually expanding in major provinces",
      "Simplified processes for certain types of small businesses",
      "Growing professional services ecosystem to assist with compliance"
    ],
    historicalRanks: {
      "2022": 12,
      "2023": 10,
      "2024": 12
    }
  },
  { 
    rank: 13, 
    country: "Paraguay", 
    overall: 70, 
    regulatory: 68, 
    tax: 72, 
    corporate: 67, 
    employment: 71,
    trend: "up",
    highlight: "Administrative procedures requiring local presence and documentation",
    region: "Americas",
    challenges: [
      "Documentation requirements in Spanish and Guarani languages",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements",
      "Limited digital government services in certain areas"
    ],
    opportunities: [
      "Expanding digital government services in major cities",
      "Strategic location for regional operations",
      "Growing professional services ecosystem",
      "Emerging business-friendly reforms"
    ],
    historicalRanks: {
      "2022": 19,
      "2023": 19,
      "2024": 13
    }
  },
  { 
    rank: 14, 
    country: "Belgium", 
    overall: 69, 
    regulatory: 67, 
    tax: 71, 
    corporate: 66, 
    employment: 70,
    trend: "down",
    highlight: "Multi-layered governance with regional regulatory variations",
    region: "EMEA",
    challenges: [
      "Multi-language requirements (Dutch/French/German)",
      "Federal and regional regulatory layers creating complexity",
      "Complex tax reporting requirements",
      "Strong labor regulations with significant documentation"
    ],
    opportunities: [
      "Advanced digital government services",
      "EU harmonization of certain regulatory areas",
      "Strategic location at the heart of European markets",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 17,
      "2023": 13,
      "2024": 14
    }
  },

  { 
    rank: 15, 
    country: "Spain", 
    overall: 68, 
    regulatory: 65, 
    tax: 70, 
    corporate: 65, 
    employment: 69,
    trend: "up",
    highlight: "Regional variations with autonomous community governance",
    region: "EMEA",
    challenges: [
      "Autonomous community variations in regulatory requirements",
      "Multi-language considerations in certain regions",
      "Complex tax reporting requirements",
      "Strong labor protection framework"
    ],
    opportunities: [
      "Expanding digital government services",
      "EU harmonization of certain regulatory areas",
      "Strategic location for European and Latin American connections",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 39,
      "2023": 41,
      "2024": 15
    }
  },
  { 
    rank: 16, 
    country: "Indonesia", 
    overall: 67, 
    regulatory: 65, 
    tax: 69, 
    corporate: 64, 
    employment: 68,
    trend: "down",
    highlight: "Decentralized regulations across provinces adding complexity layers",
    region: "APAC",
    challenges: [
      "Decentralized governance creating regulatory fragmentation across 500+ regions",
      "Overlapping permits and licenses at multiple government levels",
      "Frequent changes to business regulations and requirements",
      "Complex labor laws with significant severance requirements"
    ],
    opportunities: [
      "Ongoing business environment reform initiatives",
      "Expanding online single submission system for business licenses",
      "Growing digitalization of government services"
    ],
    historicalRanks: {
      "2022": 11,
      "2023": 11,
      "2024": 16
    }
  },
  { 
    rank: 17, 
    country: "Croatia", 
    overall: 66, 
    regulatory: 64, 
    tax: 68, 
    corporate: 63, 
    employment: 67,
    trend: "up",
    highlight: "Evolving business environment with EU harmonization process",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Croatian language",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements",
      "Regional variations in regulatory implementation"
    ],
    opportunities: [
      "EU harmonization simplifying cross-border operations",
      "Expanding digital government services",
      "Strategic location connecting Central and Southeast Europe",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 34,
      "2023": 20,
      "2024": 17
    }
  },
  { 
    rank: 18, 
    country: "Poland", 
    overall: 65, 
    regulatory: 63, 
    tax: 67, 
    corporate: 62, 
    employment: 66,
    trend: "down",
    highlight: "Evolving regulatory environment with frequent legislative changes",
    region: "EMEA",
    challenges: [
      "Frequent changes to tax regulations requiring continuous monitoring",
      "Complex VAT reporting requirements with detailed documentation",
      "Administrative procedures requiring Polish-language documentation",
      "Strict labor code with significant employee protections"
    ],
    opportunities: [
      "Expanding digital government services reducing paperwork",
      "Streamlined business registration through online platform",
      "Growing professional services ecosystem to support compliance",
      "EU harmonization initiatives simplifying cross-border operations"
    ],
    historicalRanks: {
      "2022": 10,
      "2023": 12,
      "2024": 18
    }
  },
  { 
    rank: 19, 
    country: "South Korea", 
    overall: 64, 
    regulatory: 62, 
    tax: 66, 
    corporate: 61, 
    employment: 65,
    trend: "down",
    highlight: "Modern regulatory framework with some traditional administrative requirements",
    region: "APAC",
    challenges: [
      "Documentation requirements often in Korean language",
      "Complex approval processes for certain business activities",
      "Industry-specific regulatory requirements",
      "Traditional administrative procedures alongside digital transformation"
    ],
    opportunities: [
      "Advanced digital government services reducing paperwork",
      "Streamlined business registration through online platform",
      "Transparent regulatory framework with good guidance",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 16,
      "2023": 16,
      "2024": 19
    }
  },
  { 
    rank: 20, 
    country: "Romania", 
    overall: 63, 
    regulatory: 61, 
    tax: 65, 
    corporate: 60, 
    employment: 64,
    trend: "up",
    highlight: "Evolving business environment with EU harmonization processes",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Romanian language",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements with frequent changes",
      "Regional variations in regulatory implementation"
    ],
    opportunities: [
      "EU harmonization simplifying cross-border operations",
      "Expanding digital government services",
      "Strategic location in Eastern Europe",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 33,
      "2023": 24,
      "2024": 20
    }
  },
  { 
    rank: 21, 
    country: "Chile", 
    overall: 62, 
    regulatory: 60, 
    tax: 64, 
    corporate: 59, 
    employment: 63,
    trend: "down",
    highlight: "Evolving regulatory framework with improving digital services",
    region: "Americas",
    challenges: [
      "Documentation requirements in Spanish language",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements",
      "Industry-specific regulatory requirements"
    ],
    opportunities: [
      "Advanced digital government services platform",
      "Streamlined business registration process in major cities",
      "Transparent regulatory framework with good guidance",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 15,
      "2023": 14,
      "2024": 21
    }
  },
  { 
    rank: 22, 
    country: "Venezuela", 
    overall: 61, 
    regulatory: 59, 
    tax: 63, 
    corporate: 58, 
    employment: 62,
    trend: "unchanged",
    highlight: "Complex administrative procedures with economic uncertainty",
    region: "Americas",
    challenges: [
      "Frequent regulatory changes requiring continuous monitoring",
      "Administrative procedures requiring physical presence",
      "Documentation requirements in Spanish language",
      "Complex foreign exchange considerations"
    ],
    opportunities: [
      "Emerging digital government services in certain areas",
      "Strategic location for regional operations",
      "Specialized professional services for compliance support"
    ],
    historicalRanks: {
      "2022": 21,
      "2023": 22,
      "2024": 22
    }
  },
  { 
    rank: 23, 
    country: "Hungary", 
    overall: 60, 
    regulatory: 58, 
    tax: 62, 
    corporate: 57, 
    employment: 61,
    trend: "up",
    highlight: "Evolving business environment with EU harmonization",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Hungarian language",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements",
      "Industry-specific regulatory requirements"
    ],
    opportunities: [
      "EU harmonization simplifying cross-border operations",
      "Expanding digital government services",
      "Strategic location in Central Europe",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 38,
      "2023": 28,
      "2024": 23
    }
  },
  { 
    rank: 24, 
    country: "Ukraine", 
    overall: 59, 
    regulatory: 57, 
    tax: 61, 
    corporate: 56, 
    employment: 60,
    trend: "down",
    highlight: "Evolving regulatory framework with reform initiatives",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Ukrainian language",
      "Frequent regulatory changes requiring continuous monitoring",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements"
    ],
    opportunities: [
      "Ongoing business environment reform initiatives",
      "Expanding digital government services",
      "Strategic location connecting Europe and Asia",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 31,
      "2023": 17,
      "2024": 24
    }
  },
  { 
    rank: 25, 
    country: "Portugal", 
    overall: 58, 
    regulatory: 56, 
    tax: 60, 
    corporate: 55, 
    employment: 59,
    trend: "up",
    highlight: "Improving business environment with digital transformation",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Portuguese language",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements",
      "Strong labor protection framework"
    ],
    opportunities: [
      "Expanding digital government services",
      "EU harmonization simplifying cross-border operations",
      "Strategic location connecting Europe and emerging markets",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 37,
      "2023": 38,
      "2024": 25
    }
  },
  { 
    rank: 26, 
    country: "Uruguay", 
    overall: 57, 
    regulatory: 55, 
    tax: 59, 
    corporate: 54, 
    employment: 58,
    trend: "up",
    highlight: "Stable regulatory environment with improving digital services",
    region: "Americas",
    challenges: [
      "Documentation requirements in Spanish language",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements",
      "Regional trade compliance considerations"
    ],
    opportunities: [
      "Expanding digital government services",
      "Transparent regulatory framework with good governance",
      "Strategic location for South American operations",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 27,
      "2023": 35,
      "2024": 26
    }
  },
  { 
    rank: 27, 
    country: "Slovakia", 
    overall: 56, 
    regulatory: 54, 
    tax: 58, 
    corporate: 53, 
    employment: 57,
    trend: "up",
    highlight: "Evolving business environment with EU harmonization",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Slovak language",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements",
      "Regional variations in regulatory implementation"
    ],
    opportunities: [
      "EU harmonization simplifying cross-border operations",
      "Expanding digital government services",
      "Strategic location in Central Europe",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 29,
      "2023": 29,
      "2024": 27
    }
  },
  { 
    rank: 28, 
    country: "Egypt", 
    overall: 55, 
    regulatory: 53, 
    tax: 57, 
    corporate: 52, 
    employment: 56,
    trend: "up",
    highlight: "Evolving regulatory framework with modernization initiatives",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Arabic language",
      "Administrative procedures requiring physical presence",
      "Multiple permits for certain business activities",
      "Specialized approvals for certain industries"
    ],
    opportunities: [
      "Expanding digital government services",
      "Strategic location connecting Africa, Europe, and Asia",
      "Ongoing regulatory modernization initiatives",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": "NA",
      "2023": 30,
      "2024": 28
    }
  },
  { 
    rank: 29, 
    country: "Malaysia", 
    overall: 54, 
    regulatory: 52, 
    tax: 56, 
    corporate: 51, 
    employment: 55,
    trend: "down",
    highlight: "Improving business environment with digital transformation",
    region: "APAC",
    challenges: [
      "Industry-specific regulatory requirements",
      "Documentation requirements in multiple languages",
      "Regional variations in regulatory implementation",
      "Specialized approvals for certain business activities"
    ],
    opportunities: [
      "Advanced digital government services platform",
      "Business-friendly regulatory framework",
      "Strategic location in Southeast Asia",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 22,
      "2023": 21,
      "2024": 29
    }
  },
  { 
    rank: 30, 
    country: "Ecuador", 
    overall: 53, 
    regulatory: 51, 
    tax: 55, 
    corporate: 50, 
    employment: 54,
    trend: "up",
    highlight: "Evolving regulatory framework with regional variations",
    region: "Americas",
    challenges: [
      "Documentation requirements in Spanish language",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements",
      "Regional variations in regulatory implementation"
    ],
    opportunities: [
      "Expanding digital government services",
      "Strategic location in South America",
      "Dollarized economy reducing currency complexity",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 40,
      "2023": 40,
      "2024": 30
    }
  },
  { 
    rank: 31, 
    country: "Slovenia", 
    overall: 52, 
    regulatory: 50, 
    tax: 54, 
    corporate: 49, 
    employment: 53,
    trend: "up",
    highlight: "Modern regulatory framework with EU harmonization",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Slovenian language",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements",
      "Strong labor protection framework"
    ],
    opportunities: [
      "Advanced digital government services",
      "EU harmonization simplifying cross-border operations",
      "Strategic location in Central Europe",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 26,
      "2023": 32,
      "2024": 31
    }
  },
  { 
    rank: 32, 
    country: "Austria", 
    overall: 51, 
    regulatory: 49, 
    tax: 53, 
    corporate: 48, 
    employment: 52,
    trend: "up",
    highlight: "Structured regulatory framework with federal variations",
    region: "EMEA",
    challenges: [
      "Documentation requirements in German language",
      "Federal structure with regional variations",
      "Complex tax reporting requirements",
      "Strong labor protection framework"
    ],
    opportunities: [
      "Advanced digital government services",
      "EU harmonization simplifying cross-border operations",
      "Strategic location in Central Europe",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 23,
      "2023": 34,
      "2024": 32
    }
  },
  // Remaining countries (33-79)
  { 
    rank: 33, 
    country: "India", 
    overall: 50, 
    regulatory: 48, 
    tax: 52, 
    corporate: 47, 
    employment: 51,
    trend: "unchanged",
    highlight: "Complex federal structure with state-level implementation variations",
    region: "APAC",
    challenges: [
      "State-by-state regulatory variations creating compliance complexity",
      "Multiple layers of taxation despite GST harmonization",
      "Extensive documentation requirements for regulatory compliance",
      "Labor law variations across states with significant employee protections"
    ],
    opportunities: [
      "Digital India initiative expanding government service delivery",
      "Streamlined business registration through integrated portal",
      "GST implementation simplifying indirect tax structure",
      "Ongoing reforms to reduce administrative burden"
    ],
    historicalRanks: {
      "2022": 25,
      "2023": 33,
      "2024": 33
    }
  },
  { 
    rank: 34, 
    country: "Philippines", 
    overall: 49, 
    regulatory: 47, 
    tax: 51, 
    corporate: 46, 
    employment: 50,
    trend: "down",
    highlight: "Complex administrative procedures with regional variations",
    region: "APAC",
    challenges: [
      "Multiple permits and licenses required at different government levels",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements",
      "Regional variations in regulatory implementation"
    ],
    opportunities: [
      "Ongoing digitalization of government services",
      "English-language business environment",
      "Strong professional services ecosystem",
      "Regulatory reforms to improve business climate"
    ],
    historicalRanks: {
      "2022": 30,
      "2023": 31,
      "2024": 34
    }
  },
  { 
    rank: 35, 
    country: "Russia", 
    overall: 48, 
    regulatory: 50, 
    tax: 50, 
    corporate: 45, 
    employment: 47,
    trend: "up",
    highlight: "Complex administrative procedures with regional variations",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Russian language",
      "Multi-layered regulatory framework with frequent changes",
      "Complex tax reporting requirements",
      "Regional variations in regulatory implementation"
    ],
    opportunities: [
      "Expanding digital government services",
      "Strategic location spanning Europe and Asia",
      "Specialization zones with simplified procedures",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 32,
      "2023": 36,
      "2024": 35
    }
  },
  { 
    rank: 36, 
    country: "Germany", 
    overall: 47, 
    regulatory: 49, 
    tax: 49, 
    corporate: 44, 
    employment: 46,
    trend: "down",
    highlight: "Comprehensive regulatory framework with federal structure",
    region: "EMEA",
    challenges: [
      "Complex federal structure with state-level variations",
      "Detailed documentation requirements for business operations",
      "Strict labor regulations with works council considerations",
      "Industry-specific regulatory requirements"
    ],
    opportunities: [
      "Expanding digital government services reducing paperwork",
      "Transparent regulatory framework with clear guidance",
      "EU harmonization simplifying cross-border operations",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 20,
      "2023": 25,
      "2024": 36
    }
  },
  { 
    rank: 37, 
    country: "Saudi Arabia", 
    overall: 46, 
    regulatory: 48, 
    tax: 48, 
    corporate: 43, 
    employment: 45,
    trend: "new",
    highlight: "Rapidly modernizing business environment with Vision 2030 reforms",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Arabic language",
      "Specialized approvals for certain business activities",
      "Foreign ownership restrictions in certain sectors",
      "Workforce nationalization requirements (Saudization)"
    ],
    opportunities: [
      "Rapid digital transformation of government services",
      "Significant regulatory reforms improving business climate",
      "Strategic position in Middle East markets",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": "New",
      "2023": "New",
      "2024": 37
    }
  },
  { 
    rank: 38, 
    country: "Japan", 
    overall: 45, 
    regulatory: 47, 
    tax: 47, 
    corporate: 42, 
    employment: 44,
    trend: "up",
    highlight: "Traditional administrative procedures with modern digital initiatives",
    region: "APAC",
    challenges: [
      "Documentation requirements often in Japanese language",
      "Traditional administrative procedures requiring physical stamps (hanko)",
      "Complex approval processes for certain business activities",
      "Industry-specific regulatory requirements"
    ],
    opportunities: [
      "Accelerating digital transformation of government services",
      "Regulatory reforms to attract international business",
      "Strong rule of law with predictable enforcement",
      "Sophisticated professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 51,
      "2023": 43,
      "2024": 38
    }
  },
  { 
    rank: 39, 
    country: "Panama", 
    overall: 44, 
    regulatory: 46, 
    tax: 46, 
    corporate: 41, 
    employment: 43,
    trend: "down",
    highlight: "Increasing regulatory transparency with ongoing reforms",
    region: "Americas",
    challenges: [
      "Complex procedures for certain business activities",
      "Compliance with international transparency standards",
      "Documentation requirements for business operations",
      "Regional variations in implementation of regulations"
    ],
    opportunities: [
      "Expanding digital government services",
      "Strategic location for regional operations",
      "Ongoing regulatory modernization initiatives"
    ],
    historicalRanks: {
      "2022": 35,
      "2023": 27,
      "2024": 39
    }
  },
  { 
    rank: 40, 
    country: "United Arab Emirates", 
    overall: 43, 
    regulatory: 45, 
    tax: 41, 
    corporate: 40, 
    employment: 42,
    trend: "up",
    highlight: "Business-friendly environment with specialized economic zones",
    region: "EMEA",
    challenges: [
      "Emirate-level variations in certain regulatory areas",
      "Documentation requirements in Arabic and English",
      "Specialized approvals for certain business activities",
      "Evolving tax framework with VAT implementation"
    ],
    opportunities: [
      "Advanced digital government services platform",
      "Specialized economic zones with streamlined procedures",
      "Strategic location connecting global markets",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 61,
      "2023": 53,
      "2024": 40
    }
  },
  { 
    rank: 41, 
    country: "Serbia", 
    overall: 42, 
    regulatory: 44, 
    tax: 44, 
    corporate: 39, 
    employment: 41,
    trend: "up",
    highlight: "Evolving business environment with EU alignment reforms",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Serbian language",
      "Administrative procedures requiring physical presence",
      "Multiple permits for certain business activities",
      "Complex tax reporting requirements"
    ],
    opportunities: [
      "Expanding digital government services",
      "Strategic location in Southeast Europe",
      "EU alignment simplifying regulatory framework",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 41,
      "2023": 42,
      "2024": 41
    }
  },
  { 
    rank: 42, 
    country: "Sweden", 
    overall: 41, 
    regulatory: 39, 
    tax: 43, 
    corporate: 38, 
    employment: 40,
    trend: "down",
    highlight: "Modern regulatory framework with digital excellence",
    region: "EMEA",
    challenges: [
      "Strong labor regulations with collective agreements",
      "Industry-specific regulatory requirements",
      "Documentation in Swedish for certain procedures",
      "Environmental compliance in various operations"
    ],
    opportunities: [
      "World-class digital government services",
      "Transparent regulatory framework with clear guidance",
      "Streamlined business registration process",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 13,
      "2023": 39,
      "2024": 42
    }
  },
  { 
    rank: 43, 
    country: "Bulgaria", 
    overall: 40, 
    regulatory: 42, 
    tax: 42, 
    corporate: 37, 
    employment: 39,
    trend: "up",
    highlight: "Evolving business environment with EU harmonization",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Bulgarian language",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements",
      "Regional variations in regulatory implementation"
    ],
    opportunities: [
      "Expanding digital government services",
      "EU harmonization simplifying cross-border operations",
      "Strategic location in Southeast Europe",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 50,
      "2023": 55,
      "2024": 43
    }
  },
  { 
    rank: 44, 
    country: "Guatemala", 
    overall: 39, 
    regulatory: 41, 
    tax: 41, 
    corporate: 36, 
    employment: 38,
    trend: "down",
    highlight: "Complex compliance requirements with regional variations",
    region: "Americas",
    challenges: [
      "Administrative procedures requiring physical presence",
      "Documentation requirements in Spanish language",
      "Regional variations in regulatory implementation",
      "Limited digital government services in certain areas"
    ],
    opportunities: [
      "Strategic location for regional business operations",
      "Expanding professional services sector",
      "Gradual digitalization of government services"
    ],
    historicalRanks: {
      "2022": 36,
      "2023": 37,
      "2024": 44
    }
  },
  { 
    rank: 45, 
    country: "Canada", 
    overall: 38, 
    regulatory: 40, 
    tax: 40, 
    corporate: 35, 
    employment: 37,
    trend: "up",
    highlight: "Provincial variations creating moderate complexity for nationwide operations",
    region: "Americas",
    challenges: [
      "Different regulatory frameworks across provinces and territories",
      "Multiple tax authorities requiring separate filings",
      "Quebec's distinct legal system creating additional compliance requirements",
      "Language requirements for documentation in certain provinces"
    ],
    opportunities: [
      "Advanced digital government services reducing administrative burden",
      "Harmonized sales tax in many provinces simplifying compliance",
      "Transparent regulatory processes with good government guidance",
      "Streamlined business formation with efficient online systems"
    ],
    historicalRanks: {
      "2022": 52,
      "2023": 48,
      "2024": 45
    }
  },
  { 
    rank: 46, 
    country: "Dominican Republic", 
    overall: 37, 
    regulatory: 39, 
    tax: 39, 
    corporate: 34, 
    employment: 36,
    trend: "down",
    highlight: "Evolving regulatory framework with ongoing modernization",
    region: "Americas",
    challenges: [
      "Administrative procedures requiring in-person presence",
      "Documentation requirements in Spanish language",
      "Varying interpretations of regulations by officials",
      "Complex tax reporting requirements"
    ],
    opportunities: [
      "Expanding digital government services",
      "Strategic location for Caribbean operations",
      "Ongoing regulatory modernization initiatives"
    ],
    historicalRanks: {
      "2022": 28,
      "2023": 18,
      "2024": 46
    }
  },
  { 
    rank: 47, 
    country: "Singapore", 
    overall: 36, 
    regulatory: 34, 
    tax: 38, 
    corporate: 33, 
    employment: 35,
    trend: "up",
    highlight: "Global leader in streamlined business administration",
    region: "APAC",
    challenges: [
      "Specific compliance requirements for regulated industries",
      "Detailed documentation needed for certain transactions",
      "Strict work pass regulations for foreign employees",
      "Regular reporting requirements for corporate entities"
    ],
    opportunities: [
      "World-leading digital government services platform",
      "Business registration possible in under 24 hours",
      "Integrated tax filing system with automated calculations",
      "Clear regulatory guidance with strong government support"
    ],
    historicalRanks: {
      "2022": 58,
      "2023": 59,
      "2024": 47
    }
  },
  { 
    rank: 48, 
    country: "Qatar", 
    overall: 35, 
    regulatory: 37, 
    tax: 33, 
    corporate: 32, 
    employment: 34,
    trend: "up",
    highlight: "Modernizing business environment with digital transformation",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Arabic language",
      "Specialized approvals for certain business activities",
      "Foreign ownership restrictions in certain sectors",
      "Workforce nationalization requirements (Qatarization)"
    ],
    opportunities: [
      "Expanding digital government services",
      "Specialized economic zones with streamlined procedures",
      "Strategic location in Gulf region",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 55,
      "2023": 58,
      "2024": 48
    }
  },
  { 
    rank: 49, 
    country: "Vietnam", 
    overall: 34, 
    regulatory: 36, 
    tax: 36, 
    corporate: 31, 
    employment: 33,
    trend: "down",
    highlight: "Evolving regulatory framework with improving digital services",
    region: "APAC",
    challenges: [
      "Frequent regulatory changes requiring continuous monitoring",
      "Complex licensing requirements for many business activities",
      "Inconsistent regulatory interpretation in different provinces",
      "Documentation requirements often requiring Vietnamese language"
    ],
    opportunities: [
      "Expanding e-government services reducing administrative burden",
      "Ongoing business environment reforms simplifying procedures",
      "Increasing standardization of regulatory implementation",
      "Growing professional services sector to support compliance"
    ],
    historicalRanks: {
      "2022": 42,
      "2023": 46,
      "2024": 49
    }
  },
  { 
    rank: 50, 
    country: "El Salvador", 
    overall: 33, 
    regulatory: 35, 
    tax: 35, 
    corporate: 30, 
    employment: 32,
    trend: "down",
    highlight: "Evolving regulatory framework with digital modernization",
    region: "Americas",
    challenges: [
      "Administrative procedures requiring physical presence",
      "Documentation requirements in Spanish language",
      "Regional variations in regulatory implementation",
      "Limited digital government services in certain areas"
    ],
    opportunities: [
      "Digital transformation initiatives in key government agencies",
      "Strategic location for regional operations",
      "Streamlined business registration in major cities",
      "Growing professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 44,
      "2023": 44,
      "2024": 50
    }
  },
  { 
    rank: 51, 
    country: "Costa Rica", 
    overall: 32, 
    regulatory: 34, 
    tax: 34, 
    corporate: 29, 
    employment: 31,
    trend: "down",
    highlight: "Stable regulatory environment with ongoing modernization",
    region: "Americas",
    challenges: [
      "Administrative procedures requiring physical documentation",
      "Multiple permissions needed for certain business activities",
      "Labor regulations with strong employee protections",
      "Tax compliance requirements for digital businesses"
    ],
    opportunities: [
      "Growing digital government service platform",
      "Stable business environment with policy predictability",
      "Strategic location for regional operations",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 45,
      "2023": 45,
      "2024": 51
    }
  },
  { 
    rank: 52, 
    country: "Taiwan ROC", 
    overall: 31, 
    regulatory: 33, 
    tax: 33, 
    corporate: 28, 
    employment: 30,
    trend: "up",
    highlight: "Modern regulatory framework with digital transformation",
    region: "APAC",
    challenges: [
      "Documentation requirements often in Chinese language",
      "Industry-specific regulatory requirements in certain sectors",
      "Complex approval processes for certain business activities",
      "Specialized licensing for regulated industries"
    ],
    opportunities: [
      "Advanced digital government services platform",
      "Streamlined business registration process",
      "Transparent regulatory framework",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 43,
      "2023": 54,
      "2024": 52
    }
  },
  { 
    rank: 53, 
    country: "Nicaragua", 
    overall: 30, 
    regulatory: 32, 
    tax: 32, 
    corporate: 27, 
    employment: 29,
    trend: "down",
    highlight: "Complex administrative procedures with limited digital services",
    region: "Americas",
    challenges: [
      "Administrative procedures requiring physical presence",
      "Limited digital government services",
      "Documentation requirements in Spanish language",
      "Complex tax reporting requirements"
    ],
    opportunities: [
      "Low operational costs for business activities",
      "Gradual modernization of administrative procedures",
      "Emerging professional services sector"
    ],
    historicalRanks: {
      "2022": 18,
      "2023": 26,
      "2024": 53
    }
  },
  { 
    rank: 54, 
    country: "Thailand", 
    overall: 29, 
    regulatory: 31, 
    tax: 31, 
    corporate: 26, 
    employment: 28,
    trend: "down",
    highlight: "Evolving business environment with regulatory modernization",
    region: "APAC",
    challenges: [
      "Documentation requirements often in Thai language",
      "Multiple licenses required for certain business activities",
      "Foreign business restrictions in certain sectors",
      "Complex approval processes for specialized operations"
    ],
    opportunities: [
      "Expanding digital government services",
      "Regulatory reforms to improve business climate",
      "Strategic location for regional operations",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 49,
      "2023": 52,
      "2024": 54
    }
  },
  { 
    rank: 55, 
    country: "Finland", 
    overall: 28, 
    regulatory: 30, 
    tax: 30, 
    corporate: 25, 
    employment: 27,
    trend: "down",
    highlight: "Digital excellence with transparent regulatory framework",
    region: "EMEA",
    challenges: [
      "Strong labor regulations with collective agreements",
      "Documentation in Finnish/Swedish for certain procedures",
      "Industry-specific regulatory requirements",
      "High environmental compliance standards"
    ],
    opportunities: [
      "World-class digital government services",
      "Transparent regulatory framework with clear guidance",
      "Streamlined business registration process",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 46,
      "2023": 50,
      "2024": 55
    }
  },
  { 
    rank: 56, 
    country: "Switzerland", 
    overall: 27, 
    regulatory: 29, 
    tax: 29, 
    corporate: 24, 
    employment: 26,
    trend: "up",
    highlight: "Efficient federal system with cantonal variations",
    region: "EMEA",
    challenges: [
      "Cantonal variations in certain regulatory areas",
      "Multi-language requirements (German/French/Italian)",
      "Specialized approvals for certain business activities",
      "Complex considerations for non-EU operations"
    ],
    opportunities: [
      "Advanced digital government services",
      "Transparent regulatory framework with clear guidance",
      "Streamlined business registration process",
      "World-class professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 60,
      "2023": 62,
      "2024": 56
    }
  },
  { 
    rank: 57, 
    country: "South Africa", 
    overall: 26, 
    regulatory: 28, 
    tax: 28, 
    corporate: 23, 
    employment: 25,
    trend: "down",
    highlight: "Moderate complexity with strong governance framework",
    region: "EMEA",
    challenges: [
      "Broad-based Black Economic Empowerment compliance requirements",
      "Sector-specific regulatory frameworks for certain industries",
      "Administrative delays in certain government departments",
      "Complex labor relations framework with strong protections"
    ],
    opportunities: [
      "Expanding digital government services reducing paperwork",
      "Well-developed legal system providing regulatory clarity",
      "Strong professional services ecosystem supporting compliance",
      "Transparent regulatory framework with good guidance"
    ],
    historicalRanks: {
      "2022": 48,
      "2023": 51,
      "2024": 57
    }
  },
  { 
    rank: 58, 
    country: "Australia", 
    overall: 25, 
    regulatory: 27, 
    tax: 27, 
    corporate: 22, 
    employment: 24,
    trend: "up",
    highlight: "Advanced digital services creating streamlined business environment",
    region: "APAC",
    challenges: [
      "State-level variations in certain regulatory areas",
      "Complex tax considerations for international operations",
      "Industry-specific regulatory requirements in certain sectors",
      "Employment framework with significant workplace protections"
    ],
    opportunities: [
      "World-class digital government services reducing compliance burden",
      "Transparent regulatory framework with clear guidance",
      "Streamlined business registration and reporting processes",
      "Strong professional services ecosystem supporting compliance"
    ],
    historicalRanks: {
      "2022": 65,
      "2023": 60,
      "2024": 58
    }
  },
  { 
    rank: 59, 
    country: "Israel", 
    overall: 24, 
    regulatory: 26, 
    tax: 26, 
    corporate: 21, 
    employment: 23,
    trend: "up",
    highlight: "Dynamic business environment with innovation focus",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Hebrew language",
      "Specialized approvals for certain business activities",
      "Industry-specific regulatory requirements",
      "Complex tax considerations for international operations"
    ],
    opportunities: [
      "Advanced digital government services",
      "Strong innovation ecosystem with regulatory support",
      "Streamlined processes for technology companies",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 64,
      "2023": 63,
      "2024": 59
    }
  },
  { 
    rank: 60, 
    country: "Honduras", 
    overall: 23, 
    regulatory: 25, 
    tax: 25, 
    corporate: 20, 
    employment: 22,
    trend: "down",
    highlight: "Administrative procedures requiring local expertise",
    region: "Americas",
    challenges: [
      "Limited digital government services in certain areas",
      "Documentation requirements in Spanish language",
      "Administrative procedures requiring physical presence",
      "Varying interpretations of regulations by officials"
    ],
    opportunities: [
      "Strategic location for regional operations",
      "Gradual modernization of administrative procedures",
      "Emerging professional services sector"
    ],
    historicalRanks: {
      "2022": 47,
      "2023": 47,
      "2024": 60
    }
  },
  { 
    rank: 61, 
    country: "Mauritius", 
    overall: 22, 
    regulatory: 24, 
    tax: 20, 
    corporate: 23, 
    employment: 21,
    trend: "up",
    highlight: "Business-friendly environment with international standards",
    region: "EMEA",
    challenges: [
      "Compliance with international transparency standards",
      "Documentation requirements for financial operations",
      "Industry-specific regulations for financial services",
      "Specialized approvals for certain business activities"
    ],
    opportunities: [
      "Efficient business registration process",
      "Strategic location connecting Africa and Asia",
      "Advanced digital services for key business activities",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 62,
      "2023": 64,
      "2024": 61
    }
  },
  { 
    rank: 62, 
    country: "Cyprus", 
    overall: 21, 
    regulatory: 23, 
    tax: 22, 
    corporate: 19, 
    employment: 20,
    trend: "down",
    highlight: "EU-aligned framework with international business focus",
    region: "EMEA",
    challenges: [
      "Compliance with international transparency standards",
      "Specialized approvals for certain business activities",
      "Industry-specific regulations for financial services",
      "Documentation requirements in Greek for certain procedures"
    ],
    opportunities: [
      "EU harmonization simplifying cross-border operations",
      "Strategic location connecting Europe, Asia, and Africa",
      "Favorable tax framework for certain operations",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 53,
      "2023": 56,
      "2024": 62
    }
  },
  { 
    rank: 63, 
    country: "United States of America", 
    overall: 20, 
    regulatory: 22, 
    tax: 23, 
    corporate: 18, 
    employment: 19,
    trend: "up",
    highlight: "State-by-state variations creating compliance complexity for multi-state operations",
    region: "Americas",
    challenges: [
      "Significant regulatory differences across 50 states",
      "Complex multi-jurisdictional tax requirements for businesses operating across states",
      "Varying employment laws by state and locality",
      "Industry-specific regulations requiring specialized compliance"
    ],
    opportunities: [
      "Advanced digital government services at federal level",
      "Streamlined business formation processes in many states",
      "Strong professional services ecosystem to support compliance",
      "Transparent regulatory framework with clear guidance"
    ],
    historicalRanks: {
      "2022": 71,
      "2023": 68,
      "2024": 63
    }
  },
  { 
    rank: 64, 
    country: "Luxembourg", 
    overall: 19, 
    regulatory: 21, 
    tax: 21, 
    corporate: 17, 
    employment: 18,
    trend: "up",
    highlight: "Sophisticated regulatory framework with international focus",
    region: "EMEA",
    challenges: [
      "Multi-language requirements (French/German/Luxembourgish)",
      "Industry-specific regulations for financial services",
      "Compliance with international transparency standards",
      "Specialized approvals for certain business activities"
    ],
    opportunities: [
      "Advanced digital government services",
      "Streamlined business registration process",
      "EU harmonization simplifying cross-border operations",
      "World-class professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 57,
      "2023": 66,
      "2024": 64
    }
  },
  { 
    rank: 65, 
    country: "Guernsey", 
    overall: 18, 
    regulatory: 20, 
    tax: 17, 
    corporate: 19, 
    employment: 17,
    trend: "down",
    highlight: "Business-friendly environment with international standards",
    region: "EMEA",
    challenges: [
      "Compliance with international transparency standards",
      "Industry-specific regulations for financial services",
      "Specialized approvals for certain business activities",
      "Complex considerations for non-EU operations"
    ],
    opportunities: [
      "Efficient business registration process",
      "Favorable operating environment for international businesses",
      "Advanced digital services for key business activities",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 66,
      "2023": 61,
      "2024": 65
    }
  },
  { 
    rank: 66, 
    country: "Norway", 
    overall: 17, 
    regulatory: 19, 
    tax: 19, 
    corporate: 16, 
    employment: 16,
    trend: "up",
    highlight: "Digital excellence with transparent regulatory framework",
    region: "EMEA",
    challenges: [
      "Strong labor regulations with collective agreements",
      "Documentation in Norwegian for certain procedures",
      "Industry-specific regulatory requirements",
      "Complex considerations for non-EU operations"
    ],
    opportunities: [
      "World-class digital government services",
      "Transparent regulatory framework with clear guidance",
      "Streamlined business registration process",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 69,
      "2023": 67,
      "2024": 66
    }
  },
  { 
    rank: 67, 
    country: "Republic of Ireland", 
    overall: 16, 
    regulatory: 18, 
    tax: 18, 
    corporate: 15, 
    employment: 15,
    trend: "down",
    highlight: "Business-friendly environment with EU advantages",
    region: "EMEA",
    challenges: [
      "Industry-specific regulatory requirements in certain sectors",
      "Complex considerations for international operations",
      "Compliance with EU and international standards",
      "Specialized approvals for regulated industries"
    ],
    opportunities: [
      "Advanced digital government services",
      "Streamlined business registration process",
      "EU harmonization simplifying cross-border operations",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 54,
      "2023": 57,
      "2024": 67
    }
  },
  { 
    rank: 68, 
    country: "Malta", 
    overall: 15, 
    regulatory: 17, 
    tax: 16, 
    corporate: 14, 
    employment: 14,
    trend: "up",
    highlight: "EU-aligned framework with international business focus",
    region: "EMEA",
    challenges: [
      "Industry-specific regulations for financial and gaming sectors",
      "Compliance with international transparency standards",
      "Documentation requirements in Maltese and English",
      "Specialized approvals for regulated industries"
    ],
    opportunities: [
      "Streamlined business registration process",
      "EU harmonization simplifying cross-border operations",
      "Strategic location in Mediterranean",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 67,
      "2023": 69,
      "2024": 68
    }
  },
  { 
    rank: 69, 
    country: "Czech Republic", 
    overall: 14, 
    regulatory: 16, 
    tax: 15, 
    corporate: 13, 
    employment: 13,
    trend: "down",
    highlight: "Evolving business environment with EU harmonization",
    region: "EMEA",
    challenges: [
      "Documentation requirements in Czech language",
      "Administrative procedures requiring physical presence",
      "Complex tax reporting requirements",
      "Industry-specific regulatory requirements"
    ],
    opportunities: [
      "Expanding digital government services",
      "EU harmonization simplifying cross-border operations",
      "Strategic location in Central Europe",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 63,
      "2023": 65,
      "2024": 69
    }
  },
  { 
    rank: 70, 
    country: "Jamaica", 
    overall: 13, 
    regulatory: 15, 
    tax: 14, 
    corporate: 12, 
    employment: 12,
    trend: "down",
    highlight: "Improving business environment with regulatory reforms",
    region: "Americas",
    challenges: [
      "Administrative procedures requiring physical presence",
      "Documentation requirements for business operations",
      "Complex approval processes for certain activities",
      "Limited digital government services in certain areas"
    ],
    opportunities: [
      "Ongoing regulatory reform initiatives",
      "Strategic location for Caribbean operations",
      "Expanding professional services sector",
      "English-language business environment"
    ],
    historicalRanks: {
      "2022": 59,
      "2023": 49,
      "2024": 70
    }
  },
  { 
    rank: 71, 
    country: "British Virgin Islands", 
    overall: 12, 
    regulatory: 14, 
    tax: 10, 
    corporate: 13, 
    employment: 11,
    trend: "up",
    highlight: "Streamlined framework for international businesses",
    region: "Americas",
    challenges: [
      "Compliance with international transparency standards",
      "Industry-specific regulations for financial services",
      "Documentation requirements for financial operations",
      "Specialized approvals for regulated activities"
    ],
    opportunities: [
      "Efficient business registration process",
      "Favorable operating environment for international businesses",
      "Advanced digital services for key business activities",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 73,
      "2023": 73,
      "2024": 71
    }
  },
  { 
    rank: 72, 
    country: "Jersey", 
    overall: 11, 
    regulatory: 13, 
    tax: 9, 
    corporate: 12, 
    employment: 10,
    trend: "down",
    highlight: "Sophisticated framework with international standards",
    region: "EMEA",
    challenges: [
      "Compliance with international transparency standards",
      "Industry-specific regulations for financial services",
      "Documentation requirements for financial operations",
      "Complex considerations for international operations"
    ],
    opportunities: [
      "Efficient business registration process",
      "Favorable operating environment for international businesses",
      "Advanced digital services for key business activities",
      "World-class professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 72,
      "2023": 70,
      "2024": 72
    }
  },
  { 
    rank: 73, 
    country: "United Kingdom", 
    overall: 10, 
    regulatory: 12, 
    tax: 11, 
    corporate: 9, 
    employment: 9,
    trend: "down",
    highlight: "Business-friendly environment with evolving post-Brexit framework",
    region: "EMEA",
    challenges: [
      "Evolving post-Brexit regulatory framework requiring monitoring",
      "New trade documentation for EU business relationships",
      "Adaptation to UK-specific standards replacing EU frameworks",
      "Sector-specific regulatory requirements in regulated industries"
    ],
    opportunities: [
      "Advanced digital government services reducing administrative burden",
      "Streamlined business registration through online platform",
      "Strong professional services ecosystem supporting compliance",
      "Transparent regulatory framework with clear guidance"
    ],
    historicalRanks: {
      "2022": 68,
      "2023": 72,
      "2024": 73
    }
  },
  { 
    rank: 74, 
    country: "The Netherlands", 
    overall: 9, 
    regulatory: 11, 
    tax: 12, 
    corporate: 8, 
    employment: 8,
    trend: "up",
    highlight: "Streamlined digital services with business-friendly approach",
    region: "EMEA",
    challenges: [
      "Industry-specific regulatory requirements in certain sectors",
      "Complex considerations for international operations",
      "Documentation requirements in Dutch for certain procedures",
      "Specialized approvals for regulated industries"
    ],
    opportunities: [
      "Advanced digital government services",
      "Streamlined business registration process",
      "EU harmonization simplifying cross-border operations",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 56,
      "2023": 75,
      "2024": 74
    }
  },
  { 
    rank: 75, 
    country: "New Zealand", 
    overall: 8, 
    regulatory: 10, 
    tax: 8, 
    corporate: 7, 
    employment: 7,
    trend: "down",
    highlight: "Simplified regulatory framework with digital excellence",
    region: "APAC",
    challenges: [
      "Geographic isolation affecting international operations",
      "Industry-specific regulatory requirements in certain sectors",
      "Complex considerations for international trade",
      "Specialized approvals for regulated industries"
    ],
    opportunities: [
      "World-class digital government services",
      "Business registration possible in under 24 hours",
      "Transparent regulatory framework with clear guidance",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 70,
      "2023": 71,
      "2024": 75
    }
  },
  { 
    rank: 76, 
    country: "Hong Kong SAR", 
    overall: 7, 
    regulatory: 9, 
    tax: 7, 
    corporate: 6, 
    employment: 6,
    trend: "down",
    highlight: "Global leader in business efficiency and streamlined procedures",
    region: "APAC",
    challenges: [
      "Industry-specific regulatory requirements for financial services",
      "Compliance with international transparency standards",
      "Complex considerations for mainland China connections",
      "Specialized licensing for regulated industries"
    ],
    opportunities: [
      "Highly efficient business registration process",
      "Advanced digital government services platform",
      "Simple tax system with low administrative burden",
      "World-class professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 74,
      "2023": 74,
      "2024": 76
    }
  },
  { 
    rank: 77, 
    country: "Denmark", 
    overall: 6, 
    regulatory: 8, 
    tax: 6, 
    corporate: 5, 
    employment: 5,
    trend: "unchanged",
    highlight: "Digital excellence creating streamlined business environment",
    region: "EMEA",
    challenges: [
      "Specific requirements for regulated sectors",
      "Complex considerations for international operations",
      "Strong employment protections requiring compliance attention",
      "Detailed documentation for certain specialized activities"
    ],
    opportunities: [
      "World-class digital government services minimizing administrative burden",
      "Transparent regulatory framework with excellent guidance",
      "Business registration possible within hours",
      "Integrated reporting systems reducing compliance workload"
    ],
    historicalRanks: {
      "2022": 75,
      "2023": 77,
      "2024": 77
    }
  },
  { 
    rank: 78, 
    country: "Curacao", 
    overall: 5, 
    regulatory: 7, 
    tax: 5, 
    corporate: 4, 
    employment: 4,
    trend: "down",
    highlight: "Streamlined procedures for international businesses",
    region: "Americas",
    challenges: [
      "Limited digital government services in certain areas",
      "Documentation requirements for business operations",
      "Physical presence requirements for certain procedures",
      "Multi-language documentation needs (Dutch, English)"
    ],
    opportunities: [
      "Strategic location for international operations",
      "Favorable tax regime for certain business activities",
      "Ongoing regulatory modernization initiatives",
      "Strong professional services ecosystem"
    ],
    historicalRanks: {
      "2022": 76,
      "2023": 76,
      "2024": 78
    }
  },
  { 
    rank: 79, 
    country: "Cayman Islands", 
    overall: 4, 
    regulatory: 6, 
    tax: 4, 
    corporate: 3, 
    employment: 3,
    trend: "down",
    highlight: "Streamlined international business framework",
    region: "Americas",
    challenges: [
      "Compliance with international transparency standards",
      "Documentation requirements for financial operations",
      "Physical presence requirements for certain procedures",
      "Industry-specific regulations for financial services"
    ],
    opportunities: [
      "Efficient business registration process",
      "Strong professional services ecosystem",
      "Favorable operating environment for international businesses",
      "Advanced digital services for key business activities"
    ],
    historicalRanks: {
      "2022": 77,
      "2023": 78,
      "2024": 79
    }
  }
];

// Function to get appropriate color based on complexity score
export const getComplexityColor = (score: number) => {
  if (score >= 80) return "bg-red-100 text-red-800"; // Very High
  if (score >= 60) return "bg-orange-100 text-orange-800"; // High
  if (score >= 40) return "bg-amber-100 text-amber-800"; // Medium
  if (score >= 20) return "bg-green-100 text-green-800"; // Low
  return "bg-emerald-100 text-emerald-800"; // Very Low
};

// Helper for filtering countries by region
export const getCountriesByRegion = (region: string) => {
  return allCountryData.filter(country => country.region === region);
};

// Get historical rankings for specific years
export const getCountriesByHistoricalRank = (year: string) => {
  return allCountryData
    .filter(country => country.historicalRanks && (country.historicalRanks as any)[year])
    .sort((a, b) => {
      const rankA = (a.historicalRanks as any)[year];
      const rankB = (b.historicalRanks as any)[year];
      
      // Handle "New" entries
      if (rankA === "New") return 1;
      if (rankB === "New") return -1;
      
      return (typeof rankA === "number" && typeof rankB === "number") 
        ? rankA - rankB 
        : 0;
    });
};

// Calculate ranking changes between years
export const getRankingChange = (country: string, yearFrom: string, yearTo: string) => {
  const countryData = allCountryData.find(c => c.country === country);
  if (!countryData?.historicalRanks) return null;
  
  const rankFrom = (countryData.historicalRanks as any)[yearFrom];
  const rankTo = (countryData.historicalRanks as any)[yearTo];
  
  if (rankFrom === "New" || rankTo === "New") return "New";
  if (typeof rankFrom !== "number" || typeof rankTo !== "number") return null;
  
  return rankTo - rankFrom;
};