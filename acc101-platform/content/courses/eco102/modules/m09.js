// eco102 - Module 9: Market Failure I: Externalities & Public Goods
module.exports = {
  "number": 9,
  "slug": "market-failure-externalities-public-goods",
  "title": "Market Failure I: Externalities & Public Goods",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what market failure is and when a market produces too much or too little.",
    "Use a worked example to find the private and social outcomes of a negative externality.",
    "Explain Pigouvian taxes, subsidies, the Coase theorem, and tradable permits.",
    "Explain positive externalities and why the market underprovides them.",
    "Classify goods by rivalry and excludability and explain the free-rider problem."
  ],
  "sections": [
    {
      "heading": "What Market Failure Means",
      "html": "<p>Modules 1–8 showed markets doing a good job. This module shows where they fail. <strong>Market failure</strong> is when a market does not produce the efficient outcome — it makes too much of something harmful, or too little of something helpful. The cause is usually a cost or benefit that falls on bystanders who are not part of the deal, so the price does not tell the whole truth.</p>\n<p>An <strong>externality</strong> is a cost or benefit of a transaction that falls on a third party. Pollution from a factory is a negative externality: the factory and its customers decide how much to produce, and the neighbors breathe the smoke without being paid. A flu vaccination is a positive externality: the vaccinated person is protected, and so are the people they would otherwise have infected. The market counts only the buyer and seller — the bystanders are invisible to it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> If a cost falls on bystanders, the market produces too much. If a benefit falls on bystanders, the market produces too little. Either way, the price is wrong because it leaves someone out.</div>"
    },
    {
      "heading": "Negative Externalities: Too Much of a Bad Thing",
      "html": "<p>Work with a widget factory. Buyers' marginal private benefit is MB: P = 50 − Q. The factory's marginal private cost is MPC: P = 10 + Q. The market ignores the smoke, so it produces where MB = MPC: 50 − Q = 10 + Q, so 40 = 2Q, Q = <strong>20 widgets</strong>, at P = 50 − 20 = <strong>$30</strong>.</p>\n<p>But each widget also imposes $4 of health costs on neighbors, so the marginal social cost is MSC = MPC + 4: P = 14 + Q. The efficient outcome is where MB = MSC: 50 − Q = 14 + Q, so 36 = 2Q, Q = <strong>18 widgets</strong>, at P = 50 − 18 = <strong>$32</strong>. The market makes 2 widgets too many. The deadweight loss is the triangle of the excess units: ½ × (20 − 18) × $4 = <strong>$4</strong>. Small numbers, real logic: every unit between 18 and 20 costs society $4 more than it is worth.</p>"
    },
    {
      "heading": "Fixing Negative Externalities",
      "html": "<p>The classic fix is a <strong>Pigouvian tax</strong>: tax the polluter by the amount of the external cost — $4 a widget here. The factory's cost becomes MPC + tax = MSC, so it produces the efficient 18 widgets on its own. Tax revenue is $4 × 18 = <strong>$72</strong>. Other fixes work the same way by making the price tell the truth: <strong>tradable permits</strong> cap total pollution and let firms buy and sell the right to pollute, so the cheapest cleaner cleans first; <strong>command and control</strong> sets a legal limit; and the <strong>Coase theorem</strong> says that if property rights are clear and bargaining is cheap, the factory and the neighbors can negotiate to the efficient outcome themselves, whoever starts out with the right.</p>\n<p>Positive externalities get the mirror image: a <strong>Pigouvian subsidy</strong>. Take flu shots: private benefit MB is P = 40 − Q, social benefit MSB is P = 50 − Q (each shot gives $10 of protection to others), and supply is P = 10 + Q. The market gives 40 − Q = 10 + Q, Q = <strong>15 shots</strong>. The efficient outcome is 50 − Q = 10 + Q, Q = <strong>20 shots</strong>. A $10 subsidy per shot gets the market to 20, at a cost of $10 × 20 = $200 — money well spent if the avoided illness is worth more.</p>\n<div class=\"formula\">Negative externality: MSC = MPC + external cost &nbsp;|&nbsp; Pigouvian tax = external cost &nbsp;|&nbsp; Positive externality: MSB = MPB + external benefit</div>"
    },
    {
      "heading": "Public Goods and the Free-Rider Problem",
      "html": "<p>Some goods break the market in a different way. A good is <strong>rival</strong> if one person's use leaves less for others (a sandwich), and <strong>excludable</strong> if non-payers can be kept out (a cinema seat). A <strong>public good</strong> is neither: national defense protects everyone at once, and nobody can be excluded from it. A lighthouse is the textbook example — one ship using the light does not dim it for another, and the keeper cannot switch it off for non-payers.</p>\n<p>Public goods create the <strong>free-rider problem</strong>: why pay for the lighthouse if you get the light anyway? Everyone waits for someone else to pay, so the market provides too little — or nothing. That is why public goods are usually paid for by taxes and provided by government. The same logic, in reverse, explains the <strong>tragedy of the commons</strong>: a shared fishing ground or a public pasture is rival but not excludable, so everyone takes as much as they can and the resource is ruined. The fixes are the same family: assign property rights, charge for use, or regulate the catch.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Market failure: the market makes too much when costs fall on bystanders, too little when benefits do.</li>\n<li>Widget example: MB P = 50 − Q, MPC P = 10 + Q → market Q = 20, P = $30. MSC P = 14 + Q → efficient Q = 18, P = $32. DWL = ½ × 2 × $4 = $4.</li>\n<li>Pigouvian tax of $4 a widget restores efficiency; tax revenue $4 × 18 = $72. Tradable permits, command and control, and Coasean bargaining are the other tools.</li>\n<li>Flu shots: MB P = 40 − Q → market Q = 15; MSB P = 50 − Q → efficient Q = 20; a $10 subsidy costs $200.</li>\n<li>Public goods are nonrival and nonexcludable → free-rider problem → underprovision, usually fixed by taxes and government provision.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Calling every bad outcome a market failure. A high price because a good is scarce is not market failure — it is the market working. Market failure means the market produces the <em>wrong quantity</em> because someone's costs or benefits are left out of the price.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a Pigouvian tax \"punishes\" the polluter. It does not punish — it prices. The tax makes the factory face the true cost of its smoke, so it chooses the efficient output itself.</div>\n<p><strong>Ready-to-Work link:</strong> Carbon taxes, congestion charges, and vaccine subsidies are all Pigouvian policy in the wild. If you can name the external cost or benefit and its size, you can say what the tax or subsidy should be.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Market failure", "def": "When a market does not produce the efficient outcome." },
    { "term": "Externality", "def": "A cost or benefit of a transaction that falls on a third party." },
    { "term": "Negative externality", "def": "A cost imposed on bystanders, such as pollution." },
    { "term": "Positive externality", "def": "A benefit enjoyed by bystanders, such as vaccination or education." },
    { "term": "Marginal private cost (MPC)", "def": "The cost the producer pays." },
    { "term": "Marginal social cost (MSC)", "def": "Marginal private cost plus the external cost." },
    { "term": "Marginal private benefit (MPB)", "def": "The benefit the buyer receives." },
    { "term": "Marginal social benefit (MSB)", "def": "Marginal private benefit plus the external benefit." },
    { "term": "Pigouvian tax", "def": "A tax equal to the external cost, making the polluter face the true cost." },
    { "term": "Pigouvian subsidy", "def": "A payment equal to the external benefit, encouraging more of a helpful activity." },
    { "term": "Tradable permits", "def": "Pollution allowances that firms can buy and sell, capping total pollution at the cheapest cost." },
    { "term": "Coase theorem", "def": "With clear property rights and cheap bargaining, private negotiation reaches the efficient outcome." },
    { "term": "Public good", "def": "A good that is nonrival and nonexcludable, such as national defense." },
    { "term": "Rival good", "def": "A good where one person's use leaves less for others." },
    { "term": "Excludable good", "def": "A good where non-payers can be kept out." },
    { "term": "Free-rider problem", "def": "People enjoy a public good without paying for it, so the market underprovides it." },
    { "term": "Tragedy of the commons", "def": "A shared resource is overused because it is rival but no one can be excluded from it." },
    { "term": "Command and control", "def": "Direct regulation, such as a legal limit on pollution." }
  ],
  "video": {
    "title": "What Are Negative Externalities?",
    "embedUrl": "https://www.youtube.com/embed/Bi2yqqxPAkk",
    "note": "Marginal Revolution University explains negative externalities with the story of antibiotics and drug-resistant superbugs — a cost that falls on bystanders. Watch it, then redo the widget factory's $4 deadweight loss in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Widget buyers' benefit is P = 50 − Q and the factory's private cost is P = 10 + Q. Find the market output and price (ignore pollution for now).</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Set MB = MPC: 50 − Q = 10 + Q. Step 2: Rearrange: 40 = 2Q, so Q = <strong>20 widgets</strong>. Step 3: Price: P = 50 − 20 = <strong>$30</strong>. Step 4: This is the market outcome — it ignores the neighbors.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Each widget imposes $4 of health costs on neighbors, so MSC is P = 14 + Q. Find the socially efficient output and price, and the deadweight loss of the market outcome.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Set MB = MSC: 50 − Q = 14 + Q, so 36 = 2Q and Q = <strong>18 widgets</strong>. Step 2: Price: P = 50 − 18 = <strong>$32</strong>. Step 3: The market makes 2 too many. Step 4: DWL = ½ × (20 − 18) × $4 = ½ × 2 × 4 = <strong>$4</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The government places a Pigouvian tax on widgets. How big should it be, what output results, and how much revenue does it raise?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The tax should equal the external cost: <strong>$4 a widget</strong>. Step 2: The factory now faces MPC + tax = P = 14 + Q, so it chooses the efficient output of <strong>18 widgets</strong>. Step 3: Revenue = $4 × 18 = <strong>$72</strong>. Step 4: The tax does not punish the factory — it makes the price tell the truth.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Flu shots: private benefit MB is P = 40 − Q, social benefit MSB is P = 50 − Q, supply is P = 10 + Q. Find the market output and the efficient output.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Market: MB = supply, 40 − Q = 10 + Q, so 30 = 2Q and Q = <strong>15 shots</strong>. Step 2: Efficient: MSB = supply, 50 − Q = 10 + Q, so 40 = 2Q and Q = <strong>20 shots</strong>. Step 3: The market underprovides by 5 shots, because buyers ignore the $10 benefit each shot gives others.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> In Problem 4, what subsidy per shot would reach the efficient output, and what would it cost the government?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The subsidy should equal the external benefit: <strong>$10 a shot</strong>. Step 2: At 20 shots, cost = $10 × 20 = <strong>$200</strong>. Step 3: The subsidy is worth paying if the avoided illness is worth more than $200 — the external benefit is $10 on each of the 20 shots, which is exactly $200 of benefit created.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A lighthouse, a sandwich, a cinema ticket, and a public fishing ground: classify each as rival or nonrival, excludable or nonexcludable, and say which one is a public good and which one risks a tragedy of the commons.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Lighthouse — <strong>nonrival, nonexcludable: a public good</strong> (free-rider problem). Step 2: Sandwich — rival and excludable: a private good. Step 3: Cinema ticket — nonrival (one more viewer costs little) but excludable: a club good. Step 4: Public fishing ground — <strong>rival but nonexcludable: a common resource</strong>, at risk of the tragedy of the commons.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Market failure means:",
      "choices": ["Prices are high", "The market does not produce the efficient outcome", "A firm goes bankrupt", "The government sets the price"],
      "answer": 1,
      "explanation": "Correct: (b). Market failure is about the wrong quantity, not high prices. (a) High prices can be the market working. (c) Bankruptcy is normal competition. (d) Government pricing is a policy choice, not a market failure."
    },
    {
      "q": "Pollution from a factory is a:",
      "choices": ["Positive externality", "Negative externality", "Public good", "Private cost only"],
      "answer": 1,
      "explanation": "Correct: (b). It imposes a cost on bystanders. (a) would be a benefit to bystanders. (c) Pollution is not a good anyone wants. (d) The factory does not pay the neighbors' health costs, so they are not private."
    },
    {
      "q": "In the widget example (MB P = 50 − Q, MPC P = 10 + Q), the market output is:",
      "choices": ["18 widgets", "20 widgets", "30 widgets", "32 widgets"],
      "answer": 1,
      "explanation": "Correct: (b). 50 − Q = 10 + Q gives Q = 20. (a) is the efficient output. (c) is the market price. (d) is the efficient price."
    },
    {
      "q": "With MSC P = 14 + Q, the efficient widget output is 18 and the deadweight loss is:",
      "choices": ["$2", "$4", "$8", "$72"],
      "answer": 1,
      "explanation": "Correct: (b). DWL = ½ × (20 − 18) × $4 = $4. (a) is half the triangle. (c) forgets the ½. (d) is the Pigouvian tax revenue."
    },
    {
      "q": "The Pigouvian tax on widgets should be:",
      "choices": ["$30 a widget", "$4 a widget", "$72 a widget", "$0 — taxes never fix externalities"],
      "answer": 1,
      "explanation": "Correct: (b). The tax equals the external cost of $4. (a) is the market price. (c) is total tax revenue. (d) is wrong — a tax equal to the external cost restores efficiency."
    },
    {
      "q": "Flu shots have MB P = 40 − Q and MSB P = 50 − Q, with supply P = 10 + Q. The market underprovides by:",
      "choices": ["0 shots", "5 shots", "10 shots", "20 shots"],
      "answer": 1,
      "explanation": "Correct: (b). Market output 15, efficient output 20 — a gap of 5. (a) would mean no externality. (c) is the external benefit in dollars. (d) is the efficient output."
    },
    {
      "q": "A public good is:",
      "choices": ["Rival and excludable", "Nonrival and nonexcludable", "Rival but nonexcludable", "Provided only by private firms"],
      "answer": 1,
      "explanation": "Correct: (b). Nonrival and nonexcludable is the definition — national defense, lighthouses. (a) is a private good. (c) is a common resource. (d) Public goods are usually tax-funded because the market underprovides them."
    },
    {
      "q": "The free-rider problem means:",
      "choices": ["Everyone pays too much for public goods", "People enjoy a public good without paying, so the market provides too little", "Public goods are always overprovided", "Riders on public transport pay no fare"],
      "answer": 1,
      "explanation": "Correct: (b). If you get the benefit anyway, why pay? So too little is provided. (a) reverses it. (c) Underprovision is the problem. (d) Fare evasion is a different issue."
    }
  ],
  "studyGuide": "\n<h3>Module 9 — Externalities & Public Goods: Quick Reference</h3>\n<p><strong>Core idea:</strong> When costs or benefits fall on bystanders, the price lies — the market makes too much of the harmful thing and too little of the helpful one.</p>\n<p><strong>Worked anchors:</strong> Widgets: MB P = 50 − Q, MPC P = 10 + Q → market Q = 20, P = $30. MSC P = 14 + Q → efficient Q = 18, P = $32. DWL = ½ × 2 × $4 = $4. Pigouvian tax $4, revenue $4 × 18 = $72.</p>\n<p><strong>Positive side:</strong> Flu shots: MB P = 40 − Q → market Q = 15; MSB P = 50 − Q → efficient Q = 20; subsidy $10 a shot, cost $200.</p>\n<div class=\"formula\">MSC = MPC + external cost &nbsp;|&nbsp; MSB = MPB + external benefit &nbsp;|&nbsp; DWL = ½ × excess units × external cost</div>\n<p><strong>Tools:</strong> Pigouvian tax/subsidy · tradable permits · command and control · Coasean bargaining (clear rights + cheap negotiation).</p>\n<p><strong>Goods:</strong> Public good = nonrival + nonexcludable (free-rider problem). Common resource = rival + nonexcludable (tragedy of the commons).</p>\n<p><strong>Watch out:</strong> A high price is not market failure. A Pigouvian tax prices the harm — it does not punish the firm.</p>\n<p><strong>Self-check:</strong> A factory's external cost is $6 a unit and it makes 50 units at the market outcome, 40 at the efficient outcome. What is the DWL? (Check: ½ × (50 − 40) × $6 = $30.)</p>\n"
};
