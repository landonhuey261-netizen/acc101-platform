// Plumbing 201 - Module 5: Water Supply Sizing with Code Tables (IPC Ch. 6)
module.exports = {
  number: 5,
  slug: "water-supply-sizing-code-tables",
  title: "Water Supply Sizing with Code Tables (IPC Ch. 6)",
  estTime: "3–4 hours",
  objectives: [
    "Explain what a water supply fixture unit (WSFU) measures and why fixtures are not sized by adding their flow rates.",
    "Assign WSFU values from IPC Appendix E Table E103.3 for common fixtures, private and public.",
    "Convert a total WSFU to a design flow in gpm using the Appendix E demand curve.",
    "Check a design against Table 604.3's minimum flow rate and pressure at each fixture outlet.",
    "Select a pipe size using the Appendix E pipe-sizing tables, given total load, available pressure, and developed length."
  ],
  sections: [
    {
      heading: "Why Fixture Units Exist",
      html: `
<p>A house with ten fixtures never has all ten running at once. If you sized the water main by adding every fixture's full flow rate together, the pipe would be enormous, expensive, and mostly empty. If you sized it for one fixture at a time, the shower would go cold every time a toilet flushed. The code's answer is the <strong>water supply fixture unit (WSFU)</strong>: a number assigned to each fixture that bundles together how much water it draws, how long it draws for, and how often it is used, so different fixtures can be added into one total load.</p>
<p>A water closet with a flush tank draws a lot of water but only for the minute it refills, and it refills slowly — so it carries a small fixture-unit value. A flushometer water closet draws a huge flow for a few seconds, all at once — so it carries a large value. A lavatory draws a little water often. The fixture unit captures those differences in a single number, and the code's demand curve then converts the total into a realistic peak flow in gallons per minute. The conversion is deliberately non-linear: doubling the fixture units does not double the flow, because the chance that everything runs at once falls as the building gets bigger.</p>
<p>This method is called the <strong>Hunter method</strong>, after Roy Hunter of the National Bureau of Standards, who worked out the probabilities in the 1940s. It lives in the IPC as <strong>Appendix E, Sizing of Water Piping System</strong>, and it is the method the Michigan journeyman exam expects you to use.</p>
<div class="callout"><strong>Key idea:</strong> Fixture units are not flow rates. They are a probability-weighted load index — and the demand curve, not addition, turns them into gallons per minute.</div>`
    },
    {
      heading: "Assigning Fixture Units: Appendix E Table E103.3",
      html: `
<p>IPC Appendix E Table E103.3 gives each fixture a cold, hot, and total WSFU value, split by private and public use and by flush type for water closets. The values this course uses, from that table, are: a private flush-tank water closet, <strong>2.2</strong> total; a public flush-tank water closet, <strong>5.0</strong>; a public flushometer water closet, <strong>10.0</strong>; a private lavatory, <strong>0.7</strong> total (0.5 cold, 0.5 hot); a public lavatory, <strong>2.0</strong>; a private bathtub or shower, <strong>1.4</strong>; a public shower, <strong>4.0</strong>; and a private kitchen sink, <strong>1.4</strong>. Note that the cold and hot values do not add up to the total — a fixture drawing both draws less of each than its individual rating, so always take the total from the table rather than adding.</p>
<p>Private and public values differ because use differs. A private bathroom's fixtures serve one family and are used gently; a public restroom's fixtures serve strangers all day and are used hard. A flushometer water closet's 10.0 dwarfs a tank toilet's 2.2 because the flushometer pulls its whole flush in seconds. That is also why a building with flushometer toilets needs much larger water service than the same building with tank toilets.</p>
<p>When a fixture is not in the table, the code sends you to the closest listed fixture or to the manufacturer's data. Never invent a value: the table is the authority, and on the exam the table is open in front of you.</p>
<div class="callout"><strong>Key idea:</strong> Read the total column, not the sum of cold plus hot. And always check whether the fixture is private or public, tank or flushometer — the same fixture can carry four different values.</div>`
    },
    {
      heading: "From Fixture Units to Gallons per Minute",
      html: `
<p>Once every fixture on a pipe segment has its WSFU, add them into a total. Then convert the total to a design flow using the Appendix E demand curve (Table E103.3(3)). The flush-tank column gives these anchors: 10 fixture units = <strong>14.6 gpm</strong>, 20 fixture units = <strong>19.6 gpm</strong>, 50 fixture units = <strong>29.1 gpm</strong>, and 100 fixture units = <strong>43.5 gpm</strong>. Notice the pattern: five times the fixture units (10 to 50) gives only twice the flow (14.6 to 29.1). That flattening is the whole point of the method — it is what keeps the pipe sizes sane.</p>
<p>Work an example. A small house has 2 private flush-tank water closets (2 × 2.2 = 4.4), 2 private lavatories (2 × 0.7 = 1.4), 1 private bathtub/shower (1.4), and 1 private kitchen sink (1.4). The total is 4.4 + 1.4 + 1.4 + 1.4 = <strong>8.6 WSFU</strong>. On the flush-tank demand curve that is roughly 13–14 gpm of peak demand — far less than the 30-plus gpm you would get by adding the fixtures' full flow rates. The flushometer column is separate and steeper, because flushometers draw harder; always use the column that matches the flush type in the building.</p>
<p>Between the table's anchor points, read the curve — do not guess a straight line. The demand curve is printed in the appendix as a table and a graph, and the exam gives it to you. Your job is to find the row, not to derive it.</p>
<div class="callout"><strong>Key idea:</strong> Add the fixture units, then read the flow off the demand curve. Never add flow rates, and never draw a straight line between curve points.</div>`
    },
    {
      heading: "Checking the Design: Table 604.3 and Pipe Sizing",
      html: `
<p>The demand flow is only half the check. <strong>Table 604.3, Water Distribution System Design Criteria</strong>, sets the minimum flow rate and flow pressure the system must deliver at each fixture supply outlet: a bathtub needs 4 gpm at 20 psi, a private lavatory 1.5 gpm at 8 psi, a shower 2 gpm at 8 psi, a close-coupled tank water closet 3 gpm at 15 psi, a flushometer-tank water closet 3 gpm at 20 psi, a flushometer-valve water closet 25 gpm at 25 psi, and a residential dishwasher 2.75 gpm at 8 psi. If the pipe is big enough for the total flow but the pressure at the farthest fixture falls below these numbers, the design fails.</p>
<p>Pipe size is then selected from the Appendix E pipe-sizing tables, which take the total fixture units, the available pressure, and the <strong>developed length</strong> — the actual length of the pipe run plus an allowance for fittings — and give the minimum pipe size. Longer runs and lower pressure both push the size up, because friction eats pressure over distance. A 1-inch main that works on a short run can be too small on a long one, which is why the developed length, not the straight-line distance, is the input.</p>
<p>Two code limits frame the whole design. The code caps the water pressure the system may deliver (the IPC's maximum is 80 psi at a fixture, with a pressure-reducing valve required above it), and the minimum size of a fixture's water supply pipe is set by <strong>Table 604.5</strong> — for example, a bathtub takes a 1/2-inch minimum supply, a lavatory 3/8 inch, and a flush-tank water closet 3/8 inch. The pipe-sizing tables give the main and branch sizes; Table 604.5 gives the last few inches to each fixture.</p>
<div class="callout"><strong>Key idea:</strong> Size by fixture units and developed length, then prove the farthest fixture still gets its Table 604.3 flow and pressure. A design that passes one check and fails the other is not a design.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>WSFU (Appendix E Table E103.3) is a probability-weighted load index, not a flow rate. Private flush-tank WC 2.2, public flush-tank WC 5.0, public flushometer WC 10.0, private lavatory 0.7, public lavatory 2.0, private tub/shower 1.4, public shower 4.0, private kitchen sink 1.4.</li>
<li>Add the WSFU, then convert with the demand curve: 10 FU = 14.6 gpm, 20 FU = 19.6 gpm, 50 FU = 29.1 gpm, 100 FU = 43.5 gpm (flush-tank column).</li>
<li>Table 604.3 sets the minimum flow and pressure at each fixture outlet (bathtub 4 gpm @ 20 psi, shower 2 gpm @ 8 psi, tank WC 3 gpm @ 15–20 psi, flushometer WC 25 gpm @ 25 psi).</li>
<li>Pipe size comes from the Appendix E sizing tables using total WSFU, available pressure, and developed length.</li>
<li>Table 604.5 sets minimum fixture supply pipe sizes; pressure above 80 psi at a fixture requires a pressure-reducing valve.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Adding cold and hot fixture units to get the total. The table's total column is smaller than the sum — always read the total, never add.</div>
<div class="callout"><strong>Common mistake:</strong> Adding flow rates instead of fixture units. Ten fixtures at 2 gpm each is not a 20 gpm design load — the demand curve says otherwise, and the exam will punish the addition.</div>
<p><strong>Ready-to-Work link:</strong> Water supply sizing is a guaranteed topic on the Michigan journeyman exam, and the lab for this course walks the same fixture-unit → gpm → pipe-size path as a scored grid.</p>`
    }
  ],
  keyTerms: [
    { term: "Water supply fixture unit (WSFU)", def: "A load index assigned to each fixture (Appendix E Table E103.3) combining flow, duration, and frequency of use; the basis of water pipe sizing." },
    { term: "Hunter method", def: "The probability-based sizing method (Roy Hunter, 1940s) used in IPC Appendix E: add fixture units, convert to flow on a demand curve." },
    { term: "Demand curve", def: "The Appendix E curve converting total WSFU to design flow in gpm; deliberately non-linear because not all fixtures run at once." },
    { term: "Developed length", def: "The length of a pipe run including an allowance for fittings; the length input to the pipe-sizing tables." },
    { term: "Table 604.3", def: "Water distribution system design criteria: minimum flow rate and pressure required at each fixture supply outlet." },
    { term: "Table 604.5", def: "Minimum sizes of fixture water supply pipes (for example, bathtub 1/2 inch, lavatory 3/8 inch)." },
    { term: "Flushometer valve", def: "A valve that flushes a water closet directly from the water supply at high flow; carries 10.0 WSFU (public) versus 2.2–5.0 for tank toilets." },
    { term: "Flush tank", def: "A toilet tank that stores water and releases it for a flush, refilling slowly; carries a much smaller fixture-unit value than a flushometer." },
    { term: "Pressure-reducing valve (PRV)", def: "A valve that limits water pressure; required when pressure at a fixture would exceed 80 psi." },
    { term: "Appendix E", def: "The IPC appendix for sizing water piping: fixture-unit tables, the demand curve, and pipe-sizing tables." },
    { term: "Private use", def: "Fixtures serving one family or a small private group; lower fixture-unit values than public use." },
    { term: "Public use", def: "Fixtures serving the general public; higher fixture-unit values because use is heavier and more frequent." },
    { term: "Peak demand", def: "The highest flow the system is designed to deliver, read from the demand curve for the total fixture units." },
    { term: "Friction loss", def: "Pressure lost as water flows through pipe and fittings; longer runs and smaller pipes lose more, which is why developed length matters." }
  ],
  video: {
    title: "Understanding International Plumbing Code: Water Pipe Sizing",
    embedUrl: "https://www.youtube.com/embed/VmblU4083Xw",
    note: "Plumber-Tom explains water pipe sizing from the IPC's Appendix E: the segmented-loss method and the simpler selection-of-pipe-size method, in four steps, with worked examples — all based on the 2021 IPC. Follow along with the fixture-unit values in this module and pause at each example to work the numbers yourself before he does.",
    more: [
      { title: "How to size Plumbing Water pipes using Fixture Units", url: "https://www.youtube.com/watch?v=fr8CXkczYKw" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A house has 2 private flush-tank water closets, 3 private lavatories, 1 private bathtub/shower, and 1 private kitchen sink. What is the total WSFU? Show each fixture's value.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Water closets: 2 × 2.2 = 4.4. Step 2: Lavatories: 3 × 0.7 = 2.1. Step 3: Bathtub/shower: 1 × 1.4 = 1.4. Step 4: Kitchen sink: 1 × 1.4 = 1.4. Step 5: Total = 4.4 + 2.1 + 1.4 + 1.4 = <strong>9.3 WSFU</strong>.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A small office restroom has 2 public flush-tank water closets and 2 public lavatories. What is the total WSFU, and how does it compare with the same fixtures in a private home?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Water closets: 2 × 5.0 = 10.0. Step 2: Lavatories: 2 × 2.0 = 4.0. Step 3: Total = <strong>14.0 WSFU</strong>. Step 4: The same fixtures in a private home would be 2 × 2.2 + 2 × 0.7 = 5.8 WSFU — the public values are more than double, because public fixtures are used harder and more often.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A building totals 50 WSFU on the flush-tank curve. What is the design flow in gpm? A second building totals 100 WSFU. What is its design flow, and why is it not double the first?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: 50 WSFU on the flush-tank demand curve = <strong>29.1 gpm</strong>. Step 2: 100 WSFU = <strong>43.5 gpm</strong>. Step 3: It is not double because the demand curve is non-linear: as more fixtures are added, the probability that all of them run at once falls, so the design flow grows more slowly than the fixture count.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A shower at the far end of a house receives 6 psi. Table 604.3 requires 2 gpm at 8 psi for a shower. Does the design pass? What are the two ways to fix it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: No — 6 psi is below the 8 psi minimum in Table 604.3, so the shower fails even if the flow is adequate. Step 2: Fix one: increase the pipe size on the run to the shower, reducing friction loss so more pressure arrives. Step 3: Fix two: raise the available pressure at the source (for example, a booster pump or a higher service pressure), within the code's 80 psi maximum at the fixture.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A designer sizes a water main by adding the flow rates of all fixtures: 10 fixtures at 2 gpm each, so 20 gpm, and picks a pipe for 20 gpm. What is wrong with this method, and what should the design flow be for a 9.3 WSFU house?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Adding flow rates assumes every fixture runs at full flow at the same time, which almost never happens — the pipe would be oversized and expensive. Step 2: The correct method is the Hunter method: add fixture units (9.3 WSFU here), then read the demand curve. Step 3: 9.3 WSFU is just under the 10 FU anchor of 14.6 gpm, so the design flow is roughly <strong>14 gpm</strong> — not 20 gpm.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> A flushometer water closet needs 25 gpm at 25 psi (Table 604.3). A tank water closet needs 3 gpm at 15–20 psi. Explain in one paragraph why a building with flushometer toilets needs a much larger water service.</p>",
      solution: "<p><strong>Answer:</strong> Step 1: A flushometer pulls its whole flush straight from the supply in a few seconds — 25 gpm at 25 psi — while a tank toilet refills slowly at 3 gpm. Step 2: That instantaneous demand is why a flushometer carries 10.0 WSFU against a tank toilet's 2.2–5.0. Step 3: The service, the meter, and the mains must all deliver that short, hard draw without starving other fixtures, so flushometer buildings are sized on a steeper demand curve with larger pipe.</p>"
    }
  ],
  quiz: [
    {
      q: "A water supply fixture unit (WSFU) measures:",
      choices: ["The fixture's flow rate in gpm", "A probability-weighted load index combining flow, duration, and frequency of use", "The fixture's pipe size", "The fixture's water pressure"],
      answer: 1,
      explanation: "Correct: (b). A WSFU bundles how much, how long, and how often a fixture draws. (a) Flow rate is only one part of the index. (c) Pipe size is an output of sizing, not the unit itself. (d) Pressure is a design check, not the unit."
    },
    {
      q: "A private flush-tank water closet carries how many total WSFU in Appendix E?",
      choices: ["10.0", "5.0", "2.2", "0.7"],
      answer: 2,
      explanation: "Correct: (c). Private flush-tank WC = 2.2 total. (a) 10.0 is a public flushometer WC. (b) 5.0 is a public flush-tank WC. (d) 0.7 is a private lavatory."
    },
    {
      q: "The total WSFU for a fixture is found by:",
      choices: ["Adding its cold and hot values", "Reading the total column of Table E103.3", "Multiplying its flow rate by 2", "Guessing from the fixture's size"],
      answer: 1,
      explanation: "Correct: (b). The table's total column is the value to use. (a) Cold plus hot is larger than the total, because a fixture drawing both draws less of each. (c) There is no such formula. (d) Values come from the table, never from guessing."
    },
    {
      q: "50 WSFU on the flush-tank demand curve equals:",
      choices: ["14.6 gpm", "19.6 gpm", "29.1 gpm", "43.5 gpm"],
      answer: 2,
      explanation: "Correct: (c). 50 FU = 29.1 gpm. (a) 14.6 gpm is 10 FU. (b) 19.6 gpm is 20 FU. (d) 43.5 gpm is 100 FU."
    },
    {
      q: "Table 604.3 requires a shower to receive at least:",
      choices: ["4 gpm at 20 psi", "2 gpm at 8 psi", "25 gpm at 25 psi", "1.5 gpm at 8 psi"],
      answer: 1,
      explanation: "Correct: (b). Shower = 2 gpm at 8 psi. (a) That is a bathtub. (c) That is a flushometer-valve water closet. (d) That is a private lavatory."
    },
    {
      q: "The demand curve is non-linear because:",
      choices: ["Pipe friction is unpredictable", "The chance that all fixtures run at once falls as the building gets bigger", "Water pressure varies by season", "Fixture units are rounded up"],
      answer: 1,
      explanation: "Correct: (b). Probability is the whole basis of the Hunter method. (a) Friction is a separate sizing input. (c) Seasonal pressure variation is not part of the curve. (d) Rounding does not shape the curve."
    },
    {
      q: "Pipe size in Appendix E is selected using:",
      choices: ["Total WSFU, available pressure, and developed length", "The number of fixtures only", "The building's roof area", "The water heater size"],
      answer: 0,
      explanation: "Correct: (a). All three inputs drive the sizing tables. (b) Fixture count alone ignores pressure and length. (c) Roof area is for storm drainage. (d) The water heater does not size the distribution piping."
    },
    {
      q: "A public flushometer water closet carries 10.0 WSFU, while a private tank water closet carries 2.2, mainly because:",
      choices: ["Public toilets are larger", "The flushometer draws a large flow in a few seconds, while a tank refills slowly", "Public water is colder", "Tank toilets are illegal in public buildings"],
      answer: 1,
      explanation: "Correct: (b). The instantaneous draw is what the fixture unit captures. (a) Physical size is not the driver. (c) Water temperature does not set fixture units. (d) Tank toilets are not illegal in public buildings."
    }
  ],
  studyGuide: `
<h3>Module 5 — Water Supply Sizing: Quick Reference</h3>
<p><strong>WSFU (Appendix E Table E103.3):</strong> Private flush-tank WC 2.2 · Public flush-tank WC 5.0 · Public flushometer WC 10.0 · Private lavatory 0.7 · Public lavatory 2.0 · Private tub/shower 1.4 · Public shower 4.0 · Private kitchen sink 1.4. Read the TOTAL column — never add cold + hot.</p>
<p><strong>Demand curve (flush tank):</strong> 10 FU = 14.6 gpm · 20 FU = 19.6 gpm · 50 FU = 29.1 gpm · 100 FU = 43.5 gpm. Non-linear: doubling FU does not double flow.</p>
<p><strong>Table 604.3 minimums:</strong> Bathtub 4 gpm @ 20 psi · Shower 2 gpm @ 8 psi · Lavatory private 1.5 gpm @ 8 psi · Tank WC 3 gpm @ 15–20 psi · Flushometer WC 25 gpm @ 25 psi · Dishwasher 2.75 gpm @ 8 psi.</p>
<p><strong>Sizing:</strong> Total WSFU + available pressure + developed length → Appendix E pipe-sizing tables. Table 604.5 gives minimum fixture supply sizes. Pressure over 80 psi at a fixture needs a PRV.</p>
<p><strong>Self-check:</strong> Size the worked house in this module (9.3 WSFU) from memory, then check your total and flow against the module. If both match, you have the method.</p>
`
};
