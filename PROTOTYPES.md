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

## 2. Accessible Data Dashboard

**Purpose:** A dashboard concept for viewing sensor data with screen-reader,
high-contrast, and keyboard-first support built in from the start rather than
retrofitted. **Research question:** How can blind and low-vision learners
participate in data observation? **Status:** concept documentation only, no
code yet — see [/software/prototype-dashboard.md](software/prototype-dashboard.md).

## 3. p5.js Sensor Visualization

**Purpose:** Lightweight, browser-based visual charting of sensor data for
classroom use without a build step. **Research question:** How can data
visualization support environmental science learning? **Status:** concept
documentation only — see [/software/p5-visualizations.md](software/p5-visualizations.md).

## 4. Sensor Sonification Tool

**Purpose:** Converts sensor readings (e.g., soil moisture over time) into
sound so trends are audible, not only visible. **Research question:** Can
sound and touch make environmental data more understandable? **Status:**
concept documentation only — see [/accessibility/sonification.md](accessibility/sonification.md).

## 5. Tactile Data Card System

**Purpose:** Printable, tactile (embossable/braille-compatible) cards
representing sensor data trends for hands-on, non-visual reading. **Research
question:** Can sound and touch make environmental data more understandable?
**Status:** concept documentation only — see
[/accessibility/tactile-learning.md](accessibility/tactile-learning.md).

## 6. Student Field Companion

**Purpose:** An offline-first companion (paper or lightweight app) for
recording field observations without reliable internet. **Research
question:** How can schools participate in research without carrying the
financial or infrastructural burden of experimentation? **Status:** concept
documentation only — see
[/software/offline-field-companion.md](software/offline-field-companion.md).

## 7. Teacher Research Guide

**Purpose:** Documentation supporting teachers running Earth Sensors Lab
modules as both instruction and light research participation. **Research
question:** How can local ecological knowledge become part of STEAM
education? **Status:** in development — see
[/curriculum/teacher-guide.md](curriculum/teacher-guide.md).

## 8. Community Observatory Kit

**Purpose:** A template for turning a community garden or public site into an
ongoing environmental observatory. **Research question:** How can community
gardens become observatories? **Status:** proposed — no kit built yet, module
documentation only.

## 9. AI Reflection Assistant

**Purpose:** A rule-based, transparency-first AI tool that prompts student
reflection on sensor data without grading or replacing teacher judgment.
**Research question:** How can AI support student reflection without
replacing teacher judgment? **Status:** concept documentation only — see
[/software/ai-reflection-assistant.md](software/ai-reflection-assistant.md).

## 10. Offline Garden Lab

**Purpose:** A fully offline-capable version of the sensor kit and companion
software for sites without reliable connectivity. **Research question:** How
can schools participate in research without carrying the financial burden of
experimentation? **Status:** proposed.

## Schema cards

Each prototype above should eventually have its own schema card per
[SCHEMA_CARD.md](SCHEMA_CARD.md) and a corresponding JSON schema in
[/schemas/](schemas/) (see
[sensor-kit.schema.json](schemas/sensor-kit.schema.json)). Prototypes still
at the `proposed` stage do not yet have complete schema cards — this is
tracked, not hidden.
