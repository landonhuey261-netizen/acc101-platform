// Plumbing 131 - Module 7: Water Heaters: Tank, Tankless & Heat Pump
module.exports = {
  "number": 7,
  "slug": "water-heaters-tank-tankless-heat-pump",
  "title": "Water Heaters: Tank, Tankless & Heat Pump",
  "estTime": "3–4 hours",
  "objectives": [
    "Name the three main residential water heater types and explain how each one heats water.",
    "Explain the parts of a storage tank water heater: tank, burner or elements, thermostat, anode rod, and T&P valve.",
    "Compare tank, tankless, and heat pump water heaters on capacity, efficiency, and space.",
    "Explain first-hour rating, recovery rate, and flow rate, and use them to size a heater for a household.",
    "State the fuel and power requirements of each type and when a larger gas line or electrical service is needed."
  ],
  "sections": [
    {
      "heading": "Why Hot Water Is a System, Not an Appliance",
      "html": "\n<p>Hot water is the most-used utility in a house after electricity. A family uses it for showers, baths, laundry, dishes, and hand washing — often several at once. The water heater's job is to deliver enough hot water, at a safe temperature, whenever it is asked for. When it cannot, the complaint is always the same: \"we run out of hot water.\" This module teaches you to size the heater so that complaint never happens.</p>\n<p>Three numbers describe any water heater. <strong>Capacity</strong> is how much hot water it can store (tank) or deliver (tankless). <strong>Recovery rate</strong> is how fast a tank heater reheats a full tank. <strong>Flow rate</strong> is how many gallons per minute a tankless heater can heat to the set temperature. A heater that is too small for the household will always disappoint, no matter how well it is installed.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Size the heater to the household's worst hour, not its average day. The test is the morning when two showers, the dishwasher, and the laundry all run at once.</div>\n<p>Water heaters also carry the highest scald risk in the house. Stored water is typically held at 120°F to 140°F, and water at 140°F can scald in seconds. The thermostat setting, the mixing valve, and the T&P valve are all safety devices — Module 8 covers them in detail.</p>"
    },
    {
      "heading": "Storage Tank and Tankless Water Heaters",
      "html": "\n<p>A <strong>storage tank water heater</strong> heats a tank of water — commonly 30, 40, or 50 gallons in a house — and holds it at temperature until it is used. A gas model burns gas in a burner under the tank; the hot flue gases rise through a center flue, heating the water from the inside as well. An electric model uses one or two <strong>heating elements</strong> immersed in the tank, controlled by thermostats. When hot water leaves the top of the tank, cold water enters the bottom through a dip tube, and the burner or elements fire to reheat it.</p>\n<p>Inside the tank, two parts decide its life. The <strong>anode rod</strong> is a magnesium or aluminum rod that corrodes in place of the steel tank — it is the sacrificial part that keeps the tank from rusting through. When the anode is gone, the tank rusts. The <strong>T&P (temperature and pressure) relief valve</strong> opens if the tank overheats or over-pressurizes, dumping water before the tank can fail. Both parts are covered in Module 8.</p>\n<p>Tank heaters are simple, cheap to buy, and easy to service. Their weakness is <strong>standby loss</strong>: the tank keeps water hot all day whether anyone uses it or not, so energy is spent holding heat that no one asked for. Their other weakness is capacity: once the tank is empty, the household waits for recovery.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A tank heater's capacity is the tank size; its endurance is the recovery rate. A 50-gallon tank with a fast recovery can out-serve a larger tank with a slow one.</div>\n\n<p>A <strong>tankless water heater</strong> has no tank. When a hot tap opens, a flow sensor fires a large burner (gas) or a bank of heating elements (electric), and water is heated as it passes through a <strong>heat exchanger</strong>. When the tap closes, the heater shuts off. There is no standby loss and no tank to run out of — the hot water lasts as long as the fuel and the flow allow.</p>\n<p>The limit is <strong>flow rate</strong>. A tankless heater can only raise the temperature of so many gallons per minute. A gas tankless rated at 199,000 Btu per hour — the common residential maximum — can deliver roughly 5 gallons per minute at a 70°F temperature rise, enough for two showers at once in most climates. In cold climates, where incoming water is 40°F and the rise needed is 80°F or more, the same heater delivers less. Electric tankless models need very large electrical service — often 100 amps or more for a whole-house unit — and are usually used for a single fixture.</p>\n<p>Tankless heaters cost more to buy and install, need a larger gas line than a tank heater (a 199,000-Btu unit needs a 3/4-inch or 1-inch gas line, not the 1/2-inch line a 40,000-Btu tank heater uses), and need annual descaling in hard-water areas. In return they last longer — 20 years or more is common — and they never run out of hot water within their flow rating.</p>"
    },
    {
      "heading": "Heat Pump (Hybrid) Water Heaters",
      "html": "\n<p>A <strong>heat pump water heater</strong> — often called a hybrid — is a tank heater with a heat pump on top. Instead of making heat with a burner or an element, it moves heat from the surrounding air into the water, the same way a refrigerator moves heat out of its cabinet. Because it moves heat rather than making it, it uses roughly a third of the electricity of a standard electric tank heater for the same hot water.</p>\n<p>Heat pump heaters need air to work with: they must sit in a space with enough volume and air exchange — a large basement or garage, not a small closet — and they cool and dehumidify the room around them, which is a bonus in summer and a drawback in winter. They are slower to recover than a standard electric tank, so most models include backup electric elements that switch on when demand is high; that backup mode is what the \"hybrid\" name means.</p>\n<p>Choosing between the three types is a sizing and site question. A tank heater fits anywhere and costs least. A tankless heater fits where endless hot water and long life matter and the gas line or electrical service can support it. A heat pump heater fits where electricity is the fuel, the space is large, and efficiency matters most.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Tank = simple and cheap. Tankless = endless within its flow rate. Heat pump = most efficient, but needs air and space. The right heater is the one that fits the household, the fuel, and the room.</div>"
    },
    {
      "heading": "Sizing: First-Hour Rating and Flow Rate",
      "html": "\n<p>For a tank heater, the sizing number is the <strong>first-hour rating (FHR)</strong>: how many gallons of hot water the heater can deliver in its first hour of use, starting full. The FHR is printed on the heater's EnergyGuide label. To size, add up the household's peak-hour demand: a shower uses about 10 gallons of hot water, a bath 15 to 20, a dishwasher about 6, a clothes washer about 7 (warm wash). A family of four with two morning showers, a dishwasher, and a laundry load needs roughly 40 to 45 gallons in the peak hour — so a heater with an FHR of at least that much, with a margin.</p>\n<p>For a tankless heater, the sizing number is the <strong>flow rate at the required temperature rise</strong>: add up the fixtures that will run at the same time (two showers at 2 gallons per minute each is 4 gpm), find the temperature rise (set temperature minus the coldest incoming water temperature), and check the heater's rating at that rise. If the heater delivers 4 gpm at a 70°F rise and your worst case is 4 gpm at a 70°F rise, it fits — with no margin, so step up a size if the budget allows.</p>\n<p>Always use the rating on the heater's label or the manufacturer's data, not a rule of thumb. And always check the fuel: a gas tankless at 199,000 Btu per hour and a gas tank heater at 40,000 Btu per hour do not share a gas line size, and an electric tankless may need a service upgrade. Sizing the heater without sizing the fuel is a callback waiting to happen.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Tank: stores 30–50 gallons, heats with a burner or elements, loses heat to standby, runs out when the tank empties.</li>\n<li>Tankless: heats on demand through a heat exchanger, no standby loss, limited by flow rate at the required temperature rise.</li>\n<li>Heat pump (hybrid): moves heat from the air into the tank, most efficient, needs air volume and space, has backup elements.</li>\n<li>Tank sizing number: first-hour rating (FHR). Tankless sizing number: flow rate at the temperature rise.</li>\n<li>Anode rod protects the tank from rust; T&P valve protects it from over-temperature and over-pressure.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Sizing a tankless heater by its maximum flow rate at a small temperature rise. The rating that matters is the flow at <em>your</em> temperature rise — cold incoming water in winter cuts the delivered flow sharply.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Installing a 199,000-Btu tankless heater on the 1/2-inch gas line that served a 40,000-Btu tank heater. The gas line must be sized to the new load (IFGC Table 402.2 lists a 50-gallon storage heater at about 50,000 Btu per hour and a tankless at up to 199,000). Undersized gas starves the burner.</div>\n<p><strong>Ready-to-Work link:</strong> NCCER 02209, Water Heaters, expects you to identify types, size a heater for a household, and explain its parts. If you can size both a tank and a tankless heater from a household's peak hour, you have this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Storage tank water heater",
      "def": "A water heater that heats and holds a tank of water (commonly 30–50 gallons) at temperature until it is used."
    },
    {
      "term": "Tankless water heater",
      "def": "A water heater with no tank that heats water on demand as it passes through a heat exchanger."
    },
    {
      "term": "Heat pump water heater",
      "def": "A tank water heater with a heat pump that moves heat from the surrounding air into the water; also called a hybrid."
    },
    {
      "term": "Anode rod",
      "def": "A magnesium or aluminum rod inside a tank that corrodes in place of the steel tank, protecting it from rust."
    },
    {
      "term": "T&P valve",
      "def": "The temperature and pressure relief valve that opens if a tank overheats or over-pressurizes."
    },
    {
      "term": "Heating element",
      "def": "An electric resistance heater immersed in a tank that heats the water directly."
    },
    {
      "term": "Heat exchanger",
      "def": "The part of a tankless heater where burner or element heat transfers into the flowing water."
    },
    {
      "term": "First-hour rating (FHR)",
      "def": "How many gallons of hot water a tank heater can deliver in its first hour of use, starting full."
    },
    {
      "term": "Recovery rate",
      "def": "How fast a tank heater reheats a full tank of cold water, usually stated in gallons per hour."
    },
    {
      "term": "Flow rate",
      "def": "How many gallons per minute a tankless heater can heat to the set temperature at a given temperature rise."
    },
    {
      "term": "Standby loss",
      "def": "Heat lost from a stored tank of hot water while no one is using it."
    },
    {
      "term": "Dip tube",
      "def": "The tube that carries cold water to the bottom of a storage tank so hot water leaves from the top."
    },
    {
      "term": "Temperature rise",
      "def": "The difference between the incoming cold water temperature and the desired hot water temperature."
    },
    {
      "term": "Btu per hour",
      "def": "The rate at which a gas appliance uses energy; a common tank heater is about 40,000 Btu per hour, a tankless up to 199,000."
    }
  ],
  "video": {
    "title": "Different types of Water Heaters and How Water Heaters Work",
    "embedUrl": "https://www.youtube.com/embed/APHxDbCk4mc",
    "note": "A clear tour of tank, tankless, and heat pump water heaters — how each one works, what is inside, and where each type fits. Watch for the anode rod and the T&P valve, which Module 8 covers in depth.",
    "more": [
      {
        "title": "All About Water Heaters | Ask This Old House",
        "url": "https://www.youtube.com/watch?v=w7okqeaS1sU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A family of four runs two morning showers (10 gallons of hot water each), a dishwasher (6 gallons), and a warm laundry load (7 gallons) in the same hour. What first-hour rating does their tank heater need at minimum?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Add the peak-hour demand: 10 + 10 + 6 + 7 = <strong>33 gallons</strong>. Step 2: The heater's first-hour rating must be at least 33 gallons. Step 3: In practice, choose a heater with an FHR comfortably above 33 gallons — a 40-gallon tank with a good recovery rate, or a 50-gallon tank — so a slightly heavier morning does not run the household out of hot water.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A tankless heater is rated at 5 gallons per minute at a 70°F temperature rise. In winter the incoming water is 40°F and the set temperature is 120°F. What is the temperature rise, and can the household run two 2-gpm showers at once?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Temperature rise = 120 − 40 = <strong>80°F</strong>. Step 2: The 5-gpm rating is at a 70°F rise; at an 80°F rise the heater delivers less than 5 gpm. Step 3: Two showers need 4 gpm — the heater may deliver it, but with little margin in winter. Check the manufacturer's rating at an 80°F rise; if it is under 4 gpm, step up a size or accept one shower at a time in winter.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A tank water heater is 8 years old and the water has a rusty tint. The anode rod has never been checked. What is the most likely cause, and what should have been done?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The anode rod is likely consumed — it corrodes in place of the tank, and once it is gone the steel tank rusts. Step 2: The anode should be checked every few years and replaced when it is mostly consumed. Step 3: Rusty water from a tank usually means the tank itself is rusting and replacement is near; a new anode now may slow it but cannot undo tank rust.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A customer wants to replace a 40,000-Btu tank heater with a 199,000-Btu tankless heater and keep the existing 1/2-inch gas line. What do you tell her?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — the gas line must be resized. Step 2: A 199,000-Btu appliance needs far more gas than a 40,000-Btu one; IFGC Table 402.2 lists a 50-gallon storage heater at about 50,000 Btu per hour, while a tankless can reach 199,000. Step 3: Size the gas line by the longest-length method (Module 3 of Plumbing 132) — expect a 3/4-inch or 1-inch line — and check the meter capacity too.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A heat pump water heater is proposed for a small, sealed closet. Why is that a bad location?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A heat pump heater moves heat from the surrounding air into the water, so it needs air volume and air exchange. Step 2: A small sealed closet gives it little air to draw from, so it will run inefficiently and fall back to its backup electric elements. Step 3: It also cools the space — in a closet that means a cold, damp room. It belongs in a large basement or garage, per the manufacturer's space requirements.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A tank heater's burner fires constantly but the water never gets hot. The thermostat is set to 120°F. Name two likely causes.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: A failed <strong>dip tube</strong> — cold water entering the tank mixes at the top instead of the bottom, so hot water is diluted as fast as it is made. Step 2: A failed <strong>thermostat</strong> or, on an electric model, a failed <strong>heating element</strong> — the burner or element is not actually heating even though it appears to run. Step 3: Check the dip tube and the thermostat/element before replacing the heater.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A storage tank water heater's main weakness is:",
      "choices": [
        "It cannot heat water above 100°F",
        "Standby loss — it keeps water hot all day whether used or not",
        "It has no thermostat",
        "It cannot be installed in a basement"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Holding a tank at temperature all day wastes energy when no one is using water. (a) Tank heaters reach 120–140°F routinely. (c) Tank heaters have thermostats. (d) Basements are a common tank heater location."
    },
    {
      "q": "The anode rod in a tank water heater:",
      "choices": [
        "Heats the water",
        "Corrodes in place of the steel tank, protecting it from rust",
        "Relieves pressure",
        "Mixes hot and cold water"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The magnesium or aluminum rod is sacrificial — it corrodes so the tank does not. (a) Heating is done by the burner or elements. (c) Pressure relief is the T&P valve's job. (d) Mixing is the dip tube's job."
    },
    {
      "q": "A tankless water heater's capacity limit is its:",
      "choices": [
        "Tank size",
        "Flow rate at the required temperature rise",
        "Anode rod length",
        "Standby loss"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A tankless heater can only heat so many gallons per minute by the needed rise. (a) A tankless heater has no tank. (c) A tankless heater has no anode rod. (d) Tankless heaters have no standby loss — that is their advantage."
    },
    {
      "q": "The first-hour rating (FHR) is used to size:",
      "choices": [
        "Tankless water heaters",
        "Storage tank water heaters",
        "Heat pump compressors",
        "Gas meters"
      ],
      "answer": 1,
      "explanation": "Correct: (b). FHR is the gallons a tank heater delivers in its first hour, starting full. (a) Tankless heaters are sized by flow rate at the temperature rise. (c) and (d) are not sized by FHR."
    },
    {
      "q": "A heat pump water heater heats water by:",
      "choices": [
        "Burning gas under the tank",
        "Moving heat from the surrounding air into the water",
        "Storing solar energy",
        "Resistance elements only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It moves heat rather than making it, which is why it is efficient. (a) describes a gas tank heater. (c) describes a solar heater. (d) Resistance elements are only the backup in a hybrid."
    },
    {
      "q": "A 199,000-Btu tankless heater replacing a 40,000-Btu tank heater will most likely need:",
      "choices": [
        "A smaller gas line",
        "A larger gas line and a meter capacity check",
        "No gas changes at all",
        "A smaller vent only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Nearly five times the gas input needs a larger line (typically 3/4-inch or 1-inch) and a meter that can deliver the total load. (a) is backwards. (c) ignores the fivefold load increase. (d) Venting matters too, but the gas line is the sizing issue."
    },
    {
      "q": "Cold water enters a storage tank through the:",
      "choices": [
        "T&P valve",
        "Dip tube, which carries it to the bottom",
        "Anode rod",
        "Flue"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The dip tube delivers cold water to the tank bottom so hot water leaves from the top. (a) The T&P valve is a safety relief, not an inlet. (c) The anode rod protects against rust. (d) The flue carries combustion gases out."
    },
    {
      "q": "Water at 140°F is dangerous mainly because it:",
      "choices": [
        "Freezes pipes",
        "Can scald skin in seconds",
        "Damages the anode rod",
        "Stops the burner"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 140°F water scalds in seconds, which is why thermostat settings and mixing valves matter. (a) Hot water does not freeze pipes. (c) The anode rod is not damaged by hot water. (d) The burner is not stopped by hot water."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Water Heaters: Quick Reference</h3>\n<p><strong>Tank:</strong> Stores 30–50 gal, heats with burner or elements, standby loss, runs out when the tank empties. Parts: dip tube, thermostat, elements or burner, anode rod, T&P valve.</p>\n<p><strong>Tankless:</strong> Heats on demand through a heat exchanger, no standby loss, no tank to empty. Limit: flow rate at the required temperature rise. Gas models up to about 199,000 Btu/hr need a larger gas line.</p>\n<p><strong>Heat pump (hybrid):</strong> Moves heat from the air into the tank — most efficient — but needs air volume and space; backup elements cover high demand.</p>\n<p><strong>Sizing:</strong> Tank = first-hour rating (FHR) vs. peak-hour demand (shower ~10 gal, bath 15–20, dishwasher ~6, washer ~7). Tankless = flow rate at your temperature rise.</p>\n<p><strong>Anode rod:</strong> Sacrificial — corrodes so the tank does not. Check it every few years.</p>\n<p><strong>Watch out:</strong> Size by the worst hour, check the fuel and the gas line when switching types, and rate tankless at your winter temperature rise.</p>\n<p><strong>Self-check:</strong> Size a tank heater for a family of four's peak hour, and size a tankless for two simultaneous showers in winter, without notes.</p>\n"
};
