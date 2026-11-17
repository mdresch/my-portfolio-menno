---
coverImage: "/images/lighthouse%20brightlight%203.jpeg"
title: "The Metadata Management Plan: Business Glossary, Technical Catalog, and Lineage"
date: 2026-11-17
excerpt: Metadata — data about data — is what makes data findable, understandable, and trustworthy. This article explains what a Metadata Management Plan contains and how ADPA generates it by formalizing what earlier templates defined, without inventing new meaning.
categories:
    - Metadata Management
    - Data Lineage
    - DMBOK
    - Templates
    - ADPA
---

A dataset without metadata is like a library without a catalog. The information may all be there, but nobody can find it, nobody knows what it means, and nobody can tell where it came from. Metadata — definitions, owners, technical details, and lineage — is what makes data usable and trustworthy.

The **Metadata Management Plan**, aligned with the metadata management knowledge area of DAMA's DMBOK, defines how an organization captures and governs that information. This article explains its contents and how **ADPA** generates it.

## What the Plan Contains

| Section | Purpose |
| --- | --- |
| **1. Purpose and scope** | Which metadata is managed |
| **2. Business glossary** | Agreed business definitions of terms and KPIs |
| **3. Glossary governance** | How terms are proposed, approved, and changed |
| **4. Technical metadata catalog** | Tables, fields, formats, and systems |
| **5. Lineage map** | How data flows from sources through transformations to reports |
| **6. Lineage validation rules** | How lineage is checked for completeness and correctness |
| **7. Repository of record** | The authoritative metadata repository |
| **8. Stewardship of metadata** | Who maintains which metadata |
| **9. Review cadence** | When the plan is reviewed |

## A Different Kind of Template

Most templates create new decisions. The metadata plan is different: its job is to **formalize what earlier templates already defined**. The data elements from the modeling standards, the KPIs from the BI plan, the integration contracts and data flows from the integration plan, and the master entities from the MDM plan are all brought together into one glossary, catalog, and lineage map.

## How ADPA Generates It

### Inputs

- **Data elements** (Data Modeling Standards Plan).
- **KPI definitions** (Data Warehousing & BI Plan).
- **Integration contracts and data flow mappings** (Data Integration & Interoperability Plan).
- **Master data entities** (Master Data Management Plan).
- Existing metadata documentation.

### Outputs

Structured entities for **business glossary terms, technical metadata records, data lineage edges, and the metadata repository of record**.

### Quality Gates

- **No new business meaning:** every glossary term must trace to an existing entity in the Governance Knowledge Graph (blocking). The plan formalizes meaning — it never invents it.
- **Lineage completeness:** every lineage edge references entities already present in the knowledge graph (blocking).
- **No circular lineage:** the lineage graph must not contain cycles (blocking).

The "no new business meaning" gate is a deliberate safeguard. If the metadata plan were allowed to introduce its own definitions, the glossary would quietly diverge from the models, KPIs, and contracts it's meant to describe.

## Where It Fits

The metadata plan is the connective tissue of the data management library. It makes everything defined earlier discoverable and traceable — so an analyst can look up a KPI, read its definition, see its owner, and follow its lineage back to the source system.

## Conclusion

Good metadata turns data from a hidden asset into a usable one. By consolidating definitions, technical details, and lineage from the organization's existing governed decisions — and refusing to invent new meaning — the Metadata Management Plan gives everyone one reliable map of the data landscape.
