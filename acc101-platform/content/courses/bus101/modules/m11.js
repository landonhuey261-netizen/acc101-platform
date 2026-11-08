// bus101 - Module 11: Business Math Foundations: Percentages, Margins & Growth Rates
module.exports = {
  "number": 11,
  "slug": "business-math-foundations",
  "title": "Business Math Foundations: Percentages, Margins & Growth Rates",
  "estTime": "3–4 hours",
  "objectives": [
    "Compute markup and margin and explain why they are different numbers.",
    "Calculate growth rates and compare businesses on a like-for-like basis.",
    "Find the break-even point in units and in dollars.",
    "Compute simple interest and compound growth with worked examples.",
    "Compare unit prices to find the genuinely cheaper option."
  ],
  "sections": [
    {
      "heading": "Percentages: The Language of Business Numbers",
      "html": "<p>Almost every business number is a percentage: a margin, a growth rate, a discount, a tax rate. The rule is always the same — a percentage is a part divided by the whole, times 100. If sales grow from $80,000 to $92,000, the growth is $92,000 − $80,000 = $12,000, and the growth rate is $12,000 ÷ $80,000 = 0.15 = <strong>15%</strong>. The denominator matters: the growth is measured against where you started, not where you ended.</p>\n<p>A discount works the same way. A $200 jacket at 25% off costs $200 × (1 − 0.25) = $200 × 0.75 = <strong>$150</strong>. And a percentage point is not the same as a percent: a margin rising from 20% to 25% has risen by 5 percentage points, but by 25% in relative terms (5 ÷ 20 = 0.25). Managers who mix the two up misread their own reports.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Always ask \"percent of what?\" The denominator is the whole story: growth is a percent of the starting value, margin is a percent of the selling price, markup is a percent of the cost.</div>"
    },
    {
      "heading": "Markup vs. Margin: Two Different Numbers",
      "html": "<p><strong>Markup</strong> is the profit added to cost, as a percentage of cost. <strong>Margin</strong> is the profit kept from the selling price, as a percentage of price. They describe the same sale and give different numbers — which is exactly why they are confused so often.</p>\n<p><strong>Worked example:</strong> A shop buys a lamp for $40 and sells it for $60. The profit is $60 − $40 = $20. Markup = $20 ÷ $40 (cost) = 0.50 = <strong>50%</strong>. Margin = $20 ÷ $60 (price) = 0.333 = <strong>33.3%</strong>. The same $20 is a 50% markup and a 33.3% margin. If a manager sets prices by saying \"we need a 40% margin\" but applies a 40% markup instead, the price comes out too low: cost $40 × 1.40 = $56, a margin of only ($56 − $40) ÷ $56 = 28.6% — not the 40% they wanted.</p>\n<div class=\"formula\">Markup = (Price − Cost) ÷ Cost &nbsp;|&nbsp; Margin = (Price − Cost) ÷ Price</div>"
    },
    {
      "heading": "Break-Even: How Much Must You Sell?",
      "html": "<p><strong>Break-even</strong> is the sales level where revenue exactly covers costs — no profit, no loss. It is the first question of any new product: how many must we sell before we start making money? The formula uses <strong>contribution margin</strong>, the profit from each unit after its variable cost: contribution = price − variable cost per unit. Break-even units = fixed costs ÷ contribution per unit.</p>\n<p><strong>Worked example:</strong> A food stall has fixed costs of $12,000 a month (rent, insurance, wages). It sells a meal for $30 with a variable cost of $18 (ingredients and packaging). Contribution per meal = $30 − $18 = <strong>$12</strong>. Break-even units = $12,000 ÷ $12 = <strong>1,000 meals a month</strong>. Break-even revenue = 1,000 × $30 = <strong>$30,000 a month</strong>. Every meal after the 1,000th contributes $12 toward profit — sell 1,200 and profit is 200 × $12 = <strong>$2,400</strong>.</p>"
    },
    {
      "heading": "Growth Over Time: Simple and Compound",
      "html": "<p>Money grows in two ways. <strong>Simple interest</strong> pays interest only on the original amount: $5,000 at 6% a year for 2 years earns $5,000 × 0.06 × 2 = <strong>$600</strong>, for a total of $5,600. <strong>Compound growth</strong> pays interest on the interest too: $10,000 growing at 10% a year for 2 years becomes $10,000 × 1.10 × 1.10 = $10,000 × 1.21 = <strong>$12,100</strong> — the extra $100 over the simple $12,000 is the interest earned on the first year's $1,000 of growth.</p>\n<p>Compounding is why small differences in growth rate matter so much over time, and why a business that grows 15% a year doubles in about five years. It is also the math behind loans: the same compounding that grows savings grows debts, which is why fin101 treats the time value of money in full.</p>\n<p><strong>Unit prices — the everyday check:</strong> A 12-pack of paper towels costs $6.00, so each roll is $6.00 ÷ 12 = <strong>$0.50</strong>. A 6-pack costs $3.60, so each roll is $3.60 ÷ 6 = <strong>$0.60</strong>. The 12-pack is cheaper per roll even though its total price is higher — the total price is not the price that matters.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Growth rate = change ÷ starting value. Discount price = price × (1 − discount rate).</li>\n<li>Markup is profit ÷ cost; margin is profit ÷ price — same sale, different numbers.</li>\n<li>Break-even units = fixed costs ÷ (price − variable cost per unit).</li>\n<li>Simple interest = principal × rate × time. Compound growth multiplies by (1 + rate) each period.</li>\n<li>Compare unit prices, not total prices.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Using markup when you mean margin. A 50% markup is a 33.3% margin — price with the wrong one and you give away a third of your intended profit.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Measuring growth against the new value instead of the old one. Growth from $80,000 to $92,000 is $12,000 ÷ $80,000 = 15%, not $12,000 ÷ $92,000 = 13%.</div>\n<p><strong>Ready-to-Work link:</strong> These five calculations — margin, growth, break-even, interest, unit price — are the daily arithmetic of every business job in this program. acc102 and fin101 build on them with cost-volume-profit analysis and the time value of money.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Markup",
      "def": "Profit as a percentage of cost: (price − cost) ÷ cost."
    },
    {
      "term": "Margin",
      "def": "Profit as a percentage of selling price: (price − cost) ÷ price."
    },
    {
      "term": "Gross profit",
      "def": "Revenue minus the cost of the goods sold."
    },
    {
      "term": "Gross margin",
      "def": "Gross profit divided by revenue."
    },
    {
      "term": "Growth rate",
      "def": "The change in a value divided by its starting value, as a percentage."
    },
    {
      "term": "Percentage point",
      "def": "An absolute difference between two percentages (20% to 25% is 5 percentage points)."
    },
    {
      "term": "Fixed costs",
      "def": "Costs that do not change with the number of units sold, such as rent and insurance."
    },
    {
      "term": "Variable costs",
      "def": "Costs that change with the number of units sold, such as materials per unit."
    },
    {
      "term": "Contribution margin",
      "def": "Price minus variable cost per unit — what each sale contributes toward fixed costs and profit."
    },
    {
      "term": "Break-even point",
      "def": "The sales level where revenue exactly equals total costs — zero profit, zero loss."
    },
    {
      "term": "Break-even units",
      "def": "Fixed costs divided by contribution margin per unit."
    },
    {
      "term": "Simple interest",
      "def": "Interest calculated only on the original principal amount."
    },
    {
      "term": "Compound growth",
      "def": "Growth where each period's gain earns further gains in later periods."
    },
    {
      "term": "Unit price",
      "def": "The price of one unit of a product, used to compare pack sizes fairly."
    },
    {
      "term": "Cost of goods sold",
      "def": "The direct cost of the products a business sells, including materials and direct labor."
    }
  ],
  "video": {
    "title": "How to Calculate Markup and Profit Margin | Formulas & Calculation",
    "embedUrl": "https://www.youtube.com/embed/ZoAxtLI8A2A",
    "note": "Works through markup and margin formulas with numbers. Follow along with the lamp example in this module and check that your markup and margin match the video's method.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A shop buys a lamp for $40 and sells it for $60. (a) What is the profit? (b) What is the markup? (c) What is the margin?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Profit = $60 − $40 = <strong>$20</strong>. Step 2: Markup = $20 ÷ $40 (cost) = 0.50 = <strong>50%</strong>. Step 3: Margin = $20 ÷ $60 (price) = 0.333 = <strong>33.3%</strong>. Step 4: Same $20, two different percentages — markup is measured against cost, margin against price.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Sales grow from $80,000 to $92,000 in a year. (a) What is the growth in dollars? (b) What is the growth rate? (c) Why is the starting value the denominator?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Growth = $92,000 − $80,000 = <strong>$12,000</strong>. Step 2: Growth rate = $12,000 ÷ $80,000 = 0.15 = <strong>15%</strong>. Step 3: The starting value is the base the growth grew from — measuring against $92,000 would give $12,000 ÷ $92,000 = 13%, which understates how much the business actually grew from where it began.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A food stall has fixed costs of $12,000 a month, sells a meal for $30, and has a variable cost of $18 per meal. (a) What is the contribution per meal? (b) How many meals must it sell to break even? (c) What is the break-even revenue? (d) If it sells 1,200 meals, what is its profit?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Contribution = $30 − $18 = <strong>$12</strong> per meal. Step 2: Break-even units = $12,000 ÷ $12 = <strong>1,000 meals</strong>. Step 3: Break-even revenue = 1,000 × $30 = <strong>$30,000</strong>. Step 4: Profit at 1,200 meals = (1,200 − 1,000) × $12 = 200 × $12 = <strong>$2,400</strong>. Each meal past break-even adds its full $12 contribution to profit.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> (a) What simple interest does $5,000 earn at 6% a year for 2 years, and what is the total? (b) What does $10,000 become after 2 years growing at 10% compounded annually?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Simple interest = $5,000 × 0.06 × 2 = <strong>$600</strong>; total = $5,000 + $600 = <strong>$5,600</strong>. Step 2: Compound: year 1 gives $10,000 × 1.10 = $11,000; year 2 gives $11,000 × 1.10 = <strong>$12,100</strong>. Step 3: The $100 extra over the simple $12,000 is interest earned on the first year's $1,000 of growth — that is compounding.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A $200 jacket is on sale at 25% off. (a) What is the sale price? (b) If the shop's cost for the jacket is $110, what is the profit and margin at the sale price?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Sale price = $200 × (1 − 0.25) = $200 × 0.75 = <strong>$150</strong>. Step 2: Profit = $150 − $110 = <strong>$40</strong>. Step 3: Margin = $40 ÷ $150 = 0.2667 = <strong>26.7%</strong>. Step 4: The discount cut the margin from ($200 − $110) ÷ $200 = 45% to 26.7% — discounts are paid for out of margin.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A 12-pack of paper towels costs $6.00 and a 6-pack costs $3.60. (a) What is the unit price of each? (b) Which is the better buy, and by how much per roll?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 12-pack: $6.00 ÷ 12 = <strong>$0.50 per roll</strong>. Step 2: 6-pack: $3.60 ÷ 6 = <strong>$0.60 per roll</strong>. Step 3: The 12-pack is the better buy by $0.60 − $0.50 = <strong>$0.10 per roll</strong>, even though its total price is higher. Compare unit prices, not total prices.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A shop buys a lamp for $40 and sells it for $60. The markup is:",
      "choices": [
        "20%",
        "33.3%",
        "50%",
        "60%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Profit is $20; markup is $20 ÷ $40 (cost) = 50%. (a) is the profit in dollars as a number. (b) is the margin, measured against price. (d) is the price as a share of $100, not a markup."
    },
    {
      "q": "The same lamp's margin is:",
      "choices": [
        "20%",
        "33.3%",
        "50%",
        "66.7%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Margin is $20 ÷ $60 (price) = 33.3%. (a) is the profit in dollars. (c) is the markup, measured against cost. (d) is the cost as a share of price."
    },
    {
      "q": "Sales grow from $80,000 to $92,000. The growth rate is:",
      "choices": [
        "12%",
        "13%",
        "15%",
        "20%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). $12,000 ÷ $80,000 = 15%. (a) is $12,000 as a share of $100,000. (b) measures against the new value, $92,000. (d) would need growth of $16,000."
    },
    {
      "q": "A stall has fixed costs of $12,000, price $30, variable cost $18. Break-even units are:",
      "choices": [
        "400",
        "667",
        "1,000",
        "1,200"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Contribution is $30 − $18 = $12; $12,000 ÷ $12 = 1,000. (a) divides by $30, the price. (b) divides by $18, the variable cost. (d) is the sales level in the profit example, not break-even."
    },
    {
      "q": "At 1,200 meals the stall's profit is:",
      "choices": [
        "$0",
        "$1,200",
        "$2,400",
        "$36,000"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 200 meals past break-even × $12 contribution = $2,400. (a) is the profit at break-even. (b) is 100 meals' contribution. (d) is the revenue from 1,200 meals, not profit."
    },
    {
      "q": "$5,000 at 6% simple interest for 2 years earns:",
      "choices": [
        "$300",
        "$600",
        "$660",
        "$1,200"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $5,000 × 0.06 × 2 = $600. (a) is one year's interest. (c) is roughly the compound amount for a different principal. (d) would be 6% for 4 years."
    },
    {
      "q": "$10,000 growing at 10% compounded for 2 years becomes:",
      "choices": [
        "$12,000",
        "$12,100",
        "$12,200",
        "$12,210"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $10,000 × 1.10 × 1.10 = $12,100. (a) is the simple-interest result. (c) adds $100 twice. (d) is the result for more than two years."
    },
    {
      "q": "A 12-pack costs $6.00 and a 6-pack $3.60. The cheaper option per roll is the:",
      "choices": [
        "6-pack at $0.50 a roll",
        "12-pack at $0.50 a roll",
        "12-pack at $0.60 a roll",
        "6-pack at $0.60 a roll — it is cheaper"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 12-pack: $6.00 ÷ 12 = $0.50; 6-pack: $3.60 ÷ 6 = $0.60, so the 12-pack wins by $0.10 a roll. (a) swaps the prices. (c) misstates the 12-pack's unit price. (d) The 6-pack's $0.60 is higher, not lower."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Business Math Foundations: Quick Reference</h3>\n<p><strong>Percentages:</strong> growth = change ÷ starting value. Discount price = price × (1 − discount rate). A margin rising from 20% to 25% is 5 percentage points, or 25% in relative terms.</p>\n<p><strong>Markup vs. margin:</strong> Markup = (price − cost) ÷ cost; Margin = (price − cost) ÷ price. Anchor: $40 cost, $60 price → $20 profit, 50% markup, 33.3% margin.</p>\n<p><strong>Break-even:</strong> contribution = price − variable cost; break-even units = fixed costs ÷ contribution. Anchor: $12,000 ÷ ($30 − $18) = 1,000 meals; break-even revenue $30,000; profit at 1,200 meals = 200 × $12 = $2,400.</p>\n<p><strong>Interest:</strong> simple: $5,000 × 6% × 2 = $600. Compound: $10,000 × 1.10² = $12,100.</p>\n<p><strong>Unit price:</strong> $6.00 ÷ 12 = $0.50/roll beats $3.60 ÷ 6 = $0.60/roll.</p>\n<p><strong>Watch out:</strong> Markup is not margin, and growth is measured against where you started.</p>\n<p><strong>Self-check:</strong> Take any price in a store, estimate the cost, and compute both the markup and the margin — then ask which one the store actually manages.</p>\n"
};
