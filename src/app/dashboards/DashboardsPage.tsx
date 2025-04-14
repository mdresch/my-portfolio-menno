'use client';

import React from 'react';
import Link from 'next/link';
// Import the mock dashboard components
import { OverviewDashboard } from '@/components/dashboards/OverviewDashboard'; // Adjust path if needed
import { PolicyImpactDashboard } from '@/components/dashboards/PolicyImpactDashboard'; // Adjust path if needed
// Import other mock dashboards (Macro, Market) if you create them

export default function DashboardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboards (Mockups)</h1>
        <p className="text-gray-600 mt-2">
          Visualizing economic data and policy impacts using Power BI.
        </p>
      </header>

      {/* Render the mock dashboard components */}
      <div className="space-y-12">
        <OverviewDashboard />
        <PolicyImpactDashboard />
        {/* Add other mock dashboard components here */}
        {/* <MacroDashboard /> */}
        {/* <MarketDashboard /> */}

        {/* You could still keep a section for the actual embed if desired */}
        {/* <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-3">Actual Embedded Dashboard</h2>
          <div className="aspect-w-16 aspect-h-9 border rounded-md overflow-hidden">
            <iframe
              title="Actual Power BI Embed"
              width="100%"
              height="600"
              src={'YOUR_POWER_BI_EMBED_URL'} // Replace with actual URL
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        </section> */}
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}