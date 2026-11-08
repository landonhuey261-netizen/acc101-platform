// Plumbing 121 - Module 7: Sizing Vent Piping & Vent Terminals
module.exports = {
  number: 7,
  slug: "sizing-vent-piping-terminals",
  title: "Sizing Vent Piping & Vent Terminals",
  estTime: "3–4 hours",
  objectives: [
    "Explain the three inputs to vent sizing: the size of the stack served, the DFU load on it, and the vent's developed length.",
    "Use IPC Table 916.1 and the one-half rule together to size stack vents and vent stacks.",
    "Apply the 40-foot developed-length rule that increases a vent by one pipe size.",
    "State the IPC frost-closure rule (Section 903.2) and explain why Michigan vents need it.",
    "Describe how a vent terminal must be finished above the roof and what can go wrong with a bad terminal."
  ],
  sections: [
    {
      heading: "Vent Sizing Has Three Inputs, Not One",
      html: `
<p>Module 4 gave you the floor: a vent is at least one-half the diameter of the drain it serves, and never less than 1-1/4 inches. Full vent sizing builds on that floor with <strong>three inputs</strong>, all read from <strong>IPC Table 916.1</strong> (Size and Developed Length of Stack Vents and Vent Stacks):</p>
<ul>
<li><strong>The size of the soil or waste stack served.</strong> A bigger stack moves more waste and more air, so it needs a bigger vent.</li>
<li><strong>The total DFU connected to that stack.</strong> More fixtures mean more air demand at peak discharge.</li>
<li><strong>The developed length of the vent.</strong> A longer vent loses more airflow to friction, so length pushes the size up.</li>
</ul>
<p>The method is the same lookup pattern as drainage sizing: find the stack size and DFU load in the table, read the required vent diameter, then check the maximum developed length for that combination. If your vent run is longer than the table allows for that size, you go up a size. The one-half rule from Module 4 is the check that catches errors: if Table 916.1 ever gave you a vent smaller than one-half the drain diameter, the one-half rule would override it — in practice the table never does.</p>
<p><strong>Worked example from the ICC's venting guide.</strong> A 3-inch soil stack with a stack vent serving as the required vent extension to the outdoors, connecting to a 3-inch building drain, must have at least a <strong>1-1/2-inch stack vent</strong> — and that combination is limited to a maximum of <strong>102 fixture units</strong> served. The 1-1/2-inch size is exactly the one-half rule applied to a 3-inch stack, and the 102-DFU cap is what the table adds: the same vent cannot serve an unlimited load.</p>
<div class="callout"><strong>Key idea:</strong> Vent size = stack size + DFU load + developed length, read from Table 916.1. The one-half rule is the floor underneath the table. Check all three inputs before you call the size final.</div>`
    },
    {
      heading: "Length Steals Air: The 40-Foot Rule",
      html: `
<p>Air moving through a vent pipe loses energy to friction against the pipe walls, and the loss grows with length. A short vent can be small; the same vent run long needs to be larger to deliver the same air. IPC Section 906.2 handles this with a bright line: <strong>vents exceeding 40 feet in developed length shall be increased by one nominal pipe size for the entire developed length of the vent</strong>.</p>
<p>Developed length is the actual length of the vent including the equivalent length through fittings — the same measure you used for trap arms. A vent that runs 30 feet straight up and 15 feet horizontally to a stack is a 45-foot vent, not a 30-foot vent, and it goes up one size for its whole length. The increase applies to the entire run, not just the part past 40 feet: a vent that is 1-1/2 inches for its first 40 feet and 2 inches after that would choke the airflow at the narrow section, so the code requires the larger size throughout.</p>
<p>On a real job this rule most often bites on vents that run horizontally a long way to reach a stack — for example, a vent from a far bathroom that travels across an attic before rising through the roof. Measure the whole path before you size the pipe, and remember that every elbow adds equivalent length. When a vent is close to the 40-foot line, going up a size is cheap insurance against a gurgling system.</p>
<div class="callout"><strong>Key idea:</strong> Over 40 feet of developed length, the vent goes up one full pipe size — for its entire length, not just the extra feet. Measure the whole path, fittings included.</div>`
    },
    {
      heading: "Frost Closure: Why Michigan Vents Get Bigger at the Roof",
      html: `
<p>A vent terminal is a warm, moist pipe sticking out of a cold roof. Water vapor from the drainage system rises through the vent, hits the cold pipe wall near the roof, and freezes. Layer by layer, frost builds inward until the vent is choked shut — a condition called <strong>frost closure</strong>. A frost-closed vent is a blocked vent: drains gurgle, traps siphon, and the system fails on the coldest days of the year, exactly when a service call is hardest to make.</p>
<p>IPC Section 903.2 addresses this directly: <strong>where the 97.5-percent value for outdoor design temperature is 0°F or less, vent extensions through a roof or wall must be at least 3 inches in diameter</strong>. The 97.5-percent design temperature is the temperature that the location stays above for 97.5 percent of the heating season — in other words, a normal cold winter temperature for the area. Much of Michigan falls at or below 0°F on that measure, so in Michigan practice a vent going through the roof is upsized to 3 inches.</p>
<p>Two details matter. First, the increase in size is made <strong>inside the structure, at least 1 foot below the roof</strong> (or inside the wall), so the larger pipe is the one exposed to the cold — upsizing above the roof alone does nothing, because the frost forms where the pipe passes through the cold zone. Second, the 3-inch rule applies to the vent extension through the roof, not to the whole vent system: a 1-1/2-inch vent can run up through the building and increase to 3 inches just below the roof. Insulating the vent in an unheated attic is good practice on top of the size increase, not a substitute for it.</p>
<div class="callout"><strong>Key idea:</strong> Frost closure chokes vents shut in cold weather. IPC 903.2: where the 97.5% design temperature is 0°F or less, the vent through the roof is at least 3 inches — and the increase is made at least 1 foot below the roof, inside the structure. In Michigan, plan on 3-inch roof penetrations.</div>`
    },
    {
      heading: "Finishing the Terminal: Above the Roof and Clear of Openings",
      html: `
<p>The vent terminal is the open end of the vent above the roof, and the code sets how it must be finished. Under IPC Section 903.1.1, an open vent pipe extending through a roof must terminate at least <strong>6 inches above the roof</strong> — high enough that rain, snow, and roof debris do not enter and block it, and high enough that the gas it exhausts disperses into the air rather than hugging the roof surface. A vent that ends flush with the roof is a vent waiting to be buried by the first snowfall.</p>
<p>The terminal must also be located so sewer gas cannot drift back into the building through a window, door, or air intake. The code requires separation from openings and intakes — on the job, that means keeping the terminal away from openable windows and fresh-air intakes and above the roofline where wind can carry the gas away. A vent terminal next to a bedroom window is a design failure even if the pipe size is perfect.</p>
<p>Terminals also need protection from the things that block them: birds nesting in an open pipe, leaves, and ice. A vent cap or screen that keeps animals and debris out while letting air pass freely is standard practice, but anything that restricts airflow — a tight screen, a cap installed upside down, a terminal buried under a roof valley's snow load — turns protection into a blockage. Inspect the terminal from the roof on every service call where venting is suspected, and from the ground with binoculars when the roof is not safe to walk.</p>
<div class="callout"><strong>Key idea:</strong> A vent terminal finishes at least 6 inches above the roof, clear of windows and air intakes, open to the air and protected from debris — but never restricted. The terminal is the one part of the vent system the weather can attack, so it is the first place to look when venting fails.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Vent sizing (IPC Table 916.1) uses three inputs: stack size, DFU load, and developed length. The one-half rule (906.2) is the floor.</li>
<li>Example: a 3-inch stack with a 1-1/2-inch stack vent is limited to 102 DFU.</li>
<li>Vents over 40 feet developed length go up one pipe size for their entire length (IPC 906.2).</li>
<li>Frost closure (IPC 903.2): where the 97.5% design temperature is 0°F or less, the vent through the roof is at least 3 inches, increased at least 1 foot below the roof inside the structure.</li>
<li>Vent terminal: at least 6 inches above the roof (IPC 903.1.1), clear of openings and intakes, open and protected but never restricted.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Sizing a vent from the trap size instead of the stack size and DFU load. A vent serves the drainage system, not the fixture — Table 916.1 starts from the stack, not the trap.</div>
<div class="callout"><strong>Common mistake:</strong> Upsizing a vent only above the roof for frost. The increase must be made at least 1 foot below the roof inside the structure — the frost forms where the pipe passes through the cold zone, not above it.</div>
<div class="callout"><strong>Common mistake:</strong> Measuring developed length as the straight vertical rise and ignoring the horizontal run and fittings. A vent that "looks short" on the plan can easily exceed 40 feet once the attic run and elbows are counted.</div>
<p><strong>Ready-to-Work link:</strong> Frost closure is a Michigan-specific exam favorite: the 3-inch rule, the 0°F design temperature, and the 1-foot-below-the-roof increase are exactly the kind of numbers the journeyman exam asks for.</p>`
    }
  ],
  keyTerms: [
    { term: "IPC Table 916.1", def: "The code table sizing stack vents and vent stacks by stack size, DFU load, and developed length." },
    { term: "Stack vent", def: "The extension of a soil or waste stack above the highest fixture connection, continuing through the roof." },
    { term: "Vent stack", def: "A vertical vent pipe collecting individual vents and carrying them to the outdoors." },
    { term: "Developed length", def: "The actual length of a vent pipe including equivalent length through fittings." },
    { term: "Frost closure", def: "The buildup of frost inside a vent terminal in cold weather until the vent is choked shut." },
    { term: "97.5-percent design temperature", def: "The outdoor temperature a location stays above for 97.5 percent of the heating season; the trigger for IPC 903.2 frost sizing." },
    { term: "Vent terminal", def: "The open end of a vent pipe above the roof; must terminate at least 6 inches above the roof (IPC 903.1.1)." },
    { term: "One-half rule", def: "IPC 906.2: a vent must be at least one-half the diameter of the drain served, and never less than 1-1/4 inches." },
    { term: "40-foot rule", def: "IPC 906.2: a vent exceeding 40 feet in developed length is increased by one nominal pipe size for its entire length." },
    { term: "Soil stack", def: "A vertical pipe carrying water-closet waste downward through a building." },
    { term: "Waste stack", def: "A vertical pipe carrying liquid waste (no water-closet waste) downward through a building." },
    { term: "Vent cap", def: "A fitting at the vent terminal that keeps out animals and debris while allowing air to pass freely." }
  ],
  video: {
    title: "Vent Sizing 1",
    embedUrl: "https://www.youtube.com/embed/8qcNcjSQxSs",
    note: "A step-by-step vent sizing walk-through: stack size, fixture load, and developed length, then reading the vent size from the table. Follow along with IPC Table 916.1 and the one-half rule from this module.",
    more: [
      { title: "Understanding International Plumbing Code Chapter 9 Section 906 Vent Sizing", url: "https://www.youtube.com/watch?v=n-YtKuA9Ivc" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A 3-inch soil stack has a 1-1/2-inch stack vent. (a) Does the vent meet the one-half rule? (b) What is the maximum DFU load that combination may serve?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: One-half of 3 inches is 1-1/2 inches, so the vent meets the one-half rule exactly. Step 2: Per the IPC venting guidance for this combination, a 3-inch stack with a 1-1/2-inch stack vent is limited to a maximum of <strong>102 DFU</strong>. Step 3: A load above 102 DFU would require a larger vent, a larger stack, or a second vent path.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A vent run measures 52 feet in developed length, and the table size for its load is 1-1/2 inches. What size must the vent be, and over how much of its length?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The developed length exceeds 40 feet, so IPC 906.2 applies. Step 2: The vent must be increased by one nominal pipe size — from 1-1/2 inches to <strong>2 inches</strong>. Step 3: The increase applies to the <strong>entire developed length</strong>, not just the feet past 40, because a narrow section anywhere in the run would choke the airflow.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A house in northern Michigan has a 1-1/2-inch vent running to the roof. The 97.5-percent outdoor design temperature for the area is -5°F. (a) Does IPC 903.2 apply? (b) What must change, and where must the change be made?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Yes — IPC 903.2 applies where the 97.5-percent design temperature is 0°F or less, and -5°F is below 0°F. Step 2: The vent extension through the roof must be at least <strong>3 inches</strong> in diameter. Step 3: The increase in size must be made <strong>inside the structure, at least 1 foot below the roof</strong>, so the larger pipe is the one exposed to the cold.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A vent terminal ends flush with the roof surface, level with the shingles. What is wrong, what does the code require, and what failure does the requirement prevent?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: IPC 903.1.1 requires an open vent pipe through a roof to terminate at least <strong>6 inches above the roof</strong>. Step 2: A flush terminal is below the requirement and fails inspection. Step 3: The height prevents rain, snow, leaves, and roof debris from entering and blocking the vent, and lets exhaust gas disperse into the air instead of hugging the roof.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A vent system works fine in summer but every drain in the house gurgles on the coldest winter days. Name the most likely cause, explain the mechanism, and name the code fix.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The most likely cause is <strong>frost closure</strong> of the vent terminal. Step 2: Moist air rising through the vent freezes on the cold pipe wall near the roof, building inward until the vent chokes shut — so the system loses its air supply only in cold weather. Step 3: The code fix is IPC 903.2: increase the vent extension through the roof to at least <strong>3 inches</strong>, with the increase made at least 1 foot below the roof inside the structure.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> Explain in two sentences why vent sizing needs three inputs (stack size, DFU load, developed length) instead of just the drain size.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The drain size alone tells you how much water the pipe carries, but the vent must supply air for the whole stack's peak discharge, which depends on the DFU load. Step 2: Developed length matters because friction over a long run chokes airflow, so a long vent needs a larger diameter than a short vent serving the same stack.</p>"
    }
  ],
  quiz: [
    {
      q: "IPC Table 916.1 sizes stack vents and vent stacks using which three inputs?",
      choices: ["Trap size, fixture count, and roof height", "Stack size, DFU load, and developed length", "Pipe material, water pressure, and slope", "Building height, number of floors, and fixture type"],
      answer: 1,
      explanation: "Correct: (b). Table 916.1 uses the size of the stack served, the DFU connected to it, and the vent's developed length. (a) Trap size does not size vents, and roof height is not a table input. (c) Material, pressure, and slope are supply-side or drainage inputs. (d) Building height alone does not determine vent size."
    },
    {
      q: "A 3-inch soil stack with a 1-1/2-inch stack vent is limited to a maximum of:",
      choices: ["20 DFU", "48 DFU", "102 DFU", "216 DFU"],
      answer: 2,
      explanation: "Correct: (c). The IPC venting guidance caps this combination at 102 fixture units. (a) is the 3-inch branch capacity. (b) is the 3-inch stack capacity at three branch intervals or fewer. (d) is the 4-inch building drain capacity at 1/4 inch per foot."
    },
    {
      q: "Under IPC 906.2, a vent with a developed length of 55 feet must be:",
      choices: ["Capped to prevent heat loss", "Increased by one nominal pipe size for its entire developed length", "Reduced by one size to speed the air", "Split into two vents of the original size"],
      answer: 1,
      explanation: "Correct: (b). Vents over 40 feet developed length go up one size for the whole run. (a) Capping a vent destroys the system. (c) Reducing the size increases friction loss. (d) Splitting is not the code's remedy for length."
    },
    {
      q: "IPC 903.2 frost closure applies where the 97.5-percent outdoor design temperature is:",
      choices: ["32°F or less", "20°F or less", "0°F or less", "-20°F or less"],
      answer: 2,
      explanation: "Correct: (c). Section 903.2 applies at 0°F or less on the 97.5-percent design temperature. (a) and (b) are warmer than the trigger. (d) is colder than the trigger and would miss areas the code covers."
    },
    {
      q: "Under IPC 903.2, a vent extension through a roof in a frost-closure area must be at least:",
      choices: ["1-1/4 inches", "1-1/2 inches", "2 inches", "3 inches"],
      answer: 3,
      explanation: "Correct: (d). The vent through the roof must be at least 3 inches in diameter. (a) is the absolute minimum vent size. (b) is the one-half-rule size for a 3-inch drain. (c) is the one-half-rule size for a 4-inch drain."
    },
    {
      q: "Where must the frost-closure size increase be made?",
      choices: ["Above the roof, at the terminal", "Inside the structure, at least 1 foot below the roof", "At the base of the stack", "At the fixture trap"],
      answer: 1,
      explanation: "Correct: (b). The increase is made inside the structure at least 1 foot below the roof, so the larger pipe passes through the cold zone. (a) Upsizing only above the roof leaves the cold-zone section small, where the frost forms. (c) and (d) are the wrong locations entirely."
    },
    {
      q: "Under IPC 903.1.1, an open vent pipe through a roof must terminate at least:",
      choices: ["Flush with the roof", "3 inches above the roof", "6 inches above the roof", "12 inches above the roof"],
      answer: 2,
      explanation: "Correct: (c). The terminal must extend at least 6 inches above the roof. (a) leaves the vent open to rain, snow, and debris. (b) is below the requirement. (d) exceeds the IPC minimum (some local amendments require more, but the IPC minimum is 6 inches)."
    },
    {
      q: "A vent system that works in summer but fails on the coldest winter days most likely suffers from:",
      choices: ["Undersized traps", "Frost closure of the vent terminal", "Too much slope on the building drain", "A water heater set too low"],
      answer: 1,
      explanation: "Correct: (b). Moist vent air freezes on the cold terminal wall and chokes the vent shut — a cold-weather-only failure. (a) Trap size does not change with the season. (c) Drain slope does not change with the season. (d) The water heater is on the supply side."
    }
  ],
  studyGuide: `
<h3>Module 7 — Sizing Vent Piping & Vent Terminals: Quick Reference</h3>
<p><strong>Core idea:</strong> Vent size comes from Table 916.1: stack size + DFU load + developed length. The one-half rule (906.2) is the floor.</p>
<p><strong>Example:</strong> 3-in stack + 1-1/2-in stack vent = maximum 102 DFU.</p>
<div class="formula">IPC 906.2: vent over 40 ft developed length → +1 pipe size for the entire length &nbsp;|&nbsp; Minimum vent: 1-1/4 in</div>
<p><strong>Frost closure (IPC 903.2):</strong> 97.5% design temp 0°F or less → vent through roof ≥ 3 in, increase made inside the structure at least 1 ft below the roof.</p>
<p><strong>Terminal (IPC 903.1.1):</strong> At least 6 in above the roof, clear of windows and air intakes, open and protected but never restricted.</p>
<p><strong>Watch out:</strong> Size vents from the stack, not the trap. Measure the whole developed length, fittings included. Upsize for frost below the roof, not above it.</p>
<p><strong>Self-check:</strong> A 1-1/2-in vent runs 45 ft — what size? (2 in, whole run.) Design temp -5°F — roof vent size? (3 in, increased 1 ft below the roof.)</p>
`
};
