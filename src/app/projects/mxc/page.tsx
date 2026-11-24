import React from "react";
import Link from "next/link";

const METRICS = [
  { label: "Hot SLA Dispatch", value: "≤ 5 ms", detail: "1.5 ms measured" },
  { label: "Warm Standby Unpause", value: "≤ 250 ms", detail: "~215 ms measured" },
  { label: "Win11 Lean Agent Boot", value: "9 sec", detail: "Heartbeat + VMBus" },
  { label: "Automated Tests", value: "271 / 271", detail: "83 Rust + 188 Python" },
  { label: "Session Sterility", value: "100%", detail: "Immutable Golden Parent" },
];

const TECH_STACK = [
  "Rust (mxc-sdk / wxc-exec)",
  "Python 3.15",
  "Hyper-V Gen2 (VMBus / PowerShell Direct)",
  "Windows 11 Pro & Server 2025",
  "Multi-Tier Standby Pools",
  "TLS SNI Predictive Wake",
  "SIDPA / PMBOK 8 Governance",
];

const HIGHLIGHTS = [
  "9/9 Epics delivered across Phase 1 (Isolation, Buffering Ingress, Golden Images, Paused RAM Trimming, Differencing Sterility, Watermark Pools) and Phase 2 (Multi-Tier Pools, Predictive Wake, Host Memory Combining).",
  "Custom ISO-to-Lean Windows 11 Pro Agent image: 90 consumer AppX packages & Explorer stripped, 12-tool polyglot agent stack pre-baked, 9-second cold boot.",
  "Live 5-Act verification: airgapped VMBus file transfer, Git/Python/TypeScript/Ruff/Pytest execution, simulated rogue mutation, instant Hyper-V checkpoint rollback, and zero-mutation parent verification.",
  "Aligned with EU AI Act Annex III (December 2, 2027 per Regulation (EU) 2026/1744) and ISO/IEC 42001 technical containment.",
];

function MXCArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="min-w-[760px] space-y-5">
        <div className="flex justify-center">
          <div className="rounded-xl border border-gray-200 bg-white px-6 py-4 font-medium text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            Autonomous AI Agent / Regulated Enterprise Request (HTTPS / TLS SNI / CLI)
          </div>
        </div>

        <div className="flex justify-center text-gray-400">↓</div>

        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950 to-blue-950 p-6 text-white shadow-lg">
          <h4 className="mb-4 text-center text-lg font-bold">
            MXC Control Plane (`wxc-exec` / `mxc-sdk` in Rust + Buffering JIT Ingress)
          </h4>
          <div className="grid grid-cols-3 gap-4 text-center text-sm font-medium">
            <div className="rounded-lg border border-white/20 bg-white/10 p-3">
              TLS SNI Predictive Wake
            </div>
            <div className="rounded-lg border border-white/20 bg-white/10 p-3">
              Airgapped VMBus Transport (0 NICs)
            </div>
            <div className="rounded-lg border border-white/20 bg-white/10 p-3">
              Zero-Secret Host Orchestration
            </div>
          </div>
        </div>

        <div className="flex justify-center text-gray-400">↓</div>

        <div className="grid grid-cols-3 gap-4 text-center text-sm font-medium">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200">
            <div className="font-bold">HotRunning Tier</div>
            <div className="mt-1 text-xs opacity-90">≤ 5 ms dispatch (1.5 ms measured)</div>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-200">
            <div className="font-bold">WarmPaused Tier</div>
            <div className="mt-1 text-xs opacity-90">≤ 250 ms unpause · 0.0% idle CPU</div>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-sky-900 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200">
            <div className="font-bold">ColdSaved Tier</div>
            <div className="mt-1 text-xs opacity-90">0.0 MB host RAM on NVMe</div>
          </div>
        </div>

        <div className="flex justify-center text-gray-400">↓</div>

        <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-center font-semibold text-cyan-950 shadow-sm dark:border-cyan-800/60 dark:bg-cyan-950/40 dark:text-cyan-100">
          Type-1 Hyper-V Gen2 Micro-VMs · Transient `.avhdx` Differencing Disks · Immutable Golden VHDX Parent
        </div>
      </div>
    </div>
  );
}

export default function MXCProjectPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-4xl space-y-14">
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-cyan-700 hover:underline dark:text-cyan-400"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Hero */}
        <section className="space-y-5 text-center">
          <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-900 dark:bg-cyan-900/40 dark:text-cyan-200">
            Enterprise Architecture &amp; Sovereign AI Execution · Active
          </span>
          <h1 className="bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-800 bg-clip-text pb-2 text-4xl font-extrabold text-transparent dark:from-white dark:via-cyan-200 dark:to-blue-200 md:text-6xl">
            MXC — Micro-Execution Container
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 md:text-2xl">
            Hardware-isolated Windows 11, Windows Server 2025 &amp; AI Agent micro-VMs at container speed.
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            MXC bridges the gap between shared-kernel Docker containers and slow traditional VMs. Built for untrusted
            autonomous AI agents and regulated EU enterprises, it delivers Type-1 Hyper-V Generation 2 micro-VMs
            controlled over airgapped VMBus (zero network adapter required), multi-tier Hot/Warm/Cold standby pools,
            predictive TLS wake, host memory combining, and instant checkpoint rollback.
          </p>
        </section>

        {/* Verified Metrics */}
        <section aria-label="Verified engineering metrics">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-800/70"
              >
                <div className="text-2xl font-extrabold text-cyan-700 dark:text-cyan-300">{metric.value}</div>
                <div className="mt-1 text-xs font-semibold text-gray-900 dark:text-gray-100">{metric.label}</div>
                <div className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{metric.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Multi-Tier Hardware Containment Architecture
          </h3>
          <MXCArchitectureDiagram />
        </section>

        {/* Key Highlights */}
        <section className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800/60">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Verified Engineering Milestones</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-cyan-600 dark:text-cyan-400">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-cyan-100 px-3 py-1.5 text-sm font-medium text-cyan-900 dark:bg-cyan-900/40 dark:text-cyan-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <section className="flex flex-wrap items-center justify-center gap-4 border-t border-gray-200 pt-8 dark:border-gray-800">
          <a
            href="https://github.com/mdresch/mxc"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-700 px-6 py-3 font-semibold text-white shadow transition-colors hover:bg-cyan-800"
          >
            View Repository on GitHub
          </a>
          <Link
            href="/contact?topic=mxc-demo"
            className="rounded-lg border border-cyan-700 px-6 py-3 font-semibold text-cyan-700 transition-colors hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-cyan-950/40"
          >
            Request 15-Min Live Demo (CBa Consult)
          </Link>
        </section>
      </div>
    </main>
  );
}
