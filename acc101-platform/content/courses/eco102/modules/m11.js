// eco102 - Module 11: Income Distribution, Poverty & Fairness
module.exports = {
  "number": 11,
  "slug": "income-distribution-poverty-fairness",
  "title": "Income Distribution, Poverty & Fairness",
  "estTime": "3–4 hours",
  "objectives": [
    "Read a quintile table and describe how income is shared in an example economy.",
    "Draw and read a Lorenz curve and calculate a Gini coefficient from areas.",
    "Explain absolute and relative poverty and how a poverty line works.",
    "Compare progressive, proportional, and regressive taxes with worked numbers.",
    "Explain the equity-efficiency trade-off and the main anti-poverty policies."
  ],
  "sections": [
    {
      "heading": "Who Gets What? Reading a Quintile Table",
      "html": "<p>Economists describe income distribution by splitting households into five equal groups — <strong>quintiles</strong> — from poorest to richest, and asking what share of total income each group receives. Take an example economy (illustrative numbers, not a real country's statistics): the poorest fifth receives 3% of all income, the second fifth 9%, the middle fifth 15%, the fourth fifth 23%, and the richest fifth 50%. The shares add to 3 + 9 + 15 + 23 + 50 = <strong>100%</strong>, as they must.</p>\n<p>Two numbers summarize the table. The richest fifth earns 50 ÷ 3 = about <strong>16.7 times</strong> what the poorest fifth earns. And the top fifth alone receives half of all income, while the bottom two fifths together receive only 3 + 9 = 12%. Whether that is fair is a value judgment — economics can measure the distribution, but it cannot settle the argument about what it should be. What economics can do is explain <em>why</em> incomes differ: skills and education, hours worked, risk-taking, luck, inheritance, and discrimination all play a part.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Income is not the same as wealth. Income is what you earn in a year; wealth is what you own — savings, a house, investments — built up over a lifetime. Wealth is always more unequally distributed than income.</div>"
    },
    {
      "heading": "The Lorenz Curve and the Gini Coefficient",
      "html": "<p>The <strong>Lorenz curve</strong> draws the quintile table as a picture. The horizontal axis is the cumulative share of households (poorest first), the vertical axis is the cumulative share of income. Perfect equality would be a straight 45-degree line: the poorest 20% would earn 20% of income, the poorest 40% would earn 40%, and so on. The real Lorenz curve bows below that line — the further it bows, the more unequal the distribution.</p>\n<p>With the example shares above, the Lorenz curve passes through (20%, 3%), (40%, 12%), (60%, 27%), (80%, 50%), and (100%, 100%). The <strong>Gini coefficient</strong> turns the bow into one number: it is the area between the equality line and the Lorenz curve (call it A) divided by the total area under the equality line (A + B). The total area under the 45-degree line is ½ × 1 × 1 = 0.5. In a worked example, suppose area A is 0.15 and area B is 0.35: the Gini is 0.15 ÷ (0.15 + 0.35) = 0.15 ÷ 0.5 = <strong>0.30</strong>. A Gini of 0 means perfect equality; a Gini of 1 means one household has everything. Most real economies sit between 0.25 and 0.65.</p>\n<div class=\"formula\">Gini = A ÷ (A + B) &nbsp;|&nbsp; A = area between equality line and Lorenz curve &nbsp;|&nbsp; A + B = 0.5</div>"
    },
    {
      "heading": "Poverty: Absolute, Relative, and the Poverty Line",
      "html": "<p><strong>Absolute poverty</strong> means not having enough to meet basic needs — food, shelter, clean water. <strong>Relative poverty</strong> means having much less than the typical person in your own society. A family can be above absolute poverty and still be relatively poor, and that relative gap matters for health, schooling, and opportunity.</p>\n<p>Governments draw a <strong>poverty line</strong> — an income level below which a household counts as poor. Take an example line of $30,000 a year for a family of four (an example number for this course, not any country's official line). A household earning $24,000 is below the line by $30,000 − $24,000 = <strong>$6,000</strong> — that gap is the <strong>poverty gap</strong>. The <strong>poverty rate</strong> is the share of households below the line. The line is a tool, not a truth: move it and the poverty rate moves with it, which is why honest reporting always states the line being used.</p>"
    },
    {
      "heading": "Taxes, Transfers, and the Equity-Efficiency Trade-Off",
      "html": "<p>Governments reshape the distribution with taxes and transfers. A <strong>progressive tax</strong> takes a bigger share from higher incomes: in an example, a household earning $20,000 pays 10%, or $2,000, while a household earning $100,000 pays 25%, or $25,000. A <strong>proportional tax</strong> takes the same share from everyone; a <strong>regressive tax</strong> takes a bigger share from lower incomes (a sales tax is often regressive, because poorer households spend a bigger share of their income). Transfers — food assistance, housing support, cash payments — add income at the bottom.</p>\n<p>But redistribution has a cost, and economists call it the <strong>equity-efficiency trade-off</strong>. High taxes can discourage work, saving, and investment; generous benefits can discourage taking a low-paid job. The art of policy is finding the point where the fairness gained is worth the efficiency lost. That is also why economists argue about <em>how</em> to help — cash transfers, wage subsidies like an earned income tax credit, job training, and education all fight poverty differently, and the evidence on each is worth reading before choosing.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Example quintile shares: 3%, 9%, 15%, 23%, 50% (sum 100%). Richest fifth earns about 16.7 times the poorest fifth; the bottom two fifths together earn 12%.</li>\n<li>Lorenz curve points: (20%, 3%), (40%, 12%), (60%, 27%), (80%, 50%), (100%, 100%). Gini example: A = 0.15, B = 0.35 → Gini = 0.15 ÷ 0.5 = 0.30.</li>\n<li>Poverty: absolute (basic needs) vs. relative (compared with the typical person). Example line $30,000; household at $24,000 has a poverty gap of $6,000.</li>\n<li>Taxes: progressive ($20,000 at 10% = $2,000; $100,000 at 25% = $25,000), proportional (same share), regressive (bigger share from the poor).</li>\n<li>Equity-efficiency trade-off: redistribution buys fairness at some cost in incentives. Income mobility — how much children's incomes depend on their parents' — matters as much as any single year's snapshot.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a Gini of 0.30 means \"30% unequal.\" It does not. The Gini is a ratio of areas, not a percentage of anything. Compare Ginis with each other — 0.30 is more equal than 0.45 — and do not read more into the number than that.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Confusing income with wealth, or a single year's income with a lifetime's. A medical student earning little today may be rich over a lifetime; a retired person with low income may own a paid-off house. Snapshots mislead.</div>\n<p><strong>Ready-to-Work link:</strong> Every tax return you file and every benefits decision you make sits on this module. Knowing whether a tax is progressive or regressive tells you who really pays it — and the quintile table tells you who has what to pay with.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Income distribution", "def": "How total income is shared among households in an economy." },
    { "term": "Quintile", "def": "One-fifth of households, ranked by income from poorest to richest." },
    { "term": "Lorenz curve", "def": "A curve showing the cumulative share of income earned by each cumulative share of households." },
    { "term": "Gini coefficient", "def": "Area A divided by (A + B), where A is the area between the equality line and the Lorenz curve; 0 is perfect equality, 1 is total inequality." },
    { "term": "Income", "def": "What a household earns in a period, usually a year." },
    { "term": "Wealth", "def": "What a household owns: savings, property, and investments minus debts." },
    { "term": "Absolute poverty", "def": "Not having enough income to meet basic needs." },
    { "term": "Relative poverty", "def": "Having much less income than the typical person in the same society." },
    { "term": "Poverty line", "def": "An income level below which a household counts as poor." },
    { "term": "Poverty gap", "def": "How far below the poverty line a household's income falls." },
    { "term": "Poverty rate", "def": "The share of households with income below the poverty line." },
    { "term": "Progressive tax", "def": "A tax that takes a larger share of income from higher earners." },
    { "term": "Proportional tax", "def": "A tax that takes the same share of income from everyone." },
    { "term": "Regressive tax", "def": "A tax that takes a larger share of income from lower earners." },
    { "term": "Transfer payment", "def": "Government money given to households, such as food assistance or cash support." },
    { "term": "Equity-efficiency trade-off", "def": "Redistribution buys fairness but can cost efficiency through weaker incentives." },
    { "term": "Income mobility", "def": "How much a person's income depends on their parents' income; higher mobility means more movement between income groups." },
    { "term": "Human capital", "def": "Education, skills, and health that raise a person's earning power." }
  ],
  "video": {
    "title": "Lorenz Curve and Gini Coefficient - Measures of Income Inequality",
    "embedUrl": "https://www.youtube.com/embed/ns9f2FOc26M",
    "note": "EconplusDal builds a Lorenz curve and a Gini coefficient step by step. Watch it, then redo the quintile shares and the 0.30 Gini example in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Example quintile shares are 3%, 9%, 15%, 23%, 50%. (a) Check they add to 100%. (b) How many times more income does the richest fifth receive than the poorest fifth? (c) What share do the bottom two fifths receive together?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 3 + 9 + 15 + 23 + 50 = <strong>100%</strong>. Step 2: 50 ÷ 3 = <strong>16.7 times</strong> (about 17 times). Step 3: Bottom two fifths: 3 + 9 = <strong>12%</strong> of all income.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Using the shares in Problem 1, list the five points of the Lorenz curve (cumulative households, cumulative income).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Poorest 20% earn 3% → <strong>(20%, 3%)</strong>. Step 2: Poorest 40% earn 3 + 9 = 12% → <strong>(40%, 12%)</strong>. Step 3: Poorest 60% earn 12 + 15 = 27% → <strong>(60%, 27%)</strong>. Step 4: Poorest 80% earn 27 + 23 = 50% → <strong>(80%, 50%)</strong>. Step 5: Everyone earns 100% → <strong>(100%, 100%)</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Area A (between the equality line and the Lorenz curve) is 0.15 and area B (under the Lorenz curve) is 0.35. Calculate the Gini coefficient and explain what it means.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: A + B = 0.15 + 0.35 = 0.5 — the area under the 45-degree line. Step 2: Gini = A ÷ (A + B) = 0.15 ÷ 0.5 = <strong>0.30</strong>. Step 3: Meaning: a moderate level of inequality — 0 would be perfect equality and 1 would be one household holding everything. Step 4: A larger Gini means a Lorenz curve bowed further from the equality line.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The example poverty line is $30,000 for a family of four. A household earns $24,000. (a) Is it below the poverty line? (b) What is its poverty gap? (c) If its income rises to $31,000, is it still counted as poor?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Yes — $24,000 is below $30,000. Step 2: (b) Poverty gap = $30,000 − $24,000 = <strong>$6,000</strong>. Step 3: (c) No — $31,000 is above the line, so it is no longer counted as poor, even though its life has barely changed. Step 4: That is why the line is a tool, not a truth.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A household earning $20,000 pays 10% tax; a household earning $100,000 pays 25% tax. Calculate each household's tax bill and after-tax income. Is this tax progressive, proportional, or regressive?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: $20,000 household: tax = 0.10 × $20,000 = <strong>$2,000</strong>; after-tax income = $20,000 − $2,000 = <strong>$18,000</strong>. Step 2: $100,000 household: tax = 0.25 × $100,000 = <strong>$25,000</strong>; after-tax income = $100,000 − $25,000 = <strong>$75,000</strong>. Step 3: The richer household pays a bigger share (25% vs. 10%), so the tax is <strong>progressive</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A government proposes a $5,000 cash transfer to every household below the poverty line, paid for by a tax on high earners. Explain one equity argument for it and one efficiency argument against it.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1 (equity for): It directly closes poverty gaps — a household $6,000 below the line gets $5,000 of it back — and gives poor children a better start. Step 2 (efficiency against): The tax may discourage work, saving, or investment by high earners, and the transfer may discourage taking a low-paid job if earning more means losing the transfer. Step 3: The decision is the equity-efficiency trade-off: is the fairness gained worth the efficiency lost?</p>"
    }
  ],
  "quiz": [
    {
      "q": "Quintile shares of 3%, 9%, 15%, 23%, 50% mean the richest fifth earns about how many times the poorest fifth?",
      "choices": ["5 times", "10 times", "16.7 times", "50 times"],
      "answer": 2,
      "explanation": "Correct: (c). 50 ÷ 3 = 16.7. (a) would need a top share of 15%. (b) would need a top share of 30%. (d) is the top share itself, not the ratio."
    },
    {
      "q": "The Lorenz curve plots:",
      "choices": ["Income against time", "Cumulative share of income against cumulative share of households", "Taxes against income", "Prices against quantities"],
      "answer": 1,
      "explanation": "Correct: (b). Cumulative households on one axis, cumulative income on the other. (a) is a time series. (c) is a tax schedule. (d) is a demand or supply curve."
    },
    {
      "q": "If area A is 0.15 and area B is 0.35, the Gini coefficient is:",
      "choices": ["0.15", "0.30", "0.43", "0.50"],
      "answer": 1,
      "explanation": "Correct: (b). 0.15 ÷ (0.15 + 0.35) = 0.15 ÷ 0.5 = 0.30. (a) is just area A. (c) is A ÷ B. (d) is A + B."
    },
    {
      "q": "A Gini coefficient of 1 means:",
      "choices": ["Perfect equality", "One household has all the income", "No one has any income", "The Lorenz curve is a straight line"],
      "answer": 1,
      "explanation": "Correct: (b). Maximum inequality — one household holds everything. (a) is a Gini of 0. (c) is not a distribution at all. (d) is the equality line, Gini 0."
    },
    {
      "q": "With a poverty line of $30,000, a household earning $24,000 has a poverty gap of:",
      "choices": ["$6,000", "$24,000", "$30,000", "$54,000"],
      "answer": 0,
      "explanation": "Correct: (a). $30,000 − $24,000 = $6,000. (b) is the household's income. (c) is the poverty line. (d) adds the two numbers."
    },
    {
      "q": "A tax where a $20,000 earner pays 10% and a $100,000 earner pays 25% is:",
      "choices": ["Regressive", "Proportional", "Progressive", "A lump-sum tax"],
      "answer": 2,
      "explanation": "Correct: (c). The share rises with income. (a) would need the share to fall with income. (b) would need the same share for both. (d) would be the same dollar amount for everyone."
    },
    {
      "q": "Wealth differs from income because wealth is:",
      "choices": ["What you earn in a year", "What you own, built up over a lifetime", "The same as income", "Only cash in the bank"],
      "answer": 1,
      "explanation": "Correct: (b). Wealth is a stock — savings, property, investments minus debts. (a) is income. (c) confuses a flow with a stock. (d) is only one part of wealth."
    },
    {
      "q": "The equity-efficiency trade-off says that redistribution:",
      "choices": ["Is always free", "Buys fairness but can cost efficiency through weaker incentives", "Never helps anyone", "Only affects the rich"],
      "answer": 1,
      "explanation": "Correct: (b). Fairness gains can come with weaker work and investment incentives. (a) ignores the incentive cost. (c) ignores the fairness gain. (d) Taxes and transfers affect both ends of the distribution."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Income Distribution, Poverty & Fairness: Quick Reference</h3>\n<p><strong>Core idea:</strong> Economics measures who gets what — and how far policy can change it before incentives bite back.</p>\n<p><strong>Worked anchors:</strong> Quintile shares 3%, 9%, 15%, 23%, 50% (sum 100%). Top/bottom ratio 50 ÷ 3 ≈ 16.7. Bottom two fifths together: 12%. Lorenz points: (20%, 3%), (40%, 12%), (60%, 27%), (80%, 50%), (100%, 100%).</p>\n<div class=\"formula\">Gini = A ÷ (A + B) &nbsp;|&nbsp; Example: 0.15 ÷ 0.5 = 0.30 &nbsp;|&nbsp; Poverty gap = poverty line − income</div>\n<p><strong>Poverty:</strong> Absolute = basic needs; relative = compared with the typical person. Example line $30,000; $24,000 income → gap $6,000.</p>\n<p><strong>Taxes:</strong> Progressive ($20,000 at 10% = $2,000; $100,000 at 25% = $25,000) · proportional (same share) · regressive (bigger share from the poor).</p>\n<p><strong>Watch out:</strong> The Gini is a ratio of areas, not a percentage. Income is a flow; wealth is a stock. A one-year snapshot can mislead.</p>\n<p><strong>Self-check:</strong> Shares are 5%, 10%, 15%, 25%, 45%. What is the top/bottom ratio, and what is the cumulative income of the poorest 60%? (Check: 45 ÷ 5 = 9 times; 5 + 10 + 15 = 30%.)</p>\n"
};
