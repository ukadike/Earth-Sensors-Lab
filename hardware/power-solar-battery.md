# Power: Solar / Battery Option

Prototype documentation for powering the sensor kit off-grid (see
[sensor-kit-overview.md](sensor-kit-overview.md)).

## Why off-grid power matters

A core design goal (see [MISSION.md](../MISSION.md) and
[RESEARCH_AGENDA.md](../RESEARCH_AGENDA.md), "How can schools participate in
research without carrying the financial burden of experimentation?") is that
the kit should work at sites without reliable power or internet — a school
garden, a community plot, a remote observation point.

## Options under consideration

- **Battery pack (rechargeable)** — simplest option, good for
  [Arduino](arduino-guide.md)-based builds with low power draw; requires
  periodic manual recharging.
- **Small solar panel + charge controller** — supports longer unattended
  deployment (e.g., a community garden observatory, see
  [module-06-community-observatory.md](../curriculum/module-06-community-observatory.md)),
  at added cost and complexity.

## Tradeoffs

- Solar adds cost, a charge controller, and a point of failure (controller,
  panel wiring) versus a simple battery pack — appropriate for
  longer-duration or higher-autonomy deployments, not necessarily for a
  short classroom unit.
- [Raspberry Pi](raspberry-pi-guide.md) builds draw meaningfully more power
  than [Arduino](arduino-guide.md) builds, which affects battery life and
  solar panel sizing — no specific sizing has been calculated yet.

## Classroom safety

Low-voltage battery and solar systems only — no mains-voltage components in
any Earth Sensors Lab kit design, per the safety note in
[sensor-kit-overview.md](sensor-kit-overview.md).

## Status

Concept-stage documentation. No specific battery capacity, solar panel size,
or runtime has been tested as of this writing — `AWAITING FRAGMENT` pending a
real prototype build.
