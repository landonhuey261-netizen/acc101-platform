// ele106 - Module 1: Commercial Buildings & Their Electrical Systems
module.exports = {
  "number": 1,
  "slug": "commercial-buildings-electrical-systems",
  "title": "Commercial Buildings & Their Electrical Systems",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the three-phase systems used in commercial buildings: 120/208Y and 277/480Y.",
    "Compare commercial and residential electrical systems.",
    "Identify the major loads in an office, a retail store, and a warehouse.",
    "Explain the high-leg (wild leg) of a 120/240-volt delta system and its marking.",
    "Describe how power flows from the utility to the loads in a commercial building."
  ],
  "sections": [
    {
      "heading": "How Commercial Buildings Differ from Houses",
      "html": "<p>A house runs on 120/240-volt single-phase power and its biggest loads are a range, a dryer, and an air conditioner. A commercial building runs on three-phase power, and its biggest loads are lighting, HVAC, motors, and equipment that a house never has: elevators, rooftop units, refrigeration, and production machinery. The scale is different too — a small office may have a 400-ampere service, a supermarket may have 2,000 amperes, and a hospital may have several services and its own generators.</p><p>Commercial work is also more formal than residential work. A house is wired from a floor plan and a panel schedule; a commercial building is wired from engineered drawings, specifications, submittals, and a one-line diagram, and the work is inspected against those documents as well as the Code. The electrician reads plans and specs, coordinates with other trades, and works in a building that may stay open while the work goes on.</p><p>The Code articles shift as well. Dwellings live in Article 210's residential rules and Article 220's dwelling load calculations. Commercial work lives in the same articles but uses the non-dwelling rules: Table 220.42(A) lighting loads, 220.14(I) receptacle loads, Article 430 for motors, Article 500 for hazardous locations, and Articles 700–702 for emergency and standby systems.</p><div class=\"callout\"><strong>Key idea:</strong> Commercial means three-phase power, bigger loads, engineered drawings, and the non-dwelling rules of Articles 210, 220, 430, 500, and 700–702.</div>"
    },
    {
      "heading": "Three-Phase Power: 120/208Y and 277/480Y",
      "html": "<p>Three-phase power has three hot conductors, each 120 degrees out of phase with the others. The two systems you will see most in commercial work are both wye (Y) systems. In a 120/208-volt wye system, each hot is 120 volts from the neutral, and any two hots are 208 volts apart. In a 277/480-volt wye system, each hot is 277 volts from the neutral, and any two hots are 480 volts apart. The voltage between any hot and neutral is the phase voltage; the voltage between any two hots is the line voltage, and line voltage equals phase voltage times the square root of 3 (about 1.73).</p><p>The 120/208-volt system is the commercial cousin of the house's 120/240-volt system: 120-volt receptacles and lighting, 208-volt loads for larger equipment. The 277/480-volt system is the workhorse of larger buildings: 277-volt lighting (fluorescent and LED fixtures run directly on 277 volts, which cuts the current and the wire size), and 480-volt motors, HVAC, and machinery. A 277/480-volt building usually has step-down transformers to make 120/208 volts for receptacles and small loads.</p><p>Both systems need a neutral, and the neutral carries the unbalanced current — just as in a house. But in commercial buildings the neutral has an extra problem: harmonics from nonlinear loads (computers, LED drivers, variable-frequency drives) add up on the neutral instead of canceling, so commercial neutrals are often oversized. Module 5 covers harmonics in detail.</p><ul><li>120/208Y: 120 V hot-to-neutral, 208 V hot-to-hot. Receptacles, small equipment.</li><li>277/480Y: 277 V hot-to-neutral, 480 V hot-to-hot. Lighting at 277 V, motors and HVAC at 480 V.</li><li>Line voltage = phase voltage × 1.73. The neutral carries unbalanced current — and harmonics.</li></ul>"
    },
    {
      "heading": "The High Leg: 120/240-Volt Delta",
      "html": "<p>Some older commercial buildings use a 120/240-volt three-phase delta system, usually center-tapped on one winding so that two of the three phases give 120 volts to neutral and 240 volts to each other, while the third phase — the high leg, or wild leg — is 208 volts to neutral. The high leg is marked orange (110.15 and 408.3(E)), and it must never feed a 120-volt load: a 120-volt receptacle on the high leg gets 208 volts and burns out.</p><p>The high leg exists because the building needs both 240-volt three-phase power for motors and 120-volt power for lights and receptacles, and the delta system provides both from one transformer. New work rarely installs a delta system — wye systems are the standard now — but you will meet high legs in existing buildings, and the orange marking is the warning.</p><p>Panelboards in a high-leg system must be marked, and the high-leg conductor must be connected to the center (B) phase of the panelboard. A 120-volt breaker on the B phase of a high-leg panel is a mistake waiting to happen — and the inspector will catch it.</p><div class=\"callout\"><strong>Common mistake:</strong> Landing a 120-volt circuit on the orange high leg. The high leg is 208 volts to neutral, not 120 — it will destroy a 120-volt load.</div>"
    },
    {
      "heading": "Commercial Loads: Offices, Retail, Warehouses",
      "html": "<p>An office building's loads are lighting, receptacles, and HVAC. The lighting is often 277-volt, the receptacles are 120-volt on 20-ampere circuits, and the HVAC is 480-volt three-phase rooftop units. Computers and office equipment are continuous loads that run all day, which is why commercial load calculations treat lighting as continuous and why the lighting unit loads in Table 220.42(A) already include the 125% continuous-load factor.</p><p>A retail store adds show-window lighting, sign lighting, and refrigeration. Show windows need receptacles (210.62) and their lighting is calculated at 200 volt-amperes per linear foot (220.43(A)). A supermarket's refrigeration is its largest load, and it runs 24 hours a day.</p><p>A warehouse is the simplest commercial load: high-bay lighting, a few receptacles, and maybe a dock leveler or a charger for forklifts. Its lighting load per square foot is the lowest in Table 220.42(A) — 1.2 volt-amperes per square foot — because a warehouse needs far less light per square foot than an office.</p><ul><li>Office: 277-V lighting, 120-V receptacles, 480-V HVAC. Lighting is a continuous load.</li><li>Retail: show windows (200 VA/ft, 220.43(A)), signs, refrigeration.</li><li>Warehouse: high-bay lighting, few receptacles, lowest lighting load per square foot (1.2 VA/ft²).</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Commercial buildings run on three-phase power: 120/208Y and 277/480Y are the standard systems.</li><li>120/208Y: 120 V to neutral, 208 V between hots. 277/480Y: 277 V to neutral, 480 V between hots. Line voltage = phase voltage × 1.73.</li><li>The high leg of a 120/240-V delta is 208 V to neutral and is marked orange — never feed a 120-V load from it.</li><li>Commercial loads: lighting, receptacles, HVAC, motors, and building-specific equipment.</li><li>Commercial work follows engineered drawings and specs, not just a floor plan.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Applying the house's 6-foot receptacle rule to a commercial building. The dwelling receptacle-spacing rules do not apply to commercial occupancies.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting that Table 220.42(A) unit loads already include the 125% continuous-load factor. Do not apply another 125% on top.</div><p><strong>Ready-to-Work link:</strong> If you can name the two standard commercial three-phase systems, their voltages, and the high-leg rule, you have this module. Module 2 covers commercial services and service equipment.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Three-phase power",
      "def": "Power with three hot conductors, each 120 degrees out of phase with the others."
    },
    {
      "term": "Wye (Y) system",
      "def": "A three-phase system with a common neutral point; the standard commercial system."
    },
    {
      "term": "120/208Y",
      "def": "A wye system with 120 volts hot-to-neutral and 208 volts hot-to-hot."
    },
    {
      "term": "277/480Y",
      "def": "A wye system with 277 volts hot-to-neutral and 480 volts hot-to-hot."
    },
    {
      "term": "Phase voltage",
      "def": "The voltage between one hot conductor and the neutral."
    },
    {
      "term": "Line voltage",
      "def": "The voltage between any two hot conductors; phase voltage × 1.73."
    },
    {
      "term": "High leg (wild leg)",
      "def": "The phase of a 120/240-volt delta system that is 208 volts to neutral, marked orange."
    },
    {
      "term": "Delta system",
      "def": "A three-phase system wired in a triangle, with no neutral unless center-tapped."
    },
    {
      "term": "Nonlinear load",
      "def": "A load that draws current in pulses (computers, LED drivers, VFDs), producing harmonics."
    },
    {
      "term": "Harmonics",
      "def": "Extra frequencies in the current that add up on the neutral instead of canceling."
    },
    {
      "term": "One-line diagram",
      "def": "A single-line drawing showing the power path from the service to the loads."
    },
    {
      "term": "Switchboard",
      "def": "A large assembly of switches and overcurrent devices that distributes power in a commercial building."
    },
    {
      "term": "Continuous load",
      "def": "A load expected to run for three hours or more."
    },
    {
      "term": "Table 220.42(A)",
      "def": "The 2023 NEC table of general lighting loads by non-dwelling occupancy, in VA per square foot."
    }
  ],
  "video": {
    "title": "Why 3-Phase Is 400V in Europe but 480V or 208V in America?",
    "embedUrl": "https://www.youtube.com/embed/grffvmCzqcw",
    "note": "This video explains why America uses 208V and 480V three-phase while Europe uses 400V — the history and the math behind the systems in this module. Watch it, then check: what is the line voltage of a 120/208Y system, and why is it 208 and not 240?",
    "more": [
      {
        "title": "You'll Finally Understand Why Power Lines Have Three Wires",
        "url": "https://www.youtube.com/watch?v=BxeoCAC5t3Y"
      },
      {
        "title": "How to Master Commercial Panel Wiring: Tips Electricians Swear By!",
        "url": "https://www.youtube.com/watch?v=_SbQcswuzns"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A commercial building has a 120/208-volt wye service. What is the voltage between any hot conductor and the neutral, and between any two hot conductors?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Hot-to-neutral is the phase voltage: 120 volts. Step 2: Hot-to-hot is the line voltage: 208 volts. Step 3: Check: 120 × 1.73 = 208 volts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 277/480-volt wye system feeds a lighting panel. What voltage do the 277-volt luminaires connect to, and what voltage do the 480-volt motors connect to?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The luminaires connect hot-to-neutral: 277 volts. Step 2: The motors connect hot-to-hot: 480 volts. Step 3: Running lighting at 277 volts cuts the current versus 120 volts, which is why large buildings use it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A panelboard in an older building has an orange conductor on the B phase. What is it, and what must you never do with it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It is the high leg (wild leg) of a 120/240-volt delta system. Step 2: It is 208 volts to neutral, not 120. Step 3: Never feed a 120-volt load from it — a 120-volt receptacle on the high leg would receive 208 volts and be destroyed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 10,000-square-foot office has a Table 220.42(A) lighting load of 1.3 VA/ft². What is the general lighting load?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Multiply area by unit load: 10,000 × 1.3 = 13,000 VA. Step 2: The table value already includes the 125% continuous-load factor. Step 3: Do not apply another 125% — the lighting load is 13,000 VA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A retail store has 40 linear feet of show window. What is the show-window lighting load under 220.43(A)?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 220.43(A) requires 200 VA per linear foot of show window. Step 2: 40 × 200 = 8,000 VA. Step 3: This is in addition to the general lighting load.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Name the two standard commercial three-phase wye systems and the main use of each voltage in each system.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 120/208Y — 120 V for receptacles and lighting, 208 V for larger equipment. Step 2: 277/480Y — 277 V for lighting, 480 V for motors, HVAC, and machinery. Step 3: Larger buildings use 277/480Y and step down to 120/208Y for receptacles.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a 120/208-volt wye system, the voltage between any two hot conductors is:",
      "choices": [
        "120 volts",
        "208 volts",
        "240 volts",
        "277 volts"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hot-to-hot is 208 volts in a 120/208Y system. (a) 120 volts is hot-to-neutral. (c) 240 volts is the hot-to-hot voltage of a 120/240-volt system. (d) 277 volts is the hot-to-neutral voltage of a 277/480Y system."
    },
    {
      "q": "In a 277/480-volt wye system, the voltage between a hot conductor and the neutral is:",
      "choices": [
        "120 volts",
        "208 volts",
        "277 volts",
        "480 volts"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Hot-to-neutral is 277 volts. (a) 120 volts is the 120/208Y phase voltage. (b) 208 volts is the 120/208Y line voltage. (d) 480 volts is the hot-to-hot voltage."
    },
    {
      "q": "Line voltage equals phase voltage times approximately:",
      "choices": [
        "1.00",
        "1.41",
        "1.73",
        "2.00"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Line voltage = phase voltage × √3 ≈ 1.73. (a) 1.00 would mean line equals phase. (b) 1.41 is the square root of 2, used for peak voltage. (d) 2.00 is not the three-phase factor."
    },
    {
      "q": "The high leg of a 120/240-volt delta system is marked:",
      "choices": [
        "Red",
        "Blue",
        "Orange",
        "White"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The high leg is marked orange (110.15). (a) Red is a normal phase color. (b) Blue is a normal phase color. (d) White is reserved for the grounded (neutral) conductor."
    },
    {
      "q": "The high leg of a 120/240-volt delta system is how many volts to neutral?",
      "choices": [
        "120 volts",
        "208 volts",
        "240 volts",
        "277 volts"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The high leg is 208 volts to neutral. (a) 120 volts is the other two phases. (c) 240 volts is hot-to-hot. (d) 277 volts is a 277/480Y phase voltage."
    },
    {
      "q": "The 2023 NEC general lighting load for an office is found in:",
      "choices": [
        "Table 220.12",
        "Table 220.42(A)",
        "Table 220.45",
        "Table 220.55"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In the 2023 NEC, non-dwelling lighting loads are in Table 220.42(A). (a) Table 220.12 was the location in the 2017 NEC and earlier. (c) Table 220.45 is lighting demand factors. (d) Table 220.55 is dwelling ranges."
    },
    {
      "q": "Table 220.42(A) unit loads:",
      "choices": [
        "Must have another 125% applied",
        "Already include the 125% continuous-load factor",
        "Apply only to dwellings",
        "Are maximum values"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The table note says the 125% continuous-load factor is already included. (a) Applying another 125% would double-count it. (c) The table is for non-dwelling occupancies. (d) The values are minimums, not maximums."
    },
    {
      "q": "Show-window lighting is calculated at:",
      "choices": [
        "100 VA per linear foot",
        "150 VA per linear foot",
        "200 VA per linear foot",
        "180 VA per receptacle"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 220.43(A): 200 VA per linear foot. (a) and (b) 100 and 150 VA are too low. (d) 180 VA is the receptacle-outlet value in 220.14(I)."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Commercial Systems: Quick Reference</h3>\n<p><strong>Core idea:</strong> Commercial means three-phase. Learn the two wye systems and the high leg, and the rest of the course builds on them.</p>\n<p><strong>Systems:</strong> 120/208Y (120 V to neutral, 208 V hot-to-hot) · 277/480Y (277 V to neutral, 480 V hot-to-hot). Line = phase × 1.73.</p>\n<p><strong>High leg:</strong> 120/240-V delta, orange, 208 V to neutral — never feed a 120-V load from it.</p>\n<p><strong>Loads (Table 220.42(A), 2023):</strong> Office 1.3 · retail 1.9 · warehouse 1.2 VA/ft². The 125% factor is already included. Show windows: 200 VA/ft (220.43(A)).</p>\n<p><strong>Self-check:</strong> State both wye systems' voltages, the high-leg voltage and color, and the office lighting load for 10,000 ft².</p>\n"
};
