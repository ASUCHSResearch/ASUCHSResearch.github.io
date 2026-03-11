# **POSTER\_BRIEF — CHS-RD2026-Chung-Y-SARSCoV2AntibodyDynamics**

## **0\. Document metadata**

* **PosterID:** CHS-RD2026-Chung-Y-SARSCoV2AntibodyDynamics  
* **Source file:** Chung 2026\_03\_ResearchDay.pptx.pdf  
* **Extraction date:** 2026-03-10  
* **Extractor model/version:** GPT-5.2 Thinking  
* **Confidence summary:** Medium  
* **Notes on legibility:** Some small text

---

## **P1. Poster identification**

* **Title (exact):** SARS-CoV-2 Antibody Dynamics in Immunocompromised and Healthy Individuals  
* **Authors (exact):** Gabrielle Rogers¹, Shivani Shah¹, and Yunro Chung¹–³  
* **Affiliations (exact):** ¹ Biostatistics Program, College of Health Solutions, ASU; ² Biomedical Informatics and Data Science Program, College of Health Solutions, ASU; ³ Center for Personalized Diagnostics, Biodesign Institute, ASU  
* **Event / venue:** Not stated on poster  
* **Date:** Not stated on poster  
* **Contact / QR / links:** Contact block lists: “Yunro Chung, PhD, Assistant Professor of Biostatistics, College of Health Solutions, ASU” and email “[yunro.chung@asu.edu](mailto:yunro.chung@asu.edu)”.

---

## **P2. 30-second summary**

This poster analyzes large-scale longitudinal serology data (1,767 participants; 4,582 samples) to characterize how SARS-CoV-2 antibody responses change over time in immunocompromised groups (autoimmune disease, cancer, HIV, solid organ transplant recipients) versus healthy controls. Antibody responses to SARS-CoV-2 antigens and infection status were measured using MISPA, and nonlinear mixed-effects models with spline time interactions were used to quantify how peak timing and decay differ by cohort and by vaccination/infection status. The visual results highlight heterogeneous trajectories after vaccine completion and after booster vaccination, with infection timing annotated, and the modeling indicates statistically significant differences across cohorts (p\<0.05) and vaccination×infection interactions (p\<0.05).

---

## **P3. Study at a glance**

* **Objective(s):** Not stated on poster as explicit objectives; implied objective is to robustly characterize longitudinal SARS-CoV-2 antibody trajectories across immunocompromised cohorts and healthy controls to inform immunity durability and vaccination strategy.  
    
* **Research question(s):**  
    
  * How do antibody trajectories (peak time and decay) differ across autoimmune disease, cancer, HIV, solid organ transplant recipients, and healthy controls?  
  * How do vaccination and infection status interact to shape antibody dynamics?


* **Hypotheses:** Implied (cohort-specific differences; vaccination×infection interactions); not stated.  
    
* **Study type:** Observational longitudinal serology analysis with statistical modeling (nonlinear mixed-effects).  
    
* **Setting/context:** Multi-institution harmonized dataset collated across Arizona State University, University of Minnesota, Feinstein Institutes for Medical Research, and Icahn School of Medicine at Mount Sinai.  
    
* **Population/sample:** Five cohorts: autoimmune disease, cancer, HIV, solid organ transplant recipients, and healthy controls.  
    
* **Inclusion/exclusion (if stated):** Not stated on poster  
    
* **Sample size(s):** 1,767 participants; 4,582 longitudinal samples.  
    
* **Timeframe:** Overall trend panel spans approximately April 2021–September 2022; booster trend panel spans approximately June 2021–August 2022 (as labeled on poster).  
    
* **Data sources:** Demographics and vaccination histories; antibody responses against SARS-CoV-2 antigens and infection status measured using MISPA (multiplexed in-solution protein array).  
    
* **Groups/conditions/comparators:** Cohort group (5 cohorts); vaccination phase (after vaccine completion; after booster); infection status categories shown in plots (exact label text is small/partially unreadable).  
    
* **Primary outcome(s):** Antibody response trajectories over time (exact antibody metric label is unclear on poster image; described as antibody responses to SARS-CoV-2 antigens).  
    
* **Secondary outcome(s):** Infection status (including time to first infection annotated); modeled differences in peak time and slope decay; interaction significance.

---

## **P4. Methods (deep extraction)**

### **P4.1 Design & workflow**

1. Collate harmonized longitudinal serology dataset across multiple institutions; collect demographics and vaccination histories.  
2. Measure antibody responses against SARS-CoV-2 antigens and infection status using MISPA (multiplexed in-solution protein array).  
3. Stratify/compare trajectories across five cohorts (autoimmune disease, cancer, HIV, solid organ transplant recipients, healthy controls) and across vaccination phases (post vaccine completion; post booster).  
4. Fit nonlinear mixed-effect models with spline time and interaction terms to quantify heterogeneity in peak timing and decay slopes by cohort and infection/vaccination status.

### **P4.2 Measures & instruments**

* **Measure:** Antibody responses against SARS-CoV-2 antigens  
    
  * **What it measures:** Longitudinal antibody response dynamics (durability/kinetics) to SARS-CoV-2 antigens.  
  * **Scale/units:** Unclear on poster (axis text too small); measured using MISPA.


* **Measure:** Infection status  
    
  * **What it measures:** Whether/when participants were infected; figure notes “Circled dot indicates time to first infection.”  
  * **Scale/units:** Categorical status \+ infection timing markers.


* **Measure:** Vaccination history  
    
  * **What it measures:** Vaccine completion and booster timing; trajectories aligned to “time since vaccination” and “time since booster” in plots (time scale appears in months).  
  * **Scale/units:** Time since vaccination/booster (months; axis label appears to be months but small).


* **Measure:** Demographics  
    
  * **What it measures:** Participant characteristics (specific demographics not listed).


* **Instrument/assay:** **MISPA** (multiplexed in-solution protein array)  
    
  * **What it measures:** Antibody responses and infection status.

### **P4.3 Data processing**

* Not stated on poster (no description of normalization, assay harmonization steps, censoring rules, or exclusion criteria).

### **P4.4 Statistical analysis**

* **Tests/models used:** Nonlinear mixed-effect models with interaction terms between group × cubic spline time (p\<0.05) and vaccination × infection status (p\<0.05).  
* **Model specification (if shown):** Uses cubic spline time; includes interaction terms; details of random effects, link function, and distribution are not stated.  
* **Covariates/adjustments:** Not stated on poster  
* **Multiple comparisons:** Not stated on poster  
* **Software/tools:** Not stated on poster  
* **Missing data handling:** Not stated on poster  
* **Sensitivity/robustness checks:** Not stated as completed; posed as future research questions (robustness to diagnostic errors, measurement errors, unmeasured confounders).

---

## **P5. Results (exhaustive)**

### **P5.1 Key findings (bullet list)**

* Dataset size: **1,767 participants** contributed **4,582** longitudinal samples across four institutions.  
    
* Study cohorts: autoimmune disease, cancer, HIV, solid organ transplant recipients, and healthy controls.  
    
* Modeling results:  
    
  * Group × cubic spline time interaction significant (p\<0.05).  
  * Vaccination × infection status interaction significant (p\<0.05).  
  * Peak time and slope decay vary across the five cohorts (p\<0.05).


* Visual findings (from poster plots):  
    
  * Antibody trajectories differ by cohort after vaccine completion and after booster vaccination; plots annotate “time to first infection” with a circled dot and color shading by variant period (Pre-Alpha, Alpha/Beta/Gamma, Delta, Omicron).

### **P5.2 Numerical extraction table**

| ResultID | Metric/Variable | Group/Condition A | Group/Condition B | Effect/Diff | CI/SE | p-value | Source (figure/table/text) | Notes |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| R1 | Participants | All cohorts | — | 1,767 | — | — | text | Total participants |
| R2 | Longitudinal samples | All cohorts | — | 4,582 | — | — | text | Total samples contributed |
| R3 | Cohort count | Study population | — | 5 cohorts | — | — | text | Autoimmune, cancer, HIV, transplant, healthy |
| R4 | Institutions contributing data | Collation sites | — | 4 institutions | — | — | text | ASU; Univ. Minnesota; Feinstein; Mount Sinai |
| R5 | Overall trend timeframe | Start | End | April 2021 – September 2022 | — | — | P5.F1 | As labeled on poster |
| R6 | Booster trend timeframe | Start | End | June 2021 – August 2022 | — | — | P5.F3 | As labeled on poster |
| R7 | Variant period legend | Pre-Alpha | Omicron | Gray/Blue/Yellow/Pink | — | — | P5.F1 | Gray=Pre-Alpha; Blue=Alpha (Beta, Gamma); Yellow=Delta; Pink=Omicron |
| R8 | Model interaction significance | group × cubic spline time | — | Significant | — | p\<0.05 | text | Nonlinear mixed-effects model |
| R9 | Model interaction significance | vaccination × infection status | — | Significant | — | p\<0.05 | text | Nonlinear mixed-effects model |
| R10 | Peak time and decay differ by cohort | Across 5 cohorts | — | Varies | — | p\<0.05 | text | “Peak time and slope decay varied” |
| R11 | Grant amount | Leidos Project (Prime: NIH) | — | $14.9M | — | — | text | Oct 2021 – Sep 2025 |
| R12 | Leidos project dates | Start | End | Oct 2021 – Sep 2025 | — | — | text | “Leidos Project (Prime: NIH)” |

### **P5.3 Figures (figure-by-figure)**

#### P5.F1 — Overall Trend

* **Type:** Multi-panel time-series / longitudinal scatter with background “variant period” shading  
* **Axes:** X=Date/time (calendar timeline); Y=Antibody response metric (exact label/units unclear on poster due to small text); separate panels by cohort.  
* **Legend/categories:** Variant period shading: Gray=Pre-Alpha; Blue=Alpha (Beta, Gamma); Yellow=Delta; Pink=Omicron.  
* **What it shows:** Overall antibody response patterns across time for each cohort; dense longitudinal points/trajectories with variant-era context.  
* **Extracted numbers:** Time window labeled April 2021–September 2022; variant legend as above.  
* **Authors’ interpretation (if stated):** Overall antibody trajectories are heterogeneous and shaped by infection, vaccination history, and clinical disease status; large-scale harmonized data needed.  
* **Analyst plain-language interpretation (no speculation):** The overall trend panels contextualize antibody levels across pandemic variant eras and show visually distinct trajectory densities/patterns by cohort.

#### P5.F2 — Trend after Vaccine Completion

* **Type:** Five small-multiple longitudinal panels (one per cohort), with individual trajectories and modeled trend lines  
* **Axes:** X=Time since vaccination (appears to be months); Y=Antibody response metric (label/units unclear).  
* **Legend/categories:** Infection status groups shown by color/line type (exact category labels are partially unreadable in the image); figure notes “Circled dot indicates time to first infection.”  
* **What it shows:** Post–vaccine completion antibody trajectories by cohort; infection timing annotated.  
* **Extracted numbers:** Infection timing marker described; no numeric effect sizes printed in these panels (as readable).  
* **Authors’ interpretation (if stated):** Not stated as a caption, but consistent with “Peak time and slope decay varied across cohorts (p\<0.05).”  
* **Analyst plain-language interpretation (no speculation):** The post-completion plots indicate cohort-specific peak and decay patterns and show that infection timing (circled dot) is a key event influencing trajectories.

#### P5.F3 — Trend after Booster Vaccination

* **Type:** Five small-multiple longitudinal panels (one per cohort), with individual trajectories and modeled trend lines  
* **Axes:** X=Time since booster vaccination (appears to be months); Y=Antibody response metric (label/units unclear).  
* **Legend/categories:** Infection status categories appear similarly encoded as in P5.F2; time to first infection indicated.  
* **What it shows:** Post-booster antibody trajectories by cohort.  
* **Extracted numbers:** Time window labeled June 2021–August 2022\.  
* **Authors’ interpretation (if stated):** Not stated as a caption; ties to modeling note of vaccination×infection interaction (p\<0.05).  
* **Analyst plain-language interpretation (no speculation):** After boosting, trajectories still differ across cohorts and by infection status, motivating the interaction modeling described.

#### P5.F4 — Statistical Modeling (text panel)

* **Type:** Methods/results callout panel  
* **Axes:** Not applicable  
* **Legend/categories:** Not applicable  
* **What it shows:** Summary of modeling approach and statistically significant interaction findings.  
* **Extracted numbers:** p\<0.05 for group×time spline and vaccination×infection interaction; p\<0.05 cohort differences in peak/decay.  
* **Authors’ interpretation (if stated):** Cohort-specific kinetics and interactions are statistically supported.  
* **Analyst plain-language interpretation (no speculation):** The authors’ modeling summary indicates systematic differences that align with the visual heterogeneity in the plots.

### **P5.4 Tables (table-by-table)**

#### P5.T1 — Not stated on poster

* **Reproduced table (text form):** Not stated on poster  
* **What it implies:** Not applicable

---

## **P6. Discussion & implications**

* **Authors’ stated conclusions:** Not stated as a “Conclusion” section; the background and modeling notes imply that antibody trajectories are heterogeneous and that cohort, vaccination history, and infection status materially shape the temporal dynamics, requiring robust statistical methods and harmonized data for accurate interpretation and policy decisions.  
    
* **Implications (poster-grounded):**  
    
  * Accurate interpretation of seroprevalence and immunity durability requires modeling heterogeneous antibody kinetics across clinical cohorts.  
  * Interaction between vaccination and infection status suggests that vaccination-only trajectories differ from trajectories with infection events, and this should be incorporated into analyses informing vaccination strategies.


* **Mechanism/explanation (ONLY if stated):** Not stated on poster  
    
* **Connections to prior work (ONLY if referenced):**  
    
  * SeroNet description and reference to Karger et al. (2022) on SeroNet assay harmonization.  
  * MISPA is cited as the measurement platform; poster references “MISPA \[2\]” (reference text on poster is listed, though the \[2\] citation appears mismatched to MISPA in the provided reference list).  
  * Leidos Project (Prime: NIH) describes a funded effort to develop/validate/implement a multiplexed clinical serology assay at ASU.

---

## **P7. Limitations & assumptions**

* **Stated limitations:** Not stated on poster  
    
* **Analyst inferences (clearly labeled as inference):**  
    
  * *Inference:* The poster provides strong high-level modeling conclusions (p\<0.05 statements) but does not report cohort-specific effect sizes (e.g., estimated peak times, decay rates) or uncertainty intervals, limiting quantitative comparability from the poster alone.  
  * *Inference:* Some axis labels/units and infection-status legend text are too small to read reliably in the poster image; interpretations of the exact antibody metric should be confirmed with the presenter.


* **Assumptions required for conclusions (if stated):** Not stated on poster

---

## **P8. What’s missing / clarification checklist (ask the presenter)**

- [ ] What is the exact antibody outcome being plotted (which antigen(s), isotype, and units), and how is it transformed (log scale?)?  
- [ ] What are the infection-status categories used in the post-vaccine/post-booster panels (legend text is small)?  
- [ ] What are the estimated peak times and decay slopes by cohort, with confidence intervals?  
- [ ] What covariates are included in the mixed-effects models (age, sex, vaccine product, immunosuppressive therapy, site effects)?  
- [ ] How were infections ascertained (PCR, serology patterns, EHR) and how were diagnostic errors handled?  
- [ ] How does booster effectiveness against infection get evaluated in your planned methodology (causal estimand, time-varying confounding)?  
- [ ] How were MISPA measurements harmonized across sites (batch effects, calibration, reference standards)?  
- [ ] Are there subgroup findings within cohorts (e.g., transplant type, cancer therapy) that explain within-cohort heterogeneity?

---

## **P9. Seed questions for the presenter (poster-specific)**

### **P9.1 Understanding (definitions & workflow) — 8 questions**

1. Which SARS-CoV-2 antigens and antibody isotypes are included in the plotted “antibody response,” and what units/transformations are used?  
2. How is infection status defined in MISPA-based surveillance here, and what triggers the “time to first infection” circled dot?  
3. What constitutes “vaccine completion” in the plots (dose count/product), and how is “booster” defined?  
4. How were data harmonized across ASU, Minnesota, Feinstein, and Mount Sinai (assay calibration, batch correction)?  
5. What are the cohort definitions—how are autoimmune disease, cancer, HIV, and transplant status operationalized?  
6. What is the cadence of sampling (how many longitudinal samples per participant on average), and how uneven is it across cohorts?  
7. Are the time-since-vaccine and time-since-booster axes in months, and what is the maximum follow-up time captured?  
8. Which demographic variables were collected and used (and were there missingness patterns)?

### **P9.2 Results & interpretation — 8 questions**

1. The model indicates cohort differences in peak time and decay (p\<0.05). What are the estimated peak times and decay rates for each cohort?  
2. Which cohort shows the fastest antibody decay after vaccine completion, and is that difference clinically meaningful?  
3. How does infection timing (circled dot) typically alter trajectories—does infection create a distinct “rebound” pattern in each cohort?  
4. Are post-booster trajectories more similar across cohorts than post-completion trajectories, or does heterogeneity persist?  
5. Does the vaccination×infection interaction suggest synergy (stronger responses) or masking (harder to separate effects) across cohorts?  
6. Were there notable differences between healthy controls and each immunocompromised cohort in absolute antibody levels?  
7. Do the variant-era overlays (Pre-Alpha through Omicron) correspond to visible shifts in infection events or antibody boosts?  
8. Are there identifiable subgroups within immunocompromised cohorts driving wide variability (e.g., therapy intensity)?

### **P9.3 Robustness / validity — 6 questions**

1. How robust are your findings to infection misclassification (diagnostic errors) and measurement error in antibody assays?  
2. What sensitivity analyses have you run (or plan) for unmeasured confounding in booster effectiveness questions?  
3. How do you handle informative sampling (people who get sampled more often may differ systematically)?  
4. Do results change when you restrict to participants with complete vaccination history documentation?  
5. How did you choose spline complexity (knot placement/df) and assess overfitting?  
6. Did you include random slopes for time by participant, and did that differ by cohort?

### **P9.4 Implications / application — 6 questions**

1. How should public health teams use these cohort-specific trajectories when interpreting seroprevalence estimates?  
2. What do your findings suggest about booster timing strategies for immunocompromised cohorts (even qualitatively)?  
3. Are there clinical implications for monitoring antibody levels in transplant/cancer patients versus relying on population guidance?  
4. Could these models be used to predict individual-level protection proxies, or are they intended for group-level inference only?  
5. What would you recommend for future harmonized serology collections to improve inference quality (sampling schedule, metadata)?  
6. How might these findings support decision-making in healthcare systems caring for immunocompromised patients?

### **P9.5 Future work / collaboration — 5 questions**

1. Your poster asks “Is the booster vaccine effective against SARS-CoV-2 infection?” What causal framework/estimand are you planning to use?  
2. Are you building methodological tools to jointly model antibody kinetics and infection hazard, and how will you validate them?  
3. Will you incorporate additional pathogens beyond SARS-CoV-2 (consistent with multiplex respiratory pathogen goals)?  
4. Are you seeking clinical partners for deeper phenotyping (immunosuppressive meds, transplant type, cancer regimens)?  
5. Will you release harmonized datasets or code to enable external replication?

---

## **P10. Glossary**

* **SeroNet:** Serological Sciences Network; national consortium launched by NCI in 2020 to harmonize/standardize SARS-CoV-2 serology assays and enable cross-study comparability.  
* **MISPA:** Multiplexed in-solution protein array; assay used to measure antibody responses against SARS-CoV-2 antigens and infection status.  
* **Nonlinear mixed-effect model:** Model class used to fit longitudinal antibody trajectories with participant-level random effects (random effects not specified on poster).  
* **Cubic spline time:** Flexible time function used in models to capture non-linear antibody trajectories.  
* **Peak time / slope decay:** Kinetic features of antibody response (timing of maximum response; rate of decrease).  
* **Booster vaccination:** Additional vaccine dose after initial completion; used as alignment point for “trend after booster vaccination.”  
* **Variant period shading:** Visual annotation of SARS-CoV-2 variant eras: Pre-Alpha (gray), Alpha/Beta/Gamma (blue), Delta (yellow), Omicron (pink).

---

## **P11. Answering Guide (likely attendee questions \+ grounded answers)**

1. **Q:** How big is the dataset?  
     
   * **A (poster-grounded):** 1,767 participants contributed 4,582 longitudinal samples.

   

2. **Q:** Which groups are compared?  
     
   * **A:** Five cohorts: autoimmune disease, cancer, HIV, solid organ transplant recipients, and healthy controls.

   

3. **Q:** How were antibodies measured?  
     
   * **A:** Using a multiplexed in-solution protein array (MISPA) to measure antibody responses to SARS-CoV-2 antigens and infection status.

   

4. **Q:** What modeling approach was used?  
     
   * **A:** Nonlinear mixed-effect models with interaction terms between group × cubic spline time and vaccination × infection status (both p\<0.05).

   

5. **Q:** What did the models conclude?  
     
   * **A:** Peak time and slope decay varied across the five cohorts (p\<0.05).

   

6. **Q:** What do the vaccine-completion and booster panels show?  
     
   * **A:** Cohort-specific antibody trajectories after vaccine completion and after booster vaccination, with infection timing annotated (circled dot indicates time to first infection).

   

7. **Q:** What time period does the “overall trend” cover?  
     
   * **A:** Approximately April 2021 to September 2022 (as labeled on the poster).

   

8. **Q:** What is SeroNet and why is it relevant?  
     
   * **A:** SeroNet is a national consortium launched by NCI in 2020 to standardize and harmonize serology assays to improve cross-study comparability and large-scale antibody kinetics research.

   

9. **Q:** What is the related funded project described?  
     
   * **A:** A Leidos project (Prime: NIH), “Multiplexed in-solution serological test…” ($14.9M; Oct 2021–Sep 2025\) to develop/validate/implement large-scale clinical serology at ASU’s ABCTL.

   

10. **Q:** How can I contact the presenter?  
      
* **A:** [yunro.chung@asu.edu](mailto:yunro.chung@asu.edu)

---

## **P12. JSON metadata (for indexing)**

{

  "poster\_id": "CHS-RD2026-Chung-Y-SARSCoV2AntibodyDynamics",

  "title": "SARS-CoV-2 Antibody Dynamics in Immunocompromised and Healthy Individuals",

  "authors": \["Gabrielle Rogers", "Shivani Shah", "Yunro Chung"\],

  "affiliations": \[

    "Biostatistics Program, College of Health Solutions, Arizona State University",

    "Biomedical Informatics and Data Science Program, College of Health Solutions, Arizona State University",

    "Center for Personalized Diagnostics, Biodesign Institute, Arizona State University"

  \],

  "keywords": \["sars-cov-2", "antibody-dynamics", "serology", "seronet", "mispa", "immunocompromised", "autoimmune", "cancer", "hiv", "solid-organ-transplant", "healthy-controls", "booster", "nonlinear-mixed-effects", "cubic-spline"\],

  "domain\_area": \["biostatistics", "infectious disease serology", "immunology", "public health"\],

  "methods": \["multiplexed in-solution protein array (MISPA)", "nonlinear mixed-effect models", "cubic spline time interactions", "vaccination × infection interaction modeling"\],

  "population": "Five cohorts: autoimmune disease, cancer, HIV, solid organ transplant recipients, and healthy controls",

  "timeframe": "Overall trend: Apr 2021–Sep 2022; Booster trend: Jun 2021–Aug 2022; Project dates: Oct 2021–Sep 2025",

  "outcomes": \["longitudinal SARS-CoV-2 antibody response trajectories", "peak time and decay slope variation by cohort", "infection timing annotation (time to first infection)"\],

  "datasets\_tools": \["SeroNet infrastructure", "MISPA serology assay", "multi-institution harmonized dataset"\],

  "key\_results": \[

    "1,767 participants contributed 4,582 longitudinal samples.",

    "Nonlinear mixed-effects models found significant group × spline time interaction (p\<0.05).",

    "Vaccination × infection status interaction was significant (p\<0.05).",

    "Peak time and slope decay varied across the five cohorts (p\<0.05).",

    "Plots show heterogeneous post-vaccine and post-booster trajectories with infection timing annotated."

  \],

  "figures\_count": 4,

  "tables\_count": 0,

  "confidence": "Medium"

}

---

## **P13. Extraction quality score (rubric)**

A. Completeness (30)

* Identification captured (0–10): **10/10** — Title, authors, affiliations, and contact email captured.  
* Study-at-a-glance complete (0–10): **8/10** — Sample sizes, cohorts, sites, assay, and modeling captured; inclusion/exclusion and explicit outcomes/units not fully specified.  
* Methods specificity (0–10): **7/10** — Model class and key interactions stated; covariates, random effects, and preprocessing/harmonization steps not described.

B. Results extraction fidelity (35)

* Numeric results captured (0–15): **12/15** — All visible headline numbers and p-threshold claims captured; cohort-specific peak/decay estimates not reported on poster.  
* Figures interpreted (0–10): **7/10** — Figure structure/axes largely inferred; antibody metric label/units and infection-status legend too small to transcribe reliably.  
* Tables reproduced (0–10): **10/10** — No tables present.

C. Groundedness / non-hallucination (15)

* No invented claims (0–10): **10/10**  
* Uncertainty labeling (0–5): **5/5** — Unreadable axis/legend elements marked unclear.

D. Q\&A utility (15)

* Seed questions specificity (0–8): **8/8** — Focused on assay definition, model details, cohort-specific kinetics, and causal booster questions explicitly raised by poster.  
* Clarification checklist quality (0–4): **4/4**  
* Answering guide usefulness (0–3): **3/3**

E. Structure & indexability (5)

* IDs and headings consistent (0–5): **5/5**  
    
* **Total score:** **89/100**

