// Plumbing 122 - Module 12: Course Review: Designing a Small Water System
module.exports = {
  number: 12,
  slug: "course-review-designing-water-system",
  title: "Course Review: Designing a Small Water System",
  estTime: "3–4 hours",
  objectives: [
    "Trace the full water supply path from the source to the farthest fixture and name every component.",
    "Design a small water system for a two-bath house: total the WSFU, convert with the Hunter curve, add continuous demands, and check pressure and velocity.",
    "Apply the six-step water system sequence — source, size, install, test, protect, prove — to a complete design.",
    "Review a water system plan and find the common errors: undersized service, missing PRV, missing expansion control, unprotected cross-connections, and hot-water runs over 50 feet.",
    "Explain how the water supply system and the DWV system work together at every fixture."
  ],
  sections: [
    {
      heading: "The Whole System in One Picture",
      html: `
<p>Step back and look at the whole course at once. Water enters from a <strong>source</strong> — a municipal main or a private well — through the <strong>water service</strong> (curb stop, meter, main shutoff) and into the building. The <strong>distribution piping</strong> carries it to every fixture: cold water straight from the main, hot water through the <strong>water heater</strong> and a <strong>recirculation loop</strong> where the run is long. <strong>Valves</strong> isolate fixtures and control flow. A <strong>PRV</strong> tames high pressure and a <strong>booster</strong> lifts low pressure. <strong>Backflow assemblies</strong> guard the drinking water. <strong>Treatment</strong> fixes hardness and quality. And the whole system is <strong>insulated, sleeved, and protected</strong> from freezing.</p>
<p>At every fixture, the supply system meets the DWV system you studied in Plumbing 121. The supply brings clean water in; the DWV carries used water out. The fixture is the bridge between them, and the two systems must never connect directly — the air gap at the faucet, the trap seal below it, and the vent above the roof are what keep them separate. A plumber who understands both systems can diagnose any fixture problem, because every fixture problem is either a supply problem, a drain problem, or a vent problem.</p>
<p>The sequence for any water system job is: <strong>source, size, install, test, protect, prove</strong>. Know the source first, size the piping from the load, install it in the right order, test it before concealment, protect it from pressure, freezing, and backflow, and prove it with gauges and a final walk-through. The rest of this module works that sequence on a real design.</p>
<div class="callout"><strong>Key idea:</strong> Source, size, install, test, protect, prove. Every water system job follows that order — and every shortcut skips a step that will cost more later.</div>`
    },
    {
      heading: "The Design Exercise: A Two-Bath House",
      html: `
<p>Design the water system for a two-bath house: 2 private flush-tank water closets, 2 lavatories, 1 tub-shower, 1 kitchen sink, 1 dishwasher, and 1 hose bibb with a continuous demand of 5 gpm. Municipal water at 45 psi static at the meter; the highest fixture is 20 feet above the meter; the farthest fixture needs 8 psi residual pressure.</p>
<p><strong>Step 1 — Source.</strong> Municipal main, 45 psi static at the meter. The service is buried below the frost line with a meter pit and curb stop. <strong>Step 2 — Size.</strong> Total the WSFU: water closets 2 × 2.2 = 4.4; lavatories 2 × 0.7 = 1.4; tub-shower 1.4; kitchen sink 1.4; dishwasher 1.4. Total = <strong>10.0 WSFU</strong>. Convert with the flush-tank Hunter curve: 10 WSFU = <strong>14.6 gpm</strong>. Add the continuous hose bibb after the curve: 14.6 + 5 = <strong>19.6 gpm</strong> total design flow.</p>
<p><strong>Step 3 — Pressure budget.</strong> Elevation loss to the highest fixture: 20 ft × 0.433 = about 8.7 psi. Available pressure loss = 45 − 8.7 − 8 = about <strong>28 psi</strong> for friction over the whole run. The service and distribution piping must carry 19.6 gpm within that budget and below the 8 ft/s velocity limit — which is why a 1-inch service is checked and, if the velocity is too high, upsized to 1-1/4 inches.</p>
<p><strong>Steps 4–6.</strong> Install in the right order (measure, cut, ream, dry-fit, join, test, flush, disinfect), test before concealment, and protect: a PRV is not needed here (45 psi is below 80), a tempering valve holds the showers to 120°F, the far bathroom gets a recirculation loop or a point-of-use heater if its hot-water run exceeds 50 feet, the hose bibb gets a vacuum breaker, and the pipes in the crawlspace get insulation and air sealing.</p>
<div class="callout"><strong>Key idea:</strong> One design, every module: 10.0 WSFU → 14.6 gpm → 19.6 gpm with the hose bibb → about 28 psi of friction budget → check velocity → protect with tempering, backflow, and freeze protection.</div>`
    },
    {
      heading: "Plan Review: Finding the Errors",
      html: `
<p>Reviewing a plan is the skill that ties the course together. Work every segment with six questions: <strong>source</strong> (is the supply adequate and protected?), <strong>load</strong> (is the WSFU total right, using the total column?), <strong>size</strong> (does the pipe carry the design flow within the pressure budget and the velocity limit?), <strong>pressure</strong> (is a PRV needed above 80 psi, or a booster below 40?), <strong>protection</strong> (are cross-connections guarded, is expansion controlled, is the hot water tempered?), and <strong>freeze</strong> (are pipes in unheated spaces insulated and air-sealed?).</p>
<p>The errors you will find most often: a service sized by habit instead of by calculation; a public fixture counted at its private WSFU value; a continuous demand run through the Hunter curve; a PRV installed with no expansion tank; a hot-water run of 80 feet with no recirculation; a hose bibb with no vacuum breaker; and a pipe in an exterior wall with insulation but no air sealing. Each one is a module from this course — and each one is findable on paper before a single pipe is cut.</p>
<p>Practice the review on your own house. Trace the service from the street, list the fixtures, total the WSFU, and check the pressure at a hose bibb. You will find at least one thing you would change — and that is the point of the exercise.</p>
<div class="callout"><strong>Key idea:</strong> Review a plan with six questions: source, load, size, pressure, protection, freeze. Every common error in this course is findable on paper before a pipe is cut.</div>`
    },
    {
      heading: "Supply Meets Drain: The Fixture as a Bridge",
      html: `
<p>Every fixture is a meeting point. The supply system brings clean water in through the fixture supply and the angle stop; the fixture uses it; the DWV system carries it away through the trap and the drain. The two systems are separated by the fixture itself and by two guards: the <strong>air gap</strong> at the faucet (the outlet sits above the flood-level rim) and the <strong>trap seal</strong> below (standing water that blocks sewer gas).</p>
<p>When a fixture misbehaves, the first question is which side is at fault. Weak flow, no hot water, or noisy pipes point at the supply side. Slow draining, gurgling, or sewer odor point at the DWV side. A fixture that fills slowly and drains slowly has two problems, not one — check both sides before you declare the job done.</p>
<p>The two courses together are the trade. Plumbing 121 taught you to move water out by gravity; Plumbing 122 taught you to bring water in under pressure. A plumber who can do both — and who can explain both to a homeowner in plain words — is the plumber customers call back.</p>
<div class="callout"><strong>Key idea:</strong> The fixture is the bridge between the supply side and the drain side. Diagnose by asking which side is at fault — weak flow is supply, slow draining is DWV, and a fixture can have both problems at once.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Full path: source → service (curb stop, meter, main shutoff) → distribution → fixture supply → fixture; hot water through the heater, with recirculation where the run exceeds 50 feet.</li>
<li>Design exercise: 10.0 WSFU → 14.6 gpm (flush-tank curve) → 19.6 gpm with the 5 gpm hose bibb → about 28 psi friction budget → check the 8 ft/s velocity limit.</li>
<li>Job sequence: source, size, install, test, protect, prove.</li>
<li>Plan review: source, load, size, pressure, protection, freeze.</li>
<li>The fixture is the bridge between the supply side and the drain side; diagnose by asking which side is at fault.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Sizing by habit instead of by calculation. A two-bath house is not always a 1-inch service — run the numbers: total the WSFU, convert with the Hunter curve, add continuous demands, and check pressure and velocity.</div>
<div class="callout"><strong>Common mistake:</strong> Fixing one side of a fixture problem and missing the other. A slow-filling toilet with a slow drain has a supply problem and a drain problem — fix both, or the customer calls you back.</div>
<p><strong>Ready-to-Work link:</strong> You have now completed Plumbing 122. The final exam tests the whole course, and the water supply sizing lab is your chance to work the fixture-unit math on a real house. The next course in the program, Plumbing 201, builds on everything here.</p>`
    }
  ],
  keyTerms: [
    { term: "Water service", def: "The pipe from the water main or well into the building, including the curb stop, meter, and main shutoff." },
    { term: "Distribution piping", def: "The network of cold- and hot-water mains and branches inside a building that feeds each fixture." },
    { term: "Design flow", def: "The peak flow in gpm a pipe system is sized to carry, from the Hunter curve plus continuous demands." },
    { term: "Water supply fixture unit (WSFU)", def: "A relative load value per fixture, added up before conversion to a design flow." },
    { term: "Hunter demand curve", def: "A curve that converts total fixture units into a design flow in gpm, based on the probability that fixtures run together." },
    { term: "Available pressure loss", def: "Static pressure minus elevation loss minus minimum fixture pressure — the friction budget the piping may spend." },
    { term: "Velocity limit", def: "The design limit of about 8 ft/s for water in supply piping; faster water is noisy and erosive." },
    { term: "Pressure-reducing valve (PRV)", def: "A valve required above 80 psi static (IPC 604.8) that throttles street pressure down to a safe level." },
    { term: "Tempering valve", def: "A mixing valve that blends hot and cold water so the delivered temperature is safe; showers limited to 120°F." },
    { term: "Recirculation system", def: "A pump and return loop that keeps hot water near distant fixtures; required where hot-water developed length exceeds 50 feet." },
    { term: "Backflow assembly", def: "A device (RPZ, DCVA, PVB, SVBA) that protects the potable supply from a cross-connection." },
    { term: "Air gap", def: "A physical separation between a water outlet and the flood-level rim; the most reliable backflow protection." },
    { term: "Thermal expansion", def: "Water expanding as it heats; in a closed system it raises pressure until controlled by an expansion tank." },
    { term: "Fixture supply", def: "The final short connection that feeds one fixture from a branch, usually through an angle stop." },
    { term: "Trap seal", def: "Standing water in a trap that blocks sewer gas; the DWV side's guard at every fixture." },
    { term: "Plan review", def: "Checking a plumbing plan segment by segment for load, size, pressure, protection, and freeze errors before installation." }
  ],
  video: {
    title: "How Plumbing Works in Your House, Street to Sewer",
    embedUrl: "https://www.youtube.com/embed/rPPk9bEVBG8",
    note: "The whole house plumbing system, street to sewer — watch the supply and drain sides meet at every fixture, then trace the design exercise in this module on the same path.",
    more: [
      { title: "How your House Plumbing Works", url: "https://www.youtube.com/watch?v=SsPtZqOAf4s" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Trace the full water supply path from a municipal main to a second-floor shower, naming every component in order.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Water main in the street. Step 2: Corporation stop. Step 3: Service pipe. Step 4: Curb stop. Step 5: Water meter. Step 6: Main shutoff. Step 7: Cold-water main. Step 8: Branch to the bathroom. Step 9: Water heater and hot-water branch (for the hot side). Step 10: Fixture supply with angle stop. Step 11: Shower valve and showerhead.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> Design the water system for the two-bath house in this module: 2 flush-tank water closets, 2 lavatories, 1 tub-shower, 1 kitchen sink, 1 dishwasher, and a 5 gpm hose bibb. Give the total WSFU, the Hunter flow, and the total design flow.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Total the WSFU: 2 × 2.2 = 4.4; 2 × 0.7 = 1.4; tub-shower 1.4; kitchen sink 1.4; dishwasher 1.4. Total = <strong>10.0 WSFU</strong>. Step 2: Hunter curve (flush tank): 10 WSFU = <strong>14.6 gpm</strong>. Step 3: Add the continuous hose bibb after the curve: 14.6 + 5 = <strong>19.6 gpm</strong> total design flow. Step 4: The service must carry 19.6 gpm within the pressure budget and the 8 ft/s velocity limit.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> The same house has 45 psi static at the meter, the highest fixture is 20 feet above the meter, and the fixture needs 8 psi minimum. What is the available pressure loss for friction?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Elevation loss = 20 ft × 0.433 psi/ft = about 8.7 psi. Step 2: Available pressure loss = 45 − 8.7 − 8 = <strong>about 28 psi</strong>. Step 3: The piping must carry the 19.6 gpm design flow over its developed length without losing more than about 28 psi to friction.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A plan shows a public flushometer water closet counted at 2.2 WSFU, a 1-inch service for a 40 WSFU building, and a hot-water run of 80 feet with no recirculation. Name the three errors and the fix for each.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The water closet is wrong — a public flushometer water closet is 10.0 WSFU, not 2.2 (the private flush-tank value). Fix: use the public column. Step 2: A 1-inch service cannot carry 40 WSFU (26.3 gpm) within the velocity limit — fix by upsizing the service. Step 3: An 80-foot hot-water run exceeds the 50-foot limit (IPC 607.2) — fix with a recirculation loop or a point-of-use heater.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A plan shows a hose bibb with no backflow protection, a water heater with no expansion tank in a closed system, and a shower without a pressure-balanced valve. Put the fixes in priority order and justify the order.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Hose bibb first — contamination of the drinking water threatens the whole street, so it comes before everything. Step 2: Expansion tank second — uncontrolled pressure can rupture the heater. Step 3: Shower valve third — scald protection matters, but it affects one fixture, not the whole supply. Step 4: Priority follows the scope of harm: contamination, then pressure, then scald.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A bathroom sink fills slowly and drains slowly. Explain how to diagnose which side is at fault, and why the fixture might have two problems at once.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Slow filling is a supply-side symptom — check the angle stop, the fixture supply, and the pressure at the fixture. Step 2: Slow draining is a DWV-side symptom — check the trap, the trap arm, and the vent. Step 3: The two sides are independent, so a fixture can have both problems at once — a restricted supply and a partially blocked drain. Step 4: Fix both sides, or the customer will call you back for the one you missed.</p>"
    }
  ],
  quiz: [
    {
      q: "A small house totals 10 WSFU with flush-tank fixtures, plus a 5 gpm continuous hose bibb. The total design flow is:",
      choices: ["9.4 gpm", "14.6 gpm", "19.6 gpm", "24.6 gpm"],
      answer: 2,
      explanation: "Correct: (c). 10 WSFU converts to 14.6 gpm on the flush-tank Hunter curve, then the continuous 5 gpm is added: 14.6 + 5 = 19.6 gpm. (a) is the 5-WSFU curve value. (b) forgets the hose bibb. (d) adds the hose bibb through the curve instead of in gpm."
    },
    {
      q: "A design calls for a 1-inch water service. The street pressure is 45 psi and the highest fixture is 20 feet above the meter. The pressure at that fixture before friction loss is about:",
      choices: ["25 psi", "36 psi", "45 psi", "54 psi"],
      answer: 1,
      explanation: "Correct: (b). Elevation costs about 0.433 psi per foot: 20 × 0.433 is about 8.7 psi, so 45 − 8.7 is about 36 psi. (a) subtracts 20 psi, or 1 psi per foot. (c) ignores elevation. (d) adds pressure for going up."
    },
    {
      q: "A design review finds the water heater set to 140°F with no tempering valve and a shower valve that is not pressure-balanced. The priority fix is:",
      choices: ["Add a booster pump", "Add a tempering or mixing valve and a pressure-balanced shower valve so the shower cannot exceed 120°F", "Increase the pipe size", "Add a second water heater"],
      answer: 1,
      explanation: "Correct: (b). Tempering and a pressure-balanced valve are the scald protections the code requires. (a) A booster addresses pressure, not temperature. (c) Pipe size does not control temperature. (d) A second heater adds capacity, not safety."
    },
    {
      q: "A design review finds a 1-inch water service for a house totaling 40 WSFU flush-tank (26.3 gpm design flow). The service is:",
      choices: ["Correct — 1 inch carries any residential load", "Undersized — 26.3 gpm through a 1-inch service would exceed the 8 ft/s design velocity, so a larger service is needed", "Oversized — 3/4 inch would be enough", "Correct if a PRV is added"],
      answer: 1,
      explanation: "Correct: (b). 26.3 gpm is too much flow for a 1-inch service at the 8 ft/s design limit; the service must go up a size. (a) ignores velocity. (c) A 3/4-inch service is smaller, not larger. (d) A PRV reduces pressure; it does not add capacity."
    },
    {
      q: "A design review finds a hose bibb with no backflow protection, a water heater with no expansion tank in a closed system, and a shower without a pressure-balanced valve. The correct priority order is:",
      choices: ["Shower valve first, then the hose bibb, then the expansion tank", "Hose bibb first (contamination), then the expansion tank (pressure), then the shower valve (scald)", "Expansion tank first, then the shower valve, then the hose bibb", "All three are equally urgent, so fix them in any order"],
      answer: 1,
      explanation: "Correct: (b). Contamination of the drinking water comes first, then uncontrolled pressure, then scald protection. (a) puts scald ahead of contamination. (c) puts pressure ahead of contamination. (d) treats unlike hazards as equal — contamination that can reach the whole neighborhood is not equal to a single shower's scald risk."
    },
    {
      q: "The six-step water system job sequence in order is:",
      choices: ["Install, test, size, source, quality, prove", "Source, size, install, test, protect, prove", "Protect, size, source, test, install, prove", "Size, source, protect, install, test, prove"],
      answer: 1,
      explanation: "Correct: (b). Source, size, install, test, protect, prove. (a) starts with install before the source is known. (c) starts with protection before the system exists. (d) sizes before the source is established."
    },
    {
      q: "A plan shows a public flushometer water closet at 2.2 WSFU. The error is:",
      choices: ["The value is too low — a public flushometer water closet is 10.0 WSFU", "The value is too high — it should be 1.4 WSFU", "The value is correct", "The value should be 5.0 WSFU, the public flush-tank value"],
      answer: 0,
      explanation: "Correct: (a). 2.2 WSFU is the private flush-tank value; a public flushometer water closet is 10.0 WSFU. (b) 1.4 WSFU is a bathtub or kitchen sink. (c) The value is wrong — it uses the private flush-tank column for a public flushometer fixture. (d) 5.0 WSFU is the public flush-tank value, not the flushometer value."
    },
    {
      q: "A plan shows a water heater's T&P discharge pipe terminating at a floor drain with no air gap. The correct fix is:",
      choices: ["Leave it — a floor drain is an approved termination", "Terminate the discharge through an air gap to an approved receptor, so a backup cannot enter the heater", "Cap the discharge pipe", "Route the discharge to the roof"],
      answer: 1,
      explanation: "Correct: (b). The T&P discharge must terminate through an air gap so a drain backup cannot reach the heater. (a) A direct connection to a drain is a cross-connection. (c) Capping the discharge defeats the relief valve. (d) Routing to the roof does not provide the required visible termination."
    }
  ],
  studyGuide: `
<h3>Module 12 — Course Review: Quick Reference</h3>
<p><strong>Core idea:</strong> Source, size, install, test, protect, prove. Every water system job follows that order, and the design exercise in this module uses every module in the course.</p>
<p><strong>Full path:</strong> Source → service (curb stop, meter, main shutoff) → distribution → fixture supply → fixture. Hot water through the heater, with recirculation where the run exceeds 50 feet.</p>
<div class="formula">Design exercise: 10.0 WSFU → 14.6 gpm (flush-tank curve) → 19.6 gpm with the 5 gpm hose bibb &nbsp;|&nbsp; Available pressure loss = 45 − 8.7 − 8 = about 28 psi &nbsp;|&nbsp; Velocity limit about 8 ft/s</div>
<p><strong>Plan review questions:</strong> Source, load, size, pressure, protection, freeze. Check the WSFU column, the Hunter conversion, the PRV threshold (80 psi), the expansion control, the tempering (120°F shower), the backflow protection, and the 50-foot hot-water limit.</p>
<p><strong>The fixture is the bridge:</strong> Supply brings clean water in; DWV carries used water out. Weak flow is supply; slow draining is DWV; a fixture can have both problems at once.</p>
<p><strong>Self-check:</strong> A house totals 20 WSFU flush-tank plus a 5 gpm hose bibb, with 50 psi static and the highest fixture 10 feet up needing 8 psi. What is the total design flow and the available pressure loss? (Answer: 19.6 + 5 = 24.6 gpm; 50 − 4.3 − 8 = about 38 psi.)</p>
`
};
