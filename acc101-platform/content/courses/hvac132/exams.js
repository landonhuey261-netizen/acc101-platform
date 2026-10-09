// HVAC 132 — Midterm and Final exams.
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
        q: "A burner will not ignite at all. An apprentice asks which question to ask first. The best starting question is:",
        choices: ["Is the heat exchanger cracked?", "Which leg of the combustion triangle is missing — fuel, oxygen, or ignition?", "Is the manifold pressure 3.5 in. w.c.?", "When was the filter last changed?"],
        answer: 1,
        explanation: "Correct (b): No ignition at all means one of the three requirements — fuel, oxygen, or ignition heat — is absent; the triangle frames the entire search. (a) A cracked exchanger is a serious finding but it doesn't prevent ignition; furnaces with cracks light fine, which is what makes them dangerous. (c) Manifold pressure matters once fuel is flowing; it cannot be the issue if, say, the tank is empty or the igniter is dead. (d) A dirty filter causes limit trips during runs, not a total failure to ignite."
      },
      {
        module: 1,
        q: "Which statement about carbon monoxide is TRUE?",
        choices: ["It smells like rotten eggs at dangerous levels", "It can be detected reliably by a headache", "It is colorless and odorless, and binds hemoglobin far more strongly than oxygen", "It is only produced by oil equipment"],
        answer: 2,
        explanation: "Correct (c): CO has no color or odor, and it forms carboxyhemoglobin by binding hemoglobin hundreds of times more strongly than oxygen. (a) The rotten-egg smell is mercaptan added to fuel gas — it warns of leaks, not CO. (b) Headaches are nonspecific, late, and CO itself impairs the judgment needed to act on them. (d) Any fuel-burning appliance burning dirty or venting badly — gas, oil, wood — can produce CO."
      },
      {
        module: 1,
        q: "Soot inside a furnace most directly indicates:",
        choices: ["Excess air is too high", "Incomplete combustion — the burner is running fuel-rich, starved of air, or quenched", "The blower is oversized", "The gas has too high a heating value"],
        answer: 1,
        explanation: "Correct (b): Soot is unburned carbon — the signature of carbon that never finished oxidizing because air was short, mixing was poor, or flame was quenched. (a) Excess air dilutes and cools; it wastes efficiency but doesn't deposit carbon. (c) Blower size affects temperature rise, not flame chemistry. (d) Heating value variation is small and handled by design pressures; soot is a mixture/mechanical story, not a gas-quality story."
      },
      {
        module: 1,
        q: "You open the door to a basement and are hit with a strong gas odor. Your first three actions, in order, are:",
        choices: ["Ventilate with a fan, call the utility from the kitchen, then evacuate", "Touch no switches, get everyone out, call the utility or 911 from outside", "Shut the furnace switch, sniff for the leak location, then call", "Open the meter valve wider to clear the line, then test"],
        answer: 1,
        explanation: "Correct (b): No electrical operation (spark risk), people out, communication from outside the hazard — in that order. (a) Plugging in a fan inside the space is an ignition source, and calling from inside keeps you in the atmosphere. (c) The furnace switch is exactly the kind of spark-producing action to avoid, and leak-hunting in a strong odor is diagnosis ahead of evacuation. (d) Adding gas flow to a leaking system is the opposite of response."
      },
      {
        module: 2,
        q: "A natural gas furnace's manifold pressure should be set to approximately:",
        choices: ["10.5 in. w.c.", "3.5 in. w.c., per the rating plate", "7 in. w.c.", "0.5 psi"],
        answer: 1,
        explanation: "Correct (b): ~3.5 in. w.c. is the standard natural gas manifold setting, with the rating plate governing the specific unit. (a) 10–11 in. w.c. is the propane manifold range — setting natural gas there over-fires severely. (c) ~7 in. w.c. is a typical inlet (supply) pressure, not the manifold setting. (d) 0.5 psi equals about 13.9 in. w.c. — far above any residential manifold setting."
      },
      {
        module: 2,
        q: "Clocking test: only the furnace is firing; the 1 ft³ dial takes 30 seconds per revolution. Using 1,025 Btu/ft³, the furnace input is approximately:",
        choices: ["61,500 Btu/h", "123,000 Btu/h", "102,500 Btu/h", "30,750 Btu/h"],
        answer: 1,
        explanation: "Correct (b): Flow = 3,600 × 1 ÷ 30 = 120 ft³/h; input = 120 × 1,025 = 123,000 Btu/h. (a) results from halving the flow — using 60 s instead of 30 s. (c) is the answer for a 36-second revolution (100 ft³/h) — the arithmetic of a different clocking. (d) divides where it should multiply, confusing per-foot energy with flow."
      },
      {
        module: 2,
        q: "A propane furnace is converted by a technician who changes only the regulator to 10.5 in. w.c. but leaves the natural gas orifices in place. The result will be:",
        choices: ["Normal operation — pressure is what matters", "Severe over-firing, because large orifices plus high pressure pass far too much of an energy-dense fuel", "Under-firing, because propane needs bigger orifices", "No change in input rate"],
        answer: 1,
        explanation: "Correct (b): Orifice size and pressure are a matched pair; propane needs SMALLER orifices because each cubic foot carries ~2.5× the Btu. Keeping gas-size holes at triple pressure over-fires dangerously. (a) ignores the orifice half of the metering pair. (c) reverses the physics — propane orifices are smaller, not bigger. (d) Input must change when both flow area and driving pressure change against a richer fuel."
      },
      {
        module: 2,
        q: "Inlet pressure at a furnace reads fine with the furnace off but sags below the manufacturer's minimum the moment the burners fire. The problem is in:",
        choices: ["The manifold regulator", "The supply side — piping size, a restriction, or the service/meter regulator unable to hold pressure under flow", "The orifices", "The burner air shutters"],
        answer: 1,
        explanation: "Correct (b): Static-vs-dynamic sag is a supply delivery story: the system can't move enough volume, so pressure collapses under load. (a) The manifold regulator works with what arrives; it cannot manufacture inlet pressure. (c) Orifices affect manifold-side flow, not the inlet gauge's behavior. (d) Air shutters change mixture, not gas supply pressure."
      },
      {
        module: 3,
        q: "A furnace's burners light, run about four seconds, and shut down, three times, then lock out. The flames look strong. Your first measurement should be:",
        choices: ["Manifold pressure", "Flame signal in microamps DC, meter in series with the sensor lead", "Blower amp draw", "Static pressure in the supply duct"],
        answer: 1,
        explanation: "Correct (b): Light-then-die with good flame is the proving circuit's confession — measure the µA signal the board is (not) seeing. (a) Pressure problems produce visibly weak or absent flames, and the burners here light strongly. (c) Blower amps matter minutes into a call, not at the four-second proving gate. (d) Duct static is an airflow diagnostic, irrelevant to an ignition proving failure."
      },
      {
        module: 3,
        q: "A flame sensor reads 0.6 µA and the rod is bright and clean after service, correctly positioned. Which remaining cause is most likely?",
        choices: ["The sensor needs more aggressive sanding", "A poor ground path between the burner and the control board strangling the microamp circuit", "Manifold pressure slightly high", "The thermostat is set too low"],
        answer: 1,
        explanation: "Correct (b): With the rod exonerated, the loop's return path is next: microamps returning through corroded or loose burner/chassis grounds shrink below the board's threshold. (a) The rod is already clean; more abrasion only damages it. (c) Excess pressure more often improves flame contact or distorts flames — it doesn't produce this weak-but-clean signature. (d) Thermostat settings don't attenuate a flame signal."
      },
      {
        module: 3,
        q: "In flame rectification, the flame acts most like which electrical component?",
        choices: ["A resistor heating element", "A diode — it conducts asymmetrically, converting AC into a DC signal", "A capacitor storing charge", "A transformer stepping up voltage"],
        answer: 1,
        explanation: "Correct (b): Unequal conduction in the two directions (small rod vs large grounded burner) rectifies the applied AC into measurable DC — diode behavior. (a) A resistor passes both directions equally, producing no rectified signal for the board to trust. (c) Capacitors block DC steady flow — the opposite of the continuous signal measured. (d) Nothing is stepped up; voltages stay control-level, currents are microamps."
      },
      {
        module: 3,
        q: "The hot surface igniter in an HSI system fails most commonly by:",
        choices: ["Melting its gas valve", "Cracking or resistance drift of the element, so it no longer reaches ignition temperature", "Blowing the transformer", "Corroding the flame sensor"],
        answer: 1,
        explanation: "Correct (b): HSIs are brittle ceramic elements; thermal cycling cracks them or drifts their resistance until the glow is too cool or absent. (a) The igniter has no path to damage the gas valve. (c) Transformers belong to spark/oil systems; HSI boards supply the element directly. (d) Igniter failure doesn't corrode the sensor — the two are diagnosed separately (resistance vs microamps)."
      },
      {
        module: 4,
        q: "An appliance operates with positive vent pressure and produces condensate in the vent. Its category is:",
        choices: ["Category I", "Category II", "Category III", "Category IV"],
        answer: 3,
        explanation: "Correct (d): Positive pressure + condensing = Category IV — the modern 90%+ class with sealed plastic venting and drainage. (a) Category I is negative pressure, non-condensing (traditional 80% equipment). (b) Category II is negative pressure but condensing. (c) Category III is positive pressure but non-condensing."
      },
      {
        module: 4,
        q: "A Category IV furnace is added to a home; the old Category I furnace shared a chimney with a natural-draft water heater. The correct plan:",
        choices: ["Run the new furnace into the same chimney", "Vent the new furnace separately per its listing, and evaluate/line the chimney for the water heater alone", "Vent the water heater in PVC with the furnace", "Seal the water heater's draft hood and tie it into the furnace vent"],
        answer: 1,
        explanation: "Correct (b): Condensing furnaces use their listed sealed venting — never a masonry chimney — and the 'orphaned' water heater now faces an oversized, cold flue that may need a liner. (a) Positive-pressure wet flue gas in a shared chimney corrodes mortar and can push products into the water heater's path. (c) A Category I water heater's hot flue gas forbids plastic venting. (d) Tying a natural-draft appliance into positive pressure blows flue gas out its draft hood."
      },
      {
        module: 4,
        q: "During inspection, flames are calm until the blower starts; then they waver noticeably. This most strongly suggests:",
        choices: ["Low gas pressure", "A heat-exchanger breach admitting air-side pressure to the flame", "A dirty flame sensor", "High excess air"],
        answer: 1,
        explanation: "Correct (b): The disturbance is time-locked to air-side pressurization — blower pressure is reaching the flame through a path in the exchanger wall. (a) Low pressure weakens flames at all times, not specifically at blower start. (c) A dirty sensor kills the run seconds after ignition; it doesn't buffet flames. (d) Excess air is a mixture property visible from light-off, not a blower-triggered event."
      },
      {
        module: 4,
        q: "A condensing furnace's vent has a long sagging horizontal run. The most predictable consequence is:",
        choices: ["Improved efficiency", "Condensate ponding in the sag, restricting the flue and causing pressure-switch lockouts", "Higher manifold pressure", "Quieter operation"],
        answer: 1,
        explanation: "Correct (b): Condensate forms along the whole run and must slope back to the furnace; a belly fills until it chokes flue flow and the pressure switch refuses to prove — intermittently, as the water shifts. (a) Ponded water adds no efficiency; it subtracts reliability. (c) Vent condition doesn't change valve-regulated manifold pressure. (d) Gurgling water slugs are a noise source, not a silencer."
      },
      {
        module: 5,
        q: "In the standard sequence, immediately after the inducer starts, the control requires:",
        choices: ["The gas valve to open", "The pressure switch to close, proving draft", "The blower to start", "The igniter to de-energize"],
        answer: 1,
        explanation: "Correct (b): Draft must be proven before ignition energy or fuel is introduced. (a) The valve opens only after proof plus igniter warm-up — several steps later. (c) The blower waits for flame proof plus its on-delay. (d) The igniter hasn't even energized yet at this point in the sequence."
      },
      {
        module: 5,
        q: "A furnace heats well for ten minutes, stops firing while the blower continues, cools, refires, and repeats all day. The register air is hotter than usual. This is:",
        choices: ["Normal two-stage operation", "Limit cycling — investigate airflow first, then firing rate", "A failing pressure switch", "Flame sensor dropout"],
        answer: 1,
        explanation: "Correct (b): Mid-run cutout with hot register air and auto-reset rhythm is the high limit supervising an overheating exchanger: classic causes are restricted airflow, then over-firing. (a) Two-stage furnaces shift firing rates; they don't stop firing entirely on a rhythm with overheated air. (c) Pressure-switch loss kills the burner without the heat build-up pattern. (d) Sensor dropout happens seconds after ignition, not ten minutes in."
      },
      {
        module: 5,
        q: "You find a rollout switch tripped. The professional sequence is:",
        choices: ["Reset it and leave if the furnace runs", "Replace it automatically", "Investigate the cause (exchanger blockage/crack, inducer/draft, over-firing, delayed ignition) and inspect for heat damage BEFORE re-firing", "Jumper it until the part arrives"],
        answer: 2,
        explanation: "Correct (c): A tripped rollout means flame escaped the burner box; manual-reset design demands a human cause-hunt first. (a) Reset-and-leave returns an appliance with an unresolved flame-escape condition. (b) Replacing the witness doesn't address the flame path fault. (d) Jumpering a safety as a leaving condition is never acceptable."
      },
      {
        module: 5,
        q: "On a standing-pilot furnace with no control board, the blower is started and stopped by:",
        choices: ["A pressure switch", "A fan-limit control sensing heat-exchanger temperature", "The thermostat's fan relay only", "The gas valve"],
        answer: 1,
        explanation: "Correct (b): The bimetal fan-limit starts the blower when the exchanger warms and stops it when it cools, with the limit side guarding overheating. (a) Natural-draft pilot furnaces have no inducer and no pressure switch. (c) The thermostat can force fan in some setups, but heat-mode blower control on these units belongs to the fan-limit. (d) The gas valve controls fuel, not the blower."
      },
      {
        module: 6,
        q: "An analyzer reads CO = 50 ppm at O₂ = 5.9%. CO air-free is approximately:",
        choices: ["35 ppm", "50 ppm", "70 ppm", "120 ppm"],
        answer: 2,
        explanation: "Correct (c): 20.9 − 5.9 = 15.0; 20.9 ÷ 15.0 ≈ 1.39; 50 × 1.39 ≈ 70 ppm. (a) applies the correction backwards — air-free must exceed the diluted raw reading. (b) ignores dilution entirely; at 5.9% O₂ the flue gas carries meaningful excess air. (d) overshoots the factor (it would need O₂ near 12.5%)."
      },
      {
        module: 6,
        q: "Flue O₂ climbs noticeably higher than the manufacturer's band while CO air-free stays low and stack temperature falls. Input rate clocks exactly on rating. The best explanation is:",
        choices: ["Over-firing", "Dilution air entering the flue path (exchanger breach, vent joint leak, or sampling error)", "A starved burner", "Normal operation"],
        answer: 1,
        explanation: "Correct (b): With input proven correct and CO air-free low, extra air arriving downstream of the flame — dilution — explains high O₂ with cooled stack gas. (a) Over-firing is excluded by the on-rating clocking. (c) A starved (under-aired) burner shows low O₂ and high CO — the opposite picture. (d) Readings outside the maker's band with a falling stack trend are a finding, not a pass."
      },
      {
        module: 6,
        q: "Net stack temperature is 310°F this year versus 245°F at last year's baseline, same firing rate and similar O₂. The most likely story is:",
        choices: ["The exchanger is transferring heat better than ever", "Heat-transfer surfaces have fouled (soot/dust), sending more heat up the vent", "The gas heating value doubled", "The analyzer's battery is stronger this year"],
        answer: 1,
        explanation: "Correct (b): At constant input and air, rising stack loss means falling transfer — fouling insulates the exchanger. (a) Better transfer would lower stack temperature. (c) Heating value shifts are percent-scale, not 65°F events, and clocking would show them. (d) Instrument condition doesn't manufacture a coherent physical trend."
      },
      {
        module: 6,
        q: "Why must a combustion test be taken at steady state?",
        choices: ["The analyzer warranty requires it", "Warm-up readings describe a cold appliance — quenching, condensing, and unstable temperatures that don't represent running operation", "The furnace uses less gas that way", "Steady state makes CO read zero"],
        answer: 1,
        explanation: "Correct (b): Only after temperatures and gas readings stabilize do the numbers describe the appliance as it actually runs. (a) Warranties don't dictate test physics. (c) Gas use is whatever it is; the test measures, it doesn't economize. (d) Steady state doesn't zero CO — it reveals the true CO, which is the point."
      },
      {
        module: 6,
        q: "A technician 'fixes' high CO by opening the burner air shutters until the raw CO reading looks acceptable. The flaw in this repair is:",
        choices: ["Air shutters should never be touched", "Dilution lowered the raw reading while CO production (air-free) may be unchanged — the cause (dirt, over-fire, quenching) is still there", "CO can only be fixed with a new furnace", "The O₂ reading will drop too low"],
        answer: 1,
        explanation: "Correct (b): This is precisely why CO is judged air-free — excess air dilutes the sample without reducing production. The cure is restoring design conditions at the source. (a) Shutters are legitimate adjustments — to the manufacturer's specification, as part of a verified setup, not as a CO mask. (c) Most CO faults are serviceable causes. (d) Opening shutters raises O₂; the stated direction is backwards."
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
        q: "Complete combustion of methane produces carbon dioxide and water vapor. Carbon monoxide appears when:",
        choices: ["The fuel contains too much nitrogen", "Carbon in the fuel cannot fully oxidize — from air shortage, poor mixing, over-fueling, or flame quenching", "The flue is too tall", "The thermostat cycles too fast"],
        answer: 1,
        explanation: "Correct (b): CO is half-finished CO₂ — carbon that stopped one oxygen short, for mixture or quenching reasons. (a) Nitrogen passes through combustion inertly; it doesn't create CO. (c) Flue height affects draft, which can contribute indirectly, but CO's chemistry is at the burner. (d) Cycling affects wear and comfort, not the reaction products per firing."
      },
      {
        module: 2,
        q: "Propane's manifold pressure (10–11 in. w.c.) is about triple natural gas's (3.5 in. w.c.) mainly because:",
        choices: ["Propane tanks are far from houses", "Propane's small orifices need higher pressure to deliver and mix its energy-dense fuel properly", "Propane is heavier, so it needs help rising", "Regulators for propane are less precise"],
        answer: 1,
        explanation: "Correct (b): Pressure and orifice size are the metering pair; dense fuel through small holes needs the push — and the jet's air entrainment depends on it. (a) Distance is a supply-piping matter handled by tank regulators. (c) Vapor density affects leak behavior, not manifold settings. (d) Regulator precision is comparable; the setpoints differ by design, not accuracy."
      },
      {
        module: 3,
        q: "A spark-ignition (intermittent pilot) furnace sparks, the pilot lights, but the main burner never opens. The proving suspect is:",
        choices: ["The main flame sensor µA — there is none to read yet", "Pilot flame proving (pilot sensor/rectification) or the main valve section not being energized", "The blower limit", "The pressure switch proving too well"],
        answer: 1,
        explanation: "Correct (b): In SI systems the main valve is gated by proof of the pilot flame; an unproven (dirty sensor, weak pilot, bad ground) or unpowered main section fits exactly. (a) Main-burner proving can't fail before the burner is allowed gas. (c) Limits interrupt runs; they don't selectively block the pilot-to-main handoff while the pilot burns. (d) 'Proving too well' isn't a failure mode — draft proof already succeeded for the pilot to light in sequence."
      },
      {
        module: 4,
        q: "Category III differs from Category IV in that Category III appliances:",
        choices: ["Use negative vent pressure", "Do not condense — positive pressure with flue gas kept hot, in sealed listed metal venting", "Always use PVC venting", "Are always natural draft"],
        answer: 1,
        explanation: "Correct (b): III = positive + non-condensing; IV = positive + condensing. (a) Both III and IV are positive-pressure; negative describes I and II. (c) PVC belongs to IV's cool wet exhaust; III's hot flue gas requires listed metal systems. (d) Positive pressure implies fan assistance — the opposite of natural draft."
      },
      {
        module: 5,
        q: "The inducer continues running after the call for heat ends because of:",
        choices: ["A stuck thermostat", "Post-purge — clearing residual flue gas from the exchanger and vent", "The blower off-delay winding the motor down", "A pressure switch fault in every case"],
        answer: 1,
        explanation: "Correct (b): Post-purge is a designed shutdown step sweeping the last combustion products out. (a) A satisfied thermostat is what started the shutdown; the inducer tail is the board's timing, not a stuck call. (c) The off-delay belongs to the indoor blower, a different motor. (d) A brief post-purge run is normal; only a never-ending inducer invites the fault conversation."
      },
      {
        module: 6,
        q: "Measured CO is 40 ppm at O₂ of 0.9%. A second furnace measures CO 40 ppm at O₂ of 10.9%. Comparing CO air-free:",
        choices: ["They are equal — same raw CO", "The second furnace's air-free CO is about double the first's, because its reading was diluted by far more excess air", "The first furnace is worse", "Air-free cannot be compared across furnaces"],
        answer: 1,
        explanation: "Correct (b): First: 40 × 20.9/(20.0) ≈ 42 ppm. Second: 40 × 20.9/(10.0) ≈ 84 ppm. Dilution hid the second burner's production. (a) is the raw-reading fallacy the correction exists to defeat. (c) reverses the arithmetic. (d) Air-free exists precisely to make cross-appliance comparison fair."
      },
      {
        module: 7,
        q: "An oil nozzle rated 0.65 GPH is operated at 156 psi pump pressure (per the burner manufacturer's specification). Actual flow is approximately:",
        choices: ["0.65 GPH", "0.81 GPH", "1.01 GPH", "0.52 GPH"],
        answer: 1,
        explanation: "Correct (b): 0.65 × √(156/100) = 0.65 × √1.56 ≈ 0.65 × 1.249 ≈ 0.81 GPH. (a) ignores that operating pressure exceeds the 100 psi rating point. (c) applies the ratio 1.56 nearly linearly — flow follows the square root. (d) inverts the relationship; higher pressure increases flow."
      },
      {
        module: 7,
        q: "A burner locks out on the primary control even though a strong flame is visible through the inspection port. The flame is steady and clean. Prime suspect:",
        choices: ["The cad cell — soot-filmed, misaligned, or failed — reporting darkness to the control", "Excessive pump pressure", "The ignition transformer sparking too well", "A plugged nozzle"],
        answer: 0,
        explanation: "Correct (a): The control obeys its eye, not yours; a blinded cad cell reports no flame during a fire. (b) Pressure faults distort the flame itself, which here is described as strong and clean. (c) A good spark with an established flame is not the lockout path — ignition already succeeded. (d) A plugged nozzle would weaken or kill the visible flame the prompt rules out."
      },
      {
        module: 7,
        q: "On a service call you learn the homeowner pressed the oil primary's reset eight times. Before any start attempt you must consider that:",
        choices: ["The reset button is now worn out", "The chamber likely holds multiple loads of unburned oil; another ignition risks a puffback — diagnose the cause and address accumulated oil first", "The oil tank is now empty", "The cad cell is burned out by resets"],
        answer: 1,
        explanation: "Correct (b): Each failed trial sprayed oil; accumulated fuel plus a successful spark equals a pressure event. (a) Button wear is trivial beside the explosion mechanics. (c) Eight trials consume ounces, not a tank. (d) Resets don't damage the cad cell — the cell may be the original fault, but that's a separate diagnosis."
      },
      {
        module: 8,
        q: "An electric furnace has three 5 kW banks at 240 V. With all stages on, you clamp: 20.8 A, 20.8 A, 0 A. Total heat being delivered is approximately:",
        choices: ["51,180 Btu/h", "34,120 Btu/h", "17,060 Btu/h", "68,240 Btu/h"],
        answer: 1,
        explanation: "Correct (b): Two banks live = 10 kW × 3,412 = 34,120 Btu/h. (a) is the full 15 kW figure — it assumes the dead bank is heating. (c) is one bank only. (d) would require 20 kW — a fourth bank that doesn't exist here. The clamp meter, not the nameplate, reports delivered heat."
      },
      {
        module: 8,
        q: "A sequencer's contacts for stage 2 never close, though its 24 V heater coil is energized and stage 1 works. The correct repair is:",
        choices: ["Adjust the sequencer's timing screws", "Replace the sequencer — its staging mechanism has failed; sequencers are replaced, not adjusted", "Raise the thermostat's second-stage differential", "Swap stage 1 and stage 2 wires permanently"],
        answer: 1,
        explanation: "Correct (b): The command arrives (coil hot, stage 1 closes) but the mechanism can't advance — a failed device, replaced like-for-like. (a) Classic sequencers have no timing adjustment; their delays are built-in ratings. (c) Thermostat settings can't repair a mechanical failure downstream. (d) Rewiring stages defeats the engineered order (blower pairing, inrush design) and mislabels the system for the next technician."
      },
      {
        module: 8,
        q: "Temperature rise on an electric furnace reads 30°F; the nameplate range is 40–55°F; all banks draw correct amps. The imbalance is:",
        choices: ["Too much heat", "Too much airflow for the heat — or dampers/speed set wrong for heat mode", "A welded sequencer contact", "An open fusible link"],
        answer: 1,
        explanation: "Correct (b): Amps prove full heat; a low rise with full heat means air volume is excessive for it (high blower speed tap, missing restriction the design counted on). (a) 'Too much heat' would raise the rise, and amps say heat is exactly rated. (c) A welded contact adds uncommanded heat — also raising rise, and amps at no-call would have confessed it. (d) An open link kills a bank; amps rule it out."
      },
      {
        module: 9,
        q: "A boiler must deliver 70,000 Btu/h at a design ΔT of 20°F. Required flow is:",
        choices: ["3.5 GPM", "7 GPM", "14 GPM", "1.75 GPM"],
        answer: 1,
        explanation: "Correct (b): GPM = 70,000 ÷ (500 × 20) = 70,000 ÷ 10,000 = 7 GPM. (a) halves it (used 1,000 as the constant or doubled ΔT). (c) doubles it (used 250). (d) results from dividing by 40,000 — arithmetic that loses the 500 constant's structure."
      },
      {
        module: 9,
        q: "A hydronic system's gauge reads 12 psi cold and 29 psi hot; the relief valve weeps on long fires. First suspect:",
        choices: ["The relief valve is set too low from the factory", "The expansion tank has lost its air cushion (waterlogged)", "The circulator is too powerful", "The fill valve is stuck fully open"],
        answer: 1,
        explanation: "Correct (b): Cold-normal/hot-runaway is the waterlogged tank's signature — expansion has nowhere to go. (a) Residential relief valves are standard-rated (30 psi typical); the pressure reaching it is the abnormality. (c) Circulator head adds a few psi locally, not a 17 psi system climb. (d) A stuck fill valve would push cold pressure up toward street pressure — but cold reads a normal 12 psi."
      },
      {
        module: 9,
        q: "The highest radiators in a house are 22 feet above the boiler. Minimum cold fill pressure to keep them full is about:",
        choices: ["5 psi", "9.5 psi", "12 psi exactly — always", "22 psi"],
        answer: 1,
        explanation: "Correct (b): 22 ft × 0.433 psi/ft ≈ 9.5 psi just to stand water at the top; a practical fill adds margin (≈12–13 psi here). (a) 5 psi supports only ~11 feet — the top floor would be air. (c) 'Always 12' is a habit, not physics — taller buildings need more, and the stem asks the minimum for THIS height. (d) confuses feet with psi one-for-one; the conversion is 0.433, not 1."
      },
      {
        module: 10,
        q: "A steam radiator gives up 19,400 Btu/h. Roughly how many pounds of steam does it condense per hour?",
        choices: ["2 lb", "20 lb", "194 lb", "970 lb"],
        answer: 1,
        explanation: "Correct (b): 19,400 ÷ 970 ≈ 20 lb/h — latent heat does the heavy lifting. (a) would deliver only ~1,940 Btu/h. (c) overstates mass tenfold (that much steam would deliver ~188,000 Btu/h). (d) confuses the Btu-per-pound constant with the flow itself."
      },
      {
        module: 10,
        q: "One radiator on a two-pipe steam system stays cold; its trap's outlet pipe is stone cold and the trap body is cold, while the supply riser is hot. The trap is most likely:",
        choices: ["Failed open", "Failed closed (or clogged), holding condensate/air so steam cannot enter", "Oversized", "Installed on the wrong system"],
        answer: 1,
        explanation: "Correct (b): Steam is available at the riser but nothing crosses the radiator: a closed-failed trap waterlogs/air-binds the unit. (a) Failed open would pass steam — the outlet would be hot, and the complaint would be return noise, not a cold radiator. (c) Trap sizing errors degrade performance but don't produce a fully dead radiator with cold outlet. (d) The trap is on a two-pipe radiator — its correct home."
      },
      {
        module: 10,
        q: "The boiler's automatic feeder has begun cycling weekly on a steam system that historically needed no makeup. The correct interpretation:",
        choices: ["The feeder is doing its job — no action needed", "Water is leaving the system somewhere (leak, passing trap to a vented receiver, boiler leak) — investigate; makeup also imports oxygen and minerals", "The pressuretrol needs raising", "The boiler is making steam too efficiently"],
        answer: 1,
        explanation: "Correct (b): Makeup volume is a leak meter; tight steam systems sip. (a) confuses the alarm with the all-clear — the feeder masks the loss while corrosion compounds it. (c) Pressure settings don't consume water. (d) Efficiency doesn't drink boiler water."
      },
      {
        module: 11,
        q: "A pressure switch stamped 0.50 in. w.c. is tested: measured draft at its port is 0.85 in. w.c., but the switch never closes. Verdict:",
        choices: ["Draft is insufficient", "The switch has failed — the offered draft exceeds its setpoint, so replace it like-for-like", "The manometer is wrong", "Lower the setpoint by bending the spring"],
        answer: 1,
        explanation: "Correct (b): 0.85 > 0.50 — signal offered and refused; the switch is the fault. (a) is numerically backwards. (c) The manometer's reading is corroborated by the inducer's evident operation; distrust needs evidence. (d) Field-bending a listed safety's calibration is defeating-by-adjustment — forbidden."
      },
      {
        module: 11,
        q: "Which action sequence correctly applies lockout/tagout for a gas valve replacement?",
        choices: ["Close the gas cock only; the board has no stored charge", "Shut off and lock/tag the electrical supply, close the appliance gas shutoff, prove the circuit dead with a verified meter, do the work, leak-test every disturbed joint on restoration", "Turn the thermostat down and work quickly", "Remove the board fuse and rely on it"],
        answer: 1,
        explanation: "Correct (b): Both energy families (electrical and fuel) isolated, electrical proven dead live-dead-live style, and restoration includes leak-testing disturbed gas joints. (a) Gas work beside a live board invites an ignition source at the work point. (c) A thermostat is an operating control, not an isolation device. (d) A pulled fuse is unguarded, unlabeled isolation — anyone can reinsert it."
      },
      {
        module: 11,
        q: "A furnace's high limit trips repeatedly. After you fix the crushed return duct causing it, best practice for the limit itself is to:",
        choices: ["Leave it — it did its job", "Verify/test it (and replace if its calibration or condition is in doubt) because chronic tripping fatigues bimetal devices", "Raise its setpoint to prevent future trips", "Move it to a cooler location"],
        answer: 1,
        explanation: "Correct (b): Guardians degrade in the line of duty; verifying the protector after fixing the cause completes the repair. (a) assumes a season of thermal abuse left calibration untouched — exactly what testing exists to check. (c) Raising a listing setpoint is prohibited practice. (d) Relocating to read cooler defeats the device geometrically."
      },
      {
        module: 12,
        q: "No-heat call: the furnace is completely dead. Thermostat display is blank. The most probable first finding is:",
        choices: ["A failed control board", "No power to the system (breaker, switch, or the transformer/board fuse) — restore power diagnosis before parts", "A cracked heat exchanger", "A failed pressure switch"],
        answer: 1,
        explanation: "Correct (b): A blank thermostat plus a dead furnace is a power-chain story until proven otherwise; boards are downstream of power, not upstream. (a) Board failure is possible but is the less common, more expensive guess — and a dead board usually still leaves a powered thermostat on many systems. (c) Cracks don't cut power. (d) Pressure switches gate ignition, not system power."
      },
      {
        module: 12,
        q: "Which habit most reduces callbacks?",
        choices: ["Replacing two parts per call minimum", "A disciplined close-out: full verification run, combustion/rise numbers recorded, safety chain confirmed intact, thermostat and panels restored", "Leaving the old part with the customer", "Skipping documentation on small jobs"],
        answer: 1,
        explanation: "Correct (b): Callbacks are usually unfinished verification, not wrong first repairs. (a) Parts volume is roulette, not thoroughness. (c) A courtesy, but it fixes nothing technical. (d) Undocumented small jobs become unprovable medium-sized disputes."
      },
      {
        module: 1,
        q: "A homeowner says, 'If CO were a problem, we'd feel sick first and get out.' The flaw is:",
        choices: ["CO symptoms are always immediate and severe", "Early CO symptoms mimic flu, and CO impairs judgment — victims often cannot recognize or act on the danger", "CO always triggers home alarms within seconds", "People build immunity to CO"],
        answer: 1,
        explanation: "Correct (b): The poisoning disables the escape mechanism — recognition and judgment — while presenting as ordinary illness. (a) Symptoms are famously gradual and nonspecific until advanced. (c) Alarms respond at set thresholds over time; they are backstops, not guarantees of a warning window. (d) There is no acquired immunity to carboxyhemoglobin."
      },
      {
        module: 2,
        q: "A manometer is the correct instrument for manifold pressure because:",
        choices: ["It also measures temperature", "Manifold pressures are fractions of a psi (3.5 in. w.c. ≈ 0.13 psi) that a psi gauge cannot resolve", "It is cheaper than a gauge", "It measures gas heating value"],
        answer: 1,
        explanation: "Correct (b): Resolution is the issue — the difference between right and dangerous manifold pressure is invisible on a psi dial. (a) Temperature is a separate measurement. (c) Cost is irrelevant to correctness — and digital manometers aren't the cheap option. (d) Heating value comes from the utility's data, not any pressure instrument."
      },
      {
        module: 3,
        q: "After three failed ignition trials, a control enters lockout primarily to:",
        choices: ["Save wear on the igniter", "Stop repeated fuel-admission attempts against a persistent fault, and require the failure to be addressed", "Cool the heat exchanger for efficiency", "Reset the thermostat"],
        answer: 1,
        explanation: "Correct (b): Lockout is risk management — endless trials against an unproven fault keep gambling with unburned fuel. (a) Igniter wear is a side effect, not the design motive. (c) The exchanger doesn't need scheduled cooling in an ignition failure. (d) The thermostat's call may persist through lockout; the board, not the stat, enforces the pause."
      },
      {
        module: 4,
        q: "AFUE of a condensing furnace reaches the 90s chiefly because it recovers:",
        choices: ["Heat from the blower motor", "Latent heat of the water vapor in flue gas, via a corrosion-resistant secondary exchanger", "Heat from the vent pipe's radiation into the basement", "Excess air's kinetic energy"],
        answer: 1,
        explanation: "Correct (b): Condensing the flue-gas water vapor returns its ~970 Btu/lb latent heat to the house instead of the vent. (a) Motor heat is trivial and present in all furnaces. (c) Vent radiation is a loss pathway mid-efficiency designs accept, not a recovery strategy. (d) Excess air is minimized, not harvested."
      },
      {
        module: 5,
        q: "A two-stage furnace heats fine in October but loses ground in January. Verified: high fire is never commanded. Two candidate causes from this course are:",
        choices: ["A dirty flame sensor; low manifold pressure on low stage", "W2 absent/disconnected at the thermostat or board staging disabled; or the high-stage valve solenoid failing when commanded", "An oversized flue; a dirty filter", "A weak igniter; excess primary air"],
        answer: 1,
        explanation: "Correct (b): The pattern (adequate mild, inadequate cold) is un-escalated staging: either the command never forms (wiring/stat/board logic) or the commanded stage never fires (valve HI solenoid/pressure). (a) Sensor and low-stage pressure faults degrade all operation, October included. (c) Flue size and filters don't gate staging. (d) Ignition and mixture faults don't selectively spare mild weather."
      },
      {
        module: 6,
        q: "The analyzer is zeroed in the equipment room where another appliance has been spilling flue gas. The risk is:",
        choices: ["None — analyzers self-correct", "The zero baseline is contaminated, offsetting subsequent readings so real CO/O₂ values are misreported", "The probe will melt", "The test takes longer"],
        answer: 1,
        explanation: "Correct (b): Calibration assumes fresh air; a contaminated zero shifts every later number — potentially hiding the very CO you came to find. Zero outdoors or in known-clean air. (a) No self-correction exists for a poisoned reference. (c) Zeroing is a cold procedure; the probe isn't in a flue yet. (d) Time isn't the stake — accuracy is."
      },
      {
        module: 7,
        q: "An oil system's inlet vacuum reads high and steady with rough running right after a tank refill stirred up sediment. Likely culprit:",
        choices: ["A suction air leak", "A restriction — the filter/strainer loaded with stirred-up sludge", "The cad cell", "Excess draft"],
        answer: 1,
        explanation: "Correct (b): High STEADY vacuum plus a sediment event points at clogging (filter, pump strainer, line). (a) Air leaks make vacuum fluctuate and flame breathe, not a clean high hold. (c) The cad cell reports flame; it doesn't roughen fuel delivery. (d) Draft problems show in combustion readings and smoke, not in inlet vacuum behavior."
      },
      {
        module: 8,
        q: "Bank 2 of an electric furnace draws 0 A when commanded; its fusible link is open; the filter is found matted. The correct job scope is:",
        choices: ["Replace the link only", "Replace the link, restore airflow (filter and check blower/ducts), inspect the element and limit for heat damage, then verify amps and temperature rise", "Replace the whole furnace", "Bypass the link with a jumper wire rated for the current"],
        answer: 1,
        explanation: "Correct (b): The link is a witness to overheating; airflow restoration plus heat-damage inspection plus measured verification completes the causal chain. (a) installs the next failure on schedule. (c) is disproportionate to a diagnosed, repairable fault chain. (d) bypassing a one-time safety device is the prohibited act of this course, whatever the wire's rating."
      },
      {
        module: 9,
        q: "In a zone-valve system, Zone 3's valve opens fully (verified) whenever its thermostat calls, yet the boiler never fires for Zone 3 alone — though it fires fine for other zones. The fault is:",
        choices: ["The circulator", "Zone 3's end switch — the valve opens but the proof contact never completes the boiler call", "The expansion tank", "The aquastat"],
        answer: 1,
        explanation: "Correct (b): The end switch is the call's last inch: valve motion without contact closure leaves the boiler uninformed. Other zones firing exonerates the shared equipment. (a) The circulator serves all zones and demonstrably works. (c) Tank faults speak in pressure, not in one zone's missing call. (d) The aquastat responds fine to other zones' completed calls."
      },
      {
        module: 10,
        q: "Banging in the steam mains begins seconds after the burner fires, worst near a low spot in a long main. Leading cause:",
        choices: ["The pressuretrol differential", "Condensate pooled in a sagging/unpitched main section being slammed by incoming steam (water hammer)", "Oversized radiator vents", "The Hartford loop doing its job"],
        answer: 1,
        explanation: "Correct (b): Startup is when steam meets the system's standing water at speed; a pocket in a sag is the hammer's anvil. (a) Pressure settings change distribution, not impact physics in a flooded sag. (c) Vents hiss or fail quietly; they don't load mains with water slugs. (d) The loop is protective piping at the boiler — and silent when healthy."
      },
      {
        module: 11,
        q: "Which statement about safety controls is correct professional doctrine?",
        choices: ["A safety may be bypassed overnight if the customer signs", "A jumper is a brief, attended diagnostic tool only — never a leaving condition, regardless of consent or weather", "Manual-reset safeties may be converted to auto-reset for convenience", "Limits may be adjusted upward 10% for altitude"],
        answer: 1,
        explanation: "Correct (b): The rule has no exceptions clause — consent, cold, and signatures don't amend physics. (a) and (c) are the prohibited acts themselves, dressed as procedures. (d) Setpoints come from listings and manufacturer instructions, not field percentages."
      },
      {
        module: 12,
        q: "A furnace fails only during long overnight runs; condensate is found ponded in its vent sag each morning. The diagnostic approach that fits is:",
        choices: ["Replace the pressure switch immediately", "Treat the pattern as data: condensate accumulation on long runs explains the draft fault — correct the vent slope/support, then verify with a long provoked run", "Tell the customer to cycle power nightly", "Raise the inducer speed"],
        answer: 1,
        explanation: "Correct (b): Intermittent + condition-linked + physical evidence (ponded water) = a mechanism, not a mystery: fix the drainage geometry and prove it under the provoking condition. (a) The switch is reporting the blocked vent faithfully. (c) Cycling power is symptom management that also erases codes. (d) Residential inducers aren't field-adjusted; and forcing draft against a water slug treats the victim, not the cause."
      },
      {
        module: 4,
        q: "Why can a positive-pressure (Category III/IV) vent joint leak be more immediately dangerous indoors than a Category I vent joint leak?",
        choices: ["Plastic is weaker than metal", "Positive pressure pushes flue gas OUT of a bad joint into the room; a negative-pressure vent tends to draw room air IN at a leak", "Positive vents are always longer", "Category I flue gas contains no CO"],
        answer: 1,
        explanation: "Correct (b): Pressure direction decides leak direction — Category IV/III joints must be sealed because their contents are being pushed into the building at every defect. (a) Material strength isn't the mechanism. (c) Length is irrelevant to the direction of leakage. (d) Category I flue gas absolutely contains CO potential — its negative vent is the mitigating geometry, not cleaner gas."
      },
      {
        module: 5,
        q: "Blower on-delay exists primarily so that:",
        choices: ["The inducer can finish pre-purge", "The exchanger warms before air delivery, avoiding a cold blast and thermal shock", "The gas valve can rest", "The thermostat anticipator can catch up"],
        answer: 1,
        explanation: "Correct (b): Comfort and exchanger care — delivered air should start warm. (a) Pre-purge involves the inducer and finishes before ignition, not during blower delay. (c) Valves don't rest on timers. (d) Anticipators (legacy) influenced cycling, not the blower's start timing."
      },
      {
        module: 7,
        q: "Converting an oil system from two-pipe to one-pipe requires, at the pump:",
        choices: ["Nothing — piping only", "Removing the bypass plug, then bleeding the system until bubble-free", "Installing a larger nozzle", "Disabling the cutoff"],
        answer: 1,
        explanation: "Correct (b): The bypass plug belongs to two-pipe routing; left in for one-pipe service it disrupts pump operation. Bleeding follows any suction-side opening. (a) is how the classic conversion fault is created. (c) Nozzle choice follows the appliance spec, not the pipe count. (d) The cutoff prevents after-drip; disabling it creates odor/soot faults."
      },
      {
        module: 9,
        q: "A circulator should be installed pumping AWAY from the expansion tank connection because:",
        choices: ["It makes the pump quieter", "That point is the point of no pressure change; pumping away adds the circulator's pressure to the system, keeping high points pressurized and air-free", "It reverses the flow through the boiler for better heating", "It prevents the relief valve from opening"],
        answer: 1,
        explanation: "Correct (b): Anchoring at the tank point means the pump's differential adds to static pressure everywhere downstream — top radiators stay full instead of being sucked toward vacuum and air ingestion. (a) Noise is not the design driver. (c) Boiler flow direction is set by the piping design, not this rule's intent. (d) The relief responds to expansion/pressure faults, not pump orientation."
      },
      {
        module: 12,
        q: "The single best description of the professional no-heat method taught in this course is:",
        choices: ["Fastest parts replacement wins", "Safety first; globals before components; sequence before parts; measurements before conclusions; verification before departure", "Always start with the control board", "Trust the flame's appearance above instruments"],
        answer: 1,
        explanation: "Correct (b): The ordered method — each stage cheaper and more probable than the next, with proof at the end. (a) is roulette with a work truck. (c) Boards fail last in probability and first in price. (d) inverts the course's central evidentiary rule: instruments testify, flames merely suggest."
      }
    ]
  }
};
