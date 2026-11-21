// con111 - Module 11: Weld Inspection and Quality
module.exports = {
  "number": 11,
  "slug": "weld-inspection-and-quality",
  "title": "Weld Inspection and Quality",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a weld inspector checks and why inspection happens before, during, and after welding.",
    "Describe visual inspection (VT) and the discontinuities it finds.",
    "Name the main weld discontinuities: porosity, undercut, overlap, lack of fusion, cracks, and slag inclusions.",
    "Explain the non-destructive testing methods: MT, PT, UT, and RT, and what each one finds.",
    "Explain acceptance criteria and what happens when a weld fails inspection."
  ],
  "sections": [
    {
      "heading": "Why Welds Are Inspected",
      "html": "<p>A weld is a structural element, and a bad weld can fail without warning. Inspection exists because a weld that looks good can be bad inside, and a weld that looks bad can be sound — the eye alone is not enough, and the inspector's job is to know which is which. Inspection happens in three stages: before welding, during welding, and after welding, and each stage catches different problems.</p>\n<p>Before welding, the inspector checks the joint preparation, the fit-up, the WPS, the welder's qualification, and the materials — the right electrode, the right steel, the right preheat. A joint prepared wrong or a welder not qualified for the position is stopped before the arc is struck, because the weld that follows would be a waste of time and material.</p>\n<p>During welding, the inspector checks the technique, the settings, the interpass temperature, and the cleaning between passes. After welding, the inspector checks the finished weld — visually first, then with testing — and the weld is accepted or rejected against the code's acceptance criteria. A rejected weld is repaired to a repair procedure, not patched over.</p>\n"
    },
    {
      "heading": "Visual Inspection",
      "html": "<p><strong>Visual testing (VT)</strong> is the first and most common inspection, and it is done by a trained inspector with good light, a magnifier, and gauges. The inspector checks the weld's profile — is it even, is the reinforcement right, are the toes tied in — and looks for surface discontinuities: undercut, overlap, porosity, cracks, and slag on the surface. A fillet weld's size is checked with a fillet gauge, and a groove weld's reinforcement is measured.</p>\n<p>Visual inspection also checks what is around the weld: arc strikes on the base metal, spatter that was not cleaned, and damage to the steel. An arc strike — a spot where the arc touched the base metal outside the joint — is a defect in itself, because it leaves a hard, brittle spot that can crack. The inspector's eye is trained to see what a welder's eye misses, because the inspector is looking for defects, not for a finished job.</p>\n<p>Visual inspection is the cheapest and the fastest, and it catches most defects — but it cannot see inside the weld. A weld that passes visual inspection can still hide lack of fusion or slag inside, which is why critical welds also get tested with other methods.</p>\n"
    },
    {
      "heading": "Discontinuities: What Can Go Wrong",
      "html": "<p>A <strong>discontinuity</strong> is any interruption in the weld's structure; a <strong>defect</strong> is a discontinuity that is big enough to fail the code's acceptance criteria. The main discontinuities are <strong>porosity</strong> (gas holes), <strong>undercut</strong> (a groove at the toe), <strong>overlap</strong> (metal rolling over the toe without fusing), <strong>lack of fusion</strong> (the weld metal not bonded to the base metal or the previous pass), <strong>slag inclusions</strong> (slag trapped inside the weld), and <strong>cracks</strong> — the most serious of all, because a crack grows under load.</p>\n<p>Each discontinuity has a cause, and the cause is the fix. Porosity comes from dirty metal, damp rods, or a long arc. Undercut comes from too much amperage or too long an arc. Overlap comes from too slow a travel speed. Lack of fusion comes from too little heat, the wrong angle, or a dirty joint. Slag inclusions come from welding over slag or the wrong technique. Cracks come from hydrogen, hard HAZ, or residual stress — and a crack is never acceptable, in any code, at any size.</p>\n<p>The inspector's job is not to find every tiny discontinuity — it is to find the ones that matter. The code sets acceptance criteria: how big a pore can be, how deep an undercut can be, how many discontinuities are allowed in a length of weld. A discontinuity inside the limits is accepted; outside them, the weld is repaired or cut out and remade.</p>\n"
    },
    {
      "heading": "Non-Destructive Testing",
      "html": "<p>When visual inspection is not enough, the weld is tested without destroying it — <strong>non-destructive testing (NDT)</strong>. <strong>Magnetic particle testing (MT)</strong> uses a magnetic field and iron powder to find surface and near-surface cracks in steel; it is fast and cheap, but only works on magnetic materials. <strong>Liquid penetrant testing (PT)</strong> uses a dye that seeps into surface cracks and shows them under light; it works on any metal, but only finds surface cracks.</p>\n<p><strong>Ultrasonic testing (UT)</strong> sends sound waves into the weld and reads the echoes: a discontinuity inside the weld reflects the sound back, and the inspector reads its size and position. UT finds internal defects and measures them, but it needs a trained operator and a clean surface. <strong>Radiographic testing (RT)</strong> — X-ray or gamma-ray — takes a picture through the weld: porosity, slag, and lack of fusion show as dark spots on the film. RT gives a permanent record, but it needs radiation safety controls and a darkroom.</p>\n<p>Each method finds different things, so critical welds often get two methods — visual plus UT, or visual plus RT. The method is specified in the code and the WPS, and the inspector is qualified in the method they use. An inspector who is not qualified in UT does not do UT.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> Inspection happens before, during, and after welding. Visual inspection (VT) is first and catches most surface defects. Discontinuities are porosity, undercut, overlap, lack of fusion, slag inclusions, and cracks — a crack is never acceptable. NDT methods are MT (surface cracks in magnetic steel), PT (surface cracks in any metal), UT (internal defects by sound), and RT (internal defects by X-ray picture). Acceptance criteria decide pass or fail; a failed weld is repaired to a repair procedure.</p>\n<p><strong>Common mistake:</strong> Thinking a good-looking weld is a good weld. Visual inspection cannot see inside — lack of fusion and slag hide under a smooth bead, which is why critical welds get UT or RT.</p>\n<p><strong>Common mistake:</strong> Calling every discontinuity a defect. A discontinuity is any interruption; a defect is one that exceeds the code's acceptance criteria. The inspector judges against the criteria, not against perfection.</p>\n<p><strong>Ready-to-Work link:</strong> If you can name the six discontinuities, explain VT, MT, PT, UT, and RT, and say what happens to a failed weld, you have this module. Module 12 covers welding procedure specs and the AWS Certified Welder path.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Weld inspector",
      "def": "A trained person who checks welds before, during, and after welding against the code and the WPS."
    },
    {
      "term": "Visual testing (VT)",
      "def": "Inspection by eye, with light, magnifier, and gauges; the first and most common weld inspection."
    },
    {
      "term": "Discontinuity",
      "def": "Any interruption in a weld's structure, such as a pore, a crack, or trapped slag."
    },
    {
      "term": "Defect",
      "def": "A discontinuity large enough to exceed the code's acceptance criteria — a failed weld."
    },
    {
      "term": "Acceptance criteria",
      "def": "The code's limits on how big a discontinuity can be and still pass inspection."
    },
    {
      "term": "Porosity",
      "def": "Gas holes in a weld, from dirty metal, damp rods, or a long arc."
    },
    {
      "term": "Lack of fusion",
      "def": "Weld metal not bonded to the base metal or the previous pass — a hidden, serious defect."
    },
    {
      "term": "Slag inclusion",
      "def": "Slag trapped inside a weld, from welding over slag or the wrong technique."
    },
    {
      "term": "Crack",
      "def": "A break in the weld or the HAZ; never acceptable in any code, at any size."
    },
    {
      "term": "Magnetic particle testing (MT)",
      "def": "NDT that finds surface and near-surface cracks in magnetic steel using a magnetic field and iron powder."
    },
    {
      "term": "Liquid penetrant testing (PT)",
      "def": "NDT that finds surface cracks in any metal using a dye that seeps into the crack."
    },
    {
      "term": "Ultrasonic testing (UT)",
      "def": "NDT that finds internal defects by sending sound waves into the weld and reading the echoes."
    },
    {
      "term": "Radiographic testing (RT)",
      "def": "NDT that takes an X-ray or gamma-ray picture through a weld to show internal defects."
    },
    {
      "term": "Non-destructive testing (NDT)",
      "def": "Testing a weld without destroying it — MT, PT, UT, RT, and VT."
    },
    {
      "term": "Arc strike",
      "def": "A spot where the arc touched the base metal outside the joint, leaving a hard brittle spot that can crack."
    }
  ],
  "video": {
    "title": "Blueprint Reading For Welders And Inspectors",
    "embedUrl": "https://www.youtube.com/embed/UUviY_8ncWY",
    "note": "Blueprint reading for welders and inspectors: how an inspector reads the same drawing the welder reads, and what the inspector looks for in the finished weld. Watch it as the other side of the drawing — the welder makes the weld, the inspector checks it.",
    "more": [
      {
        "title": "How to Read Welding Symbols: Part 1",
        "url": "https://www.youtube.com/watch?v=Svoi1v_o5yI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Why is inspection done before, during, and after welding? Give one thing checked at each stage.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Before — joint preparation, fit-up, WPS, welder qualification, materials. Step 2: During — technique, settings, interpass temperature, cleaning between passes. Step 3: After — the finished weld, visually and by testing, against the acceptance criteria.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> What does visual inspection check, and what can it NOT see?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It checks the weld profile, size, toes, and surface discontinuities — undercut, overlap, porosity, cracks — and arc strikes on the base metal. Step 2: It cannot see inside the weld — lack of fusion and slag inclusions hide under a smooth bead. Step 3: Critical welds also get UT or RT for the inside.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Name the six main weld discontinuities and give one cause of each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Porosity — dirty metal, damp rods, long arc. Step 2: Undercut — too much amperage or too long an arc. Step 3: Overlap — too slow a travel speed. Step 4: Lack of fusion — too little heat, wrong angle, dirty joint. Step 5: Slag inclusions — welding over slag. Step 6: Cracks — hydrogen, hard HAZ, residual stress.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain MT, PT, UT, and RT in one sentence each, and say what each one finds.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: MT — magnetic field and iron powder find surface cracks in magnetic steel. Step 2: PT — dye seeps into surface cracks in any metal. Step 3: UT — sound waves find internal defects and measure them. Step 4: RT — X-ray picture shows internal defects as dark spots on film.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> What is the difference between a discontinuity and a defect?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A discontinuity is any interruption in the weld's structure. Step 2: A defect is a discontinuity that exceeds the code's acceptance criteria. Step 3: The inspector judges against the criteria, not against perfection — a small pore inside the limits is accepted.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A weld fails inspection for a crack. What happens next?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The weld is not patched over — it is repaired to a repair procedure. Step 2: The crack is removed by grinding or gouging, the joint is re-prepared, and the weld is remade. Step 3: The repair is inspected again, and the cause of the crack is fixed so it does not happen again.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Visual inspection (VT) is:",
      "choices": [
        "An X-ray of the weld",
        "Inspection by eye with light, magnifier, and gauges — the first weld inspection",
        "A sound-wave test",
        "A dye test"
      ],
      "answer": 1,
      "explanation": "Correct: (b). VT is the first inspection, done by eye with tools. (a) That is RT. (c) That is UT. (d) That is PT."
    },
    {
      "q": "A defect is:",
      "choices": [
        "Any interruption in a weld",
        "A discontinuity large enough to exceed the code's acceptance criteria",
        "A good weld",
        "A slag coating"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A defect exceeds the acceptance criteria; a small discontinuity inside the limits is accepted. (a) That is a discontinuity. (c) A good weld has no defects. (d) Slag is a coating, not necessarily a defect."
    },
    {
      "q": "Which discontinuity is never acceptable, in any code, at any size?",
      "choices": [
        "Porosity",
        "Cracks",
        "Undercut",
        "Overlap"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A crack grows under load and is never acceptable. (a) Small porosity can be within the limits. (c) Small undercut can be within the limits. (d) Small overlap can be within the limits."
    },
    {
      "q": "Magnetic particle testing (MT) finds:",
      "choices": [
        "Internal defects by sound",
        "Surface and near-surface cracks in magnetic steel",
        "Defects by X-ray",
        "Gas holes only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MT uses a magnetic field and iron powder on magnetic steel. (a) That is UT. (c) That is RT. (d) MT finds cracks, not only gas holes."
    },
    {
      "q": "Ultrasonic testing (UT) finds internal defects by:",
      "choices": [
        "Dye",
        "Sound waves and their echoes",
        "X-rays",
        "Magnetism"
      ],
      "answer": 1,
      "explanation": "Correct: (b). UT sends sound into the weld and reads the echoes from discontinuities. (a) Dye is PT. (c) X-rays are RT. (d) Magnetism is MT."
    },
    {
      "q": "An arc strike on the base metal is a problem because:",
      "choices": [
        "It looks bad",
        "It leaves a hard, brittle spot that can crack",
        "It wastes time",
        "It is a weld"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An arc strike hardens a small spot that can start a crack. (a) Looks are secondary to the crack risk. (c) Time is not the issue. (d) It is not a weld — it is damage outside the joint."
    },
    {
      "q": "Radiographic testing (RT) is:",
      "choices": [
        "A dye test",
        "An X-ray or gamma-ray picture through the weld showing internal defects",
        "A magnetic test",
        "A visual test"
      ],
      "answer": 1,
      "explanation": "Correct: (b). RT takes a picture through the weld; defects show as dark spots on film. (a) That is PT. (c) That is MT. (d) That is VT."
    },
    {
      "q": "A weld that fails inspection should be:",
      "choices": [
        "Patched over quickly",
        "Repaired to a repair procedure — the defect removed and the weld remade, then re-inspected",
        "Painted over",
        "Left as is"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Repair means removing the defect, re-preparing, remaking the weld, and re-inspecting. (a) Patching over hides the defect. (c) Paint hides nothing. (d) Leaving a failed weld is not an option."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Weld Inspection & Quality: Quick Reference</h3>\n<p><strong>Stages:</strong> Before (prep, fit-up, WPS, qualification) · During (technique, settings, cleaning) · After (visual + testing, acceptance criteria).</p>\n<p><strong>Discontinuities:</strong> Porosity · Undercut · Overlap · Lack of fusion · Slag inclusions · Cracks (never acceptable).</p>\n<p><strong>NDT:</strong> VT = eye · MT = magnetic, surface cracks in steel · PT = dye, surface cracks in any metal · UT = sound, internal · RT = X-ray picture, internal.</p>\n<p><strong>Rule:</strong> A discontinuity is any interruption; a defect exceeds the acceptance criteria. Failed welds are repaired to a procedure, not patched.</p>\n<p><strong>Self-check:</strong> Name the six discontinuities and the five inspection methods.</p>\n"
};
