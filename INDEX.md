# Index — Earth Sensors Lab

Full file index for this repository. See [README.md](README.md) for the
narrative repository map and [ROADMAP.md](ROADMAP.md) for what's built
versus planned.

## Site

- [index.html](index.html) — homepage (GitHub Pages entry point).

## Root documentation

- [README.md](README.md) — project overview and repository map
- [MISSION.md](MISSION.md) — why this lab exists, what "research" means here
- [CLAUDE.md](CLAUDE.md) — instructions for AI-assisted contributions
- [RESEARCH_AGENDA.md](RESEARCH_AGENDA.md) — research thesis, seven pillars,
  and guiding research questions
- [PARTNERSHIP_MODEL.md](PARTNERSHIP_MODEL.md) — partner types, how
  partnerships start
- [ACCESSIBILITY.md](ACCESSIBILITY.md) — accessibility baseline
- [ETHICS_AND_CONSENT.md](ETHICS_AND_CONSENT.md) — consent and data rules
- [PILOT_MODEL.md](PILOT_MODEL.md) — pilot phases
- [CURRICULUM.md](CURRICULUM.md) — curriculum overview
- [PROTOTYPES.md](PROTOTYPES.md) — the ten prototype areas and status
- [SCHEMA_CARD.md](SCHEMA_CARD.md) — this repo's own schema card, plus the
  schema-card rule
- [ROADMAP.md](ROADMAP.md) — five-phase roadmap
- [CONTRIBUTING.md](CONTRIBUTING.md) — how to contribute
- [LICENSE.md](LICENSE.md) — licensing terms (CC BY 4.0 for written content;
  source code license TBD)
- [SSL-METHOD.md](SSL-METHOD.md) — the Small Systems Lab method this repo
  applies
- [docs/REPO_AUDIT.md](docs/REPO_AUDIT.md) — repository audit history

## /research/

- [research-questions.md](research/research-questions.md)
- [what-counts-as-data.md](research/what-counts-as-data.md)
- [knowledge-contributions.md](research/knowledge-contributions.md)
- [external-programs.md](research/external-programs.md) — real NASA, CERN,
  and ESA programs Pillar 8 (Sky and Space Observation) could align with
- [literature-map.md](research/literature-map.md)
- [study-protocols.md](research/study-protocols.md)
- [pilot-evaluation.md](research/pilot-evaluation.md)
- [findings-template.md](research/findings-template.md)

## /curriculum/

- [overview.md](curriculum/overview.md)
- [full-curriculum-guide.md](curriculum/full-curriculum-guide.md) — all six
  modules sequenced in one document, with suggested grade bands and timing
- [module-01-observation.md](curriculum/module-01-observation.md)
- [module-02-sensors.md](curriculum/module-02-sensors.md)
- [module-03-soil-and-water.md](curriculum/module-03-soil-and-water.md)
- [module-04-sound-and-data.md](curriculum/module-04-sound-and-data.md)
- [module-05-ai-and-patterns.md](curriculum/module-05-ai-and-patterns.md)
- [module-06-community-observatory.md](curriculum/module-06-community-observatory.md)
- [module-07-observing-space.md](curriculum/module-07-observing-space.md) —
  `proposed`, extends the sequence into sky/space observation
- [teacher-guide.md](curriculum/teacher-guide.md)
- [student-workbook.md](curriculum/student-workbook.md)
- [field-notebook-model.md](curriculum/field-notebook-model.md)

## /accessibility/

- [accessibility-principles.md](accessibility/accessibility-principles.md)
- [sensory-stack.md](accessibility/sensory-stack.md)
- [blind-low-vision-mode.md](accessibility/blind-low-vision-mode.md)
- [keyboard-navigation.md](accessibility/keyboard-navigation.md)
- [tactile-learning.md](accessibility/tactile-learning.md)
- [sonification.md](accessibility/sonification.md)
- [captions-transcripts.md](accessibility/captions-transcripts.md)
- [wcag-checklist.md](accessibility/wcag-checklist.md)

## /hardware/

- [sensor-kit-overview.md](hardware/sensor-kit-overview.md)
- [parts-list.md](hardware/parts-list.md)
- [soil-sensing-station-bom-v1.md](hardware/soil-sensing-station-bom-v1.md) — **Core Student Station v1.0 BOM**; component roles, channel allocation, calibration requirements, accessibility rules, advanced EC/pH separation, and explicit pre-build validation state
- [soil-sensing-station-wiring-v1.md](hardware/soil-sensing-station-wiring-v1.md) — **authoritative text wiring/signal map** for Visual 05; moisture → ADS1115 → ESP32, DS18B20 1-Wire, SPI storage, accessible interface, optional network, and protected low-voltage power
- [arduino-guide.md](hardware/arduino-guide.md)
- [raspberry-pi-guide.md](hardware/raspberry-pi-guide.md)
- [soil-moisture.md](hardware/soil-moisture.md)
- [temperature-humidity.md](hardware/temperature-humidity.md)
- [audio-sensing.md](hardware/audio-sensing.md)
- [power-solar-battery.md](hardware/power-solar-battery.md)

## /software/

- [README.md](software/README.md)
- [data-schema.md](software/data-schema.md)
- [prototype-dashboard.md](software/prototype-dashboard.md)
- [p5-visualizations.md](software/p5-visualizations.md)
- [reasoning-layers.md](software/reasoning-layers.md)
- [ai-reflection-assistant.md](software/ai-reflection-assistant.md)
- [ai-boundaries.md](software/ai-boundaries.md)
- [offline-field-companion.md](software/offline-field-companion.md)

## /pilots/

- [pentaville-case-note.md](pilots/pentaville-case-note.md)
- [nyu-partnership-note.md](pilots/nyu-partnership-note.md) — `AWAITING
  FRAGMENT`, no confirmed partnership yet
- [pilot-as-research-site.md](pilots/pilot-as-research-site.md)
- [school-pilot-template.md](pilots/school-pilot-template.md)
- [museum-library-pilot-template.md](pilots/museum-library-pilot-template.md)
- [community-garden-pilot-template.md](pilots/community-garden-pilot-template.md)

## /schemas/

- [lab.schema.json](schemas/lab.schema.json)
- [curriculum.schema.json](schemas/curriculum.schema.json)
- [sensor-kit.schema.json](schemas/sensor-kit.schema.json)
- [pilot.schema.json](schemas/pilot.schema.json)
- [accessibility.schema.json](schemas/accessibility.schema.json)
- [research-study.schema.json](schemas/research-study.schema.json)

## /docs/

- [visual-language.md](docs/visual-language.md)
- [glossary.md](docs/glossary.md)
- [faq.md](docs/faq.md)
- [grant-language.md](docs/grant-language.md)
- [one-page-summary.md](docs/one-page-summary.md)
- [why-github.md](docs/why-github.md)
- [repository-review-checklist.md](docs/repository-review-checklist.md)
- [REPO_AUDIT.md](docs/REPO_AUDIT.md)

## Style system (locked — do not redesign)

- [variables.css](variables.css) — SSL/Omoluabi visual language tokens,
  shared across Small Systems Lab, Echo, Omoluabi, and Umada
- [site.css](site.css) — ESL's layout glue on top of the locked tokens

## Related

- [Small Systems Lab](https://ukadike.github.io/Small-Systems-Lab/) — parent
  hub
- [Accessible by Design](https://github.com/ukadike/accessible-by-design-prototyping)
  — accessibility research and tooling, linked from
  [ACCESSIBILITY.md](ACCESSIBILITY.md)

## Status

This index reflects the full documentation structure adopted per this
repository's research-lab expansion. Every file listed above exists in the
repository as of this pass. Where a file describes a `proposed` or
`AWAITING FRAGMENT` component, that status is stated in the file itself, not
hidden by its presence in this index.
