// HVAC/R Certification Prep — original practice content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 8,
  "slug": "nate-core-science-and-measurement",
  "title": "NATE Core II — Basic Science, Desired Conditions & Measurement",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain conduction, convection, and radiation and give an HVAC example of each.",
    "Define sensible and latent heat and connect latent heat to humidity removal.",
    "State what a ton of refrigeration represents and use BTU thinking in simple load reasoning.",
    "Describe desired indoor conditions in terms of temperature, humidity, air movement, and air quality.",
    "Measure dry-bulb, wet-bulb, and dew point concepts and compute relative humidity reasoning.",
    "Compute a temperature split and explain what abnormal splits suggest, together with airflow and humidity context."
  ],
  "sections": [
    {
      "heading": "Three Ways Heat Moves",
      "html": "<p>Basic Science starts with the only three roads heat can travel. <strong>Conduction</strong> moves heat through solids by contact — through a wall, a window pane, or the wall of a copper tube. <strong>Convection</strong> moves heat with a fluid — air blown across an evaporator coil, water pumped through a boiler loop. <strong>Radiation</strong> needs no contact and no fluid — sunlight streaming through glass warms a room even though the window itself stays cool.</p><p>Core questions pair a scenario with a road: Which method dominates in a coil? Convection — moving air over fins. Why does a dark roof heat an attic? Radiation absorbed at the surface, then conduction inward. Why do fins exist on coils? They multiply surface area so convection (and conduction into the fin) can move more heat. When a stem describes heat arriving without anything touching or blowing, the answer is radiation, every time.</p> A useful study move is to say the reason out loud in one sentence before you look at the choices; if your sentence matches a choice, that choice is very likely the key. Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim. When two choices look close, compare them word by word: the difference is usually the exact detail the blueprint wants you to know, such as who may buy refrigerant, how long a record is kept, or which pressure family the appliance belongs to. Connect every fact in this section to a job you have already studied in the program — a recovery on a window unit, a leak repair on a split system, or a chiller running under vacuum — because anchored facts are far easier to recall under time pressure."
    },
    {
      "heading": "Sensible, Latent, and the Mighty BTU",
      "html": "<p>Heat you can measure with a thermometer is <strong>sensible heat</strong>; heat absorbed or released during a change of state — boiling, condensing, melting — is <strong>latent heat</strong>, and it moves enormous energy without moving the thermometer at all. Air conditioning does both jobs: it lowers air temperature (sensible) and wrings moisture out of the air at the coil (latent). A system can hit its temperature target and still leave a building clammy if the latent job is failing — oversized equipment that short-cycles is the classic cause.</p><div class=\"formula\">1 ton of refrigeration = 12,000 BTU/hr. 1 BTU raises 1 lb of water 1°F.</div><p>Those two anchors power most Core arithmetic in this domain. A 3-ton system is a 36,000 BTU/hr machine. Melting ice, condensing steam, evaporating refrigerant — all latent events, all moving BTUs the thermometer cannot see directly. When a question's numbers change state, think latent; when only temperature changes, think sensible.</p> Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim. When two choices look close, compare them word by word: the difference is usually the exact detail the blueprint wants you to know, such as who may buy refrigerant, how long a record is kept, or which pressure family the appliance belongs to. Connect every fact in this section to a job you have already studied in the program — a recovery on a window unit, a leak repair on a split system, or a chiller running under vacuum — because anchored facts are far easier to recall under time pressure."
    },
    {
      "heading": "Achieving Desired Conditions",
      "html": "<p>Comfort is a bundle, not a number. The Achieving Desired Conditions domain asks what occupants actually need: an appropriate <strong>temperature</strong>, controlled <strong>humidity</strong> (commonly discussed around the middle of the humidity range, where air neither feels muggy nor dries skin and wood), gentle <strong>air movement</strong> without drafts, and <strong>ventilation and filtration</strong> that keep air fresh and clean. Equipment choices serve the bundle: correct sizing, correct airflow, controls that stage capacity instead of slamming it on and off.</p><p>Stems in this domain describe a comfort complaint — a room that is cold but dry, a house that reaches setpoint and still feels sticky, a space with wild swings between cycles. Diagnose by walking the bundle: Is the temperature right? The humidity? Is air reaching the room? Is the equipment sized so it runs long enough to dehumidify? The correct answer is usually the choice that fixes the <em>missing element of the bundle</em>, not the choice that simply adds more capacity.</p> When two choices look close, compare them word by word: the difference is usually the exact detail the blueprint wants you to know, such as who may buy refrigerant, how long a record is kept, or which pressure family the appliance belongs to. Connect every fact in this section to a job you have already studied in the program — a recovery on a window unit, a leak repair on a split system, or a chiller running under vacuum — because anchored facts are far easier to recall under time pressure."
    },
    {
      "heading": "Taking Temperature and Humidity Measurements",
      "html": "<p>Measurement questions test instruments and definitions together. <strong>Dry-bulb</strong> is plain air temperature. <strong>Wet-bulb</strong>, taken with a wetted wick, drops as water evaporates from it — and the drier the air, the bigger the drop, which is why comparing dry-bulb and wet-bulb yields humidity. <strong>Dew point</strong> is where condensation begins. <strong>Relative humidity</strong> expresses moisture as a percentage of saturation at that temperature. A <strong>psychrometer</strong> is the classic instrument pairing the two thermometers; modern digital tools compute the rest.</p><p>Field technique is tested too: sensors measure the air you intend — not air heated by your hand, sunlight on the probe, or a supply register blasting the return sensor. In ducts, measure where the air is mixed, allow the reading to stabilize, and record both temperatures before computing anything. A humidity reading taken at the wrong place is worse than none, because it sends diagnosis confidently in the wrong direction.</p> Connect every fact in this section to a job you have already studied in the program — a recovery on a window unit, a leak repair on a split system, or a chiller running under vacuum — because anchored facts are far easier to recall under time pressure. Read that rule the way an examiner writes it: the stem gives you a condition, and only one choice keeps every part of that condition true at the same time. In the field the same idea shows up as a habit — pause, identify the system type and refrigerant, check the rule that applies to that type, and only then act."
    },
    {
      "heading": "Temperature Split: a Clue, Not a Verdict",
      "html": "<p>The <strong>temperature split</strong> — return-air temperature minus supply-air temperature in cooling — is the quickest vital sign in air conditioning. Work an example the Core way: return air at 78°F, supply air at 58°F, split = <strong>20°F</strong>. A split that is far smaller than expected suggests the coil is not absorbing heat as it should — think low airflow's opposite, overcharge patterns, or a coil problem to investigate; a split far larger suggests restricted airflow across the coil is high on the suspect list. The exact interpretation always needs airflow, humidity, and charge checks beside it.</p><div class=\"formula\">Cooling split = return-air temp − supply-air temp. Example: 78 − 58 = 20°F.</div><p>That discipline — split as a <em>clue that directs the next measurement</em> — is what the domain rewards. Choices that pronounce a component dead from one split reading are traps; choices that pair the split with an airflow or humidity measurement are keys.</p> Read that rule the way an examiner writes it: the stem gives you a condition, and only one choice keeps every part of that condition true at the same time. In the field the same idea shows up as a habit — pause, identify the system type and refrigerant, check the rule that applies to that type, and only then act. A useful study move is to say the reason out loud in one sentence before you look at the choices; if your sentence matches a choice, that choice is very likely the key. Watch for absolute words in wrong choices such as always, never, any, and none — certification stems are usually testing a specific condition, not a sweeping claim."
    }
  ],
  "keyTerms": [
    {
      "term": "Conduction",
      "def": "Heat transfer through a solid by direct contact, such as through a wall or a copper tube."
    },
    {
      "term": "Convection",
      "def": "Heat transfer by moving fluid — air across a coil, water in a pipe."
    },
    {
      "term": "Radiation",
      "def": "Heat transfer by electromagnetic waves without contact, such as sunlight through a window."
    },
    {
      "term": "Sensible heat",
      "def": "Heat that changes a substance's temperature, measurable with a thermometer."
    },
    {
      "term": "Latent heat",
      "def": "Heat that changes a substance's state without changing its temperature, such as condensing water vapor."
    },
    {
      "term": "BTU",
      "def": "British thermal unit: the heat needed to raise one pound of water by one degree Fahrenheit."
    },
    {
      "term": "Ton of refrigeration",
      "def": "A capacity rate of 12,000 BTU per hour."
    },
    {
      "term": "Dry-bulb temperature",
      "def": "Ordinary air temperature measured with a standard thermometer."
    },
    {
      "term": "Wet-bulb temperature",
      "def": "Temperature measured with a wetted thermometer bulb; reflects moisture content of the air."
    },
    {
      "term": "Dew point",
      "def": "The temperature at which air becomes saturated and moisture begins to condense."
    },
    {
      "term": "Relative humidity",
      "def": "The percentage of moisture air holds compared with the maximum it could hold at that temperature."
    },
    {
      "term": "Psychrometer",
      "def": "An instrument (often sling or digital) that measures dry-bulb and wet-bulb temperatures to determine humidity."
    },
    {
      "term": "Temperature split (Delta T)",
      "def": "The difference between return-air and supply-air temperatures across a running system."
    },
    {
      "term": "Enthalpy",
      "def": "The total heat content of air, sensible plus latent, used in total-capacity calculations."
    },
    {
      "term": "Saturation",
      "def": "The condition of air holding all the water vapor it can at its temperature — 100% relative humidity."
    },
    {
      "term": "Air changes / ventilation",
      "def": "Replacing indoor air with outdoor air for quality, a factor in desired conditions."
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
    "title": "HVAC Delta T Explained!",
    "embedUrl": "https://www.youtube.com/embed/9lDl5cfFSzs",
    "note": "Explains temperature difference across the evaporator coil and what the measured split tells you about system operation. It supports this module's desired-conditions and temperature-measurement topics; remember that a temperature split is a clue to interpret with airflow and humidity, not a standalone verdict.",
    "more": [
      {
        "title": "Explaining Superheat and Subcooling to Your Apprentice!",
        "url": "https://www.youtube.com/watch?v=2SEDe0v8VPY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, distinguish <em>Conduction</em> from <em>Convection</em>, using the definitions in this module's key terms. Give one field or exam example of each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: State each definition plainly. <em>Conduction</em>: Heat transfer through a solid by direct contact, such as through a wall or a copper tube. <em>Convection</em>: Heat transfer by moving fluid — air across a coil, water in a pipe. Step 2: Name the difference in one sentence — the two terms differ in who or what they apply to, or in the level of processing, authority, or measurement involved. Step 3: Attach an example to each from the module (a job situation for one, an exam stem for the other). If your examples could be swapped without changing their truth, your distinction is not sharp enough yet — rewrite until they cannot.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"Explain conduction, convection, and radiation and give an HVAC example of each.\" Write a three-sentence exam-ready explanation of this objective, including every number or named rule it contains.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Restate the objective as a claim. Step 2: Support it with the module's verified facts — use only numbers taught in this course (for example: EPA sections are 25 questions at 70% = 18 of 25; records are kept 3 years; covered comfort-cooling leaks over 50 lb are repaired within 30 days; NATE Core is 50 questions in 1.5 hours at 70%; 1 ton = 12,000 BTU/hr). Step 3: Close with why it matters on a job. A complete answer names the fact, the number, and the consequence — two of the three earns partial credit in your own grading, so practice all three.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: You are on a job that turns on this module's focus — heat transfer, comfort conditions, and taking temperature and humidity measurements the NATE Core way. A coworker suggests the fastest available shortcut. Write the correct professional action and the rule behind it.</p>",
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
      "q": "Heat moving through a solid wall is transferred mainly by:",
      "choices": [
        "Radiation",
        "Conduction",
        "Convection",
        "Evaporation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Heat travels through solids by conduction — direct molecular contact through the material. (a) is wrong: \"Radiation\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Convection\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Evaporation\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "Heat absorbed when water boils at a constant temperature is:",
      "choices": [
        "Sensible heat",
        "Latent heat",
        "Superheat",
        "Subcooling"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A change of state at constant temperature is latent heat — invisible to the thermometer but large in BTUs. (a) is wrong: \"Sensible heat\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Superheat\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Subcooling\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "One ton of refrigeration equals:",
      "choices": [
        "1,000 BTU/hr",
        "10,000 BTU/hr",
        "12,000 BTU/hr",
        "120,000 BTU/hr"
      ],
      "answer": 2,
      "explanation": "Correct: (c). By definition, a ton of refrigeration is 12,000 BTU per hour. (a) is wrong: \"1,000 BTU/hr\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"10,000 BTU/hr\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"120,000 BTU/hr\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "Return air is 78°F and supply air is 58°F. The cooling temperature split is:",
      "choices": [
        "10°F",
        "20°F",
        "58°F",
        "136°F"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Split = return − supply = 78 − 58 = 20°F. (a) is wrong: \"10°F\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"58°F\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"136°F\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "Relative humidity expresses:",
      "choices": [
        "Air temperature in Celsius",
        "Moisture in air as a percentage of saturation at that temperature",
        "Duct pressure",
        "Refrigerant charge"
      ],
      "answer": 1,
      "explanation": "Correct: (b). RH compares the moisture air holds with the maximum it could hold at that temperature. (a) is wrong: \"Air temperature in Celsius\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"Duct pressure\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Refrigerant charge\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "The temperature at which condensation begins on a cooling coil is the:",
      "choices": [
        "Wet-bulb temperature",
        "Dry-bulb temperature",
        "Dew point",
        "Superheat"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Dew point is the saturation temperature where moisture starts condensing out of air. (a) is wrong: \"Wet-bulb temperature\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"Dry-bulb temperature\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Superheat\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "A house reaches temperature setpoint but feels clammy. The most likely missing element is:",
      "choices": [
        "More capacity",
        "Latent (moisture) removal — the system may be short-cycling",
        "A larger thermostat",
        "Higher voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Clamminess is a latent-load failure: short run times satisfy sensible load without removing enough moisture. (a) is wrong: \"More capacity\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (c) is wrong: \"A larger thermostat\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Higher voltage\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    },
    {
      "q": "Sunlight warming a room through a window is an example of:",
      "choices": [
        "Conduction",
        "Convection",
        "Radiation",
        "Compression"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Radiant energy crosses the glass without contact or air movement — radiation. (a) is wrong: \"Conduction\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (b) is wrong: \"Convection\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens. (d) is wrong: \"Compression\" does not satisfy the rule or definition in the question — it describes a different concept, a prohibited action, or a value that does not compute from the givens."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — NATE Core II — Basic Science, Desired Conditions & Measurement: Quick Reference</h3><p><strong>Focus:</strong> heat transfer, comfort conditions, and taking temperature and humidity measurements the NATE Core way.</p><p><strong>Must-know objectives:</strong> Explain conduction, convection, and radiation and give an HVAC example of each; Define sensible and latent heat and connect latent heat to humidity removal; State what a ton of refrigeration represents and use BTU thinking in simple load reasoning.</p><p><strong>Anchor numbers (verified for this course):</strong> EPA 608 — 25 questions/section, 70% = 18 of 25, Core required with every Type, Universal = Core + I + II + III, never expires, records 3 years, covered comfort-cooling leaks (&gt;50 lb) repaired within 30 days with follow-up verification. NATE Core — 50 questions, 1.5 hours, 70% (35 of 50), Basic Electrical largest block; Core + specialty (100 Q, 70%) certifies; renewal every 2 years with continuing education. Ready-to-Work — 50 questions, 1.5 hours, online/unproctored; 70% here is a practice benchmark only. HVAC Excellence — passing scores are NOT published; never state one.</p><p><strong>Formulas:</strong> Superheat = suction line temp − saturation temp. Subcooling = saturation temp − liquid line temp. E = I × R. P = E × I. 1 ton = 12,000 BTU/hr. P/T anchors: R-410A 40°F≈118 psig, 100°F≈317 psig; R-22 40°F≈68.5 psig, 100°F≈196 psig; R-134a 40°F≈35 psig, 100°F≈124 psig; R-404A 40°F≈62 psig.</p><p><strong>Terms to flash-review:</strong> Conduction, Convection, Radiation, Sensible heat, Latent heat, BTU, Ton of refrigeration, Dry-bulb temperature.</p>\n"
};
