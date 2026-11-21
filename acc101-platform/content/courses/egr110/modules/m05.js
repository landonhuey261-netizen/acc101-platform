// egr110 - Module 5: Op-Amps: The Two Golden Rules
module.exports = {
  "number": 5,
  "slug": "op-amps-golden-rules",
  "title": "Op-Amps: The Two Golden Rules",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe what an op-amp is and name its main pins.",
    "State the two golden rules for an ideal op-amp.",
    "Work out the gain of inverting and non-inverting amplifiers.",
    "Explain saturation and the supply rails.",
    "Explain why negative feedback is used in almost every op-amp circuit."
  ],
  "sections": [
    {
      "heading": "A Tiny Amplifier with Enormous Gain",
      "html": "<p>An operational amplifier, or op-amp, is a small integrated circuit that amplifies the difference between its two inputs. It has an inverting input (−), a non-inverting input (+), an output, and two power pins (+V and −V, called the rails). On its own, an op-amp has a huge open-loop gain — often 100,000 or more — which means even a tiny difference between the inputs would drive the output to its limit. That is far too much gain to use directly, so we tame it with feedback.</p>\n<p>Op-amps are the Swiss Army knives of analogue electronics: they amplify sensor signals, buffer voltages, compare levels, add signals together, and filter noise. Once you know the two golden rules, you can analyse almost any op-amp circuit on paper without touching a datasheet. The classic op-amp you will meet first is the 741, but the ideas apply to every modern op-amp too.</p>\n"
    },
    {
      "heading": "The Two Golden Rules",
      "html": "<p>For an ideal op-amp with negative feedback, two rules hold. Rule 1: the inputs draw no current — their input impedance is effectively infinite, so no current flows into the + or − pin. Rule 2: the op-amp will do whatever it takes to keep the voltage difference between its inputs at zero — the two inputs sit at the same voltage. These rules are the whole analysis toolkit: apply them to any circuit and the answer falls out.</p>\n<p>Why do the rules hold? Because the gain is enormous: if the + input were even a millivolt above the − input, the output would try to rise by 100,000 × 1 mV = 100 V, which it cannot reach, so the feedback network adjusts until the inputs are equal. And the inputs are made from tiny transistor gates that draw almost no current. Real op-amps are not perfect — they draw a few nanoamps and have a small offset voltage — but for design work the ideal rules are close enough.</p>\n"
    },
    {
      "heading": "The Non-Inverting Amplifier",
      "html": "<p>In a non-inverting amplifier the signal goes to the + input, and a resistor divider (Rf and R1) feeds part of the output back to the − input. By Rule 2, the − input sits at the same voltage as the + input, so the input voltage Vin appears across R1. The same current flows through Rf and R1 (Rule 1 says none goes into the op-amp), so the gain is Gain = 1 + Rf ÷ R1. With Rf = 9 kΩ and R1 = 1 kΩ, the gain is 1 + 9 = 10, so 0.5 V in gives 5.0 V out. The output is in phase with the input — hence “non-inverting”.</p>\n<p>This is the most common op-amp circuit in the world: a sensor signal of a few hundred millivolts becomes a few volts that a microcontroller can measure. Because the signal goes straight into the op-amp's high-impedance + input, the circuit barely loads the sensor at all — another reason this circuit is everywhere.</p>\n"
    },
    {
      "heading": "The Inverting Amplifier",
      "html": "<p>In an inverting amplifier the signal goes through an input resistor Rin to the − input, the + input is grounded, and Rf feeds back from output to − input. By Rule 2, the − input sits at the same voltage as the + input, which is 0 V — this point is called a virtual earth. The input current is Vin ÷ Rin, and since none of it enters the op-amp (Rule 1), all of it flows through Rf, so Vout = −Vin × Rf ÷ Rin. The gain is Gain = −Rf ÷ Rin. With Rf = 10 kΩ and Rin = 1 kΩ, the gain is −10, so 0.3 V in gives −3.0 V out. The minus sign means the output is upside down relative to the input.</p>\n<p>The virtual earth is worth understanding: the − input is held at 0 V not by a wire, but by the op-amp's feedback. That is why the input current is simply Vin ÷ Rin — the full input voltage appears across Rin. It also means the input impedance of this circuit is just Rin, unlike the non-inverting circuit's very high input impedance.</p>\n"
    },
    {
      "heading": "Saturation, Rails, and Feedback",
      "html": "<p>An op-amp cannot output more than its supply rails. With ±12 V supplies, the output can swing to roughly ±11 V — never beyond the rails. If the gain times the input would exceed that, the output saturates: it sticks near the rail and the waveform flattens. Example: gain 10, input 2 V, supplies ±12 V — the op-amp tries for 20 V but saturates near +12 V (practically about +11 V). Saturation is a fault in an amplifier, but it is exactly what a comparator exploits.</p>\n<p>Negative feedback — feeding part of the output back to the − input — is what makes op-amp circuits stable and predictable. It trades the op-amp's enormous raw gain for a precise gain set by two resistors. Positive feedback (feeding back to the + input) does the opposite: it drives the output hard to one rail or the other, which is useful for comparators and oscillators but never for a linear amplifier. <p><strong>Takeaways:</strong><ul><li>Rule 1: the inputs draw no current. Rule 2: the inputs sit at the same voltage.</li><li>Non-inverting gain = 1 + Rf ÷ R1; inverting gain = −Rf ÷ Rin.</li><li>The inverting input is a virtual earth when the + input is grounded.</li><li>The output cannot exceed the supply rails — beyond that it saturates.</li><li>Negative feedback sets a precise, stable gain.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting the “1 +” in the non-inverting gain. The non-inverting gain is 1 + Rf ÷ R1, not Rf ÷ R1 — with Rf = R1 the gain is 2, not 1.</p>\n<p><strong>Common mistake:</strong> Forgetting the minus sign on the inverting gain. The output is upside down, and that matters when the signal's polarity matters.</p>\n<p><strong>Ready check:</strong> If you can work out both gains, spot saturation, and explain both golden rules, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Op-amp",
      "def": "Operational amplifier: an integrated circuit that amplifies the voltage difference between its two inputs, with very high gain."
    },
    {
      "term": "Inverting input (−)",
      "def": "The op-amp input where a rising voltage makes the output fall."
    },
    {
      "term": "Non-inverting input (+)",
      "def": "The op-amp input where a rising voltage makes the output rise."
    },
    {
      "term": "Supply rails",
      "def": "The positive and negative power voltages that limit how far the op-amp output can swing."
    },
    {
      "term": "Open-loop gain",
      "def": "The op-amp's own gain with no feedback, typically 100,000 or more — far too much to use directly."
    },
    {
      "term": "Golden rule 1",
      "def": "An ideal op-amp's inputs draw no current."
    },
    {
      "term": "Golden rule 2",
      "def": "An ideal op-amp with negative feedback keeps its two inputs at the same voltage."
    },
    {
      "term": "Negative feedback",
      "def": "Feeding part of the output back to the − input, which stabilises the gain and makes it depend on resistors, not on the op-amp."
    },
    {
      "term": "Virtual earth",
      "def": "A point, such as the − input of an inverting amplifier with the + input grounded, held at 0 V by feedback rather than by a wire."
    },
    {
      "term": "Gain",
      "def": "The ratio of output voltage to input voltage for an amplifier."
    },
    {
      "term": "Saturation",
      "def": "The state where an op-amp's output is stuck near a supply rail because the required output exceeds the rails."
    },
    {
      "term": "Non-inverting amplifier",
      "def": "An op-amp circuit with the signal on the + input; gain = 1 + Rf ÷ R1, output in phase with the input."
    },
    {
      "term": "Inverting amplifier",
      "def": "An op-amp circuit with the signal through Rin to the − input; gain = −Rf ÷ Rin, output upside down."
    },
    {
      "term": "Feedback resistor (Rf)",
      "def": "The resistor that feeds the output back to the input and, with R1 or Rin, sets the gain."
    },
    {
      "term": "Comparator",
      "def": "An op-amp used without feedback, so its output slams to one rail or the other depending on which input is higher."
    }
  ],
  "video": {
    "title": "EEVblog #600 - OpAmps Tutorial - What is an Operational Amplifier?",
    "embedUrl": "https://www.youtube.com/embed/7FYHt5XviKc",
    "note": "The classic op-amp tutorial: ideal rules, inverting and non-inverting amplifiers, and saturation, all demonstrated on the bench. Watch the gain examples, then do this module's calculations yourself before checking the answers.",
    "more": [
      {
        "title": "Op-Amp Basics Explained in 5 Minutes!",
        "url": "https://www.youtube.com/watch?v=c-tGooFBnGU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A non-inverting amplifier has Rf = 9 kΩ and R1 = 1 kΩ. Work out the gain, and the output voltage when the input is 0.5 V.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Gain = 1 + Rf ÷ R1 = 1 + 9 ÷ 1 = 10. Step 2: Vout = Gain × Vin = 10 × 0.5 V = 5.0 V. A good answer shows the 1 + in the formula and both answers.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An inverting amplifier has Rf = 10 kΩ and Rin = 1 kΩ. Work out the gain, and the output voltage when the input is 0.3 V.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Gain = −Rf ÷ Rin = −10 ÷ 1 = −10. Step 2: Vout = −10 × 0.3 V = −3.0 V. The minus sign means the output is inverted. A good answer keeps the minus sign all the way through.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> An inverting amplifier has Rf = 47 kΩ and Rin = 4.7 kΩ. The input is −0.2 V. Work out the output voltage, and explain the sign of the answer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Gain = −47 ÷ 4.7 = −10. Step 2: Vout = −10 × (−0.2 V) = +2.0 V. Step 3: The negative input is inverted to a positive output — two negatives make a positive. A good answer explains the sign, not just the number.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> An op-amp with ±12 V supplies and a gain of 10 has an input of 2 V. What does the output try to do, and what does it actually do? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The op-amp tries for Vout = 10 × 2 V = 20 V. Step 2: The supplies are ±12 V, so the output cannot reach 20 V — it saturates near the positive rail, about +11 V in practice. Step 3: The output waveform flattens at the rail. A good answer distinguishes the attempted 20 V from the actual saturated output near +12 V.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A sensor gives 0.4 V and you need 2.0 V for a microcontroller input. Design a non-inverting amplifier: choose a gain and resistor values, and check the result.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Needed gain = 2.0 ÷ 0.4 = 5. Step 2: Gain = 1 + Rf ÷ R1 = 5, so Rf ÷ R1 = 4 — pick R1 = 5 kΩ and Rf = 20 kΩ. Step 3: Check: 1 + 20 ÷ 5 = 5, and 5 × 0.4 V = 2.0 V. A good answer shows the gain, a sensible resistor pair, and the check.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain in plain words why almost every op-amp amplifier circuit uses negative feedback, and what would happen with no feedback at all.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Without feedback the op-amp's open-loop gain (about 100,000) would drive the output to a rail for any input above a fraction of a millivolt — it would act as a comparator, not an amplifier. Step 2: Negative feedback trades that huge raw gain for a precise gain set by two resistors, which is stable and predictable. Step 3: That is why the same op-amp can be a gain-2 buffer or a gain-100 amplifier just by changing resistors. A good answer links feedback to the resistor-set gain.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What are the two golden rules for an ideal op-amp with negative feedback?",
      "choices": [
        "The inputs draw no current, and the inputs sit at the same voltage",
        "The output is always 0 V, and the inputs draw maximum current",
        "The gain is always 1, and the inputs are at different voltages",
        "The inputs draw 1 A, and the output equals the supply"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Rule 1: no input current. Rule 2: the inputs are at the same voltage. (b) is wrong on both counts. (c) is wrong: the gain is set by the resistors, and the inputs are equal. (d) is wrong: the inputs draw almost nothing and the output is set by gain times input."
    },
    {
      "q": "A non-inverting amplifier has Rf = 9 kΩ and R1 = 1 kΩ. What is its gain?",
      "choices": [
        "9",
        "10",
        "11",
        "0.9"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Gain = 1 + 9 ÷ 1 = 10. (a) 9 forgets the 1 + in the formula. (c) 11 adds an extra 1. (d) 0.9 is the inverse of the resistor ratio."
    },
    {
      "q": "A non-inverting amplifier with gain 10 has an input of 0.5 V. What is the output?",
      "choices": [
        "0.05 V",
        "5.0 V",
        "10 V",
        "0.5 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Vout = 10 × 0.5 = 5.0 V. (a) 0.05 V divides instead of multiplying. (c) 10 V is the gain, not the output. (d) 0.5 V is the input, not the output."
    },
    {
      "q": "An inverting amplifier has Rf = 10 kΩ and Rin = 1 kΩ. What is its gain?",
      "choices": [
        "10",
        "−10",
        "11",
        "−11"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Gain = −Rf ÷ Rin = −10; the minus sign shows the output is inverted. (a) forgets the minus sign. (c) and (d) wrongly add 1, which belongs to the non-inverting formula."
    },
    {
      "q": "An inverting amplifier with gain −10 has an input of 0.3 V. What is the output?",
      "choices": [
        "3.0 V",
        "−3.0 V",
        "0.03 V",
        "−0.03 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Vout = −10 × 0.3 = −3.0 V. (a) forgets the minus sign. (c) and (d) divide instead of multiplying."
    },
    {
      "q": "An inverting amplifier has Rf = 47 kΩ and Rin = 4.7 kΩ, with an input of −0.2 V. What is the output?",
      "choices": [
        "−2.0 V",
        "+2.0 V",
        "−0.2 V",
        "+0.2 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Gain is −10, so Vout = −10 × (−0.2) = +2.0 V. (a) forgets that two negatives make a positive. (c) and (d) are just the input, unchanged."
    },
    {
      "q": "An op-amp with ±12 V supplies and gain 10 has an input of 2 V. What does the output do?",
      "choices": [
        "It outputs 20 V",
        "It saturates near the positive rail, about +12 V",
        "It outputs 0 V",
        "It outputs −12 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It tries for 20 V but cannot exceed the rails, so it saturates near +12 V. (a) is wrong: no op-amp output can exceed its supplies. (c) is wrong: the output goes high, not to zero. (d) is wrong: the input is positive, so it saturates at the positive rail."
    },
    {
      "q": "In an inverting amplifier with the + input grounded, the − input is called a virtual earth because…",
      "choices": [
        "It is wired directly to ground",
        "The op-amp's feedback holds it at 0 V, even though no wire connects it to ground",
        "It carries the full output current",
        "It is at the supply voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Golden rule 2 holds the − input at the same voltage as the grounded + input — 0 V — through feedback, not a wire. (a) is wrong: no wire connects it to ground. (c) is wrong: no current enters the op-amp input. (d) is wrong: it is at 0 V, not the supply."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Op-Amps: The Two Golden Rules: Quick Reference</h3>\n<p><strong>Core idea:</strong> Describe what an op-amp is and name its main pins.</p>\n<p><strong>Key terms:</strong> Op-amp · Inverting input (−) · Non-inverting input (+) · Supply rails · Open-loop gain · Golden rule 1 · Golden rule 2 · Negative feedback.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Describe what an op-amp is and name its main pins.</li>\n<li>State the two golden rules for an ideal op-amp.</li>\n<li>Work out the gain of inverting and non-inverting amplifiers.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
