module.exports = {
  number: 6,
  slug: "inventory",
  title: "Inventory",
  estTime: "3\u20134 hours",
  objectives: [
    "Determine the correct quantity of ending inventory by applying ownership rules for goods in transit and consigned goods.",
    "Compute cost of goods sold and ending inventory under specific identification, FIFO, LIFO, and weighted-average cost using one consistent data set.",
    "Explain how the choice of costing method affects the income statement, the balance sheet, and income taxes.",
    "Apply the lower-of-cost-or-net-realizable-value rule and journalize an inventory write-down.",
    "Analyze how inventory errors affect net income across two accounting periods.",
    "Compute and interpret the inventory turnover ratio and days in inventory."
  ],
  sections: [
    {
      heading: "Determining Inventory Quantities: What Counts?",
      html: `
<p>Before costing inventory, a company must determine <em>how much</em> inventory it owns. A physical count is the starting point, but ownership — not location — decides what is included. Two situations routinely adjust the count:</p>
<ul>
<li><strong>Goods in transit.</strong> Ownership follows the FOB terms from Module 5: goods purchased <strong>FOB shipping point</strong> belong to the buyer once shipped, so the buyer includes them even though the truck has not arrived. Goods sold <strong>FOB destination</strong> still belong to the seller until delivered, so the seller includes them even though they have left the warehouse.</li>
<li><strong>Consigned goods.</strong> In a consignment arrangement, the <strong>consignor</strong> (owner) ships goods to the <strong>consignee</strong> (agent), who sells them for a commission. The goods remain the consignor's inventory until sold — they are never the consignee's inventory, even while sitting in the consignee's store.</li>
</ul>
<p><strong>Worked example.</strong> Harbor Paddle Boards takes its December 31 physical count: <strong>$96,000</strong>. Four additional facts surface:</p>
<ol>
<li>$9,000 of merchandise purchased FOB shipping point is in transit from the supplier — title passed at shipment, so these are Harbor's goods: <strong>add $9,000</strong>.</li>
<li>$6,000 of goods in the warehouse are held on consignment <em>for</em> another company and were mistakenly counted — they belong to the consignor: <strong>subtract $6,000</strong>.</li>
<li>$11,000 of Harbor's boards are sitting in a retailer's shop on consignment <em>from</em> Harbor — still Harbor's inventory, not in the count: <strong>add $11,000</strong>.</li>
<li>$5,000 of goods sold FOB destination are in transit to the customer — title has not passed, so they are still Harbor's: <strong>add $5,000</strong>.</li>
</ol>
<div class="formula">Ending inventory = 96,000 + 9,000 \u2212 6,000 + 11,000 + 5,000 = $115,000</div>
<p>Check: 96,000 + 9,000 = 105,000; minus 6,000 = 99,000; plus 11,000 = 110,000; plus 5,000 = <strong>$115,000</strong>. Getting the quantity right matters enormously: as you will see, a $1 error in ending inventory becomes a $1 error in cost of goods sold — and therefore in net income.</p>
<div class="mistake"><strong>Common mistake:</strong> Including consigned goods in the <em>consignee's</em> inventory. The consignee is just a selling agent — the goods belong to the consignor until a customer buys them. When you see "on consignment," always ask: "Who is the consignor?" That party reports the inventory.</div>`
    },
    {
      heading: "Inventory Costing Methods: The Four Approaches",
      html: `
<p>When identical units are purchased at different prices during the year, which cost "flows" into cost of goods sold and which stays in ending inventory? Four <strong>cost flow assumptions</strong> answer that question:</p>
<ul>
<li><strong>Specific identification</strong> — track the actual cost of each individual unit sold. Required when units are unique and high-value (cars, jewelry, custom boards). Impractical for thousands of identical units.</li>
<li><strong>FIFO (first-in, first-out)</strong> — the <em>oldest</em> costs go to COGS first; ending inventory reflects the <em>most recent</em> costs. Matches the physical flow of perishable goods.</li>
<li><strong>LIFO (last-in, first-out)</strong> — the <em>newest</em> costs go to COGS first; ending inventory reflects the <em>oldest</em> costs. Matches current costs against current revenues on the income statement.</li>
<li><strong>Weighted-average cost</strong> — every unit carries the <em>average</em> cost of all units available; both COGS and ending inventory use that average.</li>
</ul>
<p>Two guardrails apply no matter which method is chosen. The <strong>consistency principle</strong> requires a company to use the same method from period to period so its statements are comparable over time. And the <strong>disclosure principle</strong> requires the chosen method to be disclosed in the notes to the financial statements. A company may use different methods for different product lines, but it cannot flip-flop methods year to year to manage reported income.</p>
<div class="formula">Cost of goods available for sale = Beginning inventory + Cost of goods purchased<br>Cost of goods available for sale = Cost of goods sold + Ending inventory</div>
<p>That second equation is the workhorse of this module: compute one of COGS or ending inventory, and the other is simply the remainder. Every method below must satisfy it — a built-in arithmetic check you should always run.</p>
<div class="callout"><strong>Key idea:</strong> Cost flow assumptions need not match physical flow. A lumber yard can stack new boards on top and sell from the top (physical LIFO) while reporting FIFO. The assumption is an <em>accounting</em> choice about which costs attach to COGS, not a description of warehouse operations.</div>`
    },
    {
      heading: "Worked Example: All Four Methods on One Data Set",
      html: `
<p>Harbor Paddle Boards sells one model, the Voyager SUP. Its 2026 activity (perpetual records, but the same data works either way):</p>
<table>
<thead><tr><th></th><th>Units</th><th>Unit cost</th><th>Total cost</th></tr></thead>
<tbody>
<tr><td>Beginning inventory, Jan. 1</td><td class="num">8</td><td class="num">$40</td><td class="num">$320</td></tr>
<tr><td>Purchase, Mar. 8</td><td class="num">32</td><td class="num">$45</td><td class="num">$1,440</td></tr>
<tr><td>Purchase, Jun. 15</td><td class="num">24</td><td class="num">$50</td><td class="num">$1,200</td></tr>
<tr><td>Purchase, Nov. 2</td><td class="num">16</td><td class="num">$55</td><td class="num">$880</td></tr>
<tr><td><strong>Goods available for sale</strong></td><td class="num"><strong>80</strong></td><td class="num"></td><td class="num"><strong>$3,840</strong></td></tr>
<tr><td>Units sold during 2026</td><td class="num">(55)</td><td class="num"></td><td class="num"></td></tr>
<tr><td><strong>Ending inventory, Dec. 31</strong></td><td class="num"><strong>25</strong></td><td class="num"></td><td class="num"></td></tr>
</tbody>
</table>
<p>Check the totals: 8 + 32 + 24 + 16 = 80 units; 320 + 1,440 + 1,200 + 880 = <strong>$3,840</strong> available. Units sold = 55, so 25 units remain. Costs are rising ($40 → $55), which will make the methods diverge.</p>
<h4>Method 1 — Specific identification</h4>
<p>Harbor tags each board. The 55 units sold are identified as: 8 @ $40 ($320) + 20 @ $45 ($900) + 15 @ $50 ($750) + 12 @ $55 ($660).</p>
<p>COGS = 320 + 900 + 750 + 660 = <strong>$2,630</strong>. Ending inventory = 3,840 − 2,630 = <strong>$1,210</strong>. Verify from the units left: 12 @ $45 ($540) + 9 @ $50 ($450) + 4 @ $55 ($220) = 540 + 450 + 220 = $1,210. The sold units (8 + 20 + 15 + 12 = 55) and remaining units (12 + 9 + 4 = 25) both foot to the right totals.</p>
<h4>Method 2 — FIFO</h4>
<p>The 25 units in ending inventory are the <em>newest</em>: 16 @ $55 ($880) + 9 @ $50 ($450) = <strong>$1,330</strong>. COGS = 3,840 − 1,330 = <strong>$2,510</strong>. Verify directly — the 55 oldest units sold: 8 @ $40 ($320) + 32 @ $45 ($1,440) + 15 @ $50 ($750) = 320 + 1,440 + 750 = $2,510.</p>
<h4>Method 3 — LIFO</h4>
<p>The 25 units in ending inventory are the <em>oldest</em>: 8 @ $40 ($320) + 17 @ $45 ($765) = <strong>$1,085</strong>. COGS = 3,840 − 1,085 = <strong>$2,755</strong>. Verify directly — the 55 newest units sold: 16 @ $55 ($880) + 24 @ $50 ($1,200) + 15 @ $45 ($675) = 880 + 1,200 + 675 = $2,755.</p>
<h4>Method 4 — Weighted average</h4>
<p>Average cost = 3,840 ÷ 80 = <strong>$48.00 per unit</strong>. Ending inventory = 25 × 48 = <strong>$1,200</strong>. COGS = 55 × 48 = <strong>$2,640</strong>. Check: 1,200 + 2,640 = $3,840.</p>
<h4>The comparison</h4>
<table>
<thead><tr><th>Method</th><th>Cost of goods sold</th><th>Ending inventory</th><th>Total</th></tr></thead>
<tbody>
<tr><td>Specific identification</td><td class="num">$2,630</td><td class="num">$1,210</td><td class="num">$3,840</td></tr>
<tr><td>FIFO</td><td class="num">$2,510</td><td class="num">$1,330</td><td class="num">$3,840</td></tr>
<tr><td>LIFO</td><td class="num">$2,755</td><td class="num">$1,085</td><td class="num">$3,840</td></tr>
<tr><td>Weighted average</td><td class="num">$2,640</td><td class="num">$1,200</td><td class="num">$3,840</td></tr>
</tbody>
</table>
<p>Every column sums to $3,840 — the methods only <em>allocate</em> the same pool of cost differently. With rising prices, the pattern is systematic: <strong>FIFO gives the lowest COGS (oldest, cheapest costs sold) and highest ending inventory; LIFO gives the highest COGS and lowest ending inventory; weighted average lands in between.</strong></p>
<div class="mistake"><strong>Common mistake:</strong> Computing FIFO ending inventory from the <em>oldest</em> units. Under FIFO the ending inventory is the <em>newest</em> units (first in, first out — the old ones left first). For LIFO it is the reverse: ending inventory holds the <em>oldest</em> units. Always pause and ask which end of the timeline your ending inventory comes from.</div>`
    },
    {
      heading: "Financial Statement and Tax Effects of Method Choice",
      html: `
<p>Using Harbor's numbers, assume sales of $6,000 and operating expenses of $1,500 for the year. Watch how the costing choice ripples through the income statement:</p>
<table>
<thead><tr><th></th><th>FIFO</th><th>LIFO</th><th>Difference</th></tr></thead>
<tbody>
<tr><td>Sales</td><td class="num">$6,000</td><td class="num">$6,000</td><td class="num">—</td></tr>
<tr><td>Cost of goods sold</td><td class="num">2,510</td><td class="num">2,755</td><td class="num">$245</td></tr>
<tr><td>Gross profit</td><td class="num">3,490</td><td class="num">3,245</td><td class="num">$245</td></tr>
<tr><td>Operating expenses</td><td class="num">1,500</td><td class="num">1,500</td><td class="num">—</td></tr>
<tr><td>Income before tax</td><td class="num"><strong>$1,990</strong></td><td class="num"><strong>$1,745</strong></td><td class="num"><strong>$245</strong></td></tr>
</tbody>
</table>
<p>In periods of <strong>rising prices</strong>, the effects are predictable:</p>
<ul>
<li><strong>FIFO</strong> → lowest COGS → <strong>highest net income</strong>; ending inventory on the balance sheet reflects <strong>recent (current) costs</strong> — the most realistic asset value.</li>
<li><strong>LIFO</strong> → highest COGS → <strong>lowest net income</strong>; but the newest costs matched against current revenues give the most realistic <em>income statement</em>. Ending inventory can reflect decades-old costs and look understated.</li>
<li><strong>Weighted average</strong> → income and inventory values between the two extremes, smoothing out price swings.</li>
</ul>
<p>The LIFO income effect has a real cash consequence: lower reported income means <strong>lower income taxes</strong>. At a 25% tax rate, Harbor's LIFO-vs-FIFO income difference of $245 saves 245 × 25% = <strong>$61.25</strong> in taxes this year. That is why many companies choose LIFO despite reporting lower earnings — cash saved is cash saved.</p>
<p>There is a catch: the <strong>LIFO conformity rule</strong>. If a company uses LIFO to compute taxable income, tax law requires it to use LIFO in its financial statements too. And in <strong>falling</strong> prices, every effect reverses — LIFO then reports the <em>higher</strong> income. Note also that IFRS (used internationally) <strong>prohibits LIFO</strong> entirely, so a multinational reporter must use FIFO or average cost.</p>
<div class="callout"><strong>Key idea:</strong> No method is "right" in the abstract — each trades off a realistic balance sheet (FIFO) against a realistic income statement and lower taxes (LIFO). What matters is that the choice is disclosed, applied consistently, and understood by the reader: two identical companies can report different profits purely because of this choice.</div>`
    },
    {
      heading: "Lower of Cost or Net Realizable Value",
      html: `
<p><strong>Conservatism</strong> — the principle of anticipating losses but not gains — requires inventory to be reported at the <strong>lower of cost or net realizable value (LCNRV)</strong>. If inventory's market value drops below its cost (obsolescence, damage, falling prices), the company must write it down; it may never write inventory <em>up</em> above cost.</p>
<div class="formula">Net realizable value (NRV) = Estimated selling price \u2212 Estimated costs to complete and sell</div>
<p><strong>Worked example.</strong> Harbor holds 300 Voyager SUPs at a unit cost of $48 (total cost $14,400). Two scenarios:</p>
<ul>
<li><strong>Scenario A:</strong> estimated selling price $55, selling costs $4 per unit. NRV = 55 − 4 = $51. Since $51 > $48 cost, <strong>no write-down</strong> — inventory stays at cost.</li>
<li><strong>Scenario B:</strong> a competitor's price war drops the estimated selling price to $50, with selling costs still $4. NRV = 50 − 4 = $46, which is <strong>below</strong> the $48 cost. Write down each unit by 48 − 46 = $2.</li>
</ul>
<p>Scenario B write-down = 300 units × $2 = <strong>$600</strong>:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Dec. 31</td><td>Loss on Inventory Write-Down</td><td class="num">600</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Merchandise Inventory</td><td class="num"></td><td class="num">600</td></tr>
<tr><td></td><td colspan="3"><em>Write inventory down to net realizable value</em></td></tr>
</tbody>
</table>
<p>After the entry, inventory is carried at 300 × $46 = $13,800, and the $600 loss appears on the income statement. (Some companies debit Cost of Goods Sold instead of a separate loss account — either is acceptable; the key is that inventory drops to NRV.)</p>
<div class="mistake"><strong>Common mistake:</strong> Writing inventory down when NRV exceeds cost, or writing it back <em>up</em> later if prices recover. LCNRV is a one-way street under U.S. GAAP: recognize the loss when value falls, but never recognize the gain until the goods are actually sold.</div>`
    },
    {
      heading: "Effects of Inventory Errors: The Two-Period Story",
      html: `
<p>Because ending inventory of one period becomes beginning inventory of the next, an inventory error <strong>reverses itself</strong> over two periods — but each period's income is still wrong. The logic flows from the COGS formula: beginning inventory + purchases − ending inventory.</p>
<ul>
<li><strong>Ending inventory overstated</strong> → COGS understated → net income <strong>overstated</strong> (this period).</li>
<li><strong>Ending inventory understated</strong> → COGS overstated → net income <strong>understated</strong> (this period).</li>
<li><strong>Beginning inventory overstated</strong> → COGS overstated → net income <strong>understated</strong> (this period).</li>
</ul>
<p><strong>Worked example.</strong> Suppose Harbor's December 31, 2026 ending inventory is <strong>overstated by $2,000</strong> (a counting error). Purchases are unaffected.</p>
<table>
<thead><tr><th>Effect of $2,000 overstatement of 2026 ending inventory</th><th>2026</th><th>2027</th></tr></thead>
<tbody>
<tr><td>Beginning inventory</td><td class="num">correct</td><td class="num">overstated $2,000</td></tr>
<tr><td>Cost of goods sold</td><td class="num">understated $2,000</td><td class="num">overstated $2,000</td></tr>
<tr><td>Net income</td><td class="num"><strong>overstated $2,000</strong></td><td class="num"><strong>understated $2,000</strong></td></tr>
<tr><td>Ending inventory</td><td class="num">overstated $2,000</td><td class="num">correct</td></tr>
</tbody>
</table>
<p>Trace it: in 2026, ending inventory too high by $2,000 means COGS too low by $2,000 (beginning + purchases − ending), so 2026 net income is overstated by $2,000. That same overstated ending inventory becomes 2027's <em>beginning</em> inventory — too high by $2,000 — which makes 2027 COGS too high by $2,000 and 2027 net income understated by $2,000. Over the two years combined, the errors cancel ($2,000 over + $2,000 under = $0), and the December 31, 2027 balance sheet is correct. But anyone who relied on 2026's or 2027's income statement was misled — which is why auditors test the inventory count so carefully.</p>
<div class="callout"><strong>Key idea:</strong> Inventory errors are <strong>counterbalancing</strong>: the balance sheet self-corrects after two periods, but each affected income statement is wrong in opposite directions. "It washes out eventually" is never an acceptable reason to leave an error uncorrected.</div>`
    },
    {
      heading: "Inventory Turnover: How Fast Does It Sell?",
      html: `
<p>The <strong>inventory turnover ratio</strong> measures how many times a company sells through its average inventory in a period — a direct read on merchandising efficiency. Too low suggests overstocking, obsolescence, or weak sales; too high can signal stockouts and lost sales.</p>
<div class="formula">Inventory turnover = Cost of goods sold \u00f7 Average inventory<br>Average inventory = (Beginning inventory + Ending inventory) \u00f7 2<br>Days in inventory = 365 \u00f7 Inventory turnover</div>
<p><strong>Worked example.</strong> Harbor Books (from Module 5's periodic example) reports cost of goods sold of <strong>$55,700</strong>, beginning inventory of <strong>$14,000</strong>, and ending inventory of <strong>$16,500</strong>.</p>
<p>Average inventory = (14,000 + 16,500) ÷ 2 = 30,500 ÷ 2 = <strong>$15,250</strong>. Inventory turnover = 55,700 ÷ 15,250 = 3.6525, or <strong>3.65 times</strong>. Days in inventory = 365 ÷ 3.65 = <strong>100 days</strong>.</p>
<p>Interpretation: Harbor Books sells through its inventory about 3.65 times per year — roughly once every 100 days. Whether that is good depends on the industry: a grocery chain turns inventory 15+ times a year (days in inventory under 25), while a yacht dealer might turn it once. Always compare turnover to the company's own history and to industry peers, and read it alongside gross profit margin — a company boosting turnover by slashing prices may be destroying margin to do it.</p>
<div class="callout"><strong>Key idea:</strong> Turnover uses <strong>COGS, not sales</strong>, in the numerator — because inventory is carried at cost, the numerator must be at cost too for the ratio to be meaningful. Mixing sales (a retail value) with inventory (a cost value) inflates the ratio.</div>`
    },
    {
      heading: "Chapter Recap",
      html: `
<ul>
<li>Ending inventory includes goods owned, not just goods on hand: add goods in transit purchased <strong>FOB shipping point</strong> and goods sold <strong>FOB destination</strong> still in transit; include <strong>consigned-out</strong> goods, exclude goods held on consignment <em>for</em> others.</li>
<li><strong>Cost of goods available for sale = COGS + ending inventory</strong> — compute one side, and the other is the remainder; always check that both sum to the available total.</li>
<li>On one data set (80 units, $3,840 available, 55 sold): Specific ID → COGS $2,630 / EI $1,210; FIFO → $2,510 / $1,330; LIFO → $2,755 / $1,085; Weighted average ($48/unit) → $2,640 / $1,200.</li>
<li>In <strong>rising prices</strong>: FIFO → highest income, most current balance sheet; LIFO → lowest income, lowest taxes (LIFO conformity rule; banned under IFRS); average → middle ground.</li>
<li><strong>LCNRV</strong>: write inventory down when net realizable value (selling price minus selling costs) falls below cost; never write it up.</li>
<li>Inventory errors <strong>counterbalance</strong> over two periods but misstate each period's net income in opposite directions.</li>
<li><strong>Inventory turnover = COGS ÷ average inventory</strong>; <strong>days in inventory = 365 ÷ turnover</strong>. Use COGS (cost basis), not sales.</li>
</ul>`
    }
  ],
  keyTerms: [
    { term: "Specific identification", def: "An inventory costing method that tracks the actual cost of each individual unit sold; required for unique, high-value items." },
    { term: "FIFO (first-in, first-out)", def: "A cost flow assumption under which the oldest inventory costs are assigned to cost of goods sold first, leaving the most recent costs in ending inventory." },
    { term: "LIFO (last-in, first-out)", def: "A cost flow assumption under which the most recent inventory costs are assigned to cost of goods sold first, leaving the oldest costs in ending inventory; prohibited under IFRS." },
    { term: "Weighted-average cost", def: "An inventory costing method assigning every unit the average cost of all units available for sale (total cost ÷ total units)." },
    { term: "Cost of goods available for sale", def: "Beginning inventory plus the cost of goods purchased during the period; equals cost of goods sold plus ending inventory." },
    { term: "Consistency principle", def: "The requirement that a company use the same accounting methods from period to period so financial statements are comparable over time." },
    { term: "Conservatism", def: "The accounting principle of anticipating losses but not gains — the basis for writing inventory down to net realizable value but never up." },
    { term: "Net realizable value (NRV)", def: "Estimated selling price minus estimated costs to complete and sell; the ceiling used in the lower-of-cost-or-NRV test." },
    { term: "Lower of cost or net realizable value (LCNRV)", def: "The rule requiring inventory to be reported at cost or NRV, whichever is lower, with any write-down recognized as a loss immediately." },
    { term: "Goods in transit", def: "Merchandise being shipped between buyer and seller at the count date; ownership (and inclusion in inventory) follows the FOB terms." },
    { term: "Consigned goods", def: "Merchandise shipped by a consignor to a consignee for sale on the consignor's behalf; reported as inventory of the consignor until sold." },
    { term: "Counterbalancing error", def: "An error, such as an inventory miscount, whose effects on net income reverse in the next period, leaving the two-period total correct but each period misstated." },
    { term: "Inventory turnover", def: "Cost of goods sold divided by average inventory; measures how many times inventory is sold and replaced during a period." },
    { term: "Days in inventory", def: "365 divided by inventory turnover; the average number of days inventory sits before being sold." },
    { term: "LIFO conformity rule", def: "The tax rule requiring a company that uses LIFO for taxable income to also use LIFO in its financial statements." },
    { term: "Beginning inventory", def: "The cost of inventory on hand at the start of the period — identical to the prior period's ending inventory." },
    { term: "Ending inventory", def: "The cost of inventory on hand at the end of the period, reported as a current asset on the balance sheet." },
    { term: "Write-down", def: "A reduction in the carrying value of inventory (or another asset) to reflect a decline in value, recorded with a debit to a loss account." }
  ],
  video: {
    title: "Complete Financial Accounting Course \u2014 inventory chapters (supplemental)",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLSlzC-HFo7w4zaKMQhAVbBRZJfpTE7Vm_",
    note: "Supplemental deep dive: open this 11-hour complete financial accounting course and watch the inventory chapters, which walk through FIFO, LIFO, and average cost with full numerical examples that parallel this module's worked data set."
  },
  assignment: [
    {
      prompt: "<p><strong>1.</strong> A December 31 physical count shows $142,000 of inventory. Additional facts: (a) $12,000 of goods purchased FOB shipping point are in transit from the supplier; (b) $8,500 of goods in the warehouse are held on consignment for another company; (c) $15,000 of the company's goods are on consignment at a retailer's store; (d) $6,000 of goods sold FOB destination are in transit to the customer. Compute the correct ending inventory.</p>",
      solution: "<p>Start with the count and adjust for ownership: 142,000 + 12,000 (FOB shipping point in transit \u2014 buyer's goods) \u2212 8,500 (consignment held for others \u2014 not ours) + 15,000 (our goods on consignment out \u2014 still ours) + 6,000 (sold FOB destination in transit \u2014 title not yet passed) = <strong>$166,500</strong>.</p>"
    },
    {
      prompt: "<p><strong>2.</strong> Use Harbor's data set (beg. 8 @ $40; Mar. 8: 32 @ $45; Jun. 15: 24 @ $50; Nov. 2: 16 @ $55; 55 units sold). A warehouse log identifies the units sold as: all 8 beginning units, 23 of the March units, all 24 June units, and none of the November units. Compute COGS and ending inventory under <strong>specific identification</strong>.</p>",
      solution: "<p>Units sold check: 8 + 23 + 24 = 55. COGS = 8 \u00d7 40 (320) + 23 \u00d7 45 (1,035) + 24 \u00d7 50 (1,200) = 320 + 1,035 + 1,200 = <strong>$2,555</strong>. Ending inventory = 3,840 \u2212 2,555 = <strong>$1,285</strong>. Cross-check units remaining: 9 March units (405) + 16 November units (880) = 25 units, 405 + 880 = $1,285. Correct.</p>"
    },
    {
      prompt: "<p><strong>3.</strong> Using the same data set (80 units available at $3,840; 55 sold), compute COGS and ending inventory under <strong>FIFO</strong>. Verify COGS by costing the sold units directly.</p>",
      solution: "<p>Ending inventory = 25 newest units = 16 @ $55 (880) + 9 @ $50 (450) = <strong>$1,330</strong>. COGS = 3,840 \u2212 1,330 = <strong>$2,510</strong>. Direct check of 55 oldest units sold: 8 @ $40 (320) + 32 @ $45 (1,440) + 15 @ $50 (750) = 320 + 1,440 + 750 = $2,510. Matches.</p>"
    },
    {
      prompt: "<p><strong>4.</strong> Using the same data set, compute COGS and ending inventory under <strong>LIFO</strong>. Verify ending inventory by costing the remaining units directly.</p>",
      solution: "<p>Ending inventory = 25 oldest units = 8 @ $40 (320) + 17 @ $45 (765) = <strong>$1,085</strong>. COGS = 3,840 \u2212 1,085 = <strong>$2,755</strong>. Direct check of 55 newest units sold: 16 @ $55 (880) + 24 @ $50 (1,200) + 15 @ $45 (675) = 880 + 1,200 + 675 = $2,755. Matches.</p>"
    },
    {
      prompt: "<p><strong>5.</strong> Using the same data set, compute the weighted-average unit cost, then COGS and ending inventory under the <strong>weighted-average</strong> method.</p>",
      solution: "<p>Average cost = 3,840 \u00f7 80 = <strong>$48.00 per unit</strong>. Ending inventory = 25 \u00d7 48 = <strong>$1,200</strong>. COGS = 55 \u00d7 48 = <strong>$2,640</strong>. Check: 1,200 + 2,640 = $3,840.</p>"
    },
    {
      prompt: "<p><strong>6.</strong> A company has sales of $50,000 and operating expenses of $12,000. Using Harbor's data set, compute income before tax under (a) FIFO and (b) LIFO. Which method reports higher income, and by how much?</p>",
      solution: "<p>(a) FIFO: gross profit = 50,000 \u2212 2,510 = 47,490; income before tax = 47,490 \u2212 12,000 = <strong>$35,490</strong>. (b) LIFO: gross profit = 50,000 \u2212 2,755 = 47,245; income before tax = 47,245 \u2212 12,000 = <strong>$35,245</strong>. <strong>FIFO reports higher income by $245</strong> (the COGS difference: 2,755 \u2212 2,510).</p>"
    },
    {
      prompt: "<p><strong>7.</strong> Continuing problem 6, if the tax rate is 25%, how much income tax does the company save this year by using LIFO instead of FIFO?</p>",
      solution: "<p>The LIFO-vs-FIFO pre-tax income difference is $245 (LIFO lower). Tax savings = 245 \u00d7 25% = <strong>$61.25</strong>. This cash tax benefit is the main reason companies elect LIFO in rising-price environments.</p>"
    },
    {
      prompt: "<p><strong>8.</strong> A company holds 400 units of a product at a unit cost of $30. Estimated selling price is $34 per unit and estimated selling costs are $6 per unit. (a) Compute NRV per unit. (b) Is a write-down required? If so, give the journal entry.</p>",
      solution: "<p>(a) NRV = 34 \u2212 6 = <strong>$28 per unit</strong>. (b) Yes: NRV ($28) < cost ($30), so write down by $2 per unit \u00d7 400 = <strong>$800</strong>. Entry: Dr Loss on Inventory Write-Down 800; Cr Merchandise Inventory 800. Inventory is then carried at 400 \u00d7 28 = $11,200.</p>"
    },
    {
      prompt: "<p><strong>9.</strong> A company's December 31, 2026 ending inventory is <strong>understated by $4,000</strong> due to a counting error. State the effect (overstated, understated, or correct) on 2026 and 2027 for: (a) cost of goods sold, (b) net income, (c) ending inventory.</p>",
      solution: "<p><strong>2026:</strong> (a) COGS <strong>overstated</strong> $4,000 (beginning + purchases \u2212 too-small ending); (b) net income <strong>understated</strong> $4,000; (c) ending inventory <strong>understated</strong> $4,000. <strong>2027:</strong> (a) COGS <strong>understated</strong> $4,000 (beginning inventory too small); (b) net income <strong>overstated</strong> $4,000; (c) ending inventory <strong>correct</strong> (the error counterbalances; the 2027 count is unaffected).</p>"
    },
    {
      prompt: "<p><strong>10.</strong> A retailer reports cost of goods sold of $412,000, beginning inventory of $68,000, and ending inventory of $76,000. Compute (a) inventory turnover and (b) days in inventory. Interpret the results in one or two sentences.</p>",
      solution: "<p>Average inventory = (68,000 + 76,000) \u00f7 2 = <strong>$72,000</strong>. (a) Turnover = 412,000 \u00f7 72,000 = 5.722\u2026 \u2248 <strong>5.72 times</strong>. (b) Days in inventory = 365 \u00f7 5.72 \u2248 <strong>63.8 days</strong> (\u224864 days). The company sells through its inventory nearly 6 times a year, holding stock about two months on average \u2014 efficient for a retailer, though the verdict depends on industry norms.</p>"
    }
  ],
  quiz: [
    {
      q: "In a period of rising prices, which costing method reports the highest ending inventory?",
      choices: ["LIFO", "FIFO", "Weighted average", "Specific identification"],
      answer: 1,
      explanation: "FIFO is correct: ending inventory holds the newest (highest-cost) units when prices are rising. LIFO is wrong because its ending inventory holds the oldest, cheapest units — the lowest value. Weighted average is wrong because it blends old and new costs into a middle value. Specific identification is wrong because its result depends on which exact units were sold, not on a systematic rising-price pattern."
    },
    {
      q: "Beginning inventory: 5 units @ $10. Purchase: 10 units @ $12. During the period, 9 units are sold. Under FIFO, cost of goods sold is:",
      choices: ["$108", "$98", "$100", "$72"],
      answer: 1,
      explanation: "$98 is correct: FIFO sells the oldest units first — 5 @ $10 ($50) + 4 @ $12 ($48) = $98. $108 is wrong because it costs all 9 units at $12, ignoring the cheaper beginning units. $100 is wrong because it appears to average or miscount the layers. $72 is wrong because that is the ending inventory (6 @ $12), not COGS — check: 98 + 72 = $170 = total available (50 + 120)."
    },
    {
      q: "Goods available for sale total $900 for 60 units. Under the weighted-average method, if 40 units are sold, ending inventory is:",
      choices: ["$600", "$300", "$360", "$900"],
      answer: 1,
      explanation: "$300 is correct: average cost = 900 \u00f7 60 = $15 per unit; ending inventory = 20 units \u00d7 $15 = $300. $600 is wrong because that is COGS (40 \u00d7 $15), not ending inventory. $360 confuses the method with a FIFO-style layering and is wrong. $900 is wrong because that is the total goods available before any sale."
    },
    {
      q: "Under the lower-of-cost-or-net-realizable-value rule, inventory is written down when:",
      choices: ["Net realizable value exceeds cost", "Net realizable value falls below cost", "The company changes costing methods", "Inventory turnover increases"],
      answer: 1,
      explanation: "Net realizable value falls below cost is correct: conservatism requires recognizing the loss immediately by writing inventory down to NRV. NRV exceeds cost is wrong because inventory is never written up above cost under U.S. GAAP. Changing costing methods is wrong because the consistency principle governs method changes, which do not trigger write-downs. Inventory turnover increases is wrong because turnover is an efficiency ratio, unrelated to valuation."
    },
    {
      q: "Ending inventory for 2026 is understated by $3,000. The effect on net income is:",
      choices: ["2026 overstated $3,000; 2027 understated $3,000", "2026 understated $3,000; 2027 overstated $3,000", "2026 understated $3,000; 2027 understated $3,000", "No effect in either year"],
      answer: 1,
      explanation: "2026 understated $3,000; 2027 overstated $3,000 is correct: understated ending inventory overstates 2026 COGS (understating 2026 income), and the too-small 2026 ending balance becomes 2027's beginning inventory, understating 2027 COGS (overstating 2027 income) — the classic counterbalancing error. The first choice reverses both effects and is wrong. The third choice is wrong because the error reverses direction in year two rather than repeating. No effect is wrong because each year's income statement is misstated even though the two-year total washes out."
    },
    {
      q: "Merchandise shipped on consignment to a retailer is reported as inventory by the:",
      choices: ["Retailer (consignee), because the goods are in its store", "Consignor, until the goods are sold to a customer", "Freight company during shipment", "Whoever paid the freight"],
      answer: 1,
      explanation: "Consignor, until the goods are sold to a customer is correct: the consignor retains ownership and the consignee is merely a selling agent. The retailer/consignee is wrong because physical possession does not equal ownership. The freight company is wrong because a carrier never takes title. Whoever paid the freight is wrong because freight payment follows FOB terms and does not determine ownership of consigned goods."
    },
    {
      q: "The inventory turnover ratio is computed as:",
      choices: ["Net sales \u00f7 Average inventory", "Cost of goods sold \u00f7 Average inventory", "Average inventory \u00f7 Cost of goods sold", "Gross profit \u00f7 Ending inventory"],
      answer: 1,
      explanation: "Cost of goods sold \u00f7 Average inventory is correct: both numerator and denominator are on a cost basis, so the ratio is meaningful. Net sales \u00f7 Average inventory is wrong because it mixes a retail-value numerator with a cost-value denominator, inflating the ratio. Average inventory \u00f7 COGS inverts the ratio and is wrong. Gross profit \u00f7 Ending inventory uses the wrong numerator and a point-in-time denominator, and is wrong."
    },
    {
      q: "The LIFO conformity rule states that:",
      choices: ["LIFO may only be used with the perpetual system", "A company using LIFO for tax purposes must also use LIFO in its financial statements", "LIFO ending inventory must equal FIFO ending inventory", "LIFO is required whenever prices are rising"],
      answer: 1,
      explanation: "A company using LIFO for tax purposes must also use LIFO in its financial statements is correct — that is exactly what the conformity rule requires. LIFO only with the perpetual system is wrong because LIFO works under either inventory system. LIFO ending inventory must equal FIFO ending inventory is wrong because the methods produce different values by design. LIFO is required whenever prices are rising is wrong because method choice is voluntary (subject to consistency and disclosure)."
    }
  ],
  studyGuide: `
<h3>M6 Study Guide — Inventory</h3>
<h4>What counts in ending inventory</h4>
<p>Ownership, not location. <strong>Include:</strong> goods in transit purchased FOB shipping point; goods in transit sold FOB destination; your goods out on consignment. <strong>Exclude:</strong> goods held on consignment <em>for</em> others.</p>
<h4>The master equation</h4>
<div class="formula">Goods available (Beg. inv. + Purchases) = COGS + Ending inventory</div>
<h4>Four methods — one data set (80 units, $3,840; 55 sold, 25 left)</h4>
<table>
<thead><tr><th>Method</th><th>COGS</th><th>Ending inv.</th></tr></thead>
<tbody>
<tr><td>Specific ID</td><td class="num">$2,630</td><td class="num">$1,210</td></tr>
<tr><td>FIFO (newest left)</td><td class="num">$2,510</td><td class="num">$1,330</td></tr>
<tr><td>LIFO (oldest left)</td><td class="num">$2,755</td><td class="num">$1,085</td></tr>
<tr><td>Weighted avg. ($48/unit)</td><td class="num">$2,640</td><td class="num">$1,200</td></tr>
</tbody>
</table>
<h4>Rising prices — who wins what</h4>
<p><strong>FIFO:</strong> lowest COGS, highest income, most current balance sheet. <strong>LIFO:</strong> highest COGS, lowest income, lowest taxes (conformity rule; banned under IFRS). <strong>Average:</strong> middle ground.</p>
<h4>LCNRV</h4>
<p>NRV = selling price \u2212 selling costs. If NRV &lt; cost \u2192 write down (Dr Loss, Cr Inventory). Never write up.</p>
<h4>Inventory errors counterbalance</h4>
<p>Ending inventory overstated \u2192 this year's COGS understated \u2192 this year's income overstated; next year reverses. Two-year total washes out; each year is wrong.</p>
<h4>Turnover</h4>
<div class="formula">Turnover = COGS \u00f7 Avg. inventory; Days in inventory = 365 \u00f7 Turnover</div>
<p>Use COGS (cost basis), not sales. Example: 55,700 \u00f7 15,250 = 3.65\u00d7 \u2248 100 days.</p>`
};
