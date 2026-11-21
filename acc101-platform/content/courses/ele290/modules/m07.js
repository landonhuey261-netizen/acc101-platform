// ele290 — Electrical Certification Prep: original review content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 7,
  "slug": "nccer-l3-review",
  "title": "NCCER Electrical Level 3 Review",
  "estTime": "3–4 hours",
  "objectives": [
    "Run branch-circuit and feeder load calculations and select conductors by ampacity, derating, and voltage drop.",
    "Apply overcurrent protection: standard sizes, motor rules, and selective coordination.",
    "Size distribution equipment, transformers, and commercial services.",
    "Classify hazardous locations and choose wiring methods and equipment listed for the classification.",
    "Calculate motor loads and wire voice, data, and video systems to their own rules."
  ],
  "sections": [
    {
      "heading": "Load Calculations: Branch Circuits and Feeders",
      "html": "<p>Level 3 load work starts where the journeyman module left off and goes further: <strong>branch-circuit loads</strong> first, then <strong>feeder loads</strong> with demand factors applied to the whole building. The general lighting load for a commercial occupancy comes from <strong>Table 220.12</strong> by occupancy type — 3 VA per square foot for a dwelling, higher for stores and offices — and the demand factors of <strong>Table 220.42</strong> apply to the lighting and receptacle load. Receptacle loads in non-dwelling occupancies are counted at <strong>180 VA per receptacle outlet (220.14(I))</strong>, with the first 10,000 VA at 100% and the remainder at 50% for the feeder demand.</p><p>The exam's Level 3 calculation questions are usually two-step: build the connected load, then apply the demand factor. The most common error is applying the demand factor to the wrong block — demand applies to lighting and receptacles, not to the fixed appliances, the HVAC load, or the largest motor (which gets its own 25% addition under 430.24).</p>"
    },
    {
      "heading": "Conductor Selection: Ampacity, Derating, Voltage Drop",
      "html": "<p>Conductor selection is a three-check process. <strong>Check one: ampacity</strong> — Table 310.16 at the termination temperature (usually 75°C for commercial terminations), with the load at 125% for continuous loads (215.2(A) and 210.19(A) require conductors for continuous loads to be sized at 125% of the load). <strong>Check two: derating</strong> — Table 310.15(C)(1) for more than three current-carrying conductors, and Table 310.15(B)(1) for ambient temperature above 30°C. <strong>Check three: voltage drop</strong> — the NEC recommends 3% on a branch circuit and 5% total, and a long run may need a larger conductor even when the ampacity checks pass.</p><p>The order matters: derate from the 90°C column when the insulation allows it, then compare the result with the termination column, and take the smaller of the two as the conductor's usable ampacity. A conductor that passes the 90°C derated ampacity but exceeds the 75°C termination rating is still a violation.</p>"
    },
    {
      "heading": "Overcurrent Protection and Distribution Equipment",
      "html": "<p><strong>Overcurrent protection</strong> is sized by the conductor it protects, with the standard ratings of <strong>240.6(A)</strong>. The device must open on overload and on short circuit, and its interrupting rating must equal or exceed the available fault current. <strong>Selective coordination</strong> — the downstream device opening before the upstream one — is required for the systems that must stay up, and it is achieved by choosing devices whose time-current curves do not overlap.</p><p><strong>Distribution equipment</strong> — panelboards, switchboards, and switchgear — is selected by voltage, ampacity, short-circuit rating, and the number of circuits it must hold. A panelboard's bus must be rated for the load it serves, and the <strong>working space of 110.26</strong> applies in front of every piece of distribution equipment: at least 3 feet deep, 30 inches wide, and 6-1/2 feet of headroom. The exam tests the working-space numbers constantly, so learn them as a set: 3 feet, 30 inches, 6-1/2 feet.</p>"
    },
    {
      "heading": "Transformers and Commercial Services",
      "html": "<p><strong>Transformers (Article 450)</strong> change voltage by turns ratio: a 480-volt primary to a 208Y/120-volt secondary is a step-down transformer, and the secondary current is the primary current times the inverse of the voltage ratio. Overcurrent protection follows <strong>450.3</strong>, with separate tables for primary-only protection, primary-plus-secondary protection, and transformers over 1,000 volts. A transformer's <strong>impedance</strong> limits the fault current on its secondary — the lower the impedance, the higher the available fault current.</p><p><strong>Commercial services</strong> are sized like dwelling services but without the dwelling demand factors: the load is the sum of the branch-circuit loads after the applicable demand factors, the service conductors are sized by Table 310.16, and the service disconnect is sized by the load. Three-phase services are common — 208Y/120 or 480Y/277 — and the exam's commercial service questions usually give you the load in volt-amperes and ask for the current: I = VA / (√3 × V) for three-phase.</p>"
    },
    {
      "heading": "Hazardous Locations, Lighting, and Low-Voltage Systems",
      "html": "<p><strong>Hazardous locations (Article 500)</strong> are classified by class, division, and group. Class I is flammable gases and vapors, Class II is combustible dust, Class III is ignitable fibers. Division 1 means the hazard is normally present; Division 2 means it is present only under abnormal conditions. Equipment must be <strong>listed for the classification</strong> — a general-purpose fixture in a Class I, Division 1 location is a violation, and so is a seal that is missing or installed in the wrong place.</p><p><strong>Practical lighting applications</strong> cover the fixtures themselves: luminaire types, lamp types, ballasts and drivers, and the mounting and support rules of Article 410. <strong>Voice, data, and video systems</strong> are low-voltage work with their own rules — separation from power conductors, listed cable types, and the firestopping requirements where cables pass through rated assemblies. <strong>Motor calculations (430)</strong> close the module: FLC from the tables, conductors at 125%, short-circuit protection from Table 430.52, overloads at 115% or 125% of nameplate.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "220.14(I)",
      "def": "Receptacle outlets in non-dwelling occupancies are counted at 180 VA each."
    },
    {
      "term": "Continuous load",
      "def": "A load where the maximum current is expected to continue for 3 hours or more; conductors and overcurrent devices are sized at 125% of a continuous load."
    },
    {
      "term": "Selective coordination",
      "def": "Choosing overcurrent devices so the downstream device opens before the upstream one, keeping the rest of the system up."
    },
    {
      "term": "110.26",
      "def": "Working space about electrical equipment: at least 3 feet deep, 30 inches wide, 6-1/2 feet of headroom."
    },
    {
      "term": "Turns ratio",
      "def": "The ratio of primary to secondary turns in a transformer, which sets the voltage ratio."
    },
    {
      "term": "450.3",
      "def": "Transformer overcurrent protection, with separate tables for over and under 1,000 volts."
    },
    {
      "term": "Impedance (transformer)",
      "def": "The transformer's opposition to current flow, which limits the fault current available on its secondary."
    },
    {
      "term": "Hazardous location Class I",
      "def": "An area where flammable gases or vapors may be present."
    },
    {
      "term": "Hazardous location Class II",
      "def": "An area where combustible dust may be present."
    },
    {
      "term": "Division 1 / Division 2",
      "def": "Division 1: the hazard is normally present. Division 2: the hazard is present only under abnormal conditions."
    },
    {
      "term": "430.24",
      "def": "Feeder conductors for motors: 125% of the largest motor's FLC plus the FLC of the other motors."
    },
    {
      "term": "Three-phase current",
      "def": "I = VA / (√3 × V) for a balanced three-phase load."
    },
    {
      "term": "Luminaire",
      "def": "A complete lighting unit: fixture, lamp, ballast or driver, and mounting."
    },
    {
      "term": "Firestopping",
      "def": "Material that seals penetrations through fire-rated assemblies so fire and smoke cannot pass."
    },
    {
      "term": "Motor control",
      "def": "The starters, contactors, and overloads that start, stop, and protect a motor."
    },
    {
      "term": "Table 220.12",
      "def": "General lighting loads by occupancy type, in volt-amperes per square foot."
    }
  ],
  "video": {
    "title": "Transformers Explained - How transformers work",
    "embedUrl": "https://www.youtube.com/embed/jcY4QN7awEc",
    "note": "Transformer fundamentals — turns ratio, step-up and step-down, isolation, and why the core matters — the groundwork for Level 3's transformer module.",
    "more": [
      {
        "title": "How Transformers Work",
        "url": "https://www.youtube.com/watch?v=n_KO_g9HNKE"
      },
      {
        "title": "How 3 Phase Transformers Work – why we need them",
        "url": "https://www.youtube.com/watch?v=u0SsejDCVkU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A commercial space has 40 receptacle outlets. (a) What is the connected receptacle load at 180 VA each? (b) Apply the feeder demand: first 10,000 VA at 100%, the remainder at 50%. (c) What is the demand load?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 40 × 180 = 7,200 VA. (b) The whole 7,200 VA is under 10,000 VA, so it is all at 100%. (c) Demand load = 7,200 VA. (If the load were 14,000 VA, the demand would be 10,000 + 50% × 4,000 = 12,000 VA.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"Apply overcurrent protection: standard sizes, motor rules, and selective coordination.\" Write a three-sentence exam-ready explanation of Table 430.52 and selective coordination.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Table 430.52 sizes motor branch-circuit short-circuit and ground-fault protection — an inverse-time breaker at 250% of FLC for most motors. Step 2: Overload protection is separate, at 115% or 125% of nameplate current under 430.32. Step 3: Selective coordination means the downstream device opens first, so a fault on one branch does not take down the whole system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: A panelboard sits in a room with 2 feet 6 inches of clear space in front of it. The inspector flags it. What rule is violated, and what is the required depth?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 110.26(A)(1) requires working space at least 3 feet deep in front of electrical equipment. Step 2: 2 feet 6 inches is 6 inches short. Step 3: The space must be cleared to a full 3 feet deep (and 30 inches wide, with 6-1/2 feet of headroom) before the installation passes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill. (a) A three-phase 480-volt load of 41,500 VA draws how many amps? (b) What is the 75°C ampacity of 2 AWG copper? (c) What multiplier applies to a continuous load for conductor sizing?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) I = 41,500 / (1.732 × 480) = 50 amps. (b) 115 amps (Table 310.16). (c) 125%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: \"Receptacles in a store count at 100 VA each, working space is 2 feet deep, a continuous load is sized at 100%, and Division 2 means the hazard is normally present.\" Correct every error in that statement.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Non-dwelling receptacles count at 180 VA each (220.14(I)). Step 2: Working space is at least 3 feet deep (110.26). Step 3: A continuous load is sized at 125% for conductors and overcurrent devices. Step 4: Division 1 means the hazard is normally present; Division 2 means it is present only under abnormal conditions.</p>"
    }
  ],
  "quiz": [
    {
      "module": 7,
      "q": "A store has 60 receptacle outlets. What is the connected receptacle load at 180 VA each?",
      "choices": [
        "10,800 VA",
        "9,000 VA",
        "12,000 VA",
        "6,000 VA"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 60 × 180 = 10,800 VA (220.14(I)). (b) is wrong: \"9,000 VA\" — 9,000 VA would be 50 outlets at 180 VA. (c) is wrong: \"12,000 VA\" — 12,000 VA would be about 67 outlets at 180 VA. (d) is wrong: \"6,000 VA\" — 6,000 VA would be 100 VA per outlet, not 180."
    },
    {
      "module": 7,
      "q": "What is the working-space depth required in front of electrical equipment under 110.26?",
      "choices": [
        "2 feet",
        "3 feet",
        "4 feet",
        "5 feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 110.26(A)(1) requires at least 3 feet of working-space depth. (a) is wrong: \"2 feet\" — 2 feet is less than the 3-foot minimum. (c) is wrong: \"4 feet\" — 4 feet exceeds the minimum but is not the required depth. (d) is wrong: \"5 feet\" — 5 feet is not the required depth."
    },
    {
      "module": 7,
      "q": "A 480-volt to 208Y/120-volt transformer steps voltage in which direction?",
      "choices": [
        "Step-up",
        "Step-down",
        "It does not change voltage",
        "It changes frequency"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 480 volts down to 208Y/120 volts is a step-down transformer. (a) is wrong: \"Step-up\" — Step-up would raise the voltage, not lower it. (c) is wrong: \"It does not change voltage\" — The transformer changes voltage by its turns ratio. (d) is wrong: \"It changes frequency\" — A transformer does not change frequency."
    },
    {
      "module": 7,
      "q": "Which hazardous-location class covers flammable gases and vapors?",
      "choices": [
        "Class II",
        "Class III",
        "Class I",
        "Class IV"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Class I covers flammable gases and vapors; Class II is combustible dust and Class III is ignitable fibers. (a) is wrong: \"Class II\" — Class II is combustible dust. (b) is wrong: \"Class III\" — Class III is ignitable fibers. (d) is wrong: \"Class IV\" — There is no Class IV in Article 500."
    },
    {
      "module": 7,
      "q": "A continuous load of 32 amps needs conductors sized for at least how many amps?",
      "choices": [
        "32 amps",
        "40 amps",
        "48 amps",
        "36 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Continuous loads are sized at 125%: 32 × 1.25 = 40 amps. (a) is wrong: \"32 amps\" — 32 amps is the load itself, not the 125% sizing. (c) is wrong: \"48 amps\" — 48 amps would be 150% of the load. (d) is wrong: \"36 amps\" — 36 amps is not 125% of 32."
    },
    {
      "module": 7,
      "q": "What is the headroom required in the working space of 110.26?",
      "choices": [
        "6 feet",
        "6-1/2 feet",
        "7 feet",
        "8 feet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 110.26 requires at least 6-1/2 feet of headroom in the working space. (a) is wrong: \"6 feet\" — 6 feet is 6 inches short of the requirement. (c) is wrong: \"7 feet\" — 7 feet exceeds the minimum but is not the required value. (d) is wrong: \"8 feet\" — 8 feet is not the required value."
    },
    {
      "module": 7,
      "q": "A feeder serves a 20-hp motor (FLC 27 A at 460 V) and a 10-hp motor (FLC 14 A). What is the feeder conductor load under 430.24?",
      "choices": [
        "41 amps",
        "47.75 amps",
        "33.75 amps",
        "54 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 125% × 27 + 14 = 33.75 + 14 = 47.75 amps. (a) is wrong: \"41 amps\" — 41 amps adds both motors at 100% — the largest must be at 125%. (c) is wrong: \"33.75 amps\" — 33.75 amps is only the largest motor at 125%, missing the second motor. (d) is wrong: \"54 amps\" — 54 amps would be 200% of the largest motor."
    },
    {
      "module": 7,
      "q": "What does selective coordination require?",
      "choices": [
        "The upstream device opens first",
        "The downstream device opens before the upstream one",
        "All devices open at the same time",
        "Only fuses are used"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Selective coordination means the downstream device opens before the upstream one, so a fault on one branch does not take down the whole system. (a) is wrong: \"The upstream device opens first\" — The upstream device opening first is the opposite of coordination. (c) is wrong: \"All devices open at the same time\" — All devices opening at once is a total outage, not coordination. (d) is wrong: \"Only fuses are used\" — Coordination is about device curves, not about using only fuses."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — NCCER Electrical Level 3 Review: Quick Reference</h3><p><strong>Focus:</strong> Load Calculations: Branch Circuits and Feeders — the review ground for this module's exam questions.</p><p><strong>Must-know objectives:</strong> Run branch-circuit and feeder load calculations and select conductors by ampacity, derating, and voltage drop.; Apply overcurrent protection: standard sizes, motor rules, and selective coordination.; Size distribution equipment, transformers, and commercial services..</p><p><strong>Anchor numbers (verified for this course):</strong> All code values in this module are from the 2023 NEC plus Michigan Part 8 amendments as adopted March 12, 2024. Michigan journeyman: 80 questions, 150 minutes, 75% to pass. Michigan master: 76 questions, 180 minutes, 75% to pass. NCCER module tests pass at 70%; journey-level assessments at 75%. NABCEP PV Associate passes at a scaled score of 65 on a 0–99 scale — never 65%.</p><p><strong>Terms to flash-review:</strong> 220.14(I), Continuous load, Selective coordination, 110.26, Turns ratio, 450.3, Impedance (transformer), Hazardous location Class I</p>\n"
};
