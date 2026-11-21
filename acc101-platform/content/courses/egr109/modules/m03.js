// egr109 - Module 3: The Second Law, Entropy, and Heat-Engine Cycles
module.exports = {
  "number": 3,
  "slug": "second-law-cycles",
  "title": "The Second Law, Entropy, and Heat-Engine Cycles",
  "estTime": "3–4 hours",
  "objectives": [
    "State the second law in plain words: heat flows from hot to cold, and no engine is 100% efficient.",
    "Calculate Carnot efficiency from hot and cold temperatures in kelvin.",
    "Explain entropy as the spreading out of energy.",
    "Describe the Otto and refrigeration cycles in plain words.",
    "Explain why a heat pump can deliver more heat than the electricity it uses."
  ],
  "sections": [
    {
      "heading": "The Second Law: Direction Matters",
      "html": "<p><p>The first law says energy is conserved; the second law says which way things can go. Heat flows by itself from hot to cold, never from cold to hot. A cup of tea cools to room temperature on its own, but it never heats itself back up. Every real process runs in one direction, and that direction is the one where energy spreads out and becomes less useful.</p></p>\n<p><p>The second law also limits engines: no engine can turn all its heat into work. Some heat must always be rejected to a cold sink. A perfect engine is impossible, and the best possible efficiency is set by the temperatures it works between — that is the Carnot limit, and no real engine can beat it.</p></p>\n"
    },
    {
      "heading": "Carnot Efficiency: The Ceiling",
      "html": "<p><p>The Carnot efficiency is η = 1 − Tc ÷ Th, with both temperatures in kelvin. An engine working between a hot source at 600 K and a cold sink at 300 K has a maximum efficiency of 1 − 300 ÷ 600 = 0.5, or 50%. Even a perfect engine wastes half its heat. Real engines do worse: a car engine is about 25–30% efficient, a power station about 35–45%.</p></p>\n<p><p>The formula shows the two ways to improve an engine: raise the hot temperature or lower the cold temperature. That is why power stations run steam as hot as their materials allow and condense it as cold as the cooling water allows. Check your temperatures are in kelvin — using °C in this formula gives a nonsense answer.</p></p>\n"
    },
    {
      "heading": "Entropy: Energy Spreading Out",
      "html": "<p><p>Entropy is a measure of how spread out energy is. A hot cup has its energy concentrated; as it cools, the energy spreads into the room and the entropy rises. Every real process increases the total entropy of the universe. That is why machines wear out, why heat leaks away, and why you cannot build a perpetual motion machine — the second law always collects its tax.</p></p>\n<p><p>Entropy is not just a slogan: engineers use it to find where a process wastes the most useful energy, and to design better heat exchangers, turbines, and refrigerators. A process with a big entropy rise is a process throwing useful energy away. Finding and shrinking those rises is a large part of energy engineering.</p></p>\n"
    },
    {
      "heading": "Cycles: Engines and Refrigerators",
      "html": "<p><p>A heat engine runs in a cycle: it takes heat from a hot source, turns part of it into work, and rejects the rest to a cold sink. A petrol engine (Otto cycle) burns fuel, expands the hot gas to push a piston, and exhausts the rest. A refrigerator runs the cycle backwards: it uses work to move heat from cold to hot — from inside the fridge to the kitchen. That is why the back of a fridge is warm.</p></p>\n<p><p>A heat pump is a refrigerator that heats your house: it moves heat from the cold outside air into the warm house, using electricity to drive the cycle. Because it moves heat rather than making it, it can deliver 3 kW of heat for 1 kW of electricity — a coefficient of performance (COP) of 3. That is not free energy; the extra heat comes from outside, and the second law is satisfied because work was put in.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Second law: heat flows hot to cold; no engine is 100% efficient.</li><li>Carnot efficiency η = 1 − Tc ÷ Th, in kelvin.</li><li>Entropy measures how spread out energy is; it always rises in real processes.</li><li>Engines turn heat into work; refrigerators and heat pumps move heat with work.</li><li>A heat pump's COP can exceed 1 because it moves heat, not makes it.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Using °C in the Carnot formula. Convert to kelvin first.</p><p><strong>Common mistake:</strong> Thinking a heat pump with COP 3 breaks the laws of physics. It moves heat from outside; the work input pays for the move.</p><p><strong>Ready check:</strong> If you can find the Carnot efficiency between 600 K and 300 K and explain a fridge, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Second law of thermodynamics",
      "def": "Heat flows by itself from hot to cold, and no engine can turn all heat into work."
    },
    {
      "term": "Carnot efficiency",
      "def": "The maximum possible efficiency of a heat engine: η = 1 − Tc ÷ Th, in kelvin."
    },
    {
      "term": "Entropy",
      "def": "A measure of how spread out energy is; it rises in every real process."
    },
    {
      "term": "Heat engine",
      "def": "A machine that turns heat into work in a cycle."
    },
    {
      "term": "Otto cycle",
      "def": "The cycle of a petrol engine: intake, compression, power, exhaust."
    },
    {
      "term": "Refrigeration cycle",
      "def": "A cycle that uses work to move heat from cold to hot."
    },
    {
      "term": "Heat pump",
      "def": "A machine that moves heat from outside into a building, using work."
    },
    {
      "term": "Coefficient of performance (COP)",
      "def": "Heat delivered divided by work input, for a heat pump or refrigerator."
    },
    {
      "term": "Hot source",
      "def": "The high-temperature place an engine takes heat from."
    },
    {
      "term": "Cold sink",
      "def": "The low-temperature place an engine rejects heat to."
    },
    {
      "term": "Reversible process",
      "def": "An ideal process with no losses, used as a limit for real ones."
    },
    {
      "term": "Irreversible process",
      "def": "A real process with losses, such as friction or heat leaking."
    },
    {
      "term": "Perpetual motion machine",
      "def": "An impossible machine that would break the first or second law."
    },
    {
      "term": "Kelvin",
      "def": "The SI temperature unit; essential for efficiency formulas."
    }
  ],
  "video": {
    "title": "Visualizing HVAC Excellence (VHE) – Ep. 8: Pressure-Enthalpy",
    "embedUrl": "https://www.youtube.com/embed/DFj1S6gjDo4",
    "note": "The pressure–enthalpy diagram visualised — the map that refrigeration and heat-pump cycles are drawn on.",
    "more": [
      {
        "title": "Inside a Scroll Compressor",
        "url": "https://www.youtube.com/watch?v=JLejG6V5Kgc"
      },
      {
        "title": "How to Adjust a TXV, TEV or TX Valve",
        "url": "https://www.youtube.com/watch?v=IPMIv-ro3kg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> An engine works between 800 K and 400 K. What is its Carnot efficiency?</p>",
      "solution": "<p><strong>Answer:</strong> η = 1 − 400 ÷ 800 = 0.5, or 50%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A power station works between 600 K and 300 K. What is its maximum efficiency?</p>",
      "solution": "<p><strong>Answer:</strong> η = 1 − 300 ÷ 600 = 0.5, or 50%. Its real efficiency will be lower, about 35–45%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A heat pump delivers 9 kW of heat using 3 kW of electricity. What is its COP?</p>",
      "solution": "<p><strong>Answer:</strong> COP = 9 ÷ 3 = 3.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Explain in plain words why a fridge is warm at the back.</p>",
      "solution": "<p><strong>Answer:</strong> It moves heat from inside the fridge to the kitchen, and the work it uses becomes heat too — so the back is warm.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A car engine is 25% efficient. It burns fuel worth 100 kW of heat. How much power reaches the wheels, and how much heat is rejected?</p>",
      "solution": "<p><strong>Answer:</strong> Work = 25 kW. Heat rejected = 100 − 25 = 75 kW.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain why no engine can be 100% efficient, in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> The second law says some heat must always be rejected to a cold sink. Turning all heat into work would need a cold sink at absolute zero, which cannot be reached.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The second law says heat flows by itself from:",
      "choices": [
        "Cold to hot",
        "Hot to cold",
        "Hot to hot",
        "Nowhere"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Heat flows hot to cold on its own. (a) needs work input, as in a fridge. (c) and (d) are meaningless."
    },
    {
      "q": "Carnot efficiency between 600 K and 300 K is:",
      "choices": [
        "25%",
        "50%",
        "100%",
        "200%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1 − 300 ÷ 600 = 0.5. (a) uses 300 ÷ 1,200. (c) would need a cold sink at 0 K. (d) is impossible."
    },
    {
      "q": "Carnot efficiency must be calculated with temperatures in:",
      "choices": [
        "°C",
        "°F",
        "Kelvin",
        "Any unit"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The formula needs absolute temperature. (a) and (b) give wrong ratios. (d) is wrong — only kelvin works."
    },
    {
      "q": "Entropy measures:",
      "choices": [
        "How hot something is",
        "How spread out energy is",
        "How much work is done",
        "How fast a gas moves"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Entropy rises as energy spreads. (a) is temperature. (c) is work. (d) is molecular speed."
    },
    {
      "q": "A heat pump with COP 3 delivers 6 kW of heat. How much electricity does it use?",
      "choices": [
        "18 kW",
        "6 kW",
        "2 kW",
        "3 kW"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 6 ÷ 3 = 2 kW. (a) multiplies. (b) is the heat delivered. (d) is the COP itself."
    },
    {
      "q": "A refrigerator moves heat from:",
      "choices": [
        "Hot to cold by itself",
        "Cold to hot, using work",
        "Nowhere to nowhere",
        "The kitchen to the fridge"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It uses work to push heat uphill. (a) is the natural direction, not what a fridge does. (c) is meaningless. (d) is backwards."
    },
    {
      "q": "A real car engine's efficiency is about:",
      "choices": [
        "25–30%",
        "90%",
        "100%",
        "5%"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Most of the fuel's energy becomes heat. (b) and (c) exceed the Carnot limit for a car engine. (d) is far too low."
    },
    {
      "q": "Raising the hot temperature of an engine:",
      "choices": [
        "Lowers its Carnot efficiency",
        "Raises its Carnot efficiency",
        "Does nothing",
        "Breaks the second law"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A bigger temperature gap means a higher ceiling. (a) is backwards. (c) temperature is in the formula. (d) it obeys the law."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — The Second Law, Entropy, and Heat-Engine Cycles: Quick Reference</h3>\n<p><strong>Core idea:</strong> State the second law in plain words: heat flows from hot to cold, and no engine is 100% efficient.</p>\n<p><strong>Key terms:</strong> Second law of thermodynamics · Carnot efficiency · Entropy · Heat engine · Otto cycle · Refrigeration cycle · Heat pump · Coefficient of performance (COP).</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>State the second law in plain words: heat flows from hot to cold, and no engine is 100% efficient.</li>\n<li>Calculate Carnot efficiency from hot and cold temperatures in kelvin.</li>\n<li>Explain entropy as the spreading out of energy.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
