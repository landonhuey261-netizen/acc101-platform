// egr104 - Module 8: Electrical Power & Energy
module.exports = {
  "number": 8,
  "slug": "power-and-energy",
  "title": "Electrical Power & Energy",
  "estTime": "3–4 hours",
  "objectives": [
    "Define power as the rate of using energy, in watts.",
    "Use P = V × I, P = I² × R, and P = V² ÷ R, and pick the right form for the data you have.",
    "Work out the energy used in kilowatt-hours and its cost.",
    "Explain why power lost in a wire is I² × R, and why high voltage is used for long-distance power.",
    "Choose a resistor power rating and a fuse size from a calculated power or current."
  ],
  "sections": [
    {
      "heading": "Power: How Fast Energy Is Used",
      "html": "<p>Power is the rate at which energy is used or transferred, measured in watts (W). One watt is one joule per second. A 60 W bulb uses 60 joules of energy every second; a 1,200 W heater uses twenty times as much, which is why it gets far hotter. Power is not the same as energy: power is how fast, energy is how much in total. A small load left on for a long time can use more energy than a big load used briefly.</p>\n<p>In a DC circuit, power is voltage times current: <strong>P = V × I</strong>. A 120 V circuit carrying 5 A delivers 120 × 5 = 600 W. Combined with Ohm's law, that gives two more forms: <strong>P = I² × R</strong> and <strong>P = V² ÷ R</strong>. All three say the same thing — pick the one that matches the numbers you actually have.</p>\n"
    },
    {
      "heading": "Worked Examples: Three Forms, One Answer",
      "html": "<p>A 12 V battery drives 2 A through a resistor. P = V × I = 12 × 2 = 24 W. The resistor is 6 Ω (12 ÷ 2), so check with the other forms: P = I² × R = 4 × 6 = 24 W ✓; P = V² ÷ R = 144 ÷ 6 = 24 W ✓. All three agree, as they must.</p>\n<p>A second example: a 120 V heater with a resistance of 144 Ω draws I = 120 ÷ 144 ≈ 0.833 A, and P = V² ÷ R = 14,400 ÷ 144 = 100 W. Or a wire carrying 2 A through 10 Ω wastes P = I² × R = 4 × 10 = 40 W as heat — which is why wires that carry big currents must be thick: the wasted power grows with the square of the current, so doubling the current quadruples the waste heat.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> P = V × I is the master form. I²R is the form for heat lost in a wire or resistor. V²/R is the form when you know the voltage across a fixed resistance.</div></p>\n"
    },
    {
      "heading": "Energy and the Electricity Bill",
      "html": "<p>Energy is power multiplied by time: E = P × t. The unit on your bill is the kilowatt-hour (kWh): one kilowatt (1,000 W) used for one hour. A 100 W bulb left on for 5 hours uses 100 × 5 = 500 Wh = 0.5 kWh. At 15 cents per kWh, that costs 0.5 × $0.15 = $0.075 — seven and a half cents. A 1,200 W heater for the same 5 hours uses 6 kWh and costs $0.90.</p>\n<p>That is also why standby power matters: a device drawing 5 W all day, every day uses 5 × 24 × 365 = 43,800 Wh = 43.8 kWh a year — about $6.57 at 15 cents per kWh — for doing nothing at all.</p>\n"
    },
    {
      "heading": "Why Power Lines Use High Voltage",
      "html": "<p>Power lost in a wire is I² × R, and the resistance of a long wire is fixed by its length and thickness. The only way to cut the loss is to cut the current — and since the power to be delivered is P = V × I, the same power at ten times the voltage needs one tenth the current, which cuts the I²R loss by a factor of one hundred. That is why transmission lines run at hundreds of thousands of volts and a transformer steps the voltage back down near your home.</p>\n<p>The same idea matters in small circuits: a thin wire carrying a big current gets hot because of I²R loss. If a wire is getting warm, either the current is too big for it or the wire is too thin — in either case, stop and fix it before it becomes a fire risk.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Power (watts) is the rate of using energy; energy (kWh) is power × time.</li><li>P = V × I; P = I² × R; P = V² ÷ R — pick the form that fits your data.</li><li>120 V × 5 A = 600 W; 2 A through 10 Ω wastes 40 W as heat.</li><li>Energy in kWh = watts × hours ÷ 1,000; cost = kWh × price per kWh.</li><li>Wire loss is I² × R, so high voltage and low current win for long distances.</li><li>Choose resistor ratings and fuses with a safety margin above the calculated value.</li></ul></p>\n<p><strong>Common mistake:</strong> Confusing watts and watt-hours. A 100 W bulb is a power rating; 0.5 kWh is the energy it uses in 5 hours. Saying “it uses 100 watts per hour” is wrong — it uses 100 watts, and 100 watt-hours per hour.</p>\n<p><strong>Common mistake:</strong> Using P = V × I with the battery voltage when the question asks for the power in one resistor. Use that resistor's own voltage drop (or I² × R), not the whole supply.</p>\n<p><strong>Ready check:</strong> If you can find the power in a resistor three ways and get the same answer, and work out the cost of running a 100 W bulb for 5 hours, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Power",
      "def": "The rate at which energy is used or transferred, measured in watts (W); 1 W = 1 joule per second."
    },
    {
      "term": "Watt (W)",
      "def": "The unit of power."
    },
    {
      "term": "P = V × I",
      "def": "Power equals voltage times current — the master form for DC circuits."
    },
    {
      "term": "P = I² × R",
      "def": "Power dissipated in a resistance, from the current through it — the form for heat loss."
    },
    {
      "term": "P = V² ÷ R",
      "def": "Power dissipated in a resistance, from the voltage across it."
    },
    {
      "term": "Energy",
      "def": "Power multiplied by time; what you actually pay for."
    },
    {
      "term": "Kilowatt-hour (kWh)",
      "def": "The billing unit of energy: 1,000 W used for one hour."
    },
    {
      "term": "Joule (J)",
      "def": "The unit of energy; one watt for one second is one joule."
    },
    {
      "term": "I²R loss",
      "def": "Power wasted as heat in a wire or resistor, growing with the square of the current."
    },
    {
      "term": "Efficiency",
      "def": "Useful power out divided by power in, usually given as a percentage."
    },
    {
      "term": "Fuse rating",
      "def": "The current at which a fuse melts and breaks the circuit; chosen just above the normal current."
    },
    {
      "term": "Standby power",
      "def": "Power a device keeps drawing while switched off but plugged in."
    }
  ],
  "video": {
    "title": "Electronics Tutorial #2 - Power - the relationship with Voltage and Current | MJLorton",
    "embedUrl": "https://www.youtube.com/embed/naTnyUMtPhs",
    "note": "Power from first principles: P = V × I worked with real numbers, including a 220 V × 10 A = 2,200 W example.",
    "more": [
      {
        "title": "What is Electric Current? (Simple Explanation for Beginners) | Afrotechmods",
        "url": "https://www.youtube.com/watch?v=XGyrjxPaIm4"
      },
      {
        "title": "Ohm's Law | MEP Academy",
        "url": "https://www.youtube.com/watch?v=uprC1xHwgaU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 120 V circuit carries 5 A. Find the power. Then find the energy used in 3 hours, in kWh, and its cost at $0.15 per kWh.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = V × I = 120 × 5 = 600 W. Step 2: Energy = 600 W × 3 h = 1,800 Wh = 1.8 kWh. Step 3: Cost = 1.8 × $0.15 = $0.27.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A resistor of 10 Ω carries 2 A. Find the power it dissipates, two ways, and confirm they agree.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = I² × R = 4 × 10 = 40 W. Step 2: The voltage across it is V = I × R = 20 V, so P = V × I = 20 × 2 = 40 W ✓. Step 3: Both forms agree at 40 W.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 100 W bulb is left on for 5 hours. How much energy does it use, and what does it cost at $0.15 per kWh?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Energy = 100 W × 5 h = 500 Wh = 0.5 kWh. Step 2: Cost = 0.5 × $0.15 = $0.075, about eight cents. Step 3: Note the difference: 100 W is the power, 0.5 kWh is the energy.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A wire with 0.5 Ω resistance carries 10 A. How much power is lost as heat in the wire? What if the current doubles to 20 A?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = I² × R = 100 × 0.5 = 50 W. Step 2: At 20 A: P = 400 × 0.5 = 200 W. Step 3: Doubling the current quadruples the loss (50 W → 200 W) because loss grows with the square of the current.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 12 V battery supplies a series circuit that draws 0.2 A. How much power does the battery deliver? The circuit has resistors of 10 Ω, 20 Ω, and 30 Ω — show the resistor powers add up to the battery power.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Battery power: P = 12 × 0.2 = 2.4 W. Step 2: Resistor powers: 0.2² × 10 = 0.4 W; 0.2² × 20 = 0.8 W; 0.2² × 30 = 1.2 W. Step 3: 0.4 + 0.8 + 1.2 = 2.4 W ✓ — power in equals power out.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A device draws 5 W on standby, 24 hours a day, all year. How much energy does that use in a year, and what does it cost at $0.15 per kWh?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Hours in a year: 24 × 365 = 8,760 h. Step 2: Energy = 5 W × 8,760 h = 43,800 Wh = 43.8 kWh. Step 3: Cost = 43.8 × $0.15 = $6.57 a year — for a device doing nothing.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 120 V circuit carries 5 A. How much power is delivered?",
      "choices": [
        "24 W",
        "115 W",
        "600 W",
        "0.042 W"
      ],
      "answer": 2,
      "explanation": "Correct: (c). P = V × I = 120 × 5 = 600 W. (a) 24 W is 120 ÷ 5 — division instead of multiplication. (b) 115 W is 120 − 5 — subtraction. (d) 0.042 W is 5 ÷ 120 — upside down."
    },
    {
      "q": "A resistor of 10 Ω carries 2 A. How much power does it dissipate?",
      "choices": [
        "20 W",
        "40 W",
        "5 W",
        "200 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P = I² × R = 4 × 10 = 40 W. (a) 20 W is V × I with the wrong voltage (it uses I × R = 20 V, then forgets to multiply by I again — actually 20 × 2 = 40). (c) 5 W is 10 ÷ 2. (d) 200 W is 10 × 20 — mixing the resistance with the voltage."
    },
    {
      "q": "A 100 W bulb is left on for 5 hours. How much energy does it use?",
      "choices": [
        "500 W",
        "0.5 kWh",
        "20 kWh",
        "100 kWh"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Energy = 100 W × 5 h = 500 Wh = 0.5 kWh. (a) 500 W confuses power with energy — the unit must be Wh or kWh. (c) 20 kWh is 100 ÷ 5. (d) 100 kWh is 100 × 1,000 — the wrong conversion."
    },
    {
      "q": "If the current through a wire doubles, the I²R power lost in the wire…",
      "choices": [
        "stays the same",
        "doubles",
        "quadruples",
        "halves"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Loss is I² × R, so doubling I multiplies the loss by 2² = 4. (a) is wrong: loss depends on current. (b) would be true if loss were I × R. (d) is backwards."
    },
    {
      "q": "Which formula gives the power in a resistor when you know the voltage across it and its resistance?",
      "choices": [
        "P = V × I",
        "P = I² × R",
        "P = V² ÷ R",
        "P = V + I"
      ],
      "answer": 2,
      "explanation": "Correct: (c). With V and R known, P = V² ÷ R is the direct form. (a) needs the current, which you do not have. (b) needs the current too. (d) is not a power formula at all."
    },
    {
      "q": "A heater uses 6 kWh in 5 hours. What is its power?",
      "choices": [
        "30 kW",
        "1.2 kW",
        "0.83 kW",
        "11 kW"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Power = energy ÷ time = 6 ÷ 5 = 1.2 kW. (a) 30 kW multiplies instead of dividing. (c) 0.83 kW is 5 ÷ 6 — upside down. (d) 11 kW adds the numbers."
    },
    {
      "q": "Why do long-distance power lines use very high voltage?",
      "choices": [
        "High voltage makes the wires lighter",
        "The same power at higher voltage needs less current, so I²R losses fall sharply",
        "High voltage is safer for people",
        "Transformers only work at high voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P = V × I, so higher V means lower I for the same power, and loss is I² × R — a tenth the current means a hundredth the loss. (a) is wrong: voltage does not change wire weight. (c) is wrong: high voltage is more dangerous, which is why the lines are high up. (d) is wrong: transformers work at many voltages."
    },
    {
      "q": "A resistor dissipates 7.2 W and is rated 5 W. What should you do?",
      "choices": [
        "Use it anyway — ratings are only a guide",
        "Use a resistor with a higher power rating, such as 10 W",
        "Use a smaller resistor",
        "Increase the voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A 5 W resistor dissipating 7.2 W will overheat and fail; use a 10 W resistor (or larger) for a safety margin. (a) is dangerous: ratings are limits, not suggestions. (c) is wrong: a smaller resistance would draw more current and dissipate even more. (d) is wrong: more voltage means more power and more heat."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Electrical Power & Energy: Quick Reference</h3>\n<p><strong>Core idea:</strong> Power is the rate of using energy: P = V × I = I²R = V²/R. Energy is power × time, billed in kWh.</p>\n<p><strong>Key terms:</strong> Power · Watt · P = V × I · P = I²R · Kilowatt-hour · I²R loss.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>P = V × I is the master form; pick the form that fits your data.</li>\n<li>Wire loss is I²R — double the current, quadruple the loss.</li>\n<li>Energy (kWh) = watts × hours ÷ 1,000.</li>\n<li>Watts are power; watt-hours are energy. Do not mix them.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
