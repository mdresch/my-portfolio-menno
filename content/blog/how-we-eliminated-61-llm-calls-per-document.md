---
title: "How We Eliminated 61 LLM Calls Per Document With One Prompt Change"
date: "2026-05-26"
author: "Menno Drescher"
excerpt: "Building an inline entity extraction agent inside the ADPA document generation pipeline — replacing a 61-job extraction pipeline with a few lines of prompt instruction and a small parser service, at zero additional LLM call cost."
categories:
  - ADPA
  - AI
  - Engineering
  - LLM
  - Performance
coverImage: "/images/default-project-image.jpg"
slug: "how-we-eliminated-61-llm-calls-per-document"
---

# How We Eliminated 61 LLM Calls Per Document With One Prompt Change

**Building an inline entity extraction agent inside the ADPA document generation pipeline**

---

There's a particular kind of engineering satisfaction that comes not from adding something new, but from realising you can throw something away. Last week we got to do exactly that — we deleted a 61-job extraction pipeline and replaced it with a few lines of prompt instruction and a small parser service. The net cost: zero additional LLM calls. Here's how.

---

## The Problem: Reading What You Just Wrote

ADPA (Advanced Document Processing Analytics Framework) generates large, PMBOK-compliant project management documents. We're talking full project charters, risk registers, stakeholder matrices, scope statements — enterprise documents that can run to hundreds of sections. Generating them is the hard part, and the LLM does a good job.

But after each document was saved to the database, a second pipeline kicked in: a `project-data-extraction` job that spawned **61 parallel child jobs**, one per entity type. Stakeholders, risks, milestones, deliverables, budget baselines, resource assignments, constraints, assumptions — all 61 of them.

Each child job would take the full document corpus, send it back to an LLM, and ask: *"Given this document, extract all the stakeholders. Return structured JSON."* Then the next job: *"Extract all the risks."* And so on. Sixty-one times.

In production this had compounded badly. The "ADPA - Advanced Document Processing Analytics Framework" project alone had accumulated **309 stakeholders, 393 risks, 305 milestones, and 684 deliverables** across **61 completed extraction runs on 1,811 documents**. The numbers are enormous partly because the pipeline kept re-extracting the same documents on reruns, and partly because the extractor model was reading the *saved final text* — not necessarily what the drafting model had intended when it wrote it. Subtle rewording, summarisation artefacts, and context loss between generation and extraction meant entity data was inconsistent.

It was slow. It was expensive. And it was solving a problem we'd created for ourselves.

---

## The Insight: The Author Already Knows

Here's the thing that felt obvious in hindsight: the **drafting model already knows exactly what it just wrote**. It just invented those stakeholders. It named those risks. It assigned those milestones to those phases. The information is right there, at generation time, in the model's context window.

Asking a second model to re-read the saved document and extract the same information is equivalent to asking a journalist to write an article, then hiring a second journalist to read the published version and tell you what sources were cited. The original journalist had that list in their notebook while they were writing.

So instead of extracting *after* generation, we'd extract *during* generation — by instructing the drafting model to tag its own output.

---

## The Implementation: H8 Markdown as a Side Channel

The core mechanic is simple. At the end of each section prompt, we add an instruction block:

```
After writing the section content above, append any entities you've introduced 
using the following tag format. Use H8 headings (########) — these are not 
standard markdown headings and will not interfere with document structure.

######## stakeholders: {"name": "Jane Smith", "role": "Project Sponsor", "organization": "Contoso", "influence": "high", "interest": "high"}
######## risks: {"title": "Budget overrun", "probability": "medium", "impact": "high", "category": "financial"}
######## milestones: {"name": "Phase 1 Kickoff", "targetDate": "2026-Q3", "phase": "Initiation"}

Only tag entities you actually introduced in this section. Do not duplicate 
entities from previous sections. One JSON object per tag line.
```

Why H8? Standard markdown headings run H1–H6. H7 and H8 (`#######`, `########`) are not part of any common markdown spec — no renderer treats them as real headings. That gives us a clean side channel: the model can emit structured data that coexists with the prose without colliding with any real document structure.

The model outputs something like this at the end of a section:

```markdown
## 3.2 Key Stakeholders

The project will be governed by a steering committee chaired by the Project 
Sponsor, Jane Smith (VP Engineering, Contoso). Day-to-day decisions are 
delegated to the Project Manager, Raj Patel...

######## stakeholders: {"name": "Jane Smith", "role": "Project Sponsor", "organization": "Contoso", "influence": "high", "interest": "high"}
######## stakeholders: {"name": "Raj Patel", "role": "Project Manager", "organization": "Contoso", "influence": "medium", "interest": "high"}
######## milestones: {"name": "Steering Committee Approval", "targetDate": "2026-07-15", "phase": "Initiation"}
```

After the section is drafted, `InlineEntityParserService` runs before anything is persisted:

```typescript
export class InlineEntityParserService {
  private readonly H8_PATTERN = /^#{8}\s+(\w+):\s+(\{.+\})\s*$/;

  async parseAndProcess(
    sectionContent: string,
    projectId: string,
    documentId: string,
    db: DbClient
  ): Promise<ParseResult> {
    const lines = sectionContent.split('\n');
    const entityGroups = new Map<string, unknown[]>();

    for (const line of lines) {
      const match = line.match(this.H8_PATTERN);
      if (!match) continue;

      const [, entityType, jsonStr] = match;
      try {
        const parsed = JSON.parse(jsonStr);
        const group = entityGroups.get(entityType) ?? [];
        group.push(parsed);
        entityGroups.set(entityType, group);
      } catch {
        // malformed JSON — log and skip, don't fail the section
        logger.warn(`Skipping malformed inline entity tag: ${line}`);
      }
    }

    const saved: Record<string, number> = {};
    for (const [entityType, entities] of entityGroups) {
      await saveSingleEntityType(projectId, documentId, entityType, entities, db);
      saved[entityType] = entities.length;
    }

    return { extracted: saved, taggedLineCount: entityGroups.size };
  }
}
```

Two things worth noting about this design:

1. **The H8 lines are preserved in the saved document.** We don't strip them before saving. This is intentional — the frontend can parse and render them as interactive entity annotations (the "entity pill" highlighting we're building next). The document itself becomes its own entity manifest.

2. **Malformed JSON is non-fatal.** If the model produces a tag we can't parse, we log it and move on. The document generation doesn't fail. You lose that specific entity annotation, but the section text is still saved correctly. Graceful degradation matters here because prompt compliance isn't 100% deterministic.

---

## The Results

The numbers speak clearly.

**Old pipeline:**
- 61 LLM extraction jobs per generation run
- For the ADPA project: 309 stakeholders, 393 risks, 305 milestones, 684 deliverables across 61 extraction runs on 1,811 documents
- Extraction jobs ran asynchronously but consumed real API quota, added latency to the "entities available" state, and produced data that drifted from the original authored intent

**New inline pipeline:**
- **0 additional LLM calls.** The extraction overhead is zero — it's a text parsing step on output we already paid for.
- A single test document generated in one pass extracted **10 stakeholders, 1 risk, 3 milestones, 7 deliverables** — directly from section content as each section was written.
- Entities are available in the database the moment the section finishes generating. No async job. No wait.

The cost improvement is **61× fewer LLM API calls** for the extraction component, but honestly "61×" undersells it because the old extraction jobs each sent the *full document corpus* to the LLM — not just one section. For a 50-section document, each extraction job was reading all 50 sections. The new approach reads zero additional tokens.

---

## Why This Matters at Scale

The math gets uncomfortable fast with the old model. For an enterprise client generating a 200-section PMBOK document across 10 projects simultaneously:

- Old: 200-section doc × 61 extraction jobs × 10 projects = **6,100 LLM extraction calls per generation batch**
- New: **0**

The extraction overhead was O(entities × documents). The new overhead is O(0). It doesn't scale with document size, section count, or number of entity types. Adding a new entity type costs one additional regex match per section line, not one additional LLM job per document.

---

## What's Next

A few things on the roadmap from here:

**Schema enforcement in the prompt.** Right now the model decides field names. Sometimes it writes `"role"`, sometimes `"jobTitle"`. We're adding a JSON schema fragment to each entity tag instruction so the model knows the exact field names, types, and enum values that match the target database columns. Fewer normalisation surprises downstream.

**Frontend entity pill rendering.** Because the H8 tags are preserved in the saved document text, the frontend can parse them on load and render them as highlighted inline annotations — click a sentence, see the entities it produced. This turns the document into a self-annotating artefact rather than a flat text blob.

**Deduplication across sections.** The current implementation trusts the model's instruction to "only tag entities introduced in this section." In practice, the model occasionally re-tags something it already mentioned. We're adding a project-level entity fingerprint cache so the save layer can deduplicate by name before inserting.

---

The whole change was maybe 200 lines of new code and a few prompt lines. The deleted code — the 61-job extraction pipeline, the scheduling logic, the corpus-loading per job — was more than that. Which is the best kind of engineering: the kind that leaves you with less.

---

*Posted by the ADPA engineering team. The ADPA framework is an open governance platform for PMBOK-aligned project management.*
