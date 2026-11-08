// ACC 102 - Module 3: Job-Order & Process Costing
module.exports = {
  number: 3,
  slug: "job-order-process-costing",
  title: "Job-Order & Process Costing",
  estTime: "3–4 hours",
  objectives: [
    "Explain when job-order costing fits and when process costing fits.",
    "Trace direct materials and direct labor to a job and apply manufacturing overhead with a predetermined rate.",
    "Compute a job's total cost and cost per unit.",
    "Compute equivalent units and cost per equivalent unit in process costing.",
    "Explain the flow of costs through Work in Process, Finished Goods, and Cost of Goods Sold."
  ],
  sections: [
    {
      heading: "Two Systems for Two Kinds of Production",
      html: `
<p>Some companies make unique things: a custom kitchen, a bridge, a batch of wedding invitations. Each order is different, so costs are tracked <strong>by job</strong> — that is job-order costing. Other companies make identical things in a continuous flow: gallons of paint, tons of paper, bottles of juice. Units are indistinguishable, so costs are tracked <strong>by department and period</strong> and averaged over all units — that is process costing. The choice is driven by the product, not by preference: if you can point at a unit and say which customer ordered it, use job-order; if units are interchangeable, use process.</p>
<p>Both systems share the same three cost ingredients — direct materials, direct labor, and manufacturing overhead — and both move costs through the same accounts: Work in Process, then Finished Goods, then Cost of Goods Sold. What differs is the unit of accumulation: a job in one, a department-period in the other.</p>
<div class="callout"><strong>Key idea:</strong> Job-order costing answers "What did this job cost?" Process costing answers "What did this department's output cost this month?" Pick the question your production actually asks.</div>`
    },
    {
      heading: "Job-Order Costing: The Job Cost Sheet",
      html: `
<p>In job-order costing, each job gets a <strong>job cost sheet</strong> that accumulates its direct materials (from materials requisitions), its direct labor (from time tickets), and its applied manufacturing overhead. Overhead cannot be traced, so it is applied using a <strong>predetermined overhead rate</strong>, set before the period begins: estimated total manufacturing overhead ÷ estimated total activity (direct labor hours, machine hours, or direct labor cost). Applying overhead with a rate set in advance lets the company price and bill jobs during the period instead of waiting until actual overhead is known at year-end.</p>
<p><strong>Worked example:</strong> Job 214 makes 400 custom lamps. Direct materials $18,000, direct labor $12,000, predetermined overhead rate 150% of direct labor cost. Step 1: applied overhead = 1.50 × 12,000 = <strong>$18,000</strong>. Step 2: total job cost = 18,000 + 12,000 + 18,000 = <strong>$48,000</strong>. Step 3: cost per unit = 48,000 ÷ 400 = <strong>$120 per lamp</strong>. If the company prices at cost plus 25%, the selling price is $150 per lamp.</p>
<div class="callout"><strong>Key idea:</strong> The predetermined rate trades precision for timeliness. Actual overhead will differ from applied overhead; the difference (underapplied or overapplied) is cleaned up at period end, usually against Cost of Goods Sold.</div>`
    },
    {
      heading: "Process Costing: Equivalent Units",
      html: `
<p>Process costing has one complication job-order does not: at month-end, some units are only partly finished. You cannot count a half-finished unit as a whole unit, so you convert work in process into <strong>equivalent units</strong>: the number of whole units that the partially finished work represents. If 1,000 units are 60% complete for conversion costs, they equal 600 equivalent units for conversion.</p>
<p><strong>Worked example:</strong> A department starts the month with no beginning inventory, starts 10,000 units, completes 8,000, and leaves 2,000 units 50% complete for conversion. Materials are added at the start, so materials equivalent units = 10,000. Conversion equivalent units = 8,000 + (2,000 × 50%) = 9,000. Costs: materials $50,000, conversion $36,000. Cost per equivalent unit: materials 50,000 ÷ 10,000 = $5.00; conversion 36,000 ÷ 9,000 = $4.00; total $9.00 per unit. Cost of completed units = 8,000 × 9 = $72,000. Ending work in process = materials 2,000 × 5 = $10,000 plus conversion 1,000 × 4 = $4,000, for $14,000. Check: 72,000 + 14,000 = $86,000 = 50,000 + 36,000. The costs reconcile.</p>`
    },
    {
      heading: "Cost Flows Through the Accounts",
      html: `
<p>In both systems, costs flow the same way. Materials enter Work in Process when requisitioned; labor enters when worked; overhead enters when applied. When a job is finished (job-order) or units are completed (process), their cost moves from Work in Process to Finished Goods. When the product sells, the cost moves from Finished Goods to Cost of Goods Sold on the income statement. Costs that stay in Work in Process or Finished Goods at period end are assets on the balance sheet; only sold costs become expenses.</p>
<p>That flow is why the schedule of cost of goods manufactured matters: it proves that beginning Work in Process + manufacturing costs added − ending Work in Process = cost of goods manufactured. If the numbers do not reconcile, something was misclassified or lost — and in a real plant, "lost" usually means a counting error worth finding.</p>
<div class="callout"><strong>Key idea:</strong> Unsold costs are assets; sold costs are expenses. The whole costing system is a machine for deciding, at each moment, which costs have become expenses and which are still sitting on the shelf.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Unique, traceable orders → job-order costing. Identical, continuous output → process costing.</li>
<li>Predetermined overhead rate = estimated overhead ÷ estimated activity; applied overhead = rate × actual activity.</li>
<li>Job cost = direct materials + direct labor + applied overhead; divide by units for unit cost.</li>
<li>Equivalent units convert partly finished work into whole-unit equivalents, separately for materials and conversion.</li>
<li>Costs flow: Work in Process → Finished Goods → Cost of Goods Sold.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Applying overhead with actual overhead instead of the predetermined rate during the period. Actual overhead is not known until the period ends — that is exactly why the rate is set in advance.</div>
<div class="callout"><strong>Common mistake:</strong> Using one equivalent-unit count for both materials and conversion. Materials are often added at the start (100% complete) while conversion is partial — compute them separately.</div>
<p><strong>Ready-to-work link:</strong> If you can build a job cost sheet, apply overhead, and reconcile a process department's costs to the penny, you can explain to any employer how product costs are actually built.</p>`
    }
  ],
  keyTerms: [
    { term: "Job-order costing", def: "A costing system that accumulates costs by individual job or order, used for unique products." },
    { term: "Process costing", def: "A costing system that accumulates costs by department and period, used for identical, continuous output." },
    { term: "Job cost sheet", def: "The record that accumulates direct materials, direct labor, and applied overhead for one job." },
    { term: "Predetermined overhead rate", def: "Estimated total manufacturing overhead divided by estimated total activity, set before the period." },
    { term: "Applied overhead", def: "Manufacturing overhead assigned to jobs or departments using the predetermined rate times actual activity." },
    { term: "Underapplied overhead", def: "Applied overhead less than actual overhead; the shortfall is adjusted at period end." },
    { term: "Overapplied overhead", def: "Applied overhead greater than actual overhead; the excess is adjusted at period end." },
    { term: "Equivalent units", def: "The number of whole units that partially completed work represents, computed separately for materials and conversion." },
    { term: "Conversion costs", def: "Direct labor plus manufacturing overhead — the cost of converting materials into finished goods." },
    { term: "Work in Process", def: "The inventory account holding costs of units not yet completed." },
    { term: "Finished Goods", def: "The inventory account holding costs of completed units not yet sold." },
    { term: "Cost of goods manufactured", def: "The total cost of goods completed during a period: beginning WIP + costs added − ending WIP." },
    { term: "Materials requisition", def: "The document authorizing materials to be issued from stores to a job or department." },
    { term: "Time ticket", def: "The record of labor hours worked on a specific job." }
  ],
  video: {
    title: "Job Order Costing",
    embedUrl: "https://www.youtube.com/embed/Uw_52M9GLbg",
    note: "Edspira explains job-order costing: how costs are tracked to individual jobs and how overhead is applied. Watch it, then redo the Job 214 example in this module from the job cost sheet alone.",
    more: [
      { title: "ACC 406 (Managerial Accounting) - Job Order Costing Example - Ryerson University", url: "https://www.youtube.com/watch?v=Ffe4gp3VEQ0" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Job 214: direct materials $18,000, direct labor $12,000, 400 lamps produced, predetermined overhead rate 150% of direct labor cost. Compute (a) applied overhead, (b) total job cost, (c) cost per lamp, and (d) the selling price at cost plus 25%.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Applied overhead = 1.50 × 12,000 = <strong>$18,000</strong>. Step 2: Total job cost = 18,000 + 12,000 + 18,000 = <strong>$48,000</strong>. Step 3: Cost per lamp = 48,000 ÷ 400 = <strong>$120</strong>. Step 4: Selling price = 120 × 1.25 = <strong>$150 per lamp</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Estimated manufacturing overhead is $240,000 and estimated direct labor hours are 60,000. (a) What is the predetermined overhead rate per direct labor hour? (b) A job uses 800 direct labor hours; how much overhead is applied to it?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Rate = 240,000 ÷ 60,000 = <strong>$4.00 per direct labor hour</strong>. Step 2: Applied overhead = 4.00 × 800 = <strong>$3,200</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A department starts 10,000 units, completes 8,000, and leaves 2,000 units 50% complete for conversion. Materials are added at the start. Costs: materials $50,000, conversion $36,000. Compute (a) equivalent units for materials and conversion, (b) cost per equivalent unit for each, (c) cost of completed units, and (d) ending work in process.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Materials equivalent units = 10,000; conversion = 8,000 + (2,000 × 50%) = <strong>9,000</strong>. Step 2: Materials cost per unit = 50,000 ÷ 10,000 = <strong>$5.00</strong>; conversion = 36,000 ÷ 9,000 = <strong>$4.00</strong>; total $9.00. Step 3: Completed units = 8,000 × 9 = <strong>$72,000</strong>. Step 4: Ending WIP = (2,000 × 5) + (1,000 × 4) = 10,000 + 4,000 = <strong>$14,000</strong>. Check: 72,000 + 14,000 = 86,000 = 50,000 + 36,000.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Applied overhead for the year is $180,000 and actual overhead is $190,000. Is overhead underapplied or overapplied, by how much, and what does the adjustment do to Cost of Goods Sold?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Applied ($180,000) is less than actual ($190,000), so overhead is <strong>underapplied by $10,000</strong>. Step 2: Too little cost was put into jobs during the year, so Cost of Goods Sold is increased by $10,000 at period end to record the missing cost.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Beginning Work in Process is $20,000, manufacturing costs added during the month are $150,000, and ending Work in Process is $25,000. Compute cost of goods manufactured.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Cost of goods manufactured = beginning WIP + costs added − ending WIP. Step 2: 20,000 + 150,000 − 25,000 = <strong>$145,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Which costing system fits each business, and why? (a) A firm that builds custom yachts, one at a time. (b) A refinery that produces gasoline continuously. (c) A print shop that makes 500 identical flyers per order.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) <strong>Job-order</strong> — each yacht is unique and traceable to its customer. Step 2: (b) <strong>Process</strong> — gasoline is identical and flows continuously; units are interchangeable. Step 3: (c) <strong>Job-order</strong> — each order is a distinct batch with its own materials and labor, even though units within the batch are identical.</p>"
    }
  ],
  quiz: [
    {
      q: "Job-order costing is most appropriate when:",
      choices: ["Products are identical and produced continuously", "Each order is unique and costs can be traced to it", "The company has no overhead costs", "All units are sold the same day they are made"],
      answer: 1,
      explanation: "Correct: (b). Unique, traceable orders are the job-order case. (a) describes process costing. (c) is irrelevant — overhead exists in both systems. (d) is about sales timing, not costing."
    },
    {
      q: "The predetermined overhead rate is computed as:",
      choices: ["Actual overhead ÷ actual activity", "Estimated overhead ÷ estimated activity, set before the period", "Applied overhead ÷ units completed", "Total manufacturing cost ÷ units sold"],
      answer: 1,
      explanation: "Correct: (b). The rate is set in advance from estimates so jobs can be costed during the period. (a) can only be computed after the period ends. (c) and (d) are not the rate's definition."
    },
    {
      q: "Job 214: materials $18,000, labor $12,000, overhead applied at 150% of labor, 400 units. Cost per unit is:",
      choices: ["$75", "$120", "$105", "$90"],
      answer: 1,
      explanation: "Correct: (b). Applied overhead = 1.50 × 12,000 = $18,000; total = $48,000; 48,000 ÷ 400 = $120. (a) divides only materials and labor by units. (c) uses 100% overhead. (d) omits overhead."
    },
    {
      q: "Equivalent units for conversion are needed because:",
      choices: ["Some units are only partly finished at period end", "Materials are added at the end of the process", "Overhead is always overapplied", "Finished goods are never counted"],
      answer: 0,
      explanation: "Correct: (a). Partly finished units must be converted to whole-unit equivalents to average costs fairly. (b) is a materials-timing fact, not the reason for equivalent units. (c) and (d) are false."
    },
    {
      q: "A department completes 8,000 units and has 2,000 units 50% complete for conversion. Conversion equivalent units are:",
      choices: ["10,000", "9,000", "8,000", "1,000"],
      answer: 1,
      explanation: "Correct: (b). 8,000 + (2,000 × 50%) = 9,000. (a) counts the ending units as whole. (c) ignores the work done on ending units. (d) counts only the ending equivalent units."
    },
    {
      q: "Applied overhead of $180,000 and actual overhead of $190,000 means overhead is:",
      choices: ["Overapplied by $10,000", "Underapplied by $10,000", "Perfectly applied", "Underapplied by $370,000"],
      answer: 1,
      explanation: "Correct: (b). Applied is less than actual by $10,000, so too little was charged to jobs. (a) reverses the comparison. (c) requires equality. (d) adds the numbers."
    },
    {
      q: "Cost of goods manufactured equals:",
      choices: ["Beginning WIP + costs added − ending WIP", "Beginning Finished Goods + costs added − ending Finished Goods", "Cost of goods sold + ending WIP", "Total manufacturing costs only"],
      answer: 0,
      explanation: "Correct: (a). That is the definition of the cost of goods completed in the period. (b) describes cost of goods available for sale. (c) and (d) omit the WIP reconciliation."
    },
    {
      q: "When a job is finished, its cost moves from:",
      choices: ["Finished Goods to Work in Process", "Work in Process to Finished Goods", "Cost of Goods Sold to Finished Goods", "Raw Materials to Cost of Goods Sold"],
      answer: 1,
      explanation: "Correct: (b). Completion transfers cost from WIP to Finished Goods; sale later moves it to Cost of Goods Sold. (a) reverses the flow. (c) reverses the sale step. (d) skips both intermediate accounts."
    }
  ],
  studyGuide: `
<h3>Module 3 — Job-Order & Process Costing: Quick Reference</h3>
<p><strong>Choose by product:</strong> Unique, traceable orders → job-order. Identical, continuous flow → process.</p>
<div class="formula">Predetermined overhead rate = Estimated overhead ÷ Estimated activity &nbsp;|&nbsp; Applied overhead = Rate × Actual activity</div>
<p><strong>Job cost:</strong> Direct materials + direct labor + applied overhead; divide by units for unit cost. Anchor: Job 214 → $48,000 total, $120 per lamp.</p>
<p><strong>Equivalent units:</strong> Completed units + (ending WIP × % complete), computed separately for materials and conversion.</p>
<p><strong>Process anchor:</strong> 10,000 started, 8,000 completed, 2,000 at 50% → materials EU 10,000 ($5.00), conversion EU 9,000 ($4.00); completed $72,000, ending WIP $14,000.</p>
<p><strong>Flow:</strong> Work in Process → Finished Goods → Cost of Goods Sold. Unsold costs stay as assets.</p>
<p><strong>Watch out:</strong> Use the predetermined rate during the period, not actual overhead; and never use one equivalent-unit count for both materials and conversion.</p>
<p><strong>Self-check:</strong> Rebuild Job 214 and the process example from scratch, then check that the process costs reconcile: completed + ending WIP = total costs to account for.</p>
`
};
