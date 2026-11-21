// egr290 — module 12. Original review content.
module.exports = {
  "number": 12,
  "slug": "capstone-design-project-and-exam-strategy",
  "title": "Capstone Design Project and Exam Strategy",
  "estTime": "3–4 hours",
  "objectives": [
    "Run a design project through the engineering design process, from requirements to verification.",
    "Write requirements that are specific, measurable, and testable.",
    "Build a project plan with milestones, risks, and a decision log.",
    "Document a design so someone else can build, test, and maintain it.",
    "Use an exam-day strategy for the FE, CSWA, and PMMI practice exams and the real exams."
  ],
  "sections": [
    {
      "heading": "The Design Project: What You Are Building",
      "html": "<p>The capstone design project is the one piece of this course that is yours: design a small mechatronic device — for example, an automated parts sorter, a temperature-controlled chamber, or a conveyor with a counting station — from requirements to a documented design. The app cannot grade a physical build, a CAD model, a PLC program, or a circuit, so the project is <strong>self-built and completion-tracked</strong> against the rubric in the Design Project Study Guide: you build it, test it honestly against the rubric, and tick it off when it passes. That honesty is the point — in real engineering, nobody checks your work for you unless you ask them to.</p><p>The project has four deliverables: (1) a <strong>requirements document</strong> — what the device must do, in measurable terms; (2) a <strong>design</strong> — sketches, calculations, a CAD model or circuit or PLC program, and a parts list with costs; (3) a <strong>test plan and results</strong> — what you tested, what happened, and what you changed; (4) a <strong>project report</strong> — what you built, what worked, what did not, and what you would do differently. A project with no test results is a guess, not a design.</p>"
    },
    {
      "heading": "The Engineering Design Process",
      "html": "<p>The <strong>engineering design process</strong> is a loop, not a straight line: (1) define the problem and the requirements, (2) research and brainstorm concepts, (3) select a concept against the requirements, (4) design in detail — calculations, drawings, code, (5) build a prototype, (6) test it against the requirements, (7) improve it, and (8) document it. The loop matters because the first concept is rarely the best, and the first prototype is rarely right. A team that skips testing and goes straight to the final build has built a prototype with no chance to learn from it.</p><p>Worked example — the parts sorter: the requirement is \"sort 60 steel washers a minute into two bins by diameter, with fewer than 1 error in 100\". That is specific (60 a minute, two bins, by diameter), measurable (count them), and testable (run 100 and count the errors). The concept selection weighs a mechanical gauge against a sensor: the sensor is faster but needs calibration; the gauge is slower but simpler. The calculations size the motor (torque from the conveyor load), the sensor (response time against the part speed), and the bin (capacity for an hour's run). The test runs 100 washers and counts the errors — and the result, whatever it is, goes in the report.</p>"
    },
    {
      "heading": "Requirements, Risk, and the Decision Log",
      "html": "<p>A good requirement is <strong>specific, measurable, and testable</strong>: \"the device must lift 5 kg\" is a requirement; \"the device must be strong\" is a wish. Write each requirement with a number, a unit, and a test: \"lift 5 kg, verified by lifting a 5 kg test mass\". Keep a <strong>requirements traceability</strong> habit: every design choice and every test should point back to a requirement, so nothing is built for no reason and nothing required is never tested.</p><p>Keep a <strong>risk register</strong>: what could go wrong, how likely it is, how bad it would be, and what you will do about it. A sensor that fails stops the sorter — mitigate it with a spare sensor and a fault light. A motor that stalls burns out — mitigate it with an overload relay. Keep a <strong>decision log</strong>: what you decided, why, and what you rejected. Six months later, the decision log is the only thing that explains why the design looks the way it does. Engineering is a team sport played over time, and the log is how the future team — including future you — understands the past one.</p>"
    },
    {
      "heading": "Exam-Day Strategy: FE, CSWA, and PMMI",
      "html": "<p>For the <strong>FE</strong>: you have about 2.9 minutes per question. Do a first pass answering everything you can in under 2 minutes, flagging the rest; a second pass for the flagged questions; and never leave a question blank — there is no penalty for guessing. Use the searchable Reference Handbook: search for the formula, check the units, and write the formula down before you calculate. Take the scheduled break — a rested brain answers better than a tired one. And remember the facts: 110 questions, 100 scored, $225, no published passing score, pass/fail only.</p><p>For the <strong>CSWA</strong>: 3 hours, 14 tasks, 240 points, pass at 165. Model in order — sketch fully defined, features in the right order, fillets last — and check the mass properties against the target after each part; a wrong mass means a wrong dimension, and it is cheaper to find it now than at the end. For the <strong>PMMI</strong> practice exams here: they are the app's own size and benchmark (70%), and this course states no PMMI item counts, pass marks, or fees, because those are unverified. Book the real exams only when the tracker on the capstone dashboard shows READY for the credential you want — and book through the providers named there, not inside this app.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Design project: requirements → concept → detailed design → prototype → test → improve → document. Self-built, completion-tracked against the rubric; the app cannot grade a build, a CAD model, a PLC program, or a circuit.</li><li>Requirements: specific, measurable, testable — with a number, a unit, and a test. Trace every choice and test back to a requirement.</li><li>Risk register and decision log: what could go wrong, what you decided, and why.</li><li>FE strategy: first pass under 2 minutes per question, flag and return, never leave a blank, use the handbook, take the break.</li><li>CSWA strategy: fully defined sketches, features in order, fillets last, check mass properties after each part. Pass is 165/240.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Writing requirements as wishes (\"strong\", \"fast\") instead of numbers with tests. A requirement you cannot test is not a requirement.</div><div class=\"callout\"><strong>Common mistake:</strong> Skipping the test step and going straight to the final build. A prototype with no test is a guess.</div><p><strong>Ready-to-Work link:</strong> If you can write a testable requirement, lay out a design process, and state the FE and CSWA exam-day facts, you have this module — and the capstone. Now take the practice exams.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Engineering design process",
      "def": "Define requirements → brainstorm → select → design → prototype → test → improve → document; a loop, not a straight line."
    },
    {
      "term": "Requirement",
      "def": "A specific, measurable, testable statement of what a design must do, with a number, a unit, and a test."
    },
    {
      "term": "Traceability",
      "def": "Every design choice and test points back to a requirement."
    },
    {
      "term": "Risk register",
      "def": "A list of what could go wrong, how likely and how bad, and what you will do about it."
    },
    {
      "term": "Decision log",
      "def": "A record of what was decided, why, and what was rejected."
    },
    {
      "term": "Prototype",
      "def": "An early build made to learn from, not the final product."
    },
    {
      "term": "Verification",
      "def": "Testing that the design meets its requirements."
    },
    {
      "term": "Self-built project",
      "def": "A project the student builds and checks against a rubric; the app cannot grade a physical build, CAD model, PLC program, or circuit."
    },
    {
      "term": "Rubric",
      "def": "A checklist of what 'done' looks like, used to check the project honestly."
    },
    {
      "term": "Exam strategy",
      "def": "A plan for the exam: pacing, first pass, flagging, guessing, and breaks."
    }
  ],
  "video": {
    "title": "SolidWorks 2D Drawing Tutorial | CSWA/CSWP Exam Model Walkthrough",
    "embedUrl": "https://www.youtube.com/embed/zBP3x8goZoM",
    "note": "Turning a 3D model into a readable 2D drawing — the documentation step every design project ends with. Watch the view placement and dimensioning, then document your own project the same way.",
    "more": [
      {
        "title": "Ladder Logic Debugging: Solving Problems in PLC Programs",
        "url": "https://www.youtube.com/watch?v=gqqRWKwXanA"
      },
      {
        "title": "⚡CSWP, Level 18, 17A | SolidWorks Configurations & Equations Tutorial | Exam Guide",
        "url": "https://www.youtube.com/watch?v=Vy5E6yKJMC0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Rewrite this wish as a testable requirement: \"The sorter must be fast.\"</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Add a number, a unit, and a test: \"The sorter must sort 60 washers a minute, verified by timing a run of 60 washers.\" Step 2: Add the quality bar: \"with fewer than 1 error in 100, verified by counting errors in a run of 100.\"</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A design has a risk: \"the sensor fails and the sorter stops.\" Write the mitigation.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Likelihood medium, impact high — the machine stops. Step 2: Mitigation: keep a spare sensor on hand, add a fault light that shows when the sensor signal is lost, and write the replacement procedure in the report.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The FE has 110 questions and 320 minutes of testing. You finish a first pass in 150 minutes, answering 70 questions. How much time is left per remaining question?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Time left = 320 − 150 = 170 minutes. Step 2: Questions left = 110 − 70 = 40. Step 3: 170/40 = 4.25 minutes per remaining question — a comfortable second pass.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Your CSWA practice part's mass properties show 0.900 kg, but the target is 0.785 kg for a steel block 100 × 50 × 20 mm. What does that tell you?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The target mass is 0.785 kg (100,000 mm³ of steel). Step 2: Your model is heavier, so a dimension is too large or an extra feature was added — check the dimensions against the drawing before moving on.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> List the four deliverables of the capstone design project.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A requirements document. Step 2: A design — sketches, calculations, CAD model or circuit or PLC program, and a parts list with costs. Step 3: A test plan and results. Step 4: A project report — what worked, what did not, and what you would do differently.</p>"
    }
  ],
  "quiz": [
    {
      "module": 12,
      "q": "Which of these is a testable requirement?",
      "choices": [
        "The device must be strong",
        "The device must lift 5 kg, verified by lifting a 5 kg test mass",
        "The device must be fast",
        "The device must be good"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It has a number, a unit, and a test. (a) is wrong: 'strong' has no number or test. (c) is wrong: 'fast' has no number or test. (d) is wrong: 'good' is a wish, not a requirement."
    },
    {
      "module": 12,
      "q": "What is the first step of the engineering design process?",
      "choices": [
        "Build a prototype",
        "Define the problem and the requirements",
        "Choose a concept",
        "Write the report"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The process starts by defining the problem and the requirements. (a) is wrong: prototyping comes after detailed design. (c) is wrong: concept selection comes after requirements. (d) is wrong: the report is the last step."
    },
    {
      "module": 12,
      "q": "What is a risk register for?",
      "choices": [
        "Listing what could go wrong, how likely and how bad, and what to do about it",
        "Listing the parts to buy",
        "Recording the test results",
        "Writing the requirements"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A risk register tracks risks and mitigations. (b) is wrong: that is the parts list. (c) is wrong: that is the test record. (d) is wrong: that is the requirements document."
    },
    {
      "module": 12,
      "q": "The FE has 110 questions and 320 minutes of testing. What is the average time per question?",
      "choices": [
        "2.9 minutes",
        "3.5 minutes",
        "2.0 minutes",
        "4.0 minutes"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 320/110 = 2.91 minutes per question. (b) is wrong: that is 320/90. (c) is wrong: that is too fast for the average. (d) is wrong: that is 320/80."
    },
    {
      "module": 12,
      "q": "Your CSWA practice part's mass is higher than the target mass. What does that tell you?",
      "choices": [
        "The material is wrong",
        "A dimension is too large or an extra feature was added",
        "The units are wrong",
        "Nothing — mass does not matter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A heavier model means too much material — a wrong dimension or an extra feature. (a) is wrong: the material is set by the problem; a wrong material would also change mass, but the first check is dimensions. (c) is wrong: wrong units would usually change the mass by a large factor. (d) is wrong: mass properties are the CSWA's check."
    },
    {
      "module": 12,
      "q": "What should you do with a question you cannot answer on the FE?",
      "choices": [
        "Leave it blank",
        "Guess, flag it, and come back if time allows",
        "Spend 10 minutes on it",
        "Skip the rest of the exam"
      ],
      "answer": 1,
      "explanation": "Correct: (b). There is no penalty for guessing, so answer it, flag it, and return on a second pass. (a) is wrong: a blank is always wrong. (c) is wrong: 10 minutes on one question breaks your pace. (d) is wrong: one hard question is not a reason to stop."
    },
    {
      "module": 12,
      "q": "How many deliverables does the capstone design project have?",
      "choices": [
        "Two",
        "Three",
        "Four",
        "Five"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Requirements document, design, test plan and results, and project report. (a) is wrong: that misses the test plan and the report. (b) is wrong: that misses one deliverable. (d) is wrong: there are four, not five."
    },
    {
      "module": 12,
      "q": "Can this app grade your capstone design project's physical build, CAD model, PLC program, or circuit?",
      "choices": [
        "Yes — it grades them all",
        "No — the project is self-built and completion-tracked against the rubric",
        "Yes, but only the CAD model",
        "Only if you upload a photo"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The app cannot grade live CAD modeling, PLC programs, circuits, or physical builds; the project is self-checked against the rubric. (a) is wrong: the app cannot grade any of these. (c) is wrong: it cannot grade the CAD model either. (d) is wrong: uploading a photo does not make it gradable."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Capstone Design Project and Exam Strategy: Quick Reference</h3>\n<p><strong>Core idea:</strong> Requirements with numbers, a design you can test, a report that tells the truth — and an exam plan that protects your pace.</p>\n<p><strong>Design process:</strong> Requirements → concepts → select → detailed design → prototype → test → improve → document.</p>\n<p><strong>Requirements:</strong> Specific, measurable, testable — number, unit, test. Trace every choice and test back to one.</p>\n<p><strong>Project deliverables:</strong> Requirements document · design (calculations, CAD/circuit/PLC, parts list + costs) · test plan and results · project report.</p>\n<p><strong>FE strategy:</strong> ~2.9 min per question · first pass under 2 min each · flag and return · never leave a blank · use the handbook · take the break.</p>\n<p><strong>CSWA strategy:</strong> Fully defined sketches · features in order · fillets last · check mass properties after each part · pass 165/240.</p>\n<p><strong>Watch out:</strong> A wish is not a requirement, and a prototype with no test is a guess.</p>\n<p><strong>Self-check:</strong> Write a testable requirement, lay out the design process, and state the FE and CSWA exam facts without looking. If you can, you have the capstone.</p>\n"
};
