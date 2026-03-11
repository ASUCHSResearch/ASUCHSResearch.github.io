# CHS Research Day Poster Companion

Static web app for Arizona State University College of Health Solutions Research Day posters.

The site is designed for event attendees who may be standing in front of a poster with a QR code. It gives them:

- a fast poster directory
- a lightweight static companion page for each poster
- copyable GPT seed prompts
- deep links to two Custom GPTs split by presenter last name

## What This Repo Contains

At runtime, the deployed site is just a static app:

- [index.html](/home/henry/projects/test-2026-research-day-posters/index.html)
- [posters/index.json](/home/henry/projects/test-2026-research-day-posters/posters/index.json)
- [posters](/home/henry/projects/test-2026-research-day-posters/posters) poster detail JSON files

The site does not require a backend.

## How The App Works

### Directory view

The home page:

- loads [posters/index.json](/home/henry/projects/test-2026-research-day-posters/posters/index.json)
- shows a searchable poster list
- supports category filters
- lets attendees open a poster detail page

Each directory card shows:

- poster title
- presenter name
- curated category

### Poster detail view

Each poster detail page includes:

- title
- presenter name
- curated category
- topic tags
- 30-second summary
- key numbers
- takeaways
- questions to ask
- GPT prompt tools

### GPT workflow

The detail page has a compact `Ask GPT` block that lets the attendee:

- choose an audience
- choose a tone
- choose a prompt mode
- copy a prompt
- open the appropriate Custom GPT

The app stores the selected audience, tone, and prompt mode in `localStorage` so they persist when scanning or opening another poster.

## Custom GPT Split

The app routes users to one of two Custom GPTs based on presenter last name:

- `A-M`
- `N-Z`

Current configured links live in [index.html](/home/henry/projects/test-2026-research-day-posters/index.html).

## Poster Data Model

Each poster JSON file includes:

- `id`
- `poster_id`
- `researcher`
- `researcher_last_name`
- `title`
- `category`
- `tags`
- `keywords`
- `summary`
- `routing`

The directory index includes the minimal fields needed to render the landing page:

- `id`
- `title`
- `category`
- `researcher`
- `researcher_last_name`
- `tags`
- `one_liner`
- `path`

## Curated Categories

The directory uses curated categories rather than raw keyword tags.

Current categories:

- `Autism & Neurodevelopment`
- `Brain, Behavior & Aging`
- `Clinical Care & Decision Support`
- `Community Health, Policy & Health Systems`
- `Digital Health & Research Technology`
- `Infectious Disease, Genomics & Bioinformatics`
- `Nutrition, Metabolism & Chronic Disease`
- `Physical Activity, Environment & Prevention`

## File Structure

Tracked site files:

- [README.md](/home/henry/projects/test-2026-research-day-posters/README.md)
- [index.html](/home/henry/projects/test-2026-research-day-posters/index.html)
- [posters](/home/henry/projects/test-2026-research-day-posters/posters)

Local-only supporting files may also exist:

- [presentations](/home/henry/projects/test-2026-research-day-posters/presentations)
- [tools](/home/henry/projects/test-2026-research-day-posters/tools)
- [prompt.md](/home/henry/projects/test-2026-research-day-posters/prompt.md)
- [master-list.md](/home/henry/projects/test-2026-research-day-posters/master-list.md)
- [custom-gpt-instructions.md](/home/henry/projects/test-2026-research-day-posters/custom-gpt-instructions.md)
- [custom-gpt-instructions-am.md](/home/henry/projects/test-2026-research-day-posters/custom-gpt-instructions-am.md)
- [custom-gpt-instructions-nz.md](/home/henry/projects/test-2026-research-day-posters/custom-gpt-instructions-nz.md)

Some of those files are intentionally ignored by Git.

## Git-Ignored Local Assets

This repo currently ignores:

- `presentations/`
- `tools/`
- `prompt.md`
- `master-list.md`
- `custom-gpt-instructions.md`
- `custom-gpt-instructions-am.md`
- `custom-gpt-instructions-nz.md`

Reason:

- the deployed site only needs `index.html` and `posters/*.json`
- source material, build helpers, and GPT instruction drafts are kept locally but are not required in the published GitHub Pages repo

## Local Development

Because the app uses `fetch()`, open it through a local static server rather than directly from `file://`.

Example:

```bash
python3 -m http.server 8123
```

Then open:

```text
http://localhost:8123/
```

## Deployment

This repo is intended for GitHub Pages via:

- `main` branch
- root-level static files

The deployed site only needs:

- [index.html](/home/henry/projects/test-2026-research-day-posters/index.html)
- [posters/index.json](/home/henry/projects/test-2026-research-day-posters/posters/index.json)
- [posters](/home/henry/projects/test-2026-research-day-posters/posters)

## Rebuilding Poster JSON

If you still have the local source materials and generator available, poster JSON can be regenerated from the poster markdown briefs in `presentations/` using the local build script in `tools/`.

That build tooling is intentionally not required for the deployed site and may be ignored by Git in this repo.

In other words:

- site runtime depends on `posters/*.json`
- regeneration depends on local source files and local tooling

## Custom GPT Instruction Files

Local instruction drafts are available for the two Custom GPTs:

- [custom-gpt-instructions-am.md](/home/henry/projects/test-2026-research-day-posters/custom-gpt-instructions-am.md)
- [custom-gpt-instructions-nz.md](/home/henry/projects/test-2026-research-day-posters/custom-gpt-instructions-nz.md)

These are intended to be pasted into the Custom GPT builder and paired with the poster markdown knowledge files.

## Maintenance Notes

When updating the site, the most common changes are:

- adjusting UI text in [index.html](/home/henry/projects/test-2026-research-day-posters/index.html)
- updating GPT links in [index.html](/home/henry/projects/test-2026-research-day-posters/index.html)
- replacing or regenerating JSON files under [posters](/home/henry/projects/test-2026-research-day-posters/posters)

If poster metadata changes and you are not regenerating from source, you can edit the affected JSON files directly.

## Current Status

Current published repo behavior:

- 33 posters in the directory
- category-based directory filters
- presenter-focused detail pages
- persistent GPT control selections via `localStorage`
- direct routing to A-M and N-Z Custom GPTs
