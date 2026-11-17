---
coverImage: "/images/lighthouse%20shield%20key%20performance%20indicators.jpeg"
title: "The Data Modeling Standards Plan: Shared Language for Data Across the Enterprise"
date: 2026-11-17
excerpt: When every team names and models data its own way, integration becomes translation. The Data Modeling Standards Plan sets naming conventions, canonical data elements, and review rules. This article explains what it contains and how ADPA generates it.
categories:
    - Data Modeling
    - DMBOK
    - Templates
    - ADPA
    - Data Architecture
---

Is it `customer_id`, `CustomerID`, `cust_no`, or `client_ref`? Is a "customer" someone who has bought something, or anyone with an account? Small inconsistencies in how data is named and modeled multiply across systems until every integration becomes a translation exercise and every report needs a footnote.

The **Data Modeling Standards Plan** — aligned with the data modeling and design knowledge area of DAMA's DMBOK — gives the organization a shared language for data. This article explains its contents and how **ADPA** generates it.

## What the Plan Contains

| Section | Purpose |
| --- | --- |
| **1. Purpose and scope** | Which domains and models the standards apply to |
| **2. Naming conventions** | Rules for naming entities, attributes, keys, and abbreviations |
| **3. Modeling standards** | Notation, normalization, keys, and documentation rules |
| **4. Conceptual models per domain** | The key business concepts and relationships in each domain |
| **5. Canonical data elements** | Standard definitions for shared elements, such as customer identifier or order date |
| **6. Logical model overview** | How conceptual models translate into logical structures |
| **7. Model review process** | How new and changed models are reviewed and approved |
| **8. Versioning rules** | How model changes are versioned and communicated |
| **9. Review cadence** | When the standards are revisited |

**Canonical data elements** do much of the heavy lifting: one agreed definition for each shared element, reused everywhere.

## How ADPA Generates It

### Inputs

- All governed **data domains** (from the Data Governance Charter).
- The **system of record** per domain (from the Enterprise Data Architecture Charter).
- Existing naming conventions and modeling documentation.

### Outputs

The draft produces structured entities: a **naming convention standard**, **conceptual models**, **logical model references**, and **canonical data elements** — the latter becoming the foundation for master data, metadata, and BI templates.

### Quality Gates

- **Element traceability:** every data element traces to a governed data domain (blocking).
- **No orphan models:** every conceptual model maps to a governed domain (blocking).
- **Convention consistency:** the naming convention is applied uniformly across all domains in the draft (warning).

### Human Review Triggers

The draft goes to a human data architect when:

- **A definition conflicts:** a new data element clashes with an existing element of the same name in the Governance Knowledge Graph.
- **A convention is violated:** a domain's model doesn't follow the stated naming rules.
- **A model is orphaned:** a conceptual model can't be mapped to any governed domain.

These triggers catch exactly the problems that undermine modeling standards in practice: duplicate definitions and quietly diverging conventions.

## Where It Fits

The modeling standards build on the governance and architecture charters, and their canonical elements feed the **Master Data Management Plan**, the **Data Warehousing & BI Plan**, and the **Metadata Management Plan**.

## Conclusion

Data models are how an organization describes its business to its systems. Shared conventions, canonical definitions, and a disciplined review process make that description consistent — so systems can integrate, reports can agree, and new team members can understand the data without a decoder ring.
