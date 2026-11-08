// Plumbing 132 - Module 9: Controls: Thermostats, Aquastats & Circulator Wiring
module.exports = {
  "number": 9,
  "slug": "controls-thermostats-aquastats-circulator-wiring",
  "title": "Controls: Thermostats, Aquastats & Circulator Wiring",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a control does: sense a condition and switch a load.",
    "Describe how a thermostat works and how to wire one.",
    "Describe how an aquastat works and how it controls a boiler.",
    "Explain how a circulator pump is wired through a relay and a thermostat.",
    "Diagnose control faults: no heat, heat that will not stop, and a pump that will not run."
  ],
  "sections": [
    {
      "heading": "What a Control Does",
      "html": "\n<p>A <strong>control</strong> senses a condition and switches a load. A thermostat senses room temperature and switches the heat on or off. An aquastat senses boiler water temperature and switches the burner on or off. A pressure switch senses pressure and switches a pump. The sensing part and the switching part are the two halves of every control, and the wiring between them is the plumber's electrical work.</p>\n<p>Most heating controls run on <strong>24 volts AC</strong>, stepped down from 120 volts by a <strong>transformer</strong>. The 24-volt circuit is the control circuit: it carries the small current that operates relays and gas valves. The <strong>relay</strong> is the bridge between the control circuit and the line-voltage load: the thermostat closes the 24-volt circuit, the relay's coil energizes, and the relay's contacts close the 120-volt (or 240-volt) circuit to the pump, the burner, or the fan. The thermostat never switches the big load directly — the relay does.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Controls sense, relays switch. The thermostat is a small switch on a 24-volt circuit; the relay is the big switch that the thermostat operates. If you can draw that bridge, you can wire any heating control.</div>\n<p>Controls have two states: <strong>normally open (NO)</strong> and <strong>normally closed (NC)</strong>. A normally open contact is open at rest and closes when the control calls; a normally closed contact is closed at rest and opens when the control calls. A thermostat's heat contacts are normally open — they close on a call for heat. A high-limit aquastat's contacts are normally closed — they open when the water gets too hot, cutting the burner.</p>"
    },
    {
      "heading": "Thermostats",
      "html": "\n<p>A <strong>thermostat</strong> is a temperature switch for a room. When the room cools below the setpoint, its contacts close and call for heat; when the room warms to the setpoint, they open and the call ends. The common terminals are <strong>R</strong> (24-volt power from the transformer), <strong>W</strong> (heat — the wire to the heating relay or gas valve), <strong>Y</strong> (cooling), <strong>G</strong> (fan), and <strong>C</strong> (common — the return path for the 24-volt circuit, needed by thermostats that draw power for their own electronics).</p>\n<p>Wiring a thermostat is a matter of matching letters: R to R, W to W, and so on, at both the thermostat and the equipment. The most common wiring error is a missing C wire — an older two-wire heat-only system has only R and W, and a modern smart thermostat that needs constant power will not work without a C wire. The fix is to run a C wire, use an adapter, or choose a thermostat that does not need one.</p>\n<p>Thermostat placement matters as much as its wiring. It belongs on an interior wall, about 5 feet above the floor, away from drafts, direct sunlight, lamps, and heat sources — and never above a radiator or a supply register. A thermostat in a sunny spot or over a heat source will shut the heat off while the rest of the house is still cold.</p>"
    },
    {
      "heading": "Aquastats and Boiler Controls",
      "html": "\n<p>An <strong>aquastat</strong> is a thermostat for boiler water. It senses the water temperature in the boiler (through a well in the boiler or strapped to the supply pipe) and switches the burner. A single aquastat holds the boiler at its setpoint: the burner fires when the water cools below the setpoint minus the <strong>differential</strong>, and stops when it reaches the setpoint. The differential is the gap between on and off — a 10-degree differential on a 180-degree setpoint means the burner fires at 170 and stops at 180.</p>\n<p>A <strong>triple aquastat</strong> does three jobs: it holds the boiler temperature (the operating control), it provides a <strong>high limit</strong> that cuts the burner if the water gets too hot (a safety control, normally closed, that opens on over-temperature), and it controls the circulator (holding the pump off until the water is warm enough, and keeping it running to cool the boiler down). The high limit is a safety device — it must never be bypassed, and if it trips, the cause must be found before the burner is restarted.</p>\n<p>Boiler controls also include the <strong>low-water cutoff</strong>, which shuts the burner off if the boiler's water level drops too low — a dry boiler can be destroyed in minutes. The low-water cutoff is tested by draining the boiler's water level down (per the manufacturer's instructions) and confirming the burner stops.</p>"
    },
    {
      "heading": "Wiring a Circulator",
      "html": "\n<p>A <strong>circulator pump</strong> moves hot water from the boiler through the heating zones and back. It is wired through a relay: the thermostat closes the 24-volt circuit, the relay energizes, and the relay's line-voltage contacts close to power the pump. In a multi-zone system, each zone has its own thermostat and its own relay (or a zone valve), and a zone controller coordinates them — calling the boiler when any zone calls, and running only that zone's pump or opening only that zone's valve.</p>\n<p>The wiring path for one zone is: transformer R → thermostat → relay coil → transformer C (the 24-volt control circuit), and separately, line power → relay contacts → circulator → neutral (the line-voltage load circuit). The two circuits share nothing except the relay. A pump that will not run can be a control problem (no 24 volts, a bad thermostat, a bad relay coil) or a load problem (no line power, a bad relay contact, a failed pump) — and the multimeter tells you which side is at fault by measuring voltage on each side of the relay.</p>\n<p>Wire the controls with the power off, verify dead with the live-dead-live check, and label every wire. A control panel with unlabeled wires is a panel no one can service — including you, six months from now.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Two circuits, one relay. The 24-volt side senses and calls; the line-voltage side powers the pump. When a pump will not run, measure on both sides of the relay — the fault is on the side with no voltage where voltage should be.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Control = sense + switch. Thermostat senses room temperature; aquastat senses boiler water temperature; relay bridges the 24-volt control circuit to the line-voltage load.</li>\n<li>Thermostat terminals: R (24-V power), W (heat), Y (cooling), G (fan), C (common). Match letters at both ends. A smart thermostat needs a C wire.</li>\n<li>Aquastat: setpoint and differential (burner fires at setpoint minus differential, stops at setpoint). Triple aquastat: operating control + high limit + circulator control. High limit is a safety device — never bypass it.</li>\n<li>Circulator wiring: 24-V control circuit through the thermostat and relay coil; line-voltage load circuit through the relay contacts to the pump.</li>\n<li>Diagnose by side: measure voltage on both sides of the relay — the fault is on the side with no voltage where voltage should be.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Wiring a smart thermostat without a C wire and wondering why it reboots or will not work. The thermostat needs constant power; without a C wire it steals power through the heating circuit and misbehaves. Run the C wire or use an adapter.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Bypassing a tripped high limit to get the heat back on. The high limit tripped because the water got too hot — bypassing it removes the safety and lets the boiler overheat. Find the cause first.</div>\n<p><strong>Ready-to-Work link:</strong> Controls are the electrical heart of hydronic heating, and the Michigan journeyman exam tests them under heating systems. If you can wire a thermostat, an aquastat, and a circulator through a relay, you have this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Control",
      "def": "A device that senses a condition (temperature, pressure) and switches a load on or off."
    },
    {
      "term": "Thermostat",
      "def": "A temperature switch for a room; its contacts close on a call for heat."
    },
    {
      "term": "Aquastat",
      "def": "A thermostat for boiler water; it switches the burner to hold the water at a setpoint."
    },
    {
      "term": "Relay",
      "def": "An electrically operated switch: a small control current energizes a coil, and the coil closes larger contacts that switch the load."
    },
    {
      "term": "Transformer",
      "def": "A device that steps voltage down — for example, 120 volts to 24 volts AC for controls."
    },
    {
      "term": "Differential",
      "def": "The gap between a control's on and off points; an aquastat with a 10-degree differential fires at setpoint minus 10 and stops at setpoint."
    },
    {
      "term": "High limit",
      "def": "A safety control that cuts the burner if the boiler water gets too hot; normally closed, opening on over-temperature."
    },
    {
      "term": "Low-water cutoff",
      "def": "A safety control that shuts the burner off if the boiler's water level drops too low."
    },
    {
      "term": "Circulator",
      "def": "A pump that moves hot water from a boiler through the heating zones and back."
    },
    {
      "term": "Zone valve",
      "def": "A valve that opens one heating zone at a time, controlled by that zone's thermostat."
    },
    {
      "term": "Normally open (NO)",
      "def": "A contact that is open at rest and closes when the control calls."
    },
    {
      "term": "Normally closed (NC)",
      "def": "A contact that is closed at rest and opens when the control calls."
    },
    {
      "term": "Setpoint",
      "def": "The temperature a control is set to maintain."
    },
    {
      "term": "C wire",
      "def": "The common wire in a thermostat circuit; the return path for the 24-volt supply, needed by thermostats that draw power."
    }
  ],
  "video": {
    "title": "Zone Valve Wiring For Beginners (Honeywell demonstration)",
    "embedUrl": "https://www.youtube.com/embed/jQklHi-nrYA",
    "note": "A zone valve wired on the bench: thermostat, relay, and valve, with the 24-volt control side and the line-voltage side shown separately. Watch how the relay bridges the two circuits.",
    "more": [
      {
        "title": "How A Triple Aquastat works! #hvac #boilers",
        "url": "https://www.youtube.com/watch?v=LyHuY8wSn6k"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A thermostat calls for heat but the circulator does not run. You measure 24 volts at the relay coil and 0 volts at the relay contacts on the load side. Where is the fault?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The control side is good — 24 volts at the coil means the thermostat and the transformer are working. Step 2: The fault is on the load side: either the relay contacts are bad, or there is no line power to the contacts. Step 3: Measure line voltage into the relay contacts; if line power is present but the contacts do not close, the relay is bad. If no line power is present, the fault is upstream — a breaker, a disconnect, or a broken wire.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An aquastat is set to 180°F with a 10-degree differential. At what temperature does the burner fire, and at what temperature does it stop?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The burner stops at the setpoint: <strong>180°F</strong>. Step 2: The burner fires at the setpoint minus the differential: 180 − 10 = <strong>170°F</strong>. Step 3: The boiler cycles between 170°F and 180°F.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A smart thermostat keeps rebooting on a two-wire (R and W) heating system. What is the cause, and what are the fixes?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The thermostat needs constant power, and a two-wire system has no <strong>C wire</strong> (common) to supply it — so it steals power through the heating circuit and misbehaves. Step 2: Fixes: run a C wire from the equipment to the thermostat, install a C-wire adapter at the equipment, or choose a thermostat that does not need a C wire. Step 3: Do not power the thermostat from an unrelated circuit — the control wiring must come from the heating equipment's transformer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A boiler's high limit has tripped and the burner will not fire. A helper suggests bypassing the high limit 'just to get heat back.' What do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Refuse. Step 2: The high limit is a safety control that tripped because the water got too hot — bypassing it removes the safety and lets the boiler overheat. Step 3: Find the cause first: a failed operating aquastat, a stuck circulator, a closed zone valve, or a scaled heat exchanger. Fix the cause, reset the limit per the manufacturer's instructions, and test it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A thermostat is mounted on a wall directly above a supply register. The house is cold but the heat will not come on. What is wrong?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The thermostat is in a bad location — warm air from the register heats it, so it thinks the room is warm and never calls for heat. Step 2: Move the thermostat to an interior wall about 5 feet above the floor, away from registers, drafts, sunlight, and lamps. Step 3: Thermostat placement is part of the installation, not an afterthought.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A zone controller serves three zones. Zone 2's thermostat calls for heat, but Zone 2's pump does not run while Zones 1 and 3 work fine. Where do you look first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fault is in Zone 2's own circuit, since the other zones work — the boiler, the transformer, and the controller's power are good. Step 2: Check Zone 2's thermostat, its relay or zone valve, and its pump, in that order. Step 3: Measure 24 volts at Zone 2's relay coil: if it is present, the thermostat is calling and the relay or pump is at fault; if it is absent, the thermostat or its wiring is at fault.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A relay does what?",
      "choices": [
        "Senses temperature",
        "Lets a small control current switch a larger load",
        "Steps voltage down",
        "Filters the water"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The thermostat's 24-volt circuit energizes the relay coil, and the relay's contacts switch the line-voltage load. (a) Sensing is the thermostat's or aquastat's job. (c) Stepping voltage down is the transformer's job. (d) Filtering water is not electrical."
    },
    {
      "q": "The thermostat terminal R is:",
      "choices": [
        "The heat call",
        "The 24-volt power from the transformer",
        "The cooling call",
        "The fan call"
      ],
      "answer": 1,
      "explanation": "Correct: (b). R is the 24-volt power. (a) W is the heat call. (c) Y is the cooling call. (d) G is the fan call."
    },
    {
      "q": "An aquastat set to 180°F with a 10-degree differential fires the burner at:",
      "choices": [
        "180°F",
        "190°F",
        "170°F",
        "160°F"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Setpoint minus differential: 180 − 10 = 170°F. (a) is the stop temperature. (b) is above the setpoint. (d) is two differentials below."
    },
    {
      "q": "The high limit on a boiler is:",
      "choices": [
        "An operating control that sets the normal temperature",
        "A safety control that cuts the burner if the water gets too hot, and must never be bypassed",
        "A pump control",
        "A thermostat for the room"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The high limit is a safety device; bypassing it removes the protection. (a) The operating aquastat sets the normal temperature. (c) The circulator control runs the pump. (d) Room temperature is the thermostat's job."
    },
    {
      "q": "A smart thermostat that keeps rebooting on a two-wire system most likely lacks:",
      "choices": [
        "A W wire",
        "A C wire (common)",
        "An R wire",
        "A larger transformer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Without a C wire the thermostat has no return path for its own power and steals it through the heating circuit. (a) W is present — the heat call works. (c) R is present — it is the power. (d) A larger transformer does not fix a missing return path."
    },
    {
      "q": "In a circulator circuit, the thermostat switches:",
      "choices": [
        "The pump directly on 120 volts",
        "The 24-volt relay coil, and the relay's contacts switch the pump",
        "The boiler's gas valve directly",
        "The high limit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The thermostat works the 24-volt control side; the relay switches the line-voltage load. (a) The thermostat never switches the pump directly. (c) The gas valve is switched by the aquastat circuit, not the thermostat alone. (d) The high limit is a safety control, not a thermostat output."
    },
    {
      "q": "A normally closed (NC) contact is:",
      "choices": [
        "Open at rest and closes on a call",
        "Closed at rest and opens on a call",
        "Always open",
        "Always closed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Closed at rest, opening when the control acts — like a high limit that opens on over-temperature. (a) describes a normally open contact. (c) and (d) describe a broken or welded contact, not a normal state."
    },
    {
      "q": "A thermostat should be mounted:",
      "choices": [
        "Above a supply register",
        "On an interior wall about 5 feet high, away from drafts, sunlight, and heat sources",
        "In direct sunlight",
        "Over a radiator"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An interior wall at about 5 feet, away from anything that would fool its temperature reading. (a), (c), and (d) all put a heat source next to the sensor, so it shuts the heat off while the house is still cold."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Controls: Quick Reference</h3>\n<p><strong>Control = sense + switch.</strong> Thermostat senses room temperature · Aquastat senses boiler water temperature · Relay bridges the 24-V control circuit to the line-voltage load.</p>\n<p><strong>Thermostat terminals:</strong> R (24-V power) · W (heat) · Y (cooling) · G (fan) · C (common). Match letters at both ends. A smart thermostat needs a C wire.</p>\n<p><strong>Aquastat:</strong> Setpoint and differential — fires at setpoint minus differential, stops at setpoint. Triple aquastat: operating control + high limit + circulator control. High limit is a safety device — never bypass it.</p>\n<p><strong>Circulator wiring:</strong> 24-V control circuit (transformer → thermostat → relay coil → common) and line-voltage load circuit (line power → relay contacts → pump → neutral). Two circuits, one relay.</p>\n<p><strong>Diagnose by side:</strong> Measure voltage on both sides of the relay — the fault is on the side with no voltage where voltage should be.</p>\n<p><strong>Placement:</strong> Thermostat on an interior wall, about 5 ft high, away from registers, drafts, sunlight, and lamps.</p>\n<p><strong>Watch out:</strong> Never bypass a tripped high limit; never wire a smart thermostat without a C wire.</p>\n<p><strong>Self-check:</strong> Draw a one-zone circulator circuit — both sides of the relay — and explain how you would find a pump that will not run.</p>\n"
};
