// ACC 102 - Module 2: Cost Concepts & Cost Behavior
module.exports = {
  number: 2,
  slug: "cost-concepts-cost-behavior",
  title: "Cost Concepts & Cost Behavior",
  estTime: "3–4 hours",
  objectives: [
    "Classify costs as direct or indirect, product or period, fixed or variable.",
    "Explain how fixed, variable, and mixed costs behave as activity changes.",
    "Use the high-low method to split a mixed cost into fixed and variable parts.",
    "Compute total cost, cost per unit, and the relevant range for a decision.",
    "Explain why cost per unit falls as volume rises when fixed costs are spread over more units."
  ],
  sections: [
    {
      heading: "Direct, Indirect, Product, and Period Costs",
      html: `
<p>Every cost question starts with the same move: <strong>what is the cost object?</strong> A cost object is whatever you are costing — a product, a department, a customer. A <strong>direct cost</strong> can be traced to that object easily and exactly: the wood in a chair, the wages of the worker who built it. An <strong>indirect cost</strong> cannot be traced exactly and must be allocated: the factory rent, the supervisor's salary. The same cost can be direct for one object and indirect for another — a supervisor's salary is direct for her department but indirect for any single chair.</p>
<p>For a manufacturer, costs also split into <strong>product costs</strong> and <strong>period costs</strong>. Product costs — direct materials, direct labor, and manufacturing overhead — attach to inventory and become cost of goods sold only when the product sells. Period costs — selling and administrative costs — are expensed in the period they occur, whether or not anything sells. That timing difference is why two companies with identical cash spending can report different profits: one has costs sitting in inventory, the other has already expensed them.</p>
<div class="callout"><strong>Key idea:</strong> "Direct" and "product" are not synonyms. Direct is about traceability to a cost object; product is about whether the cost attaches to inventory. A cost can be direct and a period cost (a salesperson's commission traced to a sale) or indirect and a product cost (factory rent).</div>`
    },
    {
      heading: "How Costs Behave: Fixed, Variable, and Mixed",
      html: `
<p><strong>Variable costs</strong> change in total in proportion to activity but stay constant per unit: materials at $5 per unit cost $5,000 for 1,000 units and $10,000 for 2,000 units, always $5 each. <strong>Fixed costs</strong> stay constant in total within the relevant range but fall per unit as volume rises: $12,000 of rent is $12 per unit at 1,000 units and $6 per unit at 2,000 units. <strong>Mixed costs</strong> have both parts — a base charge plus a per-unit charge, like a phone plan with a $40 monthly fee plus $0.10 per minute.</p>
<p>The <strong>relevant range</strong> is the band of activity over which these assumptions hold. Rent is fixed only until the company outgrows its building; beyond that, a second building — a step cost — appears. Every cost behavior claim in this course carries an invisible footnote: "within the relevant range."</p>
<div class="formula">Total cost = Fixed cost + (Variable cost per unit × Activity)</div>
<p><strong>Worked check:</strong> A shop has fixed costs of $13,000 per month and variable costs of $5 per unit. At 5,000 units total cost is 13,000 + 5 × 5,000 = $38,000, or $7.60 per unit. At 9,000 units total cost is 13,000 + 5 × 9,000 = $58,000, or $6.44 per unit. Total cost rose by $20,000 while cost per unit fell — the fixed $13,000 is now spread over 4,000 more units.</p>`
    },
    {
      heading: "The High-Low Method: Splitting a Mixed Cost",
      html: `
<p>When a cost is mixed and you only have past totals, the <strong>high-low method</strong> splits it using the highest and lowest activity months. Step 1: variable cost per unit = (cost at high activity − cost at low activity) ÷ (high activity − low activity). Step 2: fixed cost = total cost at either point − (variable rate × activity at that point). It is quick and transparent, which is why managers use it — and crude, because it uses only two data points and ignores the rest.</p>
<p><strong>Worked example:</strong> Highest month: 9,000 units, $58,000 total cost. Lowest month: 5,000 units, $38,000. Step 1: variable rate = (58,000 − 38,000) ÷ (9,000 − 5,000) = 20,000 ÷ 4,000 = <strong>$5.00 per unit</strong>. Step 2: fixed cost = 58,000 − (5 × 9,000) = 58,000 − 45,000 = <strong>$13,000</strong>. Check with the low point: 38,000 − (5 × 5,000) = 38,000 − 25,000 = $13,000. Both points agree, as they must. Forecast for 7,000 units: 13,000 + 5 × 7,000 = <strong>$48,000</strong>.</p>
<div class="callout"><strong>Key idea:</strong> The high-low method assumes the high and low months are normal. If the high month included a one-off repair, the variable rate it produces is wrong — and every forecast built on it is wrong too.</div>`
    },
    {
      heading: "Cost Per Unit: The Number That Misleads Most Often",
      html: `
<p>Cost per unit is the most quoted and most misunderstood number in managerial accounting. Because fixed costs are spread over volume, unit cost falls as volume rises and rises as volume falls — even when nothing about efficiency changed. A plant that produced 8,000 units last month at $9.00 per unit and 6,000 units this month at $10.50 per unit may have gotten no worse at all; it simply spread the same fixed cost over fewer units.</p>
<p>That is why managers must always ask <em>which</em> unit cost they are looking at: the variable cost per unit (stable, decision-relevant) or the full cost per unit (volume-dependent, useful for pricing and inventory, dangerous for short-run decisions). In Module 9 you will see a company nearly refuse a profitable special order because it judged the order against full unit cost instead of the variable cost the order would actually add.</p>
<p><strong>Worked check:</strong> Fixed costs $13,000, variable $5 per unit. At 5,000 units: total $38,000, unit cost $7.60. At 9,000 units: total $58,000, unit cost $6.44. The variable cost per unit is $5.00 at both volumes; only the fixed cost per unit moved, from $2.60 to $1.44.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Direct vs. indirect is about traceability; product vs. period is about inventory timing; fixed vs. variable is about behavior.</li>
<li>Variable cost: constant per unit, changing in total. Fixed cost: constant in total, changing per unit. Mixed cost: both parts.</li>
<li>High-low: variable rate = change in cost ÷ change in activity; fixed = total − variable × activity.</li>
<li>All behavior claims hold only within the relevant range.</li>
<li>Unit cost moves with volume because fixed cost is spread — never judge efficiency by unit cost alone.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Calling a cost "fixed" without a time frame. Salaries are fixed this month and variable over a year if headcount can change. Always ask: fixed over what period, and within what range?</div>
<div class="callout"><strong>Common mistake:</strong> Using the high-low method on months that include outliers. One month with a strike, a flood, or a one-off repair will distort the rate. Look at the data before you compute.</div>
<p><strong>Ready-to-work link:</strong> If you can split a mixed cost with high-low, explain why unit cost fell when volume rose, and say which costs are product vs. period for a manufacturer, you are ready for Module 3's costing systems.</p>`
    }
  ],
  keyTerms: [
    { term: "Cost object", def: "Anything for which a cost is measured — a product, department, customer, or activity." },
    { term: "Direct cost", def: "A cost that can be traced to a cost object easily and exactly." },
    { term: "Indirect cost", def: "A cost that cannot be traced exactly to a cost object and must be allocated." },
    { term: "Product cost", def: "Direct materials, direct labor, and manufacturing overhead; attaches to inventory until the product sells." },
    { term: "Period cost", def: "Selling and administrative costs expensed in the period incurred, regardless of sales." },
    { term: "Direct materials", def: "Raw materials that become part of the finished product and are traced directly to it." },
    { term: "Direct labor", def: "Wages of workers who convert materials into finished products and are traced directly to them." },
    { term: "Manufacturing overhead", def: "All manufacturing costs except direct materials and direct labor — indirect materials, indirect labor, rent, utilities, depreciation." },
    { term: "Variable cost", def: "A cost that changes in total in proportion to activity and stays constant per unit." },
    { term: "Fixed cost", def: "A cost that stays constant in total within the relevant range and falls per unit as volume rises." },
    { term: "Mixed cost", def: "A cost with both a fixed component and a variable component." },
    { term: "Relevant range", def: "The band of activity over which cost behavior assumptions (fixed and variable) hold." },
    { term: "High-low method", def: "Splitting a mixed cost using the highest and lowest activity levels to find the variable rate and fixed cost." },
    { term: "Step cost", def: "A cost that is fixed over a small range but jumps to a new level when activity passes a threshold." },
    { term: "Prime cost", def: "Direct materials plus direct labor." },
    { term: "Conversion cost", def: "Direct labor plus manufacturing overhead — the cost of converting materials into finished goods." }
  ],
  video: {
    title: "High Low Method Example",
    embedUrl: "https://www.youtube.com/embed/YGrlsCPIKkw",
    note: "Edspira works a high-low example step by step: find the variable rate from the change in cost over the change in activity, then back out the fixed cost. Follow it with the numbers in this module and check that both points give the same fixed cost.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A furniture shop's costs for June: wood $8,000 (traced to chairs), assembly wages $6,000 (traced to chairs), factory rent $4,000, sales commissions $2,000, factory supervisor salary $3,000. Classify each as direct or indirect (cost object = a chair) and as product or period cost.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Wood — <strong>direct, product</strong> (direct materials). Step 2: Assembly wages — <strong>direct, product</strong> (direct labor). Step 3: Factory rent — <strong>indirect, product</strong> (manufacturing overhead). Step 4: Sales commissions — <strong>direct, period</strong> (traced to sales, expensed when incurred). Step 5: Supervisor salary — <strong>indirect, product</strong> (manufacturing overhead).</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A company's highest month was 9,000 units at $58,000 total cost; its lowest month was 5,000 units at $38,000. Use the high-low method to find (a) the variable cost per unit, (b) the fixed cost, and (c) the forecast total cost at 7,000 units.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Variable rate = (58,000 − 38,000) ÷ (9,000 − 5,000) = 20,000 ÷ 4,000 = <strong>$5.00 per unit</strong>. Step 2: Fixed cost = 58,000 − (5 × 9,000) = <strong>$13,000</strong> (check: 38,000 − 5 × 5,000 = $13,000). Step 3: Forecast at 7,000 units = 13,000 + 5 × 7,000 = <strong>$48,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Prime cost is $42,000 and conversion cost is $35,000. Direct labor is $15,000. Find (a) direct materials and (b) manufacturing overhead.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Prime cost = direct materials + direct labor, so direct materials = 42,000 − 15,000 = <strong>$27,000</strong>. Step 2: Conversion cost = direct labor + manufacturing overhead, so manufacturing overhead = 35,000 − 15,000 = <strong>$20,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Fixed costs are $13,000 per month and variable cost is $5 per unit. Compute total cost and cost per unit at (a) 5,000 units and (b) 9,000 units. Explain why cost per unit changed.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: At 5,000 units, total = 13,000 + 25,000 = <strong>$38,000</strong>; per unit = 38,000 ÷ 5,000 = <strong>$7.60</strong>. Step 2: At 9,000 units, total = 13,000 + 45,000 = <strong>$58,000</strong>; per unit = 58,000 ÷ 9,000 = <strong>$6.44</strong>. Step 3: Unit cost fell because the fixed $13,000 is spread over more units ($2.60 per unit at 5,000 vs. $1.44 at 9,000); the variable cost per unit stayed $5.00.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A delivery company pays $900 per month for a van lease plus $0.40 per mile driven. In March it drove 6,000 miles and total cost was $3,300. (a) Is this a mixed cost? (b) Verify the March total from the cost formula. (c) Forecast April at 7,500 miles.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Yes — <strong>mixed</strong>: a $900 fixed lease plus $0.40 variable per mile. Step 2: March = 900 + 0.40 × 6,000 = 900 + 2,400 = <strong>$3,300</strong>, which matches. Step 3: April = 900 + 0.40 × 7,500 = 900 + 3,000 = <strong>$3,900</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A plant's rent is $12,000 per month and it is fixed within the relevant range of 4,000–10,000 units. The plant expects 12,000 units next month. Can the manager safely use $12,000 as the rent forecast? Explain.</p>",
      solution: "<p><strong>Answer: No.</strong> Step 1: 12,000 units is outside the relevant range of 4,000–10,000. Step 2: Beyond the range, the cost behavior assumption breaks — the plant may need more space, a second shift's facilities, or a new lease (a step cost). Step 3: The manager must re-estimate rent for the higher volume instead of extending the old fixed amount.</p>"
    }
  ],
  quiz: [
    {
      q: "Factory rent for a manufacturer is best classified as:",
      choices: ["Direct cost and period cost", "Indirect cost and product cost", "Direct cost and product cost", "Indirect cost and period cost"],
      answer: 1,
      explanation: "Correct: (b). Rent cannot be traced to a single unit (indirect) and it is a manufacturing cost that attaches to inventory (product). (a) and (c) wrongly call it direct. (d) wrongly calls it a period cost — selling and administrative costs are period costs."
    },
    {
      q: "A variable cost:",
      choices: ["Stays constant in total and falls per unit as volume rises", "Changes in total in proportion to activity and stays constant per unit", "Stays constant both in total and per unit", "Changes per unit but stays constant in total"],
      answer: 1,
      explanation: "Correct: (b). Total variable cost scales with activity; the per-unit rate does not change. (a) describes a fixed cost. (c) describes nothing in cost behavior. (d) reverses the fixed/variable pattern."
    },
    {
      q: "High month: 9,000 units, $58,000. Low month: 5,000 units, $38,000. The variable cost per unit is:",
      choices: ["$5.00", "$6.44", "$7.60", "$13,000"],
      answer: 0,
      explanation: "Correct: (a). (58,000 − 38,000) ÷ (9,000 − 5,000) = 20,000 ÷ 4,000 = $5.00. (b) is the total cost per unit at 9,000 units. (c) is the total cost per unit at 5,000 units. (d) is the fixed cost, not a per-unit rate."
    },
    {
      q: "Using the same high-low data, the fixed cost is:",
      choices: ["$5,000", "$13,000", "$25,000", "$45,000"],
      answer: 1,
      explanation: "Correct: (b). 58,000 − (5 × 9,000) = $13,000, and 38,000 − (5 × 5,000) = $13,000. (a) is the activity change in thousands. (c) is the variable cost at the low month. (d) is the variable cost at the high month."
    },
    {
      q: "Prime cost equals:",
      choices: ["Direct labor + manufacturing overhead", "Direct materials + direct labor", "Direct materials + manufacturing overhead", "All manufacturing costs"],
      answer: 1,
      explanation: "Correct: (b). Prime cost is the two directly traced manufacturing costs. (a) is conversion cost. (c) mixes a direct and an indirect cost with no standard name. (d) is total manufacturing cost, which also includes overhead."
    },
    {
      q: "Cost per unit falls when volume rises mainly because:",
      choices: ["Variable cost per unit falls", "Fixed cost is spread over more units", "Total cost falls", "Materials get cheaper automatically"],
      answer: 1,
      explanation: "Correct: (b). Fixed cost per unit drops as volume rises; variable cost per unit is unchanged. (a) is wrong — variable cost per unit is constant. (c) is wrong — total cost rises with volume. (d) is not a general rule."
    },
    {
      q: "Sales commissions paid to a salesperson are:",
      choices: ["Product costs", "Period costs", "Manufacturing overhead", "Direct materials"],
      answer: 1,
      explanation: "Correct: (b). Selling costs are period costs, expensed when incurred. (a) Product costs are manufacturing costs that attach to inventory. (c) Overhead is a manufacturing cost. (d) Materials become part of the product."
    },
    {
      q: "The relevant range matters because:",
      choices: ["Costs behave differently outside it — fixed costs may step up and variable rates may change", "It is required by GAAP", "It determines the company's tax rate", "It is the range of prices a company can charge"],
      answer: 0,
      explanation: "Correct: (a). Behavior assumptions hold only inside the range; outside it, new capacity or new rates change the cost function. (b) GAAP does not govern managerial cost behavior. (c) and (d) are unrelated to cost behavior."
    }
  ],
  studyGuide: `
<h3>Module 2 — Cost Concepts & Cost Behavior: Quick Reference</h3>
<p><strong>Classifications:</strong> Direct/indirect = traceability. Product/period = inventory timing. Fixed/variable/mixed = behavior.</p>
<p><strong>Product costs:</strong> Direct materials + direct labor + manufacturing overhead. <strong>Period costs:</strong> selling + administrative.</p>
<div class="formula">Total cost = Fixed + (Variable per unit × Activity) &nbsp;|&nbsp; Prime = DM + DL &nbsp;|&nbsp; Conversion = DL + MOH</div>
<p><strong>High-low:</strong> Variable rate = ΔCost ÷ ΔActivity; Fixed = Total − (Variable rate × Activity). Check both points.</p>
<p><strong>Worked anchor:</strong> 9,000 units/$58,000 and 5,000 units/$38,000 → $5.00 per unit variable, $13,000 fixed; 7,000 units → $48,000.</p>
<p><strong>Watch out:</strong> Unit cost falls with volume because fixed cost spreads — that is arithmetic, not efficiency. And every behavior claim is "within the relevant range."</p>
<p><strong>Self-check:</strong> Given any cost, ask three questions: Can I trace it? Does it attach to inventory? Does it move with activity? If you can answer all three, you can classify it.</p>
`
};
