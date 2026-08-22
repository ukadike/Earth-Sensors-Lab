# Earth Sensors Lab — Soil Sensing Station BOM v1.0

Status: **proposed / pre-build**. This is the baseline bill of materials for the Core Student Station. No field validation is claimed yet.

## Design goals

- student-buildable with instructor supervision;
- low-voltage only at the student instrument;
- modular and repairable;
- local logging without internet dependence;
- accessible controls and multiple output modes;
- calibration and provenance treated as part of the instrument, not optional extras.

## Core Student Station

| Subsystem | Baseline component | Qty | Function | Notes |
|---|---|---:|---|---|
| Controller | Adafruit ESP32 Feather V2 | 1 | Central controller, Wi-Fi, I²C/SPI/GPIO, battery support | 3.3 V logic; USB-C programming/power; STEMMA QT I²C available |
| Soil moisture | DFRobot SEN0193 analog capacitive soil-moisture sensor | 1 | Measures moisture-dependent capacitive response | Analog output; 3.3–5.5 V operating range; requires calibration for dry/wet boundaries |
| Soil temperature | Waterproof DS18B20 digital probe | 1 | Soil temperature | 1-Wire digital bus; use approx. 4.7 kΩ pull-up from DATA to 3.3 V |
| External ADC | ADS1115 16-bit ADC breakout | 1 | High-resolution digitization of analog moisture signal and future documented analog channels | I²C; four single-ended channels; A0 reserved for moisture in Core v1.0 |
| Storage | 3.3 V-compatible microSD breakout/module | 1 | Local offline observation logging | SPI; exact module must be verified for 3.3 V logic and reliable card handling before build lock |
| Removable storage | Industrial/high-endurance microSD card | 1 | Observation file storage | Capacity not yet locked; prioritize endurance and replaceability over maximum size |
| Display | Sunlight-readable high-contrast text display, 3.3 V compatible | 1 | Local visual output | Exact model remains to be selected after enclosure/control-panel mock-up |
| Primary control | Large momentary tactile pushbutton | 1 | Main accessible action / acknowledge / select | Large target, low actuation force where feasible |
| Navigation controls | Widely spaced momentary controls or accessible rotary/joystick equivalent | 3–4 | Menu navigation | Must not require fine motor precision; exact control set pending interface prototype |
| Audio output | Digital audio path / I²S-capable module plus speaker or headphone path | 1 set | Spoken/sonified status and readings | Final amplifier/headphone implementation must be documented before electrical build lock |
| Status indicators | Shape/icon + light indicators | 3–4 | Power, logging, sensor/quality, alert states | Never rely on color alone |
| Enclosure | Weather-resistant gasketed project enclosure | 1 | Protect electronics | Size determined after physical layout; must permit service access and removable mounting plate |
| Mounting plate | Nonconductive or suitably grounded removable internal plate | 1 | Mount replaceable electronics modules | Maintain service loops and labeled wiring |
| External connectors | Waterproof keyed panel connectors | 2 minimum | Moisture + temperature probe disconnects | Core station uses physically distinguishable/tactually identifiable channels |
| Cable glands / strain relief | Weather-rated glands/strain-relief hardware | as required | Cable entry and mechanical protection | Match actual cable outside diameter |
| Terminal blocks | Finger-safe low-voltage terminal blocks | as required | Serviceable power/signal distribution | Label by function and tactile identifier |
| Input protection | Fuse or resettable PTC plus reverse-polarity protection | 1 set | Protect student instrument | Rating to be selected after measured load and final upstream supply are known |
| DC regulation | Regulated low-voltage conversion stage | 1 | Feed controller/sensor rail safely | Final input bus voltage intentionally not locked until observatory power architecture is tested |
| Wiring | Flexible stranded low-voltage wire, appropriately sized | as required | Internal power and signal wiring | Use consistent documented conventions and service loops |
| Labels | High-contrast print + tactile/Braille labels | 1 set | Channel and control identification | Generated from the same stable identifiers used in the Schema Card |
| Mounting hardware | Reachable-height bracket / garden-bed post mount | 1 set | Secure enclosure near accessible bed | Must preserve wheelchair approach and allow enclosure removal for maintenance |

## Core electrical allocation

### Moisture channel

`DFRobot SEN0193 VCC → regulated 3.3 V`

`DFRobot SEN0193 GND → common sensor ground`

`DFRobot SEN0193 analog OUT → ADS1115 A0`

The SEN0193 is an **analog** sensor. It must not be documented as I²C or digital.

### Temperature channel

`DS18B20 VCC → regulated 3.3 V`

`DS18B20 GND → common sensor ground`

`DS18B20 DATA → dedicated ESP32 GPIO / 1-Wire bus`

`4.7 kΩ pull-up: DATA → 3.3 V`

### ADC

`ADS1115 VIN → regulated 3.3 V`

`ADS1115 GND → common ground`

`ADS1115 SDA/SCL ↔ ESP32 I²C`

`ADS1115 A0 ← moisture analog output`

A1–A3 remain unused until a future analog channel is explicitly documented and validated.

### Storage

`microSD module ↔ ESP32 SPI`

Functional signals: clock, controller-to-card data, card-to-controller data, chip-select. Final GPIO numbers are not assigned until the firmware/pin-allocation review.

### Accessible interface

- display: documented I²C/SPI/display bus after exact display selection;
- primary/navigation controls: ESP32 GPIO;
- audio: documented digital audio/I²S path after exact audio hardware selection;
- status: redundant visual + tactile/shape + spoken/sonic state where appropriate.

### Network

Wi-Fi is optional. The station must continue collecting and writing observations locally when no network is available.

## Advanced Soil Chemistry module

Advanced chemistry is intentionally separate from the Core Student Station so the entry-level build remains affordable and understandable.

### Conductivity

Baseline research-grade direction: documented EC probe + digital EC interface supporting calibration and temperature compensation, e.g. Atlas Scientific-class instrumentation.

### pH

Optional advanced channel: documented pH probe + digital pH interface with calibration workflow.

When digital EC/pH interfaces are used, these channels connect to the controller over their documented digital interface (I²C/UART as appropriate). They **do not** pass through the ADS1115 merely because the probes are electrochemical instruments.

Isolation and simultaneous-measurement behavior must be reviewed before EC and pH are deployed together.

## Calibration requirements

### Moisture

At minimum record:

- sensor ID;
- dry/air reference value;
- wet/reference value;
- soil/media type;
- date/time;
- person/team performing calibration;
- firmware version;
- ADC configuration;
- notes/limitations.

A normalized percentage must never be presented as absolute volumetric water content unless the instrument has been calibrated against an appropriate reference method for that soil/media.

### Temperature

Compare the DS18B20 against a traceable/reference thermometer over a documented range appropriate to classroom/garden use. Record offset/error rather than silently correcting values.

## Power rule

The student instrument receives **protected low-voltage DC only**. The final observatory distribution voltage is not asserted in this document until the renewable-energy/storage system is physically designed and tested.

## Accessibility rule

The instrument must expose the same canonical observation through more than one representation where feasible: numeric/text, high-contrast visual, speech/audio, and tactile status/identification. Color alone is never sufficient for state communication.

## Validation status

- physically built: **no**
- electrical bench test: **no**
- calibration completed: **no**
- field deployment: **no**
- disabled-participant review: **no**

Move individual claims from proposed → prototype → tested → validated only when evidence exists.
