// egr102 - Module 1: Numbers, Algebra & Rearranging Formulas
module.exports = {
  "number": 1,
  "slug": "algebra-and-formulas",
  "title": "Numbers, Algebra & Rearranging Formulas",
  "estTime": "3–4 hours",
  "objectives": [
    "Solve a simple equation for an unknown, step by step.",
    "Rearrange a formula such as V = IR or F = ma.",
    "Use brackets, powers, and square roots correctly.",
    "Substitute numbers into a formula with the right units.",
    "Check an answer by estimating and by checking units."
  ],
  "sections": [
    {
      "heading": "Why Algebra Is an Engineering Tool",
      "html": "<p>Algebra is shorthand for “find the missing number”. An engineer rarely gets all the numbers handed to them: they know the voltage and the resistance and must find the current, or they know the force and the mass and must find the acceleration. Algebra is how you turn what you know into what you need.</p>\n<p>The golden rule: whatever you do to one side of an equals sign, do to the other side. If 2x + 6 = 20, subtract 6 from both sides (2x = 14), then divide both sides by 2 (x = 7). Check by putting 7 back: 2 × 7 + 6 = 20. Correct.</p>\n"
    },
    {
      "heading": "Rearranging Formulas",
      "html": "<p>A formula links quantities with letters. Ohm’s law says V = I × R (voltage = current × resistance). To find current, divide both sides by R: I = V ÷ R. To find resistance, divide both sides by I: R = V ÷ I. One formula, three uses.</p>\n<p>Newton’s second law says F = m × a. To find acceleration: a = F ÷ m. To find mass: m = F ÷ a. Worked example: a 5 kg trolley is pushed with 15 N. Its acceleration is a = 15 ÷ 5 = 3 m/s². Always write the formula first, then the numbers, then the answer with its unit.</p>\n"
    },
    {
      "heading": "Brackets, Powers, and Roots",
      "html": "<p>Brackets tell you what to do first: 2 × (3 + 4) = 2 × 7 = 14, not 2 × 3 + 4 = 10. Powers mean repeated multiplication: 4² = 4 × 4 = 16, and 2³ = 2 × 2 × 2 = 8. A square root undoes a square: √16 = 4, because 4 × 4 = 16.</p>\n<p>Order of operations (BODMAS/BIDMAS) matters: brackets first, then powers, then multiplication and division, then addition and subtraction. For 3 + 4 × 2, do 4 × 2 = 8 first, then 3 + 8 = 11. Getting the order wrong is the most common algebra mistake in engineering.</p>\n"
    },
    {
      "heading": "Substituting Numbers — With Units",
      "html": "<p>Substituting means replacing letters with numbers. For a circle of radius 0.05 m, area = πr² = 3.14 × (0.05)² = 3.14 × 0.0025 = 0.00785 m². Note the brackets around 0.05: squaring the radius means squaring the number and the unit.</p>\n<p>Units must match before you substitute. If a length is in millimetres and the formula expects metres, convert first: 50 mm = 0.05 m. A number without a unit, or with the wrong unit, gives a wrong answer that looks right — the most dangerous kind of wrong.</p>\n<p><strong>Checking Your Answer</strong></p>\n<p>Three checks catch most errors. First, estimate: if the answer should be about 10 and you get 1,000, something is wrong. Second, check the units: a force must come out in newtons, a speed in m/s. Third, check by substitution: put your answer back into the original equation and see if it balances.</p>\n<p>Example: solve 3x − 9 = 12. Add 9: 3x = 21. Divide by 3: x = 7. Check: 3 × 7 − 9 = 21 − 9 = 12. It balances, so x = 7 is correct. Five seconds of checking saves hours of building on a wrong number.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong><ul><li>Do the same thing to both sides of an equation.</li><li>One formula gives many rearrangements: V = IR gives I = V/R and R = V/I.</li><li>Brackets first, then powers, then ×/÷, then +/−.</li><li>Convert units before substituting; write the unit with the answer.</li><li>Estimate, check units, and substitute back.</li></ul></p>\n<p><strong>Common mistake:</strong> Dividing only one term: in (2x + 6) ÷ 2, both terms divide — x + 3, not x + 6.</p>\n<p><strong>Common mistake:</strong> Forgetting to square the unit as well as the number: (0.05 m)² = 0.0025 m², not 0.0025 m.</p>\n<p><strong>Ready check:</strong> If you can solve 2x + 6 = 20, rearrange V = IR to find I, and work out π × (0.05)² with units, you have this module.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Algebra",
      "def": "Maths with letters standing for unknown numbers, used to find missing values."
    },
    {
      "term": "Equation",
      "def": "A statement that two things are equal, such as 2x + 6 = 20."
    },
    {
      "term": "Unknown",
      "def": "A value you need to find, usually written as a letter such as x."
    },
    {
      "term": "Formula",
      "def": "A rule linking quantities, written with letters, such as V = I × R."
    },
    {
      "term": "Substitute",
      "def": "To replace a letter in a formula with its number, then work it out."
    },
    {
      "term": "Rearrange",
      "def": "To change a formula around to find a different unknown."
    },
    {
      "term": "Bracket",
      "def": "Marks ( ) that show which part of a calculation to do first."
    },
    {
      "term": "Power",
      "def": "Repeated multiplication, such as 4² = 4 × 4 = 16."
    },
    {
      "term": "Square root",
      "def": "The number that, multiplied by itself, gives the original number; √16 = 4."
    },
    {
      "term": "Ohm’s law",
      "def": "V = I × R: voltage equals current times resistance."
    },
    {
      "term": "Newton’s second law",
      "def": "F = m × a: force equals mass times acceleration."
    },
    {
      "term": "Estimate",
      "def": "A rough answer worked out first, to check the exact answer makes sense."
    },
    {
      "term": "Unit",
      "def": "The measure a number is in, such as newtons (N) or metres per second (m/s)."
    },
    {
      "term": "Check by substitution",
      "def": "Putting your answer back into the original equation to see if it balances."
    }
  ],
  "video": {
    "title": "How to Find the Volume of a Cylinder | Math with Mr. J",
    "embedUrl": "https://www.youtube.com/embed/fGVlL47TKAw",
    "note": "Formulas in action: volume = πr² × height, worked slowly with numbers. Follow along and pause to work each step yourself before he does.",
    "more": [
      {
        "title": "Example: Using soh cah toa | Basic trigonometry | Trigonometry | Khan Academy",
        "url": "https://www.youtube.com/watch?v=I3jyBUyjg48"
      },
      {
        "title": "Vector intro for linear algebra | Vectors and spaces | Linear Algebra | Khan Academy",
        "url": "https://www.youtube.com/watch?v=br7tS1t2SFE"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In your own words, explain what “Algebra” means and why it matters in this module. Use one example from the module.</p>",
      "solution": "<p><strong>Answer:</strong> Algebra — Maths with letters standing for unknown numbers, used to find missing values. It matters because it connects directly to this module’s first goal: Solve a simple equation for an unknown, step by step. A good answer names the term correctly, explains it in plain words, and gives a real example from the module.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Compare “Equation” and “Unknown”. How are they different, and when would you meet each one?</p>",
      "solution": "<p><strong>Answer:</strong> Equation — A statement that two things are equal, such as 2x + 6 = 20. Unknown — A value you need to find, usually written as a letter such as x. They differ in what they describe: the first is about equation, the second about unknown. A good answer states both definitions and gives one situation for each.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A classmate says they do not understand this module’s main idea: “Solve a simple equation for an unknown, step by step.” Explain it to them in three short sentences, in plain words.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Start with the plain idea — Solve a simple equation for an unknown, step by step. Step 2: Give one concrete example from the module sections. Step 3: End with what the classmate should be able to do or spot after learning it. A good answer uses no jargon without explaining it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> List four key terms from this module and, for each, write one sentence explaining it without copying the glossary word for word.</p>",
      "solution": "<p><strong>Answer:</strong> Formula — A rule linking quantities, written with letters, such as V = I × R. Substitute — To replace a letter in a formula with its number, then work it out. Rearrange — To change a formula around to find a different unknown. Bracket — Marks ( ) that show which part of a calculation to do first. (Any four module terms, explained in the student’s own plain words, are acceptable.)</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A circuit has a voltage of 12 V and a resistance of 4 Ω. Use Ohm’s law (V = IR) to find the current. Show the rearranged formula, the substitution, and the answer with its unit.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Rearrange: I = V ÷ R. Step 2: Substitute: I = 12 ÷ 4. Step 3: I = 3 A. Check: 3 × 4 = 12 V. Correct.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Solve for x: 5x − 15 = 20. Show each step, then check your answer by putting it back into the equation.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Add 15 to both sides: 5x = 35. Step 2: Divide both sides by 5: x = 7. Step 3: Check: 5 × 7 − 15 = 35 − 15 = 20. It balances, so x = 7.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What does the term “Algebra” mean?",
      "choices": [
        "Maths with letters standing for unknown numbers, used to find missing values.",
        "A value you need to find, usually written as a letter such as x.",
        "A rule linking quantities, written with letters, such as V = I × R.",
        "To replace a letter in a formula with its number, then work it out."
      ],
      "answer": 0,
      "explanation": "Correct: (a). Algebra means: Maths with letters standing for unknown numbers, used to find missing values.. (b) is the definition of Unknown, not of Algebra. (c) is the definition of Formula, not of Algebra. (d) is the definition of Substitute, not of Algebra."
    },
    {
      "q": "What does the term “Unknown” mean?",
      "choices": [
        "To replace a letter in a formula with its number, then work it out.",
        "A value you need to find, usually written as a letter such as x.",
        "To change a formula around to find a different unknown.",
        "Marks ( ) that show which part of a calculation to do first."
      ],
      "answer": 1,
      "explanation": "Correct: (b). Unknown means: A value you need to find, usually written as a letter such as x.. (a) is the definition of Substitute, not of Unknown. (c) is the definition of Rearrange, not of Unknown. (d) is the definition of Bracket, not of Unknown."
    },
    {
      "q": "What does the term “Substitute” mean?",
      "choices": [
        "Marks ( ) that show which part of a calculation to do first.",
        "Repeated multiplication, such as 4² = 4 × 4 = 16.",
        "To replace a letter in a formula with its number, then work it out.",
        "The number that, multiplied by itself, gives the original number; √16 = 4."
      ],
      "answer": 2,
      "explanation": "Correct: (c). Substitute means: To replace a letter in a formula with its number, then work it out.. (a) is the definition of Bracket, not of Substitute. (b) is the definition of Power, not of Substitute. (d) is the definition of Square root, not of Substitute."
    },
    {
      "q": "What does the term “Bracket” mean?",
      "choices": [
        "The number that, multiplied by itself, gives the original number; √16 = 4.",
        "V = I × R: voltage equals current times resistance.",
        "F = m × a: force equals mass times acceleration.",
        "Marks ( ) that show which part of a calculation to do first."
      ],
      "answer": 3,
      "explanation": "Correct: (d). Bracket means: Marks ( ) that show which part of a calculation to do first.. (a) is the definition of Square root, not of Bracket. (b) is the definition of Ohm’s law, not of Bracket. (c) is the definition of Newton’s second law, not of Bracket."
    },
    {
      "q": "Solve for x: 2x + 6 = 20. What is x?",
      "choices": [
        "5",
        "7",
        "10",
        "14"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Subtract 6: 2x = 14; divide by 2: x = 7. (a) gives 2 × 5 + 6 = 16, not 20. (c) gives 26. (d) gives 34."
    },
    {
      "q": "A 5 kg trolley is pushed with a force of 15 N. What is its acceleration? (Use F = ma.)",
      "choices": [
        "0.33 m/s²",
        "3 m/s²",
        "20 m/s²",
        "75 m/s²"
      ],
      "answer": 1,
      "explanation": "Correct: (b). a = F ÷ m = 15 ÷ 5 = 3 m/s². (a) divides mass by force. (c) adds the numbers. (d) multiplies them."
    },
    {
      "q": "What is 3 + 4 × 2?",
      "choices": [
        "14",
        "11",
        "10",
        "24"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Multiplication first: 4 × 2 = 8, then 3 + 8 = 11. (a) adds first, which is wrong. (c) is 3 + 4 + 2 + 1. (d) multiplies everything."
    },
    {
      "q": "A circle has a radius of 0.05 m. Using π = 3.14, what is its area? (Area = πr².)",
      "choices": [
        "0.00785 m²",
        "0.0785 m²",
        "0.0314 m²",
        "0.785 m²"
      ],
      "answer": 0,
      "explanation": "Correct: (a). (0.05)² = 0.0025; 3.14 × 0.0025 = 0.00785 m². (b) is ten times too big. (c) uses π × 0.01. (d) uses the diameter as the radius."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Numbers, Algebra & Rearranging Formulas: Quick Reference</h3>\n<p><strong>Core idea:</strong> Solve a simple equation for an unknown, step by step.</p>\n<p><strong>Key terms:</strong> Algebra · Equation · Unknown · Formula · Substitute · Rearrange · Bracket · Power.</p>\n<p><strong>Remember:</strong></p>\n<ul>\n<li>Solve a simple equation for an unknown, step by step.</li>\n<li>Rearrange a formula such as V = IR or F = ma.</li>\n<li>Use brackets, powers, and square roots correctly.</li>\n</ul>\n<p><strong>Watch out:</strong> Go slowly, try every example yourself, and re-read the recap if anything feels fuzzy.</p>\n<p><strong>Self-check:</strong> Explain the module’s main idea out loud in plain words, without looking. If you can, you have this module.</p>\n"
};
