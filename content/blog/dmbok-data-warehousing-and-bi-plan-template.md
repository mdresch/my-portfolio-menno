---
coverImage: "/images/lighthouse%20objective%20key%20results%20key%20performance%20indicatiors.jpeg"
title: "The Data Warehousing and BI Plan: One Definition, One Report of Record"
date: 2026-11-17
excerpt: Two dashboards, two different revenue numbers, and a meeting spent arguing about which is right. The Data Warehousing and BI Plan defines KPIs once, traces them to trusted sources, and names a single report of record. This article explains how ADPA generates it.
categories:
    - Business Intelligence
    - Data Warehousing
    - DMBOK
    - Templates
    - ADPA
---

Every organization has had the meeting: two dashboards show two different numbers for the same metric, and the first half hour is spent arguing about which one is right. The cause is almost always the same — KPIs defined differently in different places, built on different sources, with no single report everyone agrees to trust.

The **Data Warehousing & BI Plan** — aligned with the data warehousing and business intelligence knowledge area of DAMA's DMBOK — prevents that. This article explains its contents and how **ADPA** generates it.

## What the Plan Contains

| Section | Purpose |
| --- | --- |
| **1. Purpose and scope** | Which analytics and reporting are covered |
| **2. Subject area map** | The analytical subject areas, such as sales, finance, and operations |
| **3. Source traceability** | Which governed sources feed each subject area |
| **4. KPI definitions** | Precise definitions and calculation logic for each KPI |
| **5. Dimensional model overview** | The facts and dimensions behind the reports |
| **6. Metric ownership** | Who owns each KPI and its definition |
| **7. Report of record register** | The single authoritative report for each KPI |
| **8. BI access tiers** | Who may see which reports and data |
| **9. Review cadence** | When definitions and reports are reviewed |

## How ADPA Generates It

### Inputs

- **Systems of record and data domains** from the architecture and governance charters.
- **Master data entities** from the Master Data Management Plan.
- The existing BI and analytics tool inventory and BI strategy documentation.

### Grounding

ADPA's **Governance Knowledge Graph** is checked for governed domains and master data entities — so subject areas and KPIs are built on trusted, deduplicated data — and for KPI definitions that already exist elsewhere in the organization, so new definitions don't conflict with them.

### Outputs

Structured entities for **subject areas, dimensional model references, KPI definitions, and reports of record**.

### Quality Gates

- **KPI traceability:** every KPI names a source master data entity or system of record (blocking).
- **No duplicate KPI logic:** no KPI may be defined twice with conflicting logic in the same draft (blocking).
- **Single report of record:** no KPI may have more than one report of record (blocking).

These three rules capture the essence of trustworthy BI: every number has a known source, one definition, and one official home.

## Where It Fits

The BI plan sits downstream of governance, architecture, modeling, and master data. Its KPI definitions then feed the **Metadata Management Plan**, where they become part of the business glossary and lineage — so anyone can see exactly where a number comes from.

## Conclusion

Business intelligence is only as valuable as the trust people place in it. Defining each KPI once, tracing it to governed sources, assigning an owner, and naming a single report of record turns dashboards from a source of debate into a basis for decisions.
