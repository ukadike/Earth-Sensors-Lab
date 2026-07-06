# External Programs: Sky and Space Observation

Earth Sensors Lab's founding scope already named "astronomy and interstellar
object literacy" and "weather diary and sky observation" as starter module
ideas, before this repository's research-lab documentation pass narrowed
the required curriculum to six Earth-focused modules. This page picks that
thread back up: real, currently active external programs — run by NASA,
CERN, and (bonus) ESA — that Earth Sensors Lab curriculum could align with
as students extend accessible observation from soil and garden sites to the
sky.

**None of these is an existing Earth Sensors Lab partnership.** This page
documents real, verifiable third-party programs as candidate alignment
targets, per [PARTNERSHIP_MODEL.md](../PARTNERSHIP_MODEL.md) and the
no-fabrication rule in [CLAUDE.md](../CLAUDE.md). Program details, deadlines,
and eligibility change — always verify against the live program page before
committing a class or site to one.

*Facts below current as of mid-2026; see each program's own source links.*

## NASA GLOBE Program / GLOBE Observer

- **What it is:** NASA's flagship K–12 and public citizen science program.
  Students collect soil, cloud, land cover, tree, and mosquito-habitat data
  using low-cost tools and the free GLOBE Observer app; NASA compares
  submissions against satellite data (MODIS, Landsat, Sentinel-2).
- **Cost / equipment:** Free; uses a smartphone plus simple, often
  household-level tools (thermometer, tape measure, printed guides).
- **Age range:** K–12 and general public, international.
- **Why it fits ESL:** Nearly identical to ESL's own mission statement —
  low-cost tools, community sites, real research contribution. The clearest,
  lowest-friction alignment target on this list, and it's Earth-observation
  first, sky-observation second (clouds), making it a natural bridge module
  rather than a hard pivot.
- **Offline-first note:** App-based; a low-connectivity site would need to
  batch-submit observations when connectivity is available, consistent with
  the [offline field companion](../software/offline-field-companion.md)
  concept.
- **Source:** [globe.gov](https://www.globe.gov/), [GLOBE
  Observer](https://observer.globe.gov/)

## NASA Radio JOVE

- **What it is:** Students build their own radio telescope from an
  inexpensive kit and observe real radio emissions from Jupiter, the Sun,
  and the Milky Way. NASA-run since 1999; over 2,500 teams have built kits.
- **Cost / equipment:** Not free — a physical kit purchase (SDR receiver,
  dual-dipole antenna, cables, software), though inexpensive relative to
  research-grade radio astronomy equipment.
- **Age range:** High school and college, and interested adults.
- **Why it fits ESL:** The clearest hardware-building analog to ESL's own
  Arduino/Raspberry Pi sensor-kit ethos (see
  [/hardware/sensor-kit-overview.md](../hardware/sensor-kit-overview.md)) —
  same "build it, understand it, then trust the reading" philosophy, applied
  to the sky instead of the soil.
- **Source:** [radiojove.gsfc.nasa.gov](https://radiojove.gsfc.nasa.gov/)

## Globe at Night

- **What it is:** Naked-eye citizen science measuring light pollution.
  During set periods each month, participants count visible stars against
  reference star maps and submit results, building a global light-pollution
  map.
- **Cost / equipment:** None — no instrument required at all.
- **Age range:** All ages; has an existing educator curriculum ("Dark Skies
  Rangers") for classroom use.
- **Why it fits ESL:** The lowest-barrier possible entry point into sky
  observation — zero equipment cost matches ESL's own low-cost-instrumentation
  pillar taken to its logical extreme, and light pollution is itself an
  environmental variable, connecting cleanly to
  [Module 3](../curriculum/module-03-soil-and-water.md)'s "soil, water, heat,
  and air" environmental-variable framing.
- **Accessibility note:** Inherently a visual/naked-eye task; an accessible
  variant for blind and low-vision participants has not been designed —
  `OPEN QUESTION`, tracked here rather than assumed solved. See
  [blind-low-vision-mode.md](../accessibility/blind-low-vision-mode.md).
- **Source:** [globeatnight.org](https://globeatnight.org/)

## NASA — International Astronomical Search Collaboration (IASC)

- **What it is:** School and community teams search real telescope images
  (from the Pan-STARRS 1.8m telescopes) for previously undiscovered Main
  Belt asteroids and near-Earth objects, using free Astrometrica software.
  Feeds into NASA's Near-Earth Object Program at JPL.
- **Cost / equipment:** Free to participate; software has historically
  been Windows-oriented.
- **Age range:** Middle school through college; over 700 schools and 5,000
  citizen scientists across 80+ countries have participated.
- **Why it fits ESL:** Community-based science pillar fit is strong — real
  research contribution, team-based, credited discoveries. Requires reliable
  internet access and (historically) a Windows machine, which cuts against
  ESL's offline-first and platform-agnostic commitments — flagged here as a
  genuine tension, not resolved.
- **Source:** [iasc.cosmosearch.org](https://iasc.cosmosearch.org/),
  [NASA Science](https://science.nasa.gov/citizen-science/international-astronomical-search-collaboration/)

## CERN — TIMEPIX@school / CERN@school

- **What it is:** CERN lends schools an actual Timepix radiation/cosmic-ray
  detector chip (from CERN's Medipix2 Collaboration work), which connects to
  a computer via USB. Students visualize and classify real ionizing
  radiation and cosmic-ray tracks in real time. One student project (LUCID)
  flew a Timepix payload to space.
- **Cost / equipment:** Loaned detector hardware; program-dependent, not
  a student purchase.
- **Age range:** Secondary school, with an emphasis on reaching underserved
  and underrepresented communities and increasing participation among girls.
- **Current status (as of mid-2026):** A newly coordinated version of this
  program launches in the **2026–2027 academic year**, aiming to reach
  20,000 students by 2030 — timing that makes this worth approaching now
  rather than waiting.
- **Why it fits ESL:** The strongest single equity match on this list —
  CERN's own stated focus on underserved communities and girls mirrors
  ESL's accessibility-as-research-method stance directly (see
  [ACCESSIBILITY.md](../ACCESSIBILITY.md)) — and it is the clearest bridge
  between particle physics (CERN's actual domain) and space observation
  (cosmic rays, radiation in space), which is otherwise a stretch for a
  CERN-specific alignment given CERN does not run astronomy programs.
- **Source:** [cernandsocietyfoundation.cern/timepixschool](https://cernandsocietyfoundation.cern/timepixschool/)

## Bonus, not CERN or NASA: ESA Astro Pi Challenge

- **What it is:** Students write code that runs on Raspberry Pi computers
  (called Astro Pis) aboard the International Space Station. **Mission
  Zero** (beginner, up to age 19): a simple program producing pixel art and
  reading onboard sensor data, displayed to astronauts. **Mission Space
  Lab** (more experienced coders, up to age 19): a real scientific task
  using the Astro Pi's onboard sensors or camera — the current task is
  calculating the ISS's speed.
- **Cost / equipment:** Free to enter; no hardware purchase required by
  participants (code runs on ESA's onboard hardware).
- **Why flagged despite not being CERN/NASA:** Uses the exact same
  Raspberry Pi hardware family already documented in
  [/hardware/raspberry-pi-guide.md](../hardware/raspberry-pi-guide.md) — a
  student who has used ESL's Raspberry Pi sensor-kit option already has the
  relevant skills to attempt this.
- **Current status (as of mid-2026):** The 2025–2026 cycle's deadlines have
  passed (Mission Space Lab: 16 Feb 2026; Mission Zero: 23 Mar 2026); the
  next real opportunity is the 2026–2027 cycle. Delivered nationally through
  European Space Education Resource Offices (ESERO) — non-European
  eligibility should be checked directly.
- **Source:** [astro-pi.org](https://astro-pi.org/)

## How this page should be used

This is a reference list, not a commitment. Before pursuing any program
above:

1. Check the live program page for current deadlines and eligibility —
   everything here is a snapshot, not a guarantee.
2. Decide fit against [RESEARCH_AGENDA.md](../RESEARCH_AGENDA.md) Pillar 8
   (Sky and Space Observation) and the relevant curriculum module (see
   [module-07-observing-space.md](../curriculum/module-07-observing-space.md)).
3. Treat any resulting collaboration as a pilot, per
   [PILOT_MODEL.md](../PILOT_MODEL.md) — not an assumed partnership.
