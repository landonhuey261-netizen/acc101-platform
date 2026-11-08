// Plumbing 121 - Module 5: Vent Types: Individual, Common, Wet, Circuit, Island & Relief
module.exports = {
  number: 5,
  slug: "vent-types",
  title: "Vent Types: Individual, Common, Wet, Circuit, Island & Relief",
  estTime: "3–4 hours",
  objectives: [
    "Identify the six venting methods in IPC Chapter 9 and state when each one is used.",
    "Explain how a common vent serves two fixtures and what limits it.",
    "Explain wet venting: one pipe acting as both drain and vent, and the IPC limits on it.",
    "Explain circuit venting for a battery of 2 to 8 fixtures, including the 2-inch minimum vent size.",
    "Explain island (loop) venting for fixtures that cannot be vented vertically, and the job of a relief vent."
  ],
  sections: [
    {
      heading: "One Vent Per Fixture Is the Baseline — Then the Code Lets You Share",
      html: `
<p>The simplest venting method is the <strong>individual vent</strong> (IPC 910): one vent pipe for one fixture trap, rising from the trap arm to the vent system. It is the baseline every other method is measured against, and it is the method to use whenever the layout allows it. If you can run an individual vent for every fixture, you never have to argue about whether a shared method applies.</p>
<p>But buildings are full of fixtures that sit side by side, back to back, or in rows — and running a separate vent for each one wastes pipe, wall space, and roof penetrations. IPC Chapter 9 therefore permits several shared methods. Each one trades a little of the individual vent's simplicity for economy, and each one comes with strict limits that keep the trade safe. The skill is not memorizing the methods; it is knowing <strong>which method fits the layout in front of you and what its limit is</strong>.</p>
<p>The six methods in this module are individual, common, wet, circuit, island (loop), and relief venting. Two more exist in the code — waste-stack venting (IPC 913) and combination waste-and-vent systems (IPC 915) — and this module introduces them briefly at the end, because you will meet them on commercial jobs.</p>
<div class="callout"><strong>Key idea:</strong> Individual venting is the default. Every shared method is an exception with conditions. If the conditions are not met, fall back to individual vents.</div>`
    },
    {
      heading: "Common Vent and Wet Vent: Sharing With One Neighbor",
      html: `
<p>A <strong>common vent</strong> (IPC 911) serves <strong>two fixtures on the same floor level</strong> with one vent. The two fixture drains connect together, and a single vent rises from their interconnection. The classic case is two lavatories back to back in a shared wall, or a lavatory and a bathtub side by side. The limit is strict: two fixtures, same floor, and the vent connection is made where the two drains join. A third fixture needs its own vent or a different method.</p>
<p>A <strong>wet vent</strong> (IPC 912) goes one step further: a single pipe acts as <strong>both a drain and a vent</strong>. The usual layout is a bathroom group — a lavatory drains into a pipe, and that same pipe vents the water closet downstream of it. The lavatory's drain water washes the pipe while air travels above the water in the same pipe, venting the toilet. It works because the pipe is oversized for the water it carries, so air always has room above the flow.</p>
<p>The IPC limits wet venting tightly: it is permitted only for fixtures in <strong>bathroom groups on the same floor level</strong>, and the horizontal wet-vented section must be at least <strong>2 inches</strong> in diameter when serving a bathroom group. The water closet must be the most downstream fixture on the wet vent, so its discharge does not have to pass another fixture's trap. A wet vent serving a kitchen sink or a laundry is not permitted under the IPC — those fixtures need dry vents.</p>
<div class="callout"><strong>Key idea:</strong> Common vent = one vent, two fixtures, same floor. Wet vent = one pipe, two jobs (drain + vent), bathroom groups only, at least 2 inches. The water closet always sits downstream on a wet vent.</div>`
    },
    {
      heading: "Circuit Venting: One Vent for a Whole Battery",
      html: `
<p>When fixtures line up in a row — a battery of lavatories in a school restroom, a line of fixtures in a commercial bathroom — running an individual vent for each one is wasteful. <strong>Circuit venting</strong> (IPC 914) vents a battery of <strong>2 to 8 trapped fixtures</strong> with a single vent. A vertical vent pipe, the <strong>circuit vent</strong>, connects to the horizontal drainage branch between the two most upstream fixture drains, and rises to the vent system. The horizontal branch itself acts as a wet vent for the fixtures in the battery: waste flows along the bottom of the branch while air travels across the top.</p>
<p>The rules are specific. The circuit vent must be at least <strong>2 inches</strong> in diameter. Its connection must be located <strong>between the two most upstream fixture drains</strong> — the two fixtures farthest from the stack — and it must connect to the top of the horizontal branch, vertically. The circuit vent pipe must not receive the discharge of any soil or waste: it is a dry vent, carrying air only. And the battery is capped at eight fixtures; a ninth fixture needs a second circuit or individual vents.</p>
<p>Why does the connection sit between the two most upstream fixtures? Because the most upstream fixture discharges past the vent connection, washing that section of the branch and preventing solids from building up where the air enters. The geometry is the design: put the vent in the wrong place and the battery vents poorly even though the pipe sizes are right.</p>
<div class="callout"><strong>Key idea:</strong> Circuit vent = 2 to 8 fixtures, one vent, at least 2 inches, connected between the two most upstream fixture drains. The branch doubles as the wet vent for the battery. More than eight fixtures means a second circuit.</div>
<p><strong>Worked check:</strong> A commercial restroom has a battery of 6 lavatories on one horizontal branch. Circuit venting is permitted (6 is within 2–8). The circuit vent must be at least 2 inches, connect to the top of the branch between the two most upstream lavatory drains, and carry no waste. If the restroom grew to 10 lavatories, one circuit vent would no longer be enough.</p>`
    },
    {
      heading: "Island Vents and Relief Vents: When the Layout Fights Back",
      html: `
<p>An <strong>island vent</strong> — also called a <strong>loop vent</strong> — solves the kitchen-island problem. A sink in an island or peninsula cabinet has no wall behind it to carry a vent straight up, so a conventional individual vent is impossible. The island vent rises from the trap, loops up inside the cabinet to a point above the fixture's flood-level rim, then drops back down under the floor and runs horizontally to join the vent stack. The loop's high point keeps waste from entering the vent, and the return leg carries air to the stack. It is the only venting method that deliberately goes down before it goes up, and it is permitted only for island and peninsula fixtures.</p>
<p>A <strong>relief vent</strong> is a different idea: it is an extra vent installed to give air another path where pressure problems are expected. The most common case is a <strong>stack offset</strong> (IPC 908): when a vertical stack shifts horizontally, a relief vent is installed to keep air moving past the offset. Relief vents also appear on long circuit-vented branches and on stacks serving many stories, where a single vent path cannot keep pressures balanced. Think of a relief vent as a second airway for a part of the system that works too hard on one.</p>
<p>Two more methods round out the chapter. <strong>Waste-stack venting</strong> (IPC 913) lets a waste stack itself vent the fixtures that discharge into it, under strict limits on stack size and fixture load. A <strong>combination waste-and-vent system</strong> (IPC 915) uses an oversized drain pipe as both drain and vent for fixtures such as floor drains and sinks where a conventional vent is impractical — the pipe is sized large enough that air always has room above the flow. Both are commercial-job methods; know they exist, and read the section before you use either one.</p>
<div class="callout"><strong>Key idea:</strong> Island vent = the loop that lets an island sink breathe without a wall. Relief vent = a second airway where pressure builds up, especially at stack offsets. Both exist because real buildings do not always cooperate with the textbook layout.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Individual vent (IPC 910): one vent per fixture — the default.</li>
<li>Common vent (IPC 911): one vent for two fixtures on the same floor level.</li>
<li>Wet vent (IPC 912): one pipe as drain and vent, bathroom groups only, same floor, at least 2 inches; water closet downstream.</li>
<li>Circuit vent (IPC 914): one vent for a battery of 2–8 fixtures, at least 2 inches, connected between the two most upstream fixture drains, carrying no waste.</li>
<li>Island (loop) vent: for island/peninsula fixtures with no wall; loops above the flood-level rim, then drops to the vent stack.</li>
<li>Relief vent (IPC 908): an extra airway at stack offsets and other pressure trouble spots.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Wet-venting a kitchen sink or laundry. The IPC limits wet venting to bathroom groups. A kitchen fixture on a wet vent is a code violation even if it "works" on the day of the inspection.</div>
<div class="callout"><strong>Common mistake:</strong> Connecting a circuit vent downstream of the battery instead of between the two most upstream fixtures. The position is the design — the upstream fixture's discharge must wash past the vent connection.</div>
<div class="callout"><strong>Common mistake:</strong> Letting a circuit vent receive waste. A circuit vent is a dry vent. Any fixture discharging into it turns it into a drain, and the battery loses its air supply.</div>
<p><strong>Ready-to-Work link:</strong> Venting-method questions are a staple of the Michigan journeyman exam, usually as "which method fits this layout" scenarios. If you can match each layout to its method and state its limit, you are ready for them.</p>`
    }
  ],
  keyTerms: [
    { term: "Individual vent", def: "A vent pipe serving one fixture trap (IPC 910); the default venting method." },
    { term: "Common vent", def: "One vent serving two fixtures on the same floor level (IPC 911)." },
    { term: "Wet vent", def: "A pipe that acts as both a drain and a vent; permitted by IPC 912 only for bathroom groups on the same floor level." },
    { term: "Circuit vent", def: "A vent serving a battery of 2 to 8 trapped fixtures (IPC 914); at least 2 inches, connected between the two most upstream fixture drains." },
    { term: "Battery of fixtures", def: "A row of fixtures connected to a single horizontal drainage branch, vented together by circuit venting." },
    { term: "Island vent (loop vent)", def: "A vent for an island or peninsula fixture that loops above the flood-level rim and returns under the floor to the vent stack." },
    { term: "Relief vent", def: "An additional vent providing a second air path where pressure problems are expected, such as at stack offsets (IPC 908)." },
    { term: "Stack offset", def: "A horizontal shift in a vertical stack; relief venting is required to keep air moving past it." },
    { term: "Waste-stack venting", def: "A method (IPC 913) in which a waste stack itself vents the fixtures discharging into it, under strict limits." },
    { term: "Combination waste-and-vent system", def: "A system (IPC 915) using an oversized drain pipe as both drain and vent for fixtures where conventional venting is impractical." },
    { term: "Dry vent", def: "A vent pipe that carries air only and receives no waste discharge." },
    { term: "Flood-level rim", def: "The top edge of a fixture over which water would overflow; island vent loops rise above it." }
  ],
  video: {
    title: "Circuit Vent Part: 1",
    embedUrl: "https://www.youtube.com/embed/SM30xRd6ND8",
    note: "A focused look at circuit venting: how one vent serves a battery of fixtures, where the vent connects, and why waste travels along the bottom of the branch while air travels across the top. Compare it with the wet vent in this module.",
    more: [
      { title: "Wet Venting Video:3 - Sizing a Basic System", url: "https://www.youtube.com/watch?v=gOEgf2JC4Fc" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> Two lavatories sit back to back in a shared wall on the same floor. Which venting method fits, what does it require, and what would make it not fit?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A <strong>common vent</strong> (IPC 911) fits — one vent serving two fixtures on the same floor level. Step 2: The vent rises from the interconnection of the two fixture drains. Step 3: It would not fit if the fixtures were on different floors, or if a third fixture were added — a common vent serves exactly two fixtures.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A bathroom group is wet-vented: the lavatory drain also vents the water closet. (a) Which fixture must be downstream, and why? (b) What is the minimum size of the horizontal wet-vented section?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The <strong>water closet must be downstream</strong>, so its discharge does not have to pass the lavatory trap and so the lavatory's flow washes the wet-vented pipe. Step 2: The horizontal wet-vented section must be at least <strong>2 inches</strong> in diameter when serving a bathroom group. Step 3: Wet venting is permitted here because these are bathroom-group fixtures on the same floor level.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A commercial restroom has 6 lavatories in a battery on one horizontal branch. (a) Which venting method fits? (b) What is the minimum circuit vent size? (c) Where must the circuit vent connect?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: <strong>Circuit venting</strong> (IPC 914) fits — 6 fixtures is within the 2-to-8 range. Step 2: The circuit vent must be at least <strong>2 inches</strong> in diameter. Step 3: It must connect to the top of the horizontal branch <strong>between the two most upstream fixture drains</strong>, and it must receive no waste discharge.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A kitchen island sink cannot be vented vertically because there is no wall behind it. Which method fits, and describe the pipe path in two sentences.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: An <strong>island (loop) vent</strong> fits. Step 2: The vent rises from the trap and loops up inside the cabinet above the fixture's flood-level rim, then drops back down under the floor and runs horizontally to join the vent stack. Step 3: The high loop keeps waste out of the vent while the return leg carries air to the stack.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A helper proposes wet-venting a kitchen sink through the lavatory drain of the bathroom next door. Is this permitted? Explain.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: <strong>No, it is not permitted.</strong> Step 2: IPC 912 limits wet venting to fixtures in bathroom groups on the same floor level. Step 3: A kitchen sink is not a bathroom-group fixture, so it needs its own dry vent — an individual vent or another permitted method.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A tall building's drainage stack shifts horizontally at the third floor. What venting feature does IPC 908 call for at the offset, and what problem does it solve?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: IPC 908 calls for a <strong>relief vent</strong> at the stack offset. Step 2: The offset disrupts airflow in the stack, creating pressure swings above and below it. Step 3: The relief vent gives air a second path past the offset, keeping pressures balanced so trap seals on the floors above and below are not pushed or pulled out.</p>"
    }
  ],
  quiz: [
    {
      q: "An individual vent serves:",
      choices: ["One fixture trap", "Two fixtures on the same floor", "A battery of 2 to 8 fixtures", "An entire building"],
      answer: 0,
      explanation: "Correct: (a). An individual vent (IPC 910) serves one fixture trap. (b) describes a common vent. (c) describes circuit venting. (d) No single vent serves an entire building."
    },
    {
      q: "A common vent (IPC 911) may serve:",
      choices: ["Any number of fixtures on one floor", "Two fixtures on the same floor level", "Two fixtures on different floors", "One fixture and one floor drain only"],
      answer: 1,
      explanation: "Correct: (b). A common vent serves exactly two fixtures on the same floor. (a) There is a two-fixture limit. (c) The fixtures must be on the same floor level. (d) The method is not limited to that pairing, and it is still two fixtures."
    },
    {
      q: "Wet venting under IPC 912 is permitted only for:",
      choices: ["Kitchen sinks and laundry fixtures", "Fixtures in bathroom groups on the same floor level", "Any fixtures within 6 feet of each other", "Floor drains only"],
      answer: 1,
      explanation: "Correct: (b). Wet venting is limited to bathroom groups on the same floor. (a) Kitchen and laundry fixtures require dry vents. (c) Distance alone does not permit wet venting. (d) Floor drains use other methods, such as combination waste-and-vent systems."
    },
    {
      q: "In a wet-vented bathroom group, the water closet must be:",
      choices: ["Upstream of the lavatory", "The most downstream fixture on the wet vent", "Vented by a separate circuit vent", "Connected directly to the vent stack"],
      answer: 1,
      explanation: "Correct: (b). The water closet sits downstream so its discharge does not pass another fixture's trap and so the lavatory flow washes the wet-vented pipe. (a) reverses the required order. (c) and (d) describe other methods, not the wet-vent layout."
    },
    {
      q: "Circuit venting (IPC 914) may serve a battery of:",
      choices: ["1 to 4 fixtures", "2 to 8 fixtures", "8 to 16 fixtures", "Any number of fixtures"],
      answer: 1,
      explanation: "Correct: (b). Circuit venting covers 2 to 8 trapped fixtures. (a) understates the range — and a single fixture uses an individual vent. (c) exceeds the eight-fixture cap. (d) There is a firm cap of eight."
    },
    {
      q: "The minimum size of a circuit vent is:",
      choices: ["1-1/4 inches", "1-1/2 inches", "2 inches", "3 inches"],
      answer: 2,
      explanation: "Correct: (c). IPC 914 requires a circuit vent of at least 2 inches. (a) is the absolute minimum vent size, not the circuit-vent minimum. (b) is the minimum vent for a 3-inch drain, not for a circuit vent. (d) is larger than required."
    },
    {
      q: "A circuit vent must connect to the horizontal branch:",
      choices: ["At the most downstream fixture drain", "Between the two most upstream fixture drains", "At the base of the stack", "Below the flood-level rim"],
      answer: 1,
      explanation: "Correct: (b). The connection sits between the two most upstream fixture drains so the upstream discharge washes past the vent connection. (a) is the wrong end of the battery. (c) is the stack base, not the branch. (d) Vent connections are made above the flood-level rim, never below it."
    },
    {
      q: "An island sink with no wall behind it is vented by:",
      choices: ["A common vent", "A wet vent through the dishwasher", "An island (loop) vent that rises above the flood-level rim and returns under the floor to the vent stack", "No vent — island sinks are exempt"],
      answer: 2,
      explanation: "Correct: (c). The loop vent rises above the flood-level rim, then drops under the floor to the stack. (a) A common vent needs two fixtures and a wall path. (b) Wet venting does not apply to a kitchen sink. (d) Island sinks are not exempt from venting."
    }
  ],
  studyGuide: `
<h3>Module 5 — Vent Types: Quick Reference</h3>
<p><strong>Core idea:</strong> Individual venting is the default; every shared method is an exception with conditions.</p>
<p><strong>Individual (IPC 910):</strong> One vent per fixture trap.</p>
<p><strong>Common (IPC 911):</strong> One vent, two fixtures, same floor.</p>
<p><strong>Wet (IPC 912):</strong> One pipe = drain + vent. Bathroom groups only, same floor, horizontal section ≥ 2 in. Water closet downstream.</p>
<p><strong>Circuit (IPC 914):</strong> One vent for a battery of 2–8 fixtures. Vent ≥ 2 in, connects between the two most upstream fixture drains, carries no waste. Branch doubles as wet vent.</p>
<p><strong>Island / loop:</strong> Island or peninsula fixture with no wall. Loop rises above the flood-level rim, drops under the floor to the vent stack.</p>
<p><strong>Relief (IPC 908):</strong> Extra airway at stack offsets and other pressure trouble spots.</p>
<p><strong>Also in the code:</strong> Waste-stack venting (IPC 913) and combination waste-and-vent systems (IPC 915) — commercial methods with strict limits.</p>
<p><strong>Watch out:</strong> Never wet-vent a kitchen or laundry fixture. Never let a circuit vent receive waste. Never put a circuit vent downstream of the battery.</p>
<p><strong>Self-check:</strong> 6 lavatories in a battery — which method? (Circuit vent, ≥ 2 in, between the two most upstream drains.) 2 lavatories back to back? (Common vent.)</p>
`
};
