import React from 'react';
import Link from 'next/link';

export default function GovernedSDLCPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent pb-2">
            Governed Feature Development
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold">
            Self-Healing Software Development Lifecycle (SDLC)
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed border-l-4 border-blue-500 pl-4 italic text-left md:text-center md:border-l-0 md:border-t-4 pt-4 md:pt-4">
            "A development model where features define their own correctness, and every change must pass atomic validation to be accepted."
          </p>
        </section>

        {/* Context */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Context</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            While building ADPA, I encountered a core challenge:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
            <li>Features interacting and breaking each other</li>
            <li>AI-driven systems requiring deterministic validation</li>
            <li>Increasing complexity across document, entity, and audit layers</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 font-medium italic">
            Traditional development approaches were not sufficient.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          {/* The Problem */}
          <section className="bg-red-50 dark:bg-red-900/10 p-8 rounded-2xl shadow-sm border border-red-100 dark:border-red-900/30">
            <h3 className="text-2xl font-bold mb-4 text-red-900 dark:text-red-400">The Problem</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Modern SDLC breaks down in three ways:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
              <li>Requirements are not enforceable</li>
              <li>Tests are reactive instead of defining truth</li>
              <li>Changes introduce hidden regressions</li>
            </ul>
            <blockquote className="border-l-4 border-red-500 pl-4 italic text-red-800 dark:text-red-300 font-medium">
              Systems grow more fragile over time instead of more stable.
            </blockquote>
          </section>

          {/* The Solution */}
          <section className="bg-green-50 dark:bg-green-900/10 p-8 rounded-2xl shadow-sm border border-green-100 dark:border-green-900/30">
            <h3 className="text-2xl font-bold mb-4 text-green-900 dark:text-green-400">The Solution</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">I designed a governed development model combining:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Requirements-driven development</li>
              <li>Test-derived system truth</li>
              <li>Capability-based execution (Skills)</li>
              <li>Atomic validation and rollback (AEV)</li>
            </ul>
          </section>
        </div>

        {/* Core Model Flow */}
        <section className="bg-gradient-to-br from-indigo-900 to-blue-900 text-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-6">Core Model</h3>
          <div className="font-mono text-blue-200 text-sm sm:text-base space-y-2">
            <div className="bg-indigo-950/50 p-3 rounded-lg border border-indigo-500/30 inline-block">Spec → Requirements → Tests → Skills → Code</div>
            <div className="text-indigo-300">↓</div>
            <div className="bg-indigo-950/50 p-3 rounded-lg border border-indigo-500/30 inline-block">AEV Workflow</div>
            <div className="text-indigo-300">↓</div>
            <div className="bg-indigo-950/50 p-3 rounded-lg border border-indigo-500/30 inline-block">Validation Gates</div>
            <div className="text-indigo-300">↓</div>
            <div className="bg-indigo-950/50 p-3 rounded-lg border border-indigo-500/30 inline-block">Commit / Rollback</div>
            <div className="text-indigo-300">↓</div>
            <div className="bg-blue-600 p-3 rounded-lg border border-blue-400 inline-block font-bold text-white shadow-md">Self-Healing System</div>
          </div>
        </section>

        {/* Part 1 — Governed Feature Loop */}
        <section>
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Part 1 — Governed Feature Loop</h3>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Each feature is built as a <strong>Feature Packet</strong>:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-6">
              <li><strong>Design Spec</strong> (Requirements + interactions)</li>
              <li><strong>Jest tests</strong> (derived from requirements)</li>
              <li><strong>Skill definition</strong> (invariants + behavior)</li>
              <li><strong>Implementation code</strong></li>
            </ul>
          </div>

          <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">🔁 Dual Loop System</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
              <h5 className="font-bold text-blue-900 dark:text-blue-300 mb-3">Feature Loop</h5>
              <div className="font-mono text-sm text-blue-800 dark:text-blue-200">
                Requirement → Test → Skill → Code → Pass
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-xl border border-purple-100 dark:border-purple-900/30">
              <h5 className="font-bold text-purple-900 dark:text-purple-300 mb-3">System Loop (Self-Healing)</h5>
              <div className="font-mono text-sm text-purple-800 dark:text-purple-200 space-y-1">
                <div>Feature B breaks Feature A</div>
                <div className="text-purple-400">↓</div>
                <div>Contract fails</div>
                <div className="text-purple-400">↓</div>
                <div>Guard blocks execution</div>
                <div className="text-purple-400">↓</div>
                <div>Interaction test added</div>
                <div className="text-purple-400">↓</div>
                <div>Skills updated</div>
                <div className="text-purple-400">↓</div>
                <div className="font-bold text-purple-900 dark:text-purple-300">System stabilizes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Part 2 — AEV Workflow */}
        <section>
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Part 2 — AEV Workflow (Execution Control)</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Every code change must pass:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2"><span className="text-green-500">✅</span> Mechanical</h4>
              <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded text-gray-800 dark:text-gray-300 overflow-x-auto">
git status{'\n'}git diff --stat
              </pre>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2"><span className="text-green-500">✅</span> Build</h4>
              <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded text-gray-800 dark:text-gray-300 overflow-x-auto">
dotnet build
              </pre>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2"><span className="text-green-500">✅</span> Runtime</h4>
              <pre className="text-xs bg-gray-100 dark:bg-gray-900 p-2 rounded text-gray-800 dark:text-gray-300 overflow-x-auto">
dotnet run
              </pre>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2"><span className="text-green-500">✅</span> Governance</h4>
              <ul className="text-xs text-gray-600 dark:text-gray-400 list-disc pl-4 space-y-1">
                <li>Ledger invariants</li>
                <li>State transitions</li>
                <li>Approval gates</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-xl border border-red-100 dark:border-red-900/30 flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-bold text-red-900 dark:text-red-400 flex items-center gap-2">🔁 If any fails:</h4>
            <pre className="text-sm bg-red-100 dark:bg-red-900/40 p-2 rounded text-red-800 dark:text-red-200">git reset --hard HEAD</pre>
          </div>
        </section>

        {/* Key Innovation */}
        <section>
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Key Innovation</h3>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">✅ The Skill Layer</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Between tests and code:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-400">
                <li>Encodes intent</li>
                <li>Defines invariants</li>
                <li>Governs feature interaction</li>
                <li>Enables consistent execution (including AI agents)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">✅ Contract-Based Feature Safety</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Features define:</p>
              <pre className="text-sm bg-gray-100 dark:bg-gray-900 p-3 rounded text-blue-600 dark:text-blue-400 overflow-x-auto">validateFeatureContract()</pre>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Other features must pass this before executing.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">✅ Manifest-Driven Governance</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-2">All features are registered and validated:</p>
              <pre className="text-sm bg-gray-100 dark:bg-gray-900 p-3 rounded text-blue-600 dark:text-blue-400 overflow-x-auto">npm run test:features</pre>
            </div>
          </div>
        </section>

        {/* Real Implementation & Why It Matters */}
        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Real Implementation (ADPA)</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">This model is actively used in ADPA:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>RAG feature packet with overlap guards</li>
              <li>Document generation system with validation pipelines</li>
              <li>Entity registry enforcing traceability</li>
              <li>Drift detection ensuring long-term alignment</li>
            </ul>
          </section>
          <section>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why It Matters</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">This model enables:</p>
            <ul className="space-y-4 text-gray-600 dark:text-gray-400">
              <li>
                <strong className="text-gray-900 dark:text-gray-200 block">✅ Reliable AI systems</strong>
                Deterministic validation over probabilistic outputs
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-200 block">✅ Enterprise governance</strong>
                Audit trails and traceable decisions
              </li>
              <li>
                <strong className="text-gray-900 dark:text-gray-200 block">✅ Scalable development</strong>
                Features can evolve without breaking the system
              </li>
            </ul>
          </section>
        </div>

        {/* What Makes This Different */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">What Makes This Different</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-600 dark:text-gray-400">
              <thead className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="p-4 rounded-tl-lg font-bold">Traditional Dev</th>
                  <th className="p-4 rounded-tr-lg font-bold text-blue-700 dark:text-blue-400">Governed Feature Development</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4">Code-driven</td>
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-200">Requirement-driven</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4">Tests after code</td>
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-200">Tests define behavior</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4">Fix bugs reactively</td>
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-200">Prevent inconsistencies structurally</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4">Manual reviews</td>
                  <td className="p-4 font-medium text-gray-900 dark:text-gray-200">Enforced validation gates</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="p-4">Fragile at scale</td>
                  <td className="p-4 font-bold text-blue-600 dark:text-blue-400">Self-healing at scale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Real Example Block */}
        <section className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-2xl shadow-sm border border-indigo-100 dark:border-indigo-900/30">
          <h3 className="text-2xl font-bold mb-6 text-indigo-900 dark:text-indigo-300">Real-World Example in Action</h3>
          <div className="font-mono text-sm sm:text-base bg-white dark:bg-gray-900 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800/50 shadow-inner">
            <div className="text-gray-800 dark:text-gray-200 mb-4">
              <span className="font-bold">RAG Context Injection</span> (Feature A)<br/>
              + <span className="font-bold">Dynamic Fallback</span> (Feature B)
            </div>
            <div className="space-y-2 text-indigo-700 dark:text-indigo-400">
              <div>→ Contract detected violation</div>
              <div>→ Guard blocked deployment</div>
              <div>→ Interaction test added</div>
              <div>→ Skill updated</div>
              <div className="font-bold text-green-600 dark:text-green-400 mt-4">→ System stabilized</div>
            </div>
          </div>
        </section>

        {/* Personal Reflection */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Personal Reflection</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            This work represents a shift in my approach:
          </p>
          <blockquote className="mt-6 text-xl text-gray-800 dark:text-gray-200 italic font-medium">
            From building features → to designing systems that govern how features are built, validated, and evolved.
          </blockquote>
        </section>

      </div>
    </main>
  );
}
