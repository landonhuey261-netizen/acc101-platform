// eco102 - Module 2: Elasticity: How Much Do Buyers & Sellers Respond?
module.exports = {
  "number": 2,
  "slug": "elasticity",
  "title": "Elasticity: How Much Do Buyers & Sellers Respond?",
  "estTime": "3–4 hours",
  "objectives": [
    "Calculate price elasticity of demand with the midpoint method and interpret the number.",
    "Classify demand as elastic, inelastic, or unit elastic and predict what happens to total revenue.",
    "Calculate income elasticity and cross-price elasticity and say what the sign means.",
    "Calculate price elasticity of supply and explain why it changes over time.",
    "Use elasticity to predict who really pays a tax, buyers or sellers."
  ],
  "sections": [
    {
      "heading": "Price Elasticity of Demand — the Midpoint Method",
      "html": "<p><strong>Price elasticity of demand</strong> measures how much quantity demanded responds to a price change: Ed = % change in quantity demanded ÷ % change in price. The answer is usually negative, because price and quantity move in opposite directions. A big number (in absolute value) means buyers are sensitive; a small number means they barely react.</p>\n<p>This course uses the <strong>midpoint method</strong> for every elasticity calculation, and says so each time. The midpoint method measures each percentage change against the average of the starting and ending values, so the answer is the same whether the price rises or falls. Example: the price of concert tickets rises from $10 to $12 and quantity demanded falls from 100 to 80. %ΔQ = (80 − 100) ÷ 90 = −22.22%. %ΔP = (12 − 10) ÷ 11 = 18.18%. Ed = −22.22% ÷ 18.18% = <strong>−1.22</strong>. (The simple method, dividing by the starting value, would give −20% ÷ 20% = −1.00 — a different answer, which is why we always state the method.)</p>\n<div class=\"callout\"><strong>Key idea:</strong> Elasticity is a ratio of percentages, so it has no units. A −1.22 means a 1% price rise cuts quantity by about 1.22%.</div>"
    },
    {
      "heading": "Elastic, Inelastic, and Total Revenue",
      "html": "<p>Use the absolute value of Ed. If |Ed| &gt; 1, demand is <strong>elastic</strong>: buyers respond strongly. If |Ed| &lt; 1, demand is <strong>inelastic</strong>: buyers barely respond. If |Ed| = 1, demand is <strong>unit elastic</strong>. Necessities with few substitutes — insulin, gasoline in the short run — are inelastic. Luxuries with many substitutes — restaurant meals, brand-name sneakers — are elastic.</p>\n<p>Elasticity decides what a price rise does to <strong>total revenue</strong> (price × quantity). Take a shop selling 200 mugs at $5: total revenue is $1,000. It raises the price to $6 and quantity falls to 160. Midpoint Ed = (−40 ÷ 180) ÷ (1 ÷ 5.5) = −22.22% ÷ 18.18% = −1.22, elastic. New total revenue is 6 × 160 = <strong>$960</strong> — the price rise <em>lost</em> money, because the quantity lost outweighed the higher price. With inelastic demand the opposite happens: the price rise wins and revenue goes up.</p>\n<div class=\"formula\">Ed = %ΔQd ÷ %ΔP (midpoint) &nbsp;|&nbsp; Total revenue = P × Q &nbsp;|&nbsp; Elastic: price up → revenue down</div>"
    },
    {
      "heading": "Income Elasticity and Cross-Price Elasticity",
      "html": "<p>Elasticity is a family of measures, not one formula. <strong>Income elasticity</strong> is %ΔQ ÷ %Δincome. If incomes rise 10% and quantity demanded rises 15%, Ey = 15% ÷ 10% = <strong>1.5</strong>. A positive Ey means a <strong>normal good</strong>; above 1 it is a <strong>luxury</strong> (demand grows faster than income). A negative Ey means an <strong>inferior good</strong>: as people get richer they buy less of it, like instant noodles or bus rides.</p>\n<p><strong>Cross-price elasticity</strong> is %ΔQ of good A ÷ %ΔP of good B. If the price of tea rises 20% and the quantity of coffee demanded rises 10%, Exy = 10% ÷ 20% = <strong>+0.5</strong>. A positive sign means the two goods are <strong>substitutes</strong> (buyers switch). A negative sign means they are <strong>complements</strong> (buyers use them together, like coffee and coffee filters). The sign is the whole message: positive = substitutes, negative = complements.</p>"
    },
    {
      "heading": "Price Elasticity of Supply",
      "html": "<p><strong>Price elasticity of supply</strong> is %ΔQs ÷ %ΔP, and it is usually positive: higher prices coax more supply out of sellers. Example: the price of handmade candles rises from $8 to $10 and quantity supplied rises from 200 to 260. Midpoint %ΔP = 2 ÷ 9 = 22.22%. Midpoint %ΔQ = 60 ÷ 230 = 26.09%. Es = 26.09% ÷ 22.22% = <strong>1.17</strong> — elastic supply.</p>\n<p>Supply elasticity grows with time. In the very short run a farmer cannot grow more strawberries overnight, so supply is inelastic. Given a season, the farmer can plant more, so supply is more elastic. Given years, new farms can enter, so supply is very elastic. The same logic explains why a sudden shortage pushes prices up sharply at first and then eases as supply catches up.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The five things that make demand more elastic are: more substitutes, a bigger share of the budget, more time to adjust, a luxury rather than a necessity, and a narrowly defined market (one brand of coffee, not all coffee).</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Every elasticity in this course uses the <strong>midpoint method</strong>: divide each change by the average of the start and end values.</li>\n<li>Concert tickets: P $10→$12, Q 100→80, Ed = −22.22% ÷ 18.18% = −1.22 (elastic).</li>\n<li>Mugs: P $5→$6, Q 200→160, Ed = −1.22, total revenue falls $1,000 → $960.</li>\n<li>Income elasticity 1.5 = luxury normal good. Cross-price elasticity +0.5 = substitutes.</li>\n<li>Candles: P $8→$10, Q 200→260, Es = 26.09% ÷ 22.22% = 1.17 (elastic supply).</li>\n<li>Who pays a tax: the side that is <em>less</em> elastic bears more of it. Inelastic buyers pay most of a tax on cigarettes; elastic buyers make sellers absorb most of a tax on restaurant meals.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Dropping the minus sign and then misreading the answer. Demand elasticity is negative; the sign is information, not an error. Compare absolute values when you classify elastic vs. inelastic.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Mixing up the midpoint and simple methods in the same problem. Pick one method and state it. In this course it is always the midpoint method, unless a question says otherwise.</div>\n<p><strong>Ready-to-Work link:</strong> A business that raises its price without knowing its elasticity is guessing. If demand is elastic, the price rise loses revenue; if it is inelastic, the price rise gains revenue. That one number is worth more than a hunch.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Price elasticity of demand", "def": "Percentage change in quantity demanded divided by percentage change in price." },
    { "term": "Midpoint method", "def": "Computing percentage changes against the average of the start and end values, so the result is the same in either direction." },
    { "term": "Elastic demand", "def": "Demand with |Ed| greater than 1; quantity responds strongly to price." },
    { "term": "Inelastic demand", "def": "Demand with |Ed| less than 1; quantity responds weakly to price." },
    { "term": "Unit elastic demand", "def": "Demand with |Ed| equal to 1; a price change leaves total revenue unchanged (by the midpoint measure)." },
    { "term": "Perfectly elastic demand", "def": "Demand with |Ed| infinite; any price rise loses all buyers." },
    { "term": "Perfectly inelastic demand", "def": "Demand with Ed equal to 0; quantity does not change when price changes." },
    { "term": "Total revenue", "def": "Price times quantity sold; P × Q." },
    { "term": "Income elasticity of demand", "def": "Percentage change in quantity demanded divided by percentage change in income." },
    { "term": "Normal good", "def": "A good with positive income elasticity; people buy more of it as income rises." },
    { "term": "Inferior good", "def": "A good with negative income elasticity; people buy less of it as income rises." },
    { "term": "Luxury good", "def": "A normal good with income elasticity above 1." },
    { "term": "Cross-price elasticity", "def": "Percentage change in quantity of one good divided by percentage change in the price of another." },
    { "term": "Substitutes", "def": "Goods with positive cross-price elasticity; buyers switch between them." },
    { "term": "Complements", "def": "Goods with negative cross-price elasticity; buyers use them together." },
    { "term": "Price elasticity of supply", "def": "Percentage change in quantity supplied divided by percentage change in price." },
    { "term": "Tax incidence", "def": "How the burden of a tax is actually split between buyers and sellers." },
    { "term": "Determinants of elasticity", "def": "Substitutes, budget share, time to adjust, necessity vs. luxury, and how narrowly the market is defined." }
  ],
  "video": {
    "title": "Elasticity of Demand- Micro Topic  2.3",
    "embedUrl": "https://www.youtube.com/embed/HHcblIxiAAk",
    "note": "Jacob Clifford (ACDC Econ) walks through price elasticity of demand with the formula and the total-revenue test. Watch it, then redo the concert-ticket calculation in this module using the midpoint method.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Concert ticket price rises from $10 to $12 and quantity demanded falls from 100 to 80. Using the midpoint method, calculate the price elasticity of demand and classify it.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: %ΔQ = (80 − 100) ÷ 90 = −20 ÷ 90 = −22.22%. Step 2: %ΔP = (12 − 10) ÷ 11 = 2 ÷ 11 = 18.18%. Step 3: Ed = −22.22% ÷ 18.18% = <strong>−1.22</strong>. Step 4: |Ed| = 1.22 &gt; 1, so demand is <strong>elastic</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A shop sells 200 mugs at $5 (total revenue $1,000). It raises the price to $6 and sells 160 mugs. (a) What is the new total revenue? (b) Does the price rise gain or lose revenue, and why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: New total revenue = 6 × 160 = <strong>$960</strong>. Step 2: Revenue fell from $1,000 to $960, a loss of $40. Step 3: Why: demand is elastic (Ed = −1.22 by the midpoint method), so the quantity lost (40 mugs) outweighs the $1 extra per mug.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Incomes rise 10% and the quantity demanded of restaurant meals rises 15%. Calculate income elasticity and classify the good.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Ey = %ΔQ ÷ %Δincome = 15% ÷ 10% = <strong>1.5</strong>. Step 2: Ey is positive, so restaurant meals are a <strong>normal good</strong>. Step 3: Ey is above 1, so they are a <strong>luxury</strong>: demand grows faster than income.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> The price of tea rises 20% and the quantity of coffee demanded rises 10%. Calculate cross-price elasticity and say whether tea and coffee are substitutes or complements.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Exy = 10% ÷ 20% = <strong>+0.5</strong>. Step 2: The sign is positive, so tea and coffee are <strong>substitutes</strong>: when tea gets dearer, buyers switch to coffee.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> The price of handmade candles rises from $8 to $10 and quantity supplied rises from 200 to 260. Using the midpoint method, calculate the price elasticity of supply.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: %ΔP = (10 − 8) ÷ 9 = 2 ÷ 9 = 22.22%. Step 2: %ΔQ = (260 − 200) ÷ 230 = 60 ÷ 230 = 26.09%. Step 3: Es = 26.09% ÷ 22.22% = <strong>1.17</strong>. Step 4: Es &gt; 1, so supply is elastic.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A $2 tax is placed on cigarettes (inelastic demand) and the same $2 tax is placed on restaurant meals (elastic demand). In which market do buyers bear more of the tax, and why?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Buyers bear more of the tax in the <strong>cigarette</strong> market. Step 2: Why: cigarette buyers have few substitutes and keep buying when the price rises, so sellers can pass the tax on. Step 3: Restaurant-meal buyers easily switch or stay home, so sellers must absorb most of the tax or lose their customers. Step 4: Rule: the less elastic side bears more of the tax.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Price rises from $10 to $12 and quantity demanded falls from 100 to 80. Using the midpoint method, the price elasticity of demand is about:",
      "choices": ["−0.82", "−1.00", "−1.22", "+1.22"],
      "answer": 2,
      "explanation": "Correct: (c). %ΔQ = −20 ÷ 90 = −22.22%; %ΔP = 2 ÷ 11 = 18.18%; −22.22 ÷ 18.18 = −1.22. (a) inverts the ratio. (b) is the simple-method answer, not the midpoint answer. (d) has the wrong sign."
    },
    {
      "q": "Demand is elastic when:",
      "choices": ["|Ed| is less than 1", "|Ed| equals 1", "|Ed| is greater than 1", "Ed equals 0"],
      "answer": 2,
      "explanation": "Correct: (c). Elastic means quantity responds strongly, |Ed| > 1. (a) is inelastic. (b) is unit elastic. (d) is perfectly inelastic."
    },
    {
      "q": "A shop raises its price from $5 to $6 and quantity falls from 200 to 160. Total revenue:",
      "choices": ["Rises from $1,000 to $1,200", "Falls from $1,000 to $960", "Stays at $1,000", "Falls to $800"],
      "answer": 1,
      "explanation": "Correct: (b). New revenue is 6 × 160 = $960, down $40 from $1,000 — the elastic-demand result. (a) multiplies the new price by the old quantity. (c) would be the unit-elastic result. (d) multiplies the old price by the new quantity."
    },
    {
      "q": "Income elasticity is +1.5. The good is a:",
      "choices": ["Inferior good", "Necessity", "Luxury normal good", "Complement"],
      "answer": 2,
      "explanation": "Correct: (c). Positive means normal; above 1 means luxury. (a) needs a negative value. (b) needs a positive value below 1. (d) is a cross-price concept, not an income concept."
    },
    {
      "q": "Cross-price elasticity is +0.5. The two goods are:",
      "choices": ["Complements", "Substitutes", "Unrelated", "Inferior goods"],
      "answer": 1,
      "explanation": "Correct: (b). A positive cross-price elasticity means buyers switch from one to the other. (a) needs a negative value. (c) would need a value near zero. (d) is an income-elasticity concept."
    },
    {
      "q": "The price of candles rises from $8 to $10 and quantity supplied rises from 200 to 260. Using the midpoint method, supply elasticity is about:",
      "choices": ["0.85", "1.00", "1.17", "1.30"],
      "answer": 2,
      "explanation": "Correct: (c). %ΔQ = 60 ÷ 230 = 26.09%; %ΔP = 2 ÷ 9 = 22.22%; 26.09 ÷ 22.22 = 1.17. (a) inverts the ratio. (b) would need %ΔQ to equal %ΔP. (d) uses the wrong averages."
    },
    {
      "q": "Supply is most inelastic in the:",
      "choices": ["Long run, when new firms can enter", "Short run, when producers cannot adjust quickly", "Medium run only", "Market with many substitutes"],
      "answer": 1,
      "explanation": "Correct: (b). In the short run producers cannot change output much, so supply barely responds. (a) is when supply is most elastic. (c) is vague and wrong. (d) is about demand, not supply."
    },
    {
      "q": "A tax is placed on a good with inelastic demand. Who bears most of the tax?",
      "choices": ["Sellers, because buyers can switch away", "Buyers, because they keep buying anyway", "The government, which collects it", "Neither side — the tax disappears"],
      "answer": 1,
      "explanation": "Correct: (b). Inelastic buyers have few alternatives, so sellers pass the tax on in the price. (a) describes elastic demand. (c) confuses who collects the tax with who bears it. (d) Every tax is borne by someone."
    }
  ],
  "studyGuide": "\n<h3>Module 2 — Elasticity: Quick Reference</h3>\n<p><strong>Method used in this course:</strong> the midpoint method — divide each change by the average of the start and end values.</p>\n<div class=\"formula\">Ed = %ΔQd ÷ %ΔP &nbsp;|&nbsp; Ey = %ΔQ ÷ %Δincome &nbsp;|&nbsp; Exy = %ΔQA ÷ %ΔPB &nbsp;|&nbsp; Es = %ΔQs ÷ %ΔP</div>\n<p><strong>Worked anchors:</strong> Tickets P $10→$12, Q 100→80: Ed = −22.22% ÷ 18.18% = −1.22 (elastic). Mugs P $5→$6, Q 200→160: revenue $1,000 → $960. Candles P $8→$10, Q 200→260: Es = 26.09% ÷ 22.22% = 1.17.</p>\n<p><strong>Signs:</strong> Income elasticity positive = normal, negative = inferior, above 1 = luxury. Cross-price positive = substitutes, negative = complements.</p>\n<p><strong>Revenue rule:</strong> Elastic demand → price up, revenue down. Inelastic demand → price up, revenue up.</p>\n<p><strong>Tax rule:</strong> The less elastic side bears more of the tax.</p>\n<p><strong>Watch out:</strong> Keep the minus sign on demand elasticity, and never mix the midpoint method with the simple method in one problem.</p>\n<p><strong>Self-check:</strong> Name one good with elastic demand and one with inelastic demand, and explain why each one is that way.</p>\n"
};
