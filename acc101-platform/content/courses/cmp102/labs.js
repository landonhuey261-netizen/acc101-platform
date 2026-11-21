// cmp102 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "fix-the-bug",
    "title": "Fix the Bug: Three Broken Programs",
    "introHtml": "<p><strong>Scenario — a classmate's homework.</strong> A classmate has written three small Python programs, and each one is broken in a different way. Your task: read each program, work out what it prints or why it fails, and choose the right fix. Read the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you run code you did not write yourself: read it first, and never run code you do not understand — especially code from a stranger on the internet, which could delete files or steal information. These three programs are short and safe to read, and you should read every line before you answer.</p><p><strong>Program A:</strong> age = 20 / if age = 18: print(\"adult\") — it will not run. <strong>Program B:</strong> count = 0 / while count &lt; 3: print(count) — it never stops. <strong>Program C:</strong> total = \"5\" + 3 / print(total) — it crashes. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you run a program someone else sent you, what do you do first? 1) Run it immediately to see what happens 2) Read the code first, and do not run code you do not understand 3) Email it to everyone you know 4) Delete Python from your computer",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bug_safety",
            "expected": 2,
            "hint": "Step 0 governs: read code before you run it, and never run code you do not understand — it could delete files or steal information. Running it blind (1) is how computers get infected, emailing it (3) spreads the risk, and deleting Python (4) solves nothing."
          }
        ]
      },
      {
        "label": "DECISION — Program A: age = 20 / if age = 18: print(\"adult\") — it will not run. What is wrong? 1) age should be a string 2) The condition uses = (put a value in) instead of == (ask if equal) 3) print() is spelled wrong 4) The program needs a loop",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bug_a",
            "expected": 2,
            "hint": "= puts a value into a variable; == asks whether two things are equal. An if condition needs ==. age as a number (1) is fine, print is spelled correctly (3), and no loop is needed (4)."
          }
        ]
      },
      {
        "label": "DECISION — Program B: count = 0 / while count < 3: print(count) — it never stops. What is the fix? 1) Change the condition to count > 3 2) Add count += 1 inside the loop so count changes 3) Remove the print line 4) Change while to for and keep everything else the same",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bug_b",
            "expected": 2,
            "hint": "count never changes, so count < 3 stays True forever. Adding count += 1 inside the loop lets count reach 3 and stop. Changing the condition (1) would make the loop never run, removing print (3) would still loop forever silently, and swapping to for (4) without range would not work."
          }
        ]
      },
      {
        "label": "COMPUTED — Program B, fixed, prints 0, 1, 2. How many numbers does it print? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bug_count",
            "expected": 3,
            "hint": "The fixed loop prints count = 0, then 1, then 2, then stops when count reaches 3. That is three numbers."
          }
        ]
      },
      {
        "label": "DECISION — Program C: total = \"5\" + 3 / print(total) — it crashes. What is the fix? 1) Change it to total = 5 + 3, so both values are numbers 2) Change it to total = \"5\" + \"3\" and print the number 8 3) Delete the print line 4) Change print to input",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bug_c",
            "expected": 1,
            "hint": "\"5\" is a string and 3 is a number, and Python will not add them — that is a TypeError. Making both numbers (1) gives 8. Option (2) would print the string \"53\", not the number 8. Deleting print (3) hides the crash but the broken line remains, and input (4) does not fix the addition."
          }
        ]
      },
      {
        "label": "COMPUTED — Program C, fixed as total = 5 + 3, prints a number. What number does it print? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bug_total",
            "expected": 8,
            "hint": "5 + 3 is 8. The fixed program prints the number 8."
          }
        ]
      }
    ]
  },
  {
    "id": "predict-the-output",
    "title": "Predict the Output: Read the Code, Say What It Prints",
    "introHtml": "<p><strong>Scenario — a code reading test.</strong> You are given four short Python programs. For each one, work out what it prints — without running it first. This is the single most useful programming skill: reading code and knowing what it will do. Read the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you run code you did not write yourself: read it first, and never run code you do not understand. All four programs below are short, safe, and use only print, variables, loops, lists, and dictionaries.</p><p><strong>Program 1:</strong> for i in range(3): print(i) <strong>Program 2:</strong> nums = [2, 4, 6] / total = 0 / for n in nums: total += n / print(total) <strong>Program 3:</strong> user = {\"name\": \"Maya\", \"age\": 34} / print(user.get(\"city\", \"unknown\")) <strong>Program 4:</strong> def add(a, b): return a + b / print(add(3, 4)) For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — A stranger online sends you a Python file and says “run this, it will speed up your computer”. What do you do? 1) Run it right away 2) Read it first, and do not run code you do not understand 3) Run it twice to be sure 4) Send it to your bank",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pred_safety",
            "expected": 2,
            "hint": "Step 0 governs: read code before you run it, and never run code you do not understand — a stranger's file could delete files or steal information. Running it (1) or twice (3) is exactly what the sender wants, and sending it to your bank (4) makes no sense."
          }
        ]
      },
      {
        "label": "COMPUTED — Program 1 prints 0, 1, 2. What is the LAST number it prints? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pred_last",
            "expected": 2,
            "hint": "range(3) gives 0, 1, 2. The last number printed is 2, because range stops before 3."
          }
        ]
      },
      {
        "label": "COMPUTED — Program 2 adds up the list [2, 4, 6]. What number does it print? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pred_sum",
            "expected": 12,
            "hint": "total starts at 0, then adds 2, then 4, then 6: 0 + 2 + 4 + 6 = 12."
          }
        ]
      },
      {
        "label": "DECISION — Program 3: user = {\"name\": \"Maya\", \"age\": 34} / print(user.get(\"city\", \"unknown\")) What does it print? 1) Maya 2) 34 3) unknown 4) It crashes with a KeyError",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pred_get",
            "expected": 3,
            "hint": "There is no \"city\" key, so .get() returns the default, \"unknown\", instead of failing. Square brackets would crash with a KeyError, but .get() does not."
          }
        ]
      },
      {
        "label": "COMPUTED — Program 4: def add(a, b): return a + b / print(add(3, 4)) What number does it print? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pred_add",
            "expected": 7,
            "hint": "add(3, 4) returns 3 + 4, which is 7, and print shows 7."
          }
        ]
      },
      {
        "label": "DECISION — Which of the four programs uses a dictionary? 1) Program 1 2) Program 2 3) Program 3 4) Program 4",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pred_which",
            "expected": 3,
            "hint": "Program 3 uses user = {\"name\": \"Maya\", \"age\": 34}, a dictionary with curly braces. Program 1 uses range, Program 2 uses a list, and Program 4 uses a function."
          }
        ]
      }
    ]
  }
];
