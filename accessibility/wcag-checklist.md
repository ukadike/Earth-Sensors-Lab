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

The GitHub Pages homepage (`index.html`) implements semantic landmarks
(`header`, `nav`, `main`, `footer`), `aria-labelledby` sections, a skip
link, sequential headings, and a visible global focus outline via
`variables.css`.

### Code-level audit (July 2026)

A manual, code-level review against WCAG 2.2 AA was performed on the
homepage. Findings and fixes:

- **SC 1.4.3 Contrast (Minimum) — FAILED, fixed.** The shared
  `--color-muted` token (#6f6f6f) measured **4.25:1** against the paper
  background (#efece2) — below the 4.5:1 minimum for the normal-size
  `.text-meta` text that uses it. Fixed with an ESL-local override in
  `site.css` (#5f5f5f → 5.40:1 on paper, 6.39:1 on white), leaving the
  locked `variables.css` untouched. **Needs Kemi review** on whether the
  sibling repos sharing the token should adopt the same fix.
- **Navigation landmark — missing, added.** The page previously had no
  `<nav>` element; with 80+ documents now in the repository, a labeled
  primary navigation landmark (`aria-label="Primary"`) was added, with
  targets padded to meet SC 2.5.8 Target Size (Minimum).
- **Link destinations — raw markdown, fixed.** Links to `.md` files
  resolved to raw markdown source on GitHub Pages (an unstructured text
  wall for screen readers). Now pointed at GitHub's rendered view, which
  exposes proper heading structure.
- Passing on review: skip link (2.4.1), heading order (1.3.1), focus
  visibility (2.4.7), no color-only meaning (1.4.1), no keyboard traps
  (2.1.2), text resize without viewport lock (1.4.4), ink-on-paper body
  contrast at 14.7:1 (1.4.3/1.4.6), no flashing content (2.3.1), no
  hover-only or drag-only interactions (2.1.1, 2.5.7).

### What this audit is not

This was a manual code review with computed contrast ratios — **not**
testing with a real screen reader, a keyboard-only user session, or an
assistive-technology user. Those remain `AWAITING FRAGMENT`. A code-level
pass can catch mechanical failures (it caught one); it cannot confirm the
page actually works well with assistive technology.

## Auditing

A full audit using real assistive technology and, ideally, testers with
lived disability experience is still needed. See
[Accessible by Design](https://github.com/ukadike/accessible-by-design-prototyping)
for audit methods this lab intends to reuse rather than re-derive.
