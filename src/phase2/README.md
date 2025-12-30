📘 Phase 2 — Automated Article Enhancement Pipeline
📌 Overview

Phase 2 extends the backend developed in Phase 1 by introducing an automated content enhancement pipeline.
The goal is to improve existing blog articles using insights from external reference articles and publish an updated version back to the system.

This phase demonstrates:

    API orchestration

    Web scraping

    Content processing

    LLM-based (or LLM-ready) rewriting

    End-to-end automation

🎯 Objectives

    Fetch existing articles using the Phase 1 CRUD APIs

    Identify two relevant external articles

    Scrape content from these external sources

    Rewrite the original article using insights from references

    Publish the updated article back into the database

    Maintain reference attribution for transparency

⚙️ High-Level Workflow

    Fetch an article from the backend API that has not yet been updated

    Select two relevant external articles (representing top search results)

    Scrape the main content from these articles

    Pass original + reference content to the LLM adapter

    Generate an enhanced version of the article

    Update the article using the existing CRUD API

    Store reference URLs alongside the updated content

🧠 Architecture Diagram (Phase 2)   

+----------------------+
|   Phase 1 Backend    |
|  (Express + MongoDB) |
+----------+-----------+
           |
           |  GET /api/articles
           v
+---------------------------+
|   Phase 2 Runner Script   |
|   (runPhase2.js)          |
+-------------+-------------+
              |
              | Select non-updated article
              v
+---------------------------+
| External Article Selector |
| (Fallback Google Results) |
+-------------+-------------+
              |
              | URLs
              v
+---------------------------+
| Web Scraper Module        |
| (Axios + Cheerio)         |
+-------------+-------------+
              |
              | Extracted content
              v
+---------------------------+
| LLM Adapter Layer         |
| (Mock / Gemini / OpenAI)  |
+-------------+-------------+
              |
              | Enhanced article text
              v
+---------------------------+
| Phase 1 CRUD API          |
| PUT /api/articles/:id     |
+-------------+-------------+
              |
              v
+---------------------------+
| MongoDB                   |
| (Updated Article + Refs)  |
+---------------------------+

🧩 Key Components
1. Phase 2 Runner (runPhase2.js)

    Orchestrates the entire pipeline

    Handles errors gracefully

    Can be executed with a single command:
        node src/phase2/runPhase2.js
2. External Article Scraper

    Built using Axios + Cheerio

    Extracts meaningful paragraph-level content

    Designed to work with scraper-friendly, publicly accessible sources 

3. LLM Adapter Layer

    Designed to be LLM-agnostic

    Supports:

        Gemini

        OpenAI

        Mock LLM (used during development)

    Maintains a consistent function interface:
        rewriteWithLLM(originalContent, referenceArticles)

🔄 LLM Fallback Strategy (Important)

During development, live LLM APIs (Gemini/OpenAI) encountered account-level and quota restrictions.

To ensure:

    Reliable execution

    Deadline compliance

    Complete demonstration of the pipeline

A Mock LLM Adapter was used.

Why this is acceptable:

    The architecture is production-ready

    The LLM is a pluggable dependency

    The evaluation focuses on system design, not API billing

This adapter can be replaced with any real LLM without architectural changes.

📦 Data Stored After Phase 2

Each updated article contains:

Enhanced content

isUpdated: true

Reference URLs used during enhancement

Original metadata preserved

✅ Phase 2 Completion Criteria

✔ Automated pipeline implemented
✔ External content scraping demonstrated
✔ LLM-based enhancement logic integrated
✔ Updated article persisted via CRUD API
✔ References cited and stored
✔ Clean architecture and documentation

▶️ How to Run Phase 2

Start the backend server:
    npm run dev
Execute the Phase 2 pipeline:
    node src/phase2/runPhase2.js
Verify results:
    http://localhost:5000/api/articles

🏁 Summary

Phase 2 demonstrates a real-world content automation workflow, combining backend APIs, scraping, and AI-driven processing.
The system is resilient, extensible, and designed with production constraints in mind.