// con114 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
// Lab 1 arithmetic: 6 inches of fall over 10 feet = 6 / 120 = 5% slope; the same 5% over a 30-foot run
// is 30 x 0.05 = 1.5 feet = 18 inches of fall. A 48-foot French drain at 1 inch of fall per 8 feet of run
// needs 48 / 8 = 6 inches of total fall. A 12-foot-deep patio sloping 1/4 inch per foot falls
// 12 x 0.25 = 3 inches. Four downspouts extended 6 feet each = 4 x 6 = 24 feet of extension.
// Lab 2 arithmetic: patio 10 ft x 20 ft = 200 sq ft. Base 6 in: (200 x 6) / 324 = 3.7 cu yd, so order 4 cu yd.
// Bedding sand 1 in: (200 x 1) / 324 = 0.62 cu yd, so order 1 cu yd. Excavation depth = 6 in base + 1 in sand
// + 2 3/8 in paver = 9 3/8 in = 75 eighths of an inch. Pavers at 4.5 per sq ft: 200 x 4.5 = 900; 10% waste
// is 900 x 0.10 = 90 pavers, so order 900 + 90 = 990. A 6-inch base in 3-inch lifts = 6 / 3 = 2 lifts.
// Lab 3 arithmetic: wall 24 ft long; total height from pad to top = 36 in exposed + 6 in buried course = 42 in.
// Courses: 42 / 6 = 7 courses of 6-inch blocks. Blocks per course: 24 ft / 1 ft = 24; total blocks 24 x 7 = 168;
// cap blocks 24 (one per foot). Leveling pad: 24 ft long x 2 ft wide x 0.5 ft deep = 24 cu ft.
// Drainage aggregate: 24 ft x 1 ft deep x 3.5 ft high = 84 cu ft. Drain pipe: 24 ft, the wall length.
// Geogrid: layers after courses 2, 4, and 6 = 3 layers; each layer 24 ft x 4 ft = 96 sq ft, total 3 x 96 = 288 sq ft.
// Setback: 6 steps above the first course x 1/2 in per course = 3 in of total lean into the hill.
module.exports = [
  {
    "id": "grading-drainage-plan",
    "title": "Grading & Drainage Plan for a Lot",
    "introHtml": "<p><strong>Job ticket #1401 — Grade the lot so water runs away from the house.</strong> Customer: a homeowner whose basement gets wet after every storm and whose lawn holds puddles for days. Your task: work out the slopes, size the French drain, plan the patio fall and the downspout extensions, and pick the right drainage and erosion controls. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=PuAJxD0P830\" target=\"_blank\" rel=\"noopener\">The #1 Drainage Mistake Destroying Your Landscape</a> — grading toward the foundation, downspouts at the wall, French drains installed wrong, and hardscapes sloped the wrong way. Watch it before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any digging: call 811 (MISS DIG in Michigan) a few days ahead so buried gas, electric, water, and communications lines are marked, and wait for the marks. Never dig — for a drain, a planting hole, or a grade change — without the locate. This lab is a planning exercise only — the real work is checked on site with a level, and water must always have a legal outlet.</p><p><strong>The lot:</strong> The backyard runs 30 feet from the back of the house to a grassy swale at the rear property line. A French drain must run 48 feet along the foundation to its outlet at the street. The new patio is 12 feet deep, sloping away from the house. The house has 4 downspouts, each to be extended 6 feet away from the foundation. The low edge of the site is 60 feet long and will need silt fence during construction.</p><p><strong>Rules to use:</strong> The ground must drop at least 6 inches in the first 10 feet away from the foundation (about a 5 percent slope). Slope in percent = fall ÷ run × 100. A French drain pipe is commonly laid at about a 1 percent slope — roughly 1 inch of fall for every 8 feet of run. A patio slopes away from the house at about 1/4 inch per foot. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "READ — Before anyone digs a drain trench or regrades this lot, what must happen first? 1) Start digging — the plan is clear enough 2) Call 811 (MISS DIG) so buried utility lines are marked, and confirm the drainage outlet 3) Order the pavers 4) Seed the lawn",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gd_call811",
            "expected": 2,
            "hint": "Call 811 a few days before digging so gas, electric, water, and communications lines are marked for free — hitting a gas line is not a mistake you get to make twice. The outlet must be confirmed too, or the drain has nowhere to go."
          }
        ]
      },
      {
        "label": "READ — What is the minimum fall the ground must have in the first 10 feet away from the foundation? 1) 2 inches 2) 4 inches 3) 6 inches 4) 12 inches",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gd_first10",
            "expected": 3,
            "hint": "At least 6 inches of fall in the first 10 feet — about a 5 percent slope — so water keeps moving away from the house instead of pooling against the foundation."
          }
        ]
      },
      {
        "label": "COMPUTED — A fall of 6 inches over a run of 10 feet is what slope, in percent? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gd_slope_pct",
            "expected": 5,
            "hint": "10 feet is 120 inches, and 6 ÷ 120 = 0.05, which is 5 percent. That is the standard rule of thumb for grading next to a house."
          }
        ]
      },
      {
        "label": "COMPUTED — The backyard runs 30 feet from the house to the swale at the same 5 percent slope. How much total fall is there, in inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gd_total_fall",
            "expected": 18,
            "hint": "5 percent of 30 feet is 1.5 feet, and 1.5 feet is 18 inches of fall from the house to the swale."
          }
        ]
      },
      {
        "label": "COMPUTED — The French drain runs 48 feet to its outlet at 1 inch of fall per 8 feet of run. How much total fall does the pipe need, in inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gd_drain_fall",
            "expected": 6,
            "hint": "48 feet divided by 8 feet is 6, so 6 inches of total fall are needed from the start of the drain to the outlet."
          }
        ]
      },
      {
        "label": "READ — Which way should the perforations in the French drain pipe face? 1) Up, so surface water can get in 2) Down, so groundwater enters from below and silt from above stays out 3) Sideways, so water enters from both sides 4) The pipe has no holes",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gd_holes",
            "expected": 2,
            "hint": "The holes face down — that is the detail beginners get wrong, because it seems backwards — so groundwater enters from below and silt from above stays out of the pipe."
          }
        ]
      },
      {
        "label": "COMPUTED — The new patio is 12 feet deep and slopes away from the house at 1/4 inch per foot. How much total fall is there across the patio, in inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gd_patio_fall",
            "expected": 3,
            "hint": "12 feet × 1/4 inch per foot = 3 inches of fall from the house edge to the far edge of the patio."
          }
        ]
      },
      {
        "label": "COMPUTED — The house has 4 downspouts, and each one is extended 6 feet away from the foundation. How many feet of downspout extension are needed in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gd_downspouts",
            "expected": 24,
            "hint": "4 downspouts × 6 feet each = 24 feet of extension, so no downspout dumps water at the foundation wall."
          }
        ]
      },
      {
        "label": "READ — Surface water is running across the lawn toward the low spot. Which tool is made for that problem? 1) A French drain, because it is underground 2) A dry well in the middle of the lawn 3) A swale, a shallow grassy channel that guides surface water to an outlet 4) A catch basin on the roof",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gd_swale",
            "expected": 3,
            "hint": "A swale is made for surface water — a gentle dip in the lawn that guides water where you want it. A French drain collects groundwater below the surface, and a dry well is an outlet, not a way to move water across a yard."
          }
        ]
      },
      {
        "label": "READ — The silt fence for this job must be installed: 1) After the first storm, once the crew sees where the mud goes 2) Before any digging, trenched in along the low edge of the site 3) On the high side of the site, so it catches water early 4) Made of solid plastic with no gaps",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gd_siltfence",
            "expected": 2,
            "hint": "Erosion control goes in before the digging starts, and the fence must be trenched in at the bottom on the low edge — a gap underneath lets muddy water run straight through and the fence catches nothing."
          }
        ]
      },
      {
        "label": "READ — The easiest downhill route for the drain is the neighbor's low yard. Which is a legal outlet instead? 1) The neighbor's yard — it is downhill, so it is fine 2) The street gutter where allowed, a dry well, or a rain garden on the client's own lot 3) The client's septic field 4) Under the client's patio",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gd_outlet",
            "expected": 2,
            "hint": "Sending water onto a neighbor's property without permission can violate local rules. Legal outlets are the street gutter where allowed, a dry well, or a rain garden on the client's own lot."
          }
        ]
      },
      {
        "label": "DECISION — The plan is ready: slopes worked out, drain sized, downspouts extended, outlet confirmed, silt fence in before digging. What is the final go-ahead? 1) Dig first and sort the outlet out later 2) Confirm the 811 marks are in place and the erosion control is up, then start grading 3) Skip the silt fence — the job is small 4) Send the drain water to the neighbor's yard to save time",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "gd_go",
            "expected": 2,
            "hint": "No digging starts until the utility marks are confirmed and the erosion control is in place. A drain with no outlet and a site with no silt fence are the two mistakes that turn a good grading plan into a fine and a flooded neighbor."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "paver-patio-takeoff",
    "title": "Paver Patio Takeoff",
    "introHtml": "<p><strong>Job ticket #1402 — Count the patio before you order it.</strong> Customer: a homeowner who wants a rectangular paver patio off the back of the house. Your task: measure the area, work out the base and sand volumes, count the pavers with a waste factor, and check the excavation depth and the base lifts so the order is right. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=Q1KXEk2RKR8\" target=\"_blank\" rel=\"noopener\">Do-It-Yourself Interlocking Paver Installation Instruction Video</a> — layout, excavation, base, sand, laying, and compaction, step by step. Watch it once straight through before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any digging: call 811 (MISS DIG) a few days ahead so buried utility lines are marked. When cutting pavers, wear eye and ear protection and use a masonry saw. Never stand on screeded bedding sand, and never use a plate compactor without its protective pad on finished pavers. This lab is a counting exercise only — the real check is the level and the tape on site.</p><p><strong>The job:</strong> A rectangular patio 10 feet wide and 20 feet long, built by the CMHA/ICPI method. The compacted base is 6 inches deep. The bedding sand is 1 inch of coarse concrete sand. The pavers are 2⅜ inches thick, standard 4-by-8-inch pavers — about 4.5 pavers per square foot. The base is built in 3-inch lifts. The patio slopes away from the house at about 1/4 inch per foot.</p><p><strong>Rules to use:</strong> Area of a rectangle = length × width. Cubic yards = (area in square feet × depth in inches) ÷ 324. Excavation depth = base + bedding sand + paver thickness. Order a little extra — about 10 percent — for paver cuts and breakage, and round material volumes up to whole cubic yards. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "READ — Before anyone digs for this patio, what must happen first? 1) Buy the pavers and lay out the pattern 2) Call 811 so underground utility lines are marked, and set the finished height and slope with stakes and string 3) Seal the pavers 4) Sweep polymeric sand into the joints",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pp_call811",
            "expected": 2,
            "hint": "Calling 811 keeps the crew from hitting gas, electric, or water lines, and setting the height and slope first is what makes the finished patio drain correctly."
          }
        ]
      },
      {
        "label": "COMPUTED — The patio is 10 feet wide and 20 feet long. How many square feet is it? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pp_area",
            "expected": 200,
            "hint": "Area of a rectangle is length × width: 10 × 20 = 200 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The base is 6 inches deep over 200 square feet. (200 × 6) ÷ 324 = 3.7 cubic yards. Rounded up to whole cubic yards, how many cubic yards of base stone do you order? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pp_base_yd",
            "expected": 4,
            "hint": "3.7 cubic yards rounds up to 4 — a little extra beats running out mid-job and paying for a second delivery."
          }
        ]
      },
      {
        "label": "COMPUTED — The bedding sand is 1 inch deep over 200 square feet. (200 × 1) ÷ 324 = 0.62 cubic yards. Rounded up to whole cubic yards, how many cubic yards of bedding sand do you order? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pp_sand_yd",
            "expected": 1,
            "hint": "0.62 cubic yards rounds up to 1 cubic yard — the smallest whole-yard order that covers the bed."
          }
        ]
      },
      {
        "label": "COMPUTED — Excavation depth is 6 inches of base + 1 inch of bedding sand + a 2⅜-inch paver = 9⅜ inches. How many eighths of an inch is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pp_depth_eighths",
            "expected": 75,
            "hint": "9⅜ inches is 9 × 8 + 3 = 75 eighths of an inch. Every layer counts: base, sand, and paver thickness add up to the dig depth."
          }
        ]
      },
      {
        "label": "COMPUTED — Standard 4-by-8-inch pavers cover about 4.5 pavers per square foot. How many pavers does the 200-square-foot patio need before waste? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pp_pavers",
            "expected": 900,
            "hint": "200 square feet × 4.5 pavers per square foot = 900 pavers."
          }
        ]
      },
      {
        "label": "COMPUTED — You add a 10 percent waste factor for cuts and breakage on the 900 pavers. How many extra pavers is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pp_waste",
            "expected": 90,
            "hint": "10 percent of 900 is 90 pavers — the extra for edge cuts and the odd broken unit."
          }
        ]
      },
      {
        "label": "COMPUTED — The patio needs 900 pavers plus 90 extra for waste. How many pavers do you order in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pp_total_pavers",
            "expected": 990,
            "hint": "900 + 90 = 990 pavers on the order."
          }
        ]
      },
      {
        "label": "COMPUTED — The 6-inch base is built in 3-inch lifts, compacting each lift before the next goes on. How many lifts is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pp_lifts",
            "expected": 2,
            "hint": "6 inches ÷ 3 inches per lift = 2 lifts. A plate compactor cannot compact a thick layer all the way through, so thin lifts are what keep the base from settling later."
          }
        ]
      },
      {
        "label": "READ — What holds the outside row of pavers from creeping outward, and when does it go in? 1) Joint sand, after the patio is finished 2) Edge restraint, installed before the pavers are laid, pinned or set so it cannot move 3) The sealer, applied last 4) Nothing — pavers hold themselves in place",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pp_edge",
            "expected": 2,
            "hint": "Edge restraint — plastic or aluminum edging pinned with spikes, or a concrete edge — goes in before the pavers are laid. Without it the outer row spreads within a season or two."
          }
        ]
      },
      {
        "label": "READ — The client also wants a paver driveway. Which laying pattern is strongest for it? 1) Running bond 2) Basketweave 3) Herringbone, because the units interlock in every direction 4) Random, because the pattern makes no difference",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pp_pattern",
            "expected": 3,
            "hint": "Herringbone is the strongest pattern: pavers sit at 90 degrees to each other, locking together in every direction and resisting the push of turning tires."
          }
        ]
      },
      {
        "label": "DECISION — The takeoff is done: 200 square feet, 4 cubic yards of base, 1 cubic yard of sand, 990 pavers, a 9⅜-inch dig. The joint sand is polymeric. How is it finished? 1) Flood the joints with a hose until they overflow 2) Sweep it in, compact again, then mist it lightly with water to set the binder — never flood it 3) Leave it dry forever 4) Skip the joint sand — the edge restraint is enough",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pp_finish",
            "expected": 2,
            "hint": "Polymeric sand hardens when misted; flooding washes the binder out of the joints, and dry sand never sets. The joints must be filled — the edge alone cannot lock the field together."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "retaining-wall-plan",
    "title": "Retaining Wall Plan",
    "introHtml": "<p><strong>Job ticket #1403 — Plan the wall before you stack a block.</strong> Customer: a homeowner whose sloping backyard needs a level terrace for a patio. Your task: count the courses and blocks, work out the leveling pad and drainage stone, size the geogrid, and check the wall against the 4-foot rule. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=WFJ7CnYbppg\" target=\"_blank\" rel=\"noopener\">How to Build a Reinforced Retaining Wall Using Geogrid</a> — leveling pad, first course, geogrid layers, drainage stone, and backfill. Watch how the grid is rolled out into the hill and how the drain pipe sits at the bottom of the drainage zone.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any digging: call 811 (MISS DIG) so buried utility lines are marked, and check the local rules — many places require a permit for walls over 4 feet. Segmental blocks are heavy: lift with your legs, work in pairs, and wear gloves and boots. Never stand below a wall that is being built, and never run heavy equipment right against a wall. This lab is a planning exercise only — the block maker's design charts or an engineer decide the final geogrid, not a rule of thumb.</p><p><strong>The wall:</strong> A straight segmental retaining wall 24 feet long. It holds back 3 feet of soil above the finished ground, plus one full buried course of 6-inch blocks below grade. The blocks are 6 inches high and 12 inches long. The leveling pad is 6 inches deep and 2 feet wide (block depth plus drainage stone). The drainage zone behind the wall is 12 inches deep. Geogrid layers go in after every other course, starting after course 2, and each layer runs 4 feet back into the hill. Each course steps back 1/2 inch into the hill.</p><p><strong>Rules to use:</strong> Total wall height is measured from the bottom of the leveling pad to the top of the wall. Walls over 4 feet high should be engineered. Geogrid layers often run back at least 60 percent of the wall's height and never less than 4 feet. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "READ — Before digging the wall trench, what must happen first? 1) Stack the first course to see how it looks 2) Call 811 (MISS DIG) so buried utilities are marked, and check local permit rules for the wall height 3) Order the cap blocks 4) Fill the trench with drainage stone",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_call811",
            "expected": 2,
            "hint": "Call 811 a few days before digging so buried lines are marked, and check the local code — many places require a permit for walls over 4 feet. Digging first and asking later is how lines get hit and jobs get stopped."
          }
        ]
      },
      {
        "label": "COMPUTED — The wall holds 36 inches of soil above grade plus one buried 6-inch course, so the total height from the pad to the top is 42 inches. The blocks are 6 inches high. How many courses does the wall have? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_courses",
            "expected": 7,
            "hint": "42 inches ÷ 6 inches per block = 7 courses, including the buried first course."
          }
        ]
      },
      {
        "label": "COMPUTED — The wall is 24 feet long and each block is 12 inches (1 foot) long. How many blocks are in one course? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_per_course",
            "expected": 24,
            "hint": "24 feet ÷ 1 foot per block = 24 blocks in each course."
          }
        ]
      },
      {
        "label": "COMPUTED — The wall has 7 courses with 24 blocks in each course. How many blocks does the wall need in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_total_blocks",
            "expected": 168,
            "hint": "7 courses × 24 blocks = 168 blocks."
          }
        ]
      },
      {
        "label": "COMPUTED — Cap blocks finish the top of the wall, one per foot of wall length. How many cap blocks are needed for the 24-foot wall? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_caps",
            "expected": 24,
            "hint": "One cap block per foot × 24 feet = 24 cap blocks, glued down with construction adhesive made for masonry."
          }
        ]
      },
      {
        "label": "COMPUTED — The leveling pad is 24 feet long, 2 feet wide, and 6 inches (0.5 feet) deep. How many cubic feet of aggregate does the pad need? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_pad_cuft",
            "expected": 24,
            "hint": "24 × 2 × 0.5 = 24 cubic feet of compacted aggregate for the leveling pad — the firm, level bed the first course depends on."
          }
        ]
      },
      {
        "label": "COMPUTED — The drainage zone behind the wall is 24 feet long, 1 foot deep, and 3.5 feet high (the full 42-inch wall height). How many cubic feet of drainage aggregate fill it? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_drain_cuft",
            "expected": 84,
            "hint": "24 × 1 × 3.5 = 84 cubic feet of clean drainage stone behind the wall, so water can reach the drain pipe instead of sitting in the soil."
          }
        ]
      },
      {
        "label": "COMPUTED — The perforated drain pipe runs the full length of the wall at the bottom of the drainage zone. How many feet of pipe are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_pipe",
            "expected": 24,
            "hint": "The pipe runs the whole 24-foot length of the wall, with its holes facing down, and must be vented to daylight or a storm drain — a pipe with nowhere to go is a buried bathtub."
          }
        ]
      },
      {
        "label": "COMPUTED — Geogrid layers go in after every other course, starting after course 2: after course 2, after course 4, and after course 6. How many geogrid layers does the wall have? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_grid_layers",
            "expected": 3,
            "hint": "Layers after courses 2, 4, and 6 — that is 3 layers of grid tying the wall to the soil behind it."
          }
        ]
      },
      {
        "label": "COMPUTED — There are 3 geogrid layers, and each one is 24 feet long and runs 4 feet back into the hill. How many square feet of geogrid is that in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_grid_sqft",
            "expected": 288,
            "hint": "Each layer is 24 × 4 = 96 square feet, and 3 layers × 96 = 288 square feet of geogrid. The 4-foot run meets the rule of thumb — at least 60 percent of the 3.5-foot height and never less than 4 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — Each course above the first steps back 1/2 inch into the hill, and there are 6 such steps in this 7-course wall. What is the total setback from the first course to the top, in inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_setback",
            "expected": 3,
            "hint": "6 steps × 1/2 inch = 3 inches of total lean into the hill. That lean is on purpose — a wall that leans into the soil resists its push far better than a straight wall."
          }
        ]
      },
      {
        "label": "DECISION — The wall is 42 inches (3.5 feet) from the bottom of the pad to the top, and it holds no driveway or building. What does the 4-foot rule say? 1) It must be engineered — every wall over 3 feet needs an engineer 2) It stays under 4 feet, so it can be built as a standard segmental wall from the block maker's design charts; an engineer is needed only over 4 feet or with a surcharge 3) It needs no drainage at all 4) It should be built as one tall mortared wall instead",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rw_fourfoot",
            "expected": 2,
            "hint": "At 3.5 feet from pad to top, this wall stays under the 4-foot line, so it is built as a standard segmental wall to the block maker's charts. Over 4 feet — or holding a driveway, a building, or a steep slope — it would need an engineered design."
          }
        ]
      }
    ],
    "passing": 70
  }
];
