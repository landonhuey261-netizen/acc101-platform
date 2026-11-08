// Plumbing 202 - Midterm & Final Exams
// Midterm: 25 questions, Modules 1-6. Final: 40 questions, Modules 1-12.

module.exports = {
  midterm: {
    title: "Midterm Exam",
    minutes: 75,
    coverage: "Modules 1–6",
    questions: [
      {
        module: 1,
        q: "Backflow is:",
        choices: ["Water flowing too slowly", "The unwanted reversal of water flow, carrying contaminants back into the potable supply", "A leak in a water main", "Water hammer in a pipe"],
        answer: 1,
        explanation: "Correct: (b). Backflow is reverse flow into the drinking supply. (a) Slow flow is a pressure or sizing problem, not backflow. (c) A main leak causes pressure loss, which can cause backflow, but is not backflow itself. (d) Water hammer is a pressure surge, not reverse flow."
      },
      {
        module: 1,
        q: "A water main breaks and a garden hose submerged in a bucket of pesticide siphons the pesticide into the water main. This is:",
        choices: ["Backpressure", "Backsiphonage", "Water hammer", "A cross-connection failure only"],
        answer: 1,
        explanation: "Correct: (b). The main break drops supply pressure and siphons the chemical back — backsiphonage. (a) Backpressure is a push from the downstream side. (c) Water hammer is a pressure surge. (d) The submerged hose is a cross-connection, but the mechanism is backsiphonage."
      },
      {
        module: 1,
        q: "A heating boiler operates at 30 psi while its water supply is at 20 psi. What kind of backflow is possible?",
        choices: ["Backsiphonage", "Backpressure", "Neither — the boiler is safe", "Only water hammer"],
        answer: 1,
        explanation: "Correct: (b). The downstream pressure (30 psi) exceeds the supply pressure (20 psi), so boiler water is pushed backward — backpressure. (a) Backsiphonage needs a supply pressure drop. (c) The boiler is not safe without protection. (d) Water hammer is a different phenomenon."
      },
      {
        module: 1,
        q: "Which of the following is a high-hazard cross-connection?",
        choices: ["A decorative fountain fill line", "A chemical feed tank connection", "A garden hose used for watering flowers", "A drinking fountain"],
        answer: 1,
        explanation: "Correct: (b). A chemical tank is a high hazard — backflow could poison the supply. (a) A decorative fountain is a low hazard. (c) A garden hose is a cross-connection, but watering flowers is a lower hazard than chemicals. (d) A drinking fountain is a potable fixture, not a cross-connection."
      },
      {
        module: 1,
        q: "The air gap is the only backflow protection that cannot fail mechanically because:",
        choices: ["It is made of brass", "It has no moving parts — it is a space of air", "It is tested annually", "It is the most expensive device"],
        answer: 1,
        explanation: "Correct: (b). Air has nothing to wear out, stick, or leak. (a) The material is irrelevant — an air gap is not a device. (c) Testing applies to assemblies, not to air. (d) Cost is not the reason."
      },
      {
        module: 2,
        q: "The RPZ is governed by which ASSE standard?",
        choices: ["ASSE 1013", "ASSE 1015", "ASSE 1020", "ASSE 1056"],
        answer: 0,
        explanation: "Correct: (a). ASSE 1013 is the RPZ standard. (b) 1015 is the DCVA. (c) 1020 is the PVB. (d) 1056 is the SVBA."
      },
      {
        module: 2,
        q: "Which assemblies protect against BOTH backpressure and backsiphonage?",
        choices: ["PVB and SVBA", "RPZ and DCVA", "PVB and DCVA", "RPZ and SVBA"],
        answer: 1,
        explanation: "Correct: (b). RPZ and DCVA have two checks and hold against pressure from either direction. (a) PVB and SVBA protect against backsiphonage only. (c) and (d) mix one from each family."
      },
      {
        module: 2,
        q: "The RPZ's relief valve opens when:",
        choices: ["The supply pressure is too high", "The zone pressure falls to within 2 psi of the supply pressure", "The second check fails completely", "The assembly is shut off"],
        answer: 1,
        explanation: "Correct: (b). The relief valve opens when the zone-to-supply differential drops to 2 psi. (a) High supply pressure alone does not open it. (c) A failed second check is a different failure. (d) Shutting off the assembly does not open the relief valve."
      },
      {
        module: 2,
        q: "A lawn irrigation system with no chemical injection needs backflow protection. The standard choice is:",
        choices: ["An RPZ", "A DCVA", "A PVB, installed at least 12 inches above the highest outlet", "An SVBA in a pit"],
        answer: 2,
        explanation: "Correct: (c). A PVB is the standard irrigation protection, installed 12 inches above the highest outlet. (a) An RPZ is for high hazards and is overkill here. (b) A DCVA is for low hazards with backpressure possible. (d) An SVBA is for indoor use, not irrigation, and a pit would flood its air inlet."
      },
      {
        module: 2,
        q: "A DCVA is used for:",
        choices: ["High hazards", "Low hazards where backpressure is possible", "Backsiphonage only", "Indoor faucets where spilling is a problem"],
        answer: 1,
        explanation: "Correct: (b). The DCVA stops both kinds of backflow but has no relief valve, so it is for low hazards. (a) High hazards need an RPZ or air gap. (c) Backsiphonage-only protection is the PVB/SVBA job. (d) Indoor spill-sensitive use is the SVBA's job."
      },
      {
        module: 3,
        q: "An RPZ Check 1 must hold at least:",
        choices: ["1 psid", "2 psid", "5 psid", "10 psid"],
        answer: 2,
        explanation: "Correct: (c). Check 1 must hold 5 psid or higher. (a) 1 psid is the Check 2 and DCVA minimum. (b) 2 psid is the relief valve opening point. (d) 10 psid is not a pass value."
      },
      {
        module: 3,
        q: "An RPZ relief valve must open at:",
        choices: ["1 psid or higher", "2 psid or higher", "5 psid or higher", "0 psid"],
        answer: 1,
        explanation: "Correct: (b). The relief valve must open at 2 psid or higher. (a) 1 psid is the Check 2 minimum. (c) 5 psid is the Check 1 minimum. (d) 0 psid would mean it opens with no differential at all."
      },
      {
        module: 3,
        q: "A DCVA test gives: Check 1 = 1.2 psid, Check 2 = 0.5 psid. Does the assembly pass?",
        choices: ["Yes — the average is above 1 psid", "No — Check 2 is below the 1 psid minimum, so the assembly fails", "Yes — Check 1 passes", "No — Check 1 is too high"],
        answer: 1,
        explanation: "Correct: (b). Check 2 is 0.5 psid, below the 1 psid minimum, so the assembly fails. (a) There is no averaging — each check must pass on its own. (c) One passing check does not save the other. (d) Check 1 at 1.2 psid is a pass, not a failure."
      },
      {
        module: 3,
        q: "A PVB test gives: the air inlet opens at 0.5 psid, and the check holds 2 psid. Does the assembly pass?",
        choices: ["Yes — the check passes", "No — the air inlet opens below the 1 psid minimum", "Yes — the average is above 1 psid", "No — the check is too high"],
        answer: 1,
        explanation: "Correct: (b). The air inlet opens at 0.5 psid, below the 1 psid minimum, so the assembly fails. (a) A passing check does not save a failing air inlet. (c) There is no averaging. (d) A check at 2 psid is a pass."
      },
      {
        module: 3,
        q: "The RPZ test order is:",
        choices: ["Check 2, relief valve, Check 1", "Check 1, relief valve, Check 2", "Relief valve, Check 1, Check 2", "Check 1, Check 2, relief valve"],
        answer: 1,
        explanation: "Correct: (b). Check 1 first, then the relief valve, then Check 2. (a) and (d) put the steps in the wrong order. (c) The relief valve is tested second, not first."
      },
      {
        module: 3,
        q: "Why must the test kit's hoses be bled of air?",
        choices: ["Air makes the gauge read wrong", "Air damages the assembly", "Air causes water hammer", "Air voids the warranty"],
        answer: 0,
        explanation: "Correct: (a). Air in a hose makes the gauge reading unreliable. (b) Air in a hose does not damage the assembly. (c) Water hammer is a different phenomenon. (d) The warranty is not the issue — the reading is."
      },
      {
        module: 3,
        q: "The ASSE 5110 written exam is:",
        choices: ["50 questions, 50% to pass", "100 questions, 70% to pass, 2 hours, closed book", "25 questions, 80% to pass", "200 questions, 60% to pass"],
        answer: 1,
        explanation: "Correct: (b). 100 questions, 70% to pass, 2-hour limit, closed book. (a), (c), and (d) are not the ASSE 5110 format."
      },
      {
        module: 4,
        q: "The most common cause of a failed check valve is:",
        choices: ["A broken spring", "Debris lodged between the disc and the seat", "A cracked body", "A frozen pipe"],
        answer: 1,
        explanation: "Correct: (b). Debris — sand, scale, rust, solder — is the most common cause. (a) Spring failure happens but is less common. (c) A cracked body is a replacement fault, not a check failure. (d) Freezing damages the assembly as a whole."
      },
      {
        module: 4,
        q: "An assembly should be replaced rather than repaired when:",
        choices: ["Its diaphragm is hardened", "Its body is cracked or its seat is unrepairable", "Its disc is worn", "Its spring is broken"],
        answer: 1,
        explanation: "Correct: (b). A cracked body or unrepairable seat cannot be fixed by a rebuild kit. (a) A hardened diaphragm is replaced by the kit. (c) A worn disc is replaced by the kit. (d) A broken spring is replaced by the kit."
      },
      {
        module: 4,
        q: "The repair sequence is:",
        choices: ["Replace, diagnose, retest", "Diagnose, shut down, disassemble, replace, reassemble, retest", "Shut down, replace, diagnose", "Disassemble, diagnose, retest"],
        answer: 1,
        explanation: "Correct: (b). Diagnose first, then shut down, disassemble, replace, reassemble, and retest. (a) Replacing before diagnosing fixes the wrong thing. (c) Diagnosing after replacing is backwards. (d) Disassembly before diagnosis loses the evidence."
      },
      {
        module: 4,
        q: "Why must repairs use the manufacturer's parts?",
        choices: ["They are cheaper", "The assembly's listing depends on its own parts", "Generic parts are illegal everywhere", "The manufacturer requires it for the warranty only"],
        answer: 1,
        explanation: "Correct: (b). The assembly is listed with its own parts; a generic substitute may not hold the pass values. (a) Manufacturer's parts are usually more expensive. (c) The issue is the listing and performance, not a universal ban. (d) The warranty is secondary to the listing."
      },
      {
        module: 5,
        q: "A sump pump moves:",
        choices: ["Wastewater with solids", "Clean groundwater and seepage", "Sewage from fixtures below the sewer", "Hot water from a boiler"],
        answer: 1,
        explanation: "Correct: (b). A sump pump moves clean groundwater. (a) Wastewater with solids is a sewage pump's job. (c) Fixtures below the sewer need a sewage pump. (d) Boiler water is not pumped by either."
      },
      {
        module: 5,
        q: "Total dynamic head is:",
        choices: ["The pump's horsepower", "Vertical lift plus friction loss in the discharge pipe", "The depth of the pit", "The flow in gallons per minute"],
        answer: 1,
        explanation: "Correct: (b). TDH is lift plus friction loss. (a) Horsepower is the motor's power. (c) Pit depth is only part of the lift. (d) Flow is measured in gpm, not head."
      },
      {
        module: 5,
        q: "A pump rated 60 gpm at zero head is installed with 10 feet of lift and 5 feet of friction loss. Its curve shows 30 gpm at 15 feet of head. The pit fills at 40 gpm in a heavy rain. Will the pump keep up?",
        choices: ["Yes — it is rated 60 gpm", "No — at 15 feet of head it delivers 30 gpm, less than the 40 gpm inflow", "Yes — the head does not matter", "No — the pump will run dry"],
        answer: 1,
        explanation: "Correct: (b). TDH is 15 feet, and at 15 feet the pump delivers 30 gpm, less than the 40 gpm inflow, so the pit will overflow. (a) The 60 gpm rating is at zero head, not at the real TDH. (c) Head is the whole point of the curve. (d) The pump will not run dry — it will be overwhelmed."
      },
      {
        module: 6,
        q: "A sewage ejector differs from a sump pump in that it:",
        choices: ["Moves clean water", "Passes solids, sits in a sealed vented basin, and discharges to the sanitary sewer", "Has no float switch", "Discharges to the outside"],
        answer: 1,
        explanation: "Correct: (b). An ejector passes solids, is sealed and vented, and discharges to the sanitary sewer. (a) Moving clean water is a sump pump's job. (c) An ejector has a float switch. (d) Discharging outside is a sump pump's job."
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
        q: "Backflow is:",
        choices: ["Water flowing too slowly", "The unwanted reversal of water flow, carrying contaminants back into the potable supply", "A leak in a water main", "Water hammer in a pipe"],
        answer: 1,
        explanation: "Correct: (b). Backflow is reverse flow into the drinking supply. (a) Slow flow is a pressure or sizing problem, not backflow. (c) A main leak causes pressure loss, which can cause backflow, but is not backflow itself. (d) Water hammer is a pressure surge, not reverse flow."
      },
      {
        module: 1,
        q: "Backpressure differs from backsiphonage in that backpressure is:",
        choices: ["A pull caused by a supply pressure drop", "A push caused by downstream pressure exceeding supply pressure", "Caused by a frozen pipe", "Only a problem in commercial buildings"],
        answer: 1,
        explanation: "Correct: (b). Backpressure is a push from the downstream side. (a) A pull from a supply pressure drop is backsiphonage. (c) A frozen pipe blocks flow. (d) Backpressure happens in homes too — boilers are the classic example."
      },
      {
        module: 1,
        q: "A cross-connection is:",
        choices: ["A pipe that crosses another pipe", "Any physical connection between potable water and another system through which backflow could occur", "A fitting with four openings", "A connection between two water mains"],
        answer: 1,
        explanation: "Correct: (b). A cross-connection is a link between drinking water and anything else. (a) Pipes crossing without connecting are not cross-connections. (c) A four-way fitting is a cross fitting, not a cross-connection. (d) Two mains connecting is a supply arrangement, not the hazard the term names."
      },
      {
        module: 2,
        q: "Which ASSE standard governs the pressure vacuum breaker (PVB)?",
        choices: ["ASSE 1013", "ASSE 1015", "ASSE 1020", "ASSE 1056"],
        answer: 2,
        explanation: "Correct: (c). ASSE 1020 is the PVB standard. (a) 1013 is the RPZ. (b) 1015 is the DCVA. (d) 1056 is the SVBA."
      },
      {
        module: 2,
        q: "A laboratory faucet needs backflow protection, but a PVB would spill water onto the lab bench when it operates. The right choice is:",
        choices: ["An RPZ", "A DCVA", "An SVBA", "A single check valve"],
        answer: 2,
        explanation: "Correct: (c). An SVBA (ASSE 1056) is spill-resistant, so it is the indoor choice. (a) An RPZ is for high hazards and is overkill here. (b) A DCVA is for low hazards with backpressure possible. (d) A single check valve is not an approved assembly."
      },
      {
        module: 2,
        q: "A fire sprinkler system needs backflow protection. The hazard is low, but a fire pump can create backpressure. Which assembly fits, and why not a PVB?",
        choices: ["A DCVA — it stops both kinds of backflow; a PVB stops backsiphonage only", "A PVB — it is the standard for fire systems", "An SVBA — it is spill-resistant", "An RPZ — it is the only assembly for fire systems"],
        answer: 0,
        explanation: "Correct: (a). A DCVA stops both kinds of backflow and fits a low hazard with backpressure possible; a PVB cannot hold against backpressure. (b) A PVB is wrong for a system that can make backpressure. (c) An SVBA also stops backsiphonage only. (d) An RPZ is for high hazards, not a low-hazard fire system."
      },
      {
        module: 3,
        q: "An RPZ test gives: Check 1 = 6 psid, relief valve opens at 2.5 psid, Check 2 = 1.5 psid. Does the assembly pass?",
        choices: ["No — Check 1 is too high", "Yes — all three parts meet their minimums", "No — the relief valve opens too late", "Yes — but only if the relief valve is replaced"],
        answer: 1,
        explanation: "Correct: (b). Check 1 (6 ≥ 5), relief (2.5 ≥ 2), and Check 2 (1.5 ≥ 1) all pass. (a) 6 psid is a pass, not too high. (c) 2.5 psid is at or above the 2 psid minimum. (d) Nothing needs replacing."
      },
      {
        module: 3,
        q: "An RPZ test gives: Check 1 = 4 psid, relief valve opens at 3 psid, Check 2 = 2 psid. Does the assembly pass? What happens next?",
        choices: ["Yes — two of three parts pass", "No — Check 1 is below 5 psid; the assembly is marked failed, repaired, and retested", "Yes — the relief valve and Check 2 compensate", "No — but it may stay in service"],
        answer: 1,
        explanation: "Correct: (b). Check 1 at 4 psid is below the 5 psid minimum, so the assembly fails; it is repaired and retested. (a) There is no majority vote — any part failing fails the assembly. (c) Passing parts do not compensate for a failing one. (d) A failed assembly must not stay in service on a passing verdict."
      },
      {
        module: 3,
        q: "During an RPZ test, the relief valve pours water continuously. The gauge readings look fine. What should the tester do?",
        choices: ["Record a pass from the gauge readings", "Mark the assembly failed — a pouring relief valve means the first check has failed — and record the pouring", "Ignore the relief valve", "Retest immediately without repair"],
        answer: 1,
        explanation: "Correct: (b). A continuously pouring relief valve means the first check has failed; the tester must mark the assembly failed and record it. (a) Gauge readings that contradict the relief valve must not be trusted. (c) Ignoring the relief valve hides a failure. (d) A failed assembly is repaired first, then retested."
      },
      {
        module: 3,
        q: "The ASSE 5110 credential requires:",
        choices: ["1 year of experience and a 10-hour course", "5 years of documented practical experience and a minimum 40-hour ASSE-approved course", "No experience, just the exam", "10 years of experience and no course"],
        answer: 1,
        explanation: "Correct: (b). ASSE 5110 requires 5 years of experience and a 40-hour course, then the written and practical exams. (a) 1 year and 10 hours are not the requirements. (c) Experience and the course are both required. (d) 10 years and no course are not the requirements."
      },
      {
        module: 4,
        q: "A DCVA fails its test: Check 1 holds 1.2 psid, Check 2 holds 0.4 psid. The tester opens the assembly and finds sand between Check 2's disc and seat. What is the diagnosis and the cause to fix?",
        choices: ["Worn disc — replace the disc only", "Debris fouling Check 2 — clean or replace the disc, and fix the missing or failing upstream strainer", "Broken spring — replace the spring only", "Cracked body — replace the assembly"],
        answer: 1,
        explanation: "Correct: (b). Sand is debris fouling Check 2; the repair is cleaning or replacing the disc, and the cause — a missing or failing strainer — must be fixed or the new disc will foul the same way. (a) The disc is fouled, not worn, and the cause must be fixed. (c) A broken spring is a different failure. (d) The body is not cracked."
      },
      {
        module: 4,
        q: "A repair without a retest is:",
        choices: ["Acceptable if the parts are new", "Unproven — the assembly is not back in service until the retest passes", "Acceptable for a DCVA only", "Required by the manufacturer"],
        answer: 1,
        explanation: "Correct: (b). The retest is the proof; without it the repair is a guess. (a) New parts do not prove the assembly works. (c) The rule applies to every assembly. (d) The retest is required by the testing standard, not just the manufacturer."
      },
      {
        module: 4,
        q: "After a repair, the report must contain:",
        choices: ["Only the retest numbers", "The original failure, the repair made, the parts used, and the retest numbers", "Only the parts used", "Only the owner's name"],
        answer: 1,
        explanation: "Correct: (b). The report records the failure, the repair, the parts, and the retest numbers. (a), (c), and (d) each omit part of the record."
      },
      {
        module: 5,
        q: "A sewage pump's pit must be:",
        choices: ["Open and unvented", "Sealed and vented", "Filled with gravel", "Connected to the storm drain"],
        answer: 1,
        explanation: "Correct: (b). A sewage pit holds sewage and sewer gas, so it is sealed and vented. (a) An open pit would release sewer gas. (c) Gravel is not a pit feature. (d) Sewage must go to the sanitary sewer, not the storm drain."
      },
      {
        module: 5,
        q: "A sewage pump installation has no check valve on the discharge. What will happen?",
        choices: ["Nothing — the pump will work fine", "The water in the discharge pipe runs back into the pit and the pump short-cycles", "The pump will run dry", "The pit will overflow immediately"],
        answer: 1,
        explanation: "Correct: (b). Without a check valve, the discharge water runs back, the float turns the pump on again, and the pump short-cycles itself to death. (a) The installation will fail. (c) The pump will not run dry — it will be overworked. (d) The pit overflows over time, not immediately."
      },
      {
        module: 5,
        q: "A weep hole in the discharge pipe prevents:",
        choices: ["Short-cycling", "Air-lock", "Freezing", "Corrosion"],
        answer: 1,
        explanation: "Correct: (b). The weep hole lets trapped air escape so the pump can move water. (a) Short-cycling is caused by a missing check valve or a short float cycle. (c) Freezing is prevented by insulation and slope. (d) Corrosion is a material problem."
      },
      {
        module: 6,
        q: "A lift station has two pumps but no alternator. One pump runs every cycle and the other never runs. What is wrong, and what is the fix?",
        choices: ["Nothing — this is normal", "Without an alternator, the lead pump does all the work and wears out while the standby sits idle; fit an alternator", "The standby pump is broken", "The wet well is too small"],
        answer: 1,
        explanation: "Correct: (b). The alternator swaps the lead pump so the two share the work; without it, one wears out and the other deteriorates from disuse. (a) It is not normal — it defeats the duplex design. (c) The standby may be fine; it simply never runs. (d) Wet well size is not the cause."
      },
      {
        module: 6,
        q: "The lag float:",
        choices: ["Stops the pumps", "Starts the first pump", "Starts the second pump if the water keeps rising", "Sounds the alarm"],
        answer: 2,
        explanation: "Correct: (c). The lag float starts the second pump. (a) The off float stops the pumps. (b) The lead float starts the first pump. (d) The alarm float sounds the alarm."
      },
      {
        module: 6,
        q: "A high-water alarm is tested by:",
        choices: ["Turning off the power", "Lifting the alarm float by hand and confirming the buzzer sounds", "Running the pump", "Opening the check valve"],
        answer: 1,
        explanation: "Correct: (b). Lift the float and listen for the buzzer. (a) Turning off the power disables the alarm. (c) Running the pump does not test the alarm. (d) The check valve is not part of the alarm."
      },
      {
        module: 7,
        q: "Grease blocks sewers because it:",
        choices: ["Is too hot", "Is liquid when hot and solid when it cools, so it solidifies on pipe walls", "Is heavier than water", "Dissolves in water"],
        answer: 1,
        explanation: "Correct: (b). Grease solidifies as it cools in the sewer. (a) Heat is not the problem — cooling is. (c) Grease floats, it is not heavier than water. (d) Grease does not dissolve in water."
      },
      {
        module: 7,
        q: "A small café has one three-compartment sink (20 gpm) and one dishwasher (10 gpm) that both produce grease. What is the minimum flow rating for the hydromechanical interceptor serving them?",
        choices: ["10 gpm", "20 gpm", "30 gpm", "40 gpm"],
        answer: 2,
        explanation: "Correct: (c). The interceptor must cover the total flow of every grease-producing fixture: 20 + 10 = 30 gpm. (a) 10 gpm covers only the dishwasher. (b) 20 gpm covers only the sink. (d) 40 gpm is larger than needed."
      },
      {
        module: 7,
        q: "Acid waste must be carried in:",
        choices: ["Ordinary PVC pipe", "Acid-resistant pipe to a neutralization tank", "Copper pipe", "Cast iron pipe"],
        answer: 1,
        explanation: "Correct: (b). Acid waste needs acid-resistant pipe and a neutralization tank. (a) Ordinary PVC is corroded by acid waste. (c) Copper is corroded by acid. (d) Ordinary cast iron is corroded by acid — only specially lined cast iron is used."
      },
      {
        module: 7,
        q: "A hydromechanical interceptor is installed without its flow control fitting. What will happen?",
        choices: ["It will work better", "The full flow enters the unit faster than its rated gpm, so the grease passes straight through to the sewer", "It will use less water", "It will last longer"],
        answer: 1,
        explanation: "Correct: (b). Without the flow control fitting, the water moves too fast for separation and the grease passes through. (a) It will work worse, not better. (c) Water use is unchanged. (d) It will fail sooner, not last longer."
      },
      {
        module: 8,
        q: "In a septic tank, the effluent is:",
        choices: ["The solids at the bottom", "The clarified liquid in the middle that flows to the drainfield", "The grease on top", "The gas in the tank"],
        answer: 1,
        explanation: "Correct: (b). Effluent is the middle liquid layer. (a) The bottom solids are sludge. (c) The top layer is scum. (d) Gas is not a layer."
      },
      {
        module: 8,
        q: "A septic tank's outlet baffle is missing. What will happen, and why is it expensive?",
        choices: ["Nothing — the baffle is decorative", "Scum and solids flow into the drainfield and clog it, and a clogged drainfield is usually replaced, not repaired", "The tank will overflow", "The effluent will be cleaner"],
        answer: 1,
        explanation: "Correct: (b). Without the outlet baffle, solids reach the drainfield and clog the soil, and a clogged field is usually replaced — the most expensive septic failure. (a) The baffle is essential. (c) The tank does not overflow; the field clogs. (d) The effluent will be dirtier, not cleaner."
      },
      {
        module: 8,
        q: "A perc test measures:",
        choices: ["The tank's volume", "How fast the soil absorbs water", "The effluent's pH", "The number of bedrooms"],
        answer: 1,
        explanation: "Correct: (b). The perc test measures soil absorption and sizes the drainfield. (a) Tank volume comes from the home's size. (c) pH is not a perc test. (d) Bedrooms size the tank, not the field."
      },
      {
        module: 8,
        q: "Lush green grass over a drainfield is a sign of:",
        choices: ["A healthy system", "Effluent surfacing and fertilizing the grass — a failing system", "Good soil", "A recent rain"],
        answer: 1,
        explanation: "Correct: (b). Lush grass over the field means effluent is surfacing. (a) A healthy system does not surface effluent. (c) Good soil alone does not make one patch lush. (d) Rain would green the whole yard, not just the field."
      },
      {
        module: 9,
        q: "The minimum air gap for a 2-inch waste pipe is:",
        choices: ["1 inch", "2 inches", "4 inches", "6 inches"],
        answer: 2,
        explanation: "Correct: (c). Twice the diameter is 4 inches (the 1-inch minimum does not apply because 4 is larger). (a) 1 inch is the minimum, not the requirement for a 2-inch pipe. (b) 2 inches is the diameter, not twice it. (d) 6 inches is the vent rise above a flood-level rim, not an air gap."
      },
      {
        module: 9,
        q: "Backwash water must be discharged:",
        choices: ["Directly to the sewer", "To the storm drain", "Through an indirect waste connection to a receptor", "Onto the lawn"],
        answer: 2,
        explanation: "Correct: (c). Backwash water is chemically treated waste and needs an indirect connection. (a) A direct sewer connection lets sewer gas or sewage reach the filter. (b) The storm drain is for rainwater, not treated waste. (d) The lawn is not a legal disposal point."
      },
      {
        module: 9,
        q: "A cracked main drain cover is urgent because:",
        choices: ["It leaks water", "The pump's suction can trap a swimmer against the outlet", "It looks bad", "It clogs the filter"],
        answer: 1,
        explanation: "Correct: (b). A broken suction outlet cover is a life-safety hazard. (a) Leaking is a minor problem by comparison. (c) Appearance is irrelevant. (d) The cover does not affect the filter."
      },
      {
        module: 9,
        q: "Circulation in a pool is:",
        choices: ["Pump → filter → returns", "Filter → pump → returns", "Returns → pump → filter", "Heater → filter → pump"],
        answer: 0,
        explanation: "Correct: (a). The pump draws water through the skimmers and main drain, pushes it through the filter, and returns it to the pool. (b), (c), and (d) put the parts in the wrong order."
      },
      {
        module: 10,
        q: "A trench drain is used to:",
        choices: ["Catch water at a single point", "Intercept a sheet of water flowing across a surface along a line", "Trap debris in a sump", "Treat sewage"],
        answer: 1,
        explanation: "Correct: (b). A trench drain intercepts water along a line. (a) A point inlet is an area drain. (c) Trapping debris in a sump is a catch basin's job. (d) A trench drain carries clean stormwater, not sewage."
      },
      {
        module: 10,
        q: "A French drain's perforated pipe is laid with the holes:",
        choices: ["Facing up", "Facing down", "Facing sideways", "It does not matter"],
        answer: 1,
        explanation: "Correct: (b). Holes down let water enter from below and keep silt out. (a) Holes up let silt fall in from above. (c) Sideways is not the standard. (d) It matters a great deal — holes up kills the drain."
      },
      {
        module: 10,
        q: "Detention differs from retention in that detention:",
        choices: ["Holds water permanently", "Holds water temporarily and releases it slowly", "Lets water soak into the ground", "Evaporates the water"],
        answer: 1,
        explanation: "Correct: (b). Detention holds and releases slowly. (a) Holding permanently is retention. (c) Soaking in is retention/infiltration. (d) Evaporation is part of retention, not detention."
      },
      {
        module: 10,
        q: "A roof leader must never connect to:",
        choices: ["A storm sewer", "A dry well", "The sanitary sewer", "A rain garden"],
        answer: 2,
        explanation: "Correct: (c). Stormwater must never go to the sanitary sewer. (a) The storm sewer is a legal destination. (b) A dry well is a legal destination. (d) A rain garden is a legal destination."
      },
      {
        module: 11,
        q: "The modern water closet standard is:",
        choices: ["3.5 gpf", "1.6 gpf", "1.28 gpf", "5.0 gpf"],
        answer: 2,
        explanation: "Correct: (c). 1.28 gpf is the WaterSense level many codes require (the federal standard is 1.6 gpf). (a) 3.5 gpf is an old standard. (b) 1.6 gpf is the federal maximum, not the WaterSense level. (d) 5.0 gpf is a pre-1980s fixture."
      },
      {
        module: 11,
        q: "Graywater is water from:",
        choices: ["Water closets and kitchen sinks with disposals", "Bathtubs, showers, lavatories, and washing machines", "Swimming pools", "Boilers"],
        answer: 1,
        explanation: "Correct: (b). Graywater is from tubs, showers, lavatories, and laundry. (a) Water closets and kitchen disposals are blackwater. (c) Pool water is chemically treated waste. (d) Boiler water is a high hazard."
      },
      {
        module: 11,
        q: "IPC Chapter 13 governs:",
        choices: ["Storm drainage", "Nonpotable water systems", "Medical gas", "Vents"],
        answer: 1,
        explanation: "Correct: (b). Chapter 13 governs nonpotable water systems. (a) Storm drainage is Chapter 11. (c) Medical gas is Chapter 12. (d) Vents are Chapter 9."
      },
      {
        module: 11,
        q: "A 1.28 gpf water closet that clogs is most often caused by:",
        choices: ["A defective fixture", "A drain that is too flat, too large, or too long for the reduced flow", "Low water pressure in the city main", "A clogged vent"],
        answer: 1,
        explanation: "Correct: (b). The drain's slope and size must match the reduced flow. (a) The fixture is rarely the cause. (c) City main pressure is not the usual cause. (d) A clogged vent causes gurgling, not a failure to clear the bowl."
      },
      {
        module: 12,
        q: "A building has a lawn irrigation system, a fire sprinkler system, a chemical feed tank, and a laboratory faucet. Which matching is correct?",
        choices: ["Irrigation — RPZ; fire — PVB; chemical — DCVA; lab — RPZ", "Irrigation — PVB; fire — DCVA; chemical — RPZ or air gap; lab — SVBA", "Irrigation — SVBA; fire — RPZ; chemical — PVB; lab — DCVA", "Irrigation — DCVA; fire — SVBA; chemical — PVB; lab — RPZ"],
        answer: 1,
        explanation: "Correct: (b). Irrigation is a backsiphonage-only low hazard (PVB); fire is a low hazard with backpressure possible (DCVA); a chemical tank is a high hazard (RPZ or air gap); a lab faucet is indoor and spill-sensitive (SVBA). (a), (c), and (d) each mismatch at least one hazard to the wrong assembly."
      }
    ]
  }
};
