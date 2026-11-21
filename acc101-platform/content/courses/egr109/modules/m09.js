// egr109 - Module 9: Pipe Flow: Friction, Head Loss, and Reynolds Number
module.exports = {
  "number": 9,
  "slug": "pipe-flow-head-loss",
  "title": "Pipe Flow: Friction, Head Loss, and Reynolds Number",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain laminar and turbulent flow and calculate Reynolds number.",
    "Use the Darcy–Weisbach equation to find friction head loss.",
    "Explain major and minor losses and when each matters.",
    "Read a Moody chart in plain terms and find a friction factor.",
    "Size a pipe by balancing flow, velocity, and head loss."
  ],
  "sections": [
    {
      "heading": "Laminar and Turbulent Flow",
      "html": "<p><p>Fluid in a pipe flows in two ways. Laminar flow is smooth and layered, like syrup pouring — it happens at low speeds in small pipes. Turbulent flow is chaotic and mixed, like a fast river — it happens at high speeds and in large pipes, and it is the usual case in engineering. The Reynolds number tells you which one you have: Re = ρvD ÷ μ, where ρ is density, v is speed, D is diameter, and μ is viscosity.</p></p>\n<p><p>Below Re ≈ 2,300 the flow is laminar; above about 4,000 it is turbulent; in between is a transition zone. Example: water (ρ = 1,000, μ = 0.001) at 1 m/s in a 0.05 m pipe gives Re = 1,000 × 1 × 0.05 ÷ 0.001 = 50,000 — well into turbulent flow. Turbulent flow mixes well (good for heat transfer) but loses more energy to friction (bad for pumping).</p></p>\n"
    },
    {
      "heading": "Friction Head Loss: Darcy–Weisbach",
      "html": "<p><p>Friction in a pipe eats energy, and the loss is expressed as head loss in metres: h_f = f × (L ÷ D) × (v² ÷ 2g), where f is the friction factor, L is pipe length, D is diameter, and v is speed. The loss grows with the square of the speed — double the speed and the loss quadruples. It also grows with length and shrinks with diameter, which is why a bigger pipe needs a smaller pump.</p></p>\n<p><p>Example: water at 2 m/s in a 50 m pipe of 0.05 m diameter, with f = 0.02. h_f = 0.02 × (50 ÷ 0.05) × (4 ÷ 19.62) = 0.02 × 1,000 × 0.2039 = 4.08 m. The pump must supply an extra 4.08 m of head just to overcome friction, on top of lifting the water. In pressure terms, that is ρgh = 1,000 × 9.81 × 4.08 = 40,025 Pa, about 40 kPa.</p></p>\n"
    },
    {
      "heading": "Friction Factor and the Moody Chart",
      "html": "<p><p>The friction factor f depends on the Reynolds number and on the pipe's roughness. For smooth pipes in turbulent flow, f is about 0.02; for rough old steel pipes it can be 0.04 or more. The Moody chart plots f against Re for different roughness values — find Re on the bottom, go up to the curve for your pipe's roughness, and read f on the left. In this course, f is usually given, so you can focus on using it rather than reading the chart precisely.</p></p>\n<p><p>Roughness matters more at high Reynolds numbers: a smooth plastic pipe keeps a low f, while a rusty steel pipe of the same size can double the head loss. That is one reason old pipes are replaced — not because they leak, but because the pump can no longer push enough water through them. When you specify a pipe, specify the material and the roughness, not just the diameter.</p></p>\n"
    },
    {
      "heading": "Minor Losses: Bends, Valves, and Fittings",
      "html": "<p><p>Minor losses come from bends, valves, entrances, and exits: h_m = K × (v² ÷ 2g), where K is a loss coefficient for the fitting. A 90° elbow has K ≈ 0.9, a fully open gate valve K ≈ 0.15, and a sudden exit K = 1.0. 'Minor' is a name, not a promise — a system with many bends and valves can lose more to minor losses than to pipe friction.</p></p>\n<p><p>Example: water at 2 m/s has a velocity head of 4 ÷ 19.62 = 0.204 m. Four 90° elbows (K = 0.9 each) give a minor loss of 4 × 0.9 × 0.204 = 0.73 m. Add that to the 4.08 m of friction loss and the total is 4.81 m. When you size a pump, add friction and minor losses together, plus the lift — the pump must beat the total.</p></p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><p><strong>Takeaways:</strong><ul><li>Re = ρvD ÷ μ; below 2,300 is laminar, above 4,000 is turbulent.</li><li>Friction head loss is h_f = f(L ÷ D)(v² ÷ 2g).</li><li>Head loss grows with speed squared — doubling speed quadruples loss.</li><li>Minor losses are K(v² ÷ 2g) per fitting.</li><li>Total head loss is friction plus minor losses plus lift.</li></ul></p></p>\n<p><p><strong>Common mistake:</strong> Forgetting that head loss depends on speed squared. A small speed increase costs a lot of pump power.</p><p><strong>Common mistake:</strong> Ignoring minor losses. A system full of elbows and valves can lose as much there as in the straight pipe.</p><p><strong>Ready check:</strong> If you can find the friction loss in a pipe and the Reynolds number, you have this module.</p></p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Laminar flow",
      "def": "Smooth, layered flow at low Reynolds numbers."
    },
    {
      "term": "Turbulent flow",
      "def": "Chaotic, mixed flow at high Reynolds numbers."
    },
    {
      "term": "Reynolds number (Re)",
      "def": "ρvD ÷ μ; it predicts whether flow is laminar or turbulent."
    },
    {
      "term": "Friction factor (f)",
      "def": "A number that says how much friction a pipe gives; it depends on Re and roughness."
    },
    {
      "term": "Head loss",
      "def": "Energy lost to friction, expressed in metres of fluid."
    },
    {
      "term": "Darcy–Weisbach equation",
      "def": "h_f = f(L ÷ D)(v² ÷ 2g), the friction head loss equation."
    },
    {
      "term": "Moody chart",
      "def": "A chart of friction factor against Reynolds number and pipe roughness."
    },
    {
      "term": "Roughness",
      "def": "How rough a pipe's inside surface is; rougher means more friction."
    },
    {
      "term": "Minor loss",
      "def": "Head loss from a bend, valve, or fitting: h_m = K(v² ÷ 2g)."
    },
    {
      "term": "Loss coefficient (K)",
      "def": "A number for a fitting that sets its minor loss."
    },
    {
      "term": "Velocity head",
      "def": "v² ÷ (2g), in metres."
    },
    {
      "term": "Major loss",
      "def": "Head loss from friction in straight pipe."
    },
    {
      "term": "Transition zone",
      "def": "Reynolds numbers between about 2,300 and 4,000, where flow is neither fully laminar nor fully turbulent."
    },
    {
      "term": "Pipe sizing",
      "def": "Choosing a pipe diameter that balances flow, velocity, and head loss."
    }
  ],
  "video": {
    "title": "How a Centrifugal Pump Works | 3D Animation Explained for Operators & Engineers",
    "embedUrl": "https://www.youtube.com/embed/VKMi79Z-G-w",
    "note": "How a centrifugal pump works in 3D: impeller, volute, shaft, bearings, and seal — and how velocity becomes pressure inside the casing.",
    "more": [
      {
        "title": "How a Centrifugal Pump Moves Water",
        "url": "https://www.youtube.com/watch?v=IN5Qq1cOrco"
      },
      {
        "title": "Fluid Flow & Equipment: Crash Course Engineering #13",
        "url": "https://www.youtube.com/watch?v=bRrfsv9hiX4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Water (ρ = 1,000, μ = 0.001) flows at 0.5 m/s in a 0.1 m pipe. Find the Reynolds number and say whether the flow is laminar or turbulent.</p>",
      "solution": "<p><strong>Answer:</strong> Re = 1,000 × 0.5 × 0.1 ÷ 0.001 = 50,000 — turbulent.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A pipe has f = 0.025, L = 100 m, D = 0.1 m, v = 1.5 m/s. Find the friction head loss.</p>",
      "solution": "<p><strong>Answer:</strong> h_f = 0.025 × (100 ÷ 0.1) × (2.25 ÷ 19.62) = 0.025 × 1,000 × 0.1147 = 2.87 m.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> If the speed in the last question doubles to 3 m/s, what is the new head loss?</p>",
      "solution": "<p><strong>Answer:</strong> Head loss grows with v², so it quadruples: 2.87 × 4 = 11.48 m. (Check: 0.025 × 1,000 × (9 ÷ 19.62) = 11.47 m.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A system has 6 elbows with K = 0.9 each, and water at 2 m/s. Find the total minor loss.</p>",
      "solution": "<p><strong>Answer:</strong> Velocity head = 4 ÷ 19.62 = 0.204 m. Minor loss = 6 × 0.9 × 0.204 = 1.10 m.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain in plain words why a bigger pipe needs a smaller pump.</p>",
      "solution": "<p><strong>Answer:</strong> A bigger pipe means lower speed for the same flow, and head loss falls with speed squared and with 1 ÷ D — so friction loss drops sharply.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Water flows at 2 m/s in a 0.05 m pipe with f = 0.02 and L = 50 m. Find the head loss in metres and in kPa.</p>",
      "solution": "<p><strong>Answer:</strong> h_f = 0.02 × 1,000 × 0.2039 = 4.08 m. Pressure = 1,000 × 9.81 × 4.08 = 40,025 Pa, about 40 kPa.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Reynolds number is calculated as:",
      "choices": [
        "ρvD ÷ μ",
        "ρD ÷ v",
        "μv ÷ D",
        "vD ÷ ρ"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Re = ρvD ÷ μ. (b) leaves out speed and viscosity. (c) is the inverse. (d) leaves out viscosity."
    },
    {
      "q": "Flow with Re = 50,000 is:",
      "choices": [
        "Laminar",
        "Turbulent",
        "Still",
        "Transition"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Above 4,000 is turbulent. (a) is below 2,300. (c) is zero flow. (d) is 2,300–4,000."
    },
    {
      "q": "Friction head loss grows with speed:",
      "choices": [
        "Linearly",
        "Squared",
        "Cubed",
        "Not at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). h_f has v² in it. (a) would mean doubling speed doubles loss — it quadruples it. (c) is for power in some cases, not head loss. (d) is wrong."
    },
    {
      "q": "A pipe with f = 0.02, L = 50 m, D = 0.05 m, v = 2 m/s has a head loss of about:",
      "choices": [
        "4.08 m",
        "0.41 m",
        "40.8 m",
        "2.04 m"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 0.02 × 1,000 × 0.2039 = 4.08 m. (b) is ten times too small. (c) is ten times too big. (d) is half the velocity head times 10."
    },
    {
      "q": "A 90° elbow has a loss coefficient K of about:",
      "choices": [
        "0.9",
        "9",
        "0.09",
        "90"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A 90° elbow is about K = 0.9. (b) is ten times too big. (c) is ten times too small. (d) is a hundred times too big."
    },
    {
      "q": "Minor losses are calculated with:",
      "choices": [
        "h_m = K(v² ÷ 2g)",
        "h_m = f(L ÷ D)",
        "h_m = ρgh",
        "h_m = Q ÷ A"
      ],
      "answer": 0,
      "explanation": "Correct: (a). That is the minor loss formula. (b) is the friction loss formula. (c) is pressure at depth. (d) is velocity from flow rate."
    },
    {
      "q": "Doubling the speed in a pipe makes the friction loss:",
      "choices": [
        "Double",
        "Quadruple",
        "Halve",
        "Stay the same"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Loss depends on v², so 2² = 4. (a) would be true for a linear law. (c) and (d) are backwards."
    },
    {
      "q": "A bigger pipe diameter for the same flow gives:",
      "choices": [
        "Higher speed and more loss",
        "Lower speed and less loss",
        "The same speed and loss",
        "No flow"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bigger area means lower speed, and loss falls with speed squared and with 1 ÷ D. (a) is backwards. (c) ignores the diameter. (d) is wrong."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Pipe Flow: Friction, Head Loss, and Reynolds Number: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain laminar and turbulent flow and calculate Reynolds number.</p>\n<p><strong>Key terms:</strong> Laminar flow · Turbulent flow · Reynolds number (Re) · Friction factor (f) · Head loss · Darcy–Weisbach equation · Moody chart · Roughness.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain laminar and turbulent flow and calculate Reynolds number.</li>\n<li>Use the Darcy–Weisbach equation to find friction head loss.</li>\n<li>Explain major and minor losses and when each matters.</li>\n</ul>\n<p><strong>Watch out:</strong> Work every example with the units written out, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
