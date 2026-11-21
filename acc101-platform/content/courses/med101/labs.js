// med101 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "vital-signs-check",
    "title": "Vital Signs Check: What Is Normal, What Is Not",
    "introHtml": "<p><strong>Clinic scenario — morning vital signs round.</strong> You are helping in a clinic. Four adult patients are resting in chairs. Your task: look at each set of vital signs, decide whether each number is inside the normal adult range, and make the right call — recheck, report, or carry on. Read the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=gUWJ-6nL5-8\" target=\"_blank\" rel=\"noopener\">Vital Signs Nursing: Respiratory Rate, Pulse, Blood Pressure, Temperature, Pain, Oxygen</a> — RegisteredNurseRN's walkthrough of all five vital signs and their normal ranges; watch it before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before touching any patient or any equipment: clean your hands, check that the patient is comfortable and safe, and know who to report to. Never guess a number — measure it, write down what you actually measured, and report anything outside the normal range promptly. In a real emergency (a patient who cannot breathe, is not responding, or is bleeding heavily), call for help and call 911 — do not stop to take vital signs.</p><p><strong>Normal adult ranges at rest (learn these):</strong> heart rate 60–100 beats per minute; breathing rate 12–20 breaths per minute; blood pressure less than 120/80 mmHg; temperature about 98.6°F (37°C); oxygen saturation (SpO2) 95–100%; fasting blood glucose 70–99 mg/dL.</p><p><strong>The four patients:</strong> (1) Mrs. A, resting: HR 72, RR 16, BP 118/76, temp 98.4°F, SpO2 98%. (2) Mr. B, resting: HR 112, RR 24, BP 148/92, temp 101.2°F, SpO2 93%. (3) Ms. C, resting: HR 58, RR 14, BP 110/70, temp 98.6°F, SpO2 99%. (4) Mr. D, resting: HR 88, RR 18, BP 122/78, temp 98.8°F, SpO2 96%. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you take any vital signs, what do you do first? 1) Start measuring right away to save time 2) Clean your hands, check the patient is safe and comfortable, and know who to report to 3) Write down normal numbers from memory 4) Measure only the patients who look sick",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_safety",
            "expected": 2,
            "hint": "Step 0 governs: clean hands, patient safe, and know who to report to come before any measurement. Starting right away (1) skips hand hygiene, writing numbers from memory (3) is falsifying a record, and measuring only sick-looking patients (4) misses problems."
          }
        ]
      },
      {
        "label": "DECISION — Mrs. A: HR 72, RR 16, BP 118/76, temp 98.4°F, SpO2 98%. What is the right call? 1) All five numbers are inside the normal adult ranges — record them and carry on 2) Report her urgently — something is wrong 3) Retake everything three times 4) Give her oxygen",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_a",
            "expected": 1,
            "hint": "HR 72 is inside 60–100, RR 16 inside 12–20, BP 118/76 under 120/80, temp 98.4°F near 98.6°F, SpO2 98% inside 95–100%. All normal — record and carry on."
          }
        ]
      },
      {
        "label": "DECISION — Mr. B: HR 112, RR 24, BP 148/92, temp 101.2°F, SpO2 93%. What is the right call? 1) All normal — carry on 2) Recheck your technique, retake the readings, and report promptly to the nurse — several numbers are outside the normal ranges 3) Write down normal numbers so he is not worried 4) Wait until tomorrow",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_b",
            "expected": 2,
            "hint": "HR 112 is above 100, RR 24 above 20, BP 148/92 above 120/80, temp 101.2°F above normal, SpO2 93% below 95%. Recheck technique, retake, and report promptly — never write down numbers you did not measure (3) or wait (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — Mr. B's heart rate is 112 bpm. The top of the normal adult resting range is 100 bpm. By how many beats per minute is he above the top of the range? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_b_hr",
            "expected": 12,
            "hint": "112 − 100 = 12 beats per minute above the top of the normal range."
          }
        ]
      },
      {
        "label": "COMPUTED — Mr. B's breathing rate is 24 breaths per minute. The top of the normal adult resting range is 20. By how many breaths per minute is he above the top of the range? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_b_rr",
            "expected": 4,
            "hint": "24 − 20 = 4 breaths per minute above the top of the normal range."
          }
        ]
      },
      {
        "label": "DECISION — Ms. C: HR 58, RR 14, BP 110/70, temp 98.6°F, SpO2 99%. Her heart rate is just below 60. What is the right call? 1) Ignore it — 58 is close enough to normal 2) Recheck: count the pulse for a full minute, check she is truly at rest, and report it — a rate below the normal range is a signal to check, not to ignore 3) Tell her to run up the stairs to raise it 4) Record 65 instead",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_c",
            "expected": 2,
            "hint": "58 is below the normal 60–100 range. Recheck with a full-minute count and report it. Ignoring it (1) misses a signal, exercise (3) is not your call, and recording 65 (4) is falsifying a record."
          }
        ]
      },
      {
        "label": "COMPUTED — Ms. C's heart rate is 58 bpm. The bottom of the normal adult resting range is 60 bpm. By how many beats per minute is she below the bottom of the range? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_c_hr",
            "expected": 2,
            "hint": "60 − 58 = 2 beats per minute below the bottom of the normal range."
          }
        ]
      },
      {
        "label": "DECISION — Mr. D: HR 88, RR 18, BP 122/78, temp 98.8°F, SpO2 96%. What is the right call? 1) Record the readings and carry on — all numbers are inside or essentially at the normal ranges 2) Call 911 immediately 3) Report him urgently 4) Retake everything four times",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_d",
            "expected": 1,
            "hint": "HR 88 inside 60–100, RR 18 inside 12–20, BP 122/78 just above the 120 systolic line but the diastolic is normal and the overall picture is near-normal, temp 98.8°F near normal, SpO2 96% inside 95–100%. Record and carry on; note the systolic 122 for the trend."
          }
        ]
      },
      {
        "label": "COMPUTED — You count a patient's pulse for 30 seconds and count 38 beats. What is the heart rate in beats per minute? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_calc",
            "expected": 76,
            "hint": "A 30-second count is doubled: 38 × 2 = 76 beats per minute. (Count a full minute when the pulse is irregular.)"
          }
        ]
      },
      {
        "label": "DECISION — You count a patient's breathing while telling them you are counting it. What is wrong? 1) Nothing — telling them is polite 2) People change their breathing when they know they are being watched, so the count is unreliable — count quietly while appearing to take the pulse 3) Breathing should never be counted 4) You should count it twice as fast",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_rr",
            "expected": 2,
            "hint": "People change their breathing when they know it is being counted. Count quietly, for example while appearing to take the pulse, for a full minute."
          }
        ]
      },
      {
        "label": "DECISION — A patient's oxygen saturation reads 89% on a cold finger with dark nail polish. What do you do first? 1) Record 89% and report it as a crisis 2) Warm the hand, remove the polish if you can, recheck the reading, and then report what you actually find 3) Record 98% instead 4) Ignore the reading",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_spo2",
            "expected": 2,
            "hint": "A cold finger and nail polish can give a falsely low reading. Fix the technique first — warm finger, no polish — then recheck and report the real reading. Recording a guessed number (3) or ignoring it (4) are both wrong."
          }
        ]
      },
      {
        "label": "COMPUTED — A patient's temperature is 98.6°F. What is that in Celsius? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_temp",
            "expected": 37,
            "hint": "98.6°F is about 37°C — the normal body temperature you learned in this module."
          }
        ]
      },
      {
        "label": "DECISION — A patient's heart rate was 80 an hour ago, 96 half an hour ago, and 112 now. What matters most? 1) Each single reading on its own 2) The trend — the rate is climbing steadily, which is more worrying than any one reading, so report it promptly 3) The first reading, 80 4) Nothing, because 112 is only a little above normal",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_trend",
            "expected": 2,
            "hint": "Trends matter more than single readings: 80 → 96 → 112 is a steady climb. Report it promptly."
          }
        ]
      },
      {
        "label": "DECISION — The round is done and all readings are recorded. What is the right way to close it? 1) Say nothing 2) Report the abnormal readings to the nurse, hand over the trend notes, and make sure the record is complete and timed 3) Tell only the next aide in private 4) Wait for someone to ask",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "vs_close",
            "expected": 2,
            "hint": "Close with a report of the abnormal readings and the trends, and a complete, timed record (2). Silence (1) and waiting (4) leave the team uninformed."
          }
        ]
      }
    ],
    "passing": 70
  },
  {
    "id": "infection-control-round",
    "title": "Infection Control Round: Break the Chain",
    "introHtml": "<p><strong>Clinic scenario — infection control round.</strong> You are helping on a busy clinic morning. Your task: spot the infection-control mistakes, break the chain of infection at the right link, and make the right calls — in the right order. Read the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=vLq6B3Qjy98\" target=\"_blank\" rel=\"noopener\">Standard & Isolation Precautions Nursing | Infection Control Contact, Droplet, Airborne PPE NCLEX</a> — RegisteredNurseRN's walkthrough of Standard Precautions and PPE; watch it before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any patient contact: clean your hands, put on the right PPE for the task, and know where the sharps container, the hand hygiene station, and the spill kit are. Never touch blood or body fluids with bare hands. Never enter an isolation room without checking the sign on the door and putting on the precautions it lists. If you are exposed to blood or body fluids, wash the area right away and report it immediately.</p><p><strong>The chain of infection (six links):</strong> 1 agent, 2 reservoir, 3 portal of exit, 4 mode of transmission, 5 portal of entry, 6 susceptible host. <strong>The correct order of the fixes (for the order questions):</strong> Step 1 — Clean your hands before touching the patient. Step 2 — Put on gloves before touching blood or body fluids. Step 3 — Put on a mask and eye protection when splashes are likely. Step 4 — Dispose of the sharp straight into the sharps container. Step 5 — Clean and disinfect the surface and equipment. Step 6 — Report the exposure or the mistake so it can be followed up. For each row, enter the option number, the step number, or the computed value asked for.</p><p><strong>What you see on the round:</strong> (1) A coworker moves from one patient to the next without cleaning hands. (2) A used needle is left on a tray. (3) A patient is coughing without covering their mouth. (4) A sharps container is filled above the fill line. (5) A coworker is about to recap a needle by hand. (6) A surface with blood on it has not been cleaned.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you touch your first patient, what do you do first? 1) Start work right away — hands look clean 2) Clean your hands, check the PPE you need for the task, and check the isolation signs on the doors 3) Put gloves on and leave them on all morning 4) Wait for someone to tell you what to do",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_safety",
            "expected": 2,
            "hint": "Step 0 governs: clean hands, right PPE, and check isolation signs before patient contact. Hands that 'look clean' (1) still carry germs, and gloves worn all morning (3) spread germs from patient to patient."
          }
        ]
      },
      {
        "label": "ORDER — 'Clean your hands before touching the patient.' Which step of the fix order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_ord_hands",
            "expected": 1,
            "hint": "Order: 1 clean hands, 2 gloves, 3 mask and eye protection, 4 sharps disposal, 5 clean surfaces, 6 report. Hand hygiene is step 1."
          }
        ]
      },
      {
        "label": "ORDER — 'Put on gloves before touching blood or body fluids.' Which step of the fix order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_ord_gloves",
            "expected": 2,
            "hint": "Order: 1 clean hands, 2 gloves, 3 mask and eye protection, 4 sharps disposal, 5 clean surfaces, 6 report. Gloves are step 2."
          }
        ]
      },
      {
        "label": "ORDER — 'Dispose of the sharp straight into the sharps container.' Which step of the fix order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_ord_sharps",
            "expected": 4,
            "hint": "Order: 1 clean hands, 2 gloves, 3 mask and eye protection, 4 sharps disposal, 5 clean surfaces, 6 report. Sharps disposal is step 4."
          }
        ]
      },
      {
        "label": "ORDER — 'Clean and disinfect the surface and equipment.' Which step of the fix order is this?",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_ord_clean",
            "expected": 5,
            "hint": "Order: 1 clean hands, 2 gloves, 3 mask and eye protection, 4 sharps disposal, 5 clean surfaces, 6 report. Cleaning surfaces is step 5."
          }
        ]
      },
      {
        "label": "DECISION — A coworker moves from one patient to the next without cleaning hands. What do you do? 1) Say nothing — it is not your patient 2) Remind them politely to clean their hands, because hand hygiene breaks the transmission link for every patient 3) Clean your own hands extra hard to make up for it 4) Report them to the patient",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_hands",
            "expected": 2,
            "hint": "Hand hygiene breaks transmission. A polite reminder (2) protects the next patient. Silence (1) leaves the patient at risk, and your own hands (3) cannot protect their patient."
          }
        ]
      },
      {
        "label": "DECISION — A coworker is about to recap a needle by hand. What do you do? 1) Let them — they are experienced 2) Stop them: never recap a needle by hand; drop it straight into the sharps container 3) Offer to recap it for them 4) Wait and see if they get hurt",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_recap",
            "expected": 2,
            "hint": "Never recap a needle by hand — it is one of the most common causes of needlestick injuries. Stop the action (2); experience (1) does not make it safe."
          }
        ]
      },
      {
        "label": "DECISION — The sharps container is filled above the fill line. What do you do? 1) Push the waste down with your hand to make room 2) Get a new container and replace it — never push waste down by hand and never overfill it 3) Leave it for the next shift 4) Put sharps on the tray instead",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_container",
            "expected": 2,
            "hint": "A container filled above the line must be replaced (2). Pushing waste down by hand (1) risks a needlestick, and leaving it (3) leaves the hazard for the next person."
          }
        ]
      },
      {
        "label": "DECISION — A patient is coughing without covering their mouth. What do you do? 1) Ignore it 2) Offer a tissue and a mask, and explain covering coughs — respiratory hygiene breaks the transmission link 3) Move to another room and leave them 4) Tell them to stop coughing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_cough",
            "expected": 2,
            "hint": "Respiratory hygiene — covering coughs — breaks transmission (2). Ignoring it (1) or leaving (3) leaves everyone exposed."
          }
        ]
      },
      {
        "label": "COMPUTED — Handwashing with soap and water should last at least how many seconds? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_handwash",
            "expected": 20,
            "hint": "At least 20 seconds: wet, soap, rub all surfaces, rinse, dry. Shorter washes leave germs behind."
          }
        ]
      },
      {
        "label": "DECISION — A surface has blood on it and has not been cleaned. What do you do? 1) Wipe it with a dry cloth and carry on 2) Put on gloves, clean the surface, then disinfect it, and clean your hands afterwards 3) Leave it — cleaning is someone else's job 4) Cover it with a towel",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_surface",
            "expected": 2,
            "hint": "Blood on a surface needs gloves, cleaning, then disinfection, then hand hygiene (2). A dry wipe (1) spreads germs, and covering it (4) hides the hazard."
          }
        ]
      },
      {
        "label": "DECISION — A door sign says 'Airborne Precautions' and you have not been fitted for a respirator. What do you do? 1) Go in with a regular surgical mask — it is close enough 2) Do not enter — check the sign, get the right respirator and fitting, or ask a fitted coworker to go in 3) Hold your breath and go in quickly 4) Go in without a mask",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_airborne",
            "expected": 2,
            "hint": "Airborne precautions need a fitted respirator; a surgical mask does not filter tiny airborne particles. Do not enter without the right protection (2)."
          }
        ]
      },
      {
        "label": "DECISION — You are stuck by a used needle. What do you do first? 1) Keep working and tell someone later 2) Wash the area right away with soap and water and report it immediately so follow-up can start 3) Suck the wound 4) Put a bandage on and say nothing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_stick",
            "expected": 2,
            "hint": "Wash right away and report immediately (2) — follow-up for bloodborne exposure is time-sensitive. Silence (4) or waiting (1) can close the window for care."
          }
        ]
      },
      {
        "label": "COMPUTED — The chain of infection has 6 links. You have broken 4 of them on this round. How many links remain unbroken? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_chain",
            "expected": 2,
            "hint": "6 − 4 = 2 links remain. Breaking any one link stops the spread, but the goal is to break as many as you can."
          }
        ]
      },
      {
        "label": "DECISION — The round is done and all the mistakes are fixed. What is the right way to close it? 1) Say nothing 2) Record what was found, what was fixed, and report any exposure so it can be followed up 3) Tell only the next shift in private 4) Wait for an inspector to find the next ones",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ic_close",
            "expected": 2,
            "hint": "Close with a record and a report (2) — including any exposure, so follow-up can happen. Silence (1) and waiting (4) leave the next patient at risk."
          }
        ]
      }
    ],
    "passing": 70
  }
];
