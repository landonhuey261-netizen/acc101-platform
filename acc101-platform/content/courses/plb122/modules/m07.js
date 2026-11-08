// Plumbing 122 - Module 7: Valves: Types, Selection & Service
module.exports = {
  number: 7,
  slug: "valves",
  title: "Valves: Types, Selection & Service",
  estTime: "3–4 hours",
  objectives: [
    "Name the common valve types — ball, gate, globe, check, angle stop, and hose bibb — and state the job of each one.",
    "Explain why a full-port ball valve is the right main shutoff and why a globe valve is the wrong one.",
    "Explain how a check valve works and where backflow protection needs one.",
    "Describe how to service a faucet cartridge, a toilet fill valve, and an angle stop.",
    "Explain how to choose a valve by service: shutoff, throttling, backflow prevention, or fixture control."
  ],
  sections: [
    {
      heading: "The Shutoffs: Ball and Gate",
      html: `
<p>Every water system needs valves that can stop the water completely, and the two shutoff valves you will meet most are the <strong>ball valve</strong> and the <strong>gate valve</strong>. A ball valve has a drilled ball inside the body: a quarter turn of the handle rotates the ball and the water is off — fast, positive, and easy to tell at a glance (handle in line with the pipe means open, across the pipe means closed). A <strong>full-port</strong> ball valve has a bore the same size as the pipe, so it adds almost no friction loss. That is why the main shutoff for a house should be a full-port ball valve.</p>
<p>A gate valve has a wedge-shaped gate that lowers into the flow path when the handle is turned many times. It also opens fully and adds little friction loss, but it is slow to operate, its gate can stick or corrode in place, and a worn gate can leak past the seat. Gate valves still appear on older main shutoffs and on large commercial lines, but for a house, the ball valve has replaced them in practice.</p>
<p>The rule for shutoffs is simple: a shutoff valve must open fully and shut off tight. Any valve that throttles — that is, that is designed to sit half open — is the wrong shutoff, because a half-open valve wears its seat and leaks. Choose the valve by the service, not by what is on the truck.</p>
<div class="callout"><strong>Key idea:</strong> A main shutoff should be a full-port ball valve: quarter-turn, full flow, positive shutoff, and obvious at a glance. Gate valves work but are slower and can stick.</div>`
    },
    {
      heading: "The Throttlers: Globe Valves",
      html: `
<p>A <strong>globe valve</strong> is built to throttle — to sit partway open and control flow precisely. Inside, a disc lowers onto a seat, and the water must make an S-shaped turn through the body. That shape gives fine control but adds a lot of friction loss, which is why a globe valve is a poor shutoff and a poor choice for a main line. Where globe valves shine is in throttling service: hose bibbs are globe valves, and so are many outdoor faucets and boiler drains.</p>
<p>Recognize a globe valve by its shape: the body is round and bulbous (hence globe), and the handle turns many times from open to closed. A globe valve used as a main shutoff will starve the house of pressure — the S-turn alone can cost several psi at full flow. If you find one on a main, recommend replacing it with a ball valve.</p>
<p>Throttling has a place, though. A globe valve on a hose bibb lets the user control the flow from a trickle to full, and a globe-style sillcock with a vacuum breaker protects the supply from backsiphonage at the same time. The valve is not bad; the application decides whether it is right.</p>
<div class="callout"><strong>Key idea:</strong> Globe valves throttle well and shut off poorly. Use them where fine control matters (hose bibbs) and never as a main shutoff, where their S-turn wastes pressure.</div>`
    },
    {
      heading: "The One-Way Valves: Check Valves",
      html: `
<p>A <strong>check valve</strong> allows flow in one direction only and closes against reverse flow. Inside is a disc, ball, or flapper held open by forward flow; when the flow reverses, pressure pushes the disc back onto its seat and stops the water. Check valves are automatic — no handle, no operator — and they are the working part inside many backflow preventers (Module 8), booster pump systems (Module 5), and sump pump discharges (Plumbing 121).</p>
<p>Check valves fail in two ways: stuck open (the disc is held off its seat by debris, so reverse flow passes) or stuck closed (scale or corrosion jams the disc, so no flow passes at all). A check valve that is stuck open is worse than no check valve, because the system looks protected when it is not. Testable backflow assemblies exist for exactly this reason — their check valves can be verified in place.</p>
<p>Install a check valve in the right direction — the body is marked with an arrow — and in the right orientation. A swing check installed upside down will not close, and a check valve installed backwards blocks the flow it is meant to pass. The arrow is not decoration.</p>
<div class="callout"><strong>Key idea:</strong> A check valve passes flow one way and blocks it the other, automatically. Install it with the arrow in the direction of flow, and remember it can fail open — which is why testable assemblies exist.</div>`
    },
    {
      heading: "Fixture Valves: Angle Stops, Fill Valves, and Cartridges",
      html: `
<p>At each fixture, an <strong>angle stop</strong> (fixture shutoff) lets the fixture be serviced without shutting off the house. It is a small quarter-turn or multi-turn valve under the sink or behind the toilet, connecting the branch to the fixture supply. Angle stops are the most-used valves in a house and the most common source of small leaks — a weeping angle stop is usually a worn packing nut or a corroded stem, fixed by tightening the packing nut or replacing the valve.</p>
<p>A toilet's <strong>fill valve</strong> (ballcock) refills the tank after a flush and shuts off at the set water level. The two common failures are a fill valve set too high (water runs into the overflow tube forever) and a worn <strong>flapper</strong> (tank water leaks to the bowl, so the fill valve keeps topping up). Both waste water silently — a running toilet can waste hundreds of gallons a day — and both are cheap fixes: adjust the float, or replace the flapper.</p>
<p>Modern faucets use <strong>cartridges</strong> instead of washers. A dripping single-handle faucet is usually a worn cartridge: shut off the angle stops, pull the handle and retaining clip, swap the cartridge for the same model, and reassemble. Cartridges are model-specific — take the old one to the supply house and match it exactly, because a close cartridge is a leaking cartridge.</p>
<div class="callout"><strong>Key idea:</strong> Angle stops isolate fixtures; fill valves and flappers control toilets; cartridges control modern faucets. Most fixture valve failures are cheap, common, and fixed at the fixture — not at the main.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Ball valve: quarter-turn, full-port, positive shutoff — the right main shutoff. Gate valve: full flow but slow and can stick.</li>
<li>Globe valve: built to throttle, adds friction loss — right for hose bibbs, wrong as a main shutoff.</li>
<li>Check valve: flow one way only, automatic; install with the arrow in the flow direction; can fail open.</li>
<li>Angle stops isolate fixtures; fill valves and flappers control toilets; cartridges control modern faucets.</li>
<li>Choose a valve by service: shutoff, throttling, backflow prevention, or fixture control.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Using a globe valve as a main shutoff. Its S-shaped waterway wastes several psi and starves the house — replace it with a full-port ball valve.</div>
<div class="callout"><strong>Common mistake:</strong> Installing a check valve backwards. The arrow marks the direction of flow; a backwards check valve blocks the flow it is meant to pass and protects nothing.</div>
<p><strong>Ready-to-Work link:</strong> NCCER Plumbing Level 1 expects you to identify valve types and their uses. If you can pick the right valve for a main shutoff, a hose bibb, and a backflow application, you have this module.</p>`
    }
  ],
  keyTerms: [
    { term: "Ball valve", def: "A quarter-turn valve with a drilled ball inside; a full-port ball valve has a bore the same size as the pipe and is the right main shutoff." },
    { term: "Full-port", def: "A valve bore the same diameter as the pipe, adding almost no friction loss when open." },
    { term: "Gate valve", def: "A valve with a wedge gate that lowers into the flow path; opens fully but is slow to operate and can stick." },
    { term: "Globe valve", def: "A valve built to throttle flow precisely, with an S-shaped waterway that adds friction loss; used for hose bibbs, not main shutoffs." },
    { term: "Throttling", def: "Controlling flow by holding a valve partly open; globe valves are built for throttling, ball and gate valves are not." },
    { term: "Check valve", def: "A valve that allows flow in one direction only and closes automatically against reverse flow." },
    { term: "Swing check valve", def: "A check valve with a hinged disc that swings open with forward flow and closes against reverse flow." },
    { term: "Angle stop", def: "A small shutoff valve at a fixture (under a sink, behind a toilet) that isolates that fixture for service." },
    { term: "Fill valve (ballcock)", def: "The valve that refills a toilet tank after flushing and shuts off at the set water level." },
    { term: "Flapper", def: "The rubber seal at the bottom of a toilet tank that lifts to flush and seals to hold the tank full; a worn flapper leaks tank water to the bowl." },
    { term: "Cartridge", def: "The replaceable valve insert in a modern single-handle faucet that controls flow and temperature; model-specific." },
    { term: "Packing nut", def: "The nut around a valve stem that compresses packing to seal the stem; tightening it often stops a weeping valve." },
    { term: "Hose bibb (sillcock)", def: "An outdoor faucet, usually a globe valve, often fitted with a vacuum breaker for backflow protection." },
    { term: "Shutoff valve", def: "A valve whose job is to stop flow completely; it must open fully and shut off tight." },
    { term: "Seat", def: "The surface inside a valve that the disc, ball, or gate seals against to stop flow." },
    { term: "Backflow prevention", def: "Stopping reverse flow from a fixture or system into the potable water supply; check valves are the working part of many backflow assemblies." }
  ],
  video: {
    title: "Plumbing Valves: Every Type You Need to Know",
    embedUrl: "https://www.youtube.com/embed/hX5CObSAfc0",
    note: "Every common plumbing valve type, shown and explained — watch how each one works inside, then match each type to its job from this module.",
    more: [
      { title: "Gate vs Ball vs Globe Valves Explained | Quick Guide", url: "https://www.youtube.com/watch?v=iT_vxAouNDk" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A house main shutoff is a globe valve and the fixtures are starved for pressure. Explain the cause and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The globe valve's S-shaped waterway adds friction loss even when fully open, wasting several psi. Step 2: The valve is doing the wrong job — it is a throttling valve used as a shutoff. Step 3: The fix is to replace it with a full-port ball valve, which opens to the full pipe diameter and adds almost no loss. Step 4: Confirm with a gauge before and after the change.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A check valve is installed on a sump pump discharge and the pump runs but no water leaves the pit. The valve arrow points toward the pump. Explain the problem and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The valve is backwards — the arrow must point in the direction of flow, away from the pump toward the discharge. Step 2: A backwards check valve blocks the flow it is meant to pass. Step 3: The fix is to remove and reinstall the valve with the arrow pointing away from the pump, in the direction of discharge. Step 4: Test the pump after the repair.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A toilet runs constantly — the tank refills every few minutes even though nobody flushes. Name the two most likely causes and how to tell them apart.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A worn flapper leaking tank water to the bowl — test by adding food coloring to the tank and watching for color in the bowl without flushing. Step 2: A fill valve set too high — water runs into the overflow tube continuously. Step 3: Fix the flapper by replacing it, or fix the fill valve by lowering the float. Step 4: Either way, a running toilet wastes hundreds of gallons a day, so fix it promptly.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A single-handle kitchen faucet drips from the spout with the handle off. What is the most likely cause and the fix?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The most likely cause is a worn cartridge inside the faucet. Step 2: Shut off the angle stops, pull the handle and retaining clip, and remove the cartridge. Step 3: Take the old cartridge to the supply house and match it exactly — cartridges are model-specific. Step 4: Install the new cartridge, reassemble, and turn the stops back on.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> An angle stop under a sink weeps around the stem. What is the first thing to try, and what is the fix if that fails?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: First, tighten the packing nut around the stem a quarter turn — a weeping stem is usually worn packing. Step 2: If tightening stops the weep, the valve is serviceable. Step 3: If it still weeps, or the valve will not shut off fully, replace the angle stop. Step 4: Always shut off the main and drain the line before replacing a stop.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Choose the right valve for each job and justify it: (a) main shutoff for a house, (b) outdoor hose bibb, (c) preventing reverse flow into a potable line.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: (a) Full-port ball valve — quarter-turn, full flow, positive shutoff, obvious at a glance. Step 2: (b) Globe-style sillcock — built to throttle, so the user can control flow, and often fitted with a vacuum breaker. Step 3: (c) Check valve — automatic one-way flow, no operator needed, and the working part of backflow assemblies. Step 4: Each valve is chosen by its service, not by what is on the truck.</p>"
    }
  ],
  quiz: [
    {
      q: "A main shutoff valve for a house should be:",
      choices: ["A globe valve, for fine throttling", "A full-port ball valve or gate valve that opens fully and shuts off tight", "A check valve", "A tempering valve"],
      answer: 1,
      explanation: "Correct: (b). A full-port ball or gate valve gives full flow and a positive shutoff. (a) A globe valve throttles but adds friction loss and is a poor shutoff. (c) A check valve only prevents backflow. (d) A tempering valve blends hot and cold water."
    },
    {
      q: "A globe valve is best used for:",
      choices: ["A main shutoff", "Throttling flow, such as a hose bibb", "Preventing backflow", "Blending hot and cold water"],
      answer: 1,
      explanation: "Correct: (b). Globe valves are built to throttle precisely. (a) A globe valve wastes pressure as a main shutoff. (c) Backflow prevention is a check valve's job. (d) Blending is a tempering or mixing valve's job."
    },
    {
      q: "A check valve's job is to:",
      choices: ["Throttle flow precisely", "Allow flow in one direction only and prevent backflow", "Reduce pressure", "Blend hot and cold water"],
      answer: 1,
      explanation: "Correct: (b). A check valve passes flow one way and closes against reverse flow. (a) Throttling is a globe valve's job. (c) Pressure reduction is a PRV's job. (d) Blending is a tempering or mixing valve's job."
    },
    {
      q: "A check valve installed backwards will:",
      choices: ["Work normally", "Block the flow it is meant to pass", "Increase the water pressure", "Throttle the flow smoothly"],
      answer: 1,
      explanation: "Correct: (b). A backwards check valve closes against the intended flow. (a) Direction matters — the arrow marks the flow direction. (c) It reduces flow to zero, not increases pressure. (d) It blocks flow entirely, not smoothly."
    },
    {
      q: "A toilet fill valve that keeps running after the tank fills is most likely caused by:",
      choices: ["A failed PRV", "A worn flapper or a fill valve set too high", "A water hammer arrestor", "A closed main shutoff"],
      answer: 1,
      explanation: "Correct: (b). A worn flapper leaks tank water to the bowl, so the fill valve keeps topping up; a fill valve set above the overflow does the same. (a) A PRV affects pressure, not the tank's water level. (c) An arrestor absorbs shock. (d) A closed shutoff stops water entirely."
    },
    {
      q: "A single-handle faucet that drips with the handle off most likely needs:",
      choices: ["A new angle stop", "A new cartridge", "A new PRV", "A larger supply pipe"],
      answer: 1,
      explanation: "Correct: (b). A dripping single-handle faucet is usually a worn cartridge. (a) The angle stop is under the sink, not in the faucet. (c) A PRV affects pressure, not a faucet drip. (d) Pipe size does not cause a drip."
    },
    {
      q: "An angle stop's job is to:",
      choices: ["Prevent backflow into the main", "Isolate one fixture for service without shutting off the house", "Reduce the water pressure", "Temper the hot water"],
      answer: 1,
      explanation: "Correct: (b). An angle stop lets one fixture be serviced while the rest of the house stays on. (a) Backflow prevention is a check valve's job. (c) Pressure reduction is a PRV's job. (d) Tempering is a mixing valve's job."
    },
    {
      q: "A full-port ball valve is preferred as a main shutoff because:",
      choices: ["It throttles flow precisely", "Its bore matches the pipe diameter, so it adds almost no friction loss", "It prevents backflow automatically", "It is the cheapest valve available"],
      answer: 1,
      explanation: "Correct: (b). A full-port bore adds almost no friction loss when open. (a) Ball valves are not throttling valves. (c) A ball valve does not prevent backflow. (d) Cost is not the reason — performance is."
    }
  ],
  studyGuide: `
<h3>Module 7 — Valves: Quick Reference</h3>
<p><strong>Core idea:</strong> Choose a valve by its service — shutoff, throttling, backflow prevention, or fixture control. The wrong valve in the right place still fails.</p>
<p><strong>Shutoffs:</strong> Full-port ball valve (quarter-turn, full flow, positive shutoff) is the right main shutoff. Gate valves work but are slow and can stick. Globe valves are the wrong main shutoff — their S-turn wastes pressure.</p>
<p><strong>Throttling:</strong> Globe valves, for hose bibbs and fine control.</p>
<p><strong>One-way:</strong> Check valves pass flow one way only. Install with the arrow in the flow direction. They can fail open — which is why testable assemblies exist.</p>
<p><strong>Fixture valves:</strong> Angle stops isolate fixtures; fill valves and flappers control toilets (a running toilet wastes hundreds of gallons a day); cartridges control modern faucets and are model-specific.</p>
<p><strong>Self-check:</strong> A house main shutoff is a globe valve and the fixtures are starved. What is the fix? (Answer: replace it with a full-port ball valve.)</p>
`
};
