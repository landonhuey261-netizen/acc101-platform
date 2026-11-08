// plb102 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "rolling-offset-calculation",
    "title": "Rolling Offset Calculation",
    "introHtml": "<p><strong>Job ticket #2012 — Rolling offset in a basement ceiling.</strong> Customer: a homeowner finishing a basement; the main drain stack is in the way of a new bathroom. Job: a 2-inch drain line must roll around the stack — it has to rise and move sideways at the same time — then continue to the new lavatory. The fittings are two 45-degree elbows, each with a takeoff of 2 1/2 inches. Your task: measure, calculate the true offset, find the travel, subtract the takeoffs, and give the cut length. Then take off the fittings for the job.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=pdLv5mNzBr4\" target=\"_blank\" rel=\"noopener\">ROLLING OFFSET piping 45 degree (example question)</a> — a worked rolling-offset calculation, step by step, before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> This is a calculation lab, but the job it models is real: before any cutting, PPE on (safety glasses, gloves), the work area clear, and the pipe supported so it cannot fall while you measure. Never cut a pipe that is under pressure or holding water you have not drained, and keep hands clear of the saw blade. The numbers below are the job's measurements — use them exactly as given.</p><p><strong>The measurements (measured on site):</strong> The drain must rise 7 inches and roll 12 inches to get around the stack. The fittings are two 45-degree elbows, each with a takeoff of 2 1/2 inches. The pipe is 2-inch drain pipe, which needs a minimum slope of 1/4 inch per foot. After the offset, the run continues 10 feet to the lavatory.</p><p><strong>The method (for the calculation questions):</strong> Step 1 — True offset = √(rise² + roll²). Step 2 — Travel = true offset × 1.414 (the 45-degree multiplier). Step 3 — Cut length = travel − both fittings' takeoffs. Step 4 — Check: cut length + takeoffs = travel. For each row, enter the option number, the step number, or the computed value asked for. Enter computed lengths in inches, rounded to the nearest sixteenth where the question asks for a fraction, or to two decimal places where it asks for a decimal.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before measuring or cutting anything on this drain, what do you do first? 1) Cut the pipe where the offset starts and measure the pieces 2) Put on safety glasses and gloves, confirm the line is drained and not under pressure, and support the pipe so it cannot fall while you measure 3) Start the saw and trim the pipe to fit as you go 4) Measure from the last piece you cut, so the numbers match",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_safety",
            "expected": 2,
            "hint": "Step 0 governs: PPE on, the line drained and not under pressure, and the pipe supported before measuring or cutting. Cutting first (1) or trimming as you go (3) measures nothing and risks a pressurized line, and measuring from the last cut (4) stacks errors."
          }
        ]
      },
      {
        "label": "ORDER — 'Calculate the true offset from the rise and the roll.' Which step of the method is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_ord_true",
            "expected": 1,
            "hint": "Method: Step 1 true offset, Step 2 travel, Step 3 cut length, Step 4 check. The true offset comes first — it is the diagonal the travel is built from."
          }
        ]
      },
      {
        "label": "ORDER — 'Subtract both fittings' takeoffs from the travel to get the cut length.' Which step of the method is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_ord_cut",
            "expected": 3,
            "hint": "Method: Step 1 true offset, Step 2 travel, Step 3 cut length, Step 4 check. Subtracting the takeoffs is Step 3, after the travel is found."
          }
        ]
      },
      {
        "label": "ORDER — 'Check that the cut length plus the takeoffs equals the travel.' Which step of the method is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_ord_check",
            "expected": 4,
            "hint": "Method: Step 1 true offset, Step 2 travel, Step 3 cut length, Step 4 check. The check is the last step — it catches an error before the pipe is cut."
          }
        ]
      },
      {
        "label": "COMPUTED — The rise is 7 inches and the roll is 12 inches. What is the true offset? (Enter the number of inches, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_true_offset",
            "expected": 13.89,
            "hint": "True offset = √(7² + 12²) = √(49 + 144) = √193 = 13.89 inches. The true offset is the diagonal — longer than either the rise or the roll alone."
          }
        ]
      },
      {
        "label": "COMPUTED — The true offset is 13.89 inches and the fittings are 45 degrees. What is the travel? (Enter the number of inches, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_travel",
            "expected": 19.64,
            "hint": "Travel = true offset × 1.414 = 13.89 × 1.414 = 19.64 inches. The 1.414 multiplier belongs to the 45-degree angle — check the angle before multiplying."
          }
        ]
      },
      {
        "label": "COMPUTED — Each 45-degree fitting has a takeoff of 2 1/2 inches. What is the total takeoff for both fittings? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_takeoffs",
            "expected": 5,
            "hint": "Two fittings × 2 1/2 inches each = 5 inches of takeoff in total."
          }
        ]
      },
      {
        "label": "COMPUTED — The travel is 19.64 inches and the total takeoff is 5 inches. What length of pipe do you cut? (Enter the number of inches, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_cut",
            "expected": 14.64,
            "hint": "Cut length = travel − takeoffs = 19.64 − 5 = 14.64 inches, about 14 5/8 inches. The cut can never be longer than the travel."
          }
        ]
      },
      {
        "label": "COMPUTED — Check your work: the cut length is 14.64 inches and the total takeoff is 5 inches. What should they add up to — the travel? (Enter the number of inches, to two decimal places.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_check",
            "expected": 19.64,
            "hint": "Check: cut + takeoffs = 14.64 + 5 = 19.64 inches, which equals the travel. The numbers close — the calculation is right."
          }
        ]
      },
      {
        "label": "DECISION — A coworker says to use the roll (12 inches) as the offset and multiply by 1.414. What is wrong with that? 1) Nothing — the roll is the offset 2) The roll is one leg, not the offset: the true offset is the diagonal √(rise² + roll²) = 13.89 inches, and using 12 inches makes the travel too short 3) The multiplier should be 2.613 4) The rise should be ignored entirely",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_wrong_roll",
            "expected": 2,
            "hint": "In a rolling offset the true offset is the diagonal, always longer than either leg. Using the roll (12) gives a travel of 16.97 inches instead of 19.64 — the pipe would come up short. The multiplier (3) is right for 45 degrees; the error is the offset, not the multiplier."
          }
        ]
      },
      {
        "label": "COMPUTED — After the offset, the 2-inch drain runs 10 feet to the lavatory. What is the minimum fall it needs over that run? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_fall",
            "expected": 2.5,
            "hint": "2-inch pipe is 2-1/2 inches and smaller, so the IPC minimum is 1/4 inch per foot: 10 × 1/4 = 2.5 inches of fall."
          }
        ]
      },
      {
        "label": "DECISION — The takeoff for this offset job lists: 2 elbows, 1 length of 2-inch pipe, 2 hangers, and solvent cement. A coworker says to order the pipe by the center-to-center travel (19.64 inches). What is wrong? 1) Nothing — order 19.64 inches of pipe 2) The pipe to cut is the travel minus the takeoffs (14.64 inches); ordering the travel buys pipe that overlaps the fittings and will not fit 3) The pipe should be ordered in 10-foot lengths only 4) The hangers are not needed",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_order",
            "expected": 2,
            "hint": "Pipe is ordered by cut length, not by travel: the fittings consume 5 inches of the travel, so the cut piece is 14.64 inches. Ordering the travel (1) buys a piece that overlaps the fittings. Pipe comes in lengths (3) but the cut is still 14.64 inches, and hangers (4) are required to support the run."
          }
        ]
      },
      {
        "label": "DECISION — The offset is calculated, the pipe is cut, and the joints are made. What is the right finish for this job? 1) Bury it and move on 2) Check the slope with a level (at least 1/4 inch per foot on the 2-inch run), test the joints, and record the measurements on the work order 3) Test it by running water once with no level check 4) Leave the pipe unsupported until the next visit",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_finish",
            "expected": 2,
            "hint": "Finish with verification: slope checked with a level, joints tested, measurements recorded (2). Burying it unchecked (1) hides the error, a single water run (3) does not prove the slope, and unsupported pipe (4) sags and loses its fall."
          }
        ]
      },
      {
        "label": "COMPUTED — The job needs one more rolling offset just like this one on the next floor. How many 45-degree elbows does the whole job need in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ro_elbows",
            "expected": 4,
            "hint": "Each rolling offset uses two 45-degree elbows; two offsets use 2 × 2 = 4 elbows. Count the breaks on the drawing — every break is a fitting."
          }
        ]
      }
    ],
    "passing": 70
  }
];
