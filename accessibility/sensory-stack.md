# Sensory Stack

Every Earth Sensors Lab prototype should consider at least five sensory
layers:

1. **Visual layer** — charts, maps, diagrams, dashboards.
2. **Audio layer** — sonification, spoken summaries, environmental sound.
3. **Tactile layer** — raised diagrams, cards, textures, manipulatives.
4. **Language layer** — plain language, multilingual support, student
   explanation.
5. **Embodied layer** — field walking, touching soil, feeling heat,
   observing plants.

The goal is not to make one perfect interface. The goal is to create
multiple pathways into scientific understanding.

## How to use this stack

When designing or documenting a prototype, curriculum activity, or research
material, name which of the five layers it currently serves and which it
doesn't yet. A prototype serving only the visual layer is incomplete by this
framework's own standard — not disqualified, but flagged as a known gap to
close, per the "verify, don't assert" principle in
[accessibility-principles.md](accessibility-principles.md).

## Mapping current prototypes to the stack

| Prototype | Visual | Audio | Tactile | Language | Embodied |
|---|---|---|---|---|---|
| [Environmental Sensor Kit](../hardware/sensor-kit-overview.md) | — | — | concept (kit labeling) | — | yes (garden/field use) |
| [Accessible Data Dashboard](../software/prototype-dashboard.md) | concept | concept | — | concept | — |
| [p5.js Visualization](../software/p5-visualizations.md) | concept | — | — | — | — |
| [Sonification Tool](sonification.md) | — | concept | — | concept (spoken description) | — |
| [Tactile Data Card System](tactile-learning.md) | — | — | concept | concept (paired summary) | — |
| [Offline Field Companion](../software/offline-field-companion.md) | concept | — | — | concept | yes (field use) |
| [AI Reflection Assistant](../software/ai-reflection-assistant.md) | — | — | — | concept | — |

"Concept" means design intent is documented but nothing has been built or
tested; "—" means this layer has not yet been addressed in that prototype's
documentation at all. No cell in this table should be read as "done."

## Relationship to reasoning layers

This sensory stack answers *how* something can be perceived. The
[reasoning layers](../software/reasoning-layers.md) answer *what a learner
does* with what they perceive. Layer 7 of the reasoning layers
("Accessibility Translation") is where the two frameworks meet directly: it
asks how a given piece of reasoning can be re-expressed across this
five-layer stack.

## Status

Framework only. No prototype has been evaluated against this table by an
accessibility advisor with lived experience of the relevant disability or
language context — see the open items in
[blind-low-vision-mode.md](blind-low-vision-mode.md).
