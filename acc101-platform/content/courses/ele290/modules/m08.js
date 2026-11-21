// ele290 — Electrical Certification Prep: original review content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 8,
  "slug": "nccer-l4-review",
  "title": "NCCER Electrical Level 4 Review",
  "estTime": "3–4 hours",
  "objectives": [
    "Run feeder and service load calculations for commercial and industrial buildings.",
    "Apply the health-care rules of Article 517 and the standby and emergency rules of Articles 700, 701, and 702.",
    "Explain basic electronic theory: semiconductors, diodes, transistors, and rectifiers.",
    "Describe fire alarm systems and specialty transformers at the Level 4 level.",
    "Apply advanced controls, HVAC controls, heat tracing, and medium-voltage termination rules."
  ],
  "sections": [
    {
      "heading": "Feeders and Services: The Whole Building",
      "html": "<p>Level 4 load work is the whole building at once. The <strong>feeder load</strong> is the sum of the branch-circuit loads after the demand factors of Article 220 — lighting and receptacles by Table 220.42, motors by 430.24 (125% of the largest motor plus the rest), HVAC by 220.82(C) or the applicable commercial rule (the larger of heating or cooling), and the fixed appliances at nameplate. The <strong>service load</strong> is the same total, and the service conductors and disconnect follow from it.</p><p>The exam's Level 4 calculation questions are long stems with several loads in them. The method is the same as Level 3, but the stems are bigger: list every load, apply the right demand factor to each block, add the blocks, and size the feeder. The most common error is adding the largest motor at 100% instead of 125%, or applying the lighting demand factor to the HVAC load.</p>"
    },
    {
      "heading": "Health Care Facilities: Article 517",
      "html": "<p><strong>Article 517</strong> exists because a patient connected to medical equipment cannot tolerate the faults a healthy person can. Patient-care spaces are classified by the procedures performed there, and the <strong>essential electrical system</strong> — life safety, critical, and equipment branches — must keep running when normal power fails. Receptacles in patient-care spaces have their own grounding requirements, including <strong>redundant grounding</strong> in some areas, and isolated power systems are used where a fault must not interrupt the procedure.</p><p>The exam tests the structure, not the hospital's floor plan: which branch a load belongs on, what the essential electrical system must do, and why patient-care grounding is stricter than ordinary grounding. If a question mentions a patient bed location, the answer is almost always the stricter rule.</p>"
    },
    {
      "heading": "Standby and Emergency Systems: 700, 701, 702",
      "html": "<p>Three articles, three levels of obligation. <strong>Article 700 (emergency systems)</strong> are required by law for life safety — egress lighting, fire alarms, elevators for firefighters — and must transfer to the alternate source within <strong>10 seconds</strong>. <strong>Article 701 (legally required standby)</strong> covers systems the law requires but that are not life safety — heating, ventilation, communications — with a <strong>60-second</strong> transfer time. <strong>Article 702 (optional standby)</strong> covers systems the owner wants, such as a home generator, with no Code transfer-time requirement.</p><p>The <strong>automatic transfer switch (ATS)</strong> is the heart of all three: it senses the loss of normal power, starts the generator, and switches the load. The generator must be sized for the load it serves, and the transfer equipment must be listed for the purpose. A generator that starts but cannot carry the load is a failed system, not a working one.</p>"
    },
    {
      "heading": "Basic Electronics, Fire Alarm, and Specialty Transformers",
      "html": "<p><strong>Basic electronic theory</strong> is the semiconductor story: a <strong>diode</strong> conducts in one direction only; a <strong>transistor</strong> switches or amplifies; a <strong>rectifier</strong> turns AC into DC; a <strong>thyristor</strong> (SCR) switches AC under control. Level 4 asks you to recognize the component and its function, not to design a circuit — the exam's electronics questions are identification and purpose, not math.</p><p><strong>Fire alarm systems</strong> at the Level 4 level cover the system architecture: initiating devices (detectors and pull stations), notification appliances (horns, strobes, speakers), and the control panel that ties them together, with the wiring rules of Article 760. <strong>Specialty transformers</strong> include autotransformers, control transformers, and buck-boost transformers — each with its own overcurrent rules under 450.3 and its own application. The module on fire alarm systems (Module 10) goes deeper; here, learn the architecture and the article numbers.</p>"
    },
    {
      "heading": "Advanced Controls, HVAC Controls, and Medium Voltage",
      "html": "<p><strong>Advanced controls</strong> build on the motor-control work of Module 11: programmable logic controllers (PLCs), variable-frequency drives (VFDs), and the control circuits that sequence equipment automatically. <strong>HVAC controls</strong> are the thermostats, relays, and control wiring that start and stop heating and cooling equipment — low-voltage work in most cases, with its own separation and listing rules. <strong>Heat tracing</strong> keeps pipes from freezing with electric heating cable, and the exam tests the thermostat and ground-fault protection that go with it.</p><p><strong>Medium-voltage terminations and splices</strong> are the high end of the trade: voltages over 1,000 volts, with stress cones, shielded cable, and terminations that must be made exactly to the manufacturer's instructions. The work is de-energized, locked out, and tested before anyone touches it — and the exam's medium-voltage questions are almost always about the termination method or the safety procedure, not the arithmetic.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "430.24",
      "def": "Feeder conductors for motors: 125% of the largest motor's FLC plus the FLC of the other motors."
    },
    {
      "term": "Essential electrical system",
      "def": "The health-care power system (life safety, critical, and equipment branches) that must keep running when normal power fails — Article 517."
    },
    {
      "term": "Article 700",
      "def": "Emergency systems: required by law for life safety, with transfer to the alternate source within 10 seconds."
    },
    {
      "term": "Article 701",
      "def": "Legally required standby systems: required by law but not life safety, with a 60-second transfer time."
    },
    {
      "term": "Article 702",
      "def": "Optional standby systems: installed at the owner's choice, with no Code transfer-time requirement."
    },
    {
      "term": "Automatic transfer switch (ATS)",
      "def": "The switch that senses loss of normal power, starts the generator, and transfers the load to it."
    },
    {
      "term": "Diode",
      "def": "A semiconductor device that conducts current in one direction only."
    },
    {
      "term": "Transistor",
      "def": "A semiconductor device that switches or amplifies an electrical signal."
    },
    {
      "term": "Rectifier",
      "def": "A circuit or device that converts alternating current to direct current."
    },
    {
      "term": "Article 760",
      "def": "Fire alarm systems: the wiring, power, and installation rules for fire alarm circuits."
    },
    {
      "term": "Autotransformer",
      "def": "A transformer with a single winding tapped for two voltages; it provides no isolation."
    },
    {
      "term": "Control transformer",
      "def": "A small transformer that steps voltage down for a control circuit."
    },
    {
      "term": "PLC",
      "def": "Programmable logic controller: a rugged computer that runs control logic for equipment."
    },
    {
      "term": "VFD",
      "def": "Variable-frequency drive: a device that controls a motor's speed by varying the frequency of its power."
    },
    {
      "term": "Heat tracing",
      "def": "Electric heating cable that keeps pipes from freezing, with thermostat and ground-fault protection."
    },
    {
      "term": "Medium voltage",
      "def": "Voltages over 1,000 volts, with shielded cable and terminations made to the manufacturer's instructions."
    }
  ],
  "video": {
    "title": "Automatic transfer switch (ATS) fundamentals | Eaton PSEC",
    "embedUrl": "https://www.youtube.com/embed/yjphp4SBkSA",
    "note": "How an automatic transfer switch moves a building from utility power to a standby generator — the heart of Level 4's standby and emergency systems module.",
    "more": [
      {
        "title": "Generac automatic transfer switch explained,  demo",
        "url": "https://www.youtube.com/watch?v=rT_3JYZS9Mg"
      },
      {
        "title": "Grounding, System and Equipment [250.4, 2020 NEC]",
        "url": "https://www.youtube.com/watch?v=lyD6gzEze68"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A feeder serves three motors: 10 hp, 5 hp, and 3 hp, all 460-volt three-phase. (a) What are their FLC values from Table 430.250? (b) What is the feeder conductor load under 430.24? (c) What is the minimum conductor ampacity?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 10 hp = 14 A, 5 hp = 7.6 A, 3 hp = 4.8 A. (b) 125% × 14 + 7.6 + 4.8 = 17.5 + 12.4 = 29.9 amps. (c) The feeder conductor must have an ampacity of at least 29.9 amps — 8 AWG copper at 75°C (50 A) would satisfy it, and the next standard overcurrent device would be selected per 430.62.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"Apply the standby and emergency rules of Articles 700, 701, and 702.\" Write a three-sentence exam-ready explanation of the three articles and their transfer times.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Article 700 emergency systems are required by law for life safety and must transfer within 10 seconds. Step 2: Article 701 legally required standby systems are required by law but not life safety, and must transfer within 60 seconds. Step 3: Article 702 optional standby systems are the owner's choice, with no Code transfer-time requirement.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: A hospital's essential electrical system test shows the generator started but the life-safety branch did not transfer. What is the most likely failure point, and what do you check first?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The automatic transfer switch is the most likely failure point — it senses the outage and does the switching. Step 2: Check the ATS control power, the sensing circuit, and the transfer mechanism, in that order. Step 3: Do not bypass the ATS to force a transfer — report the failure and follow the facility's emergency procedure.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill. (a) What is the transfer time for an Article 700 emergency system? (b) What is the transfer time for an Article 701 system? (c) What is the feeder load for two 5-hp, 460-volt motors under 430.24?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 10 seconds. (b) 60 seconds. (c) 125% × 7.6 + 7.6 = 9.5 + 7.6 = 17.1 amps.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: \"Article 700 systems transfer in 60 seconds, Article 702 systems are required by law, a diode conducts in both directions, and the largest motor on a feeder is counted at 100%.\" Correct every error in that statement.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Article 700 emergency systems transfer within 10 seconds; 60 seconds is Article 701. Step 2: Article 702 optional standby systems are the owner's choice, not required by law. Step 3: A diode conducts in one direction only. Step 4: The largest motor on a feeder is counted at 125% of FLC under 430.24.</p>"
    }
  ],
  "quiz": [
    {
      "module": 8,
      "q": "How quickly must an Article 700 emergency system transfer to its alternate source?",
      "choices": [
        "60 seconds",
        "10 seconds",
        "5 minutes",
        "30 seconds"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Article 700 emergency systems must transfer within 10 seconds. (a) is wrong: \"60 seconds\" — 60 seconds is the Article 701 legally required standby transfer time. (c) is wrong: \"5 minutes\" — 5 minutes is not a transfer-time requirement for emergency systems. (d) is wrong: \"30 seconds\" — 30 seconds is not the Article 700 transfer time."
    },
    {
      "module": 8,
      "q": "Which article covers legally required standby systems?",
      "choices": [
        "Article 700",
        "Article 701",
        "Article 702",
        "Article 517"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Article 701 covers legally required standby systems; Article 700 is emergency and Article 702 is optional standby. (a) is wrong: \"Article 700\" — Article 700 covers emergency systems. (c) is wrong: \"Article 702\" — Article 702 covers optional standby systems. (d) is wrong: \"Article 517\" — Article 517 covers health care facilities."
    },
    {
      "module": 8,
      "q": "What does a diode do?",
      "choices": [
        "Conducts in both directions",
        "Conducts in one direction only",
        "Stores charge like a battery",
        "Steps voltage up or down"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A diode conducts current in one direction only. (a) is wrong: \"Conducts in both directions\" — Conducting in both directions describes a plain conductor, not a diode. (c) is wrong: \"Stores charge like a battery\" — Storing charge describes a capacitor. (d) is wrong: \"Steps voltage up or down\" — Stepping voltage up or down describes a transformer."
    },
    {
      "module": 8,
      "q": "What is the feeder load for three motors of 5 hp each at 460 volts (FLC 7.6 A each) under 430.24?",
      "choices": [
        "22.8 amps",
        "24.7 amps",
        "28.5 amps",
        "19 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 125% × 7.6 + 7.6 + 7.6 = 9.5 + 15.2 = 24.7 amps. (a) is wrong: \"22.8 amps\" — 22.8 amps adds all three at 100% — the largest must be at 125%. (c) is wrong: \"28.5 amps\" — 28.5 amps would be 125% of all three motors. (d) is wrong: \"19 amps\" — 19 amps is 250% of one motor, not the feeder load."
    },
    {
      "module": 8,
      "q": "Which device turns AC into DC?",
      "choices": [
        "A transformer",
        "A rectifier",
        "An inverter",
        "A contactor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A rectifier converts alternating current to direct current. (a) is wrong: \"A transformer\" — A transformer changes AC voltage, not AC to DC. (c) is wrong: \"An inverter\" — An inverter converts DC to AC — the opposite. (d) is wrong: \"A contactor\" — A contactor switches power; it does not convert it."
    },
    {
      "module": 8,
      "q": "What is a VFD used for?",
      "choices": [
        "To measure voltage",
        "To control a motor's speed by varying the frequency of its power",
        "To protect against lightning",
        "To bond equipment"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A variable-frequency drive controls a motor's speed by varying the frequency of the power supplied to it. (a) is wrong: \"To measure voltage\" — Voltage is measured by a voltmeter. (c) is wrong: \"To protect against lightning\" — Lightning protection is a separate system. (d) is wrong: \"To bond equipment\" — Bonding is done with conductors and bonding jumpers."
    },
    {
      "module": 8,
      "q": "Heat tracing on a pipe needs what protection in addition to a thermostat?",
      "choices": [
        "AFCI protection",
        "Ground-fault protection",
        "Surge protection only",
        "No protection"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Heat tracing requires ground-fault protection (along with thermostat control) because a damaged heating cable can leak current to the pipe. (a) is wrong: \"AFCI protection\" — AFCI is for dwelling branch circuits, not heat tracing. (c) is wrong: \"Surge protection only\" — Surge protection alone does not protect against a faulted heating cable. (d) is wrong: \"No protection\" — Heat tracing always needs ground-fault protection."
    },
    {
      "module": 8,
      "q": "Medium-voltage work means voltages over what level?",
      "choices": [
        "600 volts",
        "1,000 volts",
        "240 volts",
        "480 volts"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Medium voltage means voltages over 1,000 volts, with shielded cable and terminations made to the manufacturer's instructions. (a) is wrong: \"600 volts\" — 600 volts is low voltage in NEC terms. (c) is wrong: \"240 volts\" — 240 volts is a standard low-voltage supply. (d) is wrong: \"480 volts\" — 480 volts is low voltage in NEC terms."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — NCCER Electrical Level 4 Review: Quick Reference</h3><p><strong>Focus:</strong> Feeders and Services: The Whole Building — the review ground for this module's exam questions.</p><p><strong>Must-know objectives:</strong> Run feeder and service load calculations for commercial and industrial buildings.; Apply the health-care rules of Article 517 and the standby and emergency rules of Articles 700, 701, and 702.; Explain basic electronic theory: semiconductors, diodes, transistors, and rectifiers..</p><p><strong>Anchor numbers (verified for this course):</strong> All code values in this module are from the 2023 NEC plus Michigan Part 8 amendments as adopted March 12, 2024. Michigan journeyman: 80 questions, 150 minutes, 75% to pass. Michigan master: 76 questions, 180 minutes, 75% to pass. NCCER module tests pass at 70%; journey-level assessments at 75%. NABCEP PV Associate passes at a scaled score of 65 on a 0–99 scale — never 65%.</p><p><strong>Terms to flash-review:</strong> 430.24, Essential electrical system, Article 700, Article 701, Article 702, Automatic transfer switch (ATS), Diode, Transistor</p>\n"
};
