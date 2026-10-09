module.exports = {
  number: 10,
  slug: "liabilities",
  title: "Liabilities",
  estTime: "3–4 hours",
  objectives: [
    "Define liabilities and distinguish current liabilities from long-term liabilities.",
    "Account for common current liabilities: accounts payable, notes payable, sales taxes payable, unearned revenue, and current maturities of long-term debt.",
    "Prepare payroll journal entries, computing gross pay, FICA taxes, income tax withholding, net pay, and employer payroll taxes.",
    "Account for bonds issued at par, at a discount, and at a premium, including straight-line amortization.",
    "Explain the time value of money and apply present value intuition to long-term debt.",
    "Compute and interpret the debt to assets ratio."
  ],
  sections: [
    {
      heading: "What Counts as a Liability",
      html: `<p>A <strong>liability</strong> is a present obligation of a company to transfer assets or provide services in the future, arising from a past transaction or event. The two essential features are: (1) the company owes something to someone else, and (2) the obligation already exists — it is not merely a planned future purchase.</p>
      <p>Liabilities are classified by when they must be paid. <strong>Current liabilities</strong> are obligations expected to be settled within one year or within the operating cycle, whichever is longer. <strong>Long-term liabilities</strong> are obligations due beyond one year. This distinction matters because lenders and investors use current liabilities to judge whether a company can pay its short-term bills.</p>
      <div class="formula">Working capital = Current assets − Current liabilities<br>Current ratio = Current assets ÷ Current liabilities</div>
      <p>A special presentation item is <strong>current maturities of long-term debt</strong> — the portion of a long-term loan that comes due within the next year. Suppose a company owes a $100,000 loan, with $20,000 due next year and $80,000 due later. It reports $20,000 as a current liability (Current Maturities of Long-Term Debt) and $80,000 as long-term. This reclassification is made with a simple entry:</p>
      <table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
      <tr><td>Dec. 31</td><td>Long-Term Notes Payable</td><td class="num">20,000</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Current Maturities of Long-Term Debt</td><td class="num"></td><td class="num">20,000</td></tr>
      </tbody></table>
      <div class="callout"><strong>Key idea:</strong> Classification is about timing. The same loan can appear in both sections of the balance sheet at once — the part due soon is current, the rest is long-term.</div>
      <div class="mistake"><strong>Common mistake:</strong> Students treat "long-term debt" as a single number. On the balance sheet, always split it: the next year's payments belong in current liabilities.</div>`
    },
    {
      heading: "Common Current Liabilities",
      html: `<p>Several current liabilities arise from ordinary daily operations. <strong>Accounts payable</strong> are amounts owed to suppliers for goods or services bought on credit — recorded when the purchase is made and reduced when cash is paid.</p>
      <p><strong>Notes payable</strong> are formal written promises to pay a stated amount on a stated date, usually with interest. The interest formula you met in the receivables module applies identically here:</p>
      <div class="formula">Interest = Principal × Rate × Time</div>
      <p><strong>Worked example — interest on a note payable.</strong> On November 1, Carter Company signs a $20,000, 90-day, 9% note payable to borrow cash from its bank. The cash interest owed is: $20,000 × 9% × (90 ÷ 360) = $450. (Banks conventionally use a 360-day year.) The entries:</p>
      <table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
      <tr><td>Nov. 1</td><td>Cash</td><td class="num">20,000</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Notes Payable</td><td class="num"></td><td class="num">20,000</td></tr>
      <tr><td>Dec. 31</td><td>Interest Expense</td><td class="num">300</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Interest Payable</td><td class="num"></td><td class="num">300</td></tr>
      </tbody></table>
      <p>The December 31 entry accrues 60 days of interest ($20,000 × 9% × 60/360 = $300), matching the expense to the period the money was used. When the note matures on January 30, Carter pays $20,450: debit Notes Payable $20,000, debit Interest Payable $300, debit Interest Expense $150 (30 more days), credit Cash $20,450.</p>
      <p><strong>Sales taxes payable.</strong> When a retailer sells taxable goods, it collects sales tax from the customer on the government's behalf. The tax collected is not revenue — it is a liability until remitted.</p>
      <p><strong>Worked example — sales taxes.</strong> Diaz Retail sells $12,000 of merchandise in a state with a 6% sales tax. Total cash collected is $12,720, but only $12,000 is sales revenue:</p>
      <table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
      <tr><td>June 15</td><td>Cash</td><td class="num">12,720</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Sales Revenue</td><td class="num"></td><td class="num">12,000</td></tr>
      <tr><td></td><td class="indent">Sales Taxes Payable ($12,000 × 6%)</td><td class="num"></td><td class="num">720</td></tr>
      </tbody></table>
      <p>When Diaz remits the tax: debit Sales Taxes Payable $720, credit Cash $720.</p>
      <p><strong>Unearned revenue.</strong> Cash received before the company performs the service is a liability — the company owes the work. As the service is performed, the liability shrinks and revenue is recognized. Example: on January 1, Ellis Fitness receives $3,600 for a 12-month membership. The initial entry debits Cash $3,600 and credits Unearned Service Revenue $3,600. Each month, Ellis records: debit Unearned Service Revenue $300 ($3,600 ÷ 12), credit Service Revenue $300.</p>
      <div class="callout"><strong>Key idea:</strong> Unearned revenue is the mirror image of prepaid expenses. Cash comes first; the earning happens later. Until it is earned, the cash belongs — conceptually — to the customer.</div>`
    },
    {
      heading: "Payroll Accounting: Gross Pay, Withholdings, and Net Pay",
      html: `<p>Payroll is one of the largest expenses most companies have, and its accounting is governed by law, not just by GAAP. The key terms:</p>
      <ul>
      <li><strong>Gross pay (gross earnings):</strong> total compensation earned before any deductions — salary, wages, overtime, commissions, bonuses.</li>
      <li><strong>Withholdings:</strong> amounts the employer is required to deduct from gross pay and remit to tax authorities on the employee's behalf.</li>
      <li><strong>Net pay (take-home pay):</strong> gross pay minus all withholdings — what the employee actually receives.</li>
      </ul>
      <p>The two mandatory withholdings are <strong>FICA taxes</strong> and <strong>federal income tax withholding</strong>. FICA (Federal Insurance Contributions Act) funds Social Security and Medicare: the employee pays 6.2% of wages for Social Security (up to an annual wage base set by law) plus 1.45% for Medicare, for a combined 7.65%. Federal income tax withholding is determined by tax tables based on the employee's earnings and filing choices — in practice it is looked up, not computed by formula.</p>
      <div class="formula">Net pay = Gross pay − FICA taxes − Income tax withholding − Other deductions</div>
      <p><strong>Worked example — employee payroll.</strong> For one weekly pay period, employee Rosa Vega earns gross pay of $2,000. Federal income tax withheld is $240 (from the tax tables). Her FICA taxes: Social Security = $2,000 × 6.2% = $124; Medicare = $2,000 × 1.45% = $29; total FICA = $153. Her net pay: $2,000 − $240 − $153 = <strong>$1,607</strong>. Verify: $240 + $153 = $393 withheld; $2,000 − $393 = $1,607. It foots.</p>
      <p>The employer's obligation does not end with the employee's check. <strong>Employer payroll taxes</strong> are a separate cost, paid by the company on top of gross pay:</p>
      <ul>
      <li>Employer's matching FICA: another 7.65% — here, another $153.</li>
      <li><strong>FUTA</strong> (Federal Unemployment Tax Act): 6.0% on the first $7,000 of each employee's annual wages, reduced by a credit (usually to a net 0.6%) when the employer pays state unemployment tax on time. Here: $2,000 × 0.6% = $12.</li>
      <li><strong>SUTA</strong> (State Unemployment Tax Act): rates vary by state and employer history. Assume 3.0% here: $2,000 × 3.0% = $60.</li>
      </ul>
      <p>Total employer payroll tax expense = $153 + $12 + $60 = <strong>$225</strong>. Note that employer payroll taxes are an expense of the company — they are never deducted from the employee's pay.</p>
      <p><strong>The payroll journal entry</strong> records everything at once. Debits: Salaries and Wages Expense $2,000 and Payroll Tax Expense $225, totaling $2,225. Credits: FICA Taxes Payable $306 (employee $153 + employer $153), Federal Income Taxes Payable $240, FUTA Taxes Payable $12, SUTA Taxes Payable $60, and Salaries and Wages Payable $1,607 (the net pay owed to Rosa). Check the footing: $306 + $240 + $12 + $60 + $1,607 = $2,225. Debits equal credits.</p>
      <table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
      <tr><td>Apr. 30</td><td>Salaries and Wages Expense</td><td class="num">2,000</td><td class="num"></td></tr>
      <tr><td></td><td>Payroll Tax Expense</td><td class="num">225</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">FICA Taxes Payable</td><td class="num"></td><td class="num">306</td></tr>
      <tr><td></td><td class="indent">Federal Income Taxes Payable</td><td class="num"></td><td class="num">240</td></tr>
      <tr><td></td><td class="indent">FUTA Taxes Payable</td><td class="num"></td><td class="num">12</td></tr>
      <tr><td></td><td class="indent">SUTA Taxes Payable</td><td class="num"></td><td class="num">60</td></tr>
      <tr><td></td><td class="indent">Salaries and Wages Payable</td><td class="num"></td><td class="num">1,607</td></tr>
      </tbody></table>
      <p>When Rosa is paid and the taxes are remitted, the company debits the payable accounts and credits Cash.</p>
      <div class="mistake"><strong>Common mistake:</strong> Deducting the employer's payroll taxes (FUTA, SUTA, matching FICA) from the employee's gross pay. Those are the company's own expense — the employee's check is reduced only by withholdings (employee FICA, income tax, voluntary deductions).</div>`
    },
    {
      heading: "Bonds Payable: Par, Discount, and Premium",
      html: `<p>When a company needs a large sum for a long time — to build a factory, for example — it may issue <strong>bonds</strong>: formal debt securities sold to many investors. Each bond has a <strong>face (par) value</strong> (the amount repaid at maturity, usually $1,000 per bond), a <strong>stated (contract) interest rate</strong> printed on the bond (interest is normally paid twice a year), and a maturity date. Investors, however, price bonds using the <strong>market (effective) interest rate</strong> — the rate currently demanded for bonds of similar risk. The gap between the stated rate and the market rate is why bonds sell at par, at a discount, or at a premium:</p>
      <ul>
      <li><strong>Issued at par:</strong> stated rate = market rate. Cash received equals face value.</li>
      <li><strong>Issued at a discount:</strong> stated rate &lt; market rate. Investors pay less than face value. The <strong>discount</strong> (face value − cash received) is a contra-liability that increases total interest cost.</li>
      <li><strong>Issued at a premium:</strong> stated rate &gt; market rate. Investors pay more than face value. The <strong>premium</strong> (cash received − face value) is an adjunct-liability that reduces total interest cost.</li>
      </ul>
      <p><strong>Worked example — bonds issued at a discount.</strong> On January 1, Harbor Inc. issues $100,000 of 5-year, 8% bonds when the market rate is higher. Investors pay only 96% of face: cash received = $100,000 × 96% = $96,000. The discount is $100,000 − $96,000 = $4,000:</p>
      <table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
      <tr><td>Jan. 1</td><td>Cash</td><td class="num">96,000</td><td class="num"></td></tr>
      <tr><td></td><td>Discount on Bonds Payable</td><td class="num">4,000</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Bonds Payable</td><td class="num"></td><td class="num">100,000</td></tr>
      </tbody></table>
      <p>The carrying (book) value of the bonds is face value minus discount: $96,000 — the amount that would settle the debt today.</p>
      <p>Under the <strong>straight-line amortization</strong> method, the discount is spread evenly over the bond's life: $4,000 ÷ 5 years = <strong>$800 per year</strong>. Amortizing the discount increases interest expense, because the company is effectively paying extra interest beyond the cash coupon. Each year Harbor pays cash interest of $100,000 × 8% = $8,000 and records total interest expense of $8,000 + $800 = $8,800:</p>
      <table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
      <tr><td>Dec. 31</td><td>Interest Expense</td><td class="num">8,800</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Discount on Bonds Payable</td><td class="num"></td><td class="num">800</td></tr>
      <tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">8,000</td></tr>
      </tbody></table>
      <p>By maturity, the full $4,000 discount is amortized, carrying value equals the $100,000 face value, and Harbor repays exactly $100,000 cash: debit Bonds Payable $100,000, credit Cash $100,000.</p>
      <p><strong>Bonds issued at a premium — the mirror image.</strong> If Harbor had issued the same bonds at 102, cash received would be $102,000 and the premium $2,000. Straight-line amortization = $2,000 ÷ 5 = $400 per year, and amortization <em>decreases</em> interest expense (investors prepaid some interest):</p>
      <table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
      <tr><td>Jan. 1</td><td>Cash</td><td class="num">102,000</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Bonds Payable</td><td class="num"></td><td class="num">100,000</td></tr>
      <tr><td></td><td class="indent">Premium on Bonds Payable</td><td class="num"></td><td class="num">2,000</td></tr>
      <tr><td>Dec. 31</td><td>Interest Expense ($8,000 − $400)</td><td class="num">7,600</td><td class="num"></td></tr>
      <tr><td></td><td>Premium on Bonds Payable</td><td class="num">400</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">8,000</td></tr>
      </tbody></table>
      <div class="callout"><strong>Key idea:</strong> A discount means the company borrowed "cheaply" relative to the market and pays for it with higher interest expense; a premium means the opposite. In both cases the carrying value glides toward face value as maturity approaches.</div>
      <div class="mistake"><strong>Common mistake:</strong> Amortizing a discount by debiting it. Amortization <em>reduces</em> the Discount account (a debit-balance contra-liability), so it is credited; it increases Interest Expense (debited). For a premium, amortization debits the Premium account and reduces Interest Expense.</div>`
    },
    {
      heading: "Time Value of Money: Why a Dollar Today Beats a Dollar Tomorrow",
      html: `<p>The <strong>time value of money</strong> is the principle that money available now is worth more than the same amount in the future, because money today can be invested to earn interest. This idea underlies all of long-term liability (and asset) accounting: bond prices, notes, leases, and pensions are all stated at <strong>present value</strong> — what future cash flows are worth in today's dollars.</p>
      <p>Intuition first. Suppose you can earn 5% interest. Then $1,000 today will grow to $1,050 in one year, so the present value of $1,050 received one year from now is exactly $1,000. Conversely, a promise to pay $1,050 next year is worth only $1,000 today. The higher the interest rate or the longer the wait, the lower the present value of a future amount.</p>
      <div class="formula">Future value = Present value × (1 + rate)<sup>periods</sup><br>Present value = Future value ÷ (1 + rate)<sup>periods</sup></div>
      <p>This explains the bond discount intuitively. When Harbor's 8% bonds were issued into a market demanding 10%, investors would not pay $100,000 for $8,000-a-year coupons plus $100,000 in five years — they discounted every one of those future cash flows at 10% and paid only $96,000, the present value. When the stated rate exceeds the market rate, investors pay more than face (a premium), because the coupons are worth more in present-value terms.</p>
      <p>A company reporting a long-term note at its present value is simply saying: "This is what we would have to invest today, at current market rates, to have enough to pay this debt when it comes due." Understanding present value lets you read any long-term liability as a promise translated into today's dollars.</p>
      <div class="callout"><strong>Key idea:</strong> Every long-term liability is a bundle of future cash payments; its balance-sheet value is the present value of that bundle. Discount rates up → present values down.</div>`
    },
    {
      heading: "Measuring Debt: The Debt to Assets Ratio",
      html: `<p>Creditors want to know what share of a company's assets is financed by borrowing versus by owners. The <strong>debt to assets ratio</strong> answers that:</p>
      <div class="formula">Debt to assets ratio = Total liabilities ÷ Total assets</div>
      <p>Example: Summit Company reports total liabilities of $180,000 and total assets of $500,000. Its debt to assets ratio = $180,000 ÷ $500,000 = 0.36, or <strong>36%</strong> — creditors supplied 36 cents of every dollar of assets, and owners (equity) supplied the other 64 cents.</p>
      <p>Interpretation: a higher ratio means more leverage — more risk for creditors, because a larger cushion of assets must cover the debt, and more risk of distress in a downturn. A lower ratio means the company relies more on equity financing. There is no single "good" number; capital-intensive industries (utilities, airlines) normally carry higher ratios than service firms. What matters is the trend over time and the comparison with competitors.</p>
      <p><strong>Section recap.</strong> A liability is a present obligation from a past event; current liabilities come due within a year (or the operating cycle). Day-to-day current liabilities include accounts payable, interest-bearing notes payable, sales taxes collected for the government, unearned revenue owed as future service, and the current portion of long-term debt. Payroll accounting separates employee withholdings (which reduce net pay) from employer payroll taxes (a company expense): FICA, FUTA, and SUTA. Bonds are issued at par, discount, or premium depending on how the stated rate compares with the market rate; the discount or premium is amortized (straight-line here), adjusting interest expense each period. Long-term debt is rooted in present value — the time value of money. And the debt to assets ratio summarizes how much of the company is financed with other people's money.</p>`
    }
  ],
  keyTerms: [
    { term: "Liability", def: "A present obligation to transfer assets or provide services in the future, arising from a past transaction or event." },
    { term: "Current liability", def: "An obligation expected to be settled within one year or the operating cycle, whichever is longer." },
    { term: "Long-term liability", def: "An obligation not due within one year or the operating cycle — for example, bonds payable or long-term notes." },
    { term: "Accounts payable", def: "Amounts owed to suppliers for goods or services purchased on credit in the normal course of business." },
    { term: "Notes payable", def: "A formal written promise to pay a stated amount plus interest on a specified date; may be short- or long-term." },
    { term: "Sales taxes payable", def: "Sales tax collected from customers on behalf of a government; a liability until remitted to the taxing authority." },
    { term: "Unearned revenue", def: "Cash received before goods are delivered or services performed; a liability representing the obligation to perform." },
    { term: "Current maturities of long-term debt", def: "The portion of long-term debt that comes due within the next year, reported as a current liability." },
    { term: "Gross pay", def: "Total compensation earned by an employee before any deductions — wages, salary, overtime, commissions, bonuses." },
    { term: "Net (take-home) pay", def: "Gross pay minus all withholdings; the amount the employee actually receives." },
    { term: "FICA taxes", def: "Federal payroll taxes funding Social Security (6.2% of wages up to a wage base) and Medicare (1.45%); paid by both employee and employer." },
    { term: "Federal income tax withholding", def: "Amounts an employer must deduct from gross pay and remit to the IRS, determined by tax tables." },
    { term: "Employer payroll taxes", def: "Taxes levied on the employer (not the employee): matching FICA, FUTA, and SUTA; recorded as payroll tax expense." },
    { term: "FUTA", def: "Federal Unemployment Tax Act tax — 6.0% on the first $7,000 of each employee's wages, usually reduced to a net 0.6% by a state-tax credit." },
    { term: "SUTA", def: "State Unemployment Tax Act tax — employer-paid unemployment tax whose rate varies by state and employer claims history." },
    { term: "Bond", def: "A long-term debt security sold to investors; the issuer promises periodic interest and repayment of face value at maturity." },
    { term: "Face (par) value", def: "The amount printed on a bond and repaid at maturity — typically $1,000 per bond." },
    { term: "Stated (contract) interest rate", def: "The interest rate printed on the bond that determines the cash interest payments." },
    { term: "Market (effective) interest rate", def: "The rate investors currently demand for bonds of comparable risk; determines the bond's issue price." },
    { term: "Discount on bonds payable", def: "The amount by which face value exceeds the cash received when bonds sell below par; a contra-liability that increases interest expense as amortized." },
    { term: "Premium on bonds payable", def: "The amount by which cash received exceeds face value when bonds sell above par; an adjunct-liability that decreases interest expense as amortized." },
    { term: "Straight-line amortization", def: "Allocating a bond discount or premium evenly over the bond's life: total discount or premium divided by the number of periods." },
    { term: "Carrying (book) value of bonds", def: "Face value minus any unamortized discount (or plus any unamortized premium); the liability's reported amount." },
    { term: "Time value of money", def: "The principle that money available today is worth more than the same amount in the future because it can earn interest." },
    { term: "Present value", def: "The value in today's dollars of an amount to be received or paid in the future, discounted at the market interest rate." },
    { term: "Debt to assets ratio", def: "Total liabilities divided by total assets; the proportion of assets financed by creditors." }
  ],
  video: {
    title: "Free Courses playlist — liabilities & bonds chapters (supplemental)",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLSlzC-HFo7w4zaKMQhAVbBRZJfpTE7Vm_",
    note: "Open this playlist and watch the Complete Financial Accounting Course chapters on current liabilities (payroll, notes, unearned revenue) and long-term liabilities (bonds at par, discount, and premium with amortization). These chapters walk the same journal entries from this module on a whiteboard — pause and work each entry yourself before the solution is shown.",
    more: [
      { title: "Accounting Stuff channel — bite-size topic refreshers", url: "https://www.youtube.com/@AccountingStuff" }
    ]
  },
  assignment: [
    {
      prompt: `<p><strong>1. Interest on a note payable.</strong> On September 1, Nolan Company borrows $30,000 from First Bank by signing a 120-day, 8% note payable. (a) Compute the total interest due at maturity. (b) Give the adjusting entry Nolan makes on September 30.</p>`,
      solution: `<p><strong>Solution.</strong> (a) Interest = Principal × Rate × Time = $30,000 × 8% × (120 ÷ 360) = <strong>$800</strong>. (b) By September 30, 30 days of interest have accrued: $30,000 × 8% × (30 ÷ 360) = $200. Adjusting entry: debit Interest Expense $200, credit Interest Payable $200. This matches 30 days of borrowing cost to September under the matching principle; the remaining $600 will be recorded when the note matures.</p>`
    },
    {
      prompt: `<p><strong>2. Sales taxes payable.</strong> During October, Vega Sporting Goods makes $25,000 of taxable cash sales in a state with a 7% sales tax. Journalize the sales, and then journalize the remittance of the tax to the state.</p>`,
      solution: `<p><strong>Solution.</strong> Sales tax collected = $25,000 × 7% = $1,750. Total cash received = $26,750. Entry: debit Cash $26,750; credit Sales Revenue $25,000; credit Sales Taxes Payable $1,750. The $1,750 is not revenue — Vega collected it as the government's agent. Remittance entry: debit Sales Taxes Payable $1,750; credit Cash $1,750.</p>`
    },
    {
      prompt: `<p><strong>3. Unearned revenue.</strong> On January 1, Prime Consulting receives $12,000 cash for a 6-month consulting contract. (a) Journalize the receipt. (b) Journalize the January 31 adjusting entry. (c) What is the balance of Unearned Service Revenue after the January 31 entry?</p>`,
      solution: `<p><strong>Solution.</strong> (a) January 1: debit Cash $12,000; credit Unearned Service Revenue $12,000 — the cash is received but nothing is earned yet, so it is a liability. (b) One month of service is performed: $12,000 ÷ 6 = $2,000 earned. January 31: debit Unearned Service Revenue $2,000; credit Service Revenue $2,000. (c) Unearned balance = $12,000 − $2,000 = <strong>$10,000</strong> (five months still owed).</p>`
    },
    {
      prompt: `<p><strong>4. Employee payroll computation.</strong> For one week, employee Sam Ortiz earns gross pay of $3,000. Federal income tax withheld is $410. FICA rates are Social Security 6.2% and Medicare 1.45%. (a) Compute Sam's FICA taxes and net pay. (b) Journalize the payroll entry (employee portion only).</p>`,
      solution: `<p><strong>Solution.</strong> (a) Social Security = $3,000 × 6.2% = $186.00. Medicare = $3,000 × 1.45% = $43.50. Total FICA = $229.50. Total withholdings = $410 + $229.50 = $639.50. Net pay = $3,000 − $639.50 = <strong>$2,360.50</strong>. (b) Entry: debit Salaries and Wages Expense $3,000; credit FICA Taxes Payable $229.50; credit Federal Income Taxes Payable $410; credit Salaries and Wages Payable $2,360.50. Footing check: $229.50 + $410 + $2,360.50 = $3,000 — debits equal credits.</p>`
    },
    {
      prompt: `<p><strong>5. Employer payroll taxes.</strong> Using the data from problem 4 (gross pay $3,000): assume FUTA is 0.6% on the first $7,000 of wages and SUTA is 4.0%. (a) Compute total employer payroll tax expense. (b) Journalize the employer's payroll tax entry.</p>`,
      solution: `<p><strong>Solution.</strong> (a) Matching FICA = $229.50 (same as the employee's). FUTA = $3,000 × 0.6% = $18. SUTA = $3,000 × 4.0% = $120. Total employer payroll tax = $229.50 + $18 + $120 = <strong>$367.50</strong>. (b) Entry: debit Payroll Tax Expense $367.50; credit FICA Taxes Payable $229.50; credit FUTA Taxes Payable $18; credit SUTA Taxes Payable $120. These are the company's own taxes — they are never deducted from Sam's paycheck.</p>`
    },
    {
      prompt: `<p><strong>6. Bonds issued at a discount.</strong> On January 1, Apex Corp. issues $200,000 of 10-year, 7% bonds at 94 (the market rate exceeds the stated rate). (a) Journalize the issuance. (b) Using straight-line amortization, journalize the December 31 interest entry. Show the interest expense computation.</p>`,
      solution: `<p><strong>Solution.</strong> (a) Cash received = $200,000 × 94% = $188,000. Discount = $200,000 − $188,000 = $12,000. Issuance: debit Cash $188,000; debit Discount on Bonds Payable $12,000; credit Bonds Payable $200,000. (b) Annual amortization = $12,000 ÷ 10 = $1,200. Cash interest = $200,000 × 7% = $14,000. Interest expense = $14,000 + $1,200 = <strong>$15,200</strong>. Entry: debit Interest Expense $15,200; credit Discount on Bonds Payable $1,200; credit Cash $14,000. The discount amortization raises interest expense above the cash coupon because the bonds sold cheaply.</p>`
    },
    {
      prompt: `<p><strong>7. Bonds issued at a premium.</strong> On January 1, Beacon Inc. issues $200,000 of 10-year, 7% bonds at 103 (the stated rate exceeds the market rate). (a) Journalize the issuance. (b) Using straight-line amortization, journalize the December 31 interest entry. Show the interest expense computation.</p>`,
      solution: `<p><strong>Solution.</strong> (a) Cash received = $200,000 × 103% = $206,000. Premium = $206,000 − $200,000 = $6,000. Issuance: debit Cash $206,000; credit Bonds Payable $200,000; credit Premium on Bonds Payable $6,000. (b) Annual amortization = $6,000 ÷ 10 = $600. Cash interest = $200,000 × 7% = $14,000. Interest expense = $14,000 − $600 = <strong>$13,400</strong>. Entry: debit Interest Expense $13,400; debit Premium on Bonds Payable $600; credit Cash $14,000. Premium amortization lowers interest expense because investors prepaid for the above-market coupon.</p>`
    },
    {
      prompt: `<p><strong>8. Present value intuition (multiple choice).</strong> A company will receive $50,000 three years from now. Which statement is TRUE?</p><p>a) The present value is higher when the discount rate is 10% than when it is 6%.<br>b) The present value is the same regardless of the discount rate.<br>c) The present value is higher when the discount rate is 6% than when it is 10%.<br>d) Present value always equals the face amount of $50,000.</p>`,
      solution: `<p><strong>Solution: c.</strong> Present value = Future value ÷ (1 + rate)<sup>periods</sup>. A higher discount rate shrinks the denominator's reciprocal — i.e., future dollars are discounted more heavily — so the 10% present value is <em>lower</em>, not higher (a is wrong). The rate clearly matters (b is wrong), and present value equals the face amount only at a 0% rate (d is wrong). Intuition: at 6% you must invest more today to reach $50,000 in three years than at 10%, because each dollar grows more slowly.</p>`
    },
    {
      prompt: `<p><strong>9. Debt to assets ratio.</strong> Logan Enterprises reports total liabilities of $240,000 and total assets of $600,000. (a) Compute the debt to assets ratio. (b) A competitor's ratio is 58%. Which company is financed more heavily by creditors, and which is riskier from a creditor's viewpoint?</p>`,
      solution: `<p><strong>Solution.</strong> (a) Debt to assets = $240,000 ÷ $600,000 = <strong>0.40, or 40%</strong> — creditors supplied 40 cents of every asset dollar; equity supplied 60 cents. (b) The competitor (58%) is financed more heavily by creditors. The competitor is riskier from a creditor's viewpoint because a larger share of its assets is already claimed by lenders, leaving a thinner equity cushion if asset values fall.</p>`
    }
  ],
  quiz: [
    {
      q: "Which of the following is a current liability?",
      choices: ["Bonds payable due in five years", "Accounts payable due in 30 days", "A patent with a 10-year life", "Land held for future expansion"],
      answer: 1,
      explanation: "Correct: accounts payable due in 30 days will be settled well within a year, so it is current. Bonds payable due in five years is long-term (choice a is wrong). A patent and land are assets, not liabilities at all (choices c and d are wrong)."
    },
    {
      q: "Tucker Company receives $6,000 cash on April 1 for a 12-month service contract. After 3 months have passed, how much service revenue has been recognized and what is the unearned revenue balance?",
      choices: ["$6,000 recognized; $0 unearned", "$1,500 recognized; $4,500 unearned", "$4,500 recognized; $1,500 unearned", "$500 recognized; $5,500 unearned"],
      answer: 1,
      explanation: "Correct: $6,000 ÷ 12 = $500 earned per month; 3 months × $500 = $1,500 recognized, leaving $6,000 − $1,500 = $4,500 unearned. Choice a wrongly treats the whole contract as earned at receipt. Choice c reverses the numbers. Choice d uses only one month of earning."
    },
    {
      q: "Employee gross pay is $2,500 for the week. Federal income tax withheld is $300. FICA is 6.2% Social Security and 1.45% Medicare. What is net pay?",
      choices: ["$2,200.00", "$2,008.75", "$2,191.25", "$1,900.00"],
      answer: 1,
      explanation: "Correct: FICA = $2,500 × 7.65% = $191.25 (Social Security $155 + Medicare $36.25). Net pay = $2,500 − $300 − $191.25 = $2,008.75. Choice a subtracts only the income tax, forgetting FICA. Choice c subtracts FICA from gross but forgets the income tax withholding. Choice d has no basis in the numbers."
    },
    {
      q: "Which payroll tax is an employer expense that is NEVER deducted from the employee's gross pay?",
      choices: ["Employee Social Security tax", "Federal income tax withholding", "FUTA tax", "State income tax withholding"],
      answer: 2,
      explanation: "Correct: FUTA is levied on the employer and recorded as payroll tax expense; it never reduces the employee's check. Employee Social Security tax and both income-tax withholdings (choices a, b, d) are all deducted from gross pay to arrive at net pay."
    },
    {
      q: "Bonds are issued at a discount when:",
      choices: ["The stated rate equals the market rate", "The stated rate exceeds the market rate", "The stated rate is less than the market rate", "The bonds are repaid before maturity"],
      answer: 2,
      explanation: "Correct: when the stated rate is below the market rate, investors will not pay full face value, so the bonds sell at a discount. If rates are equal the bonds sell at par (choice a is wrong); if the stated rate exceeds the market rate investors pay a premium (choice b is wrong). Early repayment (choice d) does not determine the issue price."
    },
    {
      q: "Under straight-line amortization of a bond discount, each period's interest expense is:",
      choices: ["Equal to the cash interest paid", "Greater than the cash interest paid", "Less than the cash interest paid", "Zero, because the discount is a loss"],
      answer: 1,
      explanation: "Correct: amortizing the discount adds to interest expense, so expense = cash interest + amortization > cash interest. Choice a describes bonds issued at par (no discount to amortize). Choice c describes premium amortization, which reduces expense. Choice d is wrong — the discount is not an immediate loss; it is additional interest cost spread over the bond's life."
    },
    {
      q: "A company is owed $10,000 due in 4 years. The present value of that $10,000 is HIGHER when the discount rate is:",
      choices: ["12%, because higher rates grow money faster", "8%, because a lower rate discounts future dollars less", "The same at any rate", "Indeterminate without the face value"],
      answer: 1,
      explanation: "Correct: present value = future value ÷ (1 + rate)^periods, so a lower discount rate (8%) produces a higher present value. Choice a confuses future value growth with present value discounting — 12% makes today's equivalent smaller, not larger. Choice c ignores the rate entirely, and choice d is wrong because the $10,000 future amount is already given."
    },
    {
      q: "Marsh Company has total liabilities of $150,000 and total assets of $500,000. Its debt to assets ratio is 30%. Compared with a competitor at 65%, Marsh is:",
      choices: ["More leveraged and riskier to creditors", "Less leveraged and less risky to creditors", "Unable to pay its current liabilities", "Guaranteed to earn a higher return on equity"],
      answer: 1,
      explanation: "Correct: 30% < 65%, so Marsh uses less creditor financing — less leverage and less risk to creditors, who enjoy a thicker equity cushion. Choice a reverses the comparison. Choice c confuses this solvency ratio with liquidity (current ratio). Choice d is wrong: lower leverage does not guarantee higher ROE; leverage can magnify ROE but also magnifies risk."
    }
  ],
  studyGuide: `<h3>M10 — Liabilities: Quick Reference</h3>
  <p><strong>Liability:</strong> present obligation from a past event. <strong>Current</strong> = due within 1 year or operating cycle; <strong>long-term</strong> = due later. The next year's slice of long-term debt is reclassified as <strong>current maturities</strong>.</p>
  <p><strong>Interest = Principal × Rate × Time</strong> (use 360 days for bank notes). Accrue interest at period-end to match expense to the period.</p>
  <p><strong>Sales taxes collected</strong> are a liability (Sales Taxes Payable), not revenue. <strong>Unearned revenue</strong> = cash received before performing; recognize revenue as the work is done.</p>
  <p><strong>Payroll:</strong> Net pay = Gross pay − FICA (7.65%) − income tax withholding − other deductions. <strong>Employer</strong> payroll taxes (matching FICA, FUTA ≈ 0.6% on first $7,000, SUTA) are a company expense — never deducted from the employee.</p>
  <p><strong>Bonds:</strong> stated rate = market rate → par; stated &lt; market → <strong>discount</strong> (expense ↑); stated &gt; market → <strong>premium</strong> (expense ↓). Straight-line amortization = discount or premium ÷ periods. Carrying value = face − discount (+ premium); it glides to face value at maturity.</p>
  <p><strong>Time value of money:</strong> a dollar today &gt; a dollar tomorrow. PV = FV ÷ (1 + r)<sup>n</sup>. Bond prices are present values of future coupons + face.</p>
  <p><strong>Debt to assets = Total liabilities ÷ Total assets.</strong> Higher = more leverage = more creditor risk. Compare trends and competitors, not just one number.</p>`
}
