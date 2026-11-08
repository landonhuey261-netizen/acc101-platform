// eco201 - Module 6: Monopoly & Price Discrimination
module.exports = {
  "number": 6,
  "slug": "monopoly-price-discrimination",
  "title": "Monopoly & Price Discrimination",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why a monopolist's marginal revenue is below price and derive MR from demand.",
    "Find a monopolist's profit-maximizing price and quantity with MR = MC and compute its profit.",
    "Compute the deadweight loss of monopoly against the competitive outcome.",
    "Use the Lerner index to connect the markup to the elasticity of demand.",
    "Compare first-, second-, and third-degree price discrimination with worked numbers."
  ],
  "sections": [
    {
      "heading": "Why Marginal Revenue Is Below Price",
      "html": "<p>A <strong>monopoly</strong> is a market with a single seller, protected by <strong>barriers to entry</strong> such as a patent, control of a key resource, network effects, or a government license. Unlike the competitive firm, the monopolist faces the whole market demand curve, which slopes down: to sell more, it must cut the price — and it must cut the price on every unit it sells, not just the extra one.</p>\n<p>Our worked monopolist faces demand P = 100 − 2Q. Total revenue is TR = P × Q = 100Q − 2Q², so marginal revenue is MR = 100 − 4Q. At Q = 20, MR = 100 − 80 = $20, while price is 100 − 40 = $60. MR is below price because selling the 20th unit at $60 forces the price down on the first 19 units too. The demand curve has twice the slope of the MR curve here because demand is a straight line — a handy pattern: for P = a − bQ, MR = a − 2bQ.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A monopolist cannot just pick a high price and a high quantity. The demand curve forces a trade-off: more quantity means a lower price on everything sold.</div>"
    },
    {
      "heading": "Profit Maximization: MR = MC",
      "html": "<p>The monopolist also maximizes profit where MR = MC — but it then reads its price off the demand curve, not off MC. Our monopolist's marginal cost is constant at MC = $20 (total cost TC = 20Q). Step 1: set MR = MC: 100 − 4Q = 20, so 4Q = 80 and Q = 20. Step 2: price comes from demand: P = 100 − 2 × 20 = $60. Step 3: revenue is 20 × $60 = $1,200 and cost is 20 × $20 = $400, so profit is $800. Step 4: check the per-unit figures: profit per unit is $60 − $20 = $40, and 20 × $40 = $800.</p>\n<p>Compare that with competition, where price equals marginal cost: 100 − 2Q = 20 gives Q = 40 and P = $20. The monopolist charges three times the competitive price and sells half the quantity. Consumer surplus under monopoly is 0.5 × (100 − 60) × 20 = $400; under competition it is 0.5 × (100 − 20) × 40 = $1,600. The monopolist's $800 profit comes out of the $1,200 of surplus buyers lose — and $400 of surplus vanishes entirely. That $400 is the <strong>deadweight loss</strong>: 0.5 × (60 − 20) × (40 − 20) = $400.</p>\n<div class=\"formula\">Monopoly: MR = MC, then P from demand &nbsp;|&nbsp; DWL = 0.5 × (P<sub>m</sub> − MC) × (Q<sub>c</sub> − Q<sub>m</sub>)</div>"
    },
    {
      "heading": "The Lerner Index and the Markup Rule",
      "html": "<p>The <strong>Lerner index</strong> measures market power as the markup over marginal cost: L = (P − MC) ÷ P. For our monopolist, L = (60 − 20) ÷ 60 = 40 ÷ 60 ≈ 0.67. The Lerner index equals the inverse of the (absolute) elasticity of demand at the profit-maximizing point: L = 1 ÷ |E|. Check it: at Q = 20, dQ/dP = −0.5, so E = −0.5 × (60 ÷ 20) = −1.5, and 1 ÷ 1.5 ≈ 0.67 — exactly the Lerner index. A monopolist never produces where demand is inelastic (|E| &lt; 1), because there MR is negative and cutting output would raise revenue while lowering cost.</p>\n<p>The same rule explains why a monopolist with a more elastic demand curve charges a smaller markup. If |E| = 5, the Lerner index is 0.2 and price is only 25% above marginal cost; if |E| = 1.2, the index is 0.83 and price is six times marginal cost. Market power is not about size — it is about how easily buyers can walk away.</p>\n<div class=\"formula\">Lerner index L = (P − MC) ÷ P = 1 ÷ |E|</div>"
    },
    {
      "heading": "Price Discrimination: Charging Different Prices for the Same Good",
      "html": "<p><strong>Price discrimination</strong> means selling the same good at different prices to different buyers. It needs three conditions: market power, the ability to separate buyers into groups, and no resale between groups. There are three degrees. <strong>First-degree</strong> (perfect) discrimination charges each buyer their maximum willingness to pay: our monopolist would sell 40 units, capture all $1,600 of surplus as profit, and — surprisingly — produce the efficient quantity, so deadweight loss is zero. <strong>Second-degree</strong> discrimination charges different prices for different quantities, like bulk discounts or two-part tariffs. <strong>Third-degree</strong> discrimination charges different prices to different groups, like student and senior discounts.</p>\n<p>Work third-degree with two markets and MC = $20. Market A demand is P<sub>A</sub> = 80 − Q<sub>A</sub>; market B demand is P<sub>B</sub> = 60 − Q<sub>B</sub>. Step 1: set MR = MC in each market: 80 − 2Q<sub>A</sub> = 20 gives Q<sub>A</sub> = 30 and P<sub>A</sub> = $50; 60 − 2Q<sub>B</sub> = 20 gives Q<sub>B</sub> = 20 and P<sub>B</sub> = $40. Step 2: profit is (50 − 20) × 30 + (40 − 20) × 20 = $900 + $400 = $1,300. Step 3: compare with one uniform price. Combined demand is Q = 140 − 2P, so P = 70 − Q/2 and MR = 70 − Q; setting MR = 20 gives Q = 50 and P = $45, for profit (45 − 20) × 50 = $1,250. Discrimination earns $50 more by charging the less elastic market (A) the higher price. The rule: the group with the less elastic demand pays more.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Price discrimination is not about fairness — it is about elasticity. The firm charges more where buyers are less able to walk away, and it earns more than with one price for everyone.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Monopoly demand slopes down, so MR &lt; P. For P = 100 − 2Q, MR = 100 − 4Q.</li>\n<li>Profit max: MR = MC gives Q = 20, P = $60 (from demand), profit $800; competition would give Q = 40, P = $20.</li>\n<li>Deadweight loss is 0.5 × (60 − 20) × (40 − 20) = $400; consumer surplus falls from $1,600 to $400.</li>\n<li>Lerner index = (P − MC) ÷ P = 1 ÷ |E| = 0.67 here, since E = −1.5 at the optimum.</li>\n<li>Third-degree discrimination: market A (P = 80 − Q) gets $50 and 30 units; market B (P = 60 − Q) gets $40 and 20 units; profit $1,300 beats the uniform-price profit of $1,250.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Setting P = MC for a monopolist. P = MC is the competitive rule. A monopolist sets MR = MC for quantity, then reads price off the demand curve — which is always above MC.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Thinking price discrimination always reduces welfare. First-degree discrimination produces the efficient quantity (no deadweight loss) — it transfers surplus to the firm instead of destroying it. The welfare cost is the transfer, not a lost quantity.</div>\n<p><strong>Ready-to-Work link:</strong> Monopoly pricing is the mirror of Module 2's elasticity work: the less elastic the demand, the bigger the markup. Module 7 adds a rival to the picture — and with a rival, strategy, not just demand, decides the price.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Monopoly", "def": "A market with a single seller, protected by barriers to entry." },
    { "term": "Barrier to entry", "def": "Anything that keeps new firms out of a market: patents, control of a resource, network effects, licenses." },
    { "term": "Marginal revenue (MR)", "def": "The extra revenue from selling one more unit; below price for a monopolist because selling more means cutting the price on all units." },
    { "term": "Monopoly profit-maximizing rule", "def": "Set MR = MC for quantity, then read price off the demand curve." },
    { "term": "Deadweight loss (of monopoly)", "def": "Surplus lost because the monopolist produces less than the competitive quantity: 0.5 × (Pm − MC) × (Qc − Qm)." },
    { "term": "Lerner index", "def": "A measure of market power: (P − MC) / P, equal to 1 / |E| at the profit-maximizing point." },
    { "term": "Markup rule", "def": "The monopolist's price satisfies (P − MC) / P = 1 / |E|; less elastic demand means a bigger markup." },
    { "term": "Price discrimination", "def": "Selling the same good at different prices to different buyers; needs market power, separable groups, and no resale." },
    { "term": "First-degree price discrimination", "def": "Charging each buyer their maximum willingness to pay; captures all surplus, with no deadweight loss." },
    { "term": "Second-degree price discrimination", "def": "Charging different prices for different quantities, such as bulk discounts." },
    { "term": "Third-degree price discrimination", "def": "Charging different prices to different groups, such as students vs. adults; the less elastic group pays more." },
    { "term": "Natural monopoly", "def": "A market where one firm can produce at lower average cost than two or more firms, usually from large fixed costs." },
    { "term": "Rent seeking", "def": "Spending resources to gain or protect monopoly power instead of producing value." }
  ],
  "video": {
    "title": "Introduction to Price Discrimination",
    "embedUrl": "https://www.youtube.com/embed/SZCV-Gm0Tf4",
    "note": "Marginal Revolution University introduces price discrimination — the degrees, the conditions, and why firms charge different groups different prices. Watch it, then rework the two-market example ($50 in market A, $40 in market B) yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A monopolist faces demand P = 100 − 2Q and has MC = $20. (a) What is MR as a function of Q? (b) Find the profit-maximizing quantity and price. (c) What is profit?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: TR = 100Q − 2Q², so MR = 100 − 4Q. Step 2: Set MR = MC: 100 − 4Q = 20, so Q = 20. Step 3: Price from demand: P = 100 − 2 × 20 = $60. Step 4: Profit = (60 − 20) × 20 = $800 (revenue $1,200 minus cost $400).</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> For the same monopolist, (a) what are quantity and price under perfect competition? (b) What is consumer surplus under monopoly and under competition? (c) What is the deadweight loss?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Competition sets P = MC: 100 − 2Q = 20, so Q = 40 and P = $20. Step 2: CS under monopoly = 0.5 × (100 − 60) × 20 = $400. Step 3: CS under competition = 0.5 × (100 − 20) × 40 = $1,600. Step 4: DWL = 0.5 × (60 − 20) × (40 − 20) = 0.5 × 40 × 20 = $400.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> At the monopoly optimum (P = $60, Q = 20), compute the elasticity of demand and the Lerner index, and show they agree.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: dQ/dP = −0.5 (from Q = 50 − P/2). Step 2: E = −0.5 × (60 ÷ 20) = −1.5. Step 3: Lerner index = (60 − 20) ÷ 60 = 40 ÷ 60 ≈ 0.67. Step 4: 1 ÷ |E| = 1 ÷ 1.5 ≈ 0.67 — the two agree, as the markup rule requires.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A monopolist sells in two markets with MC = $20. Market A: P = 80 − Q. Market B: P = 60 − Q. Find the price and quantity in each market and total profit.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Market A: MR = 80 − 2Q = 20 gives Q = 30, P = 80 − 30 = $50, profit (50 − 20) × 30 = $900. Step 2: Market B: MR = 60 − 2Q = 20 gives Q = 20, P = 60 − 20 = $40, profit (40 − 20) × 20 = $400. Step 3: Total profit = $900 + $400 = $1,300. Market A pays more because its demand is less elastic.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> For the two-market monopolist in Problem 4, what would profit be with a single uniform price for both markets? Which approach earns more, and by how much?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Combined demand: Q = (80 − P) + (60 − P) = 140 − 2P, so P = 70 − Q/2 and MR = 70 − Q. Step 2: MR = MC gives 70 − Q = 20, so Q = 50 and P = $45. Step 3: Profit = (45 − 20) × 50 = $1,250. Step 4: Discrimination earns $1,300 − $1,250 = $50 more.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A monopolist practices first-degree price discrimination on demand P = 100 − 2Q with MC = $20. (a) What quantity does it sell? (b) What is its profit? (c) What is the deadweight loss?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: With perfect discrimination the firm sells every unit worth more than MC: 100 − 2Q = 20 gives Q = 40. Step 2: Profit is the whole surplus triangle: 0.5 × (100 − 20) × 40 = $1,600. Step 3: Deadweight loss is zero — the efficient quantity is sold. Step 4: Consumers get no surplus at all; the $1,600 that competition would give them goes to the firm instead.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A monopolist's marginal revenue is below price because:",
      "choices": [
        "It pays higher wages than competitive firms",
        "To sell more it must cut the price on all units, not just the extra one",
        "Its costs are higher",
        "The government taxes its revenue"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The price cut applies to every unit sold, so the extra revenue from one more unit is less than its price. (a) Wages do not set MR. (c) Costs affect MC, not the gap between MR and price. (d) No tax is involved in the MR calculation."
    },
    {
      "q": "Demand is P = 100 − 2Q and MC = $20. The monopolist's profit-maximizing quantity is:",
      "choices": [
        "10",
        "20",
        "30",
        "40"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MR = 100 − 4Q; setting MR = MC gives 100 − 4Q = 20, so Q = 20. (a) would need MR = 60. (c) would need MR = −20. (d) is the competitive quantity, where P = MC."
    },
    {
      "q": "At that quantity, the monopolist's price and profit are:",
      "choices": [
        "P = $20, profit $0",
        "P = $60, profit $800",
        "P = $60, profit $400",
        "P = $40, profit $400"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Price from demand is 100 − 40 = $60; profit is (60 − 20) × 20 = $800. (a) is the competitive outcome. (c) halves the profit. (d) uses the wrong price and the wrong profit."
    },
    {
      "q": "The deadweight loss of this monopoly is:",
      "choices": [
        "$200",
        "$400",
        "$800",
        "$1,200"
      ],
      "answer": 1,
      "explanation": "Correct: (b). DWL = 0.5 × (60 − 20) × (40 − 20) = $400. (a) is half the triangle. (c) is the monopolist's profit, not the loss. (d) is the loss of consumer surplus, not the deadweight loss."
    },
    {
      "q": "At the monopoly optimum, elasticity is −1.5 and the Lerner index is:",
      "choices": [
        "0.33",
        "0.5",
        "0.67",
        "1.5"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Lerner = 1 ÷ |E| = 1 ÷ 1.5 ≈ 0.67, matching (60 − 20) ÷ 60. (a) would need |E| = 3. (b) would need |E| = 2. (d) is |E| itself, not its inverse."
    },
    {
      "q": "A monopolist will never produce where demand is inelastic because there:",
      "choices": [
        "Marginal revenue is negative",
        "Marginal cost is zero",
        "Price is below marginal cost",
        "Deadweight loss is zero"
      ],
      "answer": 0,
      "explanation": "Correct: (a). With |E| < 1, MR = P(1 − 1/|E|) is negative, so cutting output raises revenue and lowers cost — profit must rise. (b) MC is $20, not zero. (c) Price is above MC at the monopoly optimum. (d) Deadweight loss is positive wherever output is below the competitive quantity."
    },
    {
      "q": "Third-degree price discrimination charges more to the group with:",
      "choices": [
        "More elastic demand",
        "Less elastic demand",
        "Lower income",
        "More substitutes available"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The less elastic group has fewer alternatives, so the firm can charge it more — market A paid $50 vs. market B's $40. (a) More elastic demand gets the lower price. (c) Income is not the rule — elasticity is. (d) More substitutes mean more elastic demand and a lower price."
    },
    {
      "q": "Under first-degree price discrimination, deadweight loss is zero because:",
      "choices": [
        "The firm charges everyone the same low price",
        "The firm sells the efficient quantity, capturing all surplus as profit",
        "Consumers get all the surplus",
        "The firm produces nothing"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Every unit worth more than MC is sold (Q = 40), so nothing is lost — the surplus is transferred to the firm instead. (a) First-degree means a different price for each buyer. (c) Consumers get zero surplus under perfect discrimination. (d) The firm produces the competitive quantity, not nothing."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Monopoly & Price Discrimination Quick Reference</h3>\n<p><strong>Core idea:</strong> A monopolist faces the market demand curve, so MR &lt; P; it sets MR = MC for quantity and reads price off demand — charging more and selling less than competition.</p>\n<p><strong>Worked anchor:</strong> demand P = 100 − 2Q, MR = 100 − 4Q, MC = $20 → Q = 20, P = $60, profit $800. Competition: Q = 40, P = $20. DWL = 0.5 × 40 × 20 = $400.</p>\n<div class=\"formula\">Lerner index = (P − MC) ÷ P = 1 ÷ |E| &nbsp;|&nbsp; Here: 0.67 = 1 ÷ 1.5</div>\n<p><strong>Price discrimination:</strong> market A (P = 80 − Q) → $50, 30 units, $900 profit; market B (P = 60 − Q) → $40, 20 units, $400 profit; total $1,300 vs. $1,250 uniform. First-degree: Q = 40, profit $1,600, DWL $0.</p>\n<p><strong>Watch out:</strong> Never set P = MC for a monopolist — that is the competitive rule. And discrimination charges more where demand is less elastic.</p>\n<p><strong>Self-check:</strong> If MC rose to $40, what would the monopolist's Q and P be? (Answer: 100 − 4Q = 40 → Q = 15, P = $70.)</p>\n"
};
