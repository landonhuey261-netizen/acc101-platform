// Auto-generated original course content for College Without College
module.exports = [
  {
    "id": "ac-gauge-readings",
    "title": "A/C Gauge Readings — Read the Pattern",
    "introHtml": "<p><strong>Case: Five cars, one gauge set, an 85-degree day.</strong> A shop has five cars with A/C complaints, and the scenario states the expected ranges for this day: low side 30 to 40 psi and high side 200 to 250 psi. Your task: read each gauge pair against those stated ranges, name the pattern, and pick the right next test. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — the shop's demo car (completed for you).</strong> The demo car reads 32 psi low side and 210 psi high side. Step 1: compare with the stated ranges — 32 is inside 30 to 40, and 210 is inside 200 to 250. Step 2: both readings sit inside the ranges, so the pattern is normal. Step 3: the next test is not refrigerant at all — check the clutch, the fan, and the airflow. Notice the method you will repeat: compare both readings with the stated ranges, name the pattern, then pick the next test.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any gauge work: safety glasses and gloves on, check the gauge hoses for damage, and keep hands, hair, and clothing clear of the belt and the cooling fan. Never open both manifold valves at once, and never vent refrigerant to the air — recovery equipment is the only way refrigerant leaves a system. Let the system run on maximum cooling with the blower on high and let the readings settle before judging them.</p><p><strong>The case, as you find it:</strong> The scenario states the expected ranges for this 85-degree day: low side 30 to 40 psi and high side 200 to 250 psi. Car 1 reads 35 psi low side and 220 psi high side, but its vent air is only slightly cool. Car 2 reads well below both stated ranges with weak cooling. Car 3 reads a very low low side with a near-normal high side. Car 4 reads a high side well above the stated range with weak cooling. Car 5 reads 20 psi low side and 210 psi high side. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you connect gauges to a running A/C system, what do you do first? 1) Open both manifold valves at once 2) Put on safety glasses and gloves, check the hoses for damage, and keep hands, hair, and clothing clear of the belt and fan 3) Vent a little refrigerant to check the pressure 4) Connect the gauges with the engine at high speed",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "g1_safety",
            "expected": 2,
            "hint": "Step 0 governs: eye and hand protection, sound hoses, and clear of moving parts come before any gauge work. Opening both valves (1) is dangerous, venting (3) is illegal, and high speed (4) is not needed."
          }
        ]
      },
      {
        "label": "FRAMING — Step 0: The scenario states the expected ranges for this 85-degree day are low side 30 to 40 psi and high side 200 to 250 psi. The gauges read 35 psi low side and 220 psi high side. What kind of reading is this? 1) Normal — both readings sit inside the stated ranges 2) Low charge — both readings are below the ranges 3) Overcharge — both readings are above the ranges",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "g1_framing",
            "expected": 1,
            "hint": "Both readings sit inside the ranges the scenario states: 35 is between 30 and 40, and 220 is between 200 and 250. That is a normal pattern, not a low charge (2) or an overcharge (3)."
          }
        ]
      },
      {
        "label": "COMPUTED — The low side reads 35 psi and the stated expected range is 30 to 40 psi. How many psi is the reading above the bottom of the range? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "g1_low_diff",
            "expected": 5,
            "hint": "35 minus 30 equals 5 psi above the bottom of the stated range."
          }
        ]
      },
      {
        "label": "COMPUTED — The high side reads 220 psi and the stated expected range is 200 to 250 psi. How many psi is the reading below the top of the range? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "g1_high_diff",
            "expected": 30,
            "hint": "250 minus 220 equals 30 psi below the top of the stated range."
          }
        ]
      },
      {
        "label": "DECISION — The gauges read 35 psi low side and 220 psi high side, both inside the stated ranges, but the vent air is only slightly cool. What do you check next? 1) Add refrigerant at once 2) Check whether the compressor clutch is engaged and whether the condenser fan is running, and check the cabin filter and airflow 3) Replace the compressor 4) Vent the system and start again",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "g1_next",
            "expected": 2,
            "hint": "Normal pressures with weak cooling point at the clutch, the fan, or the air path — not at the charge. Adding refrigerant (1) or replacing the compressor (3) guesses at a fault the gauges do not show, and venting (4) is illegal."
          }
        ]
      },
      {
        "label": "DECISION — A second car shows both gauges well below the stated ranges and weak cooling. What is the most likely pattern? 1) Low charge 2) Blocked condenser 3) Overcharge 4) Failed blower motor",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "g1_lowcharge",
            "expected": 1,
            "hint": "Both pressures low usually means a low charge. A blocked condenser (2) pushes the high side up, an overcharge (3) raises pressures, and a blower fault (4) cuts airflow rather than pressures."
          }
        ]
      },
      {
        "label": "DECISION — A third car shows a very low low-side reading with a near-normal high side. What is the most likely pattern? 1) Low charge 2) A restriction starving the evaporator 3) Overcharge 4) A failed heater core",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "g1_restrict",
            "expected": 2,
            "hint": "A restriction limits flow into the evaporator, so the low side falls while the high side stays near normal. Low charge (1) lowers both sides, overcharge (3) raises them, and the heater core (4) is in the heating circuit."
          }
        ]
      },
      {
        "label": "DECISION — A fourth car shows a high-side reading well above the stated range with weak cooling. What do you check first? 1) The condenser for blocked fins and whether the cooling fan runs 2) The cabin filter only 3) The heater hoses 4) The fuel tank",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "g1_highside",
            "expected": 1,
            "hint": "A high high-side points at heat not escaping the condenser — blocked fins or a fan that does not run. The filter (2) affects cabin airflow, the heater hoses (3) are the heating circuit, and the fuel tank (4) is unrelated."
          }
        ]
      },
      {
        "label": "COMPUTED — A fifth car has a low-side reading of 20 psi against a stated expected range of 30 to 40 psi. How many psi below the bottom of the range is it? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "g1_lowbelow",
            "expected": 10,
            "hint": "30 minus 20 equals 10 psi below the bottom of the stated range."
          }
        ]
      },
      {
        "label": "COMPUTED — The same fifth car has a high-side reading of 210 psi against a stated expected range of 200 to 250 psi. How many psi above the bottom of the range is it? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "g1_highabove",
            "expected": 10,
            "hint": "210 minus 200 equals 10 psi above the bottom of the stated range."
          }
        ]
      },
      {
        "label": "DECISION — That fifth car (low side 20 psi, high side 210 psi) is most likely: 1) Overcharged 2) Restricted at the expansion device, starving the evaporator 3) Suffering a blocked condenser 4) Suffering a failed blower",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "g1_diag5",
            "expected": 2,
            "hint": "A very low low-side with a near-normal high side is the restriction pattern: flow into the evaporator is limited. Overcharge (1) raises pressures, a blocked condenser (3) pushes the high side up, and a blower fault (4) cuts airflow."
          }
        ]
      },
      {
        "label": "DECISION — You have read the gauges on all five cars. What is the right way to close the lab? 1) Top up every car that is low 2) Record both readings for each car, the pattern you read, and the next test for each one, then leak-test any car that is low before charging it 3) Replace the compressor on the coldest car 4) Vent the car with the highest readings",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "g1_close",
            "expected": 2,
            "hint": "A gauge reading closes with a record of both pressures, the pattern, and the next test — and a low car gets a leak test before any charging. Topping up (1) without finding the leak wastes refrigerant, and venting (4) is illegal."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "ac-gauge-readings.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — Before you connect gauges to a running A/C system, what do you do first? 1) Open both manifold valves at once 2) Put on safety glasses and gloves, check the hoses for damage, and keep hands, hair, and clothing clear of the belt and fan 3) Vent a little refrigerant to check the pressure 4) Connect the gauges with the engine at high speed\",\n\"FRAMING — Step 0: The scenario states the expected ranges for this 85-degree day are low side 30 to 40 psi and high side 200 to 250 psi. The gauges read 35 psi low side and 220 psi high side. What kind of reading is this? 1) Normal — both readings sit inside the stated ranges 2) Low charge — both readings are below the ranges 3) Overcharge — both readings are above the ranges\",\n\"COMPUTED — The low side reads 35 psi and the stated expected range is 30 to 40 psi. How many psi is the reading above the bottom of the range? (Enter the number.)\",\n\"COMPUTED — The high side reads 220 psi and the stated expected range is 200 to 250 psi. How many psi is the reading below the top of the range? (Enter the number.)\",\n\"DECISION — The gauges read 35 psi low side and 220 psi high side, both inside the stated ranges, but the vent air is only slightly cool. What do you check next? 1) Add refrigerant at once 2) Check whether the compressor clutch is engaged and whether the condenser fan is running, and check the cabin filter and airflow 3) Replace the compressor 4) Vent the system and start again\",\n\"DECISION — A second car shows both gauges well below the stated ranges and weak cooling. What is the most likely pattern? 1) Low charge 2) Blocked condenser 3) Overcharge 4) Failed blower motor\",\n\"DECISION — A third car shows a very low low-side reading with a near-normal high side. What is the most likely pattern? 1) Low charge 2) A restriction starving the evaporator 3) Overcharge 4) A failed heater core\",\n\"DECISION — A fourth car shows a high-side reading well above the stated range with weak cooling. What do you check first? 1) The condenser for blocked fins and whether the cooling fan runs 2) The cabin filter only 3) The heater hoses 4) The fuel tank\",\n\"COMPUTED — A fifth car has a low-side reading of 20 psi against a stated expected range of 30 to 40 psi. How many psi below the bottom of the range is it? (Enter the number.)\",\n\"COMPUTED — The same fifth car has a high-side reading of 210 psi against a stated expected range of 200 to 250 psi. How many psi above the bottom of the range is it? (Enter the number.)\",\n\"DECISION — That fifth car (low side 20 psi, high side 210 psi) is most likely: 1) Overcharged 2) Restricted at the expansion device, starving the evaporator 3) Suffering a blocked condenser 4) Suffering a failed blower\",\n\"DECISION — You have read the gauges on all five cars. What is the right way to close the lab? 1) Top up every car that is low 2) Record both readings for each car, the pattern you read, and the next test for each one, then leak-test any car that is low before charging it 3) Replace the compressor on the coldest car 4) Vent the car with the highest readings\",\n"
  },
  {
    "id": "refrigerant-leak-detection",
    "title": "Refrigerant-Leak Detection — Find It Before You Fill It",
    "introHtml": "<p><strong>Case: The car that needs a top-up every summer.</strong> A customer brings the same car back each summer for a top-up. The scenario states the charge was correct last year and no repair was done since. Your task: prove there is a leak, find where it is, confirm it, and finish the job properly. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — the shop's demo fitting (completed for you).</strong> A demo fitting has UV dye on it. Step 1: shine the UV light on the fitting — the dye glows where it escaped. Step 2: brush soapy water on the fitting — bubbles form where gas escapes, confirming the leak. Step 3: repair the fitting, evacuate, vacuum-hold, and recharge by weight. Notice the method you will repeat: dye to find, detector or bubbles to confirm, repair, then evacuate and recharge by weight.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any leak testing: safety glasses and gloves on, keep hands and clothing clear of the belt and the cooling fan, and never vent refrigerant to find a leak — a leak is found with dye, a detector, or soapy water, not by releasing gas. UV dye is added to the system and the car is run so it circulates; the dye stays in the system, so a slow leak can be found on a return visit.</p><p><strong>The case, as you find it:</strong> The car needs a top-up every summer — 3 top-ups in 3 years. UV dye was added last visit. The electronic detector beeps once per second at 30 cm from a hose fitting and 4 times per second at 5 cm from the same fitting. The evaporator is suspected but hides inside the heater box. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before leak-testing a running A/C system, what do you do first? 1) Look for leaks with bare hands near the belt 2) Put on safety glasses and gloves, keep hands and clothing clear of the belt and fan, and never vent refrigerant to find a leak 3) Open both manifold valves 4) Spray soapy water on the compressor clutch while it spins",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "leak_safety",
            "expected": 2,
            "hint": "Step 0 governs: protection on, clear of moving parts, and no venting. Bare hands near the belt (1), opening both valves (3), and spraying a spinning clutch (4) all risk injury."
          }
        ]
      },
      {
        "label": "FRAMING — Step 0: A car needs a top-up every summer. The scenario states the charge was correct last year and no repair was done since. What kind of fault is this? 1) Normal use — refrigerant is used up each summer 2) A leak — a sealed system never loses charge, so refrigerant escaped somewhere 3) A worn blower motor 4) A dirty cabin filter",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "leak_framing",
            "expected": 2,
            "hint": "Refrigerant is sealed in and reused; a yearly top-up means it escaped through a leak. It is not used up (1), and the blower (3) and filter (4) affect airflow, not charge."
          }
        ]
      },
      {
        "label": "DECISION — The UV dye was added last visit and the car is back. Where do you look first with the UV light? 1) At the tyres 2) At the joints, O-rings, hose fittings, and the compressor shaft seal 3) Inside the fuel tank 4) At the battery terminals",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "leak_where",
            "expected": 2,
            "hint": "Leaks most often appear at joints, O-rings, fittings, and the shaft seal. Tyres (1), the fuel tank (3), and battery terminals (4) are not refrigerant joints."
          }
        ]
      },
      {
        "label": "DECISION — The UV light shows a glowing trace at a hose fitting. What is the next step? 1) Top up the system and send the car away 2) Confirm the leak with soapy water on the fitting, then repair the fitting and re-test 3) Replace the compressor 4) Ignore it — dye glows everywhere",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "leak_confirm",
            "expected": 2,
            "hint": "A glowing trace points at the leak; soapy water bubbling at the joint confirms it before the repair. Topping up (1) ignores the leak, replacing the compressor (3) guesses at the wrong part, and dye does not glow everywhere (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — The detector beeps once per second at 30 cm from a fitting and 4 times per second at 5 cm from the same fitting. How many more beeps per second does it give at 5 cm than at 30 cm? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "leak_beeps",
            "expected": 3,
            "hint": "4 minus 1 equals 3 more beeps per second — the detector beeps faster as it gets closer to the leak."
          }
        ]
      },
      {
        "label": "DECISION — The electronic detector beeps fastest at the compressor shaft seal. What does that tell you? 1) The seal is the leak point 2) The compressor is fully charged 3) The condenser is blocked 4) The blower has failed",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "leak_shaft",
            "expected": 1,
            "hint": "The detector sniffs refrigerant, so its fastest beeping marks where refrigerant is escaping — the shaft seal. Charge (2), the condenser (3), and the blower (4) are not what a detector measures."
          }
        ]
      },
      {
        "label": "DECISION — The evaporator is suspected of leaking but it hides inside the heater box. Which clue would support that suspicion? 1) Dye showing in the condensation drain, or the detector beeping at the vents 2) A hot heater hose 3) A rattling blower 4) A low fuel gauge",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "leak_evap",
            "expected": 1,
            "hint": "Dye in the drain water or a detector beeping at the vents points at the hidden evaporator. A hot hose (2) is normal heating, a rattling blower (3) is an air-path fault, and the fuel gauge (4) is unrelated."
          }
        ]
      },
      {
        "label": "DECISION — Soapy water brushed on a fitting shows no bubbles, but the dye glows there. What is the right call? 1) The fitting is fine — dye always glows 2) Trust the dye: the leak is slow, so bubbles may not form at once; repair the fitting and re-test after the repair 3) Replace the whole system 4) Add stop-leak and send the car away",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "leak_slow",
            "expected": 2,
            "hint": "A slow leak may not bubble at once, but a glowing dye trace at a joint is evidence of escaping refrigerant. Dye does not glow without a leak (1), replacing everything (3) is not justified, and stop-leak (4) does not fix the joint."
          }
        ]
      },
      {
        "label": "COMPUTED — The system was topped up 3 times in 3 years, once a year. How many top-ups is that per year on average? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "leak_rate",
            "expected": 1,
            "hint": "3 top-ups over 3 years is 1 per year — a steady leak, not a one-off loss."
          }
        ]
      },
      {
        "label": "DECISION — The leak is fixed. What is the correct sequence to finish the job? 1) Top up by pressure and send the car away 2) Evacuate the system, hold the vacuum to prove it is sealed, then recharge by weight to the amount on the label 3) Vent the system and recharge 4) Replace the cabin filter and recharge",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "leak_finish",
            "expected": 2,
            "hint": "After a leak repair the system is evacuated, vacuum-held to prove the seal, and recharged by weight. Charging by pressure alone (1) is guesswork, venting (3) is illegal, and the filter (4) is unrelated."
          }
        ]
      },
      {
        "label": "DECISION — The lab is done. What is the right way to close it? 1) Say nothing and send the car away 2) Record where the leak was found, how it was confirmed, what was repaired, and the recharge amount, so the next visit can be checked against it 3) Keep the dye bottle and throw away the notes 4) Tell the customer the system will never leak again",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "leak_close",
            "expected": 2,
            "hint": "A leak repair closes with a record of the location, the confirmation, the repair, and the recharge — so a return can be judged against it. Silence (1) loses the history, and no repair can promise a system will never leak again (4)."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "refrigerant-leak-detection.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — Before leak-testing a running A/C system, what do you do first? 1) Look for leaks with bare hands near the belt 2) Put on safety glasses and gloves, keep hands and clothing clear of the belt and fan, and never vent refrigerant to find a leak 3) Open both manifold valves 4) Spray soapy water on the compressor clutch while it spins\",\n\"FRAMING — Step 0: A car needs a top-up every summer. The scenario states the charge was correct last year and no repair was done since. What kind of fault is this? 1) Normal use — refrigerant is used up each summer 2) A leak — a sealed system never loses charge, so refrigerant escaped somewhere 3) A worn blower motor 4) A dirty cabin filter\",\n\"DECISION — The UV dye was added last visit and the car is back. Where do you look first with the UV light? 1) At the tyres 2) At the joints, O-rings, hose fittings, and the compressor shaft seal 3) Inside the fuel tank 4) At the battery terminals\",\n\"DECISION — The UV light shows a glowing trace at a hose fitting. What is the next step? 1) Top up the system and send the car away 2) Confirm the leak with soapy water on the fitting, then repair the fitting and re-test 3) Replace the compressor 4) Ignore it — dye glows everywhere\",\n\"COMPUTED — The detector beeps once per second at 30 cm from a fitting and 4 times per second at 5 cm from the same fitting. How many more beeps per second does it give at 5 cm than at 30 cm? (Enter the number.)\",\n\"DECISION — The electronic detector beeps fastest at the compressor shaft seal. What does that tell you? 1) The seal is the leak point 2) The compressor is fully charged 3) The condenser is blocked 4) The blower has failed\",\n\"DECISION — The evaporator is suspected of leaking but it hides inside the heater box. Which clue would support that suspicion? 1) Dye showing in the condensation drain, or the detector beeping at the vents 2) A hot heater hose 3) A rattling blower 4) A low fuel gauge\",\n\"DECISION — Soapy water brushed on a fitting shows no bubbles, but the dye glows there. What is the right call? 1) The fitting is fine — dye always glows 2) Trust the dye: the leak is slow, so bubbles may not form at once; repair the fitting and re-test after the repair 3) Replace the whole system 4) Add stop-leak and send the car away\",\n\"COMPUTED — The system was topped up 3 times in 3 years, once a year. How many top-ups is that per year on average? (Enter the number.)\",\n\"DECISION — The leak is fixed. What is the correct sequence to finish the job? 1) Top up by pressure and send the car away 2) Evacuate the system, hold the vacuum to prove it is sealed, then recharge by weight to the amount on the label 3) Vent the system and recharge 4) Replace the cabin filter and recharge\",\n\"DECISION — The lab is done. What is the right way to close it? 1) Say nothing and send the car away 2) Record where the leak was found, how it was confirmed, what was repaired, and the recharge amount, so the next visit can be checked against it 3) Keep the dye bottle and throw away the notes 4) Tell the customer the system will never leak again\",\n"
  }
];
