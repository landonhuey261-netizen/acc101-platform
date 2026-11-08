// ACC 102 - Module 9: Differential Analysis: Make-or-Buy, Keep-or-Drop, Special Orders
module.exports = {
  number: 9,
  slug: "differential-analysis",
  title: "Differential Analysis: Make-or-Buy, Keep-or-Drop, Special Orders",
  estTime: "3–4 hours",
  objectives: [
    "Identify relevant costs and revenues and ignore sunk and unavoidable costs.",
    "Analyze a make-or-buy decision using only differential costs.",
    "Analyze a keep-or-drop decision using segment margin and avoidable costs.",
    "Evaluate a special order when there is idle capacity and when capacity is constrained.",
    "Explain opportunity cost and its role in differential analysis."
  ],
  sections: [
    {
      heading: "Relevant Costs: What Actually Differs",
      html: `
<p>Most bad business decisions come from counting the wrong costs. <strong>Differential analysis</strong> fixes that with one rule: only costs and revenues that differ between alternatives matter. A <strong>relevant cost</strong> is a future cost that differs between the choices. A <strong>sunk cost</strong> has already been incurred and cannot be changed — the money spent on a machine last year is irrelevant to whether to use it today. An <strong>unavoidable fixed cost</strong> will be paid either way, so it cancels out of the comparison. And <strong>opportunity cost</strong> is the benefit given up by choosing one alternative over another — the rent forgone when freed-up space sits empty instead of being leased.</p>
<p>The practical method is a two-column table: list each alternative, keep only the costs and revenues that differ, and compare the totals. Anything that appears identically in both columns is noise — cross it out and move on.</p>
<div class="callout"><strong>Key idea:</strong> If a cost is the same under both alternatives, it cannot help you choose. The analysis is not about listing every cost; it is about deleting the ones that do not differ.</div>`
    },
    {
      heading: "Make-or-Buy: The Saddle Example",
      html: `
<p>A bicycle company makes 5,000 saddles a year. Making them costs direct materials $6, direct labor $4, variable overhead $3, and allocated fixed overhead $7 per unit — $20 per unit in total, or $100,000. An outside supplier offers saddles at $15 each, or $75,000. The naive answer is to buy and "save" $25,000. The differential answer asks which costs actually disappear if production stops: materials, labor, and variable overhead disappear ($13 per unit, $65,000 total), but the allocated fixed overhead is mostly the cost of keeping the factory lights on for other products — only $20,000 of the $35,000 fixed overhead is avoidable; $15,000 is unavoidable and will be paid either way. Relevant cost of making = 65,000 + 20,000 = $85,000. Relevant cost of buying = 5,000 × 15 = $75,000. Buying saves $10,000 — but only $10,000, not $25,000, because $15,000 of the "savings" was never a saving at all. (Including the unavoidable $15,000 on both sides gives the same answer: making $100,000 vs. buying $90,000.)</p>
<div class="callout"><strong>Key idea:</strong> Allocated fixed overhead is the classic trap in make-or-buy. Only the avoidable portion counts. The rest is paid whether you make or buy, so it cannot decide the question.</div>`
    },
    {
      heading: "Keep-or-Drop and Special Orders",
      html: `
<p>A <strong>keep-or-drop</strong> decision uses the same logic with the segment margin from Module 8. Dropping a product saves its contribution margin (lost) and its avoidable fixed costs (saved). If the contribution margin lost exceeds the fixed costs saved, dropping makes profit worse. A segment with a negative segment margin can still be worth keeping if dropping it loses more contribution margin than it saves in fixed costs — the segment margin already answers this, because it subtracts only traceable (avoidable) fixed costs.</p>
<p>A <strong>special order</strong> is a one-time order at a price below the normal selling price. With idle capacity, accept it if the special price exceeds the variable cost per unit plus any special fixed costs — fixed costs are already covered by regular business. <strong>Worked example:</strong> A company has idle capacity and is offered an order for 2,000 units at $18 each. Variable cost is $14 per unit and the order needs $5,000 of special tooling. Profit from the order = 2,000 × (18 − 14) − 5,000 = 8,000 − 5,000 = <strong>$3,000</strong>. Accept it. But if capacity is constrained, the order displaces regular sales, and the opportunity cost of the displaced contribution margin must be added — the order must cover that too.</p>`
    },
    {
      heading: "Sell or Process Further",
      html: `
<p>When a joint product can be sold at split-off or processed further, only the incremental revenue and incremental cost of further processing matter. Joint costs incurred before split-off are sunk for this decision. <strong>Worked example:</strong> A batch of paint can be sold as-is for $4,000, or processed further for an additional $1,500 and sold for $5,200. Incremental revenue = 5,200 − 4,000 = $1,200. Incremental cost = $1,500. Processing further loses $300 — sell as-is. The original $840 batch cost is irrelevant: it was spent before split-off and does not change with the decision.</p>
<p>The pattern is the same in every differential decision: find what differs, value it, and ignore the rest. Sunk costs, unavoidable costs, and allocated overhead that does not change are the three usual suspects to delete.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Relevant = future and different between alternatives. Sunk, unavoidable, and identical costs are irrelevant.</li>
<li>Make-or-buy: compare relevant cost of making (variable + avoidable fixed) with purchase price; only avoidable fixed overhead counts.</li>
<li>Keep-or-drop: drop only if avoidable fixed costs saved exceed contribution margin lost (negative segment margin).</li>
<li>Special order with idle capacity: accept if price exceeds variable cost plus special fixed costs.</li>
<li>Opportunity cost is the benefit forgone — include it whenever capacity is constrained.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Comparing full unit cost ($20) with the supplier's price ($15) and calling the difference the saving. Full cost includes unavoidable fixed overhead that will be paid anyway.</div>
<div class="callout"><strong>Common mistake:</strong> Accepting a special order priced below full cost without checking capacity. With idle capacity, variable cost is the right benchmark; with full capacity, the displaced regular sales are the real cost.</div>
<p><strong>Ready-to-work link:</strong> If you can build the two-column differential table for make-or-buy, keep-or-drop, and a special order — crossing out everything that does not differ — you can make the decisions managers actually face, and explain them in one page.</p>`
    }
  ],
  keyTerms: [
    { term: "Differential analysis", def: "Comparing alternatives using only the costs and revenues that differ between them." },
    { term: "Relevant cost", def: "A future cost that differs between alternatives." },
    { term: "Relevant revenue", def: "A future revenue that differs between alternatives." },
    { term: "Sunk cost", def: "A cost already incurred that cannot be changed by any current decision." },
    { term: "Avoidable cost", def: "A cost that disappears if an activity is stopped or an alternative is chosen." },
    { term: "Unavoidable cost", def: "A cost that will be paid regardless of which alternative is chosen." },
    { term: "Opportunity cost", def: "The benefit given up by choosing one alternative over another." },
    { term: "Make-or-buy decision", def: "Whether to produce a component internally or purchase it from an outside supplier." },
    { term: "Keep-or-drop decision", def: "Whether to keep or discontinue a product, department, or segment." },
    { term: "Special order", def: "A one-time order, often at a price below normal, evaluated on its incremental costs and revenues." },
    { term: "Sell or process further", def: "Whether to sell a joint product at split-off or process it further before selling." },
    { term: "Split-off point", def: "The point in a joint process where separate products become identifiable." },
    { term: "Joint costs", def: "Costs incurred before the split-off point, sunk for sell-or-process-further decisions." },
    { term: "Incremental revenue", def: "The additional revenue from choosing one alternative over another." },
    { term: "Incremental cost", def: "The additional cost from choosing one alternative over another." }
  ],
  video: {
    title: "Make or Buy Decision",
    embedUrl: "https://www.youtube.com/embed/vxZSaDtQgrs",
    note: "Edspira works the classic make-or-buy decision: a bicycle company deciding whether to make saddles or buy them. Watch it, then check the module's numbers — the real saving from buying is $10,000, not the $25,000 the full-cost comparison suggests, because most of the allocated fixed overhead is unavoidable.",
    more: [
      { title: "Sell or Process Further Decision", url: "https://www.youtube.com/watch?v=5bwD-jhZVHU" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A company makes 5,000 saddles a year. Variable cost of making is $13 per unit; avoidable fixed cost is $20,000; allocated fixed overhead is $7 per unit ($35,000 total, of which $20,000 is avoidable). A supplier offers saddles at $15 each. Compute (a) the relevant cost of making, (b) the cost of buying, and (c) the saving from buying.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Relevant cost of making = (13 × 5,000) + 20,000 = 65,000 + 20,000 = <strong>$85,000</strong>. Step 2: Cost of buying = 15 × 5,000 = <strong>$75,000</strong>. Step 3: Saving from buying = 85,000 − 75,000 = <strong>$10,000</strong>. The $15,000 of unavoidable fixed overhead is paid either way and is not a saving.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A special order offers 2,000 units at $18 each. Variable cost is $14 per unit and the order requires $5,000 of special tooling. The company has idle capacity. Should it accept, and what is the profit effect?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Contribution from the order = 2,000 × (18 − 14) = <strong>$8,000</strong>. Step 2: Less special tooling $5,000 → profit effect = <strong>+$3,000</strong>. Step 3: Accept — the order adds $3,000 of profit, and fixed costs are already covered by regular business.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A product line has sales of $200,000, variable costs of $120,000, and traceable fixed costs of $50,000. (a) What is its segment margin? (b) If the line is dropped, how does operating income change? (c) Should it be dropped?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Contribution margin = 200,000 − 120,000 = $80,000. Step 2: Segment margin = 80,000 − 50,000 = <strong>$30,000</strong>. Step 3: Dropping it loses $80,000 of contribution margin and saves $50,000 of fixed costs, so operating income <strong>falls by $30,000</strong>. Step 4: No — keep it; its segment margin is positive.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Paint can be sold as-is for $4,000 or processed further for $1,500 and sold for $5,200. The batch cost $840 to produce up to split-off. Should the company process further? Show the incremental analysis.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Incremental revenue = 5,200 − 4,000 = $1,200. Step 2: Incremental cost = $1,500. Step 3: Net effect = 1,200 − 1,500 = <strong>−$300</strong>. Sell as-is. The $840 batch cost is a sunk joint cost and is irrelevant to the decision.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A machine was bought last year for $40,000 and is now worth $8,000 if sold. A manager argues the $40,000 should count in the decision to replace it. Is the $40,000 relevant? What about the $8,000?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The $40,000 is a <strong>sunk cost</strong> — already spent, unrecoverable, and the same under every alternative, so it is irrelevant. Step 2: The $8,000 is relevant — it is a future cash inflow that differs between keeping the machine (forgo the sale) and replacing it (receive the sale). It is the opportunity cost of keeping the machine.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A special order for 1,000 units at $22 each is offered. Variable cost is $16 per unit. The company is operating at full capacity, and filling the order would displace 1,000 units of regular sales that earn $10 of contribution margin each. Should the company accept?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Contribution from the special order = 1,000 × (22 − 16) = $6,000. Step 2: Opportunity cost of displaced regular sales = 1,000 × 10 = $10,000. Step 3: Net effect = 6,000 − 10,000 = <strong>−$4,000</strong>. Reject — with capacity constrained, the order costs more in lost regular profit than it earns.</p>"
    }
  ],
  quiz: [
    {
      q: "A cost is relevant to a decision only if it is:",
      choices: ["Large", "A future cost that differs between the alternatives", "A fixed cost", "Already recorded in the ledger"],
      answer: 1,
      explanation: "Correct: (b). Relevance requires both futurity and difference. (a) Size does not make a cost relevant. (c) Fixed costs are often unavoidable and irrelevant. (d) Past recording makes a cost sunk."
    },
    {
      q: "A sunk cost is:",
      choices: ["A cost that will be incurred in the future", "A cost already incurred that cannot be changed", "An avoidable fixed cost", "The same as an opportunity cost"],
      answer: 1,
      explanation: "Correct: (b). Sunk costs are past and unchangeable, so they cannot affect a current choice. (a) describes a future cost. (c) is a cost that disappears if an activity stops. (d) is the benefit forgone by a choice."
    },
    {
      q: "Make 5,000 saddles: variable cost $13/unit, avoidable fixed $20,000. Buy at $15 each. The relevant cost of making is:",
      choices: ["$100,000", "$85,000", "$65,000", "$75,000"],
      answer: 1,
      explanation: "Correct: (b). (13 × 5,000) + 20,000 = $85,000. (a) is the full cost including unavoidable overhead. (c) omits avoidable fixed cost. (d) is the purchase cost."
    },
    {
      q: "In the saddle example, buying saves:",
      choices: ["$25,000", "$10,000", "$35,000", "Nothing — making is cheaper"],
      answer: 1,
      explanation: "Correct: (b). Relevant making cost $85,000 minus buying cost $75,000 = $10,000. (a) is the full-cost difference, which wrongly counts $15,000 of unavoidable overhead as a saving. (c) is the total allocated overhead. (d) reverses the conclusion."
    },
    {
      q: "A special order of 2,000 units at $18, variable cost $14, special tooling $5,000, idle capacity. Profit effect is:",
      choices: ["+$8,000", "+$3,000", "−$5,000", "+$36,000"],
      answer: 1,
      explanation: "Correct: (b). 2,000 × (18 − 14) = $8,000 contribution, minus $5,000 tooling = +$3,000. (a) forgets the tooling. (c) counts only the tooling. (d) is total revenue."
    },
    {
      q: "A product line with contribution margin $80,000 and traceable fixed costs $50,000, if dropped, changes operating income by:",
      choices: ["+$30,000", "−$30,000", "−$80,000", "$0"],
      answer: 1,
      explanation: "Correct: (b). Dropping loses $80,000 of contribution margin and saves $50,000 of fixed costs: net −$30,000. (a) reverses the sign. (c) ignores the fixed cost saving. (d) ignores both effects."
    },
    {
      q: "Processing further is worthwhile only if:",
      choices: ["Incremental revenue exceeds incremental cost", "Total revenue exceeds total cost", "The joint cost is recovered", "The product can be sold as-is"],
      answer: 0,
      explanation: "Correct: (a). Only the incremental revenue and cost of further processing matter; joint costs are sunk. (b) mixes sunk costs into the decision. (c) is irrelevant — joint costs are spent either way. (d) is true in both cases."
    },
    {
      q: "Opportunity cost matters most when:",
      choices: ["Capacity is idle", "Capacity is constrained and a decision displaces other profitable work", "All costs are variable", "The order price exceeds full cost"],
      answer: 1,
      explanation: "Correct: (b). With constrained capacity, taking an order means giving up other profit — that forgone profit is a real cost of the decision. (a) is when opportunity cost is zero. (c) and (d) do not create opportunity cost."
    }
  ],
  studyGuide: `
<h3>Module 9 — Differential Analysis: Quick Reference</h3>
<p><strong>Rule:</strong> Only future costs and revenues that differ between alternatives are relevant. Delete sunk costs, unavoidable costs, and anything identical in both columns.</p>
<p><strong>Make-or-buy anchor:</strong> Making 5,000 saddles: variable $13 × 5,000 = $65,000 + avoidable fixed $20,000 = $85,000. Buying: $15 × 5,000 = $75,000. Saving from buying: $10,000 (not $25,000 — $15,000 of overhead is unavoidable).</p>
<p><strong>Special order (idle capacity):</strong> Accept if price > variable cost per unit + special fixed costs ÷ units. Anchor: 2,000 × ($18 − $14) − $5,000 = +$3,000 → accept.</p>
<p><strong>Keep-or-drop:</strong> Drop only if avoidable fixed costs saved exceed contribution margin lost; segment margin is the test.</p>
<p><strong>Sell or process further:</strong> Compare incremental revenue with incremental cost only; joint costs are sunk.</p>
<p><strong>Watch out:</strong> Full unit cost is the classic trap — it includes unavoidable fixed overhead. And with constrained capacity, add the opportunity cost of displaced sales.</p>
<p><strong>Self-check:</strong> Build a two-column table for each decision type, cross out everything that does not differ, and compare the totals.</p>
`
};
