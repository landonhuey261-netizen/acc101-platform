// ele106 - Module 8: Commercial Load Calculations
module.exports = {
  "number": 8,
  "slug": "commercial-load-calculations",
  "title": "Commercial Load Calculations",
  "estTime": "3–4 hours",
  "objectives": [
    "Run the Article 220 standard method for a commercial building.",
    "Use Table 220.42(A) lighting loads by occupancy.",
    "Apply receptacle loads (220.14(I)) and demand (220.47).",
    "Apply lighting demand factors from Table 220.45.",
    "Add motors (220.50), HVAC, and the largest-motor adder, then size the service."
  ],
  "sections": [
    {
      "heading": "The Standard Method for Commercial Buildings",
      "html": "<p>A commercial load calculation follows the Article 220 standard method, starting at 220.40: add up the loads by type, apply the demand factors, and size the service from the total. The load types are general lighting, receptacles, show-window lighting, signs, motors, HVAC, and any other fixed equipment. Each type has its own rule, and the calculation is done in volt-amperes so that the service current can be found by dividing by the voltage.</p><p>The general lighting load comes from Table 220.42(A): the floor area times the unit load for the occupancy. An office is 1.3 VA/ft², a retail store is 1.9 VA/ft², a warehouse is 1.2 VA/ft², a school is 1.5 VA/ft². The table note says the 125% continuous-load factor is already included in these values — do not apply another 125%. The floor area is measured from the outside dimensions of the building.</p><p>The receptacle load comes from 220.14(I): 180 VA per receptacle outlet in a non-dwelling. The show-window load comes from 220.43(A): 200 VA per linear foot. Sign lighting comes from 220.43(B): 1,200 VA for each sign outlet, or the actual load if it is larger. Each of these is added to the lighting load before the demand factors are applied.</p><div class=\"callout\"><strong>Key idea:</strong> Standard method (220.40): lighting from Table 220.42(A), receptacles at 180 VA each (220.14(I)), show windows at 200 VA/ft (220.43(A)), signs at 1,200 VA each (220.43(B)).</div>"
    },
    {
      "heading": "Demand Factors: Lighting (Table 220.45) and Receptacles (220.47)",
      "html": "<p>Demand factors recognize that not every load runs at once. Table 220.45 gives the lighting demand factors: most commercial occupancies take their lighting load at 100% — no reduction. Warehouses (storage) are the exception: the first 12,500 VA at 100% and the remainder at 50%. Hotels, motels, and hospitals have their own demand factors in the table.</p><p>Receptacle demand comes from 220.47: the first 10 kVA of receptacle load at 100% and the remainder at 50%. A building with 40 receptacles has a receptacle load of 7,200 VA (40 × 180), all of it at 100% because it is under 10 kVA. A building with 100 receptacles has 18,000 VA of receptacle load: the first 10,000 VA at 100% and the remaining 8,000 VA at 50%, for a demand of 14,000 VA.</p><p>The demand factors are applied to each load type separately, and the results are added. The general lighting load, the receptacle demand, the show-window load, the sign load, the motor loads, and the HVAC load all go into the total — and the total, divided by the service voltage, is the service current.</p><ul><li>Lighting demand (Table 220.45): most occupancies 100%; warehouses first 12,500 VA at 100%, remainder at 50%.</li><li>Receptacle demand (220.47): first 10 kVA at 100%, remainder at 50%.</li><li>Apply each demand factor separately, then add the results.</li></ul>"
    },
    {
      "heading": "Motors and HVAC in the Calculation",
      "html": "<p>Motor loads come from Article 430 and Section 220.50: each motor is taken at its full-load current from the tables, converted to volt-amperes, and the largest motor gets a 25% adder. A 10-horsepower, 480-volt motor (FLC 14 A) is 14 × 480 × 1.73 = 11,626 VA, and the largest-motor adder is 25% of the largest motor's load. The motor load is added to the total at 100% — there is no demand factor for motors.</p><p>HVAC is the largest load in most commercial buildings, and it is taken at its nameplate rating. Where heating and air conditioning will not run at the same time, Section 220.60 permits the larger of the two to be used and the smaller to be omitted — the same noncoincident-load rule as in dwellings. A building with 60 kVA of electric heat and 40 kVA of air conditioning counts 60 kVA, not 100 kVA.</p><p>Fixed equipment — water heaters, elevators, kitchen equipment, welders — is taken at its nameplate rating, and where four or more fixed appliances are present, Section 220.53 permits a 75% demand factor, just as in dwellings.</p><ul><li>Motors (220.50): FLC from the tables, converted to VA; largest motor gets a 25% adder.</li><li>HVAC: nameplate rating; noncoincident loads use the larger only (220.60).</li><li>Fixed appliances: nameplate; four or more get a 75% demand factor (220.53).</li></ul>"
    },
    {
      "heading": "From Total Load to Service Size",
      "html": "<p>The total calculated load in volt-amperes is divided by the service voltage to get the service current, and the service is sized at the next standard size above that current (240.6(A)). A total of 144,000 VA on a 480-volt, three-phase service is 144,000 ÷ (480 × 1.73) = 173 amperes, so the minimum service is 200 amperes. The service conductors are then sized at 125% of the continuous load plus 100% of the noncontinuous load, as Module 2 taught.</p><p>The calculation must also be checked against the panelboard and feeder sizes: the feeders must carry their loads, the panelboards must have enough spaces, and the service must have enough capacity for future growth. A service sized exactly to the calculated load with no room to grow is a service that will be replaced the first time the tenant adds equipment.</p><p>The load calculation is a document, not just a number: it is submitted with the permit application, and the inspector checks it. A calculation that is wrong — a missed load, a wrong table value, a demand factor applied twice — is a failed inspection and a delayed project.</p><div class=\"callout\"><strong>Key idea:</strong> Service current = total VA ÷ (voltage × 1.73 for three-phase). Size the service at the next standard size (240.6(A)), and leave room to grow.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Standard method (220.40): lighting (Table 220.42(A)), receptacles (220.14(I), 180 VA each), show windows (220.43(A), 200 VA/ft), signs (220.43(B), 1,200 VA each).</li><li>Lighting demand (Table 220.45): most occupancies 100%; warehouses first 12,500 VA at 100%, remainder at 50%.</li><li>Receptacle demand (220.47): first 10 kVA at 100%, remainder at 50%.</li><li>Motors (220.50): FLC from the tables, largest motor +25%. HVAC: nameplate; noncoincident loads use the larger (220.60).</li><li>Service current = total VA ÷ (voltage × 1.73 for three-phase); next standard size (240.6(A)).</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Applying another 125% to the Table 220.42(A) lighting loads. The table values already include the continuous-load factor.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting the largest-motor 25% adder, or applying a demand factor to the motor load. Motors are taken at 100% plus the 25% adder on the largest.</div><p><strong>Ready-to-Work link:</strong> If you can run a commercial load calculation from lighting through motors to the service size, you have this module. Module 9 covers emergency and standby systems.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "220.40",
      "def": "The standard method for load calculations starts here."
    },
    {
      "term": "Table 220.42(A)",
      "def": "General lighting loads by non-dwelling occupancy, in VA per square foot."
    },
    {
      "term": "220.14(I)",
      "def": "Each receptacle outlet in a non-dwelling counts 180 VA."
    },
    {
      "term": "220.43(A)",
      "def": "Show-window lighting: 200 VA per linear foot."
    },
    {
      "term": "220.43(B)",
      "def": "Sign lighting: 1,200 VA for each sign outlet."
    },
    {
      "term": "Table 220.45",
      "def": "Lighting demand factors by occupancy."
    },
    {
      "term": "220.47",
      "def": "Receptacle demand: first 10 kVA at 100%, remainder at 50%."
    },
    {
      "term": "220.50",
      "def": "Motor loads in a calculation: FLC from the tables, largest motor plus 25%."
    },
    {
      "term": "220.60",
      "def": "Noncoincident loads: use the larger of heating or air conditioning, not both."
    },
    {
      "term": "220.53",
      "def": "Four or more fixed appliances may be taken at 75%."
    },
    {
      "term": "240.6(A)",
      "def": "Standard overcurrent device ratings: 100, 110, 125, 150, 175, 200, 225, 250, 300, 350, 400 A, and up."
    },
    {
      "term": "Demand factor",
      "def": "A percentage applied to a load to recognize that not all loads run at once."
    }
  ],
  "video": {
    "title": "Journeyman Electrician (NEC 2023) — Load Calculations Article 220: 4 Worked Examples + 5 Self-Test",
    "embedUrl": "https://www.youtube.com/embed/UY7Py1Ry63s",
    "note": "This load-calculation video works four examples — standard and optional method — under the 2023 NEC. The dwelling examples in the video use the same Article 220 method this module applies to commercial buildings: watch the worked examples, then run the commercial version in the lab.",
    "more": [
      {
        "title": "Your Electrician Said \"Upgrade Your Panel and Service\" Here's the Math That Says Otherwise.",
        "url": "https://www.youtube.com/watch?v=MxglbqA5PXs"
      },
      {
        "title": "Why 3-Phase Is 400V in Europe but 480V or 208V in America?",
        "url": "https://www.youtube.com/watch?v=grffvmCzqcw"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 5,000-square-foot retail store has a Table 220.42(A) lighting load of 1.9 VA/ft². What is its general lighting load?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Multiply area by unit load: 5,000 × 1.9 = 9,500 VA. Step 2: The table value already includes the 125% factor. Step 3: The general lighting load is 9,500 VA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A building has 100 receptacles. What is the receptacle demand under 220.47?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Receptacle load = 100 × 180 = 18,000 VA. Step 2: First 10,000 VA at 100% = 10,000 VA. Step 3: Remaining 8,000 VA at 50% = 4,000 VA. Step 4: Demand = 10,000 + 4,000 = 14,000 VA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A warehouse is 10,000 square feet with a Table 220.42(A) load of 1.2 VA/ft². What is its lighting demand under Table 220.45?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Lighting load = 10,000 × 1.2 = 12,000 VA. Step 2: Table 220.45 for warehouses: first 12,500 VA at 100%, remainder at 50%. Step 3: The whole 12,000 VA is within the first 12,500 VA, so the demand is 12,000 VA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A commercial building's total calculated load is 144,000 VA on a 480-volt, three-phase service. What is the service current, and what is the minimum service size?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Three-phase current = VA ÷ (V × 1.73) = 144,000 ÷ (480 × 1.73) = 173 A. Step 2: The next standard size above 173 A is 200 A (240.6(A)). Step 3: The minimum service is 200 amperes.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A building has 25 linear feet of show window and two signs. What are the show-window and sign loads?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Show windows: 25 × 200 = 5,000 VA (220.43(A)). Step 2: Signs: 2 × 1,200 = 2,400 VA (220.43(B)). Step 3: Total for windows and signs = 7,400 VA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A building has electric heat of 60 kVA and air conditioning of 40 kVA. What HVAC load is used in the calculation?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Heating and air conditioning will not run at the same time, so they are noncoincident loads (220.60). Step 2: Use the larger only. Step 3: The HVAC load is 60 kVA.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The general lighting load for a non-dwelling occupancy is found in:",
      "choices": [
        "Table 220.12",
        "Table 220.42(A)",
        "Table 220.45",
        "Table 220.55"
      ],
      "answer": 1,
      "explanation": "Correct: (b). In the 2023 NEC, non-dwelling lighting loads are in Table 220.42(A). (a) Table 220.12 was the location in the 2017 NEC and earlier. (c) Table 220.45 is lighting demand factors. (d) Table 220.55 is dwelling ranges."
    },
    {
      "q": "The Table 220.42(A) lighting load for an office is:",
      "choices": [
        "1.2 VA/ft²",
        "1.3 VA/ft²",
        "1.9 VA/ft²",
        "3.0 VA/ft²"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Office is 1.3 VA/ft². (a) 1.2 VA/ft² is warehouses. (c) 1.9 VA/ft² is retail. (d) 3.0 VA/ft² was the 2017 value."
    },
    {
      "q": "Sign lighting is calculated at:",
      "choices": [
        "200 VA per linear foot",
        "180 VA per receptacle",
        "1,200 VA per sign outlet",
        "1.9 VA per square foot"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 220.43(B): 1,200 VA per sign outlet. (a) 200 VA/ft is show-window lighting. (b) 180 VA is the receptacle value. (d) 1.9 VA/ft² is the retail lighting load."
    },
    {
      "q": "Receptacle demand under 220.47 is:",
      "choices": [
        "First 10 kVA at 100%, remainder at 50%",
        "All of it at 100%",
        "First 3,000 VA at 100%, remainder at 35%",
        "All of it at 50%"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 220.47: first 10 kVA at 100%, remainder at 50%. (b) No demand factor would oversize the service. (c) That is the dwelling lighting demand (Table 220.45). (d) 50% for all of it would undersize the service."
    },
    {
      "q": "A warehouse lighting demand under Table 220.45 is:",
      "choices": [
        "All of it at 100%",
        "First 12,500 VA at 100%, remainder at 50%",
        "First 10 kVA at 100%, remainder at 50%",
        "All of it at 50%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Warehouses: first 12,500 VA at 100%, remainder at 50%. (a) Most occupancies are 100%, but warehouses have their own rule. (c) That is the receptacle demand (220.47). (d) 50% for all of it is not the rule."
    },
    {
      "q": "The largest-motor adder in a load calculation is:",
      "choices": [
        "10% of the largest motor",
        "25% of the largest motor",
        "50% of the largest motor",
        "100% of the largest motor"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 220.50: add 25% of the largest motor's load. (a) 10% is too little. (c) and (d) 50% and 100% are too much."
    },
    {
      "q": "Heating and air conditioning that will not run at the same time are handled by:",
      "choices": [
        "Adding both together",
        "Using the larger only (220.60)",
        "Using the smaller only",
        "Ignoring both"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 220.60: noncoincident loads use the larger only. (a) Adding both oversizes the service. (c) The smaller is not the load. (d) Both loads must be considered."
    },
    {
      "q": "Three-phase service current is calculated as:",
      "choices": [
        "VA ÷ voltage",
        "VA ÷ (voltage × 1.73)",
        "VA × voltage",
        "VA × 1.73"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Three-phase current = VA ÷ (V × √3). (a) That is the single-phase formula. (c) and (d) Multiplying gives the wrong units."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Commercial Load Calculations: Quick Reference</h3>\n<p><strong>Core idea:</strong> Add the loads by type, apply each demand factor separately, divide by the voltage (× 1.73 for three-phase), and size the service at the next standard size.</p>\n<p><strong>Loads:</strong> Lighting Table 220.42(A) (office 1.3, retail 1.9, warehouse 1.2 VA/ft²) · receptacles 180 VA each (220.14(I)) · show windows 200 VA/ft (220.43(A)) · signs 1,200 VA each (220.43(B)).</p>\n<p><strong>Demand:</strong> Lighting Table 220.45 (most 100%; warehouses first 12,500 VA at 100%, remainder 50%) · receptacles 220.47 (first 10 kVA at 100%, remainder 50%).</p>\n<p><strong>Motors/HVAC:</strong> Motors 220.50 (largest +25%) · noncoincident loads use the larger (220.60) · four or more fixed appliances at 75% (220.53).</p>\n<p><strong>Service:</strong> Current = VA ÷ (V × 1.73) for three-phase; next standard size (240.6(A)).</p>\n<p><strong>Self-check:</strong> Run a load calculation for a 5,000 ft² retail store with 60 receptacles, 25 ft of show window, and one 10 HP motor.</p>\n"
};
