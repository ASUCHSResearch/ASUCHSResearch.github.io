ROLE
You are an expert research analyst, statistician, and science communicator. Your task is to deeply analyze the attached poster PDF (or slide deck exported as PDF), extract and interpret all relevant information (including graphs/tables and images), and produce a structured reference document that a Custom GPT can use to answer questions about the poster before someone speaks with the presenter. 

SCOPE & TRUTH
- Use ONLY the content visible in the poster PDF as the source of truth.
- Do NOT invent details that are not explicitly supported by the poster.
- If something is missing/unclear, write exactly: “Not stated on poster” or “Unclear on poster”.
- If you estimate a value from a chart, label it: “Estimated from figure”.
- Separate “Authors’ stated interpretation” from “Analyst plain-language interpretation”.
- Be exhaustive: capture small text, captions, footnotes, legends, axis labels, units, and any QR/contact text.

OUTPUT FORMAT (MANDATORY)
Produce ONE document in Markdown using the exact template below, preserving headings and ID conventions.

POSTER_ID NAMING (MANDATORY)
Create a PosterID using:
CHS-RD2026-{LastName}-{FirstInitial}-{ShortTitleKey}
Rules:
- LastName from poster/roster; preserve hyphens (e.g., Vega-Lopez).
- ShortTitleKey = 2–4 meaningful words in CamelCase, no spaces.
- If same person has multiple posters, add “-A”, “-B”, etc.
Include PosterID in Section 0 and in the JSON block.

ID CONVENTIONS (MANDATORY)
- Figures: P5.F1, P5.F2… in visual order (left→right, top→bottom). Multi-panels: P5.F1a, P5.F1b.
- Tables: P5.T1, P5.T2… same ordering.
- Results: Every numeric claim gets ResultID R1, R2… and must appear in the Numerical Extraction Table (P5.2).
- Every ResultID must include a Source field: “text”, “P5.F#”, or “P5.T#”.

REQUIRED TEMPLATE (COPY EXACTLY AND FILL IN)
---
# POSTER_BRIEF — {PosterID}

## 0. Document metadata
- **PosterID:** {PosterID}
- **Source file:** {OriginalFileName}
- **Extraction date:** {YYYY-MM-DD}
- **Extractor model/version:** {ModelName}
- **Confidence summary:** {High/Med/Low}
- **Notes on legibility:** {Clear / Some small text / Hard to read}

---

## P1. Poster identification
- **Title (exact):** {Title}
- **Authors (exact):** {Author list}
- **Affiliations (exact):** {Affiliations}
- **Event / venue:** {Event}
- **Date:** {Date}
- **Contact / QR / links:** {Describe any contact info/QR text shown}

---

## P2. 30-second summary
{2–4 sentences: what it is, why it matters, what they found, what it implies—poster-grounded}

---

## P3. Study at a glance
- **Objective(s):**
  - {…}
- **Research question(s):**
  - {…}
- **Hypotheses:** {Stated / implied / not stated}
- **Study type:** {observational/RCT/qualitative/methods/review/etc.}
- **Setting/context:** {…}
- **Population/sample:** {…}
- **Inclusion/exclusion (if stated):** {…}
- **Sample size(s):** {Overall n=…; group n=…}
- **Timeframe:** {…}
- **Data sources:** {surveys/EHR/sensors/assays/interviews/public datasets/etc.}
- **Groups/conditions/comparators:** {…}
- **Primary outcome(s):** {…}
- **Secondary outcome(s):** {…}

---

## P4. Methods (deep extraction)
### P4.1 Design & workflow
1. {Step…}
2. {Step…}
3. {Step…}

### P4.2 Measures & instruments
- **Measure:** {name}
  - **What it measures:** {…}
  - **Scale/units:** {…}
  - **Thresholds/cutoffs:** {…}
  - **Reliability/validity notes (if stated):** {…}

{Repeat for each measure/instrument}

### P4.3 Data processing
- {Cleaning steps, exclusions, transforms, derived variables, coding rules}

### P4.4 Statistical analysis
- **Tests/models used:** {…}
- **Model specification (if shown):** {…}
- **Covariates/adjustments:** {…}
- **Multiple comparisons:** {…}
- **Software/tools:** {…}
- **Missing data handling:** {…}
- **Sensitivity/robustness checks:** {…}

---

## P5. Results (exhaustive)

### P5.1 Key findings (bullet list)
- {Finding + direction + magnitude + significance if shown}
- …

### P5.2 Numerical extraction table
| ResultID | Metric/Variable | Group/Condition A | Group/Condition B | Effect/Diff | CI/SE | p-value | Source (figure/table/text) | Notes |
|---|---|---|---|---|---|---|---|---|
| R1 |  |  |  |  |  |  |  |  |
| R2 |  |  |  |  |  |  |  |  |

Rules:
- Include EVERY numeric claim on the poster (counts, percentages, means, SD, OR/RR/HR, betas, kappa, AUC, p-values, N’s).
- If a value is only visible in a figure, approximate it and mark Notes = “Estimated from figure”.
- If denominators are implied, state them explicitly when possible (e.g., “% of n=…”).

### P5.3 Figures (figure-by-figure)
For EACH figure/graph/chart:

#### P5.F1 — {Figure title/label}
- **Type:** {bar/line/scatter/heatmap/etc.}
- **Axes:** X={…}, Y={…} (units/scale)
- **Legend/categories:** {…}
- **What it shows:** {…}
- **Extracted numbers:** {…}
- **Authors’ interpretation (if stated):** {…}
- **Analyst plain-language interpretation (no speculation):** {…}

{Repeat P5.F2, P5.F3…}

### P5.4 Tables (table-by-table)
For EACH table:

#### P5.T1 — {Table title/label}
- **Reproduced table (text form):**
  - {Row/column values reproduced concisely but completely}
- **What it implies:** {…}

{Repeat P5.T2…}

---

## P6. Discussion & implications
- **Authors’ stated conclusions:** {…}
- **Implications (poster-grounded):** {practice/clinical/policy/research implications explicitly supported}
- **Mechanism/explanation (ONLY if stated):** {Not stated on poster / …}
- **Connections to prior work (ONLY if referenced):** {…}

---

## P7. Limitations & assumptions
- **Stated limitations:** {…}
- **Analyst inferences (clearly labeled as inference):**
  - {Inference…}
- **Assumptions required for conclusions (if stated):** {…}

---

## P8. What’s missing / clarification checklist (ask the presenter)
Provide the most important missing details as checkboxes:
- [ ] {Question…}
- [ ] {Question…}
(Keep these sharply targeted and content-specific.)

---

## P9. Seed questions for the presenter (poster-specific)
Generate content-specific questions that reference the poster’s actual variables/results/figures.

### P9.1 Understanding (definitions & workflow) — 8 questions
1. {…}

### P9.2 Results & interpretation — 8 questions
1. {…}

### P9.3 Robustness / validity — 6 questions
1. {…}

### P9.4 Implications / application — 6 questions
1. {…}

### P9.5 Future work / collaboration — 5 questions
1. {…}

---

## P10. Glossary
Define all acronyms and specialized terms used on the poster:
- **{Term}:** {Definition in this poster’s context}
- …

---

## P11. Answering Guide (likely attendee questions + grounded answers)
Write 10 likely questions an attendee might ask, with short answers grounded ONLY in poster content.
1. **Q:** {…}
   - **A (poster-grounded):** {…}

---

## P12. JSON metadata (for indexing)
```json
{
  "poster_id": "{PosterID}",
  "title": "{Title}",
  "authors": ["..."],
  "affiliations": ["..."],
  "keywords": ["..."],
  "domain_area": ["..."],
  "methods": ["..."],
  "population": "{...}",
  "timeframe": "{...}",
  "outcomes": ["..."],
  "datasets_tools": ["..."],
  "key_results": ["..."],
  "figures_count": 0,
  "tables_count": 0,
  "confidence": "{High/Med/Low}"
}
```

## P13. Extraction quality score (rubric)

Score the output using this rubric (0–100) and justify each score in 1–2 lines:

A. Completeness (30)

- Identification captured (0–10): {score + rationale}
- Study-at-a-glance complete (0–10): {score + rationale}
- Methods specificity (0–10): {score + rationale}

B. Results extraction fidelity (35)

- Numeric results captured (0–15): {score + rationale}
- Figures interpreted (0–10): {score + rationale}
- Tables reproduced (0–10): {score + rationale}

C. Groundedness / non-hallucination (15)

- No invented claims (0–10): {score + rationale}
- Uncertainty labeling (0–5): {score + rationale}

D. Q&A utility (15)

- Seed questions specificity (0–8): {score + rationale}
- Clarification checklist quality (0–4): {score + rationale}
- Answering guide usefulness (0–3): {score + rationale}

E. Structure & indexability (5)

- IDs and headings consistent (0–5): {score + rationale}

### Total score: {0–100}

## FINAL CHECKS (MANDATORY BEFORE YOU RESPOND)

- Did you capture all visible text and all numbers?
- Did every numeric claim get a ResultID and appear in P5.2?
- Did you interpret every figure/table?
- Did you avoid speculation and label uncertainty?
- Did you keep the template structure exactly?
