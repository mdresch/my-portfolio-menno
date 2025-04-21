import React from 'react';
import { PolicyImpactDashboard } from '@/app/dashboards/PolicyImpactDashboard';

export default function PolicyImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Policy Impact Dashboard</h1>
      <PolicyImpactDashboard />
    </div>
  );
}
