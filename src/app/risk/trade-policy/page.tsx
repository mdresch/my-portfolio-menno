"use client";
import React from "react";

export default function TradePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Trade Policy: Bilateral Agreements</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is a Bilateral Trade Agreement?</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          A bilateral trade agreement is a formal arrangement between two countries to promote trade and economic cooperation. These agreements typically reduce tariffs, remove trade barriers, and establish clear rules for the exchange of goods and services. Bilateral agreements are negotiated and signed by the heads of state or government, and are designed to support international trade and market stability.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Formal Example: U.S.–South Korea Free Trade Agreement (KORUS FTA)</h2>
        <div className="bg-blue-50 dark:bg-blue-900/40 p-4 rounded mb-4">
          <p className="mb-2 text-gray-800 dark:text-blue-100">
            <strong>Agreement Name:</strong> United States–Korea Free Trade Agreement (KORUS FTA)
          </p>
          <p className="mb-2 text-gray-800 dark:text-blue-100">
            <strong>Signed:</strong> June 30, 2007 (prior to the Trump Administration)
          </p>
          <p className="mb-2 text-gray-800 dark:text-blue-100">
            <strong>Parties:</strong> United States of America and Republic of Korea
          </p>
          <p className="mb-2 text-gray-800 dark:text-blue-100">
            <strong>Purpose:</strong> To promote international trade, reduce tariffs, and strengthen economic ties between the two countries.
          </p>
          <p className="mb-2 text-gray-800 dark:text-blue-100">
            <strong>Key Provisions:</strong>
          </p>
          <ul className="list-disc ml-6 text-gray-800 dark:text-blue-100">
            <li>Elimination of tariffs on nearly 95% of consumer and industrial products within five years.</li>
            <li>Enhanced protection for intellectual property rights.</li>
            <li>Commitments to fair labor and environmental standards.</li>
            <li>Improved market access for U.S. services and agricultural exports.</li>
            <li>Transparent dispute resolution mechanisms.</li>
          </ul>
        </div>
        <p className="text-gray-700 dark:text-gray-200">
          The KORUS FTA was negotiated and signed by the heads of state of both countries, reflecting a mutual commitment to supporting international trade and market stability through formal, bilateral cooperation.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-3">Why Bilateral Trade Agreements Matter</h2>
        <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200 mb-4">
          <li>Promote economic growth and job creation.</li>
          <li>Reduce costs for consumers and businesses.</li>
          <li>Encourage innovation and competition.</li>
          <li>Strengthen diplomatic and economic ties between nations.</li>
        </ul>
      </section>
    </div>
  );
}
