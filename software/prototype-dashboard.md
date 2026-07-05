# Accessible Data Dashboard (Concept)

Concept documentation for a dashboard to view sensor and curriculum data.
See [PROTOTYPES.md](../PROTOTYPES.md) entry 2. No code exists yet.

## Purpose

Let students and teachers view sensor readings and trends in a way that is
accessible from first implementation, not retrofitted — directly addressing
*How can blind and low-vision learners participate in data observation?*
(see [RESEARCH_AGENDA.md](../RESEARCH_AGENDA.md)).

## Concept requirements

- Every chart must have a screen-reader-readable data table equivalent and,
  where feasible, a sonified equivalent (see
  [/accessibility/sonification.md](../accessibility/sonification.md)).
- Full keyboard operability — see
  [/accessibility/keyboard-navigation.md](../accessibility/keyboard-navigation.md).
- High-contrast mode as a first-class display option, not a separate
  "accessible version."
- Printable, low-ink export for any view — see
  [/accessibility/tactile-learning.md](../accessibility/tactile-learning.md)
  for the tactile-card equivalent.
- Works from the shared [data-schema.md](data-schema.md) record shape,
  whether data came from manual entry or sensor import.

## What it is not

Not a general-purpose analytics product — scoped specifically to the sensor
types and curriculum use cases in this repository (soil moisture,
temperature, humidity, light, audio level; classroom and community
observatory contexts).

## Status

Concept documentation only. No frontend, backend, or data store has been
built. Implementation would begin only after
[data-schema.md](data-schema.md) is validated against real pilot data.

## Related documents

- [p5-visualizations.md](p5-visualizations.md) — a lighter-weight charting
  approach that may inform or precede a full dashboard
- [/accessibility/wcag-checklist.md](../accessibility/wcag-checklist.md)
