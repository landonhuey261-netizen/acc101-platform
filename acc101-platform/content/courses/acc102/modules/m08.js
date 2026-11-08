// ACC 102 - Module 8: Decentralization & Performance Measurement
module.exports = {
  number: 8,
  slug: "decentralization-performance-measurement",
  title: "Decentralization & Performance Measurement",
  estTime: "3–4 hours",
  objectives: [
    "Explain decentralization and the types of responsibility centers.",
    "Compute return on investment (ROI) as margin times turnover.",
    "Compute residual income and explain why it fixes ROI's flaw.",
    "Build a segmented income statement and identify traceable vs. common fixed costs.",
    "Describe the four perspectives of the balanced scorecard."
  ],
  sections: [
    {
      heading: "Decentralization and Responsibility Centers",
      html: `
<p><strong>Decentralization</strong> is the delegation of decision-making authority to lower levels of the organization. A store manager who can set local prices, hire staff, and order stock is decentralized; a store manager who must phone headquarters for every decision is not. Decentralization speeds decisions, uses local knowledge, and develops managers — but it requires a way to judge each unit's performance fairly, or managers will optimize their own unit at the expense of the company.</p>
<p>That judgment depends on what the manager controls. A <strong>cost center</strong> controls costs only (a maintenance department). A <strong>revenue center</strong> controls revenues (a sales team). A <strong>profit center</strong> controls both revenues and costs (a store). An <strong>investment center</strong> controls revenues, costs, and the assets invested (a division). The measure must match the authority: judging a cost-center manager on profit would be unfair, because she cannot change revenues.</p>
<div class="callout"><strong>Key idea:</strong> Measure what the manager controls, and nothing else. A performance measure that includes costs the manager cannot influence is not a measure — it is a lottery.</div>`
    },
    {
      heading: "Return on Investment: Margin Times Turnover",
      html: `
<p>For investment centers, the classic measure is <strong>return on investment (ROI)</strong>: net operating income divided by average operating assets. It splits usefully into two parts: <strong>margin</strong> (net operating income ÷ sales) times <strong>turnover</strong> (sales ÷ average operating assets). Margin asks how much profit each sales dollar earns; turnover asks how hard the assets work to generate sales.</p>
<p><strong>Worked example:</strong> A division has sales of $1,200,000, net operating income of $120,000, and average operating assets of $800,000. ROI = 120,000 ÷ 800,000 = <strong>15%</strong>. Margin = 120,000 ÷ 1,200,000 = <strong>10%</strong>. Turnover = 1,200,000 ÷ 800,000 = <strong>1.5</strong>. Check: 10% × 1.5 = 15%. The split tells the manager two ways to improve: raise margin (higher prices, lower costs) or raise turnover (sell more with the same assets, or shed idle assets).</p>
<div class="callout"><strong>Key idea:</strong> ROI's split is a diagnostic. Two divisions can both earn 15% — one by high margin and low turnover (a luxury brand), the other by low margin and high turnover (a discount retailer) — and they need completely different management.</div>`
    },
    {
      heading: "Residual Income: Fixing ROI's Flaw",
      html: `
<p>ROI has a well-known flaw: it can make a manager refuse a profitable investment. Suppose a division earns 15% ROI and the company's minimum required return is 10%. A new project earns 12% — above the company's minimum, so the company wants it. But accepting it would drag the division's ROI from 15% toward 12%, making the manager look worse. A manager judged on ROI alone will refuse a project that helps the company.</p>
<p><strong>Residual income (RI)</strong> fixes this: RI = net operating income − (minimum required rate × average operating assets). It measures profit above the minimum return in dollars, so any project earning more than the minimum adds to RI. For the worked division: RI = 120,000 − (10% × 800,000) = 120,000 − 80,000 = <strong>$40,000</strong>. The 12% project would add positive RI, so the manager accepts it. RI's own flaw is that it is a dollar amount — a large division will show larger RI than a small one without being better managed — so ROI and RI are best used together.</p>`
    },
    {
      heading: "Segmented Income Statements and the Balanced Scorecard",
      html: `
<p>A <strong>segmented income statement</strong> shows each segment's contribution margin, then subtracts <strong>traceable fixed costs</strong> (fixed costs caused by that segment alone, which disappear if the segment is dropped) to get the <strong>segment margin</strong> — the best measure of a segment's long-run profitability. <strong>Common fixed costs</strong> (headquarters rent, the CEO's salary) support all segments and are not allocated to them for decision purposes, because allocating them makes a healthy segment look weak and can trigger a bad drop decision.</p>
<p>Finally, the <strong>balanced scorecard</strong> recognizes that financial measures alone are not enough. It tracks four perspectives: financial (profit, ROI), customer (satisfaction, retention), internal business processes (quality, cycle time), and learning and growth (training, innovation). The perspectives are linked by cause and effect: better training improves processes, which improves the customer experience, which improves financial results. A manager who only watches profit is driving by looking in the rearview mirror; the scorecard adds the view through the windshield.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Responsibility centers: cost (costs only), revenue (revenues only), profit (revenues and costs), investment (plus assets).</li>
<li>ROI = net operating income ÷ average operating assets = margin × turnover.</li>
<li>Residual income = net operating income − (minimum rate × average operating assets); it removes ROI's incentive to refuse good projects.</li>
<li>Segment margin = contribution margin − traceable fixed costs. Common fixed costs are not allocated for drop decisions.</li>
<li>Balanced scorecard: financial, customer, internal processes, learning and growth — linked by cause and effect.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Judging a segment by its net income after allocating common fixed costs. Common costs do not disappear when a segment is dropped, so they must not decide whether to drop it.</div>
<div class="callout"><strong>Common mistake:</strong> Using ROI alone to approve investments. A project earning more than the minimum return but less than the division's current ROI helps the company and hurts the manager's ROI — residual income removes that conflict.</div>
<p><strong>Ready-to-work link:</strong> If you can compute ROI two ways, compute residual income, and explain why a segment margin is the right drop-decision number, you can read any divisional performance report and spot the traps in it.</p>`
    }
  ],
  keyTerms: [
    { term: "Decentralization", def: "Delegating decision-making authority to lower levels of the organization." },
    { term: "Responsibility center", def: "A part of the organization whose manager is accountable for a defined set of results." },
    { term: "Cost center", def: "A responsibility center whose manager controls costs only." },
    { term: "Revenue center", def: "A responsibility center whose manager controls revenues only." },
    { term: "Profit center", def: "A responsibility center whose manager controls revenues and costs." },
    { term: "Investment center", def: "A responsibility center whose manager controls revenues, costs, and invested assets." },
    { term: "Return on investment (ROI)", def: "Net operating income divided by average operating assets." },
    { term: "Margin", def: "Net operating income divided by sales; profit earned per sales dollar." },
    { term: "Turnover", def: "Sales divided by average operating assets; how hard assets work to generate sales." },
    { term: "Residual income", def: "Net operating income minus (minimum required rate × average operating assets)." },
    { term: "Segment margin", def: "A segment's contribution margin minus its traceable fixed costs." },
    { term: "Traceable fixed cost", def: "A fixed cost caused by one segment alone, which disappears if the segment is dropped." },
    { term: "Common fixed cost", def: "A fixed cost that supports all segments and does not disappear if one segment is dropped." },
    { term: "Balanced scorecard", def: "A performance system tracking financial, customer, internal process, and learning-and-growth measures linked by cause and effect." },
    { term: "Net operating income", def: "Income from operations before interest and taxes." },
    { term: "Average operating assets", def: "The average of beginning and ending operating assets used by a segment during the period." }
  ],
  video: {
    title: "Balanced Scorecard with Strategy Maps",
    embedUrl: "https://www.youtube.com/embed/3vjpZO-DP7g",
    note: "Edspira builds a balanced scorecard with strategy maps, showing how learning and growth improve internal processes, which improve the customer experience, which improves financial results. Watch it, then name one measure for each of the four perspectives for a business you know.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A division has sales of $1,200,000, net operating income of $120,000, and average operating assets of $800,000. Compute (a) ROI, (b) margin, (c) turnover, and (d) verify that margin × turnover = ROI.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: ROI = 120,000 ÷ 800,000 = <strong>15%</strong>. Step 2: Margin = 120,000 ÷ 1,200,000 = <strong>10%</strong>. Step 3: Turnover = 1,200,000 ÷ 800,000 = <strong>1.5</strong>. Step 4: 10% × 1.5 = <strong>15%</strong> — the split checks out.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Using the same division (net operating income $120,000, average operating assets $800,000) and a minimum required rate of return of 10%, compute residual income.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Minimum return = 10% × 800,000 = $80,000. Step 2: Residual income = 120,000 − 80,000 = <strong>$40,000</strong>. The division earned $40,000 above the minimum return the company requires.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> The division is offered a project earning 12% on $200,000 of new assets (net operating income $24,000). The division's current ROI is 15% and the minimum rate is 10%. (a) Would the division's ROI rise or fall if it accepts? (b) Would residual income rise or fall? (c) Should the company want the project accepted?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: New ROI = (120,000 + 24,000) ÷ (800,000 + 200,000) = 144,000 ÷ 1,000,000 = 14.4% — ROI <strong>falls</strong> from 15%. Step 2: New RI = 144,000 − (10% × 1,000,000) = 144,000 − 100,000 = $44,000 — RI <strong>rises</strong> by $4,000. Step 3: Yes — the project earns 12%, above the 10% minimum, so it adds value; ROI alone would have made the manager refuse it.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A segment has sales of $500,000, variable costs of $300,000, and traceable fixed costs of $120,000. The company also has common fixed costs of $200,000. Compute (a) contribution margin and (b) segment margin. Should common fixed costs be subtracted to judge the segment? Explain.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Contribution margin = 500,000 − 300,000 = <strong>$200,000</strong>. Step 2: Segment margin = 200,000 − 120,000 = <strong>$80,000</strong>. Step 3: No — common fixed costs support all segments and would remain if this segment were dropped, so subtracting an allocation of them would understate the segment's value to the company.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Classify each unit as a cost, revenue, profit, or investment center: (a) a factory maintenance department, (b) a regional sales team paid on revenue, (c) a retail store whose manager controls prices and costs, (d) a division whose manager controls assets, revenues, and costs.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) <strong>Cost center</strong> — controls costs only. Step 2: (b) <strong>Revenue center</strong> — controls revenues only. Step 3: (c) <strong>Profit center</strong> — controls revenues and costs. Step 4: (d) <strong>Investment center</strong> — controls assets as well.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Give one balanced scorecard measure for each perspective for a small online retailer: financial, customer, internal business processes, and learning and growth.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Financial — <strong>operating income or ROI</strong>. Step 2: Customer — <strong>repeat purchase rate or customer satisfaction score</strong>. Step 3: Internal processes — <strong>order fulfillment time or defect/return rate</strong>. Step 4: Learning and growth — <strong>employee training hours or number of new products launched</strong>. The chain: training improves fulfillment, which keeps customers, which raises profit.</p>"
    }
  ],
  quiz: [
    {
      q: "A division manager who controls revenues, costs, and invested assets runs an:",
      choices: ["Cost center", "Revenue center", "Profit center", "Investment center"],
      answer: 3,
      explanation: "Correct: (d). An investment center controls assets as well as revenues and costs. (a) controls costs only. (b) controls revenues only. (c) controls revenues and costs but not assets."
    },
    {
      q: "ROI of 15% with margin 10% implies turnover of:",
      choices: ["0.67", "1.5", "25%", "5%"],
      answer: 1,
      explanation: "Correct: (b). ROI = margin × turnover, so turnover = 15% ÷ 10% = 1.5. (a) is margin ÷ ROI. (c) adds the two percentages. (d) subtracts them."
    },
    {
      q: "Net operating income $120,000, average operating assets $800,000, minimum rate 10%. Residual income is:",
      choices: ["$120,000", "$80,000", "$40,000", "$200,000"],
      answer: 2,
      explanation: "Correct: (c). 120,000 − (10% × 800,000) = 120,000 − 80,000 = $40,000. (a) is net operating income. (b) is the minimum return. (d) adds the two."
    },
    {
      q: "A project earns 12% while the division's ROI is 15% and the minimum rate is 10%. Under ROI alone the manager will:",
      choices: ["Accept it, because 12% exceeds the minimum", "Refuse it, because it would lower the division's ROI", "Accept it, because ROI always rises with new investment", "Refuse it, because 12% is below the minimum"],
      answer: 1,
      explanation: "Correct: (b). Accepting a 12% project pulls a 15% ROI downward, so an ROI-judged manager refuses a project the company wants. (a) describes the residual income decision. (c) is false — ROI falls when the new return is below the current ROI. (d) misstates the minimum — 12% exceeds 10%."
    },
    {
      q: "Segment margin equals:",
      choices: ["Sales − all fixed costs", "Contribution margin − traceable fixed costs", "Contribution margin − common fixed costs", "Net income + common fixed costs"],
      answer: 1,
      explanation: "Correct: (b). Segment margin subtracts only the fixed costs the segment itself causes. (a) and (c) wrongly include common costs. (d) is not a segment measure."
    },
    {
      q: "Common fixed costs should not be allocated to segments for a drop decision because:",
      choices: ["They are variable costs", "They remain even if the segment is dropped", "They are always zero", "GAAP forbids all allocations"],
      answer: 1,
      explanation: "Correct: (b). Dropping a segment does not save common costs, so they are irrelevant to the decision. (a) misclassifies them. (c) is false. (d) is false — GAAP allows allocations in statements, but they mislead drop decisions."
    },
    {
      q: "The balanced scorecard's four perspectives are:",
      choices: ["Financial, customer, internal processes, learning and growth", "Sales, costs, profit, assets", "Planning, control, audit, tax", "Revenue, expense, equity, liability"],
      answer: 0,
      explanation: "Correct: (a). Those are Kaplan and Norton's four perspectives, linked by cause and effect. (b) lists financial measures only. (c) lists management functions. (d) lists financial statement elements."
    },
    {
      q: "Decentralization's main benefit is:",
      choices: ["Top management makes every decision", "Decisions are faster and use local knowledge, and managers gain experience", "No performance measurement is needed", "All costs become fixed"],
      answer: 1,
      explanation: "Correct: (b). Local managers decide faster with better local information and develop judgment. (a) describes centralization. (c) is false — decentralization requires measurement. (d) is unrelated."
    }
  ],
  studyGuide: `
<h3>Module 8 — Decentralization & Performance Measurement: Quick Reference</h3>
<p><strong>Centers:</strong> Cost (costs only) → revenue (revenues only) → profit (revenues + costs) → investment (+ assets). Measure what the manager controls.</p>
<div class="formula">ROI = Net operating income ÷ Average operating assets = Margin × Turnover</div>
<div class="formula">Residual income = Net operating income − (Minimum rate × Average operating assets)</div>
<p><strong>Anchor:</strong> Sales $1,200,000, NOI $120,000, assets $800,000 → ROI 15%, margin 10%, turnover 1.5, RI at 10% = $40,000. A 12% project lowers ROI to 14.4% but raises RI to $44,000 — accept it.</p>
<p><strong>Segment margin:</strong> Contribution margin − traceable fixed costs. Never allocate common fixed costs for a drop decision.</p>
<p><strong>Balanced scorecard:</strong> Financial, customer, internal processes, learning and growth — cause and effect runs from learning to profit.</p>
<p><strong>Watch out:</strong> ROI alone can make managers refuse good projects; use RI alongside it.</p>
<p><strong>Self-check:</strong> Given sales, NOI, and assets, compute ROI three ways (direct, margin × turnover) and RI, then explain a 12%-vs-15% project decision in one sentence.</p>
`
};
