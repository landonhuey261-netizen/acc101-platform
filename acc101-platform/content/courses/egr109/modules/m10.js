// egr109 - Module 10: Pumps and Fans: Head, Power, and Curves
module.exports = {
  "number": 10,
  "slug": "pumps-fans",
  "title": "Pumps and Fans: Head, Power, and Curves",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a pump does: add head to a fluid, not 'make pressure' alone.",
    "Calculate pump power from flow, head, and efficiency.",
    "Read a pump curve and find the operating point with a system curve.",
    "Explain cavitation and NPSH in plain words.",
    "Compare centrifugal and positive-displacement pumps and say where each is used."
  ],
  "sections": [
    {
      "heading": "What a Pump Does",
      "html": "<p><p>A pump adds energy to a fluid, expressed as head in metres. It does not 'make pressure' on its own — pressure appears because the system resists the flow. A pump in an open pipe with no resistance would move water with almost no pressure rise; the same pump pushing against a tall lift and a long pipe builds high pressure. Remember: pumps create flow, and the system creates the pressure.</p></p>\n<p><p>The head a pump must supply is the sum of the lift (elevation), the friction head loss, the minor losses, and the velocity head at the outlet. Add them up and you have the total head H. The pump must deliver the required flow at that head — that pair of numbers is the duty point, and it is the first thing to write down when choosing a pump.</p></p>\n"
    },
    {
      "heading": "Pump Power: The Key Calculation",
      "html": "<p><p>Pump power is P = ρgQH ÷ η, where Q is volume flow in m³/s, H is total head in metres, and η is the pump efficiency. Example: water at Q = 0.01 m³/s, H = 20 m, η = 0.70. P = 1,000 × 9.81 × 0.01 × 20 ÷ 0.70 = 2,803 W, about 2.8 kW. Check the units: kg/m³ × m/s² × m³/s × m = kg·m²/s³ = W. And check the sense: lifting 10 litres a second by 20 m is real work, and 2.8 kW is a plausible motor size.</p></p>\n<p><p>Efficiency matters: a pump at 50% efficiency needs twice the power of one at 100% (which does not exist). Running a pump far from its best efficiency point wastes electricity every hour it runs — over a year, the electricity can cost more than the pump. Always check the efficiency at the duty point, not just the peak efficiency on the brochure.</p></p>\n"
    },
    {
      "heading": "Pump Curves and the Operating Point",
      "html": "<p><p>A pump curve shows head against flow for a given speed: at zero flow (shut-off) the head is highest, and as flow rises the head falls. A system curve shows the head the system needs at each flow: it rises with flow because friction grows with speed squared. Where the two curves cross is the operating point — the flow and head the system will actually run at.</p></p>\n<p><p>If the operating point is not the duty point, something must change: throttle a valve (wastes energy), change the pump speed (best for a big change), trim the impeller, or pick a different pump. Variable-speed drives are the modern answer: slowing a pump by 20% cuts its power by about half, because power follows speed cubed. That is a large saving for a small change.</p></p>\n"
    },
    {
      "heading": "Cavitation and Pump Types",
      "html": "<p><p>Cavitation is when the pressure inside a pump falls so low that the water boils at room temperature, forming bubbles that collapse violently and eat away the impeller. It sounds like gravel in the pump and it destroys impellers in weeks. The cure is NPSH: the net positive suction head available must exceed the NPSH the pump requires. Keep the suction line short, wide, and flooded, and never throttle the suction valve.</p></p>\n<p><p>Centrifugal pumps (impeller flinging water outward) are the standard for water: cheap, simple, and good for high flows at moderate head. Positive-displacement pumps (gear, piston, diaphragm) trap a fixed volume and push it along: they give a steady flow at high pressure and are used for oil, chemicals, and dosing. Fans are the same idea for air: centrifugal fans for duct systems, axial fans for high flow at low pressure.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Pumps add head; the system decides the pressure.</li><li>Pump power P = ρgQH ÷ η.</li><li>The operating point is where the pump curve meets the system curve.</li><li>Cavitation is boiling inside the pump; keep NPSH available above NPSH required.</li><li>Centrifugal pumps suit water; positive-displacement pumps suit high pressure and dosing.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Sizing a pump from head alone and forgetting the flow — or from flow alone and forgetting the head. Both numbers make the duty point.</p><p><strong>Common mistake:</strong> Throttling the suction valve to control flow. That causes cavitation — throttle the discharge side, or better, change the speed.</p><p><strong>Ready check:</strong> If you can find the power a pump needs from flow, head, and efficiency, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Pump",
      "def": "A machine that adds head (energy) to a fluid."
    },
    {
      "term": "Total head (H)",
      "def": "The head a pump must supply: lift plus friction, minor losses, and velocity head, in metres."
    },
    {
      "term": "Duty point",
      "def": "The flow and head a pump must deliver for the job."
    },
    {
      "term": "Pump curve",
      "def": "A graph of a pump's head against flow at one speed."
    },
    {
      "term": "System curve",
      "def": "A graph of the head a system needs at each flow rate."
    },
    {
      "term": "Operating point",
      "def": "Where the pump curve meets the system curve."
    },
    {
      "term": "Efficiency (η)",
      "def": "Useful power out divided by power in, for a pump."
    },
    {
      "term": "Cavitation",
      "def": "Bubbles forming and collapsing inside a pump when pressure falls too low."
    },
    {
      "term": "NPSH",
      "def": "Net positive suction head: the margin against cavitation at the pump inlet."
    },
    {
      "term": "Centrifugal pump",
      "def": "A pump that flings fluid outward with a spinning impeller."
    },
    {
      "term": "Positive-displacement pump",
      "def": "A pump that traps a fixed volume and pushes it along."
    },
    {
      "term": "Impeller",
      "def": "The spinning part of a centrifugal pump that moves the fluid."
    },
    {
      "term": "Shut-off head",
      "def": "The head a pump makes at zero flow."
    },
    {
      "term": "Best efficiency point",
      "def": "The flow where a pump is most efficient."
    }
  ],
  "video": {
    "title": "How a Centrifugal Pump Moves Water",
    "embedUrl": "https://www.youtube.com/embed/IN5Qq1cOrco",
    "note": "How a centrifugal pump moves water: the impeller and volute, cavitation, NPSH, and how to read a pump curve.",
    "more": [
      {
        "title": "How Multistage Centrifugal Pumps Work",
        "url": "https://www.youtube.com/watch?v=6iENU-Pp3Q0"
      },
      {
        "title": "Do Pumps Create Pressure or Flow?",
        "url": "https://www.youtube.com/watch?v=m3i_5xP9PYU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A pump delivers 0.02 m³/s of water against 15 m of head at 75% efficiency. What power is needed?</p>",
      "solution": "<p><strong>Answer:</strong> P = 1,000 × 9.81 × 0.02 × 15 ÷ 0.75 = 3,924 W, about 3.9 kW.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A pump's duty point is 0.01 m³/s at 20 m. Its efficiency is 70%. What motor size would you choose?</p>",
      "solution": "<p><strong>Answer:</strong> Power = 1,000 × 9.81 × 0.01 × 20 ÷ 0.70 = 2,803 W. Choose a 3 kW motor (the next size up).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Explain in plain words what the operating point of a pump is.</p>",
      "solution": "<p><strong>Answer:</strong> Where the pump curve and the system curve cross — the flow and head the system actually runs at.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A pump sounds like it has gravel inside it. What is likely happening, and what should you check?</p>",
      "solution": "<p><strong>Answer:</strong> Cavitation. Check the suction line: is it blocked, throttled, or too long, and is the NPSH available enough?</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why is it better to slow a pump down than to throttle a valve to reduce flow?</p>",
      "solution": "<p><strong>Answer:</strong> Slowing the pump cuts power by about the cube of the speed, while throttling wastes the extra energy as friction in the valve.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A dosing pump must deliver an exact small flow at high pressure. Centrifugal or positive-displacement, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Positive-displacement: it delivers a fixed volume per stroke whatever the pressure, so the flow is exact.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Pump power is calculated as:",
      "choices": [
        "ρgQH ÷ η",
        "ρQH × η",
        "gQH",
        "ρgQ ÷ H"
      ],
      "answer": 0,
      "explanation": "Correct: (a). P = ρgQH ÷ η. (b) multiplies by efficiency instead of dividing. (c) leaves out density, flow, and efficiency. (d) divides by head instead of multiplying."
    },
    {
      "q": "A pump delivers 0.01 m³/s at 20 m head with 70% efficiency. Its power is about:",
      "choices": [
        "2,803 W",
        "1,962 W",
        "280 W",
        "28,030 W"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 1,000 × 9.81 × 0.01 × 20 ÷ 0.70 = 2,803 W. (b) multiplies by efficiency. (c) is ten times too small. (d) is ten times too big."
    },
    {
      "q": "The operating point is where:",
      "choices": [
        "The pump curve meets the system curve",
        "The pump is switched on",
        "The flow is zero",
        "The motor is biggest"
      ],
      "answer": 0,
      "explanation": "Correct: (a). That crossing is the actual running point. (b) switch-on is not a point on a curve. (c) is shut-off. (d) motor size is not on the curves."
    },
    {
      "q": "Cavitation is:",
      "choices": [
        "Air leaking into a pipe",
        "Water boiling inside a pump at low pressure, forming bubbles that collapse and damage the impeller",
        "The pump running dry",
        "A blocked filter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Low pressure lets water boil at room temperature. (a) air leaks are a different fault. (c) running dry is a different failure. (d) a blocked filter can cause cavitation, but it is not cavitation itself."
    },
    {
      "q": "To stop cavitation you should:",
      "choices": [
        "Throttle the suction valve",
        "Keep the suction line short, wide, and flooded, with NPSH available above NPSH required",
        "Run the pump faster",
        "Close the discharge valve"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Good suction conditions keep pressure up. (a) throttling suction causes cavitation. (c) faster running lowers suction pressure further. (d) closing the discharge does not fix suction pressure."
    },
    {
      "q": "A centrifugal pump is the usual choice for:",
      "choices": [
        "Dosing chemicals exactly",
        "Water at high flow and moderate head",
        "Very high pressure oil",
        "A fixed volume per stroke"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Centrifugal pumps suit water duties. (a) and (d) are positive-displacement jobs. (c) is also a positive-displacement job."
    },
    {
      "q": "Slowing a pump by 20% cuts its power by about:",
      "choices": [
        "20%",
        "50%",
        "5%",
        "80%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Power follows speed cubed: 0.8³ = 0.512, so power falls by about half. (a) would be true for a linear law. (c) understates it. (d) overstates it."
    },
    {
      "q": "Pumps create:",
      "choices": [
        "Pressure only",
        "Flow; the system creates the pressure",
        "Heat only",
        "Vacuum only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A pump adds energy as flow; resistance makes pressure. (a) pressure alone is not the pump's output. (c) heat is a loss. (d) a pump can create suction, but that is not its job."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Pumps and Fans: Head, Power, and Curves: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a pump does: add head to a fluid, not 'make pressure' alone.</p>\n<p><strong>Key terms:</strong> Pump · Total head (H) · Duty point · Pump curve · System curve · Operating point · Efficiency (η) · Cavitation.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a pump does: add head to a fluid, not 'make pressure' alone.</li>\n<li>Calculate pump power from flow, head, and efficiency.</li>\n<li>Read a pump curve and find the operating point with a system curve.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
