// ele102 - Module 3: Power & Watt's Law
module.exports = {
  "number": 3,
  "slug": "power-and-watts-law",
  "title": "Power & Watt's Law",
  "estTime": "3–4 hours",
  "objectives": [
    "Define electric power and state its unit, the watt.",
    "State Watt's law (P = E × I) and use it to solve for power, voltage, or current.",
    "Combine Ohm's law and Watt's law to solve for power from resistance and current or voltage.",
    "Explain the difference between watts, kilowatts, and kilowatt-hours.",
    "Calculate the cost of running an electrical load from its wattage and the energy rate."
  ],
  "sections": [
    {
      "heading": "What Power Is",
      "html": "<p><strong>Power</strong> is the rate at which electrical energy is used or produced, measured in <strong>watts (W)</strong>. A 60-watt light bulb uses energy at a rate of 60 watts while it is on; a 1,500-watt space heater uses energy 25 times faster. Power is what the electric bill is really about — not how much current flows, but how fast energy is consumed — and it is what heats a wire, lights a lamp, and turns a motor.</p>\n<p>Power is the product of voltage and current: pushing more charge (more current) with more force (more voltage) delivers more power. That is why a 120-volt circuit and a 240-volt circuit can deliver very different amounts of power at the same current, and why high-voltage transmission lines carry power efficiently over long distances.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Power is the rate of energy use. Watts tell you how fast; watt-hours tell you how much.</div>"
    },
    {
      "heading": "Watt's Law: P = E × I",
      "html": "<p><strong>Watt's law</strong> states that power equals voltage times current: <strong>P = E × I</strong>. Rearranged, it gives <strong>E = P ÷ I</strong> and <strong>I = P ÷ E</strong>. The three forms are drawn as a circle like Ohm's law, with P on top and E and I on the bottom. Worked example: a 120-volt circuit feeds a load drawing 10 amps. The power is P = 120 × 10 = 1,200 watts. Another: a 1,500-watt heater runs on 120 volts. The current is I = 1,500 ÷ 120 = 12.5 amps. A third: a 2,400-watt load draws 10 amps. The voltage is E = 2,400 ÷ 10 = 240 volts.</p>\n<p>Watt's law and Ohm's law work together. Substituting Ohm's law into Watt's law gives two more forms: <strong>P = I² × R</strong> (power from current and resistance) and <strong>P = E² ÷ R</strong> (power from voltage and resistance). These are the forms that explain why an overloaded wire overheats: power lost as heat in a wire is I² × R, so doubling the current quadruples the heat. That is why a small increase in current can be a big problem for a wire.</p>"
    },
    {
      "heading": "Watts, Kilowatts & Kilowatt-Hours",
      "html": "<p>Power is measured in watts, but the electric bill is measured in <strong>kilowatt-hours (kWh)</strong>: one kilowatt (1,000 watts) used for one hour. A 100-watt bulb running for 10 hours uses 1,000 watt-hours, or 1 kWh. A 1,500-watt heater running for 2 hours uses 3 kWh. The distinction matters: watts are a rate, like miles per hour; kilowatt-hours are a quantity, like miles. A load's wattage tells you how fast it uses energy; the time it runs tells you how much it uses.</p>\n<p>The cost follows directly: cost = energy used (kWh) × the rate (dollars per kWh). A 1,500-watt heater running 4 hours uses 6 kWh; at a rate of 15 cents per kWh, that costs 90 cents. The electrician who can do this math can answer a customer's real question — \"how much will this cost to run?\" — and can explain why a bigger load needs a bigger circuit.</p>"
    },
    {
      "heading": "Power in Real Circuits",
      "html": "<p>In a real circuit, not all the power is useful. Some power is lost as heat in the wire itself — I² × R losses — which is why long runs and small wires waste energy and why voltage drop matters. Some loads, such as motors, draw more power when they start than when they run, and the circuit must be sized for the starting current as well as the running current. And every load has a power rating — printed on its nameplate — that tells the electrician how much current it will draw and therefore what size circuit it needs.</p>\n<p>The nameplate is the electrician's best friend for sizing. A motor's nameplate lists its voltage, its full-load current, and its horsepower; a heater's nameplate lists its wattage and voltage. The electrician reads the nameplate, calculates the current with Watt's law, and sizes the circuit, the wire, and the breaker to match — with the safety factors the NEC requires.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Power is the rate of energy use, measured in watts.</li>\n<li>Watt's law: P = E × I, E = P ÷ I, I = P ÷ E.</li>\n<li>Combined forms: P = I² × R and P = E² ÷ R — doubling current quadruples the heat in a wire.</li>\n<li>Energy is power × time: kilowatt-hours (kWh) are what the bill measures.</li>\n<li>Cost = kWh × rate; the nameplate gives the load's power and voltage.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Confusing watts and kilowatt-hours. Watts are a rate; kilowatt-hours are a quantity. A 1,500-watt heater does not cost 1,500 of anything — it costs for each hour it runs.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting that heat in a wire goes as the square of the current. Doubling the current does not double the heat — it quadruples it.</div>\n<p><strong>Ready-to-Work link:</strong> If you can state Watt's law in all three forms, use the I²R form, and calculate energy cost, you have this module. Module 4 covers series circuits.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Power",
      "def": "The rate at which electrical energy is used or produced, measured in watts."
    },
    {
      "term": "Watt (W)",
      "def": "The unit of power."
    },
    {
      "term": "Watt's law",
      "def": "P = E × I: power equals voltage times current."
    },
    {
      "term": "Kilowatt (kW)",
      "def": "1,000 watts."
    },
    {
      "term": "Kilowatt-hour (kWh)",
      "def": "The unit of electrical energy: one kilowatt used for one hour; what the electric bill measures."
    },
    {
      "term": "I²R loss",
      "def": "Power lost as heat in a conductor, equal to current squared times resistance."
    },
    {
      "term": "Nameplate",
      "def": "The label on a load listing its voltage, current, wattage, or horsepower."
    },
    {
      "term": "Full-load current",
      "def": "The current a motor draws when running at its rated load."
    },
    {
      "term": "Energy",
      "def": "The total amount of work done or heat produced; power × time."
    },
    {
      "term": "Rate",
      "def": "The price of electricity, in dollars per kilowatt-hour."
    },
    {
      "term": "Horsepower (hp)",
      "def": "A unit of mechanical power; 1 hp is about 746 watts."
    },
    {
      "term": "Efficiency",
      "def": "The ratio of useful output power to input power, usually given as a percentage."
    },
    {
      "term": "Starting current",
      "def": "The higher current a motor draws when it starts, compared with its running current."
    },
    {
      "term": "Load",
      "def": "The part of a circuit that uses electrical energy."
    },
    {
      "term": "Heat",
      "def": "Energy lost in a conductor as I²R; the reason wires overheat when overloaded."
    }
  ],
  "video": {
    "title": "What is the Formula for Power 🤔 This Trick Will Help you Remember...",
    "embedUrl": "https://www.youtube.com/embed/b5dusL-pxak",
    "note": "A power-formula walkthrough. As you watch, write down Watt's law in all three forms and the two combined forms with Ohm's law.",
    "more": [
      {
        "title": "The Power Formula - EXPLAINED",
        "url": "https://www.youtube.com/watch?v=PapVbSye5SQ"
      },
      {
        "title": "Watts, Voltage & Ampere Calculation #shotsvideo #Basicelectric #electricalcalcul",
        "url": "https://www.youtube.com/watch?v=0S-wNzTOShQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 120-volt circuit feeds a load drawing 10 amps. What is the power?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use P = E × I. Step 2: P = 120 × 10 = 1,200 watts. Step 3: The power is 1,200 watts, or 1.2 kW.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A 1,500-watt heater runs on 120 volts. What current does it draw?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use I = P ÷ E. Step 2: I = 1,500 ÷ 120 = 12.5 amps. Step 3: The heater draws 12.5 amps.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 2,400-watt load draws 10 amps. What is the voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use E = P ÷ I. Step 2: E = 2,400 ÷ 10 = 240 volts. Step 3: The voltage is 240 volts.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A resistor of 10 ohms carries 4 amps. How much power is lost as heat in the resistor?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Use P = I² × R. Step 2: P = 4² × 10 = 16 × 10 = 160 watts. Step 3: 160 watts is lost as heat.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A 100-watt bulb runs for 10 hours. How many kilowatt-hours does it use?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Energy = power × time = 100 W × 10 h = 1,000 Wh. Step 2: 1,000 Wh = 1 kWh. Step 3: The bulb uses 1 kWh.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A 1,500-watt heater runs for 4 hours at a rate of 15 cents per kWh. What does it cost?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Energy = 1,500 W × 4 h = 6,000 Wh = 6 kWh. Step 2: Cost = 6 × $0.15 = $0.90. Step 3: It costs 90 cents.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Watt's law states that power equals:",
      "choices": [
        "Voltage divided by current",
        "Voltage times current",
        "Resistance times current",
        "Voltage squared"
      ],
      "answer": 1,
      "explanation": "Correct: (b). P = E × I. (a) Voltage divided by current is resistance. (c) Resistance times current is voltage. (d) Voltage squared alone is not power."
    },
    {
      "q": "A 120-volt circuit feeds a load drawing 10 amps. The power is:",
      "choices": [
        "12 watts",
        "120 watts",
        "1,200 watts",
        "12,000 watts"
      ],
      "answer": 2,
      "explanation": "Correct: (c). P = 120 × 10 = 1,200 watts. (a) 12 watts is 120 ÷ 10. (b) 120 watts confuses the voltage with the power. (d) 12,000 watts is 120 × 100."
    },
    {
      "q": "A 1,500-watt heater on 120 volts draws:",
      "choices": [
        "12.5 amps",
        "15 amps",
        "1,500 amps",
        "125 amps"
      ],
      "answer": 0,
      "explanation": "Correct: (a). I = 1,500 ÷ 120 = 12.5 amps. (b) 15 amps is a common breaker size, not the answer. (c) 1,500 amps confuses watts with amps. (d) 125 amps is 1,500 ÷ 12."
    },
    {
      "q": "Power lost as heat in a wire is:",
      "choices": [
        "I × R",
        "I² × R",
        "E ÷ R",
        "E × R"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Heat loss is I² × R. (a) I × R is voltage drop. (c) E ÷ R is current. (d) E × R is not a standard formula."
    },
    {
      "q": "If the current in a wire doubles, the heat lost in the wire:",
      "choices": [
        "Doubles",
        "Stays the same",
        "Quadruples",
        "Is halved"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Heat is I² × R, so doubling I multiplies the heat by four. (a) Doubling would be true if heat were I × R. (b) Heat rises with current. (d) Heat rises, it does not fall."
    },
    {
      "q": "A kilowatt-hour is:",
      "choices": [
        "1,000 watts",
        "One kilowatt used for one hour",
        "One watt used for 1,000 hours",
        "A unit of power"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A kWh is 1 kW for 1 hour — a unit of energy. (a) 1,000 watts is a kilowatt, a rate. (c) One watt for 1,000 hours is also 1 kWh, but the definition is one kilowatt for one hour. (d) A kWh is energy, not power."
    },
    {
      "q": "A 100-watt bulb running for 10 hours uses:",
      "choices": [
        "10 kWh",
        "1 kWh",
        "100 kWh",
        "1,000 kWh"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 100 W × 10 h = 1,000 Wh = 1 kWh. (a) 10 kWh would need 1,000 watts. (c) 100 kWh is far too much. (d) 1,000 kWh is far too much."
    },
    {
      "q": "The nameplate on a motor lists:",
      "choices": [
        "The price of the motor",
        "Its voltage, full-load current, and horsepower",
        "The date it was installed",
        "The name of the installer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The nameplate lists voltage, full-load current, and horsepower. (a) Price is not on a nameplate. (c) Installation date is not on a nameplate. (d) The installer's name is not on a nameplate."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Power & Watt's Law: Quick Reference</h3>\n<p><strong>Core idea:</strong> Power is the rate of energy use. Watts tell you how fast; watt-hours tell you how much.</p>\n<p><strong>Watt's law:</strong> P = E × I · E = P ÷ I · I = P ÷ E.</p>\n<p><strong>Combined forms:</strong> P = I² × R (heat in a wire) · P = E² ÷ R.</p>\n<p><strong>Energy:</strong> kWh = kW × hours · Cost = kWh × rate.</p>\n<p><strong>Watch out:</strong> Doubling current quadruples the heat in a wire — heat goes as I².</p>\n<p><strong>Self-check:</strong> Solve 120 V × 10 A, 1,500 W ÷ 120 V, and the cost of 6 kWh at 15¢/kWh, without looking.</p>\n"
};
