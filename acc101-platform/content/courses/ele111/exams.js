module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A student holds a flashlight over a small solar cell and a meter shows current flowing. The student covers half the cell with a hand and the current drops by about half. What does this show about how a cell works?",
        "choices": [
          "The cell stores light and releases it slowly",
          "The cell converts the light falling on it into current — less light means less current",
          "The cell makes power from heat",
          "The cell only works in direct sun"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A cell converts the light falling on it into current, so covering half the cell cuts the current by about half. (a) A cell does not store light. (c) The cell makes power from light, not heat — heat actually lowers its voltage. (d) A cell works in diffuse light too, just with less current."
      },
      {
        "module": 1,
        "q": "A module's datasheet lists 20 cells in series, each rated at 0.6 V open-circuit. What is the module's approximate open-circuit voltage?",
        "choices": [
          "0.6 V",
          "12 V",
          "120 V",
          "240 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 20 cells × 0.6 V = 12 V open-circuit. (a) 0.6 V is one cell. (c) 120 V would need 200 cells. (d) 240 V would need 400 cells."
      },
      {
        "module": 1,
        "q": "STC means:",
        "choices": [
          "A cloudy day at 0°C",
          "1,000 W/m², 25°C cell temperature, AM 1.5",
          "A rooftop in July",
          "Nighttime"
        ],
        "answer": 1,
        "explanation": "Correct: (b). STC is the laboratory rating condition. (a) A cloudy cold day is not STC. (c) A July rooftop is hotter than 25°C. (d) Cells make no power at night."
      },
      {
        "module": 1,
        "q": "A technician opens the DC disconnect between the array and the inverter on a sunny day, then touches the array conductors to check them. What is wrong with this?",
        "choices": [
          "Nothing — the disconnect makes the array safe",
          "The sunlit modules are still energized, so the conductors are still live even with the disconnect open",
          "The inverter is still running",
          "The disconnect is in the wrong place"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A disconnect isolates the array from the inverter; it does not de-energize sunlit modules. (a) The disconnect does not make the array safe. (c) The inverter stops when its input is disconnected. (d) The disconnect's location is not the problem."
      },
      {
        "module": 2,
        "q": "A homeowner with a basic grid-tied system asks why their lights went out during a sunny-day power outage. What is the correct explanation?",
        "choices": [
          "The panels were broken",
          "A basic grid-tied inverter must shut down when the grid goes down, so the house has no power until the grid returns",
          "The sun was not strong enough",
          "The meter was off"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Anti-islanding shuts the inverter down in an outage, so a basic grid-tied system gives no backup power. (a) The panels are not broken. (c) The sun's strength is not the reason. (d) The meter is not the cause."
      },
      {
        "module": 2,
        "q": "A utility crew is repairing a downed line on a street where several houses have solar. Why must every grid-tied inverter on that street shut down during the repair?",
        "choices": [
          "To save the homeowners money",
          "So the inverters do not feed power into the dead line and shock the crew",
          "To protect the panels from the sun",
          "Because the inverters need a rest"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Anti-islanding keeps a dead line dead so the crew is not shocked. (a) Saving money is not the reason. (c) The panels are not harmed by the sun. (d) Inverters do not need rest."
      },
      {
        "module": 2,
        "q": "A remote cabin has no utility service. The owner wants lights, a refrigerator, and a water pump. What kind of system is needed?",
        "choices": [
          "A basic grid-tied system",
          "An off-grid system with a battery bank and a charge controller",
          "A net-metered system",
          "A system with no inverter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). With no grid, the system must store energy in batteries and manage them with a charge controller. (a) Grid-tied needs a grid. (c) Net metering is a grid billing arrangement. (d) AC loads need an inverter."
      },
      {
        "module": 2,
        "q": "A hybrid system's backup panel holds:",
        "choices": [
          "Every circuit in the house",
          "Only the critical loads needed during an outage",
          "The array circuits",
          "The utility meter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The backup panel is a short list of critical loads. (a) The whole house is too much for the battery. (c) Array circuits are DC. (d) The meter is the utility's equipment."
      },
      {
        "module": 3,
        "q": "A string has 10 modules, each with a Vmp of 40 V and an Imp of 10 A. What are the string's voltage and current at maximum power?",
        "choices": [
          "40 V and 100 A",
          "400 V and 10 A",
          "400 V and 100 A",
          "40 V and 10 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Series adds voltage: 10 × 40 = 400 V; current stays 10 A. (a) 40 V and 100 A is parallel. (c) Both do not add in series. (d) 40 V and 10 A is one module."
      },
      {
        "module": 3,
        "q": "An inverter's datasheet shows its MPPT window is 200–500 V. A string's Vmp is 450 V on a hot day and 520 V on a cold morning. What is the problem?",
        "choices": [
          "The string is too short",
          "On a cold morning the string voltage is above the MPPT window, so the inverter cannot track it",
          "The inverter is too big",
          "The modules are the wrong color"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The string's voltage must stay inside the MPPT window in all conditions; 520 V is above it. (a) A short string would give low voltage. (c) Inverter size is not the problem. (d) Module color does not affect voltage."
      },
      {
        "module": 3,
        "q": "Two identical strings are installed on the same roof. One faces south and one faces west. On a summer morning, the south string makes 8 A and the west string makes 2 A. If both strings feed one MPPT input, what happens?",
        "choices": [
          "Each string makes its own maximum",
          "The shared MPPT forces a compromise, so the total is less than the two strings could make separately",
          "The west string makes 8 A too",
          "The inverter shuts down"
        ],
        "answer": 1,
        "explanation": "Correct: (b). One MPPT can only pick one operating point, so mismatched strings lose production. (a) Each string can only make its own maximum with its own MPPT. (c) The west string cannot match the south string in the morning. (d) The inverter does not shut down; it just produces less."
      },
      {
        "module": 3,
        "q": "During a roof inspection, a technician finds a module with a cracked backsheet and a dark burn mark near the junction box. What should be done?",
        "choices": [
          "Clean it and leave it",
          "Remove it from service and replace it — it is a fire and shock hazard",
          "Cover the crack with tape",
          "Move it to the end of the string"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A cracked backsheet with a burn mark is a fire and shock hazard and the module must be replaced. (a) Cleaning does not repair it. (c) Tape does not repair it. (d) Moving it does not make it safe."
      },
      {
        "module": 4,
        "q": "A house has a 6 kW array and a 5 kW inverter. At noon on a clear day the array could make 6 kW DC, but the meter shows 5 kW AC. What is happening?",
        "choices": [
          "The array is broken",
          "The inverter is clipping — it can only convert 5 kW, so the extra DC power is not used",
          "The sun is too weak",
          "The meter is wrong"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The inverter caps its output at its AC rating — that is clipping. (a) The array is fine; the inverter is the limit. (c) The sun is strong, not weak. (d) The meter is reading correctly."
      },
      {
        "module": 4,
        "q": "A string inverter's main weakness is:",
        "choices": [
          "It is too expensive",
          "One shaded module can drag down the whole string",
          "It has no MPPT",
          "It cannot connect to the grid"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A string shares one MPPT, so the weakest module limits it. (a) String inverters are cheapest per watt. (c) They have MPPT. (d) They connect to the grid."
      },
      {
        "module": 4,
        "q": "An inverter's display shows it is tracking at 380 V and 12 A, producing 4,560 W. A cloud passes and the voltage drops to 340 V while the current rises to 13 A. What is the inverter doing?",
        "choices": [
          "Failing",
          "Tracking the maximum power point as the conditions change",
          "Charging the battery",
          "Shutting down"
        ],
        "answer": 1,
        "explanation": "Correct: (b). MPPT continuously adjusts the operating point to harvest the most power as conditions change. (a) Changing voltage and current is normal tracking, not failure. (c) This is a grid-tied inverter with no battery. (d) The inverter is still producing power."
      },
      {
        "module": 4,
        "q": "A roof is partly shaded by a chimney in the afternoon. The owner wants the most production from the shaded area. Which inverter choice gives the best result?",
        "choices": [
          "A single string inverter for the whole roof",
          "Microinverters or optimizers, so each module is tracked independently",
          "A larger string inverter",
          "No inverter — direct DC"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Module-level electronics let each module make its own maximum, so shading affects only the shaded modules. (a) A single string inverter lets one shaded module drag the string down. (c) A larger inverter does not fix shading. (d) AC loads need an inverter."
      },
      {
        "module": 5,
        "q": "A PV system has a string of modules, a combiner box, an inverter, and a connection to the service panel. Which NEC article covers the PV system itself?",
        "choices": [
          "Article 210",
          "Article 690",
          "Article 760",
          "Article 800"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Article 690 governs solar photovoltaic systems. (a) Article 210 is branch circuits. (c) Article 760 is fire alarms. (d) Article 800 is communications circuits."
      },
      {
        "module": 5,
        "q": "A PV source circuit has a maximum current of 16 A. What is the minimum ampacity the conductor must be sized for?",
        "choices": [
          "16 A",
          "20 A",
          "12.8 A",
          "32 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 16 × 1.25 = 20 A minimum ampacity. (a) 16 A is the maximum current, not the sized current. (c) 12.8 A is 80% — too small. (d) 32 A is double the maximum current."
      },
      {
        "module": 5,
        "q": "The maximum PV DC voltage on a one- or two-family dwelling is:",
        "choices": [
          "300 V",
          "600 V",
          "1,000 V",
          "1,500 V"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 690.7 limits dwellings to 600 V. (a) 300 V is below the limit. (c) 1,000 V is the limit for other buildings. (d) 1,500 V exceeds the Article 690 limits."
      },
      {
        "module": 5,
        "q": "Rapid shutdown must drop controlled conductors outside the array to:",
        "choices": [
          "120 V or less",
          "30 V or less within 30 seconds",
          "600 V or less",
          "0 V instantly"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 690.12 requires 30 V or less within 30 seconds. (a) 120 V is still hazardous. (c) 600 V is the dwelling limit, not the shutdown limit. (d) The code allows 30 seconds."
      },
      {
        "module": 5,
        "q": "A designer has a string with an Isc of 8 A and wants to use a 15-amp fuse. The 125% sizing current is 10 A. Is the 15-amp fuse acceptable?",
        "choices": [
          "No — the fuse must be exactly 10 A",
          "Yes — the fuse must be rated at or above the 125% sizing current, and 15 A is the next standard size above 10 A",
          "No — the fuse must be 8 A",
          "Yes — any fuse works"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The overcurrent device is sized at or above the 125% current, using the next standard size. (a) Fuses are not made in every amp value. (c) An 8-amp fuse would be below the sizing current. (d) A fuse that is too large would not protect the conductor."
      },
      {
        "module": 6,
        "q": "A house has a PV system, a battery system, and the utility service all feeding the same panel. Which NEC article governs how these sources work together?",
        "choices": [
          "Article 690",
          "Article 705",
          "Article 760",
          "Article 517"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Article 705 governs interconnected electric power production sources. (a) Article 690 covers the PV system itself. (c) Article 760 is fire alarms. (d) Article 517 is health care facilities."
      },
      {
        "module": 6,
        "q": "A panel has a 225-amp busbar and a 200-amp main breaker. A PV system needs a 60-amp breaker. Does it fit under the 120% rule?",
        "choices": [
          "Yes — 200 + 60 = 260 A, and 120% of 225 is 270 A",
          "No — 200 + 60 = 260 A, which is over 225 A",
          "Yes — the rule only applies to the main breaker",
          "No — the busbar is too small for any PV"
        ],
        "answer": 0,
        "explanation": "Correct: (a). 120% of 225 = 270 A, and 200 + 60 = 260 A, which is within the limit. (b) The limit is 120% of the busbar, not the busbar itself. (c) The rule sums both breakers. (d) The busbar is large enough for a 60-amp PV breaker."
      },
      {
        "module": 6,
        "q": "A panel with a 200 A busbar and a 200 A main breaker allows a PV breaker up to:",
        "choices": [
          "20 A",
          "40 A",
          "60 A",
          "200 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 120% of 200 = 240; 240 − 200 = 40 A. (a) 20 A is below the maximum. (c) 60 A exceeds it. (d) 200 A far exceeds it."
      },
      {
        "module": 6,
        "q": "A PV installation is complete and inspected, but the utility has not yet installed the bi-directional meter. The homeowner asks the technician to turn the system on so they can see it work. What is the correct answer?",
        "choices": [
          "Turn it on — the inspection passed",
          "Wait for permission to operate and the bi-directional meter — the system must not export before the utility approves it",
          "Turn it on for one day only",
          "Turn it on but do not tell the utility"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Export before permission to operate violates the interconnection agreement and can endanger utility workers. (a) The inspection is not the utility's permission. (c) One day of export is still export without permission. (d) Hiding it does not make it allowed."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 120,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "module": 1,
        "q": "N-type silicon is doped with:",
        "choices": [
          "Boron",
          "Phosphorus",
          "Copper",
          "Glass"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Phosphorus adds spare electrons — n-type. (a) Boron makes p-type. (c) Copper is a conductor. (d) Glass is not a dopant."
      },
      {
        "module": 2,
        "q": "An off-grid cabin owner wants to run a refrigerator through three cloudy days with no sun. The refrigerator uses 1.5 kWh a day. How much usable battery energy is needed for those three days?",
        "choices": [
          "1.5 kWh",
          "4.5 kWh",
          "3 kWh",
          "0.5 kWh"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 3 days × 1.5 kWh = 4.5 kWh of usable energy. (a) 1.5 kWh is one day. (c) 3 kWh is two days. (d) 0.5 kWh is a third of one day."
      },
      {
        "module": 3,
        "q": "Two strings each have a Voc of 400 V and an Isc of 10 A. They are wired in parallel into one combiner box. What are the combined voltage and current?",
        "choices": [
          "800 V and 10 A",
          "400 V and 20 A",
          "800 V and 20 A",
          "400 V and 10 A"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Parallel adds current: 400 V stays, 10 + 10 = 20 A. (a) 800 V would be series. (c) Both do not add in parallel. (d) 10 A is one string."
      },
      {
        "module": 4,
        "q": "A homeowner's roof has a large tree that shades the east half of the roof every morning. The installer proposes microinverters. What is the advantage over one string inverter?",
        "choices": [
          "Microinverters are cheaper",
          "Each module is tracked on its own, so the shaded modules do not drag down the unshaded ones",
          "Microinverters need no wiring",
          "Microinverters work at night"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Each module has its own MPPT, so shading affects only the shaded modules. (a) Microinverters cost more per watt. (c) They need AC wiring. (d) No inverter makes power at night."
      },
      {
        "module": 5,
        "q": "A technician is wiring a PV combiner box and reaches for a standard AC-rated disconnect. Why must the disconnect be DC-rated instead?",
        "choices": [
          "DC disconnects are cheaper",
          "A DC arc does not self-extinguish at a zero crossing the way an AC arc does, so an AC disconnect can fail to break a DC circuit",
          "AC disconnects are too big",
          "The code requires red disconnects"
        ],
        "answer": 1,
        "explanation": "Correct: (b). DC has no zero crossing, so a DC arc can sustain itself and an AC-rated device may not break it. (a) Cost is not the reason. (c) Size is not the reason. (d) The code requires a DC rating, not a color."
      },
      {
        "module": 6,
        "q": "A panel's busbar is 200 A and its main breaker is 200 A. The PV system needs a 50-amp breaker. The 120% rule allows only 40 A on the load side. What is the correct next step?",
        "choices": [
          "Install the 50-amp breaker anyway",
          "Use a supply-side (line-side) connection ahead of the main breaker, or upgrade the panel",
          "Use a smaller inverter and lose the production",
          "Connect the PV directly to the meter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). When the 120% rule does not fit, a supply-side connection or a panel upgrade is the answer. (a) Installing it anyway violates the rule. (c) Shrinking the system is not required when a compliant connection exists. (d) The PV never connects directly to the meter."
      },
      {
        "module": 7,
        "q": "A 10 kWh lead-acid bank at 50% DoD provides:",
        "choices": [
          "10 kWh usable",
          "5 kWh usable",
          "20 kWh usable",
          "0 kWh usable"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 10 × 0.50 = 5 kWh usable. (a) 10 kWh is the nameplate. (c) 20 kWh is twice the nameplate. (d) The bank provides 5 kWh."
      },
      {
        "module": 7,
        "q": "A lithium battery's BMS reports one cell at 4.4 V while the others are at 3.6 V, and the BMS disconnects the battery. What happened?",
        "choices": [
          "The battery is fully charged",
          "One cell was over-voltage, so the BMS disconnected to protect it",
          "The inverter failed",
          "The array is too big"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The BMS monitors every cell and disconnects on over-voltage. (a) A fully charged cell would not be at 4.4 V while the others are at 3.6 V. (c) The inverter did not cause the cell voltage. (d) Array size does not cause one cell to overcharge."
      },
      {
        "module": 7,
        "q": "A battery system is installed in a garage. The installer is choosing where to put the batteries and the inverter. What does Article 706 require the installer to consider?",
        "choices": [
          "Only the color of the batteries",
          "Separation from living spaces, clearances, labeling, disconnects, and protection from damage and heat",
          "Only the price",
          "Nothing — batteries can go anywhere"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Article 706 covers energy storage installation, including separation, clearances, labeling, and disconnects. (a) Color is not a code requirement. (c) Price is not a code requirement. (d) Batteries cannot go anywhere — location is regulated."
      },
      {
        "module": 8,
        "q": "An MPPT charge controller harvests more than a PWM controller because it:",
        "choices": [
          "Is cheaper",
          "Lets the array run at its maximum power point and converts extra voltage into extra current",
          "Has no electronics",
          "Works at night"
        ],
        "answer": 1,
        "explanation": "Correct: (b). MPPT uses a DC-to-DC converter to capture the array's full power. (a) MPPT costs more. (c) MPPT has more electronics. (d) No controller works at night."
      },
      {
        "module": 8,
        "q": "A charge controller is charging a battery bank. The display shows the battery voltage rising steadily while the controller delivers its full current. Which charging stage is this?",
        "choices": [
          "Float",
          "Bulk",
          "Absorption",
          "Equalization"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In bulk, the controller delivers maximum current and the voltage rises. (a) In float, the voltage is held low and steady. (c) In absorption, the voltage is held steady while current tapers. (d) Equalization is a controlled overcharge for lead-acid, not the normal charging stage."
      },
      {
        "module": 8,
        "q": "A homeowner has a working grid-tied system with a string inverter and wants to add batteries for backup power. They do not want to replace the string inverter. What is the practical way to add the batteries?",
        "choices": [
          "DC coupling — replace the inverter with a hybrid",
          "AC coupling — add a separate battery inverter on the AC side",
          "Connect the batteries to the array directly",
          "No coupling is needed"
        ],
        "answer": 1,
        "explanation": "Correct: (b). AC coupling adds a battery inverter on the AC side and leaves the existing inverter in place. (a) DC coupling would require replacing the inverter. (c) Batteries never connect directly to the array. (d) A coupling method is always needed."
      },
      {
        "module": 9,
        "q": "A site in Michigan gets 4 peak sun hours a day in the annual average, but only 2 in December and 5 in June. A system sized from the annual average will:",
        "choices": [
          "Make the same power every month",
          "Make less than expected in winter and more in summer, so winter production must be checked for a system that must work year-round",
          "Make more in winter",
          "Fail in June"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Peak sun hours vary by season, so a system sized on the annual average underperforms in winter. (a) Production varies by month. (c) Winter production is lower, not higher. (d) The system does not fail in June."
      },
      {
        "module": 9,
        "q": "A customer uses 30 kWh a day at 5 PSH. The array size before losses is:",
        "choices": [
          "150 kW",
          "6 kW",
          "35 kW",
          "0.6 kW"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 30 ÷ 5 = 6 kW DC. (a) 150 is 30 × 5. (c) 35 is 30 + 5. (d) 0.6 is 30 ÷ 50."
      },
      {
        "module": 9,
        "q": "A designer is choosing between a south-facing roof and a west-facing roof for an array. The south roof gets more total sun, but the homeowner is home in the afternoon and wants power then. What should the designer explain?",
        "choices": [
          "South is always better",
          "South makes more total energy, but west makes more in the afternoon when the homeowner uses it — the choice depends on when the power is needed and the billing arrangement",
          "West is always better",
          "Roof direction does not matter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). South maximizes total energy; west shifts production to the afternoon. (a) South is not always better. (c) West is not always better. (d) Roof direction matters a great deal."
      },
      {
        "module": 10,
        "q": "A customer is comparing two utilities. One offers net metering, the other offers net billing. Under which arrangement is a battery more valuable, and why?",
        "choices": [
          "Net metering — the battery is worth more there",
          "Net billing — exports are credited at a lower rate, so storing daytime power for evening use is worth more",
          "Both are the same",
          "Neither — batteries are never valuable"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Under net billing, exported power earns less than imported power costs, so using stored power in the evening is worth more. (a) Under net metering, exports are credited near retail, so the battery adds less. (c) The arrangements are not the same. (d) Batteries are valuable under net billing."
      },
      {
        "module": 10,
        "q": "A PV system is installed, inspected, and the utility has given permission to operate, but the customer has not yet been shown how the monitoring app works. What should happen before handover?",
        "choices": [
          "Hand it over — the app is self-explanatory",
          "Show the customer how to read production, how to spot a problem, and who to call",
          "Turn the monitoring off",
          "Let the customer figure it out"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Handover includes teaching the customer to read the monitoring. (a) The app is not self-explanatory to a new owner. (c) Monitoring must stay on. (d) Leaving the customer to figure it out means faults will be found late."
      },
      {
        "module": 10,
        "q": "A permit application for a PV system lists the array layout, the stringing, the conductor sizes, and the disconnects. The inspector arrives and finds one string moved to a different roof face than the plans show. What happens?",
        "choices": [
          "It passes — the plans are only a guide",
          "The inspection fails, and the system or the plans must be corrected",
          "The inspector fixes it",
          "The utility approves it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The installation must match the plans or the plans must be revised and approved. (a) The plans are the approved design, not a guide. (c) The inspector does not fix installations. (d) The utility does not approve plan changes."
      },
      {
        "module": 11,
        "q": "A new PV system is ready for commissioning. Which test is done FIRST?",
        "choices": [
          "The inverter start-up",
          "The visual inspection — racking, flashing, wiring, disconnects, labels, and grounding against the plans",
          "The rapid shutdown test",
          "The production check"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Commissioning starts with a visual inspection against the plans. (a) The inverter is started after the inspection and electrical tests. (c) Rapid shutdown is verified after the visual inspection. (d) The production check comes last."
      },
      {
        "module": 11,
        "q": "An inverter's portal shows a fault code the technician has never seen. What is the correct first step?",
        "choices": [
          "Ignore it — the system is still making power",
          "Read the code, check the inverter's manual, and test the circuit the code points to",
          "Replace the inverter immediately",
          "Bypass the fault"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The fault code is the starting point — read it, check the manual, and test the circuit it points to. (a) Ignoring a fault code lets a fault grow. (c) Replacing the inverter before diagnosing wastes money. (d) Bypassing a fault is dangerous."
      },
      {
        "module": 11,
        "q": "A technician is called to a system that shut down with a ground fault. The technician finds a damaged DC conductor touching a grounded frame. What is the repair?",
        "choices": [
          "Bypass the ground-fault protection so the system runs again",
          "Replace the damaged conductor and restore the protection, then re-test",
          "Tape over the damage",
          "Turn the system off and leave it"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Find the damaged conductor, replace it, restore the protection, and re-test. (a) Bypassing protection is a fire risk. (c) Tape does not repair a damaged conductor. (d) Leaving it off is not a repair."
      },
      {
        "module": 12,
        "q": "A candidate is preparing for the NABCEP PV Associate exam and asks what it covers. Which answer is correct?",
        "choices": [
          "Only the NEC",
          "Safety, site assessment, design, installation, and performance/maintenance — the whole of this course",
          "Only battery chemistry",
          "Only sales"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The exam covers safety, site assessment, design, installation, and performance/maintenance. (a) The NEC is only part of it. (c) Battery chemistry is only one topic. (d) Sales is not on the exam."
      },
      {
        "module": 12,
        "q": "A student says they will pass the NABCEP PV Associate exam by getting 65% of the questions right. What is wrong with that statement?",
        "choices": [
          "Nothing — 65% is the passing score",
          "The passing score is a scaled score of 65 on a 0–99 scale, which is not a percentage of questions answered correctly",
          "The exam has no passing score",
          "The passing score is 70%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A scaled score is not a percentage — calling it 65% is wrong. (a) 65% is not the passing score. (c) The exam has a passing scaled score of 65. (d) 70% is not the passing score."
      },
      {
        "module": 12,
        "q": "A candidate passes the NABCEP PV Associate exam. What does the credential prove, and what does it NOT do?",
        "choices": [
          "It proves they understand PV fundamentals; it does not license them to install systems unsupervised",
          "It licenses them to install unsupervised",
          "It proves they are a master electrician",
          "It replaces the journeyman license"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The Associate is a knowledge credential and a first step. (b) It does not license unsupervised installation. (c) It is not a master electrician license. (d) It does not replace any state license."
      },
      {
        "module": 1,
        "q": "A module's datasheet shows its voltage drops by 0.3% for every degree Celsius above 25°C. On a hot roof the cell temperature reaches 65°C. About how much voltage is lost?",
        "choices": [
          "0.3%",
          "12%",
          "40%",
          "No voltage is lost"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 65 − 25 = 40 degrees × 0.3% = 12% voltage loss. (a) 0.3% is the loss per degree. (c) 40% is the temperature rise, not the loss. (d) Heat always lowers voltage."
      },
      {
        "module": 2,
        "q": "Off-grid design starts with:",
        "choices": [
          "The array size",
          "The load audit",
          "The roof color",
          "The inverter brand"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The load audit sizes the batteries, then the array. (a) The array is sized after the loads. (c) Roof color does not size a system. (d) The inverter is chosen after sizing."
      },
      {
        "module": 3,
        "q": "A fire inspector requires a 3-foot-wide pathway along the ridge of a roof with a PV array. The installer wants to cover the ridge with modules to fit more panels. What is the correct response?",
        "choices": [
          "Cover the ridge — more panels matter more",
          "Leave the pathway — the fire code requires firefighter access, and the array must be laid out around it",
          "Ask the homeowner to decide",
          "Cover the ridge but leave a note"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Firefighter access pathways are a fire code requirement. (a) More panels do not override the fire code. (c) The homeowner cannot override the fire code. (d) A note does not create access."
      },
      {
        "module": 4,
        "q": "A house has two roof faces: east and west. The installer proposes one string inverter with one MPPT input for both faces. What is the problem with this plan?",
        "choices": [
          "There is no problem",
          "The two faces make their maximum power at different times, so one MPPT input forces a compromise and loses production",
          "The inverter will overheat",
          "The strings will be too long"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Different roof directions need separate MPPT treatment. (a) There is a real problem. (c) Overheating is not the issue. (d) String length is not the issue."
      },
      {
        "module": 5,
        "q": "A PV system has its disconnect at the inverter, and the inverter is inside the garage. The fire department asks where the rapid shutdown initiation device is. What should the technician show them?",
        "choices": [
          "The main service disconnect",
          "The labeled rapid shutdown initiation device at a readily accessible location, usually at the service equipment",
          "The inverter's display",
          "The meter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The rapid shutdown initiation device must be labeled and readily accessible, usually at the service equipment. (a) The main service disconnect is not the rapid shutdown device. (c) The inverter's display is not the initiation device. (d) The meter is the utility's equipment."
      },
      {
        "module": 6,
        "q": "A utility installs a new meter after a PV system is interconnected. The homeowner notices the meter has two registers: one for power in, one for power out. What is this meter?",
        "choices": [
          "A standard meter",
          "A bi-directional meter, recording both imports and exports",
          "A broken meter",
          "A battery meter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A bi-directional meter records flow in both directions. (a) A standard meter records imports only. (c) The meter is working correctly. (d) A battery meter measures the battery, not the grid."
      },
      {
        "module": 7,
        "q": "A homeowner asks why their 10 kWh battery only gives them 8 kWh of backup power. What is the correct explanation?",
        "choices": [
          "The battery is broken",
          "The battery's usable energy is its nameplate capacity times its allowed depth of discharge — 10 kWh at 80% DoD is 8 kWh usable",
          "The inverter is stealing power",
          "The array is too small"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Usable energy = nameplate × DoD. (a) The battery is working as designed. (c) The inverter is not stealing power. (d) Array size does not change the battery's usable energy."
      },
      {
        "module": 8,
        "q": "A charge controller's display shows the battery at its full voltage and the current slowly falling toward zero. Which charging stage is this, and what is happening?",
        "choices": [
          "Bulk — maximum current",
          "Absorption — the voltage is held steady while the current tapers as the battery fills",
          "Float — the battery is disconnected",
          "The controller has failed"
        ],
        "answer": 1,
        "explanation": "Correct: (b). In absorption, voltage is held steady and current tapers as the battery fills. (a) Bulk is maximum current with rising voltage. (c) Float holds a lower voltage after the battery is full. (d) Tapering current is normal, not a failure."
      },
      {
        "module": 9,
        "q": "A homeowner uses 900 kWh a month and the site gets 3 peak sun hours a day. Using the simple sizing method with a 20% loss margin, about what size array is needed?",
        "choices": [
          "6 kW",
          "10 kW",
          "12 kW",
          "30 kW"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Daily use is 30 kWh; 30 ÷ 3 = 10 kW before losses; 10 × 1.20 = 12 kW with the margin. (a) 6 kW is half the need. (b) 10 kW is before the loss margin. (d) 30 kW is the daily use, not the array size."
      },
      {
        "module": 10,
        "q": "A customer is told their system will be switched on the day the panels are installed. The installer says it will actually be switched on weeks later. Why?",
        "choices": [
          "The installer is slow",
          "The system needs the electrical inspection and the utility's permission to operate, which take time after installation",
          "The panels need to cure",
          "The sun is not ready"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Installation is followed by inspection and permission to operate, which take time. (a) The installer is not slow — the process takes time. (c) Panels do not need to cure. (d) The sun is not the reason."
      },
      {
        "module": 11,
        "q": "A system's monitoring shows production dropping slowly over six months, with no fault codes. The modules look dirty. What is the most likely cause and the fix?",
        "choices": [
          "The inverter is failing — replace it",
          "Soiling — dirt and pollen on the modules — clean them and check the production recovers",
          "The array is too small",
          "The meter is broken"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A slow decline with no fault codes and visibly dirty modules points to soiling. (a) An inverter failure would show a fault code or a sudden drop. (c) Array size does not change over six months. (d) The meter does not affect production."
      },
      {
        "module": 12,
        "q": "A candidate has 2 hours for 70 questions on the NABCEP PV Associate exam. They spend 5 minutes on the first question. What should they do?",
        "choices": [
          "Keep going at that pace",
          "Move on — at about 100 seconds per question, 5 minutes on one question wastes the exam",
          "Skip the rest of the exam",
          "Guess on all remaining questions"
        ],
        "answer": 1,
        "explanation": "Correct: (b). At exam pace, 5 minutes on one question is far too long. (a) That pace would leave most questions unanswered. (c) Skipping the rest guarantees failure. (d) Guessing on everything wastes the questions the candidate could answer."
      },
      {
        "module": 3,
        "q": "A module's junction box is cracked and water has entered it. The module still makes power. What should be done?",
        "choices": [
          "Leave it — it still works",
          "Remove the module from service and replace it — a cracked junction box is a shock and fire hazard",
          "Seal it with silicone and keep using it",
          "Move it to the bottom of the string"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A cracked junction box with water inside is a shock and fire hazard. (a) Working does not mean safe. (c) Silicone does not repair a cracked junction box. (d) Moving it does not make it safe."
      },
      {
        "module": 4,
        "q": "A homeowner wants backup power during outages and a system that also works with their existing string inverter. Which inverter approach fits?",
        "choices": [
          "A string inverter only",
          "A hybrid inverter with battery management, or an AC-coupled battery inverter added to the existing system",
          "A microinverter only",
          "No inverter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A hybrid inverter manages batteries and backup, and AC coupling adds a battery inverter to an existing string inverter. (a) A string inverter alone gives no backup. (c) A microinverter alone gives no backup. (d) AC loads need an inverter."
      },
      {
        "module": 5,
        "q": "A designer calculates a string's voltage at 25°C as 480 V, but the site's record low temperature is far below freezing. What must the designer do next?",
        "choices": [
          "Use the 25°C value — it is the standard",
          "Apply the temperature correction for the coldest expected temperature and check the result against the 600 V dwelling limit and the inverter's maximum",
          "Ignore the cold — it is rare",
          "Shorten the string without calculating"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Cold increases voltage, so the string must be calculated at the coldest expected temperature and checked against the limits. (a) The 25°C value is the STC rating, not the cold-weather value. (c) Rare cold is still a code requirement. (d) Shortening without calculating is guessing."
      },
      {
        "module": 6,
        "q": "Article 705 works with Articles 690 and 706 because:",
        "choices": [
          "They are all about fire alarms",
          "690 covers the PV system, 705 the interconnection, 706 the batteries",
          "They are the same article",
          "They are all about data cabling"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 690 is the PV system, 705 is the interconnection, 706 is storage. (a) Fire alarms are Article 760. (c) They are three articles. (d) Data cabling is Article 800."
      }
    ]
  }
};
