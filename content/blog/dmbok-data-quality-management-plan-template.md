---
coverImage: "/images/lighthouse%20brightlight%204.jpeg"
title: "The Data Quality Management Plan: Rules, Scorecards, and Remediation"
date: 2026-11-17
excerpt: Good data quality means nothing until it's defined and measured. The Data Quality Management Plan turns it into rules, scorecards with concrete thresholds, and a remediation workflow. This article explains its contents and how ADPA generates it — completing the DMBOK template library.
categories:
    - Data Quality
    - DMBOK
    - Templates
    - ADPA
    - Data Governance
---

Everyone wants good data quality. Few organizations can say precisely what that means for their customer data, how they measure it, what level is acceptable, and what happens when it falls short. Without those answers, data quality stays an aspiration — something people complain about but nobody manages.

The **Data Quality Management Plan**, aligned with the data quality knowledge area of DAMA's DMBOK, makes data quality concrete and manageable. It's also the final template in **ADPA**'s DMBOK library, completing the set of data management templates.

## What the Plan Contains

| Section | Purpose |
| --- | --- |
| **1. Purpose and scope** | Which domains and data are covered |
| **2. Quality rule register** | Specific, testable rules — for example, "every active customer has a valid email address" |
| **3. Dimension mapping** | Which quality dimension each rule measures |
| **4. Quality scorecards** | Per-domain scorecards showing current quality |
| **5. Thresholds and targets** | Concrete numeric thresholds for acceptable and target quality |
| **6. Incident logging** | How quality issues are recorded |
| **7. Remediation workflow** | How issues are assigned, fixed, and verified |
| **8. Escalation path** | What happens when issues aren't resolved |
| **9. Review cadence** | When rules and thresholds are reviewed |

## Six Canonical Dimensions

Every rule maps to one of six fixed quality dimensions, consistent across ADPA's whole data management library:

- **Accuracy** — does the data reflect reality?
- **Completeness** — is all required data present?
- **Consistency** — does the data agree across systems?
- **Timeliness** — is the data up to date when needed?
- **Uniqueness** — are there duplicates?
- **Validity** — does the data conform to formats and rules?

Using one fixed vocabulary means quality can be compared across domains and over time.

## How ADPA Generates It

### Inputs

- The **six canonical quality dimensions**.
- **Data domains and data steward roles** from the Data Governance Charter.
- **Master data entities** from the Master Data Management Plan.
- Existing data quality documentation.

### Grounding

ADPA's **Governance Knowledge Graph** supplies the fixed dimension vocabulary — no substitutes allowed — and links every scorecard and remediation plan to an accountable domain and steward.

### Outputs

Structured entities for **data quality rules, scorecards, remediation plans, and quality incident records**.

### Quality Gates

- **Dimension conformance:** every rule maps to one of the six canonical dimensions; no new dimension may be introduced (blocking).
- **Domain coverage:** every domain has at least one rule per required dimension (blocking).
- **Numeric thresholds:** every scorecard threshold is a concrete number, not a vague target such as "high quality" (blocking).

The numeric threshold gate is what makes the plan actionable. "Customer data should be accurate" can't be monitored; "at least 98% of active customer records have a validated postal address" can.

## Completing the Library

With the Data Quality Management Plan, the DMBOK template library is complete: from the governance charter that establishes authority, through architecture, modeling, storage, security, integration, content, master data, BI, and metadata — to the quality plan that measures whether it all works. Each template builds on the outputs of the ones before it, connected through the Governance Knowledge Graph.

## Conclusion

Data quality improves when it's defined, measured, owned, and acted on. Specific rules, a shared set of dimensions, scorecards with real thresholds, and a clear remediation workflow turn quality from a complaint into a managed discipline — and close the loop on the entire data management program.
