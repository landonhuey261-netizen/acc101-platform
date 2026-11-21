// ele106 - Module 12: Commercial Rough-In, Trim & Commissioning
module.exports = {
  "number": 12,
  "slug": "commercial-rough-in-trim-commissioning",
  "title": "Commercial Rough-In, Trim & Commissioning",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the commercial rough-in sequence: conduit, boxes, and wire pulling.",
    "Explain commercial trim-out: devices, luminaires, and panelboards.",
    "Test a commercial installation: insulation resistance, grounding, and GFCI.",
    "Explain commissioning: testing, documentation, and turnover.",
    "Explain the commercial inspection sequence and the punch list."
  ],
  "sections": [
    {
      "heading": "Commercial Rough-In: Conduit, Boxes, and Wire",
      "html": "<p>Commercial rough-in is conduit work. The raceways go in first — EMT run exposed on a ceiling or in a wall, RMC where the protection is needed, MC cable where the spec permits it — and then the boxes are mounted, the conductors are pulled, and the panelboards are set. The sequence matters: the conduit must be complete before the wire is pulled, and the wire must be pulled before the devices go in. A conduit run that is not complete — a missing coupling, an open box — is a run that cannot be wired.</p><p>Conduit in a commercial building is supported by the rules of its article: EMT (358.30) must be secured within 3 feet of every box and at intervals of not more than 10 feet. The conduit must be reamed after cutting so the conductors are not damaged, and it must be bent with a bender that does not kink or flatten it. A kinked conduit is a conduit that will damage the conductors pulled through it.</p><p>Boxes in commercial work are usually steel, and they must be sized for the conductors they hold (Article 314). The boxes are mounted so their front edges will be flush with the finished wall, and they are labeled with the circuit number so the trim-out electrician knows what feeds them. A box without a circuit label is a box that will be guessed at — and guessed wrong.</p><div class=\"callout\"><strong>Key idea:</strong> Commercial rough-in is conduit work: raceways complete first, then boxes, then wire. EMT is secured within 3 feet of a box and every 10 feet (358.30).</div>"
    },
    {
      "heading": "Pulling Wire in Conduit",
      "html": "<p>Pulling conductors through conduit is a team job: one person feeds, one pulls, and the wire never drags across a sharp edge. The conductors are pulled with a fish tape or a pull rope, and the pulling tension must not exceed the manufacturer's limit — too much tension stretches the copper and damages the insulation. A lubricant made for wire pulling reduces the friction, and it is standard practice on long pulls.</p><p>The number of conductors in a conduit is limited by the fill rules (Chapter 9, Table 1): 53% for one conductor, 31% for two, 40% for three or more. And the conductors in a conduit must be derated when there are more than three current-carrying conductors (Table 310.15(C)(1)) — four to six conductors at 80%, seven to nine at 70%, ten to twenty at 50%. A conduit with nine conductors carries far less current per conductor than a conduit with three.</p><p>The conductors must also be identified: the phase conductors by color (brown, orange, yellow for 480-volt systems; black, red, blue for 208-volt systems, by common practice), the neutral white or gray, and the grounding conductor green or bare. A conduit with unidentified conductors is a conduit that will be wired wrong.</p><ul><li>Fill (Chapter 9, Table 1): 53% one conductor, 31% two, 40% three or more.</li><li>Derating (Table 310.15(C)(1)): 4–6 conductors 80%, 7–9 at 70%, 10–20 at 50%.</li><li>Identify the conductors: phase colors, neutral white/gray, ground green/bare.</li></ul>"
    },
    {
      "heading": "Trim-Out: Devices, Luminaires, and Panelboards",
      "html": "<p>Trim-out in a commercial building is the phase after the walls are finished: the receptacles, switches, and cover plates go in, the luminaires are hung, and the panelboards are made up. The devices are usually commercial-grade — heavier-duty than residential devices, with a stronger yoke and a higher price — and they are often wired with pigtails so that removing a device does not break the circuit downstream.</p><p>Luminaires are hung from boxes listed for the purpose, and in a commercial ceiling they are often supported by the ceiling grid as well as by the box. A luminaire that weighs more than 50 pounds must be supported independently of the outlet box (314.27(B)), and a ceiling fan must hang from a fan-rated box (314.27(C)) — the same rules as in a house, at a larger scale.</p><p>The panelboard is made up last: the branch-circuit conductors are landed on the breakers, the neutrals on the neutral bus, the grounds on the ground bus, and the directory is completed. The directory must identify every circuit legibly and permanently (408.4) — and in a commercial building, the directory is often a printed label, not a handwritten one.</p><div class=\"callout\"><strong>Key idea:</strong> Commercial trim-out: commercial-grade devices, pigtails, luminaires hung from listed boxes, panelboard made up last with a printed directory (408.4).</div>"
    },
    {
      "heading": "Testing and Commissioning",
      "html": "<p>Testing a commercial installation starts before the power goes on: with the circuits de-energized, the electrician checks the insulation resistance of the conductors (a megger test), the continuity of the grounding conductors, and the tightness of the terminations. A megger test applies a high DC voltage to the conductors and measures the insulation resistance — a low reading means damaged insulation, and the circuit must be repaired before it is energized.</p><p>After the power goes on, the testing continues under the licensed supervisor's direction: the voltage is checked at each panelboard, the phase rotation is checked on three-phase equipment, the GFCI devices are tested, and every circuit is proven. A motor is bumped — started briefly — to check its rotation before it is run. A motor that runs backward is a motor that will damage the equipment it drives.</p><p>Commissioning is the formal process that proves the building's systems work as designed: the testing is documented, the as-built drawings are marked up, the operation and maintenance (O&M) manuals are delivered, and the building is turned over to the owner. A commissioned building is a building with a paper trail — and the paper trail is what the owner uses to maintain it.</p><ul><li>Before energizing: megger (insulation resistance), grounding continuity, termination tightness.</li><li>After energizing: voltage, phase rotation, GFCI tests, every circuit proven. Bump a motor to check rotation.</li><li>Commissioning: documented testing, as-builts, O&M manuals, turnover to the owner.</li></ul>"
    },
    {
      "heading": "Inspection and the Punch List",
      "html": "<p>A commercial building is inspected in stages: the rough inspection after rough-in, the ceiling inspection before the ceiling grid closes, and the final inspection after trim-out. Each inspection must pass before the next phase of construction can proceed, and a failed inspection means correcting the work and calling for a re-inspection. The inspector checks the conduit, the boxes, the panelboards, the grounding, the GFCI protection, and the emergency systems.</p><p>The punch list is the list of items that must be corrected before the building is turned over: a missing cover plate, a mislabeled circuit, a luminaire that does not work, a directory that is incomplete. The punch list is made by the engineer or the owner's representative at the end of the job, and the contractor must clear every item on it before the final payment is made.</p><p>The job is done when the punch list is clear, the inspections have passed, the commissioning documents are delivered, and the owner has the keys. A commercial job that ends with a clean punch list and a complete set of documents is a job that the contractor can be proud of — and a job that will not come back as a callback.</p><div class=\"callout\"><strong>Common mistake:</strong> Energizing a commercial installation before the insulation-resistance testing is done. A megger test finds damaged insulation before it becomes a fault — after energizing, it is too late.</div>"
    }
  ],
  "keyTerms": [
    {
      "term": "Rough-in",
      "def": "The wiring phase after framing and before finishes: raceways, boxes, and conductors installed."
    },
    {
      "term": "Trim-out",
      "def": "The wiring phase after finishes: devices, luminaires, and cover plates installed."
    },
    {
      "term": "358.30",
      "def": "EMT must be secured within 3 feet of every box and at intervals of not more than 10 feet."
    },
    {
      "term": "Chapter 9, Table 1",
      "def": "Conduit fill: 53% one conductor, 31% two, 40% three or more."
    },
    {
      "term": "Table 310.15(C)(1)",
      "def": "Adjustment factors for more than three current-carrying conductors: 4–6 at 80%, 7–9 at 70%, 10–20 at 50%."
    },
    {
      "term": "Megger test",
      "def": "An insulation-resistance test that applies a high DC voltage to the conductors."
    },
    {
      "term": "Phase rotation",
      "def": "The order in which the three phases reach their peak; a motor must rotate in the correct direction."
    },
    {
      "term": "Bump test",
      "def": "Starting a motor briefly to check its rotation before running it."
    },
    {
      "term": "Commissioning",
      "def": "The formal process of testing, documenting, and turning over a building's systems."
    },
    {
      "term": "As-built drawings",
      "def": "Drawings marked up to show what was actually installed."
    },
    {
      "term": "O&M manual",
      "def": "The operation and maintenance manual delivered to the owner at turnover."
    },
    {
      "term": "Punch list",
      "def": "The list of items to correct before a building is turned over."
    }
  ],
  "video": {
    "title": "Star Delta Starter Power Wiring With Motor Connection",
    "embedUrl": "https://www.youtube.com/embed/_njWBJ2UkgA",
    "note": "This star-delta starter video shows power wiring with a motor connection — the starter, the contactor, and the motor. It is the commissioning check in action: the motor is wired, the starter is proven, and the rotation is checked before the motor is run. Watch it as the model for testing a motor circuit before turnover.",
    "more": [
      {
        "title": "3 Phase Induction Motor Panel Wiring & Running Practical | ITI Electrician",
        "url": "https://www.youtube.com/watch?v=VxhBSU5sCZg"
      },
      {
        "title": "How to Master Commercial Panel Wiring: Tips Electricians Swear By!",
        "url": "https://www.youtube.com/watch?v=_SbQcswuzns"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> An EMT run is 30 feet long between two boxes. How many supports are required, and where?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 358.30 requires EMT to be secured within 3 feet of every box and at intervals of not more than 10 feet. Step 2: Supports within 3 feet of each box, plus supports at 10-foot intervals. Step 3: At least four supports: near each box and at 10 feet and 20 feet along the run.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A conduit contains nine current-carrying conductors. What is the adjustment factor from Table 310.15(C)(1)?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Table 310.15(C)(1) gives the adjustment factors for more than three current-carrying conductors. Step 2: Seven to nine conductors is 70%. Step 3: Each conductor's ampacity is multiplied by 0.70.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A megger test on a feeder shows very low insulation resistance. What does that mean, and what do you do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Low insulation resistance means damaged insulation. Step 2: The circuit must not be energized. Step 3: Find and repair the damaged conductor — with the circuit de-energized and locked out/tagged out under a licensed supervisor — and re-test before energizing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A three-phase motor is bumped and runs backward. What is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The phase rotation is reversed. Step 2: Swap any two phase conductors at the motor or the starter. Step 3: Bump the motor again to confirm it now runs in the correct direction — with the work done de-energized and locked out/tagged out under a licensed supervisor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A luminaire weighing 60 pounds will hang from a ceiling box. What is required?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 314.27(B) requires luminaires over 50 pounds to be supported independently of the outlet box. Step 2: The luminaire needs its own support — a hanger, a rod, or a support from the structure. Step 3: The box alone is not enough.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A punch list has three items: a missing cover plate, a mislabeled circuit, and a luminaire that does not work. When is the job done?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The job is done when every punch-list item is corrected. Step 2: The cover plate is installed, the directory is corrected, and the luminaire is repaired. Step 3: The inspections have passed, the commissioning documents are delivered, and the owner has accepted the building.</p>"
    }
  ],
  "quiz": [
    {
      "q": "EMT must be secured within 3 feet of every box and at intervals of not more than:",
      "choices": [
        "5 feet",
        "6 feet",
        "10 feet",
        "15 feet"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 358.30: intervals of not more than 10 feet. (a) and (b) 5 and 6 feet are below the maximum. (d) 15 feet exceeds it."
    },
    {
      "q": "Conduit fill for three or more conductors is:",
      "choices": [
        "31%",
        "40%",
        "53%",
        "60%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Chapter 9, Table 1: 40% for three or more conductors. (a) 31% is for two conductors. (c) 53% is for one conductor. (d) 60% is not a fill figure."
    },
    {
      "q": "The adjustment factor for seven to nine current-carrying conductors is:",
      "choices": [
        "50%",
        "70%",
        "80%",
        "100%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Table 310.15(C)(1): 7–9 conductors at 70%. (a) 50% is for 10–20 conductors. (c) 80% is for 4–6 conductors. (d) 100% applies to three or fewer conductors."
    },
    {
      "q": "A megger test measures:",
      "choices": [
        "Voltage",
        "Insulation resistance",
        "Current",
        "Power factor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A megger test measures insulation resistance. (a) Voltage is measured with a voltmeter. (c) Current is measured with an ammeter. (d) Power factor is a different measurement."
    },
    {
      "q": "A luminaire weighing more than 50 pounds must be supported:",
      "choices": [
        "By the outlet box alone",
        "Independently of the outlet box",
        "By the drywall",
        "By the switch"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 314.27(B) requires independent support for luminaires over 50 pounds. (a) The box alone is not enough. (c) Drywall is not a support. (d) The switch carries no load."
    },
    {
      "q": "Bumping a motor means:",
      "choices": [
        "Hitting it with a hammer",
        "Starting it briefly to check its rotation",
        "Running it at full load",
        "Testing its insulation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bumping is a brief start to check rotation. (a) Hitting a motor damages it. (c) Full-load running is a different test. (d) Insulation is tested with a megger."
    },
    {
      "q": "Commissioning is:",
      "choices": [
        "The rough inspection",
        "The formal process of testing, documenting, and turning over a building's systems",
        "The first day of construction",
        "A type of conduit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Commissioning proves the systems work as designed and documents them. (a) The rough inspection is an earlier stage. (c) Commissioning happens at the end. (d) It is not a wiring method."
    },
    {
      "q": "A punch list is:",
      "choices": [
        "A list of materials to order",
        "A list of items to correct before a building is turned over",
        "A list of tools",
        "A list of subcontractors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The punch list is the correction list before turnover. (a) Materials are on a bill of materials. (c) Tools are not on a punch list. (d) Subcontractors are on the project directory."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Rough-In, Trim &amp; Commissioning: Quick Reference</h3>\n<p><strong>Core idea:</strong> Commercial work ends the way it begins — with the Code, the drawings, and a paper trail. Test before energizing, document everything, and clear the punch list.</p>\n<p><strong>Rough-in:</strong> Conduit complete first, then boxes, then wire. EMT secured within 3 ft of a box, every 10 ft (358.30).</p>\n<p><strong>Wire pulling:</strong> Fill 53% / 31% / 40% (Chapter 9, Table 1) · derating 80% / 70% / 50% (Table 310.15(C)(1)) · identify the conductors.</p>\n<p><strong>Trim-out:</strong> Commercial-grade devices, pigtails, luminaires on listed boxes, panelboard made up last with a printed directory (408.4).</p>\n<p><strong>Testing:</strong> Megger (insulation resistance) before energizing · voltage, phase rotation, GFCI after · bump motors to check rotation.</p>\n<p><strong>Commissioning:</strong> Documented testing, as-builts, O&amp;M manuals, turnover. Punch list cleared before final payment.</p>\n<p><strong>Self-check:</strong> State the EMT support rule, the fill and derating figures, and the steps from megger test to turnover.</p>\n"
};
