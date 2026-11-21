// egr290 — module 10. Original review content.
module.exports = {
  "number": 10,
  "slug": "instrumentation-measurement-and-control",
  "title": "Instrumentation, Measurement, and Control",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe common sensors: thermocouple, RTD, strain gauge, pressure transducer, and flow meter.",
    "Calculate RTD resistance and scale a 4–20 mA signal.",
    "Explain accuracy, precision, resolution, and calibration.",
    "Describe open-loop and closed-loop control and the PID terms.",
    "Judge stability from poles and read a step response."
  ],
  "sections": [
    {
      "heading": "Sensors: Turning the Physical World into a Signal",
      "html": "<p>Every control system starts with a <strong>sensor</strong>. A <strong>thermocouple</strong> joins two different metals and produces a small voltage that grows with the temperature difference between the hot junction and the cold junction — rugged and wide-ranging, but it needs cold-junction compensation and gives millivolts. An <strong>RTD</strong> (resistance temperature detector, usually a Pt100 platinum element) changes resistance with temperature: R = R₀(1 + αΔT), with α = 0.00385/°C for platinum. A Pt100 at 100 °C reads R = 100 × (1 + 0.00385 × 100) = 100 × 1.385 = 138.5 Ω. RTDs are more accurate than thermocouples but slower and more fragile.</p><p>A <strong>strain gauge</strong> changes resistance when it is stretched, so it measures strain — and, glued to a load cell, force and weight. A <strong>pressure transducer</strong> turns pressure into a voltage or a current. <strong>Flow meters</strong> come in many kinds: orifice plates (pressure drop), turbines (spinning rotor), magnetic (for conductive fluids), and Coriolis (mass flow directly). A <strong>proximity sensor</strong> (inductive or capacitive) detects a part without touching it; a <strong>photoelectric sensor</strong> uses a beam of light. Choose the sensor by range, accuracy, speed, environment, and cost — in that order.</p>"
    },
    {
      "heading": "Signals: 4–20 mA and Scaling",
      "html": "<p>Industry's standard analogue signal is <strong>4–20 mA</strong>: 4 mA means the bottom of the range (and also proves the loop is alive — 0 mA means a broken wire), 20 mA means the top. Scaling is linear: a temperature transmitter ranged 0–100 °C sends 4 mA at 0 °C and 20 mA at 100 °C, so 12 mA — halfway — means 50 °C. The general formula is value = min + (I − 4)/(20 − 4) × (max − min). A 4–20 mA loop beats a 0–10 V signal in a factory because current does not drop along a long cable the way voltage does.</p><p><strong>Accuracy</strong> is how close a reading is to the true value; <strong>precision</strong> is how repeatable it is — a sensor can be precise and wrong. <strong>Resolution</strong> is the smallest change it can show (recall the ADC in Module 6: 5 V over 1,024 counts is 4.88 mV). <strong>Calibration</strong> is comparing the instrument against a known standard and adjusting it; a calibration that is out of date is worse than no calibration, because it looks trustworthy. <strong>Error</strong> is reading minus true value; <strong>uncertainty</strong> is the range the true value probably lies in.</p>"
    },
    {
      "heading": "Control Loops: Open, Closed, and PID",
      "html": "<p>An <strong>open-loop</strong> system drives an output without checking the result — a toaster on a timer. A <strong>closed-loop</strong> system measures the output and corrects the error: a thermostat measures the room, compares it with the setpoint, and drives the heater. The <strong>error</strong> is setpoint minus measured value. Feedback makes a system accurate and robust, but it can also make it oscillate if the correction is too aggressive.</p><p><strong>PID control</strong> has three terms. <strong>Proportional (P)</strong> acts on the present error: output = K_p × e. With K_p = 2 and an error of 5, the P term contributes 10. <strong>Integral (I)</strong> acts on the accumulated past error and removes steady-state offset — the error that a P-only controller leaves behind. <strong>Derivative (D)</strong> acts on the rate of change of the error and damps overshoot. Tuning is a trade: more P is faster but more oscillatory; I removes offset but adds overshoot; D damps but amplifies noise. The FE asks what each term does, not how to tune a loop by hand.</p>"
    },
    {
      "heading": "Stability and the Step Response",
      "html": "<p>A system is <strong>stable</strong> if a bounded input gives a bounded output — in practice, if it settles instead of growing or oscillating forever. For a transfer function, stability is decided by its <strong>poles</strong>: all poles must have negative real parts (lie in the left half of the s-plane). A pole at s = −2 is stable; a pole at s = +1 is unstable; a pole at s = 0 is marginally stable. <strong>Steady-state error</strong> is what remains after the transient dies: a type-0 system leaves an error for a step input, a type-1 system does not.</p><p>The <strong>step response</strong> is the system's answer to a sudden change in setpoint. Read it for <strong>rise time</strong> (how fast it gets there), <strong>overshoot</strong> (how far past the setpoint it goes), <strong>settling time</strong> (when it stays within a band, usually 2% or 5%), and <strong>steady-state error</strong>. A fast response with huge overshoot is a badly tuned loop; a slow response with no overshoot may be fine for a furnace and useless for a robot. On the FE, match the description to the term — the numbers are usually given, not calculated.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Sensors: thermocouple (mV, rugged), RTD Pt100 R = R₀(1 + αΔT), strain gauge (resistance change), pressure transducer, flow meters.</li><li>4–20 mA: 4 mA = bottom of range (and proves the loop is alive), 20 mA = top; value = min + (I − 4)/16 × (max − min).</li><li>Accuracy (close to true) vs precision (repeatable) vs resolution (smallest change). Calibrate against a known standard.</li><li>Control: open-loop has no feedback; closed-loop corrects the error. PID: P on present error, I on past error, D on the rate of change.</li><li>Stability: all poles in the left half-plane. Step response: rise time, overshoot, settling time, steady-state error.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Saying a sensor is accurate because it is precise. Precision is repeatability — a sensor can repeat the same wrong value all day.</div><div class=\"callout\"><strong>Common mistake:</strong> Treating 0 mA as a valid reading on a 4–20 mA loop. 0 mA means a broken wire; 4 mA is the bottom of the range.</div><p><strong>Ready-to-Work link:</strong> If you can scale a 4–20 mA signal, find an RTD resistance, and explain the three PID terms, you have this module. Module 11 moves to PMMI mechatronics.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Thermocouple",
      "def": "Two different metals joined; produces a voltage that grows with the temperature difference."
    },
    {
      "term": "RTD",
      "def": "Resistance temperature detector; resistance rises with temperature: R = R₀(1 + αΔT). Pt100 is the common type."
    },
    {
      "term": "Strain gauge",
      "def": "A sensor whose resistance changes when stretched; used to measure strain, force, and weight."
    },
    {
      "term": "4–20 mA loop",
      "def": "The industrial analogue standard: 4 mA = bottom of range, 20 mA = top, 0 mA = broken wire."
    },
    {
      "term": "Accuracy",
      "def": "How close a reading is to the true value."
    },
    {
      "term": "Precision",
      "def": "How repeatable readings are — not the same as accuracy."
    },
    {
      "term": "Resolution",
      "def": "The smallest change an instrument can show."
    },
    {
      "term": "Calibration",
      "def": "Comparing an instrument against a known standard and adjusting it."
    },
    {
      "term": "Open-loop control",
      "def": "Driving an output without measuring the result."
    },
    {
      "term": "Closed-loop control",
      "def": "Measuring the output and correcting the error between it and the setpoint."
    },
    {
      "term": "PID control",
      "def": "Proportional (present error), Integral (past error), Derivative (rate of change of error)."
    },
    {
      "term": "Steady-state error",
      "def": "The error remaining after the transient has died away."
    },
    {
      "term": "Pole",
      "def": "A root of a transfer function's denominator; all poles must have negative real parts for stability."
    },
    {
      "term": "Step response",
      "def": "A system's answer to a sudden setpoint change: rise time, overshoot, settling time, steady-state error."
    }
  ],
  "video": {
    "title": "How to Configure an RTD with Studio 5000",
    "embedUrl": "https://www.youtube.com/embed/Bs1Nh2Ku9YA",
    "note": "RealPars on wiring an RTD into a PLC analogue input and scaling it in ladder logic — the sensor-to-signal chain from this module, in a real system.",
    "more": [
      {
        "title": "Automatic transfer switch (ATS) fundamentals | Eaton PSEC",
        "url": "https://www.youtube.com/watch?v=yjphp4SBkSA"
      },
      {
        "title": "NFPA 72 Explained | by Dr. Rodger Reiswig, Johnson Controls",
        "url": "https://www.youtube.com/watch?v=YO-W-RO6GKw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A Pt100 RTD (R₀ = 100 Ω, α = 0.00385/°C) is at 100 °C. Find its resistance.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: R = 100 × (1 + 0.00385 × 100) = 100 × 1.385 = 138.5 Ω.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A temperature transmitter ranged 0–100 °C sends 4–20 mA. What temperature does 12 mA represent? What current represents 75 °C?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 12 mA is halfway: (12 − 4)/16 = 0.5, so 50 °C. Step 2: 75 °C is 75% of range: I = 4 + 0.75 × 16 = 4 + 12 = 16 mA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A PID controller has K_p = 2 and the error is 5. What is the proportional term's contribution?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P term = K_p × e = 2 × 5 = 10 (in the controller's output units).</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A system has poles at s = −2 and s = −3. Is it stable? What about poles at s = +1?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Poles at −2 and −3 both have negative real parts, so the system is stable. Step 2: A pole at +1 has a positive real part, so that system is unstable.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A sensor reads 10.2, 10.2, 10.2, 10.2 when the true value is 10.0. Is it accurate? Is it precise?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It is precise — the readings repeat exactly. Step 2: It is not accurate — every reading is 0.2 high, a systematic error that calibration would remove.</p>"
    }
  ],
  "quiz": [
    {
      "module": 10,
      "q": "A Pt100 RTD (R₀ = 100 Ω, α = 0.00385/°C) is at 100 °C. What is its resistance?",
      "choices": [
        "103.85 Ω",
        "138.5 Ω",
        "100 Ω",
        "385 Ω"
      ],
      "answer": 1,
      "explanation": "Correct: (b). R = 100 × (1 + 0.00385 × 100) = 138.5 Ω. (a) is wrong: that is the resistance at 10 °C. (c) is wrong: that is the resistance at 0 °C. (d) is wrong: that multiplies 100 by 3.85, not 1.385."
    },
    {
      "module": 10,
      "q": "A 0–100 °C transmitter sends 4–20 mA. What temperature does 12 mA represent?",
      "choices": [
        "25 °C",
        "50 °C",
        "75 °C",
        "12 °C"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (12 − 4)/16 = 0.5, so 50 °C. (a) is wrong: that would be 8 mA. (c) is wrong: that would be 16 mA. (d) is wrong: that confuses the current with the temperature."
    },
    {
      "module": 10,
      "q": "What does 0 mA mean on a 4–20 mA loop?",
      "choices": [
        "The bottom of the range",
        "A broken wire",
        "The top of the range",
        "Normal operation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0 mA means no current at all — a broken wire or dead transmitter. (a) is wrong: the bottom of the range is 4 mA. (c) is wrong: the top is 20 mA. (d) is wrong: 0 mA is a fault, not normal."
    },
    {
      "module": 10,
      "q": "A sensor reads the same wrong value every time. It is:",
      "choices": [
        "Accurate but not precise",
        "Precise but not accurate",
        "Accurate and precise",
        "Neither accurate nor precise"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Repeatable readings are precise; being wrong makes them inaccurate. (a) is wrong: that is backwards. (c) is wrong: the readings are wrong, so it is not accurate. (d) is wrong: the readings are precise, even though they are wrong."
    },
    {
      "module": 10,
      "q": "A PID controller has K_p = 2 and the error is 5. What is the proportional term?",
      "choices": [
        "2",
        "5",
        "10",
        "7"
      ],
      "answer": 2,
      "explanation": "Correct: (c). P term = 2 × 5 = 10. (a) is wrong: that is K_p alone. (b) is wrong: that is the error alone. (d) is wrong: that adds K_p and the error."
    },
    {
      "module": 10,
      "q": "Which PID term removes steady-state offset?",
      "choices": [
        "Proportional",
        "Integral",
        "Derivative",
        "Feedforward"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The integral term accumulates past error and drives the offset to zero. (a) is wrong: P alone leaves a steady-state error. (c) is wrong: D damps overshoot, it does not remove offset. (d) is wrong: feedforward is a different technique."
    },
    {
      "module": 10,
      "q": "A transfer function has poles at s = −2 and s = −3. Is the system stable?",
      "choices": [
        "Yes — all poles have negative real parts",
        "No — the poles are real",
        "Marginally stable",
        "Unstable"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Poles in the left half-plane mean stability. (b) is wrong: real poles can be stable; the sign matters, not whether they are real. (c) is wrong: marginal stability needs a pole on the imaginary axis. (d) is wrong: no pole has a positive real part."
    },
    {
      "module": 10,
      "q": "Which of these describes overshoot?",
      "choices": [
        "How fast the response first reaches the setpoint",
        "How far past the setpoint the response goes",
        "How long until the response settles",
        "The error left after settling"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Overshoot is how far the response goes past the setpoint. (a) is wrong: that is rise time. (c) is wrong: that is settling time. (d) is wrong: that is steady-state error."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Instrumentation, Measurement, and Control: Quick Reference</h3>\n<p><strong>Core idea:</strong> Sense it, scale it, compare it with the setpoint, and correct the error — and know whether the reading is trustworthy.</p>\n<p><strong>Sensors:</strong> Thermocouple (mV) · RTD R = R₀(1 + αΔT) · strain gauge (ΔR) · pressure transducer · flow meters.</p>\n<p><strong>4–20 mA:</strong> 4 mA = bottom, 20 mA = top, 0 mA = broken wire · value = min + (I − 4)/16 × (max − min).</p>\n<p><strong>Measurement:</strong> Accuracy = close to true · precision = repeatable · resolution = smallest change · calibrate against a standard.</p>\n<p><strong>Control:</strong> Open-loop = no feedback · closed-loop = correct the error · PID: P present, I past, D rate of change.</p>\n<p><strong>Stability:</strong> All poles in the left half-plane · step response: rise time, overshoot, settling time, steady-state error.</p>\n<p><strong>Watch out:</strong> Precise is not accurate; and 0 mA on a 4–20 mA loop is a fault, not a reading.</p>\n<p><strong>Self-check:</strong> Scale a 4–20 mA signal, find an RTD resistance, and explain the three PID terms without looking. If you can, you have this module.</p>\n"
};
