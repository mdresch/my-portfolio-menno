import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DigitalPaymentChart, SecurityFeaturesChart, CounterfeitNotesChart, BanknoteDenominationChart, StrategicRoadmap } from '@/components/risk/PaymentTenderCharts';

export default function LegalPaymentTenderUKPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Legal Payment Tender Risks in the United Kingdom</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">Ensuring Currency Security and Preventing Counterfeiting</p>
      </header>

      {/* Executive Summary Section */}
      <section className="mb-12">
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 shadow-md border border-blue-100 dark:border-blue-900/50 transition-colors">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Executive Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            The Bank of England's Prudential Regulation Authority (PRA) has released its Business Plan for 2025-26, highlighting key areas of focus related to payment systems, digital money, and the security of legal tender in the United Kingdom. This analysis explores the emerging risks to the UK's monetary system, the regulatory measures being implemented to preserve the value and security of legal payment tender, and strategies to prevent counterfeit currency from gaining traction in illegal payment settlements.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #1</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Digital disruption of traditional monetary systems</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #2</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Advanced counterfeiting technologies</p>
            </div>
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-sm flex-1 border border-gray-100 dark:border-neutral-700 transition-colors">
              <h3 className="font-semibold text-gray-800 dark:text-white transition-colors">Key Risk #3</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">Liquidity challenges during payment system transitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Landscape Section with Chart */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Current Landscape of Legal Tender in the UK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              The concept of legal tender in the UK centers around the official currency—Bank of England notes and Royal Mint coins—as the legally recognized medium for settling debts. As of May 2025, the UK faces several challenges in maintaining the integrity of its currency system.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 transition-colors">
              <li><strong className="dark:text-white">Digital Transformation of Money</strong>: The rapid evolution of digital payment systems and cryptocurrencies is changing how transactions occur, potentially threatening the primacy of traditional legal tender.</li>
              <li><strong className="dark:text-white">Counterfeiting Threats</strong>: Advanced printing and reproduction technologies have made sophisticated counterfeiting operations more accessible, increasing the risk of fake currency entering circulation.</li>
              <li><strong className="dark:text-white">Economic Uncertainty</strong>: Post-pandemic economic pressures, combined with global trade tensions, have created conditions where alternative or illegal payment methods might gain appeal.</li>
            </ul>
          </div>
          <DigitalPaymentChart />
        </div>
      </section>

      {/* Regulatory Developments Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Key Regulatory Developments from the PRA Business Plan 2025-26</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Future of Payments Initiative</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            The Bank of England is continuing its work on innovation in money and payments, with a particular focus on monitoring developments in deposit takers' innovation in deposits, e-money, and stablecoins. This builds upon guidance provided in their 2023 Dear CEO letter and will remain a priority throughout 2025.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Cryptoasset Regulation</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
            The PRA is developing policy to implement the Basel Committee on Banking Supervision (BCBS) standard on banks' cryptoassets exposures in the UK. This regulatory framework aims to establish clear boundaries between traditional legal tender and digital assets, ensuring that cryptoassets do not undermine the stability of the established monetary system.
          </p>
          <p className="text-gray-700 dark:text-gray-300 transition-colors">
            The PRA continues to engage with international partners to assess developments in digital money and cryptoasset markets.
          </p>
        </div>
        
        {/* Regulatory Developments Chart */}
        <SecurityFeaturesChart />

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Liquidity Framework Changes</h3>
          <p className="text-gray-700 dark:text-gray-300 transition-colors">
            Following the events of March 2023, which saw significant deposit outflows from institutions like Silicon Valley Bank and Credit Suisse, the PRA has implemented changes to how firms access sterling central bank reserves. In 2025, the Bank's operating framework will transition to a demand-driven repo-led framework, with the stock of sterling reserves determined by firms' borrowing rather than by extraordinary monetary policy operations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors">Digital Pound Development</h3>
          <p className="text-gray-700 dark:text-gray-300 transition-colors">
            The Bank of England is advancing its work on a potential central bank digital currency (CBDC), the "digital pound," which would serve as an official digital complement to physical banknotes. This initiative aims to ensure that the Bank maintains monetary sovereignty in an increasingly digital financial landscape while offering a secure alternative to private digital currencies that might otherwise challenge the primacy of legal tender.
          </p>
        </div>
      </section>

      {/* Counterfeit Prevention Section with Chart */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Counterfeit Prevention Measures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
              To combat counterfeiting and protect the integrity of UK legal tender, several measures are being implemented or enhanced:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 transition-colors">
              <li><strong className="dark:text-white">Advanced Security Features</strong>: The Bank of England continues to develop and deploy cutting-edge security features in banknotes, making them increasingly difficult to counterfeit. The polymer notes introduced in recent years include multiple layers of security that remain at the forefront of anti-counterfeit technology.</li>
              <li><strong className="dark:text-white">Enhanced Detection Systems</strong>: Financial institutions are being encouraged to implement more sophisticated counterfeit detection systems at points of deposit and withdrawal.</li>
              <li><strong className="dark:text-white">International Cooperation</strong>: The PRA is strengthening its domestic and international relationships to ensure effective regulation and supervision across borders, particularly important for tackling organized counterfeiting operations that often operate transnationally.</li>
              <li><strong className="dark:text-white">Public Education</strong>: Ongoing campaigns to educate retailers, businesses, and the public about security features and how to identify counterfeit currency remain crucial to preventing fake currency from gaining acceptance in day-to-day transactions.</li>
            </ul>
          </div>
          <CounterfeitNotesChart />
        </div>
      </section>

      {/* CTP Regime Implementation Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Critical Third Party (CTP) Regime Implementation</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          The Financial Services and Markets Act 2023 gave HM Treasury the power to designate certain third-party service providers as 'critical' to the UK financial system. This new Critical Third Party (CTP) regime will have significant implications for payment processing and currency handling services, allowing regulators to ensure that entities crucial to the movement and security of legal tender maintain appropriate standards and safeguards.
        </p>
        
        <BanknoteDenominationChart />
      </section>

      {/* Risk Assessment Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">Risk Assessment and Outlook</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 transition-colors">
          The risk to legal tender in the UK operates on multiple levels, from immediate concerns to long-term strategic considerations:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-50 dark:bg-red-950/30 p-5 rounded-lg border-l-4 border-red-500 dark:border-red-700 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Short-term Risks (1-2 years)</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 transition-colors">
              <li><strong className="dark:text-white">Counterfeit Detection Gaps</strong>: As businesses adjust to new banknote designs and security features, there may be a temporary window where detection capabilities lag behind counterfeiting techniques.</li>
              <li><strong className="dark:text-white">Payment System Disruptions</strong>: The transition in the Bank's operating framework for supplying sterling reserves could create short-term liquidity challenges for some financial institutions.</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-600 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Medium-term Risks (3-5 years)</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 transition-colors">
              <li><strong className="dark:text-white">Competition from Stablecoins</strong>: Privately issued stablecoins could gain significant adoption, potentially challenging the primacy of official currency for certain transaction types.</li>
              <li><strong className="dark:text-white">Cross-border Payment Evolution</strong>: Changes in international payment systems could create regulatory gaps that might be exploited for illicit transactions using counterfeit or unofficial currencies.</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-950/30 p-5 rounded-lg border-l-4 border-blue-500 dark:border-blue-700 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">Long-term Strategic Considerations</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 transition-colors">
              <li><strong className="dark:text-white">Digital Pound Implementation</strong>: The successful rollout of a CBDC will be crucial to maintaining the relevance of official legal tender in an increasingly digital economy.</li>
              <li><strong className="dark:text-white">Regulatory Harmonization</strong>: International alignment of regulations governing digital assets and payment systems will be essential to prevent regulatory arbitrage that could undermine UK monetary sovereignty.</li>
            </ul>
          </div>
        </div>
        
        <StrategicRoadmap />
      </section>

      {/* Conclusion Section */}
      <section className="mb-12 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-lg border border-gray-100 dark:border-neutral-800 transition-colors">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">Conclusion</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
          The Bank of England's PRA Business Plan 2025-26 demonstrates a comprehensive approach to protecting the status and security of legal payment tender in the UK. By addressing both traditional counterfeiting threats and emerging digital challenges, the Bank aims to ensure that official UK currency remains the secure, trusted, and valued medium of exchange throughout the economy.
        </p>
        <p className="text-gray-700 dark:text-gray-300 transition-colors">
          Financial institutions, payment service providers, and businesses handling currency should pay close attention to the evolving regulatory framework and take proactive measures to enhance their anti-counterfeiting capabilities and ensure compliance with the emerging rules governing both physical and digital money.
        </p>
      </section>

      {/* References Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">References</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300 transition-colors">
          <li>Bank of England. (2025, April 10). Prudential Regulation Authority Business Plan 2025/26. Retrieved from <a href="https://www.bankofengland.co.uk/prudential-regulation/publication/2025/april/pra-business-plan-2025-26" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.bankofengland.co.uk/prudential-regulation/publication/2025/april/pra-business-plan-2025-26</a></li>
          <li>Bank of England. (2023). Dear CEO Letter on Innovation in Deposits, E-money, and Stablecoins.</li>
          <li>Basel Committee on Banking Supervision. (2024). Standard on Banks' Cryptoassets Exposures.</li>
          <li>Bank of England. (2025). Statement on Changes to the Operating Framework for Supplying Sterling Reserves.</li>
          <li>HM Treasury. (2023). Financial Services and Markets Act 2023: Critical Third Party Regime.</li>
        </ol>
      </section>

      {/* Link back to risk page */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          ← Back to Risk Overview
        </Link>
      </div>
    </div>
  );
}