// ACC 102 — Midterm and Final exams.
// All questions are original to these exams (same topics as module quizzes, fresh scenarios and numbers).
// Every explanation covers why the correct answer is right AND why each wrong choice is wrong.

module.exports = {
  midterm: {
    title: "Midterm Exam",
    minutes: 75,
    passPercent: 70,
    coverage: "Modules 1–6",
    questions: [
      {
        module: 1,
        q: "Which of the following is a primary difference between managerial and financial accounting?",
        choices: ["Managerial accounting is required by law; financial accounting is optional", "Managerial accounting serves internal managers; financial accounting serves outside users", "Managerial accounting reports only on the past; financial accounting reports only on the future", "Managerial accounting uses no dollar amounts"],
        answer: 1,
        explanation: "Correct (b): Managerial accounting is for internal decision-makers, while financial accounting reports to outsiders such as investors and lenders. (a) reverses the legal requirement — financial statements are the regulated ones. (c) reverses the time focus — managerial accounting is forward-looking. (d) is false — managerial accounting is full of dollar amounts."
      },
      {
        module: 1,
        q: "A bakery plans to sell 8,000 loaves at $5.00 each, for planned revenue of $40,000. It actually sells 7,500 loaves at $5.00, for revenue of $37,500. The revenue variance is:",
        choices: ["$2,500 favorable", "$2,500 unfavorable", "$500 favorable", "$40,000 unfavorable"],
        answer: 1,
        explanation: "Correct (b): Actual revenue $37,500 minus planned $40,000 is −$2,500, and lower revenue than planned is unfavorable. (a) gets the direction backwards. (c) is the per-unit price difference times nothing meaningful — the volume shortfall is 500 loaves × $5 = $2,500. (d) is the planned revenue, not a variance."
      },
      {
        module: 1,
        q: "A factory's annual property tax on its plant is best classified as a:",
        choices: ["Variable product cost", "Fixed product cost", "Variable period cost", "Fixed period cost"],
        answer: 1,
        explanation: "Correct (b): Plant property tax is a manufacturing cost (product cost) that does not change with production volume, so it is a fixed product cost. (a) is wrong because the tax does not vary with units. (c) and (d) are wrong because factory costs are product costs, not period costs — period costs are selling and administrative."
      },
      {
        module: 1,
        q: "In a contribution margin income statement, the contribution margin is computed as:",
        choices: ["Sales minus cost of goods sold", "Sales minus all variable costs", "Sales minus all fixed costs", "Gross profit minus selling expenses"],
        answer: 1,
        explanation: "Correct (b): Contribution margin is sales minus all variable costs (variable manufacturing and variable selling/administrative). (a) is gross profit, which subtracts only manufacturing costs and mixes fixed and variable. (c) describes nothing standard — subtracting fixed costs from sales gives neither contribution margin nor profit. (d) mixes a gross-profit concept with a period-cost concept."
      },
      {
        module: 2,
        q: "High activity is 8,000 units with total cost $52,000; low activity is 4,000 units with total cost $32,000. The variable cost per unit is:",
        choices: ["$4.00", "$5.00", "$6.50", "$8.00"],
        answer: 1,
        explanation: "Correct (b): (52,000 − 32,000) ÷ (8,000 − 4,000) = 20,000 ÷ 4,000 = $5.00 per unit. (a) divides the cost difference by 5,000 instead of 4,000. (c) divides total cost by units at the low point. (d) divides the low total cost by 4,000, which is a unit cost, not the variable rate."
      },
      {
        module: 2,
        q: "Using the same data (variable cost $5.00 per unit), fixed cost is $12,000. The cost forecast at 6,000 units is:",
        choices: ["$30,000", "$42,000", "$52,000", "$12,000"],
        answer: 1,
        explanation: "Correct (b): 12,000 + (5.00 × 6,000) = 12,000 + 30,000 = $42,000. (a) counts only the variable portion. (c) is the cost at 8,000 units. (d) counts only the fixed portion."
      },
      {
        module: 2,
        q: "Direct materials $30,000, direct labor $18,000, manufacturing overhead $22,000. Prime cost and conversion cost are:",
        choices: ["Prime $48,000; conversion $40,000", "Prime $40,000; conversion $48,000", "Prime $70,000; conversion $52,000", "Prime $52,000; conversion $70,000"],
        answer: 0,
        explanation: "Correct (a): Prime = DM + DL = 30,000 + 18,000 = $48,000; conversion = DL + MOH = 18,000 + 22,000 = $40,000. (b) swaps the two. (c) adds all three costs for prime, which is wrong, and miscomputes conversion. (d) adds DM + MOH for prime and all three for conversion."
      },
      {
        module: 2,
        q: "Fixed cost is $24,000 per month and variable cost is $4 per unit. Unit cost at 4,000 units versus 8,000 units is:",
        choices: ["$10.00 at both volumes", "$10.00 at 4,000 and $7.00 at 8,000", "$7.00 at 4,000 and $10.00 at 8,000", "$6.00 at both volumes"],
        answer: 1,
        explanation: "Correct (b): At 4,000 units, unit cost = 4 + (24,000 ÷ 4,000) = $10.00; at 8,000, unit cost = 4 + (24,000 ÷ 8,000) = $7.00. Fixed cost per unit falls as volume rises. (a) ignores the fixed-cost spread. (c) reverses the direction. (d) is the fixed cost per unit at 4,000 only."
      },
      {
        module: 3,
        q: "Estimated manufacturing overhead is $300,000 and estimated direct labor hours are 50,000. The predetermined overhead rate is:",
        choices: ["$6.00 per direct labor hour", "$0.17 per direct labor hour", "$6.00 per unit", "$300,000 per hour"],
        answer: 0,
        explanation: "Correct (a): 300,000 ÷ 50,000 = $6.00 per direct labor hour. (b) divides the wrong way (50,000 ÷ 300,000). (c) confuses the allocation base — the rate is per hour, not per unit. (d) is the total estimate, not a rate."
      },
      {
        module: 3,
        q: "A job uses direct materials $10,000, direct labor $8,000, and overhead applied at 120% of direct labor cost. The job's total cost is:",
        choices: ["$27,600", "$18,000", "$26,400", "$20,800"],
        answer: 0,
        explanation: "Correct (a): Overhead = 1.20 × 8,000 = $9,600; total = 10,000 + 8,000 + 9,600 = $27,600. (b) counts only materials and labor. (c) applies 120% to materials instead of labor. (d) applies overhead at 120% of the wrong base and rounds."
      },
      {
        module: 3,
        q: "A process starts 6,000 units. 5,000 are completed and 1,000 remain in ending work in process, 40% complete for conversion. Materials cost $5.00 per equivalent unit and conversion cost $3.00. The cost of goods completed is:",
        choices: ["$40,000", "$46,200", "$30,000", "$36,000"],
        answer: 0,
        explanation: "Correct (a): Completed units cost (5,000 × $5) + (5,000 × $3) = 25,000 + 15,000 = $40,000. (b) is the total cost of all units (completed $40,000 plus ending WIP $6,200). (c) counts only materials. (d) counts materials plus conversion on only 4,000 units."
      },
      {
        module: 3,
        q: "Overhead applied to jobs is $150,000 and actual overhead incurred is $158,000. Overhead is:",
        choices: ["Overapplied by $8,000", "Underapplied by $8,000", "Overapplied by $158,000", "Exactly applied"],
        answer: 1,
        explanation: "Correct (b): Applied $150,000 is less than actual $158,000, so overhead is underapplied by $8,000 — not enough cost was charged to jobs. (a) reverses the direction. (c) uses the actual total as the variance. (d) is false — the two amounts differ by $8,000."
      },
      {
        module: 4,
        q: "The setup cost pool is $48,000 for 240 setups. The activity rate is:",
        choices: ["$200 per setup", "$48,000 per setup", "$2.00 per setup", "$240 per setup"],
        answer: 0,
        explanation: "Correct (a): 48,000 ÷ 240 = $200 per setup. (b) is the pool total, not a rate. (c) divides the wrong way. (d) is the number of setups, not a rate."
      },
      {
        module: 4,
        q: "A product uses 30 setups at $200 each and 800 machine hours at $25 per hour. Its total activity-based overhead is:",
        choices: ["$26,000", "$20,000", "$6,000", "$46,000"],
        answer: 0,
        explanation: "Correct (a): (30 × 200) + (800 × 25) = 6,000 + 20,000 = $26,000. (b) counts only machining. (c) counts only setups. (d) adds the two rates together and multiplies by nothing meaningful."
      },
      {
        module: 4,
        q: "Activity-based costing differs from traditional costing mainly because it:",
        choices: ["Uses only one cost pool for all overhead", "Assigns overhead using multiple activity-based rates instead of one volume-based rate", "Ignores manufacturing overhead entirely", "Uses only direct labor hours as a base"],
        answer: 1,
        explanation: "Correct (b): ABC traces overhead through activities with their own drivers (setups, inspections, machine hours) instead of one blanket rate. (a) describes traditional costing's weakness. (c) is false — ABC assigns overhead more carefully, not less. (d) describes a traditional single-base approach."
      },
      {
        module: 4,
        q: "A cost driver is best defined as:",
        choices: ["The total cost of a department", "A factor that causes an activity's cost to change", "The selling price of a product", "A fixed cost that never changes"],
        answer: 1,
        explanation: "Correct (b): A cost driver is the measure of activity (setups, hours, inspections) that causes the cost pool to rise or fall. (a) is a cost pool total. (c) is a price, not a cause of cost. (d) describes a fixed cost, not a driver."
      },
      {
        module: 5,
        q: "A product sells for $50, variable cost is $30, and fixed cost is $100,000. The break-even point in units is:",
        choices: ["2,000 units", "3,333 units", "5,000 units", "2,500 units"],
        answer: 2,
        explanation: "Correct (c): Contribution margin is 50 − 30 = $20; break-even = 100,000 ÷ 20 = 5,000 units. (a) divides fixed cost by the selling price. (b) divides fixed cost by variable cost. (d) divides fixed cost by the contribution margin of a different product."
      },
      {
        module: 5,
        q: "Using the same product (price $50, variable cost $30, fixed cost $100,000), the break-even point in sales dollars is:",
        choices: ["$100,000", "$150,000", "$250,000", "$200,000"],
        answer: 2,
        explanation: "Correct (c): Contribution margin ratio is 20 ÷ 50 = 40%; break-even sales = 100,000 ÷ 0.40 = $250,000 (or 5,000 units × $50). (a) is fixed cost alone. (b) is 3,000 units × $50. (d) is 4,000 units × $50."
      },
      {
        module: 5,
        q: "Using the same product, the units needed to earn a target profit of $40,000 are:",
        choices: ["5,000 units", "6,000 units", "7,000 units", "8,000 units"],
        answer: 2,
        explanation: "Correct (c): (100,000 + 40,000) ÷ 20 = 140,000 ÷ 20 = 7,000 units. (a) is the break-even point (zero profit). (b) divides 120,000 by 20. (d) divides 160,000 by 20."
      },
      {
        module: 5,
        q: "Using the same product, at 8,000 units sold the margin of safety in dollars is:",
        choices: ["$150,000", "$100,000", "$250,000", "$400,000"],
        answer: 0,
        explanation: "Correct (a): Sales at 8,000 units = $400,000; break-even sales = $250,000; margin of safety = 400,000 − 250,000 = $150,000 (37.5% of sales). (b) is fixed cost. (c) is break-even sales. (d) is total sales."
      },
      {
        module: 6,
        q: "Quarter 1 sales are 4,000 units. Desired ending inventory is 800 units and beginning inventory is 600 units. Production needed is:",
        choices: ["4,200 units", "3,800 units", "4,000 units", "5,400 units"],
        answer: 0,
        explanation: "Correct (a): Production = sales + desired ending − beginning = 4,000 + 800 − 600 = 4,200 units. (b) subtracts ending and adds beginning. (c) ignores inventory entirely. (d) adds both inventories."
      },
      {
        module: 6,
        q: "Production is 4,200 units, each needing 3 pounds of material at $4.00 per pound. The materials purchases budget (in dollars) is:",
        choices: ["$50,400", "$12,600", "$16,800", "$33,600"],
        answer: 0,
        explanation: "Correct (a): 4,200 × 3 lb = 12,600 lb × $4.00 = $50,400. (b) is the pounds needed, not the dollars. (c) is 4,200 × $4, ignoring the pounds per unit. (d) is 4,200 × 2 × $4 — the wrong pounds per unit."
      },
      {
        module: 6,
        q: "Production is 4,200 units, each needing 0.25 direct labor hours at $20.00 per hour. Direct labor cost is:",
        choices: ["$21,000", "$84,000", "$1,050", "$16,800"],
        answer: 0,
        explanation: "Correct (a): 4,200 × 0.25 = 1,050 hours × $20 = $21,000. (b) multiplies units by the wage rate directly. (c) is the hours, not the dollars. (d) is 4,200 × 0.20 × $20 — the wrong hours per unit."
      },
      {
        module: 6,
        q: "Quarter 1 sales are $80,000. 60% is collected in the quarter and the rest next quarter. Beginning accounts receivable is $15,000. Cash collections in Quarter 1 are:",
        choices: ["$48,000", "$63,000", "$80,000", "$95,000"],
        answer: 1,
        explanation: "Correct (b): 60% × 80,000 = $48,000 from current sales, plus $15,000 collected from prior receivables = $63,000. (a) counts only current-quarter collections. (c) assumes all sales are collected immediately. (d) adds the full current sales to beginning receivables."
      },
      {
        module: 6,
        q: "Beginning cash is $10,000, cash collections are $63,000, and cash payments are $60,000. The ending cash balance is:",
        choices: ["$13,000", "$73,000", "$3,000", "$23,000"],
        answer: 0,
        explanation: "Correct (a): 10,000 + 63,000 − 60,000 = $13,000. (b) is cash available before payments. (c) subtracts beginning cash instead of adding it. (d) adds payments instead of subtracting them."
      }
    ]
  },
  final: {
    title: "Final Exam",
    minutes: 120,
    passPercent: 70,
    coverage: "Modules 1–12",
    questions: [
      {
        module: 1,
        q: "Which activity is part of the control function of management?",
        choices: ["Setting a five-year sales goal", "Comparing actual costs to the budget and investigating differences", "Choosing which product line to launch", "Preparing the annual tax return"],
        answer: 1,
        explanation: "Correct (b): Control is monitoring actual results against the plan and correcting course. (a) is planning. (c) is decision-making. (d) is a compliance task, not a management control activity."
      },
      {
        module: 1,
        q: "A company plans revenue of $36,000 (6,000 units × $6) but actually earns $33,000 (5,500 units × $6). The revenue variance is:",
        choices: ["$3,000 favorable", "$3,000 unfavorable", "$500 favorable", "$33,000 unfavorable"],
        answer: 1,
        explanation: "Correct (b): 33,000 − 36,000 = −$3,000, and lower revenue than planned is unfavorable. (a) reverses the direction. (c) is 500 units short × $1 — the price did not change, the volume did: 500 × $6 = $3,000. (d) is the actual revenue, not a variance."
      },
      {
        module: 1,
        q: "Advertising for a specific product is classified as a:",
        choices: ["Product cost", "Period cost", "Direct material", "Manufacturing overhead"],
        answer: 1,
        explanation: "Correct (b): Advertising is a selling expense — a period cost expensed when incurred, not attached to inventory. (a) is wrong because advertising is not a manufacturing cost. (c) is a production input. (d) is a factory cost."
      },
      {
        module: 2,
        q: "High activity is 10,000 units with total cost $70,000; low activity is 6,000 units with total cost $46,000. The cost equation is:",
        choices: ["Total cost = $10,000 + $6.00 per unit", "Total cost = $6,000 + $10.00 per unit", "Total cost = $70,000 + $6.00 per unit", "Total cost = $10,000 + $10.00 per unit"],
        answer: 0,
        explanation: "Correct (a): Variable rate = (70,000 − 46,000) ÷ (10,000 − 6,000) = $6.00; fixed = 70,000 − (6 × 10,000) = $10,000. (b) swaps fixed and variable. (c) uses the high total cost as the fixed cost. (d) uses $10 as the variable rate, which is the fixed cost divided by 1,000."
      },
      {
        module: 2,
        q: "Fixed cost is $24,000 per month and variable cost is $4 per unit. The forecast cost at 8,000 units is:",
        choices: ["$58,000", "$56,000", "$32,000", "$24,000"],
        answer: 1,
        explanation: "Correct (b): 24,000 + (4 × 8,000) = 24,000 + 32,000 = $56,000. (a) is the forecast at 8,500 units. (c) counts only the variable portion. (d) counts only the fixed portion."
      },
      {
        module: 2,
        q: "The relevant range is best defined as:",
        choices: ["The range of activity where cost behavior assumptions hold", "The range of prices a company can charge", "The range of products a company sells", "The range between break-even and maximum profit"],
        answer: 0,
        explanation: "Correct (a): Within the relevant range, fixed costs stay fixed and variable cost per unit stays constant; outside it, those assumptions break down. (b) is a pricing concept. (c) is a product-mix concept. (d) is not a defined term."
      },
      {
        module: 3,
        q: "A job uses direct materials $15,000, direct labor $10,000, and overhead applied at 150% of direct labor. Its total cost and cost per unit for 500 units are:",
        choices: ["$40,000 total; $80 per unit", "$35,000 total; $70 per unit", "$25,000 total; $50 per unit", "$40,000 total; $40 per unit"],
        answer: 0,
        explanation: "Correct (a): Overhead = 1.50 × 10,000 = $15,000; total = 15,000 + 10,000 + 15,000 = $40,000; per unit = 40,000 ÷ 500 = $80. (b) applies overhead at 100% of labor. (c) omits overhead entirely. (d) divides total by 1,000 instead of 500."
      },
      {
        module: 3,
        q: "Beginning work in process is $12,000, manufacturing costs added are $90,000, and ending work in process is $14,000. Cost of goods manufactured is:",
        choices: ["$88,000", "$102,000", "$116,000", "$92,000"],
        answer: 0,
        explanation: "Correct (a): 12,000 + 90,000 − 14,000 = $88,000. (b) adds ending WIP instead of subtracting it. (c) adds both beginning and ending WIP. (d) subtracts beginning and adds ending."
      },
      {
        module: 3,
        q: "Overhead applied is $95,000 and actual overhead is $90,000. Overhead is:",
        choices: ["Underapplied by $5,000", "Overapplied by $5,000", "Underapplied by $90,000", "Exactly applied"],
        answer: 1,
        explanation: "Correct (b): Applied $95,000 exceeds actual $90,000 by $5,000, so overhead is overapplied. (a) reverses the direction. (c) uses the actual total as the variance. (d) is false — the amounts differ."
      },
      {
        module: 4,
        q: "The inspection cost pool is $36,000 for 600 inspections. The activity rate is:",
        choices: ["$60 per inspection", "$36,000 per inspection", "$6 per inspection", "$600 per inspection"],
        answer: 0,
        explanation: "Correct (a): 36,000 ÷ 600 = $60 per inspection. (b) is the pool total. (c) divides the wrong way. (d) is the number of inspections."
      },
      {
        module: 4,
        q: "A product uses 20 setups at $200 each and 500 machine hours at $20 per hour. Its activity-based overhead is:",
        choices: ["$14,000", "$10,000", "$4,000", "$24,000"],
        answer: 0,
        explanation: "Correct (a): (20 × 200) + (500 × 20) = 4,000 + 10,000 = $14,000. (b) counts only machining. (c) counts only setups. (d) adds the two rates and multiplies by 100."
      },
      {
        module: 4,
        q: "Activity-based costing is most valuable when:",
        choices: ["Overhead is tiny and products are identical", "Overhead is large and products consume activities in very different proportions", "The company makes only one product", "All costs are direct"],
        answer: 1,
        explanation: "Correct (b): ABC's advantage is biggest when overhead is significant and products use activities differently — that is when a single rate misallocates the most. (a) is when ABC adds nothing. (c) needs no allocation at all. (d) leaves nothing to allocate."
      },
      {
        module: 5,
        q: "A product sells for $30, variable cost is $18, and fixed cost is $72,000. The break-even point in units is:",
        choices: ["2,400 units", "4,000 units", "6,000 units", "3,600 units"],
        answer: 2,
        explanation: "Correct (c): Contribution margin is 30 − 18 = $12; break-even = 72,000 ÷ 12 = 6,000 units. (a) divides fixed cost by the selling price. (b) divides fixed cost by $18. (d) divides fixed cost by $20."
      },
      {
        module: 5,
        q: "Using the same product (price $30, variable cost $18, fixed cost $72,000), the units needed to earn a $24,000 target profit are:",
        choices: ["6,000 units", "7,000 units", "8,000 units", "5,000 units"],
        answer: 2,
        explanation: "Correct (c): (72,000 + 24,000) ÷ 12 = 96,000 ÷ 12 = 8,000 units. (a) is the break-even point. (b) divides 84,000 by 12. (d) divides 60,000 by 12."
      },
      {
        module: 5,
        q: "Using the same product, if the price rises to $34 (variable cost still $18), the new break-even point is:",
        choices: ["6,000 units", "4,500 units", "5,000 units", "3,000 units"],
        answer: 1,
        explanation: "Correct (b): New contribution margin is 34 − 18 = $16; break-even = 72,000 ÷ 16 = 4,500 units. (a) is the old break-even. (c) divides 80,000 by 16. (d) divides 72,000 by 24."
      },
      {
        module: 5,
        q: "Using the same product at the original $30 price, operating income at 7,000 units is:",
        choices: ["$12,000", "$84,000", "$0", "$24,000"],
        answer: 0,
        explanation: "Correct (a): 7,000 × $12 contribution margin = $84,000, minus $72,000 fixed cost = $12,000. (b) is the total contribution margin before fixed cost. (c) is the break-even result. (d) is the target profit in the previous question."
      },
      {
        module: 6,
        q: "Quarter sales are 3,000 units, desired ending inventory is 700 units, and beginning inventory is 500 units. Production needed is:",
        choices: ["3,200 units", "2,800 units", "3,000 units", "4,200 units"],
        answer: 0,
        explanation: "Correct (a): 3,000 + 700 − 500 = 3,200 units. (b) subtracts ending and adds beginning. (c) ignores inventory. (d) adds both inventories."
      },
      {
        module: 6,
        q: "Unit cost is direct materials $5 + direct labor $7 + variable manufacturing overhead $3 = $15. Cost of goods sold for 3,000 units sold is:",
        choices: ["$45,000", "$15,000", "$48,000", "$35,000"],
        answer: 0,
        explanation: "Correct (a): 3,000 × $15 = $45,000. (b) is the unit cost alone. (c) uses a $16 unit cost. (d) would need a unit cost of $11.67, which matches none of the given components."
      },
      {
        module: 6,
        q: "Quarter sales are $60,000. 70% is collected in the quarter; beginning accounts receivable is $12,000. Cash collections are:",
        choices: ["$42,000", "$54,000", "$60,000", "$72,000"],
        answer: 1,
        explanation: "Correct (b): 70% × 60,000 = $42,000, plus $12,000 from prior receivables = $54,000. (a) counts only current-quarter collections. (c) assumes all sales are collected immediately. (d) adds the full current sales to beginning receivables."
      },
      {
        module: 7,
        q: "Standard materials are 4 pounds per unit at $3.00 per pound. Actual production is 2,000 units using 8,400 pounds at $3.10 per pound. The materials price variance is:",
        choices: ["$840 unfavorable", "$1,200 unfavorable", "$840 favorable", "$2,040 favorable"],
        answer: 0,
        explanation: "Correct (a): (3.10 − 3.00) × 8,400 = $840 unfavorable — the actual price exceeded standard. (b) is the quantity variance: (8,400 − 8,000) × $3.00 = $1,200 U. (c) reverses the direction. (d) is the total variance with the wrong direction — total is $2,040 unfavorable."
      },
      {
        module: 7,
        q: "Using the same data, the materials quantity variance is:",
        choices: ["$840 unfavorable", "$1,200 unfavorable", "$1,200 favorable", "$2,040 unfavorable"],
        answer: 1,
        explanation: "Correct (b): Standard quantity allowed is 2,000 × 4 = 8,000 lb; (8,400 − 8,000) × $3.00 = $1,200 unfavorable — more material was used than standard. (a) is the price variance. (c) reverses the direction. (d) is the total variance."
      },
      {
        module: 7,
        q: "Standard labor is 1 hour per unit at $12.00 per hour. Actual production is 1,000 units using 1,100 hours at $11.50 per hour. The labor rate variance is:",
        choices: ["$550 favorable", "$1,200 unfavorable", "$550 unfavorable", "$650 favorable"],
        answer: 0,
        explanation: "Correct (a): (11.50 − 12.00) × 1,100 = −$550, favorable — the actual rate was below standard. (b) is the efficiency variance: (1,100 − 1,000) × $12 = $1,200 U. (c) reverses the direction. (d) is the net variance with the wrong direction — net is $650 unfavorable."
      },
      {
        module: 7,
        q: "A favorable variance means:",
        choices: ["Actual cost was higher than standard", "Actual cost was lower than standard (or actual revenue higher than planned)", "The standard was set too low", "The variance is always good news"],
        answer: 1,
        explanation: "Correct (b): Favorable means the outcome beats the standard — lower cost or higher revenue. (a) describes an unfavorable variance. (c) is one possible cause, not the definition. (d) is false — a favorable quantity variance can mean skimping on materials and hurting quality."
      },
      {
        module: 8,
        q: "A division has sales $800,000, net operating income $96,000, and average operating assets $600,000. Its return on investment is:",
        choices: ["12%", "16%", "10%", "20%"],
        answer: 1,
        explanation: "Correct (b): 96,000 ÷ 600,000 = 16%. (a) is the profit margin (96,000 ÷ 800,000). (c) is an arbitrary round number. (d) is 96,000 ÷ 480,000, the wrong asset base."
      },
      {
        module: 8,
        q: "Using the same division, with a 10% minimum required rate of return, residual income is:",
        choices: ["$36,000", "$60,000", "$96,000", "$16,000"],
        answer: 0,
        explanation: "Correct (a): 96,000 − (0.10 × 600,000) = 96,000 − 60,000 = $36,000. (b) is the minimum required income alone. (c) is net operating income. (d) is 16% of $100,000 — meaningless here."
      },
      {
        module: 8,
        q: "A segment has sales $400,000, variable costs $240,000, and traceable fixed costs $90,000. Its segment margin is:",
        choices: ["$70,000", "$160,000", "$90,000", "$310,000"],
        answer: 0,
        explanation: "Correct (a): Contribution margin is 400,000 − 240,000 = $160,000; segment margin is 160,000 − 90,000 = $70,000. (b) is the contribution margin, before traceable fixed costs. (c) is the traceable fixed cost alone. (d) is sales minus traceable fixed costs only."
      },
      {
        module: 9,
        q: "Making a part in-house costs $10 per unit in variable costs plus $15,000 in avoidable fixed cost, for 4,000 units. Buying costs $12 per unit. The better choice and the saving are:",
        choices: ["Buy; save $7,000", "Make; save $7,000", "Buy; save $15,000", "Make; save $8,000"],
        answer: 0,
        explanation: "Correct (a): Making costs (10 × 4,000) + 15,000 = $55,000; buying costs 12 × 4,000 = $48,000; buying saves $7,000. (b) reverses the choice. (c) uses the avoidable fixed cost as the saving. (d) computes the per-unit difference (12 − 10 = $2) × 4,000 = $8,000 but forgets the avoidable fixed cost."
      },
      {
        module: 9,
        q: "A special order for 1,500 units offers $20 per unit. Variable cost is $16 per unit and the order needs $2,000 of special tooling. Idle capacity exists. The order's effect on profit is:",
        choices: ["+$4,000 — accept", "−$4,000 — reject", "+$6,000 — accept", "$0 — indifferent"],
        answer: 0,
        explanation: "Correct (a): Incremental profit = 1,500 × (20 − 16) − 2,000 = 6,000 − 2,000 = +$4,000, so accept. (b) reverses the sign. (c) ignores the tooling cost. (d) is wrong — the order adds $4,000."
      },
      {
        module: 9,
        q: "A segment has a contribution margin of $60,000 and traceable fixed costs of $40,000. Dropping the segment would change profit by:",
        choices: ["Increase profit by $20,000", "Decrease profit by $20,000", "Decrease profit by $60,000", "No change"],
        answer: 1,
        explanation: "Correct (b): Segment margin is 60,000 − 40,000 = $20,000; dropping it loses that $20,000 of profit (assuming the traceable costs disappear and common costs do not). (a) reverses the sign. (c) counts the whole contribution margin and ignores the traceable costs that would be saved. (d) ignores the segment margin entirely."
      },
      {
        module: 10,
        q: "A machine costs $60,000 and returns $18,000 per year for 4 years. At 10%, the present value annuity factor for 4 years is 3.1699. The net present value is:",
        choices: ["−$2,942", "+$2,942", "+$12,000", "−$12,000"],
        answer: 0,
        explanation: "Correct (a): PV of inflows = 18,000 × 3.1699 = $57,058; NPV = 57,058 − 60,000 = −$2,942, so reject. (b) reverses the sign. (c) is the undiscounted total minus cost (72,000 − 60,000) without discounting. (d) is the wrong magnitude."
      },
      {
        module: 10,
        q: "Using the same machine ($60,000 cost, $18,000 per year), the payback period is:",
        choices: ["3.33 years", "4.00 years", "2.50 years", "3.17 years"],
        answer: 0,
        explanation: "Correct (a): 60,000 ÷ 18,000 = 3.33 years. (b) is the project's life. (c) divides 45,000 by 18,000. (d) is the annuity factor, not a time period."
      },
      {
        module: 10,
        q: "A higher discount rate applied to a project's future cash flows will:",
        choices: ["Increase its net present value", "Decrease its net present value", "Leave its net present value unchanged", "Increase its payback period"],
        answer: 1,
        explanation: "Correct (b): A higher discount rate shrinks the present value of future inflows, so NPV falls. (a) reverses the effect. (c) is false — NPV is sensitive to the discount rate. (d) is false — payback ignores discounting entirely."
      },
      {
        module: 11,
        q: "Net income is $50,000, depreciation is $8,000, accounts receivable increased $4,000, inventory decreased $2,000, and accounts payable decreased $3,000. Operating cash flow is:",
        choices: ["$53,000", "$47,000", "$63,000", "$59,000"],
        answer: 0,
        explanation: "Correct (a): 50,000 + 8,000 − 4,000 + 2,000 − 3,000 = $53,000. (b) subtracts depreciation instead of adding it. (c) adds the A/R increase and subtracts the inventory decrease. (d) adds the A/P decrease instead of subtracting it."
      },
      {
        module: 11,
        q: "Operating cash flow is $53,000 and capital expenditures are $20,000. Free cash flow is:",
        choices: ["$33,000", "$73,000", "$53,000", "$20,000"],
        answer: 0,
        explanation: "Correct (a): 53,000 − 20,000 = $33,000. (b) adds instead of subtracting. (c) ignores capital expenditures. (d) is the capital expenditure alone."
      },
      {
        module: 11,
        q: "Cash dividends paid to shareholders are reported in which section of the statement of cash flows?",
        choices: ["Operating", "Investing", "Financing", "They are not reported"],
        answer: 2,
        explanation: "Correct (c): Dividends paid are a financing activity — a return of capital to owners. (a) is for day-to-day operations. (b) is for buying and selling long-term assets. (d) is false — dividends paid appear in the financing section."
      },
      {
        module: 12,
        q: "A product sells for $40, variable cost is $24, and fixed cost is $96,000. The break-even point in units is:",
        choices: ["4,000 units", "6,000 units", "2,400 units", "3,000 units"],
        answer: 1,
        explanation: "Correct (b): Contribution margin is 40 − 24 = $16; break-even = 96,000 ÷ 16 = 6,000 units. (a) divides fixed cost by the selling price. (c) divides fixed cost by $40. (d) divides fixed cost by $32."
      },
      {
        module: 12,
        q: "Standard materials are 2 pounds per unit at $5.00 per pound. Actual production is 5,000 units using 10,500 pounds at $5.20 per pound. The total materials variance is:",
        choices: ["$4,600 unfavorable", "$2,100 unfavorable", "$2,500 unfavorable", "$4,600 favorable"],
        answer: 0,
        explanation: "Correct (a): Price variance = (5.20 − 5.00) × 10,500 = $2,100 U; quantity variance = (10,500 − 10,000) × $5 = $2,500 U; total = $4,600 U. Check: actual 10,500 × 5.20 = $54,600 vs. standard 10,000 × 5 = $50,000. (b) is only the price variance. (c) is only the quantity variance. (d) reverses the direction."
      },
      {
        module: 12,
        q: "A division has net operating income $120,000 and average operating assets $800,000. Its return on investment is:",
        choices: ["10%", "12%", "15%", "20%"],
        answer: 2,
        explanation: "Correct (c): 120,000 ÷ 800,000 = 15%. (a) is the margin at $1,200,000 of sales. (b) is 120,000 ÷ 1,000,000. (d) is 120,000 ÷ 600,000."
      },
      {
        module: 12,
        q: "A manager must decide whether to accept a one-time order at a price below the normal selling price. The most relevant analysis is:",
        choices: ["Capital budgeting", "Differential (incremental) analysis of the special order", "The statement of cash flows", "Activity-based costing"],
        answer: 1,
        explanation: "Correct (b): A special-order decision compares incremental revenue to incremental cost, ignoring sunk and unavoidable fixed costs. (a) is for long-term investments. (c) reports past cash flows, not decision alternatives. (d) allocates overhead but does not frame the accept-or-reject comparison."
      },
      {
        module: 12,
        q: "Which statement best captures the purpose of managerial accounting?",
        choices: ["To report past results to outside investors", "To give managers the numbers they need to plan, control, and decide", "To compute the company's tax liability", "To audit the financial statements"],
        answer: 1,
        explanation: "Correct (b): Managerial accounting exists to support planning, control, and decision-making inside the company. (a) is financial accounting's purpose. (c) is tax accounting. (d) is the auditor's job."
      }
    ]
  }
};
