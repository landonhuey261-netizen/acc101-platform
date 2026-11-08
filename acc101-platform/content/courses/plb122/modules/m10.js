// Plumbing 122 - Module 10: Private Water Supply: Wells & Pumps
module.exports = {
  number: 10,
  slug: "private-water-supply",
  title: "Private Water Supply: Wells & Pumps",
  estTime: "3–4 hours",
  objectives: [
    "Explain how a private well supplies a building and name its main components.",
    "Compare shallow-well jet pumps, deep-well jet pumps, and submersible pumps and state the depth each serves.",
    "Explain how a pressure tank and pressure switch work together to deliver steady pressure.",
    "Describe the wellhead, pitless adapter, and sanitary seal and why they protect the water.",
    "Diagnose the common well system failures: short-cycling, no water, and low pressure."
  ],
  sections: [
    {
      heading: "The Well System: Source, Pump, Tank, House",
      html: `
<p>Buildings beyond the municipal system get their water from a <strong>private well</strong> — a drilled or driven hole into a water-bearing layer of rock or sand (the aquifer). The system has four parts: the <strong>well</strong> itself, the <strong>pump</strong> that lifts the water, the <strong>pressure tank</strong> that stores it under pressure, and the <strong>distribution piping</strong> that carries it to the fixtures (Modules 1–3). There is no utility to call when something fails — the homeowner owns the whole chain, and the plumber is the one who keeps it running.</p>
<p>Water enters the well through a <strong>screen</strong> at the bottom of the casing, which keeps sand and gravel out while letting water in. The pump lifts the water to the surface and pushes it into the pressure tank. The tank holds water under air pressure so the fixtures see steady pressure between pump cycles. From the tank, the water flows through the house piping exactly like a municipal supply.</p>
<p>Well water quality is the homeowner's responsibility: there is no utility testing it. A new well is tested for bacteria, nitrates, iron, and hardness, and the water is treated as Module 9 describes. A well that has not been tested is a guess, not a supply.</p>
<div class="callout"><strong>Key idea:</strong> A well system is source, pump, tank, house — and the homeowner owns all of it. The pump lifts, the tank stores pressure, and testing is the homeowner's job.</div>`
    },
    {
      heading: "Pumps: Jet and Submersible",
      html: `
<p>A <strong>shallow-well jet pump</strong> sits above ground, usually in a basement or pump house, and lifts water by suction. It works by pumping water down a pipe to a jet (venturi) at the bottom of the well, which creates the suction that lifts more water up. Suction has a physical limit — about 25 feet — so a shallow-well jet pump serves wells about <strong>25 feet deep</strong> or less. Beyond that, suction alone cannot lift the water.</p>
<p>A <strong>deep-well jet pump</strong> also sits above ground, but its jet is down in the well, so it can lift from greater depths. It needs two pipes (one to send water down to the jet, one to bring it up) and it is less efficient than a submersible, but it keeps the pump accessible above ground for service.</p>
<p>A <strong>submersible pump</strong> sits down in the well, below the water level, and pushes water up. It is the standard choice for deep wells: it is efficient, quiet, and has no suction limit, because it pushes instead of pulling. Its disadvantage is access — servicing it means pulling the pump and its drop pipe out of the well, which takes equipment and time.</p>
<div class="callout"><strong>Key idea:</strong> Suction lifts about 25 feet — that is the shallow-well jet limit. Deep wells need a deep-well jet or a submersible, which pushes water up from below the water level.</div>`
    },
    {
      heading: "The Pressure Tank and Switch",
      html: `
<p>A pump that ran every time a faucet opened would burn out in months. The <strong>pressure tank</strong> prevents that: it stores a volume of water under air pressure, so the fixtures draw from the tank and the pump only runs to refill it. Inside the tank, an air cushion (or a rubber bladder) compresses as water enters and expands as water leaves, holding the pressure steady between pump cycles.</p>
<p>The <strong>pressure switch</strong> controls the pump. A typical <strong>40/60 switch</strong> turns the pump on at 40 psi and off at 60 psi; a <strong>30/50 switch</strong> cycles between 30 and 50 psi. The tank's air charge must match the switch — if the tank loses its air charge, it becomes <strong>waterlogged</strong>: with no air cushion, a tiny draw drops the pressure fast, the pump short-cycles on and off rapidly, and the pump and switch wear out.</p>
<p>Check the tank's air charge with the pump off and the tank drained: the air pressure should be 2 psi below the switch's cut-in pressure (38 psi for a 40/60 switch). A tank that will not hold its air charge has a failed bladder or a leaking air valve, and it needs replacement.</p>
<div class="callout"><strong>Key idea:</strong> The tank stores pressure so the pump cycles cleanly; the switch sets the cycle (40/60 or 30/50). A waterlogged tank has no air cushion and causes short-cycling.</div>`
    },
    {
      heading: "Protecting the Wellhead",
      html: `
<p>The top of the well — the <strong>wellhead</strong> — is where contamination enters if it is not protected. The well casing must extend above grade, the ground must slope away from it, and the cap must be sealed and vermin-proof. Surface water running into a well is the fastest way to contaminate a private supply.</p>
<p>The <strong>pitless adapter</strong> is the fitting that carries the water line out of the casing below frost depth, so the water enters the house underground and never sees freezing air. It replaced the old well pit, which was a hole in the ground that collected water and contaminants. The <strong>sanitary seal</strong> closes the top of the casing around the pump wiring and drop pipe, keeping insects, surface water, and debris out of the well.</p>
<p>Keep the area around the wellhead clear: no septic system, fuel tank, or chemical storage nearby, and no pesticide spraying. The setback distances are set by local code and health rules, and they exist because a contaminated well is a contaminated household.</p>
<div class="callout"><strong>Key idea:</strong> Protect the wellhead: casing above grade, ground sloping away, sealed cap, pitless adapter below frost depth, and a sanitary seal on top. Surface water in a well is a contaminated household.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Well system parts: well and screen, pump, pressure tank, pressure switch, distribution piping.</li>
<li>Shallow-well jet pumps lift by suction to about 25 feet. Deep-well jets and submersibles serve deeper wells; submersibles push from below the water level.</li>
<li>Pressure tank stores water under air pressure; pressure switch cycles the pump (30/50 or 40/60 psi).</li>
<li>A waterlogged tank has no air cushion and causes short-cycling, which burns out the pump and switch.</li>
<li>Protect the wellhead: casing above grade, ground sloping away, sealed cap, pitless adapter below frost depth, sanitary seal.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Replacing a short-cycling pump without checking the pressure tank. A waterlogged tank is the usual cause — the new pump will short-cycle too until the tank is fixed.</div>
<div class="callout"><strong>Common mistake:</strong> Treating well water like municipal water. Nobody tests a private well unless the homeowner asks — recommend testing for bacteria, nitrates, iron, and hardness, and treat what the test finds.</div>
<p><strong>Ready-to-Work link:</strong> NCCER Plumbing Level 4 covers private water supply systems. If you can explain to a homeowner why their pump short-cycles and why their wellhead needs protecting, you have this module.</p>`
    }
  ],
  keyTerms: [
    { term: "Private well", def: "A drilled or driven hole into an aquifer that supplies water to a building beyond the municipal system." },
    { term: "Aquifer", def: "A water-bearing layer of rock or sand underground that a well draws from." },
    { term: "Well screen", def: "A slotted section at the bottom of a well casing that lets water in while keeping sand and gravel out." },
    { term: "Shallow-well jet pump", def: "An above-ground pump that lifts water by suction; practical to about 25 feet of depth." },
    { term: "Deep-well jet pump", def: "An above-ground pump with its jet down in the well; lifts from greater depths than a shallow-well jet." },
    { term: "Submersible pump", def: "A pump installed down in the well, below the water level, that pushes water up; the standard choice for deep wells." },
    { term: "Jet (venturi)", def: "A nozzle in a jet pump that creates suction by forcing water through a constriction." },
    { term: "Pressure tank", def: "A tank with an air cushion that stores water under pressure so a pump cycles cleanly instead of running at every draw." },
    { term: "Pressure switch", def: "A switch that turns a well pump on at a low pressure and off at a high pressure; common settings are 30/50 and 40/60 psi." },
    { term: "Short-cycling", def: "A pump turning on and off rapidly, usually caused by a waterlogged pressure tank with no air cushion." },
    { term: "Waterlogged tank", def: "A pressure tank that has lost its air charge, so a tiny draw drops the pressure and triggers the pump." },
    { term: "Wellhead", def: "The top of a well at the surface; the casing, cap, and surrounding grade protect the well from surface contamination." },
    { term: "Pitless adapter", def: "A fitting that carries the water line out of a well casing below frost depth, replacing the old well pit." },
    { term: "Sanitary seal", def: "A sealed cap on top of a well casing that closes around the pump wiring and drop pipe, keeping out insects and surface water." },
    { term: "Drawdown", def: "The drop in a well's water level while the pump is running." },
    { term: "Cut-in / cut-out pressure", def: "The pressures at which a pressure switch turns the pump on (cut-in) and off (cut-out); 40/60 means on at 40, off at 60 psi." }
  ],
  video: {
    title: "Components Of A Typical Well Water System",
    embedUrl: "https://www.youtube.com/embed/KuCWx-b7Cm4",
    note: "Every component of a typical well water system, shown in place — watch the pump, tank, and switch work together, then trace the path from the well to a fixture.",
    more: [
      { title: "Well Water Pressure, Pumps & Tanks - How It Works", url: "https://www.youtube.com/watch?v=X4TZoFIsE2w" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A well is 60 feet deep. Which pump types can serve it, and which one is the standard choice? Explain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A shallow-well jet pump cannot serve it — suction lifts only about 25 feet. Step 2: A deep-well jet pump can serve it, with its jet down in the well. Step 3: The standard choice is a submersible pump, which sits below the water level and pushes water up efficiently and quietly. Step 4: The submersible's disadvantage is access — servicing it means pulling it out of the well.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A well pump short-cycles — it turns on and off every few seconds when a faucet is opened slightly. Name the most likely cause, the check, and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The most likely cause is a waterlogged pressure tank that has lost its air cushion. Step 2: Check — with the pump off and the tank drained, read the air pressure; it should be 2 psi below the switch cut-in (38 psi for a 40/60 switch). Step 3: Fix — restore the air charge, or replace the tank if the bladder has failed. Step 4: Do not replace the pump first — a new pump will short-cycle too until the tank is fixed.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A pressure switch is set to 40/60 psi. Explain what the two numbers mean and when the pump runs.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 40 psi is the cut-in pressure — the pump turns on when the system pressure falls to 40. Step 2: 60 psi is the cut-out pressure — the pump turns off when the pressure reaches 60. Step 3: Between draws, the fixtures use water stored in the pressure tank, and the pressure falls from 60 toward 40. Step 4: When it hits 40, the pump runs and refills the tank to 60.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A new well has never been tested. List four things to test for and explain why each matters.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Bacteria — a new well can carry coliform and other organisms that cause illness. Step 2: Nitrates — common near farms and septic systems, and dangerous for infants. Step 3: Iron — stains fixtures and feeds bacteria that clog pipes. Step 4: Hardness — decides whether a softener is needed and how to size it. Step 5: Nobody tests a private well unless the homeowner asks, so recommend the test.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Surface water is ponding around a wellhead after rain, and the casing is flush with the ground. Explain the hazard and the fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The hazard is surface water entering the well and contaminating the household supply with bacteria and chemicals. Step 2: The casing must extend above grade and the ground must slope away from the wellhead. Step 3: The cap must be sealed and vermin-proof, and the sanitary seal must close the top of the casing. Step 4: Keep septic systems, fuel tanks, and chemicals away from the wellhead per local setback rules.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A homeowner's well pump runs but no water reaches the house, and the pressure gauge reads zero. List three possible causes in the order you would check them.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The well water level has dropped below the pump intake (drawdown or drought) — check the water level. Step 2: The pump has lost prime (jet pump) or failed — check the pump and its power. Step 3: A pipe between the pump and the tank has broken or frozen — check the line. Step 4: Check the simple things first: power to the pump, the pressure switch, and the tank valve.</p>"
    }
  ],
  quiz: [
    {
      q: "A pressure switch set to 40/60 psi turns the well pump:",
      choices: ["On at 60 psi and off at 40 psi", "On at 40 psi and off at 60 psi", "On at 50 psi and off at 50 psi", "On at 30 psi and off at 50 psi"],
      answer: 1,
      explanation: "Correct: (b). The pump cuts in at the low number (40 psi) and cuts out at the high number (60 psi). (a) reverses the two. (c) describes a single-point setting, not a 40/60 switch. (d) is the 30/50 setting."
    },
    {
      q: "A shallow-well jet pump is limited to wells about:",
      choices: ["10 feet deep", "25 feet deep", "100 feet deep", "300 feet deep"],
      answer: 1,
      explanation: "Correct: (b). A shallow-well jet pump lifts water by suction and is practical to about 25 feet. (a) is shallower than the limit. (c) and (d) need a deep-well jet or a submersible pump."
    },
    {
      q: "A submersible well pump is installed:",
      choices: ["Above the wellhead in a pump house", "Down in the well, below the water level", "On the roof", "In the water heater closet"],
      answer: 1,
      explanation: "Correct: (b). A submersible pump sits below the water level in the well and pushes water up. (a) describes a jet pump. (c) and (d) are not pump locations."
    },
    {
      q: "A well pressure tank that is waterlogged causes the pump to:",
      choices: ["Run continuously without stopping", "Short-cycle — turning on and off rapidly", "Stop working entirely", "Produce hotter water"],
      answer: 1,
      explanation: "Correct: (b). With no air cushion, a small draw drops pressure fast and the pump cycles on and off rapidly. (a) A pump running nonstop points to a leak or a failed switch. (c) A waterlogged tank does not stop the pump. (d) A tank does not heat water."
    },
    {
      q: "The purpose of a pressure tank in a well system is to:",
      choices: ["Heat the water", "Store water under air pressure so the pump cycles cleanly instead of running at every draw", "Filter the water", "Soften the water"],
      answer: 1,
      explanation: "Correct: (b). The tank stores pressure so the pump runs only to refill it. (a) A tank does not heat water. (c) Filtration is a separate device. (d) Softening is a separate device."
    },
    {
      q: "A pitless adapter is used to:",
      choices: ["Carry the water line out of a well casing below frost depth", "Seal the top of the casing", "Filter the well water", "Increase the pump pressure"],
      answer: 0,
      explanation: "Correct: (a). The pitless adapter brings the water line out underground, below frost depth. (b) That is the sanitary seal's job. (c) Filtration happens at the house, not at the adapter. (d) The adapter does not change pressure."
    },
    {
      q: "The well casing must extend above grade and the ground must slope away from it because:",
      choices: ["It looks better", "Surface water running into the well would contaminate the household supply", "It keeps the pump cool", "It increases the water pressure"],
      answer: 1,
      explanation: "Correct: (b). Surface water carries bacteria and chemicals into the well. (a) Appearance is not the reason. (c) The casing does not cool the pump. (d) Casing height does not change pressure."
    },
    {
      q: "A well that has never been tested should be tested for:",
      choices: ["Only hardness", "Bacteria, nitrates, iron, and hardness", "Only water pressure", "Only the pump's age"],
      answer: 1,
      explanation: "Correct: (b). A basic well test covers bacteria, nitrates, iron, and hardness. (a) Hardness alone misses health risks. (c) Pressure is a system check, not a water quality test. (d) The pump's age does not describe the water."
    }
  ],
  studyGuide: `
<h3>Module 10 — Private Water Supply: Quick Reference</h3>
<p><strong>Core idea:</strong> A well system is source, pump, tank, house — and the homeowner owns all of it. The pump lifts, the tank stores pressure, and testing is the homeowner's job.</p>
<p><strong>Pumps:</strong> Shallow-well jet — suction, about 25 feet. Deep-well jet — jet down in the well, deeper service. Submersible — below the water level, pushes water up; the standard choice for deep wells.</p>
<div class="formula">Pressure switch: 40/60 means on at 40 psi, off at 60 psi &nbsp;|&nbsp; Tank air charge: 2 psi below cut-in (38 psi for a 40/60 switch)</div>
<p><strong>Short-cycling:</strong> Rapid on-off pump operation, usually a waterlogged tank with no air cushion. Fix the tank, not the pump first.</p>
<p><strong>Wellhead protection:</strong> Casing above grade, ground sloping away, sealed cap, pitless adapter below frost depth, sanitary seal on top. Keep septic, fuel, and chemicals away per local setbacks.</p>
<p><strong>Testing:</strong> A new well is tested for bacteria, nitrates, iron, and hardness. Nobody tests a private well unless the homeowner asks.</p>
<p><strong>Self-check:</strong> A pump short-cycles and the tank air pressure reads 10 psi with a 40/60 switch. What is wrong? (Answer: the tank is waterlogged — the air charge should be 38 psi.)</p>
`
};
