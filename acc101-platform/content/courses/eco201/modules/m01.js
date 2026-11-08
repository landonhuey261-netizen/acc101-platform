// eco201 - Module 1: Consumer Theory: Preferences, Budgets & Choice
module.exports = {
  "number": 1,
  "slug": "consumer-theory-preferences-budgets-choice",
  "title": "Consumer Theory: Preferences, Budgets & Choice",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe preferences with completeness, transitivity, and more-is-better, and draw an indifference curve.",
    "Define marginal rate of substitution (MRS) and explain why it usually diminishes.",
    "Write a budget constraint from income and prices and find its intercepts and slope.",
    "Find the utility-maximizing bundle with the tangency condition MRS = price ratio.",
    "Use a worked example to recompute the optimal bundle when income or a price changes."
  ],
  "sections": [
    {
      "heading": "Preferences: How a Consumer Ranks Bundles",
      "html": "<p>A <strong>bundle</strong> is a combination of goods, such as 15 coffees and 10 sandwiches in a month. Consumer theory starts by asking how a consumer ranks bundles. Economists assume three things about those rankings. <strong>Completeness</strong>: the consumer can compare any two bundles and say which is better, or that they are equal. <strong>Transitivity</strong>: if bundle A is better than B and B is better than C, then A is better than C. <strong>More is better</strong>: holding everything else fixed, more of a good is preferred to less.</p>\n<p>An <strong>indifference curve</strong> joins all the bundles a consumer finds equally good. Every bundle on one curve gives the same satisfaction; a curve further from the origin gives more satisfaction. Indifference curves slope downward (giving up one good to get more of another keeps satisfaction the same), they never cross (crossing would contradict transitivity), and they are usually bowed toward the origin — convex — because of diminishing trade-offs, which the next section explains.</p>\n<div class=\"callout\"><strong>Key idea:</strong> An indifference curve is a map of tastes. It does not say what the consumer can afford — that is the budget line's job. Choice happens where the two meet.</div>"
    },
    {
      "heading": "Utility and the Marginal Rate of Substitution",
      "html": "<p><strong>Utility</strong> is a number that represents how much satisfaction a bundle gives. It is ordinal, not cardinal: it only needs to rank bundles, so saying a bundle gives 12 utils instead of 10 is meaningless on its own — what matters is that 12 beats 10. A <strong>utility function</strong> turns bundles into utility numbers. For two goods, call them x and y, a common example is U = x<sup>0.5</sup> y<sup>0.5</sup>, the square root of x times y.</p>\n<p><strong>Marginal utility</strong> is the extra utility from one more unit of a good. For U = x<sup>0.5</sup> y<sup>0.5</sup>, the marginal utility of x is MU<sub>x</sub> = 0.5 × x<sup>−0.5</sup> × y<sup>0.5</sup>, and of y is MU<sub>y</sub> = 0.5 × x<sup>0.5</sup> × y<sup>−0.5</sup>. The <strong>marginal rate of substitution</strong> (MRS) is how much y the consumer will give up for one more x while staying equally happy: MRS = MU<sub>x</sub> ÷ MU<sub>y</sub> = y ÷ x for this utility function. At the bundle (15, 10), MRS = 10 ÷ 15 = 2/3, so the consumer trades 2 units of y for 3 units of x. As x grows and y shrinks along a curve, MRS falls — the consumer values the scarcer good more. That is <strong>diminishing MRS</strong>, and it is why indifference curves bow inward.</p>\n<div class=\"formula\">MRS = MU<sub>x</sub> ÷ MU<sub>y</sub> &nbsp;|&nbsp; For U = x<sup>0.5</sup> y<sup>0.5</sup>: MRS = y ÷ x</div>"
    },
    {
      "heading": "The Budget Constraint: What the Consumer Can Afford",
      "html": "<p>Suppose income is I = $120 a month, the price of x is P<sub>x</sub> = $4, and the price of y is P<sub>y</sub> = $6. The <strong>budget constraint</strong> is P<sub>x</sub> × x + P<sub>y</sub> × y = I, or 4x + 6y = 120. Spending everything on x buys 120 ÷ 4 = 30 units; spending everything on y buys 120 ÷ 6 = 20 units. Those are the intercepts. The slope of the budget line is −P<sub>x</sub> ÷ P<sub>y</sub> = −4 ÷ 6 = −2/3: to buy one more x, the consumer must give up 2/3 of a unit of y. That slope is the market's exchange rate between the goods.</p>\n<p>When income rises, the budget line shifts outward in parallel — the consumer can afford more of both. When the price of x rises, the line pivots inward around the y-intercept: the most y the consumer can buy is unchanged, but the most x falls. Everything inside the line is affordable; everything on it spends the whole income.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The budget line's slope is a price ratio, −P<sub>x</sub>/P<sub>y</sub>. It is what the market charges you to trade one good for another. The indifference curve's slope is the MRS, what you are willing to trade. Choice is where the two agree.</div>"
    },
    {
      "heading": "The Optimal Bundle: Where MRS Meets the Price Ratio",
      "html": "<p>The consumer's best bundle is the affordable bundle on the highest indifference curve. That happens at the <strong>tangency point</strong>, where the indifference curve just touches the budget line: MRS = P<sub>x</sub> ÷ P<sub>y</sub>. In words, the rate at which the consumer is willing to trade equals the rate at which the market lets them trade. If MRS were higher than the price ratio, the consumer would trade y for x and be better off; if it were lower, they would trade the other way.</p>\n<p>Work it with our numbers. Utility is U = x<sup>0.5</sup> y<sup>0.5</sup>, income $120, P<sub>x</sub> = $4, P<sub>y</sub> = $6. Step 1: tangency gives y ÷ x = 4 ÷ 6 = 2/3, so y = (2/3)x. Step 2: substitute into the budget, 4x + 6y = 120, giving 4x + 6 × (2x/3) = 4x + 4x = 8x = 120, so x = 15. Step 3: y = (2/3) × 15 = 10. Step 4: check the budget, 4 × 15 + 6 × 10 = 60 + 60 = $120, and check MRS, 10 ÷ 15 = 2/3, which equals the price ratio 4 ÷ 6 = 2/3. The optimal bundle is (15, 10), with utility √(15 × 10) = √150 ≈ 12.25.</p>\n<div class=\"formula\">Optimal bundle: MRS = P<sub>x</sub> ÷ P<sub>y</sub> &nbsp;and&nbsp; P<sub>x</sub>x + P<sub>y</sub>y = I</div>\n<p>Two special cases break the tangency rule. With <strong>perfect substitutes</strong> (say, two brands of plain bottled water the consumer treats as identical), indifference curves are straight lines and the consumer buys only the cheaper good — a <strong>corner solution</strong>. With <strong>perfect complements</strong> (left and right shoes), indifference curves are L-shaped and the consumer buys the goods in fixed proportions, at the corner of the L.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Preferences are complete, transitive, and more-is-better; indifference curves slope down, never cross, and are usually convex.</li>\n<li>MRS = MU<sub>x</sub> ÷ MU<sub>y</sub> is the consumer's willingness to trade; it usually diminishes along a curve.</li>\n<li>The budget constraint is P<sub>x</sub>x + P<sub>y</sub>y = I, with slope −P<sub>x</sub> ÷ P<sub>y</sub>.</li>\n<li>The optimal bundle satisfies MRS = P<sub>x</sub> ÷ P<sub>y</sub> and spends the whole income.</li>\n<li>Our worked example: income $120, prices $4 and $6, U = x<sup>0.5</sup> y<sup>0.5</sup> gives the optimal bundle (15, 10).</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying utility numbers mean something by themselves. Utility is ordinal — only the ranking matters. A bundle with utility 12.25 is better than one with 10, but it is not \"2.25 utils happier\" in any measurable sense.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forgetting the budget constraint in the tangency condition. MRS = P<sub>x</sub>/P<sub>y</sub> alone gives a ratio, not a bundle — you must also use P<sub>x</sub>x + P<sub>y</sub>y = I to pin down the actual numbers.</div>\n<p><strong>Ready-to-Work link:</strong> Every demand curve in this course is built from this module. When a price changes, the consumer re-optimizes exactly the way you just did — and Module 2 traces out the demand curve from those re-optimized bundles.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Bundle", "def": "A combination of quantities of two or more goods, such as 15 coffees and 10 sandwiches." },
    { "term": "Completeness", "def": "The assumption that a consumer can compare any two bundles and say which is better, or that they are equal." },
    { "term": "Transitivity", "def": "The assumption that if A is preferred to B and B to C, then A is preferred to C." },
    { "term": "Indifference curve", "def": "A curve joining all bundles that give the consumer the same level of satisfaction." },
    { "term": "Utility", "def": "A number representing the satisfaction a bundle gives; ordinal — only the ranking matters." },
    { "term": "Utility function", "def": "A formula that turns bundles into utility numbers, such as U = x^0.5 y^0.5." },
    { "term": "Marginal utility", "def": "The extra utility from consuming one more unit of a good, holding the other good fixed." },
    { "term": "Marginal rate of substitution (MRS)", "def": "How much of good y a consumer will give up for one more unit of good x while staying equally satisfied; MRS = MUx / MUy." },
    { "term": "Diminishing MRS", "def": "As a consumer gets more of good x along an indifference curve, the amount of y they will give up for another x falls." },
    { "term": "Budget constraint", "def": "The equation Px·x + Py·y = I: the consumer's spending on the two goods equals income." },
    { "term": "Budget line", "def": "The graph of the budget constraint; its slope is −Px / Py." },
    { "term": "Tangency condition", "def": "The optimal-bundle rule: MRS = Px / Py, where the indifference curve touches the budget line." },
    { "term": "Optimal bundle", "def": "The affordable bundle on the highest indifference curve; for the worked example, (15, 10)." },
    { "term": "Perfect substitutes", "def": "Goods the consumer treats as interchangeable, giving straight-line indifference curves and often a corner solution." },
    { "term": "Perfect complements", "def": "Goods consumed in fixed proportions (like left and right shoes), giving L-shaped indifference curves." },
    { "term": "Corner solution", "def": "An optimal bundle where the consumer buys zero of one good, usually with perfect substitutes." }
  ],
  "video": {
    "title": "Indifference Curves",
    "embedUrl": "https://www.youtube.com/embed/iOmDo5jLFw8",
    "note": "Marginal Revolution University walks through indifference curves and the marginal rate of substitution — the same picture this module builds, with perfect substitutes and perfect complements included. Watch it, then redo the (15, 10) bundle on paper yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A consumer's utility function is U = x<sup>0.5</sup> y<sup>0.5</sup>. At the bundle (25, 9), what is the MRS? Show the steps.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: For U = x<sup>0.5</sup> y<sup>0.5</sup>, MRS = y ÷ x. Step 2: At (25, 9), MRS = 9 ÷ 25 = 0.36. Step 3: Meaning: the consumer will give up 0.36 units of y for one more unit of x and stay equally happy — or, in whole units, 9 units of y for 25 more units of x.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Income is $120, P<sub>x</sub> = $4, P<sub>y</sub> = $6. (a) What is the most x the consumer can buy? (b) What is the most y? (c) What is the slope of the budget line?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Most x = $120 ÷ $4 = 30 units. Step 2: Most y = $120 ÷ $6 = 20 units. Step 3: Slope = −P<sub>x</sub> ÷ P<sub>y</sub> = −4 ÷ 6 = −2/3. Giving up 2/3 of a unit of y buys one more unit of x.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Using U = x<sup>0.5</sup> y<sup>0.5</sup>, income $120, P<sub>x</sub> = $4, P<sub>y</sub> = $6, find the optimal bundle step by step and check your answer.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Tangency: MRS = y ÷ x = P<sub>x</sub> ÷ P<sub>y</sub> = 4 ÷ 6 = 2/3, so y = (2/3)x. Step 2: Budget: 4x + 6y = 120 becomes 4x + 6 × (2x/3) = 8x = 120, so x = 15. Step 3: y = (2/3) × 15 = 10. Step 4: Check: 4 × 15 + 6 × 10 = 60 + 60 = $120, and MRS = 10 ÷ 15 = 2/3 = price ratio. Optimal bundle (15, 10), utility √150 ≈ 12.25.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Income rises from $120 to $180, with P<sub>x</sub> = $4, P<sub>y</sub> = $6, and the same utility function. Find the new optimal bundle. What happened to each quantity, and by what percentage?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Tangency is unchanged: y = (2/3)x. Step 2: New budget: 4x + 6y = 180 becomes 8x = 180, so x = 22.5 and y = (2/3) × 22.5 = 15. Step 3: Both quantities rose by 50% (15 → 22.5 and 10 → 15), the same percentage as income — with this utility function, both goods are normal and income elasticity is 1.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The price of x rises from $4 to $8, income stays $120, P<sub>y</sub> = $6, U = x<sup>0.5</sup> y<sup>0.5</sup>. Find the new optimal bundle and explain in one sentence why x fell.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: New tangency: y ÷ x = 8 ÷ 6 = 4/3, so y = (4/3)x. Step 2: Budget: 8x + 6y = 120 becomes 8x + 6 × (4x/3) = 8x + 8x = 16x = 120, so x = 7.5 and y = (4/3) × 7.5 = 10. Step 3: Check: 8 × 7.5 + 6 × 10 = 60 + 60 = $120. x fell from 15 to 7.5 because x became twice as expensive relative to y, so the consumer substitutes toward y and buys less x.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> In your own words, explain why indifference curves cannot cross. Use the transitivity assumption in your answer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Suppose curves I1 and I2 cross at bundle A. Step 2: Pick bundle B on I1 (other than A) and bundle C on I2 (other than A) so that B is clearly better than C — possible because the curves diverge. Step 3: On I1, A and B are equally good; on I2, A and C are equally good. Step 4: Transitivity then says B is equally good as A, and A is equally good as C, so B is equally good as C — contradicting B being better than C. So crossing curves break transitivity.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An indifference curve joins bundles that:",
      "choices": [
        "Cost the same amount of money",
        "Give the consumer the same level of satisfaction",
        "Contain the same total number of items",
        "Are all affordable with the consumer's income"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Equal satisfaction is the definition of an indifference curve. (a) describes points on a budget line, not an indifference curve. (c) Total item count has nothing to do with satisfaction. (d) Affordability is the budget constraint's job."
    },
    {
      "q": "With U = x^0.5 y^0.5, the MRS at the bundle (15, 10) is:",
      "choices": [
        "3/2",
        "2/3",
        "15/10",
        "1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MRS = y ÷ x = 10 ÷ 15 = 2/3. (a) inverts the ratio — that is 1/MRS. (c) is the same numbers upside down: 15/10 = 3/2, not the MRS. (d) would need x = y."
    },
    {
      "q": "Income is $120, Px = $4, Py = $6. The slope of the budget line is:",
      "choices": [
        "−3/2",
        "−2/3",
        "−4",
        "−6"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Slope = −Px ÷ Py = −4 ÷ 6 = −2/3. (a) is the inverse ratio, −Py/Px. (c) and (d) are the prices themselves, not their ratio."
    },
    {
      "q": "The consumer's optimal bundle satisfies which condition?",
      "choices": [
        "MRS = Py / Px",
        "MRS = Px / Py and spending equals income",
        "MUx = MUy",
        "The consumer spends nothing on y"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Tangency (MRS = Px/Py) plus the budget constraint pins down the bundle. (a) inverts the price ratio. (c) Equal marginal utilities are not the rule — it is the ratio of marginal utilities that must equal the price ratio. (d) describes a corner solution, not the general rule."
    },
    {
      "q": "With U = x^0.5 y^0.5, income $120, Px = $4, Py = $6, the optimal bundle is:",
      "choices": [
        "(30, 20)",
        "(10, 15)",
        "(15, 10)",
        "(20, 10)"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Tangency gives y = (2/3)x and the budget gives x = 15, y = 10. (a) is the pair of intercepts — buying both is impossible. (b) swaps x and y and costs 4×10 + 6×15 = $130, over budget. (d) costs 4×20 + 6×10 = $140, over budget."
    },
    {
      "q": "Diminishing MRS means that as a consumer gets more of good x along an indifference curve, they are willing to give up:",
      "choices": [
        "More and more y for each extra x",
        "Less and less y for each extra x",
        "The same amount of y for each extra x",
        "All of their y at once"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The scarcer good is valued more, so the trade-off shrinks — this is why indifference curves bow toward the origin. (a) describes increasing MRS. (c) describes straight-line indifference curves (perfect substitutes). (d) is not a trade-off at all."
    },
    {
      "q": "If the price of x rises and income is unchanged, the budget line:",
      "choices": [
        "Shifts outward in parallel",
        "Pivots inward around the y-intercept",
        "Shifts inward in parallel",
        "Does not move at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Only the x-intercept falls (less x affordable); the most y affordable is unchanged, so the line pivots on the y-intercept. (a) is an income increase. (c) is an income decrease. (d) ignores that a higher price buys less x."
    },
    {
      "q": "Left and right shoes are an example of:",
      "choices": [
        "Perfect substitutes",
        "Perfect complements",
        "Inferior goods",
        "Giffen goods"
      ],
      "answer": 1,
      "explanation": "Correct: (b). They are consumed in fixed proportions, giving L-shaped indifference curves. (a) Perfect substitutes are interchangeable, like two identical brands of water. (c) Inferior goods are about income effects, not fixed proportions. (d) Giffen goods are a rare demand anomaly, not a complementarity case."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Consumer Theory Quick Reference</h3>\n<p><strong>Core idea:</strong> Tastes are drawn as indifference curves; affordability is drawn as a budget line; choice is where they touch.</p>\n<p><strong>Preferences:</strong> complete, transitive, more-is-better. Indifference curves slope down, never cross, and are usually convex.</p>\n<p><strong>MRS:</strong> the consumer's willingness to trade. MRS = MU<sub>x</sub> ÷ MU<sub>y</sub>; for U = x<sup>0.5</sup> y<sup>0.5</sup>, MRS = y ÷ x, and it diminishes along a curve.</p>\n<p><strong>Budget:</strong> P<sub>x</sub>x + P<sub>y</sub>y = I; slope −P<sub>x</sub> ÷ P<sub>y</sub>.</p>\n<div class=\"formula\">Optimal bundle: MRS = P<sub>x</sub> ÷ P<sub>y</sub> &nbsp;and&nbsp; P<sub>x</sub>x + P<sub>y</sub>y = I</div>\n<p><strong>Worked anchor:</strong> I = $120, P<sub>x</sub> = $4, P<sub>y</sub> = $6 → optimal bundle (15, 10), utility √150 ≈ 12.25.</p>\n<p><strong>Watch out:</strong> Utility is ordinal — only rankings matter. And the tangency condition alone is not enough; always use the budget constraint too.</p>\n<p><strong>Self-check:</strong> If P<sub>x</sub> doubled to $8, what is the new optimal bundle? (Answer: (7.5, 10).)</p>\n"
};
