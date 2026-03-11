# **POSTER\_BRIEF — CHS-RD2026-Gu-H-AIAssistedMetabolomicsPrep**

## **0\. Document metadata**

* **PosterID:** CHS-RD2026-Gu-H-AIAssistedMetabolomicsPrep  
* **Source file:** Gu.pptx.pdf  
* **Extraction date:** 2026-03-10  
* **Extractor model/version:** GPT-5.2 Thinking  
* **Confidence summary:** High  
* **Notes on legibility:** Clear

---

## **P1. Poster identification**

* **Title (exact):** AI-Assisted Metabolomics Sample Preparation Enhances Analytical Accuracy and Result Reliability  
* **Authors (exact):** Ximeng Liu, Lingjun Li, Shiquan Cui, Michael Jang, Haiwei Gu\*.  
* **Affiliations (exact):** Not stated on poster (ASU College of Health Solutions logo shown).  
* **Event / venue:** Not stated on poster  
* **Date:** Not stated on poster  
* **Contact / QR / links:** QR code present (bottom-right); destination not printed as text.

---

## **P2. 30-second summary**

This poster addresses a common metabolomics sample-prep step—**drying**—and shows that it can selectively deplete metabolites and cause incomplete reconstitution, introducing systematic bias. The team compares **no drying vs vacuum drying vs N₂ drying** in serum, uses **untargeted Orbitrap LC–MS** to detect global drying-related shifts, then validates key pathway impacts with **targeted triple-quadrupole LC–MS/MS (MRM; n=4)**. An interpretable machine-learning model links drying sensitivity to chemical properties and predicts metabolite drying sensitivity with **87.5% test accuracy**, aiming to improve throughput and reproducibility.

---

## **P3. Study at a glance**

* **Objective(s):**  
    
  * Identify metabolites most affected by drying and link their vulnerability to underlying chemical features.  
  * Use an interpretable ML model to predict drying-sensitive metabolites and inform more robust sample-prep design to improve throughput and reproducibility.


* **Research question(s):**  
    
  * How does drying (vacuum or N₂) alter the metabolite profile relative to no drying in serum?  
  * Which chemical properties predict metabolite “drying sensitivity”?  
  * Can an interpretable ML model predict drying sensitivity with useful accuracy?


* **Hypotheses:** Implied (drying changes metabolite profiles; chemical properties predict sensitivity; ML can predict sensitivity); not stated.  
    
* **Study type:** Experimental comparison of sample-prep conditions \+ analytical chemistry workflow \+ ML prediction.  
    
* **Setting/context:** Metabolomics sample preparation for LC–MS analysis (serum aliquots).  
    
* **Population/sample:** Serum samples (aliquots).  
    
* **Inclusion/exclusion (if stated):** Not stated on poster  
    
* **Sample size(s):**  
    
  * Targeted validation: **n=4** (MRM mode).  
  * Untargeted sample count: Not stated on poster.


* **Timeframe:** Not stated on poster  
    
* **Data sources:** Untargeted LC–MS (Orbitrap) data; targeted LC–MS/MS (triple quadrupole, MRM); chemical descriptors (Chemaxon); statistical/visualization outputs (MetaboAnalyst 6.0); ML modeling in Python 3.12.  
    
* **Groups/conditions/comparators:** No drying vs vacuum drying vs N₂ drying.  
    
* **Primary outcome(s):** Drying-related changes in metabolite profiles (global and pathway-level) and ML-predicted drying sensitivity.  
    
* **Secondary outcome(s):** Model test accuracy; important chemical properties driving predictions.

---

## **P4. Methods (deep extraction)**

### **P4.1 Design & workflow**

1. **Samples & prep:** Prepare serum aliquots under three conditions: **no drying**, **vacuum drying**, **N₂ drying**.  
2. **Untargeted analysis:** Run high-resolution LC–MS on an **Orbitrap** to detect global drying-related metabolite changes (visualized with PCA).  
3. **Targeted validation:** Use **triple-quadrupole LC–MS/MS** in **MRM mode** (n=4) to confirm drying effects and identify impacted metabolic pathways.  
4. **AI/ML modeling:** Build an interpretable ML model in **Python 3.12**; compute molecular descriptors using **Chemaxon**; perform statistics/visualization in **MetaboAnalyst 6.0**; rank important chemical features and predict metabolites most sensitive to drying.

### **P4.2 Measures & instruments**

* **Measure:** Drying sensitivity (metabolite-level)  
    
  * **What it measures:** Degree to which drying alters/depletes a metabolite and/or affects reconstitution (operational definition not stated explicitly).  
  * **Scale/units:** Not stated on poster.


* **Measure:** Global metabolite profile shift  
    
  * **What it measures:** Multivariate separation among prep conditions (PCA).  
  * **Scale/units:** PCA scores (PC1/PC2).


* **Measure:** Pathway impact (targeted)  
    
  * **What it measures:** Significant impacts on key metabolic pathways (pathway names shown; quantitative effect sizes not printed in text).  
  * **Scale/units:** Not stated on poster (visual bar/box-type plots shown).


* **Measure:** Model predictive performance  
    
  * **What it measures:** Test accuracy and confusion matrix for drying-sensitivity prediction.  
  * **Scale/units:** Accuracy (0–1); confusion matrix counts.


* **Instruments/software:**  
    
  * Orbitrap LC–MS (untargeted)  
  * Triple quadrupole LC–MS/MS (MRM mode) (targeted validation)  
  * Python 3.12 (modeling/interpretation)  
  * Chemaxon (molecular descriptors)  
  * MetaboAnalyst 6.0 (statistics/visualization)

### **P4.3 Data processing**

* Model uses molecular descriptors (examples visible in feature panel include: **Molecular weight, TPSA, XlogP, Water solubility**; other descriptors appear but are not fully readable).  
* Additional preprocessing steps (normalization, feature filtering, missingness) are **Not stated on poster**.

### **P4.4 Statistical analysis**

* **Tests/models used:** PCA (untargeted), targeted pathway impact comparisons (test type not stated), interpretable machine-learning model with feature-importance ranking, confusion matrix evaluation with test accuracy.  
* **Model specification (if shown):** Not stated on poster (algorithm type, train/test split method not specified).  
* **Covariates/adjustments:** Not stated on poster  
* **Multiple comparisons:** Not stated on poster  
* **Missing data handling:** Not stated on poster  
* **Sensitivity/robustness checks:** Not stated on poster

---

## **P5. Results (exhaustive)**

### **P5.1 Key findings (bullet list)**

* Drying is described as potentially **selectively depleting metabolites** and causing **incomplete reconstitution**, introducing systematic bias and compromising analytical accuracy.  
* **Untargeted PCA** indicates that drying alters the metabolite profile (no drying vs vacuum drying vs N₂ drying separate in PCA space).  
* **Targeted analysis (MRM; n=4)** indicates drying significantly impacts key metabolic pathways (pathway panels shown; exact numeric changes not printed).  
* The AI model ranks chemical properties most predictive of drying sensitivity (feature-importance plot shown).  
* The AI model predicts metabolite drying sensitivity with **87.5% test accuracy (0.875)**; confusion matrix counts are shown.

### **P5.2 Numerical extraction table**

| ResultID | Metric/Variable | Group/Condition A | Group/Condition B | Effect/Diff | CI/SE | p-value | Source (figure/table/text) | Notes |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| R1 | Sample-prep conditions compared | No drying | Vacuum drying, N₂ drying | 3 conditions | — | — | text | Serum aliquots |
| R2 | Targeted validation method | LC–MS/MS triple quadrupole | — | MRM mode | — | — | text |  |
| R3 | Targeted validation sample size | Targeted LC–MS/MS | — | n=4 | — | — | text | Stated as “MRM; n=4” |
| R4 | Model test accuracy | ML prediction | — | 0.875 | — | — | P5.F4 | “Test Accuracy: 0.875” |
| R5 | Model test accuracy (percent) | ML prediction | — | 87.5% | — | — | text | Same as R4 |
| R6 | Confusion matrix count | True label 0 predicted 0 | — | 22 | — | — | P5.F4 | Confusion matrix cell |
| R7 | Confusion matrix count | True label 0 predicted 1 | — | 1 | — | — | P5.F4 | Confusion matrix cell |
| R8 | Confusion matrix count | True label 1 predicted 0 | — | 4 | — | — | P5.F4 | Confusion matrix cell |
| R9 | Confusion matrix count | True label 1 predicted 1 | — | 13 | — | — | P5.F4 | Confusion matrix cell |
| R10 | Software version | Python | — | 3.12 | — | — | text | Used for modeling/interpretation |
| R11 | Software version | MetaboAnalyst | — | 6.0 | — | — | text | Used for statistics/visualization |
| R12 | Grant number | NIH | — | 2R01ES030197-06A1 | — | — | text | Funding |
| R13 | Grant number | NIH | — | 1U01AG088557-01 | — | — | text | Funding |

### **P5.3 Figures (figure-by-figure)**

#### P5.F1 — Workflow overview (Step 1–3 schematic)

* **Type:** Process diagram with icons (serum tubes → prep conditions → instruments → ML)  
* **Axes:** Not applicable  
* **Legend/categories:** Step 1 Untargeted analysis; Step 2 Targeted analysis (MRM; n=4); Step 3 ML model prediction and feature explanation.  
* **What it shows:** End-to-end pipeline comparing drying conditions, discovering effects (Orbitrap), validating pathway impacts (triple quad MRM), and predicting sensitivity via interpretable ML using chemical descriptors.  
* **Extracted numbers:** n=4 (targeted MRM).  
* **Authors’ interpretation (if stated):** Framework improves analytical accuracy and reliability by identifying and predicting drying-sensitive metabolites.  
* **Analyst plain-language interpretation (no speculation):** The figure integrates discovery, validation, and prediction to turn a known prep artifact (drying bias) into a modeled, predictable phenomenon.

#### P5.F2 — Panel a: Untargeted PCA scores plot (“drying alters the metabolite profile”)

* **Type:** PCA scores plot  
* **Axes:** X=PC1; Y=PC2 (explained variance text is present but too small to read precisely)  
* **Legend/categories:** No drying vs vacuum drying vs N₂ drying (color-coded)  
* **What it shows:** Separation of samples by prep condition, indicating systematic global changes due to drying.  
* **Extracted numbers:** Not stated on poster (variance % unreadable).  
* **Authors’ interpretation (if stated):** Drying alters the metabolite profile.  
* **Analyst plain-language interpretation (no speculation):** Drying conditions create distinct metabolomic signatures compared to no-dry controls, consistent with systematic bias.

#### P5.F3 — Panel b: Targeted pathway impact plots (“drying significantly impacts key metabolic pathways”)

* **Type:** Multi-panel pathway-related plots (small multiples)  
* **Axes:** Not fully readable; appears to compare metabolite/pathway levels across drying conditions and include pathway context (e.g., glycolysis/TCA-related schematic visible).  
* **Legend/categories:** No drying vs vacuum drying vs N₂ drying (implied)  
* **What it shows:** Specific metabolic pathways/metabolites are significantly impacted by drying (targeted confirmation).  
* **Extracted numbers:** Not stated on poster (no printed effect sizes visible in extracted text).  
* **Authors’ interpretation (if stated):** Drying significantly impacts key metabolic pathways.  
* **Analyst plain-language interpretation (no speculation):** The drying artifact is not random noise; it concentrates in biologically meaningful pathways, which could distort downstream biological conclusions.

#### P5.F4 — Panel c: Confusion matrix \+ accuracy (“AI predicts drying sensitivity with 87.5% accuracy”)

* **Type:** Confusion matrix heatmap  
* **Axes:** X=Predicted label; Y=True label  
* **Legend/categories:** Two-class classification (labels 0/1)  
* **What it shows:** Model classification outcomes and performance.  
* **Extracted numbers:** Test Accuracy 0.875; confusion matrix counts \[\[22, 1\], \[4, 13\]\].  
* **Authors’ interpretation (if stated):** AI model predicts metabolite drying sensitivity with 87.5% accuracy.  
* **Analyst plain-language interpretation (no speculation):** The model shows strong overall accuracy on the test set, with more correct than incorrect classifications in both classes.

#### P5.F5 — Feature-importance plot (“AI ranks the most important chemical properties predicting drying sensitivity”)

* **Type:** Feature-importance ranking (forest/bar-like plot)  
* **Axes:** Not fully readable; appears to display importance magnitude per descriptor.  
* **Legend/categories:** Chemical descriptors (examples visible: Molecular weight, TPSA, XlogP, water solubility)  
* **What it shows:** Which chemical properties are most predictive of drying sensitivity.  
* **Extracted numbers:** Not stated on poster.  
* **Authors’ interpretation (if stated):** AI ranks chemical properties predicting drying sensitivity.  
* **Analyst plain-language interpretation (no speculation):** The model is positioned as interpretable by tying drying vulnerability to chemical properties that plausibly relate to volatility, solubility, and reconstitution behavior.

### **P5.4 Tables (table-by-table)**

#### P5.T1 — Not stated on poster

* **Reproduced table (text form):** Not stated on poster  
* **What it implies:** Not applicable

---

## **P6. Discussion & implications**

* **Authors’ stated conclusions:** The framework uses AI to identify drying-sensitive metabolites and relate sensitivity to chemical features, informing more robust sample-prep design and improving throughput and reproducibility in metabolomics.  
    
* **Implications (poster-grounded):**  
    
  * Drying can introduce systematic, condition-dependent bias in metabolomics that may distort biological interpretations.  
  * An interpretable ML model can help anticipate which metabolites are at risk, allowing researchers to redesign prep steps (or interpret results cautiously) to improve analytical accuracy and reliability.


* **Mechanism/explanation (ONLY if stated):** Drying may selectively deplete metabolites and cause incomplete reconstitution; chemical features help explain vulnerability.  
    
* **Connections to prior work (ONLY if referenced):** Not stated on poster

---

## **P7. Limitations & assumptions**

* **Stated limitations:** Not stated on poster  
    
* **Analyst inferences (clearly labeled as inference):**  
    
  * *Inference:* The poster reports accuracy but does not specify the test-set construction (split strategy, external validation), so generalizability of the 0.875 accuracy to new labs/prep protocols is unclear.  
  * *Inference:* Untargeted sample size and targeted metabolite list are not stated; these are important for interpreting robustness and pathway claims.


* **Assumptions required for conclusions (if stated):** Not stated on poster

---

## **P8. What’s missing / clarification checklist (ask the presenter)**

- [ ] What exact definition/labeling rule did you use for “drying sensitivity” (binary threshold? continuous score?)?  
- [ ] What was the untargeted study sample size (replicates per condition) and were there batch controls?  
- [ ] Which metabolites/pathways were targeted in MRM, and what were the effect sizes (fold-changes) across drying conditions?  
- [ ] What ML algorithm was used (e.g., logistic regression, random forest, gradient boosting), and how was interpretability implemented?  
- [ ] How was the train/test split done (by sample, by metabolite, by batch) and was cross-validation used?  
- [ ] What is class balance for the drying-sensitivity labels (how many sensitive vs non-sensitive)?  
- [ ] Which chemical descriptors were most important (top 10\) and what mechanistic story do they support (solubility/volatility/etc.)?  
- [ ] How should labs change protocols based on this—avoid drying for certain analyte classes, change reconstitution solvent, or adjust storage strategy?

---

## **P9. Seed questions for the presenter (poster-specific)**

### **P9.1 Understanding (definitions & workflow) — 8 questions**

1. How do you operationally define “drying sensitivity” for a metabolite—what metric and threshold created the class labels?  
2. What were the exact drying parameters (time, temperature, vacuum settings, N₂ flow rate) and the reconstitution protocol?  
3. What LC–MS settings were used on the Orbitrap (ion mode, column, gradient), and how did you ensure comparability across conditions?  
4. Which metabolites were selected for MRM validation (n=4 indicates replicates; how many targets)?  
5. Which descriptors from Chemaxon were included, and did you add any experimentally derived features (retention time, ionization efficiency)?  
6. What was the rationale for choosing serum, and do you expect results to generalize to plasma/CSF/tissue extracts?  
7. How did you confirm that effects were due to drying rather than other prep steps (tube adsorption, oxidation, etc.)?  
8. What does the QR code link to (paper, code, dataset, protocol)?

### **P9.2 Results & interpretation — 8 questions**

1. In the PCA, which component separates no-drying from dried samples most strongly, and what metabolites load heavily on that component?  
2. Do vacuum drying and N₂ drying produce different bias patterns (direction or magnitude), or are they similar?  
3. Which metabolic pathways were most impacted in targeted validation (top 3), and what does that imply for biological studies focusing on those pathways?  
4. Your test accuracy is 0.875—what are precision/recall per class (sensitive vs non-sensitive) from the confusion matrix?  
5. What are the most important chemical properties (e.g., TPSA, XlogP, solubility) telling you mechanistically about why metabolites are lost or fail to reconstitute?  
6. Are there metabolite classes (lipids, amino acids, nucleotides) that are systematically more sensitive?  
7. How does using this model improve “analytical accuracy” in practice—do you adjust quantitation, flag features, or redesign prep?  
8. Did you observe any metabolites that appear *increased* after drying (concentration effect) versus those depleted (loss effect)?

### **P9.3 Robustness / validity — 6 questions**

1. Did you validate the model on an external dataset or across different instruments/labs?  
2. How stable are feature-importance rankings across resampling or cross-validation?  
3. How do you control for ion suppression/LC–MS drift that could mimic drying effects?  
4. Were QC samples used (pooled serum), and how did QC behave across conditions?  
5. Is the model predicting “drying sensitivity” independently of detectability (i.e., not just low-abundance metabolites)?  
6. How do you handle correlated descriptors (e.g., XlogP vs solubility) in interpretability?

### **P9.4 Implications / application — 6 questions**

1. For a typical metabolomics lab, what’s your recommended decision rule: when to avoid drying, when to use vacuum vs N₂, and how to reconstitute?  
2. Could this approach be built into routine pipelines to automatically flag at-risk metabolites during preprocessing?  
3. How might this change best practices for long-term storage vs immediate analysis?  
4. Does the framework suggest alternative concentration approaches that preserve sensitive metabolites?  
5. How do you foresee this affecting downstream biomarker discovery reliability?  
6. What throughput improvements are achieved—time saved, fewer reruns, fewer failed batches (any metrics)?

### **P9.5 Future work / collaboration — 5 questions**

1. Do you plan to extend beyond serum to other matrices or to multi-omics sample prep?  
2. Will you move from binary classification to predicting a continuous sensitivity score or expected loss fraction?  
3. Are you releasing a curated list of drying-sensitive metabolites and recommended protocol adjustments?  
4. Could you partner with other labs to benchmark drying effects across diverse protocols and solvents?  
5. What’s the next feature you’d add to increase accuracy beyond 0.875 (e.g., adding RT, pKa, volatility proxies)?

---

## **P10. Glossary**

* **Metabolomics:** Study of small molecules/metabolites in biological samples.  
* **Drying (sample prep):** Common step for storage/concentration that can deplete metabolites and cause incomplete reconstitution.  
* **Untargeted LC–MS (Orbitrap):** High-resolution mass spectrometry used to detect global metabolite changes.  
* **Targeted LC–MS/MS (Triple quadrupole, MRM):** Targeted validation method focusing on selected metabolites with high specificity.  
* **MRM:** Multiple Reaction Monitoring mode for targeted quantification on triple quadrupole instruments.  
* **PCA:** Principal component analysis; used to visualize global profile differences.  
* **Chemaxon descriptors:** Computed chemical properties used as model features.  
* **TPSA:** Topological polar surface area (a chemical descriptor).  
* **XlogP:** Predicted lipophilicity (a chemical descriptor).  
* **Test accuracy:** Fraction of correct predictions on a held-out test set (reported as 0.875).  
* **Confusion matrix:** Table of prediction counts by true vs predicted class.

---

## **P11. Answering Guide (likely attendee questions \+ grounded answers)**

1. **Q:** What problem does the poster address?  
     
   * **A (poster-grounded):** Drying during metabolomics sample prep can selectively deplete metabolites and cause incomplete reconstitution, introducing bias and compromising analytical accuracy.

   

2. **Q:** What samples and conditions were tested?  
     
   * **A:** Serum aliquots under no drying, vacuum drying, and N₂ drying.

   

3. **Q:** What analytical workflow was used?  
     
   * **A:** Untargeted high-resolution LC–MS (Orbitrap) to detect global changes, targeted LC–MS/MS (triple quadrupole, MRM; n=4) to validate key effects, and an interpretable ML model to identify chemical features and predict drying sensitivity.

   

4. **Q:** What did PCA show?  
     
   * **A:** Untargeted PCA shows drying alters the metabolite profile (conditions separate).

   

5. **Q:** Did targeted analysis confirm impacts?  
     
   * **A:** Yes—the poster states targeted analysis shows drying significantly impacts key metabolic pathways (MRM validation, n=4).

   

6. **Q:** How well does the AI model perform?  
     
   * **A:** The model predicts metabolite drying sensitivity with test accuracy 0.875 (87.5%), with confusion matrix counts \[\[22,1\],\[4,13\]\].

   

7. **Q:** What kinds of chemical properties matter?  
     
   * **A:** The feature panel indicates properties like molecular weight, TPSA, XlogP, and water solubility are used and ranked for importance.

   

8. **Q:** What tools/software were used?  
     
   * **A:** Python 3.12 for modeling/interpretation; Chemaxon for molecular descriptors; MetaboAnalyst 6.0 for statistics/visualization.

   

9. **Q:** What is the practical goal of the framework?  
     
   * **A:** To inform more robust sample-prep design and improve throughput and reproducibility by predicting which metabolites are most sensitive to drying.

   

10. **Q:** Who supported the work?  
      
* **A:** College of Health Solutions at ASU and NIH grants 2R01ES030197-06A1 and 1U01AG088557-01.

---

## **P12. JSON metadata (for indexing)**

{

  "poster\_id": "CHS-RD2026-Gu-H-AIAssistedMetabolomicsPrep",

  "title": "AI-Assisted Metabolomics Sample Preparation Enhances Analytical Accuracy and Result Reliability",

  "authors": \["Ximeng Liu", "Lingjun Li", "Shiquan Cui", "Michael Jang", "Haiwei Gu"\],

  "affiliations": \["Not stated on poster (ASU College of Health Solutions logo shown)"\],

  "keywords": \["metabolomics", "sample-prep", "drying", "orbitrap", "triple-quadrupole", "mrm", "pca", "machine-learning", "interpretable-ml", "chemical-descriptors", "chemaxon", "metaboanalyst", "reproducibility", "throughput"\],

  "domain\_area": \["metabolomics", "analytical chemistry", "bioinformatics/AI"\],

  "methods": \["serum sample preparation (no/vacuum/N2 drying)", "untargeted LC–MS (Orbitrap)", "targeted LC–MS/MS (triple quadrupole, MRM)", "PCA", "interpretable machine-learning with chemical descriptors"\],

  "population": "Serum aliquot samples analyzed under three preparation conditions",

  "timeframe": "Not stated on poster",

  "outcomes": \["global metabolite profile differences due to drying", "targeted pathway impacts", "ML-predicted drying sensitivity", "test accuracy and confusion matrix"\],

  "datasets\_tools": \["Orbitrap LC–MS", "triple quadrupole LC–MS/MS (MRM)", "Python 3.12", "Chemaxon molecular descriptors", "MetaboAnalyst 6.0"\],

  "key\_results": \[

    "Drying alters the metabolite profile (PCA separation across no drying, vacuum drying, N2 drying).",

    "Targeted LC–MS/MS validation (MRM; n=4) indicates drying significantly impacts key metabolic pathways.",

    "Interpretable ML ranks chemical properties predictive of drying sensitivity.",

    "Model test accuracy \= 0.875 (87.5%) with confusion matrix \[\[22,1\],\[4,13\]\].",

    "Tools used include Python 3.12, Chemaxon descriptors, and MetaboAnalyst 6.0."

  \],

  "figures\_count": 5,

  "tables\_count": 0,

  "confidence": "High"

}

---

## **P13. Extraction quality score (rubric)**

A. Completeness (30)

* Identification captured (0–10): **9/10** — Title/authors/presenter/funding captured; affiliations not explicitly written; QR destination not printed.  
* Study-at-a-glance complete (0–10): **9/10** — Conditions, instruments, and main outcomes captured; untargeted n not stated.  
* Methods specificity (0–10): **8/10** — Clear pipeline and tools; ML algorithm details and preprocessing not stated.

B. Results extraction fidelity (35)

* Numeric results captured (0–15): **15/15** — Captured n=4, accuracy 0.875, confusion matrix counts, software versions, grant IDs.  
* Figures interpreted (0–10): **9/10** — Workflow, PCA, targeted pathway panels, confusion matrix, and feature-importance interpreted; some small axis text not readable (variance %, pathway plot axes).  
* Tables reproduced (0–10): **10/10** — No tables present.

C. Groundedness / non-hallucination (15)

* No invented claims (0–10): **10/10**  
* Uncertainty labeling (0–5): **5/5**

D. Q\&A utility (15)

* Seed questions specificity (0–8): **8/8** — Questions target labeling, protocol parameters, pathway list, ML details, and translation to lab practice.  
* Clarification checklist quality (0–4): **4/4**  
* Answering guide usefulness (0–3): **3/3**

E. Structure & indexability (5)

* IDs and headings consistent (0–5): **5/5**  
    
* **Total score:** **93/100**

