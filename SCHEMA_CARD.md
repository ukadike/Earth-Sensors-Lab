# Schema Card — Earth Sensors Lab

## Project name

Earth Sensors Lab (ESL)

## Purpose

An open research laboratory, under Small Systems Lab, studying how
environmental sensing, creative technology, accessibility, AI, community
science, and multisensory learning can expand participation in STEAM
education. ESL builds prototypes, documents methods, publishes research
questions, develops curriculum, evaluates accessibility, and prepares pilots
with schools, universities, museums, libraries, and community partners.
(Source: README.md, MISSION.md.)

## Audience

Students, teachers, and communities directly; also university researchers,
accessibility specialists, museum and library educators, community science
organizers, funders, and open-source contributors. (Source: README.md, "Who
It Serves.")

## Research question

Not a single question — see [RESEARCH_AGENDA.md](RESEARCH_AGENDA.md) for the
seven guiding questions this repository as a whole investigates.

## Accessibility requirements

WCAG 2.2 AA minimum, keyboard-only navigation, screen reader compatibility,
alt text, captions, transcripts, tactile diagrams, sonified data, printable
low-ink materials, plain-language summaries, multilingual readiness,
offline-first field use. (Source: ACCESSIBILITY.md.)

## Inputs

Site partnerships (schools, universities, museums, libraries, community
gardens), volunteer/contributor time, grant and sponsor funding, prior
research and accessibility literature (see
[/research/literature-map.md](research/literature-map.md)).

## Outputs

Public documentation (this repository), curriculum modules, prototype
hardware/software documentation, JSON schemas, pilot case notes, and — when
pilots occur — findings recorded per
[/research/findings-template.md](research/findings-template.md).

## Materials

Low-cost sensor hardware (prototype stage — see
[/hardware/](hardware/)), documentation-only software concepts (see
[/software/](software/)), printable curriculum and accessibility materials.

## Data collected

None yet at the organization level; any data collected in a future pilot is
scoped, minimized, and consented per [ETHICS_AND_CONSENT.md](ETHICS_AND_CONSENT.md).
This repository itself collects no user data — it is static documentation and
a GitHub Pages site.

## Consent needs

Full consent framework in [ETHICS_AND_CONSENT.md](ETHICS_AND_CONSENT.md):
school consent, parent/guardian consent, photo/video consent, community
ownership of site-level data.

## Risks

Risk of being mistaken for a paid enrichment vendor rather than a research
partner (see [/pilots/pentaville-case-note.md](pilots/pentaville-case-note.md));
risk of overclaiming prototype readiness before pilots occur; risk of
accessibility features being treated as add-ons rather than core design
constraints. Mitigations are the explicit status labels (`proposed`, `in
development`, `prototype`, `pilot`) used throughout this repository.

## Next steps

See [ROADMAP.md](ROADMAP.md) for the five-phase plan from repository
foundation through open toolkit release.

## Interfaces

- Static GitHub Pages site (`index.html` + `site.css` + `variables.css`), no
  JavaScript, no build step, no backend.
- Full documentation tree readable directly as Markdown on GitHub.
- GitHub Issues as the contribution/feedback channel.

## Dependencies

None for the documentation site. Static HTML/CSS, no package manager. Future
software prototypes (see [/software/](software/)) will record their own
dependencies in their own documentation as they are built.

## Related repos

- **Small Systems Lab** (`ukadike/Small-Systems-Lab`) — parent hub; ESL is
  one of its listed branches.
- **Accessible by Design** (`ukadike/accessible-by-design-prototyping`) —
  accessibility research, audits, and tooling, linked from
  [ACCESSIBILITY.md](ACCESSIBILITY.md).
- Sibling branches sharing the same locked visual system: Echo, Omoluabi,
  Umada.

## Accessibility considerations (site itself)

- Skip-to-content link, landmark regions, `aria-labelledby` sections,
  sequential heading order, visible focus outlines — all present in
  `index.html` via the locked `variables.css` token system.
- External links do not use `target="_blank"`, matching convention across
  sibling SSL repos.

## Schema card rule

Every Earth Sensors Lab component — prototype, curriculum module, pilot
type, research study — must include: name, purpose, audience, research
question, accessibility requirements, inputs, outputs, materials, data
collected, consent needs, risks, and next steps. Machine-readable versions of
this structure live in [/schemas/](schemas/).

## Future implementation notes

- No LICENSE terms existed anywhere in this repository prior to this pass;
  see [LICENSE.md](LICENSE.md) for the newly adopted terms (CC BY 4.0 for
  written content; source code license marked TBD pending real code).
- The prototype areas in [PROTOTYPES.md](PROTOTYPES.md) each need their own
  full schema card as they mature past `proposed` — tracked, not yet done.
