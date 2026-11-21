// con109 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "rough-in-coordination-sequencing",
    "title": "Rough-In Coordination & Sequencing",
    "introHtml": "<p><strong>Job ticket #3031 — Coordinate the rough-in for a single-story house.</strong> The house has a 12×15-ft living room with an 8-ft ceiling, a 24-ft living-room wall, an 8-ft drain run, and a 20-ft drain run. Your task: put the rough-in steps in the right order and work out the airflow, drain slopes, receptacle count, and clearances. Enter each answer as a number.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=W4YozokJjOA\" target=\"_blank\" rel=\"noopener\">How a House is Built</a> — rough-in and inspection in sequence. This lab is a planning and calculation exercise; it does not certify hands-on skill.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Never work on live equipment. Electrical and gas work belongs to licensed professionals, and any live circuit is de-energized and locked out before anyone works near it. All numbers here are planning calculations — check them against the approved plans and the trades' designs before work starts.</p><p><strong>The rough-in order is:</strong> Step 1 — Framing complete. Step 2 — Plumbing rough-in. Step 3 — HVAC rough-in. Step 4 — Electrical rough-in. Step 5 — Rough-in inspection. Step 6 — Insulation. Step 7 — Drywall. For each order row, enter the step number. <strong>Other numbers you need:</strong> Airflow (CFM) = room volume × air changes per hour ÷ 60. Drain slope: 1/4 in per foot for pipe 2-1/2 in and smaller, 1/8 in per foot for 3–6-in pipe. Receptacle rule: no point more than 6 ft from a receptacle, and receptacles at most 12 ft apart. Furnace working space is about 30 in; panel working space is about 36 in deep.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "ORDER — 'HVAC rough-in.' Which step of the rough-in order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rc_ord_hvac",
            "expected": 3,
            "hint": "Order: 1 framing, 2 plumbing, 3 HVAC, 4 electrical, 5 rough-in inspection, 6 insulation, 7 drywall. HVAC is step 3."
          }
        ]
      },
      {
        "label": "ORDER — 'Rough-in inspection.' Which step of the rough-in order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rc_ord_inspection",
            "expected": 5,
            "hint": "Order: 1 framing, 2 plumbing, 3 HVAC, 4 electrical, 5 rough-in inspection, 6 insulation, 7 drywall. The inspection is step 5 — before any insulation or drywall."
          }
        ]
      },
      {
        "label": "ORDER — 'Electrical rough-in.' Which step of the rough-in order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rc_ord_elec",
            "expected": 4,
            "hint": "Order: 1 framing, 2 plumbing, 3 HVAC, 4 electrical, 5 inspection, 6 insulation, 7 drywall. Electrical is step 4 — wires are the most flexible, so they go last."
          }
        ]
      },
      {
        "label": "ORDER — 'Insulation.' Which step of the rough-in order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rc_ord_insulation",
            "expected": 6,
            "hint": "Order: 1 framing, 2 plumbing, 3 HVAC, 4 electrical, 5 inspection, 6 insulation, 7 drywall. Insulation is step 6 — only after the inspection passes."
          }
        ]
      },
      {
        "label": "COMPUTED — The living room is 12 ft by 15 ft with an 8-ft ceiling (1,440 cu ft). At 6 air changes per hour, how many CFM must the system deliver? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rc_cfm",
            "expected": 144,
            "hint": "1,440 × 6 = 8,640 cu ft per hour; ÷ 60 = 144 CFM."
          }
        ]
      },
      {
        "label": "COMPUTED — A 2-in drain runs 8 ft at 1/4 in per foot. How much does it drop? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rc_drain_8",
            "expected": 2,
            "hint": "8 × 1/4 = 2 in of drop."
          }
        ]
      },
      {
        "label": "COMPUTED — A 3-in drain runs 20 ft at 1/8 in per foot. How much does it drop? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rc_drain_20",
            "expected": 2.5,
            "hint": "20 × 1/8 = 2.5 in of drop."
          }
        ]
      },
      {
        "label": "COMPUTED — A 24-ft wall needs receptacles so no point is more than 6 ft from one. What is the minimum number? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rc_receptacles",
            "expected": 3,
            "hint": "Receptacles at 6, 12, and 18 ft (or 6, 18, and 24 ft) cover the wall at 12-ft spacing; 2 cannot cover 24 ft."
          }
        ]
      },
      {
        "label": "COMPUTED — How many inches deep is the working space in front of an electrical panel? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rc_panel_depth",
            "expected": 36,
            "hint": "The panel working space is about 36 in deep, 30 in wide, and 6-1/2 ft high."
          }
        ]
      },
      {
        "label": "COMPUTED — How many inches of working space are needed in front of a furnace? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "rc_furnace_space",
            "expected": 30,
            "hint": "About 30 in of working space lets a technician stand, open the service panel, and work."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "penetration-clearance-planning",
    "title": "Penetration & Clearance Planning",
    "introHtml": "<p><strong>Job ticket #3032 — Plan the penetrations and clearances for the same house.</strong> The furnace is 24 in deep in a closet. The electrical panel is 16 in wide. A 10-in duct needs a soffit. A 3-in drain and a 2-in vent share a chase. The air handler is 26 in wide and the attic opening is 22 in wide. Your task: work out the hole limits, the closet depth, the panel space, the soffit, the chase, and the access fix. Enter each answer as a number.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=Q1ZRot8i_5M\" target=\"_blank\" rel=\"noopener\">Plumbing Rough In — Piping Vents</a> — pipes and vents passing through framing. This lab is a planning and calculation exercise; it does not certify hands-on skill.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Never work on live equipment. Never cut, notch, or drill a truss or an engineered joist without the designer's or maker's written approval. All numbers here are planning calculations — check them against the approved plans, the maker's instructions, and the local code before work starts.</p><p><strong>The numbers you need:</strong> A 2×4 stud is 3-1/2 in wide; a 2×6 stud is 5-1/2 in wide. Hole limits: bearing stud 40% of width, non-bearing stud 60%. Notch limit in a bearing stud: 25% of width. Furnace working space is about 30 in. Panel working space is about 36 in deep, 30 in wide, and 6-1/2 ft high. A soffit is duct height + 1 in clearance + 1/2 in drywall. A chase needs the pipes plus 2 in of clearance on each side.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "COMPUTED — A load-bearing 2×4 stud is 3-1/2 in wide. What is the largest hole that may be bored through it? (Enter the number of inches; 1-3/8 in = 1.375.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_bearing_2x4",
            "expected": 1.375,
            "hint": "40% of 3.5 in is 1.4 in, about 1-3/8 in (1.375)."
          }
        ]
      },
      {
        "label": "COMPUTED — The same 2×4 stud, non-load-bearing. What is the largest hole? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_nonbearing_2x4",
            "expected": 2.1,
            "hint": "60% of 3.5 in is 2.1 in."
          }
        ]
      },
      {
        "label": "COMPUTED — A load-bearing 2×6 stud is 5-1/2 in wide. What is the largest hole? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_bearing_2x6",
            "expected": 2.2,
            "hint": "40% of 5.5 in is 2.2 in."
          }
        ]
      },
      {
        "label": "COMPUTED — A furnace is 24 in deep and needs 30 in of working space in front of it. How deep must its closet be? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_closet",
            "expected": 54,
            "hint": "24 + 30 = 54 in deep."
          }
        ]
      },
      {
        "label": "COMPUTED — An electrical panel is 16 in wide and its working space is 30 in wide. How many inches of the working space are beside the panel? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_panel_beside",
            "expected": 14,
            "hint": "30 − 16 = 14 in beside the panel."
          }
        ]
      },
      {
        "label": "COMPUTED — A duct is 10 in tall and needs a soffit with 1 in of clearance above it and 1/2 in of drywall below it. How deep is the soffit? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_soffit",
            "expected": 11.5,
            "hint": "10 + 1 + 0.5 = 11.5 in deep."
          }
        ]
      },
      {
        "label": "COMPUTED — A 3-in drain and a 2-in vent share a chase with 2 in of clearance on each side. What is the minimum chase width? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_chase",
            "expected": 9,
            "hint": "3 + 2 + 2 + 2 = 9 in wide."
          }
        ]
      },
      {
        "label": "COMPUTED — The attic opening is 22 in wide and the air handler is 26 in wide. How many inches wider must the opening be for the unit to fit through? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_opening",
            "expected": 4,
            "hint": "26 − 22 = 4 in wider."
          }
        ]
      },
      {
        "label": "COMPUTED — A notch in a load-bearing 2×4 stud (3-1/2 in wide) can be at most 25% of its width. How deep is the notch? (Enter the number of inches.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_notch",
            "expected": 0.875,
            "hint": "25% of 3.5 in is 0.875 in."
          }
        ]
      },
      {
        "label": "COMPUTED — How many feet high must the working space in front of an electrical panel stay clear? (Enter the number; 6-1/2 ft = 6.5.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "pc_panel_height",
            "expected": 6.5,
            "hint": "The panel working space must stay clear up to 6-1/2 ft high."
          }
        ]
      }
    ],
    "passing": 70
  }
];
