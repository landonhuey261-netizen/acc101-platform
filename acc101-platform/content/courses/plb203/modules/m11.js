// Plumbing 203 - Module 11: Business Principles for Plumbers (NCCER L4; Stevens BUSN 106)
module.exports = {
  number: 11,
  slug: "business-principles-plumbers",
  title: "Business Principles for Plumbers",
  estTime: "3–4 hours",
  objectives: [
    "Explain the costs of running a plumbing business: labor, materials, overhead, and profit.",
    "Build a job price from its parts: materials, labor, overhead, markup, and tax.",
    "Compare hourly billing and flat-rate pricing, and know when each fits.",
    "Describe the paperwork of a job: estimates, invoices, change orders, and records.",
    "Explain the basics of running a small shop: licensing, insurance, and keeping customers."
  ],
  sections: [
    {
      heading: "The Business Behind the Wrench",
      html: `
<p>Most plumbers start as technicians and, sooner or later, have to think like business owners — whether they run their own shop or simply need to understand why their employer prices jobs the way it does. The wrench work is only half the job. The other half is the money: what a job costs, what it is sold for, and what is left over after everything is paid.</p>
<p>A plumbing business has four kinds of cost. <strong>Direct labor</strong> is the wages of the people doing the work, plus the taxes, insurance, and benefits that go with those wages — a technician who earns a given hourly wage costs the business substantially more per hour once those are added. <strong>Materials</strong> are the pipe, fittings, fixtures, and parts used on the job, plus the cost of getting them, storing them, and the waste and extra fittings every job consumes. <strong>Overhead</strong> is everything else: the truck, fuel, tools, phone, office, licenses, insurance, advertising, and the time spent on estimates that never become jobs. <strong>Profit</strong> is what is left after all of those are paid — and it is not a luxury. Profit is what buys the next truck, covers the slow month, and pays for the callback that nobody charged for.</p>
<p>The most common reason small trade businesses fail is not bad work — it is bad pricing. A plumber who charges only for labor and materials, and forgets overhead and profit, works hard and slowly goes broke. Every price must carry its share of all four costs.</p>
<div class="callout"><strong>Key idea:</strong> A price must cover labor, materials, overhead, and profit. Leave any one of them out and the business pays for it — usually a few months later, when the truck needs replacing and the money is not there.</div>`
    },
    {
      heading: "Building a Price, Step by Step",
      html: `
<p>Here is how a job price is built, in order. The numbers below are a teaching example with round figures, not a price list — real prices depend on local wages, material costs, and overhead.</p>
<p><strong>Step 1 — Materials.</strong> List every part the job needs, at its cost to you, and add a waste allowance for the fittings and pipe every job consumes. Then apply a material markup: the business buys, stocks, delivers, and guarantees those parts, and the markup pays for that service.</p>
<p><strong>Step 2 — Labor.</strong> Estimate the hours the job will take, and multiply by the loaded labor rate — the technician's wage plus taxes, insurance, and benefits, divided by the billable hours in a year. A technician who is paid for 2,080 hours a year but bills only 1,400 of them costs far more per billable hour than the wage suggests, because the other hours are driving, estimating, training, and callbacks.</p>
<p><strong>Step 3 — Overhead per job.</strong> Divide the month's fixed overhead by the number of jobs the business completes in a month. That is the overhead each job must carry. A business that does 40 jobs a month spreads its overhead thinly; a business that does 10 jobs a month must load each job heavily.</p>
<p><strong>Step 4 — Total and margin.</strong> Add materials, labor, and overhead. Then add the profit margin the business needs to survive and grow. The result is the price — and it should be quoted as a single clear number, in writing, before work starts.</p>
<p><strong>Worked example.</strong> A water heater swap: materials cost $600, marked up to $780. Labor: 4 hours at a loaded rate of $75, which is $300. Overhead per job: $120. Subtotal: $1,200. Add a 10% profit margin ($120) and the price is $1,320 before tax. Every number in that chain is visible and defensible — and if the customer asks why the job costs what it does, the plumber can answer.</p>
<div class="callout"><strong>Key idea:</strong> Price = materials (with markup) + labor (at the loaded rate) + overhead per job + profit. If you cannot show your work, you cannot defend your price — and you cannot tell whether you made money.</div>`
    },
    {
      heading: "Hourly Billing vs. Flat-Rate Pricing",
      html: `
<p>There are two main ways to charge, and each fits a different kind of work.</p>
<p><strong>Hourly billing (time and materials)</strong> charges for the hours worked plus the materials used. It is fair and simple for open-ended work — a leak hunt, a re-pipe with unknown conditions, a repair where the scope cannot be known until the wall is open. Its weakness is that the customer does not know the final price until the work is done, and the plumber has no incentive to work efficiently. It also punishes the fast, skilled technician: the better you are, the less you earn on the same job.</p>
<p><strong>Flat-rate pricing</strong> quotes one total price for a defined job — a water heater swap, a toilet replacement, a drain clearing — before work starts. The customer knows the price, the plumber keeps the benefit of working efficiently, and the price can be written down and agreed before a wrench is lifted. Its weakness is that the price must be built on good estimating: if the job is harder than expected, the plumber absorbs the difference. Flat rate only works when the scope is defined in writing and the price is built from real costs, not guessed.</p>
<p>Most successful service shops use flat rate for defined repairs and hourly billing for open-ended diagnostic and exploratory work — and they say which one applies before they start. The rule is simple: the customer should never be surprised by the bill.</p>
<div class="callout"><strong>Key idea:</strong> Flat rate for defined jobs (customer knows the price, plumber keeps the efficiency gain). Hourly for open-ended work (scope unknown until you look). Either way, agree the price in writing before work starts.</div>`
    },
    {
      heading: "The Paperwork: Estimates, Invoices, and Records",
      html: `
<p>Paperwork is not the boring part of the business — it is the part that gets you paid and keeps you out of disputes.</p>
<p><strong>Estimates</strong> are written, itemized, and dated. They state the scope (exactly what work is included), the price, how long the price is good for, and what is not included. A verbal estimate is a disagreement waiting to happen.</p>
<p><strong>Change orders</strong> record any change to the agreed scope: the customer asks for an extra fixture, or hidden damage is found once a wall is open. The change is written down, priced, and signed before the extra work is done. Work done without a signed change order is work the business may never be paid for.</p>
<p><strong>Invoices</strong> state what was done, what it cost, the payment terms, and the due date. They go out promptly — a business that invoices late gets paid late. <strong>Records</strong> are kept for every job: the estimate, the invoice, the parts used, the photos, and the customer's signature. Those records are what prove the work was done, what it cost, and what was agreed — and they are what the business's accountant, insurer, and licensing board will ask for.</p>
<p><strong>Licensing and insurance</strong> are the business's license to operate. In Michigan, plumbing work is done under a master plumber's license, and the business carries liability insurance and, where it has employees, workers' compensation. A shop that works without the right license or insurance is one accident away from losing everything.</p>
<div class="callout"><strong>Key idea:</strong> If it is not written down, it did not happen. Estimates, change orders, invoices, and job records are what get you paid and what protect you when a customer, an insurer, or a licensing board asks what was agreed.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>A price must cover four costs: direct labor (loaded), materials (with markup), overhead, and profit.</li>
<li>Build a price in order: materials + labor + overhead per job + profit margin.</li>
<li>Flat rate for defined jobs, hourly for open-ended work — and agree the price in writing before starting.</li>
<li>Paperwork is protection: written estimates, signed change orders, prompt invoices, complete job records.</li>
<li>Licensing and insurance are not optional — in Michigan, work is done under a master plumber's license.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Pricing by wage alone. A technician paid $30 an hour costs the business far more per billable hour once taxes, insurance, benefits, and non-billable time are counted. Price on the loaded rate, not the wage.</div>
<div class="callout"><strong>Common mistake:</strong> Doing extra work without a signed change order. The customer asked for it, you did it, and nobody agreed on a price — that is the most common way a profitable job becomes a loss.</div>
<p><strong>Ready-to-work link:</strong> Module 12 completes the business side: leading a crew, estimating larger jobs, and the path from apprentice to journeyman to master plumber in Michigan.</p>`
    }
  ],
  keyTerms: [
    { term: "Direct labor", def: "The cost of the people doing the work, including wages, taxes, insurance, and benefits." },
    { term: "Loaded labor rate", def: "The true hourly cost of a technician: wages plus taxes, insurance, and benefits, divided by billable hours." },
    { term: "Overhead", def: "The fixed costs of running a business: truck, fuel, tools, office, licenses, insurance, and advertising." },
    { term: "Markup", def: "The amount added to the cost of materials to cover handling, stocking, delivery, and warranty." },
    { term: "Profit margin", def: "The share of the price left as profit after labor, materials, and overhead are paid." },
    { term: "Flat-rate pricing", def: "Quoting one total price for a defined job before work starts." },
    { term: "Time and materials", def: "Billing for the hours worked plus the materials used, used for open-ended work." },
    { term: "Estimate", def: "A written, itemized statement of scope and price given before work starts." },
    { term: "Change order", def: "A written, signed record of a change to the agreed scope and its price." },
    { term: "Invoice", def: "The bill for completed work, stating what was done, the price, and the payment terms." },
    { term: "Billable hours", def: "The hours a technician spends on work that can be charged to a customer." },
    { term: "Scope", def: "Exactly what work is included in a job, agreed in writing before work starts." },
    { term: "Liability insurance", def: "Insurance that covers damage or injury the business causes to others." },
    { term: "Workers' compensation", def: "Insurance that covers employees injured on the job." },
    { term: "Callback", def: "A return visit to fix work that did not stay fixed, usually done at the business's cost." }
  ],
  video: {
    title: "Stop Bleeding Cash: How I Automated Plumbing Job Costing to Save 45% Profit",
    embedUrl: "https://www.youtube.com/embed/JytIDgZP9l8",
    note: "A master plumber walks through real job costing: loaded labor rates, material markup, and overhead per job. Follow the math and compare it with the price-building steps in this module.",
    more: [
      { title: "Estimate Tab: How to Complete TurboBid's Estimate Tab", url: "https://www.youtube.com/watch?v=mz7zxqYW3SQ" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A technician earns $28 per hour. With taxes, insurance, and benefits, the business's cost for that technician is $42 per hour. The technician bills 1,400 hours a year out of 2,080 paid hours. What is the loaded labor rate per billable hour? Show your work.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Annual cost = $42 x 2,080 = $87,360. Step 2: Divide by billable hours: $87,360 ÷ 1,400 = $62.40 per billable hour. Step 3: The loaded rate is $62.40 — more than double the $28 wage. Step 4: That is why pricing by wage alone loses money: the wage is not the cost.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A job uses $400 of materials. The shop applies a 30% material markup. What is the materials charge to the customer?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Markup = $400 x 0.30 = $120. Step 2: Materials charge = $400 + $120 = $520. Step 3: The markup pays for buying, stocking, delivering, and guaranteeing the parts. Step 4: A shop that charges materials at cost is giving that service away for free.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A shop's monthly overhead is $6,000 and it completes 50 jobs a month. What overhead must each job carry? If the shop's volume drops to 30 jobs a month with the same overhead, what does each job need to carry?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: At 50 jobs, overhead per job = $6,000 ÷ 50 = $120. Step 2: At 30 jobs, overhead per job = $6,000 ÷ 30 = $200. Step 3: The same business costs $80 more per job when volume falls — which is why slow months are dangerous and why pricing must be rechecked when volume changes. Step 4: Overhead does not shrink just because jobs do.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> Build the price for a toilet replacement: materials cost $220 (markup 25%), labor 3 hours at a loaded rate of $65, overhead per job $120, profit margin 10% on the subtotal. Show each step.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Materials with markup = $220 x 1.25 = $275. Step 2: Labor = 3 x $65 = $195. Step 3: Subtotal before profit = $275 + $195 + $120 = $590. Step 4: Profit = 10% x $590 = $59. Step 5: Price = $590 + $59 = $649 before tax. Step 6: Quote it as a flat rate for the defined job — toilet, wax ring, bolts, and haul-away included — in writing, before work starts.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A customer asks for an extra hose bibb while you are already on site for a water heater swap. What do you do before you install it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Treat it as a change order, not a favor. Step 2: Write down the extra work, price it, and get the customer's signature before you install it. Step 3: Explain plainly that the extra work is outside the agreed scope and price. Step 4: Work done without a signed change order is work the business may never be paid for — and the most common way a profitable job becomes a loss.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A leak hunt in an old house could take one hour or five, and the wall may need to be opened. Should you quote it flat rate or hourly, and why?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Quote it hourly (time and materials), because the scope cannot be known until the leak is found. Step 2: Explain to the customer why: a flat rate would have to assume the worst case, which overcharges them if the leak is simple, or undercharges you if it is hidden. Step 3: Agree the hourly rate and the process in writing — including that opening a wall needs approval and will be priced when the scope is known. Step 4: Switch to a flat rate once the fault is found and the repair is defined.</p>"
    }
  ],
  quiz: [
    {
      q: "A plumbing job's price must cover:",
      choices: ["Labor only", "Labor and materials only", "Labor, materials, overhead, and profit", "Materials only"],
      answer: 2,
      explanation: "Correct: (c). All four costs must be covered — leaving out overhead or profit is how a busy shop slowly goes broke. (a) ignores materials, overhead, and profit. (b) ignores overhead and profit. (d) ignores labor, overhead, and profit."
    },
    {
      q: "The loaded labor rate is higher than the technician's wage because it includes:",
      choices: ["Only the wage", "Taxes, insurance, benefits, and the non-billable hours the business still pays for", "The price of the truck only", "The customer's tip"],
      answer: 1,
      explanation: "Correct: (b). The loaded rate counts the full cost of employing the technician spread over the hours that can actually be billed. (a) The wage alone is not the cost. (c) The truck is overhead, not part of the labor rate. (d) Tips are not part of pricing."
    },
    {
      q: "A shop's monthly overhead is $6,000 and it completes 50 jobs a month. Overhead per job is:",
      choices: ["$60", "$120", "$300", "$6,000"],
      answer: 1,
      explanation: "Correct: (b). $6,000 ÷ 50 = $120 per job. (a) would be the figure at 100 jobs a month. (c) would be the figure at 20 jobs a month. (d) is the total monthly overhead, not the per-job share."
    },
    {
      q: "Materials cost $400 with a 30% markup. The materials charge is:",
      choices: ["$400", "$430", "$520", "$700"],
      answer: 2,
      explanation: "Correct: (c). $400 x 1.30 = $520. (a) is cost with no markup. (b) adds only $30. (d) would be a 75% markup."
    },
    {
      q: "Flat-rate pricing is best suited to:",
      choices: ["Open-ended leak hunts", "Defined jobs such as a water heater swap", "Work where the scope is unknown", "Jobs with no agreed scope"],
      answer: 1,
      explanation: "Correct: (b). Flat rate works when the job is defined and can be priced in advance. (a), (c), and (d) all describe open-ended work, which is billed hourly because the scope is unknown."
    },
    {
      q: "A customer asks for extra work beyond the agreed scope. Before doing it, you should:",
      choices: ["Do it for free to keep the customer happy", "Write a change order, price it, and get it signed", "Add it to the invoice later without telling them", "Refuse and leave"],
      answer: 1,
      explanation: "Correct: (b). A signed change order records the extra scope and its price before the work is done. (a) gives away work the business must pay for. (c) surprises the customer with a bill they never agreed to. (d) is unnecessary — extra work is fine when it is agreed and priced."
    },
    {
      q: "Why is pricing by the technician's wage alone a mistake?",
      choices: ["Wages are too high", "The wage is only part of the cost — taxes, insurance, benefits, and non-billable time raise the true cost per billable hour", "Customers prefer it", "It is illegal"],
      answer: 1,
      explanation: "Correct: (b). The loaded rate is substantially higher than the wage, and pricing on the wage alone leaves the business short. (a) is not the issue. (c) Customer preference does not change the math. (d) It is not illegal — it is unprofitable."
    },
    {
      q: "In Michigan, plumbing work is done under:",
      choices: ["No license at all", "A master plumber's license", "A general contractor's license only", "An out-of-state license"],
      answer: 1,
      explanation: "Correct: (b). Michigan plumbing work is performed under a master plumber's license, and the business must carry the required insurance. (a) is wrong — Michigan licenses plumbers. (c) A general contractor's license does not cover plumbing licensure. (d) An out-of-state license does not authorize Michigan plumbing work."
    }
  ],
  studyGuide: `
<h3>Module 11 — Business Principles for Plumbers: Quick Reference</h3>
<p><strong>Four costs:</strong> Direct labor (loaded) + materials (with markup) + overhead + profit = price.</p>
<p><strong>Loaded rate:</strong> (Wage + taxes + insurance + benefits) × paid hours ÷ billable hours. Always higher than the wage.</p>
<p><strong>Overhead per job:</strong> Monthly overhead ÷ jobs per month. Falls when volume rises, climbs when volume falls.</p>
<p><strong>Pricing:</strong> Flat rate for defined jobs. Hourly (time and materials) for open-ended work. Agree in writing before starting.</p>
<p><strong>Paperwork:</strong> Written estimate → signed change order for extras → prompt invoice → complete job records. If it is not written down, it did not happen.</p>
<p><strong>Self-check:</strong> Build a price from scratch: materials $300 with 25% markup, 2 hours at a $70 loaded rate, $120 overhead, 10% profit. Show every step.</p>
`
};
