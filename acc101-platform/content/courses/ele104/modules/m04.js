// ele104 - Module 4: Conductors: Sizing, Ampacity & Derating (Article 310)
module.exports = {
  "number": 4,
  "slug": "conductors-sizing-ampacity-derating",
  "title": "Conductors: Sizing, Ampacity & Derating (Article 310)",
  "estTime": "3–4 hours",
  "objectives": [
    "Read conductor ampacity from Table 310.16 using the correct temperature column.",
    "Apply ambient-temperature correction factors from Table 310.15(B)(1).",
    "Apply the adjustment factors for more than three current-carrying conductors.",
    "Complete a full derating calculation and check it against the termination rating.",
    "Explain when the 10-foot and 25-foot tap rules allow a smaller conductor."
  ],
  "sections": [
    {
      "heading": "Ampacity and Table 310.16",
      "html": "<p>Ampacity is the maximum current a conductor can carry continuously without exceeding its temperature rating. The master table is Table 310.16, which lists ampacity by conductor size, material (copper or aluminum), and temperature rating (60°C, 75°C, or 90°C). The values you will use most often for copper are: 14 AWG — 15/20/25 A; 12 AWG — 20/25/30 A; 10 AWG — 30/35/40 A; 8 AWG — 40/50/55 A; 6 AWG — 55/65/75 A; 4 AWG — 70/85/95 A; 2 AWG — 95/115/130 A; 1/0 — 125/150/170 A; 2/0 — 145/175/195 A; 4/0 — 195/230/260 A, reading the 60°C / 75°C / 90°C columns in order.</p><p>Which column you may use depends on the conductor's insulation and the termination rating. THHN/THWN-2 is rated 90°C, so its 90°C ampacity is the starting point for derating. But the final size must also satisfy the termination limit — usually 75°C at breakers and panels, or 60°C for circuits rated 100 amperes or less with equipment not marked otherwise, per 110.14(C)(1). NM cable (Romex) is limited to the 60°C column by 334.80, even though its conductors are 90°C-rated inside the sheath.</p><p>Aluminum conductors carry less current than the same size copper and need a larger size for the same load: 12 AWG aluminum is 15/20/25 A, 10 AWG aluminum is 25/30/35 A, and 8 AWG aluminum is 35/40/45 A. Aluminum terminations must be listed for aluminum, and antioxidant compound and proper torque are part of a correct installation.</p><div class=\"callout\"><strong>Key idea:</strong> Table 310.16 gives ampacity by size, material, and temperature column. The 90°C column is the derating starting point; the termination rating sets the final limit.</div>"
    },
    {
      "heading": "Correction Factors: Hot Rooms",
      "html": "<p>Table 310.16 assumes an ambient temperature of 30°C (86°F). When conductors run through a hotter space — an attic in summer, a boiler room, a rooftop raceway in the sun — their ampacity must be corrected downward using Table 310.15(B)(1). For 90°C-rated conductors, the correction factor at 36–40°C is 0.91, at 41–45°C is 0.87, at 46–50°C is 0.82, and it keeps falling as the temperature rises.</p><p>The correction applies to the ampacity in the conductor's own temperature column. A 12 AWG THHN conductor rated 30 amperes at 90°C, run through a 41–45°C attic, is corrected to 30 × 0.87 = 26.1 amperes. That is still enough for a 20-ampere circuit, but the margin is shrinking — and in a hotter attic it may not be.</p><p>Rooftop raceways get an extra adder: Table 310.15(B)(2) adds 33°C to the ambient temperature for raceways less than 7/8 inch above a rooftop, because the sun heats the raceway itself. A rooftop conduit on a 30°C day is treated as a 63°C environment for correction purposes, which cuts ampacity hard.</p><ul><li>Base ambient for Table 310.16: 30°C (86°F).</li><li>Hotter ambient → multiply by the Table 310.15(B)(1) correction factor.</li><li>Rooftop raceways: add 33°C to ambient (Table 310.15(B)(2)) when less than 7/8 in. above the roof.</li></ul>"
    },
    {
      "heading": "Adjustment Factors: Too Many Conductors in One Raceway",
      "html": "<p>When more than three current-carrying conductors share a raceway, they heat each other, and Table 310.15(C)(1) requires an adjustment factor: 4–6 conductors, 80%; 7–9 conductors, 70%; 10–20 conductors, 50%; 21–30 conductors, 45%; 31–40 conductors, 40%; 41 or more, 35%. The count is current-carrying conductors only — the equipment grounding conductor is not counted, and a neutral that carries only unbalanced current in a 3-wire circuit is not counted, while a neutral in a 4-wire wye circuit with nonlinear loads is counted.</p><p>Both factors apply together when both conditions exist: multiply the base ampacity by the correction factor and then by the adjustment factor. A 10 AWG THHN conductor (40 A at 90°C) with six current-carrying conductors in a 41–45°C attic derates to 40 × 0.87 × 0.80 = 27.8 amperes — still enough for a 20-ampere circuit, but not for a 30-ampere one.</p><p>The practical fix for a crowded raceway is to split the circuits into more raceways, use larger conductors, or reduce the number of current-carrying conductors — for example, by using multiwire branch circuits that share a neutral. Guessing instead of calculating is how a 30-ampere circuit ends up on wire that can only carry 27.</p><div class=\"callout\"><strong>Key idea:</strong> Count only current-carrying conductors. Grounding conductors are never counted; a neutral is counted only when it actually carries current.</div>"
    },
    {
      "heading": "The Full Derating Sequence",
      "html": "<p>The correct sequence has four steps. Step 1: take the ampacity from the conductor's own temperature column (usually 90°C for THHN). Step 2: multiply by the ambient correction factor from Table 310.15(B)(1). Step 3: multiply by the adjustment factor from Table 310.15(C)(1). Step 4: compare the result with the termination ampacity from the 60°C or 75°C column — the smaller of the two governs, and the conductor must also satisfy 240.4(D) small-conductor limits (14 AWG max 15 A, 12 AWG max 20 A, 10 AWG max 30 A) unless an exception applies.</p><p>Worked example: four 12 AWG THHN conductors (two circuits) plus ground in one EMT run through a 46–50°C attic, terminating in 75°C breakers, feeding a 20-ampere load. Step 1: 30 A at 90°C. Step 2: correction 0.82 → 24.6 A. Step 3: four current-carrying conductors, 80% → 19.7 A. Step 4: 19.7 A is less than the 20-ampere load, so 12 AWG fails here — use 10 AWG (40 × 0.82 × 0.80 = 26.2 A, and the 75°C limit for 10 AWG is 35 A, so 26.2 A governs and the circuit is fine).</p><p>That example is the whole lesson: derating is not a formality, it changes the wire size. On the exam, the question will give you the ambient temperature, the conductor count, and the load, and expect exactly this four-step chain.</p><ul><li>Step 1: Base ampacity from the conductor's temperature column (Table 310.16).</li><li>Step 2: × ambient correction factor (Table 310.15(B)(1)).</li><li>Step 3: × adjustment factor (Table 310.15(C)(1)).</li><li>Step 4: Compare with the termination limit; the smaller governs; check 240.4(D).</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Table 310.16 ampacity depends on size, material, and temperature column; copper 12 AWG = 20/25/30 A at 60/75/90°C.</li><li>Ambient correction (Table 310.15(B)(1)) and conductor-count adjustment (Table 310.15(C)(1)) multiply together.</li><li>Derate from the 90°C column, then check the termination limit (usually 75°C).</li><li>Small-conductor limits (240.4(D)): 14 AWG max 15 A, 12 AWG max 20 A, 10 AWG max 30 A.</li><li>NM cable is limited to the 60°C column by 334.80.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Derating from the 75°C column instead of the 90°C column. Derating starts at the conductor's own rating, and the termination check comes last.</div><div class=\"callout\"><strong>Common mistake:</strong> Counting the equipment grounding conductor as current-carrying. It is not counted, and counting it over-derates the circuit.</div><p><strong>Ready-to-Work link:</strong> If you can run the four-step derating chain and explain why a 12 AWG circuit can fail in a hot attic, you have this module. Module 5 covers grounding and bonding in Article 250.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Ampacity",
      "def": "The maximum current a conductor can carry continuously without exceeding its temperature rating."
    },
    {
      "term": "Table 310.16",
      "def": "The NEC table of conductor ampacities by size, material, and temperature rating."
    },
    {
      "term": "THHN/THWN-2",
      "def": "A common 90°C-rated thermoplastic-insulated building wire."
    },
    {
      "term": "Correction factor",
      "def": "A multiplier from Table 310.15(B)(1) that reduces ampacity in ambient temperatures above 30°C."
    },
    {
      "term": "Adjustment factor",
      "def": "A multiplier from Table 310.15(C)(1) that reduces ampacity when more than three current-carrying conductors share a raceway."
    },
    {
      "term": "Current-carrying conductor",
      "def": "A conductor that carries load current; grounding conductors are not counted."
    },
    {
      "term": "Derating",
      "def": "Reducing a conductor's allowable ampacity by applying correction and adjustment factors."
    },
    {
      "term": "Termination rating",
      "def": "The temperature rating of the equipment a conductor terminates in; it limits the final ampacity."
    },
    {
      "term": "240.4(D)",
      "def": "Small-conductor overcurrent limits: 14 AWG max 15 A, 12 AWG max 20 A, 10 AWG max 30 A."
    },
    {
      "term": "NM cable",
      "def": "Nonmetallic-sheathed cable (Romex); ampacity limited to the 60°C column by 334.80."
    },
    {
      "term": "Copper vs. aluminum",
      "def": "Aluminum conductors need a larger size than copper for the same ampacity."
    },
    {
      "term": "Ambient temperature",
      "def": "The temperature of the air around the conductors; Table 310.16 assumes 30°C."
    }
  ],
  "video": {
    "title": "Conduit Fill / Different Insulation types",
    "embedUrl": "https://www.youtube.com/embed/6W7uTCHAA3g",
    "note": "This video explains conduit fill and how insulation type changes what a raceway can hold. Watch for the insulation-temperature discussion and connect it to this module's derating steps.",
    "more": [
      {
        "title": "Journeyman Electrician (NEC 2023) — Load Calculations Article 220: 4 Worked Examples + 5 Self-Test",
        "url": "https://www.youtube.com/watch?v=UY7Py1Ry63s"
      },
      {
        "title": "Electrical Harmonics Explained - Why Neutral Wires Overheat",
        "url": "https://www.youtube.com/watch?v=_y8itPKEAXs"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> What is the 90°C ampacity of 10 AWG copper from Table 310.16, and what is its 75°C ampacity?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 10 AWG copper at 90°C is 40 amperes. Step 2: At 75°C it is 35 amperes. Step 3: At 60°C it is 30 amperes — and 240.4(D) limits 10 AWG copper to a 30-ampere overcurrent device.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 12 AWG THHN conductor (30 A at 90°C) runs through a 41–45°C attic. What is its corrected ampacity?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The Table 310.15(B)(1) correction factor for 90°C conductors at 41–45°C is 0.87. Step 2: 30 × 0.87 = 26.1 amperes. Step 3: 26.1 A is still above 20 A, so the conductor can serve a 20-ampere circuit before any adjustment factor is applied.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Eight current-carrying conductors share one raceway. What is the adjustment factor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Table 310.15(C)(1) covers 7–9 conductors at 70%. Step 2: The adjustment factor is 0.70. Step 3: The equipment grounding conductor is not counted in the eight.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 10 AWG THHN conductor (40 A at 90°C) carries a circuit with 6 current-carrying conductors in a 41–45°C space. What is its derated ampacity?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Correction factor 0.87. Step 2: Adjustment factor for 4–6 conductors is 0.80. Step 3: 40 × 0.87 × 0.80 = 27.8 amperes. Step 4: Check the 75°C termination limit (35 A) — 27.8 A governs, so the conductor can carry 27.8 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why is NM cable limited to the 60°C column even though its conductors are 90°C-rated?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 334.80 limits NM cable ampacity to the 60°C column. Step 2: The sheath and the installation conditions do not support using the higher temperature rating. Step 3: The 90°C rating may still be used for derating calculations, but the final ampacity must not exceed the 60°C value.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A 20-ampere circuit uses 12 AWG THHN in a raceway with 4 current-carrying conductors in a 46–50°C attic, terminating in 75°C breakers. Does 12 AWG work?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Base 30 A at 90°C. Step 2: Correction 0.82 → 24.6 A. Step 3: Adjustment 0.80 → 19.7 A. Step 4: 19.7 A is less than the 20-ampere load, so 12 AWG fails — use 10 AWG (40 × 0.82 × 0.80 = 26.2 A).</p>"
    }
  ],
  "quiz": [
    {
      "q": "From Table 310.16, the ampacity of 12 AWG copper at 75°C is:",
      "choices": [
        "15 amperes",
        "20 amperes",
        "25 amperes",
        "30 amperes"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 12 AWG copper is 20/25/30 A at 60/75/90°C, so 75°C is 25 A. (a) 15 A is the 60°C value for 14 AWG. (b) 20 A is the 60°C value for 12 AWG. (d) 30 A is the 90°C value for 12 AWG."
    },
    {
      "q": "Table 310.16 ampacities are based on an ambient temperature of:",
      "choices": [
        "20°C",
        "25°C",
        "30°C",
        "40°C"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The base ambient is 30°C (86°F). (a) and (b) 20°C and 25°C are below the base. (d) 40°C requires a correction factor."
    },
    {
      "q": "The ambient-temperature correction factor for 90°C conductors at 41–45°C is:",
      "choices": [
        "1.00",
        "0.91",
        "0.87",
        "0.82"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Table 310.15(B)(1) gives 0.87 at 41–45°C for 90°C conductors. (a) 1.00 applies at 30°C. (b) 0.91 applies at 36–40°C. (d) 0.82 applies at 46–50°C."
    },
    {
      "q": "The adjustment factor for 7–9 current-carrying conductors in one raceway is:",
      "choices": [
        "80%",
        "70%",
        "50%",
        "45%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Table 310.15(C)(1): 7–9 conductors = 70%. (a) 80% is for 4–6 conductors. (c) 50% is for 10–20 conductors. (d) 45% is for 21–30 conductors."
    },
    {
      "q": "Which conductor is NOT counted as current-carrying for adjustment factors?",
      "choices": [
        "A hot conductor",
        "A neutral carrying unbalanced current in a 4-wire wye circuit with nonlinear loads",
        "The equipment grounding conductor",
        "A neutral in a 3-wire circuit"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The equipment grounding conductor is never counted. (a) Hot conductors are counted. (b) That neutral is counted because it carries current. (d) A neutral carrying only unbalanced current in a 3-wire circuit is not counted — but the question asks which is never counted, and that is the grounding conductor."
    },
    {
      "q": "Derating calculations start from the ampacity in:",
      "choices": [
        "The 60°C column always",
        "The conductor's own temperature column (usually 90°C for THHN)",
        "The 75°C column always",
        "The smallest column"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Derating starts at the conductor's own rating, usually 90°C for THHN. (a) and (c) The 60°C and 75°C columns are termination limits, not derating starting points. (d) The smallest column is not a rule."
    },
    {
      "q": "Under 240.4(D), the maximum overcurrent protection for 14 AWG copper is:",
      "choices": [
        "10 amperes",
        "15 amperes",
        "20 amperes",
        "25 amperes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 14 AWG copper is limited to 15 amperes. (a) 10 A is below the limit. (c) 20 A is the limit for 12 AWG. (d) 25 A is not a small-conductor limit."
    },
    {
      "q": "NM cable ampacity is limited to the 60°C column by:",
      "choices": [
        "Table 310.16",
        "Section 334.80",
        "Section 250.122",
        "Article 90"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 334.80 sets the 60°C limit for NM cable. (a) Table 310.16 lists the ampacities but does not impose the NM limit. (c) 250.122 sizes equipment grounding conductors. (d) Article 90 is the introduction."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Conductors: Quick Reference</h3>\n<p><strong>Core idea:</strong> Ampacity comes from Table 310.16 by size, material, and temperature column. Derate from the conductor's own column, then check the termination limit.</p>\n<p><strong>Copper ampacities (60/75/90°C):</strong> 14 AWG 15/20/25 · 12 AWG 20/25/30 · 10 AWG 30/35/40 · 8 AWG 40/50/55 · 6 AWG 55/65/75 · 4 AWG 70/85/95.</p>\n<p><strong>Correction (Table 310.15(B)(1)):</strong> 90°C conductors: 36–40°C × 0.91 · 41–45°C × 0.87 · 46–50°C × 0.82. Base ambient 30°C.</p>\n<p><strong>Adjustment (Table 310.15(C)(1)):</strong> 4–6 = 80% · 7–9 = 70% · 10–20 = 50% · 21–30 = 45% · 31–40 = 40% · 41+ = 35%. Grounding conductors never counted.</p>\n<p><strong>Sequence:</strong> Base (90°C) × correction × adjustment → compare with termination limit (usually 75°C) → check 240.4(D).</p>\n<p><strong>Self-check:</strong> Derate a 10 AWG THHN conductor with 6 current-carrying conductors at 41–45°C, out loud, in four steps.</p>\n"
};
