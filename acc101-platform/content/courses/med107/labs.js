// med107 — Scenario labs.
module.exports = [
  {
    "id": "trauma-primary-survey-bleed",
    "title": "Trauma Primary Survey & Major Bleed",
    "introHtml": "<p><strong>Call #4101 — Car crash, one patient.</strong> A driver hit a tree at speed. The car is stable, the scene is safe, and you are first on scene with your partner. Your task: run the primary survey in order and control the bleeding. Read the case in the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Scene safety before touching the patient: check for traffic, fire, fuel, and hazards; gloves and eye protection on; do not enter an unsafe scene. Keep the patient still — a spine injury is possible after a crash — and never move them unless they are in immediate danger.</p><p><strong>The patient, as you find him:</strong> A man in his 40s, awake but confused, lying beside the car. (1) Bright-red blood spurts from a deep cut on his right thigh. (2) His airway is open and he is talking, but his breathing is fast. (3) His pulse is fast and weak, skin pale, cool, and clammy. (4) His left forearm is deformed and painful. (5) His blood pressure, taken later, is falling. <strong>The correct order of work:</strong> Step 1 — Control the catastrophic thigh bleed. Step 2 — Airway. Step 3 — Breathing. Step 4 — Circulation and shock care. Step 5 — Disability and exposure. Step 6 — Splint the forearm and transport rapidly. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The scene has traffic passing and fuel on the road. What do you do first? 1) Run to the patient at once 2) Stage safely, call for fire and police, and approach only when the scene is safe 3) Move the patient to the roadside yourself 4) Take vital signs from the car",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tr_safety",
            "expected": 2,
            "hint": "Step 0 governs: an unsafe scene makes a second victim. Stage safely and get the hazards controlled before patient contact."
          }
        ]
      },
      {
        "label": "ORDER — 'Control the catastrophic thigh bleed.' Which step of the order of work is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tr_ord_bleed",
            "expected": 1,
            "hint": "Order: 1 bleed, 2 airway, 3 breathing, 4 circulation/shock, 5 disability/exposure, 6 splint and transport. The spurting bleed is step 1."
          }
        ]
      },
      {
        "label": "DECISION — Bright-red blood spurts from the thigh wound. What is the first care step? 1) A tourniquet at once, with no pressure first 2) Direct pressure first, then a tourniquet if pressure does not control it 3) Raise the leg and wait 4) Cover it with a loose cloth",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tr_bleed",
            "expected": 2,
            "hint": "Direct pressure is first for almost all external bleeding; a tourniquet follows if pressure cannot control a life-threatening limb bleed."
          }
        ]
      },
      {
        "label": "DECISION — Pressure is not controlling the spurting thigh bleed. Correct call? 1) Keep pressing for 20 minutes 2) Apply a tourniquet 2–3 inches above the wound, tighten until bleeding stops, and note the time 3) Apply a tourniquet over the knee joint 4) Loosen the pressure and check the wound",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tr_tourn",
            "expected": 2,
            "hint": "A life-threatening limb bleed that pressure cannot control needs a tourniquet above the wound, clear of a joint, with the time recorded."
          }
        ]
      },
      {
        "label": "ORDER — 'Check breathing and give oxygen per protocol.' Which step of the order of work is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tr_ord_breath",
            "expected": 3,
            "hint": "Order: 1 bleed, 2 airway, 3 breathing, 4 circulation/shock, 5 disability/exposure, 6 splint and transport."
          }
        ]
      },
      {
        "label": "DECISION — The patient is confused, pulse fast and weak, skin pale cool clammy, blood pressure falling. What is happening? 1) He is cold 2) He is in shock from blood loss 3) He is asleep 4) He is hungry",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tr_shock",
            "expected": 2,
            "hint": "Fast weak pulse, pale cool clammy skin, confusion, and falling blood pressure are shock from blood loss."
          }
        ]
      },
      {
        "label": "DECISION — The left forearm is deformed and painful. Correct care? 1) Straighten it, then splint 2) Splint it in the position found, immobilising the joints above and below, and check CSM before and after 3) Ignore it — the leg matters more 4) Ask the patient to move it to test it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tr_splint",
            "expected": 2,
            "hint": "Splint as found, joints above and below, CSM before and after. Never straighten a deformed fracture in the field."
          }
        ]
      },
      {
        "label": "COMPUTED — You reassess an unstable patient about every 5 minutes. In 30 minutes of care and transport, how many reassessments is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tr_reassess",
            "expected": 6,
            "hint": "30 ÷ 5 = 6 reassessments. Unstable patients are reassessed about every 5 minutes."
          }
        ]
      },
      {
        "label": "DECISION — The patient must go to hospital now. Correct transport decision? 1) Stay on scene for a full history first 2) Load-and-go: treat on the move and transport rapidly 3) Wait for the bleeding to stop on its own 4) Drive him in a family car",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tr_transport",
            "expected": 2,
            "hint": "Major bleeding, shock, and a strong mechanism make this load-and-go — hospital care cannot wait."
          }
        ]
      },
      {
        "label": "DECISION — How do you close this call? 1) Say nothing 2) Give a structured handover: mechanism, findings, bleeding control and tourniquet time, vitals and trend, splint and CSM 3) Hand over only the patient's name 4) Leave before the hospital team arrives",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "tr_handover",
            "expected": 2,
            "hint": "A structured handover passes on the mechanism, what you found, what you did, and the tourniquet time — the hospital needs all of it."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "head-spine-burn-case",
    "title": "Head Injury, Spine Precautions & Burns",
    "introHtml": "<p><strong>Call #4102 — Fall from a roof, one patient.</strong> A roofer fell from a second-storey roof onto grass. He is awake but confused, with a bleeding scalp wound and burns on one arm from a hot tar pot he knocked over. Your task: protect the spine, watch the brain, and care for the burn. Read the case in the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Scene safety before touching the patient: check the roof and the tar pot for heat and falling objects, gloves and eye protection on, and do not move the patient. A fall from height means a spine injury is possible — keep the patient still and hold the head in a neutral, in-line position.</p><p><strong>The patient, as you find him:</strong> A man in his 30s, confused, repeating the same question. (1) A scalp wound bleeds steadily. (2) His left pupil is larger than the right. (3) He vomited once. (4) He has neck pain and tingling in both hands. (5) His right arm has a red, wet, blistered burn over the whole arm. <strong>The correct order of work:</strong> Step 1 — Hold the head still, spine precautions. Step 2 — Airway with jaw thrust. Step 3 — Control scalp bleeding without pressing a depressed skull. Step 4 — Watch consciousness and pupils, transport rapidly. Step 5 — Cool and cover the burn, keep the patient warm. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — A fall from height with neck pain and tingling. What do you do first? 1) Help him sit up 2) Keep him still, hold the head in a neutral in-line position, and do not let him move his neck 3) Ask him to walk to the ambulance 4) Bend his neck to test movement",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hs_safety",
            "expected": 2,
            "hint": "Step 0 governs: a suspected spine injury means keep still, head neutral and in-line, no sitting, standing, or neck movement."
          }
        ]
      },
      {
        "label": "ORDER — 'Airway with jaw thrust.' Which step of the order of work is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hs_ord_airway",
            "expected": 2,
            "hint": "Order: 1 hold head still, 2 airway with jaw thrust, 3 control scalp bleeding, 4 watch brain and transport, 5 burn care."
          }
        ]
      },
      {
        "label": "DECISION — The left pupil is larger than the right and he vomited. What does this suggest? 1) He is tired 2) Rising pressure inside the skull — a red flag 3) A cold 4) He is hungry",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hs_pupil",
            "expected": 2,
            "hint": "Unequal pupils and vomiting after a head injury are red flags for rising pressure inside the skull."
          }
        ]
      },
      {
        "label": "DECISION — How do you open the airway when a spine injury is possible? 1) Head tilt 2) Jaw thrust, lifting the jaw forward without moving the neck 3) Finger sweep 4) Turn the head to the side",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hs_jaw",
            "expected": 2,
            "hint": "A jaw thrust opens the airway without moving the neck. A head tilt moves the neck and a blind finger sweep can push objects deeper."
          }
        ]
      },
      {
        "label": "DECISION — The scalp wound bleeds steadily. Correct care? 1) Press hard directly on a soft or depressed area of the skull 2) Control bleeding with direct pressure, but do not press on a soft or depressed area of the skull 3) Leave it bleeding 4) Pour alcohol into it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hs_scalp",
            "expected": 2,
            "hint": "Control scalp bleeding with pressure, but never press on a depressed skull area — it can push bone into the brain."
          }
        ]
      },
      {
        "label": "DECISION — The burn on the whole right arm is red, wet, and blistered. What depth is it? 1) Superficial 2) Partial-thickness 3) Full-thickness 4) Not a burn",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hs_burn_depth",
            "expected": 2,
            "hint": "Red, wet, blistered, and very painful is a partial-thickness burn."
          }
        ]
      },
      {
        "label": "COMPUTED — By the adult Rule of Nines, one whole arm is 9% of body surface. The burn covers the whole arm. What percentage is burned? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hs_burn_pct",
            "expected": 9,
            "hint": "One whole arm = 9% by the adult Rule of Nines."
          }
        ]
      },
      {
        "label": "DECISION — How do you care for the burn in the field? 1) Pop the blisters and apply butter 2) Cool with clean cool water, do not pop blisters, cover with a clean dry dressing, and keep the patient warm 3) Use ice directly on it 4) Leave it uncovered",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hs_burn_care",
            "expected": 2,
            "hint": "Cool with clean cool water, do not pop blisters, cover with a clean dry dressing, keep warm. Ice drops body temperature and butter traps heat."
          }
        ]
      },
      {
        "label": "DECISION — The patient vomits. What do you do? 1) Turn his head alone to the side 2) Log roll the whole body as a unit with spine precautions 3) Sit him upright quickly 4) Leave him flat on his back",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hs_vomit",
            "expected": 2,
            "hint": "A log roll keeps the spine straight while clearing the airway. Turning the head alone twists the neck."
          }
        ]
      },
      {
        "label": "DECISION — What is the transport priority? 1) Stay on scene for a long assessment 2) Rapid transport with an early hospital warning, including mechanism, consciousness, pupils, and vomiting 3) Wait for him to feel better 4) Transport to the nearest clinic with no warning",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hs_transport",
            "expected": 2,
            "hint": "Head injury with red flags and a suspected spine injury is load-and-go with an early warning so the hospital is ready."
          }
        ]
      }
    ],
    "passing": 70
  }
];
