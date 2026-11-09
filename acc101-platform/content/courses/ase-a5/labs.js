// ase-a5 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "brake-pull-diagnosis",
    "title": "Brake-Pull Diagnosis — Find Why It Pulls",
    "introHtml": "<p><strong>Job ticket #A5-11 — Brake pull, family sedan.</strong> Customer: the car pulls hard to the right when braking, and the right front wheel smells hot after a short drive. Your task: decide whether the pull is a brake fault, find the dragging part, and close the job with a bleed and a road test.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> A hot, dragging brake and a hard pull are not safe to test at speed: inspect the car on the lift first, with the car supported on the lift locks or jack stands and the wheels chocked. Never spray water on a hot brake to cool it — it can crack the rotor. Keep hands clear of the hot wheel and caliper, and wear gloves and eye protection when handling brake fluid, which damages paint and irritates skin.</p><p><strong>The case, as you find it:</strong> The car pulls right only when braking and drives straight when not braking. The right front caliper is hot after a short drive and its pads are worn much thinner than the left front pads. The right front guide pins are dry and corroded and the caliper will not slide by hand. After the pins are cleaned and greased, the wheel still drags. The right front pads measure 3 units thick; the left front pads measure 9 units thick. The right front pads are contaminated with grease. The left front tire is low on pressure and the car pulls left all the time. The bleed order is: right rear, left rear, right front, left front. The job found 2 faulty parts on the right front (guide pins and hose) and 1 faulty item in the pads (contamination). For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before the brake work starts, a customer says the car pulls hard to the right when braking and the right front wheel smells hot. What do you do first? 1) Road-test it at highway speed to feel the pull better 2) Do not road-test it at speed: a dragging brake can overheat and a pull at speed is a loss of control risk — inspect it on the lift first 3) Spray the hot wheel with water to cool it 4) Replace the pads and send it out",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bp_safety",
            "expected": 2,
            "hint": "Step 0 governs: a hot, dragging brake and a hard pull are not safe to test at speed. Spraying water on a hot brake (3) can crack the rotor, and replacing pads (4) treats the symptom, not the dragging caliper, hose, or pin that causes it."
          }
        ]
      },
      {
        "label": "FRAMING — The car pulls to the right ONLY when the brakes are applied. It drives straight when not braking. What does the timing point at first? 1) A brake fault on one side 2) The alignment 3) The tires 4) The engine",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bp_framing",
            "expected": 1,
            "hint": "A pull that appears only under braking is a brake fault — a stuck caliper, stuck pin, collapsed hose, or contaminated pad on one side. Alignment (2) and tires (3) pull all the time, and the engine (4) does not steer the car."
          }
        ]
      },
      {
        "label": "DECISION — The right front caliper is hot after a short drive and the right front pads are worn much thinner than the left front pads. What does the heat and the uneven wear mean? 1) The right caliper is dragging — it is not releasing fully 2) The left caliper is dragging 3) The pads are new 4) The tires are low",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bp_drag",
            "expected": 1,
            "hint": "A hot wheel plus pads worn thinner on that side means that caliper is dragging and braking even when the pedal is released. The left side (2) would be hot if it were dragging, new pads (3) wear evenly, and low tires (4) do not heat one caliper."
          }
        ]
      },
      {
        "label": "DECISION — The right front guide pins are dry and corroded and the caliper will not slide by hand. What is the likely cause of the drag? 1) A stuck guide pin — the caliper cannot slide back to release the outer pad 2) A worn rotor 3) A low battery 4) A flat tire",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bp_pin",
            "expected": 1,
            "hint": "A caliper that cannot slide stays applied on one side. A worn rotor (2) causes a pulse, not a drag, the battery (3) does not affect a caliper, and a flat tire (4) does not stop a caliper sliding."
          }
        ]
      },
      {
        "label": "DECISION — The guide pins are cleaned and greased and the caliper slides freely, but the right front wheel still drags after braking. What is the next suspect? 1) A collapsed brake hose — it lets fluid in but not back out, trapping pressure in the caliper 2) The brake pads 3) The tire pressure 4) The spark plugs",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bp_hose",
            "expected": 1,
            "hint": "A collapsed hose traps pressure and keeps the caliper applied after the pedal is released. New pads (2) would drag too until the hose is fixed, tire pressure (3) does not trap fluid, and spark plugs (4) are an engine part."
          }
        ]
      },
      {
        "label": "COMPUTED — The inspection measures the right front pads at 3 units thick and the left front pads at 9 units thick. The difference between the two sides is how many units? (Enter the number: 9 minus 3.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bp_wear_diff",
            "expected": 6,
            "hint": "Left 9 minus right 3 = 6 units of difference. Uneven wear this large confirms one side is doing far more work — the dragging side."
          }
        ]
      },
      {
        "label": "DECISION — The right front pads are contaminated with grease on their friction surface. What should be done with them? 1) Clean them and reuse them 2) Replace them — grease in the friction material cannot be cleaned out and the pad will not grip evenly 3) Swap them to the left side 4) Ignore them",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bp_contam",
            "expected": 2,
            "hint": "Grease soaked into friction material cannot be cleaned out, and the pad will grip weakly and unevenly, causing a pull. Cleaning (1) does not remove soaked-in grease, swapping sides (3) moves the pull, and ignoring them (4) leaves a brake fault."
          }
        ]
      },
      {
        "label": "DECISION — The left front tire is low on pressure and the car pulls left all the time, braking or not. Is this a brake fault? 1) Yes — replace the left caliper 2) No — a pull that is present without braking is a tire or alignment fault, not a brake fault 3) Yes — bleed the brakes 4) No — it is the engine",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bp_tire_pull",
            "expected": 2,
            "hint": "A pull present without braking cannot be a brake fault, because the brakes are not applied. The low tire (and the alignment) are the suspects. Replacing the caliper (1) or bleeding (3) treats a brake that is not faulty, and the engine (4) does not steer the car."
          }
        ]
      },
      {
        "label": "DECISION — After the hose is replaced and the pads are changed, the pedal is soft and spongy. What happened? 1) Air entered the lines when the system was opened 2) The pads are too thick 3) The tires are flat 4) The battery is low",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bp_soft",
            "expected": 1,
            "hint": "Opening the system let air in, and air compresses — the system needs bleeding. Thick pads (2) make the pedal firm, not spongy, flat tires (3) do not affect the pedal, and the battery (4) does not affect the pedal."
          }
        ]
      },
      {
        "label": "COMPUTED — The shop bleeds the brakes. It bleeds 4 wheels in order, furthest from the master cylinder first. The order given is: right rear, left rear, right front, left front. Which wheel is bled second? 1) Right rear 2) Left rear 3) Right front 4) Left front. (Enter the option number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bp_bleed_order",
            "expected": 2,
            "hint": "The order is right rear (1st), left rear (2nd), right front (3rd), left front (4th). The second wheel bled is the left rear, option 2."
          }
        ]
      },
      {
        "label": "DECISION — The brakes are bled, the pedal is firm, and the car stops straight on the road test. What is the final step before returning the car? 1) Return it at once 2) Check the fluid level, look for leaks at every connection, and confirm the wheels are torqued 3) Wash it 4) Change the oil",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bp_close",
            "expected": 2,
            "hint": "The final checks are the fluid level, a leak check at every connection that was opened, and wheel torque — the road test alone does not check for a slow leak. Returning it at once (1) skips those checks, washing (3) is cosmetic, and an oil change (4) is unrelated."
          }
        ]
      },
      {
        "label": "COMPUTED — The job found 2 faulty parts on the right front (guide pins and hose) and 1 faulty item on the right front pads (contamination). How many faulty items were found on the right front in total? (Enter the number: 2 plus 1.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "bp_count",
            "expected": 3,
            "hint": "Two parts plus one contaminated pad set = 3 faulty items on the right front. Each one is fixed before the car is returned, because any one of them alone would bring the pull back."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "brake-pull-diagnosis.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — Before the brake work starts, a customer says the car pulls hard to the right when braking and the right front wheel smells hot. What do you do first? 1) Road-test it at highway speed to feel the pull better 2) Do not road-test it at speed: a dragging brake can overheat and a pull at speed is a loss of control risk — inspect it on the lift first 3) Spray the hot wheel with water to cool it 4) Replace the pads and send it out\",\n\"FRAMING — The car pulls to the right ONLY when the brakes are applied. It drives straight when not braking. What does the timing point at first? 1) A brake fault on one side 2) The alignment 3) The tires 4) The engine\",\n\"DECISION — The right front caliper is hot after a short drive and the right front pads are worn much thinner than the left front pads. What does the heat and the uneven wear mean? 1) The right caliper is dragging — it is not releasing fully 2) The left caliper is dragging 3) The pads are new 4) The tires are low\",\n\"DECISION — The right front guide pins are dry and corroded and the caliper will not slide by hand. What is the likely cause of the drag? 1) A stuck guide pin — the caliper cannot slide back to release the outer pad 2) A worn rotor 3) A low battery 4) A flat tire\",\n\"DECISION — The guide pins are cleaned and greased and the caliper slides freely, but the right front wheel still drags after braking. What is the next suspect? 1) A collapsed brake hose — it lets fluid in but not back out, trapping pressure in the caliper 2) The brake pads 3) The tire pressure 4) The spark plugs\",\n\"COMPUTED — The inspection measures the right front pads at 3 units thick and the left front pads at 9 units thick. The difference between the two sides is how many units? (Enter the number: 9 minus 3.)\",\n\"DECISION — The right front pads are contaminated with grease on their friction surface. What should be done with them? 1) Clean them and reuse them 2) Replace them — grease in the friction material cannot be cleaned out and the pad will not grip evenly 3) Swap them to the left side 4) Ignore them\",\n\"DECISION — The left front tire is low on pressure and the car pulls left all the time, braking or not. Is this a brake fault? 1) Yes — replace the left caliper 2) No — a pull that is present without braking is a tire or alignment fault, not a brake fault 3) Yes — bleed the brakes 4) No — it is the engine\",\n\"DECISION — After the hose is replaced and the pads are changed, the pedal is soft and spongy. What happened? 1) Air entered the lines when the system was opened 2) The pads are too thick 3) The tires are flat 4) The battery is low\",\n\"COMPUTED — The shop bleeds the brakes. It bleeds 4 wheels in order, furthest from the master cylinder first. The order given is: right rear, left rear, right front, left front. Which wheel is bled second? 1) Right rear 2) Left rear 3) Right front 4) Left front. (Enter the option number.)\",\n\"DECISION — The brakes are bled, the pedal is firm, and the car stops straight on the road test. What is the final step before returning the car? 1) Return it at once 2) Check the fluid level, look for leaks at every connection, and confirm the wheels are torqued 3) Wash it 4) Change the oil\",\n\"COMPUTED — The job found 2 faulty parts on the right front (guide pins and hose) and 1 faulty item on the right front pads (contamination). How many faulty items were found on the right front in total? (Enter the number: 2 plus 1.)\",\n"
  },
  {
    "id": "abs-code-diagnosis",
    "title": "ABS Code Diagnosis — Find Why the Light Is On",
    "introHtml": "<p><strong>Job ticket #A5-12 — ABS warning light, family sedan.</strong> Customer: the ABS light is on, the brakes feel normal, and the driver wants to know if the car is safe to drive. Your task: explain what the light means, follow the scan-tool code to the faulty circuit, and prove the repair with a road test.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> The ABS light means ABS is off, not that the brakes have failed — but the car is driven gently, and a hard stop may lock a wheel. Diagnose with a scan tool before replacing any part, and never replace the ABS modulator on a guess. Work with the car supported safely, and keep hands clear of moving parts during the road test.</p><p><strong>The case, as you find it:</strong> The scan tool shows an ABS code for the right front wheel-speed sensor. The sensor's wiring is chafed through where it passes the suspension. The ABS, traction-control, and stability-control lights are all on at once with the same sensor code. The module cycles pressure 10 times per second at one wheel during ABS operation. After the wiring is repaired the light comes back on the road test. A second scan shows 2 codes: right front and left rear wheel-speed sensors. The second car's job takes the same 3 steps plus 1 extra step to replace a sensor. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — A car comes in with the ABS warning light on and the driver says the brakes feel normal. What do you do first? 1) Tell the driver the brakes have failed and the car cannot move 2) Explain that the normal brakes still work but ABS is off, so the car is driven gently and a hard stop may lock a wheel — then diagnose with a scan tool 3) Ignore the light 4) Replace the ABS modulator at once",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ab_safety",
            "expected": 2,
            "hint": "Step 0 governs: the ABS light means ABS is off, not that the brakes have failed. The car can be driven gently to a repair, with the driver warned that a hard stop may lock a wheel. Ignoring it (3) leaves a safety system off, and replacing the modulator (4) is guessing before diagnosis."
          }
        ]
      },
      {
        "label": "FRAMING — The scan tool shows an ABS code for the right front wheel-speed sensor. What does that code point at first? 1) The ABS modulator 2) The right front wheel-speed sensor and its wiring 3) The master cylinder 4) The brake pads",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ab_framing",
            "expected": 2,
            "hint": "The code names the right front wheel-speed sensor circuit — the sensor itself or its wiring. The modulator (1) is a later suspect, the master cylinder (3) is a hydraulic part, and the pads (4) do not set ABS codes."
          }
        ]
      },
      {
        "label": "DECISION — The right front wheel-speed sensor's wiring is chafed through where it passes the suspension. What is the likely cause of the ABS light? 1) The chafed wiring — it breaks the sensor's signal to the module 2) The brake pads 3) The tires 4) The battery",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ab_wire",
            "expected": 1,
            "hint": "A broken sensor signal means the module cannot read that wheel's speed, so it sets the code and turns ABS off. Pads (2) do not set ABS codes, tires (3) do not break a sensor signal, and the battery (4) is a later check, not the cause here."
          }
        ]
      },
      {
        "label": "DECISION — The ABS, traction-control, and stability-control lights are all on at once, with the same right front sensor code. What does that mean? 1) Three separate faults 2) One shared fault — all three systems use the same wheel-speed sensor 3) The modulator has failed 4) The tires are flat",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ab_three",
            "expected": 2,
            "hint": "All three systems share the wheel-speed sensors, so one failed sensor lights all three warnings. Three separate faults (1) would be a coincidence, the modulator (3) is not named by the code, and flat tires (4) do not set sensor codes."
          }
        ]
      },
      {
        "label": "DECISION — The driver asks what will happen in a hard stop with the ABS light on. What is the correct answer? 1) The brakes will not work at all 2) The normal brakes will work, but a wheel may lock and the car may not steer in that stop 3) Nothing changes 4) The car will stop shorter",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ab_hardstop",
            "expected": 2,
            "hint": "With ABS off, the hydraulic brakes still work, but a hard stop can lock a wheel — and a locked wheel cannot steer. The brakes have not failed (1), something has changed (3), and a locked wheel does not reliably stop shorter (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — The ABS cycle holds, releases, and reapplies pressure. The module repeats the cycle many times per second. If it cycles 10 times in one second at one wheel, how many cycles is that in 3 seconds at that wheel? (Enter the number: 10 times 3.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ab_cycles",
            "expected": 30,
            "hint": "10 cycles per second times 3 seconds = 30 cycles at that wheel. The real system cycles many times per second; the arithmetic is the point — the cycle repeats continuously while the driver holds the pedal."
          }
        ]
      },
      {
        "label": "DECISION — During a hard stop on a wet road the pedal pulses and there is a grinding noise. What should the driver do? 1) Lift off the pedal at once 2) Keep the pedal pressed firmly and steer around the obstacle — the pulsing is ABS working 3) Pump the pedal rapidly 4) Turn off the engine",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ab_pedal",
            "expected": 2,
            "hint": "The pulsing and noise are ABS working. Keeping the pedal down lets it keep working; lifting off (1) stops it, pumping (3) fights it, and turning off the engine (4) removes power steering and brakes."
          }
        ]
      },
      {
        "label": "DECISION — The sensor wiring is repaired and the code is cleared, but the ABS light comes back on the road test. What is the next step? 1) Replace the modulator at once 2) Read the code again — it may be the same sensor (a failed sensor, not just its wiring) or a new code pointing elsewhere 3) Ignore it 4) Replace the brake pads",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ab_return",
            "expected": 2,
            "hint": "A returning light means the fault is still present or a new one has appeared — the code is read again before any part is replaced. Replacing the modulator (1) is guessing, ignoring it (3) leaves ABS off, and pads (4) do not set ABS codes."
          }
        ]
      },
      {
        "label": "COMPUTED — The scan tool shows 2 codes: one for the right front wheel-speed sensor and one for the left rear wheel-speed sensor. The technician repairs both. How many sensor circuits were repaired? (Enter the number.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ab_codes",
            "expected": 2,
            "hint": "Two codes, two sensor circuits — right front and left rear. Each one is checked and repaired on its own; a code is not cleared until its circuit is fixed."
          }
        ]
      },
      {
        "label": "DECISION — After the repair, the ABS light is off and a hard stop on a wet road makes the pedal pulse and the car steers around a cone. What does that prove? 1) Nothing — the light being off is enough 2) The ABS is working: the pedal pulse and the steering in a hard stop are the system doing its job 3) The brakes are worn out 4) The tires are flat",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ab_prove",
            "expected": 2,
            "hint": "The road test proves the repair: ABS pulses the pedal and the car stays steerable in a hard stop. The light alone (1) only says no code is stored; worn brakes (3) would not pulse like ABS, and flat tires (4) would pull the car."
          }
        ]
      },
      {
        "label": "COMPUTED — The shop's ABS job took 3 steps: read the code, repair the wiring, and road-test. A second car needs the same 3 steps plus 1 extra step (replace the sensor). How many steps does the second car's job take? (Enter the number: 3 plus 1.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ab_steps",
            "expected": 4,
            "hint": "Three steps plus one extra = 4 steps. The extra step is only added when the code and the inspection point at the sensor itself, not just its wiring."
          }
        ]
      },
      {
        "label": "DECISION — The ABS is fixed and the car is returned. What should the driver be told? 1) Nothing 2) That ABS is working again, what the pulsing pedal means, and to keep the pedal down and steer in a hard stop 3) That the brakes will never fail 4) That ABS makes every stop shorter",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "ab_close",
            "expected": 2,
            "hint": "The driver is told what was fixed and what ABS feels like, so the pulsing pedal is not a surprise in the next emergency. Saying nothing (1) leaves the driver unprepared, brakes can still fail (3) is a false promise, and ABS does not make every stop shorter (4)."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "abs-code-diagnosis.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — A car comes in with the ABS warning light on and the driver says the brakes feel normal. What do you do first? 1) Tell the driver the brakes have failed and the car cannot move 2) Explain that the normal brakes still work but ABS is off, so the car is driven gently and a hard stop may lock a wheel — then diagnose with a scan tool 3) Ignore the light 4) Replace the ABS modulator at once\",\n\"FRAMING — The scan tool shows an ABS code for the right front wheel-speed sensor. What does that code point at first? 1) The ABS modulator 2) The right front wheel-speed sensor and its wiring 3) The master cylinder 4) The brake pads\",\n\"DECISION — The right front wheel-speed sensor's wiring is chafed through where it passes the suspension. What is the likely cause of the ABS light? 1) The chafed wiring — it breaks the sensor's signal to the module 2) The brake pads 3) The tires 4) The battery\",\n\"DECISION — The ABS, traction-control, and stability-control lights are all on at once, with the same right front sensor code. What does that mean? 1) Three separate faults 2) One shared fault — all three systems use the same wheel-speed sensor 3) The modulator has failed 4) The tires are flat\",\n\"DECISION — The driver asks what will happen in a hard stop with the ABS light on. What is the correct answer? 1) The brakes will not work at all 2) The normal brakes will work, but a wheel may lock and the car may not steer in that stop 3) Nothing changes 4) The car will stop shorter\",\n\"COMPUTED — The ABS cycle holds, releases, and reapplies pressure. The module repeats the cycle many times per second. If it cycles 10 times in one second at one wheel, how many cycles is that in 3 seconds at that wheel? (Enter the number: 10 times 3.)\",\n\"DECISION — During a hard stop on a wet road the pedal pulses and there is a grinding noise. What should the driver do? 1) Lift off the pedal at once 2) Keep the pedal pressed firmly and steer around the obstacle — the pulsing is ABS working 3) Pump the pedal rapidly 4) Turn off the engine\",\n\"DECISION — The sensor wiring is repaired and the code is cleared, but the ABS light comes back on the road test. What is the next step? 1) Replace the modulator at once 2) Read the code again — it may be the same sensor (a failed sensor, not just its wiring) or a new code pointing elsewhere 3) Ignore it 4) Replace the brake pads\",\n\"COMPUTED — The scan tool shows 2 codes: one for the right front wheel-speed sensor and one for the left rear wheel-speed sensor. The technician repairs both. How many sensor circuits were repaired? (Enter the number.)\",\n\"DECISION — After the repair, the ABS light is off and a hard stop on a wet road makes the pedal pulse and the car steers around a cone. What does that prove? 1) Nothing — the light being off is enough 2) The ABS is working: the pedal pulse and the steering in a hard stop are the system doing its job 3) The brakes are worn out 4) The tires are flat\",\n\"COMPUTED — The shop's ABS job took 3 steps: read the code, repair the wiring, and road-test. A second car needs the same 3 steps plus 1 extra step (replace the sensor). How many steps does the second car's job take? (Enter the number: 3 plus 1.)\",\n\"DECISION — The ABS is fixed and the car is returned. What should the driver be told? 1) Nothing 2) That ABS is working again, what the pulsing pedal means, and to keep the pedal down and steer in a hard stop 3) That the brakes will never fail 4) That ABS makes every stop shorter\",\n"
  }
];
