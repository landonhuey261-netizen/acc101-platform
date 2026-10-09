// HVAC/R Certification Prep — original practice content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 6,
  "slug": "epa-type-3-low-pressure",
  "title": "EPA Type III — Low-Pressure Appliances & Chillers",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why low-pressure appliances leak air and moisture inward instead of refrigerant outward.",
    "Describe the job of a purge unit on a low-pressure chiller and what excessive purging signals.",
    "State the role of the rupture disc on a low-pressure chiller and why it must never be valved off or replaced with a relief valve.",
    "Explain why low-pressure recovery starts with liquid removal and why vapor must also be recovered.",
    "Describe safe ways to raise pressure for leak inspection, including warming the system rather than over-pressurizing it.",
    "Recall the recovery-unit high-pressure cut-out concept for low-pressure work and the wait-and-watch step after reaching required vacuum."
  ],
  "sections": [
    {
      "heading": "Life Under Vacuum: Leaks Run Backwards",
      "html": "<p>A low-pressure chiller's evaporator operates <strong>below atmospheric pressure</strong>. Everything you learned about leaks on high-pressure equipment reverses: instead of refrigerant pushing out, <strong>air and moisture leak in</strong>. The refrigerant loss problem becomes a contamination problem. Air collects in the condenser as a <strong>non-condensable</strong>, head pressure climbs, efficiency falls, and moisture invites corrosion and acid formation inside a machine built to run for decades.</p><p>Type III stems therefore describe symptoms Type II never shows: rising purge activity, head pressure that will not settle, a machine that loses performance without losing charge. Train yourself to flip the mental model the moment a stem says low-pressure or centrifugal chiller — the question is almost always about what is getting <em>in</em>, what the purge unit is doing about it, and how the technician finds where the air enters.</p> Read that rule the way an examiner writes it: the stem gives you a condition, and only one choice keeps every part of that condition true at the same time. In the field the same idea shows up as a habit — pause, identify the system type and refrigerant, check the rule that applies to that type, and only then act. A useful study move is to say the reason out loud in one sentence before you look at the choices; if your sentence matches a choice, that choice is very likely the key. Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim."
    },
    {
      "heading": "The Purge Unit: the Chiller's Lungs",
      "html": "<p>Because inward leaks are a fact of vacuum life, low-pressure chillers carry a <strong>purge unit</strong>: a device that draws the air-and-refrigerant mixture from the top of the condenser, separates and returns the refrigerant, and exhausts the air. A healthy chiller purges occasionally. A chiller that purges <strong>constantly or excessively is telling you it has a leak</strong> — air is entering faster than it should, and the correct response is to find and repair the entry point, not to celebrate that the purge unit is keeping up.</p><div class=\"callout\"><strong>Key idea:</strong> Excessive purging = excessive air leakage into the system. On Type III questions, purge behavior is diagnostic evidence, and the key is the answer that treats it as a leak symptom requiring inspection and repair.</div><p>Purge units also explain a subtle loss path: every purge cycle can carry a small amount of refrigerant out with the air, which is why older purge designs were an emissions concern and why minimizing purge operation — by fixing leaks — protects both efficiency and charge.</p> In the field the same idea shows up as a habit — pause, identify the system type and refrigerant, check the rule that applies to that type, and only then act. A useful study move is to say the reason out loud in one sentence before you look at the choices; if your sentence matches a choice, that choice is very likely the key. Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim."
    },
    {
      "heading": "The Rupture Disc: One-Time, Low-Pressure, Non-Negotiable",
      "html": "<p>Low-pressure chillers are protected by a <strong>rupture disc</strong> rather than a conventional relief valve: a membrane designed to burst at a low set pressure — taught as <strong>15 psig</strong> — and relieve the vessel before pressure can build dangerously in a machine designed for vacuum service. Two exam-critical properties follow. It is a <strong>one-time device</strong>: once it bursts, the charge is gone and the disc must be replaced. And it must <strong>never be isolated, valved off, or replaced with a different device</strong>, because defeating it removes the machine's last protection against overpressure.</p><p>Stems test respect for this device through temptation: a nuisance burst, a suggestion to install a relief valve \"so it resets,\" a valve between vessel and disc \"for maintenance.\" Every version is wrong. The disc's low set point also disciplines recovery work — pressurizing a low-pressure system carelessly can burst the disc and lose the entire charge, which is why leak testing on these machines is done gently, as the next section shows.</p> A useful study move is to say the reason out loud in one sentence before you look at the choices; if your sentence matches a choice, that choice is very likely the key. Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim. When two choices look close, compare them word by word: the difference is usually the exact detail the blueprint wants you to know, such as who may buy refrigerant, how long a record is kept, or which pressure family the appliance belongs to."
    },
    {
      "heading": "Finding Leaks Without Hurting the Machine",
      "html": "<p>You cannot soap-bubble a system that sits in vacuum and expect bubbles to blow outward — there is nothing pushing out. Leak inspection on low-pressure equipment starts by <strong>raising the system's pressure in a controlled way</strong>, classically by <strong>warming the refrigerant with circulated hot water or heating blankets</strong> until pressure rises enough to test, or by adding nitrogen cautiously within safe limits. Warming is preferred precisely because it is gentle: heat raises vapor pressure predictably without risking the rupture disc.</p><p>Evidence gathering runs in parallel: watch purge operation, look for the pattern of air intrusion, and inspect the usual suspects — tube sheets, gaskets, and fittings. When a stem offers a choice between cranking pressure in with gas and warming the machine, warming is the textbook Type III move. And when a stem asks what excessive moisture in the purge stream suggests, think water-side trouble — tubes leaking water into the refrigerant side belong on your suspect list.</p> Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim. When two choices look close, compare them word by word: the difference is usually the exact detail the blueprint wants you to know, such as who may buy refrigerant, how long a record is kept, or which pressure family the appliance belongs to. Connect every fact in this section to a job you have already studied in the program — a recovery on a window unit, a leak repair on a split system, or a chiller running under vacuum — because anchored facts are far easier to recall under time pressure."
    },
    {
      "heading": "Recovery and Recharging on Low-Pressure Machines",
      "html": "<p>Recovery on a chiller is a logistics problem: there is a great deal of refrigerant, much of it liquid. <strong>Remove liquid first</strong> — liquid recovery is far faster — then recover the vapor that remains, remembering that a large chiller at atmospheric pressure still holds a surprising amount of refrigerant as vapor and dissolved in oil. During recovery, <strong>circulate water through the barrel</strong> (or drain it) so refrigerant boiling in the evaporator cannot freeze water in the tubes and burst them. Recovery equipment for this work carries a <strong>high-pressure cut-out, typically set at 10 psig</strong>, to stop the machine before discharge pressure grows unsafe for low-pressure vessels.</p><p>Recharging reverses the logic: introduce <strong>vapor first</strong> through the evaporator charging valve, raising saturation temperature before any liquid is added, because liquid charged into a deep vacuum boils violently and can freeze water in the tubes. And the universal habit returns: after reaching the required recovery vacuum, <strong>wait a few minutes and watch for pressure rise</strong> — refrigerant boiling out of oil will announce itself if you give it the chance.</p> When two choices look close, compare them word by word: the difference is usually the exact detail the blueprint wants you to know, such as who may buy refrigerant, how long a record is kept, or which pressure family the appliance belongs to. Connect every fact in this section to a job you have already studied in the program — a recovery on a window unit, a leak repair on a split system, or a chiller running under vacuum — because anchored facts are far easier to recall under time pressure."
    }
  ],
  "keyTerms": [
    {
      "term": "Low-pressure appliance",
      "def": "An appliance — typically a centrifugal chiller — whose evaporator operates below atmospheric pressure, in a vacuum."
    },
    {
      "term": "Centrifugal chiller",
      "def": "A large cooling machine using a centrifugal compressor, the classic Type III appliance."
    },
    {
      "term": "Purge unit",
      "def": "A device that removes non-condensable gases (air) and moisture that leak into a low-pressure chiller, exhausting air while minimizing refrigerant loss."
    },
    {
      "term": "Non-condensables",
      "def": "Gases such as air that collect in the condenser of a low-pressure system, raising head pressure and reducing efficiency."
    },
    {
      "term": "Rupture disc",
      "def": "A one-time safety device on low-pressure chillers, set to relieve at low pressure (15 psig in the standard teaching), that vents the charge rather than allowing dangerous overpressure."
    },
    {
      "term": "Excessive purging",
      "def": "Purge-unit operation far beyond normal, a sign that air is leaking into the system."
    },
    {
      "term": "Vacuum operation",
      "def": "Running below atmospheric pressure, so leaks draw air and moisture inward."
    },
    {
      "term": "Liquid-first recovery",
      "def": "Removing liquid refrigerant first on a large low-pressure system because it is far faster than vapor-only recovery."
    },
    {
      "term": "Chiller barrel",
      "def": "The evaporator vessel of a chiller, where water tubes can freeze if refrigerant-side temperatures crash during charging or recovery."
    },
    {
      "term": "Water circulation during recovery",
      "def": "Running water through the chiller during recovery to prevent freezing water in the tubes."
    },
    {
      "term": "Heating blankets / hot water",
      "def": "Controlled warming used to raise a low-pressure system's pressure for leak inspection or faster recovery."
    },
    {
      "term": "High-pressure cut-out (recovery unit)",
      "def": "The safety switch on recovery equipment for low-pressure work, typically set around 10 psig, that stops the unit before pressures grow unsafe."
    },
    {
      "term": "Oil heating before removal",
      "def": "Warming oil (taught at 130°F) so less refrigerant stays dissolved in it when oil is removed."
    },
    {
      "term": "Leak inspection under vacuum",
      "def": "Checking a system that operates in vacuum, where leak evidence appears as air intrusion and purge activity rather than refrigerant loss."
    },
    {
      "term": "Refrigerant in oil",
      "def": "Refrigerant dissolved in compressor/chiller oil, released slowly — a reason pressure can rise after recovery seems complete."
    },
    {
      "term": "Charging valve (evaporator)",
      "def": "The point through which vapor is first introduced when recharging a low-pressure system to avoid freezing water in the tubes."
    },
    {
      "term": "Blueprint",
      "def": "The published topic outline an exam is built from; the map for study and review."
    },
    {
      "term": "Distractor",
      "def": "A wrong choice designed to attract a specific misunderstanding; eliminating distractors is a scored skill."
    }
  ],
  "video": {
    "title": "EPA CFC 608 – Type 3 Certification (Low Pressure Systems)",
    "embedUrl": "https://www.youtube.com/embed/F_fPccnGyH8",
    "note": "Practice questions and answers focused on the Type III low-pressure section. Use it after the lecture to test recall on chillers, purge units, and vacuum-side thinking, and write down any term you cannot define before moving on.",
    "more": [
      {
        "title": "EPA 608 Practice Test 2026 — Universal Mock Exam 4: 100 Questions & Answers (Core, Type 1-3)",
        "url": "https://www.youtube.com/watch?v=puBM4r2uZFk"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, distinguish <em>Low-pressure appliance</em> from <em>Centrifugal chiller</em>, using the definitions in this module's key terms. Give one field or exam example of each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: State each definition plainly. <em>Low-pressure appliance</em>: An appliance — typically a centrifugal chiller — whose evaporator operates below atmospheric pressure, in a vacuum. <em>Centrifugal chiller</em>: A large cooling machine using a centrifugal compressor, the classic Type III appliance. Step 2: Name the difference in one sentence — the two terms differ in who or what they apply to, or in the level of processing, authority, or measurement involved. Step 3: Attach an example to each from the module (a job situation for one, an exam stem for the other). If your examples could be swapped without changing their truth, your distinction is not sharp enough yet — rewrite until they cannot.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"Explain why low-pressure appliances leak air and moisture inward instead of refrigerant outward.\" Write a three-sentence exam-ready explanation of this objective, including every number or named rule it contains.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Restate the objective as a claim. Step 2: Support it with the module's verified facts — use only numbers taught in this course (for example: EPA sections are 25 questions at 70% = 18 of 25; records are kept 3 years; covered comfort-cooling leaks over 50 lb are repaired within 30 days; NATE Core is 50 questions in 1.5 hours at 70%; 1 ton = 12,000 BTU/hr). Step 3: Close with why it matters on a job. A complete answer names the fact, the number, and the consequence — two of the three earns partial credit in your own grading, so practice all three.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: You are on a job that turns on this module's focus — low-pressure chillers: systems that run under vacuum, purge units, rupture discs, and leak thinking that runs in reverse. A coworker suggests the fastest available shortcut. Write the correct professional action and the rule behind it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Name the shortcut for what it is — in this course's topics, shortcuts are venting instead of recovering, topping off instead of repairing, skipping the follow-up verification, measuring resistance on a live circuit, or guessing a number instead of computing it. Step 2: State the correct action from the module (recover first; repair and verify; de-energize and prove dead; write the formula and compute). Step 3: Cite the governing idea in one line. Full credit requires the action AND the rule — the exam's correct choices always contain both.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill for this module. (a) EPA section: you answered 19 of 25 correctly — did you pass, and by how much? (b) NATE Core: you answered 33 of 50 — did you pass? (c) Convert a 3.5-ton system's capacity to BTU/hr.</p>",
      "solution": "<p><strong>Solution:</strong> (a) Step 1: Passing is 70% of 25 = 17.5, so at least 18 correct are required. Step 2: 19 &ge; 18 — <strong>pass, by one question</strong>. (b) Step 1: 70% of 50 = 35 required. Step 2: 33 &lt; 35 — <strong>not yet; two more correct answers were needed</strong>. (c) Step 1: 1 ton = 12,000 BTU/hr. Step 2: 3.5 × 12,000 = <strong>42,000 BTU/hr</strong>. These three conversions — EPA sections, NATE Core, tons to BTU — should be instant by exam day.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Example pattern: \"A <em>follow-up verification test</em> is the check you run after a leak repair to prove it held. Skip it, and the first hot day reopens the leak — and the paperwork says you finished a repair you never proved.\" Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: \"This course's practice exams certify me, exam fees are fixed everywhere, HVAC Excellence passes at 70%, and once I pass NATE Core I am fully NATE certified for life.\" Correct every error in that sentence.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Practice exams never certify — real certification comes only through approved testing providers/organizations. Step 2: Fees are set by each testing organization and change; this course states none. Step 3: HVAC Excellence does not publish its passing scores, so no percentage may be claimed for it. Step 4: NATE Core alone is not certification — Core plus a specialty exam certifies — and NATE certification renews on a 2-year cycle with continuing education; it is EPA 608 that never expires. Four errors, four corrections.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A low-pressure chiller's evaporator operates:",
      "choices": [
        "At high pressure",
        "Below atmospheric pressure — in a vacuum",
        "At exactly 500 psig",
        "Only when off"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Low-pressure appliances run their low side under vacuum, which reverses how leaks behave. (a) is wrong: \"At high pressure\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"At exactly 500 psig\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Only when off\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "Because a chiller runs in a vacuum, leaks tend to:",
      "choices": [
        "Push refrigerant out rapidly",
        "Draw air and moisture into the system",
        "Have no effect",
        "Only occur outdoors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pressure outside is higher than inside, so leaks pull non-condensables and moisture inward. (a) is wrong: \"Push refrigerant out rapidly\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Have no effect\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Only occur outdoors\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "Excessive purge-unit operation most likely indicates:",
      "choices": [
        "A perfectly sealed system",
        "Air leaking into the system",
        "Low refrigerant price",
        "A new rupture disc"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Constant purging means air is entering faster than normal — a leak symptom that calls for inspection and repair. (a) is wrong: \"A perfectly sealed system\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Low refrigerant price\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"A new rupture disc\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "The rupture disc on a low-pressure chiller:",
      "choices": [
        "Resets itself after relieving",
        "May be valved off during service",
        "Relieves at a low set pressure (taught as 15 psig) and is a one-time device",
        "Is the same as a TXV"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The rupture disc bursts once at its low set pressure to protect the vessel; it must never be isolated or replaced by a resetting valve. (a) is wrong: \"Resets itself after relieving\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"May be valved off during service\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Is the same as a TXV\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "Recovery from a large low-pressure system should begin with:",
      "choices": [
        "Vapor only, for speed",
        "Liquid removal, followed by vapor recovery",
        "Venting the vapor space",
        "Removing the rupture disc"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Liquid recovery is far faster on large charges; vapor recovery follows, including refrigerant dissolved in oil. (a) is wrong: \"Vapor only, for speed\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Venting the vapor space\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Removing the rupture disc\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "During chiller recovery, water is circulated through the barrel to:",
      "choices": [
        "Wash the tubes",
        "Prevent water in the tubes from freezing as refrigerant boils",
        "Cool the recovery machine",
        "Raise the rupture disc setting"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Refrigerant boiling in the evaporator can freeze tube water and burst tubes; circulating (or draining) water prevents it. (a) is wrong: \"Wash the tubes\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Cool the recovery machine\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Raise the rupture disc setting\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "A common way to raise pressure for leak inspection on a low-pressure system is:",
      "choices": [
        "Cranking in high-pressure gas without limit",
        "Warming the system with circulated hot water or heating blankets",
        "Opening the rupture disc",
        "Running the compressor backwards"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Controlled warming raises vapor pressure gently — the classic Type III leak-test method that respects the rupture disc. (a) is wrong: \"Cranking in high-pressure gas without limit\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Opening the rupture disc\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Running the compressor backwards\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "When recharging a low-pressure system from a deep vacuum, the first refrigerant introduced should be:",
      "choices": [
        "Liquid, as fast as possible",
        "Vapor, to raise saturation temperature before liquid is added",
        "Hot gas from another chiller",
        "Nitrogen"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Liquid charged into a deep vacuum boils violently and can freeze water in the tubes; vapor goes first through the evaporator charging valve. (a) is wrong: \"Liquid, as fast as possible\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Hot gas from another chiller\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Nitrogen\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — EPA Type III — Low-Pressure Appliances & Chillers: Quick Reference</h3><p><strong>Focus:</strong> low-pressure chillers: systems that run under vacuum, purge units, rupture discs, and leak thinking that runs in reverse.</p><p><strong>Must-know objectives:</strong> Explain why low-pressure appliances leak air and moisture inward instead of refrigerant outward; Describe the job of a purge unit on a low-pressure chiller and what excessive purging signals; State the role of the rupture disc on a low-pressure chiller and why it must never be valved off or replaced with a relief valve.</p><p><strong>Anchor numbers (verified for this course):</strong> EPA 608 — 25 questions/section, 70% = 18 of 25, Core required with every Type, Universal = Core + I + II + III, never expires, records 3 years, covered comfort-cooling leaks (&gt;50 lb) repaired within 30 days with follow-up verification. NATE Core — 50 questions, 1.5 hours, 70% (35 of 50), Basic Electrical largest block; Core + specialty (100 Q, 70%) certifies; renewal every 2 years with continuing education. Ready-to-Work — 50 questions, 1.5 hours, online/unproctored; 70% here is a practice benchmark only. HVAC Excellence — passing scores are NOT published; never state one.</p><p><strong>Formulas:</strong> Superheat = suction line temp − saturation temp. Subcooling = saturation temp − liquid line temp. E = I × R. P = E × I. 1 ton = 12,000 BTU/hr. P/T anchors: R-410A 40°F≈118 psig, 100°F≈317 psig; R-22 40°F≈68.5 psig, 100°F≈196 psig; R-134a 40°F≈35 psig, 100°F≈124 psig; R-404A 40°F≈62 psig.</p><p><strong>Terms to flash-review:</strong> Low-pressure appliance, Centrifugal chiller, Purge unit, Non-condensables, Rupture disc, Excessive purging, Vacuum operation, Liquid-first recovery.</p>\n"
};
