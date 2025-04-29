import React from 'react';
import { OverviewDashboard } from '@/components/dashboards/OverviewDashboard';

export default function EconomicIndicatorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Economic Indicators Dashboard</h1>
      <OverviewDashboard />
    </div>
  );
}
