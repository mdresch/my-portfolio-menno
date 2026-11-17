---
coverImage: "/images/lighthouse%20shield%20axzure.jpeg"
title: "The Data Security and Privacy Plan: Classification, Access, and Regulatory Alignment"
date: 2026-11-17
excerpt: Protecting data starts with knowing how sensitive it is and who may access it. This article explains what a Data Security and Privacy Plan contains — and how ADPA generates it without ever inventing a regulation.
categories:
    - Data Security
    - Privacy
    - DMBOK
    - Templates
    - ADPA
---

Security controls only make sense in relation to what they protect. Encrypting everything equally, or giving everyone in a department the same access, wastes effort on low-risk data and under-protects the data that matters most. The starting point is classification: how sensitive is each type of data, who is accountable for it, and which rules apply?

The **Data Security & Privacy Plan** — aligned with the data security knowledge area of DAMA's DMBOK — sets out those decisions per data domain. This article explains its contents and how **ADPA** generates it.

## What the Plan Contains

| Section | Purpose |
| --- | --- |
| **1. Purpose and scope** | Which domains, systems, and people are covered |
| **2. Classification schema** | The classification levels, such as public, internal, confidential, and restricted |
| **3. Per-domain classification** | The classification level of each governed data domain |
| **4. Access control model** | Who may access what, based on roles and need to know |
| **5. Privacy controls** | Measures such as minimization, consent, anonymization, and subject rights handling |
| **6. Regulatory alignment** | Which regulations apply and how the plan addresses them |
| **7. Incident response reference** | Links to data breach and incident procedures |
| **8. Security role assignments** | Named owners for security per domain |
| **9. Review cadence** | When the plan is reviewed |

## How ADPA Generates It

### Inputs

- **Data domains and data steward roles** from the Data Governance Charter.
- **Storage tiers per domain** from the Data Storage & Operations Plan.
- **Regulatory and compliance context** supplied by the organization.
- Existing security and privacy documentation.

### Outputs

Structured entities for **classification levels, access control policies, privacy controls, and security role assignments**.

### Quality Gates

- **Classification coverage:** every governed domain has a classification level (blocking).
- **No fabricated regulation:** no law or standard may be named unless it appears in the supplied context or the Governance Knowledge Graph (blocking).
- **Role traceability:** every access role traces to a supplied input (blocking).

### Human Review Triggers

The draft goes to a human reviewer when:

- **A restricted domain is unowned:** data classified as restricted has no named security owner.
- **A regulation appears from nowhere:** the draft cites a law that isn't in the supplied context.
- **Classifications conflict:** the draft classifies a domain differently from an existing classification in the knowledge graph.

The "no fabricated regulation" rule matters more than it might seem. AI models readily produce official-sounding references to laws and standards — sometimes the wrong jurisdiction, sometimes ones that don't apply at all. In a security and privacy plan, that kind of error can send compliance effort in entirely the wrong direction.

## Where It Fits

This plan builds on the governance charter's domains and stewards and the storage plan's tiers, and its classification levels feed the **Document & Content Management Plan** and access tiers in the **Data Warehousing & BI Plan**.

## Conclusion

Effective data security is proportionate, owned, and grounded in the regulations that actually apply. A plan that classifies every domain, assigns clear owners, defines access and privacy controls, and refuses to invent obligations gives security teams a reliable basis for everything they implement.
