// med110 - Module 9: Dosage Math — Getting the Numbers Right
module.exports = {
  "number": 9,
  "slug": "dosage-math-getting-numbers-right",
  "title": "Dosage Math — Getting the Numbers Right",
  "estTime": "3–4 hours",
  "objectives": [
    "Convert between grams, milligrams, and micrograms.",
    "Convert pounds to kilograms for weight-based dosing.",
    "Use the desired-over-have formula to calculate tablets and volumes.",
    "Calculate a weight-based dose in milligrams.",
    "Describe how to double-check a calculation and spot an unreasonable answer."
  ],
  "sections": [
    {
      "heading": "Why Dosage Math Matters",
      "html": "<p>Most medication errors are math errors. A decimal point in the wrong place, a unit mixed up, a pound treated as a kilogram — any of these can turn a safe dose into a dangerous one. The good news is that EMT dosage math is simple arithmetic: the same few conversions and one formula, used over and over. The bad news is that it must be done under pressure, in a moving ambulance, with a sick patient in front of you. That is why you practice it here, slowly, until it is automatic.</p>\n<p>The rule that governs all dosage math is: <strong>the units must match</strong>. You cannot divide milligrams by grams and get a sensible answer. You cannot use a dose in milligrams with a tablet strength in micrograms. Every calculation starts by making the units the same — and every calculation ends by asking, \"Does this answer make sense?\" A dose of 400 tablets does not make sense. A dose of 0.004 tablets does not make sense. If the answer looks wrong, it is wrong — stop and redo it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Dosage math has two rules: make the units match, and ask whether the answer makes sense. Every error you will ever make breaks one of those two rules.</div>"
    },
    {
      "heading": "The Metric Ladder: Grams, Milligrams, Micrograms",
      "html": "<p>The metric system is built on thousands. <strong>1 gram (g) = 1,000 milligrams (mg)</strong>, and <strong>1 milligram (mg) = 1,000 micrograms (mcg)</strong>. To go from a bigger unit to a smaller one, multiply by 1,000 (move the decimal point three places to the right). To go from a smaller unit to a bigger one, divide by 1,000 (move the decimal point three places to the left).</p>\n<p>Examples: 0.4 mg of nitroglycerin is 400 mcg (0.4 × 1,000). 325 mg of aspirin is 0.325 g (325 ÷ 1,000). 0.3 mg of epinephrine is 300 mcg (0.3 × 1,000). The most dangerous confusion is between milligrams and micrograms: 0.3 mg and 0.3 mcg differ by a factor of 1,000 — one is a normal adult epinephrine dose, the other is almost nothing. Always write the unit, and always say the unit out loud when you check with your partner.</p>\n<p>Liquid volumes use milliliters (mL). Remember that 1 teaspoon is about 5 mL, 1 tablespoon is about 15 mL, and 1 liter is 1,000 mL. And a useful fact for the field: 1 mL of water weighs 1 gram, which is why a 1-liter bag of fluid weighs about 1 kilogram — a fact that matters for weight-based calculations.</p>"
    },
    {
      "heading": "Pounds to Kilograms",
      "html": "<p>Many doses — especially children's doses — are based on weight in kilograms. In the United States, patients usually report their weight in pounds, so you must convert. The conversion is: <strong>kilograms = pounds ÷ 2.2</strong>. A 66 lb child weighs 30 kg (66 ÷ 2.2 = 30). A 154 lb adult weighs 70 kg (154 ÷ 2.2 = 70). A 33 lb child weighs 15 kg (33 ÷ 2.2 = 15).</p>\n<p>Notice how those numbers line up with the epinephrine auto-injector cutoffs from Module 5: 30 kg is 66 lb (adult 0.3 mg dose), and 15 kg is 33 lb (the bottom of the child 0.15 mg range). That is not a coincidence — the cutoffs were chosen in kilograms and converted to pounds for American users. When you see a weight in pounds, convert it to kilograms first, then use the kilogram number for everything else.</p>\n<p>For a quick field estimate, dividing by 2 is close enough to check whether an answer makes sense — but for the actual dose, use 2.2. The difference between dividing by 2 and dividing by 2.2 is about 10%, and in a child's dose, 10% can matter.</p>"
    },
    {
      "heading": "The Formula: Desired Over Have",
      "html": "<p>Almost every EMT dosage calculation uses one formula, called <strong>desired over have</strong>: (dose ordered ÷ dose on hand) × quantity on hand = amount to give. In plain words: divide what you want by what each tablet or vial holds, then multiply by how much volume or how many tablets that \"have\" amount comes in.</p>\n<p>Worked example 1: the order is 324 mg of aspirin, and the tablets are 81 mg each. Desired (324) ÷ have (81) = 4, and the quantity is 1 tablet, so 4 × 1 = 4 tablets. Worked example 2: the order is 160 mg of aspirin, and the tablets are 81 mg each. 160 ÷ 81 = 1.98 — about 2 tablets. Two tablets give 162 mg, which is inside the 160–325 mg range, so 2 tablets is the practical answer. (You cannot give 1.98 tablets, so you round to a sensible whole number and check that the result is still inside the allowed range.)</p>\n<p>Worked example 3, weight-based: a child weighs 44 lb and the ordered dose is 0.15 mg per kg of a drug. First convert: 44 ÷ 2.2 = 20 kg. Then multiply: 20 kg × 0.15 mg/kg = 3 mg. Worked example 4, volume: the order is 15 mg of a liquid drug, and the bottle says 5 mg per mL. Desired (15) ÷ have (5) = 3, quantity 1 mL, so 3 × 1 = 3 mL.</p>\n<p>After every calculation, do the sense check. Is the number of tablets reasonable (1 to 4, not 40)? Is the volume reasonable (a few mL, not a liter)? Does the answer fall inside the dose range you learned? If anything looks wrong, redo the calculation from the start, and ask your partner to calculate it independently. Two people getting the same answer is the best safety check there is.</p>\n<div class=\"callout\"><strong>Step 0 — Safety first:</strong> Before any dosage math: write the order down, write the units down, convert pounds to kilograms first for weight-based doses, and never do the calculation in your head when you can do it on paper. A written calculation can be checked; a mental one cannot.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Units must match before you calculate. 1 g = 1,000 mg; 1 mg = 1,000 mcg.</li>\n<li>Pounds to kilograms: kg = lb ÷ 2.2. (66 lb = 30 kg; 154 lb = 70 kg; 33 lb = 15 kg.)</li>\n<li>Desired over have: (dose ordered ÷ dose on hand) × quantity = amount to give.</li>\n<li>Weight-based dose: convert to kg first, then multiply by mg/kg.</li>\n<li>Always sense-check the answer: is the number of tablets or mL reasonable, and inside the allowed range?</li>\n<li>Have your partner calculate independently — two matching answers is the best safety check.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Mixing up milligrams and micrograms. 0.3 mg is 300 mcg — a factor of 1,000 apart. Always write the unit, say the unit out loud, and double-check it.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using pounds as if they were kilograms. A 66 lb child is 30 kg, not 66 kg — using the pound number as kilograms more than doubles the dose. Convert first, every time.</div>\n<p><strong>Ready-to-Work link:</strong> If you can convert grams to milligrams, convert pounds to kilograms, use desired-over-have for tablets and liquids, and calculate a weight-based dose, you have this module. Module 10 covers when NOT to give a drug.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Gram (g)",
      "def": "A metric unit of mass. 1 g = 1,000 mg."
    },
    {
      "term": "Milligram (mg)",
      "def": "One-thousandth of a gram. 1 mg = 1,000 mcg."
    },
    {
      "term": "Microgram (mcg)",
      "def": "One-thousandth of a milligram. 1 mg = 1,000 mcg."
    },
    {
      "term": "Milliliter (mL)",
      "def": "A metric unit of liquid volume. 1 liter = 1,000 mL; 1 teaspoon is about 5 mL."
    },
    {
      "term": "Kilogram (kg)",
      "def": "A metric unit of mass. 1 kg = 2.2 lb. Weight-based doses use kilograms."
    },
    {
      "term": "Desired over have",
      "def": "The dosage formula: (dose ordered ÷ dose on hand) × quantity on hand = amount to give."
    },
    {
      "term": "Weight-based dose",
      "def": "A dose calculated from the patient's weight, usually in mg per kg (mg/kg)."
    },
    {
      "term": "Sense check",
      "def": "Asking whether a calculated answer is reasonable — the right size, the right unit, inside the allowed range."
    },
    {
      "term": "Independent double-check",
      "def": "Having a second person calculate the same dose separately and comparing answers."
    },
    {
      "term": "Conversion factor",
      "def": "A number used to change units, such as 2.2 (pounds to kilograms) or 1,000 (grams to milligrams)."
    },
    {
      "term": "Dose range",
      "def": "The lowest to highest dose that is safe and allowed, such as aspirin 160–325 mg."
    },
    {
      "term": "Decimal point error",
      "def": "A mistake from a misplaced decimal point, such as giving 3.0 mg instead of 0.3 mg — a tenfold error."
    }
  ],
  "video": {
    "title": "Dosage Calculations Nursing Practice Problems & Comprehensive NCLEX Review",
    "embedUrl": "https://www.youtube.com/embed/hnzZKY8SGbE",
    "note": "RegisteredNurseRN works through dosage calculations step by step using dimensional analysis — conversions, weight-based dosing, and safe pediatric ranges. Follow along with a pen and paper and do each problem before she reveals the answer.",
    "more": [
      {
        "title": "Dosage Calculations Made Easy — Reconstitution Problems",
        "url": "https://www.youtube.com/watch?v=TK3ZAaMuhYk"
      },
      {
        "title": "Oral Medication Administration Step by Step — Five Rights & Safe Technique",
        "url": "https://www.youtube.com/watch?v=oRl8Mj52SsQ"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Convert 0.4 mg of nitroglycerin to micrograms. Show your work.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 1 mg = 1,000 mcg. Step 2: 0.4 × 1,000 = 400. Step 3: 0.4 mg = 400 mcg.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A child weighs 66 lb. Convert this to kilograms. Then: the ordered dose is 0.15 mg/kg. What is the dose in mg?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: kg = lb ÷ 2.2 → 66 ÷ 2.2 = 30 kg. Step 2: Dose = 30 kg × 0.15 mg/kg = 4.5 mg. Step 3: Sense check — 4.5 mg is a reasonable small dose for a 30 kg child.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The order is 162 mg of aspirin. Tablets are 81 mg each. How many tablets? Show the desired-over-have calculation.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Desired (162) ÷ have (81) = 2. Step 2: Quantity is 1 tablet, so 2 × 1 = 2 tablets. Step 3: Sense check — 2 tablets × 81 mg = 162 mg, inside the 160–325 mg range.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The order is 10 mg of a liquid drug. The bottle says 5 mg per mL. How many mL do you give?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Desired (10) ÷ have (5) = 2. Step 2: Quantity is 1 mL, so 2 × 1 = 2 mL. Step 3: Sense check — 2 mL is a reasonable small volume.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> An adult weighs 154 lb. Convert to kilograms. Then explain why this number matters for the epinephrine auto-injector.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 154 ÷ 2.2 = 70 kg. Step 2: The adult auto-injector (0.3 mg) is for patients 30 kg (66 lb) or more. Step 3: At 70 kg, this patient is well above the cutoff, so the 0.3 mg adult injector is the correct dose.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> You calculate a dose and get 40 tablets. What should you do, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Stop — 40 tablets fails the sense check; no EMT dose is 40 tablets. Step 2: Redo the calculation from the start, checking the units (mg vs. mcg, lb vs. kg) and the decimal point. Step 3: Ask your partner to calculate independently and compare answers before giving anything.</p>"
    }
  ],
  "quiz": [
    {
      "q": "How many milligrams are in 1 gram?",
      "choices": [
        "10 mg",
        "100 mg",
        "1,000 mg",
        "1,000,000 mg"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1 g = 1,000 mg. (a) 10 mg is one-hundredth of a gram. (b) 100 mg is one-tenth of a gram. (d) 1,000,000 mg is 1,000 grams, not 1 gram."
    },
    {
      "q": "0.3 mg of epinephrine equals how many micrograms?",
      "choices": [
        "3 mcg",
        "30 mcg",
        "300 mcg",
        "3,000 mcg"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1 mg = 1,000 mcg, so 0.3 × 1,000 = 300 mcg. (a) 3 mcg is one-hundredth of the right answer. (b) 30 mcg is one-tenth. (d) 3,000 mcg is ten times too much."
    },
    {
      "q": "A patient weighs 66 lb. In kilograms, that is:",
      "choices": [
        "66 kg",
        "30 kg",
        "15 kg",
        "145 kg"
      ],
      "answer": 1,
      "explanation": "Correct: (b). kg = lb ÷ 2.2, so 66 ÷ 2.2 = 30 kg. (a) 66 kg would be treating pounds as kilograms — more than double the real weight. (c) 15 kg is 33 lb, not 66 lb. (d) 145 kg is 66 lb multiplied by 2.2, the wrong direction."
    },
    {
      "q": "The order is 324 mg of aspirin; tablets are 81 mg each. How many tablets?",
      "choices": [
        "2 tablets",
        "3 tablets",
        "4 tablets",
        "8 tablets"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Desired over have: 324 ÷ 81 = 4 tablets. (a) 2 tablets would be 162 mg, not 324 mg. (b) 3 tablets would be 243 mg. (d) 8 tablets would be 648 mg, double the ordered dose."
    },
    {
      "q": "The order is 15 mg of a liquid drug; the bottle says 5 mg per mL. How many mL?",
      "choices": [
        "1 mL",
        "2 mL",
        "3 mL",
        "5 mL"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Desired over have: 15 ÷ 5 = 3, × 1 mL = 3 mL. (a) 1 mL would give only 5 mg. (b) 2 mL would give 10 mg. (d) 5 mL would give 25 mg."
    },
    {
      "q": "A child weighs 44 lb. The ordered dose is 0.15 mg/kg. What is the dose?",
      "choices": [
        "6.6 mg",
        "3 mg",
        "0.3 mg",
        "44 mg"
      ],
      "answer": 1,
      "explanation": "Correct: (b). First convert: 44 ÷ 2.2 = 20 kg. Then 20 × 0.15 = 3 mg. (a) 6.6 mg comes from using pounds as kilograms (44 × 0.15). (c) 0.3 mg is the adult epinephrine dose, not this calculation. (d) 44 mg uses the pound number directly as the dose."
    },
    {
      "q": "The most dangerous unit confusion in dosage math is between:",
      "choices": [
        "Grams and liters",
        "Milligrams and micrograms",
        "Milliliters and teaspoons",
        "Kilograms and pounds"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Milligrams and micrograms differ by a factor of 1,000 — 0.3 mg is 300 mcg, and confusing them is a thousandfold error. (a) Grams and liters measure different things and are rarely confused in dosing. (c) Milliliters and teaspoons differ by a factor of 5, which is an error but not a thousandfold one. (d) Kilograms and pounds differ by 2.2 — a real error, but smaller than the mg/mcg error."
    },
    {
      "q": "After calculating a dose, the best safety check is to:",
      "choices": [
        "Give it immediately before you forget",
        "Sense-check the answer and have your partner calculate it independently",
        "Round up to the nearest whole bottle",
        "Ask the patient to calculate it"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Sense-check the answer (reasonable size, right unit, inside the range) and have your partner calculate independently — two matching answers is the best check. (a) Giving it immediately skips the check. (c) Rounding up to a whole bottle is not a calculation. (d) The patient does not calculate the dose."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Dosage Math: Quick Reference</h3>\n<p><strong>Core idea:</strong> Make the units match, then ask whether the answer makes sense.</p>\n<p><strong>Metric:</strong> 1 g = 1,000 mg · 1 mg = 1,000 mcg · 1 L = 1,000 mL · 1 teaspoon ≈ 5 mL.</p>\n<p><strong>Pounds to kg:</strong> kg = lb ÷ 2.2. (66 lb = 30 kg · 154 lb = 70 kg · 33 lb = 15 kg.)</p>\n<p><strong>Formula:</strong> (dose ordered ÷ dose on hand) × quantity = amount to give.</p>\n<p><strong>Weight-based:</strong> Convert to kg first, then multiply by mg/kg.</p>\n<p><strong>Checks:</strong> Sense-check the answer (reasonable tablets or mL, inside the dose range) and have your partner calculate independently.</p>\n<p><strong>Danger:</strong> mg vs. mcg is a 1,000-fold difference. Always write the unit and say it out loud.</p>\n<p><strong>Self-check:</strong> Convert 0.4 mg to mcg, convert 66 lb to kg, and work a desired-over-have problem for tablets and one for liquid. If you can, you have this module.</p>\n"
};
