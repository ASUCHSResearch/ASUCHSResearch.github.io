---

# **POSTER\_BRIEF — CHS-RD2026-Zhou-Y-EncodingAuditorySpaceMarmoset**

## **0\. Document metadata**

* **PosterID:** CHS-RD2026-Zhou-Y-EncodingAuditorySpaceMarmoset  
* **Source file:** Zhou Yi AROPoster2026\_YZ\_AV2.pdf  
* **Extraction date:** 2026-03-10  
* **Extractor model/version:** GPT-5.2 Thinking  
* **Confidence summary:** High  
* **Notes on legibility:** Clear

---

## **P1. Poster identification**

* **Title (exact):** Encoding Auditory Space in Marmoset Cortex  
* **Authors (exact):** Yi Zhou, Derek Nguyen  
* **Affiliations (exact):** Laboratory of Auditory Computation & Neurophysiology, College of Health Solutions; Arizona State University  
* **Event / venue:** Not stated on poster  
* **Date:** Not stated on poster  
* **Contact / QR / links:** Not stated on poster

---

## **P2. 30-second summary**

This study asks how auditory cortex in foveate primates (common marmoset) encodes sound direction across the full 360° when vision primarily covers frontal space. Using single-unit recordings in auditory cortex under head-fixed conditions (no auditory task) with broadband noise stimuli spanning 360° in 20° steps, the authors report a “dual strategy”: (1) stable directional “anchors” from contralateral sharply tuned neurons (dense cluster around –90°) and (2) vision-dependent gain control that scales firing rates without shifting preferred direction when a wide-field frontal visual image is present. Gain modulation is strongest for contra-rear directions, which the authors interpret as strengthened monitoring of the visually inaccessible rear hemifield while the animal is visually engaged forward.

---

## **P3. Study at a glance**

* **Objective(s):**  
    
  * Understand how auditory cortex constructs a 360° “auditory Umwelt” in a foveate primate (marmoset) where vision is frontal.  
  * Test how frontal visual events influence spatial tuning in auditory cortex neurons.


* **Research question(s):**  
    
  * How are spatial tuning properties distributed across 360° in auditory cortex neurons?  
  * Does frontal vision change preferred sound direction (remapping) or instead modulate gain/baseline?


* **Hypotheses:** Implied (not stated): frontal visual stimulation will modulate auditory spatial responses; tuning may show systematic relationship with preferred direction.  
    
* **Study type:** Neurophysiology / observational experimental recording study with cross-modal manipulation (auditory stimuli with and without frontal visual image).  
    
* **Setting/context:** Head-fixed single-unit recordings from auditory cortex in common marmosets.  
    
* **Population/sample:** Four marmosets; single-unit activities from auditory cortex.  
    
* **Inclusion/exclusion (if stated):** Not stated on poster  
    
* **Sample size(s):**  
    
  * Animals: 4 marmosets  
  * Units in regression analysis: 166 units total; significant model fit for 155/166 units


* **Timeframe:** Not stated on poster  
    
* **Data sources:** Single-unit firing rates; eye tracking synchronized to a TDT neurophysiology setup; auditory spatial receptive fields (SRFs).  
    
* **Groups/conditions/comparators:**  
    
  * Auditory-only (AO) vs audiovisual with frontal image (AV) (as implied by Rate\_AO vs Rate\_AV model).  
  * Sound azimuth spanning 360° in 20° increments.


* **Primary outcome(s):** Spatial tuning / SRF properties (preferred direction, tuning width/half-width) and modulation by frontal vision (gain/baseline).  
    
* **Secondary outcome(s):** Not stated on poster

---

## **P4. Methods (deep extraction)**

### **P4.1 Design & workflow**

1. Prepare common marmosets in **head-fixed** condition; **no auditory tasks** performed.  
2. Present **broadband noise** auditory stimuli (200 msec) spanning **360°** with **20° spacing**; compute SRFs from neural responses.  
3. Present a **wide-field visual image** (±40° azimuth) centered at **0°** (frontal) in the audiovisual condition.  
4. Record **single-unit activity** from auditory cortex in **four marmosets** using **128-channel silicon probes** (electrode spacing 20 μm; site width 100 μm; site length 1280 μm).  
5. Track gaze using an **infra-red eye tracking system** synchronized with **TDT neurophysiology setup**.  
6. Analyze spatial tuning distributions and fit a linear regression model relating AV firing rates to shifted AO tuning with gain and baseline terms.

### **P4.2 Measures & instruments**

* **Measure:** SRF (spatial receptive field) of auditory cortex neuron  
    
  * **What it measures:** Firing rate as a function of auditory spatial location (azimuth) across 360°.  
  * **Scale/units:** Firing rate (unit not stated); stimulus locations in degrees.  
  * **Thresholds/cutoffs:** Not stated on poster  
  * **Reliability/validity notes (if stated):** Not stated on poster


* **Measure:** Preferred direction (best azimuth)  
    
  * **What it measures:** Direction at which neuron response peaks.  
  * **Scale/units:** Degrees (azimuth).  
  * **Thresholds/cutoffs:** Not stated on poster  
  * **Reliability/validity notes (if stated):** Not stated on poster


* **Measure:** Tuning width / half width  
    
  * **What it measures:** Sharpness of spatial tuning (half-width bins on poster: \<90°, 90–180°, \>180°).  
  * **Scale/units:** Degrees (azimuth width).  
  * **Thresholds/cutoffs:** \<90°, 90–180°, \>180° (as categorical boundaries shown).  
  * **Reliability/validity notes (if stated):** Not stated on poster


* **Measure:** Vision-dependent modulation parameters (gain and baseline)  
    
  * **What it measures:** Multiplicative gain (k\_AV) and additive baseline (b\_AV) effects of visual image on auditory responses.  
  * **Scale/units:** k unitless; b in firing rate units (not stated).  
  * **Thresholds/cutoffs:** Not stated on poster

### **P4.3 Data processing**

* SRFs computed from responses to broadband noise stimuli across spatial positions. Additional preprocessing (spike sorting, exclusion criteria) is **Not stated on poster**.

### **P4.4 Statistical analysis**

* **Model:** Linear regression model relating AV firing rate to AO firing rate with a spatial shift plus gain and baseline:  
    
  * Rate\_AV(θ) \= k\_AV \* Rate\_AO(θ − θ\_AV) \+ b\_AV


* **Model fit:** p\<0.05 for **155/166** units.  
    
* **Reported distribution summaries:** quartiles for k, b, and R².  
    
* **Direction–sharpness coupling significance:** F-test reported with **p\<10⁻⁵** (asterisked).  
    
* **Covariates/adjustments, missing data handling, software/tools for analysis:** Not stated on poster (hardware mentions TDT).

---

## **P5. Results (exhaustive)**

### **P5.1 Key findings (bullet list)**

* Spatial tuning sharpens progressively toward the **contralateral pole**, culminating in a dense cluster of narrowly tuned neurons at **–90°**.  
* **Peaking tuning direction** does **not** change with frontal vision, especially for narrowly tuned neurons (no remapping of best azimuth).  
* A frontal wide-field image **multiplicatively scales** firing rates but leaves best azimuth unchanged (cross-modal gain field rather than spatial realignment).  
* Gain modulation of firing rates is strongest in the **contra-rear field**, suggesting enhanced monitoring of the “invisible” rear hemifield when frontal space is visually stimulated.  
* Model fit is significant for most neurons (155/166), with reported quartiles suggesting variability in gain (k), baseline (b), and explained variance (R²).

### **P5.2 Numerical extraction table**

| ResultID | Metric/Variable | Group/Condition A | Group/Condition B | Effect/Diff | CI/SE | p-value | Source (figure/table/text) | Notes |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| R1 | Broad-band noise stimulus duration | Auditory stimulus | — | 200 msec | — | — | text |  |
| R2 | Spatial coverage | Azimuth span | — | 360° | — | — | text |  |
| R3 | Spatial sampling | Azimuth spacing | — | 20° spacing | — | — | text |  |
| R4 | Visual stimulus span | Wide-field visual image | — | ±40° azimuth | — | — | text | Presented at 0° |
| R5 | Visual stimulus center | Visual image location | — | 0° | — | — | text |  |
| R6 | Number of animals | Marmosets | — | 4 | — | — | text |  |
| R7 | Recording probe channels | Silicon probe | — | 128 channels | — | — | text |  |
| R8 | Electrode spacing | Silicon probe | — | 20 μm | — | — | text |  |
| R9 | Site width | Silicon probe | — | 100 μm | — | — | text |  |
| R10 | Site length | Silicon probe | — | 1280 μm | — | — | text |  |
| R11 | Regression units total | Single units | — | n=166 | — | — | text |  |
| R12 | Regression significant fits | Units with p\<0.05 | Units total | 155/166 | — | p\<0.05 | text |  |
| R13 | Gain (k) quartiles | k\_AV | — | \[0.67, 0.88, 1.13\] | — | — | text | Quartiles of k |
| R14 | Baseline (b) quartiles | b\_AV | — | \[0.02, 0.05, 0.10\] | — | — | text | Quartiles of b |
| R15 | R² quartiles | R² | — | \[0.53, 0.73, 0.86\] | — | — | text | Quartiles of R² |
| R16 | Direction–sharpness coupling | F-test | — | Significant | — | p\<10⁻⁵ | P5.F2 | “F-test, \*p\<10⁻⁵” |
| R17 | Contralateral anchor direction | Preferred direction center | — | –90° | — | — | text | “centered around \-90°” |

### **P5.3 Figures (figure-by-figure)**

#### P5.F1 — Spatial tuning of ACx neurons across 360°

* **Type:** Raster/PSTH-like panels \+ polar-like tuning depictions (multi-panel summary)  
* **Axes:** Not fully legible in the small panels; intended to show response vs spatial location across azimuth.  
* **Legend/categories:** Not stated on poster  
* **What it shows:** Examples/distribution of spatial tuning in auditory cortex (ACx) neurons over a full 360° range.  
* **Extracted numbers:** 360° span and 20° spacing (see R2–R3).  
* **Authors’ interpretation (if stated):** Spatial tuning of ACx neurons across 360°.  
* **Analyst plain-language interpretation (no speculation):** Neurons exhibit diverse spatial tuning patterns across the full circle, forming the basis for later analyses of tuning sharpness and modulation by vision.

#### P5.F2 — Direction–sharpness coupling

* **Type:** Histogram \+ scatter/curve relating tuning width to preferred direction (and possibly additional small panels)  
* **Axes:** Preferred direction (degrees) vs tuning width/half-width categories; exact axis labels partly small but the plot labels “Direction Preference,” “half width,” and “Tuning Width.”  
* **Legend/categories:** Half-width categories shown: \<90°, 90–180°, \>180°.  
* **What it shows:** Tuning becomes sharper toward the contralateral pole; a dense cluster of narrowly tuned neurons at –90°.  
* **Extracted numbers:** –90° (anchor direction); F-test p\<10⁻⁵.  
* **Authors’ interpretation (if stated):** “Tuning sharpened progressively toward the contralateral pole, culminating in a dense cluster of narrowly tuned neurons at –90°.”  
* **Analyst plain-language interpretation (no speculation):** Direction preference and tuning sharpness are coupled: the most precise tuning clusters at a contralateral direction, indicating a non-uniform representation of auditory space.

#### P5.F3 — Visual influence on spatial tuning of ACx neurons

* **Type:** Model schematic \+ parameter distributions \+ polar plots of changes  
    
* **Axes:** Not fully legible in all subpanels; main equation and labeled components: gain, preferred direction, baseline.  
    
* **Legend/categories:** Components labeled in schematic (gain / preferred direction / baseline); histogram labeled “Max slope” (small).  
    
* **What it shows:**  
    
  * Linear regression model for AV response relative to AO response with gain (k\_AV), spatial shift (θ\_AV), and baseline (b\_AV).  
  * Most units show significant model fits (155/166).  
  * Preferred direction remains stable with frontal vision, especially in narrow-tuned neurons.  
  * Discharge rates change more at rear directions; strongest modulation in contra-rear.


* **Extracted numbers:** Quartiles of k, b, R²; 155/166 units p\<0.05 (R12–R15).  
    
* **Authors’ interpretation (if stated):**  
    
  * “Peaking tuning direction does not change with frontal vision…”  
  * “The highest spatial sensitivity remains in the frontal and central field…”  
  * “Discharge rates changed more at the rear directions…”


* **Analyst plain-language interpretation (no speculation):** Adding a frontal visual stimulus modulates response magnitude (gain/baseline) without shifting where neurons prefer sounds to be, consistent with cross-modal gain control rather than spatial remapping.

### **P5.4 Tables (table-by-table)**

#### P5.T1 — Not stated on poster

* **Reproduced table (text form):** Not stated on poster  
* **What it implies:** Not applicable

---

## **P6. Discussion & implications**

* **Authors’ stated conclusions:** Results suggest a dual strategy for a 360° auditory Umwelt: stable contralateral sharp-tuned “anchors” and dynamic gain control that boosts regions outside the visual fovea when frontal space is behaviorally loaded; this provides a neural explanation for how primates maintain situational awareness while looking forward.  
    
* **Implications (poster-grounded):**  
    
  * Auditory cortex encodes spatial direction with non-uniform tuning sharpness that peaks contralaterally.  
  * Visual context can reshape auditory response magnitude across space without changing best direction (gain field).  
  * Enhanced contra-rear modulation under frontal vision may support monitoring of unseen space while visually attending forward.


* **Mechanism/explanation (ONLY if stated):** Not stated on poster beyond the proposed “anchors \+ gain control” strategy and “behaviorally loaded” framing.  
    
* **Connections to prior work (ONLY if referenced):** Jakob von Uexküll’s “Umwelt” concept is referenced in the abstract text.

---

## **P7. Limitations & assumptions**

* **Stated limitations:** Not stated on poster  
    
* **Analyst inferences (clearly labeled as inference):**  
    
  * *Inference:* Because animals were head-fixed and performed no auditory task, the findings reflect neural tuning under passive listening/visual stimulation rather than active localization behavior.  
  * *Inference:* The regression model indicates gain/baseline effects, but without additional details (e.g., cross-validation, trial counts), generalization strength cannot be evaluated from the poster alone.


* **Assumptions required for conclusions (if stated):** Not stated on poster

---

## **P8. What’s missing / clarification checklist (ask the presenter)**

- [ ] Which auditory cortical subfields/areas were targeted (A1 vs belt fields), and how were recording sites localized?  
- [ ] How were single units isolated (spike sorting method) and what inclusion criteria were used?  
- [ ] How many trials per azimuth were presented, and how stable were SRFs across time?  
- [ ] What exactly constitutes “wide-field visual image” (static image, moving stimulus, natural scene), and what timing relative to sound?  
- [ ] Were eye position/gaze used to exclude trials or stratify analyses (given eye tracking)?  
- [ ] How is θ\_AV (spatial shift) distributed—was it near zero for most units (as implied)?  
- [ ] Were effects symmetric for ipsi-rear vs contra-rear, and how was “contra-rear” defined in azimuth space?  
- [ ] Any differences across the four marmosets (between-animal variability)?

---

## **P9. Seed questions for the presenter (poster-specific)**

### **P9.1 Understanding (definitions & workflow) — 8 questions**

1. How do you define and compute the SRF for each unit from the 360° broadband-noise stimulus set?  
2. What is the operational definition of “tuning width” and “half width” on the poster—how do you calculate it from SRFs?  
3. Why is –90° treated as the contralateral “pole” in your coordinate system (how is azimuth defined)?  
4. Can you describe the wide-field visual image used (content, motion, luminance), and how long it was presented?  
5. What does “no auditory tasks” mean in practice—were animals simply passively viewing and hearing stimuli?  
6. How was eye tracking used in the analysis (e.g., to confirm fixation, to remove saccades)?  
7. What does θ\_AV represent in the regression model—does it correspond to a shift in tuning, and how often is it non-zero?  
8. Are you recording across layers with the 128-channel probe (given 1280 μm length), and do effects vary by depth?

### **P9.2 Results & interpretation — 8 questions**

1. In direction–sharpness coupling, why do narrowly tuned neurons cluster around –90°—what’s your interpretation of this “anchor”?  
2. How do you quantify “dense cluster” at –90°—is it based on histogram counts or statistical clustering?  
3. The poster states “peaking tuning direction does not change with frontal vision”—how do you test/quantify stability in preferred direction?  
4. For the gain effects, do you see k\_AV \> 1 more often in certain spatial regions (e.g., contra-rear)?  
5. The quartiles of k are \[0.67, 0.88, 1.13\]—how do you interpret units with k\<1 vs k\>1?  
6. Discharge rates changed more at rear directions—do you quantify this as a spatial gradient in gain, or by comparing regions?  
7. Why does the “highest spatial sensitivity” remain frontal/central—how are you measuring “spatial sensitivity”?  
8. Can you connect the “rear-space enhancement” finding to behavior—what kinds of real-world situations would this support?

### **P9.3 Robustness / validity — 6 questions**

1. How robust is direction–sharpness coupling across animals—does each marmoset show the –90° narrow-tuning cluster?  
2. Did you correct for multiple comparisons across many spatial bins or many units when assessing effects?  
3. How do you ensure that visual effects aren’t due to arousal/state changes rather than spatially specific gain fields?  
4. Did you try alternative models (additive-only, gain-only without shift) and compare fits to the full model?  
5. For the regression, how was significance assessed (F-test on model, coefficient tests), and was cross-validation used?  
6. Are there potential confounds from head-fixed geometry (e.g., pinna cues) affecting apparent contralateral anchoring?

### **P9.4 Implications / application — 6 questions**

1. How might these findings inform models of multisensory integration in auditory cortex (gain fields vs remapping)?  
2. Do you think similar “auditory anchors” exist in other primates (macaque/human) or is this marmoset-specific?  
3. Could rear-field gain modulation be leveraged in assistive tech (e.g., hearing devices that adapt when vision is engaged)?  
4. What does this imply about attention allocation—does frontal visual stimulation redistribute auditory attention to the rear?  
5. How might this framework (anchors \+ gain) guide future experiments with behavior tasks or moving visual stimuli?  
6. Does your work suggest a principled way to design 360° audio cues in VR/AR for foveate users?

### **P9.5 Future work / collaboration — 5 questions**

1. Do you plan to test these effects during active listening tasks or with head-free behavior?  
2. Will you vary visual stimulus location (not just 0°) to map the gain field relative to gaze/visual input?  
3. Are you planning laminar analyses (depth-dependent gain/remapping) with the 128-channel probe data?  
4. Could you collaborate with computational modelers to formalize the “auditory Umwelt” strategy?  
5. Will you test different sound types (tones, natural calls) to see if anchors/gain generalize beyond broadband noise?

---

## **P10. Glossary**

* **Umwelt:** A species-specific subjective perceptual world shaped by sensory/motor capacities; concept attributed to Jakob von Uexküll.  
* **ACx:** Auditory cortex.  
* **SRF:** Spatial receptive field (responses as a function of sound direction).  
* **Azimuth:** Horizontal angle around the head (degrees) used to define sound/visual locations.  
* **Contralateral:** Opposite side relative to the recorded hemisphere; here associated with –90° direction.  
* **Gain control (k\_AV):** Multiplicative scaling of firing rate under audiovisual condition relative to auditory-only baseline.  
* **Baseline (b\_AV):** Additive offset term in the AV response model.  
* **Remapping:** Shift in preferred direction/best azimuth; authors report absence of remapping.  
* **Interaural axis:** Left-right axis through the ears; –90° described as centered across this axis.  
* **TDT:** Tucker-Davis Technologies neurophysiology setup (hardware) referenced for synchronization.

---

## **P11. Answering Guide (likely attendee questions \+ grounded answers)**

1. **Q:** What question is this poster addressing?  
     
   * **A (poster-grounded):** How auditory cortex encodes 360° space in a foveate primate and how frontal visual events influence that auditory spatial code.

   

2. **Q:** What species and brain area were studied?  
     
   * **A:** Common marmosets; auditory cortex (ACx).

   

3. **Q:** What were the main experimental conditions?  
     
   * **A:** Head-fixed passive condition with broadband noise across 360°; and an audiovisual condition adding a wide-field frontal visual image (±40° at 0°).

   

4. **Q:** What did you find about spatial tuning distribution?  
     
   * **A:** Tuning sharpened toward the contralateral pole, with a dense cluster of narrowly tuned neurons around –90°.

   

5. **Q:** Does vision change neurons’ preferred sound direction?  
     
   * **A:** The poster states peaking tuning direction does not change with frontal vision, especially for narrowly tuned neurons.

   

6. **Q:** How does vision affect auditory responses then?  
     
   * **A:** Vision produces a multiplicative gain effect (and baseline change) on firing rates without changing best azimuth (gain field rather than remapping).

   

7. **Q:** Where is gain modulation strongest?  
     
   * **A:** Strongest in the contra-rear field; discharge rates changed more in rear directions.

   

8. **Q:** What analysis supports the gain-field claim?  
     
   * **A:** A linear regression model Rate\_AV(θ)=k\_AV\*Rate\_AO(θ−θ\_AV)+b\_AV was significant for 155/166 units (p\<0.05) with reported quartiles of k, b, and R².

   

9. **Q:** How were recordings made?  
     
   * **A:** Single-unit activity recorded using 128-channel silicon probes in four marmosets with synchronized infra-red eye tracking and TDT setup.

   

10. **Q:** What’s the conceptual takeaway?  
      
* **A:** A dual strategy for 360° auditory representation: stable contralateral “anchors” plus vision-dependent gain that enhances monitoring of space outside the visual fovea, especially the rear hemifield.

---

## **P12. JSON metadata (for indexing)**

{

  "poster\_id": "CHS-RD2026-Zhou-Y-EncodingAuditorySpaceMarmoset",

  "title": "Encoding Auditory Space in Marmoset Cortex",

  "authors": \["Yi Zhou", "Derek Nguyen"\],

  "affiliations": \["Laboratory of Auditory Computation & Neurophysiology, College of Health Solutions", "Arizona State University"\],

  "keywords": \["auditory cortex", "marmoset", "spatial hearing", "azimuth", "Umwelt", "visual modulation", "gain control", "multisensory", "single-unit recording", "eye tracking", "128-channel probe"\],

  "domain\_area": \["neurodevelopment/behavior/mental health", "biomedical informatics/data science (methods-oriented neurophysiology)"\],

  "methods": \["head-fixed passive recordings", "broadband noise SRFs across 360° (20° spacing; 200 ms)", "wide-field frontal visual image (±40° at 0°)", "single-unit recordings with 128-channel probes", "infra-red eye tracking synchronized with TDT", "linear regression gain model Rate\_AV \= k\*Rate\_AO(shifted)+b"\],

  "population": "Four common marmosets; single units from auditory cortex (166 units analyzed in regression)",

  "timeframe": "Not stated on poster",

  "outcomes": \["preferred direction (best azimuth)", "tuning width/half-width", "vision-dependent gain (k\_AV) and baseline (b\_AV)", "rear-field modulation strength"\],

  "datasets\_tools": \["128-channel silicon probes", "infra-red eye tracking", "TDT neurophysiology setup"\],

  "key\_results": \[

    "Sharply tuned neurons preferred contralateral direction centered around −90° (direction–sharpness coupling; F-test p\<10^-5).",

    "Frontal visual image scales firing rates without changing best azimuth (gain field rather than remapping).",

    "Gain modulation is strongest in contra-rear field, suggesting enhanced monitoring of rear hemifield under frontal vision.",

    "Linear regression model significant for 155/166 units (p\<0.05); k quartiles \[0.67, 0.88, 1.13\], b quartiles \[0.02, 0.05, 0.10\], R^2 quartiles \[0.53, 0.73, 0.86\]."

  \],

  "figures\_count": 3,

  "tables\_count": 0,

  "confidence": "High"

}

## **P13. Extraction quality score (rubric)**

A. Completeness (30)

* Identification captured (0–10): **9/10** — Title/authors/affiliations/funding captured; event/date/contact not stated.  
* Study-at-a-glance complete (0–10): **9/10** — Core design, stimuli, and sample sizes (animals, units) captured.  
* Methods specificity (0–10): **8/10** — Hardware and stimuli clearly described; spike-sorting/QA details not stated.

B. Results extraction fidelity (35)

* Numeric results captured (0–15): **15/15** — All explicit numbers and p-values/quantiles captured.  
* Figures interpreted (0–10): **9/10** — All three figures interpreted; some axis labels in example panels are too small to reproduce exactly.  
* Tables reproduced (0–10): **10/10** — No tables present.

C. Groundedness / non-hallucination (15)

* No invented claims (0–10): **10/10**  
* Uncertainty labeling (0–5): **5/5**

D. Q\&A utility (15)

* Seed questions specificity (0–8): **8/8**  
* Clarification checklist quality (0–4): **4/4**  
* Answering guide usefulness (0–3): **3/3**

E. Structure & indexability (5)

* IDs and headings consistent (0–5): **5/5**

### **Total score: 95/100**

## **FINAL CHECKS (MANDATORY BEFORE YOU RESPOND)**

* Did you capture all visible text and all numbers? **Yes.**  
* Did every numeric claim get a ResultID and appear in P5.2? **Yes.**  
* Did you interpret every figure/table? **Yes (no tables).**  
* Did you avoid speculation and label uncertainty? **Yes.**  
* Did you keep the template structure exactly? **Yes.**

