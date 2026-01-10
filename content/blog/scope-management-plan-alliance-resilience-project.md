---
title: "Scope Management Plan — Alliance Resilience Project"
date: 2026-03-15
slug: "scope-management-plan-alliance-resilience-project"
tags:
  - scope
  - governance
  - adpa
summary: "Scope Management Plan (SMP) for the Alliance Resilience Project, defining scope, WBS, requirements traceability, and change control." 
draft: false
confidentiality: "NATO Confidential"
prepared_by: "Menno Drescher, Project Manager"
---

─────────────────────────────────────────────────────────

Scope Management Plan

Project: Alliance Resilience Project
Date: March 15, 2026
Version: 1.0
Confidentiality Level: NATO Confidential
Prepared By: Menno Drescher, Project Manager

─────────────────────────────────────────────────────────

1. Introduction and Scope Management Approach

1.1 Purpose of the Document
The purpose of this Scope Management Plan (SMP) is to establish a structured framework for defining, validating, and controlling the scope of the Alliance Resilience Project, aligning with the PMBOK® Guide – Seventh Edition and BABOK® best practices. This document serves as the authoritative source for managing the project’s scope, ensuring alignment with NATO Air Command’s strategic objectives and operational requirements. The SMP outlines the processes for collecting requirements (PMBOK Process: Collect Requirements), defining scope (PMBOK Process: Define Scope), creating the Work Breakdown Structure (WBS) (PMBOK Process: Create WBS), validating deliverables (PMBOK Process: Validate Scope), and controlling scope changes (PMBOK Process: Control Scope). By adhering to this plan, the project team will mitigate scope creep, ensure deliverable acceptance, and maintain traceability from requirements to execution.

This plan is tailored to the Alliance Resilience Project, which aims to design and deploy a modular Automated Diplomatic Protocol Automation (ADPA) system to automate diplomatic clearances and asset relocations for VIP aircraft (e.g., Qatari 747-8) across NATO/EU hubs such as Lelystad and Schiphol. The system will incorporate lessons learned from the Kabul evacuation, including predictive drift detection for militia threats, 48-hour airstrip orchestration via baseline extraction, and need-to-know compliance logs that evolve from test flights to full operational readiness.

─────────────────────────────────────────────────────────

1.2 Project Scope Management Approach (PMBOK 7 Tailoring)
The Alliance Resilience Project adopts a Hybrid approach to scope management, combining predictive and adaptive methodologies to address the project’s unique challenges. This tailored approach aligns with the PMBOK 7th Edition’s principles of tailoring and value delivery, ensuring flexibility while maintaining control over critical deliverables. The hybrid model is justified by the project’s dual nature: stable, well-defined infrastructure components (e.g., system architecture, compliance frameworks) and dynamic, evolving requirements (e.g., threat detection algorithms, diplomatic protocol refinements).

Selected Approach: Hybrid — Predictive for infrastructure; Adaptive for product features.

Justification: Stability for foundational components while allowing iterative development for evolving requirements, aligning with PMBOK 7 tailoring and value delivery.

─────────────────────────────────────────────────────────

2. Scope Definition and Documentation (PMBOK Process: Collect Requirements, Define Scope)

2.1 Project Scope Statement / Product Goal
Scope Statement:
The Alliance Resilience Project will design, develop, and deploy a modular Automated Diplomatic Protocol Automation (ADPA) system to automate diplomatic clearances and asset relocations for VIP aircraft across NATO/EU hubs. The system will include predictive drift detection, 48-hour airstrip orchestration via baseline extraction, and need-to-know compliance logs.

Major Deliverables:
1. Modular ADPA System Architecture
2. Predictive Threat Detection Module
3. Diplomatic Clearance Automation Module
4. Airstrip Orchestration Module
5. Compliance Logging System
6. Integration with NATO/EU Systems
7. User Training and Documentation

Project Exclusions (Out-of-Scope):
1. Deployment to Non-NATO/EU Airports
2. Hardware Procurement
3. Full-Scale Military Operations
4. Legacy System Replacement
5. Post-Deployment Maintenance (beyond project closure)

─────────────────────────────────────────────────────────

2.2 Requirements Documentation and Traceability (BABOK Alignment)
Requirements will be collected via workshops, interviews, user stories, and prototyping and stored in Azure DevOps as the single source of truth.

Each requirement will include attributes: Unique ID, Source, Priority (MoSCoW), Status, Owner, Acceptance Criteria, Dependencies, and Notes.

An RTM will be maintained in Azure DevOps linking requirements to deliverables and test cases.

─────────────────────────────────────────────────────────

3. Scope Breakdown and Management Structure (PMBOK Process: Create WBS)

3.1 Work Breakdown Structure (WBS) Approach
The WBS will be organized by major project phases: Initiation, System Design, Development, Integration & Testing, Deployment & Training, and Project Closure. Work packages will target 40–80 hours of effort and be detailed in the WBS Dictionary (maintained in Excel and linked to Azure DevOps).

Partial WBS Example:
1. Project Initiation
  1.1 Project Planning
    1.1.1 Develop Project Management Plan
    1.1.2 Conduct Stakeholder Analysis
  1.2 Requirements Gathering
    1.2.1 Conduct Stakeholder Workshops
    1.2.2 Document High-Level Requirements
2. System Design
  2.1 System Architecture
    2.1.1 Design Modular ADPA System Architecture
    2.1.2 Define Integration Points with NATO/EU Systems
  2.2 Threat Detection Module
    2.2.1 Design Predictive Drift Detection Algorithm
    2.2.2 Develop Threat Intelligence Schema

3.2 Product Backlog Approach
Adaptive features will be managed via a Product Backlog in Azure DevOps. The Product Owner will prioritize using MoSCoW and business value; backlog refinement occurs every two weeks.

─────────────────────────────────────────────────────────

4. Scope Control and Change Management (PMBOK Process: Control Scope)

4.1 Scope Control Process
Scope baseline components: Project Scope Statement, WBS & Dictionary, Initial Product Backlog.

Variance measurement: EVM for predictive elements and Product Goal deviation tracking for adaptive elements. A Change Log in Azure DevOps will record all CRs.

Scope Creep Mitigation:
● Definition of Done (DoD): code reviews, testing, documentation, stakeholder validation.
● Formal Change Control: CR Form → PM initial review → Impact Analysis → CCB/Product Owner approval.
● Monthly scope reviews and transparent stakeholder communication.

4.2 Change Control Process for Scope
Workflow: Submission (CR Form on SharePoint) → Initial Review → Impact Analysis → Approval (CCB or Product Owner) → Communication → Implementation → Closure.

CCB Composition (sample): NATO Air Command Rep, Project Manager (Menno Drescher), Lead Architect, Compliance Officer, Product Owner.

Change Log fields: CR Number, Description, Submitter, Date Submitted, Impact Analysis, Approval Status, Approval Date, Implementation Status.

─────────────────────────────────────────────────────────

5. Scope Validation and Acceptance (PMBOK Process: Validate Scope)

5.1 Formal Acceptance Criteria and Process
Predictive deliverables: UAT Test Plan, UAT Execution, Defect Resolution, Formal Sign-Off.
Adaptive deliverables: Sprint Reviews, Product Owner acceptance, “Done” marking in Azure DevOps.

Acceptance stakeholders: NATO Air Command (Sponsor), NATO Air Command Rep, Product Owner, NATO Air Command Operations Team, Compliance Officer, EU Diplomatic Clearance Portal.

5.2 Handling Unacceptable Deliverables
Process: Document defects in Azure DevOps → Corrective Action Plan → Re-testing → Re-validation until acceptance.

─────────────────────────────────────────────────────────

6. Approvals

Role | Name | Date
Project Sponsor | [TBD - NATO Air Command] | 
Product Owner | [TBD - Product Owner] | 
NATO Air Command Representative | [TBD - NATO Air Command Rep] | 
Project Manager | Menno Drescher | March 15, 2026
Lead Architect | [TBD - Lead Architect] | 
Compliance Officer | [TBD - Compliance Officer] | 

─────────────────────────────────────────────────────────

End of Document
─────────────────────────────────────────────────────────
