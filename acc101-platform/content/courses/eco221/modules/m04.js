// eco221 - Module 4: Dummy Variables & Categorical Data
module.exports = {
  "number": 4,
  "slug": "dummy-variables-and-categorical-data",
  "title": "Dummy Variables & Categorical Data",
  "estTime": "3–4 hours",
  "objectives": [
    "Define a dummy variable and explain why categories need 0/1 coding.",
    "Interpret a dummy coefficient as a difference in intercepts.",
    "Avoid the dummy variable trap by leaving out one base category.",
    "Use interaction terms to let slopes differ between groups.",
    "Interpret dummy coefficients in log models as approximate percentage differences."
  ],
  "sections": [
    {
      "heading": "Categories Are Not Numbers",
      "html": "<p>Many things economists study are categories, not numbers: male or female, college degree or not, North or South, before or after a policy change. A regression needs numbers, so we code each category as a <strong>dummy variable</strong> — a variable that equals 1 if the observation belongs to the category and 0 otherwise. A dummy for \"has a college degree\" is 1 for graduates and 0 for everyone else.</p>\n<p>Never code categories as 1, 2, 3 (\"1 = North, 2 = South, 3 = East\") and put that number in a regression. The regression would treat \"East\" as three times \"North,\" which is meaningless. Dummies give every category its own on/off switch, so the regression estimates a separate effect for each group instead of imposing a false order.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A dummy variable turns a category into a switch: 1 means \"in the group,\" 0 means \"not.\" The coefficient on the switch is the average difference between the group and the comparison group, holding everything else fixed.</div>"
    },
    {
      "heading": "A Dummy Shifts the Intercept",
      "html": "<p>Add a dummy D to the model: Y = β<sub>0</sub> + β<sub>1</sub>X + β<sub>2</sub>D + u. When D = 0, the line is Y = β<sub>0</sub> + β<sub>1</sub>X. When D = 1, the line is Y = (β<sub>0</sub> + β<sub>2</sub>) + β<sub>1</sub>X. The slope β<sub>1</sub> is the same for both groups; the intercept shifts by β<sub>2</sub>. The dummy coefficient is a difference in intercepts — the gap between the two parallel lines.</p>\n<p><strong>Worked example — salary, experience, and a degree (teaching numbers).</strong> Suppose the fitted model is salary = 40 + 5 × experience + 8 × degree, where salary is in $1,000s, experience is in years, and degree is 1 for college graduates. A worker with 5 years of experience and no degree is predicted to earn 40 + 5 × 5 + 8 × 0 = <strong>$65,000</strong>. The same worker with a degree is predicted to earn 40 + 25 + 8 = <strong>$73,000</strong>. The degree is associated with $8,000 more salary, holding experience fixed — that is the meaning of the dummy coefficient 8.</p>\n<div class=\"formula\">Y = β<sub>0</sub> + β<sub>1</sub>X + β<sub>2</sub>D + u &nbsp;|&nbsp; D = 0: intercept β<sub>0</sub> &nbsp;|&nbsp; D = 1: intercept β<sub>0</sub> + β<sub>2</sub></div>"
    },
    {
      "heading": "The Dummy Variable Trap and the Base Group",
      "html": "<p>With two categories, use one dummy, not two. If you include both a \"male\" dummy and a \"female\" dummy plus an intercept, the two dummies always add to 1 — exactly the same as the intercept column — and OLS cannot separate them. This is the <strong>dummy variable trap</strong> (perfect multicollinearity, Module 5). The fix is simple: leave one category out. The omitted category is the <strong>base group</strong> (or reference group), and every dummy coefficient is measured against it.</p>\n<p>With four regions — North, South, East, West — use three dummies and leave North out as the base. Then the South coefficient is \"South minus North,\" the East coefficient is \"East minus North,\" and so on. Changing the base group changes the coefficients but not the predictions: the model is the same, only the comparison point moves. Always say which group is the base when you report a dummy coefficient, or the number is meaningless.</p>"
    },
    {
      "heading": "Interactions: Letting Slopes Differ",
      "html": "<p>Sometimes groups differ not just in level but in slope: an extra year of experience may pay more for graduates than for non-graduates. An <strong>interaction term</strong> — X multiplied by D — lets the slope differ: Y = β<sub>0</sub> + β<sub>1</sub>X + β<sub>2</sub>D + β<sub>3</sub>(X × D) + u. For D = 0 the slope is β<sub>1</sub>; for D = 1 it is β<sub>1</sub> + β<sub>3</sub>.</p>\n<p><strong>Worked example.</strong> Suppose Ŷ = 10 + 2X + 5D + 1.5(X × D), where X is years of experience and D is the degree dummy, Y in $1,000s. At X = 10 with no degree: 10 + 20 + 0 + 0 = <strong>30</strong> ($30,000). At X = 10 with a degree: 10 + 20 + 5 + 15 = <strong>50</strong> ($50,000). The degree is worth $20,000 at 10 years of experience — $5,000 of intercept shift plus 10 × $1,500 of steeper slope. Interactions let the data say \"the return to experience is bigger for graduates,\" instead of forcing one slope on everyone.</p>\n<p>Dummies also work in <strong>log models</strong>. If log(wage) = … + 0.08 × degree, a degree is associated with roughly 8% higher wages (the exact figure is e<sup>0.08</sup> − 1 = 8.3%). And a dummy can mark time: a \"post-policy\" dummy that is 0 before a law changes and 1 after it estimates the policy's average effect — the starting point for the program-evaluation methods in Module 9.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A dummy is a 0/1 variable for a category; its coefficient is the group's difference from the base group, holding other variables fixed.</li>\n<li>A dummy shifts the intercept; an interaction (X × D) lets the slope differ too.</li>\n<li>With k categories use k − 1 dummies plus an intercept — never k dummies plus an intercept (the trap).</li>\n<li>Salary example: 40 + 5 × experience + 8 × degree → $65,000 without a degree, $73,000 with one, at 5 years of experience.</li>\n<li>In a log model, a dummy coefficient of 0.08 means roughly 8% higher Y (exactly 8.3%).</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Including a dummy for every category plus an intercept. The dummies sum to 1, OLS breaks down, and the software drops one for you — often without telling you which. Always choose the base group yourself.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Reporting a dummy coefficient without naming the base group. \"The South coefficient is 4\" means nothing until you add \"compared with the North.\"</div>\n<p><strong>Ready-to-Work link:</strong> Every real dataset has categories — regions, quarters, customer segments, treatment groups. If you can code them as dummies, pick a base, and read the coefficients as differences, you can use them in any regression.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Dummy variable", "def": "A variable equal to 1 for observations in a category and 0 otherwise." },
    { "term": "Base group (reference group)", "def": "The omitted category in a dummy-variable regression; all dummy coefficients are differences from it." },
    { "term": "Dummy variable trap", "def": "Perfect multicollinearity from including a dummy for every category plus an intercept." },
    { "term": "Intercept shift", "def": "The change in a regression line's intercept for the group coded 1, equal to the dummy coefficient." },
    { "term": "Interaction term", "def": "A product of two variables, X × D, that lets the effect of one depend on the other." },
    { "term": "Categorical variable", "def": "A variable whose values are categories (region, gender, degree) rather than numbers." },
    { "term": "Holding fixed (ceteris paribus)", "def": "Comparing observations that are the same on all other variables in the model." },
    { "term": "Log-level model", "def": "A model with log(Y) as the dependent variable, where coefficients are approximate percentage changes in Y." },
    { "term": "Seasonal dummy", "def": "A dummy marking a season or quarter, used to capture regular seasonal patterns." },
    { "term": "Policy dummy", "def": "A dummy equal to 1 after a policy change, used to estimate the policy's average effect." },
    { "term": "Multiple categories", "def": "A variable with more than two groups, coded with one dummy per group except the base." },
    { "term": "Slope difference", "def": "A difference in the effect of X between groups, captured by an interaction coefficient." }
  ],
  "video": {
    "title": "Chapter 7: Multiple Regression Analysis with Qualitative Information | Introductory Econometrics",
    "embedUrl": "https://www.youtube.com/embed/bmRu97VZvh4",
    "note": "A full lecture on Wooldridge Chapter 7: single dummies, the trap, the base group, multiple categories, interactions, and the linear probability model — every idea in this module, worked from textbook examples. Long, so watch the sections on dummies and interactions first.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A regression of wages on years of education and a female dummy gives ŵage = 15 + 2 × educ − 3 × female (wages in $/hour). (a) Predict the wage of a man with 12 years of education. (b) Predict the wage of a woman with 12 years of education. (c) What does −3 mean?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Man (female = 0): 15 + 2 × 12 = 15 + 24 = <strong>$39/hour</strong>. Step 2: Woman (female = 1): 15 + 24 − 3 = <strong>$36/hour</strong>. Step 3: The −3 means women in this sample earn $3/hour less than men with the same years of education, on average. Step 4: It does not by itself prove discrimination — omitted factors (occupation, hours, experience) may explain part of the gap; that is Module 9 territory.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Using salary = 40 + 5 × experience + 8 × degree ($1,000s), predict the salary of (a) a worker with 10 years of experience and no degree, (b) a worker with 10 years of experience and a degree.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) 40 + 5 × 10 + 8 × 0 = 40 + 50 = <strong>$90,000</strong>. Step 2: (b) 40 + 50 + 8 = <strong>$98,000</strong>. Step 3: The $8,000 gap is the degree coefficient, the same at every experience level in this model — because there is no interaction term. Step 4: If the return to a degree grew with experience, you would need an interaction (see Problem 4).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A dataset has four regions: North, South, East, West. How many dummies should you include with an intercept, and why? Write the model with North as the base.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Include <strong>three</strong> dummies — one per category except the base. Step 2: Four dummies plus an intercept would trigger the dummy variable trap: the four dummies sum to 1, exactly the intercept column, so OLS cannot separate them. Step 3: The model is Y = β<sub>0</sub> + β<sub>1</sub>X + β<sub>2</sub>South + β<sub>3</sub>East + β<sub>4</sub>West + u, with North as the base. Step 4: β<sub>2</sub> is South minus North, β<sub>3</sub> is East minus North, β<sub>4</sub> is West minus North, all holding X fixed.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Ŷ = 10 + 2X + 5D + 1.5(X × D), Y in $1,000s, X = experience in years, D = degree dummy. (a) What is the slope on experience for non-graduates? (b) For graduates? (c) Predict Y for a graduate with 10 years of experience.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) For D = 0 the slope is β<sub>1</sub> = <strong>2</strong> ($2,000 per year). Step 2: (b) For D = 1 the slope is β<sub>1</sub> + β<sub>3</sub> = 2 + 1.5 = <strong>3.5</strong> ($3,500 per year). Step 3: (c) Ŷ = 10 + 2 × 10 + 5 × 1 + 1.5 × 10 × 1 = 10 + 20 + 5 + 15 = <strong>50</strong>, i.e. $50,000. Step 4: The degree is worth $5,000 at zero experience and $20,000 at 10 years — the interaction makes the gap grow.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A log-wage regression gives log(wage) = 2.5 + 0.08 × educ + 0.12 × degree. Interpret both coefficients as percentages (use the exact conversion for the degree coefficient).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The education coefficient 0.08 means each extra year of schooling is associated with roughly <strong>8%</strong> higher wages. Step 2: The degree coefficient 0.12 means graduates earn about 12% more — exactly e<sup>0.12</sup> − 1 = 1.1275 − 1 = <strong>12.7%</strong> more than non-graduates with the same years of schooling. Step 3: The approximation (12%) is close for small coefficients but the exact figure (12.7%) is better when the coefficient is this large. Step 4: Both are associations, holding the other variable fixed — not proof of causation.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A researcher codes region as 1 = North, 2 = South, 3 = East, 4 = West and regresses sales on that single variable. Explain two things that go wrong.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The coding imposes a false order and false spacing: it says East is \"three times\" North and that the gap from North to South equals the gap from South to East — none of which is true for categories. Step 2: The single slope forces the effect to grow evenly across the arbitrary numbers, so the estimate is meaningless and the predictions are wrong. Step 3: The fix is three dummies (one per region except the base), which let each region have its own effect with no imposed order.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A dummy variable is:",
      "choices": [
        "A variable that is always zero",
        "A 0/1 variable marking membership in a category",
        "The error term in a regression",
        "A variable measured in percentages"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1 means in the group, 0 means not. (a) is false — dummies are 1 for group members. (c) is u, the error term. (d) describes a rate, not a dummy."
    },
    {
      "q": "In salary = 40 + 5 × experience + 8 × degree ($1,000s), a worker with 5 years of experience and a degree is predicted to earn:",
      "choices": [
        "$65,000",
        "$73,000",
        "$90,000",
        "$98,000"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 40 + 25 + 8 = 73, in $1,000s. (a) is the prediction without the degree (40 + 25). (c) is 10 years without a degree. (d) is 10 years with a degree."
    },
    {
      "q": "The dummy variable trap is:",
      "choices": [
        "Using a dummy for a variable with only two categories",
        "Including a dummy for every category plus an intercept, causing perfect multicollinearity",
        "Forgetting to include an intercept",
        "Using a dummy in a log model"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The dummies sum to 1, duplicating the intercept, so OLS cannot separate them. (a) is normal practice — two categories need one dummy. (c) is a different issue. (d) is fine — dummies work in log models."
    },
    {
      "q": "With four regions and an intercept, how many region dummies should you include?",
      "choices": [
        "1",
        "3",
        "4",
        "5"
      ],
      "answer": 1,
      "explanation": "Correct: (b). k − 1 = 3 dummies, leaving one region as the base. (a) would lump three regions together. (c) triggers the dummy variable trap. (d) is more dummies than categories."
    },
    {
      "q": "In Y = β0 + β1X + β2D + u, the coefficient β2 measures:",
      "choices": [
        "The slope of Y on X for the D = 1 group",
        "The difference in intercepts between the D = 1 group and the D = 0 group",
        "The average of Y",
        "The effect of X on D"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The dummy shifts the intercept by β2. (a) is β1 + β3 in an interaction model — this model has no interaction, so both groups share slope β1. (c) is ȳ. (d) reverses the roles of X and D."
    },
    {
      "q": "An interaction term X × D lets:",
      "choices": [
        "The intercept differ between groups only",
        "The slope on X differ between groups",
        "X and D be perfectly correlated",
        "The R² reach 1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). With the interaction, the slope is β1 for D = 0 and β1 + β3 for D = 1. (a) is what a plain dummy does. (c) is multicollinearity, a problem, not a purpose. (d) is false — interactions do not guarantee a perfect fit."
    },
    {
      "q": "If log(wage) = … + 0.08 × degree, a degree is associated with wages that are about:",
      "choices": [
        "$0.08 higher",
        "0.08% higher",
        "8% higher (exactly 8.3%)",
        "80% higher"
      ],
      "answer": 2,
      "explanation": "Correct: (c). In a log model the coefficient is approximately a proportion: 0.08 ≈ 8%, exactly e^0.08 − 1 = 8.3%. (a) confuses log points with dollars. (b) is off by a factor of 100. (d) is ten times too big."
    },
    {
      "q": "Why must you always name the base group when reporting a dummy coefficient?",
      "choices": [
        "Because the software requires it",
        "Because the coefficient is a difference from the base group, so without it the number has no comparison point",
        "Because the base group always has the largest coefficient",
        "Because dummy coefficients are always negative"
      ],
      "answer": 1,
      "explanation": "Correct: (b). \"South is 4 higher\" is meaningless until you know 4 higher than what. (a) is not the reason — it is about interpretation. (c) is false — the base group has no coefficient at all. (d) is false — dummy coefficients can be positive or negative."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Dummy Variables: Quick Reference</h3>\n<p><strong>Core idea:</strong> A dummy is a 0/1 switch for a category; its coefficient is the group's difference from the base group, holding other variables fixed.</p>\n<div class=\"formula\">Y = β<sub>0</sub> + β<sub>1</sub>X + β<sub>2</sub>D + u &nbsp;|&nbsp; Interaction: Y = β<sub>0</sub> + β<sub>1</sub>X + β<sub>2</sub>D + β<sub>3</sub>(X × D) + u</div>\n<p><strong>Rules:</strong> k categories → k − 1 dummies + intercept (never k dummies + intercept — the trap). A dummy shifts the intercept; an interaction shifts the slope too.</p>\n<p><strong>Worked anchor:</strong> salary = 40 + 5 × experience + 8 × degree → 5 years' experience: $65,000 without a degree, $73,000 with one.</p>\n<p><strong>Log models:</strong> a dummy coefficient of 0.08 means about 8% higher Y (exactly e<sup>0.08</sup> − 1 = 8.3%).</p>\n<p><strong>Watch out:</strong> never code categories as 1, 2, 3; always name the base group; a dummy coefficient is a difference, not an absolute level.</p>\n<p><strong>Self-check:</strong> Given a four-region dataset, write the model with North as the base and explain what each coefficient means.</p>\n"
};
