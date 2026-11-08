// eco102 - Module 12: Course Review: The Micro Toolkit
module.exports = {
  "number": 12,
  "slug": "course-review-the-micro-toolkit",
  "title": "Course Review: The Micro Toolkit",
  "estTime": "3–4 hours",
  "objectives": [
    "Rebuild the supply-and-demand model and find equilibrium from equations.",
    "Recompute elasticities with the midpoint method and use them to predict revenue.",
    "Apply the consumer-choice rule and the firm rules (MR = MC, shutdown, least-cost).",
    "Compare the four market structures and their efficiency results.",
    "Diagnose a market failure and choose the right policy tool for it."
  ],
  "sections": [
    {
      "heading": "The Core Model: Supply, Demand, and Elasticity",
      "html": "<p>Everything in this course hangs on one picture: supply and demand. The bagel market from Module 1 — Qd = 100 − 2P, Qs = 20 + 2P — gives equilibrium P = $20 and Q = 60, a surplus of 20 at $25, and a shortage of 20 at $15. A demand rise to Qd = 120 − 2P moves equilibrium to $25 and 70; a supply rise to Qs = 40 + 2P moves it to $15 and 70. If you can redo that arithmetic cold, the rest of the course is variations on it.</p>\n<p>Elasticity tells you how strongly the curves respond. Concert tickets (P $10→$12, Q 100→80) give Ed = −22.22% ÷ 18.18% = −1.22 by the midpoint method — elastic, so a price rise loses revenue (the mugs: $1,000 → $960). Income elasticity 1.5 marks a luxury; cross-price elasticity +0.5 marks substitutes; supply elasticity 1.17 for the candles marks elastic supply. The method matters: always midpoint, always state it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The toolkit is small on purpose: equilibrium, elasticity, marginal analysis, MR = MC, and the efficiency test (P = MC, P = minimum ATC). Every question in this course is one of those tools applied to a new story.</div>"
    },
    {
      "heading": "People and Firms: Choice and Costs",
      "html": "<p>Consumers maximize utility per dollar: MUx ÷ Px = MUy ÷ Py. The pizza-and-drinks example (3 pizzas + 3 drinks for $9, total utility 72) is the pattern — buy in order of satisfaction per dollar until the money runs out and the last dollar buys the same everywhere. Diminishing marginal utility (ice cream MU 30, 25, 20, 15, 10) is why demand slopes down.</p>\n<p>Firms turn inputs into output under diminishing returns (bakery marginal product 10, 15, 20, 15, 10) and costs that follow (MC $4, $3, $4, $5; at Q = 20, ATC $8.50, AVC $3.50, AFC $5.00). The firm's rules are: produce where MR = MC; stay open in the short run only if P ≥ AVC; combine factors so MPL ÷ PL = MPC ÷ PC; hire while MRP ≥ wage (sandwich shop: hire 3 at a $70 wage, 2 at $90).</p>"
    },
    {
      "heading": "The Four Market Structures",
      "html": "<p>Perfect competition: many firms, identical product, flat demand, MR = P, profit where MR = MC (wheat: 50 bushels, profit $100), long-run zero economic profit, P = MC and P = minimum ATC — both efficiencies at once. Monopoly: one firm, MR below price (P = 20 − Q gives MR = 20 − 2Q), produces 8 at $12 instead of 16 at $4, profit $40, deadweight loss $32. Monopolistic competition: many firms, differentiated products, short-run profit, long-run zero profit with excess capacity. Oligopoly: few firms, interdependence, prisoner's dilemma (both cut at $60 each beats both high at $100 each — yet both cut), cartels that break down because cheating pays $150.</p>\n<p>The comparison to carry into the final exam: as the number of firms falls and barriers rise, price control rises, output falls, and deadweight loss grows. Perfect competition is the benchmark; every other structure is measured by how far it falls short — and by what it gives back, like the variety of monopolistic competition or the scale of a natural monopoly.</p>"
    },
    {
      "heading": "Market Failure and What To Do About It",
      "html": "<p>Markets fail four ways in this course. Externalities: widgets (market 20 at $30, efficient 18 at $32, DWL $4, Pigouvian tax $4, revenue $72) and flu shots (market 15, efficient 20, subsidy $10). Public goods: nonrival and nonexcludable, so free riders underprovide them. Information: lemons (expected value $7,000 drives good cars out) — adverse selection before the deal, moral hazard after it. Monopoly power: output withheld, $32 destroyed. And government failure: rent seeking, capture, concentrated benefits against dispersed costs — the fix can cost more than the failure.</p>\n<p>The exam question to expect is a diagnosis: given a story, name the failure, show the numbers, and pick the tool — tax, subsidy, permit, regulation, information, or nothing. The right answer always starts with the same sentence: what is the efficient quantity, and what is the market actually producing?</p>\n<div class=\"formula\">Efficient quantity: MB = MSC (or MSB = MC) &nbsp;|&nbsp; Market quantity: MB = MPC &nbsp;|&nbsp; The gap between them is the failure</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Bagels: Qd = 100 − 2P, Qs = 20 + 2P → P = $20, Q = 60. Surplus 20 at $25; shortage 20 at $15.</li>\n<li>Elasticity (midpoint): tickets Ed = −1.22; mugs revenue $1,000 → $960; income 1.5 (luxury); cross +0.5 (substitutes); supply 1.17.</li>\n<li>Choice and firms: MU per dollar equal (pizza/drinks, TU 72); MR = MC (wheat 50, profit $100; monopoly 8 at $12, profit $40, DWL $32); shutdown if P &lt; AVC; hire while MRP ≥ wage.</li>\n<li>Structures: competition (both efficiencies) → monopolistic competition (variety, zero long-run profit) → oligopoly (prisoner's dilemma, both cut at $60) → monopoly (profit persists, DWL $32).</li>\n<li>Failures: externalities (widgets DWL $4; flu shots gap 5), public goods (free riders), lemons ($7,000 expected value), monopoly power, government failure.</li>\n<li>Income: quintiles 3/9/15/23/50, Gini 0.30 example, poverty gap $6,000, progressive tax ($2,000 vs. $25,000).</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Memorizing conclusions without the numbers. The final exam asks you to recompute: equilibrium from equations, elasticity by the midpoint method, profit from (P − ATC) × Q, deadweight loss from the triangle. Practice the arithmetic, not just the definitions.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Reading the monopoly price off MR = MC. MR = MC gives quantity; the price comes from the demand curve. This error appears in every cohort — do not be in it.</div>\n<p><strong>Ready-to-Work link:</strong> You now have the whole micro toolkit: find the equilibrium, measure the response, check the margin, compare the structures, diagnose the failure, and price the fix. The next course (macroeconomics) puts the same tools to work on the whole economy.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Micro toolkit", "def": "The course's core tools: equilibrium, elasticity, marginal analysis, MR = MC, and the efficiency test." },
    { "term": "Equilibrium", "def": "Where quantity demanded equals quantity supplied; P = $20, Q = 60 in the bagel market." },
    { "term": "Midpoint method", "def": "Computing percentage changes against the average of start and end values." },
    { "term": "Marginal analysis", "def": "Deciding by comparing the extra benefit and extra cost of one more unit." },
    { "term": "MR = MC", "def": "The profit-maximizing rule for every firm, whatever the market structure." },
    { "term": "Allocative efficiency", "def": "Producing where price equals marginal cost." },
    { "term": "Productive efficiency", "def": "Producing at minimum average total cost." },
    { "term": "Deadweight loss", "def": "Surplus destroyed when output is below (or above) the efficient level." },
    { "term": "Market structure", "def": "How a market is organized: firms, product, entry, and price control." },
    { "term": "Externality", "def": "A cost or benefit falling on bystanders." },
    { "term": "Public good", "def": "Nonrival and nonexcludable; underprovided by the market." },
    { "term": "Asymmetric information", "def": "One side of a deal knows more than the other." },
    { "term": "Nash equilibrium", "def": "An outcome where no player can do better by changing alone." },
    { "term": "Gini coefficient", "def": "A single number (0 to 1) summarizing income inequality from the Lorenz curve." },
    { "term": "Pigouvian tax", "def": "A tax equal to the external cost." },
    { "term": "Shutdown rule", "def": "Produce in the short run only if price covers average variable cost." }
  ],
  "video": {
    "title": "Microeconomics- Everything You Need to Know",
    "embedUrl": "https://www.youtube.com/embed/1UxA6JzoT-4",
    "note": "Jacob Clifford (ACDC Econ) reviews the whole introductory microeconomics course in one fast pass — scarcity, supply and demand, elasticity, costs, market structures, factor markets, externalities, and the Lorenz curve. Watch it once for the big picture, then work the final exam.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A market has Qd = 80 − P and Qs = 20 + P. Find equilibrium price and quantity, and the surplus or shortage at P = $40.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Set 80 − P = 20 + P, so 60 = 2P and P = <strong>$30</strong>. Step 2: Q = 80 − 30 = <strong>50 units</strong>. Step 3: At P = $40: Qd = 80 − 40 = 40, Qs = 20 + 40 = 60. Step 4: Supply exceeds demand by 20 — a <strong>surplus of 20 units</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Price rises from $8 to $10 and quantity demanded falls from 120 to 90. Using the midpoint method, calculate Ed and say whether demand is elastic or inelastic.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: %ΔQ = (90 − 120) ÷ 105 = −30 ÷ 105 = −28.57%. Step 2: %ΔP = (10 − 8) ÷ 9 = 2 ÷ 9 = 22.22%. Step 3: Ed = −28.57% ÷ 22.22% = <strong>−1.29</strong>. Step 4: |Ed| = 1.29 &gt; 1, so demand is <strong>elastic</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A monopolist faces demand P = 30 − Q and MC = $6. Find the profit-maximizing quantity, price, and deadweight loss. (Hint: MR = 30 − 2Q; competitive output is where P = MC.)</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: MR = MC: 30 − 2Q = 6, so 2Q = 24 and Q = <strong>12 units</strong>. Step 2: Price from demand: P = 30 − 12 = <strong>$18</strong>. Step 3: Competitive output: 30 − Q = 6, so Q = 24. Step 4: DWL = ½ × ($18 − $6) × (24 − 12) = ½ × $12 × 12 = <strong>$72</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A competitive firm faces price $12. Its MC is $8 at 40 units, $12 at 50, $16 at 60, and its ATC at 50 units is $10. How much should it produce, and what is its profit?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: MR = P = $12; MR = MC at <strong>50 units</strong>. Step 2: Profit = (P − ATC) × Q = ($12 − $10) × 50 = <strong>$100</strong>. Step 3: At 60 units MC ($16) exceeds MR ($12), so the extra units would lose money.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A factory's pollution costs neighbors $6 a unit. The market makes 50 units; the efficient output is 40. What is the deadweight loss, and what Pigouvian tax fixes it?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: DWL = ½ × excess units × external cost = ½ × (50 − 40) × $6 = ½ × 10 × 6 = <strong>$30</strong>. Step 2: A Pigouvian tax of <strong>$6 a unit</strong> makes the factory face the true cost and produce the efficient 40 units.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two firms can each keep prices high (earn $100 each) or cut (earn $60 each if both cut; $150 for the cutter and $40 for the other if only one cuts). What is the Nash equilibrium, and is it the best outcome for the firms?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Cutting is the dominant strategy for each: 150 &gt; 100 if the rival holds, 60 &gt; 40 if the rival cuts. Step 2: Nash equilibrium is <strong>both cut, $60 each</strong>. Step 3: It is not the best outcome — both high would earn $100 each — but neither firm can reach it alone, because the other would cheat and earn $150.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Qd = 80 − P and Qs = 20 + P. Equilibrium is:",
      "choices": ["$20 and 60 units", "$30 and 50 units", "$40 and 40 units", "$25 and 55 units"],
      "answer": 1,
      "explanation": "Correct: (b). 80 − P = 20 + P gives P = $30, Q = 50. (a) gives Qd = 60 but Qs = 40. (c) gives Qd = 40 and Qs = 60 — a surplus, not equilibrium. (d) gives Qd = 55 and Qs = 45."
    },
    {
      "q": "Price rises from $8 to $10 and quantity falls from 120 to 90. Midpoint Ed is about:",
      "choices": ["−0.78", "−1.00", "−1.29", "−1.50"],
      "answer": 2,
      "explanation": "Correct: (c). %ΔQ = −30 ÷ 105 = −28.57%; %ΔP = 2 ÷ 9 = 22.22%; −28.57 ÷ 22.22 = −1.29. (a) inverts the ratio. (b) is the simple-method value (−25% ÷ 25%). (d) uses the wrong averages."
    },
    {
      "q": "A monopolist with demand P = 30 − Q and MC = $6 produces:",
      "choices": ["6 units at $24", "12 units at $18", "18 units at $12", "24 units at $6"],
      "answer": 1,
      "explanation": "Correct: (b). MR = 30 − 2Q = 6 gives Q = 12; price from demand is $18. (a) is half the quantity. (c) is the price from the MR curve — the classic error. (d) is the competitive output."
    },
    {
      "q": "The deadweight loss in the question above is:",
      "choices": ["$36", "$72", "$144", "$216"],
      "answer": 1,
      "explanation": "Correct: (b). ½ × ($18 − $6) × (24 − 12) = $72. (a) is half the triangle. (c) forgets the ½. (d) has no basis in the numbers."
    },
    {
      "q": "A competitive firm with price $12, MC $12 at 50 units, and ATC $10 at 50 units earns profit of:",
      "choices": ["$50", "$100", "$600", "$0"],
      "answer": 1,
      "explanation": "Correct: (b). ($12 − $10) × 50 = $100. (a) is the profit on 25 units. (c) is total revenue. (d) would need P = ATC."
    },
    {
      "q": "A factory's pollution costs $6 a unit; market output 50, efficient output 40. Deadweight loss is:",
      "choices": ["$30", "$60", "$240", "$300"],
      "answer": 0,
      "explanation": "Correct: (a). ½ × 10 × $6 = $30. (b) forgets the ½. (c) multiplies the wrong numbers. (d) is the external cost times the market output."
    },
    {
      "q": "In the prisoner's dilemma, the Nash equilibrium is:",
      "choices": ["Both keep prices high", "Both cut prices", "One cuts and the other keeps high", "Both exit the market"],
      "answer": 1,
      "explanation": "Correct: (b). Both cut: neither can do better alone. (a) is better for both but unstable. (c) is unstable — the other side would cut too. (d) earns nothing."
    },
    {
      "q": "The best first step in diagnosing a market failure is to ask:",
      "choices": ["How big is the government?", "What is the efficient quantity, and what is the market actually producing?", "What is the firm's profit?", "What is the Gini coefficient?"],
      "answer": 1,
      "explanation": "Correct: (b). The gap between efficient and actual output is the failure. (a) is about government size, not the failure. (c) Profit alone does not show a failure. (d) is about income distribution, a different question."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — The Micro Toolkit: Quick Reference</h3>\n<p><strong>Equilibrium:</strong> Bagels Qd = 100 − 2P, Qs = 20 + 2P → P = $20, Q = 60. Surplus 20 at $25; shortage 20 at $15.</p>\n<p><strong>Elasticity (midpoint):</strong> Tickets Ed = −1.22; mugs revenue $1,000 → $960; income 1.5; cross +0.5; supply 1.17.</p>\n<p><strong>Choice & firms:</strong> MUx ÷ Px = MUy ÷ Py (pizza/drinks TU 72). MR = MC everywhere. Wheat: 50 bushels, profit $100. Monopoly: Q = 8, P = $12, profit $40, DWL $32. Shutdown if P &lt; AVC. Hire while MRP ≥ wage.</p>\n<p><strong>Structures:</strong> Competition (P = MC, P = min ATC) · monopolistic competition (variety, zero long-run profit) · oligopoly (prisoner's dilemma: both cut $60) · monopoly (profit persists).</p>\n<p><strong>Failures:</strong> Externalities (widgets DWL $4, tax $4; flu shots gap 5) · public goods (free riders) · lemons ($7,000) · monopoly power · government failure.</p>\n<p><strong>Income:</strong> Quintiles 3/9/15/23/50; Gini 0.30; poverty gap $6,000; progressive tax $2,000 vs. $25,000.</p>\n<p><strong>Exam tip:</strong> Recompute, don't recall. Equilibrium from equations, elasticity by midpoint, profit from (P − ATC) × Q, DWL from ½ × base × height — and the monopoly price from the demand curve, never from MR = MC.</p>\n"
};
