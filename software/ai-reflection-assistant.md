# AI Reflection Assistant (Concept)

Concept documentation for a rule-based/AI tool that prompts student
reflection on sensor data. See [PROTOTYPES.md](../PROTOTYPES.md) entry 9. No
code exists yet.

## Purpose

Directly investigates *How can AI support student reflection without
replacing teacher judgment?* (see [RESEARCH_AGENDA.md](../RESEARCH_AGENDA.md)).
The primary curricular home for this concept is
[module-05-ai-and-patterns.md](../curriculum/module-05-ai-and-patterns.md).

## Concept requirements

- **Rule-based first, AI-assisted where it adds real value** — following the
  Small Systems Lab method's "Rule-Based Intelligence" principle (see
  [SSL-METHOD.md](../SSL-METHOD.md)): the tool should expose its own rules
  (e.g., "flag: reading outside expected range," "flag: sudden spike") rather
  than opaquely generating conclusions.
- **Reflection prompts, not grades or assessments** — output should be
  framed as questions or observations for a student to consider, never a
  score or evaluation of the student's work.
- **Transparent AI disclosure** — any AI-generated text must be clearly
  labeled as AI-assisted, per [ETHICS_AND_CONSENT.md](../ETHICS_AND_CONSENT.md).
- **"Do not overclaim" science checks** — the tool should be conservative
  about causal or definitive claims about environmental data, consistent
  with [SSL-METHOD.md](../SSL-METHOD.md).
- Output must meet the same plain-language and screen-reader accessibility
  baseline as any other classroom material.

## What it is not

Not a grading tool, not a replacement for teacher assessment, and not a
substitute for a student's own reasoning — see the reflection questions in
[module-05-ai-and-patterns.md](../curriculum/module-05-ai-and-patterns.md),
which explicitly ask students to evaluate the tool's output critically.

## Status

Concept documentation only. No prompt design, model choice, or working tool
exists yet. This is deliberately left undecided until accessibility and
ethics review (see [ETHICS_AND_CONSENT.md](../ETHICS_AND_CONSENT.md)) can
inform the design, rather than retrofitting review onto a built tool.

## Related documents

- [module-05-ai-and-patterns.md](../curriculum/module-05-ai-and-patterns.md)
- [ETHICS_AND_CONSENT.md](../ETHICS_AND_CONSENT.md)
- [SSL-METHOD.md](../SSL-METHOD.md)
