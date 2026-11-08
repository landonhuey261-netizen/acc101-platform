// BUS 121 - Module 10: Index Numbers & Measuring Change Over Time
module.exports = {
  number: 10,
  slug: "index-numbers-measuring-change",
  title: "Index Numbers & Measuring Change Over Time",
  estTime: "3–4 hours",
  objectives: [
    "Construct a price index from a fixed basket of goods.",
    "Compute inflation from index values and interpret a CPI reading.",
    "Convert nominal dollars to real dollars using a price index.",
    "Explain base years, rebasing, and the limits of a fixed basket.",
    "Use index numbers to compare wages, prices, and sales across years."
  ],
  sections: [
    {
      heading: "What an Index Number Is",
      html: `
<p>Comparing prices across years is hard because prices move at different speeds: rent rises, electronics fall, bread drifts. An <strong>index number</strong> collapses a whole basket of prices into one number by fixing the basket and tracking what it costs over time. The <strong>base year</strong> is set to 100; every other year is measured against it. An index of 120 means the basket costs 20% more than in the base year; an index of 95 means it costs 5% less.</p>
<p><strong>Worked example:</strong> A small basket costs $400 in the base year, 2020. In 2026 the same basket costs $480. The index for 2026 is (480 ÷ 400) × 100 = <strong>120</strong>. Inflation over the period is (120 − 100) ÷ 100 = <strong>20%</strong>. The formula is always the same: index = (current cost ÷ base-year cost) × 100. The basket never changes — that is the point. If you changed the basket, you would not know whether the index moved because prices changed or because the basket did.</p>
<div class="callout"><strong>Key idea:</strong> An index number answers one question: "How much more (or less) does the same thing cost than it did in the base year?" The basket stays fixed so the answer is about prices, not about what people buy.</div>`
    },
    {
      heading: "The Consumer Price Index (CPI)",
      html: `
<p>The <strong>Consumer Price Index (CPI)</strong> is the most-used index number in business: it tracks the price of a basket of goods and services bought by a typical urban household — housing, food, transport, medical care, and more. It is published monthly, and its percentage change is the headline inflation rate. When the CPI rises 3% in a year, the cost of the typical basket rose 3%.</p>
<p>Businesses use the CPI constantly: to adjust wages and contracts for inflation (cost-of-living adjustments), to compare sales across years in real terms, and to set prices that keep pace with costs. A 5% sales increase in a year when the CPI rose 5% is not growth at all — it is standing still. The CPI is a national average, though: it does not track your city, your industry, or your customers' actual basket. Use it as a benchmark, not as a precise measure of your own costs.</p>`
    },
    {
      heading: "Real vs. Nominal Dollars",
      html: `
<p>Money from different years is not comparable until it is put on the same price basis. <strong>Nominal dollars</strong> are the dollars of the year they were earned or spent. <strong>Real dollars</strong> are nominal dollars adjusted to a base year's prices: real value = nominal value ÷ (index ÷ 100).</p>
<p><strong>Worked example:</strong> A worker earns $25 per hour in 2026, when the index (base 2020 = 100) is 120. In 2020 dollars, that wage is 25 ÷ 1.20 = <strong>$20.83</strong>. The worker's pay rose in nominal dollars, but part of the rise is inflation — in 2020 purchasing power, the wage is $20.83. The same adjustment applies to sales, profits, and budgets: divide by the index (as a decimal) to strip out inflation and see real growth. A company whose sales grew 25% while prices rose 20% grew 4.2% in real terms, not 25% — (1.25 ÷ 1.20) − 1 = 4.17%.</p>
<div class="callout"><strong>Key idea:</strong> Nominal growth minus inflation is not real growth — the correct adjustment is division, not subtraction. A 25% nominal rise with 20% inflation is 4.2% real growth, not 5%.</div>`
    },
    {
      heading: "Base Years, Rebasing, and the Fixed-Basket Problem",
      html: `
<p>An index is only as good as its basket, and baskets go stale. People substitute: when beef gets expensive, they buy chicken. New products appear — the 2020 basket has no line for a product invented in 2024 — and old ones vanish. Because the CPI's basket is fixed between revisions, it tends to overstate the cost of living: it assumes people keep buying the expensive item instead of switching. Statisticians handle this by <strong>rebasing</strong> — updating the basket and resetting the base year to 100 — and by publishing chained indexes that let the basket evolve.</p>
<p>For a manager, the practical lesson is to know which index you are using and when its base year was set. A wage clause tied to "the CPI" should name the series (CPI-U, the urban index) and the base. And when you build your own index — say, a cost index for your own inputs — rebase it every few years, or it will quietly drift away from what you actually buy.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Index = (current basket cost ÷ base-year basket cost) × 100. Base year = 100.</li>
<li>CPI change = inflation. A 20% rise in the index means the basket costs 20% more.</li>
<li>Real value = nominal value ÷ (index ÷ 100). Divide to adjust for inflation — do not subtract.</li>
<li>Fixed baskets go stale: substitution and new products make old indexes overstate inflation. Rebase periodically.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Subtracting inflation from nominal growth to get real growth. The correct calculation is (1 + nominal) ÷ (1 + inflation) − 1. At small rates the difference is tiny; at large rates it is not.</div>
<div class="callout"><strong>Common mistake:</strong> Comparing nominal dollars across years without adjusting. A $25 wage in 2026 is $20.83 in 2020 dollars when the index is 120 — the comparison without adjustment is meaningless.</div>
<p><strong>Ready-to-work link:</strong> The business program's finance and economics courses use real vs. nominal dollars constantly — for investment returns, wage comparisons, and long-run sales trends. This module is the toolkit.</p>`
    }
  ],
  keyTerms: [
    { term: "Index number", def: "A number that tracks the cost of a fixed basket over time, with the base year set to 100." },
    { term: "Base year", def: "The reference year for an index, assigned a value of 100." },
    { term: "Consumer Price Index (CPI)", def: "The index tracking the price of a basket of goods and services bought by a typical urban household." },
    { term: "Inflation", def: "The percentage increase in a price index over a period." },
    { term: "Nominal dollars", def: "Dollars of the year they were earned or spent, unadjusted for inflation." },
    { term: "Real dollars", def: "Dollars adjusted to a base year's prices: nominal ÷ (index ÷ 100)." },
    { term: "Cost-of-living adjustment", def: "A wage or contract increase tied to a price index, to preserve purchasing power." },
    { term: "Rebasing", def: "Updating an index's basket and resetting its base year to 100." },
    { term: "Fixed basket", def: "The unchanging set of goods and services an index tracks." },
    { term: "Substitution bias", def: "The tendency of a fixed-basket index to overstate inflation because consumers switch away from goods that get expensive." },
    { term: "Purchasing power", def: "What a given amount of money can actually buy." },
    { term: "Chained index", def: "An index whose basket is updated regularly, letting it evolve with what people buy." },
    { term: "CPI-U", def: "The Consumer Price Index for All Urban Consumers, the headline U.S. inflation measure." },
    { term: "Real growth", def: "Growth after removing inflation: (1 + nominal) ÷ (1 + inflation) − 1." }
  ],
  video: {
    title: "The Consumer Price Index (CPI)",
    embedUrl: "https://www.youtube.com/embed/TpNQldxlS8w",
    note: "EnhanceTuition explains the CPI from the ground up: the basket, the base year, and how the index becomes the inflation rate. Watch it, then redo this module's worked example — a $400 basket in 2020 rising to $480 in 2026 gives an index of 120 and 20% inflation.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A basket costs $400 in the base year 2020 and $480 in 2026. (a) What is the 2026 index? (b) What is inflation over the period?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Index = (480 ÷ 400) × 100 = <strong>120</strong>. Step 2: Inflation = (120 − 100) ÷ 100 = <strong>20%</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A worker earns $25 per hour in 2026, when the index (base 2020 = 100) is 120. What is the wage in 2020 dollars?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Real wage = 25 ÷ (120 ÷ 100) = 25 ÷ 1.20 = <strong>$20.83</strong> per hour in 2020 dollars.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A company's sales were $1,000,000 in 2020 and $1,250,000 in 2026, while the price index rose from 100 to 120. (a) What is nominal sales growth? (b) What is real sales growth?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Nominal growth = (1,250,000 − 1,000,000) ÷ 1,000,000 = <strong>25%</strong>. Step 2: Real 2026 sales in 2020 dollars = 1,250,000 ÷ 1.20 = $1,041,667. Step 3: Real growth = (1,041,667 − 1,000,000) ÷ 1,000,000 ≈ <strong>4.2%</strong> — the same as (1.25 ÷ 1.20) − 1 = 4.17%.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> The CPI is 110 in Year 1 and 121 in Year 2. (a) What is the inflation rate in Year 2? (b) A $50,000 salary in Year 1 — what salary in Year 2 preserves the same purchasing power?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Inflation = (121 − 110) ÷ 110 = 11 ÷ 110 = <strong>10%</strong>. Step 2: Required salary = 50,000 × (121 ÷ 110) = 50,000 × 1.10 = <strong>$55,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A supplier's price index for your inputs is 100 in 2023, 108 in 2024, and 115 in 2025. (a) What is inflation from 2024 to 2025? (b) If your input budget was $80,000 in 2024, what budget in 2025 buys the same inputs?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Inflation 2024→2025 = (115 − 108) ÷ 108 = 7 ÷ 108 ≈ <strong>6.5%</strong>. Step 2: Required budget = 80,000 × (115 ÷ 108) = 80,000 × 1.0648 ≈ <strong>$85,185</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A manager says, \"Our sales grew 25% while inflation was 20%, so we grew 5% in real terms.\" Explain in two or three sentences why that is wrong and what the right answer is.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Real growth is not nominal minus inflation — it is (1 + nominal) ÷ (1 + inflation) − 1. Step 2: (1.25 ÷ 1.20) − 1 = <strong>4.17%</strong>, not 5%. Step 3: Subtracting works only as an approximation when the rates are small; at 20–25% the error is material.</p>"
    }
  ],
  quiz: [
    {
      q: "A basket costs $400 in the base year and $480 in 2026. The 2026 index is:",
      choices: ["80", "100", "120", "480"],
      answer: 2,
      explanation: "Correct: (c). (480 ÷ 400) × 100 = 120. (a) would mean prices fell. (b) is the base-year value. (d) is the dollar cost, not the index."
    },
    {
      q: "Inflation over that period is:",
      choices: ["80%", "20%", "120%", "480%"],
      answer: 1,
      explanation: "Correct: (b). (120 − 100) ÷ 100 = 20%. (a) is 100 − 20. (c) is the index itself. (d) is the cost as a percent of nothing meaningful."
    },
    {
      q: "A $25 hourly wage in 2026, with the index at 120 (base 2020 = 100), is worth in 2020 dollars:",
      choices: ["$25.00", "$30.00", "$20.83", "$20.00"],
      answer: 2,
      explanation: "Correct: (c). 25 ÷ 1.20 = $20.83. (a) is the nominal wage. (b) multiplies instead of dividing. (d) divides by 1.25."
    },
    {
      q: "Sales rose 25% nominally while prices rose 20%. Real growth is about:",
      choices: ["5%", "4.2%", "45%", "25%"],
      answer: 1,
      explanation: "Correct: (b). (1.25 ÷ 1.20) − 1 = 4.17%. (a) is the subtraction shortcut, which is wrong at these rates. (c) adds the rates. (d) is nominal growth, unadjusted."
    },
    {
      q: "The CPI tracks:",
      choices: ["The price of one product", "A fixed basket of goods and services bought by a typical urban household", "The stock market", "Interest rates"],
      answer: 1,
      explanation: "Correct: (b). The CPI is a basket index. (a) is too narrow. (c) is a stock index. (d) is a different measure entirely."
    },
    {
      q: "The CPI is 110 in Year 1 and 121 in Year 2. Year 2 inflation is:",
      choices: ["11%", "10%", "21%", "121%"],
      answer: 1,
      explanation: "Correct: (b). (121 − 110) ÷ 110 = 10%. (a) is the point change, not the percent change. (c) adds the two. (d) is the index value."
    },
    {
      q: "A fixed-basket index tends to overstate inflation because:",
      choices: ["Prices never change", "Consumers substitute away from goods that get expensive, but the basket does not", "The base year is always wrong", "It includes too many goods"],
      answer: 1,
      explanation: "Correct: (b). Substitution bias: people switch to cheaper alternatives the fixed basket ignores. (a) is false. (c) is false. (d) is false — basket size is not the issue."
    },
    {
      q: "Rebasing an index means:",
      choices: ["Deleting the index", "Updating its basket and resetting the base year to 100", "Changing the inflation rate", "Switching from nominal to real dollars"],
      answer: 1,
      explanation: "Correct: (b). Rebasing refreshes the basket and resets the base. (a) is wrong. (c) is a consequence, not the definition. (d) is a different adjustment."
    }
  ],
  studyGuide: `
<h3>Module 10 — Index Numbers & Measuring Change Over Time: Quick Reference</h3>
<div class="formula">Index = (current basket cost ÷ base-year basket cost) × 100. Base year = 100.</div>
<p><strong>Anchor:</strong> Basket $400 in 2020, $480 in 2026 → index 120, inflation 20%. Wage $25/hr in 2026 → $20.83 in 2020 dollars (25 ÷ 1.20).</p>
<div class="formula">Real value = nominal ÷ (index ÷ 100). Real growth = (1 + nominal) ÷ (1 + inflation) − 1.</div>
<p><strong>Anchor 2:</strong> Sales +25% nominal with 20% inflation → real growth 4.17%, not 5%. CPI 110 → 121 is 10% inflation.</p>
<p><strong>Watch out:</strong> Never subtract inflation from nominal growth to get real growth — divide. And remember a fixed basket goes stale: substitution bias overstates inflation, which is why indexes are rebased.</p>
<p><strong>Self-check:</strong> Given a basket's cost in two years, compute the index, the inflation rate, and the real value of any dollar figure from the later year.</p>
`
};
