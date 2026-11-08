// ACC 102 - Module 12: Course Review: From Data to Decisions
module.exports = {
  number: 12,
  slug: "course-review-from-data-to-decisions",
  title: "Course Review: From Data to Decisions",
  estTime: "3–4 hours",
  objectives: [
    "Trace the course's arc: from cost classification to decisions and performance.",
    "Choose the right tool for a managerial question: CVP, budget, variance, differential, or capital budgeting.",
    "Recompute the course's anchor numbers without notes.",
    "Explain how managerial accounting connects to financial management and the business capstone.",
    "Identify the next skills to build after this course."
  ],
  sections: [
    {
      heading: "The Arc of the Course",
      html: `
<p>This course began with a question — what do managers need numbers for? — and answered it in layers. Module 1 gave the purpose: planning, deciding, motivating, controlling, evaluating. Module 2 gave the vocabulary: direct and indirect, product and period, fixed and variable. Modules 3 and 4 gave the cost systems that measure what products cost. Module 5 gave the profit engine: contribution margin and break-even. Module 6 gave the plan: the master budget. Module 7 gave the control check: variances. Module 8 gave the scoreboard: ROI, residual income, and the balanced scorecard. Module 9 gave the decision method: differential analysis. Module 10 gave the long view: capital budgeting. Module 11 gave the cash reality check.</p>
<p>Each layer assumed the one before it. You cannot do variance analysis without standards, and you cannot set standards without knowing cost behavior. You cannot judge a segment without a segment margin, and you cannot compute one without knowing which fixed costs are traceable. The course is a staircase, not a set of separate rooms.</p>
<div class="callout"><strong>Key idea:</strong> Managerial accounting is one connected system: classify costs, measure them, plan with them, control against the plan, decide with the differences, and judge the results. Lose any link and the chain breaks.</div>`
    },
    {
      heading: "Choosing the Right Tool",
      html: `
<p>A manager's question determines the tool. "How many units must we sell to survive?" is a CVP question: contribution margin and break-even. "What will next quarter look like?" is a budgeting question: the master budget chain. "Why did costs run over?" is a variance question: price vs. quantity, rate vs. efficiency. "Should we make it or buy it?" is a differential question: relevant costs only. "Should we buy the machine?" is a capital budgeting question: NPV and IRR. "Are we actually generating cash?" is a cash flow question.</p>
<p>The most common error in practice is not computing badly — it is using the right arithmetic on the wrong question. Full unit cost in a special-order decision, ROI alone in an investment decision, a static budget in a volume-changed month: each is a correct tool applied to a question it was never built to answer.</p>`
    },
    {
      heading: "The Anchor Numbers, Recomputed",
      html: `
<p>Recompute these from memory; they are the course in miniature. <strong>Cost behavior:</strong> high month 9,000 units at $58,000, low month 5,000 at $38,000 → variable $5.00 per unit, fixed $13,000, forecast at 7,000 units $48,000. <strong>Job costing:</strong> Job 214, materials $18,000, labor $12,000, overhead 150% of labor → $48,000 total, $120 per lamp. <strong>ABC:</strong> setup rate $200, machining rate $20. <strong>CVP:</strong> price $40, variable cost $24, CM $16, fixed $96,000 → break-even 6,000 units / $240,000; target profit $32,000 → 8,000 units; at 7,500 units, operating income $24,000 and margin of safety 20%. <strong>Budget:</strong> Q1 sales $100,000, production 5,200 units, materials $31,200, labor $41,600, ending cash $23,000, operating income $4,000. <strong>Variances:</strong> materials $2,100 U price + $2,500 U quantity; labor $1,300 F rate + $2,000 U efficiency. <strong>Performance:</strong> ROI 15%, margin 10%, turnover 1.5, residual income $40,000. <strong>Differential:</strong> buying saddles saves $10,000, not $25,000; the special order adds $3,000. <strong>Capital budgeting:</strong> NPV +$13,724, payback 3.33 years, IRR about 15%. <strong>Cash flow:</strong> operating $69,000, net increase $43,000, free cash flow $44,000.</p>
<p>If any of those numbers feels unfamiliar, go back to its module and recompute it by hand. The final exam draws its numbers from the same anchors, with fresh scenarios.</p>`
    },
    {
      heading: "Where This Course Leads",
      html: `
<p>ACC 102 is the bridge between ACC 101's financial accounting and the rest of the business program. Financial management (FIN 101) takes the capital budgeting tools from Module 10 and adds the cost of capital, stocks, and bonds. Operations management (MGT 201) takes the quality and process tools and adds statistical process control, which you will meet from the statistics side in BUS 121. The entrepreneurship course (BUS 221) and the capstone take the break-even, budgeting, and pro forma skills and turn them into a business plan — the same master budget chain, now for a business that does not exist yet.</p>
<p>The skill that transfers everywhere is not any single formula. It is the habit this course drilled: ask what differs, compute it, check it against a second method, and state the assumption. A manager who does that — in accounting, in marketing, in operations — makes better decisions than one who merely knows more formulas.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>The course arc: classify → measure → plan → control → decide → judge → check cash.</li>
<li>Match the tool to the question; the most common error is the right arithmetic on the wrong question.</li>
<li>Every anchor number in this course was computed twice — once by formula, once by check. Do the same on the exam.</li>
<li>Managerial accounting's safeguard is honesty: show assumptions, report bad news, and never let a report flatter its reader.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Memorizing formulas without the decision each one serves. On the final exam, every question names a situation first — read the situation, pick the tool, then compute.</div>
<div class="callout"><strong>Common mistake:</strong> Treating the final exam as a test of ACC 102 alone. The capstone and the finance course will reuse these tools; the exam is a rehearsal for using them under time pressure, the way a manager does.</div>
<p><strong>Ready-to-work link:</strong> If you can recompute the anchor numbers, name the tool for any managerial question, and explain one decision from Modules 9 and 10 in plain language, you are ready for the final exam — and for the finance course that follows.</p>`
    }
  ],
  keyTerms: [
    { term: "Contribution margin", def: "Selling price minus variable cost per unit; what each unit contributes toward fixed costs and profit." },
    { term: "Break-even point", def: "The volume at which total revenue equals total cost and operating income is zero." },
    { term: "Master budget", def: "The complete linked set of budgets for a period, from sales to budgeted financial statements." },
    { term: "Standard cost", def: "The expected cost of one unit of input under efficient conditions." },
    { term: "Variance", def: "The difference between a standard or budgeted amount and the actual amount." },
    { term: "Return on investment", def: "Net operating income divided by average operating assets." },
    { term: "Residual income", def: "Net operating income minus the minimum required return on average operating assets." },
    { term: "Differential analysis", def: "Comparing alternatives using only the costs and revenues that differ between them." },
    { term: "Relevant cost", def: "A future cost that differs between alternatives." },
    { term: "Net present value", def: "Present value of future cash inflows minus the initial investment; accept if positive." },
    { term: "Free cash flow", def: "Operating cash flow minus capital expenditures." },
    { term: "Activity-based costing", def: "Assigning overhead by activities, using a cost driver for each activity cost pool." },
    { term: "Equivalent units", def: "The number of whole units that partially completed work represents." },
    { term: "Balanced scorecard", def: "A performance system tracking financial, customer, internal process, and learning-and-growth measures." }
  ],
  video: {
    title: "Contribution Margin Income Statement",
    embedUrl: "https://www.youtube.com/embed/fyAEVKCSjcI",
    note: "Edspira builds the contribution margin income statement — the format that underlies CVP analysis, break-even, and the differential decisions in this course. Watch it as a review: every number in this module's anchor list either comes from, or feeds into, that statement.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A product sells for $40, variable cost $24, fixed costs $96,000. (a) What is the break-even point in units? (b) How many units earn a $32,000 target profit? (c) What is operating income at 7,500 units?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: CM = 40 − 24 = $16. Step 2: Break-even = 96,000 ÷ 16 = <strong>6,000 units</strong>. Step 3: Target units = (96,000 + 32,000) ÷ 16 = <strong>8,000 units</strong>. Step 4: At 7,500 units, operating income = (7,500 × 16) − 96,000 = 120,000 − 96,000 = <strong>$24,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> High month: 9,000 units, $58,000. Low month: 5,000 units, $38,000. Use high-low to find the variable rate, the fixed cost, and the forecast at 7,000 units.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Variable rate = (58,000 − 38,000) ÷ (9,000 − 5,000) = <strong>$5.00 per unit</strong>. Step 2: Fixed cost = 58,000 − (5 × 9,000) = <strong>$13,000</strong>. Step 3: Forecast at 7,000 units = 13,000 + (5 × 7,000) = <strong>$48,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A division has sales $1,200,000, net operating income $120,000, average operating assets $800,000, minimum rate 10%. Compute (a) ROI, (b) margin, (c) turnover, and (d) residual income.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: ROI = 120,000 ÷ 800,000 = <strong>15%</strong>. Step 2: Margin = 120,000 ÷ 1,200,000 = <strong>10%</strong>. Step 3: Turnover = 1,200,000 ÷ 800,000 = <strong>1.5</strong>. Step 4: Residual income = 120,000 − (10% × 800,000) = <strong>$40,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A machine costs $100,000, returns $30,000 per year for 5 years, required return 10%, annuity factor 3.7908. Compute (a) NPV, (b) payback, and (c) the decision.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: PV = 30,000 × 3.7908 = $113,724. Step 2: NPV = 113,724 − 100,000 = <strong>+$13,724</strong>. Step 3: Payback = 100,000 ÷ 30,000 = <strong>3.33 years</strong>. Step 4: NPV is positive, so <strong>accept</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Net income $64,000, depreciation $11,000, accounts receivable up $5,000, inventory down $3,000, accounts payable down $4,000, equipment purchased $25,000. Compute (a) operating cash flow, (b) free cash flow.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Operating cash flow = 64,000 + 11,000 − 5,000 + 3,000 − 4,000 = <strong>$69,000</strong>. Step 2: Free cash flow = 69,000 − 25,000 = <strong>$44,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A manager must decide whether to accept a special order, whether to drop a product line, and whether to buy a machine. Name the tool for each decision and the one number or rule that decides it.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Special order → <strong>differential analysis</strong>: accept if price exceeds variable cost plus special fixed costs (with idle capacity). Step 2: Drop a product → <strong>segment margin</strong>: drop only if the segment margin is negative (avoidable fixed costs exceed contribution margin lost). Step 3: Buy a machine → <strong>capital budgeting</strong>: accept if NPV is positive (or IRR exceeds the required return).</p>"
    }
  ],
  quiz: [
    {
      q: "Which tool answers 'How many units must we sell to survive?'",
      choices: ["Variance analysis", "CVP analysis", "Capital budgeting", "The statement of cash flows"],
      answer: 1,
      explanation: "Correct: (b). Break-even is a CVP question. (a) explains why costs differed from standard. (c) judges long-term investments. (d) explains the change in cash."
    },
    {
      q: "Price $40, variable cost $24, fixed costs $96,000. Break-even units are:",
      choices: ["6,000", "8,000", "4,000", "2,400"],
      answer: 0,
      explanation: "Correct: (a). CM = $16; 96,000 ÷ 16 = 6,000. (b) is the target-profit volume for $32,000. (c) divides by 24. (d) divides by 40."
    },
    {
      q: "The same product at 7,500 units earns operating income of:",
      choices: ["$16,000", "$24,000", "$32,000", "$0"],
      answer: 1,
      explanation: "Correct: (b). (7,500 × 16) − 96,000 = $24,000. (a) is the CM at 1,000 units. (c) is the target profit in the module. (d) is break-even profit."
    },
    {
      q: "ROI 15%, margin 10%, turnover 1.5. Residual income at a 10% minimum rate on $800,000 of assets with NOI $120,000 is:",
      choices: ["$120,000", "$80,000", "$40,000", "$200,000"],
      answer: 2,
      explanation: "Correct: (c). 120,000 − 80,000 = $40,000. (a) is NOI. (b) is the minimum return. (d) adds the two."
    },
    {
      q: "A machine with NPV +$13,724 should be:",
      choices: ["Rejected, because NPV is small", "Accepted, because NPV is positive", "Rejected, because payback exceeds 3 years", "Accepted only if IRR is below 10%"],
      answer: 1,
      explanation: "Correct: (b). A positive NPV means the project adds value. (a) confuses size with sign. (c) invents a payback rule. (d) reverses the IRR rule."
    },
    {
      q: "Buying saddles saves $10,000 rather than $25,000 because:",
      choices: ["The supplier raised its price", "Most of the allocated fixed overhead is unavoidable and will be paid either way", "Variable costs were miscalculated", "The company makes fewer saddles than planned"],
      answer: 1,
      explanation: "Correct: (b). Only $20,000 of the $35,000 fixed overhead is avoidable; the $15,000 remainder is not a saving. (a) is not in the example. (c) is false — variable cost is $13 per unit. (d) is irrelevant."
    },
    {
      q: "Operating cash flow $69,000 and capital expenditures $25,000 give free cash flow of:",
      choices: ["$94,000", "$44,000", "$25,000", "$69,000"],
      answer: 1,
      explanation: "Correct: (b). 69,000 − 25,000 = $44,000. (a) adds the two. (c) is capital expenditures alone. (d) is operating cash flow before capital spending."
    },
    {
      q: "The course's central habit — the one that transfers to every business decision — is:",
      choices: ["Memorizing every formula", "Asking what differs, computing it, checking it a second way, and stating the assumption", "Always choosing the lowest cost", "Never using estimates"],
      answer: 1,
      explanation: "Correct: (b). That habit — differential thinking plus verification — is what the course drilled in every module. (a) is memorization without judgment. (c) ignores value and opportunity cost. (d) is impossible — managerial decisions always involve estimates."
    }
  ],
  studyGuide: `
<h3>Module 12 — Course Review: From Data to Decisions: Quick Reference</h3>
<p><strong>Arc:</strong> Classify (M2) → measure (M3–M4) → plan (M6) → profit engine (M5) → control (M7) → judge (M8) → decide (M9) → long view (M10) → cash check (M11).</p>
<p><strong>Anchor numbers (recompute all of them):</strong> High-low $5.00/$13,000. Job 214 $48,000, $120/unit. ABC $200/setup, $20/MH. CVP break-even 6,000 units/$240,000; target $32,000 → 8,000 units; 7,500 units → $24,000 income, 20% margin of safety. Budget Q1: sales $100,000, production 5,200, materials $31,200, labor $41,600, ending cash $23,000, operating income $4,000. Variances: materials $2,100 U + $2,500 U; labor $1,300 F + $2,000 U. ROI 15%, RI $40,000. Saddles save $10,000; special order +$3,000. NPV +$13,724, payback 3.33 yr, IRR ≈15%. Cash flow: operating $69,000, net +$43,000, free $44,000.</p>
<p><strong>Tool picker:</strong> Survive? → CVP. Next quarter? → master budget. Why over? → variances. Make or buy? → differential. Buy a machine? → NPV/IRR. Cash? → statement of cash flows.</p>
<p><strong>Watch out:</strong> Right arithmetic on the wrong question is still a wrong decision. Read the situation first, pick the tool, then compute — and check every number a second way.</p>
<p><strong>Self-check:</strong> Cover the anchor list and recompute every number from its inputs. Any number you cannot recompute is a module to revisit before the final.</p>
`
};
