// Business Capstone — Module 5: Operations Plan
module.exports = {
  "number": 5,
  "slug": "operations-plan",
  "title": "Operations Plan",
  "estTime": "3–4 hours",
  "objectives": [
    "Describe how the business turns inputs into outputs, day by day.",
    "Compute capacity and utilization for one technician.",
    "Choose suppliers and set reorder rules for parts.",
    "Plan quality checks and what happens when something goes wrong.",
    "Write the operations-plan section of the business plan."
  ],
  "sections": [
    {
      "heading": "From Inputs to Outputs",
      "html": "<p>Operations is the part of the plan that answers a simple question: how does the work actually get done? For Maple Street, the inputs are the van, tools, parts, the technician's time, and bookings. The process is: booking → route planning → travel → diagnosis → repair → test ride → payment → follow-up. The output is a working bike, a paid invoice, and a customer who books again.</p><p>Write the process as steps a new hire could follow, not as a paragraph of good intentions. Each step names who does it, what they need, and how long it takes. A tune-up takes 60 minutes of work plus travel; a flat repair takes 20 minutes. Those times are not decoration — they decide how many jobs fit in a day, which decides capacity, which decides whether the financial plan is possible at all.</p><div class=\"callout\"><strong>Key idea:</strong> If the operations plan cannot show the work fitting into the hours available, the financial plan is fiction. Operations is where plans meet the clock.</div>"
    },
    {
      "heading": "Capacity and Utilization",
      "html": "<p>One technician doing 6 tune-ups a day, 22 working days a month, can complete 6 × 22 = <strong>132 tune-ups a month</strong> at most. That is capacity. Demand in a normal month is 100 tune-ups, so utilization is 100 ÷ 132 = <strong>75.8%, about 76%</strong>. At break-even demand of 80, utilization is 80 ÷ 132 = 60.6%, about 61%.</p><p>Utilization tells you how much slack the business has. At 76% there is room for a busy week, a sick day, and a van service — but not for a second service area. When utilization passes about 85% for several months in a row, the plan should add capacity: a part-time technician, longer days, or a second van. Waiting until utilization hits 100% means turning customers away while you hire.</p><div class=\"callout\"><strong>Key idea:</strong> Capacity is a ceiling, not a target. A business running at 100% utilization has no room for the day the van will not start.</div>"
    },
    {
      "heading": "Suppliers, Parts, and Reorder Rules",
      "html": "<p>Maple Street keeps two parts suppliers, so one supplier's stock-out never stops work. The rule for each fast-moving part is simple: when stock falls to the reorder point, order the standard quantity. For inner tubes: 40 in stock, 5 used a day, 3 days for delivery — reorder when 15 remain (5 × 3), ordering 40. For brake pads: 24 in stock, 2 used a day, 4 days for delivery — reorder at 8 (2 × 4), ordering 24.</p><p>The reorder point is daily use × delivery time, and the safety stock on top of it covers a late delivery or a busy week. Parts are the business's variable cost — $20 per tune-up — so every part wasted or lost is $20 of contribution gone. A weekly count of the five most-used parts catches shrinkage before it becomes a habit.</p>"
    },
    {
      "heading": "Quality: Checks, Guarantees, and Comebacks",
      "html": "<p>Quality in a service business is a checklist, not a slogan. Every tune-up ends with the same 21-point check and a test ride before the customer pays, and every job carries a 30-day workmanship guarantee. A comeback — a customer returning with the same fault — is logged, fixed free, and counted. The target is fewer than 3 comebacks per 100 jobs.</p><p>When a comeback happens, the operations plan says what to do: apologize, fix it the same day if possible, find the cause (missed checklist step, faulty part, wrong diagnosis), and change the step that allowed it. A business that hides comebacks learns nothing; a business that counts them gets better every month. The guarantee is also marketing: it is the reason a stranger trusts a van they have never used.</p>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> operations is the step-by-step process from booking to follow-up; capacity is 132 tune-ups a month (6 a day × 22 days); utilization is 76% at 100 jobs and 61% at break-even; reorder point is daily use × delivery time; quality is a 21-point check, a test ride, and a counted comeback rate under 3 per 100.</p><div class=\"callout\"><strong>Common mistake:</strong> Planning capacity from the busiest day instead of a normal month. A plan that needs every day to be a record day has no slack for weather, illness, or a van repair.</div><div class=\"callout\"><strong>Common mistake:</strong> One supplier for a critical part. A single stock-out stops the business; two suppliers is not duplication, it is insurance that costs nothing until it saves the week.</div><p><strong>Plan link:</strong> This module's assignment is the operations-plan section. A lender reading it should be able to see the day: how many jobs, how long each takes, where parts come from, and what happens when a job goes wrong.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Operations",
      "def": "The activities that turn inputs — van, tools, parts, time — into outputs — repaired bikes, paid invoices, repeat customers."
    },
    {
      "term": "Process",
      "def": "The ordered steps of the work, each naming who does it, what they need, and how long it takes."
    },
    {
      "term": "Capacity",
      "def": "The maximum output in a period. Here 6 tune-ups a day × 22 days = 132 a month."
    },
    {
      "term": "Utilization",
      "def": "Actual output divided by capacity. Here 100 ÷ 132 = 75.8%, about 76%."
    },
    {
      "term": "Reorder point",
      "def": "The stock level that triggers a new order: daily use × delivery time. Tubes: 5 × 3 = 15."
    },
    {
      "term": "Safety stock",
      "def": "Extra stock held to cover a late delivery or a busy week, above the reorder point."
    },
    {
      "term": "Supplier",
      "def": "A business that provides parts or materials. Maple Street keeps two, so one stock-out never stops work."
    },
    {
      "term": "Quality check",
      "def": "A fixed list of inspections done on every job — here a 21-point check plus a test ride before payment."
    },
    {
      "term": "Comeback",
      "def": "A customer returning with the same fault after a repair; fixed free, logged, and counted against a target under 3 per 100 jobs."
    },
    {
      "term": "Workmanship guarantee",
      "def": "A promise to fix faulty work free for a set period — here 30 days — that builds trust with new customers."
    },
    {
      "term": "Throughput",
      "def": "The number of jobs completed in a period; limited by the slowest step in the process."
    },
    {
      "term": "Bottleneck",
      "def": "The slowest step in a process, which sets the pace for everything else — here, the technician's hours."
    },
    {
      "term": "Lead time",
      "def": "The time between ordering parts and receiving them — 3 days for tubes, 4 for brake pads."
    }
  ],
  "video": {
    "title": "Introduction to Operations Management & Supply Chain Management",
    "embedUrl": "https://www.youtube.com/embed/u1l52HtdbX4",
    "note": "Introduces operations management: turning inputs into outputs, the four functions, and the role of the supply chain. It is the frame for this module's operations plan.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1 — Plan section: The working day.</strong> Write the operations section's day: booking, route, travel, repair, test ride, payment, follow-up — with a time for each step and who does it.</p>",
      "solution": "<p><strong>Answer:</strong> A good day runs: 8:00 route and van check (technician, 30 minutes); jobs in route order, 60 minutes per tune-up plus travel; test ride before payment on every job; 4:30 paperwork, parts count, and next-day bookings. If the steps have no times, capacity cannot be computed — and the financial plan rests on nothing.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2 — Capacity.</strong> One technician does 6 tune-ups a day, 22 days a month. (a) What is monthly capacity? (b) What is utilization at 100 jobs a month? (c) At break-even demand of 80?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) 6 × 22 = <strong>132 tune-ups</strong> a month. Step 2: (b) 100 ÷ 132 = 0.758, about <strong>76%</strong>. Step 3: (c) 80 ÷ 132 = 0.606, about <strong>61%</strong>. Step 4: At 76% there is slack for a busy week; sustained use above about 85% is the signal to add capacity.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3 — Reorder points.</strong> Inner tubes: 5 used a day, delivery takes 3 days. Brake pads: 2 used a day, delivery takes 4 days. Compute each reorder point.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: Reorder point = daily use × delivery time. Step 2: Tubes: 5 × 3 = <strong>15</strong> — order when 15 remain. Step 3: Brake pads: 2 × 4 = <strong>8</strong> — order when 8 remain. Step 4: Add safety stock above these points for late deliveries; the reorder point alone assumes delivery is never late.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4 — Plan section: Suppliers.</strong> Write the supplier paragraph: two suppliers, what each provides, and what happens if one cannot deliver.</p>",
      "solution": "<p><strong>Answer:</strong> A good paragraph names both suppliers, what each supplies, and the rule: if Supplier A cannot deliver tubes in 3 days, the order goes to Supplier B the same day, and the job is rescheduled only if both fail. One supplier is a single point of failure; the plan must say so and fix it.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5 — Comeback rate.</strong> In a month of 100 jobs there are 2 comebacks. (a) What is the rate per 100 jobs? (b) Is it inside the target of under 3 per 100? (c) What does the plan require for each comeback?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) 2 ÷ 100 × 100 = <strong>2 per 100</strong>. Step 2: (b) Yes — inside the target of under 3. Step 3: (c) Fix free, log it, find the cause, and change the step that allowed it. A rate inside target is not a reason to stop counting.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6 — The capacity trap.</strong> Demand grows to 140 tune-ups a month. Capacity is 132. (a) How many jobs short is the business? (b) What are the plan's options, and which does it choose?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) 140 − 132 = <strong>8 jobs short</strong> — about $360 of contribution (8 × $45) turned away. Step 2: (b) Options: a part-time technician, longer days, a second van, or raising the price to cut demand. Step 3: The plan chooses a part-time technician on the two busiest days — the cheapest capacity that keeps the $65 price and the next-day promise.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Monthly capacity for one technician is:",
      "choices": [
        "100 tune-ups",
        "120 tune-ups",
        "132 tune-ups",
        "144 tune-ups"
      ],
      "answer": 2,
      "explanation": "Correct: (c). 6 a day × 22 days = 132. (a) is normal demand, not capacity. (b) is 6 × 20 days, the wrong day count. (d) is break-even at a $45 price, not capacity."
    },
    {
      "q": "Utilization at 100 jobs a month is about:",
      "choices": [
        "61%",
        "76%",
        "85%",
        "100%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 100 ÷ 132 = 75.8%, about 76%. (a) is utilization at break-even demand of 80. (c) is the level that signals adding capacity. (d) would be 132 jobs, with no slack at all."
    },
    {
      "q": "The reorder point for inner tubes is 15 because:",
      "choices": [
        "5 used a day × 3 days delivery",
        "40 in stock − 25 used",
        "15 is the order quantity",
        "The van holds 15 tubes"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Reorder point = daily use × delivery time = 5 × 3 = 15. (b) is not a reorder rule. (c) is wrong: the order quantity is 40. (d) is wrong: van capacity is not the rule."
    },
    {
      "q": "Keeping two suppliers matters because:",
      "choices": [
        "It doubles the parts bill",
        "One supplier's stock-out never stops work",
        "Suppliers give discounts for loyalty",
        "The plan needs two names"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A second supplier is insurance against a stock-out. (a) is wrong: two suppliers do not double the bill — orders split between them. (c) may be true sometimes, but it is not the reason. (d) is wrong: names without a rule are decoration."
    },
    {
      "q": "A comeback rate of 2 per 100 jobs is:",
      "choices": [
        "Inside the target of under 3 per 100",
        "Above target",
        "A sign to stop counting",
        "Proof of perfect quality"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 2 is under 3, so it meets the target. (b) is wrong: 2 is less than 3. (c) is wrong: counting is what proves the rate. (d) is wrong: 2 comebacks are 2 faults, not perfection."
    },
    {
      "q": "Operations is where the plan meets:",
      "choices": [
        "The clock — whether the work fits the hours available",
        "The bank's marketing team",
        "The tax code only",
        "The competitor's price list"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Capacity, times, and steps decide whether the financial plan is possible. (b) is wrong: the bank reads the plan, it does not run operations. (c) is wrong: tax is one input, not the point. (d) is wrong: competitors belong to Module 3."
    },
    {
      "q": "Demand of 140 against capacity of 132 leaves the business:",
      "choices": [
        "8 jobs short",
        "8 jobs ahead",
        "Exactly at capacity",
        "140 jobs short"
      ],
      "answer": 0,
      "explanation": "Correct: (a). 140 − 132 = 8 jobs that cannot be done. (b) reverses the subtraction. (c) is wrong: 140 is more than 132. (d) confuses demand with the shortfall."
    },
    {
      "q": "The 21-point check and test ride happen:",
      "choices": [
        "Before the customer pays, on every job",
        "Only when the customer complains",
        "Once a month",
        "Only on e-bikes"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Quality is a check on every job before payment, not an inspection after a complaint. (b) is wrong: that is a comeback, not a check. (c) is wrong: monthly checks do not catch today's fault. (d) is wrong: the check applies to every tune-up."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Operations Plan: Quick Reference</h3>\n<p><strong>Core idea:</strong> Operations is the step-by-step process from booking to follow-up. If the work does not fit the hours, the financial plan is fiction.</p>\n<p><strong>Capacity:</strong> 6 tune-ups a day × 22 days = 132 a month. Utilization 76% at 100 jobs, 61% at break-even (80). Sustained use above ~85% is the signal to add capacity.</p>\n<p><strong>Parts:</strong> Reorder point = daily use × delivery time. Tubes 5 × 3 = 15 · Brake pads 2 × 4 = 8. Two suppliers, so one stock-out never stops work.</p>\n<div class=\"formula\">Utilization = Actual output ÷ Capacity &nbsp;|&nbsp; Reorder point = Daily use × Lead time</div>\n<p><strong>Quality:</strong> 21-point check + test ride before payment, 30-day workmanship guarantee, comebacks logged and fixed free, target under 3 per 100 jobs.</p>\n<p><strong>Self-check:</strong> Can you state the day's steps, the capacity, and the reorder point for tubes without looking? Those three numbers are the operations plan.</p>\n"
};
