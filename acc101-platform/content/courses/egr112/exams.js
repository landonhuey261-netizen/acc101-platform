// egr112 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and wording).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "description": "Covers Modules 1–6: the design process, requirements and selection, materials, failure modes, shafts, and bearings. 25 questions, 75 minutes.",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "q": "In the engineering design process, which step comes first?",
        "choices": [
          "Imagine many solutions",
          "Define the problem",
          "Build a prototype",
          "Test and improve"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The process starts by defining the problem — what must be achieved and for whom. (a) comes third, after research. (c) comes fifth. (d) comes last.",
        "module": 1
      },
      {
        "q": "What is a prototype built for?",
        "choices": [
          "To sell to the first customer",
          "To answer a specific question about the design, cheaply, before the real product is made",
          "To prove the design is finished",
          "To replace the need for calculations"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A prototype answers one question — does it fit, does it move, does it survive the load? (a) is wrong: a prototype is not a product. (c) is wrong: a prototype is a step toward a finished design. (d) is wrong: prototypes complement calculations, they do not replace them.",
        "module": 1
      },
      {
        "q": "During testing, a prototype fails and the team goes back to redefine the problem. What is this called, and is it a failure of the process?",
        "choices": [
          "Scope creep, and yes it is a failure",
          "Iteration, and no — looping back with new evidence is the process working as intended",
          "Revision control, and no",
          "Prototyping, and yes"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Iteration is going back to an earlier step with evidence from testing — it is how designs improve. (a) is wrong: scope creep is adding work, not redefining a problem. (c) is wrong: revision control is version management. (d) is wrong: prototyping is building a test version, not looping back.",
        "module": 1
      },
      {
        "q": "A team says, “We need a bigger motor.” Is that a problem statement or a solution, and why does it matter?",
        "choices": [
          "It is a problem statement, and it is fine",
          "It is a solution, and naming it too early closes off better options and may solve the wrong problem",
          "It is a requirement, and it is testable",
          "It is a specification, and it is complete"
        ],
        "answer": 1,
        "explanation": "Correct: (b). “A bigger motor” is an answer, not a problem — the real problem might be a worn belt or a jam. (a) is wrong: it does not describe the problem. (c) is wrong: it is not a measurable requirement. (d) is wrong: it has no numbers or conditions.",
        "module": 1
      },
      {
        "q": "A teammate asks how a requirement differs from a specification. What is the correct answer?",
        "choices": [
          "There is no difference",
          "A requirement says what the design must do; a specification is the detailed, measurable, testable version",
          "A specification is shorter",
          "A requirement is secret and a specification is public"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A requirement says what; a specification adds how much, how fast, and under what conditions. (a) is wrong: they are different levels of detail. (c) is wrong: specifications are longer. (d) is wrong: both are shared documents.",
        "module": 2
      },
      {
        "q": "Which of these is a testable requirement for a lifting device?",
        "choices": [
          "It must be easy to use",
          "It must lift 50 kg from floor level to 1.5 m in under 10 seconds",
          "It must be good quality",
          "It must look professional"
        ],
        "answer": 1,
        "explanation": "Correct: (b). It has numbers and conditions, so it can be tested. (a), (c), and (d) are vague and cannot be tested.",
        "module": 2
      },
      {
        "q": "Three concepts are scored in a Pugh matrix. Concept A scores 0, +1, +1. Concept B scores +1, −1, 0. Concept C scores −1, 0, +1. Which concept wins on the numbers?",
        "choices": [
          "Concept A, with +2",
          "Concept B, with 0",
          "Concept C, with 0",
          "They tie at +1"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Concept A totals 0 + 1 + 1 = +2, Concept B totals 0, and Concept C totals 0 — so A wins. (b) and (c) total 0, not +2. (d) is wrong: the totals are +2, 0, and 0.",
        "module": 2
      },
      {
        "q": "Which of these is a must-have requirement for a lifting device?",
        "choices": [
          "An attractive finish",
          "The load capacity and safety",
          "A low weight",
          "A fast cycle time"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Load capacity and safety are must-haves — the device cannot ship without them. (a), (c), and (d) are nice-to-haves, cut first when the budget is short.",
        "module": 2
      },
      {
        "q": "In a Pugh matrix, what is the datum?",
        "choices": [
          "The winning concept",
          "The baseline concept that all others are compared against",
          "The most expensive concept",
          "The criterion list"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The datum is the baseline for comparison. (a) is wrong: the winner is found by scoring. (c) is wrong: cost is a criterion. (d) is wrong: criteria are the rows.",
        "module": 2
      },
      {
        "q": "For a light, stiff beam, steel has an Ashby index of 57.3 and aluminium has an index of 98.0. Which wins, and why?",
        "choices": [
          "Steel, because it is stiffer in absolute terms",
          "Aluminium, because its index is higher — it is better per unit weight",
          "They tie",
          "Neither — both are wrong for beams"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Aluminium's higher index means it is better for a light, stiff beam. (a) is wrong: absolute stiffness is not the criterion for a light beam. (c) is wrong: the indexes differ. (d) is wrong: both are used for beams.",
        "module": 3
      },
      {
        "q": "A material's Young's modulus E is 200 GPa. What property does that number describe?",
        "choices": [
          "Strength",
          "Stiffness — how much a material resists stretching or bending",
          "Toughness",
          "Density"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Young's modulus measures stiffness. (a) is measured by yield and ultimate strength. (c) is energy absorbed before fracture. (d) is mass per unit volume.",
        "module": 3
      },
      {
        "q": "A plastic gear slowly deforms under a steady load over a month, and its teeth no longer mesh. What is this behaviour called?",
        "choices": [
          "A material rusting",
          "Slow deformation under a steady load over a long time, common in polymers",
          "A material cracking suddenly",
          "A material getting stiffer with age"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Creep is slow, time-dependent deformation under load. (a) is corrosion. (c) is brittle fracture. (d) is wrong: creep makes a part deform, not stiffen.",
        "module": 3
      },
      {
        "q": "A hammer head must be hard, tough, and heavy enough to strike effectively. Which material is the natural choice?",
        "choices": [
          "Nylon",
          "Steel",
          "Glass",
          "Polystyrene foam"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Steel is hard, tough, dense, cheap, and easy to forge and heat-treat. (a) is too soft and light. (c) is hard but brittle — it would shatter. (d) is far too soft and light.",
        "module": 3
      },
      {
        "q": "A part's stress is 100 MPa and the material's yield strength is 400 MPa. What is the factor of safety?",
        "choices": [
          "0.25",
          "4.0",
          "40",
          "100"
        ],
        "answer": 1,
        "explanation": "Correct: (b). FoS = 400 ÷ 100 = 4.0. (a) is stress ÷ strength, the inverse. (c) is ten times too big. (d) is the stress, not the factor.",
        "module": 4
      },
      {
        "q": "What is the endurance limit of a steel?",
        "choices": [
          "Its ultimate tensile strength",
          "The stress below which it can survive an infinite number of cycles without fatigue failure",
          "Its yield strength",
          "The stress at which it fractures in one load"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The endurance limit is the safe stress for infinite fatigue life. (a) is the maximum static stress. (c) is the stress where permanent deformation starts. (d) is the fracture stress.",
        "module": 4
      },
      {
        "q": "A shaft has σa = 100 MPa, σm = 50 MPa, Se = 200 MPa, Sut = 600 MPa. What is the Goodman factor of safety?",
        "choices": [
          "1.71",
          "0.58",
          "2.00",
          "1.00"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 100 ÷ 200 + 50 ÷ 600 = 0.5 + 0.083 = 0.583, so n = 1 ÷ 0.583 = 1.71. (b) is the Goodman sum, not the factor of safety. (c) is a round guess. (d) would mean the part is exactly at its limit.",
        "module": 4
      },
      {
        "q": "A shaft shoulder has Kt = 1.8 and a nominal stress of 50 MPa. What is the peak stress at the shoulder?",
        "choices": [
          "50 MPa",
          "90 MPa",
          "28 MPa",
          "180 MPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Peak = Kt × nominal = 1.8 × 50 = 90 MPa. (a) is the nominal stress, ignoring the concentration. (c) divides instead of multiplying. (d) mistakes Kt for a stress.",
        "module": 4
      },
      {
        "q": "A shaft transmits 10 kW at 500 rpm. What torque does it carry?",
        "choices": [
          "191 N·m",
          "19.1 N·m",
          "955 N·m",
          "50 N·m"
        ],
        "answer": 0,
        "explanation": "Correct: (a). T = 9550 × 10 ÷ 500 = 191 N·m. (b) is the torque for 1 kW. (c) is five times too big. (d) is the power in kW times 5, not a torque.",
        "module": 5
      },
      {
        "q": "A 25 mm shaft carries 100 N·m of torque. What is the torsional shear stress at its surface, approximately?",
        "choices": [
          "32.6 MPa",
          "97.8 MPa",
          "16.3 MPa",
          "3.26 MPa"
        ],
        "answer": 0,
        "explanation": "Correct: (a). τ = 16 × 100,000 ÷ (π × 25³) = 1,600,000 ÷ 49,087 = 32.6 MPa. (b) is the bending stress for a 150 N·m moment on the same shaft. (c) is half the right value. (d) is ten times too small.",
        "module": 5
      },
      {
        "q": "The same 25 mm shaft has a bending moment of 150 N·m. What is the bending stress, approximately?",
        "choices": [
          "32.6 MPa",
          "97.8 MPa",
          "65.2 MPa",
          "9.78 MPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). σ = 32 × 150,000 ÷ (π × 25³) = 4,800,000 ÷ 49,087 = 97.8 MPa. (a) is the torsional stress for 100 N·m. (c) is two-thirds of the right value. (d) is ten times too small.",
        "module": 5
      },
      {
        "q": "A 25 mm steel shaft, 400 mm long, carries 100 N·m of torque. What is its angle of twist, approximately?",
        "choices": [
          "0.76°",
          "7.6°",
          "0.076°",
          "76°"
        ],
        "answer": 0,
        "explanation": "Correct: (a). J = π × 25⁴ ÷ 32 = 38,350 mm⁴, and φ = 100,000 × 400 ÷ (79,000 × 38,350) = 0.0132 rad = 0.76°. (b) is ten times too big. (c) is ten times too small. (d) is a hundred times too big.",
        "module": 5
      },
      {
        "q": "A bearing has X = 0.56, Y = 1.5, Fr = 3 kN, Fa = 2 kN. What is the equivalent load P?",
        "choices": [
          "4.68 kN",
          "5.00 kN",
          "3.00 kN",
          "2.00 kN"
        ],
        "answer": 0,
        "explanation": "Correct: (a). P = 0.56 × 3 + 1.5 × 2 = 1.68 + 3.0 = 4.68 kN. (b) is the sum of the loads, ignoring X and Y. (c) is just the radial load. (d) is just the axial load.",
        "module": 6
      },
      {
        "q": "A ball bearing has C = 10 kN and P = 2 kN. What is its L10 life in millions of revolutions?",
        "choices": [
          "5",
          "25",
          "125",
          "1,000"
        ],
        "answer": 2,
        "explanation": "Correct: (c). L10 = (10 ÷ 2)³ = 5³ = 125 million revolutions. (a) is the ratio, not cubed. (b) is the ratio squared. (d) is 10³, using C alone.",
        "module": 6
      },
      {
        "q": "The bearing above runs at 1000 rpm. What is its L10 life in hours, approximately?",
        "choices": [
          "125 hours",
          "2,083 hours",
          "1,000 hours",
          "125,000 hours"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 125,000,000 revolutions ÷ (1000 × 60) = 2,083 hours. (a) is the life in millions of revolutions. (c) is the speed. (d) is the life in minutes, not hours.",
        "module": 6
      },
      {
        "q": "A bearing's load is halved. What happens to its L10 life?",
        "choices": [
          "It halves",
          "It doubles",
          "It multiplies by eight",
          "It stays the same"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Life depends on (C ÷ P)³, so halving P gives 2³ = 8 times the life. (a) and (b) would be true if life depended on P, not P³. (d) is wrong: load strongly affects life.",
        "module": 6
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "description": "Covers Modules 1–12: the full machine design and project studio course. 40 questions, 120 minutes.",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "q": "A design must be strong but light. The team improves the strength and the weight goes up. What is this called?",
        "choices": [
          "A prototype",
          "A trade-off — improving one thing makes another worse",
          "A revision",
          "A stackup"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A trade-off is a compromise: more strength usually means more weight. (a) is a test version of a design. (c) is a version of a drawing. (d) is the accumulation of tolerances.",
        "module": 1
      },
      {
        "q": "A cardboard model of a product is built. What question is it most likely answering?",
        "choices": [
          "Does it survive the full load?",
          "Does it fit, and does the shape make sense?",
          "Does the material corrode?",
          "How much does it cost to manufacture?"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A cardboard model answers shape and fit questions cheaply. (a) needs a working rig. (c) needs a material test. (d) needs a costed BOM, not a cardboard model.",
        "module": 1
      },
      {
        "q": "In the design process, when should research happen?",
        "choices": [
          "After the prototype is built",
          "After defining the problem and before imagining solutions",
          "After testing",
          "Research is not part of the process"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Research is step 2: after defining the problem, before generating ideas. (a) is too late — research informs the ideas. (c) is too late. (d) is wrong: research is a named step.",
        "module": 1
      },
      {
        "q": "“The device must lift 50 kg” is what kind of requirement?",
        "choices": [
          "Non-functional",
          "Functional — it says what the design does",
          "A specification",
          "A nice-to-have"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Lifting is what the design does, so it is functional. (a) is about how well it does it (speed, noise, cost). (c) is the detailed measurable version. (d) is a priority, and lifting is a must-have.",
        "module": 2
      },
      {
        "q": "Three concepts are scored in a Pugh matrix. Concept X scores −1, +1, 0. Concept Y scores +1, +1, −1. Concept Z scores 0, 0, +1. Which wins on the numbers?",
        "choices": [
          "Concept X, with 0",
          "Concept Y, with +1",
          "Concept Z, with +1",
          "Concepts Y and Z tie at +1"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Concept X totals 0, Concept Y totals +1, and Concept Z totals +1 — Y and Z tie. (a) is wrong: X totals 0. (b) and (c) each claim a sole winner, but the totals tie.",
        "module": 2
      },
      {
        "q": "What is a hybrid concept in a Pugh matrix?",
        "choices": [
          "A concept that scores zero on everything",
          "A new concept formed by combining the best features of two or more concepts",
          "The datum concept",
          "A concept that is never built"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A hybrid takes the best features of two concepts into a new, better one. (a) is a mediocre concept. (c) is the baseline. (d) is wrong: hybrids are often the best outcome.",
        "module": 2
      },
      {
        "q": "Why must a specification be testable?",
        "choices": [
          "Because the customer likes numbers",
          "Because the finished product must be proven to meet it — if it cannot be tested, it cannot be proven",
          "Because testable specifications are shorter",
          "Because the law requires it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A specification is the contract the product is tested against; untestable means unprovable. (a) is a side benefit. (c) is wrong: testable specifications are longer. (d) is wrong: it is good practice, not a legal rule in general.",
        "module": 2
      },
      {
        "q": "For a light, stiff beam, a designer compares two materials by √E ÷ ρ. Material X has E = 200,000 MPa and density 7.8 g/cm³. What is its index?",
        "choices": [
          "98.0",
          "57.3",
          "25,641",
          "7.8"
        ],
        "answer": 1,
        "explanation": "Correct: (b). √200,000 ÷ 7.8 = 447.2 ÷ 7.8 = 57.3. (a) is aluminium's index. (c) is E ÷ ρ, not √E ÷ ρ. (d) is just the density.",
        "module": 3
      },
      {
        "q": "A part will be dropped often. Which property matters most for surviving the drops?",
        "choices": [
          "Stiffness",
          "Toughness — how much energy it absorbs before fracturing",
          "Density",
          "Colour"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A dropped part needs toughness to absorb impact without snapping. (a) matters for bending, not impact. (c) is weight, not impact resistance. (d) is irrelevant.",
        "module": 3
      },
      {
        "q": "A steel bracket in a damp environment keeps rusting. Which change is a material change rather than a surface or design change?",
        "choices": [
          "Painting the bracket",
          "Changing the material to stainless steel or aluminium",
          "Designing so water drains away",
          "Galvanising the bracket"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Changing to stainless steel or aluminium is a material change. (a) and (d) are surface treatments. (c) is a design change.",
        "module": 3
      },
      {
        "q": "A shaft has a bending stress of 60 MPa and a torsional shear stress of 20 MPa. What is the von Mises stress?",
        "choices": [
          "80 MPa",
          "69.3 MPa",
          "60 MPa",
          "100 MPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). σ_vm = √(60² + 3 × 20²) = √(3600 + 1200) = √4800 = 69.3 MPa. (a) adds the stresses, which is not the von Mises formula. (c) ignores the torsion. (d) has no basis.",
        "module": 4
      },
      {
        "q": "The shaft above has a yield strength of 300 MPa. What is its factor of safety?",
        "choices": [
          "0.23",
          "4.3",
          "43",
          "69.3"
        ],
        "answer": 1,
        "explanation": "Correct: (b). FoS = 300 ÷ 69.3 = 4.33, about 4.3. (a) is stress ÷ strength, the inverse. (c) is ten times too big. (d) is the von Mises stress.",
        "module": 4
      },
      {
        "q": "A steel has Sut = 700 MPa. What is its textbook endurance limit Se′?",
        "choices": [
          "700 MPa",
          "350 MPa",
          "1400 MPa",
          "70 MPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Se′ = 0.5 × Sut = 0.5 × 700 = 350 MPa. (a) is Sut itself. (c) doubles Sut. (d) is ten times too small.",
        "module": 4
      },
      {
        "q": "With Marin factors ka = 0.8, kb = 0.85, kc = 0.9, what is the corrected endurance limit for a steel with Se′ = 350 MPa?",
        "choices": [
          "350 MPa",
          "214.2 MPa",
          "280 MPa",
          "175 MPa"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Se = 350 × 0.8 × 0.85 × 0.9 = 350 × 0.612 = 214.2 MPa. (a) forgets the Marin factors. (c) applies only the surface factor. (d) halves the textbook value.",
        "module": 4
      },
      {
        "q": "A shaft transmits 2 kW at 1000 rpm. What torque does it carry?",
        "choices": [
          "19.1 N·m",
          "191 N·m",
          "9.55 N·m",
          "2.0 N·m"
        ],
        "answer": 0,
        "explanation": "Correct: (a). T = 9550 × 2 ÷ 1000 = 19.1 N·m. (b) is the torque for 20 kW. (c) is half the right value. (d) is the power, not a torque.",
        "module": 5
      },
      {
        "q": "In the shaft stress formulas, which one has a 32 in it, and what does it calculate?",
        "choices": [
          "The torsion formula; it calculates shear stress",
          "The bending formula; it calculates bending stress σ = 32M ÷ (πd³)",
          "The von Mises formula; it calculates combined stress",
          "The twist formula; it calculates angle"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The bending stress formula is σ = 32M ÷ (πd³); the torsion formula has a 16. (a) is wrong: torsion uses 16. (c) is wrong: von Mises uses a square root. (d) is wrong: the twist formula uses J = πd⁴ ÷ 32, not a 32 in the numerator.",
        "module": 5
      },
      {
        "q": "Why is a hollow shaft nearly as strong as a solid shaft of the same outside diameter?",
        "choices": [
          "Because the centre is the strongest part",
          "Because stress is highest at the surface and zero at the centre, so the centre material carries almost no load",
          "Because hollow shafts are made of stronger steel",
          "Because the hole makes the shaft stiffer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The material near the centre carries almost no stress, so removing it saves weight with little strength loss. (a) is backwards: the centre carries the least stress. (c) is wrong: the material is the same. (d) is wrong: a hole reduces stiffness slightly, it does not increase it.",
        "module": 5
      },
      {
        "q": "Which bearing type is best for a very heavy, slow load, such as a large engine crankshaft?",
        "choices": [
          "Ball bearing",
          "Plain (journal) bearing — quiet, cheap, and good for heavy, slow loads on an oil film",
          "Tapered roller bearing",
          "Thrust ball bearing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A plain bearing slides on an oil film and suits heavy, slow loads. (a) suits fast, light loads. (c) suits combined loads. (d) suits axial loads.",
        "module": 6
      },
      {
        "q": "What does an L10 life of 75.9 million revolutions mean?",
        "choices": [
          "Every bearing lasts exactly 75.9 million revolutions",
          "90% of a group of identical bearings will survive 75.9 million revolutions under the given load",
          "The bearing will fail at 75.9 million revolutions",
          "The bearing lasts 75.9 hours"
        ],
        "answer": 1,
        "explanation": "Correct: (b). L10 is a statistical rating: 90% survive, 10% fail before it. (a) is wrong: individual bearings vary. (c) is wrong: it is a 90% survival point, not a fixed failure point. (d) is wrong: the unit is revolutions, not hours.",
        "module": 6
      },
      {
        "q": "A bearing fails after only a few weeks in a dusty workshop, well before its L10 life. What is the most likely cause?",
        "choices": [
          "Overloading",
          "Contamination — dirt or grit getting into the bearing",
          "Running too fast",
          "Using the wrong grease colour"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Contamination is the top killer of bearings. (a) matters, but contamination is more common. (c) matters, but speed limits are usually respected. (d) is wrong: grease colour does not matter.",
        "module": 6
      },
      {
        "q": "An M8 bolt has At = 36.6 mm² and a proof strength of 600 MPa. What is its proof load?",
        "choices": [
          "16.5 kN",
          "22.0 kN",
          "26.4 kN",
          "36.6 kN"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Proof load = 600 × 36.6 = 21,960 N = 22.0 kN. (a) is the preload at 75%. (c) is the tightening torque in N·m. (d) is the area, not a load.",
        "module": 7
      },
      {
        "q": "The M8 bolt above is preloaded to 75% of proof load. What tightening torque (K = 0.2) is needed?",
        "choices": [
          "22.0 N·m",
          "26.4 N·m",
          "16.5 N·m",
          "52.8 N·m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Preload = 0.75 × 22.0 = 16.5 kN, and T = 0.2 × 16,500 × 0.008 = 26.4 N·m. (a) is the proof load in kN. (c) is the preload in kN. (d) is double the right torque.",
        "module": 7
      },
      {
        "q": "Three M10 bolts in single shear each have a shear area of 78.5 mm² and an allowable shear stress of 100 MPa. What is the joint's shear capacity?",
        "choices": [
          "7.85 kN",
          "23.6 kN",
          "78.5 kN",
          "30.0 kN"
        ],
        "answer": 1,
        "explanation": "Correct: (b). One bolt carries 78.5 × 100 = 7,850 N, and three carry 23,550 N = 23.6 kN. (a) is one bolt's capacity. (c) is the area, not a load. (d) is a round guess.",
        "module": 7
      },
      {
        "q": "Why is preload the most important number in a bolted joint?",
        "choices": [
          "Because it is bigger than the bolt's breaking strength",
          "Because it clamps the parts so they do not slip, and the bolt then sees only small load changes, resisting fatigue",
          "Because it makes the bolt lighter",
          "Because it is the only number on the drawing"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Preload keeps the joint tight and unmoving, protecting the bolt from fatigue. (a) is wrong: preload is smaller than breaking strength. (c) is wrong: preload does not change weight. (d) is wrong: many numbers are on a drawing.",
        "module": 7
      },
      {
        "q": "A 24-tooth pinion drives a 72-tooth gear at 900 rpm. What is the output speed?",
        "choices": [
          "300 rpm",
          "900 rpm",
          "2700 rpm",
          "72 rpm"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Ratio is 72 ÷ 24 = 3:1, so output speed is 900 ÷ 3 = 300 rpm. (b) is the input speed. (c) multiplies by the ratio. (d) is the output tooth count.",
        "module": 8
      },
      {
        "q": "The gear pair above has an input torque of 30 N·m and 95% efficiency. What is the output torque?",
        "choices": [
          "90 N·m",
          "85.5 N·m",
          "30 N·m",
          "10 N·m"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ideal torque is 30 × 3 = 90 N·m, and 90 × 0.95 = 85.5 N·m. (a) forgets the efficiency. (c) is the input torque. (d) divides by the ratio.",
        "module": 8
      },
      {
        "q": "A 16-tooth pinion drives a 48-tooth gear at 1500 rpm. What is the output speed?",
        "choices": [
          "500 rpm",
          "1500 rpm",
          "4500 rpm",
          "48 rpm"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Ratio is 48 ÷ 16 = 3:1, so output speed is 1500 ÷ 3 = 500 rpm. (b) is the input speed. (c) multiplies by the ratio. (d) is the output tooth count.",
        "module": 8
      },
      {
        "q": "A 40 mm H7/g6 fit has a hole of 40.000–40.025 mm and a shaft of 39.975–39.991 mm. What is the maximum clearance?",
        "choices": [
          "0.009 mm",
          "0.050 mm",
          "0.025 mm",
          "0.016 mm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Maximum clearance = biggest hole − smallest shaft = 40.025 − 39.975 = 0.050 mm. (a) is the minimum clearance. (c) is the hole's tolerance width. (d) is the shaft's tolerance width.",
        "module": 9
      },
      {
        "q": "What is the minimum clearance for the same 40 mm H7/g6 fit?",
        "choices": [
          "0.050 mm",
          "0.009 mm",
          "0.025 mm",
          "0.000 mm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Minimum clearance = smallest hole − biggest shaft = 40.000 − 39.991 = 0.009 mm. (a) is the maximum clearance. (c) is the hole's tolerance width. (d) would mean the parts touch, which this fit never does.",
        "module": 9
      },
      {
        "q": "A shaft and hole must never move relative to each other once assembled, with no key or fastener. Which fit do you choose?",
        "choices": [
          "Clearance fit",
          "Interference fit",
          "Transition fit",
          "Loose fit"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An interference fit locks the parts together. (a) would let them move. (c) might be clearance. (d) is a clearance fit by another name.",
        "module": 9
      },
      {
        "q": "A housing is 50.00 ± 0.10 mm deep and the parts inside total 45.50 ± 0.20 mm. What is the worst-case gap range?",
        "choices": [
          "4.50 mm exactly",
          "4.20–4.80 mm",
          "4.30–4.70 mm",
          "4.00–5.00 mm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Nominal gap is 4.50 mm and worst-case variation is ±0.30 mm, so the gap ranges from 4.20 to 4.80 mm. (a) ignores the tolerances. (c) uses ±0.20 mm. (d) uses ±0.50 mm.",
        "module": 10
      },
      {
        "q": "Four contributors have tolerances of ±0.10, ±0.08, ±0.05, and ±0.12 mm. What is the RSS total?",
        "choices": [
          "±0.35 mm",
          "±0.18 mm",
          "±0.09 mm",
          "±0.30 mm"
        ],
        "answer": 1,
        "explanation": "Correct: (b). RSS = √(0.10² + 0.08² + 0.05² + 0.12²) = √0.0333 = 0.18 mm. (a) is the worst-case total. (c) is half the RSS value. (d) has no basis.",
        "module": 10
      },
      {
        "q": "Which of these is a DFM rule?",
        "choices": [
          "Use custom sizes everywhere",
          "Use standard sizes and materials, and avoid tight tolerances except where they matter",
          "Design parts that need five setups",
          "Add undercuts wherever possible"
        ],
        "answer": 1,
        "explanation": "Correct: (b). DFM means easy, cheap manufacturing: standard sizes, loose tolerances where possible. (a) is the opposite: custom sizes cost more. (c) is the opposite: fewer setups are cheaper. (d) is the opposite: undercuts are hard to make.",
        "module": 10
      },
      {
        "q": "Which of these is a DFA improvement?",
        "choices": [
          "Adding more fasteners",
          "Replacing four screws with a snap fit, cutting part count and assembly time",
          "Making parts that only fit with a special tool",
          "Adding a part that must be fitted blind"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Fewer parts and fewer steps is the DFA goal. (a) adds steps. (c) makes assembly harder. (d) makes assembly harder.",
        "module": 10
      },
      {
        "q": "What information must a drawing's title block carry?",
        "choices": [
          "Only the part name",
          "Part name, part number, revision, scale, designer, checker, and date",
          "Only the scale",
          "The material list"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The title block is the drawing's identity card, including the revision letter. (a) and (c) are only one item each. (d) is the BOM's job.",
        "module": 11
      },
      {
        "q": "Why must every BOM line have one part, one quantity, and one unique part number?",
        "choices": [
          "Because the BOM must be short",
          "Because purchasing, stores, and costing all work from the BOM — a vague line means the wrong parts are ordered or the assembly cannot be built",
          "Because drawings require it",
          "Because it makes the BOM look tidy"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A vague line such as “bolts, various” cannot be bought or picked. (a) is wrong: length is not the point. (c) is wrong: drawings do not require BOM format. (d) is wrong: tidiness is not the reason.",
        "module": 11
      },
      {
        "q": "What is the rule about building from an uncontrolled copy of a drawing, such as a printout on someone's desk?",
        "choices": [
          "It is fine if the printout is recent",
          "Never build from an uncontrolled copy — always check the revision before making or ordering",
          "It is fine if the part is small",
          "It is the fastest way to work"
        ],
        "answer": 1,
        "explanation": "Correct: (b). An uncontrolled copy may be a superseded revision, and building from it wastes material or builds a known fault. (a) is wrong: “recent” is not a version. (c) is wrong: size is irrelevant. (d) is wrong: speed does not justify the risk.",
        "module": 11
      },
      {
        "q": "Two weeks before a deadline, a team member suggests adding a motorised version of the product “since we have time”. What is this an example of?",
        "choices": [
          "A project finishing early",
          "Small additions that seem harmless but together double the work and delay delivery",
          "A project with too few tasks",
          "A team that grows too big"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Scope creep is gradual growth beyond the agreed scope. (a) is the opposite. (c) is a planning error. (d) is a team-size issue.",
        "module": 12
      },
      {
        "q": "What is a design review for?",
        "choices": [
          "Showing off a finished design",
          "A structured meeting where a design is presented and reviewers try to find its faults, at a project milestone",
          "Testing the finished product",
          "Celebrating the end of a project"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A review is a fault-finding gate, not a performance. (a) is the wrong attitude. (c) is testing. (d) is a celebration.",
        "module": 12
      },
      {
        "q": "What does a Gantt chart show?",
        "choices": [
          "The cost of each part",
          "Project tasks as bars against time, showing their order and dependencies",
          "The design's calculations",
          "The team's salaries"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A Gantt chart shows tasks over time with order and dependencies. (a) is costing. (c) is the calculation file. (d) is payroll.",
        "module": 12
      }
    ]
  }
};
