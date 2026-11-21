// egr109 - Module 12: Putting It Together: Designing a Heating and Pumping System
module.exports = {
  "number": 12,
  "slug": "system-design-savings",
  "title": "Putting It Together: Designing a Heating and Pumping System",
  "estTime": "3–4 hours",
  "objectives": [
    "Work through a full system design: heat loss, heater size, pipe size, and pump size.",
    "Check every number: power, flow, head, and efficiency.",
    "Explain the design in plain words to a customer.",
    "Spot the safety and maintenance points in a finished design.",
    "Say what to check first when the system does not perform."
  ],
  "sections": [
    {
      "heading": "The Design Job: A Small Workshop",
      "html": "<p><p>Here is the job: a workshop 10 m × 6 m × 3 m high needs heating, and a water tank on the roof needs filling from a ground tank. First the heating: the walls total 96 m² (two 10 m walls and two 6 m walls, each 3 m high, ignoring windows for this first pass). The wall is brick (0.1 m, k = 0.72) plus 50 mm of insulation (k = 0.04). R_total = 0.139 + 1.25 = 1.389 m²·K/W. On a cold day (inside 20 °C, outside 0 °C, ΔT = 20 K), the wall heat loss is Q = 96 × 20 ÷ 1.389 = 1,382 W. Add the roof, floor, and windows in a real design — this is the wall part only.</p></p>\n<p><p>Now the pumping: the roof tank is 8 m above the ground tank, the pipe is 25 m long and 0.05 m in diameter, and the flow needed is 0.005 m³/s (5 L/s). Velocity is Q ÷ A = 0.005 ÷ (π × 0.025²) = 0.005 ÷ 0.001963 = 2.55 m/s. Friction loss with f = 0.02 is h_f = 0.02 × (25 ÷ 0.05) × (2.55² ÷ 19.62) = 0.02 × 500 × 0.331 = 3.31 m. Minor losses (four elbows at K = 0.9) are 4 × 0.9 × 0.331 = 1.19 m. Total head is 8 + 3.31 + 1.19 = 12.5 m.</p></p>\n"
    },
    {
      "heading": "Sizing the Heater and the Pump",
      "html": "<p><p>The heater must cover the wall loss of 1,382 W plus the roof, floor, and window losses and a margin for cold mornings — a 3 kW heater is a sensible pick for this first pass, with the full calculation to follow. The pump power is P = ρgQH ÷ η = 1,000 × 9.81 × 0.005 × 12.5 ÷ 0.70 = 876 W, about 0.88 kW — so a 1.1 kW pump motor is the right size. Check the Reynolds number too: Re = 1,000 × 2.55 × 0.05 ÷ 0.001 = 127,500, so the flow is turbulent and the friction factor of 0.02 is reasonable.</p></p>\n<p><p>Check the numbers tie out: the pump lifts 5 kg/s of water by 12.5 m, which is 5 × 9.81 × 12.5 = 613 W of useful power; at 70% efficiency the input is 613 ÷ 0.70 = 876 W, which matches. If the two routes to the answer disagree, one of them is wrong — find it before you order anything.</p></p>\n"
    },
    {
      "heading": "Controls, Safety, and Maintenance",
      "html": "<p><p>The heating system needs a thermostat, a frost setting, and a way to turn it down at night. The pump needs a float switch in the roof tank so it stops when the tank is full, and a dry-run cut-out so it never runs with no water (running dry destroys the seals in minutes). Both systems need an isolator switch within reach, and the pump needs a non-return valve so the water does not run back down when it stops.</p></p>\n<p><p>Maintenance is simple and regular: check the heater and the insulation once a year, bleed the radiators, check the pump's suction strainer monthly, and listen for cavitation (a gravel sound) or bearing noise. Write the checks on a card on the wall next to the equipment — a system that is easy to maintain is a system that keeps working.</p></p>\n"
    },
    {
      "heading": "Presenting Your Design",
      "html": "<p><p>Present the design in plain words: the workshop loses about 1.4 kW through its walls on a cold day, so a 3 kW heater covers the walls, roof, and windows with margin. The pump lifts 5 litres a second by 8 m through 25 m of pipe, needing 12.5 m of head and a 1.1 kW motor. The insulation cuts the wall loss from about 13.8 kW (bare brick) to 1.4 kW — the insulation pays for itself in one winter.</p></p>\n<p><p>Write the numbers in a table: heat loss by part, heater size, flow, velocity, head loss by part, total head, pump power, motor size. Then list the parts: heater, thermostat, pump, pipe, elbows, float switch, non-return valve, isolator. If a colleague can check your numbers from the table alone, the design is ready to build.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Work from the load: heat loss first, then the heater; flow and head first, then the pump.</li><li>Check every number two ways — the answers must agree.</li><li>Add margins, but do not oversize wildly: an oversized pump wastes energy.</li><li>Controls and safety (thermostat, float switch, dry-run cut-out) are part of the design.</li><li>If the numbers do not tie out, the design is wrong.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Sizing the pump from the lift alone and forgetting friction and minor losses. The pump must beat the total head.</p><p><strong>Common mistake:</strong> Forgetting the windows and roof in a heat-loss calculation. Walls are only part of the loss.</p><p><strong>Ready check:</strong> If you can design a small heating and pumping system and check every number, you have finished this course.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Heat loss",
      "def": "Heat escaping from a building, in watts."
    },
    {
      "term": "Duty point",
      "def": "The flow and head a pump must deliver."
    },
    {
      "term": "Total head",
      "def": "Lift plus friction, minor losses, and velocity head."
    },
    {
      "term": "Float switch",
      "def": "A switch that turns a pump on or off with the water level."
    },
    {
      "term": "Dry-run cut-out",
      "def": "A device that stops a pump when there is no water to pump."
    },
    {
      "term": "Non-return valve",
      "def": "A valve that lets water flow one way only."
    },
    {
      "term": "Thermostat",
      "def": "A control that switches a heater on or off with temperature."
    },
    {
      "term": "Isolator switch",
      "def": "A switch that cuts power to equipment for maintenance."
    },
    {
      "term": "Margin",
      "def": "Extra capacity added to a design for cold days and future needs."
    },
    {
      "term": "Frost setting",
      "def": "A thermostat setting that keeps a building just above freezing."
    },
    {
      "term": "Suction strainer",
      "def": "A filter on a pump's suction line that keeps debris out."
    },
    {
      "term": "System design",
      "def": "Working out all the parts of a system so they work together."
    },
    {
      "term": "Energy balance",
      "def": "Checking that energy in equals energy out, at every stage."
    },
    {
      "term": "Commissioning",
      "def": "Testing a finished system to prove it works as designed."
    }
  ],
  "video": {
    "title": "Charging R-410A Refrigerant into an Air Conditioner! Pro Tips",
    "embedUrl": "https://www.youtube.com/embed/qpXZhTRPIXc",
    "note": "Charging R-410A refrigerant into an air conditioner — a real applied system: pressures, superheat, and subcooling on the job.",
    "more": [
      {
        "title": "Why 500 Microns? Evacuation & Vacuum Decay Test Explained",
        "url": "https://www.youtube.com/watch?v=XflHH6cNckE"
      },
      {
        "title": "Explaining Superheat and Subcooling to Your Apprentice!",
        "url": "https://www.youtube.com/watch?v=2SEDe0v8VPY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A wall of 96 m² has R_total = 1.389 m²·K/W and ΔT = 20 K. What is the heat loss?</p>",
      "solution": "<p><strong>Answer:</strong> Q = 96 × 20 ÷ 1.389 = 1,382 W.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The bare brick version of that wall loses 13,824 W. How much does the insulation save?</p>",
      "solution": "<p><strong>Answer:</strong> 13,824 − 1,382 = 12,442 W, about 12.4 kW.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A pump lifts 0.005 m³/s of water by 12.5 m at 70% efficiency. What power is needed?</p>",
      "solution": "<p><strong>Answer:</strong> P = 1,000 × 9.81 × 0.005 × 12.5 ÷ 0.70 = 876 W, about 0.88 kW.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The pipe in the design is 0.05 m in diameter and the flow is 0.005 m³/s. What is the velocity?</p>",
      "solution": "<p><strong>Answer:</strong> Area = π × 0.025² = 0.001963 m². Velocity = 0.005 ÷ 0.001963 = 2.55 m/s.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain in plain words why the pump needs a dry-run cut-out.</p>",
      "solution": "<p><strong>Answer:</strong> Running with no water destroys the pump's seals in minutes, so the cut-out stops it before damage happens.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A customer asks why the insulation is worth the money. Answer in two sentences using the numbers in this module.</p>",
      "solution": "<p><strong>Answer:</strong> The bare wall loses 13.8 kW and the insulated wall loses 1.4 kW, saving about 12.4 kW on a cold day. That saving pays for the insulation in one winter of heating bills.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The insulated wall in this module loses about:",
      "choices": [
        "13,824 W",
        "1,382 W",
        "96 W",
        "20 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Q = 96 × 20 ÷ 1.389 = 1,382 W. (a) is the bare brick wall. (c) is the area alone. (d) is ΔT alone."
    },
    {
      "q": "The bare brick wall loses about:",
      "choices": [
        "1,382 W",
        "13,824 W",
        "1,000 W",
        "96 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.72 × 96 × 20 ÷ 0.1 = 13,824 W. (a) is the insulated wall. (c) is a round guess. (d) is the area."
    },
    {
      "q": "A pump lifting 0.005 m³/s by 12.5 m at 70% efficiency needs about:",
      "choices": [
        "876 W",
        "613 W",
        "1,250 W",
        "5,000 W"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 1,000 × 9.81 × 0.005 × 12.5 ÷ 0.70 = 876 W. (b) is the useful power before efficiency. (c) is 12.5 × 100. (d) is the flow in litres per second times 1,000."
    },
    {
      "q": "Velocity in a 0.05 m pipe at 0.005 m³/s is about:",
      "choices": [
        "0.1 m/s",
        "2.55 m/s",
        "0.25 m/s",
        "10 m/s"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.005 ÷ 0.001963 = 2.55 m/s. (a) divides by 0.05. (c) is a tenth of the answer. (d) multiplies by 2,000."
    },
    {
      "q": "A dry-run cut-out protects a pump from:",
      "choices": [
        "Running with no water",
        "Running too fast",
        "Freezing",
        "Overheating the motor only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). No water destroys the seals. (b) speed is set by the motor. (c) freezing is a different protection. (d) it protects the seals, not just the motor."
    },
    {
      "q": "The first step in sizing a heating system is to:",
      "choices": [
        "Buy the biggest heater",
        "Calculate the heat loss",
        "Fit the thermostat",
        "Paint the walls"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Heat loss sets the heater size. (a) oversizing wastes money. (c) controls come after sizing. (d) is cosmetic."
    },
    {
      "q": "A float switch in a tank:",
      "choices": [
        "Measures temperature",
        "Turns the pump on or off with the water level",
        "Heats the water",
        "Filters the water"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It follows the water level. (a) is a thermostat. (c) is a heater. (d) is a strainer."
    },
    {
      "q": "A non-return valve on a pump discharge:",
      "choices": [
        "Lets water flow both ways",
        "Lets water flow one way only",
        "Increases the flow",
        "Heats the water"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It stops water running back down when the pump stops. (a) is the opposite. (c) it adds a little loss, it does not increase flow. (d) it does not heat water."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Putting It Together: Designing a Heating and Pumping System: Quick Reference</h3>\n<p><strong>Core idea:</strong> Work through a full system design: heat loss, heater size, pipe size, and pump size.</p>\n<p><strong>Key terms:</strong> Heat loss · Duty point · Total head · Float switch · Dry-run cut-out · Non-return valve · Thermostat · Isolator switch.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Work through a full system design: heat loss, heater size, pipe size, and pump size.</li>\n<li>Check every number: power, flow, head, and efficiency.</li>\n<li>Explain the design in plain words to a customer.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
