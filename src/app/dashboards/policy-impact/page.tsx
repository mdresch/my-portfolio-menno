import React from "react";

export default function PolicyImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Policy Impact Dashboard</h1>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Policy Impact Overview</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">This dashboard provides a high-level overview of how recent policy changes and government interventions are influencing key economic indicators and market outcomes. Use this dashboard to understand the effects of fiscal, monetary, and regulatory policies on the economy.</p>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200 mb-4">
          <li><strong>Fiscal Policy:</strong> Government spending and taxation decisions that impact economic growth, employment, and inflation.</li>
          <li><strong>Monetary Policy:</strong> Central bank actions (like interest rate changes) that influence inflation, currency strength, and borrowing costs.</li>
          <li><strong>Regulatory Policy:</strong> Laws and regulations affecting business operations, trade, and investment.</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/40 p-4 rounded dark:text-blue-100">
            <h3 className="font-semibold mb-2">Recent Policy Highlights</h3>
            <ul className="list-disc ml-5 text-sm">
              <li>Interest rate hikes to combat inflation in major economies</li>
              <li>New trade agreements and tariff adjustments</li>
              <li>Stimulus packages to support post-pandemic recovery</li>
              <li>Regulatory changes in technology and energy sectors</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/40 p-4 rounded dark:text-green-100">
            <h3 className="font-semibold mb-2">Key Market Outcomes</h3>
            <ul className="list-disc ml-5 text-sm">
              <li>Shifts in stock market performance following policy announcements</li>
              <li>Changes in consumer and business confidence</li>
              <li>Fluctuations in inflation and employment rates</li>
              <li>Impacts on trade balances and currency values</li>
            </ul>
          </div>
        </div>
        <div className="my-10 p-6 bg-green-50 dark:bg-green-900/40 rounded dark:text-green-100">
          <h2 className="text-2xl font-semibold mb-4">Economic Forecasts Based on Policy Changes</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-200">Recent policy changes are designed to achieve several key economic objectives. Below are the main objectives and forecasted outcomes under different scenarios (low, neutral, high impact) for the next 1-2 years, as well as 5, 15, and 30 year horizons.</p>
          <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200 mb-6">
            <li><strong>Objectives:</strong>
              <ul className="list-disc ml-6">
                <li>Reduce inflation to target range (2-3%)</li>
                <li>Stabilize or lower unemployment rates</li>
                <li>Support sustainable GDP growth</li>
                <li>Enhance business and consumer confidence</li>
                <li>Improve trade balance and currency stability</li>
              </ul>
            </li>
          </ul>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 dark:border-gray-700 mb-4">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-4 py-2 border dark:border-gray-700">Indicator</th>
                  <th className="px-4 py-2 border dark:border-gray-700">1-2 Years</th>
                  <th className="px-4 py-2 border dark:border-gray-700">5 Years</th>
                  <th className="px-4 py-2 border dark:border-gray-700">15 Years</th>
                  <th className="px-4 py-2 border dark:border-gray-700">30 Years</th>
                  <th className="px-4 py-2 border bg-red-100 dark:bg-red-900/40 dark:text-red-100 dark:border-gray-700">Worst Case (Recession)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border font-semibold dark:border-gray-700">Inflation Rate</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 1.8%<br/>Neutral: 2.5%<br/>High: 3.5%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 1.7%<br/>Neutral: 2.2%<br/>High: 3.0%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 1.5%<br/>Neutral: 2.0%<br/>High: 2.8%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 1.5%<br/>Neutral: 2.0%<br/>High: 2.7%</td>
                  <td className="px-4 py-2 border bg-red-50 dark:bg-red-900/40 dark:text-red-100 dark:border-gray-700">Deflation: -0.5%<br/>or Stagflation: 5%+</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-semibold dark:border-gray-700">Unemployment Rate</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 3.2%<br/>Neutral: 3.8%<br/>High: 4.5%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 2.9%<br/>Neutral: 3.5%<br/>High: 4.2%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 2.5%<br/>Neutral: 3.2%<br/>High: 4.0%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 2.2%<br/>Neutral: 3.0%<br/>High: 3.8%</td>
                  <td className="px-4 py-2 border bg-red-50 dark:bg-red-900/40 dark:text-red-100 dark:border-gray-700">7% - 12% (sharp rise)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-semibold dark:border-gray-700">GDP Growth</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 0.8%<br/>Neutral: 2.0%<br/>High: 3.2%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 1.2%<br/>Neutral: 2.3%<br/>High: 3.5%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 1.5%<br/>Neutral: 2.5%<br/>High: 3.8%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 1.7%<br/>Neutral: 2.7%<br/>High: 4.0%</td>
                  <td className="px-4 py-2 border bg-red-50 dark:bg-red-900/40 dark:text-red-100 dark:border-gray-700">-2% to -5% (deep recession)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-semibold dark:border-gray-700">Business Confidence Index</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 95<br/>Neutral: 102<br/>High: 110</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 97<br/>Neutral: 105<br/>High: 115</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 100<br/>Neutral: 108<br/>High: 120</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: 102<br/>Neutral: 110<br/>High: 125</td>
                  <td className="px-4 py-2 border bg-red-50 dark:bg-red-900/40 dark:text-red-100 dark:border-gray-700">80-90 (very low)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-semibold dark:border-gray-700">Trade Balance (% of GDP)</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: -2.5%<br/>Neutral: -1.0%<br/>High: +0.5%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: -2.0%<br/>Neutral: -0.5%<br/>High: +1.0%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: -1.5%<br/>Neutral: 0.0%<br/>High: +1.5%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: -1.0%<br/>Neutral: +0.5%<br/>High: +2.0%</td>
                  <td className="px-4 py-2 border bg-red-50 dark:bg-red-900/40 dark:text-red-100 dark:border-gray-700">-4% or worse (sharp deficit)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-semibold dark:border-gray-700">Currency Strength</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: -5%<br/>Neutral: 0%<br/>High: +3%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: -4%<br/>Neutral: +1%<br/>High: +5%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: -3%<br/>Neutral: +2%<br/>High: +7%</td>
                  <td className="px-4 py-2 border dark:border-gray-700">Low: -2%<br/>Neutral: +3%<br/>High: +10%</td>
                  <td className="px-4 py-2 border bg-red-50 dark:bg-red-900/40 dark:text-red-100 dark:border-gray-700">-10% or more (sharp depreciation)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-gray-700 dark:text-gray-200 text-sm">
            <p><strong>Interpretation:</strong> The actual outcome will depend on global conditions, policy execution, and market sentiment. High-impact scenarios assume effective policy, strong global demand, and positive confidence effects. Low-impact scenarios reflect weak policy transmission or external shocks. Neutral is the most likely if policies are implemented as planned and no major shocks occur.</p>
          </div>
        </div>

        {/* Tariff Rates Section */}
        <div className="my-10 p-6 bg-orange-50 dark:bg-orange-900/40 rounded dark:text-orange-100">
          <h2 className="text-2xl font-semibold mb-4">Current Tariff Rates & Trade Policy Impact</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-200">Tariff rates significantly influence trade flows, consumer prices, and economic growth. Below is an analysis of current tariff structures and their projected economic impacts.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border">
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Current Tariff Rates by Sector</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Automotive:</span>
                  <span className="font-medium">25%</span>
                </div>
                <div className="flex justify-between">
                  <span>Steel & Aluminum:</span>
                  <span className="font-medium">25%</span>
                </div>
                <div className="flex justify-between">
                  <span>Consumer Electronics:</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="flex justify-between">
                  <span>Textiles:</span>
                  <span className="font-medium">20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Agricultural Products:</span>
                  <span className="font-medium">12%</span>
                </div>
                <div className="flex justify-between">
                  <span>Machinery:</span>
                  <span className="font-medium">18%</span>
                </div>
                <div className="flex justify-between">
                  <span>Chemicals:</span>
                  <span className="font-medium">10%</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Overall:</span>
                  <span className="font-bold text-orange-600 dark:text-orange-400">15.6%</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded border">
              <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Trade Policy Scenarios</h3>
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-green-500 pl-3">
                  <div className="font-medium text-green-700 dark:text-green-400">Trade Liberalization</div>
                  <div className="text-gray-600 dark:text-gray-300">Reduce tariffs to 5% average</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">GDP Impact: +0.8% to +1.5%</div>
                </div>
                <div className="border-l-4 border-yellow-500 pl-3">
                  <div className="font-medium text-yellow-700 dark:text-yellow-400">Current Policy</div>
                  <div className="text-gray-600 dark:text-gray-300">Maintain 15.6% average tariffs</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">GDP Impact: -0.2% to -0.5%</div>
                </div>
                <div className="border-l-4 border-red-500 pl-3">
                  <div className="font-medium text-red-700 dark:text-red-400">Trade War Escalation</div>
                  <div className="text-gray-600 dark:text-gray-300">Increase tariffs to 25% average</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">GDP Impact: -1.2% to -2.0%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-4 py-2 border dark:border-gray-700 text-left">Trade Policy Impact</th>
                  <th className="px-4 py-2 border dark:border-gray-700">Short-term (1-2 years)</th>
                  <th className="px-4 py-2 border dark:border-gray-700">Medium-term (5 years)</th>
                  <th className="px-4 py-2 border dark:border-gray-700">Long-term (15+ years)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border font-semibold dark:border-gray-700">Import Volume</td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: +15%<br/>
                    Current: 0%<br/>
                    Escalation: -20%
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: +25%<br/>
                    Current: +2%<br/>
                    Escalation: -35%
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: +40%<br/>
                    Current: +5%<br/>
                    Escalation: -50%
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-semibold dark:border-gray-700">Export Volume</td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: +8%<br/>
                    Current: 0%<br/>
                    Escalation: -15%
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: +18%<br/>
                    Current: +3%<br/>
                    Escalation: -25%
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: +30%<br/>
                    Current: +8%<br/>
                    Escalation: -40%
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-semibold dark:border-gray-700">Consumer Prices</td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: -2.5%<br/>
                    Current: +1.2%<br/>
                    Escalation: +4.8%
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: -3.5%<br/>
                    Current: +0.8%<br/>
                    Escalation: +6.2%
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: -4.0%<br/>
                    Current: +0.5%<br/>
                    Escalation: +7.5%
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-semibold dark:border-gray-700">Manufacturing Employment</td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: +120K jobs<br/>
                    Current: +15K jobs<br/>
                    Escalation: -180K jobs
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: +350K jobs<br/>
                    Current: +45K jobs<br/>
                    Escalation: -420K jobs
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: +600K jobs<br/>
                    Current: +120K jobs<br/>
                    Escalation: -750K jobs
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-semibold dark:border-gray-700">Trade Balance</td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: -$45B<br/>
                    Current: -$15B<br/>
                    Escalation: +$8B
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: -$25B<br/>
                    Current: -$5B<br/>
                    Escalation: +$35B
                  </td>
                  <td className="px-4 py-2 border dark:border-gray-700">
                    Liberalization: -$10B<br/>
                    Current: +$5B<br/>
                    Escalation: +$60B
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded border">
              <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Benefits of Lower Tariffs</h4>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Lower consumer prices</li>
                <li>• Increased trade volume</li>
                <li>• Enhanced competitiveness</li>
                <li>• Supply chain efficiency</li>
                <li>• Innovation stimulation</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border">
              <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-400">Current Policy Effects</h4>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Moderate price increases</li>
                <li>• Protected domestic industries</li>
                <li>• Reduced import competition</li>
                <li>• Government revenue generation</li>
                <li>• Trade relationship tensions</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border">
              <h4 className="font-semibold mb-2 text-red-700 dark:text-red-400">Risks of Higher Tariffs</h4>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Significant price inflation</li>
                <li>• Reduced economic efficiency</li>
                <li>• Trade war escalation</li>
                <li>• Job losses in trade sectors</li>
                <li>• Global supply chain disruption</li>
              </ul>
            </div>
          </div>

          <div className="text-gray-700 dark:text-gray-200 text-sm">
            <p><strong>Trade Policy Note:</strong> Tariff rates directly impact consumer costs, business competitiveness, and international relations. Current average tariff rates of 15.6% represent a significant increase from historical lows of 5-6% during peak globalization periods. The economic impact depends on how other countries respond and whether domestic production can effectively substitute for imports.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
