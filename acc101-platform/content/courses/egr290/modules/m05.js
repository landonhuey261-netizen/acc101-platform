// egr290 — module 5. Original review content.
module.exports = {
  "number": 5,
  "slug": "electrical-fundamentals-dc-ac",
  "title": "Electrical Fundamentals: DC and AC Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Apply Ohm's law, Kirchhoff's laws, and series/parallel reduction to DC circuits.",
    "Calculate power, energy, and efficiency in DC and AC circuits.",
    "Find Thévenin and Norton equivalents and the maximum power transfer condition.",
    "Use phasors, impedance, and power factor for AC circuits.",
    "Calculate three-phase power and transformer voltage and current ratios."
  ],
  "sections": [
    {
      "heading": "DC Circuits: Ohm's Law and Kirchhoff's Laws",
      "html": "<p>Three laws carry all of DC circuit analysis. <strong>Ohm's law</strong>, V = IR, links voltage, current, and resistance: 24 V across 8 Ω drives I = 24/8 = 3 A, and the power is P = VI = 72 W (or P = I²R = 9 × 8 = 72 W — the same answer, which is the check). <strong>Kirchhoff's current law (KCL)</strong> says the currents entering a node equal the currents leaving it. <strong>Kirchhoff's voltage law (KVL)</strong> says the voltages around any closed loop sum to zero.</p><p><strong>Series resistors add:</strong> 10 + 20 + 30 = 60 Ω, so 120 V drives I = 120/60 = 2 A through all three. <strong>Parallel resistors combine as reciprocals:</strong> 1/R = 1/R₁ + 1/R₂ — two 12 Ω resistors in parallel give 6 Ω. The voltage across parallel branches is the same; the current divides in inverse proportion to the resistance. The <strong>voltage divider</strong> is the workhorse: in a series pair, the voltage across R₁ is V × R₁/(R₁ + R₂).</p>"
    },
    {
      "heading": "Thévenin, Norton, and Maximum Power",
      "html": "<p>Any linear network of sources and resistors, seen from two terminals, behaves like a single voltage source in series with a single resistor — the <strong>Thévenin equivalent</strong> (V_th, R_th). The <strong>Norton equivalent</strong> is the same network as a current source in parallel with the same resistance, with I_N = V_th/R_th. Worked example: V_th = 10 V and R_th = 5 Ω, with a 5 Ω load. The current is I = 10/(5 + 5) = 1 A, and the load power is P = I²R = 1 × 5 = 5 W.</p><p><strong>Maximum power transfer</strong> happens when the load resistance equals the Thévenin resistance: R_L = R_th. In the example above the load is 5 Ω and R_th is 5 Ω, so the load is already at maximum power — 5 W, which is half the power the source delivers (the other 5 W is lost in R_th). That 50% efficiency is the price of maximum power, and it is why power systems do <em>not</em> run at maximum power transfer — they run at high efficiency instead. The FE asks this distinction often.</p>"
    },
    {
      "heading": "AC Circuits: Phasors, Impedance, and Power Factor",
      "html": "<p>AC analysis uses <strong>phasors</strong>: a sinusoid becomes a complex number, and resistors, inductors, and capacitors become impedances — R for a resistor, jωL for an inductor, 1/jωC for a capacitor. The magnitude of the impedance is |Z| = √(R² + X²), where X is the net reactance. A 120 V RMS source across a 10 Ω resistor drives 12 A RMS and 1,440 W. Remember: RMS values, not peak values, are what meters read and what power formulas use — V_peak = √2 × V_RMS.</p><p><strong>Power factor</strong> is PF = P/S = cos φ, where S is the apparent power in VA and P is the real power in W. A load drawing 800 W with S = 1,000 VA has PF = 0.8, and the reactive power is Q = √(S² − P²) = √(1,000,000 − 640,000) = √360,000 = 600 VAR. <strong>Resonance</strong> happens when inductive and capacitive reactance cancel: f₀ = 1/(2π√(LC)). With L = 10 mH and C = 100 nF, LC = 10⁻² × 10⁻⁷ = 10⁻⁹, √LC = 3.16 × 10⁻⁵, and f₀ = 1/(2π × 3.16 × 10⁻⁵) = 5,033 Hz ≈ 5.03 kHz. At resonance the impedance is purely resistive and the current is at its maximum.</p>"
    },
    {
      "heading": "Three-Phase Power and Transformers",
      "html": "<p>Industrial power is <strong>three-phase</strong>: three voltages 120° apart. For a balanced load, P = √3 × V_L × I_L × PF. A 480 V line, 10 A line current, PF 0.8 load draws P = 1.732 × 480 × 10 × 0.8 = 6,651 W ≈ 6.65 kW. Line voltage relates to phase voltage by V_L = √3 × V_phase in a wye connection; in a delta connection the line and phase voltages are equal. The 120° spacing is why three-phase motors start themselves and run smoothly — and why a lost phase makes a motor overheat.</p><p>A <strong>transformer</strong> changes voltage by the turns ratio: V₂/V₁ = N₂/N₁, and (ideally) I₂/I₁ = N₁/N₂, because power in equals power out. A transformer with a 10:1 turns ratio fed with 480 V gives 48 V on the secondary; a 20 A secondary current means a 2 A primary current. Real transformers have copper losses (I²R in the windings) and core losses (hysteresis and eddy currents), so efficiency is high — typically 95–99% — but never 100%. Step-up transformers raise voltage for transmission; step-down transformers lower it for use.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>DC: V = IR, P = VI = I²R. Series adds; parallel combines as reciprocals. KCL at a node, KVL around a loop.</li><li>Thévenin: any network looks like V_th in series with R_th. Maximum power when R_L = R_th — at 50% efficiency.</li><li>AC: use RMS values for power. Impedance Z = R + jX. PF = P/S = cos φ. Resonance f₀ = 1/(2π√(LC)).</li><li>Three-phase: P = √3 V_L I_L PF. Transformer: V₂/V₁ = N₂/N₁, I₂/I₁ = N₁/N₂.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Using peak voltage in a power calculation. Power uses RMS — V_peak = √2 × V_RMS.</div><div class=\"callout\"><strong>Common mistake:</strong> Saying maximum power transfer is the goal for a power system. It is the goal for a signal circuit; a power system wants efficiency.</div><p><strong>Ready-to-Work link:</strong> If you can reduce a series-parallel circuit, find a Thévenin equivalent, and calculate three-phase power, you have this module. Module 6 moves to digital systems and PLCs.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Ohm's law",
      "def": "V = IR: voltage equals current times resistance."
    },
    {
      "term": "KCL",
      "def": "Kirchhoff's current law: currents entering a node equal currents leaving it."
    },
    {
      "term": "KVL",
      "def": "Kirchhoff's voltage law: voltages around a closed loop sum to zero."
    },
    {
      "term": "Thévenin equivalent",
      "def": "Any linear network seen from two terminals behaves as V_th in series with R_th."
    },
    {
      "term": "Maximum power transfer",
      "def": "Maximum load power when R_L = R_th — at 50% efficiency."
    },
    {
      "term": "RMS",
      "def": "Root mean square: the AC value that delivers the same power as the equivalent DC value."
    },
    {
      "term": "Phasor",
      "def": "A complex number representing an AC sinusoid's magnitude and phase."
    },
    {
      "term": "Impedance",
      "def": "Z = R + jX: the AC opposition to current, with resistance and reactance."
    },
    {
      "term": "Power factor",
      "def": "PF = P/S = cos φ: the fraction of apparent power that is real power."
    },
    {
      "term": "Resonance",
      "def": "When inductive and capacitive reactance cancel: f₀ = 1/(2π√(LC))."
    },
    {
      "term": "Three-phase power",
      "def": "P = √3 V_L I_L PF for a balanced three-phase load."
    },
    {
      "term": "Transformer",
      "def": "Changes AC voltage by the turns ratio: V₂/V₁ = N₂/N₁."
    }
  ],
  "video": {
    "title": "Transformers Explained - How transformers work",
    "embedUrl": "https://www.youtube.com/embed/jcY4QN7awEc",
    "note": "A clear visual explanation of how a transformer steps voltage up and down — watch it, then redo the turns-ratio examples in this module.",
    "more": [
      {
        "title": "How To Use The NEC, NEC 2020, (29min:15sec)",
        "url": "https://www.youtube.com/watch?v=OVTS2yDIFM4"
      },
      {
        "title": "NEC 2023 — Dwelling Calculations (Art. 220)",
        "url": "https://www.youtube.com/watch?v=pT1FfXcj1Pc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 24 V source drives an 8 Ω resistor. Find the current and the power.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I = V/R = 24/8 = 3 A. Step 2: P = VI = 24 × 3 = 72 W (check: I²R = 9 × 8 = 72 W).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Three resistors (10 Ω, 20 Ω, 30 Ω) are in series across 120 V. Find the current.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: R_total = 10 + 20 + 30 = 60 Ω. Step 2: I = 120/60 = 2 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A Thévenin source has V_th = 10 V and R_th = 5 Ω, driving a 5 Ω load. Find the load current and power, and state whether this is maximum power.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I = 10/(5 + 5) = 1 A. Step 2: P = I²R = 1 × 5 = 5 W. Step 3: Yes — R_L = R_th = 5 Ω, so this is maximum power transfer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A load draws 800 W with an apparent power of 1,000 VA. Find the power factor and the reactive power.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: PF = P/S = 800/1,000 = 0.8. Step 2: Q = √(S² − P²) = √(1,000,000 − 640,000) = √360,000 = 600 VAR.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A balanced three-phase load has V_L = 480 V, I_L = 10 A, and PF = 0.8. Find the real power. A 10:1 transformer fed with 480 V supplies a 20 A load — find the secondary voltage and primary current.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = √3 × 480 × 10 × 0.8 = 6,651 W ≈ 6.65 kW. Step 2: V₂ = 480/10 = 48 V. Step 3: I₁ = I₂/10 = 20/10 = 2 A.</p>"
    }
  ],
  "quiz": [
    {
      "module": 5,
      "q": "A 24 V source drives an 8 Ω resistor. What is the current?",
      "choices": [
        "2 A",
        "3 A",
        "4 A",
        "8 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = 24/8 = 3 A. (a) is wrong: that is 24/12. (c) is wrong: that is 24/6. (d) is wrong: that is the resistance, not the current."
    },
    {
      "module": 5,
      "q": "Two 12 Ω resistors in parallel have an equivalent resistance of:",
      "choices": [
        "24 Ω",
        "12 Ω",
        "6 Ω",
        "3 Ω"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Equal resistors in parallel halve: 12/2 = 6 Ω. (a) is wrong: that is the series value. (b) is wrong: that is one resistor alone. (d) is wrong: that would need four 12 Ω resistors in parallel."
    },
    {
      "module": 5,
      "q": "A Thévenin source (V_th = 10 V, R_th = 5 Ω) drives a 5 Ω load. What is the load power?",
      "choices": [
        "2.5 W",
        "5 W",
        "10 W",
        "20 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = 10/10 = 1 A, so P = 1² × 5 = 5 W. (a) is wrong: that is the power in R_th alone at half current. (c) is wrong: that is V_th × I with I = 1 A and V = 10 V — the load only sees 5 V. (d) is wrong: that is V_th²/R_th."
    },
    {
      "module": 5,
      "q": "Maximum power transfer happens when:",
      "choices": [
        "R_L = 0",
        "R_L = R_th",
        "R_L is as large as possible",
        "R_L = 2 × R_th"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Maximum power when the load equals the Thévenin resistance. (a) is wrong: a short circuit draws maximum current but zero load power. (c) is wrong: a huge load draws almost no current. (d) is wrong: that is not the maximum-power condition."
    },
    {
      "module": 5,
      "q": "A 120 V RMS source drives a 10 Ω resistor. What is the power?",
      "choices": [
        "1,200 W",
        "1,440 W",
        "12 W",
        "2,880 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = 120/10 = 12 A, P = 120 × 12 = 1,440 W. (a) is wrong: that is 120 × 10. (c) is wrong: that is the current, not the power. (d) is wrong: that uses peak voltage (170 V) instead of RMS."
    },
    {
      "module": 5,
      "q": "A load draws 800 W with S = 1,000 VA. What is its power factor?",
      "choices": [
        "0.6",
        "0.8",
        "1.25",
        "0.5"
      ],
      "answer": 1,
      "explanation": "Correct: (b). PF = 800/1,000 = 0.8. (a) is wrong: that is Q/S = 600/1,000. (c) is wrong: that is S/P, upside down. (d) is wrong: that is not the ratio here."
    },
    {
      "module": 5,
      "q": "A balanced three-phase load has V_L = 480 V, I_L = 10 A, PF = 0.8. What is the real power?",
      "choices": [
        "3,840 W",
        "6,651 W",
        "4,800 W",
        "8,314 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P = √3 × 480 × 10 × 0.8 = 6,651 W. (a) is wrong: that is 480 × 10 × 0.8, forgetting √3. (c) is wrong: that is 480 × 10, forgetting PF and √3. (d) is wrong: that is √3 × 480 × 10, forgetting PF."
    },
    {
      "module": 5,
      "q": "A 10:1 step-down transformer is fed with 480 V and supplies 20 A. What is the primary current?",
      "choices": [
        "200 A",
        "20 A",
        "2 A",
        "0.2 A"
      ],
      "answer": 2,
      "explanation": "Correct: (c). I₁ = I₂ × N₂/N₁ = 20/10 = 2 A (power in equals power out). (a) is wrong: that multiplies by 10 instead of dividing. (b) is wrong: that is the secondary current. (d) is wrong: that divides by 100."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Electrical Fundamentals: Quick Reference</h3>\n<p><strong>Core idea:</strong> Ohm's law and Kirchhoff's laws for DC; phasors, power factor, and three-phase for AC.</p>\n<p><strong>DC:</strong> V = IR · P = VI = I²R · series adds · parallel: 1/R = Σ 1/Rᵢ · KCL at a node · KVL around a loop.</p>\n<p><strong>Thévenin:</strong> V_th in series with R_th · maximum power when R_L = R_th (50% efficient).</p>\n<p><strong>AC:</strong> RMS for power · Z = R + jX · PF = P/S · resonance f₀ = 1/(2π√(LC)).</p>\n<p><strong>Three-phase:</strong> P = √3 V_L I_L PF · <strong>Transformer:</strong> V₂/V₁ = N₂/N₁, I₂/I₁ = N₁/N₂.</p>\n<p><strong>Watch out:</strong> Peak vs RMS in power; maximum power is for signals, efficiency is for power systems.</p>\n<p><strong>Self-check:</strong> Reduce a series-parallel circuit, find a Thévenin equivalent, and calculate three-phase power without looking. If you can, you have this module.</p>\n"
};
