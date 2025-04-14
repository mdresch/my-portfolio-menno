// Placeholder data mapping representative countries to hypothetical top risks
export const regionalRiskData: { [key: string]: string[] } = {
  // North America Representative
  "United States of America": [
    "Cyber Attack/Data Breach",
    "Business Interruption",
    "Economic Slowdown",
    "Failure to Attract/Retain Talent",
    "Regulatory Changes",
  ],
  // UK
  "United Kingdom": [
    "Economic Slowdown",
    "Business Interruption",
    "Cyber Attack/Data Breach",
    "Regulatory Changes",
    "Failure to Attract/Retain Talent",
  ],
  // Europe Representative (Using Germany as example)
  "Germany": [
    "Economic Slowdown",
    "Energy Price Shock", // Example specific risk
    "Business Interruption",
    "Cyber Attack/Data Breach",
    "Supply Chain Failure",
  ],
  // Asia Pacific Representative (Using China as example)
  "China": [
    "Economic Slowdown",
    "Supply Chain Failure",
    "Geopolitical Instability", // Example specific risk
    "Business Interruption",
    "Increasing Competition",
  ],
  // Latin America Representative (Using Brazil as example)
  "Brazil": [
    "Economic Slowdown",
    "Political Instability", // Example specific risk
    "Regulatory Changes",
    "Commodity Price Risk",
    "Business Interruption",
  ],
  // Middle East & Africa Representative (Using South Africa as example)
  "South Africa": [
    "Business Interruption",
    "Economic Slowdown",
    "Infrastructure Failure", // Example specific risk
    "Unemployment", // Example specific risk
    "Political Instability",
  ],
  // Add more countries or refine as needed
};

// Mapping GeoJSON country names to display names if needed (optional)
export const countryNameMapping: { [key: string]: string } = {
  "United States of America": "United States",
  // Add others if GeoJSON names differ significantly
};

// Country data for Global Business Complexity Index
export const allCountryData = [
  // Americas
  { 
    rank: 1, 
    country: "Brazil", 
    overall: 84, 
    regulatory: 79, 
    tax: 86, 
    corporate: 82, 
    employment: 90,
    trend: "unchanged",
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
    ]
  },
  { 
    rank: 5, 
    country: "Mexico", 
    overall: 75, 
    regulatory: 73, 
    tax: 77, 
    corporate: 72, 
    employment: 78,
    trend: "up",
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
    ]
  },
  { 
    rank: 6, 
    country: "Argentina", 
    overall: 74, 
    regulatory: 72, 
    tax: 78, 
    corporate: 71, 
    employment: 76,
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
    ]
  },
  { 
    rank: 13, 
    country: "Colombia", 
    overall: 65, 
    regulatory: 62, 
    tax: 70, 
    corporate: 65, 
    employment: 63,
    trend: "down",
    highlight: "Improving business environment through digital transformation",
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
    ]
  },
  { 
    rank: 17, 
    country: "United States", 
    overall: 48, 
    regulatory: 45, 
    tax: 55, 
    corporate: 42, 
    employment: 50,
    trend: "unchanged",
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
    ]
  },
  { 
    rank: 20, 
    country: "Canada", 
    overall: 38, 
    regulatory: 35, 
    tax: 45, 
    corporate: 36, 
    employment: 37,
    trend: "unchanged",
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
    ]
  },
  // APAC
  { 
    rank: 3, 
    country: "Indonesia", 
    overall: 78, 
    regulatory: 75, 
    tax: 81, 
    corporate: 74, 
    employment: 82,
    trend: "up",
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
    ]
  },
  { 
    rank: 4, 
    country: "China", 
    overall: 76, 
    regulatory: 80, 
    tax: 74, 
    corporate: 71, 
    employment: 78,
    trend: "unchanged",
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
    ]
  },
  { 
    rank: 7, 
    country: "India", 
    overall: 73, 
    regulatory: 75, 
    tax: 79, 
    corporate: 68, 
    employment: 70,
    trend: "down",
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
    ]
  },
  { 
    rank: 10, 
    country: "Vietnam", 
    overall: 69, 
    regulatory: 70, 
    tax: 73, 
    corporate: 65, 
    employment: 68,
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
    ]
  },
  { 
    rank: 29, 
    country: "Australia", 
    overall: 31, 
    regulatory: 33, 
    tax: 35, 
    corporate: 28, 
    employment: 27,
    trend: "unchanged",
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
    ]
  },
  { 
    rank: 31, 
    country: "Singapore", 
    overall: 27, 
    regulatory: 25, 
    tax: 30, 
    corporate: 24, 
    employment: 30,
    trend: "unchanged",
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
    ]
  },
  // EMEA
  { 
    rank: 2, 
    country: "France", 
    overall: 80, 
    regulatory: 82, 
    tax: 78, 
    corporate: 76, 
    employment: 85,
    trend: "unchanged",
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
    ]
  },
  { 
    rank: 8, 
    country: "Italy", 
    overall: 73, 
    regulatory: 75, 
    tax: 76, 
    corporate: 68, 
    employment: 74,
    trend: "down",
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
    ]
  },
  { 
    rank: 11, 
    country: "Poland", 
    overall: 68, 
    regulatory: 70, 
    tax: 72, 
    corporate: 63, 
    employment: 67,
    trend: "up",
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
    ]
  },
  { 
    rank: 14, 
    country: "Turkey", 
    overall: 64, 
    regulatory: 67, 
    tax: 69, 
    corporate: 60, 
    employment: 59,
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
    ]
  },
  { 
    rank: 18, 
    country: "South Africa", 
    overall: 47, 
    regulatory: 50, 
    tax: 53, 
    corporate: 45, 
    employment: 40,
    trend: "unchanged",
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
    ]
  },
  { 
    rank: 19, 
    country: "United Kingdom", 
    overall: 43, 
    regulatory: 40, 
    tax: 48, 
    corporate: 38, 
    employment: 45,
    trend: "up",
    highlight: "Post-Brexit regulatory changes creating adaptation requirements",
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
    ]
  },
  { 
    rank: 28, 
    country: "Denmark", 
    overall: 32, 
    regulatory: 30, 
    tax: 34, 
    corporate: 29, 
    employment: 36,
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
    ]
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