module.exports = {
  number: 5,
  slug: "merchandising-operations",
  title: "Merchandising Operations",
  estTime: "3\u20134 hours",
  objectives: [
    "Distinguish service companies from merchandising companies and explain how their income statements differ.",
    "Compare the perpetual and periodic inventory systems and identify which accounts each one uses.",
    "Journalize purchases of merchandise under the perpetual system, including freight costs.",
    "Journalize sales of merchandise under the perpetual system, including the related cost of goods sold entry.",
    "Record purchase and sales discounts, returns, and allowances correctly.",
    "Explain FOB shipping point versus FOB destination and determine who owns goods in transit.",
    "Prepare a multi-step income statement and compute gross profit and gross profit margin."
  ],
  sections: [
    {
      heading: "Service Companies vs. Merchandising Companies",
      html: `
<p>So far every example has been a <strong>service company</strong> — a business that earns revenue by performing services, like Blue Harbor Surf Shop's lessons and repairs. A <strong>merchandising company</strong> earns revenue by buying goods and reselling them, like a surf shop's retail counter, a grocery store, or an online electronics seller. Manufacturers make the goods; merchandisers (wholesalers and retailers) move them from manufacturer to consumer.</p>
<p>The accounting difference centers on one account: <strong>Merchandise Inventory</strong>. A merchandiser buys goods <em>for resale</em>, holds them as an asset, and when a sale occurs it records both the selling price (as Sales revenue) and the cost of the goods sold (as <strong>Cost of Goods Sold</strong> expense). A service company has no inventory and no cost of goods sold — its income statement jumps straight from revenue to operating expenses.</p>
<p>Merchandising also introduces vocabulary you will use constantly:</p>
<ul>
<li><strong>Sales</strong> — the selling price of merchandise sold (a revenue account).</li>
<li><strong>Cost of Goods Sold (COGS)</strong> — the cost the merchandiser paid for the merchandise it sold (an expense).</li>
<li><strong>Gross profit</strong> — net sales minus cost of goods sold; the merchandiser's first and most-watched measure of profitability.</li>
<li><strong>Sales Returns and Allowances</strong> — a contra-revenue account recording refunds for returned goods (returns) or price reductions for slightly damaged goods the customer keeps (allowances).</li>
<li><strong>Sales Discounts</strong> — a contra-revenue account recording cash discounts given to customers who pay quickly.</li>
<li><strong>Purchase Returns and Allowances / Purchase Discounts</strong> — the mirror image on the buying side (used mainly in the periodic system).</li>
<li><strong>Freight-in</strong> — transportation cost to get purchased goods to the buyer; <strong>freight-out</strong> (delivery expense) — cost to ship goods to customers.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Every merchandising sale is really two events recorded with two entries: (1) the sale at the <em>selling price</em> (revenue) and (2) the transfer of the goods at <em>cost</em> (expense). Forgetting the second entry is the single most common error in this module — revenue without its matching cost overstates gross profit.</div>`
    },
    {
      heading: "Perpetual vs. Periodic Inventory Systems",
      html: `
<p>Companies track inventory with one of two systems:</p>
<ul>
<li><strong>Perpetual system</strong> — inventory records are updated <em>continuously</em>. Every purchase debits Merchandise Inventory, and every sale triggers two entries: one for the selling price and one debiting Cost of Goods Sold and crediting Merchandise Inventory. The inventory balance is known at any moment without counting. Most modern businesses use this system.</li>
<li><strong>Periodic system</strong> — inventory is updated only <em>periodically</em>, usually at year-end after a physical count. Purchases during the year debit a temporary <strong>Purchases</strong> account (not Merchandise Inventory), and no COGS entry is made at the time of sale. Cost of goods sold is computed at period-end with a formula.</li>
</ul>
<div class="formula">Periodic COGS = Beginning inventory + Net purchases \u2212 Ending inventory<br>where Net purchases = Purchases \u2212 Purchase returns and allowances \u2212 Purchase discounts + Freight-in</div>
<p>This module works almost entirely in the <strong>perpetual system</strong>, because it shows the economics of each transaction most clearly. The periodic system appears once, in a worked COGS computation, so you can read statements prepared under either system.</p>
<p><strong>Worked example — periodic COGS.</strong> Harbor Books uses the periodic system and reports: beginning inventory $14,000; purchases $60,000; purchase returns and allowances $3,000; purchase discounts $1,200; freight-in $2,400; ending inventory (from the year-end count) $16,500.</p>
<p>Net purchases = 60,000 − 3,000 − 1,200 + 2,400 = <strong>$58,200</strong>. Cost of goods available for sale = 14,000 + 58,200 = <strong>$72,200</strong>. Cost of goods sold = 72,200 − 16,500 = <strong>$55,700</strong>. Under the perpetual system this same $55,700 would have accumulated in the COGS account one sale at a time — same total, different bookkeeping path.</p>
<div class="mistake"><strong>Common mistake:</strong> Debiting the <strong>Purchases</strong> account while using the perpetual system. Purchases exists only in the periodic system. Under perpetual, every merchandise purchase debits <strong>Merchandise Inventory</strong> directly. If your journal entry says "Purchases," you are in the wrong system.</div>`
    },
    {
      heading: "Recording Purchases Under the Perpetual System",
      html: `
<p><strong>Worked example.</strong> Coastline Supply Co. (a surf-gear wholesaler using the perpetual system) makes the following purchase on March 4: it buys $12,000 of merchandise on account, terms 2/10, n/30, FOB shipping point. The freight company charges $400 to deliver the goods, which Coastline pays in cash.</p>
<p>First, the purchase itself — debit Merchandise Inventory, because under perpetual the inventory account grows with every purchase:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Mar. 4</td><td>Merchandise Inventory</td><td class="num">12,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Accounts Payable</td><td class="num"></td><td class="num">12,000</td></tr>
<tr><td></td><td colspan="3"><em>Purchase of merchandise on account</em></td></tr>
</tbody>
</table>
<p>Second, the freight. Because the terms are FOB shipping point (explained in the next section), the <em>buyer</em> owns the goods once shipped and pays the freight. Under perpetual, freight-in is a cost of acquiring the inventory, so it is added to Merchandise Inventory rather than expensed:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Mar. 4</td><td>Merchandise Inventory</td><td class="num">400</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">400</td></tr>
<tr><td></td><td colspan="3"><em>Freight cost on purchase, FOB shipping point</em></td></tr>
</tbody>
</table>
<p>Third, payment. The credit terms <strong>2/10, n/30</strong> mean the buyer may deduct 2% if it pays within 10 days; otherwise the full (net) amount is due within 30 days. Coastline pays on March 12 — inside the discount period — so it takes the discount: 2% × $12,000 = $240, and pays $12,000 − $240 = $11,760. Under the <strong>gross method</strong> (the standard approach), the purchase was recorded at full price and the discount now reduces the inventory cost:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Mar. 12</td><td>Accounts Payable</td><td class="num">12,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">11,760</td></tr>
<tr><td></td><td class="indent">Merchandise Inventory</td><td class="num"></td><td class="num">240</td></tr>
<tr><td></td><td colspan="3"><em>Payment within discount period (gross method)</em></td></tr>
</tbody>
</table>
<p>Trace the inventory cost: 12,000 + 400 − 240 = $12,160 of merchandise now sits in inventory at its true acquisition cost. Under the <strong>net method</strong> (an alternative), the purchase would have been recorded net of the discount from the start (debit Inventory $11,760) and a missed discount later recorded as an expense — same economics, different timing. Unless told otherwise, use the gross method.</p>
<div class="callout"><strong>Key idea:</strong> A purchase discount is not revenue and not a gain — it is a reduction of what the inventory cost. That is why the credit goes to Merchandise Inventory (gross method), keeping the matching principle intact when the goods are later sold.</div>`
    },
    {
      heading: "Recording Sales, Returns, and Discounts",
      html: `
<p><strong>Worked example — a cash sale.</strong> On March 18, Coastline sells merchandise that cost $7,500 for $13,000 cash. Remember the two-entry rule:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Mar. 18</td><td>Cash</td><td class="num">13,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Sales</td><td class="num"></td><td class="num">13,000</td></tr>
<tr><td></td><td colspan="3"><em>Sale of merchandise at selling price</em></td></tr>
<tr><td>Mar. 18</td><td>Cost of Goods Sold</td><td class="num">7,500</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Merchandise Inventory</td><td class="num"></td><td class="num">7,500</td></tr>
<tr><td></td><td colspan="3"><em>Cost of merchandise sold</em></td></tr>
</tbody>
</table>
<p>The gross profit on this sale is 13,000 − 7,500 = $5,500, visible immediately because both halves were recorded.</p>
<p><strong>Worked example — a sales return.</strong> On March 22 the customer returns merchandise from that sale: selling price $2,000, cost $1,200, and Coastline refunds cash. Two entries again, mirroring the sale — the revenue is reversed through the contra-revenue account, and the goods go back into inventory:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Mar. 22</td><td>Sales Returns and Allowances</td><td class="num">2,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">2,000</td></tr>
<tr><td></td><td colspan="3"><em>Refund for returned merchandise</em></td></tr>
<tr><td>Mar. 22</td><td>Merchandise Inventory</td><td class="num">1,200</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cost of Goods Sold</td><td class="num"></td><td class="num">1,200</td></tr>
<tr><td></td><td colspan="3"><em>Returned goods restored to inventory</em></td></tr>
</tbody>
</table>
<p>Why not debit Sales directly? Because management wants to see <em>gross</em> sales and the drag from returns separately — a rising returns balance signals quality or listing-accuracy problems that a netted Sales account would hide.</p>
<p><strong>Worked example — a sales discount.</strong> On April 2, Coastline sells $8,000 of merchandise on account (cost $5,000), terms 2/10, n/30. The customer pays on April 10, inside the discount period, so it deducts 2% × $8,000 = $160 and pays $7,840.</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>Apr. 2</td><td>Accounts Receivable</td><td class="num">8,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Sales</td><td class="num"></td><td class="num">8,000</td></tr>
<tr><td></td><td colspan="3"><em>Sale on account</em></td></tr>
<tr><td>Apr. 2</td><td>Cost of Goods Sold</td><td class="num">5,000</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Merchandise Inventory</td><td class="num"></td><td class="num">5,000</td></tr>
<tr><td></td><td colspan="3"><em>Cost of merchandise sold</em></td></tr>
<tr><td>Apr. 10</td><td>Cash</td><td class="num">7,840</td><td class="num"></td></tr>
<tr><td></td><td>Sales Discounts</td><td class="num">160</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Accounts Receivable</td><td class="num"></td><td class="num">8,000</td></tr>
<tr><td></td><td colspan="3"><em>Collection within discount period</em></td></tr>
</tbody>
</table>
<p>Note the asymmetry: <em>purchase</em> discounts reduce inventory cost (gross method), but <em>sales</em> discounts are a contra-revenue that reduces net sales. Both reflect the same commercial idea — a reward for fast payment — recorded on opposite sides of the transaction.</p>
<div class="mistake"><strong>Common mistake:</strong> Recording only the selling-price entry on a sale and forgetting the COGS entry. Under the perpetual system every sale needs both entries; a missing COGS entry overstates both inventory and gross profit. When in doubt, ask: "Did goods leave the building? Then inventory must decrease."</div>`
    },
    {
      heading: "FOB Shipping Point vs. FOB Destination",
      html: `
<p>When goods are in transit, someone owns them — and ownership determines whose inventory (and whose balance sheet) they appear on. The shipping terms decide:</p>
<ul>
<li><strong>FOB shipping point</strong> — title passes to the buyer the moment the goods leave the seller's dock. The <strong>buyer</strong> pays the freight and owns the goods while they are in transit. (FOB = "free on board.")</li>
<li><strong>FOB destination</strong> — title passes only when the goods arrive at the buyer's dock. The <strong>seller</strong> pays the freight and owns the goods while they are in transit.</li>
</ul>
<p>A memory aid: the party named in the term is where the seller's responsibility <em>ends</em> — at the shipping point, or at the destination.</p>
<p><strong>Worked example.</strong> On May 1, Coastline ships $6,000 of merchandise to a customer, terms FOB destination, and pays the freight company $300 cash. Because the terms are FOB destination, the goods still belong to Coastline while in transit, and the freight is Coastline's <strong>delivery expense</strong> (freight-out) — a selling expense, <em>not</em> part of inventory cost, because the goods are already sold:</p>
<table class="jentry">
<thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead>
<tbody>
<tr><td>May 1</td><td>Freight-Out (Delivery Expense)</td><td class="num">300</td><td class="num"></td></tr>
<tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">300</td></tr>
<tr><td></td><td colspan="3"><em>Freight on sale shipped FOB destination</em></td></tr>
</tbody>
</table>
<p>Contrast this with the March 4 purchase: there the terms were FOB shipping point, the <em>buyer</em> (Coastline) paid the $400 freight, and it was debited to Merchandise Inventory as part of acquisition cost. Rule of thumb: freight on <em>purchases</em> (freight-in) is added to inventory; freight on <em>sales</em> (freight-out) is a selling expense.</p>
<p>Ownership in transit also matters at year-end counts. Goods purchased FOB shipping point that are still on the truck at December 31 belong to the buyer and must be <em>included</em> in the buyer's inventory. Goods sold FOB destination that are still on the truck belong to the seller and must be <em>included</em> in the seller's inventory. (Module 6 works a full numerical example of these adjustments.)</p>
<div class="callout"><strong>Key idea:</strong> FOB terms answer two questions at once: <em>who pays the freight</em> and <em>who owns goods in transit</em>. FOB shipping point = buyer pays, buyer owns in transit. FOB destination = seller pays, seller owns in transit.</div>`
    },
    {
      heading: "The Multi-Step Income Statement",
      html: `
<p>Service companies can use a simple single-step income statement (revenues minus expenses). Merchandisers need a <strong>multi-step income statement</strong>, which breaks profitability into informative layers: gross profit, income from operations, and net income. Each layer answers a different question — how profitable is the merchandise itself? How profitable are operations? What is the bottom line?</p>
<p><strong>Worked example.</strong> Coastline Supply Co.'s adjusted data for the year ended December 31, 2026:</p>
<table>
<thead><tr><th>Coastline Supply Co. — Income Statement — For the Year Ended December 31, 2026</th><th></th><th></th></tr></thead>
<tbody>
<tr><td>Sales</td><td class="num"></td><td class="num">$168,000</td></tr>
<tr><td>Less: Sales returns and allowances</td><td class="num">$6,000</td><td class="num"></td></tr>
<tr><td class="indent">Sales discounts</td><td class="num">4,000</td><td class="num"></td></tr>
<tr><td class="indent"></td><td class="num">10,000</td><td class="num"></td></tr>
<tr><td><strong>Net sales</strong></td><td class="num"></td><td class="num"><strong>158,000</strong></td></tr>
<tr><td>Cost of goods sold</td><td class="num"></td><td class="num">92,000</td></tr>
<tr><td><strong>Gross profit</strong></td><td class="num"></td><td class="num"><strong>66,000</strong></td></tr>
<tr><td>Operating expenses:</td><td class="num"></td><td class="num"></td></tr>
<tr><td class="indent">Selling expenses:</td><td class="num"></td><td class="num"></td></tr>
<tr><td class="indent2">Sales salaries expense</td><td class="num">24,000</td><td class="num"></td></tr>
<tr><td class="indent2">Advertising expense</td><td class="num">6,000</td><td class="num"></td></tr>
<tr><td class="indent">Total selling expenses</td><td class="num">30,000</td><td class="num"></td></tr>
<tr><td class="indent">Administrative expenses:</td><td class="num"></td><td class="num"></td></tr>
<tr><td class="indent2">Office salaries expense</td><td class="num">18,000</td><td class="num"></td></tr>
<tr><td class="indent2">Rent expense</td><td class="num">8,000</td><td class="num"></td></tr>
<tr><td class="indent2">Depreciation expense</td><td class="num">2,000</td><td class="num"></td></tr>
<tr><td class="indent">Total administrative expenses</td><td class="num">28,000</td><td class="num"></td></tr>
<tr><td class="indent">Total operating expenses</td><td class="num"></td><td class="num">58,000</td></tr>
<tr><td><strong>Income from operations</strong></td><td class="num"></td><td class="num"><strong>8,000</strong></td></tr>
<tr><td>Other revenues and gains:</td><td class="num"></td><td class="num"></td></tr>
<tr><td class="indent">Interest revenue</td><td class="num"></td><td class="num">500</td></tr>
<tr><td>Other expenses and losses:</td><td class="num"></td><td class="num"></td></tr>
<tr><td class="indent">Interest expense</td><td class="num"></td><td class="num">(1,200)</td></tr>
<tr><td><strong>Net income</strong></td><td class="num"></td><td class="num"><strong>$7,300</strong></td></tr>
</tbody>
</table>
<p>Footing check: net sales = 168,000 − 6,000 − 4,000 = $158,000. Gross profit = 158,000 − 92,000 = $66,000. Operating expenses = 30,000 + 28,000 = $58,000 (selling: 24,000 + 6,000; admin: 18,000 + 8,000 + 2,000). Income from operations = 66,000 − 58,000 = $8,000. Net income = 8,000 + 500 − 1,200 = <strong>$7,300</strong>.</p>
<div class="formula">Gross profit = Net sales \u2212 Cost of goods sold<br>Gross profit margin = Gross profit \u00f7 Net sales</div>
<p>Coastline's gross profit margin = 66,000 ÷ 158,000 = 0.4177, or <strong>41.8%</strong> — meaning about 42 cents of gross profit are earned on every dollar of net sales, before operating expenses. Analysts track this margin over time: a falling margin can signal rising supplier costs, heavier discounting, or a shift toward lower-margin products, even when total sales are growing.</p>
<p>Notice the structure's logic: the top section isolates <em>merchandising</em> performance (buying and selling), the middle section isolates <em>operating</em> performance (running the business), and the bottom section captures peripheral items like interest. A service company's statement lacks the net-sales and gross-profit layers entirely.</p>
<div class="mistake"><strong>Common mistake:</strong> Subtracting sales discounts and returns as operating expenses, or adding freight-out to cost of goods sold. Contra-revenues (returns, discounts) reduce <em>sales</em> at the top; freight-out is a <em>selling expense</em> in operating expenses. Only the merchandise cost itself belongs in COGS.</div>`
    },
    {
      heading: "Chapter Recap",
      html: `
<ul>
<li><strong>Merchandisers</strong> buy and resell goods; their income statement features <strong>net sales</strong>, <strong>cost of goods sold</strong>, and <strong>gross profit</strong>.</li>
<li>The <strong>perpetual system</strong> updates Merchandise Inventory and COGS with every transaction; the <strong>periodic system</strong> uses a Purchases account and computes COGS at period-end: beginning inventory + net purchases − ending inventory.</li>
<li>Every sale under perpetual needs <strong>two entries</strong>: selling price (revenue) and cost (COGS).</li>
<li><strong>2/10, n/30</strong> = 2% discount if paid within 10 days, otherwise net due in 30 days. Purchase discounts reduce inventory cost (gross method); sales discounts are contra-revenue.</li>
<li><strong>Sales Returns and Allowances</strong> is contra-revenue (kept separate from Sales for analysis); returns also restore goods to inventory and reduce COGS.</li>
<li><strong>FOB shipping point</strong>: buyer pays freight, buyer owns goods in transit. <strong>FOB destination</strong>: seller pays freight, seller owns goods in transit. Freight-in goes to inventory; freight-out is a selling expense.</li>
<li>The <strong>multi-step income statement</strong> reports gross profit, income from operations, and net income; <strong>gross profit margin</strong> = gross profit ÷ net sales.</li>
</ul>`
    }
  ],
  keyTerms: [
    { term: "Merchandising company", def: "A company that earns revenue by purchasing goods and reselling them to customers, as opposed to performing services or manufacturing goods." },
    { term: "Merchandise inventory", def: "Goods held by a merchandiser for resale to customers; reported as a current asset on the balance sheet." },
    { term: "Cost of goods sold (COGS)", def: "The cost to the merchandiser of the merchandise it sold during the period; matched against sales revenue on the income statement." },
    { term: "Perpetual inventory system", def: "An inventory system that updates inventory records continuously: purchases debit Merchandise Inventory and each sale records both revenue and cost of goods sold." },
    { term: "Periodic inventory system", def: "An inventory system that updates inventory only at period-end via a physical count; purchases debit a Purchases account and COGS is computed as beginning inventory + net purchases − ending inventory." },
    { term: "FOB shipping point", def: "Shipping terms under which title passes to the buyer when goods leave the seller's premises; the buyer pays freight and owns goods in transit." },
    { term: "FOB destination", def: "Shipping terms under which title passes to the buyer only when goods arrive; the seller pays freight and owns goods in transit." },
    { term: "Credit terms (2/10, n/30)", def: "Purchase or sale terms offering a 2% cash discount if paid within 10 days, with the full amount due within 30 days; the '2' is the discount rate and '10' the discount period." },
    { term: "Purchase discount", def: "A cash discount taken by a buyer for prompt payment; under the gross method it reduces the recorded cost of merchandise inventory." },
    { term: "Sales discount", def: "A cash discount granted to a customer for prompt payment; recorded as a contra-revenue account that reduces net sales." },
    { term: "Sales returns and allowances", def: "A contra-revenue account recording refunds for returned merchandise and price reductions for defective goods the customer keeps." },
    { term: "Contra revenue", def: "An account with a debit balance, such as Sales Returns and Allowances or Sales Discounts, deducted from gross Sales to arrive at net sales." },
    { term: "Freight-in", def: "Transportation cost to deliver purchased merchandise to the buyer; under the perpetual system it is added to Merchandise Inventory." },
    { term: "Freight-out", def: "Transportation cost to deliver sold merchandise to customers; reported as a selling (operating) expense, also called delivery expense." },
    { term: "Net sales", def: "Gross sales minus sales returns and allowances minus sales discounts; the starting point for gross profit computation." },
    { term: "Gross profit", def: "Net sales minus cost of goods sold; the profit earned purely from buying and selling merchandise." },
    { term: "Gross profit margin", def: "Gross profit divided by net sales, expressed as a percentage; measures how much of each sales dollar remains after merchandise cost." },
    { term: "Multi-step income statement", def: "An income statement format showing intermediate profit measures — gross profit, income from operations, and net income — with operating expenses split into selling and administrative categories." },
    { term: "Income from operations", def: "Gross profit minus operating expenses; profit from the company's core business activities before other revenues, gains, expenses, and losses." },
    { term: "Operating expenses", def: "Expenses of running the business, divided into selling expenses (tied to making sales) and administrative expenses (general management)." }
  ],
  video: {
    title: "Fundamentals of Accounting — Lectures 30\u201342: the merchandising business",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLerzWq9nGRYciMKaElwxUYsGx_UCWpgML",
    note: "Start the playlist at Lectures 30\u201342, which cover the merchandising business: recording purchases and sales, purchase and sales discounts, and returns. The earlier lectures are a good refresher if journal entries feel rusty."
  },
  assignment: [
    {
      prompt: "<p><strong>1.</strong> On June 3, Bayview Traders (perpetual system) purchases $9,000 of merchandise on account, terms 2/10, n/30, FOB shipping point, and pays $350 cash for freight. Journalize the purchase and the freight.</p>",
      solution: "<p>June 3: Dr Merchandise Inventory 9,000; Cr Accounts Payable 9,000 (purchase on account). June 3: Dr Merchandise Inventory 350; Cr Cash 350 (freight-in under FOB shipping point is added to inventory cost, since the buyer owns the goods in transit and pays the freight).</p>"
    },
    {
      prompt: "<p><strong>2.</strong> Bayview pays the June 3 account (problem 1) on June 11, within the discount period. Journalize the payment using the gross method.</p>",
      solution: "<p>Discount = 2% \u00d7 9,000 = $180. Cash paid = 9,000 \u2212 180 = $8,820. June 11: Dr Accounts Payable 9,000; Cr Cash 8,820; Cr Merchandise Inventory 180. The discount reduces inventory cost under the gross method.</p>"
    },
    {
      prompt: "<p><strong>3.</strong> On June 15, Bayview sells merchandise costing $4,200 for $7,800 on account. Journalize the sale (both entries).</p>",
      solution: "<p>June 15: Dr Accounts Receivable 7,800; Cr Sales 7,800 (selling price). June 15: Dr Cost of Goods Sold 4,200; Cr Merchandise Inventory 4,200 (cost). Every perpetual-system sale requires both entries.</p>"
    },
    {
      prompt: "<p><strong>4.</strong> On June 20, the customer from problem 3 returns merchandise with a selling price of $1,300 (cost $700); Bayview credits the customer's account. Journalize both entries.</p>",
      solution: "<p>June 20: Dr Sales Returns and Allowances 1,300; Cr Accounts Receivable 1,300 (reverse the revenue through contra-revenue, not by debiting Sales). June 20: Dr Merchandise Inventory 700; Cr Cost of Goods Sold 700 (goods restored to inventory).</p>"
    },
    {
      prompt: "<p><strong>5.</strong> On July 1, Bayview sells $5,000 of merchandise on account (cost $3,100), terms 2/10, n/30. The customer pays on July 8. Journalize the sale and the collection.</p>",
      solution: "<p>July 1: Dr Accounts Receivable 5,000; Cr Sales 5,000; and Dr Cost of Goods Sold 3,100; Cr Merchandise Inventory 3,100. July 8: discount = 2% \u00d7 5,000 = $100; cash = $4,900. Dr Cash 4,900; Dr Sales Discounts 100; Cr Accounts Receivable 5,000. Sales Discounts is a contra-revenue account.</p>"
    },
    {
      prompt: "<p><strong>6.</strong> A periodic-system company reports: beginning inventory $22,000; purchases $95,000; purchase returns and allowances $4,500; purchase discounts $2,300; freight-in $3,800; ending inventory $25,400. Compute (a) net purchases and (b) cost of goods sold.</p>",
      solution: "<p>(a) Net purchases = 95,000 \u2212 4,500 \u2212 2,300 + 3,800 = <strong>$92,000</strong>. (b) Goods available = 22,000 + 92,000 = 114,000. COGS = 114,000 \u2212 25,400 = <strong>$88,600</strong>.</p>"
    },
    {
      prompt: "<p><strong>7.</strong> A company reports sales of $240,000, sales returns and allowances of $9,000, and sales discounts of $6,000. Compute net sales.</p>",
      solution: "<p>Net sales = 240,000 \u2212 9,000 \u2212 6,000 = <strong>$225,000</strong>. Contra-revenues are deducted from gross sales at the top of the income statement.</p>"
    },
    {
      prompt: "<p><strong>8.</strong> Using net sales of $225,000 (problem 7) and cost of goods sold of $138,000, compute (a) gross profit and (b) gross profit margin. Interpret the margin in one sentence.</p>",
      solution: "<p>(a) Gross profit = 225,000 \u2212 138,000 = <strong>$87,000</strong>. (b) Margin = 87,000 \u00f7 225,000 = 0.3867 \u2248 <strong>38.7%</strong>. Interpretation: about 39 cents of gross profit are earned on each dollar of net sales before operating expenses.</p>"
    },
    {
      prompt: "<p><strong>9.</strong> At December 31, goods costing $11,000 are on a truck between seller and buyer. In each independent case, who includes the goods in inventory: (a) terms FOB shipping point, (b) terms FOB destination? Explain.</p>",
      solution: "<p>(a) <strong>The buyer</strong> includes them: under FOB shipping point, title passed when the goods left the seller, so the buyer owns them in transit. (b) <strong>The seller</strong> includes them: under FOB destination, title passes only on arrival, so the seller still owns them.</p>"
    },
    {
      prompt: "<p><strong>10.</strong> Prepare a multi-step income statement (through net income) from: sales $320,000; sales returns and allowances $12,000; sales discounts $8,000; cost of goods sold $185,000; selling expenses $64,000; administrative expenses $42,000; interest revenue $1,500; interest expense $2,500. Show every subtotal.</p>",
      solution: "<p>Net sales = 320,000 \u2212 12,000 \u2212 8,000 = $300,000. Gross profit = 300,000 \u2212 185,000 = $115,000. Total operating expenses = 64,000 + 42,000 = $106,000. Income from operations = 115,000 \u2212 106,000 = $9,000. Net income = 9,000 + 1,500 \u2212 2,500 = <strong>$8,000</strong>.</p>"
    }
  ],
  quiz: [
    {
      q: "Which inventory system updates the Merchandise Inventory account with every purchase and sale?",
      choices: ["Periodic system", "Perpetual system", "Physical system", "Estimated system"],
      answer: 1,
      explanation: "The perpetual system is correct: it debits Merchandise Inventory on each purchase and records COGS on each sale, so the balance is always current. The periodic system is wrong because it updates inventory only at period-end after a physical count, using a Purchases account during the period. 'Physical system' and 'estimated system' are wrong because they are not inventory systems at all."
    },
    {
      q: "Under the perpetual system, the purchase of merchandise on account is recorded with a debit to:",
      choices: ["Purchases", "Cost of Goods Sold", "Merchandise Inventory", "Accounts Payable"],
      answer: 2,
      explanation: "Merchandise Inventory is correct: the perpetual system records every purchase directly into the inventory asset account. Purchases is wrong because that account exists only in the periodic system. Cost of Goods Sold is wrong because no sale has occurred yet — COGS is recorded only when goods are sold. Accounts Payable is wrong because it is credited (a liability increase), not debited, on a purchase on account."
    },
    {
      q: "Credit terms of 2/10, n/30 mean:",
      choices: ["A 2% discount if paid within 10 days; otherwise the full amount is due in 30 days", "A 10% discount if paid within 2 days; otherwise due in 30 days", "A 2% discount if paid within 30 days; otherwise due in 10 days", "The invoice is due in 2 to 30 days with no discount"],
      answer: 0,
      explanation: "A 2% discount if paid within 10 days; otherwise the full amount is due in 30 days is correct — the first number is the discount rate, the second the discount period, and n/30 the net due date. A 10% discount if paid within 2 days reverses the numbers and is wrong. A 2% discount if paid within 30 days misreads the periods and is wrong. Due in 2 to 30 days with no discount ignores the discount entirely and is wrong."
    },
    {
      q: "Goods shipped FOB shipping point are owned while in transit by the:",
      choices: ["Seller, who also pays the freight", "Buyer, who also pays the freight", "Freight company", "Seller, but the buyer pays the freight"],
      answer: 1,
      explanation: "Buyer, who also pays the freight is correct: under FOB shipping point title passes at shipment, so the buyer owns the goods in transit and pays the freight. Seller who also pays the freight is wrong because that describes FOB destination. The freight company is wrong because the carrier never takes title. Seller owns but buyer pays mixes the two terms and is wrong — one party both pays and owns in transit under each term."
    },
    {
      q: "A customer return of merchandise is recorded with a debit to:",
      choices: ["Sales", "Sales Returns and Allowances", "Merchandise Inventory only", "Accounts Receivable"],
      answer: 1,
      explanation: "Sales Returns and Allowances is correct: it is the contra-revenue account that reverses revenue while keeping gross sales visible for analysis. Sales is wrong because debiting Sales directly would hide the returns information management needs. Merchandise Inventory only is wrong because that is just the second entry (restoring the goods); the revenue reversal is still required. Accounts Receivable is wrong because it is credited (the customer's balance decreases), not debited, on a return."
    },
    {
      q: "Gross profit equals:",
      choices: ["Sales minus operating expenses", "Net sales minus cost of goods sold", "Net income plus operating expenses", "Sales minus sales discounts only"],
      answer: 1,
      explanation: "Net sales minus cost of goods sold is correct — that is the definition of gross profit. Sales minus operating expenses is wrong because it skips the COGS layer and mixes gross profit with income from operations. Net income plus operating expenses is wrong because that arithmetic does not isolate any standard profit measure. Sales minus sales discounts only is wrong because it ignores both returns and the entire cost of goods sold."
    },
    {
      q: "Freight paid by the buyer on a purchase shipped FOB shipping point is recorded under the perpetual system as a debit to:",
      choices: ["Freight-Out (Delivery Expense)", "Merchandise Inventory", "Cost of Goods Sold", "Purchases"],
      answer: 1,
      explanation: "Merchandise Inventory is correct: freight-in is part of the cost of acquiring the inventory, so it is capitalized into the inventory account. Freight-Out is wrong because that is the seller's delivery expense on sales, not the buyer's freight on purchases. Cost of Goods Sold is wrong because the goods have not been sold yet. Purchases is wrong because that account belongs to the periodic system."
    },
    {
      q: "On a multi-step income statement, Sales Discounts appear as:",
      choices: ["An operating expense", "An addition to cost of goods sold", "A deduction from Sales in computing net sales", "Other revenue"],
      answer: 2,
      explanation: "A deduction from Sales in computing net sales is correct: sales discounts are a contra-revenue shown at the top of the statement. An operating expense is wrong because discounts are not a cost of running the business. An addition to cost of goods sold is wrong because discounts relate to the selling price, not merchandise cost. Other revenue is wrong because a discount reduces revenue rather than creating it."
    }
  ],
  studyGuide: `
<h3>M5 Study Guide — Merchandising Operations</h3>
<h4>Core vocabulary</h4>
<p>Merchandiser buys and resells goods. Key accounts: Merchandise Inventory (asset), Sales (revenue), Cost of Goods Sold (expense), Sales Returns and Allowances and Sales Discounts (contra-revenues).</p>
<h4>Perpetual vs. periodic</h4>
<p><strong>Perpetual:</strong> every purchase debits Merchandise Inventory; every sale records <em>two</em> entries (selling price \u2192 revenue; cost \u2192 COGS). <strong>Periodic:</strong> purchases debit Purchases; COGS computed at period-end: Beg. inventory + (Purchases \u2212 returns \u2212 discounts + freight-in) \u2212 End. inventory.</p>
<h4>Discounts — 2/10, n/30</h4>
<p>2% off if paid within 10 days, net due in 30 days. <em>Purchase</em> discount (gross method): credit Merchandise Inventory. <em>Sales</em> discount: debit Sales Discounts (contra-revenue).</p>
<h4>FOB terms</h4>
<p><strong>Shipping point:</strong> buyer pays freight, buyer owns in transit; freight-in \u2192 Merchandise Inventory. <strong>Destination:</strong> seller pays freight, seller owns in transit; freight-out \u2192 selling expense.</p>
<h4>Multi-step income statement</h4>
<p>Net sales = Sales \u2212 returns \u2212 discounts. Gross profit = Net sales \u2212 COGS. Income from operations = Gross profit \u2212 operating expenses (selling + administrative). Net income = Income from operations \u00b1 other revenues/expenses.</p>
<div class="formula">Gross profit margin = Gross profit \u00f7 Net sales</div>
<h4>Self-check numbers (Coastline)</h4>
<p>Net sales $158,000; gross profit $66,000; margin 41.8%; income from operations $8,000; net income $7,300. Purchase 12,000 + freight 400 \u2212 discount 240 = inventory cost $12,160.</p>`
};
