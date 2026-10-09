// HVAC/R Certification Prep — original practice content. Practice exams use original questions in the real exams' style/format.
module.exports = [
  {
    "id": "epa-field-scenarios",
    "title": "EPA 608 Field Scenarios: Recovery, Leaks & Records",
    "introHtml": "<p><strong>Job ticket — one truck, one long day.</strong> You are the certified technician on a mixed route: (1) a household refrigerator with a dead compressor, tagged for scrap; (2) a 3-ton R-410A split system with a suction pressure of 118 psig and a suction line temperature of 52°F; (3) a comfort-cooling rooftop unit holding more than 50 lb of refrigerant with a confirmed leak; and (4) a low-pressure centrifugal chiller whose purge unit has been running almost constantly. Your dispatcher wants speed. Section 608 wants the rules. Every call below is scored the Section 608 way.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=os9gKLf7LJg\" target=\"_blank\" rel=\"noopener\">Refrigerant RECOVERY Procedure Step by Step! Fully Recovered!</a> — a full field recovery, start to finish, showing the verification habits this lab scores.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any scenario: eye protection and gloves for refrigerant work (liquid refrigerant causes cold burns); de-energize equipment and use lockout/tagout before opening electrical cabinets, and prove circuits dead; refrigerant is NEVER vented; recovered refrigerant goes only into approved, labeled recovery cylinders filled within their limits; oxygen is never used to pressurize a refrigerant system. The first scored row is a safety decision — get it right before anything else moves.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY — At the refrigerator, your helper suggests cracking a line 'just for a second' to empty the small charge before scrapping it. Your call: 1) Allow it — the charge is tiny 2) Stop the work: recover the charge first, because knowingly venting any charge is prohibited 3) Allow it if you stand upwind 4) Vent only half and recover the rest",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "safety_vent",
            "expected": 2,
            "hint": "Knowing venting is prohibited regardless of charge size or refrigerant family. Recovery comes first, even — especially — on scrap small appliances."
          }
        ]
      },
      {
        "label": "At the refrigerator, the compressor will not run. Which recovery method fits? 1) Passive recovery will work at full speed 2) Self-contained (active) recovery, since the appliance's compressor cannot help move refrigerant 3) No recovery is possible, so vent 4) Add charge until the compressor starts",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "dead_comp_method",
            "expected": 2,
            "hint": "A dead compressor defeats system-dependent recovery. Active equipment substitutes its own compressor; the requirement to recover does not change."
          }
        ]
      },
      {
        "label": "Before connecting to the refrigerator, what do you check first? 1) The paint color 2) The nameplate, to identify the refrigerant and factory charge 3) The customer's availability 4) The truck mileage",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "nameplate_first",
            "expected": 2,
            "hint": "Identifying the refrigerant protects your recovery cylinder: an unknown charge mixed into a labeled cylinder contaminates the whole contents."
          }
        ]
      },
      {
        "label": "The recovered refrigerator refrigerant must be stored in: 1) A disposable cylinder 2) Any sealed jug 3) An approved refillable recovery cylinder, labeled with the refrigerant type 4) The next customer's system",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cylinder_choice",
            "expected": 3,
            "hint": "Approved, labeled recovery cylinders only — disposable cylinders are one-way vessels and must never be used for recovery."
          }
        ]
      },
      {
        "label": "COMPUTED — At the split system: R-410A suction pressure is 118 psig, which the P/T chart pairs with a saturation temperature of 40°F. The suction line measures 52°F. Enter the superheat in °F.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sh_compute",
            "expected": 12,
            "hint": "Superheat = suction line temp − saturation temp = 52 − 40 = 12°F."
          }
        ]
      },
      {
        "label": "COMPUTED — The same system's head pressure is 317 psig, paired with a condensing saturation temperature of 100°F. The liquid line measures 90°F. Enter the subcooling in °F.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sc_compute",
            "expected": 10,
            "hint": "Subcooling = saturation temp − liquid line temp = 100 − 90 = 10°F."
          }
        ]
      },
      {
        "label": "You finish recovering the split system for a compressor change-out and reach the required vacuum. Your next step: 1) Open the system immediately 2) Wait a few minutes and watch whether pressure rises, indicating refrigerant remains (for example in the oil) 3) Add oxygen to test 4) Leave for lunch with the system open",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "standing_check",
            "expected": 2,
            "hint": "The standing check is the gate between 'recovered' and 'may open.' Rising pressure means refrigerant is still coming out of oil or pockets — keep recovering."
          }
        ]
      },
      {
        "label": "Replacing the compressor makes this job what kind of maintenance, with recovery required before opening? 1) Minor 2) Cosmetic 3) Major maintenance — a major component is being removed 4) Warranty maintenance",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "major_maint",
            "expected": 3,
            "hint": "Removing the compressor, condenser, evaporator, or auxiliary heat exchanger is major maintenance; recovery to the required level comes first."
          }
        ]
      },
      {
        "label": "To pressure-test the repaired split system for leaks, you use: 1) Oxygen 2) Dry nitrogen, used appropriately 3) Gasoline vapor 4) The customer's garden hose",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "test_gas",
            "expected": 2,
            "hint": "Dry nitrogen is the standard inert leak-test gas. Oxygen under pressure with refrigerant oil is an explosion hazard."
          }
        ]
      },
      {
        "label": "PROCEDURE ORDER — The rooftop unit (over 50 lb, comfort cooling) has a confirmed leak. In the correct leak-repair sequence, what step number is 'repair the leak'? The full sequence is: locate the leak, repair the leak, run the initial verification, run the follow-up verification, file the records. Enter the step number for repairing the leak.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "proc_repair_step",
            "expected": 2,
            "hint": "The chain runs locate (1) → repair (2) → initial verification (3) → follow-up verification (4) → records (5). Skipping ahead breaks the chain the rules require."
          }
        ]
      },
      {
        "label": "PROCEDURE ORDER — Using the same five-step sequence (locate, repair, initial verification, follow-up verification, file records), enter the step number for the follow-up verification test.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "proc_followup_step",
            "expected": 4,
            "hint": "Follow-up verification is step 4: it happens after the repair and its initial check, once the system is operating, to prove the repair held."
          }
        ]
      },
      {
        "label": "The rooftop leak's repair deadline, once the repair duty is triggered, is: 1) 7 days 2) 30 days 3) 90 days 4) No deadline — top off as needed",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "repair_deadline",
            "expected": 2,
            "hint": "The verified Type II anchor: covered comfort-cooling appliances over 50 lb are repaired within 30 days, with follow-up verification."
          }
        ]
      },
      {
        "label": "The leak inspection, repair, and verification records for the rooftop job must be kept for how many years? Enter the number of years.",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "records_years",
            "expected": 3,
            "hint": "Section 608 records are kept for 3 years — the dated file is the proof the repair chain actually happened."
          }
        ]
      },
      {
        "label": "At the chiller, the purge unit runs almost constantly. The best interpretation: 1) The chiller is exceptionally clean 2) Air is leaking into the vacuum-side system — find and repair the entry point 3) The purge unit needs a louder alarm 4) Add refrigerant weekly",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "purge_meaning",
            "expected": 2,
            "hint": "Excessive purging is diagnostic evidence of air intrusion. On a low-pressure machine, leaks go inward; the purge unit is telling you where to look."
          }
        ]
      },
      {
        "label": "To leak-check the chiller, the preferred first method is: 1) Crank in high-pressure gas until something hisses 2) Warm the system in a controlled way (circulated hot water or heating blankets) to raise vapor pressure for testing 3) Defeat the rupture disc so pressure can rise freely 4) Vent the charge and sniff the room",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "chiller_leakcheck",
            "expected": 2,
            "hint": "Gentle warming raises pressure within the machine's low limits. The rupture disc — taught at 15 psig, one-time, never isolated — rules out brute-force pressurization."
          }
        ]
      },
      {
        "label": "Recovery on the chiller should begin with: 1) Vapor only 2) Liquid removal first, then vapor recovery 3) Removing the rupture disc 4) Draining the oil cold, full of refrigerant",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "chiller_recovery_order",
            "expected": 2,
            "hint": "Liquid transfers fastest on large charges; vapor recovery follows — including refrigerant dissolved in oil, which is why oil is warmed (taught at 130°F) before removal and why you wait and watch after reaching vacuum."
          }
        ]
      }
    ]
  }
];
