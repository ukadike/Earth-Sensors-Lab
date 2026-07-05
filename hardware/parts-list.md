# Parts List

Prototype parts list for the Environmental Sensor Kit (see
[sensor-kit-overview.md](sensor-kit-overview.md)). No specific vendor,
price, or part number is asserted here as final — this is a category-level
list pending a real build and cost pass.

## Core components

| Category | Example part type | Notes |
|---|---|---|
| Microcontroller | Arduino Uno/Nano, or Raspberry Pi (Zero/4) | See [arduino-guide.md](arduino-guide.md), [raspberry-pi-guide.md](raspberry-pi-guide.md) for tradeoffs |
| Soil moisture sensor | Capacitive soil moisture probe | Capacitive preferred over resistive to reduce corrosion — see [soil-moisture.md](soil-moisture.md) |
| Temperature/humidity sensor | Digital combined sensor (e.g., DHT-class or similar) | See [temperature-humidity.md](temperature-humidity.md) |
| Light sensor | Photoresistor (LDR) or digital light sensor | Low-cost option for microclimate readings |
| Audio sensor | Electret microphone module | See [audio-sensing.md](audio-sensing.md) — environmental/biodiversity sound only |
| Power | Battery pack or small solar panel + charge controller | See [power-solar-battery.md](power-solar-battery.md) |
| Enclosure | Weatherproof project box | Materials undecided — see [sensor-kit-overview.md](sensor-kit-overview.md) |
| Wiring/connectors | Low-voltage jumper wires, weatherproof connectors | Child-safe, low-voltage only |

## What's intentionally not specified yet

- Specific vendor/part numbers — pending a real prototype build and cost
  comparison.
- Total kit cost — `AWAITING FRAGMENT` until parts are actually sourced.
- Quantities per classroom — depends on pilot design (see
  [PILOT_MODEL.md](../PILOT_MODEL.md)).

## Status

Category-level prototype list only. Use [CONTRIBUTING.md](../CONTRIBUTING.md)
to propose specific parts once someone has actually sourced and tested them.
