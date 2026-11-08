// eco102 - Module 6: Monopoly: One Seller, Big Power
module.exports = {
  "number": 6,
  "slug": "monopoly",
  "title": "Monopoly: One Seller, Big Power",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what a monopoly is and name the barriers that keep competitors out.",
    "Explain why a monopolist's marginal revenue is below its price.",
    "Find the monopolist's profit-maximizing price and quantity with MR = MC.",
    "Calculate monopoly profit, consumer surplus, and deadweight loss from a worked example.",
    "Explain price discrimination and when a monopoly can be efficient (natural monopoly)."
  ],
  "sections": [
    {
      "heading": "One Seller and Barriers to Entry",
      "html": "<p>A <strong>monopoly</strong> is a market with one seller, a product with no close substitutes, and barriers that keep competitors out. The monopolist <em>is</em> the market, so it faces the downward-sloping market demand curve — unlike the competitive firm, which faces a flat line. To sell more, the monopolist must cut its price, and the cut applies to every unit sold, not just the extra one.</p>\n<p>Monopolies survive because of <strong>barriers to entry</strong>: a patent or copyright, control of a key resource (one company owning the only diamond mine), a government license or franchise, huge start-up costs, or network effects (everyone uses the platform everyone else uses). Without a barrier, monopoly profits attract entrants and the monopoly dies — which is why Module 5's long run always ends at zero economic profit, and this module's does not.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A monopoly is not just a big company. It is a company protected by a barrier. Size alone does not make a monopoly — the barrier does.</div>"
    },
    {
      "heading": "Marginal Revenue Below Price",
      "html": "<p>Work with one example: demand is P = 20 − Q, where Q is units per day. At Q = 8 the price is 20 − 8 = $12. Total revenue is 12 × 8 = $96. At Q = 9 the price must fall to 20 − 9 = $11, and total revenue is 11 × 9 = $99. The 9th unit added only $99 − $96 = <strong>$3</strong> to revenue — far less than its $11 price — because selling it meant cutting the price on the first 8 units too.</p>\n<p>That is the rule: for a monopolist, MR is below P. With a straight-line demand curve P = 20 − Q, marginal revenue is MR = 20 − 2Q — the same intercept, twice the slope. At Q = 8, MR = 20 − 16 = <strong>$4</strong>. Notice that MR falls twice as fast as price: the monopolist's incentive to expand is weaker than a competitive firm's, which is why monopolies produce less.</p>"
    },
    {
      "heading": "Profit Maximization: MR = MC",
      "html": "<p>The monopolist uses the same rule as every firm — produce where MR = MC — but the answer is different because MR is below price. Suppose marginal cost is constant at $4. Set MR = MC: 20 − 2Q = 4, so 2Q = 16 and Q = <strong>8 units</strong>. The price comes from the demand curve, not from MR: P = 20 − 8 = <strong>$12</strong>. Never read the price off the MR curve — the MR curve tells you the quantity; the demand curve tells you the price buyers will pay for it.</p>\n<p>Profit: average total cost at 8 units is $7, so total cost is 8 × $7 = $56, total revenue is 12 × 8 = $96, and profit is $96 − $56 = <strong>$40</strong>. Consumer surplus is the triangle under demand above the price: ½ × ($20 − $12) × 8 = <strong>$32</strong>. The monopolist keeps its profit in the long run because the barrier blocks entry.</p>\n<div class=\"formula\">Monopoly: MR = 20 − 2Q (from demand P = 20 − Q) &nbsp;|&nbsp; Produce where MR = MC &nbsp;|&nbsp; Price from the demand curve</div>"
    },
    {
      "heading": "Deadweight Loss and Price Discrimination",
      "html": "<p>Compare the monopoly with competition. A competitive market would produce where P = MC: 20 − Q = 4, so Q = <strong>16 units</strong> at P = $4. The monopoly produces only 8. The lost trades — units 9 through 16, which buyers value above their $4 cost but never get made — are <strong>deadweight loss</strong>: ½ × ($12 − $4) × (16 − 8) = ½ × $8 × 8 = <strong>$32</strong> of surplus destroyed. Check: competitive total surplus would be ½ × ($20 − $4) × 16 = $128; monopoly total surplus is consumer surplus $32 plus producer surplus (12 − 4) × 8 = $64, totaling $96; $128 − $96 = $32. The arithmetic agrees both ways.</p>\n<p>One way a monopolist can recover some of that loss is <strong>price discrimination</strong>: charging different prices to different buyers for the same good — student discounts, airline tickets that cost more the later you book, or a senior-citizen rate. It works only if the seller can sort buyers by willingness to pay and stop resale. Perfect price discrimination would erase the deadweight loss (every unit worth more than cost gets sold) but hand all the surplus to the seller.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Monopoly: one seller, no close substitutes, barriers to entry (patents, resources, licenses, scale, networks).</li>\n<li>MR is below price: with demand P = 20 − Q, MR = 20 − 2Q.</li>\n<li>Profit-max: MR = MC gives Q = 8 (20 − 2Q = 4), price from demand P = $12, profit $96 − $56 = $40.</li>\n<li>Deadweight loss: competitive output 16 vs. monopoly 8; DWL = ½ × $8 × 8 = $32.</li>\n<li>Price discrimination charges different prices for the same good and can raise output; a <strong>natural monopoly</strong> (one firm can serve the whole market cheapest, like a water network) may be regulated rather than broken up.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Reading the monopoly price off the MR = MC point. MR = MC gives the quantity. The price always comes from the demand curve at that quantity.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a monopolist can charge any price it likes. It cannot — it can pick any point <em>on the demand curve</em>. A $19 price would sell only 1 unit; a $1 price would sell 19 units at a loss. The demand curve still rules.</div>\n<p><strong>Ready-to-Work link:</strong> Antitrust law exists because of the $32 in this module: monopoly pricing destroys surplus that competition would create. Regulators ask the same question you just answered — how much output is lost, and is the barrier real?</p>"
    }
  ],
  "keyTerms": [
    { "term": "Monopoly", "def": "A market with one seller, a product with no close substitutes, and barriers to entry." },
    { "term": "Barrier to entry", "def": "An obstacle that stops new firms entering a market, such as a patent, a license, or huge start-up costs." },
    { "term": "Patent", "def": "A government-granted exclusive right to make and sell an invention for a limited time." },
    { "term": "Marginal revenue (monopoly)", "def": "The extra revenue from one more unit; below price, because selling more means cutting the price on all units." },
    { "term": "Deadweight loss", "def": "Surplus destroyed when output is below the efficient level; $32 in the worked example." },
    { "term": "Price discrimination", "def": "Charging different prices to different buyers for the same good." },
    { "term": "Natural monopoly", "def": "A market where one firm can serve everyone at lower average cost than two firms could." },
    { "term": "Economies of scale", "def": "Average cost falling as output rises; the reason a natural monopoly exists." },
    { "term": "Market power", "def": "A firm's ability to set its price above marginal cost." },
    { "term": "Markup", "def": "The gap between price and marginal cost; $12 − $4 = $8 in the example." },
    { "term": "Rent seeking", "def": "Spending resources to win or protect a monopoly privilege instead of producing value." },
    { "term": "Antitrust law", "def": "Laws that limit monopoly power and anti-competitive behavior." },
    { "term": "Allocative inefficiency", "def": "Producing where price exceeds marginal cost, so some valued units are never made." },
    { "term": "Consumer surplus (monopoly)", "def": "The triangle under demand above the monopoly price; $32 in the example." },
    { "term": "Producer surplus (monopoly)", "def": "Revenue minus variable cost; (P − MC) × Q = $64 in the example." },
    { "term": "Regulation", "def": "Government rules on a monopoly's price or output, common for natural monopolies." }
  ],
  "video": {
    "title": "Monopolies and Anti-Competitive Markets: Crash Course Economics #25",
    "embedUrl": "https://www.youtube.com/embed/Sb_-wfmJnHA",
    "note": "Crash Course explains what a monopoly is, why barriers to entry matter, and when a monopoly can actually be the efficient way to deliver a service. Watch it, then redo the P = 20 − Q monopoly arithmetic in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Demand is P = 20 − Q and marginal cost is constant at $4. (a) What is marginal revenue as a function of Q? (b) Find the profit-maximizing quantity and price.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: With straight-line demand P = 20 − Q, MR has the same intercept and twice the slope: MR = <strong>20 − 2Q</strong>. Step 2: Set MR = MC: 20 − 2Q = 4, so 2Q = 16 and Q = <strong>8 units</strong>. Step 3: Price comes from demand: P = 20 − 8 = <strong>$12</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> At Q = 8, price is $12 and ATC is $7. Calculate total revenue, total cost, and profit.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Total revenue = 12 × 8 = <strong>$96</strong>. Step 2: Total cost = 7 × 8 = <strong>$56</strong>. Step 3: Profit = $96 − $56 = <strong>$40</strong>. Step 4: Check: (P − ATC) × Q = ($12 − $7) × 8 = $40.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> What output and price would a competitive market produce with the same demand (P = 20 − Q) and MC = $4? How much more output is that than the monopoly's?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Competition produces where P = MC: 20 − Q = 4, so Q = <strong>16 units</strong>. Step 2: Price is <strong>$4</strong>. Step 3: That is 16 − 8 = <strong>8 more units</strong> than the monopoly's 8 — the output the monopoly withholds to keep its price up.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Calculate the deadweight loss of the monopoly, and check it against total surplus under competition and under monopoly.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: DWL = ½ × (monopoly price − MC) × (competitive Q − monopoly Q) = ½ × ($12 − $4) × (16 − 8) = ½ × $8 × 8 = <strong>$32</strong>. Step 2: Check — competitive total surplus = ½ × ($20 − $4) × 16 = $128. Step 3: Monopoly total surplus = CS ½ × ($20 − $12) × 8 = $32 plus PS ($12 − $4) × 8 = $64, totaling $96. Step 4: $128 − $96 = <strong>$32</strong>. Both ways agree.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A cinema charges $12 for an evening ticket and $7 for a Tuesday matinee ticket for the same film. Is this price discrimination? What two conditions must hold for it to work?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Yes — the same good (a seat for the same film) at different prices to different buyers. Step 2: Condition 1: the seller can sort buyers by willingness to pay (evening buyers value it more; Tuesday buyers are price-sensitive). Step 3: Condition 2: resale is blocked — you cannot buy a Tuesday ticket and use it on Saturday night.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A town's water network costs $1,000,000 to build and almost nothing to add one more household. Why is this a natural monopoly, and why might the town regulate it instead of breaking it up?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: It is a natural monopoly because average cost falls as more households share the one network — two competing pipe networks would double the fixed cost for the same water. Step 2: Breaking it up would raise costs, not lower them. Step 3: So the town regulates the price instead, letting the one firm operate but capping what it can charge, so households get the low cost without the monopoly price.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A monopoly is defined by:",
      "choices": ["Many sellers and an identical product", "One seller, no close substitutes, and barriers to entry", "Free entry and zero profit", "A flat demand curve for the firm"],
      "answer": 1,
      "explanation": "Correct: (b). One seller plus barriers is the definition. (a) is perfect competition. (c) is perfect competition's long run. (d) is the competitive firm's demand curve."
    },
    {
      "q": "Which is a barrier to entry?",
      "choices": ["A patent on a new drug", "A busy high street", "A popular brand name with many rivals", "Low start-up costs"],
      "answer": 0,
      "explanation": "Correct: (a). A patent legally blocks competitors. (b) is just a location. (c) Many rivals means no barrier. (d) Low start-up costs make entry easier, not harder."
    },
    {
      "q": "With demand P = 20 − Q, marginal revenue is:",
      "choices": ["20 − Q", "20 − 2Q", "20 + 2Q", "4"],
      "answer": 1,
      "explanation": "Correct: (b). For straight-line demand, MR has the same intercept and twice the slope. (a) is the demand curve itself. (c) has the wrong sign. (d) is marginal cost in the example, not MR."
    },
    {
      "q": "With MR = 20 − 2Q and MC = $4, the monopolist produces:",
      "choices": ["4 units", "8 units", "12 units", "16 units"],
      "answer": 1,
      "explanation": "Correct: (b). 20 − 2Q = 4 gives Q = 8. (a) is the MC value. (c) is the monopoly price. (d) is the competitive output."
    },
    {
      "q": "The monopolist's price at Q = 8 is:",
      "choices": ["$4 (from MR = MC)", "$8", "$12 (from the demand curve)", "$20"],
      "answer": 2,
      "explanation": "Correct: (c). Price comes from demand: P = 20 − 8 = $12. (a) is marginal cost, not price. (b) is the quantity. (d) is the demand intercept — the price at zero quantity."
    },
    {
      "q": "At Q = 8, P = $12, ATC = $7, monopoly profit is:",
      "choices": ["$32", "$40", "$64", "$96"],
      "answer": 1,
      "explanation": "Correct: (b). ($12 − $7) × 8 = $40. (a) is consumer surplus. (c) is producer surplus. (d) is total revenue."
    },
    {
      "q": "Deadweight loss in the worked example is:",
      "choices": ["$16", "$32", "$64", "$128"],
      "answer": 1,
      "explanation": "Correct: (b). ½ × ($12 − $4) × (16 − 8) = $32. (a) is half the right value. (c) is producer surplus. (d) is competitive total surplus."
    },
    {
      "q": "Price discrimination requires that the seller can:",
      "choices": ["Charge everyone the same price", "Sort buyers by willingness to pay and prevent resale", "Ignore the demand curve", "Sell below marginal cost forever"],
      "answer": 1,
      "explanation": "Correct: (b). Without sorting and no-resale, buyers would just buy the cheap version. (a) is the opposite of discrimination. (c) No seller can ignore demand. (d) Selling below cost loses money on every unit."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Monopoly: Quick Reference</h3>\n<p><strong>Core idea:</strong> One seller facing the whole demand curve produces where MR = MC, charges the demand-curve price, and keeps the profit because barriers block entry.</p>\n<p><strong>Worked anchor:</strong> Demand P = 20 − Q, MR = 20 − 2Q, MC = $4. MR = MC → Q = 8, P = $12. TR $96, TC $56, profit $40. Competitive output 16 at $4; DWL = ½ × $8 × 8 = $32.</p>\n<div class=\"formula\">MR = 20 − 2Q &nbsp;|&nbsp; DWL = ½ × (P − MC) × (Q<sub>comp</sub> − Q<sub>mon</sub>)</div>\n<p><strong>Check:</strong> Competitive total surplus ½ × $16 × 16 = $128; monopoly total surplus $32 + $64 = $96; difference $32 = DWL.</p>\n<p><strong>Price discrimination:</strong> Different prices for the same good; needs sorting by willingness to pay + no resale. Natural monopoly: one firm is cheapest — regulate, don't split.</p>\n<p><strong>Watch out:</strong> MR = MC gives quantity; the price comes from the demand curve. A monopolist cannot charge any price — only a point on the demand curve.</p>\n<p><strong>Self-check:</strong> Demand P = 30 − Q, MC = $6. Find Q, P, and DWL. (Check: MR = 30 − 2Q = 6 → Q = 12, P = $18; competitive Q = 24; DWL = ½ × $12 × 12 = $72.)</p>\n"
};
