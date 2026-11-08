// ACC 102 - Module 7: Standard Costs & Variance Analysis
module.exports = {
  number: 7,
  slug: "standard-costs-variance-analysis",
  title: "Standard Costs & Variance Analysis",
  estTime: "3–4 hours",
  objectives: [
    "Explain what a standard cost is and how standards are set.",
    "Compute direct materials price and quantity variances.",
    "Compute direct labor rate and efficiency variances.",
    "Explain what favorable and unfavorable variances mean.",
    "Explain who is responsible for each variance and what action it suggests."
  ],
  sections: [
    {
      heading: "Standards: The Budget for One Unit",
      html: `
<p>A <strong>standard cost</strong> is the expected cost of one unit of input under efficient operating conditions: a standard quantity times a standard price. Standards turn the budget into a per-unit yardstick — instead of asking "Did we spend too much in total?" a manager can ask "Did we pay too much per pound, or use too many pounds?" That split is the whole power of variance analysis: it separates price problems from usage problems, and each has a different owner and a different fix.</p>
<p>Standards should be attainable with reasonable effort — tight enough to motivate, loose enough to be reachable. A standard nobody can meet is ignored; a standard anybody can meet teaches nothing. Most companies set standards from engineering studies, past experience, and supplier quotes, then review them when conditions change.</p>
<div class="callout"><strong>Key idea:</strong> A standard is a budget for one unit. Variance analysis is the comparison of that yardstick with what actually happened, split into price and quantity so the right person can fix the right problem.</div>`
    },
    {
      heading: "Direct Materials Variances",
      html: `
<p>Two variances explain a materials cost gap. The <strong>price variance</strong> asks whether the company paid more per pound than standard: (Actual price − Standard price) × Actual quantity purchased (or used). The <strong>quantity variance</strong> asks whether it used more pounds than standard allowed for the output actually produced: (Actual quantity − Standard quantity allowed) × Standard price. Note the price variance uses actual quantity and the quantity variance uses standard price — each isolates one factor while holding the other at its actual or standard value.</p>
<p><strong>Worked example:</strong> Standard: 2 pounds per unit at $5.00 per pound. Actual production: 5,000 units. Standard quantity allowed = 5,000 × 2 = 10,000 pounds. Actual: 10,500 pounds used at $5.20 per pound. Price variance = (5.20 − 5.00) × 10,500 = 0.20 × 10,500 = <strong>$2,100 unfavorable</strong> (paid more per pound). Quantity variance = (10,500 − 10,000) × 5.00 = 500 × 5 = <strong>$2,500 unfavorable</strong> (used 500 pounds too many). Total materials variance = $4,600 unfavorable. Check: actual cost 10,500 × 5.20 = $54,600; standard cost 10,000 × 5 = $50,000; difference $4,600. The variances reconcile.</p>`
    },
    {
      heading: "Direct Labor Variances",
      html: `
<p>Labor variances follow the same logic. The <strong>rate variance</strong> is (Actual rate − Standard rate) × Actual hours: did we pay more per hour than planned? The <strong>efficiency variance</strong> is (Actual hours − Standard hours allowed) × Standard rate: did we take more hours than the standard allows for the output produced?</p>
<p><strong>Worked example:</strong> Standard: 0.5 hour per unit at $20.00 per hour. Actual production 5,000 units, so standard hours allowed = 5,000 × 0.5 = 2,500 hours. Actual: 2,600 hours at $19.50 per hour. Rate variance = (19.50 − 20.00) × 2,600 = −0.50 × 2,600 = <strong>$1,300 favorable</strong> (paid less per hour). Efficiency variance = (2,600 − 2,500) × 20 = 100 × 20 = <strong>$2,000 unfavorable</strong> (used 100 hours too many). Net labor variance = $700 unfavorable. Check: actual cost 2,600 × 19.50 = $50,700; standard cost 2,500 × 20 = $50,000; difference $700 unfavorable.</p>
<div class="callout"><strong>Key idea:</strong> A favorable variance is not automatically good news. The $1,300 favorable rate variance may mean cheaper, less-skilled workers — who then caused the $2,000 unfavorable efficiency variance. Variances must be read together.</div>`
    },
    {
      heading: "Who Owns Each Variance — and What To Do",
      html: `
<p>Variances are useful only if they lead to action, and action needs an owner. The materials price variance usually belongs to purchasing (supplier choice, negotiation, rush orders). The materials quantity variance usually belongs to production (waste, spoilage, poor materials). The labor rate variance usually belongs to human resources or the hiring manager (wage rates, skill mix). The labor efficiency variance usually belongs to production supervision (training, scheduling, equipment).</p>
<p>But the owners interact. Buying cheaper materials can raise the quantity variance if the materials are lower quality; hiring cheaper labor can raise the efficiency variance if the workers are slower. A manager who chases one favorable variance can manufacture an unfavorable one elsewhere. The control conversation should always ask: did this variance come from a decision we made, a price we could not control, or a standard that is now out of date?</p>
<p>Materiality matters too. Investigating every variance costs more than it saves. Most companies investigate only variances above a threshold — say, 5% of standard or a fixed dollar amount — and only when the pattern repeats.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Standard cost = standard quantity × standard price, for one unit of input.</li>
<li>Price/rate variance = (actual price − standard price) × actual quantity. Quantity/efficiency variance = (actual quantity − standard quantity allowed) × standard price.</li>
<li>Standard quantity allowed is based on actual output, not budgeted output.</li>
<li>Favorable means actual cost was less than standard; unfavorable means more. Favorable is not automatically good.</li>
<li>Variances reconcile: price + quantity = total variance vs. standard.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Computing the quantity variance with actual output's standard quantity replaced by budgeted output. Standards are always applied to what was actually produced.</div>
<div class="callout"><strong>Common mistake:</strong> Using actual price in the quantity variance. The quantity variance isolates usage, so it is valued at standard price — otherwise a price change would contaminate a usage measure.</div>
<p><strong>Ready-to-work link:</strong> If you can compute all four variances from a data set and reconcile them to the total cost difference, you can read any variance report a controller hands you — and ask the question that matters: what changed, and who can fix it?</p>`
    }
  ],
  keyTerms: [
    { term: "Standard cost", def: "The expected cost of one unit of input (standard quantity × standard price) under efficient conditions." },
    { term: "Standard quantity", def: "The amount of input expected to be used per unit of output." },
    { term: "Standard price", def: "The expected price per unit of input." },
    { term: "Standard quantity allowed", def: "Standard quantity per unit times actual output — the input the standard allows for what was actually produced." },
    { term: "Materials price variance", def: "(Actual price − standard price) × actual quantity; measures paying more or less per unit of input." },
    { term: "Materials quantity variance", def: "(Actual quantity − standard quantity allowed) × standard price; measures using more or less input than allowed." },
    { term: "Labor rate variance", def: "(Actual rate − standard rate) × actual hours; measures paying more or less per hour." },
    { term: "Labor efficiency variance", def: "(Actual hours − standard hours allowed) × standard rate; measures using more or fewer hours than allowed." },
    { term: "Favorable variance", def: "A variance where actual cost is less than standard cost (or actual revenue exceeds budget)." },
    { term: "Unfavorable variance", def: "A variance where actual cost exceeds standard cost." },
    { term: "Flexible budget", def: "A budget restated for actual output, used so variances are computed against the right standard quantity." },
    { term: "Variable overhead variance", def: "The spending and efficiency variances for variable manufacturing overhead." },
    { term: "Fixed overhead volume variance", def: "The variance from producing more or fewer units than the denominator level used to set the fixed overhead rate." },
    { term: "Management by exception", def: "Investigating only variances that exceed a threshold, rather than every variance." }
  ],
  video: {
    title: "Labor Efficiency Variance",
    embedUrl: "https://www.youtube.com/embed/1vdUUCNVGJ0",
    note: "Edspira works a direct labor efficiency variance problem step by step — the same (actual hours − standard hours allowed) × standard rate formula used in this module. Watch it, then check the module's labor example: 2,600 actual hours vs. 2,500 standard hours at $20 gives $2,000 unfavorable.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Standard: 2 pounds per unit at $5.00 per pound. Actual production 5,000 units; actual usage 10,500 pounds at $5.20 per pound. Compute (a) the materials price variance, (b) the materials quantity variance, and (c) the total materials variance. Verify by comparing actual and standard cost.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Standard quantity allowed = 5,000 × 2 = 10,000 pounds. Step 2: Price variance = (5.20 − 5.00) × 10,500 = <strong>$2,100 unfavorable</strong>. Step 3: Quantity variance = (10,500 − 10,000) × 5.00 = <strong>$2,500 unfavorable</strong>. Step 4: Total = $4,600 unfavorable. Check: actual cost 10,500 × 5.20 = $54,600; standard cost 10,000 × 5 = $50,000; difference $4,600.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Standard: 0.5 hour per unit at $20.00 per hour. Actual production 5,000 units; actual 2,600 hours at $19.50 per hour. Compute (a) the labor rate variance, (b) the labor efficiency variance, and (c) the total labor variance. Verify by comparing actual and standard cost.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Standard hours allowed = 5,000 × 0.5 = 2,500 hours. Step 2: Rate variance = (19.50 − 20.00) × 2,600 = <strong>$1,300 favorable</strong>. Step 3: Efficiency variance = (2,600 − 2,500) × 20 = <strong>$2,000 unfavorable</strong>. Step 4: Total = $700 unfavorable. Check: actual cost 2,600 × 19.50 = $50,700; standard cost 2,500 × 20 = $50,000; difference $700.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Standard: 3 pounds per unit at $4.00 per pound. Actual production 4,000 units; actual usage 11,400 pounds at $4.10 per pound. Compute the price and quantity variances.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Standard quantity allowed = 4,000 × 3 = 12,000 pounds. Step 2: Price variance = (4.10 − 4.00) × 11,400 = <strong>$1,140 unfavorable</strong>. Step 3: Quantity variance = (11,400 − 12,000) × 4.00 = −600 × 4 = <strong>$2,400 favorable</strong> (used fewer pounds than allowed). Net materials variance = $1,260 favorable.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A purchasing manager buys cheaper materials, producing a $3,000 favorable price variance. Production then wastes more material, producing a $4,500 unfavorable quantity variance. What is the net effect, and what should the controller conclude?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Net effect = 3,000 favorable − 4,500 unfavorable = <strong>$1,500 unfavorable overall</strong>. Step 2: The cheap purchase cost more than it saved. Step 3: The controller should not praise the price variance alone; the two variances must be read together, and purchasing and production should decide jointly whether the cheaper material is worth using.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Standard hours allowed are 3,000 and actual hours are 2,850 at a standard rate of $18 per hour. Actual rate was $18.50. Compute (a) the rate variance and (b) the efficiency variance.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Rate variance = (18.50 − 18.00) × 2,850 = 0.50 × 2,850 = <strong>$1,425 unfavorable</strong>. Step 2: Efficiency variance = (2,850 − 3,000) × 18 = −150 × 18 = <strong>$2,700 favorable</strong>. Net labor variance = $1,275 favorable.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A variance report shows a $50 unfavorable materials quantity variance on a $500,000 materials budget. Should the controller investigate? Explain using the idea of management by exception.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: $50 is 0.01% of the budget — far below any reasonable materiality threshold. Step 2: Investigating would cost far more in management time than the variance is worth. Step 3: Under management by exception, the controller should note it and move on, investigating only variances that are large in dollars or percent, or that repeat as a pattern.</p>"
    }
  ],
  quiz: [
    {
      q: "Standard quantity allowed is based on:",
      choices: ["Budgeted output", "Actual output", "Last year's output", "Maximum capacity"],
      answer: 1,
      explanation: "Correct: (b). The standard is applied to what was actually produced, so the quantity variance isolates usage. (a) would mix volume effects into a usage measure. (c) and (d) are irrelevant baselines."
    },
    {
      q: "Materials price variance = (actual price − standard price) × actual quantity. With AP $5.20, SP $5.00, AQ 10,500, the variance is:",
      choices: ["$2,100 favorable", "$2,100 unfavorable", "$2,500 unfavorable", "$4,600 favorable"],
      answer: 1,
      explanation: "Correct: (b). (5.20 − 5.00) × 10,500 = $2,100, and paying more than standard is unfavorable. (a) reverses the label. (c) is the quantity variance. (d) is the total variance with the wrong sign."
    },
    {
      q: "Materials quantity variance = (actual quantity − standard quantity allowed) × standard price. With AQ 10,500, SQ allowed 10,000, SP $5.00, the variance is:",
      choices: ["$2,100 unfavorable", "$2,500 favorable", "$2,500 unfavorable", "$500 favorable"],
      answer: 2,
      explanation: "Correct: (c). (10,500 − 10,000) × 5 = $2,500, and using more than allowed is unfavorable. (a) is the price variance. (b) reverses the label. (d) uses the wrong quantity difference."
    },
    {
      q: "Labor: actual 2,600 hours at $19.50, standard 2,500 hours at $20.00. The rate variance is:",
      choices: ["$1,300 favorable", "$1,300 unfavorable", "$2,000 unfavorable", "$700 favorable"],
      answer: 0,
      explanation: "Correct: (a). (19.50 − 20.00) × 2,600 = −$1,300, i.e., $1,300 favorable — the company paid less per hour. (b) reverses the label. (c) is the efficiency variance. (d) is the net variance with the wrong sign."
    },
    {
      q: "The labor efficiency variance for the same data is:",
      choices: ["$1,300 favorable", "$2,000 favorable", "$2,000 unfavorable", "$700 unfavorable"],
      answer: 2,
      explanation: "Correct: (c). (2,600 − 2,500) × 20 = $2,000, and using more hours than allowed is unfavorable. (a) is the rate variance. (b) reverses the label. (d) is the net variance."
    },
    {
      q: "A favorable variance means:",
      choices: ["Actual cost was higher than standard cost", "Actual cost was lower than standard cost", "The standard was wrong", "No investigation is ever needed"],
      answer: 1,
      explanation: "Correct: (b). Favorable means the actual cost came in below standard (or revenue above budget). (a) defines unfavorable. (c) is one possible cause, not the definition. (d) is false — a favorable variance can signal a problem, like cheaper materials causing waste."
    },
    {
      q: "The quantity variance is valued at standard price (not actual price) because:",
      choices: ["Actual price is never known", "It isolates usage — using actual price would let a price change contaminate a usage measure", "Standard price is always higher", "GAAP requires it"],
      answer: 1,
      explanation: "Correct: (b). Each variance isolates one factor; the quantity variance holds price at standard so it measures only usage. (a) is false — actual price is known. (c) is false. (d) GAAP does not govern internal variance analysis."
    },
    {
      q: "Who is usually responsible for the materials price variance?",
      choices: ["Production supervision", "Purchasing", "Human resources", "The sales manager"],
      answer: 1,
      explanation: "Correct: (b). Purchasing chooses suppliers and negotiates prices. (a) owns the quantity variance. (c) owns labor rates. (d) owns sales, not materials prices."
    }
  ],
  studyGuide: `
<h3>Module 7 — Standard Costs & Variance Analysis: Quick Reference</h3>
<p><strong>Standard cost:</strong> Standard quantity × standard price, per unit of input.</p>
<div class="formula">Price/rate variance = (Actual price − Standard price) × Actual quantity</div>
<div class="formula">Quantity/efficiency variance = (Actual quantity − Standard quantity allowed) × Standard price</div>
<p><strong>Materials anchor:</strong> SQ allowed 10,000 lb; AQ 10,500 lb at $5.20 vs. $5.00 → price $2,100 U, quantity $2,500 U, total $4,600 U.</p>
<p><strong>Labor anchor:</strong> SH allowed 2,500 hr; AH 2,600 hr at $19.50 vs. $20.00 → rate $1,300 F, efficiency $2,000 U, net $700 U.</p>
<p><strong>Owners:</strong> Price → purchasing. Quantity → production. Rate → HR/hiring. Efficiency → production supervision.</p>
<p><strong>Watch out:</strong> Standard quantity allowed uses actual output. Favorable is not automatically good — read variances together, and investigate only material, repeating variances.</p>
<p><strong>Self-check:</strong> Given any actual/standard data set, compute both variances, reconcile them to the total cost difference, and name the owner of each.</p>
`
};
