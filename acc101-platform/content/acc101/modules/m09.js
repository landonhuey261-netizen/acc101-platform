module.exports = {
  number: 9,
  slug: "long-term-assets",
  title: "Long-Term Assets",
  estTime: "3–4 hours",
  objectives: [
    "Determine the capitalized cost of land, land improvements, buildings, and equipment.",
    "Compute depreciation using the straight-line method.",
    "Compute depreciation using the units-of-production method.",
    "Compute depreciation using the double-declining-balance method and compare all three methods on the same asset.",
    "Account for partial-year depreciation and for revised depreciation estimates.",
    "Journalize the disposal of plant assets, computing gain or loss on disposal.",
    "Account for intangible assets (amortization) and natural resources (depletion)."
  ],
  sections: [
    {
      heading: "What Goes Into the Cost of a Plant Asset",
      html: `<p><strong>Plant assets</strong> (property, plant, and equipment) are tangible, long-lived assets used in operations — land, buildings, machinery, vehicles, furniture. The accounting rule is the <strong>historical cost principle</strong>: record the asset at its <strong>cost</strong>, defined as the purchase price plus <em>all expenditures necessary to acquire the asset and prepare it for its intended use</em>. Ordinary repairs later are expenses; only costs that get the asset ready for service are capitalized.</p>
<p>Each asset class has its own cost recipe. <strong>Land</strong> cost = cash price + closing costs (title, attorney fees) + accrued property taxes assumed + survey fees + cost of razing an old building (less any salvage recovered) − proceeds from selling salvaged materials. <strong>Land improvements</strong> (driveways, parking lots, fences, landscaping) are recorded separately because, unlike land, they <em>are</em> depreciated. <strong>Buildings</strong> cost = purchase price (or construction costs: materials, labor, architect fees, permits) + repairs/renovations needed before occupancy. <strong>Equipment</strong> cost = cash price + sales tax + freight + installation + testing costs − cash discounts taken.</p>
<p><strong>Worked example.</strong> On January 2, Delta Manufacturing buys a machine with a cash price of $80,000. Additional costs: sales tax $6,400, freight $1,200, installation and testing $2,400. The company takes no discounts. Capitalized cost = 80,000 + 6,400 + 1,200 + 2,400 = <strong>$90,000</strong>:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Jan 2</td><td>Equipment</td><td class="num">90,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">90,000</td></tr>
</tbody></table>
<p>A land example: purchase price $200,000 + closing costs $8,000 + survey $2,000 + razing an old warehouse $12,000 − $3,000 salvage sold from the razed building = 200,000 + 8,000 + 2,000 + 12,000 − 3,000 = <strong>$219,000</strong> recorded to Land. Land is <em>never depreciated</em> — it does not wear out — but land improvements are.</p>
<div class="callout"><strong>Key idea:</strong> Cost means "everything spent to get the asset ready to work," not just the sticker price. The $90,000 machine above will be the asset we depreciate under all three methods in the next sections, so every number stays consistent.</div>`
    },
    {
      heading: "Depreciation Concepts and the Straight-Line Method",
      html: `<p><strong>Depreciation</strong> is the systematic allocation of a plant asset's <em>depreciable cost</em> to expense over its <strong>useful life</strong>. Three terms matter: <strong>cost</strong> ($90,000 for our machine), <strong>residual (salvage) value</strong> — the estimated value at the end of its life ($10,000) — and <strong>useful life</strong> (5 years). Depreciable cost = cost − residual value = 90,000 − 10,000 = <strong>$80,000</strong>. Depreciation is an allocation process, not a valuation: book value rarely equals market value.</p>
<p><strong>Straight-line (SL)</strong> spreads depreciable cost evenly over useful life:</p>
<div class="formula">Annual SL depreciation = (Cost − Residual value) ÷ Useful life</div>
<p><strong>Worked example.</strong> Annual SL = (90,000 − 10,000) ÷ 5 = 80,000 ÷ 5 = <strong>$16,000 per year</strong> (an effective rate of 1/5 = 20% of depreciable cost). The annual entry:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Depreciation Expense</td><td class="num">16,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Accumulated Depreciation — Equipment</td><td class="num"></td><td class="num">16,000</td></tr>
</tbody></table>
<table class="jentry">
<thead><tr><th>Year</th><th>Depreciation Expense</th><th>Accumulated Depreciation</th><th>Book Value (End)</th></tr></thead>
<tbody>
<tr><td>At purchase</td><td class="num">—</td><td class="num">—</td><td class="num">90,000</td></tr>
<tr><td>1</td><td class="num">16,000</td><td class="num">16,000</td><td class="num">74,000</td></tr>
<tr><td>2</td><td class="num">16,000</td><td class="num">32,000</td><td class="num">58,000</td></tr>
<tr><td>3</td><td class="num">16,000</td><td class="num">48,000</td><td class="num">42,000</td></tr>
<tr><td>4</td><td class="num">16,000</td><td class="num">64,000</td><td class="num">26,000</td></tr>
<tr><td>5</td><td class="num">16,000</td><td class="num">80,000</td><td class="num">10,000</td></tr>
</tbody></table>
<p>Check: total depreciation 16,000 × 5 = $80,000 = depreciable cost, and ending book value $10,000 = residual value. <strong>Accumulated Depreciation</strong> is a contra-asset: it grows each year and is subtracted from Equipment on the balance sheet (book value = cost − accumulated depreciation).</p>`
    },
    {
      heading: "Units-of-Production Method",
      html: `<p><strong>Units-of-production (UOP)</strong> ties depreciation to actual use rather than time: an asset that runs twice as many hours bears twice the depreciation. It suits assets whose wear depends on output — delivery trucks (miles), mining equipment (tons), printing presses (impressions).</p>
<div class="formula">Depreciation per unit = (Cost − Residual value) ÷ Total estimated units of activity<br>Period depreciation = Depreciation per unit × Actual units this period</div>
<p><strong>Worked example — same machine.</strong> Total estimated activity = 160,000 units over its life. Depreciation per unit = (90,000 − 10,000) ÷ 160,000 = 80,000 ÷ 160,000 = <strong>$0.50 per unit</strong>. Actual production: Year 1: 36,000 units; Year 2: 40,000; Year 3: 32,000; Year 4: 30,000; Year 5: 22,000 (total 160,000).</p>
<table class="jentry">
<thead><tr><th>Year</th><th>Units Produced</th><th>Depreciation (× $0.50)</th><th>Accumulated Depreciation</th><th>Book Value (End)</th></tr></thead>
<tbody>
<tr><td>1</td><td class="num">36,000</td><td class="num">18,000</td><td class="num">18,000</td><td class="num">72,000</td></tr>
<tr><td>2</td><td class="num">40,000</td><td class="num">20,000</td><td class="num">38,000</td><td class="num">52,000</td></tr>
<tr><td>3</td><td class="num">32,000</td><td class="num">16,000</td><td class="num">54,000</td><td class="num">36,000</td></tr>
<tr><td>4</td><td class="num">30,000</td><td class="num">15,000</td><td class="num">69,000</td><td class="num">21,000</td></tr>
<tr><td>5</td><td class="num">22,000</td><td class="num">11,000</td><td class="num">80,000</td><td class="num">10,000</td></tr>
</tbody></table>
<p>Check: 36,000 + 40,000 + 32,000 + 30,000 + 22,000 = 160,000 units; depreciation 18,000 + 20,000 + 16,000 + 15,000 + 11,000 = $80,000 total, and ending book value is the $10,000 residual. UOP matches expense to usage beautifully — but it requires reliable unit tracking, and idle years produce zero depreciation even though time passes.</p>
<div class="callout"><strong>Key idea:</strong> Over the full life, all methods depreciate exactly $80,000 (cost minus residual). The methods differ only in <em>timing</em> — which years bear how much expense.</div>`
    },
    {
      heading: "Double-Declining-Balance Method",
      html: `<p><strong>Double-declining-balance (DDB)</strong> is an <strong>accelerated</strong> method: it records more depreciation early in the asset's life and less later, reflecting that many assets are most productive (and lose most value) when new. The rate is double the straight-line rate, applied to the <em>beginning book value</em> each year — residual value is ignored in the rate calculation but acts as a floor: book value may never drop below residual.</p>
<div class="formula">DDB rate = 2 × (1 ÷ Useful life)<br>Period depreciation = DDB rate × Book value at beginning of period</div>
<p><strong>Worked example — same machine.</strong> DDB rate = 2 × (1 ÷ 5) = <strong>40%</strong>.</p>
<table class="jentry">
<thead><tr><th>Year</th><th>Beginning Book Value</th><th>Depreciation (× 40%)</th><th>Accumulated Depreciation</th><th>Ending Book Value</th></tr></thead>
<tbody>
<tr><td>1</td><td class="num">90,000</td><td class="num">36,000</td><td class="num">36,000</td><td class="num">54,000</td></tr>
<tr><td>2</td><td class="num">54,000</td><td class="num">21,600</td><td class="num">57,600</td><td class="num">32,400</td></tr>
<tr><td>3</td><td class="num">32,400</td><td class="num">12,960</td><td class="num">70,560</td><td class="num">19,440</td></tr>
<tr><td>4</td><td class="num">19,440</td><td class="num">7,776</td><td class="num">78,336</td><td class="num">11,664</td></tr>
<tr><td>5</td><td class="num">11,664</td><td class="num">1,664*</td><td class="num">80,000</td><td class="num">10,000</td></tr>
</tbody></table>
<p>Verify each line: 90,000 × 40% = 36,000 (BV 54,000); 54,000 × 40% = 21,600 (BV 32,400); 32,400 × 40% = 12,960 (BV 19,440); 19,440 × 40% = 7,776 (BV 11,664). In Year 5 the formula would give 11,664 × 40% = 4,665.60, which would drive book value to $6,998.40 — <em>below</em> the $10,000 residual. So Year 5 is a <strong>plug</strong>: 11,664 − 10,000 = <strong>$1,664</strong>, landing exactly on residual. Total depreciation = 80,000 again.</p>
<p><strong>Comparison of the three methods (annual expense):</strong> SL: 16,000 / 16,000 / 16,000 / 16,000 / 16,000. UOP: 18,000 / 20,000 / 16,000 / 15,000 / 11,000. DDB: 36,000 / 21,600 / 12,960 / 7,776 / 1,664. DDB front-loads expense (lower early net income, lower early taxes under tax rules); SL is simplest and most common for financial reporting; UOP best matches expense to actual wear.</p>
<div class="mistake"><strong>Common mistake:</strong> Applying the DDB rate to <em>depreciable cost</em> ($80,000) or subtracting residual before multiplying. DDB always multiplies the rate by the <strong>beginning book value</strong>; residual value only matters as the floor that book value cannot cross (hence the Year 5 plug).</div>`
    },
    {
      heading: "Partial-Year Depreciation and Revising Estimates",
      html: `<p><strong>Partial-year depreciation.</strong> Assets are rarely bought on January 1. Depreciation is prorated for the months in service. Suppose Delta bought the machine on <strong>October 1</strong> instead of January 2 and uses straight-line ($16,000/year). Year 1 covers October–December = 3 months: 16,000 × 3/12 = <strong>$4,000</strong>. Year 2 through Year 5 get full $16,000 each (4 × 16,000 = 64,000), and the final partial year (January–September of Year 6) gets 16,000 × 9/12 = <strong>$12,000</strong>. Check: 4,000 + 64,000 + 12,000 = $80,000 total. (Many textbooks simplify with conventions like the half-year rule; prorating by month is the concept that matters.)</p>
<p><strong>Revising estimates.</strong> Useful life and residual value are <em>estimates</em>, and new information can change them. Accounting handles this <strong>prospectively</strong> — spread the remaining depreciable book value over the remaining life; never go back and restate prior years.</p>
<p><strong>Worked example.</strong> After 2 years of straight-line depreciation, the machine's book value is $58,000 (90,000 − 32,000). Management now estimates a $8,000 residual value and 6 more years of useful life (instead of 3). Revised annual depreciation = (Book value − New residual) ÷ Remaining life = (58,000 − 8,000) ÷ 6 = 50,000 ÷ 6 = <strong>$8,333.33 per year</strong>. The company records $8,333 per year (with the sixth year at $8,335 so the book value lands exactly on $8,000: 8,333 × 5 + 8,335 = 50,000). Prior years' $16,000 charges are left untouched.</p>
<div class="callout"><strong>Key idea:</strong> A change in estimate is <em>not</em> an error correction — you do not restate the past. You take the current book value and spread what is left over the new remaining life.</div>`
    },
    {
      heading: "Disposals: Computing Gain or Loss (Worked)",
      html: `<p>When a plant asset is sold, retired, or traded in, the company removes its cost and accumulated depreciation from the books and compares the cash (or value) received to the asset's <strong>book value</strong> at disposal. If updated depreciation through the disposal date has not been recorded, record it first.</p>
<div class="formula">Gain (Loss) on disposal = Cash received − Book value at disposal<br>Book value = Cost − Accumulated depreciation</div>
<p><strong>Worked example — gain.</strong> At the end of Year 3, Delta sells the machine (straight-line: cost $90,000, accumulated depreciation $48,000, book value $42,000) for <strong>$46,000 cash</strong>. Gain = 46,000 − 42,000 = <strong>$4,000</strong>:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Cash</td><td class="num">46,000</td><td class="num"></td></tr>
<tr><td></td><td>Accumulated Depreciation — Equipment</td><td class="num">48,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Equipment</td><td class="num"></td><td class="num">90,000</td></tr>
<tr><td></td><td class="indent">Gain on Disposal of Plant Assets</td><td class="num"></td><td class="num">4,000</td></tr>
</tbody></table>
<p>Check: debits 46,000 + 48,000 = 94,000; credits 90,000 + 4,000 = 94,000. The gain is reported in the "Other revenues and gains" section of the income statement.</p>
<p><strong>Worked example — loss.</strong> Same facts, but the machine sells for <strong>$38,000 cash</strong>. Loss = 42,000 − 38,000 = <strong>$4,000</strong>:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Cash</td><td class="num">38,000</td><td class="num"></td></tr>
<tr><td></td><td>Accumulated Depreciation — Equipment</td><td class="num">48,000</td><td class="num"></td></tr>
<tr><td></td><td>Loss on Disposal of Plant Assets</td><td class="num">4,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Equipment</td><td class="num"></td><td class="num">90,000</td></tr>
</tbody></table>
<p>Check: debits 38,000 + 48,000 + 4,000 = 90,000 = credit. If an asset is simply <strong>retired</strong> with no proceeds, the entry removes cost and accumulated depreciation and debits Loss for the full book value. Gains and losses on disposal are <em>not</em> operating items — they reflect that past depreciation estimates differed from reality.</p>`
    },
    {
      heading: "Intangible Assets and Natural Resources",
      html: `<p><strong>Intangible assets</strong> are long-lived assets without physical substance that give a company exclusive rights: <strong>patents</strong> (exclusive right to an invention, 20 years), <strong>copyrights</strong>, <strong>trademarks/trade names</strong>, <strong>franchises/licenses</strong>, and <strong>goodwill</strong> (the premium paid over fair value when acquiring another company).</p>
<p>Intangibles with a <strong>definite useful life</strong> are <strong>amortized</strong> to expense over that life — almost always straight-line, and usually credited directly to the asset account (no contra-asset is required). Example: Delta buys a patent for $60,000 with a 10-year useful life. Annual amortization = 60,000 ÷ 10 = <strong>$6,000</strong>:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Amortization Expense</td><td class="num">6,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Patent</td><td class="num"></td><td class="num">6,000</td></tr>
</tbody></table>
<p>Intangibles with an <strong>indefinite life</strong> (most trademarks) and <strong>goodwill</strong> are <em>not</em> amortized; instead they are tested annually for <strong>impairment</strong> (written down only if their value has permanently fallen). Research and development costs are expensed as incurred, not capitalized.</p>
<p><strong>Natural resources and depletion.</strong> Wasting assets such as oil reserves, mineral deposits, and timber tracts are used up as they are extracted. Their cost is allocated through <strong>depletion</strong>, computed like units-of-production: depletion per unit = (cost − residual value) ÷ estimated total units, times units extracted. Example: Delta buys a mineral deposit for $2,400,000 with an estimated 600,000 extractable tons and no residual value. Depletion rate = 2,400,000 ÷ 600,000 = <strong>$4 per ton</strong>. In a year it extracts 95,000 tons: depletion = 95,000 × 4 = <strong>$380,000</strong>:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec 31</td><td>Inventory (Minerals)</td><td class="num">380,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Accumulated Depletion</td><td class="num"></td><td class="num">380,000</td></tr>
</tbody></table>
<p>Depletion is debited to Inventory (not expense) because the extracted minerals are a product to be sold; it becomes Cost of Goods Sold when the minerals sell.</p>
<div class="callout"><strong>Module recap:</strong> Capitalize everything needed to get a plant asset ready for use. Depreciate depreciable cost (cost − residual) over useful life — straight-line (even), units-of-production (usage-based), or double-declining-balance (accelerated, with a residual-value floor). Prorate partial years, revise estimates prospectively, compute disposal gain/loss as proceeds minus book value, amortize definite-life intangibles, and deplete natural resources as extracted.</div>`
    }
  ],
  keyTerms: [
    { term: "Plant assets", def: "Tangible, long-lived assets used in business operations, such as land, buildings, machinery, and equipment; also called property, plant, and equipment (PP&E)." },
    { term: "Historical cost principle", def: "The rule that assets are recorded at their cost — the purchase price plus all expenditures necessary to acquire the asset and prepare it for its intended use." },
    { term: "Land improvements", def: "Attachments to land with limited lives, such as driveways, parking lots, fences, and landscaping; recorded separately from land and depreciated." },
    { term: "Depreciation", def: "The systematic allocation of a plant asset's depreciable cost to expense over its useful life; an allocation process, not a valuation of market worth." },
    { term: "Residual (salvage) value", def: "The estimated value of a plant asset at the end of its useful life; subtracted from cost to get depreciable cost." },
    { term: "Useful life", def: "The estimated period of time (or total activity) over which a plant asset is expected to be used by the company." },
    { term: "Depreciable cost", def: "Cost minus residual value — the total amount to be allocated to depreciation expense over the asset's life." },
    { term: "Book value", def: "Cost minus accumulated depreciation; the asset's carrying amount on the balance sheet." },
    { term: "Accumulated Depreciation", def: "A contra-asset account showing the total depreciation recorded to date on a plant asset; deducted from the asset's cost on the balance sheet." },
    { term: "Straight-line depreciation", def: "A method allocating an equal amount of depreciable cost to each period of useful life: (Cost − Residual) ÷ Useful life." },
    { term: "Units-of-production depreciation", def: "A method allocating depreciation based on actual use: (Cost − Residual) ÷ Total estimated units gives a per-unit rate, multiplied by actual units each period." },
    { term: "Double-declining-balance (DDB) depreciation", def: "An accelerated method applying double the straight-line rate to the beginning book value each period; book value may never fall below residual value." },
    { term: "Revised estimate", def: "A change in an asset's estimated useful life or residual value, accounted for prospectively: the remaining depreciable book value is spread over the remaining life with no restatement of prior periods." },
    { term: "Gain or loss on disposal", def: "Cash (or value) received minus book value at the date of disposal; gains are reported as other revenues, losses as other expenses." },
    { term: "Intangible assets", def: "Long-lived assets without physical substance that provide exclusive rights, such as patents, copyrights, trademarks, franchises, and goodwill." },
    { term: "Amortization", def: "The allocation of an intangible asset's cost to expense over its useful life (for definite-life intangibles), typically straight-line and credited directly to the asset." },
    { term: "Goodwill", def: "The excess of the purchase price of an acquired company over the fair value of its identifiable net assets; not amortized, but tested annually for impairment." },
    { term: "Depletion", def: "The allocation of a natural resource's cost as it is extracted, computed like units-of-production: cost per unit × units extracted, debited to Inventory." }
  ],
  video: {
    title: "Khan Academy — Accounting and financial statements (depreciation videos)",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLSQl0a2vh4HAHUM1CLDf4YnxpX-WmxKZi",
    note: "Watch the depreciation videos in this playlist: they explain why depreciation exists, how straight-line works, and how depreciation affects the financial statements — a perfect visual companion to the three methods worked above.",
    more: [
      { title: "Accounting Stuff channel — bite-size topic refreshers", url: "https://www.youtube.com/@AccountingStuff" }
    ]
  },
  assignment: [
    {
      prompt: `<p><strong>Problem 1 (multiple choice).</strong> Harbor Marine buys equipment with an invoice price of $50,000. Additional costs: sales tax $4,000, freight $1,500, installation $2,500, and a one-year insurance policy $1,200. The capitalized cost of the equipment is:</p><ol type="a"><li>$59,200</li><li>$58,000</li><li>$50,000</li><li>$56,500</li></ol>`,
      solution: `<p><strong>Answer: (b) $58,000.</strong></p><p>Step 1 — Capitalize all costs necessary to acquire the asset and prepare it for use: invoice 50,000 + sales tax 4,000 + freight 1,500 + installation 2,500 = <strong>$58,000</strong>. Step 2 — The $1,200 insurance policy covers future operations; it is a prepaid expense (then insurance expense), not part of the equipment's cost. Step 3 — (a) wrongly includes insurance; (c) ignores the necessary additional costs; (d) is an arithmetic error (it omits installation). Therefore (b) is correct.</p>`
    },
    {
      prompt: `<p><strong>Problem 2 (computational).</strong> Delta Manufacturing buys land for a new warehouse: purchase price $150,000, closing costs $6,000, survey fees $1,500, cost of razing an old shed $9,000, and proceeds of $2,000 from selling salvaged lumber. Compute the cost recorded to the Land account and state whether the land will be depreciated.</p>`,
      solution: `<p><strong>Answer: $164,500; land is never depreciated.</strong></p><p>Step 1 — Land cost = 150,000 + 6,000 + 1,500 + 9,000 − 2,000 = <strong>$164,500</strong>. Step 2 — Salvage proceeds reduce the razing cost because they offset what was spent clearing the land. Step 3 — Land has an unlimited life and does not wear out, so it is <em>never</em> depreciated (only land <em>improvements</em> like the warehouse parking lot are).</p>`
    },
    {
      prompt: `<p><strong>Problem 3 (computational).</strong> A delivery van costs $48,000, has a $6,000 residual value, and a 7-year useful life. Using straight-line depreciation, (a) compute annual depreciation and (b) compute book value at the end of Year 3.</p>`,
      solution: `<p><strong>Answer: (a) $6,000 per year. (b) $30,000.</strong></p><p>Step 1 — Depreciable cost = 48,000 − 6,000 = $42,000. Step 2 — Annual SL = 42,000 ÷ 7 = <strong>$6,000</strong>. Step 3 — Accumulated depreciation after 3 years = 6,000 × 3 = $18,000. Step 4 — Book value = 48,000 − 18,000 = <strong>$30,000</strong>. Step 5 — Sanity check: after 7 years, accumulated depreciation = $42,000 and book value = $6,000 = residual value.</p>`
    },
    {
      prompt: `<p><strong>Problem 4 (computational).</strong> A mining truck costs $120,000 with a $20,000 residual value and an estimated life of 500,000 miles. Using units-of-production, compute depreciation for a year in which the truck is driven 85,000 miles.</p>`,
      solution: `<p><strong>Answer: $17,000.</strong></p><p>Step 1 — Depreciation per mile = (120,000 − 20,000) ÷ 500,000 = 100,000 ÷ 500,000 = <strong>$0.20 per mile</strong>. Step 2 — Year depreciation = 0.20 × 85,000 = <strong>$17,000</strong>. Step 3 — The entry would debit Depreciation Expense and credit Accumulated Depreciation for $17,000. Note: if the truck sat idle all year, UOP depreciation would be $0 — expense follows usage, not time.</p>`
    },
    {
      prompt: `<p><strong>Problem 5 (computational).</strong> Equipment costs $60,000, has a $5,000 residual value, and a 4-year useful life. Compute double-declining-balance depreciation for each of the 4 years.</p>`,
      solution: `<p><strong>Answer: Year 1: $30,000; Year 2: $15,000; Year 3: $7,500; Year 4: $2,500.</strong></p><p>Step 1 — DDB rate = 2 × (1 ÷ 4) = <strong>50%</strong>. Step 2 — Year 1: 60,000 × 50% = <strong>$30,000</strong>; book value = 30,000. Step 3 — Year 2: 30,000 × 50% = <strong>$15,000</strong>; book value = 15,000. Step 4 — Year 3: 15,000 × 50% = <strong>$7,500</strong>; book value = 7,500. Step 5 — Year 4: the formula gives 7,500 × 50% = $3,750, which would leave book value at $3,750 — below the $5,000 residual. So Year 4 is a plug: 7,500 − 5,000 = <strong>$2,500</strong>. Step 6 — Check total: 30,000 + 15,000 + 7,500 + 2,500 = $55,000 = depreciable cost (60,000 − 5,000). Ending book value = $5,000 = residual.</p>`
    },
    {
      prompt: `<p><strong>Problem 6 (computational).</strong> Equipment with a cost of $75,000 and accumulated depreciation of $52,000 is sold for $27,500 cash. (a) Compute the gain or loss. (b) Prepare the disposal entry.</p>`,
      solution: `<p><strong>Answer: (a) $4,500 gain. (b) Entry below.</strong></p><p>Step 1 — Book value = 75,000 − 52,000 = $23,000. Step 2 — Gain = cash received − book value = 27,500 − 23,000 = <strong>$4,500 gain</strong> (proceeds exceed book value).</p><table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td></td><td>Cash</td><td class="num">27,500</td><td class="num"></td></tr><tr><td></td><td>Accumulated Depreciation — Equipment</td><td class="num">52,000</td><td class="num"></td></tr><tr><td></td><td class="indent">Equipment</td><td class="num"></td><td class="num">75,000</td></tr><tr><td></td><td class="indent">Gain on Disposal of Plant Assets</td><td class="num"></td><td class="num">4,500</td></tr></tbody></table><p>Step 3 — Check: debits 27,500 + 52,000 = 79,500; credits 75,000 + 4,500 = 79,500. The gain is reported as an other gain on the income statement.</p>`
    },
    {
      prompt: `<p><strong>Problem 7 (multiple choice).</strong> After three years of depreciation, a company revises an asset's estimated remaining life from 5 years to 8 years. The correct accounting is to:</p><ol type="a"><li>Restate the prior three years' financial statements with the new estimate.</li><li>Record a prior-period adjustment to Retained Earnings for the difference.</li><li>Spread the current book value (minus any revised residual) over the new remaining life, prospectively, with no change to prior periods.</li><li>Stop depreciating the asset until the 8 years have passed.</li></ol>`,
      solution: `<p><strong>Answer: (c).</strong></p><p>Step 1 — A change in useful life is a change in <em>estimate</em>, and estimates are revised prospectively: take the current book value and allocate it over the new remaining life. Step 2 — (a) is wrong because restatement is for errors and accounting principle changes, not estimate changes. Step 3 — (b) is wrong because no prior-period adjustment is made for estimate changes. Step 4 — (d) is wrong because depreciation continues — only the annual amount changes. Therefore (c) is correct.</p>`
    },
    {
      prompt: `<p><strong>Problem 8 (computational).</strong> Canyon Supply purchases a patent for $45,000 with a useful life of 9 years. (a) Compute annual amortization. (b) Prepare the year-end entry.</p>`,
      solution: `<p><strong>Answer: (a) $5,000 per year. (b) Entry below.</strong></p><p>Step 1 — Amortization = 45,000 ÷ 9 = <strong>$5,000</strong> per year (straight-line; no residual value for intangibles).</p><table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td>Dec 31</td><td>Amortization Expense</td><td class="num">5,000</td><td class="num"></td></tr><tr><td></td><td class="indent">Patent</td><td class="num"></td><td class="num">5,000</td></tr></tbody></table><p>Step 2 — Unlike depreciation, amortization of intangibles is usually credited directly to the asset account rather than to a contra-asset. After 9 years the patent's book value will be $0.</p>`
    },
    {
      prompt: `<p><strong>Problem 9 (computational).</strong> Delta Manufacturing buys a gravel deposit for $900,000 with an estimated 300,000 extractable tons and no residual value. During the year it extracts 48,000 tons. (a) Compute depletion for the year. (b) Prepare the entry.</p>`,
      solution: `<p><strong>Answer: (a) $144,000. (b) Entry below.</strong></p><p>Step 1 — Depletion per ton = 900,000 ÷ 300,000 = <strong>$3 per ton</strong>. Step 2 — Depletion = 48,000 × 3 = <strong>$144,000</strong>.</p><table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody><tr><td>Dec 31</td><td>Inventory (Gravel)</td><td class="num">144,000</td><td class="num"></td></tr><tr><td></td><td class="indent">Accumulated Depletion</td><td class="num"></td><td class="num">144,000</td></tr></tbody></table><p>Step 3 — Depletion is debited to Inventory (not expense) because the extracted gravel is a product; it becomes Cost of Goods Sold when sold.</p>`
    },
    {
      prompt: `<p><strong>Problem 10 (multiple choice).</strong> Which statement about depreciation is true?</p><ol type="a"><li>Depreciation is a valuation process that keeps book value equal to market value.</li><li>All three depreciation methods produce the same total depreciation over an asset's life; they differ only in timing.</li><li>Land is depreciated using the straight-line method over 40 years.</li><li>Accumulated Depreciation is an expense account reported on the income statement.</li></ol>`,
      solution: `<p><strong>Answer: (b).</strong></p><p>Step 1 — Over the full useful life, every method allocates exactly cost minus residual value; SL, UOP, and DDB differ only in <em>which years</em> bear how much expense. Step 2 — (a) is wrong: depreciation is an <em>allocation</em> process, and book value rarely equals market value. Step 3 — (c) is wrong: land is never depreciated. Step 4 — (d) is wrong: Accumulated Depreciation is a <em>contra-asset</em> on the balance sheet; Depreciation Expense is the income-statement account. Therefore (b) is correct.</p>`
    }
  ],
  quiz: [
    {
      q: "A machine costs $41,000, has a $5,000 residual value, and a 6-year useful life. Straight-line depreciation per year is:",
      choices: [
        "$6,833",
        "$6,000",
        "$5,000",
        "$41,000"
      ],
      answer: 1,
      explanation: "Correct: (b). Depreciable cost = 41,000 − 5,000 = $36,000; annual SL = 36,000 ÷ 6 = $6,000. (a) is wrong because it divides the full $41,000 cost by 6, forgetting to subtract residual value. (c) is wrong because $5,000 is the residual value, not the depreciation. (d) is wrong because it expenses the entire cost in one year, which is not depreciation at all."
    },
    {
      q: "Using the lecture's machine (cost $90,000, residual $10,000, 160,000 total units), units-of-production depreciation in a year with 40,000 units is:",
      choices: [
        "$16,000",
        "$22,500",
        "$20,000",
        "$36,000"
      ],
      answer: 2,
      explanation: "Correct: (c). Per-unit rate = (90,000 − 10,000) ÷ 160,000 = $0.50; 40,000 × 0.50 = $20,000. (a) is wrong because $16,000 is the straight-line annual amount, not the usage-based amount. (b) is wrong because it divides cost by units without subtracting residual value (90,000 ÷ 160,000 = $0.5625 × 40,000). (d) is wrong because $36,000 is the Year 1 double-declining-balance amount."
    },
    {
      q: "For the lecture's machine (cost $90,000, residual $10,000, 5-year life), Year 1 double-declining-balance depreciation is:",
      choices: [
        "$36,000",
        "$16,000",
        "$32,000",
        "$18,000"
      ],
      answer: 0,
      explanation: "Correct: (a). DDB rate = 2 × (1 ÷ 5) = 40%; Year 1 = 90,000 × 40% = $36,000 applied to beginning book value. (b) is wrong because $16,000 is the straight-line amount. (c) is wrong because it applies the 40% rate to depreciable cost ($80,000) instead of beginning book value. (d) is wrong because $18,000 is the Year 1 units-of-production amount."
    },
    {
      q: "In Year 5 of the DDB schedule, depreciation is $1,664 (a plug) instead of the formula's $4,665.60 because:",
      choices: [
        "DDB is not allowed in the final year of an asset's life.",
        "Book value may never fall below residual value, so depreciation is limited to the amount that lands exactly on residual.",
        "The company switched to straight-line in Year 5.",
        "Accumulated depreciation cannot exceed the asset's cost."
      ],
      answer: 1,
      explanation: "Correct: (b). The formula amount would drive book value to $6,998.40, below the $10,000 residual; residual value acts as a floor, so Year 5 depreciation = 11,664 − 10,000 = $1,664. (a) is wrong because DDB is permitted in every year of life. (c) is wrong because no method switch occurred — the plug is part of DDB itself. (d) is wrong because accumulated depreciation of $80,000 + $4,665.60 would still be below the $90,000 cost; the binding constraint is residual value, not cost."
    },
    {
      q: "Equipment costing $90,000 with $48,000 accumulated depreciation is sold for $46,000 cash. The entry includes:",
      choices: [
        "A $4,000 debit to Loss on Disposal.",
        "A $4,000 credit to Gain on Disposal of Plant Assets.",
        "A $42,000 credit to Gain on Disposal of Plant Assets.",
        "No gain or loss, because book value equals cost minus depreciation."
      ],
      answer: 1,
      explanation: "Correct: (b). Book value = 90,000 − 48,000 = $42,000; proceeds of $46,000 exceed book value by $4,000, a gain, credited to Gain on Disposal. (a) is wrong because a debit to Loss would record a loss, but proceeds exceed book value here. (c) is wrong because $42,000 is the book value, not the gain — the gain is only the excess over book value. (d) is wrong because gain/loss is proceeds versus book value, and they differ here."
    },
    {
      q: "Which intangible asset is NOT amortized?",
      choices: [
        "A patent with a 10-year useful life",
        "A franchise with a 15-year contract term",
        "Goodwill recorded in an acquisition",
        "A copyright with a 20-year remaining legal life"
      ],
      answer: 2,
      explanation: "Correct: (c). Goodwill has an indefinite life and is never amortized; it is tested annually for impairment instead. (a) is wrong because a patent with a definite 10-year life is amortized over 10 years. (b) is wrong because a franchise with a definite 15-year term is amortized over 15 years. (d) is wrong because a copyright with a definite remaining life is amortized over that life."
    },
    {
      q: "A mineral deposit costing $2,400,000 contains an estimated 600,000 tons. If 95,000 tons are extracted this year, depletion is:",
      choices: [
        "$380,000, debited to Inventory",
        "$380,000, debited to Depletion Expense",
        "$400,000, debited to Inventory",
        "$240,000, debited to Inventory"
      ],
      answer: 0,
      explanation: "Correct: (a). Depletion per ton = 2,400,000 ÷ 600,000 = $4; 95,000 × 4 = $380,000, debited to Inventory (the extracted mineral is a product) and credited to Accumulated Depletion. (b) is wrong on the account: depletion is not expensed until the minerals are sold. (c) is wrong because $400,000 = 100,000 tons × $4, using the wrong extraction figure. (d) is wrong because it uses a $2.53/ton rate with no basis in the data."
    },
    {
      q: "A company buys a machine on October 1 and uses straight-line depreciation of $12,000 per full year. Depreciation for the first calendar year is:",
      choices: [
        "$12,000",
        "$3,000",
        "$9,000",
        "$0, because depreciation starts the following year"
      ],
      answer: 1,
      explanation: "Correct: (b). The machine is in service October–December = 3 months: 12,000 × 3/12 = $3,000. (a) is wrong because a full year's depreciation requires 12 months of service. (c) is wrong because 9/12 applies to the final partial year, not the first. (d) is wrong because depreciation begins when the asset is placed in service, not the next calendar year."
    }
  ],
  studyGuide: `<h3>Module 9 Study Guide — Long-Term Assets</h3>
<h3>Cost determination</h3>
<ul><li><strong>Cost</strong> = purchase price + all costs to acquire and prepare the asset for use.</li><li><strong>Land:</strong> price + closing + survey + razing − salvage. <strong>Land is never depreciated.</strong></li><li><strong>Land improvements</strong> (parking lots, fences) are separate and depreciated.</li><li><strong>Buildings:</strong> price or construction cost + pre-occupancy repairs.</li><li><strong>Equipment:</strong> price + tax + freight + installation − discounts.</li></ul>
<h3>Depreciation basics</h3>
<ul><li><strong>Depreciable cost</strong> = cost − residual value. <strong>Book value</strong> = cost − accumulated depreciation.</li><li>Depreciation is <em>allocation</em>, not valuation. Accumulated Depreciation is a contra-asset.</li></ul>
<h3>Three methods (same $90,000 / $10,000 / 5-yr machine)</h3>
<ul><li><strong>Straight-line:</strong> (90,000 − 10,000) ÷ 5 = <strong>$16,000/yr</strong> every year.</li><li><strong>Units-of-production:</strong> 80,000 ÷ 160,000 units = <strong>$0.50/unit</strong> × actual units.</li><li><strong>Double-declining-balance:</strong> rate = 2 × (1/5) = <strong>40%</strong> × <em>beginning book value</em>; residual is a floor (Year 5 = plug $1,664).</li><li>All three total <strong>$80,000</strong> over the life — only <em>timing</em> differs.</li></ul>
<h3>Partial years &amp; estimate changes</h3>
<ul><li>Prorate by months in service (e.g., Oct 1 purchase: 3/12 of annual SL).</li><li><strong>Revised estimates are prospective:</strong> (book value − new residual) ÷ new remaining life; never restate prior years.</li></ul>
<h3>Disposals</h3>
<ul><li><strong>Gain (Loss) = cash received − book value.</strong></li><li>Entry: Dr Cash, Dr Accumulated Depreciation, Dr Loss (or Cr Gain), Cr asset at cost. Update depreciation to disposal date first.</li></ul>
<h3>Intangibles &amp; natural resources</h3>
<ul><li><strong>Amortize</strong> definite-life intangibles straight-line (Dr Amortization Expense, Cr the asset). <strong>Goodwill is never amortized</strong> — annual impairment test.</li><li><strong>Depletion:</strong> (cost − residual) ÷ total units × units extracted; Dr Inventory, Cr Accumulated Depletion.</li></ul>`
};
