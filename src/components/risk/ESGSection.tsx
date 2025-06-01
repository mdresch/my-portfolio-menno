import React from 'react';

type ESGSectionProps = {
  className?: string;
};

export default function ESGSection({ className = '' }: ESGSectionProps) {
  return (
    <>
      <section className="mb-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">ESG Legislation Compliance</h2>
          
          <p className="text-gray-700 mb-6">
            In the majority of jurisdictions, companies are required to abide by at least one form of ESG legislation. 
            Consumer protection and human rights regulations are the most common, with large proportions of jurisdictions 
            requiring both compliance and reporting.
          </p>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Key ESG Regulations by Region</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div>
                <div className="font-medium mb-2">Global Average</div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">ESG Adoption</span>
                    <span className="text-sm font-medium">73%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "73%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2">North America</div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">ESG Adoption</span>
                    <span className="text-sm font-medium">43%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "43%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2">South America</div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">ESG Adoption</span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2">APAC</div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">ESG Adoption</span>
                    <span className="text-sm font-medium">79%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "79%" }}></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2">EMEA</div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">ESG Adoption</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-800">ESG Legislation Preparedness</h3>
              <p className="text-gray-700 mb-4">
                Businesses face varying levels of preparedness for ESG legislation, adding another 
                dimension to global business complexity.
              </p>
              
              <div className="bg-gray-50 p-5 rounded-lg mt-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-40 h-40">
                    {/* Simplified pie chart representation */}
                    <div className="absolute inset-0 rounded-full border-8 border-green-500 border-r-transparent border-b-transparent rotate-45"></div>
                    <div className="absolute inset-0 rounded-full border-8 border-yellow-500 border-l-transparent border-b-transparent rotate-[135deg]"></div>
                    <div className="absolute inset-0 rounded-full border-8 border-red-500 border-t-transparent border-l-transparent rotate-[225deg]"></div>
                    <div className="absolute inset-0 rounded-full border-8 border-gray-300 border-t-transparent border-r-transparent rotate-[315deg]"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">41%</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 mr-2"></div>
                    <span>Prepared but pressured (33%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 mr-2"></div>
                    <span>Prepared, not concerned (8%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 mr-2"></div>
                    <span>Generally unprepared (26%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-300 mr-2"></div>
                    <span>No new ESG legislation (33%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Types of ESG Legislation</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Human Rights</span>
                    <span className="text-sm font-medium">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Consumer Protection</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Greenhouse Gas Emissions</span>
                    <span className="text-sm font-medium">56%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "56%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Sustainability</span>
                    <span className="text-sm font-medium">62%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "62%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mt-6">
            <h3 className="font-medium mb-4">The Future of ESG Compliance</h3>
            <p className="text-gray-700 mb-4">
              Given reporting requirements for ESG are likely to increase, it is likely that companies will continue 
              to feel pressure adapting to these regulations. It is expected that the level of reporting will only 
              become more pronounced - moving away from box-ticking exercises and toward more in-depth metrics.
            </p>
            <p className="text-gray-700">
              The most challenging aspects of ESG compliance include adhering to global sustainability standards (28% overall, 
              46% in APAC) and cross-industry ESG reporting (26% overall, 62% in APAC).
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Hiring and Retention Challenges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Top Hiring Challenges</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ol className="list-decimal pl-5 space-y-2">
                  <li className="text-gray-700">Finding qualified talent</li>
                  <li className="text-gray-700">Competitive compensation</li>
                  <li className="text-gray-700">Work permit/visa restrictions</li>
                  <li className="text-gray-700">Language barriers</li>
                  <li className="text-gray-700">Complex labor regulations</li>
                </ol>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Top Retention Challenges</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ol className="list-decimal pl-5 space-y-2">
                  <li className="text-gray-700">Compensation management</li>
                  <li className="text-gray-700">Limited career advancement</li>
                  <li className="text-gray-700">Work-life balance concerns</li>
                  <li className="text-gray-700">Complicated termination processes</li>
                  <li className="text-gray-700">Cultural integration issues</li>
                </ol>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Regional Complexities</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700"><span className="font-medium">EMEA:</span> Strict labor protection</li>
                  <li className="text-gray-700"><span className="font-medium">Americas:</span> Union influence</li>
                  <li className="text-gray-700"><span className="font-medium">APAC:</span> Work permit challenges</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">
            Despite the barriers in hiring staff, TMF Group experts highlight several areas of opportunity in attracting and retaining talent:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-green-200 rounded-lg p-4 bg-white">
              <h4 className="font-medium mb-2">Specialized Expertise</h4>
              <p className="text-sm text-gray-700">
                Many jurisdictions offer highly skilled and educated workforces with specific expertise in IT, engineering, finance and technology
              </p>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-white">
              <h4 className="font-medium mb-2">Linguistic Capabilities</h4>
              <p className="text-sm text-gray-700">
                Multilingual skills of local workforces present significant opportunities for global business operations
              </p>
            </div>
            <div className="border border-purple-200 rounded-lg p-4 bg-white">
              <h4 className="font-medium mb-2">Remote Work Integration</h4>
              <p className="text-sm text-gray-700">
                Hybrid and remote work policies enable access to talent pools across broader geographic areas
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
