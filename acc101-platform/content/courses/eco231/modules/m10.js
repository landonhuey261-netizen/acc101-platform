// eco231 - Module 10: Welfare Economics: Efficiency & Fairness
module.exports = {
  "number": 10,
  "slug": "welfare-economics",
  "title": "Welfare Economics: Efficiency & Fairness",
  "estTime": "3–4 hours",
  "objectives": [
    "Define Pareto efficiency and explain what it does and does not guarantee.",
    "Measure consumer and producer surplus and total surplus in a market.",
    "Use the Kaldor-Hicks test to judge whether a change is a potential improvement.",
    "Explain the First and Second Fundamental Theorems of Welfare Economics.",
    "Apply welfare analysis to a real policy: a tax, a subsidy, or a price control."
  ],
  "sections": [
    {
      "heading": "What Welfare Economics Asks",
      "html": "<p>Welfare economics asks the biggest question in the subject: when is an outcome <em>good</em>? It gives two different answers. <strong>Efficiency</strong> asks whether resources are being used so that nobody can be made better off without making someone else worse off. <strong>Fairness</strong> asks whether the distribution of the gains is just. A market can be perfectly efficient and still leave some people with almost nothing — efficiency and fairness are different questions, and this module keeps them separate before bringing them together.</p>\n<p>The central efficiency idea is <strong>Pareto efficiency</strong>, named for Vilfredo Pareto. An allocation is Pareto efficient if no one can be made better off without making someone else worse off. If such an improvement exists, the allocation is Pareto inefficient, and moving to the better one is a <strong>Pareto improvement</strong>. Note what Pareto efficiency does not say: it does not say the distribution is fair. A world in which one person owns everything and everyone else owns nothing is Pareto efficient — taking anything from the owner would make the owner worse off — but almost nobody would call it fair.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Pareto efficiency is about waste, not justice. It rules out allocations where everyone could gain; it says nothing about who should get what.</div>"
    },
    {
      "heading": "Surplus: Measuring the Gains from Trade",
      "html": "<p>The workhorse measure of welfare in a market is <strong>surplus</strong>. <strong>Consumer surplus</strong> is what buyers gain: the difference between what they were willing to pay and what they actually pay. <strong>Producer surplus</strong> is what sellers gain: the difference between the price they receive and the lowest price they would have accepted. <strong>Total surplus</strong> is the two added together — the total gain from all the trades in the market.</p>\n<p>Example: demand is a straight line from $20 (the highest willingness to pay) down to $10 (the price), and 100 units are sold. Consumer surplus is the triangle: ½ × ($20 − $10) × 100 = ½ × $10 × 100 = <strong>$500</strong>. If producer surplus in the same market is $300, total surplus is $500 + $300 = <strong>$800</strong>. In a competitive market without distortions, total surplus is as large as it can be — that is the sense in which competitive markets are efficient.</p>\n<div class=\"formula\">Total surplus = Consumer surplus + Producer surplus &nbsp;|&nbsp; Consumer surplus (triangle) = ½ × (top price − price) × quantity</div>\n<p>Anything that shrinks the quantity traded below the competitive level — a tax, a monopoly, a price floor — shrinks total surplus. The lost triangle is the deadweight loss you met in Module 5.</p>"
    },
    {
      "heading": "Kaldor-Hicks: When Winners Could Compensate Losers",
      "html": "<p>Pareto improvements are rare in real policy, because almost every change hurts someone. The <strong>Kaldor-Hicks test</strong> is the practical substitute: a change is a potential improvement if the winners gain enough that they <em>could</em> compensate the losers and still come out ahead — whether or not they actually do.</p>\n<p>Example: a new highway gives drivers gains of $1,000,000 and costs nearby homeowners $600,000 in noise and lost value. Net gain = $1,000,000 − $600,000 = <strong>+$400,000</strong>. The change passes Kaldor-Hicks: the drivers could pay the homeowners $600,000 and still keep $400,000. But if the compensation is never paid, the homeowners are genuinely worse off — and that is why Kaldor-Hicks is a test of <em>potential</em> improvement, not a verdict that the change is fair. Cost-benefit analysis, the subject of this course's lab, is Kaldor-Hicks in practice.</p>\n<p>That gap — between \"could compensate\" and \"does compensate\" — is where fairness enters. A policy can be efficient by Kaldor-Hicks and still be unjust if the losers are never paid. Welfare economics does not hide that gap; it names it.</p>"
    },
    {
      "heading": "The Two Fundamental Theorems",
      "html": "<p>The <strong>First Fundamental Theorem of Welfare Economics</strong> says: under perfect competition, with no externalities, no market power, and full information, the market equilibrium is Pareto efficient. It is the formal version of Adam Smith's invisible hand — self-interested buyers and sellers, each chasing their own gain, end up at an allocation nobody can improve upon without hurting someone. The theorem also tells you exactly when markets fail: break one of its conditions — add an externality, a monopoly, or asymmetric information — and the market is no longer guaranteed efficient. Modules 4, 7, and 8 are a catalog of those breaks.</p>\n<p>The <strong>Second Fundamental Theorem</strong> says: any Pareto-efficient allocation can be reached by a competitive market, provided the government first redistributes endowments (wealth) appropriately — with lump-sum transfers that do not distort behavior. In plain words: efficiency and fairness can be separated. Let the market handle efficiency, and use transfers to handle fairness. The catch is that real-world transfers are rarely lump-sum: taxes distort behavior (Module 5), so the separation is never clean in practice. But the theorem frames the debate: argue about the distribution, not about whether markets should be replaced.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Pareto efficient: nobody can be made better off without making someone else worse off.</li>\n<li>Total surplus = consumer surplus + producer surplus; competitive markets maximize it.</li>\n<li>Consumer surplus triangle: ½ × ($20 − $10) × 100 = $500; with producer surplus $300, total surplus is $800.</li>\n<li>Kaldor-Hicks: a change is a potential improvement if winners could compensate losers and still gain. Highway: $1,000,000 − $600,000 = +$400,000.</li>\n<li>First Theorem: competitive markets are Pareto efficient (given its conditions). Second Theorem: any efficient allocation can be reached with the right redistribution first.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a Pareto-efficient outcome is fair. A world where one person owns everything is Pareto efficient. Efficiency is about waste; fairness is a separate judgment.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a change passes Kaldor-Hicks so it must be done. Passing the test only means the gains exceed the losses — it says nothing about whether the losers are actually compensated.</div>\n<p><strong>Ready-to-Work link:</strong> Every cost-benefit analysis you will ever read — including this course's lab — is a Kaldor-Hicks test in disguise. Always ask the follow-up question the test does not answer: who are the losers, and do they actually get paid?</p>"
    }
  ],
  "keyTerms": [
    { "term": "Welfare economics", "def": "The study of how well an economy serves people's well-being, covering efficiency and fairness." },
    { "term": "Pareto efficiency", "def": "An allocation where nobody can be made better off without making someone else worse off." },
    { "term": "Pareto improvement", "def": "A change that makes at least one person better off and nobody worse off." },
    { "term": "Consumer surplus", "def": "The gain to buyers: what they were willing to pay minus what they actually pay." },
    { "term": "Producer surplus", "def": "The gain to sellers: the price received minus the lowest price they would have accepted." },
    { "term": "Total surplus", "def": "Consumer surplus plus producer surplus — the total gain from trade in a market." },
    { "term": "Kaldor-Hicks test", "def": "A change is a potential improvement if the winners could compensate the losers and still gain." },
    { "term": "Compensation principle", "def": "The idea that winners should, in principle, be able to compensate losers from their gains." },
    { "term": "First Fundamental Theorem", "def": "Under perfect competition with no market failures, the market equilibrium is Pareto efficient." },
    { "term": "Second Fundamental Theorem", "def": "Any Pareto-efficient allocation can be reached by a competitive market after suitable lump-sum redistribution." },
    { "term": "Lump-sum transfer", "def": "A transfer of money that does not depend on behavior, so it does not distort incentives." },
    { "term": "Deadweight loss", "def": "Total surplus destroyed by a distortion such as a tax, a monopoly, or a price control." },
    { "term": "Efficiency", "def": "Using resources so that no Pareto improvement is possible — no waste." },
    { "term": "Equity", "def": "Fairness in the distribution of income and well-being — a separate question from efficiency." },
    { "term": "Social welfare function", "def": "A formula that combines everyone's well-being into one measure of how well society is doing." },
    { "term": "Utilitarianism", "def": "The view that society should maximize the sum of everyone's well-being." },
    { "term": "Rawlsian justice", "def": "The view that society should maximize the well-being of its worst-off member." },
    { "term": "Invisible hand", "def": "Adam Smith's idea that self-interested behavior in competitive markets can produce an efficient outcome." }
  ],
  "video": {
    "title": "The Economics of Happiness: Crash Course Economics #35",
    "embedUrl": "https://www.youtube.com/embed/O-t8-Vq0HO0",
    "note": "Crash Course asks whether money buys happiness, how much is enough, and what well-being really depends on — the question welfare economics exists to answer. Watch it, then ask yourself what a social welfare function should count.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In a market, the highest willingness to pay is $20, the price is $10, and 100 units are sold. (a) What is consumer surplus? (b) If producer surplus is $300, what is total surplus?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Consumer surplus = ½ × ($20 − $10) × 100 = ½ × $10 × 100 = <strong>$500</strong>. Step 2: Total surplus = $500 + $300 = <strong>$800</strong>. Step 3: In a competitive market with no distortions, $800 is the largest total surplus this market can produce.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A new highway gives drivers gains of $1,000,000 and costs nearby homeowners $600,000. (a) What is the net gain? (b) Does the project pass the Kaldor-Hicks test? (c) Does passing the test mean the homeowners are better off?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Net gain = $1,000,000 − $600,000 = <strong>+$400,000</strong>. Step 2: Yes — the winners could pay the losers $600,000 and still keep $400,000, so it passes Kaldor-Hicks. Step 3: No — passing the test only means compensation is <em>possible</em>. If nobody pays the homeowners, they are $600,000 worse off and the project is efficient but unfair.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> In your own words, explain Pareto efficiency, and explain why a world in which one person owns everything can still be Pareto efficient.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: An allocation is Pareto efficient when nobody can be made better off without making someone else worse off. Step 2: If one person owns everything, giving anything to anyone else would make the owner worse off, so no Pareto improvement exists — the allocation is efficient by this definition. Step 3: That shows Pareto efficiency is about waste, not justice: it rules out allocations where everyone could gain, but it says nothing about whether the distribution is fair.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A tax cuts the quantity traded in a market from 100 units to 80 units. The price buyers pay is $14 and the price sellers receive is $10. (a) What is the tax per unit? (b) What is the deadweight loss? (c) What happens to total surplus?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Tax per unit = $14 − $10 = <strong>$4</strong>. Step 2: Deadweight loss = ½ × $4 × (100 − 80) = ½ × $4 × 20 = <strong>$40</strong>. Step 3: Total surplus falls by $40 of destroyed surplus plus the $4 × 80 = $320 transferred to the government — the $40 is lost to everyone, the $320 changes hands.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Explain the First Fundamental Theorem of Welfare Economics in plain words, and name two conditions whose failure makes a market inefficient.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The First Theorem says that under perfect competition, self-interested buyers and sellers end up at a Pareto-efficient allocation — the invisible hand works. Step 2: The conditions include no externalities, no market power, and full information. Step 3: Failures: a negative externality (pollution — Module 4) and a monopoly (one seller restricting output) both break the theorem and make the market inefficient.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A government can either (a) ban a polluting factory or (b) tax its pollution and give the revenue to the affected residents. Use the Second Fundamental Theorem to explain why (b) is usually the better economic answer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The Second Theorem says efficiency and fairness can be separated: let the market handle efficiency and use transfers for fairness. Step 2: Option (b) does that — the tax corrects the externality (efficiency) and the revenue transfer compensates the residents (fairness). Step 3: Option (a) mixes the two jobs and usually overshoots: it may close a factory whose output is worth more than the damage it causes, destroying surplus that a tax-and-transfer could have preserved.</p>"
    }
  ],
  "quiz": [
    {
      "q": "An allocation is Pareto efficient when:",
      "choices": ["Everyone has the same income", "Nobody can be made better off without making someone else worse off", "Total surplus is zero", "The government has redistributed everything"],
      "answer": 1,
      "explanation": "Correct: (b). That is the definition of Pareto efficiency. (a) Equality is a fairness claim, not efficiency. (c) Zero surplus is the opposite of efficient. (d) Redistribution is about fairness, not the definition of efficiency."
    },
    {
      "q": "Highest willingness to pay $20, price $10, quantity 100. Consumer surplus is:",
      "choices": ["$100", "$500", "$1,000", "$2,000"],
      "answer": 1,
      "explanation": "Correct: (b). ½ × ($20 − $10) × 100 = $500. (a) forgets the quantity. (c) forgets the one-half. (d) multiplies price by quantity."
    },
    {
      "q": "If consumer surplus is $500 and producer surplus is $300, total surplus is:",
      "choices": ["$200", "$500", "$800", "$1,500"],
      "answer": 2,
      "explanation": "Correct: (c). $500 + $300 = $800. (a) subtracts them. (b) is consumer surplus alone. (d) adds price and quantity figures that are not surpluses."
    },
    {
      "q": "A project gains $1,000,000 for drivers and costs homeowners $600,000. It passes the Kaldor-Hicks test because:",
      "choices": ["Nobody is harmed", "The winners could compensate the losers and still gain $400,000", "The homeowners are paid automatically", "The government approves it"],
      "answer": 1,
      "explanation": "Correct: (b). Net gain is +$400,000, so compensation is possible. (a) The homeowners are harmed by $600,000. (c) The test does not require actual payment — that is its weakness. (d) Government approval is not the test."
    },
    {
      "q": "A world where one person owns everything is Pareto efficient because:",
      "choices": ["It is fair", "Any transfer to someone else would make the owner worse off", "Everyone is equally well off", "Total surplus is maximized by equality"],
      "answer": 1,
      "explanation": "Correct: (b). No Pareto improvement exists, so the allocation is efficient by definition — however unfair. (a) It is plainly unfair; efficiency is not fairness. (c) Everyone else has nothing. (d) Equality is not what maximizes surplus here."
    },
    {
      "q": "The First Fundamental Theorem says a competitive market is Pareto efficient when there is:",
      "choices": ["A monopoly and externalities", "No externalities, no market power, and full information", "Government price controls", "Only one buyer and one seller"],
      "answer": 1,
      "explanation": "Correct: (b). Those are the conditions the theorem needs. (a) breaks the theorem — monopoly and externalities cause inefficiency. (c) Price controls create deadweight loss. (d) One buyer and one seller is bilateral monopoly, not perfect competition."
    },
    {
      "q": "A tax of $4 cuts quantity from 100 to 80. The deadweight loss is:",
      "choices": ["$20", "$40", "$320", "$360"],
      "answer": 1,
      "explanation": "Correct: (b). ½ × $4 × 20 = $40. (a) forgets to multiply by the tax. (c) is the tax revenue, $4 × 80. (d) is revenue plus deadweight loss."
    },
    {
      "q": "The Second Fundamental Theorem says efficiency and fairness can be separated by:",
      "choices": ["Banning markets", "Using lump-sum transfers to fix the distribution and letting markets handle efficiency", "Setting all prices by law", "Taxing only the poor"],
      "answer": 1,
      "explanation": "Correct: (b). Redistribute endowments first, then let the competitive market allocate efficiently. (a) Banning markets destroys efficiency. (c) Price controls create deadweight loss. (d) Taxing the poor is neither efficient nor fair."
    }
  ],
  "studyGuide": "\n<h3>Module 10 — Welfare Economics: Quick Reference</h3>\n<p><strong>Core idea:</strong> Efficiency is about waste; fairness is about who gets what. Keep them separate, then decide both.</p>\n<div class=\"formula\">Total surplus = Consumer surplus + Producer surplus &nbsp;|&nbsp; Consumer surplus = ½ × (top price − price) × quantity</div>\n<p><strong>Worked anchors:</strong> $20 top price, $10 price, 100 units → consumer surplus $500; + producer surplus $300 = total surplus $800. Highway: $1,000,000 − $600,000 = +$400,000 → passes Kaldor-Hicks. Tax $4, quantity 100 → 80 → DWL ½ × $4 × 20 = $40.</p>\n<p><strong>Pareto:</strong> Efficient = nobody can gain without someone losing. One person owning everything is Pareto efficient — and unfair. That is the point.</p>\n<p><strong>Theorems:</strong> First — competitive markets are Pareto efficient (given no externalities, no market power, full information). Second — any efficient allocation is reachable with the right lump-sum redistribution first.</p>\n<p><strong>Watch out:</strong> Kaldor-Hicks only says compensation is possible, not that it happens. Always ask who the losers are and whether they get paid.</p>\n<p><strong>Self-check:</strong> A subsidy raises quantity from 100 to 120 at $2 a unit. What is its deadweight loss? (Answer: ½ × $2 × 20 = $20.)</p>\n"
};
