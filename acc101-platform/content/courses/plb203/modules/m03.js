// Plumbing 203 - Module 3: Leak Detection & Repair Strategy
module.exports = {
  number: 3,
  slug: "leak-detection-repair-strategy",
  title: "Leak Detection & Repair Strategy",
  estTime: "3–4 hours",
  objectives: [
    "Tell supply leaks, drain leaks, and non-plumbing water apart by their signs.",
    "Use the meter test and isolation tests to locate a hidden leak step by step.",
    "Explain how acoustic listening, thermal imaging, and pressure testing help find leaks that cannot be seen.",
    "Choose a repair strategy: spot repair, section replacement, or full re-pipe — and explain the trade-offs.",
    "Plan a leak repair that limits water damage, protects the building, and is tested before you leave."
  ],
  sections: [
    {
      heading: "What Kind of Water Is It?",
      html: `
<p>Not every wet spot is a plumbing leak, and the first job is to sort out what kind of water you are looking at. A plumber who repairs a pipe when the water is coming through the roof has sold a repair that cannot work — and lost the customer's trust when the spot comes back after the next rain.</p>
<p><strong>Supply leaks</strong> are under pressure, so they leak all the time — day and night, rain or shine. The water is usually clean, the meter test shows flow with everything off, and the damage grows steadily. A supply leak in a wall shows as a stain that keeps spreading, paint that bubbles, or a floor that stays damp. A supply leak under a slab shows as a warm spot on the floor (hot side), the sound of running water when nothing is on, or a water bill that jumps for no reason.</p>
<p><strong>Drain leaks</strong> only leak when water runs through the drain. The stain grows after showers, laundry, or dishwashing, and stays dry between uses. The water may smell, and the damage is often worse around the trap, the tub overflow, or the toilet flange. If the spot is dry in the morning and wet after the evening shower, think drain, not supply.</p>
<p><strong>Non-plumbing water</strong> includes roof leaks, window and flashing leaks, condensation, and groundwater. Roof leaks appear with rain and often track along framing before they drip, far from the roof defect. Condensation forms on cold pipes and ducts in humid air and drips like a leak. Groundwater appears in basements after heavy rain. Your job is to say so plainly when the water is not yours to fix — and to prove it with a test, such as shutting off the water and watching the spot stay wet, or running the fixtures and watching it stay dry.</p>
<div class="callout"><strong>Key idea:</strong> Supply leaks leak all the time. Drain leaks leak only when the fixture runs. Roof and rain leaks leak only when it rains. The timing of the water is the first clue to its source.</div>`
    },
    {
      heading: "Finding the Leak: The Isolation Ladder",
      html: `
<p>Hidden leaks are found by the same isolation method as Module 1: cut the system in half, test, and cut again. The ladder runs like this:</p>
<p><strong>Rung 1 — Meter test.</strong> Everything off, watch the flow indicator. Moving means a supply leak somewhere. Still means the supply side holds, so look at drains or non-plumbing sources.</p>
<p><strong>Rung 2 — House valve.</strong> Close it. Meter still moving means the leak is in the service line between the meter and the house. Meter stopped means the leak is inside.</p>
<p><strong>Rung 3 — Hot versus cold.</strong> Shut off the water heater's supply. Meter stopped means the leak is on the hot side. Still moving means it is on the cold side. A warm spot on a slab floor is a strong hint the hot side is the one to chase.</p>
<p><strong>Rung 4 — Fixture by fixture.</strong> Close angle stops one at a time and watch the meter after each one. When the meter stops, the last fixture you isolated is the source — or the branch feeding it is.</p>
<p><strong>Rung 5 — Section by section.</strong> If no single fixture is the cause, the leak is in the piping between fixtures. This is where listening equipment and pressure testing come in, and where you start deciding whether to open a wall or reroute the line instead.</p>
<p>Write down the result at every rung. A leak you cannot find is usually a leak whose tests were not written down — and a second plumber will start the whole ladder over from the beginning if your notes are missing.</p>
<div class="callout"><strong>Key idea:</strong> The isolation ladder is meter → house valve → hot/cold → fixture → section. Each rung halves the search. Skip a rung and you will open the wrong wall.</div>`
    },
    {
      heading: "Tools for Leaks You Cannot See",
      html: `
<p>Some leaks announce themselves with a stain. The hard ones do not, and three tools help you find them without opening every wall in the building.</p>
<p><strong>Acoustic listening</strong> uses a sensitive ground microphone or listening stick to hear the hiss of pressurized water escaping a pipe. A supply leak makes a distinct high-frequency sound that travels along the pipe and through the slab or soil. You listen at fixtures, at the meter, and along the suspected run, and the sound gets loudest nearest the leak. It takes practice — a running toilet, a refrigerator line, or a neighbor's irrigation can all sound like a leak to an untrained ear — so always confirm with the meter test first.</p>
<p><strong>Thermal imaging</strong> uses an infrared camera to see temperature differences. A hot-water leak under a slab shows as a warm patch on the floor; a cold-water leak can show as a cool patch. Thermal cameras are excellent for hot-side slab leaks and for finding radiant-heating leaks, but they show temperature, not water — a sun-warmed floor or a heating duct can look like a leak, so the image must be checked against the meter and isolation tests.</p>
<p><strong>Pressure testing</strong> isolates a section of pipe, caps it, and watches a gauge. A section that holds pressure is sound; a section that loses pressure has a leak. Pressure testing is the proof test for new work and for suspect sections alike — but it is a test, not a repair, and it must be done at a safe pressure for the pipe material, with the system drained of air and the customer warned that water will be off during the test.</p>
<div class="callout"><strong>Key idea:</strong> Listening, thermal imaging, and pressure testing each answer a different question: where is the sound, where is the heat, and which section holds pressure? No single tool proves a leak by itself — use at least two.</div>`
    },
    {
      heading: "Repair Strategy: Spot Fix, Section, or Re-Pipe?",
      html: `
<p>Finding the leak is half the job. The other half is choosing the repair, and the choice is a trade-off between cost today and reliability tomorrow. Walk the customer through the options honestly.</p>
<p><strong>Spot repair</strong> fixes the single failed joint or pinhole: cut out the bad section, fit a coupling or a new fitting, and test. It is the right call when the rest of the pipe is sound, the material has life left, and the leak was caused by one defect — a bad solder joint, a nicked pipe, a failed fitting. It is the wrong call when the pipe is failing everywhere and the next leak is a month away.</p>
<p><strong>Section replacement</strong> replaces the run from one accessible point to another — for example, the whole branch to a bathroom, or the service line from the meter to the house. It costs more than a spot repair but removes the most failure-prone stretch. It is the right call when a section shows repeated leaks, heavy corrosion, or damage from freezing.</p>
<p><strong>Re-piping</strong> replaces the building's water distribution system, or a whole system within it (all hot, all cold, or the whole house). It is the biggest job and the right call when the piping material has reached the end of its life — widespread pinholes in old copper, corroded galvanized pipe with flow choked by rust, or polybutylene pipe known for failures. A re-pipe is also the moment to fix design problems: add shutoffs at every fixture, size the lines properly, and route new pipe where it can be reached next time.</p>
<p>Whatever the strategy, protect the building while you work: shut off and drain the section, lay down protection, and keep a bucket and towels at the cut. A leak repair that floods a room while fixing a pipe is a job done badly.</p>
<div class="callout"><strong>Key idea:</strong> One pinhole in sound pipe gets a spot repair. Repeated leaks in tired pipe get a section or a re-pipe. The cheapest repair is the one you only do once.</div>`
    },
    {
      heading: "Module Recap and Common Mistakes",
      html: `
<p><strong>Takeaways:</strong></p>
<ul>
<li>Sort the water first: supply leaks run constantly, drain leaks run only with the fixture, rain leaks run only with rain.</li>
<li>Climb the isolation ladder: meter → house valve → hot/cold → fixture → section, writing down each result.</li>
<li>Acoustic listening finds the sound, thermal imaging finds the heat, pressure testing proves which section holds — confirm with at least two methods.</li>
<li>Choose the repair by the pipe's condition: spot repair for one defect in sound pipe, section replacement for a failing run, re-pipe for a failing system.</li>
<li>Test every repair under pressure and watch it before you leave.</li>
</ul>
<div class="callout"><strong>Common mistake:</strong> Opening a wall at the stain. Water travels along joists and pipes, so the stain is where water lands, not where it starts. Isolate first, open second — and open at the source you proved.</div>
<div class="callout"><strong>Common mistake:</strong> Spot-repairing a pipe that is failing everywhere. The third pinhole in the same run is not bad luck; it is the pipe telling you it is done. Quote the section or the re-pipe honestly instead of selling another temporary fix.</div>
<p><strong>Ready-to-work link:</strong> Module 4 applies the same thinking to fixtures and appliances: a leaking faucet, a running toilet, and a failing water heater each have their own tells, and the same test-first discipline decides the repair.</p>`
    }
  ],
  keyTerms: [
    { term: "Supply leak", def: "A leak in pressurized water piping that leaks continuously, day and night." },
    { term: "Drain leak", def: "A leak in a drain or waste pipe that leaks only when water runs through it." },
    { term: "Slab leak", def: "A leak in piping buried in or under a concrete slab floor." },
    { term: "Acoustic listening", def: "Using a sensitive microphone to hear the hiss of pressurized water escaping a pipe." },
    { term: "Thermal imaging", def: "Using an infrared camera to see temperature differences, such as a hot-water leak warming a floor." },
    { term: "Pressure test", def: "Isolating a section of pipe and watching a gauge for pressure loss that proves a leak." },
    { term: "Pinhole leak", def: "A tiny corrosion hole in copper pipe that sprays a fine jet of water." },
    { term: "Spot repair", def: "Repairing only the single failed joint or section of pipe." },
    { term: "Section replacement", def: "Replacing a whole run of pipe between two accessible points." },
    { term: "Re-pipe", def: "Replacing a building's water distribution piping, or a whole system within it." },
    { term: "Polybutylene", def: "A gray plastic water-supply pipe used from the late 1970s to the mid-1990s, known for failures and now replaced." },
    { term: "Galvanized pipe", def: "Steel pipe coated with zinc; it corrodes from the inside over time, choking flow and eventually leaking." },
    { term: "Service line", def: "The water pipe running from the meter or street main to the building." },
    { term: "Isolation ladder", def: "The step-by-step sequence of tests that narrows a leak from the whole system to one section." },
    { term: "Water damage", def: "Damage to a building from leaking water — stains, rot, mold growth, and ruined finishes." }
  ],
  video: {
    title: "Find and fix leaks",
    embedUrl: "https://www.youtube.com/embed/HQvBRrNWqTU",
    note: "The Southern Nevada Water Authority's guide to finding household leaks, including the meter test. Watch how the meter becomes the first and best leak detector.",
    more: [
      { title: "Diagnosing Home Water Leaks: Where is my indoor shutoff?", url: "https://www.youtube.com/watch?v=Z5x7WqK1OEg" }
    ]
  },
  assignment: [
    {
      prompt: "<p><strong>Problem 1.</strong> A customer's water bill doubled, but no fixture is visibly leaking and nothing looks wet. Walk through the first three rungs of the isolation ladder and say what each result would mean.</p>",
      solution: "<p><strong>Solution:</strong> Step 1: Meter test — everything off, watch the flow indicator. Moving means a supply leak; still means the bill rise is not a supply leak (check the meter reading history, a running toilet, or a billing error). Step 2: House valve — close it. Meter still moving means the service line leaks; stopped means the leak is inside. Step 3: Hot versus cold — shut off the water heater supply. Meter stopped means the hot side leaks; still moving means the cold side leaks. Each rung halves the search before any wall is opened.</p>"
    },
    {
      prompt: "<p><strong>Problem 2.</strong> A ceiling stain below a bathroom is wet after showers but dry in the morning. Is this a supply leak or a drain leak, and what test confirms it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: It behaves like a drain leak — it appears only when the fixture runs. Step 2: Run the shower with the drain plugged and the tub filled, then release it, while watching from below. Step 3: If water appears only when the drain runs, the fault is in the drain, trap, or tub overflow. Step 4: If the stain is wet even with the drain unused and the supply on, re-test as a supply leak with the meter test.</p>"
    },
    {
      prompt: "<p><strong>Problem 3.</strong> A thermal camera shows a warm patch on a slab floor, and the meter test shows flow with everything off. Shutting off the water heater supply stops the meter. What have you proven, and what is your next step?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: You have proven a hot-side supply leak under the slab, in the area of the warm patch — two independent methods agree. Step 2: Do not dig yet: use acoustic listening to narrow the spot further along the hot run. Step 3: Present the options to the customer: a spot repair through the slab, or rerouting the hot line overhead or through walls to avoid breaking the slab. Step 4: Explain the trade-off — the spot repair is cheaper now but the rest of the buried line is the same age.</p>"
    },
    {
      prompt: "<p><strong>Problem 4.</strong> A copper water line in a 40-year-old house has had three pinhole leaks in the same run in two years. The customer asks for another spot repair. What do you recommend, and how do you explain it?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: Recommend section replacement of that run, and explain why. Step 2: Three pinholes in one run mean the pipe wall is thinning along the whole run, not just at one point — the next leak is a matter of time. Step 3: A spot repair fixes today's hole and leaves the rest of the weakened pipe in place, so the customer pays for another emergency visit soon. Step 4: A section replacement costs more once and removes the failing stretch; offer to inspect the rest of the system while you are there.</p>"
    },
    {
      prompt: "<p><strong>Problem 5.</strong> A basement wall is wet after heavy rain, but the meter test is still and the drains test fine. What is your conclusion, and what do you tell the customer?</p>",
      solution: "<p><strong>Solution:</strong> Step 1: The water is not plumbing — the meter proves the supply holds and the drains are sound, and the timing follows rain. Step 2: The likely sources are groundwater, a foundation crack, a failed exterior drain, or surface water grading toward the house. Step 3: Tell the customer plainly that a plumber cannot fix this with pipe work, and recommend a waterproofing or drainage contractor. Step 4: Document the tests you ran so the next contractor starts from your findings, not from zero.</p>"
    },
    {
      prompt: "<p><strong>Problem 6.</strong> You pressure-test a suspect section of pipe. The gauge holds steady for 15 minutes. Then you pressure-test the next section and the gauge falls slowly. What does each result mean, and what do you do next?</p>",
      solution: "<p><strong>Answer:</strong> Step 1: The first section holds pressure, so it is sound — the leak is not there. Step 2: The second section loses pressure, so it has a leak. Step 3: Narrow further within that section with acoustic listening or by splitting it again with a cap and a second test. Step 4: Once the leak's location is proven, choose the repair — spot repair if the rest of that section is sound — and re-test the repair under pressure before leaving.</p>"
    }
  ],
  quiz: [
    {
      q: "A wet ceiling stain that appears only after showers and is dry in the morning is most likely:",
      choices: ["A supply leak", "A drain leak", "A roof leak", "A slab leak"],
      answer: 1,
      explanation: "Correct: (b). Drain leaks only leak when water runs through the drain, so the timing matches shower use. (a) A supply leak runs constantly and would keep the stain wet. (c) A roof leak follows rain, not showers. (d) A slab leak is under a concrete floor, not above a ceiling."
    },
    {
      q: "The first rung of the leak isolation ladder is:",
      choices: ["Opening the wall at the stain", "The meter test with everything off", "Pressure-testing every section", "Replacing the oldest pipe"],
      answer: 1,
      explanation: "Correct: (b). The meter test proves whether a supply leak exists at all, before any destructive work. (a) opens the wrong wall — water travels. (c) pressure testing comes later, after the leak is narrowed. (d) replaces pipe without a diagnosis."
    },
    {
      q: "Closing the house valve stops the meter. This proves the leak is:",
      choices: ["In the service line between the meter and the house", "Inside the house", "In the water heater only", "Not a leak at all"],
      answer: 1,
      explanation: "Correct: (b). With the house isolated, a stopped meter means the water was escaping inside the house. (a) would be proven if the meter kept moving with the valve closed. (c) is only one possible inside location — the hot/cold test would narrow it further. (d) contradicts the meter's original movement."
    },
    {
      q: "Thermal imaging is most useful for finding:",
      choices: ["A cold-water leak in a wall with no temperature difference", "A hot-water leak warming a slab floor", "A drain leak in a dry pipe", "The exact depth of a sewer line"],
      answer: 1,
      explanation: "Correct: (b). A hot leak warms the floor above it, which an infrared camera can see. (a) a cold leak with no temperature difference has nothing for the camera to show. (c) a drain leak does not run continuously and usually shows no heat signature. (d) depth comes from a camera sonde and locator, not from temperature."
    },
    {
      q: "Acoustic listening works best when it is confirmed by:",
      choices: ["Another plumber's opinion", "The meter test and isolation tests, since other sounds can mimic a leak", "The customer's guess", "The age of the pipe"],
      answer: 1,
      explanation: "Correct: (b). Many sounds — a running toilet, a refrigerator line, irrigation — can mimic a leak, so listening must be checked against the meter. (a) an opinion is not a test. (c) a guess is not evidence. (d) age suggests risk but proves nothing about this leak."
    },
    {
      q: "Three pinhole leaks in the same copper run over two years suggest:",
      choices: ["Bad luck — spot-repair each one as it appears", "The pipe wall is thinning along the run and a section replacement is the honest fix", "The water pressure is too low", "The pipe was installed last week"],
      answer: 1,
      explanation: "Correct: (b). Repeated pinholes in one run mean systemic thinning of that pipe, so the next leak is coming. (a) treats a pattern as coincidence and sells repeated temporary fixes. (c) low pressure does not cause pinholes; corrosion does. (d) a new pipe would not have three pinholes."
    },
    {
      q: "A pressure test shows one section holding steady and the next losing pressure slowly. The correct conclusion is:",
      choices: ["Both sections leak", "The first section is sound and the leak is in the second section", "The gauge is broken", "Neither section leaks"],
      answer: 1,
      explanation: "Correct: (b). A steady gauge proves the first section holds; a falling gauge proves the second leaks. (a) contradicts the first section's steady reading. (c) a broken gauge would not give a clean steady reading on one section and a fall on the next. (d) contradicts the second section's pressure loss."
    },
    {
      q: "A basement wall is wet only after heavy rain, the meter test is still, and the drains test fine. The best conclusion is:",
      choices: ["A hidden supply leak", "A drain leak", "Groundwater or exterior drainage — not a plumbing leak", "A slab leak"],
      answer: 2,
      explanation: "Correct: (c). The still meter rules out a supply leak, the drain tests rule out a drain leak, and the rain timing points to groundwater or grading. (a) is ruled out by the meter test. (b) is ruled out by the drain tests. (d) a slab leak would show on the meter test and would not follow rain."
    }
  ],
  studyGuide: `
<h3>Module 3 — Leak Detection & Repair Strategy: Quick Reference</h3>
<p><strong>Sort the water:</strong> Supply = always leaking. Drain = only when the fixture runs. Rain/groundwater = only with weather.</p>
<p><strong>Isolation ladder:</strong> Meter test → house valve (inside vs. service line) → hot/cold shutoff → fixture angle stops → section pressure test.</p>
<p><strong>Finding tools:</strong> Acoustic listening hears the hiss; thermal imaging sees hot-side heat; pressure testing proves which section holds. Confirm with at least two.</p>
<p><strong>Repair choice:</strong> Spot repair = one defect in sound pipe. Section replacement = a failing run. Re-pipe = a failing system (widespread pinholes, choked galvanized, polybutylene).</p>
<p><strong>Watch out:</strong> Never open a wall at the stain before isolating, and never spot-repair a pipe that is failing everywhere.</p>
<p><strong>Self-check:</strong> A customer's bill doubled with no visible leak. Write out the isolation ladder with the exact test at each rung and what each of the two outcomes would mean.</p>
`
};
