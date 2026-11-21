// egr101 - Module 9: Engineering-Math Basics: Percentages, Ratios, and Formulas
module.exports = {
  "number": 9,
  "slug": "engineering-math-basics",
  "title": "Engineering-Math Basics: Percentages, Ratios, and Formulas",
  "estTime": "3–4 hours",
  "objectives": [
    "Use percentages, ratios, and proportions in engineering problems.",
    "Rearrange a simple formula to find an unknown.",
    "Work out areas and volumes of rectangles, circles, and cylinders.",
    "Check an answer by estimating first.",
    "Explain why showing your working matters."
  ],
  "sections": [
    {
      "heading": "Maths Is the Language of Engineering",
      "html": "<p>Engineering runs on numbers. A bridge design is a set of numbers; a motor’s power is a number; a tolerance is a number. You do not need advanced maths to start — you need steady, careful arithmetic, and the habit of checking your answer makes sense.</p>\n<p>This module covers the maths you will use constantly: percentages, ratios, rearranging formulas, and areas and volumes. The next course, egr102, goes deeper. If you can do this module comfortably, you are ready for it.</p>\n"
    },
    {
      "heading": "Percentages and Ratios",
      "html": "<p>A percentage is a part out of a hundred. If a 200 kg load is reduced by 15%, the reduction is 0.15 × 200 = 30 kg, and the new load is 170 kg. Percentages are how engineers talk about safety margins, waste, and efficiency.</p>\n<p>A ratio compares two amounts. A concrete mix of 1:2:4 means 1 part cement to 2 parts sand to 4 parts gravel — 7 parts in total. If you need 70 kg of mix, each part is 10 kg, so you need 10 kg of cement, 20 kg of sand, and 40 kg of gravel. Ratios keep mixes and gears honest.</p>\n"
    },
    {
      "heading": "Rearranging Formulas",
      "html": "<p>A formula is a recipe with letters. Speed = distance ÷ time. If you know the speed and the time, you can find the distance by rearranging: distance = speed × time. The rule is simple: whatever you do to one side of an equals sign, do to the other side.</p>\n<p>Work through an example: a pump moves 60 litres in 3 minutes. Its flow rate is 60 ÷ 3 = 20 litres per minute. How long to move 100 litres? Time = 100 ÷ 20 = 5 minutes. Write the formula, put the numbers in, work it out, and write the unit — every time.</p>\n"
    },
    {
      "heading": "Areas and Volumes",
      "html": "<p>Area is how much surface something has. A rectangle’s area is length × width: a plate 200 mm by 120 mm has an area of 24,000 mm². A circle’s area is π × radius²: a circle with a 50 mm radius has an area of about 7,854 mm² (using π = 3.14 gives 7,850 mm²).</p>\n<p>Volume is area × depth. A tank 2 m long, 1 m wide, and 1 m deep holds 2 m³ — that is 2,000 litres. A cylinder’s volume is π × radius² × height: a pipe with a 50 mm radius and 1,000 mm length holds about 7,854,000 mm³, or 7.854 litres. These formulas come up in every engineering job.</p>\n<p><strong>Estimate First, Then Calculate</strong></p>\n<p>Before you calculate, estimate. If a plate is about 200 mm by 100 mm, its area is about 20,000 mm² — so if your calculator says 2,000,000 mm², you know you pressed a wrong key. Estimating catches the big mistakes that look plausible on a screen.</p>\n<p>Show your working. Write the formula, the numbers you put in, the answer, and the unit. If the answer is wrong, your working shows where; if it is right, your working proves it. In engineering, an answer without working is not an answer — it is a guess.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Percentages: part out of a hundred; ratios: comparing amounts.</li><li>Rearrange formulas by doing the same thing to both sides.</li><li>Rectangle area = length × width; circle area = πr²; volume = area × depth.</li><li>Estimate first, then calculate; always show your working and the unit.</li></ul></p>\n<p><strong>Common mistake:</strong> Forgetting to convert units before calculating — 200 mm × 1.2 m is wrong until both are in the same unit.</p>\n<p><strong>Common mistake:</strong> Using the diameter instead of the radius in πr². Halve the diameter first.</p>\n<p><strong>Ready check:</strong> If you can work out a 15% reduction, a 1:2:4 mix, a rectangle’s area, and a cylinder’s volume, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Percentage",
      "def": "A part out of a hundred; 15% of 200 is 30."
    },
    {
      "term": "Ratio",
      "def": "A comparison of two amounts, such as a concrete mix of 1 part cement to 2 parts sand."
    },
    {
      "term": "Proportion",
      "def": "A share of a whole worked out from a ratio, such as 1 part out of 7 total parts."
    },
    {
      "term": "Formula",
      "def": "A rule written with letters that links quantities, such as speed = distance ÷ time."
    },
    {
      "term": "Rearrange",
      "def": "Changing a formula around to find a different unknown, by doing the same thing to both sides."
    },
    {
      "term": "Area",
      "def": "How much surface something has, measured in square units such as mm² or m²."
    },
    {
      "term": "Volume",
      "def": "How much space something holds, measured in cubic units such as mm³, m³, or litres."
    },
    {
      "term": "Radius",
      "def": "The distance from the centre of a circle to its edge; half the diameter."
    },
    {
      "term": "Diameter",
      "def": "The distance across a circle through its centre; twice the radius."
    },
    {
      "term": "Pi (π)",
      "def": "The number about 3.14 that links a circle’s diameter to its circumference and area."
    },
    {
      "term": "Estimate",
      "def": "A rough answer worked out before the exact calculation, used to check the result makes sense."
    },
    {
      "term": "Unit",
      "def": "The measure a number is in, such as mm, kg, or seconds; always written with the number."
    },
    {
      "term": "Safety margin",
      "def": "Extra strength or capacity added on purpose, so a part is safe even if the load is bigger than expected."
    },
    {
      "term": "Efficiency",
      "def": "How much useful output you get compared with what you put in, usually as a percentage."
    }
  ],
  "video": {
    "title": "Understanding Fractions | Plumbing Math for Beginners | Updated",
    "embedUrl": "https://www.youtube.com/embed/ShNHqgtUqyE",
    "note": "Fractions are the everyday maths of the workshop: halves, quarters, and eighths on a tape measure and in a mix. Work through the examples with a pencil before moving on.",
    "more": [
      {
        "title": "What is Engineering?: Crash Course Engineering #1",
        "url": "https://www.youtube.com/watch?v=btGYcizV0iI"
      },
      {
        "title": "The Engineering Design Process - 6 Steps, Iteration and Learning from Failure",
        "url": "https://www.youtube.com/watch?v=j_29FuLJ5_c"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Percentage” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Percentage — A part out of a hundred; 15% of 200 is 30. It matters because it connects directly to this module’s first goal: Use percentages, ratios, and proportions in engineering problems. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Ratio” and “Proportion”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Ratio — A comparison of two amounts, such as a concrete mix of 1 part cement to 2 parts sand. Proportion — A share of a whole worked out from a ratio, such as 1 part out of 7 total parts. They differ in what they describe: the first is about ratio, the second about proportion. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Use percentages, ratios, and proportions in engineering problems.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Use percentages, ratios, and proportions in engineering problems. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Formula — A rule written with letters that links quantities, such as speed = distance ÷ time. Rearrange — Changing a formula around to find a different unknown, by doing the same thing to both sides. Area — How much surface something has, measured in square units such as mm² or m². Volume — How much space something holds, measured in cubic units such as mm³, m³, or litres. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A steel plate is 200 mm long and 120 mm wide. Work out its area in mm², then convert the area to cm². (Hint: 1 cm² = 100 mm².)</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Area = 200 × 120 = 24,000 mm². Step 2: 24,000 ÷ 100 = 240 cm². A good answer shows both steps and both units.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A concrete mix is 1 part cement : 2 parts sand : 4 parts gravel. You need 70 kg of mix in total. How much of each part do you need?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Total parts = 1 + 2 + 4 = 7. Step 2: Each part = 70 ÷ 7 = 10 kg. Step 3: Cement 1 × 10 = 10 kg; sand 2 × 10 = 20 kg; gravel 4 × 10 = 40 kg. Check: 10 + 20 + 40 = 70 kg.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Percentage” mean?",
      "choices": [
        "A part out of a hundred; 15% of 200 is 30.",
        "A share of a whole worked out from a ratio, such as 1 part out of 7 total parts.",
        "A rule written with letters that links quantities, such as speed = distance ÷ time.",
        "Changing a formula around to find a different unknown, by doing the same thing to both sides."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Percentage means: A part out of a hundred; 15% of 200 is 30.. (b) is the definition of Proportion, not of Percentage. (c) is the definition of Formula, not of Percentage. (d) is the definition of Rearrange, not of Percentage."
    },
    {
      "q": "What does the term “Proportion” mean?",
      "choices": [
        "Changing a formula around to find a different unknown, by doing the same thing to both sides.",
        "A share of a whole worked out from a ratio, such as 1 part out of 7 total parts.",
        "How much surface something has, measured in square units such as mm² or m².",
        "How much space something holds, measured in cubic units such as mm³, m³, or litres."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Proportion means: A share of a whole worked out from a ratio, such as 1 part out of 7 total parts.. (a) is the definition of Rearrange, not of Proportion. (c) is the definition of Area, not of Proportion. (d) is the definition of Volume, not of Proportion."
    },
    {
      "q": "What does the term “Rearrange” mean?",
      "choices": [
        "How much space something holds, measured in cubic units such as mm³, m³, or litres.",
        "The distance from the centre of a circle to its edge; half the diameter.",
        "Changing a formula around to find a different unknown, by doing the same thing to both sides.",
        "The distance across a circle through its centre; twice the radius."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Rearrange means: Changing a formula around to find a different unknown, by doing the same thing to both sides.. (a) is the definition of Volume, not of Rearrange. (b) is the definition of Radius, not of Rearrange. (d) is the definition of Diameter, not of Rearrange."
    },
    {
      "q": "What does the term “Volume” mean?",
      "choices": [
        "The distance across a circle through its centre; twice the radius.",
        "The number about 3.14 that links a circle’s diameter to its circumference and area.",
        "A rough answer worked out before the exact calculation, used to check the result makes sense.",
        "How much space something holds, measured in cubic units such as mm³, m³, or litres."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Volume means: How much space something holds, measured in cubic units such as mm³, m³, or litres.. (a) is the definition of Diameter, not of Volume. (b) is the definition of Pi (π), not of Volume. (c) is the definition of Estimate, not of Volume."
    },
    {
      "q": "A load of 200 kg is reduced by 15%. What is the new load?",
      "choices": [
        "30 kg",
        "170 kg",
        "185 kg",
        "215 kg"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 15% of 200 is 30, so 200 − 30 = 170 kg. (a) is the reduction, not the new load. (c) and (d) come from wrong percentages."
    },
    {
      "q": "A rectangular plate is 200 mm by 120 mm. What is its area?",
      "choices": [
        "320 mm²",
        "2,400 mm²",
        "24,000 mm²",
        "240,000 mm²"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 200 × 120 = 24,000 mm². (a) is the perimeter added wrongly. (b) misses a zero. (d) adds an extra zero."
    },
    {
      "q": "A circle has a radius of 10 mm. Using π = 3.14, what is its area?",
      "choices": [
        "31.4 mm²",
        "62.8 mm²",
        "314 mm²",
        "1,256 mm²"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Area = πr² = 3.14 × 100 = 314 mm². (a) is the circumference divided by 2. (b) is the circumference. (d) uses the diameter as the radius."
    },
    {
      "q": "A pump moves 60 litres in 3 minutes. How long will it take to move 100 litres at the same rate?",
      "choices": [
        "2 minutes",
        "3 minutes",
        "5 minutes",
        "6 minutes"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Flow rate is 60 ÷ 3 = 20 L/min, so 100 ÷ 20 = 5 minutes. (a) and (b) are too short. (d) would move 120 litres."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Engineering-Math Basics: Percentages, Ratios, and Formulas: Quick Reference</h3>\n<p><strong>Core idea:</strong> Use percentages, ratios, and proportions in engineering problems.</p>\n<p><strong>Key terms:</strong> Percentage · Ratio · Proportion · Formula · Rearrange · Area · Volume · Radius.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Use percentages, ratios, and proportions in engineering problems.</li>\n<li>Rearrange a simple formula to find an unknown.</li>\n<li>Work out areas and volumes of rectangles, circles, and cylinders.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
