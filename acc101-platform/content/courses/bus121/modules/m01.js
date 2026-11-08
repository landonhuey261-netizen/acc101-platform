// BUS 121 - Module 1: Business Math Foundations: The Numbers Every Manager Needs
module.exports = {
  number: 1,
  slug: "business-math-foundations",
  title: "Business Math Foundations: The Numbers Every Manager Needs",
  estTime: "3–4 hours",
  objectives: [
    "Compute percentages, percent change, and growth rates.",
    "Distinguish markup from margin and convert between them.",
    "Compute discounts, sale prices, and the effect of a discount on margin.",
    "Compute simple and compound growth over multiple periods.",
    "Apply these tools to pricing, payroll, and sales decisions."
  ],
  sections: [
    {
      heading: "Percentages: The Language of Business Numbers",
      html: `
<p>Almost every business number is a percentage in disguise: a margin, a growth rate, a discount, a tax rate, a commission. The core skill is moving fluently between a number, a percent of a number, and a percent change. Percent change = (new value − old value) ÷ old value. A price that rises from $80 to $100 has risen by (100 − 80) ÷ 80 = 25%. A price that falls from $100 to $80 has fallen by 20% — the same $20 move, a different percent, because the base changed. Always ask: percent of what?</p>
<p><strong>Worked example:</strong> Sales rise from $240,000 to $300,000. Growth = (300,000 − 240,000) ÷ 240,000 = 60,000 ÷ 240,000 = <strong>25%</strong>. If sales then fall back to $240,000, the fall is (240,000 − 300,000) ÷ 300,000 = <strong>−20%</strong>. Up 25% and down 20% return to the same place — percentages are not symmetric, and forgetting that is the most common arithmetic error in business.</p>
<div class="callout"><strong>Key idea:</strong> A percent is always a fraction of a specific base. Change the base and you change the percent, even when the dollars do not move.</div>`
    },
    {
      heading: "Markup vs. Margin: The Pricing Mix-Up",
      html: `
<p><strong>Markup</strong> is profit divided by cost: how much did you add on top of what you paid? <strong>Margin</strong> is profit divided by selling price: how much of each sales dollar is profit? The same sale has two different percentages, and confusing them quietly underprices everything you sell.</p>
<p><strong>Worked example:</strong> An item costs $60 and sells for $100. Profit is $40. Markup = 40 ÷ 60 = <strong>66.7%</strong>. Margin = 40 ÷ 100 = <strong>40%</strong>. The conversions: margin = markup ÷ (1 + markup) — 0.667 ÷ 1.667 = 40%. Markup = margin ÷ (1 − margin) — 0.40 ÷ 0.60 = 66.7%. And the price for a target margin is cost ÷ (1 − margin): for a 40% margin on a $60 cost, price = 60 ÷ 0.60 = <strong>$100</strong>. A manager who wants a 40% margin and prices with a 40% markup instead charges $84 — and earns a margin of only 24 ÷ 84 = 28.6%.</p>
<div class="callout"><strong>Key idea:</strong> Margin is the number on your income statement, so margin is the one to plan with. Markup is a pricing shortcut — useful only if you convert it correctly.</div>`
    },
    {
      heading: "Discounts: Where Margin Goes to Die",
      html: `
<p>A discount comes entirely out of the profit slice. An item that costs $60 and sells for $100 has a 40% margin. Offer 20% off and the price falls to $80; profit falls to $20 and margin falls to 20 ÷ 80 = <strong>25%</strong> — not 32%, because the $20 discount is 20% of the price but 50% of the profit. That is why a 20% off sale needs far more volume to break even than the discount suggests: at $20 of profit per unit instead of $40, the store must sell twice as many units to earn the same gross profit.</p>
<p><strong>Worked example:</strong> A shop sells 1,000 units a month at $100 with a $60 cost, earning 1,000 × 40 = $40,000 of gross profit. With a 20% discount it earns $20 per unit, so it needs 40,000 ÷ 20 = <strong>2,000 units</strong> to earn the same $40,000 — double the volume. If the sale only lifts volume to 1,500 units, gross profit is 1,500 × 20 = $30,000: the promotion cost $10,000.</p>`
    },
    {
      heading: "Growth Rates and Compounding",
      html: `
<p>Growth compounds. A business growing 10% a year does not grow 50% in five years; it grows by a factor of 1.10^5 = 1.6105, or <strong>61.05%</strong>. The formula for the value after n periods is: future value = present value × (1 + rate)^n. And the compound annual growth rate (CAGR) reverses it: CAGR = (ending value ÷ beginning value)^(1/n) − 1.</p>
<p><strong>Worked example:</strong> Sales grow from $200,000 to $322,102 over 5 years. CAGR = (322,102 ÷ 200,000)^(1/5) − 1 = (1.61051)^(0.2) − 1 = 1.10 − 1 = <strong>10% per year</strong>. The same math prices a simple question every manager asks: if we grow 10% a year, when do we double? At 10%, doubling takes about 7.2 years (the rule of 72: 72 ÷ 10 ≈ 7.2). At 5%, it takes about 14.4 years.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Percent change = (new − old) ÷ old. Up 25% then down 20% returns to the start — percentages are not symmetric.</li>
<li>Markup = profit ÷ cost; margin = profit ÷ price. Margin = markup ÷ (1 + markup); price for a target margin = cost ÷ (1 − margin).</li>
<li>A discount comes out of profit, not out of cost: a 20% discount on a 40%-margin item leaves a 25% margin.</li>
<li>Growth compounds: future value = present value × (1 + rate)^n; CAGR reverses the calculation.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Pricing with a markup when you meant a margin. A 40% markup is a 28.6% margin — the difference is real money on every sale.</div>
<div class="callout"><strong>Common mistake:</strong> Adding growth rates across years. 10% + 10% is not 20% growth over two years — it is 21%, because the second year's 10% applies to a larger base.</div>
<p><strong>Ready-to-work link:</strong> These are the numbers in every later module: margins in ACC 102's CVP analysis, growth rates in forecasting, and percentages in every chart you will build in Module 4.</p>`
    }
  ],
  keyTerms: [
    { term: "Percent change", def: "The change in a value divided by the original value: (new − old) ÷ old." },
    { term: "Markup", def: "Profit divided by cost; how much is added on top of cost to set a price." },
    { term: "Margin (gross margin)", def: "Profit divided by selling price; the share of each sales dollar kept as profit." },
    { term: "Selling price", def: "The price charged to the customer; cost plus markup." },
    { term: "Discount", def: "A reduction in selling price, which comes entirely out of the profit slice." },
    { term: "Growth rate", def: "The percent change in a value over a period." },
    { term: "Compound growth", def: "Growth where each period's increase applies to the larger, already-grown base." },
    { term: "CAGR", def: "Compound annual growth rate: the steady annual rate that takes a beginning value to an ending value over n years." },
    { term: "Future value", def: "The value of an amount after growth or interest over n periods." },
    { term: "Present value", def: "The value today of a future amount, discounted at a given rate." },
    { term: "Rule of 72", def: "A shortcut: years to double ≈ 72 ÷ annual growth rate in percent." },
    { term: "Commission", def: "Pay based on a percentage of sales." },
    { term: "Break-even volume", def: "The units that must be sold for revenue to equal total cost (developed fully in ACC 102)." },
    { term: "Base (of a percent)", def: "The value a percentage is computed from; changing the base changes the percent." }
  ],
  video: {
    title: "Markup vs. Margin: The Pricing Mistake That Costs You",
    embedUrl: "https://www.youtube.com/embed/TRtkw9UK7gQ",
    note: "A plain-language walk-through of the markup vs. margin mix-up: a $60 cost and a $100 price is a 66.7% markup but a 40% margin, and pricing with the wrong one underprices every sale. Watch it, then redo the module's $60/$100 example and confirm both percentages.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Sales rise from $240,000 to $300,000. (a) What is the percent increase? (b) If sales then fall back to $240,000, what is the percent decrease?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Increase = (300,000 − 240,000) ÷ 240,000 = 60,000 ÷ 240,000 = <strong>25%</strong>. Step 2: Decrease = (240,000 − 300,000) ÷ 300,000 = −60,000 ÷ 300,000 = <strong>−20%</strong>. The same $60,000 move is 25% up and 20% down because the base changed.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> An item costs $60 and sells for $100. Compute (a) profit, (b) markup percent, and (c) margin percent. (d) What price gives a 40% margin on the $60 cost?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Profit = 100 − 60 = <strong>$40</strong>. Step 2: Markup = 40 ÷ 60 = <strong>66.7%</strong>. Step 3: Margin = 40 ÷ 100 = <strong>40%</strong>. Step 4: Price for 40% margin = 60 ÷ (1 − 0.40) = 60 ÷ 0.60 = <strong>$100</strong> — which checks out, since $100 is the current price.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A manager wants a 30% margin on an item that costs $70. (a) What price should she charge? (b) What markup percent is that? (c) If she instead adds a 30% markup, what price and margin result?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Price = 70 ÷ (1 − 0.30) = 70 ÷ 0.70 = <strong>$100</strong>. Step 2: Markup = (100 − 70) ÷ 70 = 30 ÷ 70 = <strong>42.9%</strong>. Step 3: A 30% markup gives price 70 × 1.30 = $91; margin = 21 ÷ 91 = <strong>23.1%</strong> — well short of the 30% target.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A shop sells 1,000 units a month at $100 with a $60 cost. It offers a 20% discount. (a) What is the new price, profit per unit, and margin? (b) How many units must it sell to earn the same $40,000 of monthly gross profit?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: New price = 100 × 0.80 = <strong>$80</strong>; profit = 80 − 60 = <strong>$20</strong>; margin = 20 ÷ 80 = <strong>25%</strong>. Step 2: Original gross profit = 1,000 × 40 = $40,000. Step 3: Units needed = 40,000 ÷ 20 = <strong>2,000 units</strong> — double the volume.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Sales grow from $200,000 to $322,102 over 5 years. (a) What is the total percent growth? (b) What is the CAGR?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Total growth = (322,102 − 200,000) ÷ 200,000 = 122,102 ÷ 200,000 = <strong>61.05%</strong>. Step 2: CAGR = (322,102 ÷ 200,000)^(1/5) − 1 = (1.61051)^(0.2) − 1 = <strong>10% per year</strong>. Check: 200,000 × 1.10^5 = 200,000 × 1.61051 = $322,102.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A salesperson earns a 5% commission on sales. In a month she sells $80,000 of goods. (a) What is her commission? (b) If her employer raises the rate to 6% and sales stay at $80,000, what is the new commission and the percent increase in her pay?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Commission = 5% × 80,000 = <strong>$4,000</strong>. Step 2: New commission = 6% × 80,000 = <strong>$4,800</strong>. Step 3: Increase = (4,800 − 4,000) ÷ 4,000 = <strong>20%</strong> — a one-point rate rise is a 20% pay rise because the base was 5%.</p>"
    }
  ],
  quiz: [
    {
      q: "Sales rise from $240,000 to $300,000. The percent increase is:",
      choices: ["20%", "25%", "60%", "30%"],
      answer: 1,
      explanation: "Correct: (b). (300,000 − 240,000) ÷ 240,000 = 25%. (a) divides by the new value. (c) is the dollar change in thousands. (d) is an invented round number."
    },
    {
      q: "Cost $60, price $100. Markup is 66.7% and margin is 40%. The difference exists because:",
      choices: ["Markup divides by cost and margin divides by price", "Markup and margin are the same number", "Margin includes tax", "Markup is computed after discounts only"],
      answer: 0,
      explanation: "Correct: (a). Same $40 profit, different denominators: 40 ÷ 60 vs. 40 ÷ 100. (b) is the error this module corrects. (c) and (d) are irrelevant."
    },
    {
      q: "A manager wants a 30% margin on a $70 cost. The correct price is:",
      choices: ["$91", "$100", "$70", "$121"],
      answer: 1,
      explanation: "Correct: (b). 70 ÷ (1 − 0.30) = $100. (a) is the price from a 30% markup, which gives only a 23.1% margin. (c) is cost with no profit. (d) adds a 42.9% markup twice over."
    },
    {
      q: "A 40%-margin item is discounted 20%. The new margin is:",
      choices: ["32%", "20%", "25%", "40%"],
      answer: 2,
      explanation: "Correct: (c). Price falls to $80 on a $60 cost, profit $20, margin 20 ÷ 80 = 25%. (a) subtracts 20% from 40% as if percentages added. (b) is the discount rate, not the margin. (d) ignores the discount."
    },
    {
      q: "Sales grow 10% a year for 5 years. Total growth is:",
      choices: ["50%", "61.05%", "10%", "110%"],
      answer: 1,
      explanation: "Correct: (b). 1.10^5 = 1.6105, so 61.05%. (a) adds the rates, ignoring compounding. (c) is one year's growth. (d) adds 100% to the rate."
    },
    {
      q: "CAGR from $200,000 to $322,102 over 5 years is:",
      choices: ["12.2%", "10%", "61.05%", "5%"],
      answer: 1,
      explanation: "Correct: (b). (322,102 ÷ 200,000)^(1/5) − 1 = 10%. (a) divides total growth by 5, which ignores compounding. (c) is total growth, not annual. (d) is half the true rate."
    },
    {
      q: "A 5% commission on $80,000 of sales is:",
      choices: ["$400", "$4,000", "$8,000", "$40,000"],
      answer: 1,
      explanation: "Correct: (b). 0.05 × 80,000 = $4,000. (a) is 0.5%. (c) is 10%. (d) is 50%."
    },
    {
      q: "Why is margin the number to plan with, rather than markup?",
      choices: ["Margin is always larger", "Margin is the number on the income statement — the share of each sales dollar kept as profit", "Markup is illegal", "Margin never changes"],
      answer: 1,
      explanation: "Correct: (b). The income statement reports margin, so planning to a margin target keeps pricing consistent with reported profit. (a) is false — markup is larger than margin for the same sale. (c) is false. (d) is false — discounts change margin."
    }
  ],
  studyGuide: `
<h3>Module 1 — Business Math Foundations: Quick Reference</h3>
<p><strong>Percent change:</strong> (New − Old) ÷ Old. Up 25% then down 20% returns to the start.</p>
<div class="formula">Markup = Profit ÷ Cost &nbsp;|&nbsp; Margin = Profit ÷ Price &nbsp;|&nbsp; Price for target margin = Cost ÷ (1 − Margin)</div>
<p><strong>Anchor:</strong> Cost $60, price $100, profit $40 → markup 66.7%, margin 40%. A 30% margin on a $70 cost needs a $100 price (42.9% markup); a 30% markup gives $91 and only a 23.1% margin.</p>
<p><strong>Discounts:</strong> A 20% discount on a 40%-margin item leaves a 25% margin — and needs double the volume to earn the same gross profit.</p>
<p><strong>Growth:</strong> Future value = Present value × (1 + rate)^n. 10% for 5 years = 61.05% total. CAGR = (End ÷ Start)^(1/n) − 1.</p>
<p><strong>Watch out:</strong> Always name the base of a percent, and never add growth rates across years.</p>
<p><strong>Self-check:</strong> Given any cost and any target margin, compute the price, the markup, and the margin after a 10% discount — all by hand.</p>
`
};
