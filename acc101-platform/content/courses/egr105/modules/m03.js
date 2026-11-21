// egr105 - Module 3: Capacitors in AC
module.exports = {
  "number": 3,
  "slug": "capacitors-in-ac",
  "title": "Capacitors in AC",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a capacitor is and how it stores energy in an electric field.",
    "State that a capacitor blocks DC (once charged) but passes AC.",
    "Use XC = 1 ÷ (2πfC) to find capacitive reactance.",
    "Explain why current leads voltage by 90° in a capacitor.",
    "Predict what happens to XC when frequency or capacitance changes."
  ],
  "sections": [
    {
      "heading": "What a Capacitor Is",
      "html": "<p>A capacitor is two conducting plates separated by an insulator (the dielectric). When you connect it to a voltage, charge piles up on one plate and leaves the other, building an electric field between them. It stores energy in that field — not as chemical energy like a battery, but as separated charge. Capacitance (C) is how much charge it stores per volt: C = Q ÷ V, measured in farads (F). Practical capacitors are measured in microfarads (µF, millionths of a farad), nanofarads (nF), or picofarads (pF).</p>\n<p>Once a capacitor is charged to the supply voltage, no more (DC) current flows — it behaves like an open circuit to DC. But with AC, the voltage keeps reversing, so the capacitor keeps charging and discharging, and current keeps flowing back and forth. That is why a capacitor blocks DC but passes AC — and why it is used to couple AC signals between stages of an amplifier while blocking the DC bias voltages.</p>\n"
    },
    {
      "heading": "Capacitive Reactance: Opposition That Depends on Frequency",
      "html": "<p>A capacitor opposes AC current, and that opposition is called capacitive reactance (XC), measured in ohms. The formula is <strong>XC = 1 ÷ (2πfC)</strong>. Two things matter: frequency and capacitance. Higher frequency means lower reactance — the capacitor has less time to charge, so it gets in the way less. Bigger capacitance also means lower reactance — it can take more charge per cycle.</p>\n<p>Example: C = 100 µF at 60 Hz. XC = 1 ÷ (2 × 3.1416 × 60 × 100 × 10⁻⁶) = 1 ÷ 0.0377 ≈ 26.5 Ω. At 120 Hz, XC halves to about 13.3 Ω. At DC (f = 0), the formula gives infinite reactance — an open circuit, exactly as expected. That frequency dependence is what makes capacitors useful as filters: a capacitor can pass high frequencies and block low ones.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> XC = 1 ÷ (2πfC). Higher frequency → lower XC. Bigger capacitor → lower XC. At DC, XC is infinite.</div></p>\n"
    },
    {
      "heading": "Current Leads Voltage by 90°",
      "html": "<p>In a capacitor, current flows first and voltage follows. When the AC voltage starts to rise from zero, current rushes in to charge the plates; the voltage across the capacitor only builds up as charge accumulates. The current reaches its peak a quarter-cycle (90°) before the voltage does — current leads voltage by 90°. On a phasor diagram, the current phasor points 90° ahead of the voltage phasor.</p>\n<p>An ideal capacitor dissipates no power: it stores energy in its electric field for a quarter-cycle and gives it all back in the next quarter-cycle. Real capacitors have a little resistance and lose a little energy as heat, but the ideal picture — energy borrowed and returned, none used up — is the right way to think about them.</p>\n"
    },
    {
      "heading": "Capacitors in Real Circuits",
      "html": "<p>Capacitors are used for power-factor correction (Module 6), for filtering ripple out of power supplies, for coupling signals, for timing circuits, and for starting single-phase motors. In a motor start capacitor, the capacitor shifts the phase of the current in a second winding, which creates the rotating effect a single-phase motor needs to start — you will meet that in Module 12.</p>\n<p>Safety note: a capacitor can hold a dangerous charge after the power is switched off. Large capacitors — in power supplies, motor circuits, and especially in microwave ovens and industrial equipment — must be discharged with a proper discharge tool before anyone touches them. Never short a big capacitor with a screwdriver to discharge it: the bang can damage the capacitor, the tool, and you. Follow the equipment's procedure.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A capacitor stores energy in an electric field between two plates.</li><li>It blocks DC (once charged) and passes AC.</li><li>XC = 1 ÷ (2πfC): higher frequency or bigger capacitance means lower reactance.</li><li>Current leads voltage by 90° in a capacitor (ICE).</li><li>An ideal capacitor stores and returns energy; it dissipates no power.</li><li>Capacitors can stay charged after switch-off — discharge them properly before touching.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting to convert microfarads to farads. 100 µF is 100 × 10⁻⁶ F = 0.0001 F. Using 100 in the formula gives an answer a million times too small.</p>\n<p><strong>Common mistake:</strong> Saying a capacitor “uses” power like a resistor. It does not — it borrows energy and returns it. That is why capacitors are used for power-factor correction: they cancel the reactive power of inductors without wasting energy.</p>\n<p><strong>Ready check:</strong> If you can find XC for 100 µF at 60 Hz (26.5 Ω) and say whether current leads or lags in a capacitor, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Capacitor",
      "def": "Two conducting plates separated by an insulator; stores energy in an electric field."
    },
    {
      "term": "Capacitance (C)",
      "def": "How much charge a capacitor stores per volt: C = Q ÷ V, measured in farads (F)."
    },
    {
      "term": "Farad (F)",
      "def": "The unit of capacitance; practical capacitors are µF, nF, or pF."
    },
    {
      "term": "Microfarad (µF)",
      "def": "One millionth of a farad: 1 µF = 10⁻⁶ F."
    },
    {
      "term": "Dielectric",
      "def": "The insulating material between a capacitor's plates."
    },
    {
      "term": "Capacitive reactance (XC)",
      "def": "A capacitor's opposition to AC, in ohms: XC = 1 ÷ (2πfC)."
    },
    {
      "term": "Current leads voltage",
      "def": "In a capacitor, current peaks 90° before voltage (ICE)."
    },
    {
      "term": "Charging",
      "def": "Charge building up on a capacitor's plates as voltage is applied."
    },
    {
      "term": "Filter",
      "def": "A circuit that passes some frequencies and blocks others; capacitors are key parts of filters."
    },
    {
      "term": "Coupling capacitor",
      "def": "A capacitor that passes an AC signal between stages while blocking DC."
    },
    {
      "term": "Start capacitor",
      "def": "A capacitor used to shift phase and start a single-phase motor."
    },
    {
      "term": "Stored charge (safety)",
      "def": "Charge a capacitor holds after switch-off; large capacitors must be discharged before handling."
    }
  ],
  "video": {
    "title": "What are Resistance Reactance Impedance | Prof MAD",
    "embedUrl": "https://www.youtube.com/embed/UrCFv2qCELI",
    "note": "Resistance, reactance, and impedance with the water analogy: how capacitors make current lead and inductors make it lag.",
    "more": [
      {
        "title": "Resistor, Inductor, and Capacitor Impedance Summary | ElectronX Lab",
        "url": "https://www.youtube.com/watch?v=M5h7fxoTb3w"
      },
      {
        "title": "AC Analysis: Series Resistor/Inductor/Capacitor Circuit | ElectronX Lab",
        "url": "https://www.youtube.com/watch?v=PzwnG72hFkw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 100 µF capacitor is connected to a 60 Hz supply. Find its capacitive reactance. Show the conversion from µF to F.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Convert: 100 µF = 100 × 10⁻⁶ F = 0.0001 F. Step 2: XC = 1 ÷ (2πfC) = 1 ÷ (2 × 3.1416 × 60 × 0.0001) = 1 ÷ 0.0377 ≈ 26.5 Ω.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same 100 µF capacitor is used at 120 Hz. What is XC now, and why did it change?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: XC = 1 ÷ (2 × 3.1416 × 120 × 0.0001) = 1 ÷ 0.0754 ≈ 13.3 Ω. Step 2: It halved because the frequency doubled — XC is inversely proportional to frequency. The capacitor has less time to charge each cycle, so it opposes the current less.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A capacitor has XC = 50 Ω at 60 Hz. What capacitance is it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Rearrange XC = 1 ÷ (2πfC) to C = 1 ÷ (2πf × XC). Step 2: C = 1 ÷ (2 × 3.1416 × 60 × 50) = 1 ÷ 18,850 ≈ 5.31 × 10⁻⁵ F = 53.1 µF.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 120 V RMS, 60 Hz supply is connected to a capacitor with XC = 40 Ω. What current flows, and does it lead or lag the voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I = V ÷ XC = 120 ÷ 40 = 3 A. Step 2: In a capacitor the current leads the voltage by 90° (ICE).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain in plain words why a capacitor blocks DC but passes AC.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: With DC, the capacitor charges up to the supply voltage and then no more current can flow — the plates are separated by an insulator, so it acts as an open circuit. Step 2: With AC, the voltage keeps reversing, so the capacitor keeps charging and discharging, and current keeps flowing back and forth through the external circuit. Step 3: So DC is blocked after the first charge, while AC flows continuously.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A technician is about to replace a capacitor in a power supply that was switched off five minutes ago. What must they do first, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The capacitor must be discharged with a proper discharge tool, following the equipment's procedure — and the discharge verified with a meter. Step 2: Because a capacitor can hold a dangerous charge long after the power is off. Step 3: Never short a large capacitor with a screwdriver: the sudden discharge can damage the capacitor and injure the person.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is the capacitive reactance of a 100 µF capacitor at 60 Hz?",
      "choices": [
        "265 Ω",
        "26.5 Ω",
        "2.65 Ω",
        "0.265 Ω"
      ],
      "answer": 1,
      "explanation": "Correct: (b). XC = 1 ÷ (2π × 60 × 100 × 10⁻⁶) ≈ 26.5 Ω. (a) 265 Ω is ten times too big — a decimal slip. (c) 2.65 Ω is ten times too small. (d) 0.265 Ω is a hundred times too small."
    },
    {
      "q": "If the frequency doubles, what happens to XC?",
      "choices": [
        "It doubles",
        "It halves",
        "It stays the same",
        "It becomes zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). XC = 1 ÷ (2πfC), so doubling f halves XC. (a) is the inductor's behaviour. (c) is wrong: XC depends on frequency. (d) is wrong: XC only approaches zero at very high frequency."
    },
    {
      "q": "In a capacitor, the current ______ the voltage by 90°.",
      "choices": [
        "lags",
        "leads",
        "matches",
        "cancels"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Current leads voltage by 90° in a capacitor (ICE). (a) is the inductor's behaviour. (c) is the resistor's behaviour. (d) is wrong."
    },
    {
      "q": "Why does a capacitor block DC once it is charged?",
      "choices": [
        "Its plates melt",
        "Its plates are separated by an insulator, so no steady current can cross",
        "Its capacitance becomes zero",
        "DC is too weak to pass"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The dielectric is an insulator: once charged, no more charge can cross, so DC current stops. (a) is wrong: nothing melts. (c) is wrong: capacitance does not change. (d) is wrong: DC strength is irrelevant."
    },
    {
      "q": "How many farads are in 100 µF?",
      "choices": [
        "100 F",
        "0.1 F",
        "0.0001 F",
        "1,000,000 F"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1 µF = 10⁻⁶ F, so 100 µF = 100 × 10⁻⁶ = 0.0001 F. (a) forgets the micro. (b) is 100 mF. (d) is backwards."
    },
    {
      "q": "A capacitor is connected to 120 V RMS AC and draws 3 A. What is its reactance?",
      "choices": [
        "360 Ω",
        "40 Ω",
        "0.025 Ω",
        "123 Ω"
      ],
      "answer": 1,
      "explanation": "Correct: (b). XC = V ÷ I = 120 ÷ 3 = 40 Ω. (a) 360 Ω multiplies. (c) 0.025 Ω is 3 ÷ 120 — upside down. (d) 123 Ω adds the numbers."
    },
    {
      "q": "Which of these is a real use of a capacitor?",
      "choices": [
        "Storing energy in a magnetic field",
        "Power-factor correction and filtering ripple in power supplies",
        "Increasing the resistance of a circuit",
        "Generating AC from DC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Capacitors correct power factor and filter power supplies. (a) describes an inductor. (c) is wrong: capacitors add reactance, not resistance. (d) describes an inverter, not a capacitor."
    },
    {
      "q": "What is the safety rule for a large capacitor in equipment that has just been switched off?",
      "choices": [
        "Touch it to check if it is warm",
        "Discharge it properly with the right tool and verify with a meter before touching",
        "Short it with a screwdriver to discharge it fast",
        "Ignore it — capacitors discharge instantly"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Large capacitors hold charge after switch-off; discharge them properly and verify. (a) is dangerous. (c) is dangerous: a sudden short can explode the capacitor. (d) is wrong: discharge takes time, and some capacitors hold charge for a long while."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Capacitors in AC: Quick Reference</h3>\n<p><strong>Core idea:</strong> A capacitor stores energy in an electric field, blocks DC, and passes AC. XC = 1 ÷ (2πfC); current leads voltage by 90°.</p>\n<p><strong>Key terms:</strong> Capacitor · Capacitance · Capacitive reactance · Current leads voltage · Dielectric.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>XC = 1 ÷ (2πfC) — higher f or bigger C means lower XC.</li>\n<li>Convert µF to F before calculating (100 µF = 0.0001 F).</li>\n<li>Current leads voltage by 90° (ICE).</li>\n<li>Capacitors hold charge after switch-off — discharge properly.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
