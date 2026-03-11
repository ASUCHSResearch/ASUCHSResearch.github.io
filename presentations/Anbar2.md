# **POSTER\_BRIEF — CHS-RD2026-Anbar-J-CommunityRecognitionAutism**

## **0\. Document metadata**

* **PosterID:** CHS-RD2026-Anbar-J-CommunityRecognitionAutism  
* **Source file:** Anbar2.pdf  
* **Extraction date:** 2026-03-09  
* **Extractor model/version:** GPT-5.2 Thinking  
* **Confidence summary:** High  
* **Notes on legibility:** Clear

---

## **P1. Poster identification**

* **Title (exact):** Differences in Community Recognition of Autism Between Special Education and Clinicians: Insights from Public Health Surveillance in Arizona  
* **Authors (exact):** Joshua Anbar, DrPH¹; Amber Catalan, BS¹,\*; Tyra Bozek, MS¹; Jennifer Andrews, PhD²  
* **Affiliations (exact):** ¹Arizona State University; ²University of Arizona; \*Master’s Student  
* **Event / venue:** Not stated on poster  
* **Date:** Not stated on poster  
* **Contact / QR / links:** No contact/QR shown (poster includes funding and conflict-of-interest statements only).

---

## **P2. 30-second summary**

This poster compares how autism spectrum disorder (ASD) is “recognized” across **education** (autism special education exceptionality) versus **clinical** systems (ASD ICD codes / diagnostic statements) using Arizona ADDM surveillance data on 8-year-olds from 2018/2020/2022 (n=873). The authors find **limited overlap** between education and clinical recognition categories (education-only 48%, clinical-only 18%, both 29%, neither 6%) and **near-zero agreement** between special education exceptionality and ASD ICD coding among children with multiple record sources (κ \= \-0.001). Multiple record sources are strongly associated with higher likelihood of recognition, especially for having an ASD ICD code (OR=12.57, Holm p\<0.001).

---

## **P3. Study at a glance**

* **Objective(s):**  
    
  * Assess whether record source availability is associated with differences in education and clinical recognition of ASD  
  * Evaluate agreement between special education exceptionality and ICD coding for autism  
  * Examine sociodemographic, intellectual disability, and record-source factors predicting recognition categories


* **Research question(s):**  
    
  * Do children with different record source availability show different patterns of education vs clinical ASD recognition?  
  * How well do special education exceptionality and ASD ICD codes agree?  
  * Which demographics / intellectual disability / SVI / year / record-source variables predict recognition categories?


* **Hypotheses:** Implied (that record source availability and sociodemographic factors relate to recognition differences); not explicitly stated as hypotheses  
    
* **Study type:** Observational surveillance analysis (secondary analysis of public health surveillance data)  
    
* **Setting/context:** Arizona site of the ADDM Network (public health autism surveillance)  
    
* **Population/sample:** 8-year-old children in Arizona ADDM surveillance cycles  
    
* **Inclusion/exclusion (if stated):** Not stated on poster  
    
* **Sample size(s):** Overall **n=873**; record source subgroups: **Single Source n=529**, **Multiple Source n=344**  
    
* **Timeframe:** Surveillance years **2018, 2020, 2022**  
    
* **Data sources:** Education and clinical record sources used in ADDM surveillance; exact source types not enumerated on poster  
    
* **Groups/conditions/comparators:** Recognition categories (education-only; ICD-only; both; neither) and record source availability (single vs multiple)  
    
* **Primary outcome(s):** Membership in education/clinical recognition categories (as defined in results/figure)  
    
* **Secondary outcome(s):** Agreement metrics (Cohen’s κ), sensitivity metrics (Sensitivity/Specificity/PPV/NPV)

---

## **P4. Methods (deep extraction)**

### **P4.1 Design & workflow**

1. Use Arizona ADDM surveillance data on 8-year-olds across 2018/2020/2022 cycles (n=873).  
     
2. Define ASD “recognition” in public health surveillance using operational indicators spanning education and clinical systems:  
     
   * Autism special education exceptionality  
   * Documented ASD ICD code  
   * Diagnostic statement from a clinical visit

   

3. Analyze associations, agreement, classification performance metrics, and multivariable predictors of recognition categories.

### **P4.2 Measures & instruments**

* **Measure:** Autism special education exceptionality  
    
  * **What it measures:** Education system recognition/eligibility category for autism services (IDEA context mentioned).  
  * **Scale/units:** Binary presence/absence; used to construct recognition categories.  
  * **Thresholds/cutoffs:** Not stated on poster.


* **Measure:** ASD ICD code  
    
  * **What it measures:** Clinical coding recognition (ICD).  
  * **Scale/units:** Binary presence/absence; used to construct recognition categories.  
  * **Thresholds/cutoffs:** Not stated on poster.


* **Measure:** Diagnostic statement from clinical visit  
    
  * **What it measures:** Clinical documentation of ASD diagnosis statement.  
  * **Scale/units:** Not fully specified how used in categories; mentioned as an operationalization in background.


* **Measure:** Intellectual disability status  
    
  * **What it measures:** Presence/absence/unknown (unknown is explicitly modeled in Figure 1).


* **Measure:** Overall Social Vulnerability Index (SVI) status  
    
  * **What it measures:** Area-level social vulnerability category (medium/high appear in Figure 1).  
  * **Scale/units:** Categorical (at least: medium, high; reference category not stated).


* **Measure:** Record source availability  
    
  * **What it measures:** Whether a child has a single record source vs multiple record sources (and used as predictor).


* **Demographics:** race, ethnicity, sex  
    
* **Surveillance year:** 2018/2020/2022

### **P4.3 Data processing**

* Recognition categories are formed by cross-classifying education exceptionality and clinical ICD coding (and/or clinical recognition constructs), yielding: “exceptionality only”, “ICD only”, “both”, “neither.” Exact coding rules beyond this are not stated on poster.

### **P4.4 Statistical analysis**

* **Tests/models used:** Fisher’s exact test; Cohen’s κ; sensitivity analyses; penalized multinomial regression  
* **Model specification (if shown):** Multinomial regression predicting membership in recognition categories; Figure 1 shows statistically significant predictors with relative risk ratios (RRRs). Reference categories and full covariate list in the final model are not stated on poster.  
* **Covariates/adjustments:** Poster states variables included (demographics, intellectual disability status, year, SVI, record source).  
* **Multiple comparisons:** Holm-adjusted p-values are shown for key ORs relating multiple sources to recognition outcomes.  
* **Software/tools:** Not stated on poster  
* **Missing data handling:** Not stated on poster (but “Unknown Intellectual Disability Status” appears as a modeled category).  
* **Sensitivity/robustness checks:** Sensitivity analysis metrics are reported for all children and for multiple record sources subgroup; the “gold standard” reference for these metrics is not stated on poster.

---

## **P5. Results (exhaustive)**

### **P5.1 Key findings (bullet list)**

* Recognition categories show limited overlap between educational and clinical systems (n=873): **48%** education-only, **18%** ICD-only, **29%** both, **6%** neither.  
    
* Within record-source groups (percent within source group; overlap allowed):  
    
  * **Single Source (n=529):** exceptionality **72%**, ICD **24%**, neither **7%**  
  * **Multiple Source (n=344):** exceptionality **83%**, ICD **80%**, neither **3%**


* Multiple record sources are associated with higher likelihood of recognition:  
    
  * More likely exceptionality with multiple sources: **OR=1.77**, Holm **p=0.002**  
  * More likely ICD code with multiple sources: **OR=12.57**, Holm **p\<0.001**  
  * Less likely “neither” with multiple sources: **OR=0.45**, Holm **p=0.018**


* Among children with multiple sources, agreement between exceptionality and ICD code is near zero: **Cohen’s κ \= \-0.001**  
    
* Sensitivity analysis metrics:  
    
  * All children (n=873): Sensitivity **62%**, Specificity **11%**, PPV **37%**, NPV **25%**  
  * Multiple record sources (n=344): Sensitivity **83%**, Specificity **17%**, PPV **80%**, NPV **20%**


* Multinomial regression (statistically significant predictors shown in Figure 1\) reports relative risk ratios by category for: race/ethnicity, intellectual disability status (unknown), surveillance year, SVI status, and multiple sources.

### **P5.2 Numerical extraction table**

| ResultID | Metric/Variable | Group/Condition A | Group/Condition B | Effect/Diff | CI/SE | p-value | Source (figure/table/text) | Notes |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| R1 | Sample size | All children | — | n=873 | — | — | text | Arizona ADDM 8-year-olds; years 2018/2020/2022 |
| R2 | Years included | 2018 | 2020/2022 | Included | — | — | text | Surveillance cycles |
| R3 | Recognition category distribution | Exceptionality only | — | 48% | — | — | P5.F1 | % of n=873 |
| R4 | Recognition category distribution | ICD-only | — | 18% | — | — | P5.F1 | % of n=873 |
| R5 | Recognition category distribution | Both | — | 29% | — | — | P5.F1 | % of n=873 |
| R6 | Recognition category distribution | Neither | — | 6% | — | — | P5.F1 | % of n=873 |
| R7 | Record source subgroup size | Single source | — | n=529 | — | — | P5.F2 |  |
| R8 | Record source subgroup size | Multiple sources | — | n=344 | — | — | P5.F2 |  |
| R9 | Exceptionality prevalence within subgroup | Single source | — | 72% | — | — | P5.F2 | Overlap allowed (not mutually exclusive with ICD) |
| R10 | ICD prevalence within subgroup | Single source | — | 24% | — | — | P5.F2 | Overlap allowed |
| R11 | Neither prevalence within subgroup | Single source | — | 7% | — | — | P5.F2 |  |
| R12 | Exceptionality prevalence within subgroup | Multiple sources | — | 83% | — | — | P5.F2 | Overlap allowed |
| R13 | ICD prevalence within subgroup | Multiple sources | — | 80% | — | — | P5.F2 | Overlap allowed |
| R14 | Neither prevalence within subgroup | Multiple sources | — | 3% | — | — | P5.F2 |  |
| R15 | Odds of exceptionality given record sources | Multiple sources | Single source | OR=1.77 | — | Holm p=0.002 | text | “more likely” with multiple sources |
| R16 | Odds of ICD code given record sources | Multiple sources | Single source | OR=12.57 | — | Holm p\<0.001 | text | Large association |
| R17 | Odds of “neither” given record sources | Multiple sources | Single source | OR=0.45 | — | Holm p=0.018 | text | Protective association |
| R18 | Agreement (kappa) among multiple-source children | Exceptionality vs ICD | — | κ=-0.001 | — | — | text | Near-zero agreement |
| R19 | Sensitivity metric (all children) | Sensitivity | — | 62% | — | — | P5.F3 | Reference standard not stated |
| R20 | Sensitivity metric (all children) | Specificity | — | 11% | — | — | P5.F3 | Reference standard not stated |
| R21 | Sensitivity metric (all children) | PPV | — | 37% | — | — | P5.F3 |  |
| R22 | Sensitivity metric (all children) | NPV | — | 25% | — | — | P5.F3 |  |
| R23 | Sensitivity metric (multiple sources) | Sensitivity | — | 83% | — | — | P5.F4 | Reference standard not stated |
| R24 | Sensitivity metric (multiple sources) | Specificity | — | 17% | — | — | P5.F4 |  |
| R25 | Sensitivity metric (multiple sources) | PPV | — | 80% | — | — | P5.F4 |  |
| R26 | Sensitivity metric (multiple sources) | NPV | — | 20% | — | — | P5.F4 |  |
| R27 | Multinomial regression RRR (Exceptionality only) | Black or African American, not Hispanic | Reference not stated | RRR=1.53 | — | — | P5.F5 | CI not labeled numerically |
| R28 | Multinomial regression RRR (ICD-only) | Black or African American, not Hispanic | Reference not stated | RRR=1.85 | — | — | P5.F5 |  |
| R29 | Multinomial regression RRR (Neither) | Black or African American, not Hispanic | Reference not stated | RRR=2.96 | — | — | P5.F5 |  |
| R30 | Multinomial regression RRR (Exceptionality only) | Unknown intellectual disability status | Reference not stated | RRR=0.47 | — | — | P5.F5 |  |
| R31 | Multinomial regression RRR (ICD-only) | Unknown intellectual disability status | Reference not stated | RRR=1.78 | — | — | P5.F5 |  |
| R32 | Multinomial regression RRR (Neither) | Unknown intellectual disability status | Reference not stated | RRR=0.88 | — | — | P5.F5 |  |
| R33 | Multinomial regression RRR (Exceptionality only) | Surveillance year 2020 | Reference year not stated | RRR=0.46 | — | — | P5.F5 |  |
| R34 | Multinomial regression RRR (ICD-only) | Surveillance year 2020 | Reference year not stated | RRR=1.01 | — | — | P5.F5 |  |
| R35 | Multinomial regression RRR (Neither) | Surveillance year 2020 | Reference year not stated | RRR=0.74 | — | — | P5.F5 |  |
| R36 | Multinomial regression RRR (Exceptionality only) | Surveillance year 2022 | Reference year not stated | RRR=1.07 | — | — | P5.F5 |  |
| R37 | Multinomial regression RRR (ICD-only) | Surveillance year 2022 | Reference year not stated | RRR=1.65 | — | — | P5.F5 |  |
| R38 | Multinomial regression RRR (Neither) | Surveillance year 2022 | Reference year not stated | RRR=1.03 | — | — | P5.F5 |  |
| R39 | Multinomial regression RRR (Exceptionality only) | Medium overall SVI status | Reference not stated | RRR=1.38 | — | — | P5.F5 |  |
| R40 | Multinomial regression RRR (ICD-only) | Medium overall SVI status | Reference not stated | RRR=1.13 | — | — | P5.F5 |  |
| R41 | Multinomial regression RRR (Neither) | Medium overall SVI status | Reference not stated | RRR=0.97 | — | — | P5.F5 |  |
| R42 | Multinomial regression RRR (Exceptionality only) | High overall SVI status | Reference not stated | RRR=1.32 | — | — | P5.F5 |  |
| R43 | Multinomial regression RRR (ICD-only) | High overall SVI status | Reference not stated | RRR=1.24 | — | — | P5.F5 |  |
| R44 | Multinomial regression RRR (Neither) | High overall SVI status | Reference not stated | RRR=1.18 | — | — | P5.F5 |  |
| R45 | Multinomial regression RRR (Exceptionality only) | Multiple sources | Single source | RRR=0.08 | — | — | P5.F5 | Suggests multiple sources greatly reduce “exceptionality-only” category (vs reference outcome) |
| R46 | Multinomial regression RRR (ICD-only) | Multiple sources | Single source | RRR=0.20 | — | — | P5.F5 |  |
| R47 | Multinomial regression RRR (Neither) | Multiple sources | Single source | RRR=0.19 | — | — | P5.F5 |  |

### **P5.3 Figures (figure-by-figure)**

#### P5.F1 — Percentage of Community Recognition of Autism Shows Limited Overlap Between Educational and Clinical Systems (n=873)

* **Type:** Stacked bar / category proportion bar  
* **Axes:** X=Recognition category; Y=Percent of sample (n=873)  
* **Legend/categories:** Autism Special Education Exceptionality Only; Autism ICD Code Only; Both; Neither  
* **What it shows:** Distribution across four recognition categories.  
* **Extracted numbers:** 48% exceptionality-only; 18% ICD-only; 29% both; 6% neither.  
* **Authors’ interpretation (if stated):** “Limited overlap between educational and clinical systems.”  
* **Analyst plain-language interpretation (no speculation):** Nearly half of the sample appears recognized only via special education exceptionality, while fewer are recognized only through ICD coding; about a third are recognized by both systems.

#### P5.F2 — Record Sources by Clinical and Education Recognition Type (n=873)

* **Type:** Grouped bar chart (two x-axis groups: single vs multiple record sources)  
* **Axes:** X=Record source group (Single Source n=529; Multiple Source n=344); Y=Percentage within source group  
* **Legend/categories:** Autism special education exceptionality; Autism ICD code; Neither  
* **What it shows:** Within each record-source group, the percent with exceptionality, ICD code, or neither.  
* **Extracted numbers:** Single: 72% exceptionality, 24% ICD, 7% neither. Multiple: 83% exceptionality, 80% ICD, 3% neither.  
* **Authors’ interpretation (if stated):** Multiple record sources increase likelihood of recognition.  
* **Analyst plain-language interpretation (no speculation):** Children with multiple sources show much higher presence of ICD coding (80% vs 24%) and slightly higher exceptionality (83% vs 72%); “neither” is less common with multiple sources (3% vs 7%).

#### P5.F3 — Sensitivity Analysis Metrics — All Children (n=873)

* **Type:** Horizontal bar chart  
* **Axes:** X=Percentage; Y=Metric type (Sensitivity, Specificity, PPV, NPV)  
* **What it shows:** Performance metrics for a comparison not fully described on the poster.  
* **Extracted numbers:** Sensitivity 62%; Specificity 11%; PPV 37%; NPV 25%.  
* **Authors’ interpretation (if stated):** Not explicitly stated.  
* **Analyst plain-language interpretation (no speculation):** Using the poster’s (unstated) reference definition, positives are detected at moderate sensitivity, but specificity is low; PPV/NPV are modest. The meaning depends heavily on what “truth” definition was used.

#### P5.F4 — Sensitivity Analysis Metrics — Multiple Record Sources (n=344)

* **Type:** Horizontal bar chart  
* **Axes:** X=Percentage; Y=Metric type  
* **What it shows:** Same metric set restricted to children with multiple record sources.  
* **Extracted numbers:** Sensitivity 83%; Specificity 17%; PPV 80%; NPV 20%.  
* **Authors’ interpretation (if stated):** Not explicitly stated.  
* **Analyst plain-language interpretation (no speculation):** Restricting to multiple sources increases sensitivity and PPV substantially, suggesting that “positive” recognition aligns more strongly with the reference definition when more documentation sources are available.

#### P5.F5 — Figure 1\. Statistically significant variables in a multinomial regression predicting membership in education and clinical recognition categories (n=873)

* **Type:** Forest plot (relative risk ratios) with three outcome columns:  
    
  * Autism Special Education Exceptionality Only  
  * Autism ICD Code Only  
  * Neither


* **Axes:** X=Relative Risk Ratios (log scale; tick marks visible \~0.01 to 10); Y=Predictors  
    
* **Legend/categories:** Not separately shown; each column corresponds to an outcome category.  
    
* **What it shows:** Which predictors are statistically significant in a multinomial model for each recognition category (relative to an unstated reference outcome category).  
    
* **Extracted numbers (RRRs shown on plot):**  
    
  * Black or African American, not Hispanic: 1.53 (exceptionality-only), 1.85 (ICD-only), 2.96 (neither)  
  * Unknown intellectual disability status: 0.47, 1.78, 0.88  
  * Surveillance year 2020: 0.46, 1.01, 0.74  
  * Surveillance year 2022: 1.07, 1.65, 1.03  
  * Medium overall SVI status: 1.38, 1.13, 0.97  
  * High overall SVI status: 1.32, 1.24, 1.18  
  * Multiple sources: 0.08, 0.20, 0.19


* **Authors’ interpretation (if stated):** Presented as statistically significant predictors; narrative notes that multiple sources increase recognition and “other characteristics decrease likelihood of recognition.”  
    
* **Analyst plain-language interpretation (no speculation):** The model suggests several demographic/contextual variables are associated with differing probabilities of falling into “education-only”, “ICD-only”, or “neither” categories. Because the reference category is not specified on the poster, these RRRs should be interpreted cautiously until clarified.

### **P5.4 Tables (table-by-table)**

#### P5.T1 — Not stated on poster

* **Reproduced table (text form):** Not stated on poster  
* **What it implies:** Not applicable

---

## **P6. Discussion & implications**

* **Authors’ stated conclusions:**  
    
  * Educational and clinical systems identify **overlapping but distinct** subsets of children with ASD.  
  * Special education exceptionality and ICD code for autism **do not mutually predict** each other → suggests **system-level discordance**.  
  * This is consistent with the idea that special education requirements (IDEA) and clinical diagnostic criteria (DSM-5) focus on different aspects of ASD.  
  * Public health surveillance for autism may need reassessment: are educational and clinical recognition “the same thing,” and should diagnostic criteria be revised to include both educational and clinical experiences?  
  * Findings need full ADDM Network confirmation.


* **Implications (poster-grounded):**  
    
  * Multiple record sources increase likelihood of recognition by both systems.  
  * Some characteristics decrease likelihood of recognition.  
  * Open question raised: fundamental access issue vs two distinct subpopulations.  
  * Need to explore whether children with special education exceptionality reliably qualify for a clinical ASD diagnosis.


* **Mechanism/explanation (ONLY if stated):** Differences between IDEA requirements and DSM-5 diagnostic criteria (i.e., focusing on different aspects of ASD).  
    
* **Connections to prior work (ONLY if referenced):** References include CDC ADDM prevalence reports (2018, 2020, 2022\) and papers on surveillance collaboration and education vs clinical diagnoses.

---

## **P7. Limitations & assumptions**

* **Stated limitations:** Not stated on poster  
    
* **Analyst inferences (clearly labeled as inference):**  
    
  * *Inference:* The meaning of the sensitivity/specificity metrics is hard to interpret because the poster does not specify the reference standard (“truth” definition) used to compute them.  
  * *Inference:* The multinomial regression’s reference category is not shown; this affects how to interpret RRR directionality (e.g., whether the omitted category is “both”).


* **Assumptions required for conclusions (if stated):** Not stated on poster

---

## **P8. What’s missing / clarification checklist (ask the presenter)**

- [ ] What exactly counts as a “record source” (education file, clinician record, both, other), and how are “single” vs “multiple” sources defined?  
- [ ] How is “clinical recognition” operationalized in the main categories—ICD code only, diagnostic statement, or a combined indicator?  
- [ ] What is the reference category (baseline outcome) in the multinomial regression forest plot?  
- [ ] What is the reference group for race/ethnicity and SVI status categories?  
- [ ] What is the “gold standard” used for sensitivity/specificity/PPV/NPV calculations?  
- [ ] Were sex and ethnicity significant anywhere, and if not, what were their estimated effects?  
- [ ] How is intellectual disability status determined in ADDM (and what produces “unknown”)?  
- [ ] Are there differences in severity/functional need across the education-only vs ICD-only groups (if available in ADDM variables)?

---

## **P9. Seed questions for the presenter (poster-specific)**

### **P9.1 Understanding (definitions & workflow) — 8 questions**

1. In Arizona ADDM, what specific sources qualify as a “record source,” and how do you classify “single” vs “multiple” sources?  
2. In your four-category overlap plot, are categories based strictly on **special education exceptionality vs ICD code**, or do **clinical diagnostic statements** alter category assignment?  
3. What is your operational definition of “autism special education exceptionality” (what documentation in education records triggers it)?  
4. Which ICD codes (or code families) are counted as ASD ICD recognition in this analysis?  
5. How is “diagnostic statement from a clinical visit” captured—structured fields, chart abstraction, or clinician notes?  
6. How is intellectual disability status defined in the dataset, and what drives “unknown” status?  
7. How is overall SVI categorized (cutoffs for low/medium/high) for this poster?  
8. What is the omitted reference outcome category in the multinomial regression (e.g., “both”)?

### **P9.2 Results & interpretation — 8 questions**

1. The overlap plot shows 48% “exceptionality-only” and 18% “ICD-only.” What do you think is the biggest driver of this asymmetry?  
2. Within multiple-source children, ICD prevalence is 80% vs 24% in single-source children. Does this reflect access to clinical evaluation, documentation richness, or case severity?  
3. You report κ \= \-0.001 among multiple-source children. How do you interpret “worse than chance” agreement in this context—measurement mismatch vs classification pathways?  
4. The model shows Black/African American (not Hispanic) RRRs \>1 across all three shown categories (1.53, 1.85, 2.96). What’s the reference group and what does this imply about pathway differences?  
5. Surveillance year effects differ by category (e.g., 2020 RRR=0.46 for exceptionality-only but \~1.01 for ICD-only). What changed across cycles that might explain this?  
6. Medium/high SVI have RRRs \>1 in several categories. How do you interpret SVI’s relationship to education vs clinical recognition patterns?  
7. “Multiple sources” has very low RRRs in the forest plot (0.08, 0.20, 0.19). Is the reference outcome “both,” and would that explain these low values?  
8. Were there any interaction effects explored (e.g., SVI × race/ethnicity, or year × source availability)?

### **P9.3 Robustness / validity — 6 questions**

1. What was the reference standard for sensitivity/specificity/PPV/NPV? How should we interpret specificity being 11% (all children) and 17% (multiple sources)?  
2. Why did you choose penalized multinomial regression—was it due to sparse cells or separation?  
3. Did you test agreement using any alternative definitions (e.g., including diagnostic statement vs ICD code)?  
4. Did you check whether results change if you restrict to children with both education \+ clinical sources available?  
5. How did you handle missingness in key predictors (race/ethnicity, SVI, ID status), beyond including “unknown” categories?  
6. Were Holm adjustments applied only to the listed OR tests, or more broadly across comparisons?

### **P9.4 Implications / application — 6 questions**

1. If a child is “education-only,” what does that typically mean for access to clinical services in Arizona (based on your experience with these records)?  
2. How might these discordant pathways affect estimated autism prevalence in surveillance reporting?  
3. Should surveillance reports present education-recognition and clinical-recognition prevalence separately rather than as a blended construct?  
4. What policy or practice changes could reduce the “ICD-only” or “education-only” segmentation (e.g., referral workflows)?  
5. How should schools and clinicians coordinate to avoid children falling into the “neither” category (6%)?  
6. What do you see as the most actionable insight for stakeholders (schools, pediatric clinics, public health)?

### **P9.5 Future work / collaboration — 5 questions**

1. You note “full ADDM Network confirmation.” What analysis plan would you use—pooled model, site-specific models, or meta-analysis?  
2. Will you examine functional severity or service utilization differences across the four recognition categories?  
3. Could you incorporate time-to-evaluation or timing of first diagnosis/IEP to understand pathway sequencing?  
4. Are there plans to validate education exceptionality against standardized clinical assessments (or vice versa)?  
5. What collaborators or datasets would be most valuable for unpacking the access vs subpopulation question?

---

## **P10. Glossary**

* **ASD:** Autism spectrum disorder.  
* **ADDM Network:** Autism and Developmental Disabilities Monitoring Network (CDC-affiliated surveillance system).  
* **IDEA:** Individuals with Disabilities Education Act (context for special education eligibility categories).  
* **DSM-5:** Diagnostic and Statistical Manual of Mental Disorders, 5th edition (clinical diagnostic criteria context).  
* **ICD code:** International Classification of Diseases code recorded in clinical documentation/billing.  
* **SVI:** Social Vulnerability Index (overall status used as predictor).  
* **Fisher’s exact test:** Exact test for association in contingency tables.  
* **Cohen’s κ (kappa):** Agreement statistic beyond chance.  
* **Sensitivity/Specificity:** Classification performance metrics; meaning depends on the reference standard used.  
* **PPV/NPV:** Positive/Negative predictive values.  
* **OR:** Odds ratio.  
* **Holm p-value:** P-value adjusted using Holm multiple-comparison procedure.  
* **Penalized multinomial regression:** Multinomial model with penalization to address separation/sparsity (exact method not stated).  
* **RRR:** Relative risk ratio (multinomial regression coefficient exponentiation).

---

## **P11. Answering Guide (likely attendee questions \+ grounded answers)**

1. **Q:** What are the three ways ASD is operationalized in this surveillance framework?  
     
   * **A (poster-grounded):** (1) Autism special education exceptionality, (2) documented ASD ICD code, and (3) a diagnostic statement from a clinical visit.

   

2. **Q:** What years and sample size does this analysis cover?  
     
   * **A:** Arizona ADDM 8-year-olds from 2018, 2020, 2022; n=873.

   

3. **Q:** How much overlap is there between education and clinical recognition?  
     
   * **A:** 29% are recognized by both; 48% education-only; 18% ICD-only; 6% neither.

   

4. **Q:** Does having more record sources matter?  
     
   * **A:** Yes; multiple sources are associated with higher odds of exceptionality (OR=1.77) and especially ICD coding (OR=12.57), and lower odds of “neither” (OR=0.45), with Holm-adjusted p-values reported.

   

5. **Q:** Do special education exceptionality and ICD coding agree?  
     
   * **A:** Among children with multiple sources, agreement is essentially zero (κ=-0.001).

   

6. **Q:** What statistical methods were used?  
     
   * **A:** Fisher’s exact test, Cohen’s κ, sensitivity analyses, and penalized multinomial regression.

   

7. **Q:** What does the sensitivity analysis show for multiple-source children?  
     
   * **A:** Sensitivity 83%, specificity 17%, PPV 80%, NPV 20% (reference standard not described on the poster).

   

8. **Q:** What does the poster conclude about surveillance?  
     
   * **A:** Educational and clinical systems identify overlapping but distinct subsets; surveillance may need reassessment and confirmation across the ADDM Network.

   

9. **Q:** What are the major implications posed by the authors?  
     
   * **A:** Whether differences reflect an access issue or distinct subpopulations; and whether children with special education exceptionality reliably qualify for a clinical diagnosis.

   

10. **Q:** Who funded the work?  
      
* **A:** CDC funding via grant DD23-2301 at University of Arizona (under Dr. Jennifer Andrews), sub-awarded to ASU under Dr. Joshua Anbar; no conflict of interest stated.

---

## **P12. JSON metadata (for indexing)**

{

  "poster\_id": "CHS-RD2026-Anbar-J-CommunityRecognitionAutism",

  "title": "Differences in Community Recognition of Autism Between Special Education and Clinicians: Insights from Public Health Surveillance in Arizona",

  "authors": \["Joshua Anbar", "Amber Catalan", "Tyra Bozek", "Jennifer Andrews"\],

  "affiliations": \["Arizona State University", "University of Arizona"\],

  "keywords": \["autism", "asd", "surveillance", "addm", "arizona", "special-education", "idea", "clinical-coding", "icd", "health-equity", "svi", "agreement", "kappa", "multinomial-regression"\],

  "domain\_area": \["public health surveillance", "autism", "health services/access"\],

  "methods": \["Fisher's exact test", "Cohen's kappa", "sensitivity analysis", "penalized multinomial regression"\],

  "population": "Arizona ADDM surveillance sample of 8-year-olds",

  "timeframe": "2018, 2020, 2022",

  "outcomes": \["recognition category (education-only, ICD-only, both, neither)", "agreement (kappa)", "sensitivity/specificity/PPV/NPV"\],

  "datasets\_tools": \["ADDM Network (Arizona site)", "Social Vulnerability Index (SVI)"\],

  "key\_results": \[

    "Recognition categories: 48% education-only, 18% ICD-only, 29% both, 6% neither (n=873).",

    "Multiple sources: OR=1.77 for exceptionality (Holm p=0.002).",

    "Multiple sources: OR=12.57 for ICD code (Holm p\<0.001).",

    "Multiple sources: OR=0.45 for neither (Holm p=0.018).",

    "Agreement among multiple-source children: kappa=-0.001."

  \],

  "figures\_count": 5,

  "tables\_count": 0,

  "confidence": "High"

}

---

## **P13. Extraction quality score (rubric)**

A. Completeness (30)

* Identification captured (0–10): **9/10** — Title/authors/affiliations/funding captured; event/date/contact not provided on poster.  
* Study-at-a-glance complete (0–10): **9/10** — Objectives, population, years, n, variables, and methods captured; inclusion/exclusion not stated.  
* Methods specificity (0–10): **8/10** — Statistical methods and variables listed; some operational definitions (record sources, reference categories) not stated.

B. Results extraction fidelity (35)

* Numeric results captured (0–15): **14/15** — All visible headline numbers, ORs/p-values, kappa, subgroup sizes, and sensitivity metrics captured.  
* Figures interpreted (0–10): **9/10** — All figures described and extracted; CIs not numerically labeled; model reference category missing.  
* Tables reproduced (0–10): **10/10** — No tables present.

C. Groundedness / non-hallucination (15)

* No invented claims (0–10): **10/10** — All claims trace to poster text/figures.  
* Uncertainty labeling (0–5): **5/5** — Missing items labeled “Not stated on poster”; chart interpretation caveats noted.

D. Q\&A utility (15)

* Seed questions specificity (0–8): **8/8** — Questions reference exact measures, figures, and reported values.  
* Clarification checklist quality (0–4): **4/4** — Targets critical missing items (reference standards, source definitions, model baselines).  
* Answering guide usefulness (0–3): **3/3** — Common attendee questions answered with poster-grounded content.

E. Structure & indexability (5)

* IDs and headings consistent (0–5): **5/5**  
    
* **Total score:** **94/100**
