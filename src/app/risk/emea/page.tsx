import React from 'react';
import EmeaComplexityMap from '../../../components/risk/EmeaComplexityMap';

export const metadata = {
  title: 'EMEA - Global Business Complexity Index',
  description: 'EMEA regional analysis from the Global Business Complexity Index, detailing business complexity and compliance challenges across Europe, Middle East & Africa.',
};

export default function EmeaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">EMEA Regional Overview</h1>
      
      <div className="mb-10">
        <p className="text-lg text-gray-700 mb-4">
          The EMEA region showcases significant variation in business complexity levels, with countries like France 
          and Italy demonstrating high complexity, while nations like Denmark and the Netherlands maintain some of 
          the most streamlined regulatory environments globally.
        </p>
        
        <div className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Regional Complexity Analysis</h2>
          <EmeaComplexityMap />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Key Complexity Factors</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Varying labor regulations across countries</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Complex tax reporting requirements in Southern Europe</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Differences in digital government adoption rates</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Multiple languages and cultural considerations</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Evolving regulatory environments in Eastern Europe</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Regional Trends</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Increasing digitalization of government services</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Growing harmonization of regulations within the EU</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Improved cross-border business operations</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Enhanced transparency in business processes</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Emergence of regional business hubs in the Middle East</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Regional Insights</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Western European countries typically benefit from highly digitalized government services and 
            streamlined business processes, placing them among the least complex jurisdictions globally. 
            Denmark, the Netherlands, and Ireland stand out for their efficient digital-first approaches.
          </p>
          <p className="mb-4">
            In contrast, Southern European nations like France and Italy maintain more complex regulatory 
            environments, with extensive documentation requirements and administrative procedures that 
            businesses must navigate carefully.
          </p>
          <p>
            Middle Eastern markets are rapidly evolving, with countries like the UAE implementing business-friendly 
            reforms that are significantly reducing complexity, while still maintaining necessary regulatory oversight. 
            African markets demonstrate varying levels of complexity, with digitalization efforts beginning to transform 
            the business landscape in several countries.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Country Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">France</h3>
            <p className="text-sm text-gray-700">Rank: 2 | Score: 81</p>
            <p className="mt-2">
              France maintains high complexity through extensive labor regulations and administrative requirements,
              though its digital government services are gradually improving efficiency.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">United Kingdom</h3>
            <p className="text-sm text-gray-700">Rank: 38 | Score: 45</p>
            <p className="mt-2">
              The UK offers moderate complexity with increasingly efficient digital government services
              and a relatively transparent regulatory environment for businesses.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">United Arab Emirates</h3>
            <p className="text-sm text-gray-700">Rank: 36 | Score: 47</p>
            <p className="mt-2">
              The UAE has implemented significant business-friendly reforms in recent years, reducing
              complexity while establishing itself as a regional business hub.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">Denmark</h3>
            <p className="text-sm text-gray-700">Rank: 73 | Score: 25</p>
            <p className="mt-2">
              Denmark features one of the least complex business environments globally, with highly 
              digitalized government services and streamlined regulatory processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}