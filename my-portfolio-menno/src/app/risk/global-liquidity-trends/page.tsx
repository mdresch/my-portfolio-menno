'use client';

import React from 'react';
import RiskReportCard from '@/components/risk/RiskReportCard';

const GlobalLiquidityTrendsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <RiskReportCard
        title="Global Liquidity Trends Report"
        description="Analysis of global liquidity conditions, central bank interventions, and implications for financial market stability."
        date="January 15, 2025"
        category="Market Risk"
        tags={["Liquidity", "Central Banks", "Market Stability"]}
        imageUrl="/images/risk-liquidity.jpg"
        href="/risk/global-liquidity-trends"
        usePlaceholder={true}
        downloadLinks={[
          { format: "CSV", url: "/data/global-liquidity-data.csv" },
          { format: "JSON", url: "/data/global-liquidity-data.json" }
        ]}
      />
    </div>
  );
};

export default GlobalLiquidityTrendsPage;