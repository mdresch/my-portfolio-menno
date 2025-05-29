"use client"; // Assuming potential for client-side interactions later

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component

export default function PodcastSpecialEditionTradePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Special Edition: Global Trade and its Impact on Supply Chain
        </h1>
        {/* Placeholder for Hero Image */}
        <div className="my-6 p-4 border border-dashed border-gray-300 text-center text-gray-500 text-sm max-w-lg mx-auto">
          [Placeholder: On Aon Podcast Hero Image]
          {/* Example using next/image if you have an image URL/path */}
          {/* <Image src="/path/to/podcast-hero.jpg" alt="On Aon Podcast" width={600} height={300} className="mx-auto rounded-lg" /> */}
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Aon experts explore the global tensions impacting supply chains and the strategic moves companies can make now to manage risk.
        </p>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">

        {/* --- Key Takeaways --- */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>In this episode, Aon experts discuss steps for the impact on trade of the Middle East and Ukraine conflicts.</li>
            <li>Aon’s experts share strategies for proactively managing supply chain risk.</li>
            <li>This episode provides insights on how climate change presents increasing concerns for supply chain and geopolitical violence.</li>
          </ul>
        </div>

        {/* --- Podcast Transcript --- */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed"> {/* Using Tailwind Prose for basic transcript styling */}

          {/* --- Intro --- */}
          <div className="mb-6 p-4 bg-gray-100 rounded-md">
            <p className="italic text-sm">
              Hi everyone, and welcome to the award-winning “On Aon” podcast, where we dive into some of the most pressing topics that businesses and organizations around the world are facing. Today, we hear from John Minor for a closer look at one of the four key client megatrends impacting organizations around the world: trade. Now, please welcome this episode’s host, Tracy-Lee Kus.
            </p>
          </div>

          {/* --- Tracy-Lee Kus Intro --- */}
          <div className="mb-4">
            <p><strong>Tracy-Lee Kus:</strong></p>
            <p>
              Hello, my name is Tracy-Lee Kus, and I am the CEO of the Global Broking Centre here in London. In today's special On Aon episode, we're taking a closer look at a key concern among leaders, trade.
            </p>
            <p>
              Earlier this year Aon released the Business Decision Maker Survey. We talked to 800 C-suite and business executives in North America, the UK and Europe about the risks and opportunities arising from four key client megatrends impacting organizations around the world. These four are trade, technology, weather and the workforce.
            </p>
            <p>
              Trade is the lifeblood of the global economy, and the challenges faced are many, but one that's especially concerning to leaders, employees and customers today is geopolitical risks and their effect on supply chains. With me today to discuss is John Minor, Aon's, national practice leader for structured credit and political risk. Thank you for being here today, John.
            </p>
          </div>

          {/* --- John Minor Response 1 --- */}
          <div className="mb-4">
            <p><strong>John Minor:</strong></p>
            <p>
              Great to be with you, Tracy-Lee.
            </p>
          </div>

          {/* --- Tracy-Lee Kus Question 1 --- */}
          <div className="mb-4">
            <p><strong>Tracy-Lee Kus:</strong></p>
            <p>
              In our discussion, we're going to walk through several questions. How are conflicts around the world affecting supply chains? What are some of the other geopolitical risks affecting these supply chains? And what can companies do to manage supply chain risk? So, let's get started. So, John, how are current geopolitical issues affecting supply chains today?
            </p>
          </div>

          {/* --- John Minor Response 2 --- */}
          <div className="mb-4">
            <p><strong>John Minor:</strong></p>
            <p>
              "Trade is the lifeblood of the global economy." I like that. And it's so true. The flow of trade is so important to the functioning and health of the global economy. So, when macro events threaten the flow of trade, businesses start to worry. I think it's fair to say that when Covid happened the global economy was on life support. After that, companies began to pay a lot more attention to supply chain vulnerabilities and renewed their efforts to enhance supply chain resilience.
            </p>
            <p>
              So, it's understandable that geopolitical instability and an increasingly tense and fragmented geopolitical landscape is a top concern for global businesses because it represents a potential source of vulnerability to supply chain disruption risks.
            </p>
            <p>
              Trade between geopolitically distant economies accounts for about 20 percent of global goods trade, but it's actually about 40 percent of trade in globally concentrated products, products like laptops, iron ore, soybeans, where three or less countries provide more than 90 percent of global exports. For example, many consumer electronics are globally concentrated and supplied by China to economies in Europe and the United States. China is also the world's largest importer of soybeans with the majority of these imports coming from the U.S. and Brazil. In fact, almost 20 percent of all flows of globally concentrated products go to China, often as imports, resources or capital goods, and a further 40 percent of all flows of globally concentrated products come out of China, typically in the form of manufactured goods. This is why there's so much attention given to the increased tensions between the U.S. and China.
            </p>
            <p>
              Perhaps the biggest concern relating to China is the possibility of some type of military conflict across the Taiwan Strait that draws in the US and its allies in a broader conflict. When Russia invaded Ukraine, it showed us how it may play out if China invaded Taiwan. No one believes it would play out the same way, but everyone agrees the impact on the global economy, global trade and supply chains would be catastrophic.
            </p>
            <p>
              This is not the only concern relating to China. Trade restrictions, sanctions and counter sanctions arising out of the fierce competition between China and the U.S. in areas such as advanced technologies, AI, electric vehicles and so on, all eyes right now are on Trump, President-elect Trump, who promised to take a much more aggressive approach to China. During his first term as president, Trump imposed tariffs on more than 800 categories of goods imported from China. He's now talking about a 60 percent tariff on all Chinese imports versus tariffs ranging from seven and a half to 25 percent before, during his first term. And trade restrictions are increasingly popular. They've increased steadily year-on-year. There were more than 3,000 new restrictions last year, from about 650 restrictions introduced in 2017. So, it's a big concern.
            </p>
          </div>

          {/* --- Tracy-Lee Kus Question 2 --- */}
          <div className="mb-4">
            <p><strong>Tracy-Lee Kus:</strong></p>
            <p>
              Wow, that is quite an increase. What are some of the other geopolitical risks that are affecting these supply chains?
            </p>
          </div>

          {/* --- John Minor Response 3 --- */}
          <div className="mb-4">
            <p><strong>John Minor:</strong></p>
            <p>
              Right, so military hostilities in the Middle East and the possibility of an escalation of that conflict, as well as the ongoing war in Ukraine and the prospect of that conflict spreading to neighboring countries like Poland and Romania, are certainly major sources of concern.
            </p>
            <p>
              The Suez Canal at the neck of the Red Sea is used by roughly a third of global cargo vessels. Following attacks by Yemen's Houthis, linked to the war in Gaza, average worldwide costs to ship a 40-foot container have doubled as ships which traditionally took the Red Sea-Suez Canal route have opted to traverse around Africa. This detour adds an additional two weeks to the journey, resulting in higher fuel costs and labor costs, which are ultimately passed on to businesses and consumers.
            </p>
            <p>
              But here's one example of how risk management and coverage insurance can help. So as issues in the Red Sea continue to impact global shipping, many insurers canceled war and strikes cover under their marine cargo policies. In response, Aon worked closely with Lloyd's to create a special risk facility for smaller cargo war risks in the Red Sea. The cargo risk facility is written with Lloyd's capacity and enables small and mid-sized traders in the Dutch market to quickly access war coverage for shipments through the Red Sea. Risks are bundled into one facility, which enables traders to pay premiums as much as 50 percent lower than what they would've paid individually.
            </p>
            <p>
              And in Ukraine, where we are seeing the devastating effects of the ongoing war with Russia, we worked with the US International Development Finance Corp, or DFC, it's a US government agency, to develop a reinsurance facility that will allow Ukrainian insurance companies to offer their policyholders protection against war-related damage. Through this facility, DFC will cover 90 percent of losses paid by pre-qualified Ukrainian insurance companies to policyholders for war-related damage. We've qualified one insurance company so far and are working with DFC to qualify three to five others in the coming weeks and months. This is a first-of-its-kind program for the DFC, which we're very proud of working with them with, which will obviously meet an urgent need for war risk protection for businesses operating in Ukraine.
            </p>
            <p>
              Armed conflict like the ones we're seeing in Ukraine and the Middle East are on the rise, with important implications for businesses and their supply chains. According to the 2024 Global Peace Index there were 56 active conflicts around the world. That's the most since World War II. Aon's political risk map, which assesses political risk levels in 166 emerging markets around the world, rates more than half of these countries as very high, high, or medium high for political violence and supply chain disruption risks.
            </p>
            <p>
              And one last point I'd like to make, that the effects of climate change such as the mass migration of affected populations, food insecurity, strained infrastructure from the increased frequency of severe weather events, will increase both political violence and supply chain disruption risks in many parts of the world.
            </p>
          </div>

          {/* --- Tracy-Lee Kus Question 3 --- */}
          <div className="mb-4">
            <p><strong>Tracy-Lee Kus:</strong></p>
            <p>
              Those are incredible examples of how the insurance market can help in these areas. But can you talk a little bit more about how companies can go about managing the supply chain risk?
            </p>
          </div>

          {/* --- John Minor Response 4 --- */}
          <div className="mb-4">
            <p><strong>John Minor:</strong></p>
            <p>
              So, we get that question a lot. So, building visibility into the supply chain is really important to mitigating supply chain disruption risks, probably an obvious point, but definitely important and difficult to accomplish.
            </p>
            <p>
              Really harnessing data and analytics to build transparency around your most important suppliers, their geographic location and their dependency on third parties will be really critical as risks continue to evolve.
            </p>
            <p>
              An awareness of the cost of supply chain failures will help leaders take proactive steps to invest in mitigating existing risks and their potential impact. Aon has also made a huge investment in building a suite of analytical tools that will help clients identify potential sources of supply chain disruption risks, and proactively manage these risks.
            </p>
            <p>
              Insurance is also an important part of this. Many more companies are buying political risk insurance to mitigate the impacts of some of these risks. In a recent survey, about 70 percent of global firms buy some form of political risk insurance, which is really astounding when you consider that a similar survey conducted in 2019 found that only 25 percent of global firms purchased this insurance. I don't think I've seen so much interest in political risk insurance in the 30-plus years I've been doing this.
            </p>
          </div>

          {/* --- Tracy-Lee Kus Closing --- */}
          <div className="mb-4">
            <p><strong>Tracy-Lee Kus:</strong></p>
            <p>
              John, I would say the same being in London. We're seeing exactly the same interest. Thank you so much for joining us. I found that a fascinating discussion. That's our show for today, everyone. Thank you so much for listening.
            </p>
          </div>

          {/* --- Outro --- */}
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <p className="italic text-sm">
              Thanks for tuning in to the latest episode of “On Aon” with our episode host, Tracy-Lee Kus, and today’s expert, John Minor, for a discussion on one of the key client megatrends, trade. If you enjoyed this episode, don’t forget to subscribe wherever you get your podcasts, and stay tuned for our next conversation featuring industry experts bringing you the latest on topics, including climate risk, workforce wellbeing, ESG trends, and much more. Be sure to check out our show notes and visit our website at Aon dot com to learn more about Aon.
            </p>
          </div>

        </div> {/* End Prose */}
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