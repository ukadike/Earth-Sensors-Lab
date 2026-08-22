# Earth Sensors Lab — System Relationships

**Status:** working architecture

Earth Sensors Lab (ESL) is a distinct scientific learning and research environment inside **Small Systems Lab (SSL)**. It should be understandable on its own, but it should never appear isolated from the larger ecosystem that supplies its methods, governance, accessibility practice, narrative experiments, and public-learning pathways.

This document makes those relationships explicit.

## Relationship rule

A link between SSL projects must say **why the relationship exists**. A logo or repository link without context is not enough.

Each relationship should identify:

- what ESL contributes;
- what the connected project contributes;
- what may pass between the systems;
- what must remain separate;
- the source repository or public site;
- the status of the relationship: active, experimental, or planned.

## Small Systems Lab — parent method and ecosystem hub

**Relationship status:** active

Small Systems Lab is the parent public-interest studio and shared methodological layer. Its recurring practices — Operations of Care, Rule-Based Intelligence, Accessibility as Architecture, and Public Knowledge Stewardship — inform ESL governance, documentation, provenance, repair, access, and human review.

- Public hub: https://ukadike.github.io/Small-Systems-Lab/
- Repository: https://github.com/ukadike/Small-Systems-Lab

**ESL contribution to SSL:** environmental and space observation, student-built instrumentation, scientific-data workflows, calibration, uncertainty, accessible scientific representation, and public observatory practice.

**SSL contribution to ESL:** shared systems method, governance vocabulary, Schema Card practice, documentation discipline, accessibility baseline, and cross-project stewardship.

---

## Omoluabi — evidence, provenance, rules, and interrogation

**Relationship status:** active / architectural

Omoluabi develops infrastructure for observation, documentation, accessibility, provenance, consent, and human-governed knowledge. Its core principle — **AI assists. Rules govern. Humans publish.** — maps directly to ESL's need to distinguish measurements, source records, interpretation, uncertainty, and scientific claims.

- Public site: https://ukadike.github.io/omoluabi/
- Repository: https://github.com/ukadike/omoluabi
- Omoluabi News implementation: https://ukadike.github.io/omoluabi-news/

### What may pass from ESL to Omoluabi

- observation records;
- instrument IDs and Schema Cards;
- calibration records;
- API-source provenance;
- timestamps and location context;
- quality flags;
- uncertainty statements;
- contradictions between local instruments and external feeds;
- accessible representations associated with the same observation.

### What Omoluabi may do with ESL material

- trace a reading to its instrument, protocol, calibration, and source;
- compare observations without erasing differences in units, timing, or reference frame;
- identify missing evidence;
- identify contradictions;
- surface uncertainty;
- expose an accessible alternative representation;
- preserve a human-review step before a scientific or public claim is made.

### What Omoluabi may not do

- invent missing measurements;
- convert uncertainty into fact;
- declare causation from correlation;
- replace scientific judgment;
- merge narrative/speculative material into the scientific record without explicit boundaries.

Omoluabi already documents an `earth-sensors-lab-bridge/` area in its repository architecture. ESL should treat that bridge as a formal cross-repository interface rather than an informal mention.

---

## Accessible by Design / Accessibility Audit Lab — testing the interfaces

**Relationship status:** active / tooling

Accessibility Audit Lab is the SSL accessibility-testing toolkit for websites, p5.js sketches, PDFs, creative coding, civic media, and experimental interfaces. ESL produces all of those forms, so the relationship is operational rather than merely philosophical.

- Public tool: https://ukadike.github.io/accessible-by-design-prototyping/
- Repository: https://github.com/ukadike/accessible-by-design-prototyping

### ESL → Accessibility Audit Lab

ESL supplies real scientific interfaces to test:

- GitHub Pages documentation;
- p5.js trajectory and data sketches;
- charts and dashboards;
- PDFs and workshop handouts;
- canvas-based visualizations;
- keyboard and screen-reader workflows;
- captions, transcripts, alt text, long descriptions, sonification, and tactile equivalents.

### Accessibility Audit Lab → ESL

The audit system supplies repeatable checks, remediation guidance, and human-review prompts. It does **not** certify ESL as accessible; disabled-user review and assistive-technology testing remain necessary.

---

## Umada — speculative worldbuilding as a bounded research translation

**Relationship status:** experimental / narrative

UMADA is a governed living archive and canon engine for speculative worldbuilding. It is not a scientific authority and must not be presented as one.

- Public site: https://ukadike.github.io/Umada/
- Repository: https://github.com/ukadike/Umada

### Useful relationship

ESL can provide real methods and phenomena that become material for speculative research and storytelling: sensing, energy systems, environmental change, accessibility, archives, civic signs, signal loss, calibration, data survival, and the social meaning of observation.

UMADA can provide ESL with a place to ask future-facing questions about what happens when measurement systems fail, data disappears, infrastructure becomes inaccessible, or communities must interpret partial records.

### Boundary

Scientific ESL data and UMADA canon are separate evidence domains. A narrative transformation must be labeled as narrative/speculative and may never overwrite, backfill, or masquerade as an ESL observation.

---

## Ijoya — embodied and movement-based connection

**Relationship status:** planned / exploratory

Ijoya currently defines itself as **“Connections through the joy of dance.”** Its relationship to ESL should therefore be developed carefully rather than invented prematurely.

- Repository: https://github.com/ukadike/Ijoya

A future bridge may investigate how environmental or astronomical patterns can be encountered through movement, rhythm, spatial participation, or other embodied public experiences. Any such bridge should begin with Ijoya's own evolving canon and accessibility requirements rather than treating dance as decoration for scientific data.

---

## Echo — AI literacy around scientific systems

**Relationship status:** active / educational

Echo is SSL's AI-literacy and creative-technology education branch. It teaches people to question, use, critique, and shape AI systems without surrendering judgment, accessibility, culture, or community knowledge.

- Public site: https://ukadike.github.io/Echo/
- Repository: https://github.com/ukadike/Echo

For ESL, Echo can support lessons about:

- what an AI system knows versus guesses;
- hallucination and uncertainty;
- why source provenance matters;
- interpreting sensor and API data without turning models into authorities;
- privacy and data-upload boundaries;
- accessible use of AI-assisted scientific explanation;
- human review of summaries, classifications, and anomaly flags.

Echo does not replace Omoluabi's governance layer or ESL's scientific protocol. It is the public-learning layer for understanding machine assistance.

---

## Ounje and future SSL branches

**Relationship status:** not yet formalized

Small Systems Lab also identifies Ounje as a developing branch focused on food memory, healing recipes, cultural documentation, and cooking as archive. There is no public repository or site to link yet.

ESL should not fabricate a technical relationship simply to make the ecosystem appear complete. When a real bridge exists — for example, garden cultivation, food plants, environmental conditions, or community memory — it should be documented here with the same evidence/status discipline as the other relationships.

---

## Cross-system object model

The systems should connect through identifiable records rather than vague thematic similarity.

A future shared relation object can use fields such as:

```yaml
relation_id: SSL-REL-0001
source_system: Earth-Sensors-Lab
source_object_id: ESL-OBS-...
relationship: interpreted_by | audited_by | contextualized_by | translated_into | taught_through
 target_system: Omoluabi | Accessible-by-Design | Umada | Ijoya | Echo
 target_object_id: optional-stable-id
status: active | experimental | planned
boundary: scientific | governance | accessibility | educational | narrative
provenance:
  source_url: ...
  created_at: ...
  reviewed_by: ...
notes: ...
```

The important rule is that **relationship does not mean equivalence**. A soil-moisture observation, an Omoluabi evidence record, an accessibility audit result, and an Umada narrative artifact may be linked while remaining different kinds of objects with different standards of truth.

## Public-navigation requirement

Every SSL project page should eventually include:

1. a visible “Part of Small Systems Lab” context link;
2. a short explanation of the parent method;
3. contextual links to sibling projects that actually relate to the current page;
4. an ecosystem map or relationship page;
5. reciprocal links from sibling repositories where a formal bridge exists.

For Earth Sensors Lab, this document is the current canonical explanation of those relationships.
