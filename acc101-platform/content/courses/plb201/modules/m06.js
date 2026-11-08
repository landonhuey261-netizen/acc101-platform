// Plumbing 201 - Module 6: Sanitary Drainage Sizing (IPC Ch. 7)
module.exports = {
  number: 6,
  slug: "sanitary-drainage-sizing",
  title: "Sanitary Drainage Sizing (IPC Ch. 7)",
  estTime: "3–4 hours",
  objectives: [
    "Assign drainage fixture unit (DFU) values from IPC Table 709.1 for common fixtures.",
    "Total the DFU load on a branch, a stack, and a building drain.",
    "Size horizontal branches with Table 710.1(2) and building drains and sewers with Table 710.1(1).",
    "Apply the minimum slope rules of Table 704.1 and the 3-inch minimum for a building drain serving a water closet.",
    "Explain how cleanouts, offsets, and stack rules affect a drainage design."
  ],
  sections: [
    {
      heading: "Drainage Fixture Units: Table 709.1",
      html: `
<p>Drainage is sized the same way water supply is sized — with fixture units — but the units are different. A <strong>drainage fixture unit (DFU)</strong> measures the load a fixture puts on the drainage system: how much water it discharges, how fast, and how often. The values live in <strong>IPC Table 709.1</strong> (in the 2021 edition; older editions numbered this table 702.1, so do not be confused if an older book cites the other number). The values this course uses are: a 1.6 gpf water closet, private 3.0 and public 4.0; a lavatory 1.0; a bathtub or combination bath/shower 2.0; a shower 2.0; a kitchen sink 2.0; a laundry sink 2.0; a clothes washer (domestic standpipe) 3.0; and a bathroom group (1.6 gpf water closet, lavatory, and bathtub or shower) 5.0 as a group.</p>
<p>Notice the differences from water supply units. A water closet is 3 DFU on the drain but only 2.2 WSFU on the supply, because the drain sees the whole flush at once while the supply sees a slow refill. A lavatory is 1.0 on both sides by coincidence, not by rule. Never carry a supply value into a drainage calculation or the reverse — the two tables measure different things.</p>
<p>Work an example. A private bathroom group with a water closet, lavatory, and tub/shower totals 3 + 1 + 2 = 6 DFU by individual fixtures — or 5 DFU if you use the bathroom-group row, because the group row recognizes that the fixtures in one bathroom are rarely all discharging at once. The code lets you use the group value when the fixtures form one bathroom group; everywhere else, add the individual values.</p>
<div class="callout"><strong>Key idea:</strong> DFU values come from Table 709.1 (2021). Drainage units and supply units are different numbers for the same fixture — never swap them.</div>`
    },
    {
      heading: "Slope: Table 704.1",
      html: `
<p>Drainage pipe works by gravity, and gravity needs slope. <strong>Table 704.1</strong> sets the minimum slope of horizontal drainage pipe by size: pipe 2-1/2 inches and smaller needs <strong>1/4 inch per foot</strong>; pipe 3 to 6 inches needs <strong>1/8 inch per foot</strong>; pipe 8 inches and larger needs <strong>1/16 inch per foot</strong>. Those are minimums — more slope is allowed, but more slope is not always better.</p>
<p>Slope is a Goldilocks problem. Too little slope and water moves too slowly to carry solids, so waste settles and the pipe clogs. Too much slope and the water outruns the solids, leaving them behind to dry and clog the pipe anyway. The code's minimums are the slowest slope that still moves solids reliably at the pipe's design load, and they are also the slopes the sizing tables assume. A pipe installed flatter than its minimum is a code violation even if it is the right size.</p>
<p>Measure slope the way the code means it: drop per foot of run, checked with a level, not by eye. A 10-foot run of 2-inch pipe at 1/4 inch per foot must drop 2-1/2 inches from end to end. On a long run that drop adds up, which is why basements with low ceilings sometimes need a sewage ejector — the drain simply cannot fall far enough before it reaches the sewer.</p>
<div class="callout"><strong>Key idea:</strong> Minimum slope by size: 1/4 inch per foot at 2-1/2 inches and smaller, 1/8 at 3–6 inches, 1/16 at 8 inches and up. Flatter than the minimum is a violation, not a shortcut.</div>`
    },
    {
      heading: "Sizing Horizontal Branches: Table 710.1(2)",
      html: `
<p>Once the DFU load on a pipe segment is known, the pipe is sized from <strong>Table 710.1(2), Horizontal Fixture Branches and Stacks</strong>. The branch column gives the maximum DFU a horizontal branch of each size may carry: a 1-1/2-inch branch carries 3 DFU, a 3-inch branch carries 20 DFU, and a 4-inch branch carries 160 DFU. The stack columns give larger numbers, because a vertical stack can carry more than a horizontal branch of the same size — water falls faster than it flows sideways.</p>
<p>Work an example. A second-floor branch serves two bathroom groups (5 DFU each) and a laundry sink (2 DFU): 5 + 5 + 2 = 12 DFU. A 3-inch branch (20 DFU maximum) carries it with room to spare; a 2-inch branch would not. But check the fine print: the table's footnotes limit how many water closets a branch may carry — a 3-inch horizontal branch is limited to 2 water closets even though its DFU capacity would allow more. The footnote, not the number, is the limit that catches people.</p>
<p>Size every segment separately, from the farthest fixture toward the sewer, adding the loads as branches join. The pipe gets bigger as the load grows; it never gets smaller downstream. A design that necks down toward the sewer is wrong on its face, and an inspector will spot it without opening the book.</p>
<div class="callout"><strong>Key idea:</strong> Size each segment from the fixture toward the sewer, adding loads as branches join. Pipe only gets bigger downstream — never smaller.</div>`
    },
    {
      heading: "Sizing Building Drains and Sewers: Table 710.1(1)",
      html: `
<p>The building drain and the building sewer — the pipes that carry everything out — are sized from <strong>Table 710.1(1), Building Drains and Sewers</strong>, which gives the maximum DFU for each pipe size at four slopes. The values this course uses are: a 2-inch drain at 1/4 inch per foot carries 21 DFU; a 3-inch drain carries 36 DFU at 1/8 inch per foot, 42 at 1/4 inch, and 50 at 1/2 inch; a 4-inch drain carries 180 DFU at 1/8 inch per foot, 216 at 1/4 inch, and 250 at 1/2 inch. Steeper slope buys a little more capacity, but not much — going from 1/8 to 1/4 inch per foot on a 3-inch drain buys 6 more DFU, not a new pipe size.</p>
<p>Work an example. A three-bathroom house has three bathroom groups (5 DFU each = 15), a kitchen sink (2), a laundry sink (2), and a clothes washer (3): 15 + 2 + 2 + 3 = 22 DFU on the building drain. A 3-inch drain at 1/4 inch per foot (42 DFU) carries it easily — and a 3-inch drain is required anyway, because the table's footnote sets the rule: <strong>the minimum size of any building drain serving a water closet is 3 inches</strong>. A 2-inch drain would carry 22 DFU on paper (21 is its limit — actually it would not: 22 exceeds 21, so even on capacity alone 2 inches fails here), and the footnote would forbid it regardless.</p>
<p>That footnote is the single most-tested line in Chapter 7. Read it every time you size a building drain, and teach it to anyone who sizes drains with you.</p>
<div class="callout"><strong>Key idea:</strong> The building drain's table is Table 710.1(1), and its footnote is law: any building drain serving a water closet is at least 3 inches, whatever the DFU math says.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>DFU values (Table 709.1, 2021): WC private 3.0, public 4.0; lavatory 1.0; bathtub 2.0; shower 2.0; kitchen sink 2.0; laundry sink 2.0; clothes washer 3.0; bathroom group (1.6 gpf) 5.0.</li>
<li>Minimum slope (Table 704.1): 1/4 inch per foot at 2-1/2 inches and smaller; 1/8 at 3–6 inches; 1/16 at 8 inches and larger.</li>
<li>Horizontal branches (Table 710.1(2)): 1-1/2 inch = 3 DFU, 3 inch = 20 DFU, 4 inch = 160 DFU, with a water-closet limit per branch in the footnotes.</li>
<li>Building drains and sewers (Table 710.1(1)): 3 inch = 36 DFU @ 1/8 in/ft, 42 @ 1/4 in/ft; 4 inch = 180 @ 1/8 in/ft, 216 @ 1/4 in/ft; 2 inch = 21 @ 1/4 in/ft.</li>
<li>Any building drain serving a water closet is at least 3 inches. Pipe only gets bigger downstream.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Using water supply fixture units for drainage sizing. A water closet is 2.2 WSFU and 3 DFU — the numbers are close enough to confuse and different enough to fail.</div>
<div class="callout"><strong>Common mistake:</strong> Sizing a building drain from the table and forgetting the 3-inch footnote. The table would allow a 2-inch drain for a small load, and the footnote forbids it the moment a water closet is connected.</div>
<p><strong>Ready-to-Work link:</strong> Drainage sizing is the largest single topic on the Michigan journeyman exam's sizing section, and the course lab turns this module's tables into a scored DFU → pipe-size grid.</p>`
    }
  ],
  keyTerms: [
    { term: "Drainage fixture unit (DFU)", def: "A load index for drainage (Table 709.1) measuring a fixture's discharge load on the drainage system." },
    { term: "Table 709.1", def: "The 2021 IPC table of drainage fixture unit values; older editions numbered it 702.1." },
    { term: "Bathroom group", def: "A water closet, lavatory, and bathtub or shower together; counted as 5 DFU (1.6 gpf water closet) instead of the sum of the parts." },
    { term: "Table 704.1", def: "Minimum slope of horizontal drainage pipe: 1/4 in/ft at 2-1/2 in and smaller, 1/8 in/ft at 3–6 in, 1/16 in/ft at 8 in and larger." },
    { term: "Table 710.1(1)", def: "Maximum DFU for building drains and sewers by pipe size and slope." },
    { term: "Table 710.1(2)", def: "Maximum DFU for horizontal fixture branches and stacks." },
    { term: "Horizontal branch", def: "A horizontal drainage pipe serving fixtures and connecting to a stack or building drain; sized by Table 710.1(2)." },
    { term: "Stack", def: "A vertical drainage pipe (soil or waste stack) carrying discharge downward; sized by Table 710.1(2)'s stack columns." },
    { term: "Building drain", def: "The lowest horizontal drainage piping inside the building; minimum 3 inches where it serves a water closet." },
    { term: "Cleanout", def: "An accessible opening in drainage piping for clearing blockages; required at the base of stacks, at changes of direction, and at set intervals." },
    { term: "Offset", def: "A change in direction of a drainage pipe, usually made with two fittings; offsets in stacks have their own sizing rules." },
    { term: "Self-scouring", def: "A drain's ability to carry solids along with the water; the reason slope minimums exist and why too much slope is also a problem." },
    { term: "Sewer", def: "The building sewer: drainage piping outside the building, from the end of the building drain to the public sewer." },
    { term: "Continuous flow", def: "Discharge that runs steadily (for example, from a pump or a fixture with a continuous flow); sized by its gpm converted to DFU, not by the fixture table." }
  ],
  video: {
    title: "How to Size a Home Drainage System",
    embedUrl: "https://www.youtube.com/embed/1nLTn260OD4",
    note: "A full worked example of sizing a home drainage system: calculating DFUs for each fixture, assigning minimum trap and trap-arm sizes, adding DFUs along each pipe section, and sizing each section. Note: this video demonstrates the method using the 2018 Uniform Plumbing Code table, so its water closet value (4 DFU) differs from the IPC's (3 DFU private) — follow the method step by step, but use the IPC Table 709.1 values in this module for Michigan work.",
    more: [
      { title: "Drainage system design, drainage pipe size calculation as per IPC standard, plumbing system design", url: "https://www.youtube.com/watch?v=sXeZBJTQYTM" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A private bathroom has a 1.6 gpf water closet, a lavatory, and a bathtub/shower. What is its DFU total by individual fixtures, and what is it as a bathroom group? Which do you use?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Individual: WC 3.0 + lavatory 1.0 + bathtub 2.0 = <strong>6.0 DFU</strong>. Step 2: As a bathroom group: <strong>5.0 DFU</strong> from Table 709.1. Step 3: Use 5.0 DFU when the fixtures form one bathroom group, because the group row recognizes they are rarely all discharging at once.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A branch serves two bathroom groups (5 DFU each), a kitchen sink (2 DFU), and a clothes washer (3 DFU). What is the total DFU, and what is the smallest branch size from Table 710.1(2)?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Total = 5 + 5 + 2 + 3 = <strong>15 DFU</strong>. Step 2: Table 710.1(2) branch maximums: 1-1/2 inch = 3, 3 inch = 20, 4 inch = 160. Step 3: 15 DFU exceeds a 2-inch branch's capacity, so the smallest branch that carries it is <strong>3 inch</strong> (20 DFU) — and the water-closet footnote must also be checked.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A building drain serves a total of 40 DFU including two water closets, at 1/4 inch per foot slope. What size is required, and what two rules decide it?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Table 710.1(1): a 3-inch drain at 1/4 inch per foot carries 42 DFU, which covers 40 DFU. Step 2: The footnote requires a minimum of 3 inches for any building drain serving a water closet — also satisfied by 3 inches. Step 3: <strong>3-inch</strong> building drain; both the capacity table and the footnote point to the same answer.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A 10-foot run of 2-inch horizontal drain is installed with a total drop of 2 inches. Does it meet Table 704.1? Show the math.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 2-inch pipe needs a minimum of 1/4 inch per foot. Step 2: Required drop over 10 feet = 10 × 1/4 = <strong>2-1/2 inches</strong>. Step 3: The installed drop is 2 inches, which is 1/2 inch short — the run <strong>fails</strong> and must be re-pitched to at least 2-1/2 inches of fall.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A designer totals a building drain load as 22 DFU and selects a 2-inch drain, citing Table 710.1(1). What is wrong, and what is the correct size?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Table 710.1(1) gives a 2-inch drain at 1/4 inch per foot a maximum of 21 DFU — 22 DFU already exceeds it. Step 2: Even if the load were 21 or less, the footnote requires a minimum of 3 inches for any building drain serving a water closet. Step 3: The correct size is <strong>3 inches</strong>, on both capacity and the footnote.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain why a drainage pipe should not be installed much steeper than the code minimum, even though steeper seems like it would drain better.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Drainage works by water carrying solids along — the water and the solids must travel together. Step 2: On a very steep pipe the water outruns the solids, leaving them behind to dry and build up. Step 3: The pipe then clogs from solids the water abandoned, which is why the code's minimums are a balance: steep enough to move waste, flat enough to keep the water and solids together.</p>"
    }
  ],
  quiz: [
    {
      q: "A private 1.6 gpf water closet is worth how many DFU in IPC Table 709.1?",
      choices: ["1.0", "2.0", "3.0", "4.0"],
      answer: 2,
      explanation: "Correct: (c). Private 1.6 gpf WC = 3.0 DFU. (a) 1.0 is a lavatory. (b) 2.0 is a bathtub or shower. (d) 4.0 is a public 1.6 gpf WC."
    },
    {
      q: "A bathroom group (1.6 gpf WC, lavatory, tub/shower) is counted as:",
      choices: ["6 DFU", "5 DFU", "4 DFU", "3 DFU"],
      answer: 1,
      explanation: "Correct: (b). The bathroom-group row gives 5 DFU. (a) 6 DFU is the sum of the individual values (3+1+2), which the group row replaces. (c) and (d) are too low."
    },
    {
      q: "Table 704.1 requires a 4-inch horizontal drain to slope at least:",
      choices: ["1/4 inch per foot", "1/8 inch per foot", "1/16 inch per foot", "1/2 inch per foot"],
      answer: 1,
      explanation: "Correct: (b). 3- to 6-inch pipe needs 1/8 inch per foot. (a) 1/4 inch per foot is for 2-1/2 inches and smaller. (c) 1/16 inch per foot is for 8 inches and larger. (d) 1/2 inch per foot is a sizing-table slope, not the minimum."
    },
    {
      q: "A 3-inch building drain at 1/4 inch per foot carries a maximum of:",
      choices: ["20 DFU", "36 DFU", "42 DFU", "216 DFU"],
      answer: 2,
      explanation: "Correct: (c). Table 710.1(1): 3 inch at 1/4 in/ft = 42 DFU. (a) 20 DFU is the 3-inch horizontal branch limit in Table 710.1(2). (b) 36 DFU is the 3-inch drain at 1/8 in/ft. (d) 216 DFU is a 4-inch drain at 1/4 in/ft."
    },
    {
      q: "The minimum size of a building drain serving a water closet is:",
      choices: ["2 inches", "3 inches", "4 inches", "Whatever the DFU math allows"],
      answer: 1,
      explanation: "Correct: (b). The Table 710.1(1) footnote requires at least 3 inches. (a) 2 inches is forbidden by the footnote even when capacity allows it. (c) 4 inches is allowed but not required. (d) The footnote overrides the math."
    },
    {
      q: "A 3-inch horizontal branch may carry a maximum of:",
      choices: ["3 DFU", "20 DFU", "42 DFU", "160 DFU"],
      answer: 1,
      explanation: "Correct: (b). Table 710.1(2): 3-inch branch = 20 DFU. (a) 3 DFU is a 1-1/2-inch branch. (c) 42 DFU is a 3-inch building drain at 1/4 in/ft. (d) 160 DFU is a 4-inch branch."
    },
    {
      q: "When sizing a drainage system, pipe size as you move toward the sewer should:",
      choices: ["Stay the same", "Get smaller", "Get bigger or stay the same, never smaller", "Alternate by floor"],
      answer: 2,
      explanation: "Correct: (c). Loads only grow downstream, so pipe only grows. (a) Staying the same is allowed only if the load allows it — the rule is never smaller. (b) Necking down toward the sewer is wrong. (d) There is no alternating rule."
    },
    {
      q: "Using a water supply fixture unit (2.2) instead of a drainage fixture unit (3.0) for a water closet would:",
      choices: ["Oversize the drain", "Undersize the drain, because the load is understated", "Make no difference", "Only affect the vent size"],
      answer: 1,
      explanation: "Correct: (b). 2.2 is smaller than 3.0, so the drain would be sized for less load than it carries. (a) It would undersize, not oversize. (c) The two numbers differ by nearly a third. (d) The drain itself is undersized; the vent is a separate calculation."
    }
  ],
  studyGuide: `
<h3>Module 6 — Sanitary Drainage Sizing: Quick Reference</h3>
<p><strong>DFU (Table 709.1, 2021):</strong> WC private 3.0 · WC public 4.0 · Lavatory 1.0 · Bathtub 2.0 · Shower 2.0 · Kitchen sink 2.0 · Laundry sink 2.0 · Clothes washer 3.0 · Bathroom group (1.6 gpf) 5.0.</p>
<p><strong>Slope (Table 704.1):</strong> ≤2-1/2 in = 1/4 in/ft · 3–6 in = 1/8 in/ft · ≥8 in = 1/16 in/ft.</p>
<p><strong>Branches (Table 710.1(2)):</strong> 1-1/2 in = 3 DFU · 3 in = 20 DFU · 4 in = 160 DFU. Watch the water-closet footnotes.</p>
<p><strong>Drains &amp; sewers (Table 710.1(1)):</strong> 2 in @ 1/4 in/ft = 21 · 3 in = 36 @ 1/8, 42 @ 1/4, 50 @ 1/2 · 4 in = 180 @ 1/8, 216 @ 1/4, 250 @ 1/2.</p>
<p><strong>Footnote:</strong> Any building drain serving a water closet is at least 3 inches. Pipe only grows downstream.</p>
<p><strong>Self-check:</strong> Size the three-bathroom house in this module (22 DFU) from memory: total the DFUs, pick the drain size, and state the footnote. If all three match, you have the module.</p>
`
};
