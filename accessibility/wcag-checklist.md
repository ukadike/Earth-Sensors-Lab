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

### Browser-based verification (July 2026, same pass)

Following the code review, the homepage was loaded in Chromium and tested
with axe-core against WCAG 2.0/2.1/2.2 A and AA rules plus best practices:
**zero violations, zero incomplete checks.** A scripted keyboard walk
confirmed: skip link is the first tab stop and is visible when focused,
tab order follows reading order through the nav and all content links,
every stop shows the 2px focus outline, and the page produces no
horizontal scroll at a 320px viewport (SC 1.4.10 Reflow).

### What this audit is not

Code review plus an automated browser scan and scripted keyboard walk —
**not** testing with a real screen reader or an assistive-technology user.
Automated tools catch mechanical failures (this pass caught and fixed a
contrast failure); they cannot confirm the page actually works well for a
person using assistive technology. Human testing is the remaining step.

### Re-verification against WCAG 2.1 AA (July 20, 2026)

An independent re-audit against WCAG 2.1 A/AA was run on `index.html`,
`site.css`, and `variables.css` — the full set of web content in this
repository (no other `.html`, `.js`, or template files exist yet). Method:
axe-core 4.10 injected into a headless Chromium page (via Playwright),
scoped to the `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, and `best-practice`
rule sets; a scripted `Tab`-key walk through all interactive elements; a
320px-viewport reflow check; and a 200%-text-zoom reflow check (SC 1.4.4/
1.4.10). Manual review covered heading order, landmark structure, list
markup, form labelling (no forms exist), link-text quality, language
attribute, ARIA usage, and computed contrast ratios for every color pair
in `variables.css`/`site.css` actually used on the page.

**Result: 0 violations, 0 incomplete checks, 32 passes.** No `<img>`
elements exist on the page yet, so SC 1.1.1 is not currently exercised —
tracked as `AWAITING FRAGMENT` for when visuals are added, not asserted as
compliant in advance. Keyboard walk confirmed the skip link is the first
stop and becomes visible on focus, tab order matches reading order through
nav and all content links, and every stop shows the 2px ink-colored focus
outline. No horizontal scroll appeared at 320px width or at 200% text zoom.

Two additional items came out of this pass:

- **Fixed — motion safeguard (SC 2.3.3, AAA).** Nothing on the page
  currently animates (the shared `--transition` token is already `none`),
  so there was no active failure. Added a `prefers-reduced-motion: reduce`
  block to `site.css` anyway, forcing any transition/animation added later
  to near-zero duration, so a future change doesn't silently reintroduce
  motion for users who've asked to avoid it.
- **Open, not fixed — decorative divider/border contrast is low
  (informational, not a failure).** The shared `--color-line` token
  (`#d0cdc6`) measures **~1.34:1** against `--color-paper` (used by
  `.site-nav` and `hr.divider`) and **~1.59:1** against white (used by
  `.card`'s border) — both well under the 3:1 floor in SC 1.4.11. This is
  **not currently a violation**: every place `--border-thin` is used on
  this page is purely decorative (a hairline separator or card outline),
  and no component's identity or state depends on seeing that line — axe
  agrees (0 violations). It would become a real failure if a future page
  ever relies on this border color alone to convey a UI boundary or state.
  Left as an ESL-local flag rather than fixed, per repo rule: `--color-line`
  is a shared token defined in the locked `variables.css`, and a contrast
  bump belongs at the source (Small Systems Lab) if it's ever needed, the
  same way the `--color-muted` override above was flagged rather than
  pushed upstream unilaterally. **Needs Kemi review** if/when Small Systems
  Lab wants to reconsider `--color-line`.

## Auditing

A full audit using real assistive technology and, ideally, testers with
lived disability experience is still needed. See
[Accessible by Design](https://github.com/ukadike/accessible-by-design-prototyping)
for audit methods this lab intends to reuse rather than re-derive.
