// con111 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "weld-symbol-reading",
    "title": "Weld Symbol Reading",
    "introHtml": "<p><strong>Job ticket #3021 — Read the drawing, call the weld.</strong> Customer: a steel fabricator; the job is a small structural frame — columns, beams, and brackets — and the drawings carry welding symbols, not words. Your task: read each symbol and call the weld: which side, what type, what size, what length. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=Svoi1v_o5yI\" target=\"_blank\" rel=\"noopener\">How to Read Welding Symbols: Part 1</a> — the reference line, the arrow, and the basic symbols. Draw each symbol as it appears in the video before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any welding: PPE on (helmet, leather jacket and gloves, boots), combustibles removed, fire watch posted, ventilation on. This lab is a reading exercise only — no welding is done here, and bead quality cannot be graded from text. The symbols below are the whole job; read them before you answer.</p><p><strong>The symbols on the drawing:</strong> (1) A fillet symbol BELOW the reference line, with 1/4 to the left and 2-6 to the right. (2) A fillet symbol ABOVE the reference line, with 3/8 to the left. (3) A V-groove symbol below the line, with a circle at the arrow-line join. (4) A fillet symbol below the line with a flag on the reference line. (5) A fillet symbol with symbols BOTH above and below the line, 1/4 on each side. (6) A plug weld symbol (circle) below the line. (7) A fillet symbol below the line with 1/2 to the left and 6 to the right only. (8) A groove symbol for a bevel, below the line.</p><p><strong>Rules to use:</strong> Below the line = arrow side; above the line = other side. Fillet = triangle. Left number = size (leg size in inches, as a fraction — enter the numerator of the size in sixteenths: 1/4 = 4, 3/8 = 6, 1/2 = 8). Right numbers = length-pitch (length first, then pitch). A circle at the arrow-line join = weld all around. A flag = field weld. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "READ — Symbol 1: fillet BELOW the line, 1/4 to the left, 2-6 to the right. Which side is welded? 1) Arrow side 2) Other side 3) Both sides 4) Neither",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ws_s1_side",
            "expected": 1,
            "hint": "Below the reference line means arrow side — the side the arrow points to. Above the line would be other side."
          }
        ]
      },
      {
        "label": "COMPUTED — Symbol 1: the leg size is 1/4 inch. Enter the leg size in sixteenths of an inch (1/4 inch = how many sixteenths?).",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ws_s1_size",
            "expected": 4,
            "hint": "1/4 inch = 4/16 inch. The left number is the leg size; convert the fraction to sixteenths."
          }
        ]
      },
      {
        "label": "COMPUTED — Symbol 1: the right side reads 2-6. How many inches long is each weld? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ws_s1_len",
            "expected": 2,
            "hint": "In length-pitch, the first number is the weld length: 2 inches long. The second number, 6, is the pitch."
          }
        ]
      },
      {
        "label": "COMPUTED — Symbol 1: the right side reads 2-6. What is the pitch in inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ws_s1_pitch",
            "expected": 6,
            "hint": "In length-pitch, the second number is the pitch — the distance from the center of one weld to the center of the next: 6 inches."
          }
        ]
      },
      {
        "label": "READ — Symbol 2: fillet ABOVE the line, 3/8 to the left. Which side is welded? 1) Arrow side 2) Other side 3) Both sides 4) Neither",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ws_s2_side",
            "expected": 2,
            "hint": "Above the reference line means other side — the side away from the arrow. Below the line would be arrow side."
          }
        ]
      },
      {
        "label": "COMPUTED — Symbol 2: the leg size is 3/8 inch. Enter the leg size in sixteenths of an inch.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ws_s2_size",
            "expected": 6,
            "hint": "3/8 inch = 6/16 inch."
          }
        ]
      },
      {
        "label": "READ — Symbol 3: V-groove below the line, with a circle at the arrow-line join. What does the circle mean? 1) Spot weld 2) Weld all around the joint 3) Field weld 4) Plug weld",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ws_s3_circle",
            "expected": 2,
            "hint": "A circle at the join of the arrow and the reference line means weld all around the joint. A flag means field weld; a circle as the symbol itself means plug or spot."
          }
        ]
      },
      {
        "label": "READ — Symbol 4: fillet below the line with a flag on the reference line. What does the flag mean? 1) Weld all around 2) Shop weld 3) Field weld — welded on site 4) Groove weld",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ws_s4_flag",
            "expected": 3,
            "hint": "A flag on the reference line means a field weld — made on site, not in the shop. Weld all around is a circle, not a flag."
          }
        ]
      },
      {
        "label": "READ — Symbol 5: fillet symbols BOTH above and below the line, 1/4 on each side. What does it mean? 1) Arrow side only 2) Other side only 3) Welds on both sides, 1/4-inch fillets each side 4) No weld",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ws_s5_both",
            "expected": 3,
            "hint": "Symbols on both sides of the line mean welds on both sides — a 1/4-inch fillet on the arrow side and a 1/4-inch fillet on the other side."
          }
        ]
      },
      {
        "label": "READ — Symbol 6: a plug weld symbol (circle) below the line. What weld is called for? 1) Fillet weld 2) Groove weld 3) Plug weld 4) Seam weld",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ws_s6_plug",
            "expected": 3,
            "hint": "A circle as the weld symbol means a plug weld — a hole filled with weld metal. A triangle is a fillet, a V is a groove, two parallel lines are a seam."
          }
        ]
      },
      {
        "label": "COMPUTED — Symbol 7: fillet below the line, 1/2 to the left, 6 to the right only (no pitch). The weld is 6 inches long and continuous. Enter the leg size in sixteenths of an inch.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ws_s7_size",
            "expected": 8,
            "hint": "1/2 inch = 8/16 inch. A single number to the right with no dash is the weld length — 6 inches, continuous."
          }
        ]
      },
      {
        "label": "DECISION — Symbol 8 is a bevel groove below the line, but the drawing gives no bevel angle or root opening. Where is the preparation specified? 1) Nowhere — guess it 2) In the WPS named in the tail of the symbol 3) On the next drawing 4) In the inspector's head",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ws_s8_wps",
            "expected": 2,
            "hint": "The symbol says what weld to make; the WPS says how — including bevel angle, root opening, and root face. The tail of the symbol names the WPS. Never guess a preparation."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "weld-and-connection-planning",
    "title": "Weld and Connection Planning",
    "introHtml": "<p><strong>Job ticket #3022 — Plan the welds for a small steel frame.</strong> Customer: the same steel fabricator; the frame has a beam-to-column connection, a bracket, and a base plate. Your task: plan each joint — pick the joint type, the weld type, the electrode, the position, and the inspection — on paper, before any arc is struck. This lab is planning only: bead quality, travel speed, and puddle control cannot be graded from text, and the AWS Certified Welder test is a performance test at an ATF, not a paper exercise.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=oyt6-kA-IpA\" target=\"_blank\" rel=\"noopener\">Heavy Structural Welding Made Easy: 1-Inch Plate Double V-Groove Explained</a> — a double V-groove joint planned and welded: the symbol, the settings, the root pass, and the back-gouging. Watch the planning before the welding.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any welding: PPE on, combustibles removed, fire watch posted, ventilation on, and the WPS for each joint in hand. Never weld without the WPS, and never weld a joint you have not read the symbol for.</p><p><strong>The job:</strong> (1) A beam-to-column butt joint in 1-inch plate, full strength required. (2) A bracket joined to the face of a column at 90 degrees. (3) A base plate fillet weld, 1/4-inch leg, 2 inches long every 6 inches. (4) A pipe root pass outdoors in wind. (5) A thin sheet metal job indoors. (6) A 7018 electrode stored in a rod oven. (7) A weld that must be inspected by UT. (8) A welder qualified in the flat position asked to weld overhead.</p><p><strong>Rules to use:</strong> Full-strength butt joint = groove weld, CJP. Bracket to a face at 90° = tee joint, fillet weld. Electrode numbers: 7018 = 70,000 PSI, all positions, low-hydrogen; 6010 = deep penetration, pipe roots. Outdoors in wind = stick or flux core, not MIG. Thin sheet indoors = MIG short circuit. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "PLAN — The beam-to-column butt joint in 1-inch plate must carry full strength. What weld is required? 1) Fillet weld 2) Groove weld, complete joint penetration (CJP) 3) Spot weld 4) Braze",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wp_butt",
            "expected": 2,
            "hint": "A full-strength butt joint needs a groove weld that goes all the way through — CJP. A fillet cannot carry full member strength, a spot weld is not structural here, and a braze is weaker than a weld."
          }
        ]
      },
      {
        "label": "PLAN — The bracket is joined to the face of a column at 90 degrees. What joint type is this? 1) Butt joint 2) Lap joint 3) Tee joint 4) Edge joint",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wp_bracket",
            "expected": 3,
            "hint": "One piece joined to the face of another at 90 degrees forms a T — a tee joint. Butt is edge to edge, lap is overlapped, edge is parallel edges."
          }
        ]
      },
      {
        "label": "COMPUTED — The base plate fillet is 1/4-inch leg, 2 inches long every 6 inches, over a 24-inch joint. How many welds are there? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wp_count",
            "expected": 4,
            "hint": "Pitch 6 inches over 24 inches: 24 ÷ 6 = 4 welds, each 2 inches long. The total welded length is 8 inches of a 24-inch joint."
          }
        ]
      },
      {
        "label": "COMPUTED — The base plate has 4 welds of 2 inches each. What is the total welded length in inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wp_length",
            "expected": 8,
            "hint": "4 welds × 2 inches = 8 inches of weld on a 24-inch joint — an intermittent weld, not a continuous one."
          }
        ]
      },
      {
        "label": "PLAN — The pipe root pass outdoors in wind: which process and electrode? 1) MIG with solid wire 2) SMAW (stick) with 6010 — deep penetration, works in wind 3) TIG 4) Soldering",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wp_pipe",
            "expected": 2,
            "hint": "A pipe root needs deep penetration and must work outdoors in wind — stick with 6010. MIG's gas blows away in wind, TIG is a precision shop process, and soldering is not a pipe weld."
          }
        ]
      },
      {
        "label": "PLAN — The thin sheet metal job indoors: which process and transfer mode? 1) Stick with 7018 2) MIG short circuit transfer 3) Flux core self-shielded 4) Oxyfuel cutting",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wp_sheet",
            "expected": 2,
            "hint": "Thin sheet indoors is MIG short circuit — the low-heat mode for thin metal. Stick 7018 is too hot for thin sheet, flux core is for thicker outdoor work, and oxyfuel cuts rather than welds."
          }
        ]
      },
      {
        "label": "COMPUTED — The electrode is 7018. What is its minimum tensile strength in thousands of PSI? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wp_7018",
            "expected": 70,
            "hint": "The first two digits of 7018 are the tensile strength in thousands of PSI: 70 means 70,000 PSI."
          }
        ]
      },
      {
        "label": "DECISION — A 7018 rod is found on a damp open shelf. What do you do? 1) Use it as is 2) Dry it in a rod oven to the manufacturer's temperature, or discard it if it cannot be restored 3) Wipe it with a rag 4) Use it on thin steel only",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wp_rod",
            "expected": 2,
            "hint": "Damp 7018 absorbs moisture that causes hydrogen cracking. It must be re-dried in a rod oven or discarded. Wiping does not remove absorbed moisture, and thin steel does not fix hydrogen cracking."
          }
        ]
      },
      {
        "label": "PLAN — A critical weld must be checked for internal defects. Which NDT method finds them by sound? 1) VT 2) MT 3) UT 4) PT",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wp_ndt",
            "expected": 3,
            "hint": "Ultrasonic testing (UT) sends sound waves into the weld and reads the echoes from internal defects. VT is visual, MT is magnetic for surface cracks, PT is dye for surface cracks."
          }
        ]
      },
      {
        "label": "DECISION — The welder is qualified in the flat position and is asked to weld overhead. What is the correct call? 1) Weld anyway 2) Qualify in the overhead position first — each position is its own qualification 3) Use a bigger electrode 4) Weld faster",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wp_qual",
            "expected": 2,
            "hint": "Each position is its own qualification — flat does not cover overhead. Welding without the qualification is working without one. Electrode size and speed do not confer qualification."
          }
        ]
      },
      {
        "label": "COMPUTED — A CJP groove weld in 1-inch plate needs a root pass, 2 fill passes, and a cap pass. How many passes in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wp_passes",
            "expected": 4,
            "hint": "1 root + 2 fill + 1 cap = 4 passes, cleaned between each one so slag is not trapped."
          }
        ]
      },
      {
        "label": "DECISION — The plan is done. What is the honest statement about this plan and the AWS Certified Welder credential? 1) This plan certifies the welder 2) This plan is knowledge only — the AWS test is a performance test at an ATF with no written exam and no numeric pass score 3) The plan replaces hands-on practice 4) The plan grades bead quality",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "wp_honest",
            "expected": 2,
            "hint": "A paper plan teaches knowledge; it cannot grade bead quality, travel speed, or puddle control, and it cannot certify anyone. The AWS Certified Welder test is a performance test — weld a coupon to a WPS at an ATF — with no written exam and no numeric pass score."
          }
        ]
      }
    ],
    "passing": 70
  }
];
