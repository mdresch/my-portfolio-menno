import React from 'react';

export default function GlobalFinancialStabilityRisksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Global Financial Stability Risks: Trade Uncertainty & Geopolitical Shocks</h1>
        <p className="text-lg text-gray-600">Combined Summary: Financial Stability Risks from Trade Uncertainty and Geopolitical Shocks (Chapters 1 & 2)</p>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Both Chapter 1 ("Enhancing Resilience amid Global Trade Uncertainty") and Chapter 2 ("Geopolitical Risks: Implications for Asset Prices and Financial Stability") highlight a significant increase in risks to global financial stability. This heightened risk stems from a confluence of factors, primarily driven by:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><b>Elevated Geopolitical Risks and Trade Uncertainty:</b> Geopolitical risks, including conflicts, sanctions, and diplomatic tensions, have risen notably, contributing to record-high economic and trade policy uncertainty. The surprise US tariff announcements in April 2025 and subsequent retaliation are prime examples of how such policy uncertainty can trigger financial market turmoil.</li>
          <li><b>Tightening Global Financial Conditions:</b> Global financial conditions have tightened, marked by abrupt asset price movements and increased volatility.</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Findings & Vulnerabilities</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><b>Market Volatility and Asset Price Corrections:</b> Major geopolitical events, especially military conflicts, trigger significant, persistent adverse impacts on asset prices. The April 2025 tariff announcement caused swift and widespread market volatility. Despite recent sell-offs, valuations remain stretched in some segments, foreboding further corrections. Tail risks in markets have also increased.</li>
          <li><b>Strains on Financial Institutions:</b> High leverage among Nonbank Financial Intermediaries (NBFIs) and their interconnectedness with banks pose systemic risks. Strains at highly leveraged NBFIs can amplify market turmoil and spread stress to the broader banking system. Banks face headwinds from trade impacts and potentially understated risks from internal capital models.</li>
          <li><b>Sovereign Bond Market Turbulence:</b> High government debt and increased financing needs come at a time of challenged bond market functioning. Geopolitical events significantly increase sovereign risk premiums, especially for emerging markets and commodity importers with weaker buffers.</li>
          <li><b>Vulnerabilities in Emerging & Frontier Economies:</b> These economies face headwinds from trade tensions, tighter global conditions, high financing needs, and increased capital outflow risks. Nonresident interest in local currency bond markets remains subdued, and frontier economies face high yields and market access risks.</li>
          <li><b>Risks in Specific Sectors & Countries:</b> China faces deflationary pressures from tariffs, bond market risks, and leverage risks from NBFI repo activity. Corporate sectors globally face widening spreads, rising bankruptcies, and refinancing challenges. Households face increased vulnerability from high equity/real estate exposure and rising delinquencies. The commercial real estate sector shows persistent stress in office properties and large refinancing needs.</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Policy Recommendations</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
          <li><b>Strengthen Preparedness and Crisis Management:</b> Ensure financial institutions have tested access to central bank liquidity facilities (including for nonbanks with guardrails) and be ready for early intervention in core markets. Robust recovery and resolution frameworks are essential for dealing with weak or failing institutions.</li>
          <li><b>Calibrate Macroeconomic Policies:</b> Central banks should carefully assess price dynamics and calibrate monetary policy appropriately. Fiscal adjustments should focus on credible, growth-friendly rebuilding of buffers to manage high financing needs and contain borrowing costs.</li>
          <li><b>Enhance Prudential Supervision and Regulation:</b> Fully implement Basel III and other international standards. Conduct intensive, independent supervision, including stress testing bank exposures. Enhance assessment and management of risks from bank-NBFI linkages. Strengthen policies to mitigate risks from nonbank leverage, including better reporting and cross-sectoral coordination.</li>
          <li><b>Utilize Macroprudential Tools:</b> Calibrate macroprudential buffers to increase resilience against shocks or release them to support credit provision during downturns.</li>
          <li><b>Manage Sovereign Debt Proactively:</b> Explore liability management operations to manage refinancing risks. For countries with unsustainable debt, prompt engagement with creditors is crucial for orderly debt treatment.</li>
          <li><b>Tailor Policies for Emerging Markets:</b> Implement policy responses consistent with the IMF's Integrated Policy Framework, including appropriate use of exchange rate flexibility, FX intervention, or capital flow management. Deepen financial markets and improve regulatory frameworks to support hedging. Maintain adequate macroeconomic policy space and reserve buffers. Consider country-specific geopolitical risks in oversight and risk management.</li>
          <li><b>Address Crypto Asset Risks:</b> Implement the IMF/FSB road map and relevant standards to safeguard monetary sovereignty, manage capital flow volatility, ensure clear tax treatment, and monitor/supervise activities under existing regulations.</li>
          <li><b>Enhance International Cooperation:</b> Strengthen multilateral surveillance to monitor global shocks and spillovers. Reinforce the global financial safety net to enable swift and effective mitigation of systemic risks. Financial institutions should devote resources to identifying, quantifying, and managing geopolitical risks in their operations.</li>
        </ol>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-500">Source: IMF Global Financial Stability Report, April 2025</p>
        <div className="mt-4">
          <a href="/risk" className="text-blue-600 hover:underline">← Back to Risk Overview</a>
        </div>
      </footer>
    </div>
  );
}
