// ele105 - Module 11: Trim-Out: Devices, Fixtures & Testing
module.exports = {
  "number": 11,
  "slug": "trim-out-devices-fixtures-testing",
  "title": "Trim-Out: Devices, Fixtures & Testing",
  "estTime": "3–4 hours",
  "objectives": [
    "Install receptacles and switches correctly: pigtails, torque, and grounding.",
    "Install luminaires and ceiling fans safely.",
    "Explain tamper-resistant and weather-resistant receptacle requirements.",
    "Test a finished circuit: polarity, grounding, GFCI, and AFCI.",
    "Complete the panel directory and label every circuit."
  ],
  "sections": [
    {
      "heading": "Installing Receptacles and Switches",
      "html": "<p>Trim-out is the phase after drywall and paint, when the devices go in: receptacles, switches, and cover plates. A receptacle is wired with pigtails where the circuit continues — the incoming and outgoing conductors are spliced together with a short pigtail to the device, so removing the device does not break the circuit downstream. Section 300.13(B) requires pigtails for the grounded (neutral) conductor in multiwire branch circuits, and good practice uses them everywhere.</p><p>Terminations must be tight and correct: the hot conductor on the brass screw, the neutral on the silver screw, and the grounding conductor on the green screw. Back-stab (push-in) connections are permitted on listed devices but are the most common source of loose connections in houses — a screw terminal or a listed back-wire clamp is the better choice, and the terminal screws must be torqued to the manufacturer's values (110.14(D)).</p><p>The device must sit flat against the finished wall, with the cover plate tight and the box flush. A receptacle that rocks in the box will loosen its terminations. The yoke screws are tightened snug, not crushed, and the cover plate is the last thing on — after the testing is done.</p><div class=\"callout\"><strong>Key idea:</strong> Pigtail the neutrals, land hot on brass and neutral on silver, torque to the manufacturer's values, and prefer screw terminals over back-stabs.</div>"
    },
    {
      "heading": "Luminaires and Ceiling Fans",
      "html": "<p>A luminaire is hung from a box listed for the purpose: a standard ceiling box for a light fixture, and a fan-rated box for a ceiling fan. A ceiling fan must never hang from a standard light box — the vibration will work it loose. Section 314.27(C) requires a box listed for fan support where a fan is installed, and the box must be marked for the fan's weight.</p><p>The luminaire's wires connect by color: black to black (hot), white to white (neutral), and green or bare to green or bare (ground). The fixture's mounting screws must not pinch the wires, and the canopy must cover the box completely. In a damp location such as a bathroom, the luminaire must be listed for damp or wet locations as 410.10 requires.</p><p>A ceiling fan's downrod, blades, and motor are assembled per the manufacturer's instructions, and the fan is balanced so it does not wobble. A wobbling fan is a fan that will loosen its mounting — balance it before the job is called done.</p><ul><li>Ceiling fans need a fan-rated box (314.27(C)) — never a standard light box.</li><li>Wire by color: black to black, white to white, green/bare to green/bare.</li><li>Bathroom luminaires must be listed for damp or wet locations (410.10).</li></ul>"
    },
    {
      "heading": "Tamper-Resistant and Weather-Resistant Receptacles",
      "html": "<p>Section 406.12 requires tamper-resistant (TR) receptacles in dwelling units — in all the areas listed, which is effectively every receptacle a child could reach. TR receptacles have spring-loaded shutters that block a foreign object from entering one slot, and they open only when a proper plug presses both shutters at once. They are the Code's answer to children inserting objects into receptacles.</p><p>Section 406.9 requires weather-resistant (WR) receptacles outdoors, and in other wet or damp locations. A WR receptacle is built with corrosion-resistant materials and is marked WR. Outdoors, the receptacle must also be tamper-resistant, so the device is marked TR and WR — and it sits in a weatherproof box with an in-use cover.</p><p>Both requirements are about the device, not the circuit: a TR receptacle on a GFCI-protected circuit is the standard dwelling receptacle, and a WR/TR receptacle in an in-use cover is the standard outdoor receptacle. Installing a non-TR receptacle in a dwelling is a violation even if the circuit is perfect.</p><div class=\"callout\"><strong>Key idea:</strong> Dwellings get tamper-resistant receptacles (406.12). Outdoors gets weather-resistant + tamper-resistant in an in-use cover (406.9).</div>"
    },
    {
      "heading": "Testing the Finished Circuit",
      "html": "<p>Testing starts before the power goes on: with the circuit de-energized, check continuity of the grounding conductor, check that the neutral and ground are separate in subpanels, and verify that no conductors are pinched or shorted. Then energize the circuit under the licensed supervisor's direction and test with a meter and a receptacle tester.</p><p>A receptacle tester shows the common wiring faults at a glance: correct, open ground, open neutral, open hot, hot/ground reversed, and hot/neutral reversed. A meter checks the actual voltage: 120 volts hot-to-neutral, 120 volts hot-to-ground, and near zero volts neutral-to-ground. A GFCI is tested with its test button, and an AFCI breaker is tested with its test button. A circuit that passes the tester but fails the meter reading has a problem the tester cannot see.</p><p>Test every device, every switch location, and every GFCI and AFCI in the house. A 3-way switch must work from both locations, a dimmer must dim smoothly without flicker, and a ceiling fan must run on all speeds without wobble. Testing is not a formality — it is the last chance to find a mistake before the homeowner does.</p><ul><li>Before energizing: continuity, separation of neutral and ground, no pinched conductors.</li><li>After energizing: receptacle tester + meter (120 V hot-neutral, 120 V hot-ground, ~0 V neutral-ground).</li><li>Test every GFCI and AFCI with its test button; test every switch location.</li></ul>"
    },
    {
      "heading": "The Panel Directory and Labels",
      "html": "<p>Section 408.4 requires every circuit in a panelboard to be identified on a directory that is legible and permanent — not pencil on the door, but a printed or written directory that says what each breaker controls. “Kitchen receptacles,” “Master bedroom,” and “Furnace” are good labels; “Lights” and “Plugs” are not, because they do not say which lights or which plugs.</p><p>The directory is a safety device: in an emergency, the homeowner or a firefighter must be able to kill the right circuit without guessing. A directory that says “Bedroom 2” is useful; a directory that says “Spare” for a live circuit is dangerous.</p><p>Labeling extends beyond the panel: the service disconnect must be marked, the surge-protective device must be marked, and any circuit that serves a specific piece of equipment should be labeled at the equipment. The job is not done until the directory is complete and accurate.</p><div class=\"callout\"><strong>Common mistake:</strong> Labeling a live circuit “Spare.” In an emergency, someone will trust that label and work on a live circuit.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Trim-out",
      "def": "The wiring phase after drywall and paint: devices, luminaires, and cover plates are installed and tested."
    },
    {
      "term": "Pigtail",
      "def": "A short conductor spliced to the circuit conductors to connect a device, so removing the device does not break the circuit."
    },
    {
      "term": "300.13(B)",
      "def": "The grounded conductor of a multiwire branch circuit must be pigtailed so removing a device does not open the neutral."
    },
    {
      "term": "Back-stab connection",
      "def": "A push-in device terminal; permitted on listed devices but the most common source of loose connections."
    },
    {
      "term": "Fan-rated box",
      "def": "A ceiling box listed to support a ceiling fan (314.27(C))."
    },
    {
      "term": "Tamper-resistant (TR) receptacle",
      "def": "A receptacle with shutters that block foreign objects; required in dwellings (406.12)."
    },
    {
      "term": "Weather-resistant (WR) receptacle",
      "def": "A receptacle built for outdoor use; required outdoors (406.9)."
    },
    {
      "term": "Receptacle tester",
      "def": "A plug-in device that shows common wiring faults: open ground, open neutral, reversed polarity, and more."
    },
    {
      "term": "Polarity",
      "def": "The correct connection of hot to brass, neutral to silver, and ground to green."
    },
    {
      "term": "408.4",
      "def": "Every circuit in a panelboard must be identified on a legible, permanent directory."
    },
    {
      "term": "Panel directory",
      "def": "The label inside the panel door that says what each breaker controls."
    },
    {
      "term": "In-use cover",
      "def": "A weatherproof cover that protects an outdoor receptacle with a cord plugged in."
    }
  ],
  "video": {
    "title": "How to Wire a GFCI and Protect Multiple Outlets",
    "embedUrl": "https://www.youtube.com/embed/DlRokqre50E",
    "note": "Watch a GFCI protect a second outlet downstream: line vs. load, the ground pigtail, and the test at the end. This is the trim-out skill of wiring a device and proving it works.",
    "more": [
      {
        "title": "How to Install a GFCI Outlet with 2 or 4 Wires, Step-by-Step Guide",
        "url": "https://www.youtube.com/watch?v=RT8D7sE1itU"
      },
      {
        "title": "How a $15 Outlet Saves You From Electrocution",
        "url": "https://www.youtube.com/watch?v=rQJyvGRvt5Y"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A receptacle is wired by back-stabbing the conductors, and the circuit downstream goes dead when the receptacle is removed. What went wrong, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The circuit was wired through the device instead of with pigtails, so removing the device opened the circuit. Step 2: For the neutral in a multiwire circuit, 300.13(B) requires pigtails. Step 3: The fix is to splice the circuit conductors together with a pigtail to the device, using screw terminals, with the circuit de-energized and locked out/tagged out under a licensed supervisor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A ceiling fan is hung from a standard ceiling light box. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 314.27(C) requires a box listed for fan support where a fan is installed. Step 2: A standard light box is not rated for a fan's weight and vibration. Step 3: Replace the box with a fan-rated box, with the circuit de-energized and locked out/tagged out under a licensed supervisor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A receptacle tester shows “hot/neutral reversed” on a new receptacle. What does that mean, and how is it fixed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The black (hot) conductor is on the silver screw and the white (neutral) is on the brass screw. Step 2: The fix is to swap them: hot to brass, neutral to silver. Step 3: Re-test after the fix, with the circuit de-energized during the work and locked out/tagged out under a licensed supervisor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A meter reads 120 volts hot-to-neutral, 120 volts hot-to-ground, and 0 volts neutral-to-ground at a receptacle. Is the receptacle wired correctly?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Yes — those are the expected readings for a correctly wired 120-volt receptacle. Step 2: Hot-to-neutral and hot-to-ground should both read about 120 volts. Step 3: Neutral-to-ground should read near zero volts; a large reading there indicates a problem.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A panel directory lists circuit 12 as “Spare,” but the circuit feeds the garage receptacles. Why is that a problem?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 408.4 requires every circuit to be identified legibly and permanently. Step 2: “Spare” on a live circuit is a false label. Step 3: In an emergency, someone will trust the label and may work on a live circuit, so the directory must be corrected to say “Garage receptacles.”</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A new outdoor receptacle is installed with a standard (non-WR) receptacle and a cover that only protects it when nothing is plugged in. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Outdoor receptacles must be weather-resistant (406.9) and tamper-resistant. Step 2: The cover must be an in-use cover that protects the receptacle with a cord plugged in. Step 3: Replace the device with a WR/TR receptacle and fit an in-use cover.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The hot conductor on a receptacle connects to the:",
      "choices": [
        "Silver screw",
        "Brass screw",
        "Green screw",
        "Back of the box"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hot goes to brass, neutral to silver, ground to green. (a) Silver is the neutral terminal. (c) Green is the grounding terminal. (d) Conductors never connect to the back of the box."
    },
    {
      "q": "A pigtail is used so that:",
      "choices": [
        "The wire is longer",
        "Removing a device does not break the circuit downstream",
        "The box looks neater",
        "The circuit carries more current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pigtails keep the circuit continuous when a device is removed. (a) Length is a side effect. (c) Neatness is a side benefit. (d) A pigtail does not increase ampacity."
    },
    {
      "q": "A ceiling fan must be hung from:",
      "choices": [
        "Any ceiling box",
        "A box listed for fan support (314.27(C))",
        "A plastic box",
        "A wire hanging from the joist"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 314.27(C) requires a fan-rated box. (a) A standard light box is not rated for a fan. (c) A plastic box is not a fan support. (d) A wire is not a support."
    },
    {
      "q": "Tamper-resistant receptacles are required in dwellings by:",
      "choices": [
        "406.9",
        "406.12",
        "210.8",
        "210.12"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 406.12 requires TR receptacles in dwellings. (a) 406.9 covers weather-resistant receptacles. (c) 210.8 is GFCI protection. (d) 210.12 is AFCI protection."
    },
    {
      "q": "A receptacle tester showing “open ground” means:",
      "choices": [
        "The hot conductor is missing",
        "The equipment grounding conductor is not connected",
        "The neutral is missing",
        "The receptacle is wired correctly"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Open ground means the grounding conductor is not connected. (a) A missing hot shows as open hot. (c) A missing neutral shows as open neutral. (d) A correct receptacle shows correct."
    },
    {
      "q": "At a correctly wired 120-volt receptacle, the neutral-to-ground voltage should read:",
      "choices": [
        "120 volts",
        "240 volts",
        "Near zero volts",
        "60 volts"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Neutral-to-ground should read near zero volts. (a) 120 volts is hot-to-neutral. (b) 240 volts is a hot-to-hot voltage. (d) 60 volts indicates a problem."
    },
    {
      "q": "Section 408.4 requires the panel directory to be:",
      "choices": [
        "Written in pencil",
        "Legible and permanent, identifying every circuit",
        "Kept in the office",
        "Blank until the final inspection"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 408.4 requires a legible, permanent directory identifying every circuit. (a) Pencil is not permanent. (c) The directory belongs in the panel. (d) It must be complete at the final inspection, not blank."
    },
    {
      "q": "An outdoor receptacle must be:",
      "choices": [
        "A standard receptacle with any cover",
        "Weather-resistant and tamper-resistant, in a weatherproof box with an in-use cover",
        "A GFCI breaker only",
        "A 240-volt receptacle"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Outdoors: WR + TR device, weatherproof box, in-use cover (406.9). (a) A standard receptacle and a non-in-use cover are not compliant. (c) A GFCI breaker is protection, not the receptacle type. (d) Outdoor receptacles are usually 120-volt."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Trim-Out &amp; Testing: Quick Reference</h3>\n<p><strong>Core idea:</strong> Trim-out is where the work becomes visible — and where it is tested. Wire it right, torque it right, test everything.</p>\n<p><strong>Devices:</strong> Hot to brass, neutral to silver, ground to green. Pigtail neutrals (300.13(B) for multiwire). Prefer screw terminals over back-stabs. Torque to the manufacturer's values.</p>\n<p><strong>Fans:</strong> Fan-rated box only (314.27(C)). <strong>Receptacles:</strong> TR in dwellings (406.12); WR + TR outdoors with in-use covers (406.9).</p>\n<p><strong>Testing:</strong> Receptacle tester + meter: 120 V hot-neutral, 120 V hot-ground, ~0 V neutral-ground. Test every GFCI and AFCI with its test button; test every switch location.</p>\n<p><strong>Directory (408.4):</strong> Legible, permanent, every circuit identified by what it controls.</p>\n<p><strong>Self-check:</strong> State the terminal colors, the fan-box rule, and the three meter readings for a correct receptacle.</p>\n"
};
