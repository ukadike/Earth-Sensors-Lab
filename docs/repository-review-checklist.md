# Repository Review Checklist

Claude Code — and any human contributor — should check the following before
and after significant edits to this repository. This checklist is a
self-audit tool, not a one-time gate; re-run it whenever the repository
changes substantially.

- Does the repo clearly say this is research?
- Does it avoid sounding like a paid STEM camp?
- Are accessibility commitments visible from the homepage?
- Are research questions explicit?
- Are pilots framed as learning sites?
- Are prototypes marked as prototypes?
- Are schools treated as partners, not customers?
- Are disabled learners centered without being tokenized?
- Is AI bounded and responsible?
- Is there enough grant-ready language?
- Is there enough university-ready language?
- Does every major component have a schema card?

## Self-review (as of this depth pass)

- **Does the repo clearly say this is research?** Yes — README.md opens with
  "accessible STEAM research initiative"; MISSION.md, RESEARCH_AGENDA.md
  (now with a full Research Thesis and seven pillars), and CLAUDE.md all
  reinforce this.
- **Does it avoid sounding like a paid STEM camp?** Yes — PARTNERSHIP_MODEL.md
  states this explicitly and now includes the "schools as research partners,
  not customers" section; the tone rules in CLAUDE.md explicitly ban "fun
  STEM camp" language.
- **Are accessibility commitments visible from the homepage?** Partially —
  `index.html`'s Accessibility Baseline section lists the commitments, but
  ties less directly to the "accessibility is a research method" argument
  now in ACCESSIBILITY.md than the Markdown documentation does. Homepage
  copy could be strengthened further — **flagged for future review**, not
  fixed in this pass to avoid touching the locked visual system beyond
  content.
- **Are research questions explicit?** Yes — RESEARCH_AGENDA.md and
  research/research-questions.md.
- **Are pilots framed as learning sites?** Yes — PILOT_MODEL.md plus the new
  pilots/pilot-as-research-site.md.
- **Are prototypes marked as prototypes?** Yes — PROTOTYPES.md status column,
  consistently applied.
- **Are schools treated as partners, not customers?** Yes — see
  PARTNERSHIP_MODEL.md and pilots/pentaville-case-note.md.
- **Are disabled learners centered without being tokenized?** Partially —
  ACCESSIBILITY.md and the /accessibility/ folder center design intent, but
  every relevant file also flags that no advisor with lived disability
  experience has reviewed the work yet. This is treated as an open gap
  rather than resolved; overclaiming "centered" without that review would
  itself risk tokenizing. **Needs a real accessibility advisor
  relationship — see PARTNERSHIP_MODEL.md "accessibility advisor" partner
  type.**
- **Is AI bounded and responsible?** Yes — software/ai-boundaries.md, tied to
  ETHICS_AND_CONSENT.md and SSL-METHOD.md.
- **Is there enough grant-ready language?** Reasonable — docs/grant-language.md
  and docs/one-page-summary.md exist; budget-specific language remains
  `AWAITING FRAGMENT` (see ROADMAP.md Phase 4) since no real figures exist.
- **Is there enough university-ready language?** Reasonable — see
  pilots/nyu-partnership-note.md and PARTNERSHIP_MODEL.md's university
  research partner row; still `AWAITING FRAGMENT` on any specific,
  confirmed university relationship.
- **Does every major component have a schema card?** Yes, as of the schema-card
  pass — all ten prototypes in PROTOTYPES.md now carry a filled card
  (audience, accessibility requirements, inputs, outputs, materials, data
  collected, consent needs, risks, next steps), following
  [/schemas/lab.schema.json](../schemas/lab.schema.json). Curriculum modules
  (including the newer [Module 7](../curriculum/module-07-observing-space.md))
  carry the equivalent structure natively via
  [curriculum.schema.json](../schemas/curriculum.schema.json)'s fields
  (learning goals, materials, accessibility notes, activity, reflection
  questions, research notes, teacher adaptation notes), so they were not
  double-carded. Pilot templates in /pilots/ are intentionally blank
  templates (per [pilot.schema.json](../schemas/pilot.schema.json)) —
  filled only once a real pilot exists, which is correct, not a gap.

## How to use this checklist going forward

Run through the twelve questions above after any substantial documentation
change. Where an answer is "no" or "partially," either fix it in the same
pass or record it as an explicit open item elsewhere in the repository (as
done above) — never leave a "no" unstated.
