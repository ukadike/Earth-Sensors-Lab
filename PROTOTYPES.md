# Prototypes

Ten prototype areas make up the current work of Earth Sensors Lab. All are
labeled `prototype` or `in development` — none is a finished, shipped
product. Each is tied to at least one question in
[RESEARCH_AGENDA.md](RESEARCH_AGENDA.md).

| # | Prototype | Status | Documentation |
|---|---|---|---|
| 1 | Environmental Sensor Kit | prototype | [/hardware/sensor-kit-overview.md](hardware/sensor-kit-overview.md) |
| 2 | Accessible Data Dashboard | in development (concept) | [/software/prototype-dashboard.md](software/prototype-dashboard.md) |
| 3 | p5.js Sensor Visualization | in development (concept) | [/software/p5-visualizations.md](software/p5-visualizations.md) |
| 4 | Sensor Sonification Tool | in development (concept) | [/accessibility/sonification.md](accessibility/sonification.md) |
| 5 | Tactile Data Card System | in development (concept) | [/accessibility/tactile-learning.md](accessibility/tactile-learning.md) |
| 6 | Student Field Companion | in development (concept) | [/software/offline-field-companion.md](software/offline-field-companion.md) |
| 7 | Teacher Research Guide | in development | [/curriculum/teacher-guide.md](curriculum/teacher-guide.md) |
| 8 | Community Observatory Kit | proposed | [/curriculum/module-06-community-observatory.md](curriculum/module-06-community-observatory.md) |
| 9 | AI Reflection Assistant | in development (concept) | [/software/ai-reflection-assistant.md](software/ai-reflection-assistant.md) |
| 10 | Offline Garden Lab | proposed | [/software/offline-field-companion.md](software/offline-field-companion.md) |

## 1. Environmental Sensor Kit

**Purpose:** A low-cost, classroom- and garden-ready kit for sensing soil
moisture, temperature, humidity, light, and sound. **Research question:** How
can students learn environmental science through low-cost sensors? **Status:**
prototype — parts list and build guides exist in [/hardware/](hardware/); no
kit has been field-tested with students yet.

**Schema card**
- Audience: students (elementary through secondary), teachers, community garden stewards
- Accessibility requirements: tactile kit labeling (concept, unresolved — see [blind-low-vision-mode.md](accessibility/blind-low-vision-mode.md)), spoken/numeric readings, low-cost hardware assumption
- Inputs: soil moisture, temperature, humidity, light, and audio-level readings from physical sensors
- Outputs: raw numeric sensor readings, logged via Arduino or Raspberry Pi
- Materials: microcontroller, soil moisture probe, temperature/humidity sensor, light sensor, microphone, battery/solar power, enclosure — full list in [parts-list.md](hardware/parts-list.md)
- Data collected: environmental readings only, site-level not student-level; no personal data
- Consent needs: site/school agreement for kit deployment; no individual student consent needed since no personal data is collected
- Risks: soil-probe corrosion, unresolved enclosure/weatherproofing design, zero field-testing to date
- Next steps: build and field-test one working kit at a real site; calibrate sensors; resolve enclosure design

## 2. Accessible Data Dashboard

**Purpose:** A dashboard concept for viewing sensor data with screen-reader,
high-contrast, and keyboard-first support built in from the start rather than
retrofitted. **Research question:** How can blind and low-vision learners
participate in data observation? **Status:** concept documentation only, no
code yet — see [/software/prototype-dashboard.md](software/prototype-dashboard.md).

**Schema card**
- Audience: students and teachers viewing sensor/curriculum data, including blind and low-vision users
- Accessibility requirements: screen-reader-readable data tables, full keyboard operability, high-contrast mode, sonified equivalent, printable low-ink export
- Inputs: sensor and curriculum data records per [data-schema.md](software/data-schema.md)
- Outputs: visual charts, accessible data tables, printable/high-contrast views
- Materials: none yet — concept only, no code written
- Data collected: none (no code exists); a future version would show only site/class-level data, never student PII
- Consent needs: none yet; a working version would be governed by [ETHICS_AND_CONSENT.md](ETHICS_AND_CONSENT.md)
- Risks: designing visual-first and retrofitting accessibility afterward; no accessibility-advisor review has occurred
- Next steps: build a minimal working prototype against data-schema.md; test with a real screen reader before making any accessibility claim

## 3. p5.js Sensor Visualization

**Purpose:** Lightweight, browser-based visual charting of sensor data for
classroom use without a build step. **Research question:** How can data
visualization support environmental science learning? **Status:** concept
documentation only — see [/software/p5-visualizations.md](software/p5-visualizations.md).

**Schema card**
- Audience: students and teachers in classrooms with browser access, no build step required
- Accessibility requirements: text/data-table alternative alongside every canvas-drawn chart (canvas content is not natively screen-reader accessible)
- Inputs: [data-schema.md](software/data-schema.md) records
- Outputs: a single-file, no-build-step browser chart (HTML + p5.js)
- Materials: none yet — concept only
- Data collected: none
- Consent needs: none yet
- Risks: small classroom data sets may render poorly; the canvas-accessibility gap is unresolved
- Next steps: build one working sketch against sample data; add the text-table fallback before calling it accessible

## 4. Sensor Sonification Tool

**Purpose:** Converts sensor readings (e.g., soil moisture over time) into
sound so trends are audible, not only visible. **Research question:** Can
sound and touch make environmental data more understandable? **Status:**
concept documentation only — see [/accessibility/sonification.md](accessibility/sonification.md).

**Schema card**
- Audience: students, including blind and low-vision learners, in general classroom use
- Accessibility requirements: a spoken or text description must accompany every sonified clip; captions/transcripts per [captions-transcripts.md](accessibility/captions-transcripts.md)
- Inputs: a single data variable's trend (e.g., soil moisture over time)
- Outputs: a short audio clip mapping the variable to pitch, tempo, or volume
- Materials: none yet — concept only
- Data collected: none
- Consent needs: none yet
- Risks: sound-mapping choices are undecided; no hard-of-hearing/Deaf accessibility review yet; risk of over-designing before pilot feedback exists
- Next steps: pilot one simple mapping (e.g., pitch = moisture level) inside [Module 4](curriculum/module-04-sound-and-data.md); gather feedback before generalizing

## 5. Tactile Data Card System

**Purpose:** Printable, tactile (embossable/braille-compatible) cards
representing sensor data trends for hands-on, non-visual reading. **Research
question:** Can sound and touch make environmental data more understandable?
**Status:** concept documentation only — see
[/accessibility/tactile-learning.md](accessibility/tactile-learning.md).

**Schema card**
- Audience: blind and low-vision students specifically, and general classroom use
- Accessibility requirements: raised-line/braille-compatible printing; every card paired with a spoken or text summary, never tactile-only
- Inputs: a single data trend
- Outputs: a printable, physical tactile card
- Materials: production method undecided (thermoform, swell paper, or 3D print) — nothing sourced yet
- Data collected: none
- Consent needs: none yet
- Risks: production method unresolved; no tactile-graphics user has tested a card yet
- Next steps: produce one test card by hand; get feedback from a tactile-graphics user before iterating further

## 6. Student Field Companion

**Purpose:** An offline-first companion (paper or lightweight app) for
recording field observations without reliable internet. **Research
question:** How can schools participate in research without carrying the
financial or infrastructural burden of experimentation? **Status:** concept
documentation only — see
[/software/offline-field-companion.md](software/offline-field-companion.md).

**Schema card**
- Audience: students recording field observations individually or in small groups, at sites with unreliable connectivity
- Accessibility requirements: paper-compatible fallback via [student-workbook.md](curriculum/student-workbook.md), low-cost/shared-device hardware compatible, plain language
- Inputs: manually entered field observations, per [field-notebook-model.md](curriculum/field-notebook-model.md)
- Outputs: locally stored records, mergeable with sensor data via [data-schema.md](software/data-schema.md) once synced
- Materials: none yet — concept only; would run on a shared classroom device or the same Arduino/Raspberry Pi hardware as the sensor kit
- Data collected: field observations only, no student PII by design
- Consent needs: none yet; a working version would be governed by [ETHICS_AND_CONSENT.md](ETHICS_AND_CONSENT.md)
- Risks: no app or interface built yet; offline-sync conflict handling is undesigned
- Next steps: build a minimal offline-capable prototype; test it against the paper workbook as a control

## 7. Teacher Research Guide

**Purpose:** Documentation supporting teachers running Earth Sensors Lab
modules as both instruction and light research participation. **Research
question:** How can local ecological knowledge become part of STEAM
education? **Status:** in development — see
[/curriculum/teacher-guide.md](curriculum/teacher-guide.md).

**Schema card**
- Audience: teachers running Earth Sensors Lab curriculum modules
- Accessibility requirements: plain language, printable low-ink versions, mixed-ability classroom adaptation notes
- Inputs: curriculum modules and specific classroom context
- Outputs: adapted lesson plans; informal classroom notes fed into the pilot process
- Materials: none — documentation only
- Data collected: none directly; informal classroom notes only if a teacher chooses to share them via GitHub Issues
- Consent needs: none for the guide itself; any resulting data-sharing follows [ETHICS_AND_CONSENT.md](ETHICS_AND_CONSENT.md)
- Risks: no module has been field-tested yet, so all adaptation guidance is provisional
- Next steps: revise with real teacher feedback after the first pilot actually runs

## 8. Community Observatory Kit

**Purpose:** A template for turning a community garden or public site into an
ongoing environmental observatory. **Research question:** How can community
gardens become observatories? **Status:** proposed — no kit built yet, module
documentation only.

**Schema card**
- Audience: community garden stewards, multi-age community groups, schools with an existing garden partnership
- Accessibility requirements: physical site accessibility (path access, seating) alongside data accessibility; multilingual signage
- Inputs: ongoing site observations and readings over time
- Outputs: a sustained observation log, owned by the community/site
- Materials: same components as the Environmental Sensor Kit, deployed for longer duration — no kit built yet
- Data collected: site-level environmental data, community-owned per [ETHICS_AND_CONSENT.md](ETHICS_AND_CONSENT.md)
- Consent needs: community/site steward agreement on what's shared publicly versus kept local
- Risks: no kit exists yet; long-term maintenance and stewardship model is undesigned
- Next steps: pair with a real community-garden pilot (see [community-garden-pilot-template.md](pilots/community-garden-pilot-template.md)) before building anything

## 9. AI Reflection Assistant

**Purpose:** A rule-based, transparency-first AI tool that prompts student
reflection on sensor data without grading or replacing teacher judgment.
**Research question:** How can AI support student reflection without
replacing teacher judgment? **Status:** concept documentation only — see
[/software/ai-reflection-assistant.md](software/ai-reflection-assistant.md).

**Schema card**
- Audience: students and teachers using AI-supported reflection during [Module 5](curriculum/module-05-ai-and-patterns.md)
- Accessibility requirements: plain-language, screen-reader-compatible output; explicit AI-use disclosure
- Inputs: a sensor or curriculum data trend
- Outputs: reflection prompts and flags — never grades or final conclusions
- Materials: none yet — no model, prompt design, or code has been built
- Data collected: none directly; any future version must minimize student data per [ai-boundaries.md](software/ai-boundaries.md)
- Consent needs: AI-use disclosure required before any classroom use, per [ETHICS_AND_CONSENT.md](ETHICS_AND_CONSENT.md)
- Risks: overclaiming scientific certainty, grading misuse, erasing local ecological knowledge — see [ai-boundaries.md](software/ai-boundaries.md)
- Next steps: design against [ai-boundaries.md](software/ai-boundaries.md) and [reasoning-layers.md](software/reasoning-layers.md) before any implementation begins

## 10. Offline Garden Lab

**Purpose:** A fully offline-capable version of the sensor kit and companion
software for sites without reliable connectivity. **Research question:** How
can schools participate in research without carrying the financial burden of
experimentation? **Status:** proposed.

**Schema card**
- Audience: sites without reliable connectivity — community gardens, remote or under-resourced schools
- Accessibility requirements: fully offline operation, low-cost hardware compatible, paper fallback
- Inputs: manual and sensor-based field data
- Outputs: locally stored records with optional later sync
- Materials: same as the Student Field Companion, plus off-grid power — see [power-solar-battery.md](hardware/power-solar-battery.md)
- Data collected: environmental/field data, site-owned
- Consent needs: site steward/community agreement per [ETHICS_AND_CONSENT.md](ETHICS_AND_CONSENT.md)
- Risks: no implementation exists yet; power budget and runtime are unresolved
- Next steps: combine the Student Field Companion concept with [power-solar-battery.md](hardware/power-solar-battery.md) into one buildable spec

## Schema cards

All ten prototypes above now carry a filled schema card (audience,
accessibility requirements, inputs, outputs, materials, data collected,
consent needs, risks, next steps), following the rule in
[SCHEMA_CARD.md](SCHEMA_CARD.md) and the structure in
[/schemas/lab.schema.json](schemas/lab.schema.json). Each card's `name`,
`purpose`, and `research_question` fields are the heading and the
**Purpose**/**Research question** line already given above the card, not
repeated inside it.

These cards describe current, honest status — most fields read "none yet"
or "undesigned" because most prototypes have not been built. That is the
point of a schema card at this stage: it names exactly what's missing, not
just what's planned. As each prototype moves from `proposed`/`concept` to a
real build or pilot, its card should be updated with real inputs, outputs,
and data — not left as a static aspiration.
