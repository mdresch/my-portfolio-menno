'use client';

import { useState } from 'react';

interface SectorType {
  sector: string;
  revenuePerEmployee: string;
  description: string;
}

interface CompanyType {
  name: string;
  sector: string;
  revenuePerEmployee: string;
  keyRoles: string;
}

interface InternationalComparisonProps {
  ireland: {
    sectors: SectorType[];
    companies: CompanyType[];
  };
  luxembourg: {
    sectors: SectorType[];
    companies: CompanyType[];
  };
}

export default function InternationalComparisonTabs({ ireland, luxembourg }: InternationalComparisonProps) {
  const [activeTab, setActiveTab] = useState<'ireland' | 'luxembourg'>('ireland');

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex -mb-px">
          <button 
            onClick={() => setActiveTab('ireland')} 
            className={`w-1/2 py-4 px-6 text-center border-b-2 font-medium text-sm ${
              activeTab === 'ireland'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Ireland: High-Yield Sectors & Companies
          </button>
          <button 
            onClick={() => setActiveTab('luxembourg')} 
            className={`w-1/2 py-4 px-6 text-center border-b-2 font-medium text-sm ${
              activeTab === 'luxembourg'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            Luxembourg: Financial Services Excellence
          </button>
        </nav>
      </div>
      
      {/* Ireland Detail Section */}
      <div className={`p-6 ${activeTab === 'ireland' ? '' : 'hidden'}`}>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Ireland's High-Value Sectors</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Ireland has positioned itself as a major hub for multinational technology companies and pharmaceutical firms, creating 
          exceptionally high revenue per employee through strategic tax structures and specialized knowledge work. With a GDP per 
          capita of approximately $134,000 (PPP) in 2025, Ireland ranks as Europe's second richest country, largely due to these 
          high-value sectors.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {ireland.sectors.map((sector, index) => (
            <div key={index} className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{sector.sector}</h5>
              <p className="text-emerald-600 dark:text-emerald-400 font-bold mb-2">{sector.revenuePerEmployee}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{sector.description}</p>
            </div>
          ))}
        </div>
        
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Leading Irish-based Companies</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-neutral-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sector</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Revenue/Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Key Roles</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-neutral-900 divide-y divide-gray-200 dark:divide-gray-700">
              {ireland.companies.map((company, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-neutral-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{company.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{company.sector}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400 font-semibold">{company.revenuePerEmployee}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{company.keyRoles}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800/30 rounded-lg">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Key Insight:</span> Ireland's exceptionally high revenue per employee, particularly in tech companies like Apple (€2.64M) and Meta (€2.2M), is significantly influenced by intellectual property arrangements and the country's favorable tax structure for multinational corporations.
          </p>
        </div>
      </div>
      
      {/* Luxembourg Detail Section */}
      <div className={`p-6 ${activeTab === 'luxembourg' ? '' : 'hidden'}`}>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Luxembourg's Financial Services Excellence</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Luxembourg is renowned for its robust financial services sector, particularly in investment fund management and private banking. The country offers a favorable regulatory environment and benefits from being a stable, high-income economy. In 2025, Luxembourg's GDP per capita is projected to be approximately $120,000 (PPP), driven by its specialized financial services industry.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {luxembourg.sectors.map((sector, index) => (
            <div key={index} className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{sector.sector}</h5>
              <p className="text-emerald-600 dark:text-emerald-400 font-bold mb-2">{sector.revenuePerEmployee}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{sector.description}</p>
            </div>
          ))}
        </div>
        
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Leading Luxembourg-based Companies</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-neutral-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Sector</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Revenue/Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Key Roles</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-neutral-900 divide-y divide-gray-200 dark:divide-gray-700">
              {luxembourg.companies.map((company, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-neutral-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{company.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{company.sector}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400 font-semibold">{company.revenuePerEmployee}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{company.keyRoles}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 rounded-lg">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Key Insight:</span> Luxembourg's financial sector leverages its specialized expertise and favorable regulatory environment to manage €5.9 trillion in assets with a relatively small workforce, resulting in exceptionally high revenue per employee figures compared to other European financial centers. The country's focus on investment fund services and specialized financial infrastructure has created one of the highest GDP per capita figures worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
