// eco201 - Module 8: Factor Markets & the Demand for Labor
module.exports = {
  "number": 8,
  "slug": "factor-markets-demand-for-labor",
  "title": "Factor Markets & the Demand for Labor",
  "estTime": "3–4 hours",
  "objectives": [
    "Define marginal revenue product (MRP) and marginal factor cost (MFC) and use them to find how many workers a firm hires.",
    "Explain why the labor demand curve slopes down and what shifts it.",
    "Compare competitive labor markets with monopsony and compute the monopsony outcome.",
    "Explain the substitution and income effects behind the labor supply curve.",
    "Apply the model to minimum wages, human capital, and compensating differentials."
  ],
  "sections": [
    {
      "heading": "Derived Demand: Labor Is Wanted for What It Produces",
      "html": "<p>The demand for labor is a <strong>derived demand</strong>: firms do not want workers for their own sake, they want the output workers produce. A firm's hiring rule is the same MR = MC logic as before, restated for inputs: hire workers while the extra revenue a worker brings in exceeds the extra cost of hiring them. The extra revenue is the <strong>marginal revenue product</strong> (MRP): MRP = MP<sub>L</sub> × MR, where MP<sub>L</sub> is the marginal product of labor and MR is the marginal revenue from selling the output. In perfect competition in the product market, MR = P, so MRP = MP<sub>L</sub> × P. The extra cost is the <strong>marginal factor cost</strong> (MFC): in a competitive labor market it is just the wage, w. Hire while MRP ≥ w; stop when MRP = w.</p>\n<p>Our worked firm sells its product at $5 and has this marginal product of labor: the 1st worker adds 10 units, the 2nd adds 8, the 3rd adds 6, the 4th adds 4, the 5th adds 2. Multiply by the $5 price to get MRP: $50, $40, $30, $20, $10. At a wage of $40 the firm hires 2 workers: the 2nd worker's MRP of $40 exactly covers the wage, and the 3rd worker's $30 does not. The firm's labor demand curve is its MRP curve — it slopes down because marginal product diminishes.</p>\n<div class=\"formula\">MRP = MP<sub>L</sub> × MR &nbsp;|&nbsp; Hire while MRP ≥ w &nbsp;|&nbsp; Competitive firm: MRP = MP<sub>L</sub> × P</div>"
    },
    {
      "heading": "What Shifts Labor Demand",
      "html": "<p>Anything that changes MRP shifts the labor demand curve. A higher product price raises MRP at every worker: if the price rises from $5 to $10, MRP becomes $100, $80, $60, $40, $20, and at a $40 wage the firm hires 4 workers instead of 2. Better technology that raises marginal product does the same. A higher price for a substitute input (say, machines become expensive) pushes firms toward labor; a higher price for a complement input (say, the raw material workers process becomes expensive) pushes the other way. The number of firms in the market matters too: market labor demand is the horizontal sum of all firms' MRP curves.</p>\n<p>The wage itself does not shift labor demand — it moves the firm along the MRP curve. At a wage of $25 our firm hires 3 workers (the 3rd worker's MRP is $30, the 4th's is $20); at $40 it hires 2; at $50 it hires 1 (the 1st worker's MRP is exactly $50). That is the labor demand curve in action: higher wages, fewer workers hired, all else equal.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Wage = movement along. Product price, technology, and input prices = shift. The same along-vs.-shift discipline as Module 2, applied to a factor market.</div>"
    },
    {
      "heading": "Monopsony: When the Firm Sets the Wage",
      "html": "<p>A <strong>monopsony</strong> is a labor market with a single buyer of labor — a remote town's only factory, or a hospital that is the only employer of nurses for miles. The monopsonist faces the whole market labor supply curve, which slopes up: to hire more workers it must offer a higher wage, and it must pay that higher wage to all its existing workers too. So its marginal factor cost exceeds the wage: MFC &gt; w.</p>\n<p>Work it with a simple supply schedule: to hire 1 worker the wage is $20, 2 workers $30, 3 workers $40, 4 workers $50. Total labor cost is $20, $60, $120, $200, so MFC is $20, $40, $60, $80. Now give the firm our MRP schedule from before: $50, $40, $30, $20. The monopsonist hires where MRP = MFC: the 1st worker has MRP $50 &gt; MFC $20 (hire); the 2nd has MRP $40 = MFC $40 (hire — the marginal worker); the 3rd has MRP $30 &lt; MFC $60 (stop). It hires 2 workers and pays the supply wage for 2 workers, $30. Compare with competition, where the wage would be $40 and 2 workers would also be hired in this example — the monopsony wage is lower ($30 vs. $40) for the same employment. With a different MRP schedule the monopsonist would hire fewer workers too, and the gap between MRP and the wage is pure exploitation in the economic sense: workers are paid less than the value they add.</p>\n<div class=\"formula\">Monopsonist: hire where MRP = MFC, pay the supply wage &nbsp;|&nbsp; MFC &gt; w because raising the wage raises pay for all workers</div>"
    },
    {
      "heading": "Labor Supply, Human Capital, and Wage Differences",
      "html": "<p>Workers choose between work and leisure. A higher wage has two effects: the <strong>substitution effect</strong> makes leisure more expensive, so people work more; the <strong>income effect</strong> makes people richer, so they buy more leisure and work less. At low wages the substitution effect usually wins and the supply curve slopes up; at very high wages the income effect can win and the curve bends backward — the <strong>backward-bending labor supply curve</strong>.</p>\n<p>Wages differ across jobs and people for reasons the model explains. <strong>Human capital</strong> — education, training, experience — raises a worker's marginal product and therefore their MRP and wage: a trained electrician's MRP is higher than an untrained helper's. <strong>Compensating differentials</strong> are wage premiums for unpleasant, dangerous, or inconvenient work: night shifts and hazardous jobs pay more because the wage must compensate for the worse conditions. Discrimination, unions, and minimum wages all shift outcomes away from the simple competitive benchmark, and each can be analyzed with the same supply-and-demand tools — Module 5's surplus triangles work in factor markets too.</p>\n<div class=\"callout\"><strong>Key idea:</strong> In a competitive labor market, the wage equals the value of the marginal worker's output. Everything that changes wages — training, technology, working conditions, market power — works through marginal product or through supply and demand.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Labor demand is derived demand: MRP = MP<sub>L</sub> × MR (or × P in competition). Hire while MRP ≥ wage.</li>\n<li>Our firm (price $5, MP 10, 8, 6, 4, 2): MRP is $50, $40, $30, $20, $10. At wage $40 it hires 2 workers; at $25 it hires 3; at $50 it hires 1.</li>\n<li>A higher product price or better technology shifts labor demand right; the wage itself moves the firm along the MRP curve.</li>\n<li>Monopsony: hire where MRP = MFC, pay the supply wage. Our example: 2 workers at $30 instead of the competitive $40.</li>\n<li>Labor supply: substitution effect pushes toward more work, income effect toward less; the curve can bend backward at high wages. Human capital raises MRP; compensating differentials pay for bad conditions.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying the firm hires workers until MRP is zero. It hires until MRP equals the wage — the last worker hired must pay for themselves. A worker with MRP of $30 at a $40 wage loses the firm $10 a week.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Confusing MFC with the wage in a monopsony. The monopsonist's marginal cost of one more worker includes the raise given to every worker already hired, so MFC is above the wage — that gap is the whole point of the model.</div>\n<p><strong>Ready-to-Work link:</strong> The next module puts all markets together. The wage you just derived is one price among many — and general equilibrium asks whether all those prices, at once, can be right.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Derived demand", "def": "Demand for an input that comes from demand for the output it produces." },
    { "term": "Marginal revenue product (MRP)", "def": "The extra revenue from one more unit of an input: MRP = MPL × MR (or MPL × P in competition)." },
    { "term": "Marginal factor cost (MFC)", "def": "The extra cost of hiring one more unit of an input; equal to the wage in a competitive labor market." },
    { "term": "Hiring rule", "def": "Hire an input while its MRP is at least its MFC; stop when MRP = MFC." },
    { "term": "Labor demand curve", "def": "The firm's MRP curve: the quantity of labor demanded at each wage." },
    { "term": "Monopsony", "def": "A market with a single buyer of labor, who faces the upward-sloping market labor supply curve." },
    { "term": "Labor supply curve", "def": "The quantity of labor workers offer at each wage; usually upward sloping, possibly backward-bending at high wages." },
    { "term": "Substitution effect (labor supply)", "def": "A higher wage makes leisure more expensive, pushing workers to work more." },
    { "term": "Income effect (labor supply)", "def": "A higher wage makes workers richer, pushing them to buy more leisure and work less." },
    { "term": "Backward-bending labor supply curve", "def": "A supply curve that slopes up at low wages and bends back at high wages, when the income effect wins." },
    { "term": "Human capital", "def": "Education, training, and experience that raise a worker's productivity and wage." },
    { "term": "Compensating differential", "def": "A wage premium that compensates workers for unpleasant, dangerous, or inconvenient job conditions." },
    { "term": "Minimum wage", "def": "A legal floor on the wage; in a competitive market it can reduce employment, in a monopsony it can raise it." },
    { "term": "Economic rent (labor)", "def": "Payment to a factor above the minimum needed to keep it in its current use." }
  ],
  "video": {
    "title": "Introduction to labor markets | Microeconomics | Khan Academy",
    "embedUrl": "https://www.youtube.com/embed/Cm69zTuUzMI",
    "note": "Khan Academy introduces labor markets — derived demand, marginal revenue product, and how wages are set. Watch it, then rework the hiring decision (MRP $50, $40, $30, $20, $10 against a $40 wage) yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A firm sells its product at $5. Its marginal product of labor is 10, 8, 6, 4, 2 for workers 1–5. (a) Compute each worker's MRP. (b) How many workers does it hire at a wage of $40? At a wage of $25?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: MRP = MP × $5: $50, $40, $30, $20, $10. Step 2: At wage $40, hire while MRP ≥ $40: workers 1 and 2 qualify (the 2nd worker's MRP is exactly $40), so hire 2. Step 3: At wage $25, workers 1, 2, and 3 qualify (MRP $50, $40, $30 all ≥ $25; the 4th is $20), so hire 3.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> The product price rises from $5 to $10, with the same marginal products. (a) What is the new MRP schedule? (b) How many workers are hired at a wage of $40? (c) Is this a movement along or a shift of the labor demand curve?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: New MRP = MP × $10: $100, $80, $60, $40, $20. Step 2: At wage $40, workers 1–4 qualify (the 4th worker's MRP is exactly $40), so hire 4 — up from 2. Step 3: This is a shift of the labor demand curve to the right, caused by the higher product price.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A monopsonist faces labor supply: 1 worker at $20, 2 at $30, 3 at $40, 4 at $50. (a) Compute total labor cost and MFC for each level. (b) With MRP of $50, $40, $30, $20 for workers 1–4, how many workers does it hire and what wage does it pay?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Total cost: 1 × $20 = $20; 2 × $30 = $60; 3 × $40 = $120; 4 × $50 = $200. Step 2: MFC: $20, $60 − $20 = $40, $120 − $60 = $60, $200 − $120 = $80. Step 3: Hire while MRP ≥ MFC: worker 1 ($50 ≥ $20), worker 2 ($40 = $40), worker 3 ($30 &lt; $60 — stop). Step 4: Hire 2 workers and pay the supply wage for 2 workers, $30.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> In Problem 3, what wage would 2 workers earn in a competitive labor market, and how much less does the monopsonist pay? Explain in one sentence why.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: In competition the wage equals MRP at the hired quantity: at 2 workers the MRP is $40, so the competitive wage is $40. Step 2: The monopsonist pays $30, which is $10 less. Step 3: Because the monopsonist faces the upward-sloping supply curve, it can pay the supply wage ($30) rather than the value of the marginal worker's output ($40) — the $10 gap is the monopsony's markdown.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A minimum wage of $50 is imposed on the competitive labor market in Problem 1 (MRP $50, $40, $30, $20, $10). (a) How many workers are hired? (b) How many were hired before, at a wage of $40? (c) What is the employment effect?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: At a $50 minimum wage, hire while MRP ≥ $50: only worker 1 qualifies, so 1 worker is hired. Step 2: Before, at wage $40, 2 workers were hired. Step 3: Employment falls by 1 worker — the 2nd worker, whose MRP of $40 is below the $50 floor, is no longer worth hiring.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Two jobs are identical except that one is on a night shift in a noisy plant and the other is a day shift in a quiet office. The night job pays $3 an hour more. (a) What is this premium called? (b) In your own words, why does the market pay it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The premium is a compensating differential. Step 2: Workers dislike nights and noise, so fewer are willing to take the night job at the same wage; the employer must pay more to attract enough workers. Step 3: The $3 premium equalizes the total package — pay plus working conditions — across the two jobs.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The demand for labor is a derived demand because:",
      "choices": [
        "It comes from the demand for the output labor produces",
        "Workers derive utility from their jobs",
        "It is derived from the supply of capital",
        "The government derives it from tax data"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Firms hire labor to make output, so labor demand follows product demand. (b) Workers' utility shapes labor supply, not demand. (c) Capital supply affects labor demand but is not its source. (d) The government does not derive labor demand."
    },
    {
      "q": "A firm sells output at $5 and the marginal product of the 3rd worker is 6 units. The 3rd worker's MRP is:",
      "choices": [
        "$11",
        "$30",
        "$6",
        "$5"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MRP = MP × P = 6 × $5 = $30. (a) adds instead of multiplying. (c) is the marginal product alone. (d) is the product price alone."
    },
    {
      "q": "With MRP of $50, $40, $30, $20, $10 for workers 1–5, the firm hires how many workers at a wage of $40?",
      "choices": [
        "1",
        "2",
        "3",
        "5"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Hire while MRP ≥ $40: workers 1 and 2 qualify, the 3rd ($30) does not. (a) ignores the 2nd worker, whose MRP exactly equals the wage. (c) includes the 3rd worker, who costs more than they earn. (d) hires workers whose MRP is far below the wage."
    },
    {
      "q": "If the product price doubles, the firm's labor demand curve:",
      "choices": [
        "Does not move — price is not a shifter",
        "Shifts right, because MRP doubles at every worker",
        "Shifts left",
        "Becomes vertical"
      ],
      "answer": 1,
      "explanation": "Correct: (b). MRP = MP × P, so doubling P doubles MRP and the firm hires more at any wage. (a) Product price is a key shifter. (c) A higher price raises, not lowers, labor demand. (d) The curve stays downward sloping."
    },
    {
      "q": "A monopsonist hires where MRP equals MFC and pays:",
      "choices": [
        "The MRP of the last worker",
        "The wage on the labor supply curve at that employment level",
        "Zero",
        "The highest wage any worker would accept"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The firm pays the supply wage needed to attract that many workers — $30 for 2 workers in our example — which is below the MRP of $40. (a) is the competitive wage. (c) Workers must be paid something. (d) The firm pays the market supply wage, not each worker's maximum."
    },
    {
      "q": "In the monopsony example, MFC for the 2nd worker is $40 while the wage is $30, because:",
      "choices": [
        "The 2nd worker is more productive",
        "Hiring the 2nd worker means raising the 1st worker's wage from $20 to $30 as well",
        "The firm pays a tax of $10",
        "MRP falls with each worker"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Total cost rises from $20 to $60 — the $30 wage for the new worker plus a $10 raise for the first worker. (a) Productivity is falling, not rising. (c) There is no tax. (d) Falling MRP explains hiring less, not why MFC exceeds the wage."
    },
    {
      "q": "A backward-bending labor supply curve happens when, at high wages:",
      "choices": [
        "The substitution effect outweighs the income effect",
        "The income effect outweighs the substitution effect",
        "Workers refuse all work",
        "The wage falls to zero"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Richer workers buy more leisure, so higher wages can mean fewer hours worked. (a) describes the normal upward-sloping part. (c) Workers still work, just fewer hours. (d) Wages are high, not zero, in this region."
    },
    {
      "q": "Human capital raises a worker's wage mainly by:",
      "choices": [
        "Raising the worker's marginal product and therefore their MRP",
        "Lowering the firm's fixed costs",
        "Reducing the number of workers",
        "Raising the price of the product directly"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Training makes the worker produce more, so the firm can profitably pay more. (b) Human capital is about productivity, not fixed costs. (c) The number of workers is an outcome, not the mechanism. (d) Product price is set in the product market."
    }
  ],
  "studyGuide": "\n<h3>Module 8 — Factor Markets & Labor Demand Quick Reference</h3>\n<p><strong>Core idea:</strong> Labor demand is derived from product demand. A firm hires while the worker's extra revenue (MRP) covers the wage.</p>\n<p><strong>Worked anchor:</strong> price $5, MP = 10, 8, 6, 4, 2 → MRP = $50, $40, $30, $20, $10. Hire 2 at wage $40, 3 at $25, 1 at $50. Price $10 → MRP $100, $80, $60, $40, $20, hire 4 at wage $40.</p>\n<div class=\"formula\">MRP = MP<sub>L</sub> × P &nbsp;|&nbsp; Hire while MRP ≥ w &nbsp;|&nbsp; Monopsony: hire where MRP = MFC, pay the supply wage</div>\n<p><strong>Monopsony anchor:</strong> supply $20, $30, $40, $50 → MFC $20, $40, $60, $80. Hire 2 workers, pay $30 (competitive wage would be $40).</p>\n<p><strong>Watch out:</strong> MFC is not the wage in a monopsony — it includes the raise for existing workers. And the wage moves the firm along labor demand; product price shifts it.</p>\n<p><strong>Self-check:</strong> At wage $35, how many workers does the worked firm hire? (Answer: 2 — the 3rd worker's MRP is $30.)</p>\n"
};
