// eco201 - Module 3: Production Theory: Technology & Inputs
module.exports = {
  "number": 3,
  "slug": "production-theory-technology-inputs",
  "title": "Production Theory: Technology & Inputs",
  "estTime": "3–4 hours",
  "objectives": [
    "Define a production function and distinguish the short run from the long run.",
    "Compute total, marginal, and average product from a production table.",
    "State the law of diminishing marginal returns and find where it sets in.",
    "Draw isoquants, define the marginal rate of technical substitution (MRTS), and explain its shape.",
    "Describe returns to scale and distinguish them from diminishing returns."
  ],
  "sections": [
    {
      "heading": "The Production Function: Inputs In, Output Out",
      "html": "<p>A <strong>production function</strong> is a recipe: it says how much output a firm gets from given quantities of inputs. Write it as Q = f(L, K), where L is labor, K is capital, and Q is output. The two inputs are not the same kind of choice in every time frame. In the <strong>short run</strong>, at least one input is fixed — usually capital, like the size of a bakery's ovens — and the firm can only vary labor. In the <strong>long run</strong>, all inputs can change: the firm can build a bigger bakery.</p>\n<p>Our worked example is a small workshop with fixed capital. Labor and output are:</p>\n<p>L: 0, 1, 2, 3, 4, 5, 6 &nbsp;|&nbsp; Q: 0, 20, 45, 65, 80, 90, 95</p>\n<p>With no workers, nothing is produced. The first worker produces 20 units; the second adds 25; then the additions shrink. That pattern is the whole story of this module.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Short run vs. long run is not about the calendar — it is about which inputs are fixed. A bakery's ovens are fixed this month and variable over two years.</div>"
    },
    {
      "heading": "Total, Marginal, and Average Product",
      "html": "<p><strong>Total product</strong> (TP) is total output: the Q column above. <strong>Marginal product</strong> (MP) is the extra output from one more unit of an input: MP<sub>L</sub> = ΔQ ÷ ΔL. From the table: the marginal products are 20 (first worker), 25, 20, 15, 10, 5. <strong>Average product</strong> (AP) is output per unit of input: AP<sub>L</sub> = Q ÷ L. At L = 4, AP = 80 ÷ 4 = 20 units per worker; at L = 2, AP = 45 ÷ 2 = 22.5; at L = 6, AP = 95 ÷ 6 ≈ 15.83.</p>\n<p>Two relationships tie them together. First, MP crosses AP at AP's maximum: while MP is above AP, adding a worker pulls the average up; when MP falls below AP, it drags the average down. Here AP peaks at L = 2 (22.5) and the MP of the third worker (20) is already below it, so AP falls from L = 2 onward. Second, when MP is falling, TP is still rising — just more slowly. Total product only falls if marginal product turns negative, which it never does in our table.</p>\n<div class=\"formula\">MP<sub>L</sub> = ΔQ ÷ ΔL &nbsp;|&nbsp; AP<sub>L</sub> = Q ÷ L &nbsp;|&nbsp; MP crosses AP at AP's maximum</div>"
    },
    {
      "heading": "Diminishing Marginal Returns",
      "html": "<p>The <strong>law of diminishing marginal returns</strong> says that as more of one input is added while the others are held fixed, the extra output from each additional unit eventually falls. In our table, marginal product rises from 20 to 25 (the first two workers specialize and help each other), then falls: 20, 15, 10, 5. Diminishing returns set in after the second worker — the third worker is the first whose marginal product (20) is below the previous worker's (25).</p>\n<p>Why does it happen? The fixed capital is the bottleneck. One oven can only serve so many bakers; each extra baker has less oven time, less counter space, and more crowding. The key word is <em>eventually</em>: marginal product can rise at first, but with a fixed input it must fall in the end. Diminishing returns is a short-run idea — it holds other inputs fixed. Do not confuse it with returns to scale, which is a long-run idea and comes in the last section.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Diminishing returns does not mean output falls. It means output grows more slowly. In our table, output keeps rising all the way to 95 — the sixth worker still adds 5 units.</div>"
    },
    {
      "heading": "Isoquants and the Marginal Rate of Technical Substitution",
      "html": "<p>In the long run both inputs vary, so the firm can trade labor for capital. An <strong>isoquant</strong> joins all (L, K) combinations that produce the same output — the production side's version of an indifference curve. Isoquants slope down, never cross, and are usually convex to the origin. A common production function is the Cobb-Douglas form Q = 10 × L<sup>0.5</sup> × K<sup>0.5</sup>. With L = 9 and K = 16, Q = 10 × 3 × 4 = 120. With L = 4 and K = 36, Q = 10 × 2 × 6 = 120 as well — both points sit on the Q = 120 isoquant.</p>\n<p>The <strong>marginal rate of technical substitution</strong> (MRTS) is how much capital the firm can give up for one more unit of labor while keeping output the same: MRTS = MP<sub>L</sub> ÷ MP<sub>K</sub>. For Q = 10 × L<sup>0.5</sup> × K<sup>0.5</sup>, MP<sub>L</sub> = 5 × L<sup>−0.5</sup> × K<sup>0.5</sup> and MP<sub>K</sub> = 5 × L<sup>0.5</sup> × K<sup>−0.5</sup>, so MRTS = K ÷ L. At (L = 9, K = 16), MRTS = 16 ÷ 9 ≈ 1.78: one more worker replaces about 1.78 units of capital. At (L = 4, K = 36), MRTS = 36 ÷ 4 = 9. As labor grows scarcer relative to capital, each worker replaces more capital — MRTS diminishes along an isoquant, which is why isoquants bow inward. The mirror image of the consumer's MRS, with the same logic: the scarcer input is worth more.</p>\n<div class=\"formula\">MRTS = MP<sub>L</sub> ÷ MP<sub>K</sub> &nbsp;|&nbsp; For Q = 10 L<sup>0.5</sup> K<sup>0.5</sup>: MRTS = K ÷ L</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Q = f(L, K). Short run: at least one input fixed. Long run: all inputs variable.</li>\n<li>Our table: Q = 0, 20, 45, 65, 80, 90, 95 for L = 0–6; MP = 20, 25, 20, 15, 10, 5; AP at L = 4 is 20.</li>\n<li>Diminishing returns set in after the second worker (MP falls from 25 to 20).</li>\n<li>Isoquants join equal-output input combinations; MRTS = MP<sub>L</sub> ÷ MP<sub>K</sub> = K ÷ L for our Cobb-Douglas example, 1.78 at (9, 16).</li>\n<li>Returns to scale: doubling both inputs doubles output (constant), more than doubles it (increasing), or less than doubles it (decreasing). For Q = 10 L<sup>0.5</sup> K<sup>0.5</sup>, doubling both inputs multiplies output by √2 × √2 = 2 — constant returns to scale.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Confusing diminishing returns with decreasing returns to scale. Diminishing returns varies one input with the other fixed (short run). Returns to scale varies all inputs together (long run). A firm can have diminishing marginal returns to labor and constant returns to scale at the same time — ours does.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying marginal product is falling so the firm should stop hiring. A firm hires while the extra output is worth more than the wage — Module 8 does that calculation. Falling MP is not the same as unprofitable MP.</div>\n<p><strong>Ready-to-Work link:</strong> Production theory is the input side; Module 4 turns it into money. The shape of marginal product decides the shape of marginal cost — falling MP means rising MC, and that is why cost curves are U-shaped.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Production function", "def": "A formula Q = f(L, K) giving the maximum output from given quantities of inputs." },
    { "term": "Short run", "def": "A period in which at least one input (usually capital) is fixed." },
    { "term": "Long run", "def": "A period in which all inputs can be varied." },
    { "term": "Total product (TP)", "def": "Total output produced with given inputs." },
    { "term": "Marginal product (MP)", "def": "The extra output from one more unit of an input: MP = ΔQ / ΔL." },
    { "term": "Average product (AP)", "def": "Output per unit of an input: AP = Q / L." },
    { "term": "Law of diminishing marginal returns", "def": "Adding more of one input while holding others fixed eventually yields smaller and smaller extra output." },
    { "term": "Isoquant", "def": "A curve joining all combinations of labor and capital that produce the same output." },
    { "term": "Marginal rate of technical substitution (MRTS)", "def": "How much capital a firm can give up for one more unit of labor at constant output; MRTS = MPL / MPK." },
    { "term": "Cobb-Douglas production function", "def": "A production function of the form Q = A·L^a·K^b; our example is Q = 10·L^0.5·K^0.5." },
    { "term": "Returns to scale", "def": "How output changes when all inputs change together: increasing, constant, or decreasing." },
    { "term": "Constant returns to scale", "def": "Doubling all inputs exactly doubles output; true for Q = 10·L^0.5·K^0.5." },
    { "term": "Increasing returns to scale", "def": "Doubling all inputs more than doubles output." },
    { "term": "Decreasing returns to scale", "def": "Doubling all inputs less than doubles output." }
  ],
  "video": {
    "title": "Diminishing Returns and the Production Function- Micro Topic 3.1",
    "embedUrl": "https://www.youtube.com/embed/xLSRMt-wWAM",
    "note": "Jacob Clifford (ACDC Econ) works through diminishing returns and the production function with the same total/marginal/average product tables this module uses. Watch it, then rebuild our table from memory.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A workshop's output by labor is L = 0–6, Q = 0, 20, 45, 65, 80, 90, 95. Compute the marginal product of each worker.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: MP = change in Q. Step 2: Worker 1: 20 − 0 = 20. Step 3: Worker 2: 45 − 20 = 25. Step 4: Worker 3: 65 − 45 = 20. Step 5: Worker 4: 80 − 65 = 15. Step 6: Worker 5: 90 − 80 = 10. Step 7: Worker 6: 95 − 90 = 5. So MP = 20, 25, 20, 15, 10, 5.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Using the same table, compute average product at L = 2, L = 4, and L = 6. At which labor level is average product highest, and why does it fall after that?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: AP at L = 2 is 45 ÷ 2 = 22.5. Step 2: AP at L = 4 is 80 ÷ 4 = 20. Step 3: AP at L = 6 is 95 ÷ 6 ≈ 15.83. Step 4: AP is highest at L = 2 (check L = 1: 20, L = 3: 65 ÷ 3 ≈ 21.67 — lower than 22.5). Step 5: It falls after L = 2 because the marginal product of the third worker (20) is below the average (22.5), dragging the average down.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> At what point do diminishing marginal returns set in for this workshop? Explain in one sentence using the marginal product numbers.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: MP rises from 20 to 25, then falls to 20, 15, 10, 5. Step 2: Diminishing returns set in after the second worker — the third worker is the first whose marginal product (20) is below the previous worker's (25), because the fixed capital becomes a bottleneck.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Production is Q = 10 × L<sup>0.5</sup> × K<sup>0.5</sup>. (a) What is output at L = 9, K = 16? (b) What is output at L = 4, K = 36? (c) What does your answer say about these two input combinations?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: At (9, 16): Q = 10 × √9 × √16 = 10 × 3 × 4 = 120. Step 2: At (4, 36): Q = 10 × √4 × √36 = 10 × 2 × 6 = 120. Step 3: Both combinations produce 120, so they sit on the same isoquant — the firm can trade 5 workers for 20 units of capital and produce the same output.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> For Q = 10 × L<sup>0.5</sup> × K<sup>0.5</sup>, compute the MRTS at (L = 9, K = 16) and at (L = 4, K = 36). What does the change tell you?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: MRTS = K ÷ L for this function. Step 2: At (9, 16): MRTS = 16 ÷ 9 ≈ 1.78 units of capital per worker. Step 3: At (4, 36): MRTS = 36 ÷ 4 = 9. Step 4: MRTS rises as labor becomes scarcer relative to capital — each worker is worth more capital when workers are few. That is diminishing MRTS along the isoquant.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> For Q = 10 × L<sup>0.5</sup> × K<sup>0.5</sup>, double both inputs from L = 9, K = 16 to L = 18, K = 32. What is the new output, and what kind of returns to scale is this?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Original output is 120. Step 2: New output = 10 × √18 × √32 = 10 × √(18 × 32) = 10 × √576 = 10 × 24 = 240. Step 3: Output exactly doubled (120 → 240) when both inputs doubled, so this is constant returns to scale.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In the short run, a firm:",
      "choices": [
        "Can change all of its inputs",
        "Has at least one fixed input, usually capital",
        "Cannot hire any workers",
        "Produces zero output"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The short run is defined by a fixed input, not by a calendar length. (a) describes the long run. (c) Labor is the variable input the firm does change. (d) Short-run firms produce plenty — they just cannot change their plant size."
    },
    {
      "q": "Output by labor is Q = 0, 20, 45, 65, 80, 90, 95 for L = 0–6. The marginal product of the third worker is:",
      "choices": [
        "25",
        "20",
        "15",
        "21.67"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MP of worker 3 = 65 − 45 = 20. (a) is the second worker's MP (45 − 20). (c) is the fourth worker's MP (80 − 65). (d) is average product at L = 3 (65 ÷ 3), not marginal product."
    },
    {
      "q": "Average product at L = 4 in the same table is:",
      "choices": [
        "15",
        "20",
        "22.5",
        "80"
      ],
      "answer": 1,
      "explanation": "Correct: (b). AP = Q ÷ L = 80 ÷ 4 = 20. (a) is the marginal product of the fourth worker. (c) is AP at L = 2. (d) is total product at L = 4."
    },
    {
      "q": "Diminishing marginal returns set in:",
      "choices": [
        "At the first worker",
        "After the second worker",
        "Only when marginal product turns negative",
        "Only in the long run"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MP rises 20 → 25, then falls 20, 15, 10, 5 — the third worker is the first with a lower MP than the one before. (a) MP rose for the second worker. (c) MP never turns negative here; diminishing returns is about falling MP, not negative MP. (d) Diminishing returns is a short-run idea — it holds other inputs fixed."
    },
    {
      "q": "An isoquant joins combinations of labor and capital that:",
      "choices": [
        "Cost the same amount",
        "Produce the same output",
        "Use the same amount of labor",
        "Earn the same profit"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Equal output is the definition of an isoquant. (a) describes an isocost line, not an isoquant. (c) A vertical line would hold labor constant. (d) Profit depends on prices and costs, not just output."
    },
    {
      "q": "For Q = 10·L^0.5·K^0.5, the MRTS at (L = 9, K = 16) is about:",
      "choices": [
        "9",
        "4",
        "1.78",
        "0.56"
      ],
      "answer": 2,
      "explanation": "Correct: (c). MRTS = K ÷ L = 16 ÷ 9 ≈ 1.78. (a) is the MRTS at (4, 36). (b) is not either ratio. (d) is the inverse, L ÷ K = 9 ÷ 16."
    },
    {
      "q": "Doubling both inputs in Q = 10·L^0.5·K^0.5 from (9, 16) to (18, 32) changes output from 120 to 240. This is:",
      "choices": [
        "Increasing returns to scale",
        "Decreasing returns to scale",
        "Constant returns to scale",
        "Diminishing marginal returns"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Output exactly doubled when both inputs doubled. (a) would need output above 240. (b) would need output below 240. (d) is a different concept — it varies one input while holding the other fixed."
    },
    {
      "q": "When marginal product is below average product, average product:",
      "choices": [
        "Rises",
        "Falls",
        "Stays the same",
        "Becomes zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A below-average addition drags the average down — the same logic as a low test score lowering a course average. (a) happens when MP is above AP. (c) happens only when MP equals AP. (d) AP falls gradually, it does not jump to zero."
    }
  ],
  "studyGuide": "\n<h3>Module 3 — Production Theory Quick Reference</h3>\n<p><strong>Core idea:</strong> Output comes from inputs; in the short run capital is fixed, so adding labor eventually yields less and less extra output.</p>\n<p><strong>Worked table:</strong> L = 0–6, Q = 0, 20, 45, 65, 80, 90, 95. MP = 20, 25, 20, 15, 10, 5. AP at L = 4 is 20; AP peaks at L = 2 (22.5).</p>\n<p><strong>Diminishing returns:</strong> set in after the second worker — MP falls from 25 to 20.</p>\n<div class=\"formula\">MP<sub>L</sub> = ΔQ ÷ ΔL &nbsp;|&nbsp; AP<sub>L</sub> = Q ÷ L &nbsp;|&nbsp; MRTS = MP<sub>L</sub> ÷ MP<sub>K</sub></div>\n<p><strong>Isoquants:</strong> equal-output input combinations. For Q = 10 L<sup>0.5</sup> K<sup>0.5</sup>, MRTS = K ÷ L; (9, 16) and (4, 36) both give Q = 120. Doubling both inputs doubles output — constant returns to scale.</p>\n<p><strong>Watch out:</strong> Diminishing returns (one input varies, short run) is not returns to scale (all inputs vary, long run).</p>\n<p><strong>Self-check:</strong> What is the marginal product of the fifth worker? (Answer: 10.)</p>\n"
};
