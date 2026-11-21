// ele104 — Scenario labs.
module.exports = [
  {
    "id": "conduit-fill-workshop",
    "title": "Conduit Fill Workshop",
    "introHtml": "<p><strong>Job ticket #104-A — Conduit fill and raceway sizing, commercial tenant fit-out.</strong> Customer: a general contractor fitting out a small retail space. Site: an exposed EMT run above a lay-in ceiling feeding new receptacle and lighting circuits, plus a PVC run underground to a sign. Your task: size the conduit, check the fill, and make the right calls on bends, supports, and grounding — on paper, using Chapter 9 and Annex C of the 2023 NEC. Read the job in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=6W7uTCHAA3g\" target=\"_blank\" rel=\"noopener\">Conduit Fill / Different Insulation types</a> — how conduit fill is sized by insulation type and conductor count. Watch it before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on this job: confirm the circuits are de-energized, locked out and tagged out, and tested for absence of voltage with a meter you have proven on a known live source — under a licensed supervisor, per NFPA 70E. Never work on live or energized equipment. This lab is a paper calculation exercise only; it does not prove hands-on skill, and no conduit in this lab is energized.</p><p><strong>The job, as you find it:</strong> (1) An EMT run must carry six 12 AWG THHN conductors (three circuits) plus one 12 AWG ground. (2) A second EMT run must carry nine 10 AWG THHN conductors plus one 10 AWG ground. (3) A PVC run underground must carry three 8 AWG THWN-2 conductors plus one 8 AWG ground. (4) The EMT run has two 90-degree bends and one 45-degree bend, and the foreman wants to add a 3-point saddle (45 + 22.5 + 22.5 degrees). (5) The EMT run is 30 feet long between two boxes. (6) A 4-inch offset is needed at 30 degrees to enter a panel. (7) The PVC run is Schedule 40, buried 18 inches deep under a lawn. (8) The foreman asks whether the EMT run needs a separate ground wire.</p><p><strong>The rules you will use (2023 NEC):</strong> Conduit fill — one conductor 53%, two conductors 31%, more than two conductors 40% (Chapter 9, Table 1); Annex C gives maximum conductor counts. Bend limit — 360 degrees total between pull points. EMT support — within 3 ft of every box, intervals of not more than 10 ft (358.30). Offset multiplier at 30 degrees = 2.0; shrink at 30 degrees = 1/4 inch per inch of offset. PVC is not a grounding conductor (352.60). For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The foreman says the EMT run is “probably dead” and tells you to start pulling wire. What do you do first? 1) Start pulling — he is the foreman 2) Refuse to work until the circuit is de-energized, locked out/tagged out, and tested for absence of voltage under a licensed supervisor 3) Touch the wires to check 4) Pull the wire wearing rubber gloves only",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_safety",
            "expected": 2,
            "hint": "Step 0 governs: never work on live or energized equipment. “Probably dead” (1) is not verified dead, touching wires (3) is never a test, and gloves alone (4) are not lockout/tagout."
          }
        ]
      },
      {
        "label": "COMPUTED — Annex C, Table C.1: how many 12 AWG THHN conductors fit in 1/2-inch EMT? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_annex_half",
            "expected": 9,
            "hint": "Annex C, Table C.1 lists 9 conductors of 12 AWG THHN in 1/2-inch EMT. The run has 7 conductors total, so it fits — but check the next row for the right size."
          }
        ]
      },
      {
        "label": "DECISION — The first EMT run carries 7 conductors (six 12 AWG + one ground). Smallest EMT size per Annex C? 1) 1/2-inch EMT 2) 3/4-inch EMT 3) 1-inch EMT 4) 1-1/4-inch EMT",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_size1",
            "expected": 1,
            "hint": "Annex C allows 9 conductors of 12 AWG THHN in 1/2-inch EMT, and 7 is under 9 — so 1/2-inch EMT (option 1) is the smallest compliant size. Larger sizes also work but are not the smallest."
          }
        ]
      },
      {
        "label": "COMPUTED — Annex C: how many 10 AWG THHN conductors fit in 3/4-inch EMT? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_annex_34",
            "expected": 10,
            "hint": "Annex C, Table C.1 lists 10 conductors of 10 AWG THHN in 3/4-inch EMT. The second run has 10 conductors total, so it fits exactly."
          }
        ]
      },
      {
        "label": "DECISION — The second EMT run carries 10 conductors (nine 10 AWG + one ground). Smallest EMT size? 1) 1/2-inch EMT 2) 3/4-inch EMT 3) 1-inch EMT 4) 1-1/4-inch EMT",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_size2",
            "expected": 2,
            "hint": "Annex C allows 10 conductors of 10 AWG THHN in 3/4-inch EMT — exactly the count in this run, so 3/4-inch (option 2) is the smallest compliant size. 1/2-inch EMT allows only 6."
          }
        ]
      },
      {
        "label": "COMPUTED — The EMT run already has two 90s and one 45 (225 degrees). Adding a 3-point saddle (45 + 22.5 + 22.5 = 90 degrees) brings the total to how many degrees? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_bends",
            "expected": 315,
            "hint": "225 + 90 = 315 degrees. That is under the 360-degree limit, so the run is compliant — but only 45 degrees of headroom remains."
          }
        ]
      },
      {
        "label": "DECISION — With 315 degrees of bends, the run is: 1) Over the limit — add a pull point 2) Under the 360-degree limit — compliant, but plan a pull point soon 3) Fine with no pull point ever 4) Only compliant if the wire is upsized",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_bend_call",
            "expected": 2,
            "hint": "315 degrees is under the 360-degree limit, so the run is compliant (2). It is not over the limit (1), and “no pull point ever” (3) ignores how hard a 315-degree pull is. Wire size (4) does not change the bend limit."
          }
        ]
      },
      {
        "label": "COMPUTED — The 30-foot EMT run between two boxes needs supports within 3 feet of each box and at intervals of not more than 10 feet. Minimum number of supports? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_supports",
            "expected": 4,
            "hint": "One support within 3 feet of each box (2), plus intermediate supports so no interval exceeds 10 feet on a 30-foot run: supports at roughly 0, 10, 20, and 30 feet = 4 supports minimum."
          }
        ]
      },
      {
        "label": "COMPUTED — A 4-inch offset at 30 degrees: how far apart are the bend marks? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_offset",
            "expected": 8,
            "hint": "Mark spacing = offset depth × multiplier. 4 × 2.0 = 8 inches apart."
          }
        ]
      },
      {
        "label": "COMPUTED — The same 4-inch offset at 30 degrees shrinks the run by how much? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_shrink",
            "expected": 1,
            "hint": "Shrink at 30 degrees is 1/4 inch per inch of offset. 4 × 1/4 = 1 inch — add it to the run measurement."
          }
        ]
      },
      {
        "label": "DECISION — The PVC run underground carries three 8 AWG conductors plus a ground. Must a separate equipment grounding conductor be pulled? 1) No — PVC grounds itself 2) Yes — PVC is not a grounding conductor, so an EGC must be pulled (352.60) 3) Only if the run is over 100 feet 4) Only for Schedule 80 PVC",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_pvc_egc",
            "expected": 2,
            "hint": "PVC is plastic and is not a grounding conductor (352.60), so a separate EGC must be pulled in every PVC run. Length (3) and Schedule 80 (4) do not change that."
          }
        ]
      },
      {
        "label": "DECISION — The foreman asks whether the EMT run needs a separate ground wire. Correct answer? 1) Yes, always 2) No — EMT is an equipment grounding conductor when properly installed with tight fittings (250.118, 358.60) 3) Only outdoors 4) Only if the run is over 50 feet",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_emt_egc",
            "expected": 2,
            "hint": "EMT serves as the EGC when installed as a complete system with tight fittings. A separate wire is not always required — but every fitting must be tight, or the ground path breaks."
          }
        ]
      },
      {
        "label": "COMPUTED — With more than two conductors in a raceway, the maximum percent fill is: (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_fill_pct",
            "expected": 40,
            "hint": "Chapter 9, Table 1: one conductor 53%, two conductors 31%, more than two conductors 40%."
          }
        ]
      },
      {
        "label": "DECISION — The Schedule 40 PVC run is buried 18 inches deep under a lawn. The correct call? 1) Fine — 18 inches is the standard burial depth for PVC under a lawn 2) Dig deeper — PVC must be 24 inches deep everywhere 3) It is fine only with a concrete encasement 4) PVC may not be buried at all",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_burial",
            "expected": 1,
            "hint": "Table 300.5: PVC conduit under a lawn (not under a driveway or street) is permitted at 18 inches deep. 24 inches applies to some other wiring methods and locations, not to PVC under a lawn."
          }
        ]
      },
      {
        "label": "DECISION — The job is done and the conduit is sized, supported, and grounded. What is the right way to close it? 1) Energize it yourself to test it 2) Have the licensed supervisor verify the work, test for absence of voltage where required, and call for inspection before energizing 3) Leave the covers off so the inspector can see inside 4) Energize it and watch for smoke",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cf_close",
            "expected": 2,
            "hint": "Only the licensed supervisor energizes the work, after verification and inspection. Energizing it yourself (1, 4) violates the safety rule, and leaving covers off (3) is not a close-out step."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "box-fill-load-workshop",
    "title": "Box Fill & Load Workshop",
    "introHtml": "<p><strong>Job ticket #104-B — Box fill, conductor sizing, and a dwelling load check.</strong> Customer: a homeowner adding receptacles and a new circuit to an existing house. Site: a 1,800-square-foot home with an existing 100-ampere service; the new work adds a receptacle circuit and checks whether the service can carry it. Your task: count box fill, size conductors, and run the load math — on paper, using Articles 210, 220, 250, and 314 of the 2023 NEC. Read the job in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=ptk5wNAqHL0\" target=\"_blank\" rel=\"noopener\">Journeyman Electrician Exam Prep (NEC 2023) — Box Fill 314.16</a> — six worked box-fill examples with the 2023 grounding rule. Watch it before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on this job: confirm the circuits are de-energized, locked out and tagged out, and tested for absence of voltage — under a licensed supervisor, per NFPA 70E. Never work on live or energized equipment. This lab is a paper calculation exercise only; it does not prove hands-on skill, and no circuit in this lab is energized.</p><p><strong>The job, as you find it:</strong> (1) A 4-inch square box, 1-1/2 inches deep (18.0 in³), will hold two 12/2 NM cables and one receptacle, with internal clamps. (2) A second box will hold three 14/2 NM cables and one receptacle, with internal clamps. (3) A third box will hold five grounding conductors. (4) A continuous load of 24 amperes needs a new circuit. (5) The house is 1,800 square feet; the general lighting load is 3 VA per square foot. (6) The house has two small-appliance circuits and one laundry circuit at 1,500 VA each. (7) A 100-ampere service protects the new circuit; the EGC must be sized. (8) The new receptacle circuit runs through a 41–45°C attic with four current-carrying conductors in the raceway.</p><p><strong>The rules you will use (2023 NEC):</strong> Box fill — Table 314.16(B): 14 AWG 2.00 in³, 12 AWG 2.25 in³; device yoke = 2 allowances; internal clamps = 1; grounds: first four = 1, each extra = 1/4. Continuous loads at 125% (210.19, 210.20). General lighting 3 VA/ft² (220.41); small-appliance and laundry 1,500 VA each (220.52); demand Table 220.45: first 3,000 VA at 100%, remainder at 35%. EGC from Table 250.122. Derating: correction 0.87 at 41–45°C (90°C column), adjustment 0.80 for 4–6 conductors. For each row, enter the option number or the computed value asked for.</p>",
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
            "key": "bf_safety",
            "expected": 2,
            "hint": "Step 0 governs: a breaker being off is not proof. Verify absence of voltage with a proven meter, under a licensed supervisor, with lockout/tagout. Touching a busbar (3) is never a test."
          }
        ]
      },
      {
        "label": "COMPUTED — Box 1 (two 12/2 cables, one receptacle, internal clamps): total volume allowances? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_box1_count",
            "expected": 8,
            "hint": "Conductors 4 + yoke 2 + clamps 1 + grounds (two, in the first four) 1 = 8 allowances."
          }
        ]
      },
      {
        "label": "COMPUTED — Box 1 fill in cubic inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_box1_fill",
            "expected": 18,
            "hint": "8 allowances × 2.25 in³ (12 AWG) = 18.0 in³ — exactly the box volume, so the box is compliant but full."
          }
        ]
      },
      {
        "label": "DECISION — Box 1 is exactly full at 18.0 in³ in an 18.0 in³ box. Correct call? 1) It is compliant but full — use it, and add nothing more 2) It is overfilled 3) Use a smaller box 4) Remove the receptacle",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_box1_call",
            "expected": 1,
            "hint": "Fill equal to the marked volume is compliant (1). It is not overfilled (2), a smaller box (3) would fail, and removing the receptacle (4) is not the fix — the box is fine as counted."
          }
        ]
      },
      {
        "label": "COMPUTED — Box 2 (three 14/2 cables, one receptacle, internal clamps): total fill in cubic inches? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_box2_fill",
            "expected": 20,
            "hint": "Conductors 6 + yoke 2 + clamps 1 + grounds 1 = 10 allowances × 2.00 in³ (14 AWG) = 20.0 in³ — too big for the 18.0 in³ box; use the 2-1/8 in. deep box (30.3 in³)."
          }
        ]
      },
      {
        "label": "DECISION — Box 2 needs 20.0 in³ but the box holds 18.0 in³. Correct fix? 1) Use it anyway 2) Use the deeper 4-inch square box (30.3 in³) or an extension ring 3) Leave one ground out of the box 4) Use smaller wire",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_box2_fix",
            "expected": 2,
            "hint": "The fix is more volume: the deeper box or an extension ring (2). Using it anyway (1) is a violation, leaving a ground out (3) breaks the grounding, and smaller wire (4) does not fix a volume problem."
          }
        ]
      },
      {
        "label": "COMPUTED — Five grounding conductors in a box count as how many allowances under the 2023 NEC? (Enter the number, decimals allowed.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_grounds",
            "expected": 1.25,
            "hint": "First four grounds = 1 allowance, the fifth adds 1/4, for 1.25 total."
          }
        ]
      },
      {
        "label": "COMPUTED — A continuous load of 24 amperes needs conductors rated at least how many amperes? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_cont",
            "expected": 30,
            "hint": "24 × 1.25 = 30 amperes. A 10 AWG copper conductor (30 A at 60°C) on a 30-ampere breaker is the minimum."
          }
        ]
      },
      {
        "label": "COMPUTED — General lighting load for the 1,800-square-foot house at 3 VA/ft²? (Enter the number of VA.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_lighting",
            "expected": 5400,
            "hint": "1,800 × 3 = 5,400 VA."
          }
        ]
      },
      {
        "label": "COMPUTED — General load: lighting 5,400 VA + two small-appliance circuits (1,500 VA each) + one laundry circuit (1,500 VA) = ? Then apply Table 220.45 demand (first 3,000 VA at 100%, remainder at 35%). What is the demand load in VA? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_demand",
            "expected": 5415,
            "hint": "Total = 5,400 + 3,000 + 1,500 = 9,900 VA. Demand = 3,000 + (6,900 × 0.35) = 3,000 + 2,415 = 5,415 VA."
          }
        ]
      },
      {
        "label": "DECISION — The new circuit is protected by a 100-ampere breaker. What size copper EGC does Table 250.122 require? 1) 12 AWG 2) 10 AWG 3) 8 AWG 4) 6 AWG",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_egc",
            "expected": 3,
            "hint": "Table 250.122: a 100-ampere overcurrent device calls for an 8 AWG copper EGC (option 3)."
          }
        ]
      },
      {
        "label": "COMPUTED — A 12 AWG THHN conductor (30 A at 90°C) in a 41–45°C attic with four current-carrying conductors: derated ampacity? (Enter the number, one decimal.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_derate",
            "expected": 20.9,
            "hint": "30 × 0.87 (correction) × 0.80 (adjustment for 4–6 conductors) = 20.9 amperes — just enough for a 20-ampere circuit."
          }
        ]
      },
      {
        "label": "DECISION — The derated ampacity is 20.9 A for a 20-ampere circuit. Correct call? 1) 12 AWG works — 20.9 A is above 20 A 2) 12 AWG fails 3) Upsize to 8 AWG 4) Remove a conductor from the raceway",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_derate_call",
            "expected": 1,
            "hint": "20.9 A exceeds the 20-ampere load, so 12 AWG works (1) — with almost no margin. It does not fail (2), and 8 AWG (3) is unnecessary, though removing a conductor (4) would help if the load grew."
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
            "key": "bf_sabc",
            "expected": 2,
            "hint": "Section 210.11(C)(1) requires at least two 20-ampere small-appliance branch circuits."
          }
        ]
      },
      {
        "label": "DECISION — The job is calculated and the boxes are sized. What is the right way to close it? 1) Energize the new circuit yourself to test it 2) Have the licensed supervisor verify the work and call for inspection before energizing 3) Cover the boxes with drywall so the inspector cannot see them 4) Leave the panel cover off",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bf_close",
            "expected": 2,
            "hint": "Verification by the licensed supervisor and inspection before energizing (2) is the close-out. Energizing it yourself (1), hiding the work (3), and leaving the cover off (4) are all wrong."
          }
        ]
      }
    ],
    "passing": 70
  }
];
