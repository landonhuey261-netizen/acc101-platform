// ase-a6 - Module 4: Charging Systems
module.exports = {
  "number": 4,
  "slug": "charging-systems",
  "title": "Charging Systems",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what the charging system does and name its parts.",
    "Describe how the alternator makes electricity from the spinning engine.",
    "Explain what the voltage regulator does and why it matters.",
    "Describe how the battery and the alternator share the work.",
    "Diagnose charging faults: dead battery, warning light, and overcharging."
  ],
  "sections": [
    {
      "heading": "What the Charging System Does",
      "html": "<p>Once the engine is running, the charging system takes over as the car's electrical source. Its jobs are to <strong>power all the electrical loads</strong> — lights, ignition, fuel pump, computers, heater fan — while the engine runs, and to <strong>recharge the battery</strong>, replacing the energy the starter took. If the charging system fails, the car runs on the battery alone, and the battery will run down — usually within a short drive, as the loads drain it.</p>\n<p>The charging system's parts are few: the <strong>alternator</strong>, driven by a belt from the engine; the <strong>voltage regulator</strong>, which controls how much the alternator charges; the <strong>battery</strong>, which stores the energy; and the wiring, fuses, and warning light that connect them. The belt is part of the system too — a slipping or broken belt stops the alternator, and the car runs on battery power until the battery dies.</p>"
    },
    {
      "heading": "How the Alternator Works",
      "html": "<p>An alternator makes electricity by spinning a magnet inside a coil of wire — the same principle as a generator, but built for a car. The engine's belt spins the alternator's rotor (the magnet) inside the stator (the coils), and the spinning magnetic field makes alternating current in the coils. That alternating current is then turned into direct current by the <strong>rectifier</strong>, a set of diodes that let current flow in only one direction, because the car's electrical system runs on direct current.</p>\n<p>The alternator's output rises with engine speed: at idle it makes less, at cruising speed it makes more. That is why the voltage regulator is needed — without it, the alternator would overcharge the battery at high speed and undercharge it at idle. The regulator watches the system's voltage and adjusts the alternator's output to hold it steady, whatever the engine speed and whatever loads are switched on.</p>"
    },
    {
      "heading": "The Voltage Regulator and the Warning Light",
      "html": "<p>The <strong>voltage regulator</strong> is the charging system's brain. It controls the current to the alternator's rotor, strengthening or weakening the magnetic field to raise or lower the output. When loads switch on — headlights, the heater fan, the rear defroster — the regulator raises the output to match. When the battery is full and the loads are light, it backs the output down so the battery is not overcharged. Overcharging boils the battery's electrolyte away and damages it; undercharging leaves it flat.</p>\n<p>The <strong>charging warning light</strong> (the battery symbol on the dashboard) is wired to tell you when the alternator is not charging. It comes on when the ignition is switched on and the engine is off — normal — and it should go out once the engine is running and the alternator is charging. A light that stays on while driving means the alternator is not charging: a broken belt, a failed alternator, or a wiring fault. A light that never comes on at all can mean a burned-out bulb — and on some cars the bulb is part of the charging circuit, so a dead bulb can stop the alternator from charging.</p>"
    },
    {
      "heading": "Diagnosing Charging Faults",
      "html": "<p>Charging faults show up in three ways. <strong>A dead battery that keeps going flat:</strong> test the battery first, then test the charging system — measure the system voltage with the engine running and loads on, and compare it with what the service information says it should be. If the voltage is low, the alternator is undercharging; if it is high, the regulator has failed and the system is overcharging. <strong>The warning light on while driving:</strong> check the belt first — a slipping or broken belt is the cheapest cause — then the wiring, then the alternator. <strong>A battery that boils dry or smells of acid:</strong> the system is overcharging, and the regulator is the prime suspect.</p>\n<p>Always test the belt and the connections before condemning the alternator. A slipping belt, a corroded battery terminal, or a loose alternator output wire all look like a failed alternator on a voltmeter, and all cost far less to fix. The alternator is the most expensive part in the system — it should be the last suspect, not the first.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>The charging system powers the loads while the engine runs and recharges the battery.</li>\n<li>The alternator spins a magnet inside coils to make alternating current, and the rectifier turns it into direct current.</li>\n<li>The voltage regulator holds the system's voltage steady by adjusting the alternator's output — preventing both overcharging and undercharging.</li>\n<li>The warning light should come on with the ignition and go out once the engine runs and the alternator charges.</li>\n<li>Patterns: battery keeps going flat = undercharging; warning light on = belt, wiring, or alternator; battery boiling dry = overcharging, regulator suspect.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Replacing the alternator when the real fault is a slipping belt. Check the belt's tension and condition first — a slipping belt is the cheapest cause of a charging fault.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain what the regulator does and what a charging warning light means, you have this module. Module 5 moves to the loads themselves: lighting and accessories.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Alternator",
      "def": "The belt-driven generator that powers the car's electrical loads while the engine runs and recharges the battery."
    },
    {
      "term": "Voltage regulator",
      "def": "The part that controls the alternator's output to hold the system's voltage steady, preventing overcharging and undercharging."
    },
    {
      "term": "Rectifier",
      "def": "The set of diodes in the alternator that turns its alternating current into the direct current the car uses."
    },
    {
      "term": "Rotor",
      "def": "The spinning magnet inside the alternator, driven by the belt from the engine."
    },
    {
      "term": "Stator",
      "def": "The coils of wire inside the alternator that the spinning rotor's magnetic field makes current in."
    },
    {
      "term": "Diode",
      "def": "A one-way valve for electricity: it lets current flow in one direction only."
    },
    {
      "term": "Alternating current (AC)",
      "def": "Current that flows back and forth, reversing direction; what the alternator's coils make before the rectifier."
    },
    {
      "term": "Direct current (DC)",
      "def": "Current that flows in one direction only; what a car's electrical system runs on."
    },
    {
      "term": "Charging warning light",
      "def": "The battery symbol on the dashboard that comes on when the alternator is not charging."
    },
    {
      "term": "Overcharging",
      "def": "The alternator putting out too much voltage, boiling the battery's electrolyte away and damaging it."
    },
    {
      "term": "Undercharging",
      "def": "The alternator putting out too little voltage, leaving the battery flat."
    },
    {
      "term": "Drive belt",
      "def": "The belt from the engine that spins the alternator; a slipping or broken belt stops the charging system."
    },
    {
      "term": "Battery electrolyte",
      "def": "The acid-and-water liquid inside the battery; overcharging boils it away."
    },
    {
      "term": "System voltage",
      "def": "The voltage of the car's electrical system while the engine runs, held steady by the regulator."
    }
  ],
  "video": {
    "title": "How Alternators Work - Automotive Electricity Generator",
    "embedUrl": "https://www.youtube.com/embed/jdSKlg80DjU",
    "note": "The Engineering Mindset shows how an alternator makes electricity and how the regulator controls it. Watch the rotor spin inside the stator and the rectifier turn the output into direct current — that is the heart of this module.",
    "more": [
      {
        "title": "ALTERNATORS & BATTERIES | How They Work",
        "url": "https://www.youtube.com/watch?v=nuLl_Z9_T9E"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A car runs fine for a short drive, then dies and will not restart. The battery is flat. What is the most likely system at fault, and why does the car run at all before it dies?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The charging system has failed — the alternator is not charging. Step 2: The car runs on the battery alone, powering the ignition and the loads. Step 3: The battery drains as the loads use its stored energy, and when it is flat the ignition stops and the car dies. Step 4: The battery is the victim, not the cause — test the charging system.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Explain what the voltage regulator does, and what happens if it fails in each direction.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The regulator holds the system's voltage steady by adjusting the alternator's output. Step 2: If it fails and the output stays too high, the system overcharges — the battery's electrolyte boils away and the battery is damaged. Step 3: If it fails and the output stays too low, the system undercharges — the battery goes flat.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The charging warning light stays on while the engine is running. List the checks in order, cheapest first.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Check the drive belt — is it present, tight, and in good condition? A slipping or broken belt is the cheapest cause. Step 2: Check the wiring and connections at the alternator and the battery. Step 3: Measure the system voltage with the engine running. Step 4: Only then suspect the alternator itself.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why does the charging warning light come on when the ignition is switched on with the engine off, and why should it go out once the engine runs?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: With the engine off the alternator is not spinning, so it is not charging — the light correctly shows that. Step 2: Once the engine runs, the alternator should be charging, so the light should go out. Step 3: A light that stays on while driving means the alternator is not charging.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A battery keeps going flat, but the battery passes a load test. What should you test next, and what are you looking for?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Test the charging system — measure the system voltage with the engine running and the loads on. Step 2: Compare the reading with what the service information says it should be. Step 3: A reading that is too low means undercharging; a reading that is too high means overcharging. Either way, the charging system is the fault, not the battery.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> The alternator's output rises with engine speed. Why does that make a voltage regulator necessary?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: At idle the alternator makes less, and at cruising speed it makes more. Step 2: Without a regulator, the voltage would swing with engine speed — too low at idle, too high at speed. Step 3: The regulator adjusts the output to hold the voltage steady, whatever the speed and whatever loads are on.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The charging system's jobs are to:",
      "choices": [
        "Start the engine and pump the fuel",
        "Power the electrical loads while the engine runs and recharge the battery",
        "Cool the engine and light the road",
        "Open the windows and run the radio"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Powering the loads and recharging the battery are the charging system's two jobs. (a) Starting is the starter's job. (c) Cooling and lighting are separate systems. (d) Windows and radio are loads, not the charging system's job."
    },
    {
      "q": "The alternator makes electricity by:",
      "choices": [
        "Burning fuel",
        "Spinning a magnet inside coils of wire",
        "Storing charge in plates",
        "Pumping oil"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The spinning rotor's magnetic field makes current in the stator coils. (a) The alternator does not burn fuel. (c) Storing charge is the battery's job. (d) The oil pump moves oil."
    },
    {
      "q": "The rectifier's job is to:",
      "choices": [
        "Turn the alternator's alternating current into direct current",
        "Spin the rotor",
        "Regulate the voltage",
        "Drive the belt"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Diodes let current flow in one direction only, turning AC into DC. (b) The belt spins the rotor. (c) The regulator controls the voltage. (d) The engine drives the belt."
    },
    {
      "q": "The voltage regulator prevents:",
      "choices": [
        "Both overcharging and undercharging, by adjusting the alternator's output to hold the voltage steady",
        "The engine from overheating",
        "The brakes from wearing",
        "The tires from going flat"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The regulator holds the voltage steady whatever the speed and the loads. (b) Cooling is the cooling system's job. (c) Brakes are a separate system. (d) Tires are a separate system."
    },
    {
      "q": "The charging warning light should:",
      "choices": [
        "Stay on all the time",
        "Come on with the ignition and the engine off, and go out once the engine runs and the alternator charges",
        "Never come on",
        "Flash when the fuel is low"
      ],
      "answer": 1,
      "explanation": "Correct: (b). On with the ignition and the engine off is normal; out once running means the alternator is charging. (a) A light that stays on means the alternator is not charging. (c) A light that never comes on can mean a burned-out bulb. (d) The fuel gauge warns about fuel, not the charging light."
    },
    {
      "q": "A battery that keeps going flat but passes a load test most likely means:",
      "choices": [
        "The battery is too big",
        "The charging system is undercharging",
        "The tires are low",
        "The radio is too loud"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A healthy battery that keeps going flat is not being recharged — test the charging system. (a) A big battery holds more charge, not less. (c) Tires do not drain the battery. (d) The radio is a small load and does not flatten a healthy battery on its own."
    },
    {
      "q": "A slipping drive belt can cause:",
      "choices": [
        "The alternator to stop charging, so the car runs on the battery until it dies",
        "The engine to overheat only",
        "The brakes to fail",
        "The headlights to get brighter"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The belt drives the alternator; a slipping belt means the alternator spins too slowly or not at all. (b) A slipping belt can also affect the water pump, but the charging failure is the point here. (c) Brakes are a separate system. (d) A slipping belt dims the lights, it does not brighten them."
    },
    {
      "q": "Overcharging damages the battery by:",
      "choices": [
        "Freezing the electrolyte",
        "Boiling the electrolyte away",
        "Making the battery bigger",
        "Charging it too fast once"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Too much voltage boils the electrolyte away and damages the plates. (a) Cold does not boil electrolyte. (c) Batteries do not get bigger from overcharging. (d) One fast charge is not the same as sustained overcharging."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Charging Systems: Quick Reference</h3>\n<p><strong>Core idea:</strong> The charging system powers the loads while the engine runs and recharges the battery — if it fails, the car runs on the battery until the battery dies.</p>\n<p><strong>Alternator:</strong> Belt spins a magnet (rotor) inside coils (stator) making alternating current; the rectifier (diodes) turns it into direct current.</p>\n<p><strong>Voltage regulator:</strong> Holds the system voltage steady by adjusting the alternator's output — preventing overcharging (boiled battery) and undercharging (flat battery).</p>\n<p><strong>Warning light:</strong> On with the ignition and the engine off is normal; it should go out once the engine runs. A light that stays on means the alternator is not charging.</p>\n<p><strong>Watch out:</strong> Check the belt and the connections before condemning the alternator — a slipping belt is the cheapest cause of a charging fault.</p>\n<p><strong>Self-check:</strong> Explain what the regulator does and what a charging warning light means. If you can, you have this module.</p>\n"
};
