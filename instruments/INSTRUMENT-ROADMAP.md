# Earth Sensors Lab — Earth-to-Space Instrument Roadmap

This roadmap converts the research synthesis into a sequenced instrument program. All entries begin as `proposed` until built and documented under the Earth Sensors Lab Instrument Standard.

| ID | Instrument | Domain | Core phenomenon | Priority | Reference/validation path |
|---|---|---|---|---|---|
| ESL-INSTRUMENT-001 | Soil Moisture Station | soil | dielectric/volumetric water content | Phase 1 | gravimetric soil-moisture comparison |
| ESL-INSTRUMENT-002 | Soil Temperature Station | soil | temperature | Phase 1 | traceable/reference thermometer comparison |
| ESL-INSTRUMENT-003 | Microclimate Station | atmosphere | temperature, RH, pressure | Phase 1 | side-by-side reference/cross-sensor comparison |
| ESL-INSTRUMENT-004 | Rain + Surface Water Station | atmosphere/water | precipitation | Phase 1 | manual gauge comparison |
| ESL-INSTRUMENT-005 | Light + UV Station | atmosphere/light | irradiance/light intensity | Phase 1 | controlled-source/inter-device comparison |
| ESL-INSTRUMENT-006 | Air Particle Station | atmosphere | PM2.5/PM10 optical scattering | Phase 1 | EPA-style collocation and QA |
| ESL-INSTRUMENT-007 | Energy Telemetry Station | energy | voltage/current/power/storage | Phase 1 | meter/reference load comparison |
| ESL-INSTRUMENT-008 | Phenology Station | living systems | growth/seasonal biological change | Phase 1 | repeatable GLOBE-style observation protocol |
| ESL-INSTRUMENT-009 | Mechanical Seismograph | vibration | inertia/ground motion | Phase 2 | controlled table/ground-motion tests |
| ESL-INSTRUMENT-010 | Digital Seismic Station | vibration | geophone/accelerometer response | Phase 2 | waveform comparison/network events |
| ESL-INSTRUMENT-011 | Acoustic Biodiversity Station | living systems/sound | environmental acoustics | Phase 2 | annotated recordings + repeated protocol |
| ESL-INSTRUMENT-012 | DIY Spectrometer | light | diffraction/spectrum | Phase 2 | known spectral source calibration |
| ESL-INSTRUMENT-013 | Multimodal Data Translator | accessibility | mapping data across sensory modes | Phase 2 | disabled participant review + task performance |
| ESL-INSTRUMENT-014 | Arduino Magnetometer | electromagnetic/space | geomagnetic-field variation | Phase 3 | baseline/noise characterization + external space-weather comparison |
| ESL-INSTRUMENT-015 | Radio Sky Telescope | space/radio | natural low-frequency radio emission | Phase 3 | Radio JOVE-style observation workflow |
| ESL-INSTRUMENT-016 | Cosmic Muon Telescope | space/particles | scintillation/SiPM particle detection | Phase 3 | count statistics + coincidence mode |
| ESL-INSTRUMENT-017 | Water Quality Station | water | pH/conductivity/turbidity/temperature | Phase 3 | standards/reference solutions + repeat sampling |
| ESL-INSTRUMENT-018 | Infrasound Station | atmosphere/vibration | low-frequency pressure waves | Future | controlled-source and known-event comparison |
| ESL-INSTRUMENT-019 | Leaf Wetness / Plant Stress Station | living systems | moisture/thermal response | Future | controlled wet/dry cycles |
| ESL-INSTRUMENT-020 | VLF / Lightning Receiver | electromagnetic/atmosphere | radio propagation/lightning | Future | known lightning/event comparison |

## Shared curriculum spine

Every instrument moves through the same sequence:

**Question → Scientific Principle → Design Constraints → Build → Calibration → Deployment → Observation → QA/Uncertainty → Analysis → Multimodal Representation → Public Communication → Redesign**

## Shared observatory zones

- **Root Zone:** 001, 002, 008, 019
- **Water Zone:** 004, 017
- **Air Zone:** 003, 005, 006
- **Motion Zone:** 009, 010, 018
- **Living/Acoustic Zone:** 008, 011, 019
- **Field Zone:** 014, 020
- **Sky Zone:** 012, 015
- **Particle Zone:** 016
- **Energy Zone:** 007
- **Access/Interpretation Zone:** 013 plus accessible representations from every other instrument

## First six instrument folders to populate

1. `soil-moisture-station/`
2. `microclimate-station/`
3. `air-particle-station/`
4. `energy-telemetry-station/`
5. `mechanical-seismograph/`
6. `multimodal-data-translator/`

These six create the strongest first demonstration because they show environmental science, engineering, calibration, data quality, renewable-energy infrastructure, physical instrument-building, and accessibility as a single research system.

## Cross-instrument research examples

- Rainfall → soil moisture → plant response → humidity
- PM2.5 → humidity → wind → indoor/outdoor difference
- Solar input → battery state → instrument uptime → sampling strategy
- Human activity → seismic/noise signatures → time-of-day patterns
- Solar radio activity → geomagnetic observations → external space-weather records
- Sensor anomaly → provenance → calibration history → uncertainty → accessible representation

## Rule

No instrument advances from `proposed` to `prototype`, `tested`, or `validated` without corresponding evidence references in its Schema Card.
