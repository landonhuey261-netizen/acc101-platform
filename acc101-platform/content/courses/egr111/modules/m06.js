// egr111 - Module 6: Ladder Programs: Sequencing & Interlocks
module.exports = {
  "number": 6,
  "slug": "ladder-programs-sequencing-interlocks",
  "title": "Ladder Programs: Sequencing & Interlocks",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a sequence is and how step logic works.",
    "Design a simple multi-step sequence in ladder logic.",
    "Explain interlocks and why forward/reverse motors need them.",
    "Explain one-shot (edge-triggered) instructions.",
    "Structure a program with a main routine and subroutines."
  ],
  "sections": [
    {
      "heading": "Sequences: One Step at a Time",
      "html": "<p>Most machines do not do one thing — they do a series of steps in order. A bottling machine fills, caps, labels, and ejects, one step after another. In ladder logic, a sequence is built from step bits: one internal bit per step, with each step turning on the next when its work is done. Only one step bit is on at a time, and each step's rung checks that its own step bit is on before it acts.</p>\n<p>A step advances when its completion condition is met: a sensor sees the part, a timer finishes, or a cylinder reaches its end position. The step bit turns off, the next step bit turns on, and the machine moves on. If a step's condition never arrives, the machine waits at that step — which is exactly what you want, because it means a fault is visible as a machine stuck at a known step, rather than a machine doing the wrong thing.</p>\n"
    },
    {
      "heading": "Interlocks: Preventing the Impossible",
      "html": "<p>An interlock is a condition that prevents an unsafe or impossible action. The classic example is a forward/reverse motor: the forward contactor and the reverse contactor must never be on at the same time, or they short the supply together. Each direction's rung includes an NC contact from the other direction's output, so forward cannot start while reverse is on, and vice versa. That is a hard interlock — it is built into the logic and cannot be overridden by the operator.</p>\n<p>Interlocks also protect the process: a press cannot close while the guard door is open, a conveyor cannot run while a maintenance gate is open, and a heater cannot run without cooling water flowing. A permissive is the opposite idea — a condition that must be true before an action is allowed, such as “water flowing” before “heater on”. Interlocks and permissives are the logic that keeps machines and people safe.</p>\n"
    },
    {
      "heading": "One-Shots: Acting on the Edge",
      "html": "<p>Sometimes you need an action to happen once, at the moment an input changes, rather than for as long as the input stays true. A one-shot (ONS) instruction does that: its output is true for exactly one scan when its input rung goes from false to true. Use a one-shot to count a part once as it passes a sensor (without it, a sensor that stays on for ten scans would count ten parts), or to trigger a single action on a button press.</p>\n<p>The difference between a level and an edge matters everywhere in ladder logic. A counter counts edges, not levels; a one-shot turns a level into an edge. If a program behaves differently on a long button press than on a short one, the chances are that an edge — or the lack of one — is the cause.</p>\n"
    },
    {
      "heading": "Structuring a Program",
      "html": "<p>A real PLC program is not one long list of rungs — it is structured. The main routine calls subroutines, each handling one part of the machine: one for the conveyor, one for the filler, one for alarms. Each subroutine has a clear job, and the main routine decides which ones run. That structure makes the program readable, lets one person work on one part without breaking the rest, and makes fault-finding faster because a fault can be traced to one subroutine.</p>\n<p>Good ladder style also matters: give every tag a clear name (Conveyor_Run, not O:0/3), add a comment to each rung explaining what it does, and keep rungs short — one idea per rung. A program that is easy to read is easy to fault-find, and the person fault-finding it at 2 a.m. may be you.</p>\n"
    },
    {
      "heading": "A Worked Example: The Traffic Light",
      "html": "<p>A traffic light is the classic sequencing exercise, and it is the subject of this course's first lab. The sequence has six steps: north-south green (30 s), north-south yellow (5 s), all red (2 s), east-west green (25 s), east-west yellow (5 s), and all red (2 s). Each step is a timer and a set of lamp outputs, and the step bits advance the sequence. The total cycle is 30 + 5 + 2 + 25 + 5 + 2 = 69 seconds.</p>\n<p>The interlocks matter here too: the program must never show green in both directions at once, and the all-red step between directions is a deliberate safety gap. <p><strong>Takeaways:</strong><ul><li>A sequence is a chain of step bits; only one step is on at a time.</li><li>A step advances when its completion condition is met.</li><li>Interlocks prevent unsafe combinations, such as forward and reverse together.</li><li>A one-shot turns a level into a single-scan pulse, so an action happens once per change.</li><li>Structure programs into a main routine and subroutines, one job each.</li></ul></p>\n<p><strong>Common mistake:</strong> Counting a level instead of an edge. A sensor that stays on for ten scans counts ten parts unless a one-shot or a counter's edge detection is used.</p>\n<p><strong>Common mistake:</strong> Forgetting the interlock between forward and reverse. Without it, both contactors can close together and short the supply.</p>\n<p><strong>Ready check:</strong> If you can describe a step sequence, explain a forward/reverse interlock, and say when to use a one-shot, you have this module. Remember: this app cannot run or grade PLC programs — the labs here are paper simulations and design documentation, not bench work.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Sequence",
      "def": "A series of steps a machine performs in order, each step starting when the previous one finishes."
    },
    {
      "term": "Step bit",
      "def": "An internal PLC bit that marks the current step of a sequence; only one step bit is on at a time."
    },
    {
      "term": "Interlock",
      "def": "A logic condition that prevents an unsafe or impossible action, such as forward and reverse running together."
    },
    {
      "term": "Permissive",
      "def": "A condition that must be true before an action is allowed, such as cooling water flowing before a heater starts."
    },
    {
      "term": "One-shot (ONS)",
      "def": "An instruction whose output is true for exactly one scan when its input rung goes from false to true."
    },
    {
      "term": "Edge trigger",
      "def": "Acting on the change of an input (false to true), rather than on its level."
    },
    {
      "term": "Level",
      "def": "The steady state of an input (on or off), as opposed to the moment it changes."
    },
    {
      "term": "Main routine",
      "def": "The top-level PLC routine that calls the subroutines and controls the overall flow."
    },
    {
      "term": "Subroutine",
      "def": "A named block of rungs that handles one part of the machine, called from the main routine."
    },
    {
      "term": "State machine",
      "def": "A design where a system is always in one named state and moves to the next state on defined conditions."
    },
    {
      "term": "Mutual exclusion",
      "def": "A rule that two outputs can never be on at the same time, enforced by interlocks."
    },
    {
      "term": "Completion condition",
      "def": "The sensor, timer, or event that tells a sequence step its work is done, so the next step can start."
    }
  ],
  "video": {
    "title": "PLC Automation Tutorial: Conveyor Belt System Programming #automation #electricalcircuit #plc",
    "embedUrl": "https://www.youtube.com/embed/J73pYiE0XS8",
    "note": "A conveyor system programmed step by step in ladder logic, with sequencing and interlocks shown on screen. Follow the step bits through the sequence, then sketch the same sequence as a list of steps and completion conditions.",
    "more": [
      {
        "title": "The Ultimate Allen Bradley PLC Training For Beginners in 2026",
        "url": "https://www.youtube.com/watch?v=ImCIF_lHN4Q"
      },
      {
        "title": "Ladder Logic Basics Walkthrough",
        "url": "https://www.youtube.com/watch?v=ZBtXj0JTp6w"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A motor can run forward or reverse. Explain the interlock that prevents both directions running at once, and what would happen without it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Each direction's rung includes an NC contact from the other direction's output, so forward cannot start while reverse is on, and vice versa. Step 2: Without the interlock, both contactors could close together, shorting the supply phases together and causing a fault, damage, or a fire. Step 3: The interlock is hard logic, not an operator instruction — it cannot be overridden. A good answer names the NC cross-contacts and the short-circuit consequence.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A bottling machine has four steps: fill, cap, label, eject. Describe how step bits control the sequence and what makes it advance from fill to cap.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Each step has its own internal step bit, and only one is on at a time. Step 2: While the fill step bit is on, the fill valve is open. Step 3: When the fill level sensor (or a fill timer) signals completion, the fill bit turns off and the cap bit turns on. Step 4: The same pattern repeats for cap, label, and eject. A good answer explains the one-bit-at-a-time rule and the completion condition.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A sensor stays on for 10 scans while a part passes, but a counter must count the part exactly once. Explain the problem and the fix.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A counter counts rising edges, but if the count is driven by a level (the sensor being on), the program can count the same part many times — once per scan while the sensor is on. Step 2: The fix is a one-shot (ONS) instruction, which produces a single-scan pulse when the sensor goes from false to true. Step 3: The counter counts the one-shot's output, so each part counts exactly once. A good answer names the level-versus-edge problem and the one-shot fix.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A press must not close while its guard door is open. Is this an interlock or a permissive? Explain, and say which contact type belongs in the press rung.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: It is both, described two ways: an interlock that prevents the press closing, and a permissive (door closed) that must be true before the press can close. Step 2: The press rung includes a contact from the guard-door switch that is true only when the door is closed. Step 3: If the door opens mid-cycle, the rung goes false and the press stops. A good answer explains both terms and the contact's role.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A traffic-light sequence has these steps: north-south green 30 s, north-south yellow 5 s, all red 2 s, east-west green 25 s, east-west yellow 5 s, all red 2 s. What is the total cycle time, and in which step does the east-west green lamp turn on?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Total cycle = 30 + 5 + 2 + 25 + 5 + 2 = 69 s. Step 2: The east-west green lamp turns on in step 4 (after north-south green, north-south yellow, and all red). Step 3: The all-red steps are safety gaps so both directions are never green at once. A good answer gives 69 s and step 4.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A program has grown to 200 rungs in one long list. Suggest two ways to structure it better, and say why each helps.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Split it into subroutines by machine part — one for the conveyor, one for the filler, one for alarms — called from a short main routine. Step 2: Give every tag a clear name and add a comment to each rung explaining what it does. Step 3: Both changes make the program readable, so faults can be traced to one part quickly instead of searching 200 rungs. A good answer gives two real structural improvements.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In a step sequence, how many step bits are on at a time?",
      "choices": [
        "All of them",
        "Exactly one",
        "None — steps use timers, not bits",
        "Two, the current step and the next step"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Only one step bit is on at a time; that is what makes the sequence ordered and predictable. (a) would run all steps at once. (c) is wrong: step bits are the standard way to mark the current step. (d) is wrong: the next step turns on only when the current one finishes."
    },
    {
      "q": "What makes a sequence advance from one step to the next?",
      "choices": [
        "The scan cycle ending",
        "A completion condition, such as a sensor, a timer finishing, or a cylinder reaching its end",
        "The operator pressing a button every time",
        "The PLC restarting"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each step advances when its completion condition is met. (a) is wrong: the scan runs constantly and does not advance steps. (c) is wrong: sequences advance automatically on conditions, not on manual button presses. (d) is wrong: restarting is not part of normal operation."
    },
    {
      "q": "What is an interlock?",
      "choices": [
        "A type of timer",
        "A logic condition that prevents an unsafe or impossible action",
        "A sensor that counts parts",
        "A programming cable"
      ],
      "answer": 1,
      "explanation": "Correct: (b). An interlock prevents unsafe combinations, such as forward and reverse together. (a) is wrong: timers measure time. (c) is wrong: sensors detect things. (d) is wrong: a cable connects the programming device."
    },
    {
      "q": "In a forward/reverse motor circuit, the forward rung includes an NC contact from the reverse output. What is its job?",
      "choices": [
        "To start the motor in reverse",
        "To prevent forward from starting while reverse is on",
        "To count the motor's revolutions",
        "To protect the motor from overload"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The NC contact is the interlock: if reverse is on, the contact is open and forward cannot start. (a) is wrong: the contact blocks, it does not start. (c) is wrong: counting is an encoder's job. (d) is an overload relay's job."
    },
    {
      "q": "What does a one-shot (ONS) instruction do?",
      "choices": [
        "It turns its output on for exactly one scan when its input goes from false to true",
        "It turns its output on for as long as its input is true",
        "It counts pulses",
        "It delays an output by one second"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A one-shot produces a single-scan pulse on a rising edge. (b) describes a normal coil, not a one-shot. (c) is a counter's job. (d) is a timer's job."
    },
    {
      "q": "A sensor stays on for 10 scans while a part passes, and a counter counts the part 10 times. What is the fix?",
      "choices": [
        "Use a longer preset",
        "Use a one-shot so the counter sees one pulse per part",
        "Use a slower scan time",
        "Use a bigger sensor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A one-shot turns the sensor's level into a single edge, so the counter counts once per part. (a) is wrong: the preset does not affect the count rate. (c) is wrong: a slower scan is not a fix and can miss parts. (d) is wrong: sensor size is irrelevant."
    },
    {
      "q": "A traffic-light sequence is: north-south green 30 s, north-south yellow 5 s, all red 2 s, east-west green 25 s, east-west yellow 5 s, all red 2 s. What is the total cycle time?",
      "choices": [
        "67 s",
        "69 s",
        "62 s",
        "57 s"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 30 + 5 + 2 + 25 + 5 + 2 = 69 s. (a) misses 2 s. (c) misses 7 s. (d) is the total for a different set of timings."
    },
    {
      "q": "Why is the all-red step included between the two green directions in a traffic light?",
      "choices": [
        "To save electricity",
        "As a safety gap, so both directions are never green at once",
        "To let pedestrians cross",
        "To give the timers time to reset"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The all-red step is a deliberate safety gap between conflicting greens. (a) is wrong: the lamps use little power either way. (c) is wrong: pedestrian crossings are separate. (d) is wrong: timers do not need a gap to reset."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Ladder Programs: Sequencing & Interlocks: Quick Reference</h3>\n<p><strong>Core idea:</strong> Explain what a sequence is and how step logic works.</p>\n<p><strong>Key terms:</strong> Sequence · Step bit · Interlock · Permissive · One-shot (ONS) · Edge trigger · Level · Main routine.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Explain what a sequence is and how step logic works.</li>\n<li>Design a simple multi-step sequence in ladder logic.</li>\n<li>Explain interlocks and why forward/reverse motors need them.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module's main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
