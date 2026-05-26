---
title: "Making ADPA's Governance Knowledge Graph More Reliable, Traceable, and Useful"
date: "2026-05-26"
author: "Menno Drescher"
excerpt: "How we improved template usage tracking, document-graph separation, Neo4j sync reliability, and graph search alignment to make ADPA's Governance Knowledge Graph easier to trust."
categories:
  - ADPA
  - Governance
  - Neo4j
  - Knowledge Graph
  - Engineering
coverImage: "/images/default-project-image.jpg"
slug: "adpa-governance-knowledge-graph-reliability"
---

# Making ADPA's Governance Knowledge Graph More Reliable, Traceable, and Useful

Over the last improvement cycle, we focused on one important theme: making the relationship between document generation, templates, and the Governance Knowledge Graph easier to trust.

ADPA already connects project documents, extracted entities, templates, and project context into a Neo4j-backed Governance Knowledge Graph. But as usage grew, we found a few places where the product was not telling the full story clearly enough. Template usage counts, generated document counts, graph upload counts, and extracted entity counts were being displayed as if they were the same thing, even though they represent different stages of the workflow.

We improved that.

---

## Clearer Template Usage Tracking

The first issue was template usage. A template should only count as "used" once a generated document is actually persisted. Previously, one generation path could increment usage too early, while another path handled usage after queued document creation.

We cleaned this up so usage tracking follows the real lifecycle:

> A template generation is counted after the document exists.

This makes the "Document Generations" count more meaningful, especially when jobs are queued, retried, or fail before persistence.

---

## Better Separation Between Generated and Synced Documents

We also clarified a mismatch between the template detail page and the GKG tab.

There are now separate concepts for:

- **Documents generated** in the application database.
- **Documents synced** into Neo4j.
- **Entities extracted** into semantic graph units.

This matters because a document can exist in ADPA before it has been fully processed into the graph. Instead of hiding that distinction, the UI now makes it visible.

The GKG tab now shows clearer cards for:

| Card | What it represents |
|------|-------------------|
| Documents generated | Records persisted in the ADPA application database |
| Documents in graph | Nodes synced into Neo4j |
| Entities extracted | Semantic units derived from governance data tables |

If generated documents have not yet been synced to Neo4j, the interface can surface that gap instead of presenting misleading totals.

---

## Stronger Neo4j Sync Model

We reviewed the Neo4j sync path across projects, documents, templates, tasks, semantic units, and dependencies.

The project-level sync remains the main reconciliation mechanism. It writes:

- **Project nodes**
- **Program relationships** where available
- **Document nodes**
- **Template nodes** and `GENERATED_FROM` relationships
- **Task nodes**
- **Semantic units** extracted from governance data tables
- **Project dependency edges**

This gives ADPA a more complete graph view of governance context, rather than only storing isolated document metadata.

---

## Graph Search Alignment

The frontend Neo4j dashboard included a "Test Graph Query" experience, but the UI was calling an integration search endpoint that was not yet wired on the backend. We traced the request path and aligned the frontend search action with a dedicated Neo4j integration route.

That gives the dashboard a clearer path for querying graph nodes such as projects, documents, templates, tasks, and semantic units.

---

## Why This Matters

These improvements make ADPA's governance intelligence more explainable.

When a user asks why a count changed, why a template appears unused, or why a graph has fewer documents than the template page, the system now has clearer answers. Generated documents, synced graph documents, and extracted entities are treated as related but distinct signals.

That creates a better foundation for:

- **Graph-based project search**
- **Template performance analysis**
- **Governance traceability**
- **Document quality feedback loops**
- **Future AI-assisted recommendations** based on graph context

---

## What Comes Next

The next step is continuing to harden the graph workflow: better reconciliation visibility, easier manual resync actions, and clearer status feedback when Neo4j is unavailable or still processing recent documents.

The goal is simple: ADPA should not just generate project governance documents. It should understand how those documents connect to the wider project knowledge model.

---

*Posted by the ADPA engineering team. The ADPA framework is an open governance platform for PMBOK-aligned project management.*
