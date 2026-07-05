# Offline Field Companion (Concept)

Concept documentation for an offline-first tool for recording field
observations without reliable internet. See
[PROTOTYPES.md](../PROTOTYPES.md) entries 6 (Student Field Companion) and 10
(Offline Garden Lab). No code exists yet.

## Purpose

Directly investigates *How can schools participate in research without
carrying the financial burden of experimentation?* — a site without
reliable internet or a technology budget should not be excluded from
participating in Earth Sensors Lab curriculum or pilots.

## Concept requirements

- **Works with zero connectivity** — data entry, storage, and basic viewing
  must function fully offline; syncing to a shared or research view is an
  optional, later step, not a requirement for basic use.
- **Paper-compatible** — the [student-workbook.md](../curriculum/student-workbook.md)
  recording pages should be usable as a complete fallback with no digital
  tool at all; the digital companion is an enhancement, not a replacement.
- **Low-cost hardware compatible** — should run on the same
  [Arduino](../hardware/arduino-guide.md)/[Raspberry Pi](../hardware/raspberry-pi-guide.md)
  options documented for the sensor kit, or on a basic shared classroom
  device, not require a dedicated high-spec device per student.
- Reads and writes the shared [data-schema.md](data-schema.md) record shape,
  so offline-recorded data merges cleanly with sensor-imported data once (if
  ever) synced.

## Two variants under this concept

- **Student Field Companion** — individual or small-group observation
  recording during a curriculum activity.
- **Offline Garden Lab** — a more persistent, site-level version supporting
  an ongoing [community observatory](../curriculum/module-06-community-observatory.md).

## Status

Concept documentation only, `proposed`/`in development` per
[PROTOTYPES.md](../PROTOTYPES.md). No app, interface, or storage format has
been built.

## Related documents

- [data-schema.md](data-schema.md)
- [/curriculum/student-workbook.md](../curriculum/student-workbook.md)
- [/hardware/power-solar-battery.md](../hardware/power-solar-battery.md)
