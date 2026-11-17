---
coverImage: "/images/lighthouse%20brightlight%202.jpeg"
title: "The Master Data Management Plan: Golden Records, Match Rules, and Stewardship"
date: 2026-11-17
excerpt: The same customer in five systems, each with a slightly different address. Master data management creates one trusted version of core business entities. This article explains what an MDM plan contains and how ADPA generates it with deterministic, traceable rules.
categories:
    - Master Data Management
    - Data Quality
    - DMBOK
    - Templates
    - ADPA
---

The same customer exists in the CRM, the billing system, the support desk, and the e-commerce platform — each with a slightly different name spelling, address, or phone number. The same product has three different codes depending on which system you ask. Reports disagree, customers receive duplicate mailings, and analytics are built on shaky ground.

**Master data management (MDM)** creates one trusted version — a "golden record" — of the core entities a business runs on: customers, products, suppliers, employees, locations. The **Master Data Management Plan**, aligned with the reference and master data knowledge area of DAMA's DMBOK, defines how. This article explains its contents and how **ADPA** generates it.

## What the Plan Contains

| Section | Purpose |
| --- | --- |
| **1. Purpose and scope** | Which master data entities are managed |
| **2. Master entity inventory** | The core entities, such as customer, product, and supplier |
| **3. Source system mapping** | Which systems hold data about each entity |
| **4. Golden record rules** | Survivorship rules: which source wins for each attribute |
| **5. Match/merge rules** | How duplicate records are identified and combined |
| **6. Data stewardship** | Who is accountable for each master entity |
| **7. Reference data sets** | Shared code lists such as countries, currencies, and product categories |
| **8. Escalation path** | How unresolved matches and conflicts are decided |
| **9. Review cadence** | When the plan is reviewed |

## How ADPA Generates It

### Inputs

- **Data domains and steward roles** from the Data Governance Charter.
- **Systems of record** per domain from the Enterprise Data Architecture Charter.
- **Canonical data element definitions** from the Data Modeling Standards Plan.
- Existing MDM documentation.

### Grounding

ADPA's **Governance Knowledge Graph** ensures that every master entity traces to a domain with an accountable steward, and that source mappings use real, designated systems.

### Outputs

Structured entities for **master data entities, golden record rules, match/merge rules, and reference data sets** — which the BI and metadata plans then build on.

### Quality Gates

- **Steward traceability:** every master entity traces to a domain with an assigned steward (blocking).
- **Deterministic rules:** every survivorship and match rule is deterministic, or explicitly names an escalation path (blocking).
- **No cross-source conflict:** a golden record rule mustn't contradict an existing rule for the same entity in the knowledge graph (blocking).

The "deterministic rules" gate is important. Vague rules such as "use the most accurate address" can't be implemented. A rule like "use the address from billing when updated within 12 months, otherwise from CRM; escalate to the customer data steward when both are older" can.

## Where It Fits

MDM builds on governance, architecture, and modeling decisions. Its golden records then become the trusted source for the **Data Warehousing & BI Plan** — where every KPI must name its source — and its entities feed lineage in the **Metadata Management Plan**.

## Conclusion

Master data is the backbone of reporting, customer experience, and automation. A plan with clear entity ownership, deterministic matching and survivorship rules, shared reference data, and a defined escalation path turns conflicting copies into a single, trusted view of the business.
