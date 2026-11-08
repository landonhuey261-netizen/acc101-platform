// Economics Capstone — Module 5: Descriptive Analysis: What the Data Shows
module.exports = {
  "number": 5,
  "slug": "descriptive-analysis",
  "title": "Descriptive Analysis: What the Data Shows",
  "estTime": "3–4 hours",
  "objectives": [
    "Compute and interpret the mean, median, and standard deviation for wages and schooling.",
    "Explain when the median beats the mean and when the standard deviation matters more than the range.",
    "Build a descriptive statistics table for the paper, with every number recomputed.",
    "Describe the pattern in the data (wages rise with schooling; same-schooling workers differ) without claiming causation.",
    "Write the descriptive results section of the paper (paper arc: Module 5)."
  ],
  "sections": [
    {
      "heading": "Center: Mean and Median",
      "html": "<p>Descriptive analysis answers the simplest question first: what does the data look like? Start with the center. The <strong>mean wage</strong> is $24.10 an hour (wages sum to 241, divided by 10). The <strong>median wage</strong> is $23.50 — the middle of the sorted wages (14, 16, 18, 20, 22, 25, 27, 30, 33, 36), the average of the 5th and 6th values, 22 and 25. The mean sits above the median because the top wages ($33, $36) pull the average up; the median is the typical worker, the mean is the average dollar. For schooling, the mean and median agree at 16.0 years — the distribution is symmetric, with two workers at each level from 12 to 20.</p><p>Report both, always. The mean is the number the regression uses (the OLS line passes through the point of means, 16.0 years and $24.10), and the median is the number that resists outliers. In a sample with one billionaire, the mean wage would be absurd and the median would barely move — that is why the pair matters, and why this paper prints both before any regression appears.</p><div class=\"callout\"><strong>Key idea:</strong> The mean is the average dollar; the median is the typical worker. When they disagree, the data is skewed — and the reader deserves to know which one you are talking about.</div>"
    },
    {
      "heading": "Spread: Range and Standard Deviation",
      "html": "<p>Center without spread is half the story. The <strong>range</strong> of wages is $14 to $36 — a $22 spread. The <strong>sample standard deviation</strong> of wages is $7.39 an hour, the typical distance of a worker's wage from the mean of $24.10. For schooling, the sample standard deviation is 2.98 years around the mean of 16.0. The standard deviation matters because it sets the scale for everything that follows: a slope of $2.43 an hour per year of schooling is large relative to a wage spread of $7.39, which is why the regression will fit so tightly.</p><p>A common trap: reporting the population standard deviation ($7.01 for wages) when the sample standard deviation ($7.39) is the right one. The sample formula divides by n − 1 (9) because the sample mean is itself estimated; the population formula divides by n (10) and understates the spread when you are generalizing from a sample. This paper uses the sample standard deviation throughout, and says so in the table notes — a one-line note that stops a careful reader from recomputing a different number and thinking you made an error.</p>"
    },
    {
      "heading": "The Pattern, in Words and in a Table",
      "html": "<p>The descriptive results section does two things: it prints the table, and it says in words what the table shows. What this table shows is a clean pattern with noise on top. Group the workers by schooling: 12 years averages $15.00 an hour (14 and 16); 14 years averages $19.00 (18 and 20); 16 years averages $23.50 (22 and 25); 18 years averages $28.50 (27 and 30); 20 years averages $34.50 (33 and 36). Each two-year step adds roughly $4–$6 an hour — about $2–$2.50 per year — which is the slope the regression will estimate. The noise is inside each group: the two 16-year workers differ by $3, the two 12-year workers by $2.</p><p>That last sentence is the most important one in the section, because it states the limit of description: the table shows that wages rise with schooling, and it shows that schooling does not explain everything. The gap between the two 16-year workers ($22 vs. $25) is the error term in person — ability, occupation, luck — and it is the reason the paper needs a regression with a measure of fit (R²) rather than a table alone. Description shows the pattern; it does not explain it, and it never claims causation.</p><div class=\"callout\"><strong>Key idea:</strong> Describe first, explain second. The descriptive section reports what the data shows; the regression section tests why; the interpretation section judges how far to trust it.</div>"
    },
    {
      "heading": "A Table the Reader Can Check",
      "html": "<p>A descriptive table has four columns: variable, mean, median, standard deviation (sample), and range — plus a notes line stating the sample size (n = 10) and the formula used. Here it is, with every number recomputed: Wage ($/hour): mean 24.10, median 23.50, SD 7.39, range 14–36. Schooling (years): mean 16.0, median 16.0, SD 2.98, range 12–20. Group means: 12 years → $15.00; 14 years → $19.00; 16 years → $23.50; 18 years → $28.50; 20 years → $34.50.</p><p>Check the group means against the slope: from 12 to 20 years is 8 years, and from $15.00 to $34.50 is $19.50, which is $19.50 ÷ 8 = $2.44 an hour per year — within a cent of the regression slope of $2.43 (the difference is rounding and the within-group noise). When two different calculations land on the same number, the reader's confidence rises — and when they do not, the difference is a clue, not a problem to hide. That cross-check belongs in the paper, in one sentence, because it is the kind of detail that makes a reviewer trust the rest.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> mean wage $24.10, median wage $23.50, sample SD $7.39, range $14–$36; mean schooling 16.0 years, median 16.0, sample SD 2.98, range 12–20; group means rise from $15.00 (12 years) to $34.50 (20 years), about $2.44 a year — matching the regression slope of $2.43; the within-group gaps ($22 vs. $25 at 16 years) are the error term. <strong>Paper arc:</strong> this module's assignment writes the descriptive results section.</p><div class=\"callout\"><strong>Common mistake:</strong> Reporting only the mean. In skewed data the mean misleads; the median is the typical worker. Report both, and say which one the regression uses.</div><div class=\"callout\"><strong>Common mistake:</strong> Describing the pattern as a causal finding. \"Wages rise with schooling\" is description. \"Schooling raises wages\" is a causal claim the descriptive section has no business making.</div>"
    }
  ],
  "keyTerms": [
    { "term": "Mean", "def": "The average: sum of values divided by count. Mean wage = 241 ÷ 10 = $24.10; mean schooling = 160 ÷ 10 = 16.0 years." },
    { "term": "Median", "def": "The middle value when data is sorted. Median wage = (22 + 25) ÷ 2 = $23.50; median schooling = 16.0 years." },
    { "term": "Standard deviation (sample)", "def": "The typical distance of a value from the mean, dividing by n − 1. Wage SD = $7.39; schooling SD = 2.98 years." },
    { "term": "Range", "def": "Maximum minus minimum (or the two endpoints). Wages range from $14 to $36 — a $22 spread." },
    { "term": "Skew", "def": "Asymmetry in a distribution. Here the mean wage ($24.10) sits above the median ($23.50) because the top wages pull the average up." },
    { "term": "Descriptive statistics", "def": "Numbers that summarize a dataset — mean, median, standard deviation, range — without testing any hypothesis." },
    { "term": "Group mean", "def": "The mean within one category — for example, the mean wage of the two workers with 12 years of schooling: (14 + 16) ÷ 2 = $15.00." },
    { "term": "Outlier", "def": "A value far from the rest that pulls the mean but barely moves the median. The teaching sample has no extreme outlier." },
    { "term": "Sample vs. population SD", "def": "The sample SD divides by n − 1 ($7.39 for wages); the population SD divides by n ($7.01). This paper uses the sample SD and says so." },
    { "term": "n", "def": "Sample size — the number of observations. Here n = 10 workers. Every table states n." },
    { "term": "Distribution", "def": "The shape of the data — how values spread around the center. Schooling here is symmetric; wages are slightly right-skewed." },
    { "term": "Cross-check", "def": "Computing the same quantity two ways (group means vs. regression slope: $2.44 vs. $2.43) to confirm the arithmetic." },
    { "term": "Descriptive results section", "def": "The paper section that prints the summary table and says in words what it shows — pattern plus noise, no causal claims." }
  ],
  "video": {
    "title": "Intro to statistics with R - Three Measures of Central Tendency",
    "embedUrl": "https://www.youtube.com/embed/mRVG4Dm99Pw",
    "note": "DataCamp's introduction to the mean, median, and mode — the three measures of center. Watch for the intuition (which one the \"typical\" value is), then apply it to the wage data in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Paper section: Descriptive table.</strong> Build the table: for wages and for schooling, give the mean, median, sample standard deviation, and range. (Wage: mean 24.10, median 23.50, SD 7.39, range 14–36. Schooling: mean 16.0, median 16.0, SD 2.98, range 12–20.) Add a notes line stating n = 10 and that SDs are sample SDs.</p>",
      "solution": "<p><strong>Answer:</strong> Wage ($/hour), n = 10: mean $24.10, median $23.50, sample SD $7.39, range $14–$36. Schooling (years), n = 10: mean 16.0, median 16.0, sample SD 2.98, range 12–20. Notes: SDs are sample standard deviations (divided by n − 1 = 9). The population SDs would be $7.01 and 2.83 — smaller, and the wrong choice when generalizing from a sample.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Group means.</strong> Compute the mean wage for each schooling level: 12 years (14, 16), 14 years (18, 20), 16 years (22, 25), 18 years (27, 30), 20 years (33, 36). Show each step.</p>",
      "solution": "<p><strong>Solution:</strong> 12 years: (14 + 16) ÷ 2 = <strong>$15.00</strong>. 14 years: (18 + 20) ÷ 2 = <strong>$19.00</strong>. 16 years: (22 + 25) ÷ 2 = <strong>$23.50</strong>. 18 years: (27 + 30) ÷ 2 = <strong>$28.50</strong>. 20 years: (33 + 36) ÷ 2 = <strong>$34.50</strong>. Each two-year step adds $4.00, $4.50, $5.00, and $6.00 — roughly $2–$3 per year.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Cross-check the slope.</strong> From the group means, the wage rises from $15.00 at 12 years to $34.50 at 20 years. Compute the implied slope (dollars per year) and compare it with the regression slope of $2.43.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Wage change = $34.50 − $15.00 = $19.50. Step 2: Schooling change = 20 − 12 = 8 years. Step 3: Implied slope = $19.50 ÷ 8 = <strong>$2.44</strong> an hour per year. Step 4: The regression slope is $2.43 — the two agree within $0.01, which is rounding and within-group noise. Two different routes to the same number raise confidence in both.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — Mean vs. median.</strong> The mean wage is $24.10 and the median is $23.50. (a) Why is the mean higher? (b) Which one is \"the typical worker\"? (c) If the highest wage were $60 instead of $36, which would move more?</p>",
      "solution": "<p><strong>Answer:</strong> (a) The mean is higher because the top wages ($33, $36) pull the average up — the distribution is slightly right-skewed. (b) The median ($23.50) is the typical worker — half earn more, half less. (c) The mean would move more: the new sum would be 241 − 36 + 60 = 265, mean $26.50 (up $2.40), while the median would stay $23.50 — the middle two values (22, 25) would not change.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Paper section: Descriptive results (draft).</strong> Write two paragraphs: (1) the table in words — center and spread for both variables; (2) the pattern — group means rising with schooling — plus the noise inside each group, with no causal claim.</p>",
      "solution": "<p><strong>Answer:</strong> (1) The 10 workers earn a mean wage of $24.10 an hour (median $23.50, sample SD $7.39, range $14–$36) and average 16.0 years of schooling (median 16.0, sample SD 2.98, range 12–20). The mean wage sits above the median because the highest wages pull the average up. (2) Mean wages rise steadily with schooling: $15.00 at 12 years, $19.00 at 14, $23.50 at 16, $28.50 at 18, and $34.50 at 20 — about $2.44 an hour per extra year. But schooling does not explain everything: the two workers with 16 years earn $22 and $25, a $3 gap with schooling held fixed, and similar gaps appear at every level. The pattern is association; whether it is causation is a question for the interpretation, not for this section.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Spot the causal slip.</strong> A draft sentence says: \"The data proves that extra schooling causes higher wages.\" Rewrite it as a correct descriptive sentence.</p>",
      "solution": "<p><strong>Answer:</strong> \"In this sample, workers with more years of schooling earn higher hourly wages on average: the mean rises from $15.00 at 12 years to $34.50 at 20 years.\" The rewrite reports what the data shows (association in this sample) and drops the causal claim (\"proves\" and \"causes\"), which description alone cannot support.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The median wage in the teaching sample is:",
      "choices": [
        "$24.10",
        "$23.50",
        "$22.00",
        "$25.00"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Sorted wages are 14, 16, 18, 20, 22, 25, 27, 30, 33, 36; the middle two are 22 and 25, averaging $23.50. (a) is wrong: $24.10 is the mean. (c) is wrong: $22 is the 5th value, not the median. (d) is wrong: $25 is the 6th value."
    },
    {
      "q": "The sample standard deviation of wages is $7.39. It measures:",
      "choices": [
        "The highest wage",
        "The typical distance of a wage from the mean",
        "The slope of the regression",
        "The number of workers"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The SD is the typical spread around the mean of $24.10. (a) is wrong: the highest wage is $36. (c) is wrong: the slope is $2.43. (d) is wrong: the number of workers is n = 10."
    },
    {
      "q": "Why is the mean wage ($24.10) above the median ($23.50)?",
      "choices": [
        "The sample is too small",
        "The top wages pull the average up — slight right skew",
        "The median is computed wrong",
        "Schooling is symmetric"
      ],
      "answer": 1,
      "explanation": "Correct: (b). High values ($33, $36) raise the mean more than the median. (a) is wrong: size does not create skew. (c) is wrong: the median is (22 + 25) ÷ 2 = $23.50, correct. (d) is wrong: schooling's symmetry is a different variable."
    },
    {
      "q": "The mean wage at 16 years of schooling is:",
      "choices": [
        "$22.00",
        "$23.50",
        "$25.00",
        "$24.10"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (22 + 25) ÷ 2 = $23.50. (a) is wrong: $22 is one of the two workers. (c) is wrong: $25 is the other. (d) is wrong: $24.10 is the overall mean wage."
    },
    {
      "q": "The group means imply a slope of about:",
      "choices": [
        "$1.00 per year",
        "$2.44 per year",
        "$4.50 per year",
        "$19.50 per year"
      ],
      "answer": 1,
      "explanation": "Correct: (b). ($34.50 − $15.00) ÷ (20 − 12) = $19.50 ÷ 8 = $2.44. (a) is wrong: far below the group-mean rise. (c) is wrong: $4.50 is the rise per two years (14 to 16 years), not per year. (d) is wrong: $19.50 is the total rise over 8 years."
    },
    {
      "q": "The two workers with 16 years of schooling earn $22 and $25. The $3 gap is:",
      "choices": [
        "Proof the data is wrong",
        "The error term — what schooling does not explain",
        "The regression slope",
        "The median"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Same schooling, different wages: ability, occupation, luck — the error term in person. (a) is wrong: variation within a group is normal. (c) is wrong: the slope is $2.43. (d) is wrong: the median wage is $23.50."
    },
    {
      "q": "The sample SD divides by n − 1 (9) rather than n (10) because:",
      "choices": [
        "It makes the number bigger for no reason",
        "The sample mean is itself estimated, so dividing by n would understate the spread",
        "The population SD is always wrong",
        "There are 9 groups"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Dividing by n − 1 corrects for using the estimated mean. (a) is wrong: the correction has a reason. (c) is wrong: the population SD is right for a population, wrong for generalizing from a sample. (d) is wrong: there are 5 schooling levels, not 9 groups."
    },
    {
      "q": "Which sentence belongs in a descriptive results section?",
      "choices": [
        "\"Schooling causes higher wages\"",
        "\"Mean wages rise from $15.00 at 12 years to $34.50 at 20 years\"",
        "\"The government should subsidize college\"",
        "\"The regression proves the hypothesis\""
      ],
      "answer": 1,
      "explanation": "Correct: (b). It reports what the data shows, with numbers. (a) is wrong: causation is an interpretation claim. (c) is wrong: policy is Module 8. (d) is wrong: the regression section tests; description reports."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Descriptive Analysis: Quick Reference</h3>\n<p><strong>Core idea:</strong> Describe first, explain second. Report center and spread for both variables, then the pattern — with the noise stated, and no causal claims.</p>\n<div class=\"formula\">Wage: mean $24.10 · median $23.50 · SD $7.39 · range $14–$36 &nbsp;|&nbsp; Schooling: mean 16.0 · median 16.0 · SD 2.98 · range 12–20</div>\n<p><strong>Group means:</strong> 12 yrs → $15.00 · 14 yrs → $19.00 · 16 yrs → $23.50 · 18 yrs → $28.50 · 20 yrs → $34.50. Implied slope: $19.50 ÷ 8 = $2.44/yr (regression: $2.43). <strong>Noise:</strong> at 16 years, $22 vs. $25 — the error term.</p>\n<p><strong>Paper arc:</strong> This module's assignment writes the descriptive results section.</p>\n<p><strong>Self-check:</strong> Recompute the mean and median wage and the five group means without looking.</p>\n"
};
