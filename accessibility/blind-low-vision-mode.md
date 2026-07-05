# Blind / Low-Vision Mode

Design notes for blind and low-vision participation in Earth Sensors Lab
activities, prototypes, and materials. This document describes design
intent for prototypes still in development — no working software has been
tested with blind or low-vision users yet.

## Research question

*How can blind and low-vision learners participate in data observation?*
(See [RESEARCH_AGENDA.md](../RESEARCH_AGENDA.md).) This document records
design intent toward that open question, not a validated answer.

## Design intent

- **Data dashboards** (see
  [/software/prototype-dashboard.md](../software/prototype-dashboard.md)):
  screen-reader-first markup, keyboard-only operability, and a sonified or
  spoken-summary view of every chart, not just a visual one.
- **Sensor readings**: available as spoken/audio output and, where feasible,
  tactile representation (see [tactile-learning.md](tactile-learning.md)),
  in addition to on-screen numeric display.
- **Curriculum activities**: sequenced so observation begins with senses
  other than sight are equally valid entry points (see
  [module-01-observation.md](../curriculum/module-01-observation.md)).
- **Physical sensor kits**: labeled and documented with tactile markers or
  distinct physical shapes for different sensor types, where the hardware
  design allows it (see [/hardware/](../hardware/) — an open item for kit
  design, not yet resolved).

## What "mode" means here

Not a separate, lesser experience — the same dashboard, curriculum, and kit
should work for blind and low-vision participants without a fundamentally
different, parallel version. Where full parity isn't yet achieved in a
prototype, that gap is recorded here as an open item, not hidden.

## Open items

- No prototype dashboard exists as working code yet to test screen-reader
  compatibility against — `OPEN QUESTION`.
- Tactile sensor-kit labeling has not been designed in physical form —
  `AWAITING FRAGMENT`.
- No blind or low-vision advisor has yet reviewed this document — recorded
  here as a gap, per [PARTNERSHIP_MODEL.md](../PARTNERSHIP_MODEL.md)
  "accessibility advisor."

## Related documents

- [ACCESSIBILITY.md](../ACCESSIBILITY.md)
- [sonification.md](sonification.md)
- [tactile-learning.md](tactile-learning.md)
- [wcag-checklist.md](wcag-checklist.md)
