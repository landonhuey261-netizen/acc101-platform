// med106 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "scene-sizeup-primary-assessment",
    "title": "Scene Size-Up & Primary Assessment: The Crash Patient",
    "introHtml": "<p><strong>Scenario — A two-car crash on a country road.</strong> You arrive to find two cars with heavy front-end damage. One patient is sitting on the ground beside the first car, awake and talking, with a cut on the forehead. A second person is still in the driver's seat of the second car, slumped over the wheel and not responding. Fuel is leaking from the first car. Your task: size up the scene, run the primary assessment, and decide what happens next. Read the scenario in the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=5ZGEw3hmpCU\" target=\"_blank\" rel=\"noopener\">EMT Lecture - Trauma Patient Assessment</a> — watch how the responder takes in the whole scene before touching a patient.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first: scene safety before touching a patient.</strong> Before approaching either patient: stop at a safe distance, look for hazards — the leaking fuel, traffic on the road, unstable vehicles, broken glass — and call dispatch for the fire department and a second ambulance. Put on gloves and eye protection. Do not enter a scene with leaking fuel and no fire cover, and do not touch a patient until you know the scene is safe. Never become a second patient.</p><p><strong>The assessment order:</strong> Step 1 — Scene size-up: hazards, mechanism of injury, number of patients, additional resources. Step 2 — Primary assessment: general impression, AVPU, airway, breathing, circulation. Step 3 — History (SAMPLE). Step 4 — Secondary assessment: rapid trauma exam with DCAP-BTLS and GCS. Step 5 — Reassessment. For each row, enter the option number, the step number, or the computed value asked for. Normal adult ranges: HR 60–100, RR 12–20, BP below 120/80, SpO2 95–100%.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Fuel is leaking from the first car and traffic is passing. What do you do first? 1) Run straight to the patient in the car 2) Stop at a safe distance, call dispatch for fire and a second ambulance, and put on gloves and eye protection 3) Start bandaging the forehead cut 4) Move the leaking car yourself",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_safety",
            "expected": 2,
            "hint": "Step 0 governs: scene safety before touching a patient. Leaking fuel and traffic make the scene unsafe. Running in (1) risks a fire and a second patient. Bandaging (3) skips safety entirely. Moving the car (4) is not your job and is dangerous."
          }
        ]
      },
      {
        "label": "ORDER — 'Scene size-up: hazards, mechanism of injury, number of patients, additional resources.' Which step of the assessment order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_ord_sizeup",
            "expected": 1,
            "hint": "Order: 1 scene size-up, 2 primary assessment, 3 history, 4 secondary assessment, 5 reassessment. Scene size-up is step 1."
          }
        ]
      },
      {
        "label": "ORDER — 'Primary assessment: general impression, AVPU, airway, breathing, circulation.' Which step of the assessment order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_ord_primary",
            "expected": 2,
            "hint": "Order: 1 scene size-up, 2 primary assessment, 3 history, 4 secondary assessment, 5 reassessment. The primary assessment is step 2."
          }
        ]
      },
      {
        "label": "ORDER — 'Secondary assessment: rapid trauma exam with DCAP-BTLS and GCS.' Which step of the assessment order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_ord_secondary",
            "expected": 4,
            "hint": "Order: 1 scene size-up, 2 primary assessment, 3 history, 4 secondary assessment, 5 reassessment. The secondary assessment is step 4."
          }
        ]
      },
      {
        "label": "DECISION — How many patients are there, and how do you know? 1) One — the person on the ground 2) Two — the person on the ground and the person in the car; count twice and look for hidden patients 3) None — both are fine 4) Three — guess one more is in the trunk",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_count",
            "expected": 2,
            "hint": "Two patients are visible, and you must count twice — a crash can hide patients. One (1) misses the person in the car. None (3) ignores two injured people. Three (4) is a guess, not a count."
          }
        ]
      },
      {
        "label": "DECISION — The person in the car does not respond to shouting. What is the first thing you check? 1) Their wallet 2) Their airway and breathing 3) Their blood pressure 4) Their medical history",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_abc",
            "expected": 2,
            "hint": "The ABCs come first in the primary assessment — airway, then breathing, then circulation. A wallet (1) is irrelevant. Blood pressure (3) and history (4) come later."
          }
        ]
      },
      {
        "label": "DECISION — The person on the ground is talking in full sentences. What does that tell you? 1) Their airway is blocked 2) Their airway is open and they are breathing adequately enough to speak 3) They have no injuries 4) They do not need assessment",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_talking",
            "expected": 2,
            "hint": "Talking means the airway is open and air is moving. A blocked airway (1) prevents speech. Talking does not mean no injuries (3) or no assessment (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — The person in the car opens their eyes when you speak (3), talks but is confused (4), and obeys commands (6). What is their GCS score? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_gcs",
            "expected": 13,
            "hint": "Eye 3 + verbal 4 + motor 6 = 13. That is below the normal 15, showing a reduced level of consciousness — report it and recheck it."
          }
        ]
      },
      {
        "label": "DECISION — A GCS of 13 means: 1) Fully awake and normal 2) A reduced level of consciousness — below the normal 15 3) A severe brain injury (8 or below) 4) No brain injury at all",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_gcs_meaning",
            "expected": 2,
            "hint": "13 is below the normal 15, so consciousness is reduced. Fully awake (1) is 15. A severe brain injury (3) is 8 or below. A low GCS does not rule out a brain injury (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — You count 13 breaths in 30 seconds for the person on the ground. What is the respiratory rate per minute? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_rr",
            "expected": 26,
            "hint": "13 breaths in 30 seconds × 2 = 26 per minute. That is above the normal 12–20 — fast breathing (tachypnea) that needs reporting."
          }
        ]
      },
      {
        "label": "DECISION — A respiratory rate of 26 per minute is: 1) Normal 2) Below normal 3) Above normal — tachypnea 4) Impossible to measure",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_rr_meaning",
            "expected": 3,
            "hint": "26 is above the normal adult range of 12–20 at rest — tachypnea. Normal (1) is 12–20. Below normal (2) would be under 12. It is easy to measure (4)."
          }
        ]
      },
      {
        "label": "DECISION — The person in the car is unstable. How often should you reassess them? 1) Every 5 minutes 2) Every 15 minutes 3) Every 30 minutes 4) Once an hour",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_reassess",
            "expected": 1,
            "hint": "Every 5 minutes for an unstable patient. Every 15 minutes (2) is for a stable patient. 30 minutes (3) and an hour (4) are far too long."
          }
        ]
      },
      {
        "label": "DECISION — The mechanism of injury is a high-speed crash. What does that suggest? 1) Minor injuries only 2) Serious injuries even if the patient looks well 3) No transport needed 4) No assessment needed",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_moi",
            "expected": 2,
            "hint": "A high-energy mechanism suggests serious internal injuries even when the patient looks well. Minor injuries only (1) is the opposite. No transport (3) and no assessment (4) are both wrong."
          }
        ]
      },
      {
        "label": "DECISION — The crash patient needs rapid transport. What do you give the hospital first? 1) Nothing — they can see for themselves 2) A radio report: unit, age and sex, chief complaint, vital signs, treatments, ETA 3) The patient's name over the radio 4) Your opinion about what is wrong",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sz_radio",
            "expected": 2,
            "hint": "A radio report in the set order — unit, age and sex, chief complaint, vital signs, treatments, ETA — lets the hospital prepare. Nothing (1) wastes the information you gathered. A name over the radio (3) breaks confidentiality. An opinion (4) is not data."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "airway-breathing-oxygen",
    "title": "Airway, Breathing & Oxygen: The Unresponsive Patient",
    "introHtml": "<p><strong>Scenario — A man found unresponsive at home.</strong> A 64-year-old man is found slumped in a chair, unresponsive, breathing slowly and shallowly, with blue lips. His wife says he has COPD and was fine an hour ago. An oxygen cylinder, a bag-valve-mask, suction, and airway adjuncts are on the ambulance. Your task: open the airway, choose the right adjunct, give oxygen or ventilations, and monitor the response. Read the scenario in the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=uvgk-uzJc4I\" target=\"_blank\" rel=\"noopener\">Airway Management: EMT to Paramedic in One Video</a> — focus on the basic opening techniques, the OPA and NPA, suction, and the bag-valve-mask.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first: scene safety and infection control before touching a patient.</strong> Before approaching the patient: check the scene is safe, put on gloves and eye protection, and have suction ready before you need it. The patient may vomit — suction sprays fluid, and the fluid can carry disease. Never touch a patient without gloves, and never start airway care without suction ready.</p><p><strong>The airway and breathing steps:</strong> Step 1 — Open the airway: head-tilt, chin-lift (no spine injury suspected). Step 2 — Check breathing: rate, depth, effort. Step 3 — Suction if there is fluid, in bursts of 10–15 seconds. Step 4 — Place an airway adjunct if needed: OPA if unresponsive with no gag reflex, NPA if the patient still has a gag reflex. Step 5 — Give oxygen or ventilations: oxygen if the patient is breathing adequately, BVM ventilations if not. For each row, enter the option number, the step number, or the computed value asked for. Oxygen devices, as directed by protocol: nasal cannula 1–6 L/min, simple mask 6–10 L/min, non-rebreather 10–15 L/min, BVM oxygen 15 L/min.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before touching the unresponsive patient, what must you do first? 1) Start compressions immediately 2) Check the scene is safe, put on gloves and eye protection, and have suction ready 3) Give oxygen first 4) Take a full history",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "aw_safety",
            "expected": 2,
            "hint": "Step 0 governs: scene safety and infection control come before touching a patient, and suction must be ready before airway care. Compressions (1) are for a patient who is not breathing, not the first step. Oxygen (3) comes after the airway is opened. History (4) comes after the primary assessment."
          }
        ]
      },
      {
        "label": "ORDER — 'Open the airway: head-tilt, chin-lift.' Which step of the airway and breathing steps is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "aw_ord_open",
            "expected": 1,
            "hint": "Steps: 1 open the airway, 2 check breathing, 3 suction if fluid, 4 place an adjunct, 5 oxygen or ventilations. Opening the airway is step 1."
          }
        ]
      },
      {
        "label": "ORDER — 'Place an airway adjunct if needed.' Which step of the airway and breathing steps is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "aw_ord_adjunct",
            "expected": 4,
            "hint": "Steps: 1 open the airway, 2 check breathing, 3 suction, 4 adjunct, 5 oxygen or ventilations. Placing an adjunct is step 4."
          }
        ]
      },
      {
        "label": "DECISION — The patient is unresponsive and has no gag reflex. Which airway adjunct do you use? 1) Nasal cannula 2) Oropharyngeal airway (OPA) 3) Nasopharyngeal airway (NPA) 4) None — do nothing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "aw_opa",
            "expected": 2,
            "hint": "An OPA is for an unresponsive patient with no gag reflex. A nasal cannula (1) delivers oxygen, not an airway adjunct. An NPA (3) is for a patient who still has a gag reflex. Doing nothing (4) leaves the airway blocked by the tongue."
          }
        ]
      },
      {
        "label": "DECISION — The patient still had a gag reflex. Which adjunct would you use instead? 1) OPA 2) NPA 3) Nasal cannula 4) BVM only",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "aw_npa",
            "expected": 2,
            "hint": "An NPA can be used when the patient still has a gag reflex — an OPA would make them gag and vomit. A nasal cannula (3) is an oxygen device, not an adjunct. A BVM alone (4) does not hold the airway open."
          }
        ]
      },
      {
        "label": "DECISION — The patient has a suspected skull fracture. Which adjunct must you NOT use? 1) OPA 2) NPA 3) BVM 4) Suction",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "aw_skull",
            "expected": 2,
            "hint": "An NPA must never be used with a suspected skull fracture — the tube could enter the skull through the fracture. An OPA (1) is the safer choice if there is no gag reflex. A BVM (3) and suction (4) are not affected by a skull fracture."
          }
        ]
      },
      {
        "label": "COMPUTED — The patient is breathing 5 times in 30 seconds. What is the respiratory rate per minute? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "aw_rr",
            "expected": 10,
            "hint": "5 breaths in 30 seconds × 2 = 10 per minute. That is below the normal 12–20 — slow, inadequate breathing that needs ventilations."
          }
        ]
      },
      {
        "label": "DECISION — A respiratory rate of 10 per minute, shallow, with blue lips means: 1) Normal breathing 2) Inadequate breathing — the patient needs ventilations 3) The patient is asleep 4) The patient needs a nasal cannula only",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "aw_inadequate",
            "expected": 2,
            "hint": "10 per minute and shallow, with blue lips, is inadequate breathing — the patient is not moving enough air. Normal (1) is 12–20. Asleep (3) does not explain blue lips. A cannula alone (4) gives oxygen but does not move air."
          }
        ]
      },
      {
        "label": "DECISION — The patient needs ventilations with a BVM. What oxygen flow do you attach? 1) 2 liters per minute 2) 6 liters per minute 3) 15 liters per minute 4) 30 liters per minute",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "aw_bvm_o2",
            "expected": 3,
            "hint": "Oxygen for a BVM is attached at 15 liters per minute, filling the reservoir. 2 (1) and 6 (2) are too low for a BVM reservoir. 30 (4) is not a standard BVM flow."
          }
        ]
      },
      {
        "label": "COMPUTED — You ventilate at 10 breaths per minute for 2 minutes. How many breaths is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "aw_bvm_count",
            "expected": 20,
            "hint": "10 breaths per minute × 2 minutes = 20 breaths. At one breath every 5–6 seconds, 2 minutes of ventilations is about 20 breaths."
          }
        ]
      },
      {
        "label": "DECISION — The patient's SpO2 is 89% and he is breathing adequately on a nasal cannula at 4 liters per minute. What do you do? 1) Leave it — 89% is fine 2) Step up the oxygen as directed by protocol — for example, a simple mask or non-rebreather 3) Turn the cannula down 4) Remove the oxygen",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "aw_stepup",
            "expected": 2,
            "hint": "89% is below the normal 95–100%, so the patient needs more oxygen — step up the device as directed by protocol. Leaving it (1) accepts a low saturation. Turning it down (3) or removing it (4) makes it worse."
          }
        ]
      },
      {
        "label": "DECISION — During BVM ventilation, the patient's stomach rises with each breath. What do you do? 1) Squeeze the bag harder 2) Slow down, reposition the head, and give smaller, slower breaths 3) Stop ventilating entirely 4) Give oxygen only",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "aw_gastric",
            "expected": 2,
            "hint": "Air is going into the stomach — slow down, reposition the head to open the airway, and give smaller breaths. Squeezing harder (1) pushes more air into the stomach. Stopping (3) leaves the patient without air. Oxygen only (4) does not ventilate."
          }
        ]
      }
    ],
    "passing": 70
  }
];
