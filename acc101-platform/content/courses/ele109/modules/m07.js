// ele109 - Module 7: Sensors: Proximity, Photoelectric & Limit Switches
module.exports = {
  "number": 7,
  "slug": "sensors-proximity-photoelectric-limit-switches",
  "title": "Sensors: Proximity, Photoelectric & Limit Switches",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a sensor does and how it differs from a switch.",
    "Describe inductive, capacitive, and magnetic proximity sensors and what each detects.",
    "Describe photoelectric sensors: through-beam, retroreflective, and diffuse.",
    "Describe limit switches and their actuators: lever, roller, and plunger.",
    "Explain sensing distance, hysteresis, and normally open vs normally closed sensor outputs."
  ],
  "sections": [
    {
      "heading": "Sensors vs Switches: Detecting Without Touching",
      "html": "<p>A <strong>switch</strong> is operated by physical contact — a person presses a button, a machine part hits a limit switch. A <strong>sensor</strong> detects a condition without necessarily touching it: a proximity sensor detects a metal part that comes near it, a photoelectric sensor detects an object that breaks its light beam, and neither one is touched by the thing it detects. That contactless detection is what makes sensors fast, reliable, and able to work in places a switch cannot reach — inside a machine, on a fast-moving conveyor, or in a washdown area where a mechanical switch would fail.</p>\n<p>Every sensor has the same three parts: a <strong>sensing element</strong> that reacts to the target, an <strong>electronic circuit</strong> that decides whether the target is present, and an <strong>output</strong> (usually a transistor, PNP or NPN) that signals the PLC. The sensor needs power (usually 24 V DC) and it has a <strong>sensing distance</strong> — how far away it can detect its target — and a <strong>hysteresis</strong> — the small gap between the distance where it turns on and the distance where it turns off, which stops it from flickering when a target sits at the edge of its range. The sensor's datasheet gives all of these, and the selection starts there.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A sensor detects without touching. Its sensing element reacts to the target, its circuit decides, and its transistor output signals the PLC.</div>"
    },
    {
      "heading": "Proximity Sensors: Inductive, Capacitive & Magnetic",
      "html": "<p>An <strong>inductive proximity sensor</strong> detects metal. It generates a high-frequency magnetic field from its face, and a metal target entering the field absorbs energy from it, which the sensor's circuit detects. It detects only metal (steel best, aluminum and brass at shorter distances), it works through dirt and oil, and it is the workhorse sensor for detecting machine parts, cylinder pistons, and metal products on a conveyor. Its sensing distance is short — typically 2–15 mm — and it must be mounted close to the target's path.</p>\n<p>A <strong>capacitive proximity sensor</strong> detects almost anything — metal, plastic, wood, paper, liquid, and even a hand — because it senses a change in capacitance when any material enters its electric field. It is the choice for detecting non-metal targets such as plastic bottles, cardboard boxes, and liquid levels through a container wall. Its weakness is that it can be fooled by moisture, dust, and material buildup on its face, so it needs a clean face and a careful sensitivity setting. A <strong>magnetic proximity sensor</strong> (reed switch or Hall effect) detects a magnet, and it is used mainly to detect the piston position inside a pneumatic cylinder, where a magnet is mounted on the piston and the sensor is clamped to the outside of the cylinder.</p>"
    },
    {
      "heading": "Photoelectric Sensors: Through-Beam, Retroreflective & Diffuse",
      "html": "<p>A <strong>photoelectric sensor</strong> uses light to detect an object, and it comes in three arrangements. A <strong>through-beam</strong> sensor has a separate emitter and receiver facing each other; the object breaks the beam and the receiver signals. It has the longest range (up to tens of meters) and is the most reliable, because the beam is strong and the object cannot hide from it — but it needs two devices and alignment. A <strong>retroreflective</strong> sensor has the emitter and receiver in one housing and a reflector on the other side; the object breaks the beam on its way to the reflector. It needs only one device and a reflector, and its range is several meters. A <strong>diffuse</strong> sensor has the emitter and receiver in one housing and detects the light reflected back from the object itself — no reflector needed, but the range is short (up to a meter or two) and it depends on the object's color and surface: a white box reflects well, a black box poorly.</p>\n<p>Photoelectric sensors also have a <strong>light-on / dark-on</strong> choice: a light-on sensor turns its output on when the receiver sees light (no object present), and a dark-on sensor turns its output on when the receiver is dark (object present). The choice depends on the logic: for detecting parts on a conveyor, dark-on is the usual choice, because the output is on when a part is present. A dirty lens is the most common photoelectric fault — a film of dust on the emitter or the receiver weakens the beam until the sensor stops seeing reliably, and cleaning the lens fixes it.</p>"
    },
    {
      "heading": "Limit Switches & Sensor Selection",
      "html": "<p>A <strong>limit switch</strong> is the mechanical sensor: a switch with an <strong>actuator</strong> — a lever, a roller, or a plunger — that a moving machine part presses. It is simple, rugged, and certain: when the part hits the lever, the contacts change, with no electronics to fail. Its limits are mechanical: it needs physical contact, it wears with use, and it can only be placed where the moving part can reach it. Limit switches are still the choice for end-of-travel detection, for safety interlocks on guards and doors, and for any position where a positive mechanical action is required. A limit switch on a guard door is a safety device, and its contacts are wired into the safety circuit (Module 11), not just into the PLC.</p>\n<p>Selecting a sensor is a checklist: <strong>what is the target</strong> (metal, plastic, liquid, a magnet) — that chooses inductive, capacitive, magnetic, or photoelectric; <strong>how far away is it</strong> — that sets the sensing distance; <strong>what is the environment</strong> (washdown, dust, oil, temperature) — that sets the enclosure rating (IP67 is the common industrial rating, meaning dust-tight and protected against temporary immersion); <strong>what output is needed</strong> (PNP or NPN, NO or NC) — that must match the PLC input module (Module 3); and <strong>how fast is it</strong> — the sensor's response time must be faster than the target's passing time, or the target will be missed.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Using a diffuse photoelectric sensor to detect a black object at long range. A black surface reflects little light, so the sensor cannot see it — use a through-beam or retroreflective sensor, or an inductive sensor if the object is metal.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A sensor detects without touching; a switch needs physical contact. Every sensor has a sensing element, a decision circuit, and a transistor output.</li>\n<li>Inductive proximity: metal only, short range, rugged. Capacitive: almost anything, but fooled by moisture and buildup. Magnetic: detects a magnet, used for cylinder pistons.</li>\n<li>Photoelectric: through-beam (longest range, most reliable, two devices), retroreflective (one device plus a reflector), diffuse (no reflector, short range, depends on the object's surface).</li>\n<li>Light-on: output on when light is seen. Dark-on: output on when the beam is broken (object present).</li>\n<li>Limit switches: mechanical, certain, used for end-of-travel and safety interlocks. Their contacts are wired into the safety circuit.</li>\n<li>Selection checklist: target material, sensing distance, environment (IP rating), output type (PNP/NPN, NO/NC), and response time.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Blaming the PLC when a sensor misses parts. Check the sensor first: a dirty lens, a wrong sensing distance, a target that is too fast for the sensor's response time, or an output type that does not match the input module.</div>\n<p><strong>Ready-to-Work link:</strong> If you can pick the right sensor for a metal part, a plastic bottle, and a guard door, you have this module. Module 8 covers human-machine interfaces.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Sensor", "def": "A device that detects a condition without necessarily touching the target, and signals the PLC." },
    { "term": "Inductive proximity sensor", "def": "A sensor that detects metal by the energy a metal target absorbs from its magnetic field." },
    { "term": "Capacitive proximity sensor", "def": "A sensor that detects almost any material by a change in capacitance." },
    { "term": "Magnetic proximity sensor", "def": "A sensor that detects a magnet; used for pneumatic cylinder piston position." },
    { "term": "Photoelectric sensor", "def": "A sensor that detects an object with a light beam." },
    { "term": "Through-beam sensor", "def": "A photoelectric sensor with a separate emitter and receiver; the object breaks the beam." },
    { "term": "Retroreflective sensor", "def": "A photoelectric sensor with emitter and receiver in one housing and a reflector opposite." },
    { "term": "Diffuse sensor", "def": "A photoelectric sensor that detects light reflected back from the object itself." },
    { "term": "Light-on", "def": "A photoelectric output that is on when the receiver sees light (no object)." },
    { "term": "Dark-on", "def": "A photoelectric output that is on when the beam is broken (object present)." },
    { "term": "Limit switch", "def": "A mechanical switch operated by a moving machine part through a lever, roller, or plunger." },
    { "term": "Sensing distance", "def": "How far from its face a sensor can detect its target." },
    { "term": "Hysteresis", "def": "The gap between a sensor's turn-on and turn-off distances, which prevents flicker at the edge of its range." },
    { "term": "IP67", "def": "An enclosure rating: dust-tight and protected against temporary immersion in water." },
    { "term": "Response time", "def": "How fast a sensor can react; it must be faster than the target's passing time." }
  ],
  "video": {
    "title": "Industrial Control Switches & Sensors Explained | Push Buttons, Selector, Proximity & Limit Switch",
    "embedUrl": "https://www.youtube.com/embed/kSXqKsN7Sus",
    "note": "A walkthrough of industrial switches and sensors — push buttons, selectors, proximity sensors, and limit switches — with each one's job and wiring explained.",
    "more": [
      { "title": "Compare the Parts: Limit Switch v. Proximity Sensor", "url": "https://www.youtube.com/watch?v=XhtjkWNtLoM" },
      { "title": "Photoelectric Sensor Explained (with Practical Examples)", "url": "https://www.youtube.com/watch?v=l1rjErRvbgw" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A steel part passes a sensor at 5 mm. Which sensor type fits, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An inductive proximity sensor. Step 2: The target is metal and the distance is short, which is exactly the inductive sensor's job. Step 3: It works through dirt and oil and has no moving parts to wear.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A plastic bottle on a conveyor must be detected at 300 mm. Which sensor type fits, and why not an inductive sensor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A photoelectric sensor — retroreflective or diffuse, depending on the bottle's surface. Step 2: An inductive sensor cannot detect plastic, and its range is only a few millimeters. Step 3: The photoelectric sensor's range is hundreds of millimeters and it detects any material that breaks or reflects the beam.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A pneumatic cylinder's piston position must be detected from outside the cylinder. Which sensor fits, and how does it work?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A magnetic proximity sensor clamped to the outside of the cylinder. Step 2: A magnet is mounted on the piston inside the cylinder. Step 3: When the piston reaches the sensor, the magnet operates it — no contact, no penetration of the cylinder wall.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A photoelectric sensor's output should be on when a part is present on the conveyor. Should it be light-on or dark-on? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Dark-on. Step 2: A dark-on sensor turns its output on when the receiver is dark — when the part breaks the beam. Step 3: Light-on would turn the output on when no part is present, which is backwards for this job.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A guard door must stop the machine when it is opened. Which device fits, and where do its contacts go?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A limit switch (or a safety interlock switch) on the guard door. Step 2: Its contacts go into the safety circuit (Module 11), not just into the PLC. Step 3: A mechanical switch gives a positive action — when the door opens, the contacts change with certainty.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A diffuse photoelectric sensor fails to detect black boxes but detects white boxes fine. What is happening, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A diffuse sensor detects light reflected from the object, and a black surface reflects little light. Step 2: The sensor cannot see the black box at the set distance. Step 3: The fix is a through-beam or retroreflective sensor, which does not depend on the object's reflectivity — or a different sensor type if the box is metal.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An inductive proximity sensor detects:",
      "choices": ["Any material", "Metal only", "Only liquids", "Only magnets"],
      "answer": 1,
      "explanation": "Correct: (b). Inductive sensors detect metal by magnetic field absorption. (a) Almost any material is a capacitive sensor. (c) Liquids are detected by capacitive sensors. (d) Magnets are detected by magnetic sensors."
    },
    {
      "q": "A capacitive proximity sensor can detect:",
      "choices": ["Metal only", "Almost any material, including plastic and liquid", "Only magnets", "Only light"],
      "answer": 1,
      "explanation": "Correct: (b). Capacitive sensors sense a change in capacitance from any material. (a) Metal only is an inductive sensor. (c) Magnets are detected by magnetic sensors. (d) Light is detected by photoelectric sensors."
    },
    {
      "q": "A through-beam photoelectric sensor has:",
      "choices": ["One device and a reflector", "A separate emitter and receiver facing each other", "No light source", "Only a receiver"],
      "answer": 1,
      "explanation": "Correct: (b). Through-beam uses separate emitter and receiver. (a) One device plus a reflector is retroreflective. (c) All photoelectric sensors have a light source. (d) A receiver alone cannot make a beam."
    },
    {
      "q": "A dark-on photoelectric sensor's output is on when:",
      "choices": ["The receiver sees light", "The beam is broken by an object", "The sensor has no power", "The reflector is clean"],
      "answer": 1,
      "explanation": "Correct: (b). Dark-on means on when dark — object present. (a) That is light-on. (c) No power means no output. (d) A clean reflector does not set the output."
    },
    {
      "q": "A limit switch differs from a proximity sensor in that it:",
      "choices": ["Detects without touching", "Needs physical contact from a moving machine part", "Has no contacts", "Cannot be wired to a PLC"],
      "answer": 1,
      "explanation": "Correct: (b). A limit switch is mechanical and needs contact. (a) Contactless detection is a sensor. (c) Limit switches have contacts. (d) Limit switches wire to PLC inputs."
    },
    {
      "q": "Hysteresis in a sensor is:",
      "choices": ["The sensor's power consumption", "The gap between its turn-on and turn-off distances, which prevents flicker", "The sensor's weight", "The cable length"],
      "answer": 1,
      "explanation": "Correct: (b). Hysteresis stops the output from flickering at the edge of range. (a) Power consumption is a different specification. (c) Weight is irrelevant. (d) Cable length is irrelevant."
    },
    {
      "q": "A magnetic proximity sensor is most commonly used to detect:",
      "choices": ["Plastic bottles", "The piston position in a pneumatic cylinder", "Liquid level in a tank", "The color of an object"],
      "answer": 1,
      "explanation": "Correct: (b). A magnet on the piston operates the sensor through the cylinder wall. (a) Bottles are detected by photoelectric or capacitive sensors. (c) Level is detected by capacitive or float sensors. (d) Color is detected by a color sensor."
    },
    {
      "q": "The most common cause of a photoelectric sensor stopping working reliably is:",
      "choices": ["A dirty lens", "A wrong PLC program", "A broken motor", "A low battery"],
      "answer": 0,
      "explanation": "Correct: (a). Dust on the emitter or receiver weakens the beam. (b) The program does not affect the sensor's optics. (c) The motor is unrelated to the sensor. (d) Photoelectric sensors run on 24 V DC, not a battery."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Sensors: Quick Reference</h3>\n<p><strong>Core idea:</strong> A sensor detects without touching. Sensing element → decision circuit → transistor output to the PLC.</p>\n<p><strong>Proximity:</strong> Inductive (metal only, short range, rugged) · Capacitive (almost anything, fooled by moisture/buildup) · Magnetic (magnet, cylinder pistons).</p>\n<p><strong>Photoelectric:</strong> Through-beam (separate emitter/receiver, longest range, most reliable) · Retroreflective (one device + reflector) · Diffuse (no reflector, short range, depends on surface).</p>\n<p><strong>Light-on:</strong> Output on when light is seen. <strong>Dark-on:</strong> Output on when the beam is broken (object present).</p>\n<p><strong>Limit switch:</strong> Mechanical, certain, for end-of-travel and safety interlocks. Contacts go in the safety circuit.</p>\n<p><strong>Selection:</strong> Target material · Sensing distance · Environment (IP rating) · Output type (PNP/NPN, NO/NC) · Response time.</p>\n<p><strong>Self-check:</strong> Pick the right sensor for a metal part, a plastic bottle, and a guard door. If you can, you have this module.</p>\n"
};
