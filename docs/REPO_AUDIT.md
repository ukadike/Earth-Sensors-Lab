# Repo Audit — Earth Sensors Lab

Date: 2026-07-02
Scope: full repository (5 content files at time of audit).

## Purpose

Earth Sensors Lab (ESL) is a Small Systems Lab (SSL) branch for hands-on
environmental sensing, garden-based science, astronomy, and accessible STEAM
education. It is a GitHub Pages starter package — no application code,
no build tooling, static HTML/CSS only.

## Current structure

```
.gitattributes
.nojekyll
README.md          — project overview, SSL method summary, starter modules,
                      accessibility baseline
SSL-METHOD.md       — full text of the Small Systems Lab method (Operations of
                      Care, Rule-Based Intelligence, Ancient Geometry as
                      Interface Logic, Accessibility as System Architecture,
                      Public Knowledge and Returnability)
index.html          — the GitHub Pages homepage
site.css            — layout glue (max-width, grid, base element rules)
variables.css        — locked SSL/Omoluabi visual language tokens (shared
                      across Small Systems Lab, Echo, Omoluabi, Umada)
```

There is no `docs/` history before this audit, no `assets/` directory, and
no other HTML pages. This is a genuinely small, early-stage repo — the
audit below is proportionally short.

## Homepage / entry point

`index.html` is the sole page and the GitHub Pages entry point (`.nojekyll`
present, so Pages serves the raw files). It is the only page in the site;
there is no separate navigation menu because there is nothing else to
navigate to.

## Important pages

- `index.html` — homepage (About, SSL Method, Starter Modules, Accessibility
  Baseline, Get Involved, Status).
- `SSL-METHOD.md` — linked from `index.html`, read directly as a raw Markdown
  file on GitHub (no HTML rendering for it in this repo).

## Orphan pages

None. Every file in the repo is either the homepage, a stylesheet loaded by
the homepage, or a Markdown file linked from the homepage.

## Broken links

None found. Checked every `href` in `index.html`:

| Link | Target | Status |
|---|---|---|
| `variables.css`, `site.css` | local stylesheets | present |
| `#main` | skip link | present |
| `SSL-METHOD.md` | local file | present |
| `https://github.com/ukadike/Earth-Sensors-Lab/issues` | GitHub issues | correct — matches actual repo name/casing |
| `https://ukadike.github.io/Small-Systems-Lab/` | SSL hub | correct casing (verified against `ukadike/Small-Systems-Lab`) |
| `https://github.com/ukadike` | profile | correct |

The prior fix in commit `ef0adbb` ("Fix repo cross-link to corrected
Earth-Sensors-Lab name," `Earth-Sesnsors-Lab` → `Earth-Sensors-Lab`) is still
correct and has not regressed.

`README.md` contains no links (plain Markdown prose only), so nothing to
check there.

## Missing navigation

There is no navigation at all beyond the single page — nothing to fix, since
there's only one page. Note for future: if more pages are added (e.g. module
pages), the header will need a nav element; none exists today because none
is needed yet.

## Missing documentation

- No `CONTRIBUTING.md`, `LICENSE`, or `CODE_OF_CONDUCT.md` in this repo
  (sibling repos, e.g. `accessible-by-design-prototyping`, have these — ESL
  does not yet). **Needs Kemi review** on whether/when to add.
- No `CHANGELOG.md`.
- These gaps are consistent with "GitHub Pages starter package" status
  stated in the repo itself — not flagging as broken, just noting.

## Duplicated / outdated files

None found. README.md and index.html cover the same content in two forms
(Markdown summary vs. HTML page) but are not literal duplicates and stay in
sync as of this audit — see Consistency below.

## Accessibility issues

Reviewed against WCAG basics and the SSL accessibility-as-architecture
method:

- Skip link present and correctly implemented (`.skip-link`, focus-visible
  per `variables.css` global `*:focus` rule).
- Landmark structure: `<header>`, `<main id="main">`, `<footer>` present;
  sections use `aria-labelledby` pointing at their own heading ids. Good.
- Heading order is sequential: one `<h1>` in the header, `<h2>` per section,
  `<h3>` inside cards — no skipped levels.
- No `<img>` elements in `index.html`, so no missing alt text to flag today.
  Future modules that add diagrams/photos will need alt text — flagging as
  a forward note, not a current defect.
- No color-only meaning: all content is text-based; no state is conveyed by
  color alone.
- Focus states: `variables.css` sets a visible `--focus-outline` globally on
  all interactive elements (`*:focus`, plus explicit rules for links,
  buttons, inputs). Good, and this is part of the locked visual system —
  not touched.
- No `target="_blank"` usage anywhere in the file, consistent with the rest
  of the SSL ecosystem (verified against `Small-Systems-Lab` and `Echo`
  sibling repos, neither of which opens external links in a new tab). The
  newly added Accessible by Design link follows this same convention.

No accessibility regressions found; no fixes were needed beyond the one
content addition described below.

## Code quality issues

None of substance. `site.css` is a small, well-commented layout file that
correctly defers to the locked `variables.css` token system rather than
redefining it. HTML is valid, semantic, and consistent with sibling repos'
markup conventions (`Small-Systems-Lab`, `Echo`).

## Consistency: index.html vs. README.md

Verified section-by-section. Both describe the same purpose, the same six
starter modules (same order), the same accessibility baseline items (same
order), and the same SSL-method framing (Operations of Care, Rule-Based
Intelligence, Ancient Geometry). No contradictions found.

## Recommended changes

- Consider adding `LICENSE` and `CONTRIBUTING.md` once the project moves
  past starter-package status (**Needs Kemi review** — not added here, no
  license terms were stated anywhere in the repo to draw from).
- When starter modules move from "in development" to real content, each
  should get its own page and the header/nav will need to grow accordingly.

## Completed changes (this pass)

- Added `docs/REPO_AUDIT.md` (this file).
- Added `SCHEMA_CARD.md` and `INDEX.md` at repo root.
- Added one cross-link from the "Accessibility baseline" section of
  `index.html` to the Accessible by Design repo
  (`github.com/ukadike/accessible-by-design-prototyping`), per the
  ecosystem-wide instruction to connect ESL to that repo for inclusive
  STEAM. No other content was changed; the locked visual system
  (`variables.css`) was not touched.
