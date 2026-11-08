module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "passPercent": 70,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "A university surveys 800 of its 20,000 students about housing costs. The 800 students are the:",
        "choices": [
          "Population",
          "Parameter",
          "Sample",
          "Census"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The 800 surveyed students are the sample — the group actually measured. (a) The population is all 20,000 students. (b) A parameter is a number about the population. (d) A census measures everyone."
      },
      {
        "module": 1,
        "q": "The wages 12, 15, 18, 21, 24 (in dollars per hour) have a mean of:",
        "choices": [
          "$15",
          "$18",
          "$21",
          "$24"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The wages add to 90; 90 ÷ 5 = $18. (a) $15 is the second value, not the mean. (c) $21 is the fourth value. (d) $24 is the maximum."
      },
      {
        "module": 1,
        "q": "Which of these is quantitative discrete data?",
        "choices": [
          "A worker's occupation",
          "Whether a worker is employed",
          "The number of jobs a worker has held",
          "A worker's hourly wage"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The number of jobs held counts whole jobs. (a) and (b) are categorical. (d) Wage is quantitative continuous — it can be $15.25, $15.26, and so on."
      },
      {
        "module": 1,
        "q": "The unemployment rate measured every month for three years is:",
        "choices": [
          "Cross-sectional data",
          "Time-series data",
          "Categorical data",
          "A parameter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). One thing measured repeatedly over time is a time series. (a) Cross-sectional data measures many people at one moment. (c) The rate is a number, not a category. (d) A parameter is a population number, not a data type."
      },
      {
        "module": 2,
        "q": "The rents 700, 800, 900, 1000, 1100, 1500 have a mean of $1,000. Their median is:",
        "choices": [
          "$900",
          "$950",
          "$1,000",
          "$1,100"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Ordered, the middle two values are $900 and $1,000, so the median is (900 + 1,000) ÷ 2 = $950. (a) $900 is the third value. (c) $1,000 is the mean. (d) $1,100 is the fifth value."
      },
      {
        "module": 2,
        "q": "For the same rents, the sum of squared deviations from the mean is 400,000. The sample standard deviation is about:",
        "choices": [
          "$200.00",
          "$282.84",
          "$333.33",
          "$400.00"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Sample variance = 400,000 ÷ 5 = 80,000; SD = √80,000 = $282.84. (a) would be the answer for a sum of 200,000. (c) divides by 6 and takes a wrong root. (d) is 400,000 ÷ 1,000, not a standard deviation."
      },
      {
        "module": 2,
        "q": "For the same rents (mean $1,000, sample SD $282.84), the z-score of the $1,500 rent is about:",
        "choices": [
          "0.50",
          "1.00",
          "1.77",
          "2.50"
        ],
        "answer": 2,
        "explanation": "Correct: (c). z = (1,500 − 1,000) ÷ 282.84 = 500 ÷ 282.84 = 1.77. (a) would need a deviation of about $141. (b) would need a deviation of $282.84. (d) would need a deviation of about $707."
      },
      {
        "module": 2,
        "q": "A dataset has Q1 = 40 and Q3 = 70. Its interquartile range is:",
        "choices": [
          "30",
          "55",
          "110",
          "15"
        ],
        "answer": 0,
        "explanation": "Correct: (a). IQR = Q3 − Q1 = 70 − 40 = 30. (b) 55 is the midhinge (Q1 + Q3) ÷ 2. (c) adds the quartiles. (d) is half the IQR."
      },
      {
        "module": 3,
        "q": "Two fair dice are rolled. The probability the sum is 8 is:",
        "choices": [
          "5/36",
          "1/6",
          "1/36",
          "7/36"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Five pairs add to 8 (2+6, 3+5, 4+4, 5+3, 6+2) out of 36, so 5 ÷ 36 ≈ 0.1389. (b) 1/6 is the chance the sum is 7. (c) 1/36 is the chance of one specific pair. (d) 7/36 counts 7 pairs — there are only 5."
      },
      {
        "module": 3,
        "q": "A survey of 150 people finds 90 women (60 support a policy) and 60 men (30 support it). P(support | woman) is:",
        "choices": [
          "0.40",
          "0.60",
          "0.67",
          "0.50"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Among the 90 women, 60 support the policy: 60 ÷ 90 = 0.6667. (a) 0.40 is 60 ÷ 150 — the share of all people who are women supporters. (b) 0.60 is P(support) overall. (d) 0.50 is P(support | man)."
      },
      {
        "module": 3,
        "q": "A fair die is rolled 3 times. The probability of at least one 6 is about:",
        "choices": [
          "0.1667",
          "0.4213",
          "0.5000",
          "0.5787"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Use the complement: P(no 6) = (5/6)³ = 0.5787, so P(at least one 6) = 1 − 0.5787 = 0.4213. (a) 0.1667 is the chance of a 6 on one roll. (c) 0.50 is a guess with no basis. (d) 0.5787 is P(no 6) — the complement of the answer."
      },
      {
        "module": 3,
        "q": "30% of applicants have a degree. 80% of degree holders are employed and 40% of non-degree holders are employed. P(degree | employed) is about:",
        "choices": [
          "0.24",
          "0.46",
          "0.52",
          "0.80"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P(employed) = 0.30 × 0.80 + 0.70 × 0.40 = 0.24 + 0.28 = 0.52, and P(degree | employed) = 0.24 ÷ 0.52 = 0.4615. (a) 0.24 is P(degree and employed). (c) 0.52 is P(employed). (d) 0.80 is P(employed | degree) — the reverse conditional."
      },
      {
        "module": 4,
        "q": "Toss a fair coin 4 times; X = number of heads. E(X) is:",
        "choices": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Each toss averages 0.5 heads, so 4 tosses average 4 × 0.5 = 2. (a) is the mean for 2 tosses. (c) and (d) exceed the long-run average."
      },
      {
        "module": 4,
        "q": "A Binomial(15, 0.40) variable has mean 6 and standard deviation about 1.90. Its variance is:",
        "choices": [
          "1.90",
          "2.40",
          "3.60",
          "6.00"
        ],
        "answer": 2,
        "explanation": "Correct: (c). Var = np(1 − p) = 15 × 0.40 × 0.60 = 3.60. (a) 1.90 is the standard deviation. (b) 2.40 is 15 × 0.40 × 0.40 — using p instead of (1 − p). (d) 6.00 is the mean."
      },
      {
        "module": 4,
        "q": "Test scores are Normal(100, 15). The probability a score is above 115 is about:",
        "choices": [
          "0.1587",
          "0.3085",
          "0.5000",
          "0.0668"
        ],
        "answer": 0,
        "explanation": "Correct: (a). z = (115 − 100) ÷ 15 = 1, and P(Z > 1) = 0.1587. (b) 0.3085 is P(Z > 0.5). (c) 0.5000 is the chance of beating the mean. (d) 0.0668 is P(Z > 1.5)."
      },
      {
        "module": 4,
        "q": "A call center averages 2 complaints an hour (Poisson). P(exactly 1 complaint next hour) is about:",
        "choices": [
          "0.1353",
          "0.2707",
          "0.5000",
          "0.1800"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P(X = 1) = e^(−2) × 2¹ ÷ 1! = 0.1353 × 2 = 0.2707. (a) 0.1353 is P(X = 0). (c) 0.5000 is a guess with no basis. (d) 0.1800 is not a Poisson probability here."
      },
      {
        "module": 5,
        "q": "A population has μ = 80 and σ = 16. For samples of n = 64, the standard error of the sample mean is:",
        "choices": [
          "16",
          "8",
          "4",
          "2"
        ],
        "answer": 3,
        "explanation": "Correct: (d). SE = 16 ÷ √64 = 16 ÷ 8 = 2. (a) is σ itself. (b) divides by 2 instead of √64. (c) divides by 4 instead of 8."
      },
      {
        "module": 5,
        "q": "For the same population (μ = 80, σ = 16, n = 64), P(x̄ > 83) is about:",
        "choices": [
          "0.0668",
          "0.1587",
          "0.3085",
          "0.5000"
        ],
        "answer": 0,
        "explanation": "Correct: (a). z = (83 − 80) ÷ 2 = 1.5, and P(Z > 1.5) = 0.0668. (b) is P(Z > 1), the chance x̄ exceeds 82. (c) is P(Z > 0.5). (d) is the chance x̄ exceeds the mean."
      },
      {
        "module": 5,
        "q": "The Central Limit Theorem says that for large n, the sampling distribution of the sample mean is approximately:",
        "choices": [
          "Uniform",
          "Skewed like the population",
          "Normal",
          "Bimodal"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The CLT guarantees an approximately normal shape for sample means when n is large. (a) Uniform is the shape of one die roll. (b) The point is that the shape does not follow the population. (d) Bimodal is not a CLT result."
      },
      {
        "module": 5,
        "q": "A population proportion is 0.25 and n = 100. The standard error of the sample proportion is:",
        "choices": [
          "0.25",
          "0.0433",
          "0.1875",
          "0.05"
        ],
        "answer": 1,
        "explanation": "Correct: (b). SE = √(0.25 × 0.75 ÷ 100) = √0.001875 = 0.0433. (a) is p itself. (c) is p(1 − p) without dividing by n. (d) is a round guess with no formula behind it."
      },
      {
        "module": 6,
        "q": "A sample of n = 49 has mean 60 with σ = 14 known. The 95% confidence interval for μ is:",
        "choices": [
          "(56.08, 63.92)",
          "(58, 62)",
          "(46, 74)",
          "(60, 60)"
        ],
        "answer": 0,
        "explanation": "Correct: (a). SE = 14 ÷ 7 = 2; margin = 1.96 × 2 = 3.92; 60 ± 3.92 = (56.08, 63.92). (b) uses a margin of 2, one standard error. (c) uses a margin of 14, the SD itself. (d) has no margin at all."
      },
      {
        "module": 6,
        "q": "A sample of n = 10 has mean 30 and s = 6. Using t* = 2.262 (df = 9), the 95% confidence interval for μ is about:",
        "choices": [
          "(25.71, 34.29)",
          "(26.08, 33.92)",
          "(24, 36)",
          "(28.10, 31.90)"
        ],
        "answer": 0,
        "explanation": "Correct: (a). SE = 6 ÷ √10 = 1.897; margin = 2.262 × 1.897 = 4.29; 30 ± 4.29 = (25.71, 34.29). (b) uses the z critical value 1.96 instead of t. (c) uses a margin of 6, the SD itself. (d) uses a margin of 1.90, one standard error."
      },
      {
        "module": 6,
        "q": "In a survey of n = 500, 45% support a policy. The 95% confidence interval for the true proportion is about:",
        "choices": [
          "(0.406, 0.494)",
          "(0.43, 0.47)",
          "(0.35, 0.55)",
          "(0.45, 0.45)"
        ],
        "answer": 0,
        "explanation": "Correct: (a). SE = √(0.45 × 0.55 ÷ 500) = 0.0222; margin = 1.96 × 0.0222 = 0.0436; 0.45 ± 0.0436 = (0.406, 0.494). (b) uses a margin of 0.02. (c) uses a margin of 0.10. (d) has no margin at all."
      },
      {
        "module": 6,
        "q": "“We are 95% confident” means:",
        "choices": [
          "There is a 95% chance μ is in this interval",
          "The interval procedure captures μ in about 95% of repeated samples",
          "95% of the data fall in the interval",
          "The sample mean is 95% accurate"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Confidence is a long-run property of the procedure. (a) is the classic misreading — μ is fixed, not random. (c) describes a prediction interval. (d) “95% accurate” is not a defined quantity."
      },
      {
        "module": 6,
        "q": "A researcher wants a 95% confidence interval for a mean with a margin of error of at most 3, and σ = 12. The sample size needed is about:",
        "choices": [
          "16",
          "62",
          "246",
          "1,068"
        ],
        "answer": 1,
        "explanation": "Correct: (b). n = (1.96 × 12 ÷ 3)² = 7.84² = 61.47, rounded up to 62. (a) 16 gives a margin of 5.88. (c) 246 gives a margin of 1.50 — more precision than asked for. (d) 1,068 is the conservative sample size for a proportion with margin 0.03."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 90,
    "passPercent": 70,
    "coverage": "All modules",
    "questions": [
      {
        "module": 1,
        "q": "A city surveys 2,000 of its 500,000 residents about transit. The true share of all residents who support the levy is a:",
        "choices": [
          "Statistic",
          "Parameter",
          "Sample",
          "Variable"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A parameter describes the whole population. (a) A statistic comes from the sample of 2,000. (c) A sample is a group of people, not a number. (d) A variable is what you measure on each person."
      },
      {
        "module": 1,
        "q": "The values 5, 7, 7, 9, 12 have a mode of:",
        "choices": [
          "5",
          "7",
          "9",
          "No mode"
        ],
        "answer": 1,
        "explanation": "Correct: (b). 7 appears twice; every other value appears once. (a) 5 appears once. (c) 9 appears once. (d) There is a mode — 7."
      },
      {
        "module": 1,
        "q": "Wages of 500 workers surveyed in June 2025 is an example of:",
        "choices": [
          "Time-series data",
          "Cross-sectional data",
          "A census",
          "A parameter"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Many workers measured at one point in time. (a) Time-series data follows one thing over time. (c) A census measures everyone. (d) A parameter is a population number, not a data type."
      },
      {
        "module": 2,
        "q": "Incomes in a town have a mean of $65,000 and a median of $48,000. The distribution is most likely:",
        "choices": [
          "Left-skewed",
          "Right-skewed",
          "Symmetric",
          "Uniform"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The mean sits well above the median, pulled up by a long tail of high incomes — right skew. (a) Left skew would put the mean below the median. (c) Symmetry needs mean ≈ median. (d) Uniform data have no tail at all."
      },
      {
        "module": 2,
        "q": "A sample of 8 values has a sum of squared deviations of 140. The sample variance is:",
        "choices": [
          "17.50",
          "20.00",
          "11.83",
          "140.00"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Sample variance divides by n − 1 = 7: 140 ÷ 7 = 20. (a) 17.50 divides by n = 8 — that is the population variance. (c) 11.83 is 140 ÷ 11.83, not a variance. (d) 140 is the sum itself, not divided by anything."
      },
      {
        "module": 2,
        "q": "A value has a z-score of −2.0. This means it is:",
        "choices": [
          "2 units below the mean",
          "2 standard deviations below the mean",
          "Twice the mean",
          "Impossible"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A z-score counts standard deviations from the mean; the minus sign means below. (a) confuses units with SDs. (c) is not what z means. (d) Negative z-scores are routine."
      },
      {
        "module": 3,
        "q": "P(A) = 0.4, P(B) = 0.5, P(A and B) = 0.2. P(A or B) is:",
        "choices": [
          "0.9",
          "0.7",
          "0.2",
          "0.1"
        ],
        "answer": 1,
        "explanation": "Correct: (b). P(A or B) = 0.4 + 0.5 − 0.2 = 0.7. (a) forgets to subtract the overlap. (c) is P(A and B). (d) is P(A) − P(B), which is not a probability rule."
      },
      {
        "module": 3,
        "q": "In a class, 60% of students are women and 30% of the class are women who own a car. P(owns a car | woman) is:",
        "choices": [
          "0.18",
          "0.30",
          "0.50",
          "0.60"
        ],
        "answer": 2,
        "explanation": "Correct: (c). P(car | woman) = P(woman and car) ÷ P(woman) = 0.30 ÷ 0.60 = 0.50. (a) 0.18 multiplies the two numbers. (b) 0.30 is P(woman and car). (d) 0.60 is P(woman)."
      },
      {
        "module": 3,
        "q": "1% of people have a condition. A test is 90% accurate for people with it and 95% accurate for people without it (5% false positives). Roughly, P(condition | positive test) is:",
        "choices": [
          "0.90",
          "0.50",
          "0.15",
          "0.01"
        ],
        "answer": 2,
        "explanation": "Correct: (c). By Bayes: true positives = 0.01 × 0.90 = 0.009; false positives = 0.99 × 0.05 = 0.0495; P = 0.009 ÷ (0.009 + 0.0495) = 0.154. (a) 0.90 is P(positive | condition) — the reverse conditional. (b) 0.50 ignores the base rate. (d) 0.01 is the base rate, before the test result."
      },
      {
        "module": 4,
        "q": "A game pays $20 with probability 0.25 and $0 otherwise. The expected winnings are:",
        "choices": [
          "$20",
          "$5",
          "$10",
          "$0"
        ],
        "answer": 1,
        "explanation": "Correct: (b). E(X) = 20 × 0.25 + 0 × 0.75 = $5. (a) is the payout, not the average. (c) would need a 50% win chance. (d) ignores the 25% win chance."
      },
      {
        "module": 4,
        "q": "A Binomial(20, 0.25) variable has P(X = 5) ≈ 0.2023. Its mean is:",
        "choices": [
          "4",
          "5",
          "15",
          "20"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Mean = np = 20 × 0.25 = 5. (a) 4 would be the mean for p = 0.20. (c) 15 is the expected number of failures. (d) is n itself."
      },
      {
        "module": 4,
        "q": "Heights are Normal(170 cm, 10 cm). The 90th percentile is about:",
        "choices": [
          "170 cm",
          "180 cm",
          "182.8 cm",
          "190 cm"
        ],
        "answer": 2,
        "explanation": "Correct: (c). The 90th percentile of Z is 1.2816, so x = 170 + 1.2816 × 10 = 182.8 cm. (a) 170 is the 50th percentile. (b) 180 is the 84th percentile. (d) 190 is the 97.7th percentile."
      },
      {
        "module": 5,
        "q": "A population has σ = 20. For samples of n = 100, the standard error of the mean is:",
        "choices": [
          "20",
          "10",
          "5",
          "2"
        ],
        "answer": 3,
        "explanation": "Correct: (d). SE = 20 ÷ √100 = 20 ÷ 10 = 2. (a) is σ itself. (b) divides by 2. (c) divides by 4."
      },
      {
        "module": 5,
        "q": "As the sample size grows, the sampling distribution of the sample mean becomes:",
        "choices": [
          "Wider and more skewed",
          "Narrower and more nearly normal",
          "Wider and more nearly normal",
          "Narrower and more skewed"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Larger n shrinks the standard error (σ ÷ √n) and the CLT makes the shape more normal. (a) and (c) get the width wrong. (d) gets the shape wrong."
      },
      {
        "module": 5,
        "q": "A population proportion is 0.40 and n = 400. The standard error of the sample proportion is about:",
        "choices": [
          "0.40",
          "0.0245",
          "0.24",
          "0.01"
        ],
        "answer": 1,
        "explanation": "Correct: (b). SE = √(0.40 × 0.60 ÷ 400) = √0.0006 = 0.0245. (a) is p itself. (c) is p(1 − p) without dividing by n. (d) is a round guess with no formula behind it."
      },
      {
        "module": 6,
        "q": "A sample of n = 100 has mean 50 with σ = 10 known. The 95% confidence interval for μ is:",
        "choices": [
          "(48.04, 51.96)",
          "(49, 51)",
          "(40, 60)",
          "(30, 70)"
        ],
        "answer": 0,
        "explanation": "Correct: (a). SE = 10 ÷ 10 = 1; margin = 1.96 × 1 = 1.96; 50 ± 1.96 = (48.04, 51.96). (b) uses a margin of 1, one standard error. (c) uses a margin of 10, the SD itself. (d) uses a margin of 20."
      },
      {
        "module": 6,
        "q": "When σ is unknown and n is small, a confidence interval for a mean should use:",
        "choices": [
          "z, because it is simpler",
          "t with df = n − 1, because estimating σ adds uncertainty",
          "The chi-square distribution",
          "No critical value"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The t-distribution's fatter tails account for the extra uncertainty of estimating σ. (a) z is only right when σ is known. (c) is for variances and counts. (d) Every interval needs a critical value."
      },
      {
        "module": 6,
        "q": "A 99% confidence interval is ____ than a 95% interval from the same sample.",
        "choices": [
          "Narrower",
          "Wider",
          "The same width",
          "Centered differently"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A stronger promise needs a larger critical value (2.576 vs. 1.96) and therefore a wider interval. (a) is backwards. (c) The critical value changes, so the width changes. (d) Both intervals are centered on the same point estimate."
      },
      {
        "module": 7,
        "q": "A test of H₀: μ = 200 (σ = 24 known, n = 64) finds x̄ = 206. The test statistic is z = 2.00. The one-sided p-value is 0.0228. At α = 0.05:",
        "choices": [
          "Fail to reject H₀",
          "Reject H₀",
          "Accept H₀",
          "The test is invalid"
        ],
        "answer": 1,
        "explanation": "Correct: (b). p = 0.0228 < 0.05, so reject H₀. (a) needs p > 0.05. (c) We never “accept” H₀. (d) The test is valid — the assumptions are met."
      },
      {
        "module": 7,
        "q": "A sample of n = 16 has mean 41 and s = 12, testing H₀: μ = 35. The test statistic is t = 2.00 (df = 15) and the two-sided p-value is 0.0639. At α = 0.05:",
        "choices": [
          "Reject H₀",
          "Fail to reject H₀",
          "Accept H₀",
          "Use z instead"
        ],
        "answer": 1,
        "explanation": "Correct: (b). p = 0.0639 > 0.05, so fail to reject. (a) needs p ≤ 0.05. (c) Failing to reject is not proof. (d) σ is unknown, so t is correct."
      },
      {
        "module": 7,
        "q": "In a poll of n = 250, 130 voters (52%) support a policy. Testing H₀: p = 0.50 gives z = 0.63 and two-sided p = 0.5271. At α = 0.05:",
        "choices": [
          "Reject H₀ — support differs from 50%",
          "Fail to reject H₀",
          "The sample is too small",
          "Support is exactly 50%"
        ],
        "answer": 1,
        "explanation": "Correct: (b). p = 0.5271 is far above 0.05 — a 52% result in a poll of 250 is entirely ordinary when the truth is 50%. (a) needs p ≤ 0.05. (c) n = 250 is a large sample. (d) No test proves an exact value."
      },
      {
        "module": 7,
        "q": "A Type II error is:",
        "choices": [
          "Rejecting a true H₀",
          "Failing to reject a false H₀",
          "Using α = 0.01",
          "A calculation error"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Type II = missed signal: the null is false but the test does not catch it. (a) is a Type I error. (c) Choosing α is a design decision, not an error. (d) Arithmetic mistakes are not error types."
      },
      {
        "module": 8,
        "q": "Two groups of 25 each have means 70 and 64, both with s = 10. The pooled SD is 10 and the standard error of the difference is 2.83. The t-statistic is about:",
        "choices": [
          "0.60",
          "2.12",
          "6.00",
          "1.00"
        ],
        "answer": 1,
        "explanation": "Correct: (b). t = (70 − 64) ÷ 2.83 = 6 ÷ 2.83 = 2.12. (a) divides 6 by 10 instead of by the SE. (c) is the difference itself, not the t-statistic. (d) would need a difference of 2.83."
      },
      {
        "module": 8,
        "q": "For the same two groups (difference 6, SE 2.83, df = 48, t* = 2.01), the 95% confidence interval for μ₁ − μ₂ is about:",
        "choices": [
          "(0.31, 11.69)",
          "(3.17, 8.83)",
          "(−5.69, 17.69)",
          "(6, 6)"
        ],
        "answer": 0,
        "explanation": "Correct: (a). Margin = 2.01 × 2.83 = 5.69; 6 ± 5.69 = (0.31, 11.69). (b) uses a margin of 2.83, one standard error. (c) uses a margin of 11.69, double the right one. (d) has no margin at all."
      },
      {
        "module": 8,
        "q": "Twenty-five workers are tested before and after training. The mean improvement is 2.5 points with s_d = 3.0. The paired t-statistic is about:",
        "choices": [
          "0.83",
          "2.50",
          "4.17",
          "1.25"
        ],
        "answer": 2,
        "explanation": "Correct: (c). SE = 3.0 ÷ √25 = 0.60; t = 2.5 ÷ 0.60 = 4.17. (a) divides 2.5 by 3.0 instead of by the SE. (b) is the mean difference itself. (d) divides 2.5 by 2."
      },
      {
        "module": 8,
        "q": "Two surveys of 150 voters each find 58% support in City 1 and 48% in City 2. The pooled proportion is 0.53, the SE is 0.0576, and z = 1.74. The two-sided p-value is 0.0827. At α = 0.05:",
        "choices": [
          "Reject H₀ — the cities differ",
          "Fail to reject H₀",
          "The samples are too small",
          "The pooled proportion is wrong"
        ],
        "answer": 1,
        "explanation": "Correct: (b). p = 0.0827 > 0.05, so the 10-point gap is not strong enough evidence. (a) needs p ≤ 0.05. (c) n = 150 per group is a large sample. (d) The pooled proportion (87 + 72) ÷ 300 = 0.53 is correct."
      },
      {
        "module": 9,
        "q": "A 2×2 table (men/women × prefer A/B) has 60, 40, 40, 60 in its cells, with all expected counts 50. The chi-square statistic is:",
        "choices": [
          "4.00",
          "8.00",
          "16.00",
          "0.00"
        ],
        "answer": 1,
        "explanation": "Correct: (b). χ² = 4 × (10² ÷ 50) = 4 × 2 = 8.00. (a) counts only two cells. (c) uses (observed − expected) = 20. (d) would mean the data fit independence perfectly — they do not."
      },
      {
        "module": 9,
        "q": "A die is rolled 60 times with counts 8, 12, 9, 11, 10, 10. Testing fairness (each face expected 10 times) gives χ² = 1.00 with df = 5. The decision at α = 0.05 is:",
        "choices": [
          "Reject fairness",
          "Fail to reject fairness",
          "The die is loaded",
          "The test is invalid"
        ],
        "answer": 1,
        "explanation": "Correct: (b). χ² = 1.00 is tiny — the counts are close to 10 each, and the p-value is about 0.96. (a) needs a large χ². (c) contradicts the evidence. (d) All expected counts are 10, well above 5, so the test is valid."
      },
      {
        "module": 9,
        "q": "Four groups of 8 have means 10, 12, 14, 16 with each group's SD = 4. The ANOVA F-statistic is about 3.33 with p = 0.0336. The correct conclusion is:",
        "choices": [
          "All four means are equal",
          "At least one mean differs",
          "Group 4 is the best",
          "The variances differ"
        ],
        "answer": 1,
        "explanation": "Correct: (b). A significant ANOVA says at least one mean differs — no more, no less. (a) is the null, which we rejected. (c) Needs a follow-up test to name the winner. (d) ANOVA does not test variances."
      },
      {
        "module": 9,
        "q": "The main reason to use one ANOVA instead of six t-tests for four groups is:",
        "choices": [
          "ANOVA is faster to compute",
          "Multiple t-tests inflate the chance of a false rejection",
          "ANOVA needs a smaller sample",
          "t-tests cannot compare means"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Each test at α = 0.05 is a 5% false-alarm chance, and six tests give about a 26% chance of at least one false rejection. (a) Speed is not the reason. (c) ANOVA does not need less data. (d) t-tests compare means perfectly well — one pair at a time."
      },
      {
        "module": 10,
        "q": "The correlation between study hours and exam scores is r = 0.99. This means:",
        "choices": [
          "Studying causes high scores",
          "A strong positive linear relationship",
          "No relationship",
          "The slope is 0.99"
        ],
        "answer": 1,
        "explanation": "Correct: (b). r = 0.99 is close to +1: strongly positive and linear. (a) Correlation never proves causation. (c) No relationship needs r ≈ 0. (d) The slope is 3.75 points per hour, not 0.99."
      },
      {
        "module": 10,
        "q": "The study-hours regression line is ŷ = 46.50 + 3.75x. The predicted score for 5 hours of study is:",
        "choices": [
          "46.50",
          "65.25",
          "69.00",
          "85.00"
        ],
        "answer": 1,
        "explanation": "Correct: (b). ŷ = 46.50 + 3.75 × 5 = 46.50 + 18.75 = 65.25. (a) is the intercept. (c) 69 is the mean score. (d) 85 is the score for 10 hours."
      },
      {
        "module": 10,
        "q": "The shop regression has R² = 0.9660. The best interpretation is:",
        "choices": [
          "Advertising causes sales",
          "About 97% of the variation in sales is explained by advertising",
          "The correlation is 0.97",
          "Sales are 97% advertising"
        ],
        "answer": 1,
        "explanation": "Correct: (b). R² is the share of variation explained. (a) Observational data cannot prove causation. (c) The correlation is 0.98; R² is its square. (d) R² is not a share of sales."
      },
      {
        "module": 10,
        "q": "A regression line fit on advertising of $2,000–$9,000 is used to predict sales at $40,000 of advertising. This is:",
        "choices": [
          "Interpolation — safe",
          "Extrapolation — risky, because the line may not stay straight that far out",
          "Impossible to compute",
          "Always accurate"
        ],
        "answer": 1,
        "explanation": "Correct: (b). $40,000 is far outside the data's range; the relationship could flatten out. (a) Interpolation is inside the range. (c) The line computes a number — the problem is trusting it. (d) Nothing guarantees accuracy outside the data."
      },
      {
        "module": 11,
        "q": "In ŷ = 20 + 3×schooling + 0.5×experience + 5×degree, the coefficient 5 means:",
        "choices": [
          "A degree adds $5 an hour, holding schooling and experience constant",
          "The average wage is $5",
          "Schooling adds $5 an hour",
          "Experience adds $5 an hour"
        ],
        "answer": 0,
        "explanation": "Correct: (a). The dummy coefficient is the gap between otherwise identical workers with and without a degree. (b) $5 is not an average wage. (c) 3 is the schooling coefficient. (d) 0.5 is the experience coefficient."
      },
      {
        "module": 11,
        "q": "Model A has R² = 0.60 and adjusted R² = 0.58. Model B (one extra predictor) has R² = 0.61 and adjusted R² = 0.57. The better model is:",
        "choices": [
          "Model B, because its R² is higher",
          "Model A, because its adjusted R² is higher — the extra predictor did not earn its place",
          "Neither — R² is meaningless",
          "Model B, because it has more predictors"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Adjusted R² is the honest comparison: it fell, so the new predictor added noise, not signal. (a) R² always rises when you add a predictor. (c) R² is meaningful — it is the share of variation explained. (d) More predictors is not better by itself."
      },
      {
        "module": 11,
        "q": "A researcher regresses wages on schooling alone (slope $4) and then adds occupation (slope falls to $2.50). This is most likely:",
        "choices": [
          "Multicollinearity",
          "Omitted-variable bias in the first regression",
          "A calculation error",
          "Extrapolation"
        ],
        "answer": 1,
        "explanation": "Correct: (b). Occupation is correlated with schooling and affects wages, so the first slope absorbed the occupation effect. (a) Multicollinearity is about predictors overlapping in the same model. (c) The change is expected, not an error. (d) Extrapolation is about predicting outside the data."
      },
      {
        "module": 12,
        "q": "A researcher wants to know whether a new checkout system is faster. She times 30 checkouts before and 30 after the change, on the same 30 cashiers. The right test is:",
        "choices": [
          "A two-sample t-test",
          "A paired t-test",
          "A chi-square test",
          "ANOVA"
        ],
        "answer": 1,
        "explanation": "Correct: (b). The same 30 cashiers measured twice is paired data — analyze the differences. (a) treats the pairs as independent. (c) is for categorical counts. (d) is for three or more groups."
      },
      {
        "module": 12,
        "q": "A study with 100,000 people finds a statistically significant difference of $0.10 an hour in wages. The best summary is:",
        "choices": [
          "The difference is huge",
          "The difference is statistically significant but probably practically unimportant",
          "The study is wrong",
          "The p-value must be large"
        ],
        "answer": 1,
        "explanation": "Correct: (b). With a huge sample, even a trivial difference is significant — significance is about existence, not size. (a) $0.10 an hour is tiny. (c) The study is not wrong; the effect is just small. (d) A significant result has a small p-value by definition."
      },
      {
        "module": 12,
        "q": "“Fail to reject H₀” means:",
        "choices": [
          "H₀ is proven true",
          "The data were not surprising enough under H₀ to reject it",
          "The test was run wrong",
          "The p-value was exactly 0.05"
        ],
        "answer": 1,
        "explanation": "Correct: (b). It is a statement about the evidence, not about the truth of H₀. (a) No test proves a null. (c) A non-significant result is a valid outcome. (d) The p-value can be any value above α."
      }
    ]
  }
};
