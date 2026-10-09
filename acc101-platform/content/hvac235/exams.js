// HVAC 235 — Midterm and Final exams.
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
        q: "A condensing furnace rated 120,000 Btu/h input at 95% AFUE delivers how much heat?",
        choices: ["120,000 Btu/h", "114,000 Btu/h", "95,000 Btu/h", "6,000 Btu/h"],
        answer: 1,
        explanation: "Correct (b): Output = input × AFUE = 120,000 × 0.95 = 114,000 Btu/h. (a) is the input — no furnace delivers all its fuel energy. (c) confuses the AFUE percentage with an output figure. (d) is the loss (120,000 − 114,000), not the delivery."
      },
      {
        module: 1,
        q: "On a condensing furnace, condensate backing up into the collector box will most likely announce itself as:",
        choices: ["A flame-proving failure", "Gurgling plus pressure-switch lockouts", "A high-limit trip in the first minute", "A failed thermostat battery"],
        answer: 1,
        explanation: "Correct (b): Water standing where the inducer must move air strangles draft — the pressure switch refuses to prove, and the water makes itself heard. (a) Flame proving happens downstream, after draft is proven; the sequence never gets there. (c) Limit trips are an airflow/temperature-rise story on a running furnace. (d) The thermostat can call perfectly while the furnace drowns."
      },
      {
        module: 1,
        q: "Why does a two-pipe condensing furnace resist backdrafting better than a single-pipe unit in the same house?",
        choices: ["Its blower is stronger", "Its combustion air is piped from outdoors, sealed from house pressure changes", "Its vent pipe is larger", "It has two pressure switches"],
        answer: 1,
        explanation: "Correct (b): Sealed combustion isolates the burner from indoor depressurization entirely. (a) Blower strength moves room air, not combustion air. (c) Vent diameter follows the vent table, not backdraft immunity. (d) Extra switches monitor draft; they don't change where combustion air comes from."
      },
      {
        module: 2,
        q: "A two-stage furnace's thermostat is configured as single-stage and its board staging timer is set very short. The predictable result is:",
        choices: ["The furnace never lights", "Nearly every call jumps quickly to high fire, erasing low fire's long, gentle cycles", "The furnace runs only on low fire forever", "The inducer runs backwards"],
        answer: 1,
        explanation: "Correct (b): With no thermostat staging, the timer owns the decision — and a short timer is a standing order to use high fire. (a) The furnace heats; it just heats crudely. (c) describes a too-long timer or a W2 fault, the opposite setting error. (d) Inducers don't reverse from a staging configuration."
      },
      {
        module: 2,
        q: "A furnace delivers 57,600 Btu/h on low fire with airflow of 800 CFM. Its temperature rise is:",
        choices: ["50°F", "67°F", "72°F", "85°F"],
        answer: 1,
        explanation: "Correct (b): ΔT = 57,600 ÷ (1.08 × 800) = 57,600 ÷ 864 ≈ 67°F. (a) results from using roughly 1,067 CFM. (c) is output ÷ CFM × 1.0 without the constant inverted correctly — always ΔT = Output ÷ (1.08 × CFM). (d) would require only ~628 CFM — the rise of a starved-airflow fault."
      },
      {
        module: 2,
        q: "Which statement about constant-airflow ECM blowers is TRUE?",
        choices: ["They let airflow fall as filters load, like a PSC motor", "They hold programmed CFM against rising resistance by speeding up — masking duct/filter problems while watt draw climbs", "They cannot be damaged by high static pressure", "They need no programming for a specific unit"],
        answer: 1,
        explanation: "Correct (b): Compensation is their defining behavior — and their diagnostic trap. (a) describes constant-torque behavior. (c) Sustained compensation overheats and wears the module; high static absolutely harms them. (d) The module carries the unit-specific airflow program; wrong program, wrong airflow."
      },
      {
        module: 3,
        q: "A vent table allows 45 equivalent feet. A run measures 22 ft of pipe with 5 elbows charged at 5 ft each. Verdict?",
        choices: ["Legal — 47 equivalent feet is close enough", "Illegal — 22 + 25 = 47 equivalent feet exceeds the 45-ft allowance", "Legal — elbows don't count on the exhaust side", "Illegal because it uses more than 4 elbows regardless of length"],
        answer: 1,
        explanation: "Correct (b): Equivalent length counts pipe plus fittings: 22 + (5 × 5) = 47 > 45. 'Close' is over. (a) treats the table as advisory; it is a listing limit tied to the inducer's proving ability. (c) Elbows count on both pipes of a two-pipe system. (d) There is no raw elbow-count rule — the budget is in equivalent feet."
      },
      {
        module: 3,
        q: "The single most common reason a correctly sized condensing vent develops a water problem years after install is:",
        choices: ["PVC slowly dissolves in condensate", "Support failure lets the run sag into a belly that traps condensate, because the slope wasn't maintained", "The vent table changes over time", "Condensate learns new paths"],
        answer: 1,
        explanation: "Correct (b): Slope is a maintained condition, not an install-day fact; strap spacing decides whether year five's vent still drains. (a) Listed vent materials are chosen for condensate resistance. (c) The table is fixed at manufacture. (d) Water obeys slope and gravity only — which is the whole point."
      },
      {
        module: 3,
        q: "A concentric vent kit installed with its inner exhaust pipe not fully seated into the termination will most likely cause:",
        choices: ["Excess draft", "Exhaust recirculation into the intake annulus — poor combustion with normal-seeming draft", "A louder inducer", "Frozen condensate in the trap"],
        answer: 1,
        explanation: "Correct (b): The kit's one job is stream separation at a shared fitting; a seating error short-circuits exhaust into the air supply, degrading flame quality while volumes — and proving — can stay normal. (a) Recirculation doesn't add draft. (c) Noise is not the signature. (d) Trap freezing follows drain routing through cold space."
      },
      {
        module: 4,
        q: "Your manometer reads 0.52 in. w.c. at a pressure switch rated 0.45 in. w.c., and the switch remains open. The evidence says:",
        choices: ["The draft is insufficient", "The switch has failed — it is offered more than its closing pressure and won't close", "The vent is over the table length", "The manometer needs a new battery"],
        answer: 1,
        explanation: "Correct (b): Measured > rating + open switch = failed switch, assuming sound hose/port (verified in the procedure). (a) is the verdict for measured BELOW rating — the opposite of this reading. (c) A long vent manifests as low measured draft. (d) Instrument doubt is resolved by checking the instrument, not by reversing the diagnosis."
      },
      {
        module: 4,
        q: "A furnace on its third high-limit switch in two years still trips the limit weekly. Rise measures 76°F against a 65°F plate maximum. The correct next move is:",
        choices: ["Install a fourth limit with a higher setpoint", "Hunt the airflow deficit (filter, ducts, coil, blower) or overfire — the limit is reporting an overheating exchanger, and a higher-setpoint limit would cook it silently", "Replace the gas valve preventively", "Accept weekly trips as normal for older units"],
        answer: 1,
        explanation: "Correct (b): Rise above the plate range is the measurement of the disease; the limit is the thermometer. Raising the setpoint (a) removes the last protection while the cause continues — exchanger damage follows. (c) The gas valve is a suspect only via manifold-pressure measurement, which comes after the airflow hunt in the standard order. (d) Chronic limit trips are never a personality trait; they are a countdown."
      },
      {
        module: 4,
        q: "Flames burn clean and blue, but the furnace loses flame signal and shuts down a few seconds after ignition, repeatedly. The order of suspicion is:",
        choices: ["Pressure switch first — always", "Flame-proving circuit: flame sensor condition/coating, grounding, and board sensing — a rectification problem, not a draft problem", "The vent termination", "The expansion tank"],
        answer: 1,
        explanation: "Correct (b): Ignition succeeded and flame exists; the failure is in proving it — sensor, ground path, board input. (a) The pressure switch already proved for ignition to occur. (c) Venting faults stop the sequence earlier, at proving. (d) Furnaces don't have expansion tanks — that's hydronics (Module 5)."
      },
      {
        module: 5,
        q: "A boiler zone delivers water at 170°F supply and 150°F return, flowing 7 GPM. The zone's delivered heat is:",
        choices: ["49,000 Btu/h", "70,000 Btu/h", "119,000 Btu/h", "35,000 Btu/h"],
        answer: 1,
        explanation: "Correct (b): ΔT = 20°F; 500 × 7 × 20 = 70,000 Btu/h. (a) uses ΔT 14 — an arithmetic slip. (c) multiplies by supply temperature instead of ΔT — the classic 500-formula error. (d) uses 250 instead of 500, halving the constant."
      },
      {
        module: 5,
        q: "A homeowner's boiler short-cycles: 3-minute burns, long off-times, on a 40°F day. The plant is a 150,000 Btu/h boiler on a house with a 62,000 Btu/h heat loss. The core problem is:",
        choices: ["The thermostat's location", "Gross oversizing — the boiler satisfies its aquastat almost immediately against a mild-day fraction of an already oversized rating", "The expansion tank's paint color", "Too much outdoor reset"],
        answer: 1,
        explanation: "Correct (b): At 40°F the load is roughly half of design (~31,000) against 150,000 of boiler — a 5:1 mismatch that no control setting fully civilizes. (a) Thermostat placement causes short calls, not 3-minute burner satisfaction of the aquastat. (c) Paint is not a thermodynamic variable. (d) Reset reduces cycling severity; it doesn't create a 5:1 oversize."
      },
      {
        module: 5,
        q: "On a zone-valve system, one zone's thermostat calls, the valve motor runs and the valve opens (pipe heats), but the boiler never fires and the circulator never starts. The failed component is the:",
        choices: ["Circulator", "Zone valve's end switch", "Aquastat's sensor well", "Fill valve"],
        answer: 1,
        explanation: "Correct (b): The end switch is the hand-off that tells the boiler control a zone is truly open; without it, demand dies at the valve. (a) The circulator was never signaled — silence here is obedience, not failure. (c) A bad aquastat sensor would misread boiler temperature, not selectively ignore one zone's proven call. (d) The fill valve governs static pressure, unrelated to the control chain."
      },
      {
        module: 6,
        q: "A radiant floor zone must deliver 20,000 Btu/h at a design ΔT of 10°F. Total loop flow required is:",
        choices: ["2 GPM", "4 GPM", "10 GPM", "40 GPM"],
        answer: 1,
        explanation: "Correct (b): GPM = 20,000 ÷ (500 × 10) = 4 GPM. (a) halves the answer by using ΔT 20. (c) uses ΔT 4 — a units slip. (d) divides by ΔT alone (500 forgotten) — the formula's constant carries water's properties and cannot be dropped."
      },
      {
        module: 6,
        q: "Staple-up radiant without transfer plates requires much hotter water than the same system with plates because:",
        choices: ["Plates contain the heating elements", "Without plates the tube touches the subfloor along a thin line — tiny coupled area demands a large temperature difference to move the same heat", "Code requires hotter water for unplated systems", "Plates insulate the joist space"],
        answer: 1,
        explanation: "Correct (b): Output = area × ΔT effect; plates manufacture area. (a) Plates are passive aluminum spreaders — no elements. (c) No such code rule; the physics sets the temperature. (d) Plates conduct heat upward into the floor — the opposite of insulating it away."
      },
      {
        module: 1,
        q: "The acidic nature of furnace condensate dictates which design feature?",
        choices: ["A taller vent termination", "Corrosion-resistant materials throughout the condensate path — stainless secondary exchanger, plastic vent and drain components — plus neutralization where required", "A larger gas orifice", "Annual chimney sweeping"],
        answer: 1,
        explanation: "Correct (b): Dissolved CO₂ makes the condensate mildly acidic; everything it touches must be chosen for it. (a) Termination height serves clearances and snow, not chemistry. (c) Orifices meter gas; condensate never reaches them. (d) A condensing furnace doesn't use the masonry chimney at all."
      },
      {
        module: 2,
        q: "During commissioning of a modulating furnace, manifold pressure should be verified:",
        choices: ["Once, at whatever firing rate happens to occur", "In the manufacturer's test mode at defined firing rates (low and high), because pressure varies with rate by design", "Only at high fire — low fire cannot be measured", "By adjusting it to 3.5 in. w.c. at all rates"],
        answer: 1,
        explanation: "Correct (b): A modulating valve is a throttle; single-point checks against single-stage expectations misdiagnose health as failure. (a) A random mid-rate reading has no benchmark to judge against. (c) Low fire is measurable and is where proving is most fragile. (d) Forcing one pressure at all rates would overfire low rates — the exact error the test mode prevents."
      },
      {
        module: 3,
        q: "Wind-correlated pressure-switch lockouts, with the furnace testing clean on calm days, direct your attention to:",
        choices: ["The thermostat's wind sensor", "Termination placement in an adverse wind-pressure zone, or intake/exhaust interaction the wind exploits", "The gas meter's regulator vent", "Replacing the inducer with a larger one"],
        answer: 1,
        explanation: "Correct (b): Weather-locked faults live at the building's skin — the termination sees pressures the appliance room never does. (a) Thermostats have no wind input. (c) The meter regulator doesn't modulate with gusts in a way that mimics draft loss at the switch. (d) A bigger inducer fights the symptom, voids the listing's vent design, and still loses to a bad termination location."
      },
      {
        module: 4,
        q: "You disconnect the vent at the furnace and, running the inducer briefly, draft at the switch jumps from 0.35 to 0.95 in. w.c. (rating 0.60). Conclusion:",
        choices: ["The inducer is weak", "The restriction is in the vent run or termination — the appliance side just proved it can make healthy draft", "The pressure switch is faulty", "The heat exchanger is plugged"],
        answer: 1,
        explanation: "Correct (b): Segment isolation: draft recovers when the vent is removed from the path, so the vent side owns the resistance. (a) and (d) are appliance-side faults — both just acquitted by the same test. (c) The switch never got its 0.60 in the connected state; with the vent off it would now close — it was reporting honestly all along."
      },
      {
        module: 5,
        q: "Outdoor reset on a cast-iron (non-condensing) boiler must include a minimum boiler temperature because:",
        choices: ["Cast iron rusts from the outside in winter air", "Sustained cool return water would condense flue gas inside a boiler not built to be wet, corroding its sections", "The circulator needs hot water to lubricate", "Reset curves are illegal without it"],
        answer: 1,
        explanation: "Correct (b): Boiler protection is about flue-gas condensation inside a dry-designed appliance — the mirror image of the condensing furnace, which is built wet on purpose. (a) External rust is a damp-basement housekeeping matter. (c) Circulators are water-lubricated at any system temperature. (d) The floor is an engineering requirement implemented in the control, not a statute about curves."
      },
      {
        module: 6,
        q: "A snowmelt system enabled only after 4 inches have accumulated 'never catches up' primarily because:",
        choices: ["Snow insulates the tubing from the boiler", "Snowmelt is sized to keep pace with falling snow on a warmed slab, not to melt an accumulated, insulating pack off a cold slab whose mass must first be heated", "Glycol stops working under snow load", "The slab sensor melts"],
        answer: 1,
        explanation: "Correct (b): Capacity math assumes maintenance of a clear slab, and the cold slab's thermal mass eats the first hours of output. (a) inverts the geometry — snow insulates the slab surface from the sky's cold, but the deficit is about accumulated mass and melt load, not tube insulation. (c) Glycol performs the same buried or bare. (d) Sensors report; they don't melt."
      },
      {
        module: 1,
        q: "Which maintenance task is unique to condensing furnaces (not needed on an 80% furnace)?",
        choices: ["Filter replacement", "Condensate trap/drain inspection and cleaning, and neutralizer media checks where fitted", "Flame sensor cleaning", "Belt adjustment"],
        answer: 1,
        explanation: "Correct (b): The condensate system exists only because the furnace condenses — it is the highest-value addition to the maintenance list. (a) and (c) are shared tasks across furnace classes. (d) Modern furnaces use direct-drive blowers; belts belong to older equipment generally, not to the condensing distinction."
      },
      {
        module: 4,
        q: "The customer's furnace runs fine all evening but is locked out every morning, and the inducer area smells of standing water. In order, you check:",
        choices: ["Gas pressure, then igniter", "Trap prime and drain slope/freezing first — overnight cold + stillness lets a marginal drain freeze or a dry trap misbehave at the first morning call", "The thermostat schedule", "The neighbor's furnace for interference"],
        answer: 1,
        explanation: "Correct (b): Overnight-pattern faults on condensing gear are water-and-temperature stories until proven otherwise; the water smell is the confession. (a) Gas and ignition faults don't keep office hours. (c) A schedule explains no-heat, not lockouts with water evidence. (d) There is no cross-furnace interference mechanism to check."
      }
    ]
  },
  final: {
    title: "Final Exam",
    minutes: 120,
    coverage: "Modules 1–12",
    questions: [
      {
        module: 7,
        q: "A heat pump delivers 22,000 Btu/h while drawing 2,200 W. Its COP is:",
        choices: ["2.0", "2.93", "4.1", "10.0"],
        answer: 1,
        explanation: "Correct (b): Input = 2,200 × 3.412 = 7,506 Btu/h; COP = 22,000 ÷ 7,506 ≈ 2.93. (a) would need an input of 11,000 Btu/h (≈3,224 W). (c) would need only ~1,573 W at this output. (d) skips the watt-to-Btu conversion — output ÷ watts raw, the classic COP trap."
      },
      {
        module: 7,
        q: "A house's load slope is 750 Btu/h per °F (balance temperature 65°F). At 20°F outdoors, the load is:",
        choices: ["15,000 Btu/h", "33,750 Btu/h", "48,750 Btu/h", "750 Btu/h"],
        answer: 1,
        explanation: "Correct (b): Load = 750 × (65 − 20) = 750 × 45 = 33,750 Btu/h. (a) uses a 20° difference instead of 45. (c) multiplies the slope by 65 without subtracting outdoor temperature. (d) is the slope itself, not a load."
      },
      {
        module: 7,
        q: "Below the thermal balance point, correctly sized auxiliary heat covers:",
        choices: ["The full design load by itself", "The gap between load and heat pump capacity at each temperature — growing as it gets colder", "A flat 10 kW regardless of conditions", "Only defrost losses"],
        answer: 1,
        explanation: "Correct (b): The compressor keeps contributing everything it has; aux fills a widening difference. (a) Full-load aux is the emergency-heat sizing question — a separate, deliberate decision (often yes for backup), not the definition of supplementary duty. (c) The gap varies with temperature; a flat guess ignores the two lines. (d) Defrost is a capacity tax inside the calculation, not the aux's whole job."
      },
      {
        module: 8,
        q: "On a dual-fuel system, the outdoor sensor reads 48°F on a verified 30°F morning (sensor failed high). Predictable behavior:",
        choices: ["The furnace runs everything, correctly", "The control believes it's mild: the heat pump is called in weather the settings intended for the furnace — comfort and cost suffer, and aux/furnace lockout logic follows the false reading", "Nothing changes; sensors are advisory", "The compressor locks out permanently"],
        answer: 1,
        explanation: "Correct (b): The control obeys its sensor absolutely; a lying sensor relocates the changeover in reality while the setting on screen looks right. (a) The opposite would follow from a sensor failed LOW. (c) The sensor is the control's only weather knowledge — decisive, not advisory. (d) Lockout follows temperature logic, not permanence; repair restores normal behavior."
      },
      {
        module: 8,
        q: "Which is the ONLY acceptable overlap of furnace operation with the outdoor unit's cycle in dual fuel?",
        choices: ["Both heating together during morning recovery", "Furnace tempering during heat pump defrost, when the refrigeration cycle is reversed (cooling direction)", "Both heating together below 0°F", "Overlap during the first minute of any call"],
        answer: 1,
        explanation: "Correct (b): Defrost tempering pairs the furnace with a reversed, cooling-direction cycle — the coil is cold, so the pressure-runaway mechanism of simultaneous heating cannot occur. (a), (c), and (d) all describe heating-mode overlap, which drives discharge pressure to cutout and spends compressor life — forbidden at every temperature and every duration."
      },
      {
        module: 9,
        q: "A customer with severe dust-mite and pollen allergies has a 1-inch filter rack and a blower already at its static limit. The professional recommendation is:",
        choices: ["The densest 1-inch filter available", "A mid-MERV filter the airflow can afford now, plus a deep-media cabinet quote to reach high MERV at low pressure drop — verified by static/rise after install", "Two 1-inch filters stacked for double filtration", "Removing the filter to maximize airflow"],
        answer: 1,
        explanation: "Correct (b): Filtration is specified as MERV and pressure drop together; area is the way to have both. (a) puts the system over its static limit — limit trips and coil freeze follow. (c) Stacked filters multiply restriction, not rated capture. (d) trades the equipment's protection and the allergy goal away entirely."
      },
      {
        module: 9,
        q: "For a humid-climate home whose summer problem is indoor humidity, the ERV helps because it:",
        choices: ["Dehumidifies by refrigeration", "Transfers incoming air's moisture toward the exhaust stream, cutting the latent load the air conditioner must remove", "Adds moisture to dry summer air", "Lowers the dew point of the ductwork"],
        answer: 1,
        explanation: "Correct (b): The permeable core lets water vapor migrate to the drier stream — in summer that's the exhaust. (a) An ERV has no refrigeration cycle; it exchanges, it doesn't condense. (c) Summer operation rejects moisture — the reverse claim fits winter. (d) Duct dew point is managed by insulation and air temperatures, not by the ventilator core."
      },
      {
        module: 10,
        q: "During a routine tune-up your personal CO monitor alarms in the mechanical room. Your sequence is:",
        choices: ["Finish the tune-up quickly, then mention it", "Stop work, get everyone (including yourself) out, call responders from outside, and diagnose only after the scene is cleared", "Open the mechanical room door and continue with the door open", "Silence the monitor — tune-ups often trip them"],
        answer: 1,
        explanation: "Correct (b): Module 10's protocol has no technician exception. (a) gambles your own exposure against a work order. (c) Dilution is not control of an unknown source, and the rest of the house shares the air. (d) The monitor alarming IS the finding; silencing it manufactures the 'no warning' condition CO kills by."
      },
      {
        module: 10,
        q: "Which statement about residential CO alarms is TRUE?",
        choices: ["If one never alarms, the appliances are certified clean", "They are exposure warners built to a listing — they complement, and never replace, instrument testing of appliances (analyzer readings, ambient surveys)", "They detect CO only at the ceiling because CO sinks", "They last the life of the house once installed"],
        answer: 1,
        explanation: "Correct (b): Alarms and instruments answer different questions — 'is exposure dangerous now?' vs. 'what is this appliance producing and spilling?' (a) converts silence into a certificate; intermittent spillage and dead sensors both falsify it. (c) CO mixes with air (near-identical density); placement follows the manufacturer's instructions for the model. (d) Sensors expire — end-of-life replacement is part of the device."
      },
      {
        module: 11,
        q: "Replacing a 65% AFUE legacy furnace with a 96% model saves approximately what share of heating fuel?",
        choices: ["31% — computed as 96 − 65", "About 32% (1 − 0.65/0.96 = 0.323)", "65%", "96%"],
        answer: 1,
        explanation: "Correct (b): Savings = 1 − (old ÷ new) = 1 − 0.677 = 32.3% of heating fuel. (a) gets a similar-looking number by a wrong route — subtracting AFUE points — which fails for other pairs (80→96 would 'save 16' by luck of arithmetic, 92→96 would claim 4, near the right 4.2 by coincidence). Use the ratio; it is the physics. (c) and (d) recite ratings as savings."
      },
      {
        module: 11,
        q: "The load calculation for a replacement should be based on:",
        choices: ["The old furnace's nameplate", "The house as it stands today — current insulation, windows, additions — so delivered output (input × AFUE) can be matched to today's load", "The largest model the duct can physically hold", "The neighbor's identical-looking house"],
        answer: 1,
        explanation: "Correct (b): Replacement is the recalculation moment; decades of envelope work shrink loads that copying would keep oversized. (a) is the inherited-oversizing error itself. (c) Duct capacity constrains selection but doesn't define need. (d) No two houses share a load by resemblance — orientation, leakage, and history differ."
      },
      {
        module: 12,
        q: "A condensing furnace locks out only after hours of continuous running on the coldest nights, and the drain line runs through a freezing crawlspace. Your first designed test is:",
        choices: ["Replace the board", "A continuous-run test: force sustained operation while watching drain flow/trap level and logging draft at the switch — reproducing the run-length condition that produces the fault", "A single short cycle to confirm it lights", "Wait for the next cold snap and hope to be nearby"],
        answer: 1,
        explanation: "Correct (b): The fault is conditional on accumulated run time and cold — manufacture both. A short cycle (c) tests a condition in which the fault cannot exist. (a) is parts-first guessing. (d) surrenders the schedule to weather; the continuous run exists precisely so you don't have to."
      },
      {
        module: 12,
        q: "In an integrated dual-fuel home, the electric bill doubles and the heat pump 'runs constantly,' but the root cause is the furnace's restricted return air tripping its limit. The general principle is:",
        choices: ["Heat pumps cause high bills", "Systems report distress at the compensating component — audit the partnership (sequence, rise, fault history) before condemning the machine named in the complaint", "Customers always misreport", "Dual fuel should be removed whenever bills rise"],
        answer: 1,
        explanation: "Correct (b): The control's fallback behavior made the healthy partner look guilty; measurements on the silent partner convicted the true fault. (a) is the customer's hypothesis, refuted by the rise measurement. (c) The customer's report was accurate — the interpretation was the work. (d) Removal punishes a configuration for a duct defect."
      },
      {
        module: 1,
        q: "A 96% furnace's vent termination is found frosted nearly shut after a cold, humid night. The furnace is locked out on its pressure switch. The correct characterization is:",
        choices: ["A failed pressure switch", "The safety chain working as designed: the switch detected a genuinely restricted vent and refused to let the furnace fire into it — clear/repair the termination condition and verify draft", "A defective inducer", "Proof the furnace should be replaced"],
        answer: 1,
        explanation: "Correct (b): Module 3's frost closure + Module 4's verdict logic. The measured draft (once tested) will be below rating with the termination blocked and healthy with it clear. (a) and (c) blame the reporters and movers for a blockage at the building's skin. (d) Replacement doesn't move a termination above the frost/snow problem that caused this."
      },
      {
        module: 2,
        q: "A communicating modulating furnace is paired with a basic single-stage thermostat 'to save money.' The system will:",
        choices: ["Modulate fully anyway", "Fall back to staged/timer behavior — heat works, but the load-following modulation the customer paid for is largely surrendered", "Fail to light until the thermostat is replaced", "Damage the modulating valve"],
        answer: 1,
        explanation: "Correct (b): Modulation lives in the conversation between control and furnace; a one-bit thermostat reduces the furnace to its fallback logic. (a) The furnace cannot infer load patterns from a simple call signal. (c) Fallback operation is a designed mode, not a fault. (d) No damage mechanism — the loss is capability, not hardware."
      },
      {
        module: 3,
        q: "Which installation violates the venting rules taught in this course?",
        choices: ["A two-pipe system with both pipes counted against the vent table", "A condensing furnace common-vented into a masonry chimney shared with a natural-draft water heater", "A concentric kit from the furnace's own manufacturer", "A vent sloped ¼ in. per foot back to the furnace"],
        answer: 1,
        explanation: "Correct (b): Cool, wet, pressurized exhaust destroys masonry and can be pushed into the other appliance's vent path — prohibited and dangerous. (a), (c), and (d) are each the taught correct practice: counted lengths, listed kits, and drainage slope."
      },
      {
        module: 4,
        q: "Burners show yellow, lazy flames and the burner compartment has fresh soot. Manifold pressure is correct. Your suspicion, in order:",
        choices: ["Overfire — reduce the manifold pressure below spec", "Air-side failure: dirty/clogged burner ports, restricted intake, or recirculation starving combustion of oxygen", "A failed limit switch", "Normal break-in soot"],
        answer: 1,
        explanation: "Correct (b): With fuel pressure proven at spec, yellow flames + soot are the air leg of the ratio confessing. (a) Cutting pressure below the rating plate underfires the appliance and treats a proven-good variable as the fault. (c) The limit reads heat, it doesn't shape flames. (d) Soot is never a break-in feature — it is incomplete combustion's residue, with CO in the same story."
      },
      {
        module: 5,
        q: "A reset curve is set so aggressively low that a baseboard house is cold on design nights, though the boiler is new and correctly sized. The fix is:",
        choices: ["A bigger boiler", "Recommission the curve: raise the cold-end water temperature to what the emitters were selected for, keeping reset's shoulder-season benefit", "Remove the outdoor sensor and run 200°F always", "Add a second circulator"],
        answer: 1,
        explanation: "Correct (b): The emitters' output at low water temperature is the binding constraint; the curve must serve the design day at its cold end. (a) More boiler into the same cool water buys almost nothing. (c) Abandons reset entirely and invites the short-cycling reset exists to prevent. (d) Flow wasn't the deficit — temperature was."
      },
      {
        module: 6,
        q: "Why does a mixing valve failure stuck toward hot endanger a radiant floor more than a baseboard loop?",
        choices: ["Baseboard is immune to hot water", "The floor assembly — tubing environment, coverings, and comfort limits — is designed for low temperatures; boiler-temperature water overheats surfaces and stresses the assembly the baseboard was built to receive", "Mixing valves only exist on radiant systems", "Floors conduct heat downward only"],
        answer: 1,
        explanation: "Correct (b): Each emitter family has a design temperature; 180°F water is baseboard's native diet and the floor's emergency — hence radiant's dedicated high-limit protection. (a) Baseboard is designed for it, not immune by magic. (c) Mixing serves many duties, but the protection logic here is radiant-specific. (d) Floors lose heat both ways — insulation directs the useful share upward."
      },
      {
        module: 7,
        q: "Two heat pumps are quoted for a cold-climate home. Unit A's headline is its 47°F capacity; Unit B's literature leads with capacity at 5°F. The professional comparison is built on:",
        choices: ["Unit A's headline — bigger number wins", "Each unit's capacity at the home's design temperature, laid against the house's load line — the only comparison that predicts design-night behavior", "Brand reputation", "Whichever has the larger cabinet"],
        answer: 1,
        explanation: "Correct (b): Balance-point method or it isn't a comparison. (a) 47°F capacity is nearly irrelevant to a 5°F design climate — October data for a January question. (c) and (d) substitute marketing attributes for the load-line test both units must pass."
      },
      {
        module: 8,
        q: "A dual-fuel system switches fuels back and forth repeatedly on afternoons when the temperature hovers at the changeover point. The two fixes are:",
        choices: ["A larger furnace and a smaller heat pump", "Enable the control's changeover differential, and verify/relocate the outdoor sensor if sun or wind flicker is driving false crossings", "Disable the outdoor sensor", "Set changeover to 0°F"],
        answer: 1,
        explanation: "Correct (b): Chattering is a threshold-without-deadband problem, often amplified by an unstable sensor environment. (a) Equipment sizes don't govern threshold behavior. (c) The sensor IS the weather input — disabling it disables changeover logic. (d) Moving the threshold hides this week's weather and manufactures next month's wrong-fuel operation."
      },
      {
        module: 9,
        q: "Window condensation appears whenever the humidifier runs during cold snaps, at a setpoint that was fine in October. The physics and the fix:",
        choices: ["The humidifier is oversized; replace it smaller", "Cold snaps chill the glass below the indoor air's dew point at that setpoint — lower the setpoint as outdoor temperature falls (or fit weather-compensating control); the windows are reporting the envelope's limit", "The windows are defective", "Run the humidifier only at night"],
        answer: 1,
        explanation: "Correct (b): Safe humidity is set by the coldest surface, and October's ceiling is January's flood. (a) Capacity isn't the error — the setpoint's weather-blindness is. (c) The windows are the messenger and the gauge. (d) Night is when glass is coldest — the worst scheduling choice available."
      },
      {
        module: 10,
        q: "A water heater spills at its draft hood only when the dryer, range hood, and bath fan run together. The name and nature of the fault:",
        choices: ["A lazy pilot light", "Worst-case depressurization backdrafting: combined exhausts pull the house negative past the flue's ability to draft — an intermittent, condition-dependent CO source", "A blocked chimney, always spilling", "Normal draft-hood behavior"],
        answer: 1,
        explanation: "Correct (b): The condition-dependence is the identity of the fault — calm-day tests pass it, worst-case tests convict it. (a) The pilot doesn't set whole-house pressure balance. (c) A truly blocked chimney spills under all conditions, including the calm test this unit passes. (d) Spillage is never normal behavior; the draft hood is where the failure shows, not a designed spillway."
      },
      {
        module: 11,
        q: "A salesperson urges skipping the permit 'to keep your price competitive.' The professional answer rests on:",
        choices: ["Permits being optional for replacements", "The permit/inspection chain being the verification that protects occupants, the owner's future sale/insurance position, and the next technician — not a fee to be competed away", "The inspector being a friend of the company", "Permits applying only to new construction"],
        answer: 1,
        explanation: "Correct (b): Module 11's architecture — replacements typically require mechanical permits, and the inspection verifies exactly the life-safety work (venting, gas, combustion air) this course teaches. (a) and (d) are false in the typical jurisdiction and, where uncertain, are resolved by asking the AHJ — not the sales meeting. (c) Relationships don't substitute for the process."
      },
      {
        module: 12,
        q: "The ticket for a complex intermittent-fault repair is missing which element if it records only 'replaced pressure switch, unit heating'?",
        choices: ["The customer's phone number", "Everything that makes it evidence: conditions, the measured draft vs. the switch's rating before/after, the test that convicted the actual cause, and the configuration state", "The date", "A parts warranty stamp"],
        answer: 1,
        explanation: "Correct (b): Module 12's documentation standard exists because 'unit heating' on a mild afternoon proves nothing about a cold-night fault — benchmarked measurements and the convicting test are the deliverable. (a), (c), and (d) are administrative furniture; their presence never rescued an undocumented diagnosis."
      },
      {
        module: 1,
        q: "Which pairing is correct for a condensing furnace?",
        choices: ["Category I — metal vent — natural draft", "Category IV — listed plastic vent — positive pressure, condensate managed by trap and drain", "Category IV — masonry chimney — negative pressure", "Category I — PVC vent — sealed combustion"],
        answer: 1,
        explanation: "Correct (b): Category IV is the condensing, pressurized, plastic-vent class with a designed condensate path. (a) is Category I correctly described but wrongly paired to condensing. (c) mixes IV with a Category I vent path — the prohibited combination. (d) pairs Category I with plastic that its flue temperatures would destroy."
      },
      {
        module: 2,
        q: "After an ECM replacement, the furnace heats but supply air feels cool and runtimes are long. Rise measures 38°F against a 45–65°F plate range. The likely story:",
        choices: ["The new motor is too powerful and must be removed", "The replacement module's airflow program doesn't match the unit — it is moving too much air for the firing rate; verify the program/profile and reset per the manufacturer", "The gas valve needs its pressure doubled", "Cool supply air is normal for all ECM systems"],
        answer: 1,
        explanation: "Correct (b): Rise below range = excess CFM for the output, ΔT = Output ÷ (1.08 × CFM) — and on an ECM the profile lives in the module's programming. (a) 'Too powerful' misreads a configuration state as a hardware property. (c) Doubling manifold pressure overfires dangerously and treats an air-side number with a fuel-side crime. (d) ECM systems meet the same plate ranges as any furnace."
      },
      {
        module: 3,
        q: "An intake termination is found breathing from beside a dryer vent, and the furnace's burners are lint-fouled with a history of flame-quality complaints. The connection:",
        choices: ["Coincidence — intakes are sealed from their surroundings", "The intake's location is a combustion-air quality defect: the burner has been breathing lint-laden exhaust air; relocate/terminate per the manual and clean the burners", "The dryer vent improves combustion by pre-warming air", "The furnace needs a bigger filter"],
        answer: 1,
        explanation: "Correct (b): Module 3's intake-neighborhood pattern — termination placement is a combustion decision, and this one feeds the burner a fouling diet. (a) A piped intake is open at its termination by design; surroundings are its diet. (c) Warm, moist, lint-heavy air is a contaminant source, not a preheater. (d) The return-air filter never sees combustion air — different airstream entirely."
      },
      {
        module: 4,
        q: "Measured manifold pressure on a natural-gas furnace reads 5.1 in. w.c. against a 3.5 in. w.c. rating-plate spec, and the furnace trips its limit on long cycles. Connect the findings:",
        choices: ["No connection — pressure and limit are separate systems", "The furnace is overfired: input above rating makes heat faster than design airflow can remove it (Module 4's overfire leg of the limit-trip differential) — correct the pressure/regulator cause and re-verify rise", "The limit is weak from the high pressure", "Raise the limit setpoint to match the new pressure"],
        answer: 1,
        explanation: "Correct (b): Overfire is one of the two great limit-trip causes, and here it is measured, not guessed. (a) Manifold pressure sets input; input sets the heat the rise must dispose of — one system. (c) Limits don't weaken from gas pressure; they trip from heat. (d) Raising a safety's setpoint to accommodate a fault is the prohibited pattern this course repeats in every module."
      },
      {
        module: 5,
        q: "A zone's supply is 180°F, return is 172°F, and flow is verified at 9 GPM. Emitters were designed for ΔT 20°F. Your reading of the evidence:",
        choices: ["The zone is performing perfectly — supply is hot", "Delivery is 500 × 9 × 8 = 36,000 Btu/h with a suspiciously narrow ΔT — water is racing or short-circuiting past the emitters (open bypass/mis-piped path); total flow is not the same as delivered heat", "The circulator is dead", "The boiler is grossly undersized"],
        answer: 1,
        explanation: "Correct (b): The 500 formula turns 'hot pipes' into arithmetic: an 8°F ΔT at high flow is diluted delivery and a piping-path confession. (a) is the hand-feel fallacy the formula exists to replace. (c) A dead circulator gives no flow and no such readings. (d) Boiler size doesn't stamp one zone's ΔT signature."
      },
      {
        module: 6,
        q: "A radiant system's loops from one manifold measure 180, 190, and 310 feet. The 310-foot loop's room runs cold. The design error and remedy:",
        choices: ["The long loop needs a larger boiler", "Loops of wildly unequal length unbalance the manifold — the long loop's resistance starves its flow; remedy at commissioning is balancing (trim the short loops' valves to their design GPM), and at design stage, splitting the long run into two loops", "Cold rooms are normal under radiant", "The long loop should be capped off"],
        answer: 1,
        explanation: "Correct (b): Parallel loops divide flow by resistance; length is resistance. Balancing valves exist for modest differences — a 70% length excess is a design-stage split that field trimming can only partly forgive. (a) The boiler serves the manifold fine; distribution inside it is the fault. (c) Radiant's whole reputation is evenness — a cold room is a finding, not a feature. (d) Capping deletes heated area the load calculation counted on."
      },
      {
        module: 7,
        q: "A heat pump's COP at 17°F computes to 2.4 from its table. A salesperson calls it '240% efficient, so it always beats the furnace.' The flaw:",
        choices: ["COP cannot exceed 2.0", "Efficiency percentage and cost are different comparisons — against gas, what matters is cost per delivered Btu at each fuel's price; a COP-2.4 heat pump can cost more per Btu than a furnace where gas is cheap (the economic balance point)", "Furnaces are 100% efficient", "COP at 17°F is unmeasurable"],
        answer: 1,
        explanation: "Correct (b): Module 7's thermal-vs-economic distinction. COP > 1 always beats resistance heat; versus combustion, prices arbitrate. (a) COP values well above 2 are routine in mild weather. (c) Furnaces deliver 80–96% of fuel energy as heat — the comparison the prices must weigh. (d) The table gives output and watts at 17°F precisely so COP can be computed there."
      },
      {
        module: 8,
        q: "Which control owns changeover on a modern communicating dual-fuel system?",
        choices: ["A separate fossil-fuel kit, always", "The communicating thermostat/control system, using its outdoor sensing and programmed balance-point setting — the kit's four jobs absorbed into software", "The furnace's limit switch", "The gas utility's smart meter"],
        answer: 1,
        explanation: "Correct (b): Kit, dual-fuel stat, or communicating control — one device owns the decision on any given install, and finding which is the first diagnostic step. (a) Kits are the legacy implementation, not a universal fixture. (c) The limit is a safety, not a scheduler. (d) Meters measure; they do not arbitrate fuels."
      },
      {
        module: 9,
        q: "Rank the IAQ response for a home with a backdrafting water heater, heavy pollen load, and stale air:",
        choices: ["MERV 13 first, ventilator second, ignore the water heater", "Fix the combustion/venting hazard first (source control/safety), then balanced ventilation, then filtration matched to airflow", "Ventilator first — more exhaust will pull the flue clear", "Humidifier first"],
        answer: 1,
        explanation: "Correct (b): The hierarchy is safety-shaped: a CO source outranks comfort equipment, and adding exhaust (c) would worsen the backdraft — the one intervention that makes the hazard bigger. (a) filters air while the house fills it with flue gas. (d) Humidity is last-tier polish here and irrelevant to the hazard."
      },
      {
        module: 10,
        q: "The family in a red-tagged home asks to run the furnace 'just until the part arrives Friday,' offering to sleep with windows open. The professional answer:",
        choices: ["Agree — ventilation makes it safe enough", "No: the shutdown is not negotiable by consent or ventilation — arrange safe interim heat and expedite the repair/replacement; document the conversation", "Agree if they sign the tag", "Agree if a CO alarm is in the bedroom"],
        answer: 1,
        explanation: "Correct (b): Module 10's rule — a confirmed CO pathway into living space is not the customer's risk to accept on behalf of children, guests, or the next occupant, and no window or alarm converts a breached appliance into a safe one. (a), (c), and (d) each dress the same prohibited gamble in a different permission slip."
      },
      {
        module: 11,
        q: "A 20-year-old furnace needs a heat exchanger (not breached — a controls failure) quoted at $2,600; replacement is $6,800. Two other paid repairs occurred in the last 18 months. The framework's lean:",
        choices: ["Repair — $2,600 < 50% of $6,800, end of analysis", "Replacement-leaning: the ratio (~38%) is below the heuristic line, but age (final life years) and a three-repair trajectory mean the $2,600 buys little expected life — present both with the numbers and the exchanger's verified condition stated", "Repair — old furnaces always outlast new ones", "Let the customer flip a coin"],
        answer: 1,
        explanation: "Correct (b): The heuristic is one factor of six; age and frequency are doing decisive work here, and honesty requires showing the whole board rather than the single favorable cell. (a) is heuristic-as-law, the error Module 11 warns against first. (c) is folklore with no basis in the framework. (d) abdicates the professional's one job in the conversation: a reasoned recommendation."
      },
      {
        module: 12,
        q: "Which ticket entry best meets this course's documentation standard?",
        choices: ["'Fixed furnace.'", "'Draft 0.38 in. w.c. vs. switch rating 0.60 on arrival → found condensate trap plugged, drain re-pitched and trap cleaned → draft 0.94 in. w.c. after, full 30-min cycle, no lockout; rise 58°F (plate 40–70). Customer shown readings; CO survey clean with all appliances running.'", "'Replaced some parts, seems fine.'", "'Customer complained a lot, furnace old.'"],
        answer: 1,
        explanation: "Correct (b): Conditions implied, measurements benchmarked, the convicting cause named, before/after pair, verification duration, and the safety survey — the complete standard in one entry. (a), (c), and (d) each fail the same test: the next technician, the customer, or a reviewer could reconstruct nothing from them."
      },
      {
        module: 5,
        q: "Cold fill pressure on a two-story home's boiler reads 4 psi and the top-floor radiators keep going air-bound. The connection:",
        choices: ["Radiators always need weekly bleeding", "Static fill too low to lift water to the top of the system with margin (typical two-story cold fill ≈12 psi): the top of the system runs at/below atmospheric, inviting air in and starving the highest emitters — restore proper fill and find why it fell", "The expansion tank is oversized", "The circulator is too strong"],
        answer: 1,
        explanation: "Correct (b): Fill pressure is the system's ability to keep its highest point full and positive; at 4 psi a two-story system's top is a vacuum invitation. The follow-up question — where did the pressure go (leak, failed feed valve, weeping relief from a waterlogged tank) — is part of the repair. (a) Chronic bleeding is a symptom with a cause, never a lifestyle. (c) Tank size doesn't set static fill. (d) Circulator head is dynamic pressure while running, not the static fill that keeps the system full at rest."
      },
      {
        module: 6,
        q: "The single highest-value commissioning act on a new radiant manifold is:",
        choices: ["Painting the manifold", "Setting and recording each loop's flow (flow meters) to its design GPM from the 500-formula calculation, after purging each loop individually", "Running the boiler at maximum temperature for a day", "Removing the flow meters so they don't restrict flow"],
        answer: 1,
        explanation: "Correct (b): Design flow per loop is where the paper design becomes the installed system; purge-per-loop is what makes flow possible at all in hundreds of feet of small tube. (a) Cosmetics. (c) High temperature is what radiant design exists to avoid. (d) The meters are the balancing instrument — removing them deletes the evidence and the adjustment in one act."
      },
      {
        module: 9,
        q: "An ERV is installed in a very cold climate home whose winter problem is EXCESS indoor moisture (condensation on windows at modest humidity). The concern:",
        choices: ["None — ERVs are always the premium choice", "An ERV returns part of the exhaust moisture to the incoming air, working against the drying this house needs; an HRV (heat only, moisture exhausted) is the usual selection for this moisture balance", "The ERV will freeze solid on day one", "ERVs are illegal in cold climates"],
        answer: 1,
        explanation: "Correct (b): Selection is a moisture-balance decision first — this house needs moisture export, and the HRV is the exporting machine. (a) 'Premium' is a price word, not a physics answer. (c) ERV cores handle frost comparatively well; freezing is not the objection. (d) No such illegality — the point is fit, not permission."
      }
    ]
  }
};
