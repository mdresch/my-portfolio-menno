---
coverImage: "/images/lighthouse%20brightlight%201.jpeg"
title: "The Document and Content Management Plan: Taxonomy, Repositories, and Disposal"
date: 2026-11-17
excerpt: Contracts in email, policies in three SharePoint sites, and nobody sure which version is final. The Document and Content Management Plan brings order to unstructured information. This article explains its contents and how ADPA generates it.
categories:
    - Content Management
    - Records Management
    - DMBOK
    - Templates
    - ADPA
---

Structured data in databases gets a lot of governance attention. Unstructured content — documents, contracts, policies, presentations, emails, images — often gets very little, even though it holds much of an organization's knowledge and many of its legal obligations. The symptoms are familiar: the same document in five places, nobody sure which version is authoritative, and content kept forever because nobody knows when it may be deleted.

The **Document & Content Management Plan** — aligned with the document and content management knowledge area of DAMA's DMBOK — brings structure to unstructured information. This article explains its contents and how **ADPA** generates it.

## What the Plan Contains

| Section | Purpose |
| --- | --- |
| **1. Purpose and scope** | Which content and repositories are covered |
| **2. Content taxonomy** | Categories of content, such as contracts, policies, project documents, and marketing assets |
| **3. Lifecycle stages** | From creation and review through publication, archive, and disposal |
| **4. Repository of record register** | The single authoritative repository for each content type |
| **5. Disposal schedule** | When each content type may or must be deleted |
| **6. Retention alignment** | How disposal aligns with the organization's retention policies |
| **7. Access policy** | Who may view, edit, and publish each content type |
| **8. Publishing workflow** | How content is reviewed, approved, and published |
| **9. Review cadence** | When the plan is reviewed |

## How ADPA Generates It

### Inputs

- **Data domains and the governance body** from the Data Governance Charter.
- The **retention policy baseline** from the Data Storage & Operations Plan.
- **Classification levels** from the Data Security & Privacy Plan.
- The existing repository inventory (for example document management sites and wikis) and existing content-management documentation.

### Grounding

ADPA's **Governance Knowledge Graph** is checked for governed domains and the governance body, so the taxonomy aligns with existing domains — and for existing retention policies, so disposal schedules stay consistent with what's already approved.

### Outputs

Structured entities for **content types, lifecycle stages, repositories of record, and content access policies**.

### Quality Gates

- **Single repository per type:** no content type may have more than one repository of record (blocking).
- **Taxonomy non-overlap:** content categories mustn't overlap ambiguously (warning).
- **Disposal consistency:** the disposal schedule mustn't contradict the storage and operations retention baseline (blocking).

The "single repository per type" rule directly addresses the most common content problem: the same document type living authoritatively in several places, so nobody knows which copy counts.

## Where It Fits

This plan applies the retention decisions of the storage plan and the classification decisions of the security plan to unstructured content. It also creates the foundation for reliable search, knowledge management, and — increasingly — AI assistants that need to know which documents are authoritative.

## Conclusion

Unstructured content deserves the same discipline as structured data: clear categories, one authoritative home per type, defined lifecycles, appropriate access, and disposal when the time comes. A plan that's consistent with the organization's retention and classification policies turns a sprawling document landscape into managed, trustworthy information.
