// con111 - Module 6: GMAW (MIG) Welding
module.exports = {
  "number": 6,
  "slug": "gmaw-mig-welding",
  "title": "GMAW (MIG) Welding",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how GMAW works: continuous wire, shielding gas, and the gun.",
    "Explain the two machine settings — voltage and wire feed speed — and how they balance.",
    "Describe the shielding gases used and why wind is MIG's enemy.",
    "Explain push versus pull technique and when each is used.",
    "Describe the three metal transfer modes: short circuit, globular, and spray."
  ],
  "sections": [
    {
      "heading": "How MIG Works",
      "html": "<p>GMAW — gas metal arc welding, or MIG — feeds a continuous wire electrode through a gun, and the wire melts into the weld pool as it feeds. The gun also delivers shielding gas around the arc, which keeps oxygen and nitrogen out of the pool. There is no flux and no slag to chip — the weld is clean as soon as it cools, which is one reason MIG is fast.</p>\n<p>The wire is the filler metal and the electrode at once. It comes on a spool inside the machine, and a drive roller pushes it through a liner to the gun. The welder controls the arc with a trigger: pull it and the wire feeds and the arc starts; release it and everything stops. The wire feed speed is set on the machine, and the welder's job is to hold the gun steady and travel at the right speed.</p>\n<p>MIG is the shop process. It is fast, clean, easy to learn, and it welds thin sheet metal well — which is why auto body shops and fabrication shops run it all day. Its weakness is the outdoors: the shielding gas is a gentle cloud around the arc, and a breeze blows it away. Outdoors, the welder switches to flux core.</p>\n"
    },
    {
      "heading": "Voltage and Wire Speed",
      "html": "<p>MIG has two knobs that matter: <strong>voltage</strong> and <strong>wire feed speed</strong>. Voltage sets the arc length and the bead width — higher voltage makes a wider, flatter bead. Wire feed speed sets the amperage and the deposition rate — faster wire means more metal and more heat. The two must be balanced: if the wire feeds faster than the arc can melt it, the wire stubs into the work; if it feeds too slowly, the arc burns back to the contact tip.</p>\n<p>The machine's door chart gives starting settings for the wire size and the metal thickness, and the welder fine-tunes from there. A good starting point is the chart, a test bead on scrap, and a look at the result: a smooth, even bead with a steady crackling sound means the settings are close; a popping, stubbing arc means the wire is too fast; a long, wandering arc means the voltage is too high.</p>\n<p>Wire size matters too. Thin wire — 0.023 or 0.030 inch — is for thin sheet metal; thicker wire — 0.035 or 0.045 inch — is for thicker plate. The wrong wire for the thickness makes the settings impossible: thin wire on thick plate cannot carry enough heat, and thick wire on thin sheet burns through.</p>\n"
    },
    {
      "heading": "Shielding Gas and Wind",
      "html": "<p>The shielding gas is usually a mix of argon and carbon dioxide — the common mix is 75% argon and 25% CO2, called C25 — or straight CO2, which is cheaper and gives deeper penetration with more spatter. Argon gives a smooth arc and a clean bead; CO2 gives penetration at the cost of spatter. The gas flows from a cylinder through a regulator and a flowmeter, and the flow rate is set in cubic feet per hour — too little and the pool is unprotected, too much and the gas turns turbulent and pulls air in.</p>\n<p>Wind is MIG's enemy. A breeze of even a few miles per hour can blow the gas cloud away from the arc, and the weld that results is full of porosity — holes from the air that got into the pool. Outdoors, the welder builds a windbreak, turns the work so the body blocks the wind, or switches to flux core, whose flux shields the weld without a gas cloud. A MIG weld made in the wind is a weld that will fail inspection.</p>\n<p>The gas nozzle must be clean and the contact tip must be the right size for the wire. Spatter builds up in the nozzle and blocks the gas flow, so the welder cleans it with nozzle gel or a reamer. A dirty nozzle is a common cause of porosity that looks like a gas problem but is really a maintenance problem.</p>\n"
    },
    {
      "heading": "Push, Pull, and Transfer Modes",
      "html": "<p>MIG can be pushed or pulled. <strong>Pushing</strong> — pointing the gun ahead of the puddle, at about 10 to 15 degrees — gives a wider, flatter bead with less penetration, and it lets the welder see the joint ahead. <strong>Pulling</strong> — dragging the gun behind the puddle — gives deeper penetration and a narrower bead. Thin material is usually pushed; thick material is often pulled. The welder chooses by the joint and the thickness, not by habit.</p>\n<p>The metal crosses the arc in three <strong>transfer modes</strong>. <strong>Short circuit</strong> is the low-heat mode: the wire touches the pool, shorts, and melts off in small drops, dozens of times a second — the mode for thin sheet and all positions. <strong>Globular</strong> is the middle mode: large drops that fall across the arc, with more spatter. <strong>Spray</strong> is the high-heat mode: tiny droplets sprayed across the arc in a stream, for thick plate in the flat and horizontal positions, with a smooth, spatter-free bead.</p>\n<p>The transfer mode is set by voltage and wire speed, not by a switch. Low settings give short circuit; high settings give spray. The welder hears the mode: short circuit crackles like frying bacon, spray hums. Knowing the sound is knowing the setting.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> MIG feeds a continuous wire through a gun with shielding gas; no slag to chip. Voltage sets bead width, wire speed sets deposition — they must balance. Gas is usually C25 (75% argon / 25% CO2); wind blows the gas away and causes porosity. Push for wide and flat, pull for deep penetration. Transfer modes are short circuit (thin, all positions), globular, and spray (thick, flat).</p>\n<p><strong>Common mistake:</strong> Welding MIG outdoors in the wind. The gas cloud blows away and the weld is porous. Build a windbreak or switch to flux core.</p>\n<p><strong>Common mistake:</strong> Setting wire speed without balancing voltage. Too fast and the wire stubs; too slow and the arc burns back to the tip. Use the door chart, test on scrap, and listen to the arc.</p>\n<p><strong>Ready-to-Work link:</strong> If you can explain voltage versus wire speed, name the gas mix, and say why wind matters, you have this module. Module 7 covers FCAW — flux-cored welding.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "GMAW",
      "def": "Gas metal arc welding — MIG welding, using a continuous wire electrode and shielding gas."
    },
    {
      "term": "MIG",
      "def": "Metal inert gas — the common name for GMAW."
    },
    {
      "term": "Wire feed speed",
      "def": "How fast the wire is pushed through the gun; sets amperage and deposition rate."
    },
    {
      "term": "Voltage",
      "def": "The machine setting that sets arc length and bead width in MIG welding."
    },
    {
      "term": "Contact tip",
      "def": "The copper tip in the gun that the wire passes through and that carries the current to it."
    },
    {
      "term": "Shielding gas",
      "def": "Gas delivered around the arc to keep oxygen and nitrogen out of the weld pool."
    },
    {
      "term": "C25",
      "def": "The common MIG gas mix: 75% argon and 25% carbon dioxide."
    },
    {
      "term": "Flowmeter",
      "def": "The device that sets and shows the shielding gas flow rate in cubic feet per hour."
    },
    {
      "term": "Push",
      "def": "Pointing the MIG gun ahead of the puddle; wider, flatter bead, less penetration."
    },
    {
      "term": "Pull",
      "def": "Dragging the MIG gun behind the puddle; deeper penetration, narrower bead."
    },
    {
      "term": "Short circuit transfer",
      "def": "Low-heat transfer mode: the wire touches the pool and melts off in small drops; for thin metal and all positions."
    },
    {
      "term": "Globular transfer",
      "def": "Middle transfer mode: large drops fall across the arc, with more spatter."
    },
    {
      "term": "Spray transfer",
      "def": "High-heat transfer mode: tiny droplets spray across the arc; for thick plate in flat and horizontal positions."
    },
    {
      "term": "Nozzle",
      "def": "The gas cup on the MIG gun that directs shielding gas around the arc; it must be kept clean of spatter."
    },
    {
      "term": "Drive roller",
      "def": "The roller in the wire feeder that pushes the wire through the liner to the gun."
    }
  ],
  "video": {
    "title": "MIG Welding Basics For Beginners",
    "embedUrl": "https://www.youtube.com/embed/gc9fBVq9NlE",
    "note": "A complete MIG beginner lesson from Tim Welds: how the process works, what you need, setting the machine, and technique. Watch the settings section — voltage and wire speed are the two knobs, and they must be balanced against each other.",
    "more": [
      {
        "title": "MIG Welding Basics",
        "url": "https://www.youtube.com/watch?v=DEDHR-Nst6E"
      },
      {
        "title": "HOW TO MIG WELD with Shauno!",
        "url": "https://www.youtube.com/watch?v=lghkiTO1a0M"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain how MIG works in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A continuous wire electrode feeds through a gun and melts into the weld pool. Step 2: Shielding gas from the gun keeps oxygen and nitrogen out of the pool, and there is no flux and no slag to chip.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> What do voltage and wire feed speed each control in MIG, and what happens if they are out of balance?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Voltage sets arc length and bead width; wire speed sets amperage and deposition. Step 2: Wire too fast and it stubs into the work; wire too slow and the arc burns back to the contact tip. Step 3: The two must be balanced, starting from the door chart and a test bead.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What is C25, and what does straight CO2 do differently?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: C25 is 75% argon and 25% carbon dioxide, the common MIG mix. Step 2: Straight CO2 is cheaper and gives deeper penetration but more spatter. Step 3: Argon gives a smoother arc and a cleaner bead.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why is wind MIG's enemy, and what are two fixes?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Wind blows the shielding gas cloud away from the arc, letting air into the pool. Step 2: The result is porosity — holes in the weld. Step 3: Fixes: build a windbreak or turn the work, or switch to flux core, whose flux shields without a gas cloud.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain push versus pull in MIG, and say when you would use each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Push — gun ahead of the puddle, wider flatter bead, less penetration; used on thin material. Step 2: Pull — gun behind the puddle, deeper penetration, narrower bead; used on thicker material.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Name the three transfer modes and say what each is for.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Short circuit — low heat, thin sheet, all positions, crackles like frying bacon. Step 2: Globular — middle mode, large drops, more spatter. Step 3: Spray — high heat, tiny droplets, thick plate in flat and horizontal positions, smooth and spatter-free.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In MIG welding, the wire is:",
      "choices": [
        "A flux-coated rod",
        "A continuous wire that is both the electrode and the filler metal",
        "A tungsten rod",
        "A gas"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The wire feeds continuously, carries the current, and melts into the pool as filler. (a) That is a stick electrode. (c) Tungsten is the TIG electrode, which does not melt. (d) Gas shields the arc; it is not the electrode."
    },
    {
      "q": "Voltage in MIG welding mainly controls:",
      "choices": [
        "Wire speed",
        "Arc length and bead width",
        "Gas flow",
        "Travel speed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voltage sets arc length and bead width — higher voltage, wider flatter bead. (a) Wire speed is a separate setting. (c) Gas flow is set on the flowmeter. (d) Travel speed is the welder's hand speed."
    },
    {
      "q": "If the wire feeds faster than the arc can melt it, the wire will:",
      "choices": [
        "Burn back to the tip",
        "Stub into the work",
        "Melt perfectly",
        "Stop the gas"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Wire too fast stubs into the pool and the work. (a) Burn-back happens when the wire feeds too slowly. (c) It does not melt perfectly — the balance is wrong. (d) Gas flow is unaffected."
    },
    {
      "q": "C25 shielding gas is:",
      "choices": [
        "100% argon",
        "75% argon and 25% carbon dioxide",
        "100% carbon dioxide",
        "75% carbon dioxide and 25% argon"
      ],
      "answer": 1,
      "explanation": "Correct: (b). C25 is 75% argon / 25% CO2. (a) That is pure argon. (c) That is straight CO2. (d) That is the reverse mix, not C25."
    },
    {
      "q": "MIG welding outdoors in the wind causes:",
      "choices": [
        "A stronger weld",
        "Porosity — the gas cloud blows away and air gets into the pool",
        "A cleaner bead",
        "Faster travel"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Wind blows the shielding gas away, so air enters the pool and leaves holes. (a) The weld is weaker. (c) The bead is worse. (d) Travel speed is unrelated."
    },
    {
      "q": "Pushing a MIG gun gives:",
      "choices": [
        "Deeper penetration",
        "A wider, flatter bead with less penetration",
        "More spatter",
        "A narrower bead"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Pushing points the gun ahead, spreading the bead wide and flat. (a) Pulling gives deeper penetration. (c) Pushing usually gives less spatter. (d) Pulling gives the narrower bead."
    },
    {
      "q": "Short circuit transfer is the mode for:",
      "choices": [
        "Thick plate only",
        "Thin sheet metal and all positions",
        "Overhead only",
        "Aluminum only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Short circuit is the low-heat mode for thin metal and all positions. (a) Thick plate uses spray transfer. (c) It works overhead too, but not only overhead. (d) It works on steel as well as aluminum."
    },
    {
      "q": "A MIG nozzle full of spatter causes:",
      "choices": [
        "Better gas flow",
        "Blocked gas flow and porosity, because the shielding gas cannot reach the arc",
        "More voltage",
        "Faster wire feed"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Spatter in the nozzle blocks the gas, so the pool is unprotected and porous. (a) Gas flow gets worse, not better. (c) Voltage is unaffected. (d) Wire feed is unaffected."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — GMAW (MIG): Quick Reference</h3>\n<p><strong>How it works:</strong> Continuous wire through a gun + shielding gas. No flux, no slag. Fast and clean — the shop process.</p>\n<p><strong>Settings:</strong> Voltage = arc length and bead width · Wire speed = amperage and deposition. Balance them; start from the door chart and test on scrap.</p>\n<p><strong>Gas:</strong> C25 = 75% argon / 25% CO2. Straight CO2 = deeper, more spatter. Wind blows the gas away → porosity. Outdoors, use a windbreak or flux core.</p>\n<p><strong>Technique:</strong> Push = wide, flat, less penetration · Pull = deep, narrow. Transfer: short circuit (thin, all positions) · globular · spray (thick, flat).</p>\n<p><strong>Self-check:</strong> Explain voltage vs wire speed and why wind matters.</p>\n"
};
