// egr105 - Module 5: RLC Circuits & Impedance
module.exports = {
  "number": 5,
  "slug": "rlc-circuits-impedance",
  "title": "RLC Circuits & Impedance",
  "estTime": "3–4 hours",
  "objectives": [
    "Combine resistance and reactance into impedance Z.",
    "Find the impedance of a series RLC circuit and its phase angle.",
    "Use Ohm's law for AC: V = I × Z, with RMS values.",
    "Explain resonance: when XL = XC, impedance is at its minimum and current at its maximum.",
    "Work out a series RLC circuit end to end with real numbers."
  ],
  "sections": [
    {
      "heading": "Impedance: Resistance and Reactance Together",
      "html": "<p>Resistance (R) and reactance (X) both oppose current, and both are measured in ohms — but they oppose it in different ways. Resistance is in phase with the voltage; reactance is 90° out of phase. You cannot just add them: you must combine them as the sides of a right triangle. The result is impedance (Z), the total opposition to AC current: <strong>Z = √(R² + X²)</strong>, where X = XL − XC (inductive minus capacitive reactance). The phase angle is <strong>φ = tan⁻¹(X ÷ R)</strong>: positive means the current lags (inductive), negative means it leads (capacitive).</p>\n<p>Example: R = 30 Ω, XL = 40 Ω, XC = 10 Ω. Net reactance X = 40 − 10 = 30 Ω. Z = √(30² + 30²) = √1,800 ≈ 42.4 Ω. Phase angle φ = tan⁻¹(30 ÷ 30) = 45° — the current lags the voltage by 45°, because the circuit is net inductive. With a 120 V supply, the current is I = V ÷ Z = 120 ÷ 42.4 ≈ 2.83 A.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Z = √(R² + X²), X = XL − XC, φ = tan⁻¹(X ÷ R). Resistance and reactance add as a triangle, never as a plain sum.</div></p>\n"
    },
    {
      "heading": "Ohm's Law for AC",
      "html": "<p>Ohm's law works for AC exactly as for DC, as long as you use impedance instead of resistance and RMS values throughout: <strong>V = I × Z</strong>. In the example above, the voltage across the resistor is I × R = 2.83 × 30 ≈ 84.9 V; across the inductor, I × XL = 2.83 × 40 ≈ 113.1 V; across the capacitor, I × XC = 2.83 × 10 ≈ 28.3 V. Those three voltages do not add to 120 V as plain numbers (84.9 + 113.1 + 28.3 = 226.3) — because they are out of phase. They add as phasors: the inductor and capacitor voltages partly cancel (113.1 − 28.3 = 84.8 V of net reactance voltage), and √(84.9² + 84.8²) ≈ 120 V ✓. That phasor check is how you know the numbers are right.</p>\n"
    },
    {
      "heading": "Resonance: When XL Equals XC",
      "html": "<p>When XL = XC, the net reactance is zero, the impedance is at its minimum (Z = R), the current is at its maximum, and the voltage and current are in phase (φ = 0°). That condition is called resonance, and it happens at one frequency: <strong>f₀ = 1 ÷ (2π√(LC))</strong>. Example: L = 100 mH (0.1 H) and C = 100 µF (0.0001 F). √(LC) = √(0.1 × 0.0001) = √(0.00001) ≈ 0.00316. f₀ = 1 ÷ (2 × 3.1416 × 0.00316) ≈ 50.3 Hz. At 50.3 Hz, XL = 2π × 50.3 × 0.1 ≈ 31.6 Ω and XC = 1 ÷ (2π × 50.3 × 0.0001) ≈ 31.6 Ω — equal, as they must be.</p>\n<p>Resonance is useful (radio tuners pick one station by resonating at its frequency) and dangerous (at resonance the voltage across the inductor or capacitor can be far higher than the supply voltage). In a series RLC circuit at resonance, the inductor and capacitor voltages are equal and opposite, so they cancel at the terminals — but each one individually can be many times the supply voltage. Respect it.</p>\n"
    },
    {
      "heading": "Series and Parallel RLC",
      "html": "<p>In a series RLC circuit, the same current flows through all three parts, and the voltages add as phasors. In a parallel RLC circuit, all three parts share the same voltage, and the currents add as phasors. The maths is the mirror image: for parallel, work with the currents (IR = V ÷ R, IL = V ÷ XL, IC = V ÷ XC) and combine them as a triangle.</p>\n<p>Either way, the method is the same: find XL and XC at the supply frequency, combine them into X, find Z and φ, then use V = I × Z. And always check: the phase angle tells you whether the circuit is net inductive (current lags) or net capacitive (current leads), and at resonance the angle is zero.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Z = √(R² + X²); X = XL − XC; φ = tan⁻¹(X ÷ R).</li><li>V = I × Z, using RMS values — Ohm's law for AC.</li><li>Voltages in series RLC add as phasors, not as plain numbers.</li><li>Resonance: XL = XC, Z = R (minimum), current maximum, φ = 0°; f₀ = 1 ÷ (2π√(LC)).</li><li>At resonance, inductor and capacitor voltages can each exceed the supply voltage.</li></ul></p>\n<p><strong>Common mistake:</strong> Adding R and X as plain numbers: Z is not R + X. For R = 30 Ω and X = 30 Ω, Z is 42.4 Ω, not 60 Ω. Use the triangle.</p>\n<p><strong>Common mistake:</strong> Adding the resistor, inductor, and capacitor voltages as plain numbers and expecting the supply voltage. They are out of phase — add them as phasors.</p>\n<p><strong>Ready check:</strong> If you can find Z (42.4 Ω), the current (2.83 A), and the phase angle (45° lagging) for R = 30 Ω, XL = 40 Ω, XC = 10 Ω at 120 V, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Impedance (Z)",
      "def": "The total opposition to AC current, in ohms: Z = √(R² + X²)."
    },
    {
      "term": "Reactance (X)",
      "def": "Net reactance: X = XL − XC; positive means net inductive, negative means net capacitive."
    },
    {
      "term": "Phase angle (φ)",
      "def": "The angle between voltage and current: φ = tan⁻¹(X ÷ R)."
    },
    {
      "term": "Ohm's law for AC",
      "def": "V = I × Z, using RMS values and impedance."
    },
    {
      "term": "Resonance",
      "def": "The condition XL = XC, when impedance is minimum, current is maximum, and voltage and current are in phase."
    },
    {
      "term": "Resonant frequency (f₀)",
      "def": "f₀ = 1 ÷ (2π√(LC)): the frequency at which XL = XC."
    },
    {
      "term": "Impedance triangle",
      "def": "The right triangle with R, X, and Z as its sides."
    },
    {
      "term": "Voltage triangle",
      "def": "The right triangle formed by the resistor voltage, net reactance voltage, and supply voltage."
    },
    {
      "term": "Net inductive",
      "def": "XL > XC, so X is positive and current lags voltage."
    },
    {
      "term": "Net capacitive",
      "def": "XC > XL, so X is negative and current leads voltage."
    },
    {
      "term": "Quality factor (Q)",
      "def": "A measure of how sharp a resonance is: higher Q means a narrower, taller peak."
    },
    {
      "term": "Bandwidth",
      "def": "The range of frequencies around resonance where the current stays high."
    }
  ],
  "video": {
    "title": "AC Analysis: Series Resistor/Inductor/Capacitor Circuit | ElectronX Lab",
    "embedUrl": "https://www.youtube.com/embed/PzwnG72hFkw",
    "note": "A series RLC circuit analysed step by step: reactances, impedance, voltages, and current.",
    "more": [
      {
        "title": "Resistor, Inductor, and Capacitor Impedance Summary | ElectronX Lab",
        "url": "https://www.youtube.com/watch?v=M5h7fxoTb3w"
      },
      {
        "title": "What are Resistance Reactance Impedance | Prof MAD",
        "url": "https://www.youtube.com/watch?v=UrCFv2qCELI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A series RLC circuit has R = 30 Ω, XL = 40 Ω, XC = 10 Ω, and a 120 V supply. Find the net reactance, the impedance, the phase angle, and the current.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: X = XL − XC = 40 − 10 = 30 Ω. Step 2: Z = √(30² + 30²) = √1,800 ≈ 42.4 Ω. Step 3: φ = tan⁻¹(30 ÷ 30) = 45° — current lags (net inductive). Step 4: I = 120 ÷ 42.4 ≈ 2.83 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> For the circuit in Problem 1, find the voltage across each component and check that they combine to 120 V as phasors.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: VR = 2.83 × 30 ≈ 84.9 V. Step 2: VL = 2.83 × 40 ≈ 113.1 V. Step 3: VC = 2.83 × 10 ≈ 28.3 V. Step 4: Net reactance voltage = 113.1 − 28.3 = 84.8 V; total = √(84.9² + 84.8²) ≈ 120 V ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A series circuit has R = 40 Ω, XL = 30 Ω, XC = 60 Ω, and a 100 V supply. Find Z, φ, and I, and say whether the current leads or lags.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: X = 30 − 60 = −30 Ω (net capacitive). Step 2: Z = √(40² + 30²) = √2,500 = 50 Ω. Step 3: φ = tan⁻¹(−30 ÷ 40) ≈ −36.9° — current leads by 36.9°. Step 4: I = 100 ÷ 50 = 2 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Find the resonant frequency of a series circuit with L = 100 mH and C = 100 µF. Then confirm XL = XC at that frequency.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: f₀ = 1 ÷ (2π√(LC)) = 1 ÷ (2 × 3.1416 × √(0.1 × 0.0001)) = 1 ÷ (2 × 3.1416 × 0.00316) ≈ 50.3 Hz. Step 2: XL = 2π × 50.3 × 0.1 ≈ 31.6 Ω. Step 3: XC = 1 ÷ (2π × 50.3 × 0.0001) ≈ 31.6 Ω ✓ — equal, as resonance requires.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A series RLC circuit at resonance has R = 10 Ω and a 120 V supply. What is the current, and what is the impedance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At resonance XL = XC, so X = 0 and Z = R = 10 Ω. Step 2: I = V ÷ Z = 120 ÷ 10 = 12 A — the maximum current for this circuit. Step 3: The voltage and current are in phase (φ = 0°).</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A student calculates Z = R + X = 30 + 30 = 60 Ω for the circuit in Problem 1. Explain the error and give the right answer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Resistance and reactance are 90° apart, so they add as the sides of a right triangle, not as plain numbers. Step 2: The right value is Z = √(30² + 30²) ≈ 42.4 Ω. Step 3: Adding them directly (60 Ω) overstates the impedance and understates the current.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A series RLC circuit has R = 30 Ω, XL = 40 Ω, XC = 10 Ω. What is the impedance?",
      "choices": [
        "60 Ω",
        "42.4 Ω",
        "80 Ω",
        "30 Ω"
      ],
      "answer": 1,
      "explanation": "Correct: (b). X = 40 − 10 = 30 Ω; Z = √(30² + 30²) ≈ 42.4 Ω. (a) 60 Ω adds R + X directly — the classic error. (c) 80 Ω adds all three numbers. (d) 30 Ω is R alone."
    },
    {
      "q": "In that same circuit, what is the phase angle, and does the current lead or lag?",
      "choices": [
        "45° lagging",
        "45° leading",
        "90° lagging",
        "0°"
      ],
      "answer": 0,
      "explanation": "Correct: (a). φ = tan⁻¹(30 ÷ 30) = 45°, and X is positive (net inductive), so the current lags. (b) is wrong: leading needs net capacitive. (c) is the angle for a pure inductor. (d) is the angle at resonance."
    },
    {
      "q": "In that same circuit with a 120 V supply, what is the current?",
      "choices": [
        "2 A",
        "2.83 A",
        "4 A",
        "1.5 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = V ÷ Z = 120 ÷ 42.4 ≈ 2.83 A. (a) 2 A is 120 ÷ 60 — using the wrong Z. (c) 4 A is 120 ÷ 30 — using R only. (d) 1.5 A is 120 ÷ 80 — using the sum of all three."
    },
    {
      "q": "What happens at resonance in a series RLC circuit?",
      "choices": [
        "XL becomes zero",
        "XL = XC, impedance is minimum (Z = R), and current is maximum",
        "The current becomes zero",
        "The resistance becomes zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At resonance the reactances cancel, Z = R, and the current peaks. (a) is wrong: XL equals XC, neither is zero. (c) is wrong: current is maximum, not zero. (d) is wrong: R is unchanged."
    },
    {
      "q": "What is the resonant frequency of a circuit with L = 0.1 H and C = 100 µF?",
      "choices": [
        "60 Hz",
        "50.3 Hz",
        "100 Hz",
        "31.6 Hz"
      ],
      "answer": 1,
      "explanation": "Correct: (b). f₀ = 1 ÷ (2π√(0.1 × 0.0001)) ≈ 50.3 Hz. (a) 60 Hz is the mains frequency, not the resonant one. (c) 100 Hz is double. (d) 31.6 is the reactance at resonance, not the frequency."
    },
    {
      "q": "In a series RLC circuit, the resistor voltage is 84.9 V and the net reactance voltage is 84.8 V. What is the supply voltage?",
      "choices": [
        "169.7 V",
        "120 V",
        "84.9 V",
        "0.1 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voltages add as phasors: √(84.9² + 84.8²) ≈ 120 V. (a) adds them directly — the classic error. (c) is one voltage alone. (d) subtracts them."
    },
    {
      "q": "A series circuit has R = 40 Ω, XL = 30 Ω, XC = 60 Ω. Is it net inductive or net capacitive?",
      "choices": [
        "Net inductive",
        "Net capacitive",
        "Purely resistive",
        "At resonance"
      ],
      "answer": 1,
      "explanation": "Correct: (b). X = 30 − 60 = −30 Ω: negative means net capacitive, so the current leads. (a) would need XL > XC. (c) would need X = 0. (d) would need XL = XC."
    },
    {
      "q": "Why can the voltage across an inductor at resonance be higher than the supply voltage?",
      "choices": [
        "Because the resistor is shorted out",
        "Because the inductor and capacitor voltages are equal and opposite, so each can be large while they cancel at the terminals",
        "Because resonance creates energy",
        "Because the supply voltage doubles"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At resonance VL and VC are large and opposite, cancelling at the terminals while each is individually big. (a) is wrong: the resistor is still there. (c) is wrong: resonance does not create energy. (d) is wrong: the supply is unchanged."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — RLC Circuits & Impedance: Quick Reference</h3>\n<p><strong>Core idea:</strong> Impedance is the triangle sum of R and X: Z = √(R² + X²). At resonance XL = XC and Z = R.</p>\n<p><strong>Key terms:</strong> Impedance · Reactance · Phase angle · Resonance · Resonant frequency.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Z = √(R² + X²); X = XL − XC; φ = tan⁻¹(X ÷ R).</li>\n<li>V = I × Z with RMS values.</li>\n<li>Voltages add as phasors, not plain numbers.</li>\n<li>Resonance: XL = XC, Z = R, current maximum, φ = 0°.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
