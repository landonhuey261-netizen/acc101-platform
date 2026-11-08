// Plumbing 121 - Module 12: Course Review: Tracing a DWV System on a Plan
module.exports = {
  number: 12,
  slug: "course-review-tracing-dwv",
  title: "Course Review: Tracing a DWV System on a Plan",
  estTime: "3–4 hours",
  objectives: [
    "Read a DWV plan: identify fixtures, stacks, branches, vents, and cleanouts from standard symbols.",
    "Trace a complete DWV path from a fixture to the building sewer on a plan and a riser diagram.",
    "Check a plan against the code: DFU totals, pipe sizes, slopes, trap-arm distances, and vent sizes.",
    "Spot the five most common plan errors: unvented fixtures, over-long trap arms, wrong fittings, missing cleanouts, and undersized vents.",
    "Summarize the whole DWV course as a single job sequence: layout, install, test, inspect."
  ],
  sections: [
    {
      heading: "Reading the Plan: Symbols and the Riser Diagram",
      html: `
<p>A plumbing plan shows the building from above: fixture locations, pipe runs, and the stack positions. A <strong>riser diagram</strong> (also called a stack diagram or isometric) shows the same system in three dimensions: stacks rising through floors, branches joining them, and vents rising to the roof. The plan tells you <em>where</em>; the riser tells you <em>how it connects</em>. A plumber who can read only one of them can only do half the job.</p>
<p>Learn the symbols before you trace anything. A water closet is shown as its fixture outline with a 3-inch drain; a lavatory as a small basin with a 1-1/4-inch trap; a tub or shower with a 2-inch drain. Solid lines are drains and waste; vent pipes are often shown as dashed lines or labeled "V". A stack is a circle or a heavy line where several branches meet. Cleanouts are marked "CO". The plan's legend defines the symbols for that job — read it first, because symbols vary between designers.</p>
<p>Tracing starts at a fixture and follows the water. Pick the farthest fixture from the stack — usually an upstairs bathroom — and walk its path: fixture drain, trap, trap arm, branch, stack, building drain, building sewer. At each step, ask the code question for that segment: is the trap arm within Table 909.1? Is the branch size right for its DFU load? Is the vent at least one-half the drain? Does the stack have a cleanout at its base? A plan review is a code check done on paper, before any pipe is cut.</p>
<div class="callout"><strong>Key idea:</strong> Plan = where. Riser = how it connects. Trace from the farthest fixture to the sewer, asking the code question at every segment.</div>`
    },
    {
      heading: "The Full Check: DFU, Size, Slope, Vent, Cleanout",
      html: `
<p>A complete plan check runs the same five questions on every segment, in order:</p>
<p><strong>1. Load:</strong> Add the DFU for every fixture on the segment (Table 709.1). Use the bathroom-group value (5 private) where the whole group shares a branch. Count future fixtures (IPC 710.2).</p>
<p><strong>2. Size:</strong> Pick the table for the segment's role — 710.1(2) for branches and stacks, 710.1(1) for building drains and sewers — and read the smallest pipe that carries the load. Remember the 3-inch minimum wherever a water closet is served.</p>
<p><strong>3. Slope:</strong> Check the fall against Table 704.1 (1/4 inch per foot for 2-1/2-inch and smaller, 1/8 inch per foot for 3- through 6-inch). Confirm the run has room to fall that far between its start and its end — a plan that cannot fall enough is a plan that must change.</p>
<p><strong>4. Vent:</strong> Confirm every trap has a vent within its Table 909.1 distance, the vent is at least one-half the drain diameter (minimum 1-1/4 inches), and the vent path reaches the outdoors. In Michigan, check the frost-closure rule: vents through the roof are 3 inches where the 97.5-percent design temperature is 0°F or less.</p>
<p><strong>5. Cleanout:</strong> Confirm cleanouts every 100 feet, at every stack base, at direction changes over 45 degrees, and within 10 feet of the building drain and sewer junction — all accessible, all the same size as the pipe up to 4 inches.</p>
<p>Worked example: a plan shows two upstairs bathrooms stacked over a kitchen, all draining to one 3-inch stack. Load: two bathroom groups (5 + 5) plus the kitchen branch (4) = 14 DFU on the stack below the kitchen join. A 3-inch stack serving three branch intervals or fewer carries 48 DFU — the stack passes. The building drain carries the same 14 DFU plus a laundry branch (5) = 19 DFU at 1/4 inch per foot: a 3-inch building drain carries 42, and the water-closet minimum is 3 inches — the building drain passes at 3 inches. Each bathroom branch (5 DFU) needs a 3-inch branch (2-inch carries only 6 — wait, 5 is less than 6, so a 2-inch branch would carry the load, but the branch serves a water closet, so it must be 3 inches anyway). The plan passes — and the water-closet rule, not the DFU total, decided the branch size.</p>
<div class="callout"><strong>Key idea:</strong> Load → size → slope → vent → cleanout. Five questions, every segment, in order. The water-closet minimum often decides the size before the DFU total does.</div>`
    },
    {
      heading: "The Five Errors That Fail Plans",
      html: `
<p>Plan reviewers see the same five errors again and again. Learn to spot them at a glance:</p>
<p><strong>1. The unvented fixture.</strong> A fixture with a trap but no vent — usually a basement lavatory or a laundry tub added to a plan late. Without a vent, the trap siphons on the first discharge. The fix is a vent, not a bigger trap.</p>
<p><strong>2. The over-long trap arm.</strong> A fixture drawn too far from its vent — a 1-1/2-inch trap arm running 8 feet when Table 909.1 allows 6. The fix is moving the vent, moving the fixture, or upsizing the trap arm to 2 inches (8 feet allowed).</p>
<p><strong>3. The wrong fitting.</strong> A sanitary tee laid on its back joining two horizontal drains, or a short ell where a long sweep belongs. The fix is the fitting that matches the flow direction (Module 8).</p>
<p><strong>4. The missing cleanout.</strong> A long horizontal run with no cleanout, or a stack with no cleanout at its base. The fix is a cleanout per IPC 708 — and it must be accessible, not buried behind a finished wall.</p>
<p><strong>5. The undersized vent.</strong> A vent sized from the trap instead of the drain — a 1-1/4-inch vent on a 4-inch drain, where the one-half rule requires 2 inches — or a vent run over 40 feet that was never upsized one size. The fix is Table 916.1 and the 40-foot rule.</p>
<p>When you find an error on a plan, do not just note it — propose the fix, with the section number. "Trap arm 8 feet on 1-1/2-inch pipe exceeds Table 909.1 (6 feet maximum); move the vent within 6 feet or upsize the trap arm to 2 inches" is a review comment a designer can act on. "This looks wrong" is not.</p>
<div class="callout"><strong>Key idea:</strong> Unvented fixture, over-long trap arm, wrong fitting, missing cleanout, undersized vent. Five errors, five fixes, each with a section number. A good review names the fix, not just the fault.</div>`
    },
    {
      heading: "The Whole Course as One Job Sequence",
      html: `
<p>Step back and the whole course becomes a single job, in order:</p>
<p><strong>Layout (Modules 1–2, 12):</strong> Understand the system, count the load in DFU, and read the plan. Know what each pipe does and how much it must carry.</p>
<p><strong>Protect the seal (Module 3):</strong> Every fixture gets a trap with a 2- to 4-inch seal, and the trap arm stays within Table 909.1 so the seal survives.</p>
<p><strong>Give it air (Modules 4–5, 7):</strong> Vent every trap by a permitted method, size the vent from the stack and the load, and finish the terminal above the roof — 3 inches in Michigan's frost country.</p>
<p><strong>Size it (Module 6):</strong> Count DFU, pick the table for the pipe's role, read the smallest size that covers the load, and respect the 3-inch water-closet minimum.</p>
<p><strong>Install it (Modules 8, 10, 11):</strong> Set uniform slope, use the right fitting for each turn, support the pipe, put cleanouts where the code requires them, connect the sewer correctly, and drain the roof and floors to the right system.</p>
<p><strong>Prove it (Module 9):</strong> Test before concealment — water to a 10-foot head, air to 5 psi, smoke to find the leak — and pass the inspection. Then the walls can close.</p>
<p>That sequence is also the shape of your career in drainage: the plumber who lays out carefully, protects the seal, vents generously, sizes by the table, installs cleanly, and tests honestly is the plumber whose work never comes back.</p>
<div class="callout"><strong>Key idea:</strong> Layout → seal → air → size → install → prove. Six steps, in order, on every DWV job. Skip one and the next one inherits the failure.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Read the plan's legend first; trace from the farthest fixture to the sewer on both the plan and the riser diagram.</li>
<li>Five-question check per segment: load (709.1) → size (710.1(1)/(2)) → slope (704.1) → vent (909.1, 906.2, 916.1) → cleanout (708).</li>
<li>Five common plan errors: unvented fixture, over-long trap arm, wrong fitting, missing cleanout, undersized vent.</li>
<li>Whole-course sequence: layout → seal → air → size → install → prove.</li>
<li>Key numbers: DFU (WC private 3, lav 1, tub/shower 2, group 5); branch capacities (2 in = 6, 3 in = 20); building drain (3 in = 42 @ 1/4 in/ft); trap seal 2–4 in; trap arms (1-1/2 in = 6 ft, 2 in = 8 ft); vent ≥ 1/2 drain, min 1-1/4 in; tests (10 ft / 15 min, 5 psi / 15 min, 1 in WC / 15 min).</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Checking pipe sizes on a plan without checking the venting. A perfectly sized drain with an unvented trap is still a failed system — size and air are checked together, never separately.</div>
<div class="callout"><strong>Common mistake:</strong> Reviewing a plan without the riser diagram. The plan shows where pipes run; only the riser shows how they connect vertically — and most venting errors are vertical errors.</div>
<p><strong>Ready-to-Work link:</strong> The final exam for this course is a plan-tracing exercise in question form. If you can run the five-question check on a bathroom group without the book, you are ready for it — and for the Michigan journeyman exam's drainage section.</p>`
    }
  ],
  keyTerms: [
    { term: "Riser diagram", def: "A three-dimensional (isometric) drawing showing stacks, branches, and vents and how they connect vertically." },
    { term: "Plan view", def: "A drawing showing the building from above: fixture locations, pipe runs, and stack positions." },
    { term: "Legend", def: "The key on a drawing defining its symbols; read it before tracing anything." },
    { term: "Fixture outline", def: "The drawn shape of a fixture on a plan, showing its location and drain position." },
    { term: "Plan check", def: "A systematic review of a plumbing plan against the code: load, size, slope, vent, and cleanout for every segment." },
    { term: "Flood-level rim", def: "The top edge of a fixture over which water would overflow; used to locate vent connections." },
    { term: "Branch interval", def: "A vertical distance of 8 feet or more between horizontal branch connections to a stack." },
    { term: "Isometric drawing", def: "A three-dimensional drawing style used for riser diagrams, showing pipe runs in true relative position." },
    { term: "Takeoff", def: "A list of pipe and fitting quantities measured from a plan, used for estimating a job." },
    { term: "Rough-in", def: "The stage of installation when piping is installed and tested before walls and finishes close over it." },
    { term: "Riser diagram", def: "A vertical schematic drawing showing stacks, branches, and vents with their sizes and connections." },
    { term: "Legend", def: "The key on a plan that explains the symbols, abbreviations, and line types used in the drawing." }
  ],
  video: {
    title: "Reading Plumbing Drawings - The Easy Way",
    embedUrl: "https://www.youtube.com/embed/g8VyP4fFWbg",
    note: "How to read plumbing drawings without getting lost: symbols, plans, and riser diagrams, explained step by step. Use it to practice the tracing method in this module — pick a fixture on the drawing and follow its path to the sewer.",
    more: [
      { title: "Draw Plumbing Riser Diagram", url: "https://www.youtube.com/watch?v=ktooz6efX-k" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A plan shows an upstairs bathroom (private group, 5 DFU) draining to a 2-inch branch. The branch serves the water closet. (a) What is the branch load? (b) Is 2-inch pipe acceptable? Explain both the capacity check and the minimum-size rule.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The branch load is <strong>5 DFU</strong> (the bathroom-group value). Step 2: Capacity check — a 2-inch branch carries 6 DFU, so 5 DFU fits on capacity. Step 3: Minimum-size rule — the branch serves a water closet, so it must be at least <strong>3 inches</strong>. Step 4: 2-inch pipe is <strong>not acceptable</strong>: capacity passes but the minimum-size rule fails, and the minimum-size rule governs.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A plan shows a lavatory with a 1-1/2-inch trap 8 feet from its vent. (a) Does it meet Table 909.1? (b) Name two fixes.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Table 909.1 allows a 1-1/2-inch trap arm a maximum of <strong>6 feet</strong>. Step 2: 8 feet exceeds the maximum, so the layout <strong>fails</strong>. Step 3: Fix it by moving the vent to within 6 feet of the trap, or by upsizing the trap and trap arm to <strong>2 inches</strong>, which allows 8 feet.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A plan shows a 4-inch drain with a 1-1/4-inch vent. (a) What does the one-half rule require? (b) Is the plan's vent acceptable?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: IPC 906.2 requires a vent of at least one-half the drain diameter: one-half of 4 inches is <strong>2 inches</strong>. Step 2: The plan's 1-1/4-inch vent is <strong>not acceptable</strong> — it is the absolute minimum vent size, not the size for a 4-inch drain. Step 3: The vent must be at least 2 inches (and then checked against Table 916.1 for load and length).</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A plan shows a horizontal building drain running 150 feet with a single cleanout at the stack base and no other cleanouts. (a) What does IPC 708 require? (b) How many cleanouts are needed and where?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: IPC 708 requires cleanouts at intervals of not more than <strong>100 feet</strong> on horizontal drains, plus one at the base of each stack. Step 2: A 150-foot run needs cleanouts so no point is more than 100 feet from one: the stack-base cleanout plus <strong>at least one more</strong>, placed so the spacing between cleanouts does not exceed 100 feet (for example, one at the stack base and one about 75 feet downstream). Step 3: The single cleanout fails the spacing rule.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A plan shows a kitchen sink branch joining a horizontal drain with a sanitary tee laid on its back. (a) What is wrong? (b) What fitting should be used instead, and why?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A sanitary tee laid on its back for a horizontal-to-horizontal joint is wrong — the flow hits a flat wall, solids stall, and a snake cannot make the turn. Step 2: The joint needs a <strong>wye (or combination fitting)</strong> entering at 45 degrees, so the branch flow merges smoothly with the main flow instead of slamming into it.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Write the six-step DWV job sequence from this course in order, with one phrase for each step.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>Layout</strong> — understand the system and count the DFU load. Step 2: <strong>Seal</strong> — trap every fixture with a 2- to 4-inch seal. Step 3: <strong>Air</strong> — vent every trap by a permitted method. Step 4: <strong>Size</strong> — read pipe sizes from the right table. Step 5: <strong>Install</strong> — slope, fittings, supports, cleanouts, sewer. Step 6: <strong>Prove</strong> — test before concealment and pass inspection.</p>"
    }
  ],
  quiz: [
    {
      q: "On a plumbing plan, the riser diagram is used to show:",
      choices: ["The cost of the job", "How stacks, branches, and vents connect vertically", "The fixture manufacturer's model numbers", "The property lines"],
      answer: 1,
      explanation: "Correct: (b). The riser (isometric) diagram shows vertical connections the plan view cannot. (a) Cost comes from the takeoff and estimate, not the riser. (c) Model numbers come from schedules and submittals. (d) Property lines are on the site plan."
    },
    {
      q: "The first thing to read on any plumbing plan is the:",
      choices: ["Fixture schedule", "Legend, which defines the drawing's symbols", "Cleanout schedule", "Title block date"],
      answer: 1,
      explanation: "Correct: (b). Symbols vary between designers, so the legend defines them for that job. (a) The fixture schedule is useful, but symbols come first. (c) Cleanouts are checked during tracing, not first. (d) The date matters, but it does not explain the drawing."
    },
    {
      q: "A bathroom group branch (5 DFU) serving a water closet must be at least:",
      choices: ["1-1/2 inches", "2 inches", "3 inches", "4 inches"],
      answer: 2,
      explanation: "Correct: (c). A 2-inch branch would carry 5 DFU on capacity (6 max), but any segment carrying a water closet must be at least 3 inches. (a) and (b) fail the minimum-size rule. (d) exceeds the minimum."
    },
    {
      q: "A 1-1/2-inch trap arm running 8 feet from its vent:",
      choices: ["Passes Table 909.1", "Fails Table 909.1, which allows 6 feet maximum for that size", "Passes if the slope is 1/8 inch per foot", "Fails only if the fixture is a water closet"],
      answer: 1,
      explanation: "Correct: (b). Table 909.1 allows 6 feet for a 1-1/2-inch trap arm. (a) reverses the limit. (c) The slope for a 1-1/2-inch trap arm is 1/4 inch per foot, and slope does not extend the length limit. (d) The limit applies to all fixtures except self-siphoning ones."
    },
    {
      q: "A 4-inch drain with a 1-1/4-inch vent fails because:",
      choices: ["The vent is smaller than the trap", "The one-half rule (IPC 906.2) requires at least a 2-inch vent", "Vents must always equal the drain size", "1-1/4-inch vents are prohibited entirely"],
      answer: 1,
      explanation: "Correct: (b). One-half of 4 inches is 2 inches. (a) The rule sizes the vent from the drain, not the trap. (c) Vents need only be one-half the drain, not equal to it. (d) 1-1/4-inch vents are the code minimum and are fine on small drains."
    },
    {
      q: "A 150-foot horizontal drain with a single cleanout at the stack base:",
      choices: ["Meets IPC 708", "Fails IPC 708, which requires cleanouts at intervals of not more than 100 feet", "Meets IPC 708 if the pipe is 4 inches", "Fails only if there is a direction change"],
      answer: 1,
      explanation: "Correct: (b). Cleanouts must be spaced not more than 100 feet apart on horizontal drains. (a) ignores the spacing rule. (c) Pipe size does not change the spacing rule. (d) Direction changes add cleanout requirements; they do not create the spacing rule."
    },
    {
      q: "A sanitary tee laid on its back joining two horizontal drains is wrong because:",
      choices: ["It is the wrong material", "Flow hits a flat wall, solids stall, and a snake cannot make the turn", "It costs more than a wye", "It cannot be solvent-welded"],
      answer: 1,
      explanation: "Correct: (b). The tee's geometry blocks horizontal flow. (a) Material is irrelevant. (c) Cost is not the code reason. (d) It can be glued — the problem is hydraulic, not chemical."
    },
    {
      q: "The six-step DWV job sequence in order is:",
      choices: ["Install, test, layout, size, seal, air", "Layout, seal, air, size, install, prove", "Size, layout, install, seal, air, prove", "Prove, install, size, air, seal, layout"],
      answer: 1,
      explanation: "Correct: (b). Layout → seal → air → size → install → prove (test and inspect). (a), (c), and (d) all put steps out of order — notably testing before layout or sizing after installation."
    }
  ],
  studyGuide: `
<h3>Module 12 — Course Review: Tracing a DWV System: Quick Reference</h3>
<p><strong>Core idea:</strong> Plan = where. Riser = how it connects. Trace from the farthest fixture to the sewer, asking the code question at every segment.</p>
<p><strong>Five-question check:</strong> Load (Table 709.1) → Size (710.1(1)/(2)) → Slope (704.1) → Vent (909.1, 906.2, 916.1) → Cleanout (708).</p>
<p><strong>Five common plan errors:</strong> Unvented fixture · Over-long trap arm · Wrong fitting · Missing cleanout · Undersized vent.</p>
<p><strong>Job sequence:</strong> Layout → Seal → Air → Size → Install → Prove.</p>
<div class="formula">Key numbers: WC private 3 DFU · Lav 1 · Tub/shower 2 · Group 5 · Branch 2 in = 6, 3 in = 20 DFU · Building drain 3 in = 42 @ 1/4 in/ft · Trap seal 2–4 in · Trap arms 1-1/2 in = 6 ft, 2 in = 8 ft · Vent ≥ 1/2 drain, min 1-1/4 in · Tests: 10 ft / 15 min, 5 psi / 15 min, 1 in WC / 15 min</div>
<p><strong>Self-check:</strong> Run the five-question check on a two-bath house (2 groups + kitchen + laundry = 19 DFU on the building drain → 3 in at 1/4 in/ft) without opening the book.</p>
`
};
