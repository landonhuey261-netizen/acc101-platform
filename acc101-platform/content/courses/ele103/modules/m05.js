// ele103 - Module 5: Parallel RLC & Resonance
module.exports = {
  "number": 5,
  "slug": "parallel-rlc-and-resonance",
  "title": "Parallel RLC & Resonance",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe a parallel RLC circuit and how current divides in it.",
    "Calculate total impedance in a parallel RLC circuit using admittance.",
    "Explain parallel resonance and why impedance is maximum at resonance.",
    "Calculate the resonant frequency and the bandwidth of a parallel RLC circuit.",
    "Describe where parallel resonance is used and where it is a hazard."
  ],
  "sections": [
    {
      "heading": "What a Parallel RLC Circuit Is",
      "html": "<p>A <strong>parallel RLC circuit</strong> has a resistor, an inductor, and a capacitor connected across the same two points, so they all share the same voltage. The total current is the vector sum of the branch currents: the resistor's current is in phase with the voltage, the inductor's current lags by 90°, and the capacitor's current leads by 90°. The inductor and capacitor currents are 180° apart, so they partly cancel each other, and the net reactive current is the difference between them.</p>\n<p>Parallel RLC circuits are analyzed with <strong>admittance (Y)</strong>, the reciprocal of impedance, measured in siemens. Conductance (G = 1 ÷ R) and susceptance (B = 1 ÷ X) add in parallel the way resistance adds in series: Y = √(G² + B²), where B = B<sub>C</sub> − B<sub>L</sub>. The total impedance is then Z = 1 ÷ Y. The method mirrors the series circuit, with the roles of voltage and current swapped: in series, voltage divides; in parallel, current divides.</p>\n<div class=\"callout\"><strong>Key idea:</strong> In parallel, work with admittance — the reciprocal of impedance. Conductances and susceptances add in parallel, just as resistances add in series.</div>"
    },
    {
      "heading": "Parallel Resonance",
      "html": "<p><strong>Parallel resonance</strong> happens when the inductor's and capacitor's susceptances are equal, so the net reactive current is zero. The circuit's impedance rises to its maximum — just the resistance — and the total current from the source falls to its minimum, I = E ÷ R. But the currents circulating between the inductor and the capacitor can be much larger than the source current: energy sloshes back and forth between the magnetic field and the electric field, and the circulating current is limited only by the resistance.</p>\n<p>The resonant frequency is the same as for series resonance: f<sub>0</sub> = 1 ÷ (2π√(LC)). The difference is the behavior: series resonance is minimum impedance and maximum current; parallel resonance is maximum impedance and minimum source current. The two are mirror images, and the trade uses both — series resonance where a sharp current peak is wanted, parallel resonance where a sharp impedance peak is wanted.</p>"
    },
    {
      "heading": "Bandwidth & Quality Factor",
      "html": "<p>Resonance is not a single point — it is a band. The <strong>bandwidth</strong> is the range of frequencies around resonance where the response is at least 70.7% of its peak, and it is set by the <strong>quality factor (Q)</strong>: a high-Q circuit has a narrow bandwidth and a sharp peak; a low-Q circuit has a wide bandwidth and a flat peak. For a parallel RLC circuit, Q = R ÷ X at resonance, and bandwidth = f<sub>0</sub> ÷ Q.</p>\n<p>Q also tells how much bigger the circulating current is than the source current at resonance: the circulating current is Q times the source current. A high-Q parallel circuit with Q = 50 has a circulating current 50 times the source current — which is why a parallel resonant circuit can have large currents in its branches while drawing almost nothing from the source, and why its components must be rated for those circulating currents.</p>"
    },
    {
      "heading": "Uses & Hazards of Resonance",
      "html": "<p>Parallel resonance is used on purpose in radio tuners and filters, where a circuit must respond to one frequency and ignore the rest, and in power-factor correction, where a capacitor is placed in parallel with an inductive load so the two cancel at line frequency. It is a hazard in power systems when a capacitor bank and a transformer or motor inductance happen to resonate at a harmonic frequency: the circulating currents can overheat the capacitor, and the voltages can rise far above the system's rating.</p>\n<p>The electrician's takeaway is practical: when a capacitor is added to a system — for power-factor correction or any other reason — the combination of that capacitor with the system's inductance must be checked for resonance, especially at harmonic frequencies. A capacitor that fixes the power factor at 60 Hz can create a resonance problem at 300 Hz, and the problem shows up as overheated capacitors and tripped breakers.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Parallel RLC: same voltage across all branches; branch currents add as vectors; inductor and capacitor currents partly cancel.</li>\n<li>Admittance Y = √(G² + B²), with G = 1 ÷ R and B = B<sub>C</sub> − B<sub>L</sub>; Z = 1 ÷ Y.</li>\n<li>Parallel resonance: susceptances equal, net reactive current zero, impedance maximum, source current minimum.</li>\n<li>Resonant frequency: f<sub>0</sub> = 1 ÷ (2π√(LC)) — the same as series resonance.</li>\n<li>Bandwidth = f<sub>0</sub> ÷ Q; Q = R ÷ X at resonance; circulating current is Q times the source current.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating parallel resonance like series resonance. Series resonance is minimum impedance and maximum current; parallel resonance is maximum impedance and minimum source current — they are opposites.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting the circulating current. At parallel resonance the source current is small, but the current sloshing between the inductor and capacitor can be Q times larger — and the components must be rated for it.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain parallel resonance, calculate f_0, and describe bandwidth and Q, you have this module. Module 6 covers power in AC circuits.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Parallel RLC circuit",
      "def": "A resistor, inductor, and capacitor connected across the same two points."
    },
    {
      "term": "Admittance (Y)",
      "def": "The reciprocal of impedance, measured in siemens; Y = √(G² + B²) in parallel."
    },
    {
      "term": "Conductance (G)",
      "def": "The reciprocal of resistance, 1 ÷ R, measured in siemens."
    },
    {
      "term": "Susceptance (B)",
      "def": "The reciprocal of reactance, 1 ÷ X, measured in siemens."
    },
    {
      "term": "Siemens (S)",
      "def": "The unit of admittance, conductance, and susceptance."
    },
    {
      "term": "Parallel resonance",
      "def": "The condition where the inductor's and capacitor's susceptances are equal; impedance is maximum and source current is minimum."
    },
    {
      "term": "Resonant frequency (f_0)",
      "def": "The frequency at which X_L = X_C; f_0 = 1 ÷ (2π√(LC))."
    },
    {
      "term": "Bandwidth",
      "def": "The range of frequencies around resonance where the response is at least 70.7% of its peak."
    },
    {
      "term": "Quality factor (Q)",
      "def": "A measure of a resonant circuit's sharpness; Q = R ÷ X at resonance for a parallel circuit."
    },
    {
      "term": "Circulating current",
      "def": "The current flowing between the inductor and capacitor at parallel resonance; Q times the source current."
    },
    {
      "term": "Net reactive current",
      "def": "The difference between the inductor's and capacitor's currents in a parallel circuit."
    },
    {
      "term": "Vector sum",
      "def": "Adding quantities that have both magnitude and direction, such as AC currents."
    },
    {
      "term": "Harmonic frequency",
      "def": "A multiple of the line frequency (120 Hz, 180 Hz, 300 Hz, and so on) where resonance can occur."
    },
    {
      "term": "Tuner",
      "def": "A resonant circuit that selects one frequency and rejects the rest."
    },
    {
      "term": "Filter",
      "def": "A circuit that passes some frequencies and blocks others."
    }
  ],
  "video": {
    "title": "Resonance in Parallel RLC Circuit Explained",
    "embedUrl": "https://www.youtube.com/embed/mt3WwcQuJSE",
    "note": "A parallel RLC resonance walkthrough. As you watch, note the difference between series and parallel resonance: which quantity is maximum in each?",
    "more": [
      {
        "title": "Parallel RLC circuit and its resonance",
        "url": "https://www.youtube.com/watch?v=wNeETTbwSM0"
      },
      {
        "title": "Series and Parallel RLC Resonance circuit",
        "url": "https://www.youtube.com/watch?v=gfTctlkCwrU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In a parallel RLC circuit, the resistor carries 3 A, the inductor carries 4 A, and the capacitor carries 4 A. What is the total current from the source?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The inductor and capacitor currents are 180° apart, so they cancel: 4 − 4 = 0. Step 2: The net reactive current is zero. Step 3: The total current is just the resistor's current, 3 A — the circuit is at resonance.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A parallel RLC circuit has L = 0.1 H and C = 100 μF. What is its resonant frequency?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: f_0 = 1 ÷ (2π√(LC)). Step 2: √(0.1 × 0.0001) = √(0.00001) ≈ 0.00316. Step 3: f_0 = 1 ÷ (2 × 3.1416 × 0.00316) ≈ 50.3 Hz.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> At parallel resonance, is the impedance at its maximum or its minimum? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At parallel resonance the impedance is at its maximum. Step 2: The reactive currents cancel, so the source sees only the resistance. Step 3: The source current is at its minimum, E ÷ R.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A parallel resonant circuit has Q = 50 and a source current of 2 A at resonance. What is the circulating current?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Circulating current = Q × source current. Step 2: 50 × 2 = 100 amps. Step 3: The inductor and capacitor each carry about 100 A, even though the source supplies only 2 A.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A parallel resonant circuit has f_0 = 1,000 Hz and Q = 10. What is its bandwidth?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Bandwidth = f_0 ÷ Q. Step 2: 1,000 ÷ 10 = 100 Hz. Step 3: The bandwidth is 100 Hz.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why can adding a power-factor correction capacitor create a resonance hazard?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The capacitor and the system's inductance can resonate at a harmonic frequency. Step 2: At resonance the circulating currents are large and the voltages can rise. Step 3: The result is overheated capacitors and tripped breakers — so the combination must be checked for resonance.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a parallel RLC circuit, the branch currents:",
      "choices": [
        "Are all in phase",
        "Add as vectors; the inductor and capacitor currents partly cancel",
        "Are all equal",
        "Are all zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The inductor and capacitor currents are 180° apart and partly cancel. (a) Only the resistor's current is in phase with the voltage. (c) Branch currents differ with the branch impedances. (d) Branch currents flow in a parallel circuit."
    },
    {
      "q": "Admittance is:",
      "choices": [
        "The same as impedance",
        "The reciprocal of impedance, measured in siemens",
        "The same as resistance",
        "Measured in ohms"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Admittance is 1 ÷ Z, in siemens. (a) Admittance is the reciprocal of impedance. (c) Admittance is the reciprocal of impedance, not resistance. (d) Siemens, not ohms."
    },
    {
      "q": "At parallel resonance, the impedance is:",
      "choices": [
        "At its minimum",
        "At its maximum",
        "Zero",
        "Equal to the reactance"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Parallel resonance gives maximum impedance and minimum source current. (a) Minimum impedance is series resonance. (c) Impedance is not zero. (d) Impedance equals the resistance at resonance."
    },
    {
      "q": "The resonant frequency of an RLC circuit is:",
      "choices": [
        "f_0 = 2π√(LC)",
        "f_0 = 1 ÷ (2π√(LC))",
        "f_0 = √(LC)",
        "f_0 = 1 ÷ (LC)"
      ],
      "answer": 1,
      "explanation": "Correct: (b). f_0 = 1 ÷ (2π√(LC)). (a) That is the reciprocal of the formula. (c) √(LC) alone is not the frequency. (d) 1 ÷ (LC) is missing the 2π and the square root."
    },
    {
      "q": "Bandwidth equals:",
      "choices": [
        "f_0 × Q",
        "f_0 ÷ Q",
        "Q ÷ f_0",
        "f_0 + Q"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Bandwidth = f_0 ÷ Q. (a) f_0 × Q is not the bandwidth. (c) Q ÷ f_0 has the wrong units. (d) Adding frequency and Q makes no sense."
    },
    {
      "q": "At parallel resonance with Q = 50 and a source current of 2 A, the circulating current is about:",
      "choices": [
        "2 A",
        "25 A",
        "100 A",
        "1,000 A"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Circulating current = Q × source current = 50 × 2 = 100 A. (a) 2 A is the source current. (b) 25 A is Q ÷ 2. (d) 1,000 A is far too high."
    },
    {
      "q": "A high-Q resonant circuit has:",
      "choices": [
        "A wide bandwidth and a flat peak",
        "A narrow bandwidth and a sharp peak",
        "No resonance",
        "A low impedance at resonance"
      ],
      "answer": 1,
      "explanation": "Correct: (b). High Q means a narrow bandwidth and a sharp peak. (a) A wide bandwidth is a low-Q circuit. (c) High Q means a strong resonance. (d) Impedance at parallel resonance is high regardless of Q."
    },
    {
      "q": "Parallel resonance is used on purpose in:",
      "choices": [
        "Radio tuners and filters",
        "Light switches",
        "Extension cords",
        "Batteries"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Tuners and filters use parallel resonance to select one frequency. (b) Light switches do not use resonance. (c) Extension cords do not use resonance. (d) Batteries are DC devices."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Parallel RLC & Resonance: Quick Reference</h3>\n<p><strong>Core idea:</strong> In parallel, work with admittance — conductances and susceptances add in parallel, just as resistances add in series.</p>\n<p><strong>Parallel RLC:</strong> Same voltage across all branches · Branch currents add as vectors · Inductor and capacitor currents partly cancel.</p>\n<p><strong>Admittance:</strong> Y = √(G² + B²) · G = 1 ÷ R · B = B_C − B_L · Z = 1 ÷ Y.</p>\n<p><strong>Parallel resonance:</strong> Susceptances equal · Impedance maximum · Source current minimum · f_0 = 1 ÷ (2π√(LC)).</p>\n<p><strong>Q & bandwidth:</strong> Q = R ÷ X at resonance · Bandwidth = f_0 ÷ Q · Circulating current = Q × source current.</p>\n<p><strong>Watch out:</strong> Series resonance is minimum Z and maximum I; parallel resonance is the opposite.</p>\n<p><strong>Self-check:</strong> Explain parallel resonance, calculate f_0 for L = 0.1 H and C = 100 μF, and state the Q rule, without looking.</p>\n"
};
