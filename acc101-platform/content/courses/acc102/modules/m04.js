// ACC 102 - Module 4: Activity-Based Costing
module.exports = {
  number: 4,
  slug: "activity-based-costing",
  title: "Activity-Based Costing",
  estTime: "3–4 hours",
  objectives: [
    "Explain why a single plantwide overhead rate distorts product costs.",
    "Identify activities, activity cost pools, and cost drivers.",
    "Compute activity rates and assign overhead with activity-based costing.",
    "Compare ABC product costs with traditional product costs and explain the difference.",
    "Explain when ABC is worth its cost and when it is not."
  ],
  sections: [
    {
      heading: "The Problem With One Overhead Rate",
      html: `
<p>Traditional costing assigns all overhead with one rate — often a percentage of direct labor or a rate per direct labor hour. That worked when overhead was small and labor was the main cost. Today overhead is large and driven by many things: setups, inspections, orders, machine time. A single rate assumes every product consumes overhead in proportion to labor, and when that assumption is false, the costs are wrong in a predictable direction: high-volume, simple products are overcosted and low-volume, complex products are undercosted.</p>
<p>That is not a rounding error. It is a pricing trap: the company overprices the products it makes efficiently and underprices the products that actually eat its resources, then wonders why competitors keep winning the simple orders and why the complex orders lose money.</p>
<div class="callout"><strong>Key idea:</strong> A single overhead rate is a claim that one driver explains all overhead. In a modern plant that claim is almost always false — and the distortion falls exactly on the products that differ most from average.</div>`
    },
    {
      heading: "Activities, Pools, and Drivers",
      html: `
<p>Activity-based costing (ABC) fixes the problem by following the real chain of cause and effect: <strong>activities</strong> consume resources, and <strong>products consume activities</strong>. Step 1: identify the activities that cause overhead — setting up machines, machining, inspecting, processing orders. Step 2: gather each activity's cost into an <strong>activity cost pool</strong>. Step 3: pick a <strong>cost driver</strong> for each pool — the measure of how much of the activity a product uses (number of setups, machine hours, number of inspections). Step 4: compute an <strong>activity rate</strong> = pool cost ÷ total driver quantity. Step 5: assign overhead to each product as rate × driver quantity used.</p>
<p><strong>Worked example:</strong> Setup pool $60,000 with 300 setups per year → activity rate = 60,000 ÷ 300 = <strong>$200 per setup</strong>. Machining pool $120,000 with 6,000 machine hours → rate = 120,000 ÷ 6,000 = <strong>$20 per machine hour</strong>. A product that needs 40 setups and 1,000 machine hours gets 40 × 200 + 1,000 × 20 = 8,000 + 20,000 = <strong>$28,000 of overhead</strong>.</p>`
    },
    {
      heading: "ABC vs. Traditional: A Worked Comparison",
      html: `
<p>Take two products. Product A is high-volume and simple: 10,000 units, 20 setups, 4,000 machine hours. Product B is low-volume and complex: 1,000 units, 100 setups, 1,000 machine hours. Total overhead is $180,000 ($60,000 setups + $120,000 machining). Under a traditional rate based on machine hours (5,000 total hours), the rate is $36 per machine hour: A gets 4,000 × 36 = $144,000 ($14.40 per unit) and B gets 1,000 × 36 = $36,000 ($36.00 per unit).</p>
<p>Under ABC, A gets setups 20 × 200 = $4,000 plus machining 4,000 × 20 = $80,000, for $84,000 ($8.40 per unit). B gets setups 100 × 200 = $20,000 plus machining 1,000 × 20 = $20,000, for $40,000 ($40.00 per unit). The traditional system overcosts A by $60,000 and undercosts B by $4,000 in total — and per unit, B's true overhead is $40.00, not $36.00. A manager pricing B from the traditional cost would underprice it and lose money on every sale.</p>
<div class="callout"><strong>Key idea:</strong> ABC does not change total overhead — $180,000 is $180,000 either way. It changes <em>who carries it</em>, and that changes pricing, product-mix, and keep-or-drop decisions.</div>`
    },
    {
      heading: "When ABC Is Worth It — and Its Limits",
      html: `
<p>ABC is not free. It requires interviews, activity measurement, and ongoing maintenance, and it produces two cost systems: the traditional one for financial statements (ABC is not GAAP for external reporting) and ABC for internal decisions. Companies adopt it when overhead is large, products are diverse, and the cost of a wrong decision exceeds the cost of the system — typically manufacturers with many products and many activities.</p>
<p>ABC also has honest limits. It still allocates some costs by judgment, it can be gamed by choosing flattering drivers, and it measures the cost of activities, not their value — an activity can be measured precisely and still be waste. The best use of ABC is as a decision lens: it shows which products, customers, and activities actually consume resources, so managers can simplify products, drop unprofitable customers, or eliminate activities that add cost without adding value.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>One overhead rate distorts costs when products differ in complexity: simple, high-volume products are overcosted; complex, low-volume products are undercosted.</li>
<li>ABC chain: activities consume resources, products consume activities. Pools → drivers → rates → assignment.</li>
<li>Activity rate = pool cost ÷ total driver quantity. Overhead assigned = rate × driver quantity used.</li>
<li>ABC reallocates the same total overhead; it does not create or destroy cost.</li>
<li>ABC is for internal decisions, not for GAAP financial statements.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Picking a driver that is easy to count instead of one that causes the cost. Number of units is easy — and it is exactly the driver that created the distortion in the first place.</div>
<div class="callout"><strong>Common mistake:</strong> Saying ABC "lowers costs." It does not. It reveals costs. Savings come only from the decisions managers make with the revealed information.</div>
<p><strong>Ready-to-work link:</strong> If you can compute activity rates, assign overhead under both systems, and explain in one sentence why the two answers differ, you can walk into any costing discussion and be the person who spots the distortion.</p>`
    }
  ],
  keyTerms: [
    { term: "Activity-based costing (ABC)", def: "A costing system that assigns overhead by activities, using a cost driver for each activity cost pool." },
    { term: "Activity", def: "A task that consumes resources and causes overhead, such as setting up machines or inspecting products." },
    { term: "Activity cost pool", def: "The total cost of one activity, gathered together for assignment." },
    { term: "Cost driver", def: "The measure of how much of an activity a product or customer uses, such as number of setups or machine hours." },
    { term: "Activity rate", def: "Pool cost divided by total driver quantity; the cost of one unit of the driver." },
    { term: "Plantwide overhead rate", def: "A single overhead rate for the whole plant, usually based on direct labor hours or machine hours." },
    { term: "Departmental overhead rate", def: "Separate overhead rates for each department, a middle step between plantwide and ABC." },
    { term: "Overcosted", def: "Assigned more overhead than the product actually caused." },
    { term: "Undercosted", def: "Assigned less overhead than the product actually caused." },
    { term: "Batch-level activity", def: "An activity performed once per batch, such as a machine setup, regardless of batch size." },
    { term: "Unit-level activity", def: "An activity performed for each unit, such as machining one part." },
    { term: "Product-level activity", def: "An activity supporting a whole product line, such as product design." },
    { term: "Facility-level activity", def: "An activity supporting the whole facility, such as plant management or rent." },
    { term: "Customer profitability analysis", def: "Using ABC to measure the true cost of serving each customer and each customer's profit." }
  ],
  video: {
    title: "Activity Based Costing vs. Traditional Costing",
    embedUrl: "https://www.youtube.com/embed/aDycx2hJ6tg",
    note: "Edspira compares activity-based costing with traditional costing and shows how the two systems assign overhead differently. Watch it, then check the worked comparison in this module: which product does the traditional rate overcost, and by how much per unit?",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Setup pool $60,000, 300 setups per year. Machining pool $120,000, 6,000 machine hours. Compute (a) the setup activity rate, (b) the machining activity rate, and (c) the overhead assigned to a product using 40 setups and 1,000 machine hours.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Setup rate = 60,000 ÷ 300 = <strong>$200 per setup</strong>. Step 2: Machining rate = 120,000 ÷ 6,000 = <strong>$20 per machine hour</strong>. Step 3: Assigned overhead = (40 × 200) + (1,000 × 20) = 8,000 + 20,000 = <strong>$28,000</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Product A: 10,000 units, 20 setups, 4,000 machine hours. Product B: 1,000 units, 100 setups, 1,000 machine hours. Total overhead $180,000. (a) Under a traditional rate of $36 per machine hour, what overhead per unit does each product get? (b) Under ABC (setup $200, machining $20), what overhead per unit does each get?</p>",
      solution: "<p><strong>Solution:</strong> Step 1 (traditional): A = 4,000 × 36 = $144,000, or <strong>$14.40 per unit</strong>; B = 1,000 × 36 = $36,000, or <strong>$36.00 per unit</strong>. Step 2 (ABC): A = (20 × 200) + (4,000 × 20) = 4,000 + 80,000 = $84,000, or <strong>$8.40 per unit</strong>; B = (100 × 200) + (1,000 × 20) = 20,000 + 20,000 = $40,000, or <strong>$40.00 per unit</strong>. Step 3: Traditional overcosts A by $6.00 per unit and undercosts B by $4.00 per unit.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> An inspection pool costs $45,000 and the company performs 900 inspections per year. A product line requires 150 inspections. Compute (a) the activity rate and (b) the inspection overhead assigned to that line.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Rate = 45,000 ÷ 900 = <strong>$50 per inspection</strong>. Step 2: Assigned = 150 × 50 = <strong>$7,500</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A company has two customers. Customer X orders 10 times a year in large batches; Customer Y orders 100 times a year in small batches. Order-processing cost is $90 per order. Direct product costs are identical. Which customer is more expensive to serve on order processing, and by how much per year?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Customer X = 10 × 90 = <strong>$900 per year</strong>. Step 2: Customer Y = 100 × 90 = <strong>$9,000 per year</strong>. Step 3: Customer Y costs <strong>$8,100 more per year</strong> to serve on order processing alone — a difference a single overhead rate based on units sold would completely hide.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Classify each activity as unit-level, batch-level, product-level, or facility-level: (a) machining one part, (b) setting up a machine for a batch, (c) designing a new product, (d) heating the factory.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) <strong>Unit-level</strong> — done for each unit. Step 2: (b) <strong>Batch-level</strong> — done once per batch. Step 3: (c) <strong>Product-level</strong> — supports a whole product line. Step 4: (d) <strong>Facility-level</strong> — supports the whole plant.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A manager says, \"ABC lowered our costs by $60,000 this year.\" Explain the error in that statement in two or three sentences.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: ABC reallocates the same total overhead; it cannot change the total cost the company incurred. Step 2: What ABC did was reveal that $60,000 of overhead had been assigned to the wrong product. Step 3: Any actual saving came from the decisions made with that information — repricing, dropping, or simplifying — not from the costing system itself.</p>"
    }
  ],
  quiz: [
    {
      q: "A single plantwide overhead rate distorts product costs mainly when:",
      choices: ["All products are identical", "Products differ in complexity and volume, so they consume overhead differently", "Overhead is zero", "Direct labor is the only cost"],
      answer: 1,
      explanation: "Correct: (b). One rate assumes all products consume overhead in the same proportion, which fails when products differ. (a) is the case where one rate works fine. (c) and (d) remove the overhead problem entirely."
    },
    {
      q: "In ABC, an activity rate is computed as:",
      choices: ["Total overhead ÷ total units", "Pool cost ÷ total driver quantity", "Direct labor cost ÷ machine hours", "Total cost ÷ selling price"],
      answer: 1,
      explanation: "Correct: (b). Each pool has its own rate from its own driver. (a) is a plantwide unit rate. (c) mixes unrelated quantities. (d) is a margin calculation."
    },
    {
      q: "Setup pool $60,000, 300 setups. The activity rate is:",
      choices: ["$200 per setup", "$20 per setup", "$2,000 per setup", "$60 per setup"],
      answer: 0,
      explanation: "Correct: (a). 60,000 ÷ 300 = $200. (b) is the machining rate in the module example. (c) and (d) are arithmetic errors."
    },
    {
      q: "Under ABC, a product using 40 setups ($200 each) and 1,000 machine hours ($20 each) is assigned:",
      choices: ["$20,000", "$28,000", "$8,000", "$48,000"],
      answer: 1,
      explanation: "Correct: (b). (40 × 200) + (1,000 × 20) = 8,000 + 20,000 = $28,000. (a) counts only machining. (c) counts only setups. (d) adds the two rates' numerators incorrectly."
    },
    {
      q: "In the module's comparison, the traditional rate overcosted Product A and undercosted Product B. The reason is:",
      choices: ["Product B uses more machine hours", "Product A uses many setups relative to its machine hours", "Product B is low-volume and setup-heavy, so a machine-hour rate gives it too little of the setup pool", "Product A is more expensive to make"],
      answer: 2,
      explanation: "Correct: (c). B uses 100 of 120 setups but only 1,000 of 5,000 machine hours, so a machine-hour rate charges it for far less setup cost than it causes. (a) is false — A uses more machine hours. (b) is backwards — A uses few setups. (d) is the consequence, not the cause."
    },
    {
      q: "Setting up a machine for a batch is a:",
      choices: ["Unit-level activity", "Batch-level activity", "Product-level activity", "Facility-level activity"],
      answer: 1,
      explanation: "Correct: (b). A setup is performed once per batch regardless of batch size. (a) is per unit, e.g., machining one part. (c) supports a whole product line. (d) supports the whole facility."
    },
    {
      q: "ABC is used for:",
      choices: ["External financial statements under GAAP", "Internal decision-making, alongside a traditional system for external reporting", "Tax returns only", "Replacing the general ledger"],
      answer: 1,
      explanation: "Correct: (b). ABC is not GAAP for external reporting; companies keep a traditional system for statements and use ABC internally. (a) is wrong for that reason. (c) and (d) are not ABC's purpose."
    },
    {
      q: "The ABC chain of cause and effect is:",
      choices: ["Products consume resources; resources consume activities", "Activities consume resources; products consume activities", "Overhead consumes products; products consume labor", "Drivers consume pools; pools consume products"],
      answer: 1,
      explanation: "Correct: (b). Resources are consumed by activities, and products consume those activities — that is the chain ABC follows. (a) reverses it. (c) and (d) scramble the terms."
    }
  ],
  studyGuide: `
<h3>Module 4 — Activity-Based Costing: Quick Reference</h3>
<p><strong>Problem:</strong> One overhead rate overcosts simple, high-volume products and undercosts complex, low-volume products.</p>
<p><strong>Chain:</strong> Activities consume resources → products consume activities.</p>
<div class="formula">Activity rate = Pool cost ÷ Total driver quantity &nbsp;|&nbsp; Assigned overhead = Rate × Driver quantity used</div>
<p><strong>Anchors:</strong> Setup $60,000 ÷ 300 = $200 per setup. Machining $120,000 ÷ 6,000 = $20 per machine hour.</p>
<p><strong>Comparison anchor:</strong> Traditional ($36/MH): A $14.40/unit, B $36.00/unit. ABC: A $8.40/unit, B $40.00/unit. Same $180,000 total — different owners.</p>
<p><strong>Levels:</strong> Unit (machining one part) → batch (setup) → product (design) → facility (heating the plant).</p>
<p><strong>Watch out:</strong> ABC reveals costs; it does not cut them. And it is for internal decisions, not GAAP statements.</p>
<p><strong>Self-check:</strong> Given a pool cost and a driver total, compute the rate, assign it to two products, and explain in one sentence why the answers differ from a single-rate result.</p>
`
};
