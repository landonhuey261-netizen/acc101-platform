// Plumbing 112 — Scenario lab (Steel Pipe Threading & Assembly).
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed value.
// Two tracks: (A) do it in your shop, (B) watch and sequence from the verified video.

module.exports = [
  {
    "id": "steel-pipe-threading-assembly",
    "title": "Steel Pipe Threading & Assembly",
    "introHtml": "<p><strong>Job ticket #2012 — New black steel gas line to a furnace.</strong> Customer: a furnace is being replaced and its gas line must be extended 6 feet. Equipment: 3/4-inch black steel pipe (Schedule 40), a 3/4-inch threaded 90° elbow, a pipe vise, a wheel cutter, a reamer, a ratchet threader with 3/4-inch dies, cutting oil, gas-rated PTFE tape, and two pipe wrenches. Readings so far: the gas is shut off at the meter, the line is depressurized, and the work area is ventilated. Your task: cut, thread, and assemble one steel pipe joint, in the correct order, and make the measurement and inspection calls.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=32pzriZO1xc\" target=\"_blank\" rel=\"noopener\">How to Thread Pipe; A Beginner's Tutorial</a> — a complete threading walk-through showing cutting, reaming, oiling, threading, and assembly before you make your calls below.</p><p><strong>Two tracks, one lab.</strong> <strong>Track A — Do it in your shop:</strong> if you have steel pipe, dies, and a threader, cut and thread the pipe for real and answer the sequence, measurement, and inspection questions from your own work. <strong>Track B — Watch and sequence:</strong> if you have no shop, watch the video above, then answer the same sequence, measurement, and inspection questions from what you saw. Either track completes the lab — the sequence and the calls are the same.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> This is gas work: confirm the gas is shut off at the meter and the line is depressurized before any cutting begins, and ventilate the area. Wear safety glasses and gloves for cutting and hand threading — but never wear gloves on a power threader, because a glove caught in the rotating pipe can pull your hand in. Keep cutting oil off the floor, keep hands clear of the chuck and die head on a power threader, and never test a gas joint with a flame. Every gas joint is leak-tested with soap solution or a gauge test before the line is put back into service.</p><p><strong>The correct threading sequence (for the order questions):</strong> Step 1 — PPE on, gas confirmed off and line depressurized, work area ventilated, tools checked. Step 2 — Measure the run including thread take-up, mark, and cut the pipe square. Step 3 — Ream the inside burr and file the outside edge. Step 4 — Set up the correct die head and dies for the pipe size. Step 5 — Flood the pipe end with cutting oil and thread steadily, keeping oil flowing. Step 6 — Reverse the threader off, wipe the threads clean, and inspect them. Step 7 — Apply gas-rated sealant to the male threads only and start the joint by hand. Step 8 — Tighten with two pipe wrenches, then leak-test the joint with soap solution.</p><p><strong>Track A (shop):</strong> make the joint on a short practice piece — a 12-inch length of 3/4-inch black steel pipe and one 90° elbow — and check each step against the sequence above. <strong>Track B (watch and sequence):</strong> watch the video, note the order in which the presenter measures, cuts, reams, oils, threads, and assembles, and answer from the video. The pipe run in this lab: two 90° elbows sit 12 inches apart, face to face, and the thread take-up is 5/8 inch at each end. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before any cutting begins on this gas line, what do you do first? 1) Cut the pipe right away to save time 2) Confirm the gas is shut off at the meter, confirm the line is depressurized, ventilate the area, and put on safety glasses and gloves 3) Light a torch to check for gas 4) Open a valve to see if gas is still flowing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_safety",
            "expected": 2,
            "hint": "Step 0 governs: gas off at the meter, line depressurized, ventilation, and protection before any cutting. Option 3 uses a flame near gas — extremely dangerous — and options 1 and 4 start work on a live line."
          }
        ]
      },
      {
        "label": "ORDER — 'Ream the inside burr and file the outside edge.' Which step of the threading sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_ord_ream",
            "expected": 3,
            "hint": "Sequence: 1 safety/gas off, 2 measure and cut square, 3 ream and file, 4 set up the dies, 5 oil and thread, 6 back off and inspect, 7 sealant and hand-start, 8 tighten and leak-test."
          }
        ]
      },
      {
        "label": "ORDER — 'Flood the pipe end with cutting oil and thread steadily, keeping oil flowing.' Which step of the threading sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_ord_thread",
            "expected": 5,
            "hint": "Threading is Step 5 — after measuring and cutting (2), reaming (3), and setting up the correct dies (4), and before backing off and inspecting (6)."
          }
        ]
      },
      {
        "label": "ORDER — 'Set up the correct die head and dies for the pipe size.' Which step of the threading sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_ord_dies",
            "expected": 4,
            "hint": "Setting up the dies is Step 4 — after cutting and reaming (2 and 3) and before threading (5). The wrong dies cut threads that fit no fitting."
          }
        ]
      },
      {
        "label": "ORDER — 'Apply gas-rated sealant to the male threads only and start the joint by hand.' Which step of the threading sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_ord_seal",
            "expected": 7,
            "hint": "Sealant and hand-starting is Step 7 — after threading and inspection (5 and 6) and before wrench-tightening and leak-testing (8). Starting by hand proves the threads are clean and correctly cut."
          }
        ]
      },
      {
        "label": "ORDER — 'Measure the run including thread take-up, mark, and cut the pipe square.' Which step of the threading sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_ord_cut",
            "expected": 2,
            "hint": "Measuring and cutting is Step 2 — after safety and gas-off (1) and before reaming (3). Forgetting take-up makes the pipe short in both fittings."
          }
        ]
      },
      {
        "label": "ORDER — 'Reverse the threader off, wipe the threads clean, and inspect them.' Which step of the threading sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_ord_inspect",
            "expected": 6,
            "hint": "Backing off and inspecting is Step 6 — after threading (5) and before sealant and assembly (7). Good threads are clean, sharp, and even."
          }
        ]
      },
      {
        "label": "ORDER — 'Tighten with two pipe wrenches, then leak-test the joint with soap solution.' Which step of the threading sequence is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_ord_test",
            "expected": 8,
            "hint": "Tightening and leak-testing is Step 8, the final step — after the joint is started by hand (7). A gas joint is never put into service without a leak test."
          }
        ]
      },
      {
        "label": "COMPUTED — Two 90° elbows sit 12 inches apart, face to face, and the thread take-up is 5/8 inch at each end. What length do you cut the pipe? (Enter the length in inches, as a decimal: 5/8 inch = 0.625.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_cut_length",
            "expected": 13.25,
            "hint": "Cut length = gap + take-up at both ends = 12 + 0.625 + 0.625 = 13.25 inches. Cutting 12 inches would leave the threads short in both fittings."
          }
        ]
      },
      {
        "label": "DECISION — The fitting will only turn half a turn by hand on the freshly threaded pipe, then binds hard. What is wrong and what do you do? 1) The threads are fine — force it with a wrench 2) The threads are likely torn, shallow, or the wrong size, or the joint is cross-threaded — back off, inspect the threads and die size, and re-thread a fresh end if needed 3) Add more sealant and force it 4) Heat the fitting with a torch",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_binding",
            "expected": 2,
            "hint": "A fitting that binds after half a turn has bad threads or is cross-threaded (2). Forcing it with a wrench (1 and 3) damages both parts, and heat (4) has no place on a threaded steel joint."
          }
        ]
      },
      {
        "label": "DECISION — A student wants to wear gloves while running the power threader. What is the rule? 1) Gloves are required on a power threader 2) Gloves are fine anywhere 3) Never wear gloves on a power threader — a glove caught in the rotating pipe can pull a hand in; gloves are for hand threading only 4) Gloves are only needed for cutting",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_gloves",
            "expected": 3,
            "hint": "No gloves on a power threader (3): rotating pipe catches them. Gloves are safe and wise for cutting and for hand ratchet threading, where nothing rotates under power."
          }
        ]
      },
      {
        "label": "DECISION — The joint is assembled and tightened. How do you prove it is safe to put the gas line back into service? 1) Smell the joint 2) Hold a flame near the joint 3) Brush soap solution on the joint and watch for bubbles, or run the gauge leak test — no bubbles and a steady gauge means the joint is tight 4) Turn the gas on full and leave",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_leak_test",
            "expected": 3,
            "hint": "Soap solution (or a gauge test) is the safe, standard leak check (3). Smell alone (1) is not a test, a flame near gas (2) is extremely dangerous, and turning gas on full without a test (4) risks a leak going unnoticed."
          }
        ]
      },
      {
        "label": "DECISION — Whether you worked Track A (shop) or Track B (watch and sequence), what proves the threads were cut correctly? 1) The pipe looks shiny 2) The threads are clean, sharp, and even, and a fitting screws on by hand for several turns before wrench-tightening 3) The dies were the most expensive ones 4) The pipe was cut with a torch",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_proof",
            "expected": 2,
            "hint": "Clean, sharp, even threads plus a fitting that hand-starts for several turns is the proof (2). Shine (1) proves nothing, die price (3) does not cut threads, and a torch (4) never cuts a threaded joint."
          }
        ]
      },
      {
        "label": "DECISION — The joint is tested and tight. How do you close out the job? 1) Leave the gas off and walk away 2) Restore the gas, re-check the joint with soap solution, record the test result, and confirm the area is clear and ventilated 3) Leave the threader running for the next job 4) Cover the joint with insulation and never look at it again",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_finish",
            "expected": 2,
            "hint": "Finish clean: restore gas, re-check with soap, record the result, and leave the area safe (2). Leaving the gas off (1) leaves the job unfinished, a running threader (3) is a hazard, and covering an untested joint (4) buries a possible leak."
          }
        ]
      }
    ],
    "passing": 70
  }
];
