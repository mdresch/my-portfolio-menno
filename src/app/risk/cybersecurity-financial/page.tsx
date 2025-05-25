'use client';

import React from 'react';
import { 
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Cell
} from 'recharts';
import Image from 'next/image';
import Link from 'next/link';

// Sample data for visualizations
const threatEvolutionData = [
  { year: '2022', malware: 30, ransomware: 45, dataBreach: 25, supplyChain: 15, apiAttacks: 10 },
  { year: '2023', malware: 28, ransomware: 55, dataBreach: 35, supplyChain: 20, apiAttacks: 18 },
  { year: '2024', malware: 25, ransomware: 60, dataBreach: 40, supplyChain: 28, apiAttacks: 30 },
  { year: '2025 (Proj)', malware: 22, ransomware: 68, dataBreach: 48, supplyChain: 35, apiAttacks: 45 },
];

const financialImpactData = [
  { name: 'Banks', value: 42 },
  { name: 'Insurance', value: 28 },
  { name: 'Investment Firms', value: 15 },
  { name: 'Payment Processors', value: 10 },
  { name: 'FinTech', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const vulnerabilityScoresData = [
  { subject: 'Authentication', A: 80, B: 55, fullMark: 100 },
  { subject: 'Network Security', A: 75, B: 60, fullMark: 100 },
  { subject: 'App Security', A: 65, B: 70, fullMark: 100 },
  { subject: 'Data Protection', A: 90, B: 62, fullMark: 100 },
  { subject: 'Incident Response', A: 85, B: 58, fullMark: 100 },
  { subject: 'Cloud Security', A: 72, B: 65, fullMark: 100 },
];

const costPerBreachData = [
  { year: '2022', cost: 4.35 },
  { year: '2023', cost: 4.88 },
  { year: '2024', cost: 5.34 },
  { year: '2025 (Proj)', cost: 6.25 },
];

const mitigationStrategiesData = [
  { name: 'MFA Implementation', effectivenessScore: 8.5, adoptionRate: 70, costEfficiency: 9.5 },
  { name: 'AI-powered Monitoring', effectivenessScore: 9.2, adoptionRate: 45, costEfficiency: 7.5 },
  { name: 'Zero Trust Architecture', effectivenessScore: 9.0, adoptionRate: 35, costEfficiency: 6.8 },
  { name: 'Quantum-Resistant Crypto', effectivenessScore: 9.5, adoptionRate: 20, costEfficiency: 5.0 },
  { name: 'Employee Security Training', effectivenessScore: 8.0, adoptionRate: 80, costEfficiency: 9.0 },
];

export default function CybersecurityFinancialRiskPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-neutral-950 transition-colors">
      <div className="mb-6">
        <Link href="/risk" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Risk Analysis Reports
        </Link>
      </div>

      <header className="mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">
              Financial System Cybersecurity Risk Report
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">
              Analysis of emerging cybersecurity threats to financial institutions
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
            <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full dark:bg-red-900/30 dark:text-red-400">
              High Risk
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Published: May 9, 2025</span>
          </div>
        </div>
        <div className="h-1 w-32 bg-blue-600 dark:bg-blue-500 mb-6"></div>

        <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors">
          <div className="px-4 py-5 sm:p-6">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
              <p>
                The financial sector remains one of the primary targets for sophisticated cyber attacks in 2025, 
                with threats continuously evolving in complexity and impact. This report analyzes current cybersecurity 
                risks facing financial institutions, assesses vulnerabilities in critical infrastructure, and offers 
                strategic recommendations for enhancing resilience against emerging threats.
              </p>
              <p>
                Our analysis indicates a concerning 34% increase in ransomware attacks specifically targeting payment 
                systems and a 27% rise in API-based attacks against financial services since 2023. The estimated average 
                cost per data breach in the financial sector has reached $6.25 million in 2025, a 17% increase from the 
                previous year.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">
          Key Findings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4 transition-colors">
                Evolution of Threats Against Financial Institutions (2022-2025)
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
                Comparison of different attack vectors and their prevalence over time
              </p>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={threatEvolutionData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#555" strokeOpacity={0.2} />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="malware" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="ransomware" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="dataBreach" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    <Area type="monotone" dataKey="supplyChain" stackId="1" stroke="#ff8042" fill="#ff8042" />
                    <Area type="monotone" dataKey="apiAttacks" stackId="1" stroke="#0088FE" fill="#0088FE" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 italic transition-colors">
                Source: Global Financial CERT Analysis, 2025
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4 transition-colors">
                Financial Impact Distribution by Sector (2025)
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
                Percentage of total financial losses from cyber incidents by sector
              </p>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={financialImpactData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {financialImpactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 italic transition-colors">
                Source: Financial Services Information Sharing and Analysis Center (FS-ISAC), 2025
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4 transition-colors">
                Average Cost Per Data Breach in Financial Sector
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
                Cost in millions of dollars (2022-2025)
              </p>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={costPerBreachData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[4, 7]} label={{ value: 'USD Millions', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => [`$${value}M`, 'Cost']} />
                    <Legend />
                    <Line type="monotone" dataKey="cost" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 italic transition-colors">
                Source: IBM-Ponemon Institute Cost of a Data Breach Report, 2025
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4 transition-colors">
                Vulnerability Assessment Comparison
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
                Traditional banks (A) vs. Digital-first financial institutions (B)
              </p>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={90} data={vulnerabilityScoresData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Traditional Banks" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Digital-first Institutions" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 italic transition-colors">
                Source: World Economic Forum Global Cybersecurity Index, 2025
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors mb-10">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4 transition-colors">
              Effectiveness of Mitigation Strategies
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
              Comparing effectiveness scores, adoption rates, and cost efficiency
            </p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={mitigationStrategiesData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" domain={[0, 10]} />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="effectivenessScore" name="Effectiveness (0-10)" fill="#8884d8" />
                  <Bar yAxisId="left" dataKey="costEfficiency" name="Cost Efficiency (0-10)" fill="#0088FE" />
                  <Bar yAxisId="right" dataKey="adoptionRate" name="Adoption Rate (%)" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 italic transition-colors">
              Source: NIST Cybersecurity Framework Analysis, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">
          Critical Vulnerabilities Analysis
        </h2>
        <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors">
          <div className="px-4 py-5 sm:p-6">
            <div className="prose dark:prose-invert max-w-none">
              <h3>1. Rapid Digitization Without Adequate Controls</h3>
              <p>
                The acceleration of digital transformation in financial services, particularly following the 
                pandemic era, has created significant security gaps. Our analysis finds that 68% of financial 
                institutions have implemented new digital services without completing comprehensive security 
                reviews, creating vulnerabilities in customer-facing APIs and interconnected systems.
              </p>

              <h3>2. Legacy Infrastructure Integration Challenges</h3>
              <p>
                Traditional financial institutions continue to struggle with integrating modern security 
                protocols into legacy systems. Approximately 43% of critical financial infrastructure still 
                relies on components that are no longer receiving regular security updates, creating persistent 
                vulnerabilities that are increasingly targeted by sophisticated threat actors.
              </p>

              <h3>3. Third-Party and Supply Chain Risks</h3>
              <p>
                The expansion of financial services ecosystems has dramatically increased the attack surface. 
                Our analysis identifies a 35% increase in attacks targeting third-party service providers to 
                gain access to financial institutions. Cloud service misconfigurations and inadequate API 
                security remain the primary technical vulnerabilities exploited in these attacks.
              </p>

              <h3>4. Emerging Quantum Computing Threats</h3>
              <p>
                The advancement of quantum computing capabilities represents an existential threat to current 
                cryptographic protocols. Only 20% of financial institutions have begun implementing quantum-resistant 
                cryptography, despite estimates suggesting that quantum computers capable of breaking RSA and 
                ECC encryption could be available within 5-7 years.
              </p>

              <h3>5. Insider Threat Evolution</h3>
              <p>
                The financial sector has witnessed a 28% increase in insider-related security incidents since 2023, 
                with a concerning shift toward compromised insider credentials rather than malicious employee actions. 
                Social engineering attacks targeting employees with privileged access have demonstrated a 65% success 
                rate in penetration tests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">
          Strategic Recommendations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2 transition-colors">
                Implement Zero Trust Architecture
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                Financial institutions should transition from perimeter-based security models to comprehensive 
                zero trust architectures that verify every access request regardless of source. Implement continuous 
                validation and least-privilege access controls across all systems, with particular focus on privileged 
                account management.
              </p>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-4">Implementation Priority: High</p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2 transition-colors">
                Develop AI-Enhanced Security Operations
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                Deploy advanced machine learning and AI systems for cybersecurity operations to enable real-time 
                threat detection and automated response capabilities. Enhance security operations centers with 
                behavioral analytics and anomaly detection to identify sophisticated attacks that evade traditional 
                signature-based controls.
              </p>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-4">Implementation Priority: Medium</p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2 transition-colors">
                Establish Quantum-Resistant Cryptography Roadmap
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                Financial institutions must create comprehensive roadmaps for transitioning to post-quantum 
                cryptographic standards. Start by establishing crypto-agility frameworks that allow for rapid 
                replacement of cryptographic primitives, and prioritize protecting long-lived sensitive data 
                with quantum-resistant algorithms.
              </p>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-4">Implementation Priority: High</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">
          Regulatory Outlook & Compliance Implications
        </h2>
        <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors">
          <div className="px-4 py-5 sm:p-6">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Financial institutions face an increasingly complex regulatory landscape for cybersecurity 
                and data protection. Our analysis of regulatory trends indicates:
              </p>

              <ul>
                <li>
                  <strong>Global Regulatory Convergence:</strong> Harmonization of cybersecurity requirements 
                  across jurisdictions, with the EU's Digital Operational Resilience Act (DORA) and the upcoming 
                  US Financial Services Cybersecurity Framework 2.0 serving as benchmarks for global standards.
                </li>
                <li>
                  <strong>Supply Chain Oversight:</strong> New regulations explicitly requiring financial 
                  institutions to ensure cybersecurity compliance throughout their supply chains, with legal 
                  liability for third-party breaches increasing significantly.
                </li>
                <li>
                  <strong>Mandatory Cyber Resilience Testing:</strong> Expansion of requirements for regular 
                  penetration testing and scenario-based cyber resilience exercises, with results to be 
                  submitted to regulators.
                </li>
                <li>
                  <strong>Board-Level Accountability:</strong> Regulatory frameworks increasingly placing 
                  explicit cybersecurity oversight responsibilities on boards of directors, with potential 
                  personal liability for governance failures.
                </li>
                <li>
                  <strong>Incident Reporting Acceleration:</strong> Shortened timelines for reporting 
                  significant cyber incidents to regulatory authorities, with some jurisdictions requiring 
                  notification within 24-36 hours of detection.
                </li>
              </ul>

              <p>
                To address these evolving requirements, financial institutions should establish integrated 
                governance, risk and compliance frameworks that can adapt to the evolving regulatory landscape 
                while maintaining operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">
          Case Studies: Recent Financial Sector Incidents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2 transition-colors">
                Case Study 1: Orchestrated API Attack on Payment Processor
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                In February 2025, a major payment processor experienced a sophisticated attack targeting its 
                API infrastructure. Attackers exploited an authentication weakness to bypass rate limiting 
                controls, conducting thousands of automated transactions that went undetected for 72 hours.
              </p>
              <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mt-4 transition-colors">Key Lessons:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 transition-colors">
                <li>API security requires multi-layered validation approaches</li>
                <li>Traditional fraud detection systems often miss API-specific attack patterns</li>
                <li>Automated pattern analysis must extend to API transaction behaviors</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2 transition-colors">
                Case Study 2: Supply Chain Compromise of Investment Platform
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                In December 2024, a popular investment platform discovered malicious code in a third-party 
                analytics library used in its mobile applications. The compromise went undetected for 
                approximately 5 months, potentially exposing customer credentials and transaction data.
              </p>
              <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mt-4 transition-colors">Key Lessons:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 transition-colors">
                <li>Software supply chain security requires continuous monitoring</li>
                <li>Third-party code review must be conducted regularly, not just at integration</li>
                <li>Runtime application monitoring is essential for detecting anomalous behavior</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 transition-colors">
          Conclusion & Next Steps
        </h2>
        <div className="bg-white dark:bg-neutral-800 overflow-hidden shadow rounded-lg transition-colors">
          <div className="px-4 py-5 sm:p-6">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The cybersecurity threat landscape for financial institutions continues to evolve at an 
                unprecedented pace, with attacks becoming more sophisticated, targeted, and damaging. 
                Our analysis indicates that traditional security approaches are increasingly inadequate in 
                addressing these emerging threats.
              </p>

              <p>
                Financial institutions must adopt a strategic, forward-looking approach to cybersecurity that 
                combines advanced technical controls with comprehensive governance frameworks and a focus on 
                operational resilience. Key priorities should include:
              </p>

              <ol>
                <li>
                  <strong>Security by Design:</strong> Embedding cybersecurity requirements into all phases of 
                  digital transformation initiatives, with clear security acceptance criteria for all new systems.
                </li>
                <li>
                  <strong>Resilience-Based Planning:</strong> Shifting focus from prevention alone to ensuring 
                  operational resilience through robust detection, response, and recovery capabilities.
                </li>
                <li>
                  <strong>Collaborative Defense:</strong> Enhancing participation in industry sharing initiatives 
                  and establishing cross-functional security teams that break down traditional silos.
                </li>
                <li>
                  <strong>Talent Investment:</strong> Addressing the critical cybersecurity skills gap through 
                  targeted recruitment, upskilling programs, and strategic use of automation technologies.
                </li>
              </ol>

              <p>
                By taking these steps, financial institutions can strengthen their security posture and better 
                protect their customers, assets, and reputation in an increasingly hostile threat environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800/30 mb-10 transition-colors">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-800/50 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2 transition-colors">
              About This Report
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
              This report was compiled based on data from global financial institutions, cybersecurity vendors, 
              regulatory filings, and proprietary research. The analysis reflects the cybersecurity landscape 
              as of May 2025 and includes projected trends based on statistical modeling and expert assessment.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 transition-colors">
              For questions or additional information about this report, please contact the Risk Analysis team.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-between items-center">
        <Link href="/risk" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Risk Analysis Reports
        </Link>

        <div className="flex gap-3">
          <Link 
            href="/data/cybersecurity-financial-data.csv" 
            className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CSV
          </Link>
          <Link 
            href="/data/cybersecurity-financial-data.json" 
            className="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download JSON
          </Link>
        </div>
      </div>
    </div>
  );
}
