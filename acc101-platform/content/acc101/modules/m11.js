module.exports = {
  number: 11,
  slug: "stockholders-equity",
  title: "Stockholders' Equity",
  estTime: "3–4 hours",
  objectives: [
    "Describe the corporation's characteristics, advantages, and disadvantages.",
    "Distinguish authorized, issued, and outstanding shares of stock.",
    "Contrast common stock and preferred stock.",
    "Journalize the issuance of stock for cash and for noncash assets.",
    "Account for cash dividends, including the declaration, record, and payment dates.",
    "Distinguish stock dividends from stock splits and account for each.",
    "Account for treasury stock using the cost method.",
    "Compute basic earnings per share."
  ],
  sections: [
    {
      heading: "The Corporation: Advantages and Disadvantages",
      html: `<p>A <strong>corporation</strong> is a business organized as a separate legal entity — it can own property, sign contracts, sue and be sued, and live on beyond its founders. Ownership is divided into transferable shares of stock, and the owners (stockholders) elect a board of directors that sets policy and hires management.</p>
      <p><strong>Advantages.</strong> The most famous is <strong>limited liability</strong>: stockholders can lose no more than their investment, even if the corporation fails owing millions. Corporations also enjoy <strong>ease of raising capital</strong> (sell more shares to the public), <strong>easy transfer of ownership</strong> (sell your shares without disrupting the business), <strong>continuous life</strong> (the corporation does not die with a founder), and professional management.</p>
      <p><strong>Disadvantages.</strong> The biggest is <strong>double taxation</strong>: the corporation pays income tax on its earnings, and stockholders pay tax again on dividends received. Corporations also face heavier government regulation, higher formation costs, and the separation of ownership from management (managers may pursue goals owners would not).</p>
      <p>Three share counts matter, and students constantly mix them up. <strong>Authorized shares</strong> are the maximum the corporate charter allows the company to sell. <strong>Issued shares</strong> are the authorized shares actually sold to investors. <strong>Outstanding shares</strong> are issued shares currently held by stockholders — issued shares minus any shares the company has repurchased (treasury stock). Example: a charter authorizes 100,000 shares; the company issues 40,000; later it buys back 5,000 as treasury stock. Outstanding = 40,000 − 5,000 = <strong>35,000</strong>. Dividends and earnings per share are always based on outstanding shares.</p>
      <div class="callout"><strong>Key idea:</strong> Authorized ≥ issued ≥ outstanding. Only outstanding shares vote, receive dividends, and count in earnings per share.</div>
      <div class="mistake"><strong>Common mistake:</strong> Computing dividends or EPS on issued shares. Treasury shares are not outstanding — they get no dividends and no vote. Always subtract treasury stock first.</div>`
    },
    {
      heading: "Common Stock vs Preferred Stock",
      html: `<p><strong>Common stock</strong> is the basic, residual ownership of the corporation. Common stockholders vote for directors, share in any dividends the board declares, and claim whatever assets remain after all creditors and preferred stockholders are paid in liquidation. Because they are last in line, common stock carries the most risk — and the most upside.</p>
      <p><strong>Preferred stock</strong> is a hybrid: it has some features of stock and some of debt. Preferred stockholders generally do <em>not</em> vote, but they have <strong>preference</strong> in two ways: (1) they receive dividends before common stockholders get anything, and (2) they are paid before common stockholders in liquidation. Preferred stock usually carries a fixed dividend rate stated as a percentage of par value — for example, "8%, $50 par preferred" pays $4.00 per share per year ($50 × 8%), but only if the board declares dividends.</p>
      <p>Many preferred issues are <strong>cumulative</strong>: if the board skips a dividend in a lean year, the unpaid amount (<strong>dividends in arrears</strong>) accumulates and must be paid to preferred stockholders before any common dividend in later years. Noncumulative preferred loses the skipped dividend forever.</p>
      <p><strong>Worked example — cumulative preferred dividends.</strong> Lowell Corp. has 2,000 shares of 6%, $100 par cumulative preferred stock outstanding, and no dividends were declared in 2025. In 2026 the board declares a $40,000 dividend. The annual preferred dividend = 2,000 × $100 × 6% = $12,000. Arrears from 2025 = $12,000. Preferred stockholders first receive $12,000 (2025 arrears) + $12,000 (2026) = $24,000; common stockholders receive the remaining $40,000 − $24,000 = <strong>$16,000</strong>.</p>
      <div class="callout"><strong>Key idea:</strong> Preferred stock trades voting power and upside for priority. Dividends are never automatic — the board must declare them — but cumulative preferred remembers what it was promised.</div>`
    },
    {
      heading: "Issuing Stock for Cash and Noncash Assets",
      html: `<p>When a corporation sells stock, it debits the asset received and credits stockholders' equity. Stock usually has a <strong>par value</strong> — a nominal amount printed on the certificate (often $0.01 or $1) that sets the legal capital per share. Amounts received above par are credited to <strong>Paid-In Capital in Excess of Par Value</strong>. The total paid-in capital is par value plus the excess.</p>
      <p><strong>Worked example — stock issued for cash.</strong> On March 1, Dana Inc. issues 10,000 shares of $1 par common stock for $5 per share cash. Cash received = 10,000 × $5 = $50,000. Par value credited = 10,000 × $1 = $10,000. Excess = $40,000:</p>
      <table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
      <tr><td>Mar. 1</td><td>Cash</td><td class="num">50,000</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Common Stock (10,000 × $1)</td><td class="num"></td><td class="num">10,000</td></tr>
      <tr><td></td><td class="indent">Paid-In Capital in Excess of Par — Common</td><td class="num"></td><td class="num">40,000</td></tr>
      </tbody></table>
      <p>Preferred stock works identically, with its own accounts: issuing 1,000 shares of $50 par preferred at $55 brings in $55,000 — debit Cash $55,000; credit Preferred Stock $50,000; credit Paid-In Capital in Excess of Par — Preferred $5,000.</p>
      <p><strong>Worked example — stock issued for noncash assets.</strong> On April 10, Dana issues 2,000 shares of $1 par common stock to acquire equipment. The equipment's fair market value is $12,000, which is the more clearly determinable value. The rule: record the asset at its fair value and credit equity for the same total:</p>
      <table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
      <tr><td>Apr. 10</td><td>Equipment</td><td class="num">12,000</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Common Stock (2,000 × $1)</td><td class="num"></td><td class="num">2,000</td></tr>
      <tr><td></td><td class="indent">Paid-In Capital in Excess of Par — Common</td><td class="num"></td><td class="num">10,000</td></tr>
      </tbody></table>
      <p>Notice what is <em>not</em> recorded: the market price of the stock on that day is irrelevant when the asset's fair value is known. And no gain or loss is recognized on issuing a company's own stock — a corporation never reports profit from trading in its own shares.</p>
      <div class="mistake"><strong>Common mistake:</strong> Crediting the entire cash received to Common Stock. Only par value goes to the Common Stock account; everything above par is paid-in capital in excess of par. The Common Stock balance therefore always equals shares issued × par value.</div>`
    },
    {
      heading: "Cash Dividends: Declaration, Record, and Payment",
      html: `<p>A <strong>cash dividend</strong> is a distribution of earnings to stockholders, and it requires a formal board vote. Three dates matter:</p>
      <ul>
      <li><strong>Declaration date:</strong> the board declares the dividend. The company now owes it — record the liability.</li>
      <li><strong>Record date:</strong> the company lists who owns the stock and will receive the dividend. No journal entry — the total liability is unchanged; only the list of recipients is fixed.</li>
      <li><strong>Payment date:</strong> cash goes out and the liability is removed.</li>
      </ul>
      <p><strong>Worked example — cash dividend entries.</strong> On June 1, the board of Dana Inc. declares a $0.50 per share cash dividend on its 12,000 outstanding common shares, payable July 15 to stockholders of record June 20. Total dividend = 12,000 × $0.50 = $6,000.</p>
      <table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
      <tr><td>June 1</td><td>Cash Dividends (or Dividends)</td><td class="num">6,000</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Dividends Payable</td><td class="num"></td><td class="num">6,000</td></tr>
      <tr><td>June 20</td><td colspan="3">(Record date — no entry)</td></tr>
      <tr><td>July 15</td><td>Dividends Payable</td><td class="num">6,000</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">6,000</td></tr>
      </tbody></table>
      <p>Cash Dividends is a contra-equity account closed to Retained Earnings at year-end — dividends reduce retained earnings but are never an expense. Why does this matter? Because an expense would reduce net income, and paying dividends is a distribution of income already earned, not a cost of earning it.</p>
      <div class="callout"><strong>Key idea:</strong> Declaration creates the liability; the record date creates no entry; payment extinguishes the liability. Between declaration and payment, Dividends Payable sits in current liabilities.</div>`
    },
    {
      heading: "Stock Dividends vs Stock Splits",
      html: `<p>Companies sometimes distribute additional shares instead of cash. A <strong>stock dividend</strong> gives existing stockholders extra shares — for example, a 10% stock dividend gives each holder 1 new share for every 10 held. A <strong>stock split</strong> (say, 2-for-1) also increases shares outstanding, but splits are larger, apply to all shares including treasury, and reduce par value proportionally.</p>
      <p>The accounting differs sharply. A <strong>small stock dividend</strong> (generally under 20–25%) is recorded at the shares' <strong>market value</strong> on the declaration date: debit Stock Dividends for market value, credit Common Stock Distributable for par value, and credit Paid-In Capital in Excess of Par for the difference. It moves amounts within equity — total equity does not change.</p>
      <p><strong>Worked example — 10% stock dividend.</strong> Dana Inc. has 12,000 shares of $1 par common outstanding; the market price is $8 on the declaration date. New shares = 12,000 × 10% = 1,200 shares. Market value = 1,200 × $8 = $9,600. Par value = 1,200 × $1 = $1,200. Excess = $8,400:</p>
      <table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
      <tr><td>Aug. 1</td><td>Stock Dividends</td><td class="num">9,600</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Common Stock Distributable</td><td class="num"></td><td class="num">1,200</td></tr>
      <tr><td></td><td class="indent">Paid-In Capital in Excess of Par — Common</td><td class="num"></td><td class="num">8,400</td></tr>
      <tr><td>Aug. 20</td><td>Common Stock Distributable</td><td class="num">1,200</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Common Stock</td><td class="num"></td><td class="num">1,200</td></tr>
      </tbody></table>
      <p>After the dividend, outstanding shares = 13,200. Retained earnings fell by $9,600, paid-in capital rose by $9,600 — total stockholders' equity is identical. Each stockholder owns more shares, but the same percentage of the company: economically, it is like cutting a pizza into more slices.</p>
      <p>A <strong>stock split</strong> requires <strong>no journal entry at all</strong> — it is recorded only in a memorandum. In a 2-for-1 split, Dana's 12,000 $1-par shares become 24,000 $0.50-par shares. Par value per share halves, shares double, and every equity account balance stays exactly the same. Companies split stock mainly to bring the per-share price into a more affordable trading range.</p>
      <div class="callout"><strong>Key idea:</strong> Stock dividend = journal entry at market value, equity total unchanged. Stock split = memo entry only, par value per share changes, everything else unchanged. Neither creates or destroys value.</div>
      <div class="mistake"><strong>Common mistake:</strong> Recording a stock split with a journal entry, or valuing a small stock dividend at par. Splits get a memo; small stock dividends are recorded at market value, not par.</div>`
    },
    {
      heading: "Treasury Stock: The Cost Method",
      html: `<p><strong>Treasury stock</strong> is a corporation's own stock that it has issued and later reacquired. It is not an asset — the company cannot own itself — so it is reported as a <strong>contra-equity</strong> account (a deduction within stockholders' equity). Treasury shares are not outstanding: they receive no dividends, carry no vote, and are excluded from EPS.</p>
      <p>Under the <strong>cost method</strong> (the method GAAP companies overwhelmingly use), treasury stock is recorded at its repurchase cost, regardless of par value:</p>
      <p><strong>Worked example — purchase and reissue.</strong> On September 1, Dana Inc. buys 1,000 of its own $1 par shares on the open market at $6 per share: debit Treasury Stock $6,000 (1,000 × $6), credit Cash $6,000. Total equity falls by $6,000.</p>
      <table class="jentry"><thead><tr><th>Date</th><th>Account Titles</th><th>Debit</th><th>Credit</th></tr></thead><tbody>
      <tr><td>Sept. 1</td><td>Treasury Stock</td><td class="num">6,000</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Cash</td><td class="num"></td><td class="num">6,000</td></tr>
      <tr><td>Oct. 15</td><td>Cash (400 × $8)</td><td class="num">3,200</td><td class="num"></td></tr>
      <tr><td></td><td class="indent">Treasury Stock (400 × $6 cost)</td><td class="num"></td><td class="num">2,400</td></tr>
      <tr><td></td><td class="indent">Paid-In Capital from Treasury Stock</td><td class="num"></td><td class="num">800</td></tr>
      </tbody></table>
      <p>On October 15, Dana reissues 400 treasury shares at $8. Cash received ($3,200) exceeds the $2,400 cost; the $800 difference is credited to Paid-In Capital from Treasury Stock — never to a gain account. A corporation records no profit or loss on its own stock. If the reissue price had been below cost, the shortfall would first reduce any existing Paid-In Capital from Treasury Stock, then Retained Earnings.</p>
      <p>After these transactions, Dana holds 600 treasury shares at $6 = $3,600, reported as a deduction in the equity section. Why buy back stock? To boost EPS by shrinking shares outstanding, to have shares ready for employee plans, or because management believes the stock is undervalued.</p>
      <div class="callout"><strong>Key idea:</strong> Treasury stock is equity going backward — a contra-equity at cost. Reissuing above cost creates paid-in capital, never a gain; reissuing below cost eats paid-in capital, never a loss.</div>`
    },
    {
      heading: "Retained Earnings and Basic Earnings per Share",
      html: `<p><strong>Retained earnings</strong> is the cumulative net income a corporation has kept (not distributed as dividends) over its life. Each period it updates by a simple roll-forward:</p>
      <div class="formula">Ending retained earnings = Beginning retained earnings + Net income − Dividends</div>
      <p>Example: Dana begins the year with retained earnings of $85,000, earns net income of $44,000, declares $6,000 of cash dividends and a $9,600 stock dividend. Ending retained earnings = $85,000 + $44,000 − $6,000 − $9,600 = <strong>$113,400</strong>. Both cash and stock dividends reduce retained earnings. A debit balance — an accumulated deficit — signals cumulative losses exceeding cumulative profits.</p>
      <p>Investors judge performance per share with <strong>basic earnings per share (EPS)</strong>:</p>
      <div class="formula">Basic EPS = (Net income − Preferred dividends) ÷ Weighted-average common shares outstanding</div>
      <p>Preferred dividends are subtracted because that slice of earnings belongs to preferred stockholders, not common. The denominator is a weighted average because shares outstanding can change during the year.</p>
      <p><strong>Worked example — EPS.</strong> Dana reports net income of $60,000. It paid $5,000 of preferred dividends. Weighted-average common shares outstanding for the year are 12,000. EPS = ($60,000 − $5,000) ÷ 12,000 = $55,000 ÷ 12,000 = <strong>$4.58 per share</strong> (rounded). This tells a common stockholder: each of your shares "earned" $4.58 this year.</p>
      <p>EPS appears at the bottom of the income statement and is one of the most quoted numbers in business — but it is not cash, and it can be managed (for instance, by buying treasury stock to shrink the denominator). Always read it alongside the full statements.</p>
      <p><strong>Section recap.</strong> The corporation's signature traits are limited liability, easy capital-raising and transferability, continuous life — paid for with double taxation, regulation, and cost. Authorized shares are the ceiling, issued shares are sold, outstanding shares are held by investors (issued minus treasury). Preferred stock gets dividend and liquidation priority (often cumulative) in exchange for giving up voting and upside. Issuing stock credits par value to the stock account and the rest to paid-in capital in excess of par — for cash or for noncash assets at fair value. Cash dividends are declared (liability recorded), recorded (no entry), and paid (liability removed); they reduce retained earnings, never net income. Small stock dividends are journalized at market value; stock splits get only a memo. Treasury stock under the cost method is a contra-equity at repurchase cost, with reissue differences flowing to paid-in capital. Retained earnings rolls forward with net income minus dividends, and basic EPS measures earnings available to each common share.</p>
      <div class="mistake"><strong>Common mistake:</strong> Subtracting preferred dividends from net income twice, or forgetting to subtract them at all, in EPS. The numerator is earnings available to <em>common</em> stockholders — preferred claims come out first.</div>`
    }
  ],
  keyTerms: [
    { term: "Corporation", def: "A business organized as a separate legal entity; ownership is divided into transferable shares of stock." },
    { term: "Limited liability", def: "Stockholders can lose no more than their investment, regardless of the corporation's debts." },
    { term: "Double taxation", def: "Corporate earnings are taxed at the corporate level and again as dividends at the stockholder level." },
    { term: "Authorized shares", def: "The maximum number of shares a corporation's charter permits it to issue." },
    { term: "Issued shares", def: "Authorized shares that have actually been sold to investors." },
    { term: "Outstanding shares", def: "Issued shares currently held by stockholders — issued shares minus treasury stock." },
    { term: "Common stock", def: "The basic residual ownership of a corporation: voting rights, variable dividends, last claim in liquidation." },
    { term: "Preferred stock", def: "Stock with dividend and liquidation preference over common stock, usually nonvoting with a fixed dividend rate." },
    { term: "Cumulative preferred stock", def: "Preferred stock on which skipped dividends accumulate as dividends in arrears that must be paid before any common dividend." },
    { term: "Dividends in arrears", def: "Unpaid cumulative preferred dividends from prior periods that must be satisfied before common dividends." },
    { term: "Par value", def: "A nominal amount printed on a stock certificate that establishes legal capital per share." },
    { term: "Paid-in capital in excess of par", def: "Amounts received from issuing stock above par value; part of paid-in capital." },
    { term: "Cash dividend", def: "A distribution of earnings to stockholders in cash, requiring board declaration." },
    { term: "Declaration date", def: "The date the board declares a dividend; the company records the liability." },
    { term: "Record date", def: "The date determining which stockholders receive a declared dividend; no journal entry." },
    { term: "Payment date", def: "The date a declared dividend is paid in cash; the liability is removed." },
    { term: "Stock dividend", def: "A distribution of additional shares to existing stockholders, recorded at market value for small dividends." },
    { term: "Stock split", def: "An increase in shares outstanding with a proportional reduction in par value; recorded by memorandum only." },
    { term: "Treasury stock", def: "A corporation's own issued stock that it has reacquired; a contra-equity account." },
    { term: "Cost method", def: "Recording treasury stock at its repurchase cost and reissue differences through paid-in capital." },
    { term: "Retained earnings", def: "Cumulative net income kept in the business rather than distributed as dividends." },
    { term: "Basic earnings per share (EPS)", def: "(Net income − preferred dividends) ÷ weighted-average common shares outstanding." }
  ],
  video: {
    title: "Free Courses playlist — corporations & equity chapters (supplemental)",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLSlzC-HFo7w4zaKMQhAVbBRZJfpTE7Vm_",
    note: "Open this playlist and watch the Complete Financial Accounting Course chapters on corporations and stockholders' equity: issuing stock, cash and stock dividends, treasury stock, and retained earnings. Work the journal entries alongside the video — especially the treasury stock reissue, where the difference goes to paid-in capital rather than a gain.",
    more: [
      { title: "Accounting Stuff channel — bite-size topic refreshers", url: "https://www.youtube.com/@AccountingStuff" }
    ]
  },
  assignment: [
    {
      prompt: `<p><strong>1. Corporate characteristics (multiple choice).</strong> Which of the following is an ADVANTAGE of the corporate form of organization?</p><p>a) Double taxation of earnings<br>b) Limited liability of stockholders<br>c) Separation of ownership and management<br>d) Higher government regulation</p>`,
      solution: `<p><strong>Solution: b.</strong> Limited liability — stockholders can lose no more than their investment — is the corporation's signature advantage. Double taxation (a), separation of ownership and management (c), and heavier regulation (d) are all disadvantages of the corporate form.</p>`
    },
    {
      prompt: `<p><strong>2. Share counts.</strong> Benton Corp.'s charter authorizes 200,000 shares of common stock. It has issued 90,000 shares and holds 8,000 shares as treasury stock. How many shares are outstanding? Explain what each count means.</p>`,
      solution: `<p><strong>Solution.</strong> Outstanding = issued − treasury = 90,000 − 8,000 = <strong>82,000 shares</strong>. Authorized (200,000) is the charter ceiling — the most Benton may ever sell. Issued (90,000) is what has actually been sold. Outstanding (82,000) is what investors currently hold; only these vote, receive dividends, and count in EPS. The 118,000 unissued authorized shares remain available for future sale.</p>`
    },
    {
      prompt: `<p><strong>3. Issuing common stock for cash.</strong> On May 1, Kline Inc. issues 20,000 shares of $0.50 par common stock for $3 per share cash. Journalize the issuance and state the balances that result in the Common Stock and Paid-In Capital in Excess of Par accounts.</p>`,
      solution: `<p><strong>Solution.</strong> Cash received = 20,000 × $3 = $60,000. Par value = 20,000 × $0.50 = $10,000. Excess = $50,000. Entry: debit Cash $60,000; credit Common Stock $10,000; credit Paid-In Capital in Excess of Par — Common $50,000. Only par value lands in the Common Stock account; the $50,000 premium over par is separate paid-in capital. Total paid-in capital from this issue = $60,000.</p>`
    },
    {
      prompt: `<p><strong>4. Issuing stock for a noncash asset.</strong> On June 10, Kline issues 5,000 shares of $0.50 par common stock to purchase land. The land's appraised fair value is $28,000, which is more clearly determinable than the stock's market value. Journalize the purchase.</p>`,
      solution: `<p><strong>Solution.</strong> Record the land at its $28,000 fair value. Par value of shares = 5,000 × $0.50 = $2,500; excess = $25,500. Entry: debit Land $28,000; credit Common Stock $2,500; credit Paid-In Capital in Excess of Par — Common $25,500. No gain or loss is recognized — a corporation never reports profit from issuing its own stock.</p>`
    },
    {
      prompt: `<p><strong>5. Cumulative preferred dividends.</strong> Fargo Corp. has 3,000 shares of 5%, $40 par cumulative preferred stock outstanding. No dividends were declared in 2024. In 2025 the board declares a $30,000 dividend. How much goes to preferred stockholders and how much to common stockholders?</p>`,
      solution: `<p><strong>Solution.</strong> Annual preferred dividend = 3,000 × $40 × 5% = $6,000. Because the preferred is cumulative, the skipped 2024 dividend ($6,000 of dividends in arrears) must be paid first: preferred receives $6,000 (2024) + $6,000 (2025) = <strong>$12,000</strong>. Common stockholders receive $30,000 − $12,000 = <strong>$18,000</strong>. If the preferred were noncumulative, the 2024 dividend would be lost and preferred would receive only $6,000.</p>`
    },
    {
      prompt: `<p><strong>6. Cash dividend entries.</strong> On November 1, the board of Milo Inc. declares a $0.40 per share cash dividend on 25,000 outstanding common shares, payable December 10 to stockholders of record November 22. Journalize the declaration and the payment, and explain the record-date treatment.</p>`,
      solution: `<p><strong>Solution.</strong> Total dividend = 25,000 × $0.40 = $10,000. November 1 (declaration): debit Cash Dividends $10,000; credit Dividends Payable $10,000 — the liability is born. November 22 (record date): no entry; the company merely fixes the recipient list. December 10 (payment): debit Dividends Payable $10,000; credit Cash $10,000. Cash Dividends is closed to Retained Earnings at year-end; dividends are a distribution of earnings, never an expense.</p>`
    },
    {
      prompt: `<p><strong>7. Stock dividend vs stock split.</strong> (a) Hale Inc. has 50,000 shares of $2 par common outstanding, market price $30. It declares a 10% stock dividend. Journalize the declaration. (b) Instead, Hale executes a 2-for-1 stock split. What entry is made, and what are the new par value and shares outstanding?</p>`,
      solution: `<p><strong>Solution.</strong> (a) New shares = 50,000 × 10% = 5,000. Market value = 5,000 × $30 = $150,000; par = 5,000 × $2 = $10,000; excess = $140,000. Entry: debit Stock Dividends $150,000; credit Common Stock Distributable $10,000; credit Paid-In Capital in Excess of Par $140,000. (On distribution: debit Common Stock Distributable $10,000; credit Common Stock $10,000.) Total equity is unchanged — $150,000 moves from retained earnings to paid-in capital. (b) A stock split gets <strong>no journal entry</strong> — memorandum only. Shares become 100,000 and par value becomes $1. Every account balance stays the same; each stockholder simply holds twice as many shares at half the par.</p>`
    },
    {
      prompt: `<p><strong>8. Treasury stock (cost method).</strong> On July 1, Rex Corp. purchases 2,000 of its own $1 par shares at $9 per share. On August 15 it reissues 800 of those shares at $11 per share. Journalize both transactions and state the remaining treasury stock balance.</p>`,
      solution: `<p><strong>Solution.</strong> July 1: debit Treasury Stock $18,000 (2,000 × $9); credit Cash $18,000 — recorded at cost, ignoring par value. August 15: cash received = 800 × $11 = $8,800; cost removed = 800 × $9 = $7,200; difference = $1,600. Entry: debit Cash $8,800; credit Treasury Stock $7,200; credit Paid-In Capital from Treasury Stock $1,600. The $1,600 is paid-in capital, never a gain. Remaining treasury stock = 1,200 shares × $9 = <strong>$10,800</strong> debit (contra-equity).</p>`
    },
    {
      prompt: `<p><strong>9. Retained earnings and EPS.</strong> Otto Inc. begins 2026 with retained earnings of $120,000. During 2026 it earns net income of $75,000, pays $8,000 of preferred dividends, and declares $20,000 of common cash dividends. Weighted-average common shares outstanding are 30,000. (a) Compute ending retained earnings. (b) Compute basic EPS.</p>`,
      solution: `<p><strong>Solution.</strong> (a) Ending retained earnings = $120,000 + $75,000 − $20,000 = <strong>$175,000</strong>. Note the preferred dividends do not reduce retained earnings separately here — they are already subtracted in arriving at net income of $75,000. (b) EPS = (Net income − preferred dividends) ÷ weighted-average shares = ($75,000 − $8,000) ÷ 30,000 = $67,000 ÷ 30,000 = <strong>$2.23 per share</strong> (rounded). The numerator removes the preferred stockholders' claim, leaving earnings available to common shares.</p>`
    }
  ],
  quiz: [
    {
      q: "Which of the following is a disadvantage of the corporate form?",
      choices: ["Limited liability of stockholders", "Continuous life", "Double taxation of earnings", "Ease of transferring ownership"],
      answer: 2,
      explanation: "Correct: earnings are taxed at the corporate level and again as dividends to stockholders — double taxation. Limited liability (a), continuous life (b), and easy transfer of ownership (d) are all advantages of the corporate form."
    },
    {
      q: "A charter authorizes 500,000 shares; 180,000 shares have been issued; 15,000 shares are held as treasury stock. How many shares are outstanding?",
      choices: ["500,000", "180,000", "165,000", "195,000"],
      answer: 2,
      explanation: "Correct: outstanding = issued − treasury = 180,000 − 15,000 = 165,000. Choice a is the authorized ceiling, not what investors hold. Choice b forgets to subtract treasury stock. Choice d incorrectly adds treasury shares instead of subtracting them."
    },
    {
      q: "Which statement about preferred stock is TRUE?",
      choices: ["Preferred stockholders always have voting rights", "Preferred dividends are guaranteed even if not declared", "Preferred stockholders are paid before common stockholders in liquidation", "Preferred stock carries more risk than common stock"],
      answer: 2,
      explanation: "Correct: preferred stock has liquidation preference over common. Preferred stockholders generally do not vote (a is wrong). Dividends must be declared by the board — they are never automatic (b is wrong); only cumulative preferred accumulates skipped dividends. Preferred is less risky than common because of its priority claims (d is wrong)."
    },
    {
      q: "A corporation issues 4,000 shares of $2 par common stock for $10 per share cash. The correct entry credits:",
      choices: ["Common Stock for $40,000", "Common Stock for $8,000 and Paid-In Capital in Excess of Par for $32,000", "Paid-In Capital in Excess of Par for $40,000", "Common Stock for $10,000"],
      answer: 1,
      explanation: "Correct: Common Stock gets par value only — 4,000 × $2 = $8,000 — and the $32,000 excess (4,000 × $8) goes to Paid-In Capital in Excess of Par. Choice a credits the whole proceeds to Common Stock, misstating legal capital. Choice c omits the Common Stock credit entirely. Choice d uses a wrong par computation."
    },
    {
      q: "The board declares a cash dividend on May 1, payable June 15 to stockholders of record May 20. On which date is a journal entry recorded that creates a liability?",
      choices: ["May 1, the declaration date", "May 20, the record date", "June 15, the payment date", "No liability is ever recorded"],
      answer: 0,
      explanation: "Correct: the declaration creates the obligation — debit Cash Dividends, credit Dividends Payable. The record date involves no entry (b is wrong) because the total owed does not change. The payment date removes the liability with cash (c is wrong), and choice d ignores the declaration entry entirely."
    },
    {
      q: "A company executes a 3-for-1 stock split. Which is TRUE?",
      choices: ["Total stockholders' equity increases", "A journal entry debits Retained Earnings at market value", "Only a memorandum entry is made; par value per share falls to one-third", "Each stockholder's ownership percentage triples"],
      answer: 2,
      explanation: "Correct: splits get a memo entry only; shares triple and par value per share is cut to one-third, with all account balances unchanged. Total equity does not change (a is wrong) — that describes neither splits nor stock dividends. Choice b describes a small stock dividend, not a split. Each holder's percentage ownership is unchanged (d is wrong) — the pizza is cut into more slices, but everyone keeps the same share of it."
    },
    {
      q: "Under the cost method, when treasury stock is reissued above its cost, the excess is credited to:",
      choices: ["Gain on Sale of Treasury Stock", "Retained Earnings", "Paid-In Capital from Treasury Stock", "Treasury Stock"],
      answer: 2,
      explanation: "Correct: the excess over cost goes to Paid-In Capital from Treasury Stock. A corporation never reports a gain on its own stock (a is wrong). Retained earnings (b) is only touched if the reissue is below cost and no paid-in capital from treasury exists. Crediting Treasury Stock (d) is wrong because treasury stock is removed at its cost, not at the reissue price."
    },
    {
      q: "Net income is $90,000, preferred dividends are $10,000, and weighted-average common shares outstanding are 40,000. Basic EPS is:",
      choices: ["$2.25", "$2.00", "$2.50", "$1.75"],
      answer: 1,
      explanation: "Correct: ($90,000 − $10,000) ÷ 40,000 = $80,000 ÷ 40,000 = $2.00. Choice a forgets to subtract preferred dividends ($90,000 ÷ 40,000). Choice c adds preferred dividends instead of subtracting. Choice d has no valid computation behind it."
    }
  ],
  studyGuide: `<h3>M11 — Stockholders' Equity: Quick Reference</h3>
  <p><strong>Corporation:</strong> separate legal entity. Advantages: limited liability, easy capital-raising, transferability, continuous life. Disadvantages: double taxation, regulation, cost, ownership/management separation.</p>
  <p><strong>Shares:</strong> authorized (ceiling) ≥ issued (sold) ≥ outstanding (held by investors = issued − treasury). Dividends and EPS use <em>outstanding</em> shares only.</p>
  <p><strong>Common:</strong> voting, residual claim, most risk/return. <strong>Preferred:</strong> dividend + liquidation priority, usually nonvoting, fixed rate; <strong>cumulative</strong> preferred accumulates skipped dividends as <strong>arrears</strong>.</p>
  <p><strong>Issuing stock:</strong> debit asset received; credit Common/Preferred Stock at <em>par</em>; credit the rest to <strong>Paid-In Capital in Excess of Par</strong>. Noncash assets recorded at fair value. Never a gain or loss on own stock.</p>
  <p><strong>Cash dividends:</strong> declaration → debit Dividends, credit Dividends Payable; record date → no entry; payment → debit Dividends Payable, credit Cash. Dividends reduce retained earnings, never net income.</p>
  <p><strong>Stock dividend (small):</strong> journalize at market value — debit Stock Dividends, credit Common Stock Distributable (par) + PIC (excess). <strong>Stock split:</strong> memo only; shares ×n, par ÷n. Neither changes total equity or ownership percentages.</p>
  <p><strong>Treasury stock (cost method):</strong> debit Treasury Stock at cost (contra-equity). Reissue above cost → credit PIC from Treasury Stock; below cost → reduce PIC, then retained earnings. No gains/losses.</p>
  <p><strong>Retained earnings:</strong> beginning + net income − dividends = ending. <strong>Basic EPS = (Net income − preferred dividends) ÷ weighted-average common shares outstanding.</strong></p>`
}
