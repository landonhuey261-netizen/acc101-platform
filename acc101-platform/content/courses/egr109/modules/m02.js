// egr109 - Module 2: The First Law: Energy In, Energy Out
module.exports = {
  "number": 2,
  "slug": "first-law-energy",
  "title": "The First Law: Energy In, Energy Out",
  "estTime": "3–4 hours",
  "objectives": [
    "State the first law of thermodynamics in words and as an equation.",
    "Apply the first law to a closed system: ΔU = Q − W.",
    "Calculate the heat needed to raise water temperature using Q = mcΔT.",
    "Explain specific heat capacity and use water's value of 4,186 J/kg·K.",
    "Apply the steady-flow energy equation to a pump or heater in plain terms."
  ],
  "sections": [
    {
      "heading": "The First Law: Energy Is Conserved",
      "html": "<p><p>The first law says energy cannot be created or destroyed, only changed from one form to another. For a closed system, the change in internal energy equals the heat added minus the work done by the system: ΔU = Q − W. Add 500 J of heat and let the system do 200 J of work, and its internal energy rises by 500 − 200 = 300 J. The books must balance — every joule is accounted for.</p></p>\n<p><p>Sign conventions matter, so pick one and stick to it. In this course, Q is positive when heat is added to the system, and W is positive when the system does work on its surroundings. A gas expanding and pushing a piston does work, so W is positive and the internal energy falls unless heat is added to make up for it.</p></p>\n"
    },
    {
      "heading": "Heating Water: Q = mcΔT",
      "html": "<p><p>The heat needed to change a substance's temperature is Q = mcΔT, where m is mass, c is the specific heat capacity, and ΔT is the temperature change. Water's c is 4,186 J/kg·K — very high, which is why water is used to carry heat in heating systems. Heating 2 kg of water by 30 K needs Q = 2 × 4,186 × 30 = 251,160 J, about 251 kJ.</p></p>\n<p><p>Check the units: kg × J/kg·K × K gives joules. And check the sense: heating a kettle of water takes a few minutes at 2 kW, and 2 kW for 2 minutes is 240 kJ — the same size as our answer, so it is plausible. A result of 251 J or 251 MJ would tell you a unit was wrong.</p></p>\n"
    },
    {
      "heading": "Work in a Closed System",
      "html": "<p><p>When a gas expands, it does work: W = pΔV for a constant-pressure expansion, where p is pressure and ΔV is the volume change. A gas at 200,000 Pa expanding by 0.05 m³ does 200,000 × 0.05 = 10,000 J of work. Compressing a gas does negative work — work is done on the gas, and its internal energy rises. That is why a bicycle pump gets hot: you are doing work on the air inside it.</p></p>\n<p><p>Work and heat are path-dependent: how much work a gas does depends on the route it takes between two states, not just the start and finish. Internal energy, by contrast, depends only on the state. That distinction is why the first law is written in terms of ΔU, Q, and W together — Q and W are the two ways energy crosses the boundary.</p></p>\n"
    },
    {
      "heading": "Steady Flow: Pumps, Heaters, and Pipes",
      "html": "<p><p>In an open system with steady flow — a pump, a heater, a pipe — mass flows in and out at the same rate, and the energy balance becomes: energy in (with the flow, plus heat and work) equals energy out. For a water heater, the electrical power in equals the heat carried away by the water: P = ṁcΔT, where ṁ is the mass flow rate in kg/s. A heater raising 0.05 kg/s of water by 20 K needs P = 0.05 × 4,186 × 20 = 4,186 W, about 4.2 kW.</p></p>\n<p><p>This one equation sizes most water heaters, boilers, and radiators. If the flow doubles, the power must double for the same temperature rise; if the temperature rise halves, the power halves. Always check the flow rate units — litres per minute must be converted to kg/s (1 L/min of water is 1 kg per 60 s, or 0.0167 kg/s).</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>First law: ΔU = Q − W; energy is conserved.</li><li>Q = mcΔT for heating; water's c is 4,186 J/kg·K.</li><li>Work for a gas at constant pressure is W = pΔV.</li><li>Steady-flow heater power is P = ṁcΔT.</li><li>Check units and check the answer's size.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Mixing up the sign of W. In this course, W is positive when the system does work.</p><p><strong>Common mistake:</strong> Using litres per minute as kg/s. Convert: 1 L/min of water is 0.0167 kg/s.</p><p><strong>Ready check:</strong> If you can find the power a heater needs for a given water flow and temperature rise, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "First law of thermodynamics",
      "def": "Energy cannot be created or destroyed; ΔU = Q − W for a closed system."
    },
    {
      "term": "Internal energy (U)",
      "def": "Energy stored in a substance by the motion of its molecules."
    },
    {
      "term": "Specific heat capacity (c)",
      "def": "The heat needed to raise 1 kg of a substance by 1 K, in J/kg·K."
    },
    {
      "term": "Mass flow rate",
      "def": "Mass flowing per second, in kg/s, written ṁ."
    },
    {
      "term": "Steady flow",
      "def": "Flow where nothing changes with time at any point in the system."
    },
    {
      "term": "Expansion work",
      "def": "Work done by a gas as it expands: W = pΔV at constant pressure."
    },
    {
      "term": "Compression",
      "def": "Squeezing a gas into a smaller volume, doing work on it."
    },
    {
      "term": "Heat transfer",
      "def": "Energy moving across a boundary because of a temperature difference."
    },
    {
      "term": "Sign convention",
      "def": "The agreed rule for which direction of heat or work counts as positive."
    },
    {
      "term": "Path-dependent",
      "def": "Depending on the route taken, not just the start and finish — true of heat and work."
    },
    {
      "term": "State function",
      "def": "A property that depends only on the current state, like internal energy."
    },
    {
      "term": "Kilowatt-hour",
      "def": "Energy: 1 kWh = 3,600 kJ."
    },
    {
      "term": "Calorie",
      "def": "An older heat unit: 1 calorie ≈ 4.186 J."
    },
    {
      "term": "Enthalpy",
      "def": "A property that combines internal energy with pressure times volume, useful for flowing fluids."
    }
  ],
  "video": {
    "title": "How a Pressure Gauge Shows Temperature | P–T Saturation",
    "embedUrl": "https://www.youtube.com/embed/dynQfN2y6Q0",
    "note": "Pressure and temperature in a saturation system — how a gauge reading tells you the temperature, and why the first law balances the energy.",
    "more": [
      {
        "title": "3D How Refrigeration and Air Conditioning Works P1 - Components",
        "url": "https://www.youtube.com/watch?v=p6GXJdRUz9E"
      },
      {
        "title": "Explaining Superheat and Subcooling to Your Apprentice!",
        "url": "https://www.youtube.com/watch?v=2SEDe0v8VPY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A system receives 500 J of heat and does 200 J of work. What is the change in internal energy?</p>",
      "solution": "<p><strong>Answer:</strong> ΔU = 500 − 200 = 300 J (an increase).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> How much heat is needed to raise 5 kg of water by 10 K? (c = 4,186 J/kg·K)</p>",
      "solution": "<p><strong>Answer:</strong> Q = 5 × 4,186 × 10 = 209,300 J, about 209 kJ.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A gas at 300,000 Pa expands by 0.02 m³ at constant pressure. How much work does it do?</p>",
      "solution": "<p><strong>Answer:</strong> W = 300,000 × 0.02 = 6,000 J.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A water heater must raise 0.1 kg/s of water by 25 K. What power is needed?</p>",
      "solution": "<p><strong>Answer:</strong> P = 0.1 × 4,186 × 25 = 10,465 W, about 10.5 kW.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 3 kW kettle heats 1.5 kg of water from 20 °C to 100 °C. How long does it take (ignore losses)?</p>",
      "solution": "<p><strong>Answer:</strong> Heat needed = 1.5 × 4,186 × 80 = 502,320 J. Time = 502,320 ÷ 3,000 = 167 s, about 2.8 minutes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A system is compressed (work done on it is 400 J) and loses 150 J of heat. What is ΔU?</p>",
      "solution": "<p><strong>Answer:</strong> ΔU = Q − W = (−150) − (−400) = 250 J. The internal energy rises by 250 J.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The first law says:",
      "choices": [
        "Energy can be created",
        "Energy cannot be created or destroyed, only changed in form",
        "Heat always flows from cold to hot",
        "Work is always lost"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Energy is conserved. (a) is the opposite. (c) is the second law's direction. (d) work is not always lost."
    },
    {
      "q": "A system gains 800 J of heat and does 300 J of work. ΔU is:",
      "choices": [
        "1,100 J",
        "500 J",
        "−500 J",
        "300 J"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 800 − 300 = 500 J. (a) adds them. (c) has the sign wrong. (d) is the work alone."
    },
    {
      "q": "Heating 1 kg of water by 1 K needs about:",
      "choices": [
        "4,186 J",
        "1,000 J",
        "100 J",
        "418,600 J"
      ],
      "answer": 0,
      "explanation": "Correct: (a). That is water's specific heat capacity. (b) is 1 kJ. (c) is far too small. (d) is a hundred times too big."
    },
    {
      "q": "Heating 2 kg of water by 30 K needs about:",
      "choices": [
        "251 kJ",
        "25 kJ",
        "2,511 kJ",
        "8.4 kJ"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 2 × 4,186 × 30 = 251,160 J. (b) is ten times too small. (c) is ten times too big. (d) uses the wrong numbers."
    },
    {
      "q": "A gas at 100,000 Pa expands by 0.03 m³. The work done is:",
      "choices": [
        "3,000 J",
        "333 J",
        "30,000 J",
        "300 J"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 100,000 × 0.03 = 3,000 J. (b) divides. (c) multiplies by 0.3. (d) divides by 10."
    },
    {
      "q": "A heater raises 0.05 kg/s of water by 20 K. The power needed is about:",
      "choices": [
        "4,186 W",
        "209 W",
        "83,720 W",
        "1,000 W"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 0.05 × 4,186 × 20 = 4,186 W. (b) forgets the temperature rise. (c) multiplies by 20 twice. (d) is a round guess."
    },
    {
      "q": "Work done by a gas expanding is positive in this course because:",
      "choices": [
        "The system does work on its surroundings",
        "Work is always positive",
        "Heat is negative",
        "The gas cools down"
      ],
      "answer": 0,
      "explanation": "Correct: (a). That is the sign convention used here. (b) work can be negative when done on the system. (c) heat sign is separate. (d) cooling is a result, not the reason."
    },
    {
      "q": "1 litre per minute of water is how many kg/s?",
      "choices": [
        "1 kg/s",
        "0.0167 kg/s",
        "60 kg/s",
        "0.6 kg/s"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1 kg per 60 s = 0.0167 kg/s. (a) forgets the minute. (c) multiplies instead of dividing. (d) divides by 100."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — The First Law: Energy In, Energy Out: Quick Reference</h3>\n<p><strong>Core idea:</strong> State the first law of thermodynamics in words and as an equation.</p>\n<p><strong>Key terms:</strong> First law of thermodynamics · Internal energy (U) · Specific heat capacity (c) · Mass flow rate · Steady flow · Expansion work · Compression · Heat transfer.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>State the first law of thermodynamics in words and as an equation.</li>\n<li>Apply the first law to a closed system: ΔU = Q − W.</li>\n<li>Calculate the heat needed to raise water temperature using Q = mcΔT.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
