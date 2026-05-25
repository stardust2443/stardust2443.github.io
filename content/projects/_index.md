---
title: "Projects"
description: "Technical and quantitative projects — Arun Mitra Kommireddy."
---

### AI-Powered Resume Evaluator & Hiring Decision Engine
*Feb 2026 – May 2026 · [GitHub](https://github.com/stardust2443)*

**Tech Stack:** FastAPI · Python · React.js · Gemini / OpenAI API

Built an evidence-based candidate evaluation system that parses resumes and job descriptions, scores candidates using a weighted 100-point rubric, and generates hiring recommendations with SWOT analysis.

**Design decisions:**
- Designed a validation layer to verify evidence quotes, prevent keyword stuffing, and enforce score bounds — deterministically recomputes final scores for reliability and consistency over LLM hallucination
- Developed adversarial testing to benchmark scoring quality and surface keyword-gaming candidate profiles
- Deployed a full-stack MVP supporting PDF, DOCX, and TXT uploads with recruiter-facing dashboards

The central challenge was building a system that is simultaneously rigorous (evidence-grounded, reproducible) and practical (works on real-world, inconsistently formatted documents). The validation architecture was designed to make the system robust against the specific failure modes of LLM-based scoring: confident wrongness and score drift.

---

### Capital Allocation Strategies across Domestic and Global Markets
*Aug 2024 – Dec 2024*

Designed a quantitative decision framework for capital allocation under varying risk appetites — documented in the [Finance](/finance/) section.
