// eco241 - Module 10: Cost-Benefit Analysis for Environmental Policy
module.exports = {
  "number": 10,
  "slug": "cost-benefit-analysis-environmental-policy",
  "title": "Cost-Benefit Analysis for Environmental Policy",
  "estTime": "3–4 hours",
  "objectives": [
    "Define cost-benefit analysis and the decision rule: proceed when net present value is positive.",
    "Compute present values, net present value, and the benefit-cost ratio from a worked example.",
    "Explain marginal analysis: expand a project while marginal benefit exceeds marginal cost.",
    "Value non-market benefits such as cleaner air and saved lives, and state the limits of doing so.",
    "Explain sensitivity analysis and why the discount rate can decide an environmental project."
  ],
  "sections": [
    {
      "heading": "What Cost-Benefit Analysis Is",
      "html": "<p><strong>Cost-benefit analysis (CBA)</strong> is the disciplined way to decide whether a project is worth doing: list all the costs and all the benefits, put them in the same units (dollars), put them in the same year (discount to the present), and compare. The decision rule is simple: proceed if the <strong>net present value (NPV)</strong> — the present value of benefits minus the present value of costs — is positive, and pick the option with the highest NPV when options compete.</p>\n<p>CBA forces honesty. A project with visible benefits and hidden costs — a dam that floods a valley, a road through a wetland — looks good until the hidden costs are priced. A project with hidden benefits — a park that improves health, a filter that cuts hospital visits — looks bad until the benefits are counted. The analysis is only as good as the list: the most common failure in real CBA is not bad arithmetic but a missing row.</p>\n<div class=\"callout\"><strong>Key idea:</strong> CBA is a list before it is a calculation. If a cost or a benefit is missing from the list, no amount of careful discounting will save the decision.</div>"
    },
    {
      "heading": "Present Value, NPV, and the Benefit-Cost Ratio — Worked Out",
      "html": "<p>Worked anchor — a river-cleanup project. It costs <strong>$1,000,000 now</strong> and delivers benefits of <strong>$300,000 a year for 5 years</strong> (cleaner water, fewer illnesses, better fishing). The discount rate is 5%. Benefits in the future are worth less today, so each year's $300,000 must be discounted. The annuity factor for 5 years at 5% is (1 − 1.05<sup>−5</sup>) ÷ 0.05 = (1 − 0.7835) ÷ 0.05 = <strong>4.3295</strong>.</p>\n<p>Present value of benefits = $300,000 × 4.3295 = <strong>$1,298,843</strong>. Net present value = $1,298,843 − $1,000,000 = <strong>$298,843</strong>. The <strong>benefit-cost ratio (BCR)</strong> = $1,298,843 ÷ $1,000,000 = <strong>1.30</strong>. Both tests agree: NPV is positive and BCR exceeds 1, so the project is worth doing. If the discount rate were 10%, the annuity factor would be 3.7908, the present value of benefits would be $1,137,240, and the NPV would be $137,240 — still positive, but much smaller. The discount rate can decide close projects, which is why Module 9's discussion of it matters here.</p>\n<div class=\"formula\">NPV = PV(benefits) − PV(costs) &nbsp;|&nbsp; BCR = PV(benefits) ÷ PV(costs) &nbsp;|&nbsp; Proceed if NPV > 0 (equivalently BCR > 1)</div>"
    },
    {
      "heading": "Marginal Analysis: How Much Is Enough?",
      "html": "<p>NPV answers \"should we do it?\" Marginal analysis answers \"how much of it?\" Keep expanding a project while <strong>marginal benefit exceeds marginal cost</strong>, and stop when they are equal. Suppose cleaning the river further costs $50,000 per extra unit of cleanliness and yields $80,000 of benefit — do it. When the next unit costs $90,000 and yields $60,000 — stop. The optimal scale is where MB = MC, the same rule that governs a firm's output and a consumer's spending.</p>\n<p>This is why \"how clean is clean enough?\" has an economic answer rather than a moral one. Aiming for zero pollution usually means spending enormous sums on the last, most expensive units of cleanup for tiny gains — the same logic as Module 7's point that the efficient level of pollution is not zero. CBA does not say the environment is unimportant; it says the environment is important enough to spend money where it buys the most of it.</p>"
    },
    {
      "heading": "Valuing What Has No Price — and Knowing the Limits",
      "html": "<p>The hardest part of environmental CBA is valuing benefits with no market price: a saved life, a day without asthma, a view, a species. Economists use three approaches. <strong>Revealed preference</strong> watches what people actually pay — for example, how much more houses cost in clean-air neighbourhoods. <strong>Stated preference</strong> asks people, in careful surveys, what they would pay for cleaner air. <strong>Cost-of-illness</strong> counts medical bills and lost workdays avoided. Each is imperfect: surveys can be hypothetical, house prices mix many factors, and medical bills miss suffering.</p>\n<p>For lives saved, analysts use the <strong>value of a statistical life (VSL)</strong> — not the value of any named person's life, but what a large group together would pay for a small reduction in risk. If 100,000 people would each pay $100 to cut a risk that would save one life on average, the VSL is 100,000 × $100 = <strong>$10,000,000</strong> — an example number, not a price tag on a person. CBA also needs <strong>sensitivity analysis</strong>: rerun the numbers with a higher discount rate, a lower benefit estimate, and a higher cost, and check whether the decision survives. A project that passes only under the rosiest assumptions is not a good project — it is a gamble wearing a spreadsheet.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A CBA that cannot say what would change its answer has not been finished. Sensitivity analysis — varying the discount rate, the benefits, and the costs — is where the real decision is made.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>CBA: list all costs and benefits, discount to the present, proceed if NPV &gt; 0 (equivalently BCR &gt; 1).</li>\n<li>River-cleanup anchor: cost $1,000,000 now; benefits $300,000 a year for 5 years at 5%; annuity factor 4.3295; PV benefits $1,298,843; NPV $298,843; BCR 1.30 — proceed.</li>\n<li>At a 10% discount rate the same project has PV benefits $1,137,240 and NPV $137,240 — still positive, but smaller.</li>\n<li>Marginal rule: expand while marginal benefit exceeds marginal cost; stop at MB = MC.</li>\n<li>Non-market values: revealed preference, stated preference, cost-of-illness; VSL example: 100,000 × $100 = $10,000,000. Always run sensitivity analysis.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Comparing undiscounted totals — $1,500,000 of benefits over five years against $1,000,000 today — and calling the difference the gain. The $300,000 in year five is worth only $235,000 today at 5%. Always discount before comparing.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Using the benefit-cost ratio to rank projects of different sizes. A small project can have a high ratio and a small NPV; when funds are limited, rank by NPV per dollar of budget, not by ratio alone.</div>\n<p><strong>Ready-to-Work link:</strong> CBA is the same tool as a business case: list everything, discount, compare. The next time someone pitches a project with only the benefits listed, ask for the other column — that question alone is worth this module.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Cost-benefit analysis (CBA)",
      "def": "A method that lists all costs and benefits of a project in dollars, discounts them to the present, and compares them."
    },
    {
      "term": "Net present value (NPV)",
      "def": "The present value of benefits minus the present value of costs; proceed if it is positive."
    },
    {
      "term": "Benefit-cost ratio (BCR)",
      "def": "The present value of benefits divided by the present value of costs; proceed if it exceeds 1."
    },
    {
      "term": "Present value",
      "def": "What a future amount is worth today after discounting."
    },
    {
      "term": "Annuity factor",
      "def": "The factor that converts a stream of equal annual amounts into a present value at a given discount rate."
    },
    {
      "term": "Marginal benefit",
      "def": "The extra benefit from one more unit of a project."
    },
    {
      "term": "Marginal cost",
      "def": "The extra cost of one more unit of a project."
    },
    {
      "term": "Marginal analysis",
      "def": "Expanding a project while marginal benefit exceeds marginal cost, stopping at MB = MC."
    },
    {
      "term": "Revealed preference",
      "def": "Valuing a non-market good by watching what people actually pay, for example house prices in clean areas."
    },
    {
      "term": "Stated preference",
      "def": "Valuing a non-market good by asking people in surveys what they would pay for it."
    },
    {
      "term": "Cost-of-illness",
      "def": "Valuing a health benefit by the medical bills and lost workdays it avoids."
    },
    {
      "term": "Value of a statistical life (VSL)",
      "def": "What a large group together would pay for a small risk reduction that saves one life on average."
    },
    {
      "term": "Sensitivity analysis",
      "def": "Rerunning a CBA with different assumptions — discount rate, benefits, costs — to check the decision survives."
    },
    {
      "term": "Opportunity cost of funds",
      "def": "The return the money could have earned in its best alternative use, reflected in the discount rate."
    }
  ],
  "video": {
    "title": "AP Microeconomics Unit 1 Review, 1.5 Cost-Benefit Analysis: One Ticket, Four Years of College",
    "embedUrl": "https://www.youtube.com/embed/4zk5mdP4gIo",
    "note": "A worked cost-benefit lesson — a concert ticket, study hours, and the full cost of college — built on explicit versus implicit cost and the marginal rule (keep going while marginal benefit beats marginal cost). Apply its MB = MC rule to the river-cleanup project in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A river-cleanup project costs $1,000,000 now and yields $300,000 a year for 5 years. The discount rate is 5% and the annuity factor is 4.3295. (a) What is the present value of the benefits? (b) What is the NPV? (c) What is the benefit-cost ratio? Should the project proceed?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: PV of benefits is $300,000 × 4.3295 = <strong>$1,298,843</strong>. Step 2: NPV is $1,298,843 − $1,000,000 = <strong>$298,843</strong>. Step 3: BCR is $1,298,843 ÷ $1,000,000 = <strong>1.30</strong>. Step 4: NPV is positive and BCR exceeds 1, so the project should <strong>proceed</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Recompute Problem 1 at a 10% discount rate, where the 5-year annuity factor is 3.7908. (a) What is the PV of benefits? (b) What is the NPV? (c) Does the decision change?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: PV of benefits is $300,000 × 3.7908 = <strong>$1,137,240</strong>. Step 2: NPV is $1,137,240 − $1,000,000 = <strong>$137,240</strong>. Step 3: The NPV is still positive, so the decision does <strong>not</strong> change — but the margin is less than half what it was at 5%, showing how much the discount rate matters.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A park project has a marginal benefit of $80,000 and a marginal cost of $50,000 for the next unit of improvement. The unit after that has a marginal benefit of $60,000 and a marginal cost of $90,000. (a) Should the first unit be built? (b) Should the second? Explain with the marginal rule.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: For the first unit, MB ($80,000) exceeds MC ($50,000), so <strong>build it</strong> — it adds $30,000 of net benefit. Step 2: For the second unit, MB ($60,000) is below MC ($90,000), so <strong>do not build it</strong> — it would destroy $30,000 of net benefit. Step 3: The optimal scale stops where MB = MC, between the two units.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A safety programme would cut a risk that, across 100,000 people, saves one life on average. Each person would pay $100 for the cut. (a) What is the implied value of a statistical life? (b) If the programme costs $8 million, does it pass a cost-benefit test on this benefit alone?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The VSL is 100,000 × $100 = <strong>$10,000,000</strong>. Step 2: The benefit ($10,000,000) exceeds the cost ($8,000,000), so on this benefit alone the programme <strong>passes</strong>, with a net gain of $2,000,000. Step 3: This is an example number — a real VSL comes from real studies of what people actually pay for risk reduction.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A project's NPV is $50,000 if benefits are as forecast, but −$100,000 if benefits are 20% lower. Explain what sensitivity analysis says about this project in two or three sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The decision flips on a 20% benefit shortfall, so the project is <strong>fragile</strong> — it passes only under the central forecast. Step 2: Sensitivity analysis says to treat it as a gamble, not a clear yes: either find firmer benefit evidence, cut the cost, or require a bigger margin before proceeding.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two projects compete for the same $1,000,000. Project A has NPV $298,843 (the river cleanup). Project B has NPV $400,000 but costs $2,000,000, so it cannot be funded alone. Which should be chosen, and why does the benefit-cost ratio not settle it by itself?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Project B cannot be funded with $1,000,000, so Project A is the feasible choice — NPV must be compared among projects that fit the budget. Step 2: The ratio does not settle it because a ratio ignores scale: a tiny project can have a huge ratio and a tiny NPV. Step 3: With a fixed budget, rank feasible projects by NPV, and use NPV per dollar only to compare projects of different sizes that all fit.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The decision rule in cost-benefit analysis is to proceed when:",
      "choices": [
        "Total undiscounted benefits exceed total costs",
        "Net present value is positive",
        "The project is popular",
        "Costs are zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). NPV > 0 means benefits exceed costs in present-value terms. (a) Undiscounted totals ignore when money arrives. (c) Popularity is not a welfare test. (d) Costs are never zero."
    },
    {
      "q": "The river-cleanup project (cost $1,000,000; benefits $300,000 a year for 5 years at 5%, factor 4.3295) has an NPV of:",
      "choices": [
        "$500,000",
        "$298,843",
        "$1,298,843",
        "$137,240"
      ],
      "answer": 1,
      "explanation": "Correct: (b). PV benefits are $300,000 × 4.3295 = $1,298,843; NPV is $1,298,843 − $1,000,000 = $298,843. (a) is the undiscounted gain ($1,500,000 − $1,000,000). (c) is the PV of benefits, not the NPV. (d) is the NPV at a 10% discount rate."
    },
    {
      "q": "The benefit-cost ratio of the river-cleanup project is:",
      "choices": [
        "0.77",
        "1.30",
        "2.30",
        "4.33"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $1,298,843 ÷ $1,000,000 = 1.30. (a) is the inverse ratio. (c) adds 1 to the ratio. (d) is the annuity factor."
    },
    {
      "q": "At a 10% discount rate (factor 3.7908), the river-cleanup NPV becomes:",
      "choices": [
        "$298,843",
        "$137,240",
        "$0",
        "−$100,000"
      ],
      "answer": 1,
      "explanation": "Correct: (b). PV benefits are $300,000 × 3.7908 = $1,137,240; NPV is $137,240. (a) is the NPV at 5%. (c) The project still passes at 10%. (d) No combination of the given numbers yields this."
    },
    {
      "q": "Marginal analysis says to expand a project while:",
      "choices": [
        "Total benefit exceeds total cost",
        "Marginal benefit exceeds marginal cost",
        "Marginal cost is zero",
        "The benefit-cost ratio is below 1"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Expand while MB > MC and stop at MB = MC. (a) Total comparison answers whether to do the project at all, not how much. (c) Zero marginal cost is not the rule. (d) A ratio below 1 means the project should not be done."
    },
    {
      "q": "If 100,000 people would each pay $100 for a risk cut that saves one life on average, the value of a statistical life is:",
      "choices": [
        "$100",
        "$100,000",
        "$10,000,000",
        "$1,000,000"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 100,000 × $100 = $10,000,000. (a) is one person's payment. (b) is 1,000 people × $100. (d) is 10,000 people × $100."
    },
    {
      "q": "Sensitivity analysis is used to:",
      "choices": [
        "Hide uncertain assumptions",
        "Check whether the decision survives different assumptions about the discount rate, benefits, and costs",
        "Make the NPV look bigger",
        "Replace discounting"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Rerunning the numbers under worse assumptions shows whether the project is robust or fragile. (a) It exposes assumptions, it does not hide them. (c) It can shrink the NPV — that is the point. (d) It works with discounting, not instead of it."
    },
    {
      "q": "The most common failure in a real cost-benefit analysis is:",
      "choices": [
        "A missing cost or benefit row in the list",
        "Using too many decimal places",
        "Choosing a discount rate at all",
        "Computing the annuity factor"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A missing row biases the decision no matter how good the arithmetic is. (b) Decimal places do not change decisions. (c) A discount rate is required, not optional. (d) The annuity factor is standard arithmetic."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Cost-Benefit Analysis Quick Reference</h3>\n<p><strong>Core idea:</strong> List everything, discount to the present, proceed if NPV &gt; 0 (BCR &gt; 1). The list matters more than the arithmetic.</p>\n<div class=\"formula\">River cleanup: PV benefits = $300,000 × 4.3295 = $1,298,843 &nbsp;|&nbsp; NPV = $1,298,843 − $1,000,000 = $298,843 &nbsp;|&nbsp; BCR = 1.30</div>\n<p><strong>Discount rate matters:</strong> at 10% (factor 3.7908), PV benefits = $1,137,240 and NPV = $137,240 — still positive, but much smaller.</p>\n<p><strong>Marginal rule:</strong> expand while MB &gt; MC; stop at MB = MC. <strong>Non-market values:</strong> revealed preference (house prices) · stated preference (surveys) · cost-of-illness (bills avoided). VSL example: 100,000 × $100 = $10,000,000.</p>\n<p><strong>Watch out:</strong> Never compare undiscounted totals, and do not rank different-sized projects by ratio alone. Always run sensitivity analysis.</p>\n<p><strong>Self-check:</strong> A project costs $500,000 now and yields $150,000 a year for 5 years at 5% (factor 4.3295). What are its PV of benefits, NPV, and BCR?</p>\n"
};
