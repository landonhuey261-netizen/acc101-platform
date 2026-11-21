// ele103 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A sine wave has a frequency of 50 Hz. What is its period?",
        "choices": [
          "50 seconds",
          "20 milliseconds",
          "50 milliseconds",
          "0.5 seconds"
        ],
        "answer": 1,
        "explanation": "Correct: (b). T = 1 ÷ 50 = 0.02 seconds = 20 ms. (a) 50 seconds would be 0.02 Hz. (c) 50 ms would be 20 Hz. (d) 0.5 seconds would be 2 Hz."
      },
      {
        "module": 1,
        "q": "A sine wave has a period of 8.33 milliseconds. What is its frequency?",
        "choices": [
          "8.33 Hz",
          "60 Hz",
          "120 Hz",
          "240 Hz"
        ],
        "answer": 2,
        "explanation": "Correct: (c). f = 1 ÷ 0.00833 ≈ 120 Hz. (a) 8.33 Hz would need a 120 ms period. (b) 60 Hz has a 16.7 ms period. (d) 240 Hz has a 4.17 ms period."
      },
      {
        "module": 1,
        "q": "A sine wave has an RMS voltage of 240 V. What is its peak voltage?",
        "choices": [
          "170 V",
          "240 V",
          "339 V",
          "480 V"
        ],
        "answer": 2,
        "explanation": "Correct: (c). V_pk = 240 × 1.414 ≈ 339 V. (a) 170 V is 120 × 1.414. (b) 240 V is the RMS value. (d) 480 V is twice the RMS value."
      },
      {
        "module": 1,
        "q": "Two sine waves have the same frequency. One reaches its peak 90 degrees after the other. They are:",
        "choices": [
          "In phase",
          "90° out of phase",
          "Shorted",
          "Grounded"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Peaks 90 degrees apart means 90° out of phase. (a) In phase means the peaks occur together. (c) Shorted is a fault condition. (d) Grounded is a wiring condition."
      },
      {
        "module": 2,
        "q": "A 50 mH (0.05 H) inductor is connected to a 60 Hz source. What is its inductive reactance? (Round to the nearest whole number.)",
        "choices": [
          "9 Ω",
          "19 Ω",
          "38 Ω",
          "188 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). X_L = 2 × 3.1416 × 60 × 0.05 ≈ 18.85 ohms — 19 rounded. (a) 9 ohms would need 0.025 H. (c) 38 ohms would need 0.1 H. (d) 188 ohms would need 0.5 H."
      },
      {
        "module": 2,
        "q": "An inductor has 20 Ω of reactance at 60 Hz. What is its reactance at 30 Hz?",
        "choices": [
          "10 Ω",
          "20 Ω",
          "40 Ω",
          "60 Ω"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Reactance is proportional to frequency, so halving f halves X_L to 10 ohms. (b) 20 ohms is the reactance at 60 Hz. (c) 40 ohms would be the reactance at 120 Hz. (d) 60 ohms is not related."
      },
      {
        "module": 2,
        "q": "In a purely inductive circuit, the voltage:",
        "choices": [
          "Lags the current by 90°",
          "Leads the current by 90°",
          "Is in phase with the current",
          "Is zero"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In an inductor, voltage leads current by 90° — the current lags the voltage. (a) Voltage lags in a capacitor. (c) In phase is a purely resistive circuit. (d) Voltage is present in an inductive circuit."
      },
      {
        "module": 2,
        "q": "Which device is an inductor?",
        "choices": [
          "A resistor",
          "A motor winding",
          "A capacitor",
          "A battery"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A motor winding is a coil — an inductor. (a) A resistor is not an inductor. (c) A capacitor stores energy in an electric field. (d) A battery stores chemical energy."
      },
      {
        "module": 3,
        "q": "A 50 μF capacitor is connected to a 60 Hz source. What is its capacitive reactance? (Round to the nearest whole number.)",
        "choices": [
          "26 Ω",
          "53 Ω",
          "106 Ω",
          "265 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). X_C = 1 ÷ (2 × 3.1416 × 60 × 0.00005) = 1 ÷ 0.01885 ≈ 53 ohms. (a) 26 ohms would need 100 μF. (c) 106 ohms would need 25 μF. (d) 265 ohms would need 10 μF."
      },
      {
        "module": 3,
        "q": "A capacitor has 100 Ω of reactance at 60 Hz. What is its reactance at 180 Hz? (Round to the nearest whole number.)",
        "choices": [
          "33 Ω",
          "100 Ω",
          "200 Ω",
          "300 Ω"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Reactance is inversely proportional to frequency, so tripling f divides X_C by 3: 100 ÷ 3 ≈ 33 ohms. (b) 100 ohms is the reactance at 60 Hz. (c) 200 ohms would be the inductive change. (d) 300 ohms is 100 × 3, the wrong direction."
      },
      {
        "module": 3,
        "q": "In a purely capacitive circuit, the voltage:",
        "choices": [
          "Leads the current by 90°",
          "Lags the current by 90°",
          "Is in phase with the current",
          "Is zero"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In a capacitor, voltage lags current by 90° — the current leads the voltage. (a) Voltage leads in an inductor. (c) In phase is a purely resistive circuit. (d) Voltage is present in a capacitive circuit."
      },
      {
        "module": 3,
        "q": "Which device uses a capacitor to start?",
        "choices": [
          "A three-phase motor",
          "A single-phase motor with a start capacitor",
          "A resistor",
          "A transformer"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Single-phase motors use a start capacitor for the phase shift they need to start. (a) Three-phase motors start themselves. (c) A resistor is not a motor. (d) A transformer does not need a capacitor to start."
      },
      {
        "module": 4,
        "q": "A series RLC circuit has R = 40 Ω, X_L = 30 Ω, and X_C = 0 Ω. What is the impedance?",
        "choices": [
          "40 Ω",
          "50 Ω",
          "70 Ω",
          "120 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Z = √(40² + 30²) = √2,500 = 50 ohms. (a) 40 ohms is the resistance alone. (c) 70 ohms is R + X, the wrong combination. (d) 120 ohms is not related."
      },
      {
        "module": 4,
        "q": "In that circuit on a 120 V source, what is the total current?",
        "choices": [
          "2.4 amps",
          "3 amps",
          "4 amps",
          "12 amps"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 120 ÷ 50 = 2.4 amps. (b) 3 amps would need 40 ohms. (c) 4 amps would need 30 ohms. (d) 12 amps would need 10 ohms."
      },
      {
        "module": 4,
        "q": "In that circuit, what is the phase angle? (tan θ = X ÷ R = 30 ÷ 40 = 0.75)",
        "choices": [
          "About 30°",
          "About 37°",
          "About 45°",
          "About 53°"
        ],
        "answer": 1,
        "explanation": "Correct: (b). tan⁻¹(0.75) ≈ 36.9°, about 37°. (a) 30° would need tan θ = 0.577. (c) 45° would need X = R. (d) 53° would need tan θ = 1.33."
      },
      {
        "module": 4,
        "q": "In that circuit, what is the power factor?",
        "choices": [
          "0.6",
          "0.75",
          "0.8",
          "1.0"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Power factor = R ÷ Z = 40 ÷ 50 = 0.8. (a) 0.6 would be X ÷ Z. (b) 0.75 is tan θ. (d) 1.0 is a purely resistive circuit."
      },
      {
        "module": 4,
        "q": "A series RLC circuit has X_L = 50 Ω and X_C = 50 Ω. What is the net reactance?",
        "choices": [
          "100 Ω",
          "50 Ω",
          "0 Ω — the circuit is at resonance",
          "25 Ω"
        ],
        "answer": 2,
        "explanation": "Correct: (c). X = 50 − 50 = 0, so the reactances cancel and the circuit is at resonance. (a) 100 ohms adds them, the wrong combination. (b) 50 ohms is one reactance alone. (d) 25 ohms is half of one reactance."
      },
      {
        "module": 5,
        "q": "In a parallel RLC circuit, the resistor carries 3 A, the inductor carries 5 A, and the capacitor carries 1 A. What is the total current from the source?",
        "choices": [
          "3 amps",
          "5 amps",
          "9 amps",
          "12 amps"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The inductor and capacitor currents partly cancel: net reactive current is 5 − 1 = 4 A, so the total is √(3² + 4²) = √25 = 5 amps. (a) 3 amps is the resistor's current alone. (c) 9 amps adds all three currents in a straight line. (d) 12 amps is far too high."
      },
      {
        "module": 5,
        "q": "At parallel resonance, the source current is:",
        "choices": [
          "At its maximum",
          "At its minimum — the reactive currents cancel",
          "Zero",
          "Equal to the circulating current"
        ],
        "answer": 1,
        "explanation": "Correct: (b). At parallel resonance the reactive currents cancel, so the source supplies only the resistor's current. (a) Maximum source current is series resonance. (c) The source current is not zero — the resistor still draws current. (d) The circulating current is Q times the source current, much larger."
      },
      {
        "module": 5,
        "q": "A parallel RLC circuit has L = 0.05 H and C = 50 μF. What is its resonant frequency? (Round to the nearest whole number.)",
        "choices": [
          "32 Hz",
          "100 Hz",
          "159 Hz",
          "1,000 Hz"
        ],
        "answer": 1,
        "explanation": "Correct: (b). f_0 = 1 ÷ (2π√(0.05 × 0.00005)) = 1 ÷ (2 × 3.1416 × 0.00158) ≈ 100.7 Hz — 100 rounded. (a) 32 Hz is far too low. (c) 159 Hz would need a smaller LC product. (d) 1,000 Hz would need a much smaller LC product."
      },
      {
        "module": 5,
        "q": "A parallel resonant circuit has f_0 = 2,000 Hz and Q = 20. What is its bandwidth?",
        "choices": [
          "40 Hz",
          "100 Hz",
          "400 Hz",
          "2,000 Hz"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Bandwidth = 2,000 ÷ 20 = 100 Hz. (a) 40 Hz would need Q = 50. (c) 400 Hz would need Q = 5. (d) 2,000 Hz is the resonant frequency, not the bandwidth."
      },
      {
        "module": 6,
        "q": "A 240 V circuit draws 5 A at a phase angle of 60°. What is the apparent power?",
        "choices": [
          "600 VA",
          "1,200 VA",
          "2,400 VA",
          "5,000 VA"
        ],
        "answer": 1,
        "explanation": "Correct: (b). S = 240 × 5 = 1,200 VA. (a) 600 VA is the true power (1,200 × 0.5). (c) 2,400 VA is 240 × 10. (d) 5,000 VA is not related."
      },
      {
        "module": 6,
        "q": "In that circuit, what is the true power?",
        "choices": [
          "600 W",
          "1,039 W",
          "1,200 W",
          "2,400 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). P = S × cos 60° = 1,200 × 0.5 = 600 W. (b) 1,039 W is the reactive power (1,200 × sin 60°). (c) 1,200 W is the apparent power. (d) 2,400 W is too high."
      },
      {
        "module": 6,
        "q": "In that circuit, what is the reactive power? (Round to the nearest whole number.)",
        "choices": [
          "600 VAR",
          "1,039 VAR",
          "1,200 VAR",
          "2,400 VAR"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Q = S × sin 60° = 1,200 × 0.866 ≈ 1,039 VAR. (a) 600 VAR is the true power. (c) 1,200 VAR is the apparent power. (d) 2,400 VAR is too high."
      },
      {
        "module": 6,
        "q": "A load has P = 1,200 W and Q = 1,600 VAR. What is the apparent power?",
        "choices": [
          "400 VA",
          "2,000 VA",
          "2,800 VA",
          "1,920 VA"
        ],
        "answer": 1,
        "explanation": "Correct: (b). S = √(1,200² + 1,600²) = √4,000,000 = 2,000 VA. (a) 400 VA is Q − P. (c) 2,800 VA adds them in a straight line. (d) 1,920 VA is not the hypotenuse."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "module": 1,
        "q": "A sine wave has a peak voltage of 170 V. What is its peak-to-peak voltage?",
        "choices": [
          "85 V",
          "170 V",
          "340 V",
          "120 V"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Peak-to-peak is twice the peak: 2 × 170 = 340 V. (a) 85 V is half the peak. (b) 170 V is the peak. (d) 120 V is the RMS value."
      },
      {
        "module": 1,
        "q": "A 50 Hz sine wave and a 60 Hz sine wave are shown together. Which one completes more cycles per second?",
        "choices": [
          "The 50 Hz wave",
          "The 60 Hz wave",
          "They complete the same number",
          "Neither completes a cycle"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Frequency is cycles per second, so 60 Hz completes more cycles. (a) 50 Hz completes fewer cycles. (c) The frequencies differ. (d) Both complete cycles."
      },
      {
        "module": 2,
        "q": "An inductor has 5 Ω of reactance at 60 Hz. What is its reactance at 240 Hz?",
        "choices": [
          "1.25 Ω",
          "5 Ω",
          "10 Ω",
          "20 Ω"
        ],
        "answer": 3,
        "explanation": "Correct: (d). Reactance is proportional to frequency, so 240 ÷ 60 = 4 times the reactance: 5 × 4 = 20 ohms. (a) 1.25 ohms would be the capacitive change. (b) 5 ohms is the reactance at 60 Hz. (c) 10 ohms would be the reactance at 120 Hz."
      },
      {
        "module": 2,
        "q": "What happens to an inductor's reactance at DC?",
        "choices": [
          "It becomes infinite",
          "It becomes zero",
          "It stays the same",
          "It becomes negative"
        ],
        "answer": 1,
        "explanation": "Correct: (b). X_L = 2πfL, and at f = 0, X_L = 0. (a) Infinite reactance is a capacitor at DC. (c) Reactance changes with frequency. (d) Reactance is never negative."
      },
      {
        "module": 3,
        "q": "A capacitor has 80 Ω of reactance at 60 Hz. What is its reactance at 240 Hz?",
        "choices": [
          "20 Ω",
          "80 Ω",
          "160 Ω",
          "320 Ω"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Reactance is inversely proportional to frequency, so 240 ÷ 60 = 4 means X_C is divided by 4: 80 ÷ 4 = 20 ohms. (b) 80 ohms is the reactance at 60 Hz. (c) 160 ohms would be the inductive change. (d) 320 ohms is 80 × 4, the wrong direction."
      },
      {
        "module": 3,
        "q": "What happens to a capacitor's reactance at DC?",
        "choices": [
          "It becomes zero",
          "It becomes infinite — it blocks DC once charged",
          "It stays the same",
          "It becomes negative"
        ],
        "answer": 1,
        "explanation": "Correct: (b). X_C = 1 ÷ (2πfC), and at f = 0 the reactance is infinite. (a) Zero reactance is an inductor at DC. (c) Reactance changes with frequency. (d) Reactance is never negative."
      },
      {
        "module": 4,
        "q": "A series RLC circuit has R = 60 Ω, X_L = 80 Ω, and X_C = 40 Ω. What is the impedance? (Round to the nearest whole number.)",
        "choices": [
          "60 Ω",
          "72 Ω",
          "100 Ω",
          "180 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). X = 80 − 40 = 40 Ω, and Z = √(60² + 40²) = √5,200 ≈ 72 ohms. (a) 60 ohms is the resistance alone. (c) 100 ohms would need X = 80 Ω. (d) 180 ohms adds everything in a straight line."
      },
      {
        "module": 4,
        "q": "In a series RLC circuit, the voltage across the resistor is:",
        "choices": [
          "90° ahead of the current",
          "In phase with the current",
          "90° behind the current",
          "180° from the current"
        ],
        "answer": 1,
        "explanation": "Correct: (b). V_R is in phase with the current. (a) 90° ahead is V_L. (c) 90° behind is V_C. (d) 180° is the relationship between V_L and V_C."
      },
      {
        "module": 4,
        "q": "A series RLC circuit is net capacitive. The current:",
        "choices": [
          "Lags the voltage",
          "Leads the voltage",
          "Is in phase with the voltage",
          "Is zero"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Net capacitive means X_C is bigger, so current leads. (a) Current lags in a net inductive circuit. (c) In phase means purely resistive. (d) Current flows in a capacitive circuit."
      },
      {
        "module": 5,
        "q": "In a parallel RLC circuit, the inductor carries 8 A and the capacitor carries 8 A. What is the net reactive current?",
        "choices": [
          "16 A",
          "8 A",
          "0 A — they cancel",
          "4 A"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The inductor and capacitor currents are 180° apart and equal, so they cancel completely. (a) 16 A adds them in a straight line. (b) 8 A is one branch's current. (d) 4 A is half of one branch's current."
      },
      {
        "module": 5,
        "q": "A parallel resonant circuit has Q = 25 and a source current of 4 A at resonance. What is the circulating current?",
        "choices": [
          "4 A",
          "25 A",
          "100 A",
          "625 A"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Circulating current = Q × source current = 25 × 4 = 100 A. (a) 4 A is the source current. (b) 25 A is Q alone. (d) 625 A is Q²."
      },
      {
        "module": 5,
        "q": "Which statement about series and parallel resonance is correct?",
        "choices": [
          "Both give minimum impedance",
          "Series resonance is minimum impedance; parallel resonance is maximum impedance",
          "Both give maximum impedance",
          "Series resonance is maximum impedance; parallel resonance is minimum impedance"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Series resonance is minimum Z and maximum I; parallel resonance is maximum Z and minimum source I. (a) Only series resonance gives minimum impedance. (c) Only parallel resonance gives maximum impedance. (d) The two are reversed."
      },
      {
        "module": 6,
        "q": "A load draws 2,000 VA apparent power at a power factor of 0.8. What is the true power?",
        "choices": [
          "1,600 W",
          "2,000 W",
          "2,500 W",
          "1,200 W"
        ],
        "answer": 0,
        "explanation": "Correct: (a). P = S × pf = 2,000 × 0.8 = 1,600 W. (b) 2,000 W is the apparent power. (c) 2,500 W is S ÷ pf. (d) 1,200 W would need a 0.6 power factor."
      },
      {
        "module": 6,
        "q": "A load has S = 2,500 VA and P = 1,500 W. What is the reactive power?",
        "choices": [
          "1,000 VAR",
          "2,000 VAR",
          "4,000 VAR",
          "1,500 VAR"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Q = √(S² − P²) = √(6,250,000 − 2,250,000) = √4,000,000 = 2,000 VAR. (a) 1,000 VAR is S − P. (c) 4,000 VAR is P + Q added wrongly. (d) 1,500 VAR is the true power."
      },
      {
        "module": 6,
        "q": "An inductive load and a capacitive load are connected to the same source. Their reactive powers:",
        "choices": [
          "Add together",
          "Cancel each other in part or in full",
          "Both become true power",
          "Disappear from the meter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Inductive and capacitive VARs are opposites and cancel. (a) They do not add — they subtract. (c) Reactive power never becomes true power. (d) The net reactive power is still measurable."
      },
      {
        "module": 7,
        "q": "A 5 kW load at 0.8 power factor is corrected to 0.95. What is the new apparent power? (Round to the nearest whole number.)",
        "choices": [
          "5 kVA",
          "5.3 kVA",
          "6.25 kVA",
          "4.75 kVA"
        ],
        "answer": 1,
        "explanation": "Correct: (b). S = 5 ÷ 0.95 ≈ 5.26 kVA — 5.3 rounded. (a) 5 kVA would be a 1.0 power factor. (c) 6.25 kVA is the starting apparent power (5 ÷ 0.8). (d) 4.75 kVA is 5 × 0.95, the wrong operation."
      },
      {
        "module": 7,
        "q": "A correction capacitor is left connected when its motor is switched off. What happens?",
        "choices": [
          "Nothing — the capacitor does nothing without the motor",
          "The circuit is over-corrected and the power factor goes leading",
          "The power factor improves further",
          "The capacitor discharges safely"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Without the motor's inductive VARs, the capacitor over-corrects the circuit. (a) The capacitor still supplies leading VARs. (c) The power factor goes leading, which is not an improvement. (d) The capacitor stays charged and connected."
      },
      {
        "module": 7,
        "q": "Why do utilities charge large customers for a poor power factor?",
        "choices": [
          "To punish small customers",
          "Because a low power factor means the utility must supply extra current and build for apparent power, not just true power",
          "Because reactive power is billed as true power",
          "Because the meter reads wrong"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The utility must deliver more current and build capacity for apparent power. (a) The charge is for large customers with poor power factor, not small customers. (c) Utilities bill true power; the penalty is for the extra capacity. (d) The meter reads correctly."
      },
      {
        "module": 7,
        "q": "A capacitor bank is installed to correct power factor, but the capacitors keep overheating. What is a likely cause?",
        "choices": [
          "Too little capacitance",
          "Harmonic resonance — the capacitor and system inductance resonate at a harmonic frequency",
          "The capacitors are too big",
          "The power factor is too good"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Harmonic resonance causes large circulating currents that overheat capacitors. (a) Too little capacitance under-corrects but does not overheat. (c) Oversized capacitors over-correct but do not overheat this way. (d) A good power factor does not overheat capacitors."
      },
      {
        "module": 8,
        "q": "A wye system has a line voltage of 208 V. What is the phase voltage?",
        "choices": [
          "120 V",
          "208 V",
          "360 V",
          "240 V"
        ],
        "answer": 0,
        "explanation": "Correct: (a). V_P = V_L ÷ √3 = 208 ÷ 1.732 ≈ 120 V. (b) 208 V is the line voltage. (c) 360 V is 208 × √3, the wrong direction. (d) 240 V is a delta system voltage."
      },
      {
        "module": 8,
        "q": "A delta system has a line voltage of 240 V. What is the phase voltage?",
        "choices": [
          "120 V",
          "139 V",
          "240 V",
          "416 V"
        ],
        "answer": 2,
        "explanation": "Correct: (c). In delta, V_L = V_P, so the phase voltage is 240 V. (a) 120 V is half the line voltage. (b) 139 V is 240 ÷ √3, the wye conversion. (d) 416 V is 240 × √3, the wrong direction."
      },
      {
        "module": 8,
        "q": "A 208 V three-phase load draws 30 A at 0.9 power factor. What is the true power? (Round to the nearest whole number.)",
        "choices": [
          "9.7 kW",
          "10.8 kW",
          "12 kW",
          "5.6 kW"
        ],
        "answer": 0,
        "explanation": "Correct: (a). P = 1.732 × 208 × 30 × 0.9 ≈ 9,727 W — 9.7 kW rounded. (b) 10.8 kW is the apparent power. (c) 12 kW is too high. (d) 5.6 kW is about half the answer."
      },
      {
        "module": 8,
        "q": "Three line currents on a three-phase motor read 15 A, 15 A, and 15 A. What does that tell you?",
        "choices": [
          "The motor is failing",
          "The load is balanced — the currents are equal",
          "One phase is lost",
          "The neutral is overloaded"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Equal line currents mean a balanced load. (a) Equal currents are normal. (c) A lost phase makes the currents unequal. (d) A balanced load puts almost no current on the neutral."
      },
      {
        "module": 9,
        "q": "A transformer has 200 primary turns and 50 secondary turns, fed by 240 V. What is the secondary voltage?",
        "choices": [
          "60 V",
          "120 V",
          "240 V",
          "960 V"
        ],
        "answer": 0,
        "explanation": "Correct: (a). V_S = 240 × (50 ÷ 200) = 60 V. (b) 120 V would need a 2:1 ratio. (c) 240 V is the primary voltage. (d) 960 V would be a step-up ratio."
      },
      {
        "module": 9,
        "q": "In that transformer, the primary draws 4 A. What is the secondary current?",
        "choices": [
          "1 A",
          "4 A",
          "16 A",
          "8 A"
        ],
        "answer": 2,
        "explanation": "Correct: (c). I_S = 4 × (200 ÷ 50) = 16 A. (a) 1 A is 4 ÷ 4, the wrong direction. (b) 4 A is the primary current. (d) 8 A is 4 × 2, the wrong ratio."
      },
      {
        "module": 9,
        "q": "A transformer is energized with no load connected. Why does it still feel warm?",
        "choices": [
          "It is broken",
          "Core loss — hysteresis and eddy currents — is present whenever the core is magnetized, even with no load",
          "Copper loss from the load",
          "The cooling fan is broken"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Core loss is nearly constant whenever the transformer is energized. (a) Warmth with no load is normal. (c) There is no load current, so no copper loss. (d) The fan is not the cause."
      },
      {
        "module": 9,
        "q": "Transformer taps are used to:",
        "choices": [
          "Change the frequency",
          "Adjust the output voltage a few percent up or down",
          "Increase the kVA rating",
          "Change the transformer from step-up to step-down"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Taps adjust the voltage a few percent to compensate for a high or low supply. (a) Taps do not change frequency. (c) Taps do not change the kVA rating. (d) Taps do not reverse the transformer's direction."
      },
      {
        "module": 10,
        "q": "An oscilloscope is set to 10 V per division, and a wave is 5 divisions tall (peak). What is the peak voltage?",
        "choices": [
          "2 V",
          "10 V",
          "50 V",
          "100 V"
        ],
        "answer": 2,
        "explanation": "Correct: (c). 5 × 10 = 50 volts peak. (a) 2 V is 10 ÷ 5. (b) 10 V is one division. (d) 100 V is the peak-to-peak value."
      },
      {
        "module": 10,
        "q": "One cycle spans 4 divisions at 2 ms per division. What is the frequency?",
        "choices": [
          "8 Hz",
          "125 Hz",
          "250 Hz",
          "500 Hz"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Period = 4 × 2 = 8 ms, so f = 1 ÷ 0.008 = 125 Hz. (a) 8 Hz confuses the period in ms with the frequency. (c) 250 Hz would need a 4 ms period. (d) 500 Hz would need a 2 ms period."
      },
      {
        "module": 10,
        "q": "Two waves are shown on two channels. One cycle spans 8 divisions, and the peaks are 2 divisions apart. What is the phase shift?",
        "choices": [
          "45°",
          "90°",
          "180°",
          "30°"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Phase = (2 ÷ 8) × 360° = 90°. (a) 45° would need 1 division apart. (c) 180° would need 4 divisions apart. (d) 30° would need 0.67 divisions apart."
      },
      {
        "module": 10,
        "q": "Why is a true-RMS meter needed for a variable-frequency drive's output?",
        "choices": [
          "The output is DC",
          "The output is a chopped, non-sine waveform, and an average-responding meter can read 20–40% low",
          "The output has no voltage",
          "True-RMS meters are cheaper"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A VFD output is distorted, so an average-responding meter reads wrong. (a) A VFD output is AC, not DC. (c) The output has voltage. (d) True-RMS meters cost more, not less."
      },
      {
        "module": 11,
        "q": "A building has many computers and LED lights. The neutral current is higher than any phase current. What is the most likely cause?",
        "choices": [
          "A short circuit",
          "Triplen harmonics adding in the neutral",
          "A failed transformer",
          "Too many receptacles"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Triplen harmonics add in the neutral instead of canceling. (a) A short would trip a breaker. (c) A failed transformer would affect the phases. (d) Receptacle count does not make the neutral exceed the phases."
      },
      {
        "module": 11,
        "q": "A motor runs hotter than its nameplate suggests at the same load. Harmonics are suspected. Why do harmonics heat a motor?",
        "choices": [
          "They increase the voltage",
          "Harmonic currents make extra heat in the windings and extra vibration",
          "They reduce the current",
          "They cool the motor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Harmonic currents cause additional winding heat and vibration. (a) Harmonics do not raise the fundamental voltage. (c) Harmonics add current, they do not reduce it. (d) Harmonics heat, they do not cool."
      },
      {
        "module": 11,
        "q": "What is the first step in fixing a harmonics problem?",
        "choices": [
          "Install a capacitor bank",
          "Measure with a power-quality meter — THD, harmonic currents, and neutral current",
          "Replace the transformer",
          "Add more loads"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The fix depends on which harmonics are present and how big they are. (a) A capacitor can make resonance worse. (c) Replacing the transformer without measuring may not fix the problem. (d) Adding loads makes it worse."
      },
      {
        "module": 11,
        "q": "A 5th harmonic is at what frequency on a 60 Hz system?",
        "choices": [
          "60 Hz",
          "180 Hz",
          "300 Hz",
          "600 Hz"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The 5th harmonic is 5 × 60 = 300 Hz. (a) 60 Hz is the fundamental. (b) 180 Hz is the 3rd harmonic. (d) 600 Hz is the 10th harmonic."
      },
      {
        "module": 12,
        "q": "A GFCI receptacle keeps tripping when a tool is plugged in. What is the most likely cause?",
        "choices": [
          "An overload",
          "A ground fault — current leaking to ground, which the GFCI is designed to catch",
          "A short circuit",
          "A failed breaker"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A GFCI trips on ground-fault current, not on overload. (a) An overload trips the breaker, not the GFCI. (c) A short trips the breaker. (d) A failed breaker would not trip repeatedly on one tool."
      },
      {
        "module": 12,
        "q": "A motor's insulation resistance reads very low to ground on a megger test. What does that mean?",
        "choices": [
          "The insulation is good",
          "The insulation is deteriorating — the motor is about to fail and should be replaced on a planned basis",
          "The megger is broken",
          "The motor needs more voltage"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Low insulation resistance means the insulation is breaking down. (a) Good insulation reads high. (c) The megger is reporting a real condition. (d) More voltage would make it worse."
      },
      {
        "module": 12,
        "q": "A three-phase motor is checked with a clamp meter and the currents are 10 A, 10 A, and 0 A. What does that mean?",
        "choices": [
          "The load is balanced",
          "One phase is lost — the motor is running on two phases and will overheat",
          "The motor is off",
          "The clamp meter is broken"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Zero current on one phase means a lost phase. (a) Balanced means equal currents on all three phases. (c) The motor is drawing current on two phases, so it is not off. (d) The meter is reporting a real condition."
      },
      {
        "module": 12,
        "q": "A worker needs to measure voltage inside a live 480 V panel. What meter rating is required?",
        "choices": [
          "CAT I",
          "CAT II",
          "CAT III or CAT IV",
          "Any rating"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A 480 V panel is a CAT III/IV location. (a) CAT I is for electronics. (b) CAT II is for plug-in equipment. (d) Rating matters — an underrated meter can fail dangerously."
      },
      {
        "module": 2,
        "q": "A 0.2 H inductor is connected to a 120 Hz source. What is its inductive reactance? (Round to the nearest whole number.)",
        "choices": [
          "38 Ω",
          "75 Ω",
          "151 Ω",
          "302 Ω"
        ],
        "answer": 2,
        "explanation": "Correct: (c). X_L = 2 × 3.1416 × 120 × 0.2 ≈ 151 ohms. (a) 38 ohms would need 0.05 H. (b) 75 ohms would need 0.1 H. (d) 302 ohms would need 0.4 H."
      }
    ]
  }
};
