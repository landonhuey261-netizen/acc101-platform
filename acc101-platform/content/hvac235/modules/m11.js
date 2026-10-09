// HVAC 235 - Module 11: Heating System Replacement Decisions
module.exports = {
  number: 11,
  slug: "replacement-decisions",
  title: "Heating System Replacement Decisions",
  estTime: "3–4 hours",
  objectives: [
    "Run a disciplined repair-vs-replace analysis using safety, age, repair cost, frequency, efficiency, and remaining life.",
    "Compute the fuel savings of an efficiency upgrade from AFUE values alone, and state its limits honestly.",
    "Explain why replacement is the moment to re-verify size with a load calculation instead of copying the old nameplate.",
    "Describe the code and permit basics that frame a legal replacement: permits, inspection, venting/combustion-air compliance, and documentation.",
    "Handle the red-tagged replacement conversation: options, timelines, and what must not be promised."
  ],
  sections: [
    {
      heading: "The Decision Framework: Six Factors, One Safety Override",
      html: `
<p>Repair or replace is the highest-dollar advice a heating tech gives, and it deserves a framework instead of a vibe. Weigh six factors:</p>
<ol>
<li><strong>Safety.</strong> A breached heat exchanger, chronic CO production, or a venting situation that cannot be made compliant ends the analysis — the equipment is replaced (or the hazard corrected) regardless of the other five factors. Module 10's red tag is factor zero, not factor one.</li>
<li><strong>Age vs. expected service life.</strong> Every platform has a typical lifespan band; a repair on equipment in its final years buys time at rising risk, while the same repair mid-life is sound stewardship. State the band honestly for the equipment in front of you rather than quoting a single magic number.</li>
<li><strong>Repair cost relative to replacement.</strong> The trade's common heuristic: when a single repair approaches roughly <strong>half the cost of replacement</strong> on aging equipment, replacement usually wins — a heuristic, not a law, and it must be adjusted by the remaining-life and frequency factors.</li>
<li><strong>Repair frequency and trajectory.</strong> Three paid repairs in two winters is a trend line, not bad luck; plot the customer's actual spend before recommending the fourth.</li>
<li><strong>Operating cost.</strong> The efficiency gap between the existing unit and current equipment, computed in section 2 — real money, every season, compounding.</li>
<li><strong>Comfort and capability.</strong> The staging, zoning, IAQ, and control gains of Modules 2, 5, and 9 that no repair can retrofit onto the old platform.</li>
</ol>
<div class="callout"><strong>Key idea:</strong> Present the framework, the numbers, and a recommendation — then let the customer decide with their money and their risk tolerance. The tech who shows the math earns replacements; the tech who "sells furnaces" earns suspicion, and occasionally a red-tag accusation (Module 10) that honest documentation must be able to answer.</div>`
    },
    {
      heading: "The Efficiency Math — and Its Honest Limits",
      html: `
<p>Fuel savings from an AFUE upgrade follow directly from Module 1's arithmetic. For the same delivered heat, fuel input is output ÷ AFUE, so:</p>
<div class="formula">Fuel-use ratio = Old AFUE ÷ New AFUE &nbsp;•&nbsp; Savings fraction = 1 − (Old AFUE ÷ New AFUE)</div>
<p><strong>Worked example.</strong> Replacing an 80% furnace with a 96% model: ratio = 0.80 ÷ 0.96 = 0.833. The new furnace burns <strong>83.3%</strong> of the old fuel for the same heat — a <strong>16.7% fuel saving</strong>, season after season, before counting staging and blower gains (Module 2). Replacing a 65%-era survivor with the same 96% unit: ratio = 0.65 ÷ 0.96 = 0.677 — a 32.3% fuel cut, which is why the oldest equipment makes the strongest replacement case on operating cost alone.</p>
<p>Now the honest limits, which protect the customer and your credibility:</p>
<ul>
<li><strong>AFUE is a rating, not a meter reading.</strong> Duct losses, cycling behavior, and installation quality move real consumption around the rating in both directions — commissioning (Module 2) defends the number the brochure promised.</li>
<li><strong>Savings are a fraction of the heating bill, not the whole bill.</strong> Water heating and cooking shares of a gas bill don't change. Quote savings against the heating portion.</li>
<li><strong>Payback arithmetic must include the counterfactual.</strong> If the old unit is dying anyway, the honest comparison is new-vs-new-later plus interim repairs and risk — not new-vs-free.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> Never quote a payback period you didn't compute from this customer's actual fuel use, actual rates, and the actual AFUE pair. A savings claim that survives the customer's own bill review is worth more than any brochure — and one that doesn't will be retold to the whole street.</div>`
    },
    {
      heading: "Sizing Verification: Replacement Is the Recalculation Moment",
      html: `
<p>The old furnace's size is evidence of one thing only: what someone installed decades ago, for a different house (pre-insulation, pre-window-replacement, possibly pre-addition). Replacement is the one moment the industry gets to fix inherited oversizing — and oversizing is the default inheritance (Module 5's boiler logic applies identically to furnaces): short cycles, noise, temperature swings, and on condensing equipment, less time in the efficient operating pattern.</p>
<p>The professional sequence on every replacement:</p>
<ol>
<li><strong>Load calculation for the house as it stands</strong> — the Manual J-style method of HVAC 245, using current insulation, windows, and any additions or conversions.</li>
<li><strong>Select output to the load</strong> from the manufacturer's data (nameplate input × AFUE = delivered output, Module 1), choosing the model whose delivered output meets the load without a wild overshoot — using staging (Module 2) to forgive the gap between available sizes, since a two-stage/modulating unit's low fire civilizes a modest oversize.</li>
<li><strong>Verify the air side honestly:</strong> the duct system that fed the old furnace may not serve the new one's airflow and static requirements; measure, and price duct corrections into the job instead of discovering them at the first limit trip (Module 4).</li>
<li><strong>Verify the venting and combustion-air design</strong> as a new installation (Module 3) — a condensing replacement usually retires the old flue entirely, and the new vent system is designed from the new manual, not adapted from habit.</li>
</ol>
<div class="callout"><strong>Key idea:</strong> "Same size as the old one" is the most expensive sentence in replacement work. The load calculation is 30 minutes of the only day it can be done — and it is also the document that defends the job if comfort is ever disputed.</div>`
    },
    {
      heading: "Code and Permit Basics for Replacements",
      html: `
<p>Replacement work is regulated work. The specifics live in your local code and utility rules — which this course deliberately teaches you to consult rather than recite — but the architecture is consistent:</p>
<ul>
<li><strong>Permits.</strong> Furnace and boiler replacements typically require a mechanical permit in most jurisdictions. The permit is not paperwork tribute: it triggers the inspection that makes the install defensible, and unpermitted work surfaces painfully at home sales and insurance claims. Pull it, or work for a company that does — and never let a customer talk you out of it as a "saving."</li>
<li><strong>Inspection points.</strong> Inspectors verify what this course has taught you to build: venting material/termination and clearances, gas piping and shutoffs, combustion air, condensate disposal, electrical, and the equipment's listing/labels. An install built to the manual passes; an install built to habit negotiates.</li>
<li><strong>Manufacturer instructions are code-referenced.</strong> Listed equipment must be installed per its instructions — the vent table (Module 3) and clearances are enforceable through the listing, which is why "the manual says so" is a complete professional argument.</li>
<li><strong>Fuel conversions and changes of class</strong> (e.g., adding a condensing furnace where a chimney served before, or switching fuels) pull in additional requirements — chimney disposition, combustion air recalculation, sometimes utility notification. Scope them before the quote, not during the install.</li>
<li><strong>Documentation closes the job:</strong> permits, inspection sign-off, equipment registration/warranty paperwork, the load calculation, and commissioning measurements (rise, static, combustion where applicable) filed with the ticket.</li>
</ul>
<div class="callout"><strong>Key idea:</strong> "Per local code" is not a shrug — it is a research task with a definite local answer, and the tech's professional duty is knowing where that answer lives (the AHJ, the adopted code edition, the utility's rules) for every jurisdiction on the route.</div>`
    },
    {
      heading: "The Replacement Conversation: Red Tags, Timelines, and Trust",
      html: `
<p>Many replacement decisions begin at Module 10's worst moment: a family with a tagged furnace, in winter, hearing a big number. How this conversation goes decides whether the customer feels protected or harvested:</p>
<ul>
<li><strong>Evidence before options.</strong> Show the finding (the crack, the readings, the analyzer printout) and the rule it triggers. A customer who has seen the evidence negotiates about solutions, not about your honesty.</li>
<li><strong>Options with real prices and real differences:</strong> like-for-like replacement, the efficiency/staging upgrade with its computed savings, and — where legitimate — the repair path with its risks stated. Where repair is not safe, say so once, plainly, and do not re-offer it as a discount tier.</li>
<li><strong>Timeline honesty.</strong> What can be done today, what the permit/inspection sequence adds, and what safe temporary heat arrangements bridge the gap. Never promise a completion the supply house and the inspector haven't agreed to.</li>
<li><strong>No fear inflation.</strong> The hazard is real and sufficient; embellishing it ("your house could explode tonight") poisons the well for every tech who follows, and is remembered when the neighbor's tech reviews your tag.</li>
<li><strong>Written scope.</strong> What is included — equipment model, venting, condensate handling, duct corrections, permits, registration, commissioning checks — so the job can be verified against the promise (Module 12's documentation discipline).</li>
</ul>
<div class="callout"><strong>Key idea:</strong> The replacement sale that survives scrutiny is built like the installs in this course: measured, documented, and commissioned. Customers replace furnaces every fifteen-plus years and remember exactly one thing clearly — whether they felt told the truth.</div>`
    }
  ],
  keyTerms: [
    { term: "Repair-vs-replace analysis", def: "The structured comparison of safety, age/life, repair cost and frequency, operating cost, and capability that grounds a replacement recommendation." },
    { term: "Expected service life", def: "The typical lifespan band for an equipment platform; repairs are judged against where the unit sits within it." },
    { term: "Half-cost heuristic", def: "The common rule of thumb that a repair approaching roughly half the cost of replacement, on aging equipment, usually tips the decision to replace — a starting point adjusted by the other factors." },
    { term: "Fuel-use ratio", def: "Old AFUE ÷ new AFUE: the fraction of former fuel the new unit burns for identical delivered heat; savings = 1 − ratio." },
    { term: "Payback period", def: "The time for accumulated operating savings to offset an upgrade's added cost — valid only when computed from the customer's actual usage and rates." },
    { term: "Load calculation (replacement)", def: "Recomputing the building's current heat loss before selecting replacement size; the antidote to inherited oversizing." },
    { term: "Inherited oversizing", def: "The common condition of equipment sized for the house as it was (or by pure guess) rather than as it stands after envelope improvements." },
    { term: "Mechanical permit", def: "The jurisdiction's authorization for equipment replacement, triggering inspection; typically required for furnace/boiler change-outs." },
    { term: "AHJ (authority having jurisdiction)", def: "The local body (building department, inspector, utility where empowered) whose adopted code and rulings govern the work." },
    { term: "Listing", def: "An equipment certification conditioned on installation per the manufacturer's instructions — making the manual's requirements enforceable." },
    { term: "Commissioning measurements", def: "The post-install verification set — temperature rise, static pressure, combustion/draft readings, control configuration — proving the installed system performs as selected." },
    { term: "Like-for-like replacement", def: "Substituting equivalent-class equipment without changing fuel, venting class, or capability; the baseline option in a replacement proposal." },
    { term: "Scope of work", def: "The written enumeration of what a replacement job includes — equipment, venting, condensate, duct work, permits, registration, commissioning — against which completion is judged." },
    { term: "Change-of-class replacement", def: "A replacement altering the system's category (e.g., chimney-vented to condensing) and thereby triggering fresh venting, combustion-air, and chimney-disposition requirements." },
    { term: "Interim (temporary) heat", def: "Safe stopgap heating during a replacement gap — electric heaters per their instructions, utility programs — never the tagged appliance itself." },
    { term: "Warranty registration", def: "Filing the new equipment's registration per manufacturer process; unregistered equipment may carry a shorter base warranty — a paperwork step that is part of the job." }
  ],
  video: {
    title: "How a Furnace Works",
    embedUrl: "https://www.youtube.com/embed/Eq3JQWWirJs",
    note: "Reused deliberately: a replacement conversation lands better when the customer understands the machine being condemned and the machine being proposed. This pool video's plain-language tour of furnace operation is the explainer to have a customer watch while you build the comparison — what the old unit does, and by extension what staging, condensing, and modern controls change.",
    more: [
      { title: "Gas Furnace Class w/ Bert", url: "https://www.youtube.com/watch?v=lvZ5iN1xh7Q" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A 17-year-old 80% furnace needs a $1,900 blower-and-board repair. A comparable replacement is quoted at $6,400 installed; an upgraded 96% two-stage at $7,600. The customer's winter gas use for heating runs about $1,500/season. Run the framework: apply the half-cost heuristic, compute the upgrade's seasonal fuel saving vs. the old unit, and draft your recommendation logic.</p>",
      solution: "<p><strong>Solution:</strong> Step 1 (heuristic): repair $1,900 ÷ replacement $6,400 ≈ 30% — below the half-cost line, so the heuristic alone doesn't force replacement; but the unit is 17 years old (deep into its life band), so remaining-life risk weighs against the repair. Step 2 (efficiency): savings fraction = 1 − (0.80 ÷ 0.96) = 16.7% of heating fuel ≈ 0.167 × $1,500 ≈ <strong>$250/season</strong> — meaningful over a new unit's life but not a quick payback driver by itself. Step 3 (recommendation logic): present both honestly — repair is defensible IF the heat exchanger verifies sound (inspect it first: at this age, the repair decision is irresponsible without an exchanger inspection) and the customer accepts rising failure risk; replacement wins on risk elimination, warranty, staging comfort, and the $250/season. If the exchanger shows any breach finding: the framework collapses to replacement only (Module 10).</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Compute the fuel savings of replacing (a) a 78% furnace with a 95% model, and (b) a 92% furnace with a 96% model. Comment on why the same 'high-efficiency' marketing label hides very different value.</p>",
      solution: "<p><strong>Solution:</strong> (a) Savings = 1 − (0.78 ÷ 0.95) = 1 − 0.821 = <strong>17.9%</strong> of heating fuel. (b) Savings = 1 − (0.92 ÷ 0.96) = 1 − 0.958 = <strong>4.2%</strong>. Comment: savings depend on the <em>pair</em> of ratings, not the new unit's label — upgrading from an already-condensing 92% unit buys staging and features far more than fuel savings, and an honest proposal says so. The upgrade case is strongest exactly where the existing equipment is oldest and least efficient, which is also where replacement risk arguments already point the same way.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A replacement quote copies the old furnace: 120,000 Btu/h input. Your load calculation for the renovated house says 54,000 Btu/h. A 96% furnace's input sizes near the load are 60,000 and 80,000. (a) Compute delivered outputs for the old size at 80% and for both candidates at 96%. (b) Choose and justify.</p>",
      solution: "<p><strong>Solution:</strong> (a) Old: 120,000 × 0.80 = 96,000 Btu/h delivered — 178% of the 54,000 load. Candidates at 96%: 60,000 × 0.96 = 57,600 Btu/h; 80,000 × 0.96 = 76,800 Btu/h. (b) Choose the <strong>60,000 input</strong> (57,600 delivered): it covers the 54,000 load with a modest margin, while the 80,000 would run 42% oversized and the copied size was nearly double the need. If the 60,000 is two-stage/modulating, its low fire (~two-thirds ≈ 38,000 delivered) sits beautifully against shoulder-season loads. Justify on the ticket with the load calc attached — the document that separates sizing from guessing.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> List the permit/inspection and documentation package you would assemble for a change-of-class replacement (chimney-vented 80% out, condensing two-pipe in), in the order the job produces them.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Load calculation + equipment selection record (before the quote). Step 2: Mechanical permit application with the AHJ (before work), including the new venting design per the manufacturer's vent table and the disposition of the abandoned chimney connection. Step 3: Install records: vent material/length count, condensate routing/neutralizer if applicable, gas and electrical work per code. Step 4: Inspection(s) as the jurisdiction sequences them, with corrections closed out. Step 5: Commissioning sheet: temperature rise, static pressure, draft/combustion verification, staging/control configuration, thermostat setup. Step 6: Warranty registration filed, customer orientation completed (filter, condensate, vent termination care, CO alarms checked), and the full packet filed with the ticket. Order matters: permits precede work, commissioning precedes 'done.'</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A customer waves a competitor's flyer: 'GUARANTEED 40% lower gas bills with our 98% furnace!' Their current unit is 92%. Using the module's math, write your two-minute reality check — without disparaging the competitor personally.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Run the pair honestly: savings = 1 − (0.92 ÷ 0.98) = 6.1% of the <em>heating portion</em> of the bill — physics caps the claim there regardless of brand; a 40% cut would require the impossible ratio of a ~59% old furnace. Step 2: Note where a 40% figure could be honestly produced (replacing a 1960s-era 60-something-% unit, or whole-bill comparisons against a winter with different weather) and why it doesn't transfer to this house. Step 3: Offer the verifiable alternative: 'Here's the math for your actual pair of ratings, against your actual heating spend from last year's bills — if any proposal beats it, ask them to show this same arithmetic.' Step 4: Close with what the upgrade DOES buy at 92→98: staging comfort, blower savings, warranty reset, and the modest real fuel saving — a case that needs no inflation.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A landlord asks you to skip the permit 'to save the tenant money' on a straightforward furnace swap in a rental. Write your response, including the two non-obvious parties the permit protects.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Decline plainly: the permit is typically required for this work, and neither the landlord's instruction nor a discount changes the requirement — the install proceeds permitted or not by this company. Step 2: The obvious protection is the tenant (inspected venting, gas, and combustion safety in a home they didn't choose the contractor for). Step 3: Non-obvious party one: the <strong>landlord</strong> — an unpermitted install discovered at sale, refinance, or after any incident hands him liability and a forced disclosure; the permit is his cheapest insurance document. Step 4: Non-obvious party two: the <strong>next technician and the insurer</strong> — the permit/inspection record is the baseline that proves the baseline was legal when later work begins. Step 5: Offer the legitimate economy: an efficient, correctly scoped job with permit fees visible as a line — savings come from scope, never from skipping the law.</p>"
    }
  ],
  quiz: [
    {
      q: "Which finding ends the repair-vs-replace analysis immediately, in favor of replacement (or hazard correction) regardless of cost factors?",
      choices: ["A failed igniter", "A confirmed breached heat exchanger / CO hazard that cannot be made safe", "A noisy blower bearing", "A thermostat with a dead display"],
      answer: 1,
      explanation: "Correct: (b). Safety is factor zero — an appliance that puts CO into the airstream is not a repair candidate at any discount. (a), (c), and (d) are ordinary repairs weighed by the framework (cost, age, frequency). The framework exists for the gray zone; a breached exchanger is not in it."
    },
    {
      q: "Replacing an 80% AFUE furnace with a 96% model saves what fraction of heating fuel?",
      choices: ["16% of the total utility bill", "About 16.7% of heating fuel (1 − 0.80/0.96)", "Exactly 16 percentage points off every bill", "96% of heating fuel"],
      answer: 1,
      explanation: "Correct: (b). Fuel for the same heat scales with the AFUE ratio: new burns 0.80/0.96 = 83.3% of the old fuel — a 16.7% heating-fuel saving. (a) overreaches twice: savings apply to the heating portion only, and the fraction is 16.7 of that portion. (c) confuses percentage-point label changes with consumption fractions. (d) misreads AFUE as a savings figure."
    },
    {
      q: "The half-cost heuristic says replacement usually wins when:",
      choices: ["Any repair exceeds $500", "A single repair approaches roughly half the cost of replacement, on aging equipment", "The unit is any age and the repair is cosmetic", "The customer asks twice"],
      answer: 1,
      explanation: "Correct: (b). It is a starting heuristic — adjusted by remaining life, repair trajectory, and operating cost — not a formula that fires at a dollar threshold. (a) An absolute dollar line ignores replacement cost entirely. (c) Cosmetic repairs don't enter the framework. (d) Persistence is not a factor in the analysis."
    },
    {
      q: "Sizing a replacement by copying the old nameplate is wrong mainly because:",
      choices: ["Nameplates are written in code", "The old size reflects a decades-old house and guesswork — replacement is the one chance to size to a current load calculation", "New furnaces are always smaller", "Inspectors fine same-size swaps"],
      answer: 1,
      explanation: "Correct: (b). Envelope improvements shrink loads while old habits oversized freely; copying perpetuates short cycling and noise, and forfeits the load-calculation document that defends the job. (a) Nameplates are plain data. (c) New equipment spans all sizes — selection follows the load. (d) No such fine; the penalty is comfort and efficiency, paid monthly."
    },
    {
      q: "A two-stage furnace softens the risk of choosing between two available sizes because:",
      choices: ["It uses half the gas of any single-stage unit", "Its low fire lets a modestly oversized unit run gently in mild weather instead of blast-cycling", "It is exempt from load calculations", "Its blower is silent at any static pressure"],
      answer: 1,
      explanation: "Correct: (b). Staging is forgiveness: high fire covers design days, low fire civilizes the other 95% of hours. (a) AFUE class, not staging, sets fuel class — staging's fuel effect is secondary. (c) Staging makes the load calculation more valuable, not optional. (d) ECM blowers still suffer and sing against bad static (Module 2)."
    },
    {
      q: "During a replacement, the inspector's interest in the manufacturer's vent table is grounded in:",
      choices: ["Curiosity about brand differences", "The equipment's listing: listed appliances must be installed per the manufacturer's instructions, which the code enforces", "A federal vent-length tax", "The table's resale value"],
      answer: 1,
      explanation: "Correct: (b). Listing + code adoption makes manual requirements (vent lengths, materials, clearances) enforceable law for the install — 'per the manual' is a legal standard, not a suggestion. (a), (c), and (d) name motives that don't exist; the mechanism is listing law, which is why Module 3 taught the table as a design document."
    },
    {
      q: "The honest comparison when an old furnace is near failure anyway is:",
      choices: ["New system cost vs. zero", "New system vs. the repair-plus-risk path to the inevitable replacement — including interim repairs and remaining-life value", "New system vs. the customer's last gas bill", "Whatever the manufacturer's brochure suggests"],
      answer: 1,
      explanation: "Correct: (b). The counterfactual is never 'free heat forever' — it's a dying unit's repair bills, failure risk, and deferred replacement. Framing against zero inflates payback claims and collapses under the customer's own arithmetic. (c) One bill is weather, not a baseline. (d) Brochures sell; the framework in this module decides."
    },
    {
      q: "Skipping a required permit on a replacement exposes, among others:",
      choices: ["Only the installing tech", "The occupants (uninspected combustion work), the owner at sale/insurance claim, and every future tech who lacks a legal baseline for the install", "Nobody — permits are pure revenue", "Only the utility company"],
      answer: 1,
      explanation: "Correct: (b). The permit chain protects people who never signed the work order — tenants, buyers, insurers, and the next professional. (a) The tech's exposure is real but the smallest part of the list. (c) is the rationalization the module explicitly retires: inspection is the verification mechanism, not a fee with a stamp. (d) Utilities are one stakeholder, not the only one."
    }
  ],
  studyGuide: `
<h3>Module 11 — Replacement Decisions: Quick Reference</h3>
<p><strong>Framework:</strong> safety (factor zero — breaches/CO end the debate) → age vs. life band → repair cost (half-cost heuristic ≈ repair ≥ ~50% of replacement on old gear tips it) → repair trajectory → operating cost → comfort/capability. Show the math; the customer decides.</p>
<div class="formula">Fuel savings = 1 − (old AFUE ÷ new AFUE). 80→96 = 16.7% of HEATING fuel. 92→96 = 4.2%. Savings apply to the heating portion of the bill, from the customer's actual usage — never from a brochure.</div>
<p><strong>Sizing:</strong> replacement = recalculation moment. Current load calc → delivered output (input × AFUE) matched to load → verify duct/airflow and design venting as new. Never copy the old nameplate (inherited oversizing).</p>
<p><strong>Code basics:</strong> mechanical permit typically required → inspection (venting, gas, combustion air, condensate, electrical) → listing makes the manual enforceable → AHJ/local code holds the specifics; know where your jurisdiction's answer lives. File: load calc, permit, inspection, commissioning sheet, warranty registration.</p>
<p><strong>Conversation:</strong> evidence before options • real prices, stated risks • timeline honesty (permits/supply) • no fear inflation • written scope. A red tag is never a sales lever (Module 10).</p>
`
};
