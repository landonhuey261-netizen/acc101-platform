// ele103 - Module 9: Transformers in AC Circuits
module.exports = {
  "number": 9,
  "slug": "transformers-in-ac-circuits",
  "title": "Transformers in AC Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a transformer works using electromagnetic induction.",
    "State the turns ratio and use it to find secondary voltage and current.",
    "Explain the difference between step-up and step-down transformers.",
    "Describe transformer losses: copper loss, core loss, and efficiency.",
    "Explain transformer ratings, taps, and the safety rules for working around them."
  ],
  "sections": [
    {
      "heading": "How a Transformer Works",
      "html": "<p>A <strong>transformer</strong> is two coils — the primary and the secondary — wound on a shared iron core. AC in the primary makes a changing magnetic field in the core, and the changing field induces a voltage in the secondary. The transformer has no moving parts and no electrical connection between the primary and the secondary — the energy crosses by magnetism alone, which is why a transformer also provides isolation between two circuits.</p>\n<p>The voltage ratio is set by the <strong>turns ratio</strong>: the number of turns in the secondary divided by the number of turns in the primary. If the secondary has twice as many turns as the primary, the secondary voltage is twice the primary voltage. If it has half as many, the secondary voltage is half. The current ratio is the inverse: if the voltage doubles, the current halves, because the power in equals the power out (minus small losses). The transformer trades voltage for current, and current for voltage, but it never creates power.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A transformer trades voltage for current. Double the voltage and the current halves — the power stays the same, minus small losses.</div>"
    },
    {
      "heading": "Turns Ratio & Step-Up vs. Step-Down",
      "html": "<p>The turns ratio is written as N<sub>P</sub>:N<sub>S</sub> or as a single number, N<sub>S</sub> ÷ N<sub>P</sub>. The secondary voltage is V<sub>S</sub> = V<sub>P</sub> × (N<sub>S</sub> ÷ N<sub>P</sub>), and the secondary current is I<sub>S</sub> = I<sub>P</sub> × (N<sub>P</sub> ÷ N<sub>S</sub>). Worked example: a transformer has 100 primary turns and 200 secondary turns, fed by 120 V. The turns ratio is 2, so the secondary voltage is 120 × 2 = 240 V — a step-up transformer. If the primary draws 10 A, the secondary current is 10 × (100 ÷ 200) = 5 A, and the power checks: 120 × 10 = 1,200 VA in, 240 × 5 = 1,200 VA out.</p>\n<p>A <strong>step-up transformer</strong> has more secondary turns than primary turns and raises the voltage; a <strong>step-down transformer</strong> has fewer secondary turns and lowers it. The power grid uses step-up transformers at the power plant to raise the voltage for transmission, and step-down transformers at substations and on poles to lower it for buildings. The doorbell transformer in a house is a step-down transformer, taking 120 V down to 16 or 24 V.</p>"
    },
    {
      "heading": "Losses & Efficiency",
      "html": "<p>A real transformer is not perfect — it has losses. <strong>Copper loss</strong> is I²R loss in the windings: the wire has resistance, and the current heats it. Copper loss rises with the square of the current, so it is worst at full load. <strong>Core loss</strong> is the energy lost in the iron core: hysteresis loss, from the magnetic field reversing 120 times a second, and eddy-current loss, from currents induced in the core itself. Core loss is nearly constant whenever the transformer is energized, even with no load — which is why an energized transformer hums and feels warm even when nothing is plugged into it.</p>\n<p><strong>Efficiency</strong> is output power divided by input power. Large power transformers are 98% to 99% efficient; small control transformers are 90% to 95% efficient. The losses become heat, and the transformer's cooling — air, oil, or fans — carries that heat away. An overloaded transformer overheats, its insulation ages faster, and its life shortens, which is why transformers are sized with a margin and protected by fuses or breakers.</p>"
    },
    {
      "heading": "Ratings, Taps & Safety",
      "html": "<p>A transformer's <strong>rating</strong> is given in kVA (apparent power), with its primary and secondary voltages and its frequency. A 75 kVA, 480 V to 120/208 V transformer can deliver 75 kVA at those voltages. Many transformers have <strong>taps</strong> — extra connections on the windings that let the voltage be adjusted a few percent up or down, to compensate for a supply voltage that is a little high or a little low. The taps are set when the transformer is installed, de-energized, and locked out.</p>\n<p>Transformer safety starts with the fact that the secondary can be just as dangerous as the primary — a step-down transformer still has a live secondary, and a step-up transformer has a secondary at a higher voltage than the primary. Never work on a transformer energized, never assume a transformer is dead because its load is off (the primary may still be energized), and always verify absence of voltage on both sides. A current transformer (CT) has one more rule: its secondary must never be open-circuited while the primary is energized, because an open CT secondary can develop a dangerously high voltage.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A transformer is two coils on a shared iron core; energy crosses by magnetism, with no electrical connection between primary and secondary.</li>\n<li>Turns ratio: V<sub>S</sub> = V<sub>P</sub> × (N<sub>S</sub> ÷ N<sub>P</sub>); I<sub>S</sub> = I<sub>P</sub> × (N<sub>P</sub> ÷ N<sub>S</sub>).</li>\n<li>Step-up has more secondary turns; step-down has fewer.</li>\n<li>Losses: copper loss (I²R, rises with load) and core loss (hysteresis and eddy currents, nearly constant).</li>\n<li>Ratings in kVA; taps adjust voltage a few percent; verify absence of voltage on both sides; never open-circuit a CT secondary while energized.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking a transformer creates power. It trades voltage for current — the power out is the power in, minus small losses.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Assuming a transformer is dead because its load is off. The primary may still be energized, and the secondary can still be live — verify both sides.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain turns ratio, calculate secondary voltage and current, and state the loss and safety rules, you have this module. Module 10 covers AC measurements.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Transformer",
      "def": "Two coils on a shared iron core that transfers AC energy by magnetism."
    },
    {
      "term": "Primary",
      "def": "The coil a transformer is fed from."
    },
    {
      "term": "Secondary",
      "def": "The coil a transformer delivers power from."
    },
    {
      "term": "Turns ratio",
      "def": "The number of secondary turns divided by the number of primary turns; it sets the voltage ratio."
    },
    {
      "term": "Step-up transformer",
      "def": "A transformer with more secondary turns than primary turns; it raises voltage."
    },
    {
      "term": "Step-down transformer",
      "def": "A transformer with fewer secondary turns than primary turns; it lowers voltage."
    },
    {
      "term": "Copper loss",
      "def": "I²R loss in a transformer's windings; it rises with the square of the current."
    },
    {
      "term": "Core loss",
      "def": "Energy lost in the iron core: hysteresis loss and eddy-current loss; nearly constant when energized."
    },
    {
      "term": "Hysteresis loss",
      "def": "Energy lost as the core's magnetic field reverses 120 times a second."
    },
    {
      "term": "Eddy-current loss",
      "def": "Energy lost to currents induced in the core itself."
    },
    {
      "term": "Efficiency",
      "def": "Output power divided by input power, usually given as a percentage."
    },
    {
      "term": "kVA rating",
      "def": "A transformer's apparent-power rating, in kilovolt-amperes."
    },
    {
      "term": "Tap",
      "def": "An extra connection on a winding that adjusts the output voltage a few percent."
    },
    {
      "term": "Isolation",
      "def": "The lack of an electrical connection between a transformer's primary and secondary."
    },
    {
      "term": "Current transformer (CT)",
      "def": "A transformer that measures current; its secondary must never be open-circuited while energized."
    }
  ],
  "video": {
    "title": "Transformers Explained - How transformers work",
    "embedUrl": "https://www.youtube.com/embed/jcY4QN7awEc",
    "note": "A transformer explainer. As you watch, write down the turns-ratio formulas for voltage and current and the two kinds of loss.",
    "more": [
      {
        "title": "How Transformers Work",
        "url": "https://www.youtube.com/watch?v=n_KO_g9HNKE"
      },
      {
        "title": "Transformers explained in under 3 minutes | Attention Is All You Need",
        "url": "https://www.youtube.com/watch?v=WmjtFdxTF0Q"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A transformer has 100 primary turns and 200 secondary turns, fed by 120 V. What is the secondary voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V_S = V_P × (N_S ÷ N_P). Step 2: V_S = 120 × (200 ÷ 100) = 120 × 2 = 240 volts. Step 3: The secondary voltage is 240 V — a step-up transformer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In the same transformer, the primary draws 10 A. What is the secondary current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I_S = I_P × (N_P ÷ N_S). Step 2: I_S = 10 × (100 ÷ 200) = 5 amps. Step 3: The secondary current is 5 A, and the power checks: 120 × 10 = 1,200 VA in, 240 × 5 = 1,200 VA out.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A transformer has 480 primary turns and 120 secondary turns, fed by 480 V. What is the secondary voltage, and is it step-up or step-down?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V_S = 480 × (120 ÷ 480) = 480 × 0.25 = 120 volts. Step 2: The secondary has fewer turns than the primary. Step 3: It is a step-down transformer, 480 V to 120 V.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A transformer delivers 9,000 W and its input is 10,000 W. What is its efficiency?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Efficiency = output ÷ input. Step 2: 9,000 ÷ 10,000 = 0.9. Step 3: The efficiency is 90%.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain the difference between copper loss and core loss in a transformer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Copper loss is I²R loss in the windings — it rises with the square of the current and is worst at full load. Step 2: Core loss is hysteresis and eddy-current loss in the iron core — it is nearly constant whenever the transformer is energized, even with no load. Step 3: Both become heat that the transformer's cooling must carry away.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why must a current transformer's secondary never be open-circuited while the primary is energized?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: With the secondary open, there is no current to oppose the primary's magnetic field. Step 2: The core saturates and the secondary develops a dangerously high voltage. Step 3: The high voltage can arc, damage the transformer, and injure anyone nearby — so a CT secondary is always shorted or connected to its meter before the primary is energized.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A transformer transfers energy between its coils by:",
      "choices": [
        "A direct wire connection",
        "Magnetism, through a shared iron core",
        "A battery",
        "A capacitor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Energy crosses by magnetism; there is no electrical connection between the coils. (a) There is no wire between primary and secondary. (c) A battery is not part of a transformer. (d) A capacitor is not part of a transformer."
    },
    {
      "q": "A transformer with 100 primary turns and 200 secondary turns, fed by 120 V, has a secondary voltage of:",
      "choices": [
        "60 V",
        "120 V",
        "240 V",
        "480 V"
      ],
      "answer": 2,
      "explanation": "Correct: (c). V_S = 120 × (200 ÷ 100) = 240 V. (a) 60 V would be a 2:1 step-down. (b) 120 V is the primary voltage. (d) 480 V would need a 4:1 ratio."
    },
    {
      "q": "If a transformer's secondary voltage doubles, its secondary current:",
      "choices": [
        "Doubles",
        "Halves",
        "Stays the same",
        "Goes to zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Power is conserved, so doubling voltage halves current. (a) Doubling would double the power. (c) Current changes with the turns ratio. (d) Current does not go to zero."
    },
    {
      "q": "A step-down transformer has:",
      "choices": [
        "More secondary turns than primary turns",
        "Fewer secondary turns than primary turns",
        "Equal turns",
        "No secondary"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fewer secondary turns means a lower secondary voltage. (a) More secondary turns is a step-up transformer. (c) Equal turns gives the same voltage. (d) A transformer without a secondary is not a transformer."
    },
    {
      "q": "Copper loss in a transformer is:",
      "choices": [
        "Constant whenever the transformer is energized",
        "I²R loss in the windings, rising with the square of the current",
        "Loss in the iron core",
        "Zero at full load"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Copper loss is I²R in the windings and rises with load. (a) Constant loss is core loss. (c) Core loss is hysteresis and eddy currents. (d) Copper loss is worst at full load."
    },
    {
      "q": "Core loss in a transformer is:",
      "choices": [
        "Zero when unloaded",
        "Nearly constant whenever the transformer is energized, even with no load",
        "The same as copper loss",
        "Caused by the load current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Core loss is hysteresis and eddy-current loss, present whenever the core is magnetized. (a) Core loss is present with no load. (c) Core loss and copper loss are different. (d) Core loss does not depend on load current."
    },
    {
      "q": "A transformer's rating is given in:",
      "choices": [
        "Watts",
        "kVA",
        "Henrys",
        "Farads"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Transformer ratings are in kVA (apparent power). (a) Watts are true power, not the rating unit. (c) Henrys measure inductance. (d) Farads measure capacitance."
    },
    {
      "q": "A current transformer's secondary must never be open-circuited while energized because:",
      "choices": [
        "It will stop working",
        "It can develop a dangerously high voltage",
        "It will use too much power",
        "It will reverse the current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An open CT secondary can develop a dangerously high voltage. (a) It does not simply stop working — it becomes dangerous. (c) Power use is not the issue. (d) Current does not reverse."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Transformers in AC Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> A transformer trades voltage for current. Double the voltage and the current halves — the power stays the same, minus small losses.</p>\n<p><strong>Turns ratio:</strong> V_S = V_P × (N_S ÷ N_P) · I_S = I_P × (N_P ÷ N_S).</p>\n<p><strong>Types:</strong> Step-up = more secondary turns · Step-down = fewer secondary turns.</p>\n<p><strong>Losses:</strong> Copper loss = I²R in windings, rises with load · Core loss = hysteresis + eddy currents, nearly constant when energized.</p>\n<p><strong>Efficiency:</strong> Output ÷ input · Large transformers 98–99% · Small control transformers 90–95%.</p>\n<p><strong>Safety:</strong> Verify absence of voltage on both sides · Never open-circuit a CT secondary while energized.</p>\n<p><strong>Self-check:</strong> Find V_S and I_S for a 100:200 transformer on 120 V at 10 A, and explain the two losses, without looking.</p>\n"
};
