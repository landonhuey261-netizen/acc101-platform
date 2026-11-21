// ele109 - Module 4: Ladder Logic Programming Basics
module.exports = {
  "number": 4,
  "slug": "ladder-logic-programming-basics",
  "title": "Ladder Logic Programming Basics",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the basic ladder instructions: XIC, XIO, OTE, OTL, and OTU.",
    "Write a start-stop (seal-in) rung in ladder logic.",
    "Use branches (OR logic) and series contacts (AND logic) in a rung.",
    "Explain the difference between an output (OTE) and a latched output (OTL/OTU).",
    "Describe how the PLC evaluates rungs top to bottom, left to right."
  ],
  "sections": [
    {
      "heading": "The Instructions: XIC, XIO & OTE",
      "html": "<p>Ladder logic uses a small set of instructions, and three of them do most of the work. <strong>XIC (examine if closed)</strong> asks: is this input (or bit) on? If it is on, the instruction is true and the rung's logic continues; if it is off, the instruction is false and the rung is false. <strong>XIO (examine if open)</strong> asks the opposite: is this input off? If it is off, the instruction is true. <strong>OTE (output energize)</strong> sets an output bit to match the rung's logic: if the rung is true, the output turns on; if the rung is false, the output turns off. An OTE is the coil at the end of the rung, and it is the only instruction that writes an output on a normal rung.</p>\n<p>The names come from the relay world: XIC is the PLC version of a normally open contact (examine the bit — if it is closed/on, pass power), XIO is the normally closed contact (if it is open/off, pass power), and OTE is the coil. The difference from relay logic is that the PLC's contacts and coils are bits in memory, not physical devices — the same bit can be examined by many XIC and XIO instructions on many rungs, and the same output bit can be written by only one OTE (writing the same output from two rungs is the classic beginner's error, because the last rung evaluated wins and the first rung's result is lost).</p>\n<div class=\"callout\"><strong>Key idea:</strong> XIC asks \"is it on?\" XIO asks \"is it off?\" OTE sets the output to match the rung. A rung is true when its logic passes from left to right.</div>"
    },
    {
      "heading": "The Seal-In Rung: Start-Stop in Ladder Logic",
      "html": "<p>The start-stop circuit from Electrical 108, Module 4 becomes one ladder rung in a PLC. The rung has, from left to right: an XIO for the stop button (because the stop button is wired NC, its input is on at rest, and the XIO is true when the button is not pressed), an XIC for the start button in parallel with an XIC for the motor output bit itself (the seal-in), and an OTE for the motor output. Press start: the start XIC is true, the rung is true, the output turns on, and the seal-in XIC (which examines the output bit) becomes true. Release start: the seal-in XIC keeps the rung true. Press stop: the stop input turns off, the XIO becomes false, the rung is false, the output turns off, and the seal-in opens.</p>\n<p>Notice the stop button's logic: because the physical stop button is NC, its input bit is on when the button is at rest, so the rung uses an XIO (examine if open) to make the rung true while the button is unpressed. This is the point that confuses beginners most — the instruction is chosen by the bit's state, not by the button's label. A good habit is to write a comment on every rung saying what it does in plain words (\"Motor 1 seal-in: start button OR sealed output, AND NOT stop\"), so the next person can read the rung without reverse-engineering it.</p>"
    },
    {
      "heading": "Branches, AND & OR Logic",
      "html": "<p>Contacts in series are AND logic: every contact in the series must be true for the rung to be true. Contacts in parallel — a <strong>branch</strong> — are OR logic: any branch being true makes the rung true. The seal-in rung is both: the stop XIO and the overload XIO are in series with the parallel pair (start XIC OR seal-in XIC), so the rung reads as \"(start OR sealed) AND NOT stop AND NOT overload tripped.\" Branches can be nested — a branch inside a branch — to build more complex conditions, but a rung that needs more than two levels of nesting is usually better split into two rungs with an intermediate bit.</p>\n<p>The PLC evaluates rungs <strong>top to bottom, left to right</strong>, one rung per pass through the program scan. That order matters: if rung 1 sets a bit that rung 2 examines, rung 2 sees the new value on the same scan; if rung 2 sets a bit that rung 1 examines, rung 1 does not see it until the next scan. Most programs are written so the order does not matter — inputs at the top, logic in the middle, outputs at the bottom — but a program that depends on rung order to work is fragile, and a technician who does not know the order can be badly confused by it. Keep the order simple and the logic obvious.</p>"
    },
    {
      "heading": "Latched Outputs: OTL & OTU",
      "html": "<p>An OTE output turns off when its rung goes false. Sometimes you want an output that stays on after its rung goes false — a fault lamp that stays lit until it is acknowledged, or a machine state that persists. That is what <strong>OTL (output latch)</strong> and <strong>OTU (output unlatch)</strong> do: an OTL sets a bit on and leaves it on even when its rung goes false, and an OTU on another rung turns the same bit off. The two instructions work as a pair, and the bit stays in whichever state was last commanded. OTL and OTU are used for alarms, for mode selection, and for any state that must survive after its trigger is gone.</p>\n<p>Latched outputs need care: a latched bit that is never unlatched stays on forever, including through a program download and (if it is in retentive memory) through a power failure. A machine that starts with a latched output still on from last week is a machine with a mystery fault. The discipline is to always write the OTU rung near the OTL rung, to document both, and to include a first-scan unlatch for any latch that must start in a known state. If a seal-in rung can do the job — and it usually can — use a seal-in instead of a latch, because the seal-in's behavior is visible on one rung.</p>\n<div class=\"callout\"><strong>Common mistake:</strong> Writing the same output bit with two OTE instructions on two different rungs. The last rung evaluated wins, and the first rung's result is silently lost. One output, one OTE — use internal bits for the intermediate logic.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>XIC asks \"is it on?\" XIO asks \"is it off?\" OTE sets the output to match the rung.</li>\n<li>The seal-in rung: XIO (stop, NC) in series with (XIC start OR XIC sealed output) driving the OTE. The stop uses XIO because its input is on at rest.</li>\n<li>Series contacts are AND; parallel branches are OR. The PLC evaluates rungs top to bottom, left to right.</li>\n<li>OTL latches a bit on until an OTU unlatches it. Use latches sparingly, document both halves, and prefer a seal-in when it can do the job.</li>\n<li>One output, one OTE. Writing the same output from two rungs means the last rung wins and the first is lost.</li>\n<li>Comment every rung in plain words — the next person to read it will thank you.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Choosing XIC for a stop button because the button is labeled \"stop.\" The instruction is chosen by the bit's state: a NC stop button's input is on at rest, so the rung needs XIO to be true while the button is unpressed.</div>\n<p><strong>Ready-to-Work link:</strong> If you can write a seal-in rung and explain XIC, XIO, and OTE, you have this module. Module 5 covers timers and counters.</p>"
    }
  ],
  "keyTerms": [
    { "term": "XIC (examine if closed)", "def": "A ladder instruction that is true when the bit it examines is on." },
    { "term": "XIO (examine if open)", "def": "A ladder instruction that is true when the bit it examines is off." },
    { "term": "OTE (output energize)", "def": "A ladder instruction that sets an output bit to match the rung's logic." },
    { "term": "OTL (output latch)", "def": "A ladder instruction that sets a bit on and leaves it on until an OTU turns it off." },
    { "term": "OTU (output unlatch)", "def": "A ladder instruction that turns off a bit previously set by an OTL." },
    { "term": "Seal-in rung", "def": "A start-stop rung in which the output bit is examined in parallel with the start button to hold the rung true." },
    { "term": "Branch", "def": "A parallel path in a rung; OR logic — any branch being true makes the rung true." },
    { "term": "Bit", "def": "A single on/off value in the PLC's memory: an input, an output, or an internal bit." },
    { "term": "Internal bit", "def": "A memory bit used for logic inside the program, not wired to a physical input or output." },
    { "term": "Rung", "def": "One horizontal line of ladder logic, ending in an output instruction." },
    { "term": "First scan", "def": "The first program scan after the PLC is powered up or put in run mode; used to initialize bits." },
    { "term": "Double-coil error", "def": "Writing the same output bit with two OTE instructions; the last rung evaluated wins." },
    { "term": "Comment", "def": "A plain-words note on a rung explaining what it does." },
    { "term": "Address", "def": "The identifier of a PLC input, output, or bit (such as I:0/0 or O:0/1)." }
  ],
  "video": {
    "title": "What is Ladder Logic?",
    "embedUrl": "https://www.youtube.com/embed/qaI48NCUvkA",
    "note": "A clear introduction to ladder logic — XIC, XIO, and OTE, and how a rung is evaluated left to right. Watch how the seal-in rung holds itself in after the start button is released.",
    "more": [
      { "title": "PLC Ladder Logic Basics For Beginners With A Working Conveyor", "url": "https://www.youtube.com/watch?v=GhgFdLDdUIY" },
      { "title": "PLC Programming Tutorial - Ladder Logic #1: Binary & Boolean Operations", "url": "https://www.youtube.com/watch?v=TvY2aw5htfM" }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Write the seal-in rung for a motor in words: list the instructions from left to right.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: XIO for the stop button (its input is on at rest, so XIO is true while unpressed). Step 2: A parallel branch with an XIC for the start button and an XIC for the motor output bit (the seal-in). Step 3: An XIO for the overload contact. Step 4: An OTE for the motor output.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A rung has two XIC instructions in series driving an OTE. The first input is on and the second is off. Is the output on? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: Series contacts are AND logic — both must be true for the rung to be true. Step 3: The second XIC is false, so the rung is false and the OTE turns the output off.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A rung has two XIC instructions in parallel (a branch) driving an OTE. The first input is on and the second is off. Is the output on? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Yes. Step 2: Parallel contacts are OR logic — any branch being true makes the rung true. Step 3: The first XIC is true, so the rung is true and the OTE turns the output on.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> An output bit is written by an OTE on rung 5 and by an OTE on rung 12. Both rungs are true. Which one controls the output, and why is this a problem?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Rung 12 controls it, because the PLC evaluates rungs top to bottom and the last rung evaluated wins. Step 2: Rung 5's result is silently lost. Step 3: This is a double-coil error — one output, one OTE; use internal bits for the intermediate logic.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A fault lamp must stay on after the fault clears, until an operator presses an acknowledge button. Which instructions do you use, and on which rungs?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An OTL on one rung, driven by the fault condition, to latch the lamp bit on. Step 2: An OTU on another rung, driven by the acknowledge button, to unlatch it. Step 3: The lamp stays on after the fault clears because the OTL holds the bit until the OTU is commanded.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A stop button is wired normally closed, so its input bit is on at rest. Which instruction do you use for it in the seal-in rung, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: XIO (examine if open). Step 2: The XIO is true when the bit is off — that is, when the button is NOT pressed. Step 3: Pressing the stop button turns the input off, the XIO goes false, and the rung drops out. Using XIC instead would make the rung false at rest and the motor could never start.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An XIC instruction is true when the bit it examines is:",
      "choices": ["Off", "On", "Broken", "Analog"],
      "answer": 1,
      "explanation": "Correct: (b). XIC (examine if closed) is true when the bit is on. (a) Off makes an XIC false and an XIO true. (c) Broken is not a bit state. (d) Analog values are not examined by XIC."
    },
    {
      "q": "An XIO instruction is true when the bit it examines is:",
      "choices": ["On", "Off", "Broken", "Analog"],
      "answer": 1,
      "explanation": "Correct: (b). XIO (examine if open) is true when the bit is off. (a) On makes an XIO false and an XIC true. (c) Broken is not a bit state. (d) Analog values are not examined by XIO."
    },
    {
      "q": "An OTE instruction:",
      "choices": ["Reads an input", "Sets an output bit to match the rung's logic", "Starts a timer", "Counts parts"],
      "answer": 1,
      "explanation": "Correct: (b). OTE writes the output to match the rung. (a) Reading inputs is done by XIC/XIO. (c) Timers use TON/TOF instructions. (d) Counting uses CTU/CTD instructions."
    },
    {
      "q": "In a seal-in rung, the stop button (wired NC) is examined with an:",
      "choices": ["XIC", "XIO", "OTE", "OTL"],
      "answer": 1,
      "explanation": "Correct: (b). The NC stop input is on at rest, so XIO is true while unpressed. (a) XIC would be true at rest and false when pressed — backwards. (c) OTE is an output, not an examination. (d) OTL is a latch, not an examination."
    },
    {
      "q": "Contacts in parallel in a rung represent:",
      "choices": ["AND logic", "OR logic", "NOT logic", "No logic"],
      "answer": 1,
      "explanation": "Correct: (b). Parallel is OR — any branch true makes the rung true. (a) AND is series contacts. (c) NOT is an XIO. (d) Parallel contacts are meaningful logic."
    },
    {
      "q": "Writing the same output bit with two OTE instructions is a problem because:",
      "choices": ["The PLC will not run", "The last rung evaluated wins and the first rung's result is lost", "The output will burn out", "The program becomes too long"],
      "answer": 1,
      "explanation": "Correct: (b). Double-coil: the last OTE wins. (a) The PLC runs, but the logic is wrong. (c) The output does not burn out. (d) Length is not the problem."
    },
    {
      "q": "An OTL/OTU pair is used when:",
      "choices": ["An output must turn off when its rung goes false", "An output must stay on after its trigger is gone, until a separate unlatch command", "A timer is needed", "An input must be inverted"],
      "answer": 1,
      "explanation": "Correct: (b). OTL latches on until OTU unlatches it. (a) That is an OTE. (c) Timers use TON/TOF. (d) Inversion uses XIO."
    },
    {
      "q": "The PLC evaluates rungs:",
      "choices": ["Bottom to top", "Top to bottom, left to right", "In random order", "All at once"],
      "answer": 1,
      "explanation": "Correct: (b). Top to bottom, left to right, one rung at a time. (a) Bottom to top is backwards. (c) The order is fixed, not random. (d) Rungs are evaluated one at a time, not simultaneously."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Ladder Logic Programming Basics: Quick Reference</h3>\n<p><strong>Core idea:</strong> XIC asks \"is it on?\" XIO asks \"is it off?\" OTE sets the output to match the rung.</p>\n<p><strong>Seal-in rung:</strong> XIO (stop, NC) in series with (XIC start OR XIC sealed output) → OTE (motor). The stop uses XIO because its input is on at rest.</p>\n<p><strong>Logic:</strong> Series = AND · Parallel branch = OR. Rungs evaluate top to bottom, left to right.</p>\n<p><strong>Latches:</strong> OTL sets a bit on until OTU turns it off. Use sparingly; prefer a seal-in when it can do the job.</p>\n<p><strong>Rule:</strong> One output, one OTE. Comment every rung in plain words.</p>\n<p><strong>Self-check:</strong> Write a seal-in rung from memory and explain XIC vs XIO. If you can, you have this module.</p>\n"
};
