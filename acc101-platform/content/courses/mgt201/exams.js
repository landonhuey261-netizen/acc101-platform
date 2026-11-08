// mgt201 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.

module.exports = {
  "midterm": {
    "title": "Midterm Exam",
    "minutes": 75,
    "passPercent": 70,
    "coverage": "Modules 1–6",
    "questions": [
      {
        "module": 1,
        "q": "Operations management is best defined as:",
        "choices": [
          "The management of the systems and processes that create goods and deliver services",
          "The management of advertising campaigns",
          "The management of company finances only",
          "The management of hiring"
        ],
        "answer": 0,
        "explanation": "Correct (a): Operations is the creation and delivery of products and services. (b) is marketing. (c) is finance. (d) is human resources."
      },
      {
        "module": 1,
        "q": "A factory makes 1,200 parts in 40 labour hours. What is the labour productivity?",
        "choices": [
          "30 parts per hour",
          "40 parts per hour",
          "1,200 parts per hour",
          "20 parts per hour"
        ],
        "answer": 0,
        "explanation": "Correct (a): 1,200 / 40 = 30 parts per hour. (b) is the number of hours. (c) is the output with no division. (d) divides by 60."
      },
      {
        "module": 1,
        "q": "If the same factory makes 1,200 parts in 32 hours instead of 40, productivity becomes 37.5 parts per hour. That is an improvement of:",
        "choices": [
          "10%",
          "25%",
          "20%",
          "37.5%"
        ],
        "answer": 1,
        "explanation": "Correct (b): (37.5 - 30) / 30 = 7.5 / 30 = 25%. (a) and (c) miscompute the change. (d) mistakes the new rate for the percentage change."
      },
      {
        "module": 1,
        "q": "A bakery produces 900 loaves with $1,200 of inputs (labour, materials, and energy). Its multifactor productivity is:",
        "choices": [
          "0.75 loaves per dollar",
          "1.33 loaves per dollar",
          "900 loaves per dollar",
          "1,200 loaves per dollar"
        ],
        "answer": 0,
        "explanation": "Correct (a): 900 / $1,200 = 0.75 loaves per dollar. (b) divides the wrong way. (c) and (d) do not divide at all."
      },
      {
        "module": 2,
        "q": "A line has design capacity 1,000 units a day, effective capacity 850, and actual output 765. Its utilization is:",
        "choices": [
          "90%",
          "76.5%",
          "85%",
          "72%"
        ],
        "answer": 1,
        "explanation": "Correct (b): Utilization = actual / design = 765 / 1,000 = 76.5%. (a) is the efficiency (765 / 850 = 90%). (c) is effective / design. (d) is the bakery's utilization."
      },
      {
        "module": 2,
        "q": "With the same numbers, the line's efficiency is:",
        "choices": [
          "76.5%",
          "85%",
          "90%",
          "72%"
        ],
        "answer": 2,
        "explanation": "Correct (c): Efficiency = actual / effective = 765 / 850 = 90%. (a) is the utilization. (b) is effective / design. (d) is the bakery's utilization."
      },
      {
        "module": 2,
        "q": "A process has steps of 6, 9, and 4 minutes. In a 480-minute shift, how many units can it make?",
        "choices": [
          "80 units",
          "53 units",
          "120 units",
          "60 units"
        ],
        "answer": 1,
        "explanation": "Correct (b): The bottleneck is 9 minutes, so capacity = 480 / 9 = 53.33, or 53 whole units. (a) is the capacity if the bottleneck were 6 minutes. (c) uses the fastest step. (d) comes from no correct division."
      },
      {
        "module": 2,
        "q": "A shift has 480 minutes of available time and customers want 120 units. The takt time is:",
        "choices": [
          "2 minutes per unit",
          "3 minutes per unit",
          "4 minutes per unit",
          "6 minutes per unit"
        ],
        "answer": 2,
        "explanation": "Correct (c): 480 / 120 = 4 minutes per unit. (a) would need 240 units. (b) would need 160 units. (d) would need 80 units."
      },
      {
        "module": 3,
        "q": "DMAIC stands for:",
        "choices": [
          "Define, Measure, Analyze, Improve, Control",
          "Design, Make, Assess, Inspect, Complete",
          "Decide, Manage, Act, Inform, Close",
          "Deliver, Measure, Audit, Improve, Certify"
        ],
        "answer": 0,
        "explanation": "Correct (a): Define, Measure, Analyze, Improve, Control is Six Sigma's improvement cycle. (b), (c), and (d) invent plausible-sounding but wrong sequences."
      },
      {
        "module": 3,
        "q": "Six Sigma's defect goal is:",
        "choices": [
          "Zero defects, always",
          "Fewer than 3.4 defects per million opportunities",
          "Fewer than 1 defect per thousand",
          "10% defects or fewer"
        ],
        "answer": 1,
        "explanation": "Correct (b): 3.4 defects per million is the Six Sigma target. (a) zero defects is Crosby's aspiration, not the Six Sigma number. (c) is 1,000 per million — far above the target. (d) is 100,000 per million."
      },
      {
        "module": 3,
        "q": "A process makes 2 defects in every 1,000 units. That is how many defects per million?",
        "choices": [
          "2",
          "200",
          "2,000",
          "20,000"
        ],
        "answer": 2,
        "explanation": "Correct (c): 2 per 1,000 = 2,000 per million (multiply by 1,000). (a) forgets to scale. (b) scales by 100. (d) scales by 10,000."
      },
      {
        "module": 3,
        "q": "In DOWNTIME, the 'O' stands for:",
        "choices": [
          "Overtime",
          "Overproduction",
          "Ordering",
          "Outsourcing"
        ],
        "answer": 1,
        "explanation": "Correct (b): Overproduction — making more than the customer needs — is the worst waste because it creates the others. (a), (c), and (d) are not among the eight wastes."
      },
      {
        "module": 4,
        "q": "A filling process has a mean of 100 ml and a standard deviation of 2 ml. Its upper and lower control limits are:",
        "choices": [
          "102 and 98",
          "106 and 94",
          "103 and 97",
          "100 and 100"
        ],
        "answer": 1,
        "explanation": "Correct (b): UCL = 100 + 3 x 2 = 106; LCL = 100 - 3 x 2 = 94. (a) uses one standard deviation. (c) is the X-bar chart limit for samples of 4. (d) has no limits at all."
      },
      {
        "module": 4,
        "q": "A part must measure 10.0 mm plus or minus 0.5 mm. The process has a standard deviation of 0.1 and a mean of 10.0. Cp is:",
        "choices": [
          "1.00",
          "1.33",
          "1.67",
          "0.60"
        ],
        "answer": 2,
        "explanation": "Correct (c): Cp = (10.5 - 9.5) / (6 x 0.1) = 1.0 / 0.6 = 1.67. (a) would need a standard deviation of 0.167. (b) is the usual target, not this value. (d) is 6 sigma itself, not the ratio."
      },
      {
        "module": 4,
        "q": "If the mean drifts to 10.2 (same standard deviation of 0.1, specification 10.0 plus or minus 0.5), Cpk becomes:",
        "choices": [
          "1.67",
          "1.33",
          "1.00",
          "0.50"
        ],
        "answer": 2,
        "explanation": "Correct (c): Cpk = min[(10.5 - 10.2) / 0.3, (10.2 - 9.5) / 0.3] = min[1.00, 2.33] = 1.00. (a) is the Cp, which did not change. (b) is the target, not this value. (d) is not supported by the arithmetic."
      },
      {
        "module": 4,
        "q": "Samples of 4 bottles are averaged. The process mean is 100 ml and the standard deviation of individual bottles is 2 ml. The X-bar chart limits are:",
        "choices": [
          "106 and 94",
          "103 and 97",
          "102 and 98",
          "101 and 99"
        ],
        "answer": 1,
        "explanation": "Correct (b): The standard deviation of the average = 2 / 2 = 1, so UCL = 103 and LCL = 97. (a) is the limit for individual bottles. (c) uses one standard deviation of the average. (d) uses half a standard deviation."
      },
      {
        "module": 4,
        "q": "Eight points in a row above the center line, all inside the limits, is:",
        "choices": [
          "Noise — ignore it",
          "A signal — a non-random pattern to investigate",
          "Proof the process is capable",
          "A reason to widen the limits"
        ],
        "answer": 1,
        "explanation": "Correct (b): A run is a signal even inside the limits — the process has shifted. (a) ignores the pattern the chart is designed to catch. (c) stability is not capability. (d) widening the limits hides the signal."
      },
      {
        "module": 5,
        "q": "Annual demand is 12,000 units, ordering cost is $60 per order, and holding cost is $4 per unit per year. The EOQ is:",
        "choices": [
          "300 units",
          "600 units",
          "1,200 units",
          "2,400 units"
        ],
        "answer": 1,
        "explanation": "Correct (b): EOQ = square root of (2 x 12,000 x 60 / 4) = square root of 360,000 = 600. (a) is half the answer. (c) doubles it. (d) is the total relevant cost, not the quantity."
      },
      {
        "module": 5,
        "q": "With the same numbers, how many orders a year are placed, and what is the total relevant cost?",
        "choices": [
          "20 orders; $2,400",
          "12 orders; $1,200",
          "10 orders; $3,000",
          "600 orders; $2,400"
        ],
        "answer": 0,
        "explanation": "Correct (a): Orders = 12,000 / 600 = 20; ordering cost = 20 x $60 = $1,200; holding cost = (600 / 2) x $4 = $1,200; total = $2,400. (b) miscomputes the orders. (c) is the cost of ordering 1,200 at a time. (d) confuses the EOQ with the order count."
      },
      {
        "module": 5,
        "q": "Daily demand averages 80 units with a standard deviation of 12, lead time is 5 days, and the service level is 95% (z = 1.65). The safety stock, rounded up, is:",
        "choices": [
          "40 units",
          "45 units",
          "60 units",
          "400 units"
        ],
        "answer": 1,
        "explanation": "Correct (b): 1.65 x 12 x square root of 5 = 44.27, rounded up to 45. (a) is the answer for different numbers. (c) miscomputes the square root. (d) is the demand during lead time without safety stock."
      },
      {
        "module": 5,
        "q": "With the same numbers, the reorder point is:",
        "choices": [
          "400 units",
          "445 units",
          "600 units",
          "45 units"
        ],
        "answer": 1,
        "explanation": "Correct (b): (80 x 5) + 45 = 445. (a) omits the safety stock. (c) is the EOQ. (d) is the safety stock alone."
      },
      {
        "module": 5,
        "q": "A different firm has annual demand 10,000, ordering cost $72, holding cost $9. Its EOQ and orders per year are:",
        "choices": [
          "400 units and 25 orders",
          "600 units and 20 orders",
          "200 units and 50 orders",
          "1,000 units and 10 orders"
        ],
        "answer": 0,
        "explanation": "Correct (a): EOQ = square root of (2 x 10,000 x 72 / 9) = square root of 160,000 = 400; orders = 10,000 / 400 = 25. (b) is the 12,000-unit example's answer. (c) and (d) come from no correct arithmetic on these numbers."
      },
      {
        "module": 6,
        "q": "The bullwhip effect is:",
        "choices": [
          "A whip used in warehouses",
          "Small demand changes amplified into large swings up the supply chain",
          "A sudden drop in supplier prices",
          "The sound a truck makes when it brakes"
        ],
        "answer": 1,
        "explanation": "Correct (b): A small change at the customer grows into a huge swing upstream. (a) is literal, not the term. (c) is a price change, not amplification. (d) is not a supply chain concept."
      },
      {
        "module": 6,
        "q": "The best cure for the bullwhip effect is:",
        "choices": [
          "Holding more inventory at every link",
          "Sharing real point-of-sale data with every link",
          "Ordering once a year",
          "Keeping forecasts secret"
        ],
        "answer": 1,
        "explanation": "Correct (b): Shared real sales data removes the guesswork that amplifies the whip. (a) hides the problem behind stock and costs money. (c) makes batching worse. (d) makes the information problem worse."
      },
      {
        "module": 6,
        "q": "A supply chain designed for low cost, with lean inventories and full trucks, is designed for:",
        "choices": [
          "Responsiveness",
          "Efficiency",
          "Speed",
          "Customization"
        ],
        "answer": 1,
        "explanation": "Correct (b): Efficiency means low cost. (a) responsiveness means speed and flexibility. (c) and (d) are features of a responsive chain, not an efficient one."
      }
    ]
  },
  "final": {
    "title": "Final Exam",
    "minutes": 120,
    "passPercent": 70,
    "coverage": "Modules 1–12",
    "questions": [
      {
        "module": 1,
        "q": "A bakery produces 1,000 loaves with $1,200 of inputs. Its multifactor productivity is:",
        "choices": [
          "0.75 loaves per dollar",
          "0.83 loaves per dollar",
          "1.20 loaves per dollar",
          "1,000 loaves per dollar"
        ],
        "answer": 1,
        "explanation": "Correct (b): 1,000 / $1,200 = 0.83 loaves per dollar. (a) is the productivity for 900 loaves. (c) divides the wrong way. (d) does not divide at all."
      },
      {
        "module": 1,
        "q": "Which of these is a service rather than a good?",
        "choices": [
          "A bicycle",
          "A haircut",
          "A bag of flour",
          "A wrench"
        ],
        "answer": 1,
        "explanation": "Correct (b): A haircut is intangible, produced and consumed at the same time, and cannot be stored — a service. (a), (c), and (d) are tangible goods that can be stored and owned."
      },
      {
        "module": 1,
        "q": "In the input-transformation-output model, a restaurant's transformation process is:",
        "choices": [
          "The ingredients it buys",
          "Cooking and serving the meal",
          "The customers who eat",
          "The money it takes"
        ],
        "answer": 1,
        "explanation": "Correct (b): The transformation is what turns inputs into outputs — cooking and serving. (a) describes inputs. (c) describes the customer, who is both an input and the judge of the output. (d) describes the revenue, an outcome."
      },
      {
        "module": 2,
        "q": "A bakery has design capacity 2,000 loaves a day, effective capacity 1,600, and actual output 1,440. Its utilization and efficiency are:",
        "choices": [
          "72% and 90%",
          "90% and 72%",
          "80% and 90%",
          "72% and 80%"
        ],
        "answer": 0,
        "explanation": "Correct (a): Utilization = 1,440 / 2,000 = 72%; efficiency = 1,440 / 1,600 = 90%. (b) swaps them. (c) uses 1,600 / 2,000 for utilization. (d) uses 1,440 / 1,800 for efficiency."
      },
      {
        "module": 2,
        "q": "A process has steps of 6, 9, and 4 minutes. After the 9-minute step is improved to 6 minutes, how many units can a 480-minute shift make, and which step is the bottleneck now?",
        "choices": [
          "53 units; welding at 9 minutes",
          "80 units; the 6-minute steps",
          "120 units; the 4-minute step",
          "53 units; the 4-minute step"
        ],
        "answer": 1,
        "explanation": "Correct (b): Capacity = 480 / 6 = 80 units, and the bottleneck is now the 6-minute steps (cut and the improved weld). (a) is the old capacity. (c) uses the fastest step. (d) mixes the old capacity with the wrong bottleneck."
      },
      {
        "module": 2,
        "q": "A process has 60 jobs in progress and completes 12 a day. What is the average flow time, and what WIP cap gives a 3-day flow time?",
        "choices": [
          "5 days; cap 36",
          "3 days; cap 60",
          "12 days; cap 36",
          "5 days; cap 60"
        ],
        "answer": 0,
        "explanation": "Correct (a): Flow time = 60 / 12 = 5 days (Little's Law); WIP cap = 12 x 3 = 36 jobs. (b) swaps the flow time and the WIP. (c) mistakes throughput for flow time. (d) keeps the old WIP as the cap."
      },
      {
        "module": 3,
        "q": "TQM's three principles are:",
        "choices": [
          "Inspection, testing, and certification",
          "Customer focus, process focus with continuous improvement, and teamwork",
          "Speed, cost, and profit",
          "Plan, buy, and sell"
        ],
        "answer": 1,
        "explanation": "Correct (b): Customer focus, process focus, and teamwork define TQM. (a) describes appraisal, not TQM. (c) and (d) are unrelated lists."
      },
      {
        "module": 3,
        "q": "A factory inspects every unit at the end of the line and throws away 8% of them. The TQM view of this is:",
        "choices": [
          "Good quality management",
          "Inspection sorting good from bad after the money is spent — quality must be built into the process",
          "Six Sigma in action",
          "A pull system"
        ],
        "answer": 1,
        "explanation": "Correct (b): Inspection cannot make bad units good; quality must be built in by the process. (a) mistakes sorting for quality. (c) Six Sigma reduces variation by data, not by end-of-line sorting. (d) A pull system is about flow, not inspection."
      },
      {
        "module": 3,
        "q": "A worker walks 200 metres to fetch parts four times an hour. This is the waste of:",
        "choices": [
          "Transportation",
          "Motion",
          "Inventory",
          "Waiting"
        ],
        "answer": 1,
        "explanation": "Correct (b): Motion is unnecessary movement of people. (a) transportation is movement of materials. (c) is excess stock. (d) is idle time waiting for something."
      },
      {
        "module": 4,
        "q": "A part must measure 50 mm plus or minus 2 mm. The process has a standard deviation of 0.5 and a mean of 50.0. Cp is:",
        "choices": [
          "1.00",
          "1.33",
          "1.67",
          "0.75"
        ],
        "answer": 1,
        "explanation": "Correct (b): Cp = (52 - 48) / (6 x 0.5) = 4 / 3 = 1.33. (a) would need a standard deviation of 0.667. (c) is the Cp of the 10.0 mm example. (d) is not supported by the arithmetic."
      },
      {
        "module": 4,
        "q": "With the same specification (50 plus or minus 2) and standard deviation 0.5, the mean drifts to 50.5. Cpk is:",
        "choices": [
          "1.33",
          "1.67",
          "1.00",
          "0.50"
        ],
        "answer": 2,
        "explanation": "Correct (c): Cpk = min[(52 - 50.5) / 1.5, (50.5 - 48) / 1.5] = min[1.00, 1.67] = 1.00. (a) is the Cp, which did not change. (b) is the Cp of the 10.0 mm example. (d) is not supported by the arithmetic."
      },
      {
        "module": 4,
        "q": "Control limits and specification limits differ because:",
        "choices": [
          "They are the same thing",
          "Control limits come from the process's own variation; specification limits come from the customer",
          "Control limits are always wider",
          "Specification limits change daily"
        ],
        "answer": 1,
        "explanation": "Correct (b): Control limits describe what the process does; specification limits describe what the customer wants. (a) is the common confusion this module corrects. (c) is not always true. (d) specifications are set by the customer and do not change daily."
      },
      {
        "module": 4,
        "q": "An operator adjusts the filler after every bottle that reads above 100 ml, and the variation gets worse. This is:",
        "choices": [
          "Continuous improvement",
          "Tampering, and it increases variation",
          "Six Sigma",
          "Calibration"
        ],
        "answer": 1,
        "explanation": "Correct (b): Tampering adds variation on top of the natural wobble. (a) continuous improvement changes the system, not the setting after every reading. (c) Six Sigma uses data and DMAIC, not chasing noise. (d) calibration is a scheduled check, not a reaction to every point."
      },
      {
        "module": 5,
        "q": "Annual demand is 10,000 units, ordering cost is $72 per order, and holding cost is $9 per unit per year. What are the EOQ, the orders per year, and the total relevant cost?",
        "choices": [
          "400 units, 25 orders, $3,600",
          "600 units, 20 orders, $2,400",
          "400 units, 25 orders, $1,800",
          "500 units, 20 orders, $3,600"
        ],
        "answer": 0,
        "explanation": "Correct (a): EOQ = square root of (2 x 10,000 x 72 / 9) = 400; orders = 10,000 / 400 = 25; ordering = 25 x $72 = $1,800; holding = 200 x $9 = $1,800; total = $3,600. (b) is the 12,000-unit example. (c) counts only one of the two costs. (d) uses a wrong EOQ."
      },
      {
        "module": 5,
        "q": "Annual demand is 18,000 units, ordering cost is $50 per order, and holding cost is $5 per unit per year. What are the EOQ, the orders per year, and the total relevant cost?",
        "choices": [
          "600 units, 30 orders, $3,000",
          "400 units, 45 orders, $3,600",
          "600 units, 30 orders, $1,500",
          "900 units, 20 orders, $3,000"
        ],
        "answer": 0,
        "explanation": "Correct (a): EOQ = square root of (2 x 18,000 x 50 / 5) = square root of 360,000 = 600; orders = 18,000 / 600 = 30; ordering = 30 x $50 = $1,500; holding = 300 x $5 = $1,500; total = $3,000. (b) uses the wrong EOQ. (c) counts only one cost. (d) uses a wrong EOQ."
      },
      {
        "module": 5,
        "q": "Daily demand averages 60 units with a standard deviation of 8, lead time is 9 days, and the service level is 99% (z = 2.33). What is the safety stock, rounded up, and the reorder point?",
        "choices": [
          "56 units; 596",
          "45 units; 445",
          "40 units; 240",
          "56 units; 540"
        ],
        "answer": 0,
        "explanation": "Correct (a): Safety stock = 2.33 x 8 x square root of 9 = 2.33 x 8 x 3 = 55.92, rounded up to 56; reorder point = (60 x 9) + 56 = 540 + 56 = 596. (b) is the 95% example. (c) is the 97.5% example. (d) omits the safety stock from the reorder point."
      },
      {
        "module": 5,
        "q": "ABC analysis says:",
        "choices": [
          "Count every item equally",
          "Focus tight control on the few items that carry most of the value",
          "Never hold C items",
          "Order everything in the same quantity"
        ],
        "answer": 1,
        "explanation": "Correct (b): A items (about 20% of lines, 80% of value) get the attention. (a) wastes management time on cheap items. (c) C items are still needed, just managed simply. (d) ignores the value differences entirely."
      },
      {
        "module": 6,
        "q": "A retailer sees demand rise 5% and orders 10% more; the distributor sees 10% and orders 20% more. The best fix is to:",
        "choices": [
          "Hold more inventory at every link",
          "Share real point-of-sale data with every link and order smaller and more often",
          "Order once a year",
          "Stop forecasting"
        ],
        "answer": 1,
        "explanation": "Correct (b): Shared real sales data and smaller, more frequent orders flatten the bullwhip. (a) hides the problem behind stock. (c) makes batching worse. (d) leaves the business guessing."
      },
      {
        "module": 6,
        "q": "Dual sourcing costs more than single sourcing but is chosen because:",
        "choices": [
          "It is fashionable",
          "It keeps the business running when one supplier fails",
          "It doubles the paperwork",
          "Suppliers prefer it"
        ],
        "answer": 1,
        "explanation": "Correct (b): Resilience — a second supplier removes the single point of failure. (a) fashion is not a reason. (c) more paperwork is a cost, not a benefit. (d) suppliers do not decide the buyer's sourcing strategy."
      },
      {
        "module": 6,
        "q": "Outsourcing makes sense when:",
        "choices": [
          "The function is the business's core advantage",
          "Another company does it better or cheaper and it is not the core advantage",
          "The business has spare cash",
          "The owner is bored"
        ],
        "answer": 1,
        "explanation": "Correct (b): Outsource what others do better and is not your advantage. (a) is the function to keep in-house. (c) and (d) are not decision criteria."
      },
      {
        "module": 7,
        "q": "The seven Rs of logistics include all EXCEPT:",
        "choices": [
          "The right product",
          "The right quantity",
          "The right advertising",
          "The right cost"
        ],
        "answer": 2,
        "explanation": "Correct (c): The seven Rs are product, quantity, condition, place, time, customer, and cost — advertising is not one of them. (a), (b), and (d) are all among the seven."
      },
      {
        "module": 7,
        "q": "The cheapest transport mode per unit for large, heavy, international loads is:",
        "choices": [
          "Air",
          "Road",
          "Water",
          "Pipeline"
        ],
        "answer": 2,
        "explanation": "Correct (c): Water is the cheapest per unit for large, heavy loads, though the slowest. (a) air is the fastest and most expensive. (b) road is flexible but not the cheapest for bulk international loads. (d) pipeline is for liquids and gases."
      },
      {
        "module": 7,
        "q": "Cross-docking means:",
        "choices": [
          "Storing goods for six months",
          "Moving goods straight from an inbound truck to an outbound truck with almost no storage",
          "Docking two ships together",
          "Crossing a warehouse by hand"
        ],
        "answer": 1,
        "explanation": "Correct (b): Cross-docking turns the warehouse into a sorting station, not a store. (a) is the opposite. (c) and (d) are not logistics terms."
      },
      {
        "module": 8,
        "q": "Actual demand for the last three months was 120, 140, and 130. The 3-period moving average forecast is:",
        "choices": [
          "120 units",
          "130 units",
          "140 units",
          "135 units"
        ],
        "answer": 1,
        "explanation": "Correct (b): (120 + 140 + 130) / 3 = 390 / 3 = 130. (a) is the oldest period. (c) is the middle period. (d) averages only two numbers."
      },
      {
        "module": 8,
        "q": "With weights 0.5, 0.3, 0.2 (most recent first) on 130, 140, 120, the weighted moving average is:",
        "choices": [
          "130 units",
          "131 units",
          "132 units",
          "135 units"
        ],
        "answer": 1,
        "explanation": "Correct (b): (0.5 x 130) + (0.3 x 140) + (0.2 x 120) = 65 + 42 + 24 = 131. (a) is the simple moving average. (c) and (d) come from weighting the wrong periods."
      },
      {
        "module": 8,
        "q": "Last forecast 100, actual 120, alpha = 0.3. The exponential smoothing forecast is:",
        "choices": [
          "100 units",
          "106 units",
          "116 units",
          "120 units"
        ],
        "answer": 1,
        "explanation": "Correct (b): 100 + 0.3 x (120 - 100) = 100 + 6 = 106. (a) is the old forecast. (c) uses alpha = 0.8. (d) is the actual, not a forecast."
      },
      {
        "module": 8,
        "q": "Forecast errors were 10, 10, and 5. The MAD is:",
        "choices": [
          "5 units",
          "8.33 units",
          "10 units",
          "25 units"
        ],
        "answer": 1,
        "explanation": "Correct (b): (10 + 10 + 5) / 3 = 25 / 3 = 8.33. (a) is the smallest error. (c) is the largest. (d) is the sum, not the average."
      },
      {
        "module": 9,
        "q": "A SMART objective is:",
        "choices": [
          "Specific, Measurable, Achievable, Relevant, Time-bound",
          "Simple, Manageable, Affordable, Realistic, Tested",
          "Strategic, Marketable, Ambitious, Reasonable, Timely",
          "Short, Memorable, Attractive, Relevant, True"
        ],
        "answer": 0,
        "explanation": "Correct (a): Specific, Measurable, Achievable, Relevant, Time-bound. (b), (c), and (d) invent plausible-sounding but wrong words."
      },
      {
        "module": 9,
        "q": "The triple constraint links:",
        "choices": [
          "Quality, speed, and profit",
          "Scope, time, and cost",
          "People, money, and machines",
          "Plan, do, and check"
        ],
        "answer": 1,
        "explanation": "Correct (b): Scope, time, and cost are linked — change one and at least one other must move. (a) quality sits in the middle, affected by all three. (c) is a list of resources. (d) is a different cycle."
      },
      {
        "module": 9,
        "q": "The WBS is organized by:",
        "choices": [
          "Who does the work",
          "The order the work is done in",
          "What is delivered",
          "The cost of each task"
        ],
        "answer": 2,
        "explanation": "Correct (c): The WBS breaks the project into deliverables. (a) and (b) are the organization chart and the schedule, not the WBS. (d) cost is attached to the WBS pieces, not the organizing principle."
      },
      {
        "module": 10,
        "q": "A refit has A(4), B(6 after A), C(3 after A), D(5 after B and C), E(2 after D). The project duration is:",
        "choices": [
          "14 days",
          "15 days",
          "17 days",
          "20 days"
        ],
        "answer": 2,
        "explanation": "Correct (c): A -> B -> D -> E = 4 + 6 + 5 + 2 = 17 days; A -> C -> D -> E = 14. The longer chain sets the duration. (a) is the shorter chain. (b) and (d) come from no correct chain."
      },
      {
        "module": 10,
        "q": "In the same refit, the critical path is:",
        "choices": [
          "A -> C -> D -> E",
          "A -> B -> D -> E",
          "A -> B -> C -> E",
          "A -> C -> B -> D -> E"
        ],
        "answer": 1,
        "explanation": "Correct (b): A -> B -> D -> E is 17 days, the longest chain. (a) is 14 days. (c) and (d) are not valid chains — C does not lead to E, and B does not lead to C."
      },
      {
        "module": 10,
        "q": "In the same refit, the float of C is:",
        "choices": [
          "0 days",
          "2 days",
          "3 days",
          "5 days"
        ],
        "answer": 2,
        "explanation": "Correct (c): C's late start is 7 (D must start by day 10, so C must finish by 10, so it starts by 7); its early start is 4; float = 7 - 4 = 3. (a) is the float of the critical activities. (b) is the float in the exam network. (d) is D's duration."
      },
      {
        "module": 10,
        "q": "Activities A(3), B(4 after A), C(2 after A), D(7 after B and C), E(5 after D). The project duration and the float of C are:",
        "choices": [
          "19 days and 2 days",
          "17 days and 2 days",
          "19 days and 0 days",
          "17 days and 3 days"
        ],
        "answer": 0,
        "explanation": "Correct (a): A -> B -> D -> E = 3 + 4 + 7 + 5 = 19 days; A -> C -> D -> E = 17. C must finish by day 7 (D's late start), so its late start is 5 and its early start is 3; float = 2 days. (b) is the shorter chain's length. (c) gives C zero float, which is wrong. (d) mixes the shorter chain with the refit's float."
      },
      {
        "module": 11,
        "q": "Takt time is:",
        "choices": [
          "The time a machine takes to make one unit",
          "Available working time divided by customer demand",
          "The total lead time of a process",
          "The time spent waiting between steps"
        ],
        "answer": 1,
        "explanation": "Correct (b): Takt time is the pace the customer demands. (a) is the cycle time. (c) is the lead time. (d) is waiting, which is waste."
      },
      {
        "module": 11,
        "q": "A machine is available 90%, runs at 95% of ideal speed, and makes 98% good parts. Its OEE is:",
        "choices": [
          "83.8%",
          "90%",
          "95%",
          "98%"
        ],
        "answer": 0,
        "explanation": "Correct (a): 0.90 x 0.95 x 0.98 = 0.8379, or 83.8%. (b), (c), and (d) are the individual factors, not the product of all three."
      },
      {
        "module": 11,
        "q": "PDCA stands for:",
        "choices": [
          "Plan, Do, Check, Act",
          "Produce, Deliver, Charge, Account",
          "Prepare, Decide, Control, Audit",
          "Predict, Design, Construct, Approve"
        ],
        "answer": 0,
        "explanation": "Correct (a): Plan, Do, Check, Act is the improvement cycle. (b), (c), and (d) invent plausible-sounding but wrong sequences."
      },
      {
        "module": 12,
        "q": "Design capacity 1,000, effective 850, actual 765. Utilization and efficiency are:",
        "choices": [
          "76.5% and 90%",
          "90% and 76.5%",
          "85% and 90%",
          "76.5% and 85%"
        ],
        "answer": 0,
        "explanation": "Correct (a): Utilization = 765 / 1,000 = 76.5%; efficiency = 765 / 850 = 90%. (b) swaps them. (c) uses effective / design for utilization. (d) uses 765 / 900 for efficiency."
      },
      {
        "module": 12,
        "q": "A process has steps of 6, 9, and 4 minutes. After improving the 9-minute step to 6 minutes, the capacity of a 480-minute shift is:",
        "choices": [
          "53 units",
          "80 units",
          "120 units",
          "60 units"
        ],
        "answer": 1,
        "explanation": "Correct (b): 480 / 6 = 80 units. (a) is the old capacity at 9 minutes. (c) would need a 4-minute bottleneck. (d) is not supported by the numbers."
      },
      {
        "module": 12,
        "q": "The five-part operations check covers:",
        "choices": [
          "Customer, process, quality, inventory and supply, plan",
          "Price, product, place, promotion, people",
          "Plan, do, check, act, repeat",
          "Cost, speed, quality, flexibility, service"
        ],
        "answer": 0,
        "explanation": "Correct (a): Customer, process, quality, inventory and supply, plan. (b) is the marketing mix. (c) is the PDCA cycle with an extra step. (d) is a list of competitive priorities, not the check."
      }
    ]
  }
};
