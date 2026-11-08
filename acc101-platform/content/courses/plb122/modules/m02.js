// Plumbing 122 - Module 2: Water Service: Sizing the Building Supply
module.exports = {
  number: 2,
  slug: "water-service-sizing",
  title: "Water Service: Sizing the Building Supply",
  estTime: "3–4 hours",
  objectives: [
    "Name every component of a water service from the street main to the building entrance and state the job of each one.",
    "Explain why the water service is buried below the local frost line and how the meter pit and curb stop serve the building.",
    "List the fixture-unit values for common fixtures from IPC Appendix E Table E103.3(2).",
    "Compute a total water supply fixture unit (WSFU) load for a small house.",
    "Explain the three inputs that decide the water service size: total load, available pressure, and developed length."
  ],
  sections: [
    {
      heading: "The Service: One Pipe, Several Jobs",
      html: `
<p>The <strong>water service</strong> is the single pipe that connects a building to its water source. For a municipal supply it runs from the water main in the street to the building entrance; for a well it runs from the pump to the building (Module 10). One pipe does several jobs: it carries the entire building's water, it holds the meter that measures use, it provides the main shutoff that can stop all water to the building, and it must survive burial, frost, and traffic loads for decades without a leak.</p>
<p>From the street inward, the parts are: the <strong>corporation stop</strong> (the utility's connection at the main), the service pipe itself, the <strong>curb stop</strong> (a shutoff at or near the property line, operated with a long key by the utility), the <strong>meter pit</strong> or indoor meter setting where the <strong>water meter</strong> sits, and the <strong>main shutoff valve</strong> just inside the building. The homeowner owns and controls everything from the main shutoff inward; the utility controls everything from the main to the meter.</p>
<p>Service pipe materials are chosen for burial: copper (Type K, the thickest wall), cross-linked polyethylene (PEX) rated for service use, and PVC or CPVC where the local code allows it. The service must be bedded in clean fill, free of rocks that could point-load the pipe, and it must be installed without joints under the building slab wherever possible — a buried joint is a buried leak waiting to happen.</p>
<div class="callout"><strong>Key idea:</strong> The water service is the building's only water lifeline. One pipe, one meter, one main shutoff — and every fixture in the building depends on it being sized right and buried right.</div>`
    },
    {
      heading: "Depth, Frost, and the Meter",
      html: `
<p>Water freezes, and frozen water expands and splits pipe. The water service is therefore buried <strong>below the local frost line</strong> — the depth to which the ground freezes in the coldest normal winter. The frost depth is set by the local code and climate; in Michigan it is deep, and the service must stay below it for its entire run. A service that rises too shallow near the foundation is a freeze waiting for a cold snap.</p>
<p>The <strong>meter</strong> measures every gallon the building uses. In cold climates it usually sits in a <strong>meter pit</strong> outside the building, below frost depth, with a lid at grade; in milder settings it may sit just inside the building where the service enters. Either way it must be accessible for reading and replacement, protected from freezing, and installed with shutoffs on both sides so it can be swapped without draining the building.</p>
<p>The <strong>curb stop</strong> is the utility's emergency shutoff. If a service pipe breaks between the main and the meter, only the curb stop can stop the water — the homeowner's main shutoff is downstream of the break and useless. Know where the curb stop is on every job, and never pave over it. A buried or paved-over curb stop turns a small leak into a street excavation.</p>
<div class="callout"><strong>Key idea:</strong> Bury below the frost line, keep the meter accessible and freeze-protected, and never bury the curb stop. A service you cannot reach is a service you cannot fix.</div>`
    },
    {
      heading: "Fixture Units: The Language of Load",
      html: `
<p>How do you decide how big the service must be? You cannot size it for every fixture running at once — that would make the pipe enormous and the job unaffordable, and in a house the fixtures almost never all run together. Instead the code assigns each fixture a <strong>water supply fixture unit (WSFU)</strong> value from IPC Appendix E Table E103.3(2), and you add the values up. A fixture unit is not a flow rate; it is a <em>relative load</em> that reflects how much water a fixture uses and how often it runs. Module 3 converts the total into an actual flow rate.</p>
<p>The private (residential) values to learn first: a <strong>private flush-tank water closet is 2.2 WSFU</strong>; a <strong>private lavatory is 0.7</strong>; a <strong>private bathtub/shower is 1.4</strong>; a <strong>private kitchen sink is 1.4</strong>; a <strong>private dishwasher is 1.4</strong>; a <strong>private clothes washer is 1.4</strong>; and a <strong>private laundry tray is 1.4</strong>. A private full bathroom — water closet, lavatory, and tub-shower together — totals <strong>4.3 WSFU</strong>. Public fixtures are higher: a public flush-tank water closet is 5.0, a public flushometer water closet is 10.0, and a public lavatory is 2.0, because public fixtures are used far more often.</p>
<p>Two traps to avoid. First, the table has <strong>cold, hot, and total columns</strong> — always use the total column. Cold plus hot do not add up to the total, because a fixture does not draw its full cold and full hot load at the same time. Second, private and public values differ: a house water closet is 2.2, but the same fixture in a school restroom is 5.0 or 10.0. Pick the column that matches the building's use.</p>
<div class="callout"><strong>Key idea:</strong> WSFU values are relative loads, not flows. Private fixtures are small numbers; public fixtures are much larger. Always use the total column, never cold plus hot.</div>
<p><strong>Worked check:</strong> A house has 2 flush-tank water closets (2 × 2.2 = 4.4), 2 lavatories (2 × 0.7 = 1.4), 1 tub-shower (1.4), and 1 kitchen sink (1.4). Total = 4.4 + 1.4 + 1.4 + 1.4 = <strong>8.6 WSFU</strong>.</p>`
    },
    {
      heading: "What Decides the Service Size",
      html: `
<p>Three inputs decide the water service size: <strong>total load</strong> (the WSFU total), <strong>available pressure</strong> (the static pressure at the meter, minus elevation), and <strong>developed length</strong> (the pipe run from the meter to the farthest fixture, including the equivalent length of fittings). The sizing method in IPC Appendix E works in steps: total the WSFU, convert to a design flow with the Hunter curve (Module 3), subtract the pressure you must deliver at the farthest fixture, and find the smallest pipe that can carry the flow over that length without losing too much pressure.</p>
<p>Pressure is the budget and friction is the spending. A long service run spends more pressure on friction than a short one, so the same house needs a bigger service if the meter is far from the building. Elevation spends pressure too: a house on a hill above the meter starts with less pressure than a house in the valley. And the farthest fixture sets the budget: the code requires a minimum residual pressure at every fixture outlet (IPC Table 604.3), so the design must leave enough pressure after all the losses.</p>
<p>The most common service sizes for houses are 3/4 inch, 1 inch, and 1-1/4 inch. A 3/4-inch service serves a small house with a modest fixture count; a 1-inch service is the common choice for a two-bath house; larger homes, homes with irrigation, and buildings with flushometer fixtures need larger services. The exact size comes from the calculation, not from habit — and the calculation is what the next module teaches.</p>
<div class="callout"><strong>Key idea:</strong> Service size comes from three inputs: total load, available pressure, and developed length. Change any one and the answer changes. Never size a service by habit or by what the last house used.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Water service parts, street to building: corporation stop → service pipe → curb stop → meter → main shutoff.</li>
<li>Bury the service below the local frost line; keep the meter accessible and freeze-protected; never bury the curb stop.</li>
<li>WSFU values (private, total column): flush-tank water closet 2.2; lavatory 0.7; bathtub/shower 1.4; kitchen sink 1.4; dishwasher 1.4; clothes washer 1.4; laundry tray 1.4; full bathroom 4.3.</li>
<li>Public fixtures are much higher: public flush-tank water closet 5.0; public flushometer water closet 10.0; public lavatory 2.0.</li>
<li>Service size depends on total load, available pressure, and developed length.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Adding the cold and hot columns of the fixture-unit table together. The total column is the value; cold plus hot overstates the load and oversizes the pipe.</div>
<div class="callout"><strong>Common mistake:</strong> Using private fixture values for a public building. A school restroom water closet is 5.0 or 10.0 WSFU, not 2.2 — sizing it as a house fixture guarantees an undersized service.</div>
<p><strong>Ready-to-Work link:</strong> NCCER Plumbing Level 1 expects you to identify water service components and water supply fixture unit values. If you can total the WSFU load of a small house from a fixture list, you have this module.</p>`
    }
  ],
  keyTerms: [
    { term: "Water service", def: "The pipe from the water main or well into the building, including the curb stop, meter, and main shutoff." },
    { term: "Corporation stop", def: "The utility's valve at the connection where the water service joins the street main." },
    { term: "Curb stop", def: "A shutoff valve at or near the property line on the water service, operated by the utility with a long key." },
    { term: "Meter pit", def: "An underground box below frost depth that houses the water meter, with a lid at grade for access." },
    { term: "Main shutoff valve", def: "The valve just inside the building that can stop all water to the building; owned by the homeowner." },
    { term: "Frost line", def: "The depth to which ground freezes in the coldest normal winter; the water service must be buried below it." },
    { term: "Water supply fixture unit (WSFU)", def: "A relative load value assigned to each fixture by IPC Appendix E Table E103.3(2), used to size water piping." },
    { term: "Developed length", def: "The total length of a pipe run from the meter to the farthest fixture, including the equivalent length of fittings." },
    { term: "Hunter curve", def: "A demand curve that converts total fixture units into a design flow in gpm, accounting for the fact that not all fixtures run at once." },
    { term: "Flush-tank water closet", def: "A toilet with a tank that refills after flushing; a private flush-tank water closet is 2.2 WSFU." },
    { term: "Flushometer water closet", def: "A toilet flushed by a valve connected directly to the supply; a public flushometer water closet is 10.0 WSFU." },
    { term: "Private fixture", def: "A fixture in a home or private use; assigned lower fixture-unit values than public fixtures." },
    { term: "Public fixture", def: "A fixture in a school, office, or other public building; assigned higher fixture-unit values because of heavier use." },
    { term: "Type K copper", def: "The thickest-wall copper tubing, commonly used for buried water service piping." },
    { term: "Bedding", def: "Clean fill material placed around a buried pipe to support it and protect it from rocks and point loads." },
    { term: "Available pressure", def: "The static pressure at the meter minus elevation losses — the pressure budget the design has to spend." }
  ],
  video: {
    title: "How to Size Your Water Lines (PEX & Copper)",
    embedUrl: "https://www.youtube.com/embed/GaIjYGmwTr0",
    note: "A practical look at sizing water lines in PEX and copper — watch how the pipe size follows the fixture load, then compare the method with the fixture-unit approach in this module.",
    more: [
      { title: "How DEEP to Run a New or Replacement Water Service Line [2018 IPC]", url: "https://www.youtube.com/watch?v=2tmJ4sQ4oyA" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> List, in order, every component of a municipal water service from the street main to the main shutoff inside the building.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Water main in the street. Step 2: Corporation stop at the main. Step 3: Service pipe. Step 4: Curb stop at or near the property line. Step 5: Water meter (in a meter pit or inside). Step 6: Main shutoff valve just inside the building.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A house has 2 private flush-tank water closets, 2 lavatories, 1 tub-shower, 1 kitchen sink, and 1 dishwasher. Compute the total WSFU.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Water closets: 2 × 2.2 = 4.4. Step 2: Lavatories: 2 × 0.7 = 1.4. Step 3: Tub-shower: 1.4. Step 4: Kitchen sink: 1.4. Step 5: Dishwasher: 1.4. Step 6: Total = 4.4 + 1.4 + 1.4 + 1.4 + 1.4 = <strong>10.0 WSFU</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A small office has 1 public flush-tank water closet (5.0), 1 public lavatory (2.0), and 1 public kitchen sink (4.0). Compute the total WSFU.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Water closet: 5.0. Step 2: Lavatory: 2.0. Step 3: Kitchen sink: 4.0. Step 4: Total = 5.0 + 2.0 + 4.0 = <strong>11.0 WSFU</strong>. Step 5: Note that this small office already exceeds the 10.0 WSFU of the two-bath house in Problem 2 — public fixtures carry much heavier loads.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A helper totals a private bathroom as 2.2 + 0.7 + 1.4 = 4.3 WSFU. A second helper totals it as cold plus hot columns. Who is right, and why?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The first helper is right — the private full bathroom is 4.3 WSFU. Step 2: The table's total column already accounts for how fixtures actually draw water. Step 3: Adding cold and hot columns together double-counts, because a fixture never draws its full cold and full hot loads at the same time. Step 4: Always use the total column.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A homeowner's water service runs shallow near the foundation and freezes every January. Explain the cause and the correct fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The cause is burial above the local frost line — the ground freezes to that depth and the pipe with it. Step 2: The correct fix is to re-lay the shallow section below the frost line, bedded in clean fill. Step 3: Heat tape and insulation are not a substitute for depth on a buried service; they are for exposed pipe (Module 11). Step 4: Check the rest of the run while you are at it — one shallow spot usually means more.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A service pipe breaks between the main and the meter. Why is the homeowner's main shutoff useless, and what stops the water?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The main shutoff sits inside the building, downstream of the break, so closing it does nothing to the water escaping upstream. Step 2: Only the curb stop — at the property line, between the main and the break — can stop the flow. Step 3: This is why the curb stop must stay accessible and never be paved over. Step 4: The repair is the utility's responsibility up to the meter.</p>"
    }
  ],
  quiz: [
    {
      q: "The water service runs from:",
      choices: ["The water heater to the fixtures", "The water main or well to the building entrance", "The meter to the roof vent", "The curb stop to the septic system"],
      answer: 1,
      explanation: "Correct: (b). The service connects the source to the building. (a) describes distribution piping. (c) A vent is a DWV part. (d) The septic system is on the drain side."
    },
    {
      q: "The curb stop is:",
      choices: ["The homeowner's main shutoff inside the building", "A utility shutoff at or near the property line that can stop water to a building", "The valve on a water heater", "A fixture shutoff under a sink"],
      answer: 1,
      explanation: "Correct: (b). The curb stop is the utility's shutoff at the property line. (a) is the main shutoff. (c) is the heater's shutoff. (d) is an angle stop."
    },
    {
      q: "The water service must be buried:",
      choices: ["As shallow as possible for easy repair", "Below the local frost line", "Above ground along the foundation", "At the same depth as the building sewer"],
      answer: 1,
      explanation: "Correct: (b). Burial below the frost line prevents freezing. (a) A shallow service freezes. (c) Above-ground service freezes and is exposed to damage. (d) The sewer's depth is set by drainage slope, not by frost."
    },
    {
      q: "Under IPC Appendix E Table E103.3(2), a private flush-tank water closet is assigned:",
      choices: ["1.4 WSFU", "2.2 WSFU", "5.0 WSFU", "10.0 WSFU"],
      answer: 1,
      explanation: "Correct: (b). A private flush-tank water closet is 2.2 WSFU. (a) is a bathtub, kitchen sink, dishwasher, or clothes washer. (c) is the public flush-tank water closet. (d) is the public flushometer water closet."
    },
    {
      q: "Under IPC Appendix E Table E103.3(2), a private bathtub/shower is assigned:",
      choices: ["0.7 WSFU", "1.4 WSFU", "2.0 WSFU", "4.0 WSFU"],
      answer: 1,
      explanation: "Correct: (b). A private bathtub/shower is 1.4 WSFU total. (a) is a private lavatory. (c) is the public lavatory. (d) is the public shower."
    },
    {
      q: "A private full bathroom (water closet, lavatory, tub-shower) totals:",
      choices: ["2.2 WSFU", "3.6 WSFU", "4.3 WSFU", "5.0 WSFU"],
      answer: 2,
      explanation: "Correct: (c). 2.2 + 0.7 + 1.4 = 4.3 WSFU. (a) is the water closet alone. (b) omits the water closet. (d) is the public flush-tank water closet alone."
    },
    {
      q: "When using the fixture-unit table, you should use:",
      choices: ["The cold column only", "The hot column only", "The cold column plus the hot column", "The total column"],
      answer: 3,
      explanation: "Correct: (d). The total column is the value. (a) and (b) each understate the load. (c) double-counts, because a fixture never draws its full cold and full hot loads at the same time."
    },
    {
      q: "The three inputs that decide the water service size are:",
      choices: ["Pipe color, pipe age, and pipe brand", "Total load, available pressure, and developed length", "Number of stories, roof area, and rainfall rate", "Water temperature, water hardness, and water pH"],
      answer: 1,
      explanation: "Correct: (b). Load, pressure, and length drive the sizing calculation. (a) Color, age, and brand do not size pipe. (c) Those inputs size roof drainage. (d) Those inputs describe water quality, not pipe size."
    }
  ],
  studyGuide: `
<h3>Module 2 — Water Service: Quick Reference</h3>
<p><strong>Core idea:</strong> The water service is the building's only water lifeline — one pipe from the main to the building, with a meter and a main shutoff.</p>
<p><strong>Path:</strong> Main → corporation stop → service pipe → curb stop → meter → main shutoff.</p>
<p><strong>Depth:</strong> Bury below the local frost line. Keep the meter accessible and freeze-protected. Never bury the curb stop.</p>
<div class="formula">Private WSFU (total column): WC flush tank 2.2 &nbsp;|&nbsp; lavatory 0.7 &nbsp;|&nbsp; tub-shower 1.4 &nbsp;|&nbsp; kitchen sink 1.4 &nbsp;|&nbsp; dishwasher 1.4 &nbsp;|&nbsp; clothes washer 1.4 &nbsp;|&nbsp; laundry tray 1.4 &nbsp;|&nbsp; full bathroom 4.3</div>
<p><strong>Public WSFU:</strong> WC flush tank 5.0; WC flushometer 10.0; lavatory 2.0; shower 4.0; kitchen sink 4.0.</p>
<p><strong>Service size inputs:</strong> Total load (WSFU), available pressure (static minus elevation), developed length (meter to farthest fixture, including fittings).</p>
<p><strong>Watch out:</strong> Never add cold plus hot columns — use the total column. Never use private values for a public building.</p>
<p><strong>Self-check:</strong> Total the WSFU for a house with 1 bathroom group, a kitchen sink, and a clothes washer. (Answer: 4.3 + 1.4 + 1.4 = 7.1 WSFU.)</p>
`
};
