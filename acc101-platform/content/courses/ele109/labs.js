// ele109 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
// These are paper/diagram/calculation exercises. They do not prove hands-on skill.
module.exports = [
  {
    "id": "ladder-logic-timer-counter",
    "title": "Ladder Logic: Timer & Counter Program",
    "introHtml": "<p><strong>Job ticket #9101 — Parts-sorting conveyor for a small assembly plant.</strong> Customer: an assembly plant; a conveyor carries mixed metal and plastic parts, and a pneumatic pusher must sort metal parts to the left bin and plastic parts to the right bin. Site: a PLC-controlled conveyor with an inductive proximity sensor for metal detection, a photoelectric sensor for part presence, and two pneumatic pushers. Your task: work out the timer delay, the counter settings, and the ladder logic calls that make the sorter work. Read the machine data in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=-TY3NG71s0o\" target=\"_blank\" rel=\"noopener\">Studio 5000 Timers and Counters Explained (TON, TOF, RTO, CTU, CTD)</a> — timers and counters with the preset, accumulated value, and done bit shown live in the programming software.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on this conveyor, its PLC panel, or its pneumatic system: de-energize the electrical circuit, lock it out and tag it out, and verify it is dead with a meter rated for the voltage. Isolate and bleed off the pneumatic supply before working on the pushers — a cylinder can move on stored air even with the power off. Never work on a machine that is energized, never force an output on a running machine, and never bypass a guard interlock or an E-stop to test a program. All hands-on work is done under a licensed supervisor. This lab is a paper exercise — no live equipment is involved.</p><p><strong>The machine data:</strong> The conveyor runs at 250 mm per second. The metal sensor is 500 mm before the left pusher, and the plastic sensor is 750 mm before the right pusher. Each batch is 100 parts. The timer's time base is 0.01 seconds. The left pusher must fire for 1 second when a metal part reaches it, and the right pusher must fire for 1 second when a plastic part reaches it. The conveyor must stop when either bin is full, and the machine must stop if a guard door is opened.</p><p><strong>The numbers to work out:</strong> Pusher delay = distance / speed. Timer preset = delay / time base. Counter preset = batch size. For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — You need to test whether the left pusher fires when its output is driven. What must you do first? 1) Force the output on while the conveyor is running 2) Make the machine safe — de-energize and lock it out, isolate and bleed the air, tell the operator and the supervisor, and force only one point at a time 3) Bypass the guard interlock so the test runs faster 4) Force it from the HMI while the machine is running",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "lc_safety", "expected": 2, "hint": "Step 0 governs: forcing bypasses the program and the safety interlocks. The machine must be safe before any force is applied, one point at a time, documented, and removed after the test." }]
      },
      {
        "label": "CALC — The metal sensor is 500 mm before the left pusher, and the conveyor runs at 250 mm per second. How many seconds after the sensor detects a metal part should the pusher fire? Give the answer in seconds.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "lc_delay", "expected": 2, "hint": "Delay = distance / speed = 500 / 250 = 2 seconds. A TON with a 2-second delay, driven by the metal detection, fires the pusher when the part arrives." }]
      },
      {
        "label": "CALC — The timer's time base is 0.01 seconds and the delay is 2 seconds. What preset do you enter in the TON? Give the preset as a whole number.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "lc_preset", "expected": 200, "hint": "Preset = delay / time base = 2 / 0.01 = 200. Always check the time base before setting a preset — 200 on a 1-second base would be 200 seconds." }]
      },
      {
        "label": "CALC — The plastic sensor is 750 mm before the right pusher, and the conveyor runs at 250 mm per second. What is the right pusher's delay in seconds?",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "lc_delay_r", "expected": 3, "hint": "Delay = 750 / 250 = 3 seconds. The right pusher's TON preset is 3 / 0.01 = 300." }]
      },
      {
        "label": "LOGIC CALL — Each batch is 100 parts. Which counter and preset stop the conveyor at the end of a batch? 1) CTD with a preset of 100 2) CTU with a preset of 100, whose done bit opens the conveyor's seal-in rung 3) CTU with a preset of 10 4) A TON with a preset of 100",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "lc_counter", "expected": 2, "hint": "A CTU counts up to 100 and its done bit stops the conveyor. A CTD counts down to zero, which is not the batch size. A TON measures time, not parts." }]
      },
      {
        "label": "LOGIC CALL — The plastic counter must count a part only when the photoelectric sensor fires AND the inductive sensor does NOT detect metal. How is that rung written? 1) An XIC of the photoelectric sensor in series with an XIC of the inductive sensor 2) An XIC of the photoelectric sensor in series with an XIO of the inductive sensor 3) An XIO of the photoelectric sensor in series with an XIC of the inductive sensor 4) An XIC of the photoelectric sensor alone",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "lc_rung", "expected": 2, "hint": "Plastic means a part is present (photoelectric XIC true) and it is not metal (inductive XIO true, because the sensor is off). An XIC of the inductive sensor would count metal parts as plastic." }]
      },
      {
        "label": "FAULT CALL — The metal counter counts twice for each metal part. What is the most likely cause? 1) The preset is too large 2) The inductive sensor is bouncing, giving two rising edges per part 3) The time base is too small 4) The conveyor is too slow",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "lc_fault", "expected": 2, "hint": "A counter counts once per rising edge. A bouncing sensor gives two rising edges per part and the counter counts twice. The fix is a debounce timer or a one-shot, not a bigger preset." }]
      },
      {
        "label": "ORDER — Put these commissioning steps in order: 1) Run in automatic mode with parts 2) Check the wiring with the power off 3) Run in manual mode and test each motion alone 4) Run at full speed. Which step comes first? Give the step's number from this list (1, 2, 3, or 4).",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "lc_order", "expected": 2, "hint": "Commissioning goes from safe and simple to full operation: wiring check with the power off first, then manual mode, then automatic with parts, then full speed." }]
      }
    ],
    "passing": 70
  },
  {
    "id": "analog-scaling-4-20ma",
    "title": "Analog Scaling: 4–20 mA to Engineering Units",
    "introHtml": "<p><strong>Job ticket #9102 — Temperature and pressure monitoring for a process tank.</strong> Customer: a process plant; a tank's temperature and pressure must be read by the PLC and shown on the HMI, with an alarm when the temperature exceeds its limit. Site: a temperature transmitter reading 4–20 mA for 0–200°F and a pressure transmitter reading 4–20 mA for 0–100 psi, both wired to the same 12-bit analog input module. Your task: scale the raw counts into engineering units, work out the alarm settings, and make the right fault calls. Read the transmitter data in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=ZS3W7uBdQok\" target=\"_blank\" rel=\"noopener\">PLC Analog Inputs and Signals</a> — the 4–20 mA and 0–10 V signals, how the module converts them to raw counts, and what the numbers mean.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on this tank, its transmitters, or the PLC panel: de-energize the circuit, lock it out and tag it out, and verify it is dead with a meter rated for the voltage. The tank may hold hot liquid under pressure — never open a transmitter connection on a live process, never trust an HMI reading to tell you a tank is safe, and never bypass a temperature alarm to keep a process running. All hands-on work is done under a licensed supervisor. This lab is a paper exercise — no live equipment is involved.</p><p><strong>The transmitter data:</strong> Temperature transmitter: 4–20 mA for 0–200°F. Pressure transmitter: 4–20 mA for 0–100 psi. Analog input module: 12-bit, raw range 0–32,767 counts (0 counts at 4 mA, 32,767 counts at 20 mA). The temperature alarm is set at 180°F. The HMI shows the scaled temperature and pressure.</p><p><strong>The numbers to work out:</strong> Engineering value = (raw / 32,767) × engineering range. Raw counts for a value = (value / engineering range) × 32,767. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The HMI shows the tank temperature at 150°F, but you need to work on the tank. What do you do first? 1) Trust the HMI and start work 2) Follow the lockout/tagout procedure — isolate the tank's energy sources, lock them off, tag them, and verify de-energized before any work 3) Open the transmitter connection to check the signal 4) Bypass the temperature alarm so it does not trip while you work",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "as_safety", "expected": 2, "hint": "Step 0 governs: an HMI reading is not a lockout, and a tank may hold hot liquid under pressure. Isolate, lock, tag, and verify before any work. Never bypass an alarm." }]
      },
      {
        "label": "CALC — The temperature transmitter's raw reading is 16,384 counts. What is the temperature in °F? Give the answer as a whole number.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "as_temp", "expected": 100, "hint": "Fraction of scale = 16,384 / 32,767 = 0.5. Temperature = 0.5 × 200 = 100°F. Half scale on the raw counts is half scale on the engineering range." }]
      },
      {
        "label": "CALC — The pressure transmitter's raw reading is 24,576 counts. What is the pressure in psi? Give the answer as a whole number.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "as_press", "expected": 75, "hint": "Fraction of scale = 24,576 / 32,767 = 0.75. Pressure = 0.75 × 100 = 75 psi." }]
      },
      {
        "label": "CALC — The temperature alarm is set at 180°F. What raw count should the alarm trigger at? Give the answer as a whole number.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "as_alarm", "expected": 29490, "hint": "Fraction = 180 / 200 = 0.9. Raw counts = 0.9 × 32,767 = 29,490.3, so 29,490 counts. The alarm triggers when the raw value reaches that count." }]
      },
      {
        "label": "FAULT CALL — The temperature transmitter's raw reading is 0 counts. What does this mean? 1) The temperature is 0°F 2) An open-loop fault — a broken wire or a failed transmitter, because 0 mA is below the 4 mA live zero 3) The transmitter is calibrated 4) The PLC is in program mode",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "as_fault", "expected": 2, "hint": "0 counts means 0 mA, below the 4 mA live zero. That is an open-loop fault, not a 0°F temperature. Check the wiring and the transmitter before trusting any reading." }]
      },
      {
        "label": "CALC — The 12-bit module reads the 0–100 psi pressure transmitter. What is the smallest pressure change it can detect? Give the answer in psi, to three decimal places.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "as_res", "expected": 0.024, "hint": "A 12-bit module has 4,096 counts. Each count is 100 / 4,096 = 0.0244 psi, about 0.024 psi." }]
      },
      {
        "label": "FAULT CALL — The temperature reading jumps around by several degrees on the HMI. The transmitter is new. What is the most likely cause? 1) The transmitter is the wrong type 2) Noise or a grounding problem — check the shielded twisted-pair cable, its one-end grounding, and the cable routing 3) The PLC's scan is too fast 4) The HMI's colors are wrong",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "as_noise", "expected": 2, "hint": "Noise corrupts small analog signals. A shield grounded at both ends, an unshielded cable, or analog wiring next to power wiring is the usual cause — not the transmitter." }]
      },
      {
        "label": "SETUP CALL — The HMI must show the temperature in °F, but the PLC's raw value is in counts. Where does the scaling happen? 1) In the transmitter 2) In the PLC program, with a scale instruction that maps the raw range to the engineering range 3) In the HMI's colors 4) In the cable",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "as_scale", "expected": 2, "hint": "The PLC program scales the raw counts into engineering units with a scale instruction, using the module's actual raw range from its datasheet. The transmitter only produces the 4–20 mA signal." }]
      }
    ],
    "passing": 70
  }
];
