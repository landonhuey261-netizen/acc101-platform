// egr105 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and wording).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.
module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A workshop supply is rated 240 V RMS. What is the peak voltage of its sine wave?",
        "choices": [
          "240 V",
          "120 V",
          "339 V",
          "480 V"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Peak = RMS × √2 = 240 × 1.414 ≈ 339 V. (a) 240 V is the RMS value, not the peak. (b) 120 V is half the RMS value. (d) 480 V is double the RMS value."
      },
      {
        "module": 1,
        "q": "An AC waveform completes one full cycle in 20 ms. What is its frequency?",
        "choices": [
          "20 Hz",
          "50 Hz",
          "60 Hz",
          "200 Hz"
        ],
        "answer": 1,
        "explanation": "Correct: (b). f = 1 ÷ T = 1 ÷ 0.020 = 50 Hz. (a) 20 Hz confuses the period in ms with the frequency. (c) 60 Hz is the North American mains frequency, not this waveform's. (d) 200 Hz is 1 ÷ 0.005 — the wrong period."
      },
      {
        "module": 1,
        "q": "An AC voltage has a peak of 100 V. What is its RMS value?",
        "choices": [
          "100 V",
          "141 V",
          "70.7 V",
          "50 V"
        ],
        "answer": 2,
        "explanation": "Correct: (c). RMS = peak ÷ √2 = 100 ÷ 1.414 ≈ 70.7 V. (a) 100 V is the peak, not the RMS. (b) 141 V multiplies by √2 — the wrong direction. (d) 50 V is half the peak."
      },
      {
        "module": 1,
        "q": "What is the angular frequency (ω) of a 50 Hz supply, in radians per second?",
        "choices": [
          "50 rad/s",
          "100 rad/s",
          "314 rad/s",
          "377 rad/s"
        ],
        "answer": 2,
        "explanation": "Correct: (c). ω = 2πf = 2 × 3.1416 × 50 ≈ 314 rad/s. (a) 50 rad/s is the frequency in Hz, not the angular frequency. (b) 100 rad/s is 2f, missing the π. (d) 377 rad/s is the angular frequency at 60 Hz."
      },
      {
        "module": 2,
        "q": "In a circuit, the voltage phasor is at 0° and the current phasor is at −30°. What is the phase angle, and does the current lead or lag?",
        "choices": [
          "30°, current leads",
          "30°, current lags",
          "60°, current lags",
          "0°, in phase"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The current is 30° behind the voltage, so it lags by 30°. (a) is wrong: a negative current angle means lagging, not leading. (c) is wrong: the difference is 30°, not 60°. (d) is wrong: the phasors are not aligned."
      },
      {
        "module": 2,
        "q": "A 60 V AC supply feeds a 20 Ω resistor. What current flows, and what is the phase relationship between voltage and current?",
        "choices": [
          "3 A, in phase",
          "3 A, current lags 90°",
          "1,200 A, in phase",
          "0.33 A, current leads 90°"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = V ÷ R = 60 ÷ 20 = 3 A, and in a resistor voltage and current are in phase. (b) is wrong: a 90° lag is an inductor's behaviour. (c) 1,200 A multiplies V × R. (d) is wrong: 0.33 A is R ÷ V, and a 90° lead is a capacitor's behaviour."
      },
      {
        "module": 2,
        "q": "In a series RC circuit, the resistor voltage is 60 V and the capacitor voltage is 80 V. What is the supply voltage?",
        "choices": [
          "140 V",
          "20 V",
          "100 V",
          "80 V"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Voltages add as phasors: √(60² + 80²) = √10,000 = 100 V. (a) 140 V adds them directly — the classic error. (b) 20 V subtracts them. (d) 80 V is one voltage alone."
      },
      {
        "module": 2,
        "q": "Which phasor diagram describes a capacitor?",
        "choices": [
          "Current and voltage in phase",
          "Current 90° ahead of voltage",
          "Current 90° behind voltage",
          "Voltage 180° behind current"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In a capacitor the current leads the voltage by 90° (ICE). (a) describes a resistor. (c) describes an inductor. (d) is wrong: the capacitor's shift is 90°, not 180°."
      },
      {
        "module": 3,
        "q": "What is the capacitive reactance of a 50 µF capacitor at 60 Hz?",
        "choices": [
          "53 Ω",
          "18.9 Ω",
          "5.3 Ω",
          "530 Ω"
        ],
        "answer": 0,
        "explanation": "Correct: (a). XC = 1 ÷ (2π × 60 × 0.00005) ≈ 53.1 Ω. (b) 18.9 Ω is the reactance of a much larger capacitor, not 50 µF. (c) 5.3 Ω is ten times too small. (d) 530 Ω is ten times too big."
      },
      {
        "module": 3,
        "q": "The frequency feeding a capacitor doubles from 60 Hz to 120 Hz. What happens to its reactance?",
        "choices": [
          "It doubles",
          "It halves",
          "It stays the same",
          "It becomes zero"
        ],
        "answer": 1,
        "explanation": "Correct: (b). XC = 1 ÷ (2πfC), so doubling f halves XC. (a) is the inductor's behaviour. (c) is wrong: XC depends on frequency. (d) is wrong: XC never reaches zero at a finite frequency."
      },
      {
        "module": 3,
        "q": "A capacitor draws 2 A from a 100 V AC supply. What is its reactance?",
        "choices": [
          "200 Ω",
          "50 Ω",
          "0.02 Ω",
          "102 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). XC = V ÷ I = 100 ÷ 2 = 50 Ω. (a) 200 Ω multiplies V × I. (c) 0.02 Ω is I ÷ V — upside down. (d) 102 Ω adds the numbers."
      },
      {
        "module": 3,
        "q": "What is the capacitive reactance of a 100 µF capacitor at 50 Hz?",
        "choices": [
          "31.8 Ω",
          "3.18 Ω",
          "318 Ω",
          "15.9 Ω"
        ],
        "answer": 0,
        "explanation": "Correct: (a). XC = 1 ÷ (2π × 50 × 0.0001) ≈ 31.8 Ω. (b) 3.18 Ω is ten times too small. (c) 318 Ω is ten times too big. (d) 15.9 Ω is half the answer — the value at 100 Hz."
      },
      {
        "module": 4,
        "q": "What is the inductive reactance of a 50 mH inductor at 60 Hz?",
        "choices": [
          "18.8 Ω",
          "1.88 Ω",
          "188 Ω",
          "37.7 Ω"
        ],
        "answer": 0,
        "explanation": "Correct: (a). XL = 2π × 60 × 0.05 ≈ 18.8 Ω. (b) 1.88 Ω is ten times too small. (c) 188 Ω is ten times too big. (d) 37.7 Ω is the value for a 100 mH inductor."
      },
      {
        "module": 4,
        "q": "In an inductor, how does the current relate to the voltage?",
        "choices": [
          "Current leads voltage by 90°",
          "Current lags voltage by 90°",
          "Current and voltage are in phase",
          "Current is 180° out of phase with voltage"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In an inductor the current lags the voltage by 90° (ELI). (a) is the capacitor's behaviour. (c) is the resistor's behaviour. (d) is wrong: the shift is 90°, not 180°."
      },
      {
        "module": 4,
        "q": "An inductor draws 3 A from a 120 V AC supply. What is its reactance?",
        "choices": [
          "360 Ω",
          "40 Ω",
          "0.025 Ω",
          "123 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). XL = V ÷ I = 120 ÷ 3 = 40 Ω. (a) 360 Ω multiplies V × I. (c) 0.025 Ω is I ÷ V — upside down. (d) 123 Ω adds the numbers."
      },
      {
        "module": 4,
        "q": "The frequency feeding an inductor halves from 120 Hz to 60 Hz. What happens to its reactance?",
        "choices": [
          "It doubles",
          "It halves",
          "It stays the same",
          "It becomes infinite"
        ],
        "answer": 1,
        "explanation": "Correct: (b). XL = 2πfL, so halving f halves XL. (a) is wrong: XL falls with frequency. (c) is wrong: XL depends on frequency. (d) is wrong: XL falls, not rises."
      },
      {
        "module": 5,
        "q": "A series RLC circuit has R = 20 Ω, XL = 30 Ω, XC = 10 Ω, and a 120 V supply. What is the impedance?",
        "choices": [
          "60 Ω",
          "28.3 Ω",
          "40 Ω",
          "20 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). X = 30 − 10 = 20 Ω; Z = √(20² + 20²) ≈ 28.3 Ω. (a) 60 Ω adds all three numbers. (c) 40 Ω is R + X. (d) 20 Ω is R alone."
      },
      {
        "module": 5,
        "q": "In that same circuit (R = 20 Ω, XL = 30 Ω, XC = 10 Ω, 120 V), what is the current and the phase angle?",
        "choices": [
          "6 A, 45° lagging",
          "4.24 A, 45° lagging",
          "2 A, 90° lagging",
          "4.24 A, 45° leading"
        ],
        "answer": 1,
        "explanation": "Correct: (b). I = 120 ÷ 28.3 ≈ 4.24 A; φ = tan⁻¹(20 ÷ 20) = 45°, and X is positive so the current lags. (a) 6 A is 120 ÷ 20 — using R only. (c) is wrong on both numbers. (d) is wrong: a positive net reactance means lagging, not leading."
      },
      {
        "module": 5,
        "q": "A series circuit has L = 0.2 H and C = 50 µF. What is its resonant frequency?",
        "choices": [
          "60 Hz",
          "50.3 Hz",
          "100 Hz",
          "31.6 Hz"
        ],
        "answer": 1,
        "explanation": "Correct: (b). f₀ = 1 ÷ (2π√(0.2 × 0.00005)) ≈ 50.3 Hz. (a) 60 Hz is the mains frequency. (c) 100 Hz is double. (d) 31.6 is a reactance value, not a frequency."
      },
      {
        "module": 5,
        "q": "In a series RLC circuit the resistor voltage is 30 V, the inductor voltage is 40 V, and the capacitor voltage is 10 V. What is the supply voltage?",
        "choices": [
          "80 V",
          "42.4 V",
          "30 V",
          "70 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Net reactance voltage = 40 − 10 = 30 V; supply = √(30² + 30²) ≈ 42.4 V. (a) 80 V adds all three. (c) 30 V is one voltage alone. (d) 70 V adds resistor and inductor voltages only."
      },
      {
        "module": 6,
        "q": "A load draws 15 A at 240 V with a power factor of 0.9. What is the real power?",
        "choices": [
          "3,600 W",
          "3,240 W",
          "4,000 W",
          "267 W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). S = 240 × 15 = 3,600 VA; P = 3,600 × 0.9 = 3,240 W. (a) 3,600 W forgets the power factor. (c) 4,000 W divides by pf. (d) 267 W is 240 ÷ 0.9 — the wrong operation."
      },
      {
        "module": 6,
        "q": "A load has an apparent power of 5 kVA and a real power of 4 kW. What is its power factor and its reactive power?",
        "choices": [
          "pf = 0.8, Q = 3 kVAr",
          "pf = 1.25, Q = 1 kVAr",
          "pf = 0.8, Q = 9 kVAr",
          "pf = 0.6, Q = 3 kVAr"
        ],
        "answer": 0,
        "explanation": "Correct: (a). pf = 4 ÷ 5 = 0.8; Q = √(25 − 16) = 3 kVAr. (b) is wrong: pf = 1.25 is impossible (S ÷ P, upside down). (c) is wrong: Q = 9 kVAr adds the numbers. (d) is wrong: 0.6 is Q ÷ S, not P ÷ S."
      },
      {
        "module": 6,
        "q": "A 4 kW load has a power factor of 0.8 (Q = 3 kVAr). How much capacitive reactive power is needed to correct it to pf = 0.95?",
        "choices": [
          "3 kVAr",
          "1.69 kVAr",
          "1.31 kVAr",
          "4 kVAr"
        ],
        "answer": 1,
        "explanation": "Correct: (b). New Q = 4 × tan(cos⁻¹ 0.95) ≈ 1.31 kVAr, so the capacitor must supply 3 − 1.31 ≈ 1.69 kVAr. (a) 3 kVAr would correct to pf = 1.0. (c) 1.31 kVAr is the new Q, not the capacitor size. (d) 4 kVAr is the real power."
      },
      {
        "module": 6,
        "q": "What is the unit of reactive power?",
        "choices": [
          "Watts (W)",
          "Volt-amps (VA)",
          "Volt-amps reactive (VAr)",
          "Joules (J)"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Reactive power is measured in volt-amps reactive (VAr). (a) is the unit of real power. (b) is the unit of apparent power. (d) is the unit of energy."
      },
      {
        "module": 6,
        "q": "A factory's power factor is 0.75. Which of these is a real cost of the poor power factor?",
        "choices": [
          "The motors run faster",
          "Extra current causes I²R losses, wastes capacity, and triggers utility penalties",
          "The voltage rises",
          "The power factor becomes leading"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Extra current means extra losses, less usable capacity, and penalty charges. (a) is wrong: speed is set by frequency and poles. (c) is wrong: poor pf does not raise voltage. (d) is wrong: poor pf is usually lagging, not leading."
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
        "q": "An AC voltage has a peak of 325 V. What is its RMS value?",
        "choices": [
          "325 V",
          "230 V",
          "460 V",
          "162 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). RMS = 325 ÷ √2 ≈ 230 V. (a) 325 V is the peak. (c) 460 V multiplies by √2. (d) 162 V is half the peak."
      },
      {
        "module": 1,
        "q": "What is the period of a 60 Hz AC waveform?",
        "choices": [
          "60 ms",
          "16.67 ms",
          "6 ms",
          "1.67 ms"
        ],
        "answer": 1,
        "explanation": "Correct: (b). T = 1 ÷ 60 ≈ 0.01667 s = 16.67 ms. (a) 60 ms is the frequency number with the wrong unit. (c) 6 ms is 1 ÷ 166 — the wrong frequency. (d) 1.67 ms is a factor of ten too small."
      },
      {
        "module": 1,
        "q": "Why are AC voltages and currents normally stated as RMS values rather than peak values?",
        "choices": [
          "Because RMS values are bigger",
          "Because the RMS value gives the same heating effect as an equal DC value, so it predicts real power",
          "Because peak values cannot be measured",
          "Because RMS is the average of the waveform"
        ],
        "answer": 1,
        "explanation": "Correct: (b). RMS is defined by heating effect, so P = V(rms) × I(rms) × pf works like DC. (a) is wrong: RMS is smaller than peak. (c) is wrong: peak values are easily measured. (d) is wrong: the average of a sine wave over a full cycle is zero; RMS is a root-mean-square, not an average."
      },
      {
        "module": 2,
        "q": "A 100 V AC supply feeds a 50 Ω resistor. What current flows, and what is the phase relationship?",
        "choices": [
          "2 A, in phase",
          "2 A, current lags 90°",
          "5,000 A, in phase",
          "0.5 A, current leads 90°"
        ],
        "answer": 0,
        "explanation": "Correct: (a). I = 100 ÷ 50 = 2 A, and in a resistor voltage and current are in phase. (b) is wrong: a 90° lag is an inductor. (c) 5,000 A multiplies V × R. (d) is wrong: 0.5 A is R ÷ V, and a 90° lead is a capacitor."
      },
      {
        "module": 2,
        "q": "In a series RL circuit the resistor voltage is 40 V and the inductor voltage is 30 V. What is the supply voltage?",
        "choices": [
          "70 V",
          "10 V",
          "50 V",
          "40 V"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Voltages add as phasors: √(40² + 30²) = √2,500 = 50 V. (a) 70 V adds them directly. (b) 10 V subtracts them. (d) 40 V is one voltage alone."
      },
      {
        "module": 2,
        "q": "A circuit's current phasor sits 45° behind its voltage phasor. What kind of circuit is it?",
        "choices": [
          "Purely resistive",
          "Net inductive",
          "Net capacitive",
          "At resonance"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Current behind voltage means lagging, which is net inductive. (a) would have the phasors aligned. (c) would have current ahead of voltage. (d) would have the phasors aligned (φ = 0°)."
      },
      {
        "module": 3,
        "q": "What is the capacitive reactance of a 200 µF capacitor at 60 Hz?",
        "choices": [
          "13.3 Ω",
          "26.5 Ω",
          "1.33 Ω",
          "133 Ω"
        ],
        "answer": 0,
        "explanation": "Correct: (a). XC = 1 ÷ (2π × 60 × 0.0002) ≈ 13.3 Ω. (b) 26.5 Ω is the value for a 100 µF capacitor. (c) 1.33 Ω is ten times too small. (d) 133 Ω is ten times too big."
      },
      {
        "module": 3,
        "q": "What does a capacitor do to DC?",
        "choices": [
          "It passes DC freely",
          "It blocks DC — once charged, no steady current flows",
          "It converts DC to AC",
          "It stores DC as heat"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A capacitor blocks DC: after the initial charging, no steady current flows. (a) is wrong: that describes a wire. (c) is wrong: a capacitor does not convert DC to AC. (d) is wrong: a capacitor stores energy in an electric field, not as heat."
      },
      {
        "module": 3,
        "q": "What is the capacitive reactance of a 10 µF capacitor at 100 Hz?",
        "choices": [
          "159 Ω",
          "15.9 Ω",
          "1,591 Ω",
          "63.7 Ω"
        ],
        "answer": 0,
        "explanation": "Correct: (a). XC = 1 ÷ (2π × 100 × 0.00001) ≈ 159 Ω. (b) 15.9 Ω is ten times too small. (c) 1,591 Ω is ten times too big. (d) 63.7 Ω is 1 ÷ (2π × 100 × 25 µF) — the wrong capacitance."
      },
      {
        "module": 4,
        "q": "What is the inductive reactance of a 200 mH inductor at 60 Hz?",
        "choices": [
          "37.7 Ω",
          "75.4 Ω",
          "7.54 Ω",
          "754 Ω"
        ],
        "answer": 1,
        "explanation": "Correct: (b). XL = 2π × 60 × 0.2 ≈ 75.4 Ω. (a) 37.7 Ω is the value for a 100 mH inductor. (c) 7.54 Ω is ten times too small. (d) 754 Ω is ten times too big."
      },
      {
        "module": 4,
        "q": "What does an ideal inductor look like to DC?",
        "choices": [
          "An open circuit",
          "A short circuit (XL = 0 at f = 0)",
          "A 60 Ω resistor",
          "A capacitor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). XL = 2πfL, so at f = 0, XL = 0 — an ideal inductor is a short to DC. (a) describes a capacitor at DC. (c) is wrong: there is no fixed resistance. (d) is wrong: an inductor is not a capacitor."
      },
      {
        "module": 4,
        "q": "How much energy is stored in a 0.5 H inductor carrying 4 A?",
        "choices": [
          "8 J",
          "4 J",
          "2 J",
          "16 J"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Energy = ½ × L × I² = 0.5 × 0.5 × 16 = 4 J. (a) 8 J forgets the ½. (c) 2 J is half the answer. (d) 16 J is I² alone."
      },
      {
        "module": 5,
        "q": "A series circuit has R = 60 Ω, XL = 80 Ω, and a 200 V supply (no capacitor). What is the impedance, the current, and the phase angle?",
        "choices": [
          "Z = 100 Ω, I = 2 A, φ = 53.1° lagging",
          "Z = 140 Ω, I = 1.43 A, φ = 53.1° lagging",
          "Z = 100 Ω, I = 2 A, φ = 53.1° leading",
          "Z = 60 Ω, I = 3.33 A, φ = 0°"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Z = √(60² + 80²) = 100 Ω; I = 200 ÷ 100 = 2 A; φ = tan⁻¹(80 ÷ 60) ≈ 53.1°, lagging because the circuit is inductive. (b) uses Z = 140 Ω (adding R and XL). (c) is right on Z and I but wrong on direction — inductive means lagging. (d) ignores the reactance entirely."
      },
      {
        "module": 5,
        "q": "A series circuit has L = 0.1 H and C = 50 µF. What is its resonant frequency?",
        "choices": [
          "50.3 Hz",
          "71.2 Hz",
          "60 Hz",
          "100 Hz"
        ],
        "answer": 1,
        "explanation": "Correct: (b). f₀ = 1 ÷ (2π√(0.1 × 0.00005)) ≈ 71.2 Hz. (a) 50.3 Hz is the resonant frequency for L = 0.1 H, C = 100 µF. (c) 60 Hz is the mains frequency. (d) 100 Hz is wrong."
      },
      {
        "module": 5,
        "q": "At resonance in a series RLC circuit, what is the phase angle between voltage and current?",
        "choices": [
          "90° lagging",
          "90° leading",
          "0°",
          "45° lagging"
        ],
        "answer": 2,
        "explanation": "Correct: (c). At resonance XL = XC, so X = 0 and the voltage and current are in phase (φ = 0°). (a) is the angle for a pure inductor. (b) is the angle for a pure capacitor. (d) is the angle for a circuit with X = R."
      },
      {
        "module": 6,
        "q": "A load has a real power of 6 kW and an apparent power of 7.5 kVA. What is its power factor and its reactive power?",
        "choices": [
          "pf = 0.8, Q = 4.5 kVAr",
          "pf = 1.25, Q = 1.5 kVAr",
          "pf = 0.8, Q = 13.5 kVAr",
          "pf = 0.6, Q = 4.5 kVAr"
        ],
        "answer": 0,
        "explanation": "Correct: (a). pf = 6 ÷ 7.5 = 0.8; Q = √(7.5² − 6²) = √20.25 = 4.5 kVAr. (b) is wrong: pf = 1.25 is impossible. (c) is wrong: Q = 13.5 kVAr adds the numbers. (d) is wrong: 0.6 is Q ÷ S, not P ÷ S."
      },
      {
        "module": 6,
        "q": "A load has a real power of 5 kW and a power factor of 0.5. What is its apparent power and its reactive power?",
        "choices": [
          "S = 10 kVA, Q = 8.66 kVAr",
          "S = 2.5 kVA, Q = 8.66 kVAr",
          "S = 10 kVA, Q = 5 kVAr",
          "S = 5 kVA, Q = 0 kVAr"
        ],
        "answer": 0,
        "explanation": "Correct: (a). S = P ÷ pf = 5 ÷ 0.5 = 10 kVA; Q = √(100 − 25) = √75 ≈ 8.66 kVAr. (b) is wrong: S = 2.5 kVA multiplies P × pf — the wrong direction. (c) is wrong: Q = 5 kVAr is S − P, not the triangle. (d) is wrong: pf = 0.5 means there is reactive power."
      },
      {
        "module": 6,
        "q": "What is the purpose of a capacitor bank in a factory?",
        "choices": [
          "To store energy for a power cut",
          "To cancel inductive reactive power and raise the power factor",
          "To increase the real power used",
          "To step the voltage down"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Capacitors supply reactive power of the opposite sign to the motors' inductive reactive power, raising the power factor. (a) is wrong: a capacitor bank does not provide backup power. (c) is wrong: it does not change the real power. (d) is a transformer's job."
      },
      {
        "module": 7,
        "q": "A transformer has 1,000 primary turns and 250 secondary turns, with a 240 V primary. What is the secondary voltage?",
        "choices": [
          "960 V",
          "60 V",
          "240 V",
          "120 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). V₂ = 240 × (250 ÷ 1,000) = 60 V. (a) 960 V uses the ratio upside down. (c) 240 V is the primary. (d) 120 V is half the primary."
      },
      {
        "module": 7,
        "q": "A 10 kVA transformer has a 480 V primary. What is the maximum primary current?",
        "choices": [
          "10 A",
          "20.8 A",
          "48 A",
          "4.8 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). I = 10,000 ÷ 480 ≈ 20.8 A. (a) 10 A is the kVA number, not a current. (c) 48 A is 10,000 ÷ 208 — the wrong voltage. (d) 4.8 A is 480 ÷ 100 — the wrong operation."
      },
      {
        "module": 7,
        "q": "A transformer steps 120 V up to 480 V. If the primary has 100 turns, how many turns does the secondary have?",
        "choices": [
          "25 turns",
          "100 turns",
          "400 turns",
          "480 turns"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The voltage ratio is 480 ÷ 120 = 4, so N₂ = 100 × 4 = 400 turns. (a) 25 turns would step the voltage down. (b) 100 turns would give 120 V out. (d) 480 turns confuses volts with turns."
      },
      {
        "module": 7,
        "q": "Why can a transformer not work on DC?",
        "choices": [
          "Because DC has no voltage",
          "Because the magnetic field must keep changing to induce voltage in the secondary, and DC gives a steady field",
          "Because the core melts on DC",
          "Because DC has the wrong frequency"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Induction needs a changing field; DC produces a steady field after the first instant, so no voltage is induced. (a) is wrong: DC has voltage. (c) is wrong: the core does not melt — the winding can overheat because DC sees only the wire resistance. (d) is wrong: DC has no frequency at all, which is the point, but the reason is the steady field."
      },
      {
        "module": 8,
        "q": "A 240 V dryer circuit carries 25 A at a power factor of 0.8. What real power does it draw?",
        "choices": [
          "6,000 W",
          "4,800 W",
          "7,500 W",
          "300 W"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = 240 × 25 × 0.8 = 4,800 W. (a) 6,000 W forgets the power factor. (c) 7,500 W divides by pf. (d) 300 W is 240 ÷ 0.8 — the wrong operation."
      },
      {
        "module": 8,
        "q": "What is the maximum continuous current on a 15 A branch circuit?",
        "choices": [
          "15 A",
          "12 A",
          "20 A",
          "7.5 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The 80% rule: 15 × 0.8 = 12 A. (a) 15 A is the rating, not the continuous limit. (c) 20 A exceeds the rating. (d) 7.5 A is half the rating."
      },
      {
        "module": 8,
        "q": "At about what leakage current does a GFCI trip?",
        "choices": [
          "15 A",
          "20 A",
          "5 mA",
          "1 A"
        ],
        "answer": 2,
        "explanation": "Correct: (c). A GFCI trips at about 5 mA of difference between hot and neutral — the amount that might be flowing through a person. (a) and (b) are breaker ratings, far too big to protect a person. (d) 1 A is 200 times too big — lethal."
      },
      {
        "module": 8,
        "q": "What is the ground wire's job in a home circuit?",
        "choices": [
          "To carry the normal load current back to the panel",
          "To provide a low-resistance fault path so a fault trips the breaker instead of leaving a metal case live",
          "To step the voltage down",
          "To carry current to the load"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ground carries no current normally; on a fault it gives the current a path back that trips the breaker. (a) is the neutral's job. (c) is a transformer's job. (d) is the hot wire's job."
      },
      {
        "module": 9,
        "q": "A star-connected system has a phase voltage of 277 V. What is the line voltage?",
        "choices": [
          "277 V",
          "480 V",
          "160 V",
          "208 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). VL = √3 × 277 ≈ 480 V — the 277/480 V system. (a) 277 V is the phase voltage. (c) 160 V is 277 ÷ √3 — the wrong direction. (d) 208 V is the line voltage of a 120 V star system."
      },
      {
        "module": 9,
        "q": "A three-phase load draws 15 A per line at 208 V with a power factor of 0.9. What real power does it draw?",
        "choices": [
          "2.81 kW",
          "4.86 kW",
          "3.12 kW",
          "8.42 kW"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P = √3 × 208 × 15 × 0.9 ≈ 4,864 W ≈ 4.86 kW. (a) 2.81 kW forgets the √3. (c) 3.12 kW is 208 × 15 without √3 or pf. (d) 8.42 kW multiplies by 3 instead of √3."
      },
      {
        "module": 9,
        "q": "A delta-connected load has a phase current of 12 A. What is the line current?",
        "choices": [
          "12 A",
          "20.8 A",
          "6.9 A",
          "36 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In delta, IL = √3 × Iφ = 1.732 × 12 ≈ 20.8 A. (a) 12 A is the phase current. (c) 6.9 A is 12 ÷ √3 — the wrong direction. (d) 36 A multiplies by 3 instead of √3."
      },
      {
        "module": 9,
        "q": "A three-phase motor is running backwards after a panel repair. What is the most likely cause and the fix?",
        "choices": [
          "The voltage is too low — raise it",
          "Two supply leads were swapped — swap any two leads back",
          "The neutral is loose — tighten it",
          "The motor is single-phasing — replace the motor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Swapping two leads reverses the phase sequence and the rotating field, so swapping any two back restores the direction. (a) is wrong: low voltage does not reverse a motor. (c) is wrong: a loose neutral does not reverse direction. (d) is wrong: single-phasing causes overheating, not reversal."
      },
      {
        "module": 10,
        "q": "A 48 V DC motor has an armature resistance of 4 Ω and a back EMF of 40 V. What current does it draw?",
        "choices": [
          "12 A",
          "2 A",
          "22 A",
          "0.5 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). I = (48 − 40) ÷ 4 = 2 A. (a) 12 A is the starting current (48 ÷ 4), when E = 0. (c) 22 A adds the numbers. (d) 0.5 A is 4 ÷ 8 — the wrong division."
      },
      {
        "module": 10,
        "q": "What is the starting current of that same 48 V motor (R = 4 Ω)?",
        "choices": [
          "2 A",
          "12 A",
          "48 A",
          "0 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). At standstill E = 0, so I = V ÷ R = 48 ÷ 4 = 12 A. (a) 2 A is the running current. (c) 48 A is the voltage. (d) 0 A is wrong: the motor draws its maximum at standstill."
      },
      {
        "module": 10,
        "q": "Which type of DC motor is best for a crane that needs huge starting torque?",
        "choices": [
          "Shunt motor",
          "Series motor",
          "Compound motor with no load",
          "A motor with a start capacitor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A series motor's field and armature carry the same current, giving very high starting torque. (a) is wrong: a shunt motor's torque is modest. (c) is wrong: a series motor must never run unloaded, and a compound motor's torque is lower than a series motor's. (d) is wrong: start capacitors are for single-phase AC motors."
      },
      {
        "module": 10,
        "q": "A student says the commutator in a DC motor is just an on/off switch. What is wrong with that description?",
        "choices": [
          "Nothing — that is what it does",
          "It does not switch the motor on or off; it reverses the armature current every half-turn so the torque always acts in the same direction",
          "It switches the field winding, not the armature",
          "It limits the starting current"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The split-ring commutator flips the armature current so the push never reverses. (a) is wrong: the commutator's job is reversing current, not switching power. (c) is wrong: it reverses the armature current, not the field. (d) is wrong: limiting starting current is a starter's job."
      },
      {
        "module": 11,
        "q": "What is the synchronous speed of a 6-pole induction motor on a 50 Hz supply?",
        "choices": [
          "3,000 rpm",
          "1,500 rpm",
          "1,000 rpm",
          "750 rpm"
        ],
        "answer": 2,
        "explanation": "Correct: (c). ns = 120 × 50 ÷ 6 = 1,000 rpm. (a) 3,000 rpm is 2-pole at 50 Hz. (b) 1,500 rpm is 4-pole at 50 Hz. (d) 750 rpm is 8-pole at 50 Hz."
      },
      {
        "module": 11,
        "q": "A 4-pole, 50 Hz induction motor's rotor turns at 1,450 rpm. What is the slip?",
        "choices": [
          "50%",
          "3.33%",
          "6.67%",
          "0%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ns = 1,500 rpm; slip = (1,500 − 1,450) ÷ 1,500 × 100% ≈ 3.33%. (a) 50% is the rpm difference, not a percentage. (c) 6.67% doubles it. (d) 0% would mean the rotor caught the field — impossible."
      },
      {
        "module": 11,
        "q": "A generator coil produces a peak EMF of 200 V. What is the RMS voltage?",
        "choices": [
          "200 V",
          "141 V",
          "283 V",
          "100 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Vrms = 200 ÷ √2 ≈ 141 V. (a) 200 V is the peak. (c) 283 V multiplies by √2. (d) 100 V is half the peak."
      },
      {
        "module": 12,
        "q": "A motor's full-load current is 8 A. About how much current does it draw at starting?",
        "choices": [
          "8 A",
          "48 A",
          "1.3 A",
          "80 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Starting current is typically 5–7 times full-load, so about 6 × 8 = 48 A. (a) 8 A is the running current. (c) 1.3 A is far too low. (d) 80 A is 10 times — too high."
      },
      {
        "module": 12,
        "q": "Which device protects a motor from a slow overheat caused by a sustained moderate overcurrent?",
        "choices": [
          "The circuit breaker",
          "The overload relay",
          "The GFCI",
          "The contactor"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The overload relay trips the contactor when the motor draws too much current for too long. (a) is wrong: the breaker protects the wiring from short circuits. (c) is wrong: a GFCI protects people from ground faults. (d) is wrong: a contactor is a switch, not a protector."
      },
      {
        "module": 12,
        "q": "What does live-dead-live mean when testing a circuit for absence of voltage?",
        "choices": [
          "Test the circuit three times in a row",
          "Prove the meter on a known live source, test the circuit dead, then prove the meter again",
          "Turn the power on, off, and on again",
          "Test with the meter on AC, then on DC"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Live-dead-live proves the meter works before and after the test, so a dead reading is trustworthy. (a) is wrong: repeating a test with a broken meter proves nothing. (c) is wrong: you do not cycle the power. (d) is wrong: it is about proving the meter, not the meter's range."
      }
    ]
  }
};
