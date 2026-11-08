// BUS 121 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.

module.exports = {
  midterm: {
    title: "Midterm Exam",
    minutes: 75,
    passPercent: 70,
    coverage: "Modules 1–6",
    questions: [
      {
        module: 1,
        q: "Monthly sales rise from $180,000 to $225,000. The percent increase is:",
        choices: ["20%", "25%", "45%", "80%"],
        answer: 1,
        explanation: "Correct (b): (225,000 − 180,000) ÷ 180,000 = 45,000 ÷ 180,000 = 25%. (a) is the percent decrease if sales fell back to $180,000. (c) is the dollar change in thousands. (d) is 180,000 ÷ 225,000."
      },
      {
        module: 1,
        q: "A product costs $80 and sells for $120. The markup percentage and the margin percentage are:",
        choices: ["Markup 50%, margin 33.3%", "Markup 33.3%, margin 50%", "Markup 40%, margin 40%", "Markup 150%, margin 66.7%"],
        answer: 0,
        explanation: "Correct (a): Profit is $40. Markup = 40 ÷ 80 = 50% (on cost); margin = 40 ÷ 120 = 33.3% (on price). (b) swaps the two. (c) uses the wrong base for both. (d) divides price by cost and cost by price the wrong way."
      },
      {
        module: 1,
        q: "A store wants a 25% margin on a product that costs $60. The selling price should be:",
        choices: ["$75", "$80", "$85", "$100"],
        answer: 1,
        explanation: "Correct (b): Price = cost ÷ (1 − margin) = 60 ÷ 0.75 = $80. (a) adds a 25% markup instead (60 × 1.25), which gives a 20% margin. (c) is 60 ÷ 0.70. (d) is 60 ÷ 0.60."
      },
      {
        module: 1,
        q: "Sales of $150,000 grow at 8% per year for 3 years. The sales in year 3 are about:",
        choices: ["$186,000", "$188,957", "$195,000", "$150,000"],
        answer: 1,
        explanation: "Correct (b): 150,000 × 1.08³ = 150,000 × 1.259712 = $188,956.80 ≈ $188,957. (a) adds 8% three times without compounding (150,000 × 1.24). (c) compounds at 10%. (d) is the starting value."
      },
      {
        module: 2,
        q: "Monthly sales are $3,000, $3,600, $3,300, and $3,900. The total and the average are:",
        choices: ["Total $13,800; average $3,450", "Total $13,800; average $3,600", "Total $14,400; average $3,600", "Total $12,900; average $3,225"],
        answer: 0,
        explanation: "Correct (a): Total = 3,000 + 3,600 + 3,300 + 3,900 = $13,800; average = 13,800 ÷ 4 = $3,450. (b) uses the second month's value as the average. (c) overstates the total by $600. (d) understates the total by $900."
      },
      {
        module: 2,
        q: "A price list has product codes in column A and prices in column B. To find the price of code A102, the best function is:",
        choices: ["SUM", "VLOOKUP", "AVERAGE", "COUNT"],
        answer: 1,
        explanation: "Correct (b): VLOOKUP searches column A for A102 and returns the matching price from column B. (a) adds numbers. (c) averages them. (d) counts them — none of them look up a value."
      },
      {
        module: 2,
        q: "A store sells 200 units at $45 each. The spreadsheet formula for total revenue is:",
        choices: ["=200*45, giving $9,000", "=200+45, giving $245", "=45/200, giving $0.23", "=200-45, giving $155"],
        answer: 0,
        explanation: "Correct (a): 200 × 45 = $9,000. (b) adds instead of multiplying. (c) divides. (d) subtracts — none of them compute revenue."
      },
      {
        module: 2,
        q: "Cell B1 holds the discount rate 10%. The formula =B2*(1-$B$1) is copied from C2 to C3. In C3 the formula becomes:",
        choices: ["=B3*(1-$B$1)", "=B2*(1-B2)", "=B3*(1-B2)", "=B2*(1-$B$2)"],
        answer: 0,
        explanation: "Correct (a): The relative reference B2 moves to B3, while the absolute reference $B$1 stays fixed. (b) does not move the relative reference. (c) loses the absolute $ signs on the rate. (d) moves the rate reference to B2."
      },
      {
        module: 3,
        q: "Data: 10, 12, 14, 16, 18. The mean and the median are:",
        choices: ["14 and 14", "14 and 12", "12 and 14", "16 and 14"],
        answer: 0,
        explanation: "Correct (a): Sum = 70; mean = 70 ÷ 5 = 14. The middle (3rd) ordered value is 14. (b) uses the second value as the median. (c) swaps mean and median. (d) uses the fourth value as the mean."
      },
      {
        module: 3,
        q: "For the same data (mean 14), the sum of squared deviations is 40. The sample variance and sample standard deviation are:",
        choices: ["8.00 and 2.83", "10.00 and 3.16", "40.00 and 6.32", "10.00 and 2.83"],
        answer: 1,
        explanation: "Correct (b): Sample variance = 40 ÷ (5 − 1) = 10.00; sample SD = √10 ≈ 3.16. (a) is the population variance (40 ÷ 5 = 8) and population SD. (c) is the sum itself and its square root. (d) mixes the sample variance with the population SD."
      },
      {
        module: 3,
        q: "Add a value of 100 to the data (10, 12, 14, 16, 18). The new mean and median are about:",
        choices: ["28.33 and 15", "14 and 14", "100 and 15", "28.33 and 100"],
        answer: 0,
        explanation: "Correct (a): Sum = 170; mean = 170 ÷ 6 ≈ 28.33. Ordered values are 10, 12, 14, 16, 18, 100; the median is (14 + 16) ÷ 2 = 15. (b) ignores the outlier. (c) confuses the outlier with the mean. (d) confuses the outlier with the median."
      },
      {
        module: 3,
        q: "A data set has mean 14 and sample standard deviation 3.16. The coefficient of variation is about:",
        choices: ["22.6%", "44.3%", "3.16%", "14%"],
        answer: 0,
        explanation: "Correct (a): CV = 3.16 ÷ 14 ≈ 0.226 = 22.6%. (b) divides the mean by the SD and misplaces the decimal. (c) reports the SD as a percent. (d) reports the mean as a percent."
      },
      {
        module: 4,
        q: "The best chart for showing how a budget is split across three categories is a:",
        choices: ["Line chart", "Pie chart", "Histogram", "Scatter plot"],
        answer: 1,
        explanation: "Correct (b): A pie chart shows parts of a whole, and three slices are easy to compare. (a) is for trends over time. (c) is for distributions of numbers. (d) is for relationships between two numbers."
      },
      {
        module: 4,
        q: "Quarterly sales are $50,000 in Q1 and $65,000 in Q2. The percent increase is:",
        choices: ["15%", "30%", "65%", "23%"],
        answer: 1,
        explanation: "Correct (b): (65,000 − 50,000) ÷ 50,000 = 30%. (a) is the dollar change in thousands. (c) is Q2's value in thousands. (d) is 15,000 ÷ 65,000 — the wrong base."
      },
      {
        module: 4,
        q: "A budget of $400,000 is split 40% product, 35% marketing, 25% operations. The dollar amounts are:",
        choices: ["$160,000 / $140,000 / $100,000", "$200,000 / $120,000 / $80,000", "$140,000 / $160,000 / $100,000", "$100,000 / $140,000 / $160,000"],
        answer: 0,
        explanation: "Correct (a): 40% × 400,000 = $160,000; 35% × 400,000 = $140,000; 25% × 400,000 = $100,000. (b) is a 50/30/20 split. (c) swaps product and marketing. (d) reverses the order."
      },
      {
        module: 4,
        q: "A bar chart comparing $40,000 and $55,000 has its y-axis starting at $35,000. The chart makes the larger bar look:",
        choices: ["The same height as the smaller bar", "About four times as tall as the smaller bar", "Slightly taller, correctly", "Shorter than the smaller bar"],
        answer: 1,
        explanation: "Correct (b): The visible heights are $20,000 vs. $5,000 above the axis start — a 4:1 visual ratio for a 37.5% real difference. (a) and (d) are false. (c) is what a zero-based axis would show."
      },
      {
        module: 5,
        q: "P(A) = 0.70 and P(B) = 0.40, and A and B are independent. P(A and B) is:",
        choices: ["1.10", "0.28", "0.30", "0.82"],
        answer: 1,
        explanation: "Correct (b): 0.70 × 0.40 = 0.28. (a) adds the probabilities. (c) is the difference. (d) is P(A or B) = 0.70 + 0.40 − 0.28 = 0.82."
      },
      {
        module: 5,
        q: "If the probability a delivery is on time is 0.85, the probability it is late is:",
        choices: ["0.85", "0.15", "1.85", "0.425"],
        answer: 1,
        explanation: "Correct (b): Complement rule: 1 − 0.85 = 0.15. (a) is P(on time). (c) exceeds 1. (d) is half of 0.85."
      },
      {
        module: 5,
        q: "A project has a 60% chance of earning $40,000 and a 40% chance of losing $5,000. Its expected value is:",
        choices: ["$35,000", "$24,000", "$22,000", "$40,000"],
        answer: 2,
        explanation: "Correct (c): (0.60 × 40,000) + (0.40 × −5,000) = 24,000 − 2,000 = $22,000. (a) ignores the probabilities. (b) ignores the loss. (d) is the best outcome alone."
      },
      {
        module: 5,
        q: "A bag has 4 red and 6 blue marbles. Two are drawn without replacement. P(both red) is about:",
        choices: ["0.16", "0.40", "0.133", "0.60"],
        answer: 2,
        explanation: "Correct (c): (4/10) × (3/9) = 0.40 × 0.333 ≈ 0.133. (a) is (4/10) × (4/10) — the with-replacement value. (b) is P(first red). (d) is P(first blue)."
      },
      {
        module: 6,
        q: "A population has standard deviation 12. The standard error of the mean for samples of n = 36 is:",
        choices: ["12", "6", "2", "0.33"],
        answer: 2,
        explanation: "Correct (c): SE = 12 ÷ √36 = 12 ÷ 6 = 2. (a) is the population standard deviation. (b) is 12 ÷ 2. (d) is 12 ÷ 36."
      },
      {
        module: 6,
        q: "A sample of 36 has mean 60 and the population standard deviation is 12. The 95% confidence interval is:",
        choices: ["56.08 to 63.92", "58.04 to 61.96", "48 to 72", "60 to 63.92"],
        answer: 0,
        explanation: "Correct (a): SE = 2, margin = 1.96 × 2 = 3.92, so 60 ± 3.92. (b) uses a margin of 1.96 alone. (c) uses σ instead of SE. (d) is only the upper half."
      },
      {
        module: 6,
        q: "A manager wants a 95% confidence interval with a margin of error of at most $3, and σ = $12. The sample size needed is about:",
        choices: ["16", "36", "62", "144"],
        answer: 2,
        explanation: "Correct (c): 1.96 × 12 ÷ √n ≤ 3 gives √n ≥ 7.84, so n ≥ 61.47 → 62. (a) gives a margin of 5.88. (b) gives a margin of 3.92. (d) gives a margin of 1.96 — more precision than asked for."
      },
      {
        module: 6,
        q: "The correct interpretation of a 95% confidence interval is:",
        choices: ["There is a 95% chance the true mean is in this interval", "95% of intervals built this way contain the true mean", "95% of the data fall inside the interval", "The sample mean is exactly right 95% of the time"],
        answer: 1,
        explanation: "Correct (b): The interval is the random part; the mean is fixed. (a) is the common misreading. (c) describes a range of data, not an interval for a mean. (d) is not a defined statement."
      },
      {
        module: 6,
        q: "A satisfaction survey gets replies from only 8% of customers. The main problem is:",
        choices: ["The sample is too large", "Respondents are not random, so the sample is biased", "Confidence intervals cannot be computed", "The standard error is zero"],
        answer: 1,
        explanation: "Correct (b): The 8% who reply differ systematically from those who do not, so the sample is biased — and no interval can fix bias. (a) is backwards. (c) is false. (d) is false."
      }
    ]
  },
  final: {
    title: "Final Exam",
    minutes: 120,
    passPercent: 70,
    coverage: "Modules 1–12",
    questions: [
      {
        module: 1,
        q: "A product costs $50 and sells for $75. The markup and margin are:",
        choices: ["Markup 50%, margin 33.3%", "Markup 33.3%, margin 50%", "Markup 25%, margin 25%", "Markup 150%, margin 66.7%"],
        answer: 0,
        explanation: "Correct (a): Profit is $25. Markup = 25 ÷ 50 = 50%; margin = 25 ÷ 75 = 33.3%. (b) swaps the two. (c) uses the wrong bases. (d) divides price by cost and cost by price the wrong way."
      },
      {
        module: 1,
        q: "A product costs $60 and sells for $100 (a 40% margin). A 10% discount is offered. The new price, profit, and margin are:",
        choices: ["$90, $30, 33.3%", "$90, $40, 44.4%", "$90, $30, 30%", "$100, $40, 40%"],
        answer: 0,
        explanation: "Correct (a): Price = 100 × 0.90 = $90; profit = 90 − 60 = $30; margin = 30 ÷ 90 = 33.3%. (b) keeps the old profit. (c) computes margin on cost instead of price. (d) ignores the discount."
      },
      {
        module: 1,
        q: "Sales rise from 500 units to 650 units. The percent increase is:",
        choices: ["15%", "30%", "65%", "23%"],
        answer: 1,
        explanation: "Correct (b): (650 − 500) ÷ 500 = 150 ÷ 500 = 30%. (a) is half the change. (c) is the new value in tens. (d) is 150 ÷ 650 — the wrong base."
      },
      {
        module: 2,
        q: "Monthly sales are $2,000, $2,500, and $3,000. The total and the average are:",
        choices: ["Total $7,500; average $2,500", "Total $7,500; average $3,000", "Total $7,000; average $2,333", "Total $8,000; average $2,667"],
        answer: 0,
        explanation: "Correct (a): Total = 7,500; average = 7,500 ÷ 3 = 2,500. (b) uses the largest month as the average. (c) and (d) mis-add the total."
      },
      {
        module: 2,
        q: "A column holds the values 40, 55, 70. The range (max minus min) is:",
        choices: ["15", "30", "55", "165"],
        answer: 1,
        explanation: "Correct (b): 70 − 40 = 30. (a) is the step between values. (c) is the middle value. (d) is the sum."
      },
      {
        module: 2,
        q: "The discount rate is in $B$1. The formula =B2*(1-$B$1) is copied down a column. The $ signs make the rate reference:",
        choices: ["Stay fixed on B1 in every row", "Move down one row each time", "Change to a different column", "Disappear"],
        answer: 0,
        explanation: "Correct (a): The $ signs make the reference absolute, so it stays on B1 while the relative B2 moves. (b) describes a relative reference. (c) is false — $ fixes the column too. (d) is false."
      },
      {
        module: 3,
        q: "Data: 8, 10, 12, 14, 16. The mean, median, and range are:",
        choices: ["12, 12, 8", "12, 10, 8", "10, 12, 8", "12, 12, 16"],
        answer: 0,
        explanation: "Correct (a): Sum = 60; mean = 12. The middle (3rd) value is 12. Range = 16 − 8 = 8. (b) uses the second value as the median. (c) uses the wrong mean. (d) uses the maximum as the range."
      },
      {
        module: 3,
        q: "For the same data (mean 12), the sum of squared deviations is 40. The sample variance and sample standard deviation are:",
        choices: ["8.00 and 2.83", "10.00 and 3.16", "40.00 and 6.32", "8.00 and 3.16"],
        answer: 1,
        explanation: "Correct (b): Sample variance = 40 ÷ 4 = 10.00; sample SD = √10 ≈ 3.16. (a) is the population variance and population SD. (c) is the sum and its square root. (d) mixes the population variance with the sample SD."
      },
      {
        module: 3,
        q: "A data set has mean 12 and sample standard deviation 3.16. Its coefficient of variation is about:",
        choices: ["26.3%", "38.0%", "3.16%", "12%"],
        answer: 0,
        explanation: "Correct (a): CV = 3.16 ÷ 12 ≈ 26.3%. (b) divides the mean by the SD and misplaces the decimal. (c) reports the SD as a percent. (d) reports the mean as a percent."
      },
      {
        module: 4,
        q: "The best chart for comparing sales across five regions is a:",
        choices: ["Pie chart", "Bar chart", "Line chart", "Histogram"],
        answer: 1,
        explanation: "Correct (b): Bar length compares categories directly. (a) is for parts of a whole with few slices — five is too many. (c) is for trends over time. (d) is for distributions of numbers."
      },
      {
        module: 4,
        q: "Sales fall from $80,000 to $72,000. The percent change is:",
        choices: ["−10%", "−8%", "−11.1%", "+10%"],
        answer: 0,
        explanation: "Correct (a): (72,000 − 80,000) ÷ 80,000 = −10%. (b) is the dollar change in thousands. (c) divides by 72,000 — the wrong base. (d) reverses the direction."
      },
      {
        module: 4,
        q: "A budget of $300,000 is split 50% product, 30% marketing, 20% operations. The dollar amounts are:",
        choices: ["$150,000 / $90,000 / $60,000", "$100,000 / $100,000 / $100,000", "$90,000 / $150,000 / $60,000", "$180,000 / $60,000 / $60,000"],
        answer: 0,
        explanation: "Correct (a): 50% × 300,000 = $150,000; 30% × 300,000 = $90,000; 20% × 300,000 = $60,000. (b) is an equal three-way split. (c) swaps product and marketing. (d) is a 60/20/20 split."
      },
      {
        module: 5,
        q: "P(A) = 0.50, P(B) = 0.30, and P(both) = 0.15. P(A or B) is:",
        choices: ["0.80", "0.65", "0.15", "0.35"],
        answer: 1,
        explanation: "Correct (b): 0.50 + 0.30 − 0.15 = 0.65. (a) adds without subtracting the overlap. (c) is P(both). (d) is P(A) − P(both) + P(B) − P(both) — the neither-ish computation, wrong here."
      },
      {
        module: 5,
        q: "A project has an 80% chance of earning $30,000 and a 20% chance of losing $10,000. Its expected value is:",
        choices: ["$20,000", "$22,000", "$30,000", "$26,000"],
        answer: 1,
        explanation: "Correct (b): (0.80 × 30,000) + (0.20 × −10,000) = 24,000 − 2,000 = $22,000. (a) subtracts the loss without weighting. (c) is the best outcome alone. (d) adds 30,000 and −10,000 then divides by nothing meaningful."
      },
      {
        module: 5,
        q: "If the probability a shipment arrives damaged is 0.05, the probability it arrives undamaged is:",
        choices: ["0.05", "0.95", "1.05", "0.50"],
        answer: 1,
        explanation: "Correct (b): Complement rule: 1 − 0.05 = 0.95. (a) is P(damaged). (c) exceeds 1. (d) is an arbitrary 50%."
      },
      {
        module: 6,
        q: "A population has standard deviation 20. The standard error of the mean for samples of n = 25 is:",
        choices: ["20", "5", "4", "0.8"],
        answer: 2,
        explanation: "Correct (c): SE = 20 ÷ √25 = 20 ÷ 5 = 4. (a) is the population standard deviation. (b) is 20 ÷ 4. (d) is 20 ÷ 25."
      },
      {
        module: 6,
        q: "A sample has mean 100 with a standard error of 4. The 95% confidence interval is:",
        choices: ["92.16 to 107.84", "96 to 104", "80 to 120", "100 to 107.84"],
        answer: 0,
        explanation: "Correct (a): 100 ± 1.96 × 4 = 100 ± 7.84. (b) uses a margin of 4. (c) uses 5 × SE. (d) is only the upper half."
      },
      {
        module: 6,
        q: "Quadrupling the sample size:",
        choices: ["Doubles the standard error", "Halves the standard error", "Leaves the standard error unchanged", "Quadruples the standard error"],
        answer: 1,
        explanation: "Correct (b): SE = σ ÷ √n, and √4 = 2, so the error halves. (a) and (d) reverse the direction. (c) ignores the formula."
      },
      {
        module: 7,
        q: "A sample of 25 orders has mean $210. The claimed mean is $200 and σ = $25. The z-statistic is:",
        choices: ["0.4", "2.0", "5.0", "10.0"],
        answer: 1,
        explanation: "Correct (b): SE = 25 ÷ 5 = 5; z = (210 − 200) ÷ 5 = 2.0. (a) is 10 ÷ 25. (c) is the SE. (d) is the raw difference."
      },
      {
        module: 7,
        q: "For the same test, the two-sided p-value is about 0.0455. At the 0.05 level, the decision is to:",
        choices: ["Reject the null", "Fail to reject the null", "Accept the null as proven", "Double the sample size"],
        answer: 0,
        explanation: "Correct (a): 0.0455 < 0.05, so reject. (b) is the decision when p ≥ 0.05. (c) is wrong — tests never prove the null. (d) is a design choice, not a decision."
      },
      {
        module: 7,
        q: "If the sample size were 100 instead of 25 (same mean, same σ), the z-statistic would be:",
        choices: ["1.0", "2.0", "4.0", "0.5"],
        answer: 2,
        explanation: "Correct (c): SE = 25 ÷ 10 = 2.5; z = 10 ÷ 2.5 = 4.0. (a) and (d) shrink z the wrong way. (b) is the original z."
      },
      {
        module: 7,
        q: "Failing to reject a null hypothesis that is actually false is a:",
        choices: ["Type I error", "Type II error", "Correct decision", "Sampling error"],
        answer: 1,
        explanation: "Correct (b): A Type II error is a missed effect. (a) is rejecting a true null. (c) is wrong. (d) is random variation in samples, not a decision error."
      },
      {
        module: 8,
        q: "Advertising spend x: 2, 4, 6. Sales y: 5, 9, 13. The regression line is:",
        choices: ["y = x + 3", "y = 2x + 1", "y = 3x − 1", "y = 2x + 5"],
        answer: 1,
        explanation: "Correct (b): Each x increase of 2 raises y by 4, so the slope is 2; at x = 0, y = 1. Check: 2×2+1 = 5, 2×4+1 = 9, 2×6+1 = 13. (a) has slope 1. (c) has slope 3. (d) has intercept 5."
      },
      {
        module: 8,
        q: "For the same data, the correlation r and R² are:",
        choices: ["r = 1, R² = 1", "r = 0.5, R² = 0.25", "r = 0, R² = 0", "r = −1, R² = 1"],
        answer: 0,
        explanation: "Correct (a): Every point lies exactly on a rising line, so r = 1 and R² = 1. (b) would mean a weak relationship. (c) would mean no relationship. (d) would mean a falling line."
      },
      {
        module: 8,
        q: "Using the line y = 2x + 1, the predicted sales at x = 8 are:",
        choices: ["13", "15", "17", "21"],
        answer: 2,
        explanation: "Correct (c): 2 × 8 + 1 = 17. (a) is the prediction at x = 6. (b) is 2 × 8 − 1. (d) is 2 × 10 + 1."
      },
      {
        module: 8,
        q: "A regression has R² = 0.49. The share of the variation in y that is unexplained is:",
        choices: ["49%", "51%", "70%", "0.49%"],
        answer: 1,
        explanation: "Correct (b): 1 − 0.49 = 0.51 = 51%. (a) is the explained share. (c) is √0.49 — the correlation. (d) misplaces the decimal."
      },
      {
        module: 9,
        q: "Monthly sales are 200, 220, 210, 230, 240. The 3-period moving-average forecast for period 6 is:",
        choices: ["220.00", "226.67", "230.00", "240.00"],
        answer: 1,
        explanation: "Correct (b): (210 + 230 + 240) ÷ 3 = 680 ÷ 3 ≈ 226.67. (a) is the average of the last two. (c) is the period-4 actual. (d) is the most recent actual."
      },
      {
        module: 9,
        q: "Using the same sales, the weighted moving-average forecast for period 6 with weights 0.5, 0.3, 0.2 (most recent first) is:",
        choices: ["226.67", "231.00", "230.00", "240.00"],
        answer: 1,
        explanation: "Correct (b): 240 × 0.5 + 230 × 0.3 + 210 × 0.2 = 120 + 69 + 42 = 231. (a) is the unweighted average. (c) is the period-4 actual. (d) is the most recent actual."
      },
      {
        module: 9,
        q: "Using the same sales, exponential smoothing with α = 0.4 starting at F₁ = 200 gives F₆ of about:",
        choices: ["200.00", "217.28", "226.37", "240.00"],
        answer: 2,
        explanation: "Correct (c): F₂ = 200, F₃ = 208, F₄ = 208.8, F₅ = 217.28, F₆ = 217.28 + 0.4 × (240 − 217.28) = 226.37. (a) is F₁. (b) is F₅. (d) is the last actual."
      },
      {
        module: 9,
        q: "Using the same sales over periods 1–5, the linear trend line has slope 9 and intercept 193. The trend forecast for period 6 is:",
        choices: ["226.67", "231.00", "247", "240"],
        answer: 2,
        explanation: "Correct (c): 193 + 9 × 6 = 247. (a) is the moving average. (b) is the weighted moving average. (d) is the last actual."
      },
      {
        module: 10,
        q: "A basket costs $500 in the base year and $600 five years later. The index and inflation are:",
        choices: ["Index 120, inflation 20%", "Index 100, inflation 0%", "Index 600, inflation 500%", "Index 83, inflation −17%"],
        answer: 0,
        explanation: "Correct (a): Index = (600 ÷ 500) × 100 = 120; inflation = 20%. (b) is the base-year value. (c) uses the dollar cost as the index. (d) inverts the ratio."
      },
      {
        module: 10,
        q: "A worker earns $30 per hour when the price index (base year = 100) is 120. The wage in base-year dollars is:",
        choices: ["$36.00", "$30.00", "$25.00", "$20.00"],
        answer: 2,
        explanation: "Correct (c): 30 ÷ 1.20 = $25.00. (a) multiplies instead of dividing. (b) is the nominal wage. (d) divides by 1.50."
      },
      {
        module: 10,
        q: "The CPI is 105 in Year 1 and 115.5 in Year 2. Year 2 inflation is:",
        choices: ["10.5%", "10%", "15.5%", "5%"],
        answer: 1,
        explanation: "Correct (b): (115.5 − 105) ÷ 105 = 10.5 ÷ 105 = 10%. (a) is the point change. (c) is the point change plus 5. (d) is half the point change."
      },
      {
        module: 11,
        q: "A process has mean 100 and standard deviation 5. The control limits are:",
        choices: ["UCL 115, LCL 85", "UCL 110, LCL 90", "UCL 105, LCL 95", "UCL 120, LCL 80"],
        answer: 0,
        explanation: "Correct (a): UCL = 100 + 3 × 5 = 115; LCL = 100 − 3 × 5 = 85. (b) uses 2σ. (c) uses 1σ. (d) uses 4σ."
      },
      {
        module: 11,
        q: "Specifications are 85 to 115 and the process standard deviation is 5. Cp is:",
        choices: ["0.67", "1.0", "1.33", "2.0"],
        answer: 1,
        explanation: "Correct (b): (115 − 85) ÷ (6 × 5) = 30 ÷ 30 = 1.0. (a) would need σ = 7.5. (c) would need σ = 3.75. (d) would need σ = 2.5."
      },
      {
        module: 11,
        q: "With the same specifications (85 to 115) and σ = 5, the process mean is 102. Cpk is about:",
        choices: ["1.0", "0.87", "1.13", "0.67"],
        answer: 1,
        explanation: "Correct (b): min((115 − 102) ÷ 15, (102 − 85) ÷ 15) = min(0.867, 1.133) = 0.87. (a) is Cp. (c) is the larger side. (d) is Cp with σ = 7.5."
      },
      {
        module: 12,
        q: "Data: 12, 15, 18, 20, 22, 25, 28. The mean and the median are:",
        choices: ["20 and 20", "20 and 21", "21 and 20", "18 and 20"],
        answer: 0,
        explanation: "Correct (a): Sum = 140; mean = 20. The 4th ordered value is 20. (b) is the median after adding the $120 day. (c) reverses them. (d) uses the wrong middle value."
      },
      {
        module: 12,
        q: "Sample mean 105, claimed mean 100, σ = 15, n = 36. The z-statistic is:",
        choices: ["1.0", "2.0", "2.5", "4.0"],
        answer: 1,
        explanation: "Correct (b): SE = 2.5; z = 5 ÷ 2.5 = 2.0. (a) is half of z. (c) is the SE. (d) is z at n = 144."
      },
      {
        module: 12,
        q: "Sales: 120, 140, 130, 150, 160. The trend-line forecast for period 6 (slope 9, intercept 113) is:",
        choices: ["141.83", "146.67", "167", "151.00"],
        answer: 2,
        explanation: "Correct (c): 113 + 9 × 6 = 167. (a) is exponential smoothing. (b) is the moving average. (d) is the weighted moving average."
      },
      {
        module: 12,
        q: "A basket costs $400 in 2020 and $480 in 2026. Inflation over the period is:",
        choices: ["10%", "20%", "120%", "80%"],
        answer: 1,
        explanation: "Correct (b): Index = 120, so inflation is 20%. (a) is half. (c) is the index. (d) is 100 − 20."
      }
    ]
  }
};
