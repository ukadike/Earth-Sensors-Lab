# Reasoning Layers

Earth Sensors Lab software should eventually include reasoning layers, not
just dashboards. A dashboard that only displays a number answers "what is
the reading" — it does not help a student move from noticing something to
understanding it. These layers are the intended structure for that
movement, across any future software (dashboard, AI reflection assistant, or
offline companion).

## Layer 1: Observation

What did we notice?

## Layer 2: Measurement

What did the sensor record?

## Layer 3: Pattern

What changed over time?

## Layer 4: Comparison

How does this compare to another place, day, plant, or condition?

## Layer 5: Explanation

What might be causing the pattern?

## Layer 6: Uncertainty

What do we not know yet?

## Layer 7: Accessibility Translation

How can this same data be understood through sound, touch, text, image, or
speech?

## Layer 8: Community Meaning

Why does this matter here?

## Layer 9: Action

What could students, teachers, or communities do next?

## Why layers, and why this order

Observation and Measurement are kept as separate layers deliberately — see
[/research/what-counts-as-data.md](../research/what-counts-as-data.md) — so
a student's own noticing is never treated as a lesser precursor to "real"
sensor data. Uncertainty (Layer 6) is placed before Accessibility
Translation and Community Meaning intentionally: what a tool doesn't know
should be carried through into how the data is explained and applied, not
dropped once a pattern is found.

## Relationship to curriculum

These layers map roughly onto the curriculum sequence in
[CURRICULUM.md](../CURRICULUM.md): Module 1 (Observation Before
Measurement) and Module 2 (What Is a Sensor?) correspond to Layers 1–2;
Module 4 (Data as Story) to Layers 3–4; Module 5 (AI as Pattern Assistant)
to Layers 5–6; and Module 6 (Community Science) to Layers 8–9. Layer 7
(Accessibility Translation) applies across every module, not to one in
particular — see [/accessibility/sensory-stack.md](../accessibility/sensory-stack.md).

## Relationship to AI

Any AI-assisted tool built against these layers must stay within the limits
in [ai-boundaries.md](ai-boundaries.md) — in particular, Layer 5
(Explanation) and Layer 6 (Uncertainty) are exactly where an AI tool could
overstate a scientific claim if not bounded carefully.

## Status

Concept documentation only. No software currently implements any of these
layers — see [PROTOTYPES.md](../PROTOTYPES.md) for the concept-stage status
of the dashboard, visualization, and AI reflection assistant this framework
would eventually structure.
