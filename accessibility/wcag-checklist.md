# WCAG 2.2 AA Checklist

The concrete, auditable checklist the [ACCESSIBILITY.md](../ACCESSIBILITY.md)
baseline maps to. This checklist applies to any web-based Earth Sensors Lab
material (the GitHub Pages homepage today; future dashboards and tools as
they're built).

## Perceivable

- [ ] Text alternatives for all non-text content (alt text, captions,
      transcripts).
- [ ] Content is not conveyed by color alone.
- [ ] Text has sufficient contrast against its background (4.5:1 minimum for
      body text, 3:1 for large text).
- [ ] Text can be resized up to 200% without loss of content or function.

## Operable

- [ ] All functionality available via keyboard alone (see
      [keyboard-navigation.md](keyboard-navigation.md)).
- [ ] No keyboard traps.
- [ ] Visible focus indicator on every focusable element.
- [ ] Skip-to-content link present.
- [ ] No content that flashes more than three times per second.
- [ ] Consistent, predictable navigation across pages.

## Understandable

- [ ] Plain-language summaries available alongside technical content.
- [ ] Form fields (where present) have clear labels and error messages.
- [ ] Navigation and interaction patterns are consistent site-wide.

## Robust

- [ ] Semantic HTML landmarks (`header`, `main`, `nav`, `footer`).
- [ ] Valid, well-formed markup.
- [ ] Compatible with current screen readers (tested, not assumed).

## Current status

The GitHub Pages homepage (`index.html`) implements semantic landmarks,
`aria-labelledby` sections, a skip link, sequential headings, and a visible
global focus outline via `variables.css`. It has not yet been tested with an
actual screen reader or automated accessibility scanner — this checklist
records intended compliance, not a completed audit.

## Auditing

An accessibility audit against this checklist, using real assistive
technology (not automated tools alone), is `AWAITING FRAGMENT` — no such
audit has been performed on this repository's site yet. See
[Accessible by Design](https://github.com/ukadike/accessible-by-design-prototyping)
for audit methods this lab intends to reuse rather than re-derive.
