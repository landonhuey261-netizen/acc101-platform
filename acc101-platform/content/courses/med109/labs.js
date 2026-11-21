// med109 — Scenario labs.
module.exports = [
  {
    "id": "obstetric-delivery-case",
    "title": "Obstetric Emergency & Field Delivery",
    "introHtml": "<p><strong>Call #4301 — Labour at home.</strong> A 28-year-old woman, 39 weeks pregnant with her second baby, called 911 because contractions are close together and she feels the urge to push. You are first on scene with your partner. Your task: judge whether delivery is imminent, prepare for delivery, and care for mother and baby. Read the case in the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Scene safety before touching the patient: check the home for hazards, gloves, mask, and eye protection on — delivery involves blood and body fluids. Keep the mother still and do not let her walk or stand. Call for help and medical direction early, because a field delivery needs guidance and an early hospital warning.</p><p><strong>The patient, as you find her:</strong> A 28-year-old woman, 39 weeks pregnant, second baby. (1) Contractions are 90 seconds apart. (2) She has a strong urge to push. (3) The baby's head is visible. (4) Her waters broke 20 minutes ago. (5) She has had prenatal care and has no bleeding. <strong>The correct order of work:</strong> Step 1 — Judge that delivery is imminent. Step 2 — Prepare cleanly: gloves, clean towels and blankets, warm area, cord clamps. Step 3 — Support the head gently, do not pull. Step 4 — Dry the baby vigorously, wrap warm, check breathing. Step 5 — Watch the mother for heavy bleeding, save the placenta, transport mother and baby together. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Delivery involves blood and body fluids. What do you put on first? 1) Nothing — hurry 2) Gloves, mask, and eye protection, with clean hands 3) A helmet 4) A second pair of shoes",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ob_safety",
            "expected": 2,
            "hint": "Step 0 governs: gloves, mask, and eye protection before patient contact — delivery involves blood and body fluids."
          }
        ]
      },
      {
        "label": "DECISION — Contractions 90 seconds apart, a strong urge to push, and the head visible. What does this mean? 1) Early labour — transport at once 2) Delivery is imminent — prepare for delivery where you are, per protocol, and call medical direction 3) The baby is in trouble 4) Nothing — wait an hour",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ob_imminent",
            "expected": 2,
            "hint": "Contractions under 2 minutes apart, a strong urge to push, and a visible head mean delivery is imminent — prepare where you are."
          }
        ]
      },
      {
        "label": "ORDER — 'Prepare cleanly: gloves, clean towels and blankets, warm area, cord clamps.' Which step of the order of work is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ob_ord_prep",
            "expected": 2,
            "hint": "Order: 1 judge imminent, 2 prepare cleanly, 3 support the head gently, 4 dry and warm the baby, 5 watch the mother and transport."
          }
        ]
      },
      {
        "label": "DECISION — The baby's head appears. What do you do? 1) Pull on the head to hurry the birth 2) Support the head gently with your hands and do not pull 3) Push the head back in 4) Cut the cord at once",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ob_head",
            "expected": 2,
            "hint": "Support the head gently and do not pull — pulling can injure the baby or the mother."
          }
        ]
      },
      {
        "label": "DECISION — The baby is born and is not breathing. What do you do first? 1) Give the baby food 2) Dry the baby vigorously with a clean towel to stimulate breathing 3) Leave the baby alone 4) Put the baby in cold water",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ob_baby",
            "expected": 2,
            "hint": "Drying vigorously stimulates breathing. If breathing still does not start, assist ventilations per protocol and call for advanced help."
          }
        ]
      },
      {
        "label": "COMPUTED — The baby's APGAR is scored out of 10. The baby scores 2 for Appearance, 2 for Pulse, 1 for Grimace, 2 for Activity, and 1 for Respiration. What is the total APGAR? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ob_apgar",
            "expected": 8,
            "hint": "2 + 2 + 1 + 2 + 1 = 8 out of 10."
          }
        ]
      },
      {
        "label": "DECISION — How do you keep the newborn warm? 1) Leave the baby uncovered 2) Dry vigorously, wrap in a warm dry blanket, and cover the head 3) Put the baby in cold water 4) Fan the baby",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ob_warm",
            "expected": 2,
            "hint": "Dry, wrap warm, and cover the head — a newborn loses heat fast, especially through the head."
          }
        ]
      },
      {
        "label": "DECISION — After delivery, the mother is bleeding heavily. What do you do? 1) Give her food 2) Keep her flat and warm, massage the womb gently only if protocol directs, and transport rapidly 3) Pull on the cord to deliver the placenta fast 4) Wait for the bleeding to stop on its own",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ob_bleed",
            "expected": 2,
            "hint": "Heavy bleeding after delivery is a life-threatening emergency — keep flat and warm, and transport rapidly. Never pull on the cord."
          }
        ]
      },
      {
        "label": "DECISION — What do you do with the placenta? 1) Throw it away 2) Save it in a bag to show the hospital 3) Leave it at the home 4) Bury it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ob_placenta",
            "expected": 2,
            "hint": "Save the placenta in a bag for the hospital to examine."
          }
        ]
      },
      {
        "label": "DECISION — What is the transport plan? 1) Transport the baby only 2) Transport mother and baby together, with an early warning 3) Leave the mother at home 4) Wait an hour and see",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ob_transport",
            "expected": 2,
            "hint": "Transport mother and baby together, with an early warning — both need hospital assessment."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "mci-triage-start-case",
    "title": "Mass-Casualty Triage & Incident Command",
    "introHtml": "<p><strong>Call #4302 — Multi-car crash, five patients.</strong> Three cars collided at speed. You are the first crew on scene with your partner. There are five patients and only your crew so far. Your task: triage them with START, report to dispatch, and organise the scene. Read the case in the task, then answer each decision row.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Scene safety before touching any patient: check for traffic, fire, fuel, and hazards; gloves and eye protection on; stage safely and call for fire, police, and more ambulances. Do not start treating the first patient you see — in a mass-casualty incident, triage comes first.</p><p><strong>The five patients, as you find them:</strong> (1) A man who can walk, with a cut on his arm. (2) A woman breathing 36 times a minute, with a broken leg and a radial pulse present. (3) A man who is not breathing; you open his airway and he starts breathing. (4) A woman who can follow your command to squeeze your hand, breathing 20 times a minute, with a broken arm. (5) A man who is not breathing; you open his airway and he does not start breathing. <strong>The correct order of work:</strong> Step 1 — Report to dispatch: five patients, multi-car crash, more resources needed. Step 2 — Triage all five with START (RPM). Step 3 — Treat and transport in priority order, starting with red. Step 4 — Repeat triage as patients change and resources arrive. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — You are first on scene with five patients. What do you do first? 1) Treat the first patient you see 2) Report to dispatch, call for more resources, and start triage 3) Leave the scene 4) Load one patient and leave the rest",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mci_safety",
            "expected": 2,
            "hint": "Step 0 governs: in an MCI, report and triage come first — treating one patient while others wait uncounted wastes the system."
          }
        ]
      },
      {
        "label": "DECISION — The man who can walk, with a cut on his arm. What START category? 1) Red 2) Yellow 3) Green 4) Black",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mci_green",
            "expected": 3,
            "hint": "A patient who can walk with minor injuries is green (minor) — treated last."
          }
        ]
      },
      {
        "label": "DECISION — The woman breathing 36 times a minute, broken leg, radial pulse present. What START category? 1) Red 2) Yellow 3) Green 4) Black",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mci_red_resp",
            "expected": 1,
            "hint": "Breathing faster than 30 per minute is red (immediate) in the RPM check."
          }
        ]
      },
      {
        "label": "DECISION — The man who was not breathing, but starts breathing after you open his airway. What START category? 1) Red 2) Yellow 3) Green 4) Black",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mci_red_airway",
            "expected": 1,
            "hint": "Not breathing, then breathing after the airway is opened, is red (immediate) — he needs life-saving care now and can survive."
          }
        ]
      },
      {
        "label": "DECISION — The woman who follows your command, breathing 20 times a minute, broken arm. What START category? 1) Red 2) Yellow 3) Green 4) Black",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mci_yellow",
            "expected": 2,
            "hint": "Breathing 20 per minute, pulse present, follows commands, seriously injured but can wait — yellow (delayed)."
          }
        ]
      },
      {
        "label": "DECISION — The man who is not breathing and does not start breathing after you open his airway. What START category? 1) Red 2) Yellow 3) Green 4) Black",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mci_black",
            "expected": 4,
            "hint": "Not breathing after the airway is opened is black (deceased/expectant) in START triage."
          }
        ]
      },
      {
        "label": "COMPUTED — Of the five patients, how many are red (immediate)? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mci_red_count",
            "expected": 2,
            "hint": "Two are red: the woman breathing 36 per minute, and the man who started breathing after the airway was opened."
          }
        ]
      },
      {
        "label": "ORDER — 'Treat and transport in priority order, starting with red.' Which step of the order of work is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mci_ord_treat",
            "expected": 3,
            "hint": "Order: 1 report to dispatch, 2 triage all five, 3 treat and transport in priority order, 4 repeat triage."
          }
        ]
      },
      {
        "label": "DECISION — More ambulances arrive. What do you do? 1) Keep triaging alone 2) Hand over the triage findings to the triage officer and take the assignment you are given 3) Leave the scene 4) Treat only the green patients",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mci_handover",
            "expected": 2,
            "hint": "Hand over triage findings and take your assignment — an MCI is a team operation under incident command."
          }
        ]
      },
      {
        "label": "DECISION — Who is in charge of the whole incident? 1) The first EMT on scene 2) The incident commander 3) The patient 4) The driver",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mci_ic",
            "expected": 2,
            "hint": "The incident commander is in charge of the whole incident; the EMT reports to their supervisor up the chain of command."
          }
        ]
      }
    ],
    "passing": 70
  }
];
