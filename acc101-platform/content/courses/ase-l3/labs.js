// ase-l3 — Scenario labs.
module.exports = [
  {
    "id": "high-voltage-safety-depower",
    "title": "High-Voltage Safety & De-Power Lab",
    "introHtml": "<p><strong>Job ticket #L3-01 — Hybrid in the shop for a high-voltage battery inspection.</strong> Customer: a driver whose hybrid shows a warning light and will not go into READY. Vehicle: a hybrid with a high-voltage battery pack, orange high-voltage cables, and a service plug under the rear seat. Your task: de-power the high-voltage system safely, in the right order, and prove it dead before any inspection begins. Read the scenario in the task, then answer each decision row.</p><p><strong>Worked example first — the 12-volt test circuit (completed for you).</strong> A test circuit has a voltage of 12 volts and a resistance of 6 ohms. Using Ohm's law, I = V ÷ R, so I = 12 ÷ 6 = 2 amps. Check it the other way: V = I × R = 2 × 6 = 12 volts. The law works both ways, and you will use it in the computed rows below — every number you need is given in the row itself.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on a hybrid or EV: PPE on (insulated gloves inspected and air-tested, leather protectors over them, safety glasses, non-conductive footwear), insulated tools only, a meter rated for the job and checked on a known source. Treat every orange cable as live until you have personally proven it dead. Never touch a damaged high-voltage cable, a swollen battery case, or a pack that smells or leaks — step back and get a senior technician. Never work on a high-voltage system alone in the bay.</p><p><strong>The car, as you find it at 8:00 a.m.:</strong> (1) The hybrid shows a warning light and will not go into READY. (2) An orange high-voltage cable under the car is visibly damaged, with its insulation cut and bare wire showing. (3) The 12-volt auxiliary battery is under the hood. (4) The high-voltage service plug is under the rear seat. (5) The shop's de-power procedure has six steps, in this order: Step 1 — Put on PPE and inspect gloves and tools. Step 2 — Power the vehicle down, remove the key or fob, and keep it with you. Step 3 — Disconnect the 12-volt auxiliary battery. Step 4 — Remove the high-voltage service plug. Step 5 — Wait for the system's capacitors to discharge. Step 6 — Test for zero voltage with a properly rated meter. (6) The meter you will use is rated for the job. (7) Three low-voltage test circuits are given for the computed rows: Circuit A has 12 volts across 4 ohms. Circuit B has 12 volts across 3 ohms. Circuit C carries 2 amps through 6 ohms. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — You arrive and see the damaged orange high-voltage cable with bare wire showing. What do you do first? 1) Touch the cable to see if it is live 2) Stop: do not touch the cable, keep everyone away, and get a senior technician before any de-power work 3) Tape over the bare wire and carry on 4) Pull the cable out of the way with your bare hands",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "hv_safety", "expected": 2, "hint": "A damaged high-voltage cable with bare wire showing is live until proven otherwise — touching it (1, 4) or taping it (3) puts you in contact with roughly 200–450 V DC. Stop, keep everyone away, and get a senior technician." }]
      },
      {
        "label": "ORDER — Remove the high-voltage service plug. Which step of the six-step de-power procedure is this?",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "hv_ord_plug", "expected": 4, "hint": "Order: 1 PPE/inspect, 2 power down and keys with you, 3 disconnect 12 V, 4 remove the service plug, 5 wait for discharge, 6 test for zero voltage. The service plug is step 4." }]
      },
      {
        "label": "ORDER — Test for zero voltage with a properly rated meter. Which step of the six-step de-power procedure is this?",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "hv_ord_test", "expected": 6, "hint": "Order: 1 PPE/inspect, 2 power down, 3 disconnect 12 V, 4 remove service plug, 5 wait, 6 test for zero voltage. The meter test is the last step — the proof, not the first move." }]
      },
      {
        "label": "ORDER — Disconnect the 12-volt auxiliary battery. Which step of the six-step de-power procedure is this?",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "hv_ord_12v", "expected": 3, "hint": "Order: 1 PPE/inspect, 2 power down, 3 disconnect 12 V, 4 remove service plug, 5 wait, 6 test. The 12-volt disconnect is step 3 — it removes power from the contactors so they cannot close while you work." }]
      },
      {
        "label": "ORDER — Power the vehicle down, remove the key or fob, and keep it with you. Which step of the six-step de-power procedure is this?",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "hv_ord_keys", "expected": 2, "hint": "Order: 1 PPE/inspect, 2 power down and keys with you, 3 disconnect 12 V, 4 remove service plug, 5 wait, 6 test. Keeping the keys with you stops anyone else powering the car up while you work." }]
      },
      {
        "label": "COMPUTED — Circuit A has 12 volts across 4 ohms. Using Ohm's law (I = V divided by R), what current flows? (Enter the number of amps.)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "hv_ohm_a", "expected": 3, "hint": "I = V ÷ R = 12 ÷ 4 = 3 amps. Check: V = I × R = 3 × 4 = 12 volts." }]
      },
      {
        "label": "COMPUTED — Circuit B has 12 volts across 3 ohms. Using Ohm's law (I = V divided by R), what current flows? (Enter the number of amps.)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "hv_ohm_b", "expected": 4, "hint": "I = V ÷ R = 12 ÷ 3 = 4 amps. Check: V = I × R = 4 × 3 = 12 volts." }]
      },
      {
        "label": "COMPUTED — Circuit C carries 2 amps through 6 ohms. Using Ohm's law (V = I times R), what is the voltage? (Enter the number of volts.)",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "hv_ohm_c", "expected": 12, "hint": "V = I × R = 2 × 6 = 12 volts. Check: I = V ÷ R = 12 ÷ 6 = 2 amps." }]
      },
      {
        "label": "DECISION — Before trusting your meter on the high-voltage test, what must you do? 1) Check the meter on a known live source before the test and again after it 2) Shake the meter to see if it rattles 3) Use the meter without checking it — new meters are always right 4) Test only the terminals, never to ground",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "hv_meter", "expected": 1, "hint": "A meter with a dead battery reads zero on a live circuit, so you prove the meter works on a known source before and after the real test. Shaking it (2) proves nothing, new meters (3) can still fail, and you must test to ground as well as across the terminals (4)." }]
      },
      {
        "label": "DECISION — You air-test an insulated glove and feel air leaking from a fingertip. Correct call? 1) Tape the fingertip and use the glove 2) Retire the glove immediately and get a tested pair 3) Use the glove only for low-voltage work 4) Turn the glove inside out and use it",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "hv_glove", "expected": 2, "hint": "A leak means the insulating barrier is breached — the glove is retired, not repaired. Tape (1) does not restore a rated barrier, a failed glove is not trusted at any voltage (3), and turning it inside out (4) does not fix the hole." }]
      },
      {
        "label": "DECISION — After de-powering, your meter shows a small voltage instead of zero at the test point. Correct call? 1) Treat it as a rounding error and start work 2) Treat the system as live: stop, keep your hands out, and re-check the meter and the de-power steps 3) Wait five more seconds and start work 4) Use thinner gloves so you can feel the voltage",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "hv_small_reading", "expected": 2, "hint": "Any reading is a live circuit until proven otherwise. A small reading is evidence, not noise (1); waiting (3) does not fix a live reading; glove thickness (4) never makes a live circuit safe to touch." }]
      },
      {
        "label": "DECISION — The inspection is done and the system must be returned to service. What is the right closeout order? 1) Reinstall the service plug, reconnect the 12-volt battery, verify the car goes into READY, and record the work on the job card 2) Reconnect the 12-volt battery first, then leave the service plug out 3) Verify READY before reinstalling the service plug 4) Record the work and skip the READY check",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "hv_closeout", "expected": 1, "hint": "Closeout reverses the de-power in order: service plug back in, 12-volt battery reconnected, verify READY, and record the work. Leaving the plug out (2) leaves the car dead, READY cannot be verified without the plug (3), and skipping verification (4) leaves the repair unproven." }]
      }
    ],
    "passing": 70,
    "csvFilename": "high-voltage-safety-depower.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — You arrive and see the damaged orange high-voltage cable with bare wire showing. What do you do first? 1) Touch the cable to see if it is live 2) Stop: do not touch the cable, keep everyone away, and get a senior technician before any de-power work 3) Tape over the bare wire and carry on 4) Pull the cable out of the way with your bare hands\",\n\"ORDER — Remove the high-voltage service plug. Which step of the six-step de-power procedure is this?\",\n\"ORDER — Test for zero voltage with a properly rated meter. Which step of the six-step de-power procedure is this?\",\n\"ORDER — Disconnect the 12-volt auxiliary battery. Which step of the six-step de-power procedure is this?\",\n\"ORDER — Power the vehicle down, remove the key or fob, and keep it with you. Which step of the six-step de-power procedure is this?\",\n\"COMPUTED — Circuit A has 12 volts across 4 ohms. Using Ohm's law (I = V divided by R), what current flows? (Enter the number of amps.)\",\n\"COMPUTED — Circuit B has 12 volts across 3 ohms. Using Ohm's law (I = V divided by R), what current flows? (Enter the number of amps.)\",\n\"COMPUTED — Circuit C carries 2 amps through 6 ohms. Using Ohm's law (V = I times R), what is the voltage? (Enter the number of volts.)\",\n\"DECISION — Before trusting your meter on the high-voltage test, what must you do? 1) Check the meter on a known live source before the test and again after it 2) Shake the meter to see if it rattles 3) Use the meter without checking it — new meters are always right 4) Test only the terminals, never to ground\",\n\"DECISION — You air-test an insulated glove and feel air leaking from a fingertip. Correct call? 1) Tape the fingertip and use the glove 2) Retire the glove immediately and get a tested pair 3) Use the glove only for low-voltage work 4) Turn the glove inside out and use it\",\n\"DECISION — After de-powering, your meter shows a small voltage instead of zero at the test point. Correct call? 1) Treat it as a rounding error and start work 2) Treat the system as live: stop, keep your hands out, and re-check the meter and the de-power steps 3) Wait five more seconds and start work 4) Use thinner gloves so you can feel the voltage\",\n\"DECISION — The inspection is done and the system must be returned to service. What is the right closeout order? 1) Reinstall the service plug, reconnect the 12-volt battery, verify the car goes into READY, and record the work on the job card 2) Reconnect the 12-volt battery first, then leave the service plug out 3) Verify READY before reinstalling the service plug 4) Record the work and skip the READY check\",\n"
  }
];
