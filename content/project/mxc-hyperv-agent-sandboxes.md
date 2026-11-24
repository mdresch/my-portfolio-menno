---
slug: "mxc"
title: "MXC — Micro-Execution Container (Hyper-V & AI Agent Sandboxes)"
description: "Hardware-isolated Windows 11, Windows Server 2025, and autonomous AI agent micro-VMs at container speed — ≤ 5 ms hot dispatch, 9s stripped Win11 cold boot, airgapped VMBus execution, and 100% immutable golden parent sterility."
technologies:
  - Rust (mxc-sdk / wxc-exec)
  - Python 3.15
  - Hyper-V Gen2 (VMBus / PowerShell Direct)
  - Windows 11 Pro & Server 2025
  - Multi-Tier Standby Pools
  - TLS SNI Predictive Wake
  - SIDPA / PMBOK 8 Governance
link: "https://github.com/mdresch/mxc"
repoUrl: "https://github.com/mdresch/mxc"
liveUrl: "https://my-portfolio-menno.vercel.app/projects/mxc"
datePublished: "2026-11-24"
category: "Enterprise Architecture & Sovereign AI Execution"
screenshots:
  - "/images/showcase-cybershield-1.jpeg"
outcomes:
  - "9/9 Epics delivered across Phase 1 and Phase 2 with 271/271 automated tests passing (188 Python contract tests + 83 Rust SDK Hyper-V unit tests)."
  - "Multi-tier standby pools verified: ≤ 5 ms HotRunning dispatch (1.5 ms measured), ≤ 250 ms WarmPaused unpause (~215 ms), and 0.0 MB host RAM ColdSaved tier on NVMe."
  - "Custom ISO-to-Lean Windows 11 Pro Agent image (90 consumer AppX packages and Explorer stripped, 12-tool polyglot agent stack pre-baked) achieving a 9-second cold boot to VMBus Heartbeat."
  - "Aligned with EU AI Act Annex III (December 2, 2027 per Regulation (EU) 2026/1744) and ISO/IEC 42001 technical containment requirements."
challenges:
  - "Resolving the enterprise trilemma between shared-kernel Docker blast radius, 14–45s traditional Windows VM cold boots, and 24/7 idle Windows Server licensing/RAM burn."
  - "Executing untrusted autonomous AI agent workloads with zero network exposure and zero secrets inside the guest OS."
  - "Guaranteeing 100% session sterility across ephemeral runs without mutating golden base images."
  - "Solution: Built a Type-1 Hyper-V Generation 2 control plane in Rust (wxc-exec / mxc-sdk) using airgapped VMBus (PowerShell Direct), transient .avhdx differencing disks with instant checkpoint rollback, multi-tier Hot/Warm/Cold standby pools, and TLS SNI predictive wake."
---

# Project: MXC (Micro-Execution Container) — Built by Menno Drescher (CBa Consult)

Menno Drescher architected and built **MXC (Micro-Execution Container)** (`https://github.com/mdresch/mxc`), a multi-tier hardware containment and micro-VM execution fabric designed for untrusted autonomous AI agents, native Windows 11 / Windows Server 2025 workloads, and regulated EU enterprises.

## What Makes MXC Different from Docker

Unlike Docker containers—which share the host OS kernel and struggle with native Windows 11 or Win32 workloads—MXC unifies 10 containment backends (including Type-1 Hyper-V Gen2 micro-VMs, Windows ProcessContainer, Windows Sandbox, and WSLC) under a single declarative Rust CLI/SDK (`wxc-exec` / `mxc-sdk`). Hyper-V sandboxes run airgapped by default (`0` network adapters), execute commands and file transfers over VMBus (`PowerShell Direct`), store zero credentials inside the guest, and guarantee 100% session sterility via immutable golden VHDX parents and transient differencing disks.

## Verified Engineering Milestones

- **9 Epics Delivered** across Phase 1 (Isolation, Buffering Ingress, Golden Images, Paused RAM Trimming, Differencing Sterility, Watermark Pools) and Phase 2 (Multi-Tier Pools, Predictive Wake, Host Memory Combining) with **271/271 automated tests passing** (188 Python contract tests + 83 Rust SDK Hyper-V unit tests).
- **Multi-Tier Standby Pools:** `HotRunning` (≤ 5 ms dispatch; 1.5 ms measured), `WarmPaused` (≤ 250 ms unpause; ~215 ms measured), `ColdSaved` (0.0 MB host RAM on NVMe), plus TLS SNI predictive wake and Hyper-V host memory combining.
- **Lean Windows 11 Pro Agent Image:** Built unattended from ISO with Explorer bypassed (prompt-only PowerShell shell), 90 consumer AppX packages removed, CompactOS LZX compression, and a 12-tool polyglot agent stack (`git`, `gh`, `pwsh 7`, `python 3.15`, `uv`, `ruff`, `pytest`, `node 26`, `pnpm`, `typescript 7`, `tsx`), achieving a **9-second cold boot**.
- **Live 5-Act Verification:** Airgapped VMBus file transfer, Git/Python/TypeScript/Ruff/Pytest execution, simulated rogue mutation, instant Hyper-V checkpoint rollback, and 100% parent-image invariance verification.
- **Governance & EU Compliance:** Governed end-to-end under SIDPA / PMBOK 8 and aligned with the **EU AI Act Annex III** compliance deadline (**December 2, 2027**, per Regulation (EU) 2026/1744) and **ISO/IEC 42001**.
