import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import CountrySection from '@/components/risk/CountrySection';

// Dynamically import heavy components to reduce initial load
const ESGSection = dynamic(() => import('@/components/risk/ESGSection'), {
  ssr: true,
  loading: () => <div className="bg-white rounded-lg shadow-md p-6 animate-pulse h-96"></div>
});

export default function Top10MostComplexPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/risk/global-business-complexity-index/trends" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Trends</span>
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Top 10 Most Complex Jurisdictions 2024</h1>
        <p className="text-gray-600 max-w-4xl">
          The Global Business Complexity Index (GBCI) ranks jurisdictions based on complexity factors affecting business operations. 
          This report explores the world's most challenging jurisdictions for business compliance and operations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-red-50 p-4 rounded-lg">
            <span className="text-red-600 font-bold text-xl">31</span>
            <p className="text-sm text-gray-700 mt-1">New decisions per week in Greece</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <span className="text-amber-600 font-bold text-xl">41%</span>
            <p className="text-sm text-gray-700 mt-1">Jurisdictions prepared for ESG legislation</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <span className="text-blue-600 font-bold text-xl">88%</span>
            <p className="text-sm text-gray-700 mt-1">Jurisdictions requiring human rights compliance</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <span className="text-green-600 font-bold text-xl">2024</span>
            <p className="text-sm text-gray-700 mt-1">Year with peak implementation of digital requirements</p>
          </div>
        </div>
      </header>

      <CountrySection 
        id="greece"
        name="Greece"
        rank={1}
        previousRank={2}
        description={
          <>
            <p className="text-gray-700 mb-4">
              Greece has claimed the top spot as the world's most complex jurisdiction for business operations. 
              The primary challenge is an extensive and ever-changing regulatory environment, with up to 31 new decisions 
              published weekly, creating a significant compliance burden even for local professionals.
            </p>
            <p className="text-gray-700">
              And rather than simplifying processes, digitalisation has instead added an additional layer of complexity. 
              One example is MyData, an accounting software necessitating digital submissions, that requires multiple 
              new deadlines across platforms. Limited knowledge of these complexities can often compel foreign investors 
              to seek third-party advisors for A&T and HRP, only increasing costs. Challenges are expected to persist in 
              the short-term as businesses adapt to new requirements, but the long-term outlooks anticipates that 
              digitalisation will simplify operations over time.
            </p>
          </>
        }
        factors={[
          { label: "Accounting & Tax", level: "Very High", percentage: 95 },
          { label: "HR & Payroll", level: "High", percentage: 85 },
          { label: "Digital Infrastructure", level: "Medium-High", percentage: 70 },
          { label: "Regulatory Change Pace", level: "Very High", percentage: 90 }
        ]}
        quote={{
          text: "I believe that 2024 is going to be the worst in terms of complexity and compliance. This is because the majority of the local small and medium-sized accounting firms never thought that data would progress, nor that authorities would introduce such mandatory changes. So now they are facing huge backlog.",
          author: "TMF Greece expert"
        }}
        challenges={[
          { category: "Digital Compliance", description: "MyData platform adaptation requiring regular digital submissions" },
          { category: "Regulatory Pace", description: "Up to 31 decisions and 1 new legislation weekly" },
          { category: "Resource Requirements", description: "Need for specialized local expertise" },
          { category: "Short-term Outlook", description: "Continued complexity as businesses adapt to new systems" }
        ]}
      />

      <CountrySection 
        id="france"
        name="France"
        rank={2}
        description={
          <>
            <p className="text-gray-700 mb-4">
              France remains one of the world's most complex jurisdictions, with rigid labor regulations and extensive 
              documentation requirements. French legislation requires that many business documents be maintained in French, 
              creating language barriers for foreign companies.
            </p>
            <p className="text-gray-700">
              The country's regulatory environment is constantly evolving, with significant changes to accounting, tax, and HR 
              regulations implemented in 2024. These include adjustments to Ultimate Beneficial Owner (UBO) reporting and 
              digital invoicing requirements. Additional compliance pressure stems from various EU directives, including 
              expanded Non-Financial Reporting Directive (NFRD) obligations and Environmental, Social, and Governance (ESG) 
              reporting requirements.
            </p>
          </>
        }
        factors={[
          { label: "Accounting & Tax", level: "Very High", percentage: 90 },
          { label: "HR & Payroll", level: "Very High", percentage: 88 },
          { label: "Digital Infrastructure", level: "Medium", percentage: 65 },
          { label: "Regulatory Change Pace", level: "High", percentage: 80 }
        ]}
        challenges={[
          { category: "Language Requirements", description: "Documentation must be in French" },
          { category: "Labor Laws", description: "Strict regulations increasing operational costs" },
          { category: "New Regulations", description: "UBO reporting and tax changes implemented in 2024" },
          { category: "EU Compliance", description: "Additional reporting under NFRD and ESG rules" }
        ]}
      />

      {/* Additional CountrySection components would be added similarly for remaining countries */}

      {/* ESG Section placeholder - loaded dynamically */}
      <ESGSection />

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Get the Full 2024 Report</h3>
            <p className="text-white opacity-90 mb-4">
              Access the complete GBCI research with detailed insights on all 77 jurisdictions, current trends, 
              and future projections for global business complexity.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-full transition">
              Download Full Report (PDF)
            </button>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg max-w-md">
            <h4 className="font-medium mb-2">The report includes:</h4>
            <ul className="list-disc list-inside space-y-1 opacity-90">
              <li>Detailed complexity analysis for all 77 jurisdictions</li>
              <li>Regional complexity comparisons and trends</li>
              <li>Future projections and risk mitigation strategies</li>
              <li>Expert insights from TMF Group's global specialists</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-12">
        <Link href="/risk/global-business-complexity-index/trends" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Trends Overview
        </Link>
        <Link href="/risk/global-business-complexity-index" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 justify-end">
          Back to Main Index
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
