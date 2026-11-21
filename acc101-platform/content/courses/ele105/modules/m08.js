// ele105 - Module 8: Load Calculations for Dwellings (Article 220)
module.exports = {
  "number": 8,
  "slug": "load-calculations-dwellings",
  "title": "Load Calculations for Dwellings (Article 220)",
  "estTime": "3–4 hours",
  "objectives": [
    "Run the Article 220 standard method for a dwelling, step by step.",
    "Apply the general lighting load and the demand factors of Table 220.45.",
    "Add small-appliance, laundry, fixed-appliance, dryer, and range loads.",
    "Apply the heat-vs.-air-conditioning noncoincident rule and the largest-motor rule.",
    "Use the optional method of 220.82 and compare it with the standard method."
  ],
  "sections": [
    {
      "heading": "Why We Calculate the Load",
      "html": "<p>A load calculation answers one question: how much power could this house draw at its busiest moment? The answer sizes the service, the service-entrance conductors, and the main breaker. Without it, a service is a guess — and a guess that is too small trips the main breaker on the coldest night of the year, while a guess that is too large wastes the homeowner's money on copper and equipment they will never use.</p><p>Article 220 gives two methods for dwellings: the standard method (Part III) and the optional method (220.82). The standard method adds up every load category and applies demand factors that reflect the fact that not everything runs at once. The optional method is a shortcut for houses with the usual loads, and it usually gives a smaller service size. Both are Code-compliant; the exam tests the standard method most, because it teaches every category.</p><p>The calculation is done in volt-amperes (VA), not watts, because the Code works in VA for sizing. For resistive loads the numbers are the same; for motors and electronics they differ, and VA is the conservative figure. At the end, the total VA is divided by the service voltage (240 volts) to get the service current in amperes.</p><div class=\"callout\"><strong>Key idea:</strong> The load calculation sizes the service. It is done in VA, and the standard method adds every load category, then applies demand factors for loads that never all run at once.</div>"
    },
    {
      "heading": "The Standard Method, Step by Step",
      "html": "<p>Step 1, general lighting and receptacles: 3 VA per square foot of floor area (220.41 in the 2023 NEC; older books print 220.12). A 2,000-square-foot house has a general lighting load of 6,000 VA. Step 2, small-appliance and laundry: 1,500 VA for each of the two small-appliance circuits and 1,500 VA for the laundry circuit (220.52) — 4,500 VA total for a standard house. Step 3, add them: 6,000 + 4,500 = 10,500 VA of general load.</p><p>Step 4, apply the demand factors of Table 220.45: the first 3,000 VA at 100%, the remainder at 35%. For 10,500 VA, the demand is 3,000 + (7,500 × 0.35) = 3,000 + 2,625 = 5,625 VA. Step 5, fixed appliances: add the nameplate ratings of the fixed appliances (dishwasher, disposal, water heater, and similar), and if there are four or more fixed appliances, take 75% of their total (220.53). Step 6, dryer: 5,000 VA or the nameplate, whichever is larger (220.54). Step 7, range: the demand from Table 220.55 — a single 12 kW range demands 8 kW.</p><p>Step 8, heat versus air conditioning: take the larger of the two, never both, because they never run at the same time (220.60). Step 9, largest motor: add 25% of the largest motor's load (220.50). Step 10, add everything and divide by 240 volts to get the service current, then choose the next standard breaker size from 240.6(A).</p><ul><li>General lighting: 3 VA/ft² (220.41). Small-appliance + laundry: 1,500 VA each (220.52).</li><li>Demand (Table 220.45): first 3,000 VA at 100%, remainder at 35%.</li><li>Fixed appliances: 75% if four or more (220.53). Dryer: 5,000 VA or nameplate (220.54). Range: Table 220.55.</li><li>Heat vs. A/C: larger only (220.60). Largest motor: +25% (220.50).</li></ul>"
    },
    {
      "heading": "Worked Example: A 2,000-Square-Foot House",
      "html": "<p>A 2,000-square-foot house has a general lighting load of 2,000 × 3 = 6,000 VA, plus two small-appliance circuits and one laundry circuit at 1,500 VA each = 4,500 VA, for a general load of 10,500 VA. The Table 220.45 demand is 3,000 + (7,500 × 0.35) = 5,625 VA.</p><p>Fixed appliances: a dishwasher (1,200 VA), a disposal (800 VA), a water heater (4,500 VA), and a microwave (1,500 VA) total 8,000 VA. There are four, so take 75%: 6,000 VA. The dryer is 5,000 VA. The range is 12 kW nameplate, demanding 8,000 VA from Table 220.55. Heat is 10,000 VA and air conditioning is 6,000 VA, so take the heat: 10,000 VA. The largest motor is the air conditioner compressor at 6,000 VA, so add 25%: 1,500 VA.</p><p>Total: 5,625 + 6,000 + 5,000 + 8,000 + 10,000 + 1,500 = 36,125 VA. Divide by 240 volts: 150.5 amperes. The next standard size is 175 amperes, but the standard service sizes are 100, 125, 150, 175, and 200 — and since the calculated load is just over 150, the service must be at least 175 amperes. In practice the homeowner would install a 200-ampere service, which is the standard choice.</p><div class=\"callout\"><strong>Key idea:</strong> Work the standard method in order: general load, demand factors, fixed appliances, dryer, range, heat-or-A/C, largest motor, then divide by 240 volts.</div>"
    },
    {
      "heading": "The Optional Method (220.82)",
      "html": "<p>The optional method (220.82) is a shorter calculation for a dwelling with the usual loads. It takes the general load (lighting, small-appliance, and laundry) plus the nameplate ratings of the fixed appliances, the dryer, and the range, then applies a single demand: the first 10 kVA at 100% and the remainder at 40%. Heat and air conditioning are added at 100% of the larger, and the service must be at least 100 amperes.</p><p>For the same 2,000-square-foot house, the optional method gives a smaller number than the standard method — often by 20 to 30 amperes — because the 40% demand factor is more generous than the standard method's category-by-category treatment. That is why the optional method is popular for service sizing: it reflects how houses actually use power, and it usually lands on a 150- or 200-ampere service without oversizing.</p><p>The optional method may not be used for every dwelling: it requires the house to have the usual loads and a service of at least 100 amperes, and it may not be used where the loads are unusual. When in doubt, run the standard method — it is always acceptable, and it is the method the exam tests.</p><ul><li>Optional method (220.82): first 10 kVA at 100%, remainder at 40%; heat/A/C at 100% of the larger.</li><li>Usually gives a smaller service size than the standard method.</li><li>Standard method is always acceptable and is the exam's method.</li></ul>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Standard method: general lighting 3 VA/ft² (220.41) + 1,500 VA per small-appliance/laundry circuit (220.52), then Table 220.45 demand (first 3,000 VA at 100%, rest at 35%).</li><li>Fixed appliances: 75% if four or more (220.53). Dryer: 5,000 VA or nameplate (220.54). Range: Table 220.55.</li><li>Heat vs. A/C: larger only (220.60). Largest motor: +25% (220.50).</li><li>Optional method (220.82): first 10 kVA at 100%, remainder at 40%.</li><li>Divide total VA by 240 V for service amperes; choose the next standard size (240.6(A)).</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Adding heat and air conditioning together. They never run at the same time — take the larger only (220.60).</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting the 25% largest-motor adder (220.50). It is a separate step, not part of the appliance total.</div><p><strong>Ready-to-Work link:</strong> If you can run the standard method for a house from scratch, you have this module — and you can size any dwelling service. Module 9 covers reading house plans and symbols.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Load calculation",
      "def": "The Article 220 computation of the maximum power a dwelling may draw; it sizes the service."
    },
    {
      "term": "Standard method",
      "def": "The step-by-step Article 220, Part III load calculation."
    },
    {
      "term": "Optional method",
      "def": "The shorter dwelling load calculation in 220.82."
    },
    {
      "term": "220.41",
      "def": "General lighting load for dwellings: 3 VA per square foot (2023 NEC)."
    },
    {
      "term": "220.52",
      "def": "Small-appliance and laundry loads: 1,500 VA per circuit."
    },
    {
      "term": "Table 220.45",
      "def": "Demand factors for the general load: first 3,000 VA at 100%, remainder at 35%."
    },
    {
      "term": "220.53",
      "def": "Fixed appliances: 75% of the total when there are four or more."
    },
    {
      "term": "220.54",
      "def": "Dryer load: 5,000 VA or nameplate, whichever is larger."
    },
    {
      "term": "Table 220.55",
      "def": "Demand factors for household electric ranges."
    },
    {
      "term": "220.60",
      "def": "Noncoincident loads: heat and air conditioning — take the larger only."
    },
    {
      "term": "220.50",
      "def": "Largest motor: add 25% of the largest motor's load."
    },
    {
      "term": "240.6(A)",
      "def": "Standard overcurrent device ratings: 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, and larger."
    },
    {
      "term": "Volt-ampere (VA)",
      "def": "The unit of apparent power used in load calculations."
    }
  ],
  "video": {
    "title": "Journeyman Electrician (NEC 2023) — Load Calculations Article 220: 4 Worked Examples + 5 Self-Test",
    "embedUrl": "https://www.youtube.com/embed/UY7Py1Ry63s",
    "note": "This NEC 2023 load-calculation masterclass works four full dwelling examples step by step — standard method and optional method — then finishes with a self-test. Work each example on paper before the presenter solves it.",
    "more": [
      {
        "title": "Your Electrician Said \"Upgrade Your Panel and Service\" Here's the Math That Says Otherwise.",
        "url": "https://www.youtube.com/watch?v=MxglbqA5PXs"
      },
      {
        "title": "EV Charging For $1 Per 100 Miles",
        "url": "https://www.youtube.com/watch?v=JsYefGUCxDM"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A 1,500-square-foot house has two small-appliance circuits and one laundry circuit. What is the general load before demand factors?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Lighting: 1,500 × 3 = 4,500 VA. Step 2: Small-appliance and laundry: 3 × 1,500 = 4,500 VA. Step 3: General load = 4,500 + 4,500 = 9,000 VA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Apply Table 220.45 to a general load of 9,000 VA. What is the demand load?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: First 3,000 VA at 100% = 3,000 VA. Step 2: Remainder 6,000 VA at 35% = 2,100 VA. Step 3: Demand load = 3,000 + 2,100 = 5,100 VA.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Four fixed appliances total 6,000 VA. What load is used in the calculation?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: There are four fixed appliances, so 220.53 applies. Step 2: 6,000 × 0.75 = 4,500 VA. Step 3: Use 4,500 VA in the calculation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A house has 8,000 VA of electric heat and 5,000 VA of air conditioning. What load is used, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Take the larger only: 8,000 VA. Step 2: Section 220.60 treats heat and air conditioning as noncoincident loads. Step 3: They never run at the same time, so adding both would oversize the service.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A dwelling's total calculated load is 28,800 VA at 240 volts. What is the service current, and what is the minimum standard service size?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 28,800 ÷ 240 = 120 amperes. Step 2: The next standard size in 240.6(A) above 120 is 125 amperes. Step 3: The minimum service is 125 amperes (a 150- or 200-ampere service is the usual practical choice).</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A dryer nameplate reads 4,800 VA. What load is used in the calculation?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Section 220.54 uses the larger of 5,000 VA or the nameplate. Step 2: The nameplate is 4,800 VA, which is below 5,000 VA. Step 3: Use 5,000 VA.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The general lighting load for a dwelling is calculated at:",
      "choices": [
        "1 VA per square foot",
        "2 VA per square foot",
        "3 VA per square foot",
        "5 VA per square foot"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 220.41: 3 VA per square foot. (a) and (b) 1 and 2 VA are too low. (d) 5 VA is too high for dwellings."
    },
    {
      "q": "Each small-appliance and laundry circuit counts as how many VA in the load calculation?",
      "choices": [
        "1,000 VA",
        "1,500 VA",
        "2,000 VA",
        "3,000 VA"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 220.52: 1,500 VA per circuit. (a) 1,000 VA is too low. (c) and (d) 2,000 and 3,000 VA are too high."
    },
    {
      "q": "Table 220.45 applies demand factors to the general load as:",
      "choices": [
        "First 3,000 VA at 100%, remainder at 35%",
        "All of it at 35%",
        "First 10,000 VA at 100%, remainder at 40%",
        "All of it at 100%"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Table 220.45: first 3,000 VA at 100%, the rest at 35%. (b) The first 3,000 VA is not discounted. (c) That is the optional method (220.82). (d) No demand factor would oversize the service."
    },
    {
      "q": "Four or more fixed appliances are counted at:",
      "choices": [
        "100% of their total",
        "75% of their total",
        "50% of their total",
        "35% of their total"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 220.53: 75% when there are four or more. (a) 100% applies when there are fewer than four. (c) and (d) 50% and 35% are not the fixed-appliance factor."
    },
    {
      "q": "Heat and air conditioning loads are treated as:",
      "choices": [
        "Added together",
        "The larger only, because they never run at the same time",
        "The smaller only",
        "Ignored"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 220.60: noncoincident loads — take the larger. (a) Adding both oversizes the service. (c) The smaller is not the rule. (d) Both loads matter; the larger is counted."
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
      "q": "The optional method (220.82) applies demand as:",
      "choices": [
        "First 3,000 VA at 100%, remainder at 35%",
        "First 10 kVA at 100%, remainder at 40%",
        "All loads at 75%",
        "All loads at 100%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 220.82: first 10 kVA at 100%, remainder at 40%. (a) That is the standard method's Table 220.45. (c) and (d) 75% and 100% are not the optional-method factors."
    },
    {
      "q": "A dwelling's total calculated load is 24,000 VA at 240 volts. The service current is:",
      "choices": [
        "80 amperes",
        "100 amperes",
        "120 amperes",
        "150 amperes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 24,000 ÷ 240 = 100 amperes. (a) 80 A would be 19,200 VA. (c) 120 A would be 28,800 VA. (d) 150 A would be 36,000 VA."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Dwelling Load Calculations: Quick Reference</h3>\n<p><strong>Core idea:</strong> Add every load category, apply demand factors, divide by 240 V, and pick the next standard service size.</p>\n<p><strong>Standard method:</strong> Lighting 3 VA/ft² (220.41) + 1,500 VA per small-appliance/laundry circuit (220.52) → Table 220.45 demand (first 3,000 VA 100%, rest 35%).</p>\n<p><strong>Then add:</strong> Fixed appliances 75% if 4+ (220.53) · dryer 5,000 VA or nameplate (220.54) · range Table 220.55 · heat OR A/C, larger only (220.60) · largest motor +25% (220.50).</p>\n<p><strong>Optional method (220.82):</strong> First 10 kVA at 100%, remainder at 40%.</p>\n<p><strong>Service sizes (240.6(A)):</strong> 100, 110, 125, 150, 175, 200 A…</p>\n<p><strong>Self-check:</strong> Run the standard method for a 1,500-sq-ft house from scratch, out loud, in ten steps.</p>\n"
};
