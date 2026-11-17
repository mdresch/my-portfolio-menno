---
coverImage: "/images/lighthouse%20shield%20far%20reaching%20beams.jpeg"
title: "The AI Model Register: Knowing Exactly Which AI Was Running, When"
date: 2026-11-17
excerpt: When an AI-assisted decision is questioned months later, can you prove which model, prompt, and configuration produced it? This article explains how to build an append-only AI model register — and why it must track far more than foundation models, using ADPA as an example.
categories:
    - AI Governance
    - Model Registry
    - Audit
    - EU AI Act
    - ADPA
---

Imagine an auditor, regulator, or court asks a simple question about a decision your organization made eight months ago with the help of AI: *which AI system produced that recommendation, and how was it configured at the time?*

For many organizations, the honest answer would be "we're not sure". Models are upgraded by providers, prompts are tweaked, retrieval pipelines change, rule sets evolve — and none of it is recorded in a way that lets you reconstruct the past.

An **AI model register** fixes that. This article explains what a good register contains and why — using the approach taken for **ADPA**, a governance and document-intelligence platform — it must track much more than the foundation model.

## The Principle

> The organization maintains a centralized, authoritative, **append-only** register of every AI model, prompt-orchestration configuration, validation engine, and deployed AI capability — so it can determine which model version, configuration, and governance baseline was active in any environment at any date and time.

The register is a governance artifact in its own right, retained according to record-retention requirements.

## What Each Entry Contains

At a minimum, every entry records:

| Category | Fields |
| --- | --- |
| **Identity** | Unique identifier, name, version, cryptographic fingerprint |
| **Origin** | Provider and service source, training data reference where available, lineage to parent models |
| **Assurance** | Evaluation results, fairness and bias assessment, safety assessment |
| **Approval** | Approval status, approving authority |
| **Lifecycle** | Deployment date, retirement date, rollback procedure |
| **Context** | Associated AI use cases, risk classification, regulatory classification |
| **Traceability** | Change history and audit references |

## Track More Than the Model

This is the most important lesson. AI behavior can change materially even when the foundation model stays exactly the same. For a platform like ADPA, the register therefore covers four groups of components:

1. **Foundation models** — the large language models used, for example through a cloud AI service, plus any embedded machine learning models.
2. **Governance components** — validation engine versions, registry schema versions, governance rule packs, standards mappings (such as PMBOK, BABOK, and DMBOK), and audit rule sets.
3. **Prompt and orchestration assets** — system prompts, agent configurations, retrieval-augmented generation (RAG) pipelines, retrieval settings, and knowledge corpus releases.
4. **The links between them** — which combination was active for which use case.

A changed system prompt or a new knowledge corpus release can alter outputs as much as a model upgrade. For forensic and regulatory purposes, all of them count.

## An Example Entry

| Field | Example |
| --- | --- |
| Model ID | ADPA-MDL-0001 |
| Version | Enterprise model release, April 2026 |
| Provider | Cloud AI service |
| Approval status | Approved |
| Risk classification | Limited risk |
| Validation | Accuracy and hallucination rate measured on the platform's evaluation set |
| Fairness assessment | No material bias identified |
| Deployment date | April 2026 |
| Rollback target | Previous approved model version |
| Use cases | Requirements analysis, governance review, document generation |
| Approval authority | Governance board |
| Lineage | Supersedes the previous registry entry |
| Registry hash | Cryptographic fingerprint of the entry |

## Immutability Requirements

To serve its forensic purpose, the register must be trustworthy itself:

- Entries are **append-only**; historical entries can't be edited.
- **Superseded versions remain visible.**
- **All changes are timestamped.**
- **Every approval is attributable** to a named approver.
- Records are protected by **audit logging**.
- **Cryptographic fingerprints** are maintained wherever technically possible.

## Honest Maturity Assessment

A register on paper is not the same as a register in practice. A useful way to assess maturity:

- **Managed:** the register is implemented, populated, and evidence is retained.
- **Optimized:** registry population is automated, onboarding of new models is enforced automatically, compliance is monitored continuously, and registry quality is measured and improved.

Claiming the higher level without evidence of that automation overstates maturity — and auditors will notice.

## Why It Matters

- **Accountability:** you can explain and defend past AI-assisted decisions.
- **Regulation:** frameworks such as the EU AI Act expect documentation, logging, and traceability for AI systems, especially high-risk ones.
- **Incident response:** when something goes wrong, you can see what changed and roll back quickly.
- **Change control:** no model, prompt, or pipeline goes live without approval and evaluation.

## Conclusion

AI systems are not static — they're assembled from models, prompts, pipelines, rules, and knowledge that all change over time. An append-only model register that captures all of those components, with approvals, evaluations, and fingerprints, gives an organization something essential for trustworthy AI: the ability to answer, at any moment, exactly what was running and why it was allowed to.
