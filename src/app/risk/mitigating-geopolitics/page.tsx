'use client'; // Assuming potential for client-side interactions later

import React from 'react';
import Link from 'next/link'; // Optional: If you link back

export default function MitigatingGeopoliticsOperationalRisksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10">
        {/* Use text-left or text-center as preferred */}
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Mitigating the Influence of Geopolitics on Operational Risks
        </h1>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">

        <p className="text-gray-700 mb-6 leading-relaxed">
          As the global trade architecture continues to evolve, geopolitical risks are also expected to exacerbate operational risk management challenges for organizations. In particular, the implications of weaker systemic constraints and a less predictable global environment on shock-sensitive public and private finances, conflict, and countervailing regulations are factors to consider.
        </p>

        {/* --- The Growing Role of Political Leaders --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5 uppercase tracking-wide">The Growing Role of Political Leaders in Shaping Outcomes</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Conflicts are occurring nearly twice as frequently as they did in 2005, and the number of international sanctions has increased by 370% since 2017.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Two drivers of the recent surge in conflict and other difficult-to-predict events are the declining adherence among countries to international norms and the widespread fracturing of cooperation, which has previously helped to deter or resolve disputes. According to The Global Risks Report 2025, long-term geopolitical risk projections signal greater challenges ahead as mechanisms for collaboration face ongoing pressure. This breakdown in systemic constraints can also encourage political leaders to act according to their personal incentives and fears, with less regard for a structured response from the international community.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Therefore, while scenario planning remains an important method to enhance organizational preparedness for current or future geopolitical events, adapting scenarios to reflect a less structured or constrained global environment is essential. Organizations should still consider developing scenarios that account for various geopolitical outcomes, such as increased protectionism or regional conflicts, while also accounting for the beliefs, policies, and motivations of political leaders (referenced as Figure 5 in the source document). Neglecting to consider the motivations of individual leaders could overlook a critical factor that increasingly influences foreign policy and business risk outcomes.
          </p>

          {/* Placeholder/Summary for Figure 5 */}
          <div className="my-6 p-4 border border-gray-200 rounded bg-gray-50 text-sm">
            <h4 className="font-semibold text-gray-700 mb-3">Adapting Scenario Planning (Summary from Source Figure 5):</h4>
            <p className="text-gray-600 mb-2">Scenario planning needs to incorporate both structural factors (norms, institutions, alliances, macro-conditions) and individual leader factors (values, experiences, incentives, beliefs, fears).</p>
            <p className="text-gray-600 font-medium mb-1">Overlooking the role of leaders may lead to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 pl-4">
              <li>Incorrectly assuming the rationality of decisions.</li>
              <li>Overvaluing the significance of structural factors in the current system.</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            In such an environment, it is essential for companies, especially those with international supply chains and footprints, to develop geopolitical risk management programs that include scenario planning that is adapted to their unique exposure profile (referenced as Solutions in the source document).
          </p>
        </div>

        {/* --- Implications of Public Debt --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5 uppercase tracking-wide">The Potential Implications of Record Public Debt Levels</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Several factors will likely affect the stability of public and private finances in the years ahead. According to the IMF, global public debt surpassed US$100 trillion at the end of 2024, and S&P predicts an increase in sovereign defaults over the next decade. Meanwhile, others forecast business insolvencies to continue rising this year before stabilizing at elevated levels due to low demand and tight financial conditions.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Given this context, many governments face pressure to implement fiscal consolidation, through lower government spending, higher taxes, or both. However, such consolidation may negatively impact business investment and sentiment. For instance, in 2024, taxation was cited as the primary concern for UK businesses after the government announced fiscal consolidation measures. Conversely, a lack of fiscal consolidation policies in some countries could undermine debt sustainability. As of early 2025, the spread between French and German government bonds, for example, remained near its highest level in a decade as the French Parliament struggled to shrink a 6.1% budget deficit. These situations may heighten the risk of government intervention in areas such as taxes, contracts, and regulation (referenced as Solutions in the source document).
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Brazil is another country that exemplifies this challenge (referenced as Figure 6 in the source document). Despite relatively strong economic growth of above 3% in 2024, the currency fell more than 20% against the dollar in the same year as investors grew increasingly skeptical of the government’s commitment to sustainable fiscal policies.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            In a global environment characterized by high debt and relatively low growth, which is sensitive to geopolitical shocks, a country risk model is a valuable tool for businesses seeking to understand which countries face the greatest risk of default, currency controls, or other interventions (referenced as Figure 6 in the source document). For example, Kenya’s World Risk Review score for strikes, riots, and civil commotion deteriorated by more than 15% in the year and a half preceding the outbreak of widespread unrest in June 2024, providing organizations an advance signal that the country’s security situation was potentially worsening.
          </p>
          {/* Placeholder/Summary for Figure 6 */}
          <div className="my-6 p-4 border border-dashed border-gray-300 text-center text-gray-500 text-sm">
            [Figure 6: Country risk data: World Risk Review - Placeholder showing example scores for various countries across different risk categories like SRCC, Terrorism, War, Economic Risk, Currency Risk, Sovereign Credit, Expropriation, Contract Repudiation, Legal/Regulatory Risk]
          </div>
        </div>

        {/* --- Countervailing Measures --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5 uppercase tracking-wide">Countervailing Measures May Proliferate</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Organizations are already grappling with an exponential increase in the number of sanctions, rules, and regulations with which they must comply. They may soon face the added complexity of countervailing regulations, where governments use regulations to target specific foreign businesses during bilateral disputes.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Regulatory frameworks or laws that allow for restrictions or legal action against entities deemed threats to national interests or security are not new, but until recently, these regulations were typically applied narrowly.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            However, as trade tensions remain elevated, governments have begun to use these measures more broadly, especially as asymmetric countermeasures in response to another country’s trade actions. As a result, some organizations may face direct impacts, such as anti-monopoly investigations or being added to China’s “unreliable entity list,” which could lead to sanctions or trade bans.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To improve visibility of this risk, organizations should track the countervailing regulations affecting other businesses from their country of origin and within the same sector. They should also monitor the overall status of relations between their country and those they operate in. In areas of concern, supply chain diversification may be warranted.
          </p>

          {/* Political Pitfalls Box */}
          <div className="my-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Political pitfalls of optionality</h4>
            <p className="text-yellow-700 text-sm leading-relaxed">
              One way businesses are managing today’s uncertain geopolitical environment and volatile commodity markets is with optionality: The ability to rapidly pivot to pre-prepared alternative plans in response to changing conditions. However, optionality as a risk management strategy may also exacerbate political risks in certain circumstances.
            </p>
            <p className="text-yellow-700 text-sm leading-relaxed mt-2">
              For example, exploring a range of extractive projects can provide a business with the flexibility to allocate future funding according to shifting market conditions. However, in countries where governments prioritize extraction regardless of the licensee’s interpretation of market dynamics, this strategy could increase the risk of forced contract renegotiations or license cancellations. In the most-high risk countries, risk transfer solutions may be a more viable option to help protect investors (referenced as Solutions in the source document).
            </p>
          </div>
        </div>

      </section>

      {/* Optional: Link back to main risk page or home */}
      <div className="mt-12 text-center">
        <Link href="/risk" className="text-blue-600 hover:underline mr-4">
          ← Back to Risk Overview
        </Link>
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}