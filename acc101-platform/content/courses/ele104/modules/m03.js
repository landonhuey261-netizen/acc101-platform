// ele104 - Module 3: Branch Circuits & Feeders (Articles 210, 215)
module.exports = {
  "number": 3,
  "slug": "branch-circuits-feeders",
  "title": "Branch Circuits & Feeders (Articles 210, 215)",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how Article 210 classifies branch circuits by rating and use.",
    "Apply the 125% rule for continuous loads to branch circuits and feeders.",
    "Size a branch circuit and its overcurrent device for a given load.",
    "Explain feeder requirements in Article 215, including the grounded-conductor rule.",
    "Identify the required branch circuits in a dwelling: small-appliance, laundry, and bathroom."
  ],
  "sections": [
    {
      "heading": "What Article 210 Covers",
      "html": "<p>Article 210 governs branch circuits — the final leg of the wiring system, from the last breaker to the outlets. It sets the rules for circuit ratings, the number of outlets, the required circuits in dwellings, and the protection those circuits need. If you can work Article 210, you can lay out most of a house's wiring.</p><p>Branch circuits are rated by the overcurrent device protecting them: 15, 20, 30, 40, and 50 amperes are the common ratings, and the conductor must be sized to match. A 15-ampere circuit uses 14 AWG copper, a 20-ampere circuit uses 12 AWG copper, and a 30-ampere circuit uses 10 AWG copper as the minimums under the 60°C column and Table 310.16. Larger circuits follow the same pattern up the table.</p><p>A branch circuit may serve only certain loads. A 15- or 20-ampere general-purpose circuit may serve lighting and receptacles; a 30-ampere circuit may serve fixed appliances; and individual branch circuits are required for some loads, such as a single large appliance. The circuit rating, the wire, and the load must all agree — the breaker protects the wire, and the wire must carry the load.</p><div class=\"callout\"><strong>Key idea:</strong> The breaker protects the wire. Size the wire for the load, then protect it with the right breaker — never the other way around.</div>"
    },
    {
      "heading": "Continuous Loads and the 125% Rule",
      "html": "<p>A continuous load is a load where the maximum current is expected to continue for three hours or more. Lighting in a store that stays on all day, a water heater, and a commercial sign are continuous loads; a toaster is not. Article 210.19(A)(1) requires branch-circuit conductors for continuous loads to have an ampacity of at least 125% of the continuous load, and 210.20(A) requires the overcurrent device to be sized the same way.</p><p>The reason is heat. A breaker in an enclosed panel warms up over hours of full load, and its trip point drifts. The 125% margin keeps the breaker and the conductors inside their temperature ratings during a long, steady draw. The same 125% rule applies to feeders under 215.2(A)(1) and to services under 230.42(A).</p><p>Worked example: a continuous load of 16 amperes needs conductors rated at least 16 × 1.25 = 20 amperes, and an overcurrent device rated at least 20 amperes. A 12 AWG copper conductor (20 amperes at 60°C, 25 at 75°C) on a 20-ampere breaker is the correct minimum. A 14 AWG conductor on a 15-ampere breaker would be undersized, even though 16 amperes is “close” to 15.</p><ul><li>Continuous load = maximum current expected for 3 hours or more.</li><li>Conductors: at least 125% of the continuous load (210.19(A)(1)).</li><li>Overcurrent device: at least 125% of the continuous load (210.20(A)).</li><li>Same 125% rule for feeders (215.2) and services (230.42).</li></ul>"
    },
    {
      "heading": "Required Dwelling Circuits",
      "html": "<p>Article 210.11(C) requires specific branch circuits in every dwelling unit. At least two 20-ampere small-appliance branch circuits must serve the kitchen, pantry, breakfast room, dining room, and similar areas (210.11(C)(1)). At least one 20-ampere laundry branch circuit must serve the laundry area (210.11(C)(2)). At least one 20-ampere branch circuit must serve the bathroom receptacle outlets (210.11(C)(3)). These circuits are dedicated to their areas and may not serve other rooms — with the narrow exceptions the Code states.</p><p>The small-appliance circuits also feed the countertop receptacles, and 210.52(B) requires that they serve no other outlets except in the listed rooms, plus specific exceptions such as a refrigerator or a gas range clock. The laundry circuit serves only laundry outlets. The bathroom circuit may serve the receptacles of one bathroom only, or the receptacles of multiple bathrooms if it serves no other loads — and in the 2023 NEC it may also serve that bathroom's lighting and fan when it serves only one bathroom.</p><p>These required circuits are the skeleton of a dwelling's wiring plan. When you lay out a house, you place these first — two small-appliance, one laundry, one bathroom — and then add general-purpose lighting and receptacle circuits room by room.</p><div class=\"callout\"><strong>Key idea:</strong> Place the required circuits first: two 20-ampere small-appliance, one 20-ampere laundry, one 20-ampere bathroom. Everything else is added around them.</div>"
    },
    {
      "heading": "Feeders: Article 215",
      "html": "<p>A feeder carries power from the service equipment to a panelboard or other distribution point, where branch circuits split off. Article 215.2(A)(1) sizes feeder conductors the same way as branch circuits: the noncontinuous load at 100% plus the continuous load at 125%, with a minimum ampacity to carry the load. The feeder overcurrent device follows the same rule under 215.3.</p><p>One feeder rule surprises beginners: 215.2(A)(2) requires the feeder grounded (neutral) conductor to be sized to carry the maximum unbalanced load, and it must never be smaller than the required equipment grounding conductor. In a 120/240-volt single-phase feeder, the neutral carries the imbalance between the two hot legs — it is sized by calculation, not by habit.</p><p>Feeders also need identification and protection. The feeder conductors must be protected by an overcurrent device at their supply end, and the panelboard they feed must have its own overcurrent protection or be protected by the feeder device within the limits of Article 408. A feeder run in a raceway follows the Chapter 3 wiring-method rules of its raceway type, and its conductors follow Article 310.</p><ul><li>Feeder conductors: noncontinuous at 100% + continuous at 125% (215.2(A)(1)).</li><li>Feeder grounded conductor: sized for the maximum unbalanced load (215.2(A)(2)).</li><li>Feeder overcurrent protection: at the supply end (215.3).</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Branch circuits (210) run from the final overcurrent device to the outlets; feeders (215) run from the service to the final branch-circuit overcurrent device.</li><li>Continuous load = 3 hours or more; size conductors and breakers at 125% of it.</li><li>Minimums: 15 A = 14 AWG Cu, 20 A = 12 AWG Cu, 30 A = 10 AWG Cu.</li><li>Dwellings need two 20 A small-appliance circuits, one 20 A laundry circuit, and one 20 A bathroom circuit.</li><li>Feeder neutrals are sized for the maximum unbalanced load.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Putting a 16-ampere continuous load on a 15-ampere breaker because “it is only one amp over.” Continuous loads need the 125% margin: 16 A needs a 20 A circuit.</div><div class=\"callout\"><strong>Common mistake:</strong> Feeding a bedroom receptacle from a small-appliance circuit. Those circuits are dedicated to the kitchen, dining, pantry, and similar areas.</div><p><strong>Ready-to-Work link:</strong> If you can size a branch circuit for a continuous load and name the three required dwelling circuits, you have this module. Module 4 covers conductor sizing, ampacity, and derating in Article 310.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Continuous load",
      "def": "A load where the maximum current is expected to continue for 3 hours or more."
    },
    {
      "term": "Noncontinuous load",
      "def": "A load that does not run at maximum current for 3 hours or more."
    },
    {
      "term": "Small-appliance branch circuit",
      "def": "A 20-ampere circuit serving kitchen, pantry, breakfast, and dining receptacles (210.11(C)(1))."
    },
    {
      "term": "Laundry branch circuit",
      "def": "A 20-ampere circuit serving the laundry area (210.11(C)(2))."
    },
    {
      "term": "Bathroom branch circuit",
      "def": "A 20-ampere circuit serving bathroom receptacle outlets (210.11(C)(3))."
    },
    {
      "term": "Individual branch circuit",
      "def": "A branch circuit that supplies only one utilization equipment."
    },
    {
      "term": "Multiwire branch circuit",
      "def": "A branch circuit with two or more ungrounded conductors sharing one grounded (neutral) conductor."
    },
    {
      "term": "General-purpose branch circuit",
      "def": "A branch circuit supplying lighting and receptacle outlets for general use."
    },
    {
      "term": "Feeder",
      "def": "Conductors between the service equipment and the final branch-circuit overcurrent device."
    },
    {
      "term": "Maximum unbalanced load",
      "def": "The largest load that the neutral of a feeder or service must carry; the neutral is sized for it."
    },
    {
      "term": "Overcurrent device",
      "def": "A breaker or fuse that opens a circuit when current exceeds its rating."
    },
    {
      "term": "Ampacity",
      "def": "The maximum current a conductor can carry continuously without exceeding its temperature rating."
    },
    {
      "term": "125% rule",
      "def": "Continuous loads are sized at 125% of the load for conductors and overcurrent devices."
    }
  ],
  "video": {
    "title": "How to Add a Sub Panel to Expand the Circuit Breaker Capacity.",
    "embedUrl": "https://www.youtube.com/embed/_ir2ap_ft_Y",
    "note": "Watch a subpanel being added to expand breaker capacity — the feeder from the main panel to the new subpanel, and the branch circuits that come out of it. Name each run as feeder or branch circuit as you watch.",
    "more": [
      {
        "title": "3 Phase Distribution Board Connection Diagram",
        "url": "https://www.youtube.com/watch?v=c1vTsixAdxQ"
      },
      {
        "title": "How to Master Commercial Panel Wiring: Tips Electricians Swear By!",
        "url": "https://www.youtube.com/watch?v=_SbQcswuzns"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A continuous load draws 20 amperes. What is the minimum conductor ampacity and the minimum breaker size?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 20 A × 1.25 = 25 A. Step 2: The conductor must have an ampacity of at least 25 A — 10 AWG copper at 60°C (30 A) is the minimum, or 12 AWG at 75°C (25 A) if the terminations are rated 75°C. Step 3: The breaker must be at least 25 A, so a 25-ampere breaker is the minimum standard size.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A load of 12 amperes runs for 2 hours, then shuts off. Is it continuous? What size circuit does it need?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — continuous means 3 hours or more at maximum current. Step 2: It is a noncontinuous 12-ampere load, so the circuit needs at least 12 A. Step 3: A 15-ampere circuit on 14 AWG copper is the minimum (12 A ≤ 15 A).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> How many small-appliance branch circuits does a dwelling need, what rating, and which rooms do they serve?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At least two. Step 2: 20 amperes each. Step 3: They serve the kitchen, pantry, breakfast room, dining room, and similar areas (210.11(C)(1)) — and no other outlets except the Code's narrow exceptions.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A feeder supplies a panel with 40 amperes of noncontinuous load and 24 amperes of continuous load. What is the minimum feeder ampacity?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Noncontinuous at 100%: 40 A. Step 2: Continuous at 125%: 24 × 1.25 = 30 A. Step 3: Total minimum ampacity = 40 + 30 = 70 A, so the feeder conductors must be rated at least 70 A (for example, 4 AWG copper at 75°C, 85 A).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Can the 20-ampere bathroom branch circuit also feed the bedroom next door? Why or why not?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: The bathroom circuit required by 210.11(C)(3) serves bathroom receptacle outlets. Step 3: It may serve multiple bathrooms' receptacles if it serves no other loads, or one bathroom's receptacles plus that bathroom's lighting and fan — but never a bedroom.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A 30-ampere branch circuit feeds a fixed appliance. What is the minimum copper conductor size, and what kind of loads may a 30-ampere circuit serve?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 10 AWG copper is the minimum for a 30-ampere circuit. Step 2: A 30-ampere circuit may serve fixed appliances and other loads the Code permits at that rating. Step 3: It may not serve general-purpose receptacles rated 15 or 20 amperes.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A continuous load is one where the maximum current is expected to continue for:",
      "choices": [
        "30 minutes or more",
        "1 hour or more",
        "3 hours or more",
        "24 hours or more"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Continuous means 3 hours or more. (a) and (b) 30 minutes and 1 hour are too short. (d) 24 hours is far beyond the definition."
    },
    {
      "q": "A continuous load of 16 amperes needs a branch circuit rated at least:",
      "choices": [
        "15 amperes",
        "16 amperes",
        "20 amperes",
        "30 amperes"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 16 × 1.25 = 20 amperes. (a) 15 A is below the load itself. (b) 16 A has no 125% margin. (d) 30 A is larger than the minimum required."
    },
    {
      "q": "The minimum copper conductor for a 20-ampere branch circuit is:",
      "choices": [
        "14 AWG",
        "12 AWG",
        "10 AWG",
        "8 AWG"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 12 AWG copper is the minimum for 20 amperes. (a) 14 AWG is the minimum for 15 amperes. (c) 10 AWG is the minimum for 30 amperes. (d) 8 AWG is larger than needed."
    },
    {
      "q": "How many 20-ampere small-appliance branch circuits does a dwelling unit require at minimum?",
      "choices": [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At least two, per 210.11(C)(1). (a) One is not enough. (c) and (d) Three or four exceed the minimum requirement."
    },
    {
      "q": "The 20-ampere laundry branch circuit is required by:",
      "choices": [
        "210.11(C)(1)",
        "210.11(C)(2)",
        "210.11(C)(3)",
        "210.52(A)"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 210.11(C)(2) requires the laundry circuit. (a) (C)(1) is the small-appliance circuits. (c) (C)(3) is the bathroom circuit. (d) 210.52(A) covers receptacle spacing, not the laundry circuit."
    },
    {
      "q": "A feeder's grounded (neutral) conductor must be sized for:",
      "choices": [
        "The smallest load on the feeder",
        "The maximum unbalanced load",
        "The equipment grounding conductor size only",
        "Zero — neutrals carry no current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 215.2(A)(2) requires sizing for the maximum unbalanced load. (a) The smallest load is not the sizing basis. (c) The neutral must never be smaller than the required equipment grounding conductor, but that is a minimum, not the sizing method. (d) Neutrals carry the unbalanced current."
    },
    {
      "q": "The 125% rule for continuous loads applies to:",
      "choices": [
        "Conductors only",
        "Overcurrent devices only",
        "Both conductors and overcurrent devices",
        "Neither — it applies only to services"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Both: 210.19(A)(1) for conductors and 210.20(A) for overcurrent devices. (a) and (b) Each names only half the rule. (d) It applies to branch circuits, feeders, and services."
    },
    {
      "q": "A multiwire branch circuit is:",
      "choices": [
        "A circuit with two or more ungrounded conductors sharing one grounded conductor",
        "A circuit with two separate neutrals",
        "A feeder to a subpanel",
        "A 240-volt circuit with no neutral"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Two or more ungrounded conductors share one grounded conductor. (b) A multiwire circuit shares one neutral, not two. (c) A feeder is a different circuit type. (d) A 240-volt circuit with no neutral is a single circuit, not a multiwire branch circuit."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Branch Circuits &amp; Feeders: Quick Reference</h3>\n<p><strong>Core idea:</strong> Article 210 governs branch circuits (final breaker to outlet); Article 215 governs feeders (service to final branch-circuit breaker).</p>\n<p><strong>Continuous load:</strong> 3 hours or more at maximum current. Size conductors AND breakers at 125% of it (210.19(A)(1), 210.20(A)).</p>\n<p><strong>Minimums:</strong> 15 A = 14 AWG Cu · 20 A = 12 AWG Cu · 30 A = 10 AWG Cu.</p>\n<p><strong>Required dwelling circuits:</strong> Two 20 A small-appliance (210.11(C)(1)) · one 20 A laundry (210.11(C)(2)) · one 20 A bathroom (210.11(C)(3)).</p>\n<p><strong>Feeders:</strong> Noncontinuous 100% + continuous 125% (215.2(A)(1)); neutral sized for the maximum unbalanced load (215.2(A)(2)).</p>\n<p><strong>Self-check:</strong> Size a circuit for a 24 A continuous load, and name the three required dwelling circuits with their section numbers.</p>\n"
};
