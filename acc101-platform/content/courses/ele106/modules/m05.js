// ele106 - Module 5: Commercial Lighting Systems & Controls
module.exports = {
  "number": 5,
  "slug": "commercial-lighting-systems-controls",
  "title": "Commercial Lighting Systems & Controls",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain commercial lighting systems: 277-volt lighting, LED, and high-bay.",
    "Apply the lighting controls rules: occupancy sensors, vacancy sensors, and daylighting.",
    "Explain harmonics and why commercial neutrals are oversized.",
    "Describe emergency lighting and exit signs.",
    "Explain the lighting load calculation inputs from Table 220.42(A)."
  ],
  "sections": [
    {
      "heading": "Commercial Lighting: 277 Volts and LED",
      "html": "<p>Commercial lighting runs at 277 volts in most large buildings: the luminaires connect hot-to-neutral on a 277/480-volt system, which cuts the current to less than half of what 120-volt lighting would draw and lets the circuits run longer with smaller wire. A 277-volt lighting circuit can feed more luminaires than a 120-volt circuit of the same wire size, and the panelboard has fewer circuits to show for it.</p><p>The luminaire itself is now almost always LED: light-emitting diodes driven by an electronic driver. LED luminaires use a fraction of the energy of the fluorescent and metal-halide fixtures they replaced, and they last far longer. But LED drivers are nonlinear loads — they draw current in pulses — and those pulses create harmonics, which Module 1 introduced and the next section explains.</p><p>High-bay lighting lights warehouses and gymnasiums from ceilings 20 feet or higher: high-output LED fixtures hung from the structure, aimed down at the floor. Low-bay lighting serves lower ceilings. The lighting design — how many fixtures, how high, how far apart — is the engineer's job; the electrician's job is to install the fixtures, wire the circuits, and make the controls work.</p><div class=\"callout\"><strong>Key idea:</strong> Commercial lighting is usually 277 volts and almost always LED. Higher voltage means less current, longer runs, and smaller wire.</div>"
    },
    {
      "heading": "Lighting Controls: Occupancy, Vacancy, and Daylighting",
      "html": "<p>Commercial lighting is controlled by more than a wall switch. An occupancy sensor turns the lights on when it detects motion and off when the space is empty. A vacancy sensor requires the occupant to turn the lights on by hand and turns them off automatically when the space is empty. A daylighting control dims or switches the lights near a window in response to the daylight coming in, so the electric lights only make up the difference.</p><p>These controls are required by the energy code in most commercial spaces, and the NEC requires the wiring to support them: the switch leg must include a neutral at the switch location in many cases (404.2(C)), so that the sensor has power to operate. A sensor that has no neutral cannot work, and a switch box with no neutral is a callback waiting to happen.</p><p>Dimming is also a commercial staple: 0–10 volt dimming is the standard for commercial LED fixtures, with a separate pair of low-voltage control wires (usually purple and gray) running alongside the power conductors. The dimmer must be matched to the driver — a mismatched dimmer flickers, buzzes, or fails.</p><ul><li>Occupancy sensor: auto-on, auto-off. Vacancy sensor: manual-on, auto-off. Daylighting control: dims lights near windows.</li><li>Switch boxes need a neutral for sensors (404.2(C)).</li><li>0–10 V dimming is the commercial standard; match the dimmer to the driver.</li></ul>"
    },
    {
      "heading": "Harmonics and the Neutral",
      "html": "<p>A nonlinear load — a computer power supply, an LED driver, a variable-frequency drive — draws current in short pulses instead of a smooth sine wave. Those pulses are made of harmonics: extra frequencies that are multiples of the 60-hertz fundamental. The third harmonic (180 hertz) is the problem, because the third harmonics from all three phases add up on the neutral instead of canceling. On a three-phase system with heavy nonlinear loads, the neutral can carry more current than any phase conductor.</p><p>That is why commercial neutrals are often oversized: a neutral sized at 200% of the phase conductors is common in office buildings and data centers, where the loads are almost entirely nonlinear. The neutral is also why a shared neutral in a multiwire branch circuit must be pigtailed (300.13(B)) — if the neutral opens, the loads on the circuit see wild voltage swings, just as in a house.</p><p>Harmonics also heat transformers and cause flicker. The fixes are oversized neutrals, harmonic-rated (K-rated) transformers, and — where the problem is severe — harmonic filters. The electrician's part is to size the neutral correctly, keep the neutrals separate per circuit, and never share a neutral across circuits that the design did not intend.</p><div class=\"callout\"><strong>Key idea:</strong> Third harmonics add up on the neutral instead of canceling. In buildings full of computers and LED drivers, the neutral can carry more current than a phase — so commercial neutrals are often oversized.</div>"
    },
    {
      "heading": "Emergency Lighting and Exit Signs",
      "html": "<p>Emergency lighting is the lighting that comes on when the normal power fails, so people can find their way out of the building. Article 700 requires emergency illumination on egress paths, and the fixtures are usually battery-backed units or luminaires fed from the emergency system. Exit signs mark the way out, and they must stay lit during a power failure — either from a battery or from the emergency system.</p><p>The emergency lighting must provide enough light to see the path: the Code and the Life Safety Code set the minimum illumination, and the fixtures must be tested regularly. A battery-backed emergency light that has a dead battery is a violation that no one notices until the power fails — which is exactly when it matters.</p><p>Exit signs in a commercial building are usually LED now, and they are wired on the emergency system or have their own batteries. The sign must be visible from the approach, and it must not be obscured by a decoration or a display. The inspector checks the signs and the emergency lights on every final inspection.</p><ul><li>Emergency lighting (Article 700) lights the egress path when normal power fails.</li><li>Exit signs must stay lit during a power failure — battery or emergency system.</li><li>Test battery-backed units regularly; a dead battery is invisible until the power fails.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Commercial lighting is usually 277 V and LED — higher voltage means less current and longer runs.</li><li>Controls: occupancy (auto-on, auto-off), vacancy (manual-on, auto-off), daylighting (dims near windows). Switch boxes need a neutral (404.2(C)).</li><li>Harmonics: third harmonics add on the neutral; commercial neutrals are often oversized (200% is common).</li><li>Emergency lighting and exit signs (Article 700) must work when normal power fails — and must be tested.</li><li>Lighting load inputs come from Table 220.42(A): office 1.3, retail 1.9, warehouse 1.2 VA/ft².</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Wiring a sensor without a neutral in the switch box. The sensor needs power to operate — 404.2(C) requires the neutral at the switch.</div><div class=\"callout\"><strong>Common mistake:</strong> Sizing a commercial neutral the same as a phase conductor in a building full of computers. The third harmonics will overload it.</div><p><strong>Ready-to-Work link:</strong> If you can explain occupancy versus vacancy sensors, harmonics on the neutral, and 277-volt lighting, you have this module. Module 6 covers motors and motor circuits.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "277-volt lighting",
      "def": "Commercial luminaires connected hot-to-neutral on a 277/480-volt system."
    },
    {
      "term": "LED driver",
      "def": "The electronic power supply that runs an LED luminaire; a nonlinear load."
    },
    {
      "term": "High-bay lighting",
      "def": "High-output luminaires for ceilings 20 feet or higher, such as warehouses."
    },
    {
      "term": "Occupancy sensor",
      "def": "A control that turns lights on when it detects motion and off when the space is empty."
    },
    {
      "term": "Vacancy sensor",
      "def": "A control that requires manual-on and turns lights off automatically."
    },
    {
      "term": "Daylighting control",
      "def": "A control that dims electric lights in response to daylight from windows."
    },
    {
      "term": "404.2(C)",
      "def": "A neutral conductor is required at switch locations that control lighting loads."
    },
    {
      "term": "0–10 V dimming",
      "def": "The standard commercial dimming method, using a pair of low-voltage control wires."
    },
    {
      "term": "Harmonic",
      "def": "An extra frequency in the current, a multiple of the 60-hertz fundamental."
    },
    {
      "term": "Third harmonic",
      "def": "The 180-hertz harmonic; third harmonics from all three phases add up on the neutral."
    },
    {
      "term": "K-rated transformer",
      "def": "A transformer rated for harmonic loads."
    },
    {
      "term": "Emergency illumination",
      "def": "Lighting on egress paths that operates when normal power fails (Article 700)."
    }
  ],
  "video": {
    "title": "Electrical Harmonics Explained - Why Neutral Wires Overheat",
    "embedUrl": "https://www.youtube.com/embed/_y8itPKEAXs",
    "note": "This video explains electrical harmonics — why neutral wires overheat in buildings full of computers and LED drivers. It is the clearest explanation of the third-harmonic problem in this course: watch it, then explain why a commercial neutral is often oversized.",
    "more": [
      {
        "title": "Why 3-Phase Is 400V in Europe but 480V or 208V in America?",
        "url": "https://www.youtube.com/watch?v=grffvmCzqcw"
      },
      {
        "title": "You'll Finally Understand Why Power Lines Have Three Wires",
        "url": "https://www.youtube.com/watch?v=BxeoCAC5t3Y"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 277-volt lighting circuit uses 12 AWG copper. How does its current compare with a 120-volt circuit feeding the same wattage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Current = power ÷ voltage. Step 2: At 277 V the current is 120 ÷ 277 = 43% of the 120-V current. Step 3: The 277-V circuit carries less than half the current, so it can feed more luminaires on the same wire size.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An office has 100 computers on three-phase power, each drawing a third-harmonic current of 1 ampere. What is the third-harmonic current on the neutral?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Third harmonics from all three phases add up on the neutral instead of canceling. Step 2: The neutral carries the sum: roughly 100 A of third-harmonic current. Step 3: That is why the neutral is oversized in buildings full of nonlinear loads.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A vacancy sensor is installed in a conference room. How is it operated?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The occupant turns the lights on by hand. Step 2: The sensor turns the lights off automatically when the room is empty. Step 3: A vacancy sensor is manual-on, auto-off — unlike an occupancy sensor, which is auto-on.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A switch box for a lighting sensor has no neutral conductor. What is the problem?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 404.2(C) requires a neutral at switch locations that control lighting loads. Step 2: The sensor needs power to operate, and without a neutral it cannot work. Step 3: The fix is to run a neutral to the switch box.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A warehouse is 20,000 square feet. What is its general lighting load from Table 220.42(A)?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Table 220.42(A) gives warehouses 1.2 VA/ft². Step 2: 20,000 × 1.2 = 24,000 VA. Step 3: The table value already includes the 125% continuous-load factor, so no further multiplier is applied.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An emergency light's battery is dead. Why is that a violation, and how is it found?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Article 700 requires emergency illumination on egress paths when normal power fails. Step 2: A dead battery means the light will not work when it is needed. Step 3: It is found by regular testing — pressing the test button or running a monthly functional test.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Commercial lighting in a large building is usually run at:",
      "choices": [
        "120 volts",
        "208 volts",
        "277 volts",
        "480 volts"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 277 volts is the standard commercial lighting voltage. (a) 120 volts is used for small lighting loads. (b) 208 volts is a line voltage, not a lighting voltage. (d) 480 volts is used for motors and HVAC, not luminaires."
    },
    {
      "q": "An occupancy sensor differs from a vacancy sensor in that the occupancy sensor:",
      "choices": [
        "Requires manual-on",
        "Turns lights on automatically",
        "Never turns lights off",
        "Works only outdoors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An occupancy sensor is auto-on, auto-off. (a) Manual-on is a vacancy sensor. (c) Both sensor types turn lights off. (d) Both are used indoors."
    },
    {
      "q": "The third harmonic is a problem because:",
      "choices": [
        "It cancels on the neutral",
        "It adds up on the neutral instead of canceling",
        "It only affects 120-volt circuits",
        "It does not exist in three-phase systems"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Third harmonics from all three phases add on the neutral. (a) Cancellation is what happens to the fundamental, not the third harmonic. (c) It affects three-phase systems most. (d) It is a three-phase problem."
    },
    {
      "q": "A neutral in a building full of computers is often sized at:",
      "choices": [
        "50% of the phase conductors",
        "100% of the phase conductors",
        "200% of the phase conductors",
        "25% of the phase conductors"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Oversized neutrals (200%) are common where nonlinear loads dominate. (a) and (d) 50% and 25% would be undersized. (b) 100% is the minimum for balanced loads, not for harmonic-heavy buildings."
    },
    {
      "q": "Section 404.2(C) requires:",
      "choices": [
        "A ground wire at every switch",
        "A neutral conductor at switch locations that control lighting loads",
        "Two switches in every room",
        "A dimmer on every circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 404.2(C) requires a neutral at lighting switch locations. (a) Grounding is required by Article 250, not 404.2(C). (c) Two switches are not required. (d) Dimmers are not required everywhere."
    },
    {
      "q": "0–10 V dimming is:",
      "choices": [
        "A residential dimming method",
        "The standard commercial dimming method, using low-voltage control wires",
        "A motor control method",
        "A fire-alarm method"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0–10 V dimming is the commercial standard for LED fixtures. (a) Residential dimming is usually phase-cut. (c) Motor control uses starters and VFDs. (d) Fire alarms use their own signaling circuits."
    },
    {
      "q": "Emergency lighting is required by:",
      "choices": [
        "Article 210",
        "Article 430",
        "Article 700",
        "Article 500"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Article 700 covers emergency systems, including emergency illumination. (a) Article 210 is branch circuits. (b) Article 430 is motors. (d) Article 500 is hazardous locations."
    },
    {
      "q": "The Table 220.42(A) lighting load for a retail store is:",
      "choices": [
        "1.2 VA/ft²",
        "1.3 VA/ft²",
        "1.9 VA/ft²",
        "3.0 VA/ft²"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Retail is 1.9 VA/ft² in Table 220.42(A). (a) 1.2 VA/ft² is warehouses. (b) 1.3 VA/ft² is offices. (d) 3.0 VA/ft² was the 2017 value, not the 2023 value."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Commercial Lighting: Quick Reference</h3>\n<p><strong>Core idea:</strong> Commercial lighting is 277 V and LED, controlled by sensors and daylighting, and the neutral carries the harmonics.</p>\n<p><strong>Lighting:</strong> 277 V hot-to-neutral on a 277/480-V system · LED with electronic drivers · high-bay for tall ceilings.</p>\n<p><strong>Controls:</strong> Occupancy = auto-on, auto-off · vacancy = manual-on, auto-off · daylighting dims near windows · 0–10 V dimming · neutral required at switches (404.2(C)).</p>\n<p><strong>Harmonics:</strong> Third harmonics add on the neutral; oversized neutrals (200%) are common in computer-heavy buildings.</p>\n<p><strong>Emergency:</strong> Article 700 — emergency illumination and exit signs must work when normal power fails; test them regularly.</p>\n<p><strong>Loads (Table 220.42(A)):</strong> Office 1.3 · retail 1.9 · warehouse 1.2 VA/ft².</p>\n<p><strong>Self-check:</strong> Explain occupancy vs. vacancy, the third-harmonic problem, and why lighting runs at 277 V.</p>\n"
};
