// Plumbing Certification Prep — original practice content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 3,
  "slug": "nccer-level-2-review",
  "title": "NCCER Level 2 Review",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the Level 2 module groups: offsets and drawings, hangers, DWV rough-in, water supply, fixtures, and gas.",
    "State the Level 2 practice-exam format: 100 questions, 120 minutes, 70% to pass.",
    "Compute simple and rolling offsets, including travel, using the Pythagorean theorem.",
    "Size a drainage run from fixture units and state the DFU values used in this course.",
    "Explain how traps, vents, and water supply components work together in a rough-in."
  ],
  "sections": [
    {
      "heading": "What Level 2 Adds",
      "html": "<p>Level 2 is where the plumber starts building systems instead of joining pieces. The modules cover <strong>offsets and commercial drawings</strong>, <strong>hangers and supports</strong>, <strong>DWV rough-in</strong> (underground and aboveground), <strong>water supply installation</strong>, <strong>fixtures and valves</strong>, <strong>water heaters</strong>, and the first look at <strong>fuel gas</strong>. If Level 1 taught you the words, Level 2 teaches you the sentences: a drain run with the right slope and the right vent, a water line sized for the fixtures it serves, a fixture set level and sealed.</p><p>The practice exam keeps the same published shape as Level 1: <strong>100 questions, 120 minutes, 70% to pass</strong>. The questions get longer, though — more stems with a drawing, a measurement, or a fixture list in them. Read the stem twice: once for the story, once for the numbers. The numbers are usually the question.</p>"
    },
    {
      "heading": "Offsets: The Pythagorean Theorem at Work",
      "html": "<p>An offset moves a pipe around an obstacle, and the math is a right triangle. The <strong>offset</strong> is how far the pipe moves sideways, the <strong>run</strong> is how far it travels along the original line, and the <strong>travel</strong> is the diagonal pipe between the two fittings. For a <strong>45-degree offset</strong>, the run equals the offset, and the travel equals the offset × <strong>1.414</strong>. A 10-inch offset at 45 degrees needs a travel of 14.14 inches — call it 14-1/8 inches on the tape.</p><p>A <strong>rolling offset</strong> moves in two directions at once: it rolls sideways and rises (or drops) at the same time. First find the <strong>true offset</strong> — the square root of (roll² + set²). A roll of 6 inches and a set of 8 inches gives a true offset of 10 inches (the 6-8-10 triangle). Then, at 45 degrees, travel is 10 × 1.414 = 14.14 inches. Exam questions love the 6-8-10 and 3-4-5 triangles because they come out clean. If your numbers are not clean, check whether you squared both legs before adding — the most common error is adding the legs and then taking the square root of the sum, which is not the theorem.</p><div class=\"callout\"><strong>Key idea:</strong> 45° offset: run = offset, travel = offset × 1.414. Rolling offset: true offset = √(roll² + set²), then travel = true offset × 1.414.</div>"
    },
    {
      "heading": "DWV Rough-In: DFUs, Traps, and Vents",
      "html": "<p>Drainage is sized by load, and load is counted in <strong>drainage fixture units (DFUs)</strong>. The values used in this course, from IPC Table 702.1, are: water closet (private) <strong>3</strong>, lavatory <strong>1</strong>, shower <strong>2</strong>, bathtub <strong>2</strong>, kitchen sink <strong>2</strong>, dishwasher <strong>2</strong>, clothes washer <strong>3</strong>. Add the DFUs on a branch, then use the code table to find the smallest drain size that can carry that load at the allowed slope. A bathroom group — one water closet, one lavatory, one bathtub or shower — totals 3 + 1 + 2 = 6 DFU. Two bathroom groups total 12 DFU. The table does the rest; your job is the addition.</p><p>Every fixture needs a <strong>trap</strong> whose water seal blocks sewer gas — the IPC requires a trap seal of <strong>2 inches minimum and 4 inches maximum</strong> — and every trap needs a <strong>vent</strong> so draining water does not siphon the seal away. The vent admits air, the trap holds water, and the slope (1/8 inch per foot for 3- to 6-inch pipe) keeps waste moving without outrunning the water that carries it. When a question describes a gurgling fixture or a smell, think in that order: seal lost, vent blocked, or slope wrong.</p>"
    },
    {
      "heading": "Water Supply, Fixtures, Valves, and Gas",
      "html": "<p>Water supply is pressure work. The building supply brings water in, the meter measures it, and the distribution piping steps down in size as branches split off — large near the source, small at the fixture. Static pressure must not exceed <strong>80 psi</strong> (IPC); above that, a pressure-reducing valve is required. Most fixtures need at least about <strong>15 psi</strong> to work properly. A water heater needs a temperature-and-pressure relief valve, a discharge pipe to a safe place, and (where required) thermal expansion control.</p><p><strong>Valves</strong> are tested by function: a <strong>gate valve</strong> is for full-open or full-closed service, not throttling; a <strong>globe valve</strong> throttles and regulates flow; a <strong>ball valve</strong> gives quick quarter-turn shutoff; a <strong>check valve</strong> allows flow in one direction only. <strong>Fuel gas</strong> enters Level 2 as materials and joining — steel, CSST, and polyethylene — with leak testing by pressure test and soap solution, never by flame. Gas is the first system in the program where a mistake can hurt people who are not on the job, which is why every gas question has a safety answer hiding in it.</p>"
    },
    {
      "heading": "Recap and Common Mistakes",
      "html": "<p>Level 2 in one paragraph: compute the offset before you cut the pipe, add the DFUs before you size the drain, protect every trap with a vent, size water lines from the source outward, match the valve to its function, and treat gas like the hazard it is. The exam rewards the student who works the numbers on paper instead of guessing from the choices — the choices are built from the common arithmetic errors.</p><p><strong>Common mistakes:</strong> using travel where the question asks for run (or the reverse); forgetting to square both legs in a rolling offset; adding DFUs from the wrong column (water-supply fixture units are not drainage fixture units); venting a trap too far from the fixture so the seal siphons; throttling with a gate valve; and testing a gas line with an open flame. Each one is a question type in the practice exam — find yours there, not on test day.</p><div class=\"callout\"><strong>Key idea:</strong> DFU and WSFU are different tables for different systems. A water closet is 3 in both tables used here, but a bathtub is 2 DFU and 4 WSFU — read the stem to see which table it wants.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Offset",
      "def": "A change in a pipe's direction to move around an obstacle, made with two fittings and a diagonal travel piece."
    },
    {
      "term": "Travel",
      "def": "The length of the diagonal pipe in an offset, found from the offset and the fitting angle."
    },
    {
      "term": "Rolling offset",
      "def": "An offset that moves a pipe in two directions at once — sideways (roll) and up or down (set)."
    },
    {
      "term": "True offset",
      "def": "In a rolling offset, the square root of (roll squared + set squared)."
    },
    {
      "term": "DFU",
      "def": "Drainage fixture unit — the load value assigned to a fixture for sizing drainage piping."
    },
    {
      "term": "WSFU",
      "def": "Water supply fixture unit — the demand value assigned to a fixture for sizing water supply piping."
    },
    {
      "term": "Trap seal",
      "def": "The water held in a trap that blocks sewer gas; IPC requires 2 inches minimum and 4 inches maximum."
    },
    {
      "term": "Trap arm",
      "def": "The horizontal pipe between a fixture trap and its vent."
    },
    {
      "term": "Vent",
      "def": "A pipe that admits air into a drainage system so traps are not siphoned and waste flows freely."
    },
    {
      "term": "Gate valve",
      "def": "A valve for full-open or full-closed service; not for throttling."
    },
    {
      "term": "Globe valve",
      "def": "A valve designed to throttle and regulate flow."
    },
    {
      "term": "Ball valve",
      "def": "A quarter-turn valve that gives fast, positive shutoff."
    },
    {
      "term": "Check valve",
      "def": "A valve that allows flow in one direction only and prevents backflow."
    },
    {
      "term": "Pressure-reducing valve",
      "def": "A valve that limits downstream water pressure; required when static pressure exceeds 80 psi."
    },
    {
      "term": "T&P relief valve",
      "def": "The temperature-and-pressure relief valve on a water heater that opens if temperature or pressure gets too high."
    },
    {
      "term": "CSST",
      "def": "Corrugated stainless steel tubing, a flexible material for fuel gas piping."
    }
  ],
  "video": {
    "title": "What is DWV",
    "embedUrl": "https://www.youtube.com/embed/YGj-jijogmk",
    "note": "Drain, waste, and vent in plain terms: gravity moves the waste, vents let air in and sewer gas out, and the trap seal is the barrier in between. Level 2 questions test exactly these three jobs.",
    "more": [
      {
        "title": "How to size Plumbing Water pipes using Fixture Units",
        "url": "https://www.youtube.com/watch?v=fr8CXkczYKw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, distinguish <em>DFU</em> from <em>WSFU</em>, using the definitions in this module's key terms. Give one field or exam example of each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: State each definition plainly. <em>DFU</em>: Drainage fixture unit — the load value assigned to a fixture for sizing drainage piping. <em>WSFU</em>: Water supply fixture unit — the demand value assigned to a fixture for sizing water supply piping. Step 2: Name the difference in one sentence — the two terms differ in what they protect, who issues them, or the level of work they cover. Step 3: Attach an example to each from the module (a job situation for one, an exam stem for the other). If your examples could be swapped without changing their truth, your distinction is not sharp enough yet — rewrite until they cannot.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: &quot;Name the Level 2 module groups: offsets and drawings, hangers, DWV rough-in, water supply, fixtures, and gas.&quot; Write a three-sentence exam-ready explanation of this objective, including every number or named rule it contains.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Restate the objective as a claim. Step 2: Support it with the module's verified facts — use only numbers taught in this course (for example: 6,000 apprentice hours over 3 years; 75% to pass the Michigan journeyman written exam; NCCER module tests pass at 70%; ASSE 5110 is 100 questions at 70%; slope is 1/4 inch per foot for pipe 2-1/2 inches and smaller, 1/8 inch per foot for 3 to 6 inches, and 1/16 inch per foot for 8 inches and larger; water produces 0.433 psi per foot of head). Step 3: Close with why it matters on a job. A complete answer names the fact, the number, and the consequence — two of the three earns partial credit in your own grading, so practice all three.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: You are roughing in a bathroom group and the vent takeoff is so far from the trap that the trap gurgles every time the toilet flushes. A helper says to just add a bigger trap. Write the correct professional action and the rule behind it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the shortcut or the wrong move for what it is — in this course's topics, shortcuts are skipping the safety step, guessing a pipe size instead of sizing it, testing a backflow assembly without a calibrated gauge, brazing medical gas without a nitrogen purge, or answering an open-book question from memory instead of looking it up. Step 2: State the correct action from the module (stop and make safe first; compute, then look up, then choose; follow the test procedure in order; purge, braze, test, and document). Step 3: Cite the governing idea in one line. Full credit requires the action AND the rule — the exam's correct choices always contain both.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill for this module. (a) A rolling offset has a roll of 9 inches and a set of 12 inches — what is the true offset, and what is the 45-degree travel? (b) A drain serves 4 water closets (3 DFU each), 4 lavatories (1 DFU each), and 2 showers (2 DFU each) — what is the total DFU? (c) A 30-foot run of 3-inch drain at the IPC minimum slope drops how many inches?</p>",
      "solution": "<p><strong>Solution:</strong> (a) Step 1: True offset = √(9² + 12²) = √(81 + 144) = √225 = <strong>15 inches</strong> (the 9-12-15 triangle). Step 2: Travel at 45° = 15 × 1.414 = <strong>21.21 inches</strong>. (b) Step 1: 4 × 3 = 12; 4 × 1 = 4; 2 × 2 = 4. Step 2: 12 + 4 + 4 = <strong>20 DFU</strong>. (c) Step 1: 3-inch pipe uses 1/8 inch per foot (IPC Table 704.1), so 30 × 1/8 = <strong>3-3/4 inches</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Example pattern: &quot;A <em>trap seal</em> is the water sitting in a trap that blocks sewer gas. Lose it — by evaporation or siphonage — and the room smells like the sewer, so the fix starts with finding why the seal went, not with air freshener.&quot; Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: &quot;A rolling offset's true offset is roll plus set, a gate valve is the best throttling valve, and a gas leak is checked with a match.&quot; Correct every error in that sentence.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: True offset is the square root of (roll² + set²), not the sum. Step 2: A globe valve throttles; a gate valve is for full-open or full-closed service. Step 3: Gas leaks are found by pressure test and soap solution — never with an open flame.</p>"
    }
  ],
  "quiz": [
    {
      "module": 3,
      "q": "A 45-degree offset must move a pipe 12 inches sideways. What is the travel length?",
      "choices": [
        "12 inches",
        "24 inches",
        "About 16.97 inches (12 × 1.414)",
        "8.49 inches"
      ],
      "answer": 2,
      "explanation": "Correct: (c). At 45 degrees, travel = offset × 1.414: 12 × 1.414 = 16.97 inches. (a) is wrong: \"12 inches\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"24 inches\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"8.49 inches\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 3,
      "q": "A rolling offset has a roll of 6 inches and a set of 8 inches. What is the true offset?",
      "choices": [
        "14 inches",
        "7 inches",
        "48 inches",
        "10 inches"
      ],
      "answer": 3,
      "explanation": "Correct: (d). True offset = √(6² + 8²) = √(36 + 64) = √100 = 10 inches (the 6-8-10 triangle). (a) is wrong: \"14 inches\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"7 inches\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"48 inches\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 3,
      "q": "Using this course's DFU values, what is the total DFU of two bathroom groups (each: one water closet, one lavatory, one bathtub)?",
      "choices": [
        "12 DFU",
        "6 DFU",
        "18 DFU",
        "9 DFU"
      ],
      "answer": 0,
      "explanation": "Correct: (a). One group is 3 + 1 + 2 = 6 DFU; two groups are 12 DFU. (b) is wrong: \"6 DFU\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"18 DFU\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"9 DFU\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 3,
      "q": "The IPC trap-seal requirement is:",
      "choices": [
        "1 inch minimum, 2 inches maximum",
        "2 inches minimum, 4 inches maximum",
        "4 inches minimum, 6 inches maximum",
        "No minimum, 2 inches maximum"
      ],
      "answer": 1,
      "explanation": "Correct: (b). IPC requires a trap seal of at least 2 inches and not more than 4 inches. (a) is wrong: \"1 inch minimum, 2 inches maximum\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"4 inches minimum, 6 inches maximum\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"No minimum, 2 inches maximum\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 3,
      "q": "Which valve is designed for throttling and regulating flow?",
      "choices": [
        "Globe valve",
        "Gate valve",
        "Check valve",
        "Ball valve"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A globe valve throttles and regulates; a gate valve is for full-open/full-closed service, a check valve is one-way, and a ball valve is quick shutoff. (b) is wrong: \"Gate valve\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Check valve\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Ball valve\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 3,
      "q": "Static water pressure above what value requires a pressure-reducing valve under the IPC?",
      "choices": [
        "40 psi",
        "60 psi",
        "100 psi",
        "80 psi"
      ],
      "answer": 3,
      "explanation": "Correct: (d). The IPC limits static water pressure to 80 psi; above that a pressure-reducing valve is required. (a) is wrong: \"40 psi\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"60 psi\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"100 psi\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 3,
      "q": "What is the correct way to check a gas piping system for leaks?",
      "choices": [
        "An open flame passed along each joint",
        "Pressure test, then soap solution on joints — never an open flame",
        "Smell alone, with no test",
        "Fill the line with water and watch for drips"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Gas lines are pressure-tested and checked with soap solution; an open flame is never a leak-test tool. (a) is wrong: \"An open flame passed along each joint\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Smell alone, with no test\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Fill the line with water and watch for drips\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "module": 3,
      "q": "How many questions and minutes is the Level 2 practice exam, and what passes it?",
      "choices": [
        "125 questions, 180 minutes, 75%",
        "100 questions, 120 minutes, 75%",
        "50 questions, 90 minutes, 70%",
        "100 questions, 120 minutes, 70% (70 correct)"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Level 2 is 100 questions in 120 minutes at 70% — 70 of 100 correct passes. (a) is wrong: \"125 questions, 180 minutes, 75%\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"100 questions, 120 minutes, 75%\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"50 questions, 90 minutes, 70%\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — NCCER Level 2 Review: Quick Reference</h3><p><strong>Focus:</strong> the Level 2 middle — offsets, DWV rough-in, water supply, fixtures, valves, and gas piping.</p><p><strong>Must-know objectives:</strong> Name the Level 2 module groups: offsets and drawings, hangers, DWV rough-in, water supply, fixtures, and gas.; State the Level 2 practice-exam format: 100 questions, 120 minutes, 70% to pass.; Compute simple and rolling offsets, including travel, using the Pythagorean theorem..</p><p><strong>Anchor numbers (verified for this course):</strong> NCCER Plumbing Level 2: 175 hours; practice exam 100 questions, 120 minutes, 70% to pass (70 of 100); module tests 70%. Offsets: for a 45-degree offset, travel = offset × 1.414 and run = offset; rolling offset true offset = square root of (roll squared + set squared). DFU values used in this course (IPC Table 702.1): water closet private 3, lavatory 1, shower 2, bathtub 2, kitchen sink 2, dishwasher 2, clothes washer 3. IPC slope (Table 704.1): 1/4 inch per foot for pipe 2-1/2 inches and smaller, 1/8 inch per foot for 3 to 6 inches, and 1/16 inch per foot for 8 inches and larger. Water pressure maximum 80 psi static (IPC); minimum fixture pressure commonly 15 psi for most fixtures. Trap seal: 2 inches minimum, 4 inches maximum (IPC).</p><p><strong>Terms to flash-review:</strong> Offset, Travel, Rolling offset, True offset, DFU, WSFU, Trap seal, Trap arm.</p>\n"
};
