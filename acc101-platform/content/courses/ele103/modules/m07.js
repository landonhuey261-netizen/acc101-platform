// ele103 - Module 7: Power Factor & Correction
module.exports = {
  "number": 7,
  "slug": "power-factor-and-correction",
  "title": "Power Factor & Correction",
  "estTime": "3–4 hours",
  "objectives": [
    "Define power factor and explain why a low power factor costs money.",
    "Explain how utilities bill large customers for poor power factor.",
    "Calculate the capacitor size needed to correct a power factor.",
    "Describe where correction capacitors are installed: at the load, at the panel, or at the service.",
    "Explain the risks of over-correction and of resonance with correction capacitors."
  ],
  "sections": [
    {
      "heading": "What Power Factor Costs",
      "html": "<p><strong>Power factor</strong> is the ratio of true power to apparent power, cos θ, and it runs from 0 to 1. A power factor of 1 means all the current is doing useful work; a power factor of 0.7 means the source must supply about 43% more current than the true power alone would need. That extra current heats the wires, loads the transformers, and takes up capacity — and the utility must build its system for the apparent power, not the true power. For that reason, utilities charge large customers for poor power factor, either as a penalty on the bill or as a demand charge based on apparent power.</p>\n<p>A factory with a 0.7 power factor pays for the privilege of wasting capacity, and the fix is cheaper than the penalty. A motor running at a 0.7 power factor draws 10 amps to do the work of 7; correct it to 0.95 and the same motor draws about 7.4 amps. The wires run cooler, the transformer has room for more load, and the bill goes down. Power-factor correction is one of the few electrical improvements that pays for itself in months.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A low power factor means the utility must deliver more current than the work requires — and the customer pays for that extra current, in losses, in capacity, and often in penalties.</div>"
    },
    {
      "heading": "How Correction Works",
      "html": "<p>Power-factor correction adds capacitors to cancel the inductive reactive power. An inductive load has positive (lagging) VARs; a capacitor has negative (leading) VARs. Add the right amount of capacitive VARs and the net reactive power falls toward zero, the phase angle falls toward zero, and the power factor rises toward 1. The capacitor does not change the true power — the motor still does the same work — it changes the current the source must supply.</p>\n<p>The size of the capacitor is found from the power triangle. Worked example: a load draws 10 kW at a power factor of 0.7 lagging, and the target is 0.95. The starting angle is cos⁻¹(0.7) ≈ 45.6°, so the starting reactive power is Q₁ = P × tan θ₁ = 10,000 × tan 45.6° ≈ 10,200 VAR. The target angle is cos⁻¹(0.95) ≈ 18.2°, so the target reactive power is Q₂ = 10,000 × tan 18.2° ≈ 3,290 VAR. The capacitor must supply the difference: Q<sub>C</sub> = Q₁ − Q₂ ≈ 6,910 VAR, or about 6.9 kVAR. The capacitor's size in microfarads follows from its voltage and frequency, but the kVAR is the number the trade works with.</p>"
    },
    {
      "heading": "Where to Install Capacitors",
      "html": "<p>Correction capacitors can be installed at the load, at the panel, or at the service, and the choice is a trade-off. At the load — right at the motor — the capacitor corrects that motor's reactive power at its source, so the current is reduced all the way back to the service. This is the most effective placement and the most expensive, because each motor needs its own capacitor. At the panel, one capacitor bank corrects a group of loads, which is cheaper but leaves the branch circuits carrying the reactive current. At the service, one large bank corrects the whole building, which is cheapest but leaves the entire building's wiring carrying the reactive current.</p>\n<p>The usual practice is a mix: capacitors at the largest motors, where the correction is most effective, and a bank at the service for the rest. The capacitors are switched — connected when the load is running and disconnected when it is not — because a capacitor left connected to an unloaded circuit over-corrects it, pushing the power factor leading, which brings its own problems.</p>"
    },
    {
      "heading": "Over-Correction & Resonance Risks",
      "html": "<p><strong>Over-correction</strong> happens when too much capacitance is added: the power factor goes leading, the voltage rises, and the system can become unstable. A leading power factor is not better than a lagging one — the target is a power factor near 1, usually 0.95 lagging, not 1.0 and not leading. Automatic capacitor banks switch stages in and out to hold the power factor in the target range as the load changes.</p>\n<p><strong>Resonance</strong> is the other risk. A capacitor and the system's inductance can resonate at a harmonic frequency, and the circulating currents can overheat the capacitor and raise voltages. The risk is checked before a capacitor bank is installed, and harmonic filters — a reactor in series with the capacitor — are used where harmonics are present. The rule is to correct the power factor, but to check the harmonics first.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Power factor = cos θ = P ÷ S; a low power factor means extra current, extra losses, and often a utility penalty.</li>\n<li>Correction adds capacitive VARs to cancel inductive VARs; the true power does not change.</li>\n<li>Capacitor size: Q<sub>C</sub> = P × (tan θ₁ − tan θ₂), where θ₁ is the starting angle and θ₂ is the target angle.</li>\n<li>Install at the load (most effective), at the panel, or at the service (cheapest); switch capacitors with the load.</li>\n<li>Target about 0.95 lagging, not 1.0 and not leading; check for harmonic resonance before installing a bank.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Aiming for a power factor of exactly 1.0. The target is about 0.95 lagging — pushing to 1.0 risks over-correction, and a leading power factor brings its own problems.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Leaving a correction capacitor connected when its load is off. The capacitor over-corrects the unloaded circuit — switch capacitors with their loads.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain why low power factor costs money, calculate a correction capacitor in kVAR, and state the placement and over-correction rules, you have this module. Module 8 covers three-phase power.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Power factor",
      "def": "cos θ; the ratio of true power to apparent power, from 0 to 1."
    },
    {
      "term": "Power-factor correction",
      "def": "Adding capacitors to cancel inductive reactive power and raise the power factor."
    },
    {
      "term": "kVAR",
      "def": "Kilovolt-amperes reactive; the unit used to size correction capacitors."
    },
    {
      "term": "Lagging power factor",
      "def": "A power factor where current lags voltage; an inductive load."
    },
    {
      "term": "Leading power factor",
      "def": "A power factor where current leads voltage; a capacitive load, or an over-corrected circuit."
    },
    {
      "term": "Demand charge",
      "def": "A utility charge based on the maximum apparent power (or current) a customer draws."
    },
    {
      "term": "Penalty",
      "def": "A utility charge for a poor power factor, added to the bill."
    },
    {
      "term": "Correction capacitor",
      "def": "A capacitor installed to supply leading VARs and cancel inductive VARs."
    },
    {
      "term": "Capacitor bank",
      "def": "A group of correction capacitors installed together, often switched in stages."
    },
    {
      "term": "Over-correction",
      "def": "Adding too much capacitance, pushing the power factor leading and raising the voltage."
    },
    {
      "term": "Harmonic resonance",
      "def": "A capacitor and system inductance resonating at a harmonic frequency, causing overheating and overvoltage."
    },
    {
      "term": "Automatic capacitor bank",
      "def": "A bank that switches capacitor stages in and out to hold the power factor in range."
    },
    {
      "term": "tan θ",
      "def": "The ratio of reactive power to true power, Q ÷ P; used to size correction capacitors."
    },
    {
      "term": "Target power factor",
      "def": "The power factor aimed for after correction, usually about 0.95 lagging."
    },
    {
      "term": "Reactor",
      "def": "An inductor placed in series with a capacitor to block harmonic resonance."
    }
  ],
  "video": {
    "title": "Power Factor Explained - The basics what is power factor pf",
    "embedUrl": "https://www.youtube.com/embed/Tv_7XWf96gg",
    "note": "A power-factor explainer. As you watch, write down what power factor is, why low power factor costs money, and how capacitors fix it.",
    "more": [
      {
        "title": "#109 - Power Factor Correction Explained with a Simple Demo Circuit",
        "url": "https://www.youtube.com/watch?v=oyg6ESJpenE"
      },
      {
        "title": "ABB Power Factor Correction Capacitors: Individual & Banks - A GalcoTV Overview",
        "url": "https://www.youtube.com/watch?v=YA4WjrYaYz8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A load draws 10 kW at a power factor of 0.7 lagging. What is the apparent power?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: S = P ÷ power factor. Step 2: S = 10,000 ÷ 0.7 ≈ 14,286 VA. Step 3: The apparent power is about 14.3 kVA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same load is corrected to a power factor of 0.95. What is the new apparent power, and how much current is saved?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: S = 10,000 ÷ 0.95 ≈ 10,526 VA. Step 2: Apparent power falls from about 14,286 VA to about 10,526 VA. Step 3: The current falls by the same ratio — about 26% less current for the same work.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A load draws 10 kW at 0.7 power factor, and the target is 0.95. The starting angle is about 45.6° and the target angle is about 18.2°. How many kVAR of capacitance are needed?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Q_C = P × (tan θ₁ − tan θ₂). Step 2: tan 45.6° ≈ 1.02 and tan 18.2° ≈ 0.329. Step 3: Q_C = 10 × (1.02 − 0.329) ≈ 6.9 kVAR.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why is a power factor of 1.0 not the target for correction?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Pushing to 1.0 risks over-correction. Step 2: A leading power factor raises voltage and can make the system unstable. Step 3: The target is about 0.95 lagging — close to unity, but safely on the lagging side.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A capacitor is installed at a motor. Why is it switched with the motor instead of left connected all the time?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: When the motor is off, its inductive VARs are gone. Step 2: The capacitor would over-correct the unloaded circuit, pushing the power factor leading. Step 3: Switching the capacitor with the motor keeps the correction matched to the load.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> What is the resonance risk when a capacitor bank is added to a system with harmonics?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The capacitor and the system's inductance can resonate at a harmonic frequency. Step 2: The circulating currents overheat the capacitor and the voltages can rise. Step 3: Check for resonance before installing, and use harmonic filters (a reactor in series) where harmonics are present.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Power factor is:",
      "choices": [
        "P ÷ S, or cos θ",
        "S ÷ P",
        "Q ÷ P",
        "E ÷ I"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Power factor is true power over apparent power, cos θ. (b) S ÷ P is the reciprocal. (c) Q ÷ P is tan θ. (d) E ÷ I is impedance."
    },
    {
      "q": "A load with a 0.7 power factor, compared with the same load at 1.0, draws:",
      "choices": [
        "Less current",
        "About 43% more current for the same true power",
        "The same current",
        "No current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At 0.7, the apparent power is P ÷ 0.7 ≈ 1.43 × P, so the current is about 43% higher. (a) A low power factor means more current. (c) The current is higher at a low power factor. (d) Current flows at any power factor."
    },
    {
      "q": "Power-factor correction adds:",
      "choices": [
        "More inductive load",
        "Capacitors to cancel inductive reactive power",
        "More resistance",
        "A bigger transformer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Capacitors supply leading VARs that cancel lagging VARs. (a) More inductance makes the power factor worse. (c) Resistance does not correct power factor. (d) A bigger transformer does not fix the power factor."
    },
    {
      "q": "Correction capacitors change:",
      "choices": [
        "The true power",
        "The current the source must supply, not the true power",
        "The voltage of the load",
        "The frequency"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The motor does the same work; the source supplies less current. (a) True power is unchanged. (c) The load voltage is essentially unchanged. (d) Frequency is set by the grid."
    },
    {
      "q": "The usual target power factor after correction is about:",
      "choices": [
        "0.5 lagging",
        "0.7 lagging",
        "0.95 lagging",
        "1.0 leading"
      ],
      "answer": 2,
      "explanation": "Correct: (c). About 0.95 lagging is the target — close to unity but safely lagging. (a) 0.5 is a very poor power factor. (b) 0.7 is the starting point, not the target. (d) 1.0 leading is over-corrected."
    },
    {
      "q": "Over-correction means:",
      "choices": [
        "Too little capacitance",
        "Too much capacitance, pushing the power factor leading",
        "No capacitance at all",
        "The right amount of capacitance"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Too much capacitance pushes the power factor leading and raises voltage. (a) Too little capacitance under-corrects. (c) No capacitance means no correction. (d) The right amount hits the target."
    },
    {
      "q": "The most effective place to install a correction capacitor is:",
      "choices": [
        "At the load, right at the motor",
        "At the utility pole",
        "In the meter",
        "On the roof"
      ],
      "answer": 0,
      "explanation": "Correct: (a). At the load, the correction reduces current all the way back to the service. (b) The utility pole is outside the building. (c) The meter does not correct power factor. (d) The roof is not an electrical location."
    },
    {
      "q": "A capacitor bank should be checked for resonance before installation because:",
      "choices": [
        "Capacitors are expensive",
        "The capacitor and system inductance can resonate at a harmonic frequency, overheating the capacitor",
        "Resonance improves power factor",
        "The NEC forbids capacitors"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Harmonic resonance causes overheating and overvoltage. (a) Cost is not the reason for the check. (c) Resonance does not improve power factor. (d) The NEC does not forbid capacitors."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Power Factor & Correction: Quick Reference</h3>\n<p><strong>Core idea:</strong> A low power factor means the utility must deliver more current than the work requires — and the customer pays for it.</p>\n<p><strong>Power factor:</strong> cos θ = P ÷ S · 1 is perfect · 0.7 means about 43% extra current.</p>\n<p><strong>Correction:</strong> Capacitors supply leading VARs to cancel lagging VARs · True power does not change · Q_C = P × (tan θ₁ − tan θ₂).</p>\n<p><strong>Placement:</strong> At the load (most effective) · At the panel · At the service (cheapest) · Switch capacitors with their loads.</p>\n<p><strong>Targets & risks:</strong> Aim for about 0.95 lagging, not 1.0 and not leading · Check for harmonic resonance before installing a bank.</p>\n<p><strong>Self-check:</strong> Find S for 10 kW at 0.7 pf, find the kVAR to reach 0.95, and state the target rule, without looking.</p>\n"
};
