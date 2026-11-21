// con103 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number or a computed value.
module.exports = [
  {
    "id": "reading-a-print-set",
    "title": "Reading a Print Set",
    "introHtml": "<p><strong>Job ticket #3004 — Read the plan set for a new single-story house.</strong> Customer: a home builder; the house is 40 feet wide with three bedrooms, a kitchen, and a two-car garage. The set has 18 sheets: cover and index, general notes and legend, site plan, floor plans, elevations, roof plan, sections, details, and schedules. Your task: read the set the way this course teaches — in order, checking each sheet against the others — and answer each row. For each row, enter the option number or the computed value asked for.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=t-OhSA-o0Ag\" target=\"_blank\" rel=\"noopener\">How to Read Blueprints: Every Page of a REAL House Explained</a> — a full walkthrough of a real house plan set, page by page.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work from a drawing: PPE on (hard hat, safety glasses, gloves, boots) when you walk the site, and never build from a drawing you have not read in full. A drawing read halfway is a building built halfway.</p><p><strong>The set, as you read it:</strong> (1) The cover sheet index lists 18 sheets. (2) The legend defines every symbol and abbreviation. (3) The floor plan shows a bedroom labeled 12'-0\" x 14'-0\", a door tagged D-1, and a window tagged W-3. (4) The dimension string on the north wall reads 10'-0\", 12'-0\", 10'-0\", and the overall dimension reads 32'-6\". (5) The door schedule says D-1 is 3'-0\" x 6'-8\", solid core, privacy set. (6) The window schedule says W-3 is 2'-8\" wide — but the floor plan shows W-3 as 3'-0\" wide. (7) A section marker on the plan reads \"3\" on top and \"A-301\" on the bottom. (8) The front elevation shows the finished floor at EL 1'-0\" and the top of the wall plate at EL 9'-0\". (9) The roof has a pitch of 6/12. (10) A stair in the plan is labeled \"UP 13 RISERS\" and the section shows 6 feet 4 inches of headroom above one tread. (11) A detail callout points at the window head: \"Detail 4, Sheet A-501\". (12) The plan is drawn at 1/4 inch = 1 foot, and a wall measures 2 1/2 inches on the paper.</p>",
    "headers": [
      "Reading check",
      "Your answer"
    ],
    "rows": [
      {
        "label": "READING — The floor plan shows a door tagged D-1. Where do you find what door D-1 actually is? 1) In the title block 2) In the door schedule 3) On the site plan 4) On the roof plan",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_door",
            "expected": 2,
            "hint": "The tag points to the door schedule, which gives the size, material, and hardware. The title block (1) identifies the sheet, the site plan (3) shows the building on its land, and the roof plan (4) shows the roof."
          }
        ]
      },
      {
        "label": "READING — The dimension string reads 10'-0\", 12'-0\", 10'-0\", and the overall dimension reads 32'-6\". What is the problem? 1) No problem — the parts add up 2) The parts add to 32'-0\" but the overall says 32'-6\": a conflict, send an RFI 3) The string is missing a dimension 4) The overall is always wrong",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_dimstring",
            "expected": 2,
            "hint": "10 + 12 + 10 = 32'-0\", but the overall says 32'-6\" — a 6-inch conflict. That is an RFI, not a tolerance. The string is complete (3), and the overall is not automatically wrong (4)."
          }
        ]
      },
      {
        "label": "READING — The window schedule says W-3 is 2'-8\" wide, but the floor plan shows W-3 as 3'-0\" wide. What do you do? 1) Order the 2'-8\" window 2) Frame a 3'-0\" opening 3) Send an RFI — the plan and the schedule disagree 4) Split the difference at 2'-10\"",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_window",
            "expected": 3,
            "hint": "A plan-vs-schedule conflict is an RFI. Ordering (1) or framing (2) assumes one document is right without proof, and splitting the difference (4) invents a size that is in neither place."
          }
        ]
      },
      {
        "label": "READING — A section marker reads \"3\" on top and \"A-301\" on the bottom. Where is the section? 1) Drawing 3 on sheet A-301 2) Sheet 3, drawing A-301 3) Section 3 feet long 4) The third revision",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_section",
            "expected": 1,
            "hint": "Top is the drawing number, bottom is the sheet: drawing 3 on sheet A-301. The other options reverse the numbers or read them as a length or a revision."
          }
        ]
      },
      {
        "label": "READING — The stair section shows 6 feet 4 inches of headroom above one tread. The minimum is 6 feet 8 inches. What is the verdict? 1) Pass — 6'-4\" is enough 2) Fail — the headroom is 4 inches short of the minimum 3) Pass if the stair is short 4) Fail only if someone is tall",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_headroom",
            "expected": 2,
            "hint": "6'-4\" is 4 inches below the 6'-8\" minimum — the stair fails. Length (3) does not change the headroom rule, and the minimum applies to everyone (4)."
          }
        ]
      },
      {
        "label": "READING — A detail callout points at the window head: \"Detail 4, Sheet A-501\". What do you do? 1) Measure the plan 2) Go to sheet A-501 and find Detail 4 3) Ask the owner 4) Guess how the window head is built",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_detail",
            "expected": 2,
            "hint": "The callout gives the detail number and the sheet — go to sheet A-501 and find Detail 4. Measuring (1) does not read a detail, the owner (3) does not write details, and guessing (4) is never acceptable."
          }
        ]
      },
      {
        "label": "COMPUTED — The front elevation shows the finished floor at EL 1'-0\" and the top of the wall plate at EL 9'-0\". What is the wall height in feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_wallheight",
            "expected": 8,
            "hint": "Wall height = plate EL minus floor EL. 9'-0\" - 1'-0\" = 8'-0\"."
          }
        ]
      },
      {
        "label": "COMPUTED — The bedroom is labeled 12'-0\" x 14'-0\". What is its area in square feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_roomarea",
            "expected": 168,
            "hint": "Area = length x width. 12 x 14 = 168 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The roof has a pitch of 6/12. Over a 10-foot run, how many feet does the roof rise? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_roofrise",
            "expected": 5,
            "hint": "6/12 means 6 inches of rise per 12 inches of run. Over 10 feet of run, the rise is 6 inches x 10 = 60 inches = 5 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The plan is drawn at 1/4 inch = 1 foot. A wall measures 2 1/2 inches on the paper. How long is the wall in feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_scale",
            "expected": 10,
            "hint": "At 1/4\" = 1'-0\", one inch on paper is 4 feet. 2 1/2 inches x 4 feet = 10 feet."
          }
        ]
      },
      {
        "label": "READING — A drawing in the set is marked NTS. What must you not do with it? 1) Read the written dimensions 2) Measure it with a ruler or a scale to find a size 3) Read the title block 4) Check it against the legend",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_nts",
            "expected": 2,
            "hint": "NTS means not to scale — never measure it. Reading the written dimensions (1), the title block (3), and the legend (4) are all fine."
          }
        ]
      },
      {
        "label": "READING — The plan shows 9 windows, but the window schedule has 8 rows. What do you do? 1) Order 8 windows 2) Order 9 windows 3) Check each tag against the schedule and send an RFI for the missing window 4) Ignore the difference",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rp_count",
            "expected": 3,
            "hint": "A count mismatch means a window is missing somewhere — find it and ask. Ordering 8 (1) or 9 (2) guesses which count is right, and ignoring it (4) leaves a hole with no window."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "scaling-takeoff-from-drawings",
    "title": "Scaling & Takeoff from Drawings",
    "introHtml": "<p><strong>Job ticket #3005 — Take off the quantities for a 12 x 14 ft room addition.</strong> Customer: a home builder; the addition is a single room, 12 feet by 14 feet, with 8-foot walls, on a concrete slab 4 inches thick, framed with 2x4 studs at 16 inches on center. Your task: measure the drawings with the scale, work the quantities, and enter each number. All answers are numbers — round up to whole sheets, bags, and studs where the question says so.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=PrbjWgyZlFc\" target=\"_blank\" rel=\"noopener\">How to Read an Architect's Scale</a> — which edge to use for which scale, and how to read feet and inches directly.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work from a drawing: PPE on (hard hat, safety glasses, gloves, boots) when you walk the site, and never build from a drawing you have not read in full. Check the scale printed under each drawing before you measure — and never measure a drawing marked NTS.</p><p><strong>The job:</strong> A room addition, 12 feet by 14 feet, 8-foot walls, slab 4 inches thick, studs 16 inches on center. The floor plan is drawn at 1/4 inch = 1 foot, the site plan at 1 inch = 20 feet, and a wall detail at 3 inches = 1 foot. The roof over the addition has a pitch of 8/12. Work each quantity and enter the number asked for.</p>",
    "headers": [
      "Takeoff item",
      "Your quantity"
    ],
    "rows": [
      {
        "label": "COMPUTED — The floor plan is drawn at 1/4 inch = 1 foot. A wall measures 3 inches on the paper. How long is the wall in feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_wall",
            "expected": 12,
            "hint": "At 1/4\" = 1'-0\", one inch on paper is 4 feet. 3 inches x 4 feet = 12 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The site plan is drawn at 1 inch = 20 feet. A property line measures 5 inches on the paper. How long is the property line in feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_site",
            "expected": 100,
            "hint": "At 1\" = 20', one inch on paper is 20 feet. 5 inches x 20 feet = 100 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A wall detail is drawn at 3 inches = 1 foot. A flashing strip measures 2 inches on the paper. How long is it in real life, in inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_detail",
            "expected": 8,
            "hint": "At 3\" = 1'-0\", one inch on paper is 4 inches in real life (12 / 3 = 4). 2 inches x 4 inches = 8 inches."
          }
        ]
      },
      {
        "label": "COMPUTED — The addition is 12 feet by 14 feet. What is the floor area in square feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_floor_area",
            "expected": 168,
            "hint": "Area = length x width. 12 x 14 = 168 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The addition is 12 feet by 14 feet. How many square feet of flooring do you order, including 10% waste? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_flooring",
            "expected": 185,
            "hint": "12 x 14 = 168 sq ft. Add 10% waste: 168 x 1.10 = 184.8, round up to 185 square feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The slab is 12 feet by 14 feet and 4 inches thick. What is its volume in cubic feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_slab",
            "expected": 56,
            "hint": "4 inches is 1/3 foot. Volume = 12 x 14 x 1/3 = 168 / 3 = 56 cubic feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A wall is 20 feet long with studs 16 inches on center. How many studs are needed, before openings and waste? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_studs",
            "expected": 16,
            "hint": "20 feet = 240 inches. 240 / 16 = 15, plus 1 for the end stud = 16 studs."
          }
        ]
      },
      {
        "label": "COMPUTED — A wall needs 18 studs before waste. With 10% waste added, how many studs do you order? (Enter the whole number, rounding up.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_studs_waste",
            "expected": 20,
            "hint": "18 x 1.10 = 19.8 — round up to 20 studs."
          }
        ]
      },
      {
        "label": "COMPUTED — The addition is 12 feet by 14 feet with 8-foot ceilings. How many 4x8 drywall sheets are needed before waste? (Enter the whole number, rounding up.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_drywall",
            "expected": 19,
            "hint": "Perimeter = 2 x (12 + 14) = 52 ft. Wall area = 52 x 8 = 416 sq ft. Ceiling = 12 x 14 = 168 sq ft. Total = 584 sq ft. A 4x8 sheet is 32 sq ft. 584 / 32 = 18.25 — round up to 19 sheets."
          }
        ]
      },
      {
        "label": "COMPUTED — A 2x6 that is 12 feet long has how many board feet? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_bf",
            "expected": 12,
            "hint": "Board feet = thickness x width x length / 12. 2 x 6 x 12 / 12 = 144 / 12 = 12 board feet."
          }
        ]
      },
      {
        "label": "COMPUTED — The roof over the addition has a pitch of 8/12. Over a 6-foot run, how many feet does the roof rise? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_roof",
            "expected": 4,
            "hint": "8/12 means 8 inches of rise per 12 inches of run. Over 6 feet of run, the rise is 8 inches x 6 = 48 inches = 4 feet."
          }
        ]
      },
      {
        "label": "COMPUTED — A 2x4 stud is nominally 2 x 4 inches. What is its actual thickness in inches? (Enter the number, with decimals if needed.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "st_actual",
            "expected": 3.5,
            "hint": "A 2x4 actually measures 1 1/2 inches by 3 1/2 inches. Its thickness — the depth of the wall it frames — is 3 1/2 inches."
          }
        ]
      }
    ],
    "passing": 70
  }
];
