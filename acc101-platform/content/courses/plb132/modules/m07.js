// Plumbing 132 - Module 7: Basic Electricity for Plumbers
module.exports = {
  "number": 7,
  "slug": "basic-electricity-for-plumbers",
  "title": "Basic Electricity for Plumbers",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain voltage, current, resistance, and power in plain language.",
    "Use Ohm's law (V = I × R) and the power formula (P = V × I) to solve simple circuits.",
    "Distinguish AC from DC and 120-volt from 240-volt residential circuits.",
    "Read a simple wiring diagram: power, switch, load, and ground.",
    "State the electrical loads a plumber meets: water heater elements, pumps, disposals, and controls."
  ],
  "sections": [
    {
      "heading": "Electricity as Water in a Pipe",
      "html": "\n<p>Electricity is easier to understand if you compare it with water. <strong>Voltage</strong> is the pressure — the push that moves the electricity. <strong>Current</strong> (measured in amps) is the flow — how much electricity is moving. <strong>Resistance</strong> (measured in ohms) is the restriction — how hard it is for the electricity to flow. <strong>Power</strong> (measured in watts) is the work done — the heat, light, or motion the electricity produces.</p>\n<p>A water heater element is a resistor: it resists the flow of electricity, and the resistance turns the electrical energy into heat. A pump motor is a load: it turns electrical energy into motion. A switch is a valve: it starts and stops the flow. A wire is a pipe: it carries the flow, and a wire that is too small for the current overheats, just as a pipe that is too small for the flow chokes it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Voltage is pressure, current is flow, resistance is restriction, power is work. If you can picture water in a pipe, you can picture electricity in a wire.</div>\n<p>The plumber does not need to be an electrician. But the plumber meets electricity on every job: water heater elements, circulator pumps, garbage disposals, dishwashers, sump pumps, and the low-voltage controls that run boilers and water heaters. Understanding the basics lets you diagnose, wire a thermostat, and know when to call the electrician.</p>"
    },
    {
      "heading": "Ohm's Law and Power",
      "html": "\n<p><strong>Ohm's law</strong> ties voltage, current, and resistance together: <strong>V = I × R</strong> (voltage equals current times resistance). If you know any two, you can find the third. A 120-volt circuit feeding a load with 12 ohms of resistance draws 10 amps (120 ÷ 12 = 10). Double the resistance and the current halves; double the voltage and the current doubles.</p>\n<p><strong>Power</strong> is voltage times current: <strong>P = V × I</strong> (watts equals volts times amps). A 120-volt water heater element drawing 12.5 amps uses 1,500 watts. A 240-volt element drawing the same 12.5 amps uses 3,000 watts — twice the power at the same current, which is why large heaters run on 240 volts. Power is also what the electric bill measures, in kilowatt-hours: a 1,500-watt heater running for one hour uses 1.5 kilowatt-hours.</p>\n<p>Worked example: an electric water heater has a 4,500-watt element on a 240-volt circuit. What current does it draw? P = V × I, so I = P ÷ V = 4,500 ÷ 240 = <strong>18.75 amps</strong>. That is why the circuit needs a 25-amp or 30-amp breaker and the right wire size — the current decides the wire, and the wire decides the breaker.</p>\n<div class=\"callout\"><strong>Key idea:</strong> V = I × R and P = V × I. Two formulas, and they answer almost every electrical question a plumber will face: how much current, how much power, and what size wire and breaker.</div>"
    },
    {
      "heading": "AC, DC, 120 Volts, and 240 Volts",
      "html": "\n<p>Residential power is <strong>alternating current (AC)</strong>: the current reverses direction 60 times a second (60 hertz). <strong>Direct current (DC)</strong> flows one way only, and it is what batteries and electronics use. Almost everything in a house runs on AC, and the low-voltage controls on a boiler or a water heater run on AC too — usually 24 volts AC, stepped down by a transformer.</p>\n<p>A house is fed with <strong>240 volts</strong> between the two hot legs, and <strong>120 volts</strong> between either hot leg and neutral. Small loads — lights, receptacles, disposals, dishwashers, and most pumps — run on 120 volts. Large loads — electric water heaters, electric furnaces, and large air conditioners — run on 240 volts, because the same power at twice the voltage needs half the current, and half the current needs a smaller wire.</p>\n<p>Every circuit has a <strong>ground</strong>: a safety path that carries fault current away so a person does not. The ground wire (bare or green) connects the metal parts of an appliance to the earth. A ground fault — current leaking to ground — is what a <strong>GFCI</strong> (ground-fault circuit interrupter) detects and interrupts in a fraction of a second. GFCIs are required where water and electricity meet: kitchens, bathrooms, garages, and outdoors.</p>"
    },
    {
      "heading": "Reading a Wiring Diagram",
      "html": "\n<p>A wiring diagram is a map: power comes in, a switch controls it, a load uses it, and the ground protects it. Read it the way you read a plumbing drawing — follow the flow. The <strong>power source</strong> (the panel) feeds the <strong>hot</strong> wire (black or red) through a <strong>switch</strong> or a control to the <strong>load</strong> (the element, the motor, the burner control), and the <strong>neutral</strong> wire (white) carries the current back. The <strong>ground</strong> (bare or green) connects to the metal case and goes to the earth.</p>\n<p>Low-voltage control wiring is the plumber's daily electrical work: a thermostat is a switch that closes when the room is cold and opens when it is warm; an aquastat is a switch that closes when the boiler water is cool and opens when it is hot; a circulator's relay is a switch that the thermostat closes to start the pump. Module 9 wires these controls together.</p>\n<p>The boundary matters. A plumber may wire low-voltage controls and connect an appliance to an existing circuit, but running new 120-volt or 240-volt circuits, changing a panel, and sizing wire and breakers are electrician's work in most jurisdictions — and in Michigan, electrical work requires an electrical license. Know the boundary, and call the electrician when the work crosses it.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Voltage is pressure, current is flow (amps), resistance is restriction (ohms), power is work (watts).</li>\n<li>Ohm's law: V = I × R. Power: P = V × I. A 4,500-watt element on 240 volts draws 18.75 amps.</li>\n<li>Residential power is AC at 60 hertz. 120 volts for small loads, 240 volts for large loads. Ground is the safety path; GFCI protects where water meets electricity.</li>\n<li>Wiring diagram: power → switch/control → load → neutral back; ground to the metal case.</li>\n<li>Plumber's electrical work: low-voltage controls and appliance connections. New circuits and panels belong to the electrician.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Sizing a wire or a breaker by the appliance's wattage alone. Current decides the wire: divide watts by volts to get amps, then size the wire and the breaker to the amps.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating a 240-volt circuit like a 120-volt one. A 240-volt circuit has two hot legs and no neutral return for the load — and it can kill just as surely as a 120-volt circuit. Verify the voltage before you touch it, and verify it is off before you work on it.</div>\n<p><strong>Ready-to-Work link:</strong> NCCER 02210, Basic Electricity, is the foundation for the controls module that follows. If you can solve V = I × R and P = V × I and read a simple wiring diagram, you have this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Voltage",
      "def": "The electrical pressure that pushes current through a circuit, measured in volts."
    },
    {
      "term": "Current",
      "def": "The flow of electricity through a circuit, measured in amps."
    },
    {
      "term": "Resistance",
      "def": "The opposition to current flow in a circuit, measured in ohms; a heater element is a resistor."
    },
    {
      "term": "Power",
      "def": "The rate at which electrical energy is used, measured in watts; P = V × I."
    },
    {
      "term": "Ohm's law",
      "def": "V = I × R; voltage equals current times resistance."
    },
    {
      "term": "Alternating current (AC)",
      "def": "Current that reverses direction 60 times per second; the residential power supply."
    },
    {
      "term": "Direct current (DC)",
      "def": "Current that flows in one direction only, as from a battery."
    },
    {
      "term": "Hertz",
      "def": "Cycles per second; residential AC is 60 hertz."
    },
    {
      "term": "Ground",
      "def": "A safety path that carries fault current to the earth so a person does not."
    },
    {
      "term": "GFCI",
      "def": "Ground-fault circuit interrupter; a device that detects current leaking to ground and shuts the circuit off in a fraction of a second."
    },
    {
      "term": "Load",
      "def": "Any device that uses electricity: an element, a motor, a burner control."
    },
    {
      "term": "Neutral",
      "def": "The white wire that carries current back to the source in a 120-volt circuit."
    },
    {
      "term": "Transformer",
      "def": "A device that changes voltage — for example, stepping 120 volts down to 24 volts for controls."
    },
    {
      "term": "Kilowatt-hour",
      "def": "The unit of electrical energy on a bill: 1,000 watts used for one hour."
    }
  ],
  "video": {
    "title": "Electricity Explained: Volts, Amps, Watts, Fuse Sizing, Wire Gauge, AC/DC, Solar Power and more!",
    "embedUrl": "https://www.youtube.com/embed/cX4s-bxn4fs",
    "note": "Volts, amps, watts, wire gauge, and AC/DC explained with the water analogy this module uses. Watch it once and the two formulas — V = I × R and P = V × I — will stick.",
    "more": [
      {
        "title": "Ohms Law Explained - The basics circuit theory",
        "url": "https://www.youtube.com/watch?v=HsLLq6Rm5tU"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 120-volt circuit feeds a load with 12 ohms of resistance. What current flows?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Ohm's law is V = I × R, so I = V ÷ R. Step 2: I = 120 ÷ 12 = <strong>10 amps</strong>. Step 3: That is the current the wire and the breaker must handle.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> An electric water heater element is rated 4,500 watts on a 240-volt circuit. What current does it draw?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Power is P = V × I, so I = P ÷ V. Step 2: I = 4,500 ÷ 240 = <strong>18.75 amps</strong>. Step 3: The circuit needs a breaker and wire sized for at least 18.75 amps — in practice a 25-amp or 30-amp breaker with the matching wire size.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 1,500-watt space heater runs on a 120-volt circuit for 2 hours. How much energy does it use, in kilowatt-hours?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Energy = power × time. Step 2: 1,500 watts × 2 hours = 3,000 watt-hours. Step 3: 3,000 ÷ 1,000 = <strong>3 kilowatt-hours</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A circulator pump is rated 120 volts, 2 amps. What is its power draw in watts?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: P = V × I. Step 2: P = 120 × 2 = <strong>240 watts</strong>. Step 3: A small load — which is why circulators run on ordinary 120-volt circuits.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A disposal is wired to a 120-volt circuit with a 15-amp breaker. The disposal draws 9 amps and the dishwasher on the same circuit draws 10 amps. What happens when both run, and what is the fix?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Together they draw 9 + 10 = 19 amps. Step 2: That exceeds the 15-amp breaker, so the breaker trips. Step 3: The fix is a separate circuit for one of the appliances (electrician's work) — not a larger breaker on the existing wire, which would let the wire overheat.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A thermostat circuit runs on 24 volts AC. Where does the 24 volts come from, and why is it used for controls?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A <strong>transformer</strong> steps the 120-volt supply down to 24 volts AC. Step 2: 24 volts is used for controls because it is safer to work with and because thermostats, aquastats, and relays are built for it. Step 3: The low-voltage circuit controls the high-voltage equipment through relays — the thermostat switches 24 volts, and the relay switches the 120-volt or 240-volt load.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Voltage is best compared with:",
      "choices": [
        "Water flow",
        "Water pressure",
        "Pipe size",
        "Water temperature"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voltage is the pressure that pushes current, just as water pressure pushes flow. (a) Current is the flow. (c) Pipe size compares with wire size. (d) Temperature has no electrical parallel here."
    },
    {
      "q": "Ohm's law is:",
      "choices": [
        "P = V × I",
        "V = I × R",
        "P = I × R",
        "V = P ÷ R"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Voltage equals current times resistance. (a) is the power formula. (c) mixes power and resistance incorrectly. (d) is not a standard formula."
    },
    {
      "q": "A 4,500-watt element on a 240-volt circuit draws:",
      "choices": [
        "9.4 amps",
        "18.75 amps",
        "37.5 amps",
        "4,500 amps"
      ],
      "answer": 1,
      "explanation": "Correct: (b). I = P ÷ V = 4,500 ÷ 240 = 18.75 amps. (a) is the 120-volt value halved incorrectly. (c) doubles the answer. (d) confuses watts with amps."
    },
    {
      "q": "Residential power in the United States is:",
      "choices": [
        "DC at 120 volts",
        "AC at 60 hertz, 120 volts for small loads and 240 volts for large loads",
        "DC at 240 volts",
        "AC at 50 hertz"
      ],
      "answer": 1,
      "explanation": "Correct: (b). AC at 60 hertz, 120 volts for small loads and 240 volts for large ones. (a) and (c) are DC, which is not the house supply. (d) 50 hertz is the European standard, not the U.S. one."
    },
    {
      "q": "A GFCI protects against:",
      "choices": [
        "Overloads",
        "Current leaking to ground, as when a person becomes the path",
        "Short circuits only",
        "Power outages"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A GFCI detects current leaking to ground and interrupts the circuit in a fraction of a second. (a) Overload protection is the breaker's job. (c) A GFCI also interrupts on a ground fault, not only on a short. (d) A GFCI does not protect against outages."
    },
    {
      "q": "Power in watts equals:",
      "choices": [
        "Volts divided by amps",
        "Volts times amps",
        "Amps times ohms",
        "Volts times ohms"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P = V × I. (a) Volts divided by amps is resistance. (c) Amps times ohms is voltage. (d) Volts times ohms is not a standard quantity."
    },
    {
      "q": "A thermostat circuit runs on 24 volts AC because:",
      "choices": [
        "24 volts is cheaper to generate",
        "A transformer steps 120 volts down, and 24 volts is safer for controls",
        "Thermostats cannot use 120 volts",
        "24 volts uses less wire"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A transformer steps the supply down, and low voltage is safer for control wiring and devices. (a) Cost is not the reason. (c) Some thermostats do use line voltage, but 24 volts is the standard for controls. (d) Wire size is set by current, not by the voltage choice alone."
    },
    {
      "q": "The ground wire in a circuit is:",
      "choices": [
        "The wire that carries current back to the source",
        "A safety path that carries fault current to the earth",
        "The wire that powers the load",
        "Only needed on 240-volt circuits"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Ground is the safety path for fault current. (a) The neutral carries current back. (c) The hot wire powers the load. (d) Ground is needed on 120-volt circuits too."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Basic Electricity for Plumbers: Quick Reference</h3>\n<p><strong>Water analogy:</strong> Voltage = pressure · Current = flow (amps) · Resistance = restriction (ohms) · Power = work (watts).</p>\n<p><strong>Formulas:</strong> Ohm's law V = I × R · Power P = V × I · Energy = power × time (kilowatt-hours).</p>\n<p><strong>Worked numbers:</strong> 120 V ÷ 12 Ω = 10 A · 4,500 W ÷ 240 V = 18.75 A · 1,500 W × 2 hr = 3 kWh.</p>\n<p><strong>Supply:</strong> AC at 60 Hz. 120 V for small loads (disposals, dishwashers, pumps), 240 V for large loads (electric water heaters). Ground is the safety path; GFCI protects where water meets electricity.</p>\n<p><strong>Diagram:</strong> Power → switch/control → load → neutral back; ground to the metal case. Low-voltage controls (24 V AC) switch relays that switch the line-voltage load.</p>\n<p><strong>Boundary:</strong> Plumber: low-voltage controls and appliance connections. Electrician: new circuits, panels, wire and breaker sizing.</p>\n<p><strong>Watch out:</strong> Current decides the wire — divide watts by volts to get amps before you size anything.</p>\n<p><strong>Self-check:</strong> Solve V = I × R and P = V × I for a water heater element, and read a thermostat-to-relay diagram, without notes.</p>\n"
};
