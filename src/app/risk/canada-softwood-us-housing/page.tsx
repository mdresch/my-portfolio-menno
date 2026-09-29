import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canada Softwood and US Housing | Menno Drescher",
  description:
    "A research note that sets Canadian softwood supply, US housing demand, interest rates and oil side by side, with sources, as of 29 September 2026.",
  keywords: [
    "softwood lumber",
    "Canada forestry",
    "US housing starts",
    "USMCA",
    "mortgage rates",
    "lumber prices",
  ],
  openGraph: {
    title: "Canada Softwood and US Housing",
    description:
      "Canadian softwood supply, US housing demand, interest rates and oil side by side, as of 29 September 2026.",
    type: "article",
  },
};

/* ---------- small building blocks ---------- */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-sm border border-blue-600 px-2 py-0.5 font-mono text-xs font-medium uppercase tracking-widest text-blue-700 dark:border-blue-400 dark:text-blue-300">
      {children}
    </span>
  );
}

function Estimate() {
  return (
    <span className="ml-2 inline-block rounded-sm border border-amber-700 px-1.5 align-middle font-mono text-[0.65rem] uppercase tracking-wider text-amber-800 dark:border-amber-400 dark:text-amber-300">
      Estimate
    </span>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-3 text-2xl font-semibold text-gray-800 transition-colors dark:text-white">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 mt-8 text-base font-semibold text-gray-800 transition-colors dark:text-gray-100">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 max-w-3xl text-gray-700 transition-colors dark:text-gray-300">
      {children}
    </p>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 max-w-3xl text-sm text-gray-500 transition-colors dark:text-gray-400">
      {children}
    </p>
  );
}

function Bullets({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mb-4 max-w-3xl list-disc space-y-2 pl-5 text-gray-700 transition-colors dark:text-gray-300">
      {children}
    </ul>
  );
}

function Meter({
  label,
  value,
  pct,
  highlight = false,
}: {
  label: string;
  value: string;
  pct: number;
  highlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,8.5rem)_minmax(0,1fr)_minmax(0,6.5rem)] items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
      <span className="min-w-0">{label}</span>
      <span className="relative h-3.5 bg-gray-200 dark:bg-neutral-800">
        <span
          className={`absolute inset-y-0 left-0 ${
            highlight ? "bg-blue-600 dark:bg-blue-400" : "bg-gray-400 dark:bg-neutral-500"
          }`}
          style={{ width: `${pct}%` }}
        />
      </span>
      <span className="text-right font-mono text-sm tabular-nums">{value}</span>
    </div>
  );
}

function TableWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 mt-4 overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-sm tabular-nums text-gray-700 dark:text-gray-300">
        {children}
      </table>
    </div>
  );
}

const th =
  "border-b-2 border-gray-800 py-2.5 pr-3 text-left font-mono text-xs font-medium uppercase tracking-wider text-gray-500 dark:border-gray-300 dark:text-gray-400";
const thNum = `${th} text-right`;
const td = "border-b border-gray-200 py-2.5 pr-3 align-top dark:border-neutral-800";
const tdNum = `${td} whitespace-nowrap text-right font-mono`;

/* ---------- sources ---------- */

const sources: { group: string; items: { title: string; url: string }[] }[] = [
  {
    group: "Trade and policy",
    items: [
      {
        title: "U.S. International Trade in Goods and Services, July 2026 (BEA)",
        url: "https://www.bea.gov/news/2026/us-international-trade-goods-and-services-july-2026",
      },
      {
        title: "Trade in Goods with Canada (US Census Bureau)",
        url: "https://www.census.gov/foreign-trade/balance/c1220.html",
      },
      {
        title: "USMCA 2026 Joint Review (White & Case)",
        url: "https://www.whitecase.com/insight-alert/usmca-2026-joint-review-united-states-declines-extend-agreement-triggering-annual",
      },
      {
        title: "Canada–United States trade relations (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Canada%E2%80%93United_States_trade_relations",
      },
    ],
  },
  {
    group: "Forest",
    items: [
      {
        title: "How much forest does Canada have? (Natural Resources Canada)",
        url: "https://natural-resources.canada.ca/forests-forestry/state-canada-forests/much-forest-does-canada-have",
      },
      {
        title: "How does disturbance shape Canada's forests? (Natural Resources Canada)",
        url: "https://natural-resources.canada.ca/forests-forestry/state-canada-forests/disturbance-canadas-forests",
      },
      { title: "Forestry in Canada (Wikipedia)", url: "https://en.wikipedia.org/wiki/Forestry_in_Canada" },
      { title: "2025 Canadian wildfires (Wikipedia)", url: "https://en.wikipedia.org/wiki/2025_Canadian_wildfires" },
      { title: "2026 Canadian wildfires (Wikipedia)", url: "https://en.wikipedia.org/wiki/2026_Canadian_wildfires" },
    ],
  },
  {
    group: "Lumber",
    items: [
      { title: "Lumber price (Trading Economics)", url: "https://tradingeconomics.com/commodity/lumber" },
      {
        title: "Are Interest Rates and Seasonality Pushing Lumber Futures Prices Lower?",
        url: "https://www.inkl.com/news/are-interest-rates-and-seasonality-pushing-lumber-futures-prices-lower",
      },
      {
        title: "Framing Lumber Prices (NAHB)",
        url: "https://www.nahb.org/news-and-economics/housing-economics/national-statistics/framing-lumber-prices",
      },
      {
        title: "Canadian Lumber Production Continues to Fall (Forestnet)",
        url: "https://forestnet.com/canadian-lumber-production-continues-to-fall/",
      },
      {
        title: "Canadian lumber shipments increase slightly in 2024 (Forestnet)",
        url: "https://forestnet.com/canadian-lumber-shipments-increase-slightly-in-2024/",
      },
      {
        title: "Decades of trade disputes reshape Canada's softwood lumber sector (RBC Economics)",
        url: "https://www.rbc.com/en/economics/canadian-analysis/featured-analysis/insights/decades-of-trade-disputes-reshape-canadas-softwood-lumber-sector/",
      },
      {
        title: "Setting the Record Straight on the Softwood Lumber Trade",
        url: "https://russtaylorglobal.com/setting-the-record-straight-on-the-softwood-lumber-trade-between-canada-and-the-united-states/",
      },
      {
        title: "Canadian Softwood Lumber Capacity Is Not Sustainable (US Lumber Coalition)",
        url: "https://uslumbercoalition.org/resource/white-paper-canadian-softwood-lumber-capacity-is-not-sustainable/",
      },
      {
        title: "How Much Money Is an Acre of Timber Worth? (ResourceWise)",
        url: "https://www.resourcewise.com/blog/forest-products-blog/how-much-money-is-an-acre-of-timber-worth",
      },
    ],
  },
  {
    group: "Housing",
    items: [
      {
        title: "Housing starts outlook turns negative through 2027 (HousingWire)",
        url: "https://www.housingwire.com/articles/housing-starts-august-2026/",
      },
      { title: "United States Housing Starts (Trading Economics)", url: "https://tradingeconomics.com/united-states/housing-starts" },
      {
        title: "Why nobody can agree on the scope of the US housing shortage (Inman)",
        url: "https://www.inman.com/2026/04/17/us-housing-shortage-white-house-10-million-supply-gap/",
      },
      {
        title: "Housing Shortage Is at Least 10 Million Homes, White House Says (Bloomberg)",
        url: "https://www.bloomberg.com/news/articles/2026-04-13/housing-shortage-is-at-least-10-million-homes-white-house-says",
      },
      {
        title: "U.S. Housing Supply Gap Widens to 4 Million Homes",
        url: "https://www.buildwcg.com/blog-posts/us-housing-supply-gap-4-million-homes-2026",
      },
      {
        title: "2026 Housing Outlook (NAHB)",
        url: "https://www.nahb.org/news-and-economics/press-releases/2026/02/2026-housing-outlook-ongoing-challenges-cautious-optimism-and-incremental-gains",
      },
      {
        title: "Homeownership Rate Edges Down to 65% (NAHB)",
        url: "https://eyeonhousing.org/2026/08/homeownership-rate-edges-down-to-65/",
      },
      {
        title: "Investor share slips to 27% of single-family purchases (HousingWire)",
        url: "https://www.housingwire.com/articles/cotality-investors-single-family/",
      },
      {
        title: "How real estate investors are propping up U.S. home sales (Scotsman Guide)",
        url: "https://www.scotsmanguide.com/news/how-real-estate-investors-are-propping-up-us-home-sales/",
      },
      {
        title: "Investor Home Purchases in 2026 (RealtyWire)",
        url: "https://realtywire.com/investor-home-purchases-2026/",
      },
    ],
  },
  {
    group: "Rates and oil",
    items: [
      {
        title: "Mortgage Rates Average 7.03% (Freddie Mac)",
        url: "https://freddiemac.gcs-web.com/news-releases/news-release-details/mortgage-rates-average-703",
      },
      { title: "Fed Interest Rate 2026 (Fed rate tracker)", url: "https://fedratecalc.com/" },
      {
        title: "Lowest mortgage rate in September 2026 (Norada)",
        url: "https://www.noradarealestate.com/blog/lowest-mortgage-rate-september-2026/",
      },
      { title: "2026 Iran war fuel crisis (Wikipedia)", url: "https://en.wikipedia.org/wiki/2026_Iran_war_fuel_crisis" },
      {
        title: "Current price of oil as of September 25, 2026 (Fortune)",
        url: "https://fortune.com/article/price-of-oil-09-25-2026/",
      },
      { title: "Crude oil price (Trading Economics)", url: "https://tradingeconomics.com/commodity/crude-oil" },
    ],
  },
];

/* ---------- page ---------- */

export default function CanadaSoftwoodUsHousingPage() {
  return (
    <div className="container mx-auto px-4 py-12 transition-colors dark:bg-neutral-950">
      <header className="mb-10 border-b-2 border-gray-800 pb-8 dark:border-gray-300">
        <Label>Research note</Label>
        <h1 className="mb-3 mt-4 text-4xl font-bold text-gray-800 transition-colors dark:text-white">
          Canada Softwood and US Housing
        </h1>
        <p className="max-w-3xl text-lg text-gray-600 transition-colors dark:text-gray-300">
          Lumber prices move with housing demand and interest rates, but the wood behind them takes decades to grow.
          This note puts the forest, mill, housing and rate figures side by side.
        </p>
        <div className="mt-4 font-mono text-sm text-gray-500 transition-colors dark:text-gray-400">
          Data as of 29 September 2026
        </div>
      </header>

      {/* Key figures */}
      <section className="mb-12" aria-label="Key figures">
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "$539", l: "Lumber futures, per 1,000 board feet", d: "29 Sep 2026, about 12% below a year ago" },
            { n: "20 bn", l: "Canadian softwood output in board feet", d: "2024, down from 35 bn in 2004" },
            { n: "1.275 M", l: "US housing starts, annual pace", d: "Aug 2026, lowest since Oct 2025" },
            { n: "7.03%", l: "US 30-year fixed mortgage rate", d: "24 Sep 2026, 6.30% a year earlier" },
          ].map((f) => (
            <div key={f.l} className="min-w-0 border-t border-gray-300 py-4 dark:border-neutral-700">
              <div className="font-mono text-3xl font-medium tabular-nums text-gray-800 dark:text-white">{f.n}</div>
              <p className="mb-0.5 mt-1.5 text-sm text-gray-700 dark:text-gray-300">{f.l}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="mb-12">
        <Label>Summary</Label>
        <H2>Calm for buyers, tight for producers</H2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <H3>Buyers</H3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Futures sit near a nine-month low. US mills and imports have covered most of the Canadian shortfall, and
              total North American shipments have been close to flat.
            </p>
          </div>
          <div>
            <H3>Producers</H3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Canadian output is down about 43% since 2004. Duties, weak demand and fewer accessible trees have closed
              mills and left others part-idle.
            </p>
          </div>
          <div>
            <H3>Forest</H3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Fire and insects affect far more area each year than harvesting does. Permanent forest loss is small, but
              the wood supply that can be reached is shrinking in some regions.
            </p>
          </div>
          <div>
            <H3>What would change it</H3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              A housing recovery that lifts demand faster than supply can respond. The 2021 surge is the example of how
              quickly that can happen.
            </p>
          </div>
        </div>
      </section>

      {/* Trade */}
      <section className="mb-12">
        <Label>Trade</Label>
        <H2>US and Canada goods trade</H2>
        <P>
          The United States runs a goods deficit with Canada, but it is small next to its deficits with Mexico, Vietnam,
          Taiwan and China. A trade balance is an accounting figure. Bilateral balances reflect supply chains and capital
          flows, and they say little on their own about whether trade is fair.
        </P>
        <TableWrap>
          <thead>
            <tr>
              <th className={th}>US goods trade with Canada</th>
              <th className={thNum}>Exports</th>
              <th className={thNum}>Imports</th>
              <th className={thNum}>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>2025, full year</td>
              <td className={tdNum}>$333.6 bn</td>
              <td className={tdNum}>$381.9 bn</td>
              <td className={tdNum}>−$48.3 bn</td>
            </tr>
            <tr>
              <td className={td}>Jan to Jul 2026</td>
              <td className={tdNum}>$205.5 bn</td>
              <td className={tdNum}>$233.7 bn</td>
              <td className={tdNum}>−$28.2 bn</td>
            </tr>
            <tr>
              <td className={td}>Jul 2026, seasonally adjusted</td>
              <td className={tdNum}>$29.3 bn</td>
              <td className={tdNum}>$32.5 bn</td>
              <td className={tdNum}>−$3.2 bn</td>
            </tr>
          </tbody>
        </TableWrap>
        <Note>US Census Bureau and Bureau of Economic Analysis. Not seasonally adjusted except the July line.</Note>
        <H3>Agreements</H3>
        <P>
          Free trade agreements have been in force since 1 January 1989, about 37 years. The Canada–US agreement ran from
          1989, NAFTA from January 1994 to June 2020, and the USMCA since July 2020. On 1 July 2026 the US declined to
          extend the USMCA for a new 16-year term. The agreement stays in force, with joint reviews every year through
          2036.
        </P>
      </section>

      {/* Forest */}
      <section className="mb-12">
        <Label>Forest</Label>
        <H2>Harvest, regrowth and disturbance</H2>
        <Bullets>
          <li>
            Canada has about 369 million hectares of forest (2023). Less than 0.5% has been deforested since 1990, and
            about 94% of it is public land.
          </li>
          <li>
            Harvest covered about 669,000 hectares in 2023, roughly 0.2% of the forest. Regeneration is a licence
            condition on public land, through planting or natural regrowth.
          </li>
          <li>
            Deforestation means permanent conversion to farms, mines, energy or development. Harvest, fire and insect
            damage do not count, because the land is expected to regrow.
          </li>
        </Bullets>
        <H3>Area burned compared with area harvested</H3>
        <div
          className="mb-2 mt-4 grid gap-2.5"
          role="group"
          aria-label="Millions of hectares burned by year compared with harvested area in 2023"
        >
          <Meter label="Fire 2023" value="17.2 M ha" pct={100} highlight />
          <Meter label="Fire 2025" value="8.78 M ha" pct={51} />
          <Meter label="Fire 2024" value="5.4 M ha" pct={31.4} />
          <Meter label="Fire 2026, to 31 Aug" value="4.49 M ha" pct={26.1} />
          <Meter label="Harvest 2023" value="0.67 M ha" pct={3.9} highlight />
        </div>
        <Note>
          Fire totals for 2024 are to October and for 2025 to mid-September. Much of the burned area is remote northern
          forest outside the commercial base. In 2023, 7.9 M of the 17.2 M ha burned was in managed forest. Insects
          affected 11.6 M ha in 2023 and 13.1 M ha in 2022, and that count includes light defoliation.
        </Note>
        <P>
          The open questions are about standards. Burned or beetle-killed land often has no harvester responsible for
          replanting, natural regrowth can return a different species mix, and old-growth forest does not come back on a
          planting timetable.
        </P>
      </section>

      {/* Supply */}
      <section className="mb-12">
        <Label>Supply</Label>
        <H2>Mills and lumber prices</H2>
        <figure className="mb-2 mt-4">
          <svg
            viewBox="0 0 640 290"
            role="img"
            aria-label="Bar chart of Canadian softwood lumber production in billion board feet: 35 in 2004, about 27.5 in 2017, 20.9 in 2022, 19.8 in 2023, about 20 in 2024"
            className="block h-auto w-full max-w-2xl"
          >
            {[182.5, 135, 87.5, 40].map((y) => (
              <line key={y} x1="60" x2="620" y1={y} y2={y} className="stroke-gray-300 dark:stroke-neutral-700" strokeWidth="1" />
            ))}
            {[
              { y: 234, t: "0" },
              { y: 186.5, t: "10" },
              { y: 139, t: "20" },
              { y: 91.5, t: "30" },
              { y: 44, t: "40" },
            ].map((tk) => (
              <text
                key={tk.t}
                x="52"
                y={tk.y}
                textAnchor="end"
                className="fill-gray-500 font-mono text-[11px] dark:fill-gray-400"
              >
                {tk.t}
              </text>
            ))}
            <rect x="84" y="63.75" width="64" height="166.25" className="fill-gray-400 dark:fill-neutral-500" />
            <rect x="196" y="99.4" width="64" height="130.6" className="fill-gray-400 dark:fill-neutral-500" />
            <rect x="308" y="130.7" width="64" height="99.3" className="fill-gray-400 dark:fill-neutral-500" />
            <rect x="420" y="135.95" width="64" height="94.05" className="fill-gray-400 dark:fill-neutral-500" />
            <rect x="532" y="135" width="64" height="95" className="fill-blue-600 dark:fill-blue-400" />
            {[
              { x: 116, y: 56, t: "35" },
              { x: 228, y: 91.5, t: "≈27.5" },
              { x: 340, y: 123, t: "20.9" },
              { x: 452, y: 128, t: "19.8" },
              { x: 564, y: 127, t: "≈20" },
            ].map((v) => (
              <text
                key={v.t}
                x={v.x}
                y={v.y}
                textAnchor="middle"
                className="fill-gray-800 font-mono text-xs font-medium dark:fill-gray-100"
              >
                {v.t}
              </text>
            ))}
            <line x1="60" x2="620" y1="230" y2="230" className="stroke-gray-800 dark:stroke-gray-300" strokeWidth="1.5" />
            {[
              { x: 116, t: "2004" },
              { x: 228, t: "2017" },
              { x: 340, t: "2022" },
              { x: 452, t: "2023" },
              { x: 564, t: "2024" },
            ].map((yr) => (
              <text
                key={yr.t}
                x={yr.x}
                y="250"
                textAnchor="middle"
                className="fill-gray-500 font-mono text-[11px] dark:fill-gray-400"
              >
                {yr.t}
              </text>
            ))}
            <text x="60" y="278" className="fill-gray-500 font-mono text-[11px] dark:fill-gray-400">
              Billion board feet
            </text>
          </svg>
          <figcaption className="mt-2 max-w-3xl text-sm text-gray-500 dark:text-gray-400">
            Canadian softwood lumber production. The 2017 value is derived from a reported 28% decline to 20 bn in 2024,
            and 2004 and 2024 come from a trade-dispute response, so treat them as approximate. The 2022 and 2023 values
            are reported shipments.
          </figcaption>
        </figure>
        <Bullets>
          <li>
            Total North American shipments were about 57.2 bn board feet in 2023 and 57.0 bn in 2024. US mills produced
            about 37 bn.
          </li>
          <li>
            One US Lumber Coalition paper puts Canadian mill utilization at about 70% in 2024. That group is a party to
            the trade dispute, so the figure is an advocate&apos;s estimate.
          </li>
          <li>British Columbia&apos;s production is about half its 2017 level (RBC Economics).</li>
        </Bullets>
        <H3>Lumber futures, USD per 1,000 board feet</H3>
        <div className="mb-2 mt-4 grid gap-2.5" role="group" aria-label="Lumber futures price levels">
          <Meter label="2021 peak" value="≈1,711" pct={95} highlight />
          <Meter label="2026 high, 23 Jul" value="664" pct={36.9} />
          <Meter label="2025 close" value="576" pct={32} />
          <Meter label="2026 low, 18 Sep" value="541" pct={30.1} />
          <Meter label="29 Sep 2026" value="539" pct={29.9} highlight />
        </div>
        <Note>
          CME lumber futures are thinly traded, so prices can move sharply on small volumes. Physical framing lumber (NAHB
          index) was $506.76 on 25 Sep, up 4.5% year over year while futures were down about 10%.
        </Note>
      </section>

      {/* Land */}
      <section className="mb-12">
        <Label>Land</Label>
        <H2>
          How much forest one mill needs
          <Estimate />
        </H2>
        <P>
          Under a steady annual cycle, land needed equals annual volume divided by growth per hectare per year.
          Equivalently, it is the acres cut each year multiplied by the rotation length. The example below is a mill
          making 200 million board feet a year, using about 3.6 m³ of logs per 1,000 board feet. These are my own
          assumptions and arithmetic, and real mills vary widely.
        </P>
        <TableWrap>
          <thead>
            <tr>
              <th className={th}>Forest type</th>
              <th className={thNum}>Rotation</th>
              <th className={thNum}>Growth, m³/ha/yr</th>
              <th className={thNum}>Land needed</th>
              <th className={thNum}>Cut per year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>Southern-style pine plantation</td>
              <td className={tdNum}>30 yr</td>
              <td className={tdNum}>10</td>
              <td className={tdNum}>≈180,000 ac</td>
              <td className={tdNum}>≈6,000 ac</td>
            </tr>
            <tr>
              <td className={td}>Intensive fast-growing plantation</td>
              <td className={tdNum}>25 yr</td>
              <td className={tdNum}>15</td>
              <td className={tdNum}>≈120,000 ac</td>
              <td className={tdNum}>≈4,800 ac</td>
            </tr>
            <tr>
              <td className={td}>Canadian boreal forest</td>
              <td className={tdNum}>80 yr</td>
              <td className={tdNum}>2</td>
              <td className={tdNum}>≈890,000 ac</td>
              <td className={tdNum}>≈11,000 ac</td>
            </tr>
          </tbody>
        </TableWrap>
        <Note>
          Gross area will be larger once roads, streams, buffers and reserves are removed. A slow growth rate is the
          reason boreal supply needs five to seven times the land of a plantation.
        </Note>
        <H3>What a short rotation is worth</H3>
        <P>
          A US South pine stand at 26+ years can bring about $2,110 to $2,275 per acre at clearcut, against $200 to $400
          per acre to establish. Taking $2,200 at year 28 and $300 at planting, the value of the bare land depends
          heavily on the discount rate.
        </P>
        <TableWrap>
          <thead>
            <tr>
              <th className={th}>Discount rate</th>
              <th className={thNum}>
                Bare-land value per acre
                <Estimate />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>4%</td>
              <td className={tdNum}>≈ $650</td>
            </tr>
            <tr>
              <td className={td}>6%</td>
              <td className={tdNum}>≈ $160</td>
            </tr>
            <tr>
              <td className={td}>8%</td>
              <td className={tdNum}>about zero or negative</td>
            </tr>
          </tbody>
        </TableWrap>
      </section>

      {/* Demand */}
      <section className="mb-12">
        <Label>Demand</Label>
        <H2>US housing</H2>
        <Bullets>
          <li>
            Starts were 1.275 M at an annual pace in August 2026: 918,000 single-family and 344,000 multifamily.
            Completions were 1.128 M, down 27.1% from August 2025.
          </li>
          <li>
            In 2025, starts were about 1.36 M. Goldman Sachs research, cited in industry coverage, says annual starts
            near 2 M would be needed to close the gap.
          </li>
          <li>
            Homeownership was 65.0% in Q2 2026, unchanged from a year earlier. For under-35s it fell from 36.4% to
            35.2%.
          </li>
          <li>
            There were 133.8 M households, up from 132.6 M a year earlier, so about 1.2 M net new households against
            roughly 1.3 M starts.
          </li>
        </Bullets>
        <H3>Estimates of the shortage, in millions of homes</H3>
        <div
          className="mb-2 mt-4 grid gap-2.5"
          role="group"
          aria-label="Estimates of the US housing shortage in millions of homes"
        >
          <Meter label="John Burns" value="≈1.0 M" pct={10} />
          <Meter label="NAHB" value="≈1.2 M" pct={12} />
          <Meter label="Realtor.com" value="4 M+" pct={40} />
          <Meter label="White House CEA" value="10 M+" pct={100} highlight />
        </div>
        <Note>
          The methods differ. The White House figure counts missing single-family homes against a historical building
          trend. The others use vacancy, total units or population trends.
        </Note>
        <H3>Who owns the stock</H3>
        <Bullets>
          <li>
            Investors made 27% of single-family purchases in Q2 2026 (Cotality), about 273,000 homes and 40,000 fewer
            than a year earlier. Their share peaked near 30% in late 2025 and was under 20% for much of the 2010s.
          </li>
          <li>
            About 17 M of 86 M single-family homes and townhouses are not owner-occupied, and 87% of those belong to
            owners with one to five properties (BatchData). Large institutions made about 1% of purchases
            (Realtor.com).
          </li>
        </Bullets>
      </section>

      {/* Rates */}
      <section className="mb-12">
        <Label>Rates</Label>
        <H2>Interest rates and oil</H2>
        <TableWrap>
          <thead>
            <tr>
              <th className={th}>Indicator</th>
              <th className={thNum}>Level</th>
              <th className={th}>Date and note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={td}>Fed funds target</td>
              <td className={tdNum}>3.75% to 4.00%</td>
              <td className={td}>Raised 25 bp on 16 Sep 2026</td>
            </tr>
            <tr>
              <td className={td}>30-year mortgage</td>
              <td className={tdNum}>7.03%</td>
              <td className={td}>24 Sep 2026, first reading above 7% since Jan 2025</td>
            </tr>
            <tr>
              <td className={td}>15-year mortgage</td>
              <td className={tdNum}>6.42%</td>
              <td className={td}>24 Sep 2026</td>
            </tr>
            <tr>
              <td className={td}>10-year Treasury</td>
              <td className={tdNum}>≈4.95%</td>
              <td className={td}>10 Sep 2026</td>
            </tr>
            <tr>
              <td className={td}>Brent crude</td>
              <td className={tdNum}>≈$102 to $106</td>
              <td className={td}>25 to 28 Sep 2026, peak near $118 in late March</td>
            </tr>
            <tr>
              <td className={td}>WTI crude</td>
              <td className={tdNum}>≈$93</td>
              <td className={td}>28 Sep 2026; record is $147.27 in July 2008</td>
            </tr>
          </tbody>
        </TableWrap>
        <P>
          The energy shock comes from the 2026 Iran war and disruption around the Strait of Hormuz. It keeps inflation up
          and rates high, which weighs on housing starts and so on lumber demand. My own reasoning, not from the sources,
          is that wood also gains against steel and concrete when energy costs rise, because those take more energy to
          make.
        </P>
        <Note>
          For scale, from general knowledge and not from the sources below: the Fed funds rate reached about 20% and
          mortgage rates about 18% around 1981.
        </Note>
      </section>

      {/* Outlook */}
      <section className="mb-12">
        <Label>Outlook</Label>
        <H2>How the pieces connect</H2>
        <div className="bg-gray-100 p-6 transition-colors dark:bg-neutral-900">
          <p className="mb-4 max-w-3xl text-gray-700 dark:text-gray-300">
            Forest growth sets how fast supply can respond. Housing starts and mortgage rates set demand. Oil and
            inflation feed into rates, and fire and insects reduce the wood base underneath all of it. Price is where
            they meet, which is why it can stay calm for years and then move sharply.
          </p>
          <p className="max-w-3xl text-gray-700 dark:text-gray-300">
            Prices are soft now because housing is subdued, and not because supply is abundant. If borrowing costs fall
            and starts climb toward the level analysts say is needed, demand could outrun Canadian output, which is
            smaller than it was and cannot be expanded quickly. Replanting is already a built-in cost, so it does not
            move prices. Losses to fire and insects, trade duties and interest rates do.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mb-8">
        <Label>Sources</Label>
        <H2>Where the figures come from</H2>
        {sources.map((g) => (
          <div key={g.group}>
            <h3 className="mb-2 mt-6 font-mono text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {g.group}
            </h3>
            <ul className="grid gap-1.5 text-sm">
              {g.items.map((s) => (
                <li key={s.url} className="min-w-0 break-words">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline underline-offset-2 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <footer className="mt-12 max-w-3xl border-t-2 border-gray-800 pt-4 text-sm text-gray-500 dark:border-gray-300 dark:text-gray-400">
        Figures were current on 29 and 30 September 2026. Items marked Estimate are my own arithmetic from the stated
        assumptions, and the one general-knowledge comparison is labelled as such. This is general information and not
        financial advice.
      </footer>
    </div>
  );
}
