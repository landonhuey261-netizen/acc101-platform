// egr110 - Module 2: Diodes in Circuits
module.exports = {
  "number": 2,
  "slug": "diodes-in-circuits",
  "title": "Diodes in Circuits",
  "estTime": "3–4 hours",
  "objectives": [
    "Read a diode symbol and name the anode and cathode.",
    "Use the 0.7 V forward drop to work out resistor values and currents.",
    "Explain half-wave and full-wave rectifiers and their average outputs.",
    "Explain how a Zener diode holds a voltage steady.",
    "Choose a diode by its current and PIV ratings and test one with a meter."
  ],
  "sections": [
    {
      "heading": "Anode, Cathode, and the Arrow",
      "html": "<p>A diode has two terminals: the anode and the cathode. On the circuit symbol, the anode is the triangle and the cathode is the bar — the arrow points from anode to cathode, which is the direction current is allowed to flow. On a real diode, the cathode end is marked with a stripe or band around the body. If you wire a diode backwards, it simply blocks current; at low voltages nothing is damaged, it just does not work.</p>\n<p>A diode is a one-way street for current. Forward bias (anode more positive than cathode by about 0.7 V for silicon) opens the street; reverse bias closes it. That single property is behind every use of diodes: turning AC into DC, protecting circuits from reversed batteries, and making LEDs light up.</p>\n"
    },
    {
      "heading": "The 0.7 V Toll and the LED Resistor",
      "html": "<p>When a silicon diode conducts, about 0.7 V appears across it, almost regardless of the current. That is the toll every carrier pays to cross the junction. In calculations we subtract it first, then apply Ohm's law to the resistor: I = (Vsupply − 0.7 V) ÷ R. Forget the 0.7 V and your current comes out too high.</p>\n<p>An LED is a diode that gives off light when it conducts, and it needs a series resistor to limit its current. Example: a 5 V supply, a red LED with a 2 V forward drop, and a target current of 20 mA. Resistor voltage is 5 − 2 = 3 V, so R = 3 V ÷ 0.020 A = 150 Ω. A 150 Ω resistor gives 20 mA; without it, the LED would draw far too much current and burn out in seconds. Always work out the resistor — never connect an LED straight across a supply.</p>\n"
    },
    {
      "heading": "Rectifiers: Turning AC into DC",
      "html": "<p>Mains electricity is alternating current (AC): it swings positive and negative many times a second. Most electronics need direct current (DC), which flows one way only. A rectifier uses diodes to convert AC to DC. A half-wave rectifier uses one diode and passes only the positive half of each cycle, blocking the negative half. If the peak voltage is 10 V, the average output is Vpeak ÷ π, about 3.18 V — and the output is lumpy, pulsing 50 or 60 times a second.</p>\n<p>A full-wave bridge rectifier uses four diodes arranged in a bridge, and it passes both halves of the cycle, flipping the negative half to positive. The average output doubles to 2 × Vpeak ÷ π, about 6.37 V for a 10 V peak. A smoothing capacitor across the output fills in the gaps between pulses, and the result is a fairly steady DC voltage — the starting point of almost every mains power supply.</p>\n"
    },
    {
      "heading": "Zener Diodes: Breaking Down on Purpose",
      "html": "<p>Every diode breaks down if the reverse voltage gets high enough — normally that destroys it. A Zener diode is built to break down at a precise, chosen voltage and to survive it. Wired in reverse, it does nothing until the voltage reaches its Zener voltage Vz, then it conducts and holds the voltage at Vz, soaking up extra current to keep the voltage steady.</p>\n<p>That makes the Zener a simple voltage regulator. Example: a 12 V supply, a 5.1 V Zener, and a 470 Ω series resistor. The resistor drops 12 − 5.1 = 6.9 V, so the Zener current is 6.9 V ÷ 470 Ω = 0.0147 A, about 14.7 mA. The load connected across the Zener sees a steady 5.1 V even if the supply wobbles. The resistor is essential: without it, the Zener would take unlimited current and overheat.</p>\n"
    },
    {
      "heading": "Choosing, Testing, and Common Mistakes",
      "html": "<p>Two ratings matter when choosing a diode. The maximum forward current is the most current the diode can carry without overheating — a small signal diode may be rated 200 mA, a rectifier diode 1 A or more. The PIV (peak inverse voltage) is the highest reverse voltage the diode can survive — exceed it and the diode breaks down and can be destroyed. Always pick a diode whose PIV is comfortably above the highest reverse voltage in your circuit.</p>\n<p>You can test a diode with a multimeter on its diode-test setting: forward, it should read about 0.5–0.8 V; reversed, it should read open circuit (OL). A reading of 0 V both ways means it is shorted; OL both ways means it is open. <p><strong>Takeaways:</strong><ul><li>The cathode is marked with a stripe; current flows anode to cathode.</li><li>A conducting silicon diode drops about 0.7 V; subtract it before using Ohm's law.</li><li>Half-wave average is Vpeak ÷ π; full-wave bridge average is 2 × Vpeak ÷ π.</li><li>A Zener in reverse breakdown holds a steady voltage; the series resistor limits its current.</li><li>Check current rating and PIV before choosing a diode.</li></ul></p>\n<p><strong>Common mistake:</strong> Connecting an LED without a series resistor. The LED will take too much current and burn out — the resistor is not optional.</p>\n<p><strong>Common mistake:</strong> Forgetting the 0.7 V drop when working out current, then wondering why the measured current is lower than calculated.</p>\n<p><strong>Ready check:</strong> If you can size an LED resistor, explain a bridge rectifier, and work out a Zener current, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Anode",
      "def": "The positive terminal of a diode, shown as the triangle in the symbol; current enters here when the diode conducts."
    },
    {
      "term": "Cathode",
      "def": "The negative terminal of a diode, shown as the bar in the symbol and marked with a stripe on the body."
    },
    {
      "term": "Forward voltage drop",
      "def": "The voltage across a conducting diode, about 0.7 V for silicon and about 2 V for a red LED."
    },
    {
      "term": "Reverse breakdown",
      "def": "The point where a diode in reverse bias suddenly starts conducting, at a voltage called the breakdown voltage."
    },
    {
      "term": "PIV",
      "def": "Peak inverse voltage: the highest reverse voltage a diode can survive without breaking down."
    },
    {
      "term": "Rectifier",
      "def": "A circuit, built from diodes, that converts alternating current (AC) into direct current (DC)."
    },
    {
      "term": "Half-wave rectifier",
      "def": "A rectifier using one diode that passes only one half of each AC cycle; average output is Vpeak ÷ π."
    },
    {
      "term": "Full-wave bridge rectifier",
      "def": "A rectifier using four diodes in a bridge that passes both halves of each AC cycle; average output is 2 × Vpeak ÷ π."
    },
    {
      "term": "LED",
      "def": "Light-emitting diode: a diode that gives off light when it conducts, used as an indicator or light source."
    },
    {
      "term": "Zener diode",
      "def": "A diode designed to break down at a precise reverse voltage and hold that voltage steady, used as a simple regulator."
    },
    {
      "term": "Smoothing capacitor",
      "def": "A capacitor across a rectifier output that fills in the gaps between pulses, making the DC steadier."
    },
    {
      "term": "Ripple",
      "def": "The leftover up-and-down wobble on a rectified DC voltage before it is smoothed."
    },
    {
      "term": "Schottky diode",
      "def": "A diode with a lower forward drop (about 0.3 V) and very fast switching, used where speed or low loss matters."
    },
    {
      "term": "Photodiode",
      "def": "A diode that conducts more when light falls on it, used in light sensors and remote-control receivers."
    }
  ],
  "video": {
    "title": "What is Diode? Full Course | All Types of Diodes, Working, Applications | 1-30 Page",
    "embedUrl": "https://www.youtube.com/embed/YIPzgTHjskM",
    "note": "A complete diode tour in one video: PN junction, forward and reverse bias, types, rectifiers, and the Zener regulator. Watch the rectifier and Zener sections twice — those are the calculations this module tests.",
    "more": [
      {
        "title": "Semiconductors Explained: Band Gap, Doping, p-n Junction",
        "url": "https://www.youtube.com/watch?v=Vy-J9dxmOPg"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 9 V battery powers a red LED (forward voltage 2 V) at 15 mA. Work out the series resistor value, and say which standard resistor you would pick.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Resistor voltage = 9 V − 2 V = 7 V. Step 2: R = V ÷ I = 7 V ÷ 0.015 A = 467 Ω. Step 3: The nearest standard value is 470 Ω, which gives almost exactly 15 mA. A good answer shows the subtraction, the division, and the standard-value choice.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A half-wave rectifier is fed with AC whose peak voltage is 10 V. What is the average DC output voltage? Show the formula and the answer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Half-wave average = Vpeak ÷ π. Step 2: 10 V ÷ 3.1416 = 3.18 V. Step 3: The output is a pulsing DC averaging about 3.2 V, with gaps where the diode blocks. A good answer gives the formula, the number, and notes the pulsing nature.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 12 V supply feeds a 5.1 V Zener diode through a 470 Ω resistor. Work out the Zener current, step by step.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The resistor drops 12 V − 5.1 V = 6.9 V. Step 2: I = V ÷ R = 6.9 V ÷ 470 Ω = 0.0147 A. Step 3: That is about 14.7 mA through the Zener (and the resistor). A good answer shows both steps and the mA conversion.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A bridge rectifier has one diode that has failed open (it never conducts). Describe what happens to the output and why.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: With one diode open, the bridge can only conduct on one half of the AC cycle. Step 2: It behaves like a half-wave rectifier, so the average output roughly halves and the ripple gets much bigger. Step 3: The load still gets DC, but lumpier and lower — the fault is easy to spot on an oscilloscope or by the doubled ripple. A good answer explains the half-wave behaviour and the bigger ripple.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A diode is rated PIV 50 V and maximum current 1 A. It will be used in a circuit where the highest reverse voltage is 100 V peak and the forward current is 0.5 A. Is it safe to use? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The current is fine — 0.5 A is below the 1 A rating. Step 2: The voltage is not — 100 V peak reverse is double the 50 V PIV rating. Step 3: The diode would break down in reverse and could be destroyed, so pick a diode rated comfortably above 100 V PIV. A good answer checks both ratings separately.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An LED in a circuit will not light. List three things to check, in order, and what each check would tell you.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check polarity — the anode must be more positive than the cathode; a backwards LED blocks current. Step 2: Check the series resistor value and that it is actually in the circuit; a missing or shorted resistor would have burned the LED out, while a far-too-large resistor gives too little current to see. Step 3: Check the supply voltage is present and high enough (above the LED's forward voltage plus the resistor drop). A good answer gives three real checks with what each one rules out.</p>"
    }
  ],
  "quiz": [
    {
      "q": "On a real diode, which end is the cathode?",
      "choices": [
        "The end with the stripe or band",
        "The end with the longer lead on an LED",
        "The end marked with a plus sign",
        "Both ends are the same"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The cathode is marked with a stripe or band around the body. (b) is wrong: on an LED the longer lead is the anode. (c) is wrong: diodes are not marked with a plus sign. (d) is wrong: the two ends do opposite jobs."
    },
    {
      "q": "A 5 V supply powers a red LED (forward voltage 2 V) at 20 mA. What series resistor is needed?",
      "choices": [
        "100 Ω",
        "150 Ω",
        "250 Ω",
        "350 Ω"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Resistor voltage is 5 − 2 = 3 V, and 3 ÷ 0.020 = 150 Ω. (a) 100 Ω would give 30 mA, too much. (c) 250 Ω would give only 12 mA. (d) 350 Ω would give under 9 mA."
    },
    {
      "q": "A half-wave rectifier has an AC peak voltage of 10 V. What is the average DC output?",
      "choices": [
        "10 V",
        "6.37 V",
        "3.18 V",
        "0 V"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Half-wave average is Vpeak ÷ π = 10 ÷ 3.1416 ≈ 3.18 V. (a) 10 V is the peak, not the average. (b) 6.37 V is the full-wave average. (d) is wrong: the diode passes half the cycle, so the average is not zero."
    },
    {
      "q": "How many diodes does a full-wave bridge rectifier use?",
      "choices": [
        "One",
        "Two",
        "Three",
        "Four"
      ],
      "answer": 3,
      "explanation": "Correct: (d). A bridge uses four diodes to steer both halves of the AC cycle to the output. (a) One diode gives half-wave only. (b) Two diodes can make a full-wave rectifier, but only with a centre-tapped transformer, not a bridge. (c) Three diodes is not a standard rectifier."
    },
    {
      "q": "A Zener diode is used as a voltage regulator because…",
      "choices": [
        "It blocks all reverse current",
        "It breaks down at a precise reverse voltage and holds that voltage steady",
        "It has no forward voltage drop",
        "It only works with AC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In reverse breakdown a Zener holds its rated voltage while its current varies. (a) is wrong: it conducts in reverse once Vz is reached. (c) is wrong: it has a normal forward drop like any diode. (d) is wrong: Zener regulators run on DC."
    },
    {
      "q": "A diode rated PIV 100 V is used where the reverse peak reaches 120 V. What is likely to happen?",
      "choices": [
        "Nothing — PIV is only a guideline",
        "The diode will break down in reverse and may be destroyed",
        "The diode will conduct more efficiently",
        "The forward current will double"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Exceeding PIV causes reverse breakdown, which can destroy an ordinary diode. (a) is wrong: PIV is a hard maximum, not a guideline. (c) is wrong: breakdown is a failure, not an improvement. (d) is wrong: PIV has nothing to do with forward current."
    },
    {
      "q": "On diode-test, a good silicon diode should read about…",
      "choices": [
        "0 V forward and 0 V reverse",
        "0.5–0.8 V forward and open circuit (OL) in reverse",
        "OL forward and 0.7 V reverse",
        "12 V forward and 12 V reverse"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Forward shows the junction drop of about 0.5–0.8 V; reverse shows open circuit. (a) 0 V both ways means the diode is shorted. (c) is backwards. (d) is wrong: a meter's diode test uses a small test voltage, not 12 V."
    },
    {
      "q": "An LED is wired backwards across a 5 V supply with a series resistor. What happens?",
      "choices": [
        "It lights up normally",
        "It stays dark, because the diode is reverse biased and blocks current",
        "It explodes immediately",
        "It lights up but in a different colour"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Backwards is reverse bias, so the LED blocks current and stays dark; at 5 V it is not damaged. (a) is wrong: an LED only lights when forward biased. (c) is wrong: 5 V reverse is far below the damage level for an LED. (d) is wrong: colour comes from the LED's material, not its direction."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Diodes in Circuits: Quick Reference</h3>\n<p><strong>Core idea:</strong> Read a diode symbol and name the anode and cathode.</p>\n<p><strong>Key terms:</strong> Anode · Cathode · Forward voltage drop · Reverse breakdown · PIV · Rectifier · Half-wave rectifier · Full-wave bridge rectifier.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Read a diode symbol and name the anode and cathode.</li>\n<li>Use the 0.7 V forward drop to work out resistor values and currents.</li>\n<li>Explain half-wave and full-wave rectifiers and their average outputs.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
