module.exports = {
  "number": 9,
  "slug": "chi-square-anova-and-comparing-categories",
  "title": "Chi-Square, ANOVA & Comparing Categories",
  "estTime": "3–4 hours",
  "objectives": [
    "Use a chi-square test of independence on a two-way table.",
    "Run a chi-square goodness-of-fit test against a claimed distribution.",
    "Explain what ANOVA tests and how the F-statistic is built.",
    "Compute a one-way ANOVA from summary statistics and interpret it.",
    "Choose the right test — t-test, chi-square, or ANOVA — for a question."
  ],
  "sections": [
    {
      "heading": "When the Data Are Categories",
      "html": "<p>Modules 7 and 8 compared means. But much economic data is categorical: employed or not, online shopper or in-store shopper, supporter or opponent. You cannot take a mean of categories, so you count them — and the <strong>chi-square test</strong> is the tool for counts. It compares the counts you observed with the counts you would expect if nothing interesting were happening, and asks whether the gap is bigger than chance explains.</p><p>Example: a store surveys 200 customers. Under 30: 70 prefer online, 30 prefer in-store. Age 30 and over: 45 prefer online, 55 prefer in-store. Do younger customers really prefer online shopping more, or is this just sampling noise? The chi-square test answers by computing what each cell would hold if age and preference were unrelated.</p><div class=\"callout\"><strong>Key idea:</strong> Means need t-tests; counts need chi-square. The question is the same — “is the difference real?” — but the data type picks the test.</div>"
    },
    {
      "heading": "The Chi-Square Test of Independence",
      "html": "<p>Under independence, each cell's expected count is (row total × column total) ÷ grand total. Overall 115 of 200 prefer online, so the expected online count for the 100 under-30s is 100 × 115 ÷ 200 = <strong>57.5</strong>, and for in-store it is 100 × 85 ÷ 200 = <strong>42.5</strong> — the same for the 30-and-over group. The test statistic adds (observed − expected)² ÷ expected over all four cells: (70 − 57.5)² ÷ 57.5 + (30 − 42.5)² ÷ 42.5 + (45 − 57.5)² ÷ 57.5 + (55 − 42.5)² ÷ 42.5 = <strong>12.79</strong>.</p><p>With df = (2 − 1) × (2 − 1) = 1, the p-value is <strong>0.0003</strong>. At α = 0.05 we reject independence: age and shopping preference are genuinely associated. Younger customers really do prefer online shopping more — the 25-point gap (70% vs. 45%) is far beyond sampling noise.</p><div class=\"formula\">&chi;&sup2; = &Sigma; (Observed &#8722; Expected)&sup2; &divide; Expected &nbsp;|&nbsp; Expected = (row total &times; column total) &divide; grand total &nbsp;|&nbsp; df = (rows &#8722; 1)(columns &#8722; 1)</div>"
    },
    {
      "heading": "Goodness of Fit: Does the Data Match the Claim?",
      "html": "<p>The same statistic tests whether one categorical variable matches a claimed distribution. A store tries three layouts and records 120 customers' choices: 50 chose Layout A, 40 chose Layout B, 30 chose Layout C. If customers had no preference, each layout would get 40. The chi-square statistic is (50 − 40)² ÷ 40 + (40 − 40)² ÷ 40 + (30 − 40)² ÷ 40 = (100 + 0 + 100) ÷ 40 = <strong>5.00</strong>, with df = 3 − 1 = 2 and p = <strong>0.0821</strong>.</p><p>At α = 0.05 we fail to reject: a 50–40–30 split is not surprising when all three layouts are equally attractive. Note the condition: every expected count should be at least 5 (here 40 — easily met). And remember what the test does not say: it never tells you <em>which</em> cells differ, only that the table as a whole does not fit the claim.</p><div class=\"callout\"><strong>Key idea:</strong> Chi-square measures the gap between what you saw and what “nothing interesting” would predict. A big gap means something is going on; a small gap means the claim survives.</div>"
    },
    {
      "heading": "ANOVA: Comparing Three or More Means",
      "html": "<p>What if there are three training programs instead of two? Running three t-tests inflates the false-alarm rate — with three tests at α = 0.05, the chance of at least one false rejection is about 14%. <strong>ANOVA</strong> (analysis of variance) solves this with one test: H₀ says all group means are equal; H₁ says at least one differs.</p><p>ANOVA compares two kinds of variation. The <strong>between-groups</strong> variation measures how far the group means sit from the grand mean; the <strong>within-groups</strong> variation measures how far individuals sit from their own group mean. If the groups are truly different, the between variation dwarfs the within variation, and the F-statistic — the ratio of the two mean squares — is large. Example: three programs with n = 10 each, means 72, 76, and 80, grand mean 76, each group SD 6. SS_between = 10 × [(72 − 76)² + (76 − 76)² + (80 − 76)²] = 10 × 32 = <strong>320</strong> (df = 2, MS = 160). SS_within = 3 × 9 × 36 = <strong>972</strong> (df = 27, MS = 36). F = 160 ÷ 36 = <strong>4.44</strong>, with p = <strong>0.0215</strong> — reject H₀. At least one program differs.</p><p>ANOVA's verdict is deliberately vague: it says <em>somewhere</em> there is a difference, not where. Follow-up pairwise comparisons (like Tukey's test) find which groups differ — and they adjust for the fact that you are now making several comparisons at once.</p><div class=\"formula\">F = MS_between &divide; MS_within &nbsp;|&nbsp; MS_between = SS_between &divide; (k &#8722; 1) &nbsp;|&nbsp; MS_within = SS_within &divide; (N &#8722; k)</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>Chi-square of independence: χ² = 12.79 (df = 1), p = 0.0003 — reject; age and shopping preference are associated.</li><li>Goodness of fit: χ² = 5.00 (df = 2), p = 0.0821 — fail to reject; 50–40–30 is consistent with no preference.</li><li>ANOVA: F = 4.44 (df = 2, 27), p = 0.0215 — reject; at least one program mean differs.</li><li>Expected counts must be at least 5 for chi-square; ANOVA needs roughly normal data within groups and similar variances.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Running many t-tests instead of one ANOVA. Each test at α = 0.05 is a 5% false-alarm chance, and they add up — three tests give about a 14% chance of at least one false rejection.</div><div class=\"callout\"><strong>Common mistake:</strong> Saying a significant ANOVA proves which groups differ. It only proves at least one differs — you need follow-up tests to name them.</div><p><strong>Ready-to-Work link:</strong> “Do customers in different regions prefer different products?” is a chi-square question. “Do our three stores perform differently?” is an ANOVA question. The data type picks the test — learn to read the question, not the formula list.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Chi-square test",
      "def": "A test based on comparing observed counts with expected counts; used for categorical data."
    },
    {
      "term": "Test of independence",
      "def": "A chi-square test of whether two categorical variables are associated."
    },
    {
      "term": "Goodness-of-fit test",
      "def": "A chi-square test of whether one categorical variable matches a claimed distribution."
    },
    {
      "term": "Expected count",
      "def": "The count a cell would have if the null hypothesis were true: (row total × column total) ÷ grand total."
    },
    {
      "term": "Observed count",
      "def": "The count actually seen in a cell of a table."
    },
    {
      "term": "Degrees of freedom (chi-square)",
      "def": "For independence: (rows − 1)(columns − 1). For goodness of fit: categories − 1."
    },
    {
      "term": "ANOVA",
      "def": "Analysis of variance: a test of whether three or more group means are all equal."
    },
    {
      "term": "F-statistic",
      "def": "The ratio MS_between ÷ MS_within; large values mean the group means differ more than chance explains."
    },
    {
      "term": "Between-groups variation",
      "def": "How far the group means sit from the grand mean; the signal ANOVA looks for."
    },
    {
      "term": "Within-groups variation",
      "def": "How far individuals sit from their own group mean; the noise ANOVA compares against."
    },
    {
      "term": "Mean square",
      "def": "A sum of squares divided by its degrees of freedom: MS_between and MS_within."
    },
    {
      "term": "Grand mean",
      "def": "The mean of all observations across all groups."
    },
    {
      "term": "Post-hoc test",
      "def": "A follow-up comparison (such as Tukey's) that finds which groups differ after a significant ANOVA."
    },
    {
      "term": "Multiple comparisons problem",
      "def": "The inflation of the false-alarm rate when many tests are run at once."
    },
    {
      "term": "Contingency table",
      "def": "A two-way table of counts for two categorical variables."
    }
  ],
  "video": {
    "title": "Using Linear Models for t-tests and ANOVA, Clearly Explained!!!",
    "embedUrl": "https://www.youtube.com/embed/NF5_btOaCig",
    "note": "StatQuest shows how t-tests and ANOVA are the same linear-model idea — the unifying view behind this module.",
    "more": [
      {
        "title": "StatQuest: Linear Regression, Clearly Explained!!!",
        "url": "https://www.youtube.com/watch?v=7ArmBVF2dCs"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> 200 customers: under 30 — 70 online, 30 in-store; 30 and over — 45 online, 55 in-store. (a) Find the expected count for each cell under independence. (b) Compute χ². (c) With df = 1 and p = 0.0003, what is the decision at α = 0.05?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Row totals are 100 and 100; column totals are 115 online and 85 in-store. Each expected count is (100 × 115) ÷ 200 = <strong>57.5</strong> (online) or (100 × 85) ÷ 200 = <strong>42.5</strong> (in-store). Step 2: χ² = 156.25 ÷ 57.5 + 156.25 ÷ 42.5 + 156.25 ÷ 57.5 + 156.25 ÷ 42.5 = 2 × (2.7174 + 3.6765) = <strong>12.79</strong>. Step 3: p = 0.0003 < 0.05, so <strong>reject independence</strong> — age and shopping preference are associated.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A store records 120 customers' layout choices: 50 chose A, 40 chose B, 30 chose C. Test H₀: no preference (each layout equally likely) at α = 0.05. (a) Find the expected counts. (b) Compute χ² and df. (c) Decide.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Under H₀ each layout gets 120 ÷ 3 = <strong>40</strong> customers. Step 2: χ² = (10² + 0² + (−10)²) ÷ 40 = 200 ÷ 40 = <strong>5.00</strong>; df = 3 − 1 = <strong>2</strong>. Step 3: p = 0.0821 > 0.05, so <strong>fail to reject</strong> — the 50–40–30 split is consistent with no preference.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Three training programs, n = 10 each, means 72, 76, 80, each group SD 6. (a) Find SS_between and MS_between. (b) Find SS_within and MS_within. (c) Find F and state the decision at α = 0.05 (p = 0.0215).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Grand mean = 76. SS_between = 10 × [(72 − 76)² + 0 + (80 − 76)²] = 10 × 32 = <strong>320</strong>; MS_between = 320 ÷ 2 = <strong>160</strong>. Step 2: SS_within = 3 × 9 × 36 = <strong>972</strong>; MS_within = 972 ÷ 27 = <strong>36</strong>. Step 3: F = 160 ÷ 36 = <strong>4.44</strong>; p = 0.0215 < 0.05, so <strong>reject H₀</strong> — at least one program mean differs.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A researcher runs three separate t-tests at α = 0.05 to compare three programs. (a) What is the approximate chance of at least one false rejection if all three nulls are true? (b) What should she do instead?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Each test has a 5% false-alarm chance, so the chance of no false alarm is 0.95³ = 0.8574, and the chance of at least one is 1 − 0.8574 = <strong>0.1426, about 14%</strong>. Step 2: She should run <strong>one ANOVA</strong> first, and only if it is significant, follow up with adjusted pairwise comparisons (such as Tukey's test) that control the overall error rate.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A chi-square test of independence gives χ² = 12.79 with df = 1 and p = 0.0003. A colleague says, “So age causes the shopping preference.” Explain what the test does and does not show.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The test shows an <strong>association</strong> — the two variables are not independent in this sample, and the gap is far too big for chance. Step 2: It does <strong>not</strong> show causation: age could be a proxy for income, tech comfort, or free time, and this observational survey cannot separate those. Step 3: It also does not say <em>how big</em> the association is — for that, report the percentages (70% vs. 45% online) alongside the test.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A goodness-of-fit test has expected counts of 3, 4, and 5 in its three cells. (a) Is the chi-square approximation safe here? (b) What could the researcher do instead?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: <strong>No.</strong> The chi-square approximation needs expected counts of at least 5 in every cell, and two cells are below that. Step 2: The researcher could <strong>combine categories</strong> (if that makes sense), collect a <strong>larger sample</strong>, or use an <strong>exact test</strong> (such as Fisher's exact test) that does not rely on the approximation.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Chi-square tests are used for:",
      "choices": [
        "Comparing two means",
        "Categorical data — counts in a table",
        "Continuous data only",
        "Regression slopes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Chi-square compares observed counts with expected counts. (a) needs a t-test. (c) Continuous data use means and t-tests. (d) Slopes are tested with t-tests in regression."
    },
    {
      "q": "The shopping survey gives χ² = 12.79 with df = 1 and p = 0.0003. At α = 0.05:",
      "choices": [
        "Fail to reject independence",
        "Reject independence — age and preference are associated",
        "The test is invalid",
        "Age causes the preference"
      ],
      "answer": 1,
      "explanation": "Correct: (b). p = 0.0003 is far below 0.05. (a) needs p > 0.05. (c) All expected counts are 42.5 or 57.5 — well above 5, so the test is valid. (d) Association is not causation."
    },
    {
      "q": "In a chi-square test, the expected count for a cell is:",
      "choices": [
        "The observed count",
        "(Row total × column total) ÷ grand total",
        "The row total",
        "The grand total ÷ number of cells"
      ],
      "answer": 1,
      "explanation": "Correct: (b). That is the count independence predicts. (a) is the observed count — the thing being compared. (c) and (d) are not the independence prediction."
    },
    {
      "q": "The layout goodness-of-fit test gives χ² = 5.00, df = 2, p = 0.0821. At α = 0.05:",
      "choices": [
        "Reject H₀ — customers prefer Layout A",
        "Fail to reject H₀ — the split is consistent with no preference",
        "The layouts are identical",
        "The sample is too small"
      ],
      "answer": 1,
      "explanation": "Correct: (b). p = 0.0821 > 0.05. (a) needs p ≤ 0.05. (c) Failing to reject does not prove equality. (d) n = 120 with expected counts of 40 is a healthy sample."
    },
    {
      "q": "The ANOVA example gives F = 4.44 with p = 0.0215. The correct conclusion is:",
      "choices": [
        "All three program means are equal",
        "At least one program mean differs",
        "Program C is the best",
        "The variances differ"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A significant ANOVA says at least one mean differs — no more, no less. (a) is the null, which we rejected. (c) Needs a follow-up test to name the winner. (d) ANOVA does not test variances."
    },
    {
      "q": "Running three t-tests at α = 0.05 instead of one ANOVA gives about a ___ chance of at least one false rejection.",
      "choices": [
        "5%",
        "14%",
        "50%",
        "0.1%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1 − 0.95³ = 0.1426, about 14%. (a) is the rate for one test. (c) and (d) do not match the arithmetic."
    },
    {
      "q": "The F-statistic is:",
      "choices": [
        "MS_between ÷ MS_within",
        "MS_within ÷ MS_between",
        "SS_between + SS_within",
        "The average of the group means"
      ],
      "answer": 0,
      "explanation": "Correct: (a). F compares the between-groups variation with the within-groups variation. (b) is the reciprocal. (c) is the total sum of squares. (d) is the grand mean."
    },
    {
      "q": "A chi-square test requires expected counts of at least 5 because:",
      "choices": [
        "Smaller counts are always wrong",
        "The chi-square approximation to the sampling distribution breaks down with tiny counts",
        "The degrees of freedom change",
        "Observed counts must exceed 5"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The χ² distribution approximates the true sampling distribution only when expected counts are large enough. (a) Small counts are not “wrong,” just too sparse for the approximation. (c) df does not depend on count size. (d) The rule is about expected counts, not observed ones."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Chi-Square, ANOVA &amp; Comparing Categories: Quick Reference</h3>\n<p><strong>Chi-square:</strong> &chi;&sup2; = &Sigma; (Observed &#8722; Expected)&sup2; &divide; Expected. Expected = (row total &times; column total) &divide; grand total. Needs expected counts &ge; 5.</p>\n<p><strong>Degrees of freedom:</strong> Independence: (rows − 1)(columns − 1). Goodness of fit: categories − 1.</p>\n<div class=\"formula\">F = MS_between &divide; MS_within &nbsp;|&nbsp; MS_between = SS_between &divide; (k &#8722; 1) &nbsp;|&nbsp; MS_within = SS_within &divide; (N &#8722; k)</div>\n<p><strong>Worked anchors:</strong> Shopping: &chi;&sup2; = 12.79 (df = 1), p = 0.0003 → reject independence. Layouts: &chi;&sup2; = 5.00 (df = 2), p = 0.0821 → fail to reject. ANOVA: F = 4.44, p = 0.0215 → reject; at least one mean differs.</p>\n<p><strong>Watch out:</strong> Never run many t-tests instead of one ANOVA (about a 14% false-alarm rate for three tests at &alpha; = 0.05). And a significant ANOVA never names the winner — follow up with a post-hoc test.</p>\n<p><strong>Self-check:</strong> Take any two-way table from a survey and compute its expected counts and chi-square statistic by hand.</p>\n"
};
