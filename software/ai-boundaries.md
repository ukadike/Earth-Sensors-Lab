# AI Boundaries

AI in Earth Sensors Lab should not replace teachers, students, or local
knowledge.

## AI may help

- summarize observations
- suggest questions
- identify possible patterns
- translate technical language
- generate accessible descriptions
- support reflection

## AI must not

- grade students automatically
- make unsupported scientific claims
- override teacher judgment
- collect unnecessary student data
- present speculation as fact
- erase local ecological knowledge

## Why these specific boundaries

- **No automatic grading:** grading is a judgment about a specific student
  that carries real consequences; an AI tool trained on general patterns has
  no legitimate basis for making that call, and doing so would violate the
  "AI supports reflection, does not replace teacher judgment" principle
  already stated in [ETHICS_AND_CONSENT.md](../ETHICS_AND_CONSENT.md).
- **No unsupported scientific claims:** directly enforces the "do not
  overclaim" rule from [SSL-METHOD.md](../SSL-METHOD.md) at the AI layer
  specifically, where confident-sounding generated text is most likely to be
  mistaken for verified fact.
- **No overriding teacher judgment:** consistent with
  [module-05-ai-and-patterns.md](../curriculum/module-05-ai-and-patterns.md),
  which treats AI output as something to be critically evaluated by the
  class, never as a final answer.
- **No unnecessary student data collection:** enforces the data-minimization
  principle in [ETHICS_AND_CONSENT.md](../ETHICS_AND_CONSENT.md) at the AI
  layer — an AI tool is not exempt from that rule just because it might use
  more data if given it.
- **No presenting speculation as fact:** connects directly to Layer 6
  (Uncertainty) of the [reasoning layers](reasoning-layers.md) — an AI tool
  should surface what it doesn't know, not smooth over it.
- **No erasing local ecological knowledge:** an AI tool trained on general
  or non-local data could plausibly contradict or crowd out a community's
  own observations about their specific site; this boundary requires any
  such tool to treat local knowledge (see
  [/research/what-counts-as-data.md](../research/what-counts-as-data.md)) as
  at least as authoritative as its own output, not subordinate to it.

## Enforcement

These boundaries apply to any AI-assisted tool documented in this
repository, currently the
[AI Reflection Assistant](ai-reflection-assistant.md) concept. Before any
working implementation is built, its design should be checked against this
list explicitly — not assumed compliant because it was "designed
responsibly."

## Status

Policy documentation only. No AI tool has been implemented yet — see
[PROTOTYPES.md](../PROTOTYPES.md) for current status.

## Related documents

- [ai-reflection-assistant.md](ai-reflection-assistant.md)
- [reasoning-layers.md](reasoning-layers.md)
- [ETHICS_AND_CONSENT.md](../ETHICS_AND_CONSENT.md) — "AI transparency"
- [SSL-METHOD.md](../SSL-METHOD.md) — "Rule-Based Intelligence"
