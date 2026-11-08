// bus221 - Module 9: Legal & Government Requirements for Startups
module.exports = {
  number: 9,
  slug: "legal-government-requirements-startups",
  title: "Legal & Government Requirements for Startups",
  estTime: "3–4 hours",
  objectives: [
    "Compare the four main business structures — sole proprietorship, partnership, LLC, and corporation — by liability, taxes, and complexity.",
    "List the startup legal checklist: name, registration, EIN, licenses and permits, and insurance.",
    "Explain why contracts, including family loan agreements, must be written down.",
    "Describe the basics of trademarks, intellectual property, and hiring law for a first employee.",
    "Know when to pay for a lawyer or accountant instead of guessing."
  ],
  sections: [
    {
      heading: "Choose a Structure — and Know What It Does",
      html: `
<p>A <strong>business structure</strong> is the legal form of the business, and it decides three things: who is liable if the business is sued or owes money, how the business is taxed, and how much paperwork it takes to run. The four main choices are the <strong>sole proprietorship</strong> (one owner, no separation between owner and business), the <strong>partnership</strong> (two or more owners sharing the business), the <strong>limited liability company (LLC)</strong> (owners called members, with liability protection and flexible taxes), and the <strong>corporation</strong> (a separate legal person owned by shareholders, with the most formality). There is no best structure in general — there is only the best structure for this business, at this size, with this risk.</p>
<p>A sole proprietorship is the simplest: nothing to file to create it, the owner reports business income on their personal tax return, and the owner is personally liable for business debts — if the business is sued, the owner's personal assets are at risk. A partnership is similar, with the added risk that each partner can be liable for the other's business decisions, which is why a written partnership agreement is essential. An LLC separates the business from the owner: the member's personal assets are generally protected from business debts, while taxes can still pass through to the owner's personal return. A corporation gives the strongest separation and the easiest path to raising investment, but it costs the most to form and maintain, with boards, minutes, and separate tax filings.</p>
<div class="callout"><strong>Key idea:</strong> Structure is a trade between simplicity and protection. Start simple when the risk is low, and move to an LLC or corporation when the risk, the team, or the money grows — but make the move deliberately, not by accident.</div>
<p>Maya starts as a sole proprietor because her risk is low and her business is just her and a cart. Her plan notes the trigger to form an LLC in Michigan: hiring her first employee, signing a lease, or taking on the bank loan's full risk — at that point the $50 Michigan filing for Articles of Organization with LARA (the Department of Licensing and Regulatory Affairs) is cheap protection. Fees and forms change, so she checks LARA's current requirements rather than trusting a remembered number.</p>`
    },
    {
      heading: "The Startup Legal Checklist",
      html: `
<p>Whatever the structure, the startup checklist is the same. <strong>1. Choose and check the name:</strong> search the state business registry and the federal trademark database so the name is not already taken or confusingly similar. <strong>2. Register the business:</strong> file with the state if forming an LLC or corporation (in Michigan, Articles of Organization with LARA); a sole proprietor using a name other than their own legal name files an assumed-name certificate. <strong>3. Get an EIN:</strong> an Employer Identification Number from the IRS is free, and it is the business's tax ID — needed for a business bank account, for hiring, and for most licenses. <strong>4. Licenses and permits:</strong> a sales tax license if selling taxable goods (Michigan's sales tax is 6%), local licenses where the city requires them, and any industry permit — a food cart needs health department approval. <strong>5. Open the business bank account</strong> with the EIN and formation documents. <strong>6. Get insurance:</strong> general liability at minimum, and workers' compensation once employees are hired.</p>
<p>Two warnings belong on every checklist. First, an EIN is free from the IRS — any site charging for one is selling a free service. Second, requirements differ by state, city, and industry, and they change: the video for this module walks through Michigan's 2026 checklist, but the habit that matters is checking the current official source (LARA, the IRS, the city) before filing, not memorizing a fee from a course.</p>
<div class="callout"><strong>Key idea:</strong> Do the checklist in order: name, register, EIN, licenses, bank account, insurance. Skipping ahead — opening a bank account before the EIN, or trading before the health permit — creates rework and risk.</div>
<p><strong>Annual duties</strong> continue after startup: Michigan LLCs file an annual statement ($25, due each February 15, per the module video's 2026 checklist — verify the current amount with LARA), keep the registered agent's address current, file and pay taxes, and renew licenses. A business that forgets its annual statement can lose its good standing, which is an expensive way to learn about paperwork.</p>`
    },
    {
      heading: "Contracts: If It Matters, Write It Down",
      html: `
<p>A <strong>contract</strong> is an agreement the law will enforce: an offer, acceptance, and consideration (something of value exchanged). For a small business, the important contracts are the ones founders skip: the partnership agreement, the family loan agreement, the supplier agreement, the lease, and the customer terms. Each one answers the questions that become arguments later: who pays what, by when, what happens if someone cannot pay, and how the deal ends.</p>
<p>Maya's family loan is the textbook example. $4,800 at 0%, $200 a month for 24 months, sounds simple — until a payment is missed, or a relative needs the money back early, or the business fails. A one-page written agreement stating the amount, the rate, the payment, the schedule, and what happens on a missed payment protects both sides and, just as importantly, protects the relationship. The same logic applies to partnerships: who owns what percentage, who decides what, what happens if a partner leaves, and what happens if a partner dies. These conversations are uncomfortable at the start and catastrophic at the end if they never happened.</p>
<div class="callout"><strong>Key idea:</strong> Written contracts do not show distrust — they show respect. They let friends and family do business together and stay friends and family afterward.</div>
<p>For customer contracts, keep them short and readable: what you will do, what it costs, when payment is due, and what happens if plans change. A catering quote that states the date, the price, the deposit, and the cancellation terms prevents the argument that a handshake never could. And never sign a contract you have not read — especially a lease, a franchise agreement, or a supplier's exclusivity clause. If a clause is unclear, that is the moment to ask, not the moment to sign.</p>`
    },
    {
      heading: "Protecting Ideas, Names, and People",
      html: `
<p><strong>Intellectual property</strong> is the business's invisible assets. A <strong>trademark</strong> protects the name and logo that identify the business — Maya's cart name and logo can be protected so a competitor cannot use them. A <strong>copyright</strong> protects original creative work, such as the website text or a recipe book. A <strong>patent</strong> protects a new invention, which rarely applies to a small service business but matters for a product startup. A <strong>trade secret</strong> is confidential business information — a supplier list, a recipe — protected by keeping it secret and by agreements, not by registration. The practical step for most small businesses is a trademark search before choosing a name, and a trademark filing once the name is earning money.</p>
<p>Hiring brings a second body of law. Before the first employee, the owner must understand payroll taxes, workers' compensation insurance, wage and hour rules, and anti-discrimination law — and that an independent contractor is not simply an employee by another name: misclassifying workers is one of the most common and expensive mistakes a small business makes. The safe rule is to use a payroll service or an accountant for the first hire, and to keep written job descriptions, offer letters, and records from day one. (Employment law is covered in depth in bus211; this module is the startup overview.)</p>
<div class="callout"><strong>Key idea:</strong> Legal protection is bought cheapest at the start. A trademark search before launch, a written agreement before the money moves, and a payroll setup before the first hire each cost a fraction of what fixing the mistake costs later.</div>
<p>Finally, know when to hire a professional. A lawyer is worth paying for: forming a corporation, a partnership agreement, a commercial lease, a franchise, an investor agreement, or any dispute. An accountant is worth paying for: choosing a tax structure, setting up payroll, and the first tax return. Free advice from the internet — including this course — is education, not legal or tax advice for your specific situation. The SBA, SCORE mentors, and your local Small Business Development Center offer free guidance that can tell you which professional you need and what to ask them.</p>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Four structures: sole proprietorship (simplest, no liability separation), partnership (shared, shared liability), LLC (liability protection, flexible tax), corporation (strongest separation, most formality).</li>
<li>Startup checklist in order: name, register, EIN (free from the IRS), licenses and permits, bank account, insurance — plus annual duties after that.</li>
<li>If it matters, write it down: partnership agreements, family loans, supplier terms, leases, customer terms.</li>
<li>Protect the name with a trademark search before launch; protect the business with insurance before trading.</li>
<li>Hire a lawyer for structure, leases, and investor deals; hire an accountant for tax structure, payroll, and the first return.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Paying for an EIN. It is free from the IRS. Any site charging for one is selling a free service.</div>
<div class="callout"><strong>Common mistake:</strong> A handshake family loan. Money between relatives without a written agreement is the fastest way to damage both the business and the relationship.</div>
<p><strong>Carry into the capstone:</strong> The capstone's Module 9 is the risk, legal, and ethics review of your finished plan. Keep your structure choice, your checklist, and your key agreements — they become that section.</p>`
    }
  ],
  keyTerms: [
    { term: "Business structure", def: "The legal form of the business, deciding liability, taxation, and paperwork." },
    { term: "Sole proprietorship", def: "A business owned by one person, with no legal separation between owner and business." },
    { term: "Partnership", def: "A business owned by two or more people who share profits, decisions, and liability." },
    { term: "Limited liability company (LLC)", def: "A business form giving owners liability protection with flexible, usually pass-through, taxation." },
    { term: "Corporation", def: "A separate legal person owned by shareholders, with the strongest liability separation and the most formality." },
    { term: "Liability protection", def: "The legal separation that generally keeps an owner's personal assets safe from business debts." },
    { term: "EIN", def: "Employer Identification Number — the free tax ID a business gets from the IRS." },
    { term: "LARA", def: "Michigan's Department of Licensing and Regulatory Affairs, which handles business filings in Michigan." },
    { term: "Assumed name", def: "A business name different from the owner's legal name, registered with the state (also called a DBA)." },
    { term: "Contract", def: "An agreement the law will enforce: offer, acceptance, and consideration." },
    { term: "Consideration", def: "Something of value exchanged in a contract — money, goods, services, or a promise." },
    { term: "Trademark", def: "Legal protection for a name, logo, or mark that identifies a business." },
    { term: "Copyright", def: "Legal protection for original creative work, such as text, photos, or music." },
    { term: "Trade secret", def: "Confidential business information protected by keeping it secret." },
    { term: "Workers' compensation", def: "Insurance that covers employees injured on the job, required for employers in most states." }
  ],
  video: {
    title: "How to Start a Business in Michigan (2026): 8-Step Checklist",
    embedUrl: "https://www.youtube.com/embed/kyvjLVgvj3k",
    note: "A step-by-step Michigan checklist: form an LLC for $50 with LARA, get a free EIN, register for a sales tax license, and check city licenses. Fees and forms change, so use it as a worked example of the checklist in this module — and verify the current figures with LARA before filing.",
    more: []
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Compare a sole proprietorship and an LLC on three points: liability, taxes, and complexity. Use a small table or three short paragraphs.</p>",
      solution: "<p><strong>Answer:</strong> Step 1 — Liability: a sole proprietor is personally liable for business debts, so personal assets are at risk; an LLC member is generally protected, with business debts staying with the business. Step 2 — Taxes: both usually pass income through to the owner's personal return (an LLC can elect other treatment), so the tax difference at small scale is small. Step 3 — Complexity: a sole proprietorship needs no formation filing; an LLC requires Articles of Organization, a registered agent, and annual statements. Step 4: The trade is simplicity against protection — which is why Maya starts simple and plans to form an LLC when she hires or signs a lease.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> List the startup legal checklist in order (six steps) and, for each step, write what Maya does for her coffee cart.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Name — check the Michigan business registry and trademark database for 'Maple Street Coffee Cart.' Step 2: Register — file Articles of Organization with LARA when she forms the LLC; as a sole proprietor she files an assumed-name certificate if needed. Step 3: EIN — apply free on the IRS website. Step 4: Licenses — sales tax license and health department approval for the food cart. Step 5: Bank account — open a business account with the EIN and formation documents. Step 6: Insurance — general liability before trading, workers' compensation when she hires.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> Maya's family loan is $4,800 at 0% for 24 months, $200 a month. List five items a one-page written loan agreement should state.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The amount ($4,800) and the interest rate (0%). Step 2: The payment ($200) and the schedule (monthly for 24 months, with start and end dates). Step 3: What happens if a payment is missed — a grace period, and how it is made up. Step 4: Whether the loan can be repaid early, and whether the lender can demand early repayment. Step 5: Signatures and the date. Step 6: Keeping it to one page is fine — clarity, not length, is what protects the relationship.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A founder is choosing between a partnership and an LLC for a two-person cleaning business. Explain one risk of a partnership that the LLC avoids, and one cost of the LLC that the partnership avoids.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Partnership risk — each partner is liable for the other's business decisions and debts, so one partner's mistake can reach the other's personal assets. Step 2: The LLC avoids that by separating the business from the members' personal assets. Step 3: LLC cost — formation filing, a registered agent, and annual statements cost money and time every year. Step 4: The partnership avoids those costs and formalities, which is its only real advantage — and it is rarely worth the liability risk once the business has employees or contracts.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A food cart owner is offered a 'free' EIN service that charges $79. What should they do, and why? What else on the startup checklist is free from the government?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Do not pay — an EIN is free directly from the IRS website, and the $79 service is selling a free filing. Step 2: Apply on the IRS site yourself; it takes minutes. Step 3: Other free government help includes the SBA's business-plan guidance, SCORE mentors, and the local Small Business Development Center — free advice that can tell you which paid professional you actually need.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Maya hires her first part-time employee. List four legal or administrative steps she must take before or on the first day of work.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Get workers' compensation insurance in place. Step 2: Set up payroll and payroll tax withholding — through a payroll service or an accountant for the first hire. Step 3: Verify work eligibility and keep the required employment records. Step 4: Give the employee a written job description and offer letter stating pay, hours, and duties. Step 5: Keep business and personal money separate so wages are paid from the business account and recorded properly.</p>"
    }
  ],
  quiz: [
    {
      q: "The main advantage of an LLC over a sole proprietorship is:",
      choices: ["Lower taxes in every case", "Liability protection — the owner's personal assets are generally separated from business debts", "No paperwork at all", "Free formation"],
      answer: 1,
      explanation: "Correct: (b). Separation of personal assets is the LLC's purpose. (a) Taxes are often similar — both usually pass through. (c) An LLC requires filings and annual statements. (d) Michigan charges a $50 filing fee (per the module video's 2026 checklist) — formation is not free."
    },
    {
      q: "An EIN is:",
      choices: ["A paid service that costs $79", "A free tax ID from the IRS", "A state business license", "A trademark"],
      answer: 1,
      explanation: "Correct: (b). EINs are free from the IRS. (a) describes a third-party service selling a free filing. (c) A license is a separate state or local permission. (d) A trademark protects a name, not a tax identity."
    },
    {
      q: "The correct order for the startup checklist is:",
      choices: ["Bank account, EIN, name, insurance", "Name, register, EIN, licenses, bank account, insurance", "Insurance, name, licenses, EIN", "Licenses, bank account, name, EIN"],
      answer: 1,
      explanation: "Correct: (b). Name first, then register, then the EIN, then licenses, then the bank account, then insurance. The other orders try to open accounts or buy insurance before the business legally exists or has its tax ID."
    },
    {
      q: "A family loan should be written down mainly because:",
      choices: ["The IRS requires a 10-page contract", "It states the amount, rate, and schedule clearly and protects the relationship if something goes wrong", "Family loans are illegal without a contract", "Banks require it"],
      answer: 1,
      explanation: "Correct: (b). Clarity protects both the money and the relationship. (a) No such page requirement exists. (c) Family loans are legal; the risk is disagreement, not illegality. (d) Banks do not require your family agreements."
    },
    {
      q: "In Michigan, LLC Articles of Organization are filed with:",
      choices: ["The IRS", "LARA", "The SBA", "The health department"],
      answer: 1,
      explanation: "Correct: (b). LARA handles Michigan business filings. (a) The IRS issues EINs and collects federal tax. (c) The SBA advises and supports lending; it does not register businesses. (d) The health department handles food permits, not business formation."
    },
    {
      q: "A trademark protects:",
      choices: ["An invention", "A name or logo that identifies a business", "A secret recipe, by registration", "An employee's wages"],
      answer: 1,
      explanation: "Correct: (b). Trademarks protect brand identifiers. (a) describes a patent. (c) A recipe is a trade secret, protected by secrecy, not by registration. (d) Wages are protected by employment law."
    },
    {
      q: "Before the first hire, the most important administrative step is to:",
      choices: ["Design a logo", "Set up payroll, withholding, and workers' compensation insurance", "Buy a bigger cart", "Raise prices"],
      answer: 1,
      explanation: "Correct: (b). Payroll and insurance are legal requirements from day one. (a), (c), and (d) are business choices, not legal prerequisites for hiring."
    },
    {
      q: "A founder should pay for a lawyer for:",
      choices: ["Choosing a business name", "A commercial lease, a partnership agreement, or an investor deal", "Posting on social media", "Ordering business cards"],
      answer: 1,
      explanation: "Correct: (b). High-stakes documents with lasting consequences are lawyer work. (a), (c), and (d) are routine tasks a founder can do with free SBA or SCORE guidance."
    }
  ],
  studyGuide: `
<h3>Module 9 — Legal & Government Requirements for Startups: Quick Reference</h3>
<p><strong>Core idea:</strong> Structure trades simplicity against protection. Start simple when risk is low; add protection when risk, team, or money grows.</p>
<p><strong>Structures:</strong> Sole proprietorship (simplest, personally liable) · partnership (shared, shared liability) · LLC (liability protection, flexible tax) · corporation (strongest separation, most formality).</p>
<p><strong>Checklist in order:</strong> Name → register → EIN (free from the IRS) → licenses & permits → business bank account → insurance → annual duties.</p>
<p><strong>Michigan:</strong> LLCs file Articles of Organization with LARA; sales tax is 6%; annual statement due each February 15 (verify current fees with LARA — figures change).</p>
<p><strong>Contracts:</strong> If it matters, write it down — partnership, family loan, supplier, lease, customer terms. Clarity protects relationships.</p>
<p><strong>Watch out:</strong> Never pay for an EIN. Never trade before the required permit. Never hire without payroll and workers' compensation set up.</p>
<p><strong>Self-check:</strong> Write your own structure choice and the trigger that would make you change it — hiring, a lease, or outside investment.</p>
`
};
