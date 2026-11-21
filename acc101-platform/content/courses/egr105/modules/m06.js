// egr105 - Module 6: AC Power & Power Factor
module.exports = {
  "number": 6,
  "slug": "ac-power-and-power-factor",
  "title": "AC Power & Power Factor",
  "estTime": "3–4 hours",
  "objectives": [
    "Tell real, reactive, and apparent power apart and name the unit of each.",
    "Use the power triangle: S² = P² + Q².",
    "Find the power factor from P and S, and the phase angle from the power factor.",
    "Explain why a poor power factor costs money: extra current, extra losses, utility penalties.",
    "Size a capacitor to correct a power factor from 0.8 to 0.95."
  ],
  "sections": [
    {
      "heading": "Three Kinds of Power",
      "html": "<p>In AC circuits there are three kinds of power, and mixing them up causes real mistakes. Real power (P), in watts (W), does the useful work: heat, light, motion. Reactive power (Q), in volt-amps reactive (VAr), is the power that sloshes back and forth between the source and the inductors and capacitors — it builds magnetic and electric fields but does no useful work. Apparent power (S), in volt-amps (VA), is the combination of the two: what the supply actually has to deliver. They form a right triangle: <strong>S² = P² + Q²</strong>.</p>\n<p>The power factor (pf) ties them together: <strong>pf = P ÷ S = cos φ</strong>, where φ is the phase angle between voltage and current. A pf of 1 means all the apparent power is real power (purely resistive load). A pf of 0.8 means only 80% of what the supply delivers does useful work. The beer analogy helps: the beer is the real power you want, the foam is the reactive power you pay for but cannot drink, and the whole glass is the apparent power.</p>\n"
    },
    {
      "heading": "Worked Example: A Motor's Power Triangle",
      "html": "<p>A motor draws an apparent power of 10 kVA and delivers 8 kW of real power. Power factor: pf = 8 ÷ 10 = 0.8. Reactive power: Q = √(S² − P²) = √(100 − 64) = √36 = 6 kVAr. Phase angle: φ = cos⁻¹(0.8) ≈ 36.9°. If the supply is 240 V, the current is I = S ÷ V = 10,000 ÷ 240 ≈ 41.7 A — but only 8 kW of that does work. The other 6 kVAr just shuttles back and forth, heating the wires and taking up capacity.</p>\n<p>Now compare with a purely resistive 8 kW heater at pf = 1: S = 8 kVA and the current is 8,000 ÷ 240 ≈ 33.3 A. Same useful power, but 8.4 A less current — less wire heating, less voltage drop, and more capacity left in the system. That difference is money, which is why utilities charge for poor power factor.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> pf = P ÷ S = cos φ. S² = P² + Q². A low power factor means extra current for the same useful work — and someone pays for that extra current.</div></p>\n"
    },
    {
      "heading": "Why Poor Power Factor Costs Money",
      "html": "<p>Three costs. First, I²R losses: extra current heats the wires, wasting energy. Second, capacity: a transformer and cables rated for 100 kVA can only serve 80 kW of load at pf = 0.8 — the rest of the capacity is eaten by reactive power. Third, utility penalties: many commercial tariffs charge extra when the power factor falls below about 0.95, because the utility must build bigger wires and transformers to carry the extra current. A factory with a poor power factor pays for power it cannot use.</p>\n<p>Most poor power factor comes from induction motors and other inductive loads — the most common loads in industry. That is why power-factor correction is a standard part of industrial electrical work, not an academic extra.</p>\n"
    },
    {
      "heading": "Fixing It: Power-Factor Correction",
      "html": "<p>Capacitors are the fix: a capacitor's reactive power is opposite in sign to an inductor's, so adding capacitors cancels the inductive reactive power. Take the motor above: P = 8 kW, Q = 6 kVAr, pf = 0.8. To reach pf = 0.95, the new reactive power must be Q(new) = P × tan(cos⁻¹ 0.95) = 8 × 0.3287 ≈ 2.63 kVAr. So the capacitor bank must supply Q(cap) = 6 − 2.63 ≈ 3.37 kVAr. After correction, S = √(8² + 2.63²) ≈ 8.42 kVA, the current falls from 41.7 A to about 35.1 A at 240 V, and the utility penalty goes away.</p>\n<p>Correction is usually done with capacitor banks switched in steps, near the load, and sized to the worst case without over-correcting: too much capacitance makes the power factor leading, which brings its own problems (voltage rise and a different set of penalties). The goal is a power factor close to 1, usually 0.95 or better — not a perfect 1.0.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Real power P (W) does work; reactive power Q (VAr) sloshes back and forth; apparent power S (VA) is what the supply delivers.</li><li>S² = P² + Q²; pf = P ÷ S = cos φ.</li><li>A motor at 10 kVA and 8 kW has pf = 0.8 and Q = 6 kVAr.</li><li>Poor power factor means extra current, extra losses, wasted capacity, and utility penalties.</li><li>Capacitors cancel inductive reactive power; correcting 0.8 to 0.95 in the example needs about 3.37 kVAr.</li></ul></p>\n<p><strong>Common mistake:</strong> Using P = V × I for an AC load without the power factor. For AC, P = V × I × pf (single-phase). Forgetting pf overstates the real power — a 240 V, 41.7 A motor is not 10 kW, it is 8 kW at pf = 0.8.</p>\n<p><strong>Common mistake:</strong> Thinking reactive power is “wasted” like heat. It is not wasted — it is returned to the source each cycle. The waste is the extra current it forces through the wires, and the capacity it occupies.</p>\n<p><strong>Ready check:</strong> If you can find pf (0.8) and Q (6 kVAr) for an 8 kW, 10 kVA load, and size the capacitor to reach 0.95 (3.37 kVAr), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Real power (P)",
      "def": "Power that does useful work: heat, light, motion. Measured in watts (W)."
    },
    {
      "term": "Reactive power (Q)",
      "def": "Power that flows back and forth to build magnetic and electric fields; does no useful work. Measured in VAr."
    },
    {
      "term": "Apparent power (S)",
      "def": "The combination of real and reactive power: S² = P² + Q². Measured in volt-amps (VA)."
    },
    {
      "term": "Power factor (pf)",
      "def": "pf = P ÷ S = cos φ; how much of the apparent power is real power."
    },
    {
      "term": "Power triangle",
      "def": "The right triangle with P, Q, and S as its sides."
    },
    {
      "term": "Volt-amp (VA)",
      "def": "The unit of apparent power."
    },
    {
      "term": "Volt-amp reactive (VAr)",
      "def": "The unit of reactive power."
    },
    {
      "term": "Lagging power factor",
      "def": "Current lags voltage (inductive load); the usual case for motors."
    },
    {
      "term": "Leading power factor",
      "def": "Current leads voltage (capacitive load); the result of over-correction."
    },
    {
      "term": "Power-factor correction",
      "def": "Adding capacitors to cancel inductive reactive power and raise the power factor."
    },
    {
      "term": "Capacitor bank",
      "def": "A group of capacitors switched in steps to correct power factor."
    },
    {
      "term": "Utility penalty",
      "def": "An extra charge when a customer's power factor falls below the tariff threshold, often about 0.95."
    }
  ],
  "video": {
    "title": "Power Factor Explained - The basics what is power factor pf | The Engineering Mindset",
    "embedUrl": "https://www.youtube.com/embed/Tv_7XWf96gg",
    "note": "Power factor with the beer analogy: real, reactive, and apparent power, and how to fix a bad power factor.",
    "more": [
      {
        "title": "How a Power Factor Works | MEP Academy",
        "url": "https://www.youtube.com/watch?v=6LZk9YT-GkQ"
      },
      {
        "title": "Power factor explained | Active Reactive Apparent Power correction",
        "url": "https://www.youtube.com/watch?v=r97cKTLoS74"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A motor draws 10 kVA apparent power and 8 kW real power. Find the power factor, the reactive power, and the phase angle.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: pf = P ÷ S = 8 ÷ 10 = 0.8. Step 2: Q = √(S² − P²) = √(100 − 64) = √36 = 6 kVAr. Step 3: φ = cos⁻¹(0.8) ≈ 36.9°.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 240 V supply feeds the motor in Problem 1. What current does it draw? Compare with a purely resistive 8 kW heater on the same supply.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Motor current: I = S ÷ V = 10,000 ÷ 240 ≈ 41.7 A. Step 2: Heater (pf = 1): I = 8,000 ÷ 240 ≈ 33.3 A. Step 3: The motor draws 8.4 A more for the same useful power — that extra current is the cost of the poor power factor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Correct the motor in Problem 1 from pf = 0.8 to pf = 0.95. How much capacitive reactive power is needed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: New reactive power: Q(new) = P × tan(cos⁻¹ 0.95) = 8 × 0.3287 ≈ 2.63 kVAr. Step 2: Capacitor needed: Q(cap) = 6 − 2.63 ≈ 3.37 kVAr. Step 3: After correction S = √(8² + 2.63²) ≈ 8.42 kVA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A single-phase load draws 20 A at 120 V with a power factor of 0.85. Find the apparent power and the real power.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: S = V × I = 120 × 20 = 2,400 VA = 2.4 kVA. Step 2: P = S × pf = 2,400 × 0.85 = 2,040 W.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A factory has a power factor of 0.75 and the utility starts charging penalties below 0.95. Name three costs the poor power factor causes, and the standard fix.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Extra I²R losses in the wires from the extra current. Step 2: Wasted capacity — transformers and cables carry reactive power instead of useful load. Step 3: Utility penalty charges. Step 4: The standard fix is power-factor correction with capacitor banks near the inductive loads.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A student says a load with pf = 0.8 “wastes 20% of its power as heat.” Explain why that is wrong.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Reactive power is not wasted as heat — it flows back to the source each cycle. Step 2: What pf = 0.8 means is that only 80% of the apparent power is real power; the other 20% is reactive power shuttling back and forth. Step 3: The real waste is the extra current that reactive power forces through the wires, which does cause I²R heating — but the reactive power itself is not burned up.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A motor draws 10 kVA and delivers 8 kW of real power. What is its power factor?",
      "choices": [
        "0.6",
        "0.8",
        "1.25",
        "0.75"
      ],
      "answer": 1,
      "explanation": "Correct: (b). pf = P ÷ S = 8 ÷ 10 = 0.8. (a) 0.6 is Q ÷ S (6 ÷ 10). (c) 1.25 is S ÷ P — upside down, and a power factor above 1 is impossible. (d) 0.75 is 6 ÷ 8 — the wrong ratio."
    },
    {
      "q": "In that same motor, what is the reactive power?",
      "choices": [
        "2 kVAr",
        "6 kVAr",
        "18 kVAr",
        "12.8 kVAr"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Q = √(S² − P²) = √(100 − 64) = 6 kVAr. (a) 2 kVAr is S − P — subtraction, not the triangle. (c) 18 kVAr adds S + P. (d) 12.8 kVAr is √(100 + 64) — the wrong sign."
    },
    {
      "q": "What are the units of real, reactive, and apparent power?",
      "choices": [
        "Watts, watts, watts",
        "Watts, volt-amps reactive, volt-amps",
        "Volts, amps, ohms",
        "Joules, watts, volt-amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Real power is watts (W), reactive is VAr, apparent is VA. (a) is wrong: the three have different units for a reason. (c) lists voltage, current, and resistance — not power. (d) mixes energy (joules) with power."
    },
    {
      "q": "Why does a poor power factor cost a factory money?",
      "choices": [
        "It makes the motors run faster",
        "Extra current causes I²R losses, wastes capacity, and triggers utility penalties",
        "It increases the voltage",
        "It makes the power factor leading"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Extra current means extra losses, less usable capacity, and penalty charges. (a) is wrong: speed is set by frequency and poles. (c) is wrong: poor pf does not raise voltage. (d) is wrong: poor pf is usually lagging, not leading."
    },
    {
      "q": "How much capacitive reactive power is needed to correct an 8 kW load from pf = 0.8 (Q = 6 kVAr) to pf = 0.95?",
      "choices": [
        "6 kVAr",
        "3.37 kVAr",
        "2.63 kVAr",
        "8 kVAr"
      ],
      "answer": 1,
      "explanation": "Correct: (b). New Q = 8 × tan(cos⁻¹ 0.95) ≈ 2.63 kVAr, so the capacitor must supply 6 − 2.63 ≈ 3.37 kVAr. (a) 6 kVAr would correct to pf = 1.0. (c) 2.63 kVAr is the new Q, not the capacitor size. (d) 8 kVAr is the real power."
    },
    {
      "q": "A single-phase load draws 20 A at 120 V with pf = 0.85. What is the real power?",
      "choices": [
        "2,400 W",
        "2,040 W",
        "2,823 W",
        "141 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). S = 120 × 20 = 2,400 VA; P = 2,400 × 0.85 = 2,040 W. (a) 2,400 W forgets the power factor. (c) 2,823 W divides by pf. (d) 141 W is 120 ÷ 0.85 — the wrong operation."
    },
    {
      "q": "What does a lagging power factor mean?",
      "choices": [
        "Current leads voltage",
        "Current lags voltage, as with an inductive load",
        "Voltage and current are in phase",
        "The power factor is 1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Lagging means current behind voltage — the normal case for motors and other inductive loads. (a) is a leading power factor. (c) is pf = 1. (d) is pf = 1, not lagging."
    },
    {
      "q": "What is the standard fix for a poor (lagging) power factor?",
      "choices": [
        "Add resistors",
        "Add capacitors to cancel the inductive reactive power",
        "Raise the supply voltage",
        "Use thinner wires"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Capacitors supply reactive power of the opposite sign, cancelling the inductors' reactive power. (a) is wrong: resistors waste real power. (c) is wrong: voltage does not fix power factor. (d) is wrong: thinner wires make losses worse."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — AC Power & Power Factor: Quick Reference</h3>\n<p><strong>Core idea:</strong> Real power does work (W), reactive power sloshes (VAr), apparent power is what the supply delivers (VA). pf = P ÷ S.</p>\n<p><strong>Key terms:</strong> Real power · Reactive power · Apparent power · Power factor · Power triangle.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>S² = P² + Q²; pf = P ÷ S = cos φ.</li>\n<li>For AC: P = V × I × pf (single-phase).</li>\n<li>Poor pf means extra current, losses, and penalties.</li>\n<li>Capacitors cancel inductive reactive power.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
