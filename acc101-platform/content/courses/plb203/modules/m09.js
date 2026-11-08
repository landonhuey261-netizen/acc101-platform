// Plumbing 203 - Module 9: Private Water Supply Well Systems (NCCER L4)
module.exports = {
  number: 9,
  slug: "private-water-supply-well-systems",
  title: "Private Water Supply Well Systems",
  estTime: "3–4 hours",
  objectives: [
    "Explain how a private well water system works, from the aquifer to the tap.",
    "Compare submersible pumps and jet pumps, and know which suits which well.",
    "Describe the pressure tank and pressure switch, and how they work together.",
    "Diagnose the common well system faults: no water, short cycling, low pressure, and air in the lines.",
    "Explain water quality basics: testing, hardness, iron, and treatment options."
  ],
  sections: [
    {
      heading: "Your Own Water Utility",
      html: `
<p>About one in seven American homes is not connected to a public water supply. Those homes get their water from a private well, and the plumber who services them is, in effect, the water utility: the well, the pump, the tank, and the treatment are all the plumber's responsibility.</p>
<p>The system starts underground. A <strong>well</strong> is a drilled or dug hole lined with a <strong>casing</strong> that reaches down to an <strong>aquifer</strong> — a water-bearing layer of sand, gravel, or rock. A <strong>well cap</strong> seals the top of the casing against surface water, insects, and debris. Inside the casing, a <strong>screen</strong> at the bottom lets water in while keeping sand out. The water level in the well rises to the level of the water table; the pump's job is to lift it from there to the house.</p>
<p>From the well, water travels through a buried supply line to the house, into a <strong>pressure tank</strong>, and then into the home's distribution piping. A <strong>pressure switch</strong> watches the tank pressure and turns the pump on and off. A <strong>check valve</strong> keeps water from flowing back down into the well when the pump stops. That is the whole system — and every part of it must work, because there is no city main to fall back on.</p>
<div class="callout"><strong>Key idea:</strong> A well system is a complete water utility in miniature: source, pump, storage, pressure control, and treatment. When any one part fails, the house has no water — so diagnosis must be fast and certain.</div>`
    },
    {
      heading: "Pumps: Submersible and Jet",
      html: `
<p>There are two main pump types, and the well's depth decides which one fits.</p>
<p><strong>Submersible pumps</strong> sit underwater inside the well casing, below the water level. A sealed electric motor drives a stack of impellers that push water up the drop pipe to the surface. Because they push rather than pull, submersible pumps work at almost any depth, run quietly, and are the standard for deep wells. Their weakness is access: when one fails, it must be pulled up out of the well, which takes equipment and help.</p>
<p><strong>Jet pumps</strong> sit above ground — in a basement, a pump house, or a crawl space — and pull water up by suction. A <strong>shallow-well jet pump</strong> works for wells less than about 25 feet deep. A <strong>deep-well jet pump</strong> uses two pipes — one to send water down to a jet assembly in the well, one to bring it back up — and can lift water from deeper wells. Jet pumps are easy to reach and service, but they are limited by suction: they cannot lift water from very deep wells, and they are noisier than submersibles.</p>
<p>The pump's capacity is matched to the well and the house: the well's yield (how fast it refills), the depth to the water, and the home's peak demand all set the pump size. An oversized pump in a low-yield well will pump the well dry and cycle on and off; an undersized pump cannot keep up with demand. The well driller's record — depth, water level, and yield — is the starting point for every pump decision.</p>
<div class="callout"><strong>Key idea:</strong> Submersible = pushes from below, works at any depth, hard to reach. Jet = pulls from above, easy to service, limited by depth. The well's depth and yield choose the pump, not the plumber's preference.</div>`
    },
    {
      heading: "The Pressure Tank and the Pressure Switch",
      html: `
<p>The pressure tank and the pressure switch are the system's brain and its lungs, and they work as a pair.</p>
<p>The <strong>pressure tank</strong> is a steel tank with a rubber bladder or diaphragm inside. Water fills one side, compressed air fills the other. When a tap opens, the air pressure pushes stored water out to the fixtures — so the pump does not need to run for every glass of water. When the tank empties to its low point, the pump starts and refills it. A healthy tank means the pump runs in long, efficient cycles; a failed tank means the pump starts and stops constantly.</p>
<p>The <strong>pressure switch</strong> is the control that turns the pump on and off. It has two settings: a cut-in pressure, where the pump starts, and a cut-out pressure, where the pump stops. The tank's air charge must be set to match the switch — typically a couple of pounds below the cut-in pressure, measured with the tank drained of water. If the air charge is wrong, the tank cannot store water properly and the pump short-cycles.</p>
<p><strong>Short cycling</strong> — the pump starting and stopping every few seconds — is the symptom that brings most well service calls. Its usual causes are a waterlogged tank (the bladder has failed and the tank is full of water, with no air cushion), a wrong air charge, or a leak in the system that keeps dropping the pressure. Short cycling burns out pump motors and pressure switches, so it is not a nuisance to live with — it is a fault to fix promptly.</p>
<div class="callout"><strong>Key idea:</strong> The tank stores water under air pressure; the switch starts and stops the pump. Short cycling almost always means the tank has lost its air cushion — check the tank first, the switch second, and the pump last.</div>`
    },
    {
      heading: "Diagnosing Well System Faults",
      html: `
<p>Well system faults fall into a short list, and each has its own tells.</p>
<p><strong>No water at all.</strong> Check power first: the breaker, the disconnect, and the pressure switch itself. Then check the pressure gauge: if the system has pressure but no water flows, the fault is downstream — a closed valve or a frozen line. If the gauge reads zero and the pump does not run, the fault is electrical or the pump has failed. If the pump runs but builds no pressure, the well may be dry, the drop pipe may have broken, or the pump may have lost prime (jet pumps) or failed (submersibles).</p>
<p><strong>Low pressure.</strong> Check the pressure gauge against the switch settings, check the tank's air charge, and look for a clogged filter or a partially closed valve. A pressure switch with burned or pitted contacts will not start the pump reliably. Sediment in the system can choke a filter or a fixture aerator — check the easy points before condemning the pump.</p>
<p><strong>Air in the lines.</strong> Spitting faucets and air in the water mean air is entering the system — usually a leak on the suction side of a jet pump, a failing check valve, or a well whose water level has dropped below the pump intake. A submersible pump that is sucking air is a well-level problem, and running it dry will destroy it.</p>
<p><strong>Dirty or smelly water.</strong> Sediment, iron staining, sulfur smell, or cloudiness are water-quality problems, not pump problems. They point to testing first and treatment second — test the water, then choose the treatment that matches what the test found, and retest after treatment.</p>
<div class="callout"><strong>Key idea:</strong> No water = power, switch, pump, well — in that order. Low pressure = gauge, tank charge, filter, switch contacts. Air in the lines = suction leak or a falling water level. Work the list in order and you will not replace a good pump.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>A well system is a private water utility: well and casing, pump, pressure tank, pressure switch, check valve, and treatment.</li>
<li>Submersible pumps push from below and work at any depth; jet pumps pull from above and are depth-limited — shallow-well under about 25 feet, deep-well with a two-pipe jet assembly.</li>
<li>The pressure tank stores water under an air cushion; the switch starts and stops the pump at its cut-in and cut-out settings.</li>
<li>Short cycling means the tank has lost its air cushion — check the tank first.</li>
<li>Water quality is tested, then treated: hardness with a softener, iron with a filter, bacteria with disinfection. Test before treating, and retest after.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Replacing a pump for short cycling. The pump is usually the victim, not the cause — a waterlogged tank or a wrong air charge makes the pump start and stop until it burns out. Fix the tank and the pump may live for years.</div>
<div class="callout"><strong>Common mistake:</strong> Installing treatment without testing the water first. A softener does not remove iron, a sediment filter does not kill bacteria, and an iron filter does not soften water. The test result chooses the treatment — never the other way around.</div>
<p><strong>Ready-to-work link:</strong> Module 10 stays with small, self-contained systems: plumbing for mobile homes and travel trailer parks, where the piping, the materials, and the rules are different from site-built houses.</p>`
    }
  ],
  keyTerms: [
    { term: "Well", def: "A drilled or dug hole reaching an aquifer, lined with casing, that supplies water to a building." },
    { term: "Aquifer", def: "An underground layer of sand, gravel, or rock that holds and yields water." },
    { term: "Casing", def: "The pipe lining a well that keeps the hole open and keeps surface water and soil out." },
    { term: "Well cap", def: "The sealed cover on top of a well casing that keeps out surface water, insects, and debris." },
    { term: "Submersible pump", def: "A pump installed underwater inside the well that pushes water to the surface." },
    { term: "Jet pump", def: "An above-ground pump that lifts water by suction, using a jet assembly." },
    { term: "Shallow-well jet pump", def: "A jet pump for wells less than about 25 feet deep, using a single suction pipe." },
    { term: "Deep-well jet pump", def: "A jet pump using two pipes and a down-hole jet assembly to lift water from deeper wells." },
    { term: "Pressure tank", def: "A tank with a bladder or diaphragm that stores water under air pressure so the pump need not run for every use." },
    { term: "Pressure switch", def: "The control that starts the pump at a cut-in pressure and stops it at a cut-out pressure." },
    { term: "Cut-in pressure", def: "The low pressure at which the pressure switch starts the pump." },
    { term: "Cut-out pressure", def: "The high pressure at which the pressure switch stops the pump." },
    { term: "Short cycling", def: "A pump starting and stopping rapidly, usually because the pressure tank has lost its air cushion." },
    { term: "Check valve", def: "A one-way valve that keeps water from flowing back down into the well when the pump stops." },
    { term: "Water yield", def: "The rate at which a well refills, usually measured in gallons per minute." },
    { term: "Water softener", def: "Treatment equipment that removes hardness minerals (calcium and magnesium) from water." },
    { term: "Coliform test", def: "A water test for coliform bacteria, used as an indicator of bacterial contamination." },
    { term: "Drop pipe", def: "The pipe running down inside a well from the surface to the submersible pump." }
  ],
  video: {
    title: "Components Of A Typical Well Water System",
    embedUrl: "https://www.youtube.com/embed/KuCWx-b7Cm4",
    note: "A component-by-component tour of a well water system: well, pump, tank, and switch. Pause at each part and name its job before the video does.",
    more: [
      { title: "Well Pump, Parts, and Components Explained", url: "https://www.youtube.com/watch?v=_BHrEvxNX0g" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A house on a well has no water. The breaker is on, the pressure gauge reads zero, and the pump does not run. List your checks in order.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Check power at the pressure switch — is voltage reaching the switch? Step 2: Check the switch itself — are the contacts closed and clean, or burned and pitted? Step 3: Check the pump's electrical connections and the motor — a failed motor or a broken wire leaves the pump silent. Step 4: If power reaches a good motor and it still does not run, the pump has failed and must be pulled (submersible) or replaced (jet). Step 5: Only after the pump is proven good do you consider the well itself — a dry well would show a pump that runs but builds no pressure, not a pump that never starts.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A well pump starts and stops every ten seconds while a tap runs. Name the most likely cause, how you confirm it, and why it must be fixed promptly.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The most likely cause is a waterlogged pressure tank — the bladder has failed, the tank is full of water, and there is no air cushion to store pressure. Step 2: Confirm by checking the tank's air charge with the system drained of water, and by tapping the tank — a waterlogged tank sounds solid all the way up. Step 3: Fix it by replacing the tank (or the bladder, if the tank design allows) and setting the air charge correctly. Step 4: It must be fixed promptly because short cycling burns out pump motors and pressure switches — the pump is the victim, and it will fail next.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A well is 120 feet deep with the water level at 80 feet. Should you install a shallow-well jet pump, a deep-well jet pump, or a submersible pump? Explain.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: A shallow-well jet pump is out — it lifts from less than about 25 feet, and this water is 80 feet down. Step 2: A deep-well jet pump could work with its two-pipe jet assembly, and a submersible pump would also work. Step 3: The submersible is the better choice for a 120-foot well: it pushes rather than pulls, works at any depth, runs quietly, and is the standard for deep wells. Step 4: The trade-off is access — a failed submersible must be pulled from the well — but for this depth the submersible is the right pump.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A customer's well water leaves rust-colored stains on fixtures and laundry, and tastes metallic. What is the likely problem, what test confirms it, and what treatment fixes it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The likely problem is dissolved iron in the water. Step 2: Confirm with a water test for iron content — do not guess the treatment from the stains alone. Step 3: The treatment is an iron filter (often with oxidation), sized to the tested iron level and the household's flow rate. Step 4: A water softener alone will not fix high iron, and a sediment filter will not remove dissolved iron — the test result chooses the treatment.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A jet pump system has air spitting from the faucets and the pump loses prime overnight. Name the two most likely causes and how you check each.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Cause one — a leak on the suction side of the pump (a fitting, a joint, or the foot valve) is letting air in; check by inspecting suction fittings and testing the foot valve's hold. Step 2: Cause two — the well's water level has dropped below the jet assembly or the foot valve, so the pump draws air; check the water level in the well against the driller's record. Step 3: Fix the suction leak or address the water level, then re-prime the pump and confirm the faucets run clear. Step 4: A check valve that does not hold will also let the system drain back overnight — test it as part of the same visit.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A new well owner's water test comes back positive for coliform bacteria. What do you tell the owner, and what are the next steps?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Tell the owner plainly that coliform indicates bacterial contamination, the water should not be drunk until it is cleared, and the well needs disinfection and retesting. Step 2: The next steps are to shock-chlorinate the well following the health department's guidance, flush the system, and retest. Step 3: If contamination recurs, investigate the source — a damaged well cap, surface water entering the casing, or a nearby contamination source — and consider continuous disinfection treatment. Step 4: Never treat a positive bacteria test as a minor result, and never install a filter and call it disinfection.</p>"
    }
  ],
  quiz: [
    {
      q: "A submersible well pump differs from a jet pump mainly in that it:",
      choices: ["Sits above ground and pulls water by suction", "Sits underwater in the well and pushes water to the surface", "Needs no electricity", "Only works in shallow wells"],
      answer: 1,
      explanation: "Correct: (b). A submersible sits below the water level and pushes water up, so it works at almost any depth. (a) describes a jet pump. (c) Both types need electricity. (d) Submersibles are the standard for deep wells, not shallow ones."
    },
    {
      q: "A shallow-well jet pump is suitable for wells less than about:",
      choices: ["10 feet deep", "25 feet deep", "100 feet deep", "300 feet deep"],
      answer: 1,
      explanation: "Correct: (b). Shallow-well jet pumps lift by suction and work for wells less than about 25 feet deep. (a) is shallower than the limit but not the standard figure. (c) and (d) are far beyond suction's reach — a deep-well jet or a submersible is needed there."
    },
    {
      q: "The pressure tank in a well system exists to:",
      choices: ["Heat the water", "Store water under air pressure so the pump does not run for every use", "Filter sediment", "Disinfect the water"],
      answer: 1,
      explanation: "Correct: (b). The tank's air cushion pushes stored water to fixtures between pump cycles. (a) Heating is not the tank's job. (c) Sediment filtration is a separate device. (d) Disinfection is a treatment step, not the tank's function."
    },
    {
      q: "A well pump that starts and stops every few seconds is most likely suffering from:",
      choices: ["A waterlogged pressure tank that has lost its air cushion", "A pump that is too large", "A well that is too deep", "A pressure switch set too high"],
      answer: 0,
      explanation: "Correct: (a). With no air cushion, the tank stores almost no water, so pressure falls immediately and the pump restarts — short cycling. (b) An oversized pump can cycle, but the classic cause is the tank. (c) Depth does not cause rapid cycling. (d) A high cut-out setting changes the pressure range, it does not collapse the tank's storage."
    },
    {
      q: "A house has no water, the gauge reads zero, and the pump does not run. The first thing to check is:",
      choices: ["The well's water level", "Power — the breaker, the disconnect, and the pressure switch", "The water softener", "The kitchen faucet aerator"],
      answer: 1,
      explanation: "Correct: (b). A silent pump with zero pressure is an electrical problem until proven otherwise — check power first. (a) A dry well would show a pump that runs but builds no pressure. (c) The softener is downstream of the pump and tank. (d) An aerator affects one fixture, not the whole house."
    },
    {
      q: "The check valve in a well system prevents:",
      choices: ["Water from entering the house", "Water from flowing back down into the well when the pump stops", "The pump from starting", "Air from leaving the tank"],
      answer: 1,
      explanation: "Correct: (b). The check valve is a one-way valve that holds water in the system when the pump stops. (a) It allows flow toward the house. (c) It has nothing to do with starting the pump. (d) Air handling is the tank's and vents' job."
    },
    {
      q: "Rust-colored stains on fixtures and a metallic taste in well water most likely indicate:",
      choices: ["Bacterial contamination", "Dissolved iron in the water", "Low pressure", "A failing pump"],
      answer: 1,
      explanation: "Correct: (b). Iron stains fixtures and laundry rust-colored and tastes metallic. (a) Bacteria are confirmed by a coliform test and do not stain fixtures rust-colored. (c) Low pressure does not change water color or taste. (d) A failing pump affects flow, not iron content."
    },
    {
      q: "Before choosing water treatment for a well, the correct first step is to:",
      choices: ["Install a water softener", "Test the water to find out what is actually in it", "Replace the pump", "Shock-chlorinate the well"],
      answer: 1,
      explanation: "Correct: (b). The test result chooses the treatment — a softener does not remove iron, a filter does not kill bacteria. (a) installs treatment before knowing the problem. (c) replaces a pump for a water-quality issue. (d) shock chlorination is the response to a positive bacteria test, not a first step for every water problem."
    }
  ],
  studyGuide: `
<h3>Module 9 — Private Water Supply Well Systems: Quick Reference</h3>
<p><strong>System:</strong> Well + casing + cap → pump → pressure tank + pressure switch → house. Check valve holds water up when the pump stops.</p>
<p><strong>Pumps:</strong> Submersible = pushes from below, any depth, hard to reach. Jet = pulls from above, easy to service; shallow-well under ~25 ft, deep-well with a two-pipe jet assembly.</p>
<p><strong>Tank + switch:</strong> Tank stores water under an air cushion; switch starts the pump at cut-in and stops it at cut-out. Air charge is set with the tank drained of water.</p>
<p><strong>Faults:</strong> No water = power, switch, pump, well. Short cycling = waterlogged tank first. Air in lines = suction leak or falling water level.</p>
<p><strong>Water quality:</strong> Test first, treat second. Iron = iron filter. Hardness = softener. Bacteria = disinfection + retest. Retest after treatment.</p>
<p><strong>Self-check:</strong> A pump short-cycles every ten seconds. List your checks in order — tank, air charge, switch, leak — and explain why you check the tank before the pump.</p>
`
};
