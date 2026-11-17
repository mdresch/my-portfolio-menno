---
coverImage: "/images/global%20view%20sattelite%20lighthouses%20connected.jpeg"
title: "The Enterprise Data Architecture Charter: Systems of Record, Principles, and Target State"
date: 2026-11-17
excerpt: Which system is the authoritative source for customer data? How should data move between systems? The Enterprise Data Architecture Charter answers these questions. This article explains what it contains and how ADPA generates it without inventing technology or systems.
categories:
    - Data Architecture
    - DMBOK
    - Templates
    - ADPA
    - Enterprise Architecture
---

Ask three teams where the "real" customer data lives and you may get three different answers: the CRM, the ERP, or the data warehouse. When nobody has defined which system is authoritative, integrations multiply, numbers disagree, and every new project has to rediscover how data flows through the organization.

The **Enterprise Data Architecture Charter** — aligned with the data architecture knowledge area of DAMA's DMBOK — establishes the architectural foundation for data: the principles, the systems of record, the integration patterns, and the target state. This article explains its contents and how **ADPA** generates it.

## What the Charter Contains

| Section | Purpose |
| --- | --- |
| **1. Purpose and scope** | What the charter covers and why |
| **2. Architecture principles** | A focused set of principles (typically 4-10) that guide design decisions |
| **3. Current-state landscape** | The existing systems and how data moves today |
| **4. System of record register** | The authoritative system for each governed data domain |
| **5. Integration patterns** | Approved ways systems exchange data — such as APIs, events, or batch |
| **6. Data flow overview** | How data flows between domains and systems |
| **7. Target-state vision** | Where the architecture is heading |
| **8. Governance alignment** | How architecture decisions connect to the data governance body |
| **9. Review cadence** | When the charter is revisited |

The **system of record register** is the heart of the document. For every governed data domain, it names exactly one authoritative system — resolving the "which number is right?" debates at their source.

## How ADPA Generates It

### Inputs

The template builds on what already exists: all data domains and the governance body from the **Data Governance Charter**, the existing system inventory, technology and vendor constraints, and existing architecture documentation.

### Grounding in the Governance Knowledge Graph

Before drafting, ADPA queries its **Governance Knowledge Graph**:

- **All data domains and the governance body**, so every domain in the register is a governed one.
- **Existing systems of record across the organization**, so a system isn't re-designated for a domain that's already assigned.

### Outputs as Structured Entities

The draft produces structured entities — **systems of record, architecture principles, data flow diagram references, and integration patterns** — which later templates (integration, modeling, master data, BI) rely on.

### Quality Gates

- **Domain coverage:** every governed domain appears in the system of record register (blocking).
- **No fabricated technology:** no vendor or product name may appear unless it's in the inputs or the knowledge graph (blocking).
- **Principle count:** between four and ten principles, without contradictions (warning).

The "no fabricated technology" gate addresses a classic weakness of AI-generated architecture documents: confidently recommending products the organization doesn't use.

### Human Review

Unresolvable conflicts — such as two systems claiming the same domain — are routed to a human architect for a decision.

## Where It Fits

The charter follows the Data Governance Charter and feeds the **Data Integration & Interoperability Plan**, the **Data Modeling Standards Plan**, the **Data Storage & Operations Plan**, and the **Master Data Management Plan**. Each of those uses the systems of record and integration patterns defined here.

## Conclusion

Good data architecture starts with clear decisions: which principles apply, which system is authoritative for which data, and how systems should talk to each other. Writing those decisions down — and generating them from the organization's real inventory rather than generic best practice — gives every subsequent data initiative a stable foundation.
