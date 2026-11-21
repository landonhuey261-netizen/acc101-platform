// egr111 - Module 2: Ladder Logic Basics
module.exports = {
  "number": 2,
  "slug": "ladder-logic-basics",
  "title": "Ladder Logic Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Read a ladder diagram: rails, rungs, contacts, and coils.",
    "Tell normally open and normally closed contacts apart.",
    "Explain series (AND) and parallel (OR) contact logic.",
    "Explain a seal-in (latching) circuit and why it is used.",
    "Trace a simple rung and say when its output is on."
  ],
  "sections": [
    {
      "heading": "Rungs, Rails, Contacts, and Coils",
      "html": "<p>Ladder logic is drawn like a ladder: two vertical rails (power on the left, return on the right) with horizontal rungs between them. Each rung is one rule: if the contacts on the rung are satisfied, the coil at the end of the rung turns on. The PLC reads the rungs from top to bottom, left to right, once per scan. A contact is an input condition — a switch, a sensor, or the state of another rung — and a coil is an output — a motor, a valve, a lamp, or an internal memory bit.</p>\n<p>Contacts come in two kinds. A normally open (NO) contact, written --| |--, is true when its input is ON: the contact closes and power flows. A normally closed (NC) contact, written --|/|--, is true when its input is OFF: the contact is closed until its input turns on, then it opens. The word “normally” means the state with no power applied — an NC contact is closed when nothing is driving it, which is why stop buttons and safety devices use NC contacts.</p>\n"
    },
    {
      "heading": "Series Is AND, Parallel Is OR",
      "html": "<p>Contacts in series on a rung are an AND: power flows only if every contact is true. A motor that needs both a start signal AND a guard door closed has its two contacts in series. Contacts in parallel are an OR: power flows if any contact is true. A lamp that must light when either of two sensors sees a part has its two contacts in parallel. Mixing series and parallel groups builds any combination of conditions.</p>\n<p>Reading a rung is a matter of tracing power flow from the left rail to the coil. Start at the left rail and follow the contacts: a NO contact passes power when its input is on, an NC contact passes power when its input is off. If you can reach the coil through a path of true contacts, the coil is energised. That one skill — tracing a rung — is the foundation of all ladder-logic fault-finding.</p>\n"
    },
    {
      "heading": "The Seal-In Circuit: Start and Stop",
      "html": "<p>The most important rung in ladder logic is the seal-in (latching) circuit. A motor is started by a momentary push-button: press Start and the motor runs, but let go and the button opens — so how does the motor keep running? The answer is a contact from the motor's own output wired in parallel with the Start button. Once the motor is on, its own contact holds the rung true, sealing the motor in until something breaks the circuit.</p>\n<p>The Stop button is wired as an NC contact in series with the rung, so pressing it opens the rung and the motor drops out — and the seal-in contact opens with it, so the motor stays off when Stop is released. The Stop button is NC for a safety reason: if its wire breaks or the button fails, the rung opens and the motor stops, which is the safe direction. A stop that fails safe is a basic rule of control design.</p>\n"
    },
    {
      "heading": "Contacts, Coils, and Addresses",
      "html": "<p>In a real PLC program, every contact and coil has an address (also called a tag) that ties it to a physical input, a physical output, or an internal memory bit. Allen-Bradley style uses XIC (examine if closed) for a NO contact, XIO (examine if open) for an NC contact, and OTE (output energise) for a coil; other brands use similar symbols with different names. The idea is the same everywhere: the contact examines a bit, and the coil sets a bit.</p>\n<p>One rule matters more than any other in ladder programming: each output coil should appear only once in the program. If two rungs drive the same coil, the last rung in the scan wins, and the output can flicker or behave in ways that are very hard to fault-find. If you need two conditions to drive one output, combine them into a single rung with parallel branches — one coil, one rung.</p>\n"
    },
    {
      "heading": "Reading a Real Rung and Common Mistakes",
      "html": "<p>Take a rung with a Start NO contact in parallel with a seal-in NO contact, then a Stop NC contact in series, then a Motor coil. Press Start: power flows through Start, the Motor coil energises, and the seal-in contact closes. Release Start: power now flows through the seal-in contact, so the motor stays on. Press Stop: the NC contact opens, power stops, the motor and the seal-in drop out. That is the whole circuit, and it is the pattern behind most motor starters in industry.</p>\n<p><p><strong>Takeaways:</strong><ul><li>A rung is a rule: if the contacts are satisfied, the coil turns on.</li><li>NO contacts are true when the input is on; NC contacts are true when the input is off.</li><li>Series contacts are AND; parallel contacts are OR.</li><li>A seal-in contact in parallel with Start keeps a motor running after the button is released.</li><li>Stop buttons use NC contacts so a wire break stops the machine (fail-safe).</li><li>Each coil should appear only once in the program.</li></ul></p>\n<p><strong>Common mistake:</strong> Using an NO contact for a stop button. If the stop wire breaks, an NO stop can never open the rung and the machine cannot be stopped — always use NC for stop.</p>\n<p><strong>Common mistake:</strong> Driving one coil from two rungs. The last rung in the scan wins, and the output becomes unpredictable — combine the conditions into one rung.</p>\n<p><strong>Ready check:</strong> If you can trace a seal-in rung, explain NO versus NC, and say when a coil is on, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Rung",
      "def": "One horizontal line of ladder logic: a rule that turns its coil on when its contacts are satisfied."
    },
    {
      "term": "Rail",
      "def": "The two vertical lines of a ladder diagram: power on the left, return on the right."
    },
    {
      "term": "Contact",
      "def": "A ladder-logic input condition, shown as a pair of vertical bars; true when its input is in the matching state."
    },
    {
      "term": "Normally open (NO) contact",
      "def": "A contact that is open with no input and closes (passes power) when its input turns on."
    },
    {
      "term": "Normally closed (NC) contact",
      "def": "A contact that is closed with no input and opens (blocks power) when its input turns on."
    },
    {
      "term": "Coil",
      "def": "A ladder-logic output at the end of a rung; energised when the rung's contacts are satisfied."
    },
    {
      "term": "Seal-in circuit",
      "def": "A latching circuit where an output's own contact, wired in parallel with the start button, keeps the rung true after the button is released."
    },
    {
      "term": "XIC",
      "def": "Examine if closed: the Allen-Bradley instruction for a normally open contact."
    },
    {
      "term": "XIO",
      "def": "Examine if open: the Allen-Bradley instruction for a normally closed contact."
    },
    {
      "term": "OTE",
      "def": "Output energise: the Allen-Bradley instruction for a coil."
    },
    {
      "term": "Power flow",
      "def": "The path of logic through a rung from the left rail to the coil; if a path exists, the coil is on."
    },
    {
      "term": "Fail-safe",
      "def": "Designed so that a fault, such as a broken wire, leaves the machine in its safe state."
    },
    {
      "term": "Tag / address",
      "def": "The name or number that ties a contact or coil to a physical input, a physical output, or an internal memory bit."
    },
    {
      "term": "Internal bit",
      "def": "A memory bit inside the PLC used as a contact or coil, with no physical input or output attached."
    }
  ],
  "video": {
    "title": "What is Ladder Logic?",
    "embedUrl": "https://www.youtube.com/embed/qaI48NCUvkA",
    "note": "A gentle introduction to ladder logic: rails, rungs, contacts, and coils, with a start/stop circuit worked through. Pause at each rung and trace the power flow yourself before the video does.",
    "more": [
      {
        "title": "Ladder Logic Basics Walkthrough",
        "url": "https://www.youtube.com/watch?v=ZBtXj0JTp6w"
      },
      {
        "title": "Read ladder diagrams like a pro in 10 minutes",
        "url": "https://www.youtube.com/watch?v=UyvAvJGWHy0"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Describe, in words and with the contact types, the seal-in rung for a motor with a Start push-button and a Stop push-button. Say what each contact does.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The rung has a Start NO contact in parallel with a seal-in NO contact from the motor output, then a Stop NC contact in series, then the Motor coil. Step 2: Pressing Start energises the motor, which closes the seal-in contact, so the rung stays true when Start is released. Step 3: Pressing Stop opens the NC contact, the motor drops out, and the seal-in opens too, so the motor stays off. A good answer names all three contacts and their types.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A lamp must light when either of two sensors (Sensor A or Sensor B) sees a part. Are the sensor contacts in series or parallel, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Parallel, because the lamp needs an OR — either sensor alone must light it. Step 2: In parallel, power reaches the coil if either contact is true. Step 3: In series the lamp would need both sensors at once, which is an AND and is not what was asked. A good answer names parallel and explains the OR logic.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A motor must run only when the guard door is closed AND the operator presses Start. How are the two contacts arranged, and what happens if the door opens while the motor runs?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The guard-door contact and the Start contact are in series, because both conditions must be true — that is an AND. Step 2: If the door opens, the guard contact opens and the rung goes false, so the motor stops. Step 3: With a seal-in, the motor also stays off when the door closes again until Start is pressed once more. A good answer names series and explains the stop.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A rung has a NO contact for Input I:0/0 in parallel with a NO contact for Input I:0/1, in series with an NC contact for Input I:0/2, driving Output O:0/0. Write the truth table for when the output is on, in words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The output is on when (I:0/0 OR I:0/1) is true AND I:0/2 is false. Step 2: So the output is on when I:0/2 is off and at least one of I:0/0 or I:0/1 is on. Step 3: The output is off whenever I:0/2 is on, or when both I:0/0 and I:0/1 are off. A good answer gives the full condition in words.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A student wires a Stop button as a normally open contact in series with a motor rung. Explain the safety problem with this choice.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: With an NO stop, the rung is only true while Stop is pressed — which is backwards: the motor would run only while the operator holds Stop. Step 2: Worse, if the stop wire breaks, the contact can never close, so the motor cannot be started or stopped properly and the fault is hidden. Step 3: The correct choice is an NC stop, so a broken wire opens the rung and stops the machine — fail-safe. A good answer explains both the logic error and the fail-safe point.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A program has the same motor coil on two different rungs: one rung turns it on when a sensor is on, the other turns it off when a timer finishes. Explain why this is a bad idea and how to fix it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Each coil should appear only once, because the last rung in the scan wins — the output flickers or depends on scan order, which is hard to fault-find. Step 2: The fix is to combine both conditions into a single rung: the sensor contact and the timer contact arranged so the one rung gives the right result. Step 3: For example, the sensor contact in series with a NC timer-done contact, driving the one motor coil. A good answer names the last-rung-wins rule and the single-rung fix.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What is a rung in ladder logic?",
      "choices": [
        "The vertical power rail",
        "One horizontal line: a rule that turns its coil on when its contacts are satisfied",
        "A type of sensor",
        "The PLC's power supply"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A rung is one horizontal rule between the rails. (a) is the rail, not the rung. (c) is wrong: sensors are inputs, not rungs. (d) is wrong: the power supply is hardware."
    },
    {
      "q": "A normally closed (NC) contact is true when…",
      "choices": [
        "Its input is ON",
        "Its input is OFF",
        "The coil is energised",
        "The PLC is in program mode"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An NC contact passes power when its input is off, and opens when the input turns on. (a) describes a NO contact. (c) is wrong: a contact's state depends on its input, not on a coil. (d) is wrong: the PLC's mode does not change contact logic."
    },
    {
      "q": "Two contacts in series on a rung act as…",
      "choices": [
        "An OR — either one turns the coil on",
        "An AND — both must be true for the coil to turn on",
        "A timer",
        "A counter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Series contacts are an AND: power must pass through both. (a) describes parallel contacts. (c) and (d) are different instructions, not contact arrangements."
    },
    {
      "q": "Two contacts in parallel on a rung act as…",
      "choices": [
        "An AND — both must be true",
        "An OR — either one turns the coil on",
        "A seal-in",
        "A short circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Parallel contacts are an OR: power reaches the coil through either branch. (a) describes series contacts. (c) is a specific circuit pattern, not a general rule. (d) is wrong: parallel contacts are normal logic, not a fault."
    },
    {
      "q": "What is the purpose of the seal-in contact in a start/stop motor circuit?",
      "choices": [
        "To stop the motor",
        "To keep the motor running after the Start button is released",
        "To make the motor run faster",
        "To protect the motor from overload"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The seal-in contact, wired in parallel with Start, holds the rung true once the motor is on. (a) is the Stop button's job. (c) is wrong: a seal-in does not change motor speed. (d) is an overload relay's job."
    },
    {
      "q": "Why is a Stop button wired as a normally closed contact?",
      "choices": [
        "So the motor runs while Stop is pressed",
        "So that a broken wire opens the rung and stops the machine — fail-safe",
        "Because NC contacts are cheaper",
        "Because the PLC requires it"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An NC stop means any wire break or button failure opens the rung and stops the machine, which is the safe direction. (a) is backwards: the motor must stop when Stop is pressed. (c) is wrong: cost is not the reason. (d) is wrong: the PLC does not require it — safety does."
    },
    {
      "q": "What does XIC mean in Allen-Bradley ladder logic?",
      "choices": [
        "Examine if closed — a normally open contact",
        "Examine if open — a normally closed contact",
        "Output energise — a coil",
        "Timer on delay"
      ],
      "answer": 0,
      "explanation": "Correct: (a). XIC (examine if closed) is the NO contact instruction. (b) is XIO. (c) is OTE. (d) is a TON timer."
    },
    {
      "q": "A rung has a Start NO contact in parallel with a seal-in NO contact, in series with a Stop NC contact, driving a Motor coil. The motor is running and the operator releases Start. What happens?",
      "choices": [
        "The motor stops immediately",
        "The motor keeps running, because the seal-in contact holds the rung true",
        "The motor runs backwards",
        "The PLC faults"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The seal-in contact carries the rung once Start is released, so the motor stays on until Stop is pressed. (a) is wrong: that would happen with no seal-in. (c) is wrong: direction is not controlled by this rung. (d) is wrong: nothing here faults the PLC."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Ladder Logic Basics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Read a ladder diagram: rails, rungs, contacts, and coils.</p>\n<p><strong>Key terms:</strong> Rung · Rail · Contact · Normally open (NO) contact · Normally closed (NC) contact · Coil · Seal-in circuit · XIC.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Read a ladder diagram: rails, rungs, contacts, and coils.</li>\n<li>Tell normally open and normally closed contacts apart.</li>\n<li>Explain series (AND) and parallel (OR) contact logic.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
