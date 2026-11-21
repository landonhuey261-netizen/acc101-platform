// ele103 - Module 4: Impedance & Series RLC Circuits
module.exports = {
  "number": 4,
  "slug": "impedance-and-series-rlc-circuits",
  "title": "Impedance & Series RLC Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Define impedance and explain how it combines resistance and reactance.",
    "Calculate total impedance in a series RLC circuit using the impedance triangle.",
    "Calculate total current and the voltage across each component.",
    "Explain the phase angle and power factor in a series RLC circuit.",
    "Describe series resonance and what happens at the resonant frequency."
  ],
  "sections": [
    {
      "heading": "What Impedance Is",
      "html": "<p><strong>Impedance (Z)</strong> is the total opposition to current in an AC circuit, measured in ohms. It combines resistance (R), which turns energy into heat, with reactance (X), which stores energy in a field and returns it. Inductive reactance (X<sub>L</sub>) and capacitive reactance (X<sub>C</sub>) oppose each other: the net reactance is X = X<sub>L</sub> − X<sub>C</sub>. If X<sub>L</sub> is bigger, the circuit is net inductive; if X<sub>C</sub> is bigger, it is net capacitive; if they are equal, they cancel and the circuit is purely resistive.</p>\n<p>Impedance is found with the <strong>impedance triangle</strong>: resistance is one side, net reactance is the other, and impedance is the hypotenuse, so Z = √(R² + X²). The angle between the resistance and the impedance is the <strong>phase angle (θ)</strong>, and it tells how far the current is out of step with the voltage. The phase angle is found with tan θ = X ÷ R, or cos θ = R ÷ Z — and cos θ is the power factor, covered in Module 7.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Impedance is not R + X. It is the hypotenuse of the triangle — resistance and reactance combine at right angles, not in a straight line.</div>"
    },
    {
      "heading": "Series RLC: Total Impedance & Current",
      "html": "<p>Worked example: a series circuit with R = 30 Ω, X<sub>L</sub> = 40 Ω, and X<sub>C</sub> = 10 Ω, fed by 120 V at 60 Hz. Step 1: net reactance X = X<sub>L</sub> − X<sub>C</sub> = 40 − 10 = 30 Ω inductive. Step 2: impedance Z = √(R² + X²) = √(30² + 30²) = √1,800 ≈ 42.4 Ω. Step 3: total current I = E ÷ Z = 120 ÷ 42.4 ≈ 2.83 A. Step 4: the phase angle is tan θ = X ÷ R = 30 ÷ 30 = 1, so θ = 45°, and the current lags the voltage by 45° because the circuit is net inductive.</p>\n<p>The voltage across each component is found with Ohm's law for AC: V<sub>R</sub> = I × R = 2.83 × 30 ≈ 84.9 V, V<sub>L</sub> = I × X<sub>L</sub> = 2.83 × 40 ≈ 113.2 V, and V<sub>C</sub> = I × X<sub>C</sub> = 2.83 × 10 ≈ 28.3 V. Notice that V<sub>L</sub> is nearly as big as the source voltage, and that the component voltages do not add up to 120 volts in a straight line — they add as vectors, because V<sub>L</sub> and V<sub>C</sub> are 180 degrees apart and cancel each other in part. The vector sum is the source voltage, and it checks: √(V<sub>R</sub>² + (V<sub>L</sub> − V<sub>C</sub>)²) = √(84.9² + 84.9²) ≈ 120 V.</p>"
    },
    {
      "heading": "The Phase Angle & Power Factor",
      "html": "<p>The phase angle θ is the angle between the voltage and the current. In a series RLC circuit it is found from the impedance triangle: cos θ = R ÷ Z. In the example, cos θ = 30 ÷ 42.4 ≈ 0.707, so θ ≈ 45°. The <strong>power factor</strong> is cos θ — 0.707 in the example — and it is the fraction of the apparent power that becomes real, useful power. A power factor of 1 means the current is in step with the voltage and all the power is real; a power factor of 0.707 means about 71% of the power is real and the rest is reactive, sloshing back and forth between the source and the circuit's fields.</p>\n<p>The sign of the phase angle tells the circuit's character: a positive angle (current lagging) means net inductive; a negative angle (current leading) means net capacitive. The electrician reads the angle the way a doctor reads a pulse — it says what kind of circuit this is and what kind of correction it needs.</p>"
    },
    {
      "heading": "Series Resonance",
      "html": "<p><strong>Series resonance</strong> happens when X<sub>L</sub> equals X<sub>C</sub> at a particular frequency. The reactances cancel, the impedance falls to its minimum — just the resistance — and the current rises to its maximum. The resonant frequency is f<sub>0</sub> = 1 ÷ (2π√(LC)). At resonance, the voltages across the inductor and the capacitor can each be much larger than the source voltage, because they are equal and opposite and cancel each other — a fact that can damage components if the circuit is not designed for it.</p>\n<p>Resonance is used on purpose in radio tuners, filters, and induction heating, where a sharp response at one frequency is wanted. It is a hazard in power circuits, where an accidental resonance can make voltages far higher than the insulation is rated for. The lesson is the same in both cases: at resonance, the reactances cancel and the circuit behaves as if it were purely resistive — with a current set only by the resistance.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Impedance Z = √(R² + X²), where X = X<sub>L</sub> − X<sub>C</sub>; it is the hypotenuse of the impedance triangle.</li>\n<li>Phase angle: tan θ = X ÷ R, cos θ = R ÷ Z; cos θ is the power factor.</li>\n<li>Component voltages: V<sub>R</sub> = I × R, V<sub>L</sub> = I × X<sub>L</sub>, V<sub>C</sub> = I × X<sub>C</sub>; they add as vectors, not in a straight line.</li>\n<li>Net inductive means current lags; net capacitive means current leads.</li>\n<li>Series resonance: X<sub>L</sub> = X<sub>C</sub>, Z is minimum (just R), current is maximum, f<sub>0</sub> = 1 ÷ (2π√(LC)).</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Adding R, X_L, and X_C in a straight line to get impedance. They combine at right angles — use the triangle, Z = √(R² + X²).</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Adding component voltages in a straight line and expecting the source voltage. V_L and V_C are 180° apart and partly cancel — add them as vectors.</div>\n<p><strong>Ready-to-Work link:</strong> If you can find Z, I, the phase angle, and each component voltage in a series RLC circuit, you have this module. Module 5 covers parallel RLC and resonance.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Impedance (Z)",
      "def": "The total opposition to current in an AC circuit, in ohms; Z = √(R² + X²)."
    },
    {
      "term": "Net reactance (X)",
      "def": "X_L − X_C; the combined reactance of a circuit."
    },
    {
      "term": "Impedance triangle",
      "def": "The right triangle with R and X as sides and Z as the hypotenuse."
    },
    {
      "term": "Phase angle (θ)",
      "def": "The angle between the voltage and current waves; tan θ = X ÷ R."
    },
    {
      "term": "Power factor",
      "def": "cos θ; the fraction of apparent power that becomes real power."
    },
    {
      "term": "Vector sum",
      "def": "Adding quantities that have both magnitude and direction, such as AC voltages."
    },
    {
      "term": "Series RLC circuit",
      "def": "A resistor, inductor, and capacitor connected in series."
    },
    {
      "term": "Series resonance",
      "def": "The condition where X_L = X_C; impedance is minimum and current is maximum."
    },
    {
      "term": "Resonant frequency (f_0)",
      "def": "The frequency at which X_L = X_C; f_0 = 1 ÷ (2π√(LC))."
    },
    {
      "term": "Net inductive",
      "def": "A circuit where X_L is bigger than X_C; current lags voltage."
    },
    {
      "term": "Net capacitive",
      "def": "A circuit where X_C is bigger than X_L; current leads voltage."
    },
    {
      "term": "V_R",
      "def": "The voltage across the resistor in an RLC circuit; in phase with the current."
    },
    {
      "term": "V_L",
      "def": "The voltage across the inductor; 90° ahead of the current."
    },
    {
      "term": "V_C",
      "def": "The voltage across the capacitor; 90° behind the current."
    },
    {
      "term": "Hypotenuse",
      "def": "The longest side of a right triangle; the impedance in the impedance triangle."
    }
  ],
  "video": {
    "title": "Series RLC, Ohms, Amps, & Volts",
    "embedUrl": "https://www.youtube.com/embed/vaxrutGCCRg",
    "note": "A series RLC walkthrough. As you watch, draw the impedance triangle for the example and check the current and phase angle.",
    "more": [
      {
        "title": "Series RLC Circuits, Resonant Frequency, Inductive Reactance & Capacitive Reacta",
        "url": "https://www.youtube.com/watch?v=2GvqQvohP2k"
      },
      {
        "title": "Impedance",
        "url": "https://www.youtube.com/watch?v=8D9XPDNY3Mk"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A series RLC circuit has R = 30 Ω, X_L = 40 Ω, and X_C = 10 Ω. What is the net reactance, and is the circuit net inductive or net capacitive?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: X = X_L − X_C = 40 − 10 = 30 Ω. Step 2: X is positive, so the circuit is net inductive. Step 3: The current lags the voltage.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In the same circuit, what is the total impedance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Z = √(R² + X²) = √(30² + 30²) = √1,800 ≈ 42.4 ohms. Step 2: The impedance is about 42.4 ohms. Step 3: Note that 42.4 is not 30 + 30 — impedance combines at right angles.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The circuit is fed by 120 V. What is the total current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I = E ÷ Z = 120 ÷ 42.4 ≈ 2.83 amps. Step 2: The current is about 2.83 amps. Step 3: It lags the voltage because the circuit is net inductive.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> What is the phase angle, and what is the power factor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: tan θ = X ÷ R = 30 ÷ 30 = 1, so θ = 45°. Step 2: Power factor = cos θ = R ÷ Z = 30 ÷ 42.4 ≈ 0.707. Step 3: The current lags by 45° and the power factor is about 0.71.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> What is the voltage across the inductor in this circuit?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V_L = I × X_L = 2.83 × 40 ≈ 113.2 volts. Step 2: That is nearly as big as the source voltage. Step 3: It does not add with the other voltages in a straight line — V_L and V_C partly cancel.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What happens to the impedance of a series RLC circuit at resonance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At resonance X_L = X_C, so the net reactance is zero. Step 2: The impedance falls to its minimum — just the resistance. Step 3: The current rises to its maximum, E ÷ R.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Impedance is calculated as:",
      "choices": [
        "Z = R + X",
        "Z = √(R² + X²)",
        "Z = R × X",
        "Z = R ÷ X"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Impedance is the hypotenuse of the impedance triangle. (a) Resistance and reactance do not add in a straight line. (c) Multiplying is not the rule. (d) Dividing is not the rule."
    },
    {
      "q": "Net reactance is:",
      "choices": [
        "X_L + X_C",
        "X_L − X_C",
        "X_L × X_C",
        "X_L ÷ X_C"
      ],
      "answer": 1,
      "explanation": "Correct: (b). X = X_L − X_C, because the two reactances oppose each other. (a) Adding them ignores that they are 180° apart. (c) Multiplying is not the rule. (d) Dividing is not the rule."
    },
    {
      "q": "A series circuit has R = 30 Ω, X_L = 40 Ω, X_C = 10 Ω. The impedance is about:",
      "choices": [
        "30 Ω",
        "42.4 Ω",
        "60 Ω",
        "80 Ω"
      ],
      "answer": 1,
      "explanation": "Correct: (b). X = 30 Ω, and Z = √(30² + 30²) ≈ 42.4 ohms. (a) 30 ohms is the resistance alone. (c) 60 ohms is R + X, the wrong combination. (d) 80 ohms is R + X_L + X_C, also wrong."
    },
    {
      "q": "The phase angle in a series RLC circuit is found with:",
      "choices": [
        "tan θ = X ÷ R",
        "tan θ = R ÷ X",
        "tan θ = E ÷ I",
        "tan θ = P ÷ E"
      ],
      "answer": 0,
      "explanation": "Correct: (a). tan θ = X ÷ R. (b) R ÷ X is the reciprocal. (c) E ÷ I is impedance. (d) P ÷ E is current."
    },
    {
      "q": "Power factor equals:",
      "choices": [
        "sin θ",
        "cos θ",
        "tan θ",
        "θ"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Power factor is cos θ, also R ÷ Z. (a) sin θ is the reactive factor. (c) tan θ is X ÷ R. (d) θ is the phase angle itself."
    },
    {
      "q": "In a series RLC circuit, V_L and V_C:",
      "choices": [
        "Are in phase",
        "Are 180° apart and partly cancel each other",
        "Are both zero",
        "Add in a straight line to the source voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). V_L and V_C are 180 degrees apart, so they partly cancel. (a) They are opposite, not in phase. (c) They are not zero. (d) They add as vectors, not in a straight line."
    },
    {
      "q": "At series resonance:",
      "choices": [
        "X_L = X_C and impedance is at its minimum",
        "Impedance is at its maximum",
        "Current is zero",
        "Resistance is zero"
      ],
      "answer": 0,
      "explanation": "Correct: (a). At resonance the reactances cancel, Z is just R, and current is maximum. (b) Impedance is minimum, not maximum. (c) Current is maximum, not zero. (d) Resistance is unchanged."
    },
    {
      "q": "A net inductive circuit has current that:",
      "choices": [
        "Leads voltage",
        "Lags voltage",
        "Is in phase with voltage",
        "Is zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Net inductive means X_L is bigger, so current lags. (a) Current leads in a net capacitive circuit. (c) In phase means purely resistive. (d) Current flows in an inductive circuit."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Impedance & Series RLC Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> Impedance is not R + X. It is the hypotenuse of the triangle — resistance and reactance combine at right angles.</p>\n<p><strong>Formulas:</strong> X = X_L − X_C · Z = √(R² + X²) · tan θ = X ÷ R · cos θ = R ÷ Z = power factor.</p>\n<p><strong>Voltages:</strong> V_R = I × R · V_L = I × X_L · V_C = I × X_C · They add as vectors; V_L and V_C are 180° apart and partly cancel.</p>\n<p><strong>Character:</strong> Net inductive = current lags · Net capacitive = current leads.</p>\n<p><strong>Resonance:</strong> X_L = X_C · Z is minimum (just R) · Current is maximum · f_0 = 1 ÷ (2π√(LC)).</p>\n<p><strong>Self-check:</strong> Solve the R = 30 Ω, X_L = 40 Ω, X_C = 10 Ω circuit on 120 V: Z, I, θ, and each component voltage, without looking.</p>\n"
};
