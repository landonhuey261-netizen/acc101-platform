// ele102 - Module 11: Batteries & DC Sources
module.exports = {
  "number": 11,
  "slug": "batteries-and-dc-sources",
  "title": "Batteries & DC Sources",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a battery produces voltage through a chemical reaction.",
    "Describe the difference between primary and secondary (rechargeable) cells.",
    "Explain battery capacity in amp-hours and how to calculate run time.",
    "Describe how batteries are connected in series and in parallel.",
    "Explain battery safety, including charging, ventilation, and acid hazards."
  ],
  "sections": [
    {
      "heading": "How a Battery Makes Voltage",
      "html": "<p>A battery is a chemical device that makes voltage. Inside a cell, two different materials — the electrodes — sit in a chemical solution — the electrolyte — and a chemical reaction between them pushes electrons from one electrode to the other. The electrode that loses electrons becomes positive; the one that gains them becomes negative. Connect a circuit across the terminals and the electrons flow from the negative terminal, through the circuit, back to the positive terminal, doing work along the way.</p>\n<p>A single cell makes a fixed voltage set by its chemistry: about 1.5 volts for an alkaline cell, about 2 volts for a lead-acid cell, about 3.7 volts for a lithium-ion cell. A battery is a group of cells connected together — the 12-volt car battery is six 2-volt lead-acid cells in series. The chemistry sets the voltage; the size of the cell sets how much current it can deliver and for how long.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A battery does not store electricity — it stores chemical energy and converts it to electrical energy when a circuit is connected.</div>"
    },
    {
      "heading": "Primary & Secondary Cells",
      "html": "<p><strong>Primary cells</strong> are single-use: the chemical reaction runs one way, and when the chemicals are used up, the cell is dead. Alkaline AA and AAA cells, and the lithium coin cells in watches and key fobs, are primary cells. <strong>Secondary cells</strong> are rechargeable: the chemical reaction can be reversed by pushing current back through the cell, restoring the chemicals. Lead-acid, nickel-metal hydride, and lithium-ion cells are secondary cells, and they power cars, power tools, phones, and laptops.</p>\n<p>Each chemistry has its own character. Lead-acid is heavy, cheap, and rugged — the car battery. Lithium-ion is light and energy-dense, but it needs protection against overcharging and damage, and a damaged lithium-ion battery can catch fire. Nickel-metal hydride sits in between. The electrician meets all of them: in vehicles, in cordless tools, in emergency lighting, and in backup power systems.</p>"
    },
    {
      "heading": "Capacity, Series & Parallel",
      "html": "<p>Battery <strong>capacity</strong> is measured in <strong>amp-hours (Ah)</strong>: a 100 Ah battery can deliver 100 amps for 1 hour, 10 amps for 10 hours, or 1 amp for 100 hours — in theory. In practice the capacity falls at high discharge rates and in cold weather, and a lead-acid battery should not be discharged below about half its capacity if it is to last. Run time is found by dividing capacity by current: a 10 Ah battery running a 2-amp load lasts about 5 hours.</p>\n<p>Batteries in <strong>series</strong> add voltage: two 12-volt batteries in series give 24 volts, with the same amp-hour capacity as one. Batteries in <strong>parallel</strong> add capacity: two 12-volt, 100 Ah batteries in parallel give 12 volts and 200 Ah. Series adds volts, parallel adds amp-hours — the same pattern as resistors, but reversed: series adds voltage here because each cell's voltage adds along the chain.</p>"
    },
    {
      "heading": "Battery Safety",
      "html": "<p>Batteries are safe when handled correctly and dangerous when they are not. Lead-acid batteries contain sulfuric acid, which burns skin and eyes — eye protection and gloves are worn when working with them, and acid on skin is flushed with water immediately. Charging a lead-acid battery produces hydrogen gas, which is explosive, so charging is done in a ventilated area with no sparks or flames nearby. A wrench dropped across a battery's terminals can short it, melt the wrench, and spray acid — which is why terminals are covered and tools are kept clear.</p>\n<p>Lithium-ion batteries need their own care: never charge a damaged or swollen battery, never puncture one, and never throw one in the trash — they are recycled through the proper channel. A battery that is hot, swollen, leaking, or making a hissing sound is taken out of service and handled with care. The rule for every battery is the same as for every electrical device: respect the energy stored in it, because the energy is real even when the battery looks quiet.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A battery converts chemical energy to electrical energy; a cell's voltage is set by its chemistry.</li>\n<li>Primary cells are single-use; secondary cells are rechargeable.</li>\n<li>Capacity is measured in amp-hours; run time = capacity ÷ current.</li>\n<li>Series adds voltage; parallel adds capacity (amp-hours).</li>\n<li>Lead-acid batteries contain acid and make hydrogen when charging — ventilate, wear PPE, keep sparks away.</li>\n<li>Damaged lithium-ion batteries are never charged or trashed — they are recycled properly.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking series batteries add amp-hours. Series adds voltage; parallel adds amp-hours. Mixing them up gives a battery bank with the wrong voltage or the wrong capacity.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Charging a lead-acid battery in a closed space. Charging makes hydrogen gas, which is explosive — ventilate, and keep sparks and flames away.</div>\n<p><strong>Ready-to-Work link:</strong> If you can explain how a battery makes voltage, calculate run time, and connect batteries in series and parallel, you have this module. Module 12 covers troubleshooting DC circuits.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Battery",
      "def": "A group of cells that converts chemical energy into electrical energy."
    },
    {
      "term": "Cell",
      "def": "A single chemical unit that makes voltage; a battery is a group of cells."
    },
    {
      "term": "Electrode",
      "def": "One of the two materials in a cell where the chemical reaction happens."
    },
    {
      "term": "Electrolyte",
      "def": "The chemical solution in a cell that carries charge between the electrodes."
    },
    {
      "term": "Primary cell",
      "def": "A single-use cell; the chemical reaction runs one way only."
    },
    {
      "term": "Secondary cell",
      "def": "A rechargeable cell; the chemical reaction can be reversed by charging."
    },
    {
      "term": "Amp-hour (Ah)",
      "def": "The unit of battery capacity; amps × hours."
    },
    {
      "term": "Lead-acid battery",
      "def": "A rechargeable battery using lead plates and sulfuric acid; the car battery."
    },
    {
      "term": "Lithium-ion battery",
      "def": "A light, energy-dense rechargeable battery used in tools, phones, and laptops."
    },
    {
      "term": "Alkaline cell",
      "def": "A single-use cell, about 1.5 volts, used in AA and AAA batteries."
    },
    {
      "term": "Series connection",
      "def": "Batteries connected end to end; voltages add, capacity stays the same."
    },
    {
      "term": "Parallel connection",
      "def": "Batteries connected side by side; capacity adds, voltage stays the same."
    },
    {
      "term": "Hydrogen gas",
      "def": "The explosive gas produced when a lead-acid battery charges."
    },
    {
      "term": "Sulfuric acid",
      "def": "The electrolyte in a lead-acid battery; it burns skin and eyes."
    },
    {
      "term": "Depth of discharge",
      "def": "How much of a battery's capacity has been used; deep discharge shortens a lead-acid battery's life."
    }
  ],
  "video": {
    "title": "How Batteries Work - Battery electricity working principle",
    "embedUrl": "https://www.youtube.com/embed/PXNKkcB0pI4",
    "note": "A battery walkthrough covering cells, chemistry, and capacity. As you watch, note the voltage of one lead-acid cell and how a 12-volt battery is built.",
    "more": [
      {
        "title": "How batteries work - Adam Jacobson",
        "url": "https://www.youtube.com/watch?v=9OVtk6G2TnQ"
      },
      {
        "title": "How Does a Battery Work? Electricity and Batteries Explained.",
        "url": "https://www.youtube.com/watch?v=AckbovTAdYY"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> How does a battery produce voltage?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A chemical reaction between two different electrodes in an electrolyte pushes electrons from one electrode to the other. Step 2: One electrode becomes positive and the other negative. Step 3: Connecting a circuit lets the electrons flow from negative to positive, doing work along the way.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> What is the difference between a primary cell and a secondary cell?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A primary cell is single-use — its reaction runs one way and the cell is dead when the chemicals are used up. Step 2: A secondary cell is rechargeable — pushing current back through it reverses the reaction. Step 3: Alkaline cells are primary; lead-acid, nickel-metal hydride, and lithium-ion cells are secondary.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A 10 Ah battery powers a 2-amp load. About how long will it last?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Run time = capacity ÷ current. Step 2: 10 ÷ 2 = 5 hours. Step 3: About 5 hours in theory; in practice, cold weather and high discharge rates shorten it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Two 12-volt, 100 Ah batteries are connected in series. What are the voltage and capacity of the bank?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Series adds voltage: 12 + 12 = 24 volts. Step 2: Series does not add capacity: the bank is still 100 Ah. Step 3: The bank is 24 volts, 100 Ah.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The same two batteries are connected in parallel. What are the voltage and capacity?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Parallel does not add voltage: the bank is still 12 volts. Step 2: Parallel adds capacity: 100 + 100 = 200 Ah. Step 3: The bank is 12 volts, 200 Ah.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Why must a lead-acid battery be charged in a ventilated area?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Charging produces hydrogen gas. Step 2: Hydrogen is explosive. Step 3: Ventilation keeps the gas from building up, and sparks and flames are kept away.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A battery converts:",
      "choices": [
        "Electrical energy into chemical energy",
        "Chemical energy into electrical energy",
        "Heat into light",
        "Motion into heat"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A battery converts stored chemical energy into electrical energy. (a) Charging converts electrical energy into chemical energy — the reverse. (c) Heat into light is a lamp. (d) Motion into heat is friction."
    },
    {
      "q": "A primary cell is:",
      "choices": [
        "Rechargeable",
        "Single-use",
        "Made of lithium only",
        "Used only in cars"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A primary cell is single-use. (a) Rechargeable cells are secondary cells. (c) Primary cells include alkaline and lithium coin cells. (d) Car batteries are secondary lead-acid cells."
    },
    {
      "q": "Battery capacity is measured in:",
      "choices": [
        "Watts",
        "Amp-hours",
        "Volts",
        "Ohms"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Capacity is measured in amp-hours. (a) Watts measure power. (c) Volts measure voltage. (d) Ohms measure resistance."
    },
    {
      "q": "A 10 Ah battery powering a 2-amp load lasts about:",
      "choices": [
        "2 hours",
        "5 hours",
        "10 hours",
        "20 hours"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Run time = 10 ÷ 2 = 5 hours. (a) 2 hours is the current, not the time. (c) 10 hours would need a 1-amp load. (d) 20 hours is 10 × 2, the wrong operation."
    },
    {
      "q": "Two 12 V, 100 Ah batteries in series give:",
      "choices": [
        "12 V, 200 Ah",
        "24 V, 100 Ah",
        "24 V, 200 Ah",
        "12 V, 100 Ah"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Series adds voltage (24 V) and keeps capacity (100 Ah). (a) That is a parallel connection. (c) Series does not add capacity. (d) That is a single battery."
    },
    {
      "q": "Two 12 V, 100 Ah batteries in parallel give:",
      "choices": [
        "12 V, 200 Ah",
        "24 V, 100 Ah",
        "24 V, 200 Ah",
        "12 V, 100 Ah"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Parallel keeps voltage (12 V) and adds capacity (200 Ah). (b) That is a series connection. (c) Parallel does not add voltage. (d) That is a single battery."
    },
    {
      "q": "One lead-acid cell makes about:",
      "choices": [
        "1.5 volts",
        "2 volts",
        "3.7 volts",
        "12 volts"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One lead-acid cell is about 2 volts; six in series make 12 volts. (a) 1.5 volts is an alkaline cell. (c) 3.7 volts is a lithium-ion cell. (d) 12 volts is the whole battery, not one cell."
    },
    {
      "q": "Charging a lead-acid battery produces:",
      "choices": [
        "Oxygen",
        "Hydrogen gas, which is explosive",
        "Carbon dioxide",
        "Nitrogen"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Charging produces hydrogen gas, which is explosive — ventilate and keep sparks away. (a) Oxygen is not the hazard gas. (c) Carbon dioxide is not produced. (d) Nitrogen is not produced."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Batteries & DC Sources: Quick Reference</h3>\n<p><strong>Core idea:</strong> A battery does not store electricity — it stores chemical energy and converts it to electrical energy.</p>\n<p><strong>Cells:</strong> Primary = single-use (alkaline) · Secondary = rechargeable (lead-acid, NiMH, lithium-ion).</p>\n<p><strong>Voltages:</strong> Alkaline ≈ 1.5 V · Lead-acid cell ≈ 2 V (six = 12 V) · Lithium-ion ≈ 3.7 V.</p>\n<p><strong>Capacity:</strong> Amp-hours · Run time = Ah ÷ amps.</p>\n<p><strong>Connections:</strong> Series adds voltage · Parallel adds capacity.</p>\n<p><strong>Safety:</strong> Lead-acid = acid + hydrogen when charging (ventilate, PPE, no sparks) · Damaged lithium-ion = never charge or trash, recycle properly.</p>\n<p><strong>Self-check:</strong> Explain how a battery makes voltage, calculate run time, and state the series/parallel rules, without looking.</p>\n"
};
