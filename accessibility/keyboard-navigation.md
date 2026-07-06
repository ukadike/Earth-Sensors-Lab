# Keyboard Navigation

Keyboard-only navigation is part of the accessibility baseline in
[ACCESSIBILITY.md](../ACCESSIBILITY.md). This document records the specific
requirements and current implementation status.

## Requirements

- Every interactive element (link, button, form field) must be reachable and
  operable using only the keyboard (Tab, Shift+Tab, Enter, Space, arrow keys
  where appropriate).
- Focus order must follow visual/logical reading order.
- A visible focus indicator must be present on every focusable element —
  never removed via CSS without a replacement.
- A skip-to-content link must be the first focusable element on any page.
- No functionality should depend on mouse-only interactions (hover-only
  menus, drag-only controls) without a keyboard equivalent.

## Current implementation

The GitHub Pages homepage (`index.html`) implements:

- A skip-link to `#main` as the first focusable element — which now also
  bypasses the primary navigation (SC 2.4.1 Bypass Blocks).
- A labeled primary navigation landmark (`<nav aria-label="Primary">`) with
  six links to the repository's key documents, in logical tab order, each
  padded to meet the SC 2.5.8 minimum target size.
- A global visible focus outline via `variables.css` (`--focus-outline`,
  applied through a `*:focus` rule and explicit rules for links, buttons, and
  inputs).
- No hover-only or mouse-only interactions — the page has no JavaScript and
  no drag/hover-dependent controls.

This has not yet been tested with an actual keyboard-only user session; the
above describes the implemented rules, not a completed usability test.

## Future prototypes

Any future software prototype (dashboard, AI reflection assistant, offline
companion) must meet the same requirements before it is described as
accessible. See [/software/](../software/) for current concept-stage
documentation — none of it is working code yet, so keyboard-navigation
compliance for those tools is `AWAITING FRAGMENT`.

## Related documents

- [ACCESSIBILITY.md](../ACCESSIBILITY.md)
- [wcag-checklist.md](wcag-checklist.md)
