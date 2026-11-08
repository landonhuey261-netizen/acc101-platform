// bus201 - Module 4: Enterprise Systems: ERP, CRM & SCM
module.exports = {
  "number": 4,
  "slug": "enterprise-systems-erp-crm-scm",
  "title": "Enterprise Systems: ERP, CRM & SCM",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain what makes a system an 'enterprise' system: one shared database across functions.",
    "Describe what ERP does and which departments it connects.",
    "Describe what CRM does across sales, marketing, and service.",
    "Describe what SCM does from supplier to customer.",
    "Judge which enterprise system fits a given business problem — and when a smaller tool is enough."
  ],
  "sections": [
    {
      "heading": "One Database for the Whole Company",
      "html": "\n<p>An <strong>enterprise system</strong> is a large system that supports major business processes across functions, built around one shared database. Before enterprise systems, each department kept its own records: sales had its order list, the warehouse had its stock list, and accounting had its invoices — and the three lists disagreed. An enterprise system makes the order, the stock movement, and the invoice three views of the same fact.</p>\n<p>The payoff is that work flows without retyping. A salesperson enters an order once; the warehouse sees it, picks it, and ships it; accounting bills it; and the manager sees the margin — all from the same record. The cost is that the business must agree on one way of doing things, which is a political job as much as a technical one.</p>\n<p>Three families of enterprise systems dominate: <strong>ERP</strong> (enterprise resource planning) runs the inside of the company, <strong>CRM</strong> (customer relationship management) runs the customer-facing side, and <strong>SCM</strong> (supply chain management) runs the flow from suppliers to customers. Most firms use all three, integrated, and this module takes them one at a time.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The value of an enterprise system is not the software — it is the end of retyping and the end of three different versions of the truth.</div>"
    },
    {
      "heading": "ERP: Running the Inside of the Company",
      "html": "\n<p><strong>ERP</strong> integrates the core internal processes — finance, human resources, manufacturing or service delivery, inventory, and purchasing — into one system with one database. When a sale is recorded, the stock level, the revenue account, and the sales report all update together, because they are reading the same record.</p>\n<p>ERP grew out of manufacturing planning, and its classic strength is still the order-to-cash and purchase-to-pay flow: a customer order triggers picking, shipping, and invoicing; a low stock level triggers a purchase order. For a service business the same idea applies: a booked job triggers scheduling, staff time, and billing from one record.</p>\n<p><strong>Worked check:</strong> A distributor processes 60 orders a day. Before ERP, each order took 45 minutes of manual handling across sales, warehouse, and billing. After ERP it takes 12 minutes. Step 1: time saved per order = 45 − 12 = 33 minutes. Step 2: daily saving = 60 × 33 = 1,980 minutes = <strong>33 hours a day</strong> across the team. That is the business case in one line — and it is why ERP projects are judged on process time, not on features.</p>\n<div class=\"callout\"><strong>Key idea:</strong> ERP's question is \"do all our departments agree on what happened?\" If the answer is one database, the arguments about whose numbers are right simply stop.</div>"
    },
    {
      "heading": "CRM: The Customer Side",
      "html": "\n<p><strong>CRM</strong> manages everything a business knows about its customers and every interaction with them — across sales, marketing, and service. One customer record holds the contact details, the purchase history, the open quote, the support tickets, and the marketing emails they actually opened. When a customer calls, whoever answers can see the whole story.</p>\n<p>CRM serves three jobs. <strong>Sales</strong> tracks leads and opportunities through a pipeline so nothing is forgotten. <strong>Marketing</strong> targets messages by what customers actually bought and how they behaved. <strong>Service</strong> logs every complaint and fix, so the same problem is not explained from scratch five times. The shared record is what turns three departments into one relationship.</p>\n<p>The failure mode is a CRM that becomes a graveyard: staff enter data only when chased, so the pipeline is fiction. A CRM only works if entering the interaction is part of doing the work, not extra work after it. The best implementations make the CRM the place the work happens — the quote is written in it, the call is logged in it — so the record is a by-product, not a chore.</p>\n<div class=\"callout\"><strong>Key idea:</strong> A CRM is not a contact list. It is the memory of the whole customer relationship — and a business with no memory keeps paying to re-learn what it already knew.</div>"
    },
    {
      "heading": "SCM: From Supplier to Customer",
      "html": "\n<p><strong>SCM</strong> coordinates sourcing, production, inventory, and delivery across organizations — your suppliers, your business, your distributors, and your customers. Where ERP looks inward and CRM looks at the customer, SCM looks along the whole chain and asks where goods, information, and money get stuck.</p>\n<p>Its classic tools are demand planning (what will customers want, and when), procurement (buying the right inputs at the right time), and logistics (moving and storing goods cheaply and reliably). The chain is only as strong as its weakest link: a perfect factory with a late supplier still ships late, and a brilliant sales team with no stock still loses the order.</p>\n<p>Modern SCM depends on shared information. When a retailer shares its real sales data with a supplier, the supplier can plan production instead of guessing — the famous \"bullwhip effect,\" where small changes in customer demand become wild swings upstream, shrinks. The technology matters less than the willingness to share the numbers.</p>\n<div class=\"callout\"><strong>Key idea:</strong> SCM's unit of analysis is the whole chain, not one firm. Optimizing your own warehouse while your supplier starves is not an improvement — it is moving the problem one step upstream.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Enterprise systems share one database across functions, ending retyping and conflicting versions of the truth.</li>\n<li>ERP integrates internal processes: finance, HR, operations, inventory, purchasing.</li>\n<li>CRM holds the whole customer relationship across sales, marketing, and service.</li>\n<li>SCM coordinates the chain from supplier to customer: planning, procurement, logistics.</li>\n<li>Small firms often need one of these well, not all three at enterprise scale — a good CRM or a good inventory system beats a half-installed ERP.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Buying ERP when the real problem is a missing CRM. If orders are being lost because nobody follows up leads, an ERP will not help — the business needs to remember its customers, not integrate its general ledger.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating an enterprise system as an IT project. It is a process project: the hard work is getting departments to agree on one way of recording an order, one product code, and one definition of \"a sale.\"</div>\n<p><strong>Next step:</strong> Module 5 moves outside the firm's walls — e-commerce and the digital business models that let a small firm sell anywhere.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Enterprise system",
      "def": "A large system supporting major cross-functional business processes, built around one shared database."
    },
    {
      "term": "ERP",
      "def": "Enterprise resource planning: integrated software managing core internal processes — finance, HR, operations, inventory, purchasing."
    },
    {
      "term": "CRM",
      "def": "Customer relationship management: systems and practices for managing all interactions with customers across sales, marketing, and service."
    },
    {
      "term": "SCM",
      "def": "Supply chain management: coordinating sourcing, production, inventory, logistics, and information flows across organizations."
    },
    {
      "term": "Order-to-cash",
      "def": "The end-to-end process from a customer placing an order to the business receiving payment."
    },
    {
      "term": "Purchase-to-pay",
      "def": "The end-to-end process from ordering supplies to paying the supplier."
    },
    {
      "term": "Sales pipeline",
      "def": "The staged list of potential sales, from first contact to closed deal, tracked in a CRM."
    },
    {
      "term": "Lead",
      "def": "A person or business that has shown interest and may become a customer."
    },
    {
      "term": "Demand planning",
      "def": "Forecasting what customers will want, and when, so production and purchasing can prepare."
    },
    {
      "term": "Procurement",
      "def": "Buying the goods and services a business needs, at the right price, quality, and time."
    },
    {
      "term": "Logistics",
      "def": "Planning and controlling the movement and storage of goods, and the related information, between origin and consumption."
    },
    {
      "term": "Bullwhip effect",
      "def": "Small changes in customer demand causing ever-larger swings in orders further up the supply chain."
    },
    {
      "term": "Integration",
      "def": "Making separate systems share data and work as one, so a fact entered once is visible everywhere it is needed."
    },
    {
      "term": "Legacy system",
      "def": "An older system still in use, often hard to change or integrate with newer systems."
    }
  ],
  "video": {
    "title": "Enterprise Wide Systems - CRM, ERP and SCM (Business Information Systems)",
    "embedUrl": "https://www.youtube.com/embed/FZbG0EF0rW8",
    "note": "Covers all three systems in one video — CRM, ERP, and SCM — with the business problems each one solves. After watching, try the module's test: for a given problem, name which system fits and why the other two do not.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A distributor processes 60 orders a day. Manual handling took 45 minutes per order; with ERP it takes 12 minutes. How many staff hours a day does the ERP save?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Saving per order = 45 − 12 = 33 minutes. Step 2: Daily saving = 60 × 33 = 1,980 minutes. Step 3: 1,980 ÷ 60 = <strong>33 hours a day</strong> across the team — nearly a full extra working day of capacity, every day.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A customer calls to complain, and the support agent can see the customer's last three orders, an open quote, and two previous complaints. Name the system that makes this possible and explain what would happen without it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is a <strong>CRM</strong> — one customer record shared across sales, marketing, and service. Step 2: Without it, the agent would see only the support tickets, or nothing at all, and would ask the customer to repeat their history. Step 3: The customer would conclude the business does not know them, and the fix would take longer because the agent cannot see what was already tried.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A toy maker sees orders from retailers swing wildly: retailers order 200 units one month and 2,000 the next, while actual toy sales to parents barely change. Name the effect and explain the one information change that shrinks it.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is the <strong>bullwhip effect</strong> — small demand changes amplified upstream as each level orders defensively. Step 2: The fix is sharing real sales data down the chain: if the maker sees actual weekly toy sales instead of lumpy retailer orders, it can plan production on the true demand. Step 3: The swing shrinks because each level stops guessing and stops adding safety stock on top of safety stock.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> A 6-person landscaping firm loses leads because quotes are written on paper and forgotten. An ERP vendor quotes $40,000. Recommend the right system instead, in two sentences.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: The problem is remembering customers and following up quotes — a <strong>CRM</strong> job, not an ERP job. Step 2: A small CRM (or a CRM module inside their accounting app) will hold every lead, quote, and follow-up date for a small monthly fee, and the firm should spend the ERP money on doing the work, not integrating its general ledger.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> Map each task to ERP, CRM, or SCM: (a) reorder steel when stock falls below 500 kg, (b) send a birthday discount to customers who bought in the last year, (c) check that a supplier's delivery will arrive before Friday's production run.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: (a) is <strong>ERP</strong> — internal inventory and purchasing. Step 2: (b) is <strong>CRM</strong> — marketing to customers based on their history. Step 3: (c) is <strong>SCM</strong> — coordinating supply with production along the chain.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> An ERP project is six months late. The software works, but sales and warehouse still argue about what counts as 'a sale' and use different product codes. Diagnose the real problem and name the fix.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: This is not a software failure — it is an <strong>integration and process</strong> failure: the departments never agreed on shared definitions and codes. Step 2: The fix is to stop and agree on one definition of a sale, one product code list, and one owner for each. Step 3: Only then configure the system to enforce those agreements; no feature can substitute for the agreement itself.</p>"
    }
  ],
  "quiz": [
    {
      "q": "What makes a system an 'enterprise' system?",
      "choices": [
        "It is very expensive",
        "It supports major cross-functional processes around one shared database",
        "It is used only by large corporations",
        "It runs on a single computer"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The defining feature is shared data across functions, ending retyping and conflicting truths. (a) price is a consequence, not the definition. (c) small firms use enterprise-style systems too, often as SaaS. (d) enterprise systems typically run on shared servers or the cloud."
    },
    {
      "q": "ERP is mainly concerned with:",
      "choices": [
        "Remembering customers and following up leads",
        "Coordinating suppliers and deliveries",
        "Integrating internal processes such as finance, HR, operations, inventory, and purchasing",
        "Running advertising campaigns"
      ],
      "answer": 2,
      "explanation": "Correct: (c). ERP integrates the inside of the company. (a) describes CRM. (b) describes SCM. (d) is a marketing function that may use CRM data but is not ERP's core."
    },
    {
      "q": "A distributor saves 33 minutes per order on 60 orders a day. The daily saving is:",
      "choices": [
        "33 minutes",
        "1,980 minutes, or 33 hours",
        "60 hours",
        "45 minutes"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 60 × 33 = 1,980 minutes, and 1,980 ÷ 60 = 33 hours. (a) is the saving on one order only. (c) confuses orders with hours. (d) is the old handling time per order."
    },
    {
      "q": "The bullwhip effect is:",
      "choices": [
        "A marketing campaign that goes viral",
        "Small changes in customer demand causing ever-larger order swings upstream in the supply chain",
        "A warehouse accident",
        "A sudden price increase"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Each level orders defensively on distorted signals, amplifying the swing. (a) is a demand event, not the amplification pattern. (c) and (d) are unrelated events."
    },
    {
      "q": "A business wants one record showing a customer's purchases, open quote, and support history. It needs a:",
      "choices": [
        "ERP system only",
        "CRM system",
        "SCM system",
        "Spreadsheet for each department"
      ],
      "answer": 1,
      "explanation": "Correct: (b). CRM is the shared customer record across sales, marketing, and service. (a) ERP covers internal processes, not the customer relationship. (c) SCM covers the supply chain. (d) separate spreadsheets are exactly the problem."
    },
    {
      "q": "Order-to-cash describes:",
      "choices": [
        "The process from a customer placing an order to the business receiving payment",
        "Paying a supplier",
        "Counting stock at year-end",
        "Hiring a new salesperson"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Order-to-cash is the full flow: order, pick, ship, invoice, payment. (b) is purchase-to-pay, the mirror process. (c) is inventory counting. (d) is recruitment."
    },
    {
      "q": "The most common reason an enterprise system project fails is:",
      "choices": [
        "The software has a bug",
        "Departments never agree on shared processes, definitions, and codes",
        "The computers are too old",
        "The vendor goes bankrupt"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Enterprise systems are process projects; without agreement on one way of working, the system enforces nothing. (a) bugs happen but are rarely the project killer. (c) hardware is replaceable. (d) is rare and has workarounds."
    },
    {
      "q": "A 6-person firm losing leads because quotes are forgotten should first consider a:",
      "choices": [
        "Full ERP implementation",
        "Small CRM to track leads, quotes, and follow-ups",
        "New warehouse",
        "Supply chain planning system"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The problem is customer memory and follow-up — a CRM job at small-firm scale. (a) is oversized and solves a different problem. (c) addresses storage, not lost leads. (d) addresses supplier coordination, not customers."
    }
  ],
  "studyGuide": "\n<h3>Module 4 — Enterprise Systems: ERP, CRM &amp; SCM: Quick Reference</h3>\n<p><strong>Core idea:</strong> One shared database across functions — enter a fact once, see it everywhere. ERP looks inward, CRM looks at the customer, SCM looks along the chain.</p>\n<p><strong>ERP:</strong> finance · HR · operations · inventory · purchasing — order-to-cash and purchase-to-pay.</p>\n<p><strong>CRM:</strong> sales pipeline · marketing · service — one record of the whole customer relationship.</p>\n<p><strong>SCM:</strong> demand planning · procurement · logistics — the chain is only as strong as its weakest link.</p>\n<div class=\"formula\">Time saved = (Old minutes per order − New minutes per order) × Orders per day</div>\n<p><strong>Watch out:</strong> Match the system to the problem — lost leads need CRM, not ERP. And an enterprise system is a process project: agree on definitions and codes first, or the software will faithfully automate the disagreement.</p>\n<p><strong>Self-check:</strong> Take one order in a business you know and trace it through sales, warehouse, and billing — how many times is it retyped, and which system would end the retyping?</p>\n"
};
