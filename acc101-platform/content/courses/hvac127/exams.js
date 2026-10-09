// HVAC 127 — Midterm and Final exams.
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
        q: "A building engineer wants to know which device in a hot-water loop is the controller. The device that compares the sensor signal with the setpoint and decides the valve position is the:",
        choices: ["Valve actuator", "Temperature sensor in the pipe", "Loop controller (or the controlling function in the thermostat/board)", "Circulator pump"],
        answer: 2,
        explanation: "Correct: (c). Comparing measurement to setpoint and deciding is the definition of the controller function. (a) The actuator is the controlled device — it moves on orders. (b) The sensor only measures. (d) The pump is equipment being governed, not the decision-maker."
      },
      {
        module: 1,
        q: "A cooling loop's setpoint is 73°F and the sensor reports 78°F. The error driving the controller's response is:",
        choices: ["0°F", "2°F in the heating direction", "5°F calling for more cooling", "151°F"],
        answer: 2,
        explanation: "Correct: (c). The space sits 5°F above setpoint, an error the controller answers with cooling. (a) Zero error would mean the space is at setpoint. (b) The direction is cooling, not heating — the room is too warm. (d) adds the numbers instead of differencing them."
      },
      {
        module: 1,
        q: "Which failure position pairing is correct fail-safe thinking?",
        choices: ["Gas valve fails open; freeze-exposed heating valve fails closed", "Gas valve fails closed; freeze-exposed heating valve fails open", "Everything should fail off in all applications", "Fail-safe always means fail open"],
        answer: 1,
        explanation: "Correct: (b). Fuel must stop on failure; water must keep moving through a freeze-threatened coil. (a) reverses both protections into hazards. (c) 'Off' is not a universal safe state — a stopped pump can freeze a coil. (d) repeats the misconception this course corrects: safe is application-specific."
      },
      {
        module: 1,
        q: "A control transformer's voltage sags only when the cooling contactor and fan relay energize simultaneously. The cause is:",
        choices: ["A bad thermostat sensor", "The combined coil load exceeding the transformer's VA capacity", "An open-loop control design", "Excessive differential"],
        answer: 1,
        explanation: "Correct: (b). Each load alone is fine; together they exceed VA capacity and pull the voltage down. (a) A sensor fault changes temperature readings, not loaded voltage. (c) Loop architecture has no bearing on power supply capacity. (d) Differential affects cycling, not transformer loading."
      },
      {
        module: 2,
        q: "A mechanical freezer control is set to 0°F with a 6°F differential, cut-in at the warm end. It cuts in and out at:",
        choices: ["In at 0°F, out at −6°F", "In at +3°F, out at −3°F (centered) OR in at +6, out at 0 if ranged", "In at −6°F, out at 0°F", "It cannot be determined without the refrigerant"],
        answer: 1,
        explanation: "Correct: (b). Differential defines the spread between cut-in and cut-out; centered designs split it around setpoint, ranged designs place the full spread on one side — either way the two points are 6°F apart. (a) and (c) describe a 6°F spread but reversed/odd logic for a cooling control that must cut IN as temperature rises. (d) Refrigerant identity is irrelevant to control-switch arithmetic."
      },
      {
        module: 2,
        q: "A proportional cooling loop has an 8°F band and a 74°F setpoint. At a room temperature of 76°F, the valve output is:",
        choices: ["12.5%", "25%", "50%", "100%"],
        answer: 1,
        explanation: "Correct: (b). Error = 2°F; (2 ÷ 8) × 100 = 25%. (a) would be a 1°F error in this band. (c) would need a 4°F error. (d) saturates only at or beyond the full 8°F error."
      },
      {
        module: 2,
        q: "A loop with proportional-only control settles 1.5°F away from setpoint and stays there for hours. This steady error is called:",
        choices: ["Hunting", "Offset (droop)", "Short cycling", "Integral windup"],
        answer: 1,
        explanation: "Correct: (b). Proportional output needs a standing error to hold its position — that remainder is offset/droop. (a) Hunting is oscillation, not a steady miss. (c) Short cycling is rapid on/off behavior in two-position control. (d) Windup involves integral accumulation, which a P-only loop doesn't have."
      },
      {
        module: 2,
        q: "In PID terms, the action that responds to how long an error has persisted is:",
        choices: ["Proportional", "Derivative", "Integral", "Feedforward"],
        answer: 2,
        explanation: "Correct: (c). Integral accumulates error over time and keeps correcting until the offset is gone. (a) Proportional sees only the present error size. (b) Derivative sees the rate of change. (d) Feedforward is a different strategy (acting on a disturbance measurement), not one of the three PID actions."
      },
      {
        module: 2,
        q: "A supply fan on a timer starts every morning whether the building needs air or not, with no sensor involved. This control is:",
        choices: ["Closed-loop", "Open-loop", "PID", "Modulating"],
        answer: 1,
        explanation: "Correct: (b). No measurement returns; the timer cannot know the result. (a) Closed-loop requires feedback from the controlled process. (c) PID requires a measured variable and error computation. (d) The fan is simply on or off on schedule — nothing positions proportionally to an error."
      },
      {
        module: 3,
        q: "A transmitter ranged 0–500 ppm outputs 4–20 mA and the loop measures 13.6 mA. The reported concentration is:",
        choices: ["136 ppm", "240 ppm", "300 ppm", "340 ppm"],
        answer: 2,
        explanation: "Correct: (c). Fraction = (13.6 − 4) ÷ 16 = 0.60; 0.60 × 500 = 300 ppm. (a) confuses the milliamp digits with ppm. (b) results from forgetting either the live-zero subtraction or proper span math ((13.6/20)×500 = 340 is (d)'s error; (b) comes from 13.6−4=9.6 misapplied as 48% of range against the wrong base). Only the live-zero-corrected fraction gives 300."
      },
      {
        module: 3,
        q: "A 0–10 V humidity output reads 6.4 V. As a percent of the sensor's range this is:",
        choices: ["6.4%", "36%", "64%", "94%"],
        answer: 2,
        explanation: "Correct: (c). 6.4 ÷ 10 = 0.64 → 64% of range. (a) misplaces the decimal by using the raw digits. (b) subtracts from 10 incorrectly. (d) is 9.4 V's value, not 6.4 V's."
      },
      {
        module: 3,
        q: "An NTC thermistor sensor's leads are found shorted together at a junction box. The controller will interpret the space temperature as:",
        choices: ["Extremely cold", "Extremely hot", "Exactly at setpoint", "Unchanged"],
        answer: 1,
        explanation: "Correct: (b). Near-zero resistance on an NTC input means maximum temperature (resistance falls as temperature rises). (a) is the open-lead signature — infinite resistance reads as extreme cold. (c) A short is a gross fault, not a calibrated value. (d) The controller has no way to ignore the shorted input."
      },
      {
        module: 3,
        q: "After a control board swap, every temperature in a unit reads several degrees off, worst at temperature extremes. The board's inputs were left at factory defaults. Most likely:",
        choices: ["All sensors failed simultaneously", "The thermistor curve type configured in the board doesn't match the installed sensors", "The transformer is undersized", "The refrigerant charge is low"],
        answer: 1,
        explanation: "Correct: (b). Mismatched curves agree near mid-range and diverge at extremes — the exact pattern described, triggered by a board change. (a) Simultaneous identical failure of all sensors is implausible. (c) Transformer capacity affects voltage, not curve-shaped reading errors. (d) Charge affects refrigeration performance, not sensor conversion tables."
      },
      {
        module: 4,
        q: "On a conventional system you measure 24 V between R and C, 24 V between W and C during a heat call, and 0 V between Y and C. The thermostat is:",
        choices: ["Dead — no power", "Powered and calling for heat only, correctly", "Calling for cooling", "Shorted internally"],
        answer: 1,
        explanation: "Correct: (b). R–C proves power; W live with a heat call and Y dead is exactly correct behavior. (a) Power is proven present by the R–C reading. (c) A cooling call would put 24 V on Y. (d) A short would not produce this clean, correct pattern."
      },
      {
        module: 4,
        q: "The thermostat terminal that carries the reversing-valve signal on a heat pump is:",
        choices: ["G", "C", "O/B", "W2"],
        answer: 2,
        explanation: "Correct: (c). O/B steers the reversing valve, energized in cooling or heating per equipment design. (a) G is the indoor fan call. (b) C is common — power return, not a function signal. (d) W2 calls second-stage/auxiliary heat, not the valve."
      },
      {
        module: 4,
        q: "A homeowner reports the indoor fan runs during cooling and on 'Fan ON' but never during furnace heating. The most likely explanation is:",
        choices: ["The G wire is broken", "Normal design — on a furnace heat call the control board starts the blower after its warm-up delay, independent of G", "The thermostat is misconfigured for heat pump", "The blower motor is failing"],
        answer: 1,
        explanation: "Correct: (b). Furnace boards sequence the blower themselves on W calls; if it truly never runs on heat, the board's blower timing/output is the suspect — not G. (a) A broken G would kill cooling fan and Fan ON too, which both work. (c) Heat-pump configuration would produce mode errors, and the fan works in the modes tested. (d) The motor demonstrably runs in two modes."
      },
      {
        module: 4,
        q: "A smart thermostat without a C wire keeps rebooting when the system runs. The root cause is that it:",
        choices: ["Needs a Wi-Fi upgrade", "Lacks a complete, stable power circuit and browns out under load without the common conductor", "Is wired for a heat pump", "Has a bad temperature sensor"],
        answer: 1,
        explanation: "Correct: (b). Power-stealing without C starves hungry electronics when calls energize. (a) Connectivity doesn't reboot power hardware in sync with system starts. (c) Application configuration doesn't cause power brownouts. (d) A bad sensor corrupts readings, not the power supply."
      },
      {
        module: 5,
        q: "A relay coil is energized (24 V measured) but the switched load never receives power, and the load tests good. The relay fault is:",
        choices: ["An open coil", "Contacts failed open/burned", "The transformer is too large", "The ladder diagram is wrong"],
        answer: 1,
        explanation: "Correct: (b). Coil proven, load proven, transfer missing: the contacts are not making. (a) An open coil would show no energization effect — and the premise says the coil is energized with proper voltage. (c) Transformer size doesn't affect contact closure. (d) Diagrams describe intent; the physical failure is in the contact set."
      },
      {
        module: 5,
        q: "In a ladder rung, a thermostat contact, a high-limit (NC), and a pressure cutout (NC) are all in series with a contactor coil. The contactor energizes when:",
        choices: ["Any one of the three closes", "The stat calls AND both safeties remain closed", "Only when both safeties open", "The safeties are bypassed"],
        answer: 1,
        explanation: "Correct: (b). Series = AND: every element must pass the circuit. (a) describes parallel (OR) wiring. (c) Open NC safeties break the rung by definition of a safety chain. (d) Bypassing safeties is prohibited practice, not a logic state."
      },
      {
        module: 5,
        q: "Measuring across each device in a live, calling safety chain, you find full control voltage across the condensate float switch and ~0 V across the others. The float switch is:",
        choices: ["Closed and healthy", "Open — it is the break in the chain (pan full or switch failed)", "Shorted", "Not part of the circuit"],
        answer: 1,
        explanation: "Correct: (b). In a series string, supply voltage appears across the open element. (a) A closed switch shows ~0 V across itself — like the others here. (c) A short would also show ~0 V and conduct. (d) It is demonstrably in the circuit: the voltage distribution proves it."
      },
      {
        module: 5,
        q: "A motor starter differs from a plain contactor because the starter adds:",
        choices: ["A second coil", "Overload protection for the motor", "A thermostat", "Pneumatic control"],
        answer: 1,
        explanation: "Correct: (b). Starter = contactor + overloads, protecting the motor from sustained overcurrent. (a) Coil count is not the distinction. (c) Thermostats command starters but aren't part of them. (d) Starters are electrical devices regardless of what control signal drives them."
      },
      {
        module: 6,
        q: "A pneumatic actuator with a 3–13 psig spring range shows 11 psig branch pressure. Its stroke position is:",
        choices: ["11%", "55%", "80%", "100%"],
        answer: 2,
        explanation: "Correct: (c). (11 − 3) ÷ 10 = 0.80 → 80%. (a) confuses psig with percent. (b) would be 8.5 psig. (d) requires the full 13 psig at the top of the spring range."
      },
      {
        module: 6,
        q: "Main air at the PRV gauge reads far below its normal ~20 psig, and every pneumatic loop in the area is misbehaving differently. The diagnosis is:",
        choices: ["Every thermostat failed at once", "A shared supply problem — compressor, PRV, or dryer — starving all controllers", "All actuators have torn diaphragms", "The building needs DDC conversion today"],
        answer: 1,
        explanation: "Correct: (b). Simultaneous multi-loop failure with low main pressure is a supply diagnosis. (a) and (c) require mass simultaneous independent failures — implausible against one shared reading. (d) Conversion is a capital project, not a diagnosis of today's low gauge reading."
      },
      {
        module: 6,
        q: "A replacement pneumatic thermostat is installed and the room now overheats in cooling season: as the room warms, the chilled-water valve closes. The parts are new and functional. The fault is:",
        choices: ["The valve is piped backwards", "The new stat's acting direction (direct/reverse) doesn't match the application — it lowers branch pressure as temperature rises where the valve needs it to rise (or the NO/NC pairing is inverted)", "The main air is too clean", "The spring range is 3–13 psig"],
        answer: 1,
        explanation: "Correct: (b). Behavior = controller action × valve normal position; the replacement flipped the product of that equation. (a) A piping error wouldn't produce this clean inverse tracking to temperature. (c) Clean air is never a fault. (d) 3–13 psig is the standard correct range, not an error."
      },
      {
        module: 6,
        q: "The pneumatic receiver-controller's advantage over a plain pneumatic thermostat is that it:",
        choices: ["Eliminates the need for compressed air", "Accepts remote transmitter signals and can implement strategies such as setpoint reset", "Works without a branch line", "Uses no restrictors"],
        answer: 1,
        explanation: "Correct: (b). Remote sensing plus reset capability is its defining value. (a) It is pneumatic through and through — main air is mandatory. (c) Its output still travels a branch line to actuators. (d) Restrictors are fundamental to pneumatic controller operation, receiver-controllers included."
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
        q: "A trainee says 'the damper motor is the controller because it decides how far to open.' The correction is:",
        choices: ["Correct — actuators decide position", "The actuator is the controlled device; it executes a position decided by the controller from the sensor's information", "The sensor is the controller", "There is no controller in a damper system"],
        answer: 1,
        explanation: "Correct: (b). Executing a command is not making the decision. (a) confuses muscle with judgment — the loop roles from Module 1. (c) The sensor only reports. (d) Every modulating damper loop has a controlling function, whether in a stat, board, or DDC panel."
      },
      {
        module: 2,
        q: "An integral term is set far too aggressive on a chilled-water loop. The expected behavior is:",
        choices: ["Perfect control with zero offset instantly", "Slow, rolling oscillation as integral keeps piling correction onto results not yet felt", "The sensor stops reading", "The valve locks fully closed"],
        answer: 1,
        explanation: "Correct: (b). Over-fast integral is the classic self-inflicted hunting cause. (a) Properly tuned integral removes offset; excessive integral destabilizes. (c) Tuning cannot damage a sensor's reading. (d) The valve cycles rather than locking — the output is being driven, wrongly, not frozen."
      },
      {
        module: 3,
        q: "A pressure transmitter ranged 0–4 in. w.c. on a 4–20 mA loop reads 18 mA. Duct pressure is:",
        choices: ["3.0 in. w.c.", "3.5 in. w.c.", "3.6 in. w.c.", "4.5 in. w.c."],
        answer: 1,
        explanation: "Correct: (b). Fraction = (18 − 4) ÷ 16 = 0.875; 0.875 × 4 = 3.5 in. w.c. (a) is the 75% (16 mA) value. (c) results from sloppy fraction math. (d) exceeds the transmitter's range — impossible for a healthy loop at 18 mA."
      },
      {
        module: 3,
        q: "A 2–10 V analog output convention is used on a critical valve so that a reading of 0.5 V means:",
        choices: ["The valve is 5% open", "A fault — the signal has fallen below its live-zero floor", "The valve is fully closed normally", "Maximum output"],
        answer: 1,
        explanation: "Correct: (b). With a 2 V live zero, sub-2 V signals announce broken wires/failed outputs instead of masquerading as 'closed.' (a) 5% of span above 2 V would be 2.4 V. (c) A legitimate fully-closed command is exactly 2.0 V, not 0.5. (d) Maximum is 10 V."
      },
      {
        module: 4,
        q: "During defrost on a heat pump, occupants feel cool air briefly while auxiliary heat runs. This is:",
        choices: ["A failed reversing valve", "Normal sequence — the unit temporarily cools to melt the outdoor coil while aux heat tempers supply air", "A thermostat wiring error", "Proof the defrost sensor is bad"],
        answer: 1,
        explanation: "Correct: (b). Defrost is controlled, temporary cooling-mode operation with aux support. (a) The valve is doing exactly what the defrost board commanded. (c) Wiring errors don't produce timed, self-recovering behavior. (d) Successful defrost termination proves the sensor/board chain is working."
      },
      {
        module: 4,
        q: "Second-stage cooling is engaging on a mild day within two minutes of every first-stage start. Space temperature is comfortable. The most likely culprit is:",
        choices: ["An oversized second-stage compressor", "Staging configuration — a temperature threshold or timer set far too aggressively", "Low refrigerant charge", "A failed reversing valve"],
        answer: 1,
        explanation: "Correct: (b). Comfortable space + premature stage-up = the staging logic, not capacity faults. (a) Compressor size doesn't change when the call arrives. (c) Low charge degrades capacity and would show as poor cooling, not eager staging. (d) This is a cooling-mode selection that works; the valve isn't implicated."
      },
      {
        module: 5,
        q: "An airflow-proving interlock contact is wired in series with electric heat contactor coils. Its purpose in ladder terms is:",
        choices: ["OR logic — heat may run with or without air", "AND logic — heat energizes only when airflow is proven", "To provide power to the blower", "To bypass the limit switch"],
        answer: 1,
        explanation: "Correct: (b). Series placement makes airflow a mandatory condition. (a) OR logic would be a parallel path defeating the protection. (c) The interlock contact carries control current for the coil circuit, not blower power. (d) It adds a protective condition; it removes none."
      },
      {
        module: 5,
        q: "A chiller refuses to start. Its start-permissive string includes chilled-water flow proof. The pump runs, but the flow switch shows open. Correct next step:",
        choices: ["Jumper the flow switch permanently", "Verify actual flow and the switch's operation — the permissive is doing its job based on what it senses", "Replace the compressor", "Raise the setpoint"],
        answer: 1,
        explanation: "Correct: (b). Determine whether flow is truly absent (valve, strainer, pump rotation) or the switch lies — the interlock chain must be believed until tested. (a) Permanent jumpers on safety permissives are prohibited practice. (c) The compressor is protected, not proven guilty. (d) Setpoints don't repair flow proofs."
      },
      {
        module: 6,
        q: "Branch pressure at a pneumatic valve actuator reads a correct 8 psig for a 50% command, but the valve is fully closed and its stem is visibly bent. The fault domain is:",
        choices: ["The controller", "Main air supply", "Mechanical — the actuator/stem/valve cannot convert correct signal into motion", "The thermostat's calibration"],
        answer: 2,
        explanation: "Correct: (c). Signal correct + no motion + visible mechanical damage localizes the fault downstream of the signal. (a) and (d) are exonerated by the correct branch pressure itself. (b) Low main air would show as wrong branch pressure."
      },
      {
        module: 6,
        q: "Wet, oily control air will first damage a pneumatic system by:",
        choices: ["Rust the ducts", "Clogging the tiny restrictors and orifices that pneumatic controllers depend on", "Increasing main pressure", "Changing spring ranges"],
        answer: 1,
        explanation: "Correct: (b). Restrictors are the smallest passages in the system and the first casualties of contamination. (a) Duct corrosion is a building issue, not the control failure mechanism. (c) Contamination restricts flow; it doesn't raise supply pressure. (d) Spring ranges are physical constants of the actuator springs."
      },
      {
        module: 7,
        q: "A furnace board's code chart (for that model) indicates 'flame sensed out of sequence.' The board is reporting:",
        choices: ["A healthy ignition", "It detected a flame signal when no flame should exist — a sensor/board safety condition to investigate before further operation", "Low gas pressure only", "A dirty filter"],
        answer: 1,
        explanation: "Correct: (b). Flame-without-call is a serious reported state (e.g., a shorted sensor path or valve issue) requiring investigation. (a) Out-of-sequence means the timing itself is the fault. (c) Gas pressure problems produce failure-to-light codes, not phantom flame. (d) Filters don't generate flame signals."
      },
      {
        module: 7,
        q: "A heat pump never defrosts though icing is severe. The board's timer is verified running. The coil sensor is found clipped to a warm discharge line instead of the coil. The failure is:",
        choices: ["The board's program", "Sensor placement — the board receives a permanent 'coil is warm' lie and correctly withholds defrost", "The reversing valve", "Low outdoor temperature itself"],
        answer: 1,
        explanation: "Correct: (b). Module 1's law: perfect logic acting on a misplaced sensor produces confident wrong behavior. (a) The board executed its inputs faithfully. (c) A valve fault wouldn't prevent the board from attempting defrost shifts. (d) Cold weather is the need for defrost, not its blocker."
      },
      {
        module: 7,
        q: "A low-pressure chiller's controls increasingly alarm on purge run time over a season. Maintenance should interpret this as:",
        choices: ["Normal aging, ignore it", "Evidence of a growing inward air leak raising non-condensables — find and repair the leak path", "The purge unit needs a larger motor", "The chiller is overcharged with refrigerant"],
        answer: 1,
        explanation: "Correct: (b). Purge duty tracks air ingress in a vacuum-operating machine; rising duty is the leak's signature (EPA Type III field reality). (a) Ignoring it schedules efficiency loss and moisture damage. (c) The purge unit is reporting workload, not lacking capacity. (d) Refrigerant overcharge doesn't create purge work — air does."
      },
      {
        module: 8,
        q: "A current switch on a supply fan, wired to a controller to prove operation, is a:",
        choices: ["DO", "AO", "DI", "AI"],
        answer: 2,
        explanation: "Correct: (c). It reports a two-state fact into the controller: digital input. (a) A DO commands; this device reports. (b) An AO is a varying command out. (d) An AI reports a varying value; a current switch is open/closed only."
      },
      {
        module: 8,
        q: "The operator workstation crashes mid-afternoon. In a correctly architected DDC system, the classrooms:",
        choices: ["Immediately lose all control", "Remain controlled — field controllers run autonomously; supervision and graphics are what's lost", "Revert to manual dampers", "All switch to unoccupied mode"],
        answer: 1,
        explanation: "Correct: (b). Autonomy at the field level is the architecture's core promise. (a) describes the design error of putting loop control in the front end. (c) No manual fallback engages automatically. (d) Mode changes come from schedules/controllers, not from a workstation failure."
      },
      {
        module: 8,
        q: "A damper actuator is landed on a controller point configured as a DI. The predictable result:",
        choices: ["The damper works normally", "No command signal is ever sent — the channel listens instead of speaking, so the actuator never receives its 0–10 V", "The damper slams fully open", "The network slows down"],
        answer: 1,
        explanation: "Correct: (b). Point-type mismatch means the output function doesn't exist electrically. (a) Inputs cannot drive actuators. (c) With no signal, the actuator sits at its fail position, not a commanded extreme. (d) A local misconfiguration doesn't degrade network traffic."
      },
      {
        module: 9,
        q: "A BACnet Analog Input object at a front end is best understood as:",
        choices: ["A physical wire", "The standardized data representation of a measured point, with properties like present value and units", "A brand of sensor", "The network cable itself"],
        answer: 1,
        explanation: "Correct: (b). BACnet standardizes data as objects so any compliant station can read them. (a) Wires carry the field signal to the controller; the object is the network-side model. (c) Objects are protocol constructs, not hardware brands. (d) The cable is the medium, not the modeled data."
      },
      {
        module: 9,
        q: "Trunk wiring for an MS/TP segment should be:",
        choices: ["Star-wired from a central hub with no termination", "Daisy-chained device to device with end-of-line termination, correct polarity, and unique addresses", "Run in the same conduit as line voltage for convenience, unterminated", "Wireless wherever possible"],
        answer: 1,
        explanation: "Correct: (b). Those disciplines are what make RS-485 buses reliable. (a) Star stubs and missing termination cause reflections and dropouts. (c) Mixing with line voltage invites interference and code problems; termination is still required. (d) MS/TP is by definition the wired bus; 'wireless MS/TP' isn't the installed medium here."
      },
      {
        module: 9,
        q: "An alarm list shows 58 alarms beginning within one minute of 'Chiller CH-1 trip.' The operator's correct read is:",
        choices: ["58 independent failures", "One root event with a cascade — start at the earliest alarm and fix the chiller; most others are consequences", "A front-end software bug, certainly", "Proof the alarm system should be disabled"],
        answer: 1,
        explanation: "Correct: (b). Flood discipline: earliest timestamp ≈ cause; downstream alarms are the same event in costume. (a) Statistically and physically implausible as simultaneous independent faults. (c) Possible in theory, but the pattern matches plant physics first. (d) Muting witnesses remains the forbidden fix."
      },
      {
        module: 10,
        q: "An RTU sequence enables compressor stage 1 only after fan status is proven. The fan DO is on, status never closes, and after the proof delay a fan alarm posts and cooling locks out. The controls are:",
        choices: ["Defective — cooling should run anyway", "Behaving exactly as sequenced; the fault is in the fan's actual operation or its status device", "Waiting for the economizer", "In defrost"],
        answer: 1,
        explanation: "Correct: (b). This is command ≠ status enforced by design. (a) Running compressors without proven airflow is what the sequence exists to prevent. (c) Economizer logic doesn't block fan proving. (d) Defrost is a heat-pump heating function, not this cooling lockout."
      },
      {
        module: 10,
        q: "Outdoor air is 50°F, the changeover limit is 65°F, zones call for cooling, and dampers sit at minimum while compressors run. The economizer is:",
        choices: ["Working correctly — it's too cold to economize", "Failing to economize — outdoor air is suitable (below the limit) and should be doing the cooling first", "In heating mode", "Broken beyond repair"],
        answer: 1,
        explanation: "Correct: (b). 50°F < 65°F limit means free cooling is available; mechanical-first operation wastes it — investigate sensors, damper proof, and configuration. (a) misreads the comparison direction. (c) Compressors running on cooling calls is cooling mode, just the expensive kind. (d) Premature; the fault families here are common and repairable."
      },
      {
        module: 10,
        q: "A VAV box's outer (zone) loop requests minimum airflow and full reheat on a winter morning, but measured airflow is at maximum and the space overheats. The failed element is most likely in:",
        choices: ["The zone loop's logic", "The inner airflow loop or damper/actuator — delivered airflow doesn't match the request", "The heating setpoint", "The building schedule"],
        answer: 1,
        explanation: "Correct: (b). Request correct, delivery wrong = inner loop domain (flow sensor lying high-side inverse, stuck damper, failed actuator). (a) The request itself is provably sane for a cold morning call. (c) Setpoints shape the request, which is already correct. (d) Scheduling governs modes, not a box's delivered CFM."
      },
      {
        module: 10,
        q: "Which sequence excerpt is written to professional, testable standard?",
        choices: ["'Cool the building as needed on warm days.'", "'Enable stage 2 when zone temperature exceeds the cooling setpoint by 2°F or stage 1 has run 15 minutes continuously, whichever occurs first.'", "'Run the fan when appropriate.'", "'Open the valve enough to keep things comfortable.'"],
        answer: 1,
        explanation: "Correct: (b). Named sensor, thresholds, timer, action — every clause forceable in commissioning. (a), (c), and (d) contain no measurable condition ('as needed,' 'appropriate,' 'comfortable') that a tester could force or a programmer could unambiguously code."
      },
      {
        module: 11,
        q: "After a demand-limit event ends, all shed rooftop units restart in the same second and the demand meter spikes above the pre-event peak. The programming error was:",
        choices: ["Shedding too many units", "Restoring simultaneously instead of staggering the restoration", "Using a meter at all", "Rotating the shed order"],
        answer: 1,
        explanation: "Correct: (b). Synchronized restart rebuilds load as a cliff — the exact peak shape demand limiting exists to prevent. (a) Shed quantity determines savings; the spike's signature is timing. (c) The meter is the strategy's essential input. (d) Rotation is correct practice for fairness, unrelated to the restoration spike."
      },
      {
        module: 11,
        q: "Chilled-water reset raises the water temperature setpoint on a mild day. The efficiency logic is:",
        choices: ["Warmer water cools better", "Chillers use less energy producing warmer water, and coils can compensate with valve position while loads are light", "Pumps run faster with warm water", "Reset only matters for boilers"],
        answer: 1,
        explanation: "Correct: (b). Lift reduction saves chiller energy; the honest limit is the first coil that can't make setpoint. (a) Warmer water cools less per pass — compensation comes from flow/valve, within limits. (c) Pump behavior isn't the savings mechanism. (d) Reset applies across heating and cooling plants alike."
      },
      {
        module: 11,
        q: "A zone temperature trend shows a clean repeating wave with a 26-minute period, mirrored by the valve output. The loop is:",
        choices: ["Perfectly tuned", "Hunting — investigate tuning (gain/integral) after verifying sensor and valve mechanics", "Off and economizing", "In a network outage"],
        answer: 1,
        explanation: "Correct: (b). A setpoint-value-output wave in lockstep is the textbook hunting signature. (a) Tuned loops settle; they don't wave. (c) An off loop shows no output activity to mirror. (d) Network loss freezes data rather than producing a live, coherent oscillation record."
      },
      {
        module: 11,
        q: "An optimal-start system chronically under-recovers after long weekends but performs on normal nights. A probable cause is:",
        choices: ["The clock loses time on Sundays", "The building's weekend drift exceeds what the model expects (deep setback over 3 days) — verify with trends of zone temperature across the weekend", "Optimal start doesn't work on Mondays", "The outdoor sensor needs a C wire"],
        answer: 1,
        explanation: "Correct: (b). Pattern-specific failure (long weekends only) points at the model's drift assumptions, confirmable in trend data. (a) A clock fault would corrupt all schedule behavior, not just recovery depth. (c) Algorithms don't observe weekdays; buildings' thermal states do. (d) C wires belong to thermostat power, not outdoor sensors' trend evidence."
      },
      {
        module: 12,
        q: "At checkout, a commanded damper's front-end feedback sweeps perfectly, but nobody has looked at the damper itself. The checkout is:",
        choices: ["Complete", "Incomplete — feedback from the same possibly-faulty path cannot verify the physical device; witness the damper move", "Failed permanently", "A network test"],
        answer: 1,
        explanation: "Correct: (b). Point-to-point means both physical ends witnessed. (a) Screen-only verification is the classic commissioning error this course targets. (c) Nothing has failed; the verification simply hasn't happened yet. (d) Network health is a different layer of the checkout."
      },
      {
        module: 12,
        q: "A sensor reads +1°F off at 50°F and −4°F off at 85°F versus a reference. The correct remedy path is:",
        choices: ["Apply a −1°F offset and finish", "Treat as curve/type or scaling error — correct the configured sensor type/range, then re-verify at two points", "Replace the reference meter", "Ignore errors under 5°F"],
        answer: 1,
        explanation: "Correct: (b). Sign-changing, non-constant error is curve behavior; offsets can't fix it. (a) An offset chosen at one end guarantees a worse error at the other. (c) The reference isn't indicted by a two-point pattern from the installed sensor. (d) A 4°F control error is a comfort and energy fault, not a rounding tolerance."
      },
      {
        module: 12,
        q: "The correct first response to finding a system 'behaving strangely' in DDC is to check:",
        choices: ["The refrigerant charge", "Mode/intent per the sequence, then overrides and software state, before condemning hardware", "The age of the building", "Whether a newer controller model exists"],
        answer: 1,
        explanation: "Correct: (b). The troubleshooting method's opening moves catch the most common DDC 'failures' — correct sequences unread and forgotten overrides. (a) Charge is a refrigeration-side suspect for capacity symptoms, reached after controls intent is established. (c) and (d) are trivia, not diagnostics."
      },
      {
        module: 1,
        q: "A humidity control for an archive holds RH at setpoint using a sensor, a controller, and a steam valve. If the valve actuator's linkage slips, the loop's behavior will be:",
        choices: ["Unaffected — linkages aren't in the loop", "The controller drives its output harder as RH error persists, but the valve doesn't move proportionally — correct diagnosis starts by separating command from physical response", "The sensor reads zero", "The setpoint changes itself"],
        answer: 1,
        explanation: "Correct: (b). A slipped linkage breaks the act leg of the loop while sense/decide remain healthy — output saturates, process doesn't follow. (a) The linkage is precisely how the controlled device acts; it is in the loop. (c) Sensor readings stay honest; RH will drift from setpoint, not zero artificially. (d) Setpoints don't move themselves; errors do."
      },
      {
        module: 2,
        q: "A two-position control's differential is widened. Equipment cycling and temperature swing change as:",
        choices: ["More cycling, smaller swing", "Less cycling, larger swing", "No change to either", "Less cycling, smaller swing"],
        answer: 1,
        explanation: "Correct: (b). A wider deadband means fewer starts spread over a bigger temperature excursion. (a) inverts both effects — that describes narrowing the differential. (c) Differential is the direct determinant of both behaviors. (d) is the impossible free lunch: gentler cycling always costs swing in on-off control."
      },
      {
        module: 3,
        q: "Why do field transmitters favor current-loop signals over raw sensor resistance for long runs?",
        choices: ["Current is cheaper to generate", "Current signals resist degradation from wire resistance over distance, preserving accuracy to the controller", "Resistance can't be measured", "Voltage signals are prohibited outdoors"],
        answer: 1,
        explanation: "Correct: (b). Loop current is the same everywhere in the loop regardless of run length; raw resistance adds the wire's own resistance to the measurement. (a) Cost isn't the engineering driver. (c) Resistance is measured routinely — at the device, which is the point. (d) Voltage signals are common (0–10 V); they're chosen knowing their distance/grounding limitations."
      },
      {
        module: 4,
        q: "A heat pump installation heats in cooling mode after a stat replacement; O/B configuration is verified correct and 24 V appears on O during cooling calls as designed for this unit. Next suspects, in order:",
        choices: ["Compressor first", "The O/B wiring path (landed on the wrong terminal at the air handler/unit), the valve solenoid coil, then the valve itself", "The refrigerant type", "The indoor blower"],
        answer: 1,
        explanation: "Correct: (b). With stat logic proven, follow the signal physically: wiring landing, solenoid, then mechanism — configuration and signal before parts, wires before the valve. (a) A compressor cannot invert system mode. (c) Refrigerant identity doesn't swap heating/cooling roles. (d) The blower moves air for both modes impartially."
      },
      {
        module: 6,
        q: "A pneumatic thermostat's branch gauge reads near main pressure at all times regardless of room temperature. Possible causes include:",
        choices: ["A perfectly calibrated controller", "A failed/clogged restrictor or internal controller fault pinning the output, or a branch line teed into main air by a piping error", "Low main air", "An actuator spring that is too strong"],
        answer: 1,
        explanation: "Correct: (b). Branch pinned at supply means the controller isn't metering — internal fault or mis-piping. (a) A working controller varies branch with temperature by definition. (c) Low main would lower, not pin high, the branch ceiling. (d) Actuator springs affect position response, not the controller's output pressure."
      },
      {
        module: 7,
        q: "Before replacing a control board that 'won't start the furnace,' the complete evidence set is:",
        choices: ["The board looks old", "Power to the board verified, the call (W) verified arriving, all safety inputs verified in their correct state, and the first output in sequence verified absent", "The homeowner's description", "The price of the board"],
        answer: 1,
        explanation: "Correct: (b). Condemn a board only when its inputs and power are proven good and its commanded output is provably missing. (a) Age is not evidence. (c) Descriptions start investigations; they don't conclude them. (d) Cost argues for more verification, not less."
      },
      {
        module: 8,
        q: "A points list shows a rooftop unit with 3 AI, 2 AO, 4 DI, 5 DO. Which count is most likely under-scoped for proving operation, given Module 8's teaching?",
        choices: ["AI — too many sensors", "DI — every significant DO (fan, stages) deserves a status/feedback DI, and counts deserve a second look before panel purchase", "AO — modulating points are never needed", "DO — outputs should be eliminated"],
        answer: 1,
        explanation: "Correct: (b). Command-without-proof is the classic points-list economy that fails in service. (a) Sensing is rarely the over-budget item and isn't a proof problem. (c) AOs are essential wherever modulation exists. (d) Outputs are how anything happens at all."
      },
      {
        module: 10,
        q: "Night setback in an unoccupied school lets zones fall to the setback limit, then the AHU cycles briefly. This behavior is:",
        choices: ["A malfunction — unoccupied means off forever", "The sequence working: unoccupied mode permits cycling on wide setback/setup limits to protect the building", "Caused by the economizer", "A freezestat trip"],
        answer: 1,
        explanation: "Correct: (b). Unoccupied control is a mode with limits, not an absence of control. (a) misreads the mode's definition. (c) Economizer logic governs outdoor-air cooling decisions, not night setback cycling. (d) Freezestat trips force a specific protective state and alarm — not routine brief cycles at the setback limit."
      },
      {
        module: 11,
        q: "A schedule audit reveals a building scheduled occupied 5 a.m.–11 p.m. 'because of one evening class' held in one wing. The professional redesign is:",
        choices: ["Keep it — simplicity wins", "Zone the schedule: the evening wing on its own timetable/exception, the rest of the building on true occupancy hours", "Turn off all scheduling", "Extend hours further for safety"],
        answer: 1,
        explanation: "Correct: (b). Schedules should follow actual occupancy per zone; blanket hours for one room tax the whole building nightly. (a) Simplicity that wastes six figures of runtime over years isn't simple, it's expensive. (c) Removing schedules forfeits the cheapest strategy in the course. (d) More hours is the opposite of the finding."
      },
      {
        module: 12,
        q: "A control valve passes its checkout in July. In January the coil freezes. Investigation shows the valve strokes opposite to command (opens on 'close'). The lasting lesson is:",
        choices: ["Valves reverse seasonally", "Checkout must verify direction of action against the sequence's fail/action intent — stroking alone isn't verifying; the July test missed the direction check", "January is unlucky", "The valve needs a bigger actuator"],
        answer: 1,
        explanation: "Correct: (b). Action direction (direct/reverse, fail position) is part of the point's definition; a stroke-only test let a reversed valve pass. (a) Hardware doesn't observe seasons. (c) Luck isn't a root cause. (d) Actuator size affects force, not direction of travel versus command."
      }
    ]
  }
};
