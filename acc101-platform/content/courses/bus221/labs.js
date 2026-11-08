// bus221 — Business labs.
// Lab 1 is a spreadsheet workpaper in the ACC 101 pattern: multi-column inputs {col 1 and 2},
// csvFilename + csv fields for CSV downloads.
// Lab 2 is a decision lab scored on single numeric inputs in column 1 (option numbers or computed values).
// Every lab opens with a "Step 0 — Read the case" framing row and its first scored row is the framing decision.
// Every lab ships with a worked-example track alongside the do-it-yourself track.
module.exports = [
  {
    id: "business-plan-financials",
    title: "Business Plan Financials — Startup Costs & Pro Forma",
    introHtml: "<p><strong>Step 0 — Read the case.</strong> Maya is opening the Maple Street Coffee Cart, a mobile coffee cart in Michigan. She has priced a cup at $5.00, each cup costs $2.00 in beans, milk, cups, and supplies, and her monthly fixed costs are $3,000 (wages $1,800, cart storage rent $600, insurance $150, marketing $250, miscellaneous $200). She expects to sell 1,500 cups a month, plus $300 a month of bean-bag and catering sales (which cost $120 a month in supplies). Your job: build her startup-cost total, check that her funding covers it, and build her Year 1 pro forma — the same workpaper that becomes the financial section of her business plan, and the same structure you will use for your own plan in the capstone.</p><p><strong>Worked example (study this first):</strong> Daisy's Donut Trailer, a second food cart. Startup costs: trailer $6,000, fryer $2,500, initial inventory $900, licenses $400, signage $500, website $300, working-capital reserve $2,000 — total $12,600. Funding: savings $7,000 + family loan $2,600 + bank loan $3,000 = $12,600. Monthly: 1,000 donuts at $3.00 = $3,000 revenue; variable cost $1.00 each = $1,000; gross profit $2,000; fixed costs $1,400; operating profit $600 a month; break-even = $1,400 ÷ ($3.00 − $1.00) = 700 donuts a month. Now do the same for Maya, below.</p>",
    taskHtml: "<p><strong>Step 0 — Read the case.</strong> Maya's coffee cart: price $5.00 a cup, variable cost $2.00 a cup, fixed costs $3,000 a month, expected volume 1,500 cups a month, plus $300 a month of bean and catering sales costing $120 a month. Startup items and funding are listed in the rows. A good workpaper proves three things: the startup total, the funding that covers it, and a pro forma that ties to break-even.</p><ol><li>Enter each startup cost in the Startup ($) column and total it.</li><li>Enter the monthly pro forma lines in the Monthly ($) column: revenue, variable costs, gross profit, fixed costs, operating profit, break-even cups, and annual operating profit.</li><li>Check: funding ($10,000 savings + $4,800 family loan + $5,000 bank loan) must equal the startup total, and break-even must be 1,000 cups.</li></ol>",
    headers: ["Item", "Startup ($)", "Monthly ($)"],
    rows: [
      { label: "FRAMING DECISION — What is this workpaper's first job? 1) Prove the startup total and that funding covers it, then build the pro forma 2) Design the cart's logo 3) Pick the cart's paint color 4) Write the owner's biography", cells: ["", ""], inputs: [
        { col: 1, key: "pf_framing", expected: 1, hint: "A financial workpaper proves numbers: the startup total, the funding that covers it, and the pro forma. The logo (2), the paint (3), and the biography (4) belong in other sections of the plan, not in the financial workpaper." } ] },
      { label: "Espresso cart (equipment)", cells: ["", ""], inputs: [
        { col: 1, key: "pf_cart", expected: 8500, hint: "The cart itself costs $8,500 — the largest single startup item." } ] },
      { label: "Espresso machine", cells: ["", ""], inputs: [
        { col: 1, key: "pf_machine", expected: 4200, hint: "The espresso machine costs $4,200." } ] },
      { label: "Initial inventory (beans, milk, cups, supplies)", cells: ["", ""], inputs: [
        { col: 1, key: "pf_inventory", expected: 1800, hint: "Initial inventory costs $1,800." } ] },
      { label: "Licenses & permits", cells: ["", ""], inputs: [
        { col: 1, key: "pf_licenses", expected: 650, hint: "Licenses and permits cost $650." } ] },
      { label: "Branding & signage", cells: ["", ""], inputs: [
        { col: 1, key: "pf_branding", expected: 900, hint: "Branding and signage cost $900." } ] },
      { label: "Website & POS setup", cells: ["", ""], inputs: [
        { col: 1, key: "pf_website", expected: 750, hint: "Website and point-of-sale setup cost $750." } ] },
      { label: "Working capital reserve", cells: ["", ""], inputs: [
        { col: 1, key: "pf_reserve", expected: 3000, hint: "The working-capital reserve is $3,000 — one month of fixed costs, held as a cushion." } ] },
      { label: "TOTAL startup costs", cells: ["", ""], inputs: [
        { col: 1, key: "pf_total_startup", expected: 19800, hint: "Add them up: 8,500 + 4,200 + 1,800 + 650 + 900 + 750 + 3,000 = $19,800." } ] },
      { label: "Funding check — owner savings", cells: ["", ""], inputs: [
        { col: 1, key: "pf_savings", expected: 10000, hint: "Maya puts in $10,000 of her own savings." } ] },
      { label: "Funding check — family loan", cells: ["", ""], inputs: [
        { col: 1, key: "pf_family", expected: 4800, hint: "The family loan is $4,800, repaid $200 a month for 24 months at 0%." } ] },
      { label: "Funding check — bank loan", cells: ["", ""], inputs: [
        { col: 1, key: "pf_bank", expected: 5000, hint: "The bank loan is $5,000. Check: 10,000 + 4,800 + 5,000 = 19,800, exactly the startup total." } ] },
      { label: "Monthly revenue (1,500 cups × $5.00, plus $300 extras)", cells: ["", ""], inputs: [
        { col: 2, key: "pf_revenue", expected: 7800, hint: "1,500 × $5.00 = $7,500, plus $300 of bean and catering sales = $7,800." } ] },
      { label: "Monthly variable costs (1,500 cups × $2.00, plus $120 extras)", cells: ["", ""], inputs: [
        { col: 2, key: "pf_variable", expected: 3120, hint: "1,500 × $2.00 = $3,000, plus $120 of bean and catering supplies = $3,120." } ] },
      { label: "Monthly gross profit", cells: ["", ""], inputs: [
        { col: 2, key: "pf_gross", expected: 4680, hint: "Gross profit = revenue − variable costs = $7,800 − $3,120." } ] },
      { label: "Monthly fixed costs", cells: ["", ""], inputs: [
        { col: 2, key: "pf_fixed", expected: 3000, hint: "Fixed costs are $3,000 a month: wages $1,800 + rent $600 + insurance $150 + marketing $250 + miscellaneous $200." } ] },
      { label: "Monthly operating profit", cells: ["", ""], inputs: [
        { col: 2, key: "pf_profit", expected: 1680, hint: "Operating profit = gross profit − fixed costs = $4,680 − $3,000." } ] },
      { label: "Break-even cups per month", cells: ["", ""], inputs: [
        { col: 2, key: "pf_breakeven", expected: 1000, hint: "Contribution per cup is $5.00 − $2.00 = $3.00. Break-even = $3,000 ÷ $3.00 = 1,000 cups." } ] },
      { label: "Annual operating profit (monthly profit × 12)", cells: ["", ""], inputs: [
        { col: 2, key: "pf_annual", expected: 20160, hint: "Annual operating profit = $1,680 × 12 = $20,160." } ] }
    ],
    passing: 70,
    csvFilename: "business-plan-financials.csv",
    csv: "Item,Startup,Monthly\nEspresso cart (equipment),,\nEspresso machine,,\nInitial inventory (beans, milk, cups, supplies),,\nLicenses & permits,,\nBranding & signage,,\nWebsite & POS setup,,\nWorking capital reserve,,\nTOTAL startup costs,,\nFunding check — owner savings,,\nFunding check — family loan,,\nFunding check — bank loan,,\nMonthly revenue (1500 cups x $5.00 plus $300 extras),,\nMonthly variable costs (1500 cups x $2.00 plus $120 extras),,\nMonthly gross profit,,\nMonthly fixed costs,,\nMonthly operating profit,,\nBreak-even cups per month,,\nAnnual operating profit (monthly profit x 12),,"
  },
  {
    id: "pitch-deck-funding-ask",
    title: "Pitch Deck & Funding Ask",
    introHtml: "<p><strong>Step 0 — Read the case.</strong> Maya is pitching her coffee cart to a bank loan officer for a $5,000 loan — one piece of her $19,800 startup funding (the rest is $10,000 of her savings and a $4,800 family loan). She has 10 slides and 20 minutes, following the 10/20/30 rule: 10 slides, 20 minutes, 30-point font. The deck order is: 1 Problem, 2 Solution, 3 Market, 4 Business model, 5 Marketing & sales, 6 Team, 7 Financials, 8 The ask. Her numbers: price $5.00, variable cost $2.00, contribution $3.00, fixed costs $3,000 a month, break-even 1,000 cups, monthly operating profit $1,500 from cups at 1,500 cups (plus $180 from extras), family loan $4,800 repaid $200 a month for 24 months at 0%. A good pitch proves the ask is small, the repayment is covered, and the owner has the most at risk.</p><p><strong>Worked example (study this first):</strong> Daisy's Donut Trailer pitches a bank for a $3,000 loan toward $12,600 of startup costs (savings $7,000, family loan $2,600, bank loan $3,000). Her deck follows the same 8-slide order. Her numbers: price $3.00, variable cost $1.00, contribution $2.00, fixed costs $1,400, break-even 700 donuts, monthly profit $600 at 1,000 donuts. Her ask slide says: '$3,000 loan, repaid from $600 monthly profit, owner has $7,000 at risk.' The officer can check every number on the slide against her workpaper. Now build Maya's pitch the same way.</p>",
    taskHtml: "<p><strong>Step 0 — Read the case.</strong> Maya pitches a bank for a $5,000 loan toward $19,800 of startup costs. Deck order: 1 Problem, 2 Solution, 3 Market, 4 Business model, 5 Marketing &amp; sales, 6 Team, 7 Financials, 8 The ask. The pitch rule is 10 slides, 20 minutes, 30-point font.</p><p><strong>The correct deck order (for the order questions):</strong> 1 Problem, 2 Solution, 3 Market, 4 Business model, 5 Marketing &amp; sales, 6 Team, 7 Financials, 8 The ask. For each row, enter the option number, the slide number, or the computed value asked for.</p>",
    headers: ["Decision point", "Your call"],
    rows: [
      {
        label: "FRAMING DECISION — What is the funding ask in Maya's pitch to the bank? 1) A $5,000 bank loan toward the $19,800 startup cost 2) The full $19,800 startup cost from the bank 3) $100,000 of venture capital 4) No ask — she will figure it out later",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_framing", expected: 1, hint: "The pitch asks the bank for the $5,000 loan — the one piece the bank provides. The other $14,800 is already committed from savings and family, which is exactly what makes the ask credible. Asking the bank for the full $19,800 (2) ignores her own money, venture capital (3) is the wrong source for a cart, and no ask (4) is not a pitch." }
        ]
      },
      {
        label: "ORDER — 'Market: 900 interested visitors a month, plus weekday office stops.' Which slide number is this?",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_ord_market", expected: 3, hint: "Deck order: 1 Problem, 2 Solution, 3 Market, 4 Business model, 5 Marketing & sales, 6 Team, 7 Financials, 8 The ask. Market is slide 3." }
        ]
      },
      {
        label: "ORDER — 'Team: Maya, barista-trained owner-operator, plus a trained Saturday helper.' Which slide number is this?",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_ord_team", expected: 6, hint: "Deck order: 1 Problem, 2 Solution, 3 Market, 4 Business model, 5 Marketing & sales, 6 Team, 7 Financials, 8 The ask. Team is slide 6." }
        ]
      },
      {
        label: "ORDER — 'Financials: $7,800 monthly revenue, $1,680 monthly operating profit, break-even 1,000 cups.' Which slide number is this?",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_ord_financials", expected: 7, hint: "Deck order: 1 Problem, 2 Solution, 3 Market, 4 Business model, 5 Marketing & sales, 6 Team, 7 Financials, 8 The ask. Financials is slide 7." }
        ]
      },
      {
        label: "ORDER — 'The ask: $5,000 loan, repaid from operating profit over 24 months.' Which slide number is this?",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_ord_ask", expected: 8, hint: "Deck order: 1 Problem, 2 Solution, 3 Market, 4 Business model, 5 Marketing & sales, 6 Team, 7 Financials, 8 The ask. The ask is the last slide, 8 — never the first." }
        ]
      },
      {
        label: "COMPUTED — How much is Maya asking the bank for? (Enter the dollar amount.)",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_ask_amount", expected: 5000, hint: "The bank loan is $5,000 of the $19,800 startup cost; the other $14,800 comes from savings ($10,000) and family ($4,800)." }
        ]
      },
      {
        label: "COMPUTED — What is Maya's monthly break-even in cups? (Enter the number of cups.)",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_breakeven", expected: 1000, hint: "Contribution is $5.00 − $2.00 = $3.00 per cup. Break-even = $3,000 fixed costs ÷ $3.00 = 1,000 cups a month." }
        ]
      },
      {
        label: "COMPUTED — The family loan is $4,800 at 0% over 24 months. What is the monthly repayment? (Enter the dollar amount.)",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_family_payment", expected: 200, hint: "At 0% interest, the payment is principal ÷ months: $4,800 ÷ 24 = $200 a month." }
        ]
      },
      {
        label: "COMPUTED — Maya's own savings are $10,000 of the $19,800 startup cost. What percentage is that, rounded to the nearest whole percent? (Enter the number.)",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_equity_pct", expected: 51, hint: "$10,000 ÷ $19,800 = 0.505, or 50.5%, which rounds to 51%. The officer sees the owner has most of the money at risk." }
        ]
      },
      {
        label: "COMPUTED — Suppose an investor offered $10,000 for 20% of the cart. What would the post-money valuation be? (Enter the dollar amount.)",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_postmoney", expected: 50000, hint: "Post-money valuation = investment ÷ share = $10,000 ÷ 0.20 = $50,000. The pre-money value would be $50,000 − $10,000 = $40,000." }
        ]
      },
      {
        label: "COMPUTED — With that same offer, what would the pre-money valuation be? (Enter the dollar amount.)",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_premoney", expected: 40000, hint: "Pre-money = post-money − investment = $50,000 − $10,000 = $40,000." }
        ]
      },
      {
        label: "COMPUTED — Maya spends $600 on marketing and gains 120 new customers. What is her CAC? (Enter the dollar amount.)",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_cac", expected: 5, hint: "CAC = marketing spend ÷ new customers = $600 ÷ 120 = $5.00 per customer." }
        ]
      },
      {
        label: "COMPUTED — A regular buys 4 cups a month at $3.00 contribution and stays 12 months. What is the LTV? (Enter the dollar amount.)",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_ltv", expected: 144, hint: "LTV = 4 cups × $3.00 × 12 months = $144. Against a $5 CAC, the ratio is 28.8 to 1." }
        ]
      },
      {
        label: "COMPUTED — Under the 10/20/30 pitch rule, how many slides should the deck have? (Enter the number.)",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_slides", expected: 10, hint: "The 10/20/30 rule: 10 slides, 20 minutes, 30-point font." }
        ]
      },
      {
        label: "COMPUTED — Under the 10/20/30 pitch rule, how many minutes should the pitch last? (Enter the number.)",
        cells: [""],
        inputs: [
          { col: 1, key: "pd_minutes", expected: 20, hint: "The 10/20/30 rule: 10 slides, 20 minutes, 30-point font — leaving time for questions." }
        ]
      }
    ],
    passing: 70
  }
];
