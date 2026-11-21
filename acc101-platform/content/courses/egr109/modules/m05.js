// egr109 - Module 5: Heat Transfer by Convection and Radiation
module.exports = {
  "number": 5,
  "slug": "convection-radiation",
  "title": "Heat Transfer by Convection and Radiation",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain convection: heat carried by moving fluid.",
    "Use Newton's law of cooling Q = hAΔT to find convective heat loss.",
    "Compare natural and forced convection with examples.",
    "Explain radiation and the Stefan–Boltzmann law in plain words.",
    "Say when each mode of heat transfer dominates."
  ],
  "sections": [
    {
      "heading": "Convection: Heat That Travels With the Fluid",
      "html": "<p><p>Convection is heat carried by a moving fluid — air or water that picks up heat in one place and drops it off in another. A radiator warms a room by convection: air touches the hot radiator, rises, and carries the heat across the room. A car engine is cooled the same way, with water carrying heat from the engine to the radiator and air carrying it away from there.</p></p>\n<p><p>Natural convection happens when warm fluid rises on its own because it is lighter — the air above a radiator, the water in a kettle before it boils. Forced convection happens when a fan or a pump moves the fluid — a fan on a heat sink, a pump in a central heating system. Forced convection moves far more heat than natural convection, which is why fans and pumps are everywhere.</p></p>\n"
    },
    {
      "heading": "Newton's Law of Cooling",
      "html": "<p><p>Convective heat transfer is Q = hAΔT, where h is the convective heat transfer coefficient in W/m²·K, A is the area, and ΔT is the temperature difference between the surface and the fluid. For still air, h is about 5–10 W/m²·K; for a fan blowing over a surface, 20–100; for water flowing over a surface, 500–10,000. The coefficient is not a property of the material — it depends on the flow, which is why it is given as a range.</p></p>\n<p><p>Example: a radiator panel of 2 m² at 60 °C in a room at 20 °C, with h = 8 W/m²·K for natural convection. Q = 8 × 2 × 40 = 640 W. Put a fan on it with h = 40 and the same panel gives 40 × 2 × 40 = 3,200 W. That is why a fan heater is small and a plain radiator is big — the fan multiplies the heat transfer.</p></p>\n"
    },
    {
      "heading": "Radiation: Heat Without Touching",
      "html": "<p><p>Radiation is heat carried by electromagnetic waves, mostly infrared. It needs no material at all — the Sun's heat crosses empty space to reach the Earth. Every surface gives off radiation according to its temperature, and the rate grows very fast with temperature: the Stefan–Boltzmann law says Q = εσAT⁴, where T is in kelvin and σ is 5.67 × 10⁻⁸ W/m²·K⁴. Doubling the absolute temperature multiplies the radiation by sixteen.</p></p>\n<p><p>Emissivity ε (0 to 1) says how good a surface is at radiating: a matt black surface is near 1, a shiny polished metal is near 0.05. That is why a shiny thermos flask keeps drinks hot — its shiny walls barely radiate. At room temperature, radiation is usually smaller than convection; at furnace temperatures, radiation dominates everything.</p></p>\n"
    },
    {
      "heading": "All Three Modes Together",
      "html": "<p><p>Real heat transfer uses all three modes at once. A wall loses heat by conduction through the brick, by convection from its surfaces to the air, and by a little radiation. A heat exchanger uses conduction through its metal walls and convection on both sides. A thermos flask fights all three: a vacuum stops conduction and convection, and shiny walls stop radiation.</p></p>\n<p><p>When you size a heater or an insulator, work out which mode dominates and attack that one. A hot pipe in still air loses heat mostly by natural convection and radiation — insulate it and both fall. A CPU loses heat mostly by forced convection from its fan — a bigger fan or a bigger heat sink is the fix. Name the dominant mode before you choose the solution.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Convection is heat carried by moving fluid.</li><li>Newton's law: Q = hAΔT.</li><li>Forced convection moves far more heat than natural convection.</li><li>Radiation needs no material and grows with T⁴.</li><li>Real systems use all three modes; find the dominant one.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Treating h as a material property like k. It depends on the flow — still air and a fan give very different h values.</p><p><strong>Common mistake:</strong> Using °C in the Stefan–Boltzmann law. T must be in kelvin, and it is raised to the fourth power.</p><p><strong>Ready check:</strong> If you can find the heat a radiator gives off and explain why a thermos flask is shiny, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Convection",
      "def": "Heat carried by a moving fluid."
    },
    {
      "term": "Natural convection",
      "def": "Convection driven by warm fluid rising on its own."
    },
    {
      "term": "Forced convection",
      "def": "Convection driven by a fan or pump."
    },
    {
      "term": "Newton's law of cooling",
      "def": "Q = hAΔT, the law of convective heat transfer."
    },
    {
      "term": "Heat transfer coefficient (h)",
      "def": "How well heat passes from a surface to a fluid, in W/m²·K."
    },
    {
      "term": "Radiation",
      "def": "Heat carried by electromagnetic waves, needing no material."
    },
    {
      "term": "Stefan–Boltzmann law",
      "def": "Q = εσAT⁴, the law of radiation heat transfer."
    },
    {
      "term": "Emissivity (ε)",
      "def": "How good a surface is at radiating heat, from 0 to 1."
    },
    {
      "term": "Infrared",
      "def": "The invisible light that carries most radiated heat."
    },
    {
      "term": "Heat exchanger",
      "def": "A device that transfers heat from one fluid to another."
    },
    {
      "term": "Thermos flask",
      "def": "A vacuum flask that fights conduction, convection, and radiation."
    },
    {
      "term": "Boundary layer",
      "def": "The thin layer of slow-moving fluid next to a surface."
    },
    {
      "term": "Fan heater",
      "def": "A heater that uses forced convection to give more heat from a small size."
    },
    {
      "term": "Absolute temperature",
      "def": "Temperature in kelvin, measured from absolute zero."
    }
  ],
  "video": {
    "title": "HVAC Training Basics for New Techs: Gauges, Pressures, & Airflow",
    "embedUrl": "https://www.youtube.com/embed/NOWQsrjm4AY",
    "note": "HVAC training basics: gauges, pressures, and airflow — how air moves heat in real heating and cooling systems.",
    "more": [
      {
        "title": "Conduction Process HMT Tutorial- 4, Heat and Mass Transfer, Mechanical",
        "url": "https://www.youtube.com/watch?v=QkK1-X0I_qY"
      },
      {
        "title": "3D How Refrigeration and Air Conditioning Works P1 - Components",
        "url": "https://www.youtube.com/watch?v=p6GXJdRUz9E"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A radiator panel of 3 m² at 55 °C sits in a room at 20 °C, with h = 10 W/m²·K. How much heat does it give off?</p>",
      "solution": "<p><strong>Answer:</strong> Q = 10 × 3 × 35 = 1,050 W.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A fan raises h from 10 to 50 W/m²·K on the same panel. How much heat does it now give off?</p>",
      "solution": "<p><strong>Answer:</strong> Q = 50 × 3 × 35 = 5,250 W — five times more.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Explain the difference between natural and forced convection in one sentence each.</p>",
      "solution": "<p><strong>Answer:</strong> Natural convection: warm fluid rises on its own. Forced convection: a fan or pump moves the fluid.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A shiny surface has emissivity 0.05 and a matt black surface has 0.95. Which radiates more, and by what factor?</p>",
      "solution": "<p><strong>Answer:</strong> The black surface radiates 0.95 ÷ 0.05 = 19 times more, at the same temperature and area.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why is a thermos flask shiny inside?</p>",
      "solution": "<p><strong>Answer:</strong> Shiny walls have low emissivity, so they radiate very little heat.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A hot pipe loses heat by convection and radiation. You insulate it. Which modes does insulation cut, and how?</p>",
      "solution": "<p><strong>Answer:</strong> It cuts both: the insulation's outer surface is cooler (less convection and radiation) and conduction through the insulation is slow.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Convection is heat carried by:",
      "choices": [
        "A solid bar",
        "A moving fluid",
        "Electromagnetic waves",
        "A vacuum"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Convection needs a moving fluid. (a) is conduction. (c) is radiation. (d) a vacuum cannot convect."
    },
    {
      "q": "Newton's law of cooling is:",
      "choices": [
        "Q = kAΔT ÷ d",
        "Q = hAΔT",
        "Q = mcΔT",
        "Q = σAT⁴"
      ],
      "answer": 1,
      "explanation": "Correct: (b). That is convection. (a) is conduction. (c) is heating a mass. (d) is radiation without emissivity."
    },
    {
      "q": "A panel of 2 m², h = 8, ΔT = 40 K gives off:",
      "choices": [
        "640 W",
        "320 W",
        "1,280 W",
        "64 W"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 8 × 2 × 40 = 640 W. (b) halves it. (c) doubles it. (d) forgets the area."
    },
    {
      "q": "Forced convection compared with natural convection:",
      "choices": [
        "Moves less heat",
        "Moves far more heat",
        "Moves the same heat",
        "Needs no fan"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A fan or pump multiplies the heat transfer. (a) is backwards. (c) is wrong — h is much larger. (d) forced convection is defined by the fan or pump."
    },
    {
      "q": "Radiation can travel through:",
      "choices": [
        "A vacuum",
        "Only solids",
        "Only liquids",
        "Only air"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Radiation needs no material — sunlight crosses space. (b), (c), and (d) all wrongly limit it to a material."
    },
    {
      "q": "The Stefan–Boltzmann law says radiation grows with:",
      "choices": [
        "Temperature, linearly",
        "Temperature to the fourth power",
        "Area squared",
        "Emissivity squared"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Q is proportional to T⁴ in kelvin. (a) is linear, which is wrong. (c) area is linear. (d) emissivity is linear."
    },
    {
      "q": "A matt black surface compared with a shiny one:",
      "choices": [
        "Radiates less",
        "Radiates more",
        "Radiates the same",
        "Does not radiate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Black has emissivity near 1, shiny metal near 0.05. (a) is backwards. (c) emissivity differs greatly. (d) all surfaces radiate."
    },
    {
      "q": "A thermos flask fights heat loss with:",
      "choices": [
        "A vacuum and shiny walls",
        "Thick metal walls",
        "A fan",
        "A heater"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Vacuum stops conduction and convection; shiny walls stop radiation. (b) thick metal conducts heat. (c) a fan would move heat. (d) a heater adds heat, it does not insulate."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Heat Transfer by Convection and Radiation: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain convection: heat carried by moving fluid.</p>\n<p><strong>Key terms:</strong> Convection · Natural convection · Forced convection · Newton's law of cooling · Heat transfer coefficient (h) · Radiation · Stefan–Boltzmann law · Emissivity (ε).</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain convection: heat carried by moving fluid.</li>\n<li>Use Newton's law of cooling Q = hAΔT to find convective heat loss.</li>\n<li>Compare natural and forced convection with examples.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
