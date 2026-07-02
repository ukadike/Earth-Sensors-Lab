# Schema Card — Earth Sensors Lab

## Project name

Earth Sensors Lab (ESL)

## Purpose

A Small Systems Lab branch for hands-on environmental sensing, garden-based
science, astronomy, accessibility, and storytelling. It helps students and
communities observe soil, weather, light, sound, plant life, and sky events
through low-cost tools, tactile learning, data sonification, and
public-interest science education. (Source: README.md, index.html.)

## Audience

Students and communities, per README.md/index.html. The Small Systems Lab
hub description of this branch specifies "young people, families, educators,
gardens, climate sensing, and interstellar curiosity" (source:
`ukadike/Small-Systems-Lab` index.html "Branches" section — noted here for
cross-repo context, not restated as ESL's own claim beyond what its own
files say).

## Core concepts (from README.md / SSL-METHOD.md / index.html)

- **SSL Method inside ESL** — the Small Systems Lab method applied to
  environmental sensing:
  - *Operations of Care* — what is sensed, who owns the data, what's shared
    publicly vs. kept local, how students learn to trust a sensor, how the
    project works without reliable internet or expensive equipment.
  - *Rule-Based Intelligence* — sensor anomaly flags, plain-language
    explanations, classroom observation logs, accessibility summaries, data
    quality warnings, "do not overclaim" science checks.
  - *Ancient Geometry in ESL* — Circle (day/night, seasons, water, plant
    growth cycles), Triangle (sensor, environment, human observer), Grid
    (garden plots, data tables, maps), Spiral (repeated observation and
    learning over time), Golden ratio (natural growth patterns, visual
    balance).
- **Starter Modules** (six, all "in development," no content built yet):
  1. Soil moisture and plant care.
  2. Light, heat, and microclimate.
  3. Sound and biodiversity listening.
  4. Weather diary and sky observation.
  5. Astronomy and interstellar object literacy.
  6. Data storytelling and public science.
- **Accessibility Baseline** — tactile diagrams, audio descriptions,
  captions and transcripts, screen-reader-ready pages, high contrast
  charts, low-cost hardware assumptions, offline classroom worksheets.

## Interfaces

- Static GitHub Pages site (`index.html` + `site.css` + `variables.css`),
  no JavaScript, no build step, no backend.
- `SSL-METHOD.md` readable directly as raw Markdown on GitHub, linked from
  the homepage.
- GitHub Issues as the sole contribution/feedback channel (no email intake).

## Inputs / outputs

No functioning sensors, data pipelines, or hardware integrations exist in
this repository yet — it is documentation and a homepage only. AWAITING
FRAGMENT for any actual sensor hardware, firmware, or data-collection code;
none is present to describe.

## Dependencies

None. Static HTML/CSS, no package manager, no external libraries or
frameworks referenced anywhere in the repo.

## Related repos

- **Small Systems Lab** (`ukadike/Small-Systems-Lab`) — parent hub; ESL is
  one of its listed branches.
- **Accessible by Design** (`ukadike/accessible-by-design-prototyping`) —
  accessibility research, audits, and tooling; now linked from ESL's
  Accessibility Baseline section for inclusive STEAM (added this pass).
- Sibling branches sharing the same locked visual system: Echo, Omoluabi,
  Umada (per the SSL hub's "Branches" section; ESL's own files do not
  reference these directly, this is cross-repo context only).

## Accessibility considerations

- Skip-to-content link, landmark regions, `aria-labelledby` sections,
  sequential heading order, visible focus outlines — all present in
  `index.html` via the locked `variables.css` token system.
- No images currently in the repo, so no alt-text debt yet; future modules
  that add diagrams or photos will need alt text and, per the Accessibility
  Baseline, tactile/audio equivalents.
- External links do not use `target="_blank"`, matching the convention used
  across sibling SSL repos.

## Future implementation notes

- The six starter modules have no content yet — OPEN QUESTION on scope,
  format (per-module page? shared page?), and whether they'll include real
  sensor code/hardware guides.
- No LICENSE or CONTRIBUTING file yet — **Needs Kemi review**.
- Any future sensor/hardware/data content should preserve the "do not
  overclaim" science-check principle already stated in SSL-METHOD.md and
  README.md.
