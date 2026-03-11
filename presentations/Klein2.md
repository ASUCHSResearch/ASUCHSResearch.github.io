# **POSTER\_BRIEF — CHS-RD2026-Klein-Seetharaman-J-MetabolomicsFoldingCorrectionP23A**

## **0\. Document metadata**

* **PosterID:** CHS-RD2026-Klein-Seetharaman-J-MetabolomicsFoldingCorrectionP23A  
* **Source file:** Klein2.pdf  
* **Extraction date:** 2026-03-10  
* **Extractor model/version:** GPT-5.2 Thinking  
* **Confidence summary:** High  
* **Notes on legibility:** Clear

---

## **P1. Poster identification**

* **Title (exact):** METABOLOMICS EFFECTS OF FOLDING CORRECTION IN RETINITIS PIGMENTOSA RHODOPSIN MUTANT P23A  
* **Authors (exact):** Meghana Hosahalli Shivananda Murthy¹, Hannah Staggs⁴, Paniz Jasbi², Philip J. Reeves⁴, and Judith Klein-Seetharaman¹,²,³  
* **Affiliations (exact):** ¹School of Molecular Sciences, Arizona State University; ²Systems Precision Engineering and Advanced Research (SPEAR), Theriome Inc., Phoenix, USA; ³College of Health Solutions, Arizona State University; ⁴School of Life Sciences, University of Essex, Colchester, United Kingdom  
* **Event / venue:** Not stated on poster  
* **Date:** Not stated on poster  
* **Contact / QR / links:** Email: [Judith.Klein-Seetharaman@asu.edu](mailto:Judith.Klein-Seetharaman@asu.edu)

---

## **P2. 30-second summary**

This poster presents an untargeted **GC–MS metabolomics** study examining how **rhodopsin misfolding** in retinitis pigmentosa (RP)—specifically the **P23A** class II mutant—drives cellular metabolic dysregulation, and whether a **structural rescue** strategy (**P23A/N2C/D282C** disulfide bond) restores metabolism toward wild-type (WT). Using inducible HEK293S-GnTI⁻ TetR stable cell lines with controlled induction (tetracycline \+ sodium butyrate), the team verified rhodopsin expression via Western blot and profiled 126 polar metabolites. Results show strong global metabolic divergence in P23A (PERMANOVA R²≈0.94, p=0.001) with broad downregulation (99 metabolites down in P23A vs WT), while the rescued variant clusters near WT and partially restores metabolite levels and pathways (e.g., arginine/proline, glutathione, taurine metabolism, TCA intermediates).

---

## **P3. Study at a glance**

* **Objective(s):**  
    
  * Determine whether rhodopsin misfolding (P23A) drives metabolic dysregulation.  
  * Test whether structural correction (P23A/N2C/D282C) restores key metabolic pathways toward WT.


* **Research question(s):**  
    
  * How does misfolded P23A rhodopsin alter cellular metabolism compared to WT?  
  * Does folding correction (P23A/N2C/D282C) partially restore metabolic profiles and pathways?


* **Hypotheses:** Stated: rhodopsin misfolding (P23A) drives metabolic dysregulation, and structural rescue restores key metabolic pathways.  
    
* **Study type:** Experimental cell model \+ untargeted metabolomics \+ multivariate and pathway analysis.  
    
* **Setting/context:** RP is an inherited degenerative retinal disease; rhodopsin mutations are common autosomal dominant RP causes; metabolic dysfunction may contribute to RP progression.  
    
* **Population/sample:** Inducible stable HEK293S-GnTI⁻ TetR cell lines expressing WT rhodopsin, P23A rhodopsin, or structurally rescued P23A/N2C/D282C rhodopsin; empty vector controls included.  
    
* **Inclusion/exclusion (if stated):** Not stated on poster  
    
* **Sample size(s):**  
    
  * Three independent experiments (E1, E2, E3) reported for Western blot validation.  
  * Metabolomics sample size per group is not stated on poster.


* **Timeframe:** Induction for 24 hours; additional experimental timing not stated.  
    
* **Data sources:** Western blots (anti-1D4, anti-GAPDH); GC–MS metabolomics (Agilent 7820A GC–5977B MSD); metabolite library (126 metabolites); MetaboAnalyst 5.0 analysis outputs (PCA, PLS-DA, VIP, ANOVA, pathway enrichment); PERMANOVA on global composition.  
    
* **Groups/conditions/comparators:**  
    
  * Genotype: WT vs P23A vs P23A/N2C/D282C.  
  * Induction conditions: Tac/NaBu vs controls (Tac only, NaBu only, untreated); empty vector controls.  
  * Batch/experiment: E1, E2, E3.


* **Primary outcome(s):** Global metabolomic profiles and clustering; differential metabolite abundance (pairwise comparisons); pathway enrichment/impact.  
    
* **Secondary outcome(s):** Rhodopsin expression validation and folding phenotype (glycosylation patterns/instability) by Western blot.

---

## **P4. Methods (deep extraction)**

### **P4.1 Design & workflow**

1. Use inducible rhodopsin cell model: stable HEK293S-GnTI⁻ TetR cell lines expressing WT, P23A, or P23A/N2C/D282C rhodopsin.  
2. Induce expression with tetracycline (2 μg/mL) \+ sodium butyrate (5 mM) for 24 h; include empty vector and induction controls (untreated, Tac only, NaBu only) for baseline correction.  
3. Validate protein expression by SDS-PAGE/Western blot with RHO 1D4 antibody and GAPDH loading control; compare across three experiments (E1–E3).  
4. Extract polar metabolites from \~10⁶ cells, derivatize, and run untargeted GC–MS on Agilent 7820A GC–5977B MSD; identify metabolites using internal library of 126 metabolites.  
5. Process data in MetaboAnalyst 5.0: log-transform, normalize, batch-correct (ComBat); run PCA, PLS-DA, VIP scoring, ANOVA, and pathway enrichment/impact analysis; assess genotype effect with PERMANOVA.

### **P4.2 Measures & instruments**

* **Measure:** Rhodopsin expression and folding phenotype (Western blot)  
    
  * **What it measures:** Inducible expression specificity; banding pattern differences consistent with heterogeneous glycosylation vs instability/misfolding.  
  * **Scale/units:** Band intensity and pattern (qualitative \+ relative).  
  * **Thresholds/cutoffs:** Not stated.


* **Measure:** Metabolite abundances (GC–MS)  
    
  * **What it measures:** Relative abundance of polar metabolites (126 library).  
  * **Scale/units:** Not stated; relative abundance used in multivariate analyses.


* **Measure:** Global metabolic separation  
    
  * **What it measures:** PCA clustering, hierarchical clustering.  
  * **Scale/units:** PCA components; dendrogram structure.


* **Measure:** Differential abundance  
    
  * **What it measures:** Metabolites significantly up/down regulated in pairwise genotype comparisons (volcano plots).  
  * **Scale/units:** Not stated; “significantly up/downregulated” counts are reported.


* **Measure:** Pathway dysregulation  
    
  * **What it measures:** Pathway enrichment and impact scores for altered metabolites.  
  * **Scale/units:** MetaboAnalyst pathway enrichment/impact output (exact axes not stated).


* **Instruments/software:** Agilent 7820A GC–5977B MSD; MetaboAnalyst 5.0; ComBat batch correction; antibodies anti-1D4 and anti-GAPDH.

### **P4.3 Data processing**

* Data were log-transformed, normalized, and batch-corrected using ComBat (MetaboAnalyst 5.0).  
* Background and treatment-related metabolites were removed in a filtering step to isolate metabolites uniquely associated with P23A Tac/NaBu cells (six metabolites listed).  
* Additional preprocessing details (e.g., missingness thresholds, QC strategy) are Not stated on poster.

### **P4.4 Statistical analysis**

* **Tests/models used:** PCA, hierarchical clustering, PLS-DA, VIP scoring (VIP \> 1.2 threshold indicated), ANOVA, pathway enrichment/impact analysis, PERMANOVA.  
* **Model specification (if shown):** Not stated on poster (e.g., PLS-DA parameters, ANOVA factors).  
* **Covariates/adjustments:** Batch correction via ComBat; other covariates not stated.  
* **Multiple comparisons:** Not stated on poster  
* **Software/tools:** MetaboAnalyst 5.0.  
* **Missing data handling:** Not stated on poster  
* **Sensitivity/robustness checks:** Not stated on poster

---

## **P5. Results (exhaustive)**

### **P5.1 Key findings (bullet list)**

* RP affects \~**1 in 3,000** individuals worldwide; rhodopsin mutations are a common autosomal dominant cause.  
    
* Western blot confirms robust, specific induction of rhodopsin expression with Tac/NaBu:  
    
  * No rhodopsin band detected in untreated samples.  
  * WT and P23A/N2C/D282C show diffuse banding consistent with heterogeneous glycosylation of properly folded rhodopsin.  
  * P23A shows altered band intensities consistent with instability/misfolding.  
  * Empty vector controls show no signal; GAPDH confirms equal loading.  
  * Induction reproducible across three experiments (E1–E3).


* PCA/hierarchical clustering: P23A Tac/NaBu samples cluster distinctly from WT and rescued variant; P23A/N2C/D282C clusters close to WT, supporting partial restoration.  
    
* PERMANOVA: significant genotype effect on global metabolite composition (**R² ≈ 0.94, p \= 0.001**), with P23A showing strongest divergence.  
    
* Differential metabolites (volcano plot summaries):  
    
  * WT vs P23A: **99** metabolites significantly downregulated in P23A.  
  * P23A vs P23A/N2C/D282C: **68** metabolites significantly upregulated in P23A/N2C/D282C.  
  * P23A/N2C/D282C vs WT: **9** metabolites downregulated in P23A/N2C/D282C.


* After removing background/treatment-related metabolites, six metabolites uniquely associated with P23A Tac/NaBu remain: **adenosine, L-allothreonine, L-cystine, malonic acid, protocatechuic acid, 4-hydroxyproline**.  
    
* VIP/heatmap: P23A shows broad metabolic suppression; rescued variant is intermediate shifting toward WT. Key discriminators include **sarcosine, L-arginine, succinic acid, urocanic acid** (VIP score \> 1.2 used for top contributors).  
    
* Pathway enrichment: most affected pathways include **arginine biosynthesis**, **arginine and proline metabolism**, **taurine and hypotaurine metabolism**, **glutathione metabolism**; disruptions consistent with redox imbalance and mitochondrial stress.

### **P5.2 Numerical extraction table**

| ResultID | Metric/Variable | Group/Condition A | Group/Condition B | Effect/Diff | CI/SE | p-value | Source (figure/table/text) | Notes |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| R1 | RP prevalence | Global | — | \~1 in 3,000 | — | — | text | “RP affects \~1 in 3,000” |
| R2 | Structural rescue substitutions | P23A/N2C/D282C | P23A | N2C \+ D282C added | — | — | text | Forms stabilizing disulfide bridge |
| R3 | Expression induction: tetracycline | Induction | — | 2 μg/mL | — | — | text | For 24 h with NaBu |
| R4 | Expression induction: sodium butyrate | Induction | — | 5 mM | — | — | text | For 24 h with tetracycline |
| R5 | Induction duration | Induction | — | 24 h | — | — | text |  |
| R6 | Metabolite extraction input | Cells per sample | — | \~10^6 cells | — | — | text | Polar metabolites |
| R7 | Metabolite library size | Internal library | — | 126 metabolites | — | — | text | GC–MS identification |
| R8 | PERMANOVA genotype effect size | Genotype | — | R² ≈ 0.94 | — | p=0.001 | text | Global composition |
| R9 | Volcano: WT vs P23A downregulated count | P23A vs WT | — | 99 downregulated | — | — | text | “99 significantly downregulated metabolites in P23A” |
| R10 | Volcano: Rescue vs P23A upregulated count | P23A/N2C/D282C vs P23A | — | 68 upregulated | — | — | text | “68 significantly upregulated” |
| R11 | Volcano: Rescue vs WT downregulated count | P23A/N2C/D282C vs WT | — | 9 downregulated | — | — | text | “9 downregulated” |
| R12 | Unique metabolites after filtering | P23A Tac/NaBu | — | 6 metabolites | — | — | text | Listed in Results paragraph |
| R13 | VIP cutoff | VIP scoring | — | \> 1.2 | — | — | text | Top 25 contributors |
| R14 | Western blot experiments | E1, E2, E3 | — | 3 experiments | — | — | text | Reproducibility |
| R15 | Batch correction method | ComBat | — | Applied | — | — | text | MetaboAnalyst 5.0 |
| R16 | MetaboAnalyst version | MetaboAnalyst | — | 5.0 | — | — | text | Data processing & stats |
| R17 | Funding support | ASU startup funds | — | Supported | — | — | text | \+ Graduate Completion Fellowship |

### **P5.3 Figures (figure-by-figure)**

#### P5.F1 — Figure 1\. Structural representation of rhodopsin P23A mutation and N2C/D282C disulfide bond correction strategy

* **Type:** Structural schematic/illustration  
* **Axes:** Not applicable  
* **Legend/categories:** P23A mutation; engineered substitutions N2C and D282C highlighted (pink/yellow) forming disulfide bridge.  
* **What it shows:** Structural correction strategy intended to stabilize rhodopsin folding and counter misfolding from P23A mutation.  
* **Extracted numbers:** None beyond residue labels.  
* **Authors’ interpretation (if stated):** Disulfide bridge structurally corrects misfolding caused by P23 mutation.  
* **Analyst plain-language interpretation (no speculation):** Introduces a stabilizing intramolecular bond to increase folding stability in the mutant protein.

#### P5.F2 — Figure 2\. Experimental workflow for untargeted GC–MS metabolomics analysis

* **Type:** Workflow diagram  
* **Axes:** Not applicable  
* **Legend/categories:** Steps from inducible expression → validation → metabolite extraction → GC–MS → MetaboAnalyst pipeline.  
* **What it shows:** End-to-end design connecting folding state manipulation to metabolomic readouts.  
* **Extracted numbers:** Not stated on figure text (workflow-level).  
* **Authors’ interpretation (if stated):** Isolates folding-driven effects from chromophore binding (explicit statement under Conclusions).  
* **Analyst plain-language interpretation (no speculation):** The inducible system and controls aim to attribute metabolic changes specifically to folding status rather than induction artifacts.

#### P5.F3 — Figure 3\. Experimental design for evaluating metabolic effects (inducible, multi-control design)

* **Type:** Study design schematic  
* **Axes:** Not applicable  
* **Legend/categories:** Genotypes (WT, P23A, rescue), treatment conditions (Tac/NaBu, controls), empty vector.  
* **What it shows:** How controls isolate effects of induction and genotype.  
* **Extracted numbers:** Not applicable  
* **Authors’ interpretation (if stated):** Multi-control design isolates metabolic signatures driven by misfolding and its correction.  
* **Analyst plain-language interpretation (no speculation):** Helps separate genotype/folding effects from tetracycline/butyrate treatment effects.

#### P5.F4 — Figure 4\. Western blot analysis of rhodopsin across experimental groups (E1–E3)

* **Type:** Western blots with multiple lanes and conditions  
* **Axes:** Not applicable  
* **Legend/categories:** HEK293 empty vector; WT; P23A; P23A/N2C/D282C; induction conditions Tac/NaBu and controls; GAPDH loading control.  
* **What it shows:** Inducible expression specificity and differences in banding patterns indicating folding stability.  
* **Extracted numbers:** 3 experiments (E1–E3).  
* **Authors’ interpretation (if stated):** P23A misfolding reduces stable rhodopsin expression; structural correction restores expression comparable to WT.  
* **Analyst plain-language interpretation (no speculation):** Protein-level expression/folding differences are confirmed before metabolomics interpretation.

#### P5.F5 — Figure 5\. PCA and hierarchical clustering of metabolomic profiles

* **Type:** PCA plots \+ hierarchical clustering dendrogram/heat structure  
* **Axes:** PCA axes (PC1/PC2); exact variance explained not stated in the text excerpt.  
* **Legend/categories:** Experimental groups across batches E1–E3; focus on E1 & E2 shows P23A Tac/NaBu clustering distinctly.  
* **What it shows:** Clear separation of P23A from WT and rescue; rescue clustering close to WT.  
* **Extracted numbers:** PERMANOVA R²≈0.94, p=0.001 (reported in text tied to Figure 5).  
* **Authors’ interpretation (if stated):** Strong genotype effect; rescue partially restores metabolic profile toward WT.  
* **Analyst plain-language interpretation (no speculation):** Misfolding state is associated with a global metabolomic shift.

#### P5.F6 — Figure 6\. Volcano plots for pairwise metabolite differences

* **Type:** Volcano plots (three comparisons)  
* **Axes:** Not stated on poster text (volcano plots typically log2 fold-change vs \-log10 p-value; not explicitly stated here).  
* **Legend/categories:** I) WT vs P23A; II) P23A vs rescue; III) rescue vs WT.  
* **What it shows:** P23A associated with widespread metabolite downregulation; rescue shows upregulation relative to P23A and near-WT similarity.  
* **Extracted numbers:** 99 downregulated (P23A vs WT); 68 upregulated (rescue vs P23A); 9 downregulated (rescue vs WT).  
* **Authors’ interpretation (if stated):** Misfolding suppresses metabolism; structural rescue partially restores.  
* **Analyst plain-language interpretation (no speculation):** The rescue corrects many suppressed metabolite levels but not all.

#### P5.F7 — Figure 7\. Heatmap \+ VIP plot (top 25 metabolites; VIP \> 1.2)

* **Type:** Heatmap of relative metabolite abundance \+ VIP ranking plot  
* **Axes:** Heatmap (metabolites × samples); VIP plot (VIP score magnitude).  
* **Legend/categories:** WT, P23A, rescue across experiments.  
* **What it shows:** P23A broadly reduced metabolites; rescue intermediate; highlights key discriminators.  
* **Extracted numbers:** VIP threshold \> 1.2.  
* **Authors’ interpretation (if stated):** P23A induces metabolic suppression; rescue shifts toward WT.  
* **Analyst plain-language interpretation (no speculation):** A subset of metabolites contributes disproportionately to separating folding states.

#### P5.F8 — Figure 8\. Pathway enrichment / impact analysis

* **Type:** Pathway impact bubble plot (MetaboAnalyst-style)  
* **Axes:** Not stated on poster text; described as “pathway impact analysis.”  
* **Legend/categories:** Pathways with significant dysregulation; comparisons include P23A vs WT and P23A vs rescue.  
* **What it shows:** Key pathway perturbations associated with misfolding, with shifts toward recovery in rescue.  
* **Extracted numbers:** None beyond pathway names and qualitative “most affected.”  
* **Authors’ interpretation (if stated):** Misfolding disrupts arginine/proline, taurine/hypotaurine, glutathione metabolism; consistent with redox imbalance and mitochondrial stress.  
* **Analyst plain-language interpretation (no speculation):** The metabolic effects cluster in amino acid metabolism, antioxidant/redox systems, and mitochondrial intermediates.

### **P5.4 Tables (table-by-table)**

#### P5.T1 — Not stated on poster

* **Reproduced table (text form):** Not stated on poster  
* **What it implies:** Not applicable

---

## **P6. Discussion & implications**

* **Authors’ stated conclusions:** This is the first untargeted GC–MS metabolomics study examining metabolic consequences of rhodopsin misfolding using inducible WT, P23A, and P23A/N2C/D282C cell lines; structural rescue partially restores metabolic profiles toward WT, linking folding integrity to cellular metabolism. Misfolded P23A induces global metabolic suppression affecting amino acid metabolism, redox balance, and mitochondrial pathways.  
    
* **Implications (poster-grounded):**  
    
  * Protein folding defects in a key retinal GPCR can drive broad metabolic suppression, suggesting metabolism could be a therapeutic angle in RP.  
  * Structural stabilization strategies may have downstream metabolic benefits beyond protein-level folding restoration.


* **Mechanism/explanation (ONLY if stated):** Misfolding causes ER retention/aggregation and cellular stress; pathway results are described as consistent with redox imbalance and mitochondrial stress.  
    
* **Connections to prior work (ONLY if referenced):**  
    
  * Disease mechanisms/therapies: Zhen et al. 2023; Athanasiou et al. 2018\.  
  * Folding insights: Opefi et al. 2013; inducible expression system: Reeves et al. 2002\.

---

## **P7. Limitations & assumptions**

* **Stated limitations:** Not stated on poster  
    
* **Analyst inferences (clearly labeled as inference):**  
    
  * *Inference:* Metabolomics results are from a non-retinal cell line model, so translation to photoreceptor biology requires follow-up in retinal models (also aligned with the poster’s “future work” note).  
  * *Inference:* Counts of “significantly up/downregulated metabolites” are given, but statistical thresholds (FDR method, p-value cutoff) are not described on the poster.


* **Assumptions required for conclusions (if stated):** Not stated on poster

---

## **P8. What’s missing / clarification checklist (ask the presenter)**

- [ ] What were the sample sizes (biological replicates) per group for the GC–MS metabolomics, and how many batches were run?  
- [ ] What statistical thresholds define “significantly upregulated/downregulated” in Figure 6 (p cutoff, FDR correction)?  
- [ ] What are the fold-changes and p-values for the six “uniquely associated” P23A metabolites?  
- [ ] How were metabolites filtered as “background and treatment-related,” and what was removed?  
- [ ] Do the key pathway shifts correlate with measures of mitochondrial function (OCR/ATP) or oxidative stress markers?  
- [ ] Are the metabolite changes reversible with additional folding correctors or chromophore analogs?  
- [ ] How stable is the rescue effect across experiments E1–E3 (effect size consistency)?  
- [ ] How will you extend this to retinal cells or in vivo RP models (as stated in future work)?

---

## **P9. Seed questions for the presenter (poster-specific)**

### **P9.1 Understanding (definitions & workflow) — 8 questions**

1. What criteria did you use to label metabolites as significantly changed in the volcano plots (p-value, FDR, fold-change thresholds)?  
2. How many biological replicates per condition were included in each experiment (E1–E3) for metabolomics?  
3. Why did you choose HEK293S-GnTI⁻ TetR cells, and how might glycosylation differences affect rhodopsin folding/metabolism?  
4. How did you ensure that tetracycline/sodium butyrate induction didn’t itself drive metabolomic shifts (beyond empty vector controls)?  
5. What does “isolates folding-driven effects from chromophore binding” mean operationally—were chromophores excluded entirely?  
6. Can you explain the logic of the N2C/D282C disulfide bond—why those positions, and how does it stabilize folding?  
7. How were the 126 metabolites selected for the internal library (coverage of pathways, derivatization limits)?  
8. What were the main QC steps in GC–MS (internal standards, retention index alignment, batch QC pools)?

### **P9.2 Results & interpretation — 8 questions**

1. PERMANOVA shows R²≈0.94 (p=0.001). Which factors contribute most—genotype vs experiment/batch vs induction?  
2. In WT vs P23A, 99 metabolites are downregulated—does this suggest decreased metabolic activity, altered extraction, or cell viability differences?  
3. The rescue has 68 metabolites upregulated relative to P23A—how close does that bring the profile to WT quantitatively (e.g., distance metrics)?  
4. Of the six “unique P23A-associated” metabolites (adenosine, etc.), which are most biologically interpretable for ER stress or mitochondrial dysfunction?  
5. VIP highlighted sarcosine, L-arginine, succinic acid, urocanic acid—how do these map onto the pathway impacts (arginine/proline, TCA, redox)?  
6. What do you make of the 9 metabolites still downregulated in rescue vs WT—do they indicate incomplete folding rescue or downstream irreversibility?  
7. Did you observe any metabolite increases in P23A (compensatory responses), or is suppression dominant?  
8. How do the Western blot folding signatures align with metabolomics separation (e.g., does more WT-like banding correlate with more WT-like metabolome)?

### **P9.3 Robustness / validity — 6 questions**

1. Did you validate PLS-DA separation with permutation testing or cross-validation to avoid overfitting?  
2. How stable are VIP rankings across batches/experiments (E1–E3)?  
3. Were cell counts/viability measured at harvest to rule out metabolite suppression due to fewer viable cells?  
4. How sensitive are results to ComBat batch correction settings?  
5. Did you include technical replicates (same extract injected multiple times), and how was instrument drift handled?  
6. Do conclusions change if you restrict to metabolites detected consistently across all experiments?

### **P9.4 Implications / application — 6 questions**

1. What therapeutic strategies do these metabolomics findings suggest (e.g., redox support, mitochondrial support) for RP progression?  
2. Could metabolic interventions complement folding-correction strategies (e.g., small molecules \+ metabolic support)?  
3. Which pathways would you prioritize for follow-up validation (glutathione vs arginine/proline vs taurine vs TCA) and why?  
4. How might these cellular metabolic changes influence photoreceptor survival in retinal tissue?  
5. Could metabolomic signatures serve as biomarkers for successful folding correction in preclinical models?  
6. What would be the translational step from this cell model to patient-relevant systems?

### **P9.5 Future work / collaboration — 5 questions**

1. What are your top target metabolites for validation, and what targeted assays (LC–MS/MS) will you use?  
2. How will you perform metabolic flux and mitochondrial assays (as stated) and which readouts are most important?  
3. Are you planning to test other class II rhodopsin mutants (e.g., P23H) in the same framework?  
4. Which retinal models (cell-derived organoids, retinal explants, animal models) are you planning to use next?  
5. Are you looking for collaborators to test metabolic therapeutic interventions in RP models?

---

## **P10. Glossary**

* **RP:** Retinitis pigmentosa, inherited retinal degenerative disease causing progressive photoreceptor loss.  
* **Rhodopsin:** Light-sensitive GPCR essential for phototransduction in rod photoreceptors.  
* **P23A:** Class II rhodopsin mutation associated with misfolding and instability.  
* **N2C/D282C:** Engineered substitutions forming a stabilizing disulfide bridge to correct P23A misfolding.  
* **HEK293S-GnTI⁻ TetR:** Inducible mammalian cell line platform used to express rhodopsin variants.  
* **Tac/NaBu:** Tetracycline \+ sodium butyrate induction cocktail (2 μg/mL \+ 5 mM).  
* **GC–MS:** Gas chromatography–mass spectrometry used for untargeted metabolomics of polar metabolites.  
* **MetaboAnalyst:** Web platform used for metabolomics data processing and statistics (v5.0 reported).  
* **ComBat:** Batch correction method used to adjust for experiment/batch effects.  
* **PCA:** Unsupervised dimensionality reduction showing group separation.  
* **PLS-DA:** Supervised multivariate classification method used to separate groups.  
* **VIP:** Variable importance in projection; VIP \> 1.2 used to highlight top metabolites contributing to separation.  
* **PERMANOVA:** Permutational multivariate analysis of variance; here reports genotype effect R²≈0.94, p=0.001.

---

## **P11. Answering Guide (likely attendee questions \+ grounded answers)**

1. **Q:** What is the main goal of this study?  
     
   * **A (poster-grounded):** To link rhodopsin folding integrity (WT vs misfolded P23A vs structurally rescued P23A/N2C/D282C) to cellular metabolism using untargeted GC–MS metabolomics.

   

2. **Q:** What model system did you use?  
     
   * **A:** Inducible stable HEK293S-GnTI⁻ TetR cell lines expressing WT, P23A, or P23A/N2C/D282C rhodopsin, plus empty vector controls.

   

3. **Q:** How was expression induced?  
     
   * **A:** Tetracycline 2 μg/mL and sodium butyrate 5 mM for 24 hours.

   

4. **Q:** How do you know induction worked?  
     
   * **A:** Western blots show rhodopsin only in induced samples; empty vector shows no signal; GAPDH confirms equal loading; results consistent across three experiments (E1–E3).

   

5. **Q:** What did metabolomics show globally?  
     
   * **A:** PCA shows P23A metabolome separates clearly from WT and rescue; rescue clusters close to WT, suggesting partial restoration.

   

6. **Q:** How strong is the genotype effect?  
     
   * **A:** PERMANOVA shows significant genotype effect with R²≈0.94 and p=0.001.

   

7. **Q:** Were metabolites mostly up or down in P23A?  
     
   * **A:** Mostly down: WT vs P23A comparison reports 99 metabolites significantly downregulated in P23A.

   

8. **Q:** Which pathways are most affected?  
     
   * **A:** Arginine biosynthesis, arginine/proline metabolism, taurine/hypotaurine metabolism, and glutathione metabolism; consistent with redox imbalance and mitochondrial stress.

   

9. **Q:** What are some metabolites highlighted as key discriminators?  
     
   * **A:** Sarcosine, L-arginine, succinic acid, and urocanic acid (VIP analysis).

   

10. **Q:** How can I contact the corresponding author?  
      
* **A:** [Judith.Klein-Seetharaman@asu.edu](mailto:Judith.Klein-Seetharaman@asu.edu)

---

## **P12. JSON metadata (for indexing)**

{

  "poster\_id": "CHS-RD2026-Klein-Seetharaman-J-MetabolomicsFoldingCorrectionP23A",

  "title": "METABOLOMICS EFFECTS OF FOLDING CORRECTION IN RETINITIS PIGMENTOSA RHODOPSIN MUTANT P23A",

  "authors": \[

    "Meghana Hosahalli Shivananda Murthy",

    "Hannah Staggs",

    "Paniz Jasbi",

    "Philip J. Reeves",

    "Judith Klein-Seetharaman"

  \],

  "affiliations": \[

    "School of Molecular Sciences, Arizona State University",

    "Systems Precision Engineering and Advanced Research (SPEAR), Theriome Inc., Phoenix, USA",

    "College of Health Solutions, Arizona State University",

    "School of Life Sciences, University of Essex, Colchester, United Kingdom"

  \],

  "keywords": \[

    "retinitis-pigmentosa",

    "rhodopsin",

    "P23A",

    "protein-misfolding",

    "folding-correction",

    "N2C-D282C",

    "GC-MS",

    "untargeted-metabolomics",

    "MetaboAnalyst",

    "ComBat",

    "PCA",

    "PLS-DA",

    "VIP",

    "PERMANOVA",

    "redox",

    "mitochondrial-stress"

  \],

  "domain\_area": \["metabolomics", "protein folding disease mechanisms", "retinal degeneration"\],

  "methods": \[

    "inducible rhodopsin expression (tetracycline \+ sodium butyrate)",

    "Western blot validation (RHO 1D4; GAPDH)",

    "polar metabolite extraction from \~10^6 cells",

    "untargeted GC–MS (Agilent 7820A GC–5977B MSD)",

    "MetaboAnalyst 5.0 processing (log transform, normalization, ComBat batch correction)",

    "PCA, hierarchical clustering, PLS-DA, VIP scoring (VIP\>1.2), ANOVA, pathway enrichment/impact",

    "PERMANOVA"

  \],

  "population": "Inducible HEK293S-GnTI⁻ TetR stable cell lines expressing WT, P23A, or P23A/N2C/D282C rhodopsin (plus empty vector controls)",

  "timeframe": "24 h induction (tetracycline 2 μg/mL \+ sodium butyrate 5 mM)",

  "outcomes": \[

    "global metabolomic clustering differences by genotype/folding state",

    "counts of significantly up/downregulated metabolites in pairwise comparisons",

    "pathway enrichment/impact (arginine/proline, taurine, glutathione, TCA-related)",

    "protein expression/folding phenotype by Western blot"

  \],

  "datasets\_tools": \["MetaboAnalyst 5.0", "ComBat batch correction", "Agilent 7820A GC–5977B MSD", "126-metabolite internal library"\],

  "key\_results": \[

    "PERMANOVA showed significant genotype effect on global metabolite composition (R²≈0.94, p=0.001), with P23A most divergent.",

    "WT vs P23A comparison reported 99 significantly downregulated metabolites in P23A.",

    "P23A vs P23A/N2C/D282C reported 68 significantly upregulated metabolites in the rescue condition.",

    "P23A/N2C/D282C vs WT reported 9 downregulated metabolites in the rescue condition.",

    "Pathway enrichment highlighted arginine biosynthesis, arginine/proline, taurine/hypotaurine, and glutathione metabolism disruptions consistent with redox imbalance and mitochondrial stress."

  \],

  "figures\_count": 8,

  "tables\_count": 0,

  "confidence": "High"

}

---

## **P13. Extraction quality score (rubric)**

A. Completeness (30)

Identification captured (0–10): **10/10** — Title, full author list, affiliations, funding note, and contact email are present.

Study-at-a-glance complete (0–10): **9/10** — Model system, intervention/conditions, core outcomes, and key claims are clear; metabolomics replicate n not stated.

Methods specificity (0–10): **10/10** — Induction concentrations, timing, GC–MS instrument, metabolite library size, and processing steps (log/normalize/ComBat; specific analyses) are provided.

B. Results extraction fidelity (35)

Numeric results captured (0–15): **15/15** — Captured all explicit numeric claims (prevalence, induction doses, library size, PERMANOVA stats, counts of changed metabolites, VIP threshold, experiment count).

Figures interpreted (0–10): **9/10** — Interpreted all figures described in text; cannot extract exact axis values/variance explained from PCA because not printed in the parsed text.

Tables reproduced (0–10): **10/10** — No tables present.

C. Groundedness / non-hallucination (15)

No invented claims (0–10): **10/10**

Uncertainty labeling (0–5): **5/5**

D. Q\&A utility (15)

Seed questions specificity (0–8): **8/8**

Clarification checklist quality (0–4): **4/4**

Answering guide usefulness (0–3): **3/3**

E. Structure & indexability (5)

IDs and headings consistent (0–5): **5/5**

Total score: **96/100**

## **FINAL CHECKS (MANDATORY BEFORE YOU RESPOND)**

Did you capture all visible text and all numbers? **Yes (from the poster text provided).**

Did every numeric claim get a ResultID and appear in P5.2? **Yes.**

Did you interpret every figure/table? **Yes (8 figures; no tables).**

Did you avoid speculation and label uncertainty? **Yes.**

Did you keep the template structure exactly? **Yes.**  
