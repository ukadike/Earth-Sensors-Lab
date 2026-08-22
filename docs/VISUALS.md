# Earth Sensors Lab — Visual Inventory and Accessible Descriptions

This document is the text authority for the current Earth Sensors Lab concept and engineering visuals. Each visual is paired with a concise alt-text summary, a public caption, a longer description, and an explicit status note so illustrative material is not mistaken for validated construction documentation.

The images in `assets/visuals/` are web-optimized presentation copies. Technical build decisions remain governed by the relevant BOM, wiring, calibration, and instrument documentation.

---

## Visual 01 — Earth Sensors Lab Observatory

**Asset:** `assets/visuals/visual-01-observatory.webp`

**Caption:** **Figure 1. Earth Sensors Lab Observatory — whole-system concept.** Accessible greenhouse and garden observatory integrating soil and environmental sensing, renewable power and storage, central data interpretation, and optical and radio sky observation. Conceptual; not a construction drawing.

**Alt text:** Cutaway concept of an accessible greenhouse observatory. Students, including wheelchair users, work at raised garden beds and reachable data stations. Underground probes monitor soil; rooftop solar panels and a wind turbine feed battery and control equipment; a weather mast, optical telescope, and radio dish extend observations from Earth into the sky.

### Long description

The image is a wide architectural cutaway organized from underground soil at the lower left through the greenhouse interior and upward to rooftop and sky-observation instruments. A raised garden bed sits above a soil cross-section containing multiple probes at different locations and depths. Visible cable paths travel from the sensing area toward protected electronics and data systems.

Inside the greenhouse, mixed-ability student teams work at planting beds, assembly tables, and reachable digital control stations. Wheelchair users are shown participating directly in the scientific work rather than observing from the side. A large central display represents comparison of environmental and sky observations.

On and above the structure are a compact weather mast, photovoltaic panels, a small wind turbine, an optical telescope, and a radio astronomy dish. A protected lower equipment area contains battery/storage and control hardware. The composition presents the observatory as one coupled system spanning soil, plants, atmosphere, energy, data, and sky observation.

**Status / limitation:** `conceptual`. The wiring paths, physical dimensions, rooftop loads, equipment placement, and particular instrument forms are illustrative. They are not construction, structural, electrical, or safety specifications.

---

## Visual 02 — Student-Built Soil Sensing Station

**Asset:** `assets/visuals/visual-02-soil-station.webp`

**Caption:** **Figure 2. Soil Sensing Station — student-built instrument concept.** Raised accessible bed, differentiated soil probes, modular electronics enclosure, local data logging, and a multimodal reachable interface.

**Alt text:** Engineering illustration of an accessible raised garden bed with separate soil-moisture, temperature, conductivity, and optional pH probes connected to a weather-resistant ESP32 data enclosure and reachable multimodal control panel.

### Long description

The illustration centers on a raised planting bed with a partial soil cutaway showing topsoil, root zone, deeper soil, roots, and four different probe types. The probes are visually differentiated rather than shown as interchangeable devices: moisture, temperature, electrical conductivity, and optional pH.

Cables route from the probes to a weather-resistant enclosure. The enclosure conceptually contains an ESP32 controller, sensor interface/ADC, local microSD storage, voltage regulation, and backup power. A separate reachable control unit shows a high-contrast display, large tactile controls, audio/headphone support, tactile/Braille identification, and redundant status indications.

Students are shown building, testing, and using the system, including a wheelchair user working directly at the raised bed. A small signal-flow panel communicates the intended sequence from soil to sensors, controller/data acquisition, local storage, accessible output, and the wider Earth Sensors Lab data system.

**Status / limitation:** `conceptual`. The physical arrangement is illustrative. The authoritative Core Student Station component and signal decisions are documented in `hardware/soil-sensing-station-bom-v1.md` and `hardware/soil-sensing-station-wiring-v1.md`.

---

## Visual 03 — Soil Sensing Station System Architecture

**Asset:** `assets/visuals/visual-03-soil-system-architecture.webp`

**Caption:** **Figure 3. Soil Sensing Station — conceptual system architecture.** Physical phenomenon to sensor interface, controller, local storage, accessible output, optional network, and protected power. Not an electrical wiring authority.

**Alt text:** Block diagram of the soil station from four soil probes through signal-conditioning and an ESP32 to local microSD storage, an accessible output device, optional Wi-Fi, and protected low-voltage power.

### Long description

The diagram reads primarily left to right. Four sensor inputs represent soil moisture, soil temperature, electrical conductivity, and optional pH. Removable connectors lead into a sensor-interface stage. The central weather-resistant enclosure contains an ESP32 controller, microSD local logging, and a multimodal accessible interface. An optional network path leads from ESP32 Wi-Fi to a local network and Earth Sensors Lab data station. A separate lower power path shows protected low-voltage DC input, protection, regulation, and distribution to the instrument subsystems. Another panel distinguishes physical phenomenon, electrical signal, and recorded observation.

Accessibility is represented as part of the architecture through high contrast, audio/headphone output, tactile/Braille identifiers, large controls, and redundant visual/tactile/auditory status cues.

**Technical correction:** This generated concept image depicts the capacitive moisture channel as a digital/I²C-style input. That is **not** the selected Core Student Station architecture. The selected DFRobot SEN0193 moisture sensor is an **analog-output** sensor. Its authoritative path is SEN0193 analog output → ADS1115 analog input A0 → ESP32 over I²C. See `hardware/soil-sensing-station-wiring-v1.md`.

**Status / limitation:** `conceptual with documented correction`. Use this figure to understand system organization, not to wire the instrument.

---

## Visual 04 — Soil Sensing Station Exploded Assembly

**Asset:** `assets/visuals/visual-04-soil-exploded-assembly.webp`

**Caption:** **Figure 4. Soil Sensing Station — exploded physical assembly.** Modular weather-resistant enclosure, replaceable electronics, differentiated connectors, accessible controls, reachable mounting, and a repair-centered maintenance workflow.

**Alt text:** Exploded-view illustration of the soil station enclosure, internal replaceable electronics, four labeled sensor connectors and probes, accessible control panel, mounting bracket, and open–inspect–disconnect–replace–reconnect–test maintenance sequence.

### Long description

The figure is divided into labeled physical subsystems. The weather-resistant enclosure is exploded into lid, gasket, enclosure body, mounting plate, internal standoffs/rail, cable glands, and front panel connectors. Internal electronics are shown as separate replaceable modules on mounting plates rather than as one disposable sealed unit.

The sensor connection panel distinguishes moisture, temperature, EC, and optional pH channels. The external-probe section shows four differently shaped probes. The accessible control module includes a high-contrast display, large primary control, widely spaced navigation controls, tactile/Braille markers, speaker, headphone connection, and status indicators that combine shape and color. A mounting illustration places the enclosure at a reachable height near a raised bed with protected cable routing. The maintenance column explicitly shows OPEN → INSPECT → DISCONNECT → REPLACE → RECONNECT → TEST.

**Illustration artifact:** Four probe channels are specified, but the generated external-probe area does not visually resolve four complete cable paths consistently. The written BOM and wiring documentation are authoritative.

**Status / limitation:** `conceptual physical assembly`. Final enclosure dimensions, connector keying, ingress protection, mounting loads, and service clearances require physical prototyping and testing.

---

## Visual 05 — Core Soil Sensing Station v1.0 Wiring and Signal Map

**Asset:** `assets/visuals/visual-05-soil-wiring-signal-map.webp`

**Caption:** **Figure 5. Core Soil Sensing Station v1.0 — wiring and signal map.** SEN0193 analog moisture path, DS18B20 1-Wire temperature path, ADS1115, ESP32 Feather V2, local storage, accessible interface, optional Wi-Fi, protected low-voltage power, and a separate future digital EC/pH module. Pre-build; not yet bench validated.

**Alt text:** Wiring and signal map showing a SEN0193 analog moisture probe feeding ADS1115 channel A0, a DS18B20 temperature probe using 1-Wire with a 4.7-kilohm pull-up, an ESP32 Feather V2, microSD storage, accessible local controls and audio, optional Wi-Fi, and protected low-voltage DC power.

### Long description

The main weather-resistant enclosure contains the Adafruit ESP32 Feather V2, ADS1115 ADC, microSD storage module, and accessible local-interface electronics. The DFRobot SEN0193 moisture probe sits outside the enclosure and receives regulated 3.3 V and ground; its analog output enters ADS1115 channel A0. ADS1115 communicates with the ESP32 over the I²C bus. A1 through A3 are shown as future available analog channels rather than preassigned sensors.

The waterproof DS18B20 soil-temperature probe receives 3.3 V and ground. Its data conductor connects to a dedicated functional ESP32 1-Wire GPIO, with a 4.7 kΩ pull-up resistor between data and 3.3 V. The microSD module is shown on the SPI bus for local offline logging. The accessible interface branches from the controller to a high-contrast display, tactile controls, audio/headphone capability, tactile/Braille identifiers, and shape-plus-color status indicators.

An optional dashed network path shows ESP32 Wi-Fi to the local network and Earth Sensors Lab data station; local logging continues without network access. The lower power rail shows protected low-voltage DC entering fuse/PTC protection, reverse-polarity protection, voltage regulation, and the 3.3 V logic/sensor rail. A separate advanced module depicts EC and optional pH using documented digital instrumentation interfaces to I²C/UART rather than the ADS1115.

No arbitrary ESP32 GPIO numbers are locked in the image. Final pin allocation depends on the selected display, audio, storage, and control modules. The authoritative text companion is `hardware/soil-sensing-station-wiring-v1.md`.

**Status / limitation:** `proposed / pre-build`. This architecture has not yet been bench-built, electrically tested, field calibrated, environmental-tested, or accessibility-validated with participants.

---

## Accessibility rule for future visuals

Every new Earth Sensors Lab figure should ship with all of the following:

- a short, functional alt text describing what the image communicates;
- a visible caption naming the figure and its status;
- a long description for dense diagrams or system images;
- a text/ASCII equivalent when relationships can be expressed meaningfully in text;
- a stable figure identifier linked from the relevant instrument Schema Card;
- an explicit status such as `conceptual`, `proposed`, `prototype`, `tested`, or `validated`;
- documented corrections when a generated visual differs from the authoritative technical record.

A visual is never the sole carrier of information required to build, understand, or evaluate an Earth Sensors Lab instrument.
