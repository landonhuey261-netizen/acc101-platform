// egr105 - Module 7: Transformers
module.exports = {
  "number": 7,
  "slug": "transformers",
  "title": "Transformers",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a transformer uses a changing magnetic field to transfer energy between two coils.",
    "Use the turns ratio to find secondary voltage and current.",
    "Work out transformer power and current from the kVA rating.",
    "Tell step-up, step-down, and isolation transformers apart.",
    "Name the main transformer losses and the safety rules for working near one."
  ],
  "sections": [
    {
      "heading": "How a Transformer Works",
      "html": "<p>A transformer is two coils of wire — a primary and a secondary — wrapped around a shared iron core, with no electrical connection between them. AC in the primary creates a changing magnetic field in the core; that changing field induces a voltage in the secondary. Energy crosses from one coil to the other entirely through the magnetic field. Because the field must keep changing, a transformer only works on AC — connect one to DC and you get a brief blip, then nothing (and possibly a burned-out coil).</p>\n<p>Transformers are the reason the grid works: they step voltage up to hundreds of thousands of volts for transmission (so the current, and therefore the I²R losses, stay low) and step it back down to 120/240 V for your home. Inside a building they step 480 V down to 120 V for outlets, and inside equipment they step voltage down for control circuits and electronics.</p>\n"
    },
    {
      "heading": "The Turns Ratio",
      "html": "<p>Voltage follows the turns ratio: <strong>V₂ ÷ V₁ = N₂ ÷ N₁</strong>. More turns on the secondary means more voltage (step-up); fewer turns means less (step-down). Example: a 480 V primary with 800 turns and a 200-turn secondary gives V₂ = 480 × (200 ÷ 800) = 120 V. A step-down transformer, 4:1.</p>\n<p>Current follows the inverse ratio, because (ideally) power in equals power out: <strong>I₂ ÷ I₁ = N₁ ÷ N₂</strong>. If the 120 V secondary feeds a 2 kVA load, the secondary current is I₂ = 2,000 ÷ 120 ≈ 16.67 A, and the primary current is I₁ = 2,000 ÷ 480 ≈ 4.17 A. Check with the turns ratio: 16.67 × (200 ÷ 800) ≈ 4.17 A ✓. High voltage, low current on one side; low voltage, high current on the other — power is conserved.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> V₂ ÷ V₁ = N₂ ÷ N₁ (voltage follows turns). I₂ ÷ I₁ = N₁ ÷ N₂ (current is the inverse). Power in ≈ power out: V₁ × I₁ ≈ V₂ × I₂.</div></p>\n"
    },
    {
      "heading": "Ratings, Losses, and Efficiency",
      "html": "<p>Transformers are rated in kVA (apparent power), not kW, because the manufacturer does not know the load's power factor — the rating is the current the windings can carry times the voltage. A 2 kVA transformer can deliver 2,000 VA: at 120 V that is 16.67 A, and no more, whatever the load.</p>\n<p>No transformer is perfect. Copper losses are I²R heating in the windings; core losses are hysteresis and eddy currents in the iron, which happen whenever the transformer is energised, even with no load. Large power transformers are typically 98–99% efficient; small ones are less. Core losses are also why a transformer hums and why an energised transformer is warm even when nothing is plugged into it.</p>\n"
    },
    {
      "heading": "Types and Safety",
      "html": "<p>Step-up transformers raise voltage; step-down transformers lower it; an isolation transformer has a 1:1 ratio and is used to separate a circuit from the supply for safety — there is no direct path back to the supply earth, so a single fault to earth does not complete a shock circuit. Autotransformers use a single tapped winding (cheaper and smaller, but no isolation). Instrument transformers (current transformers, CTs, and potential transformers, PTs) step high currents and voltages down so meters can measure them safely.</p>\n<p>Safety rules: never open-circuit a current transformer's secondary while it is energised — the unloaded CT tries to drive its full voltage across an open circuit and can produce a lethal voltage spike. Treat every transformer terminal as live until proven dead with a meter, lock it out and tag it before opening the enclosure, and remember that the high-voltage side of a step-down transformer is still high voltage. The lab for this course works the transformer numbers on paper; you never need to open a live transformer to learn them.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A transformer transfers energy through a changing magnetic field; it works on AC only.</li><li>V₂ ÷ V₁ = N₂ ÷ N₁; I₂ ÷ I₁ = N₁ ÷ N₂; power in ≈ power out.</li><li>Transformers are rated in kVA; the rating is the current limit at the rated voltage.</li><li>Losses: copper (I²R in windings) and core (hysteresis and eddy currents).</li><li>Never open-circuit an energised current transformer; lock out and tag out before opening a transformer enclosure.</li></ul></p>\n<p><strong>Common mistake:</strong> Using the turns ratio the wrong way for current. Voltage follows the turns ratio; current is the inverse. If the secondary has fewer turns, its voltage is lower but its current is higher.</p>\n<p><strong>Common mistake:</strong> Saying a transformer “creates” power. It does not — it changes voltage and current while keeping power (almost) the same. Step-up voltage means step-down current.</p>\n<p><strong>Ready check:</strong> If you can step 480 V down to 120 V with a 4:1 turns ratio and find both currents for a 2 kVA load (16.67 A and 4.17 A), you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Transformer",
      "def": "Two coils on a shared iron core that transfer energy through a changing magnetic field."
    },
    {
      "term": "Primary winding",
      "def": "The coil connected to the supply."
    },
    {
      "term": "Secondary winding",
      "def": "The coil connected to the load."
    },
    {
      "term": "Turns ratio",
      "def": "N₂ ÷ N₁: the ratio of secondary turns to primary turns, which sets the voltage ratio."
    },
    {
      "term": "Step-up transformer",
      "def": "A transformer with more secondary turns, raising the voltage."
    },
    {
      "term": "Step-down transformer",
      "def": "A transformer with fewer secondary turns, lowering the voltage."
    },
    {
      "term": "Isolation transformer",
      "def": "A 1:1 transformer that separates a circuit from the supply for safety."
    },
    {
      "term": "kVA rating",
      "def": "A transformer's apparent-power rating, which sets the maximum current at the rated voltage."
    },
    {
      "term": "Copper losses",
      "def": "I²R heating in the transformer windings."
    },
    {
      "term": "Core losses",
      "def": "Hysteresis and eddy-current losses in the iron core, present whenever the transformer is energised."
    },
    {
      "term": "Current transformer (CT)",
      "def": "A transformer that steps a high current down for metering; its secondary must never be open-circuited while energised."
    },
    {
      "term": "Autotransformer",
      "def": "A transformer using one tapped winding; cheaper, but with no isolation between primary and secondary."
    }
  ],
  "video": {
    "title": "How does a Transformer work - Working Principle electrical engineering | The Engineering Mindset",
    "embedUrl": "https://www.youtube.com/embed/UchitHGF4n8",
    "note": "Transformers from first principles: the core, the two coils, and why the turns ratio sets the voltage.",
    "more": [
      {
        "title": "What is a Transformer? An Electrical Transformer Tutorial | ElectroBOOM",
        "url": "https://www.youtube.com/watch?v=GMePE7NZcxw"
      },
      {
        "title": "TRANSFORMERS - What They Are, How They Work, How Electricians Size Them | Sparky Channel",
        "url": "https://www.youtube.com/watch?v=tXPy4OE7ApE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A transformer has 800 primary turns and 200 secondary turns, with a 480 V primary. What is the secondary voltage, and is it step-up or step-down?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V₂ = V₁ × (N₂ ÷ N₁) = 480 × (200 ÷ 800) = 480 × 0.25 = 120 V. Step 2: The secondary has fewer turns and a lower voltage, so it is a step-down transformer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The transformer in Problem 1 feeds a 2 kVA load. Find the secondary current and the primary current.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Secondary current: I₂ = 2,000 ÷ 120 ≈ 16.67 A. Step 2: Primary current: I₁ = 2,000 ÷ 480 ≈ 4.17 A. Step 3: Check with the turns ratio: 16.67 × (200 ÷ 800) ≈ 4.17 A ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A transformer steps 120 V up to 480 V. If the primary has 100 turns, how many turns does the secondary have?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The voltage ratio is 480 ÷ 120 = 4, so the turns ratio is 4. Step 2: N₂ = 100 × 4 = 400 turns.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 5 kVA transformer has a 240 V secondary. What is the maximum secondary current? What load in kW could it supply at pf = 0.9?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Maximum current: I = 5,000 ÷ 240 ≈ 20.83 A. Step 2: Real power at pf = 0.9: P = S × pf = 5 × 0.9 = 4.5 kW.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Why is a transformer rated in kVA rather than kW?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The kVA rating is set by the current the windings can carry times the voltage. Step 2: The manufacturer does not know the load's power factor, so it cannot state a kW rating — the same 5 kVA transformer delivers 5 kW at pf = 1 but only 4 kW at pf = 0.8. Step 3: kVA is the honest rating because it describes what the transformer itself can handle.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A technician wants to measure the current in a high-current busbar and considers opening the secondary of the current transformer to move the meter. Explain why that is dangerous and what to do instead.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A current transformer's secondary must never be open-circuited while energised — with no load, the CT tries to drive its full voltage across the open terminals and can produce a lethal voltage spike. Step 2: Instead, de-energise and lock out the circuit first, or short the CT secondary with a proper shorting link before disconnecting the meter. Step 3: Never work on it live.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A transformer has 800 primary turns and 200 secondary turns with a 480 V primary. What is the secondary voltage?",
      "choices": [
        "1,920 V",
        "120 V",
        "480 V",
        "60 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). V₂ = 480 × (200 ÷ 800) = 120 V. (a) 1,920 V uses the ratio upside down. (c) 480 V is the primary. (d) 60 V halves the answer."
    },
    {
      "q": "If that transformer feeds a 2 kVA load, what is the secondary current?",
      "choices": [
        "4.17 A",
        "16.67 A",
        "8.33 A",
        "2 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I₂ = 2,000 ÷ 120 ≈ 16.67 A. (a) 4.17 A is the primary current. (c) 8.33 A is half. (d) 2 A is the kVA number, not a current."
    },
    {
      "q": "What is the primary current for that same 2 kVA load?",
      "choices": [
        "16.67 A",
        "8.33 A",
        "4.17 A",
        "2 A"
      ],
      "answer": 2,
      "explanation": "Correct: (c). I₁ = 2,000 ÷ 480 ≈ 4.17 A, or 16.67 × (200 ÷ 800). (a) is the secondary current. (b) is double. (d) is the kVA number."
    },
    {
      "q": "Why does a transformer only work on AC?",
      "choices": [
        "DC is too dangerous",
        "The magnetic field must keep changing to induce voltage in the secondary",
        "The core only accepts AC",
        "DC has no voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Induction needs a changing field; DC gives a steady field after the first instant, so no voltage is induced. (a) is wrong: danger is not the reason. (c) is wrong: the core is just iron. (d) is wrong: DC certainly has voltage."
    },
    {
      "q": "Why is a transformer rated in kVA rather than kW?",
      "choices": [
        "Because kVA sounds bigger",
        "Because the rating is set by current and voltage, and the load's power factor is unknown",
        "Because transformers have no real power",
        "Because the core is rated in kVA"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The winding current limit times the voltage gives kVA; the kW delivered depends on the load's power factor, which the maker cannot know. (a) is not a reason. (c) is wrong: transformers deliver real power. (d) is wrong: the whole transformer is rated that way."
    },
    {
      "q": "What are copper losses in a transformer?",
      "choices": [
        "Losses in the iron core",
        "I²R heating in the windings",
        "Losses from the humming",
        "Losses in the oil"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Copper losses are I²R heating in the windings, rising with load current. (a) is core losses (hysteresis and eddy currents). (c) is a symptom, not a loss category. (d) is wrong: oil is a coolant, not a loss."
    },
    {
      "q": "What is an isolation transformer used for?",
      "choices": [
        "Stepping voltage up for transmission",
        "Separating a circuit from the supply (1:1) for safety",
        "Measuring high current",
        "Storing energy"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A 1:1 isolation transformer breaks the direct path to the supply earth. (a) describes a step-up transformer. (c) describes a current transformer. (d) is wrong: transformers do not store energy."
    },
    {
      "q": "Why must a current transformer's secondary never be open-circuited while energised?",
      "choices": [
        "It would stop the primary current",
        "The unloaded CT can produce a lethal voltage spike across the open terminals",
        "It would overheat the meter",
        "It would reverse the turns ratio"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With no load, the CT drives a very high voltage across the open secondary — a serious shock hazard. (a) is wrong: the primary keeps flowing. (c) is wrong: the meter is disconnected. (d) is wrong: the ratio does not change."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Transformers: Quick Reference</h3>\n<p><strong>Core idea:</strong> A transformer transfers energy through a changing magnetic field: V₂ ÷ V₁ = N₂ ÷ N₁, current is the inverse, power is conserved.</p>\n<p><strong>Key terms:</strong> Transformer · Primary · Secondary · Turns ratio · kVA rating.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>V₂ ÷ V₁ = N₂ ÷ N₁; I₂ ÷ I₁ = N₁ ÷ N₂.</li>\n<li>Power in ≈ power out.</li>\n<li>Rated in kVA — the current limit at the rated voltage.</li>\n<li>Never open-circuit an energised CT secondary.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
