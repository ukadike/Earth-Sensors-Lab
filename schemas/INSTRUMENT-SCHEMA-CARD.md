# Earth Sensors Lab — Instrument Schema Card Template

```yaml
schema_version: "0.1"
id: "ESL-INSTRUMENT-000"
name: "Instrument Name"
status: "proposed" # proposed | prototype | tested | validated

purpose:
  research_question: ""
  phenomenon: ""
  domain: [] # soil | water | living_systems | atmosphere | vibration | light | electromagnetic | space | energy

participants:
  intended_learners: "mixed-ability student cohort"
  student_roles: []
  facilitator_roles: []

instrument:
  transducer: ""
  inputs: []
  raw_signal: ""
  processing_rules: []
  outputs: []
  units: []
  sampling_method: ""

accessibility:
  design_with_disabled_students: true
  representations:
    visual: null
    numeric_text: null
    sonic: null
    speech: null
    tactile: null
    haptic: null
    braille_or_tactile_labels: null
  physical_access_requirements: []
  known_access_gaps: []

data:
  observation_schema: ""
  calibration_schema: ""
  provenance_required: true
  uncertainty_required: true
  retention_rule: ""

power:
  source: []
  nominal_voltage: null
  estimated_consumption: null
  storage_dependency: null
  critical_load: false

safety:
  hazards: []
  required_controls: []
  supervision: ""

curriculum:
  curriculum_id: ""
  prerequisite_units: []
  learning_objectives: []
  required_questions: []

omoluabi:
  interoperable: true
  permitted_relationships:
    - explain
    - compare
    - trace_source
    - trace_calibration
    - identify_contradiction
    - identify_missing_evidence
    - surface_uncertainty
    - surface_access_alternative
  prohibited_behavior:
    - invent_missing_measurements
    - convert_uncertainty_into_fact
    - replace_human_scientific_judgment

relationships:
  earth_sensors_lab: []
  omoluabi: []
  ijoya: []
  umada: []
  external_precedents: []

visuals:
  schematic_id: ""
  figure_id: ""
  ascii_id: ""
  accessible_description_id: ""

validation:
  built: false
  calibration_completed: false
  field_tested: false
  disabled_participant_review: false
  evidence_refs: []
  limitations: []

next_step: ""
```

## Rule

The Schema Card is the structured contract connecting an instrument to the rest of Small Systems Lab. Fields may be extended when a scientific domain requires additional metadata, but existing meanings should not be silently changed.
