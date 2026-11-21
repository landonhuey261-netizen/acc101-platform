// egr110 - Module 3: Transistors: The BJT
module.exports = {
  "number": 3,
  "slug": "bjt-transistors",
  "title": "Transistors: The BJT",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the structure of NPN and PNP bipolar junction transistors.",
    "Explain how a small base current controls a larger collector current.",
    "Use current gain β to work out collector and emitter currents.",
    "Explain the difference between the active, saturation, and cutoff regions.",
    "Wire a BJT as a switch and as a simple amplifier."
  ],
  "sections": [
    {
      "heading": "Three Layers, Two Junctions",
      "html": "<p>A bipolar junction transistor (BJT) is made of three layers of doped silicon. An NPN transistor has a thin p-type base sandwiched between an n-type emitter and an n-type collector; a PNP transistor is the mirror image. The base is deliberately thin, so carriers that cross one junction can be swept across the other. The transistor has three terminals: emitter (E), base (B), and collector (C).</p>\n<p>The circuit symbol shows an arrow on the emitter: on an NPN it points outward, away from the base; on a PNP it points inward, toward the base. A handy memory aid: NPN means “Not Pointing iN” — the arrow points out. That arrow also shows the direction of conventional current flow through the emitter.</p>\n"
    },
    {
      "heading": "A Small Current Controls a Big One",
      "html": "<p>A transistor is a current amplifier. A small current into the base allows a much larger current to flow from collector to emitter. The ratio is the current gain, written β (beta) or hFE. If β is 100 and the base current is 0.1 mA, the collector current is about 100 × 0.1 mA = 10 mA. The emitter current is the sum of the two: Ie = Ic + Ib, so here Ie = 10.1 mA.</p>\n<p>The base current is the control signal; the collector current is the controlled output. Because the control current is small, a transistor lets a tiny signal — from a sensor or a microcontroller pin that can only supply a few milliamps — switch a much heavier load, like a motor or a relay. That is the transistor's most common job in practice.</p>\n"
    },
    {
      "heading": "Three Regions: Off, Active, and Saturated",
      "html": "<p>A BJT works in three regions. In cutoff, the base current is zero and the transistor is off — it behaves like an open switch, with almost no collector current. In the active region, the collector current is proportional to the base current (Ic = β × Ib) and the transistor can amplify a signal smoothly — this is where amplifiers live.</p>\n<p>In saturation, the base current is driven hard enough that the collector current cannot rise any further: it is limited by the supply and the load resistor, not by β. The transistor is fully on and behaves like a closed switch, with only a small voltage (about 0.2 V) across it. Switches are driven into saturation on purpose, because a fully-on transistor wastes little power as heat.</p>\n"
    },
    {
      "heading": "The BJT as a Switch",
      "html": "<p>To switch a load with an NPN transistor, connect the load between the supply and the collector, the emitter to ground, and drive the base through a resistor from the control signal. With 0 V at the base the transistor is off and the load gets nothing; with 5 V at the base the transistor saturates and the load gets almost the full supply voltage.</p>\n<p>The base resistor sets the base current. For saturation you need Ib of at least Ic ÷ β, and in practice you drive the base with about five times that, to guarantee the transistor is fully on. Example: switching a 100 mA load with β = 100 needs at least 1 mA of base current, so design for about 5 mA: with a 5 V drive and a 0.7 V base-emitter drop, Rb = (5 − 0.7) ÷ 0.005 = 860 Ω, so use 820 Ω. Never connect a base straight to a supply with no resistor — the base-emitter junction is a diode and will take too much current and burn out.</p>\n"
    },
    {
      "heading": "The BJT as an Amplifier and Common Mistakes",
      "html": "<p>In the active region a small change in base current makes a β-times-larger change in collector current, so a small input voltage wiggle at the base becomes a large voltage swing at the collector. That is amplification. Real amplifier circuits add biasing resistors to hold the transistor at a steady operating point in the middle of the active region, and coupling capacitors to pass the signal while blocking DC — the details fill whole textbooks, but the core idea is just Ic = β × Ib.</p>\n<p><p><strong>Takeaways:</strong><ul><li>NPN: arrow points out of the emitter; PNP: arrow points in.</li><li>Ic = β × Ib in the active region; Ie = Ic + Ib.</li><li>Cutoff is off, active is amplifying, saturation is fully on.</li><li>As a switch, drive the base hard into saturation and always use a base resistor.</li></ul></p>\n<p><strong>Common mistake:</strong> Using Ic = β × Ib in saturation. In saturation the collector current is set by the load, not by β — β only applies in the active region.</p>\n<p><strong>Common mistake:</strong> Leaving out the base resistor. The base-emitter junction is a diode: without a resistor it will draw a destructive current.</p>\n<p><strong>Ready check:</strong> If you can work out Ic from Ib and β, explain the three regions, and size a base resistor for a switch, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "BJT",
      "def": "Bipolar junction transistor: a three-layer transistor where a small base current controls a larger collector current."
    },
    {
      "term": "NPN transistor",
      "def": "A BJT with an n-type emitter, p-type base, and n-type collector; the emitter arrow points outward."
    },
    {
      "term": "PNP transistor",
      "def": "A BJT with a p-type emitter, n-type base, and p-type collector; the emitter arrow points inward."
    },
    {
      "term": "Base",
      "def": "The thin middle layer of a BJT; a small current here controls the large collector current."
    },
    {
      "term": "Collector",
      "def": "The BJT terminal that carries the main controlled current, from the supply through the load."
    },
    {
      "term": "Emitter",
      "def": "The BJT terminal that carries the sum of the base and collector currents, and the one with the arrow on the symbol."
    },
    {
      "term": "Current gain (β)",
      "def": "Beta: the ratio Ic ÷ Ib in the active region, typically 50–300 for a small-signal BJT."
    },
    {
      "term": "Active region",
      "def": "The BJT operating region where Ic = β × Ib and the transistor can amplify a signal."
    },
    {
      "term": "Cutoff",
      "def": "The BJT region where the base current is zero and the transistor is off, like an open switch."
    },
    {
      "term": "Saturation",
      "def": "The BJT region where the transistor is fully on, the collector current is limited by the load, and only about 0.2 V appears across it."
    },
    {
      "term": "Base resistor",
      "def": "A resistor in series with the base that sets the base current and protects the base-emitter junction from excess current."
    },
    {
      "term": "Biasing",
      "def": "Setting a transistor's steady DC operating point with resistors, so it sits in the active region ready to amplify."
    },
    {
      "term": "hFE",
      "def": "Another name for a BJT's DC current gain, β, as printed on datasheets."
    },
    {
      "term": "Load",
      "def": "The device a transistor switches or drives, such as a motor, relay, lamp, or speaker."
    }
  ],
  "video": {
    "title": "Transistors - NPN & PNP - Basic Introduction",
    "embedUrl": "https://www.youtube.com/embed/AcxDiesy-nI",
    "note": "The clearest short introduction to how NPN and PNP transistors work, with the water-tap analogy and the current-gain idea. Pause at each worked example and do the β calculation yourself before watching the answer.",
    "more": [
      {
        "title": "BJT Transistors - Electronics Switches and Inverters",
        "url": "https://www.youtube.com/watch?v=VJJuxQk5fTY"
      },
      {
        "title": "Electronics Tutorial 4 Transistor Tutorial",
        "url": "https://www.youtube.com/watch?v=wRnPRe9KbTI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> An NPN transistor has β = 100 and a base current of 0.1 mA. Work out the collector current and the emitter current.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Ic = β × Ib = 100 × 0.1 mA = 10 mA. Step 2: Ie = Ic + Ib = 10 mA + 0.1 mA = 10.1 mA. A good answer shows both formulas and both answers with units.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A transistor has β = 120 and its base current is 25 µA. What is the collector current? Show the unit conversion.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Convert the base current: 25 µA = 0.025 mA. Step 2: Ic = β × Ib = 120 × 25 µA = 3,000 µA = 3.0 mA. A good answer converts µA to mA (or works in µA) and gives 3.0 mA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> You need to switch a 100 mA relay with an NPN transistor (β = 100) from a 5 V signal. Work out a suitable base resistor, allowing a safety factor of about 5 on the base current.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Minimum base current = Ic ÷ β = 100 mA ÷ 100 = 1 mA. Step 2: Design base current = 5 × 1 mA = 5 mA, to guarantee saturation. Step 3: Base resistor = (5 V − 0.7 V) ÷ 0.005 A = 4.3 ÷ 0.005 = 860 Ω, so use 820 Ω (the nearest standard value below). A good answer shows the safety factor and the 0.7 V base-emitter drop.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A transistor circuit has Ic = 50 mA and Vce = 0.2 V. Which region is the transistor in, and how do you know?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Vce of about 0.2 V is the classic saturation voltage. Step 2: The transistor is saturated — fully on like a closed switch. Step 3: In the active region Vce would be several volts, and in cutoff Ic would be near zero. A good answer uses the 0.2 V value as the clue.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A student calculates Ic = β × Ib = 100 × 10 mA = 1,000 mA for a transistor whose collector resistor and 12 V supply can only allow 200 mA. What is wrong with the calculation?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: β only sets Ic in the active region. Step 2: The supply and load resistor limit the collector current to at most 200 mA, so the transistor saturates instead. Step 3: The real Ic is about 200 mA, not 1,000 mA — the formula was used outside the region where it applies. A good answer names saturation as the correction.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A microcontroller pin can supply at most 20 mA, but a small DC motor needs 300 mA. Explain in plain words how a BJT solves this, and what resistor you must not forget.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use the pin to drive the transistor base with a small current; the transistor's collector supplies the motor's 300 mA from the main supply. Step 2: With β = 100, only 3 mA of base current is needed, well within the pin's 20 mA. Step 3: Never forget the base resistor — without it the base-emitter junction would draw a destructive current from the pin. A good answer covers the current gain, the separate supply path, and the base resistor.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In an NPN transistor, the arrow on the circuit symbol…",
      "choices": [
        "Points into the base",
        "Points out of the emitter, away from the base",
        "Points into the collector",
        "There is no arrow on a BJT symbol"
      ],
      "answer": 1,
      "explanation": "Correct: (b). On an NPN the emitter arrow points outward, away from the base. (a) is wrong: the arrow points into the base on a PNP. (c) is wrong: the arrow is on the emitter, not the collector. (d) is wrong: the emitter arrow is the key feature of the BJT symbol."
    },
    {
      "q": "A BJT has β = 100 and a base current of 0.1 mA. What is the collector current in the active region?",
      "choices": [
        "0.1 mA",
        "1 mA",
        "10 mA",
        "100 mA"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Ic = β × Ib = 100 × 0.1 mA = 10 mA. (a) 0.1 mA is just the base current. (b) 1 mA is ten times too small. (d) 100 mA would need β = 1,000 or Ib = 1 mA."
    },
    {
      "q": "A BJT has β = 120 and Ib = 25 µA. What is Ic?",
      "choices": [
        "0.3 mA",
        "3.0 mA",
        "30 mA",
        "300 mA"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ic = 120 × 25 µA = 3,000 µA = 3.0 mA. (a) 0.3 mA is ten times too small. (c) 30 mA is ten times too big. (d) 300 mA is a hundred times too big."
    },
    {
      "q": "Which region is a BJT in when it is fully on like a closed switch, with about 0.2 V across it?",
      "choices": [
        "Cutoff",
        "Active",
        "Saturation",
        "Breakdown"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Saturation is the fully-on state, with Vce around 0.2 V. (a) Cutoff is fully off, with no collector current. (b) Active is the amplifying region, where Vce is several volts. (d) Breakdown is a fault condition, not a normal operating region."
    },
    {
      "q": "In cutoff, a BJT behaves like…",
      "choices": [
        "A closed switch",
        "An open switch, with almost no collector current",
        "A resistor of 0.7 Ω",
        "A short circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In cutoff the base current is zero and the transistor is off, like an open switch. (a) describes saturation. (c) is wrong: 0.7 V is the base-emitter drop, not a resistance. (d) is wrong: a short circuit would carry maximum current."
    },
    {
      "q": "Why must a base resistor be used when driving a BJT base from a 5 V signal?",
      "choices": [
        "To make the transistor slower",
        "To limit the base current, because the base-emitter junction is a diode that would draw too much current",
        "To increase β",
        "To protect the collector"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The base-emitter junction is a diode; without a resistor it would draw a destructive current from the drive. (a) is wrong: slowing the transistor is not the purpose. (c) is wrong: β is a property of the transistor, not the resistor. (d) is wrong: the resistor protects the base junction and the drive, not the collector."
    },
    {
      "q": "The emitter current of a BJT equals…",
      "choices": [
        "Ic − Ib",
        "Ic + Ib",
        "Ic × Ib",
        "Ic ÷ β"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ie = Ic + Ib, because the emitter carries both currents. (a) subtracts instead of adding. (c) multiplying currents gives a meaningless unit. (d) Ic ÷ β equals Ib, not Ie."
    },
    {
      "q": "A 5 V signal drives the base of an NPN transistor through a resistor, switching a 12 V lamp connected to the collector. When the signal is 0 V, what happens?",
      "choices": [
        "The lamp lights at full brightness",
        "The transistor is in cutoff, so the lamp stays off",
        "The transistor saturates and the lamp burns out",
        "The lamp lights dimly at 5 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With 0 V at the base there is no base current, so the transistor is in cutoff and the lamp gets nothing. (a) is wrong: the lamp lights when the base is driven high, not low. (c) is wrong: saturation needs base current. (d) is wrong: the lamp is fed from the 12 V collector supply, not the 5 V signal, and it is off."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Transistors: The BJT: Quick Reference</h3>\n<p><strong>Core idea:</strong> Describe the structure of NPN and PNP bipolar junction transistors.</p>\n<p><strong>Key terms:</strong> BJT · NPN transistor · PNP transistor · Base · Collector · Emitter · Current gain (β) · Active region.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Describe the structure of NPN and PNP bipolar junction transistors.</li>\n<li>Explain how a small base current controls a larger collector current.</li>\n<li>Use current gain β to work out collector and emitter currents.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
