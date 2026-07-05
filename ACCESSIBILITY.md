# Accessibility

Accessibility is infrastructure, not an add-on. It is a core research layer
of Earth Sensors Lab: one of the questions the lab studies is how accessible
sensing systems can support STEAM learning, not just whether an interface
happens to pass a checklist afterward.

## Baseline commitments

- WCAG 2.2 AA minimum across all digital materials
- Keyboard-only navigation
- High contrast mode
- Screen reader compatibility
- Alt text for all visuals
- Captions for all videos
- Transcripts for all audio
- Tactile diagrams where possible
- Sonified data
- Printable low-ink materials
- Plain-language summaries
- Multilingual readiness
- Offline-first field use

## Why this is a research layer, not a checklist

Standard accessibility checklists assume a finished product. Earth Sensors
Lab is asking earlier questions: how do you sonify a soil-moisture reading so
it's meaningful, not just audible? What does a tactile version of a
temperature trend actually communicate? These are open research questions,
tracked in [RESEARCH_AGENDA.md](RESEARCH_AGENDA.md), not solved problems.

## Structure

Detailed guides live in [/accessibility/](accessibility/):

- [accessibility-principles.md](accessibility/accessibility-principles.md) —
  the principles behind the baseline above
- [blind-low-vision-mode.md](accessibility/blind-low-vision-mode.md) — design
  notes for blind and low-vision participation
- [keyboard-navigation.md](accessibility/keyboard-navigation.md)
- [tactile-learning.md](accessibility/tactile-learning.md)
- [sonification.md](accessibility/sonification.md)
- [captions-transcripts.md](accessibility/captions-transcripts.md)
- [wcag-checklist.md](accessibility/wcag-checklist.md) — the concrete,
  auditable checklist this baseline maps to

## Relationship to Accessible by Design

This baseline follows the same inclusive-design principles as [Accessible by
Design](https://github.com/ukadike/accessible-by-design-prototyping), the
Small Systems Lab branch for accessibility research, audits, and tooling.
Where that repository has established patterns (audit methods, tooling),
Earth Sensors Lab reuses rather than re-derives them.

## What this does not claim

No accessibility audit of any Earth Sensors Lab prototype has been completed
yet — hardware and software here are prototypes and concepts, not shipped
products. Claims of "WCAG 2.2 AA compliant" apply to the documentation site
(`index.html`) and will be verified against actual software as it is built,
not asserted in advance. See [PROTOTYPES.md](PROTOTYPES.md) for status.
