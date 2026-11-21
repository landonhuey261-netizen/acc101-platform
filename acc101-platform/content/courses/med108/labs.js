// med108 — Scenario labs.
module.exports = [
  {
    "id": "chest-pain-cardiac-case",
    "title": "Chest Pain & Cardiac Emergency",
    "introHtml": "<p><strong>Call #4201 — Chest pain at home.</strong> A 68-year-old man called 911 for crushing chest pain. You are first on scene with your partner. Your task: assess the chest pain, support the patient, and make the transport decision. Read the case in the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Scene safety before touching the patient: check the home for hazards, pets, and other people; gloves on; keep the patient still — do not let him walk, drive, or exert himself. A heart attack can turn into a cardiac arrest without warning, so keep the AED close and watch him constantly.</p><p><strong>The patient, as you find him:</strong> A 68-year-old man, sitting in a chair, pale and sweaty. (1) Crushing chest pain started 25 minutes ago at rest, spreading to the left arm and jaw. (2) He is breathless and nauseated. (3) His pulse is fast, his breathing is fast. (4) He has a history of heart disease and takes heart medicine. (5) He has a prescribed nitroglycerin bottle, unexpired. <strong>The correct order of work:</strong> Step 1 — Keep still and comfortable, primary survey. Step 2 — Oxygen per protocol. Step 3 — SAMPLE and OPQRST, vital signs, note the start time. Step 4 — Nitroglycerin only per protocol and medical direction, after the checks. Step 5 — Rapid transport with an early warning. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The patient wants to walk to the ambulance himself. What do you do? 1) Let him walk — it saves time 2) Keep him still and carry him on the stretcher — exertion can worsen a heart attack 3) Let him drive himself to hospital 4) Tell him to climb the stairs for exercise",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cp_safety",
            "expected": 2,
            "hint": "Step 0 governs: a chest-pain patient must not exert himself. Keep him still and move him on the stretcher."
          }
        ]
      },
      {
        "label": "DECISION — Crushing chest pain spreading to the arm and jaw, with sweating and breathlessness. Most likely problem? 1) Indigestion 2) A heart attack 3) A muscle strain 4) A cold",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cp_diag",
            "expected": 2,
            "hint": "Crushing chest pain with radiation, sweating, and breathlessness is a heart attack until the hospital proves otherwise."
          }
        ]
      },
      {
        "label": "ORDER — 'Take SAMPLE and OPQRST and note the exact time the pain started.' Which step of the order of work is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cp_ord_hist",
            "expected": 3,
            "hint": "Order: 1 keep still/primary survey, 2 oxygen per protocol, 3 history and vitals with start time, 4 nitroglycerin only per protocol, 5 rapid transport."
          }
        ]
      },
      {
        "label": "DECISION — The patient has his own prescribed, unexpired nitroglycerin. When may you assist with it? 1) At once, on your own initiative 2) Only when local protocol and medical direction allow, after the protocol checks including blood pressure 3) Only if the pain is mild 4) Never — throw it away",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cp_nitro",
            "expected": 2,
            "hint": "Nitroglycerin is protocol-only: protocol, medical direction, the patient's own prescribed unexpired medicine, and the checks — never on your own initiative."
          }
        ]
      },
      {
        "label": "DECISION — The patient's pain started 25 minutes ago. Why does the exact start time matter? 1) It does not matter 2) The hospital needs it to judge time-critical treatment 3) It is for the report only 4) It tells you his age",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cp_time",
            "expected": 2,
            "hint": "The start time decides what time-critical treatment is possible — the hospital needs it."
          }
        ]
      },
      {
        "label": "COMPUTED — The pain started 25 minutes ago and the drive to hospital is 20 minutes. How many minutes after onset will he arrive? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cp_arrive",
            "expected": 45,
            "hint": "25 + 20 = 45 minutes after onset. Time matters in a heart attack — every minute counts."
          }
        ]
      },
      {
        "label": "DECISION — The patient becomes unresponsive and stops breathing normally. What do you do? 1) Give him water 2) Start CPR and use an AED if available 3) Wait for him to wake up 4) Drive faster and do nothing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cp_arrest",
            "expected": 2,
            "hint": "A heart attack can turn into cardiac arrest — start CPR and use an AED if available."
          }
        ]
      },
      {
        "label": "DECISION — How should the patient be positioned? 1) Lying flat 2) Sitting upright or in the position most comfortable, kept still 3) Standing 4) On his stomach",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cp_position",
            "expected": 2,
            "hint": "Keep him still and comfortable, usually sitting upright — lying flat and standing both worsen the situation."
          }
        ]
      },
      {
        "label": "DECISION — The patient asks for aspirin. What is the rule? 1) Give it at once 2) Only per protocol and medical direction, never if allergic or with a bleeding problem 3) Give it for a stroke too 4) Give two doses to be safe",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cp_aspirin",
            "expected": 2,
            "hint": "Aspirin is protocol-only, never if allergic or with a bleeding problem, and never for a stroke."
          }
        ]
      },
      {
        "label": "DECISION — What is the transport priority? 1) Stay on scene for a long assessment 2) Rapid transport with an early warning so the cardiac team is ready 3) Wait for the pain to pass 4) Transport to the nearest clinic with no warning",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cp_transport",
            "expected": 2,
            "hint": "A heart attack is load-and-go with an early warning — only the hospital can open the artery."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "stroke-diabetic-confusion",
    "title": "Stroke, Low Blood Sugar & Confusion",
    "introHtml": "<p><strong>Call #4202 — Confused patient at home.</strong> A family called 911 because a 72-year-old woman suddenly cannot speak clearly and her left arm is weak. You are first on scene. Your task: tell a stroke from low blood sugar, protect the airway, and transport fast. Read the case in the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Scene safety before touching the patient: check the home for hazards, gloves on, and keep the patient still — do not let her walk or stand. A stroke patient can fall, and a confused patient can choke, so protect the airway and do not give food or drink by mouth.</p><p><strong>The patient, as you find her:</strong> A 72-year-old woman with diabetes, sitting in a chair. (1) Her face droops on the left when she smiles. (2) Her left arm drifts down when she raises both arms. (3) Her speech is slurred. (4) She was last seen normal 40 minutes ago, at breakfast. (5) She is sweaty and shaky. <strong>The correct order of work:</strong> Step 1 — Primary survey and BE-FAST check. Step 2 — Check blood sugar where allowed. Step 3 — Protect the airway, no food or drink by mouth. Step 4 — Oxygen per protocol. Step 5 — Rapid transport with an early warning, including the last known well time. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The patient is confused and wants to stand up and walk. What do you do? 1) Let her walk to the ambulance 2) Keep her still and seated — a stroke patient can fall, and a confused patient can choke 3) Give her food to help her energy 4) Leave her alone while you get the stretcher",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sd_safety",
            "expected": 2,
            "hint": "Step 0 governs: keep her still and seated. A stroke patient can fall, and food or drink by mouth risks choking."
          }
        ]
      },
      {
        "label": "DECISION — Face droop, arm drift, and slurred speech. Which BE-FAST letters are these? 1) B and E 2) F, A, and S 3) T only 4) None of them",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sd_befast",
            "expected": 2,
            "hint": "F — Face droop, A — Arms drift, S — Speech slurred. Any one sign can mean a stroke."
          }
        ]
      },
      {
        "label": "ORDER — 'Check blood sugar where allowed.' Which step of the order of work is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sd_ord_sugar",
            "expected": 2,
            "hint": "Order: 1 primary survey and BE-FAST, 2 blood sugar check, 3 airway protection, 4 oxygen per protocol, 5 rapid transport."
          }
        ]
      },
      {
        "label": "DECISION — Why must you check blood sugar in this patient? 1) It does not matter 2) Low blood sugar can look exactly like a stroke, and she has diabetes and is sweaty and shaky 3) To check her diet 4) To give her insulin",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sd_sugar_why",
            "expected": 2,
            "hint": "Low blood sugar mimics a stroke — slurred speech, weakness, confusion — and she has diabetes with sweating and shakiness."
          }
        ]
      },
      {
        "label": "DECISION — The patient was last seen normal 40 minutes ago. What is this called, and why does it matter? 1) The last known well time — it decides what time-critical stroke treatment is possible 2) Her breakfast time — it does not matter 3) The arrival time 4) Her bedtime",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sd_lkw",
            "expected": 1,
            "hint": "The last known well time is the last time she was seen normal; some stroke treatments only work within a few hours of onset."
          }
        ]
      },
      {
        "label": "DECISION — Should you give her aspirin? 1) Yes, at once 2) No — some strokes are caused by bleeding, and aspirin makes bleeding worse 3) Yes, two doses 4) Only if she asks",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sd_aspirin",
            "expected": 2,
            "hint": "Never give aspirin for a suspected stroke — only the hospital, after a scan, can tell which type of stroke it is."
          }
        ]
      },
      {
        "label": "DECISION — Should you give her food or drink by mouth? 1) Yes, to give her energy 2) No — a stroke can affect swallowing and she can choke 3) Yes, water only 4) Yes, if she asks",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sd_food",
            "expected": 2,
            "hint": "A stroke can affect swallowing — no food or drink by mouth."
          }
        ]
      },
      {
        "label": "COMPUTED — She was last seen normal 40 minutes ago, and the drive to hospital is 20 minutes. How many minutes after onset will she arrive? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sd_arrive",
            "expected": 60,
            "hint": "40 + 20 = 60 minutes after the last known well time."
          }
        ]
      },
      {
        "label": "DECISION — Her blood sugar is low. What does that change? 1) Nothing 2) It may explain her signs — low blood sugar mimics a stroke — and it must be handed over clearly 3) It means she has no stroke 4) It means you can leave her at home",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sd_low",
            "expected": 2,
            "hint": "A low reading may explain the stroke-like signs and changes the picture — record it and hand it over, and still transport for assessment."
          }
        ]
      },
      {
        "label": "DECISION — What is the transport priority and handover? 1) Stay on scene for a long assessment 2) Rapid transport with an early warning, including BE-FAST findings, last known well time, blood sugar, and medicines 3) Wait for her to improve 4) Transport with no handover",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "sd_transport",
            "expected": 2,
            "hint": "A suspected stroke is load-and-go with an early warning — the hospital needs the BE-FAST findings, the last known well time, blood sugar, and medicines, especially blood thinners."
          }
        ]
      }
    ],
    "passing": 70
  }
];
