// Economics Capstone — Module 12: Comprehensive Review II: Macroeconomics & Statistics
module.exports = {
  "number": 12,
  "slug": "comprehensive-review-macro-statistics",
  "title": "Comprehensive Review II: Macroeconomics & Statistics",
  "estTime": "3–4 hours",
  "objectives": [
    "Recompute GDP growth, inflation from the CPI, the GDP deflator, and the unemployment rate.",
    "Apply the spending multiplier and the money multiplier, and explain fiscal vs. monetary policy.",
    "Recompute present and future value, and read a regression table (slope, SE, t, R²) without fear.",
    "Distinguish correlation from causation and name the limits of a small-sample estimate.",
    "Drill the macroeconomics and statistics core under exam conditions (assignment = exam-style drills, not a paper section)."
  ],
  "sections": [
    {
      "heading": "Measuring the Economy: GDP, Prices, Jobs",
      "html": "<p>Macroeconomics starts with measurement, and the exam tests the arithmetic. <strong>GDP growth:</strong> GDP rises from $20,000 billion to $21,000 billion, so growth = (21,000 − 20,000) ÷ 20,000 = <strong>5.0%</strong>. <strong>Inflation from the CPI:</strong> the CPI rises from 250 to 260, so inflation = (260 − 250) ÷ 250 = <strong>4.0%</strong>. <strong>GDP deflator:</strong> nominal GDP $22,000 billion and real GDP $20,000 billion give a deflator of 22,000 ÷ 20,000 × 100 = <strong>110</strong> — prices are 10% above the base year. <strong>Unemployment rate:</strong> 6 million unemployed out of a 100-million labor force gives 6 ÷ 100 = <strong>6.0%</strong>. <strong>Real wage:</strong> a nominal wage of $25 with a CPI of 125 (base year = 100) is a real wage of 25 ÷ 125 × 100 = <strong>$20</strong> in base-year dollars.</p><p>Each formula has one trap. GDP growth uses the earlier year as the base — dividing by 21,000 instead of 20,000 gives 4.8%, the wrong answer. The CPI and the deflator measure different things: the CPI tracks a fixed basket of consumer goods, the deflator tracks everything produced — so they can disagree, and neither is \"the\" inflation rate without saying which one. And the unemployment rate counts only the labor force: discouraged workers who stopped looking are not unemployed by the official definition, so the rate understates slack in a bad recession. Say which measure you mean, and the number is honest.</p><div class=\"callout\"><strong>Key idea:</strong> Every macro number is a ratio with a base. Get the base right — the earlier year, the base-year prices, the labor force — and the arithmetic follows.</div>"
    },
    {
      "heading": "Policy: Multipliers, the Fed, and the Business Cycle",
      "html": "<p>Policy works through multipliers. <strong>The spending multiplier:</strong> with a marginal propensity to consume (MPC) of 0.8, the multiplier is 1 ÷ (1 − 0.8) = <strong>5</strong> — a $100 billion rise in government spending raises GDP by $500 billion if nothing else changes (the \"if\" does a lot of work: crowding out, imports, and the Fed's response all shrink it in practice). <strong>The money multiplier:</strong> with a 10% reserve requirement, the multiplier is 1 ÷ 0.10 = <strong>10</strong> — $1,000 of new reserves can support $10,000 of deposits if banks lend it all out (they often do not, which is why the multiplier is a ceiling, not a forecast).</p><p><strong>Fiscal policy</strong> (government spending and taxes) shifts aggregate demand directly: expansionary in a recession, contractionary in a boom. <strong>Monetary policy</strong> (the Fed's interest-rate decisions, open-market operations, reserve requirements) works through interest rates and investment. The exam's core distinction: fiscal policy is decided by Congress and the President and is slow but direct; monetary policy is decided by the Fed and is fast but indirect, working through borrowing costs. In a recession with interest rates near zero, fiscal policy's case strengthens — the usual crowding-out argument weakens when private borrowing is already low. The business cycle is the context: expansions end, recessions follow, and policy's job is to shorten the bad part without overheating the good part.</p>"
    },
    {
      "heading": "Statistics: Inference You Can Trust",
      "html": "<p>Statistics is the second half of this module, and it is the half the capstone paper lives on. The quick review: a <strong>sample mean</strong> estimates a population mean, and its precision is the standard error (standard deviation ÷ √n) — bigger samples, smaller errors. A <strong>confidence interval</strong> is estimate ± critical value × standard error: the paper's slope interval ($2.01–$2.84) is the model. A <strong>hypothesis test</strong> asks whether the data rejects the null: t = estimate ÷ standard error, compared with the critical value (2.31 at 5% with 8 degrees of freedom). The paper's t = 13.57 rejects the null of a zero slope resoundingly.</p><p>The second worked example for the exam: five students study 2, 4, 6, 8, 10 hours and score 55, 65, 70, 80, 90. Mean hours = 6, mean score = 72. Slope = 4.25 points per hour, intercept = 72 − 4.25 × 6 = 46.5, so the line is score = 46.5 + 4.25 × hours — and the prediction at 6 hours is exactly 72, the mean, as OLS guarantees. The exam will ask you to read a table like this one and say what the slope means, whether it is significant, and what the prediction is — the same three moves as the capstone paper, on fresh numbers.</p><div class=\"callout\"><strong>Key idea:</strong> Inference is three moves: estimate, measure the precision (standard error), test (t-statistic). The capstone paper does all three; the exam asks you to do them on new numbers.</div>"
    },
    {
      "heading": "Money Over Time: Present and Future Value",
      "html": "<p>Two formulas the exam and real life both need. <strong>Present value:</strong> $1,000 received in 5 years at a 5% discount rate is worth 1,000 ÷ 1.05⁵ = 1,000 ÷ 1.2763 = <strong>$783.53</strong> today. <strong>Future value:</strong> $1,000 invested today at 6% for 10 years grows to 1,000 × 1.06¹⁰ = 1,000 × 1.7908 = <strong>$1,790.85</strong>. The same logic prices everything in Module 8's policy check: the $4,860-a-year benefit stream is worth about $83,400 today at 5% because each year's $4,860 is discounted back, and the annuity factor (17.16) is just the sum of those discounts.</p><p>The trap is compounding direction: present value divides (money later is worth less), future value multiplies (money now grows). Mixing them up is the most common arithmetic error in the course — and the exam will offer both directions as answer choices. Write the formula down before touching the calculator: PV = FV ÷ (1 + r)ⁿ, FV = PV × (1 + r)ⁿ. And remember the rule of 70 for doubling time: at 6%, money doubles in about 70 ÷ 6 ≈ 11.7 years — a check that $1,790.85 after 10 years is plausible (just short of doubling, as it should be).</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> GDP growth 5.0% (20,000 → 21,000); CPI inflation 4.0% (250 → 260); GDP deflator 110 (22,000 ÷ 20,000 × 100); unemployment 6.0% (6 ÷ 100); real wage $20 (25 ÷ 125 × 100); spending multiplier 5 (MPC 0.8); money multiplier 10 (reserve ratio 10%); PV $783.53 (1,000 in 5 years at 5%); FV $1,790.85 (1,000 at 6% for 10 years); study-hours regression score = 46.5 + 4.25 × hours, prediction at 6 hours = 72. <strong>Review drills:</strong> this module's assignment is exam-style drills, not a paper section — the paper is complete, and the capstone is finished when these drills are done.</p><div class=\"callout\"><strong>Common mistake:</strong> Dividing by the wrong base in a growth rate. Growth is (new − old) ÷ old — dividing by the new value gives a different, wrong number (4.8% instead of 5.0% here).</div><div class=\"callout\"><strong>Common mistake:</strong> Treating a multiplier as a forecast. The spending multiplier of 5 and the money multiplier of 10 are ceilings under ideal conditions — crowding out, imports, and banks holding reserves all shrink them in practice.</div>"
    }
  ],
  "keyTerms": [
    { "term": "GDP (gross domestic product)", "def": "The market value of all final goods and services produced in a country in a period. Growth here: (21,000 − 20,000) ÷ 20,000 = 5.0%." },
    { "term": "CPI (Consumer Price Index)", "def": "The price of a fixed basket of consumer goods. Inflation here: (260 − 250) ÷ 250 = 4.0%." },
    { "term": "GDP deflator", "def": "Nominal GDP ÷ real GDP × 100. Here 22,000 ÷ 20,000 × 100 = 110 — prices 10% above the base year." },
    { "term": "Unemployment rate", "def": "Unemployed ÷ labor force. Here 6 ÷ 100 = 6.0%. Discouraged workers who stopped looking are not counted." },
    { "term": "Real wage", "def": "Nominal wage ÷ price level × 100. Here 25 ÷ 125 × 100 = $20 in base-year dollars." },
    { "term": "MPC (marginal propensity to consume)", "def": "The share of an extra dollar of income that is spent. MPC 0.8 gives a spending multiplier of 1 ÷ (1 − 0.8) = 5." },
    { "term": "Spending multiplier", "def": "1 ÷ (1 − MPC). With MPC 0.8, a $100 billion spending rise raises GDP by $500 billion — before crowding out." },
    { "term": "Money multiplier", "def": "1 ÷ reserve ratio. With a 10% reserve requirement, $1,000 of reserves can support $10,000 of deposits — a ceiling, not a forecast." },
    { "term": "Fiscal policy", "def": "Government spending and taxes, decided by Congress and the President; shifts aggregate demand directly." },
    { "term": "Monetary policy", "def": "The Fed's interest-rate and open-market decisions; works indirectly, through borrowing costs and investment." },
    { "term": "Aggregate demand / aggregate supply", "def": "Total spending in the economy (AD) and total production capacity (AS). Policy shifts AD; supply shocks shift AS." },
    { "term": "Business cycle", "def": "The economy's alternating expansions and recessions. Policy's job is to shorten recessions without overheating expansions." },
    { "term": "Present value", "def": "What future money is worth today: PV = FV ÷ (1 + r)ⁿ. $1,000 in 5 years at 5% is $783.53 today." },
    { "term": "Future value", "def": "What money today grows to: FV = PV × (1 + r)ⁿ. $1,000 at 6% for 10 years is $1,790.85." },
    { "term": "Standard error (of the mean)", "def": "Standard deviation ÷ √n: how much a sample mean would wobble across samples. Bigger samples, smaller errors." },
    { "term": "t-statistic", "def": "Estimate ÷ standard error. The paper's slope t = 2.425 ÷ 0.18 = 13.57, far beyond the 5% critical value of 2.31 (df = 8)." },
    { "term": "Rule of 70", "def": "Doubling time ≈ 70 ÷ growth rate in percent. At 6%, money doubles in about 11.7 years." }
  ],
  "video": {
    "title": "GDP deflator | GDP: Measuring national income | Macroeconomics | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/L-0LuSw2bTM",
    "note": "Khan Academy on the GDP deflator: nominal vs. real GDP, the price level, and how the deflator turns one into the other — the measurement at the heart of this module. Watch it, then redo the deflator calculation (22,000 ÷ 20,000 × 100 = 110) yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Drill 1 — Measuring the economy.</strong> (a) GDP rises from $20,000 billion to $21,000 billion: compute growth. (b) CPI rises from 250 to 260: compute inflation. (c) Nominal GDP $22,000 billion, real GDP $20,000 billion: compute the GDP deflator. (d) 6 million unemployed, 100-million labor force: compute the unemployment rate.</p>",
      "solution": "<p><strong>Solution:</strong> (a) (21,000 − 20,000) ÷ 20,000 = 1,000 ÷ 20,000 = <strong>5.0%</strong>. (b) (260 − 250) ÷ 250 = 10 ÷ 250 = <strong>4.0%</strong>. (c) 22,000 ÷ 20,000 × 100 = <strong>110</strong>. (d) 6 ÷ 100 = <strong>6.0%</strong>. Each uses the earlier value (or the base-year value, or the labor force) as the base — dividing by the new value would give the wrong answer in (a) and (b).</p>"
    },
    {
      "prompt": "<p><strong>Drill 2 — Multipliers.</strong> (a) MPC = 0.8: compute the spending multiplier, and the GDP effect of a $100 billion spending rise. (b) Reserve requirement 10%: compute the money multiplier, and the deposits $1,000 of new reserves can support. (c) In one sentence each, say why each multiplier is a ceiling, not a forecast.</p>",
      "solution": "<p><strong>Solution:</strong> (a) Multiplier = 1 ÷ (1 − 0.8) = 1 ÷ 0.2 = <strong>5</strong>; $100 billion × 5 = <strong>$500 billion</strong> of GDP. (b) Multiplier = 1 ÷ 0.10 = <strong>10</strong>; $1,000 × 10 = <strong>$10,000</strong> of deposits. (c) Spending: crowding out, imports, and the Fed's response shrink the effect in practice. Money: banks may hold excess reserves instead of lending, so the deposits created can be far below the ceiling.</p>"
    },
    {
      "prompt": "<p><strong>Drill 3 — Money over time.</strong> (a) What is $1,000 received in 5 years worth today at a 5% discount rate? (b) What does $1,000 invested today grow to in 10 years at 6%? (c) Use the rule of 70: about how long does money take to double at 6%?</p>",
      "solution": "<p><strong>Solution:</strong> (a) PV = 1,000 ÷ 1.05⁵ = 1,000 ÷ 1.2763 = <strong>$783.53</strong>. (b) FV = 1,000 × 1.06¹⁰ = 1,000 × 1.7908 = <strong>$1,790.85</strong>. (c) 70 ÷ 6 ≈ <strong>11.7 years</strong> — so $1,790.85 after 10 years is plausible, just short of doubling, as it should be.</p>"
    },
    {
      "prompt": "<p><strong>Drill 4 — Regression on fresh numbers.</strong> Five students study 2, 4, 6, 8, 10 hours and score 55, 65, 70, 80, 90. Mean hours = 6, mean score = 72, slope = 4.25, intercept = 46.5. (a) Write the fitted line. (b) Predict the score for 6 hours of study. (c) Predict the score for 10 hours, and say whether it is interpolation or extrapolation.</p>",
      "solution": "<p><strong>Solution:</strong> (a) Score = 46.5 + 4.25 × hours. (b) At 6 hours: 46.5 + 4.25 × 6 = 46.5 + 25.5 = <strong>72</strong> — the mean, as OLS guarantees. (c) At 10 hours: 46.5 + 42.5 = <strong>89</strong> — interpolation, because 10 hours is inside the observed range (2–10 hours). (The actual student who studied 10 hours scored 90, so the residual is +1.)</p>"
    },
    {
      "prompt": "<p><strong>Drill 5 — Real vs. nominal.</strong> (a) A worker earns $25 an hour nominal with a CPI of 125 (base year = 100). Compute the real wage. (b) Nominal GDP grows 8% and inflation is 3%: approximately how fast does real GDP grow? (c) Why is the answer to (b) approximate?</p>",
      "solution": "<p><strong>Solution:</strong> (a) Real wage = 25 ÷ 125 × 100 = <strong>$20</strong> in base-year dollars. (b) Approximately 8% − 3% = <strong>5%</strong>. (c) It is approximate because the exact formula is (1.08 ÷ 1.03) − 1 = 4.85%, not 5.00% — subtracting works well only when the rates are small, and the exact answer needs division.</p>"
    },
    {
      "prompt": "<p><strong>Drill 6 — Policy choice.</strong> The economy is in a recession with high unemployment and interest rates near zero. (a) Which policy is expansionary fiscal: raising spending or cutting it? (b) Why is the case for fiscal policy stronger when rates are near zero? (c) Name one limit of fiscal policy even then.</p>",
      "solution": "<p><strong>Answer:</strong> (a) Raising spending (or cutting taxes) is expansionary — it shifts aggregate demand right. (b) When rates are near zero, the Fed cannot cut much further, and crowding out is weak because private borrowing is already low — so government spending adds demand instead of displacing it. (c) One limit: politics is slow — spending takes time to legislate and implement, so it can arrive after the recession is over; and it adds to public debt, which must be serviced later.</p>"
    }
  ],
  "quiz": [
    {
      "q": "GDP rises from $20,000 billion to $21,000 billion. Growth is:",
      "choices": [
        "4.8%",
        "5.0%",
        "10%",
        "1.0%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (21,000 − 20,000) ÷ 20,000 = 5.0%. (a) is wrong: 4.8% comes from dividing by the new value (21,000) — the wrong base. (c) is wrong: 10% would need GDP to reach $22,000 billion. (d) is wrong: $1,000 billion is 5% of $20,000 billion, not 1%."
    },
    {
      "q": "CPI rises from 250 to 260. Inflation is:",
      "choices": [
        "10%",
        "4.0%",
        "2.5%",
        "6.0%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (260 − 250) ÷ 250 = 4.0%. (a) is wrong: 10 is the point rise, not the percentage. (c) is wrong: 2.5% would be a rise to 256.25. (d) is wrong: 6.0% is the unemployment rate in the worked example, not inflation."
    },
    {
      "q": "Nominal GDP $22,000 billion, real GDP $20,000 billion. The GDP deflator is:",
      "choices": [
        "90",
        "100",
        "110",
        "200"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 22,000 ÷ 20,000 × 100 = 110. (a) is wrong: that would mean prices fell below the base year. (b) is wrong: 100 is the base-year value. (d) is wrong: that would need nominal GDP of $40,000 billion."
    },
    {
      "q": "With MPC = 0.8, the spending multiplier is:",
      "choices": [
        "0.8",
        "1.25",
        "5",
        "8"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 1 ÷ (1 − 0.8) = 1 ÷ 0.2 = 5. (a) is wrong: that is the MPC itself. (b) is wrong: 1.25 is 1 ÷ 0.8. (d) is wrong: 8 has no role in the formula."
    },
    {
      "q": "$1,000 received in 5 years at a 5% discount rate is worth today:",
      "choices": [
        "$1,276.28",
        "$783.53",
        "$1,000",
        "$500"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1,000 ÷ 1.05⁵ = 1,000 ÷ 1.2763 = $783.53. (a) is wrong: that is the future value of $1,000 in 5 years at 5%. (c) is wrong: future money is worth less than present money. (d) is wrong: that would be a 50% discount over 5 years."
    },
    {
      "q": "In the study-hours regression (score = 46.5 + 4.25 × hours), the predicted score at 6 hours is:",
      "choices": [
        "46.5",
        "72",
        "89",
        "90"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 46.5 + 4.25 × 6 = 72 — the mean score, as OLS guarantees at the mean of x. (a) is wrong: that is the intercept (0 hours). (c) is wrong: that is the prediction at 10 hours. (d) is wrong: 90 is the actual score of the 10-hour student, not a prediction."
    },
    {
      "q": "A worker earns $25 nominal with a CPI of 125 (base = 100). The real wage is:",
      "choices": [
        "$25",
        "$31.25",
        "$20",
        "$12.50"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 25 ÷ 125 × 100 = $20 in base-year dollars. (a) is wrong: that is the nominal wage. (b) is wrong: that multiplies instead of dividing. (d) is wrong: that would be the wage at a CPI of 200."
    },
    {
      "q": "The money multiplier with a 10% reserve requirement is 10, but it is a ceiling because:",
      "choices": [
        "Banks always lend everything",
        "Banks may hold excess reserves instead of lending",
        "The Fed sets it at 10 by law",
        "Deposits can never exceed reserves"
      ],
      "answer": 1,
      "explanation": "Correct: (b). If banks hold reserves, fewer deposits are created than the maximum. (a) is wrong: that would make 10 a forecast, not a ceiling. (c) is wrong: the multiplier is arithmetic (1 ÷ reserve ratio), not a law. (d) is wrong: deposits routinely exceed reserves — that is fractional-reserve banking."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Comprehensive Review II: Macroeconomics &amp; Statistics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Every macro number is a ratio with a base — get the base right. Inference is three moves: estimate, measure precision, test.</p>\n<div class=\"formula\">GDP growth: (21,000 − 20,000) ÷ 20,000 = 5.0% &nbsp;|&nbsp; CPI inflation: (260 − 250) ÷ 250 = 4.0% &nbsp;|&nbsp; Deflator: 22,000 ÷ 20,000 × 100 = 110 &nbsp;|&nbsp; Unemployment: 6 ÷ 100 = 6.0% &nbsp;|&nbsp; Real wage: 25 ÷ 125 × 100 = $20</div>\n<p><strong>Multipliers:</strong> spending 1 ÷ (1 − 0.8) = 5 ($100bn → $500bn) · money 1 ÷ 0.10 = 10 ($1,000 → $10,000). Both are ceilings, not forecasts. <strong>Money over time:</strong> PV = 1,000 ÷ 1.05⁵ = $783.53 · FV = 1,000 × 1.06¹⁰ = $1,790.85 · Rule of 70: doubling at 6% ≈ 11.7 years. <strong>Regression:</strong> score = 46.5 + 4.25 × hours; prediction at 6 hours = 72. <strong>Capstone:</strong> slope t = 13.57, 95% CI $2.01–$2.84, R² = 0.96.</p>\n<p><strong>Review drills:</strong> This module's assignment is exam-style drills, not a paper section — the paper is complete, and the capstone is finished when these drills are done.</p>\n<p><strong>Self-check:</strong> Redo every number in the formula line above without looking. If you can, you are ready for the macro and statistics half of both comprehensive exams — and for the capstone itself.</p>\n"
};
