// egr104 - Module 12: Wiring, Protection & Troubleshooting
module.exports = {
  "number": 12,
  "slug": "wiring-protection-troubleshooting",
  "title": "Wiring, Protection & Troubleshooting",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how wire gauge, length, and current set the voltage drop in a run of wire.",
    "Work out a voltage drop and judge it against the 3% guideline.",
    "Explain what fuses and circuit breakers do and how to pick their rating.",
    "Tell an open fault, a short fault, and a ground fault apart by their symptoms.",
    "Troubleshoot a dead circuit step by step: supply, protection, path, load."
  ],
  "sections": [
    {
      "heading": "Wire Size and Voltage Drop",
      "html": "<p>Every wire has resistance, and resistance depends on the wire's material, length, and thickness. Copper is the usual choice. A longer run has more resistance; a thicker wire (a smaller gauge number) has less. American wire gauge (AWG) runs backwards: 12 AWG is thicker than 14 AWG, and 10 AWG is thicker still. A 14 AWG copper wire is about 2.58 Ω per 1,000 ft; 12 AWG is about 1.59 Ω per 1,000 ft.</p>\n<p>Voltage drop is just Ohm's law on the wire: V(drop) = I × R(wire). Remember the current travels out and back, so the wire length is twice the run length. Example: a 50 ft run at 15 A in 14 AWG — the loop is 100 ft, R = 2.58 × 100 ÷ 1,000 = 0.258 Ω, and the drop is 15 × 0.258 = 3.87 V. On a 120 V circuit that is 3.2% — just over the usual 3% guideline for branch circuits, so a careful electrician would step up to 12 AWG: R = 0.159 Ω, drop 2.38 V, about 2.0% ✓. A wire that is too thin wastes power as heat and leaves the load short of voltage.</p>\n"
    },
    {
      "heading": "Fuses and Circuit Breakers",
      "html": "<p>A fuse is a thin piece of metal that melts when the current exceeds its rating, breaking the circuit. A circuit breaker does the same job with a mechanism that can be reset. Both exist to protect the wire, not the appliance: a 15 A breaker on 14 AWG wire stops the wire from carrying more current than it can safely handle. If a breaker keeps tripping, something is wrong — an overload or a fault — and the answer is to find it, not to fit a bigger breaker. A bigger breaker on thin wire is a fire waiting to happen.</p>\n<p>Fuses and breakers must be matched to the wire and the load: the rating sits just above the normal current and below what the wire can carry. A fast-blow fuse protects delicate electronics; a slow-blow (time-delay) fuse tolerates the brief surge when a motor starts. Always replace a fuse with the same type and rating.</p>\n<p><div class=\"callout\"><strong>Key idea:</strong> Protection protects the wire. A breaker that trips is doing its job — find out why it tripped instead of defeating it.</div></p>\n"
    },
    {
      "heading": "Three Faults and Their Symptoms",
      "html": "<p>An open fault is a break: a cut wire, a loose connection, a blown fuse, a burned-out bulb. Symptom: no current at all, and full supply voltage appears across the break. A short fault is an unintended low-resistance path between two points that should not touch: current surges, the breaker trips or the fuse blows, and something may be hot or smell of burning. A ground fault is current leaking to ground — through damaged insulation, water, or a person. Symptom: a GFCI trips, or a breaker trips, or a tingle when touching the equipment.</p>\n<p>Telling them apart is mostly a matter of what the meter says. Open: voltage present at the supply, no current, voltage across the break. Short: breaker trips instantly, resistance between the conductors near zero (measured with the power off). Ground fault: resistance from a conductor to ground is low, or the GFCI will not stay reset.</p>\n"
    },
    {
      "heading": "Troubleshooting Step by Step",
      "html": "<p>Troubleshoot in order, from the source outward: (1) Is the supply there? Measure the voltage at the source — if it is missing, the problem is upstream. (2) Is the protection intact? Check the breaker or fuse — if it is tripped or blown, find out why before resetting it. (3) Is the path complete? Check continuity through switches and wires, with the power off. (4) Is the load good? Measure the load's resistance and compare it with what it should be — an open load reads infinite, a shorted load reads near zero.</p>\n<p>Work in halves when a circuit is long: test the middle, and the result tells you which half the fault is in. That halves the search every time and finds the fault fast. Write down every reading as you go — a notebook beats memory, and a pattern in the readings often points straight at the fault. And remember the safety rule from Module 11: troubleshoot dead circuits dead, and live measurements only with the right training, meter, and PPE.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Voltage drop = I × R(wire); count the out-and-back length; keep it under about 3% on branch circuits.</li><li>Thicker wire (smaller AWG number) has less resistance and less drop.</li><li>Fuses and breakers protect the wire; never fit a bigger one to stop tripping.</li><li>Open: no current, voltage across the break. Short: huge current, breaker trips. Ground fault: current leaking to ground, GFCI trips.</li><li>Troubleshoot from the source outward: supply, protection, path, load — and test in halves.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting the return wire when calculating voltage drop. The current goes out and comes back, so the resistance is for twice the run length.</p>\n<p><strong>Common mistake:</strong> Resetting a tripped breaker repeatedly without investigating. A breaker trips for a reason; resetting it into a fault can start a fire.</p>\n<p><strong>Ready check:</strong> If you can work out the voltage drop for a 50 ft run at 15 A in 14 AWG (3.87 V, 3.2% — too much) and describe the four troubleshooting steps, you have this module — and this course.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Voltage drop",
      "def": "Voltage lost along a wire: V = I × R(wire); kept under about 3% on branch circuits."
    },
    {
      "term": "AWG",
      "def": "American wire gauge; smaller numbers mean thicker wire — 12 AWG is thicker than 14 AWG."
    },
    {
      "term": "Fuse",
      "def": "A protective device whose metal link melts when current exceeds its rating, breaking the circuit."
    },
    {
      "term": "Circuit breaker",
      "def": "A resettable protective device that opens the circuit when current exceeds its rating."
    },
    {
      "term": "Overload",
      "def": "A current above the normal load but below a short-circuit level, such as too many appliances on one circuit."
    },
    {
      "term": "Open fault",
      "def": "A break in a circuit: no current flows, and full supply voltage appears across the break."
    },
    {
      "term": "Short fault",
      "def": "An unintended low-resistance path; current surges and protection trips."
    },
    {
      "term": "Ground fault",
      "def": "Current leaking to ground through an unintended path; a GFCI detects it."
    },
    {
      "term": "Troubleshooting",
      "def": "Finding a fault step by step: supply, protection, path, load."
    },
    {
      "term": "Half-splitting",
      "def": "Testing the middle of a circuit to find which half a fault is in, halving the search each time."
    },
    {
      "term": "Slow-blow fuse",
      "def": "A time-delay fuse that tolerates a brief starting surge, such as a motor starting."
    },
    {
      "term": "Wire ampacity",
      "def": "The maximum current a wire can carry safely without overheating."
    }
  ],
  "video": {
    "title": "Circuits in the Field: Series, Parallel, and Faults | Lesson 9",
    "embedUrl": "https://www.youtube.com/embed/HDWsJlWqtdk",
    "note": "Series and parallel behaviour in the field, and the three faults by name: open, short, and ground fault.",
    "more": [
      {
        "title": "How To Use A Multimeter for Home Repairs and Troubleshooting | Everyday Home Repairs",
        "url": "https://www.youtube.com/watch?v=oHdW4Fafn8M"
      },
      {
        "title": "Lock out / tag out LOTO SCENE 4",
        "url": "https://www.youtube.com/watch?v=kk6OWeplbj8"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 50 ft run of 14 AWG copper (2.58 Ω per 1,000 ft) carries 15 A on a 120 V circuit. Find the voltage drop and the percentage drop. Is it within the 3% guideline?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Loop length = 2 × 50 = 100 ft. Step 2: R = 2.58 × 100 ÷ 1,000 = 0.258 Ω. Step 3: Drop = 15 × 0.258 = 3.87 V. Step 4: Percentage = 3.87 ÷ 120 × 100 ≈ 3.2% — just over the 3% guideline, so step up to 12 AWG.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Repeat Problem 1 with 12 AWG copper (1.59 Ω per 1,000 ft). What is the drop and the percentage now?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: R = 1.59 × 100 ÷ 1,000 = 0.159 Ω. Step 2: Drop = 15 × 0.159 = 2.38 V (2.39 V with 1.588 Ω/1,000 ft). Step 3: Percentage = 2.38 ÷ 120 × 100 ≈ 2.0% — within the guideline ✓. Thicker wire, less drop.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 15 A breaker on a 14 AWG circuit keeps tripping when a heater and a hair dryer run together. The heater draws 10 A and the dryer draws 8 A. Explain the trip and the correct fix.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Together they draw 18 A, more than the 15 A breaker — that is an overload, and the breaker is doing its job. Step 2: The correct fix is to run one appliance on a different circuit, not to fit a 20 A breaker: the 14 AWG wire is only rated for 15 A, and a bigger breaker would let the wire overheat. Step 3: Never defeat protection to stop tripping.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A lamp will not light. The supply measures 12 V at the source, the fuse is good, and the lamp measures infinite resistance. Where is the fault, and what is it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Supply present, protection good — so the fault is in the path or the load. Step 2: The lamp measures infinite resistance, which means its filament is broken — an open fault in the load. Step 3: Replace the lamp (with the circuit off) and re-test.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A breaker trips the instant it is reset, even with everything unplugged. What kind of fault is this most likely to be, and what do you check next (with the power off)?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An instant trip with no load points to a short fault — a near-zero resistance path. Step 2: With the power off and locked out, measure the resistance between the conductors: near zero confirms a short. Step 3: Half-split the circuit to find where the short is — a damaged cable, a pinched wire, or a failed device — and repair it before resetting again.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A student calculates a voltage drop using only the one-way run length (50 ft) instead of the loop (100 ft) and gets 1.94 V instead of 3.87 V. Explain the error and why it matters.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The current travels out to the load and back to the source, so the resistance is for twice the run length. Step 2: Using one-way length halves the answer (1.94 V instead of 3.87 V). Step 3: It matters because the real drop is 3.2% — over the guideline — while the wrong answer says 1.6% and looks fine. The circuit would be built too thin and the load would be short of voltage.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A 50 ft run of 14 AWG copper (2.58 Ω per 1,000 ft) carries 15 A. What is the voltage drop?",
      "choices": [
        "1.94 V",
        "3.87 V",
        "7.74 V",
        "0.26 V"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Loop length is 100 ft, so R = 0.258 Ω and drop = 15 × 0.258 = 3.87 V. (a) 1.94 V uses only the one-way 50 ft — the classic error. (c) 7.74 V doubles the answer again. (d) 0.26 V is the resistance, not the drop."
    },
    {
      "q": "Which wire is thicker: 10 AWG, 12 AWG, or 14 AWG?",
      "choices": [
        "14 AWG",
        "12 AWG",
        "10 AWG",
        "They are all the same"
      ],
      "answer": 2,
      "explanation": "Correct: (c). AWG runs backwards: smaller numbers are thicker. 10 AWG is thicker than 12 AWG, which is thicker than 14 AWG. (a) and (b) are thinner. (d) is wrong."
    },
    {
      "q": "What do fuses and circuit breakers mainly protect?",
      "choices": [
        "The appliance plugged into the circuit",
        "The wire, from carrying more current than it can safely handle",
        "The battery from running flat",
        "The meter from overload"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Protection exists to stop the wire overheating. (a) is wrong: appliances have their own protection, if any. (c) is wrong: breakers do not protect batteries. (d) is wrong: meters have their own fuses."
    },
    {
      "q": "A breaker keeps tripping. What is the correct response?",
      "choices": [
        "Fit a bigger breaker so it stops tripping",
        "Reset it repeatedly until it stays on",
        "Find the overload or fault that is causing it",
        "Remove the breaker and join the wires"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A tripping breaker is a symptom; find the cause. (a) is dangerous: a bigger breaker lets the wire overheat. (b) is dangerous: resetting into a fault can start a fire. (d) is extremely dangerous and illegal in most codes."
    },
    {
      "q": "A lamp will not light. There is full supply voltage across the lamp's terminals but no current. What is the fault?",
      "choices": [
        "A short circuit in the lamp",
        "An open fault — the lamp (or its filament) is broken",
        "A ground fault",
        "The supply has failed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voltage across the load with no current means the path through the load is broken — an open. (a) is wrong: a short would draw a huge current and trip the breaker. (c) is wrong: a ground fault leaks current to ground. (d) is wrong: the supply voltage is present."
    },
    {
      "q": "What is the first step in troubleshooting a dead circuit?",
      "choices": [
        "Replace the load",
        "Check whether the supply voltage is present at the source",
        "Measure the load's resistance",
        "Reset the breaker"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Start at the source: if the supply is missing, the fault is upstream. (a) is premature — the load may be fine. (c) comes later, after supply and protection are checked. (d) comes after finding why it tripped."
    },
    {
      "q": "A GFCI will not stay reset even with everything unplugged. What does this most likely mean?",
      "choices": [
        "The GFCI is faulty or there is a ground fault in the wiring",
        "The circuit is overloaded",
        "The voltage is too low",
        "The appliances are too old"
      ],
      "answer": 0,
      "explanation": "Correct: (a). With no load connected, a tripping GFCI points to the device itself or a ground fault in the fixed wiring. (b) is wrong: overload trips a breaker, not a GFCI, and there is no load anyway. (c) is wrong: low voltage does not trip a GFCI. (d) is wrong: nothing is plugged in."
    },
    {
      "q": "What is half-splitting in troubleshooting?",
      "choices": [
        "Cutting a wire in half to test it",
        "Testing the middle of a circuit to find which half the fault is in",
        "Sharing the load between two circuits",
        "Using half the normal voltage"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Test the midpoint: the result tells you which half holds the fault, halving the search each time. (a) is wrong: you test, you do not cut. (c) is wrong: that is load sharing. (d) is wrong: voltage is not halved."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Wiring, Protection & Troubleshooting: Quick Reference</h3>\n<p><strong>Core idea:</strong> Voltage drop = I × R(wire), counting out and back. Protection protects the wire. Troubleshoot from the source outward.</p>\n<p><strong>Key terms:</strong> Voltage drop · AWG · Fuse · Circuit breaker · Open fault · Short fault · Ground fault.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Loop length is twice the run length.</li>\n<li>Drop guideline: under about 3% on branch circuits.</li>\n<li>A tripping breaker is a symptom — find the cause.</li>\n<li>Troubleshoot: supply, protection, path, load.</li></ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
