// Economics Capstone — Module 7: Interpreting Results: What You Found & What It Means
module.exports = {
  "number": 7,
  "slug": "interpreting-results",
  "title": "Interpreting Results: What You Found & What It Means",
  "estTime": "3–4 hours",
  "objectives": [
    "Interpret the slope ($2.43), R² (0.96), and t-statistic (13.57) in plain words a non-economist can follow.",
    "Explain statistical significance vs. economic significance: a result can be one without being the other.",
    "Apply the correlation-is-not-causation test, including ability bias and reverse causation.",
    "Judge what the paper can and cannot claim, and write those limits into the interpretation.",
    "Write the interpretation section of the paper (paper arc: Module 7)."
  ],
  "sections": [
    {
      "heading": "What the Numbers Say, in Plain Words",
      "html": "<p>Interpretation is translation: turn the regression table into sentences a non-economist can follow. Here is the translation. <strong>The slope:</strong> in this 10-worker sample, each additional year of schooling is associated with $2.43 more in hourly pay. A worker with 20 years of schooling is predicted to earn $33.80 an hour; a worker with 12 years, $14.40 — a gap of $19.40 an hour, or about $40,000 a year on a 2,000-hour working year (19.40 × 2,000 = $38,800). <strong>The fit:</strong> the line explains 96% of the variation in wages — the pattern is strong, not a scatter. <strong>The test:</strong> the slope is 13.57 standard errors from zero, far beyond the 2.31 needed for significance, so the association is almost certainly not luck.</p><p>Each sentence must survive the \"so what?\" test. The slope's size matters because $2.43 an hour is large next to the mean wage of $24.10 — about 10% per year, at the top of the literature's 5–10% range. The fit matters because a tight fit means the pattern is consistent across all 10 workers, not driven by one outlier. The significance matters because with only 10 workers, a weak result could easily be chance — and this one is not weak. A good interpretation never just repeats the table; it says why each number matters.</p><div class=\"callout\"><strong>Key idea:</strong> Translate, don't repeat. \"The slope is 2.43\" is a table entry. \"Each extra year is worth $2.43 an hour — about 10% of the mean wage\" is an interpretation.</div>"
    },
    {
      "heading": "Statistical Significance Is Not Economic Significance",
      "html": "<p>Two kinds of significance, and they are different. <strong>Statistical significance</strong> asks: could this result be luck? With t = 13.57, the answer is almost certainly no. <strong>Economic significance</strong> asks: is the effect big enough to matter? Here the answer is yes — $2.43 an hour is about 10% of the mean wage per year, and over a working life the gap between 12 and 20 years of schooling is roughly $38,800 a year. But the two can part ways: a huge sample can make a trivial effect statistically significant (a $0.02 slope with t = 5), and a tiny sample can hide a large effect behind a wide standard error. A paper reports both and confuses neither.</p><p>The confidence interval helps keep them apart: $2.01–$2.84 an hour per year. The whole interval is economically meaningful — even the bottom end, $2.01, is about 8% of the mean wage — so the paper can say the effect is both statistically significant and economically meaningful, in this sample. If the interval had been $0.05–$4.80, the paper could claim significance but not precision; if it had been $0.01–$0.03, it could claim precision but not importance. The interval is the honest middle ground between a p-value and a headline.</p>"
    },
    {
      "heading": "Correlation Is Not Causation — The Three Tests",
      "html": "<p>The most important paragraph in the paper is the one that says what the regression cannot prove. Three rival stories could produce the same slope. <strong>Ability bias:</strong> more able people stay in school longer and earn more anyway, so the slope credits schooling with ability's work (Module 3). <strong>Reverse causation:</strong> higher expected wages could cause more schooling — someone expecting a high-paying career invests in the degree to get it — so the arrow may run both ways. <strong>A third factor:</strong> family background could drive both schooling and wages (networks, neighborhoods, inherited wealth), making the slope a marker of background rather than of schooling itself.</p><p>The paper handles these three tests honestly. It cannot rule them out with 10 workers and no controls — and it says so. What it can say: the association is strong, significant, and consistent with the literature's causal evidence from natural experiments (Angrist and Krueger, 1991), which found a real causal return. So the paper's claim is carefully worded: \"schooling is associated with substantially higher wages in this sample, and the wider literature gives reason to believe part of that association is causal — but this study alone cannot separate the causal part from ability bias.\" That sentence is the difference between a credible paper and an overclaiming one.</p><div class=\"callout\"><strong>Key idea:</strong> Three rival stories — ability, reverse causation, a third factor. A paper that names them and says which it can and cannot rule out is a paper a reader can trust.</div>"
    },
    {
      "heading": "What the Paper Can and Cannot Claim",
      "html": "<p>Pull it together into the claim the paper is allowed to make. <strong>It can claim:</strong> in this 10-worker teaching sample, more schooling is strongly and significantly associated with higher hourly wages — $2.43 an hour per year, R² = 0.96, t = 13.57 — and the size sits at the top of the literature's 5–10% benchmark range. <strong>It cannot claim:</strong> that an extra year of schooling <em>causes</em> a $2.43 raise for any particular worker; that the result generalizes to the U.S. labor market; or that the payoff would survive controls for ability, experience, and occupation. <strong>It can recommend:</strong> nothing yet — policy needs Module 8, where the claim is weighed against costs, alternatives, and the same limits.</p><p>Notice the discipline: every \"can\" has a number behind it, and every \"cannot\" names the reason. A reader who disagrees with the paper can point to a specific sentence and argue with it — and that is exactly what a research paper is for. A paper nobody can argue with is a paper nobody can use.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> slope $2.43 ≈ 10% of the mean wage per year; the 12-to-20-year gap is $19.40 an hour, about $38,800 on a 2,000-hour year; R² = 0.96 means a tight fit, not a causal proof; t = 13.57 means statistically significant; the 95% CI ($2.01–$2.84) means economically meaningful across its whole range; three rival stories (ability bias, reverse causation, third factor) stop the paper claiming causation. <strong>Paper arc:</strong> this module's assignment writes the interpretation section.</p><div class=\"callout\"><strong>Common mistake:</strong> Writing \"the regression proves schooling raises wages.\" A regression proves an association. Proof of causation needs a design — a natural experiment, a control group — that this study does not have.</div><div class=\"callout\"><strong>Common mistake:</strong> Reporting significance without size. \"Significant at 1%\" tells the reader nothing about whether the effect matters; \"$2.43 an hour, 95% CI $2.01–$2.84\" tells them everything.</div>"
    }
  ],
  "keyTerms": [
    { "term": "Interpretation", "def": "Translating regression results into plain-word claims about what was found, how big it is, and how far it can be trusted." },
    { "term": "Statistical significance", "def": "A result unlikely to be luck: here, t = 13.57 far exceeds the 5% critical value of 2.31, so H₀ is rejected." },
    { "term": "Economic significance", "def": "Whether an effect is big enough to matter in the real world: $2.43 an hour is about 10% of the mean wage per year — large." },
    { "term": "Correlation vs. causation", "def": "Two variables moving together (correlation) vs. one causing the other (causation). This regression shows the first, not the second." },
    { "term": "Reverse causation", "def": "The dependent variable causing the independent variable — for example, expecting high wages causing someone to get more schooling." },
    { "term": "Third factor", "def": "An unmeasured variable (for example, family background) that drives both schooling and wages, creating a spurious association." },
    { "term": "Spurious relationship", "def": "An association produced by a third factor or by chance, not by a causal link between the two variables." },
    { "term": "Confidence interval", "def": "$2.01–$2.84 an hour per year for the slope: the range the paper is 95% confident contains the true slope." },
    { "term": "Working year (2,000 hours)", "def": "The standard full-time year (40 hours × 50 weeks) used to convert an hourly gap into an annual one: $19.40 × 2,000 = $38,800." },
    { "term": "Effect size", "def": "The magnitude of the estimated effect — $2.43 an hour per year — as distinct from whether it is statistically significant." },
    { "term": "Overclaiming", "def": "Claiming more than the evidence supports — for example, calling an association a proven causal effect." },
    { "term": "Robustness", "def": "Whether a result survives reasonable changes — different controls, different samples, different methods. This paper's result is not tested for robustness, and says so." },
    { "term": "Claim (allowed vs. not allowed)", "def": "The paper may claim a strong, significant association in this sample; it may not claim causation or generalizability to the whole labor market." }
  ],
  "video": {
    "title": "How to calculate p-values",
    "embedUrl": "https://www.youtube.com/embed/JQc3yx0-Q9E",
    "note": "StatQuest with Josh Starmer: what a p-value actually is — the probability of a result this extreme if the null were true — built from coin flips up to distributions. Watch it, then re-read the t = 13.57 result: the p-value is far below 0.01, and now you know what that sentence means.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Paper section: Interpretation (the slope in plain words).</strong> Write the interpretation paragraph: the slope ($2.43), what it means in dollars per year on a 2,000-hour working year for the 12-to-20-year gap, and how it compares with the literature's 5–10% range.</p>",
      "solution": "<p><strong>Answer:</strong> Each additional year of schooling is associated with $2.43 more in hourly pay in this sample — about 10% of the mean wage of $24.10, at the top of the 5–10% range the literature reports (Card, 1999). The predicted gap between a worker with 12 years of schooling ($14.40 an hour) and one with 20 years ($33.80) is $19.40 an hour, or about $38,800 a year on a 2,000-hour working year. The association is strong (R² = 0.96) and statistically significant (t = 13.57, p &lt; 0.01), so it is almost certainly not luck — but significance is not causation, as the next paragraph explains.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Annual gap.</strong> The predicted hourly gap between 12 and 20 years of schooling is $19.40. (a) Compute the annual gap on a 2,000-hour working year. (b) Compute it on a 1,500-hour year (part-time). Show both.</p>",
      "solution": "<p><strong>Solution:</strong> (a) $19.40 × 2,000 = <strong>$38,800</strong> a year. (b) $19.40 × 1,500 = <strong>$29,100</strong> a year. Step 3: Note the assumption — both figures assume the worker works every hour at the predicted wage, with no unemployment or unpaid leave, so they are upper-bound illustrations, not promises.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Significance, two kinds.</strong> (a) What does t = 13.57 establish? (b) What does the 95% CI of $2.01–$2.84 establish that the t-statistic does not? One sentence each.</p>",
      "solution": "<p><strong>Answer:</strong> (a) t = 13.57 establishes statistical significance: a slope this large would almost never occur by chance if the true slope were zero. (b) The confidence interval establishes economic significance with precision: even the bottom end ($2.01) is about 8% of the mean wage, so the effect is meaningful across the whole plausible range — size and precision in one line, which a t-statistic alone cannot give.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — The three rival stories.</strong> Name the three rival explanations for the slope (ability bias, reverse causation, third factor) and give one concrete example of each in the schooling-and-wages case.</p>",
      "solution": "<p><strong>Answer:</strong> Ability bias: more able students stay in school longer and would earn more anyway, so the slope credits schooling with ability's work. Reverse causation: a student expecting a high-paying career (say, engineering) gets the degree because of the expected wage, so expected wages cause schooling rather than the reverse. Third factor: family background — wealthier parents fund more schooling and open doors to better-paying jobs through networks — drives both variables at once.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Paper section: What the paper can and cannot claim.</strong> Write two short lists: three things the paper can claim (each with a number), and three things it cannot claim (each with a reason).</p>",
      "solution": "<p><strong>Answer:</strong> Can claim: (1) a strong association in this sample — slope $2.43 an hour per year; (2) a tight fit — R² = 0.96; (3) statistical significance — t = 13.57, p &lt; 0.01, 95% CI $2.01–$2.84. Cannot claim: (1) causation — 10 workers and no controls cannot rule out ability bias; (2) generalizability — a teaching sample is not the U.S. labor market; (3) a payoff that survives controls — experience and occupation are not in the regression, so the slope would likely change if they were added.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — Spot the overclaim.</strong> A draft sentence says: \"This study proves that staying in school an extra year will raise your pay by $2.43 an hour.\" Rewrite it as an honest sentence.</p>",
      "solution": "<p><strong>Answer:</strong> \"In this 10-worker teaching sample, each additional year of schooling is associated with $2.43 more in hourly pay (95% CI $2.01–$2.84); the wider literature gives reason to believe part of that association is causal, but this study alone cannot separate the causal part from ability bias.\" The rewrite drops \"proves\" and \"will raise,\" adds the sample, the interval, and the causation limit.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The predicted hourly gap between 12 and 20 years of schooling is $19.40. On a 2,000-hour year that is about:",
      "choices": [
        "$19,400",
        "$38,800",
        "$2,430",
        "$24,100"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $19.40 × 2,000 = $38,800. (a) is wrong: that is $19.40 × 1,000. (c) is wrong: that is the slope times 1,000 hours. (d) is wrong: that is the mean wage times 1,000 hours."
    },
    {
      "q": "Statistical significance (t = 13.57) establishes:",
      "choices": [
        "The effect is large",
        "The result is unlikely to be luck",
        "Schooling causes higher wages",
        "The result applies to everyone"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Significance is about chance, not size, causation, or generalizability. (a) is wrong: size is economic significance. (c) is wrong: causation needs a design. (d) is wrong: 10 workers do not generalize."
    },
    {
      "q": "The 95% confidence interval $2.01–$2.84 shows the effect is economically meaningful because:",
      "choices": [
        "It includes zero",
        "Even its bottom end ($2.01) is about 8% of the mean wage",
        "It is wider than the slope",
        "It proves causation"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $2.01 ÷ $24.10 ≈ 8% — meaningful across the whole range. (a) is wrong: the interval excludes zero, which is the significance point. (c) is wrong: width is about precision, not importance. (d) is wrong: no interval proves causation."
    },
    {
      "q": "Which is a rival story the paper cannot rule out?",
      "choices": [
        "Ability bias — able people get more schooling and earn more anyway",
        "The data was typed correctly",
        "The regression line passes through the point of means",
        "R² is 0.96"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Ability is omitted and plausibly drives both variables. (b) is wrong: typing is a data-quality check, not a rival explanation. (c) is wrong: that is a property of OLS, not a rival story. (d) is wrong: R² is a result, not an explanation."
    },
    {
      "q": "Reverse causation in this project would mean:",
      "choices": [
        "Wages cause schooling — expected high pay leads someone to get more schooling",
        "Schooling lowers wages",
        "The regression was run backwards",
        "The sample is too small"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The arrow runs from expected wages to schooling, not schooling to wages. (b) is wrong: that is a negative slope, not reverse causation. (c) is wrong: the regression direction is a modeling choice, not causation. (d) is wrong: sample size is a precision issue."
    },
    {
      "q": "A result can be statistically significant but economically trivial when:",
      "choices": [
        "The sample is tiny",
        "A huge sample makes a $0.02 slope significant",
        "R² is 0.96",
        "The t-statistic is 13.57"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With enough observations, even a negligible effect clears the significance bar. (a) is wrong: tiny samples usually fail to reach significance at all. (c) is wrong: R² is about fit. (d) is wrong: t = 13.57 with a $2.43 slope is both significant and large."
    },
    {
      "q": "The paper's allowed claim is:",
      "choices": [
        "\"Schooling causes a $2.43 raise\"",
        "\"In this sample, schooling is strongly and significantly associated with higher wages\"",
        "\"Every worker gains $2.43 per year of schooling\"",
        "\"The U.S. labor market pays $2.43 per year of schooling\""
      ],
      "answer": 1,
      "explanation": "Correct: (b). It claims association in this sample, with the numbers behind it. (a) is wrong: causation is not established. (c) is wrong: the slope is an average, not a promise to each worker. (d) is wrong: a teaching sample does not generalize to the whole labor market."
    },
    {
      "q": "Why does the paper cite Angrist and Krueger (1991) in the interpretation?",
      "choices": [
        "To pad the references",
        "Because their natural experiment gives reason to believe part of the association is causal, which this study alone cannot show",
        "Because they used the same 10 workers",
        "Because they disagree with the result"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The literature's causal evidence supports the interpretation without overclaiming what this study shows. (a) is wrong: citations must do work. (c) is wrong: they used compulsory-schooling laws and birth dates, not this sample. (d) is wrong: their finding is consistent with a real return to schooling."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Interpreting Results: Quick Reference</h3>\n<p><strong>Core idea:</strong> Translate the table into plain words, separate statistical from economic significance, and name what the regression cannot prove.</p>\n<div class=\"formula\">Slope $2.43 ≈ 10% of mean wage &nbsp;|&nbsp; 12→20 yr gap: $19.40/hr ≈ $38,800 on a 2,000-hr year &nbsp;|&nbsp; 95% CI $2.01–$2.84 &nbsp;|&nbsp; t = 13.57, p &lt; 0.01</div>\n<p><strong>Three rival stories:</strong> ability bias · reverse causation · third factor (family background). <strong>Allowed claim:</strong> a strong, significant association in this sample, consistent with the literature's causal evidence — not a proven causal effect, not generalizable to the whole labor market.</p>\n<p><strong>Paper arc:</strong> This module's assignment writes the interpretation section.</p>\n<p><strong>Self-check:</strong> State the slope in plain words, the annual gap, and the three rival stories — without looking.</p>\n"
};
