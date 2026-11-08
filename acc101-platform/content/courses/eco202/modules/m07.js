module.exports = {
  "number": 7,
  "slug": "growth-theory-solow-model",
  "title": "Growth Theory: The Solow Model",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why capital accumulation alone cannot sustain long-run growth.",
    "Use the Solow production function y = √k in per-worker terms.",
    "Solve for the steady-state capital stock, output, consumption, and investment.",
    "Compare the steady state with the golden-rule capital stock.",
    "Explain how saving rates, population growth, and technology shift the steady state."
  ],
  "sections": [
    {
      "heading": "Why Growth Needs More Than Saving",
      "html": "<p>Some countries are twenty times richer per person than others, and some that were poor a generation ago are rich now. The <strong>Solow model</strong> is the workhorse that explains why. Its starting point is a production function with diminishing returns to capital: each extra machine adds less output than the one before. That single fact drives the model's most important result — piling up capital can raise output for a while, but it cannot keep growth going forever, because the extra output from each new machine shrinks while the cost of replacing worn-out machines keeps growing.</p><p>To keep the arithmetic clean, the model works <strong>per worker</strong>. Let <strong>k</strong> be capital per worker and <strong>y</strong> output per worker, with y = √k (the square-root production function: y = k<sup>0.5</sup>). If k = 16, y = √16 = 4. If k = 36, y = 6. Doubling capital from 16 to 32 raises output only from 4 to about 5.66 — diminishing returns, visible in one line of arithmetic.</p><div class=\"formula\">y = √k &nbsp;|&nbsp; Diminishing returns: each extra unit of k adds less y</div>\n<p>Each year, the economy invests a fraction <strong>s</strong> of its output (the saving rate), so investment per worker is s × y = s√k. But capital also wears out (depreciation rate <strong>δ</strong>) and must be spread over new workers (population growth <strong>n</strong>), so <strong>break-even investment</strong> — the investment needed just to keep k constant — is (n + δ)k. Capital per worker grows when actual investment exceeds break-even, and shrinks when it falls short. The <strong>steady state</strong> is where they are equal: s√k* = (n + δ)k*.</p><p>Worked example: s = 0.2, n = 0.02, δ = 0.03, so n + δ = 0.05. Steady state needs 0.2√k* = 0.05k*. Divide both sides by √k*: 0.2 = 0.05√k*, so √k* = 0.2 ÷ 0.05 = 4, and k* = <strong>16</strong>. Then y* = √16 = <strong>4</strong>, investment per worker i* = s × y* = 0.2 × 4 = <strong>0.8</strong> (check: (n + δ)k* = 0.05 × 16 = 0.8 — it balances), and consumption per worker c* = y* − i* = 4 − 0.8 = <strong>3.2</strong>. Below k*, investment exceeds break-even and k rises toward 16; above k*, break-even exceeds investment and k falls back. The steady state is stable.</p><div class=\"formula\">Steady state: s·f(k*) = (n + δ)k* &nbsp;|&nbsp; s = 0.2, n + δ = 0.05 → k* = 16, y* = 4, c* = 3.2</div>"
    },
    {
      "heading": "What Moves the Steady State",
      "html": "<p>Raise the saving rate and the steady state rises — but with a catch. With s = 0.3 instead of 0.2 (n + δ still 0.05): 0.3√k* = 0.05k*, so √k* = 0.3 ÷ 0.05 = 6, k* = <strong>36</strong>, y* = <strong>6</strong>, i* = 0.3 × 6 = 1.8, and c* = 6 − 1.8 = <strong>4.2</strong>. Saving more raised long-run consumption from 3.2 to 4.2 — but only by cutting consumption <em>today</em> to fund the extra investment. A higher saving rate buys a higher steady state; it does not buy permanent growth, because once k reaches its new steady state, growth stops again.</p><p>Population growth and depreciation do the opposite: a higher n or δ raises break-even investment, so the steady state falls. If n + δ rose from 0.05 to 0.10 with s = 0.2, then √k* = 0.2 ÷ 0.10 = 2, k* = 4, y* = 2, and c* = 2 − 0.4 = 1.6. Fast-growing populations must invest more just to equip each new worker, leaving less output for consumption. That is one reason high population growth and low income so often travel together.</p><div class=\"callout\"><strong>Key idea:</strong> Saving shifts the <em>level</em> of output, not its long-run <em>growth rate</em>. In Solow, only technological progress raises growth permanently — which is the next section.</div>"
    },
    {
      "heading": "The Golden Rule: How Much Should We Save?",
      "html": "<p>More saving is not always better for the people living in the steady state. Consumption per worker is c* = y* − (n + δ)k*, and it is maximized at the <strong>golden-rule</strong> capital stock, where the marginal product of capital equals n + δ. With y = √k, the marginal product of capital is MPK = 0.5 ÷ √k. Set MPK = n + δ = 0.05: 0.5 ÷ √k = 0.05, so √k = 0.5 ÷ 0.05 = 10, and k<sub>gold</sub> = <strong>100</strong>. Then y<sub>gold</sub> = 10, break-even investment is 0.05 × 100 = 5, and c<sub>gold</sub> = 10 − 5 = <strong>5</strong> — the most consumption any steady state can deliver.</p><p>The golden-rule saving rate is the one that sustains k<sub>gold</sub>: s<sub>gold</sub> = (n + δ)k<sub>gold</sub> ÷ y<sub>gold</sub> = 5 ÷ 10 = <strong>0.5</strong>. Notice the pattern: with this production function (capital's share α = 0.5), the golden-rule saving rate equals α. Our example economy saves 0.2 — <em>below</em> the golden rule — so it is <strong>dynamically inefficient in the other direction</strong>: saving more would raise consumption in the long run (4.2 at s = 0.3, heading toward 5 at s = 0.5). Saving above the golden rule would be truly wasteful — cutting consumption both now and forever.</p><div class=\"formula\">Golden rule: MPK = n + δ &nbsp;|&nbsp; k<sub>gold</sub> = 100, y<sub>gold</sub> = 10, c<sub>gold</sub> = 5, s<sub>gold</sub> = 0.5</div>"
    },
    {
      "heading": "Technology: The Only Source of Lasting Growth",
      "html": "<p>So what <em>does</em> grow forever in the Solow model? <strong>Technological progress</strong> — better ways of producing, from the steam engine to the spreadsheet to a better seed variety. Technology shifts the whole production function up, so the same k produces more y, year after year. In the steady state with technological progress, output per worker grows at the rate of technological progress, and that is why living standards in rich countries roughly double every generation: not because they save more each year, but because they keep getting better at producing.</p><p>That leaves the practical question: where does technology come from? The Solow model treats it as falling from the sky — <strong>exogenous</strong> growth. Later theories (<strong>endogenous growth</strong>) make it a choice: education, research, patents, and institutions that reward ideas. The policy moral is the same either way: a country that educates its people, protects property rights, and funds research grows faster than one that merely builds more machines — because machines run into diminishing returns, and ideas do not.</p><div class=\"callout\"><strong>Key idea:</strong> Ideas are non-rival — my use of an idea does not stop you using it. That is why technology, unlike capital, can drive growth without running into diminishing returns.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p><ul><li>y = √k; diminishing returns to capital per worker.</li><li>Steady state s√k* = (n + δ)k*: s = 0.2, n + δ = 0.05 → k* = 16, y* = 4, c* = 3.2.</li><li>Higher s raises the steady state (s = 0.3 → k* = 36, y* = 6, c* = 4.2); higher n or δ lowers it.</li><li>Golden rule MPK = n + δ → k<sub>gold</sub> = 100, c<sub>gold</sub> = 5, s<sub>gold</sub> = 0.5.</li><li>Only technological progress sustains long-run growth in output per worker.</li></ul><div class=\"callout\"><strong>Common mistake:</strong> Saying “the country should save more to grow faster, forever.” Saving raises the level and the growth rate <em>while moving to</em> the new steady state — then growth stops. Permanent growth needs technology.</div><div class=\"callout\"><strong>Common mistake:</strong> Confusing the golden rule with “save as much as possible.” Saving above the golden rule (s &gt; 0.5 here) cuts consumption forever — more capital is not always better.</div><p><strong>Ready-to-Work link:</strong> When a country announces a savings drive, ask two questions: is it below its golden rule (then the drive helps), and is it investing in ideas as well as machines (then the growth can last)?</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Solow model",
      "def": "The growth model where capital accumulation, population growth, and technology determine output per worker."
    },
    {
      "term": "Capital per worker (k)",
      "def": "The capital stock divided by the number of workers."
    },
    {
      "term": "Output per worker (y)",
      "def": "Output divided by the number of workers; y = √k in this module."
    },
    {
      "term": "Diminishing returns",
      "def": "Each extra unit of capital adds less output than the one before it."
    },
    {
      "term": "Saving rate (s)",
      "def": "The fraction of output invested; 0.2 in the worked example."
    },
    {
      "term": "Depreciation rate (δ)",
      "def": "The fraction of the capital stock that wears out each year; 0.03 in the example."
    },
    {
      "term": "Population growth (n)",
      "def": "The growth rate of the labour force; 0.02 in the example."
    },
    {
      "term": "Break-even investment",
      "def": "(n + δ)k; the investment needed to keep capital per worker constant."
    },
    {
      "term": "Steady state (k*)",
      "def": "Where investment equals break-even investment and k stops changing."
    },
    {
      "term": "Golden rule",
      "def": "The capital stock that maximizes steady-state consumption: MPK = n + δ."
    },
    {
      "term": "Marginal product of capital (MPK)",
      "def": "The extra output from one more unit of capital; 0.5 ÷ √k here."
    },
    {
      "term": "Technological progress",
      "def": "Improvements in how output is produced; the only source of lasting growth in Solow."
    },
    {
      "term": "Exogenous growth",
      "def": "Growth driven by technology that the model takes as given."
    },
    {
      "term": "Endogenous growth",
      "def": "Growth theory where technology comes from choices like education and research."
    },
    {
      "term": "Dynamic efficiency",
      "def": "Saving at or below the golden rule, so no generation could consume more by saving less."
    }
  ],
  "video": {
    "title": "The Solow Model and the Steady State",
    "embedUrl": "https://www.youtube.com/embed/LQR7rO-I96A",
    "note": "Marginal Revolution University on the Solow model — the steady state, why capital runs into diminishing returns, and why growth needs ideas. Watch it with the module's numbers (k* = 16, y* = 4) in front of you.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> y = √k, s = 0.2, n = 0.02, δ = 0.03. Find the steady-state k*, y*, i*, and c*, showing every step and checking that investment equals break-even investment.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: n + δ = 0.05. Steady state: 0.2√k* = 0.05k*. Step 2: Divide by √k*: 0.2 = 0.05√k*, so √k* = 4 and k* = <strong>16</strong>. Step 3: y* = √16 = <strong>4</strong>. Step 4: i* = 0.2 × 4 = <strong>0.8</strong>; check (n + δ)k* = 0.05 × 16 = 0.8. It balances. Step 5: c* = 4 − 0.8 = <strong>3.2</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> With the same production function and n + δ = 0.05, the saving rate rises to s = 0.3. (a) Find the new k*, y*, and c*. (b) Did long-run consumption rise or fall?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 0.3√k* = 0.05k*, so √k* = 0.3 ÷ 0.05 = 6 and k* = <strong>36</strong>. Step 2: y* = 6, i* = 0.3 × 6 = 1.8, c* = 6 − 1.8 = <strong>4.2</strong>. Step 3: Consumption <strong>rose</strong> from 3.2 to 4.2 — this economy was saving below the golden rule, so saving more helped in the long run (at the cost of lower consumption during the transition).</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Find the golden-rule capital stock for y = √k with n + δ = 0.05. Compute k<sub>gold</sub>, y<sub>gold</sub>, c<sub>gold</sub>, and s<sub>gold</sub>.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: MPK = 0.5 ÷ √k. Set MPK = 0.05: 0.5 ÷ √k = 0.05, so √k = 10 and k<sub>gold</sub> = <strong>100</strong>. Step 2: y<sub>gold</sub> = √100 = <strong>10</strong>. Step 3: Break-even investment = 0.05 × 100 = 5, so c<sub>gold</sub> = 10 − 5 = <strong>5</strong>. Step 4: s<sub>gold</sub> = 5 ÷ 10 = <strong>0.5</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Suppose k = 9 today, with s = 0.2 and n + δ = 0.05. (a) What are y, investment per worker, and break-even investment? (b) Will k rise or fall, and toward what value?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: y = √9 = <strong>3</strong>. Step 2: Investment = 0.2 × 3 = <strong>0.6</strong>. Step 3: Break-even = 0.05 × 9 = <strong>0.45</strong>. Step 4: Investment (0.6) exceeds break-even (0.45), so k <strong>rises</strong>, toward the steady state k* = 16.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Population growth rises so n + δ = 0.10, with s = 0.2 and y = √k. (a) Find the new steady-state k*, y*, and c*. (b) Explain in one sentence why consumption fell.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: 0.2√k* = 0.10k*, so √k* = 2 and k* = <strong>4</strong>. Step 2: y* = 2, i* = 0.2 × 2 = 0.4, c* = 2 − 0.4 = <strong>1.6</strong>. Step 3: Faster population growth raises break-even investment, so more output must go to equipping new workers and less is left to consume.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two countries have the same saving rate and population growth, but Country A invests heavily in education and research while Country B does not. Using the Solow model, explain (a) what happens to each country's steady state in the short run, and (b) why their long-run growth rates differ.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) In the short run, both move toward similar steady states from capital accumulation — education and research take time to show up. Step 2: (b) In the long run, Country A's technology grows faster, shifting its production function up year after year, so its output per worker keeps growing while Country B's levels off at its steady state. Technology, not saving, is the lasting growth engine.</p>"
    }
  ],
  "quiz": [
    {
      "q": "In the Solow model with y = √k, s = 0.2, n + δ = 0.05, the steady-state k* is:",
      "choices": [
        "4",
        "9",
        "16",
        "25"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 0.2√k* = 0.05k* gives √k* = 4, so k* = 16. (a) is the answer when n + δ = 0.10. (b) is √k* = 3, which would need s = 0.15. (d) is √k* = 5, which would need s = 0.25."
    },
    {
      "q": "At that steady state, output per worker y* and consumption per worker c* are:",
      "choices": [
        "y* = 4, c* = 3.2",
        "y* = 6, c* = 4.2",
        "y* = 10, c* = 5",
        "y* = 2, c* = 1.6"
      ],
      "answer": 0,
      "explanation": "Correct: (a). y* = √16 = 4; i* = 0.8; c* = 4 − 0.8 = 3.2. (b) is the s = 0.3 steady state. (c) is the golden rule. (d) is the n + δ = 0.10 steady state."
    },
    {
      "q": "If the saving rate rises from 0.2 to 0.3 (n + δ = 0.05), the new steady-state k* is:",
      "choices": [
        "16",
        "25",
        "36",
        "100"
      ],
      "answer": 2,
      "explanation": "Correct: (c). √k* = 0.3 ÷ 0.05 = 6, so k* = 36. (a) is the old steady state. (b) would need s = 0.25. (d) is the golden-rule capital stock."
    },
    {
      "q": "The golden-rule capital stock in this model (MPK = n + δ = 0.05) is:",
      "choices": [
        "16",
        "36",
        "64",
        "100"
      ],
      "answer": 3,
      "explanation": "Correct: (d). 0.5 ÷ √k = 0.05 gives √k = 10, k = 100. (a) is the s = 0.2 steady state. (b) is the s = 0.3 steady state. (c) would need MPK = 0.0625."
    },
    {
      "q": "At the golden rule, consumption per worker is:",
      "choices": [
        "3.2",
        "4.2",
        "5",
        "10"
      ],
      "answer": 2,
      "explanation": "Correct: (c). y = 10, break-even investment is 5, so c = 5. (a) is consumption at s = 0.2. (b) is consumption at s = 0.3. (d) is output, not consumption."
    },
    {
      "q": "In the Solow model, a higher saving rate raises:",
      "choices": [
        "The long-run growth rate forever",
        "The steady-state level of output, but not its long-run growth rate",
        "The depreciation rate",
        "The population growth rate"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Saving shifts the level; only technology raises lasting growth. (a) is the common mistake this module corrects. (c) and (d) are parameters saving does not change."
    },
    {
      "q": "If k is below its steady state, capital per worker will:",
      "choices": [
        "Fall, because break-even exceeds investment",
        "Rise, because investment exceeds break-even",
        "Stay the same",
        "Fall to zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Below k*, s√k > (n + δ)k, so k grows toward the steady state. (a) describes k above the steady state. (c) holds only at the steady state. (d) never happens in this model."
    },
    {
      "q": "The only source of sustained long-run growth in output per worker in the Solow model is:",
      "choices": [
        "More saving",
        "Faster population growth",
        "Technological progress",
        "More government spending"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Technology shifts the production function up; the others change the level or lower it. (a) raises the level once. (b) lowers the steady state. (d) is a demand tool, not a growth engine."
    }
  ],
  "studyGuide": "\n<h3>Module 7 — Growth Theory: The Solow Model: Quick Reference</h3>\n<p><strong>Core idea:</strong> Capital runs into diminishing returns, so saving raises the level of output but only technology raises its long-run growth rate.</p>\n<div class=\"formula\">y = √k &nbsp;|&nbsp; Steady state: s√k* = (n + δ)k* &nbsp;|&nbsp; Golden rule: MPK = n + δ</div>\n<p><strong>Worked anchors:</strong> s = 0.2, n + δ = 0.05 → k* = <strong>16</strong>, y* = <strong>4</strong>, i* = <strong>0.8</strong>, c* = <strong>3.2</strong>. s = 0.3 → k* = <strong>36</strong>, y* = <strong>6</strong>, c* = <strong>4.2</strong>. Golden rule: k = <strong>100</strong>, y = <strong>10</strong>, c = <strong>5</strong>, s = <strong>0.5</strong>. n + δ = 0.10 → k* = <strong>4</strong>, c* = <strong>1.6</strong>.</p>\n<p><strong>Watch out:</strong> Saving changes the level, not the growth rate; saving above the golden rule cuts consumption forever.</p>\n<p><strong>Self-check:</strong> Solve s√k* = (n + δ)k* for s = 0.2, n + δ = 0.05 from memory, then check k* = 16.</p>\n"
};
