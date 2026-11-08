// eco102 - Module 1: Supply, Demand & Market Equilibrium
module.exports = {
  "number": 1,
  "slug": "supply-demand-market-equilibrium",
  "title": "Supply, Demand & Market Equilibrium",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain the law of demand and the law of supply in plain words.",
    "Read a demand schedule and a supply schedule and find equilibrium price and quantity.",
    "Predict what happens to price and quantity when demand or supply shifts.",
    "Tell a shortage from a surplus and explain how each one is fixed.",
    "Calculate consumer surplus and producer surplus from a worked example."
  ],
  "sections": [
    {
      "heading": "Demand: What Buyers Will Buy",
      "html": "<p><strong>Demand</strong> is the amount of a good that buyers are willing and able to buy at each price. The <strong>law of demand</strong> says that, other things being equal, a higher price means a lower quantity demanded, and a lower price means a higher quantity demanded. People buy less coffee at $6 a cup than at $3 a cup — not because they like coffee less, but because each cup now costs more of their budget.</p>\n<p>Work with one example all through this module: the market for bagels in a small town. The demand schedule is Qd = 100 − 2P, where P is the price in dollars and Q is bagels per day. At $10, buyers want 100 − 20 = <strong>80 bagels</strong>. At $20, they want 100 − 40 = <strong>60 bagels</strong>. At $30, they want 100 − 60 = <strong>40 bagels</strong>. Plot those points and you get a downward-sloping demand curve.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A change in the price of the good itself moves you <em>along</em> the demand curve. A change in anything else — income, tastes, the price of a substitute — moves the <em>whole curve</em>.</div>"
    },
    {
      "heading": "Supply: What Sellers Will Sell",
      "html": "<p><strong>Supply</strong> is the amount of a good that sellers are willing and able to sell at each price. The <strong>law of supply</strong> says that, other things being equal, a higher price means a higher quantity supplied: a higher price makes selling more attractive, so bakers bake more bagels.</p>\n<p>Our bagel supply schedule is Qs = 20 + 2P. At $10, sellers offer 20 + 20 = <strong>40 bagels</strong>. At $20, they offer 20 + 40 = <strong>60 bagels</strong>. At $30, they offer 20 + 60 = <strong>80 bagels</strong>. The supply curve slopes upward. Like demand, a change in the good's own price moves you along the curve; a change in costs, technology, or the number of sellers shifts the whole curve.</p>\n<p>Notice the symmetry: demand falls by 2 bagels for each $1 of price, and supply rises by 2 bagels for each $1 of price. That symmetry makes the arithmetic in this module easy to check by hand.</p>"
    },
    {
      "heading": "Equilibrium: Where the Two Curves Meet",
      "html": "<p><strong>Market equilibrium</strong> is the price and quantity where quantity demanded equals quantity supplied. Set the two schedules equal: 100 − 2P = 20 + 2P. Subtract 20 from both sides and add 2P to both sides: 80 = 4P, so P = <strong>$20</strong>. Plug back in: Q = 100 − 2 × 20 = <strong>60 bagels</strong>. Check the supply side: 20 + 2 × 20 = 60. Both sides agree — that is the check that matters.</p>\n<p>At equilibrium nobody is forced to do anything. Buyers who value a bagel at $20 or more buy one; sellers who can bake one for $20 or less sell one. The market clears: nothing is left unsold and nobody goes home empty-handed who was willing to pay the going price.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Equilibrium is not a law or a rule — it is the one price where the plans of buyers and sellers match. Any other price leaves a gap, and the gap pushes the price back.</div>"
    },
    {
      "heading": "Shortages, Surpluses, and Shifts",
      "html": "<p>At $25 a bagel, quantity demanded is 100 − 50 = <strong>50</strong> and quantity supplied is 20 + 50 = <strong>70</strong>. Supply exceeds demand by 20 bagels: a <strong>surplus</strong> of 20. Bakers with unsold bagels cut the price to move them, and the price drifts back toward $20. At $15, quantity demanded is 100 − 30 = <strong>70</strong> and quantity supplied is 20 + 30 = <strong>50</strong>: a <strong>shortage</strong> of 20. Buyers compete for scarce bagels, bidding the price up toward $20.</p>\n<p>Now shift a curve. Suppose incomes rise and buyers want 20 more bagels at every price: the new demand is Qd = 120 − 2P. The new equilibrium is 120 − 2P = 20 + 2P, so 100 = 4P, P = <strong>$25</strong>, and Q = 120 − 50 = <strong>70 bagels</strong>. Demand up means price up and quantity up. Suppose instead baking gets cheaper and supply becomes Qs = 40 + 2P: 100 − 2P = 40 + 2P gives 60 = 4P, P = <strong>$15</strong>, Q = 100 − 30 = <strong>70 bagels</strong>. Supply up means price down and quantity up.</p>\n<div class=\"formula\">Equilibrium: Qd = Qs &nbsp;|&nbsp; Surplus = Qs − Qd (price too high) &nbsp;|&nbsp; Shortage = Qd − Qs (price too low)</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Demand slopes down; supply slopes up. Price changes move you along a curve; other changes shift the curve.</li>\n<li>Our bagel market: Qd = 100 − 2P, Qs = 20 + 2P, equilibrium P = $20, Q = 60 bagels a day.</li>\n<li>At $25 there is a surplus of 20; at $15 there is a shortage of 20. Both push the price back to $20.</li>\n<li>A demand increase raises price and quantity; a supply increase lowers price and raises quantity.</li>\n<li>Consumer surplus here: buyers would pay up to $50 for the first bagel (set Qd = 0, P = 50), so CS = ½ × ($50 − $20) × 60 = $900. Producer surplus: sellers would supply the first bagel at −$10 (set Qs = 0, P = −10), so PS = ½ × ($20 − (−$10)) × 60 = $900. Total surplus is $1,800.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Saying \"demand increased\" when only the price changed. A price change is a movement <em>along</em> the curve. Demand increases only when buyers want more at <em>every</em> price — the whole curve shifts right.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Mixing up shortage and surplus. Shortage = buyers want more than sellers offer (price too low). Surplus = sellers offer more than buyers want (price too high).</div>\n<p><strong>Ready-to-Work link:</strong> Every price you see — a coffee, a haircut, a used car — is an equilibrium like this one, pushed around by shifts in demand and supply. If you can name the shift, you can predict the direction of the price.</p>"
    }
  ],
  "keyTerms": [
    { "term": "Demand", "def": "The amount of a good buyers are willing and able to buy at each price." },
    { "term": "Law of demand", "def": "Other things equal, a higher price means a lower quantity demanded." },
    { "term": "Supply", "def": "The amount of a good sellers are willing and able to sell at each price." },
    { "term": "Law of supply", "def": "Other things equal, a higher price means a higher quantity supplied." },
    { "term": "Demand schedule", "def": "A table showing quantity demanded at each price, such as Qd = 100 − 2P." },
    { "term": "Supply schedule", "def": "A table showing quantity supplied at each price, such as Qs = 20 + 2P." },
    { "term": "Market equilibrium", "def": "The price and quantity where quantity demanded equals quantity supplied." },
    { "term": "Equilibrium price", "def": "The price at which the market clears; $20 in the bagel example." },
    { "term": "Equilibrium quantity", "def": "The quantity bought and sold at the equilibrium price; 60 bagels a day in the example." },
    { "term": "Shortage", "def": "Quantity demanded exceeds quantity supplied, so the price is pushed up." },
    { "term": "Surplus", "def": "Quantity supplied exceeds quantity demanded, so the price is pushed down." },
    { "term": "Shift in demand", "def": "The whole demand curve moves because something other than the good's own price changed." },
    { "term": "Shift in supply", "def": "The whole supply curve moves because costs, technology, or the number of sellers changed." },
    { "term": "Substitute good", "def": "A good buyers switch to when another good gets more expensive, such as tea for coffee." },
    { "term": "Complement good", "def": "A good bought together with another, such as bagels and cream cheese." },
    { "term": "Consumer surplus", "def": "What buyers save: the gap between what they would pay and what they do pay; $900 in the bagel example." },
    { "term": "Producer surplus", "def": "What sellers gain: the gap between the price they receive and the lowest price they would accept; $900 in the example." },
    { "term": "Total surplus", "def": "Consumer surplus plus producer surplus; $1,800 in the bagel example." }
  ],
  "video": {
    "title": "The Equilibrium Price and Quantity",
    "embedUrl": "https://www.youtube.com/embed/7eZcPs9z9OA",
    "note": "Marginal Revolution University shows how a market finds its equilibrium price and quantity, and why a price above or below equilibrium creates a surplus or a shortage. Watch it, then redo the bagel arithmetic in this module by hand.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> In the bagel market, Qd = 100 − 2P and Qs = 20 + 2P. Find the equilibrium price and quantity, showing each step.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Set Qd = Qs: 100 − 2P = 20 + 2P. Step 2: Add 2P to both sides and subtract 20: 80 = 4P. Step 3: Divide by 4: P = <strong>$20</strong>. Step 4: Q = 100 − 2 × 20 = <strong>60 bagels</strong>. Step 5: Check on supply: 20 + 2 × 20 = 60. Both sides agree.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> At a price of $25, what are quantity demanded and quantity supplied in the bagel market? Is there a shortage or a surplus, and of how many bagels?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Qd = 100 − 2 × 25 = 100 − 50 = <strong>50</strong>. Step 2: Qs = 20 + 2 × 25 = 20 + 50 = <strong>70</strong>. Step 3: Supply exceeds demand by 70 − 50 = <strong>20</strong>, so this is a <strong>surplus of 20 bagels</strong>. Step 4: Unsold bagels push sellers to cut the price back toward $20.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> At a price of $15, what are quantity demanded and quantity supplied? Is there a shortage or a surplus, and of how many bagels?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Qd = 100 − 2 × 15 = 100 − 30 = <strong>70</strong>. Step 2: Qs = 20 + 2 × 15 = 20 + 30 = <strong>50</strong>. Step 3: Demand exceeds supply by 70 − 50 = <strong>20</strong>, so this is a <strong>shortage of 20 bagels</strong>. Step 4: Buyers competing for scarce bagels bid the price up toward $20.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Incomes rise and bagel demand becomes Qd = 120 − 2P (supply unchanged at Qs = 20 + 2P). Find the new equilibrium price and quantity.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Set 120 − 2P = 20 + 2P. Step 2: Rearrange: 100 = 4P, so P = <strong>$25</strong>. Step 3: Q = 120 − 2 × 25 = 120 − 50 = <strong>70 bagels</strong>. Step 4: Check: 20 + 2 × 25 = 70. A demand increase raised both price ($20 to $25) and quantity (60 to 70).</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Baking gets cheaper and bagel supply becomes Qs = 40 + 2P (demand unchanged at Qd = 100 − 2P). Find the new equilibrium price and quantity.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Set 100 − 2P = 40 + 2P. Step 2: Rearrange: 60 = 4P, so P = <strong>$15</strong>. Step 3: Q = 100 − 2 × 15 = 100 − 30 = <strong>70 bagels</strong>. Step 4: Check: 40 + 2 × 15 = 70. A supply increase lowered the price ($20 to $15) and raised the quantity (60 to 70).</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Using the original equilibrium (P = $20, Q = 60), calculate consumer surplus and producer surplus. (Hint: demand hits zero quantity at P = $50; supply hits zero quantity at P = −$10.)</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Consumer surplus is the triangle under the demand curve above the price: ½ × ($50 − $20) × 60 = ½ × $30 × 60 = <strong>$900</strong>. Step 2: Producer surplus is the triangle above the supply curve below the price: ½ × ($20 − (−$10)) × 60 = ½ × $30 × 60 = <strong>$900</strong>. Step 3: Total surplus = $900 + $900 = <strong>$1,800</strong> a day.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The law of demand says that, other things being equal:",
      "choices": ["A higher price means a higher quantity demanded", "A higher price means a lower quantity demanded", "Price has no effect on how much buyers want", "Demand always rises when income rises"],
      "answer": 1,
      "explanation": "Correct: (b). Higher price, lower quantity demanded — the demand curve slopes down. (a) describes supply, not demand. (c) contradicts the whole idea of a demand curve. (d) is wrong for inferior goods, where demand falls as income rises."
    },
    {
      "q": "In the bagel market (Qd = 100 − 2P, Qs = 20 + 2P), the equilibrium price and quantity are:",
      "choices": ["$15 and 70 bagels", "$20 and 60 bagels", "$25 and 50 bagels", "$10 and 80 bagels"],
      "answer": 1,
      "explanation": "Correct: (b). Setting 100 − 2P = 20 + 2P gives 80 = 4P, P = $20, Q = 60. (a) is the equilibrium after a supply increase. (c) gives Qd = 50, not Qs. (d) gives Qd = 80 but Qs = 40 — not an equilibrium."
    },
    {
      "q": "At a price of $25 in the bagel market, there is a:",
      "choices": ["Shortage of 20 bagels", "Surplus of 20 bagels", "Shortage of 50 bagels", "Equilibrium"],
      "answer": 1,
      "explanation": "Correct: (b). Qd = 50 and Qs = 70, so 20 bagels go unsold — a surplus. (a) reverses it: a shortage needs demand above supply. (c) uses the wrong gap. (d) is wrong because Qd ≠ Qs at $25."
    },
    {
      "q": "At a price of $15 in the bagel market, there is a:",
      "choices": ["Surplus of 20 bagels", "Shortage of 20 bagels", "Surplus of 70 bagels", "Equilibrium"],
      "answer": 1,
      "explanation": "Correct: (b). Qd = 70 and Qs = 50, so buyers want 20 more bagels than sellers offer — a shortage. (a) reverses it. (c) is the quantity demanded, not the gap. (d) is wrong because Qd ≠ Qs at $15."
    },
    {
      "q": "If bagel demand rises to Qd = 120 − 2P, the new equilibrium is:",
      "choices": ["$15 and 70 bagels", "$20 and 60 bagels", "$25 and 70 bagels", "$25 and 50 bagels"],
      "answer": 2,
      "explanation": "Correct: (c). 120 − 2P = 20 + 2P gives P = $25 and Q = 70. (a) is the supply-increase answer. (b) is the old equilibrium. (d) is the quantity demanded at $25 under the old demand curve."
    },
    {
      "q": "If bagel supply rises to Qs = 40 + 2P, the new equilibrium price and quantity are:",
      "choices": ["$25 and 70 bagels", "$20 and 60 bagels", "$15 and 70 bagels", "$15 and 50 bagels"],
      "answer": 2,
      "explanation": "Correct: (c). 100 − 2P = 40 + 2P gives P = $15 and Q = 70. (a) is the demand-increase answer. (b) is the old equilibrium. (d) has the right price but the wrong quantity."
    },
    {
      "q": "Which change shifts the demand curve for bagels to the right?",
      "choices": ["The price of bagels falls from $20 to $15", "The price of bagels rises from $20 to $25", "Buyers' incomes rise", "The price of flour falls"],
      "answer": 2,
      "explanation": "Correct: (c). Higher incomes mean more bagels wanted at every price — the curve shifts right. (a) and (b) are movements along the curve, not shifts. (d) lowers bakers' costs, so it shifts supply, not demand."
    },
    {
      "q": "In the bagel example, consumer surplus at equilibrium is:",
      "choices": ["$900", "$1,800", "$600", "$300"],
      "answer": 0,
      "explanation": "Correct: (a). CS = ½ × ($50 − $20) × 60 = $900. (b) is total surplus (consumer plus producer). (c) would need a $20 price gap. (d) would need a $10 price gap."
    }
  ],
  "studyGuide": "\n<h3>Module 1 — Supply, Demand & Market Equilibrium: Quick Reference</h3>\n<p><strong>Core idea:</strong> The market price is where buyers' plans and sellers' plans match — quantity demanded equals quantity supplied.</p>\n<p><strong>Worked anchor:</strong> Qd = 100 − 2P, Qs = 20 + 2P. Equilibrium: 100 − 2P = 20 + 2P → P = $20, Q = 60 bagels.</p>\n<p><strong>Gaps:</strong> At $25, Qd = 50, Qs = 70 → surplus of 20. At $15, Qd = 70, Qs = 50 → shortage of 20.</p>\n<p><strong>Shifts:</strong> Demand up (Qd = 120 − 2P) → P = $25, Q = 70. Supply up (Qs = 40 + 2P) → P = $15, Q = 70.</p>\n<div class=\"formula\">Equilibrium: Qd = Qs &nbsp;|&nbsp; CS = ½ × (top of demand − price) × Q &nbsp;|&nbsp; PS = ½ × (price − bottom of supply) × Q</div>\n<p><strong>Surplus in the example:</strong> CS = $900, PS = $900, total = $1,800.</p>\n<p><strong>Watch out:</strong> A price change moves you <em>along</em> a curve; only other factors shift the curve. Shortage means price too low; surplus means price too high.</p>\n<p><strong>Self-check:</strong> Pick a product you buy weekly. What would shift its demand? What would shift its supply? Which way would the price go in each case?</p>\n"
};
