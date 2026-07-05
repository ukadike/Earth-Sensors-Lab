# Audio Sensing

Prototype documentation for the microphone/audio component of the sensor
kit (see [sensor-kit-overview.md](sensor-kit-overview.md)).

## Purpose and scope

Environmental and biodiversity sound sensing — birds, insects, wind, water —
**not** conversation, voice, or any form of human-speech capture. This scope
limit is deliberate and connects directly to the no-surveillance framing in
[ETHICS_AND_CONSENT.md](../ETHICS_AND_CONSENT.md).

## What it measures

Sound level (amplitude) at minimum; potentially simple frequency-band
information for more advanced prototypes (e.g., distinguishing broad
"insect buzz" ranges from "bird call" ranges), which is `OPEN QUESTION` for
whether this repository's low-cost hardware target can support it
reliably.

## Classroom / curriculum use

Primary hardware reference for
[module-04-sound-and-data.md](../curriculum/module-04-sound-and-data.md)
("Sounding the Environment" half).

## Consent and privacy notes

- Any audio-sensing deployment at a real site must be scoped in its consent
  materials specifically to environmental sound, not incidental human
  speech — see [ETHICS_AND_CONSENT.md](../ETHICS_AND_CONSENT.md).
- Placement should avoid areas where private conversation is likely (e.g.,
  not near a classroom seating area) to minimize incidental voice capture
  even when not the sensor's intended target.

## Accessibility notes

Audio sensing pairs naturally with
[sonification.md](../accessibility/sonification.md) design work, but the two
are distinct: audio sensing captures real environmental sound, while
sonification converts *other* sensor data (e.g., soil moisture trends) into
sound. Both should be captioned/transcribed per
[captions-transcripts.md](../accessibility/captions-transcripts.md) when used
in any recorded demo.

## Status

Concept-stage documentation. No audio-sensing prototype has been built or
tested as of this writing.
