// HVAC 207 — Midterm and Final exams.
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
        q: "A florist's display room is held at 50°F. This is which application family, and what product lives at the cold end of the same family's logic in a supermarket?",
        choices: ["Low temperature; ice cream", "Medium temperature; milk", "High temperature; and the family's logic does not extend to supermarket product — wine and flowers are its examples", "Comfort cooling; bottled water"],
        answer: 2,
        explanation: "Correct (c): 45–55°F is the high-temperature band, and its textbook examples are wine and flowers. (a) Low temperature is −10–0°F, where ice cream lives but flowers would be destroyed. (b) Medium is 34–41°F; milk at 50°F violates the 41°F food-safety limit. (d) Comfort cooling conditions air for people and is not a refrigeration application family."
      },
      {
        module: 1,
        q: "A freezer box holds 0°F and its coil TD is 12°F. The refrigerant is evaporating at approximately:",
        choices: ["12°F", "0°F", "−12°F", "+12°F"],
        answer: 2,
        explanation: "Correct (c): Evaporating temperature = box − TD = 0 − 12 = −12°F. (a) and (d) confuse the TD value or its sign with the result. (b) ignores the TD; a coil at the box's own temperature absorbs no heat."
      },
      {
        module: 1,
        q: "A health inspector probes chicken in a walk-in at 44°F. The box air reads 39°F. The correct professional statement is:",
        choices: ["The box passes, because air temperature is under 41°F... it is not — but the food does pass", "The product is out of compliance: refrigerated perishables must be at 41°F or below, and product temperature is what counts", "The box fails its thermostat calibration only", "Nothing is wrong; chicken may be held at 45°F"],
        answer: 1,
        explanation: "Correct (b): The 41°F standard applies to the product, and 44°F product is non-compliant regardless of what the air reads. (a) twists itself — the air reading neither passes (39 is under 41 but that is not the test) nor saves the product. (c) Calibration may deserve a check but is not the violation. (d) There is no 45°F allowance for raw chicken."
      },
      {
        module: 1,
        q: "Why does an evaporator frost even in a cooler whose box never goes below 35°F?",
        choices: ["Because the defrost is broken by definition", "Because the evaporating temperature must be colder than the box — below freezing — so coil moisture freezes", "Because R-404A contains water", "Because the fans blow freezer air into the cooler"],
        answer: 1,
        explanation: "Correct (b): With a typical TD the coil surface runs in the 20s °F, below freezing, so moisture plates out as frost. (a) Frost between proper defrosts is normal, not proof of failure. (c) Refrigerant is dry by specification; the water comes from box air. (d) There is no freezer air source in a standalone cooler."
      },
      {
        module: 2,
        q: "On a pump-down walk-in, the box warms and the compressor never starts, though the thermostat is calling and the solenoid clicks open. Suction pressure rises normally. The failed link is most likely:",
        choices: ["The receiver is empty", "The low-pressure control is not closing at cut-in pressure", "The evaporator fans are off", "The door gasket leaks"],
        answer: 1,
        explanation: "Correct (b): The chain — stat, solenoid, pressure rise — is proven good up to the pressure control, which must close to start the compressor and is not. (a) An empty receiver would starve the system, but suction pressure would not rise normally on a call. (c) Fans affect cooling, not the compressor's start circuit here. (d) A gasket adds load; it cannot break the control chain."
      },
      {
        module: 2,
        q: "After a defrost, a walk-in freezer's compressor starts but the evaporator fans stay off for several minutes, then start. This is:",
        choices: ["A failed fan motor", "Normal fan delay — fans wait until the coil is cold again", "A defrost clock wired backwards", "Proof the fans are on a separate failed circuit"],
        answer: 1,
        explanation: "Correct (b): Fan delay prevents blowing defrost heat and moisture onto the product; the fans start once the coil sensor confirms cold. (a) A dead motor would not start minutes later on schedule. (c) The sequence described is the designed sequence, not a wiring error. (d) The fans demonstrably work when they start — the delay is the control's intention."
      },
      {
        module: 2,
        q: "A cooler that relies on off-cycle defrost is found with a solidly iced coil after a weekend of banquets. The most likely root cause is:",
        choices: ["The compressor ran too little", "Continuous load (propped door, constant traffic, hot food) eliminated the off cycles the defrost depends on", "The TXV was set too cold", "The refrigerant is contaminated"],
        answer: 1,
        explanation: "Correct (b): Off-cycle defrost only happens during off cycles; banquet load can erase them entirely while frost compounds. (a) The opposite occurred — the compressor likely never stopped. (c) TXV setting influences superheat, not the existence of off cycles. (d) Contamination does not produce a weekend-shaped icing event."
      },
      {
        module: 2,
        q: "The purpose of the walk-in door's inside safety release is:",
        choices: ["To let staff prop the door hands-free", "To guarantee a person inside can get out even if the door is latched or iced from outside", "To reset the defrost clock from inside", "To vent pressure after defrost"],
        answer: 1,
        explanation: "Correct (b): Walk-ins are enterable rooms; entrapment protection is a life-safety feature. (a) Propping defeats refrigeration and is the opposite of a designed function. (c) Controls are not operated from inside the box by design. (d) Pressure equalization is handled by vents/ports on freezers, not by the egress release."
      },
      {
        module: 3,
        q: "A self-contained freezer's nameplate charge is 12 ounces, metered by a capillary tube. It is low on charge after a leak repair. Correct charging is:",
        choices: ["Charge to a clear sight glass", "Weigh in 12 ounces of the specified refrigerant", "Charge until the suction line sweats to the compressor", "Add 14 ounces to allow for the repair"],
        answer: 1,
        explanation: "Correct (b): Critically charged cap-tube systems are charged by weight against the nameplate. (a) Many such units have no sight glass, and glass behavior cannot meter ounces. (c) Line sweat is weather-dependent folklore that invites floodback. (d) The extra 2 ounces on a 12-ounce charge is a ~17% overcharge in a system with no receiver."
      },
      {
        module: 3,
        q: "An ice machine's freeze times lengthen over a season and cubes shrink, while refrigerant-side checks look normal. The first service is:",
        choices: ["Recover and weigh the charge", "Descale and sanitize the water system and evaporator plate; check the water filter", "Replace the hot gas valve", "Raise the bin thermostat setting"],
        answer: 1,
        explanation: "Correct (b): Scale insulates the plate and disturbs water distribution — the classic cause of this exact drift. (a) Charge problems do not grow on a seasonal schedule tied to water exposure. (c) The harvest valve affects release, not freeze length and cube size together. (d) The bin control decides when production stops, not how fast ice forms."
      },
      {
        module: 3,
        q: "Cubes form fully but stay stuck on the plate cycle after cycle. The suspect list starts with:",
        choices: ["The harvest function — hot gas delivery to the evaporator and the release mechanism", "The bin control", "Incoming water pressure being too high", "The condenser fan"],
        answer: 0,
        explanation: "Correct (a): Formed ice that will not release is a harvest failure — hot gas not arriving, or release mechanics fouled. (b) The bin control stops production between cycles; it cannot glue ice to a plate. (c) Excess water pressure affects fill and distribution, not release of a formed slab. (d) A condenser problem would degrade freezing first, which is described as normal."
      },
      {
        module: 3,
        q: "Product at the front top of an open dairy case is warm while the rest of the case is at temperature. The product is stacked two layers above the load line. The fix is:",
        choices: ["Lower the case setpoint 4°F", "Restack the product below the load line — it is sitting outside the air curtain", "Add a second evaporator fan", "Block the return air grille to slow the curtain"],
        answer: 1,
        explanation: "Correct (b): Above the load line is outside the refrigerated air pattern; no setpoint extends the curtain. (a) Freezing the rest of the case to rescue misplaced product punishes everything else. (c) Fans do not redefine where the curtain reaches. (d) Blocking the return destroys the curtain's circuit entirely."
      },
      {
        module: 4,
        q: "One condensing unit serves a freezer coil (must boil at −15°F) and a produce coil (must boil at 32°F) on R-404A. The produce coil's EPR must hold its evaporator:",
        choices: ["At the same pressure as the freezer coil", "At a higher pressure than the common suction header, corresponding to 32°F on the P/T chart", "At a lower pressure than the header, to help the compressor", "At atmospheric pressure"],
        answer: 1,
        explanation: "Correct (b): The header runs at the freezer's pressure; the EPR throttles the produce coil's vapor to keep that coil up at its own warmer saturation pressure. (a) Equal pressure would mean equal boiling temperature — produce at freezer conditions. (c) An EPR cannot push an evaporator below header pressure; throttles only drop pressure downstream. (d) Atmospheric pressure corresponds to a far warmer boiling point and no refrigeration at all."
      },
      {
        module: 4,
        q: "A gauge at the compressor of a two-temperature system reads the pressure of:",
        choices: ["The warmest evaporator", "The average of both evaporators", "The coldest evaporator (the header pressure)", "Whichever evaporator has the larger coil"],
        answer: 2,
        explanation: "Correct (c): The compressor sits on the common header, set by the coldest load. (a) The warm evaporator's pressure exists only upstream of its EPR. (b) Shared lines equalize; they do not average two saturation states. (d) Coil size affects capacity, not the header's pressure level."
      },
      {
        module: 4,
        q: "A freezer compressor with no CPR trips its overload shortly after every defrost but runs all day otherwise. The mechanism is:",
        choices: ["Low suction pressure after defrost starves the motor of cooling", "Warm evaporator = high suction pressure = dense vapor = motor overload during pull-down, which a CPR would throttle", "Oil leaves the crankcase during defrost", "The defrost heaters stay on and share the circuit"],
        answer: 1,
        explanation: "Correct (b): Restarting against a warm, high-pressure evaporator overloads the motor; the CPR exists to cap inlet pressure until pull-down completes. (a) Post-defrost suction pressure is high, not low. (c) Oil migration is an off-cycle/pump-down topic, and its symptom is slugging, not timed overload trips. (d) Heater circuits are separate and would trip breakers, not the compressor's overload pattern described."
      },
      {
        module: 4,
        q: "An EPR is accidentally set far too warm on a medium-temp case. Expected symptoms:",
        choices: ["Case too cold, product frozen", "Case too warm — the valve throttles so hard to hold high pressure that the coil starves and capacity falls", "Compressor overload trips", "No effect; EPRs only matter at start-up"],
        answer: 1,
        explanation: "Correct (b): Holding an artificially high evaporator pressure means holding a high boiling temperature — the coil can barely get colder than its setpoint, so the case warms. (a) describes a too-cold (too-low) setting. (c) Compressor overload is CPR territory, about high pressure at the wrong end. (d) EPRs regulate continuously whenever their evaporator runs."
      },
      {
        module: 5,
        q: "Three of five rack compressors are running on a mild day and suction pressure sits exactly at setpoint. A trainee calls this a rack fault ('two compressors down'). The truth:",
        choices: ["The trainee is right; all compressors should always run", "Staging is doing its job — capacity is matched to load, proven by suction holding setpoint", "The controller is broken and the store is at risk", "Two compressors have failed simultaneously"],
        answer: 1,
        explanation: "Correct (b): Staging exists to run only the capacity the load needs; setpoint suction with machines resting is health, not failure. (a) Running everything always would short-cycle and waste energy. (c) A broken controller shows up as drifting suction or warming cases, the opposite of the report. (d) Simultaneous double failure that still holds setpoint perfectly would be a remarkable coincidence."
      },
      {
        module: 5,
        q: "One rack compressor keeps failing on its oil safety while the reservoir is full and the other compressors' levels are normal. Best first checks:",
        choices: ["Drain oil from the whole rack", "That compressor's oil level control, its feed line/filter/screen, and its differential", "The condenser fans", "The store's case temperatures"],
        answer: 1,
        explanation: "Correct (b): A full reservoir plus healthy neighbors isolates the fault to this machine's personal oil supply path. (a) Draining punishes four healthy machines for one stuck float. (c) Condenser fans move head pressure, not one crankcase's oil supply. (d) Case temperatures are downstream evidence, not an oil distribution check."
      },
      {
        module: 5,
        q: "Floating head pressure is limited by a programmed minimum mainly to protect:",
        choices: ["The paint warranty on the condenser", "TXV feeding, hot-gas defrost capability, and oil return, all of which need adequate pressure", "Compressor nameplate color", "The utility's feelings"],
        answer: 1,
        explanation: "Correct (b): The floor is functional — valves, defrost, and oil systems were engineered around a minimum pressure difference. (a) and (c) are not engineering constraints. (d) The utility in fact prefers floating head pressure; it is a flagship efficiency measure."
      },
      {
        module: 5,
        q: "A supermarket keeps medium- and low-temperature loads on separate racks primarily because:",
        choices: ["Two smaller electrical services are cheaper", "A shared header must run at its coldest load's pressure, which would waste large energy on medium-temp loads", "Compressors vibrate less in pairs", "Health codes cap cases per rack"],
        answer: 1,
        explanation: "Correct (b): It is Module 4's rule at building scale — one pressure per header, priced by the coldest tenant. (a) Services are sized to total load either way. (c) Vibration management is not the driver. (d) No such health-code cap shapes rack architecture."
      },
      {
        module: 6,
        q: "A walk-in freezer's defrost terminates on a timer only, set long 'to be safe.' August humidity overwhelms it anyway. The professional correction is:",
        choices: ["Extend the timer further", "Fit temperature termination with the timer retained as fail-safe, and review frequency for the humid season", "Add a second timer", "Switch to off-cycle defrost"],
        answer: 1,
        explanation: "Correct (b): Terminate on coil evidence, keep time as the backstop, and schedule for the worst season. (a) Longer fixed defrosts waste energy and warm product while still guessing. (c) Two clocks are still zero sensors. (d) Off-cycle defrost cannot work below freezing — freezer air cannot melt frost."
      },
      {
        module: 6,
        q: "Hot gas defrost's main efficiency advantage over electric defrost is:",
        choices: ["It uses no valves", "It delivers heat the system already made (discharge gas) directly inside the coil tubes, melting faster with less heat dumped into the box", "It never needs termination controls", "It works with the compressor off"],
        answer: 1,
        explanation: "Correct (b): Inside-out heating with reclaimed compression heat is both faster and cheaper per defrost. (a) Hot gas needs more valving than electric, not less. (c) It needs termination discipline exactly like electric — arguably more, given the compressor is running. (d) The compressor must run to make hot gas."
      },
      {
        module: 6,
        q: "Meltwater refreezing on the coil and in the pan right after defrost points to a missing or failed:",
        choices: ["Fan delay", "Drip time (and possibly drain pan heat)", "Fail-safe timer", "Night cover"],
        answer: 1,
        explanation: "Correct (b): Drip time lets water leave before refrigeration restarts; pan heat keeps the drain path open in freezers. (a) Fan delay protects product from warm air — its absence does not freeze pan water. (c) The fail-safe ends defrosts; the symptom is about what happens after the end. (d) Night covers belong to open retail cases, not walk-in coil drainage."
      },
      {
        module: 6,
        q: "A freezer warms slightly every day at 5 a.m. and recovers by 6:30. Gauges and components check out. The most probable explanation:",
        choices: ["A failing compressor that heals daily", "A scheduled 5 a.m. defrost with normal recovery — verify its length and termination before condemning anything", "Utility brownouts at dawn", "A refrigerant leak that reseals"],
        answer: 1,
        explanation: "Correct (b): Clock-shaped symptoms belong to clock-driven events; verify the defrost is terminating on temperature and not overstaying. (a) Mechanical failures do not keep appointments or heal. (c) Brownouts would disturb the whole building's equipment, not one box on a tidy schedule. (d) Leaks do not reseal on a timetable."
      },
      {
        module: 6,
        q: "Why should the two halves of one large case (or neighboring cases on a rack) not defrost at the same moment?",
        choices: ["The defrost clock cannot count two at once", "Simultaneous defrost swings rack load and pressure and warms adjacent product together; staggering spreads both effects", "It voids the case warranty", "The heaters would overload the panel"],
        answer: 1,
        explanation: "Correct (b): Staggering is a systems decision about shared capacity and shared product risk. (a) Controllers schedule many loads independently without trouble. (c) Warranty terms do not dictate defrost choreography. (d) Heater load is a design consideration of the electrical install, not the reason for operational staggering."
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
        q: "A new store groups its cold fixtures for the service contract. Which grouping is by correct temperature family?",
        choices: ["Wine room + ice cream cabinet (both high value)", "Dairy walk-in + reach-in produce case (both medium temperature)", "Freezer + deli case (both low)", "Floral case + freezer (both hold near 40°F)"],
        answer: 1,
        explanation: "Correct (b): Dairy and produce reach-ins both live at 34–41°F, medium temperature. (a) Wine is high temperature (~45–55°F); ice cream is low (−10–0°F) — value is not a temperature family. (c) The deli case is medium; only the freezer is low. (d) A floral case is high temperature and a freezer is 40–50 degrees colder than 'near 40.'"
      },
      {
        module: 1,
        q: "For R-404A superheat work you read suction pressure of about 66 psig. The saturation temperature to use is:",
        choices: ["40°F, from the bubble point", "40°F, from the dew point", "35°F, from the R-134a chart", "66°F, read straight off the gauge"],
        answer: 1,
        explanation: "Correct (b): Superheat describes vapor, so blends use dew point; R-404A dew at ~66 psig is ~40°F. (a) The value coincides but the column is wrong — bubble point is for subcooling, and on other conditions the two columns diverge. (c) Each refrigerant has its own chart; R-134a at 66 psig is a different temperature. (d) Pressure numbers are not temperatures."
      },
      {
        module: 2,
        q: "A walk-in cooler's unit cooler fans run continuously, including while the compressor is off, and the owner asks if that wastes money. The correct answer includes:",
        choices: ["Yes — fans should be wired to the compressor contactor", "No — on this design the running fans perform off-cycle defrost and keep box air mixed; it is the intended operation", "Only if the box is a freezer", "The fans indicate a stuck contactor"],
        answer: 1,
        explanation: "Correct (b): Continuous fan operation is a designed feature on many coolers — air mixing plus off-cycle defrost. (a) Rewiring would defeat the defrost method and stratify box temperatures. (c) Freezer fans also run during cooling calls; the distinction is defrost/fan-delay behavior, not permission to run. (d) A stuck contactor would run the compressor too, which is not the report."
      },
      {
        module: 2,
        q: "Ice is building on a freezer's door frame and the door is becoming hard to close fully, while the box holds −4°F. First checks:",
        choices: ["Charge and superheat", "Frame heater circuit, gasket condition, and door closer operation", "Defrost termination sensor", "TXV bulb mounting"],
        answer: 1,
        explanation: "Correct (b): Door ice with a healthy box temperature is envelope failure — heater, gasket, closer. (a) Refrigerant-side values do not freeze door frames. (c) Termination affects coil ice, not the threshold. (d) The bulb governs feed; the box holding temperature acquits it."
      },
      {
        module: 3,
        q: "A greasy kitchen reach-in slowly loses ground over two weeks, now at 43°F, running constantly. Condenser is matted with grease. The correct service sequence is:",
        choices: ["Add refrigerant, then clean if needed", "Clean the condenser, verify its fan, then evaluate pressures and temperature recovery", "Replace the compressor — constant running means it is worn out", "Lower the thermostat to compensate"],
        answer: 1,
        explanation: "Correct (b): Restore heat rejection first; many such calls end there, and readings taken through the mat were meaningless. (a) Charging a dirt-crippled system builds a real overcharge on top of the dirt. (c) Constant running is the symptom of lost capacity, not proof of a worn compressor. (d) A colder setpoint cannot add capacity and risks freezing product when the coil is cleaned later."
      },
      {
        module: 3,
        q: "A remote display case and its 39 rack-mates all warm together while rack suction pressure is high. The fault is most likely:",
        choices: ["That case's TXV", "At the rack — a system-level capacity problem, since all loads share the symptom", "Forty simultaneous gasket failures", "The case's night cover"],
        answer: 1,
        explanation: "Correct (b): Common symptoms across shared loads indict the shared system; high suction confirms load is outrunning capacity. (a) One case's TXV cannot warm its neighbors. (c) Gaskets fail individually and gradually, not in formation. (d) One case's cover cannot move rack suction pressure."
      },
      {
        module: 4,
        q: "On an R-404A two-temperature system the header runs at about 24 psig (dew ≈ −10°F) for the freezer. A deli evaporator must boil at 30°F (≈51 psig dew). A gauge teed in ahead of the deli case's EPR should read about:",
        choices: ["24 psig", "51 psig", "66 psig", "0 psig"],
        answer: 1,
        explanation: "Correct (b): Ahead of the EPR you read the evaporator's own held pressure — 51 psig for 30°F dew. (a) 24 psig is the header's pressure, found at the compressor or downstream of the EPR. (c) 66 psig is the 40°F dew anchor — warmer than this case's target. (d) A running evaporator is never at atmospheric pressure."
      },
      {
        module: 4,
        q: "The difference between an EPR and a CPR is best stated as:",
        choices: ["EPRs are electric; CPRs are manual", "An EPR holds one evaporator's pressure from falling too low; a CPR caps the pressure the compressor inlet may see during pull-down", "They are the same valve installed in different years", "A CPR regulates liquid line pressure"],
        answer: 1,
        explanation: "Correct (b): Location and direction define them — evaporator outlet/minimum pressure vs. compressor inlet/maximum pressure. (a) Both are pressure-actuated regulators; the distinction is function, not power source. (c) They solve opposite problems. (d) Both live in the suction path; neither touches the liquid line."
      },
      {
        module: 5,
        q: "At 2 a.m. a rack's suction pressure sits at setpoint with one compressor running unloaded. By noon four compressors run and pressure still holds setpoint. The controller is demonstrating:",
        choices: ["A fault — compressor count should be constant", "Capacity staging and unloading matching a daily load curve", "Failing unloaders", "A suction leak that heals at night"],
        answer: 1,
        explanation: "Correct (b): Night covers and closed doors shrink the load; restocking and shoppers grow it; staging follows. (a) Constant count would waste energy and short-cycle at night. (c) Unloaders are part of the described success, not its failure. (d) A leak's symptom would appear as lost charge over days, not a daily rhythm with setpoint held."
      },
      {
        module: 5,
        q: "Oil added to a rack during service seems to 'disappear' while no leak is found and levels later recover. The most likely story:",
        choices: ["The oil burned up in the compressors", "Oil logs out in the system (coils, long lines, low spots) and returns with load and temperature changes — distribution, not consumption", "Someone is stealing oil", "The reservoir gauge is haunted"],
        answer: 1,
        explanation: "Correct (b): Oil circulates and parks around large systems; levels breathe with operating conditions, which is why separator/reservoir/level-control management exists. (a) Oil does not burn in normal operation — if it did, the failure would be catastrophic and visible. (c) and (d) are not diagnoses. The service lesson: do not chase a wandering level with the oil jug."
      },
      {
        module: 6,
        q: "A freezer coil clears fully in 14 minutes by temperature termination, but the clock's fail-safe is set to 20 minutes and the sensor fails one night. The consequence that night is bounded because:",
        choices: ["The heaters turn themselves off when hot", "The fail-safe time ends the defrost at 20 minutes even with the sensor dead", "The fans restart automatically at any temperature", "Fail-safe settings do not matter"],
        answer: 1,
        explanation: "Correct (b): The time backstop caps a sensor failure's damage at a 6-minute overrun instead of an unbounded cook. (a) Heaters run until the control ends the cycle; they have no self-knowledge of coil ice. (c) Fan restart follows its delay logic, which does not terminate defrost heat. (d) This scenario is precisely what fail-safes are for."
      },
      {
        module: 6,
        q: "Which defrost pairing is impossible as stated?",
        choices: ["Electric defrost on a −10°F freezer", "Hot gas defrost on a rack's low-temp cases", "Off-cycle defrost on a 36°F cooler", "Off-cycle defrost on a −10°F freezer"],
        answer: 3,
        explanation: "Correct (d): Off-cycle defrost melts frost with box air, and −10°F air cannot melt anything. (a) Electric is the standard small-freezer method. (b) Hot gas is the rack standard for low temperature. (c) Off-cycle is the standard medium-temperature method — the pairing the freezer wishes it could use."
      },
      {
        module: 1,
        q: "A grocery adds a sushi case that must hold raw fish at the cold end of the medium band, right against the 41°F limit. Compared with the dairy case beside it, this case demands most:",
        choices: ["A different refrigerant family", "Tighter temperature control and monitoring, because its safety margin above freezing and below the limit is the narrowest on the floor", "Low-temperature equipment", "An open front for access"],
        answer: 1,
        explanation: "Correct (b): Raw fish lives closest to both boundaries — quality and safety — so control accuracy and verification matter most. (a) Both cases are medium-temperature applications that commonly share refrigerants and racks. (c) Low-temp equipment would freeze the fish. (d) Front style is merchandising; many sushi cases are doored or serviced, and openness is not a temperature-control strategy."
      },
      {
        module: 2,
        q: "A new walk-in freezer is placed in service and the door is extremely hard to open for a minute after each closing, then eases. The designed feature responsible is:",
        choices: ["A defective door closer", "A pressure relief (equalization) port doing its job as warm air admitted at closing contracts in the cold", "The frame heater overheating the gasket", "A vacuum left by the evacuation"],
        answer: 1,
        explanation: "Correct (b): Air that entered warm contracts as it chills, dropping box pressure; the relief port bleeds air in until pressures equalize. (a) A closer affects the closing swing, not a timed post-close vacuum hold. (c) Frame heat prevents ice; it does not create suction. (d) Evacuation applies to the refrigeration circuit, not the box air."
      },
      {
        module: 3,
        q: "Two identical reach-ins stand side by side; one holds temperature, the other runs 6°F warm with noticeably longer run time. Both condensers are clean and both doors seal. The comparison that comes next is:",
        choices: ["Replace both compressors as a pair", "Operating measurements on the warm unit against the healthy twin — pressures, superheat, fan performance — because the twin defines normal for this exact model and room", "Condemn the warm unit's refrigerant as the wrong type without testing", "Move the warm unit to a cooler room and re-check next month"],
        answer: 1,
        explanation: "Correct (b): An identical healthy sibling in the same room is the best baseline instrument in the building. (a) Pair replacement spends two compressors on one unproven theory. (c) Refrigerant type does not change mid-life on one unit of a matched pair. (d) Relocating the symptom is not a diagnosis, and the room acquitted itself by hosting the healthy twin."
      },
      {
        module: 4,
        q: "A shared system adds a third evaporator — a cooler coil warmer than both existing loads. The system change required is:",
        choices: ["Raise the header pressure to the new coil's level", "Fit the new coil with its own EPR set for its temperature; the header stays at the coldest load's pressure", "Install a second compressor just for starting", "Remove the existing EPRs so all coils equalize"],
        answer: 1,
        explanation: "Correct (b): Each warmer-than-coldest coil gets an EPR; the header never rises for a warm tenant. (a) Raising the header would starve the coldest load of the pressure it needs to reach temperature. (c) Starting duty is not the issue a new warm load creates. (d) Removing EPRs collapses the multi-temperature design into one temperature — the coldest one."
      },
      {
        module: 5,
        q: "A rack's receiver level has been falling slowly for weeks while cases perform normally and no leak has been found yet. The correct classification of this finding is:",
        choices: ["Ignore it — cases are fine", "An early-warning trend: refrigerant inventory is leaving or redistributing; start the leak-search discipline before performance suffers", "Proof the receiver is undersized", "A reason to add oil"],
        answer: 1,
        explanation: "Correct (b): Inventory trends are the rack's leak announcement system (Modules 8 and 10); waiting for warm cases spends the head start. (a) 'Fine today' is how slow leaks become emergency calls. (c) Receiver sizing does not change across weeks. (d) Oil and refrigerant inventories are separate stories."
      },
      {
        module: 6,
        q: "A demand-defrost controller defrosts a case three times on a humid Saturday and once on a dry Tuesday. A time-clock loyalist calls this erratic. The correct evaluation:",
        choices: ["Erratic — defrosts should be identical daily", "Correct behavior: defrost frequency following measured frost load, which follows humidity and traffic", "A sensor failure making it over-defrost on Saturdays", "Proof the case needs electric backup heat"],
        answer: 1,
        explanation: "Correct (b): Frost is made of infiltrated moisture; demand control defrosts the coil it actually has, not the calendar's average coil. (a) Identical schedules defrost phantom ice on dry days and lose to real ice on wet ones. (c) Over-defrosting would show as warm case complaints, and the pattern tracks weather too rationally. (d) Backup heat is not implicated by correct demand behavior."
      },
      {
        module: 7,
        q: "On the coldest night of the year a store's TXV cases starve while head pressure reads far below the manufacturer's minimum and every condenser fan is running. The system has fan-cycling control. The likeliest failure:",
        choices: ["The refrigerant left for the season", "The fan-cycling control has failed (welded contacts or bad sensor), so fans never cut out to defend the minimum head pressure", "The TXVs all failed simultaneously from cold", "The cases need more defrosts"],
        answer: 1,
        explanation: "Correct (b): All fans running plus collapsed head pressure plus starved valves is the low-ambient control's signature failure. (a) Refrigerant does not migrate seasonally out of sealed systems. (c) Forty valves do not fail in formation on a weather schedule. (d) Defrost frequency does not create liquid-line pressure difference."
      },
      {
        module: 7,
        q: "A flooded-condenser system in January shows its receiver at the level the manufacturer's winter chart specifies. A tech 'tops the receiver up to the summer mark.' The predictable April result:",
        choices: ["Nothing changes", "Overcharge symptoms — high head pressure and lost condenser capacity — once the condenser drains and the winter inventory returns to the receiver", "The system thanks him with lower bills", "The flooding valve burns out"],
        answer: 1,
        explanation: "Correct (b): The winter inventory is real refrigerant parked in the condenser; adding summer-level charge on top double-counts it. (a) Conservation of refrigerant says otherwise. (c) Overcharge costs energy, the opposite of thanks. (d) Valves do not burn out from charge level; the harm is thermodynamic, not electrical."
      },
      {
        module: 7,
        q: "Fan speed control's advantage over fan cycling for head pressure is:",
        choices: ["It works without electricity", "It modulates heat rejection continuously, holding pressure steady instead of swinging between cut-in and cut-out", "It eliminates the need for a minimum head pressure", "It also stages the compressors"],
        answer: 1,
        explanation: "Correct (b): Modulation replaces the band with a line, and TXVs feed steadily as a result. (a) Speed drives are thoroughly electrical. (c) The minimum exists because valves and defrost need it — no fan strategy repeals that. (d) Staging is the rack controller's suction-side job."
      },
      {
        module: 7,
        q: "Wind across an idle rooftop condenser in January can defeat fan cycling because:",
        choices: ["Wind removes the refrigerant charge", "Wind-driven airflow rejects heat almost like a running fan, so pressure keeps falling even with fans off", "Wind reverses fan motors", "Wind freezes the TXV"],
        answer: 1,
        explanation: "Correct (b): Heat rejection only cares that air moves; the weather can move it for free, past the control's intentions — hence baffles. (a) Wind cannot extract refrigerant from a sealed system. (c) Idle fans may spin in wind, but motor reversal is not the mechanism of overcooling. (d) The TXV is indoors at the case, well away from the rooftop wind."
      },
      {
        module: 8,
        q: "A commercial refrigeration rack's full charge is 1,200 lb. Additions over 12 months total 300 lb. The leak rate and duty:",
        choices: ["25% — above the 20% commercial trigger; repair within 30 days of discovery with verification tests", "25% — below the trigger; no duty", "4% — no duty", "300% — report only"],
        answer: 0,
        explanation: "Correct (a): 300 ÷ 1,200 = 25%, exceeding the 20% commercial refrigeration trigger; the 30-day repair duty with initial and follow-up verification follows. (b) misreads the comparison. (c) inverts the arithmetic (1,200 ÷ 300 is not a leak rate). (d) confuses pounds with percent; the 125%-of-charge report threshold is a separate test this system has not hit."
      },
      {
        module: 8,
        q: "Which appliance is NOT in the leak-repair program's covered population as taught in this course?",
        choices: ["A 900-lb supermarket rack with ozone-depleting refrigerant", "A 60-lb comfort-cooling appliance with ozone-depleting refrigerant", "A 30-lb walk-in condensing unit", "A 2,000-lb industrial process system"],
        answer: 2,
        explanation: "Correct (c): Coverage starts at a full charge of 50 lb; the 30-lb unit still lives under the venting ban, recovery, and certification rules, but not the leak-rate repair program. (a), (b), and (d) are all at or above 50 lb in named covered sectors."
      },
      {
        module: 8,
        q: "After a covered repair, refrigerant is charged back and the crew leaves, planning the initial verification 'when someone is back that way.' The compliance error:",
        choices: ["None — timing is flexible", "Initial verification belongs before the recharge; the follow-up then falls due within 10 days under operating conditions", "Verification is the customer's job entirely", "Only one verification exists in the rule"],
        answer: 1,
        explanation: "Correct (b): The sequence is defined — verify the repair, then charge, then verify again in service within 10 days. (a) The deadlines are the substance of the rule, not scheduling suggestions. (c) Duties rest on owner/operator and the servicing organization together; 'the customer will check it' is not a verification method. (d) There are two distinct verification tests."
      },
      {
        module: 8,
        q: "A low-pressure chiller shows rising purge-unit run time over a season. The interpretation taught in this course:",
        choices: ["The purge unit is oversized", "Air is leaking inward through vacuum-side leaks faster than before; the purge is reporting the leak", "The chiller is overcharged", "Purge run time is meaningless"],
        answer: 1,
        explanation: "Correct (b): On Type III equipment, leaks run inward; the purge unit's workload is the leak gauge. (a) Sizing does not drift with seasons. (c) Overcharge does not feed a purge unit air. (d) On the contrary — purge behavior is one of the few honest instruments a low-pressure machine offers."
      },
      {
        module: 9,
        q: "An evacuation ends at 380 microns. Isolated, the gauge climbs to 2,300 microns and stalls there for an hour. The system is:",
        choices: ["Tight and dry — charge it", "Leaking to atmosphere", "Wet — moisture is boiling off; continue evacuation with nitrogen sweep/triple-evacuation technique", "Over-evacuated"],
        answer: 2,
        explanation: "Correct (c): A plateau is water vapor pressure asserting itself — the signature of moisture, cured by more and smarter evacuation. (a) A tight dry system levels off low, in the hundreds. (b) A leak climbs without stalling, toward atmosphere. (d) There is no such condition; deeper vacuum cannot harm a system built for pressure."
      },
      {
        module: 9,
        q: "R-404A head pressure is about 198 psig (≈100°F bubble point) and the liquid line reads 100°F. Subcooling and meaning:",
        choices: ["0°F — no liquid reserve at the TXV; consistent with undercharge or a flashing liquid line", "2°F — normal", "100°F — excellent", "Negative — impossible to interpret"],
        answer: 0,
        explanation: "Correct (a): 100 − 100 = 0°F subcooling: the liquid arrives at saturation, ready to flash at any pressure drop. (b) invents a margin the arithmetic denies. (c) confuses the line temperature with the difference. (d) The reading is perfectly interpretable — it is a warning."
      },
      {
        module: 9,
        q: "Why remove Schrader cores during a long commercial evacuation?",
        choices: ["They leak by design", "The core is a severe flow restriction; removing it lets the far end of a big system actually reach deep vacuum", "To add refrigerant faster later", "Cores melt under vacuum"],
        answer: 1,
        explanation: "Correct (b): Full-bore ports through core-removal tools are how large piping volumes get evacuated in reasonable time, with valved isolation preserved for the decay test. (a) Cores seal serviceably in normal use; restriction, not leakage, is the issue. (c) Charging speed is not the purpose, and cores are reinstalled before service ends. (d) Cores are metal and elastomer rated for the system; vacuum does not melt them."
      },
      {
        module: 9,
        q: "A tech charges a receiver system until the sight glass is 'clear and happy' on a cool morning, adding well past the specified weight. The risk created:",
        choices: ["None — a clear glass is always correct", "Hidden overcharge parked in the receiver, returning as high head pressure and energy waste in warm weather; weight/spec plus subcooling is the method", "The glass will crack from clarity", "The TXV will freeze shut permanently"],
        answer: 1,
        explanation: "Correct (b): The glass cannot count pounds; the receiver hides the excess until conditions expose it. (a) The glass is a clue, not a verdict — it also bubbles for restrictions and flashing with correct charge. (c) Clarity is not a mechanical stress. (d) TXVs respond to conditions; they do not take permanent offense."
      },
      {
        module: 10,
        q: "A detector sweep brackets a leak to one corner of a unit cooler. To pinpoint the exact hole you reach for:",
        choices: ["A bigger detector", "Bubble solution on the pressurized joints in that corner", "The UV lamp with no dye installed", "A stethoscope"],
        answer: 1,
        explanation: "Correct (b): Bubbles grow at the hole itself — the pinpointing step after bracketing. (a) Sensitivity is not localization. (c) A lamp without dye reads nothing. (d) Ears find gross leaks; this one is already bracketed as small."
      },
      {
        module: 10,
        q: "The system loses charge in days and you can faintly hear hissing near the condensing unit. The fastest honest path:",
        choices: ["Install dye and return in a month", "Follow ears and eyes (oil, damage) to the gross leak now; detectors and bubbles confirm and pinpoint", "Top off weekly until it worsens", "Evacuate and hope the decay test names the part"],
        answer: 1,
        explanation: "Correct (b): Gross leaks announce themselves; use the loud evidence first and confirm with bubbles. (a) Dye's delay is for seeps, not geysers. (c) Feeding a days-scale leak is the callback pattern — and a compliance problem on covered systems. (d) A decay test proves a leak exists; it does not locate it."
      },
      {
        module: 10,
        q: "Before nitrogen pressure testing a section, the required preparations include:",
        choices: ["Add extra oil to seal joints", "Recover the section's refrigerant, confirm the lowest pressure rating in the section, and rig the nitrogen through a regulator", "Remove all relief devices", "Charge the section with oxygen to find leaks faster"],
        answer: 1,
        explanation: "Correct (b): Recovery first, ratings respected, regulated gas — the whole safety grammar of pressure testing. (a) Oil does not seal joints and contaminates the test. (c) Relief devices are protection, never removed for a test. (d) Oxygen under pressure with oil is an explosion hazard, absolutely prohibited."
      },
      {
        module: 10,
        q: "Oil residue coats one flare nut on an otherwise clean system. The professional reading:",
        choices: ["Normal — all flares weep oil", "Prime suspect: oil escapes with refrigerant, so clean it, mark it, and test that joint first", "Proof of overcharge", "Ignore it; oil is not refrigerant"],
        answer: 1,
        explanation: "Correct (b): Oil staining is the system drawing you a map; verify by cleaning and watching it return, and by a bubble test under pressure. (a) Healthy flares are dry. (c) Overcharge raises pressures; it does not paint one joint. (d) The oil's presence is the clue — its chemistry is not the point."
      },
      {
        module: 11,
        q: "An R-404A cooler runs warm. Evaporator suction is about 66 psig (dew ≈ 40°F) with the suction line at 72°F, and subcooling measures about 14°F. The pattern best fits:",
        choices: ["Undercharge", "A starved coil from a restriction or underfeeding TXV — subcooling preserved says liquid exists but is not getting through", "Floodback", "A dirty condenser"],
        answer: 1,
        explanation: "Correct (b): Superheat is 72 − 40 = 32°F (starving coil) while 14°F of subcooling proves liquid is stacked up behind something. (a) Undercharge pairs high superheat with low subcooling — the pantry is empty, not blocked. (c) Floodback shows near-zero superheat. (d) A dirty condenser raises head pressure and hurts capacity, but does not create this starved-coil/stable-subcooling pair by itself."
      },
      {
        module: 11,
        q: "A compressor short-cycles on its low-pressure control every two minutes. Differential is at factory setting. Superheat is very high and the refrigerant log shows repeated additions. The root cause to hunt:",
        choices: ["The control itself", "A refrigerant leak leaving too little charge to sustain a run", "The thermostat's batteries", "Oversized evaporator fans"],
        answer: 1,
        explanation: "Correct (b): The control is reporting an empty system rhythmically; the log and superheat corroborate. (a) The messenger theory fails the evidence — pressures and history explain the rhythm. (c) The control in question is pressure, not the stat. (d) Fans affect coil load, not this pressure-collapse pattern with documented charge loss."
      },
      {
        module: 11,
        q: "Product in a failed walk-in probes at 47°F after an unknown number of warm hours; the owner begs you to keep the repair quiet and the food in place. Your professional course:",
        choices: ["Agree — the customer owns the food", "State the 41°F standard and the risk plainly, recommend conservative product disposition, document temperatures and times, and repair the system", "Refuse to repair until police are called", "Cool the food back down quickly and say nothing"],
        answer: 1,
        explanation: "Correct (b): Your duty runs to safety and honest documentation; disposition is the owner's decision, made with your clear information on the record. (a) Ownership does not transfer your professional responsibility to inform. (c) Law enforcement is not the mechanism; health authorities and documentation are. (d) Re-cooling does not rewind bacterial growth, and silence falsifies the record."
      },
      {
        module: 12,
        q: "A PM visit finds condenser head pressure 30 psi above the same store's baseline at similar weather, with run-times up. The first physical act:",
        choices: ["Recover 10% of the charge", "Inspect and clean the condenser coil — fouling is the trend-shaped suspect; re-measure after cleaning", "Replace the rack controller", "Add a condenser fan"],
        answer: 1,
        explanation: "Correct (b): Gradual head-pressure creep at matched conditions is fouling until proven otherwise; cleaning is both test and cure. (a) Charge removal treats a guess as a measurement and creates tomorrow's undercharge. (c) The controller is reporting conditions, not causing them. (d) More fan treats the number on the gauge while the coil keeps its blanket."
      },
      {
        module: 12,
        q: "Which PM finding is a food-safety priority rather than an efficiency item?",
        choices: ["Incandescent case lamps", "A torn walk-in gasket with product riding at 40.5°F and climbing on delivery days", "Setpoint 1°F colder than spec", "A missing night cover"],
        answer: 1,
        explanation: "Correct (b): A failed seal with product at the edge of the 41°F standard is one busy day from a disposition event — it outranks every efficiency line. (a), (c), and (d) all cost money continuously and belong on the list — in the efficiency section, below the item that can cost the inventory."
      },
      {
        module: 12,
        q: "The strongest argument that PM is diagnostic, not janitorial, is:",
        choices: ["It uses more chemicals", "Trended readings — temperatures, pressures, run-times, leak calculations — reveal deterioration between visits before it becomes failure", "It takes longer than repairs", "Customers cannot do it themselves"],
        answer: 1,
        explanation: "Correct (b): The file of comparable measurements is an early-warning instrument no single visit can replicate. (a) Chemistry is incidental. (c) Duration is a cost, not a virtue. (d) Customer capability is irrelevant to the information argument."
      }
    ]
  }
};
