// Plumbing 121 - Module 6: Sizing Drainage Piping
module.exports = {
  number: 6,
  slug: "sizing-drainage-piping",
  title: "Sizing Drainage Piping",
  estTime: "3–4 hours",
  objectives: [
    "Explain the three-step sizing method: count DFU, pick the right table, read the pipe size.",
    "Use IPC Table 710.1(1) to size building drains and sewers by DFU load and slope.",
    "Use IPC Table 710.1(2) to size horizontal fixture branches and stacks by DFU load.",
    "Explain why the same pipe size carries a different DFU load as a branch, a stack, and a building drain.",
    "Apply the minimum-size rules: 3 inches for any segment serving a water closet, and slope effects on capacity."
  ],
  sections: [
    {
      heading: "The Three-Step Method",
      html: `
<p>Sizing drainage piping is a lookup, not a calculation. The method has three steps, and you already learned the first one in Module 2:</p>
<p><strong>Step 1 — Count the load.</strong> Add the DFU values of every fixture draining through the pipe segment you are sizing (IPC Table 709.1). Total segment by segment, from the fixtures toward the sewer.</p>
<p><strong>Step 2 — Pick the right table.</strong> The code has two capacity tables, and using the wrong one is the most common sizing error. <strong>Table 710.1(1)</strong> sizes <strong>building drains and sewers</strong> (and horizontal branches of the building drain). <strong>Table 710.1(2)</strong> sizes <strong>horizontal fixture branches and stacks</strong>. A 3-inch pipe is not "a 3-inch pipe" until you know which role it is playing.</p>
<p><strong>Step 3 — Read the smallest pipe that carries the load.</strong> Find your DFU total in the table and read across to the smallest pipe size whose capacity covers it. Never size up "just to be safe" without a reason: oversized drains flow too slowly, lose self-scouring velocity, and clog — the same failure as an undersized pipe, reached from the other direction.</p>
<div class="callout"><strong>Key idea:</strong> Count DFU → pick the table for the pipe's role → read the smallest size that covers the load. The table is the authority; your job is to feed it the right load and read the right column.</div>`
    },
    {
      heading: "Table 710.1(2): Branches and Stacks",
      html: `
<p>Table 710.1(2) covers the pipes inside the building: horizontal fixture branches and vertical stacks. Its key values for residential work:</p>
<ul>
<li><strong>1-1/4-inch:</strong> 1 DFU on a horizontal branch.</li>
<li><strong>1-1/2-inch:</strong> 3 DFU on a horizontal branch.</li>
<li><strong>2-inch:</strong> 6 DFU on a horizontal branch.</li>
<li><strong>2-1/2-inch:</strong> 12 DFU on a horizontal branch.</li>
<li><strong>3-inch:</strong> 20 DFU on a horizontal branch; 48 DFU on a stack serving three branch intervals or fewer.</li>
<li><strong>4-inch:</strong> 160 DFU on a horizontal branch.</li>
</ul>
<p>Read the jump between sizes: a 2-inch branch carries 6 DFU, but a 3-inch branch carries 20 — more than three times as much for a one-inch increase in diameter. That is why the step from 2-inch to 3-inch pipe is the most consequential decision in residential drainage, and why a branch carrying a water closet is 3-inch by rule anyway (Module 2).</p>
<p><strong>Worked example — sizing a branch.</strong> A horizontal branch serves two private bathroom groups: 5 + 5 = <strong>10 DFU</strong>. A 2-inch branch carries only 6 DFU, so it fails. A 3-inch branch carries 20 DFU, so the branch is <strong>3 inches</strong>. The same 10 DFU on a stack would also be 3-inch pipe, since a 3-inch stack serving three branch intervals or fewer carries 48 DFU.</p>
<div class="callout"><strong>Key idea:</strong> Branch capacities to memorize: 1-1/2 in = 3 DFU, 2 in = 6 DFU, 3 in = 20 DFU, 4 in = 160 DFU. If your load is 7 DFU, you are already in 3-inch pipe.</div>`
    },
    {
      heading: "Table 710.1(1): Building Drains and Sewers — Slope Changes the Answer",
      html: `
<p>Table 710.1(1) sizes building drains and sewers, and it has one feature Table 710.1(2) does not: <strong>slope changes the capacity</strong>. A steeper pipe carries more DFU because the water moves faster. The key residential values:</p>
<ul>
<li><strong>2-inch:</strong> 21 DFU at 1/4 inch per foot.</li>
<li><strong>3-inch:</strong> 36 DFU at 1/8 inch per foot; <strong>42 DFU at 1/4 inch per foot</strong>; 50 DFU at 1/2 inch per foot.</li>
<li><strong>4-inch:</strong> 180 DFU at 1/8 inch per foot; <strong>216 DFU at 1/4 inch per foot</strong>; 250 DFU at 1/2 inch per foot.</li>
</ul>
<p>The same 3-inch pipe carries 36 DFU at the shallow slope and 42 at the standard slope — a 6-DFU difference from slope alone. This is why the inspector checks slope before signing off: slope is not just a drainage detail, it is part of the sizing. And the table's footnote sets the floor: <strong>the minimum size of any building drain serving a water closet is 3 inches</strong>.</p>
<p><strong>Worked example — sizing a building drain.</strong> The two-bath house from Module 2 totals <strong>19 DFU</strong> on the building drain (two bathroom groups at 5 each, kitchen 4, laundry 5). At 1/4 inch per foot, a 2-inch building drain carries 21 DFU — enough on capacity — but the building drain serves water closets, so the minimum is 3 inches. The building drain is <strong>3 inches at 1/4 inch per foot</strong>, carrying 19 of its 42 DFU. If the same house were built with a 1/8-inch slope, the 3-inch drain would still carry it (36 DFU capacity), but with less margin.</p>
<div class="callout"><strong>Key idea:</strong> On Table 710.1(1), always name the slope with the size: "3-inch at 1/4 inch per foot carries 42 DFU" is a complete answer; "3-inch carries 42" is not, because at 1/8 inch per foot it carries 36.</div>`
    },
    {
      heading: "Why One Pipe Has Three Different Capacities",
      html: `
<p>A 3-inch pipe carries 20 DFU as a horizontal branch, 48 DFU as a stack serving three branch intervals or fewer, and 42 DFU as a building drain at 1/4 inch per foot. Three numbers for one pipe — and all three are correct, because the pipe behaves differently in each role.</p>
<p>As a <strong>horizontal branch</strong>, the pipe flows partly full by gravity, and its capacity is limited by the need to keep air space above the flow so the branch can vent itself. As a <strong>stack</strong>, the pipe flows vertically, with water clinging to the walls and air moving in the center — a more efficient pattern that carries more load. As a <strong>building drain</strong>, the pipe is horizontal again, but it is the lowest pipe in the system, carrying the combined flow of the whole building at a slope you choose, so its capacity depends on that slope.</p>
<p>The practical lesson is to <strong>name the role before you open the table</strong>. "What size pipe for 20 DFU?" has no answer until you know whether the 20 DFU is on a branch (3-inch, exactly at capacity), a stack (3-inch, comfortable), or a building drain (2-inch at 1/4 inch per foot carries 21 — but 3-inch if a water closet is served). Students who get sizing questions wrong almost always picked the right number from the wrong table.</p>
<div class="callout"><strong>Key idea:</strong> Branch, stack, building drain — three roles, three capacities, one pipe. Say the role first, then open the table. The exam will test exactly this confusion.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Three steps: count DFU (Table 709.1) → pick the table for the pipe's role → read the smallest size that covers the load.</li>
<li>Table 710.1(2) branches: 1-1/2 in = 3, 2 in = 6, 2-1/2 in = 12, 3 in = 20, 4 in = 160 DFU; 3-in stack (≤3 branch intervals) = 48.</li>
<li>Table 710.1(1) building drains/sewers: 2 in = 21 at 1/4 in/ft; 3 in = 36 at 1/8, 42 at 1/4, 50 at 1/2 in/ft; 4 in = 180 at 1/8, 216 at 1/4, 250 at 1/2 in/ft.</li>
<li>Minimum building drain serving a water closet: 3 inches. Any segment carrying a water closet: at least 3 inches.</li>
<li>Slope is part of the sizing on Table 710.1(1) — always state size and slope together.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Sizing a building drain from Table 710.1(2). A 19-DFU building drain is 3-inch pipe by the water-closet rule, but a student using the branch table would read 3-inch for 20 DFU and think the tables agree — then fail the next question, where the tables diverge.</div>
<div class="callout"><strong>Common mistake:</strong> Oversizing "to be safe." An oversized drain flows slowly, drops its solids, and clogs. The code sizes are minimums that already include safety margin; going up a size without a reason creates the failure you were trying to avoid.</div>
<div class="callout"><strong>Common mistake:</strong> Forgetting slope on Table 710.1(1). "3-inch carries 42 DFU" is only true at 1/4 inch per foot. At 1/8 inch per foot it carries 36 — and a 40-DFU load at that slope needs 4-inch pipe.</div>
<p><strong>Ready-to-Work link:</strong> The Michigan journeyman exam tests Table 710.1 lookups constantly, usually with a fixture list and a slope. If you can run the three steps without hesitation — count, pick the table, read the size — those questions are free points.</p>`
    }
  ],
  keyTerms: [
    { term: "IPC Table 710.1(1)", def: "The code table sizing building drains and sewers by DFU load and slope." },
    { term: "IPC Table 710.1(2)", def: "The code table sizing horizontal fixture branches and stacks by DFU load." },
    { term: "Horizontal fixture branch", def: "A sloped horizontal drain pipe collecting fixture drains; sized from Table 710.1(2)." },
    { term: "Building drain", def: "The lowest horizontal drainage pipe inside a building; sized from Table 710.1(1)." },
    { term: "Building sewer", def: "The pipe from the building drain to the public sewer or septic system; sized from Table 710.1(1)." },
    { term: "Branch interval", def: "A vertical distance of 8 feet or more between horizontal branch connections to a stack; stack capacity depends on the number of branch intervals served." },
    { term: "Self-scouring velocity", def: "A flow speed of about 2 feet per second that carries solids along with the water." },
    { term: "Minimum size", def: "The smallest pipe the code permits for a role — for example, 3 inches for any building drain serving a water closet." },
    { term: "Developed length", def: "The actual length of pipe including equivalent length through fittings." },
    { term: "Fixture load", def: "The total DFU connected to a pipe segment." },
    { term: "Slope", def: "The fall of horizontal drainage piping in inches per foot; on Table 710.1(1) it changes the pipe's DFU capacity." },
    { term: "Stack capacity", def: "The maximum DFU a vertical stack can carry, which depends on the stack's diameter and the number of branch intervals it serves." }
  ],
  video: {
    title: "Part 1: Plumbing code - waste and venting pipe size",
    embedUrl: "https://www.youtube.com/embed/zioBbzGqTk8",
    note: "A code-book walk-through of waste and vent pipe sizing: reading fixture loads, then reading pipe size from the table. Work along with the video using the IPC Tables 710.1(1) and 710.1(2) values in this module, and note where its table differs from the IPC — Michigan uses the IPC.",
    more: [
      { title: "How to Size a Home Drainage System", url: "https://www.youtube.com/watch?v=1nLTn260OD4" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A horizontal branch serves one private bathroom group (5 DFU) and a laundry tray (2 DFU). (a) What is the branch load? (b) What is the smallest branch size from Table 710.1(2)?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Branch load = 5 + 2 = <strong>7 DFU</strong>. Step 2: Table 710.1(2) — a 2-inch branch carries 6 DFU, which is not enough. Step 3: A 3-inch branch carries 20 DFU, so the smallest size is <strong>3 inches</strong>. Step 4: Note the branch serves a water closet, so 3 inches is also the minimum size by rule.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A building drain carries 30 DFU at a slope of 1/8 inch per foot. (a) What is the smallest size from Table 710.1(1)? (b) Would the answer change at 1/4 inch per foot?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: At 1/8 inch per foot, a 3-inch building drain carries 36 DFU, which covers 30 — so the smallest size is <strong>3 inches</strong>. Step 2: At 1/4 inch per foot a 3-inch drain carries 42 DFU, so the answer is still <strong>3 inches</strong>. Step 3: The slope change matters at the boundary: a 40-DFU load at 1/8 inch per foot would need 4-inch pipe (36 is not enough), while at 1/4 inch per foot 3-inch pipe would carry it (42).</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A 3-inch pipe carries 20 DFU as a horizontal branch, 48 DFU as a stack (three branch intervals or fewer), and 42 DFU as a building drain at 1/4 inch per foot. Explain in two sentences why the branch capacity is the lowest of the three.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A horizontal branch flows partly full by gravity and must keep air space above the flow so it can vent itself, which limits its load. Step 2: A vertical stack flows with water on the walls and air in the center — a more efficient pattern — and a building drain carries combined flow at a chosen slope, so both carry more than the branch.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A house totals 14 DFU on its building drain, which serves two water closets and is installed at 1/4 inch per foot. What size is the building drain, and why is 2-inch pipe wrong even though Table 710.1(1) lists 2-inch pipe at 21 DFU?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The building drain is <strong>3 inches</strong>. Step 2: Capacity alone would allow 2-inch pipe (21 DFU covers 14). Step 3: But the footnote to Table 710.1(1) sets the minimum size of any building drain serving a water closet at <strong>3 inches</strong>, and a 2-inch pipe cannot pass water-closet solids reliably. The minimum-size rule overrides the capacity reading.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A stack serves 40 DFU and three branch intervals. What is the smallest stack size from Table 710.1(2)? Show the lookup.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Table 710.1(2), stack column for three branch intervals or fewer. Step 2: A 2-inch stack is far too small (its branch capacity is 6 DFU). Step 3: A 3-inch stack serving three branch intervals or fewer carries <strong>48 DFU</strong>, which covers 40 — so the smallest stack size is <strong>3 inches</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A helper sizes a 40-DFU building drain at 1/8 inch per foot as 3-inch pipe, because '3-inch carries 42.' Is that correct? If not, what is the correct size and what did the helper miss?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>No, it is not correct.</strong> Step 2: The helper read the 1/4-inch-per-foot column (42 DFU) instead of the 1/8-inch-per-foot column. Step 3: At 1/8 inch per foot a 3-inch building drain carries only <strong>36 DFU</strong>, which does not cover 40. Step 4: The correct size is <strong>4-inch pipe</strong>, which carries 180 DFU at 1/8 inch per foot. Always read the column for the installed slope.</p>"
    }
  ],
  quiz: [
    {
      q: "The three steps of drainage sizing, in order, are:",
      choices: ["Pick a pipe size, then count fixtures, then check the slope", "Count DFU, pick the table for the pipe's role, read the smallest size that covers the load", "Measure the run length, pick the largest pipe that fits, then count DFU", "Check the slope, then size the vent, then count DFU"],
      answer: 1,
      explanation: "Correct: (b). Count the load, choose the table by role, and read the smallest adequate size. (a) reverses the order — size follows load, not the other way around. (c) starts with length, which is not a sizing input. (d) sizes the vent before the drain, which is backwards."
    },
    {
      q: "Under IPC Table 710.1(2), a 2-inch horizontal fixture branch carries a maximum of:",
      choices: ["3 DFU", "6 DFU", "20 DFU", "21 DFU"],
      answer: 1,
      explanation: "Correct: (b). A 2-inch branch carries 6 DFU. (a) is the 1-1/2-inch branch capacity. (c) is the 3-inch branch capacity. (d) is the 2-inch building drain capacity at 1/4 inch per foot — the wrong table."
    },
    {
      q: "Under IPC Table 710.1(2), a 3-inch horizontal fixture branch carries a maximum of:",
      choices: ["6 DFU", "12 DFU", "20 DFU", "42 DFU"],
      answer: 2,
      explanation: "Correct: (c). A 3-inch branch carries 20 DFU. (a) is the 2-inch branch. (b) is the 2-1/2-inch branch. (d) is the 3-inch building drain at 1/4 inch per foot — the wrong table."
    },
    {
      q: "Under IPC Table 710.1(1), a 3-inch building drain at 1/4 inch per foot carries a maximum of:",
      choices: ["20 DFU", "36 DFU", "42 DFU", "50 DFU"],
      answer: 2,
      explanation: "Correct: (c). A 3-inch building drain at 1/4 inch per foot carries 42 DFU. (a) is the 3-inch branch capacity. (b) is the 3-inch building drain at 1/8 inch per foot. (d) is the 3-inch building drain at 1/2 inch per foot."
    },
    {
      q: "Under IPC Table 710.1(1), a 4-inch building drain at 1/4 inch per foot carries a maximum of:",
      choices: ["160 DFU", "180 DFU", "216 DFU", "250 DFU"],
      answer: 2,
      explanation: "Correct: (c). A 4-inch building drain at 1/4 inch per foot carries 216 DFU. (a) is the 4-inch branch capacity. (b) is the 4-inch building drain at 1/8 inch per foot. (d) is the 4-inch building drain at 1/2 inch per foot."
    },
    {
      q: "The minimum size of a building drain serving a water closet is:",
      choices: ["2 inches", "3 inches", "4 inches", "6 inches"],
      answer: 1,
      explanation: "Correct: (b). The footnote to Table 710.1(1) sets the minimum at 3 inches. (a) cannot pass water-closet solids reliably. (c) and (d) exceed the minimum."
    },
    {
      q: "A 3-inch stack serving three branch intervals or fewer carries a maximum of:",
      choices: ["20 DFU", "36 DFU", "42 DFU", "48 DFU"],
      answer: 3,
      explanation: "Correct: (d). Table 710.1(2) allows 48 DFU on a 3-inch stack of three branch intervals or fewer. (a) is the 3-inch branch capacity. (b) is the 3-inch building drain at 1/8 inch per foot. (c) is the 3-inch building drain at 1/4 inch per foot."
    },
    {
      q: "Oversizing a drain pipe 'just to be safe' is a bad idea because:",
      choices: ["Larger pipe costs the same as smaller pipe", "An oversized drain flows too slowly, drops its solids, and clogs", "The code forbids any pipe larger than the table size", "Larger pipe cannot be vented"],
      answer: 1,
      explanation: "Correct: (b). Slow flow in an oversized pipe loses self-scouring velocity and strands solids. (a) Larger pipe costs more, not the same. (c) The code sets minimums, not maximums — oversizing is permitted, just unwise without a reason. (d) Larger pipe vents normally."
    }
  ],
  studyGuide: `
<h3>Module 6 — Sizing Drainage Piping: Quick Reference</h3>
<p><strong>Method:</strong> Count DFU (Table 709.1) → pick the table for the pipe's role → read the smallest size that covers the load.</p>
<p><strong>Table 710.1(2) — branches:</strong> 1-1/4 in = 1 · 1-1/2 in = 3 · 2 in = 6 · 2-1/2 in = 12 · 3 in = 20 · 4 in = 160 DFU.</p>
<p><strong>Table 710.1(2) — stacks (≤3 branch intervals):</strong> 3 in = 48 DFU.</p>
<div class="formula">Table 710.1(1) — building drains/sewers: 2 in = 21 @ 1/4 in/ft &nbsp;|&nbsp; 3 in = 36 @ 1/8, 42 @ 1/4, 50 @ 1/2 in/ft &nbsp;|&nbsp; 4 in = 180 @ 1/8, 216 @ 1/4, 250 @ 1/2 in/ft</div>
<p><strong>Minimums:</strong> Any segment carrying a water closet is at least 3 in. Building drain serving a water closet: at least 3 in.</p>
<p><strong>Watch out:</strong> Same pipe, three capacities — branch, stack, building drain. Name the role first. Always state size AND slope on Table 710.1(1). Never oversize without a reason.</p>
<p><strong>Self-check:</strong> Branch load 10 DFU → 3 in (2 in carries only 6). Building drain 30 DFU at 1/8 in/ft → 3 in (36 covers it). Building drain 40 DFU at 1/8 in/ft → 4 in (36 does not cover it).</p>
`
};
