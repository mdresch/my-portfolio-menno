---
coverImage: "/images/_496d0fb6-d848-452e-8e08-03c11064c7a5.jpg"
title: "ADPA governance: Rpas Attestation (JSON)"
date: 2026-05-02
slug: "adpa-governance-rpas-attestation"
description: "Machine-readable governance artifact: governance/rpas-attestation.json."
categories:
  - ADPA
  - Governance
  - RPAS
author: "Menno Drescher"
sourceRepo: "https://github.com/mdresch/adpa"
sourceBranch: "adpa-project-charter"
sourcePath: "governance/rpas-attestation.json"
---
> **Source:** [`governance/rpas-attestation.json`](https://github.com/mdresch/adpa/blob/adpa-project-charter/governance/rpas-attestation.json) — branch `adpa-project-charter`, repository [mdresch/adpa](https://github.com/mdresch/adpa).

```json
{
  "traceability": {
    "artifactId": "RPAS-CM-GRA-005",
    "origin": "Orchestration",
    "humanDecisionId": "DEC-2026-04-13-001",
    "csrVersion": "v2.4.1+CSR.2026-04-13T16:42Z",
    "timestamp": "2026-04-13T16:42:08Z"
  },
  "authority": {
    "actorId": "Antigravity-Agent-773",
    "tier": "Orchestration",
    "ritualRole": "Executor"
  },
  "collision_prevention": {
    "taskId": "TASK-GRA-005-V2.4.0",
    "scope": [
      "orchestrator/Adpa.AppHost/Program.cs",
      "orchestrator/Adpa.Orchestrator/Program.cs",
      "orchestrator/Adpa.Orchestrator/Controllers/RitualController.cs",
      "orchestrator/Adpa.Orchestrator/Clients/IntelligenceClient.cs",
      "orchestrator/Adpa.Orchestrator/Data/GovernanceDbContext.cs",
      "orchestrator/Adpa.Orchestrator/Models/Rituals/",
      "orchestrator/Adpa.Web/Components/Pages/",
      "lib/ritual-api.ts",
      "governance/PR-GOVERNANCE.md",
      "scripts/draco-gate-5.ts",
      "scripts/rpas-pr-reporter.ts",
      "package.json",
      "governance/rpas-attestation.json"
    ],
    "status": "COMMITTED",
    "locks": []
  }
}
```
