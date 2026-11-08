// eco102 - Module 4: Production & Costs: From Inputs to Outputs
module.exports = {
  "number": 4,
  "slug": "production-and-costs",
  "title": "Production & Costs: From Inputs to Outputs",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain fixed and variable inputs and the short run versus the long run.",
    "Calculate total, marginal, and average product and find where diminishing returns begin.",
    "Calculate total, fixed, variable, marginal, and average costs from a cost table.",
    "Explain why the marginal cost curve is U-shaped and crosses average cost at its minimum.",
    "Use the shutdown rule and the break-even point to judge whether a firm should produce."
  ],
  "sections": [
    {
      "heading": "Inputs, Outputs, and the Short Run",
      "html": "<p>A firm turns <strong>inputs</strong> (workers, ovens, flour) into <strong>output</strong> (bagels). In the <strong>short run</strong> at least one input is fixed — the bakery has one oven and cannot get a second one this week. In the <strong>long run</strong> all inputs can change: the bakery can buy a second oven, move to a bigger shop, or close down.</p>\n<p>Work with a bakery that has one fixed oven and hires workers one at a time. Total product (bagels a day) for 0, 1, 2, 3, 4, 5 workers is 0, 10, 25, 45, 60, 70. <strong>Marginal product</strong> is the extra output from one more worker: 10, 15, 20, 15, 10. The first workers help each other specialize, so marginal product rises; then the single oven becomes crowded and marginal product falls. That turning point is the <strong>law of diminishing marginal returns</strong>: adding more of a variable input to a fixed input eventually gives smaller and smaller extra output.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Diminishing returns set in here after the 3rd worker: marginal product goes 10, 15, 20, then 15, then 10. Average product at 4 workers is 60 ÷ 4 = 15 bagels per worker.</div>"
    },
    {
      "heading": "From Production to Costs",
      "html": "<p>Costs follow production. <strong>Fixed costs</strong> do not change with output (the $100-a-day oven rent). <strong>Variable costs</strong> rise with output (flour and wages). <strong>Total cost</strong> is fixed plus variable. Here is the bakery's cost table, with total fixed cost of $100 a day:</p>\n<p>Output 0: total cost $100. Output 10: $140. Output 20: $170. Output 30: $210. Output 40: $260. <strong>Marginal cost</strong> is the extra cost of one more unit: from 0 to 10 it is (140 − 100) ÷ 10 = <strong>$4</strong> per bagel; from 10 to 20 it is (170 − 140) ÷ 10 = <strong>$3</strong>; from 20 to 30 it is (210 − 170) ÷ 10 = <strong>$4</strong>; from 30 to 40 it is (260 − 210) ÷ 10 = <strong>$5</strong>. Marginal cost falls first (specialization) and then rises (diminishing returns) — that is why the MC curve is U-shaped.</p>"
    },
    {
      "heading": "Average Costs and the Crossing Point",
      "html": "<p><strong>Average total cost</strong> is total cost divided by output: ATC = TC ÷ Q. <strong>Average variable cost</strong> is variable cost divided by output, and <strong>average fixed cost</strong> is fixed cost divided by output. At output 20: TC is $170, so ATC = 170 ÷ 20 = <strong>$8.50</strong>. Variable cost is 170 − 100 = $70, so AVC = 70 ÷ 20 = <strong>$3.50</strong>. Fixed cost is $100, so AFC = 100 ÷ 20 = <strong>$5.00</strong>. Check: AVC + AFC = 3.50 + 5.00 = $8.50, which equals ATC — always true.</p>\n<p>Average fixed cost always falls as output rises, because the same $100 is spread over more bagels. Average variable cost and average total cost are U-shaped. And there is a rule worth memorizing: the marginal cost curve crosses the average total cost curve and the average variable cost curve at their <strong>minimum points</strong>. If the next bagel costs less than the average, it pulls the average down; if it costs more, it pulls the average up; so the average is lowest exactly where marginal cost equals it.</p>\n<div class=\"formula\">TC = TFC + TVC &nbsp;|&nbsp; MC = ΔTC ÷ ΔQ &nbsp;|&nbsp; ATC = TC ÷ Q &nbsp;|&nbsp; AVC + AFC = ATC</div>"
    },
    {
      "heading": "Shutdown, Break-Even, and the Long Run",
      "html": "<p>Costs answer the firm's two big questions. First, <strong>should we produce at all?</strong> In the short run, produce if the price covers average variable cost; if price is below AVC, shut down and lose only the fixed costs. If the bakery's AVC is $3.50 at its best output and the market price is $3, it loses $0.50 on every bagel it bakes on top of its rent — better to close for the day and lose just the $100 rent.</p>\n<p>Second, <strong>how much should we produce?</strong> Produce where marginal revenue equals marginal cost (MR = MC) — the rule Module 5 uses in detail. In the long run, all costs are variable, so the firm can also change its scale. <strong>Economies of scale</strong> mean average cost falls as the firm grows (bulk buying, specialization); <strong>diseconomies of scale</strong> mean average cost rises as the firm gets too big to manage. The long-run average cost curve is the envelope of all the short-run curves — the cheapest way to produce each output level.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Short run: at least one input fixed. Long run: all inputs can change.</li>\n<li>Bakery total product: 0, 10, 25, 45, 60, 70 for 0–5 workers; marginal product 10, 15, 20, 15, 10 — diminishing returns after the 3rd worker.</li>\n<li>Cost table (TFC $100): TC $100, $140, $170, $210, $260 for Q 0, 10, 20, 30, 40; MC $4, $3, $4, $5 per bagel.</li>\n<li>At Q = 20: ATC $8.50, AVC $3.50, AFC $5.00 — and AVC + AFC = ATC.</li>\n<li>MC crosses ATC and AVC at their minimums. Shutdown rule: produce only if P ≥ AVC in the short run.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Confusing marginal and average. Marginal cost is the cost of the <em>next</em> unit; average cost is the cost of <em>all</em> units so far. A rising marginal cost can still be below the average, pulling the average down.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating fixed costs as a reason to keep producing. Fixed costs are sunk in the short run — they are paid whether you produce or not, so they should not decide the shutdown question. Only price versus average variable cost decides it.</div>\n<p><strong>Ready-to-Work link:</strong> A food truck owner who knows their marginal cost per sandwich and their average variable cost knows exactly when a slow Tuesday is worth opening and when it is cheaper to stay home.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Inputs", "def": "The resources a firm uses to produce output: labor, capital, land, and materials." },
    { "term": "Short run", "def": "A period in which at least one input is fixed." },
    { "term": "Long run", "def": "A period in which all inputs can be changed." },
    { "term": "Total product", "def": "The total output produced with a given set of inputs." },
    { "term": "Marginal product", "def": "The extra output from one more unit of a variable input." },
    { "term": "Average product", "def": "Total product divided by the number of units of the variable input." },
    { "term": "Law of diminishing marginal returns", "def": "Adding more of a variable input to a fixed input eventually yields smaller extra output." },
    { "term": "Fixed cost", "def": "A cost that does not change with output, such as rent." },
    { "term": "Variable cost", "def": "A cost that rises with output, such as flour or hourly wages." },
    { "term": "Total cost", "def": "Fixed cost plus variable cost." },
    { "term": "Marginal cost", "def": "The extra cost of producing one more unit of output." },
    { "term": "Average total cost", "def": "Total cost divided by output." },
    { "term": "Average variable cost", "def": "Variable cost divided by output." },
    { "term": "Average fixed cost", "def": "Fixed cost divided by output; always falls as output rises." },
    { "term": "Economies of scale", "def": "Average cost falling as a firm grows larger." },
    { "term": "Diseconomies of scale", "def": "Average cost rising as a firm grows too large to manage well." },
    { "term": "Shutdown rule", "def": "In the short run, produce only if price covers average variable cost; otherwise shut down." },
    { "term": "Sunk cost", "def": "A cost already paid that cannot be recovered; it should not affect current decisions." }
  ],
  "video": {
    "title": "Diminishing Returns and the Production Function- Micro Topic 3.1",
    "embedUrl": "https://www.youtube.com/embed/xLSRMt-wWAM",
    "note": "Jacob Clifford (ACDC Econ) explains fixed and variable resources, the short run and long run, and the law of diminishing marginal returns with a pizza shop. Watch it, then check the bakery's marginal product numbers in this module.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A bakery's total product for 0–5 workers is 0, 10, 25, 45, 60, 70 bagels. Calculate the marginal product of each worker and the average product with 4 workers. After which worker do diminishing returns begin?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: MP = change in total product: 1st worker 10 − 0 = <strong>10</strong>; 2nd 25 − 10 = <strong>15</strong>; 3rd 45 − 25 = <strong>20</strong>; 4th 60 − 45 = <strong>15</strong>; 5th 70 − 60 = <strong>10</strong>. Step 2: Average product with 4 workers = 60 ÷ 4 = <strong>15</strong> bagels per worker. Step 3: MP rises to 20 at the 3rd worker, then falls to 15 — diminishing returns begin after the <strong>3rd worker</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Total fixed cost is $100 a day. Total cost is $100, $140, $170, $210, $260 at output 0, 10, 20, 30, 40. Calculate marginal cost for each 10-unit step.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 0→10: (140 − 100) ÷ 10 = <strong>$4</strong> per bagel. Step 2: 10→20: (170 − 140) ÷ 10 = <strong>$3</strong>. Step 3: 20→30: (210 − 170) ÷ 10 = <strong>$4</strong>. Step 4: 30→40: (260 − 210) ÷ 10 = <strong>$5</strong>. Step 5: MC falls then rises — the U-shape that comes from diminishing returns.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> At output 20, total cost is $170 and total fixed cost is $100. Calculate ATC, AVC, and AFC, and check that AVC + AFC = ATC.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: ATC = 170 ÷ 20 = <strong>$8.50</strong>. Step 2: Variable cost = 170 − 100 = $70, so AVC = 70 ÷ 20 = <strong>$3.50</strong>. Step 3: AFC = 100 ÷ 20 = <strong>$5.00</strong>. Step 4: Check: 3.50 + 5.00 = <strong>$8.50</strong> = ATC.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> At output 30, total cost is $210 (fixed cost $100). Calculate ATC, AVC, and AFC. Is ATC rising or falling compared with output 20, and why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: ATC = 210 ÷ 30 = <strong>$7.00</strong>. Step 2: AVC = (210 − 100) ÷ 30 = 110 ÷ 30 = <strong>$3.67</strong>. Step 3: AFC = 100 ÷ 30 = <strong>$3.33</strong>. Step 4: ATC fell from $8.50 to $7.00 because AFC fell from $5.00 to $3.33 — spreading the fixed rent over more bagels outweighed the small rise in AVC.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A bakery's average variable cost is $3.50 and the market price of a bagel is $3.00. Fixed cost is $100 a day. Should it open today? Explain with numbers.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Price ($3.00) is below AVC ($3.50), so every bagel loses $0.50 on top of the rent. Step 2: <strong>Shut down</strong> for the day. Step 3: Loss if shut down = the $100 fixed cost. Loss if open = $100 plus $0.50 per bagel — bigger. Step 4: Fixed costs are paid either way, so they do not change the decision.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A firm doubles in size and its average total cost falls from $12 to $9 a unit. Later it doubles again and average total cost rises from $9 to $11. Name each effect and explain one reason for each.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: The fall from $12 to $9 is <strong>economies of scale</strong> — for example, bulk buying of flour at a discount, or workers specializing. Step 2: The rise from $9 to $11 is <strong>diseconomies of scale</strong> — for example, layers of management slowing decisions, or a factory too crowded to run well. Step 3: Average cost is U-shaped in the long run for exactly this reason.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In the short run, at least one input is:",
      "choices": ["Variable", "Fixed", "Free", "Unnecessary"],
      "answer": 1,
      "explanation": "Correct: (b). The short run is defined by a fixed input, like the bakery's one oven. (a) describes the long run, where all inputs vary. (c) No input is free. (d) Every input matters."
    },
    {
      "q": "Total product for 0–5 workers is 0, 10, 25, 45, 60, 70. The marginal product of the 3rd worker is:",
      "choices": ["10", "15", "20", "45"],
      "answer": 2,
      "explanation": "Correct: (c). MP of the 3rd worker = 45 − 25 = 20. (a) is the MP of the 1st worker. (b) is the MP of the 2nd and 4th workers. (d) is total product with 3 workers."
    },
    {
      "q": "Diminishing marginal returns begin after which worker in the bakery example?",
      "choices": ["The 1st worker", "The 2nd worker", "The 3rd worker", "The 5th worker"],
      "answer": 2,
      "explanation": "Correct: (c). MP rises 10, 15, 20 and then falls to 15 — the turn comes after the 3rd worker. (a) and (b) are before the peak. (d) is two workers too late."
    },
    {
      "q": "Total cost is $170 at output 20 and $210 at output 30. Marginal cost per unit over that step is:",
      "choices": ["$2", "$3", "$4", "$7"],
      "answer": 2,
      "explanation": "Correct: (c). (210 − 170) ÷ 10 = $4 per bagel. (a) would need a $20 cost rise. (b) is the MC of the previous step. (d) is the ATC at output 30, not MC."
    },
    {
      "q": "At output 20, TC is $170 and TFC is $100. Average variable cost is:",
      "choices": ["$8.50", "$5.00", "$3.50", "$1.70"],
      "answer": 2,
      "explanation": "Correct: (c). TVC = 170 − 100 = $70; AVC = 70 ÷ 20 = $3.50. (a) is ATC. (b) is AFC. (d) divides total cost by 100."
    },
    {
      "q": "The marginal cost curve crosses the average total cost curve at:",
      "choices": ["ATC's maximum", "ATC's minimum", "Zero output", "The point where fixed cost is zero"],
      "answer": 1,
      "explanation": "Correct: (b). MC pulls the average down while it is below it and up while it is above it, so they meet at ATC's minimum. (a) ATC has no maximum in this range. (c) MC is undefined at zero output. (d) Fixed cost is never zero in the short run."
    },
    {
      "q": "A firm should shut down in the short run when:",
      "choices": ["Price is below average total cost", "Price is below average variable cost", "Price is above marginal cost", "Fixed costs are high"],
      "answer": 1,
      "explanation": "Correct: (b). If price does not cover AVC, every unit adds to the loss. (a) A firm can lose money and still be right to stay open if price covers AVC. (c) Price above MC is normal, not a shutdown signal. (d) Fixed costs are paid either way."
    },
    {
      "q": "Average cost falls as a firm grows because of bulk buying. This is:",
      "choices": ["Diseconomies of scale", "Economies of scale", "Diminishing returns", "The shutdown rule"],
      "answer": 1,
      "explanation": "Correct: (b). Economies of scale are cost advantages of size. (a) is cost disadvantages of size. (c) is about adding a variable input to a fixed one. (d) is about whether to produce at all."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Production & Costs: Quick Reference</h3>\n<p><strong>Core idea:</strong> Production decides costs. Diminishing returns make marginal cost rise, and marginal cost drags average cost with it.</p>\n<p><strong>Worked anchors:</strong> Workers 0–5 → TP 0, 10, 25, 45, 60, 70; MP 10, 15, 20, 15, 10 (diminishing after the 3rd worker); AP at 4 workers = 15.</p>\n<div class=\"formula\">TC = TFC + TVC &nbsp;|&nbsp; MC = ΔTC ÷ ΔQ &nbsp;|&nbsp; ATC = TC ÷ Q &nbsp;|&nbsp; AVC + AFC = ATC</div>\n<p><strong>Cost table (TFC $100):</strong> Q 0, 10, 20, 30, 40 → TC $100, $140, $170, $210, $260; MC $4, $3, $4, $5. At Q = 20: ATC $8.50, AVC $3.50, AFC $5.00. At Q = 30: ATC $7.00, AVC $3.67, AFC $3.33.</p>\n<p><strong>Rules:</strong> MC crosses ATC and AVC at their minimums. Shutdown in the short run if P &lt; AVC. Long run: economies of scale, then diseconomies of scale.</p>\n<p><strong>Watch out:</strong> Marginal is the next unit; average is all units so far. Fixed costs are sunk in the short run — ignore them in the shutdown decision.</p>\n<p><strong>Self-check:</strong> A firm's TC is $500 at Q = 50 and $620 at Q = 60, with TFC $200. Find MC, ATC, AVC, AFC at Q = 60. (Check: MC $12, ATC $10.33, AVC $7.00, AFC $3.33.)</p>\n"
};
