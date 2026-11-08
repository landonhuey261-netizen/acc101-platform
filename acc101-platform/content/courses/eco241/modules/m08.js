// eco241 - Module 8: Externalities, Pollution & Climate Policy
module.exports = {
  "number": 8,
  "slug": "externalities-pollution-climate-policy",
  "title": "Externalities, Pollution & Climate Policy",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the Pigouvian tax: set the tax equal to the marginal external cost at the efficient quantity.",
    "Compare command-and-control regulation with market-based policy.",
    "Compute the cheapest way to cut pollution when firms have different abatement costs.",
    "Explain how cap-and-trade achieves a pollution target at lowest cost.",
    "Apply the tools to climate change, including why it is a global commons problem."
  ],
  "sections": [
    {
      "heading": "The Pigouvian Tax: Making the Polluter Pay the True Cost",
      "html": "<p>Module 7 left the widget factory paying $50 while society paid $70. Arthur Pigou's fix, a century old, is to tax the factory $20 per widget — the <strong>Pigouvian tax</strong>, set equal to the marginal external cost. Now the factory's cost is $50 + $20 = $70, the true social cost, and it produces the socially best 700 widgets on its own, because the last 300 are no longer profitable. The tax does not ban pollution; it prices it, and lets the factory decide whether each widget is worth its full cost.</p>\n<p>The tax also raises revenue — $20 × 700 = <strong>$14,000</strong> — which the government can use to cut other taxes or compensate the neighbours. And it creates a permanent incentive to invent cleaner production: every dollar of external cost a firm eliminates is a dollar of tax it no longer pays. A regulation that simply orders \"cut pollution by 30%\" gives no reward for cutting by 40%.</p>\n<div class=\"formula\">Pigouvian tax = marginal external cost at the efficient quantity &nbsp;|&nbsp; Tax revenue = tax × quantity after the tax</div>"
    },
    {
      "heading": "Cheapest Cuts First: Why Abatement Costs Differ",
      "html": "<p>Suppose the government wants to cut pollution by 100 tons, and two firms can do the cutting. Firm A is a modern plant: its <strong>marginal abatement cost (MAC)</strong> — the cost of cutting one more ton — is MAC<sub>A</sub> = 0.2 × q<sub>A</sub>, where q<sub>A</sub> is the tons A cuts. Firm B is an old plant: MAC<sub>B</sub> = 0.6 × q<sub>B</sub>. Cutting the first ton is cheap for both; the more each cuts, the dearer the next ton gets.</p>\n<p>The cheapest plan equalizes the two marginal costs — cut where it is cheapest until both firms face the same cost for the next ton. Set 0.2 × q<sub>A</sub> = 0.6 × q<sub>B</sub> with q<sub>A</sub> + q<sub>B</sub> = 100. Then q<sub>A</sub> = 3 × q<sub>B</sub>, so 4 × q<sub>B</sub> = 100, giving q<sub>B</sub> = <strong>25 tons</strong> and q<sub>A</sub> = <strong>75 tons</strong>, with a common marginal cost of 0.2 × 75 = <strong>$15 per ton</strong>. Total cost: Firm A pays 0.1 × 75² = <strong>$562.50</strong> and Firm B pays 0.3 × 25² = <strong>$187.50</strong>, for a total of <strong>$750</strong>.</p>\n<p>Compare a uniform rule — each firm cuts 50 tons. Firm A pays 0.1 × 50² = $250 and Firm B pays 0.3 × 50² = $750, for a total of <strong>$1,000</strong>. The efficient plan saves $1,000 − $750 = <strong>$250</strong>, a quarter of the cost, for the same 100-ton cut. That $250 is the prize of market-based policy: the same environmental result, cheaper.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Cut pollution where it is cheapest. Equalize marginal abatement costs across firms, and the total cost of any target is minimized.</div>"
    },
    {
      "heading": "Two Market Tools: Carbon Taxes and Cap-and-Trade",
      "html": "<p>A <strong>carbon tax</strong> sets the price of pollution and lets the quantity adjust. Put a $15 tax on each ton, and Firm A cuts until its MAC hits $15 — 0.2 × q<sub>A</sub> = 15 gives q<sub>A</sub> = 75 tons — and Firm B cuts until 0.6 × q<sub>B</sub> = 15 gives q<sub>B</sub> = 25 tons. The tax delivers exactly the efficient 100-ton cut at the $750 cost, without the government knowing either firm's cost curve: each firm reveals its costs by its own response to the price.</p>\n<p><strong>Cap-and-trade</strong> does the mirror image: it sets the quantity and lets the price adjust. The government issues permits for 100 fewer tons of pollution than today and lets firms trade them. Firm B, whose cuts cost $30 a ton at the margin, would rather buy a permit from Firm A, whose cuts cost $10, than cut itself. Permits flow to whoever values them most, the permit price settles at $15, and the same 75/25 split emerges. The US sulphur-dioxide programme of the 1990s used cap-and-trade and cut emissions faster and more cheaply than the regulations it replaced — the classic real-world success for the method.</p>\n<p>Which tool is better? A tax gives price certainty (firms know the cost per ton) but the total cut is uncertain. A cap gives quantity certainty (the target is met) but the permit price is uncertain. Economists often favour a tax for its simplicity and revenue; politicians often favour a cap because the quantity target is visible. Either beats ordering every firm to cut the same amount.</p>"
    },
    {
      "heading": "Climate Change: The Ultimate Commons Problem",
      "html": "<p>Climate change is Module 7's tragedy of the commons at planetary scale. A ton of carbon dioxide mixes into the global atmosphere no matter where it is emitted, so every country's emissions harm every other country, and no single country can fix the climate alone. Each country gains the full benefit of its own fossil-fuel use and shares the climate cost with the whole world — the herders and the pasture, with 200 herders.</p>\n<p>That is why climate policy is an international negotiation problem as much as a technical one (Module 11 covers the institutions). The economics points the same way as for any externality: put a price on carbon, let each country and firm find its cheapest cuts, and share the burden fairly — because a ton cut cheaply in one country helps the climate exactly as much as a ton cut dearly in another. The obstacles are political, not analytical: who pays, who cuts first, and how to stop free-riding. The tools of this module are the answer to the \"how\"; the negotiation is the answer to the \"who\".</p>\n<div class=\"callout\"><strong>Key idea:</strong> A ton of CO₂ cut anywhere helps everywhere, so the cheapest cut anywhere is the best cut. Climate policy fails when it pays dearly for cuts in one place while ignoring cheap cuts elsewhere.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Pigouvian tax = marginal external cost at the efficient quantity. Widget anchor: $20 per widget, revenue $20 × 700 = $14,000.</li>\n<li>Efficient abatement equalizes marginal abatement costs: Firm A cuts 75 tons, Firm B 25 tons, at $15 per ton, total cost $750.</li>\n<li>A uniform 50/50 rule costs $1,000 for the same 100-ton cut — $250 more than the efficient plan.</li>\n<li>A $15 carbon tax and a cap-and-trade system with a $15 permit price deliver the same 75/25 split.</li>\n<li>Climate change is a global commons problem: the cheapest cut anywhere is the best cut anywhere.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a carbon tax and cap-and-trade give different environmental results. With the numbers matched ($15 tax vs. $15 permit price), they give the same cuts at the same cost — the difference is which is fixed, the price or the quantity.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking \"cheapest cuts first\" means the dirtiest firm cuts least out of fairness. It is the opposite: the efficient plan asks the most from the firm that can cut cheaply (Firm A, 75 tons) and the least from the firm that cuts dearly (Firm B, 25 tons) — because that is how the same clean air costs least.</div>\n<p><strong>Ready-to-Work link:</strong> If your business faces a carbon price, your marginal abatement cost decides your response: cut while cutting is cheaper than the tax, pay while paying is cheaper. That single comparison is the whole decision.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Pigouvian tax",
      "def": "A tax set equal to the marginal external cost, making the polluter face the true social cost."
    },
    {
      "term": "Marginal external cost",
      "def": "The extra external harm from one more unit of an activity."
    },
    {
      "term": "Marginal abatement cost (MAC)",
      "def": "The cost of cutting one more unit of pollution."
    },
    {
      "term": "Abatement",
      "def": "Reducing pollution, for example by filtering emissions or switching fuels."
    },
    {
      "term": "Command-and-control regulation",
      "def": "A rule ordering a specific pollution limit or technology, the same for every firm."
    },
    {
      "term": "Market-based policy",
      "def": "Environmental policy that uses prices — taxes or tradable permits — to cut pollution at lowest cost."
    },
    {
      "term": "Carbon tax",
      "def": "A Pigouvian tax on each ton of carbon dioxide (or equivalent) emitted."
    },
    {
      "term": "Cap-and-trade",
      "def": "A system that caps total pollution, issues tradable permits, and lets firms buy and sell them."
    },
    {
      "term": "Emissions permit",
      "def": "A tradable right to emit a set amount of pollution under a cap-and-trade system."
    },
    {
      "term": "Coase theorem",
      "def": "The idea that, with clear property rights and low bargaining costs, private negotiation can fix an externality without government."
    },
    {
      "term": "Free-riding",
      "def": "Enjoying the benefit of others' action — such as emissions cuts — without contributing."
    },
    {
      "term": "Carbon leakage",
      "def": "Pollution moving abroad when one country prices carbon and others do not."
    },
    {
      "term": "Sulphur-dioxide programme",
      "def": "The 1990s US cap-and-trade system that cut acid-rain pollution faster and cheaper than regulation."
    },
    {
      "term": "Greenhouse gas",
      "def": "A gas, such as carbon dioxide, that traps heat in the atmosphere and warms the climate."
    }
  ],
  "video": {
    "title": "Market Failures, Taxes, and Subsidies: Crash Course Economics #21",
    "embedUrl": "https://www.youtube.com/embed/13JOGWzY8kE",
    "note": "Crash Course Economics on market failures, taxes, and subsidies — externalities and the tragedy of the commons, with cap-and-trade explained. Watch it, then check the module's claim: does a $15 tax really give the same 75/25 split as a $15 permit price?",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A widget causes $20 of external harm and the efficient quantity is 700 widgets. (a) What Pigouvian tax should be set? (b) How much revenue does it raise?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The tax should equal the marginal external cost: <strong>$20 per widget</strong>. Step 2: Revenue is $20 × 700 = <strong>$14,000</strong>. Step 3: The tax makes the factory face the $70 social cost, so it produces the efficient 700 on its own.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Firm A has MAC = 0.2 × q<sub>A</sub> and Firm B has MAC = 0.6 × q<sub>B</sub>. The target is a 100-ton cut. (a) Find the efficient split. (b) What is the common marginal cost?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Equalize marginal costs: 0.2 q<sub>A</sub> = 0.6 q<sub>B</sub>, so q<sub>A</sub> = 3 q<sub>B</sub>. Step 2: With q<sub>A</sub> + q<sub>B</sub> = 100, we get 4 q<sub>B</sub> = 100, so q<sub>B</sub> = <strong>25 tons</strong> and q<sub>A</sub> = <strong>75 tons</strong>. Step 3: The common marginal cost is 0.2 × 75 = <strong>$15 per ton</strong> (check: 0.6 × 25 = $15).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> In Problem 2, (a) what is the total abatement cost of the efficient plan? (b) What is the total cost of a uniform 50/50 rule? (c) How much does the efficient plan save?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Efficient cost is 0.1 × 75² + 0.3 × 25² = $562.50 + $187.50 = <strong>$750</strong>. Step 2: Uniform cost is 0.1 × 50² + 0.3 × 50² = $250 + $750 = <strong>$1,000</strong>. Step 3: The efficient plan saves $1,000 − $750 = <strong>$250</strong> for the same 100-ton cut.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A carbon tax of $15 per ton is imposed on Firms A and B from Problem 2. (a) How much does each firm cut? (b) What is the total cut? (c) Why does this match the efficient plan?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Firm A cuts until MAC = $15: 0.2 q<sub>A</sub> = 15, so q<sub>A</sub> = <strong>75 tons</strong>. Step 2: Firm B cuts until 0.6 q<sub>B</sub> = 15, so q<sub>B</sub> = <strong>25 tons</strong>. Step 3: The total cut is 75 + 25 = <strong>100 tons</strong>. Step 4: It matches because the tax makes each firm equalize its own marginal cost with the tax — the same condition as the efficient plan.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A cap-and-trade system issues permits for a 100-ton cut and the permit price settles at $15. (a) How many tons does Firm B cut, and how many permits does it buy? (b) Why does Firm B buy permits instead of cutting more?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Firm B cuts 25 tons (where its MAC is $15) and buys permits for the rest of its share — under a 50-permit initial split, it buys <strong>25 permits</strong> (50 − 25). Step 2: Cutting a 26th ton would cost Firm B 0.6 × 26 = $15.60, more than the $15 permit — so buying is cheaper. Step 3: The trade moves the cut to Firm A, where it costs less, and both firms end up better off.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain in your own words why climate change is harder to solve than a local river-pollution problem, naming two specific differences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: River pollution is local — one government can tax or regulate the polluters in its own jurisdiction. Step 2: Carbon dioxide mixes globally, so one country's cuts help everyone and one country's emissions harm everyone — the benefit of cutting is shared worldwide while the cost is local. Step 3: That creates <strong>free-riding</strong>: each country prefers others to cut. And there is no world government to set the tax, so the price must be negotiated country by country.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A Pigouvian tax should be set equal to:",
      "choices": [
        "The private cost of production",
        "The marginal external cost at the efficient quantity",
        "The total revenue the government wants",
        "Zero, because taxes always hurt"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A $20 tax on a $20 external cost makes the firm face the $70 social cost. (a) The private cost is already paid by the firm. (c) Revenue is a by-product, not the target. (d) A zero tax leaves the externality unpriced."
    },
    {
      "q": "Firm A has MAC = 0.2 × q and Firm B has MAC = 0.6 × q. For a 100-ton cut, the efficient split is:",
      "choices": [
        "50 tons each",
        "75 tons for A and 25 tons for B",
        "25 tons for A and 75 tons for B",
        "100 tons for A and 0 for B"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Equalizing marginal costs gives qA = 3 × qB, so 75 and 25. (a) is the uniform rule, which costs $250 more. (c) gives the cheap cutter the small job — backwards. (d) would push A's marginal cost to $20, above B's first-ton cost of $0.60, so it is not efficient."
    },
    {
      "q": "The efficient 100-ton plan costs $750 while the uniform 50/50 rule costs $1,000. The saving is:",
      "choices": [
        "$0",
        "$250",
        "$750",
        "$1,750"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $1,000 − $750 = $250. (a) ignores the cost difference. (c) is the efficient cost itself. (d) adds the two costs instead of subtracting."
    },
    {
      "q": "Under a $15 carbon tax, Firm B (MAC = 0.6 × q) cuts:",
      "choices": [
        "15 tons",
        "25 tons",
        "75 tons",
        "90 tons"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 0.6 × q = 15 gives q = 25 tons. (a) is the tax rate, not the quantity. (c) is Firm A's cut. (d) has no basis in the numbers."
    },
    {
      "q": "Cap-and-trade differs from a carbon tax mainly because it:",
      "choices": [
        "Fixes the quantity of pollution and lets the permit price adjust",
        "Fixes the price of pollution and lets the quantity adjust",
        "Bans all pollution",
        "Costs firms nothing"
      ],
      "answer": 0,
      "explanation": "Correct: (a). A cap sets the total and the market sets the permit price. (b) describes a carbon tax. (c) Neither tool bans pollution — both price it. (d) Permits cost money, and abatement costs money."
    },
    {
      "q": "A Pigouvian tax of $20 on 700 widgets raises revenue of:",
      "choices": [
        "$700",
        "$14,000",
        "$20,000",
        "$2,000"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $20 × 700 = $14,000. (a) is the quantity alone. (c) is the external cost at the old quantity of 1,000. (d) is $20 × 100."
    },
    {
      "q": "Command-and-control regulation is usually more expensive than market-based policy because it:",
      "choices": [
        "Lets firms trade permits",
        "Orders the same cut from every firm regardless of their different abatement costs",
        "Sets a tax equal to marginal external cost",
        "Is never enforced"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A uniform order wastes the $250 saving from letting the cheap cutter do more. (a) Trading permits is the market-based alternative. (c) That is a Pigouvian tax. (d) Enforcement is a separate issue."
    },
    {
      "q": "Climate change is a global commons problem because:",
      "choices": [
        "Only one country emits carbon dioxide",
        "A ton emitted anywhere harms everywhere, and no single country can fix it alone",
        "Carbon dioxide stays where it is emitted",
        "The atmosphere is owned by one government"
      ],
      "answer": 1,
      "explanation": "Correct: (b). CO₂ mixes globally, so the benefit of cutting is shared and free-riding pays. (a) Nearly every country emits. (c) CO₂ disperses worldwide. (d) No government owns the atmosphere — that is the problem."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Pollution & Climate Policy Quick Reference</h3>\n<p><strong>Core idea:</strong> Price pollution and let firms find the cheapest cuts. A uniform order wastes money.</p>\n<div class=\"formula\">Pigouvian tax = marginal external cost ($20/widget; revenue $20 × 700 = $14,000) &nbsp;|&nbsp; Efficient abatement: equalize MACs</div>\n<p><strong>Worked anchor:</strong> MAC<sub>A</sub> = 0.2q, MAC<sub>B</sub> = 0.6q, 100-ton target → A cuts 75, B cuts 25, common MAC $15, total cost $750 (A $562.50 + B $187.50). Uniform 50/50 costs $1,000 — $250 more.</p>\n<p><strong>Two tools, same result:</strong> $15 carbon tax → A cuts 75, B cuts 25. Cap-and-trade with a $15 permit price → the same split. Tax fixes the price; cap fixes the quantity.</p>\n<p><strong>Climate:</strong> a global commons — a ton cut anywhere helps everywhere, so buy the cheapest cuts first and negotiate the burden.</p>\n<p><strong>Watch out:</strong> Do not give the cheap cutter the small job. Firm A (cheap) cuts 75; Firm B (dear) cuts 25.</p>\n<p><strong>Self-check:</strong> Firm C has MAC = 0.5 × q. Under a $15 tax, how much does it cut, and what is its total abatement cost?</p>\n"
};
