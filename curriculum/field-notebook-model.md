# Field Notebook Model

The field notebook is central to Earth Sensors Lab.

Each student should be able to record:

- what I noticed
- what I measured
- what surprised me
- what changed
- what I heard
- what I touched
- what I smelled
- what I wonder
- what the sensor showed
- what I think it means
- what I want to test next

## Why a notebook, not a form

A form with fixed numeric fields only captures what it was designed to
capture. A notebook — even a structured one, like the prompts above — leaves
room for a student to record something the curriculum designer didn't
anticipate: an insect no one expected, a smell that changed after rain, a
question with no obvious answer. That surplus is not noise; per
[/research/what-counts-as-data.md](../research/what-counts-as-data.md), it
is exactly the kind of data a narrowly numeric system would discard.

## Relationship to the student workbook

[student-workbook.md](student-workbook.md) is the printable, per-module
implementation of this model — each module's workbook page is a scoped
subset of the eleven prompts above, chosen to fit that module's activity.
This document is the underlying model; the workbook is one concrete format
it takes. A teacher or site could implement this same model in a physical
notebook, a shared class chart, or an audio-recorded journal without using
the printed workbook at all.

## Relationship to reasoning layers

The eleven prompts above map onto the
[reasoning layers](../software/reasoning-layers.md) roughly as follows:
"what I noticed" → Layer 1 (Observation); "what I measured"/"what the
sensor showed" → Layer 2 (Measurement); "what changed"/"what surprised me" →
Layer 3 (Pattern); "what I think it means" → Layer 5 (Explanation); "what I
wonder" → Layer 6 (Uncertainty); "what I want to test next" → Layer 9
(Action). The sensory-specific prompts ("what I heard," "what I touched,"
"what I smelled") correspond to the embodied and audio layers of the
[sensory stack](../accessibility/sensory-stack.md).

## Accessibility notes

The notebook model is deliberately sense-inclusive by design — "what I
heard," "what I touched," and "what I smelled" are first-class prompts, not
alternatives offered only to students who can't see. Any format the model is
implemented in (paper, audio, digital) must preserve all eleven prompts; a
format that drops the non-visual prompts to save space is not a valid
implementation of this model.

## Status

Design model, implemented today only through
[student-workbook.md](student-workbook.md). No digital or audio-journal
implementation exists yet.
