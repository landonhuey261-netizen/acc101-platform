module.exports = [
  {
    "id": "fire-alarm-layout-zones",
    "title": "Fire Alarm Layout & Zone Design",
    "introHtml": "<p><strong>Job ticket #1101 — Fire alarm layout for a two-story office building.</strong> Customer: a general contractor; the building is a two-story office, 120 feet by 60 feet per floor, with a stairwell at each end. Your task: lay out the initiating devices and notification appliances on paper, divide the building into zones, and size the standby batteries — all from the drawings and the counts in the task. This is a paper-and-diagram exercise: you are designing on paper, not installing or proving hands-on skill. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=gV9znH4RQY0\" target=\"_blank\" rel=\"noopener\">Introduction to Fire Alarm Systems and Main Components</a> — the parts of a fire alarm system and how they work together; watch it before you lay out your zones.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on a real fire alarm system: de-energize the circuit, lock out and tag out, and test dead with your own meter under a licensed supervisor, per NFPA 70E. Never work on live equipment. This lab is a paper exercise — no panel is opened, no circuit is energized, and nothing here proves hands-on skill. On a real job, the layout is reviewed by the designer and the authority having jurisdiction before any device is installed.</p><p><strong>The building, as drawn:</strong> (1) Two floors, each 120 ft × 60 ft (7,200 sq ft per floor). (2) Each floor has 8 offices, 1 conference room, 1 break room with a kitchenette, and 2 stairwells. (3) Smoke detectors cover 900 sq ft each on a smooth ceiling. (4) The kitchenette gets a heat detector, not a smoke detector. (5) Each floor needs 1 pull station at each stairwell exit — 2 per floor. (6) Notification: each floor needs 4 horn-strobes. (7) Zones: one zone per floor. (8) The panel's standby load is 0.4 A; each horn-strobe draws 0.15 A in alarm. (9) Batteries must support 24 hours of standby plus 5 minutes of alarm. (10) The fire alarm riser between floors needs riser-rated cable; the ceiling space is a return-air plenum and needs plenum-rated cable.</p><p><strong>Work the numbers before you answer:</strong> smoke detectors per floor = floor area ÷ 900 sq ft, rounded up; total devices = per-floor counts × 2 floors; alarm current = number of horn-strobes × 0.15 A; standby energy = 0.4 A × 24 h; alarm energy = alarm current × (5 ÷ 60) h.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before any hands-on work on the fire alarm panel, what is the first step? 1) Open the panel and start work — it is only low voltage 2) De-energize, lock out, tag out, and test dead under a licensed supervisor, per NFPA 70E 3) Wear gloves and work live 4) Ask the building owner to hold the door",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fa_safety",
            "expected": 2,
            "hint": "Step 0 governs: never work live. Low voltage is not no voltage, and the panel's primary circuit is line voltage. De-energize, lock out, tag out, test dead — every time."
          }
        ]
      },
      {
        "label": "COMPUTED — Each floor is 7,200 sq ft and each smoke detector covers 900 sq ft. How many smoke detectors per floor? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fa_det_floor",
            "expected": 8,
            "hint": "7,200 ÷ 900 = 8 detectors per floor. The kitchenette gets a heat detector in place of one smoke detector position, but the ceiling-coverage count for the floor is 8 smoke detectors."
          }
        ]
      },
      {
        "label": "COMPUTED — With 8 smoke detectors per floor on 2 floors, how many smoke detectors in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fa_det_total",
            "expected": 16,
            "hint": "8 per floor × 2 floors = 16 smoke detectors in total."
          }
        ]
      },
      {
        "label": "DECISION — The break-room kitchenette needs a detector. Which one? 1) Photoelectric smoke detector 2) Fixed-temperature heat detector 3) No detector at all 4) A duct detector",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fa_kitchen",
            "expected": 2,
            "hint": "A kitchenette produces steam and cooking smoke that false-alarm a smoke detector — use a heat detector. No detector (3) leaves the room unprotected, and a duct detector (4) belongs in ductwork."
          }
        ]
      },
      {
        "label": "COMPUTED — Each floor needs 1 pull station at each of its 2 stairwell exits. How many pull stations in the building? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fa_pull",
            "expected": 4,
            "hint": "2 per floor × 2 floors = 4 pull stations."
          }
        ]
      },
      {
        "label": "COMPUTED — Each floor needs 4 horn-strobes. How many horn-strobes in the building? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fa_horn",
            "expected": 8,
            "hint": "4 per floor × 2 floors = 8 horn-strobes."
          }
        ]
      },
      {
        "label": "DECISION — How many zones should this building have, and how are they drawn? 1) One zone for the whole building 2) One zone per floor — Zone 1 ground floor, Zone 2 second floor 3) One zone per room 4) No zones — addressable systems do not need zones",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fa_zones",
            "expected": 2,
            "hint": "One zone per floor follows the building's natural divisions and tells responders where the fire is. One zone for the whole building (1) tells them nothing, one zone per room (3) is unworkable, and addressable systems still use zones as software groupings for notification and the annunciator (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — The 8 horn-strobes draw 0.15 A each in alarm. What is the total alarm current? (Enter the number of amps.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fa_alarm_a",
            "expected": 1.2,
            "hint": "8 × 0.15 A = 1.2 A of alarm current."
          }
        ]
      },
      {
        "label": "COMPUTED — Standby load is 0.4 A for 24 hours. How many amp-hours of standby energy are needed? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fa_standby_ah",
            "expected": 9.6,
            "hint": "0.4 A × 24 h = 9.6 Ah of standby energy, before the safety factor."
          }
        ]
      },
      {
        "label": "COMPUTED — Alarm current is 1.2 A for 5 minutes. How many amp-hours of alarm energy are needed? (Enter the number, rounded to one decimal.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fa_alarm_ah",
            "expected": 0.1,
            "hint": "1.2 A × (5 ÷ 60) h = 0.1 Ah of alarm energy."
          }
        ]
      },
      {
        "label": "DECISION — The riser between floors needs which cable rating? 1) FPL general-purpose 2) FPLR riser-rated 3) FPLP plenum-rated only 4) Any cable — color is what matters",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fa_riser",
            "expected": 2,
            "hint": "A vertical run between floors needs riser-rated cable — FPLR (FPLP also works). FPL (1) is general-purpose only, and color (4) is a convention, not a listing."
          }
        ]
      },
      {
        "label": "DECISION — The ceiling space is a return-air plenum. Which cable rating is needed there? 1) FPL 2) FPLR 3) FPLP 4) Any cable",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fa_plenum",
            "expected": 3,
            "hint": "A plenum needs plenum-rated cable — FPLP only. FPL (1) and FPLR (2) are not listed for plenums."
          }
        ]
      },
      {
        "label": "DECISION — The layout is done. What closes the job? 1) Start installing immediately 2) Submit the layout, battery calculation, and zone map for review by the designer and the AHJ, then install to the approved drawings 3) Install first and draw the map later 4) Skip the battery calculation — the panel will handle it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "fa_close",
            "expected": 2,
            "hint": "The layout, battery calculation, and zone map are reviewed before installation — the AHJ approves the design, and the acceptance test proves it. Installing first (1, 3) and skipping the calculation (4) are how systems fail inspection."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "data-cabling-takeoff-certification",
    "title": "Data Cabling Takeoff & Certification Plan",
    "introHtml": "<p><strong>Job ticket #1102 — Data cabling takeoff and certification plan for a one-story office fit-out.</strong> Customer: a small business moving into a 6,000 sq ft office with 24 workstations, 4 wireless access points, and 6 cameras. Your task: take off the cable and hardware quantities from the counts in the task, plan the certification testing, and work the PoE budget — all on paper. This is a paper-and-calculation exercise: you are planning and computing, not installing or proving hands-on skill. Read the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=lbz2hNsKeVQ\" target=\"_blank\" rel=\"noopener\">Fluke Networks LinkIQ Duo Copper Cable Testing Tutorial</a> — how a cable tester checks a copper link; watch it before you plan your certification tests.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work above a ceiling or in a telecommunications room: de-energize any circuit you will work near, lock out and tag out, and test dead under a licensed supervisor, per NFPA 70E. Never work on live equipment, and never pull cable through a space with live line-voltage conductors without the circuit de-energized. This lab is a paper exercise — no cable is pulled, no tester is connected, and nothing here proves hands-on skill.</p><p><strong>The job, as counted:</strong> (1) 24 workstations × 2 drops each = 48 drops. (2) 4 wireless access points × 1 drop each = 4 drops. (3) 6 cameras × 1 drop each = 6 drops. (4) Average horizontal run is 150 ft per drop, plus 25 ft of slack and patch cord allowance per drop. (5) Cable is sold in 1,000-ft boxes; allow 10% waste on the total cable. (6) Each drop needs 1 jack at the work area and 1 patch panel port. (7) PoE: phones are not in this job; the 4 access points need 15 W each and the 6 cameras need 25 W each. (8) The switch PoE budget is 370 W. (9) Every drop must be certified with a certifier, not just wire-mapped. (10) The channel limit is 100 meters (328 ft) including patch cords.</p><p><strong>Work the numbers before you answer:</strong> total drops = 48 + 4 + 6; cable per drop = 150 + 25 ft; total cable = drops × per-drop length, plus 10% waste; boxes = total cable ÷ 1,000, rounded up; PoE load = (4 × 15) + (6 × 25) W.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before pulling cable above the drop ceiling, what is the first step? 1) Start pulling — data cable is low voltage 2) De-energize nearby circuits, lock out and tag out, and test dead under a licensed supervisor 3) Wear gloves and pull live 4) Pull at night so nobody sees",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dc_safety",
            "expected": 2,
            "hint": "Step 0 governs: the danger above a ceiling is the live line-voltage lighting and power circuits sharing the space. Low voltage is not no voltage — de-energize, lock out, tag out, test dead."
          }
        ]
      },
      {
        "label": "COMPUTED — Workstations need 48 drops, access points 4, cameras 6. How many drops in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dc_drops",
            "expected": 58,
            "hint": "48 + 4 + 6 = 58 drops in total."
          }
        ]
      },
      {
        "label": "COMPUTED — Each drop needs 150 ft of run plus 25 ft of slack and patch allowance. How many feet of cable per drop? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dc_per_drop",
            "expected": 175,
            "hint": "150 + 25 = 175 ft per drop."
          }
        ]
      },
      {
        "label": "COMPUTED — 58 drops × 175 ft per drop. How many feet of cable before waste? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dc_cable",
            "expected": 10150,
            "hint": "58 × 175 = 10,150 ft of cable before waste."
          }
        ]
      },
      {
        "label": "COMPUTED — Add 10% waste to 10,150 ft. How many feet in total? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dc_waste",
            "expected": 11165,
            "hint": "10,150 × 1.10 = 11,165 ft with the 10% waste allowance."
          }
        ]
      },
      {
        "label": "COMPUTED — Cable is sold in 1,000-ft boxes. How many boxes must be ordered for 11,165 ft? (Enter the number, rounded up.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dc_boxes",
            "expected": 12,
            "hint": "11,165 ÷ 1,000 = 11.165 boxes — round up to 12 boxes, since a partial box cannot be ordered."
          }
        ]
      },
      {
        "label": "COMPUTED — Each drop needs 1 jack at the work area and 1 patch panel port. How many jacks are needed for 58 drops? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dc_jacks",
            "expected": 58,
            "hint": "58 drops × 1 jack each = 58 jacks. The same count applies to patch panel ports — 58 ports."
          }
        ]
      },
      {
        "label": "COMPUTED — PoE load: 4 access points at 15 W each plus 6 cameras at 25 W each. What is the total PoE load in watts? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dc_poe",
            "expected": 210,
            "hint": "(4 × 15) + (6 × 25) = 60 + 150 = 210 W of PoE load."
          }
        ]
      },
      {
        "label": "DECISION — The switch PoE budget is 370 W and the load is 210 W. Can the switch power all the devices? 1) No — the load is too big 2) Yes — 210 W is within the 370 W budget, with 160 W spare 3) Only if the cameras are unplugged 4) Only at night",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dc_budget",
            "expected": 2,
            "hint": "210 W is less than the 370 W budget, leaving 160 W spare for growth. The switch can power all the devices."
          }
        ]
      },
      {
        "label": "DECISION — A 150-ft horizontal run plus patch cords totals 175 ft. Is the channel within the 100-meter (328-ft) limit? 1) No — it is over the limit 2) Yes — 175 ft is well under 328 ft 3) Only for Cat6A 4) Only if the patch cords are removed",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dc_channel",
            "expected": 2,
            "hint": "175 ft is well under the 328-ft (100-meter) channel limit. The limit applies to every category the same way."
          }
        ]
      },
      {
        "label": "DECISION — The customer asks for a wire-map test only, to save money. What do you recommend? 1) Agree — a wire map is enough 2) Recommend certification with a certifier for every drop, with a report per cable, because a wire map cannot see crosstalk or loss 3) Test only the longest runs 4) Skip testing entirely",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dc_cert",
            "expected": 2,
            "hint": "A wire map cannot see crosstalk or loss — only certification proves the cable meets its category and supports the warranty. Testing only some runs (3) leaves the rest unverified."
          }
        ]
      },
      {
        "label": "DECISION — The takeoff is done. What closes the job? 1) Order the cable and start pulling 2) Present the takeoff, the PoE budget, and the certification plan to the customer, get approval, then order and install to the plan 3) Install first and count later 4) Skip the labels — the customer will remember where everything goes",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dc_close",
            "expected": 2,
            "hint": "The takeoff, the PoE budget, and the certification plan are approved before ordering — and every cable is labeled at both ends and tested with a report. Installing first (1, 3) and skipping labels (4) are how jobs go over budget and fail handover."
          }
        ]
      }
    ],
    "passing": 70
  }
];
