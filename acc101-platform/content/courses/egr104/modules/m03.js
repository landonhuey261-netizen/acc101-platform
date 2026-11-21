// egr104 - Module 3: Ohm's Law
module.exports = {
  "number": 3,
  "slug": "ohms-law",
  "title": "Ohm's Law",
  "estTime": "3–4 hours",
  "objectives": [
    "State Ohm's law as V = I × R and rearrange it to find any one of the three quantities.",
    "Use the Ohm's law triangle to pick the right form of the equation.",
    "Solve for voltage, current, and resistance in worked circuits.",
    "Check answers by units and by common sense (bigger push, more flow; bigger opposition, less flow).",
    "Explain what Ohm's law assumes: the resistance stays constant while you measure."
  ],
  "sections": [
    {
      "heading": "One Law, Three Forms",
      "html": "<p>Ohm's law says that voltage, current, and resistance are locked together by one simple equation: <strong>V = I × R</strong>. Voltage in volts equals current in amps times resistance in ohms. If you know any two, you can find the third by rearranging: <strong>I = V ÷ R</strong> and <strong>R = V ÷ I</strong>. That is the whole law — everything else in this module is practice using it.</p>\n<p>The Ohm's law triangle is a memory trick: draw a triangle with V on top and I and R side by side underneath. Cover the letter you want to find and the triangle shows the formula: cover V and you see I × R; cover I and you see V ÷ R; cover R and you see V ÷ I. It is only a trick, but it stops the most common beginner error, which is dividing when you should multiply.</p>\n"
    },
    {
      "heading": "Worked Example: Finding Current",
      "html": "<p>A 12 V battery is connected across a 6 Ω resistor. How much current flows? Use I = V ÷ R. I = 12 V ÷ 6 Ω = 2 A. Check the units: volts divided by ohms gives amps, which is what we wanted. Check common sense: 12 V is a decent push and 6 Ω is a small opposition, so 2 A is a reasonable answer.</p>\n<p>Now change one thing: the same 12 V battery across a 24 Ω resistor. I = 12 ÷ 24 = 0.5 A. Four times the resistance, one quarter of the current — exactly what the water analogy predicts. And if the battery were 24 V with the 6 Ω resistor, I = 24 ÷ 6 = 4 A: double the push, double the flow.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Always write the formula first, then put the numbers in with their units, then check the answer makes sense. That habit catches most errors before they become wrong answers.</div></p>\n"
    },
    {
      "heading": "Worked Example: Finding Voltage and Resistance",
      "html": "<p>Finding voltage: a current of 3 A flows through a 10 Ω resistor. What is the voltage across it? V = I × R = 3 A × 10 Ω = 30 V. The resistor “uses up” 30 V of push — that voltage drop is what drives 3 A through 10 Ω.</p>\n<p>Finding resistance: a 9 V battery drives 0.9 A through a lamp. What is the lamp's resistance? R = V ÷ I = 9 V ÷ 0.9 A = 10 Ω. This is how a meter works out resistance in real life: it applies a known voltage, measures the current, and divides. (This is also the famous example from the video: 9 V, 10 Ω, 0.9 A all fit together.)</p>\n"
    },
    {
      "heading": "What Ohm's Law Assumes",
      "html": "<p>Ohm's law works perfectly for resistors and for most metal wires at a steady temperature — these are called ohmic materials. It assumes the resistance stays constant while the voltage changes. In real life, a resistor that gets hot changes its resistance a little, and some components (like a diode or a filament bulb as it heats up) do not follow Ohm's law at all. For the circuits in this course we treat resistance as constant, and that is a good model for the problems you will solve.</p>\n<p>One more caution: Ohm's law uses the voltage across the component itself, not the voltage of the whole battery, when there is more than one component. In a series circuit the battery voltage is shared between the parts, so each resistor gets only its own share. Modules 4 and 5 will show exactly how that sharing works.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>V = I × R; I = V ÷ R; R = V ÷ I. One law, three forms.</li><li>12 V across 6 Ω gives 2 A; 9 V across 10 Ω gives 0.9 A.</li><li>Double the voltage, double the current. Double the resistance, halve the current.</li><li>Use the voltage across the component itself, not the whole battery, when several parts share the supply.</li><li>Check units: volts ÷ ohms = amps; amps × ohms = volts; volts ÷ amps = ohms.</li></ul></p>\n<p><strong>Common mistake:</strong> Dividing when you should multiply — for example, calculating V as I ÷ R instead of I × R. Use the triangle: cover the letter you want and read off what is left.</p>\n<p><strong>Common mistake:</strong> Forgetting to convert milliamps to amps before calculating. 500 mA is 0.5 A: using 500 in the formula gives an answer 1,000 times too big.</p>\n<p><strong>Ready check:</strong> If you can find any one of V, I, or R from the other two, in under a minute, with the units right, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Ohm's law",
      "def": "V = I × R: voltage equals current times resistance, for a material whose resistance stays constant."
    },
    {
      "term": "Ohm's law triangle",
      "def": "A memory aid: V on top, I and R below; cover the letter you want to find and read the formula that is left."
    },
    {
      "term": "Voltage drop",
      "def": "The voltage used up across a component as current flows through it."
    },
    {
      "term": "Ohmic material",
      "def": "A material whose resistance stays constant as voltage changes, so it follows Ohm's law."
    },
    {
      "term": "Non-ohmic component",
      "def": "A component, such as a diode, whose resistance changes with voltage, so Ohm's law does not describe it simply."
    },
    {
      "term": "Direct proportion",
      "def": "When one quantity doubles, the other doubles too — like voltage and current at fixed resistance."
    },
    {
      "term": "Inverse proportion",
      "def": "When one quantity doubles, the other halves — like current and resistance at fixed voltage."
    },
    {
      "term": "Unit check",
      "def": "Checking that the units in a calculation combine to give the unit of the answer (volts ÷ ohms = amps)."
    },
    {
      "term": "Georg Ohm",
      "def": "The German physicist (1789–1854) who found the relationship between voltage, current, and resistance."
    },
    {
      "term": "Resistance (revisited)",
      "def": "Measured in ohms; the opposition to current flow that Ohm's law relates to voltage and current."
    },
    {
      "term": "Current (revisited)",
      "def": "Measured in amps; the flow of charge that Ohm's law relates to voltage and resistance."
    },
    {
      "term": "Voltage (revisited)",
      "def": "Measured in volts; the push that Ohm's law relates to current and resistance."
    }
  ],
  "video": {
    "title": "Ohms Law Explained - The basics circuit theory | The Engineering Mindset",
    "embedUrl": "https://www.youtube.com/embed/HsLLq6Rm5tU",
    "note": "Ohm's law with the triangle trick and two worked problems at the end — try them before the answers are shown.",
    "more": [
      {
        "title": "Ohm's Law | SparkFun",
        "url": "https://www.youtube.com/watch?v=8jB6hDUqN0Y"
      },
      {
        "title": "Understand Ohm’s Law- It’s Easy! | TabletClass Math",
        "url": "https://www.youtube.com/watch?v=Ackruj3hhJQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 24 V supply is connected to an 8 Ω resistor. Find the current. Show the formula, the substitution, and a unit check.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: I = V ÷ R. Step 2: I = 24 V ÷ 8 Ω = 3 A. Step 3: Unit check — volts ÷ ohms = amps ✓. Common-sense check — 24 V is a strong push and 8 Ω is small, so 3 A is reasonable.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A current of 0.25 A flows through a 40 Ω resistor. Find the voltage across the resistor.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: V = I × R. Step 2: V = 0.25 A × 40 Ω = 10 V. Step 3: Unit check — amps × ohms = volts ✓. Note that 0.25 × 40 = 10 exactly, a tidy check.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 12 V battery drives 0.4 A through a small motor. Find the motor's resistance.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: R = V ÷ I. Step 2: R = 12 V ÷ 0.4 A = 30 Ω. Step 3: Unit check — volts ÷ amps = ohms ✓. Check: 0.4 A × 30 Ω = 12 V, which takes us back to the battery voltage ✓.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A resistor is 2.2 kΩ and the current through it is 5 mA. Find the voltage across it. (Convert first!)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Convert — 2.2 kΩ = 2,200 Ω; 5 mA = 0.005 A. Step 2: V = I × R = 0.005 A × 2,200 Ω = 11 V. Step 3: Check — 0.005 × 2,200 = 11 ✓. If you had used 5 instead of 0.005 you would have got 11,000 V, which is clearly wrong: always convert milliamps to amps first.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 6 V battery is connected to a resistor and 2 A flows. The battery is then swapped for a 12 V battery with the same resistor. What is the new current, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: First find R: R = 6 V ÷ 2 A = 3 Ω. Step 2: With 12 V, I = V ÷ R = 12 V ÷ 3 Ω = 4 A. Step 3: The current doubles because the voltage doubled and the resistance stayed the same — current is directly proportional to voltage.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A student calculates that 12 V across a 3 Ω resistor gives 4 V. Find the error and give the right answer with the right unit.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The student divided correctly (12 ÷ 3 = 4) but the answer is a current, not a voltage — volts ÷ ohms = amps. Step 2: The right answer is I = 12 V ÷ 3 Ω = 4 A. Step 3: Lesson — always write the unit in the answer and check it matches what you were asked for.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 12 V battery is connected across a 6 Ω resistor. What current flows?",
      "choices": [
        "0.5 A",
        "2 A",
        "6 A",
        "72 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = V ÷ R = 12 ÷ 6 = 2 A. (a) 0.5 A is 6 ÷ 12 — the numbers the wrong way round. (c) 6 A is just the resistance value, not a current. (d) 72 A is 12 × 6 — multiplication, but current needs division here."
    },
    {
      "q": "A current of 3 A flows through a 10 Ω resistor. What is the voltage across it?",
      "choices": [
        "3.3 V",
        "13 V",
        "30 V",
        "0.3 V"
      ],
      "answer": 2,
      "explanation": "Correct: (c). V = I × R = 3 × 10 = 30 V. (a) 3.3 V is 10 ÷ 3 — division instead of multiplication. (b) 13 V is 3 + 10 — adding the numbers. (d) 0.3 V is 3 ÷ 10 — dividing the wrong way."
    },
    {
      "q": "A 9 V battery drives 0.9 A through a lamp. What is the lamp's resistance?",
      "choices": [
        "0.1 Ω",
        "8.1 Ω",
        "10 Ω",
        "9.9 Ω"
      ],
      "answer": 2,
      "explanation": "Correct: (c). R = V ÷ I = 9 ÷ 0.9 = 10 Ω. (a) 0.1 Ω is 0.9 ÷ 9 — upside down. (b) 8.1 Ω is 9 × 0.9 — multiplication instead of division. (d) 9.9 Ω is 9 + 0.9 — adding."
    },
    {
      "q": "Voltage is doubled and resistance is halved at the same time. What happens to the current?",
      "choices": [
        "It stays the same",
        "It doubles",
        "It quadruples",
        "It halves"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Doubling V doubles I, and halving R doubles I again: 2 × 2 = 4, so the current quadruples. (a) is wrong: both changes push current up. (b) counts only one of the two changes. (d) is backwards."
    },
    {
      "q": "A resistor is 1 kΩ and the voltage across it is 5 V. What is the current?",
      "choices": [
        "5 A",
        "0.005 A (5 mA)",
        "200 A",
        "0.2 A"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = V ÷ R = 5 ÷ 1,000 = 0.005 A = 5 mA. (a) 5 A comes from forgetting to convert 1 kΩ to 1,000 Ω. (c) 200 A is 1,000 ÷ 5 — upside down. (d) 0.2 A is 1 ÷ 5 — the wrong numbers."
    },
    {
      "q": "Which of these is a correct rearrangement of Ohm's law?",
      "choices": [
        "R = I ÷ V",
        "I = R ÷ V",
        "V = I ÷ R",
        "R = V ÷ I"
      ],
      "answer": 3,
      "explanation": "Correct: (d). From V = I × R, dividing both sides by I gives R = V ÷ I. (a) is upside down. (b) is upside down. (c) is wrong: V = I × R, not I ÷ R."
    },
    {
      "q": "A student measures 20 mA through a 500 Ω resistor. What is the voltage across it?",
      "choices": [
        "10 V",
        "25 V",
        "0.04 V",
        "10,000 V"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Convert first: 20 mA = 0.02 A. V = I × R = 0.02 × 500 = 10 V. (b) 25 V is 500 ÷ 20 — dividing the raw numbers. (c) 0.04 V is 0.02 ÷ 0.5 — wrong rearrangement. (d) 10,000 V is 20 × 500 — forgetting to convert milliamps to amps."
    },
    {
      "q": "Why does Ohm's law sometimes fail for a filament light bulb as it heats up?",
      "choices": [
        "The battery runs out",
        "The bulb's resistance changes as it gets hot, so resistance is not constant",
        "Ohm's law only works for batteries, not bulbs",
        "The current flows backwards in a hot bulb"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ohm's law assumes constant resistance; a hot filament has higher resistance than a cold one, so the bulb is non-ohmic. (a) is wrong: the battery is not the issue. (c) is wrong: Ohm's law applies to any ohmic component, including bulbs when cold. (d) is wrong: current direction does not reverse with temperature."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Ohm's Law: Quick Reference</h3>\n<p><strong>Core idea:</strong> V = I × R. Know any two of voltage, current, and resistance and you can find the third.</p>\n<p><strong>Key terms:</strong> Ohm's law · Ohm's law triangle · Voltage drop · Ohmic material · Direct proportion · Inverse proportion.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Cover the letter you want in the triangle and read the formula.</li>\n<li>Convert mA to A and kΩ to Ω BEFORE calculating.</li>\n<li>Volts ÷ ohms = amps; amps × ohms = volts; volts ÷ amps = ohms.</li>\n<li>Double the voltage → double the current. Double the resistance → halve the current.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
