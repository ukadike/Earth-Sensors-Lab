# Earth Sensors Lab — Soil Sensing Station Wiring & Signal Map v1.0

Status: **proposed / pre-build**. This document is the authoritative text companion to Visual 05. The image is conceptual documentation; this file controls the engineering meaning.

## Canonical signal path

```text
SOIL PHENOMENON
    |
    +-- moisture --> SEN0193 analog sensor --> ADS1115 A0 --> I2C --> ESP32
    |
    +-- temperature --> DS18B20 1-Wire -----------------------> ESP32

ESP32
    |
    +--> microSD via SPI --> local offline observation log
    +<-> accessible local interface
    +--> optional Wi-Fi --> Earth Sensors Lab data station
```

## Moisture channel

```text
DFRobot SEN0193

VCC  ------------------------------> regulated 3.3 V
GND  ------------------------------> common sensor ground
OUT  -------- analog 0–3 V --------> ADS1115 A0
```

Rules:

- SEN0193 is analog, not I²C and not a digital moisture sensor.
- Record raw ADC value as well as any processed/normalized value.
- Processed moisture percentage requires a documented calibration record.

## Temperature channel

```text
Waterproof DS18B20

VCC  ------------------------------> regulated 3.3 V
GND  ------------------------------> common ground
DATA ------------------------------> dedicated ESP32 1-Wire GPIO
  |
  +---- 4.7 kΩ pull-up ------------> regulated 3.3 V
```

Final physical GPIO assignment is deliberately deferred until firmware and board-layout review.

## ADS1115

```text
ADS1115

VIN  ------------------------------> regulated 3.3 V
GND  ------------------------------> common ground
SDA  <-----------------------------> ESP32 I²C SDA
SCL  <-----------------------------> ESP32 I²C SCL
A0   <------------------------------ SEN0193 analog OUT
A1   ------------------------------> AVAILABLE / UNASSIGNED
A2   ------------------------------> AVAILABLE / UNASSIGNED
A3   ------------------------------> AVAILABLE / UNASSIGNED
```

Do not connect a future sensor to A1–A3 until that channel has its own BOM, signal range, calibration procedure, and protection review.

## Local storage

```text
ESP32                       microSD module

SPI CLOCK   --------------> SCK
SPI DATA OUT -------------> MOSI / card input
SPI DATA IN  <------------- MISO / card output
CHIP SELECT --------------> CS
3.3 V / GND --------------> module power, subject to exact module requirements
```

The exact microSD breakout must be selected and checked before construction. Local logging is required to continue when Wi-Fi is unavailable.

## Accessible local interface

```text
ESP32
  |
  +<-> high-contrast text display
  +<-- large primary button
  +<-- widely spaced navigation controls
  +--> audio/speech/sonification path
  +--> redundant status indicators
```

No amplifier, headphone-driver, or display circuitry is implied until exact modules are selected and documented.

## Optional network

```text
ESP32 Wi-Fi
    |
    v
local network / access point
    |
    v
Earth Sensors Lab data station
```

Network state must never determine whether the station can observe and store locally.

## Power architecture

```text
PROTECTED LOW-VOLTAGE DC INPUT
             |
             v
       fuse / resettable PTC
             |
             v
     reverse-polarity protection
             |
             v
       DC-DC regulation
             |
             v
        regulated rails
             |
    +--------+---------+----------+----------+
    |        |         |          |          |
  ESP32   ADS1115   sensors    storage   accessible interface
```

The final observatory DC bus voltage is intentionally unspecified until the renewable-energy/storage subsystem is physically validated.

## Advanced soil chemistry — separate module

```text
EC probe
  |
  v
documented EC interface
  |
  +---- I²C or UART ----> ESP32

optional pH probe
  |
  v
documented pH interface
  |
  +---- I²C or UART ----> ESP32
```

With digital chemistry interfaces, EC and pH do **not** route through the ADS1115. Isolation, grounding, calibration, and simultaneous-measurement behavior require separate engineering review.

## Observation record

Each stored reading should be addressable with at least:

```yaml
timestamp: ""
instrument_id: ""
sensor_id: ""
observed_property: ""
raw_value: null
processed_value: null
unit: ""
calibration_id: ""
quality_state: ""
power_state: ""
location_id: ""
notes: ""
```

Conceptually:

```text
PHYSICAL PHENOMENON
        |
        v
SENSOR / TRANSDUCER
        |
        v
ELECTRICAL SIGNAL
        |
        v
ADC / DIGITAL BUS / CONTROLLER
        |
        v
RECORDED OBSERVATION + PROVENANCE + QUALITY STATE
```

## Accessible text description for Visual 05

Visual 05 is a landscape wiring-and-signal map. Two external soil probes appear on the left: an analog capacitive moisture probe and a waterproof DS18B20 temperature probe. Both enter a dashed weather-resistant enclosure through removable connectors. The moisture sensor's analog output goes to channel A0 of an ADS1115 ADC, which communicates with the ESP32 over I²C. The temperature probe uses a separate 1-Wire data line with a 4.7 kΩ pull-up to 3.3 V. The ESP32 connects to a microSD module for local offline logging, an accessible interface containing display, tactile controls, audio and redundant status indicators, and optionally to a local network over Wi-Fi. A separate red power diagram beneath the signal map shows protected low-voltage DC passing through fuse/PTC protection, reverse-polarity protection and DC-DC regulation before feeding the controller, ADC, sensors, storage and interface. A dashed advanced module shows future EC and pH probes using documented digital interfaces rather than the ADS1115.

## Construction status

This is not yet a bench-verified wiring diagram. Before students assemble the station, the following must be locked:

- exact microSD module;
- exact display;
- exact audio hardware;
- exact controls/connectors;
- actual fuse/PTC rating;
- DC regulator selection;
- enclosure layout;
- GPIO allocation;
- measured power budget;
- bench test results.
