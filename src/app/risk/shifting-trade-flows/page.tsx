"use client"; // Assuming potential for client-side interactions later

import React from "react";
import Link from "next/link"; // Optional: If you link back

export default function ShiftingTradeFlowsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10">
        {/* Use text-left or text-center as preferred */}
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Enhancing Awareness of the Impacts of Shifting Trade Flows
        </h1>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">

        <p className="text-gray-700 mb-4 leading-relaxed">
          Global trade flows have continually evolved in the post-war era, yet the past five years have seen that evolution trending toward more disruption and protectionism, not less.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          As government interventions in trade have increased fourfold since 2018 (referenced as Figure 1 in the source document), a recent US Federal Reserve study shows that concerns about protectionism have heightened uncertainty among many organizations and in some cases deterred investment. In particular, the study found that organizations with greater uncertainty about trade policy direction, as measured by the Trade Policy Uncertainty Index, reported worse financial performance than their more confident counterparts.
        </p>
        {/* Placeholder for Figure 1 */}
        {/* <div className="my-6 p-4 border border-dashed border-gray-300 text-center text-gray-500 text-sm">
          [Figure 1: Global trade interventions by year - Placeholder]
        </div> */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          These findings suggest that businesses that understand current trading opportunities and have a clear framework for assessing future trade flow developments will likely continue to be better positioned to invest and operate with confidence.
        </p>

        {/* --- The New Global Trade Architecture --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5 uppercase tracking-wide">The New Global Trade Architecture</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Despite current challenges, international trade has shown resilience amid recent disruptions and continues to contribute roughly the same proportion to global GDP as it did a decade ago. However, the landscape of trade has indisputably been changed by increased trade interventions and conflict-induced disruptions.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            These shifts over the past five years have resulted in the emergence of what the International Monetary Fund (IMF) refers to as “connectors” — countries or blocs that serve as mid-stations or passthroughs between previously direct bilateral trading partners such as the US and China.
          </p>

          {/* Example Box */}
          <div className="my-6 p-4 bg-gray-50 border border-gray-200 rounded text-gray-700 text-sm italic">
            Evidence of rapidly shifting trade flows is visible worldwide. For example, since 2022, exports from the United Arab Emirates (UAE) to Russia have tripled, and European Union hydrocarbon imports from India have increased by 260%. Meanwhile, trade to and from the Association of Southeast Asian Nations (ASEAN) has grown by 50%, or US$800 billion, in the same timeframe.
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            However, organizations that trade with connector countries to circumvent existing or anticipated trade controls — or that have suppliers doing the same — may still be prone to trade policy induced disruption in the months and years ahead. This is because, in a scenario of greater decoupling between major trading partners, governments may also impose trade barriers on goods from connectors, especially those that include components from the originally targeted country.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Thus, as companies develop solutions to restructure their supply chains and increase resilience, leaders should recognize that using connectors will not always represent true diversification. Furthermore, companies should be aware of other risks associated with reordering supply chains, including the implications on cybersecurity. Developing supplier relationships and operations in a new country can increase exposure to supply chain cyberattacks, which have risen by 300% since 2020.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            A key question for business leaders wanting to improve their understanding of how trade flows may evolve is whether the current connector model will be sustained or if greater fragmentation between geopolitical blocs is likely to develop. To assist with this assessment, following are three factors that can provide insight.
          </p>
        </div>

        {/* --- Factor i: China's Trade Strategy --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">i. Assess China’s commitment to its current trade strategy</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Soaring export volumes of certain goods (referenced as Figure 2 in the source document) contributed to China becoming the main target of new or expanded trade barriers in 2024. Countries including Thailand, Mexico, Brazil, Canada, India, Vietnam, and Japan imposed or announced restrictions on Chinese steel imports, while the EU, US, Türkiye, and South Africa restricted imports of electric vehicles (EVs) and/or solar cells.
          </p>
          {/* Placeholder for Figure 2 */}
          {/* <div className="my-6 p-4 border border-dashed border-gray-300 text-center text-gray-500 text-sm">
            [Figure 2: China’s export growth relative to 2017 (volume) - Placeholder]
          </div> */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            In an era in which protectionism has regained legitimacy as an economic strategy, China’s intention to continue growing exports in this manner may not be greater than the determination of some other governments to defend domestic industries that they believe are worth protecting. Therefore, if China maintains or increases its manufacturing dominance in politically sensitive sectors, such as green technology, electronics, and steel, then further protectionist trade barriers would be likely in the years ahead. In response, China may impose its own targeted tariffs or use asymmetric policy tools (referenced as countervailing measures on page 11 in the source document).
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Additional tariffs on Chinese exports could also lead to more goods initially being diverted through connector countries, potentially resulting in trade barriers against these connectors. For example, in 2024, India imposed tariffs on certain steel imports from Vietnam, intended in part to disrupt transshipments from China. Companies from countries with politically sensitive or large domestic industries in sectors where China dominates may be most affected by the interplay of these factors. This includes countries such as Germany, Mexico, and South Korea.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Alternative scenarios besides China’s sustained rapid export growth in key sectors include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
            <li>Chinese companies may increase investment in destination markets, bypassing tariffs and providing money and jobs to the regions where their products are sold.</li>
            <li>China’s government may stimulate domestic consumption, reducing the volume of goods exported to potentially unreceptive trade partners.</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Both scenarios present opportunities and risks for affected businesses. Increased Chinese investment in markets such as the EU and Morocco could create demand for raw materials, construction, and supplier inputs. However, these investments and related inputs may face shifting local content requirements for components and technology transfer regulations, and Chinese companies could continue to encounter pressure from Beijing to avoid excessive offshoring of jobs and investment.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Potential political opposition to consumer stimulus within the Chinese Communist Party may limit the likelihood of the second scenario. Further, the Chinese government attributes the country’s export growth to the competitiveness of its firms against foreign companies rather than being the result of state support. Therefore, if the government undertakes any significant efforts to boost domestic consumption, they are unlikely to be directly motivated by a desire to reduce trade imbalances.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Through supply chain mapping, scenario analysis, and a clear understanding of China’s trade policy objectives, companies can assess the potential impacts of China’s trade strategy on global trade dynamics and their own supply chain risks. Sectors that rely on critical minerals, raw materials, and dual-use technologies, as well as high-tech hardware and software products, are most likely to be exposed. Therefore, close monitoring of trade strategies in these areas is especially warranted.
          </p>
        </div>

        {/* --- Factor ii: US Trade Policy Objectives --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">ii. Understand underlying US trade policy objectives</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            To understand how US trade actions may affect an organization’s investment strategy or supply chains, business leaders should first analyze the drivers behind the overall trade policy rather than attempt to assess each policy in isolation. This can help to predict the likelihood and permanence of specific trade actions and may also help to reduce the number of actions businesses need to model.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Possible objectives of US trade policies include:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4 pl-4">
            <li>Using tariffs to re-shore manufacturing jobs or investment or generate revenue.</li>
            <li>Leveraging tariffs for concessions on a range of trade and/or non-trade issues.</li>
          </ol>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Although various country and sector-specific trade policies were announced during the initial phase of the new administration, the two objectives will likely remain, for the most part, mutually exclusive. To pursue the first objective of re-shoring a meaningful level of investment and employment, trade barriers against targeted sectors would likely need to be permanent. This permanence could limit the use of those barriers as negotiating tools. For instance, if the US were to agree to lift a recently imposed or threatened tariff in exchange for a concession on immigration, it might undermine the incentive for companies to return investment to the US. Any trade policy action designed to generate revenue or facilitate tax cuts would also likely need to be permanent.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Additionally, to seriously pursue the second objective, the US would need to maintain substantial, long-term tariffs on major trade partners and connector countries where trade deficits have increased since 2018 (referenced as Figure 3 in the source document). This approach could lead to significant economic disruption, particularly in specific sectors. Businesses may then face greater fragmentation of existing trade flows, requiring major revisions to their supply chains and investment plans.
          </p>
          {/* Placeholder for Figure 3 */}
          {/* <div className="my-6 p-4 border border-dashed border-gray-300 text-center text-gray-500 text-sm">
            [Figure 3: Growth in US bilateral trade deficit, 2018-2023 - Placeholder]
          </div> */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            If the second objective serves as the underlying strategy, and tariffs are used to negotiate concessions on a range of trade and non-trade issues, the current connector architecture of trade may be more sustainable. However, businesses should still consider the willingness of foreign governments to negotiate on issues raised by the US. This can help to predict how quickly agreements might be reached and how long-lasting any trade barriers may be (referenced as Solutions in the source document).
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Shifts in US trade policy may encourage businesses to prioritize risk assessments for their investments or supplier dependencies located in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 pl-4">
            <li>Countries with large or rapidly growing trade deficits with the US.</li>
            <li>Countries or blocs that are unwilling or unable to make the requested or expected concessions (referenced as Figure 4 in the source document).</li>
          </ul>
        </div>

        {/* --- Factor iii: Connector Model Sustainability --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">iii. Consider the extent to which the current connector model will be sustained</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In a period of heightened anxiety among businesses regarding tensions between countries, the ability of connectors to maintain their newfound significance in the global trade architecture may prove crucial for preventing further fragmentation between geopolitical blocs.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            On the one hand, connector countries have limited control over outcomes. As outlined earlier, China’s export and domestic policies, along with the US’s trade objectives, will heavily influence whether the current trade structure can be sustained or if further changes are on the horizon.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            However, connector countries are not powerless. They can continue to benefit from the current trade architecture by improving their infrastructure, enhancing regulations, and increasing labor efficiency and productivity. Indeed, some countries are already setting themselves apart within the current system, while others may find it harder to adapt to both the present and potential future trade landscapes (referenced as Figure 4 in the source document).
          </p>
          {/* Placeholder/Summary for Figure 4 */}
          <div className="my-6 p-4 border border-gray-200 rounded bg-gray-50">
            <h4 className="font-semibold text-gray-700 mb-3">Connector Model Positioning (Summary from Source Figure 4):</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-red-600 mb-1">Potential Challenges Ahead:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Hungary (Balancing US/China)</li>
                  <li>Mexico (USMCA renegotiation, reforms)</li>
                  <li>South Korea (US dependence, trade surplus)</li>
                  <li>Vietnam (Chinese FDI/imports, potential barriers)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-green-600 mb-1">Well-Positioned:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Chile (Stability, resources, policy concerns noted)</li>
                  <li>Malaysia (Limited US trade surplus growth)</li>
                  <li>Morocco (US/EU incentives for green tech)</li>
                  <li>Türkiye (Geopolitics, improving economy, institutional concerns noted)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- Signals to Watch --- */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5 uppercase tracking-wide">Signals to Watch</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            As businesses seek to assess how global trade may continue to evolve, the three factors discussed can serve as valuable signposts for informing geopolitical risk management decisions. However, as there is no crystal ball to predict future challenges and opportunities, organizations should consider likely outcomes and allocate resources accordingly to prepare for potential implications and mitigate associated risks. For example:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6 pl-4">
            <li>
              Connector countries may maintain or expand their roles as links between trading partners. Investing in these countries may not provide additional diversification and certain risks such as supply chain cyber exposure may increase, so risk transfer solutions may still be appropriate (referenced as Solutions in the source document). However, the potential for significant structural trade changes would be limited.
            </li>
            <li>
              Trade tensions may continue to escalate, with government policies targeting connector countries to restrict alternative investment and trading pathways.
            </li>
          </ul>

          {/* Quote Box */}
          <blockquote className="my-6 pl-4 border-l-4 border-gray-400 italic text-gray-600">
            “Greater trade fragmentation may increase the risk of conflict, as a less interconnected world offers fewer disincentives or constraints to conflict.”
          </blockquote>

          <p className="text-gray-700 mb-4 leading-relaxed">
            As businesses navigate the complexities of trade policies and geopolitical uncertainties, consider the following questions when developing a supply chain restructuring strategy:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6 pl-4">
            <li>If trade policies and structures evolve, does your organization have the necessary visibility into its supply chain to understand the implications of various scenarios?</li>
            <li>What strategies are in place to evaluate key risk scenarios, including the potential impacts of climate change on assets and logistic routes?</li>
            <li>As you restructure supply chains, how can your organization avoid unintended secondary consequences, such as concentrating assets in fewer physical locations or increasing exposure to political flashpoints?</li>
          </ul>
          <p className="text-gray-700 mb-6 leading-relaxed">
            For all organizations, particularly the 65% of businesses with at least one single-point-of-failure in their supply chain, addressing these questions will require ongoing monitoring of trade policies, improved supply chain visibility, and real-time insights. Advanced risk management tools, such as Marsh McLennan’s Sentrisk, can support strategic decision making and contribute to greater resiliency.
          </p>
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