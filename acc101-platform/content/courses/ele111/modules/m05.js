module.exports = {
  "number": 5,
  "slug": "nec-690-pv-system-requirements",
  "title": "NEC Article 690: PV System Requirements",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the scope of NEC Article 690 and what it covers.",
    "Apply the 125% sizing rule for PV circuit current (690.8).",
    "Apply the maximum voltage rules (690.7), including the 600 V dwelling limit.",
    "Explain rapid shutdown (690.12) and its voltage and time limits.",
    "Describe disconnects, labeling, and grounding for PV systems."
  ],
  "sections": [
    {
      "heading": "Article 690: The Rulebook for PV Systems",
      "html": "<p><strong>NEC Article 690</strong> is the article that governs solar photovoltaic systems — the array circuits, the inverter, the controllers, and the disconnects. It applies to systems of any size up to the limits of Article 691 (large-scale PV systems), and it works together with the rest of the NEC: Article 250 for grounding, Article 705 for interconnected sources, and Article 706 for energy storage. In Michigan, Article 690 applies as written in the 2023 NEC, together with the Michigan Part 8 amendments adopted March 12, 2024. The article is long and detailed, and this module teaches the parts a technician uses every day — the sizing, the voltage limits, the shutdown, and the disconnects — not the whole article from memory.</p><p>The first thing Article 690 teaches is that PV circuits are different from ordinary circuits. The source — the sun — cannot be turned off, the current is DC, and the voltage changes with temperature. That is why the article has its own sizing rules, its own voltage limits, and its own shutdown rules. A technician who sizes a PV circuit like an ordinary branch circuit will undersize it, and an undersized PV circuit is a fire risk.</p>"
    },
    {
      "heading": "Sizing PV Circuits: The 125% Rule (690.8)",
      "html": "<p>The core sizing rule of Article 690 is in <strong>690.8</strong>: PV system DC circuits must be sized at 125% of the maximum current. The maximum current of a PV source circuit is the module's short-circuit current (Isc) multiplied by the number of parallel strings, and the conductor and the overcurrent device must be sized for 125% of that value. The reason is that a PV module can produce more than its rated current in bright, cold, reflective conditions — the 125% factor is the safety margin for that extra current, and for the fact that the current is continuous (three hours or more) and continuous loads need the extra sizing.</p><p>An example makes it concrete. A string of modules has an Isc of 10.5 A. The maximum circuit current is 10.5 A, and the conductor and overcurrent device must be sized for 1.25 × 10.5 = 13.1 A — so a 15 A fuse or breaker is used, and the conductor must have an ampacity of at least 13.1 A after all the derating factors (temperature, conduit fill, and sunlight exposure) are applied. The same 125% logic applies to the inverter output circuit, where the maximum current is the inverter's rated output current. Every conductor and every overcurrent device in the PV system is sized this way, and the calculation is documented on the plans.</p><div class=\"callout\"><strong>Key idea:</strong> Size PV circuits at 125% of maximum current (690.8). The sun can push a module past its rated current, and the current is continuous — the 125% factor is the safety margin.</div>"
    },
    {
      "heading": "Maximum Voltage (690.7) and Rapid Shutdown (690.12)",
      "html": "<p><strong>690.7</strong> sets the maximum voltage of PV system DC circuits. The headline numbers in the 2023 NEC are: PV system DC circuits must not exceed 1,000 volts within or originating from arrays on or attached to buildings, and must not exceed 600 volts on or in one- and two-family dwellings. The maximum voltage is calculated from the modules' open-circuit voltage corrected for the coldest expected temperature — cold modules make higher voltage, so the calculation uses the record low temperature for the location and the module's temperature coefficient. A string that is fine at 25°C can exceed its limit on a −20°C Michigan morning, and the inverter's maximum input voltage is the other limit that must not be exceeded.</p><p><strong>690.12</strong> is rapid shutdown, and it exists for firefighters. When rapid shutdown is initiated, the controlled conductors must drop to 30 volts or less outside the array boundary — and 80 volts or less inside the array boundary — within 30 seconds. That gives firefighters a roof they can work on without facing hundreds of volts of DC. Rapid shutdown is provided by the inverter, by module-level devices such as optimizers and microinverters, or by a dedicated rapid-shutdown device, and the system must be labeled so that firefighters and technicians can find the rapid-shutdown switch. The label says, in plain words, that the system has rapid shutdown and where the switch is.</p>"
    },
    {
      "heading": "Disconnects, Labeling, and Grounding",
      "html": "<p>Article 690 requires <strong>disconnecting means</strong> so the system can be isolated for service: a DC disconnect between the array and the inverter, and an AC disconnect between the inverter and the service panel. Each disconnect must be rated for the voltage and current it will interrupt — and a DC disconnect must be rated for DC, because a DC arc does not self-extinguish the way an AC arc does. The disconnects must be readily accessible, clearly labeled, and must indicate whether they are open or closed. The <strong>PV system disconnect</strong> is the point where the PV system ends and the premises wiring begins, and it is marked as such.</p><p><strong>Labeling</strong> is a major part of Article 690. Every disconnect, every combiner box, and the service panel must be marked with the system's presence, its voltage, and its current, and the labels must be permanent and legible. The labels exist for the next person: the firefighter on the roof, the technician servicing the panel, the inspector checking the work. <strong>Grounding</strong> follows Article 250 and Article 690 Part V: the module frames, the racking, and the enclosures are bonded together and to the grounding electrode system, and the system grounding (whether the DC system is grounded or ungrounded) follows the inverter manufacturer's instructions and the code. A PV system with missing labels or missing grounding is not a finished system — it is a hazard with a roof on it.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Article 690 governs PV systems: the array circuits, the inverter, the controllers, and the disconnects — under the 2023 NEC and Michigan Part 8.</li><li>690.8: size PV DC circuits at 125% of maximum current (Isc × parallel strings).</li><li>690.7: maximum DC voltage is 1,000 V on buildings and 600 V on one- and two-family dwellings, calculated at the coldest temperature.</li><li>690.12: rapid shutdown drops controlled conductors to 30 V or less outside the array (80 V inside) within 30 seconds.</li><li>Disconnects must be DC-rated, accessible, and labeled; the system must be labeled and grounded.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Sizing a PV circuit at 100% of Isc. The 125% factor is not optional — the sun can push a module past its rating, and the current is continuous.</div><div class=\"callout\"><strong>Common mistake:</strong> Calculating string voltage at 25°C and forgetting the cold-weather correction. The maximum voltage happens on the coldest day, and it can exceed the inverter's limit.</div><p><strong>Ready-to-Work link:</strong> If you can size a PV circuit at 125%, state the 690.7 voltage limits, and explain rapid shutdown, you have this module. Module 6 covers the other side of the connection: NEC Article 705 and interconnected sources.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "NEC Article 690",
      "def": "The NEC article governing solar photovoltaic systems."
    },
    {
      "term": "PV source circuit",
      "def": "The circuit from a PV module or string to the combiner box or inverter."
    },
    {
      "term": "PV output circuit",
      "def": "The circuit from the combiner box to the inverter."
    },
    {
      "term": "Inverter output circuit",
      "def": "The AC circuit from the inverter to the service panel."
    },
    {
      "term": "690.8 (125% rule)",
      "def": "The rule that PV DC circuits are sized at 125% of maximum current."
    },
    {
      "term": "690.7 (maximum voltage)",
      "def": "The rule limiting PV DC voltage: 1,000 V on buildings, 600 V on one- and two-family dwellings."
    },
    {
      "term": "690.12 (rapid shutdown)",
      "def": "The rule that controlled conductors drop to 30 V or less outside the array (80 V inside) within 30 seconds of shutdown."
    },
    {
      "term": "PV system disconnect",
      "def": "The disconnect where the PV system ends and the premises wiring begins."
    },
    {
      "term": "Disconnecting means",
      "def": "A switch or breaker that isolates equipment for service."
    },
    {
      "term": "Array boundary",
      "def": "The boundary of the PV array used in the rapid-shutdown voltage limits."
    },
    {
      "term": "Arc fault (PV)",
      "def": "An unintended arc in a PV DC circuit, which the code requires listed arc-fault protection to detect and interrupt."
    },
    {
      "term": "Ground fault (PV)",
      "def": "An unintended path from a PV circuit to ground, which the code requires listed ground-fault protection to detect."
    },
    {
      "term": "Maximum system voltage",
      "def": "The highest voltage a module or component is listed for."
    }
  ],
  "video": {
    "title": "Code Corner: 2023 NEC 690.7 and 690.31(G)",
    "embedUrl": "https://www.youtube.com/embed/vDq6hUVYOdo",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "Code Corner: NEC Article 690 Scope",
        "url": "https://www.youtube.com/watch?v=HAB-7zNv0dg"
      },
      {
        "title": "Solar Inverters Explained: Types, Repairs and Wiring",
        "url": "https://www.youtube.com/watch?v=ICmVahjz_lI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A PV source circuit has one string with an Isc of 10.5 A. What is the minimum ampacity the conductor must have, and what size overcurrent device is used? Show the math.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Maximum current = 10.5 A. Step 2: 125% sizing: 10.5 × 1.25 = 13.1 A. Step 3: The conductor must have an ampacity of at least 13.1 A after derating, and a 15 A fuse or breaker is used.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Two parallel strings each have an Isc of 10.5 A and feed one combiner box. What is the maximum current of the combined output circuit, and what is the 125% sizing current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Maximum current = 2 × 10.5 = 21 A. Step 2: 125% sizing: 21 × 1.25 = 26.25 A. Step 3: The output circuit conductor and overcurrent device are sized for at least 26.25 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A residential string has a Voc of 480 V at STC. The cold-weather correction raises it by 15%. What is the cold-weather Voc, and is it within the 600 V dwelling limit?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cold-weather Voc = 480 × 1.15 = 552 V. Step 2: 552 V is within the 600 V limit for one- and two-family dwellings. Step 3: The string must also be within the inverter's maximum input voltage.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain rapid shutdown in two sentences, and say who it protects.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Rapid shutdown drops the PV conductors to 30 V or less outside the array boundary (80 V inside) within 30 seconds of being initiated. Step 2: It protects firefighters working on the roof, who must not face hundreds of volts of DC while they ventilate and work.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A technician is about to service an inverter. Which disconnects must be opened, and what must be verified before touching anything?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Open the DC disconnect between the array and the inverter, and the AC disconnect between the inverter and the panel. Step 2: Lock out and tag out both disconnects. Step 3: Test dead with a meter rated for the DC voltage present — and remember the array itself stays energized in sunlight, so the DC conductors from the array are treated as energized until proven otherwise.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why must a PV disconnect be rated for DC, and what happens if an AC-only disconnect is used on a DC circuit?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A DC arc does not self-extinguish the way an AC arc does — AC crosses zero 120 times a second, DC never does. Step 2: An AC-only disconnect opened under DC load can sustain an arc, overheat, and start a fire. Step 3: Only a disconnect listed and rated for the DC voltage and current may be used.</p>"
    }
  ],
  "quiz": [
    {
      "q": "NEC Article 690 governs:",
      "choices": [
        "Fire alarm systems",
        "Solar photovoltaic systems",
        "Data cabling",
        "Health-care facilities"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Article 690 is the PV article. (a) Fire alarms are Article 760. (c) Data cabling is Article 800 and TIA-568. (d) Health-care facilities are Article 517."
    },
    {
      "q": "PV DC circuits must be sized at:",
      "choices": [
        "100% of maximum current",
        "125% of maximum current",
        "80% of maximum current",
        "150% of maximum current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 690.8 requires 125% of maximum current. (a) 100% is undersized — the sun can push a module past its rating. (c) 80% is far too small. (d) 150% is more than the code requires."
    },
    {
      "q": "The maximum PV DC voltage on or in a one- or two-family dwelling is:",
      "choices": [
        "300 V",
        "600 V",
        "1,000 V",
        "1,500 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 690.7 limits dwellings to 600 V. (a) 300 V is below the limit. (c) 1,000 V is the limit for other buildings. (d) 1,500 V exceeds the Article 690 limits for these systems."
    },
    {
      "q": "Rapid shutdown must drop controlled conductors outside the array boundary to:",
      "choices": [
        "120 V or less",
        "30 V or less within 30 seconds",
        "600 V or less",
        "0 V instantly"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 690.12 requires 30 V or less outside the array boundary within 30 seconds. (a) 120 V is still hazardous. (c) 600 V is the dwelling voltage limit, not the shutdown limit. (d) The code allows 30 seconds, not instant zero."
    },
    {
      "q": "A PV string with an Isc of 10 A needs a conductor sized for at least:",
      "choices": [
        "10 A",
        "12.5 A",
        "15 A",
        "20 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 10 × 1.25 = 12.5 A is the minimum ampacity. (a) 10 A is the maximum current, not the sized current. (c) 15 A is the next standard fuse size, but the question asks for the minimum ampacity. (d) 20 A is more than required."
    },
    {
      "q": "String voltage must be calculated at:",
      "choices": [
        "25°C",
        "The coldest expected temperature",
        "The hottest day",
        "Noon on a cloudy day"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cold modules make higher voltage — the maximum occurs on the coldest day. (a) 25°C is the STC rating condition, not the maximum-voltage condition. (c) Heat lowers voltage. (d) A cloudy noon gives low voltage, not the maximum."
    },
    {
      "q": "A DC disconnect must be rated for DC because:",
      "choices": [
        "DC is cheaper",
        "A DC arc does not self-extinguish the way an AC arc does",
        "AC disconnects are too big",
        "The code requires red disconnects"
      ],
      "answer": 1,
      "explanation": "Correct: (b). DC has no zero crossing, so a DC arc can sustain itself and start a fire. (a) Cost is not the reason. (c) Size is not the reason. (d) The code requires a DC rating, not a color."
    },
    {
      "q": "The PV system disconnect is:",
      "choices": [
        "The point where the PV system ends and the premises wiring begins",
        "The main service disconnect only",
        "A battery switch",
        "The rapid-shutdown switch only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The PV system disconnect marks the boundary between the PV system and the premises wiring. (b) The main service disconnect is a different device. (c) A battery switch is part of a storage system. (d) The rapid-shutdown switch is a control, not the system disconnect."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — NEC Article 690: Quick Reference</h3>\n<p><strong>Core idea:</strong> Article 690 governs PV systems under the 2023 NEC + Michigan Part 8. PV circuits are different — the sun cannot be turned off, the current is DC, and the voltage changes with temperature.</p>\n<p><strong>690.8:</strong> Size PV DC circuits at 125% of maximum current (Isc × parallel strings).</p>\n<p><strong>690.7:</strong> Maximum DC voltage 1,000 V on buildings, 600 V on one- and two-family dwellings, calculated at the coldest temperature.</p>\n<p><strong>690.12:</strong> Rapid shutdown — 30 V or less outside the array boundary (80 V inside) within 30 seconds, for firefighters.</p>\n<p><strong>Disconnects & labels:</strong> DC-rated, accessible, labeled, open/closed indication. Label everything for the next person.</p>\n<p><strong>Self-check:</strong> Size a two-string circuit at 125% and state the rapid-shutdown limits from memory. If you can, you have this module.</p>\n"
};
