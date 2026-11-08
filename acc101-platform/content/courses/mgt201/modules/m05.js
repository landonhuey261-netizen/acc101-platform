// mgt201 - Module 5: Inventory Management: EOQ, Safety Stock & Just-in-Time
module.exports = {
  "number": 5,
  "slug": "inventory-management-eoq-safety-stock-jit",
  "title": "Inventory Management: EOQ, Safety Stock & Just-in-Time",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain why inventory exists and what it costs to hold too much or too little.",
    "Compute the economic order quantity (EOQ) from demand, ordering cost, and holding cost.",
    "Compute the reorder point and safety stock for a chosen service level.",
    "Explain ABC analysis and when each class deserves tight control.",
    "Compare just-in-time with traditional stockholding and say when each fits."
  ],
  "sections": [
    {
      "heading": "Why Hold Stock — and Why Not Too Much",
      "html": "\n<p><strong>Inventory</strong> is the stock a business holds: raw materials, work in progress, and finished goods. It exists for good reasons: to meet demand while the next delivery is in transit, to protect against a late supplier or a surge in orders, and to buy in economical quantities. But every unit on a shelf costs money — the cash tied up in it, the space, the insurance, the risk it goes obsolete or gets damaged — and every unit missing costs money too, in lost sales and stopped production.</p>\n<p>The costs split into two families that pull in opposite directions. <strong>Holding (carrying) cost</strong> grows with the amount held: storage, insurance, spoilage, obsolescence, and the interest on the cash tied up. <strong>Ordering cost</strong> grows with how often you order: paperwork, delivery, receiving, and inspection per order. Order in huge batches and holding cost soars; order in tiny batches and ordering cost soars. The best order size sits where the two balance — which is exactly what the EOQ formula finds.</p>\n<p>There is also the cost nobody budgets for: stock that nobody wants. Obsolete stock is cash turned into clutter, and it is the silent killer of small businesses that \"buy while it is cheap\" without a plan for selling it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Inventory is a balance, not a pile. Too much ties up cash and space; too little stops production and loses sales. The right amount is a calculation, not a guess.</div>"
    },
    {
      "heading": "EOQ: The Order Size That Minimizes Cost",
      "html": "\n<p>The <strong>economic order quantity (EOQ)</strong> is the order size that minimizes the total of ordering and holding costs. The formula is EOQ = √(2DS ÷ H), where D is annual demand, S is the ordering cost per order, and H is the annual holding cost per unit. At the EOQ, the annual ordering cost exactly equals the annual holding cost — that balance is the signature of the optimum.</p>\n<p><strong>Worked example.</strong> A parts shop uses 12,000 units a year (D = 12,000). Each order costs $60 to place (S = 60), and holding one unit for a year costs $4 (H = 4). Step 1: EOQ = √(2 × 12,000 × 60 ÷ 4) = √(1,440,000 ÷ 4) = √360,000 = <strong>600 units</strong>. Step 2: orders per year = 12,000 ÷ 600 = <strong>20 orders</strong>. Step 3: annual ordering cost = 20 × $60 = $1,200; annual holding cost = (600 ÷ 2) × $4 = $1,200; total relevant cost = <strong>$2,400</strong>. Notice the two costs are equal — that is how you know the calculation is right.</p>\n<p>EOQ assumes steady demand, known costs, and instant delivery. Real life is messier, which is why the formula is a starting point and a sanity check, not a law. When demand is lumpy or lead times vary, the answer is adjusted — and safety stock (next section) covers the uncertainty EOQ ignores.</p>\n<div class=\"formula\">EOQ = √(2DS ÷ H) &nbsp;|&nbsp; Orders per year = D ÷ EOQ &nbsp;|&nbsp; At EOQ, ordering cost = holding cost</div>"
    },
    {
      "heading": "When to Order: Reorder Point and Safety Stock",
      "html": "\n<p>EOQ says how much to order; the <strong>reorder point (ROP)</strong> says when. If average daily demand is 80 units and the supplier takes 5 days to deliver, the business will use 80 × 5 = 400 units during the lead time — so it must order when stock falls to 400, or it will run out while waiting. Add safety stock for the days demand is higher than average or delivery is late.</p>\n<p><strong>Safety stock</strong> is the extra stock held to cover uncertainty, set by the service level the business wants. The formula is: safety stock = z × σd × √(lead time), where σd is the standard deviation of daily demand and z is the service factor — 1.65 for 95% service, 1.96 for 97.5%, 2.33 for 99%. Higher service costs more stock, and the last few percentage points are the most expensive.</p>\n<p><strong>Worked check.</strong> Daily demand averages 80 units with σd = 12, lead time is 5 days, and the shop wants 95% service (z = 1.65). Step 1: safety stock = 1.65 × 12 × √5 = 1.65 × 12 × 2.236 = 44.27, rounded up to <strong>45 units</strong>. Step 2: reorder point = (80 × 5) + 45 = 400 + 45 = <strong>445 units</strong>. Order 600 (the EOQ) whenever stock falls to 445.</p>\n<div class=\"formula\">Safety stock = z × σd × √(Lead time) &nbsp;|&nbsp; Reorder point = (Average daily demand × Lead time) + Safety stock</div>"
    },
    {
      "heading": "ABC Analysis and Just-in-Time",
      "html": "\n<p>Not all stock deserves the same attention. <strong>ABC analysis</strong> ranks items by their annual usage value: <strong>A items</strong> are the few that account for most of the money (roughly 20% of items, 80% of value) and get tight control, frequent counts, and careful EOQ treatment; <strong>B items</strong> get moderate control; <strong>C items</strong> are the many cheap items (roughly 50% of items, 5% of value) managed simply, often with a two-bin system. The point is to spend management time where the money is.</p>\n<p><strong>Just-in-time (JIT)</strong> takes the opposite approach to stockholding: instead of buffering uncertainty with inventory, it removes the uncertainty — reliable suppliers, small frequent deliveries, and production pulled by actual orders, so stock arrives just as it is needed. JIT exposes problems instead of hiding them behind piles of stock: a late supplier stops the line immediately, so the supplier must be fixed. It needs dependable suppliers, stable demand, and good quality; without those, JIT is a stockout machine.</p>\n<p>The honest choice is usually a mix: JIT for fast, reliable, high-volume items; safety stock for the critical parts whose absence stops everything. A hospital does not run JIT on emergency drugs, and a car plant does not hold six months of windshields. The inventory policy follows the cost of a stockout.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Spend control where the money is (ABC), and choose stock policy by the cost of running out — JIT where supply is reliable, safety stock where a stockout stops everything.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Inventory balances holding cost (grows with batch size) against ordering cost (grows with order frequency).</li>\n<li>EOQ = √(2DS ÷ H); at the EOQ, annual ordering cost equals annual holding cost — the check that the math is right.</li>\n<li>Reorder point = average demand during lead time + safety stock; safety stock = z × σd × √(lead time).</li>\n<li>ABC analysis focuses tight control on the few items that carry most of the value.</li>\n<li>JIT removes the need for stock by removing uncertainty — it needs reliable suppliers, stable demand, and good quality.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Ordering \"a year's supply while it is cheap.\" The holding cost — cash, space, obsolescence — usually eats the discount, and the stock becomes clutter that cannot be sold. EOQ exists to stop exactly this.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Setting safety stock by gut feel. Too little and the business stocks out on the busiest week; too much and cash sits on shelves. Pick a service level, use the formula, and round up — safety stock is insurance, and insurance is bought, not guessed.</div>\n<p><strong>Next step:</strong> Module 6 widens the view from one warehouse to the whole chain — supply chain management, from supplier to customer.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Inventory",
      "def": "Stock held by a business: raw materials, work in progress, and finished goods."
    },
    {
      "term": "Holding (carrying) cost",
      "def": "The cost of keeping stock: storage, insurance, spoilage, obsolescence, and the interest on tied-up cash."
    },
    {
      "term": "Ordering cost",
      "def": "The cost of placing an order: paperwork, delivery, receiving, and inspection, per order."
    },
    {
      "term": "EOQ",
      "def": "Economic order quantity: the order size that minimizes total ordering plus holding costs, √(2DS ÷ H)."
    },
    {
      "term": "Reorder point (ROP)",
      "def": "The stock level at which a new order must be placed to avoid running out during the lead time."
    },
    {
      "term": "Safety stock",
      "def": "Extra stock held to cover demand or lead-time uncertainty, set by the desired service level."
    },
    {
      "term": "Lead time",
      "def": "The time between placing an order and receiving it."
    },
    {
      "term": "Service level",
      "def": "The probability of not running out of stock during a replenishment cycle, such as 95%."
    },
    {
      "term": "Service factor (z)",
      "def": "The number of standard deviations of safety stock for a chosen service level — 1.65 for 95%, 1.96 for 97.5%, 2.33 for 99%."
    },
    {
      "term": "ABC analysis",
      "def": "Ranking inventory by annual usage value: A items (few, most value) get tight control; C items (many, little value) get simple control."
    },
    {
      "term": "Just-in-time (JIT)",
      "def": "Producing and receiving stock only as needed, pulled by actual demand, to minimize inventory."
    },
    {
      "term": "Stockout",
      "def": "Running out of an item, losing sales or stopping production."
    },
    {
      "term": "Cycle stock",
      "def": "The stock that is used up and replenished in each order cycle — on average, half the order quantity."
    },
    {
      "term": "Two-bin system",
      "def": "A simple control: use from one bin, and order when the first bin is empty and work starts on the second."
    }
  ],
  "video": {
    "title": "Inventory Management: Economic Order Quantity (EOQ) Model Video 1",
    "embedUrl": "https://www.youtube.com/embed/avwz_sO9eyw",
    "note": "Works through the EOQ model with examples — the same formula as this module, with a spreadsheet-style walk-through. Follow the numbers, then redo the module's worked example (D = 12,000, S = $60, H = $4) yourself before checking the answer.",
    "more": [
      {
        "title": "Economic Order Quantity (EOQ) made easy",
        "url": "https://www.youtube.com/watch?v=iMBXwAgl6n4"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A shop uses 12,000 units a year, each order costs $60, and holding one unit for a year costs $4. (a) What is the EOQ? (b) How many orders a year? (c) What is the total relevant cost?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) EOQ = √(2 × 12,000 × 60 ÷ 4) = √360,000 = <strong>600 units</strong>. Step 2: (b) Orders = 12,000 ÷ 600 = <strong>20 a year</strong>. Step 3: (c) Ordering cost = 20 × $60 = $1,200; holding cost = (600 ÷ 2) × $4 = $1,200; total = <strong>$2,400</strong>. The two costs are equal, confirming the optimum.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A firm uses 10,000 units a year, ordering costs $72 per order, holding costs $9 per unit per year. (a) What is the EOQ? (b) How many orders a year? (c) What is the total relevant cost?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) EOQ = √(2 × 10,000 × 72 ÷ 9) = √(1,440,000 ÷ 9) = √160,000 = <strong>400 units</strong>. Step 2: (b) Orders = 10,000 ÷ 400 = <strong>25 a year</strong>. Step 3: (c) Ordering = 25 × $72 = $1,800; holding = (400 ÷ 2) × $9 = $1,800; total = <strong>$3,600</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> Daily demand averages 80 units with σd = 12, lead time is 5 days, service level 95% (z = 1.65). (a) What is the safety stock, rounded up? (b) What is the reorder point?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Safety stock = 1.65 × 12 × √5 = 1.65 × 12 × 2.236 = 44.27, rounded up to <strong>45 units</strong>. Step 2: (b) Reorder point = (80 × 5) + 45 = 400 + 45 = <strong>445 units</strong>. Order the EOQ of 600 whenever stock falls to 445.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A different shop has daily demand 50 units with σd = 10, lead time 4 days, service level 97.5% (z = 1.96). (a) What is the safety stock, rounded up? (b) What is the reorder point?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Safety stock = 1.96 × 10 × √4 = 1.96 × 10 × 2 = 39.2, rounded up to <strong>40 units</strong>. Step 2: (b) Reorder point = (50 × 4) + 40 = 200 + 40 = <strong>240 units</strong>.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A firm orders 1,200 units at a time although its EOQ is 600. Holding cost is $4 per unit per year and ordering cost is $60 per order, with annual demand 12,000. How much extra does the oversized order cost a year?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: At EOQ 600, total relevant cost = $2,400 (Problem 1). Step 2: At 1,200: orders = 12,000 ÷ 1,200 = 10; ordering cost = 10 × $60 = $600; holding cost = (1,200 ÷ 2) × $4 = $2,400; total = $3,000. Step 3: Extra cost = $3,000 − $2,400 = <strong>$600 a year</strong> — the price of 'buying while it is cheap' without doing the math.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A shop's A items are 20% of its lines and 80% of its inventory value. (a) How should A items be controlled? (b) A critical A item is ordered JIT with no safety stock, and its supplier is late twice a month. What should change, and why?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) A items get tight control — accurate records, frequent counts, EOQ ordering, and careful service levels — because that is where the money is. Step 2: (b) JIT with no safety stock only works with a reliable supplier; this one is late twice a month, so the shop must hold safety stock for this item (or find a reliable supplier). Step 3: The cost of a stockout on a critical A item outweighs the holding cost — the inventory policy follows the cost of running out.</p>"
    }
  ],
  "quiz": [
    {
      "q": "EOQ is the order quantity that:",
      "choices": [
        "Uses up the whole warehouse",
        "Minimizes total ordering plus holding costs",
        "Orders once a year",
        "Eliminates safety stock"
      ],
      "answer": 1,
      "explanation": "Correct: (b). EOQ balances ordering and holding costs at their joint minimum. (a) is a storage decision, not an optimum. (c) is one possible cycle, not the definition. (d) safety stock is a separate decision about uncertainty."
    },
    {
      "q": "D = 12,000, S = $60, H = $4. EOQ is:",
      "choices": [
        "300 units",
        "600 units",
        "1,200 units",
        "2,400 units"
      ],
      "answer": 1,
      "explanation": "Correct: (b). √(2 × 12,000 × 60 ÷ 4) = √360,000 = 600. (a) is half the answer. (c) doubles it. (d) is the total relevant cost, not the quantity."
    },
    {
      "q": "At the EOQ, annual ordering cost and annual holding cost are:",
      "choices": [
        "Equal",
        "Unrelated",
        "Both zero",
        "Ordering cost is double holding cost"
      ],
      "answer": 0,
      "explanation": "Correct: (a). At the optimum the two costs are equal — the check that the calculation is right. (b) they are linked by the formula. (c) both are positive. (d) reverses the balance."
    },
    {
      "q": "Daily demand 80, σd = 12, lead time 5 days, z = 1.65. Safety stock (rounded up) is:",
      "choices": [
        "40 units",
        "45 units",
        "60 units",
        "400 units"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 1.65 × 12 × √5 = 44.27, rounded up to 45. (a) is the 97.5% answer for different numbers. (c) is 1.65 × 12 × 3. (d) is the demand during lead time without safety stock."
    },
    {
      "q": "With the same numbers, the reorder point is:",
      "choices": [
        "400 units",
        "445 units",
        "600 units",
        "45 units"
      ],
      "answer": 1,
      "explanation": "Correct: (b). (80 × 5) + 45 = 445. (a) omits the safety stock. (c) is the EOQ. (d) is the safety stock alone."
    },
    {
      "q": "ABC analysis says:",
      "choices": [
        "Count every item equally",
        "Focus tight control on the few items that carry most of the value",
        "Never hold C items",
        "Order everything in the same quantity"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A items (about 20% of lines, 80% of value) get the attention. (a) wastes management time on cheap items. (c) C items are still needed, just managed simply. (d) ignores the value differences entirely."
    },
    {
      "q": "Just-in-time works best when:",
      "choices": [
        "Suppliers are unreliable and demand is volatile",
        "Suppliers are reliable, demand is stable, and quality is good",
        "The business has unlimited warehouse space",
        "Nobody tracks inventory"
      ],
      "answer": 1,
      "explanation": "Correct: (b). JIT removes buffers, so it needs reliability, stability, and quality. (a) is the situation where JIT fails fastest. (c) is the opposite of JIT's logic. (d) JIT needs better tracking, not none."
    },
    {
      "q": "D = 10,000, S = $72, H = $9. The EOQ and the orders per year are:",
      "choices": [
        "400 units and 25 orders",
        "600 units and 20 orders",
        "200 units and 50 orders",
        "1,000 units and 10 orders"
      ],
      "answer": 0,
      "explanation": "Correct: (a). EOQ = √(2 × 10,000 × 72 ÷ 9) = √160,000 = 400; orders = 10,000 ÷ 400 = 25. (b) is the 12,000-unit example's answer. (c) and (d) come from no correct arithmetic on these numbers."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Inventory Management: Quick Reference</h3>\n<p><strong>Core idea:</strong> Inventory balances holding cost (grows with batch size) against ordering cost (grows with order frequency). At the EOQ the two are equal.</p>\n<div class=\"formula\">EOQ = √(2DS ÷ H) &nbsp;|&nbsp; Orders per year = D ÷ EOQ</div>\n<div class=\"formula\">Safety stock = z × σd × √(Lead time) &nbsp;|&nbsp; Reorder point = (Average daily demand × Lead time) + Safety stock</div>\n<p><strong>Service factors:</strong> z = 1.65 for 95% · 1.96 for 97.5% · 2.33 for 99%. Round safety stock up — it is insurance, bought not guessed.</p>\n<p><strong>ABC:</strong> A items (few, most value) get tight control; C items get simple control. <strong>JIT:</strong> pull by real demand, no buffer — needs reliable suppliers, stable demand, good quality.</p>\n<p><strong>Watch out:</strong> \"Buy a year's supply while it is cheap\" usually costs more in holding than it saves. And safety stock set by gut feel is either a stockout or cash on shelves.</p>\n<p><strong>Self-check:</strong> For one item you know, compute its EOQ, its orders per year, and its reorder point at 95% service — then check whether the two costs are equal at the EOQ.</p>\n"
};
