# Data Schema (Concept)

The shared shape sensor and curriculum data should take across every future
Earth Sensors Lab software tool. This is a design concept, not an
implemented or enforced schema yet — see
[/schemas/](../schemas/) for the machine-readable JSON Schema drafts this
concept maps to.

## Core reading record (concept)

A single sensor reading, conceptually, should carry:

- `site_id` — which observation site this belongs to (school, garden,
  classroom), never a personally identifying student ID
- `sensor_type` — e.g., `soil_moisture`, `temperature`, `humidity`, `light`,
  `audio_level`
- `value` — the numeric (or categorical, for some sensor types) reading
- `unit` — the unit the value is expressed in
- `timestamp` — when the reading was taken
- `source` — `manual_entry` or `sensor_import`, distinguishing hand-entered
  observations from kit-collected data
- `notes` — optional plain-language observation accompanying the reading

## Design principles

- **No personally identifying student data** in any reading record — site-
  and class-level identifiers only, per
  [ETHICS_AND_CONSENT.md](../ETHICS_AND_CONSENT.md).
- **Manual entry and sensor import share the same record shape** — so a
  classroom without a kit (using [student-workbook.md](../curriculum/student-workbook.md))
  produces data compatible with one that has a working prototype kit.
- **Every value should be representable as chart, sound, and tactile/print
  summary** from the same underlying record — not three separate data
  formats. See [prototype-dashboard.md](prototype-dashboard.md).

## Status

Concept only. No database, API, or file format has been implemented. The
JSON Schema drafts in [/schemas/](../schemas/) are a starting structural
sketch, not a finalized or validated schema.

## Related documents

- [/schemas/sensor-kit.schema.json](../schemas/sensor-kit.schema.json)
- [/schemas/research-study.schema.json](../schemas/research-study.schema.json)
- [ETHICS_AND_CONSENT.md](../ETHICS_AND_CONSENT.md)
