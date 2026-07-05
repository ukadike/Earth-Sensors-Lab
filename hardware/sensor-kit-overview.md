# Sensor Kit Overview

The Environmental Sensor Kit is a prototype, low-cost kit for classroom and
garden environmental sensing. Nothing in `/hardware/` describes a finished,
shipped product — every document here is a prototype-kit specification, to
be built and tested, not a completed build.

## Purpose

Give students and teachers hands-on access to soil, temperature, humidity,
light, and sound sensing without requiring expensive lab equipment. See
[PROTOTYPES.md](../PROTOTYPES.md) entry 1.

## Kit components (prototype scope)

- Microcontroller: Arduino option (see [arduino-guide.md](arduino-guide.md))
  or Raspberry Pi option (see [raspberry-pi-guide.md](raspberry-pi-guide.md))
- Soil moisture sensor (see [soil-moisture.md](soil-moisture.md))
- Temperature/humidity sensor (see
  [temperature-humidity.md](temperature-humidity.md))
- Light sensor (photoresistor or similar — documented alongside
  temperature/humidity as a low-cost addition)
- Microphone / audio sensor (see [audio-sensing.md](audio-sensing.md))
- Power: battery or solar option (see
  [power-solar-battery.md](power-solar-battery.md))
- Enclosure/casing (weatherproofing and classroom-safety notes below)

## Enclosure / casing

- Prototype enclosures should protect electronics from moisture and soil
  contact while keeping sensors exposed to what they measure.
- No specific enclosure design has been finalized or tested — `OPEN
  QUESTION` on materials (3D-printed vs. off-the-shelf project box) and
  weatherproofing method.

## Classroom safety

- Low-voltage components only (battery or USB power, no mains voltage).
- Sensor probes that contact soil or water should use low-voltage,
  child-safe connectors.
- Enclosures should have no sharp edges and should be secured against
  tipping if placed in a garden bed accessible to young children.

## Maintenance

- Prototype kits will need periodic sensor recalibration and cleaning
  (especially soil moisture probes, which can corrode over time) — specific
  maintenance schedules are `AWAITING FRAGMENT` until a kit has actually been
  field-tested for a full season.

## Status

Prototype specification only. No complete kit has been assembled, tested in
a classroom, or evaluated for cost, durability, or accuracy as of this
writing. Full parts list in [parts-list.md](parts-list.md).

## Schema card

See [/schemas/sensor-kit.schema.json](../schemas/sensor-kit.schema.json) for
the machine-readable structure this kit's components follow.
