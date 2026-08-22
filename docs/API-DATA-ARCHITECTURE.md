# Earth Sensors Lab — API + External Data Architecture

**Status:** design baseline v1.0  
**Purpose:** define how Earth Sensors Lab combines student-built instruments with authoritative external data sources.

Earth Sensors Lab is not only an instrumentation program. It is a **networked observatory and data-literacy system**. Student-built sensors provide local observations. External APIs and public scientific archives provide regional, planetary and space context. The learning task is to compare them without confusing correlation with causation.

## Core rule

Every observation must preserve provenance.

```text
LOCAL INSTRUMENTS                      EXTERNAL SCIENCE SOURCES
soil / water / weather                 USGS earthquakes
vibration / sound                      NOAA space weather
light / radiation                      NASA/JPL small-body data
radio / optical sky                    NASA mission archives
energy telemetry                       satellite / Earth-observation data
          \                              /
           \                            /
            ----> NORMALIZATION LAYER <----
                   timestamp / units
                   source / location
                   quality / uncertainty
                   version / retrieval time
                           |
                           v
                   OMOLUABI RULE LAYER
                           |
             evidence / contradiction / provenance
                           |
                           v
                ACCESSIBLE DATA STATION
              visual + text + audio + tactile
```

## Initial API/source registry

| Source | What ESL can use it for | Integration rule |
|---|---|---|
| NASA/JPL SSD + CNEOS APIs | small-body orbital data, close approaches, observability, fireballs, impact-risk context | server-side/cache ingestion; store API version and retrieval timestamp |
| JPL Horizons | ephemerides and object trajectories | ingest snapshots into versioned local JSON; do not depend on browser-direct calls |
| NASA 3I/ATLAS public archive material | trajectory case study, open-data literacy, cross-mission observation | cite mission/source and distinguish archive data from ESL observations |
| NASA Radio JOVE | radio astronomy instrument-building and shared observational data | use as curriculum precedent and potential comparison dataset |
| NOAA Space Weather Prediction Center | K-index, solar radio flux, auroral/geospace products, solar activity | ingest time series and align to UTC |
| USGS Earthquake Catalog / GeoJSON feeds | earthquake and seismic-event context | use event IDs, timestamps, magnitude, depth and location; never claim a local geophone detected a USGS event without evidence |
| NASA Earth-observation / satellite archives | regional environmental context | treat satellite retrievals as a different spatial/temporal scale than garden sensors |

## Browser architecture

Some scientific services, including JPL SSD/CNEOS, explicitly caution against embedding their APIs directly in browser sites. ESL therefore uses a **fetch → validate → cache → publish** pattern.

```text
REMOTE API
   |
   v
scheduled fetch / instructor-triggered fetch
   |
   v
schema validation + version check
   |
   v
raw snapshot (immutable)
   |
   +--> normalized ESL record
   |
   +--> provenance record
   |
   v
static JSON / database endpoint
   |
   v
p5.js / accessible dashboard / Omoluabi inquiry layer
```

## Canonical external-data record

```json
{
  "source_id": "jpl-horizons",
  "source_version": "record upstream version when available",
  "retrieved_at_utc": "ISO-8601",
  "dataset_id": "object-or-feed-identifier",
  "observed_at_utc": "ISO-8601",
  "location_or_frame": "explicit reference frame or geographic location",
  "property": "named quantity",
  "value": null,
  "unit": "explicit unit",
  "uncertainty": null,
  "quality_state": "reported|derived|estimated|unknown",
  "source_url": "canonical upstream resource",
  "license_or_use_note": "where applicable",
  "notes": ""
}
```

## Omoluabi interrogation rules

Omoluabi must be able to ask of every API-derived claim:

1. **What is the source?**
2. **When was it retrieved?**
3. **What version/schema was returned?**
4. **What coordinate system, location or reference frame applies?**
5. **What is directly observed versus derived?**
6. **What uncertainty is reported?**
7. **Does a local ESL instrument independently observe anything comparable?**
8. **Are timestamps aligned?**
9. **Is the apparent relationship plausible, coincidental or unresolved?**
10. **What evidence would be needed before making a causal claim?**

## Case study 01 — 3I/ATLAS

3I/ATLAS is the third identified interstellar object observed passing through the Solar System. NASA describes its path as hyperbolic: it is not gravitationally bound to the Sun. It made perihelion on **2025-10-30** at about **1.4 AU** from the Sun, outside Mars's orbit. NASA mission and archival observations make it a strong ESL case study in how a newly identified object can be reconstructed from multiple datasets.

ESL student work can include:

- retrieving/versioning authoritative trajectory data;
- visualizing trajectory and reference frames;
- comparing discovery time with pre-discovery archival observations;
- studying which instruments can and cannot observe an object;
- examining how uncertainty narrows as observations accumulate;
- comparing local sky/weather/radio conditions with observation windows;
- documenting what would count as an anomaly without claiming that unrelated local fluctuations were caused by the comet.

## Case study 02 — Apophis 2029

Asteroid **99942 Apophis** will safely pass Earth on **2029-04-13** at roughly **32,000 km above Earth's surface**, closer than geosynchronous-orbit altitude. NASA has ruled out an Earth impact for at least the next century.

That makes Apophis a useful **planned observing campaign**, not a disaster scenario.

Possible ESL preparation:

- build a multi-year countdown and ephemeris visualization;
- define observation windows and what instruments are relevant;
- pull JPL close-approach and Horizons data into a versioned dataset;
- monitor space-weather conditions that may affect radio observations;
- collect local atmospheric, electromagnetic and radio baselines well before 2029;
- teach anomaly detection against long-term baselines;
- distinguish instrument anomaly, environmental anomaly, data-feed anomaly and scientifically meaningful event;
- publish an accessible public observatory installation during the flyby.

## Anomaly detection: scientific boundary

ESL may look for **anomalies**, but anomaly does not mean extraterrestrial cause.

A valid pipeline is:

```text
BASELINE
  -> expected range / seasonal pattern / instrument noise
CURRENT OBSERVATION
  -> deviation detected
QUALITY CHECK
  -> calibration / power / connectivity / sensor fault
EXTERNAL CONTEXT
  -> weather / earthquake / space weather / known object ephemeris
CROSS-INSTRUMENT CHECK
  -> do independent channels agree?
HUMAN REVIEW
  -> unresolved / explained / candidate event
```

No automated system should jump from correlation to causation.

## Curriculum consequence

Every instrument curriculum must therefore include an **API/Data Companion** section:

- relevant external datasets;
- retrieval method;
- field mapping;
- units and reference frames;
- update cadence;
- failure modes;
- provenance requirements;
- comparison questions;
- accessible representation;
- Omoluabi schema relationship.

## Public references

- NASA/JPL SSD + CNEOS API service: https://ssd-api.jpl.nasa.gov/
- NASA 3I/ATLAS: https://science.nasa.gov/solar-system/comets/3i-atlas/
- NASA 3I/ATLAS open-data article: https://science.nasa.gov/open-science/interstellar-comet-3i-atlas-data/
- NASA Apophis: https://science.nasa.gov/solar-system/asteroids/apophis/
- NASA Radio JOVE: https://science.nasa.gov/citizen-science/radio-jove/
- NOAA SWPC JSON services: https://services.swpc.noaa.gov/json/
- USGS Earthquake API: https://earthquake.usgs.gov/fdsnws/event/1/
