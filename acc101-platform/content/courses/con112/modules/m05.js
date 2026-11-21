// con112 - Module 5: Labor and Material Costing
module.exports = {
  "number": 5,
  "slug": "labor-and-material-costing",
  "title": "Labor and Material Costing",
  "estTime": "3–4 hours",
  "objectives": [
    "Explain how a takeoff quantity becomes a cost: quantity × unit price.",
    "Describe how material prices are gathered: supplier quotes, price books, and historical costs.",
    "Explain labor costing: crew rates, productivity rates, and labor burden.",
    "Calculate a crew's daily cost and the cost of a task from its production rate.",
    "Explain equipment costing: owning, operating, and renting."
  ],
  "sections": [
    {
      "heading": "Quantity Times Unit Price",
      "html": "<p>Costing is simple arithmetic with honest inputs: every line of the takeoff gets a unit price, and the cost is the quantity times the unit price. Ten cubic yards of concrete at a unit price per yard, 640 square feet of formwork at a unit price per square foot, 342 pounds of rebar at a unit price per pound — each line is a multiplication, and the estimate is the sum of the lines. The arithmetic is easy; the honesty of the unit prices is the skill.</p>\n<p>A unit price is not a guess. It comes from a supplier's quote, a price book, or the company's own history of what the same work cost last time. A supplier's quote is the best source for materials, because it is a real price for a real delivery on a real date. A price book is a published list of average costs, useful for a first pass but never as accurate as a quote. Historical costs are the company's own records — the most accurate source of all, because they are what the company actually paid.</p>\n<p>Every unit price has a date on it. A quote from six months ago is not today's price, and a price book from last year is not this year's cost. The estimator records the source and the date of every price, so the review can check them — and so the next estimate can reuse them with confidence.</p>\n"
    },
    {
      "heading": "Material Pricing",
      "html": "<p>Material prices are gathered by asking. The estimator sends the takeoff to suppliers — the lumberyard, the concrete plant, the steel supplier — and asks for a quote: the price, the delivery, and the terms. A good quote names the material exactly, the quantity, the delivery date, and whether delivery is included. A quote that does not name the material exactly is not a quote — it is a conversation.</p>\n<p>The estimator compares quotes, but not only on price. A cheaper material that arrives late costs more than an expensive material that arrives on time, because a crew waiting for material is a crew being paid to stand still. Delivery, reliability, and the supplier's ability to deliver the full quantity matter as much as the number on the page.</p>\n<p>Materials also have a waste factor built into the quantity, not the price. The takeoff says how much is needed plus waste; the price is per unit; the cost is the two multiplied. Hiding waste in the price makes the estimate impossible to check — the reviewer cannot tell whether the price is high or the quantity is padded. Waste in the quantity, price in the price, and both visible.</p>\n"
    },
    {
      "heading": "Labor: Crews, Rates, and Productivity",
      "html": "<p>Labor is priced by the crew, not by the person. A framing crew might be four carpenters and a laborer; a concrete crew might be six finishers and two laborers. Each person has a wage, and the crew's cost is the sum of the wages plus the <strong>labor burden</strong> — the employer's share of taxes, insurance, workers' compensation, and benefits, which typically adds 30% to 50% on top of the wage. A carpenter paid $30 an hour costs the company about $40 to $45 an hour once burden is added.</p>\n<p>The crew's cost is then applied to the work by its <strong>productivity rate</strong> — how much work the crew does in a day. A framing crew that frames 100 square feet of wall a day, at a daily crew cost, gives a unit price per square foot of wall. The productivity rate comes from the company's history: what the same crew did last time, on the same kind of work. A productivity rate guessed from a book is a guess; a rate from the company's own records is a fact.</p>\n<p>Productivity changes with conditions. A crew framing in good weather on a clear site is faster than the same crew framing in rain, on a tight lot, or on a second floor. The estimator adjusts the rate for the conditions — and records the adjustment, so the review can see it. An estimate that uses summer productivity for a winter job is an estimate that loses money.</p>\n"
    },
    {
      "heading": "Equipment: Own, Operate, Rent",
      "html": "<p>Equipment costs three ways: owning it, operating it, and renting it. <strong>Owning</strong> costs depreciation, interest, insurance, and storage — the cost of having the machine whether it works or not. <strong>Operating</strong> costs fuel, maintenance, repairs, and the operator's wage. <strong>Renting</strong> costs the rental rate plus delivery and fuel. The estimator prices the equipment the job needs, for the time it needs it, by whichever way the company gets it.</p>\n<p>A machine that is owned still costs the job money — the owning cost is charged to the job as an internal rate, so the job pays its share of the machine. A machine that sits idle on a job still costs its owning rate, which is why the schedule matters: a machine delivered a week early and parked is a week of cost with no work. The estimator and the scheduler work together on equipment, because the schedule decides the cost.</p>\n<p>Small tools and consumables — blades, bits, drill bits, saw blades — are priced as a percentage of the labor cost or as a small allowance per task, because pricing each one separately would take longer than the job. The allowance is small, but it is real, and forgetting it is the same as forgetting any other cost.</p>\n"
    },
    {
      "heading": "Module Recap and Common Mistakes",
      "html": "<p><strong>Takeaways:</strong> Cost is quantity × unit price, summed over the takeoff. Material prices come from supplier quotes, price books, and history — with a source and a date. Labor is priced by the crew: wages plus burden (30–50%), applied by the crew's productivity rate. Equipment costs owning, operating, and renting. Waste goes in the quantity, not the price.</p>\n<p><strong>Common mistake:</strong> Forgetting labor burden. A carpenter paid $30 an hour costs about $40–$45 an hour once taxes, insurance, and benefits are added — and a bid priced on wages alone loses that difference on every hour.</p>\n<p><strong>Common mistake:</strong> Using a productivity rate from a book for a job with bad conditions. Adjust the rate for weather, access, and height — and record the adjustment.</p>\n<p><strong>Ready-to-Work link:</strong> If you can price a takeoff line, explain labor burden, and calculate a crew's daily cost, you have this module. Module 6 covers building the bid.</p>\n"
    }
  ],
  "keyTerms": [
    {
      "term": "Unit price",
      "def": "The price for one unit of work — per cubic yard, per square foot, per pound — multiplied by the takeoff quantity."
    },
    {
      "term": "Supplier quote",
      "def": "A supplier's written price for a material, naming the material, quantity, delivery, and terms."
    },
    {
      "term": "Price book",
      "def": "A published list of average construction costs, useful for a first pass but less accurate than a quote."
    },
    {
      "term": "Historical cost",
      "def": "What the company actually paid for the same work last time — the most accurate pricing source."
    },
    {
      "term": "Labor burden",
      "def": "The employer's extra costs on top of wages: taxes, insurance, workers' compensation, and benefits — typically 30–50%."
    },
    {
      "term": "Crew",
      "def": "The team that does a task — for example, four carpenters and a laborer — priced as a unit."
    },
    {
      "term": "Productivity rate",
      "def": "How much work a crew does in a day, such as square feet of wall framed per day."
    },
    {
      "term": "Daily crew cost",
      "def": "The total cost of a crew for one day: wages plus burden for every member."
    },
    {
      "term": "Owning cost",
      "def": "The cost of having equipment: depreciation, interest, insurance, and storage."
    },
    {
      "term": "Operating cost",
      "def": "The cost of running equipment: fuel, maintenance, repairs, and the operator's wage."
    },
    {
      "term": "Rental rate",
      "def": "The price of renting equipment, plus delivery and fuel."
    },
    {
      "term": "Internal rate",
      "def": "The rate a company charges its own jobs for using its own equipment, covering owning and operating costs."
    },
    {
      "term": "Consumables",
      "def": "Small tools and supplies — blades, bits, drill bits — priced as a percentage of labor or a small allowance."
    },
    {
      "term": "Wage",
      "def": "What a worker is paid per hour, before the employer's burden is added."
    },
    {
      "term": "Delivery",
      "def": "Bringing material to the site; a quote must say whether delivery is included in the price."
    }
  ],
  "video": {
    "title": "CostX Tutorial | Rebar, Formwork & Concrete Takeoff for Column Bases & Superstructure",
    "embedUrl": "https://www.youtube.com/embed/_vwk2bfNhQQ",
    "note": "A CostX takeoff for rebar, formwork, and concrete — the three quantities from Module 3, now priced. Watch how each quantity is tied to its own rate: concrete by the yard, rebar by the weight, formwork by the area. That separation is the whole point of costing.",
    "more": [
      {
        "title": "Volume of Staircase and Concrete quantity for Staircase",
        "url": "https://www.youtube.com/watch?v=zIUsPgboE0c"
      }
    ]
  },
  "assignment": [
    {
      "prompt": "<p><strong>Problem 1.</strong> A takeoff line is 10 cubic yards of concrete. Write the cost formula and explain each part.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Cost = quantity × unit price. Step 2: Quantity is 10 cubic yards, from the takeoff plus waste. Step 3: Unit price is the supplier's price per cubic yard, with a source and a date. Step 4: Cost = 10 × unit price.</p>"
    },
    {
      "prompt": "<p><strong>Problem 2.</strong> A carpenter is paid $30 an hour and the labor burden is 40%. What does the carpenter cost the company per hour?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Burden = $30 × 0.40 = $12 an hour. Step 2: Total cost = $30 + $12 = $42 an hour. Step 3: A bid priced at $30 an hour loses $12 on every hour that carpenter works.</p>"
    },
    {
      "prompt": "<p><strong>Problem 3.</strong> A framing crew of 4 carpenters and 1 laborer costs $1,600 a day including burden, and frames 100 square feet of wall a day. What is the labor unit price per square foot?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Unit price = daily cost ÷ daily production. Step 2: $1,600 ÷ 100 = $16 per square foot of wall. Step 3: That rate applies to the wall area in the takeoff.</p>"
    },
    {
      "prompt": "<p><strong>Problem 4.</strong> Why must a supplier's quote name the material exactly? Give an example.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: A quote that does not name the material exactly is not a price for the material the job needs. Step 2: Example: a quote for 'concrete' does not say whether it is 3,000 PSI or 5,000 PSI, or whether delivery is included. Step 3: The estimator must know exactly what is being priced, or the price is a guess.</p>"
    },
    {
      "prompt": "<p><strong>Problem 5.</strong> A crew frames 100 square feet a day in good weather, but the job is on a second floor in winter. What should the estimator do?</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Adjust the productivity rate down for the conditions — second-floor work and winter are slower. Step 2: Record the adjustment and the reason, so the review can see it. Step 3: An estimate that uses summer productivity for a winter job loses money.</p>"
    },
    {
      "prompt": "<p><strong>Problem 6.</strong> Explain owning cost versus operating cost for a machine the company owns.</p>",
      "solution": "<p><strong>Answer:</strong> Step 1: Owning cost is depreciation, interest, insurance, and storage — the cost of having the machine. Step 2: Operating cost is fuel, maintenance, repairs, and the operator's wage — the cost of using it. Step 3: Both are charged to the job, as an internal rate, for the time the machine is on the job.</p>"
    }
  ],
  "quiz": [
    {
      "q": "A takeoff line's cost is calculated as:",
      "choices": [
        "Quantity + unit price",
        "Quantity × unit price",
        "Quantity ÷ unit price",
        "Unit price only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Cost is quantity times unit price, summed over the takeoff. (a) Adding gives a meaningless number. (c) Dividing gives a rate, not a cost. (d) The price alone is not a cost without a quantity."
    },
    {
      "q": "The most accurate source for a material price is:",
      "choices": [
        "A guess",
        "A supplier's quote or the company's own historical cost",
        "A price book from five years ago",
        "The client's guess"
      ],
      "answer": 1,
      "explanation": "Correct: (b). A current supplier quote or the company's own history is what the material actually costs. (a) A guess is not a price. (c) An old price book is out of date. (d) The client does not set material prices."
    },
    {
      "q": "Labor burden typically adds:",
      "choices": [
        "0% to wages",
        "30–50% on top of wages",
        "100% to wages",
        "Nothing — wages are the full cost"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Taxes, insurance, workers' compensation, and benefits add roughly 30–50% to wages. (a) 0% ignores the employer's costs. (c) 100% is far too high. (d) Wages are only part of the cost."
    },
    {
      "q": "A carpenter paid $30/hour with 40% burden costs the company:",
      "choices": [
        "$30/hour",
        "$42/hour",
        "$70/hour",
        "$12/hour"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $30 + ($30 × 0.40) = $30 + $12 = $42 an hour. (a) $30 is the wage, not the cost. (c) $70 is far too high. (d) $12 is the burden alone."
    },
    {
      "q": "A crew costing $1,600 a day that frames 100 sq ft a day has a labor unit price of:",
      "choices": [
        "$1,600 per sq ft",
        "$16 per sq ft",
        "$100 per sq ft",
        "$6 per sq ft"
      ],
      "answer": 1,
      "explanation": "Correct: (b). $1,600 ÷ 100 = $16 per square foot. (a) That is the daily cost, not the unit price. (c) That is the production, not the price. (d) $6 is not the math."
    },
    {
      "q": "Waste belongs in:",
      "choices": [
        "The unit price",
        "The takeoff quantity",
        "The profit margin",
        "The overhead"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Waste is added to the quantity so the price stays clean and checkable. (a) Hiding waste in the price makes the estimate impossible to check. (c) Profit is separate. (d) Overhead is separate."
    },
    {
      "q": "Owning cost for equipment includes:",
      "choices": [
        "Fuel only",
        "Depreciation, interest, insurance, and storage",
        "The operator's wage only",
        "Delivery only"
      ],
      "answer": 1,
      "explanation": "Correct: (b). Owning is the cost of having the machine, whether it works or not. (a) Fuel is an operating cost. (c) The wage is an operating cost. (d) Delivery is a rental cost."
    },
    {
      "q": "Productivity rates should come from:",
      "choices": [
        "A book, always",
        "The company's own history of the same crew on the same kind of work",
        "The client's estimate",
        "A guess"
      ],
      "answer": 1,
      "explanation": "Correct: (b). The company's own records are the most accurate source. (a) A book rate is a guess for this crew. (c) The client does not set productivity. (d) A guess is not a rate."
    }
  ],
  "studyGuide": "\n<h3>Module 5 — Labor & Material Costing: Quick Reference</h3>\n<p><strong>Cost:</strong> Quantity × unit price, summed over the takeoff. Prices need a source and a date.</p>\n<p><strong>Materials:</strong> Supplier quotes (best) · Price books (first pass) · Historical costs (most accurate). Waste goes in the quantity, not the price.</p>\n<p><strong>Labor:</strong> Crew cost = wages + burden (30–50%). Unit price = daily crew cost ÷ daily production. Adjust productivity for conditions and record it.</p>\n<p><strong>Equipment:</strong> Owning (depreciation, interest, insurance, storage) + Operating (fuel, maintenance, repairs, operator) or Rental rate + delivery.</p>\n<p><strong>Self-check:</strong> Price a takeoff line and compute a burdened hourly cost.</p>\n"
};
