# Earth Sensors Lab

Earth Sensors Lab is an **accessibility-first STEAM research and learning laboratory** where mixed-ability student cohorts design, build, calibrate, operate, interrogate, and publicly explain instruments for observing Earth systems, the atmosphere, and the space environment.

Students begin with a shared garden or greenhouse observatory and learn science through instrument making: soil and water sensing, microclimate and air-quality observation, vibration and seismic measurement, light and spectroscopy, magnetometry, radio astronomy, particle detection, renewable energy, and multimodal scientific data.

The core research and engineering cycle is:

**QUESTION → DESIGN → BUILD → CALIBRATE → DEPLOY → OBSERVE → RECORD → INTERROGATE → REPRESENT → SHARE → REDESIGN**

Earth Sensors Lab is a research initiative under [Small Systems Lab](https://ukadike.github.io/Small-Systems-Lab/), part of a family of public-interest projects built on shared rules for care, evidence, accessibility, provenance, and accountable systems.

## Start Here

- [Executive Summary](EXECUTIVE_SUMMARY.md) — who, what, where, how, and what students produce
- [Playbook](PLAYBOOK.md) — program architecture and curriculum map
- [System Relationships](docs/SYSTEM-RELATIONSHIPS.md) — how ESL connects to Small Systems Lab, Omoluabi, Accessible by Design, Umada, Ijoya, Echo, and future branches without collapsing their different evidence domains
- [Instrument Standard](instruments/INSTRUMENT-STANDARD.md) — required research/build package for every instrument
- [Instrument Roadmap](instruments/INSTRUMENT-ROADMAP.md) — Earth-to-space instrument sequence
- [Instrument Schema Card](schemas/INSTRUMENT-SCHEMA-CARD.md) — structured contract connecting instruments, curricula, observations, accessibility, and Omoluabi
- [STEAM Sensor Research Synthesis](research/STEAM_SENSOR_RESEARCH_SYNTHESIS.md) — evidence and precedents behind the expanded instrument program
- [NASA Readiness Framework](docs/NASA-READINESS.md) — NASA-relevant science, STEM, research, accessibility, and partnership alignment
- [NASA-Facing Partnership Brief](docs/NASA-PARTNERSHIP-BRIEF.md) — concise brief for NASA-connected scientists, engineers, educators, and collaborators

## What This Is

Earth Sensors Lab is a research laboratory and playbook, not a finished product and not a fee-for-service school program.

It develops and documents:

- student-built scientific instruments;
- accessible and multisensory scientific interfaces;
- curricula that teach measurement, calibration, uncertainty, and evidence;
- renewable-energy infrastructure for a shared observatory;
- longitudinal environmental and space-observation methods;
- public installations and student-led workshops;
- open schemas and research protocols that can be reused across sites.

Hardware, curricula, and research claims must carry explicit status labels. Proposed work remains `proposed`; a constructed system becomes a `prototype`; testing and validation are claimed only when supported by documented evidence.

## Earth-to-Space Observatory

Earth Sensors Lab treats the garden or greenhouse as the first bounded observatory, then extends the same observation method outward.

```text
SOIL / WATER / LIVING SYSTEMS
            |
            v
      LOCAL ATMOSPHERE
            |
            v
      LIGHT / SPECTRA
            |
            v
 EARTH'S MAGNETIC ENVIRONMENT
            |
            v
       RADIO SKY
            |
            v
     COSMIC PARTICLES
```

Students may work on different instruments while observing one shared environment. Their measurements can be compared across instruments and across time, turning separate builds into a collective research system.

## Instrument Program

The expanded instrument roadmap includes systems for:

- soil moisture, temperature, conductivity, pH, and infiltration;
- water quality, irrigation, rainfall, and water cycling;
- temperature, humidity, pressure, wind, light, and UV;
- particulate and atmospheric observation;
- biodiversity, phenology, plant health, and acoustic ecology;
- mechanical and electronic vibration/seismic observation;
- light and spectral measurement;
- magnetic-field and electromagnetic observation;
- radio-sky observation;
- cosmic-particle detection;
- solar/wind generation, storage, and observatory energy telemetry;
- rule-based multimodal translation of scientific observations.

See [Instrument Roadmap](instruments/INSTRUMENT-ROADMAP.md) for the phased build sequence.

## Accessibility Is Instrument Infrastructure

Disabled students are encouraged to participate as designers, builders, researchers, and decision-makers from the beginning. Accessibility is not added after an instrument is finished.

Where scientifically appropriate, one canonical observation can support parallel representations:

```text
                OBSERVATION
                    |
      +-------------+-------------+
      |             |             |
    VISUAL         SONIC        TACTILE
      |             |             |
      +-------------+-------------+
                    |
             TEXT / SPEECH
```

Representations may include accessible tables, graphs, sonification, speech, tactile graphics, Braille/tactile labels, and haptic mappings. Transformation rules must be documented so that accessibility does not silently alter scientific meaning.

The lab also studies a research question: **how do different sensory representations affect scientific pattern recognition, explanation, collaboration, and learning?**

See [ACCESSIBILITY.md](ACCESSIBILITY.md) and [/accessibility/](accessibility/).

## Scientific Rigor

Students do not simply ask what a sensor says. Every instrument curriculum teaches them to ask:

- What physical phenomenon are we observing?
- What detects it?
- How does the phenomenon become a signal?
- How does the signal become data?
- What units are reported?
- How was the instrument calibrated?
- What creates noise, interference, or error?
- What uncertainty remains?
- What evidence supports a conclusion?
- What can the evidence not tell us?

Calibration, provenance, quality assurance, uncertainty, failed observations, and redesign are part of the curriculum rather than hidden technical details.

## Renewable Observatory

The observatory is designed to investigate its own energy system. Student projects can include solar generation, appropriate small-scale wind generation, batteries, capacitors/supercapacitors, charge control, DC distribution, load measurement, and energy budgeting.

The power system therefore becomes both infrastructure and curriculum:

**generation → storage → distribution → instrument load → telemetry → student decision-making**

Students can investigate the energy cost of making, processing, storing, and communicating an observation.

## Omoluabi and Schema Cards

Every major instrument, curriculum, observation, calibration, experiment, representation, and finding is designed to carry a stable identifier and structured record through the Small Systems Lab Schema Card method.

This makes relationships codifiable rather than dependent on prose.

[Omoluabi](https://ukadike.github.io/omoluabi/) can use those records as a rules-based interrogation layer:

**observation → instrument → sensor/transducer → calibration → protocol → uncertainty → related evidence → curriculum → accessible representations**

Omoluabi does not replace observation or scientific judgment. Its rules prohibit inventing missing measurements, converting uncertainty into fact, or treating an unsupported inference as evidence.

See [Instrument Schema Card](schemas/INSTRUMENT-SCHEMA-CARD.md) and [System Relationships](docs/SYSTEM-RELATIONSHIPS.md).

## Small Systems Lab Ecosystem

ESL is designed to be legible on its own, but visitors should be able to follow the larger system when a relationship matters:

- [Small Systems Lab](https://ukadike.github.io/Small-Systems-Lab/) — parent method and ecosystem hub.
- [Omoluabi](https://ukadike.github.io/omoluabi/) — evidence, provenance, rule-based interrogation, contradictions, uncertainty, and human review.
- [Accessible by Design / Accessibility Audit Lab](https://ukadike.github.io/accessible-by-design-prototyping/) — accessibility testing for the web, p5.js, PDFs, canvas, and multimodal interfaces ESL produces.
- [UMADA](https://ukadike.github.io/Umada/) — bounded speculative translation of systems, infrastructure, sensing, archives, and future questions; scientific ESL records and narrative canon remain separate.
- [Echo](https://ukadike.github.io/Echo/) — AI literacy around source checking, hallucination, privacy, uncertainty, accessibility, and human judgment.
- [Ijoya](https://github.com/ukadike/Ijoya) — planned exploratory relationship around embodied/movement-based connection; not yet presented as an implemented ESL dependency.

The canonical explanation of what may pass between these systems — and what must remain separate — is [docs/SYSTEM-RELATIONSHIPS.md](docs/SYSTEM-RELATIONSHIPS.md).

## NASA Readiness

Earth Sensors Lab is being developed so that its Earth-to-space science, student engineering, accessibility research, and public-engagement model can be legible to NASA scientists, engineers, STEM-engagement teams, and university collaborators.

This is **not** a claim of NASA endorsement or certification. NASA relationships and funding mechanisms have specific requirements that must be evaluated individually.

The program has substantive points of connection to Earth Science, heliophysics, radio astronomy, spectroscopy, space-environment observation, engineering education, citizen science, accessible scientific data, and STEM workforce pathways. NASA Radio JOVE is an especially relevant precedent for student-built scientific instrumentation and authentic observation.

See [NASA Readiness Framework](docs/NASA-READINESS.md) and [NASA-Facing Partnership Brief](docs/NASA-PARTNERSHIP-BRIEF.md).

## Public Observatory and Workshops

Each cohort contributes to an evolving Earth Sensors Observatory.

At designated points, students transform the working research environment into an accessible public installation. Families, schools, researchers, and community members can encounter live or historical measurements, examine instruments, experience scientific data through multiple sensory modes, and participate in student-led workshops.

Students explain not only what they observed but how they know, how the instrument was calibrated, what uncertainty remains, and what they would redesign.

Public interaction becomes evidence for the next engineering cycle.

## Research Directions

Earth Sensors Lab currently organizes research around questions including:

1. **Instrument literacy** — How does building and calibrating an instrument affect understanding of evidence, error, and uncertainty?
2. **Low-cost observatory validity** — Under what conditions can low-cost or student-built instruments produce scientifically useful observations?
3. **Accessible scientific reasoning** — How do visual, sonic, tactile, haptic, spoken, and tabular representations affect scientific interpretation?
4. **Networked observatories** — What scientific and learning value emerges when multiple sites use interoperable instruments and shared protocols?
5. **Community science and public interpretation** — How does teaching visitors change students' own understanding of evidence and scientific explanation?
6. **Energy cost of observation** — What energy is required to sense, compute, store, represent, and communicate environmental knowledge?

See [RESEARCH_AGENDA.md](RESEARCH_AGENDA.md) and [STEAM Sensor Research Synthesis](research/STEAM_SENSOR_RESEARCH_SYNTHESIS.md).

## Partnership Model

Earth Sensors Lab can work with schools, universities, museums, libraries, gardens, community organizations, accessibility researchers, engineers, scientists, artists, and funders as research and learning partners.

The goal is to develop, test, evaluate, document, and share accessible STEAM methods through funded research, fellowships, grants, institutional collaboration, and public-interest partnerships.

See [PARTNERSHIP_MODEL.md](PARTNERSHIP_MODEL.md).

## Repository Map

```text
EXECUTIVE_SUMMARY.md        — executive-level program summary
PLAYBOOK.md                 — program and curriculum architecture
MISSION.md                  — mission and research framing
RESEARCH_AGENDA.md          — research thesis and guiding questions
PARTNERSHIP_MODEL.md        — institutional collaboration model
ACCESSIBILITY.md            — accessibility commitments
ETHICS_AND_CONSENT.md       — consent, privacy, and data handling
PILOT_MODEL.md              — research-site/pilot structure
CURRICULUM.md               — curriculum overview
PROTOTYPES.md               — prototype inventory and status
SCHEMA_CARD.md              — repository schema-card rule
ROADMAP.md                  — program roadmap

/instruments/               — instrument standard, roadmap, and instrument dossiers
/research/                  — research synthesis, literature, protocols, methods
/curriculum/                — curriculum modules and field-learning materials
/accessibility/             — sensory stack and implementation guidance
/hardware/                  — prototype hardware documentation
/software/                  — data, interface, reasoning, and software documentation
/schemas/                   — structured schemas and Schema Cards
/pilots/                    — research-site and partner documentation
/docs/                      — funder, NASA, visual-language, system-relationship, review, and public materials
```

## Collaboration

Earth Sensors Lab welcomes collaboration from:

- schools and universities interested in research or learning sites;
- scientists and engineers interested in instrumentation and observation;
- accessibility researchers, disabled scientists, students, and advisors;
- museums, libraries, gardens, and public-learning institutions;
- hardware and software contributors;
- artists and creative technologists working with scientific data;
- funders and institutional partners interested in accessible STEM, Earth/space science, community research, and public-interest technology.

No fabricated results, pilots, partners, validation, or studies appear in this repository. Where something is proposed but not yet real, it is labeled accordingly.
