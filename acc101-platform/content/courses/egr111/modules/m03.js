// egr111 - Module 3: Timers & Counters
module.exports = {
  "number": 3,
  "slug": "timers-counters",
  "title": "Timers & Counters",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the difference between TON, TOF, and RTO timers.",
    "Work out when a timer's done bit turns on from its preset and input.",
    "Explain CTU and CTD counters and their done bits.",
    "Read a timing diagram for a timer or counter.",
    "Choose the right timer or counter for a control job."
  ],
  "sections": [
    {
      "heading": "Timers: Doing Things After a Delay",
      "html": "<p>A timer is an instruction that measures time inside the PLC program. It has three parts: a preset (PRE), the time you want to measure; an accumulator (ACC), the time measured so far; and a done bit (DN), which turns on when the accumulator reaches the preset. The timer's time base is the unit of the preset — usually 0.01 s or 0.1 s, so always check the base before setting a preset: a preset of 50 with a 0.1 s base means 5 seconds, not 50.</p>\n<p>Timers let a machine wait before acting: a conveyor runs for 10 seconds after a box is detected, a fan keeps running for 30 seconds after a motor stops, or a glue gun fires 2 seconds after a part arrives. Without timers, a PLC could only react instantly — and most real machines need to wait.</p>\n"
    },
    {
      "heading": "TON, TOF, and RTO",
      "html": "<p>The on-delay timer (TON) is the most common. Its accumulator counts up while its input rung is true, and its done bit turns on when ACC reaches PRE. If the input goes false before the preset, the accumulator resets to zero and the done bit stays off. Example: a TON with a preset of 5 s and an input that turns on at t = 0 — the done bit turns on at t = 5 s. If the input drops at t = 3 s, the accumulator resets and the done bit never turns on.</p>\n<p>The off-delay timer (TOF) does the opposite: its done bit turns on immediately when the input goes true, and the accumulator counts after the input goes false, turning the done bit off only when the preset is reached — so an output stays on for a set time after its input drops. The retentive timer (RTO) is like a TON, but its accumulator does not reset when the input goes false: it holds its value and continues from where it stopped when the input comes back, and it is reset only by a separate reset instruction. Use an RTO when you need to add up scattered periods of time, such as total running time.</p>\n"
    },
    {
      "heading": "Counters: Counting Events",
      "html": "<p>A counter counts pulses: each time its input rung goes from false to true, the accumulator (ACC) increases by one (for a count-up counter, CTU) or decreases by one (for a count-down counter, CTD). Its done bit turns on when ACC reaches the preset. Example: a CTU with a preset of 10 counts boxes on a conveyor — after 7 pulses ACC = 7 and DN is false; after the 10th pulse ACC = 10 and DN turns on, which can trigger a full-box alarm or a pallet change.</p>\n<p>Counters are reset with a reset instruction, which sets ACC back to zero and turns DN off. A common pattern is a counter that fills a box, then a reset rung that fires when the box is changed, starting the count again. Counters and timers are often combined: a counter counts the parts, and a timer measures how long the batch took.</p>\n"
    },
    {
      "heading": "Timing Diagrams: Seeing Time on Paper",
      "html": "<p>A timing diagram shows inputs and outputs as lines over time, and it is the best way to understand a timer or counter. For a TON, draw the input going high at t = 0, the accumulator ramping up, and the done bit stepping on at t = 5 s. If the input drops at t = 3 s, the accumulator falls back to zero immediately. For a TOF, the done bit steps on with the input and steps off the preset time after the input drops.</p>\n<p>Drawing the diagram before writing the rung is good practice: if you cannot draw what the timer should do, you cannot program it. Timing diagrams are also how you fault-find — compare the diagram you expect with the timing you observe on the PLC's online monitor, and the difference points at the fault.</p>\n"
    },
    {
      "heading": "Choosing and Common Mistakes",
      "html": "<p>Choose a TON when an output should wait after an input — a delayed start. Choose a TOF when an output should stay on after its input — a fan run-on or a light that stays on after a door closes. Choose an RTO when time must be added up across interruptions. Choose a CTU when events must be counted, and a CTD when things must be counted down, such as parts remaining in a batch.</p>\n<p><p><strong>Takeaways:</strong><ul><li>A timer has a preset, an accumulator, and a done bit; check the time base before setting a preset.</li><li>TON: done turns on after the input has been true for the preset time; the accumulator resets if the input drops early.</li><li>TOF: done turns on with the input and off a preset time after the input drops.</li><li>RTO: the accumulator holds its value when the input drops and needs a separate reset.</li><li>CTU counts up to its preset; CTD counts down; both need a reset instruction.</li></ul></p>\n<p><strong>Common mistake:</strong> Setting a preset without checking the time base. A preset of 50 with a 0.1 s base is 5 seconds, not 50 seconds — read the base first.</p>\n<p><strong>Common mistake:</strong> Expecting a TON to remember its accumulator when the input drops. A TON resets on a false input — only an RTO holds its value.</p>\n<p><strong>Ready check:</strong> If you can work out when a TON's done bit turns on, what a CTU's accumulator reads after a given number of pulses, and which timer fits each job, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Timer",
      "def": "A PLC instruction that measures time, with a preset, an accumulator, and a done bit."
    },
    {
      "term": "TON",
      "def": "Timer on delay: the done bit turns on after the input has been true for the preset time."
    },
    {
      "term": "TOF",
      "def": "Timer off delay: the done bit turns on with the input and off a preset time after the input drops."
    },
    {
      "term": "RTO",
      "def": "Retentive timer on delay: like a TON, but the accumulator holds its value when the input drops."
    },
    {
      "term": "CTU",
      "def": "Count up counter: the accumulator increases by one on each rising edge of its input."
    },
    {
      "term": "CTD",
      "def": "Count down counter: the accumulator decreases by one on each rising edge of its input."
    },
    {
      "term": "Preset (PRE)",
      "def": "The target value for a timer or counter; the done bit turns on when the accumulator reaches it."
    },
    {
      "term": "Accumulator (ACC)",
      "def": "The current value of a timer or counter: the time measured so far, or the pulses counted so far."
    },
    {
      "term": "Done bit (DN)",
      "def": "The output bit of a timer or counter, on when the accumulator has reached the preset."
    },
    {
      "term": "Time base",
      "def": "The unit of a timer's preset, such as 0.01 s or 0.1 s; always check it before setting a preset."
    },
    {
      "term": "Retentive",
      "def": "Holding its value when the input goes false, as an RTO timer does, until a reset instruction clears it."
    },
    {
      "term": "Reset instruction",
      "def": "An instruction that clears a timer's or counter's accumulator back to zero."
    },
    {
      "term": "Timing diagram",
      "def": "A drawing of inputs and outputs as lines over time, used to design and fault-find timers and counters."
    },
    {
      "term": "Rising edge",
      "def": "The moment an input changes from false to true; counters count rising edges, not levels."
    }
  ],
  "video": {
    "title": "Studio 5000 Timers and Counters Explained (TON, TOF, RTO, CTU, CTD)",
    "embedUrl": "https://www.youtube.com/embed/-TY3NG71s0o",
    "note": "TON, TOF, RTO, CTU, and CTD explained with timing diagrams and worked examples. Draw each timing diagram yourself as the video explains it, then check your drawing against the screen.",
    "more": [
      {
        "title": "The Ultimate Allen Bradley PLC Training For Beginners in 2026",
        "url": "https://www.youtube.com/watch?v=ImCIF_lHN4Q"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A TON timer has a preset of 5 s. Its input turns on at t = 0 s and stays on. At what time does the done bit turn on? Show your reasoning.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The accumulator starts at 0 and counts up while the input is true. Step 2: The done bit turns on when ACC reaches PRE, which is 5 s. Step 3: So DN turns on at t = 5 s. A good answer gives the time and the ACC = PRE rule.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The same TON (preset 5 s) has its input turn on at t = 0 s, but the input drops at t = 3 s. Does the done bit ever turn on? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — the accumulator only reaches 3 s before the input drops. Step 2: A TON resets its accumulator to zero when its input goes false, so the count is lost. Step 3: The done bit never turns on; if the input comes back, the timer starts again from zero. A good answer explains the reset.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A CTU counter has a preset of 10 and counts boxes on a conveyor. After 7 boxes, what are ACC and DN? After 10 boxes, what are ACC and DN?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: After 7 pulses, ACC = 7 and DN is false, because 7 is below the preset of 10. Step 2: After 10 pulses, ACC = 10 and DN turns on. Step 3: The done bit can then trigger a full-box alarm or a pallet change. A good answer gives both ACC values and both DN states.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A cooling fan must keep running for 30 seconds after a motor stops. Which timer do you use, and how is it wired?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use a TOF (off-delay) timer, because the output must stay on after its input drops. Step 2: The timer's input rung is true while the motor runs; when the motor stops, the input goes false and the timer starts counting. Step 3: The fan is driven by the timer's done bit, which stays on for the 30 s preset after the motor stops, then turns off. A good answer names the TOF and the done-bit output.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A machine must add up its total running time across many short runs, and a supervisor resets the total each Monday. Which timer do you use, and why not a TON?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use an RTO (retentive timer), because its accumulator holds its value when the input drops and continues from where it stopped. Step 2: A TON would reset its accumulator to zero every time the machine stopped, losing the accumulated time. Step 3: A reset instruction on Monday clears the RTO for the new week. A good answer names the RTO and explains the TON's reset behaviour.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A conveyor must run for 10 seconds after a box is detected, then stop. Design the timer part of the program: which timer, what preset, and what drives the conveyor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use a TOF timer with a preset of 10 s. Step 2: The box sensor drives the timer's input rung, so the done bit is on while the box is present and for 10 s after it passes. Step 3: The conveyor motor is driven by the timer's done bit. Step 4: Check the time base first — with a 0.1 s base the preset is 100, not 10. A good answer names the TOF, the preset, and the time-base check.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A TON timer has a preset of 5 s. Its input turns on at t = 0 s and stays on. When does the done bit turn on?",
      "choices": [
        "At t = 0 s",
        "At t = 3 s",
        "At t = 5 s",
        "Never — a TON done bit turns off"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The accumulator reaches the 5 s preset at t = 5 s, and DN turns on. (a) is when the input turns on, not when DN turns on. (b) is the accumulator value at 3 s, not the done time. (d) is wrong: a TON's done bit turns on at the preset."
    },
    {
      "q": "A TON timer (preset 5 s) has its input turn on at t = 0 s, but the input drops at t = 3 s. What happens?",
      "choices": [
        "The done bit turns on at t = 5 s anyway",
        "The accumulator resets to zero and the done bit never turns on",
        "The accumulator holds at 3 s",
        "The timer switches to off-delay mode"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A TON resets its accumulator when its input goes false, so the count is lost and DN never turns on. (a) is wrong: the timer needs a continuous input. (c) describes an RTO, not a TON. (d) is wrong: a timer does not change type."
    },
    {
      "q": "A CTU counter has a preset of 10. After 7 pulses, what are ACC and DN?",
      "choices": [
        "ACC = 7, DN is false",
        "ACC = 10, DN is true",
        "ACC = 3, DN is false",
        "ACC = 7, DN is true"
      ],
      "answer": 0,
      "explanation": "Correct: (a). After 7 pulses ACC = 7, which is below the preset of 10, so DN is still false. (b) is the state after 10 pulses. (c) is wrong: ACC counts up, it does not count down from the preset. (d) is wrong: DN only turns on at the preset."
    },
    {
      "q": "The same CTU counter (preset 10) receives its 10th pulse. What happens?",
      "choices": [
        "ACC = 10 and DN turns on",
        "ACC resets to 0 automatically",
        "ACC = 9 and DN stays false",
        "The counter stops counting forever"
      ],
      "answer": 0,
      "explanation": "Correct: (a). At the 10th pulse ACC reaches the preset and DN turns on. (b) is wrong: a counter needs a reset instruction to clear. (c) is wrong: the 10th pulse makes ACC 10, not 9. (d) is wrong: the counter keeps counting past the preset unless reset."
    },
    {
      "q": "Which timer keeps its output on for a set time after its input drops?",
      "choices": [
        "TON",
        "TOF",
        "RTO",
        "CTU"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A TOF (off-delay) timer's done bit stays on for the preset time after the input goes false. (a) is wrong: a TON delays turning on. (c) is wrong: an RTO is a retentive on-delay timer. (d) is a counter, not a timer."
    },
    {
      "q": "Which timer holds its accumulator value when its input goes false, continuing from where it stopped?",
      "choices": [
        "TON",
        "TOF",
        "RTO",
        "CTD"
      ],
      "answer": 2,
      "explanation": "Correct: (c). An RTO (retentive timer) holds its accumulator until a reset instruction clears it. (a) is wrong: a TON resets on a false input. (b) is wrong: a TOF counts after its input drops, it does not hold. (d) is a count-down counter, not a timer."
    },
    {
      "q": "A timer preset is 50 and the time base is 0.1 s. How long is the timed delay?",
      "choices": [
        "50 s",
        "5 s",
        "0.5 s",
        "500 s"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 50 × 0.1 s = 5 s. (a) forgets the time base. (c) uses a 0.01 s base. (d) multiplies by 10 instead of 0.1."
    },
    {
      "q": "What does a counter count?",
      "choices": [
        "The level of its input — how long it stays true",
        "Rising edges of its input — each false-to-true change adds one",
        "The voltage on its input",
        "The scan time of the PLC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A counter adds one on each rising edge of its input. (a) describes a timer, not a counter. (c) is wrong: counters count edges, not voltages. (d) is wrong: scan time is unrelated to counting."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Timers & Counters: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain the difference between TON, TOF, and RTO timers.</p>\n<p><strong>Key terms:</strong> Timer · TON · TOF · RTO · CTU · CTD · Preset (PRE) · Accumulator (ACC).</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain the difference between TON, TOF, and RTO timers.</li>\n<li>Work out when a timer's done bit turns on from its preset and input.</li>\n<li>Explain CTU and CTD counters and their done bits.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
