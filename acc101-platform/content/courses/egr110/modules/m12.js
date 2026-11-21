// egr110 - Module 12: Power Supplies & Practical Electronics
module.exports = {
  "number": 12,
  "slug": "power-supplies-practical-electronics",
  "title": "Power Supplies & Practical Electronics",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the blocks of a mains power supply: transformer, rectifier, filter, regulator.",
    "Compare linear and switching regulators and work out linear regulator heat.",
    "Explain decoupling capacitors and why they matter.",
    "Describe good wiring, grounding, and safety practice for bench work.",
    "Size a simple power supply for a small project."
  ],
  "sections": [
    {
      "heading": "From Mains to Steady DC",
      "html": "<p>Most electronics runs on low-voltage DC, but the wall socket gives high-voltage AC. A mains power supply converts it in four stages. The transformer steps the voltage down and isolates the circuit from the mains. The rectifier (usually a bridge) turns the AC into pulsing DC. A large smoothing capacitor fills in the gaps. And the regulator holds the output at an exact voltage, such as 5 V, even when the load or the mains voltage changes.</p>\n<p>Isolation matters: the transformer means there is no direct electrical connection between the mains and your circuit, which is what makes a bench supply safe to touch. Never build a mains supply without a transformer, and never open a mains-powered device while it is plugged in. Mains voltage can kill, and no project is worth that risk.</p>\n"
    },
    {
      "heading": "Linear Regulators: Simple, Hot, Quiet",
      "html": "<p>A linear regulator, such as the 7805 (5 V) or the LM317 (adjustable), holds its output steady by burning off the extra voltage as heat. The wasted power is P = (Vin − Vout) × I. With a 9 V input, a 5 V output, and 0.5 A of load, the regulator wastes (9 − 5) × 0.5 = 2.0 W as heat — that needs a heatsink. With a 12 V input and 0.8 A, it wastes (12 − 5) × 0.8 = 5.6 W, which is a lot of heat for a small chip.</p>\n<p>Linear regulators are simple, cheap, and electrically quiet — they add almost no noise to the output, which is why they are still used for sensitive analogue circuits and sensor supplies. Their weakness is efficiency: the bigger the gap between input and output, and the bigger the current, the more heat they waste. As a rule of thumb, keep the input only a few volts above the output, or switch to a switching regulator.</p>\n"
    },
    {
      "heading": "Switching Regulators and Decoupling",
      "html": "<p>A switching regulator (a buck converter for stepping down) switches a transistor on and off very fast and smooths the result with an inductor and a capacitor. It wastes far less power than a linear regulator — typically 85–95% efficient — so it stays cool even with a big voltage drop. The trade-off is electrical noise from the switching, and a more complex circuit. For battery-powered projects and anything drawing real current, switching regulators are the standard choice.</p>\n<p>Whatever regulator you use, decoupling capacitors are essential. A small ceramic capacitor (typically 100 nF) placed right next to each chip's power pins supplies short bursts of current when the chip switches, keeping its supply voltage steady. Without decoupling, digital circuits glitch, reset randomly, or pick up noise. A larger electrolytic capacitor (10–100 µF) at the power input handles slower changes. Decoupling is cheap insurance — always include it.</p>\n"
    },
    {
      "heading": "Bench Practice: Wiring, Ground, and Safety",
      "html": "<p>Good wiring is a skill. Keep power and ground wires short and thick enough for the current; route signal wires away from noisy switching wires; use a single common ground point so that return currents do not create voltage drops between parts of the circuit. Colour-code your wires (red for positive, black for ground) and label anything unusual. A tidy circuit is easier to debug and far less likely to have a short.</p>\n<p>Safety first, always: check your wiring before applying power; start with the supply current-limited if you can; feel for hot components and switch off immediately if something gets hot; never work on mains wiring while it is plugged in; and keep one hand in your pocket when probing a live circuit above 50 V. A multimeter is your best friend — measure voltages before assuming them, and measure twice when the reading surprises you.</p>\n"
    },
    {
      "heading": "Sizing a Supply and Common Mistakes",
      "html": "<p>To size a supply, add up the current every part needs, add a margin of about 25%, and pick a supply that can deliver at least that much at the right voltage. Example: a microcontroller (50 mA), three sensors (30 mA total), and an LED strip (400 mA) need 480 mA — pick a 5 V supply rated at least 600 mA. Check the regulator heat with P = (Vin − Vout) × I, and add a heatsink if the answer is above about 1 W.</p>\n<p><p><strong>Takeaways:</strong><ul><li>A mains supply is transformer, rectifier, smoothing capacitor, regulator.</li><li>A linear regulator wastes P = (Vin − Vout) × I as heat.</li><li>Switching regulators are efficient but noisier; linear regulators are quiet but hot.</li><li>Decoupling capacitors (100 nF per chip) keep supplies steady and stop glitches.</li><li>Size the supply with a 25% margin, and respect mains safety always.</li></ul></p>\n<p><strong>Common mistake:</strong> Using a linear regulator with a big input-output gap and a big current, then wondering why it overheats. Work out P = (Vin − Vout) × I first — if it is over about 1 W, add a heatsink or use a switching regulator.</p>\n<p><strong>Common mistake:</strong> Skipping decoupling capacitors. Random resets and glitches in a digital circuit are very often a missing 100 nF capacitor.</p>\n<p><strong>Ready check:</strong> If you can describe the four supply stages, work out regulator heat, and explain decoupling, you have this module — and this course.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Power supply",
      "def": "A circuit that converts mains AC or a battery voltage into the steady DC voltage a circuit needs."
    },
    {
      "term": "Transformer",
      "def": "A device that steps AC voltage up or down and isolates the output from the mains."
    },
    {
      "term": "Rectifier",
      "def": "A circuit of diodes that converts AC into pulsing DC."
    },
    {
      "term": "Smoothing capacitor",
      "def": "A large capacitor that fills in the gaps between rectifier pulses, steadying the DC."
    },
    {
      "term": "Linear regulator",
      "def": "A regulator, such as the 7805, that holds its output steady by burning off excess voltage as heat."
    },
    {
      "term": "Switching regulator",
      "def": "A regulator, such as a buck converter, that switches rapidly to convert voltage efficiently, with little heat."
    },
    {
      "term": "Buck converter",
      "def": "A switching regulator that steps a higher DC voltage down to a lower one efficiently."
    },
    {
      "term": "Decoupling capacitor",
      "def": "A small capacitor (typically 100 nF) placed next to a chip's power pins to keep its supply steady."
    },
    {
      "term": "Ripple",
      "def": "The leftover wobble on a DC supply voltage, reduced by smoothing and regulation."
    },
    {
      "term": "Isolation",
      "def": "Having no direct electrical connection between two circuits, as a transformer provides from the mains."
    },
    {
      "term": "Current limit",
      "def": "A power supply feature that caps the current it delivers, protecting a circuit under test from damage."
    },
    {
      "term": "Ground",
      "def": "The common 0 V reference point that all voltages in a circuit are measured against."
    },
    {
      "term": "Heatsink",
      "def": "A piece of metal attached to a hot component to carry heat away into the air."
    },
    {
      "term": "Electrolytic capacitor",
      "def": "A large-value polarised capacitor used for smoothing and bulk decoupling; its polarity must be correct."
    }
  ],
  "video": {
    "title": "How to Choose A Power Supply for Beginners",
    "embedUrl": "https://www.youtube.com/embed/SS7P63fLE_8",
    "note": "How to pick a bench supply: voltage, current, and the features that matter for a beginner's bench. Watch it, then size the supply for the worked example in this module's assignment.",
    "more": [
      {
        "title": "How MOSFET Transistor Works | What It Can do | How to Test It ✔",
        "url": "https://www.youtube.com/watch?v=debfZWIDkgQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A linear regulator takes 9 V in and gives 5 V out at 0.5 A. How much power does it waste as heat? Show the formula.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = (Vin − Vout) × I = (9 − 5) × 0.5. Step 2: 4 × 0.5 = 2.0 W. Step 3: 2 W needs a heatsink on a small regulator. A good answer shows the formula and the 2.0 W result.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same regulator now takes 12 V in and supplies 0.8 A at 5 V out. Work out the wasted power and say what it means for cooling.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = (12 − 5) × 0.8 = 7 × 0.8 = 5.6 W. Step 2: 5.6 W is a lot of heat — a substantial heatsink is essential, and a switching regulator would be a better choice. A good answer gives 5.6 W and the cooling judgement.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A project needs 5 V and draws: microcontroller 50 mA, three sensors 30 mA total, LED strip 400 mA. Work out the total current and the minimum supply rating with a 25% margin.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Total = 50 + 30 + 400 = 480 mA. Step 2: With a 25% margin: 480 × 1.25 = 600 mA. Step 3: Pick a 5 V supply rated at least 600 mA (a 1 A supply would be comfortable). A good answer shows the sum and the margin.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A digital circuit resets randomly. The power supply measures a steady 5 V on a multimeter. Suggest the most likely cause and the fix, and explain why the meter does not show the problem.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The likely cause is missing decoupling capacitors: when chips switch, they draw short current spikes that dip the supply for microseconds. Step 2: A multimeter is too slow to see microsecond dips, so it reads a steady 5 V. Step 3: The fix is a 100 nF ceramic capacitor right next to each chip's power pins, plus a larger electrolytic at the power input. A good answer names decoupling and explains the meter's slowness.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Compare a linear regulator and a switching regulator for two jobs: (a) powering a sensitive temperature sensor circuit at 100 mA, and (b) powering a 3 A motor driver from a 12 V battery. Justify each choice.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: For the sensor circuit, a linear regulator is better — it is quiet, and at 100 mA the heat is small, so its clean output matters more than its efficiency. Step 2: For the motor driver, a switching regulator is better — a linear regulator dropping 12 V to 5 V at 3 A would waste (12 − 5) × 3 = 21 W, while a switching regulator wastes only a watt or two. A good answer justifies both choices with the heat maths.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> List the four stages of a mains power supply in order, and for each stage say what would go wrong if it were missing.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Transformer — without it, the circuit is not isolated from the mains and the voltage is far too high. Step 2: Rectifier — without it, the output is still AC and DC circuits cannot use it. Step 3: Smoothing capacitor — without it, the DC pulses from near zero to peak 100 or 120 times a second. Step 4: Regulator — without it, the output voltage changes with the load and the mains, and sensitive circuits misbehave. A good answer lists all four stages with a consequence for each.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What are the four stages of a mains power supply, in order?",
      "choices": [
        "Regulator, rectifier, transformer, capacitor",
        "Transformer, rectifier, smoothing capacitor, regulator",
        "Capacitor, transformer, regulator, rectifier",
        "Rectifier, transformer, regulator, capacitor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The transformer steps down and isolates, the rectifier makes pulsing DC, the capacitor smooths it, and the regulator holds it steady. (a) is in the wrong order. (c) starts with the capacitor, which is wrong. (d) puts the rectifier before the transformer, which is wrong."
    },
    {
      "q": "A linear regulator takes 9 V in, gives 5 V out, at 0.5 A. How much power does it waste as heat?",
      "choices": [
        "0.5 W",
        "2.0 W",
        "4.5 W",
        "9.0 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P = (9 − 5) × 0.5 = 2.0 W. (a) is just the current, not the power. (c) is 9 × 0.5, forgetting to subtract the output voltage. (d) is the input voltage, not a power."
    },
    {
      "q": "A linear regulator takes 12 V in, gives 5 V out, at 0.8 A. How much power is wasted?",
      "choices": [
        "4.0 W",
        "5.6 W",
        "9.6 W",
        "0.8 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P = (12 − 5) × 0.8 = 5.6 W. (a) forgets the current is 0.8 A. (c) is 12 × 0.8, forgetting to subtract the output voltage. (d) is just the current."
    },
    {
      "q": "Why is a switching regulator usually chosen over a linear regulator for a high-current job?",
      "choices": [
        "Because it is electrically quieter",
        "Because it wastes far less power as heat",
        "Because it has fewer parts",
        "Because it needs no capacitor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A switching regulator is typically 85–95% efficient, so it stays cool where a linear regulator would waste watts as heat. (a) is wrong: switching regulators are noisier. (c) is wrong: they have more parts. (d) is wrong: they need inductors and capacitors."
    },
    {
      "q": "What is the job of a decoupling capacitor placed next to a chip's power pins?",
      "choices": [
        "To store energy for the whole circuit",
        "To supply short bursts of current when the chip switches, keeping its supply voltage steady",
        "To block all DC",
        "To increase the supply voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A 100 nF capacitor next to each chip handles fast current spikes and stops glitches and resets. (a) is wrong: bulk storage is the big capacitor's job. (c) is wrong: a decoupling capacitor passes AC noise to ground, it does not block DC. (d) is wrong: it cannot raise the voltage."
    },
    {
      "q": "What does the transformer in a mains power supply do?",
      "choices": [
        "It converts AC to DC",
        "It steps the voltage down and isolates the circuit from the mains",
        "It smooths the output",
        "It regulates the voltage to exactly 5 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The transformer steps the voltage down and provides isolation from the mains. (a) is the rectifier's job. (c) is the smoothing capacitor's job. (d) is the regulator's job."
    },
    {
      "q": "A project draws 480 mA at 5 V. With a 25% safety margin, what supply rating should you choose at minimum?",
      "choices": [
        "480 mA",
        "500 mA",
        "600 mA",
        "1,200 mA"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 480 × 1.25 = 600 mA. (a) has no margin at all. (b) has only a 4% margin. (d) is two and a half times the load, more than needed."
    },
    {
      "q": "A digital circuit resets randomly, but a multimeter shows a steady 5 V supply. What is the most likely cause?",
      "choices": [
        "The supply voltage is too high",
        "Missing decoupling capacitors letting short voltage dips occur that the slow meter cannot see",
        "The clock is too slow",
        "The code has a bug in loop()"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Fast current spikes dip the supply for microseconds, which a multimeter cannot show; decoupling capacitors fix it. (a) is wrong: the meter shows the voltage is correct. (c) is wrong: clock speed does not cause random resets. (d) is possible but less likely than the classic decoupling problem when the symptom is random resets."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Power Supplies & Practical Electronics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain the blocks of a mains power supply: transformer, rectifier, filter, regulator.</p>\n<p><strong>Key terms:</strong> Power supply · Transformer · Rectifier · Smoothing capacitor · Linear regulator · Switching regulator · Buck converter · Decoupling capacitor.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain the blocks of a mains power supply: transformer, rectifier, filter, regulator.</li>\n<li>Compare linear and switching regulators and work out linear regulator heat.</li>\n<li>Explain decoupling capacitors and why they matter.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
