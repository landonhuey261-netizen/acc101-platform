// Plumbing 201 - Module 8: Vents & Vent Sizing (IPC Ch. 9)
module.exports = {
  number: 8,
  slug: "vents-vent-sizing",
  title: "Vents & Vent Sizing (IPC Ch. 9)",
  estTime: "3–4 hours",
  objectives: [
    "Explain why vents exist: protecting trap seals by equalizing pressure in the drainage system.",
    "Name the vent types — individual, common, wet, circuit, island, and relief — and say where each is used.",
    "Apply the vent-sizing rules, including minimum vent size and sizing by DFU and developed length.",
    "Apply the termination rules: height above the roof, distance from openings, and the 6-inch rule above the flood-level rim.",
    "Explain how air admittance valves work and what limits the code places on them."
  ],
  sections: [
    {
      heading: "Why Vents Exist: Protecting the Trap Seal",
      html: `
<p>Every trap holds a plug of water — the <strong>trap seal</strong>, 2 to 4 inches deep — that blocks sewer gas from entering the building. That plug is fragile. When a toilet flushes or a tub drains, the slug of water falling down the drain pushes air ahead of it and drags air behind it. The push creates positive pressure; the drag creates negative pressure, a partial vacuum. Without a vent, that vacuum can suck the water right out of a nearby trap — a process called <strong>siphonage</strong> — and the positive pressure can blow a trap seal out the other way. Either way, the seal is gone, and sewer gas walks into the room.</p>
<p>A <strong>vent</strong> is a pipe that connects the drainage system to the open air, usually through the roof. It gives the system somewhere to draw air from and somewhere to push air to, so pressures stay near atmospheric and trap seals stay put. The vent does not carry waste; it carries air. That is the whole job, and it is one of the most important jobs in plumbing: a building with perfect drains and no vents will smell like a sewer within days.</p>
<p>The symptoms of bad venting are the symptoms every plumber learns to recognize: gurgling drains, slow fixtures that are not clogged, traps that go dry in unused bathrooms, and sewer smells that come and go. A gurgling sink is not asking for a drain cleaner — it is asking for air.</p>
<div class="callout"><strong>Key idea:</strong> Vents protect trap seals. Drainage moves water; venting moves air; without air, the water takes the trap seal with it.</div>`
    },
    {
      heading: "Vent Types: Individual, Common, Wet, Circuit, Island, Relief",
      html: `
<p>An <strong>individual vent</strong> serves one fixture's trap: a dedicated pipe from the trap arm up through the roof (or into a vent stack). It is the simplest vent and the one to picture first. A <strong>common vent</strong> serves two fixtures on the same floor, back to back or side by side, sharing one vent pipe — common for two lavatories or a lavatory and a water closet that face each other across a wall.</p>
<p>A <strong>wet vent</strong> is a pipe that carries both waste and air: one fixture's drain doubles as the vent for another fixture. The IPC allows wet venting for bathroom groups under strict rules — for example, the IPC allows up to two bathroom groups on a single wet vent, and the wet-vented section must be sized as a drain, not as a vent. Wet venting saves pipe and is standard in residential bathrooms, but it only works when the fixtures and their order follow the code's rules exactly.</p>
<p>A <strong>circuit vent</strong> serves a row of fixtures — a battery of water closets in a commercial restroom, for example — with one vent connected to the horizontal branch, plus a <strong>relief vent</strong> where the branch connects to a stack receiving waste from above. An <strong>island vent</strong> serves a fixture in the middle of a room, like a kitchen island sink, where no wall is available: the vent loops up under the counter and back down to connect below the floor. Each type solves a layout problem; each has its own section in Chapter 9.</p>
<div class="callout"><strong>Key idea:</strong> One fixture, one vent — that is the individual vent. Everything else is a way to share a vent legally when the layout demands it, and each sharing method has its own rules.</div>`
    },
    {
      heading: "Vent Sizing: Size, Length, and DFU",
      html: `
<p>Vent sizing starts with a floor: the code requires a minimum vent size of <strong>1-1/4 inches</strong>, and no vent may be smaller than the drain it serves in the ways the code specifies. From there, size is set by the load the vent serves and the length of the vent — the <strong>developed length</strong> of the vent pipe from the trap to the open air. The sizing table in Chapter 9 (Table 916.1 in the 2021 IPC) gives the maximum DFU a vent of each size may serve at each developed length: a bigger load or a longer run needs a bigger vent, because air, like water, loses pressure to friction over distance.</p>
<p>The workhorse rule beginners should carry is the <strong>aggregate vent rule</strong>: the vent stack serving a building must be at least as large, in aggregate, as the building drain it serves, and the code requires the vent system to be sized so that pressures in the drainage system stay within the code's limits. In practice that means a vent is usually one size smaller than the drain it vents, never more than two sizes smaller, and never smaller than 1-1/4 inches — but the table, not the rule of thumb, is the authority on the exam.</p>
<p>Two details matter on every job. First, a vent must rise <strong>at least 6 inches above the flood-level rim</strong> of the highest fixture it serves before it turns horizontal — below that height, a backup could fill the vent with waste. Second, the vent's horizontal runs must be graded back toward the drain so condensation drains out of the vent instead of pooling in it.</p>
<div class="callout"><strong>Key idea:</strong> Size a vent by its DFU load and its developed length from the table. Minimum vent size is 1-1/4 inches, and a dry vent rises 6 inches above the flood-level rim before going horizontal.</div>`
    },
    {
      heading: "Termination: Through the Roof and Away from Openings",
      html: `
<p>A vent must end in the open air, and the code is specific about where. The vent terminal must extend at least <strong>6 inches above the roof</strong>, and it must be at least <strong>10 feet horizontally from any opening</strong> — a window, a door, or an air intake — unless it terminates at least 3 feet above that opening. The point is to keep sewer gas from being drawn back into the building through the very openings the vent is meant to protect.</p>
<p>In cold climates the terminal needs attention: a vent that is too small can close with frost, and the code requires vent terminals in cold regions to be at least 3 inches in diameter where frost closure is a risk, or to be protected. Michigan winters make this a real rule, not a footnote — a frost-closed vent behaves exactly like no vent at all, and the symptoms (gurgling, dry traps, smells) appear on the coldest mornings of the year.</p>
<p>Every vent that goes through a roof also needs a proper flashing, and the vent must be supported and protected like any other pipe. A vent that is crushed, disconnected in an attic, or terminated into the attic instead of through the roof is a failed vent — and terminating a vent into an attic is a code violation, because the gas it carries ends up inside the building envelope.</p>
<div class="callout"><strong>Key idea:</strong> 6 inches above the roof, 10 feet from openings (or 3 feet above them), and never into an attic. In Michigan, watch for frost closure on small terminals.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Vents equalize pressure so trap seals (2–4 inches of water) are not siphoned out or blown out.</li>
<li>Vent types: individual (one fixture), common (two fixtures), wet (drain doubles as vent for bathroom groups), circuit (a row of fixtures, with a relief vent), island (loop vent for island fixtures), relief (protects a circuit vent).</li>
<li>Minimum vent size is 1-1/4 inches; size from the Chapter 9 table by DFU load and developed length.</li>
<li>A dry vent rises at least 6 inches above the flood-level rim before turning horizontal, and horizontal vent runs grade back to the drain.</li>
<li>Vent terminals: at least 6 inches above the roof, at least 10 feet from openings (or 3 feet above them); frost closure is a Michigan concern.</li>
<li>Air admittance valves (Section 918) admit air only, are allowed only where the code permits, and never replace the required vent open to the atmosphere.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Running a dry vent horizontally below the flood-level rim. Below that height a backup can fill the vent with waste, and the vent stops being a vent.</div>
<div class="callout"><strong>Common mistake:</strong> Treating a gurgling drain as a clog. A drain that gurgles but is not slow is usually starved for air — check the vent before you reach for the snake.</div>
<p><strong>Ready-to-Work link:</strong> Venting is the most-tested chapter on the Michigan journeyman exam after drainage sizing, and wet venting is the topic that separates the plumbers who understand Chapter 9 from the ones who memorized a diagram.</p>`
    }
  ],
  keyTerms: [
    { term: "Trap seal", def: "The water held in a trap (2 to 4 inches deep) that blocks sewer gas; vents exist to protect it." },
    { term: "Siphonage", def: "The loss of a trap seal when negative pressure in the drain sucks the water out of the trap." },
    { term: "Individual vent", def: "A vent serving a single fixture's trap." },
    { term: "Common vent", def: "One vent serving two fixtures on the same floor, typically back to back." },
    { term: "Wet vent", def: "A pipe that carries both waste and air, venting one fixture through another's drain; allowed for bathroom groups under strict IPC rules (up to two groups)." },
    { term: "Circuit vent", def: "A vent serving a row of fixtures on a horizontal branch, used for batteries of water closets." },
    { term: "Relief vent", def: "A vent that protects a circuit vent where its branch connects to a stack receiving waste from above." },
    { term: "Island vent", def: "A loop vent for a fixture with no nearby wall, such as a kitchen island sink." },
    { term: "Developed length (vent)", def: "The length of a vent pipe from the trap to the open air; a sizing input in the Chapter 9 vent table." },
    { term: "Vent terminal", def: "The open-air end of a vent, at least 6 inches above the roof and 10 feet from openings (or 3 feet above them)." },
    { term: "Flood-level rim", def: "The top edge of a fixture over which water would spill; a dry vent must rise 6 inches above it before turning horizontal." },
    { term: "Frost closure", def: "The closing of a small vent terminal by frost in cold weather; the code requires larger terminals where frost is a risk." },
    { term: "Air admittance valve (AAV)", def: "A one-way valve that admits air into the drainage system when pressure drops, then closes; allowed only where the code permits (Section 918)." },
    { term: "Vent stack", def: "A vertical vent pipe that collects individual vents and carries them through the roof." }
  ],
  video: {
    title: "How Plumbing Vents Work (And Why Your Toilet Gurgles)",
    embedUrl: "https://www.youtube.com/embed/AdiHG-2nhfM",
    note: "A clear explanation of the whole venting picture in one diagram: the trap seal, how a flush can siphon water out of traps, the roof vent that stops it, air admittance valves, and blocked or frozen vents. The video cites the IPC for trap seal depth, vent pressure limits, and vent distance from windows — watch it, then check each claim against Chapter 9.",
    more: [
      { title: "Engineered Plumbing Design II | Lecture 12, Part 1: Vent Terminals, Stacks & Connections | SBC & IPC", url: "https://www.youtube.com/watch?v=KMP1Rxfl7hM" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A bathroom sink gurgles every time the toilet flushes, and the sink's trap sometimes goes dry. Diagnose the problem and name the system at fault.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The symptoms point to venting, not a clog — the flush creates negative pressure that siphons the sink's trap seal. Step 2: The sink's vent is blocked, undersized, or missing, so the drain draws air through the trap instead of through the vent. Step 3: Check the vent: look for a blocked or frost-closed roof terminal, a disconnected vent in the attic, or a vent that was never installed — and do not snake a drain that is not clogged.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A kitchen island sink has no wall nearby. What vent type serves it, and how does it work?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: An island (loop) vent serves it. Step 2: The vent rises from the trap arm, loops up under the countertop as high as possible, then runs back down and connects to the drainage system below the floor. Step 3: The loop admits air to the trap while keeping the vent's high point above the flood-level rim, so waste cannot enter the vent.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A dry vent is run horizontally 4 inches above the flood-level rim of the fixture it serves. Does it comply? Explain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: No — a dry vent must rise at least 6 inches above the flood-level rim before turning horizontal. Step 2: At 4 inches, a backup could fill the horizontal vent with waste before the water reaches the rim. Step 3: Reroute the vent so it rises 6 inches above the rim before any horizontal run.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A vent terminal ends 4 inches above a flat roof and 6 feet from a bedroom window. List the two violations and the corrections.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The terminal is 4 inches above the roof; the code requires at least 6 inches — extend it. Step 2: It is 6 feet from a window; the code requires at least 10 feet horizontally, unless the terminal is at least 3 feet above the opening — move it farther away or extend it 3 feet above the window. Step 3: Both rules exist to keep sewer gas out of the building.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> Two bathroom groups are wet-vented on one vent. A third bathroom group is added to the same wet vent. Is that allowed under the IPC?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: No — the IPC allows up to two bathroom groups on a single wet vent. Step 2: The third group needs its own venting arrangement. Step 3: The wet-vented section must also be sized as a drain, and the fixtures must be arranged in the order and with the fittings the code's wet-venting rules require.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A remodeler wants to use air admittance valves for every fixture in a house and install no roof vent at all. Why does the code forbid this?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: An air admittance valve only admits air — it cannot relieve positive pressure, which a roof vent does. Step 2: The code requires at least one vent open to the atmosphere in every dwelling, to relieve positive pressure and to vent sewer gas safely outside. Step 3: AAVs are allowed only where the code permits them, as a supplement to the vent system, never as a replacement for the required open vent.</p>"
    }
  ],
  quiz: [
    {
      q: "Vents exist primarily to:",
      choices: ["Carry waste to the sewer", "Equalize pressure so trap seals are not siphoned or blown out", "Supply air to the fixtures", "Keep the drains warm"],
      answer: 1,
      explanation: "Correct: (b). Vents admit and relieve air so pressures stay near atmospheric and seals stay put. (a) Drains carry waste; vents carry air. (c) Fixtures do not need an air supply. (d) Vents do not heat drains."
    },
    {
      q: "The IPC trap seal must be:",
      choices: ["At least 1 inch and not more than 2 inches", "At least 2 inches and not more than 4 inches", "Exactly 6 inches", "At least 6 inches"],
      answer: 1,
      explanation: "Correct: (b). The IPC requires a trap seal of at least 2 inches and not more than 4 inches. (a) 1 inch is too shallow to be reliable. (c) and (d) confuse the trap seal with the 6-inch vent-rise rule."
    },
    {
      q: "A wet vent is:",
      choices: ["A vent filled with water", "A pipe that carries both waste and air, venting one fixture through another's drain", "A vent for outdoor fixtures only", "A vent that must be larger than the drain"],
      answer: 1,
      explanation: "Correct: (b). Wet venting uses a drain as a vent for another fixture. (a) No vent is filled with water by design. (c) Wet vents are used indoors, commonly in bathrooms. (d) A wet-vented section is sized as a drain."
    },
    {
      q: "The minimum size of a vent is:",
      choices: ["3/4 inch", "1 inch", "1-1/4 inches", "2 inches"],
      answer: 2,
      explanation: "Correct: (c). The code's minimum vent size is 1-1/4 inches. (a) and (b) are below the minimum. (d) 2 inches is a common vent size but not the minimum."
    },
    {
      q: "A dry vent must rise how far above the flood-level rim before turning horizontal?",
      choices: ["2 inches", "4 inches", "6 inches", "12 inches"],
      answer: 2,
      explanation: "Correct: (c). At least 6 inches above the flood-level rim. (a) and (b) are below the requirement and would let a backup fill the vent. (d) 12 inches is more than required, not the minimum."
    },
    {
      q: "A vent terminal must be at least:",
      choices: ["6 inches above the roof and 10 feet from openings", "2 inches above the roof and 3 feet from openings", "12 inches above the roof and 20 feet from openings", "Flush with the roof and 5 feet from openings"],
      answer: 0,
      explanation: "Correct: (a). 6 inches above the roof, 10 feet from openings (or 3 feet above them). (b) Both numbers are too small. (c) Both numbers exceed the code minimums. (d) A flush terminal would admit rain and debris."
    },
    {
      q: "Gurgling drains with traps that go dry most likely indicate:",
      choices: ["A clogged drain", "A venting problem", "Low water pressure", "A leaking trap"],
      answer: 1,
      explanation: "Correct: (b). Gurgling and dry traps are the classic signs of siphonage from missing, blocked, or undersized vents. (a) A clog causes slow drainage, not gurgling with dry traps. (c) Water pressure does not affect trap seals. (d) A leak would show water, not air, as the problem."
    },
    {
      q: "An air admittance valve:",
      choices: ["Replaces the required roof vent", "Admits air only, and is allowed only where the code permits; at least one vent must still open to the atmosphere", "Relieves positive pressure", "Must be installed on every fixture"],
      answer: 1,
      explanation: "Correct: (b). An AAV lets air in when pressure drops and closes otherwise; it cannot relieve positive pressure, so an open vent is still required. (a) It never replaces the open vent. (c) Relieving positive pressure is the roof vent's job. (d) AAVs are a limited supplement, not a requirement for every fixture."
    }
  ],
  studyGuide: `
<h3>Module 8 — Vents &amp; Vent Sizing: Quick Reference</h3>
<p><strong>Why:</strong> Vents equalize pressure so the 2–4 in trap seal is not siphoned out or blown out. Gurgling + dry traps = vent problem, not a clog.</p>
<p><strong>Types:</strong> Individual (1 fixture) · Common (2 fixtures) · Wet vent (drain doubles as vent, up to 2 bathroom groups) · Circuit vent (row of fixtures + relief vent) · Island vent (loop for island fixtures) · Relief vent.</p>
<p><strong>Sizing:</strong> Minimum vent 1-1/4 in · Size from the Chapter 9 table by DFU load and developed length · Dry vent rises 6 in above the flood-level rim before going horizontal · Horizontal vent runs grade back to the drain.</p>
<p><strong>Termination:</strong> 6 in above the roof · 10 ft from openings (or 3 ft above them) · Never into an attic · Watch frost closure in Michigan.</p>
<p><strong>AAV:</strong> Admits air only, allowed only where permitted (Section 918); at least one vent must still open to the atmosphere.</p>
<p><strong>Self-check:</strong> Sketch a bathroom group and label the individual vent, the wet-vented section, and the 6-inch rise. If you can place all three, you have Chapter 9.</p>
`
};
