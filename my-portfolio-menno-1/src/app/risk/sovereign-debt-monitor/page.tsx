'use client';

import React from 'react';
import RiskReportCard from '@/components/risk/RiskReportCard';

const SovereignDebtMonitorPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <RiskReportCard
        title="Sovereign Debt Crisis Risk Monitor"
        description="Analysis of global sovereign debt levels, sustainability metrics, and potential triggers for sovereign debt crises."
        date="November 5, 2024"
        category="Sovereign Risk"
        tags={["Debt", "Government", "Fiscal Policy"]}
        imageUrl="/images/riskmanagement6.jpg"
        href="/risk/sovereign-debt-monitor"
        usePlaceholder={true}
        isComingSoon={true}
        downloadLinks={[
          { format: "CSV", url: "/data/sovereign-debt-data.csv" },
          { format: "JSON", url: "/data/sovereign-debt-data.json" }
        ]}
      />
    </div>
  );
};

export default SovereignDebtMonitorPage;