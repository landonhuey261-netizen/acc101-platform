// HVAC 111 — Midterm and Final exams.
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
        q: "Which action comes FIRST in a correct lockout/tagout sequence?",
        choices: ["Applying locks and tags", "Notifying affected employees that the equipment will be shut down and locked out", "Verifying absence of voltage", "Discharging the run capacitor"],
        answer: 1,
        explanation: "Correct (b): Notification is step 1 — everyone affected knows before anything changes state. (a) Locks come after shutdown and isolation. (c) Verification is the last step, after stored energy is released. (d) Discharging stored energy is step 6, well after notification."
      },
      {
        module: 1,
        q: "The purpose of the live-dead-live method is to:",
        choices: ["Discharge capacitors safely", "Prove the meter works before and after the absence-of-voltage test so a zero reading can be trusted", "Measure the circuit's current without a clamp", "Warm up the equipment before service"],
        answer: 1,
        explanation: "Correct (b): The two live checks bracket the dead test, catching a meter or lead failure that would otherwise fake a 'dead' reading. (a) Capacitors are discharged through a resistor, not by meter testing. (c) Live-dead-live is a voltage verification, not a current method. (d) It verifies safety; it does not warm anything up."
      },
      {
        module: 1,
        q: "A tagout device, by itself, provides less protection than a lockout device because the tag:",
        choices: ["Fades in sunlight", "Only warns — it does not physically hold the isolating device in the off position", "Cannot be printed with the worker's name", "Melts at high temperature"],
        answer: 1,
        explanation: "Correct (b): A tag is a warning label attached with a tie; it cannot restrain a switch. A lock physically blocks re-energization. (a) Legibility matters for tags but is not the protection difference. (c) Tags do carry identification as part of the program. (d) Temperature resistance is not the defining weakness."
      },
      {
        module: 1,
        q: "After a variable-speed drive is locked out, which stored-energy hazard remains inside it?",
        choices: ["Compressed refrigerant in the drive housing", "Charge stored in the DC bus capacitors", "A wound mechanical spring", "Pressurized nitrogen"],
        answer: 1,
        explanation: "Correct (b): Drive DC bus capacitors hold significant charge after power removal and must discharge (per manufacturer instructions) and be verified with a meter. (a) Drives contain electronics, not refrigerant charge. (c) Springs are a hazard on some mechanical equipment, not inside a drive. (d) Nitrogen belongs to brazing/test work, not stored in drives."
      },
      {
        module: 2,
        q: "A blower relay coil of 80 Ω is powered at 24 V. Its current draw is:",
        choices: ["3.33 A", "0.3 A", "1,920 A", "0.03 A"],
        answer: 1,
        explanation: "Correct (b): I = E ÷ R = 24 ÷ 80 = 0.3 A. (a) 3.33 A inverts the division. (c) 1,920 multiplies the two numbers. (d) 0.03 A misplaces the decimal by a factor of ten."
      },
      {
        module: 2,
        q: "An electric heater draws 8 A at 240 V. Its power output is:",
        choices: ["30 W", "1,920 W", "248 W", "19,200 W"],
        answer: 1,
        explanation: "Correct (b): P = E × I = 240 × 8 = 1,920 W. (a) 30 W is E ÷ I. (c) 248 W adds the numbers. (d) 19,200 W is a factor-of-ten slip."
      },
      {
        module: 2,
        q: "A 120 V lamp circuit draws 0.5 A. The lamp's resistance is:",
        choices: ["60 Ω", "240 Ω", "0.004 Ω", "120 Ω"],
        answer: 1,
        explanation: "Correct (b): R = E ÷ I = 120 ÷ 0.5 = 240 Ω. (a) 60 Ω multiplies 120 × 0.5. (c) 0.004 Ω inverts the ratio. (d) 120 Ω simply repeats the voltage value."
      },
      {
        module: 2,
        q: "A resistive element rated 2,400 W at 240 V is operated at 120 V. Its output is approximately:",
        choices: ["2,400 W", "1,200 W", "600 W", "300 W"],
        answer: 2,
        explanation: "Correct (c): Resistance is fixed (R = 240² ÷ 2,400 = 24 Ω). At 120 V, P = 120² ÷ 24 = 600 W — one quarter, because power follows voltage squared. (a) ignores the voltage change. (b) uses a linear half instead of the squared relationship. (d) would be one-eighth — no rule produces it here."
      },
      {
        module: 2,
        q: "A control load draws 0.62 A. In milliamps this is:",
        choices: ["6.2 mA", "62 mA", "620 mA", "6,200 mA"],
        answer: 2,
        explanation: "Correct (c): Multiply amps by 1,000 → 620 mA. (a) and (b) divide by powers of ten. (d) multiplies by 10,000."
      },
      {
        module: 3,
        q: "Resistors of 4 Ω, 6 Ω, and 10 Ω in series across 100 V carry a current of:",
        choices: ["20 A", "5 A", "2 A", "0.2 A"],
        answer: 1,
        explanation: "Correct (b): R_T = 4 + 6 + 10 = 20 Ω; I = 100 ÷ 20 = 5 A. (a) 20 A confuses total resistance with current. (c) 2 A would require 50 Ω. (d) 0.2 A inverts the division."
      },
      {
        module: 3,
        q: "A 12 Ω resistor and a 24 Ω resistor are in parallel. Their total resistance is:",
        choices: ["36 Ω", "8 Ω", "18 Ω", "288 Ω"],
        answer: 1,
        explanation: "Correct (b): Product over sum: (12 × 24) ÷ (12 + 24) = 288 ÷ 36 = 8 Ω — less than the smallest branch ✓. (a) 36 Ω is the series total. (c) 18 Ω is a plain average, which the reciprocal rule never gives. (d) 288 is the product before dividing by the sum."
      },
      {
        module: 3,
        q: "In a series circuit of 15 Ω and 45 Ω across 48 V, the voltage across the 45 Ω resistor is:",
        choices: ["12 V", "24 V", "36 V", "48 V"],
        answer: 2,
        explanation: "Correct (c): Divider: 48 × (45 ÷ 60) = 36 V. Check: I = 48 ÷ 60 = 0.8 A; 0.8 × 45 = 36 V ✓. (a) 12 V is the drop on the 15 Ω resistor. (b) 24 V would need equal resistances. (d) 48 V is the whole supply, taken only if the other resistor vanished."
      },
      {
        module: 3,
        q: "Three parallel branches on 120 V draw 2 A, 3 A, and 5 A. The supply must deliver:",
        choices: ["5 A — the largest branch", "10 A", "3.33 A — the average", "30 A"],
        answer: 1,
        explanation: "Correct (b): Parallel branch currents add: 2 + 3 + 5 = 10 A. (a) ignores two branches. (c) Averages instead of summing. (d) multiplies two of the values together."
      },
      {
        module: 3,
        q: "A series control string loses its load's operation and you measure the full supply voltage across one closed-rated limit switch. This tells you:",
        choices: ["The switch is healthy and carrying current", "That switch is open — it is the break in the string", "The coil is shorted", "The transformer is putting out double voltage"],
        answer: 1,
        explanation: "Correct (b): In a series string, the open point takes the full supply voltage; closed elements drop ~0 V. (a) A healthy closed switch drops essentially nothing. (c) A shorted coil would still complete the string and pass current. (d) Double voltage would appear everywhere, not selectively across one switch."
      },
      {
        module: 4,
        q: "On a dual run capacitor marked 70/7.5 µF, the compressor connects to:",
        choices: ["The FAN terminal (7.5 µF section)", "The HERM terminal (70 µF section)", "The ground terminal", "Either section — they are interchangeable"],
        answer: 1,
        explanation: "Correct (b): HERM is the compressor's section and carries the larger value (70 µF). (a) FAN serves the fan motor with the smaller 7.5 µF section. (c) Dual caps have C/FAN/HERM terminals, not a ground terminal in this role. (d) Swapping sections misassists both motors — they are not interchangeable."
      },
      {
        module: 4,
        q: "A 75 VA transformer with a 24 V secondary can supply a maximum continuous current of about:",
        choices: ["0.32 A", "3.1 A", "1.8 A", "75 A"],
        answer: 1,
        explanation: "Correct (b): I = VA ÷ E = 75 ÷ 24 ≈ 3.1 A. (a) 0.32 A inverts the division. (c) 1.8 A matches no step. (d) 75 A confuses the VA rating with amps."
      },
      {
        module: 4,
        q: "A start capacitor left in a running motor's circuit will fail early because it is:",
        choices: ["Too small in µF for any use", "Built for intermittent duty, not continuous operation", "Always oil-filled", "Rated only for DC"],
        answer: 1,
        explanation: "Correct (b): Start capacitors are sprint devices — seconds of duty, then rest. Continuous current overheats them. (a) Start capacitors have LARGE µF values, the opposite claim. (c) Start caps are typically dry electrolytic; run caps are the oil-filled ones. (d) Both types are AC devices in this service."
      },
      {
        module: 4,
        q: "A healthy nominal-24 V control transformer's secondary, measured with no load, most likely reads:",
        choices: ["Exactly 24.0 V", "About 26–28 V", "About 12 V", "0 V until a thermostat calls"],
        answer: 1,
        explanation: "Correct (b): Nominal secondaries characteristically read a few volts high unloaded and settle near rating under load. (a) 'Nominal' never means exact. (c) Nothing halves the voltage. (d) The secondary is live whenever the primary is; calls draw current, they don't switch the transformer on."
      },
      {
        module: 5,
        q: "A contact is described as 'normally open.' This means it is open when:",
        choices: ["The equipment is running normally", "Its coil is de-energized / the device is at rest", "The thermostat is satisfied — always", "The contact is brand new"],
        answer: 1,
        explanation: "Correct (b): 'Normally' = the rest, de-energized state — the state diagrams are drawn in. (a) During operation an NO contact may be closed for hours; that doesn't change its designation. (c) Thermostat satisfaction is one control state among many, not the definition. (d) Age is irrelevant to the term."
      },
      {
        module: 5,
        q: "A relay's coil is powered from 24 V while its contacts switch a 240 V blower. This is safe and normal because:",
        choices: ["The relay converts 24 V to 240 V", "Coil and contact circuits are electrically isolated and interact only magnetically", "Blowers draw almost no current", "The contacts are insulated with plastic coatings"],
        answer: 1,
        explanation: "Correct (b): Isolation between circuits is the relay's defining feature. (a) Relays do not transform voltage. (c) Blowers draw real current — within the contacts' rating, which is a separate check. (d) Contacts are conductive metal; isolation comes from the device's construction, not coatings on contacts."
      },
      {
        module: 5,
        q: "A condenser fan keeps running after the thermostat is satisfied and the contactor coil is de-energized. The most likely cause is:",
        choices: ["A weak run capacitor", "Welded contactor contacts", "An oversized transformer", "A dirty air filter"],
        answer: 1,
        explanation: "Correct (b): Contacts fused closed ignore the coil entirely — the load has lost its off switch. (a) A weak capacitor affects motor starting/running, not shutoff. (c) Transformer size plays no role once the coil is de-energized. (d) Filters affect airflow, not electrical shutoff."
      },
      {
        module: 5,
        q: "A contactor chatters during a cooling call and its coil measures 17 V instead of 24 V. The best next step is to:",
        choices: ["Replace the contactor immediately", "Find why the coil voltage is low: measure the transformer secondary under load and check for voltage dropped across switches in series with the coil", "Add a hard-start kit", "Oil the contactor armature"],
        answer: 1,
        explanation: "Correct (b): Chatter is a coil-supply complaint — sagging transformer (overload) or a series drop somewhere in the string. (a) A new contactor on 17 V will chatter too. (c) Hard-start kits address compressor starting torque, not contactor coil voltage. (d) Contactors are not oiled; lubrication attracts dirt and is not a repair."
      },
      {
        module: 6,
        q: "Compressor terminal readings are C–R = 0.8 Ω, C–S = 3.2 Ω, S–R = 6.0 Ω. The windings are:",
        choices: ["Healthy — readings are consistent", "Suspect — S–R should equal C–R + C–S = 4.0 Ω, not 6.0 Ω; re-verify terminals/readings and suspect a winding problem if confirmed", "Definitely grounded", "Definitely open"],
        answer: 1,
        explanation: "Correct (b): The series path S–R must equal the sum of the two windings (0.8 + 3.2 = 4.0 Ω). A 6.0 Ω reading breaks the relationship — re-identify terminals and re-measure; if it holds, a winding fault exists. (a) ignores the failed arithmetic check. (c) Ground faults are diagnosed winding-to-ground, not from these pairs. (d) An open winding would read OL on its pairs."
      },
      {
        module: 6,
        q: "A potential relay decides when to remove the start capacitor by sensing:",
        choices: ["Elapsed time since start", "The voltage generated in the start winding, which rises with motor speed", "Refrigerant pressure", "Current in the thermostat wire"],
        answer: 1,
        explanation: "Correct (b): Start-winding (back-EMF) voltage climbs as the motor accelerates; at pick-up voltage the relay opens the start circuit. (a) Timers/PTC devices work on time-heat principles, not potential relays. (c) Pressure switches are separate safeties. (d) The relay coil is connected across the start winding, not in the thermostat circuit."
      },
      {
        module: 6,
        q: "A small compressor with a PTC start device will not restart for several minutes after a brief power blink because:",
        choices: ["The PTC must cool before its resistance falls enough to feed the start winding again", "The compressor must be manually reset", "The run capacitor must recharge overnight", "The thermostat locks out for exactly one hour"],
        answer: 0,
        explanation: "Correct (a): A hot PTC is a very high resistance — the start winding stays effectively disconnected until the device cools. (b) No manual reset is involved; time and cooling do it. (c) Capacitors recharge in fractions of a second. (d) No such fixed one-hour thermostat rule governs PTC physics."
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
        q: "During group lockout on a rooftop unit serviced by three technicians, the unit may be re-energized when:",
        choices: ["The lead technician says the job is done", "Every technician has removed their own personal lock from the multi-lock hasp", "One hour has passed since lockout", "The building manager requests cooling"],
        answer: 1,
        explanation: "Correct (b): Each person controls their own exposure; the equipment stays locked until the last personal lock is removed. (a) A lead's say-so cannot substitute for each worker's lock. (c) Time passage changes nothing about who is at risk. (d) Production pressure never overrides lockout — and removal by others requires a documented employer procedure with verification steps."
      },
      {
        module: 1,
        q: "A technician's skin resistance is much LOWER when hands are wet with sweat. The practical effect at a given contact voltage is:",
        choices: ["Less current through the body", "More current through the body (I = E ÷ R with smaller R)", "No change — voltage alone determines shock", "The breaker rating changes"],
        answer: 1,
        explanation: "Correct (b): Ohm's law applied to the body — lower resistance at the same voltage means higher current, and current is what injures. (a) reverses the relationship. (c) Voltage matters, but only through the current it drives through the actual resistance present. (d) Breaker ratings are device properties unaffected by skin condition."
      },
      {
        module: 1,
        q: "Which of these is NOT an energy-isolating device suitable for lockout?",
        choices: ["A lockable disconnect switch", "A circuit breaker with a lockout attachment", "A selector switch on the unit controller", "A line valve that can be locked closed"],
        answer: 2,
        explanation: "Correct (c): Selector switches are control devices — they operate through control logic, cannot physically separate energy, and cannot accept a lock as an isolating device. (a), (b), and (d) physically interrupt an energy path and can be locked — exactly what LOTO requires."
      },
      {
        module: 2,
        q: "A 24 V control circuit has a total effective resistance of 16 Ω. The power consumed by the circuit is:",
        choices: ["1.5 W", "36 W", "384 W", "9.6 W"],
        answer: 1,
        explanation: "Correct (b): I = 24 ÷ 16 = 1.5 A; P = E × I = 24 × 1.5 = 36 W (check: E² ÷ R = 576 ÷ 16 = 36 ✓). (a) 1.5 is the current, not the power. (c) 384 W multiplies 24 × 16. (d) 9.6 W matches no correct combination."
      },
      {
        module: 2,
        q: "A wire run has 0.25 Ω of total loop resistance and carries 20 A. The voltage lost in the wiring is:",
        choices: ["80 V", "5 V", "0.0125 V", "20.25 V"],
        answer: 1,
        explanation: "Correct (b): Drop = I × R = 20 × 0.25 = 5 V. (a) 80 V divides instead of multiplying. (c) 0.0125 inverts the ratio differently. (d) 20.25 adds current and resistance."
      },
      {
        module: 2,
        q: "A motor nameplate expects 240 V but long, undersized wiring delivers only 228 V under load. For the RESISTIVE strip heater in the same unit, the heat output compared with full-voltage operation is about:",
        choices: ["95% (228 ÷ 240)", "90% (the square of 0.95)", "100% — wattage is constant", "105%"],
        answer: 1,
        explanation: "Correct (b): 228 ÷ 240 = 0.95; power follows voltage squared: 0.95² ≈ 0.9025 ≈ 90%. (a) uses the linear ratio. (c) Wattage is constant only if resistance changes to compensate — a fixed element's does not. (d) Output cannot rise when voltage falls."
      },
      {
        module: 2,
        q: "A technician calculates a compressor's expected running current as 240 V ÷ 1.5 Ω winding resistance = 160 A and concludes the windings are shorted. The reasoning fails because:",
        choices: ["Compressor windings have no resistance", "Running current is governed by impedance and back-EMF once the motor spins, not by winding resistance alone", "240 V systems do not obey Ohm's law", "Winding resistance should be measured in volts"],
        answer: 1,
        explanation: "Correct (b): The ohmmeter value is for fault comparison (open/short/ground and the sum relationship), not running-current prediction — impedance dominates in a spinning motor. (a) Windings have definite, measurable resistance. (c) Ohm's law generalizes to AC impedance; it is not suspended. (d) Resistance is measured in ohms, power off."
      },
      {
        module: 3,
        q: "Four parallel branches of 20 Ω, 30 Ω, 60 Ω, and one open branch are on a 60 V supply. Total resistance is:",
        choices: ["110 Ω", "10 Ω", "20 Ω", "The open branch makes total resistance infinite"],
        answer: 1,
        explanation: "Correct (b): 1/20 + 1/30 + 1/60 = 3/60 + 2/60 + 1/60 = 6/60 = 1/10 → R_T = 10 Ω. The open branch contributes no path and is simply absent. (a) 110 Ω adds resistances as if in series. (c) 20 Ω ignores two branches. (d) An open in ONE parallel branch never opens the others."
      },
      {
        module: 3,
        q: "A 24 V parallel control bus feeds a 0.6 A thermostat/board load and a 0.9 A relay load. The transformer sees a load of:",
        choices: ["0.9 A", "1.5 A and, in VA terms, 36 VA", "0.54 A", "15 A"],
        answer: 1,
        explanation: "Correct (b): Parallel loads add: 0.6 + 0.9 = 1.5 A; VA = 24 × 1.5 = 36 VA. (a) takes only the largest load. (c) 0.54 multiplies the currents. (d) 15 A is a decimal-slip artifact."
      },
      {
        module: 3,
        q: "Two identical 1,200 W (at 240 V) strip heaters are accidentally wired in SERIES across 240 V. Total heat output is approximately:",
        choices: ["2,400 W", "1,200 W", "600 W", "4,800 W"],
        answer: 2,
        explanation: "Correct (c): Each heater's resistance: R = 240² ÷ 1,200 = 48 Ω. In series: 96 Ω total; I = 240 ÷ 96 = 2.5 A; total P = 240 × 2.5 = 600 W (each heater gets 120 V and produces 300 W — a quarter of its rating). (a) assumes parallel wiring. (b) is one heater alone in parallel. (d) doubles the parallel total without basis."
      },
      {
        module: 3,
        q: "A fuse in a 24 V control circuit blows instantly each time it is replaced. The professional interpretation is:",
        choices: ["The fuse batch is defective", "A parallel branch has shorted (resistance collapsed); find it with power-off resistance checks instead of feeding more fuses", "The transformer is too large", "Fuses always blow twice before holding"],
        answer: 1,
        explanation: "Correct (b): Instant, repeated operation is a measurement — a short exists downstream, and isolating branches with an ohmmeter will find the collapsed one. (a) One bad fuse is plausible; a batch all failing identically is the fault talking. (c) A larger transformer would make the fault current worse, not cause it. (d) There is no such break-in behavior for fuses."
      },
      {
        module: 4,
        q: "Loads that can run simultaneously on one transformer: contactor 0.5 A, relay 0.3 A, board 0.8 A, gas valve 0.7 A. Minimum suitable standard transformer size is:",
        choices: ["40 VA", "75 VA — the loads total 2.3 A = 55.2 VA, exceeding 40 VA", "25 VA", "Any — VA ratings are decorative"],
        answer: 1,
        explanation: "Correct (b): Total = 2.3 A; 24 × 2.3 = 55.2 VA > 40 VA, so the next standard size (75 VA ≈ 3.1 A capacity) is required. (a) A 40 VA unit (1.67 A) would sag under this load. (c) 25 VA covers barely 1 A. (d) VA is the transformer's defining capacity rating."
      },
      {
        module: 4,
        q: "A run capacitor reads 30 µF against a printed rating of 30 µF, but the can is visibly bulged with a lifted top. The correct action is:",
        choices: ["Return it to service — the µF passes", "Replace it — physical deformation indicates internal failure/pressure regardless of a bench µF reading", "Recharge it overnight", "Install it on a smaller motor"],
        answer: 1,
        explanation: "Correct (b): Bulging means internal gas pressure from dielectric breakdown — the part is failing structurally even if today's µF looks fine. (a) One passing test does not overrule physical evidence of failure. (c) There is no recharging procedure for motor capacitors. (d) A failing part is failing on any motor."
      },
      {
        module: 4,
        q: "Why must a replacement start capacitor be matched by duty type and not merely by µF range?",
        choices: ["Start capacitors are a different color", "Start capacitors are built for seconds of intermittent duty; continuous run service with one overheats and destroys it (and can damage the start winding)", "µF does not matter for starting", "Run capacitors cannot produce starting torque under any conditions"],
        answer: 1,
        explanation: "Correct (b): Duty rating is a construction property — thermal design for brief bursts. (a) Color is packaging, not engineering. (c) µF is precisely what gives start capacitors their torque effect. (d) Run capacitors DO provide the (modest) starting assistance PSC motors rely on."
      },
      {
        module: 5,
        q: "A relay with a holding (seal-in) contact keeps its load running after a momentary start button is released because:",
        choices: ["The button is broken", "The relay's own NO contact, wired in parallel with the start button, maintains the coil circuit once the relay pulls in", "Coils store magnetism for hours", "The load's inertia back-feeds the coil"],
        answer: 1,
        explanation: "Correct (b): The seal-in contact is the relay remembering for itself — parallel path around the momentary command. (a) The button is working as designed in this classic circuit. (c) Coil magnetism collapses essentially instantly at power loss. (d) Loads do not power control coils."
      },
      {
        module: 5,
        q: "Measured across a CLOSED contactor pole under load you read 38 V. The pole is:",
        choices: ["Excellent — closed contacts should show voltage", "Defective (pitted/burned or poorly making) — a healthy closed contact drops ~0 V, and it is starving the load of 38 V", "Reversed", "Being measured in the wrong units"],
        answer: 1,
        explanation: "Correct (b): Voltage across a contact means resistance at that contact; under load, E = I × R turns it into lost voltage and heat. (a) reverses the diagnostic rule (full voltage appears across OPEN points). (c) AC poles have no polarity to reverse. (d) The units are right — the contact is wrong."
      },
      {
        module: 5,
        q: "For a safety chain that must de-energize a heater on ANY of: over-temperature, fan failure, or a broken control wire, the switches should be:",
        choices: ["NO contacts in parallel", "NC contacts in series, so any opening (including a broken wire) drops the load", "One NO and two NC in parallel", "Wired directly across the power supply"],
        answer: 1,
        explanation: "Correct (b): Series NC is the fail-safe pattern — every fault, including the wiring itself failing open, removes power. (a) NO-parallel requires a closing action to protect and cannot detect a broken wire. (c) Parallel placement defeats the AND requirement. (d) Switching devices across the supply create shorts, not protection."
      },
      {
        module: 6,
        q: "Starting torque ranks, lowest to highest, for these single-phase designs:",
        choices: ["PSC, shaded-pole, CSIR, CSR", "Shaded-pole, PSC, CSIR/CSR", "CSR, CSIR, PSC, shaded-pole", "All equal — torque is set by voltage only"],
        answer: 1,
        explanation: "Correct (b): The shading ring gives the weakest split; a run capacitor improves it; a start capacitor's large phase shift gives the strongest start, with CSR adding run-capacitor benefits. (a) swaps the two weakest. (c) reverses the ladder. (d) Voltage matters, but the starting method is the design variable being ranked."
      },
      {
        module: 6,
        q: "A CSR compressor differs from a CSIR compressor in that the CSR:",
        choices: ["Has no start capacitor", "Retains a run capacitor in the circuit after the start capacitor drops out, improving running efficiency and torque", "Uses a centrifugal switch instead of a relay", "Runs on DC power"],
        answer: 1,
        explanation: "Correct (b): 'Run' in CSR means a capacitor stays for running — the defining addition over CSIR. (a) CSR has BOTH capacitors. (c) Both commonly use potential relays; the switch type is not the distinction. (d) Both are AC machines."
      },
      {
        module: 6,
        q: "A hard-start kit is the WRONG prescription when the compressor's real problem is:",
        choices: ["Starting against unequalized pressure on a manufacturer-approved TXV application", "A run capacitor at 55% of rated µF causing weak starts and high amps", "Documented marginal low voltage on a healthy compressor (approved application)", "A healthy PSC compressor that occasionally fails to start on the hottest afternoons"],
        answer: 1,
        explanation: "Correct (b): The weak run capacitor IS the diagnosis — replace it; a kit would mask the fault while the compressor keeps cooking at high current. (a), (c), and (d) describe the kit's legitimate territory: torque assistance for a fundamentally healthy machine."
      },
      {
        module: 7,
        q: "To check a fuse with a multimeter's continuity mode, the circuit must be:",
        choices: ["Energized, so current flows through the fuse", "De-energized (and ideally the fuse pulled or one end lifted), because the meter supplies its own test signal", "Set to defrost", "Under full load"],
        answer: 1,
        explanation: "Correct (b): Continuity is a resistance-family test — power off, component isolated. (a) Applying the meter's ohms/continuity function to a live circuit corrupts readings and can damage the meter. (c) Defrost is an equipment mode, irrelevant to fuse testing. (d) Load testing is done with voltage measurements, not continuity."
      },
      {
        module: 7,
        q: "Your clamp meter around a single conductor reads 0.0 A, yet the motor hums loudly and is hot. The most productive next step is:",
        choices: ["Conclude the motor draws no current", "Verify the clamp is fully closed around only that conductor and the meter is on AC amps — a humming, hot motor is drawing current (likely locked-rotor), so distrust the zero and re-measure correctly", "Replace the motor immediately", "Switch to resistance mode on the live circuit"],
        answer: 1,
        explanation: "Correct (b): Physical evidence (hum + heat) contradicts the zero; locked-rotor draw is the likely truth and the measurement setup is the suspect. (a) Believing an impossible zero abandons diagnosis. (c) Replacement comes after measurement, not instead of it. (d) Resistance on a live circuit is prohibited and dangerous."
      },
      {
        module: 7,
        q: "A replacement capacitor test: after lockout and discharge, wires removed, a 50 µF section reads 49 µF, but a second section of the same dual cap reads OL. The verdict is:",
        choices: ["The cap is good — one section passes", "Replace the dual capacitor — the OL section is open/failed; one can is replaced as a unit", "The OL section just needs charging", "Swap the two sections' wires to balance them"],
        answer: 1,
        explanation: "Correct (b): OL on capacitance = no measurable capacitance — that section is finished, and dual sections are not individually replaceable. (a) A dual cap passes only when BOTH sections pass. (c) Capacitors are not charged up by the meter into health. (d) Swapping sections miswires both motors and fixes nothing."
      },
      {
        module: 7,
        q: "Meter leads are found with cracked insulation near the probe. The correct action is:",
        choices: ["Wrap with electrical tape and continue", "Remove the leads from service and replace them — damaged leads defeat the meter's safety rating", "Use them only on 24 V circuits", "Hold them further back and proceed"],
        answer: 1,
        explanation: "Correct (b): The CAT rating system assumes intact leads; cracked insulation exposes the user to the very conductors being tested, at any voltage. (a) Tape is not rated insulation repair for test leads. (c) 24 V today becomes 240 V on the next task with the same leads. (d) Grip position does not repair insulation."
      },
      {
        module: 8,
        q: "On a ladder diagram, the coil of the compressor contactor is drawn once, in the control section. Its power contacts appear in the line-voltage section. When the coil energizes, the contacts:",
        choices: ["Stay as drawn (open)", "Close — contacts always follow their coil's state, wherever they are drawn", "Open, because line and control sections are independent", "Energize the transformer"],
        answer: 1,
        explanation: "Correct (b): The shared device label links them; energizing the coil flips every contact bearing its code. (a) The drawing shows the DE-ENERGIZED state — operation flips it. (c) The sections are electrically distinct but mechanically/logically linked through the device. (d) The transformer feeds the control circuit, not the reverse."
      },
      {
        module: 8,
        q: "A technician traces a cooling rung: R → Y contact → float switch → coil → C. The unit runs the blower but never the compressor, and 24 V is measured across the float switch. The diagram-based conclusion is:",
        choices: ["The Y contact is open", "The float switch is open (condensate problem or failed switch) — it is the rung's open point, proven by holding the full voltage", "The coil is shorted", "The transformer secondary is open"],
        answer: 1,
        explanation: "Correct (b): Full supply across a series element identifies it as the open point; the float switch being open also explains a live blower (separate rung). (a) An open Y contact would hold the voltage itself instead. (c) A shorted coil would draw excessive current, not hold voltage at a switch. (d) An open secondary would kill the blower rung too."
      },
      {
        module: 8,
        q: "Field-installed wiring on manufacturer diagrams is conventionally distinguished from factory wiring by:",
        choices: ["Red ink", "Dashed lines (vs. solid lines for factory wiring), per the diagram's legend", "Thicker lines", "Being drawn upside down"],
        answer: 1,
        explanation: "Correct (b): Dashed = field, solid = factory is the standard convention (always confirmed in the legend). (a) Color printing is not the convention. (c) Line weight does not carry this meaning. (d) Orientation jokes aside, no."
      },
      {
        module: 9,
        q: "A mechanical plan at 1/4″ = 1′-0″ shows a duct run measuring 6-1/4″ on paper with no figured dimension. The run length is:",
        choices: ["6.25 ft", "12.5 ft", "25 ft", "31 ft"],
        answer: 2,
        explanation: "Correct (c): At 1/4″ scale each paper inch equals 4 ft: 6.25 × 4 = 25 ft. (a) treats inches as feet. (b) uses 2 ft per inch. (d) overshoots the multiplication (7.75 in would give 31 ft)."
      },
      {
        module: 9,
        q: "The equipment schedule lists CU-1 as 208/230 V. The delivered unit's nameplate reads 460 V. You should:",
        choices: ["Set it and wire it — close enough with a transformer tap change", "Stop: quarantine the mismatch and resolve it with the office/supplier before installation", "Note it on the as-built after startup", "Swap nameplates so the paperwork matches"],
        answer: 1,
        explanation: "Correct (b): Voltage mismatch is a pre-installation catch; setting a 460 V unit on 208/230 V service guarantees failure and rework. (a) No tap change converts a unit between these voltage classes in the field. (c) After-startup is too late — the unit may never start. (d) Falsifying nameplates is fraud and a safety hazard."
      },
      {
        module: 9,
        q: "Why must a mechanical plan be read together with its section drawings before duct is fabricated?",
        choices: ["Sections list the prices", "Sections supply vertical dimensions and clearances (elevations, beams, ceiling heights) that the plan view cannot show", "Sections are legally required signatures", "Plans are always wrong without sections"],
        answer: 1,
        explanation: "Correct (b): Plan gives horizontal geometry; sections give the vertical story — collisions live in the vertical. (a) Pricing is estimating work, not drawing content. (c) Signatures/stamps exist but are not the READING reason. (d) Plans are authoritative for what they show; they are simply incomplete alone."
      },
      {
        module: 10,
        q: "An installer must choose between 26-gauge and 22-gauge galvanized for a wide, high-pressure-class trunk. The right choice and reason:",
        choices: ["26 gauge — higher number means heavier duty", "22 gauge — lower gauge number means thicker metal, needed for stiffness at this size/pressure class", "Either — gauge is cosmetic", "The thinner one, to save the hangers"],
        answer: 1,
        explanation: "Correct (b): Gauge is inverse to thickness; large/high-pressure panels need the heavier sheet (plus reinforcement as specified). (a) states the classic backwards reading. (c) Gauge is a structural specification. (d) Support design follows the duct spec, not the reverse."
      },
      {
        module: 10,
        q: "A round duct elbow's flat pattern is developed from arcs based on its throat and heel. The heel arc is LONGER than the throat arc because:",
        choices: ["The heel is drawn by a different person", "The outside of the turn travels a larger radius — more distance around the bend", "Heels are always doubled for strength", "Patterns ignore geometry"],
        answer: 1,
        explanation: "Correct (b): Arc length grows with radius; the heel (outer radius) path exceeds the throat (inner radius) path — the reason elbow patterns fan out. (a) Authorship is irrelevant. (c) Doubling applies to hems/edges in places, not the heel's arc length reason. (d) Patterns are pure applied geometry."
      },
      {
        module: 10,
        q: "Fiberglass duct board joints achieve their air seal primarily through:",
        choices: ["The board's own rigidity", "The specified tape-and-mastic closure system over properly grooved, folded, and stapled (where required) joints", "Paint applied after installation", "Gravity"],
        answer: 1,
        explanation: "Correct (b): Duct board's seal is a system — correct grooves/folds plus the manufacturer's tape/mastic closure. (a) Rigidity shapes the duct; it does not seal joints. (c) Paint is not a listed duct sealant for this purpose. (d) Gravity seals nothing in a duct joint."
      },
      {
        module: 11,
        q: "A flare you just formed is eccentric (lopsided) with a visible score line. The joint is for a mini-split suction connection. Correct disposition:",
        choices: ["Tighten it extra hard to seat the defect", "Cut it off and re-form a concentric, smooth flare — scored/eccentric flares are leak paths on a refrigerant seal face", "Add thread sealant to compensate", "Use it on the liquid line instead"],
        answer: 1,
        explanation: "Correct (b): Flare seals are metal-to-metal geometry; defects do not seat out, they leak refrigerant. (a) Over-torque cracks flares further and damages the fitting face. (c) Sealant is not a substitute for flare geometry on refrigerant flares. (d) A bad flare is bad on any line."
      },
      {
        module: 11,
        q: "Hard-drawn copper needs a 90° direction change in a straight run. The correct method is:",
        choices: ["Bend it slowly by hand over your knee", "Use a brazed elbow fitting — hard-drawn tube turns with fittings, not hand bending", "Heat the bend point cherry-red and bend it barehanded", "Score the inside of the bend and fold it"],
        answer: 1,
        explanation: "Correct (b): Hard temper does not yield smoothly to hand tools; fittings exist precisely for hard-drawn direction changes. (a) produces kinks/cracks. (c) Field-annealing a bend point and bending it is uncontrolled, unsafe as described, and not standard practice. (d) Scoring guarantees a leak path."
      },
      {
        module: 11,
        q: "Immediately before assembling a swaged joint for brazing, the correct test-fit expectation is:",
        choices: ["The mating tube drops in loosely with visible wobble", "The mating tube slides in snugly with an even, small capillary clearance and full socket depth", "The tubes must be hammered together", "Fit does not matter because filler fills any gap"],
        answer: 1,
        explanation: "Correct (b): Capillary action requires close, even clearance and full insertion. (a) Excess clearance defeats capillary lift and joint strength. (c) Forced fits spring and crack. (d) Filler bridges only its designed clearance — it is not grout."
      },
      {
        module: 12,
        q: "The FIRST thing established before lighting the torch on a refrigerant piping joint is:",
        choices: ["Maximum flame size", "The nitrogen purge flowing gently through the assembly", "A bucket of quench water", "The leak detector's calibration"],
        answer: 1,
        explanation: "Correct (b): Purge flow must already be displacing air when temperatures rise, or the inside of the joint oxidizes from the first seconds of heating. (a) Flame is set for the work, but after purge. (c) Quenching refrigerant joints with water is wrong practice (thermal shock/contamination). (d) Leak detection matters after brazing, during testing — not before ignition."
      },
      {
        module: 12,
        q: "While brazing a copper-to-brass valve joint, the filler that will NOT do the job correctly is:",
        choices: ["A silver-bearing (BAg) alloy with flux", "Phos-copper (BCuP) without flux — its chemistry does not properly wet brass and can embrittle the joint", "A BAg alloy selected for the joint's temperature range", "Any alloy used with the joint clean and purged"],
        answer: 1,
        explanation: "Correct (b): Phosphorus-bearing fillers are for copper-to-copper; on brass/steel they are the wrong metallurgy — silver alloy plus flux is required. (a) and (c) describe the correct family and practice. (d) 'Any alloy' fails precisely on the brass case in the question."
      },
      {
        module: 12,
        q: "A brazed joint passes a quick glance but the inside of the tubing (seen at an open end) is black and flaky. The cause and consequence are:",
        choices: ["Normal — all brazed joints look like that inside", "It was brazed without (or with an interrupted) nitrogen purge; the cupric oxide scale will migrate and can clog metering devices and damage the compressor", "The filler was silver instead of phos-copper", "The tube was ACR instead of plumbing copper"],
        answer: 1,
        explanation: "Correct (b): Black flaky scale is the signature of oxygen present at brazing temperature — the purge was missing, too late, or interrupted. (a) A purged joint's interior stays comparatively bright — black scale is a defect, not a norm. (c) Filler choice does not create internal oxide. (d) ACR is the CORRECT tube for this work."
      },
      {
        module: 12,
        q: "For the final pressure test of a brazed line set before evacuation, the correct medium and limit are:",
        choices: ["Oxygen, to the compressor's burst pressure", "Dry nitrogen, not exceeding the lowest test-pressure rating among components in the section", "Shop air at full line pressure", "Refrigerant vapor from the outdoor unit's charge"],
        answer: 1,
        explanation: "Correct (b): Dry nitrogen is inert and moisture-free; the pressure ceiling protects the weakest component (coils, valves, transducers). (a) Oxygen under pressure with oils is an explosion hazard — prohibited absolutely. (c) Shop air injects moisture into a dehydrated system. (d) Refrigerant is not a test medium for fabricated piping checks, and releasing it violates the venting prohibition."
      }
    ]
  }
};
