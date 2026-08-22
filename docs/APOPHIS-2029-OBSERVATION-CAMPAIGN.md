# Earth Sensors Lab — Apophis 2029 Observation Campaign

**Target event:** 99942 Apophis close approach  
**Date:** 2029-04-13  
**NASA context:** safe close approach, roughly 32,000 km above Earth's surface; no impact risk for at least the next century.

## Why this belongs in Earth Sensors Lab

Apophis gives ESL a known future event around which students can build an observatory **before** the event occurs. The scientific challenge is not to predict disaster. It is to learn how to establish baselines, ingest authoritative ephemerides, operate instruments, synchronize clocks, distinguish sensor failure from environmental change, and communicate uncertainty.

## Three-year preparation arc

### Phase 1 — Build the baseline

- deploy soil, atmosphere, vibration, acoustic, light and radio instruments;
- establish calibration and maintenance logs;
- ingest NOAA, USGS and NASA/JPL contextual data;
- characterize daily, weekly and seasonal variation;
- build accessibility modes for every dataset.

### Phase 2 — Space-object literacy

- retrieve JPL Horizons / CNEOS orbital and close-approach data;
- teach reference frames, ephemerides, uncertainty and observation windows;
- compare optical and radio observing constraints;
- create p5.js trajectory and sky-location visualizations;
- practice with other known near-Earth objects before 2029.

### Phase 3 — Apophis campaign

- publish a public countdown;
- generate daily and then hourly observing windows as the flyby approaches;
- log local environmental and instrument-health data;
- record which local instruments have any scientifically plausible relationship to the observation question;
- compare local data with external sources without causal overclaim;
- run a public/community observatory installation around the April 13, 2029 flyby.

## Anomaly classes

ESL should distinguish at least four anomaly types:

1. **Instrument anomaly** — sensor drift, power fault, damaged connector, saturation, clock error.
2. **Data-feed anomaly** — missing API response, schema change, stale cache, malformed unit conversion.
3. **Environmental anomaly** — unusual local weather, seismic event, radio interference, light pollution change.
4. **Candidate scientific event** — a reproducible deviation supported across independent channels and consistent with a plausible physical mechanism.

No candidate event becomes a causal claim without human review and external corroboration.

## API dependencies

- NASA/JPL SSD/CNEOS APIs
- JPL Horizons ephemerides
- NOAA Space Weather Prediction Center JSON feeds
- USGS earthquake/event feeds
- NASA Earth-observation archives where relevant

## Public-facing deliverables

- accessible Apophis countdown
- p5.js trajectory visualizer
- observation-window map
- instrument-health dashboard
- baseline-vs-event sonification
- tactile trajectory/scale model
- public workshop: **How Do We Know Something Is Unusual?**
- post-event student research reports with provenance and uncertainty notes

## Omoluabi schema hooks

Every Apophis record should expose:

- source
- source version
- retrieval time
- observation time
- coordinate/reference frame
- measurement unit
- uncertainty
- local/external provenance
- calibration state
- quality state
- contradiction flags
- interpretation status
- human reviewer

## External references

- NASA Apophis overview: https://science.nasa.gov/solar-system/asteroids/apophis/
- JPL SSD/CNEOS API service: https://ssd-api.jpl.nasa.gov/
