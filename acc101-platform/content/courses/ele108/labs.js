// ele108 — Scenario labs.
// Each row is checked on a single numeric input in column 1: an option number, a procedure step number, or a computed reading.
// These are paper/diagram/calculation exercises. They do not prove hands-on skill.
module.exports = [
  {
    "id": "ladder-diagram-start-stop",
    "title": "Ladder Diagram: Start-Stop Circuit",
    "introHtml": "<p><strong>Job ticket #8101 — New start-stop station for the shop conveyor.</strong> Customer: a small machine shop; the conveyor needs a start-stop station at each end. Site: a 480 V, three-phase conveyor motor with a 120 V control circuit fed from a control transformer. Your task: work out the ladder diagram logic, the control transformer size, and the overload setting, and make the right wiring calls. Read the circuit description in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=kHbXbK7S188\" target=\"_blank\" rel=\"noopener\">Basic Motor Control: 3 Wire Start Stop Circuit (updated)</a> — a step-by-step build of the three-wire start-stop circuit and the sealing contact that latches it in.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on this conveyor or its control panel: de-energize the circuit, lock it out and tag it out, and verify it is dead with a meter rated for the voltage. Never work on a control panel that is energized, never bypass a stop button or an interlock to test a circuit, and never fit a bigger fuse because one keeps blowing. All hands-on work is done under a licensed supervisor. This lab is a paper exercise — no live equipment is involved.</p><p><strong>The circuit:</strong> One rung. From the left rail: the stop buttons (NC) in series, then the start buttons (NO) in parallel with the sealing contact (NO auxiliary), then the overload relay's NC contact, then the contactor coil to the right rail. There are two start-stop stations, one at each end of the conveyor. The motor nameplate reads: 5 hp · 460 V · 3-phase · FLA 7.6 A · service factor 1.15. The control circuit has one contactor coil (60 VA inrush, 10 VA sealed) and two pilot lights (2 VA each). The overload is set per NEC 430.32.</p><p><strong>The numbers to work out:</strong> Overload setting = 125% of FLA (service factor 1.15 or higher). Control transformer size = sealed VA of everything on at once, plus the inrush VA of the largest coil pulling in, rounded up to the next standard size (50, 75, 100, 150, 250, 500 VA). For each row, enter the option number, the step number, or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — You arrive to wire the new station and find the control panel cover off with the power on. What do you do first? 1) Start wiring — control circuits are low voltage and safe 2) De-energize the circuit, lock it out and tag it out, and verify it is dead before any work 3) Tape the live wires out of the way and keep working 4) Work with one hand behind your back",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "ld_safety", "expected": 2, "hint": "Step 0 governs: no work in an energized panel. Control voltage is lower, but the panel also contains live power conductors. De-energize, lock out, tag out, and verify dead first." }]
      },
      {
        "label": "WIRING CALL — The conveyor has two start-stop stations, one at each end. How are the two start buttons wired? 1) In series 2) In parallel 3) One in series and one in parallel 4) They share one wire to the coil",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "ld_start", "expected": 2, "hint": "Start buttons go in parallel so either one can start the motor. In series, both would have to be pressed at once." }]
      },
      {
        "label": "WIRING CALL — How are the two stop buttons wired? 1) In parallel 2) In series 3) One in series and one in parallel 4) They share one wire to the coil",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "ld_stop", "expected": 2, "hint": "Stop buttons go in series so either one can stop the motor. In parallel, both would have to be pressed at once." }]
      },
      {
        "label": "CALC — The motor FLA is 7.6 A and the service factor is 1.15. What is the overload relay setting per NEC 430.32? Give the answer in amps, to one decimal place.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "ld_ol", "expected": 9.5, "hint": "Service factor 1.15 or higher means 125% of FLA: 7.6 × 1.25 = 9.5 A." }]
      },
      {
        "label": "CALC — The control circuit has one coil (60 VA inrush, 10 VA sealed) and two pilot lights (2 VA each). What is the minimum control transformer size? Give the answer in VA.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "ld_xfmr", "expected": 100, "hint": "Sealed VA = 10 + 2 + 2 = 14 VA. Add the largest inrush: 14 + 60 = 74 VA. The next standard size up is 100 VA." }]
      },
      {
        "label": "DIAGRAM CALL — On the ladder diagram, where does the contactor coil go? 1) On the left, next to the left rail 2) On the right, next to the right rail 3) In the middle of the rung 4) Above the rails",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "ld_coil", "expected": 2, "hint": "Coils go on the right, next to the right rail; contacts go on the left and middle. A coil in the middle breaks the left-to-right reading." }]
      },
      {
        "label": "FAULT CALL — The motor starts but stops the moment the start button is released. What is the most likely fault? 1) A blown main fuse 2) The sealing contact is not holding the coil in — it is burned, misadjusted, or wired in series instead of in parallel 3) The motor is reversed 4) The control transformer is oversized",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "ld_fault", "expected": 2, "hint": "The motor starts, so the power circuit and the start button work. The latch is failing: the sealing contact is not holding the coil in. A blown fuse would stop it from starting at all." }]
      },
      {
        "label": "ORDER — Put these rungs in the order they should be traced when reading the ladder diagram: 1) The pilot light rung 2) The start-stop rung with the coil 3) The E-stop rung. Which rung is read first? Give the rung's number from this list (1, 2, or 3).",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "ld_order", "expected": 3, "hint": "Ladder diagrams are read top to bottom, and the E-stop rung (the safety input that can drop the coil out) is drawn first, above the start-stop rung. The pilot light rung comes after the coil rung." }]
      }
    ],
    "passing": 70
  },
  {
    "id": "vfd-sizing-setup",
    "title": "VFD Sizing & Setup",
    "introHtml": "<p><strong>Job ticket #8102 — VFD for the shop's ventilation fan.</strong> Customer: the same machine shop; the ventilation fan must run at variable speed to match the shop's needs and save energy. Site: a 10 hp, 4-pole, 460 V, three-phase fan motor, full-load current 14 A, running on a 480 V supply. Your task: size the VFD, work out the speeds and voltages at the set frequencies, estimate the energy savings, and make the right setup calls. Read the motor data in the task, then answer each row.</p><p><strong>Watch it done:</strong> <a href=\"https://www.youtube.com/watch?v=yEPe7RDtkgo\" target=\"_blank\" rel=\"noopener\">Variable Frequency Drives Explained - VFD Basics IGBT inverter</a> — the rectifier, DC bus, and inverter, the V/Hz ratio, and the PWM waveform explained step by step.</p>",
    "taskHtml": "<p><strong>Step 0 — Safety first.</strong> Before any work on this fan, its motor, or the VFD: de-energize the circuit, lock it out and tag it out, and verify it is dead with a meter rated for the voltage. Remember that a VFD's DC bus capacitors stay charged after the power is removed — wait for the drive's discharge time (shown on its nameplate) and verify the bus voltage is zero before touching anything inside the drive. Never work on a VFD that is energized. All hands-on work is done under a licensed supervisor. This lab is a paper exercise — no live equipment is involved.</p><p><strong>The motor data:</strong> 10 hp · 4-pole · 460 V · 3-phase · FLA 14 A · rated speed 1,750 rpm at 60 Hz. The fan uses 7.5 kW at full speed. The VFD must be sized for the motor's full-load current, not just its horsepower, and it must be an inverter-duty application because the fan will run slowly for long periods. The V/Hz ratio is 460 / 60 = 7.67 V/Hz. Fan power follows the cube law: P ∝ speed³.</p><p><strong>The numbers to work out:</strong> Synchronous speed Ns = 120f / P. VFD output voltage = V/Hz × frequency. Fan power at a speed fraction = full power × (fraction)³. For each row, enter the option number or the computed value asked for.</p>",
    "headers": [
      "Decision point",
      "Your call"
    ],
    "rows": [
      {
        "label": "SAFETY CALL — The VFD has been switched off at the disconnect, but you need to open the drive. What must you do first? 1) Open it immediately — off means safe 2) Wait for the DC bus discharge time on the drive's nameplate, then verify the bus voltage is zero before touching anything inside 3) Short the DC bus with a screwdriver to discharge it 4) Open it with insulated gloves and hope for the best",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "vfd_safety", "expected": 2, "hint": "Step 0 governs: the DC bus capacitors stay charged after power is removed. Wait the nameplate discharge time and verify the bus voltage is zero. Shorting the bus (3) is dangerous and damages the drive." }]
      },
      {
        "label": "CALC — The VFD is set to 30 Hz. What is the motor's synchronous speed in rpm?",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "vfd_ns", "expected": 900, "hint": "Ns = 120 × 30 / 4 = 900 rpm. Halving the frequency halves the speed." }]
      },
      {
        "label": "CALC — At 30 Hz, what voltage should the VFD supply to hold the V/Hz ratio constant? Give the answer in volts (round to the nearest whole volt).",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "vfd_v", "expected": 230, "hint": "V/Hz = 460 / 60 = 7.67 V/Hz. At 30 Hz: 7.67 × 30 = 230 V. Holding the ratio keeps the motor's torque." }]
      },
      {
        "label": "CALC — The fan uses 7.5 kW at full speed. At 80% speed, about how much power does it use? Give the answer in kW, to one decimal place.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "vfd_p80", "expected": 3.8, "hint": "Cube law: 0.8³ = 0.512. 7.5 × 0.512 = 3.84 kW, about 3.8 kW — roughly half the power at 80% speed." }]
      },
      {
        "label": "CALC — At 50% speed, about how much power does the fan use? Give the answer in kW, to two decimal places.",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "vfd_p50", "expected": 0.94, "hint": "Cube law: 0.5³ = 0.125. 7.5 × 0.125 = 0.9375 kW, about 0.94 kW — roughly one-eighth of full power." }]
      },
      {
        "label": "SETUP CALL — The fan will run at 10 Hz for hours at a time. Which motor should be used? 1) The existing standard motor — it is fine at any speed 2) An inverter-duty motor with better insulation and a separate constant-speed cooling fan 3) A smaller standard motor 4) A DC motor",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "vfd_motor", "expected": 2, "hint": "At 10 Hz the shaft fan moves little air and the PWM waveform adds losses, so a standard motor overheats. An inverter-duty motor with separate cooling is the correct choice." }]
      },
      {
        "label": "SETUP CALL — The VFD is causing distortion on the shop's supply. What should be added to the drive's input? 1) A bigger motor 2) A line reactor or harmonic filter 3) A longer cable 4) A second VFD",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "vfd_harm", "expected": 2, "hint": "The distortion is harmonics from the rectifier's pulsed current draw. A line reactor or harmonic filter on the drive's input reduces it." }]
      },
      {
        "label": "SIZING CALL — The VFD must be sized from the motor's: 1) Horsepower only 2) Full-load current (14 A) — the drive's current rating must cover the motor's FLA 3) Frame size only 4) Rated speed only",
        "cells": [""],
        "inputs": [{ "col": 1, "key": "vfd_size", "expected": 2, "hint": "VFDs are sized by current. The drive's rated output current must cover the motor's full-load current of 14 A; horsepower alone is not enough, because two motors of the same horsepower can have different FLAs." }]
      }
    ],
    "passing": 70
  }
];
