// eco201 - Module 11: Externalities & Public Goods Revisited
module.exports = {
  "number": 11,
  "slug": "externalities-public-goods-revisited",
  "title": "Externalities & Public Goods Revisited",
  "estTime": "3–4 hours",
  "objectives": [
    "Define externalities and distinguish negative from positive, production from consumption.",
    "Compute the market outcome, the efficient outcome, the Pigouvian tax, and the deadweight loss.",
    "Compare Pigouvian taxes, cap-and-trade, and command-and-control regulation.",
    "State the Coase theorem and explain when bargaining solves an externality.",
    "Define public goods, explain the free-rider problem, and apply the sum-of-willingness-to-pay rule."
  ],
  "sections": [
    {
      "heading": "Externalities: When Prices Miss a Cost or a Benefit",
      "html": "<p>An <strong>externality</strong> is a cost or benefit of an activity that falls on someone who is not part of the deal — a third party. A factory's smoke harms neighbors who never bought its product; a neighbor's beautiful garden pleases passers-by who never paid for it. The market price reflects only the private costs and benefits of buyer and seller, so it misses the external part — and the quantity traded is wrong.</p>\n<p>There are four kinds. A <strong>negative production externality</strong> is pollution from a factory. A <strong>negative consumption externality</strong> is secondhand smoke or a loud party. A <strong>positive production externality</strong> is a beekeeper whose bees pollinate a neighbor's orchard. A <strong>positive consumption externality</strong> is a flu vaccination, which protects the vaccinated person and everyone they might otherwise have infected. Negative externalities mean too much of the activity; positive externalities mean too little.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The First Welfare Theorem assumed no externalities. When a third party is affected, the market's price is missing a piece of the true cost or benefit, so the market quantity is not efficient.</div>"
    },
    {
      "heading": "The Negative Externality, Worked Out",
      "html": "<p>Our worked market is a factory town. Demand for the factory's output is P = 60 − Q. The factory's private marginal cost is MPC = 10 + Q. Each unit also causes $6 of damage to neighbors — the <strong>marginal external cost</strong> (MEC) — so the <strong>marginal social cost</strong> is MSC = MPC + MEC = 16 + Q.</p>\n<p>Step 1: the market outcome sets demand equal to private cost: 60 − Q = 10 + Q, so 2Q = 50, Q = 25, and P = 60 − 25 = $35. Step 2: the efficient outcome sets demand equal to social cost: 60 − Q = 16 + Q, so 2Q = 44, Q = 22, and P = 60 − 22 = $38. The market produces 3 units too many. Step 3: the deadweight loss is the surplus lost on those 3 units: each one costs society $6 more than it is worth at the margin, so DWL = 0.5 × $6 × 3 = $9. Step 4: the <strong>Pigouvian tax</strong> that fixes it equals the marginal external cost: a $6 per-unit tax shifts the firm's cost to 16 + Q, the market clears at Q = 22, and the tax collects $6 × 22 = $132 in revenue. The tax does not punish the firm for its own sake — it makes the price tell the truth.</p>\n<div class=\"formula\">MSC = MPC + MEC &nbsp;|&nbsp; Efficient: demand = MSC &nbsp;|&nbsp; Pigouvian tax = MEC = $6 &nbsp;|&nbsp; DWL = 0.5 × $6 × 3 = $9</div>"
    },
    {
      "heading": "Fixes: Taxes, Caps, and Bargaining",
      "html": "<p>A Pigouvian tax is one fix; there are others. <strong>Cap-and-trade</strong> sets a total quantity of pollution (the cap) and lets firms buy and sell permits to pollute. If the cap is set at the efficient quantity — 22 units of output in our example, or the corresponding pollution — the permit price ends up at $6, exactly the Pigouvian tax, and the firms that can cut pollution cheapest do so. The tax fixes the price and lets the quantity adjust; the cap fixes the quantity and lets the price adjust. <strong>Command-and-control regulation</strong> simply orders every firm to cut pollution by the same amount, which is simple but wasteful: it forces expensive cuts from firms that could cut cheaply and cheap cuts from firms that could cut more.</p>\n<p>The <strong>Coase theorem</strong> says that if property rights are clear and bargaining is costless, the parties will negotiate to the efficient outcome no matter who holds the rights. If the neighbors own the right to clean air, the factory pays them for the right to pollute 22 units' worth; if the factory owns the right to pollute, the neighbors pay it to cut back to 22. Either way the efficient quantity results. The catch is transaction costs: with many neighbors, bargaining is expensive and messy, which is why taxes and caps are used for big problems like climate change and bargaining works best for two-party disputes like a noisy neighbor.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Taxes and caps both put a price on the externality; the difference is which side — price or quantity — the government fixes. Coase bargaining works when the parties are few and the rights are clear.</div>"
    },
    {
      "heading": "Public Goods and the Free-Rider Problem",
      "html": "<p>A <strong>public good</strong> is non-rival (one person's use does not reduce another's) and non-excludable (nobody can be kept from using it). National defense, a lighthouse, and clean air are the classic examples. A private good like a sandwich is rival and excludable; a <strong>common resource</strong> like an open fishery is rival but non-excludable — anyone can fish, and each fish caught leaves fewer for others, which is the <strong>tragedy of the commons</strong>.</p>\n<p>The problem with public goods is the <strong>free rider</strong>: since nobody can be excluded, everyone has an incentive to let someone else pay. The efficient rule is to provide the good when the sum of everyone's willingness to pay exceeds its cost. Suppose a town lighthouse costs $40 to run. Ana would pay $30 for it and Ben would pay $20. The sum is $50, which exceeds $40, so the lighthouse should be provided — but neither will pay for it voluntarily, because each hopes the other will. The government solves this by taxing both ($30 from Ana and $20 from Ben, matching their benefits — <strong>Lindahl prices</strong>) and providing the good. That is the economic case for government provision of public goods: not that government is better at running things, but that the market will not provide them at all.</p>\n<div class=\"formula\">Provide a public good when Σ willingness to pay &gt; cost &nbsp;|&nbsp; Here: $30 + $20 = $50 &gt; $40</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Externalities are costs or benefits to third parties. Negative means too much is produced; positive means too little.</li>\n<li>Worked market: demand P = 60 − Q, MPC = 10 + Q, MEC = $6 → market Q = 25, P = $35; efficient Q = 22, P = $38; Pigouvian tax $6; tax revenue $132; DWL $9.</li>\n<li>Fixes: Pigouvian tax (fix the price), cap-and-trade (fix the quantity), command-and-control (simple, wasteful), Coase bargaining (works when rights are clear and parties are few).</li>\n<li>Public goods are non-rival and non-excludable; the free-rider problem means markets underprovide them. Provide when the sum of willingness to pay exceeds cost: $30 + $20 = $50 &gt; $40 for the lighthouse.</li>\n<li>Common resources are rival but non-excludable, giving the tragedy of the commons — overuse because nobody owns the resource.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying the Pigouvian tax should equal the total damage. It should equal the marginal external cost at the efficient quantity — $6 per unit here, not the total damage of $132.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Calling every government-provided good a public good. Public schools and roads are provided by government but are partly rival and excludable — the economic definition (non-rival, non-excludable) is narrower than \"provided by the government.\"</div>\n<p><strong>Ready-to-Work link:</strong> You now have the full map of market failure: market power (Module 6), information (Module 10), and externalities and public goods (this module). Module 12 ties the whole course together.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Externality", "def": "A cost or benefit of an activity that falls on a third party who is not part of the transaction." },
    { "term": "Negative externality", "def": "An external cost, such as pollution; the market produces too much of the activity." },
    { "term": "Positive externality", "def": "An external benefit, such as vaccination; the market produces too little of the activity." },
    { "term": "Marginal external cost (MEC)", "def": "The extra external cost of one more unit of an activity; $6 in the worked example." },
    { "term": "Marginal social cost (MSC)", "def": "Private marginal cost plus marginal external cost: MSC = MPC + MEC." },
    { "term": "Pigouvian tax", "def": "A tax equal to the marginal external cost at the efficient quantity, making the price reflect the true social cost." },
    { "term": "Cap-and-trade", "def": "A policy that caps total pollution and lets firms trade permits; the permit price equals the Pigouvian tax." },
    { "term": "Command-and-control regulation", "def": "Direct orders to cut pollution by a set amount; simple but usually more costly than taxes or caps." },
    { "term": "Coase theorem", "def": "With clear property rights and costless bargaining, parties negotiate to the efficient outcome regardless of who holds the rights." },
    { "term": "Public good", "def": "A good that is non-rival and non-excludable, such as national defense." },
    { "term": "Non-rival", "def": "One person's use does not reduce the amount available to others." },
    { "term": "Non-excludable", "def": "Nobody can be prevented from using the good." },
    { "term": "Free rider", "def": "Someone who benefits from a public good without paying for it." },
    { "term": "Lindahl prices", "def": "Personalized prices for a public good equal to each person's willingness to pay." },
    { "term": "Common resource", "def": "A good that is rival but non-excludable, such as an open fishery." },
    { "term": "Tragedy of the commons", "def": "Overuse of a common resource because nobody owns it and nobody bears the full cost of using it." }
  ],
  "video": {
    "title": "Public Goods and Externalities",
    "embedUrl": "https://www.youtube.com/embed/K4qvB7KXAw4",
    "note": "Professor Dave Explains covers public goods and externalities — the same two market failures this module works through, including the free-rider problem. Watch it, then recompute the Pigouvian tax ($6) and the lighthouse decision ($50 > $40) yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Demand is P = 60 − Q, private marginal cost is MPC = 10 + Q, and each unit causes $6 of external damage. (a) Find the market quantity and price. (b) Find the efficient quantity and price. (c) What is the deadweight loss?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Market: 60 − Q = 10 + Q gives Q = 25, P = $35. Step 2: (b) Efficient: MSC = 16 + Q, so 60 − Q = 16 + Q gives Q = 22, P = $38. Step 3: (c) DWL = 0.5 × $6 × (25 − 22) = 0.5 × 6 × 3 = $9.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> For the same market, (a) what Pigouvian tax corrects the externality? (b) How much tax revenue is collected at the efficient quantity? (c) Verify that the taxed market clears at Q = 22.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) The tax equals the marginal external cost: $6 per unit. Step 2: (b) Revenue = $6 × 22 = $132. Step 3: (c) With the tax, the firm's cost is 10 + Q + 6 = 16 + Q; setting demand equal to it, 60 − Q = 16 + Q, gives Q = 22 — the efficient quantity.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A flu vaccine gives the vaccinated person $40 of benefit and gives $30 of benefit to others (fewer infections). The vaccine costs $50. (a) Will a private market provide it? (b) What is the socially efficient outcome? (c) What subsidy would fix the market?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Privately, the benefit is $40 and the cost is $50, so the person will not buy it — the market provides zero. Step 2: (b) Socially, total benefit is $40 + $30 = $70, which exceeds the $50 cost, so it should be provided. Step 3: (c) A subsidy of $30 (equal to the external benefit) makes the private net benefit $40 + $30 − $50 = $20, so the person buys it — the Pigouvian subsidy equals the marginal external benefit.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A lighthouse costs $40. Ana would pay $30 and Ben would pay $20. (a) Should it be provided? (b) What would each pay under Lindahl pricing? (c) Why won't the private market provide it?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Yes: total willingness to pay is $30 + $20 = $50, which exceeds the $40 cost. Step 2: (b) Lindahl prices match willingness to pay: Ana pays $30, Ben pays $20. Step 3: (c) The lighthouse is non-excludable, so each person hopes the other pays — the free-rider problem — and the market provides nothing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Two firms can cut pollution. Firm A can cut a unit for $10, Firm B for $30. The government wants 2 units cut in total. (a) What is the cost under command-and-control (1 unit each)? (b) What is the cost if the cheaper firm cuts both? (c) How does cap-and-trade achieve the cheaper outcome?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Command-and-control: $10 + $30 = $40. Step 2: (b) Firm A cuts both units: the first costs $10 and the second costs $10 (assume constant marginal cost here), so $20 total — saving $20. Step 3: (c) Under cap-and-trade, Firm B buys a permit from Firm A instead of cutting its own expensive unit; the permit price settles between $10 and $30, Firm A cuts both units, and the total cost is $20.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A factory pollutes a river used by one fisherman. The factory gains $500 from polluting; the fisherman loses $300. (a) What does the Coase theorem predict? (b) Who pays whom, and how much, if the fisherman owns the right to clean water? (c) What if the factory owns the right to pollute?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) The efficient outcome is for the factory to keep polluting, because its gain ($500) exceeds the fisherman's loss ($300) — total surplus is higher with pollution. Step 2: (b) If the fisherman owns the clean-water right, the factory pays him between $300 and $500 (say $400) for permission to pollute; he is better off by $100 and the factory by $100. Step 3: (c) If the factory owns the right, the fisherman would have to pay at least $500 to stop pollution, which exceeds his $300 loss, so he does not pay and the factory pollutes. Either way, the factory pollutes — the rights decide who pays, not the outcome.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An externality is:",
      "choices": [
        "A cost paid by the buyer",
        "A cost or benefit that falls on a third party not involved in the transaction",
        "A tax imposed by the government",
        "A cost that appears on the firm's balance sheet"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Third parties are the key — the factory's smoke harms neighbors who never bought anything. (a) Buyer costs are private costs, already in the price. (c) A tax is a policy response, not the externality. (d) Balance-sheet costs are private costs."
    },
    {
      "q": "Demand is P = 60 − Q, MPC = 10 + Q, and MEC = $6. The market quantity is:",
      "choices": [
        "22",
        "25",
        "30",
        "35"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Market sets demand = MPC: 60 − Q = 10 + Q gives Q = 25. (a) is the efficient quantity (demand = MSC). (c) would need MPC = 0. (d) is the market price, not the quantity."
    },
    {
      "q": "The efficient quantity in that market is 22 because:",
      "choices": [
        "Demand equals MSC: 60 − Q = 16 + Q",
        "Demand equals MPC at Q = 22",
        "The tax revenue is maximized at Q = 22",
        "22 is the midpoint of 25 and 19"
      ],
      "answer": 0,
      "explanation": "Correct: (a). MSC = 10 + Q + 6 = 16 + Q; setting demand equal to MSC gives Q = 22. (b) Demand equals MPC at Q = 25, the market outcome. (c) Revenue is not the efficiency criterion. (d) The number 22 comes from the equation, not from averaging."
    },
    {
      "q": "The Pigouvian tax for this market is:",
      "choices": [
        "$3",
        "$6",
        "$9",
        "$16"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The tax equals the marginal external cost, $6. (a) is half the MEC. (c) is the deadweight loss. (d) is the MSC intercept."
    },
    {
      "q": "The deadweight loss of the uncorrected externality is:",
      "choices": [
        "$6",
        "$9",
        "$18",
        "$132"
      ],
      "answer": 1,
      "explanation": "Correct: (b). DWL = 0.5 × $6 × (25 − 22) = $9. (a) is the MEC alone. (c) doubles the triangle. (d) is the tax revenue at the efficient quantity."
    },
    {
      "q": "Cap-and-trade differs from a Pigouvian tax because it:",
      "choices": [
        "Fixes the quantity of pollution and lets the permit price adjust",
        "Fixes the price of pollution and lets the quantity adjust",
        "Bans all pollution",
        "Costs the government nothing to run"
      ],
      "answer": 0,
      "explanation": "Correct: (a). The cap sets the quantity; trading sets the price. (b) describes the tax. (c) Neither policy bans pollution. (d) Both policies have administrative costs."
    },
    {
      "q": "A lighthouse is a public good because it is:",
      "choices": [
        "Built by the government",
        "Non-rival and non-excludable",
        "Expensive to build",
        "Used by ships"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Non-rival and non-excludable is the economic definition. (a) Government provision is a consequence, not the definition. (c) Cost is irrelevant. (d) Use by ships does not make it a public good."
    },
    {
      "q": "Ana would pay $30 and Ben $20 for a lighthouse costing $40. The efficient decision is to:",
      "choices": [
        "Not build it, because no one person values it at $40",
        "Build it, because total willingness to pay ($50) exceeds cost ($40)",
        "Build it only if Ana pays the full $40",
        "Let the market decide without government"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The rule is the sum of willingness to pay vs. cost: $50 > $40. (a) Individual willingness is not the test — the sum is. (c) Lindahl pricing has Ana pay $30 and Ben $20, not $40 from Ana alone. (d) The market will not provide it because of free riding."
    }
  ],
  "studyGuide": "\n<h3>Module 11 — Externalities & Public Goods Quick Reference</h3>\n<p><strong>Core idea:</strong> When a third party is affected, the market price misses part of the true cost or benefit. Fix it by pricing the externality — or, for public goods, by providing what the market will not.</p>\n<p><strong>Worked anchor:</strong> demand P = 60 − Q, MPC = 10 + Q, MEC = $6 → market Q = 25, P = $35; efficient Q = 22, P = $38; Pigouvian tax $6; revenue $132; DWL = 0.5 × 6 × 3 = $9.</p>\n<div class=\"formula\">MSC = MPC + MEC &nbsp;|&nbsp; Pigouvian tax = MEC &nbsp;|&nbsp; Provide a public good when Σ WTP &gt; cost</div>\n<p><strong>Lighthouse anchor:</strong> Ana $30 + Ben $20 = $50 &gt; $40 cost → provide; Lindahl prices $30 and $20. <strong>Coase:</strong> with clear rights and costless bargaining, the efficient outcome results whoever holds the rights.</p>\n<p><strong>Watch out:</strong> The Pigouvian tax equals marginal external cost, not total damage. And \"provided by government\" is not the definition of a public good — non-rival and non-excludable is.</p>\n<p><strong>Self-check:</strong> If MEC were $10 instead of $6, what would the efficient quantity be? (Answer: 60 − Q = 20 + Q → Q = 20.)</p>\n"
};
