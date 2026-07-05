# Soil Moisture Sensor

Prototype documentation for the soil moisture component of the sensor kit
(see [sensor-kit-overview.md](sensor-kit-overview.md)).

## What it measures

Relative soil moisture — typically via capacitance (preferred) or
resistance (cheaper, but corrodes faster) between two probes inserted into
soil.

## Why capacitive over resistive

Resistive probes pass current directly through the soil via exposed metal
and corrode within weeks of regular use, especially outdoors. Capacitive
probes are coated and last substantially longer — recommended default for
any classroom or garden deployment expected to run more than a few weeks.

## Classroom / curriculum use

Primary hardware reference for
[module-03-soil-and-water.md](../curriculum/module-03-soil-and-water.md) and
[module-02-sensors.md](../curriculum/module-02-sensors.md).

## Accessibility notes

Readings should be exposed as a spoken/numeric value and, where a tactile
card system exists, as a tactile representation — see
[/accessibility/tactile-learning.md](../accessibility/tactile-learning.md).
Raw sensor output is not itself accessible; the translation step (per
[module-02-sensors.md](../curriculum/module-02-sensors.md)) is where
accessibility is designed in.

## Maintenance

- Corrosion is the primary failure mode — even capacitive probes should be
  inspected each growing season.
- Calibration (dry-soil and wet-soil reference readings) is needed per
  sensor unit, not assumed uniform out of the box — specific calibration
  procedure is `AWAITING FRAGMENT` until a real unit has been tested.

## Status

Concept-stage documentation. No specific unit has been tested or calibrated
as of this writing.
