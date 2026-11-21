// egr290 — module 1. Original review content.
module.exports = {
  "number": 1,
  "slug": "fe-exam-and-math-review",
  "title": "The FE Exam and the Math You Will Use",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe the real FE exam honestly: 110 questions (100 scored, 10 unscored), a 6-hour appointment with 5 hours 20 minutes of testing, a $225 fee, and no published passing score.",
    "Work with SI and US customary units, convert between them, and check every answer with a units check.",
    "Solve the algebra, calculus, linear algebra, and differential-equation problems the FE asks, using only the methods in the NCEES FE Reference Handbook.",
    "Use probability and statistics — mean, standard deviation, normal distribution, and confidence — on FE-style problems.",
    "Plan a study schedule and an exam-day strategy for a 110-question computer-based exam."
  ],
  "sections": [
    {
      "heading": "The FE Exam, Stated Plainly",
      "html": "<p>The <strong>Fundamentals of Engineering (FE) exam</strong> is the first exam on the road to Professional Engineer (PE) licensure, and it is administered by <strong>NCEES</strong> at Pearson VUE test centres. The real exam has <strong>110 questions, of which 100 are scored and 10 are unscored</strong> questions being tried out for future exams — you cannot tell which are which, so answer every question. The appointment is <strong>6 hours</strong>, including a tutorial and a scheduled break, with <strong>5 hours 20 minutes of actual testing time</strong>. That is about 2.9 minutes per question, so pace matters as much as knowledge.</p><p>The exam fee is <strong>$225</strong>. NCEES publishes <strong>no passing score</strong> — results are pass/fail only. First-time pass rates in 2024 were <strong>68% for Mechanical and 62% for Electrical &amp; Computer</strong>, which tells you the exam is hard but very passable with preparation. The <strong>70%</strong> used on this course's practice exams is a <strong>practice benchmark only</strong>, never a real pass mark. The practice exams here are 100 questions in 320 minutes, matching the real exam's testing time, so you can practise the real pace.</p><p>Two honest limits before you start. First, this program is <strong>not a degree and does not lead to licensure</strong>: PE licensure requires an ABET-accredited engineering degree plus typically 4 years of experience plus passing the FE and PE exams. The FE practice exams here prepare you for a future degree path; they are not a credential earned in this app, and completing this course certifies no one. Second, the FE is a <strong>closed-book, computer-based exam</strong> with a searchable electronic copy of the NCEES FE Reference Handbook on screen and an approved calculator — so practise with the handbook's formulas, not memorised shortcuts.</p>"
    },
    {
      "heading": "Units: The Check That Catches Half of All Errors",
      "html": "<p>Every FE calculation ends with a <strong>units check</strong>: if the units do not work out, the number is wrong, however neat it looks. The FE uses SI units most of the time, with US customary units appearing too. Learn the conversions cold: 1 in = 25.4 mm, 1 ft = 0.3048 m, 1 lb = 4.448 N, 1 hp = 745.7 W, 1 psi = 6.895 kPa, 1 Btu = 1.055 kJ, and 1 gallon = 3.785 L. Temperature is the trap: a temperature <em>difference</em> of 1 °F equals 5/9 K, but an absolute temperature in °F must be converted with T(°C) = (T(°F) − 32) × 5/9.</p><p>Worked example: a force of 500 lb is 500 × 4.448 = 2,224 N. A power of 10 hp is 10 × 745.7 = 7,457 W. A pressure of 100 psi is 100 × 6.895 = 689.5 kPa. Do the conversion first, then the calculation, then check the units of the answer. In this course every worked calculation shows its units at every step — copy that habit.</p>"
    },
    {
      "heading": "Algebra, Calculus, and Linear Algebra",
      "html": "<p>FE mathematics is broad but shallow: the exam tests whether you can set up and solve standard problems quickly, not whether you can prove theorems. <strong>Algebra:</strong> solve simultaneous equations, use logarithms, and handle complex numbers (a + jb, magnitude √(a² + b²), angle tan⁻¹(b/a)). <strong>Calculus:</strong> differentiate and integrate polynomials and standard functions — d/dx(x³) = 3x², ∫x² dx = x³/3 + C — and find maxima and minima by setting the derivative to zero. <strong>Linear algebra:</strong> solve 2×2 and 3×3 systems, find the determinant (det [[2,1],[3,4]] = 2×4 − 1×3 = 5), and know what a singular matrix (determinant zero) means: no unique solution.</p><p><strong>Differential equations:</strong> know the standard forms. dy/dx = ky has the solution y = Ce^(kt); a second-order equation with constant coefficients is solved with the characteristic equation, and the roots tell you whether the response grows, decays, or oscillates. <strong>Numerical methods</strong> appear too: one step of Euler's method, y₁ = y₀ + h·f(x₀, y₀), and the trapezoid rule for a definite integral. On the exam, write the formula first, substitute, then calculate — the formula is worth more than the arithmetic.</p>"
    },
    {
      "heading": "Probability and Statistics",
      "html": "<p>FE statistics is about describing data and judging uncertainty. The <strong>mean</strong> is the sum divided by the count; the <strong>median</strong> is the middle value; the <strong>mode</strong> is the most common value. For the data 2, 4, 4, 4, 5, 5, 7, 9 the mean is 40/8 = 5, the population variance is ((−3)² + (−1)² + (−1)² + (−1)² + 0 + 0 + 2² + 4²)/8 = 32/8 = 4, and the standard deviation is √4 = 2. Know whether the exam wants the population or the sample standard deviation (sample divides by n − 1).</p><p>The <strong>normal distribution</strong> is the workhorse: about 68% of values fall within one standard deviation of the mean, 95% within two, 99.7% within three. The z-score, z = (x − μ)/σ, turns any normal value into a standard one — a value of 110 from a distribution with mean 100 and standard deviation 10 has z = 1. <strong>Probability:</strong> for independent events P(A and B) = P(A) × P(B); for mutually exclusive events P(A or B) = P(A) + P(B). Expected value is the probability-weighted average of the outcomes. These tools return in Module 7, where expected value prices engineering decisions.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Real FE: 110 questions (100 scored + 10 unscored), 6-hour appointment, 5 h 20 m testing, $225 fee, no published passing score, pass/fail only.</li><li>2024 first-time pass rates: 68% Mechanical, 62% Electrical &amp; Computer. The 70% here is a practice benchmark only.</li><li>Units check every answer; convert first, calculate second. 1 hp = 745.7 W, 1 psi = 6.895 kPa, 1 in = 25.4 mm.</li><li>Calculus: differentiate, integrate, set the derivative to zero for maxima and minima. Determinant of a 2×2 matrix: ad − bc.</li><li>Statistics: mean, variance, standard deviation (population vs sample), z = (x − μ)/σ, 68–95–99.7 rule.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Treating the 70% practice benchmark as the real pass mark. NCEES publishes no passing score — the benchmark measures your revision, not the exam.</div><div class=\"callout\"><strong>Common mistake:</strong> Forgetting that a temperature difference in °F is not the same conversion as an absolute temperature in °F.</div><p><strong>Ready-to-Work link:</strong> If you can convert units, solve a 2×2 system, integrate a polynomial, and find a z-score, you have this module. Module 2 moves to statics and dynamics.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "FE exam",
      "def": "Fundamentals of Engineering exam: 110 questions (100 scored + 10 unscored), 6-hour appointment, 5 h 20 m testing, $225 fee, pass/fail only, no published passing score."
    },
    {
      "term": "NCEES",
      "def": "National Council of Examiners for Engineering and Surveying — the body that writes and administers the FE and PE exams."
    },
    {
      "term": "PE licensure",
      "def": "Professional Engineer licensure: requires an ABET-accredited engineering degree, typically 4 years of experience, and passing the FE and PE exams."
    },
    {
      "term": "SI unit",
      "def": "The metric system used on most of the FE exam; US customary units also appear."
    },
    {
      "term": "Determinant",
      "def": "A number from a square matrix; for [[a,b],[c,d]] it is ad − bc. Zero means no unique solution."
    },
    {
      "term": "Differential equation",
      "def": "An equation involving a function and its derivatives; dy/dx = ky solves to y = Ce^(kt)."
    },
    {
      "term": "Mean",
      "def": "The average: the sum of the values divided by how many there are."
    },
    {
      "term": "Standard deviation",
      "def": "The square root of the variance; it measures how spread out data is around the mean."
    },
    {
      "term": "z-score",
      "def": "z = (x − μ)/σ: how many standard deviations a value sits from the mean."
    },
    {
      "term": "Normal distribution",
      "def": "The bell curve: about 68% of values within 1σ, 95% within 2σ, 99.7% within 3σ of the mean."
    },
    {
      "term": "Expected value",
      "def": "The probability-weighted average of the possible outcomes of a random event."
    },
    {
      "term": "Euler's method",
      "def": "A numerical step for differential equations: y₁ = y₀ + h·f(x₀, y₀)."
    }
  ],
  "video": {
    "title": "Electrical Journeyman Exam | 6 things I wish I knew before I took it! (exam-day strategy)",
    "embedUrl": "https://www.youtube.com/embed/6OFLiHPPiU4",
    "note": "An exam-day strategy video from a trade exam — the pacing, preparation, and test-day habits transfer directly to the FE, even though the exam itself is different.",
    "more": [
      {
        "title": "How to Pass the Journeyman Electrician Test in 2026",
        "url": "https://www.youtube.com/watch?v=ZOhc0T-H648"
      },
      {
        "title": "NCCER Electrical Level 1 Module 1: Orientation to the Electrical Trade",
        "url": "https://www.youtube.com/watch?v=1PvpWq-qbZc"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> The real FE exam has 110 questions and 5 hours 20 minutes of testing time. How many minutes per question is that, on average?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Convert 5 h 20 m to minutes: 5 × 60 + 20 = 320 minutes. Step 2: Divide by 110 questions: 320 / 110 = 2.91 minutes per question, about 2.9 minutes. Step 3: Rule: plan for under 3 minutes per question and flag hard ones to return to.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Convert 500 lb of force to newtons and 10 hp to watts.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: 1 lb = 4.448 N, so 500 × 4.448 = 2,224 N. Step 2: 1 hp = 745.7 W, so 10 × 745.7 = 7,457 W. Step 3: Check the units: N is kg·m/s² and W is J/s — both check out.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Find the determinant of [[2, 1], [3, 4]] and say whether the system has a unique solution.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: det = ad − bc = 2 × 4 − 1 × 3 = 8 − 3 = 5. Step 2: The determinant is not zero, so the system has a unique solution.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Evaluate ∫₀² 3x² dx.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The antiderivative of 3x² is x³. Step 2: Evaluate from 0 to 2: 2³ − 0³ = 8 − 0 = 8.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A measurement is 110, from a normal distribution with mean 100 and standard deviation 10. Find the z-score and the percentage of values below it (approximately).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: z = (110 − 100)/10 = 1. Step 2: About 68% of values lie within one standard deviation of the mean, so about 16% lie above z = +1 and about 84% lie below it. Step 3: So roughly 84% of values are below 110.</p>"
    }
  ],
  "quiz": [
    {
      "module": 1,
      "q": "How many questions does the real FE exam have, and how many are scored?",
      "choices": [
        "110 questions, all scored",
        "110 questions, 100 scored and 10 unscored",
        "100 questions, all scored",
        "120 questions, 100 scored"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The real FE has 110 questions: 100 scored and 10 unscored trial questions. (a) is wrong: 10 questions are unscored. (c) is wrong: there are 110 questions, not 100. (d) is wrong: the total is 110, not 120."
    },
    {
      "module": 1,
      "q": "What is the FE exam fee stated in this course?",
      "choices": [
        "$175",
        "$225",
        "$350",
        "No fee is charged"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The FE exam fee is $225. (a) is wrong: $175 is a stale figure — do not use it. (c) is wrong: the fee is $225, not $350. (d) is wrong: a fee is charged."
    },
    {
      "module": 1,
      "q": "Does NCEES publish a passing score for the FE exam?",
      "choices": [
        "Yes — 70%",
        "Yes — 165 out of 240",
        "No — results are pass/fail only",
        "Yes — 675 on a 100–900 scale"
      ],
      "answer": 2,
      "explanation": "Correct: (c). NCEES publishes no passing score; FE results are pass/fail only. (a) is wrong: 70% is this course's practice benchmark only. (b) is wrong: 165/240 is the CSWA pass mark. (d) is wrong: 675 is a CompTIA A+ scaled score."
    },
    {
      "module": 1,
      "q": "Convert 100 psi to kilopascals (1 psi = 6.895 kPa).",
      "choices": [
        "68.95 kPa",
        "689.5 kPa",
        "6,895 kPa",
        "14.5 kPa"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 100 × 6.895 = 689.5 kPa. (a) is wrong: that is 10 psi, not 100. (c) is wrong: that multiplies by 68.95 instead of 6.895. (d) is wrong: that divides instead of multiplying."
    },
    {
      "module": 1,
      "q": "What is the determinant of [[2, 1], [3, 4]]?",
      "choices": [
        "3",
        "5",
        "11",
        "0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). det = 2×4 − 1×3 = 8 − 3 = 5. (a) is wrong: that is 8 − 5, not the determinant. (c) is wrong: that is 8 + 3. (d) is wrong: the determinant is 5, not zero."
    },
    {
      "module": 1,
      "q": "What is ∫₀⁴ x dx?",
      "choices": [
        "4",
        "8",
        "16",
        "2"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The antiderivative is x²/2, so 16/2 − 0 = 8. (a) is wrong: that is the upper limit, not the integral. (c) is wrong: that is 4², forgetting the 1/2. (d) is wrong: that is far too small."
    },
    {
      "module": 1,
      "q": "For the data 2, 4, 4, 4, 5, 5, 7, 9, what is the population standard deviation?",
      "choices": [
        "1",
        "2",
        "4",
        "5"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The mean is 5, the variance is 32/8 = 4, and √4 = 2. (a) is wrong: that is not the spread of this data. (c) is wrong: 4 is the variance, not the standard deviation. (d) is wrong: 5 is the mean."
    },
    {
      "module": 1,
      "q": "A value of 110 comes from a normal distribution with mean 100 and standard deviation 10. What is its z-score?",
      "choices": [
        "0",
        "0.5",
        "1",
        "2"
      ],
      "answer": 2,
      "explanation": "Correct: (c). z = (110 − 100)/10 = 1. (a) is wrong: z = 0 would mean the value equals the mean. (b) is wrong: that would need a value of 105. (d) is wrong: that would need a value of 120."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — The FE Exam and the Math You Will Use: Quick Reference</h3>\n<p><strong>Core idea:</strong> Know the real exam's shape and pass/fail nature, then let units checks and handbook formulas carry the maths.</p>\n<p><strong>Real FE:</strong> 110 Q (100 scored + 10 unscored) · 6-hour appointment · 5 h 20 m testing · $225 fee · no published passing score · pass/fail only.</p>\n<p><strong>2024 first-time pass rates:</strong> 68% Mechanical · 62% Electrical &amp; Computer. The 70% here is a practice benchmark only.</p>\n<p><strong>Conversions:</strong> 1 in = 25.4 mm · 1 hp = 745.7 W · 1 psi = 6.895 kPa · 1 lb = 4.448 N.</p>\n<p><strong>Maths:</strong> det [[a,b],[c,d]] = ad − bc · ∫3x² = x³ · dy/dx = ky → y = Ce^(kt) · z = (x − μ)/σ.</p>\n<p><strong>Watch out:</strong> A °F temperature difference converts differently from an absolute °F temperature; and the practice benchmark is not the pass mark.</p>\n<p><strong>Self-check:</strong> State the FE's length, fee, and scoring, convert 100 psi to kPa, and find a z-score without looking. If you can, you have this module.</p>\n"
};
