// eco102 - Module 10: Market Failure II: Information, Monopoly Power & Government
module.exports = {
  "number": 10,
  "slug": "market-failure-information-and-government",
  "title": "Market Failure II: Information, Monopoly Power & Government",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain asymmetric information and how it can destroy a market (the lemons problem).",
    "Distinguish adverse selection from moral hazard and give an example of each.",
    "Explain how monopoly power causes market failure and what antitrust policy does.",
    "Explain government failure: when fixing a market makes things worse.",
    "Compare the costs of market failure with the costs of government failure before recommending action."
  ],
  "sections": [
    {
      "heading": "Asymmetric Information: When One Side Knows More",
      "html": "<p>Module 9's failures came from costs and benefits falling on bystanders. This module's first failure comes from knowledge: <strong>asymmetric information</strong> is when one side of a deal knows more than the other. The seller of a used car knows whether it is a good car or a \"lemon\"; the buyer does not. The insurer does not know how risky you are; you do. Markets struggle when the informed side can use its knowledge against the uninformed side.</p>\n<p>Work the lemons numbers. Half the used cars on the market are good cars worth $10,000 to buyers, and half are lemons worth $4,000. A buyer who cannot tell them apart will pay at most the expected value: ½ × $10,000 + ½ × $4,000 = <strong>$7,000</strong>. But good-car owners will not sell for $7,000 — their cars are worth $10,000 to them — so they leave the market. Only lemons remain, buyers learn this and will pay only $4,000, and the market for good used cars collapses. Information, not greed, killed it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> When buyers cannot tell good from bad, they pay the average price — and the average price drives the good sellers away. The market unravels from the good end first.</div>"
    },
    {
      "heading": "Adverse Selection and Moral Hazard",
      "html": "<p>The lemons story is <strong>adverse selection</strong>: the people most eager to take a deal are the ones the other side least wants. In insurance, the people most eager to buy health insurance are those who expect big medical bills; if the insurer charges one average price, healthy people drop out, the average risk of those left rises, the price rises again, and more healthy people leave — a death spiral. In lending, the borrowers most eager for a high-interest loan are often the ones least likely to repay it.</p>\n<p><strong>Moral hazard</strong> is different: it happens <em>after</em> the deal, when being protected changes behavior. A driver with full insurance may drive a little less carefully; a bank that expects a bailout may take bigger risks. The fix for adverse selection is information — inspections, warranties, medical checks, credit scores. The fix for moral hazard is sharing the risk — deductibles, copayments, and coinsurance, so the protected party still feels some of the cost. A $500 deductible on car insurance is moral-hazard medicine: it makes the driver care about the next dent.</p>"
    },
    {
      "heading": "Monopoly Power and Antitrust",
      "html": "<p>Module 6 showed that a monopoly produces too little and charges too much: with demand P = 20 − Q and MC = $4, the monopoly makes 8 units at $12 instead of the efficient 16 at $4, destroying $32 of surplus. That is market failure by monopoly power, and the policy answers are <strong>antitrust law</strong> (blocking mergers that would create monopolies, breaking up cartels), <strong>regulation</strong> (capping the prices of natural monopolies like water networks), and <strong>deregulation</strong> (opening a protected market to competition, as happened with airlines).</p>\n<p>Antitrust is a judgment call, not a reflex. A big firm is not automatically a harmful monopoly: if it is big because it is efficient, breaking it up raises costs. Regulators ask whether the firm can raise prices above cost for a long time, whether entry is blocked, and whether consumers are actually harmed — the same questions you learned to answer with the monopoly arithmetic.</p>"
    },
    {
      "heading": "Government Failure: When the Fix Fails",
      "html": "<p>Governments can fail too. <strong>Government failure</strong> is when intervention makes the outcome worse than the market failure it was meant to fix. The causes are familiar from <strong>public choice theory</strong>, which studies politicians and bureaucrats as self-interested people, not angels: <strong>rent seeking</strong> (firms spending money to win a subsidy or a protective tariff instead of improving their product), <strong>regulatory capture</strong> (the regulator ends up serving the industry it regulates), and the <strong>concentrated benefits, dispersed costs</strong> problem (a $10 million subsidy is worth lobbying for by the ten firms that get $1 million each, but the $10 cost per taxpayer is not worth any one voter's time to oppose).</p>\n<p>The honest rule is to compare failures, not to compare a real market with a perfect government. A market with a $4 deadweight loss from pollution should be fixed only if the fix costs less than $4 in waste, distortion, and bureaucracy. Sometimes the answer is to fix it; sometimes the answer is to live with it; sometimes the answer is a light-touch fix — information, labeling, or a small tax — rather than a ban.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Asymmetric information: one side knows more. Lemons: good cars $10,000, lemons $4,000, half each → buyers pay at most ½ × $10,000 + ½ × $4,000 = $7,000 → good sellers exit.</li>\n<li>Adverse selection happens <em>before</em> the deal (the risky are keenest to buy insurance). Moral hazard happens <em>after</em> it (protection changes behavior). Fixes: screening and signals for the first; deductibles and copayments for the second.</li>\n<li>Monopoly power: Module 6's numbers — 8 units at $12 instead of 16 at $4, $32 deadweight loss. Answers: antitrust, regulation, deregulation.</li>\n<li>Government failure: rent seeking, regulatory capture, concentrated benefits and dispersed costs. Compare real markets with real governments, not with perfection.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Mixing up adverse selection and moral hazard. Remember the timing: adverse selection is who shows up (before), moral hazard is what they do once protected (after). Insurance has both: sick people buy it, and insured people take more risks.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Assuming that because a market fails, the government should fix it. A fix that costs more than the failure is a second failure. Always ask what the fix costs.</div>\n<p><strong>Ready-to-Work link:</strong> Warranties, inspections, and credit scores are private fixes for asymmetric information — businesses invented them because the lemons problem was costing them sales. The market often patches its own failures before the government arrives.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Asymmetric information", "def": "When one side of a transaction knows more than the other." },
    { "term": "Lemons problem", "def": "When buyers cannot tell good products from bad, good sellers exit and the market unravels." },
    { "term": "Adverse selection", "def": "The people most eager to take a deal are the ones the other side least wants; happens before the deal." },
    { "term": "Moral hazard", "def": "Being protected from risk changes behavior for the worse; happens after the deal." },
    { "term": "Signaling", "def": "An informed party credibly revealing quality, such as a warranty or a degree." },
    { "term": "Screening", "def": "An uninformed party gathering information, such as an inspection or a credit check." },
    { "term": "Deductible", "def": "The amount the insured pays before insurance covers a claim; it fights moral hazard." },
    { "term": "Copayment", "def": "A fixed amount the insured pays per service, sharing the cost." },
    { "term": "Monopoly power", "def": "The ability to set price above marginal cost for a long time." },
    { "term": "Antitrust law", "def": "Laws that limit monopoly power, block anti-competitive mergers, and ban cartels." },
    { "term": "Regulation", "def": "Government rules on a firm's price or behavior, used for natural monopolies." },
    { "term": "Deregulation", "def": "Removing government barriers to competition in a market." },
    { "term": "Government failure", "def": "When intervention makes the outcome worse than the market failure it was meant to fix." },
    { "term": "Public choice theory", "def": "Studying politicians, voters, and bureaucrats as self-interested decision-makers." },
    { "term": "Rent seeking", "def": "Spending resources to win a government favor instead of creating value." },
    { "term": "Regulatory capture", "def": "When a regulator ends up serving the industry it is supposed to regulate." },
    { "term": "Concentrated benefits, dispersed costs", "def": "A policy's gains go to a few who lobby hard; its costs are spread thinly over many who do not." },
    { "term": "Death spiral (insurance)", "def": "Healthy customers leave as premiums rise, raising average risk and premiums further." }
  ],
  "video": {
    "title": "Asymmetric Information and Used Cars",
    "embedUrl": "https://www.youtube.com/embed/sXPXpJ5vMnU",
    "note": "Marginal Revolution University explains asymmetric information with the used-car market — the lemons problem. Watch it, then redo the $7,000 expected-value arithmetic in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Half the used cars for sale are good cars worth $10,000 and half are lemons worth $4,000. Buyers cannot tell them apart. What is the most a buyer will pay? Why do good-car owners leave the market?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Expected value = ½ × $10,000 + ½ × $4,000 = $5,000 + $2,000 = <strong>$7,000</strong>. Step 2: A buyer will pay at most $7,000. Step 3: Good-car owners value their cars at $10,000, so they will not sell for $7,000 — they <strong>leave the market</strong>. Step 4: Only lemons remain, and the market for good used cars collapses.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A used-car dealer offers a free 12-month warranty on every car it sells. Explain how this fixes the lemons problem, and name the concept.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The warranty is <strong>signaling</strong>: the dealer credibly reveals quality. Step 2: A dealer selling lemons could not afford to warrant them — the repair bills would eat the profit. Step 3: Only a dealer confident in its cars offers the warranty, so buyers can trust the signal. Step 4: Good cars sell again, at a price that reflects their quality.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> (a) A person with a long history of speeding tickets rushes to buy full car insurance. Is this adverse selection or moral hazard? (b) After buying full insurance, the same person starts driving faster. Is this adverse selection or moral hazard?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) <strong>Adverse selection</strong> — it happens before the deal: the riskiest driver is keenest to buy. Step 2: (b) <strong>Moral hazard</strong> — it happens after the deal: being insured changes the driver's behavior. Step 3: Timing is the test: before = adverse selection, after = moral hazard.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> An insurer charges a $500 deductible on car insurance. Explain how the deductible fights moral hazard, and why the insurer does not set it at $5,000.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: With a $500 deductible, the driver pays the first $500 of any claim, so they still care about avoiding dents — moral hazard is reduced. Step 2: A $5,000 deductible would fight moral hazard even harder, but almost no driver could afford to pay it, so nobody would buy the policy. Step 3: The deductible balances two goals: sharing risk to change behavior, and still providing real insurance.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A monopoly with demand P = 20 − Q and MC = $4 produces 8 units at $12 instead of the efficient 16 at $4, destroying $32 of surplus. Name two policy responses and explain what each does.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: <strong>Antitrust</strong> — block the merger that created the monopoly or break the firm up, restoring competition so output rises toward 16. Step 2: <strong>Regulation</strong> — cap the price (for example at $4, or at average cost) so the firm must produce more and charge less. Step 3: Both aim at the same $32: getting output back toward the efficient level.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A proposed subsidy gives $1 million each to 10 firms and costs every taxpayer $10. The total cost equals the total benefit. Explain why the subsidy is still likely to pass, using the concentrated-benefits idea.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Each firm gains $1 million — worth hiring lobbyists and campaigning for. Step 2: Each taxpayer loses only $10 — not worth anyone's time to organize against. Step 3: The benefits are <strong>concentrated</strong> and the costs are <strong>dispersed</strong>, so the organized few beat the unorganized many. Step 4: That is government failure in miniature: a policy with no net benefit passes because of who feels it.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Asymmetric information means:",
      "choices": ["Both sides know everything", "One side of a deal knows more than the other", "Nobody knows anything", "The government knows everything"],
      "answer": 1,
      "explanation": "Correct: (b). One side knows more — the seller knows the car, the buyer does not. (a) is perfect information. (c) is symmetric ignorance. (d) is not how information works."
    },
    {
      "q": "Good cars are worth $10,000, lemons $4,000, half of each. A buyer who cannot tell them apart will pay at most:",
      "choices": ["$4,000", "$7,000", "$10,000", "$14,000"],
      "answer": 1,
      "explanation": "Correct: (b). Expected value = ½ × $10,000 + ½ × $4,000 = $7,000. (a) is the lemons-only price after good sellers leave. (c) is the good-car price. (d) adds the two values."
    },
    {
      "q": "After good-car sellers leave, the used-car market:",
      "choices": ["Works perfectly", "Contains only lemons, and buyers will pay only $4,000", "Raises prices to $10,000", "Disappears because cars are illegal"],
      "answer": 1,
      "explanation": "Correct: (b). Only lemons remain, so the price falls to the lemon value. (a) is the opposite of the lemons result. (c) Nobody will pay $10,000 for a certain lemon. (d) The market survives — for lemons."
    },
    {
      "q": "A driver with many speeding tickets eagerly buys full insurance. This is:",
      "choices": ["Moral hazard", "Adverse selection", "A Pigouvian tax", "A public good"],
      "answer": 1,
      "explanation": "Correct: (b). The risky driver is keenest to buy — before the deal. (a) would be the driver changing behavior after buying. (c) is a tax on an externality. (d) is a nonrival, nonexcludable good."
    },
    {
      "q": "A driver with full insurance starts driving faster. This is:",
      "choices": ["Adverse selection", "Moral hazard", "Signaling", "Screening"],
      "answer": 1,
      "explanation": "Correct: (b). Protection changes behavior after the deal. (a) is about who buys, before the deal. (c) is credibly revealing quality. (d) is gathering information before a deal."
    },
    {
      "q": "A $500 deductible on car insurance mainly fights:",
      "choices": ["Adverse selection", "Moral hazard", "Monopoly power", "Externalities"],
      "answer": 1,
      "explanation": "Correct: (b). The driver still pays the first $500, so they keep caring about dents. (a) is fought by screening, like checking driving records. (c) is fought by antitrust. (d) is fought by Pigouvian taxes."
    },
    {
      "q": "A firm spends $200,000 lobbying for a tariff that protects it from competition instead of improving its product. This is:",
      "choices": ["Rent seeking", "Price discrimination", "A positive externality", "Economies of scale"],
      "answer": 0,
      "explanation": "Correct: (a). Spending to win a government favor instead of creating value. (b) is charging different prices for the same good. (c) is a benefit to bystanders. (d) is falling average cost from size."
    },
    {
      "q": "Government failure means:",
      "choices": ["The government never intervenes", "Intervention makes the outcome worse than the market failure it was meant to fix", "Markets always work perfectly", "Taxes are always zero"],
      "answer": 1,
      "explanation": "Correct: (b). The fix costs more than the failure. (a) is non-intervention, not failure. (c) contradicts market failure. (d) Taxes are not the definition of failure."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Information, Monopoly Power & Government: Quick Reference</h3>\n<p><strong>Core idea:</strong> Markets also fail when one side knows more, when one firm has power — and governments fail too when they try to fix it.</p>\n<p><strong>Lemons:</strong> Good cars $10,000, lemons $4,000, half each → buyers pay at most ½ × $10,000 + ½ × $4,000 = $7,000 → good sellers exit → only lemons at $4,000. Fix: signaling (warranties) and screening (inspections).</p>\n<p><strong>Timing test:</strong> Adverse selection = before the deal (risky buyers keenest). Moral hazard = after the deal (protection changes behavior). Deductibles and copayments fight moral hazard.</p>\n<p><strong>Monopoly power:</strong> Module 6 numbers — 8 units at $12 vs. 16 at $4, $32 DWL. Answers: antitrust, regulation, deregulation.</p>\n<p><strong>Government failure:</strong> Rent seeking · regulatory capture · concentrated benefits, dispersed costs. Compare real markets with real governments — always ask what the fix costs.</p>\n<p><strong>Watch out:</strong> Adverse selection vs. moral hazard is a timing question. A fix that costs more than the failure is a second failure.</p>\n<p><strong>Self-check:</strong> A bank offers loans at one rate to everyone. Who is keenest to borrow? (Check: the riskiest borrowers — adverse selection.) After the loan, the borrower takes a bigger gamble with the bank's money. What is that? (Check: moral hazard.)</p>\n"
};
