// ele290 — Electrical Certification Prep: original review content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 3,
  "slug": "journeyman-review-2",
  "title": "Michigan Journeyman Review II: Calculations & Plans",
  "estTime": "3–4 hours",
  "objectives": [
    "Run the Article 220 standard-method dwelling load calculation (220.82) including demand factors from Table 220.42.",
    "Size a dwelling service with 230.79(C) (100-amp minimum) and select the feeder and overcurrent device.",
    "Apply conduit fill (Chapter 9 Tables 1, 4, 5) and box fill (314.16) to real raceway and box problems.",
    "Read a plan set: symbols, schedules, riser diagrams, and the notes that govern the work.",
    "Apply the standard overcurrent-device sizes of 240.6 and the tap rules of 240.21."
  ],
  "sections": [
    {
      "heading": "The Dwelling Load Calculation: Article 220.82",
      "html": "<p>The standard method (<strong>220.82</strong>) builds a dwelling load in five blocks. <strong>General lighting and receptacles: 3 volt-amperes per square foot</strong> of floor area (Table 220.12). <strong>Small-appliance circuits: 1,500 VA each</strong>, minimum two (210.11(C)(1)). <strong>Laundry circuit: 1,500 VA</strong> (210.11(C)(2)). Then the <strong>fixed appliances</strong> at nameplate, the <strong>dryer at 5,000 VA minimum</strong> (220.54), the <strong>range per Table 220.55</strong>, and the <strong>heating or air-conditioning load, whichever is larger</strong> (220.82(C)).</p><p>Demand factors come from <strong>Table 220.42</strong>: the first 3,000 VA of general lighting and receptacle load at 100%, the remainder at 35% (for a dwelling). The demand load, not the connected load, sizes the service. The optional method (220.83) is simpler — a flat demand for the whole dwelling — and the exam may ask you to recognize which method a stem is using, so learn both by name.</p>"
    },
    {
      "heading": "From Load to Service: 230.79(C) and the Feeder",
      "html": "<p>Once the demand load is known, the service size follows: divide volt-amperes by the service voltage to get amps, then pick the next standard overcurrent size from <strong>240.6(A)</strong> (15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250, 300, 350, 400, 450, 500, 600...). The dwelling service disconnect must be at least <strong>100 amps (230.79(C))</strong> for a one-family dwelling. A 200-amp service is the common modern choice, but the exam asks for the Code minimum, not the common choice.</p><p>Feeders follow Article 215: the feeder conductor must carry the calculated load, and the feeder overcurrent device protects it. The service conductors themselves (Article 230) need a disconnecting means — <strong>230.71</strong> allows no more than <strong>six disconnects</strong> to disconnect the service — and a clear working space under 110.26. Keep the chain straight: load → demand → service size → feeder → branch circuits.</p>"
    },
    {
      "heading": "Conduit Fill and Box Fill: Chapter 9 and Article 314",
      "html": "<p>Conduit fill uses three Chapter 9 tables together. <strong>Table 1</strong> sets the fill limits: 53% for one conductor, 31% for two, 40% for more than two. <strong>Table 4</strong> gives the total cross-sectional area of each conduit size (for example, 1/2-inch EMT is 0.304 square inches; 3/4-inch EMT is 0.533). <strong>Table 5</strong> gives the area of each conductor (12 AWG THHN is 0.0133 square inches; 10 AWG THHN is 0.0211). Multiply the conductor area by the count, divide by the conduit area, and compare with the Table 1 limit.</p><p>Box fill (<strong>314.16</strong>) counts volume allowances, not conductors alone: each conductor counts 1, each device (switch or receptacle) counts 2, all equipment grounding conductors together count 1, and internal cable clamps together count 1. Each allowance takes the volume of the largest conductor in the box from <strong>Table 314.16(B)</strong> (14 AWG 2.0, 12 AWG 2.25, 10 AWG 2.5 cubic inches). The box's volume must equal or exceed the total — Table 314.16(A) lists standard box volumes, such as 18 cubic inches for a 4-inch square by 1-1/2-inch box.</p>"
    },
    {
      "heading": "Reading Plans: Symbols, Schedules, and the Riser",
      "html": "<p>Exam plan questions are reading questions, not drawing questions. A plan set has a <strong>legend</strong> (what each symbol means), a <strong>panel schedule</strong> (every circuit, its load, its breaker, and its conductor), and a <strong>riser diagram</strong> (the one-line view from the service to the panels). The <strong>written dimension governs</strong> over a scaled measurement, and the <strong>specifications</strong> state quality and materials the drawings do not show.</p><p>The traps are the same every time: a symbol that looks like a duplex receptacle but is a floor receptacle; a circuit on the schedule that the plan omits; a note that says \"verify in field\" — which means the drawing is not the final word. Read the legend first, the schedule second, the plan third, and the notes last — and answer from what the documents say, not from what you would install.</p>"
    },
    {
      "heading": "Overcurrent Devices and Tap Rules",
      "html": "<p><strong>240.6(A)</strong> lists the standard ampere ratings of fuses and inverse-time circuit breakers — 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250, 300, 350, 400, 450, 500, 600, 700, 800, 1000, 1200, 1600, 2000, 2500, 3000, 4000, 5000, 6000. When a calculation lands between two sizes, the next higher standard size is permitted only where the Code says so (240.4(B) allows it for conductors over 800 amps or where the calculated load does not match a standard size, with limits).</p><p>Tap rules (<strong>240.21</strong>) let a tap conductor be smaller than the feeder it taps, within strict length limits — the 10-foot tap rule (240.21(B)(1)) and the 25-foot tap rule (240.21(B)(2)) are the two the exam tests most. Both require the tap to terminate in a single overcurrent device and to be protected from physical damage. A tap that runs 30 feet with no protection at the far end fails both rules.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "220.82",
      "def": "The Article 220 standard method for a dwelling-unit load calculation."
    },
    {
      "term": "220.83",
      "def": "The optional method for a dwelling-unit load calculation."
    },
    {
      "term": "Table 220.42",
      "def": "Lighting-load demand factors: the first 3,000 VA at 100%, the remainder at 35% for a dwelling."
    },
    {
      "term": "Table 220.12",
      "def": "General lighting loads by occupancy: 3 VA per square foot for a dwelling unit."
    },
    {
      "term": "Table 220.55",
      "def": "Demand factors for household electric ranges."
    },
    {
      "term": "230.79(C)",
      "def": "A one-family dwelling service must have a disconnect rated at least 100 amps."
    },
    {
      "term": "240.6(A)",
      "def": "The standard ampere ratings of fuses and inverse-time circuit breakers."
    },
    {
      "term": "Chapter 9 Table 1",
      "def": "Conduit fill limits: 53% one conductor, 31% two, 40% more than two."
    },
    {
      "term": "Chapter 9 Table 4",
      "def": "Conduit dimensions and cross-sectional areas."
    },
    {
      "term": "Chapter 9 Table 5",
      "def": "Conductor dimensions and cross-sectional areas by insulation type."
    },
    {
      "term": "314.16",
      "def": "Box fill: volume allowances per conductor, device, ground, and clamp."
    },
    {
      "term": "Panel schedule",
      "def": "The table listing every circuit in a panel: load, breaker size, and conductor."
    },
    {
      "term": "Riser diagram",
      "def": "A one-line diagram showing the service, feeders, and panels and how they connect."
    },
    {
      "term": "240.21",
      "def": "The tap rules: 10-foot and 25-foot taps with strict length and protection limits."
    },
    {
      "term": "Demand load",
      "def": "The load after demand factors are applied — the load that sizes the service and feeder."
    },
    {
      "term": "Feeder",
      "def": "The conductors between the service equipment and the final branch-circuit overcurrent device."
    }
  ],
  "video": {
    "title": "NEC 2023 — Dwelling Calculations (Art. 220)",
    "embedUrl": "https://www.youtube.com/embed/pT1FfXcj1Pc",
    "note": "A worked walkthrough of dwelling-unit load calculations under Article 220 of the 2023 NEC — the same standard method this module teaches.",
    "more": [
      {
        "title": "NEC Dwelling Service Calculation Example",
        "url": "https://www.youtube.com/watch?v=Nb5c552cBms"
      },
      {
        "title": "Everything you need to know to solve Voltage Drop Calculations!!",
        "url": "https://www.youtube.com/watch?v=6t3wUX5NIqM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A one-family dwelling has 1,800 square feet of living area. (a) What is the general lighting and receptacle load at 3 VA per square foot? (b) Add two small-appliance circuits and one laundry circuit. (c) Apply Table 220.42 demand to the lighting/receptacle block only.</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 1,800 × 3 = 5,400 VA. (b) 2 × 1,500 + 1,500 = 4,500 VA, for a general-load subtotal of 9,900 VA. (c) First 3,000 VA at 100% = 3,000; the remaining 6,900 VA at 35% = 2,415; demand = 5,415 VA for that block.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"Apply conduit fill (Chapter 9 Tables 1, 4, 5) and box fill (314.16).\" Write a three-sentence exam-ready explanation of the fill limits and one worked box-fill count.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Chapter 9 Table 1 limits fill to 53% for one conductor, 31% for two, and 40% for more than two; Table 4 gives conduit area and Table 5 gives conductor area. Step 2: Box fill counts volume allowances — 1 per conductor, 2 per device, 1 for all grounds, 1 for all clamps — times the largest conductor's volume from Table 314.16(B). Step 3: Example: three 12 AWG conductors plus one device in a box = 3 + 2 = 5 allowances × 2.25 cubic inches = 11.25 cubic inches required.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: A plan's panel schedule shows a 40-amp range circuit, but the plan view shows a gas range with no receptacle. What do you do, and what governs?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Stop and check the legend and the specifications — the schedule and the plan disagree. Step 2: Ask the supervisor or the engineer of record for the answer in writing before roughing in; do not guess. Step 3: The specifications and the written notes govern over a scaled or assumed reading of the plan.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill. (a) What is the minimum service for a one-family dwelling? (b) How many conductors can fill a conduit to what percent when there are four of them? (c) What is the volume allowance for one 12 AWG conductor in a box?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 100 amps — 230.79(C). (b) Four conductors fall under the more-than-two rule: 40% fill. (c) 2.25 cubic inches — Table 314.16(B).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: \"General lighting is 5 VA per square foot, the dryer counts at 3,000 VA, a dwelling service can be 60 amps, and a box with four 12 AWG conductors needs only 4 volume allowances.\" Correct every error in that statement.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: General lighting for a dwelling is 3 VA per square foot (Table 220.12). Step 2: The dryer counts at 5,000 VA minimum (220.54). Step 3: A one-family dwelling service must be at least 100 amps (230.79(C)). Step 4: Four 12 AWG conductors are 4 allowances, but grounds and clamps add allowances — and each device counts 2, so the count depends on the whole box, not just the conductors.</p>"
    }
  ],
  "quiz": [
    {
      "module": 3,
      "q": "A dwelling has 2,000 square feet of living area. What is its general lighting and receptacle load under Table 220.12?",
      "choices": [
        "5,000 VA",
        "6,000 VA",
        "4,500 VA",
        "3,000 VA"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 2,000 × 3 VA per square foot = 6,000 VA. (a) is wrong: \"5,000 VA\" — 5,000 VA is the dryer's minimum, not the lighting load. (c) is wrong: \"4,500 VA\" — 4,500 VA would be 2,000 × 2.25, not 3 VA per square foot. (d) is wrong: \"3,000 VA\" — 3,000 VA is the first demand block, not the connected lighting load."
    },
    {
      "module": 3,
      "q": "What is the minimum volt-ampere value for a household electric dryer in a load calculation?",
      "choices": [
        "3,000 VA",
        "5,000 VA",
        "1,500 VA",
        "8,000 VA"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 220.54 sets the dryer at 5,000 VA minimum (or the nameplate, whichever is larger). (a) is wrong: \"3,000 VA\" — 3,000 VA is not the dryer minimum. (c) is wrong: \"1,500 VA\" — 1,500 VA is a small-appliance or laundry circuit, not the dryer. (d) is wrong: \"8,000 VA\" — 8,000 VA is not the dryer minimum."
    },
    {
      "module": 3,
      "q": "What is the minimum service disconnect rating for a one-family dwelling under 230.79(C)?",
      "choices": [
        "60 amps",
        "200 amps",
        "100 amps",
        "150 amps"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 230.79(C) requires at least a 100-amp disconnect for a one-family dwelling. (a) is wrong: \"60 amps\" — 60 amps is below the 100-amp minimum. (b) is wrong: \"200 amps\" — 200 amps is a common modern choice, not the Code minimum. (d) is wrong: \"150 amps\" — 150 amps exceeds the minimum but is not the minimum."
    },
    {
      "module": 3,
      "q": "Six 12 AWG THHN conductors are pulled in a 3/4-inch EMT. What is the fill percentage?",
      "choices": [
        "About 15%",
        "About 40%",
        "About 25%",
        "About 53%"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Six × 0.0133 = 0.0798 sq in; 0.0798 / 0.533 = 0.15, about 15% — well under the 40% limit for more than two conductors. (b) is wrong: \"About 40%\" — 40% is the fill limit for more than two conductors, not the actual fill here. (c) is wrong: \"About 25%\" — 25% is higher than the actual 15% fill. (d) is wrong: \"About 53%\" — 53% is the one-conductor limit, not the fill here."
    },
    {
      "module": 3,
      "q": "A box contains four 14 AWG conductors, one duplex receptacle, and all equipment grounding conductors. How many volume allowances does 314.16 require?",
      "choices": [
        "5",
        "7",
        "6",
        "4"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Four conductors = 4, one device = 2, all grounds together = 1, for a total of 7 allowances. (a) is wrong: \"5\" — Five counts only the conductors plus one, missing the device's 2 and the ground's 1. (c) is wrong: \"6\" — Six misses one allowance — the device counts 2, not 1. (d) is wrong: \"4\" — Four counts only the conductors."
    },
    {
      "module": 3,
      "q": "Which document in a plan set lists every circuit, its load, its breaker, and its conductor?",
      "choices": [
        "The riser diagram",
        "The panel schedule",
        "The legend",
        "The specification index"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The panel schedule lists every circuit with its load, breaker size, and conductor. (a) is wrong: \"The riser diagram\" — The riser diagram shows how the service feeds the panels, not the circuit-by-circuit list. (c) is wrong: \"The legend\" — The legend defines the symbols, not the circuits. (d) is wrong: \"The specification index\" — The specifications state quality and materials, not the circuit list."
    },
    {
      "module": 3,
      "q": "Under the 10-foot tap rule (240.21(B)(1)), a tap conductor must terminate in what?",
      "choices": [
        "A junction box with no device",
        "A single overcurrent device",
        "The main service disconnect only",
        "A ground rod"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The 10-foot tap rule requires the tap to terminate in a single overcurrent device that protects it. (a) is wrong: \"A junction box with no device\" — A junction box alone does not protect the tap. (c) is wrong: \"The main service disconnect only\" — The tap need not run all the way to the main service disconnect. (d) is wrong: \"A ground rod\" — A ground rod is grounding, not overcurrent protection."
    },
    {
      "module": 3,
      "q": "A demand load of 18,000 VA is served at 240 volts, single-phase. What is the service current?",
      "choices": [
        "60 amps",
        "75 amps",
        "100 amps",
        "50 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = 18,000 / 240 = 75 amps, so the service must be at least 100 amps under 230.79(C). (a) is wrong: \"60 amps\" — 60 amps would be 14,400 VA at 240 volts. (c) is wrong: \"100 amps\" — 100 amps is the minimum service size, not the calculated current. (d) is wrong: \"50 amps\" — 50 amps would be 12,000 VA at 240 volts."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Michigan Journeyman Review II: Calculations & Plans: Quick Reference</h3><p><strong>Focus:</strong> The Dwelling Load Calculation: Article 220.82 — the review ground for this module's exam questions.</p><p><strong>Must-know objectives:</strong> Run the Article 220 standard-method dwelling load calculation (220.82) including demand factors from Table 220.42.; Size a dwelling service with 230.79(C) (100-amp minimum) and select the feeder and overcurrent device.; Apply conduit fill (Chapter 9 Tables 1, 4, 5) and box fill (314.16) to real raceway and box problems..</p><p><strong>Anchor numbers (verified for this course):</strong> All code values in this module are from the 2023 NEC plus Michigan Part 8 amendments as adopted March 12, 2024. Michigan journeyman: 80 questions, 150 minutes, 75% to pass. Michigan master: 76 questions, 180 minutes, 75% to pass. NCCER module tests pass at 70%; journey-level assessments at 75%. NABCEP PV Associate passes at a scaled score of 65 on a 0–99 scale — never 65%.</p><p><strong>Terms to flash-review:</strong> 220.82, 220.83, Table 220.42, Table 220.12, Table 220.55, 230.79(C), 240.6(A), Chapter 9 Table 1</p>\n"
};
