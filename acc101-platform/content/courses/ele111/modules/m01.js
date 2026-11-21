module.exports = {
  "number": 1,
  "slug": "how-solar-cells-make-electricity",
  "title": "How Solar Cells Make Electricity",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the photovoltaic effect in plain words.",
    "Describe how a silicon solar cell is built: n-type and p-type layers and the p-n junction.",
    "Explain the difference between voltage, current, and power in a solar cell.",
    "Describe standard test conditions (STC) and what a module's nameplate rating means.",
    "Explain how temperature and sunlight affect a cell's output."
  ],
  "sections": [
    {
      "heading": "The Photovoltaic Effect: Light Knocks Electrons Loose",
      "html": "<p>A solar cell turns light directly into electricity — no moving parts, no fuel, no combustion. The heart of the cell is silicon, the same material computer chips are made from. Pure silicon is a poor conductor: its electrons are locked in bonds between atoms and cannot move. When sunlight — packets of energy called photons — strikes the cell, a photon can knock an electron loose from its bond. That free electron can now move, and moving electrons are electric current. The trick of the solar cell is to make those freed electrons all move in the same direction, through a circuit, instead of wandering back to where they came from.</p><p>The effect was first put to practical use at Bell Labs in 1954, when the first practical silicon solar cell converted about 6% of sunlight into electricity. Today's commercial modules convert about 20–23%, and the best laboratory cells reach well above that. The physics has not changed since 1954 — only the manufacturing has improved. A solar panel is simply a sheet of these cells, wired together and sealed against the weather, and a solar array is a group of panels wired together to make useful power.</p><div class=\"callout\"><strong>Key idea:</strong> Sunlight knocks electrons loose in silicon; the cell's job is to push them all in one direction, through a circuit, so their movement becomes useful current.</div>"
    },
    {
      "heading": "The P-N Junction: The One-Way Gate",
      "html": "<p>A bare piece of silicon will not make a useful solar cell, because the freed electrons have no reason to move in one direction. The solution is the <strong>p-n junction</strong>: two layers of silicon treated differently. One layer is doped with phosphorus, which adds spare electrons — this is <strong>n-type</strong> silicon, where the charge carriers are negative. The other layer is doped with boron, which leaves empty spots (holes) where electrons are missing — this is <strong>p-type</strong> silicon, where the charge carriers act positive. Where the two layers meet, an electric field forms, and that field is a one-way gate: it pushes freed electrons toward the n-side and holes toward the p-side.</p><p>Thin metal fingers on the front of the cell collect the electrons, and a metal sheet on the back collects the holes. Connect a wire between the front and the back through a load — a light, a pump, an inverter — and the electrons flow through the wire, doing work on the way. Each silicon cell produces only about 0.5–0.6 volts, which is why cells are wired in series inside a module: 60 or 72 cells in series make a module of roughly 30–45 volts, and modules are wired in series into strings to reach the voltage an inverter needs.</p>"
    },
    {
      "heading": "Volts, Amps, and Watts on a Solar Module",
      "html": "<p>Three numbers describe a module's electrical behavior. <strong>Open-circuit voltage (Voc)</strong> is the voltage the module produces with nothing connected — the highest voltage it can make. <strong>Short-circuit current (Isc)</strong> is the current it produces when its terminals are shorted — the highest current it can make. <strong>Maximum power (Pmax)</strong> is the product of the voltage and current at the point where their product is greatest — the module's rated power in watts, such as 400 W. The module's nameplate lists all three, measured under <strong>standard test conditions (STC)</strong>: 1,000 watts per square meter of sunlight, a cell temperature of 25°C, and a standard air mass (AM 1.5).</p><p>STC is a laboratory condition, not a rooftop condition. On a real roof the cell is hotter than 25°C — often 60°C or more on a summer day — and a hot cell makes less voltage. Every module's datasheet lists a <strong>temperature coefficient</strong> for voltage, typically around −0.3% to −0.4% per degree above 25°C, so a module at 65°C loses roughly 12–16% of its voltage. Sunlight matters too: current is nearly proportional to sunlight, so a cloudy day cuts current sharply while voltage stays nearly the same. A technician who reads a nameplate must know what STC means — and what it does not mean.</p>"
    },
    {
      "heading": "Safety: A Sunlit Panel Is Always Energized",
      "html": "<p>Solar work has a safety fact that surprises beginners: a solar panel in sunlight is energized, and there is no switch on the panel to turn it off. The disconnect at the inverter does not de-energize the modules — it only disconnects them from the rest of the system. The modules themselves keep producing voltage as long as light falls on them, and a residential string can reach several hundred volts DC. That is why the safety rule for this whole program is absolute: never work on live or energized equipment, and treat every PV circuit as energized in daylight until it is proven dead.</p><p>All practical guidance in this course assumes de-energized, locked-out/tagged-out work under a licensed supervisor, per NFPA 70E. On a real PV job, modules are covered with opaque material or installed at night or in low light when connections must be made, connectors are kept open until the circuit is ready, and voltage is tested with a meter rated for the DC voltage present. DC arcs do not self-extinguish the way AC arcs do, so a DC fault is a fire risk that demands respect. The sun is the power source, and it does not have an off switch.</p><div class=\"callout\"><strong>Safety hard line:</strong> A sunlit PV module is energized — a disconnect does not de-energize it. Never work on live equipment; de-energize, lock out, tag out, and test dead under a licensed supervisor, per NFPA 70E.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Photons knock electrons loose in silicon; the p-n junction's electric field pushes them in one direction, through a circuit.</li><li>N-type silicon has spare electrons (phosphorus); p-type has holes (boron); the junction between them is the one-way gate.</li><li>One cell makes about 0.5–0.6 V; cells in series make a module; modules in series make a string.</li><li>Voc is open-circuit voltage, Isc is short-circuit current, Pmax is the rated power — all measured at STC (1,000 W/m², 25°C, AM 1.5).</li><li>Heat lowers voltage; low light lowers current. A sunlit module is always energized.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Treating the nameplate wattage as what the module will produce on a hot roof. STC is 25°C cell temperature — a hot module makes less voltage, and less voltage means less power.</div><div class=\"callout\"><strong>Common mistake:</strong> Thinking a disconnect makes a PV array safe. The disconnect isolates the array from the inverter; the modules themselves stay energized in sunlight.</div><p><strong>Ready-to-Work link:</strong> If you can explain the photovoltaic effect, describe the p-n junction, and read Voc, Isc, and Pmax off a nameplate, you have this module. Module 2 puts the cells into systems: grid-tied, off-grid, and hybrid.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Photovoltaic effect",
      "def": "The process by which light knocks electrons loose in a semiconductor, producing electric current."
    },
    {
      "term": "Photon",
      "def": "A packet of light energy that can free an electron when it strikes a solar cell."
    },
    {
      "term": "Silicon",
      "def": "The semiconductor material most solar cells are made from."
    },
    {
      "term": "N-type silicon",
      "def": "Silicon doped with phosphorus, giving it spare electrons."
    },
    {
      "term": "P-type silicon",
      "def": "Silicon doped with boron, leaving holes where electrons are missing."
    },
    {
      "term": "P-n junction",
      "def": "The boundary between n-type and p-type silicon, where an electric field pushes electrons one way."
    },
    {
      "term": "Open-circuit voltage (Voc)",
      "def": "The highest voltage a module produces, measured with nothing connected."
    },
    {
      "term": "Short-circuit current (Isc)",
      "def": "The highest current a module produces, measured with its terminals shorted."
    },
    {
      "term": "Maximum power (Pmax)",
      "def": "A module's rated power in watts, the greatest product of its voltage and current."
    },
    {
      "term": "Standard test conditions (STC)",
      "def": "The laboratory conditions for rating a module: 1,000 W/m² of sunlight, 25°C cell temperature, AM 1.5."
    },
    {
      "term": "Temperature coefficient",
      "def": "How much a module's voltage or power changes per degree of temperature, usually negative for voltage."
    },
    {
      "term": "Bypass diode",
      "def": "A diode in a module that lets current flow around a shaded or failed group of cells."
    },
    {
      "term": "Cell",
      "def": "A single solar cell, producing about 0.5–0.6 V."
    },
    {
      "term": "Module (panel)",
      "def": "A sealed assembly of solar cells wired together, rated in watts."
    },
    {
      "term": "Array",
      "def": "A group of PV modules wired together to make useful power."
    }
  ],
  "video": {
    "title": "How Do Solar Panels Work? — TED-Ed",
    "embedUrl": "https://www.youtube.com/embed/xKxrkht7CpY",
    "note": "Watch the video, then work the assignment below. As you watch, note every term from this module's key terms list and write down one question the video raises for you.",
    "more": [
      {
        "title": "How a Solar Panel Is Made, From Sand to Electricity",
        "url": "https://www.youtube.com/watch?v=rr4uxTI3FS8"
      },
      {
        "title": "Solar Inverters Explained: Types, Repairs and Wiring",
        "url": "https://www.youtube.com/watch?v=ICmVahjz_lI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Explain the photovoltaic effect in three sentences, in plain words a homeowner could understand.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Sunlight is made of packets of energy called photons. Step 2: When a photon hits the silicon in a solar cell, it knocks an electron loose. Step 3: The cell's built-in electric field pushes all the freed electrons in one direction, through a wire — and that flow of electrons is electric current.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A module has 60 cells in series. Each cell makes 0.6 V. What is the module's approximate voltage? Show the math.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cells in series add their voltages. Step 2: 60 × 0.6 V = 36 V. Step 3: The module makes about 36 V (its open-circuit voltage will be a little higher, and its operating voltage a little lower).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A module is rated 400 W at STC with a Voc of 48 V and an Isc of 10.5 A. What do those three numbers mean?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 400 W is the maximum power at standard test conditions. Step 2: Voc 48 V is the highest voltage the module makes, with nothing connected. Step 3: Isc 10.5 A is the highest current it makes, with its terminals shorted. (The module never makes 48 V and 10.5 A at the same time — maximum power is less than their product.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A module's temperature coefficient for voltage is −0.35% per °C. The cell temperature is 65°C instead of the STC 25°C. By what percentage does the voltage fall?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Temperature rise = 65 − 25 = 40°C. Step 2: Voltage change = 40 × −0.35% = −14%. Step 3: The voltage falls by about 14% on a hot day.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A homeowner asks, \"If I turn off the disconnect, is the array safe to touch?\" What do you answer?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No. Step 2: The disconnect isolates the array from the inverter, but the modules stay energized as long as sunlight falls on them. Step 3: The array is only safe when it is covered or dark and proven dead with a meter — and all work is done de-energized, locked out and tagged out, under a licensed supervisor, per NFPA 70E.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A string of 10 modules has one module fully shaded by a chimney. What happens to the string, and what in the module limits the damage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The shaded module makes little current, and since the modules are in series, the whole string's current is limited by its weakest module. Step 2: The bypass diodes in the shaded module let current flow around the shaded cells, so the string keeps producing at a reduced level. Step 3: The lasting fix is to move the module or the string layout so the chimney does not shade it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The photovoltaic effect is:",
      "choices": [
        "Burning silicon to make heat",
        "Light knocking electrons loose in silicon, producing current",
        "Spinning a turbine with sunlight",
        "Storing sunlight in a battery"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Photons free electrons in the silicon, and the junction pushes them into a current. (a) Nothing is burned. (c) There is no turbine in a solar cell. (d) Storage is a battery's job, not the cell's."
    },
    {
      "q": "N-type silicon is silicon doped with:",
      "choices": [
        "Boron, leaving holes",
        "Phosphorus, adding spare electrons",
        "Copper wire",
        "Glass"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Phosphorus adds spare electrons — n-type. (a) Boron makes p-type silicon. (c) Copper is a conductor, not a dopant. (d) Glass is not a dopant."
    },
    {
      "q": "The p-n junction's job is to:",
      "choices": [
        "Store electricity",
        "Create an electric field that pushes freed electrons in one direction",
        "Cool the cell",
        "Connect the cell to the roof"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The junction's field is the one-way gate for electrons. (a) Cells do not store electricity. (c) The junction does not cool the cell. (d) Mounting hardware connects the module to the roof."
    },
    {
      "q": "One silicon solar cell produces about:",
      "choices": [
        "120 V",
        "12 V",
        "0.5–0.6 V",
        "240 V"
      ],
      "answer": 2,
      "explanation": "Correct: (c). A single cell makes about half a volt. (a), (b), and (d) 120 V, 12 V, and 240 V are all far above one cell's voltage — those come from many cells in series."
    },
    {
      "q": "Standard test conditions (STC) are:",
      "choices": [
        "1,000 W/m² of sunlight, 25°C cell temperature, AM 1.5",
        "A cloudy day at 0°C",
        "A rooftop in July",
        "Nighttime with a full moon"
      ],
      "answer": 0,
      "explanation": "Correct: (a). STC is the laboratory rating condition. (b) A cloudy cold day is not the rating condition. (c) A rooftop in July is hotter than 25°C. (d) Solar cells make no power at night."
    },
    {
      "q": "When a module gets hotter, its voltage:",
      "choices": [
        "Rises",
        "Falls",
        "Stays the same",
        "Becomes AC"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voltage falls with temperature — the coefficient is negative. (a) Voltage rises when it gets colder. (c) Voltage changes with temperature. (d) A module always makes DC."
    },
    {
      "q": "A disconnect at the inverter does NOT:",
      "choices": [
        "Isolate the array from the inverter",
        "De-energize sunlit modules",
        "Stop current to the house",
        "Open the circuit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Sunlit modules stay energized — the disconnect only isolates them. (a) Isolation is what the disconnect does. (c) Opening the circuit stops current to the house. (d) The disconnect opens the circuit."
    },
    {
      "q": "A bypass diode in a module lets current:",
      "choices": [
        "Flow around a shaded or failed group of cells",
        "Flow backward into the sun",
        "Stop completely",
        "Turn into heat only"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The bypass diode routes current around the shaded cells. (b) Current does not flow backward into the sun. (c) The point is to keep current flowing. (d) Some heat is produced, but the diode's job is to keep the string producing."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — How Solar Cells Make Electricity: Quick Reference</h3>\n<p><strong>Core idea:</strong> Photons knock electrons loose in silicon; the p-n junction's electric field pushes them one way, through a circuit — that flow is current.</p>\n<p><strong>Doping:</strong> Phosphorus = n-type (spare electrons) · Boron = p-type (holes). The junction between them is the one-way gate.</p>\n<p><strong>Numbers:</strong> One cell ~0.5–0.6 V · Voc = open-circuit voltage · Isc = short-circuit current · Pmax = rated watts at STC.</p>\n<p><strong>STC:</strong> 1,000 W/m², 25°C cell temperature, AM 1.5. Heat lowers voltage; low light lowers current.</p>\n<p><strong>Safety:</strong> A sunlit module is always energized. A disconnect does not de-energize it — de-energize, lock out, tag out, test dead, under a licensed supervisor, per NFPA 70E.</p>\n<p><strong>Self-check:</strong> Explain the photovoltaic effect and read Voc, Isc, and Pmax off a nameplate. If you can, you have this module.</p>\n"
};
