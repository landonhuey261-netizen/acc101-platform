// mgt201 - Module 12: Course Review: Running the Operation
module.exports = {
  "number": 12,
  "slug": "course-review-running-the-operation",
  "title": "Course Review: Running the Operation",
  "estTime": "2–3 hours",
  "objectives": [
    "Trace a product from forecast to delivery through every function in the course.",
    "Run the five-part operations check on any business.",
    "Explain how quality, inventory, supply chain, logistics, and forecasting connect.",
    "Identify the bottleneck in a process and explain how to manage it.",
    "Plan the next step in your own operations learning."
  ],
  "sections": [
    {
      "heading": "One Product, End to End",
      "html": "\n<p>Follow one product — a bicycle built by Ridgeview Bike Parts — through the whole course. The <strong>forecast</strong> (Module 8) says next month's demand is 130 units, from a 3-period moving average of 120, 140, and 130. The <strong>process</strong> (Module 2) is designed around its bottleneck, the welding station at 9 minutes a unit, giving 53 units a shift. <strong>Quality</strong> (Modules 3–4) is built in by the process and watched on control charts, with capability checked against the specification. <strong>Inventory</strong> (Module 5) is ordered by EOQ — 600 units, 20 orders a year — with safety stock of 45 and a reorder point of 445. The <strong>supply chain</strong> (Module 6) brings parts from two suppliers, so a failure at one does not stop the line. <strong>Logistics</strong> (Module 7) delivers finished bikes by road, fast movers near the warehouse door. And the <strong>projects</strong> (Modules 9–10) that change the operation — a new line, a new warehouse — are run on a critical path, not on hope.</p>\n<p>The point of the course is that these are not separate subjects. The forecast sets the inventory policy; the inventory policy sets the supply chain's order pattern; the supply chain's reliability sets the safety stock; the safety stock sets the warehouse; the warehouse sets the logistics. Change one and the rest move — which is why operations is a system, not a set of tricks.</p>\n<p><strong>Worked check.</strong> The welding station is the bottleneck at 9 minutes a unit. Step 1: capacity = 480 ÷ 9 = 53.33, so <strong>53 units a shift</strong>. Step 2: welding is improved to 6 minutes, so capacity becomes 480 ÷ 6 = <strong>80 units a shift</strong> — a 51% increase from fixing one station. Step 3: now the bottleneck moves to the next slowest step, and the improvement cycle starts again. That is the theory of constraints in one paragraph: find the bottleneck, fix it, and find the next one.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Operations is a system, not a set of tricks. The forecast sets the inventory, the inventory sets the supply chain, the supply chain sets the safety stock — change one and the rest move.</div>"
    },
    {
      "heading": "The Five-Part Operations Check",
      "html": "\n<p>Here is the check you can run on any business, in an afternoon. <strong>One — the customer:</strong> what does the customer actually judge — speed, quality, price, reliability — and does the operation deliver it? <strong>Two — the process:</strong> what is the bottleneck, what is the flow time, and where is the waste? <strong>Three — quality:</strong> is the process in control and capable, and what does a defect cost when it reaches the customer? <strong>Four — inventory and supply:</strong> is stock set by EOQ and safety stock, or by gut feel, and is there a single point of failure in the supply chain? <strong>Five — the plan:</strong> is the forecast honest and measured, and are the projects that change the operation run on a critical path?</p>\n<p>Each part has a number attached to it, and the numbers are the ones from this course: utilization and efficiency, Cp and Cpk, EOQ and reorder point, MAD, takt time, OEE, and the critical path. A business that can answer the five parts with numbers is a business that is being run; a business that answers with feelings is a business that is being hoped for.</p>\n<p>Run the check on a business you know — your own, your employer's, a shop you visit. The gaps you find are the improvement projects, and Modules 3, 9, and 11 give you the method for each one.</p>\n<div class=\"callout\"><strong>Key idea:</strong> The five-part check — customer, process, quality, inventory and supply, plan — run with numbers, not feelings. The gaps it finds are your improvement projects.</div>"
    },
    {
      "heading": "The Numbers That Matter",
      "html": "\n<p>Here are the course's key numbers in one place. <strong>Capacity:</strong> utilization = actual ÷ design capacity; efficiency = actual ÷ effective capacity. Ridgeview's numbers: design 1,000, effective 850, actual 765 — utilization 765 ÷ 1,000 = <strong>76.5%</strong>, efficiency 765 ÷ 850 = <strong>90%</strong>. <strong>Quality:</strong> UCL/LCL at ±3σ; Cp = (USL − LSL) ÷ (6σ); Cpk also checks centering. <strong>Inventory:</strong> EOQ = √(2DS ÷ H); safety stock = z × σd × √(lead time); reorder point = demand during lead time + safety stock. <strong>Forecasting:</strong> moving average, weighted moving average, exponential smoothing, MAD. <strong>Flow:</strong> takt time = available time ÷ demand; Little's Law: flow time = WIP ÷ throughput; OEE = availability × performance × quality. <strong>Scheduling:</strong> the critical path is the longest chain; float = late start − early start.</p>\n<p>The numbers are not the point — the decisions they support are. An EOQ is only useful if it changes the order size; a Cpk is only useful if it triggers a fix; a critical path is only useful if it changes what gets done first. The habit this course teaches is to compute, then decide, then act — and then measure whether the decision worked.</p>\n<p><strong>Worked check.</strong> A bakery's design capacity is 2,000 loaves a day, its effective capacity is 1,600, and it actually bakes 1,440. Utilization = 1,440 ÷ 2,000 = <strong>72%</strong>; efficiency = 1,440 ÷ 1,600 = <strong>90%</strong>. The 28% of design capacity that is unused is not waste — it is the scheduled maintenance, the changeovers, and the breaks that effective capacity already accounts for. The question is not why utilization is not 100%; it is whether the 90% efficiency can be raised without breaking the people or the machines.</p>\n<div class=\"formula\">Utilization = Actual ÷ Design capacity &nbsp;|&nbsp; Efficiency = Actual ÷ Effective capacity</div>"
    },
    {
      "heading": "What Comes Next",
      "html": "\n<p>Operations management is a practice, not a qualification. The next step is to use it: run the five-part check on a real business, pick one gap, and run one PDCA cycle on it. Measure before, measure after, and write down what happened — that record is the beginning of a portfolio of real improvements, which is worth more than any certificate.</p>\n<p>If you want to go deeper, the natural next steps are the subjects this course touched and did not finish: statistical quality control at the level of bus121, supply chain analytics, and the project management body of knowledge that the capstone's practice exams draw on. The capstone of this program brings those threads together with practice exams and a certification tracker — and it states, for each credential, what eligibility and benchmarks actually apply.</p>\n<p>The habit to keep is the one from Module 1: operations is the part of the business that keeps its promises to the customer. Every decision in this course — the forecast, the process, the quality, the inventory, the supply chain, the schedule — is a way of making a promise and keeping it.</p>\n<div class=\"callout\"><strong>Key idea:</strong> Operations is the part of the business that keeps its promises. Compute, decide, act — and measure whether the decision worked.</div>"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "\n<p><strong>Takeaways:</strong></p>\n<ul>\n<li>Operations is a system: the forecast sets the inventory, the inventory sets the supply chain, and so on — change one and the rest move.</li>\n<li>The five-part check — customer, process, quality, inventory and supply, plan — run with numbers, not feelings.</li>\n<li>The bottleneck sets the pace; fix it, and the bottleneck moves — that is the improvement cycle.</li>\n<li>Every number in this course exists to support a decision; a number that changes nothing is a decoration.</li>\n<li>The next step is practice: one real business, one real gap, one PDCA cycle, measured before and after.</li>\n</ul>\n<div class=\"callout\"><strong>Common mistake:</strong> Treating the course as finished when the exam is passed. The exam tests whether you can compute; the work tests whether you can decide. Run the five-part check on a real business before you call the course done.</div>\n<div class=\"callout\"><strong>Common mistake:</strong> Chasing 100% utilization. Effective capacity already accounts for maintenance, changeovers, and breaks — pushing past it breaks people and machines. Efficiency against effective capacity is the number that matters.</div>\n<p><strong>Next step:</strong> Take the final exam, then the program capstone — where the practice exams and certification tracker bring this course together with the rest of the program.</p>"
    }
  ],
  "keyTerms": [
    {
      "term": "Theory of constraints",
      "def": "The idea that a system's output is limited by its bottleneck, so improvement means finding and fixing the bottleneck, then finding the next one."
    },
    {
      "term": "Bottleneck",
      "def": "The slowest step in a process, which sets the pace for the whole process."
    },
    {
      "term": "Utilization",
      "def": "Actual output divided by design capacity."
    },
    {
      "term": "Efficiency",
      "def": "Actual output divided by effective capacity."
    },
    {
      "term": "Design capacity",
      "def": "The maximum output a process could achieve under ideal conditions."
    },
    {
      "term": "Effective capacity",
      "def": "The maximum output realistically achievable, allowing for maintenance, changeovers, and breaks."
    },
    {
      "term": "Five-part operations check",
      "def": "A review of a business by customer, process, quality, inventory and supply, and plan — run with numbers."
    },
    {
      "term": "Flow time",
      "def": "The time a unit spends in a process from entry to exit."
    },
    {
      "term": "Throughput",
      "def": "The rate at which units leave a process, such as units per day."
    },
    {
      "term": "Operations strategy",
      "def": "The long-term plan for how the operation supports the business's competitive advantage."
    },
    {
      "term": "Competitive priorities",
      "def": "What a business competes on: cost, quality, speed, flexibility, or service."
    },
    {
      "term": "Continuous improvement",
      "def": "Small, ongoing improvements by everyone, every day, rather than rare large changes."
    },
    {
      "term": "Operations management",
      "def": "The management of the processes that create and deliver a business's products and services."
    }
  ],
  "video": {
    "title": "Introduction to Operations Management & Supply Chain Management",
    "embedUrl": "https://www.youtube.com/embed/u1l52HtdbX4",
    "note": "A broad introduction to operations and supply chain management that ties the whole course together — the same ground as Module 1, now with the detail of Modules 2–11 behind it. Watch it again and notice how much more of it you understand.",
    "more": []
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> Ridgeview Bike Parts has design capacity 1,000 units a day, effective capacity 850, and actual output 765. (a) What is utilization? (b) What is efficiency? (c) Explain in one sentence why utilization is not 100%.</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Utilization = 765 ÷ 1,000 = <strong>76.5%</strong>. Step 2: (b) Efficiency = 765 ÷ 850 = <strong>90%</strong>. Step 3: (c) Utilization is not 100% because effective capacity already accounts for maintenance, changeovers, and breaks — design capacity is the ideal, not the realistic maximum.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A bakery has design capacity 2,000 loaves a day, effective capacity 1,600, and actual output 1,440. (a) What is utilization? (b) What is efficiency? (c) If the bakery raises actual output to 1,520, what is the new efficiency?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) Utilization = 1,440 ÷ 2,000 = <strong>72%</strong>. Step 2: (b) Efficiency = 1,440 ÷ 1,600 = <strong>90%</strong>. Step 3: (c) New efficiency = 1,520 ÷ 1,600 = <strong>95%</strong> — a real improvement, but the bakery must check it is not achieved by skipping maintenance or exhausting staff.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A process has three steps: cut (6 minutes), weld (9 minutes), paint (4 minutes). A shift has 480 minutes. (a) Which step is the bottleneck? (b) How many units can the process make per shift? (c) Welding is improved to 6 minutes. How many units now, and which step is the bottleneck?</p>",
      "solution": "<p><strong>Solution:</strong> Step 1: (a) The bottleneck is <strong>weld</strong>, at 9 minutes — the slowest step. Step 2: (b) Capacity = 480 ÷ 9 = 53.33, so <strong>53 units a shift</strong>. Step 3: (c) Welding at 6 minutes: capacity = 480 ÷ 6 = <strong>80 units a shift</strong>, and the bottleneck is now <strong>cut</strong>, also at 6 minutes — the improvement moved the bottleneck, which is the theory of constraints in action.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Run the five-part operations check on a coffee shop you know. Write one sentence for each part — customer, process, quality, inventory and supply, plan — naming the number you would want for each.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: <strong>Customer</strong> — what do customers judge (speed at peak, taste, price) and does the shop deliver it? The number: average wait at peak. Step 2: <strong>Process</strong> — what is the bottleneck (the espresso machine, the till) and what is the flow time? The number: drinks per hour at peak. Step 3: <strong>Quality</strong> — is the process in control and capable, and what does a bad drink cost? The number: remakes per hundred drinks. Step 4: <strong>Inventory and supply</strong> — is stock set by EOQ and safety stock, and is there a single supplier for milk or beans? The number: days of stock on hand. Step 5: <strong>Plan</strong> — is the forecast honest and measured, and are changes run as projects? The number: forecast MAD.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A shop's EOQ is 600 units, its safety stock is 45, and its reorder point is 445. A manager says 'we have 500 units, so we do not need to order.' Is the manager right? Explain.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: No — the reorder point is 445, and stock is 500, so the manager is right <em>today</em>, but the question is what happens during the lead time. Step 2: At 80 units a day, 500 units last 6.25 days, and the lead time is 5 days — so by the time the order arrives, stock will be near the safety stock. Step 3: The manager should order when stock falls to 445, not wait until it is nearly gone; the reorder point is the trigger, and ignoring it turns a planned order into an emergency.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> A business improves its OEE from 60% to 75% and its forecast MAD from 12 units to 8 units. Explain, in two sentences, what each improvement means for the customer.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: OEE rising from 60% to 75% means the equipment is available more, runs faster, and makes fewer defects — so orders are filled faster and with fewer bad units reaching the customer. Step 2: MAD falling from 12 to 8 means the forecast is typically off by 8 units instead of 12 — so stock is better matched to demand, with fewer stockouts and less surplus.</p>"
    }
  ],
  "quiz": [
    {
      "q": "Design capacity 1,000, effective 850, actual 765. Utilization is:",
      "choices": [
        "90%",
        "76.5%",
        "85%",
        "72%"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Utilization = 765 ÷ 1,000 = 76.5%. (a) is the efficiency. (c) is the effective-to-design ratio. (d) is the bakery's utilization in the worked check."
    },
    {
      "q": "With the same numbers, efficiency is:",
      "choices": [
        "76.5%",
        "85%",
        "90%",
        "72%"
      ],
      "answer": 2,
      "explanation": "Correct: (c). Efficiency = 765 ÷ 850 = 90%. (a) is the utilization. (b) is the effective-to-design ratio. (d) is the bakery's utilization."
    },
    {
      "q": "A process has steps of 6, 9, and 4 minutes. The bottleneck is the step of:",
      "choices": [
        "4 minutes",
        "6 minutes",
        "9 minutes",
        "None — they are equal"
      ],
      "answer": 2,
      "explanation": "Correct: (c). The bottleneck is the slowest step, 9 minutes. (a) is the fastest. (b) is the middle step. (d) they are not equal."
    },
    {
      "q": "With a 480-minute shift and a 9-minute bottleneck, the process makes:",
      "choices": [
        "80 units",
        "53 units",
        "120 units",
        "480 units"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 480 ÷ 9 = 53.33, so 53 whole units. (a) is the capacity after improving the bottleneck to 6 minutes. (c) and (d) come from no correct division."
    },
    {
      "q": "After the bottleneck is improved to 6 minutes, capacity becomes:",
      "choices": [
        "53 units",
        "80 units",
        "120 units",
        "60 units"
      ],
      "answer": 1,
      "explanation": "Correct: (b). 480 ÷ 6 = 80 units. (a) is the old capacity. (c) would need a 4-minute bottleneck. (d) is not supported by the numbers."
    },
    {
      "q": "The theory of constraints says:",
      "choices": [
        "Ignore the bottleneck",
        "Find the bottleneck, fix it, then find the next one",
        "Balance all steps at the same speed",
        "Always add capacity everywhere"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The bottleneck limits the system, so fix it, and the bottleneck moves — the cycle repeats. (a) is the opposite. (c) is not the theory. (d) wastes money on non-bottlenecks."
    },
    {
      "q": "The five-part operations check covers:",
      "choices": [
        "Customer, process, quality, inventory and supply, plan",
        "Price, product, place, promotion, people",
        "Plan, do, check, act, repeat",
        "Cost, speed, quality, flexibility, service"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Customer, process, quality, inventory and supply, plan. (b) is the marketing mix. (c) is the PDCA cycle with an extra step. (d) is a list of competitive priorities, not the check."
    },
    {
      "q": "A bakery has design capacity 2,000, effective 1,600, actual 1,440. Its utilization and efficiency are:",
      "choices": [
        "72% and 90%",
        "90% and 72%",
        "80% and 90%",
        "72% and 80%"
      ],
      "answer": 0,
      "explanation": "Correct: (a). Utilization = 1,440 ÷ 2,000 = 72%; efficiency = 1,440 ÷ 1,600 = 90%. (b) swaps them. (c) uses 1,600 ÷ 2,000 for utilization. (d) uses 1,440 ÷ 1,800 for efficiency."
    }
  ],
  "studyGuide": "\n<h3>Module 12 — Course Review: Quick Reference</h3>\n<p><strong>Core idea:</strong> Operations is a system, not a set of tricks. The forecast sets the inventory, the inventory sets the supply chain, and so on — change one and the rest move.</p>\n<div class=\"formula\">Utilization = Actual ÷ Design capacity &nbsp;|&nbsp; Efficiency = Actual ÷ Effective capacity</div>\n<p><strong>Five-part check:</strong> customer · process · quality · inventory and supply · plan — run with numbers, not feelings.</p>\n<p><strong>Key numbers:</strong> EOQ = √(2DS ÷ H) · safety stock = z × σd × √(lead time) · Cp = (USL − LSL) ÷ (6σ) · Cpk checks centering · MAD = average absolute forecast error · takt time = available time ÷ demand · OEE = availability × performance × quality · critical path = longest chain, float = late start − early start.</p>\n<p><strong>Watch out:</strong> Do not chase 100% utilization — effective capacity already accounts for maintenance and breaks. And the exam tests whether you can compute; the work tests whether you can decide.</p>\n<p><strong>Self-check:</strong> Run the five-part check on a business you know, with a number for each part — then pick one gap and run one PDCA cycle on it.</p>\n"
};
