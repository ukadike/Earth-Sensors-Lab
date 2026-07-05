# Arduino Option

One of two prototype microcontroller options for the sensor kit (see
[sensor-kit-overview.md](sensor-kit-overview.md); compare to
[raspberry-pi-guide.md](raspberry-pi-guide.md)).

## Why Arduino as an option

- Low cost, low power draw — well suited to battery or solar operation (see
  [power-solar-battery.md](power-solar-battery.md)).
- Simple analog/digital sensor reading without an operating system to
  manage — lower barrier to entry for classroom builds.
- Large existing base of open documentation and libraries for common sensors
  (soil moisture, temperature/humidity, light, basic audio level).

## Tradeoffs versus Raspberry Pi

- No built-in networking or display — data logging requires either an SD
  card module, a serial connection to a computer, or an added
  network/Bluetooth module.
- Better suited to the offline-first, single-purpose sensing role than to
  running a dashboard or AI reflection tool directly.

## Prototype build notes

- Analog sensors (soil moisture, light) connect to analog input pins;
  digital sensors (most temperature/humidity modules) connect to digital
  pins per their datasheet.
- No specific pin-mapping or example code is finalized yet — `AWAITING
  FRAGMENT` until a real prototype board has been wired and tested.

## Status

Concept-stage documentation. No Arduino-based prototype has been built or
tested as of this writing.

## Related documents

- [parts-list.md](parts-list.md)
- [soil-moisture.md](soil-moisture.md), [temperature-humidity.md](temperature-humidity.md),
  [audio-sensing.md](audio-sensing.md)
- [/software/offline-field-companion.md](../software/offline-field-companion.md)
  — the offline-first design goal this option supports well
