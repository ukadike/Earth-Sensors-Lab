# Earth Sensors Lab — STEAM + Earth/Space Sensor Research Synthesis

Status: research synthesis complete

## Executive finding

Earth Sensors Lab is strongest when framed not as a collection of classroom gadgets but as an **accessible student observatory and instrument-building research program**. Students should repeatedly move through a full scientific-engineering cycle:

**question → phenomenon → instrument design → build → calibration → deployment → observation → data quality/uncertainty → interpretation → multimodal representation → public communication → redesign**

This framing is supported by strong precedents across environmental education, community/citizen science, seismology, radio astronomy, heliophysics, air-quality monitoring, accessible science, and open sensor standards.

The program should therefore organize instruments as a coherent network spanning **soil, water, living systems, atmosphere, vibration, light, electromagnetic fields, near-Earth space, cosmic particles, and energy infrastructure** rather than as isolated lessons.

## 1. Educational architecture

### A. Design-to-learn, not kit-to-complete

NGSS engineering design expects students to define criteria and constraints, test alternatives, analyze data, and improve solutions. Earth Sensors Lab should go further by requiring students to explain the transduction chain: what physical phenomenon is being sensed, what element responds, what electrical or mechanical signal is produced, how that signal is digitized, and what assumptions connect the output to a scientific quantity.

Each instrument curriculum should therefore include:

- phenomenon and scientific principle;
- design question and constraints;
- parts and construction;
- calibration against a known reference or controlled condition;
- sampling protocol;
- data provenance;
- uncertainty and failure modes;
- analysis;
- redesign;
- public explanation;
- parallel accessible representations.

### B. Citizen/community science as a learning model

The National Academies concludes that citizen science can support meaningful science learning, but learning outcomes are stronger when they are intentionally designed rather than assumed. It also notes that training participants in data-collection skills improves data quality. This is directly relevant to ESL: learning, research quality, and community usefulness should be designed together.

ESL should therefore evaluate both:

1. **scientific performance** — calibration, missingness, drift, reproducibility, inter-instrument agreement, environmental validity; and
2. **learning/access performance** — conceptual understanding, instrument literacy, scientific reasoning, collaboration, accessibility, agency, and ability to explain uncertainty.

Longitudinal study is especially important. Repeated cohorts and repeated measurements can make ESL a serious research environment rather than a one-time workshop model.

## 2. Instrument families

### Family A — Soil and pedosphere

Recommended instruments and practices:

- soil temperature probe;
- capacitive soil-moisture probe;
- gravimetric soil-moisture reference protocol;
- soil pH;
- electrical conductivity/salinity;
- infiltration measurement;
- soil bulk density / particle density;
- soil texture/particle-size characterization;
- optional soil redox or nutrient-oriented extensions at advanced levels.

GLOBE provides an unusually strong precedent because its protocols explicitly connect scientific background, instrument specifications, repeatable data collection, and education across pedosphere, hydrosphere, atmosphere and biosphere domains.

**Core research questions:** How accurately do low-cost soil sensors track reference measurements? How does sensor burial depth affect readings? What drift occurs across temperature, rainfall and soil type? Can students develop site-specific calibration curves?

### Family B — Water and hydrosphere

Recommended instruments:

- water temperature;
- pH;
- conductivity / total dissolved solids proxy;
- turbidity / transparency;
- dissolved oxygen where feasible;
- nitrate testing where safe and appropriate;
- water-level or rain-to-runoff observation.

ESL should distinguish carefully between low-cost educational measurements and regulatory-grade water-quality claims.

**Research questions:** Which low-cost probes remain stable across repeated school use? How much variation comes from sampling procedure versus sensor error? Can students identify contamination events without overstating causality?

### Family C — Atmosphere and weather

Recommended instruments:

- air temperature;
- relative humidity;
- barometric pressure;
- precipitation/rain gauge;
- wind speed and direction;
- surface temperature / infrared thermometry;
- light/UV index;
- optional wet-bulb or evapotranspiration calculations.

These sensors form the atmospheric backbone of the observatory and provide covariates for nearly every other instrument.

**Research questions:** How does greenhouse microclimate differ from exterior conditions? What lag exists between atmospheric change and soil response? How does enclosure design bias temperature and humidity readings?

### Family D — Air quality and aerosols

Recommended instruments:

- PM2.5 / PM10 optical particle sensing;
- CO2 for indoor/greenhouse ventilation studies;
- selected VOC sensing only with strong caveats;
- temperature and humidity co-measurement for correction/interpretation.

EPA guidance is essential here. The Air Sensor Toolbox emphasizes study design, performance evaluation, collocation, data interpretation, and the distinction between lower-cost sensing and regulatory monitoring. ESL should explicitly teach that a sensor output is not automatically a trustworthy environmental claim.

**Research questions:** How does collocation with a reference monitor change students' interpretation of sensor accuracy? What humidity effects appear in particle sensors? Can students build QA flags for implausible readings?

### Family E — Seismic, vibration and infrasound

Recommended progression:

1. simple mechanical seismograph;
2. accelerometer/geophone instrument;
3. networked classroom seismometer;
4. optional infrasound sensor.

Raspberry Shake provides a particularly useful precedent because its curriculum explicitly teaches the geophone, analog signal, digitization, networking, waveform observation and computer science. Its school network model shows how a classroom instrument can become part of a broader observation network.

**Research questions:** How do placement, floor structure and human activity affect signal-to-noise ratio? Can students classify anthropogenic versus natural vibration? How does a handmade seismograph differ from a geophone-based system?

### Family F — Biodiversity, phenology and living systems

Recommended instruments and protocols:

- plant growth and phenology records;
- canopy/light measurements;
- leaf temperature;
- soil-plant moisture relationships;
- time-lapse imaging;
- acoustic biodiversity recorder;
- optional computer-assisted species annotation, while retaining human validation;
- pollinator observation station.

GLOBE's biosphere and phenological-garden protocols provide a strong educational structure. ESL's greenhouse gives this family particular importance because living systems can be observed continuously while environmental variables are measured simultaneously.

**Research questions:** Which environmental variables best predict plant growth or stress? Can acoustic activity be correlated with time of day, weather, or flowering? How should uncertainty in species identification be represented?

### Family G — Light, color and spectroscopy

Recommended instruments:

- ambient light intensity;
- RGB/color sensing;
- UV sensing;
- simple diffraction spectroscope;
- webcam/USB DIY spectrometer;
- plant-reflectance experiments where calibration permits.

Public Lab's DIY spectrometer demonstrates a strong maker-to-science bridge: students can physically construct the optical path, understand slit/grating geometry, record spectra and confront calibration directly.

**Research questions:** How reproducible are spectra from student-built systems? Which parts of error arise from slit width, angle, camera response and calibration source? Can spectra be represented nonvisually without losing salient features?

### Family H — Magnetism and space weather

Recommended progression:

- suspended-magnet / soda-bottle magnetometer;
- Hall-effect magnetometer;
- Arduino magnetometer;
- optional fluxgate system for advanced cohorts.

NASA provides current student guides for low-cost magnetometers, including an Arduino system under roughly $50 and simple suspended-magnet demonstrations. NASA's historical Space Weather UnderGround model is especially relevant because students build and deploy magnetometers as a distributed, research-capable network.

**Research questions:** Can a school-based magnetometer distinguish local electromagnetic interference from geomagnetic variation? How do location, building wiring and device proximity affect baselines? Can multiple schools create a geographically distributed space-weather array?

### Family I — Radio astronomy

Recommended instrument:

- Radio JOVE-style low-frequency radio telescope / radio spectrograph.

NASA Radio JOVE is one of the strongest direct precedents for ESL. It is explicitly inquiry-based, suitable from middle school upward, and organized around building a radio telescope, measuring natural radio emissions, analyzing data, and sharing observations within a network. Current systems use SDR-based reception and spectrogram software.

**Research questions:** How can students identify solar radio bursts, Jupiter-associated emissions and terrestrial interference? What does antenna geometry teach about sensitivity and directionality? How can radio spectrograms be sonified or tactilized?

### Family J — Cosmic-ray / particle detection

Recommended advanced instrument:

- CosmicWatch-style muon detector using plastic scintillator + silicon photomultiplier.

Current CosmicWatch v3X documentation describes a compact, low-power muon telescope with microSD or USB data logging, coincidence operation, event metadata, environmental measurements and open build/analysis materials. This is an excellent advanced instrument because it connects particle physics, electronics, statistics, coincidence logic, atmospheric effects and open hardware.

**Research questions:** How does count rate vary with detector orientation, shielding, pressure or altitude? How does coincidence reduce background? What statistical model best describes event counts over fixed intervals?

### Family K — Energy observatory

The greenhouse/observatory should itself be instrumented as an energy system, not merely powered invisibly.

Recommended measurements:

- solar-panel voltage/current/power;
- small wind-turbine output where site conditions permit;
- battery voltage/state-of-charge estimate;
- charge-controller status;
- load monitoring per instrument cluster;
- energy budget and uptime;
- optional supercapacitor demonstration.

**Research questions:** What is the energy cost per observation? Which sensors deserve priority during low-energy periods? How do solar, wind, battery and load interact over a day? Can students design graceful degradation rules for an off-grid observatory?

### Family L — Additional high-value extensions

Potential future instrument families:

- soil respiration / CO2 flux experiments;
- leaf wetness;
- evapotranspiration;
- microclimate transects;
- thermal imaging;
- lightning / VLF radio monitoring;
- simple ionizing-radiation Geiger counter as a separate pathway from muon detection;
- acoustic/infrasound environmental sensing;
- pollen/particulate microscopy with accessible image-description workflows;
- water flow and irrigation telemetry;
- greenhouse actuator experiments, separated clearly from observation systems.

## 3. Accessibility as scientific infrastructure

Accessibility should not be a post-processing layer. It should be treated as part of instrument design and data validity.

CAST UDL 3.0 supports multiple means of representation, interaction, action and expression. Perkins guidance for blind and low-vision science learners emphasizes hands-on exploration, tactile graphics, accessible data collection, consistent vocabulary, and access to lab materials in braille, large print, digital, tactile and audio formats.

NASA's sonification work is a particularly important precedent because it develops data sonifications with blind and low-vision collaborators, demonstrating that nonvisual data representation can be built into scientific communication rather than added afterward.

Every ESL instrument should therefore expose, where scientifically appropriate:

- numeric/text data;
- accessible tables;
- high-contrast visual plots;
- spoken summaries;
- sonification;
- tactile graph or raised-line representation;
- haptic/vibration mapping where meaningful;
- keyboard-accessible controls;
- captions/transcripts for audiovisual material;
- physical reach/clearance requirements for wheelchair and seated use;
- controls that do not rely on fine motor precision alone.

A critical research question for ESL is not merely whether disabled students can access the final visualization, but **how different representation modes change scientific reasoning, error detection, pattern recognition and collaboration**.

## 4. Shared observatory architecture

The core installation should be conceived as one **Earth-to-Space Observatory** with several zones:

1. **Root Zone** — soil, moisture, pH, conductivity, plant/phenology.
2. **Water Zone** — irrigation and water-quality measurements.
3. **Air Zone** — weather, aerosols, CO2, light/UV.
4. **Motion Zone** — vibration, seismic, infrasound.
5. **Field Zone** — magnetometer and electromagnetic experiments.
6. **Sky Zone** — radio astronomy and optical/spectral observation.
7. **Particle Zone** — cosmic muon detector.
8. **Energy Zone** — solar/wind/storage and power telemetry.
9. **Access/Interpretation Zone** — tactile, sonic, spoken, visual and haptic representations of the same canonical observations.

The value is in cross-instrument questions. Example: rainfall → soil moisture → conductivity → plant response → humidity → energy conditions. Another: solar activity → radio observations → magnetometer variation → space-weather data comparison.

## 5. Data model and interoperability

Earth Sensors Lab should align its internal schema model with established observation concepts. OGC SensorThings API is particularly relevant because it defines open, geospatially enabled structures for Things, Locations, Sensors, ObservedProperties, Datastreams, Observations and FeaturesOfInterest. Its STAplus extension explicitly addresses citizen-science ownership and licensing.

ESL does not need to adopt the entire OGC stack immediately, but Schema Cards should be designed so they can map cleanly to these concepts.

Minimum observation record:

- observation_id;
- instrument_id;
- sensor/transducer_id;
- observed_property;
- value;
- unit;
- phenomenon_time;
- result_time;
- location;
- feature_of_interest;
- calibration_reference;
- protocol_id;
- operator/cohort role as appropriate;
- quality flag;
- uncertainty;
- environmental covariates;
- accessibility representations available;
- provenance/source links.

This is where Omoluabi can become useful: not as the sensor or final scientific authority, but as a system for tracing observation → instrument → calibration → protocol → source → uncertainty → contradiction → related observation.

## 6. PhD-level research agenda

A credible doctoral/university research program could be organized around four linked strands.

### Strand 1 — Instrument literacy and epistemology

How does building a sensor change students' understanding of measurement, evidence, uncertainty and scientific authority compared with using a finished commercial sensor?

### Strand 2 — Accessible multimodal scientific reasoning

How do tactile, sonic, haptic, spoken and visual representations affect pattern recognition, anomaly detection and collaboration for disabled and nondisabled learners?

### Strand 3 — Community observatory data quality

Under what conditions can low-cost student-built instruments produce scientifically useful local observations? Which calibration, collocation and QA practices generate the greatest improvement?

### Strand 4 — Networked environmental learning

What happens when multiple schools operate interoperable observatories? Can students reason across sites, climates and instrument differences? How does participation change science identity, agency and persistence over time?

Potential study designs include design-based research, mixed-methods longitudinal cohort studies, instrument-validation studies, accessibility/usability studies, cross-site replication, and comparative studies of build-versus-use pedagogies.

## 7. Program evaluation

Do not measure success only by attendance or enthusiasm. Track:

- instrument completion and redesign cycles;
- calibration performance;
- data completeness and drift;
- ability to explain the measurement chain;
- ability to distinguish observation from inference;
- ability to communicate uncertainty;
- cross-instrument reasoning;
- accessibility barriers found and resolved;
- independent student question formation;
- persistence across sessions/terms;
- public presentation quality;
- reuse of data by later cohorts;
- number of observations that can be reproduced or traced through provenance.

## 8. Funding logic

The research supports a multi-domain funding case without forcing the project into one silo:

- STEM and engineering education;
- climate/environmental education;
- disability and accessible technology;
- informal learning;
- citizen/community science;
- open hardware/open data;
- environmental justice and local monitoring;
- arts-science/public installation;
- renewable energy and resilient infrastructure;
- university-school partnerships;
- research infrastructure and workforce development.

The strongest case is not 'fund us to buy sensors.' It is **fund an accessible, networked student observatory where young people learn how scientific knowledge is produced by building, calibrating, interrogating and communicating instruments and data.**

## 9. Priority build order

### Phase 1 — Core environmental observatory

1. soil moisture + gravimetric calibration;
2. soil temperature;
3. atmospheric temperature/humidity/pressure;
4. rain and light/UV;
5. PM2.5 air sensor with EPA-style collocation/QA exercise;
6. energy telemetry;
7. plant phenology.

### Phase 2 — Earth dynamics + accessible representation

8. handmade seismograph;
9. geophone/accelerometer or Raspberry Shake pathway;
10. tactile graphing and sonification toolkit shared by all instruments;
11. acoustic biodiversity recorder;
12. DIY spectrometer.

### Phase 3 — Earth-to-space expansion

13. Arduino magnetometer;
14. Radio JOVE-style radio telescope;
15. CosmicWatch-style muon detector;
16. cross-site/networked observation protocols.

## 10. Repository implications

Each instrument folder should implement the existing ESL Instrument Standard and include:

- README/overview;
- Schema Card;
- scientific background;
- precedent/source notes;
- learning objectives;
- parts/BOM;
- safety;
- build instructions;
- schematic;
- accessible description;
- ASCII/text representation;
- code;
- calibration;
- protocol;
- data schema/sample data;
- uncertainty/QA;
- accessible multimodal outputs;
- workshop version;
- installation/public-demo version;
- research notebook prompts;
- redesign log;
- status label: proposed | prototype | tested | validated.

## Selected primary and high-value precedents

- GLOBE Protocols — atmosphere, biosphere, hydrosphere, pedosphere: https://www.globe.gov/en/do-globe/globe-protocols
- US EPA Air Sensor Toolbox: https://www.epa.gov/air-sensor-toolbox
- NASA Radio JOVE: https://radiojove.gsfc.nasa.gov/
- Raspberry Shake education curriculum: https://raspberryshake.org/curriculum/
- NASA HEAT DIY magnetometers: https://science.nasa.gov/learn/heat/
- CosmicWatch v3X open detector documentation: https://github.com/spenceraxani/CosmicWatch-Desktop-Muon-Detector-v3X
- Public Lab DIY spectrometry: https://publiclab.org/
- CAST UDL Guidelines 3.0: https://udlguidelines.cast.org/
- Perkins Accessible Science resources: https://www.perkins.org/getting-started-teaching-science-visual-impairments/
- NASA Data Sonifications: https://www.nasa.gov/data-sonifications/
- OGC SensorThings API: https://www.ogc.org/standards/sensorthings/
- National Academies, Learning Through Citizen Science: https://doi.org/10.17226/25183

## Bottom line

Earth Sensors Lab can credibly occupy a space between engineering education, environmental observatory, accessible technology lab, citizen science network and public arts/science installation. The distinctive contribution is the integration: students do not merely read sensors; they learn how measurement becomes knowledge, how uncertainty travels through a system, how the same evidence can be represented through multiple senses, and how observations from soil to space can be connected in one transparent research infrastructure.
