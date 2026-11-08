// Plumbing 121 - Module 2: Drainage Fixture Units (DFU) & Fixture Loads
module.exports = {
  number: 2,
  slug: "drainage-fixture-units",
  title: "Drainage Fixture Units (DFU) & Fixture Loads",
  estTime: "3–4 hours",
  objectives: [
    "Explain what a drainage fixture unit (DFU) measures and why the code sizes drains by load instead of by flow rate alone.",
    "Assign the correct IPC Table 709.1 DFU value to common residential fixtures, private and public.",
    "Total the DFU load on a branch, a stack, and a building drain from a fixture list.",
    "Use the bathroom-group DFU value correctly when fixtures share a branch on the same floor.",
    "Explain why DFU values and water supply fixture units (WSFU) are different systems that must never be mixed."
  ],
  sections: [
    {
      heading: "Why Fixtures Get a Number Instead of a Flow Rate",
      html: `
<p>A drain pipe is sized for the worst moment, not the average one: the moment several fixtures discharge at once. But fixtures do not all discharge the same way. A toilet dumps a large volume in seconds. A lavatory trickles for a minute. A washing machine discharges in surges. Sizing by adding up gallons per minute would either oversize the pipe enormously or miss the peak entirely.</p>
<p>The code solves this with a <strong>drainage fixture unit (DFU)</strong>: a load number assigned to each fixture that bundles together how much it discharges, how fast, and how often it is used. A fixture with a bigger, faster, more frequent discharge gets more DFU. You add the DFU values of everything connected to a pipe segment, then look up the pipe size that can carry that total. The number is not a flow rate — one DFU is roughly equivalent to about 7.5 gallons per minute of discharge in the original Hunter research, but in practice you treat DFU as a load index and never convert it to gpm for sizing.</p>
<p>DFU values come from <strong>IPC Table 709.1</strong> (fixtures and groups) and <strong>Table 709.2</strong> (fixture drains or traps by size). The tables split many fixtures into <strong>private</strong> use — serving one family or one hotel room — and <strong>public</strong> use — serving the general population. Public fixtures get higher values because they are used more often and more heavily. Occupancy is about who uses the fixture, not who owns the building.</p>
<div class="callout"><strong>Key idea:</strong> A DFU is a probability-weighted load, not a flow rate. You add DFU values, then read pipe size from the capacity table. You never add gpm figures and you never use water supply fixture units (WSFU) on the drain side.</div>`
    },
    {
      heading: "The Values You Will Use Every Day (IPC Table 709.1)",
      html: `
<p>Learn this short table cold — it covers nearly every residential job:</p>
<ul>
<li><strong>Water closet, 1.6 gpf or less:</strong> private 3 DFU, public 4 DFU. (A water closet over 1.6 gpf is 4 private / 6 public.)</li>
<li><strong>Lavatory:</strong> 1 DFU (private or public).</li>
<li><strong>Bathtub or combination bath/shower:</strong> 2 DFU.</li>
<li><strong>Shower, single-head:</strong> 2 DFU.</li>
<li><strong>Kitchen sink, domestic:</strong> 2 DFU (with or without disposer or dishwasher).</li>
<li><strong>Dishwasher, domestic, with independent drain:</strong> 2 DFU.</li>
<li><strong>Clothes washer, domestic:</strong> 3 DFU.</li>
<li><strong>Laundry tray (1 or 2 compartments):</strong> 2 DFU.</li>
<li><strong>Drinking fountain:</strong> 0.5 DFU.</li>
<li><strong>Bathroom group</strong> (water closet, lavatory, and bathtub or shower on the same floor level): <strong>5 DFU private</strong> (1.6 gpf water closet) or <strong>6 DFU public</strong>.</li>
</ul>
<p>Two details matter. First, the <strong>trap size</strong> column in Table 709.1 is the <em>minimum</em> trap and trap-arm size for the fixture: a lavatory takes a 1-1/4-inch trap, a bathtub or shower takes 1-1/2 inches (a shower trap itself must be 2 inches — see Module 3), a kitchen sink takes 1-1/2 inches, and a water closet takes 3 inches. Second, <strong>Table 709.2</strong> assigns DFU by trap or drain size when a fixture is not listed: a 1-1/4-inch trap is 1 DFU, 1-1/2-inch is 2, 2-inch is 3, 3-inch is 5, and 4-inch is 6.</p>
<p><strong>Worked example — one private bathroom.</strong> Fixture by fixture: water closet 3 + lavatory 1 + bathtub/shower 2 = <strong>6 DFU</strong>. But the bathroom-group value for the same three fixtures on one branch is <strong>5 DFU</strong>. Why the difference? The group value recognizes that the three fixtures in one bathroom are less likely to discharge at the exact same moment than three fixtures scattered through a building. When the whole group shares one branch, use the group value of 5. When you are adding loads segment by segment and a segment carries only part of the group, use the individual values.</p>
<div class="callout"><strong>Key idea:</strong> Count a tub-shower combination once — it is one fixture because only one outlet runs at a time. Count every lavatory bowl separately. And never count a fixture twice because it has two drains.</div>`
    },
    {
      heading: "Adding Loads Segment by Segment",
      html: `
<p>A drainage system is a tree, and you total DFU the way water flows: from the leaves toward the trunk. Each pipe segment carries only the fixtures downstream of it — that is, the fixtures that drain <em>through</em> that segment. A branch serving one bathroom carries that bathroom's load. The building drain carries everything in the building. You never size a branch on the building total, and you never size the building drain on one bathroom.</p>
<p><strong>Worked example — a two-bath house plus kitchen and laundry.</strong> Bath 1 (group): 5 DFU. Bath 2 (group): 5 DFU. Kitchen sink 2 + dishwasher 2 = 4 DFU. Clothes washer 3 + laundry tray 2 = 5 DFU. Building drain total: 5 + 5 + 4 + 5 = <strong>19 DFU</strong>. Each bathroom branch carries 5 DFU; the kitchen branch carries 4; the laundry branch carries 5; only the building drain carries all 19. In Module 6 you will turn these totals into pipe sizes.</p>
<p>Future fixtures count too. IPC Section 710.2 says that where provision is made for the future installation of fixtures — a roughed-in drain capped for a future bathroom, for example — those fixtures are counted in determining pipe sizes. A capped stub is not free capacity; it is a load waiting to happen, and the pipe must be sized for it now.</p>
<p>One more rule that shapes every layout: <strong>any segment carrying a water closet must be at least 3 inches</strong>, whatever the DFU total says. A branch carrying a single private water closet (3 DFU) is still 3-inch pipe, because a 2-inch pipe cannot pass solids reliably. The DFU total sizes the pipe upward; the water-closet rule sets the floor.</p>
<div class="callout"><strong>Key idea:</strong> Total DFU at every node where branches join, working from the fixtures toward the sewer. The building drain total is the sum of everything; a branch total is only what drains through that branch.</div>`
    },
    {
      heading: "Private vs. Public — and Why It Changes the Answer",
      html: `
<p>The private/public split is the most common source of sizing errors, because the same fixture gets a different number depending on who uses it. A private water closet is 3 DFU; the same water closet in a public restroom is 4. A private lavatory is 1 DFU; a public lavatory is also 1 in Table 709.1 — but a public bathroom group is 6 DFU against a private group's 5, because the water closet inside it carries the heavier public value.</p>
<p>On the water supply side the split is even larger — a public lavatory carries nearly three times the water supply fixture units of a private one — which is why Module 2 of Plumbing 122 revisits occupancy. For drainage, the habit to build now is simple: <strong>ask who uses the fixture before you pick the number</strong>. A restroom in a small office is public. A bathroom in a single-family home is private. A hotel room bathroom is private; the hotel lobby restroom is public.</p>
<p>When a fixture serves both — a powder room in a house that also serves guests — the code still calls it private, because it serves one family. The line is about the population of users, not about occasional visitors. If you are unsure on a commercial job, use the public value: it is the conservative choice, and an inspector will not fault you for a larger pipe.</p>
<div class="callout"><strong>Key idea:</strong> Occupancy is about who uses the fixture. Private = one family or one hotel room. Public = the general population. When in doubt on a commercial job, size it public.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>DFU is a load index from IPC Table 709.1 (fixtures) and Table 709.2 (trap/drain sizes). Add DFU, then look up pipe size.</li>
<li>Core private values: water closet 3, lavatory 1, tub/shower 2, kitchen sink 2, dishwasher 2, clothes washer 3, laundry tray 2, bathroom group 5.</li>
<li>Total segment by segment, from fixtures toward the sewer; future fixtures count (IPC 710.2).</li>
<li>Any segment carrying a water closet is at least 3 inches, whatever the DFU total.</li>
<li>DFU and WSFU are different systems — never mix them.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Adding a bathroom group as 3 + 1 + 2 = 6 when the whole group shares one branch. The group value is 5 DFU private. Use individual values only when a segment carries part of the group.</div>
<div class="callout"><strong>Common mistake:</strong> Sizing a branch on the building total, or sizing the building drain on one bathroom. Each segment carries only the fixtures that drain through it. Total at every joint, working toward the sewer.</div>
<div class="callout"><strong>Common mistake:</strong> Using water supply fixture units on a drain, or DFU on a water line. A private lavatory is 1 DFU but 0.7 WSFU — the numbers look similar and mean completely different things.</div>
<p><strong>Ready-to-Work link:</strong> Sizing by fixture units is the single most-tested drainage skill on the Michigan journeyman exam. If you can total a fixture list without the table in front of you, Module 6's pipe-size lookups will go quickly.</p>`
    }
  ],
  keyTerms: [
    { term: "Drainage fixture unit (DFU)", def: "A load number assigned to a fixture by IPC Table 709.1, reflecting its discharge volume, rate, and frequency of use; the basis for sizing drainage piping." },
    { term: "IPC Table 709.1", def: "The code table assigning DFU values and minimum trap sizes to fixtures and fixture groups." },
    { term: "IPC Table 709.2", def: "The code table assigning DFU values by fixture drain or trap size for fixtures not listed in Table 709.1." },
    { term: "Private use", def: "Fixtures serving one family or one hotel room; assigned lower DFU values." },
    { term: "Public use", def: "Fixtures serving the general population; assigned higher DFU values." },
    { term: "Bathroom group", def: "A water closet, lavatory, and bathtub or shower on the same floor level; 5 DFU private (1.6 gpf water closet) or 6 DFU public." },
    { term: "Fixture load", def: "The total DFU connected to a pipe segment." },
    { term: "Water supply fixture unit (WSFU)", def: "The separate load index used for sizing water supply piping (IPC Appendix E); never interchangeable with DFU." },
    { term: "Hunter's method", def: "Roy Hunter's probability-based method of sizing plumbing by fixture units, based on the likelihood of simultaneous use." },
    { term: "Trap size", def: "The minimum trap and trap-arm diameter for a fixture, listed in IPC Table 709.1." },
    { term: "Future fixtures", def: "Fixtures provided for by roughed-in piping; IPC 710.2 requires them to be counted in pipe sizing." },
    { term: "Branch interval", def: "A vertical distance of 8 feet or more between connections of horizontal branches to a drainage stack." },
    { term: "Load total", def: "The sum of DFU values for all fixtures draining through a given pipe segment." }
  ],
  video: {
    title: "How to Size a Home Drainage System",
    embedUrl: "https://www.youtube.com/embed/1nLTn260OD4",
    note: "A step-by-step DFU count for a whole house: assigning fixture values, totaling each pipe section, and reading pipe size from the table. Note: this video cites UPC Table 702.1 — follow its method, but use the IPC Table 709.1 values in this module (a private water closet is 3 DFU in the IPC). Michigan uses the IPC, not the UPC.",
    more: [
      { title: "Part 1: Plumbing code - waste and venting pipe size", url: "https://www.youtube.com/watch?v=zioBbzGqTk8" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A private bathroom has a 1.6 gpf water closet, a lavatory, and a tub-shower combination, all draining to one branch. (a) What is the DFU total counting fixtures individually? (b) What is the correct DFU total for the branch, and why do the two numbers differ?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Individual values from IPC Table 709.1 — water closet 3 + lavatory 1 + tub-shower 2 = <strong>6 DFU</strong>. Step 2: The bathroom-group value for the same three fixtures on one branch is <strong>5 DFU</strong>. Step 3: The group value is lower because the three fixtures in one bathroom are less likely to discharge at the exact same moment than three fixtures scattered through a building, so the code discounts the combined peak.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A small house has: Bath 1 (private group), Bath 2 (private group), a kitchen sink, a dishwasher, and a clothes washer. What is the total DFU load on the building drain?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Bath 1 group = 5 DFU; Bath 2 group = 5 DFU. Step 2: Kitchen sink = 2 DFU; dishwasher = 2 DFU. Step 3: Clothes washer = 3 DFU. Step 4: Total = 5 + 5 + 2 + 2 + 3 = <strong>17 DFU</strong> on the building drain.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A public restroom has 2 water closets (1.6 gpf), 2 lavatories, and 1 urinal. The urinal is not in your memorized list, so use Table 709.2 thinking: the urinal has a 2-inch trap. (a) What DFU does Table 709.2 assign to a 2-inch trap? (b) What is the restroom's total DFU?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Table 709.2 assigns <strong>3 DFU</strong> to a 2-inch fixture drain or trap. Step 2: Water closets public: 2 × 4 = 8 DFU. Step 3: Lavatories: 2 × 1 = 2 DFU. Step 4: Urinal: 3 DFU. Step 5: Total = 8 + 2 + 3 = <strong>13 DFU</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A branch serves only a lavatory and a bathtub. What is its DFU load, and what is the minimum trap size for each fixture?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Lavatory = 1 DFU; bathtub = 2 DFU; branch total = <strong>3 DFU</strong>. Step 2: Minimum trap sizes from Table 709.1 — lavatory <strong>1-1/4 inches</strong>, bathtub <strong>1-1/2 inches</strong>. Step 3: Note that the branch itself is sized in Module 6; the trap sizes are minimums, not the branch size.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A house rough-in includes a capped drain for a future bathroom (private group) in the basement. The rest of the house totals 14 DFU. What DFU total must the building drain be sized for, and which code section requires counting the future bathroom?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The future bathroom group counts as <strong>5 DFU</strong>. Step 2: Total = 14 + 5 = <strong>19 DFU</strong>. Step 3: <strong>IPC Section 710.2</strong> requires fixtures provided for by roughed-in piping to be counted in determining pipe sizes — a capped stub is a load waiting to happen.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain in two sentences why a plumber must never use a fixture's WSFU value when sizing its drain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: DFU and WSFU measure different things — DFU measures discharge load on a gravity drain, while WSFU measures demand on a pressurized supply. Step 2: The values differ for the same fixture (a private lavatory is 1 DFU but 0.7 WSFU), so swapping them sizes the pipe for the wrong system and the wrong load.</p>"
    }
  ],
  quiz: [
    {
      q: "A drainage fixture unit (DFU) is best described as:",
      choices: ["A flow rate in gallons per minute", "A load number reflecting a fixture's discharge volume, rate, and frequency of use", "The diameter of a fixture's trap in inches", "The number of fixtures on one branch"],
      answer: 1,
      explanation: "Correct: (b). DFU bundles discharge volume, rate, and frequency into one load index. (a) DFU is not a flow rate and is never converted to gpm for sizing. (c) Trap size is a separate column in the table. (d) DFU is a load value, not a count of fixtures."
    },
    {
      q: "Under IPC Table 709.1, a private 1.6 gpf water closet is:",
      choices: ["1 DFU", "2 DFU", "3 DFU", "4 DFU"],
      answer: 2,
      explanation: "Correct: (c). A private 1.6 gpf water closet is 3 DFU. (a) is a lavatory. (b) is a bathtub, shower, or kitchen sink. (d) is the public water closet value."
    },
    {
      q: "Under IPC Table 709.1, a public 1.6 gpf water closet is:",
      choices: ["2 DFU", "3 DFU", "4 DFU", "6 DFU"],
      answer: 2,
      explanation: "Correct: (c). A public 1.6 gpf water closet is 4 DFU. (a) is a bathtub or kitchen sink. (b) is the private water closet value. (d) is the public bathroom-group value."
    },
    {
      q: "A private bathroom group (water closet, lavatory, bathtub/shower on one branch) is:",
      choices: ["3 DFU", "5 DFU", "6 DFU", "8 DFU"],
      answer: 1,
      explanation: "Correct: (b). The private bathroom-group value is 5 DFU. (a) is a single private water closet. (c) is the public bathroom-group value, and also the sum of the three individual private values. (d) is not a group value."
    },
    {
      q: "A domestic clothes washer is assigned how many DFU under IPC Table 709.1?",
      choices: ["1 DFU", "2 DFU", "3 DFU", "5 DFU"],
      answer: 2,
      explanation: "Correct: (c). A domestic clothes washer is 3 DFU. (a) is a lavatory. (b) is a kitchen sink, dishwasher, or bathtub. (d) is the DFU for a 3-inch trap under Table 709.2."
    },
    {
      q: "Under IPC Table 709.2, a fixture with a 2-inch trap is assigned:",
      choices: ["1 DFU", "2 DFU", "3 DFU", "5 DFU"],
      answer: 2,
      explanation: "Correct: (c). Table 709.2 assigns 3 DFU to a 2-inch fixture drain or trap. (a) is a 1-1/4-inch trap. (b) is a 1-1/2-inch trap. (d) is a 3-inch trap."
    },
    {
      q: "A branch carries a water closet and a lavatory. Regardless of the DFU total, the smallest pipe size for that branch is:",
      choices: ["1-1/2 inches", "2 inches", "3 inches", "4 inches"],
      answer: 2,
      explanation: "Correct: (c). Any segment carrying a water closet must be at least 3 inches. (a) and (b) are too small to pass solids reliably. (d) is larger than the code minimum for this load."
    },
    {
      q: "A roughed-in capped drain for a future bathroom must be counted in pipe sizing because:",
      choices: ["IPC 710.2 requires future fixtures provided for by roughed-in piping to be counted", "Capped pipes always leak", "The inspector counts every fitting in the building", "Future fixtures use twice the DFU of installed ones"],
      answer: 0,
      explanation: "Correct: (a). IPC 710.2 counts fixtures provided for in the sizing. (b) A properly capped pipe does not leak. (c) The inspector counts loads, not fittings. (d) Future fixtures carry their normal DFU values."
    }
  ],
  studyGuide: `
<h3>Module 2 — Drainage Fixture Units: Quick Reference</h3>
<p><strong>Core idea:</strong> DFU is a load index (IPC Table 709.1/709.2). Add DFU per segment, then look up pipe size. Never convert DFU to gpm; never mix DFU with WSFU.</p>
<p><strong>Private values to memorize:</strong> Water closet (1.6 gpf) 3 · Lavatory 1 · Bathtub/shower 2 · Kitchen sink 2 · Dishwasher 2 · Clothes washer 3 · Laundry tray 2 · Drinking fountain 0.5 · Bathroom group 5.</p>
<p><strong>Public:</strong> Water closet (1.6 gpf) 4 · Bathroom group 6.</p>
<p><strong>Table 709.2 (by trap size):</strong> 1-1/4 in = 1 · 1-1/2 in = 2 · 2 in = 3 · 3 in = 5 · 4 in = 6.</p>
<div class="formula">Total at every joint, working from fixtures toward the sewer &nbsp;|&nbsp; Any segment carrying a water closet is at least 3 in</div>
<p><strong>Watch out:</strong> Count a tub-shower once; count every lavatory bowl; use the group value (5) when the whole bathroom group shares one branch; count future fixtures (IPC 710.2).</p>
<p><strong>Self-check:</strong> Total a house with 2 private bathroom groups, a kitchen sink, a dishwasher, and a clothes washer (answer: 5 + 5 + 2 + 2 + 3 = 17 DFU on the building drain).</p>
`
};
