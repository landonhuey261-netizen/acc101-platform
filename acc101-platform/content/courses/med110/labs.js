// med110 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "medication-safety-dosage-math",
    "title": "Medication Safety & Dosage Math",
    "introHtml": "<p><strong>Job ticket #4001 — Medication safety drill, training room.</strong> Customer: your training officer. The setting: a tabletop drill with four patient scenarios and a drug box. Your task: run the five rights, catch the contraindications, do the dosage math, and make the right call — in the right order. Read each scenario in the task, then answer each decision row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=oRl8Mj52SsQ\" target=\"_blank\" rel=\"noopener\">Oral Medication Administration Step by Step — Five Rights & Safe Technique</a> — watch the five-rights check done slowly and in order before you make your calls below.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any medication work: confirm the drug is for this patient, read the label (name, dose, route, expiration date), ask about allergies and every medication the patient has taken, and check the contraindications for that specific drug. Never give an expired, discolored, cloudy, or unidentified drug. Never give a drug outside your scope. If any check fails, hold the drug, document why, and call medical direction. Do the math on paper and have your partner check it independently.</p><p><strong>The scenarios:</strong> (1) A 70 kg adult with crushing chest pain, no aspirin allergy, not bleeding, able to chew and swallow. Aspirin tablets are 81 mg each. (2) A 20 kg child in anaphylaxis after a bee sting, lips swelling, wheezing. (3) A patient with chest pain, systolic BP 84, whose own nitroglycerin is in their pocket. (4) A diabetic patient who is unconscious with low blood sugar. (5) A patient with chest pain who took sildenafil 12 hours ago. (6) An epinephrine auto-injector whose liquid looks brown. (7) A patient weighs 66 lb; the ordered dose is 0.15 mg/kg. (8) The order is 15 mg of a liquid drug; the bottle says 5 mg per mL. (9) A patient with chest pain has already taken three doses of nitroglycerin, 5 minutes apart, and the pain is unchanged. (10) You calculate a dose and get 40 tablets.</p><p><strong>For each row, enter the option number, the step number, or the computed value asked for.</strong></p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The 70 kg adult with chest pain needs aspirin. The dose is 324 mg and the tablets are 81 mg each. How many tablets? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_aspirin_tablets",
            "expected": 4,
            "hint": "Desired over have: 324 ÷ 81 = 4 tablets. Four 81 mg tablets total 324 mg, inside the 160–325 mg range. Chewable, non-enteric-coated only."
          }
        ]
      },
      {
        "label": "DECISION — The 20 kg child in anaphylaxis needs epinephrine. Which auto-injector? 1) 0.3 mg adult 2) 0.15 mg child 3) 0.4 mg sublingual 4) No epinephrine — children cannot receive it",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_epi_child",
            "expected": 2,
            "hint": "20 kg is in the child range (about 15–30 kg), so the 0.15 mg child auto-injector. The 0.3 mg dose is for 30 kg or more. Epinephrine has no absolute contraindications in anaphylaxis — children receive it."
          }
        ]
      },
      {
        "label": "DECISION — The chest-pain patient has a systolic BP of 84 and their own nitroglycerin is available. Correct call? 1) Give it — chest pain overrides blood pressure 2) Hold it — systolic 84 is below the protocol threshold, call medical direction 3) Give half a tablet 4) Give it with water",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_nitro_lowbp",
            "expected": 2,
            "hint": "Nitroglycerin lowers blood pressure; the threshold is commonly systolic 90–100. At 84, giving it could cause a collapse. Hold the drug and call medical direction."
          }
        ]
      },
      {
        "label": "DECISION — The diabetic patient is unconscious with low blood sugar. Correct call? 1) Give oral glucose gel between the cheek and gum 2) Give nothing by mouth — an unconscious patient cannot swallow safely; transport fast and call for advanced help 3) Pour juice into their mouth 4) Wait for them to wake up",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_glucose_unconscious",
            "expected": 2,
            "hint": "Oral glucose is only for an awake patient who can swallow safely. Anything by mouth in an unconscious patient can go into the lungs. Transport fast; in the hospital glucose can be given intravenously."
          }
        ]
      },
      {
        "label": "DECISION — The chest-pain patient took sildenafil 12 hours ago and wants nitroglycerin. Correct call? 1) Give it — 12 hours is long enough 2) Hold it — erectile-dysfunction drugs within 24–48 hours plus nitroglycerin can cause a dangerous blood pressure drop 3) Give a double dose 4) Give aspirin instead and skip the BP check",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_nitro_ed",
            "expected": 2,
            "hint": "12 hours is inside the 24–48 hour window. Sildenafil plus nitroglycerin can cause a catastrophic blood pressure drop. Hold the drug and call medical direction."
          }
        ]
      },
      {
        "label": "DECISION — The epinephrine auto-injector's liquid looks brown. Correct call? 1) Use it anyway — color does not matter 2) Shake it hard and use it 3) Do not use it — the drug has broken down; use a different injector if available and call for help 4) Use it at half the hold time",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_epi_brown",
            "expected": 3,
            "hint": "Good epinephrine is clear and colorless; brown liquid means it has broken down. A weak drug in anaphylaxis is dangerous. Use a different injector if one is available."
          }
        ]
      },
      {
        "label": "COMPUTED — A patient weighs 66 lb. Convert to kilograms. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_lb_to_kg",
            "expected": 30,
            "hint": "kg = lb ÷ 2.2. 66 ÷ 2.2 = 30 kg. This is the adult epinephrine cutoff (30 kg / 66 lb or more)."
          }
        ]
      },
      {
        "label": "COMPUTED — The ordered dose is 0.15 mg/kg for a 20 kg child. What is the dose in mg? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_weight_dose",
            "expected": 3,
            "hint": "20 kg × 0.15 mg/kg = 3 mg. Convert pounds to kilograms first, then multiply by the mg/kg dose."
          }
        ]
      },
      {
        "label": "COMPUTED — The order is 15 mg of a liquid drug; the bottle says 5 mg per mL. How many mL? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_liquid_ml",
            "expected": 3,
            "hint": "Desired over have: 15 ÷ 5 = 3, × 1 mL = 3 mL."
          }
        ]
      },
      {
        "label": "COMPUTED — The 70 kg adult's aspirin order is 162 mg; tablets are 81 mg each. How many tablets? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_aspirin_162",
            "expected": 2,
            "hint": "Desired over have: 162 ÷ 81 = 2 tablets. Two tablets give 162 mg, inside the 160–325 mg range."
          }
        ]
      },
      {
        "label": "DECISION — The chest-pain patient has already taken three nitroglycerin doses, 5 minutes apart, and the pain is unchanged. Correct call? 1) Give a fourth dose 2) Stop — three doses is the usual limit; the patient needs the hospital 3) Give aspirin and skip transport 4) Wait 30 minutes and try again",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_nitro_three",
            "expected": 2,
            "hint": "Up to three doses, 5 minutes apart, is the usual limit. Pain unchanged after three means the patient needs the hospital — more nitroglycerin will only drop the pressure further."
          }
        ]
      },
      {
        "label": "DECISION — You calculate a dose and get 40 tablets. Correct call? 1) Give 40 tablets — the math is the math 2) Stop, redo the calculation from the start, and ask your partner to calculate independently 3) Give 4 tablets and hope 4) Ask the patient how many they want",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_forty_tablets",
            "expected": 2,
            "hint": "40 tablets fails the sense check — no EMT dose is 40 tablets. Redo the calculation, checking units (mg vs. mcg, lb vs. kg) and the decimal point, and get an independent double-check."
          }
        ]
      },
      {
        "label": "COMPUTED — Convert 0.4 mg of nitroglycerin to micrograms. (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_mg_to_mcg",
            "expected": 400,
            "hint": "1 mg = 1,000 mcg, so 0.4 × 1,000 = 400 mcg. Mixing up mg and mcg is a thousandfold error — always write the unit."
          }
        ]
      },
      {
        "label": "DECISION — After giving a drug, the EMT writes nothing down because \"the hospital will figure it out.\" What is the right practice? 1) Write nothing — the hospital will figure it out 2) Document what drug, how much, how, when, and what happened next, right when it is given 3) Tell the patient to remember it 4) Write it down at the end of the shift from memory",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_document",
            "expected": 2,
            "hint": "Document what, how much, how, when, and the response — when the drug is given, not hours later from memory. Without it, the hospital may give the same drug again and double the dose."
          }
        ]
      },
      {
        "label": "COMPUTED — The drill has 10 scenarios. You caught the contraindication in 7 of them on your first pass. How many did you miss? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ms_remaining",
            "expected": 3,
            "hint": "10 scenarios minus 7 caught leaves 3 missed. In the real world, a missed contraindication is a patient harmed — which is why the checks are run every time, not most of the time."
          }
        ]
      }
    ],
    "passing": 70
  }
];
