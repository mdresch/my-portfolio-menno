import React from 'react';
import Link from 'next/link';

function ADPAArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="min-w-[900px] space-y-6">

        {/* Layer 1: Input */}
        <div className="flex justify-center">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-6 py-4 shadow-sm text-gray-900 dark:text-white font-medium">
            📄 Documents / Inputs
          </div>
        </div>

        <div className="flex justify-center text-gray-400">↓</div>

        {/* Layer 2: AI Orchestration */}
        <div className="flex justify-center gap-4 flex-wrap">
          {["OpenAI", "Google AI", "Copilot", "Ollama"].map((ai) => (
            <div key={ai} className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-lg font-medium">
              {ai}
            </div>
          ))}
        </div>

        <div className="flex justify-center text-gray-400">↓</div>

        {/* Layer 3: ADPA Core */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          <h4 className="text-center font-bold text-lg mb-4">ADPA Core Engine</h4>

          <div className="grid md:grid-cols-3 gap-4 text-sm font-medium">
            <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">Document Generator</div>
            <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">Entity Extraction</div>
            <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">Registry Model</div>
          </div>
        </div>

        <div className="flex justify-center text-gray-400">↓</div>

        {/* Layer 4: Validation */}
        <div className="grid md:grid-cols-4 gap-4 text-sm font-medium">
          {["Schema Validation", "Semantic Validation (DRACO)", "Completeness Checks", "Drift Detection"].map((item) => (
            <div key={item} className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg text-center shadow-sm">
              {item}
            </div>
          ))}
        </div>

        <div className="flex justify-center text-gray-400">↓</div>

        {/* Layer 5: Governance */}
        <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 p-4 rounded-xl text-center font-bold shadow-sm border border-yellow-200 dark:border-yellow-800/50">
          🛡️ RPAS Governance + Audit Logging + Traceability
        </div>

        <div className="flex justify-center text-gray-400">↓</div>

        {/* Layer 6: Outputs */}
        <div className="grid md:grid-cols-3 gap-4 text-sm font-medium">
          {["Audit-Ready Documents", "Decision Intelligence", "Enterprise Integrations"].map((item) => (
            <div key={item} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg text-center border border-gray-200 dark:border-gray-700 shadow-sm">
              {item}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function ADPAPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Back Link */}
        <div>
          <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent pb-2">
            ADPA
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold">
            Governing AI-Driven Decisions Through Traceability and Audit
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed border-l-4 border-blue-500 pl-4 italic text-left md:text-center md:border-l-0 md:border-t-4 pt-4 md:pt-4">
            "A platform I built to transform AI-generated documents into structured, validated, and auditable decision systems."
          </p>
        </section>

        {/* Short Description */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Most AI tools generate content.<br/>
            ADPA makes that content <strong className="text-gray-900 dark:text-white">verifiable, governed, and usable in real enterprise environments</strong>.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">It combines:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
            <li>AI-driven document generation</li>
            <li>Entity extraction and traceability</li>
            <li>Validation and audit pipelines</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Into a system aligned with PMBOK, BABOK, and DMBOK governance practices.
          </p>
        </section>

        {/* The Problem I Solved */}
        <section>
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">The Problem I Solved</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Modern AI systems can generate documents—but they introduce risk:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "No traceability from output → source",
              "No validation of correctness or completeness",
              "No audit trail for decisions",
              "No alignment with governance frameworks"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <span className="text-red-500 font-bold">✕</span> {item}
              </li>
            ))}
          </ul>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-xl text-gray-700 dark:text-gray-300">
            Enterprises don’t just need AI that works. <br/>
            They need AI they can <strong>prove is correct and compliant</strong>.
          </blockquote>
        </section>

        {/* My Approach */}
        <section className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold mb-6">My Approach</h3>
          <p className="text-lg text-indigo-100 mb-6">I designed ADPA around a simple but powerful principle:</p>
          <div className="bg-indigo-950/50 p-4 rounded-xl text-center font-mono text-blue-200 mb-6 border border-indigo-500/30 break-words text-sm sm:text-base">
            Document → Entity → Validation → Audit → Decision
          </div>
          <p className="text-indigo-100 mb-4">Instead of treating documents as static text, ADPA:</p>
          <ul className="list-disc pl-6 space-y-2 text-indigo-100">
            <li>Extracts structured <strong>entities</strong> (risks, stakeholders, requirements, etc.)</li>
            <li>Links them in a <strong>governed registry model</strong></li>
            <li>Validates them using deterministic rules (AEV)</li>
            <li>Produces <strong>audit-ready outputs with full traceability</strong></li>
          </ul>
        </section>

        {/* Key Capabilities */}
        <section>
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Key Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><span className="text-blue-500">✅</span> Governed Document Generation</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                <li>AI-generated documents aligned with PMBOK / BABOK / DMBOK</li>
                <li>Template-driven with structured inputs</li>
                <li>Multi-provider AI orchestration (OpenAI, Google, etc.)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><span className="text-blue-500">✅</span> Entity Extraction & Registry</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                <li>Documents converted into structured entities</li>
                <li>Linked across lifecycle (requirements, risks, stakeholders)</li>
                <li>Enables <strong>traceability across decisions</strong></li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><span className="text-blue-500">✅</span> Validation & Audit Pipeline</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                <li>Multi-layer validation (schema, semantic, completeness)</li>
                <li>Quality scoring and audit logs</li>
                <li>Drift detection against baselines</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><span className="text-blue-500">✅</span> Drift Detection & Resolution</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                <li>Detects deviation from expected project state</li>
                <li>Flags inconsistencies across documents and entities</li>
                <li>AI-assisted resolution workflows</li>
              </ul>
            </div>
            <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><span className="text-blue-500">✅</span> Enterprise Integration Layer</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 md:grid md:grid-cols-3">
                <li>Confluence, SharePoint, GitHub</li>
                <li>API-driven architecture (Express + Next.js)</li>
                <li>Real-time updates via WebSockets</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Architecture & Onboarding Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Architecture Overview */}
          <section>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Architecture Overview</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">ADPA is built as a <strong>full-stack enterprise platform</strong>:</p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><strong className="text-gray-900 dark:text-gray-200">Frontend:</strong> Next.js (admin portal + onboarding flows)</li>
              <li><strong className="text-gray-900 dark:text-gray-200">Backend:</strong> Express.js (modular API)</li>
              <li><strong className="text-gray-900 dark:text-gray-200">Database:</strong> PostgreSQL (Supabase)</li>
              <li><strong className="text-gray-900 dark:text-gray-200">Cache/Queue:</strong> Redis (Railway)</li>
              <li><strong className="text-gray-900 dark:text-gray-200">AI Layer:</strong> Multi-provider orchestration</li>
              <li><strong className="text-gray-900 dark:text-gray-200">Observability:</strong> Langfuse tracing</li>
            </ul>
          </section>

          {/* Onboarding Model */}
          <section>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Onboarding Model</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">ADPA uses a <strong>dual-entry model</strong>:</p>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white">1. Assess (Public Entry)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Users upload documents → receive maturity score, gap analysis, and initial insights.</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white">2. Govern (Core Platform)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">That same data becomes a structured project, fully traceable entities, and audit-ready documentation.</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white">3. Operate (Scale)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Continuous document generation under governance with real-time validation and monitoring.</p>
              </div>
            </div>
            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/50">
              <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">💡 Key Insight: The same pipeline powers onboarding and enterprise governance.</p>
            </div>
          </section>
        </div>

        {/* What I Focused On */}
        <section className="bg-gray-100 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What I Focused On (Engineering Perspective)</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Designing systems that scale beyond 10,000+ entities per project</li>
            <li>Building <strong>deterministic validation layers on top of probabilistic AI</strong></li>
            <li>Creating traceability between documents, entities, and decisions</li>
            <li>Ensuring alignment with real-world governance frameworks</li>
          </ul>
        </section>

        {/* Current Status & Why This Matters */}
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Current Status</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc pl-5">
              <li>Production-grade architecture established (ADPA V7 registry)</li>
              <li>Core pipeline (Document → Entity → Audit) is operational</li>
              <li>Active refactoring and stabilization phase</li>
              <li>Extending toward AI system governance, compliance artifact generation, and agent-based workflows</li>
            </ul>
          </section>
          <section>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why This Matters</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              With regulations like the EU AI Act coming into force (2026), organizations must track how AI outputs are created, validate their correctness, and provide audit evidence.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300 font-medium">
              ADPA is designed to make that possible—by default.
            </blockquote>
          </section>
        </div>

        {/* Personal Reflection */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Personal Reflection</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            ADPA represents my shift from building applications → to building <strong>governance systems for AI-driven environments</strong>.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            It combines software engineering, data structuring, and enterprise governance thinking into a single architecture.
          </p>
        </section>

        {/* System Architecture & Flows */}
        <section className="pt-8 space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            System Architecture & Flows
          </h3>

          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ADPA transforms raw AI-generated content into structured, validated, and governed decision systems through a layered architecture.
          </p>

          <ADPAArchitectureDiagram />
        </section>

      </div>
    </main>
  );
}
