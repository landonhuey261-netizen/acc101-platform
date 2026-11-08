// mgt201 - Module 6: Supply Chain Management: From Supplier to Customer
module.exports = {
  "number": 6,
  "slug": "supply-chain-management",
  "title": "Supply Chain Management: From Supplier to Customer",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe a supply chain and the flows of materials, information, and money in it.",
    "Explain the bullwhip effect and how information sharing reduces it.",
    "Compare the four supplier-selection criteria: cost, quality, reliability, and flexibility.",
    "Explain outsourcing, offshoring, and nearshoring and when each makes sense.",
    "Explain how supply chain risk is managed after a disruption."
  ],
  "sections": [
    {
      "heading": "What a Supply Chain Is",
      "html": "\n<p>A <strong>supply chain</strong> is the network of organizations that moves a product from raw material to the final customer: suppliers, manufacturers, distributors, retailers, and the customer, plus the transport and warehouses between them. Three things flow through it: <strong>materials</strong> (moving forward, from supplier to customer), <strong>information</strong> (moving both ways — orders forward, forecasts and sales data backward), and <strong>money</strong> (moving backward, from customer to supplier). When any of the three flows breaks, the chain stops.</p>\n<p><strong>Supply chain management (SCM)</strong> is the coordination of that whole network, not just one company's warehouse. A chain is only as strong as its weakest link: the best factory in the world cannot ship if its supplier is late, and the best product cannot sell if the retailer has no stock. That is why companies now compete chain against chain, not just company against company.</p>\n<p>Two performance goals pull against each other. <strong>Efficiency</strong> means low cost — lean inventories, full trucks, cheap suppliers. <strong>Responsiveness</strong> means speed and flexibility — fast delivery, custom orders, quick changes. A discount retailer competes on efficiency; a fashion brand competes on responsiveness. The chain must be designed for the strategy it serves.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Three flows — materials forward, money backward, information both ways. A chain is only as strong as its weakest link, and it must be designed for efficiency or responsiveness, not both at once.</div>"
    },
    {
      "heading": "The Bullwhip Effect",
      "html": "\n<p>The <strong>bullwhip effect</strong> is the way a small change in customer demand grows into a huge swing as it travels up the chain. A retailer sees demand rise 5% and orders 10% more to be safe; the distributor sees a 10% rise and orders 20% more; the factory sees 20% and adds a shift. By the time the signal reaches the raw-material supplier, a 5% ripple has become a 50% wave — and when demand falls back, the chain is left with piles of stock nobody wants.</p>\n<p>The causes are all information problems: orders that batch up, forecasts built on orders rather than real sales, price promotions that make customers buy ahead, and rationing that makes buyers over-order to get their share. The cure is the same in every case: share real information. When every link sees the same point-of-sale data at the same time, nobody needs to guess, and the whip flattens.</p>\n<p>Practical fixes follow: smaller, more frequent orders instead of monthly batches; everyday low prices instead of promotions that distort buying; and vendor-managed inventory, where the supplier watches the retailer's actual stock and replenishes it. The bullwhip is a reminder that the most expensive inventory in a chain is the inventory ordered on a guess.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The bullwhip effect is small demand changes amplified up the chain by guesswork. The cure is shared, real sales data — every link seeing the same demand at the same time.</div>"
    },
    {
      "heading": "Choosing and Managing Suppliers",
      "html": "\n<p>Choosing a supplier is a decision about four things: <strong>cost</strong> (price, but also total cost — delivery, defects, and delays), <strong>quality</strong> (does the part meet specification every time?), <strong>reliability</strong> (on time, in full, every time?), and <strong>flexibility</strong> (can the supplier change quantity or specification quickly?). The cheapest supplier that delivers late and ships defects is the most expensive supplier there is.</p>\n<p>Relationships come in two styles. A <strong>transactional</strong> relationship treats suppliers as interchangeable and squeezes price on every order — fine for standard items with many sources. A <strong>strategic partnership</strong> invests in a few key suppliers, shares forecasts and plans, and improves together — the right choice for critical parts where a failure stops production. Most companies run both: partnerships for the critical few, transactions for the rest.</p>\n<p>Two sourcing strategies matter here. <strong>Single sourcing</strong> (one supplier) gives leverage, deep partnership, and low cost — but a single failure stops the business. <strong>Dual sourcing</strong> (two suppliers) costs more but keeps the business running when one fails. After the supply disruptions of recent years, many firms have moved critical parts from single to dual sourcing, accepting the cost for the resilience.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Judge a supplier on total cost — price plus defects plus delays — not on price alone. Partnership for the critical few; transactions for the rest; dual source where a failure would stop the business.</div>"
    },
    {
      "heading": "Outsourcing, Offshoring, and Risk",
      "html": "\n<p><strong>Outsourcing</strong> is buying a function from another company instead of doing it in-house — a bakery buying its delivery from a courier, a manufacturer buying its payroll from a specialist. It makes sense when the other company does it better or cheaper, and when the function is not the heart of the business. It is a mistake when the function is the business's advantage — outsourcing your recipe is giving away the bakery.</p>\n<p><strong>Offshoring</strong> moves work to another country for lower cost; <strong>nearshoring</strong> moves it to a nearby country for a balance of cost and control, with shorter lead times and similar time zones. Reshoring — bringing work back home — has grown as companies weigh the hidden costs of distance: long lead times, quality problems, and the risk that a distant disruption stops everything.</p>\n<p>Supply chain risk is managed the way any risk is: identify the critical single points of failure, estimate the cost of a disruption, and buy resilience where it is cheapest — dual sourcing, safety stock on critical items, and visibility into suppliers' own suppliers. A chain you cannot see is a chain you cannot manage.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Outsource what others do better and is not your advantage. Buy resilience where it is cheapest — dual sourcing and safety stock on the critical few, visibility everywhere else.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>A supply chain carries materials forward, money backward, and information both ways; it must be designed for efficiency or responsiveness.</li>\n<li>The bullwhip effect amplifies small demand changes up the chain; shared real sales data flattens it.</li>\n<li>Choose suppliers on total cost — price, quality, reliability, flexibility — not price alone.</li>\n<li>Partnership for critical parts, transactions for the rest; dual source where a failure would stop the business.</li>\n<li>Outsource what others do better and is not your advantage; buy resilience where it is cheapest.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Picking the cheapest supplier. A supplier who delivers late and ships defects costs more in stockouts, rework, and lost customers than the saving on price. Total cost is the only cost that matters.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Forecasting from orders instead of from real sales. Orders already contain the bullwhip — batching, safety stock, and fear. Forecast from what customers actually bought, and share that data with every link in the chain.</div>\n<p><strong>Next step:</strong> Module 7 follows the product after it leaves the factory — logistics, warehousing, and distribution.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Supply chain",
      "def": "The network of organizations that moves a product from raw material to the final customer."
    },
    {
      "term": "Supply chain management (SCM)",
      "def": "Coordinating the whole chain — suppliers, production, distribution, and customers — as one system."
    },
    {
      "term": "Bullwhip effect",
      "def": "Small changes in customer demand amplified into large swings as orders travel up the chain."
    },
    {
      "term": "Efficiency",
      "def": "A supply chain designed for low cost: lean inventories, full trucks, cheap suppliers."
    },
    {
      "term": "Responsiveness",
      "def": "A supply chain designed for speed and flexibility: fast delivery, custom orders, quick changes."
    },
    {
      "term": "Vendor-managed inventory (VMI)",
      "def": "The supplier monitors the customer's stock and replenishes it, using shared sales data."
    },
    {
      "term": "Single sourcing",
      "def": "Buying an item from one supplier — low cost and deep partnership, but a single point of failure."
    },
    {
      "term": "Dual sourcing",
      "def": "Buying an item from two suppliers — more expensive, but resilient when one fails."
    },
    {
      "term": "Outsourcing",
      "def": "Buying a function from another company instead of doing it in-house."
    },
    {
      "term": "Offshoring",
      "def": "Moving work to another country, usually for lower cost."
    },
    {
      "term": "Nearshoring",
      "def": "Moving work to a nearby country, balancing lower cost with shorter lead times and control."
    },
    {
      "term": "Total cost of ownership",
      "def": "The full cost of a supplier: price plus delivery, defects, delays, and the cost of a stockout."
    },
    {
      "term": "Strategic partnership",
      "def": "A long-term, invested relationship with a key supplier, sharing forecasts and improving together."
    },
    {
      "term": "Supply chain visibility",
      "def": "Seeing what is happening at every link of the chain — stock, orders, and shipments — in real time."
    }
  ],
  "video": {
    "title": "What is Supply Chain Management? Definition, Process & Real Examples | AIMS Education",
    "embedUrl": "https://www.youtube.com/embed/lZPO5RclZEo",
    "note": "Defines supply chain management and walks through the flows from supplier to customer with real examples. As you watch, trace the three flows — materials, information, and money — and spot where the bullwhip could start.",
    "more": [
      {
        "title": "What is Supply Chain Management?",
        "url": "https://www.youtube.com/watch?v=AwemFfdD6VI"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A retailer sees demand rise 5% and orders 10% more; the distributor sees a 10% rise and orders 20% more; the factory sees 20% and adds a shift. (a) What is this effect called? (b) Name two causes and two fixes.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) The <strong>bullwhip effect</strong> — a small demand change amplified as it travels up the chain. Step 2: (b) Causes: orders batching up, and forecasts built on orders rather than real sales. Step 3: Fixes: share real point-of-sale data with every link, and order smaller and more frequently instead of in monthly batches.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> Supplier A charges $10 per unit and delivers on time 80% of the time, with 3% defects. Supplier B charges $11, delivers on time 99% of the time, with 0.2% defects. The buyer uses 10,000 units a year; a late delivery costs $500 in lost production and each defective unit costs $20 to rework. Compare the total cost of each supplier.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Supplier A: purchase 10,000 × $10 = $100,000. Assume 12 deliveries a year, 20% late = 2.4 late deliveries × $500 = $1,200. Defects: 3% × 10,000 = 300 × $20 = $6,000. Total = $100,000 + $1,200 + $6,000 = <strong>$107,200</strong>. Step 2: Supplier B: purchase 10,000 × $11 = $110,000. Late: 1% × 12 = 0.12 × $500 = $60. Defects: 0.2% × 10,000 = 20 × $20 = $400. Total = $110,000 + $60 + $400 = <strong>$110,460</strong>. Step 3: On these numbers Supplier A is cheaper by $3,260 — but only if the $500 late-delivery cost and $20 rework cost are the full story. If a late delivery can stop the line for a day, or a defect reaches a customer, Supplier B wins. Total cost must include the cost of a stockout and of a defect reaching the customer.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A fashion brand launches new styles every two weeks and competes on speed. A discount retailer sells the same basic goods all year and competes on price. Say which chain design — efficiency or responsiveness — fits each, and why.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The fashion brand needs <strong>responsiveness</strong>: fast delivery, small batches, quick changes — because its advantage is being first with the new style. Step 2: The discount retailer needs <strong>efficiency</strong>: lean inventories, full trucks, cheap suppliers — because its advantage is the lowest price. Step 3: Designing the fashion chain for efficiency would make it slow, and designing the discount chain for responsiveness would make it expensive — each chain must match its strategy.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A manufacturer single-sources a critical valve. The supplier's factory floods and production stops for three weeks. (a) What was the risk? (b) Name two resilience measures the manufacturer should have had.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) The risk was a <strong>single point of failure</strong> — one supplier for a critical part, with no backup. Step 2: (b) <strong>Dual sourcing</strong> — a second qualified supplier — and <strong>safety stock</strong> on the critical valve, enough to cover the lead time of the backup. Step 3: Both cost money, but the cost of three stopped weeks is far higher.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A bakery outsources its delivery to a courier. Its bread recipe stays in-house. Explain why each choice is right, using the outsourcing rule from this module.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Delivery is outsourced because the courier does it better and cheaper, and delivery is not the bakery's advantage — its advantage is the bread. Step 2: The recipe stays in-house because the recipe <em>is</em> the bakery's advantage; outsourcing it would give away the business. Step 3: The rule is to outsource what others do better and is not your advantage, and to keep what is.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A company forecasts demand from the orders its distributors place, and keeps getting surprised by inventory swings. (a) What is wrong with forecasting from orders? (b) What data should it use instead, and how should it share it?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) Orders already contain the bullwhip — batching, safety stock, and fear — so forecasting from them forecasts the distortion, not the demand. Step 2: (b) It should forecast from <strong>real point-of-sale data</strong> — what customers actually bought — and share that data with every link in the chain, for example through vendor-managed inventory, so nobody has to guess.</p>"
    }
  ],
  "quiz": [
    {
      "q": "The bullwhip effect is:",
      "choices": [
        "A whip used in warehouses",
        "Small demand changes amplified into large swings up the supply chain",
        "A sudden drop in supplier prices",
        "The sound a truck makes when it brakes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A small change at the customer grows into a huge swing upstream. (a) is literal, not the term. (c) is a price change, not amplification. (d) is not a supply chain concept."
    },
    {
      "q": "The best cure for the bullwhip effect is:",
      "choices": [
        "Holding more inventory at every link",
        "Sharing real point-of-sale data with every link",
        "Ordering once a year",
        "Keeping forecasts secret"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Shared real sales data removes the guesswork that amplifies the whip. (a) hides the problem behind stock and costs money. (c) makes batching worse. (d) makes the information problem worse."
    },
    {
      "q": "A supply chain designed for low cost, with lean inventories and full trucks, is designed for:",
      "choices": [
        "Responsiveness",
        "Efficiency",
        "Speed",
        "Customization"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Efficiency means low cost. (a) responsiveness means speed and flexibility. (c) and (d) are features of a responsive chain, not an efficient one."
    },
    {
      "q": "Choosing a supplier on price alone is a mistake because:",
      "choices": [
        "Price is never important",
        "Total cost includes defects, delays, and stockouts",
        "Cheap suppliers are always late",
        "Quality does not matter"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Total cost of ownership includes the cost of defects, late deliveries, and stockouts. (a) price matters, but it is not the whole cost. (c) 'always' is too strong. (d) quality matters enormously."
    },
    {
      "q": "Dual sourcing costs more than single sourcing but is chosen because:",
      "choices": [
        "It is fashionable",
        "It keeps the business running when one supplier fails",
        "It doubles the paperwork",
        "Suppliers prefer it"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Resilience — a second supplier removes the single point of failure. (a) fashion is not a reason. (c) more paperwork is a cost, not a benefit. (d) suppliers do not decide the buyer's sourcing strategy."
    },
    {
      "q": "In a supply chain, materials flow:",
      "choices": [
        "Backward, from customer to supplier",
        "Forward, from supplier to customer",
        "Only inside one company",
        "In a circle with no direction"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Materials move forward from supplier to customer. (a) is the direction of money. (c) a chain crosses many companies. (d) each flow has a direction."
    },
    {
      "q": "Outsourcing makes sense when:",
      "choices": [
        "The function is the business's core advantage",
        "Another company does it better or cheaper and it is not the core advantage",
        "The business has spare cash",
        "The owner is bored"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Outsource what others do better and is not your advantage. (a) is the function to keep in-house. (c) and (d) are not decision criteria."
    },
    {
      "q": "Vendor-managed inventory means:",
      "choices": [
        "The retailer manages the supplier's factory",
        "The supplier watches the customer's actual stock and replenishes it",
        "Inventory is never counted",
        "The vendor owns the customer's warehouse"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The supplier uses shared sales and stock data to replenish, which flattens the bullwhip. (a) reverses the relationship. (c) VMI needs better data, not none. (d) ownership does not change."
    }
  ],
  "studyGuide": "\n<h3>Module 6 — Supply Chain Management: Quick Reference</h3>\n<p><strong>Core idea:</strong> A chain carries materials forward, money backward, and information both ways. It must be designed for efficiency or responsiveness — and a chain is only as strong as its weakest link.</p>\n<p><strong>Bullwhip effect:</strong> small demand changes amplified up the chain by guesswork. Cure: share real point-of-sale data with every link, order smaller and more often, use vendor-managed inventory.</p>\n<p><strong>Suppliers:</strong> judge on total cost — price, quality, reliability, flexibility. Partnership for the critical few; transactions for the rest; dual source where a failure would stop the business.</p>\n<p><strong>Outsourcing:</strong> buy what others do better and is not your advantage. <strong>Risk:</strong> identify single points of failure and buy resilience where it is cheapest — dual sourcing and safety stock on the critical few.</p>\n<p><strong>Watch out:</strong> Never forecast from orders — they already contain the bullwhip. Forecast from what customers actually bought.</p>\n<p><strong>Self-check:</strong> Pick a product you buy, trace its chain from raw material to you, and name one place the bullwhip could start and one single point of failure.</p>\n"
};
