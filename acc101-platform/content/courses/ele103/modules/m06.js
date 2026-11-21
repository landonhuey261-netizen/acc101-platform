// ele103 - Module 6: Power in AC Circuits: True, Reactive & Apparent
module.exports = {
  "number": 6,
  "slug": "power-in-ac-circuits-true-reactive-apparent",
  "title": "Power in AC Circuits: True, Reactive & Apparent",
  "estTime": "3–4 hours",
  "objectives": [
    "Define true power, reactive power, and apparent power, and state their units.",
    "Explain the power triangle and how the three powers relate.",
    "Calculate true, reactive, and apparent power from voltage, current, and phase angle.",
    "Explain why reactive power is needed even though it does no useful work.",
    "Describe the power triangle for inductive and capacitive loads."
  ],
  "sections": [
    {
      "heading": "Three Kinds of Power",
      "html": "<p>In a DC circuit there is one kind of power: voltage times current, in watts. In an AC circuit there are three. <strong>True power (P)</strong>, measured in <strong>watts (W)</strong>, is the power that does useful work — heat, light, motion. <strong>Reactive power (Q)</strong>, measured in <strong>volt-amperes reactive (VAR)</strong>, is the power that sloshes back and forth between the source and the circuit's magnetic and electric fields, building them up and letting them collapse, doing no useful work but needed to make motors and transformers work at all. <strong>Apparent power (S)</strong>, measured in <strong>volt-amperes (VA)</strong>, is the product of the RMS voltage and the RMS current — the total power the source must supply, real and reactive together.</p>\n<p>The three are related by the <strong>power triangle</strong>: true power is one side, reactive power is the other, and apparent power is the hypotenuse, so S = √(P² + Q²). The angle between true power and apparent power is the phase angle θ, and cos θ is the power factor. A purely resistive load has no reactive power, so S = P and the power factor is 1. A purely reactive load has no true power, so S = Q and the power factor is 0.</p>\n<div class=\"callout\"><strong>Key idea:</strong> True power works, reactive power enables, apparent power is what the source must deliver. The utility bills for true power, but it must build its wires and transformers for apparent power.</div>"
    },
    {
      "heading": "Calculating the Three Powers",
      "html": "<p>Worked example: a 120 V circuit draws 10 A at a phase angle of 45° (net inductive). Apparent power S = E × I = 120 × 10 = 1,200 VA. True power P = S × cos θ = 1,200 × cos 45° = 1,200 × 0.707 ≈ 848 W. Reactive power Q = S × sin θ = 1,200 × sin 45° = 1,200 × 0.707 ≈ 848 VAR. Check with the triangle: √(848² + 848²) = √1,438,208 ≈ 1,199 VA, which matches S. The three numbers are consistent, and the check is the habit: if the triangle does not close, one of the numbers is wrong.</p>\n<p>True power can also be found from the resistance: P = I² × R. Reactive power can be found from the net reactance: Q = I² × X. And apparent power can be found from the impedance: S = I² × Z. The three formulas are the same pattern — current squared times the opposition — applied to R, X, and Z respectively.</p>"
    },
    {
      "heading": "Why Reactive Power Is Needed",
      "html": "<p>Reactive power does no useful work, so a beginner's question is fair: why have it at all? The answer is that motors and transformers cannot work without magnetic fields, and magnetic fields cannot be built without reactive power. A motor's field is built and collapsed 120 times a second (twice per 60 Hz cycle), and the energy for that comes from the source as reactive power, is stored in the field, and is returned to the source — over and over. Without reactive power, the motor's field would not exist and the motor would not turn.</p>\n<p>The cost of reactive power is real even though the power itself does no work. The current that carries it heats the wires, loads the transformers, and takes up capacity in the system — capacity that could otherwise carry true power. That is why utilities charge large customers for poor power factor, and why power-factor correction (Module 7) matters: it reduces the reactive current the utility must supply, freeing capacity and cutting losses.</p>"
    },
    {
      "heading": "Inductive & Capacitive Loads",
      "html": "<p>An inductive load — a motor, a transformer, a ballast — has a lagging power factor: the current lags the voltage, the reactive power is positive (inductive VARs), and the power triangle leans one way. A capacitive load — a capacitor bank, a long cable — has a leading power factor: the current leads the voltage, the reactive power is negative (capacitive VARs), and the power triangle leans the other way. The two cancel each other, which is the whole idea of power-factor correction: add capacitive VARs to cancel inductive VARs, and the power triangle flattens toward true power alone.</p>\n<p>The sign convention matters for the math but not for the idea: inductive and capacitive reactive power are opposites, and the net reactive power is the difference between them. A circuit with 1,000 inductive VARs and 600 capacitive VARs has a net of 400 inductive VARs. The triangle is drawn with the net value, and the power factor follows from it.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>True power P, in watts — does useful work. Reactive power Q, in VAR — builds and collapses fields. Apparent power S, in VA — the total the source must supply.</li>\n<li>Power triangle: S = √(P² + Q²); P = S × cos θ; Q = S × sin θ; power factor = cos θ.</li>\n<li>Also: P = I² × R, Q = I² × X, S = I² × Z.</li>\n<li>Reactive power is needed to build the magnetic fields that motors and transformers run on.</li>\n<li>Inductive VARs and capacitive VARs are opposites and cancel each other.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Adding true and reactive power in a straight line to get apparent power. They combine at right angles — use the triangle, S = √(P² + Q²).</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying reactive power is wasted. It does no useful work, but it is not wasted — it is returned to the source each cycle, and it is essential for motors and transformers.</div>\n<p><strong>Ready-to-Work link:</strong> If you can define P, Q, and S, draw the power triangle, and calculate all three from E, I, and θ, you have this module. Module 7 covers power factor and correction.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "True power (P)",
      "def": "The power that does useful work, measured in watts."
    },
    {
      "term": "Reactive power (Q)",
      "def": "The power that builds and collapses magnetic and electric fields, measured in VAR; it does no useful work."
    },
    {
      "term": "Apparent power (S)",
      "def": "The total power the source must supply, measured in volt-amperes; S = E × I."
    },
    {
      "term": "Watt (W)",
      "def": "The unit of true power."
    },
    {
      "term": "Volt-ampere reactive (VAR)",
      "def": "The unit of reactive power."
    },
    {
      "term": "Volt-ampere (VA)",
      "def": "The unit of apparent power."
    },
    {
      "term": "Power triangle",
      "def": "The right triangle with P and Q as sides and S as the hypotenuse."
    },
    {
      "term": "Power factor",
      "def": "cos θ; the fraction of apparent power that becomes true power."
    },
    {
      "term": "Phase angle (θ)",
      "def": "The angle between the voltage and current waves; also the angle of the power triangle."
    },
    {
      "term": "Lagging power factor",
      "def": "A power factor where current lags voltage; an inductive load."
    },
    {
      "term": "Leading power factor",
      "def": "A power factor where current leads voltage; a capacitive load."
    },
    {
      "term": "Inductive VARs",
      "def": "Reactive power from inductance; positive in the usual sign convention."
    },
    {
      "term": "Capacitive VARs",
      "def": "Reactive power from capacitance; negative in the usual sign convention, canceling inductive VARs."
    },
    {
      "term": "I²R",
      "def": "True power lost as heat in a resistance."
    },
    {
      "term": "I²X",
      "def": "Reactive power in a reactance."
    }
  ],
  "video": {
    "title": "Difference between Real, Reactive and Apparent Power",
    "embedUrl": "https://www.youtube.com/embed/8zRKzRRDkm8",
    "note": "A true/reactive/apparent power explainer. As you watch, draw the power triangle for the example and check that it closes.",
    "more": [
      {
        "title": "Power factor explained | Active Reactive Apparent Power correction",
        "url": "https://www.youtube.com/watch?v=r97cKTLoS74"
      },
      {
        "title": "Power Factor Explained - The basics what is power factor pf",
        "url": "https://www.youtube.com/watch?v=Tv_7XWf96gg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 120 V circuit draws 10 A at a phase angle of 45°. What is the apparent power?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: S = E × I. Step 2: S = 120 × 10 = 1,200 VA. Step 3: The apparent power is 1,200 VA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In the same circuit, what is the true power?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = S × cos θ. Step 2: P = 1,200 × cos 45° = 1,200 × 0.707 ≈ 848 watts. Step 3: The true power is about 848 W.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> In the same circuit, what is the reactive power?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Q = S × sin θ. Step 2: Q = 1,200 × sin 45° = 1,200 × 0.707 ≈ 848 VAR. Step 3: The reactive power is about 848 VAR.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Check your work: does √(P² + Q²) equal the apparent power?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: √(848² + 848²) = √1,438,208 ≈ 1,199 VA. Step 2: That matches S = 1,200 VA (the small difference is rounding). Step 3: The triangle closes, so the numbers are consistent.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A load has P = 3,000 W and Q = 4,000 VAR. What is the apparent power and the power factor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: S = √(P² + Q²) = √(3,000² + 4,000²) = √25,000,000 = 5,000 VA. Step 2: Power factor = P ÷ S = 3,000 ÷ 5,000 = 0.6. Step 3: The apparent power is 5,000 VA and the power factor is 0.6.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why does a motor need reactive power if reactive power does no useful work?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A motor cannot work without a magnetic field. Step 2: The field is built and collapsed 120 times a second, and the energy for that comes as reactive power. Step 3: Without reactive power the field would not exist and the motor would not turn — the reactive power is returned to the source each cycle, not wasted.</p>"
    }
  ],
  "quiz": [
    {
      "q": "True power is measured in:",
      "choices": [
        "VAR",
        "VA",
        "Watts",
        "Henrys"
      ],
      "answer": 2,
      "explanation": "Correct: (c). True power is measured in watts. (a) VAR measures reactive power. (b) VA measures apparent power. (d) Henrys measure inductance."
    },
    {
      "q": "Reactive power is measured in:",
      "choices": [
        "Watts",
        "VA",
        "VAR",
        "Farads"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Reactive power is measured in volt-amperes reactive. (a) Watts measure true power. (b) VA measures apparent power. (d) Farads measure capacitance."
    },
    {
      "q": "Apparent power is:",
      "choices": [
        "E × I, in volt-amperes",
        "E ÷ I, in ohms",
        "I² × R, in watts",
        "E × R, in volts"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Apparent power S = E × I, in VA. (b) E ÷ I is impedance. (c) I² × R is true power lost as heat. (d) E × R is not a standard quantity."
    },
    {
      "q": "The power triangle gives:",
      "choices": [
        "S = P + Q",
        "S = √(P² + Q²)",
        "S = P × Q",
        "S = P ÷ Q"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Apparent power is the hypotenuse of the power triangle. (a) True and reactive power do not add in a straight line. (c) Multiplying is not the rule. (d) Dividing is not the rule."
    },
    {
      "q": "A 120 V circuit draws 10 A at 45°. The true power is about:",
      "choices": [
        "1,200 W",
        "848 W",
        "600 W",
        "10 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P = 1,200 × cos 45° = 1,200 × 0.707 ≈ 848 W. (a) 1,200 is the apparent power. (c) 600 W would need a 60° angle. (d) 10 W is far too small."
    },
    {
      "q": "A motor draws 2,000 VA apparent power and 1,600 W true power. Its power factor is:",
      "choices": [
        "0.5",
        "0.8",
        "1.25",
        "2,000"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Power factor is true power ÷ apparent power: 1,600 ÷ 2,000 = 0.8. (a) 0.5 would need 1,000 W of true power. (c) 1.25 is apparent ÷ true, upside down — power factor can never exceed 1. (d) 2,000 is the apparent power in VA, not the power factor."
    },
    {
      "q": "A purely resistive load has a power factor of:",
      "choices": [
        "0",
        "0.5",
        "1",
        "2"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A resistive load has no reactive power, so S = P and the power factor is 1. (a) 0 is a purely reactive load. (b) 0.5 is a 60° phase angle. (d) Power factor cannot exceed 1."
    },
    {
      "q": "Reactive power is needed because:",
      "choices": [
        "It does useful work",
        "Motors and transformers need magnetic fields, which are built with reactive power",
        "It heats the wires",
        "It makes the bill bigger"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Magnetic fields are built and collapsed with reactive power. (a) Reactive power does no useful work. (c) Heating the wires is a cost of reactive current, not its purpose. (d) The bill is for true power, not reactive power."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Power in AC Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> True power works, reactive power enables, apparent power is what the source must deliver.</p>\n<p><strong>Three powers:</strong> True P (watts) · Reactive Q (VAR) · Apparent S (VA).</p>\n<p><strong>Triangle:</strong> S = √(P² + Q²) · P = S × cos θ · Q = S × sin θ · Power factor = cos θ = P ÷ S.</p>\n<p><strong>Also:</strong> P = I² × R · Q = I² × X · S = I² × Z.</p>\n<p><strong>Loads:</strong> Inductive = lagging (current lags) · Capacitive = leading (current leads) · Inductive and capacitive VARs cancel.</p>\n<p><strong>Self-check:</strong> Solve a 120 V, 10 A, 45° circuit: S, P, Q, and check the triangle, without looking.</p>\n"
};
