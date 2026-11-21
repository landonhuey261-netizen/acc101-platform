// egr105 - Module 2: Phasors & Phase
module.exports = {
  "number": 2,
  "slug": "phasors-and-phase",
  "title": "Phasors & Phase",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a phasor is: a rotating arrow that stands for a sine wave.",
    "Read a phasor diagram: length is size, angle is phase.",
    "Say whether a current leads or lags the voltage, and by how many degrees.",
    "Add two sine waves of the same frequency using phasors.",
    "Convert a sine wave into phasor form (magnitude and angle)."
  ],
  "sections": [
    {
      "heading": "A Sine Wave as a Rotating Arrow",
      "html": "<p>Adding sine waves by hand is painful: you would have to add the values at every instant. A phasor makes it easy. A phasor is an arrow that rotates at the wave's frequency. Its length stands for the wave's size (usually the RMS value), and its angle stands for the wave's phase — where it is in its cycle. The arrow spins counter-clockwise, and the wave's value at any instant is the arrow's projection onto the horizontal axis. Instead of drawing whole waves, you draw arrows — and arrows can be added like any other vector.</p>\n<p>Two waves of the same frequency can be compared by their phasors. If the arrows point the same way, the waves are in phase: they rise and fall together. If one arrow is ahead of the other, its wave leads; if it is behind, its wave lags. The angle between the arrows is the phase difference, in degrees.</p>\n"
    },
    {
      "heading": "Lead and Lag",
      "html": "<p>When the current phasor points ahead of the voltage phasor (counter-clockwise from it), the current leads the voltage: the current reaches its peak before the voltage does. When it points behind, the current lags. In a resistor, current and voltage are in phase — the arrows point the same way. In an ideal inductor, the current lags the voltage by 90°. In an ideal capacitor, the current leads the voltage by 90°. Those three facts are the foundation of the next three modules, so learn them now: resistor 0°, inductor current lags 90°, capacitor current leads 90°.</p>\n<p>A handy memory aid: “ELI the ICE man.” ELI: in an inductor (L), voltage (E) comes before current (I). ICE: in a capacitor (C), current (I) comes before voltage (E). Say it a few times and you will never mix them up.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Resistor: V and I in phase. Inductor: I lags V by 90°. Capacitor: I leads V by 90°. ELI the ICE man.</div></p>\n"
    },
    {
      "heading": "Adding Waves with Phasors",
      "html": "<p>To add two sine waves of the same frequency, draw their phasors from the same origin and add them tip-to-tail, exactly like force vectors. Example: a voltage of 3 V at 0° and a voltage of 4 V at 90°. Draw 3 units along the horizontal and 4 units straight up: the sum is the diagonal, with length √(3² + 4²) = 5 V, at an angle of tan⁻¹(4 ÷ 3) ≈ 53.1° from the horizontal. So the sum is a 5 V (RMS) sine wave leading the reference by 53.1°.</p>\n<p>That 3-4-5 triangle is not a coincidence — it is the same right-triangle maths you used for forces, now applied to waves. The same method works for any two phasors: split each into horizontal and vertical parts, add the parts, and rebuild the result.</p>\n"
    },
    {
      "heading": "Phasor Notation and Complex Numbers",
      "html": "<p>Engineers write a phasor as a magnitude and an angle: 5 ∠53.1° means “5 units at 53.1 degrees.” The same phasor can be written as a complex number: a horizontal part (the real part) plus a vertical part (the imaginary part, marked j). Our example: 5 ∠53.1° = 3 + j4. The j is not mysterious — it is just a label for “the vertical direction.” You do not need to be fluent in complex arithmetic for this course, but you should be comfortable reading phasor notation and converting between the two forms: magnitude = √(real² + imag²), angle = tan⁻¹(imag ÷ real).</p>\n<p>One warning: phasors only work for sine waves of the same frequency. Two waves at different frequencies cannot be combined into one phasor — their arrows spin at different speeds and the angle between them never settles.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A phasor is a rotating arrow: length is size, angle is phase.</li><li>Resistor: V and I in phase. Inductor: I lags V by 90°. Capacitor: I leads V by 90°.</li><li>Add phasors tip-to-tail, like vectors: 3 V at 0° plus 4 V at 90° is 5 V at 53.1°.</li><li>Phasor notation: magnitude ∠ angle; complex form: real + j(imaginary).</li><li>Phasors only combine waves of the same frequency.</li></ul></p>\n<p><strong>Common mistake:</strong> Mixing up lead and lag. “Leads” means it reaches its peak first — its phasor is ahead (counter-clockwise). Draw the arrows and the answer is visible.</p>\n<p><strong>Common mistake:</strong> Adding phasor magnitudes directly, as if they were in phase. 3 V and 4 V at 90° do not add to 7 V — they add to 5 V, because they are at right angles. Use the triangle, not the sum.</p>\n<p><strong>Ready check:</strong> If you can say which of V and I leads in an inductor and in a capacitor, and add 3 V at 0° to 4 V at 90°, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Phasor",
      "def": "A rotating arrow that stands for a sine wave: its length is the wave's size, its angle is the wave's phase."
    },
    {
      "term": "Phase",
      "def": "Where a wave is in its cycle, measured in degrees from a reference."
    },
    {
      "term": "Phase difference",
      "def": "The angle between two phasors; how far apart two waves are in their cycles."
    },
    {
      "term": "In phase",
      "def": "Two waves rising and falling together, with a phase difference of 0°."
    },
    {
      "term": "Leading",
      "def": "Reaching a peak earlier than the reference wave; the phasor points ahead."
    },
    {
      "term": "Lagging",
      "def": "Reaching a peak later than the reference wave; the phasor points behind."
    },
    {
      "term": "Phasor diagram",
      "def": "A drawing of phasors from a common origin, showing their sizes and phase differences."
    },
    {
      "term": "ELI the ICE man",
      "def": "Memory aid: in an inductor (L), voltage (E) leads current (I); in a capacitor (C), current (I) leads voltage (E)."
    },
    {
      "term": "Complex number",
      "def": "A number with a real part and an imaginary part (j), used to write phasors as real + j(imaginary)."
    },
    {
      "term": "Magnitude ∠ angle",
      "def": "Phasor notation: the size of the phasor and its angle, for example 5 ∠53.1°."
    },
    {
      "term": "Reference phasor",
      "def": "The phasor chosen as 0°, usually the voltage or the current, against which others are measured."
    },
    {
      "term": "Tip-to-tail addition",
      "def": "Adding phasors like vectors: place the tail of one at the tip of the other."
    }
  ],
  "video": {
    "title": "Basics Of Phasor Diagram || AC Analysis || PrepFusion",
    "embedUrl": "https://www.youtube.com/embed/MxVJ8rFnjL0",
    "note": "Phasor diagrams from the start: how a rotating arrow stands for a sine wave, and how lead and lag work.",
    "more": [
      {
        "title": "What are Resistance Reactance Impedance | Prof MAD",
        "url": "https://www.youtube.com/watch?v=UrCFv2qCELI"
      },
      {
        "title": "Resistor, Inductor, and Capacitor Impedance Summary | ElectronX Lab",
        "url": "https://www.youtube.com/watch?v=M5h7fxoTb3w"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A voltage phasor is 3 V at 0° and another is 4 V at 90°. Add them as phasors and give the result as a magnitude and an angle.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Horizontal parts: 3 + 0 = 3. Vertical parts: 0 + 4 = 4. Step 2: Magnitude = √(3² + 4²) = √25 = 5 V. Step 3: Angle = tan⁻¹(4 ÷ 3) ≈ 53.1°. Result: 5 V ∠53.1°.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In a circuit, the voltage is the reference (0°) and the current phasor points at −90°. Does the current lead or lag the voltage, and by how much? What kind of component would do this?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The current phasor is 90° behind the voltage, so the current lags the voltage by 90°. Step 2: That is the behaviour of an ideal inductor (ELI: voltage before current in L).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Convert the phasor 5 ∠53.1° into complex form (real + j imaginary). Show your working.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Real part = 5 × cos(53.1°) ≈ 5 × 0.6 = 3. Step 2: Imaginary part = 5 × sin(53.1°) ≈ 5 × 0.8 = 4. Step 3: Complex form: 3 + j4.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Two currents are in phase: 2 A at 0° and 3 A at 0°. What is their sum as a phasor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: They point the same way, so the magnitudes add directly: 2 + 3 = 5 A. Step 2: The sum is 5 A ∠0°. (In-phase phasors add like ordinary numbers.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A capacitor has the voltage as reference (0°) and the current phasor at +90°. Does the current lead or lag? Use “ELI the ICE man” to check your answer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The current phasor is 90° ahead of the voltage, so the current leads the voltage by 90°. Step 2: Check with ICE: in a capacitor (C), current (I) comes before voltage (E) — current leads ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain why you cannot add a 60 Hz phasor and a 120 Hz phasor into a single phasor.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A phasor is an arrow spinning at the wave's frequency. Step 2: Arrows spinning at different speeds never keep a fixed angle between them — the phase difference changes constantly. Step 3: So there is no single arrow that represents their sum; phasors only combine waves of the same frequency.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the length of a phasor represent?",
      "choices": [
        "The frequency of the wave",
        "The size (magnitude) of the sine wave, usually its RMS value",
        "The time the wave takes",
        "The resistance of the circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Length is magnitude; angle is phase. (a) is wrong: frequency is the spin speed, not the length. (c) is wrong: time is not drawn as a length. (d) is wrong: resistance is not a phasor property."
    },
    {
      "q": "In an ideal inductor, the current ______ the voltage by 90°.",
      "choices": [
        "leads",
        "lags",
        "matches",
        "cancels"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In an inductor the current lags the voltage by 90° (ELI: voltage before current). (a) is the capacitor's behaviour. (c) is the resistor's behaviour. (d) is wrong: nothing is cancelled."
    },
    {
      "q": "In an ideal capacitor, the current ______ the voltage by 90°.",
      "choices": [
        "lags",
        "leads",
        "matches",
        "opposes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In a capacitor the current leads the voltage by 90° (ICE: current before voltage). (a) is the inductor's behaviour. (c) is the resistor's behaviour. (d) is vague and wrong."
    },
    {
      "q": "Add 3 V at 0° and 4 V at 90° as phasors. What is the result?",
      "choices": [
        "7 V at 0°",
        "5 V at 53.1°",
        "5 V at 90°",
        "1 V at 90°"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Magnitude √(3² + 4²) = 5 V; angle tan⁻¹(4 ÷ 3) ≈ 53.1°. (a) adds the magnitudes directly, which only works in phase. (c) has the right size but the wrong angle. (d) subtracts them."
    },
    {
      "q": "What does “ELI the ICE man” help you remember?",
      "choices": [
        "That resistors get hot",
        "That in an inductor voltage leads current, and in a capacitor current leads voltage",
        "That AC is more dangerous than DC",
        "That phasors spin clockwise"
      ],
      "answer": 1,
      "explanation": "Correct: (b). ELI: voltage (E) before current (I) in an inductor (L). ICE: current (I) before voltage (E) in a capacitor (C). (a) is a different fact. (c) is not what the phrase is about. (d) is wrong: phasors spin counter-clockwise by convention."
    },
    {
      "q": "Two sine waves are in phase. What is their phase difference?",
      "choices": [
        "90°",
        "180°",
        "0°",
        "360°"
      ],
      "answer": 2,
      "explanation": "Correct: (c). In phase means they rise and fall together: 0° apart. (a) is a quarter-cycle apart. (b) is half a cycle apart (opposite). (d) is a full cycle — the same as 0°, but 0° is the direct answer."
    },
    {
      "q": "Convert 5 ∠53.1° to complex form.",
      "choices": [
        "3 + j4",
        "4 + j3",
        "5 + j5",
        "3 − j4"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Real = 5 × cos(53.1°) ≈ 3; imaginary = 5 × sin(53.1°) ≈ 4; so 3 + j4. (b) swaps real and imaginary. (c) uses 5 for both parts. (d) has the wrong sign on the imaginary part."
    },
    {
      "q": "Why can phasors only combine sine waves of the same frequency?",
      "choices": [
        "Because different frequencies have different voltages",
        "Because arrows spinning at different speeds never keep a fixed angle between them",
        "Because phasors only work for DC",
        "Because the magnitudes would be too big"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A phasor spins at its wave's frequency; different speeds mean the phase difference keeps changing, so no single sum phasor exists. (a) is wrong: voltage size is not the issue. (c) is wrong: phasors are an AC tool. (d) is wrong: size is not the issue."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Phasors & Phase: Quick Reference</h3>\n<p><strong>Core idea:</strong> A phasor is a rotating arrow: length is size, angle is phase. Resistor 0°, inductor I lags 90°, capacitor I leads 90°.</p>\n<p><strong>Key terms:</strong> Phasor · Phase · Leading · Lagging · Phasor diagram · ELI the ICE man.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Resistor: V and I in phase.</li>\n<li>Inductor: I lags V by 90°. Capacitor: I leads V by 90°.</li>\n<li>Add phasors tip-to-tail like vectors.</li>\n<li>Phasors only combine waves of the same frequency.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
