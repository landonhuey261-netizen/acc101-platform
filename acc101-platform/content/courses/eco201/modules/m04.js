// eco201 - Module 4: Cost Theory: Short Run & Long Run
module.exports = {
  "number": 4,
  "slug": "cost-theory-short-run-long-run",
  "title": "Cost Theory: Short Run & Long Run",
  "estTime": "3–4 hours",
  "objectives": [
    "Compute fixed, variable, total, average, and marginal cost from a cost table.",
    "Explain why marginal cost is U-shaped and where it crosses average cost curves.",
    "Find the shutdown point and the break-even point from cost curves.",
    "Minimize cost for a target output with the MRTS = wage/rental condition.",
    "Describe long-run average cost, economies of scale, and minimum efficient scale."
  ],
  "sections": [
    {
      "heading": "Fixed, Variable, and Total Cost",
      "html": "<p>Costs are the money side of production. <strong>Fixed cost</strong> (FC) does not change with output — rent on the workshop, insurance. <strong>Variable cost</strong> (VC) changes with output — wages, materials. <strong>Total cost</strong> is TC = FC + VC. Our worked workshop has FC = $100 and this variable cost table:</p>\n<p>Q: 0, 1, 2, 3, 4, 5, 6 &nbsp;|&nbsp; VC: $0, $50, $90, $120, $160, $220, $300 &nbsp;|&nbsp; TC: $100, $150, $190, $220, $260, $320, $400</p>\n<p>At Q = 0 the firm still pays $100 of fixed cost. Variable cost rises slowly at first (the second worker is very productive, from Module 3) and then faster as diminishing returns set in — each extra unit needs more and more labor. That pattern is why the cost curves look the way they do.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Fixed costs are sunk in the short run — they are paid whether the firm produces or not. That is why they never decide the shutdown choice; only variable costs do.</div>"
    },
    {
      "heading": "Average and Marginal Cost",
      "html": "<p><strong>Average fixed cost</strong> is AFC = FC ÷ Q, and it always falls as output rises because the same $100 is spread over more units: at Q = 4, AFC = 100 ÷ 4 = $25. <strong>Average variable cost</strong> is AVC = VC ÷ Q: at Q = 4, AVC = 160 ÷ 4 = $40. <strong>Average total cost</strong> is ATC = TC ÷ Q = AFC + AVC: at Q = 4, ATC = 260 ÷ 4 = $65, which equals $25 + $40. <strong>Marginal cost</strong> is MC = ΔTC ÷ ΔQ, the cost of one more unit: MC is $50, $40, $30, $40, $60, $80 for the 1st through 6th units.</p>\n<p>Marginal cost is U-shaped because it mirrors marginal product. When marginal product is rising, each extra unit needs less extra labor, so MC falls (from $50 to $30). When diminishing returns set in, each extra unit needs more labor, so MC rises (from $30 to $80). MC crosses AVC and ATC at their lowest points: when MC is below an average, the average falls; when MC is above it, the average rises. In our table ATC is $150, $95, $73.33, $65, $64, $66.67 — it bottoms out at Q = 5 ($64) and MC ($60 at the 5th unit, $80 at the 6th) crosses it there.</p>\n<div class=\"formula\">ATC = AFC + AVC &nbsp;|&nbsp; MC = ΔTC ÷ ΔQ &nbsp;|&nbsp; MC crosses AVC and ATC at their minimums</div>"
    },
    {
      "heading": "Shutdown and Break-Even",
      "html": "<p>Two prices matter for a firm's survival. The <strong>shutdown point</strong> is the minimum of AVC: if the market price falls below it, the firm loses less by producing nothing (losing only its fixed cost) than by producing. The <strong>break-even point</strong> is the minimum of ATC: at that price, revenue exactly covers all costs and economic profit is zero.</p>\n<p>In our table the lowest AVC is at Q = 3: AVC = 120 ÷ 3 = $40 (AVC is $50, $45, $40, $40, $44, $50 — it ties at Q = 3 and Q = 4). So if the price falls below $40, the workshop shuts down in the short run. The lowest ATC is $64 at Q = 5, so a price of $64 is break-even: at Q = 5, revenue is 5 × $64 = $320 and total cost is $320. Between $40 and $64 the firm produces at a loss but keeps going, because producing covers part of its fixed cost; below $40 it stops.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A firm can rationally produce at a loss in the short run. Losing $30 while producing beats losing $100 (the whole fixed cost) by shutting down — as long as price covers average variable cost.</div>"
    },
    {
      "heading": "Cost Minimization: The Cheapest Way to Produce a Target Output",
      "html": "<p>In the long run the firm chooses both inputs to produce a target output at the lowest cost. The rule mirrors the consumer's tangency condition: <strong>MRTS = w ÷ r</strong>, where w is the wage and r is the rental price of capital. The rate at which the firm can technically trade labor for capital must equal the rate at which the market lets it trade them. The cost-minimizing input mix is where the isoquant touches the lowest <strong>isocost line</strong> (all input combinations costing the same amount).</p>\n<p>Work it with Q = L<sup>0.5</sup> K<sup>0.5</sup>, wage w = $20, rental r = $5, target output Q = 20. Step 1: MRTS = K ÷ L = w ÷ r = 20 ÷ 5 = 4, so K = 4L. Step 2: substitute into the production function: 20 = L<sup>0.5</sup> × (4L)<sup>0.5</sup> = L<sup>0.5</sup> × 2 × L<sup>0.5</sup> = 2L, so L = 10 and K = 40. Step 3: cost = wL + rK = 20 × 10 + 5 × 40 = $200 + $200 = $400. Step 4: check a different mix that also gives Q = 20, say L = 20, K = 20: cost = 20 × 20 + 5 × 20 = $400 + $100 = $500 — more expensive, as the rule promises. Notice the cost-minimizing mix spends the same $200 on each input here, a feature of this production function.</p>\n<div class=\"formula\">Cost-minimizing mix: MRTS = w ÷ r &nbsp;|&nbsp; Total cost = wL + rK</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>TC = FC + VC; ATC = AFC + AVC; MC = ΔTC ÷ ΔQ. Our table: at Q = 4, AFC = $25, AVC = $40, ATC = $65, and MC runs $50, $40, $30, $40, $60, $80.</li>\n<li>MC is U-shaped because it mirrors marginal product; it crosses AVC and ATC at their minimums.</li>\n<li>Shutdown point: minimum AVC ($40 here). Break-even point: minimum ATC ($64 at Q = 5).</li>\n<li>Cost minimization: MRTS = w ÷ r. Our example: w = $20, r = $5, Q = 20 gives L = 10, K = 40, cost $400.</li>\n<li>Long-run average cost (LRAC) is the envelope of short-run ATC curves. It falls with <strong>economies of scale</strong> (spreading fixed costs, specialization), is flat over a range, then rises with <strong>diseconomies of scale</strong> (management getting harder). <strong>Minimum efficient scale</strong> is the smallest output where LRAC bottoms out.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating average cost as the cost of the next unit. The next unit costs the marginal cost, not the average. At Q = 4 the average is $65 but the 5th unit costs $60 — and that gap is exactly why the average falls.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying a firm should shut down whenever it makes a loss. In the short run, fixed costs are paid anyway; the question is only whether price covers average variable cost.</div>\n<p><strong>Ready-to-Work link:</strong> Cost curves are the firm's supply curve in disguise. Module 5 takes MC, adds a market price, and the profit-maximizing output falls out of MR = MC.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Fixed cost (FC)", "def": "Cost that does not change with output in the short run, such as rent." },
    { "term": "Variable cost (VC)", "def": "Cost that changes with output, such as wages and materials." },
    { "term": "Total cost (TC)", "def": "Fixed cost plus variable cost: TC = FC + VC." },
    { "term": "Average fixed cost (AFC)", "def": "Fixed cost per unit: AFC = FC / Q; always falls as Q rises." },
    { "term": "Average variable cost (AVC)", "def": "Variable cost per unit: AVC = VC / Q." },
    { "term": "Average total cost (ATC)", "def": "Total cost per unit: ATC = TC / Q = AFC + AVC." },
    { "term": "Marginal cost (MC)", "def": "The cost of producing one more unit: MC = ΔTC / ΔQ." },
    { "term": "Shutdown point", "def": "The minimum of AVC; below this price the firm produces nothing in the short run." },
    { "term": "Break-even point", "def": "The minimum of ATC; at this price economic profit is zero." },
    { "term": "Isocost line", "def": "All combinations of labor and capital that cost the same amount: wL + rK = C." },
    { "term": "Cost minimization", "def": "Producing a target output at the lowest cost, where MRTS = w / r." },
    { "term": "Long-run average cost (LRAC)", "def": "The lowest average cost of producing each output when all inputs can vary." },
    { "term": "Economies of scale", "def": "Falling long-run average cost as output rises." },
    { "term": "Diseconomies of scale", "def": "Rising long-run average cost as output grows very large." },
    { "term": "Minimum efficient scale", "def": "The smallest output at which long-run average cost reaches its minimum." }
  ],
  "video": {
    "title": "Marginal cost and average total cost | Microeconomics | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/7t8gdc3YogM",
    "note": "Khan Academy builds the marginal and average cost curves from a production table — the same table-to-curve move this module makes. Watch it, then recompute our MC column ($50, $40, $30, $40, $60, $80) yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Fixed cost is $100 and variable cost is $0, $50, $90, $120, $160, $220, $300 for Q = 0–6. Compute total cost at each output and marginal cost of each unit.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: TC = 100 + VC: $100, $150, $190, $220, $260, $320, $400. Step 2: MC = change in TC: 1st unit $150 − $100 = $50; 2nd $190 − $150 = $40; 3rd $220 − $190 = $30; 4th $260 − $220 = $40; 5th $320 − $260 = $60; 6th $400 − $320 = $80. So MC = $50, $40, $30, $40, $60, $80.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Using the same table, compute AFC, AVC, and ATC at Q = 4. Show each step.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: AFC = FC ÷ Q = $100 ÷ 4 = $25. Step 2: AVC = VC ÷ Q = $160 ÷ 4 = $40. Step 3: ATC = TC ÷ Q = $260 ÷ 4 = $65. Step 4: Check: AFC + AVC = $25 + $40 = $65 = ATC.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> From the table, AVC is $50, $45, $40, $40, $44, $50 for Q = 1–6, and ATC is $150, $95, $73.33, $65, $64, $66.67. (a) What is the shutdown price? (b) What is the break-even price and output?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Shutdown price = minimum AVC = $40 (reached at Q = 3 and Q = 4). Below $40 the firm produces nothing. Step 2: Break-even price = minimum ATC = $64 at Q = 5. Step 3: Check: at Q = 5, revenue = 5 × $64 = $320 and total cost = $320, so profit is zero.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Production is Q = L<sup>0.5</sup> K<sup>0.5</sup>, wage w = $20, rental r = $5, target output Q = 20. Find the cost-minimizing L and K and the total cost, step by step.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: MRTS = K ÷ L = w ÷ r = 20 ÷ 5 = 4, so K = 4L. Step 2: Production: 20 = L<sup>0.5</sup> × (4L)<sup>0.5</sup> = 2L, so L = 10 and K = 40. Step 3: Cost = 20 × 10 + 5 × 40 = $200 + $200 = $400. Step 4: Check against L = 20, K = 20 (also Q = 20): cost = $400 + $100 = $500, which is higher — the rule works.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The wage doubles to $40 while r stays $5 and target output stays Q = 20. Find the new cost-minimizing input mix and cost. What happened to the labor-capital ratio, and why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: MRTS = K ÷ L = w ÷ r = 40 ÷ 5 = 8, so K = 8L. Step 2: Production: 20 = L<sup>0.5</sup> × (8L)<sup>0.5</sup> = L × √8 = L × 2.828, so L ≈ 7.07 and K = 8 × 7.07 ≈ 56.57. Step 3: Cost = 40 × 7.07 + 5 × 56.57 ≈ $282.84 + $282.84 ≈ $565.69. Step 4: The capital-labor ratio rose from 4 to 8 — dearer labor is replaced with capital, which is the substitution the MRTS condition captures.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A firm's price is $50, its AVC at its current output is $40, and its ATC is $65. (a) Should it shut down in the short run? (b) Is it making a profit or a loss? Explain both answers.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Price $50 is above AVC $40, so producing covers all variable costs plus $10 per unit toward fixed costs — the firm should keep producing in the short run. Step 2: Price $50 is below ATC $65, so it is making a loss of $15 per unit. Step 3: The loss is smaller than the loss from shutting down (the whole fixed cost), so producing at a loss is the right short-run choice; in the long run it must exit unless price rises.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Fixed cost is $100 and variable cost at Q = 4 is $160. Total cost at Q = 4 is:",
      "choices": [
        "$60",
        "$160",
        "$260",
        "$360"
      ],
      "answer": 2,
      "explanation": "Correct: (c). TC = FC + VC = $100 + $160 = $260. (a) subtracts instead of adding. (b) is variable cost alone. (d) adds an extra $100."
    },
    {
      "q": "In the worked table, the marginal cost of the 3rd unit is:",
      "choices": [
        "$50",
        "$40",
        "$30",
        "$60"
      ],
      "answer": 2,
      "explanation": "Correct: (c). TC rises from $190 to $220, so MC = $30. (a) is the 1st unit's MC. (b) is the 2nd unit's MC. (d) is the 5th unit's MC."
    },
    {
      "q": "At Q = 4, AFC is $25 and AVC is $40. ATC is:",
      "choices": [
        "$15",
        "$40",
        "$65",
        "$100"
      ],
      "answer": 2,
      "explanation": "Correct: (c). ATC = AFC + AVC = $25 + $40 = $65. (a) subtracts. (b) is AVC alone. (d) is the fixed cost, not a per-unit figure."
    },
    {
      "q": "Marginal cost falls at first and then rises because:",
      "choices": [
        "Fixed costs fall and then rise",
        "Marginal product first rises and then falls",
        "Prices always rise with output",
        "Average cost is U-shaped"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MC mirrors MP: rising MP means each extra unit needs less labor (MC falls), and diminishing returns mean each extra unit needs more labor (MC rises). (a) Fixed costs never change with output. (c) Prices do not set cost curves. (d) Reverses the logic — ATC is U-shaped because MC is, not the other way around."
    },
    {
      "q": "The shutdown point is the minimum of:",
      "choices": [
        "Average total cost",
        "Average variable cost",
        "Marginal cost",
        "Total cost"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Below minimum AVC, producing loses more than shutting down. (a) Minimum ATC is the break-even point, not the shutdown point. (c) MC has a minimum too, but it is not the shutdown rule. (d) Total cost has no minimum that decides shutdown."
    },
    {
      "q": "In the worked table, the break-even price is $64 at Q = 5 because:",
      "choices": [
        "Revenue of $320 equals total cost of $320",
        "Marginal cost is $64 at Q = 5",
        "Variable cost is $64 at Q = 5",
        "Fixed cost is $64"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Break-even means zero economic profit: 5 × $64 = $320 = TC. (b) MC at the 5th unit is $60, not $64. (c) Variable cost at Q = 5 is $220. (d) Fixed cost is $100."
    },
    {
      "q": "With Q = L^0.5 K^0.5, w = $20, r = $5, and target Q = 20, the cost-minimizing input mix is:",
      "choices": [
        "L = 20, K = 20",
        "L = 10, K = 40",
        "L = 40, K = 10",
        "L = 5, K = 80"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MRTS = w/r = 4 gives K = 4L, and 2L = 20 gives L = 10, K = 40, costing $400. (a) also produces Q = 20 but costs $500. (c) gives Q = √400 = 20 but costs $850. (d) gives Q = √400 = 20 but costs $500."
    },
    {
      "q": "Minimum efficient scale is:",
      "choices": [
        "The output where marginal cost is lowest",
        "The smallest output where long-run average cost reaches its minimum",
        "The output where profit is highest",
        "The largest output a firm can produce"
      ],
      "answer": 1,
      "explanation": "Correct: (b). It is the point where economies of scale run out. (a) MC's minimum is a different point. (c) Profit depends on price as well as cost. (d) There is no largest possible output in the model."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Cost Theory Quick Reference</h3>\n<p><strong>Core idea:</strong> Costs mirror production: falling marginal product means rising marginal cost, and cost curves decide when a firm produces, breaks even, and shuts down.</p>\n<p><strong>Worked table (FC = $100):</strong> Q = 0–6, VC = $0, $50, $90, $120, $160, $220, $300; TC = $100, $150, $190, $220, $260, $320, $400; MC = $50, $40, $30, $40, $60, $80.</p>\n<p><strong>At Q = 4:</strong> AFC = $25, AVC = $40, ATC = $65. Shutdown price = minimum AVC = $40. Break-even = minimum ATC = $64 at Q = 5.</p>\n<div class=\"formula\">ATC = AFC + AVC &nbsp;|&nbsp; MC = ΔTC ÷ ΔQ &nbsp;|&nbsp; Cost minimum: MRTS = w ÷ r</div>\n<p><strong>Cost minimization anchor:</strong> Q = L<sup>0.5</sup> K<sup>0.5</sup>, w = $20, r = $5, Q = 20 → L = 10, K = 40, cost $400.</p>\n<p><strong>Watch out:</strong> The next unit costs MC, not ATC. And a loss-making firm still produces in the short run if price covers AVC.</p>\n<p><strong>Self-check:</strong> If price is $45, should the workshop shut down? (Answer: no — $45 > AVC minimum of $40.)</p>\n"
};
