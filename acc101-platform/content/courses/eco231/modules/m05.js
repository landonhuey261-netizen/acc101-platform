// eco231 - Module 5: Taxation: Who Pays & What It Does to Behavior
module.exports = {
  "number": 5,
  "slug": "taxation",
  "title": "Taxation: Who Pays & What It Does to Behavior",
  "estTime": "3–4 hours",
  "objectives": [
    "Distinguish statutory incidence (who hands the money over) from economic incidence (who really bears the burden).",
    "Use elasticities to split a tax burden between buyers and sellers.",
    "Compute the deadweight loss and revenue of a tax from a quantity change.",
    "Compare progressive, proportional, and regressive taxes with marginal and average tax rates.",
    "Explain how taxes change behavior — work, saving, and the choice between taxed and untaxed activities."
  ],
  "sections": [
    {
      "heading": "Who Really Pays a Tax?",
      "html": "<p>When a tax is placed on a good, the law says who must hand the money to the government — that is <strong>statutory incidence</strong>. But the real question is <strong>economic incidence</strong>: whose pocket does the money ultimately come out of? The two are often different. A tax on sellers can be passed to buyers through higher prices; a tax on buyers can be passed to sellers through lower prices received.</p>\n<p>The split depends on elasticities — who can walk away more easily. The side that is <strong>less elastic</strong> (less able to change its behavior) bears more of the tax, because it cannot escape. The formula for the buyer's share of a per-unit tax is the supply elasticity divided by the sum of the supply and demand elasticities (in absolute value).</p>\n<div class=\"formula\">Buyer's share = Es ÷ (Es + |Ed|) &nbsp;|&nbsp; Seller's share = |Ed| ÷ (Es + |Ed|)</div>\n<p>Example: a $2-per-unit tax, demand elasticity −0.5, supply elasticity 1.0. Buyer's share = 1.0 ÷ (1.0 + 0.5) = 0.667, so buyers pay $2 × 0.667 = <strong>$1.33</strong> of the tax and sellers pay the remaining <strong>$0.67</strong>. Demand is less elastic here, so buyers — who cannot easily cut back — carry two-thirds of the burden, even if the law taxes the seller.</p>"
    },
    {
      "heading": "Deadweight Loss: The Tax That Nobody Gets",
      "html": "<p>A tax raises revenue, but it also destroys some trades that both sides would have wanted. When a tax pushes the price buyers pay above the price sellers receive, some buyers walk away and some sellers stop selling. The surplus from those lost trades vanishes — nobody gets it, not the buyer, not the seller, not the government. That lost surplus is the <strong>deadweight loss</strong> of the tax.</p>\n<p>For a per-unit tax, the deadweight loss is the triangle: one-half × tax per unit × fall in quantity. Example: a $4-per-unit tax cuts quantity from 1,000 to 800 units. Deadweight loss = ½ × $4 × 200 = <strong>$400</strong>. Tax revenue is $4 × 800 = <strong>$3,200</strong>. So the tax collects $3,200 but costs society $3,600 in total — $3,200 transferred to the government plus $400 destroyed outright.</p>\n<div class=\"formula\">Deadweight loss = ½ × tax per unit × fall in quantity &nbsp;|&nbsp; Revenue = tax × quantity after tax</div>\n<p>Deadweight loss grows with the square of the tax rate: doubling a tax roughly quadruples its deadweight loss, while only doubling its revenue at first — and if the tax gets high enough, revenue can fall as the taxed activity shrinks. That is why economists prefer broad taxes with low rates over narrow taxes with high rates.</p>"
    },
    {
      "heading": "Progressive, Proportional, and Regressive Taxes",
      "html": "<p>Taxes are also judged by who pays what share of their income. A <strong>progressive tax</strong> takes a larger share from higher incomes; a <strong>proportional tax</strong> takes the same share from everyone; a <strong>regressive tax</strong> takes a larger share from lower incomes.</p>\n<p>Example: a person earning $50,000 pays $5,000 in tax — an average rate of 10%. A person earning $100,000 pays $15,000 — an average rate of 15%. Because the average rate rises with income, this tax is progressive. Income tax is usually progressive; sales tax is usually regressive, because poorer households spend a larger share of their income on taxed goods.</p>\n<p>Two rates matter and students confuse them. The <strong>average tax rate</strong> is total tax divided by total income. The <strong>marginal tax rate</strong> is the tax on the next dollar earned. In a progressive system the marginal rate is above the average rate. A common mistake is refusing a raise that pushes you into a higher bracket: only the income above the threshold is taxed at the higher rate, so a raise never leaves you with less after-tax pay.</p>"
    },
    {
      "heading": "How Taxes Change Behavior",
      "html": "<p>Taxes change incentives at every margin. A tax on wages lowers the after-tax wage, which — like any wage fall — has a substitution effect (work looks less rewarding, so work less) and an income effect (you are poorer, so you may work more to make ends meet). Which wins is an empirical question; for most workers the effects roughly cancel, so income taxes do not hugely change hours worked.</p>\n<p>But taxes do change <em>what</em> people do. Tax cigarettes and people smoke less; subsidize mortgages and people buy bigger houses; tax capital gains lightly and people hold assets longer. Tax avoidance — legally rearranging affairs to pay less — and tax evasion — illegally hiding income — both grow as rates rise. The art of tax design is raising the revenue needed while distorting as few decisions as possible: broad bases, low rates, and few special loopholes.</p>\n<p>Finally, taxes fund the public goods of Module 4 and the redistribution of Module 9. Every tax is a trade: the revenue buys something society values, and the deadweight loss and the behavioral changes are the price. Good tax policy weighs both sides of that trade, openly.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Statutory incidence is who hands the money over; economic incidence is who really bears the burden.</li>\n<li>The less elastic side bears more of the tax: buyer's share = Es ÷ (Es + |Ed|).</li>\n<li>Deadweight loss = ½ × tax × fall in quantity; revenue = tax × quantity after tax.</li>\n<li>Progressive: average rate rises with income. Marginal rate is the tax on the next dollar.</li>\n<li>Deadweight loss grows with the square of the tax rate — broad bases and low rates distort least.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying the seller pays a tax because the law taxes the seller. The burden falls on the less elastic side, whatever the law says — in this module's example, buyers pay $1.33 of a $2 tax.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Refusing a raise to avoid a higher tax bracket. Only income above the threshold is taxed at the higher rate, so after-tax pay always rises with a raise.</div>\n<p><strong>Ready-to-Work link:</strong> Look at your own pay slip: the gap between gross and net pay is your average tax rate. The rate on your next dollar of overtime is your marginal rate — that is the number that matters for whether the extra shift is worth it.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Statutory incidence", "def": "Who the law requires to hand the tax money to the government." },
    { "term": "Economic incidence", "def": "Who really bears the burden of a tax, after prices adjust." },
    { "term": "Tax incidence", "def": "How the burden of a tax is divided between buyers and sellers." },
    { "term": "Price elasticity of demand", "def": "How much quantity demanded changes when price changes, in percentage terms." },
    { "term": "Price elasticity of supply", "def": "How much quantity supplied changes when price changes, in percentage terms." },
    { "term": "Deadweight loss", "def": "Surplus destroyed by a tax (or other distortion) that nobody receives." },
    { "term": "Tax revenue", "def": "The money a tax collects: tax per unit times quantity sold after the tax." },
    { "term": "Progressive tax", "def": "A tax whose average rate rises as income rises." },
    { "term": "Proportional tax", "def": "A tax whose average rate is the same at all income levels." },
    { "term": "Regressive tax", "def": "A tax whose average rate falls as income rises." },
    { "term": "Average tax rate", "def": "Total tax paid divided by total income." },
    { "term": "Marginal tax rate", "def": "The tax paid on the next dollar of income earned." },
    { "term": "Tax bracket", "def": "A range of income taxed at a given marginal rate; only income in the bracket is taxed at that rate." },
    { "term": "Tax avoidance", "def": "Legally rearranging affairs to reduce tax owed." },
    { "term": "Tax evasion", "def": "Illegally hiding income or lying on a tax return to avoid tax." },
    { "term": "Tax base", "def": "The total amount of income, sales, or property that a tax applies to." },
    { "term": "Laffer curve", "def": "The idea that tax revenue first rises then falls as the tax rate rises, because high rates shrink the taxed activity." },
    { "term": "Excise tax", "def": "A per-unit tax on a specific good, such as cigarettes or petrol." }
  ],
  "video": {
    "title": "Taxes: Crash Course Economics #31",
    "embedUrl": "https://www.youtube.com/embed/7Qtr_vA3Prw",
    "note": "Crash Course explains why we pay taxes, the types of taxes, progressive and regressive rates, and tax brackets — including why a raise never leaves you worse off. Watch it, then recompute the $2 tax split in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A $2-per-unit tax is placed on a good. Demand elasticity is −0.5 and supply elasticity is 1.0. (a) What share do buyers pay? (b) How much of the $2 do buyers pay, and how much do sellers pay?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Buyer's share = Es ÷ (Es + |Ed|) = 1.0 ÷ (1.0 + 0.5) = 1.0 ÷ 1.5 = 0.667, or <strong>66.7%</strong>. Step 2: Buyers pay $2 × 0.667 = <strong>$1.33</strong>. Step 3: Sellers pay $2 − $1.33 = <strong>$0.67</strong>. Step 4: Buyers bear more because demand is less elastic — buyers cannot easily walk away.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A $4-per-unit tax cuts the quantity sold from 1,000 to 800 units. (a) What is the deadweight loss? (b) What is the tax revenue? (c) What is the total cost to society?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Deadweight loss = ½ × $4 × (1,000 − 800) = ½ × $4 × 200 = <strong>$400</strong>. Step 2: Revenue = $4 × 800 = <strong>$3,200</strong>. Step 3: Total cost to society = revenue transferred ($3,200) + deadweight loss ($400) = <strong>$3,600</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A worker earns $50,000 and pays $5,000 in tax; another earns $100,000 and pays $15,000. (a) What is each worker's average tax rate? (b) Is this tax progressive, proportional, or regressive? Why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: First worker: $5,000 ÷ $50,000 = 10%. Second worker: $15,000 ÷ $100,000 = 15%. Step 2: The average rate rises with income (10% → 15%), so the tax is <strong>progressive</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A tax of $6 a unit is placed on a good with very elastic demand (elasticity −3.0) and inelastic supply (elasticity 0.5). Who bears most of the tax, and why? Compute the seller's share.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Seller's share = |Ed| ÷ (Es + |Ed|) = 3.0 ÷ (0.5 + 3.0) = 3.0 ÷ 3.5 = 0.857, or <strong>85.7%</strong>. Step 2: Sellers pay $6 × 0.857 = <strong>$5.14</strong> and buyers pay $0.86. Step 3: Sellers bear most because supply is inelastic — sellers cannot easily leave the market, while buyers can easily switch away.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> In your own words, explain why doubling a tax roughly quadruples its deadweight loss, and what that implies for tax design.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Deadweight loss is a triangle: ½ × tax × fall in quantity. Step 2: Doubling the tax doubles the tax side of the triangle and also roughly doubles the quantity fall, so the area grows by about 2 × 2 = 4 times. Step 3: Implication: one high-rate tax is far more costly than two low-rate taxes raising the same revenue — prefer broad bases and low rates.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A worker is offered a raise from $48,000 to $52,000. Income up to $50,000 is taxed at 10% and income above $50,000 at 20%. (a) How much extra tax do they pay? (b) How much extra after-tax pay do they get? (c) Should they refuse the raise?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The raise is $4,000; $2,000 of it is below $50,000 (taxed at 10% = $200) and $2,000 above (taxed at 20% = $400). Extra tax = $200 + $400 = <strong>$600</strong>. Step 2: Extra after-tax pay = $4,000 − $600 = <strong>$3,400</strong>. Step 3: No — they keep $3,400 of the raise. Only the income above the threshold is taxed at the higher rate.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Statutory incidence is:",
      "choices": ["Who really bears the burden of a tax", "Who the law requires to hand the tax to the government", "The deadweight loss of a tax", "The total revenue a tax raises"],
      "answer": 1,
      "explanation": "Correct: (b). Statutory incidence is the legal obligation. (a) is economic incidence, which is about who really pays. (c) is the surplus destroyed by the tax. (d) is tax revenue."
    },
    {
      "q": "A $2 tax, demand elasticity −0.5, supply elasticity 1.0. Buyers pay:",
      "choices": ["$0.67", "$1.00", "$1.33", "$2.00"],
      "answer": 2,
      "explanation": "Correct: (c). Buyer's share = 1.0 ÷ 1.5 = 0.667; $2 × 0.667 = $1.33. (a) is the sellers' share. (b) would be an even split, which needs equal elasticities. (d) would mean buyers bear the whole tax, which needs perfectly inelastic demand."
    },
    {
      "q": "The side of the market that bears more of a tax is the side that is:",
      "choices": ["More elastic", "Less elastic", "Larger in number", "Legally taxed"],
      "answer": 1,
      "explanation": "Correct: (b). The less elastic side cannot escape, so it absorbs more of the burden. (a) The more elastic side walks away and bears less. (c) Numbers do not decide incidence — elasticities do. (d) The law decides statutory incidence, not economic incidence."
    },
    {
      "q": "A $4 tax cuts quantity from 1,000 to 800. The deadweight loss is:",
      "choices": ["$200", "$400", "$3,200", "$3,600"],
      "answer": 1,
      "explanation": "Correct: (b). DWL = ½ × $4 × 200 = $400. (a) forgets the one-half in the triangle formula. (c) is the tax revenue, $4 × 800. (d) is revenue plus deadweight loss, the total cost to society."
    },
    {
      "q": "A worker pays $5,000 on $50,000 (10%) and another pays $15,000 on $100,000 (15%). This tax is:",
      "choices": ["Proportional", "Regressive", "Progressive", "A lump-sum tax"],
      "answer": 2,
      "explanation": "Correct: (c). The average rate rises with income, which defines progressive. (a) would need the same rate at both incomes. (b) would need the rate to fall with income. (d) A lump-sum tax is a fixed dollar amount for everyone."
    },
    {
      "q": "The marginal tax rate is:",
      "choices": ["Total tax divided by total income", "The tax on the next dollar of income", "The tax rate in the lowest bracket", "The average rate over a lifetime"],
      "answer": 1,
      "explanation": "Correct: (b). The marginal rate applies to the next dollar earned. (a) is the average tax rate. (c) is only the first bracket's rate. (d) is not a standard concept — average and marginal rates are computed on current income."
    },
    {
      "q": "Doubling a tax rate roughly quadruples its deadweight loss because:",
      "choices": ["Revenue doubles", "Both the tax and the quantity fall double, and DWL is a triangle", "The tax base doubles", "Sellers bear the whole tax"],
      "answer": 1,
      "explanation": "Correct: (b). DWL = ½ × tax × quantity fall; doubling both factors multiplies the area by four. (a) Revenue roughly doubles, which is not the DWL. (c) The tax base shrinks, it does not double. (d) Incidence does not decide the size of the DWL."
    },
    {
      "q": "A raise that pushes a worker into a higher tax bracket:",
      "choices": ["Always leaves them with less after-tax pay", "Leaves them with more after-tax pay, because only income above the threshold is taxed at the higher rate", "Is taxed entirely at the higher rate", "Should always be refused"],
      "answer": 1,
      "explanation": "Correct: (b). Only the slice above the threshold faces the higher rate. (a) is the common myth this module corrects. (c) is the myth stated as fact — brackets apply marginally. (d) Refusing free after-tax pay makes no sense."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Taxation: Quick Reference</h3>\n<p><strong>Core idea:</strong> The law says who hands the tax over; elasticities say who really pays. The less elastic side bears more.</p>\n<div class=\"formula\">Buyer's share = Es ÷ (Es + |Ed|) &nbsp;|&nbsp; DWL = ½ × tax × fall in quantity &nbsp;|&nbsp; Revenue = tax × quantity after tax</div>\n<p><strong>Worked anchors:</strong> $2 tax, Ed −0.5, Es 1.0 → buyers pay $1.33, sellers $0.67. $4 tax, 1,000 → 800 units → DWL $400, revenue $3,200. $50,000 earner pays 10%, $100,000 earner pays 15% → progressive.</p>\n<p><strong>Rates:</strong> Average rate = total tax ÷ income. Marginal rate = tax on the next dollar. Only income above a bracket threshold is taxed at that bracket's rate.</p>\n<p><strong>Design:</strong> DWL grows with the square of the rate — prefer broad bases and low rates. Taxes change behavior: work, saving, and what people buy.</p>\n<p><strong>Watch out:</strong> Never confuse statutory with economic incidence, and never refuse a raise over a bracket — you keep most of it.</p>\n<p><strong>Self-check:</strong> A $6 tax with Ed −3.0 and Es 0.5: sellers pay 85.7% ($5.14). Recompute it from the formula.</p>\n"
};
