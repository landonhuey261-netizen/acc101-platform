// Plumbing Certification Prep — original practice content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 4,
  "slug": "nccer-level-3-review",
  "title": "NCCER Level 3 Review",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the Level 3 module groups: applied math, sizing, water supply, water treatment, and backflow.",
    "State the Level 3 practice-exam format used in this course: 100 questions, 120 minutes, 70% to pass.",
    "Size water supply piping from water supply fixture units (WSFU) and pressure loss.",
    "Explain how backflow happens — backpressure and backsiphonage — and which assembly stops each hazard.",
    "Size drainage and vent piping from DFU loads using code tables."
  ],
  "sections": [
    {
      "heading": "What Level 3 Adds",
      "html": "<p>Level 3 is the sizing year. The modules cover <strong>applied math</strong>, <strong>sizing water supply systems</strong>, <strong>sizing drainage and vent systems</strong>, <strong>water treatment</strong>, <strong>corrosive-resistant waste</strong>, and the first full treatment of <strong>backflow prevention</strong>. If Level 2 taught you to build a system, Level 3 teaches you to prove the system is big enough — and to prove it with tables, not opinions. Every sizing question has the same shape: count the load, find the length, read the table, pick the size, and round up when you are between sizes.</p><p>The practice exam in this course is <strong>100 questions in 120 minutes at 70%</strong>. Read the flag honestly: that 100-question count is the plan's assumption for Level 3. The official Level 3 spec sheet was not pulled at build time, so the item count is unconfirmed — the 70% pass mark, by contrast, is confirmed for every NCCER module test. Study the knowledge, not the count.</p>"
    },
    {
      "heading": "Sizing Water Supply: WSFU, Length, and Pressure Loss",
      "html": "<p>Water supply sizing has four inputs: <strong>total water supply fixture units (WSFU)</strong>, <strong>developed length</strong> (the pipe run to the most remote fixture), <strong>available pressure</strong>, and <strong>elevation</strong> (0.433 psi lost per foot of rise). The WSFU values used in this course, from IPC Table E103.3(2), are: water closet (private) <strong>3</strong>, lavatory <strong>1</strong>, shower <strong>2</strong>, bathtub <strong>4</strong>, kitchen sink <strong>2</strong>, dishwasher <strong>2</strong>, clothes washer <strong>4</strong>. Add them, convert the total to a flow rate with the code table, then read the pipe-size table at your developed length and allowable pressure loss.</p><p>Work the chain in order and check the units at every step. A common exam trap is handing you the WSFU total and the developed length and asking for the pipe size — the correct choice is the size whose capacity at that length meets or beats the demand; the wrong choices are the size that works at a shorter length, or the size one step too small. When in doubt, round up: an oversized pipe costs a little more, an undersized pipe fails the fixture. And remember the ceiling: static pressure above <strong>80 psi</strong> needs a pressure-reducing valve, and every foot a fixture sits above the source costs 0.433 psi.</p><div class=\"callout\"><strong>Key idea:</strong> Sizing order: count WSFU → convert to flow → check developed length and pressure loss → read the table → round up.</div>"
    },
    {
      "heading": "Sizing Drainage and Vents",
      "html": "<p>Drainage sizing is the mirror image: count <strong>DFUs</strong>, then read the drainage table at the allowed slope. The DFU values are the same ones from Level 2 (water closet 3, lavatory 1, shower 2, bathtub 2, kitchen sink 2, dishwasher 2, clothes washer 3). A 3-inch drain at 1/4 inch per foot carries more than a 3-inch drain at 1/8 inch per foot — slope is capacity — so the table always pairs size with slope. Vents are sized from the DFU load they serve and the length of the vent run: a longer vent needs a larger diameter to move the same air.</p><p>Vent terminals have rules worth memorizing: a vent must terminate above the roof (or through an approved terminal), clear of windows and air intakes, and high enough that frost cannot close it in cold climates. A vent that terminates too low or too close to an opening is a wrong answer in disguise — the question will describe a smell near a window and the cause will be the vent terminal, not the trap. Trace the air path the way you trace the water path: in through the vent, down through the drain, out through the sewer.</p>"
    },
    {
      "heading": "Backflow: Two Causes, Four Assemblies",
      "html": "<p>Backflow is used water flowing the wrong way into clean water, and it happens two ways. <strong>Backsiphonage</strong> is a vacuum in the supply — a main break, a fire hydrant in use — pulling water backward. <strong>Backpressure</strong> is downstream pressure higher than supply pressure — a boiler, a pump, a tall tank — pushing water backward. Both contaminate drinking water, and both are why backflow assemblies exist. The exam tests the distinction constantly: if the stem says vacuum or suction, it is backsiphonage; if it says a pump or boiler pushing back, it is backpressure.</p><p>Four assemblies, matched to hazard: the <strong>reduced pressure principle assembly (RP/RPZ, ASSE 1013)</strong> protects against both backpressure and backsiphonage at <strong>high hazard</strong>; the <strong>double check valve assembly (DCVA, ASSE 1015)</strong> protects against both at <strong>low hazard</strong>; the <strong>pressure vacuum breaker (PVB, ASSE 1020)</strong> and the <strong>spill-resistant vacuum breaker (SVBA, ASSE 1056)</strong> protect against <strong>backsiphonage only</strong> and must be installed above the highest downstream outlet. Choosing a PVB where backpressure is possible is the classic wrong answer — it is the right device for the wrong hazard.</p>"
    },
    {
      "heading": "Water Treatment and Corrosion",
      "html": "<p>Water treatment is Level 3's quiet topic, and it shows up more than students expect. <strong>Hardness</strong> is dissolved calcium and magnesium; it scales heaters and fixtures, and a water softener removes it by ion exchange. <strong>Filtration</strong> removes particles and, depending on the media, taste, odor, and some chemicals. <strong>Corrosion</strong> is metal loss driven by water chemistry and dissimilar metals: connect copper to steel without a <strong>dielectric union</strong> and galvanic corrosion eats the joint. Corrosive waste — from laboratories and some industrial processes — needs <strong>corrosive-resistant waste piping</strong> (special plastics or glass), not standard DWV pipe.</p><p><strong>Common mistakes:</strong> sizing water pipe from DFUs instead of WSFUs; forgetting the 0.433 psi per foot of elevation; reading the sizing table at the wrong developed length; choosing a PVB for a backpressure hazard; and treating hardness as a pressure problem. Level 3 rewards the student who keeps the two fixture-unit tables separate and the two backflow causes separate. Do that, and the sizing questions are arithmetic; fail to do it, and they are traps.</p><div class=\"callout\"><strong>Key idea:</strong> Backflow rule of thumb: high hazard → RPZ. Low hazard, both causes → DCVA. Backsiphonage only → PVB or SVBA. Never a PVB where backpressure can occur.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Developed length",
      "def": "The total pipe length from the source to the most remote fixture, including fitting allowances, used in sizing tables."
    },
    {
      "term": "Pressure loss",
      "def": "The drop in water pressure caused by friction in pipe and fittings and by elevation; sizing tables limit it."
    },
    {
      "term": "Backsiphonage",
      "def": "Backflow caused by a vacuum or negative pressure in the supply piping, pulling water backward."
    },
    {
      "term": "Backpressure",
      "def": "Backflow caused by downstream pressure higher than supply pressure, pushing water backward."
    },
    {
      "term": "RPZ (RP assembly)",
      "def": "Reduced pressure principle backflow assembly (ASSE 1013): protects against backpressure and backsiphonage at high hazard."
    },
    {
      "term": "DCVA",
      "def": "Double check valve assembly (ASSE 1015): protects against backpressure and backsiphonage at low hazard."
    },
    {
      "term": "PVB",
      "def": "Pressure vacuum breaker (ASSE 1020): protects against backsiphonage only; installed above the highest outlet."
    },
    {
      "term": "SVBA",
      "def": "Spill-resistant vacuum breaker (ASSE 1056): protects against backsiphonage only."
    },
    {
      "term": "Cross-connection",
      "def": "Any connection between potable water and a source of contamination — the condition backflow assemblies guard against."
    },
    {
      "term": "Hardness",
      "def": "Dissolved calcium and magnesium in water; causes scale in heaters and fixtures."
    },
    {
      "term": "Ion exchange",
      "def": "The softening process that swaps calcium and magnesium ions for sodium ions."
    },
    {
      "term": "Dielectric union",
      "def": "A fitting that separates dissimilar metals to prevent galvanic corrosion."
    },
    {
      "term": "Galvanic corrosion",
      "def": "Corrosion caused by two different metals in contact in the presence of water, acting like a battery."
    },
    {
      "term": "Corrosive-resistant waste",
      "def": "Piping made for waste that would attack standard DWV materials, such as laboratory waste."
    },
    {
      "term": "Vent terminal",
      "def": "The point where a vent pipe ends outside the building, above the roof and clear of openings."
    },
    {
      "term": "Frost closure",
      "def": "A vent terminal blocked by ice in cold weather, which stops venting and can siphon traps."
    }
  ],
  "video": {
    "title": "How to Size Your Water Lines (PEX & Copper)",
    "embedUrl": "https://www.youtube.com/embed/GaIjYGmwTr0",
    "note": "Fixture units, developed length, and pressure — the sizing chain Level 3 tests again and again. Watch how the total fixture-unit count drives the meter and building-supply sizes, then how each branch is sized from its own count.",
    "more": [
      {
        "title": "Natural gas pipe sizing",
        "url": "https://www.youtube.com/watch?v=ExNosdWfvnI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, distinguish <em>Backsiphonage</em> from <em>Backpressure</em>, using the definitions in this module's key terms. Give one field or exam example of each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: State each definition plainly. <em>Backsiphonage</em>: Backflow caused by a vacuum or negative pressure in the supply piping, pulling water backward. <em>Backpressure</em>: Backflow caused by downstream pressure higher than supply pressure, pushing water backward. Step 2: Name the difference in one sentence — the two terms differ in what they protect, who issues them, or the level of work they cover. Step 3: Attach an example to each from the module (a job situation for one, an exam stem for the other). If your examples could be swapped without changing their truth, your distinction is not sharp enough yet — rewrite until they cannot.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: &quot;Name the Level 3 module groups: applied math, sizing, water supply, water treatment, and backflow.&quot; Write a three-sentence exam-ready explanation of this objective, including every number or named rule it contains.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Restate the objective as a claim. Step 2: Support it with the module's verified facts — use only numbers taught in this course (for example: 6,000 apprentice hours over 3 years; 75% to pass the Michigan journeyman written exam; NCCER module tests pass at 70%; ASSE 5110 is 100 questions at 70%; slope is 1/4 inch per foot for pipe 2-1/2 inches and smaller, 1/8 inch per foot for 3 to 6 inches, and 1/16 inch per foot for 8 inches and larger; water produces 0.433 psi per foot of head). Step 3: Close with why it matters on a job. A complete answer names the fact, the number, and the consequence — two of the three earns partial credit in your own grading, so practice all three.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: A boiler feed line has a PVB installed on it, and the maintenance log shows the boiler pressure regularly exceeds supply pressure. A helper says the PVB is fine because 'a backflow preventer is a backflow preventer.' Write the correct professional action and the rule behind it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the shortcut or the wrong move for what it is — in this course's topics, shortcuts are skipping the safety step, guessing a pipe size instead of sizing it, testing a backflow assembly without a calibrated gauge, brazing medical gas without a nitrogen purge, or answering an open-book question from memory instead of looking it up. Step 2: State the correct action from the module (stop and make safe first; compute, then look up, then choose; follow the test procedure in order; purge, braze, test, and document). Step 3: Cite the governing idea in one line. Full credit requires the action AND the rule — the exam's correct choices always contain both.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill for this module. (a) A house has 2 bathtubs (4 WSFU each), 3 lavatories (1 each), 2 water closets (3 each), and 1 clothes washer (4) — what is the total WSFU? (b) A fixture 15 feet above the source loses how much pressure to elevation? (c) A drain serves 30 DFU; using 1/4 inch per foot, a 24-foot run drops how many inches?</p>",
      "solution": "<p><strong>Solution:</strong> (a) Step 1: 2 × 4 = 8; 3 × 1 = 3; 2 × 3 = 6; 1 × 4 = 4. Step 2: 8 + 3 + 6 + 4 = <strong>21 WSFU</strong>. (b) Step 1: 15 × 0.433 = <strong>6.5 psi</strong> (6.495). (c) Step 1: 24 × 1/4 = <strong>6 inches</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Example pattern: &quot;A <em>trap seal</em> is the water sitting in a trap that blocks sewer gas. Lose it — by evaporation or siphonage — and the room smells like the sewer, so the fix starts with finding why the seal went, not with air freshener.&quot; Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: &quot;A PVB stops backpressure, WSFU and DFU are the same table, and Level 3's 100-question count is confirmed in the official spec sheet.&quot; Correct every error in that sentence.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A PVB protects against backsiphonage only; backpressure needs an RPZ (high hazard) or DCVA (low hazard). Step 2: WSFU sizes water supply and DFU sizes drainage — different tables (a bathtub is 4 WSFU but 2 DFU). Step 3: The Level 3 100-question count is the plan's assumption and is flagged as unconfirmed; only the 70% pass mark is confirmed.</p>"
    }
  ],
  "quiz": [
    {
      "module": 4,
      "q": "Using this course's WSFU values, what is the total WSFU of one bathtub, one lavatory, and one kitchen sink?",
      "choices": [
        "7 WSFU",
        "5 WSFU",
        "6 WSFU",
        "9 WSFU"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Bathtub 4 + lavatory 1 + kitchen sink 2 = 7 WSFU. (b) is wrong: \"5 WSFU\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"6 WSFU\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"9 WSFU\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 4,
      "q": "A fixture sits 23 feet above the water source. How much pressure is lost to elevation alone?",
      "choices": [
        "23 psi",
        "5.3 psi",
        "About 10 psi (23 × 0.433)",
        "0.433 psi"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Elevation loss is 0.433 psi per foot: 23 × 0.433 = 9.96 psi, about 10 psi. (a) is wrong: \"23 psi\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"5.3 psi\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"0.433 psi\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 4,
      "q": "Which assembly protects a high-hazard cross-connection against both backpressure and backsiphonage?",
      "choices": [
        "PVB (ASSE 1020)",
        "DCVA (ASSE 1015)",
        "SVBA (ASSE 1056)",
        "RPZ (ASSE 1013)"
      ],
      "answer": 3,
      "explanation": "Correct: (d). The reduced pressure principle assembly (ASSE 1013) is the high-hazard assembly for both causes; the DCVA is low hazard, and PVB/SVBA handle backsiphonage only. (a) is wrong: \"PVB (ASSE 1020)\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"DCVA (ASSE 1015)\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"SVBA (ASSE 1056)\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 4,
      "q": "A PVB is the wrong choice when:",
      "choices": [
        "Only backsiphonage is possible",
        "Backpressure is possible",
        "The hazard is low",
        "The outlet is below the device"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A PVB protects against backsiphonage only; where backpressure can occur, an RPZ or DCVA is required. (a) is wrong: \"Only backsiphonage is possible\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"The hazard is low\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"The outlet is below the device\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 4,
      "q": "What is the Level 3 practice-exam format in this course, and what is flagged about it?",
      "choices": [
        "100 questions, 120 minutes, 70% — confirmed in the official spec sheet",
        "100 questions, 120 minutes, 70% — the 100-question count is the plan's assumption, unconfirmed from the official spec sheet",
        "125 questions, 180 minutes, 75%",
        "100 questions, 120 minutes, 75%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The course uses 100 questions as the plan's assumption and flags that the official Level 3 spec sheet was not pulled; the 70% pass mark is confirmed for all module tests. (a) is wrong: \"100 questions, 120 minutes, 70% — confirmed in the official spec sheet\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"125 questions, 180 minutes, 75%\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"100 questions, 120 minutes, 75%\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 4,
      "q": "Hard water scale in a water heater is caused by:",
      "choices": [
        "Dissolved calcium and magnesium",
        "Dissolved oxygen only",
        "Low water pressure",
        "Excess chlorine"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Hardness is dissolved calcium and magnesium, which deposits as scale; a softener removes it by ion exchange. (b) is wrong: \"Dissolved oxygen only\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Low water pressure\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Excess chlorine\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 4,
      "q": "What fitting prevents galvanic corrosion where copper meets steel?",
      "choices": [
        "Check valve",
        "Dielectric union",
        "Dielectric union is wrong; use a brass nipple alone",
        "Expansion loop"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A dielectric union separates dissimilar metals so galvanic corrosion cannot occur at the joint. (a) is wrong: \"Check valve\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Dielectric union is wrong; use a brass nipple alone\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Expansion loop\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 4,
      "q": "In water-supply sizing, what is developed length?",
      "choices": [
        "The length of the longest single pipe in the building",
        "The vertical distance from the meter to the roof",
        "The length of the building supply only",
        "The pipe length from the source to the most remote fixture, including fitting allowances"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Developed length is the run to the most remote fixture with fitting allowances, and sizing tables are read at that length. (a) is wrong: \"The length of the longest single pipe in the building\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"The vertical distance from the meter to the roof\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"The length of the building supply only\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — NCCER Level 3 Review: Quick Reference</h3><p><strong>Focus:</strong> the Level 3 middle — sizing water and drainage, vents, water treatment, and backflow protection.</p><p><strong>Must-know objectives:</strong> Name the Level 3 module groups: applied math, sizing, water supply, water treatment, and backflow.; State the Level 3 practice-exam format used in this course: 100 questions, 120 minutes, 70% to pass.; Size water supply piping from water supply fixture units (WSFU) and pressure loss..</p><p><strong>Anchor numbers (verified for this course):</strong> NCCER Plumbing Level 3: 157.5 hours; practice exam 100 questions, 120 minutes, 70% to pass (70 of 100) — item count is the plan's assumption, NOT verified from NCCER's official Level 3 spec sheet; module tests 70%. WSFU values used in this course (IPC Table E103.3(2)): water closet private 3, lavatory 1, shower 2, bathtub 4, kitchen sink 2, dishwasher 2, clothes washer 4. Backflow assemblies: RPZ/RP (ASSE 1013) for high hazard, DCVA (ASSE 1015) for low hazard, PVB (ASSE 1020) for backsiphonage only, SVBA (ASSE 1056) for backsiphonage only. Water: 0.433 psi per foot; 80 psi maximum static pressure. Pressure loss allowance commonly 15 psi per 100 feet in sizing examples. IPC slope (Table 704.1): 1/4 inch per foot for pipe 2-1/2 inches and smaller, 1/8 inch per foot for 3 to 6 inches, and 1/16 inch per foot for 8 inches and larger.</p><p><strong>Terms to flash-review:</strong> Developed length, Pressure loss, Backsiphonage, Backpressure, RPZ (RP assembly), DCVA, PVB, SVBA.</p>\n"
};
