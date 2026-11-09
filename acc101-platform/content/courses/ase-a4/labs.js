// ase-a4 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
module.exports = [
  {
    "id": "alignment-numbers",
    "title": "Alignment Numbers — Read the Printout",
    "introHtml": "<p><strong>Job ticket #A4-11 — Alignment check, family sedan.</strong> Customer: the car pulls left and the front tires are wearing on their edges. The car is on the alignment rack and the machine has printed its readings. Your task: read the printout, work out which angles are out of range, and say what each one would cause — then decide what to fix first. The printout's acceptable ranges are the vehicle maker's settings for this car, loaded in the alignment computer.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> The car is on a level alignment rack with the wheels chocked and the lift locks set before anyone works under it. Never work under a car held by a jack alone, and keep hands clear of the turn plates while the wheels are being steered. Check the tire pressures against the door-jamb placard before any reading is taken — a low tire changes the ride height, and ride height changes the angles.</p><p><strong>The printout, as the machine gives it:</strong> Acceptable camber range, each front wheel: -0.5 to +0.5 degrees. Left front camber: -0.8 degrees, tire worn on its inside edge. Right front camber: +0.6 degrees, tire worn on its outside edge. Left front toe: +0.25 degrees; right front toe: -0.05 degrees. Front tires show feathered wear. Left caster is lower than right caster and the car pulls left. Rear thrust angle is out of range, front angles are in range after adjustment except one. Four angles were out of range before the repair; one is still out of range after the first adjustment. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — Before the alignment work starts, the car is on the lift and a wheel is off. A coworker suggests working under the car while it is held by the jack alone to save time. What do you do? 1) Agree — it will only take a minute 2) Refuse: the car must rest on the lift locks or jack stands before anyone works under it 3) Work from the side only 4) Lower the car and skip the job",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "al_safety",
            "expected": 2,
            "hint": "Step 0 governs: a jack is a lifting device, not a support. Working under a car on a jack alone (1) risks the car falling; working from the side (3) does not make the job safe, and skipping the job (4) is not needed — the fix is proper support."
          }
        ]
      },
      {
        "label": "FRAMING — The alignment printout for a sedan states the acceptable camber range is -0.5 to +0.5 degrees on each front wheel. What kind of numbers are these ranges? 1) The vehicle makers settings for this car, from the alignment computer 2) A guess that works for every car 3) The tire makers maximum pressure 4) The legal limit for all vehicles",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "al_framing",
            "expected": 1,
            "hint": "Alignment ranges are the vehicle maker's settings for that exact vehicle, loaded in the alignment computer. They are not a universal guess (2), a tire pressure (3), or a legal limit (4)."
          }
        ]
      },
      {
        "label": "COMPUTED — The printout shows left front camber -0.8 degrees. The acceptable range is -0.5 to +0.5 degrees. How far outside the range is the reading, in tenths of a degree? (Enter the number of tenths: 0.8 minus 0.5 is 0.3 degrees, which is 3 tenths.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "al_camber_out",
            "expected": 3,
            "hint": "The reading is -0.8 and the nearest edge of the range is -0.5, so it is 0.8 - 0.5 = 0.3 degrees outside the range, which is 3 tenths of a degree."
          }
        ]
      },
      {
        "label": "DECISION — The left front camber is -0.8 degrees (range -0.5 to +0.5) and the tire is worn on its inside edge. Which angle explains the wear? 1) Camber — too much negative camber loads the inside edge 2) Caster 3) Toe 4) Thrust angle",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "al_camber_wear",
            "expected": 1,
            "hint": "Inside-edge wear is a camber symptom, and -0.8 is too much negative camber. Caster (2) affects feel and pull, toe (3) feathers the tread, and thrust angle (4) affects tracking."
          }
        ]
      },
      {
        "label": "COMPUTED — The printout shows right front camber +0.6 degrees (range -0.5 to +0.5). How far outside the range is it, in tenths of a degree? (Enter the number of tenths: 0.6 minus 0.5 is 0.1 degrees, which is 1 tenth.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "al_camber_r",
            "expected": 1,
            "hint": "The reading is +0.6 and the nearest edge is +0.5, so it is 0.6 - 0.5 = 0.1 degrees outside the range, which is 1 tenth of a degree."
          }
        ]
      },
      {
        "label": "DECISION — The right front tire is worn on its outside edge and its camber is +0.6 degrees. What is the correct first step? 1) Adjust the camber and ignore the wear 2) Inspect for a bent or worn part that moved the camber, then set the alignment 3) Rotate the tires and send the car out 4) Inflate the tire to its sidewall maximum",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "al_camber_fix",
            "expected": 2,
            "hint": "An out-of-range angle can mean a bent or worn part; the part is found and fixed first, then the alignment is set. Adjusting around a bent part (1) will not hold, rotation (3) hides the wear, and the sidewall maximum (4) is not the correct pressure."
          }
        ]
      },
      {
        "label": "COMPUTED — The printout shows left front toe +0.25 degrees and right front toe -0.05 degrees. Total toe is the sum of the two sides. What is the total toe, in hundredths of a degree? (Enter the number of hundredths: 0.25 plus -0.05 is 0.20 degrees, which is 20 hundredths.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "al_toe_total",
            "expected": 20,
            "hint": "Total toe = 0.25 + (-0.05) = 0.20 degrees, which is 20 hundredths of a degree. Add the two sides together, keeping the signs."
          }
        ]
      },
      {
        "label": "DECISION — The front tires show feathered wear — a sharp edge on one side of each tread block. Which angle is the likely cause? 1) Camber 2) Toe — it drags the tire sideways and feathers the tread 3) Caster 4) Ride height",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "al_toe_wear",
            "expected": 2,
            "hint": "Feathered wear is the classic toe symptom: the tire is dragged sideways as it rolls. Camber (1) wears one edge smoothly, caster (3) affects feel, and ride height (4) is a cause of angle changes, not the wear pattern itself."
          }
        ]
      },
      {
        "label": "DECISION — The left caster is lower than the right caster, and the car pulls to the left. Which side does a car pull toward? 1) The side with more caster 2) The side with less caster 3) The side with the newer tire 4) Neither — caster never causes a pull",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "al_pull",
            "expected": 2,
            "hint": "A car pulls toward the side with less caster, which is the less stable side. More caster (1) is the stable side, a newer tire (3) does not cause a pull, and caster (4) does cause pulls when it is unequal."
          }
        ]
      },
      {
        "label": "DECISION — The rear thrust angle is out of range, but the front angles are all in range. What should be done first? 1) Set the front angles again 2) Correct the rear first — it sets the direction the car travels 3) Rotate the tires 4) Ignore the rear, it does not matter",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "al_thrust",
            "expected": 2,
            "hint": "The rear thrust angle sets the car's direction, so the front is set to match it. Re-setting the front (1) hides the problem, rotation (3) does not fix an angle, and the rear (4) matters — a bad thrust angle makes the car crab."
          }
        ]
      },
      {
        "label": "COMPUTED — The printout shows 4 angles out of range before the repair and 1 angle still out of range after the first adjustment. How many angles were brought into range? (Enter the number: 4 minus 1.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "al_fixed",
            "expected": 3,
            "hint": "Four out of range minus one still out of range = 3 brought into range. The one remaining angle still needs work before the job is finished."
          }
        ]
      },
      {
        "label": "DECISION — After the adjustments, one angle is still outside its range on the printout. What is the correct close to the job? 1) Return the car — one angle is close enough 2) Find why that angle will not come into range (worn or bent part, or a missed adjustment), fix it, and recheck 3) Change the printout 4) Deflate a tire to move the reading",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "al_close",
            "expected": 2,
            "hint": "A reading still in the red is not a finished job. The cause is found and fixed and the angles are rechecked. Returning it (1) leaves the tire wearing, changing the printout (3) is dishonest, and deflating a tire (4) fakes the reading."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "alignment-numbers.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — Before the alignment work starts, the car is on the lift and a wheel is off. A coworker suggests working under the car while it is held by the jack alone to save time. What do you do? 1) Agree — it will only take a minute 2) Refuse: the car must rest on the lift locks or jack stands before anyone works under it 3) Work from the side only 4) Lower the car and skip the job\",\n\"FRAMING — The alignment printout for a sedan states the acceptable camber range is -0.5 to +0.5 degrees on each front wheel. What kind of numbers are these ranges? 1) The vehicle makers settings for this car, from the alignment computer 2) A guess that works for every car 3) The tire makers maximum pressure 4) The legal limit for all vehicles\",\n\"COMPUTED — The printout shows left front camber -0.8 degrees. The acceptable range is -0.5 to +0.5 degrees. How far outside the range is the reading, in tenths of a degree? (Enter the number of tenths: 0.8 minus 0.5 is 0.3 degrees, which is 3 tenths.)\",\n\"DECISION — The left front camber is -0.8 degrees (range -0.5 to +0.5) and the tire is worn on its inside edge. Which angle explains the wear? 1) Camber — too much negative camber loads the inside edge 2) Caster 3) Toe 4) Thrust angle\",\n\"COMPUTED — The printout shows right front camber +0.6 degrees (range -0.5 to +0.5). How far outside the range is it, in tenths of a degree? (Enter the number of tenths: 0.6 minus 0.5 is 0.1 degrees, which is 1 tenth.)\",\n\"DECISION — The right front tire is worn on its outside edge and its camber is +0.6 degrees. What is the correct first step? 1) Adjust the camber and ignore the wear 2) Inspect for a bent or worn part that moved the camber, then set the alignment 3) Rotate the tires and send the car out 4) Inflate the tire to its sidewall maximum\",\n\"COMPUTED — The printout shows left front toe +0.25 degrees and right front toe -0.05 degrees. Total toe is the sum of the two sides. What is the total toe, in hundredths of a degree? (Enter the number of hundredths: 0.25 plus -0.05 is 0.20 degrees, which is 20 hundredths.)\",\n\"DECISION — The front tires show feathered wear — a sharp edge on one side of each tread block. Which angle is the likely cause? 1) Camber 2) Toe — it drags the tire sideways and feathers the tread 3) Caster 4) Ride height\",\n\"DECISION — The left caster is lower than the right caster, and the car pulls to the left. Which side does a car pull toward? 1) The side with more caster 2) The side with less caster 3) The side with the newer tire 4) Neither — caster never causes a pull\",\n\"DECISION — The rear thrust angle is out of range, but the front angles are all in range. What should be done first? 1) Set the front angles again 2) Correct the rear first — it sets the direction the car travels 3) Rotate the tires 4) Ignore the rear, it does not matter\",\n\"COMPUTED — The printout shows 4 angles out of range before the repair and 1 angle still out of range after the first adjustment. How many angles were brought into range? (Enter the number: 4 minus 1.)\",\n\"DECISION — After the adjustments, one angle is still outside its range on the printout. What is the correct close to the job? 1) Return the car — one angle is close enough 2) Find why that angle will not come into range (worn or bent part, or a missed adjustment), fix it, and recheck 3) Change the printout 4) Deflate a tire to move the reading\",\n"
  },
  {
    "id": "handling-noise-diagnosis",
    "title": "Handling & Noise Diagnosis — Find the Fault",
    "introHtml": "<p><strong>Job ticket #A4-12 — Handling complaint, family sedan.</strong> Customer: it clunks over bumps on the left front, the steering wheel shakes at highway speed, and the car groans when turning at parking speed. Your task: sort the complaint by when and where it happens, match each symptom to a system, and use the lift inspection and the tire rotation to name the faulty parts.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any road test, check the car for a loose wheel, a failed ball joint, or a brake fault — if any of those is present, the car is not driven. On the lift, the car rests on the lift locks or jack stands with the wheels chocked; never work under a car held by a jack alone. Keep hands clear of the spring and the joints while using a pry bar.</p><p><strong>The case, as you find it:</strong> The clunk happens over bumps on the left front only. The left front stabilizer-bar link is loose by hand. The car groans when the wheel is turned at parking speed. At highway speed the steering wheel vibrates; the seat does not. The tires are rotated front to rear and the vibration moves to the seat. On the lift, a pry bar shows the left front ball joint moving when it should not. A grinding noise changes with road speed. The inspection finds 3 worn parts on the left front and 1 on the right front. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — A customer brings in a car with a clunk over bumps and a steering wheel that feels loose. On the lift you find a ball joint with visible play. What do you do first? 1) Road-test the car at highway speed to hear the clunk better 2) Do not road-test it: a failed ball joint can separate, so the car stays parked until the joint is replaced 3) Tighten the joint with a wrench 4) Grease it and send the car out",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hn_safety",
            "expected": 2,
            "hint": "Step 0 governs: a failed ball joint can separate and cause loss of control, so the car is not driven. A highway road test (1) risks exactly that failure, tightening (3) does not fix a worn joint, and grease (4) does not restore a worn joint."
          }
        ]
      },
      {
        "label": "FRAMING — A customer says: it clunks over bumps on the left front, only when the road is rough. What does the timing of the complaint point at first? 1) The suspension on the left front 2) The brakes 3) The engine 4) The exhaust",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hn_framing",
            "expected": 1,
            "hint": "A noise only over bumps points at suspension parts moving on that corner. Brakes (2) show up when braking, the engine (3) shows up with engine speed, and the exhaust (4) is a later suspect, not the first."
          }
        ]
      },
      {
        "label": "DECISION — The clunk happens over bumps and the left front stabilizer-bar link is loose when checked by hand. What is the likely cause? 1) The stabilizer-bar link — a loose link clunks as the suspension moves 2) The brake pads 3) The battery 4) The air filter",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hn_clunk",
            "expected": 1,
            "hint": "A loose stabilizer-bar link clunks over bumps as the bar moves. Brake pads (2) make noise when braking, the battery (3) makes no noise, and the air filter (4) makes no suspension noise."
          }
        ]
      },
      {
        "label": "DECISION — The car groans when the steering wheel is turned at parking speed. Which part is a likely cause? 1) A dry strut bearing — it turns with the steering and groans under load 2) A flat tire 3) The fuel pump 4) The horn",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hn_groan",
            "expected": 1,
            "hint": "The strut bearing turns with the steering, so a dry one groans at low speed. A flat tire (2) thumps, a fuel pump (3) makes no steering noise, and the horn (4) is electrical."
          }
        ]
      },
      {
        "label": "DECISION — A vibration is felt in the steering wheel at highway speed but not at low speed. Where is the likely cause? 1) The front tires and wheels — imbalance or runout 2) The rear brakes 3) The exhaust 4) The engine mounts",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hn_vib_front",
            "expected": 1,
            "hint": "Steering-wheel vibration at speed points at the front tires and wheels. Rear brakes (2) are felt in the pedal or seat, the exhaust (3) is a later suspect, and engine mounts (4) vibrate with engine speed, not road speed."
          }
        ]
      },
      {
        "label": "DECISION — A vibration is felt in the seat and floor, not the steering wheel. Where is the likely cause? 1) The front tires 2) The rear tires and wheels 3) The steering rack 4) The horn",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hn_vib_rear",
            "expected": 2,
            "hint": "Seat and floor vibration points at the rear tires and wheels. Front tires (1) are felt in the steering wheel, the rack (3) is felt in the wheel, and the horn (4) makes no vibration."
          }
        ]
      },
      {
        "label": "COMPUTED — The shop rotates the tires front to rear. Before the rotation the vibration was in the steering wheel; after it, the vibration is felt in the seat. How many corners did the vibration move? (Enter the number of corners it moved: from front to rear is 1 step.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hn_rotate",
            "expected": 1,
            "hint": "The vibration followed the tires from the front to the rear — one step — which proves the fault is in the tire or wheel that moved, not in the suspension of the original corner."
          }
        ]
      },
      {
        "label": "DECISION — After the rotation the vibration followed the tire. What does that prove? 1) The fault is in the tire or wheel that moved 2) The fault is in the suspension of the original corner 3) The fault is in the steering rack 4) Nothing — rotation proves nothing",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hn_follow",
            "expected": 1,
            "hint": "A fault that follows the tire belongs to the tire. A suspension fault (2) stays in its corner, the rack (3) does not move with a tire, and rotation (4) is a real diagnostic test."
          }
        ]
      },
      {
        "label": "DECISION — On the lift, a pry bar under the left front tire shows the ball joint moving when it should not. What does that mean? 1) The ball joint is worn and has play — it must be replaced 2) The ball joint is fine 3) The tire is flat 4) The spring is broken",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hn_pry",
            "expected": 1,
            "hint": "Movement where there should be none is a failed joint. A good joint (2) does not move, a flat tire (3) is checked by pressure, and a broken spring (4) shows as a sagging corner, not joint play."
          }
        ]
      },
      {
        "label": "DECISION — A grinding noise changes with road speed and gets louder in a turn. What is the more likely cause? 1) A wheel bearing or a brake 2) A dry bushing 3) A loose stabilizer-bar link 4) The air filter",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hn_grind",
            "expected": 1,
            "hint": "Grinding that follows speed fits a wheel bearing or a brake. A dry bushing (2) squeaks, a loose link (3) clunks over bumps, and the air filter (4) makes no grinding noise."
          }
        ]
      },
      {
        "label": "COMPUTED — The inspection finds 3 worn parts on the left front (ball joint, stabilizer link, bushing) and 1 worn part on the right front (bushing). How many worn parts were found in total? (Enter the number: 3 plus 1.)",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hn_count",
            "expected": 4,
            "hint": "Three on the left plus one on the right = 4 worn parts in total. Each one is replaced before the alignment, because alignment cannot fix worn parts."
          }
        ]
      },
      {
        "label": "DECISION — All worn parts are replaced and the alignment is set. What is the final step before returning the car? 1) Return it at once 2) Road-test it to confirm the clunk and the vibration are gone 3) Wash it 4) Change the oil",
        "cells": [
          ""
        ],
        "inputs": [
          {
            "col": 1,
            "key": "hn_close",
            "expected": 2,
            "hint": "The road test is the only check that proves the complaint is actually gone. Returning it at once (1) skips that proof, washing (3) is cosmetic, and an oil change (4) is unrelated."
          }
        ]
      }
    ],
    "passing": 70,
    "csvFilename": "handling-noise-diagnosis.csv",
    "csv": "Decision point,Your call\n\"SAFETY CALL — A customer brings in a car with a clunk over bumps and a steering wheel that feels loose. On the lift you find a ball joint with visible play. What do you do first? 1) Road-test the car at highway speed to hear the clunk better 2) Do not road-test it: a failed ball joint can separate, so the car stays parked until the joint is replaced 3) Tighten the joint with a wrench 4) Grease it and send the car out\",\n\"FRAMING — A customer says: it clunks over bumps on the left front, only when the road is rough. What does the timing of the complaint point at first? 1) The suspension on the left front 2) The brakes 3) The engine 4) The exhaust\",\n\"DECISION — The clunk happens over bumps and the left front stabilizer-bar link is loose when checked by hand. What is the likely cause? 1) The stabilizer-bar link — a loose link clunks as the suspension moves 2) The brake pads 3) The battery 4) The air filter\",\n\"DECISION — The car groans when the steering wheel is turned at parking speed. Which part is a likely cause? 1) A dry strut bearing — it turns with the steering and groans under load 2) A flat tire 3) The fuel pump 4) The horn\",\n\"DECISION — A vibration is felt in the steering wheel at highway speed but not at low speed. Where is the likely cause? 1) The front tires and wheels — imbalance or runout 2) The rear brakes 3) The exhaust 4) The engine mounts\",\n\"DECISION — A vibration is felt in the seat and floor, not the steering wheel. Where is the likely cause? 1) The front tires 2) The rear tires and wheels 3) The steering rack 4) The horn\",\n\"COMPUTED — The shop rotates the tires front to rear. Before the rotation the vibration was in the steering wheel; after it, the vibration is felt in the seat. How many corners did the vibration move? (Enter the number of corners it moved: from front to rear is 1 step.)\",\n\"DECISION — After the rotation the vibration followed the tire. What does that prove? 1) The fault is in the tire or wheel that moved 2) The fault is in the suspension of the original corner 3) The fault is in the steering rack 4) Nothing — rotation proves nothing\",\n\"DECISION — On the lift, a pry bar under the left front tire shows the ball joint moving when it should not. What does that mean? 1) The ball joint is worn and has play — it must be replaced 2) The ball joint is fine 3) The tire is flat 4) The spring is broken\",\n\"DECISION — A grinding noise changes with road speed and gets louder in a turn. What is the more likely cause? 1) A wheel bearing or a brake 2) A dry bushing 3) A loose stabilizer-bar link 4) The air filter\",\n\"COMPUTED — The inspection finds 3 worn parts on the left front (ball joint, stabilizer link, bushing) and 1 worn part on the right front (bushing). How many worn parts were found in total? (Enter the number: 3 plus 1.)\",\n\"DECISION — All worn parts are replaced and the alignment is set. What is the final step before returning the car? 1) Return it at once 2) Road-test it to confirm the clunk and the vibration are gone 3) Wash it 4) Change the oil\",\n"
  }
];
