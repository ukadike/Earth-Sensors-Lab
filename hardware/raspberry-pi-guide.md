# Raspberry Pi Option

The second of two prototype microcontroller options for the sensor kit (see
[sensor-kit-overview.md](sensor-kit-overview.md); compare to
[arduino-guide.md](arduino-guide.md)).

## Why Raspberry Pi as an option

- Runs a full operating system — can host a local dashboard (see
  [/software/prototype-dashboard.md](../software/prototype-dashboard.md)) or
  run reflection/AI tooling directly on-device rather than needing a
  separate computer.
- Built-in networking (Wi-Fi on most models) makes it easier to sync data to
  a shared or classroom-level view, when connectivity is available.
- Larger community of accessible-software tooling (screen readers, etc.) if
  the device itself is used as a student-facing interface, not just a
  sensor logger.

## Tradeoffs versus Arduino

- Higher power draw — a harder fit for solar/battery-only, fully offline
  deployments (see [power-solar-battery.md](power-solar-battery.md)).
- More complex to set up (OS install, software dependencies) — a higher
  barrier for a classroom with limited technical support.
- Better suited to sites with reasonably reliable power and, ideally,
  connectivity — e.g., a museum or library observatory installation rather
  than a fully offline garden site.

## Prototype build notes

- Sensors typically connect via GPIO pins (digital sensors) or through an
  analog-to-digital converter module (for analog sensors like basic soil
  moisture probes, since the Pi has no native analog input).
- No specific wiring diagram or software stack is finalized — `AWAITING
  FRAGMENT` until a real prototype has been built and tested.

## Status

Concept-stage documentation. No Raspberry Pi-based prototype has been built
or tested as of this writing.

## Related documents

- [parts-list.md](parts-list.md)
- [/software/prototype-dashboard.md](../software/prototype-dashboard.md)
- [power-solar-battery.md](power-solar-battery.md)
