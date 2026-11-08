// Plumbing 203 - Module 5: Commercial Plumbing Installation (Stevens PLBG 216)
module.exports = {
  number: 5,
  slug: "commercial-plumbing-installation",
  title: "Commercial Plumbing Installation",
  estTime: "3–4 hours",
  objectives: [
    "Explain how commercial plumbing differs from residential: scale, drawings, coordination, and inspection.",
    "Read a commercial plumbing drawing: risers, stacks, fixture schedules, and details.",
    "Describe the commercial rough-in sequence: underground, above-ground, top-out, and trim.",
    "Explain commercial fixture requirements: counts, accessibility, and water efficiency.",
    "Describe the testing and inspection sequence that must pass before a commercial system is turned over."
  ],
  sections: [
    {
      heading: "Bigger, Busier, and on Paper First",
      html: `
<p>Commercial plumbing is the same water in and waste out as residential work — at a scale where mistakes cost far more and nobody works from memory. A house has a handful of fixtures and one or two bathrooms. A school, an office building, or a restaurant has dozens or hundreds of fixtures, multiple floors, booster pumps, grease interceptors, and backflow assemblies, all installed while other trades are working in the same space.</p>
<p>Three things change with scale. First, <strong>everything is on the drawings</strong>. Commercial work is installed from engineered plumbing drawings — plans, riser diagrams, details, and a fixture schedule — and the drawings, the specifications, and the code together define the job. If it is not on the drawings, it is not in the price, and if it is on the drawings, it must be installed as drawn unless a formal change is approved.</p>
<p>Second, <strong>coordination is part of the job</strong>. The plumber shares ceilings and shafts with ductwork, electrical conduit, fire protection, and structural steel. Pipe runs are coordinated in advance so that a drain with a fixed slope is not blocked by a duct that was installed first. The plumber who installs before coordinating re-installs.</p>
<p>Third, <strong>inspection is continuous</strong>. Commercial systems are inspected in stages — underground, rough-in, and final — and each stage must pass before the next is covered. A failed inspection stops the job, so testing as you go is not optional.</p>
<div class="callout"><strong>Key idea:</strong> In commercial work the drawings are the job. Read them before you cut anything, coordinate before you install, and test before you cover — because uncovering finished work to fix a missed inspection is the most expensive work there is.</div>`
    },
    {
      heading: "Reading the Commercial Drawings",
      html: `
<p>A commercial plumbing drawing set has several parts, and you need to know which sheet answers which question.</p>
<p><strong>Floor plans</strong> show where fixtures and pipe runs sit on each floor, with pipe sizes, fixture tags, and cleanout locations. They are drawn to scale, so a run that looks short on paper may be long in the building — measure, do not guess.</p>
<p><strong>Riser diagrams</strong> are the vertical map: they show stacks, risers, and branches in elevation, with sizes, vent connections, and the floors each serves. A riser diagram is where you see the whole system at once — which stack serves which bathrooms, where the vents tie together, and where the building drain leaves. Learn to read risers and you can trace any commercial system.</p>
<p><strong>The fixture schedule</strong> lists every fixture by tag, type, manufacturer and model, rough-in dimensions, and connection sizes. When the schedule says a water closet is wall-hung with a carrier, that tells you the carrier must be installed in the wall before the wall is closed — a detail that cannot be added later.</p>
<p><strong>Details and sections</strong> show how specific assemblies go together: a carrier installation, a grease interceptor connection, a roof drain detail, a backflow assembly with its clearances. When the plan is unclear, the detail governs.</p>
<div class="callout"><strong>Key idea:</strong> The riser diagram is the commercial plumber's map. If you can trace a fixture from its tag on the plan, up the riser, and out to the building drain, you can work on any building in the set.</div>`
    },
    {
      heading: "The Rough-In Sequence: Underground, Above-Ground, Top-Out, Trim",
      html: `
<p>Commercial installation follows a fixed sequence, and each stage is inspected before the next begins.</p>
<p><strong>Stage 1 — Underground.</strong> Before the slab is poured, the building drain, building sewer, and underground water service go in. Pipe is laid to grade — the code's minimum slope (IPC Table 704.1) is 1/4 inch per foot for pipe 2-1/2 inches and smaller, 1/8 inch per foot for pipe 3 to 6 inches, and 1/16 inch per foot for pipe 8 inches and larger — bedded in proper material, and tested before it is covered. A grade error under a slab is a permanent error; the test and inspection at this stage exist because there is no cheap way back.</p>
<p><strong>Stage 2 — Above-ground rough-in.</strong> Stacks, branches, vents, and water distribution piping go in as the structure rises. Hangers and supports are set to the code's spacing, fire-stopping is installed where pipe passes through rated assemblies, and sleeves are placed where pipe passes through structure. Wall-hung fixture carriers are set and braced now, before the walls close.</p>
<p><strong>Stage 3 — Top-out.</strong> With the structure up, the vent system is completed through the roof, water lines are run to their fixture rough-ins, and the system is pressure-tested and inspected. This is the last full view of the system before walls close.</p>
<p><strong>Stage 4 — Trim (finish).</strong> After finishes are in, fixtures are set, faucets and flush valves are installed, and trim is completed. Every fixture is tested, adjusted, and checked for leaks, and the system is flushed before turnover.</p>
<div class="callout"><strong>Key idea:</strong> Underground is forever — grade, bedding, and testing under the slab cannot be redone cheaply. Above-ground work is inspected at rough-in and top-out before it is hidden. Trim is the only stage the customer ever sees, and it is only as good as the stages before it.</div>`
    },
    {
      heading: "Commercial Fixtures: Counts, Access, and Efficiency",
      html: `
<p>Commercial fixture counts are set by the code, not by preference. The International Plumbing Code's fixture table sets the minimum number of water closets, lavatories, drinking fountains, and other fixtures by occupancy type and occupant load — a restaurant, a school, and an office with the same floor area need different fixture counts, because the people using them behave differently. The plumbing drawings carry the count; the plumber's job is to install what the table and the drawings require, and to flag it if the count on the drawings does not match the code.</p>
<p><strong>Accessibility</strong> is also a code and legal requirement, not a courtesy. Accessible fixtures have specified heights, clearances, and reach ranges, and accessible routes, turning space, and grab-bar backing must be in place before the walls close. A lavatory set at the wrong height or a water closet without the required clearance fails inspection — and fails the people who need it.</p>
<p><strong>Water efficiency</strong> is built into commercial fixtures: low-flow water closets and urinals, sensor faucets, and metered flush valves. These fixtures save water only when they are installed and adjusted correctly — a flush valve set to the wrong volume wastes the water the fixture was designed to save, and a sensor faucet with a dead battery or a dirty sensor is a fixture that does not work at all.</p>
<div class="callout"><strong>Key idea:</strong> Commercial fixtures are a code calculation, not a guess: the occupancy type and the occupant load set the count, accessibility sets the heights and clearances, and the fixture's rated flow only saves water if it is installed and adjusted as designed.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Commercial work is drawing-driven, coordinated with other trades, and inspected in stages.</li>
<li>Read plans for location, risers for the vertical system, the fixture schedule for what and how, and details for how assemblies go together.</li>
<li>Rough-in sequence: underground (grade and test before the slab), above-ground rough-in, top-out (vents and pressure test), trim (set and test fixtures).</li>
<li>Fixture counts come from the code's occupancy tables; accessibility sets heights and clearances; efficiency depends on correct installation and adjustment.</li>
<li>Test and inspect at every stage — covered work that fails inspection is the most expensive work there is.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Installing before coordinating. A drain run with a fixed slope cannot move for a duct that was installed first. Check the coordination drawings and the ceiling space before you hang pipe.</div>
<div class="callout"><strong>Common mistake:</strong> Setting wall-hung carriers after the wall is closed. The carrier, its bracing, and its waste and vent connections must be in the wall before the wall is finished — there is no way to add them later without opening the wall.</div>
<p><strong>Ready-to-work link:</strong> Module 6 moves to the heating side of commercial and residential work: hydronic systems — boilers, piping, and controls — where the same discipline of drawings, sequence, and testing applies to hot water instead of cold.</p>`
    }
  ],
  keyTerms: [
    { term: "Riser diagram", def: "A drawing showing a plumbing system's vertical runs — stacks, risers, and branches — in elevation." },
    { term: "Fixture schedule", def: "A table listing every fixture by tag, type, model, rough-in dimensions, and connection sizes." },
    { term: "Rough-in", def: "Installing piping and supports before walls and finishes close, leaving connections ready for fixtures." },
    { term: "Top-out", def: "The stage where vent piping is completed through the roof and water lines are run to fixture rough-ins." },
    { term: "Trim", def: "The finish stage: setting fixtures, faucets, and flush valves after finishes are complete." },
    { term: "Carrier", def: "The concealed steel support frame in a wall that carries a wall-hung water closet or lavatory." },
    { term: "Building drain", def: "The lowest horizontal drainage piping inside a building, carrying waste to the building sewer." },
    { term: "Building sewer", def: "The pipe from the building drain to the public sewer or private disposal system." },
    { term: "Occupant load", def: "The number of people a building or space is designed to serve, used to calculate fixture counts." },
    { term: "Flush valve", def: "A valve that delivers a measured volume of water to flush a water closet or urinal, common in commercial work." },
    { term: "Fire-stopping", def: "Material sealing pipe penetrations through fire-rated walls and floors to block fire and smoke spread." },
    { term: "Sleeve", def: "A pipe or tube set in a wall or floor that a pipe passes through, protecting it and allowing movement." },
    { term: "Coordination drawing", def: "A combined drawing showing all trades' work in a shared space, so clashes are found before installation." },
    { term: "Grease interceptor", def: "A device that traps grease from kitchen waste before it enters the drainage system." },
    { term: "Booster pump", def: "A pump that raises water pressure in a tall building where street pressure alone is not enough." }
  ],
  video: {
    title: "Dental Office Build-Out (Part 1) | Commercial Plumbing Rough-In & Drain Layout",
    embedUrl: "https://www.youtube.com/embed/IR5_4a3pT9M",
    note: "A commercial build-out walk-through: slab cuts, drain layout, and pressure testing before the pour. Watch how much of the work is layout and testing before any pipe is covered.",
    more: [
      { title: "Victory Plumbing Solutions | Full-Service Plumbing Experts in Arizona", url: "https://www.youtube.com/watch?v=Mvzciz1pa9M" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A commercial floor plan shows a wall-hung water closet, but no carrier is shown in the wall section. What is the problem, and when must it be fixed?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: A wall-hung fixture cannot be installed without its carrier — the steel frame in the wall that carries the load. Step 2: The carrier, its bracing, and its waste and vent connections must be installed during above-ground rough-in, before the wall is closed. Step 3: Flag the omission to the supervisor or the design team now, before the wall is framed and finished. Step 4: Installing the carrier after the wall is closed means opening the finished wall — the most expensive way to fix a missing line on a drawing.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> You are laying the building drain under a slab. The run is 3-inch pipe. What is the minimum slope, and how much total fall does a 40-foot run need at that slope?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The code minimum slope for 3-inch pipe (IPC Table 704.1, 3–6 in) is 1/8 inch per foot. Step 2: For a 40-foot run, the total fall is 40 x 1/8 = 5 inches. Step 3: Set the grade with a level and check it before bedding and testing — a grade error under a slab is permanent. Step 4: Test the underground piping and pass inspection before the slab is poured.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A 4-inch building drain runs 80 feet under a slab. What is the minimum slope, and what is the total fall over that run?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The code minimum slope for 4-inch pipe (IPC Table 704.1, 3–6 in) is 1/8 inch per foot. Step 2: For an 80-foot run, the total fall is 80 x 1/8 = 10 inches. Step 3: Note that the larger pipe needs less slope per foot but the same care in grading — check the run with a level in sections. Step 4: Bed, test, and inspect before covering.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> On a commercial job, a duct crew has already installed a large duct across the ceiling where your drain branch must run with a fixed slope. What do you do?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Do not install the drain around the duct by flattening its slope — a drain without proper slope will not work and will fail inspection. Step 2: Stop and raise the clash with the supervisor and the coordination drawings. Step 3: The resolution is a coordinated change — moving the duct, rerouting the drain with proper slope, or a designed offset — agreed before work continues. Step 4: Installing first and asking later is how a job gets torn out twice.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> List the four commercial rough-in stages in order, and name the one inspection that must pass before the slab is poured.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Underground — building drain, building sewer, and water service, laid to grade. Step 2: Above-ground rough-in — stacks, branches, vents, water distribution, carriers. Step 3: Top-out — vents through the roof, water lines to fixture rough-ins, pressure test. Step 4: Trim — set fixtures, install faucets and flush valves, test everything. The inspection that must pass before the slab is poured is the underground test and inspection: grade, bedding, and a passed test on the buried piping.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A restaurant's drawings show a grease interceptor on the kitchen drain. Why is it there, and what happens if it is installed without the required venting and access clearances?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The interceptor traps grease before it enters the drainage system, where it would cool, harden, and clog the line and the public sewer. Step 2: Without proper venting, the interceptor can siphon or trap air and fail to separate grease. Step 3: Without access clearances, it cannot be cleaned — and an interceptor that cannot be cleaned fills with grease and stops working. Step 4: Both defects fail inspection and leave the restaurant with the clogged drains the interceptor was meant to prevent.</p>"
    }
  ],
  quiz: [
    {
      q: "The drawing that shows a commercial plumbing system's vertical runs — stacks, risers, and branches — is the:",
      choices: ["Floor plan", "Fixture schedule", "Riser diagram", "Detail sheet"],
      answer: 2,
      explanation: "Correct: (c). The riser diagram is the vertical map of the system. (a) Floor plans show horizontal layout on each floor. (b) The fixture schedule lists fixtures by tag and model. (d) Details show how specific assemblies go together."
    },
    {
      q: "The minimum code slope for a 3-inch drain pipe is:",
      choices: ["1/8 inch per foot", "1/4 inch per foot", "1/2 inch per foot", "1 inch per foot"],
      answer: 0,
      explanation: "Correct: (a). Pipe 3 to 6 inches needs 1/8 inch per foot (IPC Table 704.1). (b) 1/4 inch per foot is the minimum for pipe 2-1/2 inches and smaller. (c) and (d) are steeper than required and are not the code minimum."
    },
    {
      q: "A 4-inch building drain runs 80 feet. At the code minimum slope, its total fall is:",
      choices: ["5 inches", "10 inches", "20 inches", "40 inches"],
      answer: 1,
      explanation: "Correct: (b). Minimum slope for 4-inch pipe is 1/8 inch per foot, so 80 x 1/8 = 10 inches. (a) would be the fall at 1/16 inch per foot. (c) would be the fall at 1/4 inch per foot. (d) would be the fall at 1/2 inch per foot."
    },
    {
      q: "The first stage of commercial rough-in, which must be tested and inspected before the slab is poured, is:",
      choices: ["Trim", "Top-out", "Underground", "Fixture setting"],
      answer: 2,
      explanation: "Correct: (c). Underground piping — building drain, sewer, and water service — is laid, graded, tested, and inspected before the slab covers it. (a) Trim is the last stage, after finishes. (b) Top-out completes vents and water lines above ground. (d) Fixture setting is part of trim."
    },
    {
      q: "A wall-hung water closet's carrier must be installed:",
      choices: ["After the tile is finished", "During above-ground rough-in, before the wall is closed", "At the trim stage", "Only if the fixture is heavy"],
      answer: 1,
      explanation: "Correct: (b). The carrier is the concealed frame that carries the fixture's load, so it must be in the wall before the wall is finished. (a) After finishes is too late — the wall would have to be opened. (c) Trim sets the fixture onto the carrier, it does not install the carrier. (d) Every wall-hung fixture needs a carrier, not only heavy ones."
    },
    {
      q: "Commercial fixture counts are set by:",
      choices: ["The plumber's preference", "The code's fixture table, by occupancy type and occupant load", "The building owner's budget", "The fixture manufacturer's catalog"],
      answer: 1,
      explanation: "Correct: (b). The code table sets minimum fixture counts by how the building is used and how many people it serves. (a) Preference does not set code minimums. (c) Budget does not override the code. (d) The catalog lists products, not required counts."
    },
    {
      q: "A duct blocks the ceiling space where a drain branch must run at its required slope. The correct action is to:",
      choices: ["Flatten the drain's slope to pass under the duct", "Stop, raise the clash, and resolve it through coordination before installing", "Cut through the duct", "Install the drain and hope the inspector misses it"],
      answer: 1,
      explanation: "Correct: (b). A drain without proper slope will not drain and will fail inspection; clashes are resolved through coordination, not by breaking the code. (a) violates the slope requirement. (c) damages another trade's work. (d) is not a plan — it is a failed inspection waiting to happen."
    },
    {
      q: "A grease interceptor is installed on a restaurant kitchen drain to:",
      choices: ["Heat the waste water", "Trap grease before it enters the drainage system and clogs it", "Increase water pressure", "Filter drinking water"],
      answer: 1,
      explanation: "Correct: (b). The interceptor separates and holds grease so it does not cool, harden, and block the drain and the public sewer. (a) It does not heat anything. (c) It has no effect on supply pressure. (d) It treats waste water, not drinking water."
    }
  ],
  studyGuide: `
<h3>Module 5 — Commercial Plumbing Installation: Quick Reference</h3>
<p><strong>Three differences:</strong> Drawings govern, coordination with other trades is part of the job, inspection is staged and continuous.</p>
<p><strong>Drawings:</strong> Plans = where. Risers = the vertical system. Fixture schedule = what and how. Details = how assemblies go together.</p>
<p><strong>Sequence:</strong> Underground (grade + test before slab) → above-ground rough-in (stacks, branches, carriers) → top-out (vents, pressure test) → trim (set and test fixtures).</p>
<p><strong>Slopes (IPC Table 704.1):</strong> 1/4 inch per foot for pipe 2-1/2 inches and smaller, 1/8 inch per foot for 3 to 6 inches, and 1/16 inch per foot for 8 inches and larger.</p>
<p><strong>Fixtures:</strong> Counts from the code's occupancy tables; accessibility sets heights and clearances; efficiency depends on correct installation and adjustment.</p>
<p><strong>Self-check:</strong> A 3-inch branch runs 24 feet and a 4-inch main runs 64 feet. Compute the minimum total fall for each, and list the rough-in stage at which each is installed and inspected.</p>
`
};
