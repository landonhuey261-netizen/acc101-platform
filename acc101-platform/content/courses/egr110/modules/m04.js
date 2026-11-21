// egr110 - Module 4: MOSFETs & Power Switching
module.exports = {
  "number": 4,
  "slug": "mosfets-power-switching",
  "title": "MOSFETs & Power Switching",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a MOSFET is different from a BJT.",
    "Tell N-channel and P-channel MOSFETs apart and read their symbols.",
    "Explain gate voltage, threshold voltage, and on-resistance.",
    "Work out the power a MOSFET wastes as heat using P = I²R.",
    "Choose a MOSFET for a switching job and drive its gate safely."
  ],
  "sections": [
    {
      "heading": "A Switch Controlled by Voltage, Not Current",
      "html": "<p>A MOSFET (metal-oxide-semiconductor field-effect transistor) is a transistor controlled by voltage, not current. The gate terminal is insulated from the rest of the device, so almost no current flows into it — it behaves like a tiny capacitor. Apply enough voltage between gate and source and a conducting channel forms between drain and source; remove the voltage and the channel disappears. The three terminals are gate (G), drain (D), and source (S).</p>\n<p>That is the big difference from a BJT: a BJT needs a continuous base current to stay on, while a MOSFET needs only a voltage on its gate and draws almost no steady gate current. That makes MOSFETs the natural choice for switching, and it is why a microcontroller pin — which can only supply a few milliamps — can switch a MOSFET controlling amps of load current, as long as the gate voltage is right.</p>\n"
    },
    {
      "heading": "N-Channel and P-Channel",
      "html": "<p>An N-channel MOSFET turns on when the gate is made positive relative to the source, and it switches the low side of a load: source to ground, drain to the load, load to the supply. This is the most common arrangement and the one you will use most often. A P-channel MOSFET is the mirror image: it turns on when the gate is pulled below the source, and it switches the high side, with the source connected to the supply.</p>\n<p>The threshold voltage, Vth, is the gate-to-source voltage at which the channel just starts to form — typically 1–3 V for a logic-level MOSFET. But “just starting” is not “fully on”: a MOSFET rated at Vth = 2 V may need 5 V or 10 V on the gate to reach its lowest on-resistance. Always read the datasheet's Rds(on) rating at the gate voltage you actually have — a MOSFET driven with 3.3 V from a microcontroller may be barely on, and a barely-on MOSFET gets hot.</p>\n"
    },
    {
      "heading": "On-Resistance and Heat",
      "html": "<p>When a MOSFET is fully on, it behaves like a small resistor between drain and source, called Rds(on) — often only a few hundredths of an ohm. The power it wastes as heat is P = I² × Rds(on). That square on the current is the thing to respect: double the current and the heat quadruples.</p>\n<p>Example: a MOSFET with Rds(on) = 0.05 Ω carrying 4 A wastes P = 4² × 0.05 = 16 × 0.05 = 0.8 W — warm, but fine for a small device. The same MOSFET carrying 10 A would waste 100 × 0.05 = 5 W and need a heatsink. When you choose a MOSFET, the two numbers that matter most are its maximum current and its Rds(on) at your gate voltage — lower Rds(on) means less heat and a cooler, more reliable switch.</p>\n"
    },
    {
      "heading": "Driving the Gate and Protecting the Circuit",
      "html": "<p>Because the gate is a capacitor, it draws a brief surge of current while it charges and discharges — that is the only gate current a MOSFET takes. A small series resistor (typically 10–100 Ω) between the drive and the gate limits that surge and protects the driving pin. A pull-down resistor (typically 10 kΩ) from gate to ground makes sure the MOSFET stays off while the microcontroller is starting up and its pin is not yet driving.</p>\n<p>Switching an inductive load, like a motor or a relay coil, needs one more part: a flyback diode across the load. When the MOSFET turns off, the coil's magnetic field collapses and tries to keep the current flowing, producing a voltage spike that can destroy the MOSFET. The diode gives that spike a safe path. Never switch a motor or relay with a MOSFET and no flyback diode.</p>\n"
    },
    {
      "heading": "MOSFET or BJT? and Common Mistakes",
      "html": "<p>Use a MOSFET when you need to switch significant current efficiently, when the drive can only supply a tiny current, or when low heat matters. Use a BJT when the load current is small, when you need the simplicity of current control, or when the circuit is already designed around one. In modern practice, MOSFETs dominate power switching — they are in almost every motor driver, power supply, and battery circuit you will meet.</p>\n<p><p><strong>Takeaways:</strong><ul><li>A MOSFET is voltage-controlled; its gate draws almost no steady current.</li><li>N-channel switches the low side; P-channel switches the high side.</li><li>Vth is where the channel starts; full turn-on needs a higher gate voltage.</li><li>Heat is P = I² × Rds(on) — current squared, so respect big currents.</li><li>Use a gate resistor, a pull-down resistor, and a flyback diode for inductive loads.</li></ul></p>\n<p><strong>Common mistake:</strong> Driving a standard MOSFET with 3.3 V and expecting it to be fully on. Check Rds(on) at your actual gate voltage — use a logic-level MOSFET for 3.3 V or 5 V drives.</p>\n<p><strong>Common mistake:</strong> Switching a motor or relay without a flyback diode. The turn-off voltage spike can kill the MOSFET on the first switch-off.</p>\n<p><strong>Ready check:</strong> If you can explain the gate, work out MOSFET heat, and wire a safe low-side switch with a flyback diode, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "MOSFET",
      "def": "Metal-oxide-semiconductor field-effect transistor: a voltage-controlled transistor whose gate draws almost no steady current."
    },
    {
      "term": "Gate",
      "def": "The MOSFET control terminal; voltage here turns the conducting channel on and off."
    },
    {
      "term": "Drain",
      "def": "The MOSFET terminal where the main current enters (for an N-channel device), connected toward the load."
    },
    {
      "term": "Source",
      "def": "The MOSFET terminal where the main current leaves (for an N-channel device), usually connected to ground."
    },
    {
      "term": "N-channel MOSFET",
      "def": "A MOSFET that turns on when the gate is positive relative to the source; used as a low-side switch."
    },
    {
      "term": "P-channel MOSFET",
      "def": "A MOSFET that turns on when the gate is pulled below the source; used as a high-side switch."
    },
    {
      "term": "Threshold voltage (Vth)",
      "def": "The gate-to-source voltage at which a MOSFET's channel just starts to form, typically 1–3 V."
    },
    {
      "term": "Rds(on)",
      "def": "The resistance between drain and source when the MOSFET is fully on; lower means less heat."
    },
    {
      "term": "Logic-level MOSFET",
      "def": "A MOSFET designed to turn fully on with only 3.3 V or 5 V on the gate, suitable for microcontroller drives."
    },
    {
      "term": "Low-side switch",
      "def": "A switch placed between the load and ground, as with an N-channel MOSFET."
    },
    {
      "term": "High-side switch",
      "def": "A switch placed between the supply and the load, as with a P-channel MOSFET."
    },
    {
      "term": "Flyback diode",
      "def": "A diode across an inductive load that gives the turn-off voltage spike a safe path, protecting the switch."
    },
    {
      "term": "Gate resistor",
      "def": "A small resistor (typically 10–100 Ω) in series with the gate that limits the charging surge."
    },
    {
      "term": "Pull-down resistor",
      "def": "A resistor (typically 10 kΩ) from gate to ground that keeps a MOSFET off while its drive is not active."
    }
  ],
  "video": {
    "title": "How MOSFET Transistor Works | What It Can do | How to Test It ✔",
    "embedUrl": "https://www.youtube.com/embed/debfZWIDkgQ",
    "note": "A hands-on look at MOSFETs: structure, switching, testing with a meter, and where they are used. Watch the switching demo, then sketch a low-side N-channel switch with a flyback diode and label every part.",
    "more": [
      {
        "title": "Transistors - NPN & PNP - Basic Introduction",
        "url": "https://www.youtube.com/watch?v=AcxDiesy-nI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A MOSFET has Rds(on) = 0.05 Ω and carries 4 A when on. Work out the power it wastes as heat.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = I² × R = 4² × 0.05. Step 2: 4² = 16, and 16 × 0.05 = 0.8 W. Step 3: The MOSFET wastes 0.8 W as heat — warm, but fine without a heatsink. A good answer shows the square and the multiplication.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same MOSFET (Rds(on) = 0.02 Ω) carries 10 A. Work out the wasted power and say whether a heatsink is likely needed.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = I² × R = 10² × 0.02 = 100 × 0.02 = 2.0 W. Step 2: 2 W in a small package will get hot — a small heatsink or a copper pour on the circuit board is a good idea. A good answer gives 2.0 W and the heatsink judgement.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A standard MOSFET has Vth = 2 V and its datasheet rates Rds(on) at Vgs = 10 V. A student drives its gate with 3.3 V from a microcontroller. Explain the problem.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Vth = 2 V is only where the channel starts to form, not where it is fully on. Step 2: At 3.3 V the MOSFET is only partly on, so its real resistance is far higher than the rated Rds(on). Step 3: It will run hot and may fail — the fix is a logic-level MOSFET rated at 3.3 V or 5 V gate drive. A good answer distinguishes Vth from full turn-on.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Sketch in words a low-side N-channel MOSFET switch for a 12 V DC motor driven by a 5 V microcontroller pin. Name every part and its job.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: MOSFET source to ground, drain to the motor, motor to the 12 V supply — the MOSFET sits on the low side. Step 2: Gate to the microcontroller pin through a small gate resistor (about 47 Ω), plus a 10 kΩ pull-down from gate to ground so the motor stays off during start-up. Step 3: A flyback diode across the motor (cathode to 12 V, anode to the drain) to absorb the turn-off spike. A good answer names all four parts and their jobs.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A MOSFET switch carries 5 A with Rds(on) = 0.08 Ω. A student proposes a BJT instead, with Vce(sat) = 0.3 V at 5 A. Compare the power each wastes.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: MOSFET: P = I² × R = 25 × 0.08 = 2.0 W. Step 2: BJT: P = V × I = 0.3 V × 5 A = 1.5 W. Step 3: Here the BJT wastes slightly less — but at higher currents the MOSFET usually wins, and the MOSFET needs no continuous base current. A good answer does both calculations and notes the comparison depends on the numbers, not on a fixed rule.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain in plain words why a MOSFET gate needs a pull-down resistor, and what could happen without one while a microcontroller is starting up.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: During start-up the microcontroller pin is not yet driving, so the gate floats — its voltage is undefined. Step 2: A floating gate can drift high enough to turn the MOSFET on, so the load (a motor, heater, or relay) could switch on by itself. Step 3: A 10 kΩ pull-down to ground holds the gate at 0 V until the pin takes over. A good answer names the floating gate and the unexpected switch-on.</p>"
    }
  ],
  "quiz": [
    {
      "q": "How is a MOSFET mainly different from a BJT?",
      "choices": [
        "A MOSFET is controlled by gate voltage and draws almost no steady gate current; a BJT needs continuous base current",
        "A MOSFET has only two terminals",
        "A MOSFET cannot switch DC",
        "A MOSFET always needs a heatsink"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The MOSFET gate is insulated and voltage-controlled, while a BJT is current-controlled. (b) is wrong: a MOSFET has three terminals — gate, drain, source. (c) is wrong: MOSFETs switch DC all the time. (d) is wrong: whether a heatsink is needed depends on the power wasted."
    },
    {
      "q": "An N-channel MOSFET is normally used as…",
      "choices": [
        "A high-side switch, source to the supply",
        "A low-side switch, source to ground",
        "A replacement for a resistor",
        "An AC-only switch"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An N-channel MOSFET sits between the load and ground. (a) describes a P-channel MOSFET. (c) is wrong: a MOSFET is a switch, not a resistor. (d) is wrong: MOSFETs switch DC routinely."
    },
    {
      "q": "A MOSFET has Rds(on) = 0.05 Ω and carries 4 A. How much power does it waste as heat?",
      "choices": [
        "0.2 W",
        "0.8 W",
        "2.0 W",
        "8.0 W"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P = I² × R = 16 × 0.05 = 0.8 W. (a) 0.2 W comes from using I × R instead of I² × R. (c) 2.0 W is the answer for 10 A at 0.02 Ω. (d) 8.0 W would need much higher current or resistance."
    },
    {
      "q": "A MOSFET with Rds(on) = 0.02 Ω carries 10 A. How much power is wasted?",
      "choices": [
        "0.2 W",
        "0.8 W",
        "2.0 W",
        "20 W"
      ],
      "answer": 2,
      "explanation": "Correct: (c). P = 10² × 0.02 = 100 × 0.02 = 2.0 W. (a) 0.2 W comes from forgetting to square the current. (b) 0.8 W is the answer for 4 A at 0.05 Ω. (d) 20 W would need Rds(on) of 0.2 Ω."
    },
    {
      "q": "What does the threshold voltage Vth of a MOSFET mean?",
      "choices": [
        "The gate voltage at which the channel just starts to form",
        "The maximum voltage the MOSFET can survive",
        "The voltage across the load when the MOSFET is on",
        "The supply voltage the circuit needs"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Vth is where the channel begins to form, typically 1–3 V; full turn-on needs more. (b) describes the maximum drain-source voltage rating. (c) is the load voltage, not a gate property. (d) is the supply voltage, unrelated to Vth."
    },
    {
      "q": "Why is a flyback diode needed when a MOSFET switches a motor or relay coil?",
      "choices": [
        "To make the motor spin faster",
        "To give the voltage spike from the collapsing magnetic field a safe path when the MOSFET turns off",
        "To reduce the supply voltage",
        "To increase the gate voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The coil's field collapse produces a spike that can destroy the MOSFET; the diode absorbs it. (a) is wrong: the diode does not affect motor speed. (c) is wrong: the diode does not change the supply voltage. (d) is wrong: the diode is across the load, not the gate."
    },
    {
      "q": "What is the job of a pull-down resistor on a MOSFET gate?",
      "choices": [
        "To limit the load current",
        "To hold the gate at 0 V so the MOSFET stays off while its drive is not active",
        "To increase Rds(on)",
        "To charge the gate faster"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The pull-down keeps a floating gate at 0 V during start-up. (a) is wrong: the load current is set by the load and supply. (c) is wrong: Rds(on) is a property of the MOSFET. (d) is wrong: a pull-down slows the gate slightly, it does not charge it faster."
    },
    {
      "q": "A student drives a standard MOSFET (Rds(on) rated at Vgs = 10 V) with 3.3 V from a microcontroller. What is the likely result?",
      "choices": [
        "The MOSFET is fully on with its rated Rds(on)",
        "The MOSFET is only partly on, runs hot, and may fail",
        "The MOSFET turns on backwards",
        "Nothing happens at all — 3.3 V cannot turn on any MOSFET"
      ],
      "answer": 1,
      "explanation": "Correct: (b). At 3.3 V the channel is only partly formed, so resistance and heat are far higher than rated. (a) is wrong: full turn-on needs the rated gate voltage. (c) is wrong: MOSFETs do not turn on backwards. (d) is wrong: 3.3 V can start the channel — the problem is partial turn-on, not no turn-on."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — MOSFETs & Power Switching: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain how a MOSFET is different from a BJT.</p>\n<p><strong>Key terms:</strong> MOSFET · Gate · Drain · Source · N-channel MOSFET · P-channel MOSFET · Threshold voltage (Vth) · Rds(on).</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain how a MOSFET is different from a BJT.</li>\n<li>Tell N-channel and P-channel MOSFETs apart and read their symbols.</li>\n<li>Explain gate voltage, threshold voltage, and on-resistance.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
