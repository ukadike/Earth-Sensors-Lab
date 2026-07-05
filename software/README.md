# Software

This folder documents the future software layer of Earth Sensors Lab:
concepts, data schema, and interface rules for the accessible dashboard,
visualization, AI reflection assistant, and offline field companion named in
[PROTOTYPES.md](../PROTOTYPES.md).

No working code exists in this repository yet. Everything here is
documentation for future implementation, per the "no need to overbuild yet"
guidance in this repository's brief.

## Contents

- [data-schema.md](data-schema.md) — the shape sensor and curriculum data
  should take, shared across every other software document here
- [prototype-dashboard.md](prototype-dashboard.md) — accessible data
  dashboard concept
- [p5-visualizations.md](p5-visualizations.md) — lightweight browser-based
  charting concept
- [ai-reflection-assistant.md](ai-reflection-assistant.md) — rule-based/AI
  reflection tool concept
- [offline-field-companion.md](offline-field-companion.md) — offline-first
  field data entry concept

## What the software should eventually support

- manual data entry
- sensor data import
- visual charts
- sonified charts
- tactile/printable summaries
- student reflections
- teacher annotations
- research export

## Accessible interface rules

Any future code in this folder must meet
[ACCESSIBILITY.md](../ACCESSIBILITY.md) and the specific checklist in
[/accessibility/wcag-checklist.md](../accessibility/wcag-checklist.md) before
it is described as accessible — not asserted as accessible by default because
it was "designed with accessibility in mind."

## License note

Once real source code is added here, see [LICENSE.md](../LICENSE.md) for how
its license will be determined — currently marked TBD, since no code exists
yet to license.
