// ase-a6 - Module 5: Lighting & Accessories
module.exports = {
  "number": 5,
  "slug": "lighting-accessories",
  "title": "Lighting & Accessories",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how the lighting system is wired and controlled.",
    "Describe the main lights on a car and what each one is for.",
    "Explain how accessories (wipers, windows, horn, blower) are powered and controlled.",
    "Describe how relays and fuses protect lighting and accessory circuits.",
    "Diagnose common lighting and accessory faults: one light out, dim lights, and dead accessories."
  ],
  "sections": [
    {
      "heading": "The Lighting System",
      "html": "<p>The lighting system is a set of parallel circuits, each with its own fuse, switch, and load, all fed from the battery and the alternator. The <strong>headlights</strong> light the road ahead, the <strong>taillights</strong> and <strong>brake lights</strong> mark the car from behind (brake lights burning brighter when the driver brakes), the <strong>turn signals</strong> show the driver's intentions, and the <strong>interior lights</strong> light the cabin. Each circuit is switched by the driver — the headlight switch, the turn-signal stalk, the brake-light switch on the brake pedal — and many of them are switched through relays, so the driver's switch only handles a small current while the relay carries the load.</p>\n<p>Because the circuits are parallel, one light failing does not kill the others. A single headlight out usually means a burned-out bulb, a failed connector, or a bad ground on that one light — not a system-wide fault. And because the lights are high-current loads, their wiring and grounds matter: a corroded ground on one headlight makes that light dim, while the other one burns normally.</p>"
    },
    {
      "heading": "Accessories: Wipers, Windows, Horn, and Blower",
      "html": "<p>The accessories are the same idea repeated: a load, a switch, a fuse, and often a relay or a motor. The <strong>windshield wipers</strong> are driven by a motor through a linkage, with a switch that selects speed and a park position that returns the blades to the bottom of the windshield. <strong>Power windows</strong> use a motor in each door, switched from the driver's door or the door itself. The <strong>horn</strong> is a simple circuit — a switch on the steering wheel, a relay, and the horn itself. The <strong>heater blower</strong> is a motor with a speed control, and it is one of the largest accessory loads in the car.</p>\n<p>Accessories share the same faults as lights: a blown fuse, a failed switch, a bad ground, or a worn motor. A blower that only works on its highest speed, for example, usually means the resistor that gives it the lower speeds has failed — the highest speed bypasses the resistor, so it still works. That pattern — one speed works, the others do not — is the clue that names the resistor, not the motor.</p>"
    },
    {
      "heading": "Fuses, Relays, and Protection",
      "html": "<p>Every lighting and accessory circuit is protected by a <strong>fuse</strong>, a thin link that melts and breaks the circuit if the current gets too high — which is what happens in a short circuit. The fuse protects the wiring from overheating and catching fire. A fuse that keeps blowing is telling you there is a short somewhere; replacing it with a larger fuse is never the fix, because the larger fuse lets the wiring overheat instead.</p>\n<p><strong>Relays</strong> do the heavy switching. The headlight switch on the dashboard handles a small current; the relay's contacts carry the large current to the headlights. That keeps the dashboard switch small and cool, and it keeps the heavy wiring short — from the battery to the relay to the lights — instead of running all the way into the cabin and back. A relay that clicks but does not pass current has worn contacts, the same fault as a worn starter solenoid on a smaller scale.</p>"
    },
    {
      "heading": "Diagnosing Lighting and Accessory Faults",
      "html": "<p>Lighting faults follow patterns. <strong>One light out:</strong> bulb, connector, or ground on that one light. <strong>Both lights on one side out:</strong> a shared fuse or a shared ground. <strong>All lights dim:</strong> a charging-system problem or a bad main ground — the whole system is starved. <strong>One light dim:</strong> a bad ground on that light. <strong>Turn signals flashing too fast:</strong> a burned-out bulb on that side, because the flasher's timing depends on the load. <strong>An accessory dead:</strong> fuse first, then switch, then the motor or the load itself.</p>\n<p>The fuse is always the first check for a dead circuit, and the ground is always worth checking for a dim or flaky one. A test light or a multimeter at the load tells you in seconds whether power is reaching it: power present and the load dead means the load has failed; no power means the fault is upstream — fuse, switch, relay, or wiring.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Lighting and accessories are parallel circuits: each has a fuse, a switch, and a load, and one failing does not kill the others.</li>\n<li>Headlights, taillights, brake lights, turn signals, interior lights — each has its own circuit and switch.</li>\n<li>Accessories (wipers, windows, horn, blower) follow the same pattern: load, switch, fuse, often a relay or motor.</li>\n<li>Fuses protect the wiring by melting when current gets too high; relays do the heavy switching so dashboard switches stay small.</li>\n<li>Patterns: one light out = bulb, connector, or ground on that light; all lights dim = charging or main ground; one speed works on the blower = failed resistor.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing a blown fuse with a larger one. The larger fuse lets the wiring overheat and catch fire — a fuse that keeps blowing means there is a short to find, not a bigger fuse to fit.</div>\n<p><strong>Ready-to-Work link:</strong> If you can read a lighting fault from its pattern — one light out, all lights dim, one speed works — you have this module. Module 6 teaches you to read the map: wiring diagrams.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Headlight",
      "def": "The lamp that lights the road ahead; each headlight has its own circuit, fuse, and ground."
    },
    {
      "term": "Taillight",
      "def": "The lamp at the rear of the car that marks it from behind."
    },
    {
      "term": "Brake light",
      "def": "The lamp that burns brighter when the driver presses the brake pedal, warning drivers behind."
    },
    {
      "term": "Turn signal",
      "def": "The flashing lamp that shows the driver's intention to turn or change lanes."
    },
    {
      "term": "Fuse",
      "def": "A thin link that melts and breaks a circuit if the current gets too high, protecting the wiring from overheating."
    },
    {
      "term": "Relay",
      "def": "A remote-controlled switch: a small current closes its contacts, which carry a larger current to the load."
    },
    {
      "term": "Blower motor",
      "def": "The motor that drives the heater and air-conditioning fan; one of the largest accessory loads."
    },
    {
      "term": "Blower resistor",
      "def": "The resistor that gives the blower its lower speeds; the highest speed bypasses it, so it still works when the resistor fails."
    },
    {
      "term": "Ground",
      "def": "The return path to the battery, usually through the car's metal body; a bad ground makes a light dim or an accessory flaky."
    },
    {
      "term": "Wiper motor",
      "def": "The motor that drives the windshield wipers through a linkage, with a park position that returns the blades to the bottom."
    },
    {
      "term": "Horn",
      "def": "The audible warning device, switched from the steering wheel through a relay."
    },
    {
      "term": "Power window motor",
      "def": "The motor in each door that raises and lowers the window glass."
    },
    {
      "term": "Flasher",
      "def": "The device that makes the turn signals flash on and off; its timing depends on the load, so a burned-out bulb makes it flash fast."
    },
    {
      "term": "Switch",
      "def": "A device that opens or closes a circuit, controlled by the driver or by another part of the system."
    },
    {
      "term": "Accessory",
      "def": "An electrical load that is not needed to run the engine — lights, wipers, windows, horn, blower, radio."
    }
  ],
  "video": {
    "title": "How Does a Car Lighting System Works - Type of Lights Explained",
    "embedUrl": "https://www.youtube.com/embed/V67Fkqozwwg",
    "note": "Course Solutions explains the car's lighting system and what each light is for. Watch how the lights are wired and switched — that layout is the heart of this module.",
    "more": [
      {
        "title": "Basics of Automotive Lighting Systems",
        "url": "https://www.youtube.com/watch?v=k3ckC8FCwsU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> One headlight is out, but the other one works fine. What are the three most likely causes, and why is a system-wide fault unlikely?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A burned-out bulb, a failed connector, or a bad ground on that one light. Step 2: The circuits are parallel, so one light failing does not affect the other. Step 3: A system-wide fault — a dead battery or a failed charging system — would affect both lights, not one.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Both headlights are dim, and the interior lights are dim too. What kind of fault does that pattern suggest, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: All the lights being dim at once points at a system-wide fault. Step 2: The charging system is not keeping the voltage up, or the main ground is bad, so the whole system is starved. Step 3: One bad bulb or one bad ground would affect one light, not all of them.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A blower motor works only on its highest speed. What is the most likely failed part, and why does the highest speed still work?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The blower resistor has failed. Step 2: The resistor gives the blower its lower speeds by dropping voltage. Step 3: The highest speed bypasses the resistor, so it still works even though the resistor is dead — one speed working and the others dead is the resistor's signature.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A fuse keeps blowing the moment it is replaced. What does that mean, and what must you never do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A fuse that blows immediately means there is a short circuit — current taking a shortcut to ground. Step 2: The short must be found and repaired. Step 3: Never fit a larger fuse — it would let the wiring overheat and catch fire instead of protecting it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The turn signals on one side flash much faster than normal. What is the most likely cause, and why does the speed change?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A burned-out bulb on that side is the most likely cause. Step 2: The flasher's timing depends on the load of the bulbs. Step 3: With one bulb out, the load is smaller, so the flasher cycles faster — fast flashing is the car's way of telling you a bulb is out.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A headlight is dead. You put a test light on its connector and the test light glows. What does that tell you, and what is the next step?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Power is reaching the connector, so the fault is not upstream — the fuse, switch, and relay are all working. Step 2: The load itself has failed, or its ground is bad. Step 3: Check the bulb first, then the ground connection on that light.</p>"
    }
  ],
  "quiz": [
    {
      "q": "One headlight out while the other works fine most likely means:",
      "choices": [
        "A dead battery",
        "A burned-out bulb, a failed connector, or a bad ground on that one light",
        "A failed alternator",
        "A blown main fuse"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The circuits are parallel, so a single-light fault is in that light's own bulb, connector, or ground. (a) A dead battery would affect both lights. (c) A failed alternator would dim all the lights. (d) A blown main fuse would kill far more than one light."
    },
    {
      "q": "All the lights in the car are dim at once. The most likely cause is:",
      "choices": [
        "A burned-out bulb",
        "A charging-system problem or a bad main ground",
        "A failed turn-signal flasher",
        "A dirty windshield"
      ],
      "answer": 1,
      "explanation": "Correct: (b). All lights dim at once means the whole system is starved — low voltage or a bad main ground. (a) One bulb cannot dim all the lights. (c) The flasher only affects the turn signals. (d) A dirty windshield does not dim the lights."
    },
    {
      "q": "A blower that works only on its highest speed most likely has a failed:",
      "choices": [
        "Blower motor",
        "Blower resistor",
        "Fuse",
        "Battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The highest speed bypasses the resistor, so it still works when the resistor is dead. (a) A failed motor would not work on any speed. (c) A blown fuse would kill all speeds. (d) A dead battery would affect the whole car."
    },
    {
      "q": "A fuse's job is to:",
      "choices": [
        "Make the lights brighter",
        "Melt and break the circuit if the current gets too high, protecting the wiring from overheating",
        "Switch the circuit on and off",
        "Store electricity"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The fuse is the wiring's protection — it sacrifices itself to stop an overcurrent. (a) A fuse does not brighten lights. (c) A switch or relay switches the circuit. (d) The battery stores electricity."
    },
    {
      "q": "A fuse that keeps blowing means:",
      "choices": [
        "The fuse is too small",
        "There is a short circuit to find and repair",
        "The battery is too big",
        "The lights are too bright"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A fuse that blows again and again means current is taking a shortcut to ground. (a) The fuse size is set by the circuit; a larger fuse would let the wiring overheat. (c) Battery size does not blow fuses. (d) Bright lights do not blow fuses."
    },
    {
      "q": "Turn signals flashing faster than normal on one side most likely means:",
      "choices": [
        "The flasher is new",
        "A burned-out bulb on that side — the flasher's timing depends on the load",
        "The battery is overcharged",
        "The steering wheel is turned"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With one bulb out the load is smaller, so the flasher cycles faster. (a) A new flasher would flash at the normal rate. (c) Overcharging does not change the flash rate. (d) Steering does not change the flash rate."
    },
    {
      "q": "A relay is used in a lighting circuit so that:",
      "choices": [
        "The dashboard switch only handles a small current while the relay's contacts carry the large current to the lights",
        "The lights use less power",
        "The fuse can be smaller",
        "The battery lasts longer"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The relay does the heavy switching so the dashboard switch stays small and cool. (b) The lights use the same power either way. (c) Fuse size is set by the load, not the relay. (d) The relay does not change how much energy the lights use."
    },
    {
      "q": "A test light at a dead headlight's connector glows. That means:",
      "choices": [
        "The bulb is good",
        "Power is reaching the connector, so the fault is the bulb or its ground, not the fuse, switch, or relay",
        "The fuse is blown",
        "The battery is dead"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Power present at the load means everything upstream is working — the fault is at the load or its ground. (a) The test light tests power, not the bulb. (c) A blown fuse would mean no power at the connector. (d) A dead battery would mean no power anywhere."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Lighting & Accessories: Quick Reference</h3>\n<p><strong>Core idea:</strong> Lighting and accessories are parallel circuits — each has a fuse, a switch, and a load, and one failing does not kill the others.</p>\n<p><strong>Patterns:</strong> One light out = bulb, connector, or ground on that light · All lights dim = charging system or main ground · One blower speed works = failed resistor · Fast turn signals = burned-out bulb on that side.</p>\n<p><strong>Protection:</strong> Fuses melt to protect the wiring from overcurrent — never fit a larger fuse; a fuse that keeps blowing means a short to find.</p>\n<p><strong>Relays:</strong> Small current in, large current out — the dashboard switch stays small while the relay carries the load.</p>\n<p><strong>Self-check:</strong> Read a lighting fault from its pattern. If you can, you have this module.</p>\n"
};
