// ele103 - Module 3: Capacitance & Capacitive Reactance
module.exports = {
  "number": 3,
  "slug": "capacitance-and-capacitive-reactance",
  "title": "Capacitance & Capacitive Reactance",
  "estTime": "3–4 hours",
  "objectives": [
    "Define capacitance and state its unit, the farad.",
    "Explain how a capacitor stores energy in an electric field.",
    "Calculate capacitive reactance with X_C = 1 ÷ (2πfC).",
    "Explain why current leads voltage in a capacitive circuit.",
    "Describe where capacitors are found in electrical work: motor starting, power-factor correction, and filtering."
  ],
  "sections": [
    {
      "heading": "What Capacitance Is",
      "html": "<p><strong>Capacitance</strong> is the property of a device that stores charge. A <strong>capacitor</strong> is two conducting plates separated by an insulator (the dielectric). When voltage is applied, charge builds up on the plates — positive on one, negative on the other — and an electric field forms between them. The capacitor stores energy in that field, and returns it when the voltage falls. Capacitance is measured in <strong>farads (F)</strong>, and practical capacitors are measured in microfarads (μF, millionths of a farad) or picofarads (pF, trillionths).</p>\n<p>A capacitor's capacitance depends on the plate area, the distance between the plates, and the dielectric material: bigger plates, closer together, with a better dielectric, mean more capacitance. The capacitor is the AC counterpart of the inductor — but where the inductor stores energy in a magnetic field and fights a change in current, the capacitor stores energy in an electric field and fights a change in voltage.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A capacitor fights a change in voltage. It blocks DC once it is charged, and it passes AC — the higher the frequency, the easier the current flows.</div>"
    },
    {
      "heading": "Capacitive Reactance: X_C = 1 ÷ (2πfC)",
      "html": "<p>In an AC circuit, a capacitor opposes current with <strong>capacitive reactance</strong>, measured in ohms. The formula is <strong>X<sub>C</sub> = 1 ÷ (2πfC)</strong>, where f is the frequency in hertz and C is the capacitance in farads. Reactance falls as frequency rises — a faster-changing voltage charges and discharges the capacitor more often, so more current flows — and falls as capacitance rises. At DC (zero frequency), a capacitor's reactance is infinite: once it is charged, no current flows at all, which is why a capacitor blocks DC.</p>\n<p>Worked example: a 100 μF (0.0001 F) capacitor at 60 Hz. X<sub>C</sub> = 1 ÷ (2 × 3.1416 × 60 × 0.0001) = 1 ÷ 0.0377 ≈ 26.5 ohms. The same capacitor at 120 Hz has half the reactance, about 13.3 ohms. And a 10 μF capacitor at 60 Hz has X<sub>C</sub> ≈ 265 ohms — ten times the reactance, because the capacitance is ten times smaller. The formula is the mirror image of the inductive one: frequency is on the bottom instead of the top.</p>"
    },
    {
      "heading": "Current Leads Voltage",
      "html": "<p>In a purely capacitive circuit, the current <strong>leads</strong> the voltage by 90 degrees. The current flows first, charging the plates, and the voltage builds as the charge accumulates. The two waves are out of step by a quarter cycle, in the opposite direction from an inductor. In a real circuit with both resistance and capacitance, the lead is less than 90 degrees.</p>\n<p>The lead is why capacitors are used to correct power factor: an inductive load makes the current lag, and a capacitor makes the current lead, so adding the right capacitor cancels the lag and brings the current back into step with the voltage. The two effects are opposites, and the trade uses one to fix the other — which is the subject of Module 7.</p>"
    },
    {
      "heading": "Capacitors in the Trade",
      "html": "<p>The electrician meets capacitors in three main places. <strong>Motor-start capacitors</strong> give a single-phase motor the phase shift it needs to start, and are switched out once the motor is running; <strong>motor-run capacitors</strong> stay in the circuit to improve the motor's running performance. <strong>Power-factor correction capacitors</strong> are installed at a panel or at a motor to cancel inductive lag and reduce the current the utility must supply. And <strong>filter capacitors</strong> smooth the output of DC power supplies, filling in the gaps between the AC peaks.</p>\n<p>Capacitors also carry a safety warning: a capacitor can hold a charge after the power is off, and a large capacitor can deliver a dangerous shock. Before working on equipment with capacitors, the capacitors are discharged — with a proper discharge tool, under a licensed supervisor — and the voltage is verified at zero. A capacitor that looks dead may not be, and the charge it holds is real.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Capacitance (farads) is a device's ability to store charge; a capacitor stores energy in an electric field.</li>\n<li>Capacitive reactance: X<sub>C</sub> = 1 ÷ (2πfC), in ohms; it falls as frequency and capacitance rise.</li>\n<li>In a purely capacitive circuit, current leads voltage by 90°.</li>\n<li>Capacitors: motor-start, motor-run, power-factor correction, and filtering.</li>\n<li>A capacitor can hold a charge after power is off — discharge it and verify zero before working on it.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating capacitive reactance like inductive reactance. X_C falls with frequency; X_L rises with frequency — they are opposites.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Assuming a capacitor is dead because the power is off. A capacitor holds its charge until it is discharged — verify zero with a meter before touching it.</div>\n<p><strong>Ready-to-Work link:</strong> If you can define capacitance, calculate X_C, and explain the 90° lead, you have this module. Module 4 covers impedance and series RLC circuits.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Capacitance",
      "def": "A device's ability to store charge, measured in farads."
    },
    {
      "term": "Farad (F)",
      "def": "The unit of capacitance."
    },
    {
      "term": "Microfarad (μF)",
      "def": "One millionth of a farad; the common unit for practical capacitors."
    },
    {
      "term": "Capacitor",
      "def": "Two conducting plates separated by a dielectric; it stores energy in an electric field."
    },
    {
      "term": "Dielectric",
      "def": "The insulator between a capacitor's plates."
    },
    {
      "term": "Capacitive reactance (X_C)",
      "def": "A capacitor's opposition to AC current, in ohms; X_C = 1 ÷ (2πfC)."
    },
    {
      "term": "Lead",
      "def": "Current reaching its peak before the voltage; in a pure capacitor, current leads voltage by 90°."
    },
    {
      "term": "Motor-start capacitor",
      "def": "A capacitor that gives a single-phase motor the phase shift it needs to start."
    },
    {
      "term": "Motor-run capacitor",
      "def": "A capacitor that stays in a motor's circuit to improve running performance."
    },
    {
      "term": "Power-factor correction capacitor",
      "def": "A capacitor installed to cancel inductive lag and improve power factor."
    },
    {
      "term": "Filter capacitor",
      "def": "A capacitor that smooths the output of a DC power supply."
    },
    {
      "term": "Electric field",
      "def": "The region between a capacitor's plates where it stores energy."
    },
    {
      "term": "Charged capacitor",
      "def": "A capacitor holding charge after power is removed; it can still shock."
    },
    {
      "term": "Discharge",
      "def": "Removing the stored charge from a capacitor with a proper tool before working on it."
    },
    {
      "term": "ELI the ICE man",
      "def": "A memory aid: in L, I lags E; in C, I leads E."
    }
  ],
  "video": {
    "title": "Capacitive Reactance, Impedance, Power Factor, AC Circuits, Physics",
    "embedUrl": "https://www.youtube.com/embed/ZOn0L42cyFE",
    "note": "A capacitive reactance and AC circuits walkthrough. As you watch, write down the X_C formula and the 90° lead rule.",
    "more": [
      {
        "title": "🎬 #133 - Capacitive Reactance Explained in 50 Seconds | Why Capacitors Pass AC",
        "url": "https://www.youtube.com/watch?v=YbM75Sblbno"
      },
      {
        "title": "Understanding Capacitive Reactance in under 90 Seconds. Phase 4",
        "url": "https://www.youtube.com/watch?v=s07P_Pho_xQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 100 μF (0.0001 F) capacitor is connected to a 60 Hz source. What is its capacitive reactance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: X_C = 1 ÷ (2πfC). Step 2: X_C = 1 ÷ (2 × 3.1416 × 60 × 0.0001) = 1 ÷ 0.0377 ≈ 26.5 ohms. Step 3: The reactance is about 26.5 ohms.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same capacitor is connected to a 120 Hz source. What is its reactance now?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: X_C = 1 ÷ (2 × 3.1416 × 120 × 0.0001) = 1 ÷ 0.0754 ≈ 13.3 ohms. Step 2: Doubling the frequency halves the reactance. Step 3: The reactance is about 13.3 ohms.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 10 μF capacitor is connected to a 60 Hz source. What is its capacitive reactance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: X_C = 1 ÷ (2 × 3.1416 × 60 × 0.00001) = 1 ÷ 0.00377 ≈ 265 ohms. Step 2: A smaller capacitance means a larger reactance. Step 3: The reactance is about 265 ohms.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> In a purely capacitive circuit, by how many degrees does the current lead the voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: In a pure capacitor, current leads voltage by 90 degrees. Step 2: The current flows first, charging the plates, and the voltage builds as charge accumulates. Step 3: In a real circuit with resistance, the lead is less than 90 degrees.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A capacitor has 26.5 Ω of reactance at 60 Hz. What is its reactance at 180 Hz?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Reactance is inversely proportional to frequency. Step 2: 180 ÷ 60 = 3, so the reactance is divided by 3. Step 3: X_C ≈ 26.5 ÷ 3 ≈ 8.8 ohms at 180 Hz.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why must a capacitor be discharged before working on equipment that contains it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A capacitor can hold a charge after the power is off. Step 2: A large capacitor can deliver a dangerous shock. Step 3: Discharge it with a proper tool, under a licensed supervisor, and verify zero volts before touching it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Capacitance is measured in:",
      "choices": [
        "Henrys",
        "Farads",
        "Ohms",
        "Watts"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Capacitance is measured in farads. (a) Henrys measure inductance. (c) Ohms measure resistance and reactance. (d) Watts measure power."
    },
    {
      "q": "Capacitive reactance is calculated with:",
      "choices": [
        "X_C = 2πfL",
        "X_C = 1 ÷ (2πfC)",
        "X_C = E ÷ I",
        "X_C = I² × R"
      ],
      "answer": 1,
      "explanation": "Correct: (b). X_C = 1 ÷ (2πfC). (a) That is the inductive reactance formula. (c) E ÷ I is impedance or resistance. (d) I² × R is power lost as heat."
    },
    {
      "q": "A 100 μF capacitor at 60 Hz has a reactance of about:",
      "choices": [
        "2.65 Ω",
        "26.5 Ω",
        "265 Ω",
        "2,650 Ω"
      ],
      "answer": 1,
      "explanation": "Correct: (b). X_C = 1 ÷ (2 × 3.1416 × 60 × 0.0001) ≈ 26.5 ohms. (a) 2.65 ohms would need 1,000 μF. (c) 265 ohms would need 10 μF. (d) 2,650 ohms would need 1 μF."
    },
    {
      "q": "If the frequency doubles, capacitive reactance:",
      "choices": [
        "Doubles",
        "Is halved",
        "Stays the same",
        "Goes to zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). X_C is inversely proportional to frequency, so doubling f halves X_C. (a) Doubling is what happens to inductive reactance. (c) Reactance changes with frequency. (d) Reactance is zero only at infinite frequency."
    },
    {
      "q": "In a purely capacitive circuit, current:",
      "choices": [
        "Lags voltage by 90°",
        "Leads voltage by 90°",
        "Is in phase with voltage",
        "Is zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In a capacitor, current leads voltage by 90 degrees. (a) Current lags in an inductor. (c) In phase is a purely resistive circuit. (d) Current flows in a capacitive circuit."
    },
    {
      "q": "A capacitor stores energy in:",
      "choices": [
        "A magnetic field",
        "An electric field",
        "A battery",
        "An inductor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A capacitor stores energy in the electric field between its plates. (a) An inductor stores energy in a magnetic field. (c) A battery stores chemical energy. (d) An inductor is a different component."
    },
    {
      "q": "At DC (zero frequency), a capacitor's reactance is:",
      "choices": [
        "Zero",
        "Infinite — it blocks DC once charged",
        "Equal to its resistance",
        "26.5 ohms"
      ],
      "answer": 1,
      "explanation": "Correct: (b). X_C = 1 ÷ (2πfC), and at f = 0 the reactance is infinite. (a) Zero reactance is an inductor at DC. (c) Resistance is a separate property. (d) 26.5 ohms is 100 μF at 60 Hz."
    },
    {
      "q": "A capacitor in equipment that has been switched off:",
      "choices": [
        "Is always safe to touch",
        "Can still hold a charge and shock you — discharge it and verify zero first",
        "Loses its charge instantly",
        "Becomes an inductor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A capacitor holds its charge until discharged. (a) It is not always safe. (c) Charge does not vanish instantly. (d) A capacitor does not become an inductor."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Capacitance & Capacitive Reactance: Quick Reference</h3>\n<p><strong>Core idea:</strong> A capacitor fights a change in voltage. It blocks DC once charged and passes AC — the higher the frequency, the easier the current flows.</p>\n<p><strong>Capacitance:</strong> Farads (F) · Practical units are microfarads (μF) · Stores energy in an electric field.</p>\n<p><strong>Reactance:</strong> X_C = 1 ÷ (2πfC), in ohms · Falls as frequency and capacitance rise · Infinite at DC.</p>\n<p><strong>Phase:</strong> In a pure capacitor, current leads voltage by 90°.</p>\n<p><strong>Memory aid:</strong> \"ELI the ICE man\" — in L, I lags E; in C, I leads E.</p>\n<p><strong>Safety:</strong> A capacitor can hold a charge after power is off — discharge and verify zero before touching.</p>\n<p><strong>Self-check:</strong> Calculate X_C for 100 μF at 60 Hz and state the lead rule, without looking.</p>\n"
};
