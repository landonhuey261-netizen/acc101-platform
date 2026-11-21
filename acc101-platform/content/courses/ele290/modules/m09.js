// ele290 — Electrical Certification Prep: original review content. Practice exams use original questions in the real exams' style/format.
module.exports = {
  "number": 9,
  "slug": "nabcep-review",
  "title": "NABCEP PV Associate Review: Design & NEC Article 690",
  "estTime": "3–4 hours",
  "objectives": [
    "State the NABCEP PV Associate exam format: 70 multiple-choice questions (60 scored + 10 pilot), 2 hours, passing at a scaled score of 65 on a 0–99 scale — never 65%.",
    "Explain how a PV module makes power: irradiance, cell temperature, and the I-V curve.",
    "Size a PV system: array, inverter, conductors, and overcurrent protection under NEC Article 690.",
    "Apply rapid shutdown (690.12) and the grounding and bonding rules for PV systems.",
    "Estimate system performance and troubleshoot common faults."
  ],
  "sections": [
    {
      "heading": "The Exam: 70 Questions, Scaled 65 — Never 65%",
      "html": "<p>The NABCEP PV Associate exam is <strong>70 multiple-choice questions — 60 scored plus 10 unscored pilot questions — in 2 hours</strong>. It passes at a <strong>scaled score of 65 on a 0–99 scale</strong>. That is a scaled score, not a percent: saying the exam passes at \"65%\" is wrong, and this course never says it. The practice exam in this course is 60 questions in 120 minutes with a <strong>practice benchmark of 70%</strong> — that 70% is the app's practice benchmark only, not the real exam's pass rule.</p><p>The exam's domains are PV markets and applications, safety and PPE, electrical fundamentals, solar energy fundamentals, PV module fundamentals, system components, system sizing and design, mechanical design, electrical design, and performance analysis and troubleshooting. The PV Associate is an entry-level credential — it proves you understand the technology and the design, not that you are a licensed installer.</p>"
    },
    {
      "heading": "How a PV Module Makes Power",
      "html": "<p>A photovoltaic cell turns light into direct current. The key numbers on a module's nameplate are <strong>open-circuit voltage (Voc)</strong>, <strong>short-circuit current (Isc)</strong>, <strong>maximum-power voltage (Vmp)</strong>, <strong>maximum-power current (Imp)</strong>, and <strong>maximum power (Pmax)</strong> — all measured at Standard Test Conditions (STC): 1,000 watts per square meter of irradiance, 25°C cell temperature, and an air mass of 1.5. In the field, a module almost never sees STC: heat lowers voltage, cold raises it, and low light lowers current.</p><p>The <strong>I-V curve</strong> shows the module's behavior: at zero current the voltage is Voc; at zero voltage the current is Isc; the maximum power point is the knee of the curve, where Vmp × Imp = Pmax. Temperature matters because the exam tests it: a module's voltage <strong>rises in cold weather</strong>, which is why 690.7 sizes the maximum system voltage from the coldest expected temperature. A system designed for a warm day can over-voltage on a cold morning.</p>"
    },
    {
      "heading": "Sizing the System: Array, Inverter, Conductors",
      "html": "<p>System sizing starts with the load: the daily energy need in watt-hours, divided by the peak sun hours, gives the array size in watts. Strings of modules are wired in series to reach the inverter's voltage window, and strings are wired in parallel to reach the current the inverter needs. The <strong>inverter</strong> turns the array's DC into AC, and its rating must match the array — an inverter that is too small clips power on the best days, and one that is too large wastes money.</p><p>Conductors and overcurrent protection follow <strong>690.8 and 690.9</strong>: PV source and output circuit conductors are sized at <strong>125% of the maximum current</strong> (Isc × 1.25 for the source circuit, and the overcurrent device is sized at 125% of that again — effectively 156% of Isc for the device rating). The maximum system voltage comes from <strong>690.7</strong>: Voc corrected for the coldest temperature, using the temperature correction factors of Table 690.7(A). Get the cold-temperature voltage wrong and the inverter sees more voltage than it is rated for.</p>"
    },
    {
      "heading": "Rapid Shutdown and Grounding: Articles 690.12 and 690.41",
      "html": "<p><strong>Rapid shutdown (690.12)</strong> exists for firefighters: when the system is shut down, the conductors on and in the building must be de-energized to <strong>30 volts or less within 30 seconds</strong>, and controlled conductors must be limited to <strong>240 volt-amperes</strong>. The controlled conductors are those more than 1 foot from the array boundary or more than 3 feet inside the building. The exam tests the numbers — 30 volts, 30 seconds, 240 VA — and the reason: a firefighter cutting into a roof must not meet a live array.</p><p><strong>Grounding and bonding (690.41–690.47)</strong> treat the PV system like any other electrical system, with a few PV-specific rules: the array frames and racking are bonded, the system has a grounding electrode conductor sized by Table 250.66 (690.47), and ground-fault protection is required for the DC circuits. The module frames are bonded to the racking, the racking is bonded to the grounding electrode system, and the whole system shares one grounding electrode system with the building.</p>"
    },
    {
      "heading": "Performance and Troubleshooting",
      "html": "<p>A system's <strong>performance ratio</strong> compares the energy it actually produced with the energy it should have produced under the measured sunlight — a ratio near 0.75 to 0.85 is normal for a well-built system, and a ratio well below that means something is wrong. The common faults are the same every time: a string that is open or shorted, a module that is shaded or soiled, an inverter that is faulted or misconfigured, and a connection that has corroded or loosened.</p><p>Troubleshooting is measurement, not guessing: measure Voc and Isc at the string and compare with the expected values; measure the inverter's AC output; check the monitoring data for the day the fault started. A string with Voc present but Isc at zero is open somewhere; a string with Voc low and Isc normal has a shorted or shaded module. And the safety rule is the same as everywhere else in this course: <strong>the array is live whenever the sun is up — treat it as energized, de-energize by the approved procedure, and work under a licensed supervisor.</strong></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "NABCEP PV Associate",
      "def": "NABCEP's entry-level solar credential: 70 MCQs (60 scored + 10 pilot), 2 hours, passing at a scaled score of 65 on a 0–99 scale — never 65%."
    },
    {
      "term": "Voc",
      "def": "Open-circuit voltage: the voltage a PV module produces with no load connected — its maximum voltage."
    },
    {
      "term": "Isc",
      "def": "Short-circuit current: the current a PV module produces with its terminals shorted — its maximum current."
    },
    {
      "term": "Vmp / Imp",
      "def": "Voltage and current at the maximum power point — the knee of the I-V curve, where Vmp × Imp = Pmax."
    },
    {
      "term": "STC",
      "def": "Standard Test Conditions: 1,000 W/m² irradiance, 25°C cell temperature, air mass 1.5 — the conditions a module's nameplate ratings assume."
    },
    {
      "term": "Peak sun hours",
      "def": "The equivalent hours of full sun per day at a site — used to size an array from the daily energy need."
    },
    {
      "term": "690.7",
      "def": "Maximum PV system voltage: Voc corrected for the coldest expected temperature."
    },
    {
      "term": "690.8",
      "def": "PV circuit sizing: conductors and overcurrent devices sized at 125% of the maximum current."
    },
    {
      "term": "690.12",
      "def": "Rapid shutdown: controlled conductors to 30 volts or less within 30 seconds, limited to 240 volt-amperes."
    },
    {
      "term": "690.47",
      "def": "Grounding electrode conductor for a PV system, sized by Table 250.66."
    },
    {
      "term": "Inverter",
      "def": "The device that converts a PV array's direct current into alternating current for the building or the grid."
    },
    {
      "term": "String",
      "def": "Modules wired in series to reach the inverter's voltage window; strings are wired in parallel for current."
    },
    {
      "term": "Performance ratio",
      "def": "Actual energy produced divided by the energy expected under the measured sunlight — near 0.75–0.85 is normal."
    },
    {
      "term": "I-V curve",
      "def": "The graph of a PV module's current versus voltage, showing Voc, Isc, and the maximum power point."
    },
    {
      "term": "Pilot questions",
      "def": "Unscored questions on an exam, used to test new items — 10 of the 70 questions on the PV Associate exam."
    },
    {
      "term": "Clipping",
      "def": "Lost power when an inverter is too small for its array and limits output on the best days."
    }
  ],
  "video": {
    "title": "The Ultimate Guide to Launching your Solar Career with the NABCEP PV Associate (PVA) Credential",
    "embedUrl": "https://www.youtube.com/embed/reJGdhMOMJM",
    "note": "HeatSpring's guide to the NABCEP PV Associate credential — what the exam covers, who it is for, and how it fits a solar career.",
    "more": [
      {
        "title": "A Quick Guide to Getting Your NABCEP PV Associate (PVA) Solar Credential",
        "url": "https://www.youtube.com/watch?v=FdLR4KAChJ8"
      },
      {
        "title": "Solar Photovoltaic (PV) Systems, Rapid Shutdown, NEC 2020 - [690.12], (31min:43sec)",
        "url": "https://www.youtube.com/watch?v=GiWiaGeZ79c"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A PV string has 12 modules, each with Voc of 40 volts at STC. (a) What is the string Voc at STC? (b) If cold weather raises Voc by 10%, what is the corrected maximum voltage? (c) Why does 690.7 require the cold-temperature correction?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 12 × 40 = 480 volts. (b) 480 × 1.10 = 528 volts. (c) Because a module's voltage rises in cold weather, and the inverter and conductors must be rated for the highest voltage the array can actually produce — a system designed for a warm day can over-voltage on a cold morning.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Objective check: \"State the NABCEP PV Associate exam format.\" Write a three-sentence exam-ready explanation that includes the question count, the pilot questions, the time, and the pass rule — stated correctly.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The exam is 70 multiple-choice questions — 60 scored plus 10 unscored pilot questions — in 2 hours. Step 2: It passes at a scaled score of 65 on a 0–99 scale. Step 3: That is a scaled score, not a percent — the exam never passes at \"65%\".</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Scenario: A firefighter asks whether the rooftop array is safe to work around after the disconnect is opened. What do you tell them, and what rule is behind it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Tell them rapid shutdown (690.12) limits controlled conductors to 30 volts or less within 30 seconds of shutdown, and 240 volt-amperes. Step 2: The array itself is still live while the sun is up — the modules keep making voltage. Step 3: The firefighters must treat the array as energized and work around it accordingly; rapid shutdown protects the conductors in the building, not the modules on the roof.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Numbers drill. (a) A module's Isc is 10 amps — what is the PV source-circuit conductor current under 690.8? (b) What is the overcurrent device rating for that circuit? (c) How many questions on the PV Associate exam are scored?</p>",
      "solution": "<p><strong>Answer:</strong> Solution: (a) 10 × 1.25 = 12.5 amps for the conductor. (b) 12.5 × 1.25 = 15.625 amps, so the next standard device is 20 amps (or 15.625 rounds to a 20-amp device per 690.9). (c) 60 scored, plus 10 pilot.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Teach-back: Pick any three key terms from this module and write a two-sentence field explanation of each, as if training a first-week apprentice. No textbook language — your own words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Choose terms you could not define yesterday — teaching the ones you already know builds nothing. Step 2: For each term, sentence one gives the plain definition (compare it with the key-terms list only after writing). Step 3: Sentence two gives a job moment where the term matters. Your three terms will differ; the two-sentence discipline is the point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Error hunt: A study partner writes: \"The PV Associate exam passes at 65%, modules make more voltage when hot, rapid shutdown gives you 60 seconds, and a string is modules wired in parallel.\" Correct every error in that statement.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The exam passes at a scaled score of 65 on a 0–99 scale — never \"65%\". Step 2: A module's voltage rises in cold weather and falls in heat. Step 3: Rapid shutdown requires 30 volts or less within 30 seconds. Step 4: A string is modules wired in series; strings are wired in parallel.</p>"
    }
  ],
  "quiz": [
    {
      "module": 9,
      "q": "How many of the 70 questions on the NABCEP PV Associate exam are scored?",
      "choices": [
        "70",
        "60",
        "50",
        "65"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 60 questions are scored and 10 are unscored pilot questions. (a) is wrong: \"70\" — All 70 are asked, but 10 are pilot questions that do not count. (c) is wrong: \"50\" — 50 is not the scored count. (d) is wrong: \"65\" — 65 is the scaled pass score, not a question count."
    },
    {
      "module": 9,
      "q": "A PV module's voltage does what as its temperature rises?",
      "choices": [
        "Rises",
        "Falls",
        "Stays the same",
        "Doubles"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A PV module's voltage falls as temperature rises — and rises in cold weather, which is why 690.7 corrects for the coldest temperature. (a) is wrong: \"Rises\" — Voltage rises in cold weather, not hot. (c) is wrong: \"Stays the same\" — Voltage changes with temperature; it does not stay the same. (d) is wrong: \"Doubles\" — Voltage does not double with temperature."
    },
    {
      "module": 9,
      "q": "What is the maximum power point of a PV module?",
      "choices": [
        "Voc times Isc",
        "The knee of the I-V curve, where Vmp × Imp = Pmax",
        "The short-circuit point",
        "The open-circuit point"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The maximum power point is the knee of the I-V curve, where Vmp × Imp = Pmax. (a) is wrong: \"Voc times Isc\" — Voc × Isc is larger than the actual maximum power — the module cannot deliver both at once. (c) is wrong: \"The short-circuit point\" — The short-circuit point has zero voltage, so zero power. (d) is wrong: \"The open-circuit point\" — The open-circuit point has zero current, so zero power."
    },
    {
      "module": 9,
      "q": "Rapid shutdown under 690.12 must bring controlled conductors to what voltage, and how fast?",
      "choices": [
        "120 volts within 60 seconds",
        "30 volts or less within 30 seconds",
        "0 volts within 10 seconds",
        "50 volts within 5 minutes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 690.12 requires controlled conductors to be at 30 volts or less within 30 seconds of shutdown, limited to 240 volt-amperes. (a) is wrong: \"120 volts within 60 seconds\" — 120 volts in 60 seconds is not the rapid-shutdown rule. (c) is wrong: \"0 volts within 10 seconds\" — Zero volts in 10 seconds is not the rule — it is 30 volts in 30 seconds. (d) is wrong: \"50 volts within 5 minutes\" — 50 volts in 5 minutes is not the rule."
    },
    {
      "module": 9,
      "q": "A site needs 12,000 watt-hours per day and gets 4 peak sun hours. What array size is needed?",
      "choices": [
        "48,000 watts",
        "3,000 watts",
        "12,000 watts",
        "4,000 watts"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 12,000 Wh / 4 hours = 3,000 watts of array. (a) is wrong: \"48,000 watts\" — 48,000 watts multiplies instead of dividing. (c) is wrong: \"12,000 watts\" — 12,000 watts is the daily energy, not the array size. (d) is wrong: \"4,000 watts\" — 4,000 watts would be 12,000 / 3, not 12,000 / 4."
    },
    {
      "module": 9,
      "q": "What is STC for a PV module rating?",
      "choices": [
        "1,000 W/m² irradiance, 25°C cell temperature, air mass 1.5",
        "500 W/m² irradiance, 20°C cell temperature",
        "1,000 W/m² irradiance, 0°C cell temperature",
        "800 W/m² irradiance, 25°C ambient temperature"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Standard Test Conditions are 1,000 watts per square meter, 25°C cell temperature, and air mass 1.5. (b) is wrong: \"500 W/m² irradiance, 20°C cell temperature\" — 500 W/m² and 20°C is not STC. (c) is wrong: \"1,000 W/m² irradiance, 0°C cell temperature\" — 0°C is not the STC cell temperature. (d) is wrong: \"800 W/m² irradiance, 25°C ambient temperature\" — STC uses cell temperature, not ambient temperature, and 1,000 W/m²."
    },
    {
      "module": 9,
      "q": "A PV source circuit has an Isc of 10 amps. What is the minimum conductor current under 690.8?",
      "choices": [
        "10 amps",
        "12.5 amps",
        "15 amps",
        "20 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 690.8 sizes the conductor at 125% of Isc: 10 × 1.25 = 12.5 amps. (a) is wrong: \"10 amps\" — 10 amps is the Isc itself, before the 125% factor. (c) is wrong: \"15 amps\" — 15 amps would be 150% of Isc. (d) is wrong: \"20 amps\" — 20 amps would be 200% of Isc."
    },
    {
      "module": 9,
      "q": "What is the real NABCEP PV Associate pass rule?",
      "choices": [
        "65% correct",
        "A scaled score of 65 on a 0–99 scale",
        "70% correct",
        "60 correct out of 70"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The exam passes at a scaled score of 65 on a 0–99 scale — a scaled score, never 65%. (a) is wrong: \"65% correct\" — 65% is wrong — the pass mark is a scaled score, not a percent. (c) is wrong: \"70% correct\" — 70% is the app's practice benchmark, not the real pass rule. (d) is wrong: \"60 correct out of 70\" — 60 correct out of 70 would be about 86% — not the pass rule."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — NABCEP PV Associate Review: Design & NEC Article 690: Quick Reference</h3><p><strong>Focus:</strong> The Exam: 70 Questions, Scaled 65 — Never 65% — the review ground for this module's exam questions.</p><p><strong>Must-know objectives:</strong> State the NABCEP PV Associate exam format: 70 multiple-choice questions (60 scored + 10 pilot), 2 hours, passing at a scaled score of 65 on a 0–99 scale — never 65%.; Explain how a PV module makes power: irradiance, cell temperature, and the I-V curve.; Size a PV system: array, inverter, conductors, and overcurrent protection under NEC Article 690..</p><p><strong>Anchor numbers (verified for this course):</strong> All code values in this module are from the 2023 NEC plus Michigan Part 8 amendments as adopted March 12, 2024. Michigan journeyman: 80 questions, 150 minutes, 75% to pass. Michigan master: 76 questions, 180 minutes, 75% to pass. NCCER module tests pass at 70%; journey-level assessments at 75%. NABCEP PV Associate passes at a scaled score of 65 on a 0–99 scale — never 65%.</p><p><strong>Terms to flash-review:</strong> NABCEP PV Associate, Voc, Isc, Vmp / Imp, STC, Peak sun hours, 690.7, 690.8</p>\n"
};
