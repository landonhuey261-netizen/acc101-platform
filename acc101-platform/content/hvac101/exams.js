// HVAC 101 — Midterm and Final exams.
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
        q: "A rooftop unit is rated at 5 tons. Its rated cooling capacity is:",
        choices: ["5,000 BTU per hour", "60,000 BTU per hour", "12,000 BTU per hour", "24,000 BTU per hour"],
        answer: 1,
        explanation: "Correct (b): One ton equals 12,000 BTU per hour, so 5 x 12,000 = 60,000. (a) treats a ton as 1,000 BTU. (c) is a single ton. (d) is two tons."
      },
      {
        module: 1,
        q: "Refrigerant leaving the metering device and entering the evaporator is:",
        choices: ["Hot high-pressure vapor", "Warm high-pressure liquid", "Cold low-pressure liquid-vapor mixture", "Low-pressure superheated vapor"],
        answer: 2,
        explanation: "Correct (c): The pressure drop at the metering device chills the mixture and flashes part of it to vapor. (a) describes discharge gas entering the condenser. (b) describes liquid entering the metering device, not leaving it. (d) describes refrigerant leaving the evaporator after boiling and superheating."
      },
      {
        module: 1,
        q: "An evaporator absorbs 18,000 BTU per hour while the compressor adds 5,000 BTU per hour. Heat rejected at the condenser is:",
        choices: ["13,000 BTU per hour", "18,000 BTU per hour", "23,000 BTU per hour", "5,000 BTU per hour"],
        answer: 2,
        explanation: "Correct (c): Rejected heat = absorbed heat + compression heat = 18,000 + 5,000 = 23,000. (a) subtracts instead of adding. (b) ignores the compressor's contribution. (d) counts only the compressor's heat."
      },
      {
        module: 1,
        q: "The dividing components between the high side and low side are the:",
        choices: ["Evaporator and condenser", "Compressor and metering device", "Suction and liquid lines", "Receiver and filter-drier"],
        answer: 1,
        explanation: "Correct (b): Pressure rises at the compressor and falls at the metering device; everything between them on one path is high side, on the other low side. (a) The two coils sit inside the sides rather than dividing them. (c) Lines are parts of the sides, not dividers. (d) Accessories do not set the pressure boundary."
      },
      {
        module: 2,
        q: "How much heat raises 8 pounds of water by 15°F?",
        choices: ["23 BTU", "120 BTU", "53 BTU", "1,200 BTU"],
        answer: 1,
        explanation: "Correct (b): For water, sensible heat = pounds x degrees = 8 x 15 = 120 BTU. (a) adds the numbers. (c) divides them. (d) multiplies by an extra factor of ten."
      },
      {
        module: 2,
        q: "A gauge reading of 50 psig at sea level equals:",
        choices: ["50 psia", "35.3 psia", "64.7 psia", "79.9 psia"],
        answer: 2,
        explanation: "Correct (c): psia = psig + 14.7 = 64.7. (a) ignores the atmospheric offset. (b) subtracts it instead of adding. (d) adds roughly two atmospheres."
      },
      {
        module: 2,
        q: "Latent heat is heat that:",
        choices: ["Changes temperature measurably", "Changes a substance's state at constant temperature", "Is carried only by moving air", "Exists only in ice"],
        answer: 1,
        explanation: "Correct (b): Boiling and melting absorb or release latent heat without a temperature change. (a) describes sensible heat. (c) describes convection, a transfer method, not a heat type. (d) Latent heat is central to boiling refrigerant, far beyond ice."
      },
      {
        module: 2,
        q: "A vacuum of 4,000 microns compared with the 500-micron target is:",
        choices: ["Deeper than required", "About eight times the target absolute pressure — not acceptable", "Exactly at target", "Impossible to measure"],
        answer: 1,
        explanation: "Correct (b): 4,000 / 500 = 8, so the system holds about eight times the permitted absolute pressure, with moisture likely remaining. (a) reverses the scale — lower microns are deeper. (c) confuses the two numbers. (d) Micron gauges measure this range routinely."
      },
      {
        module: 3,
        q: "R-134a is classified as:",
        choices: ["A CFC", "An HCFC", "An HFC", "An HFO"],
        answer: 2,
        explanation: "Correct (c): R-134a contains no chlorine and has hydrogen, fluorine, and carbon — an HFC. (a) CFCs contain chlorine and no hydrogen, like R-12. (b) HCFCs contain chlorine plus hydrogen, like R-22. (d) HFOs are the newer short-lived family, like R-1234yf."
      },
      {
        module: 3,
        q: "In safety group A1, the '1' tells you the refrigerant:",
        choices: ["Has higher toxicity", "Shows no flame propagation under test conditions", "Is mildly flammable", "Contains one chlorine atom"],
        answer: 1,
        explanation: "Correct (b): The number rates flammability, and 1 is the no-flame-propagation class. (a) Toxicity is the letter, and A means lower toxicity. (c) Mild flammability is class 2L. (d) The number has nothing to do with atomic counts."
      },
      {
        module: 3,
        q: "EPA 608 certification is earned:",
        choices: ["Automatically by completing this course", "Through EPA-approved certifying organizations, passing Core plus the relevant type at 70% or better", "By purchasing refrigerant", "Only through a state licensing board"],
        answer: 1,
        explanation: "Correct (b): Sections are administered by EPA-approved certifying organizations; each 25-question section requires 70% or better. (a) This course prepares students but does not certify. (c) Purchase is restricted to the certified; it confers nothing. (d) State licensing is a separate matter from federal 608 certification."
      },
      {
        module: 3,
        q: "A supermarket rack holds recovered R-404A in a cylinder whose label has come off. The correct action is to:",
        choices: ["Judge the contents by cylinder color and use it", "Treat the contents as unknown, tag the cylinder, and route it through the proper reclamation process", "Vent a small sample and smell it", "Mix it into a known cylinder to dilute it"],
        answer: 1,
        explanation: "Correct (b): Unknown contents are never used; tagging and proper routing protect the next system and the law. (a) Color is not identification, as Module 3 establishes. (c) Venting is prohibited and smelling refrigerant is unsafe. (d) Mixing contaminates the known cylinder too."
      },
      {
        module: 4,
        q: "A scroll compressor has:",
        choices: ["A piston and reed valves doing the sealing", "One fixed scroll and one orbiting scroll", "A shaft seal to an external motor in all models", "A capillary tube inside its shell"],
        answer: 1,
        explanation: "Correct (b): The orbiting scroll traps and shrinks vapor pockets against the fixed scroll. (a) describes a reciprocating compressor. (c) describes open-drive construction. (d) A capillary tube is a metering device elsewhere in the loop."
      },
      {
        module: 4,
        q: "For an R-410A system at 40°F evaporating and 100°F condensing, the compressor bridges a pressure difference of about:",
        choices: ["199 psi (317 − 118)", "118 psi", "435 psi (317 + 118)", "68.5 psi"],
        answer: 0,
        explanation: "Correct (a): Discharge 317 psig minus suction 118 psig = 199 psi of lift. (b) is just the suction pressure. (c) adds the pressures, which has no physical meaning here. (d) is R-22's suction anchor at 40°F, the wrong refrigerant."
      },
      {
        module: 4,
        q: "Suction-cooled hermetic motors depend on:",
        choices: ["Outdoor air blown over the shell", "Cool returning suction vapor flowing over the motor", "A separate water jacket", "The crankcase heater while running"],
        answer: 1,
        explanation: "Correct (b): Returning vapor is the motor's coolant, which is why high superheat endangers the motor. (a) The shell is sealed in the refrigerant circuit; outdoor air is not the design coolant. (c) Water jackets belong to other machinery types. (d) The crankcase heater works during off cycles against refrigerant migration."
      },
      {
        module: 4,
        q: "A compressor that stops on its internal overload, cools, restarts, and stops again is most likely:",
        choices: ["Healed between cycles", "Reporting a continuing overload condition — overheating or overcurrent — whose cause must be found", "Switching to its spare motor", "Demonstrating normal operation"],
        answer: 1,
        explanation: "Correct (b): The overload cycles because the condition persists; each cycle is a symptom report. (a) Nothing repaired itself while it sat. (c) Hermetic compressors have one motor, not a spare. (d) Repeated protective cycling is abnormal by definition."
      },
      {
        module: 5,
        q: "An R-22 condenser at 196 psig has a liquid line temperature of 90°F. Subcooling is:",
        choices: ["0°F", "10°F", "6°F", "106°F"],
        answer: 1,
        explanation: "Correct (b): 196 psig is 100°F saturation for R-22; 100 − 90 = 10°F. (a) would need a 100°F liquid line. (c) and (d) come from arithmetic that does not match the anchor conversion."
      },
      {
        module: 5,
        q: "The order of refrigerant zones through a condenser is:",
        choices: ["Subcooling, condensing, desuperheating", "Desuperheating, condensing, subcooling", "Condensing, subcooling, desuperheating", "Desuperheating, subcooling, condensing"],
        answer: 1,
        explanation: "Correct (b): Vapor first cools to saturation, then condenses, then the liquid subcools. (a) and (c) and (d) each scramble the sequence; refrigerant cannot subcool before it has condensed, nor condense before reaching saturation temperature."
      },
      {
        module: 5,
        q: "Head pressure climbs steadily over a summer while the charge is never touched. The most likely family of causes is:",
        choices: ["Metering device wear", "Heat rejection decline — coil fouling, fan problems, or recirculation", "Thermostat drift", "Suction line insulation aging"],
        answer: 1,
        explanation: "Correct (b): Condensing gets harder as surfaces foul or airflow fails, so pressure rises to compensate. (a) Metering faults show first at the evaporator. (c) A thermostat changes run time, not a running system's head pressure trend. (d) Suction insulation affects line heat gain slightly, not a steady head climb."
      },
      {
        module: 5,
        q: "Non-condensable air in a system raises head pressure because it:",
        choices: ["Burns inside the condenser", "Occupies condenser space and adds its own partial pressure without condensing", "Turns into liquid refrigerant", "Cools the discharge gas"],
        answer: 1,
        explanation: "Correct (b): Air cannot condense at condenser conditions, so it accumulates and adds pressure. (a) Nothing combusts in a sealed system. (c) Air remains air. (d) Air raises discharge temperature rather than cooling it."
      },
      {
        module: 6,
        q: "On a TXV, the sensing bulb is mounted:",
        choices: ["On the liquid line at the condenser outlet", "On the suction line at the evaporator outlet, clamped and insulated", "Inside the compressor shell", "On the discharge line"],
        answer: 1,
        explanation: "Correct (b): The valve controls evaporator outlet superheat, so its bulb senses exactly there. (a) The liquid line is where subcooling is measured, not what the bulb senses. (c) The bulb is an external line-mounted element. (d) Discharge temperatures are unrelated to evaporator feed control."
      },
      {
        module: 6,
        q: "A piston (fixed orifice) system on a hotter day with higher head pressure will tend to:",
        choices: ["Feed less refrigerant", "Feed more refrigerant, roughly tracking load", "Stop feeding entirely", "Convert to TXV behavior"],
        answer: 1,
        explanation: "Correct (b): Flow through a fixed hole follows the pressure difference pushing on it. (a) reverses the pressure-flow relationship. (c) Flow stops only if the pressure difference disappears. (d) A fixed orifice never gains sensing or modulation."
      },
      {
        module: 6,
        q: "High superheat, low capacity, and frost only near the evaporator inlet on a TXV system could be caused by:",
        choices: ["A bulb that lost its charge, leaving closing forces in control", "A loose bulb sensing warm air", "An overcharge of refrigerant", "Oversized condenser airflow"],
        answer: 0,
        explanation: "Correct (a): Without bulb pressure, spring and equalizer forces hold the valve nearly shut and the coil starves. (b) A loose bulb reads warm and overfeeds — the opposite pattern. (c) Overcharge on a TXV system shows in subcooling first. (d) Condenser airflow does not starve an evaporator this way."
      },
      {
        module: 6,
        q: "Which pairing of device and service method is correct?",
        choices: ["TXV — charge by superheat", "Fixed orifice — charge by subcooling", "Capillary tube appliance — weigh the critical charge", "EEV — charge by head pressure alone"],
        answer: 2,
        explanation: "Correct (c): Small cap-tube charges are weighed because they are small and critical. (a) and (b) swap the two main methods; TXV systems are charged by subcooling and fixed systems by superheat. (d) No system in this course is charged by head pressure alone."
      },
      {
        module: 6,
        q: "An EEV's advantage over a TXV is that it:",
        choices: ["Needs no sensors", "Can hold steadier superheat and coordinate with system controls electronically", "Eliminates the need for subcooling", "Works without a liquid supply"],
        answer: 1,
        explanation: "Correct (b): Sensor-driven positioning allows precise, adaptive superheat control. (a) Sensors are its defining requirement. (c) The liquid seal and subcooling still matter. (d) Like a TXV, it meters liquid and misbehaves on flash gas."
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
        q: "A small market's display case absorbs 12,000 BTU per hour at rating. Its capacity in tons is:",
        choices: ["12 tons", "1 ton", "0.5 ton", "3 tons"],
        answer: 1,
        explanation: "Correct (b): 12,000 BTU per hour divided by 12,000 per ton = 1 ton. (a) confuses the BTU number with tons. (c) would be 6,000 BTU per hour. (d) would be 36,000 BTU per hour."
      },
      {
        module: 1,
        q: "Which line carries refrigerant as a warm, high-pressure liquid?",
        choices: ["Suction line", "Discharge line", "Liquid line", "Equalizer line"],
        answer: 2,
        explanation: "Correct (c): The liquid line runs from condenser outlet to metering device with high-pressure liquid. (a) The suction line carries cool low-pressure vapor. (b) The discharge line carries hot high-pressure vapor, not liquid. (d) An equalizer carries a pressure signal, not the main liquid stream."
      },
      {
        module: 1,
        q: "During the expansion process, refrigerant undergoes:",
        choices: ["A pressure rise with heat added", "A sharp pressure and temperature drop with no heat added or removed", "Condensation at constant pressure", "Compression by the evaporator fan"],
        answer: 1,
        explanation: "Correct (b): Throttling drops pressure and temperature while total heat content stays about the same and flash gas forms. (a) describes compression. (c) describes the condenser. (d) Fans move air; they do not compress refrigerant."
      },
      {
        module: 2,
        q: "Melting 20 pounds of ice at 32°F absorbs about:",
        choices: ["144 BTU", "2,880 BTU", "640 BTU", "20 BTU"],
        answer: 1,
        explanation: "Correct (b): Ice melting takes about 144 BTU per pound, so 20 x 144 = 2,880 BTU, all latent at constant 32°F. (a) is one pound's worth. (c) applies a sensible-heat style figure to a phase change. (d) counts pounds only."
      },
      {
        module: 2,
        q: "Which statement about a saturated mixture is true?",
        choices: ["Its temperature can vary freely at one pressure", "At a given pressure it has exactly one temperature", "It contains no liquid", "It exists only in cylinders"],
        answer: 1,
        explanation: "Correct (b): Saturation locks pressure and temperature together. (a) Temperature freedom begins only when the mixture becomes all vapor (superheat) or all liquid (subcooling). (c) A saturated mixture by definition has liquid and vapor together. (d) Saturation exists in both coils of every running system."
      },
      {
        module: 2,
        q: "Convert 210.7 psia to psig:",
        choices: ["225.4 psig", "210.7 psig", "196 psig", "181.3 psig"],
        answer: 2,
        explanation: "Correct (c): psig = psia − 14.7 = 210.7 − 14.7 = 196. (a) adds the offset the wrong way. (b) assumes the scales are identical. (d) subtracts the offset twice over, roughly."
      },
      {
        module: 3,
        q: "A refrigerant with high GWP but zero ODP is most likely an:",
        choices: ["CFC", "HCFC", "HFC", "Ammonia charge"],
        answer: 2,
        explanation: "Correct (c): HFCs have no chlorine (zero ODP) but many are long-lived greenhouse gases. (a) CFCs have the highest ODP. (b) HCFCs have a small but real ODP. (d) Ammonia is not in the halocarbon family comparison and its issue is toxicity, not this pairing."
      },
      {
        module: 3,
        q: "Universal EPA 608 certification means the technician passed:",
        choices: ["Core only", "Any two types", "Core plus Type I, Type II, and Type III", "A state journeyman exam"],
        answer: 2,
        explanation: "Correct (c): Universal is Core with all three types. (a) Core alone certifies no equipment category. (b) Two types leave a category unpassed. (d) State licensing is separate from 608 entirely."
      },
      {
        module: 3,
        q: "Why are refrigerant cylinders never heated with a torch to speed charging?",
        choices: ["Heat changes the refrigerant into another type", "A saturated cylinder's pressure rises with temperature and uncontrolled heating can over-pressurize a pressure vessel", "Torch heat removes the cylinder's label glue only", "It makes the refrigerant too cold"],
        answer: 1,
        explanation: "Correct (b): Liquid and vapor together mean pressure follows temperature, and a torch applies that rise without control or limit. (a) Refrigerant identity does not change with warmth. (c) Label damage is trivial beside the pressure hazard. (d) Heating warms contents; the danger is pressure, not cold."
      },
      {
        module: 4,
        q: "A bolted compressor housing that a shop can open for internal service describes:",
        choices: ["A hermetic compressor", "A semi-hermetic compressor", "An open-drive compressor with no housing", "A scroll compressor in all cases"],
        answer: 1,
        explanation: "Correct (b): Semi-hermetic construction uses gasketed, bolted covers for service access. (a) Hermetics are welded shut. (c) Open-drive separates motor and compressor with a shaft seal. (d) Scroll describes a mechanism, not a housing style, and most scrolls are hermetic."
      },
      {
        module: 4,
        q: "Oil fails to return to a compressor most directly when:",
        choices: ["Suction vapor velocity is too low to carry oil back", "The condenser fan runs at full speed", "Subcooling is at target", "The crankcase heater is working"],
        answer: 0,
        explanation: "Correct (a): Oil rides the returning vapor; weak flow strands it in the evaporator and lines. (b) Full condenser airflow is healthy operation. (c) Target subcooling is a charge state, not an oil-transport failure. (d) A working crankcase heater protects oil by preventing migration."
      },
      {
        module: 4,
        q: "A reciprocating compressor seals compression using:",
        choices: ["Two orbiting scrolls", "Pistons with suction and discharge valves", "A rolling vane only", "A magnetic field"],
        answer: 1,
        explanation: "Correct (b): Pistons draw and discharge vapor through reed valves each stroke. (a) describes a scroll. (c) describes rotary construction. (d) Motors use magnetic fields, but compression sealing is mechanical."
      },
      {
        module: 5,
        q: "An R-410A condenser at 317 psig with a liquid line at 85°F has subcooling of:",
        choices: ["5°F", "15°F", "232°F", "0°F"],
        answer: 1,
        explanation: "Correct (b): Saturation is 100°F; 100 − 85 = 15°F. (a) would need a 95°F liquid line. (c) subtracts the pressure from the temperature, a meaningless operation. (d) would need the liquid at saturation temperature."
      },
      {
        module: 5,
        q: "A warehouse uses a cooling tower with its large chiller. The condensers are most likely:",
        choices: ["Air-cooled", "Water-cooled", "Evaporative as the refrigerant coil itself", "Unnecessary at that size"],
        answer: 1,
        explanation: "Correct (b): Towers exist to cool the water that cools water-cooled condensers, chosen for large tonnage and steadier head pressure. (a) Air-cooled condensers reject to air directly and use no tower. (c) confuses tower evaporation with the refrigerant circuit. (d) Every vapor-compression system needs a condenser."
      },
      {
        module: 5,
        q: "The desuperheating zone of a condenser handles refrigerant that is:",
        choices: ["All liquid below saturation", "Vapor cooling from discharge temperature down to condensing temperature", "Liquid flashing to vapor", "Vapor at suction pressure"],
        answer: 1,
        explanation: "Correct (b): The first coil section removes the vapor's extra sensible heat so condensation can begin. (a) describes the subcooling zone's contents. (c) Flashing happens at the metering device. (d) Condenser vapor is at discharge pressure throughout."
      },
      {
        module: 6,
        q: "A sensing bulb strapped loosely so it senses warm ambient air will cause its TXV to:",
        choices: ["Starve the coil", "Overfeed the coil toward floodback", "Hold perfect superheat anyway", "Shut the system down"],
        answer: 1,
        explanation: "Correct (b): The bulb reports false high superheat, its pressure rises, and the valve opens wider than the coil needs. (a) is the lost-bulb-charge pattern. (c) The valve faithfully follows bad information. (d) A TXV has no shutdown function."
      },
      {
        module: 6,
        q: "Which device holds evaporator outlet superheat as its controlled variable?",
        choices: ["Capillary tube", "Fixed orifice piston", "TXV", "Receiver"],
        answer: 2,
        explanation: "Correct (c): The TXV (and electronically, the EEV) modulates flow to hold outlet superheat. (a) and (b) are fixed restrictions whose flow follows pressures and controls nothing. (d) A receiver stores liquid; it controls no variable."
      },
      {
        module: 6,
        q: "A cap-tube refrigerator and a window unit fall under which EPA category for service procedures in this program?",
        choices: ["Type II high-pressure", "Type III low-pressure", "Type I small appliances", "No category applies"],
        answer: 2,
        explanation: "Correct (c): Type I covers small appliances such as household refrigerators and window units. (a) Type II is high-pressure equipment. (b) Type III is low-pressure chillers. (d) All refrigerant appliances sit in the 608 framework."
      },
      {
        module: 7,
        q: "An R-134a evaporator at 35 psig has a suction line temperature of 55°F. Superheat is:",
        choices: ["10°F", "20°F", "15°F", "5°F"],
        answer: 1,
        explanation: "Correct (b): 35 psig is 40°F saturation for R-134a; 55 − 40 = 20°F. (a) and (d) miscompute the difference. (c) would need a 55°F saturation temperature, which belongs to a different pressure."
      },
      {
        module: 7,
        q: "Boiling in an evaporator finishes in the first third of the coil. The coil is:",
        choices: ["Flooded", "Starved, with most of its surface wasted on warming vapor", "Perfectly fed", "Overcharged by definition"],
        answer: 1,
        explanation: "Correct (b): Early dry-out retires most surface from latent work to light sensible duty. (a) A flooded coil never finishes boiling inside at all. (c) Perfection finishes boiling near the outlet. (d) Starvation more often signals undercharge or restriction — the opposite inventory story."
      },
      {
        module: 7,
        q: "A cooling coil's drain pan overflows while cooling performance stays normal. The fault is in:",
        choices: ["The refrigerant charge", "Condensate drainage, an evaporator-side service item", "The metering device", "Head pressure control"],
        answer: 1,
        explanation: "Correct (b): The refrigeration cycle is working; the water the coil wrings from air has nowhere to go. (a) Charge faults change pressures and superheat, which are stated normal. (c) Metering faults distort feed and superheat. (d) Head pressure faults show in condensing values, not in a wet ceiling."
      },
      {
        module: 7,
        q: "On a TXV system with falling indoor airflow, superheat may stay near target because:",
        choices: ["The TXV closes down to defend its set superheat while suction pressure and capacity fall", "Airflow does not affect TXV systems", "The compressor speeds up automatically", "Superheat is measured at the condenser"],
        answer: 0,
        explanation: "Correct (a): The controlled variable goes quiet while uncontrolled values carry the news — the Module 6 rule in action. (b) Airflow is half the coil's work on any system. (c) A fixed-speed compressor does not compensate. (d) Evaporator superheat is a suction-side measurement."
      },
      {
        module: 8,
        q: "An R-22 system must boil at 45°F in its evaporator. Expected suction pressure is about:",
        choices: ["68.5 psig", "76 psig", "118 psig", "196 psig"],
        answer: 1,
        explanation: "Correct (b): 76 psig is the R-22 anchor for 45°F. (a) is R-22 at 40°F. (c) is R-410A at 40°F. (d) is R-22 at 100°F, a condensing value."
      },
      {
        module: 8,
        q: "For a glide blend, subcooling uses the bubble point because subcooling asks about:",
        choices: ["Vapor that finished boiling", "Liquid measured against the temperature where condensing finished", "The average of dew and bubble in all cases", "Standing pressure"],
        answer: 1,
        explanation: "Correct (b): Condensing finishes at the bubble point, and subcooling is liquid degrees below that point. (a) describes the dew-point question used for superheat. (c) Midpoint saturation has specialized uses in high-glide diagnosis but is not the subcooling definition taught here. (d) Standing pressure is a separate off-cycle check."
      },
      {
        module: 8,
        q: "A digital gauge set to the wrong refrigerant will produce:",
        choices: ["Correct pressures but fictional saturation temperatures, superheat, and subcooling", "No readings at all", "Correct superheat with wrong pressures", "A blown fuse"],
        answer: 0,
        explanation: "Correct (a): Pressure transducers measure pressure honestly; the conversion table belongs to the selected refrigerant, so every derived value is wrong together. (b) The tool works normally — that is the trap. (c) Superheat derives from the same wrong conversion. (d) Menu settings do not damage hardware."
      },
      {
        module: 8,
        q: "R-404A near 40°F shows bubble about 62 psig and dew near 66 psig. The difference between these values illustrates:",
        choices: ["A gauge error", "Temperature glide in a zeotropic blend", "Overcharge", "Non-condensable contamination"],
        answer: 1,
        explanation: "Correct (b): One temperature neighborhood carries two pressures because bubble and dew points differ in a blend. (a) Both values are published chart behavior. (c) Charge changes system pressures in operation, not the chart's point definitions. (d) Air raises pressures above chart values wholesale, rather than defining a bubble-dew pair."
      },
      {
        module: 9,
        q: "The center hose of a manifold set is used to connect to:",
        choices: ["Only the suction port", "A cylinder, recovery machine, vacuum pump, or nitrogen source as the job requires", "Only the liquid port", "The thermostat"],
        answer: 1,
        explanation: "Correct (b): Yellow is the working hose routed by the manifold valves. (a) and (c) name the blue and red hoses' ports. (d) Thermostats are electrical controls, not refrigerant connections."
      },
      {
        module: 9,
        q: "An electronic leak detector passed very quickly along a coil finds nothing on a system known to leak. The likely technique error is:",
        choices: ["The detector must move slowly enough for its sensor to respond at the leak", "Detectors only work on empty systems", "The coil must be frosted first", "Batteries improve with speed"],
        answer: 0,
        explanation: "Correct (a): Sensors need dwell time at each joint; a fast sweep outruns them. (b) Detectors work on charged, pressurized systems — that is their purpose. (c) Frost hides and dilutes leak traces. (d) Battery state is unrelated to sweep speed."
      },
      {
        module: 9,
        q: "Before a recovery job, the cylinder on the scale is checked to confirm:",
        choices: ["Its paint matches the refrigerant color code tradition", "It is an approved recovery cylinder, labeled for the refrigerant, with capacity for the charge by weight", "It is a disposable cylinder", "It has been heated to accept charge faster"],
        answer: 1,
        explanation: "Correct (b): Approval, identity, and weighed capacity make recovery legal and safe. (a) Color is never identification. (c) Disposables are never used for recovery service or refilled. (d) Heating cylinders is prohibited."
      },
      {
        module: 10,
        q: "A system isolated at 450 microns rises to 520 and holds there, unchanging, for fifteen minutes. The verdict is:",
        choices: ["Leak — keep searching", "Pass — a small leveling rise is the signature of a dry, tight system", "Moisture plateau — pull for another day", "Gauge failure, because any rise is failure"],
        answer: 1,
        explanation: "Correct (b): The rise leveled and stopped, which is what outgassing in a sealed dry system does. (a) A leak's rise does not level off. (c) A moisture plateau parks far higher and stubbornly, not near the target. (d) A modest settling rise is expected physics, not instrument failure."
      },
      {
        module: 10,
        q: "Triple evacuation is indicated when:",
        choices: ["Every installation, regardless of history", "Moisture evidence is strong — the system stood open in humidity or its decay trace parks at a plateau", "The pump is brand new", "The system is very small"],
        answer: 1,
        explanation: "Correct (b): Nitrogen-broken repeated pulls are prescribed by moisture, not by routine. (a) A clean, quick decay on a dry install needs no triple procedure. (c) Pump age does not prescribe the method. (d) Size alone is not the indication; moisture history is."
      },
      {
        module: 10,
        q: "A vacuum rig that cannot pull below 900 microns when blanked off at its own gauge tells you:",
        choices: ["Every system it touches is leaking", "The rig itself — oil, hoses, seals, path — caps any evacuation and must be fixed first", "Microns below 900 are unnecessary", "The gauge needs a larger dial"],
        answer: 1,
        explanation: "Correct (b): The blank-off test isolates the rig's ceiling; systems cannot be judged through a rig that cannot reach the target itself. (a) reverses the evidence. (c) The target is 500 or below. (d) Dial size is irrelevant to a digital micron measurement."
      },
      {
        module: 11,
        q: "A fixed-orifice R-410A system at 118 psig suction with a 47°F suction line has superheat of 7°F against a chart target of 14°F. The action is:",
        choices: ["Add refrigerant", "Recover refrigerant toward target", "Replace the piston", "Adjust the TXV"],
        answer: 1,
        explanation: "Correct (b): Actual superheat below target means the coil is overfed — too much charge on a fixed system. (a) Adding lowers superheat further toward floodback. (c) The piston is a fixed hole; nothing about it failed in this pattern. (d) There is no TXV on a fixed-orifice system."
      },
      {
        module: 11,
        q: "A TXV R-22 system targets 12°F subcooling. At 196 psig head the liquid line reads 100°F. Subcooling and action are:",
        choices: ["0°F — add refrigerant", "12°F — done", "24°F — recover refrigerant", "Cannot be computed"],
        answer: 0,
        explanation: "Correct (a): Saturation at 196 psig is 100°F, so subcooling = 100 − 100 = 0°F; with no liquid seal margin, add refrigerant toward the 12°F target. (b) misreads the target as the result. (c) doubles the target without computation. (d) All needed values are present."
      },
      {
        module: 11,
        q: "A system comes back from a major repair, fully recovered and evacuated, on a cold morning outside the charging chart's valid range. The professional charging choice is:",
        choices: ["Guess by suction pressure", "Weigh in the nameplate charge with its line-set adjustment", "Charge until the suction line feels cold", "Wait until summer"],
        answer: 1,
        explanation: "Correct (b): Weigh-in does not depend on weather or stabilization and restores the design mass from zero. (a) and (c) are feel-based methods that the course explicitly retires. (d) The customer needs a working system now, and a valid method exists."
      },
      {
        module: 11,
        q: "After trimming a TXV system's charge to its subcooling target, superheat is found pinned at the valve's normal range. This tells you:",
        choices: ["The charge must still be wrong", "Charge and valve are both behaving — subcooling reported charge, superheat reported the valve", "Subcooling should be re-trimmed using superheat", "The valve needs adjustment"],
        answer: 1,
        explanation: "Correct (b): Each variable did its assigned job and both verdicts are healthy. (a) contradicts the evidence without a mechanism. (c) re-mixing the methods undoes the division of labor that makes TXV diagnosis possible. (d) A valve holding its range is not an adjustment candidate."
      },
      {
        module: 12,
        q: "A weak-cool call shows head pressure high for the ambient, discharge hot, and a condenser coil face matted with debris. First repair move:",
        choices: ["Recover refrigerant to lower head pressure", "Clean the coil and verify fan operation, then re-measure", "Add refrigerant to improve capacity", "Replace the metering device"],
        answer: 1,
        explanation: "Correct (b): The pattern is a heat-rejection fault with a visible cause; restoring rejection restores pressures. (a) Removing charge treats a condenser problem by creating an undercharge. (c) Adding charge raises head pressure further. (d) Nothing in the pattern indicts the metering device."
      },
      {
        module: 12,
        q: "Low suction, high superheat, and low subcooling on a stabilized fixed-orifice system form the signature of:",
        choices: ["Overcharge", "Restriction", "Undercharge", "Low indoor airflow"],
        answer: 2,
        explanation: "Correct (c): Little liquid anywhere starves the coil and empties the condenser. (a) Overcharge drives superheat low. (b) A restriction keeps subcooling normal-to-high from stacked liquid. (d) Low airflow tends to drop superheat and frost the coil."
      },
      {
        module: 12,
        q: "The first physical checks on almost any no-cool call, before refrigerant decisions, are:",
        choices: ["Compressor winding resistances", "Thermostat call, filters, blower, coil faces, and outdoor fan", "TXV adjustment and bulb relocation", "Full refrigerant recovery"],
        answer: 1,
        explanation: "Correct (b): The air side and controls cause most calls and distort every refrigerant reading until cleared. (a) Electrical depth comes after basic operation is established. (c) Valve work is a late, verified step. (d) Recovery before diagnosis destroys the evidence and the charge state."
      },
      {
        module: 12,
        q: "A start-up's final documented readings disagree with each other — subcooling on target, superheat impossible for the device type, history unknown. The best next step is:",
        choices: ["Adjust charge until one number looks familiar", "Re-verify the measurement chain (refrigerant setting, clamp placement, stabilization), then escalate with documentation if the contradiction stands", "Sign off, since one number is on target", "Replace the TXV and compressor together"],
        answer: 1,
        explanation: "Correct (b): Contradictions are usually instrument or setup errors; if honest re-measurement preserves them, documented escalation protects the system. (a) destroys evidence while chasing coherence. (c) One good number does not certify a contradictory picture. (d) Mass part replacement on confused data is the failure mode this course exists to prevent."
      }
    ]
  }
};
