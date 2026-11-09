// Auto-generated original course content for College Without College
module.exports = [
  {
    "id": "fuel-trim-numbers",
    "title": "Fuel-Trim Numbers — Read the Pair at Idle and Under Load",
    "introHtml": "<p><strong>Case: Four cars, one scan tool, two conditions each.</strong> A shop has four cars with driveability complaints. The scenario states the rule for this lab: total trim is short-term trim plus long-term trim, and positive means the computer is adding fuel while negative means it is taking fuel away. Your task: add the trims, read the pair at idle and under load, and name the fault family. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — the shop's demo car (completed for you).</strong> The demo car shows short-term trim of plus 2 and long-term trim of plus 1 at idle. Step 1: add them — 2 plus 1 equals 3. Step 2: the total is near zero, so the mixture is correct at idle. Step 3: read the pair under load as well, because the same fault looks different at idle and under load. Notice the method you will repeat: add the trims, read the pair at both conditions, then name the pattern.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on a running engine: keep hands, hair, and clothing clear of the belt and the cooling fan, work in fresh air because exhaust gas is poisonous, and never reach across moving parts to plug in a scan tool. A flashing check-engine light means an active misfire is damaging the catalytic converter right now — keep any test run short and do the work in the shop.</p><p><strong>The case, as you find it:</strong> The scenario states total trim is short-term trim plus long-term trim. Car 1 shows plus 4 short-term and plus 6 long-term at idle, and plus 12 short-term and plus 6 long-term under load. Car 2 shows plus 9 short-term and plus 3 long-term at idle, and plus 2 short-term and plus 3 long-term under load. Car 3 shows minus 8 short-term and minus 4 long-term at idle. Car 4 shows total trim near zero at idle and near zero under load, but it misfires in one cylinder. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before you work on a running engine to read fuel trims, what do you do first? 1) Reach across the spinning belt to plug in the scan tool 2) Keep hands, hair, and clothing clear of the belt and fan, work in fresh air because exhaust is poisonous, and never reach across moving parts 3) Disconnect the battery while the engine runs 4) Open the fuel rail to smell the fuel",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_safety",
            "expected": 2,
            "hint": "Step 0 governs: clear of moving parts, fresh air for exhaust, and no shortcuts across a running engine. Reaching across the belt (1), disconnecting the battery running (3), and opening the fuel rail (4) all risk injury or fire."
          }
        ]
      },
      {
        "label": "FRAMING — Step 0: The scenario states the short-term and long-term trims are added together to give the total trim. A car shows short-term trim of plus 4 and long-term trim of plus 6 at idle. What kind of reading is this? 1) A lean correction — the computer is adding fuel 2) A rich correction — the computer is taking fuel away 3) No correction at all",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_framing",
            "expected": 1,
            "hint": "Positive trims mean the computer is adding fuel, so the real mixture is lean. A rich correction (2) would be negative trims, and no correction (3) would be trims near zero."
          }
        ]
      },
      {
        "label": "COMPUTED — Short-term trim is plus 4 and long-term trim is plus 6 at idle. What is the total trim? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_total_idle",
            "expected": 10,
            "hint": "Total trim is short-term plus long-term: 4 plus 6 equals 10."
          }
        ]
      },
      {
        "label": "COMPUTED — The same car under load shows short-term trim of plus 12 and long-term trim of plus 6. What is the total trim under load? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_total_load",
            "expected": 18,
            "hint": "12 plus 6 equals 18."
          }
        ]
      },
      {
        "label": "DECISION — Total trim is 10 at idle and 18 under load. Which fault does that pattern point at? 1) A vacuum leak 2) A fuel-delivery fault, such as a weak pump or a clogged filter 3) A sensor that is stuck rich 4) A failed catalytic converter",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_diag1",
            "expected": 2,
            "hint": "Trims that climb under load point at fuel delivery: at idle little fuel is needed, so the fault hides, and under load the engine needs more fuel than the pump can deliver. A vacuum leak (1) shows high at idle and falls under load."
          }
        ]
      },
      {
        "label": "COMPUTED — A second car shows short-term trim of plus 9 and long-term trim of plus 3 at idle. What is its total trim at idle? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_total2_idle",
            "expected": 12,
            "hint": "9 plus 3 equals 12."
          }
        ]
      },
      {
        "label": "COMPUTED — The second car under load shows short-term trim of plus 2 and long-term trim of plus 3. What is its total trim under load? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_total2_load",
            "expected": 5,
            "hint": "2 plus 3 equals 5."
          }
        ]
      },
      {
        "label": "DECISION — The second car has total trim 12 at idle and 5 under load. Which fault does that pattern point at? 1) A fuel-delivery fault 2) A vacuum leak letting in unmetered air 3) A failed ignition coil 4) A blocked exhaust",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_diag2",
            "expected": 2,
            "hint": "High trims at idle that fall under load point at a vacuum leak: at idle the leak is a large share of the air drawn in, and under load it is a small share. A delivery fault (1) shows the opposite pattern."
          }
        ]
      },
      {
        "label": "DECISION — A third car shows short-term trim of minus 8 and long-term trim of minus 4 at idle. What does that mean? 1) The computer is adding fuel because the mixture is lean 2) The computer is taking fuel away because the real mixture is rich 3) The trims are normal 4) The engine is off",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_rich",
            "expected": 2,
            "hint": "Negative trims mean the computer is taking fuel away, so the real mixture is rich — too much fuel is arriving, or a sensor is lying about it. Adding fuel (1) is a positive trim, and these trims are far from zero (3)."
          }
        ]
      },
      {
        "label": "COMPUTED — The third car's total trim at idle is minus 12. If the long-term trim is minus 4, what is the short-term trim? (Enter the number, with a minus sign.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_stft3",
            "expected": -8,
            "hint": "Total trim is short-term plus long-term, so short-term is total minus long-term: minus 12 minus minus 4 equals minus 8."
          }
        ]
      },
      {
        "label": "DECISION — A fourth car shows total trim near zero at idle and near zero under load, but it misfires in one cylinder. What does that tell you? 1) The mixture is correct overall, so the misfire is in one cylinder — spark, fuel to that cylinder, or mechanical — not a whole-engine mixture fault 2) The fuel pump has failed 3) There is a vacuum leak 4) The oxygen sensor is lying",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_misfire",
            "expected": 1,
            "hint": "Trims near zero mean the whole-engine mixture is correct, so a single-cylinder misfire is a cylinder fault, not a mixture fault. A failed pump (2) or a vacuum leak (3) would move the trims, and a lying sensor (4) would too."
          }
        ]
      },
      {
        "label": "DECISION — The lab is done. What is the right way to close it? 1) Replace the parts the trims point at without testing 2) Record the trim pairs at idle and under load, the pattern you read, and the next test for each car, then test before replacing anything 3) Clear the codes and send the cars away 4) Top up the fuel tanks",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ft_close",
            "expected": 2,
            "hint": "A fuel-trim lab closes with a record of the pairs, the pattern, and the next test — and testing before replacing. Replacing without testing (1) guesses, clearing codes (3) erases evidence, and fuel level (4) is not the diagnosis."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "fuel-trim-numbers.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — Before you work on a running engine to read fuel trims, what do you do first? 1) Reach across the spinning belt to plug in the scan tool 2) Keep hands, hair, and clothing clear of the belt and fan, work in fresh air because exhaust is poisonous, and never reach across moving parts 3) Disconnect the battery while the engine runs 4) Open the fuel rail to smell the fuel\",\n\"FRAMING — Step 0: The scenario states the short-term and long-term trims are added together to give the total trim. A car shows short-term trim of plus 4 and long-term trim of plus 6 at idle. What kind of reading is this? 1) A lean correction — the computer is adding fuel 2) A rich correction — the computer is taking fuel away 3) No correction at all\",\n\"COMPUTED — Short-term trim is plus 4 and long-term trim is plus 6 at idle. What is the total trim? (Enter the number.)\",\n\"COMPUTED — The same car under load shows short-term trim of plus 12 and long-term trim of plus 6. What is the total trim under load? (Enter the number.)\",\n\"DECISION — Total trim is 10 at idle and 18 under load. Which fault does that pattern point at? 1) A vacuum leak 2) A fuel-delivery fault, such as a weak pump or a clogged filter 3) A sensor that is stuck rich 4) A failed catalytic converter\",\n\"COMPUTED — A second car shows short-term trim of plus 9 and long-term trim of plus 3 at idle. What is its total trim at idle? (Enter the number.)\",\n\"COMPUTED — The second car under load shows short-term trim of plus 2 and long-term trim of plus 3. What is its total trim under load? (Enter the number.)\",\n\"DECISION — The second car has total trim 12 at idle and 5 under load. Which fault does that pattern point at? 1) A fuel-delivery fault 2) A vacuum leak letting in unmetered air 3) A failed ignition coil 4) A blocked exhaust\",\n\"DECISION — A third car shows short-term trim of minus 8 and long-term trim of minus 4 at idle. What does that mean? 1) The computer is adding fuel because the mixture is lean 2) The computer is taking fuel away because the real mixture is rich 3) The trims are normal 4) The engine is off\",\n\"COMPUTED — The third car's total trim at idle is minus 12. If the long-term trim is minus 4, what is the short-term trim? (Enter the number, with a minus sign.)\",\n\"DECISION — A fourth car shows total trim near zero at idle and near zero under load, but it misfires in one cylinder. What does that tell you? 1) The mixture is correct overall, so the misfire is in one cylinder — spark, fuel to that cylinder, or mechanical — not a whole-engine mixture fault 2) The fuel pump has failed 3) There is a vacuum leak 4) The oxygen sensor is lying\",\n\"DECISION — The lab is done. What is the right way to close it? 1) Replace the parts the trims point at without testing 2) Record the trim pairs at idle and under load, the pattern you read, and the next test for each car, then test before replacing anything 3) Clear the codes and send the cars away 4) Top up the fuel tanks\",\n"
  },
  {
    "id": "misfire-diagnosis",
    "title": "Misfire Diagnosis — Find the Cylinder, Then Find the Cause",
    "introHtml": "<p><strong>Case: Five cars, five misfires, one method.</strong> A shop has five cars with misfire complaints. The scenario states the method for this lab: find the weak cylinder with a drop test, then swap the coil and the injector to find why — and if the misfire stays with the cylinder after both swaps, test its compression. Your task: follow the method for each car and name the fault the test proves. Read the case in the task, then answer each decision row.</p><p><strong>Worked example first — the shop's demo car (completed for you).</strong> The demo car sets P0301, a misfire in cylinder 1. Step 1: the drop test shows cylinder 1 makes almost no difference when disabled — it is the weak cylinder. Step 2: swap its coil with cylinder 3 — the misfire moves to cylinder 3, so the coil is faulty. Step 3: replace only the coil, because the test named it. Notice the method you will repeat: drop test to find the cylinder, swap tests to find the part, compression test only if both swaps fail.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any misfire work: a flashing check-engine light means an active misfire is damaging the catalytic converter right now, so do not drive the car far — test it in the shop and keep any run short. Keep hands, hair, and clothing clear of the belt and the fan, work in fresh air because exhaust gas is poisonous, and never reach across a running engine.</p><p><strong>The case, as you find it:</strong> Car 1 sets P0302, a misfire in cylinder 2; its drop test shows cylinder 2 makes almost no difference when disabled. Car 2 misfires in cylinder 3, and neither the coil swap nor the injector swap moves it. Car 3 sets P0300, a random misfire. Car 4 misfires in 2 of its 4 cylinders, both on the same side of the engine. Car 5 misfires only under load, never at idle. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — A car has a flashing check-engine light and a misfire. What do you do first? 1) Drive it far to see if the light goes out 2) Do not drive it far: a flashing light means an active misfire is damaging the catalytic converter right now, so test it in the shop and keep the run short 3) Clear the code and drive it 4) Ignore the light — it is only a warning",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mis_safety",
            "expected": 2,
            "hint": "Step 0 governs: a flashing light means unburned fuel is burning inside the converter and can melt it. Driving far (1) risks the converter, clearing the code (3) hides the fault, and ignoring it (4) lets the damage continue."
          }
        ]
      },
      {
        "label": "FRAMING — Step 0: The scenario states the code is P0302, a misfire in cylinder 2. What kind of fault is this? 1) A random misfire affecting all cylinders 2) A single-cylinder misfire in cylinder 2 — test that cylinder first 3) A fuel-cap fault 4) An oxygen sensor fault",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mis_framing",
            "expected": 2,
            "hint": "P0302 names cylinder 2, so it is a single-cylinder misfire. A random misfire (1) is P0300, a fuel cap (3) is an EVAP code, and an oxygen sensor (4) has its own code."
          }
        ]
      },
      {
        "label": "DECISION — The drop test shows cylinder 2 makes almost no difference when disabled, while the other cylinders each make a clear drop. What does that prove? 1) Cylinder 2 is healthy 2) Cylinder 2 is the weak cylinder — it was already contributing little 3) The fuel pump has failed 4) The battery is flat",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mis_drop",
            "expected": 2,
            "hint": "A weak cylinder makes little difference when disabled, because it was doing little work. A healthy cylinder (1) makes a clear drop, and a pump (3) or battery (4) fault would affect all cylinders."
          }
        ]
      },
      {
        "label": "DECISION — You swap the coil from cylinder 2 with the coil from cylinder 4, and the misfire moves to cylinder 4. What does that prove? 1) The coil is faulty — the misfire followed it 2) The injector is faulty 3) Cylinder 2 is mechanically worn 4) The fuel pump is weak",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mis_coil",
            "expected": 1,
            "hint": "The misfire followed the coil to cylinder 4, so the coil is the faulty part. An injector fault (2) would follow the injector, a worn cylinder (3) would stay with cylinder 2, and a weak pump (4) would affect all cylinders."
          }
        ]
      },
      {
        "label": "COMPUTED — A second car has a misfire in cylinder 3. You swap its coil with cylinder 1 and the misfire stays in cylinder 3. You swap its injector with cylinder 1 and the misfire stays in cylinder 3. How many swap tests have ruled out spark and fuel for that cylinder? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mis_swaps",
            "expected": 2,
            "hint": "Two swap tests: the coil swap ruled out spark, and the injector swap ruled out fuel. What is left is mechanical, so the next test is compression."
          }
        ]
      },
      {
        "label": "DECISION — That second car still misfires in cylinder 3 after both swaps. What is the next test? 1) Replace the coil again 2) Test the compression of cylinder 3 — the fault is likely mechanical 3) Replace the fuel pump 4) Clear the codes",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mis_next",
            "expected": 2,
            "hint": "Spark and fuel are ruled out, so the cylinder's mechanical health is next — a compression or leakdown test. Replacing the coil again (1) repeats a ruled-out test, the pump (3) affects all cylinders, and clearing codes (4) erases evidence."
          }
        ]
      },
      {
        "label": "DECISION — A third car sets P0300, a random misfire, with no single cylinder standing out. What does that point at? 1) One bad spark plug 2) Something affecting all cylinders at once, such as a vacuum leak or low fuel pressure 3) One bad coil 4) One clogged injector",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mis_random",
            "expected": 2,
            "hint": "A random misfire means no single cylinder stands out, so the cause is shared by all cylinders. One plug (1), one coil (3), or one injector (4) would set a single-cylinder code."
          }
        ]
      },
      {
        "label": "COMPUTED — A fourth car misfires in 2 of its 4 cylinders. How many cylinders are misfiring? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mis_count",
            "expected": 2,
            "hint": "The scenario states 2 of its 4 cylinders are misfiring, so the count is 2."
          }
        ]
      },
      {
        "label": "DECISION — That fourth car misfires in 2 cylinders on the same side of the engine. What should you check next? 1) Only the spark plugs 2) What those 2 cylinders share — their coils, their injectors, or a fault on that side of the engine, such as a vacuum leak on that bank 3) The fuel cap 4) The tyres",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mis_bank",
            "expected": 2,
            "hint": "Two cylinders on the same side sharing a fault points at what they share — their bank's air, fuel, or ignition supply. Plugs alone (1) ignore the pattern, and the fuel cap (3) and tyres (4) are unrelated."
          }
        ]
      },
      {
        "label": "DECISION — A fifth car misfires only under load, never at idle. What does that suggest? 1) A weak coil or plug that cannot light the mixture when the engine is working hard 2) A flat battery 3) A dirty cabin filter 4) A loose fuel cap",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mis_load",
            "expected": 1,
            "hint": "Under load the mixture is harder to light, so a weak coil or plug fails there first while idling fine. A battery (2) affects starting, the cabin filter (3) affects cabin air, and the fuel cap (4) is an EVAP fault."
          }
        ]
      },
      {
        "label": "COMPUTED — The shop tested 5 cars in this lab. Cars 1, 2, and 5 had their faults found by a swap test. How many cars is that? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mis_swapcount",
            "expected": 3,
            "hint": "Cars 1, 2, and 5 had their faults found by a swap test — 3 cars."
          }
        ]
      },
      {
        "label": "DECISION — The lab is done. What is the right way to close it? 1) Replace every coil in every car 2) Record which cylinder misfired, what each swap test proved, and the next test for each car, then repair only the part the test named 3) Clear all the codes 4) Tell the customers the misfires will fix themselves",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "mis_close",
            "expected": 2,
            "hint": "A misfire lab closes with a record of the cylinder, the swap results, and the next test — and only the part the test named is replaced. Replacing everything (1) wastes parts, clearing codes (3) erases evidence, and misfires do not fix themselves (4)."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "misfire-diagnosis.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — A car has a flashing check-engine light and a misfire. What do you do first? 1) Drive it far to see if the light goes out 2) Do not drive it far: a flashing light means an active misfire is damaging the catalytic converter right now, so test it in the shop and keep the run short 3) Clear the code and drive it 4) Ignore the light — it is only a warning\",\n\"FRAMING — Step 0: The scenario states the code is P0302, a misfire in cylinder 2. What kind of fault is this? 1) A random misfire affecting all cylinders 2) A single-cylinder misfire in cylinder 2 — test that cylinder first 3) A fuel-cap fault 4) An oxygen sensor fault\",\n\"DECISION — The drop test shows cylinder 2 makes almost no difference when disabled, while the other cylinders each make a clear drop. What does that prove? 1) Cylinder 2 is healthy 2) Cylinder 2 is the weak cylinder — it was already contributing little 3) The fuel pump has failed 4) The battery is flat\",\n\"DECISION — You swap the coil from cylinder 2 with the coil from cylinder 4, and the misfire moves to cylinder 4. What does that prove? 1) The coil is faulty — the misfire followed it 2) The injector is faulty 3) Cylinder 2 is mechanically worn 4) The fuel pump is weak\",\n\"COMPUTED — A second car has a misfire in cylinder 3. You swap its coil with cylinder 1 and the misfire stays in cylinder 3. You swap its injector with cylinder 1 and the misfire stays in cylinder 3. How many swap tests have ruled out spark and fuel for that cylinder? (Enter the number.)\",\n\"DECISION — That second car still misfires in cylinder 3 after both swaps. What is the next test? 1) Replace the coil again 2) Test the compression of cylinder 3 — the fault is likely mechanical 3) Replace the fuel pump 4) Clear the codes\",\n\"DECISION — A third car sets P0300, a random misfire, with no single cylinder standing out. What does that point at? 1) One bad spark plug 2) Something affecting all cylinders at once, such as a vacuum leak or low fuel pressure 3) One bad coil 4) One clogged injector\",\n\"COMPUTED — A fourth car misfires in 2 of its 4 cylinders. How many cylinders are misfiring? (Enter the number.)\",\n\"DECISION — That fourth car misfires in 2 cylinders on the same side of the engine. What should you check next? 1) Only the spark plugs 2) What those 2 cylinders share — their coils, their injectors, or a fault on that side of the engine, such as a vacuum leak on that bank 3) The fuel cap 4) The tyres\",\n\"DECISION — A fifth car misfires only under load, never at idle. What does that suggest? 1) A weak coil or plug that cannot light the mixture when the engine is working hard 2) A flat battery 3) A dirty cabin filter 4) A loose fuel cap\",\n\"COMPUTED — The shop tested 5 cars in this lab. Cars 1, 2, and 5 had their faults found by a swap test. How many cars is that? (Enter the number.)\",\n\"DECISION — The lab is done. What is the right way to close it? 1) Replace every coil in every car 2) Record which cylinder misfired, what each swap test proved, and the next test for each car, then repair only the part the test named 3) Clear all the codes 4) Tell the customers the misfires will fix themselves\",\n"
  }
];
