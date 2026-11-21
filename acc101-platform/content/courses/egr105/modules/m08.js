// egr105 - Module 8: Single-Phase Power & Home Wiring
module.exports = {
  "number": 8,
  "slug": "single-phase-power-home-wiring",
  "title": "Single-Phase Power & Home Wiring",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe how a home gets 120/240 V split-phase power from the utility.",
    "Explain what the hot, neutral, and ground wires each do.",
    "Work out single-phase power with the power factor: P = V × I × pf.",
    "Explain what a circuit breaker and a GFCI each protect against.",
    "Size a branch circuit and state the 80% continuous-load rule."
  ],
  "sections": [
    {
      "heading": "Split-Phase: 120 V and 240 V from One Transformer",
      "html": "<p>A home is fed by a centre-tapped transformer on a pole or pad. The secondary has a centre tap, and that tap is the neutral: from either end of the winding to the centre tap is 120 V, and from end to end is 240 V. So the same service gives you 120 V for lights and outlets and 240 V for heavy loads — the stove, dryer, water heater, and air conditioner. The two 120 V legs are 180° apart, which is why they add to 240 V across the ends. This is split-phase power: one phase, split in two.</p>\n<p>At the service panel, the two hot legs (usually black and red) and the neutral (white) arrive from the meter, and the ground (green or bare copper) is bonded to the neutral at the panel — and only there. Every branch circuit leaves the panel through a breaker and runs hot, neutral, and ground to its outlets.</p>\n"
    },
    {
      "heading": "Hot, Neutral, and Ground — Three Different Jobs",
      "html": "<p>The hot wire carries current from the panel to the load. The neutral wire carries it back — it is a current-carrying conductor, and under load it is not at zero volts along its whole length. The ground wire carries no current in normal operation: it is a safety path. If a fault energises a metal appliance case, the ground wire gives that current a low-resistance path back to the panel, which trips the breaker and keeps the case from staying live.</p>\n<p>That is why a bootleg ground — connecting neutral to ground at an outlet — is dangerous and illegal: it puts load current on the ground wire, so a metal case can become live. Neutral and ground are bonded at the panel only, never downstream. If you ever find a ground wire carrying current, something is wrong.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Hot carries current out, neutral carries it back, ground carries nothing — until a fault, when it saves a life. Bond neutral to ground at the panel only.</div></p>\n"
    },
    {
      "heading": "Single-Phase Power and the 80% Rule",
      "html": "<p>Single-phase real power is <strong>P = V × I × pf</strong>. A 120 V, 20 A circuit at pf = 0.85 delivers 120 × 20 × 0.85 = 2,040 W of real power. A 240 V, 30 A dryer circuit at pf = 1 delivers 240 × 30 = 7,200 W. Always include the power factor for AC loads — a motor at 120 V and 20 A is not a 2,400 W load unless its power factor is 1.</p>\n<p>Breakers and wire are sized with the 80% continuous-load rule: a load that runs for 3 hours or more must not exceed 80% of the circuit rating. A 20 A circuit can carry 16 A continuously; a 15 A circuit, 12 A. That is why a 1,500 W space heater (12.5 A at 120 V) is the practical maximum for a 15 A bedroom circuit — it is already over the 12 A continuous limit, which is one reason heaters trip breakers.</p>\n"
    },
    {
      "heading": "Breakers and GFCIs: Two Different Protectors",
      "html": "<p>A circuit breaker protects the wiring from overcurrent: too much current heats the wire, so the breaker opens before the wire gets hot enough to start a fire. It does not protect you from shock — a 15 A breaker will happily let 0.1 A flow through a person, which is far more than enough to kill.</p>\n<p>A GFCI (ground-fault circuit interrupter) protects people: it compares the current going out on the hot with the current coming back on the neutral, and trips in a fraction of a second if the difference exceeds about 5 mA — the amount that might be flowing through a person to ground. That is why GFCIs are required in kitchens, bathrooms, garages, and outdoors, anywhere water and electricity meet. A GFCI does not replace a breaker; they do different jobs, and modern panels often use both.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>A centre-tapped transformer gives 120 V leg-to-neutral and 240 V leg-to-leg.</li><li>Hot carries current out, neutral carries it back, ground carries nothing in normal operation.</li><li>Single-phase power: P = V × I × pf.</li><li>Continuous loads must stay under 80% of the circuit rating.</li><li>Breakers protect wiring from overcurrent; GFCIs protect people from ground faults (about 5 mA trip).</li><li>Neutral and ground are bonded at the panel only — never at an outlet.</li></ul></p>\n<p><strong>Common mistake:</strong> Treating neutral and ground as interchangeable because both are “the return”. Neutral carries load current; ground must not. Swapping them creates a shock hazard.</p>\n<p><strong>Common mistake:</strong> Thinking a breaker protects against shock. It does not — a GFCI does. A breaker will not trip on the small current that can kill a person.</p>\n<p><strong>Ready check:</strong> If you can find the real power of a 120 V, 20 A, pf = 0.85 load (2,040 W) and explain what a GFCI does that a breaker cannot, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Split-phase",
      "def": "One phase split by a centre-tapped transformer into two 120 V legs, 180° apart, giving 240 V leg-to-leg."
    },
    {
      "term": "Centre tap",
      "def": "The midpoint connection of a transformer secondary, which becomes the neutral."
    },
    {
      "term": "Hot wire",
      "def": "The conductor that carries current from the panel to the load."
    },
    {
      "term": "Neutral wire",
      "def": "The conductor that carries current back from the load to the panel."
    },
    {
      "term": "Ground wire",
      "def": "The safety conductor that carries no current normally and provides a fault path to trip the breaker."
    },
    {
      "term": "Service panel",
      "def": "The main breaker box where the utility service enters and branch circuits begin."
    },
    {
      "term": "Circuit breaker",
      "def": "A device that opens a circuit on overcurrent to protect the wiring from fire."
    },
    {
      "term": "GFCI",
      "def": "A ground-fault circuit interrupter that trips at about 5 mA of leakage to protect people from shock."
    },
    {
      "term": "80% rule",
      "def": "Continuous loads must not exceed 80% of a circuit's rating."
    },
    {
      "term": "Continuous load",
      "def": "A load expected to run for 3 hours or more."
    },
    {
      "term": "Bootleg ground",
      "def": "An illegal jumper connecting neutral to ground at an outlet, which puts load current on the ground wire."
    },
    {
      "term": "Bonding",
      "def": "Connecting neutral to ground at the service panel (and only there)."
    }
  ],
  "video": {
    "title": "From 12V Battery to 120V AC: How Pure Sine Wave Inverters Actually Work | ElectroBOOM",
    "embedUrl": "https://www.youtube.com/embed/UqVoWy1XHkw",
    "note": "How AC power is made and delivered — a practical look at the power that reaches a home. (Pairs with the split-phase and wiring content in this module.)",
    "more": [
      {
        "title": "AC Explained: Frequency, Waveforms & RMS Voltage | 230V vs 325V Peak",
        "url": "https://www.youtube.com/watch?v=frHt_WKFUnU"
      },
      {
        "title": "What is a Transformer? An Electrical Transformer Tutorial | ElectroBOOM",
        "url": "https://www.youtube.com/watch?v=GMePE7NZcxw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A home's service is 120/240 V split-phase. What voltage is measured leg-to-neutral, and what voltage leg-to-leg?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Leg-to-neutral is 120 V (each end of the winding to the centre tap). Step 2: Leg-to-leg is 240 V (end to end across the whole winding).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 120 V, 20 A load has a power factor of 0.85. Find the apparent power and the real power.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: S = V × I = 120 × 20 = 2,400 VA. Step 2: P = S × pf = 2,400 × 0.85 = 2,040 W.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 240 V dryer circuit is rated 30 A and the dryer is a resistive load (pf = 1). What power does it draw, and what is the maximum continuous current on that circuit?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = V × I × pf = 240 × 30 × 1 = 7,200 W. Step 2: Maximum continuous current is 80% of the rating: 30 × 0.8 = 24 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 1,500 W space heater runs on a 120 V, 15 A bedroom circuit. What current does it draw, and is it within the 80% continuous-load limit?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I = P ÷ V = 1,500 ÷ 120 = 12.5 A. Step 2: The 80% limit for a 15 A circuit is 15 × 0.8 = 12 A. Step 3: 12.5 A exceeds 12 A, so it is over the continuous-load limit — this is why heaters trip breakers.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A homeowner's metal toaster case becomes live because of an internal fault. Explain how the ground wire and the breaker protect them.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fault current flows from the live case through the ground wire back to the panel. Step 2: The ground wire is a low-resistance path, so a large fault current flows. Step 3: That large current trips the breaker, cutting the power before anyone touches the live case. Step 4: Without the ground wire, the case would stay live and the next person to touch it would be the path to earth.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A GFCI trips when someone touches a faulty appliance in a bathroom, but the 20 A breaker does not. Explain why the breaker did not trip and why the GFCI did.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The current through the person is only a few milliamps — far below the 20 A the breaker needs to trip, so the breaker sees nothing wrong. Step 2: The GFCI compares hot and neutral currents and sees the difference (the current leaking through the person to ground). Step 3: At about 5 mA of difference it trips in a fraction of a second, cutting the power before the shock becomes lethal.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a 120/240 V split-phase service, what is the voltage leg-to-leg?",
      "choices": [
        "120 V",
        "240 V",
        "208 V",
        "60 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Leg-to-leg is the full winding, 240 V. (a) 120 V is leg-to-neutral. (c) 208 V is a three-phase line voltage, not split-phase. (d) 60 V is half of 120 V."
    },
    {
      "q": "What does the neutral wire do?",
      "choices": [
        "Carries current back from the load to the panel",
        "Carries no current ever",
        "Protects against lightning",
        "Steps the voltage down"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Neutral is the return path and carries load current. (b) describes the ground wire. (c) is wrong: lightning protection is a separate system. (d) is the transformer's job."
    },
    {
      "q": "A 120 V, 20 A load has pf = 0.85. What is the real power?",
      "choices": [
        "2,400 W",
        "2,040 W",
        "2,823 W",
        "102 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). S = 120 × 20 = 2,400 VA; P = 2,400 × 0.85 = 2,040 W. (a) forgets pf. (c) divides by pf. (d) is 120 ÷ 0.85 × something wrong — not a power."
    },
    {
      "q": "What is the maximum continuous current on a 20 A circuit?",
      "choices": [
        "20 A",
        "16 A",
        "25 A",
        "12 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The 80% rule: 20 × 0.8 = 16 A. (a) 20 A is the rating, not the continuous limit. (c) 25 A exceeds the rating. (d) 12 A is the limit for a 15 A circuit."
    },
    {
      "q": "What does a circuit breaker protect?",
      "choices": [
        "People from shock",
        "The wiring from overcurrent and fire",
        "The utility transformer",
        "The neutral wire from carrying current"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A breaker opens on overcurrent to stop the wiring overheating. (a) is the GFCI's job. (c) is wrong: the utility has its own protection. (d) is wrong: neutral is supposed to carry current."
    },
    {
      "q": "What does a GFCI protect against, and at about what current does it trip?",
      "choices": [
        "Overcurrent, at 15 A",
        "Ground faults that can shock a person, at about 5 mA",
        "Lightning, at 1,000 A",
        "Voltage spikes, at 240 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A GFCI detects leakage to ground and trips at about 5 mA. (a) is the breaker's job. (c) and (d) are wrong: GFCIs do not protect against lightning or voltage spikes."
    },
    {
      "q": "Where is neutral bonded to ground?",
      "choices": [
        "At every outlet",
        "At the service panel only",
        "At the transformer only",
        "Nowhere — they are never connected"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Neutral and ground are bonded at the service panel and only there. (a) is a bootleg ground — dangerous and illegal. (c) is wrong: the bond is at the panel. (d) is wrong: they are bonded, but only once."
    },
    {
      "q": "A 1,500 W heater on a 120 V, 15 A circuit draws 12.5 A. Why is this a problem for continuous use?",
      "choices": [
        "It exceeds the 15 A breaker rating",
        "It exceeds the 12 A continuous-load limit (80% of 15 A)",
        "It draws too little current",
        "It makes the voltage rise"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The 80% limit is 12 A, and 12.5 A is over it. (a) is wrong: 12.5 A is under the 15 A rating, which is why the breaker does not trip immediately. (c) is wrong: the problem is too much current, not too little. (d) is wrong: the voltage does not rise."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Single-Phase Power & Home Wiring: Quick Reference</h3>\n<p><strong>Core idea:</strong> Split-phase gives 120 V leg-to-neutral and 240 V leg-to-leg. P = V × I × pf; continuous loads stay under 80% of the rating.</p>\n<p><strong>Key terms:</strong> Split-phase · Hot · Neutral · Ground · GFCI · 80% rule.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>120 V leg-to-neutral, 240 V leg-to-leg.</li>\n<li>P = V × I × pf for single-phase AC.</li>\n<li>Continuous load limit: 80% of the circuit rating.</li>\n<li>Breakers protect wiring; GFCIs protect people (≈5 mA).</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
