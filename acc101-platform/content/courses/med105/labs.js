// med105 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "cpr-aed-unresponsive-adult",
    "title": "CPR & AED: The Unresponsive Adult",
    "introHtml": "<p><strong>Scenario — A man collapses in the office break room.</strong> A 58-year-old coworker collapses to the floor, does not respond to shouting or tapping on the shoulder, and is gasping once every few seconds. An AED is mounted on the wall 20 feet away. A second coworker is with you. Your task: run the response in the right order, give the right compressions, and use the AED correctly. Read the scenario in the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=lFKuAGyD-o8\" target=\"_blank\" rel=\"noopener\">Learn Hands-Only CPR</a> — the American Heart Association's two-step video: call 911 and push hard and fast in the center of the chest.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first: call for help first.</strong> Before touching the patient: check the scene is safe, and send your coworker to call 911 and bring the AED — do not delay the call. Put on gloves if they are available. You are alone with an unresponsive adult and the AED is nearby, so the call and the AED come before compressions. Never start care in a scene that is not safe, and never delay calling 911.</p><p><strong>The correct response order:</strong> Step 1 — Call 911 and get the AED. Step 2 — Place the person on their back on a firm, flat surface. Step 3 — Start chest compressions: heel of the hand on the center of the chest, lower half of the breastbone. Step 4 — When the AED arrives, turn it on, bare and dry the chest, and attach the pads. Step 5 — Let the AED analyze with no one touching the person. Step 6 — If a shock is advised, make sure everyone is clear, then press the shock button. Step 7 — Start CPR again immediately after the shock, beginning with compressions. Step 8 — Switch compressors about every 2 minutes. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — You find the man unresponsive and gasping, with an AED 20 feet away and a coworker beside you. What do you do first? 1) Start compressions immediately and ignore the AED 2) Send your coworker to call 911 and bring the AED, then start care 3) Give rescue breaths only 4) Wait to see if he wakes up",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_safety",
            "expected": 2,
            "hint": "Step 0 governs: call for help first. With a coworker beside you, they call 911 and fetch the AED while you start care — the call and the AED must not be delayed. Starting compressions without the call (1) loses the ambulance and the defibrillator. Breaths alone (3) do not move blood. Waiting (4) wastes the minutes that matter."
          }
        ]
      },
      {
        "label": "ORDER — 'Call 911 and get the AED.' Which step of the response order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_ord_call",
            "expected": 1,
            "hint": "Order: 1 call 911 and get the AED, 2 place the person on their back, 3 start compressions, 4 attach the AED pads, 5 let it analyze, 6 shock if advised, 7 CPR again, 8 switch compressors. The call is step 1."
          }
        ]
      },
      {
        "label": "ORDER — 'Start chest compressions on the center of the chest.' Which step of the response order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_ord_comp",
            "expected": 3,
            "hint": "Order: 1 call, 2 position on back, 3 compressions, 4 pads, 5 analyze, 6 shock, 7 CPR again, 8 switch. Compressions are step 3."
          }
        ]
      },
      {
        "label": "ORDER — 'Turn the AED on, bare and dry the chest, and attach the pads.' Which step of the response order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_ord_pads",
            "expected": 4,
            "hint": "Order: 1 call, 2 position, 3 compressions, 4 AED pads, 5 analyze, 6 shock, 7 CPR again, 8 switch. Attaching the pads is step 4."
          }
        ]
      },
      {
        "label": "ORDER — 'Start CPR again immediately after the shock, beginning with compressions.' Which step of the response order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_ord_after",
            "expected": 7,
            "hint": "Order: 1 call, 2 position, 3 compressions, 4 pads, 5 analyze, 6 shock, 7 CPR again, 8 switch. Restarting CPR after a shock is step 7."
          }
        ]
      },
      {
        "label": "DECISION — The man is gasping once every few seconds. What does that mean? 1) He is breathing normally — do not start CPR 2) He is not breathing normally — agonal gasps — start CPR 3) He is recovering — wait and watch 4) He is choking — give abdominal thrusts",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_gasp",
            "expected": 2,
            "hint": "Occasional gasps after a collapse are agonal gasps, not normal breathing. Unresponsive plus no normal breathing means cardiac arrest — start CPR. Normal breathing (1) is regular and effective. Waiting (3) wastes the minutes that matter. Choking (4) is a different problem with different signs."
          }
        ]
      },
      {
        "label": "DECISION — The correct compression rate for an adult is: 1) 60–80 per minute 2) 80–100 per minute 3) 100–120 per minute 4) 120–140 per minute",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_rate",
            "expected": 3,
            "hint": "Current AHA guidance: 100–120 compressions per minute. Slower rates (1, 2) do not move blood effectively. Faster than 120 (4) reduces depth and the time the heart has to refill."
          }
        ]
      },
      {
        "label": "DECISION — The correct compression depth for an adult is: 1) 1–1.5 inches 2) 2–2.4 inches 3) 3–3.5 inches 4) As deep as possible",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_depth",
            "expected": 2,
            "hint": "Depth is 2–2.4 inches (5–6 cm). Shallower (1) does not move blood. Deeper (3) increases the risk of injury. There is a maximum — more than 2.4 inches is not better (4)."
          }
        ]
      },
      {
        "label": "DECISION — The trained CPR cycle for an adult is: 1) 15 compressions to 1 breath 2) 30 compressions to 2 breaths 3) 5 compressions to 1 breath 4) Compressions only, never breaths",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_ratio",
            "expected": 2,
            "hint": "Trained adult CPR is 30 compressions to 2 breaths, repeated. 15:1 (1) and 5:1 (3) are not adult ratios. Compressions only (4) is hands-only CPR for bystanders — trained rescuers add breaths."
          }
        ]
      },
      {
        "label": "COMPUTED — You do compressions at 110 per minute for 2 minutes. How many compressions is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_count",
            "expected": 220,
            "hint": "110 compressions per minute × 2 minutes = 220 compressions. This is why rescuers switch about every 2 minutes — 220 compressions is tiring, and quality drops with fatigue."
          }
        ]
      },
      {
        "label": "DECISION — The AED says 'no shock advised.' What do you do? 1) Remove the pads and stop 2) Continue CPR immediately 3) Wait for the AED to change its mind 4) Give rescue breaths only",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_noshock",
            "expected": 2,
            "hint": "'No shock advised' means the rhythm cannot be fixed by a shock — CPR is still the treatment. Removing the pads (1) or waiting (3) stops the blood flow the brain needs. Breaths alone (4) do not move blood."
          }
        ]
      },
      {
        "label": "DECISION — After a shock, you should: 1) Wait to see if the person wakes up 2) Start CPR immediately, beginning with compressions 3) Check for a pulse for a full minute 4) Remove the AED pads",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_aftershock",
            "expected": 2,
            "hint": "Restart compressions immediately after a shock. Waiting (1) wastes time without blood flow. Checking a pulse for a minute (3) delays compressions. Leave the pads on (4) in case another shock is needed."
          }
        ]
      },
      {
        "label": "DECISION — You and your coworker are both trained and doing CPR. How often should you switch who does compressions? 1) Every 30 seconds 2) About every 2 minutes 3) Every 10 minutes 4) Never — one person should do it all",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_switch",
            "expected": 2,
            "hint": "Switch about every 2 minutes — compressions are tiring and quality drops with fatigue. Every 30 seconds (1) causes too many interruptions. Every 10 minutes (3) is far too long. One person doing it all (4) will tire and compressions will get shallow."
          }
        ]
      },
      {
        "label": "DECISION — The man starts breathing normally and moving. What do you do? 1) Keep doing compressions anyway 2) Stop CPR, put him in the recovery position, and stay with him 3) Leave him alone to rest 4) Give him water",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "cpr_recovery",
            "expected": 2,
            "hint": "Signs of life mean CPR can stop — put him in the recovery position and stay with him, monitoring breathing. Continuing compressions (1) on a breathing person is wrong. Leaving him alone (3) is unsafe — breathing can stop again. Water (4) is not given to a person who has just been unresponsive."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "vital-signs-round",
    "title": "Vital Signs Round: Measure, Record, Report",
    "introHtml": "<p><strong>Scenario — A routine vital-signs round on the ward.</strong> You are asked to take a full set of vital signs on Mrs. Alvarez, a 64-year-old patient resting in bed, and to record them accurately. You have a watch, a thermometer, a stethoscope, a blood pressure cuff, and a pulse oximeter. Your task: take the measurements the right way, do the arithmetic, and decide what needs reporting. Read the scenario in the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=gUWJ-6nL5-8\" target=\"_blank\" rel=\"noopener\">Vital Signs Nursing</a> — RegisteredNurseRN demonstrates pulse, respirations, blood pressure, temperature, pain, and oxygen saturation on a patient.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first: infection control before you touch a patient.</strong> Before any measurement: wash your hands or use hand sanitizer, put on gloves if you will touch blood or body fluids, and clean the thermometer probe or use a fresh probe cover. Check that the patient is resting comfortably and that you have the right equipment. Never take vital signs with dirty hands or a shared, uncleaned thermometer — infection control comes before the first measurement.</p><p><strong>The measurements you take:</strong> (1) Pulse at the radial artery: you count 19 beats in 15 seconds. (2) Respirations: keeping your fingers on the wrist, you count 8 breaths in 30 seconds. (3) Temperature: 101.2°F taken orally. (4) Blood pressure: 138/88 mmHg, right arm, sitting. (5) Oxygen saturation: 96% on room air. (6) Pain: the patient says 4 out of 10, dull, in the lower back. For each row, enter the option number or the computed value asked for. Normal adult ranges: HR 60–100, RR 12–20, BP below 120/80, SpO2 95–100%, temp about 98.6°F, fasting glucose 70–99 mg/dL.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before touching Mrs. Alvarez to take her vital signs, what must you do first? 1) Start counting the pulse right away 2) Wash your hands and use a fresh thermometer probe cover 3) Take the blood pressure first because it takes longest 4) Ask her to walk around first",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_safety",
            "expected": 2,
            "hint": "Step 0 governs: infection control comes before the first measurement — clean hands and a fresh probe cover. Starting with the pulse (1) skips hand hygiene. Blood pressure first (3) is a sequencing choice, not a safety step. Walking around (4) would change the readings and is not a safety step."
          }
        ]
      },
      {
        "label": "COMPUTED — You count 19 beats in 15 seconds at the radial pulse. What is the heart rate in beats per minute? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_hr",
            "expected": 76,
            "hint": "19 beats in 15 seconds × 4 = 76 beats per minute. That is within the normal adult range of 60–100."
          }
        ]
      },
      {
        "label": "DECISION — A heart rate of 76 beats per minute is: 1) Below normal 2) Normal 3) Above normal — tachycardia 4) Too slow to count",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_hr_normal",
            "expected": 2,
            "hint": "76 is within the normal adult range of 60–100 beats per minute. Below normal would be under 60, and tachycardia is above 100 at rest."
          }
        ]
      },
      {
        "label": "COMPUTED — You count 8 breaths in 30 seconds. What is the respiratory rate per minute? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_rr",
            "expected": 16,
            "hint": "8 breaths in 30 seconds × 2 = 16 breaths per minute. That is within the normal adult range of 12–20."
          }
        ]
      },
      {
        "label": "DECISION — The best way to count respirations is: 1) Tell the patient you are counting their breathing 2) Count quietly right after the pulse, with your fingers still on the wrist 3) Count while the patient is talking 4) Guess from the heart rate",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_rr_method",
            "expected": 2,
            "hint": "People change their breathing when they know it is being counted, so count quietly right after the pulse. Telling them (1) changes the result. Talking (3) changes the breathing pattern. Guessing (4) is not a measurement."
          }
        ]
      },
      {
        "label": "DECISION — A temperature of 101.2°F taken orally is: 1) Normal 2) Below normal 3) A fever — above 100.4°F 4) Dangerously low",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_temp",
            "expected": 3,
            "hint": "A temperature above 100.4°F (38°C) is generally considered a fever. 101.2°F is above that threshold. Normal is about 98.6°F."
          }
        ]
      },
      {
        "label": "DECISION — A blood pressure of 138/88 mmHg is: 1) Normal 2) Elevated 3) Stage 1 hypertension 4) Stage 2 hypertension",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_bp",
            "expected": 3,
            "hint": "Systolic 130–139 or diastolic 80–89 is stage 1 hypertension. Normal is below 120/80. Elevated is systolic 120–129 with diastolic below 80. Stage 2 is 140 or higher or 90 or higher."
          }
        ]
      },
      {
        "label": "DECISION — An SpO2 of 96% on room air is: 1) Normal 2) Low 3) Dangerously high 4) Meaningless without a blood pressure",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_spo2",
            "expected": 1,
            "hint": "Normal SpO2 is 95–100%, so 96% on room air is normal. Low would be below 95%. SpO2 cannot exceed 100%, and it is meaningful on its own."
          }
        ]
      },
      {
        "label": "DECISION — Which finding needs reporting to the clinician right away? 1) Heart rate 76 2) Respiratory rate 16 3) Temperature 101.2°F with a blood pressure of 138/88 4) SpO2 96% on room air",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_report",
            "expected": 3,
            "hint": "The fever (101.2°F) and the stage 1 blood pressure (138/88) are the abnormal findings and must be reported. The heart rate (1), respiratory rate (2), and SpO2 (4) are all within normal ranges."
          }
        ]
      },
      {
        "label": "DECISION — To feel the radial pulse, you should use: 1) Your thumb 2) The tips of your first two or three fingers 3) Your whole palm 4) A stethoscope on the wrist",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_thumb",
            "expected": 2,
            "hint": "Use your fingertips — your thumb has its own pulse and can mislead you. Your palm (3) is not sensitive enough. A stethoscope (4) is not used on the wrist for a radial pulse."
          }
        ]
      },
      {
        "label": "COMPUTED — Mrs. Alvarez's fasting blood glucose is 85 mg/dL. The normal fasting range is 70–99 mg/dL. How many mg/dL above the bottom of the normal range is her reading? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_glucose",
            "expected": 15,
            "hint": "85 − 70 = 15 mg/dL above the bottom of the normal range. Her reading of 85 is within the normal fasting range of 70–99 mg/dL."
          }
        ]
      },
      {
        "label": "DECISION — The best way to record the vital signs is: 1) 'Vitals normal' 2) Each number with its unit, method, and time 3) Only the abnormal numbers 4) From memory at the end of the day",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_record",
            "expected": 2,
            "hint": "'Vitals normal' is an opinion, not data. Record every number with its unit, method, and time. Recording only abnormal numbers (3) loses the trend. Recording from memory later (4) is unreliable — chart promptly."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "bleeding-shock-workshop-accident",
    "title": "Bleeding & Shock: The Workshop Accident",
    "introHtml": "<p><strong>Scenario — A cut hand in the workshop.</strong> A coworker has cut their forearm badly on a piece of sheet metal. Blood is flowing steadily and pooling on the floor. The person is pale, sweating, and says they feel dizzy. A first aid kit with gloves, dressings, and bandages is on the wall. Your task: control the bleeding, treat for shock, and get help — in the right order. Read the scenario in the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=NxO5LvgqZe0\" target=\"_blank\" rel=\"noopener\">How to Treat Severe Bleeding</a> — St John Ambulance shows direct pressure, dressings, and calling for help.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first: protect yourself and check the scene.</strong> Before touching the patient: check the scene is safe (no more sheet metal falling, no machinery running), put on gloves from the first aid kit before touching blood, and send someone to call 911. Never touch blood with bare hands if gloves are available, and never step into a scene with moving machinery or falling materials.</p><p><strong>The correct care order:</strong> Step 1 — Call 911 and put on gloves. Step 2 — Apply firm direct pressure with a sterile dressing. Step 3 — If blood soaks through, add more dressings on top; do not remove the first one. Step 4 — Secure the dressing with a bandage, firm but not so tight it cuts off circulation. Step 5 — Raise the injured arm above the heart if there is no fracture. Step 6 — Help the person lie down and treat for shock: loosen tight clothing, keep them warm, give nothing to eat or drink. Step 7 — Check the circulation beyond the bandage every 10 minutes. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Blood is pooling on the floor and machinery is nearby. What do you do first? 1) Grab the wound with bare hands 2) Check the scene is safe, put on gloves, and send someone to call 911 3) Start bandaging right away 4) Give the person water",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bl_safety",
            "expected": 2,
            "hint": "Step 0 governs: scene safety and gloves come before touching blood. Bare hands (1) risk infection. Bandaging without gloves or a call (3) skips both safety steps. Water (4) is not given to a person who may be in shock."
          }
        ]
      },
      {
        "label": "ORDER — 'Apply firm direct pressure with a sterile dressing.' Which step of the care order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bl_ord_pressure",
            "expected": 2,
            "hint": "Order: 1 call 911 and gloves, 2 direct pressure, 3 add dressings on top, 4 secure with a bandage, 5 raise the arm, 6 lie down and treat for shock, 7 check circulation. Direct pressure is step 2."
          }
        ]
      },
      {
        "label": "ORDER — 'Help the person lie down and treat for shock.' Which step of the care order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bl_ord_shock",
            "expected": 6,
            "hint": "Order: 1 call and gloves, 2 pressure, 3 add dressings, 4 bandage, 5 raise the arm, 6 lie down and treat for shock, 7 check circulation. Treating for shock is step 6."
          }
        ]
      },
      {
        "label": "DECISION — Blood soaks through the first dressing. What do you do? 1) Remove the first dressing and start again 2) Add more dressings on top and keep pressing 3) Stop pressing to let air in 4) Wash the wound",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bl_soak",
            "expected": 2,
            "hint": "Add dressings on top — removing the first one breaks the clot that is forming. Stopping pressure (3) lets bleeding resume. Washing (4) is for minor wounds, not severe bleeding."
          }
        ]
      },
      {
        "label": "DECISION — The person is pale, sweating, and dizzy. What does that suggest? 1) They are fine 2) They are developing shock 3) They are allergic to metal 4) They are dehydrated only",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bl_shock_signs",
            "expected": 2,
            "hint": "Pale, cold, clammy skin, sweating, and dizziness are classic signs of shock from blood loss. 'Fine' (1) ignores the signs. An allergy (3) would show different signs, such as swelling or a rash. Dehydration (4) alone does not explain this picture after heavy bleeding."
          }
        ]
      },
      {
        "label": "DECISION — To treat for shock, you should: 1) Raise the person's legs if there is no fracture, keep them warm, and give nothing to eat or drink 2) Give them a hot drink and food 3) Have them stand up and walk around 4) Pour cold water on them",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bl_shock_care",
            "expected": 1,
            "hint": "Lie the person down, raise the legs if there is no fracture, keep them warm, and give nothing by mouth. Food and drink (2) risk vomiting and choking. Walking (3) increases bleeding. Cold water (4) makes shock worse."
          }
        ]
      },
      {
        "label": "DECISION — How do you check whether the bandage is too tight? 1) Ask if it hurts 2) Press a nail beyond the bandage for 5 seconds; if color does not return within 2 seconds, it is too tight 3) Wait an hour 4) Remove the bandage",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bl_bandage",
            "expected": 2,
            "hint": "Capillary refill beyond the bandage shows whether blood is still flowing. Pain alone (1) is not a reliable test. Waiting an hour (3) is too long. Removing the bandage (4) restarts the bleeding."
          }
        ]
      },
      {
        "label": "COMPUTED — You check the circulation beyond the bandage every 10 minutes. Over 30 minutes, how many checks is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bl_checks",
            "expected": 3,
            "hint": "30 minutes ÷ 10 minutes per check = 3 checks. Check the circulation every 10 minutes so a bandage that is too tight is caught early."
          }
        ]
      },
      {
        "label": "DECISION — The bleeding is on the forearm and there is no fracture. Should you raise the arm? 1) No — keep it down 2) Yes — raise it above the level of the heart 3) Only if the person is unconscious 4) Only after the ambulance arrives",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bl_raise",
            "expected": 2,
            "hint": "Raising the injured limb above the heart slows the flow of blood to the wound. Keep it down (1) misses that benefit. Consciousness (3) is not the deciding factor. Waiting for the ambulance (4) wastes time."
          }
        ]
      },
      {
        "label": "DECISION — A piece of metal is stuck in the wound. What do you do? 1) Pull it out quickly 2) Leave it in, press on either side, and build dressings around it 3) Push it in deeper 4) Ignore it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bl_object",
            "expected": 2,
            "hint": "The object may be plugging the bleeding — leave it in, press on either side, and build dressings around it. Pulling it out (1) can release bleeding you cannot control. Pushing it deeper (3) causes more damage. Ignoring it (4) leaves it unstable."
          }
        ]
      },
      {
        "label": "DECISION — The person becomes unresponsive and stops breathing normally. What do you do? 1) Keep holding pressure and do nothing else 2) Call for help and start CPR if trained 3) Give them water 4) Put them in the recovery position",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bl_cpr",
            "expected": 2,
            "hint": "An unresponsive person who is not breathing normally needs CPR — call for help and start compressions. Holding pressure alone (1) does not help a person who is not breathing. Water (3) is never given to an unresponsive person. The recovery position (4) is for a person who is breathing, not one who is not."
          }
        ]
      },
      {
        "label": "DECISION — The ambulance crew arrives. What do you hand over? 1) Nothing — they can see for themselves 2) What happened, what you found, what you did, and when 3) Only the person's name 4) Your opinion about what is wrong",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bl_handover",
            "expected": 2,
            "hint": "Hand over the facts: what happened, what was found, what was done, and when. Nothing (1) wastes the information you gathered. Only a name (3) is not enough. An opinion (4) is not data — give the facts and let the crew decide."
          }
        ]
      }
    ],
    "passing": 70
  }
];
