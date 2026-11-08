// Plumbing 121 - Module 10: Building Sewers, Building Drains & Sewer Connections
module.exports = {
  number: 10,
  slug: "building-sewers-drains",
  title: "Building Sewers, Building Drains & Sewer Connections",
  estTime: "3–4 hours",
  objectives: [
    "Distinguish the building drain from the building sewer and state where one ends and the other begins.",
    "Size a building drain and building sewer from IPC Table 710.1(1), including the 3-inch water-closet minimum.",
    "Describe a correct sewer connection: slope, bedding, cleanouts, and approval by the authority having jurisdiction.",
    "Explain when a backwater valve is required and what it protects (IPC 714).",
    "Explain the private-sewage alternative — septic tank and drain field — and who governs it."
  ],
  sections: [
    {
      heading: "Where the Building Ends and the Sewer Begins",
      html: `
<p>The <strong>building drain</strong> is the lowest horizontal drainage pipe <em>inside</em> the building: it receives the discharge from every soil and waste stack and branch. The <strong>building sewer</strong> is the pipe that carries that discharge from the building to the public sewer main, a private sewer, or an individual sewage disposal system such as a septic tank. The boundary between them is precise: the building drain ends and the building sewer begins <strong>2 feet outside the building wall</strong>.</p>
<p>That 2-foot line matters for more than vocabulary. The building drain is installed under the building's floor and inspected as part of the rough-in; the building sewer is installed in a trench outside, inspected separately, and often governed by the local sewer authority as well as the plumbing code. Materials can differ too: the building drain is usually the same PVC or cast iron as the interior DWV system, while the building sewer is often SDR-35 PVC or another pipe rated for burial, chosen for its strength under earth and traffic loads.</p>
<p>Both pipes are sized the same way — from <strong>IPC Table 710.1(1)</strong> by DFU load and slope (Module 6) — and both carry the same rule: a building drain or sewer serving a water closet is at least <strong>3 inches</strong>. In practice, most single-family homes use a 4-inch building sewer, because the jump from 3-inch to 4-inch pipe more than quadruples the capacity (42 to 216 DFU at 1/4 inch per foot) for a small increase in trench and material cost, and because a 4-inch sewer is more forgiving of the solids and roots it will meet over its life.</p>
<div class="callout"><strong>Key idea:</strong> Building drain = inside, lowest horizontal pipe. Building sewer = outside, from 2 feet past the wall to the public main or septic system. Same sizing table, same 3-inch minimum where a water closet is served.</div>`
    },
    {
      heading: "The Connection: Slope, Bedding, and the Inspector's Sign-Off",
      html: `
<p>A sewer connection is a trench job, and trench work has its own discipline. The pipe is laid on a prepared bed — clean sand or fine gravel, free of rocks — so it is supported along its full length. The trench bottom is graded to the required slope before the pipe goes in; you never use dirt mounds or shims to hold a pipe up, because they settle and the pipe sags. Bell holes are dug at each joint so the pipe barrel, not the bell, bears on the bedding. Once the pipe is laid and jointed, it is tested (Module 9) and inspected before backfill — the same test-before-concealment rule, with earth as the concealment.</p>
<p>Slope on a building sewer follows IPC Table 704.1 like any horizontal drain: 1/8 inch per foot minimum for 3- through 6-inch pipe, and 1/4 inch per foot for 2-1/2-inch and smaller. A sewer that is too flat collects solids; a sewer that is too steep lets the water outrun them. The connection to the public main is made at an approved tap or wye, at the elevation the sewer authority specifies, and the work is inspected by the authority having jurisdiction — on many jobs, both the plumbing inspector and the sewer utility sign off.</p>
<p>Backfill is part of the installation, not an afterthought. The first layer over the pipe is the same clean bedding material, placed by hand and compacted carefully so it supports the pipe without shifting it. Heavy equipment stays off the trench until enough cover is in place. A sewer that is laid perfectly and backfilled carelessly will fail at the joints it was tested on.</p>
<div class="callout"><strong>Key idea:</strong> Bed the pipe on clean material, grade the trench before the pipe goes in, test and inspect before backfill, and backfill by hand first. The trench is the installation — the pipe is only part of it.</div>
<p><strong>Worked check:</strong> A building sewer runs 60 feet from the house to the public main at 1/8 inch per foot. Its total fall is 60 × 1/8 = <strong>7-1/2 inches</strong>. If the main's invert (the inside bottom of the main) is only 5 inches below the building drain's outlet, the connection cannot be made at that slope — the sewer must start deeper, the main must be tapped lower, or the route must change.</p>`
    },
    {
      heading: "Backwater Valves: When the Street Sewer Can Flow Backwards",
      html: `
<p>Normally, sewage flows one way: from the house to the street. But when a public sewer surcharges — during a heavy storm, a blockage downstream, or a high-water event — sewage can flow backwards toward the house. If the house's lowest fixtures are below the level of the street sewer, that backflow can come up through a basement floor drain or a low toilet and flood the lowest level with sewage.</p>
<p>IPC Section 714 requires a <strong>backwater valve</strong> where the flood-level rim of the lowest fixture is below the elevation of the next upstream manhole cover on the public sewer. The valve is a one-way device installed on the building drain or building sewer: it lets waste flow out normally, and a flap or gate closes when flow tries to reverse. It must be accessible for cleaning and maintenance, and it must be installed so it can be serviced without digging — usually in a pit or chamber with a removable cover.</p>
<p>A backwater valve is not a substitute for good design. It protects one direction only, and when it is closed during a surcharge, the house's own fixtures cannot drain either — a toilet flushed during a surcharge has nowhere to go. Homeowners with a backwater valve need to know that, and they need to know the valve needs periodic cleaning: a flap held open by debris is a valve that does not exist.</p>
<div class="callout"><strong>Key idea:</strong> IPC 714: a backwater valve is required where the lowest fixture's flood-level rim sits below the next upstream manhole cover. It stops the street sewer from flooding the basement — but while it is closed, the house cannot drain either.</div>`
    },
    {
      heading: "When There Is No Public Sewer: Septic Systems",
      html: `
<p>Where no public sewer exists, the building sewer runs to a <strong>private sewage disposal system</strong> — most commonly a septic tank and drain field. The septic tank is a buried watertight chamber where solids settle and scum floats, and the clarified liquid (effluent) flows to a drain field of perforated pipes in gravel trenches, where soil organisms finish treating it. The tank is pumped periodically to remove the accumulated sludge and scum; a tank that is never pumped eventually passes solids into the drain field, and a clogged drain field is a failed system that is expensive to replace.</p>
<p>Septic systems are governed by the local health department, not just the plumbing code, and they are sized by the number of bedrooms (a proxy for the number of people) and by a soil test (a percolation test) that measures how fast the soil absorbs water. The plumber's part of the job is the building sewer to the tank and the tank's inlet and outlet connections; the drain field design and approval belong to the health department and, usually, a licensed septic installer.</p>
<p>Two cautions belong to every septic job. First, nothing but human waste and toilet paper goes into a septic system — grease, wipes, and chemicals kill the organisms the system depends on. Second, the drain field is not a driveway, a patio, or a garden: vehicles and structures compact the soil and crush the pipes, and deep-rooted plants clog them. A failed drain field is almost always a story about something built or driven on top of it.</p>
<div class="callout"><strong>Key idea:</strong> No public sewer means a septic tank and drain field, sized by bedrooms and soil, governed by the local health department. The plumber connects the building sewer to the tank; the health department governs the rest.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Building drain = lowest horizontal pipe inside; building sewer = from 2 feet outside the wall to the public main or septic system.</li>
<li>Both sized from IPC Table 710.1(1) by DFU and slope; minimum 3 inches where a water closet is served.</li>
<li>Sewer installation: bedded on clean material, trench graded before the pipe goes in, tested and inspected before backfill, backfilled by hand first.</li>
<li>Backwater valve (IPC 714): required where the lowest fixture's flood-level rim is below the next upstream manhole cover; accessible for service.</li>
<li>No public sewer: septic tank + drain field, governed by the local health department, sized by bedrooms and soil.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Backfilling before the test and inspection. Earth is concealment — IPC 312.1 applies to the trench exactly as it applies to a wall. A sewer tested after backfill is a sewer that has to be dug up to repair.</div>
<div class="callout"><strong>Common mistake:</strong> Installing a backwater valve and never telling the homeowner it exists. A valve that is never cleaned will be held open by debris and will not close when the sewer surcharges — and the homeowner will flush fixtures during a surcharge, not knowing the valve has shut their drains.</div>
<div class="callout"><strong>Common mistake:</strong> Using dirt mounds or shims to hold sewer grade in the trench. They settle, the pipe sags, and the sag becomes a belly that collects solids for the life of the sewer. Grade the trench bottom; support the pipe along its full length.</div>
<p><strong>Ready-to-Work link:</strong> Sewer work is the part of the trade where the plumber meets the municipality — taps, inverts, inspections, and health-department approvals. Knowing the 2-foot boundary and the backwater-valve rule puts you ahead of most first-year apprentices on their first sewer job.</p>`
    }
  ],
  keyTerms: [
    { term: "Building drain", def: "The lowest horizontal drainage pipe inside a building; it ends 2 feet outside the building wall." },
    { term: "Building sewer", def: "The pipe from the end of the building drain (2 feet outside the wall) to the public sewer, private sewer, or septic system." },
    { term: "Public sewer main", def: "The municipal sewer pipe in the street that receives building sewers." },
    { term: "Invert", def: "The inside bottom of a pipe; sewer elevations are measured and connected by invert." },
    { term: "Bedding", def: "Clean sand or fine gravel under and around a buried pipe, supporting it along its full length." },
    { term: "Bell hole", def: "A small excavation at a pipe joint so the pipe barrel, not the bell, bears on the trench bedding." },
    { term: "Backwater valve", def: "A one-way valve (IPC 714) that lets waste flow out and closes against reverse flow from a surcharging public sewer." },
    { term: "Surcharging", def: "A public sewer filling and flowing backwards toward buildings during a storm, blockage, or high-water event." },
    { term: "Manhole cover elevation", def: "The elevation of the next upstream manhole on the public sewer; the reference point for the IPC 714 backwater-valve rule." },
    { term: "Septic tank", def: "A buried watertight chamber where sewage solids settle and scum floats before clarified effluent flows to a drain field." },
    { term: "Drain field", def: "Perforated pipes in gravel trenches where septic effluent is treated by soil organisms." },
    { term: "Percolation test", def: "A soil test measuring how fast the ground absorbs water, used to size a septic drain field." },
    { term: "SDR-35 PVC", def: "A common buried sewer pipe (Standard Dimension Ratio 35), rated for earth and traffic loads." }
  ],
  video: {
    title: "How to Repair a Sewer Pipe Under a Concrete Slab | This Old House",
    embedUrl: "https://www.youtube.com/embed/LFIcRlAOFw0",
    note: "This Old House repairs a sewer pipe under a slab: exposing the pipe, cutting out the failed section, and making the repair. Watch how the crew supports the pipe, keeps the grade, and tests before closing up — the same discipline as a new sewer connection.",
    more: [
      { title: "Sewer Line Replacement For Beginners", url: "https://www.youtube.com/watch?v=wYAXj7bzpVg" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A building's lowest horizontal drain runs inside the basement, exits the foundation wall, and continues 60 feet to the street main. (a) Where does the building drain end and the building sewer begin? (b) How long is the building sewer?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The building drain ends and the building sewer begins <strong>2 feet outside the building wall</strong>. Step 2: The building sewer runs from that point to the main: 60 feet total from the wall minus 2 feet = <strong>58 feet</strong> of building sewer.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A building sewer carries 24 DFU at a slope of 1/4 inch per foot and serves water closets. What is the smallest size from Table 710.1(1), and why is 2-inch pipe not acceptable even though its capacity is 21 DFU?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: A 2-inch building drain carries 21 DFU at 1/4 inch per foot, which does not cover 24 — so 2-inch pipe fails on capacity alone. Step 2: The smallest size is <strong>3 inches</strong>, which carries 42 DFU at 1/4 inch per foot. Step 3: Independently, the footnote to Table 710.1(1) requires a minimum of <strong>3 inches</strong> for any building drain serving a water closet.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A building sewer runs 80 feet at 1/8 inch per foot. What is its total fall? The public main's invert is 9 inches below the building drain outlet. Can the connection be made?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Total fall = 80 ft × 1/8 in/ft = <strong>10 inches</strong>. Step 2: The sewer needs to fall 10 inches over its run, but the main is only 9 inches below the outlet — the pipe would arrive <strong>1 inch above</strong> the main's invert. Step 3: No, the connection cannot be made as laid: the sewer must start deeper, the main must be tapped lower, or the route must change.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A house's lowest fixture is a basement floor drain whose flood-level rim is 2 feet below the next upstream manhole cover. (a) What device does IPC 714 require? (b) Where is it installed, and what maintenance does it need?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: IPC 714 requires a <strong>backwater valve</strong>, because the lowest fixture's flood-level rim is below the next upstream manhole cover. Step 2: It is installed on the building drain or building sewer, <strong>accessible for cleaning and maintenance</strong> — usually in a pit or chamber with a removable cover. Step 3: It needs periodic cleaning so debris does not hold the flap open, and the homeowner must know that fixtures cannot drain while the valve is closed during a surcharge.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A new house has no public sewer available. (a) What system receives the building sewer? (b) Who sizes and approves the drain field? (c) Name two things that must never go into the system.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The building sewer runs to a <strong>septic tank and drain field</strong> (a private sewage disposal system). Step 2: The drain field is sized by bedrooms and a soil percolation test and approved by the <strong>local health department</strong>. Step 3: Grease, wipes, and harsh chemicals must never go in — they kill the soil organisms the system depends on — and nothing heavy may be built or driven over the drain field.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain in two sentences why a sewer trench is graded before the pipe goes in, rather than shimming the pipe up to grade afterward.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Dirt mounds and shims settle under load, so a shimmed pipe sags and develops bellies that collect solids for the life of the sewer. Step 2: A trench graded before the pipe goes in supports the pipe barrel along its full length on stable bedding, so the slope set on day one is the slope the sewer keeps.</p>"
    }
  ],
  quiz: [
    {
      q: "The building drain ends and the building sewer begins:",
      choices: ["At the foundation wall", "2 feet outside the building wall", "At the property line", "At the public sewer main"],
      answer: 1,
      explanation: "Correct: (b). The code boundary is 2 feet outside the building wall. (a) is 2 feet too early. (c) is where the sewer often meets the public main's service lateral, not the drain/sewer boundary. (d) is the end of the building sewer, not the start."
    },
    {
      q: "A building sewer serving a water closet must be at least:",
      choices: ["2 inches", "3 inches", "4 inches", "6 inches"],
      answer: 1,
      explanation: "Correct: (b). The Table 710.1(1) footnote sets the minimum at 3 inches for any building drain serving a water closet. (a) cannot pass solids reliably. (c) is common practice but not the code minimum. (d) exceeds the minimum."
    },
    {
      q: "A 4-inch building sewer at 1/4 inch per foot carries a maximum of:",
      choices: ["42 DFU", "160 DFU", "216 DFU", "250 DFU"],
      answer: 2,
      explanation: "Correct: (c). Table 710.1(1) allows 216 DFU on a 4-inch building drain or sewer at 1/4 inch per foot. (a) is the 3-inch building drain at 1/4 inch per foot. (b) is the 4-inch horizontal branch. (d) is the 4-inch building drain at 1/2 inch per foot."
    },
    {
      q: "A sewer trench should be prepared by:",
      choices: ["Digging to rough depth and shimming the pipe up to grade with dirt mounds", "Grading the trench bottom to slope on clean bedding before the pipe goes in", "Laying the pipe on the bare trench bottom and backfilling with rocks", "Filling the trench with water and floating the pipe to grade"],
      answer: 1,
      explanation: "Correct: (b). The trench is graded first on clean bedding so the pipe is supported along its full length. (a) Shims settle and create bellies. (c) Rocks damage the pipe and leave it unsupported. (d) Floating a pipe to grade is not a method."
    },
    {
      q: "A building sewer must be tested and inspected:",
      choices: ["After backfill, to prove the backfill held", "Before backfill, because earth is concealment", "Only if the public main is new", "Never — sewers are not tested"],
      answer: 1,
      explanation: "Correct: (b). IPC 312.1 requires testing before concealment, and backfill is concealment. (a) reverses the rule. (c) The test requirement does not depend on the main's age. (d) Building sewers are tested like all drainage piping."
    },
    {
      q: "IPC 714 requires a backwater valve where:",
      choices: ["The building has more than two bathrooms", "The flood-level rim of the lowest fixture is below the elevation of the next upstream manhole cover", "The building sewer is longer than 100 feet", "The house has a septic system"],
      answer: 1,
      explanation: "Correct: (b). Section 714 ties the requirement to the lowest fixture's flood-level rim versus the next upstream manhole cover. (a) Fixture count does not trigger the rule. (c) Length does not trigger the rule. (d) Septic systems have no public sewer to flow back from."
    },
    {
      q: "A backwater valve protects a building by:",
      choices: ["Pumping sewage to the street during a storm", "Letting waste flow out and closing against reverse flow from a surcharging sewer", "Filtering solids before they reach the main", "Increasing the slope of the building sewer"],
      answer: 1,
      explanation: "Correct: (b). The valve is a one-way device: out normally, closed against backflow. (a) It has no pump. (c) It does not filter. (d) It does not change slope."
    },
    {
      q: "A septic drain field is sized by:",
      choices: ["The number of bedrooms and a soil percolation test", "The size of the water service", "The number of stories in the house", "The length of the building sewer"],
      answer: 0,
      explanation: "Correct: (a). Bedrooms proxy for occupants and the percolation test measures soil absorption. (b) Water service size is a supply question. (c) Stories do not determine septic load. (d) Sewer length does not size a drain field."
    }
  ],
  studyGuide: `
<h3>Module 10 — Building Sewers & Drains: Quick Reference</h3>
<p><strong>Boundary:</strong> Building drain ends / building sewer begins 2 ft outside the building wall.</p>
<p><strong>Sizing:</strong> IPC Table 710.1(1) by DFU and slope. 3 in = 36 @ 1/8, 42 @ 1/4, 50 @ 1/2 in/ft. 4 in = 180 @ 1/8, 216 @ 1/4, 250 @ 1/2 in/ft. Minimum 3 in where a water closet is served.</p>
<p><strong>Installation:</strong> Grade the trench on clean bedding before the pipe goes in. Bell holes at joints. Test and inspect before backfill. Backfill by hand first.</p>
<p><strong>Backwater valve (IPC 714):</strong> Required where the lowest fixture's flood-level rim is below the next upstream manhole cover. Accessible for service; clean it regularly.</p>
<p><strong>Septic:</strong> Tank + drain field, sized by bedrooms and percolation test, governed by the local health department.</p>
<p><strong>Watch out:</strong> Never shim sewer grade with dirt mounds. Never backfill before the test. Tell the homeowner the backwater valve exists.</p>
<p><strong>Self-check:</strong> 60-ft sewer at 1/8 in/ft — total fall? (7-1/2 in.) Building drain serving a WC — minimum size? (3 in.)</p>
`
};
