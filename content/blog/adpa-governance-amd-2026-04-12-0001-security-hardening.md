---
coverImage: "/images/_1a388a79-64b0-430f-8fef-777af6317617.jpeg"
title: "✅ RPAS‑CM Amendment Record: AMD‑2026‑04‑12‑0001"
date: 2026-04-12
slug: "adpa-governance-amd-2026-04-12-0001-security-hardening"
description: "- Type: FIX / INT - Status: Certified - Version Impact: v2.3.1 (Security Patch) - Reference Commit: a4f39bb6 - Governance Gate: DRACO-Automated + Gemini-Verified"
categories:
  - ADPA
  - Governance
  - RPAS
author: "Menno Drescher"
sourceRepo: "https://github.com/mdresch/adpa"
sourceBranch: "adpa-project-charter"
sourcePath: "governance/AMD-2026-04-12-0001-Security-Hardening.md"
---
> **Source:** [`governance/AMD-2026-04-12-0001-Security-Hardening.md`](https://github.com/mdresch/adpa/blob/adpa-project-charter/governance/AMD-2026-04-12-0001-Security-Hardening.md) — branch `adpa-project-charter`, repository [mdresch/adpa](https://github.com/mdresch/adpa).

# ✅ RPAS‑CM Amendment Record: AMD‑2026‑04‑12‑0001

## 1. Metadata
- **Type**: FIX / INT
- **Status**: Certified
- **Version Impact**: v2.3.1 (Security Patch)
- **Reference Commit**: a4f39bb6
- **Governance Gate**: DRACO-Automated + Gemini-Verified

## 2. Change Description
This amendment records the domain-wide security hardening of the ADPA framework. 

### Core remediations:
1. **Broken Access Control**: Ownership enforcement (`created_by`) implemented at the SQL layer for Playbooks, Issues, and Risks.
2. **RCE Mitigation**: Removal of `new Function()` and `with` patterns; integration of `expr-eval` sandboxed parser.
3. **Regression Baseline**: Initialization of the `/server/src/__tests__/security` suite.

## 3. Verification Evidence
- **Automated Tests**: 100% Pass (Playbook isolation, Strategy injection rejection).
- **Manual Verification**: Empirical reproduction script confirmed User B access denial to User A resources.
- **Audit Trail**: Reference artifacts moved to `/governance/security/archive/2026-04-remediation/`.

## 4. Certification
The ADPA framework is hereby certified as **Secure-by-Default** regarding the specified vectors. All future modules must inherit the ownership propagation pattern established in this amendment.
