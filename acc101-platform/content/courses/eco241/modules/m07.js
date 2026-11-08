// eco241 - Module 7: The Environment as an Economic Problem (GVSU ECO 345)
module.exports = {
  "number": 7,
  "slug": "environment-as-economic-problem",
  "title": "The Environment as an Economic Problem",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why the environment is an economic problem of missing prices and missing property rights.",
    "Define private cost, external cost, and social cost, and compute social cost from a worked example.",
    "Use a supply-and-demand diagram in words to show why a market overproduces pollution.",
    "Distinguish rival from non-rival and excludable from non-excludable goods, and place the environment in that grid.",
    "Explain the tragedy of the commons and why it predicts overuse of shared resources."
  ],
  "sections": [
    {
      "heading": "Why Economists See the Environment Differently",
      "html": "<p>Most people see pollution as a moral failure or a technical problem. Economists see it as a <strong>missing market</strong>: nobody owns the atmosphere, so nobody charges for using it as a dump, so it gets used too much. Clean air has enormous value, but because it has no price, the market treats it as free — and free things get overused. The environment is an economic problem precisely because the price system, which coordinates everything else so well, has no price for it.</p>\n<p>That framing is good news, not bad: if the problem is a missing price, the fix is to supply one — a tax, a permit, or a property right — rather than to wish the economy away. Environmental economics does not ask whether to have industry or a clean environment; it asks how much of each, and at what cost, and who pays. The rest of this course is the toolkit for answering that.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Pollution is not proof that markets always fail; it is proof that a market is missing. Give the environment a price and the market starts rationing it like everything else.</div>"
    },
    {
      "heading": "Private Cost, External Cost, Social Cost",
      "html": "<p>Every act of production has a <strong>private cost</strong> — what the producer pays: wages, materials, energy. When production also harms people who are not part of the deal — smoke drifting over a town, waste in a river — that harm is an <strong>external cost</strong>. The <strong>social cost</strong> is the sum of the two: social cost = private cost + external cost.</p>\n<p>Worked anchor — a factory making widgets. Its private cost per widget is <strong>$50</strong>. Each widget's smoke causes <strong>$20</strong> of health and cleaning costs to neighbours who are not paid for the harm. The social cost is $50 + $20 = <strong>$70</strong> per widget. The factory decides how much to make by comparing its $50 private cost with the price buyers pay — it ignores the $20. So it makes too many widgets: at the market quantity of 1,000 widgets, the total external cost is 1,000 × $20 = <strong>$20,000</strong> of harm nobody pays for. The market is efficient for the factory and its customers, and inefficient for society — the gap is exactly the external cost.</p>\n<div class=\"formula\">Social cost = private cost + external cost &nbsp;|&nbsp; Total external cost = external cost per unit × quantity</div>"
    },
    {
      "heading": "Why the Market Overproduces Pollution",
      "html": "<p>Picture the widget market as supply and demand. Supply reflects private cost ($50); demand reflects buyers' willingness to pay. They meet at the market quantity — 1,000 widgets in our example. But society's true supply curve is the social cost ($70), which lies above the private one by the $20 external cost. The socially best quantity is where demand meets the social-cost curve — suppose that is <strong>700 widgets</strong>. The market makes 300 too many, and each of those 300 costs society $20 more than it is worth to buyers. That excess is the deadweight loss of pollution, the mirror image of the tariff triangles in Module 2.</p>\n<p>Notice what the efficient answer is not: zero pollution. The first widgets are worth far more to buyers than their $70 social cost, so making them is good. Pollution is worth eliminating only up to the point where the cost of one more unit of cleanup equals the harm of one more unit of pollution. \"How much pollution?\" is an economic question with a number for an answer, and Module 8 works out how to find it.</p>"
    },
    {
      "heading": "What Kind of Good Is the Environment?",
      "html": "<p>Economists sort goods on two questions: is it <strong>rival</strong> (one person's use leaves less for others) and is it <strong>excludable</strong> (can you stop non-payers using it)? A sandwich is rival and excludable — a private good. A lighthouse beam is non-rival and non-excludable — a public good. A fish stock is rival but non-excludable — a <strong>common resource</strong>. Clean air is non-rival until it is polluted, and non-excludable: you cannot fence the sky.</p>\n<p>Common resources are the danger zone. Because nobody can be excluded, nobody has an incentive to conserve, and because use is rival, each person's use harms the rest. That combination is the <strong>tragedy of the commons</strong>: a shared pasture gets overgrazed, a shared fishery gets overfished, a shared atmosphere gets overfilled — not because users are evil, but because each user gains the full benefit of one more cow, fish, or ton of smoke, while the cost is shared with everyone. The solutions are the subject of Modules 8 and 9: assign property rights, charge a price, or regulate the total.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The tragedy of the commons is a problem of incentives, not character. Fix the incentives — price the use, cap the total, or assign ownership — and the same self-interested people conserve.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Pollution is a missing market: the environment has no price, so it is overused.</li>\n<li>Social cost = private cost + external cost. Widget anchor: $50 + $20 = $70 per widget.</li>\n<li>At the market quantity of 1,000 widgets, total external cost is 1,000 × $20 = $20,000.</li>\n<li>The market overproduces: socially best quantity is 700 widgets, not the market's 1,000. The efficient level of pollution is not zero.</li>\n<li>Clean air is non-excludable; fish stocks are rival and non-excludable (common resources) — the setting for the tragedy of the commons.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Calling all pollution \"market failure\" and concluding markets can do nothing about the environment. The failure is a missing price, and the market-based fixes — taxes and tradable permits in Module 8 — are among the most effective environmental policies ever used.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Adding the external cost to the price buyers pay. The $20 is a cost to neighbours, not a charge the factory pays — that is exactly the problem. Until a tax or permit makes the factory pay it, the $20 stays off the factory's books and on the neighbours' lungs.</div>\n<p><strong>Ready-to-Work link:</strong> Every business decision with a spillover — noise, waste, traffic, smoke — is this module in miniature. Asking \"who pays the $20?\" is the fastest way to see whether a plan is honestly priced.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Externality",
      "def": "A cost or benefit of an activity that falls on people not involved in the activity."
    },
    {
      "term": "Negative externality",
      "def": "An external cost, such as pollution harming neighbours who are not compensated."
    },
    {
      "term": "Positive externality",
      "def": "An external benefit, such as a neighbour's garden raising nearby house values."
    },
    {
      "term": "Private cost",
      "def": "The cost a producer actually pays — wages, materials, energy."
    },
    {
      "term": "External cost",
      "def": "The cost an activity imposes on others without compensation."
    },
    {
      "term": "Social cost",
      "def": "Private cost plus external cost — the full cost to society."
    },
    {
      "term": "Market failure",
      "def": "A situation where the market produces too much or too little of a good for society's benefit."
    },
    {
      "term": "Rival good",
      "def": "A good whose use by one person leaves less for others, such as a sandwich or a fish."
    },
    {
      "term": "Non-rival good",
      "def": "A good whose use by one person does not reduce what is left for others, such as a lighthouse beam."
    },
    {
      "term": "Excludable good",
      "def": "A good from which non-payers can be kept out."
    },
    {
      "term": "Non-excludable good",
      "def": "A good from which non-payers cannot be kept out, such as clean air."
    },
    {
      "term": "Common resource",
      "def": "A good that is rival but non-excludable, such as a fishery or a shared pasture."
    },
    {
      "term": "Public good",
      "def": "A good that is non-rival and non-excludable, such as national defence."
    },
    {
      "term": "Tragedy of the commons",
      "def": "The overuse of a shared resource because each user gains the full benefit while the cost is shared."
    }
  ],
  "video": {
    "title": "Environmental Econ: Crash Course Economics #22",
    "embedUrl": "https://www.youtube.com/embed/BlAfFgKQ5r8",
    "note": "Crash Course Economics on environmental economics — pollution as market failure, and how incentives can cut emissions. Compare its carbon-dioxide example with this module's $50 private cost + $20 external cost widget factory.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A factory's private cost per widget is $50 and each widget causes $20 of external harm. (a) What is the social cost per widget? (b) If the factory makes 1,000 widgets, what is the total external cost?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Social cost is $50 + $20 = <strong>$70</strong> per widget. Step 2: Total external cost is 1,000 × $20 = <strong>$20,000</strong>. Step 3: That $20,000 is harm borne by neighbours, not by the factory or its customers.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> In the same example, the market makes 1,000 widgets but the socially best quantity is 700. (a) How many excess widgets are made? (b) What is the external cost of those excess widgets?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Excess widgets are 1,000 − 700 = <strong>300</strong>. Step 2: Their external cost is 300 × $20 = <strong>$6,000</strong>. Step 3: Each of those 300 widgets is worth less to buyers than its $70 social cost, so making them destroys value.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A beekeeper's bees pollinate a neighbour's orchard, raising the orchard's harvest by $500 a year at no cost to the orchard owner. (a) Is this a positive or negative externality? (b) Does the market produce too many or too few bees?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is a <strong>positive externality</strong> — a benefit to someone not party to the deal. Step 2: The beekeeper ignores the $500 benefit to the orchard, so she keeps fewer bees than society would want: the market produces <strong>too few</strong> bees. Step 3: The fix mirrors pollution in reverse — a subsidy for beekeeping, or payment from the orchard owner.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Sort these into private goods, public goods, and common resources: (a) a sandwich, (b) a lighthouse beam, (c) fish in an open ocean, (d) a city park at rush hour. Explain each in one line.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) A sandwich is a <strong>private good</strong> — rival and excludable. Step 2: (b) A lighthouse beam is a <strong>public good</strong> — non-rival and non-excludable. Step 3: (c) Open-ocean fish are a <strong>common resource</strong> — rival (one boat's catch leaves fewer fish) but non-excludable. Step 4: (d) A crowded park is a <strong>common resource</strong> in practice — rival when crowded, and hard to exclude people from.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Ten herders share a pasture. Each extra cow earns its owner $100 of milk but causes $15 of damage to the pasture, shared equally by all ten herders. (a) What does the owner gain from one extra cow? (b) Why does the pasture get overgrazed?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The owner gains $100 of milk and bears only $15 ÷ 10 = $1.50 of the damage, for a net gain of <strong>$98.50</strong>. Step 2: Every herder faces the same arithmetic, so each adds cows even though ten cows cause $150 of damage for $1,000 of milk — and as cows pile up, the damage per cow grows. Step 3: The pasture is overgrazed because each herder takes the full benefit and shares the cost — the tragedy of the commons.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain why the efficient level of pollution is not zero, using the widget example ($50 private cost, $20 external cost, socially best quantity 700).</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The first widgets are worth far more to buyers than their $70 social cost, so making them adds value to society. Step 2: Only the widgets beyond 700 cost more ($70) than buyers will pay for them. Step 3: Cutting pollution to zero would mean giving up all 700 worthwhile widgets — a much bigger loss than the $6,000 of harm from the 300 excess ones. Efficiency means stopping where cost meets benefit, not at zero.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Social cost equals:",
      "choices": [
        "Private cost minus external cost",
        "Private cost plus external cost",
        "External cost alone",
        "Price minus private cost"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Social cost = $50 private + $20 external = $70. (a) Subtracting would understate the true cost. (c) Ignores what the producer pays. (d) That difference is profit, not social cost."
    },
    {
      "q": "A factory makes 1,000 widgets with an external cost of $20 each. The total external cost is:",
      "choices": [
        "$2,000",
        "$20,000",
        "$70,000",
        "$50,000"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1,000 × $20 = $20,000. (a) would be 100 widgets, not 1,000. (c) is the total social cost (1,000 × $70). (d) is the total private cost (1,000 × $50)."
    },
    {
      "q": "A market with a negative externality produces:",
      "choices": [
        "Too little, because producers ignore the benefit",
        "Too much, because producers ignore the external cost",
        "Exactly the socially best quantity",
        "Nothing at all"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Producers decide on the $50 private cost, not the $70 social cost, so they make 1,000 instead of 700. (a) describes a positive externality. (c) would need producers to face the social cost. (d) The market produces plenty — too much."
    },
    {
      "q": "The efficient level of pollution is:",
      "choices": [
        "Always zero",
        "The level where the cost of one more unit of cleanup equals the harm of one more unit of pollution",
        "Whatever the largest polluter prefers",
        "The level that maximizes production"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Efficiency balances cleanup cost against harm; zero pollution would sacrifice worthwhile production. (a) ignores the value of the goods produced. (c) The largest polluter's preference is not the social optimum. (d) Maximizing production ignores the external cost."
    },
    {
      "q": "Open-ocean fish are a common resource because they are:",
      "choices": [
        "Non-rival and non-excludable",
        "Rival but non-excludable",
        "Rival and excludable",
        "Non-rival and excludable"
      ],
      "answer": 1,
      "explanation": "Correct: (b). One boat's catch leaves fewer fish (rival), but nobody can be kept out of the open ocean (non-excludable). (a) describes a public good like a lighthouse beam. (c) describes a private good like a sandwich. (d) describes a club good like a streaming service."
    },
    {
      "q": "The tragedy of the commons happens because:",
      "choices": [
        "People are naturally evil",
        "Each user gains the full benefit of use while the cost is shared with everyone",
        "Resources are infinite",
        "Governments ban all use of shared resources"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The herder gains $98.50 net from one more cow while the pasture bears the damage. (a) The tragedy needs no bad character — ordinary self-interest does it. (c) If resources were infinite there would be no tragedy. (d) A ban would prevent use, not cause overuse."
    },
    {
      "q": "A beekeeper whose bees pollinate a neighbour's orchard creates a:",
      "choices": [
        "Negative externality, so too many bees are kept",
        "Positive externality, so too few bees are kept",
        "Public good, so the government must keep the bees",
        "Common resource, so the bees will be overused"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The $500 benefit to the orchard is ignored by the beekeeper, so she keeps fewer bees than society wants. (a) reverses the sign and the quantity. (c) Bees are not a public good — they are owned and excludable. (d) The bees are owned, not a shared commons."
    },
    {
      "q": "Clean air is hard for a market to price because it is:",
      "choices": [
        "Rival and excludable",
        "Non-excludable — you cannot fence the sky and charge for breathing",
        "Worthless to everyone",
        "Produced only by governments"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Non-excludability means no market can form without an assigned right or a tax. (a) Air is not rival until polluted, and not excludable. (c) Clean air is enormously valuable — that is the problem. (d) Clean air is a natural endowment, not a government product."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — The Environment Quick Reference</h3>\n<p><strong>Core idea:</strong> Pollution is a missing market — the environment has no price, so it is overused. Fix the price, not the economy.</p>\n<div class=\"formula\">Social cost = private cost + external cost &nbsp;|&nbsp; Widget anchor: $50 + $20 = $70; total external cost at 1,000 widgets = $20,000</div>\n<p><strong>Overproduction:</strong> market quantity 1,000 vs. socially best 700 — 300 excess widgets, $6,000 of excess harm. Efficient pollution is not zero.</p>\n<p><strong>Goods grid:</strong> rival + excludable = private (sandwich) · non-rival + non-excludable = public (lighthouse) · rival + non-excludable = common resource (fishery) — the tragedy of the commons lives here.</p>\n<p><strong>Tragedy of the commons:</strong> each user takes the full benefit and shares the cost, so shared resources are overused.</p>\n<p><strong>Watch out:</strong> The $20 external cost is borne by neighbours, not paid by the factory — that is the problem, not the solution.</p>\n<p><strong>Self-check:</strong> A plant's private cost is $30 and its external cost is $12. What is the social cost, and what is the total external cost at 500 units?</p>\n"
};
