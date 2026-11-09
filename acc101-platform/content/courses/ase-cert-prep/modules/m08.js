module.exports = {
  "number": 8,
  "slug": "a7-hvac-review",
  "title": "A7 Review — Heating & Air Conditioning",
  "estTime": "3–4 hours",
  "objectives": [
    "Trace refrigerant through the refrigeration cycle and name what each component does.",
    "Read A/C gauge pressures and match the pattern to the fault.",
    "Explain the difference between R-134a and R-1234yf service and the EPA 609 rules.",
    "Diagnose heating faults and automatic climate-control faults.",
    "Score the A7 practice exam timed (50 questions, 75 minutes) at the 70% benchmark."
  ],
  "sections": [
    {
      "heading": "The Refrigeration Cycle — Four Stops, One Loop",
      "html": "<p>The refrigeration cycle moves heat from the cabin to the outside air in four steps. The <strong>compressor</strong> squeezes low-pressure vapor into high-pressure, high-temperature vapor. The <strong>condenser</strong> (in front of the radiator) lets that vapor give up its heat to the outside air and condense into a high-pressure liquid. The <strong>expansion device</strong> — an orifice tube or a thermostatic expansion valve — drops the pressure, and the liquid flashes cold. The <strong>evaporator</strong> (inside the dash) lets the cold liquid absorb heat from the cabin air and boil back into a low-pressure vapor, and the blower pushes the cooled air into the cabin.</p><p>Two details the exam returns to: the receiver-drier (or accumulator) holds spare refrigerant and traps moisture, and moisture is the enemy — it freezes at the expansion device and it forms acid with refrigerant. That is why the system is evacuated before charging: vacuuming boils the moisture out. And the compressor is the heart — it does not make cold, it moves heat, and a compressor that cannot pump shows up as equalized pressures on the gauges.</p><p><div class=\"callout\"><strong>Key idea:</strong> The compressor moves heat; it does not make cold. Cold is what happens at the evaporator when low-pressure liquid boils — and that boiling is what pulls heat out of the cabin air.</div></p>"
    },
    {
      "heading": "Gauge Readings — the Pattern Is the Diagnosis",
      "html": "<p>A manifold gauge set reads the low side (suction, evaporator pressure) and the high side (discharge, condenser pressure). Normal readings with the system running are a low side well below the high side, with the exact numbers depending on ambient temperature — the exam gives you the pattern, not a memorized number. Both sides high means the condenser cannot shed heat (blocked airflow, a failed fan, or an overcharge). Both sides low means low charge. Low side low and high side high means a restriction — the expansion device or a blocked line is starving the evaporator while the compressor builds pressure behind the blockage.</p><p>Equalized pressures with the compressor running mean the compressor is not pumping — a failed compressor or a clutch that is not engaging. A low side that drops into a vacuum and then recovers, over and over, means moisture freezing at the expansion device: the ice blocks flow, the low side drops, the ice melts, flow returns, and the cycle repeats. A clutch that cycles rapidly usually means low charge — the low-pressure switch is cutting the compressor out to protect it.</p><p><div class=\"callout\"><strong>Key idea:</strong> Read the pair, not one gauge. Both high = cannot shed heat. Both low = low charge. Low side low + high side high = restriction. Equal = compressor not pumping.</div></p>"
    },
    {
      "heading": "Refrigerants, EPA 609, and R-1234yf",
      "html": "<p>R-134a was the standard automotive refrigerant for years; many newer vehicles use R-1234yf, which has a much lower global-warming potential. The two are <strong>not interchangeable</strong> — the service fittings are different sizes precisely so they cannot be mixed, and the oils are different too. A system must be serviced with the refrigerant on its underhood label, and mixing refrigerants contaminates the system and the recovery equipment.</p><p>EPA 609 is the rule that governs automotive A/C service: a technician must be certified to buy refrigerant and to service motor-vehicle A/C, and refrigerant must be recovered, not vented to the atmosphere. Venting is illegal — the refrigerant goes into a recovery machine, is recycled or reclaimed, and the system is leak-checked before it is recharged. Leak detection uses an electronic detector, ultraviolet dye, or nitrogen pressure testing; a system that is low on charge has a leak, and topping it up without finding the leak is a temporary fix that the exam treats as the wrong answer.</p><p><div class=\"callout\"><strong>Key idea:</strong> A system that is low has a leak. Find it, fix it, then charge it. Topping up without a leak check is the A7 equivalent of changing the fluid on a slipping transmission.</div></p>"
    },
    {
      "heading": "Heating and Automatic Climate Control",
      "html": "<p>Heat comes from the engine: hot coolant flows through the heater core, and the blower pushes cabin air through it. No heat with a warm engine means no hot coolant is reaching the core — low coolant, a stuck-open thermostat, or a blocked core — or the blend door is not moving. A heater that blows hot on one side and cold on the other usually means a blend-door or dual-zone actuator fault, not a coolant problem.</p><p>Automatic climate control adds sensors and a computer: cabin temperature sensors, sunload sensors, and actuators that move blend, mode, and recirculation doors. A fault here is diagnosed like any electrical fault — scan for codes, check the actuator's command against its actual position, and test the sensor's reading against a thermometer. A clicking noise behind the dash on startup is a stripped blend-door actuator gear, and it is one of the most common climate-control complaints in the bay.</p><p><div class=\"callout\"><strong>Key idea:</strong> No heat + cold upper hose = coolant or thermostat. No heat + hot hoses = blend door. Hot one side, cold the other = dual-zone actuator. The hoses tell you which system you are in.</div></p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> compressor, condenser, expansion device, evaporator — in that order; read gauge pairs, not single gauges; R-134a and R-1234yf do not mix; EPA 609 means recover, do not vent; a low system has a leak.</p><p>The A7 exam is 50 questions in 75 minutes. The gauge questions give you a pattern and ask for the fault — say the pattern out loud before you read the choices. And the refrigerant questions reward remembering the label: service the system with what is on it, not what is in the shop.</p><p><div class=\"callout\"><strong>Key idea:</strong> Common mistake: adding refrigerant to a low system without finding the leak. The leak is the fault; the low charge is the symptom. The exam's 'most likely' answer is the leak check, not the top-up.</div></p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Compressor",
      "def": "Squeezes low-pressure vapor into high-pressure, high-temperature vapor; the heart of the cycle."
    },
    {
      "term": "Condenser",
      "def": "Releases heat from the refrigerant to the outside air, condensing vapor into liquid."
    },
    {
      "term": "Evaporator",
      "def": "Absorbs heat from cabin air as cold liquid refrigerant boils into vapor."
    },
    {
      "term": "Expansion device",
      "def": "Orifice tube or expansion valve that drops refrigerant pressure so it flashes cold."
    },
    {
      "term": "Receiver-drier",
      "def": "Holds spare refrigerant and traps moisture on systems with an expansion valve."
    },
    {
      "term": "Accumulator",
      "def": "Holds spare refrigerant and traps moisture on systems with an orifice tube."
    },
    {
      "term": "R-134a",
      "def": "The long-standard automotive refrigerant; not interchangeable with R-1234yf."
    },
    {
      "term": "R-1234yf",
      "def": "Newer automotive refrigerant with much lower global-warming potential; different fittings and oil from R-134a."
    },
    {
      "term": "EPA 609",
      "def": "The rule requiring certification to service motor-vehicle A/C and prohibiting venting refrigerant."
    },
    {
      "term": "Manifold gauge set",
      "def": "Reads low-side and high-side pressures; the pair is the diagnosis."
    },
    {
      "term": "Blend door",
      "def": "Directs air through or around the heater core to set cabin temperature."
    },
    {
      "term": "Blower motor",
      "def": "Pushes cabin air through the evaporator and heater core."
    },
    {
      "term": "Low-pressure switch",
      "def": "Cuts the compressor out when charge is low, to protect it from running without refrigerant and oil."
    },
    {
      "term": "UV dye",
      "def": "Fluorescent dye added to the system; leaks glow under ultraviolet light."
    }
  ],
  "video": {
    "title": "How Car Air Conditioning Works",
    "embedUrl": "https://www.youtube.com/embed/KOK79qYMSUE",
    "note": "The car A/C system step by step: compressor, condenser, expansion valve, evaporator, and the refrigerant cycle, covering R-12, R-134a, and R-1234yf.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Gauge pattern.</strong> A 2018 Honda Civic's A/C blows warm. Gauges show low side low and high side high, and the evaporator is barely cold. What is the fault?</p>",
      "solution": "<p><strong>Answer:</strong> A restriction — most likely the expansion device or a blocked line. Step 1: low side low means the evaporator is starved. Step 2: high side high means the compressor is building pressure behind a blockage. Step 3: the restriction is between the two gauges — the expansion device is the usual suspect; check for a clogged orifice tube or a failed expansion valve.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Both sides high.</strong> A 2017 Ford F-150's A/C blows warm in traffic but cools on the highway. Both gauges read high. What is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> The condenser cannot shed heat at low speed — a failed cooling fan or blocked airflow. Step 1: on the highway, ram air cools the condenser and the system works. Step 2: in traffic there is no ram air, so the fan must do the work. Step 3: check the condenser fan operation and the condenser fins for blockage before touching the refrigerant.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Equal pressures.</strong> A 2019 Toyota Corolla's A/C compressor clutch is engaged, but both gauges read the same pressure. What does that mean?</p>",
      "solution": "<p><strong>Answer:</strong> The compressor is not pumping. Step 1: a working compressor creates a pressure difference — low side low, high side high. Step 2: equal pressures with the clutch engaged mean the compressor's internals have failed (or the clutch is slipping). Step 3: confirm the clutch is actually turning the compressor shaft, then condemn the compressor.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — Cycling clutch.</strong> A 2016 Chevrolet Malibu's A/C clutch engages for a few seconds, cuts out, then engages again, over and over. The air is cool but not cold. What is the most likely cause?</p>",
      "solution": "<p><strong>Answer:</strong> Low refrigerant charge. Step 1: the low-pressure switch cuts the compressor out when suction pressure falls too low, to protect it. Step 2: low charge makes the pressure fall fast, so the switch cycles rapidly. Step 3: find the leak with a detector or dye — the system is low because it leaked, and topping up without a leak check is not the fix.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — No heat.</strong> A 2018 Nissan Altima blows cold air with the engine fully warm. The upper radiator hose is hot and the lower hose is hot. What is the most likely fault?</p>",
      "solution": "<p><strong>Answer:</strong> The blend door is not moving — hot coolant is reaching the heater core, but the air is not being routed through it. Step 1: hot hoses mean coolant is circulating and the thermostat is working. Step 2: the fault is on the air side — a blend-door actuator or the door itself. Step 3: scan for climate-control codes and listen for the actuator moving when the temperature setting changes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Refrigerant choice.</strong> A 2021 Honda Accord's underhood label says R-1234yf. The shop has R-134a on hand. Can it be used? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> No. Step 1: R-134a and R-1234yf are not interchangeable — different fittings, different oils, different properties. Step 2: the fittings are deliberately different sizes so they cannot be mixed. Step 3: service the system with the refrigerant on its label, and recover the R-1234yf properly — venting it is illegal under EPA 609.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In the refrigeration cycle, what does the condenser do?",
      "choices": [
        "It compresses the vapor",
        "It releases heat to the outside air and condenses vapor into liquid",
        "It drops the pressure",
        "It absorbs heat from the cabin"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The condenser sheds the heat the compressor added, so the vapor condenses into liquid. (a) is wrong: the compressor compresses the vapor. (c) is wrong: the expansion device drops the pressure. (d) is wrong: the evaporator absorbs heat from the cabin."
    },
    {
      "q": "Gauges show low side low and high side high. What is the fault?",
      "choices": [
        "Low charge",
        "A restriction — the expansion device or a blocked line",
        "A failed condenser fan",
        "A compressor that is not pumping"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The evaporator is starved (low side low) while pressure builds behind the blockage (high side high). (a) is wrong: low charge gives both sides low. (c) is wrong: a failed fan gives both sides high. (d) is wrong: a dead compressor gives equal pressures."
    },
    {
      "q": "Both gauges read high and the A/C cools on the highway but not in traffic. What is most likely?",
      "choices": [
        "Low charge",
        "The condenser cannot shed heat — a failed fan or blocked airflow",
        "A restriction",
        "A bad compressor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Highway ram air cools the condenser, so the system works; in traffic the fan must do it, and it is not. (a) is wrong: low charge gives both sides low. (c) is wrong: a restriction gives low side low and high side high. (d) is wrong: a bad compressor gives equal pressures."
    },
    {
      "q": "The compressor clutch is engaged but both gauges read the same pressure. What does that mean?",
      "choices": [
        "The system is overcharged",
        "The compressor is not pumping",
        "The expansion valve is stuck open",
        "The system has a leak"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A working compressor creates a pressure difference; equal pressures with the clutch engaged mean it is not pumping. (a) is wrong: overcharge gives both sides high. (c) is wrong: a stuck-open valve floods the evaporator and gives a high low-side reading, not equal pressures. (d) is wrong: a leak gives low readings, not equal ones."
    },
        {
      "q": "A shop’s recovery machine is set up for R-134a, and a car arrives with R-1234yf. What is the correct call?",
      "choices": [
        "Use the R-134a machine — the refrigerants are interchangeable",
        "Do not service it with R-134a equipment — different fittings, oils, and properties; use R-1234yf equipment",
        "Top it off with R-134a just this once",
        "R-1234yf is just a new name for R-134a, so proceed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The two refrigerants are not interchangeable — different fittings exist precisely to prevent mixing, and the oils differ. (a) is wrong: they are not interchangeable. (c) is wrong: mixing contaminates the system and the recovery equipment. (d) is wrong: they are chemically different refrigerants."
    },
    {
      "q": "Under EPA 609, a technician servicing motor-vehicle A/C must:",
      "choices": [
        "Vent the old refrigerant to the air",
        "Be certified, and recover the refrigerant rather than venting it",
        "Use any refrigerant on hand",
        "Work without a recovery machine"
      ],
      "answer": 1,
      "explanation": "Correct: (b). EPA 609 requires certification to service motor-vehicle A/C and prohibits venting — refrigerant must be recovered. (a) is wrong: venting is illegal. (c) is wrong: the system must be serviced with the refrigerant on its label. (d) is wrong: recovery requires a recovery machine."
    },
    {
      "q": "A system is low on charge. What is the correct first step?",
      "choices": [
        "Top it up and send the car out",
        "Find the leak, fix it, then charge the system",
        "Replace the compressor",
        "Add dye and send the car out"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A low system has a leak; the leak is the fault and the low charge is the symptom. (a) is wrong: topping up without a leak check is a temporary fix. (c) is wrong: the compressor is not the cause of a low charge. (d) is wrong: dye finds the leak, but the leak still has to be fixed before charging."
    },
    {
      "q": "An engine is warm and both heater hoses are hot, but the cabin blows cold. What is most likely?",
      "choices": [
        "A stuck-open thermostat",
        "A blend door that is not moving",
        "Low coolant",
        "A blocked heater core"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hot hoses mean hot coolant reaches the core, so the fault is on the air side — the blend door. (a) is wrong: a stuck-open thermostat leaves the hoses cool. (c) is wrong: low coolant leaves the core starved and the hoses uneven. (d) is wrong: a blocked core leaves the return hose cold."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — A7 Review: Quick Reference</h3>\n<p><strong>Core idea:</strong> Compressor, condenser, expansion device, evaporator — in that order. Read gauge pairs, not single gauges.</p>\n<p><strong>Gauge map:</strong> both high = cannot shed heat · both low = low charge · low side low + high side high = restriction · equal = compressor not pumping.</p>\n<div class=\"formula\">R-134a ≠ R-1234yf &nbsp;|&nbsp; EPA 609: certified, recover, do not vent &nbsp;|&nbsp; Low system = leak &nbsp;|&nbsp; Hot hoses + cold cabin = blend door</div>\n<p><strong>A7 exam:</strong> 50 questions, 75 minutes, 90 seconds a question, 70% practice benchmark. Say the gauge pattern out loud before reading the choices.</p>\n<p><strong>Self-check:</strong> Trace the refrigerant through all four components from memory, then explain why a low system always means a leak.</p>\n"
};
