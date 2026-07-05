# p5.js Sensor Visualization (Concept)

Concept documentation for lightweight, browser-based charting of sensor data
using p5.js, without a build step. See [PROTOTYPES.md](../PROTOTYPES.md)
entry 3. No code exists yet.

## Purpose

A low-friction way for a classroom to visualize sensor readings directly in
a browser, with no install or build process — appropriate for
low-bandwidth, low-infrastructure sites consistent with the offline-first
goal in [ACCESSIBILITY.md](../ACCESSIBILITY.md).

## Concept requirements

- Single HTML file plus a p5.js include, mirroring the no-build-step
  approach already used by this repository's own GitHub Pages site
  (`index.html` + `site.css` + `variables.css`).
- Every visual chart element must have a text/data-table alternative
  rendered alongside it, not only a canvas-drawn graphic (canvas content is
  not natively screen-reader accessible).
- Reads from the shared [data-schema.md](data-schema.md) record shape.
- Should degrade gracefully with small data sets (a single classroom's few
  days of readings) as well as larger community-observatory data sets.

## Relationship to the dashboard concept

This is conceived as a simpler, classroom-embeddable alternative or
precursor to the fuller [prototype-dashboard.md](prototype-dashboard.md) —
not a replacement for its accessibility requirements, which apply equally
here.

## Status

Concept documentation only. No p5.js sketch has been written or tested.

## Related documents

- [data-schema.md](data-schema.md)
- [prototype-dashboard.md](prototype-dashboard.md)
- [/accessibility/wcag-checklist.md](../accessibility/wcag-checklist.md)
