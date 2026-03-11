import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PRESENTATIONS_DIR = path.join(ROOT, "presentations");
const OUTPUT_DIR = path.join(ROOT, "posters");
const SCHOOL_NAME = "College of Health Solutions";
const CATEGORY_BY_SOURCE_FILE = new Map([
  ["Anbar2.md", "Autism & Neurodevelopment"],
  ["Baker.md", "Community Health, Policy & Health Systems"],
  ["Biviji.pptx.md", "Community Health, Policy & Health Systems"],
  ["Braden.md", "Autism & Neurodevelopment"],
  ["Carpenter.pptx.md", "Digital Health & Research Technology"],
  ["Chung 2026_03_ResearchDay.pptx.md", "Infectious Disease, Genomics & Bioinformatics"],
  ["Dinu.pptx.md", "Infectious Disease, Genomics & Bioinformatics"],
  ["Dorich - RTC.md", "Digital Health & Research Technology"],
  ["Gu.pptx2.md", "Nutrition, Metabolism & Chronic Disease"],
  ["Gunning Resize.md", "Brain, Behavior & Aging"],
  ["Hernandez2.md", "Community Health, Policy & Health Systems"],
  ["Johnston resize.pdf.md", "Nutrition, Metabolism & Chronic Disease"],
  ["Kim.pptx.md", "Nutrition, Metabolism & Chronic Disease"],
  ["Klein2.md", "Nutrition, Metabolism & Chronic Disease"],
  ["Koskan.pptx.md", "Community Health, Policy & Health Systems"],
  ["Liu.pptx.md", "Clinical Care & Decision Support"],
  ["Martin Matthew.md", "Community Health, Policy & Health Systems"],
  ["Mayol Kreiser resize.md", "Nutrition, Metabolism & Chronic Disease"],
  ["Oyeyemi.md", "Physical Activity, Environment & Prevention"],
  ["Phan.md", "Infectious Disease, Genomics & Bioinformatics"],
  ["Poulos.pptx.md", "Physical Activity, Environment & Prevention"],
  ["Racette.md", "Nutrition, Metabolism & Chronic Disease"],
  ["Roberts.pptx.md", "Brain, Behavior & Aging"],
  ["Russin Nina Global Warming_Poster_Final_PDF.md", "Community Health, Policy & Health Systems"],
  ["Scotch.md", "Infectious Disease, Genomics & Bioinformatics"],
  ["Suzuki_CHS_Poster_V1.pptx.md", "Autism & Neurodevelopment"],
  ["Swan Poster Template_Landscape_final final.pptx.md", "Nutrition, Metabolism & Chronic Disease"],
  ["Sweazea.pptx.md", "Nutrition, Metabolism & Chronic Disease"],
  ["Trueba.md", "Brain, Behavior & Aging"],
  ["VegaLopez.pptx.md", "Nutrition, Metabolism & Chronic Disease"],
  ["Verdecias-Pellum 2026 Poster (002).md", "Clinical Care & Decision Support"],
  ["Wang.md", "Clinical Care & Decision Support"],
  ["Zhou Yi AROPoster2026_YZ_AV2.md", "Brain, Behavior & Aging"]
]);

const STOPWORDS = new Set([
  "a", "about", "across", "after", "all", "also", "among", "an", "and", "are",
  "as", "at", "be", "because", "between", "both", "by", "can", "care", "data",
  "day", "did", "does", "during", "for", "from", "health", "how", "in", "into",
  "is", "it", "its", "more", "most", "not", "of", "on", "or", "our", "out",
  "over", "poster", "program", "project", "research", "results", "show", "shows",
  "study", "that", "the", "their", "them", "this", "through", "to", "using",
  "was", "were", "what", "when", "which", "with", "within", "year", "years"
]);

const TAG_ALIAS_MAP = new Map([
  ["asd", "Autism"],
  ["autism", "Autism"],
  ["addm", "Autism surveillance"],
  ["special-education", "Special education"],
  ["learning-health-system", "Learning health systems"],
  ["embedded-scientist", "Embedded science"],
  ["cer", "Comparative effectiveness research"],
  ["pcor", "Patient-centered outcomes research"],
  ["health-equity", "Health equity"],
  ["medicaid", "Medicaid"],
  ["ahcccs", "Arizona Medicaid"],
  ["mri", "Brain imaging"],
  ["jitai", "Adaptive digital interventions"],
  ["mrt", "Micro-randomized trials"],
  ["micro-randomized-trial", "Micro-randomized trials"],
  ["ema", "Ecological momentary assessment"],
  ["wearables", "Wearables"],
  ["mhealth", "Mobile health"],
  ["mobile-health", "Mobile health"],
  ["iot", "Connected devices"],
  ["sample-prep", "Sample preparation"],
  ["mci", "Mild cognitive impairment"],
  ["tre", "Time-restricted eating"],
  ["ad biomarkers", "Alzheimer's biomarkers"],
  ["chw", "Community health workers"],
  ["community-health-workers", "Community health workers"],
  ["behavioral-health-technicians", "Behavioral health workforce"],
  ["leprb", "Leptin signaling"],
  ["jmjd3", "Epigenetics"],
  ["ppw", "Pregnant and parenting women"],
  ["sud", "Substance use disorder"],
  ["mvpa", "Physical activity"],
  ["news", "Neighborhood environment"],
  ["actigraph", "Accelerometer tracking"],
  ["extreme-heat", "Extreme heat"],
  ["gut-microbiome", "Gut microbiome"],
  ["fmt", "Microbiome transfer"],
  ["older-adults", "Older adults"],
  ["elderly", "Older adults"],
  ["parkinsons disease", "Parkinson's disease"],
  ["glp-1", "GLP-1"],
  ["food noise", "Food noise"],
  ["latinx", "Latinx families"],
  ["hispanic", "Hispanic families"],
  ["dsme", "Diabetes self-management education"],
  ["hrsn", "Health-related social needs"],
  ["referrals", "Referrals"],
  ["screening", "Screening"],
  ["tgnc", "Transgender and gender-nonconforming care"],
  ["afab", "Assigned female at birth"],
  ["contraception decision aid", "Contraception decision support"],
  ["sars-cov-2", "SARS-CoV-2"],
  ["antibody-dynamics", "Antibody dynamics"],
  ["covid-19", "COVID-19"],
  ["seronet", "Serology networks"],
  ["digital-storytelling", "Digital storytelling"],
  ["dst", "Digital storytelling"],
  ["theory-of-planned-behavior", "Behavior change"],
  ["genomic-epidemiology", "Genomic epidemiology"],
  ["influenza-a", "Influenza A"],
  ["co-diversified-microbes", "Gut microbes"],
  ["shotgun-metagenomics", "Metagenomics"],
  ["auditory cortex", "Auditory cortex"],
  ["visual modulation", "Visual modulation"],
  ["school-children", "Schoolchildren"]
]);

const TAG_DROP_SET = new Set([
  "arizona",
  "policy",
  "data science",
  "genomic data",
  "clinical data",
  "disease biomarkers",
  "orbitrap",
  "triple-quadrupole",
  "mrm",
  "drying",
  "pca",
  "questions",
  "stated",
  "follow-up",
  "baseline",
  "features",
  "less",
  "active",
  "chart",
  "systems",
  "sources",
  "exact",
  "reference"
]);

const TAG_METHOD_SET = new Set([
  "actigraph",
  "news",
  "mri",
  "orbitrap",
  "triple-quadrupole",
  "mrm",
  "zoom",
  "gis",
  "ema",
  "mrt"
]);

const CREDENTIAL_PATTERN = /\b(PhD|MD|MPH|MS|MA|BS|BA|MBA|MHA|DrPH|DBH|RD|RDN|IBCLC|FACSM|FTOS|FAHA|FAPS|PsyD|LP|ABPP|MBChB|CCC-SLP|M\.S\.|M\.A\.|B\.A\.|B\.S\.)\b\.?/gi;
const NUMBER_PATTERN = /\b(?:n\s*=\s*\d[\d,]*|\d+(?:\.\d+)?%|p\s*[<=>]\s*\.?\d+(?:\.\d+)?|OR\s*=\s*[-]?\d+(?:\.\d+)?|RR\s*=\s*[-]?\d+(?:\.\d+)?|RRR\s*=\s*[-]?\d+(?:\.\d+)?|kappa\s*=\s*[-]?\d+(?:\.\d+)?|κ\s*=\s*[-]?\d+(?:\.\d+)?|\d{4}(?:[–-]\d{4})?|\d+(?:\.\d+)?(?:\s*(?:to|–|-)\s*\d+(?:\.\d+)?)?)\b/i;

function unescapeMarkdown(text) {
  return text.replace(/\\([\\`*_{}[\]()#+\-.!<>|])/g, "$1");
}

function stripMarkdown(text) {
  return unescapeMarkdown(text)
    .replace(/\r/g, "")
    .replace(/^\s*---\s*$/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^\s*>\s?/gm, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[ \t]+\n/g, "\n");
}

function cleanWhitespace(text) {
  return text
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function cleanInline(text) {
  return cleanWhitespace(stripMarkdown(text).replace(/\s+/g, " "));
}

function safeSentence(text) {
  return cleanInline(text).replace(/\s+/g, " ").trim();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSection(text, startHeader, endHeaderPattern = /^## \*\*P\d+\./gm) {
  const startMatch = startHeader.exec(text);
  if (!startMatch) {
    return "";
  }

  const sectionStart = startMatch.index + startMatch[0].length;
  endHeaderPattern.lastIndex = sectionStart;
  const endMatch = endHeaderPattern.exec(text);
  const raw = text.slice(sectionStart, endMatch ? endMatch.index : text.length);
  return cleanWhitespace(raw);
}

function getSubsection(text, startHeader, endHeaderPattern) {
  const startMatch = startHeader.exec(text);
  if (!startMatch) {
    return "";
  }

  const sectionStart = startMatch.index + startMatch[0].length;
  endHeaderPattern.lastIndex = sectionStart;
  const endMatch = endHeaderPattern.exec(text);
  const raw = text.slice(sectionStart, endMatch ? endMatch.index : text.length);
  return cleanWhitespace(raw);
}

function getField(text, label) {
  const regex = new RegExp(`^\\* \\*\\*${escapeRegExp(label)}:\\*\\*\\s*(.+)$`, "m");
  const match = unescapeMarkdown(text).match(regex);
  return match ? cleanInline(match[1]) : "";
}

function parseJsonMetadata(text) {
  const section = getSection(
    text,
    /^## \*\*P12\. JSON metadata \(for indexing\)\*\*\s*$/m
  );
  if (!section) {
    return null;
  }

  const start = section.indexOf("{");
  const end = section.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) {
    return null;
  }

  const rawJson = unescapeMarkdown(section.slice(start, end + 1)).replace(/\\(?!["\\/bfnrtu])/g, "");
  try {
    return JSON.parse(rawJson);
  } catch (error) {
    console.warn(`Could not parse JSON metadata: ${error.message}`);
    return null;
  }
}

function cleanPersonName(name) {
  return cleanInline(name)
    .replace(/^\s*(Presenting(?: author)?|Presenter|Authors?)\s*:\s*/i, "")
    .replace(/[”"']?\s+is shown\)?$/i, "")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰˒*]+/g, " ")
    .replace(CREDENTIAL_PATTERN, " ")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+,/g, ",")
    .replace(/,+\s*$/, "")
    .trim();
}

function normalizeForMatch(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function extractAuthorsList(metadata, authorsExact) {
  if (metadata?.authors?.length) {
    return metadata.authors
      .map((author) => cleanPersonName(author))
      .filter(Boolean);
  }

  const cleaned = cleanInline(authorsExact);
  if (!cleaned || /not stated on poster/i.test(cleaned)) {
    return [];
  }

  return cleaned
    .split(/\s*(?:;|\||\band\b|&)\s*/i)
    .map((author) => cleanPersonName(author))
    .filter(Boolean);
}

function extractPosterId(text, metadata) {
  return (
    metadata?.poster_id ||
    getField(text, "PosterID") ||
    cleanInline(
      stripMarkdown(text).match(/^#\s+POSTER_BRIEF\s+[—-]\s+(.+)$/m)?.[1] || ""
    )
  );
}

function extractCandidateLastName(posterId, sourceFile) {
  const posterMatch = posterId.match(/^CHS-RD\d{4}-(.+)-[A-Z]-/i);
  if (posterMatch) {
    return posterMatch[1];
  }

  return path.basename(sourceFile, ".md").replace(/\.(pdf|pptx)$/i, "").trim();
}

function extractTitle(text, sourceFile) {
  const exactTitle = getField(text, "Title (exact)");
  if (exactTitle) {
    return exactTitle;
  }

  const headings = [...stripMarkdown(text).matchAll(/^#\s+(.+)$/gm)]
    .map((match) => cleanInline(match[1]))
    .filter((value) => value && !/^POSTER_BRIEF/i.test(value));
  if (headings.length) {
    return headings[0];
  }

  return path.basename(sourceFile, ".md").replace(/\.(pdf|pptx)$/i, "");
}

function extractResearcher(text, metadata, candidateLastName, sourceFile) {
  const authorsExact = getField(text, "Authors (exact)");
  const authors = extractAuthorsList(metadata, authorsExact);
  const presenterMatch = authorsExact.match(/(?:Presenting(?: author)?|Presenter)\s*:\s*([^;|”")]+)/i);
  if (presenterMatch) {
    const presenter = cleanPersonName(presenterMatch[1]);
    if (presenter) {
      return presenter;
    }
  }

  const normalizedCandidate = normalizeForMatch(candidateLastName);
  const matchedAuthor = authors.find((author) => normalizeForMatch(author).includes(normalizedCandidate));
  if (matchedAuthor) {
    return matchedAuthor;
  }

  if (authors.length) {
    return authors[0];
  }

  return cleanPersonName(
    path.basename(sourceFile, ".md").replace(/\.(pdf|pptx)$/i, "").replace(/[_-]+/g, " ")
  );
}

function extractLastName(researcher, candidateLastName) {
  const cleanedCandidate = cleanPersonName(candidateLastName);
  if (cleanedCandidate) {
    return cleanedCandidate;
  }

  const parts = cleanPersonName(researcher).split(/\s+/).filter(Boolean);
  return parts.length ? parts[parts.length - 1] : researcher;
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function buildPosterSlug(lastName, title, existingSlugs) {
  const lastNameSlug = slugify(lastName).split("-").filter(Boolean).slice(-2).join("-");
  const titleTokens = slugify(title).split("-").filter(Boolean).filter((token) => !STOPWORDS.has(token));
  const shortTitle = (titleTokens.slice(0, 6).join("-") || "poster").slice(0, 48);
  let base = `${lastNameSlug || "poster"}-${shortTitle}`.replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "");
  base = base.slice(0, 60).replace(/-+$/g, "");

  let slug = base;
  let suffix = 2;
  while (existingSlugs.has(slug)) {
    const nextSuffix = `-${suffix}`;
    slug = `${base.slice(0, Math.max(1, 60 - nextSuffix.length))}${nextSuffix}`.replace(/-+$/g, "");
    suffix += 1;
  }

  existingSlugs.add(slug);
  return slug;
}

function extractSentences(text) {
  const cleaned = cleanWhitespace(stripMarkdown(text)).replace(/\n+/g, " ");
  return cleaned
    .split(/(?<=[.!?])\s+(?=[A-Z0-9(])/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function extractTopLevelBullets(text) {
  return stripMarkdown(text)
    .split("\n")
    .map((line) => line.trimEnd())
    .filter((line) => /^(?:\*|-)\s+/.test(line))
    .map((line) => cleanInline(line.replace(/^(?:\*|-)\s+/, "")))
    .filter(Boolean);
}

function extractNumberSnippets(sourceText, metadata) {
  const studyAtGlanceSection = getSection(sourceText, /^## \*\*P3\. Study at a glance\*\*\s*$/m, /^## \*\*P4\./gm);
  const relevantSections = [
    getSection(sourceText, /^## \*\*P2\. 30-second summary\*\*\s*$/m, /^## \*\*P3\./gm),
    studyAtGlanceSection,
    getSubsection(sourceText, /^### \*\*P5\.1 Key findings \(bullet list\)\*\*\s*$/m, /^### \*\*P5\.2/gm),
    getSubsection(sourceText, /^### \*\*P5\.2 Numerical extraction table\*\*\s*$/m, /^### \*\*P5\.3/gm),
    getSection(sourceText, /^## \*\*P6\. Discussion & implications\*\*\s*$/m, /^## \*\*P7\./gm)
  ].filter(Boolean).join("\n\n");
  const candidates = [];

  const seededFields = [
    getField(studyAtGlanceSection, "Sample size(s)"),
    getField(studyAtGlanceSection, "Timeframe"),
    getField(studyAtGlanceSection, "Population/sample")
  ].filter(Boolean);

  for (const field of seededFields) {
    const cleaned = safeSentence(field);
    if (NUMBER_PATTERN.test(cleaned)) {
      candidates.push(cleaned);
    }
  }

  if (metadata?.key_results?.length) {
    for (const result of metadata.key_results) {
      const cleaned = safeSentence(result);
      if (NUMBER_PATTERN.test(cleaned)) {
        candidates.push(cleaned);
      }
    }
  }

  for (const sentence of extractSentences(relevantSections)) {
    if (NUMBER_PATTERN.test(sentence)) {
      candidates.push(sentence);
    }
  }

  const unique = [];
  const seen = new Set();
  for (const item of candidates) {
    const compact = item.replace(/\s+/g, " ").trim();
    if (!compact) {
      continue;
    }

    if (/POSTER_BRIEF|Document metadata|Poster identification|Extraction date|Extractor model|Confidence summary|doi|reference list/i.test(compact)) {
      continue;
    }

    const key = compact.toLowerCase();
    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    unique.push(compact.length > 180 ? `${compact.slice(0, 177).trim()}...` : compact);
    if (unique.length === 6) {
      break;
    }
  }

  return unique;
}

function keywordHeuristic(text, title, metadata) {
  const fromMetadata = [
    ...(metadata?.keywords || []),
    ...(metadata?.domain_area || []),
    ...(metadata?.methods || [])
  ]
    .map((item) => cleanInline(item).toLowerCase())
    .filter(Boolean);

  const headingWords = [...stripMarkdown(text).matchAll(/^##+\s+(.+)$/gm)]
    .flatMap((match) => cleanInline(match[1]).toLowerCase().split(/[^a-z0-9-]+/))
    .filter((word) => word.length > 3 && !STOPWORDS.has(word));

  const bodyWords = `${title} ${stripMarkdown(text)}`
    .toLowerCase()
    .replace(/[^a-z0-9\s-]+/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !STOPWORDS.has(word));

  const counts = new Map();
  for (const word of [...headingWords, ...bodyWords]) {
    counts.set(word, (counts.get(word) || 0) + 1);
  }

  const repeated = [...counts.entries()]
    .filter(([, count]) => count >= 3)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 12)
    .map(([word]) => word);

  const combined = [...fromMetadata, ...repeated];
  const unique = [];
  const seen = new Set();

  for (const item of combined) {
    const cleaned = item.replace(/\s+/g, " ").trim();
    if (!cleaned) {
      continue;
    }

    const key = cleaned.toLowerCase();
    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    unique.push(cleaned);
  }

  return unique;
}

function buildTags(keywords) {
  const titleCase = (value) => value
    .split(" ")
    .filter(Boolean)
    .map((word) => {
      if (/^(GLP-1|COVID-19|MRI|NIH|ASD)$/i.test(word)) {
        return word.toUpperCase();
      }
      if (/^[a-z]\d+$/i.test(word)) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  const scored = [];
  for (let index = 0; index < keywords.length; index += 1) {
    const raw = cleanInline(keywords[index]);
    if (!raw) {
      continue;
    }

    const normalizedKey = raw.toLowerCase();
    if (TAG_DROP_SET.has(normalizedKey)) {
      continue;
    }

    const alias = TAG_ALIAS_MAP.get(normalizedKey);
    let display = alias || raw.replace(/-/g, " ");
    display = display
      .replace(/\bparkinsons\b/i, "Parkinson's")
      .replace(/\balzheimer s\b/i, "Alzheimer's");
    if (!alias) {
      display = titleCase(display);
    }

    let score = 100 - index * 3;
    if (display.includes(" ")) {
      score += 5;
    }
    if (TAG_METHOD_SET.has(normalizedKey)) {
      score -= 12;
    }
    if (display.length > 30) {
      score -= 6;
    }

    scored.push({ key: display.toLowerCase(), display, score });
  }

  const deduped = [];
  const seen = new Set();
  for (const item of scored.sort((a, b) => b.score - a.score || a.display.localeCompare(b.display))) {
    const canonicalKey = normalizeForMatch(item.display);
    if (seen.has(canonicalKey)) {
      continue;
    }
    seen.add(canonicalKey);
    deduped.push(item.display);
    if (deduped.length === 4) {
      break;
    }
  }

  return deduped;
}

function extractSummary(text) {
  const section = getSection(text, /^## \*\*P2\. 30-second summary\*\*\s*$/m, /^## \*\*P3\./gm);
  const summary = safeSentence(section);
  if (summary) {
    return summary;
  }

  const firstSentence = extractSentences(text)[0];
  return firstSentence || "";
}

function buildHook(summary, title) {
  const sentence = extractSentences(summary)[0];
  if (sentence) {
    return sentence;
  }

  return title;
}

function buildTalktrack(title, summary, studyAtGlanceSection, keyFindingsSection, discussionSection) {
  const objective = getField(studyAtGlanceSection, "Objective(s)").replace(/^[*•-]\s*/, "");
  const population = getField(studyAtGlanceSection, "Population/sample");
  const primaryOutcome = getField(studyAtGlanceSection, "Primary outcome(s)").replace(/^[*•-]\s*/, "");
  const findings = extractTopLevelBullets(keyFindingsSection);
  const discussionSentences = extractSentences(discussionSection);

  const bullets = [
    objective ? `Focus: ${objective}` : `Focus: ${buildHook(summary, title)}`,
    population || primaryOutcome
      ? `Approach: ${[population && `Population: ${population}`, primaryOutcome && `Primary outcome: ${primaryOutcome}`].filter(Boolean).join(" ")}`.trim()
      : `Approach: ${extractSentences(summary)[1] || buildHook(summary, title)}`,
    findings[0] ? `Finding: ${findings[0]}` : `Finding: ${extractSentences(summary)[1] || summary}`,
    discussionSentences[0] ? `Why it matters: ${discussionSentences[0]}` : `Why it matters: ${extractSentences(summary).slice(-1)[0] || summary}`
  ];

  return bullets.map((item) => safeSentence(item)).filter(Boolean).slice(0, 4);
}

function buildTakeaways(keyFindingsSection, discussionSection, summary) {
  const keyBullets = extractTopLevelBullets(keyFindingsSection).filter((item) => !/:$/.test(item));
  const discussionBullets = extractTopLevelBullets(discussionSection);
  const discussionSentences = extractSentences(discussionSection);
  const summarySentences = extractSentences(summary);

  const candidates = [
    ...keyBullets,
    ...discussionBullets,
    ...discussionSentences,
    ...summarySentences
  ];

  const unique = [];
  const seen = new Set();
  for (const item of candidates) {
    const cleaned = safeSentence(item);
    if (!cleaned) {
      continue;
    }

    const key = cleaned.toLowerCase();
    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    unique.push(cleaned);
    if (unique.length === 3) {
      break;
    }
  }

  return unique;
}

function buildLimitations(limitationsSection, missingSection) {
  const sectionText = stripMarkdown(limitationsSection);
  const stated = sectionText.match(/\* \*\*Stated limitations:\*\* (.+)$/m)?.[1];
  const inferenceBullets = extractTopLevelBullets(limitationsSection)
    .filter((item) => /^Inference:/i.test(item))
    .map((item) => item.replace(/^Inference:\s*/i, "").trim());
  const missingItems = stripMarkdown(missingSection)
    .split("\n")
    .filter((line) => /^-\s+\[ \]\s+/.test(line))
    .map((line) => cleanInline(line.replace(/^-\s+\[ \]\s+/, "")));

  const limitations = [];
  if (stated && !/not stated on poster/i.test(stated)) {
    limitations.push(safeSentence(stated));
  } else {
    limitations.push("The poster does not list formal study limitations.");
  }

  for (const item of inferenceBullets) {
    limitations.push(safeSentence(item));
    if (limitations.length === 2) {
      break;
    }
  }

  if (limitations.length < 2 && missingItems[0]) {
    limitations.push(`The poster leaves open this clarification: ${missingItems[0]}`);
  }

  return limitations.slice(0, 2);
}

function extractChecklistQuestions(section) {
  return stripMarkdown(section)
    .split("\n")
    .filter((line) => /^-\s+\[ \]\s+/.test(line))
    .map((line) => cleanInline(line.replace(/^-\s+\[ \]\s+/, "")))
    .filter(Boolean);
}

function extractNumberedQuestions(section) {
  return stripMarkdown(section)
    .split("\n")
    .filter((line) => /^\d+\.\s+/.test(line))
    .map((line) => cleanInline(line.replace(/^\d+\.\s+/, "")))
    .filter(Boolean);
}

function buildQuestions(questionSections, missingSection) {
  const candidates = [];

  const sectionGuidance = [
    {
      items: extractNumberedQuestions(questionSections.results),
      why: "This gets the presenter to interpret the main result instead of repeating the title."
    },
    {
      items: extractNumberedQuestions(questionSections.robustness),
      why: "This probes confidence, assumptions, or limitations without sounding hostile."
    },
    {
      items: extractNumberedQuestions(questionSections.implications),
      why: "This opens a useful conversation about why the work matters or where it goes next."
    },
    {
      items: extractNumberedQuestions(questionSections.understanding),
      why: "This helps an attendee quickly understand the setup or workflow behind the poster."
    }
  ];

  for (const section of sectionGuidance) {
    if (section.items[0]) {
      candidates.push({
        question: section.items[0],
        why_this_is_good: section.why
      });
    }
  }

  for (const item of extractChecklistQuestions(missingSection)) {
    candidates.push({
      question: item,
      why_this_is_good: "This fills in a detail the poster itself leaves unclear."
    });
  }

  const unique = [];
  const seen = new Set();
  for (const item of candidates) {
    const key = item.question.toLowerCase();
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    unique.push(item);
    if (unique.length === 3) {
      break;
    }
  }

  return unique;
}

function questionToIdea(question) {
  return question
    .replace(/\?+$/, "")
    .replace(/^Are there opportunities to\s+/i, "")
    .replace(/^Are you planning to\s+/i, "")
    .replace(/^Are you\s+/i, "")
    .replace(/^Will you\s+/i, "")
    .replace(/^Do you plan to\s+/i, "")
    .replace(/^Would you\s+/i, "")
    .replace(/^Could you\s+/i, "")
    .replace(/^How might you\s+/i, "Explore how to ")
    .replace(/^What types of\s+/i, "Identify ")
    .replace(/^What collaborators or datasets would be most valuable for\s+/i, "Identify collaborators or datasets for ")
    .replace(/^What are your next evaluation milestones\s*[—-]?\s*/i, "Define next evaluation milestones: ")
    .replace(/^What's\s+/i, "Clarify ")
    .replace(/^What\s+/i, "Clarify ")
    .replace(/^\s+/, "")
    .replace(/\s{2,}/g, " ")
    .replace(/^([a-z])/, (char) => char.toUpperCase());
}

function idealPartnerFromQuestion(question) {
  const partnerWith = question.match(/partner with ([^?]+?)(?:\s+to\s+|$)/i);
  if (partnerWith) {
    return cleanInline(partnerWith[1]);
  }

  const collaborateWith = question.match(/collaborate with ([^?]+)/i);
  if (collaborateWith) {
    return cleanInline(collaborateWith[1]);
  }

  if (/datasets?|data capability/i.test(question)) {
    return "Data or analytics partner";
  }
  if (/clinical partners?|health systems?|clinics?/i.test(question)) {
    return "Clinical implementation partner";
  }
  if (/patient|community/i.test(question)) {
    return "Patient or community partner";
  }
  if (/digital tools?|platforms?|texting/i.test(question)) {
    return "Digital tools partner";
  }

  return "Partner aligned with the poster's next-step question";
}

function buildCollaborationIdeas(futureWorkSection) {
  const questions = stripMarkdown(futureWorkSection)
    .split("\n")
    .filter((line) => /^\d+\.\s+/.test(line))
    .map((line) => cleanInline(line.replace(/^\d+\.\s+/, "")))
    .filter(Boolean)
    .slice(0, 3);

  return questions.map((question) => ({
    idea: questionToIdea(question),
    ideal_partner: idealPartnerFromQuestion(question),
    what_they_contribute: "Access, implementation context, data, or methods needed for the next phase named on the poster.",
    what_they_get: "A concrete role in shaping and evaluating the poster's next step."
  }));
}

function buildAudienceVersions(title, summary, takeaways, keyNumbers) {
  const takeaway = takeaways[0] || summary;
  const number = keyNumbers[0] || "";

  return {
    student: safeSentence(`This poster studies ${title}. The main point is: ${takeaway}`),
    clinician: safeSentence(`For practice-facing attendees, the poster highlights ${takeaway}`),
    community: safeSentence(`For community partners, the poster connects the issue to real-world impact: ${summary}`),
    funder: safeSentence(
      number
        ? `The project addresses ${title} and already reports measurable signals such as ${number}`
        : `The project addresses ${title} and outlines a clear problem, approach, and next-step opportunity.`
    )
  };
}

function groupFromLastName(lastName) {
  const firstLetter = (lastName.match(/[A-Za-z]/)?.[0] || "A").toUpperCase();
  return firstLetter >= "N" ? "N-Z" : "A-M";
}

function ensureArrayLength(items, fallbackFactory, length = 3) {
  const output = [...items];
  while (output.length < length) {
    output.push(fallbackFactory(output.length));
  }
  return output.slice(0, length);
}

async function build() {
  const fileNames = (await fs.readdir(PRESENTATIONS_DIR))
    .filter((fileName) => fileName.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b));

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const existingOutputFiles = (await fs.readdir(OUTPUT_DIR)).filter((fileName) => fileName.endsWith(".json"));
  await Promise.all(
    existingOutputFiles.map((fileName) => fs.unlink(path.join(OUTPUT_DIR, fileName)))
  );

  const usedSlugs = new Set();
  const indexItems = [];

  for (const fileName of fileNames) {
    const fullPath = path.join(PRESENTATIONS_DIR, fileName);
    const raw = await fs.readFile(fullPath, "utf8");
    const text = raw.replace(/^\uFEFF/, "");
    const metadata = parseJsonMetadata(text);

    const posterId = extractPosterId(text, metadata) || "";
    const title = extractTitle(text, fileName);
    const candidateLastName = extractCandidateLastName(posterId, fileName);
    const researcher = extractResearcher(text, metadata, candidateLastName, fileName);
    const researcherLastName = extractLastName(researcher, candidateLastName);
    const category = CATEGORY_BY_SOURCE_FILE.get(fileName) || "Community Health, Policy & Health Systems";
    const id = buildPosterSlug(researcherLastName, title, usedSlugs);
    const keywords = keywordHeuristic(text, title, metadata);
    const tags = buildTags(keywords);

    const studyAtGlanceSection = getSection(text, /^## \*\*P3\. Study at a glance\*\*\s*$/m, /^## \*\*P4\./gm);
    const keyFindingsSection = getSubsection(
      text,
      /^### \*\*P5\.1 Key findings \(bullet list\)\*\*\s*$/m,
      /^### \*\*P5\.2/gm
    );
    const discussionSection = getSection(text, /^## \*\*P6\. Discussion & implications\*\*\s*$/m, /^## \*\*P7\./gm);
    const limitationsSection = getSection(text, /^## \*\*P7\. Limitations & assumptions\*\*\s*$/m, /^## \*\*P8\./gm);
    const missingSection = getSection(text, /^## \*\*P8\. What’s missing \/ clarification checklist \(ask the presenter\)\*\*\s*$/m, /^## \*\*P9\./gm)
      || getSection(text, /^## \*\*P8\. What's missing \/ clarification checklist \(ask the presenter\)\*\*\s*$/m, /^## \*\*P9\./gm);
    const understandingQuestionsSection = getSubsection(
      text,
      /^### \*\*P9\.1 Understanding \(definitions & workflow\) [—-] 8 questions\*\*\s*$/m,
      /^### \*\*P9\.2/gm
    );
    const resultsQuestionsSection = getSubsection(
      text,
      /^### \*\*P9\.2 Results & interpretation [—-] 8 questions\*\*\s*$/m,
      /^### \*\*P9\.3/gm
    );
    const robustnessQuestionsSection = getSubsection(
      text,
      /^### \*\*P9\.3 Robustness \/ validity [—-] 6 questions\*\*\s*$/m,
      /^### \*\*P9\.4/gm
    );
    const implicationsQuestionsSection = getSubsection(
      text,
      /^### \*\*P9\.4 Implications \/ application [—-] 6 questions\*\*\s*$/m,
      /^### \*\*P9\.5/gm
    );
    const futureWorkSection = getSubsection(
      text,
      /^### \*\*P9\.5 Future work \/ collaboration [—-] 5 questions\*\*\s*$/m,
      /^## \*\*P10\./gm
    );

    const summary30s = extractSummary(text);
    const hook = buildHook(summary30s, title);
    const keyNumbers = extractNumberSnippets(text, metadata);
    const takeaways = buildTakeaways(keyFindingsSection, discussionSection, summary30s);
    const limitations = buildLimitations(limitationsSection, missingSection);
    const whatToAsk = ensureArrayLength(
      buildQuestions(
        {
          understanding: understandingQuestionsSection,
          results: resultsQuestionsSection,
          robustness: robustnessQuestionsSection,
          implications: implicationsQuestionsSection
        },
        missingSection
      ),
      () => ({
        question: `What would you clarify next about ${title}?`,
        why_this_is_good: "This keeps the conversation focused on the next most important missing detail."
      }),
      3
    );
    const collaborationIdeas = ensureArrayLength(
      buildCollaborationIdeas(futureWorkSection),
      () => ({
        idea: `Discuss the next collaboration step for ${title}`,
        ideal_partner: "Partner aligned with the poster's future work",
        what_they_contribute: "Capacity to move the project into its next phase.",
        what_they_get: "A chance to help shape the next study or implementation step."
      }),
      3
    );
    const talktrack2m = buildTalktrack(title, summary30s, studyAtGlanceSection, keyFindingsSection, discussionSection);
    const audienceVersions = buildAudienceVersions(title, summary30s, takeaways, keyNumbers);
    const oneLiner = safeSentence(extractSentences(summary30s)[0] || hook);
    const gptGroup = groupFromLastName(researcherLastName);

    const posterJson = {
      id,
      poster_id: posterId,
      researcher,
      researcher_last_name: researcherLastName,
      title,
      category,
      year: 2026,
      school_official_name: SCHOOL_NAME,
      tags,
      keywords,
      summary: {
        hook,
        summary_30s: summary30s,
        talktrack_2m: talktrack2m,
        key_numbers: keyNumbers,
        takeaways,
        limitations,
        what_to_ask: whatToAsk,
        collaboration_ideas: collaborationIdeas,
        audience_versions: audienceVersions
      },
      assets: {
        source_file_name: fileName,
        source_type: "markdown"
      },
      routing: {
        gpt_group: gptGroup
      }
    };

    await fs.writeFile(
      path.join(OUTPUT_DIR, `${id}.json`),
      `${JSON.stringify(posterJson, null, 2)}\n`,
      "utf8"
    );

    indexItems.push({
      id,
      title,
      category,
      researcher,
      researcher_last_name: researcherLastName,
      tags,
      one_liner: oneLiner,
      path: `/posters/${id}.json`
    });
  }

  indexItems.sort((a, b) => {
    const byLastName = a.researcher_last_name.localeCompare(b.researcher_last_name);
    if (byLastName !== 0) {
      return byLastName;
    }
    return a.title.localeCompare(b.title);
  });

  await fs.writeFile(
    path.join(OUTPUT_DIR, "index.json"),
    `${JSON.stringify(indexItems, null, 2)}\n`,
    "utf8"
  );

  console.log(`Generated ${indexItems.length} poster JSON files in ${OUTPUT_DIR}`);
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
