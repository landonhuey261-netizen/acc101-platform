// con113 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
// Lab 1 arithmetic: beam 4,000 lb; two-leg bridle; vertical legs share evenly (2,000 lb each);
// at 30 degrees from horizontal each leg carries 4,000 / (2 x sin 30) = 4,000 / 1 = 4,000 lb.
// Rigging gear weighs 250 lb, so the total lifted load is 4,250 lb; six beams weigh 24,000 lb.
// Lab 2 arithmetic: a hex nut has 6 flats, so 1/3 turn = 2 flats and 1/2 turn = 3 flats;
// 8 bolts x 2 flats = 16 flats; 12 bolts x 3 flats = 36 flats.
// A 3/4-inch bolt 3 inches long has a length-to-diameter ratio of 3 / 0.75 = 4 (1/3 turn);
// a 7/8-inch bolt 7 inches long has a ratio of 7 / 0.875 = 8 (1/2 turn).
// Lab 3 arithmetic: footing 40 ft long x 3 ft wide; transverse bars 3 ft long at 12-inch spacing:
// 40 / 1 = 40 spaces, so 41 bars; 41 x 3 = 123 ft. Longitudinal: 4 lines x 2 bars (20-ft stock) = 8 bars;
// 8 x 20 = 160 ft; total 123 + 160 = 283 ft. Lap splices: one per line = 4. Ties: 4 lines x 41 bars = 164.
// Chairs every 4 ft along 40 ft: 11 positions per line x 4 lines = 44 chairs.
module.exports = [
  {
    "id": "rigging-plan-beam-lift",
    "title": "Rigging Plan for a Beam Lift",
    "introHtml": "<p><strong>Job ticket #4001 — Plan the lift, then make it.</strong> Customer: a steel erector; the job is one beam lift — a 4,000-pound wide-flange beam that must be picked from the truck, swung over the frame, and set on its connections. Your task: pick the sling and hitch, compute the tension in each sling leg at the angle you will use, check the total load against the crane, and call the signals. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=bqyB-ufkzIU\" target=\"_blank\" rel=\"noopener\">Rigger Training Course: Slings, Hitches, Angles &amp; Safe Lifting</a> — sling types, hitches, sling angles, and hand signals. Watch the sling-angle section before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any lift: hard hat and gloves on, the lift path walked and cleared, nobody under the load at any time, tag lines ready, and the crane operator and the signal person briefed on the plan. Never stand under a load, never ride a load, and never lift with damaged rigging. This lab is a planning exercise only — rigging feel and balance on real steel cannot be graded from text.</p><p><strong>The lift:</strong> One wide-flange beam, 4,000 pounds, lifted on a two-leg wire rope bridle sling. The rigging gear (slings, shackles, and hook block) weighs 250 pounds. The slings are rated 5,000 pounds per leg in a vertical hitch. The crew will lift six identical beams today. The sling legs can be rigged vertical (90 degrees from horizontal) or at 30 degrees from horizontal.</p><p><strong>Rules to use:</strong> Tension in each leg = load / (number of legs x sine of the angle from horizontal). Sine of 90 degrees is 1; sine of 30 degrees is 0.5. The shallower the angle, the higher the tension. Never lift below 30 degrees from horizontal. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "PLAN — The beam is a bare steel member with no lifting lugs. Which sling and hitch do you pick? 1) Nylon web sling in a basket hitch on a sharp edge, unprotected 2) Wire rope sling in a choker hitch, gripping the beam 3) A rope tied around the beam 4) A chain sling dragged across the truck bed",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_sling",
            "expected": 2,
            "hint": "A wire rope choker grips the beam and tightens as it takes weight. A web sling on a sharp unprotected edge can be cut through, a rope is not rated rigging, and dragging a chain damages it."
          }
        ]
      },
      {
        "label": "COMPUTED — The beam weighs 4,000 pounds and is lifted on two legs, both vertical. What is the tension in each leg, in pounds? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_vertical",
            "expected": 2000,
            "hint": "Vertical legs share the load evenly: 4,000 ÷ 2 = 2,000 pounds per leg."
          }
        ]
      },
      {
        "label": "COMPUTED — The same beam is lifted with the two legs at 30 degrees from horizontal. What is the tension in each leg, in pounds? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_angle30",
            "expected": 4000,
            "hint": "Tension = load ÷ (legs × sine of the angle) = 4,000 ÷ (2 × 0.5) = 4,000 ÷ 1 = 4,000 pounds per leg. The shallow angle doubles the tension."
          }
        ]
      },
      {
        "label": "COMPUTED — How many more pounds does each leg carry at 30 degrees than it carries with vertical legs? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_extra",
            "expected": 2000,
            "hint": "4,000 pounds at 30 degrees minus 2,000 pounds vertical = 2,000 pounds more per leg."
          }
        ]
      },
      {
        "label": "READ — Sling legs should never be rigged below what angle from horizontal? 1) 15 degrees 2) 30 degrees 3) 45 degrees 4) 60 degrees",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_minangle",
            "expected": 2,
            "hint": "Never below 30 degrees from horizontal — below that, the tension climbs so fast that the sling can be overloaded by a load it could easily carry vertically."
          }
        ]
      },
      {
        "label": "COMPUTED — The beam weighs 4,000 pounds and the rigging gear weighs 250 pounds. What is the total lifted load, in pounds? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_total",
            "expected": 4250,
            "hint": "The crane lifts the beam and the rigging together: 4,000 + 250 = 4,250 pounds."
          }
        ]
      },
      {
        "label": "COMPUTED — The crew will lift 6 identical beams of 4,000 pounds each today. What is the total weight of the six beams, in pounds? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_sixbeams",
            "expected": 24000,
            "hint": "6 beams × 4,000 pounds = 24,000 pounds of steel to set today."
          }
        ]
      },
      {
        "label": "READ — During inspection, one wire rope sling shows broken wires and a kink. What do you do? 1) Use it for this light load only 2) Straighten the kink and use it 3) Remove it from service and get a replacement sling 4) Use it if the load is under half its rating",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_inspect",
            "expected": 3,
            "hint": "Broken wires and kinks are rejection criteria — the sling is out of service, for any load. Straightening a kink does not restore the rope."
          }
        ]
      },
      {
        "label": "READ — The operator cannot see the landing spot. How is the load guided in? 1) The operator guesses 2) The crew shouts directions 3) A signal person in the operator's view relays signals from the landing crew 4) The load is dropped into place",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_signal",
            "expected": 3,
            "hint": "When the operator cannot see, a designated signal person relays the crew's signals. Guessing and shouting are not a lift plan, and a load is never dropped into place."
          }
        ]
      },
      {
        "label": "READ — The beam starts to swing as it comes off the truck. What controls the swing? 1) Hands on the beam 2) Tag lines, handled from a safe position 3) The crane hook 4) Letting it swing until it stops",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_tagline",
            "expected": 2,
            "hint": "Tag lines control swing from a safe distance. Hands on a swinging beam get crushed, and an uncontrolled load means the lift stops."
          }
        ]
      },
      {
        "label": "COMPUTED — Each sling leg is rated 5,000 pounds and carries 4,000 pounds at the 30-degree angle. How many pounds of margin are left on each leg? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_margin",
            "expected": 1000,
            "hint": "5,000 rated minus 4,000 carried = 1,000 pounds of margin per leg. The lift is within the rating — but only just, which is why the angle matters."
          }
        ]
      },
      {
        "label": "DECISION — The plan is ready: sling inspected, angle checked, signals agreed, path cleared. What is the final go-ahead? 1) Lift as soon as the crane arrives, no briefing needed 2) Brief the operator and the crew on the plan, then lift 3) Lift first and brief the crew after 4) Skip the inspection — the sling looked fine yesterday",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_go",
            "expected": 2,
            "hint": "Every lift starts with a briefing: the plan, the signals, and who does what. Yesterday's inspection does not cover today's sling, and no lift starts unbriefed."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "bolt-tensioning-check",
    "title": "Bolt-Tensioning Check",
    "introHtml": "<p><strong>Job ticket #4002 — Tension the connection, then prove it.</strong> Customer: the same steel erector; the job is a beam-to-column connection with high-strength bolts that must be tensioned by the turn-of-nut method and checked. Your task: tell A325 from A490, work the snug-tight and turn-of-nut sequence, count the flats, and call the connection done only when the checks pass. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=rkkt9Q82AKs\" target=\"_blank\" rel=\"noopener\">Use of the Turn-of-Nut Method for Slip-Critical Connections</a> — snug-tight first, then the measured turn, on a real connection. Watch the sequence before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any bolting: hard hat and gloves on, fall protection tied off at height, the connection checked for fit before bolts go in, and fingers kept out of bolt holes — a spud wrench or bull pin aligns holes, never a finger. This lab is a planning and checking exercise only — bolt tension cannot be graded from text, and the real check is done with calibrated tools on real steel.</p><p><strong>The connection:</strong> A beam-to-column connection with 8 high-strength bolts. The drawing calls for A325 bolts. The crew will snug-tight all bolts, then turn each nut by the amount the turn-of-nut table gives for its length. A second connection has 12 bolts. A hex nut has 6 flats, so a turn is counted in flats: 1/3 turn = 2 flats, 1/2 turn = 3 flats, 2/3 turn = 4 flats.</p><p><strong>Rules to use:</strong> Snug-tight first — all bolts, plies in firm contact — then the turn, starting at the most rigid part of the connection and working outward. The turn depends on the bolt's length-to-diameter ratio: up to 4 diameters long gets 1/3 turn, over 4 and up to 8 diameters gets 1/2 turn, over 8 diameters gets 2/3 turn. A490 is the stronger bolt; A490 bolts are not reused. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "READ — The drawing calls for A325 bolts, but the keg on site is A490. Which bolt is stronger? 1) A325 2) A490 3) They are the same strength 4) It depends on the length",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_stronger",
            "expected": 2,
            "hint": "A490 is the higher-strength structural bolt. Never swap grades on your own — the drawing's grade is the design's grade, and a swap needs the engineer's say-so."
          }
        ]
      },
      {
        "label": "READ — What does snug-tight mean? 1) The nut cannot be turned at all 2) The plies are in firm contact, reached with full effort on a spud wrench 3) The nut has turned a full turn 4) The bolt has stretched",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_snug",
            "expected": 2,
            "hint": "Snug-tight is firm contact between the plies, with full effort on a spud wrench or an impact wrench. It is the starting point for turn-of-nut, not the finish."
          }
        ]
      },
      {
        "label": "COMPUTED — A hex nut has 6 flats. A turn of 1/3 of a turn is how many flats? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_third",
            "expected": 2,
            "hint": "One-third of six flats is two flats: 6 × 1/3 = 2."
          }
        ]
      },
      {
        "label": "COMPUTED — A hex nut has 6 flats. A turn of 1/2 of a turn is how many flats? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_half",
            "expected": 3,
            "hint": "One-half of six flats is three flats: 6 × 1/2 = 3."
          }
        ]
      },
      {
        "label": "COMPUTED — The connection has 8 bolts, each turned 1/3 of a turn (2 flats) after snug-tight. How many flats are turned across all 8 bolts? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_eight",
            "expected": 16,
            "hint": "8 bolts × 2 flats each = 16 flats turned in total."
          }
        ]
      },
      {
        "label": "READ — In what order are the bolts tensioned after snug-tight? 1) From one end to the other 2) Starting at the most rigid part of the connection and working outward 3) In random order 4) The loosest bolt first",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_order",
            "expected": 2,
            "hint": "Start at the most rigid part and work outward, so the connection pulls up evenly instead of cocking to one side."
          }
        ]
      },
      {
        "label": "COMPUTED — A 3/4-inch-diameter bolt is 3 inches long. What is its length-to-diameter ratio? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_ratio4",
            "expected": 4,
            "hint": "3 inches ÷ 0.75 inch = 4. A ratio of 4 gets a 1/3 turn."
          }
        ]
      },
      {
        "label": "COMPUTED — A 7/8-inch-diameter bolt is 7 inches long. What is its length-to-diameter ratio? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_ratio8",
            "expected": 8,
            "hint": "7 inches ÷ 0.875 inch = 8. A ratio of 8 gets a 1/2 turn."
          }
        ]
      },
      {
        "label": "READ — A used A490 bolt is found in the keg. What do you do with it? 1) Reuse it — bolts are reusable 2) Do not reuse it — A490 bolts are not reused after tensioning 3) Reuse it only in a temporary connection 4) Reuse it if it looks clean",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_reuse",
            "expected": 2,
            "hint": "A490 bolts are not reused once they have been tensioned. A used bolt has already been stretched, and its strength can no longer be trusted."
          }
        ]
      },
      {
        "label": "READ — How is the tension in a turn-of-nut connection checked after the work? 1) By looking at the bolts 2) By verifying the snug-tight and the measured turn on each bolt, with a calibrated wrench check where the job requires it 3) By hitting each bolt with a hammer 4) By counting the bolts",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_check",
            "expected": 2,
            "hint": "The check is the record: every bolt snug-tight, every nut turned the specified rotation, verified with a calibrated wrench where required. Looking at bolts and hitting them prove nothing."
          }
        ]
      },
      {
        "label": "COMPUTED — The second connection has 12 bolts, each turned 1/2 of a turn (3 flats) after snug-tight. How many flats are turned across all 12 bolts? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_twelve",
            "expected": 36,
            "hint": "12 bolts × 3 flats each = 36 flats turned in total."
          }
        ]
      },
      {
        "label": "DECISION — When is the connection done? 1) When the bolts are snug-tight 2) When all bolts are snug-tight, every nut has been turned the specified rotation in the right order, and the checks pass 3) When the nuts look tight 4) When the crane leaves",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bt_done",
            "expected": 2,
            "hint": "Snug-tight alone is not tensioned, and looking tight is not a check. The connection is done when every bolt has been snug-tightened, turned the specified rotation in order, and passed inspection."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "rebar-takeoff",
    "title": "Rebar Takeoff",
    "introHtml": "<p><strong>Job ticket #4003 — Count the steel before you order it.</strong> Customer: a concrete contractor; the job is a strip footing, 40 feet long and 3 feet wide, and the placing drawing gives the bar pattern. Your task: count the bars, work out the lap splices, count the ties and chairs, and total the steel so the order is right. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=uLoJLm8rqHw\" target=\"_blank\" rel=\"noopener\">Rebar Tying Methods | How To Tie Rebar | Reinforcement Ties</a> — how bars are laid out, spaced, and tied on a real job. Watch the layout before you count.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any rebar work: gloves and boots on, eye protection on when cutting or tying, bar ends capped or guarded where anyone can walk into them, and bundles stored flat and stable so they cannot roll. Never walk on a rebar mat without watching where the bars and tie-wire ends are. This lab is a counting exercise only — bar placement is checked against the placing drawing on site, and the real check happens before the pour.</p><p><strong>The drawing:</strong> A strip footing 40 feet long and 3 feet wide. Longitudinal bars: 4 lines running the full 40-foot length, Grade 60 #5 bars. Bar stock comes in 20-foot lengths, so each 40-foot line needs two bars with one lap splice. Transverse bars: #5 bars, 3 feet long, spaced 12 inches (1 foot) apart along the whole 40-foot length, including one at each end. Every intersection of a longitudinal and a transverse bar is tied. Chairs support the longitudinal bars every 4 feet along each line, including one at each end of the line.</p><p><strong>Rules to use:</strong> Bars at a spacing have one more bar than the number of spaces: a 40-foot run at 1-foot spacing has 40 spaces and 41 bars. A bar's size number is its diameter in eighths of an inch. Grade 60 means a yield strength of 60,000 psi. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "READ — The drawing calls for #5 bars. What is the diameter of a #5 bar, in eighths of an inch? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_size",
            "expected": 5,
            "hint": "The size number is the diameter in eighths of an inch: a #5 bar is 5/8 inch across."
          }
        ]
      },
      {
        "label": "COMPUTED — Transverse bars are spaced 1 foot apart along the 40-foot footing, including one at each end. How many transverse bars are there? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_transverse",
            "expected": 41,
            "hint": "40 feet at 1-foot spacing is 40 spaces, and there is one more bar than spaces: 40 + 1 = 41 bars."
          }
        ]
      },
      {
        "label": "COMPUTED — Each transverse bar is 3 feet long. What is the total length of transverse bar, in feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_trans_len",
            "expected": 123,
            "hint": "41 bars × 3 feet = 123 feet of transverse bar."
          }
        ]
      },
      {
        "label": "COMPUTED — There are 4 longitudinal lines, and each 40-foot line needs 2 bars of 20-foot stock. How many longitudinal bars are there in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_long_bars",
            "expected": 8,
            "hint": "4 lines × 2 bars per line = 8 longitudinal bars."
          }
        ]
      },
      {
        "label": "COMPUTED — Each longitudinal bar is 20 feet long. What is the total length of longitudinal bar, in feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_long_len",
            "expected": 160,
            "hint": "8 bars × 20 feet = 160 feet of longitudinal bar."
          }
        ]
      },
      {
        "label": "COMPUTED — The transverse bar totals 123 feet and the longitudinal bar totals 160 feet. What is the total length of bar in the footing, in feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_total",
            "expected": 283,
            "hint": "123 + 160 = 283 feet of #5 bar in the footing."
          }
        ]
      },
      {
        "label": "COMPUTED — Each longitudinal line has one lap splice where its two 20-foot bars join. How many lap splices are there in the footing? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_splices",
            "expected": 4,
            "hint": "One splice per line × 4 lines = 4 lap splices. The splice length itself is set by the drawing, not counted here."
          }
        ]
      },
      {
        "label": "COMPUTED — Every intersection of a longitudinal line and a transverse bar is tied. How many ties are there? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_ties",
            "expected": 164,
            "hint": "4 longitudinal lines × 41 transverse bars = 164 intersections, and every one is tied."
          }
        ]
      },
      {
        "label": "COMPUTED — Chairs support each longitudinal line every 4 feet, including one at each end of the 40-foot line. How many chairs are there in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_chairs",
            "expected": 44,
            "hint": "40 feet at 4-foot spacing is 10 spaces, so 11 chairs per line; 11 × 4 lines = 44 chairs."
          }
        ]
      },
      {
        "label": "READ — The footing sits in soil that stays damp. Why does the drawing call for epoxy-coated bars here? 1) They are cheaper 2) The coating protects the steel from corrosion 3) They are easier to bend 4) They need no chairs",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_epoxy",
            "expected": 2,
            "hint": "The green epoxy coating shields the steel from water and salts that would rust it. Coated bars are not cheaper or easier to bend, and they still need chairs."
          }
        ]
      },
      {
        "label": "READ — The bars are Grade 60. What is the yield strength, in thousands of pounds per square inch? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_grade",
            "expected": 60,
            "hint": "Grade 60 means a yield strength of 60,000 pounds per square inch — 60 ksi."
          }
        ]
      },
      {
        "label": "DECISION — The takeoff is done: 8 longitudinal bars, 41 transverse bars, 283 feet of bar, 4 splices, 164 ties, 44 chairs. What happens before the order is placed? 1) Order it now — the count is the order 2) Check the count against the placing drawing and the bar list, and have the foreman confirm it 3) Order double, just in case 4) Order the bars and skip the chairs",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_order",
            "expected": 2,
            "hint": "A takeoff is checked against the placing drawing and the bar list, and the foreman confirms it, before anything is ordered. Ordering double wastes steel, and the chairs are part of the job."
          }
        ]
      }
    ],
    "passing": 70
  }
];
