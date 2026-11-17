---
coverImage: "/images/lighthouse%20shield%20kpi%20and%20okrs.jpeg"
title: "Anatomy of an SOP Handover Document: An Employee Offboarding Example"
date: 2026-11-17
excerpt: When a project delivers a standard operating procedure, who owns it next — and what happens to the issues that were deliberately left open? This article walks through a real-world style SOP handover document for an employee offboarding procedure produced by a SOX remediation project.
categories:
    - Operations
    - SOX Compliance
    - Standard Operating Procedures
    - Identity and Access Management
    - Handover
---

Projects often end with a well-written procedure and a vague sense that "operations will take it from here". Months later, nobody is sure who owns it, when it should be reviewed, or why certain improvements were never made.

A **handover document** prevents that. It formally transfers ownership of standard operating procedures (SOPs) from a project to the operating organization — including the items that were consciously left open. This article walks through an example: the handover of an **Employee Offboarding SOP** produced by a SOX audit remediation project.

## 1. The Header

The header makes accountability unambiguous:

- **Project:** SOX audit remediation — employee offboarding SOP.
- **Receiving departments:** human resources, ICT / identity and access management, and security.
- **Project lead**, **operations owner** (here: the IT security / IAM lead), and **client sponsor**, each named.
- **Handover date.**

## 2. The SOP Inventory

Each SOP being transferred is listed with its template ID, version, domain, operating owner, and quality status. In this example:

| SOP | Version | Domain | Operating Owner |
| --- | --- | --- | --- |
| Employee Offboarding Procedures | 2.2.1 | ICT / HR (cross-functional) | IT Security / IAM Lead |

The quality status confirms that the delivered SOP is complete and internally consistent: **14 controls, 17 KPIs, 13 RACI rows, and 13 appendices**, with no unresolved placeholders.

From the handover date, maintenance, versioning, and control ownership move to the named operating owner.

## 3. Outstanding Items — Carried Forward, Not Dropped

This is the section most handovers lack. These items were identified during the project and **deliberately not closed**. They aren't oversights; they're decisions, and operations now owns them.

| Item | Why It's Still Open | Recommended Next Action |
| --- | --- | --- |
| **Session expiration and idle timeout** | An identity platform configuration control, not an offboarding process gap — out of scope by design | Route to the IAM platform team as a sign-in frequency policy change |
| **Risk-tiering of third-party closure confirmations** | The client chose to keep the stricter baseline (written confirmation for all systems) for now | Revisit if third-party response times become a bottleneck |
| **Critical role register ownership split and freshness KPI** | Proposed refinement deferred | Revisit at the next review if the register goes stale |
| **Formal risk-scoring tiers for insider-threat reviews** | Proposed model deferred; current scope is role-based | Revisit if departure volume strains security capacity |
| **Localization packs for other countries** | Country-specific appendices currently cover the Netherlands only, by design | Build a localization pack for each new jurisdiction |

Recording the *reason* each item is open is what makes this useful. A future reviewer can see that a control was deliberately kept strict, rather than assuming it was never considered.

## 4. Acceptance and Sign-Off

The project lead, operations owner, and client sponsor sign. By signing, the operations owner accepts ownership of the SOP **and** of the outstanding items, and commits to the review cadence.

## 5. Review Cadence

- **Full SOP review:** annually, or immediately when the identity provider, payroll system, or regulatory scope changes materially.
- **Quarterly access recertification:** continues as defined in the SOP itself.
- **Critical role register:** reviewed at least twice a year, led by HR.
- **The handover document itself** is reissued whenever the SOP inventory, operating owner, or outstanding items change — it's a living record, not a one-time form.

## Why This Matters for Offboarding

Offboarding is a high-stakes process. Access that isn't revoked promptly is a classic audit finding and a real security risk; final pay, benefits, and legal obligations must be handled correctly; and responsibilities span HR, IT, security, and line management. A procedure this important needs a clear owner, a review rhythm, and full transparency about its known limitations.

## Conclusion

A good handover document is short, but it answers the questions that matter most after a project ends: what was delivered, who owns it now, what was deliberately left open and why, and when it will be looked at again. That turns a project deliverable into an operational asset — and ensures conscious decisions aren't mistaken for forgotten gaps.
