// egr109 - Module 4: Heat Transfer by Conduction: Fourier's Law
module.exports = {
  "number": 4,
  "slug": "conduction-heat-transfer",
  "title": "Heat Transfer by Conduction: Fourier's Law",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain conduction and say where it happens: solids and still fluids.",
    "Use Fourier's law Q = kAΔT ÷ d to find heat flow through a wall.",
    "Compare thermal conductivities: metals, brick, insulation.",
    "Calculate thermal resistance R = d ÷ k and use it for a wall.",
    "Explain why insulation works and how thickness changes heat loss."
  ],
  "sections": [
    {
      "heading": "What Conduction Is",
      "html": "<p><p>Conduction is heat moving through a material by direct contact — molecules passing energy to their neighbours without the material itself moving. It is the main way heat moves through solids: through a wall, along a metal bar, through a cooking pan. Metals conduct well because their free electrons carry heat fast; insulation conducts poorly because its trapped air barely carries heat at all.</p></p>\n<p><p>Heat always flows from hot to cold, and the rate depends on three things: how good a conductor the material is, how big the area is, and how steep the temperature drop is. Double the area or double the temperature difference and the heat flow doubles. Double the thickness and the heat flow halves. That is Fourier's law in plain words.</p></p>\n"
    },
    {
      "heading": "Fourier's Law in Numbers",
      "html": "<p><p>Fourier's law is Q = kAΔT ÷ d, where k is the thermal conductivity in W/m·K, A is the area in m², ΔT is the temperature difference in K, and d is the thickness in m. Example: a brick wall with k = 0.72 W/m·K, area 7.5 m², thickness 0.1 m, and ΔT = 20 K loses Q = 0.72 × 7.5 × 20 ÷ 0.1 = 1,080 W. That is more than a kilowatt of heat escaping through one small wall — which is why insulation matters.</p></p>\n<p><p>Check the units: (W/m·K) × m² × K ÷ m = W. And check the sense: a kilowatt through a bare brick wall on a cold day is realistic — an uninsulated house loses several kilowatts through its walls, roof, and windows. If your answer came out as 1 W or 1 MW, a unit was wrong.</p></p>\n"
    },
    {
      "heading": "Thermal Resistance: The Easy Way to Add Layers",
      "html": "<p><p>For a single layer, thermal resistance is R = d ÷ k, in m²·K/W. Heat flow is then Q = AΔT ÷ R. The brick wall above has R = 0.1 ÷ 0.72 = 0.139 m²·K/W. Add 50 mm of insulation (k = 0.04 W/m·K) and its resistance is R = 0.05 ÷ 0.04 = 1.25 m²·K/W. Resistances in series add: R_total = 0.139 + 1.25 = 1.389 m²·K/W. The heat flow falls to Q = 7.5 × 20 ÷ 1.389 = 108 W — a tenth of the bare wall. That is the whole case for insulation in one calculation.</p></p>\n<p><p>Thermal conductivity values to remember: copper about 400 W/m·K, steel about 50, brick about 0.72, wood about 0.15, insulation about 0.04, still air about 0.026. The gap between metal and insulation is a factor of ten thousand — which is why a metal pan handle gets hot and an insulated wall does not.</p></p>\n"
    },
    {
      "heading": "Where Conduction Matters",
      "html": "<p><p>Conduction decides the heat loss of buildings, the size of a heat sink on an electronic part, and the insulation on a pipe or a fridge. A hot water pipe with no insulation loses heat all along its length; 25 mm of insulation can cut that loss by 80% or more. A CPU heat sink works by conduction through its metal fins, then convection to the air — conduction and convection work as a team in almost every real device.</p></p>\n<p><p>Designers fight conduction with low-k materials and with thickness, and they use conduction where they want heat to move — copper in a heat exchanger, aluminium in a heat sink. The same law governs both: Q = kAΔT ÷ d. Learn the k values of common materials and you can estimate any heat loss on the back of an envelope.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Conduction is heat moving through a material by contact.</li><li>Fourier's law: Q = kAΔT ÷ d.</li><li>Thermal resistance R = d ÷ k; resistances in series add.</li><li>Insulation works because its k is tiny and its R is large.</li><li>Metals conduct thousands of times better than insulation.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Forgetting to convert thickness to metres. A 100 mm wall is 0.1 m, not 100 m.</p><p><strong>Common mistake:</strong> Adding conductivities instead of resistances for layers. Resistances add; conductivities do not.</p><p><strong>Ready check:</strong> If you can find the heat loss through a brick wall and show how insulation cuts it, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Conduction",
      "def": "Heat moving through a material by direct contact, without the material moving."
    },
    {
      "term": "Fourier's law",
      "def": "Q = kAΔT ÷ d, the law of conduction heat flow."
    },
    {
      "term": "Thermal conductivity (k)",
      "def": "How well a material conducts heat, in W/m·K."
    },
    {
      "term": "Thermal resistance (R)",
      "def": "Resistance to heat flow: R = d ÷ k, in m²·K/W."
    },
    {
      "term": "Temperature difference (ΔT)",
      "def": "The drop in temperature across a material, in K."
    },
    {
      "term": "Insulation",
      "def": "A material with very low thermal conductivity, used to cut heat loss."
    },
    {
      "term": "Heat sink",
      "def": "A metal part that spreads heat out so it can escape to the air."
    },
    {
      "term": "Steady state",
      "def": "A condition where temperatures do not change with time."
    },
    {
      "term": "Heat flux",
      "def": "Heat flow per unit area, in W/m²."
    },
    {
      "term": "Copper",
      "def": "A metal with very high thermal conductivity, about 400 W/m·K."
    },
    {
      "term": "Brick",
      "def": "A building material with k ≈ 0.72 W/m·K."
    },
    {
      "term": "U-value",
      "def": "Overall heat transfer coefficient: U = 1 ÷ R_total, in W/m²·K."
    },
    {
      "term": "Series resistance",
      "def": "Resistances that add when heat flows through layers one after another."
    },
    {
      "term": "Thermal bridge",
      "def": "A path of high conductivity through insulation, such as a steel beam."
    }
  ],
  "video": {
    "title": "Conduction Process HMT Tutorial- 4, Heat and Mass Transfer, Mechanical",
    "embedUrl": "https://www.youtube.com/embed/QkK1-X0I_qY",
    "note": "Conduction explained with Fourier's law: how heat moves through a solid, and what free electrons and lattice vibration have to do with it.",
    "more": [
      {
        "title": "THREE MODES OF HEAT TRANSFER | Real-Life Applications",
        "url": "https://www.youtube.com/watch?v=06zEuPomYyM"
      },
      {
        "title": "3D How Refrigeration and Air Conditioning Works P1 - Components",
        "url": "https://www.youtube.com/watch?v=p6GXJdRUz9E"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A wall has k = 0.72 W/m·K, area 10 m², thickness 0.2 m, and ΔT = 15 K. Find the heat loss.</p>",
      "solution": "<p><strong>Answer:</strong> Q = 0.72 × 10 × 15 ÷ 0.2 = 540 W.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> What is the thermal resistance of a 0.1 m brick layer with k = 0.72 W/m·K?</p>",
      "solution": "<p><strong>Answer:</strong> R = 0.1 ÷ 0.72 = 0.139 m²·K/W.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A wall has R_total = 2.0 m²·K/W, area 12 m², and ΔT = 25 K. Find the heat loss.</p>",
      "solution": "<p><strong>Answer:</strong> Q = 12 × 25 ÷ 2.0 = 150 W.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Insulation 0.1 m thick has k = 0.04 W/m·K. What is its R value?</p>",
      "solution": "<p><strong>Answer:</strong> R = 0.1 ÷ 0.04 = 2.5 m²·K/W.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A copper bar (k = 400) and a steel bar (k = 50) have the same size and ΔT. How many times more heat does the copper bar carry?</p>",
      "solution": "<p><strong>Answer:</strong> 400 ÷ 50 = 8 times more.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain why a 50 mm layer of insulation cuts heat loss far more than a 50 mm layer of brick.</p>",
      "solution": "<p><strong>Answer:</strong> Insulation's k is about 0.04 against brick's 0.72, so its resistance is about 18 times larger for the same thickness.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Conduction is heat moving through a material by:",
      "choices": [
        "Bulk movement of fluid",
        "Direct contact, molecule to molecule",
        "Electromagnetic waves",
        "Radiation only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Conduction is contact transfer in solids. (a) is convection. (c) and (d) are radiation."
    },
    {
      "q": "Fourier's law is:",
      "choices": [
        "Q = kAΔT ÷ d",
        "Q = mcΔT",
        "Q = hAΔT",
        "Q = σAT⁴"
      ],
      "answer": 0,
      "explanation": "Correct: (a). That is conduction. (b) is heating a mass. (c) is convection. (d) is radiation."
    },
    {
      "q": "A brick wall (k = 0.72, A = 7.5 m², d = 0.1 m, ΔT = 20 K) loses about:",
      "choices": [
        "1,080 W",
        "108 W",
        "54 W",
        "10,800 W"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 0.72 × 7.5 × 20 ÷ 0.1 = 1,080 W. (b) is the insulated value. (c) halves it twice. (d) is ten times too big."
    },
    {
      "q": "Thermal resistance R equals:",
      "choices": [
        "k ÷ d",
        "d ÷ k",
        "k × d",
        "A ÷ k"
      ],
      "answer": 1,
      "explanation": "Correct: (b). R = d ÷ k. (a) is the inverse. (c) multiplies instead of dividing. (d) mixes area in."
    },
    {
      "q": "Two layers in series have resistances 0.14 and 1.25 m²·K/W. Total R is:",
      "choices": [
        "1.39 m²·K/W",
        "1.11 m²·K/W",
        "0.13 m²·K/W",
        "0.175 m²·K/W"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 0.14 + 1.25 = 1.39. (b) subtracts. (c) divides. (d) multiplies."
    },
    {
      "q": "Which material has the lowest thermal conductivity?",
      "choices": [
        "Copper",
        "Steel",
        "Brick",
        "Insulation"
      ],
      "answer": 3,
      "explanation": "Correct: (d). Insulation is about 0.04 W/m·K. (a) copper is 400. (b) steel is 50. (c) brick is 0.72."
    },
    {
      "q": "Doubling the thickness of a wall:",
      "choices": [
        "Doubles the heat loss",
        "Halves the heat loss",
        "Does nothing",
        "Quadruples the heat loss"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Q is proportional to 1 ÷ d. (a) is backwards. (c) thickness is in the formula. (d) is the square, not the case."
    },
    {
      "q": "A heat sink works by:",
      "choices": [
        "Insulating the part",
        "Conducting heat away through metal fins",
        "Blocking air flow",
        "Storing heat forever"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Metal fins conduct heat out to the air. (a) is the opposite. (c) it needs air flow. (d) heat must leave, not be stored."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Heat Transfer by Conduction: Fourier's Law: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain conduction and say where it happens: solids and still fluids.</p>\n<p><strong>Key terms:</strong> Conduction · Fourier's law · Thermal conductivity (k) · Thermal resistance (R) · Temperature difference (ΔT) · Insulation · Heat sink · Steady state.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain conduction and say where it happens: solids and still fluids.</li>\n<li>Use Fourier's law Q = kAΔT ÷ d to find heat flow through a wall.</li>\n<li>Compare thermal conductivities: metals, brick, insulation.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
