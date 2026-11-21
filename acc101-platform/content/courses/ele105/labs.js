// ele105 — Scenario labs.
module.exports = [
  {
    "id": "dwelling-load-calculation",
    "title": "Dwelling Load Calculation Lab",
    "introHtml": "<p><strong>Job ticket #105-A — Load calculation for a new 2,000-square-foot house.</strong> Customer: a builder putting up a single-family home with electric range, dryer, water heater, dishwasher, disposal, microwave, heat pump, and air conditioning. Site: a 2,000-square-foot two-story house with a 200-ampere service planned. Your task: run the Article 220 standard method on paper, size the service, and make the right calls — using the 2023 NEC. Read the job in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=UY7Py1Ry63s\" target=\"_blank\" rel=\"noopener\">Journeyman Electrician (NEC 2023) — Load Calculations Article 220</a> — four worked dwelling examples, standard and optional method. Watch it before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on this job: confirm the service is de-energized, locked out and tagged out, and tested for absence of voltage — under a licensed supervisor, per NFPA 70E. Never work on live or energized equipment. This lab is a paper calculation exercise only; it does not prove hands-on skill, and no circuit in this lab is energized.</p><p><strong>The house, as specified:</strong> (1) Floor area 2,000 square feet. (2) Two small-appliance circuits and one laundry circuit. (3) Fixed appliances: dishwasher 1,200 VA, disposal 800 VA, water heater 4,500 VA, microwave 1,500 VA. (4) Electric dryer, nameplate 5,500 VA. (5) Electric range, 12 kW nameplate. (6) Electric heat 10,000 VA; air conditioning 6,000 VA (largest motor). (7) Service voltage 240 volts. (8) The builder asks whether a 150-ampere service is enough.</p><p><strong>The rules you will use (2023 NEC):</strong> General lighting 3 VA/ft² (220.41); small-appliance and laundry 1,500 VA each (220.52); demand Table 220.45 (first 3,000 VA at 100%, remainder at 35%); fixed appliances 75% if four or more (220.53); dryer 5,000 VA or nameplate (220.54); range Table 220.55 (12 kW → 8 kW); heat vs. A/C larger only (220.60); largest motor +25% (220.50); standard sizes 240.6(A). For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The builder says the service is “probably off” and tells you to start wiring the panel. What do you do first? 1) Start wiring 2) Refuse to work until the service is de-energized, locked out/tagged out, and tested for absence of voltage under a licensed supervisor 3) Touch the busbar to check 4) Work wearing rubber gloves only",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_safety",
            "expected": 2,
            "hint": "Step 0 governs: never work on live or energized equipment. “Probably off” (1) is not verified dead, touching a busbar (3) is never a test, and gloves alone (4) are not lockout/tagout."
          }
        ]
      },
      {
        "label": "COMPUTED — General lighting load for 2,000 square feet at 3 VA/ft²? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_lighting",
            "expected": 6000,
            "hint": "2,000 × 3 = 6,000 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Small-appliance (two circuits) + laundry (one circuit) at 1,500 VA each? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_sabc",
            "expected": 4500,
            "hint": "3 × 1,500 = 4,500 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — General load (lighting + small-appliance + laundry) before demand? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_general",
            "expected": 10500,
            "hint": "6,000 + 4,500 = 10,500 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Table 220.45 demand on 10,500 VA (first 3,000 at 100%, remainder at 35%)? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_demand",
            "expected": 5625,
            "hint": "3,000 + (7,500 × 0.35) = 3,000 + 2,625 = 5,625 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Fixed appliances total 8,000 VA and there are four of them. What load is used (220.53)? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_fixed",
            "expected": 6000,
            "hint": "Four or more fixed appliances: 8,000 × 0.75 = 6,000 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Dryer load: nameplate 5,500 VA. What load is used (220.54)? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_dryer",
            "expected": 5500,
            "hint": "220.54 uses the larger of 5,000 VA or the nameplate — here 5,500 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Range demand for a 12 kW range from Table 220.55? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_range",
            "expected": 8000,
            "hint": "Table 220.55, Column C: a single 12 kW range demands 8 kW = 8,000 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Heat 10,000 VA vs. air conditioning 6,000 VA. What load is used (220.60)? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_heat",
            "expected": 10000,
            "hint": "Noncoincident loads: take the larger only — 10,000 VA of heat."
          }
        ]
      },
      {
        "label": "COMPUTED — Largest motor (air conditioner) is 6,000 VA. What is the 25% adder (220.50)? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_motor",
            "expected": 1500,
            "hint": "6,000 × 0.25 = 1,500 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Total calculated load in VA? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_total",
            "expected": 36625,
            "hint": "5,625 + 6,000 + 5,500 + 8,000 + 10,000 + 1,500 = 36,625 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — Service current at 240 volts for the total load? (Enter the number of amperes, one decimal.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_amps",
            "expected": 152.6,
            "hint": "36,625 ÷ 240 = 152.6 amperes."
          }
        ]
      },
      {
        "label": "DECISION — The builder asks whether a 150-ampere service is enough. Correct answer? 1) Yes — 150 A covers it 2) No — the calculated load is 152.6 A, so the minimum standard size is 175 A 3) No — a 100 A service is enough 4) Yes — the optional method always gives 150 A",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_service",
            "expected": 2,
            "hint": "152.6 A exceeds a 150 A service, so the next standard size is 175 A (2). In practice a 200 A service is the usual choice. 100 A (3) is far too small, and the optional method (4) does not guarantee 150 A."
          }
        ]
      },
      {
        "label": "DECISION — The calculation is done and the service is sized at 175 A minimum (200 A planned). What is the right way to close it? 1) Energize the service yourself to test it 2) Have the licensed supervisor verify the calculation and the installation, and call for inspection before energizing 3) Skip the inspection — the math is right 4) Install a 150 A main breaker anyway",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "lc_close",
            "expected": 2,
            "hint": "Verification by the licensed supervisor and inspection before energizing (2) is the close-out. Energizing it yourself (1), skipping inspection (3), and installing an undersized breaker (4) are all wrong."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "rough-in-trim-out-workshop",
    "title": "Rough-In & Trim-Out Workshop",
    "introHtml": "<p><strong>Job ticket #105-B — Rough-in and trim-out for a living room, kitchen, and bathroom.</strong> Customer: a homeowner remodeling three rooms. Site: a living room with an 18-foot wall, a kitchen with a 12-foot countertop wall and a 4-foot island, and a bathroom with two basins. Your task: lay out the receptacles, check the boxes, and make the trim-out calls — on paper, using Articles 210, 300, 314, and 334 of the 2023 NEC. Read the job in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=qFOqV3_paFw\" target=\"_blank\" rel=\"noopener\">How to wire a new house</a> — a room-by-room wiring walkthrough. Watch it before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on this job: confirm the circuits are de-energized, locked out and tagged out, and tested for absence of voltage — under a licensed supervisor, per NFPA 70E. Never work on live or energized equipment. This lab is a paper layout and calculation exercise only; it does not prove hands-on skill, and no circuit in this lab is energized.</p><p><strong>The job, as you find it:</strong> (1) Living room wall, 18 feet long, no openings. (2) Kitchen countertop wall, 12 feet long. (3) Kitchen island, 4 feet long. (4) Bathroom with two basins. (5) A box will hold two 12/2 NM cables and one receptacle, with internal clamps (4-inch square, 1-1/2 in. deep, 18.0 in³). (6) A bored hole for cable is 3/4 inch from the stud edge. (7) A ceiling fan will hang in the living room. (8) The outdoor receptacle at the back door has a cover that only protects it when nothing is plugged in. (9) A receptacle tester shows “hot/neutral reversed” on a new receptacle. (10) The panel directory lists a live garage circuit as “Spare.”</p><p><strong>The rules you will use (2023 NEC):</strong> Receptacle spacing 210.52(A)(1) (no point more than 6 ft from a receptacle); countertop receptacles 210.52(C) (no point more than 24 in. from a receptacle); island receptacle 210.52(C)(2); bathroom receptacle 210.52(D) (within 3 ft of each basin); box fill Table 314.16(B) (12 AWG 2.25 in³; yoke 2; clamps 1; grounds first four = 1); framing protection 300.4 (1-1/4 in. or steel plate); fan box 314.27(C); outdoor receptacles 406.9 (WR + TR, in-use cover); panel directory 408.4. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The homeowner says the breaker is off and tells you to open the panel and start work. What do you do first? 1) Start work — the breaker is off 2) Verify absence of voltage yourself with a meter proven on a known live source, under a licensed supervisor, with lockout/tagout 3) Touch the busbar to check 4) Work with one hand behind your back and skip the test",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_safety",
            "expected": 2,
            "hint": "Step 0 governs: a breaker being off is not proof. Verify absence of voltage with a proven meter, under a licensed supervisor, with lockout/tagout. Touching a busbar (3) is never a test."
          }
        ]
      },
      {
        "label": "COMPUTED — Living room wall, 18 feet long, no openings. Minimum number of receptacles by the 6-foot rule? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_living",
            "expected": 2,
            "hint": "Receptacles may be no more than 12 feet apart, within 6 feet of each end: two receptacles (for example at 6 feet and 12 feet) keep every point within 6 feet of a receptacle. That is the strict minimum; in practice three is often laid out for convenience."
          }
        ]
      },
      {
        "label": "COMPUTED — Kitchen countertop wall, 12 feet long. Minimum number of countertop receptacles? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_kitchen",
            "expected": 4,
            "hint": "No point more than 24 inches from a receptacle, so receptacles no more than 48 inches apart: a 144-inch wall needs at least four receptacles."
          }
        ]
      },
      {
        "label": "DECISION — The 4-foot kitchen island needs: 1) No receptacle 2) At least one receptacle 3) Two receptacles 4) A 240-volt receptacle",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_island",
            "expected": 2,
            "hint": "The 2023 NEC requires at least one receptacle for an island 12 inches or longer (2)."
          }
        ]
      },
      {
        "label": "COMPUTED — Bathroom with two basins. How many receptacles are required at minimum? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_bath",
            "expected": 2,
            "hint": "210.52(D): one receptacle within 3 feet of the outside edge of each basin — two basins need two receptacles."
          }
        ]
      },
      {
        "label": "COMPUTED — Box with two 12/2 cables and one receptacle, internal clamps: total fill in cubic inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_box",
            "expected": 18,
            "hint": "Conductors 4 + yoke 2 + clamps 1 + grounds 1 = 8 allowances × 2.25 in³ = 18.0 in³ — exactly the 18.0 in³ box volume, compliant but full."
          }
        ]
      },
      {
        "label": "DECISION — The bored hole is 3/4 inch from the stud edge. Correct call? 1) Fine as is 2) Install a steel plate at least 1/16 inch thick to protect the cable 3) Move the hole to the center of the stud only 4) Wrap the cable in tape",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_plate",
            "expected": 2,
            "hint": "300.4 requires 1-1/4 inches from the edge or a steel plate. At 3/4 inch, the plate (2) is required. Tape (4) is not protection, and moving the hole (3) is an alternative but not the call asked for — the plate is the Code's remedy."
          }
        ]
      },
      {
        "label": "DECISION — The living room ceiling fan will hang from the existing standard ceiling light box. Correct call? 1) Fine — any ceiling box holds a fan 2) Replace it with a box listed for fan support (314.27(C)) 3) Use longer screws 4) Hang the fan from the drywall",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_fan",
            "expected": 2,
            "hint": "A fan needs a fan-rated box (2). A standard light box is not rated for a fan's weight and vibration, longer screws (3) do not fix the rating, and drywall (4) is not a support."
          }
        ]
      },
      {
        "label": "DECISION — The outdoor receptacle's cover only protects it when nothing is plugged in. Correct call? 1) Fine — it is a cover 2) Replace it with an in-use cover and a WR/TR receptacle (406.9) 3) Remove the receptacle 4) Caulk the cover shut",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_outdoor",
            "expected": 2,
            "hint": "Outdoor receptacles need a WR/TR device and an in-use cover that protects the receptacle with a cord plugged in (2). A non-in-use cover (1) is not compliant for a receptacle that will be used."
          }
        ]
      },
      {
        "label": "DECISION — The receptacle tester shows “hot/neutral reversed.” Correct fix? 1) Swap the conductors: hot to brass, neutral to silver 2) Replace the breaker 3) Ignore it — the receptacle works 4) Swap the ground and neutral",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_polarity",
            "expected": 1,
            "hint": "Hot and neutral are swapped: land hot on brass and neutral on silver (1). The breaker (2) is not the fault, ignoring it (3) leaves a shock hazard, and swapping ground and neutral (4) makes it worse."
          }
        ]
      },
      {
        "label": "DECISION — The panel directory lists a live garage circuit as “Spare.” Correct call? 1) Leave it — everyone knows 2) Correct the directory to identify the circuit legibly and permanently (408.4) 3) Turn the circuit off and leave it off 4) Remove the breaker",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_directory",
            "expected": 2,
            "hint": "408.4 requires every circuit to be identified legibly and permanently. A live circuit labeled “Spare” (1) is dangerous in an emergency; the fix is a correct directory (2)."
          }
        ]
      },
      {
        "label": "COMPUTED — How many 20-ampere small-appliance branch circuits does this dwelling require at minimum? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_sabc",
            "expected": 2,
            "hint": "Section 210.11(C)(1) requires at least two 20-ampere small-appliance branch circuits."
          }
        ]
      },
      {
        "label": "DECISION — The rooms are laid out, the boxes are checked, and the trim-out calls are made. What is the right way to close the job? 1) Energize everything yourself to test it 2) Have the licensed supervisor verify the work, test every device and GFCI/AFCI, complete the directory, and call for final inspection before energizing 3) Skip the final inspection 4) Leave the cover plates off",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rt_close",
            "expected": 2,
            "hint": "Verification, testing, a complete directory, and final inspection before energizing (2) is the close-out. Energizing it yourself (1), skipping inspection (3), and leaving plates off (4) are all wrong."
          }
        ]
      }
    ],
    "passing": 70
  }
];
