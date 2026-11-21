// egr109 - Module 1: Introduction to Thermodynamics: Systems, Energy, and Units
module.exports = {
  "number": 1,
  "slug": "introduction-thermodynamics",
  "title": "Introduction to Thermodynamics: Systems, Energy, and Units",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what thermodynamics is and what a system, boundary, and surroundings are.",
    "Compare open, closed, and isolated systems with examples.",
    "Name the forms of energy and state the units for heat, work, and power.",
    "Convert between joules, kilojoules, BTU, and kilowatt-hours.",
    "Explain temperature, pressure, and specific volume in plain words."
  ],
  "sections": [
    {
      "heading": "What Thermodynamics Is",
      "html": "<p><p>Thermodynamics is the study of energy and how it moves and changes form. It answers questions like: how much fuel does a boiler need, how much heat escapes through a wall, and how much work can an engine get from a litre of fuel? Every machine that burns, heats, cools, or pumps is a thermodynamics problem, so the ideas in this course run through the whole engineering program.</p></p>\n<p><p>The subject rests on four laws. The zeroth law says temperature can be measured and compared. The first law says energy is conserved. The second law says energy spreads out and useful work is limited. The third law says absolute zero cannot be reached. You will use the first two constantly; the others frame the limits of what is possible.</p></p>\n"
    },
    {
      "heading": "Systems, Boundaries, and Surroundings",
      "html": "<p><p>A system is the part of the world you choose to study — a boiler, a pipe, a room. The boundary is the imaginary (or real) surface around it, and everything outside is the surroundings. A closed system lets energy cross the boundary but not mass (a sealed radiator). An open system lets both mass and energy cross (a pump with water flowing through). An isolated system lets neither cross — a perfect thermos flask, which does not exist in practice.</p></p>\n<p><p>Choosing the system is the first step in every problem. Draw the boundary, list what crosses it (fuel in, heat out, work out), and the first law will balance the books. A common mistake is drawing the boundary in the wrong place and then wondering why the numbers do not add up — if a flow crosses your boundary, it belongs in your equation.</p></p>\n"
    },
    {
      "heading": "Energy and Its Units",
      "html": "<p><p>Energy comes in forms: kinetic (motion), potential (height), internal (the motion of molecules inside a substance), and chemical (in fuel). The SI unit is the joule (J); engineers often use kilojoules (kJ) and kilowatt-hours (kWh). One kilowatt-hour is 3,600 kJ — the energy of a 1 kW heater running for one hour. In American practice you will also meet the BTU: 1 BTU = 1,055 J, so 10,000 BTU/h is 10,000 × 1,055 ÷ 3,600 = 2,931 W, about 2.93 kW.</p></p>\n<p><p>Heat and work are not stored energy — they are energy in transit. Heat crosses a boundary because of a temperature difference; work crosses a boundary when a force moves something. A system stores internal energy; heat and work are how that stored energy changes. Keep that distinction clear and the first law makes sense.</p></p>\n"
    },
    {
      "heading": "Temperature, Pressure, and Properties",
      "html": "<p><p>Temperature measures how hot something is, in °C or in kelvin (K). To convert, add 273.15: 20 °C is 293.15 K. Always use kelvin in gas laws and efficiency formulas — a temperature ratio in °C gives a wrong answer. Pressure is force per area, in pascals: 1 bar = 100,000 Pa, and standard atmospheric pressure is 101,325 Pa, about 101 kPa or 14.7 psi.</p></p>\n<p><p>Specific volume is volume per kilogram (m³/kg), and density is its inverse. Water's density is about 1,000 kg/m³ and its specific volume is 0.001 m³/kg. Air at room temperature has a density of about 1.2 kg/m³. These property values are the raw material of every calculation in this course, so keep a small table of them in your notes.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Thermodynamics studies energy, its movement, and its change of form.</li><li>Closed systems pass energy only; open systems pass mass and energy.</li><li>1 kWh = 3,600 kJ; 1 BTU = 1,055 J.</li><li>Heat and work are energy in transit; internal energy is stored.</li><li>Use kelvin in gas laws and efficiency formulas.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Using °C in a temperature ratio. Convert to kelvin first — 20 °C is 293 K, not 20 K.</p><p><strong>Common mistake:</strong> Calling heat 'stored' in a body. A body stores internal energy; heat is the transfer.</p><p><strong>Ready check:</strong> If you can convert 10,000 BTU/h to kilowatts and draw a system boundary around a pump, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Thermodynamics",
      "def": "The study of energy and how it moves and changes form."
    },
    {
      "term": "System",
      "def": "The part of the world chosen for study."
    },
    {
      "term": "Boundary",
      "def": "The surface around a system."
    },
    {
      "term": "Surroundings",
      "def": "Everything outside a system's boundary."
    },
    {
      "term": "Closed system",
      "def": "A system that lets energy cross its boundary but not mass."
    },
    {
      "term": "Open system",
      "def": "A system that lets mass and energy cross its boundary."
    },
    {
      "term": "Isolated system",
      "def": "A system that lets neither mass nor energy cross its boundary."
    },
    {
      "term": "Internal energy",
      "def": "Energy stored in a substance by the motion of its molecules."
    },
    {
      "term": "Heat",
      "def": "Energy crossing a boundary because of a temperature difference."
    },
    {
      "term": "Work",
      "def": "Energy crossing a boundary when a force moves something."
    },
    {
      "term": "Joule (J)",
      "def": "The SI unit of energy."
    },
    {
      "term": "BTU",
      "def": "British thermal unit: 1 BTU = 1,055 J."
    },
    {
      "term": "Kilowatt-hour (kWh)",
      "def": "Energy: 1 kWh = 3,600 kJ."
    },
    {
      "term": "Kelvin (K)",
      "def": "The SI unit of temperature; 0 °C = 273.15 K."
    },
    {
      "term": "Specific volume",
      "def": "Volume per kilogram, in m³/kg."
    }
  ],
  "video": {
    "title": "3D How Refrigeration and Air Conditioning Works P1 - Components",
    "embedUrl": "https://www.youtube.com/embed/p6GXJdRUz9E",
    "note": "How refrigeration and air conditioning work, part 1 — the components of a real thermodynamic system, and how energy moves through them.",
    "more": [
      {
        "title": "How a Pressure Gauge Shows Temperature | P–T Saturation",
        "url": "https://www.youtube.com/watch?v=dynQfN2y6Q0"
      },
      {
        "title": "Visualizing HVAC Excellence (VHE) – Ep. 8: Pressure-Enthalpy",
        "url": "https://www.youtube.com/watch?v=DFj1S6gjDo4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A heater is rated 10,000 BTU/h. Convert this to watts.</p>",
      "solution": "<p><strong>Answer:</strong> 10,000 × 1,055 = 10,550,000 J/h. Divide by 3,600 s/h: 2,931 W, about 2.93 kW.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Convert 25 °C to kelvin.</p>",
      "solution": "<p><strong>Answer:</strong> 25 + 273.15 = 298.15 K, about 298 K.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 2 kW heater runs for 3 hours. How much energy does it use, in kWh and kJ?</p>",
      "solution": "<p><strong>Answer:</strong> Energy = 2 × 3 = 6 kWh. In kJ: 6 × 3,600 = 21,600 kJ.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Is a pump with water flowing through it an open or a closed system? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Open: both mass (water) and energy cross its boundary.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A sealed radiator is heated. Is it an open or a closed system? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Closed: energy crosses the boundary as heat, but no mass leaves or enters.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain in plain words the difference between heat and internal energy.</p>",
      "solution": "<p><strong>Answer:</strong> Internal energy is stored in a substance; heat is energy moving across a boundary because of a temperature difference.</p>"
    }
  ],
  "quiz": [
    {
      "q": "1 kWh equals:",
      "choices": [
        "1,000 J",
        "3,600 kJ",
        "746 J",
        "1,055 J"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1 kW for 1 hour is 1,000 × 3,600 = 3,600,000 J = 3,600 kJ. (a) is 1 kJ. (c) is 1 hp in watts. (d) is 1 BTU in joules."
    },
    {
      "q": "10,000 BTU/h is about:",
      "choices": [
        "10,550 W",
        "2,931 W",
        "3,600 W",
        "1,055 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 10,000 × 1,055 ÷ 3,600 = 2,931 W. (a) forgets to divide by 3,600. (c) is the seconds in an hour. (d) is 1 BTU/h in watts."
    },
    {
      "q": "25 °C in kelvin is:",
      "choices": [
        "25 K",
        "248 K",
        "298 K",
        "273 K"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 25 + 273.15 = 298.15 K. (a) forgets to add 273.15. (b) subtracts instead of adding. (d) is 0 °C in kelvin."
    },
    {
      "q": "A closed system lets what cross its boundary?",
      "choices": [
        "Mass only",
        "Energy only",
        "Both mass and energy",
        "Neither mass nor energy"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Closed means no mass crosses, but energy can. (a) is backwards. (c) is an open system. (d) is an isolated system."
    },
    {
      "q": "Heat is energy that crosses a boundary because of:",
      "choices": [
        "A pressure difference",
        "A temperature difference",
        "A mass flow",
        "A chemical reaction"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Heat flows from hot to cold. (a) pressure differences drive flow, not heat. (c) mass flow carries energy but is not heat itself. (d) a reaction can release heat, but heat is defined by the temperature difference."
    },
    {
      "q": "Standard atmospheric pressure is about:",
      "choices": [
        "101 kPa",
        "1 kPa",
        "1,000 kPa",
        "14.7 kPa"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 101,325 Pa ≈ 101 kPa. (b) is a hundred times too small. (c) is ten times too big. (d) is 14.7 psi, not kPa."
    },
    {
      "q": "Water's density is about:",
      "choices": [
        "1.2 kg/m³",
        "100 kg/m³",
        "1,000 kg/m³",
        "10,000 kg/m³"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Water is 1,000 kg/m³. (a) is air's density. (b) and (d) are ten times too small and too big."
    },
    {
      "q": "A body stores:",
      "choices": [
        "Heat",
        "Work",
        "Internal energy",
        "Temperature"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Internal energy is the stored energy. (a) and (b) are energy in transit, not stored. (d) temperature is a property, not stored energy."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Introduction to Thermodynamics: Systems, Energy, and Units: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what thermodynamics is and what a system, boundary, and surroundings are.</p>\n<p><strong>Key terms:</strong> Thermodynamics · System · Boundary · Surroundings · Closed system · Open system · Isolated system · Internal energy.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what thermodynamics is and what a system, boundary, and surroundings are.</li>\n<li>Compare open, closed, and isolated systems with examples.</li>\n<li>Name the forms of energy and state the units for heat, work, and power.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
