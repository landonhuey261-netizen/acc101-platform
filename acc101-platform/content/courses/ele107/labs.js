// ele107 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
// These are paper/diagram/calculation exercises. They do not prove hands-on skill.
module.exports = [
  {
    "id": "motor-nameplate-math",
    "title": "Motor Nameplate Math",
    "introHtml": "<p><strong>Job ticket #7101 — Replacement motor for the shop air compressor.</strong> Customer: a small machine shop; the compressor motor has burned out and must be replaced with the correct motor and the correct protection. Site: a 480 V, three-phase shop with a 208Y/120 V panel. Your task: read the failed motor's nameplate, work out the numbers that size the conductors and the overload, and make the right replacement calls. Read the nameplate in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=2GKiSdZxkkc\" target=\"_blank\" rel=\"noopener\">How to Read a Motor Nameplate (Before You Buy a Converter or VFD)</a> — a field-by-field walkthrough of a real nameplate and the five numbers you need before sizing anything downstream.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on this motor or its circuit: de-energize the circuit, lock it out and tag it out, and verify it is dead with a meter rated for the voltage. Never work on a motor circuit that is energized, never defeat the overload to test a motor, and never trust a nameplate reading you have not verified against the motor in front of you. All hands-on work is done under a licensed supervisor. This lab is a paper exercise — no live equipment is involved.</p><p><strong>The failed motor's nameplate reads:</strong> HP 10 · Volts 230/460 · Amps 26.0/13.0 · PH 3 · HZ 60 · RPM 1,750 · Frame 215T · Service factor 1.15 · Insulation class F · Enclosure TEFC · NEMA design B · Code letter G · Duty CONT. The shop supply is 480 V, three-phase. The motor will be connected for 460 V. The locked-rotor code letter G means 5.6–6.3 kVA per hp.</p><p><strong>The numbers to work out:</strong> Full-load amps at 460 V is 13.0 A. Conductor ampacity per NEC 430.22 is 125% of FLA. Locked-rotor current is roughly 6 times FLA (code letter G, mid-range). The replacement motor must match: 10 hp, 1,750 rpm, 460 V, three-phase, frame 215T, TEFC, design B. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The compressor motor has burned out and the circuit is still energized. What do you do first? 1) Open the motor terminal box and read the nameplate 2) De-energize the circuit, lock it out and tag it out, and verify it is dead before touching anything 3) Reset the overload and try to start it once more 4) Hose the motor down to cool it",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "np_safety", "expected": 2, "hint": "Step 0 governs: no work on an energized motor circuit. Opening the box live (1), resetting and restarting a burned motor (3), or hosing it down (4) are all dangerous. De-energize, lock out, tag out, and verify dead first." }]
      },
      {
        "label": "CALC — The motor is connected for 460 V. What is its full-load current (FLA) in amps?",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "np_fla", "expected": 13, "hint": "The nameplate reads 26.0/13.0 A. The first number is the low-voltage (230 V) current; the second is the high-voltage (460 V) current. At 460 V the FLA is 13.0 A." }]
      },
      {
        "label": "CALC — What is the minimum conductor ampacity required by NEC 430.22 (125% of FLA)? Give the answer in amps, to one decimal place.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "np_cond", "expected": 16.3, "hint": "125% of the 460 V FLA: 13.0 × 1.25 = 16.25 A, which rounds to 16.3 A. The conductors must have an ampacity of at least this value." }]
      },
      {
        "label": "CALC — Using code letter G (about 6 times FLA), estimate the locked-rotor current in amps.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "np_lra", "expected": 78, "hint": "Locked-rotor current is roughly 6 × FLA: 6 × 13.0 = 78 A. The starter and the supply must tolerate this brief surge." }]
      },
      {
        "label": "CALC — The motor's service factor is 1.15. How many horsepower can it carry continuously? Give the answer in hp, to one decimal place.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "np_sf", "expected": 11.5, "hint": "10 hp × 1.15 = 11.5 hp. Remember that service factor is a safety margin, not a rating to plan the load around." }]
      },
      {
        "label": "REPLACEMENT CALL — A supplier offers a 10 hp, 1,750 rpm, 460 V, three-phase motor in frame 215T, TEFC — but NEMA Design C instead of Design B. The compressor is a normal-starting load. Which is the right call? 1) Accept it — horsepower and frame match, so it will work 2) Reject it — the design letter is part of the specification and must match unless the load is checked 3) Accept it and rewire the shop for 230 V 4) Accept it and remove the overload",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "np_repl", "expected": 2, "hint": "Design C has high starting torque and different starting current from Design B. Horsepower and frame matching is not enough — the design letter, speed, and enclosure must all match, or the replacement must be checked against the load. Option 2 is the careful call; option 1 ignores the design letter, and options 3 and 4 are wrong on their face." }]
      },
      {
        "label": "CALC — The replacement motor is connected for 230 V by mistake on the 480 V shop supply (it is a 230/460 V motor wired low). The nameplate current at 230 V is 26.0 A. What happens to the current draw? 1) It stays at 13.0 A 2) It roughly doubles to about 26 A and the motor overheats 3) It drops to 6.5 A 4) It goes to zero",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "np_wrongvolt", "expected": 2, "hint": "At half the design voltage the motor draws roughly double the current to make the same torque — 13.0 A becomes about 26 A — and it overheats. A motor wired for the wrong voltage must be reconnected per the diagram, de-energized and locked out." }]
      },
      {
        "label": "CALC — The motor's synchronous speed at 60 Hz is 1,800 rpm and its nameplate speed is 1,750 rpm. What is the slip in rpm?",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "np_slip", "expected": 50, "hint": "Slip = synchronous speed − rotor speed = 1,800 − 1,750 = 50 rpm, about 2.8%." }]
      }
    ],
    "passing": 70
  },
  {
    "id": "transformer-sizing-protection",
    "title": "Transformer Sizing & Protection",
    "introHtml": "<p><strong>Job ticket #7102 — New transformer for the shop's 208Y/120 V panel.</strong> Customer: the same machine shop; a new 208Y/120 V panel is being fed from the 480 V shop service through a dry-type transformer. Site: the transformer will be a three-phase, delta-wye unit, 480 V primary to 208Y/120 V secondary. Your task: work out the load in kVA, pick the standard transformer size, calculate both full-load currents, and size the primary and secondary protection under NEC Table 450.3(B) (2023 NEC). Read the load list in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=Otjmm8875rI\" target=\"_blank\" rel=\"noopener\">Transformer OCPD - Pri. &amp; Sec. Protection, Table 450.3(B)</a> — a worked walkthrough of primary-only versus primary-and-secondary protection with the percentages and the rounding rules.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on this transformer or its feeders: de-energize the circuit, lock it out and tag it out, and verify it is dead with a meter rated for the voltage. Never work on a transformer that is energized, never change a tap with the transformer energized, and never bond the secondary neutral in two places. All hands-on work is done under a licensed supervisor. This lab is a paper exercise — no live equipment is involved.</p><p><strong>The load list (all three-phase, 208 V, continuous loads):</strong> Lighting 8 kVA · Receptacles 6 kVA · Small motors 12 kVA · HVAC 10 kVA. Total connected load = 36 kVA. Continuous loads are sized at 125%. Standard dry-type transformer ratings: 15, 30, 45, 75, 112.5, 150 kVA. Standard breaker sizes (NEC Table 240.6(A)): 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250 A.</p><p><strong>The rules to apply (NEC 2023, Table 450.3(B)):</strong> Primary-only protection: 125% of primary FLA (9 A and up), Note 1 allows rounding up to the next standard size. Primary and secondary protection: primary up to 250% (no rounding up — round down), secondary up to 125% (Note 1 allows rounding up). Conductors at 125% of FLA. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — You arrive to check the transformer installation and find the primary feeder energized with the transformer cover off. What do you do first? 1) Check the tap setting while it is live 2) Step back, de-energize the circuit, lock it out and tag it out, and verify it is dead before any inspection 3) Tighten the loose connections with an insulated screwdriver 4) Measure the secondary voltage with your bare hands",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "tf_safety", "expected": 2, "hint": "Step 0 governs: never work on energized transformer parts. Tap changes and connection work are done de-energized, locked out, and verified dead. Options 1, 3, and 4 all put you in contact with live parts." }]
      },
      {
        "label": "CALC — The connected load is 36 kVA, all continuous. What is the required kVA after the 125% continuous-load factor? Give the answer in kVA.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "tf_load", "expected": 45, "hint": "36 kVA × 1.25 = 45 kVA. Continuous loads are sized at 125%." }]
      },
      {
        "label": "CALC — The required size is 45 kVA. Which standard transformer rating do you select? 1) 30 kVA 2) 45 kVA 3) 75 kVA 4) 15 kVA",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "tf_size", "expected": 2, "hint": "45 kVA is itself a standard rating, so a 45 kVA transformer is the right size — it carries the 45 kVA requirement exactly. 30 kVA is undersized, and 75 kVA is oversized for this load." }]
      },
      {
        "label": "CALC — For the 45 kVA, 480 V primary, what is the primary full-load current? Give the answer in amps, to one decimal place.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "tf_pri", "expected": 54.1, "hint": "Three-phase FLA = kVA × 1,000 / (V × √3): 45,000 / (480 × 1.732) = 45,000 / 831.4 = 54.1 A." }]
      },
      {
        "label": "CALC — For the 45 kVA, 208 V secondary, what is the secondary full-load current? Give the answer in amps, to one decimal place.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "tf_sec", "expected": 124.9, "hint": "45,000 / (208 × 1.732) = 45,000 / 360.3 = 124.9 A." }]
      },
      {
        "label": "CALC — With primary-only protection, what is the maximum primary overcurrent device size? Give the answer in amps.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "tf_ponly", "expected": 70, "hint": "125% of 54.1 A = 67.6 A. Note 1 allows rounding up to the next standard size: 70 A." }]
      },
      {
        "label": "CALC — With primary and secondary protection, what is the maximum primary device size? Give the answer in amps.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "tf_p250", "expected": 125, "hint": "250% of 54.1 A = 135.3 A. There is no rounding up on the 250% allowance, so round down to the next standard size: 125 A." }]
      },
      {
        "label": "CALC — With primary and secondary protection, what is the maximum secondary device size? Give the answer in amps.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "tf_s125", "expected": 175, "hint": "125% of 124.9 A = 156.1 A. Note 1 allows rounding up to the next standard size: 175 A." }]
      },
      {
        "label": "GROUNDING CALL — The secondary neutral is bonded at the transformer and the electrician proposes bonding it again at the new panel for extra safety. Which is correct? 1) Bond it at both places — more bonding is safer 2) Bond it at one place only, per NEC 250.30 3) Do not bond it anywhere 4) Bond it at the panel only, not the transformer",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "tf_bond", "expected": 2, "hint": "A separately derived system gets exactly one system bonding jumper (NEC 250.30). A second bond splits neutral current onto the grounding conductors — a code violation and a safety hazard, not extra safety." }]
      }
    ],
    "passing": 70
  }
];
