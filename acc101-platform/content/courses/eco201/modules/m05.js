// eco201 - Module 5: Perfect Competition Revisited: Efficiency & Surplus
module.exports = {
  "number": 5,
  "slug": "perfect-competition-revisited",
  "title": "Perfect Competition Revisited: Efficiency & Surplus",
  "estTime": "3–4 hours",
  "objectives": [
    "State the four conditions of perfect competition and explain why each firm is a price taker.",
    "Find a competitive firm's profit-maximizing output with MR = MC and compute its profit.",
    "Use the shutdown rule and the break-even point to predict short-run and long-run behavior.",
    "Explain how entry and exit drive long-run profit to zero at minimum ATC.",
    "Compute consumer surplus, producer surplus, and total surplus, and show why competition maximizes them."
  ],
  "sections": [
    {
      "heading": "What Perfect Competition Is",
      "html": "<p>Perfect competition has four conditions: many buyers and sellers, each too small to affect the price; a homogeneous (identical) product; free entry and exit; and perfect information. No real market meets all four exactly — wheat farming and stock trading come close — but the model is the benchmark every other market structure is judged against.</p>\n<p>Because the product is identical and there are many sellers, each firm faces a <strong>perfectly elastic demand curve</strong>: it can sell any quantity at the market price, and nothing at any higher price. The firm is a <strong>price taker</strong>. Its marginal revenue equals the price: selling one more unit adds exactly P to revenue. That single fact — MR = P — drives everything in this module.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A price taker does not choose its price. It chooses only its quantity, and it chooses the quantity where the cost of the last unit equals the price it fetches.</div>"
    },
    {
      "heading": "Profit Maximization: MR = MC",
      "html": "<p>Every firm maximizes profit where <strong>marginal revenue equals marginal cost</strong>. For a competitive firm, MR = P, so the rule is P = MC: produce up to the point where the cost of the last unit equals the price. Produce one more unit only while its price exceeds its cost; stop when the next unit would cost more than it earns.</p>\n<p>Our worked firm has TC = 9 + 2Q + Q², so MC = 2 + 2Q, and the market price is P = $14. Step 1: set P = MC: 14 = 2 + 2Q, so 2Q = 12 and Q = 6. Step 2: total revenue is 6 × $14 = $84. Step 3: total cost is 9 + 2 × 6 + 6² = 9 + 12 + 36 = $57. Step 4: profit is $84 − $57 = $27. Step 5: check the per-unit figures: ATC = 57 ÷ 6 = $9.50, so profit per unit is $14 − $9.50 = $4.50, and 6 × $4.50 = $27 — the same answer two ways. Note also that AVC = 2 + Q = $8 at Q = 6, which is below the $14 price, so the firm is well above its shutdown point.</p>\n<div class=\"formula\">Profit max: MR = MC &nbsp;|&nbsp; Competitive firm: P = MC &nbsp;|&nbsp; Profit = (P − ATC) × Q</div>"
    },
    {
      "heading": "Short Run and Long Run: Entry, Exit, and Zero Profit",
      "html": "<p>In the short run, a competitive firm can earn a profit (like our $27) or a loss. If price is below minimum ATC but above minimum AVC, it produces at a loss, because producing covers part of its fixed cost. If price falls below minimum AVC it shuts down. Our firm's AVC is 2 + Q, which approaches $2 as Q gets small, so its shutdown price is $2.</p>\n<p>In the long run, the $27 profit attracts entry: new firms enter, market supply rises, and the price falls. Entry stops when price reaches the minimum of ATC — the break-even point. Our firm's ATC is 9 ÷ Q + 2 + Q. Its minimum is where dATC/dQ = −9 ÷ Q² + 1 = 0, so Q² = 9 and Q = 3, giving ATC = 9 ÷ 3 + 2 + 3 = 3 + 2 + 3 = $8. In long-run equilibrium the price is $8, each firm produces 3 units, and economic profit is zero: revenue 3 × $8 = $24 equals cost 9 + 6 + 9 = $24. Zero economic profit does not mean the owners earn nothing — it means they earn exactly the normal return they could get elsewhere, which is already counted as a cost.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Competition is a profit-erasing machine. Short-run profit is the signal that pulls firms in; entry is the mechanism that erases it. The long-run survivors produce at the lowest possible average cost.</div>"
    },
    {
      "heading": "Surplus and Efficiency: Why Competition Is the Benchmark",
      "html": "<p><strong>Consumer surplus</strong> is what buyers gain: the difference between what they would have paid and what they did pay. <strong>Producer surplus</strong> is what sellers gain: price minus the cost of producing each unit. <strong>Total surplus</strong> is the sum of the two, and competitive equilibrium maximizes it.</p>\n<p>Work it with a market where demand is Q = 200 − 10P and supply is Q = 10P − 40. Step 1: equilibrium sets them equal: 200 − 10P = 10P − 40, so 240 = 20P, P = $12, Q = 200 − 120 = 80. Step 2: demand's price intercept is $20 (Q = 0 when P = 20), so consumer surplus is 0.5 × (20 − 12) × 80 = 0.5 × 8 × 80 = $320. Step 3: supply's price intercept is $4 (Q = 0 when P = 4), so producer surplus is 0.5 × (12 − 4) × 80 = 0.5 × 8 × 80 = $320. Step 4: total surplus is $320 + $320 = $640. Every unit traded up to Q = 80 is worth more to its buyer than it costs its seller; beyond 80, the reverse is true. That is why no other quantity, and no other market structure, can beat competition's total surplus — any interference that changes the quantity creates <strong>deadweight loss</strong>, surplus that simply vanishes.</p>\n<div class=\"formula\">Consumer surplus = 0.5 × (max price − P) × Q &nbsp;|&nbsp; Producer surplus = 0.5 × (P − min price) × Q</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Perfect competition: many sellers, identical product, free entry and exit, perfect information; firms are price takers, MR = P.</li>\n<li>Profit max: P = MC. Our firm (TC = 9 + 2Q + Q², P = $14) produces Q = 6, earns $27 profit, with ATC $9.50.</li>\n<li>Short run: produce at a loss if P &gt; min AVC; shut down if P &lt; min AVC ($2 here).</li>\n<li>Long run: entry drives P to minimum ATC ($8) and each firm to Q = 3, with zero economic profit.</li>\n<li>Market surplus: demand Q = 200 − 10P, supply Q = 10P − 40 gives P = $12, Q = 80, consumer surplus $320, producer surplus $320, total $640.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying long-run zero profit means firms go broke. Economic profit counts the normal return as a cost, so zero economic profit means the firm earns exactly what its owners could earn elsewhere — enough to stay in business.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Drawing the firm's demand curve as downward sloping. The market demand curve slopes down; the individual competitive firm's demand curve is horizontal at the market price.</div>\n<p><strong>Ready-to-Work link:</strong> This module is the yardstick. Module 6 shows how a monopolist breaks the benchmark — higher price, lower quantity, and deadweight loss — and Module 9 states the general result as the First Welfare Theorem.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Perfect competition", "def": "A market with many buyers and sellers, a homogeneous product, free entry and exit, and perfect information." },
    { "term": "Price taker", "def": "A firm that must accept the market price and cannot change it by changing its own output." },
    { "term": "Perfectly elastic demand", "def": "The horizontal demand curve a competitive firm faces at the market price." },
    { "term": "Marginal revenue (MR)", "def": "The extra revenue from selling one more unit; for a competitive firm, MR = P." },
    { "term": "Profit-maximizing rule", "def": "Produce where MR = MC; for a competitive firm, where P = MC." },
    { "term": "Shutdown rule", "def": "In the short run, produce only if price is at or above minimum AVC; otherwise shut down." },
    { "term": "Long-run equilibrium", "def": "Price equals minimum ATC, each firm produces at minimum ATC, and economic profit is zero." },
    { "term": "Economic profit", "def": "Revenue minus all costs, including the normal return on capital counted as a cost." },
    { "term": "Normal return", "def": "The return owners could earn on their resources in their next-best use; counted as a cost in economics." },
    { "term": "Consumer surplus", "def": "The difference between what buyers would have paid and what they actually paid." },
    { "term": "Producer surplus", "def": "The difference between the price sellers receive and the cost of producing each unit." },
    { "term": "Total surplus", "def": "Consumer surplus plus producer surplus; maximized at the competitive equilibrium." },
    { "term": "Deadweight loss", "def": "Surplus lost when the traded quantity is not the competitive quantity." },
    { "term": "Allocative efficiency", "def": "Producing the quantity where the value to buyers equals the cost to sellers — achieved at the competitive equilibrium." }
  ],
  "video": {
    "title": "Maximizing Profit Under Competition",
    "embedUrl": "https://www.youtube.com/embed/0x4f2e5m1Jw",
    "note": "Marginal Revolution University shows a competitive firm choosing output where price equals marginal cost — the same MR = MC rule this module applies to get Q = 6 and $27 of profit. Watch it, then rework the firm's numbers yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A competitive firm has TC = 9 + 2Q + Q² and the market price is $14. (a) What is its profit-maximizing output? (b) What is its profit? Show both the total and per-unit calculations.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: MC = 2 + 2Q. Set P = MC: 14 = 2 + 2Q, so Q = 6. Step 2: Total revenue = 6 × $14 = $84. Step 3: Total cost = 9 + 12 + 36 = $57. Step 4: Profit = $84 − $57 = $27. Step 5: Per-unit check: ATC = $57 ÷ 6 = $9.50, profit per unit = $14 − $9.50 = $4.50, and 6 × $4.50 = $27.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The price falls to $8. (a) What output does the firm choose? (b) What is its profit or loss? (c) Should it shut down? Use AVC = 2 + Q.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Set P = MC: 8 = 2 + 2Q, so Q = 3. Step 2: Revenue = 3 × $8 = $24. Cost = 9 + 6 + 9 = $24. Profit = $0 — this is the long-run break-even point. Step 3: AVC at Q = 3 is 2 + 3 = $5, which is below the $8 price, so the firm produces. (c) No shutdown: it covers all costs exactly.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> The price falls to $1.50. (a) What would P = MC give? (b) Should the firm produce or shut down? Explain with numbers.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: P = MC would give 1.50 = 2 + 2Q, so Q = −0.25 — impossible, so the firm produces nothing. Step 2: The shutdown price is minimum AVC, which approaches $2 as Q gets small; $1.50 is below it. Step 3: Producing would lose more than shutting down: shutting down loses only the $9 fixed cost, while producing at a price below AVC loses the fixed cost plus more. So the firm shuts down.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Market demand is Q = 200 − 10P and market supply is Q = 10P − 40. Find the equilibrium price and quantity, then compute consumer surplus, producer surplus, and total surplus.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 200 − 10P = 10P − 40 gives 240 = 20P, so P = $12 and Q = 200 − 120 = 80. Step 2: Demand intercept is $20, so consumer surplus = 0.5 × (20 − 12) × 80 = $320. Step 3: Supply intercept is $4, so producer surplus = 0.5 × (12 − 4) × 80 = $320. Step 4: Total surplus = $320 + $320 = $640.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> In the market from Problem 4, a price floor of $16 is imposed. (a) What quantity is traded? (b) What is the deadweight loss? Show the steps.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: At P = $16, quantity demanded is 200 − 160 = 40, and that is what is traded (the short side rules). Step 2: At Q = 40, the supply price is found from 40 = 10P − 40, so P = $8 — the marginal seller's cost. Step 3: Deadweight loss is the surplus on the 40 lost units: 0.5 × (16 − 8) × (80 − 40) = 0.5 × 8 × 40 = $160. Step 4: Total surplus falls from $640 to $480.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> In your own words, explain why entry drives long-run economic profit to zero in perfect competition, and why that is not bad news for the firms.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Positive economic profit means the industry earns more than the normal return, which attracts new firms because entry is free. Step 2: New firms add supply, which pushes the market price down. Step 3: The price keeps falling until it reaches minimum ATC, where profit is zero and entry stops. Step 4: It is not bad news because zero economic profit still includes the normal return — owners earn exactly what their money would earn elsewhere, so they are content to stay.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A perfectly competitive firm is a price taker because:",
      "choices": [
        "The government sets its price",
        "It is one of many sellers of an identical product",
        "It has no costs",
        "It sells a unique product"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Many sellers of identical goods mean any firm charging more sells nothing. (a) Government price-setting is a different market. (c) Costs are irrelevant to price-taking. (d) A unique product gives market power, the opposite of price-taking."
    },
    {
      "q": "For a competitive firm, marginal revenue equals:",
      "choices": [
        "Average total cost",
        "The market price",
        "Zero",
        "Marginal cost"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each extra unit sells at the market price, so MR = P. (a) ATC is a cost, not revenue. (c) MR is positive and equal to price. (d) MR equals MC only at the profit-maximizing output — it is not the definition of MR."
    },
    {
      "q": "A firm has TC = 9 + 2Q + Q² and price is $14. Its profit-maximizing output is:",
      "choices": [
        "3",
        "4",
        "6",
        "8"
      ],
      "answer": 2,
      "explanation": "Correct: (c). MC = 2 + 2Q; setting 14 = 2 + 2Q gives Q = 6. (a) is the output at P = $8. (b) would need MC = 10, i.e. P = $10. (d) would need MC = 18, i.e. P = $18."
    },
    {
      "q": "At that output, the firm's profit is:",
      "choices": [
        "$0",
        "$12",
        "$27",
        "$84"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Revenue is 6 × $14 = $84 and cost is 9 + 12 + 36 = $57, so profit is $27. (a) is the profit at P = $8. (b) is not either figure. (d) is total revenue, not profit."
    },
    {
      "q": "In long-run competitive equilibrium, price equals:",
      "choices": [
        "Marginal cost only",
        "Minimum average total cost",
        "Maximum average total cost",
        "Zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Entry stops when P = minimum ATC ($8 in our example), where profit is zero. (a) P = MC holds at every profit-maximizing output, short run included. (c) Maximum ATC is not a meaningful point. (d) A zero price would bankrupt every firm."
    },
    {
      "q": "Demand is Q = 200 − 10P and supply is Q = 10P − 40. Equilibrium price and quantity are:",
      "choices": [
        "P = $10, Q = 100",
        "P = $12, Q = 80",
        "P = $16, Q = 40",
        "P = $20, Q = 0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 200 − 10P = 10P − 40 gives P = $12 and Q = 80. (a) At P = $10, demand is 100 but supply is 60 — a shortage. (c) At P = $16, demand is 40 but supply is 120 — a surplus. (d) is the demand intercept, not the equilibrium."
    },
    {
      "q": "In that market, consumer surplus is:",
      "choices": [
        "$160",
        "$320",
        "$640",
        "$960"
      ],
      "answer": 1,
      "explanation": "Correct: (b). CS = 0.5 × (20 − 12) × 80 = $320. (a) is half the right value. (c) is total surplus (CS + PS). (d) is not a surplus figure here."
    },
    {
      "q": "A price floor of $16 in that market creates deadweight loss of:",
      "choices": [
        "$0",
        "$80",
        "$160",
        "$320"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Quantity falls from 80 to 40 and the gap between buyers' value ($16) and sellers' cost ($8) on those units is 0.5 × 8 × 40 = $160. (a) ignores the lost trades. (b) is half the triangle. (d) is the whole consumer surplus, not the loss."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Perfect Competition Quick Reference</h3>\n<p><strong>Core idea:</strong> Many sellers of an identical product take the price as given, produce where P = MC, and entry erases profit in the long run — while maximizing total surplus.</p>\n<p><strong>Worked firm:</strong> TC = 9 + 2Q + Q², MC = 2 + 2Q. At P = $14: Q = 6, revenue $84, cost $57, profit $27, ATC $9.50.</p>\n<p><strong>Long run:</strong> minimum ATC is $8 at Q = 3 — price falls there, profit is zero, and that zero still includes the normal return.</p>\n<div class=\"formula\">Profit max: P = MC &nbsp;|&nbsp; Profit = (P − ATC) × Q &nbsp;|&nbsp; Shutdown if P &lt; min AVC</div>\n<p><strong>Surplus anchor:</strong> demand Q = 200 − 10P, supply Q = 10P − 40 → P = $12, Q = 80, CS = $320, PS = $320, total $640. A $16 floor cuts quantity to 40 and creates $160 of deadweight loss.</p>\n<p><strong>Watch out:</strong> The firm's demand curve is horizontal; the market's slopes down. Zero economic profit is not bankruptcy.</p>\n<p><strong>Self-check:</strong> If price is $10, what output does the firm choose? (Answer: 10 = 2 + 2Q → Q = 4.)</p>\n"
};
