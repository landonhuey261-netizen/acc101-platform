// egr109 - Module 11: Thermodynamic Cycles: Otto, Diesel, and Refrigeration
module.exports = {
  "number": 11,
  "slug": "thermodynamic-cycles",
  "title": "Thermodynamic Cycles: Otto, Diesel, and Refrigeration",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the four strokes of a petrol engine and the Otto cycle behind them.",
    "Compare the Otto and Diesel cycles and say why diesels are more efficient.",
    "Trace a refrigeration cycle through its four parts: evaporator, compressor, condenser, expansion valve.",
    "Explain superheat and subcooling in plain words.",
    "Calculate a simple cycle efficiency or COP from given numbers."
  ],
  "sections": [
    {
      "heading": "The Otto Cycle: Petrol Engines",
      "html": "<p><p>A petrol engine runs on the Otto cycle: intake (air and fuel drawn in), compression (the piston squeezes the mixture), power (the spark fires and the burning gas pushes the piston down), and exhaust (the burnt gas is pushed out). The compression ratio — how much the mixture is squeezed — sets the efficiency: a higher ratio means more of the fuel's energy becomes work, up to the point where the fuel knocks (explodes instead of burning smoothly).</p></p>\n<p><p>A typical car engine has a compression ratio of about 10:1 and an efficiency of about 25–30%. Raising the ratio to 12:1 would help efficiency but needs higher-octane fuel to avoid knocking. The Otto cycle is a good example of the second law in action: even a perfect engine at these temperatures could not beat the Carnot limit, and a real one does much worse because of friction, heat loss, and incomplete burning.</p></p>\n"
    },
    {
      "heading": "The Diesel Cycle",
      "html": "<p><p>A diesel engine compresses air alone to a very high ratio (about 16:1 to 22:1), so the air gets hot enough to ignite the fuel when it is injected — no spark plug is needed. Because the compression ratio is higher, a diesel is more efficient than a petrol engine, typically 35–45%. That is why trucks and ships use diesels: over a long life, the fuel saving pays for the heavier, more expensive engine.</p></p>\n<p><p>Diesels also run leaner (more air than fuel) and last longer, but they are heavier, noisier, and produce more nitrogen oxides and particulates, which need exhaust treatment. The choice between petrol and diesel is a trade-off between efficiency, cost, weight, and emissions — not a simple contest.</p></p>\n"
    },
    {
      "heading": "The Refrigeration Cycle",
      "html": "<p><p>A refrigerator runs a vapour-compression cycle with four parts. In the evaporator, liquid refrigerant boils at low pressure and takes heat from inside the fridge. The compressor squeezes the vapour, raising its temperature and pressure. In the condenser, the hot vapour gives its heat to the kitchen air and condenses back to liquid. The expansion valve drops the pressure, cooling the liquid so it can boil again in the evaporator. Round and round it goes, moving heat from cold to hot.</p></p>\n<p><p>The refrigerant's pressure–temperature relationship is the key: at low pressure it boils at a low temperature (so it can take heat from a cold fridge), and at high pressure it condenses at a high temperature (so it can give heat to a warm kitchen). Change the refrigerant and you change the temperatures — which is why the industry moved from CFCs to HFCs and now to lower-impact refrigerants.</p></p>\n"
    },
    {
      "heading": "Superheat, Subcooling, and COP",
      "html": "<p><p>Superheat is heating the vapour a little above its boiling point after it leaves the evaporator, so no liquid reaches the compressor (liquid in a compressor damages it). Subcooling is cooling the liquid a little below its condensing temperature after it leaves the condenser, so it does not flash into vapour before the expansion valve. A technician checks both with gauges and a thermometer — they are the vital signs of a refrigeration system.</p></p>\n<p><p>A refrigerator's COP is the heat removed divided by the work put in. A fridge that removes 300 W of heat using 100 W of electricity has a COP of 3. A heat pump heating a house has a COP of 3–4, which is why it is cheaper to run than a direct electric heater (COP 1). The COP is always limited by the temperatures involved — the bigger the gap between cold and hot, the lower the COP.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Otto cycle: intake, compression, power, exhaust; petrol engines, about 25–30% efficient.</li><li>Diesel cycle: compression ignition, higher ratio, about 35–45% efficient.</li><li>Refrigeration cycle: evaporator, compressor, condenser, expansion valve.</li><li>Superheat protects the compressor; subcooling protects the expansion valve.</li><li>COP is heat moved divided by work in.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Thinking a refrigerator makes cold. It moves heat from inside to outside — the 'cold' is just the absence of heat.</p><p><strong>Common mistake:</strong> Forgetting that a diesel has no spark plug. It ignites fuel with hot compressed air.</p><p><strong>Ready check:</strong> If you can trace a refrigeration cycle and explain a heat pump's COP, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Otto cycle",
      "def": "The four-stroke cycle of a petrol engine."
    },
    {
      "term": "Diesel cycle",
      "def": "The cycle of a diesel engine, with compression ignition."
    },
    {
      "term": "Compression ratio",
      "def": "How much the gas is squeezed: cylinder volume at bottom dead centre divided by volume at top dead centre."
    },
    {
      "term": "Knocking",
      "def": "Fuel exploding instead of burning smoothly, caused by too high a compression ratio."
    },
    {
      "term": "Evaporator",
      "def": "The part of a refrigeration system where refrigerant boils and takes in heat."
    },
    {
      "term": "Compressor",
      "def": "The part that squeezes refrigerant vapour, raising its temperature and pressure."
    },
    {
      "term": "Condenser",
      "def": "The part where hot refrigerant vapour gives off heat and condenses to liquid."
    },
    {
      "term": "Expansion valve",
      "def": "The valve that drops refrigerant pressure so it can boil again."
    },
    {
      "term": "Refrigerant",
      "def": "The fluid that carries heat around a refrigeration cycle."
    },
    {
      "term": "Superheat",
      "def": "Heating vapour above its boiling point, to protect the compressor."
    },
    {
      "term": "Subcooling",
      "def": "Cooling liquid below its condensing temperature, to protect the expansion valve."
    },
    {
      "term": "COP",
      "def": "Coefficient of performance: heat moved divided by work put in."
    },
    {
      "term": "Vapour-compression cycle",
      "def": "The refrigeration cycle used in fridges, air conditioners, and heat pumps."
    },
    {
      "term": "Four-stroke engine",
      "def": "An engine with intake, compression, power, and exhaust strokes."
    }
  ],
  "video": {
    "title": "Inside a Scroll Compressor",
    "embedUrl": "https://www.youtube.com/embed/JLejG6V5Kgc",
    "note": "Inside a scroll compressor — the heart of a modern refrigeration and air-conditioning system, and how it squeezes refrigerant vapour.",
    "more": [
      {
        "title": "3D How Refrigeration and Air Conditioning Works P1 - Components",
        "url": "https://www.youtube.com/watch?v=p6GXJdRUz9E"
      },
      {
        "title": "How to Adjust a TXV, TEV or TX Valve",
        "url": "https://www.youtube.com/watch?v=IPMIv-ro3kg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Name the four strokes of a petrol engine in order.</p>",
      "solution": "<p><strong>Answer:</strong> Intake, compression, power, exhaust.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A diesel engine has a compression ratio of 18:1 and a petrol engine 10:1. Which is more efficient, and why?</p>",
      "solution": "<p><strong>Answer:</strong> The diesel: a higher compression ratio means more of the fuel's energy becomes work.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Trace the refrigerant around a fridge in order, naming the four parts.</p>",
      "solution": "<p><strong>Answer:</strong> Evaporator (boils, takes in heat) → compressor (squeezes vapour) → condenser (gives off heat, condenses) → expansion valve (drops pressure) → back to the evaporator.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A fridge removes 400 W of heat using 100 W of electricity. What is its COP?</p>",
      "solution": "<p><strong>Answer:</strong> COP = 400 ÷ 100 = 4.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain in plain words what superheat is and why it matters.</p>",
      "solution": "<p><strong>Answer:</strong> Superheat is heating the vapour above its boiling point after the evaporator, so no liquid reaches and damages the compressor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A heat pump has a COP of 3 and uses 2 kW of electricity. How much heat does it deliver?</p>",
      "solution": "<p><strong>Answer:</strong> Heat = 3 × 2 = 6 kW.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The four strokes of a petrol engine in order are:",
      "choices": [
        "Power, exhaust, intake, compression",
        "Intake, compression, power, exhaust",
        "Compression, intake, exhaust, power",
        "Exhaust, power, compression, intake"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Intake, compression, power, exhaust. (a), (c), and (d) are out of order."
    },
    {
      "q": "Diesel engines are more efficient than petrol engines mainly because:",
      "choices": [
        "They are bigger",
        "They use a higher compression ratio",
        "They have spark plugs",
        "They burn more fuel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Higher compression means more work from the fuel. (a) size is not the cause. (c) diesels have no spark plugs. (d) they burn less fuel for the same work."
    },
    {
      "q": "A diesel engine ignites its fuel by:",
      "choices": [
        "A spark plug",
        "Hot compressed air",
        "A glow plug only",
        "A match"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Compression heats the air enough to ignite the fuel. (a) is a petrol engine. (c) glow plugs only help starting. (d) is not an engine part."
    },
    {
      "q": "In a refrigeration cycle, the evaporator is where refrigerant:",
      "choices": [
        "Condenses and gives off heat",
        "Boils and takes in heat",
        "Is compressed",
        "Drops in pressure"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It boils at low pressure and absorbs heat. (a) is the condenser. (c) is the compressor. (d) is the expansion valve."
    },
    {
      "q": "The condenser in a fridge:",
      "choices": [
        "Takes heat from inside the fridge",
        "Gives heat to the kitchen air as refrigerant condenses",
        "Compresses the vapour",
        "Boils the refrigerant"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hot vapour condenses and releases heat outside. (a) is the evaporator. (c) is the compressor. (d) is the evaporator."
    },
    {
      "q": "Superheat protects:",
      "choices": [
        "The evaporator",
        "The compressor, by making sure no liquid reaches it",
        "The condenser",
        "The expansion valve"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Liquid in a compressor damages it. (a) the evaporator makes the vapour. (c) the condenser is after the compressor. (d) subcooling protects the expansion valve."
    },
    {
      "q": "A heat pump with COP 4 uses 1.5 kW of electricity. It delivers:",
      "choices": [
        "1.5 kW",
        "4 kW",
        "6 kW",
        "0.375 kW"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 4 × 1.5 = 6 kW. (a) is the electricity alone. (b) is the COP alone. (d) divides instead of multiplying."
    },
    {
      "q": "A refrigerator does not make cold; it:",
      "choices": [
        "Makes heat",
        "Moves heat from inside to outside",
        "Destroys heat",
        "Stores cold"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It pumps heat from cold to hot using work. (a) it moves heat, and the work becomes heat too. (c) heat cannot be destroyed. (d) cold is not a substance to store."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Thermodynamic Cycles: Otto, Diesel, and Refrigeration: Quick Reference</h3>\n<p><strong>Core idea:</strong> Describe the four strokes of a petrol engine and the Otto cycle behind them.</p>\n<p><strong>Key terms:</strong> Otto cycle · Diesel cycle · Compression ratio · Knocking · Evaporator · Compressor · Condenser · Expansion valve.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Describe the four strokes of a petrol engine and the Otto cycle behind them.</li>\n<li>Compare the Otto and Diesel cycles and say why diesels are more efficient.</li>\n<li>Trace a refrigeration cycle through its four parts: evaporator, compressor, condenser, expansion valve.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
