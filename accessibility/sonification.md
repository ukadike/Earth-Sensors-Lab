# Sonification

Design notes for representing environmental sensor data as sound, so trends
are audible and not only visible.

## Research question

*Can sound and touch make environmental data more understandable?* (See
[RESEARCH_AGENDA.md](../RESEARCH_AGENDA.md).) This document is the primary
design record toward that question on the sound side; see
[tactile-learning.md](tactile-learning.md) for the touch side.

## Design intent

- Map a data variable (e.g., soil moisture over time) to an audible
  parameter (e.g., pitch, tempo, or volume) so a rising or falling trend is
  audibly distinguishable.
- Keep mappings simple and consistent across the toolkit — one variable, one
  audible parameter, rather than complex multi-parameter mixes that are hard
  to learn.
- Pair every sonification with a plain-language spoken or text description
  of what's being heard and why, so the sound is interpretable rather than
  purely aesthetic.
- Design for classroom use: short, clear audio clips rather than long
  ambient soundscapes, so a sonified reading fits into a lesson period.

## Relationship to curriculum

[Module 4](../curriculum/module-04-sound-and-data.md) ("Data as Story /
Sounding the Environment") is the primary curricular test bed for
sonification — comparing a visual chart, a sonified version, and the
environment's own recorded sound for the same trend.

## Status

Concept documentation only — see
[/software/p5-visualizations.md](../software/p5-visualizations.md) and the
Sensor Sonification Tool entry in [PROTOTYPES.md](../PROTOTYPES.md). No
sonification tool has been built or tested with students yet.

## Open items

- Specific sound-mapping choices (which parameter maps to which variable)
  are undecided — `OPEN QUESTION`, to be resolved with input from
  accessibility advisors and pilot feedback, not decided unilaterally here.
- No hearing-impaired or Deaf accessibility review has occurred yet; captions
  and transcripts for any sonification demo are required per
  [captions-transcripts.md](captions-transcripts.md).

## Related documents

- [ACCESSIBILITY.md](../ACCESSIBILITY.md)
- [tactile-learning.md](tactile-learning.md)
- [/software/prototype-dashboard.md](../software/prototype-dashboard.md)
