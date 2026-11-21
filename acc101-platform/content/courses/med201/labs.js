// med201 — General Medical Capstone: original scenario labs. Practice exams use original questions in the real exams' style/format.
module.exports = [
  {
    "id": "bls-arrest-lab",
    "title": "Cardiac Arrest & BLS Scenario Lab",
    "introHtml": "<p><strong>Case — a collapse in the car park.</strong> A 62-year-old man collapses outside a shop. A bystander is shouting for help. You are the first responder on scene with a bag-valve mask, an AED, and oxygen. Work the arrest step by step: safety, compressions, breaths, defibrillation, and the handover — and check every number before you enter it.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you touch the patient: check the scene is safe (traffic, bystanders, hazards), put on gloves, and make sure the area is clear for the AED — nobody touching the patient when it analyses or shocks. A rescuer who becomes a victim helps no one, and a shock delivered while someone is touching the patient injures the rescuer. The first scored row is a safety decision — get it right before anything else moves. This lab teaches knowledge and decision-making only; real CPR and AED skills are learned and tested with a manikin and an instructor, and the AHA BLS Provider eCard requires a hands-on skills session.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. In a real arrest, the numbers are the treatment.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — You arrive at a collapse in a busy car park with cars moving nearby. Your call: 1) Run straight to the patient across moving traffic 2) Check the scene is safe, position for safety, put on gloves, and call for help before touching the patient 3) Start compressions from where you stand without approaching 4) Move the cars yourself first",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "safety_arrest", "expected": 2, "hint": "Scene safety and gloves come before patient contact, even in an arrest. A rescuer hit by a car helps no one." }]
      },
      {
        "label": "The patient is unresponsive, gasping occasionally, and has no pulse. Your first action is to: 1) Give 2 breaths first 2) Start chest compressions immediately and send someone for the AED 3) Check the blood pressure 4) Wait for the ambulance",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "bls_first", "expected": 2, "hint": "In cardiac arrest, compressions come first. Gasping is not effective breathing." }]
      },
      {
        "label": "COMPUTED — Chest compressions are given at 100 to 120 per minute. Enter the MINIMUM rate in compressions per minute.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "bls_rate_min", "expected": 100, "hint": "The AHA rate is 100 to 120 per minute, so the minimum is 100." }]
      },
      {
        "label": "COMPUTED — Adult compression depth is at least 2 inches and no more than 2.4 inches. Enter the MINIMUM depth in inches.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "bls_depth_min", "expected": 2, "hint": "Adult depth is at least 2 inches (5 cm) and no more than 2.4 inches (6 cm)." }]
      },
      {
        "label": "COMPUTED — Adult CPR uses 30 compressions to 2 breaths. Enter the number of compressions in each cycle.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "bls_ratio", "expected": 30, "hint": "The adult ratio is 30 compressions to 2 breaths." }]
      },
      {
        "label": "COMPUTED — With an advanced airway in place, breaths are given 1 every 6 seconds. Enter the breaths per minute.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "bls_adv_breaths", "expected": 10, "hint": "One breath every 6 seconds is 60 / 6 = 10 breaths per minute." }]
      },
      {
        "label": "COMPUTED — Compressors should be rotated about every 2 minutes. Enter the rotation interval in minutes.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "bls_rotate", "expected": 2, "hint": "Rotate the compressor about every 2 minutes, because fatigue makes compressions shallow." }]
      },
      {
        "label": "The AED says \"shock advised\". Your call: 1) Shock immediately while your partner is still doing compressions 2) Clear everyone, make sure nobody is touching the patient, then shock 3) Ignore the AED and keep doing compressions 4) Remove the pads and check the pulse for 30 seconds",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "bls_aed", "expected": 2, "hint": "Clear the patient before a shock — nobody touching them — then shock, and resume compressions immediately after." }]
      },
      {
        "label": "After the shock, the first thing to do is: 1) Check the pulse for 30 seconds 2) Resume chest compressions immediately 3) Turn the AED off 4) Remove the pads",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "bls_after_shock", "expected": 2, "hint": "Resume compressions immediately after a shock — do not check the pulse first." }]
      },
      {
        "label": "COMPUTED — Chest compression fraction should be at least 80%. In a 10-minute resuscitation, enter the minimum minutes spent doing compressions.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "bls_ccf", "expected": 8, "hint": "80% of 10 minutes is 8 minutes of compressions." }]
      },
      {
        "label": "The patient's pulse returns (ROSC). The oxygen saturation target is: 1) 100% at all times, as high as possible 2) 94 to 99% 3) 80 to 85% 4) Below 90%",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "bls_rosc_o2", "expected": 2, "hint": "After ROSC, oxygen is titrated to a saturation of 94 to 99% — not as high as possible." }]
      },
      {
        "label": "A 6-year-old child is in cardiac arrest and you have a partner. The compression-to-ventilation ratio is: 1) 30:2 2) 15:2 3) 5:1 4) 3:1",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "bls_child_ratio", "expected": 2, "hint": "Two-rescuer child CPR uses 15 compressions to 2 breaths; 30:2 is the one-rescuer ratio." }]
      }
    ]
  },
  {
    "id": "medical-emergency-lab",
    "title": "Medical Emergency Scenario Lab",
    "introHtml": "<p><strong>Case — three patients, one shift.</strong> First, a 68-year-old man with a drooping face and slurred speech. Then a woman with diabetes who is sweaty, shaky, and confused. Then a teenager stung by a bee who is wheezing with a swollen tongue. Work each case in order: recognise the problem, pick the treatment, and check the numbers.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you touch any patient: check the scene is safe, put on gloves, and protect the airway first — a patient who is vomiting, seizing, or not fully alert can breathe vomit into their lungs, and a patient in anaphylaxis can lose their airway in minutes. Never put anything in the mouth of a patient who cannot swallow, and never delay epinephrine for anaphylaxis to do paperwork. The first scored row is a safety decision — get it right before anything else moves. This lab teaches knowledge and decision-making only; it does not authorise anyone to give drugs or treat patients.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. In a real emergency, the numbers are the treatment.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — A patient is having a seizure on a concrete floor next to a glass table. Your call: 1) Hold the patient down firmly 2) Move furniture and sharp objects away, cushion the head, do not restrain, and put nothing in the mouth 3) Put a spoon in the mouth to stop tongue-biting 4) Leave the patient alone",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "safety_seizure", "expected": 2, "hint": "Protect from injury, do not restrain, and put nothing in the mouth. Time the seizure." }]
      },
      {
        "label": "The 68-year-old man has a drooping face, a weak right arm, and slurred speech. His wife says he was fine at breakfast, 40 minutes ago. The MOST important fact to record is: 1) What he ate 2) The time the symptoms started 3) His shoe size 4) His favourite television show",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "med_stroke_time", "expected": 2, "hint": "The time of onset decides whether time-limited hospital stroke treatments are possible." }]
      },
      {
        "label": "COMPUTED — The Cincinnati scale tests face, arm, and speech. The man fails all three. Enter the number of failed tests.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "med_cincy", "expected": 3, "hint": "Facial droop, arm drift, and abnormal speech — all three failed." }]
      },
      {
        "label": "The woman with diabetes has a blood sugar of 52 mg/dL, is awake, and can swallow. Your call: 1) Give insulin 2) Give oral glucose 3) Give nothing by mouth 4) Give aspirin",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "med_glucose", "expected": 2, "hint": "52 mg/dL is hypoglycaemia in a conscious patient who can swallow — oral glucose is the treatment." }]
      },
      {
        "label": "COMPUTED — Hypoglycaemia is usually below 70 mg/dL. The patient's reading is 52 mg/dL. Enter how many mg/dL BELOW the 70 threshold she is.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "med_glucose_diff", "expected": 18, "hint": "70 - 52 = 18 mg/dL below the threshold." }]
      },
      {
        "label": "A seizure has now lasted 6 minutes. This is: 1) A normal seizure 2) Status epilepticus — a life-threatening emergency 3) A faint 4) A sign the patient is improving",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "med_status", "expected": 2, "hint": "A seizure over 5 minutes is status epilepticus." }]
      },
      {
        "label": "The teenager stung by a bee has hives, a swollen tongue, and wheezing. Your call: 1) Give an antihistamine and wait 2) Give epinephrine early, under protocol 3) Give a glass of water 4) Wait to see if it gets worse",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "med_epi", "expected": 2, "hint": "This is anaphylaxis and epinephrine is the treatment, given early. Antihistamines do not stop anaphylaxis." }]
      },
      {
        "label": "COMPUTED — The adult epinephrine auto-injector dose is 0.3 mg. Enter the dose in mg, to one decimal place.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "med_epi_dose", "expected": 0.3, "hint": "The adult auto-injector delivers 0.3 mg into the outer thigh." }]
      },
      {
        "label": "A patient took opioid pain pills and is unconscious, breathing 4 times per minute, with pinpoint pupils. The FIRST priority is to: 1) Give food 2) Support breathing, including BVM ventilation if needed, and give naloxone under local protocol 3) Leave the patient alone 4) Ask the patient to walk around",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "med_opioid", "expected": 2, "hint": "Support breathing first, then naloxone under protocol. Naloxone wears off before the opioid does, so transport is still needed." }]
      },
      {
        "label": "COMPUTED — A meal has 30 g protein, 50 g carbohydrate, and 20 g fat. Enter the total kilocalories (protein 4, carbohydrate 4, fat 9 kcal per gram).",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "med_kcal", "expected": 500, "hint": "30 x 4 = 120, 50 x 4 = 200, 20 x 9 = 180; 120 + 200 + 180 = 500 kcal." }]
      },
      {
        "label": "A patient is confused, sweaty, and shaky. Blood glucose is 48 mg/dL. The reading tells you: 1) The patient has high blood sugar 2) The patient has low blood sugar, which explains the confusion 3) The patient needs insulin 4) The reading is normal",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "med_low_glucose", "expected": 2, "hint": "48 mg/dL is well below 70 mg/dL — hypoglycaemia, which causes confusion, sweating, and shakiness." }]
      },
      {
        "label": "In BE-FAST, the \"T\" stands for: 1) Temperature 2) Time — note when symptoms started and call 911 immediately 3) Thirst 4) Tingling",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "med_befast_t", "expected": 2, "hint": "T is Time — the time symptoms started, and time to call 911." }]
      }
    ]
  },
  {
    "id": "trauma-assessment-lab",
    "title": "Trauma & Assessment Scenario Lab",
    "introHtml": "<p><strong>Case — a fall from a roof.</strong> A 34-year-old roofer fell about 20 feet onto concrete. He is conscious but confused, has a deformed forearm, a swollen thigh, and burns to one arm from a hot surface. Work the trauma assessment in order: scene, primary assessment, bleeding and shock, splinting, burns, and the handover.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before you touch the patient: check the scene is safe (falling debris, traffic, unstable structure), put on gloves, and assume a spine injury until proven otherwise — hold the head still and move the patient as a unit. Never pull out an impaled object, never push protruding organs back in, and never move a patient with a suspected spine injury by pulling on their arms. The first scored row is a safety decision — get it right before anything else moves. This lab teaches knowledge and decision-making only; real trauma care is learned with an instructor and practised hands-on.</p><p>Enter the number of the correct option (or the computed value where the row asks for one) for each decision point.</p><p>Work each number on paper before entering it. In real trauma, the numbers are the treatment.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "passing": 70,
    "rows": [
      {
        "label": "SAFETY CALL — The patient fell from a roof and may have a spine injury. Your call: 1) Stand him up to check if he can walk 2) Hold his head still in a neutral position and move him as a unit with a trained team 3) Pull him by the arms to the stretcher 4) Sit him up quickly",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "safety_spine", "expected": 2, "hint": "A suspected spine injury needs the head held still and the patient moved as a unit with a log-roll." }]
      },
      {
        "label": "The patient's pulse is 128 and weak, skin is pale, cool, and clammy, and he is anxious and thirsty, with no visible bleeding. This is most likely: 1) A broken arm only 2) Compensated shock from internal bleeding 3) A mild allergic reaction 4) Normal after a fall",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trauma_shock", "expected": 2, "hint": "A fast weak pulse with pale, cool, clammy skin and anxiety after a big fall is compensated shock, most likely internal bleeding." }]
      },
      {
        "label": "COMPUTED — The patient's forearm is deformed. When splinting it, the splint must cover the wrist and the elbow — the joints above and below. Enter the number of joints the splint covers.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trauma_splint_joints", "expected": 2, "hint": "A splint covers the joints above and below a fracture — the wrist and the elbow for a forearm." }]
      },
      {
        "label": "PMS stands for: 1) Pressure, movement, and swelling 2) Pulse, movement, and sensation 3) Pain, medication, and splinting 4) Pulse, memory, and speech",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trauma_pms", "expected": 2, "hint": "PMS is pulse, movement, and sensation below an injury, checked before and after splinting." }]
      },
      {
        "label": "COMPUTED — The patient has burns to one whole arm (9%) and the front of the trunk (18%). Enter the total burn percentage.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trauma_burns", "expected": 27, "hint": "One arm is 9% and the front of the trunk is 18%; 9 + 18 = 27%." }]
      },
      {
        "label": "The patient's thigh is swollen after a suspected femur fracture. A femur fracture can hide: 1) Almost no blood 2) A litre or more of blood 3) Only a few drops 4) Air, not blood",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trauma_femur", "expected": 2, "hint": "A broken thigh bone can hide a litre or more of blood inside the thigh." }]
      },
      {
        "label": "COMPUTED — The patient opens his eyes to voice (3), speaks confused words (4), and withdraws from pain (4). Enter the total GCS.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trauma_gcs", "expected": 11, "hint": "Eye 3 + verbal 4 + motor 4 = 11." }]
      },
      {
        "label": "A knife handle is sticking out of the patient's abdomen. Your call: 1) Pull it out quickly 2) Leave it in place and stabilise it with bulky dressings 3) Push it further in 4) Cut it off flush with the skin",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trauma_impaled", "expected": 2, "hint": "An impaled object stays in place and is stabilised — it may be plugging a blood vessel." }]
      },
      {
        "label": "COMPUTED — The patient's first vital signs are pulse 110 and respirations 24. Fifteen minutes later the pulse is 128 and respirations are 28. Enter the INCREASE in pulse rate.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trauma_trend", "expected": 18, "hint": "128 - 110 = 18 beats per minute higher. The trend is deterioration." }]
      },
      {
        "label": "The patient is becoming drowsy, has one pupil larger than the other, and has vomited twice. This means: 1) He is improving 2) Warning signs of a serious brain injury — urgent hospital care 3) He is tired 4) He needs food",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trauma_head", "expected": 2, "hint": "Falling consciousness, unequal pupils, and vomiting are warning signs of a serious brain injury." }]
      },
      {
        "label": "In START triage at a multi-patient scene, a patient breathing 36 times per minute is tagged: 1) Minor (green) 2) Delayed (yellow) 3) Immediate (red) 4) Expectant/Deceased (black)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trauma_start", "expected": 3, "hint": "Breathing faster than 30 per minute is an Immediate (red) finding in START." }]
      },
      {
        "label": "An unstable patient should be reassessed every: 1) 5 minutes 2) 15 minutes 3) 30 minutes 4) Hour",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "trauma_reassess", "expected": 1, "hint": "An unstable patient is reassessed every 5 minutes; a stable patient every 15." }]
      }
    ]
  }
];
