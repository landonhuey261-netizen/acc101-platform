// ACC 102 - Module 5: Cost-Volume-Profit Analysis & Break-Even
module.exports = {
  number: 5,
  slug: "cost-volume-profit-analysis-break-even",
  title: "Cost-Volume-Profit Analysis & Break-Even",
  estTime: "3–4 hours",
  objectives: [
    "Compute contribution margin per unit, contribution margin ratio, and operating income.",
    "Compute the break-even point in units and in sales dollars.",
    "Compute the sales needed to reach a target profit.",
    "Compute margin of safety in dollars, units, and percent.",
    "Explain the assumptions behind CVP analysis and what happens when they break."
  ],
  sections: [
    {
      heading: "Contribution Margin: The Engine of CVP",
      html: `
<p>Every unit sold brings in a selling price and carries a variable cost. The difference — <strong>contribution margin per unit</strong> — is what the unit contributes toward covering fixed costs and then toward profit. Until fixed costs are covered, every contribution margin dollar pays rent, salaries, and insurance. After that, every contribution margin dollar is profit.</p>
<div class="formula">Contribution margin per unit = Selling price − Variable cost per unit &nbsp;|&nbsp; Contribution margin ratio = CM per unit ÷ Selling price</div>
<p><strong>Worked example:</strong> A candle sells for $40 with variable cost of $24 per unit. Contribution margin per unit = 40 − 24 = <strong>$16</strong>. Contribution margin ratio = 16 ÷ 40 = <strong>40%</strong> — forty cents of every sales dollar is available to cover fixed costs and profit. At 7,500 units, total contribution margin is 7,500 × 16 = $120,000; with fixed costs of $96,000, operating income is 120,000 − 96,000 = <strong>$24,000</strong>.</p>
<div class="callout"><strong>Key idea:</strong> Contribution margin is not profit and it is not gross margin. Gross margin subtracts all product costs, including fixed manufacturing overhead; contribution margin subtracts only variable costs, of every kind.</div>`
    },
    {
      heading: "Break-Even: Where Profit Is Zero",
      html: `
<p>The <strong>break-even point</strong> is the volume at which total revenue equals total cost — operating income is exactly zero. It is the first number any manager wants for a new product, a new price, or a new store, because it states the minimum the business must do to survive.</p>
<div class="formula">Break-even units = Fixed costs ÷ Contribution margin per unit &nbsp;|&nbsp; Break-even dollars = Fixed costs ÷ Contribution margin ratio</div>
<p><strong>Worked example:</strong> Fixed costs $96,000, contribution margin $16 per unit, ratio 40%. Break-even units = 96,000 ÷ 16 = <strong>6,000 units</strong>. Break-even dollars = 96,000 ÷ 0.40 = <strong>$240,000</strong>. Check: 6,000 × $40 = $240,000 of revenue; variable cost 6,000 × 24 = $144,000; total cost 144,000 + 96,000 = $240,000. Revenue equals total cost, so profit is zero — exactly as required.</p>`
    },
    {
      heading: "Target Profit and Margin of Safety",
      html: `
<p>Break-even is survival; <strong>target profit</strong> is the goal. The same formula, with the target added to fixed costs, gives the volume needed to earn a chosen profit: (Fixed costs + Target profit) ÷ Contribution margin per unit. To earn $32,000 with the numbers above: (96,000 + 32,000) ÷ 16 = 128,000 ÷ 16 = <strong>8,000 units</strong>, or $320,000 of sales. Check: 8,000 × 16 = $128,000 of contribution margin, minus $96,000 fixed = $32,000.</p>
<p><strong>Margin of safety</strong> measures how far sales can fall before the company starts losing money: actual (or budgeted) sales minus break-even sales. At 7,500 units, sales are $300,000 and break-even is $240,000, so margin of safety is <strong>$60,000</strong>, or 60,000 ÷ 300,000 = <strong>20%</strong>. A 20% margin of safety means sales can drop by one-fifth before losses begin. A thin margin of safety is a warning: the company is close to the edge, and a small sales dip turns profit into loss.</p>`
    },
    {
      heading: "What Changes the Break-Even Point",
      html: `
<p>Three levers move break-even. Raise the selling price and contribution margin rises, so break-even falls. Cut variable cost per unit and the same thing happens. Cut fixed costs and break-even falls directly, dollar for dollar. That is why managers argue about all three: a price increase, a cheaper supplier, and a smaller lease all do the same job through different doors.</p>
<p>But the levers interact. Raising price may cut volume; cutting variable cost may cut quality and then volume; cutting fixed cost may mean cutting the advertising that brings volume. CVP analysis shows the arithmetic of each lever in isolation. Judgment is deciding which lever to pull when the others move in response.</p>
<p><strong>Worked check:</strong> If the candle's price rises from $40 to $44 while variable cost stays $24, contribution margin becomes $20 and break-even falls to 96,000 ÷ 20 = 4,800 units. If instead variable cost rises to $28 at the $40 price, contribution margin falls to $12 and break-even rises to 96,000 ÷ 12 = 8,000 units. Same fixed costs, very different risk.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Contribution margin per unit = price − variable cost per unit; ratio = CM per unit ÷ price.</li>
<li>Break-even units = fixed costs ÷ CM per unit; break-even dollars = fixed costs ÷ CM ratio.</li>
<li>Target profit units = (fixed costs + target profit) ÷ CM per unit.</li>
<li>Margin of safety = actual sales − break-even sales; also as a percent of actual sales.</li>
<li>CVP assumes price, variable cost per unit, and fixed costs are constant within the relevant range, and that all units produced are sold.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Computing break-even in dollars by dividing fixed costs by the contribution margin per unit. That gives units, not dollars — use the ratio for dollars.</div>
<div class="callout"><strong>Common mistake:</strong> Treating break-even as a goal. Break-even is zero profit. A business that "hits break-even" has survived the month and earned nothing. Aim for target profit, and watch the margin of safety.</div>
<p><strong>Ready-to-work link:</strong> The CVP lab in this course rebuilds these numbers in a spreadsheet workpaper. If you can do this module's worked example by hand, the lab will feel like the same problem with a better tool.</p>`
    }
  ],
  keyTerms: [
    { term: "Contribution margin per unit", def: "Selling price minus variable cost per unit — what each unit contributes toward fixed costs and profit." },
    { term: "Contribution margin ratio", def: "Contribution margin per unit divided by selling price; the share of each sales dollar available for fixed costs and profit." },
    { term: "Break-even point", def: "The sales volume at which total revenue equals total cost and operating income is zero." },
    { term: "Fixed costs", def: "Costs that stay constant in total within the relevant range, such as rent and salaries." },
    { term: "Variable costs", def: "Costs that change in total with volume, such as materials and sales commissions." },
    { term: "Operating income", def: "Total contribution margin minus fixed costs; profit from operations before interest and taxes." },
    { term: "Target profit", def: "A chosen profit level; the sales needed to reach it are (fixed costs + target profit) ÷ CM per unit." },
    { term: "Margin of safety", def: "Actual or budgeted sales minus break-even sales; how far sales can fall before losses begin." },
    { term: "Margin of safety percent", def: "Margin of safety in dollars divided by actual or budgeted sales." },
    { term: "CVP analysis", def: "Cost-volume-profit analysis: the study of how price, volume, variable cost, and fixed cost interact to determine profit." },
    { term: "Sales mix", def: "The proportion of total sales made up by each product, which affects overall contribution margin." },
    { term: "Operating leverage", def: "The use of fixed costs in the cost structure; high leverage means profit swings more with volume." },
    { term: "Degree of operating leverage", def: "Contribution margin divided by operating income; measures how sensitive profit is to a change in sales." },
    { term: "Relevant range", def: "The activity band over which CVP assumptions (constant price, variable cost per unit, fixed costs) hold." }
  ],
  video: {
    title: "🔴 3 Minutes! Break Even Analysis Explained for CVP Cost Volume Profit Analysis",
    embedUrl: "https://www.youtube.com/embed/LDEyu1TR0Rs",
    note: "A three-minute visual tour of break-even and CVP: fixed costs, variable costs, and the point where revenue and total cost cross. Watch it, then redo the module's worked example — $40 price, $24 variable cost, $96,000 fixed — and confirm 6,000 units and $240,000.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A candle sells for $40, variable cost is $24 per unit, fixed costs are $96,000 per month. Compute (a) contribution margin per unit, (b) contribution margin ratio, (c) break-even units, and (d) break-even dollars.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: CM per unit = 40 − 24 = <strong>$16</strong>. Step 2: CM ratio = 16 ÷ 40 = <strong>40%</strong>. Step 3: Break-even units = 96,000 ÷ 16 = <strong>6,000 units</strong>. Step 4: Break-even dollars = 96,000 ÷ 0.40 = <strong>$240,000</strong>. Check: 6,000 × 40 = 240,000; variable cost 6,000 × 24 = 144,000; total cost 144,000 + 96,000 = 240,000.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Using the same candle ($40 price, $24 variable cost, $96,000 fixed): (a) How many units must be sold to earn a target profit of $32,000? (b) What is operating income at 7,500 units?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Target units = (96,000 + 32,000) ÷ 16 = 128,000 ÷ 16 = <strong>8,000 units</strong>. Step 2: At 7,500 units, total CM = 7,500 × 16 = $120,000; operating income = 120,000 − 96,000 = <strong>$24,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Actual sales are 7,500 units at $40 ($300,000) and break-even sales are $240,000. Compute (a) margin of safety in dollars, (b) margin of safety in units, and (c) margin of safety as a percent of actual sales.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Margin of safety dollars = 300,000 − 240,000 = <strong>$60,000</strong>. Step 2: In units = 7,500 − 6,000 = <strong>1,500 units</strong>. Step 3: Percent = 60,000 ÷ 300,000 = <strong>20%</strong>. Sales can fall 20% before losses begin.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A product sells for $25 with variable cost of $15 and fixed costs of $50,000. (a) What is the break-even point in units? (b) If price rises to $27 and variable cost stays $15, what is the new break-even point?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: CM per unit = 25 − 15 = $10; break-even = 50,000 ÷ 10 = <strong>5,000 units</strong>. Step 2: New CM = 27 − 15 = $12; break-even = 50,000 ÷ 12 = <strong>4,167 units</strong> (rounded up — 4,166 units leaves a small loss, so 4,167 is the first whole unit that breaks even).</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A company has contribution margin of $200,000 and operating income of $50,000. (a) What are its fixed costs? (b) What is its degree of operating leverage? (c) If sales rise 10%, by about what percent will operating income rise?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Fixed costs = CM − operating income = 200,000 − 50,000 = <strong>$150,000</strong>. Step 2: Degree of operating leverage = 200,000 ÷ 50,000 = <strong>4.0</strong>. Step 3: A 10% sales rise lifts operating income by about 4.0 × 10% = <strong>40%</strong> (to about $70,000).</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A café's CVP analysis assumes it sells every muffin it bakes. In reality it throws away 10% of each batch unsold. Explain, in two or three sentences, why its break-even calculation understates the real break-even point.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The analysis counts revenue from every unit produced, but 10% of units earn no revenue while still incurring variable cost. Step 2: To sell 6,000 muffins the café must bake about 6,667 (6,000 ÷ 0.90), paying variable cost on 667 extra units. Step 3: Real break-even therefore requires more sales than the textbook calculation shows — the unsold units are a cost the model ignored.</p>"
    }
  ],
  quiz: [
    {
      q: "A product sells for $40 with variable cost of $24. Contribution margin per unit is:",
      choices: ["$64", "$40", "$16", "$24"],
      answer: 2,
      explanation: "Correct: (c). 40 − 24 = $16. (a) adds price and variable cost. (b) is the selling price. (d) is the variable cost."
    },
    {
      q: "With contribution margin of $16 and a $40 price, the contribution margin ratio is:",
      choices: ["16%", "60%", "40%", "25%"],
      answer: 2,
      explanation: "Correct: (c). 16 ÷ 40 = 40%. (a) uses the CM number as a percent. (b) is the variable cost ratio, 24 ÷ 40. (d) is 16 ÷ 64, which has no meaning here."
    },
    {
      q: "Fixed costs $96,000 and contribution margin $16 per unit. Break-even units are:",
      choices: ["1,500", "6,000", "9,600", "2,400"],
      answer: 1,
      explanation: "Correct: (b). 96,000 ÷ 16 = 6,000. (a) divides by 64. (c) divides by 10. (d) divides fixed costs by the price, 40."
    },
    {
      q: "Break-even sales in dollars equal:",
      choices: ["Fixed costs ÷ contribution margin per unit", "Fixed costs ÷ contribution margin ratio", "Fixed costs × contribution margin ratio", "Variable costs ÷ contribution margin ratio"],
      answer: 1,
      explanation: "Correct: (b). Dividing fixed costs by the ratio gives dollars; dividing by CM per unit gives units. (a) gives break-even units. (c) and (d) are not break-even formulas."
    },
    {
      q: "To earn a target profit of $32,000 with fixed costs of $96,000 and CM of $16 per unit, the company must sell:",
      choices: ["6,000 units", "8,000 units", "4,000 units", "2,000 units"],
      answer: 1,
      explanation: "Correct: (b). (96,000 + 32,000) ÷ 16 = 8,000. (a) is break-even, which earns zero profit. (c) and (d) are too small to cover fixed costs plus the target."
    },
    {
      q: "Actual sales $300,000 and break-even sales $240,000. Margin of safety is:",
      choices: ["$60,000 and 20%", "$60,000 and 25%", "$540,000 and 20%", "$40,000 and 13%"],
      answer: 0,
      explanation: "Correct: (a). 300,000 − 240,000 = $60,000; 60,000 ÷ 300,000 = 20%. (b) divides by break-even sales instead of actual sales. (c) adds the numbers. (d) uses the wrong difference."
    },
    {
      q: "If the selling price rises while variable cost per unit and fixed costs stay the same, the break-even point:",
      choices: ["Rises", "Falls", "Stays the same", "Becomes zero"],
      answer: 1,
      explanation: "Correct: (b). A higher price raises contribution margin per unit, so fewer units are needed to cover fixed costs. (a) is the effect of a price cut or a variable cost rise. (c) ignores the CM change. (d) would require fixed costs of zero."
    },
    {
      q: "A key assumption of CVP analysis is:",
      choices: ["The company sells every unit it produces", "Fixed costs change with every unit", "Variable cost per unit rises with volume", "Selling price changes every month"],
      answer: 0,
      explanation: "Correct: (a). CVP assumes all units produced are sold, with constant price, variable cost per unit, and fixed costs in the relevant range. (b), (c), and (d) all contradict those assumptions."
    }
  ],
  studyGuide: `
<h3>Module 5 — Cost-Volume-Profit Analysis & Break-Even: Quick Reference</h3>
<div class="formula">CM per unit = Price − Variable cost per unit &nbsp;|&nbsp; CM ratio = CM per unit ÷ Price</div>
<div class="formula">Break-even units = Fixed costs ÷ CM per unit &nbsp;|&nbsp; Break-even dollars = Fixed costs ÷ CM ratio</div>
<div class="formula">Target profit units = (Fixed costs + Target profit) ÷ CM per unit &nbsp;|&nbsp; Margin of safety = Actual sales − Break-even sales</div>
<p><strong>Anchor numbers:</strong> Price $40, variable cost $24, CM $16, ratio 40%, fixed $96,000 → break-even 6,000 units / $240,000. Target profit $32,000 → 8,000 units. At 7,500 units: operating income $24,000, margin of safety $60,000 (20%).</p>
<p><strong>Levers:</strong> Higher price or lower variable cost raises CM and lowers break-even; lower fixed costs lower break-even directly.</p>
<p><strong>Watch out:</strong> Divide by CM per unit for units, by the ratio for dollars. Break-even is zero profit — aim past it. CVP assumes everything produced is sold, inside the relevant range.</p>
<p><strong>Self-check:</strong> Recompute the anchor from scratch, then change one input (price $44, or variable cost $28) and recompute break-even. If the direction of the change surprises you, recheck the CM.</p>
`
};
