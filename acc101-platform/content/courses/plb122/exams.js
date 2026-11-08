// Plumbing 122 — Midterm and Final exams.
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
        q: "Water pressure at the base of a 23-foot column of water is about:",
        choices: ["2.3 psi", "5 psi", "10 psi", "23 psi"],
        answer: 2,
        explanation: "Correct (c): 23 ft x 0.433 psi/ft is about 10 psi. (a) would be 0.1 psi per foot. (b) would be about 0.22 psi per foot. (d) treats 1 foot of water as 1 psi, which overstates it by more than double."
      },
      {
        module: 1,
        q: "The water supply system in a building is best described as:",
        choices: ["A gravity drainage system", "A pressurized delivery system that brings water to each fixture", "A venting system for sewer gas", "A storm drainage system"],
        answer: 1,
        explanation: "Correct (b): The supply side delivers potable water under pressure to every fixture. (a) describes DWV drainage. (c) describes venting. (d) describes roof drainage."
      },
      {
        module: 1,
        q: "A pressure gauge reads 65 psi on the first floor. On the third floor, 20 feet higher, the pressure will be about:",
        choices: ["45 psi", "56 psi", "65 psi", "74 psi"],
        answer: 1,
        explanation: "Correct (b): Pressure drops about 0.433 psi per foot of elevation gain: 20 x 0.433 is about 8.7 psi, so 65 - 8.7 is about 56 psi. (a) drops 20 psi, which would be 1 psi per foot. (c) ignores elevation. (d) adds pressure for going up, which is backwards."
      },
      {
        module: 1,
        q: "Which of these is a continuous demand rather than an intermittent fixture demand?",
        choices: ["A water closet", "A lavatory", "A hose bibb used for irrigation", "A kitchen sink"],
        answer: 2,
        explanation: "Correct (c): A hose bibb running for irrigation draws continuously for a long time. (a), (b), and (d) are intermittent fixtures whose use is brief and unpredictable."
      },
      {
        module: 2,
        q: "Under IPC Appendix E Table E103.3(2), a private water closet with a flush tank is assigned:",
        choices: ["1.4 WSFU", "2.2 WSFU", "5.0 WSFU", "10.0 WSFU"],
        answer: 1,
        explanation: "Correct (b): A private flush-tank water closet is 2.2 WSFU. (a) is a bathtub, kitchen sink, dishwasher, or clothes washer. (c) is the public flush-tank water closet. (d) is the public flushometer water closet."
      },
      {
        module: 2,
        q: "Under IPC Appendix E Table E103.3(2), a private bathtub/shower is assigned:",
        choices: ["0.7 WSFU", "1.4 WSFU", "2.0 WSFU", "4.0 WSFU"],
        answer: 1,
        explanation: "Correct (b): A private bathtub/shower is 1.4 WSFU total. (a) is a private lavatory. (c) is the public lavatory. (d) is the public shower."
      },
      {
        module: 2,
        q: "A house has 2 flush-tank water closets (2.2 each), 2 lavatories (0.7 each), 1 tub-shower (1.4), and 1 kitchen sink (1.4). The total WSFU is:",
        choices: ["8.6 WSFU", "9.3 WSFU", "10.0 WSFU", "11.4 WSFU"],
        answer: 0,
        explanation: "Correct (a): 2 x 2.2 = 4.4; 2 x 0.7 = 1.4; 1.4 + 1.4 = 2.8; 4.4 + 1.4 + 2.8 = 8.6 WSFU. (b) adds 0.7 WSFU that is not there. (c) counts one extra 1.4 WSFU fixture. (d) counts the water closets as flushometer values."
      },
      {
        module: 2,
        q: "The water service enters a house in a yard that will be regraded. The safest depth practice is to:",
        choices: ["Bury it as shallow as possible for easy access", "Bury it below the local frost line with a meter pit and curb stop", "Run it above ground along the foundation", "Bury it at the same depth as the building sewer"],
        answer: 1,
        explanation: "Correct (b): Below the frost line, with a meter pit and curb stop for service. (a) A shallow service freezes. (c) Above-ground service freezes and is exposed to damage. (d) The sewer's depth is set by drainage slope, not by frost."
      },
      {
        module: 3,
        q: "A house totals 10 WSFU with flush-tank fixtures. Using the Hunter demand curve, the design flow is:",
        choices: ["9.4 gpm", "14.6 gpm", "19.6 gpm", "26.3 gpm"],
        answer: 1,
        explanation: "Correct (b): On the flush-tank curve, 10 WSFU converts to 14.6 gpm. (a) is the 5-WSFU value. (c) is the 20-WSFU value. (d) is the 40-WSFU value."
      },
      {
        module: 3,
        q: "A house totals 10 WSFU (14.6 gpm on the Hunter curve) plus a hose bibb with a continuous demand of 5 gpm. The total design flow is:",
        choices: ["14.6 gpm", "19.6 gpm", "21.6 gpm", "24.6 gpm"],
        answer: 1,
        explanation: "Correct (b): Continuous demands are added in gpm after the curve: 14.6 + 5 = 19.6 gpm. (a) forgets the hose bibb. (c) adds 7 instead of 5. (d) adds the hose bibb through the curve as 2 WSFU, which is the error the code method forbids."
      },
      {
        module: 3,
        q: "Under IPC Table 604.3, a private lavatory must receive at least:",
        choices: ["1.5 gpm at 8 psi", "2.2 gpm at 8 psi", "3 gpm at 15 psi", "5 gpm at 8 psi"],
        answer: 0,
        explanation: "Correct (a): Table 604.3 gives a private lavatory 1.5 gpm at 8 psi. (b) is the kitchen sink flow. (c) is the close-coupled water closet. (d) is the sillcock."
      },
      {
        module: 3,
        q: "A building has 20 WSFU with flushometer valves. Using the flushometer Hunter curve, the design flow is:",
        choices: ["19.6 gpm", "27 gpm", "35 gpm", "14.6 gpm"],
        answer: 2,
        explanation: "Correct (c): On the flushometer curve, 20 WSFU converts to 35 gpm. (a) is the flush-tank 20-WSFU value. (b) is the flushometer 10-WSFU value. (d) is the flush-tank 10-WSFU value."
      },
      {
        module: 3,
        q: "Water flows at 4 ft/s through a 1-inch pipe. If the flow doubles, the velocity:",
        choices: ["Stays at 4 ft/s", "Drops to 2 ft/s", "Rises to 8 ft/s, the design limit", "Rises to 16 ft/s"],
        answer: 2,
        explanation: "Correct (c): Velocity is proportional to flow in a fixed pipe, so doubling the flow doubles the velocity to 8 ft/s — the practical design limit. (a) ignores the flow change. (b) reverses the relationship. (d) quadruples the velocity, which is not proportional."
      },
      {
        module: 4,
        q: "A temperature and pressure relief valve on a water heater opens at:",
        choices: ["120°F or 80 psi", "150°F or 100 psi", "210°F or 150 psi", "250°F or 200 psi"],
        answer: 2,
        explanation: "Correct (c): The T&P valve opens at 210°F or 150 psi, whichever comes first. (a) is in the range of a shower valve limit. (b) is below both set points. (d) is above both set points and would let the tank overheat dangerously."
      },
      {
        module: 4,
        q: "A shower valve must limit the discharge temperature to no more than:",
        choices: ["100°F", "110°F", "120°F", "140°F"],
        answer: 2,
        explanation: "Correct (c): IPC 424.3 limits shower and tub-shower valve discharge to 120°F. (a) is below the comfort range. (b) is the ASSE 1070 tempered-water limit. (d) is a common water heater set point, far too hot at the shower."
      },
      {
        module: 4,
        q: "A home has a recirculation loop that returns hot water to the heater. Its main benefit is:",
        choices: ["Higher water pressure at the shower", "Hot water arrives at the tap without waiting and without wasting water", "Lower hot-water temperature", "A smaller water heater"],
        answer: 1,
        explanation: "Correct (b): Recirculation keeps hot water near the fixture so it arrives immediately. (a) It does not raise pressure. (c) It does not lower temperature. (d) It does not shrink the heater."
      },
      {
        module: 4,
        q: "A tankless water heater is sized primarily by:",
        choices: ["Tank capacity in gallons", "Temperature rise at the required flow rate", "The number of bedrooms", "The size of the cold-water service"],
        answer: 1,
        explanation: "Correct (b): A tankless heater is rated by how much it can raise the temperature at a given flow. (a) Tankless heaters have no storage tank. (c) Bedrooms are a proxy, not the sizing input. (d) Service size follows from the heater's flow, not the other way around."
      },
      {
        module: 5,
        q: "IPC 604.8 requires a pressure-reducing valve where the static pressure exceeds:",
        choices: ["40 psi", "60 psi", "80 psi", "100 psi"],
        answer: 2,
        explanation: "Correct (c): A PRV is required above 80 psi static. (a) and (b) are normal residential pressures. (d) is well above the threshold and would leave fixtures exposed."
      },
      {
        module: 5,
        q: "A home's static pressure is 110 psi and the fixtures are noisy and the toilet fill valves are failing. The correct fix is to:",
        choices: ["Install a booster pump", "Install a PRV (ASSE 1003) with a strainer", "Increase the water service size", "Remove the water meter"],
        answer: 1,
        explanation: "Correct (b): A PRV reduces excessive pressure to a safe range. (a) A booster would raise pressure further. (c) A larger service does not lower static pressure. (d) Removing the meter does nothing to pressure."
      },
      {
        module: 5,
        q: "A PRV is installed and the water heater's T&P valve starts weeping. The most likely cause is:",
        choices: ["The PRV failed open", "Thermal expansion in a now-closed system with no expansion control", "The water heater thermostat failed", "The cold-water service is undersized"],
        answer: 1,
        explanation: "Correct (b): A PRV creates a closed system; heated water has nowhere to expand, so pressure rises until the T&P weeps. (a) A PRV failing open would not trap expansion. (c) A failed thermostat would overheat the water, a different failure. (d) Service size does not cause expansion pressure."
      },
      {
        module: 5,
        q: "A single loud bang is heard when a washing machine valve snaps shut. The best remedy is to:",
        choices: ["Raise the static pressure", "Install a water hammer arrestor near the valve", "Remove the PRV", "Increase the pipe size"],
        answer: 1,
        explanation: "Correct (b): A hammer arrestor absorbs the pressure spike at the source. (a) Higher pressure makes hammer worse. (c) Removing the PRV does not address the shock wave. (d) Larger pipe does not absorb the spike."
      },
      {
        module: 6,
        q: "The correct sequence for a water supply rough-in is:",
        choices: ["Solder first, then cut and dry-fit", "Cut and dry-fit, then join, then pressure test, then flush and disinfect", "Pressure test, then cut, then join", "Flush and disinfect, then pressure test"],
        answer: 1,
        explanation: "Correct (b): Measure and dry-fit, join permanently, prove tightness with a pressure test, then flush and disinfect. (a) Soldering before dry-fitting wastes work. (c) Testing before joining is impossible. (d) Disinfecting before proving tightness would contaminate a leaking system."
      },
      {
        module: 6,
        q: "Before soldering a copper joint, the pipe and fitting must be:",
        choices: ["Heated until the solder melts", "Cleaned and fluxed so the solder can flow and bond", "Painted to prevent corrosion", "Filled with water to keep them cool"],
        answer: 1,
        explanation: "Correct (b): Clean, bright metal plus flux is what lets solder wet and bond. (a) Heating alone on dirty metal produces a cold joint. (c) Paint prevents soldering. (d) Water in the joint blocks soldering entirely."
      },
      {
        module: 6,
        q: "A PEX crimp connection fails a pressure test at one joint. The correct response is to:",
        choices: ["Tighten the crimp ring with pliers", "Cut out the fitting, check the ring and the go/no-go gauge, and re-crimp with a new ring", "Wrap the joint in tape", "Raise the test pressure to force a seal"],
        answer: 1,
        explanation: "Correct (b): A failed crimp is cut out and remade with a new ring and a gauge check. (a) Pliers cannot re-crimp a ring. (c) Tape does not hold pressure. (d) Higher pressure makes the leak worse."
      },
      {
        module: 6,
        q: "After a pressure test passes, the water supply system is flushed to:",
        choices: ["Remove flux, debris, and construction contamination before the fixtures are used", "Pressurize the system further", "Test the water heater", "Fill the DWV traps"],
        answer: 0,
        explanation: "Correct (a): Flushing clears solder, flux, and debris so the water is clean for use. (b) Flushing is at normal pressure, not a test. (c) The heater is tested separately. (d) DWV traps are filled by fixture use, not by supply flushing."
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
        q: "Water pressure at a fixture drops when a second fixture is opened because:",
        choices: ["The water heater cools down", "Friction loss in the piping increases with flow", "The meter stops", "The PRV closes"],
        answer: 1,
        explanation: "Correct (b): More flow means more friction loss in the same pipes, so less pressure reaches each fixture. (a) Heater temperature does not affect pressure. (c) The meter keeps turning. (d) A PRV does not close when fixtures open."
      },
      {
        module: 1,
        q: "Under IPC Table 604.3, a shower must receive at least:",
        choices: ["1.5 gpm at 8 psi", "2 gpm at 8 psi", "4 gpm at 20 psi", "5 gpm at 8 psi"],
        answer: 1,
        explanation: "Correct (b): Table 604.3 gives a shower 2 gpm at 8 psi. (a) is the private lavatory. (c) is the bathtub. (d) is the sillcock."
      },
      {
        module: 2,
        q: "Under IPC Appendix E Table E103.3(2), a public flushometer water closet is assigned:",
        choices: ["2.2 WSFU", "5.0 WSFU", "6.0 WSFU", "10.0 WSFU"],
        answer: 3,
        explanation: "Correct (d): A public flushometer water closet is 10.0 WSFU. (a) is the private flush-tank water closet. (b) is the public flush-tank water closet. (c) is the private flushometer water closet."
      },
      {
        module: 2,
        q: "A small office has 1 public flush-tank water closet (5.0), 1 public lavatory (2.0), and 1 public kitchen sink (4.0). The total WSFU is:",
        choices: ["9.0 WSFU", "10.0 WSFU", "11.0 WSFU", "13.0 WSFU"],
        answer: 2,
        explanation: "Correct (c): 5.0 + 2.0 + 4.0 = 11.0 WSFU. (a) omits the kitchen sink. (b) omits the lavatory. (d) counts the water closet as 6.0 (the private flushometer value)."
      },
      {
        module: 3,
        q: "A house totals 5 WSFU with flush-tank fixtures. Using the Hunter demand curve, the design flow is:",
        choices: ["9.4 gpm", "14.6 gpm", "19.6 gpm", "23.3 gpm"],
        answer: 0,
        explanation: "Correct (a): On the flush-tank curve, 5 WSFU converts to 9.4 gpm. (b) is the 10-WSFU value. (c) is the 20-WSFU value. (d) is the 30-WSFU value."
      },
      {
        module: 3,
        q: "A house totals 30 WSFU with flush-tank fixtures. Using the Hunter demand curve, the design flow is:",
        choices: ["19.6 gpm", "23.3 gpm", "26.3 gpm", "29.1 gpm"],
        answer: 1,
        explanation: "Correct (b): On the flush-tank curve, 30 WSFU converts to 23.3 gpm. (a) is the 20-WSFU value. (c) is the 40-WSFU value. (d) is the 50-WSFU value."
      },
      {
        module: 3,
        q: "A 40-foot run of pipe has a friction loss of 4 psi per 100 feet. The loss over that run is:",
        choices: ["0.4 psi", "1.6 psi", "4 psi", "16 psi"],
        answer: 1,
        explanation: "Correct (b): 40 feet is 0.4 of 100 feet, so 0.4 x 4 = 1.6 psi. (a) divides by 10 instead of multiplying by 0.4. (c) is the loss over a full 100 feet. (d) multiplies by 4 instead of 0.4."
      },
      {
        module: 3,
        q: "The design velocity limit for water supply piping is about:",
        choices: ["2 ft/s", "4 ft/s", "8 ft/s", "20 ft/s"],
        answer: 2,
        explanation: "Correct (c): About 8 ft/s is the practical design limit; faster flow is noisy and erosive. (a) and (b) are below the limit and would mean oversized pipe. (d) is far above the limit."
      },
      {
        module: 4,
        q: "IPC 607.2 limits the developed length of hot-water piping from the source to:",
        choices: ["25 feet", "50 feet", "100 feet", "150 feet"],
        answer: 1,
        explanation: "Correct (b): Section 607.2 limits hot-water developed length to 50 feet from the source. (a) is half the limit. (c) and (d) are double and triple the limit."
      },
      {
        module: 4,
        q: "A bathroom is 80 feet from the water heater. The best way to give it fast hot water within the code's length limit is to:",
        choices: ["Raise the heater set point to 160°F", "Install a recirculation loop or a point-of-use heater at the bathroom", "Use a larger cold-water pipe", "Remove the tempering valve"],
        answer: 1,
        explanation: "Correct (b): Recirculation or a point-of-use heater brings the source within 50 feet of the fixture. (a) Raising the set point increases scald risk without shortening the wait. (c) Cold pipe size does not affect hot-water travel. (d) Removing the tempering valve raises scald risk."
      },
      {
        module: 4,
        q: "IPC 607.3 requires thermal expansion control in a closed system. The maximum pressure the control must hold is:",
        choices: ["80 psi", "120 psi", "150 psi or the rated pressure of the water heater, whichever is lower", "210 psi"],
        answer: 2,
        explanation: "Correct (c): Section 607.3.2 limits pressure to 150 psi or the rated pressure, whichever is lower. (a) is the PRV threshold. (b) is below the limit. (d) is the T&P temperature set point in psi units — a mix-up."
      },
      {
        module: 5,
        q: "A PRV fails open. The result is:",
        choices: ["No water at the fixtures", "Full street pressure reaches the fixtures", "The water heater drains", "The meter stops"],
        answer: 1,
        explanation: "Correct (b): A PRV that fails open stops regulating and passes street pressure through. (a) would be a PRV failing closed. (c) A PRV does not drain the heater. (d) The meter is upstream and keeps turning."
      },
      {
        module: 5,
        q: "A third-floor apartment has only 25 psi at the shower. The street pressure is 45 psi. The best fix is to:",
        choices: ["Install a PRV", "Install a booster pump", "Install a water hammer arrestor", "Reduce the pipe size"],
        answer: 1,
        explanation: "Correct (b): A booster pump adds the pressure that elevation has taken away. (a) A PRV reduces pressure further. (c) An arrestor absorbs shock, not low pressure. (d) Smaller pipe increases friction loss and makes pressure worse."
      },
      {
        module: 5,
        q: "A booster pump system that cycles on and off constantly most likely has:",
        choices: ["A failed or waterlogged pressure tank", "A PRV set too high", "A tempering valve stuck open", "A check valve that is working perfectly"],
        answer: 0,
        explanation: "Correct (a): A waterlogged tank has no air cushion, so pressure swings trigger the pump with every small draw. (b) A PRV set too high would raise pressure, not cycle the pump. (c) A tempering valve affects temperature, not pump cycling. (d) A working check valve does not cause short cycling."
      },
      {
        module: 6,
        q: "The first step before joining any water supply pipe is to:",
        choices: ["Pressurize the system", "Measure, cut, ream, and dry-fit the assembly", "Turn on the water", "Install the fixtures"],
        answer: 1,
        explanation: "Correct (b): Measure, cut, ream, and dry-fit first — joints are permanent once made. (a) Pressurizing comes after joining. (c) Water on before joining floods the work. (d) Fixtures are installed after the piping is proven."
      },
      {
        module: 6,
        q: "A copper joint that was soldered with water still in the pipe most likely fails because:",
        choices: ["The solder was too hot", "The water kept the joint below soldering temperature, so the solder never flowed and bonded", "The pipe was too clean", "The flux was too fresh"],
        answer: 1,
        explanation: "Correct (b): Water in the pipe absorbs the heat and prevents the joint from reaching soldering temperature. (a) Excess heat is not the failure here. (c) Clean metal is required, not a problem. (d) Fresh flux is correct practice."
      },
      {
        module: 7,
        q: "A main shutoff valve for a house should be:",
        choices: ["A globe valve, for fine throttling", "A full-port ball valve or gate valve that opens fully and shuts off tight", "A check valve", "A tempering valve"],
        answer: 1,
        explanation: "Correct (b): A full-port ball or gate valve gives full flow and a positive shutoff. (a) A globe valve throttles but adds friction loss and is a poor shutoff. (c) A check valve only prevents backflow. (d) A tempering valve blends hot and cold water."
      },
      {
        module: 7,
        q: "A toilet fill valve that keeps running after the tank fills is most likely caused by:",
        choices: ["A failed PRV", "A worn flapper or a fill valve set too high", "A water hammer arrestor", "A closed main shutoff"],
        answer: 1,
        explanation: "Correct (b): A worn flapper leaks tank water to the bowl, so the fill valve keeps topping up; a fill valve set above the overflow does the same. (a) A PRV affects pressure, not the tank's water level. (c) An arrestor absorbs shock. (d) A closed shutoff stops water entirely."
      },
      {
        module: 7,
        q: "A check valve's job is to:",
        choices: ["Throttle flow precisely", "Allow flow in one direction only and prevent backflow", "Reduce pressure", "Blend hot and cold water"],
        answer: 1,
        explanation: "Correct (b): A check valve passes flow one way and closes against reverse flow. (a) Throttling is a globe valve's job. (c) Pressure reduction is a PRV's job. (d) Blending is a tempering or mixing valve's job."
      },
      {
        module: 8,
        q: "A hose bibb with no backflow protection is connected to a garden hose lying in a puddle of fertilizer. The hazard is:",
        choices: ["Backsiphonage — a pressure drop can pull the fertilizer into the drinking water", "Thermal expansion", "Water hammer", "Freezing only"],
        answer: 0,
        explanation: "Correct (a): A pressure drop creates suction that can siphon the puddle back through the hose into the supply. (b) Thermal expansion is a closed-system pressure issue. (c) Water hammer is a shock wave from a closing valve. (d) Freezing is a separate risk, not the contamination hazard."
      },
      {
        module: 8,
        q: "The correct assembly for a high-hazard cross-connection (for example, a chemical feed system) is:",
        choices: ["A vacuum breaker (ASSE 1020)", "A double check valve assembly (ASSE 1015)", "A reduced pressure zone assembly, RPZ (ASSE 1013)", "A hose bibb vacuum breaker only"],
        answer: 2,
        explanation: "Correct (c): An RPZ protects against both backpressure and backsiphonage at high hazard, with a relief valve that dumps to drain if either check fails. (a) A PVB protects against backsiphonage only. (b) A DCVA is for low-hazard connections. (d) A hose bibb breaker protects one hose, not a chemical system."
      },
      {
        module: 8,
        q: "A pressure vacuum breaker (PVB, ASSE 1020) protects against:",
        choices: ["Backpressure only", "Backsiphonage only", "Both backpressure and backsiphonage", "Thermal expansion"],
        answer: 1,
        explanation: "Correct (b): A PVB protects against backsiphonage (suction) only and must be installed above the highest outlet. (a) It does not stop backpressure. (c) That is the RPZ's job. (d) Thermal expansion is handled by an expansion tank."
      },
      {
        module: 8,
        q: "An air gap is:",
        choices: ["A mechanical valve that closes against backflow", "A physical separation between a water outlet and the flood-level rim of a receptacle, so backflow is impossible", "A vent pipe through the roof", "A gap in a pipe joint"],
        answer: 1,
        explanation: "Correct (b): An air gap is a physical break — the most reliable backflow protection because no connection exists to flow back through. (a) describes a mechanical assembly. (c) is a DWV vent. (d) A gap in a joint is a leak."
      },
      {
        module: 9,
        q: "Water testing at 250 mg/L total hardness is classified as:",
        choices: ["Soft", "Moderately hard", "Hard", "Very hard"],
        answer: 3,
        explanation: "Correct (d): The USGS bands are soft 0–60, moderately hard 61–120, hard 121–180, and very hard above 180 mg/L; 250 is very hard. (a), (b), and (c) are all lower bands."
      },
      {
        module: 9,
        q: "One grain per gallon (gpg) of hardness equals about:",
        choices: ["1 mg/L", "17.1 mg/L", "60 mg/L", "180 mg/L"],
        answer: 1,
        explanation: "Correct (b): 1 gpg equals 17.1 mg/L. (a) confuses the two units. (c) is the top of the soft band. (d) is the top of the hard band."
      },
      {
        module: 9,
        q: "A water softener's brine tank is empty. The result is:",
        choices: ["The softener stops producing hot water", "The resin bed cannot regenerate, so hardness passes through to the fixtures", "The water becomes acidic", "The pressure drops to zero"],
        answer: 1,
        explanation: "Correct (b): Without salt, the resin cannot regenerate and hardness breaks through. (a) A softener does not heat water. (c) Softening does not acidify water. (d) A softener does not stop flow when the salt runs out."
      },
      {
        module: 9,
        q: "A whole-house sediment filter is installed:",
        choices: ["On the hot-water outlet of the heater", "On the cold-water main where it enters, before branches and fixtures", "After the water heater only", "On the DWV vent"],
        answer: 1,
        explanation: "Correct (b): A whole-house filter sits on the entering cold main so every fixture is protected. (a) Filtering only hot water leaves the cold side unprotected. (c) is the same error. (d) A DWV vent carries air, never water."
      },
      {
        module: 10,
        q: "A pressure switch set to 40/60 psi turns the well pump:",
        choices: ["On at 60 psi and off at 40 psi", "On at 40 psi and off at 60 psi", "On at 50 psi and off at 50 psi", "On at 30 psi and off at 50 psi"],
        answer: 1,
        explanation: "Correct (b): The pump cuts in at the low number (40 psi) and cuts out at the high number (60 psi). (a) reverses the two. (c) describes a single-point setting, not a 40/60 switch. (d) is the 30/50 setting."
      },
      {
        module: 10,
        q: "A shallow-well jet pump is limited to wells about:",
        choices: ["10 feet deep", "25 feet deep", "100 feet deep", "300 feet deep"],
        answer: 1,
        explanation: "Correct (b): A shallow-well jet pump lifts water by suction and is practical to about 25 feet. (a) is shallower than the limit. (c) and (d) need a deep-well jet or a submersible pump."
      },
      {
        module: 10,
        q: "A submersible well pump is installed:",
        choices: ["Above the wellhead in a pump house", "Down in the well, below the water level", "On the roof", "In the water heater closet"],
        answer: 1,
        explanation: "Correct (b): A submersible pump sits below the water level in the well and pushes water up. (a) describes a jet pump. (c) and (d) are not pump locations."
      },
      {
        module: 10,
        q: "A well pressure tank that is waterlogged causes the pump to:",
        choices: ["Run continuously without stopping", "Short-cycle — turning on and off rapidly", "Stop working entirely", "Produce hotter water"],
        answer: 1,
        explanation: "Correct (b): With no air cushion, a small draw drops pressure fast and the pump cycles on and off rapidly. (a) A pump running nonstop points to a leak or a failed switch. (c) A waterlogged tank does not stop the pump. (d) A tank does not heat water."
      },
      {
        module: 11,
        q: "The most reliable way to protect a water pipe in an unheated crawlspace from freezing is to:",
        choices: ["Paint the pipe", "Insulate it and, where needed, add heat tape on a thermostat", "Use a larger pipe", "Leave the pipe full of air"],
        answer: 1,
        explanation: "Correct (b): Insulation slows heat loss and heat tape adds heat where insulation alone is not enough. (a) Paint does not insulate. (c) Larger pipe still freezes. (d) A supply pipe must carry water; air in the line is not a protection method."
      },
      {
        module: 11,
        q: "A pipe sleeve through a concrete wall is used to:",
        choices: ["Increase water pressure", "Protect the pipe from the concrete and allow movement and future replacement", "Insulate the pipe from freezing", "Filter the water"],
        answer: 1,
        explanation: "Correct (b): A sleeve isolates the pipe from the concrete, lets it expand and contract, and lets it be pulled out later. (a) A sleeve does not change pressure. (c) Insulation, not sleeving, fights freezing. (d) A sleeve does not filter water."
      },
      {
        module: 11,
        q: "A homeowner leaves for a week in January and shuts off the water. The best additional step is to:",
        choices: ["Open all faucets and drain the system, or leave a faucet dripping with the heat on", "Close all the windows", "Turn off the water heater only", "Fill the pipes with antifreeze"],
        answer: 0,
        explanation: "Correct (a): Draining the system removes the water that could freeze, and a slow drip with heat on keeps water moving as a fallback. (b) Closed windows do not protect pipes. (c) Turning off the heater alone leaves the pipes full. (d) Antifreeze is not used in potable water piping."
      },
      {
        module: 12,
        q: "A design calls for a 1-inch water service. The street pressure is 45 psi and the highest fixture is 20 feet above the meter. The pressure at that fixture before friction loss is about:",
        choices: ["25 psi", "36 psi", "45 psi", "54 psi"],
        answer: 1,
        explanation: "Correct (b): Elevation costs about 0.433 psi per foot: 20 x 0.433 is about 8.7 psi, so 45 - 8.7 is about 36 psi. (a) subtracts 20 psi, or 1 psi per foot. (c) ignores elevation. (d) adds pressure for going up."
      },
      {
        module: 12,
        q: "A design review finds the water heater set to 140°F with no tempering valve and a shower valve that is not pressure-balanced. The priority fix is:",
        choices: ["Add a booster pump", "Add a tempering or mixing valve and a pressure-balanced shower valve so the shower cannot exceed 120°F", "Increase the pipe size", "Add a second water heater"],
        answer: 1,
        explanation: "Correct (b): Tempering and a pressure-balanced valve are the scald protections the code requires. (a) A booster addresses pressure, not temperature. (c) Pipe size does not control temperature. (d) A second heater adds capacity, not safety."
      },
      {
        module: 12,
        q: "A design review finds a hose bibb with no backflow protection, a water heater with no expansion tank in a closed system, and a shower without a pressure-balanced valve. The correct priority order is:",
        choices: ["Shower valve first, then the hose bibb, then the expansion tank", "Hose bibb first (contamination), then the expansion tank (pressure), then the shower valve (scald)", "Expansion tank first, then the shower valve, then the hose bibb", "All three are equally urgent, so fix them in any order"],
        answer: 1,
        explanation: "Correct (b): Contamination of the drinking water comes first, then uncontrolled pressure, then scald protection. (a) puts scald ahead of contamination. (c) puts pressure ahead of contamination. (d) treats unlike hazards as equal — contamination that can reach the whole neighborhood is not equal to a single shower's scald risk."
      },
      {
        module: 12,
        q: "The six-step water system job sequence in order is:",
        choices: ["Install, test, size, source, quality, prove", "Source, size, install, test, protect, prove", "Protect, size, source, test, install, prove", "Size, source, protect, install, test, prove"],
        answer: 1,
        explanation: "Correct (b): Source, size, install, test, protect, prove. (a) starts with install before the source is known. (c) starts with protection before the system exists. (d) sizes before the source is established."
      },
      {
        module: 12,
        q: "A plan shows a public flushometer water closet at 2.2 WSFU. The error is:",
        choices: ["The value is too low — a public flushometer water closet is 10.0 WSFU", "The value is too high — it should be 1.4 WSFU", "The value is correct", "The value should be 5.0 WSFU, the public flush-tank value"],
        answer: 0,
        explanation: "Correct (a): 2.2 WSFU is the private flush-tank value; a public flushometer water closet is 10.0 WSFU. (b) 1.4 WSFU is a bathtub or kitchen sink. (c) The value is wrong — it uses the private flush-tank column for a public flushometer fixture. (d) 5.0 WSFU is the public flush-tank value, not the flushometer value."
      },
      {
        module: 12,
        q: "A plan shows a water heater's T&P discharge pipe terminating at a floor drain with no air gap. The correct fix is:",
        choices: ["Leave it — a floor drain is an approved termination", "Terminate the discharge through an air gap to an approved receptor, so a backup cannot enter the heater", "Cap the discharge pipe", "Route the discharge to the roof"],
        answer: 1,
        explanation: "Correct (b): The T&P discharge must terminate through an air gap so a drain backup cannot reach the heater. (a) A direct connection to a drain is a cross-connection. (c) Capping the discharge defeats the relief valve. (d) Routing to the roof does not provide the required visible termination."
      }
    ]
  }
};
