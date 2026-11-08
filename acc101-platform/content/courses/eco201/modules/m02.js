// eco201 - Module 2: Demand: Deriving It, Shifting It, Measuring It
module.exports = {
  "number": 2,
  "slug": "demand-deriving-shifting-measuring",
  "title": "Demand: Deriving It, Shifting It, Measuring It",
  "estTime": "3–4 hours",
  "objectives": [
    "Derive an individual demand curve from utility maximization by varying one price.",
    "Split a price change into substitution and income effects and sign each for normal and inferior goods.",
    "Distinguish a movement along a demand curve from a shift of the whole curve.",
    "Compute price, income, and cross-price elasticities with the midpoint formula and interpret the numbers.",
    "Connect elasticity to total revenue and to the demand curve's shape."
  ],
  "sections": [
    {
      "heading": "Deriving Demand from the Optimal Bundle",
      "html": "<p>In Module 1 the consumer with income $120, P<sub>y</sub> = $6, and U = x<sup>0.5</sup> y<sup>0.5</sup> chose x = 15 when P<sub>x</sub> = $4. In this module we vary P<sub>x</sub> and re-optimize each time, and the pairs (P<sub>x</sub>, x) trace out the demand curve. We already did one more point: at P<sub>x</sub> = $8 the optimum was x = 7.5. One more: at P<sub>x</sub> = $2, tangency gives y ÷ x = 2 ÷ 6 = 1/3, so y = x/3, and the budget 2x + 6y = 120 becomes 2x + 2x = 4x = 120, so x = 30 and y = 10. Three points on the demand curve: (P, Q) = ($2, 30), ($4, 15), ($8, 7.5). Price doubles, quantity halves — this consumer's demand for x is a rectangular hyperbola, Q = 60 ÷ P, because with this utility function the consumer always spends half their income ($60) on x.</p>\n<p>That is the general method: a demand curve is a record of optimal choices at different prices, holding income, other prices, and tastes fixed. Change any of those held-fixed things and the whole curve moves.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Demand is not a guess — it is the shadow of utility maximization. Every point on the curve is an optimal bundle at that price.</div>"
    },
    {
      "heading": "Substitution and Income Effects",
      "html": "<p>When the price of x rises, the consumer buys less x for two separate reasons. The <strong>substitution effect</strong> is the change from x becoming relatively more expensive: the consumer substitutes toward y, holding satisfaction constant. It always pushes quantity down when price rises. The <strong>income effect</strong> is the change from the consumer's purchasing power falling: the price rise makes them effectively poorer, and they buy less of x if x is a <strong>normal good</strong>, more of x if x is an <strong>inferior good</strong>.</p>\n<p>Use the Module 1 numbers. At P<sub>x</sub> = $4 the consumer buys (15, 10) with utility √150 ≈ 12.25. At P<sub>x</sub> = $8 they buy (7.5, 10). The total effect on x is 7.5 − 15 = −7.5. To split it, ask: how much x would the consumer buy at the new prices if we compensated them enough to keep utility at 12.25? With U = x<sup>0.5</sup> y<sup>0.5</sup>, keeping U = √150 while MRS = 8 ÷ 6 = 4/3 means y = (4/3)x and √(x × (4/3)x) = √150, so (4/3)x² = 150, x² = 112.5, x ≈ 10.61. The substitution effect is 10.61 − 15 = −4.39; the income effect is 7.5 − 10.61 = −3.11. They sum to −7.5, as they must. For an inferior good the income effect is positive and works against the substitution effect; for a <strong>Giffen good</strong> it is so strongly positive that it wins, and demand slopes upward — a rare curiosity, not a normal case.</p>\n<div class=\"formula\">Total effect = Substitution effect + Income effect &nbsp;|&nbsp; −7.5 = −4.39 + (−3.11)</div>"
    },
    {
      "heading": "Movements Along vs. Shifts of Demand",
      "html": "<p>A change in the good's own price moves the consumer <strong>along</strong> the demand curve: ($4, 15) to ($8, 7.5) is a movement, not a shift. Everything else — income, the price of other goods, tastes, expectations, the number of buyers — <strong>shifts</strong> the curve. Higher income shifts demand right for a normal good and left for an inferior good. A higher price for a <strong>substitute</strong> (coffee vs. tea) shifts demand for this good right; a higher price for a <strong>complement</strong> (coffee vs. filters) shifts it left.</p>\n<p>Market demand is the horizontal sum of individual demands: at each price, add up what every consumer buys. If 100 identical consumers each demand Q = 60 ÷ P, market demand is Q = 6,000 ÷ P. At P = $4 the market buys 1,500 units; at P = $8 it buys 750.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Own price = movement along. Anything else = shift. Mixing the two up is the single most common error in demand analysis — say the words \"along\" or \"shift\" out loud before you draw.</div>"
    },
    {
      "heading": "Elasticity: Measuring Responsiveness",
      "html": "<p><strong>Price elasticity of demand</strong> measures how much quantity responds to price: E = (% change in quantity) ÷ (% change in price). Because the two usually move in opposite directions, E is negative; people often quote its absolute value. The <strong>midpoint formula</strong> uses averages as the base so the answer does not depend on direction. Take the demand points (P, Q) = ($20, 80) and ($30, 60). The quantity change is (60 − 80) ÷ ((60 + 80) ÷ 2) = −20 ÷ 70 ≈ −28.57%. The price change is (30 − 20) ÷ ((30 + 20) ÷ 2) = 10 ÷ 25 = 40%. So E ≈ −28.57% ÷ 40% ≈ −0.71: inelastic, since |E| &lt; 1. A 1% price rise cuts quantity by about 0.71%.</p>\n<p>The <strong>point elasticity</strong> at one point on a straight-line demand curve Q = 120 − 2P is E = (dQ/dP) × (P/Q). At P = $20, Q = 80, so E = −2 × (20 ÷ 80) = −0.5. At P = $40, Q = 40, so E = −2 × (40 ÷ 40) = −2. Same curve, same slope, different elasticity — elasticity changes as you move along a straight-line demand curve because the ratio P/Q changes. <strong>Income elasticity</strong> is (% change in quantity) ÷ (% change in income): positive for normal goods, negative for inferior goods. <strong>Cross-price elasticity</strong> is (% change in quantity of x) ÷ (% change in price of y): positive for substitutes, negative for complements.</p>\n<div class=\"formula\">Midpoint E = [(Q2 − Q1) ÷ ((Q1 + Q2) ÷ 2)] ÷ [(P2 − P1) ÷ ((P1 + P2) ÷ 2)] &nbsp;|&nbsp; Point E = (dQ/dP) × (P ÷ Q)</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Demand is derived by re-optimizing at each price: our consumer's demand is Q = 60 ÷ P, through ($2, 30), ($4, 15), ($8, 7.5).</li>\n<li>Total effect = substitution effect + income effect; for the $4 → $8 rise, −7.5 = −4.39 + (−3.11).</li>\n<li>Own price moves along the curve; income, other prices, tastes, and expectations shift it.</li>\n<li>Midpoint elasticity between ($20, 80) and ($30, 60) is about −0.71 (inelastic).</li>\n<li>Point elasticity on Q = 120 − 2P is −0.5 at P = $20 and −2 at P = $40 — elasticity varies along a straight line.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying \"demand increased\" when the price fell. A price fall moves you along the curve — quantity demanded rose, demand did not change. Reserve \"demand increased\" for a rightward shift.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Quoting elasticity from a slope alone. Slope is ΔQ/ΔP; elasticity multiplies the slope by P/Q. A steep curve can still be elastic if P/Q is large.</div>\n<p><strong>Ready-to-Work link:</strong> Elasticity decides pricing. If demand is inelastic, a price rise raises revenue; if elastic, it lowers revenue. Module 6 uses exactly this when a monopolist chooses its price.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Individual demand curve", "def": "The quantities a consumer optimally buys at each price, holding income, other prices, and tastes fixed." },
    { "term": "Market demand", "def": "The horizontal sum of all individual demand curves — at each price, the total quantity all consumers buy." },
    { "term": "Substitution effect", "def": "The change in quantity from a good becoming relatively more or less expensive, holding satisfaction constant; always opposes the price change." },
    { "term": "Income effect", "def": "The change in quantity from a price change altering the consumer's purchasing power." },
    { "term": "Normal good", "def": "A good bought more of when income rises; its income effect reinforces the substitution effect." },
    { "term": "Inferior good", "def": "A good bought less of when income rises; its income effect works against the substitution effect." },
    { "term": "Giffen good", "def": "A rare inferior good whose income effect outweighs its substitution effect, so demand slopes upward." },
    { "term": "Substitute", "def": "A good whose price rise increases demand for this good; cross-price elasticity is positive." },
    { "term": "Complement", "def": "A good whose price rise decreases demand for this good; cross-price elasticity is negative." },
    { "term": "Movement along the demand curve", "def": "A change in quantity demanded caused by a change in the good's own price." },
    { "term": "Shift of the demand curve", "def": "A change in demand at every price, caused by income, other prices, tastes, expectations, or the number of buyers." },
    { "term": "Price elasticity of demand", "def": "(% change in quantity) ÷ (% change in price); negative, and inelastic when its absolute value is below 1." },
    { "term": "Midpoint formula", "def": "An elasticity formula using average prices and quantities as the base, so the answer is the same in either direction." },
    { "term": "Point elasticity", "def": "Elasticity at a single point: (dQ/dP) × (P/Q); it varies along a straight-line demand curve." },
    { "term": "Income elasticity of demand", "def": "(% change in quantity) ÷ (% change in income); positive for normal goods, negative for inferior goods." },
    { "term": "Cross-price elasticity", "def": "(% change in quantity of x) ÷ (% change in price of y); positive for substitutes, negative for complements." }
  ],
  "video": {
    "title": "Substitution and income effects and the Law of Demand",
    "embedUrl": "https://www.youtube.com/embed/xGL5mbOvTmQ",
    "note": "Khan Academy shows how the substitution and income effects combine to produce the law of demand — the exact split this module computes with the (15, 10) bundle. Watch it, then check the −4.39 and −3.11 split yourself.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Using the Module 1 consumer (U = x<sup>0.5</sup> y<sup>0.5</sup>, income $120, P<sub>y</sub> = $6), find the optimal quantity of x when P<sub>x</sub> = $2. Then list the three demand points found so far.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Tangency: y ÷ x = 2 ÷ 6 = 1/3, so y = x/3. Step 2: Budget: 2x + 6y = 120 becomes 2x + 2x = 4x = 120, so x = 30 and y = 10. Step 3: Demand points: ($2, 30), ($4, 15), ($8, 7.5). Step 4: Check the pattern: 2 × 30 = 4 × 15 = 8 × 7.5 = 60, so demand is Q = 60 ÷ P.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Price rises from $20 to $30 and quantity demanded falls from 80 to 60. Compute the midpoint price elasticity of demand and say whether demand is elastic or inelastic.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: % change in quantity = (60 − 80) ÷ 70 = −20 ÷ 70 ≈ −28.57%. Step 2: % change in price = (30 − 20) ÷ 25 = 10 ÷ 25 = 40%. Step 3: E ≈ −28.57% ÷ 40% ≈ −0.71. Step 4: |E| = 0.71 &lt; 1, so demand is inelastic over this range.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Demand is Q = 120 − 2P. Compute the point elasticity at P = $20 and at P = $40, and explain why they differ.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: dQ/dP = −2 everywhere. Step 2: At P = $20, Q = 120 − 40 = 80, so E = −2 × (20 ÷ 80) = −0.5. Step 3: At P = $40, Q = 120 − 80 = 40, so E = −2 × (40 ÷ 40) = −2. Step 4: They differ because elasticity is slope × P/Q, and P/Q rises from 0.25 to 1 as price rises — the same slope gives a more elastic reading higher up the curve.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A consumer's income rises 10% and their quantity demanded of bus rides falls 5%. (a) What is the income elasticity? (b) Is a bus ride a normal or inferior good for this consumer?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Income elasticity = −5% ÷ 10% = −0.5. Step 2: Negative income elasticity means the good is inferior: as income rises, the consumer buys fewer bus rides (and presumably more of something else, like driving).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The price of tea rises 20% and the quantity of coffee demanded rises 8%. (a) What is the cross-price elasticity of coffee with respect to tea? (b) Are coffee and tea substitutes or complements?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Cross-price elasticity = 8% ÷ 20% = 0.4. Step 2: Positive cross-price elasticity means the goods are substitutes: dearer tea pushes buyers toward coffee.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A price rise cuts a consumer's quantity of x from 15 to 7.5. The substitution effect alone would cut it to 10.61. (a) What is the income effect? (b) Is x a normal or inferior good? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Total effect = −7.5; substitution effect = 10.61 − 15 = −4.39. Step 2: Income effect = total − substitution = −7.5 − (−4.39) = −3.11. Step 3: The income effect is negative — the price rise made the consumer effectively poorer and they bought less — so x is a normal good.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A demand curve is derived by:",
      "choices": [
        "Asking consumers how much they would like to buy",
        "Re-optimizing the consumer's bundle at each price, holding income and other prices fixed",
        "Adding up firms' supply curves",
        "Plotting price against income"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each point on the demand curve is an optimal bundle at that price. (a) Wishes are not choices — demand records what the consumer actually buys given the budget. (c) Adding supply curves gives market supply, not demand. (d) Price against income is not a demand curve."
    },
    {
      "q": "For the Module 1 consumer, demand for x is Q = 60 / P. At P = $4 the quantity demanded is:",
      "choices": [
        "7.5",
        "15",
        "30",
        "60"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Q = 60 ÷ 4 = 15, matching the optimal bundle. (a) is the quantity at P = $8. (c) is the quantity at P = $2. (d) is the amount spent on x ($60), not the quantity."
    },
    {
      "q": "The substitution effect of a price rise:",
      "choices": [
        "Always increases the quantity demanded",
        "Always decreases the quantity demanded",
        "Increases quantity for normal goods and decreases it for inferior goods",
        "Is zero for every consumer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Holding satisfaction constant, a dearer good is always substituted away from. (a) reverses the effect. (c) confuses the substitution effect with the income effect — it is the income effect that depends on normal vs. inferior. (d) The substitution effect is real and usually large."
    },
    {
      "q": "In the worked split, the price rise from $4 to $8 had a total effect of −7.5, a substitution effect of −4.39, and an income effect of:",
      "choices": [
        "−11.89",
        "−3.11",
        "+3.11",
        "0"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Income effect = total − substitution = −7.5 − (−4.39) = −3.11. (a) adds the two effects instead of subtracting. (c) gets the sign wrong. (d) would mean the price rise changed no purchasing power, which is false."
    },
    {
      "q": "Price rises from $20 to $30 and quantity falls from 80 to 60. The midpoint elasticity is about:",
      "choices": [
        "−0.5",
        "−0.71",
        "−1.4",
        "−2"
      ],
      "answer": 1,
      "explanation": "Correct: (b). %ΔQ ≈ −28.57%, %ΔP = 40%, so E ≈ −0.71. (a) would be the answer using only the starting values as bases in a different way — the midpoint uses averages. (c) inverts the ratio (40 ÷ 28.57). (d) would need quantity to fall by 80%."
    },
    {
      "q": "On the demand curve Q = 120 − 2P, the point elasticity at P = $40 is −2 because:",
      "choices": [
        "The slope is −2 and P/Q is 1",
        "The slope is −2 and P/Q is 0.25",
        "Quantity is 40 and price is 40, so elasticity must be −1",
        "The curve is perfectly elastic at that point"
      ],
      "answer": 0,
      "explanation": "Correct: (a). E = (dQ/dP) × (P/Q) = −2 × (40/40) = −2. (b) describes the P = $20 point, where E = −0.5. (c) Elasticity is not simply −Q/P; it is slope times P/Q. (d) Perfectly elastic means an infinite elasticity, not −2."
    },
    {
      "q": "The price of tea rises and coffee demand rises. Coffee and tea are:",
      "choices": [
        "Complements",
        "Substitutes",
        "Inferior goods",
        "Unrelated goods"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A dearer substitute pushes buyers to the other good — positive cross-price elasticity. (a) Complements move the other way: dearer tea would cut coffee demand. (c) Inferior is about income, not other prices. (d) Unrelated goods would show no change in coffee demand."
    },
    {
      "q": "A rise in income shifts the demand curve for an inferior good:",
      "choices": [
        "To the right",
        "To the left",
        "Not at all — income changes move along the curve",
        "Upward along the price axis"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Higher income means less of an inferior good is demanded at every price. (a) is the normal-good case. (c) Income is a shifter, not the own price — only the own price moves along the curve. (d) A demand curve shifts left or right, not up the price axis."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Demand Quick Reference</h3>\n<p><strong>Core idea:</strong> Demand is utility maximization traced across prices; a price change splits into a substitution effect and an income effect.</p>\n<p><strong>Deriving demand:</strong> our consumer's demand for x is Q = 60 ÷ P, through ($2, 30), ($4, 15), ($8, 7.5).</p>\n<p><strong>Effects:</strong> total = substitution + income. For the $4 → $8 rise: −7.5 = −4.39 + (−3.11). Substitution is always negative; income is negative for normal goods, positive for inferior goods.</p>\n<p><strong>Along vs. shift:</strong> own price moves along; income, other prices, tastes, expectations shift.</p>\n<div class=\"formula\">Midpoint E = [(Q2 − Q1) ÷ avg Q] ÷ [(P2 − P1) ÷ avg P] &nbsp;|&nbsp; Point E = (dQ/dP) × (P ÷ Q)</div>\n<p><strong>Worked anchor:</strong> ($20, 80) → ($30, 60) gives E ≈ −0.71 (inelastic). On Q = 120 − 2P, E = −0.5 at P = $20 and −2 at P = $40.</p>\n<p><strong>Watch out:</strong> \"Demand rose\" means the curve shifted right. A price fall only raises quantity demanded — a movement along.</p>\n<p><strong>Self-check:</strong> If income elasticity is −0.5, is the good normal or inferior? (Answer: inferior.)</p>\n"
};
