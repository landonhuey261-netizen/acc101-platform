// HVAC 117 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.

module.exports = {
  midterm: {
    title: "Midterm Exam",
    minutes: 75,
    coverage: "Modules 1–6",
    questions: [
      {
        module: 1,
        q: "A series circuit has resistors of 8 Ω, 12 Ω, and 20 Ω on an 80 V source. The current and the drop across the 20 Ω resistor are:",
        choices: ["2 A and 40 V", "2 A and 16 V", "4 A and 80 V", "1 A and 20 V"],
        answer: 0,
        explanation: "Correct (a): Total R = 8 + 12 + 20 = 40 Ω, so I = 80 ÷ 40 = 2 A, and the 20 Ω drop is 2 × 20 = 40 V. (b) 16 V is the drop across the 8 Ω resistor, not the 20 Ω. (c) 4 A would require only 20 Ω total. (d) 1 A and 20 V pair inconsistent values — with 1 A the drop across 20 Ω is 20 V, but the circuit current is 2 A."
      },
      {
        module: 1,
        q: "Two parallel branches of 8 Ω and 20 Ω are connected across 40 V. Total current is:",
        choices: ["2 A", "5 A", "7 A", "1.4 A"],
        answer: 2,
        explanation: "Correct (c): Branch currents are 40 ÷ 8 = 5 A and 40 ÷ 20 = 2 A, totaling 7 A. (a) 2 A is only the 20 Ω branch. (b) 5 A is only the 8 Ω branch. (d) 1.4 A comes from treating the branches as a 28 Ω series string (40 ÷ 28), the series rule misapplied."
      },
      {
        module: 1,
        q: "A 100 V source feeds a 5 Ω series resistor ahead of a parallel pair of 10 Ω and 10 Ω. The voltage across the parallel pair is:",
        choices: ["100 V", "25 V", "50 V", "75 V"],
        answer: 2,
        explanation: "Correct (c): The pair reduces to 5 Ω; total R = 5 + 5 = 10 Ω; total current = 10 A; the series resistor drops 10 × 5 = 50 V, leaving 50 V across the pair. (a) ignores the series element. (b) halves the answer a second time. (d) 75 V would require the series element to drop only 25 V, which contradicts the equal 5 Ω sections carrying the same current."
      },
      {
        module: 1,
        q: "Under load a unit is supplied 240 V but the motor sees 230 V. A drop test shows 4 V across the disconnect. The drop across the contactor is ____, and the finding is ____.",
        choices: ["4 V; normal", "6 V; the contactor pole is failing", "10 V; the motor is overloaded", "0 V; the disconnect explains everything"],
        answer: 1,
        explanation: "Correct (b): Total loss is 240 − 230 = 10 V; 10 − 4 = 6 V across the contactor — a failing, high-resistance pole. (a) The disconnect's 4 V is also abnormal for a closed switch, and the arithmetic is wrong anyway. (c) assigns the whole loss to the contactor and blames the motor without evidence. (d) 0 V contradicts the measured totals."
      },
      {
        module: 1,
        q: "A poor connection of 0.4 Ω carries 10 A. The power wasted as heat at that connection is:",
        choices: ["4 W", "25 W", "40 W", "100 W"],
        answer: 2,
        explanation: "Correct (c): P = I²R = 100 × 0.4 = 40 W. (a) 4 W is the voltage drop (10 × 0.4), not the power. (b) 25 W matches no correct computation. (d) 100 W forgets to multiply by the resistance."
      },
      {
        module: 2,
        q: "The inductive reactance of a 0.2 H coil at 60 Hz is approximately:",
        choices: ["12 Ω", "37.7 Ω", "75.4 Ω", "120 Ω"],
        answer: 2,
        explanation: "Correct (c): XL = 2πfL = 2 × 3.1416 × 60 × 0.2 = 75.4 Ω. (a) 12 Ω comes from f × L without 2π. (b) 37.7 Ω is the value for 0.1 H — half the given inductance. (d) 120 Ω matches no step of the formula."
      },
      {
        module: 2,
        q: "The capacitive reactance of a 25 µF capacitor at 60 Hz is approximately:",
        choices: ["53 Ω", "106 Ω", "26.5 Ω", "377 Ω"],
        answer: 1,
        explanation: "Correct (b): XC = 1 ÷ (2 × 3.1416 × 60 × 0.000025) = 1 ÷ 0.00942 ≈ 106 Ω. (a) 53 Ω is the value for a 50 µF capacitor — double the capacitance halves XC, which is the inverse relationship in action. (c) 26.5 Ω would need roughly 100 µF. (d) 377 is 2πf itself, mistaken for the finished reactance."
      },
      {
        module: 2,
        q: "A series AC circuit has R = 80 Ω and net reactance of 60 Ω. Impedance and the current at 200 V are:",
        choices: ["140 Ω and 1.43 A", "100 Ω and 2 A", "20 Ω and 10 A", "80 Ω and 2.5 A"],
        answer: 1,
        explanation: "Correct (b): Z = √(80² + 60²) = √(6,400 + 3,600) = √10,000 = 100 Ω; I = 200 ÷ 100 = 2 A. (a) adds R and X arithmetically. (c) subtracts them. (d) ignores reactance entirely."
      },
      {
        module: 2,
        q: "A motor draws 6 A at 120 V with PF 0.70. Its real power is:",
        choices: ["720 W", "504 W", "1,029 W", "84 W"],
        answer: 1,
        explanation: "Correct (b): S = 120 × 6 = 720 VA; P = 720 × 0.70 = 504 W. (a) 720 is apparent power in VA, not watts. (c) divides by PF instead of multiplying, exceeding apparent power — impossible. (d) 84 multiplies voltage by PF alone and forgets current."
      },
      {
        module: 3,
        q: "Unlabeled compressor terminals read: A–B = 1.5 Ω, B–C = 5.5 Ω, A–C = 7 Ω. Terminal B is:",
        choices: ["Start", "Run", "Common", "Ground"],
        answer: 2,
        explanation: "Correct (c): The largest reading (A–C = 7 Ω) spans both windings, so B — the terminal not in that pair — is Common; from B, the 5.5 Ω side (C) is Start and the 1.5 Ω side (A) is Run, and 1.5 + 5.5 = 7 verifies it. (a) and (b) are A and C in some assignment, not B. (d) Ground is not a winding terminal; it is tested separately to the shell."
      },
      {
        module: 3,
        q: "Winding readings are C–R = 3 Ω, C–S = 4 Ω, S–R = 9 Ω. The correct conclusion is:",
        choices: ["Windings are good — readings are close enough", "The readings violate the sum rule (3 + 4 ≠ 9): recheck technique, and if repeated, suspect winding damage", "Start and Run are reversed", "The motor is grounded"],
        answer: 1,
        explanation: "Correct (b): C–R + C–S must equal S–R exactly; 7 ≠ 9 means a bad measurement or a damaged winding — retest carefully, then judge. (a) 'Close enough' is not a standard for an identity that must hold exactly. (c) Reversal is about terminal identity, which the sum would still satisfy. (d) Grounding is proven only by a terminal-to-shell test, not by these readings."
      },
      {
        module: 3,
        q: "Which statement about a PSC motor is true?",
        choices: ["Its start winding is removed at 75% speed", "Its run capacitor and auxiliary winding remain in circuit whenever it runs", "It has the highest starting torque of the single-phase types", "It requires a potential relay to run"],
        answer: 1,
        explanation: "Correct (b): Permanent Split Capacitor — the capacitor and auxiliary winding are permanent. (a) describes switched-start types (split-phase/CSIR). (c) PSC starting torque is modest; CSIR/CSR are the high-torque types. (d) A basic PSC has no relay at all — a relay appears only when a hard-start kit is added."
      },
      {
        module: 3,
        q: "In a CSIR motor, if the start relay fails to open as the motor reaches speed, the expected outcome is:",
        choices: ["Nothing — the start circuit is rated for continuous duty", "The start capacitor and start winding, both short-duty components, overheat and fail", "The motor runs more efficiently", "The run capacitor takes over the starting job"],
        answer: 1,
        explanation: "Correct (b): The start capacitor and fine-wire start winding are intermittent-duty; holding them in circuit destroys them — capacitor first, winding if calls persist. (a) is exactly backwards: the dropout device exists because they are not continuous-duty. (c) Efficiency falls, not rises, with the start circuit stuck in. (d) CSIR has no run capacitor — that is CSR/PSC territory."
      },
      {
        module: 3,
        q: "A CSR motor differs from a PSC motor by the addition of:",
        choices: ["A centrifugal switch in the shell", "A start capacitor switched by a relay, in parallel with the run capacitor during starting", "A third winding", "A delta connection"],
        answer: 1,
        explanation: "Correct (b): CSR = PSC's permanent run capacitor PLUS a relay-switched start capacitor for starting torque. (a) Hermetic CSR compressors use relays, and switches live in open motors — not the defining addition. (c) Both are two-winding single-phase machines. (d) Delta is a three-phase connection (Module 4)."
      },
      {
        module: 4,
        q: "A wye system measures 208 V line-to-line. Its line-to-neutral voltage is approximately:",
        choices: ["208 V", "120 V", "104 V", "360 V"],
        answer: 1,
        explanation: "Correct (b): E-phase = E-line ÷ √3 = 208 ÷ 1.732 ≈ 120 V — the 208Y/120 pair. (a) repeats the line value. (c) halves the line voltage, which no wye relationship does. (d) multiplies by √3 in the wrong direction."
      },
      {
        module: 4,
        q: "A delta-connected load's windings each carry 15 A. Expected line current (balanced) is about:",
        choices: ["15 A", "45 A", "26 A", "8.7 A"],
        answer: 2,
        explanation: "Correct (c): In delta, I-line = √3 × I-phase = 15 × 1.732 ≈ 26 A. (a) is the wye current relationship. (b) adds all three windings naively. (d) divides by √3, the inverse operation."
      },
      {
        module: 4,
        q: "A balanced three-phase load draws 12 A per line at 208 V, PF 0.90. Real power is approximately:",
        choices: ["2,246 W", "3,891 W", "7,488 W", "2,496 W"],
        answer: 1,
        explanation: "Correct (b): P = 1.732 × 208 × 12 × 0.90. 1.732 × 208 = 360.3; × 12 = 4,323 VA; × 0.90 = 3,891 W. (a) omits √3 and uses a partial product. (c) 7,488 W skips the power factor and overstates further. (d) 2,496 W is the single-phase product 208 × 12 with no √3 and no PF."
      },
      {
        module: 4,
        q: "A three-phase motor that was running suddenly sounds strained; one line current reads near zero and the other two read high. The condition is:",
        choices: ["Normal staged operation", "Phase loss (single-phasing)", "A reversed rotation command", "Power factor correction working"],
        answer: 1,
        explanation: "Correct (b): One dead line with the survivors overcurrent is the single-phasing signature — shut it down and find the lost phase (fuse, pole, conductor). (a) Three-phase motors do not stage lines off in normal operation. (c) Reversal changes direction, not current pattern. (d) Correction changes PF modestly and symmetrically, not one line to zero."
      },
      {
        module: 5,
        q: "A starter's overload trips after roughly twenty minutes of running, every time, and the motor's measured current is above nameplate FLA. The overload is most likely:",
        choices: ["Defective, because it trips", "Working correctly and reporting a genuine overload whose cause must be found", "Oversized", "A short-circuit device"],
        answer: 1,
        explanation: "Correct (b): Current verified above FLA plus a time-delayed trip is a protection success story — investigate load, voltage, and balance. (a) A device doing exactly its designed job is not defective. (c) Oversized protection would trip late or never, not reliably at 20 minutes. (d) Overloads are slow thermal devices, the opposite class from short-circuit protection."
      },
      {
        module: 5,
        q: "A chafed conductor shorts line-to-line inside a unit. The protection expected to clear this fault is:",
        choices: ["The overload relay, after its time delay", "The breaker or fuses, almost instantly", "The thermostat, by ending the call", "The overload heaters, by melting"],
        answer: 1,
        explanation: "Correct (b): Short-circuit currents are extreme and must be interrupted near-instantly by the branch breaker or fuses. (a) Overload time delay is a feature for motor starts; it is not short-circuit protection. (c) The thermostat is a control, not a protector — the fault current does not consult it. (d) Melting-alloy heaters trip a relay on sustained overcurrent; they are not the fault-clearing device for a bolted short."
      },
      {
        module: 5,
        q: "Replacement heaters for a melting-alloy overload must be chosen:",
        choices: ["One size larger than the ones that tripped", "From the starter manufacturer's table for this motor's nameplate FLA", "To match the branch breaker rating", "By the wire size feeding the starter"],
        answer: 1,
        explanation: "Correct (b): Heaters calibrate the relay to the protected motor — nameplate FLA plus the relay maker's table. (a) Upsizing silences protection and cooks motors. (c) The breaker performs a different job (short-circuit) and is often rated far above FLA. (d) Conductor size follows circuit design, not the motor's thermal limit."
      },
      {
        module: 6,
        q: "A three-wire-controlled motor starts when START is pressed and stops the instant START is released. Every component tests good except one. The fault is:",
        choices: ["The STOP button", "The holding (seal-in) auxiliary contact or its wiring is open", "The overload contact", "The coil is the wrong voltage"],
        answer: 1,
        explanation: "Correct (b): Starting proves the series path; failing to seal in isolates the parallel holding path. (a) A failed STOP would prevent starting or stop the motor outright, not produce this exact behavior. (c) An open overload contact would prevent starting altogether. (d) A wrong-voltage coil would chatter or fail to pull in even while START is held."
      },
      {
        module: 6,
        q: "Which control device gives two-wire control with automatic restart after a power outage?",
        choices: ["A momentary start pushbutton", "A float switch (maintained contact)", "A holding contact", "A centrifugal switch"],
        answer: 1,
        explanation: "Correct (b): A float switch is a maintained-contact device: still closed when power returns, so the load restarts — two-wire behavior. (a) and (c) are elements of three-wire control, which deliberately does not self-restart. (d) A centrifugal switch is a motor starting device (Module 3), not a line controller."
      },
      {
        module: 6,
        q: "In a reversing starter, the electrical interlock exists to prevent:",
        choices: ["The motor from ever reversing", "Both contactors energizing at once and shorting the supply", "The overload from tripping", "Manual operation of the starter"],
        answer: 1,
        explanation: "Correct (b): Forward and reverse contactors land the supply differently; simultaneous closure is a bolted short. Each coil's rung passes through the other's NC aux contact so both can never be commanded together. (a) Reversing is the starter's purpose. (c) The interlock does not inhibit overload protection. (d) Manual start/stop is the normal interface."
      },
      {
        module: 6,
        q: "On a ladder rung, the overload contact, high-limit, and pressure cut-out all appear:",
        choices: ["In parallel with each other, so any one can start the load", "In series in the coil's rung, so any one can stop the load", "In the power circuit only", "Drawn in their energized state"],
        answer: 1,
        explanation: "Correct (b): The series safety chain gives every protective contact a veto over the coil. (a) Parallel safeties could never stop anything — each would need all the others to agree. (c) These contacts vote in the control rung; the heaters/sensors that drive them may live in the power or process side, but the contacts are in the rung. (d) Ladder convention draws shelf (unpowered) state."
      }
    ]
  },
  final: {
    title: "Final Exam",
    minutes: 120,
    coverage: "Modules 1–12",
    questions: [
      {
        module: 1,
        q: "A 60 V source feeds a 10 Ω series resistor ahead of a parallel pair of 30 Ω and 15 Ω. Total current and the voltage across the pair are:",
        choices: ["3 A and 30 V", "2 A and 40 V", "6 A and 60 V", "3 A and 60 V"],
        answer: 0,
        explanation: "Correct (a): The pair reduces to (30 × 15) ÷ 45 = 10 Ω; total R = 20 Ω; I = 60 ÷ 20 = 3 A; the series resistor drops 30 V, leaving 30 V across the pair. (b) miscomputes the equivalent. (c) ignores the series resistor. (d) gives the pair the full source voltage, impossible with a real drop ahead of it."
      },
      {
        module: 1,
        q: "Technician A measures 0 V across a closed breaker feeding a dead unit — with the unit off — and clears the breaker. The flaw in the test is:",
        choices: ["The meter should be set to ohms", "No current was flowing, so even a failing breaker drops 0 V; voltage-drop tests require a loaded, energized circuit", "Breakers cannot be voltage-drop tested", "The unit should be tested to ground instead"],
        answer: 1,
        explanation: "Correct (b): E = I × R needs current; unloaded, every connection in the building reads 0 V drop. The test must run under a real call. (a) Ohmmeters are never used on live circuits and static resistance is a different, weaker test. (c) Breakers and switches are classic drop-test subjects — under load. (d) To-ground readings invite alternate-path confusion; across the component is the method."
      },
      {
        module: 1,
        q: "Two loads in parallel across a source: one branch opens. Total current from the source will:",
        choices: ["Stay the same", "Fall by the opened branch's current", "Rise to compensate", "Drop to zero"],
        answer: 1,
        explanation: "Correct (b): Parallel branches are independent; the survivor still draws its own current and the total falls by exactly the lost branch's share. (a) Total current is the sum of branches — removing one changes it. (c) Nothing in a passive parallel circuit compensates. (d) describes a series circuit's open."
      },
      {
        module: 2,
        q: "If the frequency applied to an inductor doubles (inductance unchanged), its reactance:",
        choices: ["Halves", "Doubles", "Stays the same", "Drops to zero"],
        answer: 1,
        explanation: "Correct (b): XL = 2πfL is directly proportional to frequency. (a) is the direction capacitive reactance moves with frequency (XC falls as f rises). (c) describes pure resistance, which ignores frequency. (d) XL reaches zero only at DC steady state (f = 0)."
      },
      {
        module: 2,
        q: "A series circuit has R = 50 Ω, XL = 90 Ω, XC = 90 Ω, on 100 V. The current is:",
        choices: ["0.55 A", "2 A", "0 A", "1.11 A"],
        answer: 1,
        explanation: "Correct (b): Net reactance = 90 − 90 = 0, so Z = R = 50 Ω and I = 100 ÷ 50 = 2 A — the resonance condition. (a) 0.55 A results from combining all values as one big impedance without canceling the reactances. (c) misreads cancellation as blockage. (d) uses only one reactance against the source."
      },
      {
        module: 2,
        q: "A load's power triangle shows P = 800 W and S = 1,000 VA. Q and PF are:",
        choices: ["Q = 200 var, PF = 0.80", "Q = 600 var, PF = 0.80", "Q = 600 var, PF = 1.25", "Q = 1,800 var, PF = 0.80"],
        answer: 1,
        explanation: "Correct (b): Q = √(S² − P²) = √(1,000,000 − 640,000) = √360,000 = 600 var; PF = P ÷ S = 0.80. (a) subtracts P from S linearly, which the triangle does not allow. (c) divides S by P — a power factor above 1 is impossible. (d) adds the two powers, again ignoring the right-triangle relationship."
      },
      {
        module: 3,
        q: "A compressor fails to start, hums, and trips. Capacitance tests in tolerance, but C–S reads open (infinite). The fault is:",
        choices: ["The run capacitor", "An open start winding — no capacitor can start a motor whose start winding is open", "A grounded winding", "The contactor"],
        answer: 1,
        explanation: "Correct (b): An open auxiliary winding means zero start-winding current and zero starting torque regardless of capacitor health. (a) The capacitor was measured in tolerance — evidence acquits it. (c) Grounding is a terminal-to-shell finding, not an open between winding terminals. (d) The hum itself proves the contactor delivered power; a dead contactor gives silence, not hum-and-trip."
      },
      {
        module: 3,
        q: "Which pairing of motor type and starting method is correct?",
        choices: ["PSC — centrifugal switch drops the start winding", "CSIR — start capacitor in series with the start winding, removed at speed by a relay or switch", "CSR — no capacitors at all", "Split-phase — run capacitor stays in circuit permanently"],
        answer: 1,
        explanation: "Correct (b): CSIR is defined by a start capacitor that must be switched out at speed. (a) PSC has no start winding dropout — its circuit is permanent. (c) CSR has two capacitors (start + run); 'none' describes plain split-phase. (d) Split-phase uses resistance split only; the permanent run capacitor is PSC's signature."
      },
      {
        module: 3,
        q: "A potential relay's contacts are found welded shut on a CSR compressor. Predict the next failures, in order:",
        choices: ["Run capacitor, then contactor", "Start capacitor (continuous duty it was never built for), then possibly the start winding", "The overload, then the thermostat", "Nothing will fail"],
        answer: 1,
        explanation: "Correct (b): Welding keeps the intermittent-duty start capacitor energized full-time — it overheats and fails first, with the short-duty start winding at risk behind it. (a) The run capacitor lives in circuit by design and the contactor is upstream of the relay's sin. (c) Neither is in the condemned circuit. (d) A welded start relay is an active failure mechanism, not a benign condition."
      },
      {
        module: 3,
        q: "Start winding resistance is higher than run winding resistance primarily because the start winding:",
        choices: ["Is wound with heavier wire", "Is wound with finer wire", "Is connected to the capacitor", "Sits outside the stator"],
        answer: 1,
        explanation: "Correct (b): Finer wire = higher resistance per the winding's design — the property terminal identification relies on. (a) describes the run winding. (c) Connection does not set a winding's inherent resistance. (d) Both windings live in the same stator slots."
      },
      {
        module: 4,
        q: "In a delta system, the winding voltage equals:",
        choices: ["Line voltage ÷ √3", "Line voltage", "Line voltage × √3", "120 V always"],
        answer: 1,
        explanation: "Correct (b): Each delta winding sits directly between two lines, so E-phase = E-line (the √3 in delta belongs to current). (a) is the wye phase voltage relationship. (c) multiplies where no relationship calls for it. (d) 120 V is specific to one wye system's phase voltage, not a delta law."
      },
      {
        module: 4,
        q: "A three-phase motor is reconnected after service and now runs backward. The supply was not changed. The most likely story is:",
        choices: ["The overloads are reversed", "Two of the motor's line leads were landed in swapped positions during reconnection", "The motor rewound itself", "Phase loss occurred"],
        answer: 1,
        explanation: "Correct (b): Swapping any two leads reverses phase sequence at the motor — the classic reconnection error; swap two back and verify. (a) Overload elements do not set sequence. (c) Motors do not alter their own winding connections. (d) Phase loss degrades starting/running and current balance; it does not produce clean reversed rotation."
      },
      {
        module: 4,
        q: "Measured line-to-line voltages at a running unit are 460, 462, and 461 V on a 460 V nominal system, but the motor's line currents are significantly unbalanced and it runs hot. The best next step is:",
        choices: ["Declare the supply perfect and replace the motor", "Investigate current imbalance causes — including the motor windings and connections — since small voltage imbalances or internal faults can yield large current imbalances", "Add a capacitor bank", "Ignore it — voltage is what matters"],
        answer: 1,
        explanation: "Correct (b): Balanced voltages with unbalanced currents move suspicion into the machine and its connections (winding condition, a high-resistance joint in one leg — drop-test it under load). (a) condemns the motor before testing it. (c) Power factor correction does not repair per-leg imbalance. (d) The hot motor is itself evidence that something matters beyond the voltage reading."
      },
      {
        module: 5,
        q: "An electronic overload trips within seconds of a phase disappearing mid-run, long before the windings could overheat. This is:",
        choices: ["A defective relay — overloads must always wait for heat", "Phase-loss sensitivity, a designed feature of many electronic overloads", "A short circuit", "A nuisance trip by definition"],
        answer: 1,
        explanation: "Correct (b): Fast tripping on phase loss is the point — it prevents the slow cooking Module 4 described, rather than simulating it. (a) Thermal overloads wait for heat; electronic designs deliberately add this faster protective logic. (c) No short circuit occurred; a supply leg vanished. (d) A trip with a genuine, verified cause is by definition not a nuisance trip."
      },
      {
        module: 5,
        q: "A motor with FLA 9 A is fed by a breaker rated noticeably higher than 9 A, with the starter's overload set at the nameplate value. This installation is:",
        choices: ["Wrong — the breaker must equal FLA", "Consistent with the two-job design: breaker for short circuits/ground faults, overload for the motor's sustained-current protection", "Wrong — the overload should match the breaker", "Legal only if the wire is oversized"],
        answer: 1,
        explanation: "Correct (b): The breaker must ride through starting current while catching faults; the overload guards the motor at its rating. Different jobs, different numbers. (a) A breaker at FLA would nuisance-trip on starts. (c) Matching the overload to the breaker abandons motor protection. (d) Conductor sizing follows its own rules and does not rescue a merged protection philosophy."
      },
      {
        module: 5,
        q: "Immediately after a manual-reset overload trip, the professional sequence is:",
        choices: ["Reset, watch it run for one minute, leave", "Investigate current, voltage under load, balance, and mechanical load; then reset and observe a full run", "Replace the overload with a larger one", "Replace the motor"],
        answer: 1,
        explanation: "Correct (b): The trip is a report; the investigation precedes the reset so the evidence (and the cause) is still there to find. (a) resets away the evidence and the lesson. (c) repeats this course's cardinal protection sin. (d) may eventually be right — after the measurements say so, not before."
      },
      {
        module: 6,
        q: "A rung contains: NC stop, NO start paralleled by an NO contact labeled M, NC overload contact, coil M. When the overload trips mid-run, what happens on its reset (without pressing start)?",
        choices: ["The motor restarts immediately", "Nothing — the holding contact opened when the coil dropped, so a fresh start command is required", "The coil burns out", "The stop button must be replaced"],
        answer: 1,
        explanation: "Correct (b): Dropping the coil opened its own seal-in path; resetting the overload restores permission, not command. (a) describes two-wire behavior — this is a three-wire circuit. (c) Resetting an overload cannot energize a coil by itself. (d) The stop button was never involved in the trip."
      },
      {
        module: 6,
        q: "A ladder diagram shows coil CR's NO contact in the rung of the unit's main contactor, in series with the thermostat contact. This means the main contactor:",
        choices: ["Energizes whenever the thermostat calls", "Energizes only when the thermostat calls AND relay CR is energized — CR is a permissive in its path", "Can never energize", "Energizes when CR drops out"],
        answer: 1,
        explanation: "Correct (b): Series contacts are AND conditions; an NO contact of CR passes power only while CR is energized. (a) omits the CR condition the diagram explicitly draws. (c) Both conditions can plainly be true at once. (d) inverts the NO contact's behavior."
      },
      {
        module: 6,
        q: "Why do ladder diagrams place high-voltage sections and low-voltage sections in recognizable order on the page?",
        choices: ["For decoration", "So the reader can separate power circuits from control logic at a glance — a reading convention that supports tracing a fault to the right circuit family first", "Because the NEC requires that exact layout", "To make the page symmetrical"],
        answer: 1,
        explanation: "Correct (b): Diagram conventions (like the point-to-point versus ladder distinction from the module's video) exist to speed correct reading: know which family a rung belongs to before probing it — also a safety matter. (a) and (d) are not purposes of any engineering drawing. (c) The layout is manufacturer/trade convention rather than a code-mandated page design."
      },
      {
        module: 7,
        q: "A system's control loads from nameplates: contactor coil 14 VA, solenoid 8 VA, relay 7 VA. Total VA and control current at 24 V are:",
        choices: ["29 VA and 1.21 A", "29 VA and 29 A", "21 VA and 1.21 A", "40 VA and 1.67 A"],
        answer: 0,
        explanation: "Correct (a): 14 + 8 + 7 = 29 VA; I = 29 ÷ 24 = 1.21 A. (b) mistakes VA for amperes. (c) drops one load from the audit. (d) invents a 40 VA total — confusing a common transformer rating with this load sum."
      },
      {
        module: 7,
        q: "After a thermostat change, heating works and cooling produces no response at all — the outdoor unit never receives a call. The system has a single transformer and the stat shows an Rc and Rh with no jumper. The probable fault is:",
        choices: ["A failed compressor", "The cooling side of the thermostat is unpowered: with one transformer, Rc must be jumpered to Rh (or R landed to feed both)", "Low refrigerant", "The Y wire is on the G terminal — the only possibility"],
        answer: 1,
        explanation: "Correct (b): One transformer feeds one R point; without the jumper, the Rc/Y side switches a dead terminal. (a) The compressor never receives a call — nothing indicts it. (c) Refrigerant cannot silence a control call. (d) A mislanded Y is possible in the abstract, but the described jumper omission on a one-transformer system is the classic, evidence-matching cause; 'only possibility' also overclaims."
      },
      {
        module: 7,
        q: "An electronic thermostat on a 4-wire (no C) installation reboots on calls and eventually dies; batteries are fresh. The underlying issue is:",
        choices: ["The thermostat is allergic to the wall", "The thermostat itself is a load needing continuous power; without a common return it cannot power itself reliably", "The transformer is DC", "The W wire is too long"],
        answer: 1,
        explanation: "Correct (b): Mechanical stats were passive switches; electronic stats consume power and need R and C. (a) is not a mechanism. (c) Control transformers supply AC by design. (d) Wire length affects drop at the margins, not a stat dying on fresh batteries with no C."
      },
      {
        module: 7,
        q: "A heat pump cools when set to heat after a thermostat replacement. Refrigerant components are untouched. First check:",
        choices: ["The reversing valve piston", "The thermostat's O/B configuration against the equipment's convention", "Superheat", "The defrost board"],
        answer: 1,
        explanation: "Correct (b): Opposite-mode operation right after a stat swap is the textbook O/B misconfiguration. (a) A valve mechanical fault would not coincide with the replacement or swap modes so cleanly. (c) Superheat is a charge/airflow measurement, irrelevant to mode selection. (d) Defrost affects the outdoor coil in heating season, not the basic mode the system selects."
      },
      {
        module: 8,
        q: "A low-pressure control has cut-in 90 psig and differential 35 psi (cut-out on falling pressure). Its cut-out is:",
        choices: ["125 psig", "55 psig", "90 psig", "35 psig"],
        answer: 1,
        explanation: "Correct (b): Cut-out = cut-in − differential = 90 − 35 = 55 psig. (a) adds the differential — the wrong direction for a falling-pressure cut-out. (c) restates cut-in. (d) restates the differential itself."
      },
      {
        module: 8,
        q: "A heat pump never enters defrost though its defrost cycle, when manually initiated per the manufacturer's test, works perfectly and terminates correctly. The failing act is:",
        choices: ["Termination", "Initiation — the board's timing/sensing never calls for defrost", "Fan delay", "The reversing valve"],
        answer: 1,
        explanation: "Correct (b): A successful forced test acquits the defrost machinery and termination; the missing piece is whatever starts it — interval setting or the demand sensor input. (a) Termination was demonstrated working. (c) Fan delay is a refrigeration-evaporator function after defrost, not the heat pump's failure to start one. (d) The valve shifted during the forced test, acquitting it."
      },
      {
        module: 8,
        q: "A manual-reset high-pressure cut-out trips on a hot afternoon. Your gauges and inspection find a condenser fan motor that has failed. The correct completion is:",
        choices: ["Reset the switch and leave — pressure will be fine now", "Repair the fan cause, then reset and prove a full run at normal pressures", "Lower the cut-out setting so it trips sooner next time", "Jumper the switch until parts arrive"],
        answer: 1,
        explanation: "Correct (b): Cause found and fixed → reset → verified run. That is the manual-reset philosophy completed. (a) resets into the still-failed fan and another trip — or worse. (c) Bending a safety's setting to accommodate a fault inverts its purpose. (d) Leaving a safety jumpered, for any duration, is prohibited practice."
      },
      {
        module: 8,
        q: "Defrost termination by temperature is generally preferred over pure time termination because:",
        choices: ["Time clocks are illegal", "Temperature proves the coil is actually clear, ending defrost when the job is done; time alone both under- and over-defrosts as conditions vary", "Temperature sensors never fail", "It eliminates the need for a fail-safe"],
        answer: 1,
        explanation: "Correct (b): Sensed proof beats the calendar — with the fail-safe time retained behind it. (a) Time clocks are standard, legal equipment. (c) Sensors fail regularly — which is exactly why the time backstop exists. (d) claims the opposite of the layered design this course teaches."
      },
      {
        module: 9,
        q: "An NTC thermistor is measured, disconnected, at a temperature your thermometer confirms, and its resistance is far above the chart value for that temperature. The board using it will believe the sensed point is:",
        choices: ["Warmer than it is", "Colder than it is", "Exactly right", "At absolute zero"],
        answer: 1,
        explanation: "Correct (b): For NTC, high resistance = low temperature; a too-high resistance reports a phantom cold. (a) inverts the NTC relationship (that would be a too-low resistance). (c) contradicts the premise of a far-off-chart reading. (d) Absolute zero is not a chart value a board reports from a merely high resistance."
      },
      {
        module: 9,
        q: "A transducer is documented at 0.5 V = 0 psig and 4.5 V = 400 psig. Your gauge reads 300 psig. The expected signal is:",
        choices: ["2.5 V", "3.5 V", "3.0 V", "4.5 V"],
        answer: 1,
        explanation: "Correct (b): The scale is 400 ÷ 4.0 = 100 psi per volt above the 0.5 V floor. 300 psig needs 3.0 V above floor → 0.5 + 3.0 = 3.5 V. (a) 2.5 V corresponds to 200 psig. (c) forgets the 0.5 V floor. (d) is full scale, 400 psig."
      },
      {
        module: 9,
        q: "A 4–20 mA temperature loop is ranged 0–150 °F and measures 16 mA. The reported temperature is:",
        choices: ["120 °F", "112.5 °F", "100 °F", "150 °F"],
        answer: 1,
        explanation: "Correct (b): (16 − 4) ÷ 16 = 0.75 of span; 0.75 × 150 = 112.5 °F. (a) 120 °F treats 16 mA as 80% by using 20 as the denominator without removing the 4 mA floor. (c) is a round guess. (d) is full scale, reached only at 20 mA."
      },
      {
        module: 9,
        q: "A board logs repeated sensor faults. The sensor tests perfect at its own terminals. Measuring at the board plug through the harness gives erratic, changing values when the harness is gently moved. The fault is:",
        choices: ["The sensor", "The harness/connectors — an intermittent connection corrupting a good sensor's delivery", "The board's clock", "The refrigerant charge"],
        answer: 1,
        explanation: "Correct (b): Movement-sensitive readings at the plug, with a proven sensor, convict the delivery path — backed-out pins, corrosion, or a conductor broken inside its insulation. (a) is excluded by the at-sensor test. (c) The board's timing does not change resistance readings on a disconnected plug. (d) Charge cannot reach into a sensor harness."
      },
      {
        module: 10,
        q: "An ECM blower has correct line voltage at its power connector during a fan call but no signal at its signal connector. The motor is:",
        choices: ["Condemned — replace motor and module", "Not condemned: it lacks its instruction; the fault is upstream in the board output or harness", "In need of a capacitor", "Certainly surge-damaged"],
        answer: 1,
        explanation: "Correct (b): Power without signal is a waiting motor. Prove the signal leaving the board and the harness end-to-end. (a) skips the evidence the connectors just provided. (c) ECMs have no capacitor to need. (d) Surge damage is a module story for a motor that has inputs and will not respond — not this one."
      },
      {
        module: 10,
        q: "ECM winding pair readings are 9 Ω, 9 Ω, and 18 Ω, with no ground fault. The interpretation is:",
        choices: ["Healthy — the readings satisfy a sum rule", "A winding fault: the three pairs of a balanced ECM winding set should be approximately equal", "Normal for constant-torque motors only", "The module is at fault"],
        answer: 1,
        explanation: "Correct (b): Approximate equality is the ECM health signature; one pair at double value breaks it. (a) applies the single-phase sum rule to a three-winding ECM — the wrong machine's test. (c) Both ECM families share the balanced-winding construction. (d) Windings belong to the motor side; these readings convict the motor, not the module."
      },
      {
        module: 10,
        q: "A constant-airflow blower system grows louder over months while maintaining airflow, and its module then fails. Static pressure is found very high from a crushed duct section. The full diagnosis is:",
        choices: ["Bad luck; replace the module", "The motor compensated for the restriction by overspeeding until the module overheated — repair the duct restriction with the module, or the replacement inherits the cause", "The module was counterfeit", "The thermostat called too often"],
        answer: 1,
        explanation: "Correct (b): Compensation behavior plus a proven restriction plus module death is one story told in three chapters. (a) ignores a measured cause. (c) is asserted without any evidence about the part's provenance. (d) Call frequency does not crush ducts or overheat modules."
      },
      {
        module: 10,
        q: "Why does an ECM diagnosis require knowing whether the motor is constant-torque or constant-airflow?",
        choices: ["They use different refrigerants", "The same observed behavior (e.g., running fast and loud) is a command result in one family and a restriction-compensation report in the other — interpretation depends on the family", "Only constant-airflow motors have modules", "Constant-torque motors run on DC line power"],
        answer: 1,
        explanation: "Correct (b): Family determines what the motor is trying to do, and therefore what its behavior means. (a) Motor family has nothing to do with refrigerant selection. (c) Both families are ECMs with modules. (d) Both are fed AC line power rectified inside the module."
      },
      {
        module: 11,
        q: "A suspect chain has 32 possible fault points. Half-splitting corners the fault in at most:",
        choices: ["32 tests", "5 tests", "16 tests", "2 tests"],
        answer: 1,
        explanation: "Correct (b): Each test halves the field: 32 → 16 → 8 → 4 → 2 → 1 = 5 tests. (a) is sequential testing's worst case. (c) is half-splitting's count after one test, not the total to finish. (d) would require each test to eliminate three-quarters of the field."
      },
      {
        module: 11,
        q: "On a no-heat call, you measure 0 V across the gas valve during the call, but 24 V is present at the board's input terminals. The method's next move is:",
        choices: ["Replace the gas valve", "Half-split/hopscotch the path between board input and the valve — the load is acquitted by its 0 V; something in the path (board output, safety chain, wiring) is open", "Replace the transformer", "Check refrigerant charge"],
        answer: 1,
        explanation: "Correct (b): Zero volts across the load plus a live source means the break is between them; walk the path with the diagram. (a) The valve is the one component the evidence cleared. (c) The transformer proved itself at the board input. (d) No-heat gas-valve paths are diagnosed electrically first."
      },
      {
        module: 11,
        q: "Hopscotch readings along a chain (to common): source 24 V, after switch 1: 24 V, after switch 2: 24 V, after switch 3: 0 V, at load: 0 V. The open element is:",
        choices: ["Switch 1", "Switch 3", "The load", "Switch 2"],
        answer: 1,
        explanation: "Correct (b): Voltage survives through switch 2 and dies across switch 3 — the fault lives between the last live node and the first dead node. (a) and (d) both passed voltage along when tested. (c) The load is simply downstream of the break."
      },
      {
        module: 12,
        q: "A unit fails only on the hottest afternoons and always recovers by morning. Readings taken at 9 A.M. visits are always normal. The case-based strategy is:",
        choices: ["Close the ticket as 'no fault found' permanently", "Log conditions across visits, then schedule monitoring under the failing conditions — full load, heat, long run — and voltage-drop the power/control paths while hot and loaded", "Replace the thermostat on principle", "Add refrigerant"],
        answer: 1,
        explanation: "Correct (b): Case 3's thermal intermittent keeps afternoon hours; the hunt must too — with records from the innocent visits building the pattern. (a) abandons a real, patterned complaint. (c) replaces a part no evidence named. (d) treats an electrical-pattern complaint as a refrigerant problem without a single supporting measurement."
      },
      {
        module: 12,
        q: "You fix a no-cool by replacing a failed run capacitor; the compressor starts and cools. Before leaving, the neighbor check prompts one more measurement set. It is:",
        choices: ["Superheat and subcooling, always", "Voltage-drop across the contactor poles under load and running current versus nameplate — to catch the contact wear or strain family that travels with start-component failures", "Static pressure of the house", "The thermostat's battery voltage"],
        answer: 1,
        explanation: "Correct (b): Case 5's rule — fix the family. A pole dropping voltage abuses every start and can help kill the next capacitor; current versus nameplate confirms the machine is truly healthy, not merely moving. (a) Refrigerant metrics answer different questions and were never implicated. (c) and (d) are unrelated to this fault family."
      }
    ]
  }
};
